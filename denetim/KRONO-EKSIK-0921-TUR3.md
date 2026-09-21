# KRONO-EKSIK-0921 — TUR 3 · M-4953 hükümlerinin uygulanması

Önceki turlar: [`KRONO-EKSIK-0921.md`](KRONO-EKSIK-0921.md) ·
[`KRONO-EKSIK-0921-TUR2.md`](KRONO-EKSIK-0921-TUR2.md).
Aday tablosu: [`KRONO-EKSIK-ADAY-0921.md`](KRONO-EKSIK-ADAY-0921.md).

---

## (a) Cetinje — sınıflandırma düzeltmesi ✓

`data/olaylar_ek10.js` · 1482-01-01 · *"Crnojeviç Zetası'nın tâbiiyeti ve
Cetinje'nin merkez oluşu"*:

```
fethedilen:["Cetinje"]   →   statu_vasal:["Cetinje"]
```

`kaybedilen:["Zaklise (Zakynthos)"]` alanına **dokunulmadı**. Gerekçe
`ic_not_b` olarak kayda geçti (üç tanık da tâbilik diyordu: maddenin
`k:"vassal"` alanı · *"haraca bağlanarak iç işlerinde serbest kaldı"*
cümlesi · yerleşim kaydındaki `v:f→zeta` kırılması).

---

## (b) İlk 20 maddenin doğrulanmış adları ✓

### KARNE

| ölçüm | sayı |
|---|---|
| işlenen madde | 20 |
| GÜÇLÜ aday (makinenin gösterdiği) | 57 |
| **YAZILAN ad** | **34** |
| **"sorulacak"a düşen ad** | **23** |
| alan yazılan madde | **17** / 20 |
| **rozetli madde: 41 → 58** | **+17** |
| rozet (madde, ad) çifti: 99 → 133 | +34 |
| rozet çelişkisi (ROZET2 tam tarama) | **133 / 133 TUTUYOR** · ölü ad 0 · uzak 0 · yön-ters 0 |

`py arac/denetle.py` → **SONUÇ: temiz.** Dört ölçütte de önce/sonra birebir
aynı: 2 = 590 kırılma / 0 açık · 2s = 1419 / 178 AÇIK (tavan 195) / 589
kapsam dışı / 151 yıl-temsilî · 2i = 129 / 1 açık · 2t = kırılmasız madde 11.
Beklenen buydu: rozet alanları **motoru değil arayüzü** besler, kırılma
üretmez.

### 🔴 UYGULADIĞIM DOĞRULAMA ÖLÇÜTÜ (M-4953 b① — açıkça yazıyorum ki sınanabilsin)

**YAZILIR** → ad, maddenin **başlığında (`b`)** ya da **anlatısında (`d`)**
bir *el değiştirme cümlesinin* öznesi/nesnesi olarak geçiyor.

**SORULACAK** → dört sınıftan biri:

| sınıf | niçin yazılmadı |
|---|---|
| **① yalnız `yer:` alanında** | `yer:` olayın sahnesini söyler, neyin el değiştirdiğini değil |
| **② savaş mahalli** | Dimbos, Pelekanon: muharebenin ADI; alındığı hiçbir yerde yazmıyor |
| **③ atlas türevi cümle** | *"Aynı tarihte katılan öteki yerler: …"* — bu cümle veriden üretilmiş, kaynaktan değil (D207: atlas kendi kendine dayanak olamaz) |
| **④ YABANCI→YABANCI devir** | Olayda Osmanlı hiç yok; dört alanın hiçbiri bu yönü karşılamıyor (aşağıda ayrı başlık) |

Yön şartı (M-4953 b②) sağlandı: **yazılan 34 adın hepsi `d:f +0` taşıyor** —
yani Osmanlı doğrudan idaresi tam o gün başlıyor. Yönü belirsiz tek ad
yazılmadı.

### YAZILAN — 17 madde, 34 ad (hepsi `fethedilen:`)

