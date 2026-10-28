# P84-ETIKET-MIMARI-1006 — ek okuma türleri: SPOR · KÜLTÜR SANAT · MİMARİ (tek diff seti)

6 Ekim 2026 · temel `origin/makine/umit` `61751bf0` · worktree `C:\atlas-p84-mimari` · UYGULANMADI, commit yok.
P84-ETIKET-SPOR-1006'nın devamı. Emre'nin kararı: *"mimari ile ilgili kartlara MİMARİ diye YENİ BİR
KATEGORİ açalım; şehircilik, bayındırlık gibi konuları ve buna paralel konuları da dahil edelim."*
Öngörü ölçümden önce: `denetim/P84-ETIKET-MIMARI-1006-ONGORU.md`. Araç (SALT OKUR):
`denetim/ARAC-P84-ETIKET-MIMARI-1006.js` → önce `-HAM.json` · sonra `-SONRA.json`.
Motor tuzu dört dosyasına dokunulmadı.

## 0. ⚠️ Önceki rapora düzeltme
P84-ETIKET-SPOR-1006 §4 "22 mimari kart" demişti. **Yanlış sayım, doğrusu 20**:
`mimari-*` 16 · `lale-devri-mimari-ve-sehir` 1 · `camitarz-*` 3. Bu turda şehircilik taramasından
2 kart eklendi; toplam yine 22 çıkması tesadüf.

## 1. Diff: `denetim/P84-ETIKET-MIMARI-1006.diff` (270 satır · `git apply --check` temiz · CR 0)
**app.js** (`js/app.js`, +15/−2):
- `EKOKUMA_TUR`a, `teknik-bilimsel`in hemen altına üç tür:
  | anahtar | etiket (akordeon ipucu) | üst yazı (BÜYÜK, kolon) |
  |---|---|---|
  | `spor` | 🏅 Spor | SPOR |
  | `kultur-sanat` | 🎨 Kültür Sanat | KÜLTÜR SANAT |
  | `mimari` | 🏛️ Mimari ve Şehircilik | **MİMARİ** (`_EK_UST_KISA`ya eklendi; 20 karakterlik ad 7px'lik kolona sığmıyor, kısaltma Emre'nin kendi kelimesi) |
  Ad önerim bu. Emre başka ad isterse yalnız `etiket` dizgisi değişir.
- Gövde çizimi değişmiyor: üç tür de `ekKartHtml`in SON ÇARE dalına düşüyor. `teknik-bilimsel` de aynı daldan çiziliyordu.
- Akordeondaki sırası `EKOKUMA_TUR` sırası (`_akordeonTurSirasi`). Yeni türler Teknik/Bilimsel'in hemen ardından geliyor.

**Veri** (`tur:"teknik-bilimsel"` → yeni tür; başka alan dokunulmadı):
| Yeni tür | Kart | Dosya |
|---|---|---|
| spor (1) | teknik-osmanli-spor-gelenekleri | ekokuma_tamamla.js |
| kultur-sanat (1) | teknik-osmanli-kiyafet-statu | ekokuma_tamamla.js |
| mimari (13) | mimari-sultanahmet · suleymaniye · selimiye · mostar-koprusu · mihrimah-edirnekapi · nuruosmaniye · topkapi-sarayi · dolmabahce-sarayi · fatih-camii · rumelihisari · sehzade-camii · yeni-cami · beyazit-camii | ekokuma_mimari.js |
| mimari (3) | mimari-uc-serefeli-camii · drina-koprusu · sadabad | ekokuma_mimari2.js |
| mimari (3) | camitarz-bes-donem · bursa-ulucami · nusretiye-camii | ekokuma_camitarz.js |
| mimari (1) | lale-devri-mimari-ve-sehir | ekokuma_lale.js |
| mimari (2) **şehircilik** | teknik-galata-koprusu-ne-zaman-acildi · teknik-tunel-karakoy-beyoglu-1875 | ekokuma_p75a.js |
**Toplam 24 kart.** Altı ekokuma dosyası tembel yükleniyor, hiçbiri paketli değil ⇒ `paketle.py` gerekmiyor.

## 2. Ölçüm: önce / sonra (evren: index.html'in 70 dosyası + `_EKOKUMA_DOSYA_ADLARI` 76 = 146 dosya, 804 kart, yükleme hatası 0)
| | önce | sonra |
|---|---|---|
| EKOKUMA_TUR | 15 | 18 |
| teknik-bilimsel | 82 | **58** |
| mimari · spor · kultur-sanat | — | **22 · 1 · 1** |
| tanımsız türde kart | 0 | 0 |
| öteki 14 tür | — | değişmedi (birebir) |

