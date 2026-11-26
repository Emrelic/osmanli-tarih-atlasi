# -*- coding: utf-8 -*-
"""UYGULA-4 · YAMA-SEFER1768-0917 Y-1 / Y-2 / Y-3 uygulayıcısı — 18 Eylül 2026.

    py denetim/ARAC-UYGULA4-SEFER-0918.py          KURU KOŞU
    py denetim/ARAC-UYGULA4-SEFER-0918.py --yaz    yazar

Karar: 1.MURAT M-4500 — Y-1 KABUL (kayıt düzeyinde) · Y-2/Y-3 KABUL, gün ALT SINIR ve kayda
AÇIKÇA yazılır · Y-3 K-1 maddesinden SONRA (K-1/K-2/K-3 data/olaylar_p0065.js'te, r9225).

🔴 KAYIT DÜZEYİNDE (D001): her işlem yalnız kendi kaydının metin aralığında yapılır
   ({ ad:"X" … bir sonraki "{ ad:" ya da "];"). Her eski parça o aralıkta TAM BİR KEZ
   bulunmazsa exit 2 ve HİÇBİR DOSYA yazılmaz.
🟢 Bahçesaray ATLANIR: ölçüldü, zaten hedef durumda (v→1774-07-21 · isg rusya 1771-07-01 ·
   s:rusya 1771 yok).
"""
import io, os, re, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAZ = "--yaz" in sys.argv
D = lambda f: os.path.join(KOK, "data", f)

K_Y1 = ("TDV kirim — '1771'de Prens Dolgorukov idaresinde Kırım yarımadasını istilâ ettiler', "
        "'1772'de Rus işgali altında toplanan kurultay' · TDV mustafa-iii — 'Temmuz 1771'. "
        "İŞGALDİR, ilhak DEĞİL (ilhak 1783): hanlığın Osmanlı'ya tâbiliği Küçük Kaynarca'ya kadar "
        "sürdü ⇒ v: 1774-07-21'e uzatıldı, s:rusya 1771-1774 kaldırıldı; kıyı kalelerinin isg "
        "modeliyle aynı. ")
GUN_AY = ("⚠️ GÜN: kaynak yalnız AY veriyor (Temmuz 1771) — 1771-07-01 bir AY KODUDUR, olay günü "
          "DEĞİLDİR. ")
GUN_ORKAPI = ("GÜN: 1771-06-26 = Voennaya Entsiklopediya «Перекоп» '15 июня … гарнизон крепостцы "
              "сдался' (Jülyen 15 Haziran + 11). ")
SON = "YAMA-SEFER1768-0917 Y-1 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026."

K_Y2 = ("RBS «Щербатов, Федор Федорович» — 'В июле того же года он, после некоторого "
        "сопротивления, занял Керчь, Еникале и Тамань' · ЭСБЕ «Керчь» ('Русские вновь овладели К. "
        "в 1771 г.') · VE «Керчь». İŞGAL, ilhak değil: Küçük Kaynarca ile Rusya'ya bırakıldı. "
        "⚠️ GÜN KAYNAKTA YOK — kaynak yalnız 'Temmuz' (Jülyen) diyor ⇒ Gregoryen 12 Temmuz–11 Ağustos; "
        "1771-07-12 bu aralığın İLK günüdür, bir ALT SINIRDIR, olay günü DEĞİLDİR. "
        "YAMA-SEFER1768-0917 Y-2 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026.")

K_Y3 = ("Руссев 2012 — Yedisan ordası Ağustos 1770'te Panin'le antlaşıp 'от Порты Оттоманской "
        "отщепились и отдаемся под протекцию императрицы' · ЭСБЕ «Ногаи» · Грибовский 2016 "
        "(1771-72 Kuban'a göçürülme). Hukukî bağ (hanlığa gevşek tâbilik) Kaynarca'ya kadar sürdü ⇒ "
        "v: KORUNDU, isg üstüne biner. ⚠️ GÜN KAYNAKTA YOK — 'в августе 1770 г.' (makale 'по старому "
        "стилю' diyor, Jülyen) ⇒ Gregoryen 12 Ağustos–11 Eylül; 1770-08-12 bir ALT SINIRDIR, olay günü "
        "DEĞİLDİR. Kırılmanın maddesi K-1 (data/olaylar_p0065.js, aynı gün). "
        "YAMA-SEFER1768-0917 Y-3 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026.")


