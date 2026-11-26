# -*- coding: utf-8 -*-
"""KD-ZAMAN-0920 — A SINIFINI MEKANİK KAPATAN ARAÇ (1.MURAT hükmü M-4889 + ara yol)

A SINIFI: Değişmez 3'ün (`degismez3z`) saydığı bir çelişkide, çelişkinin KESİTİ
yerleşimin İLK Osmanlı döneminden (`min d:/v: f`) ÖNCE ise, tek bir
`{1281-01-01 → ilk Osmanlı başlangıcı, k:0, m:null}` penceresi onu kaldırır.

🟢 NİÇİN YENİ BİR İDDİA DEĞİL: kaydın kendi `s:`i o tarihte zaten yabancı bir
devlet gösteriyor. *"Yabancı devletteyken Osmanlı idarî kademesinde değildi"*
bir İÇ TUTARLILIK ifadesidir; `D207`nin yasakladığı şey atlastan TARİH/KOORDİNAT
devşirmektir, bu o değil (hüküm: 1.MURAT, M-4889).

🔴 ARA YOL ŞART (hükmün kendisi): Değişmez 3 bugün kaba bir EKSEN KUSURU
DEDEKTÖRÜ olarak da çalışıyor. Mekanik `kd:` yanlış bir `d:` başlangıcını
DEVRALIR ve uyarı ışığını söndürür. Bu yüzden ilk Osmanlı döneminin `kaynak:`ı
YOKSA kayıt `denetim/KD-ZAMAN-EKSEN-BEKLIYOR-0921.md` listesine yazılır —
sinyal kaybolmaz, taşıyıcı değişir.

⚠️ C SINIFI (yerleşim o kesitte ZATEN Osmanlı, merkezi değil) bu araçla
KAPATILAMAZ: merkezin penceresi gerçek bir tarihî olgudur ve kaynak ister
(Söğüt 1299'da Osmanlı, Bursa 1326'da fethedilir).

Kullanım:
    py denetim/ARAC-KD-ZAMAN-A-SINIFI-0921.py          # yalnız ÖLÇ + liste yaz
    py denetim/ARAC-KD-ZAMAN-A-SINIFI-0921.py --yaz    # kd: alanlarını da YAZ
"""
import sys, io, os, json, collections

sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
import girdi, denetle

YAZ = "--yaz" in sys.argv
LISTE = "denetim/KD-ZAMAN-EKSEN-BEKLIYOR-0921.md"
KUTUK = "denetim/KD-ZAMAN-A-SINIFI-0921.json"   # ne yamandığının KÜTÜĞÜ

# 🔴 NİÇİN KÜTÜK: bu araç A sınıfını ÇELİŞKİLERDEN türetiyor. Yama uygulandıktan
# sonra o çelişkiler YOK, yani araç kendi listesini BİR DAHA ÜRETEMEZ — ilk günün
# sonunda araç ikinci kez koşturulunca 84 satırlık listeyi BOŞ olarak üzerine yazdı.
# Liste artık kütükten render ediliyor; ölçüm boş çıkarsa kütük KORUNUR.

Y = girdi.yukle()
ix = {y["ad"]: y for y in Y}
c3z, _ = denetle.degismez3z(Y)


def ilk_osmanli(y):
    """(en erken d:/v: başlangıcı, o dönemin kaynağı)"""
    en, kynk = None, None
    for kat in ("d", "v"):
        for p in (y.get(kat) or []):
            if en is None or p["f"] < en:
                en, kynk = p["f"], p.get("kaynak")
    return en, kynk


A, C = collections.defaultdict(list), collections.defaultdict(list)
for g, ad, m_ad, a, b in c3z:
    io_, _ = ilk_osmanli(ix[ad])
    (A if (io_ and g < io_) else C)[ad].append((g, m_ad, a, b))

print("A sınıfı: %d kayıt / %d çelişki · C sınıfı: %d kayıt / %d çelişki" % (
    len(A), sum(len(v) for v in A.values()), len(C), sum(len(v) for v in C.values())))

# ---- çapa: `{ ad:"X",` ya da `{ad:"X",` (iki yazım da veride var) ----
metinler, nerede = {}, {}
for fn in girdi.GIRDI_DOSYALARI:
    yol = os.path.join(girdi.DATA, fn)
    metinler[yol] = io.open(yol, encoding="utf-8", newline="").read()

for ad in A:
    for yol, metin in metinler.items():
        for capa in ('{ ad:"%s",' % ad, '{ad:"%s",' % ad):
            if metin.count(capa) == 1:
                nerede[ad] = (yol, capa)
                break
            if metin.count(capa) > 1:
                print("🔴 %s : '%s' içinde çapa %d kez — ATLANDI" % (ad, yol, metin.count(capa)))
        if ad in nerede:
            break

eksik = [a for a in A if a not in nerede]
if eksik:
    print("🔴 çapası bulunamayan: %d — %s" % (len(eksik), eksik[:10]))

