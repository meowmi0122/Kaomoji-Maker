export interface KaomojiPart {
  id: string
  left: string
  right: string
  display: string
}

export const baseParts: KaomojiPart[] = [
  { id: "none", left: "", right: "", display: "∅" },
  { id: "paren", left: "(", right: ")", display: "( )" },
  { id: "curly", left: "{", right: "}", display: "{ }" },
  { id: "bracket", left: "[", right: "]", display: "[ ]" },
  { id: "double-bracket", left: "【", right: "】", display: "【 】" },
  { id: "angle-single", left: "‹", right: "›", display: "‹ ›" },
  { id: "angle-double", left: "«", right: "»", display: "« »" },
  { id: "angle-math", left: "⟨", right: "⟩", display: "⟨ ⟩" },
  { id: "angle-lt-gt", left: "<", right: ">", display: "< >" },
  { id: "angle-full", left: "＜", right: "＞", display: "＜ ＞" },
  { id: "corner", left: "「", right: "」", display: "「 」" },
  { id: "white-corner", left: "『", right: "』", display: "『 』" },
  { id: "tortoise", left: "〔", right: "〕", display: "〔 〕" },
  { id: "lenticular", left: "〖", right: "〗", display: "〖 〗" },
  { id: "double-angle", left: "《", right: "》", display: "《 》" },
  { id: "white-paren", left: "⦅", right: "⦆", display: "⦅ ⦆" },
  { id: "full-paren", left: "（", right: "）", display: "（ ）" },
  { id: "slash", left: "/", right: "\\", display: "/ \\" },
  { id: "pipe", left: "|", right: "|", display: "| |" },
  { id: "colon", left: ":", right: ":", display: ": :" },
]

// Eye parts now support asymmetric left/right symbols
export interface EyePart {
  id: string
  left: string    // Left eye symbol
  right: string   // Right eye symbol (mirrored if needed)
  display: string
}

export const eyeParts: EyePart[] = [
  { id: "none", left: "", right: "", display: "∅" },
  // Symmetric eyes
  { id: "dot", left: "•", right: "•", display: "•" },
  { id: "caret", left: "^", right: "^", display: "^" },
  { id: "middle-dot", left: "·", right: "·", display: "·" },
  { id: "x-lower", left: "x", right: "x", display: "x" },
  { id: "x-upper", left: "X", right: "X", display: "X" },
  { id: "asterisk", left: "*", right: "*", display: "*" },
  { id: "degree", left: "°", right: "°", display: "°" },
  { id: "circle", left: "◉", right: "◉", display: "◉" },
  { id: "at", left: "@", right: "@", display: "@" },
  { id: "o", left: "o", right: "o", display: "o" },
  { id: "O", left: "O", right: "O", display: "O" },
  { id: "dash", left: "-", right: "-", display: "-" },
  { id: "equals", left: "=", right: "=", display: "=" },
  { id: "tilde", left: "~", right: "~", display: "~" },
  { id: "T", left: "T", right: "T", display: "T" },
  { id: "underscore", left: "_", right: "_", display: "_" },
  { id: "hash", left: "#", right: "#", display: "#" },
  { id: "plus", left: "+", right: "+", display: "+" },
  { id: "question", left: "?", right: "?", display: "?" },
  { id: "dollar", left: "$", right: "$", display: "$" },
  { id: "filled-circle", left: "●", right: "●", display: "●" },
  { id: "empty-circle", left: "○", right: "○", display: "○" },
  { id: "star", left: "★", right: "★", display: "★" },
  { id: "star-empty", left: "☆", right: "☆", display: "☆" },
  { id: "heart", left: "♥", right: "♥", display: "♥" },
  { id: "heart-empty", left: "♡", right: "♡", display: "♡" },
  { id: "diamond", left: "◆", right: "◆", display: "◆" },
  { id: "square", left: "■", right: "■", display: "■" },
  { id: "triangle", left: "▲", right: "▲", display: "▲" },
  // Asymmetric eyes (mirrored)
  { id: "greater-less", left: ">", right: "<", display: "> <" },
  { id: "less-greater", left: "<", right: ">", display: "< >" },
  { id: "o-acute", left: "ó", right: "ò", display: "ó ò" },
  { id: "o-grave", left: "ò", right: "ó", display: "ò ó" },
  { id: "sigma", left: "σ", right: "σ", display: "σ" },
  { id: "breve", left: "˘", right: "˘", display: "˘" },
  { id: "acute-grave", left: "´", right: "`", display: "´ `" },
  { id: "q-p", left: "q", right: "p", display: "q p" },
  { id: "p-q", left: "p", right: "q", display: "p q" },
  { id: "d-b", left: "d", right: "b", display: "d b" },
  { id: "b-d", left: "b", right: "d", display: "b d" },
  { id: "9-6", left: "9", right: "6", display: "9 6" },
  { id: "6-9", left: "6", right: "9", display: "6 9" },
  { id: "slash-backslash", left: "/", right: "\\", display: "/ \\" },
  { id: "single-quote", left: "'", right: "'", display: "' '" },
  { id: "n-n", left: "n", right: "n", display: "n" },
  { id: "u-u", left: "u", right: "u", display: "u" },
  { id: "tear", left: "；", right: "；", display: "；" },
  { id: "wink-left", left: "^", right: "-", display: "^ -" },
  { id: "wink-right", left: "-", right: "^", display: "- ^" },
  { id: "wink-o", left: "^", right: "o", display: "^ o" },
  { id: "OwO", left: "O", right: "O", display: "OwO" },
  { id: "UwU", left: "U", right: "U", display: "UwU" },
  { id: "angry", left: "╬", right: "╬", display: "╬" },
  { id: "sparkle-eyes", left: "✧", right: "✧", display: "✧" },
  { id: "swirl", left: "@", right: "@", display: "@" },
  { id: "crying", left: "T", right: "T", display: "T T" },
  { id: "QQ", left: "Q", right: "Q", display: "Q Q" },
]

