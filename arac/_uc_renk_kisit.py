# -*- coding: utf-8 -*-
"""ÜÇ YENİ RENK — ÇÖZÜCÜNÜN KURAMADIĞI KISITI ELLE KUR VE SINA.

🔴 NİÇİN GEREKLİ — ölçüldü, tahmin değil.
`renk_olc.py --oner varsova-dukaligi,kongre-polonyasi,transkafkasya`
şunu bastı ve önerisi KULLANILAMAZDI:
```
yeniler arası komşuluk: 0 çift
varsova-dukaligi   #242ad2
kongre-polonyasi   #2430d2
transkafkasya      #2436d2
```
Üçü de **neredeyse aynı mavi** — tek kanalda 6 birim fark. Sebep:
`engel_kumesi()` **Voronoi komşuluğuna** dayanıyor, ve bu üç kimlik
birbirinin komşusu DEĞİL (varsova ile kongre AYNI NOKTALARIN farklı
zamanları — hiçbir gün aynı sahnede olmuyorlar).

⇒ `OPUS HAZIR KITA 128`in **koşudan önce** bildirdiği `luba ↔ lunda`
tuzağının birebir tekrarı: *"hangisi önce çözülürse ikincisi sözlükte
olmayacak, dal False dönecek, kısıt SESSİZCE ATLANACAK."*
Ve `renkler.py:408 · :1082`daki *"assert ile SINANDI"* güvencesi
**depoda yok** (iki eşleşme de yorum içinde) — yani hiçbir şey durdurmazdı.

🔴 VE KISIT ANLATIDAN GELİYOR, veriden değil:
çekirdek maddenin açıklaması, künyenin `f:` gününde (1815-06-09):
   "Varşova Dukalığı'nın büyük kısmı «Kongre Polonyası» adıyla Rusya'ya
    bağlandı"
Üç kimlik TEK CÜMLEDE. Kullanıcı o maddeyi okurken üçünü de ayırt
edebilmeli — `bugis ↔ gova` emsali.

BU BETİK İKİ SINAVI DA YAPAR ve ikisi AYRI:
   ① KISIT KURULDU MU   — beklenen her kenar gerçekten sınandı mı
   ② KISIT İŞE YARADI MI — çözüm sonrası ΔE eşiği GERÇEKTEN geçiyor mu
`assert` ①'i korur: kurulamayan kenar betiği DURDURUR.

kullanım:  py arac/_uc_renk_kisit.py
"""
import itertools
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import renk_olc as R                                    # noqa: E402

# ---- BEKLENEN KISIT LİSTESİ — `assert`in girdisi (OK128 · OK127) ----
YENI = ["varsova-dukaligi", "kongre-polonyasi", "transkafkasya"]
IC_KENAR = [("varsova-dukaligi", "kongre-polonyasi", 25),
            ("varsova-dukaligi", "transkafkasya",    25),
            ("kongre-polonyasi", "transkafkasya",    25)]
DIS_KENAR = [("varsova-dukaligi", "rusya",     25),
             ("kongre-polonyasi", "rusya",     25),
             ("varsova-dukaligi", "almanya",   12),
             ("varsova-dukaligi", "avusturya", 12),
             ("kongre-polonyasi", "almanya",   12),
             ("kongre-polonyasi", "avusturya", 12),
             ("transkafkasya", "rusya",                             12),
             ("transkafkasya", "sovyet-rusya",                      12),
             ("transkafkasya", "rusya-gecici-hukumet",              12),
             ("transkafkasya", "gurcistan-demokratik-cumhuriyeti",  25),
             ("transkafkasya", "ermenistan-demokratik-cumhuriyeti", 25),
             ("transkafkasya", "azerbaycan-demokratik-cumhuriyeti", 25)]

B = R.BOYALAR


def hx(kimlik):
    v = B.get(kimlik)
    if v is None:
        return None
    return v[1] if isinstance(v, (tuple, list)) else v


# ---- ① KISIT KURULABİLİYOR MU — kurulamıyorsa DUR ----
print("### ① KISIT KURULUYOR MU")
eksik = [k for _, k, _ in DIS_KENAR if hx(k) is None]
assert not eksik, (
    "🔴 DUR — dış kenarın karşı tarafı BOYALAR'da yok: %s. "
    "Kısıt kurulamaz; sessizce atlanmasındansa çözücü DURUR "
    "(luba↔lunda dersi)." % ", ".join(sorted(set(eksik))))
