const sheetIdCache = new WeakMap();
let idCounter = 0;
export function getCachedSheetId(imageUrl, sheet) {
    let innerMap = sheetIdCache.get(sheet);
    if (!innerMap) {
        innerMap = new Map();
        sheetIdCache.set(sheet, innerMap);
    }
    if (!innerMap.has(imageUrl)) {
        innerMap.set(imageUrl, CSS.escape(`${imageUrl}#${idCounter++}`));
    }
    return innerMap.get(imageUrl);
}
//# sourceMappingURL=sprite-sheet.js.map