| # | madde | yazılan adlar | dosya |
|---|---|---|---|
| 1 | 1288-01-01 Karacahisar'ın fethi | Karacahisar · Eskişehir | `olaylar_ek5.js` |
| 2 | 1299-01-01 Bilecik ve Yarhisar | Bilecik · Yarhisar | `olaylar_ek5.js` |
| 3 | 1302-08-01 İznik'in ilk kuşatması | Marmaracık | `olaylar_ek.js` |
| 4 | 1303-01-01 Dimbos zaferi | Kite | `olaylar_ek5.js` |
| 5 | 1304-01-01 Sakarya seferi | Leblebicihisar · Lefke · Mekece · Geyve | `olaylar_ek5.js` |
| 6 | 1305-01-01 Geyve Boğazı kaleleri | Karaçepüş · Karatigin · Absu | `olaylar_ek5.js` |
| 7 | 1324-01-01 Akyazı ve İmralı | Akyazı · İmralı Adası | `olaylar_ek.js` |
| 8 | 1324-03-01 Gemlik ve Armutlu | Gemlik · Armutlu | `olaylar_ek.js` |
| 9 | 1325-01-01 Konuralp'in Bolu yöresi | Mudurnu · Konurapa · Bolu | `olaylar_ek6.js` |
| 10 | 1326-04-06 Bursa'nın fethi | Bursa | `olaylar.js` |
| 11 | 1329-06-01 Pelekanon Savaşı | Hereke · Gebze · Üsküdar | `olaylar_ek5.js` |
| 12 | 1330-06-01 Kocaeli kıyıları ve Kandıra | Kandıra | `olaylar_ek.js` |
| 13 | 1331-03-02 İznik'in fethi | İznik | `olaylar.js` |
| 14 | 1337-01-01 İzmit'in fethi | İzmit | `olaylar.js` |
| 15 | 1345-01-01 Karesi ilhakı | Balıkesir · Bergama · Biga · Edremit · Erdek | `olaylar_ek5.js` |
| 16 | 1361-05-05 Edirne'nin fethi | Edirne | `olaylar.js` |
| 17 | 1363-01-01 Gümülcine'nin fethi | Gümülcine | `olaylar_ek5.js` |

### SORULACAK — 23 ad

| madde | ad | sınıf | sorunun kendisi |
|---|---|---|---|
| 1299-01-01 Bilecik/Yarhisar | İnegöl | ③ | Yalnız *"Aynı tarihte katılan öteki yerler: İnegöl"* cümlesinde. Veride o gün `d:f` var ama gece baskınının anlatısında İnegöl yok. Ayrı maddesi mi olmalı? |
| 1303-01-01 Dimbos | Dimbos | ② | Muharebe mahalli. Veride `d:f +0` var; kaynak alındığını demiyor |
| 1303-01-01 Dimbos | Kestel | ② | Kaynak yalnız *"Kestel tekfuru savaş meydanında öldü"* diyor — tekfurun ölümü kalenin teslimi değildir |
| 1304-01-01 Sakarya seferi | Akhisar | ① | Yalnız `yer:` alanında; TDV'nin verdiği sefer sırasında (Leblebüci → Lefke → Mekece → Geyve) yok |
| 1310-08-15 Rodos ve Oniki Ada | Rodos · İstanköy · Sömbeki · Lindos · Herke · Kelemez · İleryoz · İlyaki · İncirli (**9 ad**) | ④ | Bizans → St. Jean şövalyeleri. Osmanlı yok |
| 1322-01-01 Sinop | Sinop | ④ | Pervâneoğulları → Candaroğulları. Osmanlı yok |
| 1329-06-01 Pelekanon | Pelekanon | ② | Muharebe mahalli |
| 1329-06-01 Pelekanon | Samandıra | ① | Yalnız `yer:`te; anlatı *"Hereke'den Üsküdar'a kadar **sahil** kasabaları"* diyor, Samandıra iç kesimde |
| 1329-06-01 Pelekanon | Aydos Kalesi | ① | Aynı — yalnız `yer:`te, sahil değil |
| 1345-01-01 Karesi ilhakı | Ayvalık · Behramkale · Karabiga | ① | Yalnız `yer:`te; TDV anlatısı Balıkesir, Bergama, Kirmasti, Mihaliç, Gölyazı, Ulubat, Biga sayıyor |
| 1345-01-01 Karesi ilhakı | Çanakkale | ③ | *"Aynı tarihte katılan öteki yerler: Çanakkale"* |
| 1361-05-05 Edirne | Havsa · Lalapaşa | ① | Yalnız `yer:`te |

### 🔴 ŞEMA BOŞLUĞU — dört alan YABANCI→YABANCI devri anlatamıyor (12 ad)

Sorulacakların **yarısından fazlası (12/23)** tek bir sebepten:
**1310 Rodos (9 ad) ve 1322 Sinop (1 ad)** — artı bu sınıfın kuyruğundaki
iki ad — olaylarında **Osmanlı hiç yok**. Bizans'tan şövalyelere,
Pervâneoğulları'ndan Candaroğulları'na geçiş.

