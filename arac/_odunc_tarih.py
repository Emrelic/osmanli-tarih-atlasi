# -*- coding: utf-8 -*-
"""ÖDÜNÇ TARİH AVCISI — `Değişmez 2`nin GÖRMEDİĞİ bir kusur sınıfı.

    py arac/_odunc_tarih.py               ilk 20 küme
    py arac/_odunc_tarih.py --hepsi       tamamı
    py arac/_odunc_tarih.py --km 300      eşiği değiştir

═══ NİÇİN VAR — bir işçi oturumun şüphesi ÖLÇÜLDÜ ve DESEN ÇIKTI ═══
PAKET-0023 (1 Eylül 2026) Kalocsa ve Şimontorna'nın Budin ile **TAM AYNI
GÜN** bittiğini fark etti ve *"muhtemelen ödünç tarih"* dedi. Ölçüldü:

    1686-09-02   Budin · Peşte · Kalocsa · Şimontorna · Hatvan   137 km
    1689-09-24   Niş · Vidin · Kragujevac · Çaçak · Şehirköy     202 km
    1690-09-09   Belgrad · Niş · Vidin · Semendire · Kragujevac
                 · Çaçak · Şehirköy                             252 km

⇒ Üç kümede **17 kayıt**. Ve dış kaynak ikisini doğrudan çürütüyor:
Şimontorna 26/27 Eylül, Kalocsa 13 Ekim 1686'da düşmüş — Budin'den
haftalar sonra. Belgrad da 1690-09-09'da değil, Ekim 1690'da geri alındı.

🔴 VE `Değişmez 2` BUNU GÖREMEZ — ve göremeyeceği yapısal:
`2` şunu sorar: *"bu kırılmanın ±30 gün içinde bir kronoloji maddesi var
mı?"* Cevap **EVET** — Budin'in düşüşü ve Niş'in düşüşü yazılı maddeler.
Yani beş kaydın beşi de TEMİZ görünüyor, oysa **dördü o gün el
değiştirmedi.** Denetim *"maddesi var mı"* diye sorar, *"bu madde BU
YERLEŞİM için mi"* diye SORMAZ.
📌 `CLAUDE.md §11`: *"denetim var ≠ o soruyu soruyor."* Bu, o ailenin
tarih tarafı.

═══ ÖLÇÜT ═══
Bir gün, birbirinden UZAK birçok yerleşim tarafından paylaşılıyorsa
bu bir ödünç-tarih imzasıdır: **iki yüz kilometre ötedeki iki kale aynı
gün düşmez.** Ordu yürür, kuşatma sürer.

⚠️ VE MEŞRU İSTİSNALARI VAR — bu betik SUÇLAMAZ, SORAR:
    · ANTLAŞMA günü      tek kalemde çok yer devreder (Karlofça, Pasarofça)
    · devlet YIKILIŞI    merkez düşünce künye biter
    · toplu İLHAK        tek kararla çok yer
⇒ Çıktı bir *"burada bir SORU SORULMADI"* listesidir, bir suç listesi
  değil. Antlaşma günleri `MESRU_GUNLER`e yazılarak susturulur — ama
  **gerekçesiyle**, sessizce değil.
"""
import io
import json
import math
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# En az kaç yerleşim + en az kaç km yayılım ⇒ şüpheli
ESIK_KAYIT = 3
ESIK_KM = 150.0
# 🔴 ÜST SINIR — ve niçin gerekli olduğu ÖLÇÜLDÜ.
#   Üst sınırsız koşunca tepeye şunlar çıktı:
#       1917-11-07 · 346 kayıt · sovyet-rusya   ← EKİM DEVRİMİ
#   Bu ödünç tarih DEĞİL, gerçek bir toplu rejim değişimi.
#   ⇒ İki kusur sınıfı BÜYÜKLÜKLE ayrışıyor:
#       ÇOK kayıt (>%d)  siyasî olay — devrim · antlaşma · toplu ilhak
#       AZ  kayıt (3-%d) SEFER ölçeği — ve ordu bir günde 200 km'lik
#                        beş kaleyi birden alamaz ⇒ ÖDÜNÇ İMZASI
#   Bu ayrım bir ÇIKARIMDIR, ölçüm değil: büyük kümelerin hepsinin meşru
#   olduğunu SINAMADIM. Üst sınırı --tavan ile kaldırıp bakılabilir.
ESIK_TAVAN = 12

