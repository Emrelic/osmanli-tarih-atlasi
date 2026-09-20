# EKO-ILGI-0073 — İKİNCİ TUR (M-4837 hükümleri)
**20 Eylül 2026 · 1.MURAT'ın a–g hükümlerinin karşılığı.**
Birinci tur: [`EKO-ILGI-0073.md`](EKO-ILGI-0073.md).

---

## (b) H-0005 — UYGULANDI, öncesi/sonrası geri okundu

Yetki M-4837/b ile verildi, **(a) şıkkı**: `data/olaylar_amerika_0920.js`de iki kaydın
`onem`/`dunya` puanı **4 → 3**.

| | önce | sonra |
|---|---|---|
| `1821-09-15` Orta Amerika Bağımsızlık Bildirisi | `onem:4, dunya:4` | `onem:3, dunya:3` |
| `1535-01-18` Lima kuruldu | `onem:4, dunya:4` | `onem:3, dunya:3` |
| dış maddelerin puan dağılımı (3 / 4) | 40 / 35 | 42 / 33 |
| **varsayılan eşikte (`"4"`) görünen dış madde** | **38** | **36** ✓ |
| eşik `"5"` · `"hepsi"` | 3 · 227 | 3 · 227 (değişmedi) |
| Amerika kıtasından varsayılan eşikte görünen | 2 | **0** |

Koordinatörün beklediği sayı 36'ydı, **36 çıktı.** Kod DEĞİŞMEDİ
(`DIS_ESIK_VARSAYILAN` hâlâ `"4"`), öteki 36 dış madde etkilenmedi.
Yama: `ARAC-EKO-ILGI-0073-YAMA3-H0005.py`.

---

## (d) KRONOLOJI_RUSYA ikizi — KALDIRILMADI, GÜNÜ ÇEKİLDİ

**Karar ve gerekçesi.** Koordinatörün kendi ölçütü: *"kuyruk maddesi kendi başına bir
şey anlatıyorsa kalsın, tekrarsa gitsin."* Bu kayıt **tekrar değil**:

> `KRONOLOJI_RUSYA` — *"Osmanlı, Yeniçeri Ocağı'nı kaldırdı — Rusya için stratejik
> fırsat"*, `d:` alanı: ocağın kaldırılmasının Osmanlı ordusunu geçici zafiyete
> soktuğunu ve **I. Nikolay'ın bunu 1828-29 savaşında fırsata çevirdiğini** anlatıyor.
> Kaynağı da ayrı (Riasanovsky & Steinberg). Çekirdek madde bunların hiçbirini
> söylemiyor.

Silmek bir anlatı kaybı olurdu; **46 günlük ayrışma** ise gerçek kusurdu. ⇒ Yalnız
`t:"1826-07-31"` → `"1826-06-15"`, gerekçe kaydın `ic_not_gun` alanına yazıldı.

**Zincir:** bu kayda bağlı 2 kart vardı (`mehter-yeniceriyle-birlikte-lagvi`,
`yeniceri-vakai-hayriyye-gun-gun`). Gün değişince bağları öksüz kalacaktı; aynı işlemde
`"1826-06-15|Rusya"` ayırt edicisine çevrildi. Ayırt edici seçimi ölçülerek yapıldı:
artık iki madde aynı günde duruyor, `"hayriyye"` yalnız çekirdek maddenin başlığında,
`"rusya"` yalnız kuyruk maddesinin başlığında geçiyor — ikisi karışmıyor.

| sınav | önce | sonra |
|---|---|---|
| Rusya ikizine bağlı kart | 2 | **2** ✓ |
| çekirdek Vak'a-i Hayriyye maddesine bağlı kart | 8 | **8** ✓ |

---

## (c) ÖKSÜZ BAĞ — ayıklama

**(c1) yapıldı:** `teknik-muhendishane-ardil-okullar` kartından
`"1944-01-01|İstanbul Teknik Üniversitesi kuruldu"` bağı **kaldırıldı** — atlasın
kapsamı 1281-1923, o güne hiçbir zaman madde gelmeyecek. Okulun bugünkü ardılı bilgisi
kartın METNİNDE duruyor. Öksüz bağ **14 → 13**.

