# Değişmezler: üç çıkış kodu · kapının YERİ · tek otorite (10 Ekim hâli)

> Kimlik `D274` · `CLAUDE.md §3` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 3. İhlal edilemez değişmezler
**Her veri değişikliğinden sonra `py arac/denetle.py`** — tek kapı odur.
🆕 🔴 **ÜÇ ÇIKIŞ KODU (4 Ekim 2026): `0` temiz · `1` İHLAL VAR · `2` ÖLÇÜLEMEDİ.**
Kod 2 yeni ve bir kusuru kapatıyor: araç *"Ölçülemeyen soru TEMİZ DEĞİLDİR"*
cümlesini basıp **`SONUÇ: temiz` + çıkış 0** veriyordu. Ölçülen vaka — HAVVA'da
shapely yok ⇒ Değişmez 8 ve konum denetimi atlanıyor, araç yine "temiz" diyordu;
EMRELIC'te de `devletler_harita.js` diskte olmadığı için aynısı.
⚠️ **BU ÖRNEK TARİHÎDİR, KAPANDI** (HAVVA ölçtü, 6 Ekim 2026: shapely 2.1.2 + rasterio
1.5.2 KURULU; 5 Ekim'de o makinede `denetle.py` çıkış 0 verdi ve D8 + konum GERÇEKTEN
koştu). Kural yerinde, **örneği bayat** — ve koordinatör bu örneği bugünkü ölçüm sanıp
Emre'den gereksiz bir karar istedi (`SABAH-1004 ⑰`de düzeltildi). ⇒ Bir kuralın VAKASI
bayatlayabilir; vakaya dayanıp **bugünkü durum hükmü verilmez**, bugün ÖLÇÜLÜR. Örneğin
bayatlaması kuralı zayıflatmaz: `OLCULEMEDI_KOVA` bağımlılık dışında da dolar
(dosya yok · API değişti · ağ yok). **Otomasyon
cümleyi okumaz, çıkış kodunu okur.** Yeni topolojide LAB denetleyici: eksik
bağımlılıklı bir LAB, ölçemediği depoyu temiz raporlardı. Ölçülemeyen her soru
`OLCULEMEDI_KOVA`ya ADIYLA düşer (sayı değil LİSTE) ve hükümde basılır; ihlal
varsa hüküm 1'dir ama eksik ölçüm **yine de görünür** — biri ötekini gizlemez.
Sınav 12 soru, iki yönde, biri GERÇEK koşulda:
`py denetim/ARAC-OLCULEMEDI-KAPI-SINAV-1004.py`. Eski ölçütler
[`D202`](dersler/D202-uc-degismez-tam-metin.md)de birebir duruyor, `denetle.py` hepsini
daha geniş evrende sorar.
🆕 🔴 **KAPININ YERİ BİR AYRINTI DEĞİL, BİR KUSUR SINIFI FARKIDIR**
(10 Ekim 2026, UMIT ölçtü; gecenin asıl kusurunu bu ayrım önlerdi):
```
DENETLEYİCİ (`denetle.py`)  soruyu SONRADAN sorar  → kusuru BULUR
YAZICI (`_sahiplik_uygula`) soruyu HİÇ sormaz      → kusuru YAZAR
```
> **Bir soruyu SONRADAN soran kapı, YAZMAYI ENGELLEMEZ.** Denetleyici kusuru
> bulduğunda veri yazılmış, belki commitlenmiş, belki yayınlanmıştır. İkisi
> **aynı soruyu sorsa bile farklı iş yapar.**
⚠️ Ölçülen vaka: `_sahiplik_uygula` 104 yamadan **9'unu çıkış 0 ile** atlıyordu;
`denetle`nin `Değişmez 5`i aynı soruyu (*dönem `kur:`'dan önce başlıyor mu*)
ZATEN soruyordu — **sonradan.** ⇒ Yeni bir kapı tasarlarken sorulacak şey
yalnız *"soruyu soruyor mu"* değil, **"NE ZAMAN soruyor"**dur.
🆕 🔴 **VE ÜÇÜNCÜ/DÖRDÜNCÜ YÜZ — BİR SORUNUN TEK UYGULAMASI OLUR**
(10 Ekim 2026, iki bağımsız ölçüm):
```
③ AYNI SORU, ÜÇ UYGULAMA, ÜÇ CEVAP   (TAHTA-ACIL-I-1010)
   tahta.py:955        `.upper()` · "ACİL".upper()="ACİL" ⇒ NORMAL sayıyor,
                       dayanak İSTEMİYOR, "KİMSEYİ UYANDIRMAZ" BASIYOR
   tahta_bekci.py:569  `_sade` İ→I ⇒ ACIL okuyor ⇒ HERKESİ UYANDIRIYOR
   tahta_sunucu.py:653 düz eşitlik ⇒ ÜÇÜNCÜ tespit
   ⇒ Yazıcı "kimseyi uyandırmaz" derken bekçi HERKESİ uyandırıyor.
   Ve `tahta.py:825`te hazır bir `_duzle` VARDI, aciliyet için
   kullanılmamıştı — çare de eldeydi.
④ AYNI SORU, İKİ EVREN                (KRONO-NEG-1010)
   YAZICI `_sahiplik_uygula`  evren: `olaylar*`
   KAPI   `Değişmez 2`         evren: `olaylar*` + `kronoloji_sinir*`
                               (`§5`, Emre 24 Eylül: 10 dosya, 405 madde)
   ⇒ Yazıcı "madde var/yok" hükmünü DAHA KÜÇÜK bir evrende veriyor.
```
> **Bir ayrımın TEK OTORİTESİ olur.** İki uygulama bir yedeklilik değil,
> **iki ayrı davranıştır**; ve ikisi aynı soruyu AYNI EVRENDE sormuyorsa
> hükümleri de aynı olamaz.
⇒ Çare çoğaltmak değil **birleştirmek**: `arac/aciliyet.py` (tek işlev, üç
çağıran) örneği. Ve evren farkı **SAYIYLA** ölçülür — 405 madde kör
kalıyorsa yazıcı sessizce yanlış karar veriyor.
📌 Bu dörtlü artık `§11`in kapı ailesiyle birlikte okunur: orada kapının
VARLIĞI, burada **TEKİLLİĞİ** sorgulanıyor.

🔴 **VE BİR KOORDİNATÖR KURALI:** *yeni bir kapı onaylamadan önce, o soruyu
soran bir kapı **VAR MI** diye sorulur.* Yoksa birbiriyle anlaşmayan iki kapı
kurulur ve hangisinin doğru olduğu **yeni bir soru** olur. (Aynı gece
koordinatör `kur:` kapısını `Değişmez 5` varken onayladı — `§11`in *"denetim
var ≠ o soruyu soruyor"* ailesinin TERS yüzü: kapı **yok sanıldı ve VARDI.**)
- **1 — sahipsizlik yok.** Var olduğu tarihte sahipsiz yerleşim = haritada delik. Sahipsiz
  sayısı §1.5'teki beklenenin üstüne çıkarsa yeni delik açılmıştır (beklenenler kasıtlı
  çöl/dolgu noktaları).
- **2 — sessiz toprak değişimi yok.** Her `d:`/`v:` kırılmasının **±30 gün** içinde kronoloji
  maddesi olmalı. **Ölçütü gevşetme.**
- **3 — tarih × yerleşim × petek × bölge çelişmez** (henüz sağlanmıyor). Kusurun %93'ü `m:`
  alanının **zaman penceresi** eksikliği (`kd:` çözer); ~%1'i eksen kusuru ve `kd:` onu
  çözmez. `OSMANLI` ile `tâbi` çelişki SAYILMAZ.
  🔴 **`kd:` yalnız BU ÖLÇÜMÜ değiştirir — motor `kd:`yi OKUMAZ.** Ölçüldü (20 Eylül 2026,
  KD-ZAMAN-0920): `uret_petek.py`de `kd` geçen satır **0**; `kd_oku`/`kd_gun`u çağıran tek
  dosya `denetle.py`. `m:` motorda yalnız `k12_merkez` ve BÖLGELER katmanındadır, motorun
  kendi yorumu "toprak boyaması etkilenmiyor" der (`uret_petek.py:1051`). ⇒ Gövde
  çakışması / üst üste binme `kd:` ile DÜŞMEZ ve koşu istemez; o kusur
  `donemler.js` + `devletler_harita.js` gövdelerindedir. İki kusur sınıfı tek cümleyle
  anılırsa bir oturum KOCA BİR KOŞUYU boşa ister — bir kez tam bu oldu.
  ⚠️ Bu cümle uzun süre "40 dakikalık koşu" diyordu; sayı BAYATTI. Ölçüldü
  (HAVVA, 9 Ekim 2026, `uretim_canli.log`): tam inşa **7-8 SAAT**. Yani boşa
  istenen şey bir öğle arası değil, bir GECE — kural zayıflamıyor, güçleniyor.
- **8 — şehir bölgesi ülke sınırını aşamaz** (Emre H-0069/H-0086, 27 Eyl 2026). İki soru,
  iki tavan: **8a** gövde, o gün geçerli D/E/F hattını aşıp karşı yakaya ≥ 5 km uzanan
  yerleşim peteği · **8b** Osmanlı `BOLGELER` poligonunun yabancı gövdeye düşen payı.
  **Motor ÇIKTISINI ölçer** — veri düzeltmesi ancak koşudan sonra görünür. Tavan bugünkü
  ölçümdür (dondurma, onay değil); yeni D hattı tavana değil "YENİ KAPSAM" kovasına düşer
  (`--d8-defter-yaz`). Muafiyetler (eksklav · menderes · `__BOSLUK__` · tâbi · `isg:` ·
  C/YOK hattı) `denetle.py`de gerekçeli. [`D237`](dersler/D237-sehir-bolgesi-sinir-asamaz.md)
