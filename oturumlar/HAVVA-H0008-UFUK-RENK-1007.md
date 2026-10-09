HAVVA-H0008-UFUK-RENK-1007

# ŞARTNAME — parti-0085 / H-0008 · 7 ve 10 günlük ufuk: renk + "toprak eklenmiyor"

> 🔴 **İSTİSNA BEYANI (Emre, 7 Ekim 2026):** `TOPOLOJI.md` kod yazımını UMIT'e
> verir. Emre bu kalem için **açıkça istisna tanıdı** ve işi HAVVA'ya verdi.
> Gerekçe ölçülü: H-0008 motor koduna dokunabilir ⇒ tuz değişir ⇒ **tam inşa**
> şart (`§9.1 ②`), ve tam inşa zaten HAVVA'da koşacak. UMIT'e verilirse
> yaz → push → HAVVA çek → koş zinciri **iki makine, iki tur** eder.
> ⇒ Bu istisna **yalnız bu kalem içindir**, kalıcı bir rol değişikliği DEĞİL.

Emre'nin kendi sözü (`parti-emrelic-0085/PARTI.json`, H-0008, 9 görsel):

> *"5 gün yerine 7 veya 10 günlük sürtünmeli yürüyüş ayarını seçince **koyu renk**
> ile gösteriyor haritayı. **soft renklendirme ile göstermiyor.** normalde opak ve
> yumuşak renk ayarımız var — eğer yumuşak renk ayarı aktif ise 5 günlük
> versiyonda olduğu gibi yumuşak renk ayarı ile gösterilmeli.*
> *ayrıca bak **yumuşak renk ayarını kaldırınca ufak tefek değişiklikler oluyor.***
> *afrikada 7 ve 10 gün ayarı **neredeyse hiçbirşey değiştirmiyor** — sadece rengi
> daha koyu ve opak yapıyor, **ek toprak katılması olmuyor. neden?**"*

Görseller: `C:\claudemre\kutu\giden\parti-emrelic-0085\H-0008-1..9.png` — **ONLARA
BAK**, dokuzu birden tek bir şikâyet değil üç ayrı kalem gösteriyor.

---

## 0. 🔴 BENİM ÖLÇTÜĞÜM TEK ŞEY — ve niçin bu kadarıyla bıraktım

```
js/app.js:841   var ufukGun = 5;   // seçili ufuk (gün) — 5 = A, bant çizilmez
```
⇒ **5 gün bir "ufuk seçeneği" değil, haritanın KENDİSİdir** (A gövdesi). 7 ve 10
ise A'nın ÜSTÜNE çizilen **ayrı bir bant katmanı**. Üç şikâyetin üçü de bu tek
yapısal olgudan türüyor olabilir — ama **türüdüğünü ÖLÇMEDİM.**

İlgili diğer çapalar (hepsi `js/app.js`):
```
862   UFUK_DOSYALAR = ["data/ufuk_bantlari_ust.js", "data/ufuk_bant_parcalar.js"]
864   ufukAcik()              "bant AÇIK MI" sorusunu KATMAN cevaplar
910   UFUK_BANT_IZI.bicim     biçim sözlüğü — tanınmayan biçim sessizce düşer
2189  SIYASI_KIP.yumusak      himaye-dolgu 0.60 · alfa-harman ailesi
2209  "A opak kalmalı, ve bant KENDİ KENARINI …"   ← bantın AYRI opaklık tasarımı
2404  "YUMUŞAK KİPTE A'nın opaklığı da düşüyor; o kipte fark azalır"
```
⚠️ Bu satır numaraları `71603afe` tarihli ağacımdan; sen `14174ef7`de (KOŞU 21 +
yayın) çalışacaksın. **Numaraya güvenme, ada güven** — kaydıysa farkı beyan et.

---

## 1. ⓐ YUMUŞAK KİP BANTA UYGULANMIYOR  (en belirli kalem)

**Soru:** `SIYASI_KIP.yumusak` aktifken 7/10 bant katmanı niçin opak kalıyor?

```
① ÖLÇ   yumuşak kip açıkken ve kapalıyken, bant katmanının GERÇEK boya
        değerlerini oku (fill-color · fill-opacity · fill-outline-color),
        `getPaintProperty` ile — kaynak koddaki NİYETTEN değil, KATMANDAN.
② ÖLÇ   aynı anda A gövdesinin değerlerini oku. İkisini YAN YANA bas.
        `app.js:2404` "yumuşak kipte A'nın opaklığı da düşüyor" diyor —
        doğru mu? Bant hangi kipte hangi değeri alıyor? Tablo çıkar.
③ SINIFLANDIR  üç ihtimal, hangisi olduğunu ÖLÇÜM söyler:
        (a) kip değişimi bant katmanını HİÇ ziyaret etmiyor (kayıtsız katman)
        (b) ziyaret ediyor ama bantın kendi tasarımı opaklığı geri yazıyor
            (`app.js:2209`in "A opak kalmalı" niyeti banta yanlış mı uygulanmış?)
        (c) kip bantı ziyaret ediyor, değer doğru, sorun z-sırası/harman
🔴 ÖNCE SINIFLANDIR, SONRA DÜZELT. Sınıf yanlışsa çare de yanlış olur (`D205`).
```
⚠️ **Çareyi KURALDAN değil KODDAN tasarla.** Bu gece koordinatörün üç reçetesi
kodda çalışmadı (olmayan bir bayrak · ters kırılan bir varsayım · reddedilen bir
parametre). Önerdiğin çarenin çağırdığı her işlev/bayrak **kodda VAR mı**, önce onu
göster.

