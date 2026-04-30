"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Language = "en" | "zh-TW" | "zh-CN"

const translations = {
  en: {
    title: "Make your own Kaomoji",
    subtitle: "(⊙v⊙)",
    base: "Base",
    eyes: "Eyes",
    mouth: "Mouth/Nose",
    arms: "Arms",
    accessories: "Accessory/Decor",
    copy: "Copy",
    copied: "Copied!",
    randomize: "Randomize",
    reset: "Reset",
    none: "∅",
    languageLabel: "Language",
  },
  "zh-TW": {
    title: "製作你的顏文字",
    subtitle: "(⊙v⊙)",
    base: "基底",
    eyes: "眼睛",
    mouth: "嘴巴/鼻子",
    arms: "手臂",
    accessories: "裝飾配件",
    copy: "複製",
    copied: "已複製！",
    randomize: "隨機",
    reset: "重置",
    none: "∅",
    languageLabel: "語言",
  },
  "zh-CN": {
    title: "制作你的颜文字",
    subtitle: "(⊙v⊙)",
    base: "基底",
    eyes: "眼睛",
    mouth: "嘴巴/鼻子",
    arms: "手臂",
    accessories: "装饰配件",
    copy: "复制",
    copied: "已复制！",
    randomize: "随机",
    reset: "重置",
    none: "∅",
    languageLabel: "语言",
  },
}

type TranslationKey = keyof (typeof translations)["en"]

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh-TW")

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
