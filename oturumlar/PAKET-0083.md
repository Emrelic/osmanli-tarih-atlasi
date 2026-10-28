# PAKET 0083 — Emre'nin 13 maddesi · 5 Ekim 2026

Kaynak: `C:/claudemre/kutu/giden/parti-emrelic-0083/PARTI.md` · görseller aynı dizinde
(`H-00NN-1.png`). Koordinatör: **YILDIRIM BAYEZIT**.

🔴 **GÖRSELİ AÇ, SONRA KONUŞ.** Maddelerin çoğunun metni tek cümle ("bu bölge neden
boş") — soru GÖRSELDE. `Read` aracıyla PNG'yi aç; açmadan hüküm yazma.

---

## 0. HEPSİ İÇİN GEÇERLİ — okumadan başlama

### ⚠️ KANAL: TAHTA SİZİ UYANDIRMAZ
Bekçiler bu ortamda **en çok 2 saat** yaşıyor ve sizinkiler çoktan düştü. Tahtaya
yazın (kayıt için) **ama cevabı beklemeyin**; koordinatör size `send_message` ile
ulaşır. Bekçi yeniden KURMAYIN — boşuna RAM ve işlemci yakar.

### 🔴 ÖNCE ÖLÇ, SONRA HÜKÜM — ve ikisini KARIŞTIRMA
Bu paketin maddeleri "neden böyle" diye soruyor. Cevap iki parçalıdır ve ayrı
yazılır:
```
ÖLÇÜM   ne gördüm, sayıyla, dosya ve satır adıyla
HÜKÜM   niçin öyle, ve ne yapılmalı
```
Ölçümü atlayıp hükme atlamak bu projenin en pahalı hata ailesi. **Bir notun veri
hakkında söylediği şey, verinin kendisi DEĞİLDİR** — bugün bir oturum tam bu
yüzden kendi §0'ını çürütmek zorunda kaldı.

### 🔴 "BU BÖLGE NEDEN BOŞ" SORUSUNUN İLK CEVABI HEP AYNI YERDEDİR
`CLAUDE.md §2`: *"Noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN
SAHİBİYLE boyanır."* ⇒ İLK SORU: **o bölgede yerleşim noktası var mı?**
```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI))"
```
Noktaları `girdi.py`nin okuduğu dosyalardan tara; boylam/enlem kutusuyla say.
⚠️ "Nokta yok" bir CEVAPTIR ama bir ÇÖZÜM değildir: nokta eklemek ad ve KAYNAK
ister (`§4`), ve o iş koordinatörde. Sen **kaç nokta var, kaç olmalı** ölç.

### DOSYA SAHİPLİĞİ — kesin
```
SİZ YAZARSINIZ   denetim/<GÖREV-ADINIZ>.md   ·  gerekirse denetim/<ADINIZ>.diff
ASLA YAZMAZSINIZ data/*  ·  arac/*  ·  js/*  ·  index.html  ·  CLAUDE.md
```
Düzeltmeyi diff olarak verin, uygulayan koordinatördür. `git add -A` ve dizin
pathspec'i YASAK. Motor tuzuna (`uret_petek.py`·`renkler.py`·`girdi.py`·
`motor_onbellek.py`) **DOKUNMAYIN** — tam inşa koşusu kapıda.

### ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR
Bir sayı ölçmeden önce *"kaç çıkacak sanıyorum ve NİÇİN"* yazın, sonra ölçün,
sonra tuttu mu yazın. **Çürüyen öngörü tutandan değerlidir.** Öngörü = SAYI +
MEKANİZMA; ikisi ayrı değerlendirilir (bu hafta iki kez sayı tuttu, mekanizma çürüdü).

### TESLİM — üçlü kural, TEK mesaj
① **ne ölçtüm** (sayıyla, listeyle) ② **ne bulamadım** (`bulunamadı` bir sonuçtur)
③ **ne istiyorum** (seçenekliyse önerinle). Aksaklık BEKLEMEZ — tıkanırsa hemen yaz.

---

## A · BOŞ BÖLGELER — H-0002 · H-0003 · H-0004 · H-0007
> *"bu bölge neden boş"* ×3 · *"bu topraklar neden boş, devletsiz mi buralar"*

