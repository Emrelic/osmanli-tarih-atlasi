# KUNYE-IRAN-ANAKRONIZM-1005 — `iran` kimliğinin 1925 öncesi kullanımı

Görev: YILDIRIM BAYEZIT, 5 Ekim 2026 (send_message). Oturum: KUNYE-IRAN-ANAKRONIZM-1005.
Kapsam: YALNIZ ÖLÇÜM. `data/` · `arac/` okundu, yazılmadı. Düzeltme önerisi:
[`KUNYE-IRAN-ANAKRONIZM-1005.diff`](KUNYE-IRAN-ANAKRONIZM-1005.diff) (`git apply --check` TEMİZ).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (hiçbir veri okunmadan)

- **Kayıt sayısı:** `s:`/`isg:`/`v:` içinde `d:"iran"` geçen **30–80 dönem**, **20–50 yerleşim**.
  Niçin: görev 5 yerleşimi örnek veriyor; İran'ın iç şehirlerinin de (Tebriz, İsfahan,
  Meşhed…) `iran` ile 1925 öncesine uzandığını sandım.
- **Dağılım:** ② (selef künye) ezici çoğunluk (~%80+), ③ (1925 sonrası) ~%30-40 dönem, ① az.
- **Mekanizma tahmini:** `iran` toplu "doldurucu" olarak yazıldı (1281 = pencere başı).

### Öngörü tuttu mu
| | öngörü | ölçüm | hüküm |
|---|---|---|---|
| dönem sayısı | 30–80 | **5** | ❌ 6–16 kat fazla tahmin |
| yerleşim sayısı | 20–50 | **5** | ❌ |
| ② payı | ~%80+ | **5/5 = %100** | ✅ yönü tuttu |
| ③ payı | ~%30-40 | **0** | ❌ — atlas 1923'te bitiyor, 1925 sonrası dönem OLAMAZ; bunu düşünmeden yazdım |
| mekanizma | toplu doldurucu | **toplu süpürmenin ARTIĞI** | 🟡 yarı tuttu |

**Niçin bu kadar yanıldım (mekanizma):** `iran` bir zamanlar gerçekten yüzlerce dönem
taşıyordu (`renkler.py:278`: "1736→1923 TEK dönemde … 100 kayıt"; `olaylar_ek11.js:193`:
"`d:"iran"` taşıyan 130 dönem"). İki süpürme bunu temizledi: ① RENK/zend-kaçar bölmesi
(Ağustos 2026: afsar · zend · kacar) ② `YER_YAMA_HAYALET` (24 Ağustos, Değişmez 4 hayalet
önerisi, ilk kaydı Meşhed `iran` 1335→1381). **Bu 5 dönem o süpürmelerin ARTIĞIDIR,** yeni
bir sınıf değil. Toplu doldurucu tahmini bugün için değil geçmiş için doğruydu.

## 1. EVREN — LİSTE (sayı değil üyelik)

Ölçüm: `girdi.yukle()` (93 girdi dosyası) · `s` `d` `v` `isg` dört kategori taranıp `d=="iran"`
aranmıştır. `v:` ve `isg:` içinde **0** · `s:` içinde **5 dönem / 5 yerleşim**:

| # | yerleşim | dosya | dönem | önceki dönem | sonraki dönem |
|---|---|---|---|---|---|
| 1 | Tarki (Tarku) | `yerlesimler.js:635` | `1281-01-01 → 1501-07-01` | — | `safevi` 1501-07-01→ |
| 2 | Ağraham burnu | `yerlesimler.js:636` | `1281-01-01 → 1501-07-01` | — | `safevi` 1501-07-01→ |
| 3 | Derbend | `yerlesimler.js:670` | `1281-01-01 → 1509-01-01` | — | `safevi` 1509-01-01→ |
| 4 | Dihistan ovası (Meşhed-i Misriyân) | `yerlesimler.js:2143` | `1507-05-24 → 1510-12-02` | `timurlu` →1507-05-24 | `safevi` 1510-12-02→ |
| 5 | Kızılarvat | `yerlesimler_ortaasya2.js:162` | `1507-05-24 → 1510-12-02` | `timurlu` →1507-05-24 | `safevi` 1510-12-02→ |