**(c2) — sınıflandırma, ve önceki sayımın DÜZELTİLMESİ.**
Birinci turda "10 öksüz bağ madde bekliyor" demiştim; tek tek okuyunca **o sayı fazla
çıktı**. Kalan 13'ün dağılımı:

| sınıf | adet | kayıt |
|---|---|---|
| **KASITLI sigorta çifti** — kayıt hem eski hem yeni günü taşıyor, kendi `ic_not`unda yazılı | **5** | `rusiran-hazar-seferi-1722` ×2 · `rusiran-nadir-ruslari-cikardi` · `rusiran-takvim-farki` (Jülyen/Gregoryen) · `sebep-sonuc-usi-1912` (*"Kart iki güne de bağlandı"*) |
| **YAPISAL** — `ANTLASMALAR`ın `olay:` alanı yok, ayırt edici eklenemiyor | **1** | `ANTLASMALAR#Sırbistan özerklik fermanı` `1830-08-30` (madde `1830-11-08`de) → (e) |
| **YENİ KRONOLOJİ MADDESİ BEKLEYEN** | **7 bağ / 6 ayrı olay** | aşağıda |

### Madde bekleyen 6 olay — **altısı da ÇEKİRDEK** (`data/olaylar*.js`)

| olay | istenen gün | bağı taşıyan kart | kova |
|---|---|---|---|
| Şehzade Mahmud'un idamı | `1603-06-07` | `tartisma-sehzade-mahmud-tarih-bulgusu` | **çekirdek** |
| Boğaz'ın donduğu kış / büyük zemheri | `1621-01-24` | `dunya7-istanbul-sel-zemheri-bogazin-donmasi` | **çekirdek** |
| Mühendishâne-i Berrî-i Hümâyun'un kurulması/ayrılması | `1795-01-01` | `teknik-muhendishane-i-bahri-i-humayun` **ve** `teknik-muhendishane-ardil-okullar` (2 bağ, aynı olay) | **çekirdek** |
| Hendese-i Mülkiyye Mektebi'nin açılışı | `1883-01-01` | `teknik-muhendishane-ardil-okullar` | **çekirdek** |
| Kilitbahir Hisarı'nın yapımı | `1452-01-01` | `canakkale-hisar-ve-zincir` (`data/merak.js`) | **çekirdek** |
| Nusretiye Camii'nin tamamlanışı | `1826-04-08` | `camitarz-nusretiye-camii` (öksüz değil — yanlış maddede duruyor) | **çekirdek** |

📌 **Kuyrukta (`KRONOLOJI_*`) bekleyen TEK madde yok.** Altısı da Osmanlı'nın kendi
kurumu, yapısı, hanedanı ya da şehri — yani boşluk çekirdek kronolojinin kendi
boşluğu, kuyruğun eksiği değil.

---

## (e) ANTLASMALAR — yapısal kusurun BOYU ölçüldü

`ANTLASMALAR` kayıtlarının `olay:` alanı yoktur; `ekKartBagliMi` onları yalnız `t:` ile
güne bağlar (`turAlaniYok` dalı), bu yüzden **ayırt edici eklenemez.**

| ölçü | sayı |
|---|---|
| ANTLASMALAR kaydı | 41 |
| günü TEK maddeye düşen | 5 |
| **günü PAYLAŞAN (≥2 madde)** | **35** |
| öksüz (o gün hiç madde yok) | 1 |
| ürettiği bağ-madde çifti | **126** |
| kova dağılımı | A **124** · B 1 · C 1 |