print("   dış kenar %d · karşı tarafların hepsi BOYALAR'da 🟢" % len(DIS_KENAR))
print("   iç kenar  %d · üçü de YENİ ⇒ çözücü bunları KURAMAZ, "
      "elle kuruluyor 🟢" % len(IC_KENAR))

# ---- ADAY ÜRET ----
print("\n### ADAY ARAMA")


def dE_hex(h1, h2):
    return R.dE(R.lab(R.h2r(h1)), R.lab(R.h2r(h2)))


# 🔴 ENGEL KÜMESİ ELLE YAZILMAZ — ARACIN KENDİSİNE SORULUR.
#   İlk sürüm `DIS_KENAR`ı elle saymıştı (rusya · almanya · avusturya…)
#   ve `renk_olc.py --dogrula` ONU ÇÜRÜTTÜ: seçilen renklerin eşik ALTI
#   komşuları çıktı —
#       kongre-polonyasi → eflak 4,9 · bogdan 9,4 · macaristan 9,4
#       varsova-dukaligi → parma 9,9
#   Dördü de benim listemde YOKTU. Aracın komşuluğu Voronoi ∪ 1500 km
#   EŞZAMANLI; benimki bir tahmindi.
#   📌 `§11`: "engel kümesi, kapatılmak istenen çifti içermiyorsa çözüm o
#   çifti çözmez — ve çözücü bunu söylemez, «çözdüm» der." Bu sefer
#   söyleyen `--dogrula` oldu.
#   ⇒ Dış kenarlar ARAÇTAN, iç kenarlar ELDEN (araç onları kuramıyor).
engeller = {}
for k in YENI:
    try:
        arac_engel = R.engel_kumesi(k)
    except Exception as e:                                   # pragma: no cover
        raise SystemExit("🔴 DUR — engel_kumesi(%s) çağrılamadı: %s" % (k, e))
    otomatik = [(o, 12) for o in sorted(set(arac_engel)) if hx(o)]
    elle = [(o, e) for a, o, e in DIS_KENAR if a == k]
    # elle yazılan eşik daha SIKIYSA o geçerli (anlatı sıkılaştırması)
    birlesik = {}
    for o, e in otomatik + elle:
        birlesik[o] = max(birlesik.get(o, 0), e)
    engeller[k] = sorted(birlesik.items())
    print("   %-20s araçtan %3d engel · elden %2d · birleşik %3d"
          % (k, len(otomatik), len(elle), len(engeller[k])))

# ızgara: ton × açıklık × doygunluk
import colorsys
adaylar = []
for hdeg in range(0, 360, 6):
    for lig in (0.35, 0.45, 0.55, 0.65):
        for sat in (0.55, 0.75, 0.95):
            r, g, b = colorsys.hls_to_rgb(hdeg / 360.0, lig, sat)
            adaylar.append("#%02x%02x%02x"
                           % (int(r * 255), int(g * 255), int(b * 255)))
adaylar = sorted(set(adaylar))
print("   aday: %d" % len(adaylar))

uygun = {}
for k in YENI:
    iyi = []
    for h in adaylar:
        if all(dE_hex(h, hx(o)) >= e for o, e in engeller[k]):
            iyi.append(h)
    uygun[k] = iyi
    print("   %-20s dış kenarları geçen aday: %d" % (k, len(iyi)))
    assert iyi, "🔴 DUR — %s için dış kenarları geçen aday YOK" % k

