import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

type SheetForm = {
  name: string
  email: string
  phone: string
  age: number
  city: string
  distance: string
  experience: string
  emergencyContact: string
  emergencyPhone: string
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SheetForm

    const auth = new google.auth.GoogleAuth({
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
