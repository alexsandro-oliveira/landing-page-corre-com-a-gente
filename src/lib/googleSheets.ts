import { FormData } from './validations'

// Configuração para Google Sheets via Google Apps Script
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''

export async function submitToGoogleSheets(
  data: FormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Se não houver URL configurada, simula o envio
    if (!GOOGLE_SCRIPT_URL) {
      console.log('Dados do formulário (simulação):', data)

      // Simula delay de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      return {
        success: true,
        message:
          'Inscrição realizada com sucesso! (Modo simulação - configure GOOGLE_SCRIPT_URL para integração real)',
      }
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        distancia: data.distancia,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      return {
        success: true,
        message:
          'Inscrição realizada com sucesso! Em breve você receberá mais informações sobre o evento no seu email.',
      }
    } else {
      throw new Error(result.message || 'Erro desconhecido')
    }
  } catch (error) {
    console.error('Erro ao enviar dados para Google Sheets:', error)

    return {
      success: false,
      message:
        'Erro ao processar sua inscrição. Tente novamente em alguns instantes.',
    }
  }
}

// Função para criar o Google Apps Script (documentação)
export const createGoogleAppsScript = () => {
  return `
// Google Apps Script para receber dados do formulário
// 1. Crie uma nova planilha no Google Sheets
// 2. Vá em Extensions > Apps Script
// 3. Cole este código e salve
// 4. Execute a função setup() uma vez
// 5. Publique como web app (Execute as: Me, Access: Anyone)

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Adiciona os dados na planilha
    sheet.appendRow([
      new Date(),
      data.nome,
      data.email,
      data.telefone,
      data.distancia
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Dados salvos com sucesso!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function setup() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Cria cabeçalhos se a planilha estiver vazia
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Data/Hora', 'Nome', 'Email', 'Telefone', 'Distância']);
  }
}
`
}
