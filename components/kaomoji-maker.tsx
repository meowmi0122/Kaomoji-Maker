"use client"

import { useState, useCallback } from "react"
import { Copy, Check, Shuffle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import {
  baseParts,
  eyeParts,
  mouthParts,
  armParts,
  accessoryParts,
} from "@/lib/kaomoji-data"
import { cn } from "@/lib/utils"

interface SelectionState {
  base: string
  eyes: string
  mouth: string
  arms: string
  accessories: string
}

const defaultSelection: SelectionState = {
  base: "paren",
  eyes: "caret",
  mouth: "undertie",
  arms: "none",
  accessories: "none",
}

export function KaomojiMaker() {
  const { t } = useI18n()
  const [selection, setSelection] = useState<SelectionState>(defaultSelection)
  const [copied, setCopied] = useState(false)

  const generateKaomoji = useCallback(() => {
    const base = baseParts.find((p) => p.id === selection.base)
    const eyes = eyeParts.find((p) => p.id === selection.eyes)
    const mouth = mouthParts.find((p) => p.id === selection.mouth)
    const arms = armParts.find((p) => p.id === selection.arms)
    const accessories = accessoryParts.find((p) => p.id === selection.accessories)

    // Eyes now have separate left and right symbols for mirroring
    const leftEye = eyes?.left || ""
    const rightEye = eyes?.right || ""
    const mouthSymbol = mouth?.symbol || ""
    
    // Build the face with proper eye mirroring
    let face = ""
    if (leftEye && mouthSymbol) {
      face = `${leftEye}${mouthSymbol}${rightEye}`
    } else if (leftEye) {
      face = `${leftEye}${rightEye}`
    } else if (mouthSymbol) {
      face = mouthSymbol
    }

    // Add base
    const baseLeft = base?.left || ""
    const baseRight = base?.right || ""
    let kaomoji = `${baseLeft}${face}${baseRight}`

    // Add arms
    if (arms && arms.id !== "none") {
      if (arms.id === "shrug" || arms.id === "muscle") {
        kaomoji = `${arms.left}${face}${arms.right}`
      } else {
        kaomoji = `${arms.left}${baseLeft}${face}${baseRight}${arms.right}`
      }
    }

    // Add accessories
    if (accessories && accessories.id !== "none") {
      kaomoji = `${accessories.left}${kaomoji}${accessories.right}`
    }

    return kaomoji
  }, [selection])

  const kaomoji = generateKaomoji()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(kaomoji)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRandomize = () => {
    setSelection({
      base: baseParts[Math.floor(Math.random() * baseParts.length)].id,
      eyes: eyeParts[Math.floor(Math.random() * eyeParts.length)].id,
      mouth: mouthParts[Math.floor(Math.random() * mouthParts.length)].id,
      arms: armParts[Math.floor(Math.random() * armParts.length)].id,
      accessories: accessoryParts[Math.floor(Math.random() * accessoryParts.length)].id,
    })
  }

  const handleReset = () => {
    setSelection(defaultSelection)
  }

  const PartSelector = ({
    label,
    parts,
    selectedId,
    onSelect,
  }: {
    label: string
    parts: Array<{ id: string; display: string }>
    selectedId: string
    onSelect: (id: string) => void
  }) => (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-foreground">{label}</h3>
      <div className="flex flex-wrap gap-1.5">
        {parts.map((part) => (
          <button
            key={part.id}
            onClick={() => onSelect(part.id)}
            className={cn(
              "min-w-[44px] h-10 px-2 rounded-lg text-sm font-medium transition-all",
              "border hover:bg-accent hover:border-primary/30",
              selectedId === part.id
                ? "bg-primary/10 border-primary text-primary"
                : "bg-card border-border text-foreground"
            )}
          >
            {part.display}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Preview */}
      <div className="relative bg-muted rounded-xl p-8 flex items-center justify-center min-h-[100px]">
        <span className="text-3xl md:text-4xl font-mono select-all">{kaomoji}</span>
      </div>

      {/* Part Selectors */}
      <div className="space-y-5">
        <PartSelector
          label={t("base")}
          parts={baseParts}
          selectedId={selection.base}
          onSelect={(id) => setSelection((s) => ({ ...s, base: id }))}
        />
        <PartSelector
          label={t("eyes")}
          parts={eyeParts}
          selectedId={selection.eyes}
          onSelect={(id) => setSelection((s) => ({ ...s, eyes: id }))}
        />
        <PartSelector
          label={t("mouth")}
          parts={mouthParts}
          selectedId={selection.mouth}
          onSelect={(id) => setSelection((s) => ({ ...s, mouth: id }))}
        />
        <PartSelector
          label={t("arms")}
          parts={armParts}
          selectedId={selection.arms}
          onSelect={(id) => setSelection((s) => ({ ...s, arms: id }))}
        />
        <PartSelector
          label={t("accessories")}
          parts={accessoryParts}
          selectedId={selection.accessories}
          onSelect={(id) => setSelection((s) => ({ ...s, accessories: id }))}
        />
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={handleCopy}
          className="w-full h-12 text-base bg-primary hover:bg-primary/90"
          size="lg"
        >
          {copied ? (
            <>
              <Check className="size-5" />
              {t("copied")}
            </>
          ) : (
            <>
              <Copy className="size-5" />
              {t("copy")}
            </>
          )}
        </Button>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleRandomize}
            className="flex-1 h-11"
          >
            <Shuffle className="size-4" />
            {t("randomize")}
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1 h-11"
          >
            <RotateCcw className="size-4" />
            {t("reset")}
          </Button>
        </div>
      </div>
    </div>
  )
}
