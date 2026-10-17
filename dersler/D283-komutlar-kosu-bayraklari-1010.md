# Komutlar: KOŞU BAYRAKLARI · zincir yayın yapamaz · kabul ölçütü (10 Ekim hâli)

> Kimlik `D283` · `CLAUDE.md §9` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 9. Komutlar

```bash
py arac/uret_petek.py     # harita üretimi — 🔴 ~40 dk DEĞİL: TAM İNŞA **7-8 SAAT**
                          #   ölçüldü (HAVVA, 9 Ekim 2026, `uretim_canli.log`
                          #   AŞAMA BİLANÇOSU): KOŞU 21 duvar 7s13dk · KOŞU 20 8s13dk.
                          #   En büyükler: yabancı gövdeler 2s38dk · dönemler 2s11dk ·
                          #   ufuk bantları 57dk · çöl tavanı 30dk. Tuz değişirse
                          #   önbellek tamamen ıskalar ⇒ üst sınır. Koşucu HAVVA (§7).
```
🆕 🔴 **KOŞU BAYRAKLARI — ZORUNLU, VE BUNLAR OLMADAN KOŞU "BİTER" AMA EKSİKTİR**
(10 Ekim 2026, pahalı öğrenildi):
```
MOTOR_YURUYUS=1          MOTOR_YURUYUS_SAAT=40
MOTOR_UFUK_BANT=40,56,80 MOTOR_COL_UFUK_SAAT=56
MOTOR_SUREC_ISCI=2
```
⚠️ **Motorun VARSAYILANLARI bunları KAPATIR:** `uret_petek.py:1162` `MOTOR_YURUYUS`
yalnız `"1"` ise açık · `:1892` `COL_UFUK_SAAT` varsayılan `"0"` · `:2159`
`UFUK_BANT` varsayılan BOŞ. Ve `kos_ve_yayinla.py` zinciri yalnız
`MOTOR_ONBELLEK_DIZIN` + `MOTOR_SUREC_ISCI` koyuyor ⇒ **zincire güvenmek
bayrakları KAYBETTİRİR.**
🔴 **ÖLÇÜLEN VAKA — KOŞU 22:** bayraksız koştu, `uret_petek` çıkış **0** verdi,
5s45dk'da "bitti" ve **ÜÇ YÜRÜYÜŞ AŞAMASI + Ⓑ UFUK BANTLARI AŞAMASI YOK**
(`data/ufuk_bantlari.js` üretilmedi; `ufuk_bant_parcalar.js` KOŞU 21'in **1923**
ufkunda kaldı). Yayınlansa harita **GERİLERDİ.**
⇒ **ÇIKIŞ 0, "iş yapıldı" DEMEK DEĞİL.** Ve kısa süre bir hız kazancı değil
**YAPILMAYAN İŞ** işaretidir (`D270` ailesi): 5s45dk ↔ KOŞU 21'in 7s14dk'sı.
🔴 **KURAL:** koşucu bayrakları **başlamadan önce loga BASAR** ve koordinatöre
teyit eder. 🔴 **AMA BEYAN YETMEZ — MOTORUN GÖRDÜĞÜ KANITLANIR:**
```
TUZ HASHİ karşılaştırılır: bayraklar tuza girdiyse hash DEĞİŞİR
   ölçülen vaka: KOŞU 22b tuz `810b524268d5` ↔ KOŞU 22 `fcfc307db9e8`
   + motorun kendi satırı: "tuz geçen koşudan FARKLI (değişen: ORTAM)"
İŞÇİ DÜZENİ: "1 işçi süreç başlatıldı (pid …)" ⇒ KOŞU 21 ile aynı düzen
İLK AŞAMA SATIRI: "▶ YÜRÜYÜŞ" gelmezse koşu DURDURULUR
```
⇒ *"Bayrakları koydum"* bir beyandır; **tuzun değişmesi bir ÖLÇÜMDÜR.** Bir
ayarın etkili olduğu, ayarı YAZARAK değil **çıktıdaki İZİNDEN** doğrulanır. Ve koşu bitince **AŞAMA BİLANÇOSU** KOŞU 21'in aşama listesiyle
KARŞILAŞTIRILIR — eksik aşama varsa çıktı **YAYINA ADAY DEĞİLDİR.**
📌 Niçin bu satır burada: bu beş bayrak **hiçbir belgede yazılı değildi**,
yalnız `14174ef7`in (KOŞU 21) commit mesajında duruyordu.
> **Bir koşunun ayarları commit mesajında yaşıyorsa, o ayarlar KAYITLI DEĞİLDİR
> — bir sonraki koşucu onları ARAMAK zorundadır, ve aramadığında kimse fark
> etmez.**
⚠️ Ve `§9`un *"bayat çıktı yine de yayınlanır"* kuralı **BAYATLIĞI** affeder,
**GERİLEMEYİ** affetmez. İkisi ayrı şeydir.
🔴 **ZİNCİR YAYINLANAN HARİTAYI HİÇ ÜRETMİYOR — ve bu satır eskiden
sonucu ÇOK KÜÇÜK yazıyordu** (`KOSU-YAYIN-LISTE-1010`, 10 Ekim 2026).
Olgu baştan beri doğruydu: zincir `kodla.py yay` · `coz-c` ·
`paketle.py yenile` adımlarını **KOŞTURMUYOR** (KOŞU 21 bunları ELLE
koşmuştu). **Ama sonucu *"denetle D8'de çıkış 2 verir"* diye tarif
etmek yanlış boyuttaydı.** Ölçülen gerçek sonuç:
```
`uret_petek` de `kodla`yı ÇAĞIRMIYOR
⇒ YAYINDAKİ HARİTANIN TAMAMI `kodla` + `paketle` ÜRÜNÜDÜR
⇒ GERÇEK BİR ZİNCİR KOŞUSU, BUGÜN YENİ HARİTA YAYINLAYAMAZ
```
🔴 Ve asıl tehlike eksiklik değil **yeterli SANILMASIydı**: eski commit
listesi gitignore yüzünden düşüyordu ve **düşmeseydi yeni `bolgeler.js`i
ESKİ haritayla yayınlayacaktı** — yeni sınırlar, eski gövdeler.
⇒ **Zincir artık "BAYAT TÜREV" ile DURUYOR ve bu DOĞRU DAVRANIŞTIR**,
düzeltilecek bir kusur değil. Adım eklenmedi; **türev adımları ELLE
kalır** (koordinatör hükmü, 10 Ekim — "zincir gözetimsiz YAYIN
yapabilsin mi" bir ÜRÜN kararıdır ve Emre'ye taşındı).
📌 Yeni kusur sınıfı: **doğru olgu, küçük yazılmış AĞIRLIK.** Bir satır
yanlış bir şey söylemiyorsa da, sonucu küçük tarif ederek yanlış bir
GÜVEN üretebilir. Elle sıralama:
`kodla.py yay` → `coz-c` → `denetle` → `renk_olc` → `paketle.py yenile` →
`surum_damgala` → `denetle_yayin`.
```
py arac/uret_devirler.py  # devirler.js — uret_petek'ten SONRA koşar
py arac/renk_olc.py       # 🔴 VERİ DEĞİŞTİYSE ŞART — aşağıya bak
py arac/denetle.py        # altı değişmez
py arac/odak_olc.py       # kronoloji maddesinin KAMERA ODAĞI — kapıya BAĞLI
py arac/denetle_yayin.py  # yayın kapısı
py arac/surum_damgala.py  # index.html'deki ?v=rNN damgasını yükselt
```
- **Palet verinin fonksiyonudur:** veriye dokunan her koşudan sonra `renk_olc.py` (renge
  dokunmadan çakışma doğabilir).
- **Odak nöbetçisi** (27 Eyl 2026, Emre: *"denetimi yayın kapısına bağla"*): kronoloji
  maddesinin kamera odağı `denetle_yayin.py`ye BAĞLIDIR, iki ayrı sertlikle. ① **kırık
  atıf** (`yer_id`/`odak_yer`/`odak_kimlik`/`odak_kutu_kaynak` yazılmış ama çözülmüyor)
  YENİSİNE 0 tolerans — bilinen borç `denetim/ODAK-TAVAN.json` `bilinen_kusur` LİSTESİNDE
  adıyla beyanlıdır (sayı değil liste: borç kapanırken yenisi yerine geçemez). ② **sayı
  tavanı** ODAKSIZ 485 · BEYANLI→yabancı 669 dondurulmuştur; yalnız GERİLEME bloke eder,
  iyileşince `--tavan-yaz` ile indirilir. Çözüm `arac/odak_cozum.js`te (node) çünkü
  `suzgec.js`in GERÇEK işlevleri çağrılır — Python kopyası iki yerde "yanlış temiz"
  vermişti. Kapının ötüp ötmediği `py denetim/ODAK-KAPI-SINAV.py` ile İKİ YÖNDE sınanır.
  🔴 `kapsam_genis:true` + odak yok ⇒ kamera **o günün OSMANLI sınırına** uçar
  (`app.js:11835`) — yabancı kronolojide bu bir kusurdur, odaksızlıktan KÖTÜDÜR.
- Ortamda `python` değil **`py`**. Üretim logu koşarken boş görünür (normal); çıktıda
  🔴 **O SATIRI KABUL ÖLÇÜTÜ YAPMA — ÜÇ KATMANLI YANLIŞ** (10 Ekim 2026,
  `YORUM-KONTROL-TARAMA-1010`; koordinatör kodu okuyup DOĞRULADI):
```
  uret_petek.py:8477   if not (y["d"] or y["v"]): continue   ← 3279/4300 ATLANIYOR
            :8484      "tüm yerleşimlerin peteği geçerli ✓"  ← "TÜM" YANLIŞ
            sonrası    `hata` ÇIKIŞ KODUNA HİÇ YANSIMIYOR
```
  ⇒ Satır *"N uyumsuzluk"* dese bile koşu **0 ile çıkar.** Ve bu cümleyi
  kabul ölçütü yapan **bu dosyaydı** — yani kusur motorda değil, BURADA.
  🔴 **YERİNE, üçü birden:** ① `denetle.py`nin **ÇIKIŞ KODU** (0/1/2, cümlesi
  değil) ② **AŞAMA BİLANÇOSU** KOŞU 21'in listesiyle karşılaştırılır (eksik
  aşama ⇒ yayına aday DEĞİL) ③ `:8484` satırı yalnız **`d:`/`v:` dönemli
  kayıtlar için kısmî bir sinyal** olarak okunur, kapsamı ADIYLA yazılır.
  📌 `§11`in *"yorum ≠ kontrol"* ailesinin en pahalı üyesi: bir KABUL
  ÖLÇÜTÜ, kapsamını yanlış BEYAN eden bir çıktı satırına bağlanmıştı.

  🔴 **VE YAYIN ZİNCİRİ BETİKLERİ BU İNİŞTE KULLANILMAZ** (aynı tarama):
