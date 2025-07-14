import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

type SheetForm = {
  name: string
  email: string
  phone: string
  emergencyContact: string
  emergencyPhone: string
}

type SheetData = {
  timestamp: string
  name: string
  email: string
  phone: string
  emergencyContact: string
  emergencyPhone: string
}

// Função para criar autenticação do Google
async function createGoogleAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  })
}

// GET - Consultar dados da planilha
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit')
      ? parseInt(searchParams.get('limit')!)
      : 50
    const offset = searchParams.get('offset')
      ? parseInt(searchParams.get('offset')!)
      : 0

    const auth = await createGoogleAuth()
    const sheets = google.sheets({
      auth,
      version: 'v4',
    })

    // Buscar dados da planilha
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:F', // Ajuste conforme suas colunas
    })

    const rows = response.data.values || []

    // Remover cabeçalho se existir e aplicar paginação
    const dataRows = rows.slice(1 + offset, 1 + offset + limit)

    // Mapear dados para formato mais legível
    const formattedData: SheetData[] = dataRows.map((row: string[]) => ({
      timestamp: row[0] || '',
      name: row[1] || '',
      email: row[2] || '',
      phone: row[3] || '',
      emergencyContact: row[4] || '',
      emergencyPhone: row[5] || '',
    }))

    return NextResponse.json({
      success: true,
      data: formattedData,
      pagination: {
        total: rows.length - 1, // -1 para excluir cabeçalho
        limit,
        offset,
        hasMore: offset + limit < rows.length - 1,
      },
    })
  } catch (error) {
    console.error('Error reading from Google Sheets:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to read from Google Sheets',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// POST - Adicionar dados à planilha
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SheetForm

    const auth = await createGoogleAuth()
    const sheets = google.sheets({
      auth,
      version: 'v4',
    })

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:I1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            body.name,
            body.email,
            body.phone,
            body.emergencyContact,
            body.emergencyPhone,
          ],
        ],
      },
    })

    return NextResponse.json(
      {
        success: true,
        data: response.data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error writing to Google Sheets:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to write to Google Sheets',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
