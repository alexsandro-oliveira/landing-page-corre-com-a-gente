# API Documentation - Submit Route

## Endpoints

### GET `/api/submit`

Consulta os dados das inscrições armazenadas no Google Sheets.

#### Parâmetros de Query (opcionais)

- `limit` (number): Número máximo de registros a retornar (padrão: 50)
- `offset` (number): Número de registros a pular (padrão: 0)

#### Exemplos de Uso

```bash
# Buscar primeiros 50 registros
GET /api/submit

# Buscar primeiros 10 registros
GET /api/submit?limit=10

# Buscar 20 registros a partir do 30º
GET /api/submit?limit=20&offset=30

# Buscar todos (sem limite)
GET /api/submit?limit=1000
```

#### Resposta de Sucesso (200)

```json
{
  "success": true,
  "data": [
    {
      "timestamp": "2025-07-14T10:30:00.000Z",
      "name": "João Silva",
      "email": "joao@email.com",
      "phone": "123456789",
      "emergencyContact": "Maria Silva",
      "emergencyPhone": "987654321"
    }
  ],
  "pagination": {
    "total": 150,
    "limit": 50,
    "offset": 0,
    "hasMore": true
  }
}
```

#### Resposta de Erro (500)

```json
{
  "success": false,
  "error": "Failed to read from Google Sheets",
  "details": "Detailed error message"
}
```

### POST `/api/submit`

Adiciona uma nova inscrição ao Google Sheets.

#### Corpo da Requisição

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "123456789",
  "age": 30,
  "city": "Lisboa",
  "distance": "10km",
  "experience": "intermediate",
  "emergencyContact": "Maria Silva",
  "emergencyPhone": "987654321"
}
```

#### Resposta de Sucesso (201)

```json
{
  "success": true,
  "data": {
    "spreadsheetId": "1y2p8Hx2dVHoQDaXxv4bmPIYakZLBe6QiKgTNHsUjmh4",
    "updatedRows": 1
  }
}
```

#### Resposta de Erro (500)

```json
{
  "success": false,
  "error": "Failed to write to Google Sheets",
  "details": "Detailed error message"
}
```

## Estrutura dos Dados no Google Sheets

| Coluna | Campo             | Tipo       | Descrição                         |
| ------ | ----------------- | ---------- | --------------------------------- |
| A      | Timestamp         | ISO String | Data/hora da inscrição            |
| B      | Name              | String     | Nome completo                     |
| C      | Email             | String     | Endereço de email                 |
| D      | Phone             | String     | Número de telefone                |
| E      | Emergency Contact | String     | Nome do contato de emergência     |
| F      | Emergency Phone   | String     | Telefone do contato de emergência |

## Autenticação

A API utiliza Google Service Account para autenticação. As credenciais são configuradas através das variáveis de ambiente:

- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SHEET_ID`

## Tratamento de Erros

Todos os endpoints retornam um formato consistente de erro:

```json
{
  "success": false,
  "error": "Human readable error message",
  "details": "Technical error details"
}
```

## Exemplo de Uso com JavaScript

```javascript
// Buscar inscrições
async function getRegistrations(limit = 50, offset = 0) {
  try {
    const response = await fetch(`/api/submit?limit=${limit}&offset=${offset}`)
    const data = await response.json()

    if (data.success) {
      console.log('Inscrições:', data.data)
      console.log('Paginação:', data.pagination)
    } else {
      console.error('Erro:', data.error)
    }
  } catch (error) {
    console.error('Erro de rede:', error)
  }
}

// Adicionar nova inscrição
async function addRegistration(formData) {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (data.success) {
      console.log('Inscrição adicionada com sucesso!')
    } else {
      console.error('Erro:', data.error)
    }
  } catch (error) {
    console.error('Erro de rede:', error)
  }
}
```