export interface MouthPart {
  id: string
  symbol: string
  display: string
}

export const mouthParts: MouthPart[] = [
  { id: "none", symbol: "", display: "∅" },
  { id: "smile", symbol: "◡", display: "◡" },
  { id: "undertie", symbol: "‿", display: "‿" },
  { id: "omega", symbol: "ω", display: "ω" },
  { id: "cap", symbol: "∩", display: "∩" },
  { id: "underscore", symbol: "_", display: "_" },
  { id: "breve", symbol: "˘", display: "˘" },
  { id: "double-breve", symbol: "ᴗ", display: "ᴗ" },
  { id: "caret", symbol: "^", display: "^" },
  { id: "triangle", symbol: "▼", display: "▼" },
  { id: "triangle-up", symbol: "▲", display: "▲" },
  { id: "dot", symbol: ".", display: "." },
  { id: "3", symbol: "3", display: "3" },
  { id: "o", symbol: "o", display: "o" },
  { id: "O", symbol: "O", display: "O" },
  { id: "д", symbol: "Д", display: "Д" },
  { id: "w", symbol: "w", display: "w" },
  { id: "m", symbol: "m", display: "m" },
  { id: "v", symbol: "v", display: "v" },
  { id: "epsilon", symbol: "ε", display: "ε" },
  { id: "з", symbol: "з", display: "з" },
  { id: "pout", symbol: "︿", display: "︿" },
  { id: "smile-open", symbol: "∀", display: "∀" },
  { id: "A", symbol: "A", display: "A" },
  { id: "tongue", symbol: "P", display: "P" },
  { id: "sad", symbol: "n", display: "n" },
  { id: "neutral", symbol: "—", display: "—" },
  { id: "line", symbol: "ー", display: "ー" },
  { id: "wavy", symbol: "～", display: "～" },
  { id: "cat", symbol: "ㅅ", display: "ㅅ" },
  { id: "cat2", symbol: "ェ", display: "ェ" },
  { id: "cat3", symbol: "∇", display: "∇" },
  { id: "human", symbol: "皿", display: "皿" },
  { id: "kiss", symbol: "з", display: "з" },
  { id: "puff", symbol: "ε", display: "ε" },
  { id: "bite", symbol: "益", display: "益" },
  { id: "cry", symbol: "Д", display: "Д" },
  { id: "yawn", symbol: "ロ", display: "ロ" },
  { id: "rectangle", symbol: "□", display: "□" },
  { id: "circle-mouth", symbol: "○", display: "○" },
  { id: "inverted-v", symbol: "Λ", display: "Λ" },
  { id: "curly-smile", symbol: "ヮ", display: "ヮ" },
  { id: "へ", symbol: "へ", display: "へ" },
  { id: "squiggle", symbol: "～", display: "～" },
]

export interface ArmPart {
  id: string
  left: string
  right: string
  display: string
}

