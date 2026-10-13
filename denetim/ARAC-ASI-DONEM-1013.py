"""ARAC-ASI-DONEM-1013 — MISIR-SEFER-0075 H-0010 veri dönüşümü (Emre 13 Eki 2026).

NE YAPAR: `kid:"misir-kavalali"` taşıyan her `v:` döneminden, Kütahya fermanı gününü
(1833-05-06) İÇİNE ALAN ve 1831-10 sonrası başlayanı ikiye böler:
    f → 1833-05-06   statu:"asi", himaye:true   (isyan hâlindeki bölge — açık ton)
    1833-05-06 → t   statu:"vassal"             (meşru tevcih — Şam+Halep eyaletleri
                                                 Mehmed Ali'ye, Adana muhassıllığı İbrâhim'e)
Dayanak: denetim/MISIR-SEFER-0075.json `h0010_sema` (bitiş 6 Mayıs 1833: TDV ibrahim-pasa-kavalali
'3 Mayıs rıza, 6 Mayıs ferman'; Kutluoğlu 1997; Gencer 2016). Mısır eyaletinin KENDİSİ
(Kahire vb., f 1805-07-03) BÖLÜNMEZ: bu sorunun cevabı (Emre) bekleniyor.

⚠️ YALNIZ motor yaması (denetim/MISIR-ASI-MOTOR-1013.diff: girdi.py + uret_petek.py + app.js)
`main`e indikten SONRA koşturulur — yoksa 'asi' bilinmeyen statüdür ve renk 'tâbi vassal'a düşer.
Sonra: py arac/denetle.py · renk_olc.py · paketle.py yenile · surum_damgala.py; harita HAVVA koşusu.

Kullanım:  py denetim/ARAC-ASI-DONEM-1013.py          (kuru: ne değişirdi, yazmaz)
           py denetim/ARAC-ASI-DONEM-1013.py --yaz    (yazar; idempotent — 'asi' olanı atlar)
"""
import glob
import re
import sys

sys.stdout.reconfigure(encoding="utf8")
BOL = "1833-05-06"
ALT = "1831-10-01"
YAZ = "--yaz" in sys.argv


def eslesen_suslu(s, i):
    """s[i]=='{' → eşleşen '}' dizini (string'lere duyarlı)."""
    d, q, j = 0, None, i
    while j < len(s):
        c = s[j]
        if q:
            if c == "\\":
                j += 1
            elif c == q:
                q = None
        elif c == '"':
            q = c
        elif c == "{":
            d += 1
        elif c == "}":
            d -= 1
            if d == 0:
                return j
        j += 1
    raise ValueError("eşleşmeyen {")


def ust_alan(giris, anahtar):
    """Girişin ÜST düzey `anahtar:"…"` değeri (iç içe {} atlanır)."""
    d, q, j = 0, None, 1
    while j < len(giris) - 1:
        c = giris[j]
        if q:
            if c == "\\":
                j += 1
            elif c == q:
                q = None
        elif c == '"':
            if d == 0:
                m = re.match(r'"?' + anahtar + r'"?\s*:\s*"([^"]*)"', giris[j:]) if giris[j] == '"' else None
                if m:
                    return m.group(1)
            q = c
        elif c == "{":
            d += 1
        elif c == "}":
            d -= 1
        elif d == 0 and giris.startswith(anahtar + ":", j) and not giris[j - 1].isalnum():
            m = re.match(anahtar + r':\s*"([^"]*)"', giris[j:])
            if m:
                return m.group(1)
        j += 1
    return None


def donustur(metin, dosya):
    sayi = 0
    cikti, konum = [], 0
    for m in re.finditer(r'kid\s*:\s*"misir-kavalali"|"kid"\s*:\s*"misir-kavalali"', metin):
        # girişin başlangıcı: geriye doğru en yakın açık '{'
        a = m.start()
        d = 0
        while a > 0:
            a -= 1
            if metin[a] == "}":
                d += 1
            elif metin[a] == "{":
                if d == 0:
                    break
                d -= 1
        if a < konum:
            continue
        b = eslesen_suslu(metin, a)
        giris = metin[a:b + 1]
        f, t = ust_alan(giris, "f"), ust_alan(giris, "t")
        if not f or not t or "statu" in giris and 'statu:"asi"' in giris:
            continue
        if not (ALT <= f < BOL < t):
            continue
        k = ust_alan(giris, "k") or "Mısır (İbrâhim Paşa)"
        e1 = re.sub(r'(?<![A-Za-z"])t:"' + re.escape(t) + '"', 't:"' + BOL + '"', giris, count=1)
        e1 = re.sub(r'"t":"' + re.escape(t) + '"', '"t":"' + BOL + '"', e1, count=1)
        e1 = e1.replace('statu:"vassal"', 'statu:"asi",himaye:true', 1).replace('"statu":"vassal"', '"statu":"asi","himaye":true', 1)
        if 'statu:"asi"' not in e1 and '"statu":"asi"' not in e1:
            e1 = e1[:-1] + ',statu:"asi",himaye:true}'
        e2 = ('{f:"' + BOL + '",t:"' + t + '",k:"' + k + '",statu:"vassal",kid:"misir-kavalali",'
              'kaynak:"MISIR-SEFER-0075 H-0010: Kütahya düzenlemesi (3 Mayıs rıza, 6 Mayıs 1833 ferman — TDV ibrahim-pasa-kavalali; '
              'Kutluoğlu 1997; Gencer 2016): Şam+Halep eyaletleri Mehmed Ali\'ye, Adana muhassıllığı İbrâhim Paşa\'ya meşru tevcih; '
              'önceki aralık statu:asi. Bitiş (' + t + ') eski kaydın bitişidir."}')
        cikti.append(metin[konum:a])
        cikti.append(e1 + "," + e2)
        konum = b + 1
        sayi += 1
    cikti.append(metin[konum:])
    return "".join(cikti), sayi


toplam = 0
for dosya in sorted(glob.glob("data/yerlesimler*.js")):
    metin = open(dosya, encoding="utf8", newline="").read()
    yeni, n = donustur(metin, dosya)
    if n:
        print(f"{dosya}: {n} dönem bölünecek")
        toplam += n
        if YAZ:
            open(dosya, "w", encoding="utf8", newline="").write(yeni)
print(f"TOPLAM {toplam} dönem {'bölündü' if YAZ else '(kuru — yazılmadı)'}")
