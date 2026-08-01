# `nufuz:` — benekli nüfuz alanı (tasarım)

**Yazan:** MOTOR (Oturum 16) · 1 Ağustos 2026
**Uygulayacak:** MOTOR — `arac/uret_devirler.py` (+ `arac/girdi.py` alan sözlüğü)
**Durum:** tasarım. Kod yazılmadı.

Kullanıcı isteği: *"Sınır alanı net olmayan — Sahra Çölü, Nil deltasının sağı
solu, Arabistan çölleri, Kuzey Kafkasya ve Karadeniz'in kuzeyi, Kırım'ın
kuzeyi gibi — net sınır hattı olmayan ve şüpheli ortak alanları, kesin bir
devletin egemenliği arasında olmayıp iki devletin nüfuz alanı sayılabilecek
alanları benekli harita ile gösterelim."*

---

## 1. Beneği ne taşıyacak — tasarımın en zor sorusu

**Cevap: nokta düzeyi (`yerlesimler`), yeni bir bölge dosyası DEĞİL.**

Üç gerekçe, ilki belirleyici:

1. **Bu projede bütün geometri noktalardan türer.** `data/yerlesimler.js`
   "ELLE YAZILAN TEK COĞRAFİ KAYNAK"tır. Elle çizilmiş nüfuz poligonları
   eklemek, motorun kurucu ilkesini kırar: sınırlar bir daha veriden değil,
   birinin elinden gelir. Bir kez kırılırsa geri dönmez.
2. **Adı geçen bölgelerin noktaları ZATEN VAR.** Ölçüldü — 1600'de sahipsiz
   54 noktanın çoğu tam olarak bu coğrafyalar ve **dönem sayısı sıfır**:
   ```
   Sahra batısı · Hoggar · Tamanrasset · Fizan güneyi · Ramletü Murzuk
   Rub'ul Hâlî kuzeyi/doğusu · Nefud çölü · Necid içi
   Batı çölü (Mısır) · Nûbe çölü · Gilf el-Kebîr · Selîme
   Karakum · Darfur · Ogaden · Somali çölü
   ```
   Bunlar emilmeyi önlemek için konmuş dolgulardır ve **kullanıcının işaret
   ettiği alanları birebir kaplarlar.** Benek için yeni geometri gerekmiyor.
3. **Örtü altyapısı zaten çalışıyor.** `isg:` yolu kurulu:
   `yerlesimler.js` → `uret_devirler.py` → `data/devirler.js` →
   `app.js` taralı desen katmanı. Benek **ikinci bir örtü tipi**, yeni bir
   altyapı değil.

### ⚠️ Bu seçimin dürüstçe söylenmesi gereken sınırı

**Beneğin çözünürlüğü bir HÜCREDİR.** "Kırım'ın kuzeyi" bir hücre değil,
bir hücrenin parçasıdır; onu beneklemek hücrenin tamamını benekler ve
gereğinden geniş iddia eder.

⇒ Çare elle poligon değil, **daha çok nokta** — `CLAUDE.md §6`'nın zaten
söylediği şey. Benek "burada denetim belirsiz" der; ne kadar dar bir alan
için diyebildiği, o coğrafyadaki nokta yoğunluğunun verdiği çözünürlüktür.
Bu bir kusur değil, **motorun her yerde geçerli olan sınırı**; benek onu
kırmaz, görünür kılar.

---

## 2. Şema

```js
nufuz: [{ f: "1550-01-01", t: "1783-04-19",
          d: ["osmanli", "rusya"],
          neden: "TDV ...: bölgede iki taraf da vergi topluyor, sınır yok" }]
```

`isg:` ile aynı biçim ve aynı yol. **Motor okumaz** — taban rengi değişmez,
değişmezler bozulmaz.

### İki alt tip, tek alan — ve bu eksen KARIŞTIRMASI DEĞİL

Koordinatörün ayırdığı iki durum, `d` dizisinin **uzunluğuyla** ayrışır:

| `d` | anlam | örnek |
|---|---|---|
| tek kimlik | denetim var ama **zayıflıyor** — benek seyrelir | Sahra içi, Rub'ul Hâlî |
| iki+ kimlik | **iki tarafın nüfuz alanı**, sınır çizilemez | Kuzey Kafkasya, Kırım kuzeyi |

