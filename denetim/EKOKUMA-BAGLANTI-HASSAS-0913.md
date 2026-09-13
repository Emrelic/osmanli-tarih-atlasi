# EK OKUMA BAĞLARI — AYIRT EDİCİ, MAGAZİN `olay`, MERAK_SH104 — 13 Eylül 2026

Önceki tur: `denetim/EKOKUMA-DAGITIM-0913.md` (commit 8982dfb). Bu tur onun ④ çakışmalarını ve ⑥ yapısal önerilerini uyguladı.
Kart METİNLERİNE dokunulmadı. Değişen yalnız `js/app.js` ve kart dosyalarındaki bağ alanları (`olay` / `baglanti` / magazin `t`). Commit YOK.

Alet: `denetim/ARAC-EKOKUMA-BAGLANTI-HASSAS-0913.js`. Kuralı TAKLİT ETMEZ: `ekKartBagliMi` ve yardımcıları app.js'in kendi kaynağından kesilip eval edilir. Dosya listesi `_EKOKUMA_DOSYA_ADLARI`'ndan, tür listesi `EKOKUMA_TUR`'dan okunur. `APP_JS=` ve `KART_DIR=` ile önce/sonra ölçülür, `--fark a.json b.json` isabet kümelerini karşılaştırır.

## ① js/app.js değişiklikleri

| satır | ne |
|---|---|
| 6831, 6833 | `_EKOKUMA_DOSYA_ADLARI`'na `"ekokuma_dalga2"` ve `"merak_sh104"` eklendi. `ekokuma_dalga2` diskte henüz yok, sessizce atlanıyor (tasarım). |
| 6902 `_merakHavuz()` | `window.MERAK` önce, sonra `/^MERAK_[A-Z0-9]+$/` dizileri. "merak" türünün kaynağı artık bu (6973). Havuzdaki `tur:"merak"` kartlar bugünkü gibi görünmez. |
| 6928 `_ekNorm(s)` | Türkçe eşleme `lower()`'dan ÖNCE yapılır (İ/I/ı→i, Ş, Ğ, Ü, Ö, Ç, Â, Î, Û). Ardından NFD ile birleşik işaretler (`̀-ͯ`) atılır, kesme işaretleri (`' ‘ ’ ` ʼ`) silinir, boşluk sadeleşir. |
| 6937 `_ekBagGun(v)` | `"1566-01-01|Mostar"` → `"1566-01-01"` |
| 6942 `_ekBagEslesir(v, o)` | `|` yoksa `v === o.t` (eski davranış birebir). Varsa gün tutmalı VE ayırt edici `_ekNorm(o.b)` içinde geçmeli. `"gün|"` (boş ayırt edici) düz gün gibi davranır. |
| 6959 `ekKartBagliMi` | Tüm türler `olay || baglanti` listesini okur. Magazin ve `tur`suz (ANTLASMALAR) ek olarak `t`'yi okur. Tek istisna: liste AYNI GÜNÜ taşıyorsa `t` o gün için listeye devreder. Yoksa çıplak `t:"1534-01-01"` ayırt ediciyi boşa çıkarırdı. `t` alanı düz tarih kalır. |

Birim sınavı: 11/11. Mostar ayırt edicisi Mostar'da tutuyor, Mihrimah'ta tutmuyor. `EDİRNEKAPI` büyük harfle tutuyor. Magazin devri iki yönde de doğru. `tur`suz `t` çalışıyor. `node --check js/app.js` temiz. Satır sonları CRLF, bütün dosyalarda tutarlı.

## ② Sayılar

ÖNCE: HEAD'deki app.js ve kart dosyaları, GÜNCEL olaylar üzerinde. SONRA: çalışma kopyası. İki ölçüm aynı alet ve aynı madde evreniyle (1349 çekirdek madde) alındı.

| ölçü | ÖNCE | SONRA |
|---|---|---|
| kart → madde isabeti (ANTLASMALAR hariç) | 289 | **275** |
| en az 1 kartı olan madde (EKOKUMA+MERAK) | 216 | **211** |
| en az 1 butonu olan madde (ANTLASMALAR dahil) | 241 | **236** |
| aynı gün çakışma satırı | 28 | **6** (hepsi ilgili ikiz, bkz. ④) |
| ilgisiz çakışma | 22 | **0** |
| hiçbir maddeye düşmeyen bağ değeri | 2 | **0** |
| merak kaynağındaki kart | 14 | **15** (Otranto) |