export const armParts: ArmPart[] = [
  { id: "none", left: "", right: "", display: "∅" },
  { id: "slash", left: "/", right: "\\", display: "/ \\" },
  { id: "corner", left: "┐", right: "┌", display: "┐ ┌" },
  { id: "corner-down", left: "┘", right: "└", display: "┘ └" },
  { id: "shrug", left: "¯\\_(", right: ")_/¯", display: "¯\\__/¯" },
  { id: "wave", left: "~", right: "~", display: "~ ~" },
  { id: "fist", left: "ง", right: "ว", display: "ง ว" },
  { id: "fist2", left: "(ง", right: ")ว", display: "(ง )ว" },
  { id: "muscle", left: "ᕦ(", right: ")ᕤ", display: "ᕦ ᕤ" },
  { id: "point", left: "☞", right: "☜", display: "☞ ☜" },
  { id: "peace", left: "✌", right: "✌", display: "✌ ✌" },
  { id: "star", left: "☆", right: "☆", display: "☆ ☆" },
  { id: "heart-arm", left: "♡", right: "♡", display: "♡ ♡" },
  { id: "sparkle", left: "✧", right: "✧", display: "✧ ✧" },
  { id: "note", left: "♪", right: "♪", display: "♪ ♪" },
  { id: "flower", left: "❀", right: "❀", display: "❀ ❀" },
  { id: "table-flip", left: "╯", right: "╯︵ ┻━┻", display: "╯ ╯︵ ┻━┻" },
  { id: "double-slash", left: "//", right: "\\\\", display: "// \\\\" },
  { id: "hands-up", left: "ヽ(", right: ")ノ", display: "ヽ ノ" },
  { id: "hands-side", left: "乁(", right: ")ㄏ", display: "乁 ㄏ" },
  { id: "wave-hands", left: "ヾ(", right: ")ノ゛", display: "ヾ ノ゛" },
  { id: "bear-ears", left: "ʕ", right: "ʔ", display: "ʕ ʔ" },
  { id: "cat-ears", left: "=^", right: "^=", display: "=^ ^=" },
  { id: "bunny-ears", left: "U・", right: "・U", display: "U・ ・U" },
  { id: "robot", left: "┌(", right: ")┐", display: "┌ ┐" },
  { id: "dance", left: "♪┏(", right: ")┛♪", display: "♪┏ ┛♪" },
  { id: "cheer", left: "٩(", right: ")۶", display: "٩ ۶" },
  { id: "raise", left: "o(", right: ")o", display: "o o" },
  { id: "hug", left: "⊂(", right: ")⊃", display: "⊂ ⊃" },
  { id: "cozy", left: "(っ", right: ")っ", display: "(っ )っ" },
]

export interface AccessoryPart {
  id: string
  left: string
  right: string
  display: string
}

export const accessoryParts: AccessoryPart[] = [
  { id: "none", left: "", right: "", display: "∅" },
  { id: "sparkle", left: "✧", right: "✧", display: "✧" },
  { id: "star", left: "☆", right: "☆", display: "☆" },
  { id: "star-filled", left: "★", right: "★", display: "★" },
  { id: "heart", left: "♡", right: "♡", display: "♡" },
  { id: "filled-heart", left: "♥", right: "♥", display: "♥" },
  { id: "double-heart", left: "❤", right: "❤", display: "❤" },
  { id: "note", left: "♪", right: "♪", display: "♪" },
  { id: "double-note", left: "♫", right: "♫", display: "♫" },
  { id: "flower", left: "❀", right: "❀", display: "❀" },
  { id: "flower2", left: "✿", right: "✿", display: "✿" },
  { id: "cherry", left: "🌸", right: "🌸", display: "🌸" },
  { id: "cloud", left: "☁", right: "☁", display: "☁" },
  { id: "sun", left: "☀", right: "☀", display: "☀" },
  { id: "moon", left: "☽", right: "☾", display: "☽ ☾" },
  { id: "diamond", left: "◇", right: "◇", display: "◇" },
  { id: "diamond-filled", left: "◆", right: "◆", display: "◆" },
  { id: "sweat", left: "", right: "💧", display: "💧" },
  { id: "zzz", left: "", right: "💤", display: "💤" },
  { id: "sparkle2", left: "･ﾟ✧", right: "✧ﾟ･", display: "･ﾟ✧" },
  { id: "rainbow", left: "🌈", right: "🌈", display: "🌈" },
  { id: "fire", left: "🔥", right: "🔥", display: "🔥" },
  { id: "lightning", left: "⚡", right: "⚡", display: "⚡" },
  { id: "crown", left: "👑", right: "", display: "👑" },
  { id: "halo", left: "°˖✧", right: "✧˖°", display: "°˖✧" },
  { id: "bubble", left: "｡ﾟ(", right: ")ﾟ｡", display: "｡ﾟ ﾟ｡" },
  { id: "action-lines", left: "≡≡≡", right: "", display: "≡≡≡" },
  { id: "confetti", left: "✿", right: "❀", display: "✿ ❀" },
  { id: "snow", left: "❄", right: "❄", display: "❄" },
  { id: "clover", left: "☘", right: "☘", display: "☘" },
]