```
  kosu_yayin.py:18   her SIFIR-DIŞI kodu "bilinen borç" sayıyor ⇒ commit +
                     push YİNE atılıyor. Kendi belgesi "🔴 KAPILAR TAVİZSİZ:
                     ③ ya da ⑥ düşerse commit ATILMAZ" diyor — kod ETMİYOR.
                     Üstelik andığı `--yayin-kapisi-uyari` bayrağı YOK.
  kos_ve_yayinla.py:161   zincir kilidi hâlâ 240 dk YAŞ VEKİLİ
```
  ⇒ Zincir, `denetle.py` **çıkış 1** verse bile yayınlar. Ve bugün taze
  `main` **çıkış 1 veriyor** (D8a 1517 > tavan 1508). ⇒ **İniş ELLE, adım
  adım koşturulur ve HER ÇIKIŞ KODU OKUNUR** (KOŞU 21 de böyle yapmıştı):
  `kodla.py yay` → `coz-c` **(İKİ dosya, §5)** → `denetle` → `renk_olc` →
  `paketle.py yenile` → `surum_damgala` → `denetle_yayin`.
  🔴 **DÜZELTME — YASAK BETİĞE DEĞİL KİPE** (HAVVA ölçtü, aynı gün):
  yukarıdaki satırı ilk yazdığımda *"iki betiği de koşturma"* demiştim; o
  **FAZLA GENİŞTİ** ve KOŞU 22b'nin kendisini de yasaklardı.