Künye: `iran` `f:"1925-12-12"` `t:"2026-08-07"` (`devletler.js:179`) — künyenin kendi notu:
*"haritada hiç boyanmaz, yalnız dizin amaçlı"*; hanedan adları (Safevî/Afşar/Zend/Kaçar)
ayrı künyelerde (Emre, 7 Ağustos 2026). ⇒ 5 dönemin **5'i de** künyenin kendi beyanıyla çelişiyor.

### Girdi DIŞINDA `iran` geçen yerler (taranıp elendi)
| dosya | alan | hüküm |
|---|---|---|
| `devletler.js` (paket_05) | `bolge:"iran"` ×39 | coğrafya bölgesi, künye kimliği DEĞİL — anakronizm değil |
| `koridor_f5c9a5.js` (paket_27) | `kol:"iran"` ×6 | yol kolu adı (Bitlis-Van-Selmas), devlet DEĞİL |
| `kimlikler.js` | `harita:"iran"` (afsar, kacar) | dosya **EMEKLİ** (başlığı: "CANLI DEĞİL, index.html yüklemiyor") |
| `olaylar_ek11.js:193` | yorum satırı | veri değil |
| `yer_kron_dogu.js` ×26 · `yer_yama_kafkas_rusya.js` · `yer_yama_zend_kacar.js` | eski `d:"iran"` değerleri | YAMA/öneri dosyaları, motor okumuyor — ⚠️ biri yeniden uygulanırsa anakronizmi GERİ getirir |
| `devlet_harita_ust.js` · `ufuk_bantlari_ust.js` | `iran` dnm 1281→1501 | motor ÇIKTISI — Emre'nin 14. yy Dağıstan'da gördüğü "İRAN" etiketi bu; veri düzelip koşu inince kaybolur |
| `paket_13.js` | 5 dönemin paketlenmiş kopyası | `yerlesimler.js`in paketi — kaynak düzelince yeniden paketlenir |

**Kronoloji/olay katmanında `iran` kimliğinin 1925 öncesi kullanımı: 0** (ölçülen tek eşleşme yorum satırı).
⚠️ Ölçülemedi: 8 MB'tan büyük 6 üretilmiş dosya (`devletler_harita.js` 93 MB vb.) taranmadı — üretilmiş, kaynak değil.

## 2. 🔴 GÖREVİN MEKANİZMA İDDİASI ÇÜRÜDÜ — denetim bu 5'i GÖRÜYOR

Görev: *"denetim onu GÖRMÜYOR: 4c/4d künye penceresini aşıyor mu diye sorar."* Ölçüm:
`denetle.degismez4()` tek başına koşturuldu:
```
hayalet 5   ← BEKLENEN_HAYALET = 5 (denetle.py:2219, "1 EKIM 2026: 6 -> 5")
  Tarki (Tarku)   iran 1281-01-01 1501-07-01  "devlet 1925-12-12'te kuruldu, dönem 424.4 yıl ÖNCE bitiyor"
  Ağraham burnu   iran 1281-01-01 1501-07-01  (424.4 yıl)
  Derbend         iran 1281-01-01 1509-01-01  (416.9 yıl)
  Dihistan ovası  iran 1507-05-24 1510-12-02  (415.0 yıl)
  Kızılarvat      iran 1507-05-24 1510-12-02  (415.0 yıl)
4c 127 · 4d 324 · künyesiz 0 · 4d içinde iran: 0
```
⇒ **Değişmez 4'ün hayalet tavanının TAMAMI tam bu 5 kayıttır.** Dönem künyenin
TAMAMEN dışında olduğu için 4c/4d'ye değil ana hayalet dalına düşüyor ve orada görünüyor.
Kusur **görünmezlik değil, TAVANLA SUSTURULMUŞ BORÇ**: `BEKLENEN_HAYALET = 5` bu beşi
"bilinen" sayıyor, kapı ✓ basıyor. (`D204` "oraya hiç ait miydi" körlüğü gerçek, ama bu
vaka onun örneği değil — burada künye penceresi 415-424 yıl aşılıyor ve sayaç bunu sayıyor.)
📌 Ders adayı: *"Denetim görmüyor" demeden önce denetimi o kayıtla koştur — temiz kapı
çoğu zaman körlük değil, tavandır.*

## 3. SINIFLANDIRMA (`D205`) — ① 0 · ② 5 · ③ 0