Sayıların DÜŞMESİ beklenen sonuç: kaybolan 25 isabetin 25'i de ilgisiz ikiz maddeydi.

⚠️ **Ölçüm sırasında `olaylar*.js` başka bir oturumca değişti (commit'siz, çalışma kopyasında).** İlk "önce" ölçümü 1350 madde okudu, sonrakiler 1349. Değişen iki madde doğrudan bu kartları ilgilendiriyor:
- Nedîm'in ölümü `1730-06-01` → `1730-09-25` (önceki raporun ⑤3 çelişkisi böylece çözülmüş).
- II. Bayezid'in ölümü `1512-05-26` → `1512-06-10` (önceki raporun ⑤2'si, TDV'nin 10 Haziran'ı).

Bu yüzden "önce" ölçümü güncel olaylar üzerinde tekrar alındı. Yukarıdaki tablo o ikinci ölçümdür. İlk ölçüm 290 / 217 / 242 idi ve önceki raporla birebir tutuyordu.

### İsabet kümesi farkı (`--fark`)
**KAYBOLAN 25, hepsi kasıtlı.** Doğru bir bağ KAYBOLMADI:
```
1534-01-01 Matrakçı Nasuh      ← siyasi-evlilikler · kadinlar-saltanati · magazin hurrem · kimdir-hurrem
1553-10-05 Kara Ahmed Paşa     ← kardes-katli · magazin sehzade-mustafa · kimdir-hurrem
1580-01-01 Zal Mahmud Camii    ← merak kapitülasyon · tartışma İngiltere · ekonomi kapitülasyon
1566-01-01 Mostar / Edirnekapı ← iki mimari kartı çapraz · kimdir-mihrimah (Mostar'da)
1577-01-01 Fizan · Drina · Azapkapı ← rasathane tartışması
1468-01-01 Kasım Hanlığı       ← merak karaman
1635-01-01 Yemen'in kaybı      ← nefi-idami
1547-01-01 Sana-Yemen          ← kimdir-mihrimah
1603-01-01 Deli Hasan isyanı   ← kimdir-safiye
1585-01-01 Nahçıvan-Ordubad    ← tağşiş
1695-01-01 Hâfız Osman · Dârfûr ← iltizam-malikane
1638-12-24 Kemankeş sadrazamlığı ← kasr-ı şirin sebep-sonuç
1517-01-22 Süveyş'in alınışı   ← savas-ridaniye (kart Süveyş'i hiç anmıyor)
```
**YENİ 11:**
```
yeniceri-ocagi-kurulusu  1361-01-01 Pençik Kanunu · 1362-06-01 Yeniçeri Ocağı'nın kuruluşu   (önceden çakışma yüzünden bekliyordu)
canakkale-hisar          1452-01-01 Kilitbahir                                               (aynı)
hint-okyanusu-rekabeti   1559-01-01 Bahreyn seferi                                           (aynı)
1585-tagsis              1599-06-01 Karayazıcı ayaklanması                                   (aynı)
otranto-nicin-surdurulmedi  1480-08-11 · 1481-05 · 1481-09-10                                (MERAK_SH104 ilk kez görünüyor)
magazin yavuz-baba       1512-04-24 cülus                                                   (olay[] artık okunuyor)
magazin abdulhamid-hal   1878-05-20 Çırağan Baskını                                          (olay[] artık okunuyor)
magazin yavuz-baba       1512-06-10 II. Bayezid'in ölümü   (bağ madde yeni gününe taşındı; bu kart kendi maddesine GERİ döndü)
```

## ③ Bağ verisinde yapılan değişiklikler (10 dosya)