```
  kos_ve_yayinla.py --yayinlama   ← ÜRETİMİ TAŞIYAN KİP, KOŞTURULUR
     `surum_damgala` `if yayinla` korumalı · commit/pull/push öncesi
     `if not yayinla: … ATLANDI; return 0` · `kosu_yayin.py`yi ÇAĞIRMIYOR
     `denetle` sıfır-dışı ⇒ `kos(...) is None` ⇒ return 1, `denetle_yayin`e
     HİÇ GELMİYOR (KOŞU 22 tam böyle durdu, kod 2)
  kosu_yayin.py  ·  kos_ve_yayinla.py'nin YAYIN KİPLERİ   ← KULLANILMAZ
```
  ⚠️ Ve zincirin içindeki `denetle` **`coz-c` YAPILMADAN** koşar ⇒ D8 kesin
  `ÖLÇÜLEMEDİ`, çıkış 2, zincir durur. **O `denetle` sonucu KABUL ÖLÇÜMÜ
  SAYILMAZ** — `coz-c` ikilisinden sonra elle yeniden koşturulur.
  📌 Ve bu, yazdığım kuralın ÜÇÜNCÜ kez aynı biçimde geniş çıkması
  (`YIKICI` tanımı · `§9.1 ③`ün kapsamı · bu). Ortak kök:
  > **Riski TAŞIYAN şeyi değil, onu İÇEREN şeyi yasaklamak.** Yasak bir
  > DOSYAYA değil, o dosyanın RİSKLİ KİPİNE/YOLUNA yazılır — yoksa kural
  > doğru işi de durdurur ve bir sonraki işçi onu haklı olarak esnetir.

  Yayından önce sürüm
  damgası yükseltilir; Pages gecikmesi ~40-60 sn.
- **Koşu çıktısı her zaman bayattır — yine de yayınlanır** (Emre, 17 Eylül): "YAYIN BAYAT"
  yayını durdurmaz; durduran yalnız koşunun kendi `denetle.py` ihlalidir. Koşu bittiği an
  ≠ yayın indiği an: yayın inene kadar motor donuk. [`D229`](dersler/D229-komutlar-palet-bayat-yayin.md)