① **künye ömrü yanlış → GENİŞLET: 0.** `iran` künyesini 1281'e genişletmek Emre'nin
7 Ağustos kararını (hanedanlar ayrı künye) bozar; Safevî/Afşar/Zend/Kaçar zaten ayrı
künyeler olarak VAR. Genişletme gerekçesi yok.
③ **gerçekten 1925 sonrası: 0.** Atlas 1923-10-29'da bittiği için yapısal olarak imkânsız.
② **yanlış devlete yazılmış → SELEF künye: 5.** Aday künyeler `devletler.js` taranarak
bulundu (tahmin edilen id değil; regex: ilhan|celay|timur|safev|şirvan|kumuk|şamhal|altın|
şeyb|özbek|karakoy|akkoy|kaçar|afşar …, 50 eşleşme), hepsinin `BOYALAR` girdisi ölçüldü.

| # | yerleşim | öneri | künye penceresi | boya | güven | dayanak |
|---|---|---|---|---|---|---|
| 4 | Dihistan ovası | `buhara` 1507-05-24→1510-12-02 | 1500→1920 ✓ | VAR | **GEREKÇELİ** | TDV ŞEYBÂNÎLER: "Şeybânî Han 905-913 (1500-1507) … Horasan'ın hemen hemen bütün şehirlerini ele geçirdi" · "916 (1510) … Şah İsmâil'le yaptığı savaşta yenilgiye uğrayıp hayatını kaybeden". `buhara` künyesi Şeybânî'yi kapsıyor ("dört ardışık hanedan (Şeybânî, …)"). Komşular AYNI pencerede `buhara`: Nesâ · Bocnûrd · Esferâyin (170-240 km). ⚠️ Bölge hükmü şehre taşındı → bayrak halkasına ALINMAZ |
| 5 | Kızılarvat | `buhara` (aynı) | ✓ | VAR | GEREKÇELİ | aynı |
| 3 | Derbend | `altinorda` 1281-01-01→**1382-01-01** + `sirvansah` 1382-01-01→1509-01-01 | 1242→1502 ✓ · 861→1538 ✓ | VAR · VAR | 1382→1509 **GEREKÇELİ** · 1281→1382 **ZAYIF** | TDV ŞİRVANŞAHLAR: "İkinci tabakanın (Derbendî Şirvanşahları) ilk hükümdarı olan Şeyh İbrâhim (1378-1418)" · "Derbendî Şirvanşahları döneminde (1382-1501)". TDV DERBEND (`derbend--dagistan`): "Şah İsmâil 1509'da şehri zaptedip" ⇒ 1509 ucu KAYNAKLI. 1281-1382 için TDV DERBEND: "İlhanlılar, Derbend Kalesi'ni ele geçirememekle birlikte …" · "Şehir İlhanlı-Altın Orda arasındaki mücadelelerde sürekli el değiştirdi" ⇒ **tek sahip kaynaktan ÇIKMIYOR.** |
| 1 | Tarki (Tarku) | `altinorda` 1281-01-01→1501-07-01 | 1242→1502 ✓ | VAR | **ZAYIF** | TDV DAĞISTAN: "Daha sonra sırasıyla İlhanlılar, Altın Orda Hanlığı, Timurlular, Şirvanşahlar ve Safevîler Dağıstan'a hâkim oldular" (TARİHSİZ sıra). İlhanlı Derbend'i bile alamadı ⇒ kuzeyindeki kıyıda İlhanlı yazmak daha zayıf. Komşu Terek deltası `altinorda` 1281→1502. 1501-07-01 ucu mevcut kayıttan DEVRALINDI, kaynaksız. |
| 2 | Ağraham burnu | `altinorda` (aynı) | ✓ | VAR | ZAYIF | aynı |

