import { SpriteSheet } from './sprite-sheet'

export interface SpriteAnimatorOptions {
  imageUrl: string
  sheet: SpriteSheet
  animation: string
}

export class SpriteAnimator {
  #el: HTMLElement
  #styleEl: HTMLStyleElement

  constructor(container: HTMLElement, opts: SpriteAnimatorOptions) {
    this.#el = document.createElement('div')
    container.appendChild(this.#el)

    const s = this.#el.style
    s.backgroundImage = `url(${opts.imageUrl})`
    s.backgroundRepeat = 'no-repeat'

    this.#styleEl = document.createElement('style')
    document.head.appendChild(this.#styleEl)
  }

  remove() {
    this.#el.remove()
    this.#styleEl.remove()
  }
}
