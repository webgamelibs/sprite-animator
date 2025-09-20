export interface SpriteAnimatorOptions {

}

export class SpriteAnimator {
  constructor(el: HTMLElement, opts: SpriteAnimatorOptions) {
    if (!el) throw new Error("SpriteAnimator: HTMLElement required")
  }
}
