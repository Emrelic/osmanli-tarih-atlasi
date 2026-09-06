# -*- coding: utf-8 -*-
"""TDV gövde okuyucu — §4'ün DÖRT tuzağına karşı ölçülü.
  ① 302 → ÖLÜ                     ② 200 + yanlış madde → BAŞLIK basılır
  ③ 200 + boş gövde               ④ 200 + BOİLERPLATE → karakter sayısı basılır
  ⑤ 000 bir HTTP kodu değil, taşıma arızası — 'ölü' diye damgalanmaz
  🔴 GÖVDE KESİLMEZ: `uganda` vakasında ilk `Bibliyografya`da kesmek
     metnin %79'unu attırmıştı (madde 8 bölümlü). Tam metin yazılır.
kullanım: py denetim/_tdv_oku.py <slug> [slug...]
"""
import html
import io
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# 🔴 GÖVDELER DEPOYA YAZILMAZ. Bunlar TDV'nin TELİFLİ tam metinleri ve bu
#   depo GitHub Pages'te YAYINLANIYOR — 256 KB'lık dört madde gövdesini
#   `denetim/` altında bırakmak onları yayına sokardı. Ölçüm için gereken
#   şey gövdenin KENDİSİ değil, ondan çıkan KISA ALINTI ve karakter
#   sayısıdır; ikisi de bulgu dosyasına yazılır.
#   Varsayılan: TDV_CIKTI ortam değişkeni, yoksa sistem geçici dizini.
CIK = os.environ.get("TDV_CIKTI") or os.path.join(
    os.environ.get("TEMP") or "/tmp", "tdv_govde")
os.makedirs(CIK, exist_ok=True)


def cek(slug):
    u = "https://islamansiklopedisi.org.tr/" + slug
    r = subprocess.run(["curl", "-sL", "--max-time", "60", u],
                       capture_output=True)
    ham = r.stdout.decode("utf-8", "replace")
    baslik = ""
    m = re.search(r"<title>(.*?)</title>", ham, re.S | re.I)
    if m:
        baslik = html.unescape(re.sub(r"\s+", " ", m.group(1))).strip()
    g = re.sub(r"(?is)<(script|style|nav|header|footer)[^>]*>.*?</\1>", " ", ham)
    g = re.sub(r"(?s)<[^>]+>", " ", g)
    g = html.unescape(g)
    g = re.sub(r"[ \t\r\f\v]+", " ", g)
    g = re.sub(r"\n\s*\n+", "\n", g).strip()
    return baslik, g, len(ham)


for slug in sys.argv[1:]:
    baslik, govde, hamn = cek(slug)
    yol = os.path.join(CIK, slug + ".txt")
    io.open(yol, "w", encoding="utf-8", newline="\n").write(govde)
    damga = "🟢"
    if "Arama" in baslik:
        damga = "🔴 ARAMA SAYFASI — ÖLÜ"
    elif len(govde) < 2000:
        damga = "🔴 BOİLERPLATE ŞÜPHESİ (<2000 kar.)"
    print("%-12s %s  ham %6d · govde %6d kar.  | %s" %
          (slug, damga, hamn, len(govde), baslik[:60]))
    print("             -> " + yol)