**Emre'nin istediği davranış açık:** yumuşak kip aktifse 7/10 da **5 günlükte
olduğu gibi** yumuşak görünecek. Bu bir tercih sorusu değil, bir kusur.

---

## 2. ⓑ "YUMUŞAK RENK AYARINI KALDIRINCA UFAK TEFEK DEĞİŞİKLİKLER OLUYOR"

Emre renkten **başka** bir şeyin değiştiğini söylüyor. Renk kipinin geometriyi
değiştirmemesi gerekir.
```
① ÖLÇ   kip açık/kapalı iki hâlde ÇİZİLEN katmanların listesini ve her birinin
        görünürlüğünü (`visibility`) karşılaştır — fark varsa ADIYLA yaz
② ÖLÇ   geometri değişiyor mu, yoksa yalnız kenar/çizgi mi? (kenar rengi
        değişimi "ufak tefek değişiklik" diye algılanabilir — bu KUSUR DEĞİL,
        ama o zaman ÖYLE olduğunu ölçerek söyle)
③ Görsellere bak: Emre hangi karede neyi işaretlemiş? 9 görselden hangisi ⓑ'ye ait?
```
⚠️ **Hiçbir şey bulamazsan "bulunamadı" yaz** — bu bir sonuçtur. Ama "bulamadım"
demeden önce kipin dokunduğu katman kümesini TAM tara; `app.js:910`un kendi
uyarısı *"tanınmayan biçim sessizce düşer"* diyor ve sessiz düşme bu projede
ölçülmüş bir sınıftır.

---

## 3. 🔴 ⓒ AFRİKA'DA 7 VE 10 GÜN TOPRAK EKLEMİYOR — "NEDEN?"

Bu kalem ötekilerden farklı: Emre bir kusur bildirmiyor, **bir SEBEP soruyor.**
Cevap "kusur" da olabilir, "doğru davranış" da — ikisi de meşru, ama ölçülmeden
hiçbiri söylenemez.

🔴 **BENİM HİPOTEZİM — ölçülmedi, çürütülebilir, ve çürütülmesi iyi olur:**
`CLAUDE.md §2`: *"Noktası olmayan bölge en yakın peteğe EMİLİR."* Afrika'da
yerleşim yoğunluğu düşük ⇒ 5 günlük petek **zaten emilerek** bütün boşluğu almış
olabilir. O hâlde 7/10 günlük ufuk **ekleyecek sahipsiz toprak bulamaz** ve tek
görünür fark renk olur. ⇒ Eğer böyleyse **kusur yok**, ve Emre'nin sorusunun
cevabı: *"ufuk yalnız SAHİPSİZ toprakta iş görür; Afrika'da sahipsiz toprak 5
günde bitmişti."*

**ÖNGÖRÜ = SAYI + MEKANİZMA, ve ikisi AYRI değerlendirilir** (bu gece iki kez sayı
tuttu mekanizma çürüdü). Ölçmeden önce kendi öngörünü yaz:
```
Afrika'da 5→7 bant alanı:  ____ km²     Anadolu/Balkanlar'da: ____ km²
mekanizma: ____________________________
```

**Ölçüm — üç bölge, aynı metrik:**
```
① BANT ALANI      5→7 ve 7→10 bantlarının alanı (km²), bölge bölge:
                  Afrika · Anadolu+Balkanlar · bir üçüncü (kendin seç, gerekçeli)
② SAHİPSİZ PAY    o bölgede 5 günlük hâlde emilerek dağıtılmış toprağın payı
                  🔴 ⓒ'nin cevabı BU sayıda. Yüksekse hipotez tutar.
③ NOKTA YOĞUNLUĞU 1000 km²'de kaç yerleşim — üç bölge için
④ BANT VAR MI     `UFUK_BANT_PARCALAR` Afrika için gerçekten parça taşıyor mu,
                  yoksa boş mu? **Boşsa bu bir VERİ/ÜRETİM kusurudur** ve
                  hipotezim çürür — o zaman sebep emilme değil, üretimdir.
```
⚠️ ④'ü atlama. Hipotezim doğru çıksa bile ④ ölçülmeden *"bant var ama boş"* ile
*"bant hiç üretilmedi"* ayırt edilemez, ve ikisinin çaresi terstir.
📌 KOŞU 21 bantları **M1+M2** olarak üretti (57 dk 09 sn). M1 ve M2 neyin
karşılığı? Üçüncü bir bant gerekiyor muydu? Koşunun logundan oku
(`denetim/DEGISMEZ-KOSU21-HAVVA.log`) — **yorumdan değil LOGDAN** (`D201`).

