# -*- coding: utf-8 -*-
r"""ODAK-KAPAT raporlarindaki A / A-IMZA `yer_id` kalemlerini uygular (GENEL).

`ARAC-ODAK-KAPAT-UYGULA-1DUNYA-1001.py` tek dosya icin yazilmisti; ODAK-KAPAT
on dosya teslim etti, bu arac hepsi icin calisir.

KULLANIM:
  py denetim/ARAC-ODAK-KAPAT-UYGULA-1001.py --rapor <md> --veri <js> [--yaz]
  py denetim/ARAC-ODAK-KAPAT-UYGULA-1001.py --hepsi [--yaz]

🔴 ONERILER RAPORDAN CALISMA ANINDA AYRISTIRILIR, ELLE KOPYALANMAZ.
   Olculmus sebep: ayni gece koordinator LAB'in rapor TABLOSUNDAN alan degeri
   kopyalayip dosyayla uyusmadigini gordu ("Remle yoresi" vs "Remle yoresi
   (Filistin)"). Elle kopyalama bir dizgi hatasi kaynagidir.

🔴 UC SIGORTA (ucu de bu gece GEREKTI ve OTTU):
   ① kayit basi deseni GEVSEK: dosyalar `{"t": "..."` (bosluklu) ve
     `{"t":"..."` biciminde yaziyor; siki desen SIFIR kayit bulup yazmayi
     reddetti (`D240` ailesi — projede UC kayit bicimi var).
   ② mukerrer `t` varsa ayirtedici gerekir ve ayirtedici OLCULUR, tahmin
     edilmez: 1dunya_A'da ilk ayirtedicim "Belcika"ydi, OTEKI kayit da onu
     anıyordu, arac atladi.
   ③ `yer_id` ZATEN DOLUYSA uzerine yazilmaz — atlanir ve SEBEBI basilir.

HUKUMLER (tahta M-5718 · M-5722 · M-5730):
  A       olayin gectigi yer, kaynak cumlesiyle          → yer_id YAZILIR
  A-IMZA  antlasma IMZA YERI, kaynak ACIKCA veriyor      → yer_id YAZILIR
  A⏳      kaynak cumlesi ALINAMADI (403/basili kitap)     → YAZILMAZ (`D207`)
  A?      ozne ULKE                                      → `odak_yer` isi, BU ARAC DOKUNMAZ
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(r"C:\atlas")
KURU = "--yaz" not in sys.argv

# rapor → veri eslesmesi (ODAK-KAPAT'in teslim ettigi dosyalar)
CIFTLER = [
    ("denetim/ODAK-KAPAT-AVRUPABATI-1001.md", "data/kronoloji_sinir_avrupa_bati.js"),
    ("denetim/ODAK-KAPAT-SIRBISTAN-1001.md", "data/kronoloji_sirbistan.js"),
    ("denetim/ODAK-KAPAT-BALKAN-1001.md", "data/kronoloji_balkan.js"),
    ("denetim/ODAK-KAPAT-BIZANS-1001.md", "data/kronoloji_bizans.js"),
    ("denetim/ODAK-KAPAT-ALTINORDA-1001.md", "data/kronoloji_altinorda.js"),
    ("denetim/ODAK-KAPAT-AKKOYUNLU-1001.md", "data/kronoloji_akkoyunlu.js"),
    ("denetim/ODAK-KAPAT-ORTAASYA-1001.md", "data/kronoloji_orta_asya.js"),
]

# A/A-IMZA satiri: | no | tarih | baslik | **A...** | oneri | kaynak |
# 🔴 DORDUNCU GRUP KOVA HUCRESININ TAMAMINI alir — yalniz `**...**` ARASINI
#   DEGIL. Olculmus sebep: AVRUPABATI raporu `**A** (imza) ⏳` yaziyor ve ⏳
#   yildizlarin DISINDA. Onceki desen grup 4'e yalniz "A" koyuyordu, ⏳
#   suzgeci GORMUYORDU ve UC A⏳ kalemi (Basel · Nantes · Lozan) uygulanacak
#   listeye giriyordu — `Hukum 3` ihlali. Yazilmadilar ama BASKA bir sebeple
#   (cok satirli kayit biciminde `b` bulunamadi), yani KAZAEN kurtuldu.
#   ⇒ Bir sigortanin TESADUFEN tutmasi, tuttugu anlamina gelmez.
SATIR = re.compile(
    r'^\|\s*(\d+)\s*\|\s*([0-9]{4}-[0-9]{2}-[0-9]{2})\s*\|([^|]*)\|'
    r'([^|]*)\|([^|]*)\|', re.M)
# ⏳ ve ? tasiyan kovalar HARIC · kova hucresi `A` ile BASLAMALI
HARIC = ("⏳", "?")


def oneriler(rapor_yolu):
    if not os.path.exists(rapor_yolu):
        return None
    rap = io.open(rapor_yolu, encoding="utf-8", newline="").read()
    out = []
    for m in SATIR.finditer(rap):
        no, t, baslik, kova, oneri = m.groups()
        kv = kova.strip()
        # kova hucresi `**A`/`A` ile BASLAMALI (B · C · D · A? · A⏳ disarida)
        if not re.match(r'\*{0,2}A(\*{0,2})?(\s|$|\()', kv):
            continue
        if any(h in kv for h in HARIC):
            continue
        # ① acik bicim: `yer_id:"X"`
        my = re.search(r'yer_id\s*:\s*"([^"]+)"', oneri)
        if not my:
            # ② 🔴 CIPLAK bicim: oneri sutunu yalnizca  `"Stettin (Szczecin)"`
            #   yaziyor (AVRUPABATI raporu boyle). Ayni anlam, baska yazim.
            #   Olculdu: bu rapor 7 sutunlu ve 5. sutun ciplak adi tasiyor.
            my = re.search(r'^\s*`?"([^"]+)"`?\s*$', oneri)
        if my:
            out.append((no, t, kova.strip(), my.group(1), baslik.strip()))
    return out


def _kayit_sinirlari(metin, i):
    """i konumundaki `t`yi iceren KAYDIN (bas, son) sinirlari — parantez sayarak.

    Geriye dogru kaydi acan `{`i, ileriye dogru ONA KARSILIK GELEN `}`i bulur;
    dizgi icindeki parantezleri ve kacislari atlar.
    """
    # geriye: kaydi acan `{`
    bas, derin = None, 0
    j = i
    while j >= 0:
        c = metin[j]
        if c == "}":
            derin += 1
        elif c == "{":
            if derin == 0:
                bas = j
                break
            derin -= 1
        j -= 1
    if bas is None:
        return None
    # ileriye: eslesen `}` (dizgi farkindalikli)
    j, derin, tirnak, kacis = bas, 0, False, False
    while j < len(metin):
        c = metin[j]
        if kacis:
            kacis = False
        elif c == "\\":
            kacis = True
        elif c == '"':
            tirnak = not tirnak
        elif not tirnak:
            if c in "{[":
                derin += 1
            elif c in "}]":
                derin -= 1
                if derin == 0:
                    return (bas, j + 1)
        j += 1
    return None


def kayitlar(metin, t):
    """`t` degerini tasiyan KAYITLARIN (bas, son) listesi.

    🔴 PARANTEZ SAYARAK — ne "kayit `{` ile baslar" ne "kayit TEK SATIR"
    varsayimi var. Her ikisi de bu gece ÖLÇÜLDÜ ve ikisi de YANLIS cikti:
      1dunya_A   `{"t": "1914-06-28", ...}`              tek satir, t ILK
      sirbistan  `{ taraflar:[...], t:"...", ...`        tek satir, t ILK DEGIL
      avrupa_bati / sirbistan'in bir kismi               COK SATIRLI
    🔴 VE SATIR TEMELLI SURUM SESSIZ VERI BOZULMASI URETTI: cok satirli bir
      kayitta `b` alanindan sonra `"yer_id"` EKLEDI, oysa kaydin ALT
      satirlarinda ZATEN `yer_id:""` vardi ⇒ MUKERRER ANAHTAR olustu ve
      JS'te SON anahtar kazandigi icin alan BOS kaldi. `node --check` GECTI
      (mukerrer anahtar JS'te yasaldir) ve denetim degisikligi GORMEDI —
      yani hata "calisti" gibi gorundu. Degisiklik `git checkout` ile geri
      alindi. `D250`: kor bir islemin basarili gorunmesi, basarili olmasi
      demek degildir.
    """
    D = re.compile(r'(?:^|[{,\s])"?t"?\s*:\s*"%s"' % re.escape(t))
    out, gorulen = [], set()
    for m in D.finditer(metin):
        s = _kayit_sinirlari(metin, m.start())
        if s and s not in gorulen:
            gorulen.add(s)
            out.append(s)
    return out


def uygula(rapor, veri, kuru=True):
    isler = oneriler(rapor)
    if isler is None:
        print("  ⚪ rapor YOK: %s — atlandı" % rapor)
        return 0, 0
    if not os.path.exists(veri):
        print("  🔴 veri YOK: %s" % veri)
        return 0, 0
    s = io.open(veri, encoding="utf-8", newline="").read()
    kayit = len(re.findall(r'\{\s*"?t"?\s*:', s))
    print("\n  %s" % veri)
    print("    rapor %s · yer_id önerisi: %d · dosyada %d kayıt"
          % (os.path.basename(rapor), len(isler), kayit))
    n, atla = 0, []
    for no, t, kova, yid, bas in isler:
        aday = kayitlar(s, t)
        if len(aday) != 1:
            atla.append((no, t, "kayıt %d (ayırtedici gerekir)" % len(aday)))
            continue
        b0, b1 = aday[0]
        govde = s[b0:b1]
        mbos = re.search(r'("?yer_id"?\s*:\s*)""', govde)
        if mbos:
            k0, k1 = b0 + mbos.start(1), b0 + mbos.end()
            s = s[:k0] + mbos.group(1) + '"%s"' % yid + s[k1:]
        elif re.search(r'"?yer_id"?\s*:\s*"[^"]+"', govde):
            mv = re.search(r'"?yer_id"?\s*:\s*"([^"]+)"', govde)
            atla.append((no, t, "yer_id ZATEN DOLU: %s" % mv.group(1)))
            continue
        else:
            # alan hic yok → `b` alanindan sonra EKLE
            mb = re.search(r'("?b"?\s*:\s*"(?:[^"\\]|\\.)*")', govde)
            if not mb:
                atla.append((no, t, "`b` alanı bulunamadı, EKLENEMEDİ"))
                continue
            yer = b0 + mb.end()
            s = s[:yer] + ', "yer_id": "%s"' % yid + s[yer:]
        n += 1
        print("    ✓ #%-3s %s  %-8s → %-22s %s"
              % (no, t, kova[:8], yid, bas[:30]))
    if atla:
        for no, t, niye in atla:
            print("    🔴 #%-3s %s  %s" % (no, t, niye))
    if not kuru and n:
        io.open(veri, "w", encoding="utf-8", newline="").write(s)
        r = subprocess.run(["node", "--check", veri],
                           capture_output=True, text=True)
        if r.returncode != 0:
            print("    🔴 node --check BAŞARISIZ — DUR")
            print(r.stderr[:300])
            sys.exit(1)
        print("    ✓ yazıldı · node --check temiz")
    return n, len(atla)


def _arg(ad):
    if ad in sys.argv:
        i = sys.argv.index(ad)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return None


print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
rap1, ver1 = _arg("--rapor"), _arg("--veri")
hedefler = [(rap1, ver1)] if (rap1 and ver1) else CIFTLER
top_n, top_a = 0, 0
for rapor, veri in hedefler:
    a, b = uygula(rapor, veri, KURU)
    top_n += a
    top_a += b
print("\n  TOPLAM uygulanan: %d · atlanan: %d" % (top_n, top_a))
if KURU:
    print("\n=> uygulamak için --yaz")
else:
    print("\n  🔴 SIRADA: py arac/odak_olc.py  ·  py arac/denetle.py  ·  "
          "paketle.py yenile  ·  surum_damgala.py  ·  denetle_yayin.py")
