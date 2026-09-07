# HÜKÜM — ÜRETİMİ TEKRARLAMADAN ZİNCİRİ SÜRDÜRME

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026 · 🔴 SALT OKUR
> Hiçbir zincir koşturulmadı (`--kuru` dâhil). Ölçüm `ast` ile kaynaktan;
> aleti: `denetim/SINAV-KOSU8-URETIMSIZ-0907.py`.

---

## 🔴 ÖNCE: **REÇETE TEK SATIR DEĞİL** — `--uretimsiz` DÖRT ADIM ATLIYOR

```
① `--uretimsiz` VERİLİNCE KOŞMAYAN (hepsi `else` dalında):
   🔴 uret_petek.py         satır 191   ← ATLANMASI İSTENEN
   🔴 uret_devirler.py      satır 195
   🔴 uret_altlik.py        satır 211
   🔴 uret_bekleyenler.py   satır 213
② `--uretimsiz` dalının KENDİ adımı: YOK — yalnız tazelik kontrolü
③ HER İKİ HÂLDE koşan: renk_olc · denetle · surum_damgala ·
   denetle_yayin · adres_nobetci · git add/commit/pull/push
```

🔴 **Ve son ikisi tam olarak kapının reddettiği dosyaları üretiyor.**
`kos_ve_yayinla.py:198-210`in kendi yorumu bunu anlatıyor: bu iki üreteç
zincire **4 Eylül'de, ölçülmüş bir yayın reddinden sonra** eklendi —
*"koşu 4b temiz bitti, kapı «taze 4 · BAYAT 3» diyerek REDDETTİ."*

⇒ ***`--uretimsiz` tek başına çalıştırılırsa, o reddin sebebi olan üç
dosya yine tazelenmez ve kapı yine reddeder.*** Bugün ölçülen
`iz_bayat 5`in içinde `data/altlik.js` **zaten var.**

## ⇒ REÇETE — dört adım, ve sırası önemli

```bash
# ⓪ commit mesajını GÜNCELLE (aşağıda ④ — bugünkü dosya 26 GÜN ESKİ)
#    denetim/zincir-commit-mesaji.txt

# ① --uretimsiz'in ATLADIĞI üç üreteci ELLE koştur
py arac/uret_devirler.py
py arac/uret_altlik.py
py arac/uret_bekleyenler.py

# ② sonra zinciri üretimsiz sürdür  (renk_olc → denetle → damga →
#    kapı → adres → git add/commit/pull/push)
py arac/kos_ve_yayinla.py --uretimsiz
```
⚠️ **② `donemler.js` yazıldıktan sonra ALTI SAAT İÇİNDE koşulmalı** (④).

---

## ④ ÜÇ SESSİZ KAPI — üçü de merge gecesinde ısırabilir

### 🔴 ⓐ ALTI SAATLİK TAZELİK EŞİĞİ
`--uretimsiz` dalı `data/donemler.js`in yaşına bakıyor:
```
yas > 6 saat  ⇒  "🔴 ÇIKTI 6 SAATTEN ESKİ — bu, bu geceki koşunun ürünü
                  DEĞİL. Bayat çıktıyı yayınlamak, hiç yayınlamamaktan
                  KÖTÜDÜR. DURDUM, yayın YAPILMADI."   return 1
```
⇒ Üretim bitişi ile komut arasında **6 saatten fazla** geçerse **emniyet
ağı da çalışmaz.** Koşu ~03:00-04:00'te biterse son an **~09:00-10:00.**
🟢 Kapı doğru tasarlanmış (bayat yayını önlüyor); ama **saat işliyor** ve
`denetle.py` ihlallerini kapatmak o pencerenin içinde olmalı.

### 🔴 ⓑ COMMIT MESAJI 26 GÜN ESKİ — ve bu SESSİZ bir kusur
```
denetim/zincir-commit-mesaji.txt   mtime 2026-08-12 17:14
ilk satır: "YAYIN — 1923 Turkiye sinirinin iki boslugu kapandi …"
```
Zincir `if not os.path.exists(MESAJ): return 1` diyor — dosya **VAR**,
yani zincir geçer. Ama içeriği **12 Ağustos'taki başka bir yayını**
anlatıyor.
📌 ***Eksik bir dosya GÜRÜLTÜYLE durdururdu; bayat bir dosya SESSİZCE
yanlış yazar.*** Ve bu commit `git log`da koşu 8'in kalıcı kaydı olur.

### 🟡 ⓒ `--kuru`NUN BASTIĞI PLAN ARTIK YANLIŞ
```
kaynak (satır ~318): "PLAN: … denetle → denetle_yayin → surum_damgala → commit"
GERÇEK sıra (2f1bc20 sonrası): … denetle → surum_damgala → denetle_yayin → …
```
Sıra düzeltmesi `PLAN` metnine yansımamış. `--kuru` bir **ölçüm aracı**
ve yanlış sıra basıyor ⇒ gece ona bakan biri damganın kapıdan sonra
geldiğini sanır. `§1.5`in *"elle yazılan satır bayatlar"* dersinin
**yardım metni** yüzü.

---

## ⑤ SAHNELEME KAPSAMI — bugün TEMİZ, ama ANLIK
```
pathspec: `-- data index.html`   ⇒ denetim/ ve arac/ DIŞARIDA 🟢
şu an kirli: 1  ( M data/bolgeler.js )
içinde YAMA dosyası: 0 🟢
```
`data/` altında **109** yama dosyası var ama hepsi **commit'li ve
temiz** ⇒ sahnelemeye girmezler.
⚠️ **Bu bir ANLIK ölçüm.** Koşu 8 bitince üretilmiş çıktılar kirlenecek
(beklenen), ve merge sırasında `denetim/` → `data/` taşıma yapılırsa
**yeni yama dosyaları kirli hâle gelir ve bu commit'e girer.** ⇒ Kapsamı
**taşımadan sonra, commit'ten önce** yeniden sor.
🟢 Ve pathspec'in dar olması iyi haber: `§7`nin süpürücü commit riski
burada **yok** — `denetim/` altındaki oturum artefaktları dokunulmuyor.

---

## ⚫ ÖLÇÜLMEDİ — `bulunamadı` değil
```
· Hiçbir zincir KOŞTURULMADI (`--kuru` dâhil, sevk gereği). Yukarıdaki
  her şey KAYNAKTAN ölçüldü; davranış RUNTIME'da doğrulanmadı.
· `uret_devirler` · `uret_altlik` · `uret_bekleyenler` ELLE koşulunca
  ne kadar sürer — ÖLÇMEDİM. Altı saatlik pencereyi daraltırlar.
· `--uretimsiz` yolunun `renk_olc`u koşması `data/`ya yazar mı —
  BAKMADIM (`renk_olc.py` ölçüm aracı, ama çıktısını nereye yazdığını
  ölçmedim).
```

## 🔴 VE ALET İKİ KEZ DÜZELTİLDİ — ikisi de `ast.walk`
```
ⓐ zincir kıyasında  `walk` KAYNAK SIRASINI kaybetti ⇒ lineno ile sıralandı
ⓑ burada            `walk` bir `If`in `orelse`ini de dolaştı ⇒ iki dal
                    AYNI listeyi verdi; çıktı hem «atlanan» hem «koşan»
                    kovasında aynı dört betiği gösterdi
```
📌 ***`ast.walk` bir düğüm ağacını DÜZLEŞTİRİR.*** Sıra ya da dal üyeliği
sorulacaksa `body`/`orelse` **ayrı ayrı** okunur. İkisi de bugün, aynı
oturumda, aynı fonksiyonla ısırdı.