Dört görsel: `H-0002-1.png` `H-0003-1.png` `H-0004-1.png` `H-0007-1.png`.
Her biri için sırayla:
1. Görselden **hangi coğrafya ve hangi yıl** olduğunu çıkar (ekranda tarih ve
   devlet adları görünüyor). Çıkaramıyorsan "ölçülemedi" yaz, tahmin etme.
2. O kutuda **yerleşim noktası sayısı** — var mı, kaç tane?
3. Nokta VARSA: `s:` dönemleri o yılı kapsıyor mu? Kapsamıyorsa boşluk **kasıtlı**
   mı (`__BOSLUK__`) yoksa eksik mi?
4. Nokta YOKSA: en yakın noktaya uzaklık kaç km? (`§2`: o bölge en yakın peteğe
   emilmeliydi — emilmemişse sebebi kara maskesi ya da bileşen kilidi olabilir.)
🔴 Dördü AYNI sebepten olmayabilir — her birini ayrı sınıflandır, toplu hüküm yazma.

---

## B · ÜST ÜSTE BİNEN KATMANLAR — H-0008 · H-0009
> *"bu bölge neden böyle arka planda görünüyor ve üstüste binmiş katmanlar var"*
> *"bu bölgede neden böyle iki katman var"*

Görseller: `H-0008-1.png` `H-0009-1.png`.
🔴 **ÖNCE BUNU OKU, yoksa 40 dakikalık koşuyu boşuna istersin** (`CLAUDE.md §3`):
gövde çakışması / üst üste binme **`kd:` ile DÜŞMEZ** ve koşu İSTEMEZ; o kusur
`donemler.js` + `devletler_harita.js` **gövdelerindedir**. `kd:` yalnız Değişmez 3
ÖLÇÜMÜNÜ değiştirir, motor `kd:`yi OKUMAZ (ölçüldü: `uret_petek.py`de `kd` geçen
satır 0).
Yapılacak: iki bölgeyi ad/yıl olarak tespit et, o gün hangi **iki kimliğin** gövdesi
üst üste biniyor, örtüşen alan kaç km², ve biri `isg:` (işgal) mi? Sayıyla ver.
📌 İpucu: `kapsam_genis` ve tâbi çizim ayrı katmanlardır; "iki katman" bazen
kusur değil TASARIM olabilir — ikisini ayırt et.

---

## C · ÖKSÜZ HAT + İKİ YER SORUSU — H-0010 · H-0005 · H-0006
> H-0010: *"burada öksüz bir hat var, bu hat neyin hattı, neden buna dayanılmamış,
> hangi anlaşmanın hattı bu"* · H-0005: *"bu bölge İbrail'in mi"* · H-0006:
> *"Hotin Boğdan voyvodalığının başkenti midir"*

Görseller: `H-0010-1.png` `H-0005-1.png` `H-0006-1.png`.
H-0010 bir **D katmanı** sorusu: `data/d_sinirlar*.js` (canlı kopya `data/paket_28.js`
içinde — `index.html` YALNIZ paketi yüklüyor). Hattı kimliğiyle bul, `dayanak`
alanını oku, hangi antlaşma/IBS belgesi olduğunu YAZ. "Neden dayanılmamış" sorusu:
sınır o hatta yaslanmıyorsa sebebi nokta yoğunluğu mu, `sol_taraf` mı, yoksa
hattın `kategori`si mi (C/YOK hattı muaftır)?
🔴 Bu hafta ÜÇ hatta ters `sol_taraf` bulundu. **Kardeş hat sınavı**: aynı sınırın
ardışık parçaları ters yaka söylüyorsa biri yanlıştır — ve bu sınav dışarıdan veri
GEREKTİRMEZ. Önce onu uygula.
H-0005/H-0006 kaynak sorusu: **TDV birincil** (`§4`), İbrail ve Hotin maddelerine bak.
Vikipedi tek dayanak değildir; bulamazsan `bulunamadı`.

---

## D · ODAK VE İŞGAL GÖSTERİMİ — H-0001 · H-0011 · H-0012
> H-0001: *"93 Harbi maddesinde imparatorluk görünümüne geçiyor, Rusya'nın Eflak-
> Boğdan işgali varsa ÖNCE bunu göstermeli ve sefer okları kullanılmalı, işgal
> taraması ile gösterilmeli"* · H-0011: *"bu maddenin neden odak noktası yok"*
> · H-0012: *"Eflak Boğdan işgal edildiyse işgal edilmiş şekilde gösterilmeli"*