| dosya · kart | değer |
|---|---|
| `ekokuma.js` yeniceri-ocagi-kurulusu | + `1361-01-01|Pençik` · + `1362-06-01|Yeniçeri Ocağı` |
| `merak.js` karaman-nicin-zor | `1468-01-01|Karaman` |
| `merak.js` kardes-katli-karsilastirmali | `1553-10-05|Mustafa` |
| `merak.js` siyasi-evlilikler · kadinlar-saltanati | `1534-01-01|Hürrem` |
| `merak.js` kapitulasyon-zaaf-mi-arac-mi | `1580-01-01|İngiltere` |
| `merak.js` hint-okyanusu-rekabeti | + `1559-01-01|Bahreyn` |
| `merak.js` canakkale-hisar-ve-zincir | + `1452-01-01|Kilitbahir` |
| `ekokuma_antlasma2.js` sebep-sonuc-kasr-i-sirin-1639 | `1638-12-24|Bağdat` |
| `ekokuma_magazin.js` hurrem-nikah-buyu-soylentisi | olay `1534-01-01|Hürrem` (`t` düz kaldı, devreder) |
| `ekokuma_magazin.js` sehzade-mustafa-katli-entrika | olay `1553-10-05|Mustafa` |
| `ekokuma_magazin.js` yavuz-baba-zehir-soylentisi | `t` ve olay `1512-05-26` → `1512-06-10` (madde taşındı) |
| `ekokuma_mimari.js` mostar / mihrimah-edirnekapi | `1566-01-01|Mostar` · `1566-01-01|Edirnekapı` |
| `ekokuma_edebiyat.js` nefi-idami | `1635-01-01|Nef'î` |
| `ekokuma_edebiyat.js` nedim-olumu | ölü `1730-06-01` çıkarıldı · + `1730-10-28` (Nedîm maddesinin NİHAİ günü, bkz. ⑦). `1730-09-25` önceki turun Patrona bağıdır, duruyor |
| `ekokuma_savas.js` savas-ridaniye-1517 | `1517-01-22|Ridaniye` |
| `ekokuma_tartisma.js` rasathane · ingiltere-1580 | `1577-01-01|Rasathane` · `1580-01-01|İngiltere` |
| `ekokuma_kadin.js` hurrem · safiye · mihrimah | `1534-01-01|Hürrem` `1553-10-05|Mustafa` · `1603-01-01|Yeni Cami` · `1547-01-01|Mihrimah` `1566-01-01|Mihrimah` |
| `ekokuma_ekonomi.js` tağşiş · iltizam · kapitülasyon | `1585-01-01|tağşiş` + `1599-06-01|Karayazıcı` · `1695-01-01|Malikâne` · `1580-01-01|İngiltere` |

Her ayırt edici, o günün öteki maddelerinin `b` başlığına karşı sınandı. Hiçbiri ikizde tutmuyor, hepsi hedefinde tutuyor ("tutmayan bağ değeri: 0").

## ④ Bilerek BIRAKILAN 6 çakışma: ilgili ikiz, hüküm benim

| gün | kart | ikiz madde | gerekçe |
|---|---|---|---|
| 1738-08-01 | sebep-sonuc-belgrad-1739 | Özi ‖ Semendire | Kart iki cepheli 1736-39 savaşını anlatıyor, ikisi de o savaş |
| 1829-09-14 | antlasma-edirne-1829 · sebep-sonuc-edirne-1829 | Edirne ‖ Ahıska'nın terki | Hüküm kartı Ahıska'yı adıyla sayıyor, sebep-sonuç "Kafkas kaleleri" diyor |
| 1534-12-04 | fuzuli-bagdat-kasidesi | Bağdat'ın fethi ‖ Fuzûlî'nin kasidesi | Kaside o fethi kutluyor |
| 1730-09-25 | nedim-olumu | Patrona ‖ Sâdâbâd | Kartın kendi maddesi artık `1730-10-28`'de, ayrı bağla. Bu gün Patrona bağı. Ayırt edici burada işlemez: "Patrona Halil İsyanı" normalleşince Sâdâbâd başlığının ("…isyanında") alt dizgisi. Sâdâbâd Lâle Devri'nin simgesi, kart devrin sonunu anlatıyor |
| 1515-09-19 | savas-caldiran-1514 | Âmid ‖ Nusaybin-Derik-Silopi | Kart "Diyarbekir'den Musul'a Güneydoğu Anadolu" diyor |

⚠️ **Muhakeme sınırı:** 1553-10-05 Kara Ahmed Paşa'nın sadrazamlığı, Mustafa'nın idamının DOĞRUDAN sonucudur (madde metni öyle diyor). Önceki rapor bunu "zararsız ikiz" saymıştı. Üç kartın hiçbiri Kara Ahmed'i ya da azli anmadığı için ayırt edici koydum. Geri almak tek değer silmektir (`|Mustafa`).

## ⑤ Tarayıcıda doğrulandı (`arac/sunucu.py`, `?v=r7487`, 1349 madde)