def isg(f, kaynak):
    return 'isg:[{f:"%s",t:"1774-07-21",d:"rusya",kaynak:"%s"}], ' % (f, kaynak.replace('"', "'"))


# (dosya, ad, işlemler)  işlem = ("yer", eski, yeni) | ("ekle_isg", metin)
IS = []
for ad, f in (("Gözleve (Kezlev)", "1771-07-01"), ("Or Kapı (Ferahkirman)", "1771-06-26"),
              ("Akmescid", "1771-07-01"), ("Karasubazar", "1771-07-01"),
              ("Eski Kırım (Solhat)", "1771-07-01")):
    gun = GUN_ORKAPI if f == "1771-06-26" else GUN_AY
    IS.append(("yerlesimler_kirim.js", ad, [
        ("yer", 'v:[{f:"1475-06-06",t:"1771-07-01",k:"Kırım Hanlığı"',
                'v:[{f:"1475-06-06",t:"1774-07-21",k:"Kırım Hanlığı"'),
        ("yer", '{f:"1771-07-01",t:"1774-07-21",d:"rusya"},', ''),
        ("ekle_isg", isg(f, K_Y1 + gun + SON)),
    ]))
for dosya, ad in (("yerlesimler.js", "Kerç"), ("yerlesimler_ok106.js", "Yenikale"),
                  ("yerlesimler.js", "Taman")):
    IS.append((dosya, ad, [("ekle_isg", isg("1771-07-12", K_Y2))]))
IS.append(("yerlesimler_ek_bozkir.js", "Yedisan bozkırı",
           [("ekle_isg", isg("1770-08-12", K_Y3).replace('t:"1774-07-21"', 't:"1774-07-21"'))]))

metin, hata = {}, []
for dosya, ad, islem in IS:
    if dosya not in metin:
        metin[dosya] = io.open(D(dosya), encoding="utf-8").read()
    s = metin[dosya]
    bas_re = re.compile(r'\{\s*ad:\s*"' + re.escape(ad) + r'"\s*,')
    m = list(bas_re.finditer(s))
    if len(m) != 1:
        hata.append(f"{dosya} · {ad}: kayıt başı {len(m)} kez"); continue
    b = m[0].start()
    sonraki = re.compile(r'\n\s*\{\s*ad:|\n\];').search(s, m[0].end())
    e = sonraki.start() if sonraki else len(s)
    kayit = s[b:e]
    if "isg:" in kayit:
        hata.append(f"{dosya} · {ad}: kayıtta ZATEN isg: var — elle bakılmalı"); continue
    for op in islem:
        if op[0] == "yer":
            n = kayit.count(op[1])
            if n != 1:
                hata.append(f"{dosya} · {ad}: '{op[1][:45]}' {n} kez"); break
            kayit = kayit.replace(op[1], op[2])
        else:
            bas = m[0].group(0)
            kayit = bas + " " + op[1] + kayit[len(bas):].lstrip()
    metin[dosya] = s[:b] + kayit + s[e:]
    print(f"  ✓ {dosya:26s} {ad}")

if hata:
    print("🔴 HATA — HİÇBİR DOSYA YAZILMADI:")
    for h in hata:
        print("   ", h)
    sys.exit(2)
print(f"işlenen kayıt: {len(IS)} · dosya: {len(metin)}")
if YAZ:
    for dosya, s in metin.items():
        io.open(D(dosya), "w", encoding="utf-8", newline="").write(s)
    print("🟢 yazıldı:", ", ".join(metin))
else:
    print("KURU KOŞU — yazmak için --yaz")