# ---- İÇ KENARLARI DE SAĞLAYAN ÜÇLÜ — AÇGÖZLÜ SIRALI ----
# 🔴 İlk sürüm ÜÇLÜ TARAMA yapıyordu (60×60×60) ve 292 işlemci saniyesi
#   yakıp çıktı vermedi. `dE` Python'da ve vektörize değil.
#   ⇒ Açgözlü sıralı seçim: her adım O(n), ve HER ADIMDA önceki seçimler
#     engel kümesine EKLENİYOR — yani `luba↔lunda` tuzağının çaresi
#     algoritmanın İÇİNDE, sonradan yapılan bir kontrolde değil.
print("\n### İÇ KENARLAR — açgözlü sıralı seçim")
secim = {}
for k in YENI:
    onceki = [(o, 25) for o in secim.values()]      # seçilenler ENGEL olur
    # 🔴 ÖLÇÜT "EN AYRIK" DEĞİL — ilk sürüm en zayıf kenarı büyütüyordu ve
    #   saf birincilleri seçti (#1f1ff9 · #1ff91f · #f91f8c). Kısıtlar
    #   sağlanıyordu ama palet kaba oluyordu; aracın kendi uyarısı bunu
    #   söylüyor: "'meşru' der, 'güzel' demez."
    #   ⇒ Kısıt bir EŞİKTİR, bir hedef değil. Eşiği RAHATÇA geçen adaylar
    #     arasından, paletin geri kalanına benzeyen (orta doygunluk, orta
    #     açıklık) olan seçilir. `§11`: "uyum ÖLÇÜT değil TERCİHTİR;
    #     eşiği geçen adaylar arasında ayrım yapar, EŞİĞİ DEĞİŞTİRMEZ."
    import colorsys as _cs
    gecen = []
    for h in uygun[k]:
        if onceki and any(dE_hex(h, o) < e for o, e in onceki):
            continue
        p = min([dE_hex(h, hx(o)) for o, _ in engeller[k]]
                + [dE_hex(h, o) for o, _ in onceki])
        gecen.append((h, p))
    assert gecen, (
        "🔴 DUR — %s için hem dış hem iç kenarları geçen aday YOK. "
        "Kısıt çözülemiyor; sessizce gevşetmek yerine DURUYORUM." % k)
    # eşiği RAHAT geçenler: en zayıf kenarı ≥ 30 olanlar (yoksa hepsi)
    rahat = [x for x in gecen if x[1] >= 30] or gecen

    # 🔴 VE TON AYRIMI — ikinci sürümün yan etkisi ölçüldü: üçü de AYNI
    #   MAVİ AİLEYE düştü (#3333b1 · #3359b1 · #337fb1). ΔE eşiği
    #   geçiyordu (30,5) ama Varşova ile Kongre AYNI YERİN ardışık iki
    #   dönemi — okuyucunun en zor ayırt edeceği hâl. Eşik teknik olarak
    #   yetiyor, ANLATI yetmiyor. ⇒ seçilmiş tonlardan uzaklık bir
    #   TERCİH terimi olarak eklendi (eşiği DEĞİŞTİRMEZ).
    _secilmis_ton = []
    for _o in secim.values():
        _r, _g, _b = R.h2r(_o)
        _secilmis_ton.append(_cs.rgb_to_hls(_r / 255.0, _g / 255.0,
                                            _b / 255.0)[0] * 360.0)

    def _uyum(h):
        r, g, b = R.h2r(h)
        hue, lig, sat = _cs.rgb_to_hls(r / 255.0, g / 255.0, b / 255.0)
        # hedef: doygunluk ~0,62 · açıklık ~0,48 (paletin genel kuşağı)
        ceza = abs(sat - 0.62) + abs(lig - 0.48)
        # seçilmiş tonlara YAKINLIK cezası (0-180° → 0,60-0 puan)
        for t in _secilmis_ton:
            d = abs(hue * 360.0 - t)
            d = min(d, 360.0 - d)
            ceza += max(0.0, (90.0 - d) / 90.0) * 0.60
        return ceza

    en_iyi_h, en_iyi_p = min(rahat, key=lambda x: _uyum(x[0]))
    secim[k] = en_iyi_h
    print("   %-20s %s   en zayıf kenar ΔE %5.1f   (eşiği rahat geçen "
          "aday: %d)" % (k, en_iyi_h, en_iyi_p, len(rahat)))

# ---- ② KISIT İŞE YARADI MI — çözüm SONRASI doğrulama ----
print("\n### ② KISIT İŞE YARADI MI — çözüm sonrası ölçüm")
kusur = 0
for a, b, esik in IC_KENAR:
    d = dE_hex(secim[a], secim[b])
    im = "🟢" if d >= esik else "🔴"
    print("   %s %-20s ↔ %-20s ΔE %5.1f  (≥ %d)" % (im, a, b, d, esik))
    kusur += d < esik
for a, o, esik in DIS_KENAR:
    d = dE_hex(secim[a], hx(o))
    if d < esik:
        print("   🔴 %-20s ↔ %-34s ΔE %5.1f  (≥ %d)" % (a, o, d, esik))
        kusur += 1
print("   dış kenar ihlali: %d" % kusur)
assert kusur == 0, "🔴 DUR — seçim kendi kısıtını GEÇMİYOR"

print("\n" + "=" * 62)
print("ÖNERİ — renkler.py'ye yazılacak")
print("=" * 62)
for k in YENI:
    print('    "%s": ("%s", "%s"),' % (k, k, secim[k]))
print("\n📌 Bu liste ONAY İSTER. Araç 'meşru' der, 'güzel' demez.")
