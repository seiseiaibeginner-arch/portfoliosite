"""
Generate hero images using Google Imagen 4 via Gemini API
"""
import os
import base64
import json
import urllib.request
from pathlib import Path

def load_env(path=".env"):
    env_path = Path(__file__).parent / path
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

load_env()
API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("GEMINI_API_KEY が .env に設定されていません")

OUTPUT_DIR = Path(__file__).parent / "image"
OUTPUT_DIR.mkdir(exist_ok=True)

HERO_PROMPT = (
    "Modern Japanese web portfolio hero section background illustration. "
    "Japanese kawaii flat vector illustration style, thin clean black outlines. "
    "Simple rounded chibi-style character: a happy creator/designer holding a laptop, "
    "floating decorative icons around: cute pen, tiny camera, smartphone, "
    "scattered sparkles, soft rounded stars, small code brackets. "
    "Wide-angle composition, generous negative space on the LEFT side for text overlay. "
    "Subject and decorations clustered toward the RIGHT side. "
    "Color palette: bright pastel mint green, pale yellow, light sky blue, warm peach, "
    "pure white background. Soft cheerful gradients, high-key lighting, airy fresh atmosphere. "
    "High-quality 2D digital art, professional vector finish, polished hand-drawn aesthetic. "
    "Clean modern web UI design. No text, no diagrams, no charts. Landscape 16:9."
)

BG_PROMPT = (
    "Abstract decorative background texture for a modern Japanese web portfolio. "
    "Kawaii flat vector style, very subtle and light. "
    "Tiny scattered floating icons: code brackets, stars, dots, sparkles, small geometric shapes. "
    "Pastel colors: mint green, pale yellow, light lavender, extremely soft and muted tones. "
    "Near-white background, low-density elements, seamless repeatable texture. "
    "Does not compete with foreground content. No text, no characters, no faces. "
    "Wide landscape 16:9 format."
)


def generate_imagen4(prompt: str, filename: str, aspect_ratio: str = "16:9"):
    """Generate image using Imagen 4"""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key={API_KEY}"

    payload = {
        "instances": [{"prompt": prompt}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": aspect_ratio,
        }
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url, data=data,
        headers={"Content-Type": "application/json"},
        method="POST"
    )

    print(f"[Imagen 4] Generating: {filename} ...")
    with urllib.request.urlopen(req, timeout=120) as resp:
        result = json.loads(resp.read())

    img_b64 = result["predictions"][0]["bytesBase64Encoded"]
    mime = result["predictions"][0].get("mimeType", "image/png")
    ext = "jpg" if "jpeg" in mime else "png"

    img_bytes = base64.b64decode(img_b64)
    out_path = OUTPUT_DIR / filename
    out_path.write_bytes(img_bytes)
    print(f"  Saved: {out_path} ({len(img_bytes) // 1024} KB)")
    return out_path


if __name__ == "__main__":
    print("=== Hero Image Generation (Imagen 4) ===\n")

    print("[1/2] Hero main image...")
    generate_imagen4(HERO_PROMPT, "hero-image.png", "16:9")

    print("\n[2/2] Background pattern...")
    generate_imagen4(BG_PROMPT, "hero-bg-pattern.png", "16:9")

    print("\nAll done!")