`obGoster` ile madde açılıp `#ob-ekokuma-butonlar` okundu:
```
1566-01-01 Mostar      → 🔬 Teknik/Bilimsel · 28,59 metrelik tek kemer…          (YALNIZ Mostar kartı)
1566-01-01 Edirnekapı  → 🔬 Teknik/Bilimsel · Sinan'ın tek kubbeli… · 🪪 Kimdir? Mihrimah
1534-01-01 Matrakçı    → (buton yok)
1534-01-01 Hürrem      → 🎭 Magazin · ❓ Merak (2) · 🪪 Kimdir?
1480-08-11 Otranto     → ❓ Merak · Otranto seferi Fatih'ten sonra niçin sürdürülmedi?
1362-06-01 Yeniçeri    → 🔗 Sebep-Sonuç · Ocağın kuruluş günü belli değil…
window.MERAK_SH104 = 1 kayıt · _merakHavuz = function · EKOKUMA_DURUM.yuklendi = true
```

## ⑥ Doğrulayamadıklarım / açık kalanlar

- **Tarayıcı ölçümü iki son düzeltmeden ÖNCE alındı.** yavuz-baba `1512-06-10` ve nedim ölü değerinin silinmesi yalnız Node aletiyle ölçüldü. Konsolda `[ekOkuma] N/15` satırı okunamadı (sekmenin tamponu dolmuştu). `ekokuma_dalga2` 404'ünün sessiz geçtiği yükleyici tasarımından biliniyor, gözle görülmedi.
- **Kart ekranda gözle görülmedi.** Butonların DOM metni okundu, ekran görüntüsü alınmadı.
- **İki bağ, başka bir oturumun COMMIT'SİZ `olaylar` değişikliğine dayanıyor.** Nedîm `1730-09-25` ve Bayezid `1512-06-10`. O değişiklik geri alınırsa yavuz-baba kartı kendi maddesinden yine düşer.
- **`|` sözdizimini tanımayan başka aletler.** `denetim/ARAC-KITA21-EKOKUMA-DOGRULA-0913.js` ve `ARAC-KITA22-MAGAZIN-DOGRULA-0913.js` bağ değerini düz tarih sanıyorsa artık "madde yok" diyebilir. Bunları okumadım, koşmadım.
- Önceki raporun `ARAC-EKOKUMA-DAGITIM-0913.js` aleti eski kuralı taklit ediyor. Ayırt ediciyi bilmez, artık yanlış sayar. Yerine bu turun aleti kullanılmalı.
- **Kilitbahir çelişkisi sürüyor** (önceki ⑤1). Madde "İstanbul'dan önce" diyor, kart TDV'ye dayanarak "fetihten sonra, 1463-65" diyor. Bağ koordinatör isteğiyle eklendi, çelişki çözülmedi.
- `ekOkumaPenceresiAc` içindeki zincir bağlantısı hâlâ yalnız `window.EKOKUMA` arıyor. Kapsam dışı, dokunulmadı.
- ~~`maddeGorseliniGuncelle` düz `indexOf` kullanıyor~~ → koordinatör kapsam ekledi, bkz. ⑧.

## ⑦ Tarih düzeltmeleri — çelişki oturumunun NİHAİ günleri (koordinatör, 13 Eylül)

| madde | nihai gün | bağ verisinde |
|---|---|---|
| Nedîm'in ölümü | `1730-10-28` (tereke kaydı; TDV gün vermiyor) | nedim-olumu `olay` → `["1730-09-25","1730-10-28"]`. Ara değer olarak kullanılan `1730-06-01` silindi |
| II. Bayezid'in ölümü | `1512-06-10` | yavuz-baba-zehir-soylentisi `t` + `olay` `1512-05-26` → `1512-06-10` |
| Balkan Savaşı | `1912-10-08` (mükerrer `1912-10` birleşti) | kart ve görsel dosyalarının hiçbirinde `1912-10` değeri YOK. Değişiklik gerekmedi |

Çekirdekte `1730-10-28` ve `1512-06-10`'da birer madde var, paylaşılmıyor. Ayırt edici gerekmedi.
Tarandı: `1912-10` · `1512-05-26` · `1730-06-01` bütün `ekokuma*`, `merak*` ve `gorsel_madde.js` dosyalarında artık 0.
`gorsel_madde.js`'teki Lâle Devri kaydının `1730-09-25` değeri Patrona'ya bağlı, Nedîm'e değil. Dokunulmadı.

