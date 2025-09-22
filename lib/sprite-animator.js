import { getCachedSheetId } from './sprite-sheet';
function buildKeyframes(name, frames) {
    const n = frames.length;
    const steps = [];
    for (let i = 0; i < n; i++) {
        const pct = (i / n) * 100;
        const f = frames[i];
        const decls = [`background-position: ${-f.x}px ${-f.y}px;`];
        steps.push(`${pct}% { ${decls.join(' ')} animation-timing-function: steps(1, end); }`);
    }
    //const last = frames[n - 1]
    //const lastDecls = [`background-position: ${-last.x}px ${-last.y}px;`]
    //steps.push(`100% { ${lastDecls.join(' ')} }`)
    return `@keyframes ${name} {\n${steps.join('\n')}\n}`;
}
export class SpriteAnimator {
    element;
    #sheet;
    #sheetId;
    #styleEl;
    constructor(options) {
        this.element = document.createElement('div');
        const s = this.element.style;
        s.backgroundImage = `url(${options.imageUrl})`;
        s.backgroundRepeat = 'no-repeat';
        this.#sheet = options.sheet;
        this.#sheetId = getCachedSheetId(options.imageUrl, options.sheet);
        this.#styleEl = document.createElement('style');
        document.head.appendChild(this.#styleEl);
        for (const [animationName, animation] of Object.entries(options.sheet.animations)) {
            const frames = animation.frames.map(name => options.sheet.frames[name]);
            this.#styleEl.appendChild(document.createTextNode(buildKeyframes(this.#keyframesName(animationName), frames)));
        }
        /*this.element.addEventListener('animationend', (e) => {
          if (e.animationName === this.keyframesName(this.animationName)) {
            this.playing = false
            options.onAnimationEnd?.(this.animationName)
          }
        })*/
        this.animation = options.animation;
    }
    #keyframesName(animName) { return `${this.#sheetId}_${animName}`; }
    set animation(name) {
        const anim = this.#sheet.animations[name];
        const frameCount = anim.frames.length;
        const duration = Math.max(1, frameCount) / Math.max(1, anim.fps);
        const kfName = this.#keyframesName(name);
        const iterCount = anim.loop ? 'infinite' : '1';
        const timing = `steps(${Math.max(1, frameCount)}, start)`;
        const s = this.element.style;
        s.animation = `${kfName} ${duration}s ${timing} 0s ${iterCount} both`;
        const firstFrame = this.#sheet.frames[anim.frames[0]];
        s.width = `${firstFrame.w}px`;
        s.height = `${firstFrame.h}px`;
    }
    remove() {
        this.element.remove();
        this.#styleEl.remove();
    }
}
//# sourceMappingURL=sprite-animator.js.map