---

## 4. SIRA, YETKİ, SINIR

```
① ⓐ ve ⓑ saf ARAYÜZ (js/app.js) — koşu İSTEMEZ, bugün biter
② ⓒ ÖLÇÜM — koşu istemez; mevcut çıktı üzerinde ölçülür
③ ⓒ bir ÜRETİM kusuru çıkarsa (④ boş dönerse) → motor yaması → TAM İNŞA
```
🔴 **Motor dosyalarına (`uret_petek.py` · `renkler.py` · `girdi.py` ·
`motor_onbellek.py`) ancak ③ gerçekleşirse dokun** — ve dokunmadan ÖNCE tahtaya
yaz. Koşu sürerken dokunulmaz (`§9.1 ③`: 8 Ağustos'ta 83 dakika koşup en sonda
reddedildi).

🔴 **Yetki sınırın:** ⓐ ve ⓑ'nin düzeltmesini YAP ve denetimden geçir. ⓒ için
**HÜKÜM VERME — ölçümü ver.** "Kusur değil" demek bir kapsam hükmüdür ve
koordinatörün/Emre'nin kalemidir.

⚠️ **`ast.parse` temiz ≠ çalışıyor · dosya değişti ≠ doğru yere yazıldı.** Tek
kanıt **projenin okuyucusu** (tarayıcı/`denetle_yayin.py`) ve **denetimin sayısı**.
Bu gece bir beyan `replace(…, 1)` yüzünden yanlış kayda yazıldı ve dosya
"değişti" göründü.

**Kapı:** `py arac/denetle.py` (üç çıkış kodu: 0 temiz · 1 İHLAL · 2 ÖLÇÜLEMEDİ —
**otomasyon cümleyi okumaz, çıkış kodunu okur**) · veriye dokunduysan
`py arac/renk_olc.py` · yayın öncesi `py arac/denetle_yayin.py`.
📌 KOŞU 21'in bıraktığı iki bilinen kalem seni şaşırtmasın, SENİN kusurun değil:
`denetle_yayin` çıkış 1 (yetim `ufuk_bantlari.js` ham · bayat damga) ve **1 yeni
sekme gerilemesi**: 1381 "Timur'un İran seferleri başladı" (sekme `iran`).

---

## 5. TESLİM

`denetim/HAVVA-H0008-UFUK-RENK-1007.md` + değişen dosyalar, **açık pathspec ile**:
`git add -- <adlar>` · `git commit -F <mesaj-dosyası> -- <aynı adlar>` ·
`git show --name-only` ile DOĞRULA. 🔴 **`git add -A`, dizin pathspec'i ve
`git stash` YASAK.** Pathspec fazlalığa karşı korur, **EKSİKLİĞE karşı KORUMAZ** —
adları `git status --porcelain`den oku, hafızadan yazma.

Dalın: `makine/havva-h0008` (`main`e push etmezsin — `main`in tek yazıcısı
koordinatördür).

**Tek teslim mesajı** (`py arac/tahta.py yaz --kim "HAVVA-H0008" --kime "YILDIRIM BAYEZIT"`):
```
① NE ÖLÇTÜM     sayıyla, üç kalem ayrı ayrı. ⓒ için öngörünün SAYI tarafı
                tuttu mu, MEKANİZMA tarafı tuttu mu — AYRI yaz.
② NE BULAMADIM  "bulunamadı" bir SONUÇTUR. Ölçülemeyen varsa ADIYLA.
③ NE İSTİYORUM  seçenekliyse önerinle.
+ "bekçimi öldüreyim mi?"
```

⚠️ **Bekçi yasağı hâlâ yürürlükte** (`oturumlar/KAYNAK-DURUM.json`, kod `KOSU`) —
bekçi kurmaya çalışırsan **çıkış 3** alırsın. Yasağı koordinatör kaldıracak; sen
`kaynak_durum.py ac` ÇALIŞTIRMA.

⚠️ **Bellek:** KOŞU 21'de ISCI=2 tepe ~14,9 GB/süreç (~30 GB toplam), commit %99,
pagefile 5,4 → 13,6 GB büyüdü. ③'e gidip tam inşa gerekirse **ISCI=2'yi aşma** ve
7 günlüğü 10 günlükten ÖNCE ölç — yarıçap iki katına çıkınca iş kabaca alanla
büyür, üçünü birlikte istemek 7 saati riske atar.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