Bugünkü dört alan (`fethedilen` · `kaybedilen` · `statu_dogrudan` ·
`statu_vasal`) **Osmanlı çerçevelidir**: `fethedilen` ekranda *kazanç*
(`k-fetih` yeşili), `kaybedilen` *kayıp* (`k-kayip` grisi) rengiyle çıkar.
Rodos'a `fethedilen` yazmak, 1310'da Rodos'u **Osmanlı almış gibi**
gösterir — Cetinje'yle birebir aynı sınıf, üstelik dokuz kat.

⚠️ Makinenin ilk önerisi burada `fethedilen` diyordu ve **öneri kuralı
teknik olarak doğru çalışıyordu** (`s:t→bizans` bir yabancı döneminin
bitişi = Osmanlı çerçevesinde kazanç). Kusur kuralda değil, kuralın
uygulanamayacağı bir olaya uygulanmasında. Bu yüzden ④ sınıfı **makineyle
elenemez**; maddenin taraflarına bakmak gerekir.

**Önerim (karar senin):** üç seçenek —
① beşinci bir alan (`el_degistiren:` gibi, nötr renk) ·
② bu sınıfa rozet hiç verilmemesi (bugünkü fiilî durum, ama sessiz) ·
③ mevcut alanların yeniden tanımlanması (pahalı, 133 çifti etkiler).
Ölçüm: ilk 20 maddede bu sınıf **2 madde / 12 ad**, yani %10 madde · %21 ad.
Kalan 178 maddede oranın ne olduğunu ölçmedim — istersen ölçerim, ucuz.

---

## Yan doğrulama — KRONO-YER-0072'nin çakışma uyarısı (M-4956)

`data/olaylar_ek5.js`te KRONO-YER-0072'nin üç commitlenmemiş satırı vardı.
Yazma betiğim her madde için dosyayı **yazmadan hemen önce yeniden okuyor**,
bayat kopya kullanmıyor. Yazımdan sonra üçü de **yerinde doğrulandı**:

| satır | alan | durum |
|---|---|---|
| `:321` 1821-02-22 Eflak İsyanı | `odak_kimlik:["eflak","bogdan"]` | ✓ yerinde |
| `:334` 1827-02-01 Tımar tasfiyesi | `kapsam_genis:true, odak_yer:"İstanbul"` | ✓ yerinde |
| `:345` 1828-04-26 Osmanlı-Rus Savaşı | `kapsam_genis:true, odak_yer:["Yaş","Anapa"]` | ✓ yerinde |

---

## 🔴 KENDİ KUSURUM — eklediğim alandan sonra VİRGÜL yoktu

`olaylar_ek10.js`e yazdığım `ic_not_b`den sonra virgül koymamıştım; sonraki
alan `kaynak:` olduğu için hem `node --check` hem `denetle.py` çöktü.
Düzeltildi, beş dosyada `node --check` **5/5 temiz**.

📌 Ayrıca bash döngümde `||` yüzünden *"JS OK 5 dosya"* satırı, bir dosya
BAŞARISIZKEN de basıldı — sınavın kendisi yalan söyledi. Düzeltildi (bayrak
değişkeniyle). **Tur 2'deki `node --check` ≠ `denetle.py` dersinin ikinci
yarısı bu:** denetimin çıktısına da denetim gerekiyor.

---

## Değişen dosyalar

| dosya | ne | commit |
|---|---|---|
| `data/olaylar_ek10.js` | Cetinje alanı + `ic_not_b` | paylaşılan — **1.MURAT** |
| `data/olaylar.js` | 4 maddeye `fethedilen:` | paylaşılan — **1.MURAT** |
| `data/olaylar_ek.js` | 4 maddeye `fethedilen:` | paylaşılan — **1.MURAT** |
| `data/olaylar_ek5.js` | 8 maddeye `fethedilen:` | paylaşılan — **1.MURAT** |
| `data/olaylar_ek6.js` | 1 maddeye `fethedilen:` | paylaşılan — **1.MURAT** |
| `denetim/KRONO-EKSIK-0921-TUR3.md` | YENİ (bu rapor) | KRONO-EKSIK-0921 |
| `denetim/KRONO-EKSIK-ROZET2-0921.json` | yeniden üretildi (133/133) | KRONO-EKSIK-0921 |

## Tekrar koşum

```bash
py denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py --sina
py denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py
py arac/denetle.py
```
