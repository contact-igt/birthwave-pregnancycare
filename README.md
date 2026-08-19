# The Birth Wave – Pregnancy & Antenatal Care (Standalone Landing Page)

A standalone Next.js 16 landing page for **Pregnancy & Antenatal Care** with Dr. Santoshi Nandigam at The Birth Wave, Nungambakkam, Chennai.

## Features

- **Next.js 16 (App Router)** with React 19 & Turbopack
- **Tailwind CSS v4** design system matching The Birth Wave desktop & mobile guidelines
- **Google Tag Manager (GTM)** tracking pre-configured (`GTM-PW4F5S6P`) with `dataLayer` analytics
- **Interactive Video Experience** with auto-play on viewport entry & sound toggle
- **Lead Generation System** (`/api/leads`) with rate-limiting, validation, and Google Sheets integration
- **Responsive Mobile Experience** with Quick Actions (Call / WhatsApp direct action bar)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Create a `.env.local` file (or copy from `.env.example`):
```env
NEXT_PUBLIC_GTM_ID=GTM-PW4F5S6P
GOOGLE_SHEETS_WEBHOOK_URL=
LEADS_WEBHOOK_URL=
LEADS_ADMIN_EMAILS=
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```
