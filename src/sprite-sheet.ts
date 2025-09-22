export interface Frame {
  x: number
  y: number
  w: number
  h: number
}

export type Animation = {
  frames: string[],
  fps: number,
  loop: boolean
}

export type SpriteSheet = {
  frames: Record<string, Frame>
  animations: Record<string, Animation>
}

const sheetIdCache = new WeakMap<SpriteSheet, Map<string, string>>()
let idCounter = 0

export function getCachedSheetId(imageUrl: string, sheet: SpriteSheet): string {
  let innerMap = sheetIdCache.get(sheet)
  if (!innerMap) {
    innerMap = new Map<string, string>()
    sheetIdCache.set(sheet, innerMap)
  }

  if (!innerMap.has(imageUrl)) {
    innerMap.set(imageUrl, CSS.escape(`${imageUrl}#${idCounter++}`))
  }

  return innerMap.get(imageUrl)!
}