# 🔴 MEŞRU PAYLAŞIMLAR — gerekçesiz satır EKLENMEZ.
#   Bir günü buraya yazmak "bu gün denetlenmesin" demektir; sebebi
#   yazılmazsa yarın kimse o kararın niçin verildiğini bilemez.
MESRU_GUNLER = {
    # "1699-01-26": "Karlofça Antlaşması — tek kalemde çok yer devretti",
}


def km(a, b, c, d):
    R = 6371.0
    dl, dn = math.radians(c - a), math.radians(d - b)
    h = (math.sin(dl / 2) ** 2
         + math.cos(math.radians(a)) * math.cos(math.radians(c))
         * math.sin(dn / 2) ** 2)
    return 2 * R * math.asin(math.sqrt(h))


# Veriyi KENDİ DİLİNDE ayrıştır — regex yazma (CLAUDE.md, üç kez öğrenildi)
JS = r"""
global.window = {};
const fs = require('fs');
// 🔴 DOSYA KÜMESİ ARGÜMANDAN GELİR — `readdirSync` DEĞİL.
//   İlk sürüm `data`yı desenle tarıyordu ve BAĞLANMAMIŞ dosyaları da
//   okuyordu. Zararı ölçüldü (2 Eylül 2026, PAKET-KUCUKLER'in yan bulgusu):
//   `Medâin-i Sâlih` ve `el-Ulâ` "İKİŞER KEZ listelenmiş" göründü — oysa
//   ikisi de HENÜZ BAĞLANMAMIŞ iki ayrı partide duruyordu (ok101 · ok102),
//   yani haritada hiç çizilmiyorlardı. Alet olmayan bir mükerreri bildirdi.
//   📌 `CLAUDE.md §5`: *"ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI
//     okuduğunu da doğrulamak gerekiyor."* Bu dersi bu araç yazılırken
//     ALINTILAMIŞTIM ve KENDİ ALETİMDE UYGULAMAMIŞTIM.
//   ⚠️ `argv[1]`, `argv[2]` DEĞİL: `node -e` ile script DOSYASI yok, o
//     yüzden ilk kullanıcı argümanı 1. sıraya düşer. İlk yazımda `[2]`
//     yazdım ve alet SESSİZCE "0 yerleşim" dedi — hata vermedi, boş döndü.
//     Sınanmasaydı "0 şüpheli küme" TEMİZ diye okunacaktı.
for (const f of JSON.parse(process.argv[1] || '[]')) {
  try { eval(fs.readFileSync('data/' + f, 'utf8')); } catch (e) {}
}
const cik = [];
for (const k of Object.keys(global.window)) {
  const v = global.window[k];
  if (!Array.isArray(v)) continue;
  for (const r of v) {
    if (!r || !r.ad || r.lat === undefined) continue;
    cik.push({ad: r.ad, lat: r.lat, lon: r.lon,
              d: r.d || [], s: r.s || [], v: r.v || [], isg: r.isg || []});
  }
}
process.stdout.write(JSON.stringify(cik));
"""