kaynakli, kaynaksiz, yazilan, atlanan = [], [], 0, []
for ad in sorted(A):
    y = ix[ad]
    io_, kynk = ilk_osmanli(y)
    kaynak = kynk or y.get("kaynak")
    (kaynakli if kaynak else kaynaksiz).append((ad, io_, len(A[ad]), (kaynak or "")))
    if ad not in nerede:
        continue
    if y.get("kd"):                       # birleştirme gerektirir — elle
        atlanan.append((ad, "kd: ZATEN VAR"))
        continue
    if io_ <= "1281-01-01":               # sıfır uzunluk penceresi YAZILMAZ
        atlanan.append((ad, "ilk dönem ufkun başında"))
        continue
    yol, capa = nerede[ad]
    # 🔴 İKİ PENCERE ŞART — tek pencere YETMEZ (21 Eylül 2026'da ölçüldü):
    # yalnız `{1281 → ilk}` yazılırsa ilk Osmanlı başlangıcından SONRAKİ her gün
    # kd: BOŞLUĞUNA düşer, `kd_gun` (0, None) döner ve o kaydın C SINIFI
    # çelişkileri de SESSİZCE SUSAR. İlk denemede tam bu oldu: öngörü 71 dedi,
    # ölçüm 61 verdi; fark, A ile C'de birden bulunan 7 kaydın (Cübeyl, Ukayr,
    # Selmâs, Hacıbey, Karistos, Çamlıca, İzdin) 10 çelişkisiydi. Ara yolun
    # BÜTÜN AMACI sinyali kaybetmemekti; tek pencere onu kaybediyordu.
    # İkinci pencere bugünkü `k:`/`m:` BİLGİSİNİ aynen taşır, yalnız zaman
    # sınırı kazandırır ⇒ yama SADECE fetih öncesi çelişkiyi kaldırır.
    m = y.get("m")
    kd = ('kd:[{f:"1281-01-01",t:"%s",k:0,m:null},'
          '{f:"%s",t:"1923-10-29",k:%d,m:%s}],' % (
              io_, io_, y.get("k") or 0, ('"%s"' % m) if m else "null"))
    if capa + " kd:" in metinler[yol] or capa + "kd:" in metinler[yol]:
        atlanan.append((ad, "kd: zaten yazılmış"))
        continue
    metinler[yol] = metinler[yol].replace(capa, capa + " " + kd, 1)
    yazilan += 1

print("kaynaklı ilk dönem: %d · KAYNAKSIZ (listeye girer): %d" % (len(kaynakli), len(kaynaksiz)))

# ---- KÜTÜK: ölçüm boşsa (yama zaten uygulanmış) kütükten oku, ÜZERİNE YAZMA ----
if kaynakli or kaynaksiz:
    io.open(KUTUK, "w", encoding="utf-8", newline="\n").write(json.dumps(
        {"kaynaksiz": kaynaksiz, "kaynakli": kaynakli}, ensure_ascii=False, indent=1))
    print("kütük yazıldı:", KUTUK)
elif os.path.exists(KUTUK):
    _k = json.load(io.open(KUTUK, encoding="utf-8"))
    kaynaksiz = [tuple(x) for x in _k["kaynaksiz"]]
    kaynakli = [tuple(x) for x in _k["kaynakli"]]
    print("ölçüm boş (yama uygulanmış) — liste KÜTÜKTEN render ediliyor: %d + %d" % (
        len(kaynaksiz), len(kaynakli)))
print("yazılacak kayıt: %d · atlanan: %d %s" % (yazilan, len(atlanan), atlanan[:5]))

# ---- "eksen doğrulaması bekliyor" listesi ----
sat = ["# KD-ZAMAN-EKSEN-BEKLIYOR — `d:` başlangıcı KAYNAKSIZ olan A sınıfı kayıtlar",
       "",
       "1.MURAT'ın M-4889 hükmündeki **ara yolun** çıktısı. Bu kayıtlara mekanik `kd:`",
       "yazıldı — İKİ pencere: `{1281-01-01 → ilk d:/v: başlangıcı, k:0, m:null}` ve",
       "`{ilk başlangıç → 1923-10-29, k:<kaydın k:si>, m:<kaydın m:si>}` — ve böylece",
       "**yalnız fetih ÖNCESİ** Değişmez 3 çelişkileri kalktı.",
       "🔴 **Ama çelişki, o kaydın `d:` başlangıcının doğruluğunu**",
       "**sorgulayan kaba bir sinyaldi ve şimdi sustu.** Sinyalin yeni taşıyıcısı bu listedir:",
       "aşağıdaki kayıtların ilk Osmanlı döneminin `kaynak:` alanı YOK.",
       "",
       "⚠️ Liste bir KUSUR listesi değildir — `d:` başlangıcı doğru da olabilir; ölçülen tek",
       "şey KAYNAĞININ YAZILI OLMADIĞIDIR (`ölçülemedi ≠ yok ≠ temiz`).",
       "",
       "Üretim: `py denetim/ARAC-KD-ZAMAN-A-SINIFI-0921.py`",
       "",
       "| # | kayıt | ilk `d:`/`v:` başlangıcı | kapanan çelişki |",
       "|---|---|---|---|"]
for i, (ad, io_, n, _k) in enumerate(sorted(kaynaksiz), 1):
    sat.append("| %d | %s | `%s` | %d |" % (i, ad, io_, n))
sat += ["", "## Kaynağı YAZILI olanlar (bilgi için, %d kayıt)" % len(kaynakli), "",
        "| kayıt | ilk başlangıç | kaynak (ilk 60 krk) |", "|---|---|---|"]
for ad, io_, n, k in sorted(kaynakli):
    sat.append("| %s | `%s` | %s |" % (ad, io_, k.replace("|", "·")[:60]))

if YAZ:
    for yol, metin in metinler.items():
        io.open(yol, "w", encoding="utf-8", newline="").write(metin)
    print("YAZILDI: %d dosya" % len(metinler))
io.open(LISTE, "w", encoding="utf-8", newline="\n").write("\n".join(sat) + "\n")
print("liste yazıldı:", LISTE)