### D225: iki yönde, gerçek uygulamayla
| Durum | Tanımsız türde kart |
|---|---|
| bugün | 0 |
| **yalnız veri** (`app.js` eski) | **24**, adıyla: 22 mimari + 1 spor + 1 kultur-sanat ⇒ 24 kart ekrandan sessizce kaybolur |
| **veri + app.js** (tek diff) | **0** |
⇒ Diff tek parça; bölünmemeli.

### Kapılar
- `node --check js/app.js` ✓ · değişen 6 veri dosyasında `node --check` ✓
- `py arac/denetle_arayuz.py`: önce çıkış 0 "SONUÇ: temiz" · sonra çıkış 0 "SONUÇ: temiz" · **iki çıktı birebir aynı** (diff boş).
- `arac/`ta `teknik-bilimsel` sayısına bağlı kapı yok (önceki tur grep ile ölçtü).

## 3. Şehircilik/bayındırlık taraması (bütün ek okuma evreni, 804 kart)
Anahtar kelimeler (normalleştirilmiş, kelime başı; başlık+soru+ad+kısa+id üzerinde):
`mimar imar "sehir plan" sehircilik bayindirlik nafia "su yolu" suyolu isale kemer bent sarnic cesme sebil
kopru kanal liman rihtim "yol yapim" cadde kervansaray "han " bedesten carsi kulliye cami medrese saray kosk
kasr turbe kubbe minare "sur " surlar "kale insa" tunel meydan bahce hamam imaret darussifa hastane insa yapi
mahalle yangin kagir ahsap`
**Aday 155 → elle okundu → mimari/şehircilik KONULU 26 kart.** 24'ü taşındı, 2'si biçim türünde kaldı (aşağıda).

Yanlış pozitif sınıfları (~129): "Kasr-ı Şirin" antlaşması ×8 · "saray" entrikası/harem ×~20 ·
"meydan muharebesi" ×~10 · "liman" (savaş/ticaret) ×~14 · "köprü" (Köprülü adı, köprübaşı) ×7 ·
"yapı" (idari/siyasi yapı) ×~25 · "Çeşme" baskını ×5 · "mimar" (barış mimarı) ×3 · "kanal" (Süveyş Harekâtı, Paris kanalları) ×3 · "yangın" (kahve yasağı, mecaz) ×2 vb.

