import { SpriteAnimator } from '../..'

const animator = new SpriteAnimator({
  imageUrl: 'assets/fire.png',
  sheet: {
    frames: {
      fire1: { x: 0, y: 0, w: 64, h: 64 },
      fire2: { x: 64, y: 0, w: 64, h: 64 },
      fire3: { x: 128, y: 0, w: 64, h: 64 },
      fire4: { x: 192, y: 0, w: 64, h: 64 },
      fire5: { x: 256, y: 0, w: 64, h: 64 },
    },
    animations: {
      fire: { frames: ['fire1', 'fire2', 'fire3', 'fire4', 'fire5'], fps: 12, loop: true },
    },
  },
  animation: 'fire',
})

document.body.appendChild(animator.element)
