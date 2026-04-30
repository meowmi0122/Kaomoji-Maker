"use client"

import { useI18n, Language } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const languages: { code: Language; label: string }[] = [
  { code: "zh-TW", label: "繁體中文" },
  { code: "zh-CN", label: "简体中文" },
  { code: "en", label: "English" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
            language === lang.code
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
