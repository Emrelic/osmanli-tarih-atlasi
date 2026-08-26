# BULGU — DEĞİŞMEZ 7: ENKLAV SORGUSU

**DEĞİŞMEZ 7 ENKLAV** · 25 Ağustos 2026 · ORHANGAZİ sevkiyle
Yazılan dosya: **`arac/denetle.py`** (Değişmez 7 · ~180 satır)
Başka hiçbir dosyaya yazılmadı — `uret_petek.py` · `renkler.py` · `girdi.py`
üçlüsüne **dokunulmadı**.

---

## 0. İKİ SATIR

> **① NE ÖLÇTÜM.** `Değişmez 7` yazıldı ve koşuyor:
> **486 sorgusuz enklav** (tavan 486) · muaf **2429** kayıt (beyan 53 ·
> coğrafi tecrit 2123 · ada fethi 9 · küçük devlet 191 · geçici cephe 53).
> Bütün denetim **41 saniye** (D7'nin payı ~4-5 sn). Üç dalda sınandı:
> **14 sınav, 14 geçti, 0 kaldı.** `denetle.py` çıkış kodu 0, *"SONUÇ: temiz"*.
>
> **② ONDAN NE ÇIKARDIM.** Emre'nin şikâyeti **ölçülebilir bir sınıfmış** ve
> sınıfın büyüklüğü 486 değil **356** — çünkü kalan 130'un çaresi başka.
> Ve şartnamenin verdiği iki vaka da yakalandı: **Tebriz** (3 kayıt) ve
> **Niş+Vidin+Şehirköy** (bir üçlü ada). Koridor şehirleri (Hoy · Merend ·
> Culfa · Şerur · Mâku) listede **yok** — çünkü onlar *belirti* değil
> **cevap**: hiç el değiştirmemişler.

---

## 1. ÖLÇÜT — ve niçin Voronoi değil

Aynı sahibin yerleşimleri **≤150 km** kenarlarla bağlanır (flood fill). Bir
dönem **başlangıcında** yerleşimin bileşeni **≤5** ise **ada**.

⚠️ **Bu bir YAKLAŞIMDIR, Voronoi DEĞİL** ve öyle damgalandı. Voronoi 4,5 saat
sürer; bu soruyu sormak için gerekmez — amaç tam gövde değil **kopukluk**.

**Maliyet ölçüldü ve düşürüldü:** kaba kuvvet komşuluk 2606² = **3,4 milyon**
haversine ederdi. Izgara (hücre ≈ bağlantı yarıçapı, 3×3 tarama) onu ~40 kat
kırdı: D7'nin payı **~4-5 saniye**, bütün denetim 41 saniye.
⇒ `--tam` bayrağına bağlamaya **gerek kalmadı**; her koşuda çalışabilir.

---

## 2. BEŞ MUAFİYET — dördü ölçülerek doğdu

| muafiyet | n | niçin |
|---|---:|---|
| **coğrafi tecrit** (≤2 komşu) | **2123** | ada · çöl · step. **En büyük kova.** Bu muafiyet olmadan denetim ~2100 sahte alarm üretir ve okunmaz. Jeju bir ada, Bikaner çölde: orada veri eksik değil, **yerleşim seyrek** — o `§2` yoğunluk işidir. |
| **küçük devlet** (devlet < 3× ada) | 191 | bir beylik dört yerleşimse "bileşeni küçük" demek **devletin kendisi** demek. |
| **geçici cephe** | 53 | Diyarbakır 1515: komşuları o gün Safevî, haftalar sonra Osmanlı. O gün ada, üç ay sonra ana gövde — **sefer cephesi**, enklav değil. |
| **beyan** (`enklav:true`) | 53 | soru zaten cevaplanmış. |
| **ada fethi** (editoryal liste) | 9 | kopukluk **denizdendir**. Bugün Sakız 1694 gibi kayıtları tutuyor; küçük olması kusur değil, adaların çoğunu zaten *coğrafi tecrit* eliyor. |

### 🔴 Geçici cephenin sınav günü — bir kez yanlış kurdum

İlk yazımda sınav günü yalnız `gün+365` idi ve **şartnamenin iki vakasını da
eledi**: Niş 1689 ve Tebriz 1514, ikisinin de dönemi bir yıldan kısa.
⇒ Sınav günü `min(gün+365, dönem_sonu−1)` yapıldı: **kayıt yaşarken ölçülür.**
*"İzolasyon bitti"* ile *"kayıt bitti"* aynı şey değil — on bir ay süren bir
enklav da enklavdır.

---

## 3. ÜÇ KOVA — çareleri AYRI, o yüzden ayrı raporlanıyor

```
A-koridor      356   ana gövde ≤300 km  ⇒ ARADAKİ KAYITLARA dönem yazılmalı mı?
B-bilinmiyor   127   300-800 km         ⇒ kaynak susuyorsa KAYDET, uydurma
C-hakiki         3   >800 km / gövdesiz ⇒ muhtemelen HAKİKİ enklav, çare `enklav:true`
```

`C-hakiki`nin tamamı: **Çandernagor** ve **Pondişeri** (1816, Fransa'ya iade,
1514 km) · **Batum** (1921, Sovyet Rusya, 1419 km).

**En çok ihlal taşıyan kimlikler:** rusya 53 · OSMANLI 49 · fransa-cumhuriyet 23 ·
ingiltere 19 · babur 17 · ingiliz-hindistani 16.

---

## 4. ŞARTNAMENİN VAKALARI

### 🟢 Tebriz — Emre'nin şikâyetinin çekirdeği, yakalandı
```
1514-09-06 · 1534-07-13 · 1548-07-27   → OSMANLI · ada: Tebriz (tek)
ana gövdeye 226-251 km
```
Ve koridorun kendisi ölçüldü — **cevap veride duruyor**:
```
Tebriz     ...  d: 1514-09-06→09-15 · 1534-07-13→1535-06-01 · 1548-07-27→08-15
Hoy · Merend · Culfa · Şerur · Mâku · Ahar · Merâga
           s: safevi 1501-07-01 → 1736-03-08   (KESİNTİSİZ)
```
⇒ Sefer güzergâhındaki yedi şehrin **hiçbirinde Osmanlı dönemi yok**. Emre'nin
sorusu (*"500 km aradaki topraklar alınmadan mı geçildi"*) **meşru** ve cevabı
bu üç kayıt için *"evet, veri öyle yazıyor"*. Değişmez 7 artık **her koşuda**
bunu soruyor.
📌 Koridor şehirleri ihlal listesinde **yok** ve olmamalı: onlar belirti değil
**cevap**. Denetim doğru yeri gösteriyor.

### 🟢 Niş + Vidin — üçlü ada
```
1689-09-24 → avusturya · ada: Niş + Vidin + Şehirköy (Pirot) · 168 km
```
⚠️ **Tek nokta testi bunu göremezdi** — Niş'in 58,9 km'deki komşusu Şehirköy de
Avusturya'daydı. Bileşen (flood fill) ölçütü bu yüzden seçildi.

### ⚪ Belgrad
İhlal listesinde **yok**: Belgrad el değiştirdiğinde çevresi de değişiyor,
yani bileşeni >5. Bu bir eksiklik değil, **ölçütün doğru cevabı** — Belgrad bir
ada değil, cephe hattının parçası.

---

## 5. ÜÇ DALDA SINAV — 14/14

`denetim/` dışında tutulan sınav takımı: **`d7_sinav.py`** (scratchpad).

```
① GEÇME     bağlı gövde (6 nokta) → ihlal 0 · muafiyet 0                    ✓✓
② ATEŞLEME  ihlal dalı ✓ · beyan ✓ · coğrafi tecrit ✓ · ada fethi ✓ ·
            küçük devlet ✓ · geçici cephe ✓ · üç kova da ayrı ayrı ✓        ✓
③ ÇIKTI     ALT SÜREÇ · PYTHONIOENCODING VERİLMEDEN · tavan 0'a zorlanmış
            (yani ✗ dalı ateşlenmişken):
              çıkış kodu 1 ✓ · UnicodeEncodeError YOK ✓ · "Değişmez 7  ✗" ✓
              üç kova başlığı ✓ · Türkçe ve ok karakterleri bozulmadan ✓     ✓
```

### 🔴 Üç sınav kaldı ve ÜÇÜ DE FİKSTÜR KUSURUYDU

Kod değil, **sınavın kendisi** yanlıştı — ve üçüncüsünü ancak *içine bakmak*
çözdü:
1. `küçük devlet` muafiyeti önce ateşliyordu (sentetik devlet çok küçüktü);
2. gövde adaya **doğru** diziliyordu, en yakın nokta 289 km çıkıp kova
   yanlış oluyordu;
3. gövdeyi büyütünce **G29 adaya 145 km kalmıştı** — yani fikstür, sınamak
   istediği durumu **yok etmişti** (ölçüldü: bileşen 14, ada hiç ada değil).

📌 Ve şu ders ölçülerek çıktı: **bir dal üçüncü kez ateşlemiyorsa "kod bozuk"
demeden önce içine bakılır.** On satırlık bir teşhis betiği (`d7_cephe_tani.py`)
üç turluk tahmini bitirdi.
📌 İkinci ders: bir sınav kaldığında ihtimal **iki değil üç**: kod yanlış ·
sınav yanlış · **ya da sınavın varsayımı dalın tanımıyla uyuşmuyor**. İkinci
turda tam bu oldu — beş yerleşimlik bir küme de adadır, fikstür onu "kapandı"
sanıyordu.

---

## 6. TAVAN — sıfır KOYULMADI, ve sebebi ölçülmüş

```
BEKLENEN_ENKLAV_SORGU = 486        ← BUGÜNKÜ ÖLÇÜM, ONAY DEĞİL
```
Sıfır tavan **meşru olanı ihlal sayar**: `C-hakiki` kayıtlarının çaresi
`enklav:true` yazmaktır, `B-bilinmiyor` kaynağın susmasıdır. Gürültü üreten
denetime kimse bakmaz — `renkler.py`nin yazılı dersi.
Borç ödendikçe **iner**: her `enklav:true`, her yazılan koridor dönemi bir puan.
Ve araç bunu **kendisi hatırlatıyor** — sayı tavanın altına inerse
*"TAVAN GEVŞEK — BEKLENEN_ENKLAV_SORGU = N yapılmalı"* diye yazıyor.

---

## 7. 🔴 ŞARTNAMEDE BAYAT BİR SATIR — ölçümle düzeltiyorum

Şartname §② şöyle diyor:
> `data/yer_yama_enklav.js` 36 kayıt `enklav:true` — HAZIR, henüz **BAĞLANMADI**

**Ölçüm:** veride bugün **58** dönem `enklav:true` taşıyor. Önceki ölçümüm
(24 Ağustos) **22** demişti. 22 + 36 = 58 ⇒ **yama UYGULANMIŞ.**
⇒ Bu bir aksaklık değil ama şartnamenin taban cümlesi; düzeltilmezse bir
sonraki oturum ödenmiş borcu yeniden iş sanır.

---

## 8. Ölçmediklerim

- **Motor değişikliği önermiyorum.** `uret_petek.py`nin `enklav:` okuması
  (BEYAN) ile bu denetim (SORGU) **çatışmıyor**; ikisi aynı alanı ters yönde
  okuyor ve beyan zaten muafiyet. Motorda değişiklik **gerekmedi**.
- **486 kaydın hiçbiri kaynaktan araştırılmadı.** Bu iş bir ALET yazmaktı;
  kayıtların tek tek doğrulanması ayrı bir parti. Daha önce (24 Ağustos)
  yalnız Niş 1689 için TDV okunmuştu ve orada bir **kaynak çelişkisi** vardı
  (TDV 1688 · veri 1689) — hâlâ açık, **veriye dokunulmadı**.
- **150 km bağlantı yarıçapı SEÇİLMİŞ bir sayıdır**, ölçülmüş değil.
  Duyarlılık analizi **yapılmadı**: yarıçap 100 km olsa ada sayısı artar,
  200 km olsa azalır. Tavanın bu seçime bağlı olduğunu **yazıyorum**.
- **Deniz/kara ayrımı yok.** Bir boğazın iki yakası 150 km içindeyse "bağlı"
  sayıldı. Motorun kara maskesi bunu ayırt eder, bu denetim etmez —
  `ada-fethi` listesi o boşluğun **editoryal** yamasıdır.
- **Sınav takımı depoda değil**, scratchpad'de (`d7_sinav.py` ·
  `d7_atesle.py` · `d7_cephe_tani.py`). Depoya taşınması gerekiyorsa yeri
  `arac/` altıdır ve orası benim dosyam değil — **söyleyin, taşıyayım.**

