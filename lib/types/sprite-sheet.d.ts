export interface Frame {
    x: number;
    y: number;
    w: number;
    h: number;
}
export type Animation = {
    frames: string[];
    fps: number;
    loop: boolean;
};
export type SpriteSheet = {
    frames: Record<string, Frame>;
    animations: Record<string, Animation>;
};
export declare function getCachedSheetId(imageUrl: string, sheet: SpriteSheet): string;
//# sourceMappingURL=sprite-sheet.d.ts.map