def main(argv):
    global ESIK_KM
    hepsi = "--hepsi" in argv
    if "--km" in argv:
        ESIK_KM = float(argv[argv.index("--km") + 1])

    # 🔴 EVREN `girdi.py`DEN — desenle taramaktan DEĞİL.
    #   Yalnız BAĞLI yerleşim dosyaları okunur; bağlanmamış partiler
    #   haritada çizilmiyor, dolayısıyla bir "ödünç tarih" de üretemezler.
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import girdi as _g
    _yer = [f for f in _g.GIRDI_DOSYALARI if f.startswith("yerlesimler")]
    p = subprocess.run(["node", "-e", JS, json.dumps(_yer)],
                       cwd=KOK, capture_output=True)
    if p.returncode != 0:
        print("NODE HATASI:\n" + p.stderr.decode("utf-8", "replace")[:600])
        return 2
    Y = json.loads(p.stdout.decode("utf-8"))

    gun = {}
    for r in Y:
        for alan in ("d", "s", "v", "isg"):
            for par in r[alan]:
                f = (par or {}).get("f")
                if not f or f <= "1281-01-01" or f >= "1923-10-29":
                    continue
                sahip = par.get("d") or alan
                gun.setdefault(f, []).append((r["ad"], r["lat"], r["lon"], sahip))

    # 🔴 İLK ÖLÇÜTÜM ÇÜRÜDÜ — ve niçin, kayda geçiyor.
    #   Yalnız "aynı gün + uzak" dedim ve tepeye şu çıktı:
    #       1438-01-01 · 26 kayıt · 19.467 km · Cusco <-> Roi Et
    #       (Kazan Hanlığı + Ayutthaya + İnka — birbiriyle ALAKASIZ)
    #   Bu ödünç tarih DEĞİL, `YYYY-01-01` YUVARLAMA kuralının izi:
    #   `CLAUDE.md §4` *"gün bilinmiyorsa YYYY-01-01 yaz"* diyor, yani
    #   o gün bir GÜN İDDİASI DEĞİL, "gün bilinmiyor" beyanıdır.
    #   ⇒ İki daraltma şart:
    #     ① AYNI SAHİP — bir sefer tek devletin seferidir
    #     ② YUVARLAK GÜN HARİÇ — 01-01 bir iddia değil, bir beyandır
    #   `§11`: *ölçüm doğru, EVREN yanlış.*
    yuvarlak = atlanan_yuvarlak = 0
    kume = {}
    for g, L in gun.items():
        if g in MESRU_GUNLER:
            continue
        if g.endswith("-01-01"):
            yuvarlak += 1
            atlanan_yuvarlak += len(L)
            continue
        for ad, la, lo, sahip in L:
            kume.setdefault((g, sahip), []).append((ad, la, lo, sahip))

    supheli = []
    buyuk = []
    for (g, sahip), L in kume.items():
        if len(L) < ESIK_KAYIT:
            continue
        if len(L) > ESIK_TAVAN and "--tavan" not in argv:
            buyuk.append((len(L), g, sahip))
            continue
        en, cift = 0.0, None
        for i in range(len(L)):
            for j in range(i + 1, len(L)):
                d = km(L[i][1], L[i][2], L[j][1], L[j][2])
                if d > en:
                    en, cift = d, (L[i][0], L[j][0])
        if en >= ESIK_KM:
            supheli.append((en, "%s  [%s]" % (g, sahip), L, cift))
    supheli.sort(reverse=True)

    print("ÖDÜNÇ TARİH AVI — ölçüt: AYNI GÜN + AYNI SAHİP + >=%d kayıt "
          "+ >=%.0f km yayılım" % (ESIK_KAYIT, ESIK_KM))
    print("yerleşim: %d · kırılma günü: %d · ŞÜPHELİ KÜME: %d"
          % (len(Y), len(gun), len(supheli)))
    print("⚠️ YUVARLAK GÜN (…-01-01) HARİÇ TUTULDU: %d gün · %d kayıt —"
          % (yuvarlak, atlanan_yuvarlak))
    print("   sebebi §4: 'gün bilinmiyorsa YYYY-01-01 yaz'. O gün bir GÜN")
    print("   İDDİASI değil, 'gün bilinmiyor' BEYANIDIR; ödünç sayılamaz.")
    print("BÜYÜK KÜME (>%d kayıt) AYRI TUTULDU: %d — siyasî olay ölçeği"
          % (ESIK_TAVAN, len(buyuk)))
    print("   (devrim · antlaşma · toplu ilhak). `--tavan` ile görünür.")
    for n, g, sahip in sorted(buyuk, reverse=True)[:6]:
        print("      %s  [%s]  %d kayıt" % (g, sahip, n))
    print("🔴 Bu bir SUÇ listesi değil, bir SORU listesi — meşru")
    print("   paylaşımlar var (antlaşma günü · devlet yıkılışı · toplu ilhak).")
    print()
    for en, g, L, cift in (supheli if hepsi else supheli[:20]):
        print("%s  %2d kayıt · yayılım %5.0f km  (%s <-> %s)"
              % (g, len(L), en, cift[0], cift[1]))
        for ad, _, _, sahip in sorted(L):
            print("      %-30s %s" % (ad[:30], sahip))
    if not hepsi and len(supheli) > 20:
        print("\n… %d küme daha (--hepsi)" % (len(supheli) - 20))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