---

# EK — İRAN KORİDORU (H-0089) · Değişmez 7'nin canlı vakası

ORHANGAZİ'nin ilettiği `denetim/BULGU-IRAN-KORIDOR-CGPT.md` okundu.
🔴 O metin bir **iz**, dayanak değil (`§4`: yapay zekâ üretimi metin
kullanılmaz). Aşağıdaki her hüküm **TDV gövdesi okunarak** doğrulandı;
ChatGPT metnindeki hiçbir cümle dayanak yapılmadı.

## ① VERİDE BUGÜN NE YAZIYOR — ölçüldü

```
OSMANLI (1590-03-21 · 1593-01-01 · 1600-01-01 üç kesitte de aynı)
    Revan 1583-06-01→1604-06-08 · Nahçıvan 1585-01-01→1603-10-21
    Tebriz 1585-09-25→1603-10-21 · Ahar (Karadağ) 1585-09-25→1603-10-21
    Şehrizor 1554-08-22→1623-11-28
SAFEVÎ — kesintisiz 1501-07-01 → 1736-03-08, HİÇ Osmanlı dönemi YOK
    Hoy · Merend · Culfa · Şerur · Mâku · Urmiye · Mahabad · Sakkız
🔴 VERİDE HİÇ KAYDI OLMAYAN
    Merağa · Miyandoab · Sulduz · Selmas/Salmas · Dizmâr · Sarukurgân · Saidâbâd
```