## ⑧ Madde görselleri — `maddeGorseliniGuncelle` (app.js:6745) ve `data/gorsel_madde.js`

**Kod:**
- ESKİ: `find()` + `indexOf(o.t)`. O güne düşen İLK kayıt dışındakiler sessizce gizleniyordu.
- YENİ: `filter()`. Eşleşen bütün kayıtlar veri sırasıyla çizilir. Aynı kayıt (id) ve aynı görsel dosyası (url) bir kez basılır.
- Bağ değeri kartlarla AYNI `_ekBagEslesir` yardımcısından geçer, ayrı kod yok.
- Lisans ve `gorsel_alt` şartları değişmedi.

**Veri (yalnız iki kayıt, yalnız `olay`/`bekleyen_olay`):**
```
1566-01-01-mostar-koprusu-1900                olay [] + bekleyen_olay ["1566-01-01"] → olay ["1566-01-01|Mostar"]
1566-01-01-mihrimah-sultan-camii-edirnekapi   olay [] + bekleyen_olay ["1566-01-01"] → olay ["1566-01-01|Edirnekapı"]
```
⚠️ Dosyanın 558-562. satırlarındaki yorum ("iki kayıt BİLEREK BAĞLANMADI") artık bayat. Talimat "yalnız alanlar" dediği için dokunulmadı.

**Doğrulama (node, çekirdek + bütün kronoloji* evreni):**
- `gorsel_madde.js` ayrışıyor, 20 kayıt. `bekleyen_olay` kalmadı, boş `olay[]` 2 → 0.
- `1566-01-01|Mostar` → yalnız "Mostar Köprüsü'nün tamamlanması".
- `1566-01-01|Edirnekapı` → yalnız "Edirnekapı (Mihrimah Sultan) Camii'nin tamamlanması".
- Naksa Dukalığı maddesi (`KRONOLOJI_NAKSA_DUKALIGI`, 1566-01-01) → 0 görsel.

| ölçü | ÖNCE (HEAD c4a9ab2 + eski kural) | SONRA |
|---|---|---|
| görselli çekirdek madde | 31 | **33** |
| çizilen görsel (çekirdek) | 64 | **73** |
| 1566-09-07 Zigetvar | 1 (Sokullu) | **7** (Sokullu + Kanunî albümünün 6'sı) |
| 1538-09 Preveze | 1 (Barbaros) | **2** (Barbaros + Preveze minyatürü) |
| 1566-01-01 Mostar / Edirnekapı / Naksa | 0 / 0 / 0 | **1 / 1 / 0** |
| eskide çizilip yenide çizilmeyen görsel | — | **0** |

**Tarayıcıda da doğrulandı** (`arac/sunucu.py`, r7487). `#ob-madde-gorsel img` sayıları tabloyla birebir: Zigetvar 7 · Preveze 2 · Mostar 1 · Edirnekapı 1 · İstanbul'un Fethi 1.

**Başka kayıtlarda çok-maddeli düz gün (RAPOR, dokunulmadı).** Çoğu yalnız kronoloji* kuyruğunda. `obGoster` çağrıları yalnız çekirdek `olaylar[]` ve dizin maddesi alıyor, bu yüzden panelde görünmezler (1453-05-29 ×8 · 1683-09-12 ×5 · 1588-01-01 ×5 · 1578-01-02 · 1451-02-18 · 1573-03-07).
Çekirdekte tek vaka: Lâle Devri görseli `1730-09-25`'te hem Patrona hem Sâdâbâd maddesinde çıkıyor. İkisi de ilgili.

## ⑨ Son ölçüm (bütün düzeltmeler + başka oturumun `ekokuma_dalga2.js`'i diske indikten sonra)

`ekokuma_dalga2` yükleyici listesine eklendiği için KOD DEĞİŞMEDEN yüklendi: havuz 78 → 90 kart.

```
kart → madde isabeti 289 · kartlı madde 224 · butonlu madde (ANTLASMALAR dahil) 249
çakışma satırı 6 (hepsi ilgili, ④) · tutmayan bağ değeri 1
```
Tutmayan değer: `kirim-eminek-kefe-1475 @ 1475-07-01`. `ekokuma_dalga2.js`'te, BENİM DOSYAM DEĞİL. O gün çekirdekte madde yok, dalga2 sahibine bildirilmeli.