🔴 **Sayı BÜYÜK DEĞİL — ayrı kalem açmaya gerek görmüyorum.** Paylaşımın kendisi çoğu
yerde meşru: aynı antlaşma çekirdekte bir, kuyrukta iki-beş devletin kendi
kronolojisinde anlatılıyor (Karlofça 6 madde, Prut 5, Pasarofça 4 — hepsi Karlofça'nın/
Prut'un kendisi). Ölçülen **gerçek zarar 126 çiftte 3**:

1. `Mondros Mütarekesi` → **"Polonyalılar Krakov'da yönetimi ele geçirdi"** (C)
2. `Mondros Mütarekesi` → **"Avusturya Cumhuriyeti'nin kuruluşu"** — alet bunu A saydı,
   **YANLIŞ**; sebebini §"aletin sınırı"nda açıyorum
3. `ANTLASMALAR#Sırbistan özerklik fermanı` `1830-08-30` öksüz (madde `1830-11-08`de) —
   kaydın kendi `t:`si antlaşmanın tarihi olduğu için bağ olarak düzeltilemez

Üçü de **1918-10-30 ve 1830-08-30** gibi *dünya çapında kalabalık* günlerde. Öneri:
şema değişikliği yerine tek satırlık bir ince ayar yeter — `ekKartBagliMi`nin
`turAlaniYok` dalı, kaydın `ad:` alanını maddenin başlığında arasın (bugün hiç
aramıyor). Bu, "Mondros" kartını "Krakov" maddesinden çıkarır, "Mondros Mütarekesi"
maddesinde tutar. **Yapmadım** — `js/app.js` motor dalı, EKO-UI-0073 aynı bölgede,
hüküm koordinatörün.

### 🔴 ALETİN SINIRI — kendi ölçümümde bulduğum yanlış-A sınıfı
`ANTLASMALAR#Mondros Mütarekesi` ↔ *"Avusturya Cumhuriyeti'nin kuruluşu"* çifti A
kovasına düştü. Sebep: özne çaprazı kartın adındaki **"mütarekesi"** kelimesini
maddenin gövdesindeki **"mütareke"** ile eşleştirdi (kök tutturma ≥5 harf). Yani
**cins isim** (antlaşma türünün adı) özel isim gibi davrandı. Bu sınıf, birinci turda
raporladığım A oranını bir miktar şişiriyor olabilir; B/C kovasını ise şişirmez
(yanlış-A sadece şüpheliyi gizler, uydurmaz). Çare: özne kümesinden cins isimleri
(antlaşma · mütareke · sözleşme · savaş · kuşatma · muharebe…) ayıklamak. Aletin
`DURAK` listesine eklenir, **bu turda yapılmadı** — B kovası okunmadan yapılırsa
ölçüm ortasında eşik değiştirmiş olurum.

---

## (f) `data/ekokuma_antlasma6.js` — KAYIP DEĞİL, HİÇ YAZILMAMIŞ

| ölçü | sonuç |
|---|---|
| diskte | **yok** |
| `git log --all -- data/ekokuma_antlasma6.js` | **boş** — depo bu dosyayı HİÇ görmedi |
| `js/app.js` satırı | var; `-S` ile izlendi, commit **`b2983f9`** |
| tahta kaydı | bölüşüm yapılmış: *"antlasma6.js · window.EKOKUMA_ANTLASMA6, yıl bölüşümü ben <1700 / o >=1700"*, *"EKO-ANTLASMA-2 önerisi KABUL: <1700 antlasma6 sende"*; sonra da *"antlasma6.js 404 veriyor (listede var, diskte yok; EKO-ANTLASMA-2'nin dosyası)"* diye bildirilmiş |
| kardeşi `data/ekokuma_antlasma5.js` (≥1700) | **var**, 34 KB, 17 Eylül 17:38 |

⇒ Dosya **kaybolmadı; teslim edilmedi.** İş bölüşümünün `<1700` yarısı (Selçuklu-Bizans
1081/1162 · Nymphaeum 1261 · Caltabellotta 1302 · Halep 1323 · Torino 1381 …) hiç
yazılmamış. `onerror` sessizce atladığı için üç gündür kimse fark etmemiş — `app.js`
satırının varlığı teslimin kanıtı sayılmış. **Ayrı kalem sizin.**

---

## (a) HAZIRLIK — 44 kartın tür planı hazır, tek turda iner

Plan: [`EKO-ILGI-0073-TURPLAN.json`](EKO-ILGI-0073-TURPLAN.json) ·
üreten/doğrulayan: `ARAC-EKO-ILGI-0073-TURPLAN.js` (veriye DOKUNMAZ).

**Yeni tür satırı** (`js/app.js`, `EKOKUMA_TUR` — kod anahtarı kebab, ekranda görünen
ad Emre'nin yazdığı biçim, M-4837/a):
```js
"kultur-sanat": { etiket: "🎨 Kültür Sanat", kaynak: function () { return _ekHavuz(); } },
```

`teknik-bilimsel` 72 kart → **44'ü taşınır, 28'i kalır.**

| hedef | kart | kimler |
|---|---|---|
| `kultur-sanat` (YENİ) | **22** | `mimari-*` 16 (ekokuma_mimari 13 + mimari2 3) · `camitarz-*` 3 · `lale-devri-mimari-ve-sehir` · **`teknik-osmanli-spor-gelenekleri`** (Emre'nin adıyla saydığı kart) · `teknik-osmanli-kiyafet-statu` |
| `tartisma` | **17** | `dunya*` ailesinin dünya siyaseti/coğrafyası kartları |
| `sok-haberler` | **3** | `dunya7-istanbulun-buyuk-depremleri` · `-buyuk-yanginlari` · `-sel-zemheri-bogazin-donmasi` — İstanbul afet tarihi; bu kova bugün **BOŞ** (0 kart), dolduruyor |
| `dis-yankilar` | **2** | `dunya-cografi-kesifler` · `dunya-otuz-yil-savaslari-vestfalya` |

**Dosya başına:** `ekokuma_dunya.js` 22 · `ekokuma_mimari.js` 13 · `ekokuma_mimari2.js` 3
· `ekokuma_camitarz.js` 3 · `ekokuma_tamamla.js` 2 · `ekokuma_lale.js` 1. Altı dosya,
hepsi `data/ekokuma_*.js` — tek turda iner.

**Kalan 28'in 2'si bilerek kalıyor:** `dunya-icatlar-erken-donem` ve
`dunya-icatlar-sinai-donem` — `dunya*` ailesinin ölçüte uyan tek kolu (icat/teknoloji
tarihi). Kalan 26 ise gerçekten teknik olanlar (tahrir, narh, matbaa, mühendishâne ×2,
takvim farkı, Cihannümâ, Keşfüzzunûn, menzil-mesafe, tophane-tersane…) **ve ~13 idarî/
kurumsal** kart (devlet kademeleri, hukuk, vergi, iltizam, Eflak-Boğdan, dayılık, tâbi
statü, tarihçilik, Doğu Afrika idarî yapı…).

🔴 **AÇIK SORU, kararı size:** o ~13 idarî/kurumsal kart da ölçüte uymuyor — teknik de
değil bilimsel de. M-4837/a'nın listesinde (`mimari-* · camitarz-* · dunya* · güreş ·
kıyafet`) yoklar, bu yüzden plana ALINMADILAR. Ya `tartisma`ya giderler ya da ikinci
bir yeni tür (`kurum` / "Kurum ve İdare") açılır. Emre'nin H-0002 listesinde böyle bir
başlık yok — bu yüzden kendiliğimden tür icat etmedim.

---

## DEĞİŞEN DOSYALAR (bu tur) — yazıldı, COMMİTLENMEDİ

```
data/olaylar_amerika_0920.js   H-0005: iki kaydın onem/dunya 4 -> 3
data/kronoloji_rusya.js        1826-07-31 -> 1826-06-15 + ic_not_gun gerekçesi
data/ekokuma_toplum.js         mehter: "1826-07-31" -> "1826-06-15|Rusya"
data/ekokuma_yeniceri.js       "1826-07-31|Yeniçeri" -> "1826-06-15|Rusya"
data/ekokuma_kurum2.js         1944 (kapsam dışı) bağı kaldırıldı + gerekçe
```
`py arac/denetle.py` → aşağıda. Yüklenemeyen dosya: 0.

## NE BULAMADIM / YAPMADIM
- B kovasının 529 çifti **okunmadı** (koordinatör bu turda okuma dedi).
- `kultur-sanat` türü **eklenmedi** (sıra: EKO-UI-0073 önce).
- `ekKartBagliMi`nin `turAlaniYok` dalına `ad:` araması **eklenmedi** (motor dalı).
- Aletin cins-isim yanlış-A sınıfı **düzeltilmedi** (ölçüm ortasında eşik değişmesin).