## ② TDV NE DİYOR — gövdeler okundu

**`tebriz` (HTTP 200, gövde okundu) — 1593 idarî taksimi:**
> *"Tebriz eyaleti Tebriz (merkez…), **Suldus, Dizmâr, Merâga, Sarukurgân,
> Saîdâbâd, Alîk** livâ ve nahiyelerinden oluşuyordu"*
ve **Merâga'nın nahiyeleri arasında `Miyândûvab`** geçiyor.
⇒ ChatGPT metninin gösterdiği adres **doğrulandı** — ama TDV'den, o metinden
değil.

**`hoy` (200, gövde okundu):**
> *"Rumlu Mahmud Bey'in idaresindeki Hoy yeniden Osmanlı hâkimiyeti altına
> girdi"* · **Tebriz'e bağlı bir sancak merkezi**, sancakbeyi Alâeddin Bey
> **1585** · *"Şah I. Abbas'ın eline geçen Hoy"* **1603** ·
> **1612** Nasuh Paşa antlaşmasıyla İran'a terk · **1724-1739** yeniden Osmanlı.

**`urmiye` (200, gövde okundu):**
> *"XVI. yüzyılın sonlarında kısa bir süre Osmanlı egemenliğine geçtiyse de
> Şah I. Abbas tarafından yeniden Safevî Devleti'ne bağlandı"* ·
> **1724**'te yeniden Osmanlı.

