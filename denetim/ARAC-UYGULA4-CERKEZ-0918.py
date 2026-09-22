# -*- coding: utf-8 -*-
"""UYGULA-4 · YAMA-CERKEZISTAN-0917 (C-1 · C-2 · C-4) uygulayıcısı — 18 Eylül 2026.

    py denetim/ARAC-UYGULA4-CERKEZ-0918.py            KURU KOŞU (yazmaz)
    py denetim/ARAC-UYGULA4-CERKEZ-0918.py --yaz      data/yerlesimler.js'e yazar

Üç kayıt: Soçi (Sâşe) · Tuapse · Maykop (Çerkezya).
  C-4  s: __BOSLUK__ 1441-1475  →  cerkez  (künye 18 Eyl'de indi: UYGULA-5, M-4495)
  C-1  d: 1783-04-19→1829-09-14 (doğrudan)  →  v: cerkez, statu gevsek, himaye true
  C-2  s: rusya 1829-09-14→…  →  cerkez 1829→1838 (kıyı) / 1829→1864 (Maykop), sonra rusya

🔴 YAMADAN SAPILAN İKİ NOKTA — ikisi de RAPORLANIR:
 ① Yama C-4 için (a) 1427-01-01'i öneriyor (altinorda→cerkez sınırını öne çekmek).
    UYGULANMADI: o kırılma Y-1 (Kabartay) ile aynı gerekçeye ve aynı KK-1 maddesine
    bağlı; madde inmeden kırılma yazmak, sayaçta kapalı ama ANLATIDA karşılıksız bir
    toprak değişimi üretir. Kimlik değişti, GÜN değişmedi.
 ② Yama C-2'de rusya'yı 1917-03-15'te bitiriyor. UYGULANMADI: bu kayıtlarda
    `rusya-gecici-hukumet`/`sovyet-rusya` dilimleri YOK; 1917-03-15 yazmak
    1917-1923 arası bir SAHİPSİZLİK (Değişmez 1) açardı. Bitiş 1923-10-29 kaldı.

KORUMA: her eski parça dosyada TAM BİR KEZ bulunmalı; yoksa exit 2 ve HİÇBİR ŞEY yazılmaz.
"""
import io, os, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "data", "yerlesimler.js")
YAZ = "--yaz" in sys.argv

K_CERKEZ_ERKEN = ('kaynak:"TDV cerkezler: Yinal (1427-1456) Çerkesleri birleştirdi; '
                  'kabileler hukuken Kırım Hanlığı\'na tâbi, gerçekte serbest. '
                  '__BOSLUK__ → `cerkez` (künye 18 Eyl 2026\'da indi, UYGULA-5 M-4495): '
                  'boşluk BEYANDI, artık kimlik var. ⚠️ GÜN DEĞİŞMEDİ — yamanın (a) '
                  'seçeneği 1441\'i 1427\'ye çekiyordu, o kırılma KK-1 maddesiyle '
                  'birlikte inecek (YAMA-CERKEZISTAN-0917 C-4a · YAMA-KARADENIZ-0917 Y-1). '
                  'UYGULA-4 18 Eyl 2026."')

V_CERKEZ = ('{f:"1783-04-19",t:"1829-09-14",k:"Çerkez kabileleri (Osmanlı hâkimiyet iddiası)",'
            'kid:"cerkez",statu:"gevsek",himaye:true,kaynak:"TDV cerkezler: Çerkezler '
            '\'hukuken … tâbi, gerçekte ise serbest\'; Osmanlı\'nın fiilen tuttuğu yerler '
            'KIYI KALELERİdir (Anapa, Sohum `d:` kalır), kabile toprağı değil. 1829 Edirne '
            'ile Osmanlı \'Çerkezler üzerindeki haklarından\' vazgeçti ⇒ 1783-1829 arası bir '
            'HAK/İDDİA bağıdır, doğrudan idare DEĞİL. YAMA-CERKEZISTAN-0917 C-1, '
            'UYGULA-4 18 Eyl 2026."}')

S_KIYI = ('{f:"1829-09-14",t:"1838-01-01",d:"cerkez",kaynak:"TDV cerkezler: Edirne bir HAK '
          'DEVRİDİR; Rusya kıyıyı sonra aldı — \'1838\'de Soçi ve Tuapse limanlarını ele '
          'geçiren Ruslar\'. Yıl hassasiyeti ⇒ 1838-01-01 (§4). Kırılmanın maddesi VAR '
          '(olaylar_p0917kosu13.js, aynı gün). YAMA-CERKEZISTAN-0917 C-2, UYGULA-4."},'
          '{f:"1838-01-01",t:"1923-10-29",d:"rusya"}')

S_MAYKOP = ('{f:"1829-09-14",t:"1864-07-01",d:"cerkez",kaynak:"TDV cerkezler: Ruslar '
            '\'1861-1864\'te Abzeh, Şapsığ ve Ubıhlar\'ın topraklarını işgal ettiler\' — iç '
            'kesim kıyıdan 26 yıl sonra düştü. ⚠️ GÜN KAYNAKTAN DEĞİL: TDV \'1861-1864\' '
            'diyor, gün vermiyor; 1864-07-01 atlastaki mevcut sürgün maddesinin günüdür '
            '(olaylar_ek14.js) ve DEVRALINDIĞI BURADA BİLDİRİLİYOR. Kaba tarih (1864-01-01) '
            'seçilseydi ±30 günde madde olmadığı için Değişmez 2 açılırdı. '
            'YAMA-CERKEZISTAN-0917 C-2, UYGULA-4 18 Eyl 2026."},'
            '{f:"1864-07-01",t:"1923-10-29",d:"rusya"}')