Üçü de **aynı maddeye** bakıyor: 1877-04-24, 93 Harbi. Görsel: `H-0012-1.png`.
1. Maddeyi bul (hangi `data/*.js`, hangi satır). `yer_id` / `odak_yer` /
   `odak_kimlik` / `odak_kutu_kaynak` alanlarından hangisi var, hangisi çözülüyor?
   Araç: `py arac/odak_olc.py` — kamera odağı YAYIN KAPISINA bağlı (`§9`).
   🔴 `kapsam_genis:true` + odak yok ⇒ kamera o günün OSMANLI sınırına uçar
   (`app.js:11835`) — yabancı kronolojide bu bir KUSURDUR, odaksızlıktan KÖTÜDÜR.
   H-0001'in "imparatorluk görünümüne geçiyor" şikâyeti büyük ihtimalle tam bu.
2. Eflak-Boğdan işgali veride VAR MI? `isg:` alanlarını 1877 için tara. Yoksa:
   hangi gün, hangi kaynakla yazılmalı (TDV: "93 Harbi", "Eflak", "Boğdan")?
3. Sefer okları: bugün böyle bir katman VAR MI? (`index.html` + `js/app.js` tara.)
   Yoksa "yok" yaz — **yapma**, bu bir kapsam kararı ve Emre'ye ait.
⚠️ `odak_*` ve tavan dosyalarına (`denetim/ODAK-TAVAN.json`) YAZMA, ölç.

---

## E · 5/7/10 GÜNLÜK BANT — ARAYÜZ YARISI (H-0013'ün ikinci yarısı)
> *"5 7 10 günlük sürtünmeli yürüyüş bölgeleri hiç olmamış"*

🟢 **TEŞHİS BİTTİ, MOTOR YAMASI YAZILDI** — `denetim/MOTOR-BANT-TAM-1005.diff`
(`git apply --check` temiz, tam inşa kuyruğunda). Senin işin ARAYÜZ yarısı.
Ölçülmüş üç sebep:
```
① bantlar ile taban AYRI KOŞULARDAN geliyordu (1 Ekim bant ↔ 4 Ekim gövde)  → çözüldü
② bant "artış"tı, tam bölge değil (uret_petek.py:7877 `difference`)         → yama yazıldı
③ bant katmanı ayrı opaklıkla çiziliyor + renk yoksa koyu kırmızıya düşüyor  → SENDE
```
`js/app.js:2008` civarı:
```js
harita.addLayer({ id: "ufuk-bant-alan", type: "fill", source: "ufuk-bant",
  paint: { "fill-color": ["coalesce", ["get","renk"], "#8e0b22"],
           "fill-opacity": 1 } }, "devlet-dolgu");
```
🔴 İKİ AYRI KUSUR, ikisini de ölç ve diff yaz:
- **Koyuluk:** `fill-opacity: 1` iken taban `devlet-dolgu` daha düşük opaklıkla
  çiziliyor ⇒ AYNI renk daha koyu görünüyor. Tabanın gerçek opaklığını ÖLÇ
  (`app.js`ten oku, tahmin etme) ve bandı ona EŞİTLE. Emre: *"aynı renk olmalı."*
- **`#8e0b22` geri düşüşü:** `renk` yoksa koyu Osmanlı kırmızısı çiziliyor — bu
  yüzden bazı yaylar devletin rengine bakmadan kırmızı. Kaç bant feature'ında
  `renk` YOK, SAY. Geri düşüş kaldırılmalı mı yoksa feature mi eksik — ölç, söyle.
- **SÖZLEŞME DEĞİŞİKLİĞİ:** motor yamasından sonra bantlar **İÇ İÇE TAM BÖLGE**
  olacak, artış halkası değil. Arayüz artık bandı tabanın ÜSTÜNE EKLEMEMELİ,
  **TABANI DEĞİŞTİRMELİ** (7 seçilince 7'nin TAM haritası görünür). `ufukAcik()`
  ve bant seçim mantığını oku, değişikliği `denetim/ARAYUZ-BANT-TAM-1005.diff`
  olarak yaz.
⚠️ İki yama AYNI koşuda inecek; yalnız arayüz inerse harita iç içe poligonları
   üst üste çizer. Bu yüzden diff'i yaz, UYGULAMA.
📌 Doğrulama için yerel sunucu var: `.claude/launch.json` → `atlas` (port 8765).