**Ölü sluglar (302, `§4`):** `maraga` · `selmas` · `salmas` · `karacadag` ·
`sulduz` · `miyandoab`. ⇒ Bu yerler TDV'de **müstakil maddesi olmadan**,
`tebriz` maddesinin içinden doğrulanıyor. (`meraga` **200** ama madde
Merâga'nın kendisi değil; okunmadı, **ölçmedim**.)

## ③ HÜKÜM — üç ayrı kusur, üç ayrı çare

```
🔴 A · VERİ YANLIŞ      Hoy   TDV: 1585 Tebriz'e bağlı SANCAK, 1603'te kayıp
                        veri: kesintisiz safevi ⇒ Osmanlı dönemi EKSİK
                        Urmiye  TDV: "XVI. yüzyıl sonunda kısa süre Osmanlı"
                        veri: kesintisiz safevi ⇒ EKSİK (tarih TDV'de belirsiz)
🔴 B · NOKTA YOK        Merağa · Miyandoab · Sulduz · Dizmâr · Sarukurgân ·
                        Saidâbâd — TDV 1593'te Tebriz eyaletinin livâları
                        sayıyor, veride HİÇ KAYIT YOK
                        ⇒ Emre'nin gördüğü "kırmızı dil" BURADAN doğuyor:
                          nokta olmayan bölge en yakın peteğe emiliyor (`§2`)
🟢 C · VERİ DOĞRU       Ahar (Karadağ) 1585-09-25→1603-10-21 OSMANLI —
                        şartnamedeki *"haritada Safevî görünüyor"* şikâyeti
                        VERİ düzeyinde karşılıksız. Haritada öyle görünüyorsa
                        sebebi veri değil ÇİZİM/emilme ya da bayat ekran görüntüsü.
```

⚠️ **Tarih önerirken üç soruyu ayırdım** (ChatGPT metninin en değerli katkısı,
ve TDV ile örtüşüyor): ① ordunun **ulaştığı** yer ② antlaşmayla **tanınan**
yer ③ **tahrir edilip idarî teşkilata bağlanan** yer. Hoy için üçü de var
(1585 sancak + 1593 taksim) ⇒ öneri **güçlü**. Urmiye için yalnız ① var,
TDV gün vermiyor ⇒ **"bulunamadı"** yazıyorum, uydurmuyorum.

## ④ ÖNERİ — veri dosyaları benim değil, uygulamıyorum

```
Hoy         d: 1585-01-01 → 1603-10-21   (TDV: 1585 sancakbeyi · 1603 Şah Abbas)
            d: 1724-01-01 → 1739-01-01   (TDV: III. Ahmed dönemi, 15 yıl)
Urmiye      d: ???       → 1603-10-21    🔴 BAŞLANGIÇ TDV'DE YOK — bulunamadı
            d: 1724-01-01 → 1736-03-08   (TDV: 1724)
YENİ NOKTA  Merağa · Miyandoab · Sulduz (+ Dizmâr · Sarukurgân · Saidâbâd)
            d: 1585…1593 → 1603-10-21    kaynak: TDV `tebriz` 1593 taksimi
            ⚠️ Koordinat araştırması gerekiyor; ben yazmadım.
```
📌 Ve `§11` gereği **iki uç da ölçüldü**: bu dönemler yazılırsa Safevî
gövdesinden 8-11 nokta çıkar. Safevî'nin bölgedeki kütlesi büyük olduğu için
yeni bir Safevî adası **doğmaz** — ama bunu ancak dönemler yazıldıktan sonra
`Değişmez 7` yeniden koşularak **doğrulamak** gerekir.

## ⑤ 🔴 DEĞİŞMEZ 7 BU VAKAYI YAKALAMIYOR — ve sebebi yapısal

Ölçüm: Tebriz'in **1585-1603** dönemi ihlal listesinde **yok** (yalnız 1514 ·
1534 · 1548 var). Sebep doğru: 1585'te Revan · Nahçıvan · Ahar da Osmanlı ⇒
bileşen >5 ⇒ **ada değil**.