# (ad, eski parça, yeni parça) — her eski parça TAM BİR KEZ bulunacak
ESKI_BOSLUK = '{f:"1441-01-01",t:"1475-06-06",d:"__BOSLUK__",kaynak:"TDV anapa:'
DEG = []
for ad, lat in (("Soçi (Sâşe)", "43.585"), ("Tuapse", "44.103"), ("Maykop (Çerkezya)", "44.609")):
    kiyi = ad != "Maykop (Çerkezya)"
    DEG.append((ad + " · C-1 d→v",
                f'lat:{lat}, lon:', f'lat:{lat}, lon:'))  # yer tutucu (aşağıda gerçek işlem)
    DEG.append((ad, None, None))
DEG = []

s = io.open(YOL, encoding="utf-8").read()
hata = []


def tek(parca):
    n = s.count(parca)
    if n != 1:
        hata.append(f"{n} kez bulundu: {parca[:70]}")
    return n == 1


islem = []
for ad, lat, kiyi in (("Soçi (Sâşe)", "43.585", True),
                      ("Tuapse", "44.103", True),
                      ("Maykop (Çerkezya)", "44.609", False)):
    # ① d: → v: (C-1) — kaydın kendi lat'ı ile benzersizleştirilir
    eski_d = f'lat:{lat}, lon:'
    tek(eski_d)
    # ② __BOSLUK__ kaynak başlangıcı → cerkez (C-4, GÜN DEĞİŞMEZ)
    # ③ rusya dilimi → cerkez + rusya (C-2)
    eski_s = '{f:"1829-09-14",t:"1923-10-29",d:"rusya"}'
    islem.append((ad, lat, kiyi, eski_s))

print(f"kayıt: {len(islem)} · '{ESKI_BOSLUK[:40]}…' dosyada {s.count(ESKI_BOSLUK)} kez · "
      f"'1829→1923 rusya' {s.count('{f:\"1829-09-14\",t:\"1923-10-29\",d:\"rusya\"}')} kez")

satirlar = s.split("\n")
yeni_satirlar = list(satirlar)
degisen = 0
for ad, lat, kiyi, eski_s in islem:
    idx = [i for i, x in enumerate(satirlar) if x.startswith(f'{{ ad:"{ad}",')]
    if len(idx) != 1:
        hata.append(f"{ad}: {len(idx)} satır bulundu"); continue
    i = idx[0]
    x = yeni_satirlar[i]
    # C-1 — d: boşaltılır, v:'ye cerkez himaye dilimi eklenir
    eski_d_alan = 'd:[{f:"1783-04-19",t:"1829-09-14"}]'
    if x.count(eski_d_alan) != 1:
        hata.append(f"{ad}: d: alanı {x.count(eski_d_alan)} kez"); continue
    x = x.replace(eski_d_alan, 'd:[]')
    if x.count('}], neden:') == 1:                       # v: dizisinin sonu
        x = x.replace('}], neden:', '},' + V_CERKEZ + '], neden:')
    elif x.count('}],  neden:') == 1:
        x = x.replace('}],  neden:', '},' + V_CERKEZ + '],  neden:')
    else:
        hata.append(f"{ad}: v: dizisinin sonu bulunamadı"); continue
    # C-4 — kimlik __BOSLUK__ → cerkez (gün aynı), kaynak metni yenilenir
    b0 = x.find('{f:"1441-01-01",t:"1475-06-06",d:"__BOSLUK__"')
    if b0 < 0:
        hata.append(f"{ad}: __BOSLUK__ dilimi yok"); continue
    b1 = x.find('},{f:"1774-07-21"', b0)
    if b1 < 0:
        hata.append(f"{ad}: __BOSLUK__ diliminin sonu yok"); continue
    x = (x[:b0] + '{f:"1441-01-01",t:"1475-06-06",d:"cerkez",' + K_CERKEZ_ERKEN + x[b1:])
    # C-2 — rusya dilimi bölünür
    if x.count(eski_s) != 1:
        hata.append(f"{ad}: 1829→1923 rusya dilimi {x.count(eski_s)} kez"); continue
    x = x.replace(eski_s, S_KIYI if kiyi else S_MAYKOP)
    yeni_satirlar[i] = x
    degisen += 1
    print(f"  ✓ {ad}: d→v · __BOSLUK__→cerkez · rusya bölündü "
          f"({'1838' if kiyi else '1864'})")

if hata:
    print("🔴 HATA — DİSKE HİÇBİR ŞEY YAZILMADI:")
    for h in hata:
        print("   ", h)
    sys.exit(2)
if degisen != 3:
    print("🔴 3 kayıt beklenirken", degisen, "— DURDUM"); sys.exit(2)

if YAZ:
    io.open(YOL, "w", encoding="utf-8", newline="").write("\n".join(yeni_satirlar))
    print("🟢 yazıldı:", YOL)
else:
    print("KURU KOŞU — yazmak için --yaz")