### Derbend 1281→1382 için iki seçenek (hüküm SENİN)
- **A (diff'teki) `altinorda`:** TDV "İlhanlılar kaleyi alamadı" diyor ⇒ İlhanlı yazmak kaynağa ters.
  Altın Orda'nın sahipliği de kaynakta kesin değil ("el değiştirdi"). Ben A'yı öneriyorum.
- **B komşu düzeni** (Kuba · Şâbüran · Şamahı · Kabala): `ilhanli` →1335-12-01 + `sirvansah`.
  Atlas içi tutarlı ama TDV DERBEND cümlesine ters ve "atlas referans değildir" (`§4`).

## 4. Simülasyon — düzeltme BELLEKTE uygulanıp ölçüldü (veri değişmedi)

```
Değişmez 4   hayalet 5 → 0 · 4c 127 → 127 · 4d 324 → 324 · künyesiz 0 → 0 · YENİ 4c/4d: ∅
Değişmez 2s  kırılma 1719 → 1719 · AÇIK 187 → 187 (tavan 189) · KAPSAM DIŞI 792 → 792
             YIL-TEMSİLÎ 164 → 165   ← + Derbend 1382-01-01 (yeni yabancı kırılma, gün yok)
kalan `d:"iran"` dönem: 0
```
Değişmez 1: sınırlar kaymıyor (Derbend bölmesi bitişik) ⇒ yeni boşluk YOK (ölçülmedi, yapısal).

## 5. BULAMADIKLARIM
- **Tarki/Ağraham burnu 1281-1501 için kaynaklı sahip: `bulunamadı`.** TDV slug'ları:
  `tarku` 302 · `tarki` 302 · `samhal` 302 (ölü; `SAFEVI-DOGU-0081` önbelleğinde `samhal.txt` 0 bayt).
  `kumuklar` 200 ama 14-15. yy siyasî sahipliği yok. TDV `dagistan` yalnız tarihsiz sıra veriyor.
- **Derbend 1281-1382 tek sahip: `bulunamadı`** (kaynak "el değiştirdi" diyor).
- **`kumuk-samhalligi` künyesini 1281'e genişletme dayanağı: `bulunamadı`.** Künye f:1578;
  14. yy Şamhallık için TDV metni çekilemedi (slug ölü).
- 8 MB üstü 6 üretilmiş dosya taranmadı (`ölçülemedi`, kaynak değil).

## 6. İSTEDİKLERİM / ÖNERİLER
1. **Diff'i uygula** (`git apply denetim/KUNYE-IRAN-ANAKRONIZM-1005.diff`; yalnız `data/yerlesimler.js` +
   `data/yerlesimler_ortaasya2.js`, 5 dönem → 6 dönem). Motor tuzuna dokunmuyor ⇒ VERİ koşusu (`§9.1` ①).
2. 🔴 **Uyguladıktan sonra `BEKLENEN_HAYALET = 5 → 0`** (`denetle.py:2219`). İndirilmezse tavan
   gevşek kalır ve **5 yeni hayalet sessizce girebilir** — bu vakanın asıl dersi buydu.
3. **Derbend 1382-01-01 kırılmasına kronoloji maddesi:** "Derbendî Şeyh İbrâhim Şirvanşah oldu"
   (TDV ŞİRVANŞAHLAR, yıl 1382, gün bilinmiyor ⇒ `1382-01-01`) — yoksa YIL-TEMSİLÎ borç +1 kalır.
4. **Ayrı borç (bu diff'te YOK, `D204` adayı):** Tarki ve Ağraham burnu **1501-07-01'den itibaren
   `safevi`** — oysa TDV'ye göre Safevîler Derbend'i ancak **1509**'da aldı ve Tarki Derbend'in
   KUZEYİNDE. Yani Safevî, geçidi almadan 8 yıl önce geçidin ötesinde boyanıyor. Ayrı bir
   ölçüm görevi olarak öneriyorum.
5. `yer_kron_dogu.js` · `yer_yama_kafkas_rusya.js` · `yer_yama_zend_kacar.js` eski `d:"iran"`
   değerlerini taşıyor — yeniden uygulanmamaları için başlıklarına "BAYAT" damgası önerilir.

## Araçlar (scratchpad, depoya girmedi)
`olc.py` evren · `tam.py` tam zaman çizgisi · `aday.py` künye taraması · `komsu.py` boya + komşu
· `krono.py` bütün `data/*.js` alan taraması · `sina.py` Değişmez 4 · `sina2.py` Değişmez 2s ·
`diff_uret.py` diff. TDV metni: `denetim/_govde/derbend--dagistan.txt` · `_govde/dagistan.txt` ·
`ONCE1281-ANADOLU-tdv-onbellek/sirvansahlar.txt` · canlı çekim `seybaniler` (200) · `kumuklar` (200).