⇒ Emre'nin İran vakası `Değişmez 7`in aradığı desen **değil**, **kardeşi**:
```
D7 sorar    "BENİM gövdem kopuk mu?"          → ada
Emre'ninki  "gövdemin içine YABANCI bir dil sokulmuş mu?"  → koridor/dil
```
Ve o dil bir **ada değil**: Urmiye-Mahabad-Sakkız güneydeki büyük Safevî
kütlesine bağlı, yani hiçbir bileşen testi onu yakalayamaz. Dar boyunlu bir
**çıkıntıyı** ölçmek **geometri ister** (Voronoi'de boyun genişliği) ve bu
denetim kasten geometri koşturmuyor.

**ÖNERİ (uygulamadım):** `Değişmez 7b — yabancı dil`. Ölçüt taslağı:
bir gün, X sahipli bir yerleşimin ≤150 km komşularının **hepsi** Y ise ve
X'in ana gövdesi >300 km ötedeyse bu bir *dil ucu*dur. Bu, bileşen testinden
farklı: bileşen X'in kendi bağlılığına bakar, bu **çevrenin homojenliğine**.
⚠️ Ama önce ölçülmeli: bu ölçüt bugünkü veride kaç kayıt üretiyor? Ölçmedim —
`Değişmez 7`in kapsamı dışı ve kapsamı **kendi başıma genişletmiyorum**.

## ⑥ MODEL SINIRI — kayda geçiyor

Encyclopaedia Iranica'ya atfen (ChatGPT metninden **iz** olarak alındı,
doğrulanmadı): bu dönemde Osmanlı-İran sınırı keskin çizgi değil, **geniş ve
değişen bir kuşak**. Petek motoru keskin sınır çiziyor.
⇒ Bu **veri kusuru değil MODEL kusuru** ve `Değişmez 7`de yanlış alarm
üretebilir. Bugünkü 486'nın kaçının bu sınıftan olduğunu **ölçmedim**.