📌 Bunları tek alanda toplamak, `bos:`/`hassasiyet:` ayrımıyla çelişmez.
Orada **farklı eksenler** birleştirilmiyordu diye itiraz etmiştim: değer
belirsizliği ile zaman belirsizliği ayrı şeylerdir. Burada ise **tek eksen**
var — *"burayı kim denetliyor"* — ve tek fark **cevabın kaç tane olduğu.**
Aynı sorunun bir ya da iki cevabı olması, iki ayrı eksen değildir.

---

## 3. 🔴 En kritik koruma: `nufuz:` SAHİPLİK SAYILMAZ

Bir nokta `nufuz:` taşıyor diye **sahipli sayılmaz.** `Değişmez 1` onu
sahipsiz saymaya devam eder.

Sebep bugün üç kez yaşandı: tamamlanmışlık uyduran her yeni alan, denetimi
yeşile döndürüp haritayı olduğu yerde bırakır (`§72`). `nufuz:` üçüncü
böyle bir yol **olmamalı**. Benek bir *"biliyoruz"* değil, *"böyle
bilmiyoruz"* beyanıdır; sayaçta sahipliğin yerine geçemez.

Aynı sebeple **`bos:` ile `nufuz:` aynı pencerede birlikte bulunamaz**:
"kimsenin değildi" ile "iki tarafın nüfuzundaydı" farklı iddialardır ve
biri seçilmek zorundadır.

---

## 4. Denetim

1. **`neden:` zorunlu.** Boşsa denetim öter. Sahra'yı beneklemek bir
   **kaynak hükmüdür** — hangi yıl, hangi devlet(ler), neye dayanarak.
   ⚠️ Düz renk *"biliyorum"* diye yalan söylüyordu; **kaynaksız benek
   *"bilmiyorum"* diye yalan söyler.** İkisi de uydurmadır.
2. **`d:` kimlikleri `BOYALAR`'da tanımlı olmalı** — tanımsız kimlik
   `#888888` griye düşer ve benek "bilinmeyen devlet" gibi görünür.
3. **Her koşuda bütün `nufuz:` pencereleri adıyla basılır.** Görünürlük
   doğrulamadan güçlüdür.
4. **Örtü üretimi zincire BAĞLI olmalı.** `devirler.js` bugün 2,5 saat
   bayattı çünkü `uret_petek.py` üreticisini çağırmıyor; dört işgal örtüsü
   bu yüzden çizilmedi ve `Değişmez 2t` haklı olarak bağırdı. **Benek
   üreticisi baştan zincire bağlanır**, sonra hatırlanacak bir adım olarak
   değil.
5. `devirler.js` **`URETIM_IZI` taşımalı** (iş #26) — "bu örtü hangi
   veriden üretildi" sorusu örtünün kendisinden cevaplanabilsin.

---

## 5. Sınav

Kod yazılmadan önce ne göreceğimizi yazıyorum:

1. **Taban değişmez.** Benekli bir bölgenin altındaki taban rengi, benek
   eklenmeden önceki hâliyle **bayt-aynı** kalır. Değişiyorsa benek örtü
   değil, sahiplik yazmış demektir.
2. **`Değişmez 1` sayacı değişmez.** Sahra noktaları benekten sonra da
   *"sahipsiz"* sayılır. Sayı düşerse §3 ihlal edilmiştir.
3. **İki renkli benek gerçekten iki renk gösterir.** `d:["osmanli","rusya"]`
   olan bir pencerede lejantta iki devlet de yazar; tek devlet yazıyorsa
   bilgi kaybolmuştur.
4. **Kaynaksız benek üretilemez.** `neden:` boş bırakılmış bir pencereyle
   üretici koşturulduğunda **hata verip durur**, sessizce atlamaz.

---

## 6. Açık kalan — karar veri oturumunun

Kullanıcının saydığı yerlerin bugünkü hâli **sahipsiz** (dönem sayısı 0).
Onları beneklemek, *"kimsenin değildi"* demekten *"şunun zayıf nüfuzundaydı"*
demeye geçmektir — yani **iddiayı büyütmektir** ve kaynak ister. Hangi
bölgede hangi devlet(ler), hangi tarih aralığında: bu tasarımın değil,
kaynak araştırmasının işidir.

📌 Motor tarafı hazır olduğunda benek **veri gelir gelmez** çizilir; veri
gelmeden benek yazmak, tam da §4.1'in yasakladığı şeydir.
