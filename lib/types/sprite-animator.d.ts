import { SpriteSheet } from './sprite-sheet';
export interface SpriteAnimatorOptions {
    imageUrl: string;
    sheet: SpriteSheet;
    animation: string;
    onAnimationEnd?: (animation: string) => void;
}
export declare class SpriteAnimator {
    #private;
    element: HTMLElement;
    constructor(options: SpriteAnimatorOptions);
    set animation(name: string);
    remove(): void;
}
//# sourceMappingURL=sprite-animator.d.ts.map