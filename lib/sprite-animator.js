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