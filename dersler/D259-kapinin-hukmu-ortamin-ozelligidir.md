# D259 — Bir kapının hükmü, o kapıyı KOŞTURAN ORTAMIN özelliğidir

> 4 Ekim 2026 · HAVVA'nın taze klonu · ölçen HAVVA (koşucu), yorumlayan ve
> düzelten YILDIRIM BAYEZIT

## Kural

**Bir kapının "temiz" demesi deponun temiz olduğunu söylemez; o kapıyı koşturan
MAKİNEDE, O ANDAKİ DOSYALARLA temiz olduğunu söyler.** Üç ayrı kusur aynı gün
aynı kökten çıktı ve üçünü de **ikinci bir bakış açısı** (başka makinedeki taze
klon) ortaya çıkardı — birincisinde hiçbiri görünmüyordu.

---

## ① YEŞİL KAPI, COMMIT EDİLMEMİŞ DOSYA SAYESİNDE YEŞİL OLABİLİR

`data/yerlesimler.js`e iki nokta eklendi, `paketle.py yenile` koşturuldu,
`denetle_yayin.py` **TEMİZ** dedi, commit atıldı, push edildi.
HAVVA taze klonladı ve koştu: **PAKET BAYAT.**

Sebep: `paketle.py yenile` **iki** dosya yazar —
```
data/paket_13.js        (demetin kendisi)
data/paket_kunye.json   (her kaynağın sha256'sı — MANİFESTO)
```
Pathspec'e yalnız birincisi yazıldı. Kapı yerelde geçti çünkü **commit
edilmemiş** manifesto tazeydi; yayınlanan ağaçta manifesto bayattı.

🔴 **Kapıyı commit edilmemiş bir dosya geçirdi.** Kapı yanlış ölçmedi; yanlış
AĞACI ölçtü.
⇒ **Taze klon, "ne yayınladım" sorusunun TEK dürüst ölçümüdür.** Kendi
çalışma ağacında yayın kapısı koşturmak, yayını değil masayı denetler.
📌 Yapısal karşılığı: yayıncı rolü (`TOPOLOJI.md`) aynı zamanda **yayın
gerçeğinin tanığıdır** — ve bu bulgu rolün ilk gününde çıktı.

## ② `D223` FAZLALIĞA KARŞI KORUR, EKSİKLİĞE KARŞI KORUMAZ

`D223`: *"dizin pathspec'i ve `git add -A` YASAK; pathspec commit'te de
tekrarlanır."* Bu kural **yanlışlıkla fazla dosya commit'lemeye** karşıdır.
①'deki kusur tam tersiydi: **eksik** commit.

```
git add -A          → fazlalık riski   (D223 bunu keser)
elle pathspec       → EKSİKLİK riski   (D223 bunu KESMEZ)
```
⇒ Ek kural: **bir aracın yazdığı dosyaların listesi ARAÇTAN sorulur, hafızadan
yazılmaz.** Araç koştuktan sonra `git status --porcelain` okunur ve commit
listesi oradan kurulur. `git show --name-only` ile doğrulamak da yetmez — o
yalnız *ne commit'lediğini* gösterir, *ne commit'lemediğini* göstermez.

## ③ BİR ARAÇ KURALI BASIP İHLAL EDEBİLİR — cümle ile ÇIKIŞ KODU ayrışır

HAVVA'da (shapely yok) `denetle.py` şunu bastı:
```
Değişmez 8  !  ÖLÇÜLEMEDİ — No module named 'shapely'.
               "Ölçülemeyen soru TEMİZ DEĞİLDİR."
Ek denetim: konum ... ATLANDI
SONUÇ: temiz                            ← VE ÇIKIŞ 0
```
Araç, `CLAUDE.md §11`in kuralını **ekrana yazıp** ihlal etti. Kök neden kodda
görünür: `except ImportError` dalı doğru cümleyi basıp **`return False`**
veriyordu (= ihlal yok), `main()` de "temiz" diyordu.

🔴 **OTOMASYON CÜMLEYİ OKUMAZ, ÇIKIŞ KODUNU OKUR.** Bir uyarı metni, hükmün
yerine geçmez.
🔴 Ve aynı şey EMRELIC'te de aylardır oluyordu — başka bir sebeple:
`data/devletler_harita.js` diskte yok ⇒ `FileNotFoundError` ⇒ "ÖLÇÜLEMEDİ" +
"temiz". İki makine, iki ayrı kök neden, aynı sessiz yanlış.

**Çare — üç hâl, üç kod:** `0` temiz · `1` İHLAL VAR · `2` ÖLÇÜLEMEDİ.
Ölçülemeyen her soru `OLCULEMEDI_KOVA`ya **adıyla** düşer (sayı değil LİSTE —
borç kapanırken yenisi yerine geçemez). İhlal varsa hüküm 1'dir ama eksik
ölçüm **yine de basılır**: biri ötekini gizlemez.
Sınav: `py denetim/ARAC-OLCULEMEDI-KAPI-SINAV-1004.py` — 12 soru, iki yönde,
④ **gerçek** ölçümsüzlük koşulunda (taklit değil).

⚠️ **Niçin bu acil oldu:** yeni topolojide LAB **denetleyici**. Eksik
bağımlılıklı bir LAB, ölçemediği depoyu "temiz" raporlar ve kimse farketmez.
Kusurun bedeli makine başına değil **GÜVEN başına**.

---

## Ortak kök — ve tek cümlelik ders

Üçünde de **rapor eden şey, doğru olan şey değildi**; ve üçünü de **ikinci,
bağımsız bir bakış** açtı:

| rapor | gerçek | açan şey |
|---|---|---|
| "yayın kapısı temiz" | manifesto bayat yayınlandı | başka makinede TAZE KLON |
| "pathspec disiplinli" | bir dosya eksik commit'lendi | başka makinede kapı ÖTTÜ |
| "SONUÇ: temiz" | iki değişmez HİÇ ölçülmedi | farklı EKSİK BAĞIMLILIK |

⇒ **Bir ölçümü doğrulamanın yolu onu tekrar etmek değil, BAŞKA BİR YERDEN
yapmaktır.** Aynı makinede ikinci kez koşturmak aynı yanlışı aynı güvenle
tekrarlar ([`D236`](D236-olcume-guvenmeden-once-dort-soru.md) ①: *iki ölçümün
uyuşması doğrulama değildir* — bağımsız değillerse).
📌 Ve bu, beş makineli düzenin ummadığımız bir faydası: makineler yalnız iş
bölüşmüyor, **birbirinin kör noktasını** açıyor. HAVVA bir koşu yapmadan,
yalnız klonlayıp iki kapı koşturarak üç kusur buldurdu.
