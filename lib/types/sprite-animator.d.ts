import { SpriteSheet } from './sprite-sheet';
export interface SpriteAnimatorOptions {
    imageUrl: string;
    sheet: SpriteSheet;
    animation: string;
}
export declare class SpriteAnimator {
    #private;
    constructor(container: HTMLElement, opts: SpriteAnimatorOptions);
    remove(): void;
}
//# sourceMappingURL=sprite-animator.d.ts.map