**Konusu mimari/şehircilik olan ama TAŞIMADIĞIM kartlar: SEÇENEK, karar koordinatör/Emre'de**
| Kart | Bugünkü tür | Niçin taşımadım |
|---|---|---|
| topkapi-sarayi-insasi | sebep-sonuc | Biçim türü. `sebep-sonuc`un kendi çizim dalı var (app.js `k.tur==="sebep-sonuc"`); taşınırsa SON ÇARE dalına düşer, sebep/sonuç düzeni bozulabilir (ölçülmedi) |
| tartisma-topkapi-sarayi | tartisma | Biçim türü (tartışma); kartın varlık sebebi tartışma |
| teknik-osmanli-demiryollari · teknik-hicaz-demiryolu · teknik-bogaz-ulasimi-sirket-i-hayriyye-oncesi | teknik-bilimsel | **Ulaştırma.** 26 başlıkta "Ulaştırma haberleşme altyapı" (`konu-ulastirma`, suzgec.js:368) "İmar ve mimari"den ayrı. "Paralel konu" sayılırsa üç satırlık ek diff yeter. ⚠️ Son ikisi anahtar kelime listemde YAKALANMADI, elle okumadan buldum (önceki turun 82'lik listesi) |
| sebep-sonuc-don-volga-kanal-projesi | sebep-sonuc | Bir kanal projesi ama askerî-lojistik bir proje, ve biçim türünde |
| abdulhamid-donemi-yenilikler | teknik-bilimsel | Karışık konu (okul, demiryolu, telgraf) |
| dunya7-istanbulun-buyuk-yanginlari · teknik-istanbul-depremleri | sok-haberler · teknik-bilimsel | Afet. Şehir dokusu anılıyor ama konu felaket |
| mahalle-teskilati-sorumluluk | tartisma | Toplumsal düzen, yapı değil |

## 4. Tutarlılık notu: üç eksen, üç ayrı bölüntü
| Konu | ① `k:`/`tur:` grubu (suzgec.js:59/280, tek değerli, 7 grup) | ② 26 başlık (`etiket: konu-*`, çok değerli) | ③ ek okuma türü (bu diff) |
|---|---|---|---|
| Mimari | `mimari` → **Kültür-bilim** | **İmar ve mimari** `konu-imar` (:361) | **Mimari ve Şehircilik** `mimari` |
| Ulaştırma | `teknik` → Kültür-bilim | **Ulaştırma haberleşme altyapı** `konu-ulastirma` (:368) | yok, teknik-bilimsel'de |
| Spor | `spor` → Kültür-bilim | **Spor** `konu-spor` (:360) | **Spor** `spor` |
| Kültür / sanat | `kultur` → Kültür-bilim | **Sanat** `konu-sanat` · **Kültür** `konu-kultur` (İKİ ayrı) | **Kültür Sanat** `kultur-sanat` (TEK) |
- ② ve ③ artık aynı dili konuşuyor: mimari, spor ve kültür ikisinde de ayrı. Bir fark kalıyor: ② sanat ile kültürü ikiye ayırıyor, ③ birleştiriyor. Bu Emre'nin "KÜLTÜR SANAT" adlandırmasının birebir karşılığı, kusur değil.
- Ad çakışması yok: kronoloji MADDELERİ de `tur:"mimari"` taşıyor (index.html evreninde ÖLÇÜLDÜ: **92 madde**, ör. `kronoloji_anadolu.js`), ama `EKOKUMA_TUR` yalnız `_ekHavuz()` (`EKOKUMA*` globalleri) üzerinde dönüyor. `GORSEL_MIMARI`/`gorsel_madde.js`teki `tur:"mimari"` de bu havuza girmiyor (desen `/^EKOKUMA(_[A-Z0-9]+)?$/`). Ölçüm: yeni türle havuz kartı 804'te kaldı, madde kartlara karışmadı.
- ① ekseninde mimari ve spor "Kültür-bilim" grubunda kalıyor. Bu, 7 grupluk kaba bölüntünün yazılı kararı (suzgec.js:54 "YENİ GRUP AÇILMADI"). Değiştirmedim.

## 5. Öngörü ↔ ölçüm
| Öngörü | Ölçüm | Değerlendirme |
|---|---|---|
| teknik-bilimsel'de mimari 22 | **20** | Öngörü önceki turun yanlış sayımına dayanıyordu (§0) |
| Şehircilik ek kart 5-10 | Konusu uyan 9 (Galata, Tünel, 3 ulaştırma, Topkapı ×2, Don-Volga, yenilikler) · taşınan 2 | Sayı aralıkta. "Paralel konu" sınırı ulaştırmada; karar seçenekte |
| Aday ~60-100, yanlış pozitif yüksek | 155 aday · ~%83 yanlış pozitif | Mekanizma tuttu, aday sayısı yüksek çıktı |
| D225 kaybı ≈ 27-32 | **24** | Mekanizma tuttu. Sayı, biçim türlerini taşımama kararıyla düştü |

## 6. Bulamadım / ölçemedim
- Ekran görüntüsüyle doğrulama yok: tarayıcıda akordeon açılmadı. Ölçüm kart düzeyinde, aynı `EKOKUMA_TUR` döngü mantığıyla yapıldı.
- Anahtar kelime listesi iki ulaştırma kartını kaçırdı (Hicaz demiryolu, Boğaz ulaşımı). Listenin kaçırma oranı ölçülmedi; teknik-bilimsel 82'nin tamamı önceki turda elle okunmuştu, öteki türlerde kaçırılan olabilir.
- `topkapi-sarayi-insasi` `kultur-sanat`/`mimari`ye taşınırsa sebep-sonuç kartı nasıl çizilir, ölçülmedi.

## 7. İstiyorum
- **A (önerim):** `P84-ETIKET-MIMARI-1006.diff` tek commit'te iner. app.js ile veri ayrılmamalı (D225: 24 kart).
- **B (Emre'ye):** ulaştırma kartları (demiryolları, Hicaz demiryolu, Boğaz ulaşımı) MİMARİ'ye mi? 26 başlıkta ayrı bir başlıkları var, ben dokunmadım.
- **C (Emre'ye):** biçim türündeki iki Topkapı kartı biçiminde mi kalsın? Önerim: kalsın.
- Önceki turun `P84-ETIKET-SPOR-1006.diff` ve `-APPJS.diff` dosyaları bu diff'in **içinde** ve onların yerini alıyor. İkisi birlikte uygulanırsa çakışır, **ESKİLERİ UYGULAMAYIN.** `-MADDE.diff` (Henri II / Mombasa) ayrı ve hâlâ geçerli: `61751bf0` üzerinde `git apply --check` temiz.
