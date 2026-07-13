/**
 * Canvas + File helpers shared by image tools (compress, resize, crop,
 * rotate, watermark, format converters). All operations run in the browser
 * — nothing here uploads.
 */

/** Decode a user-selected file into an `HTMLImageElement`. Rejects with a
 *  user-friendly message when the file is not a valid image. */
export function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load image. Please use a valid image file."));
    img.src = url;
  });
}

/** Promise wrapper around `HTMLCanvasElement.toBlob` with a typed error path. */
export function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Could not export image."))),
      type,
      quality,
    );
  });
}

/** Paint an image onto a fresh canvas, optionally scaling to `width`/`height`.
 *  Defaults to the image's natural dimensions (no scaling). */
export function drawToCanvas(img: HTMLImageElement, width?: number, height?: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width ?? img.naturalWidth;
  canvas.height = height ?? img.naturalHeight;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas;
}

/** Read a file as a base64 data URL (for previews and inline embedding). */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Could not read file."));
    reader.readAsDataURL(file);
  });
}

/** Format a byte count as a short human-readable string (e.g. "342 KB"). */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}