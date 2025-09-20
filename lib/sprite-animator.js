function buildKeyframes(name, frames) {
    const n = frames.length;
    const steps = [];
    for (let i = 0; i < n; i++) {
        const pct = (i / n) * 100;
        const f = frames[i];
        const decls = [`background-position: ${-f.x}px ${-f.y}px;`];
        steps.push(`${pct}% { ${decls.join(' ')} }`);
    }
    const last = frames[n - 1];
    const lastDecls = [`background-position: ${-last.x}px ${-last.y}px;`];
    steps.push(`100% { ${lastDecls.join(' ')} }`);
    return `@keyframes ${name} {\n${steps.join('\n')}\n}`;
}
export class SpriteAnimator {
    #el;
    #styleEl;
    constructor(container, opts) {
        this.#el = document.createElement('div');
        container.appendChild(this.#el);
        const s = this.#el.style;
        s.backgroundImage = `url(${opts.imageUrl})`;
        s.backgroundRepeat = 'no-repeat';
        this.#styleEl = document.createElement('style');
        document.head.appendChild(this.#styleEl);
    }
    remove() {
        this.#el.remove();
        this.#styleEl.remove();
    }
}
//# sourceMappingURL=sprite-animator.js.map