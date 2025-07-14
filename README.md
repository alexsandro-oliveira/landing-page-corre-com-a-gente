# 🏃‍♂️ Corre com a Gente! - Event Landing Page

> Uma landing page moderna e responsiva para eventos de corrida e caminhada em Portugal, construída com Next.js 15, TypeScript e Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Integração com Google Sheets](#integração-com-google-sheets)
- [Responsividade](#responsividade)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

**Corre com a Gente!** é uma landing page para eventos de corrida e caminhada em Portugal. O projeto foi desenvolvido com foco em:

- **Experiência do usuário**: Interface intuitiva e responsiva
- **Performance**: Otimizada para carregamento rápido
- **Acessibilidade**: Compatível com diferentes dispositivos e tamanhos de tela
- **Integração**: Formulário conectado ao Google Sheets para coleta de dados

### 🌟 Destaques

- ✅ **Responsivo**: Suporte completo para dispositivos móveis (até 320px)
- ✅ **Moderno**: Built with Next.js 15 App Router
- ✅ **Validação**: Validação de formulários com Zod
- ✅ **Integração**: Conexão direta com Google Sheets
- ✅ **Animações**: Componentes animados com Framer Motion
- ✅ **SEO**: Otimizado para motores de busca

## 🚀 Funcionalidades

### 📱 Interface Principal

- **Hero Section**: Apresentação do evento com call-to-action
- **Sobre o Evento**: Informações detalhadas sobre o evento
- **Influencers**: Seção com personalidades do esporte
- **Formulário de Inscrição**: Registro completo dos participantes
- **Footer**: Informações de contato e links úteis

### 📝 Formulário de Inscrição

- **Validação em tempo real**: Feedback imediato ao usuário
- **Campos obrigatórios**: Nome, email, telefone, contato de emergência
- **Campos opcionais**: Idade, cidade, distância, experiência
- **Feedback visual**: Indicadores de loading e mensagens de sucesso/erro
- **Integração automática**: Dados enviados diretamente ao Google Sheets

### 🎨 Componentes Animados

- **SlideArrowButton**: Botões com animação de seta
- **Responsive Design**: Adaptação automática para diferentes telas

## 🛠 Tecnologias Utilizadas

### Frontend

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário

### Formulários e Validação

- **[React Hook Form](https://react-hook-form.com/)** - Biblioteca para gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Schema validation

### UI Components

- **[Lucide React](https://lucide.dev/)** - Ícones SVG
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de interface reutilizáveis

### Integração e APIs

- **[Google Sheets API](https://developers.google.com/sheets/api)** - Integração com planilhas

## 📋 Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm** ou **yarn** para gerenciamento de pacotes
- **Conta Google** com Google Sheets API habilitada
- **Service Account** do Google Cloud Platform

## 🔧 Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/alexsandro-oliveira/landing-page-corre-com-a-gente.git
   cd landing-page-corre-com-a-gente
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**

   ```bash
   cp .env.example .env.local
   ```

4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação**

   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Google Sheets API Configuration
GOOGLE_CLIENT_EMAIL=your-service-account-email@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

### Configuração do Google Cloud Platform

1. **Crie um projeto no Google Cloud Console**

   - Acesse [Google Cloud Console](https://console.cloud.google.com/)
   - Crie um novo projeto ou selecione um existente

2. **Ative a Google Sheets API**

   - Vá para "APIs e Serviços" > "Biblioteca"
   - Procure por "Google Sheets API" e ative

3. **Crie uma Service Account**

   - Vá para "APIs e Serviços" > "Credenciais"
   - Clique em "Criar credenciais" > "Conta de serviço"
   - Baixe o arquivo JSON com as credenciais

4. **Configure as variáveis de ambiente**

   - Extraia `client_email` e `private_key` do arquivo JSON
   - Cole no arquivo `.env.local`

5. **Compartilhe a planilha**
   - Crie uma planilha no Google Sheets
   - Compartilhe com o email da service account (permissão de edição)
   - Copie o ID da planilha da URL

## 🎮 Uso

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Executa o linter
npm run lint

# Gera build de produção
npm run build

# Inicia o servidor de produção
npm start
```

### Estrutura dos Dados no Google Sheets

O formulário envia os dados na seguinte ordem:

| Coluna | Campo                  | Tipo      | Obrigatório |
| ------ | ---------------------- | --------- | ----------- |
| A      | Timestamp              | Data/Hora | ✅          |
| B      | Nome Completo          | Texto     | ✅          |
| C      | Email                  | Email     | ✅          |
| D      | Telefone               | Texto     | ✅          |
| E      | Contato de Emergência  | Texto     | ❌          |
| F      | Telefone de Emergência | Texto     | ❌          |

## 📁 Estrutura do Projeto

```
evento-tha-e-loly/
├── public/                     # Arquivos estáticos
│   ├── logo_uaifit_pq.png     # Logo UaiFit
│   ├── vivian_logo.png        # Logo Vivian
│   └── ...
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API Routes
│   │   │   └── submit/        # Endpoint para submissão
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes UI base
│   │   ├── common/           # Componentes comuns
│   │   ├── features/         # Componentes específicos
│   │   └── animata/          # Componentes animados
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Utilitários e configurações
│   └── types/                # Definições de tipos
├── .env.local                # Variáveis de ambiente
├── .env.example             # Exemplo de variáveis
├── components.json          # Configuração shadcn/ui
├── next.config.ts           # Configuração Next.js
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── package.json            # Dependências e scripts
```

## 📜 Scripts Disponíveis

| Script    | Comando         | Descrição                          |
| --------- | --------------- | ---------------------------------- |
| **dev**   | `npm run dev`   | Inicia servidor de desenvolvimento |
| **build** | `npm run build` | Gera build de produção             |
| **start** | `npm run start` | Inicia servidor de produção        |
| **lint**  | `npm run lint`  | Executa verificação de código      |

### 🔗 Integração com Google Sheets

A aplicação oferece integração completa com Google Sheets para coleta e consulta de dados:

#### Endpoints Disponíveis

- **POST `/api/submit`**: Adiciona nova inscrição
- **GET `/api/submit`**: Consulta inscrições existentes com paginação

#### Fluxo de Dados

1. **Usuário preenche formulário** → Validação client-side com Zod
2. **Dados validados** → Enviados via POST para `/api/submit`
3. **API processa** → Autentica com Google Sheets API
4. **Dados salvos** → Adicionados à planilha automaticamente
5. **Feedback** → Usuário recebe confirmação de sucesso

#### Consulta de Dados (GET)

```javascript
// Buscar primeiras 50 inscrições
const response = await fetch('/api/submit')

// Buscar com paginação
const response = await fetch('/api/submit?limit=20&offset=40')

// Exemplo de resposta
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

#### Painel Administrativo

Acesse `/admin` para visualizar todas as inscrições com:

- **Paginação automática**: Carregamento eficiente de dados
- **Exportação CSV**: Download dos dados para análise
- **Atualização em tempo real**: Refresh dos dados
- **Interface responsiva**: Funciona em mobile e desktop

Para testes da API, acesse `/admin/test`

### Exemplo de Resposta da API

```typescript
// Sucesso
{
  "success": true,
  "data": {
    "spreadsheetId": "1y2p8Hx2dVHoQDaXxv4bmPIYakZLBe6QiKgTNHsUjmh4",
    "updatedRows": 1
  }
}

// Erro
{
  "success": false,
  "error": "Failed to write to Google Sheets",
  "details": "Error message details"
}
```

## 📱 Responsividade

O projeto foi desenvolvido com **mobile-first approach** e suporte completo para:

### Breakpoints Customizados

```typescript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      xs: '320px', // Dispositivos extra pequenos
      sm: '640px', // Dispositivos pequenos
      md: '768px', // Tablets
      lg: '1024px', // Laptops
      xl: '1280px', // Desktops
      '2xl': '1536px', // Telas grandes
    },
  },
}
```

### Testes de Responsividade

- ✅ **iPhone SE** (375x667)
- ✅ **Samsung Galaxy S20** (360x800)
- ✅ **iPhone 12 Pro** (390x844)
- ✅ **iPad** (768x1024)
- ✅ **Desktop** (1920x1080)
- ✅ **Dispositivos ultra-wide** (2560x1440)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Diretrizes de Contribuição

- Siga os padrões de código existentes
- Mantenha commits atômicos e bem descritos
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

- **Alexsandro Oliveira** - _Desenvolvedor Principal_ - [@alexsandro-oliveira](https://github.com/alexsandro-oliveira)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pela excelente framework
- [Tailwind CSS](https://tailwindcss.com/) pelo sistema de design
- [shadcn/ui](https://ui.shadcn.com/) pelos componentes base
- [Lucide](https://lucide.dev/) pelos ícones
- [Google](https://developers.google.com/) pela API do Sheets

---

<div align="center">
  <p>Feito com ❤️ em Portugal 🇵🇹</p>
  <p>
    <a href="#-corre-com-a-gente---event-landing-page">Voltar ao topo</a>
  </p>
</div>
