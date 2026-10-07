from pathlib import Path
from PIL import Image

src = Path(r"C:\Users\Dell\.cursor\projects\d-Users-Dell-Desktop-Sample-sie-website\assets")
# original jpg
orig = None
for p in src.glob("*SIE_Logo_Without_BG*"):
    orig = p
    break
print("orig", orig)

im = Image.open("\\\\?\\" + str(orig.resolve())).convert("RGBA")
px = im.load()
w, h = im.size
# find bounding box of non-black pixels
minx, miny, maxx, maxy = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if max(r, g, b) > 35:
            if x < minx: minx = x
            if y < miny: miny = y
            if x > maxx: maxx = x
            if y > maxy: maxy = y
print("bbox", minx, miny, maxx, maxy, "size", w, h)

pad = 12
minx = max(0, minx - pad)
miny = max(0, miny - pad)
maxx = min(w - 1, maxx + pad)
maxy = min(h - 1, maxy + pad)
cropped = im.crop((minx, miny, maxx + 1, maxy + 1))
px = cropped.load()
cw, ch = cropped.size
for y in range(ch):
    for x in range(cw):
        r, g, b, a = px[x, y]
        m = max(r, g, b)
        if m < 22:
            px[x, y] = (r, g, b, 0)
        elif m < 40:
            px[x, y] = (r, g, b, int((m - 22) / 18 * 255))

outs = [
    Path(r"d:\Users\Dell\Desktop\Sample\sie-website\public\svaasa\static\images\logo\sie-logo.png"),
    Path(r"d:\Users\Dell\Desktop\Sample\sie-website\public\static\images\logo\sie-logo.png"),
]
for out in outs:
    cropped.save(out, "PNG")
    print("saved", out, cropped.size)
