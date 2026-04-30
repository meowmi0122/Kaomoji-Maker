"use client"

import { I18nProvider, useI18n } from "@/lib/i18n"
import { KaomojiMaker } from "@/components/kaomoji-maker"
import { LanguageSwitcher } from "@/components/language-switcher"

function Header() {
  const { t } = useI18n()
  
  return (
    <header className="bg-primary text-primary-foreground py-8 md:py-12 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold text-balance">
          {t("title")}
        </h1>
        <p className="text-3xl md:text-5xl">{t("subtitle")}</p>
      </div>
    </header>
  )
}

function MainContent() {
  return (
    <main className="flex-1 py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <LanguageSwitcher />
        </div>
        <KaomojiMaker />
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <MainContent />
      </div>
    </I18nProvider>
  )
}
