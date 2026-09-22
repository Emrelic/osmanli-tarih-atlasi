# SEFER-OK-0075 — harekât okları (paket 0075 · H-0001 · H-0012 · H-0023 · H-0033 · H-0037)

Oturum: SEFER-OK-0075 (Sonnet 5) · 21 Eylül 2026 · koordinatör 1.MURAT
Şartname: `oturumlar/PARTI-0075.md` ⑥ · Emre'nin metinleri: `ClaudEmre/kutu/giden/parti-emrelic-0075/PARTI.md`
🔴 **`data/` ve `arac/` DONMUŞ olduğu için bu oturum oraya YAZMADI ve COMMİTLEMEDİ.**
`js/` değişiklikleri çalışma ağacında; veri yamaları `denetim/` altında hazır (§4).

## 1. ÖLÇÜLEN (sayıyla)

| Ölçüm | Değer |
|---|---|
| Yüklenen sefer kaydı (tarayıcıda, 7 ad alanı) | **117** (`seferler_p0074.js` hariç — bkz. §5.1) |
| Türe göre | sefer 67 · kuşatma 16 · **deniz 13** · **çekilme 9** · isyan 6 · akın 3 · seyahat 2 · teslim 1 · **tahliye 0** |
| `HAREKET.tahliye` | ZATEN tanımlıydı (glif ⇥) ama **0 kayıt** ve deseni `çekilme` ile AYNIYDI (`[5,4]`) — harita ikisini ayıramazdı |
| Üç vaka için mevcut kayıt | **yok** (Mora 1828 · Silistre 1836 · Suriye/Çukurova 1841) |
| İbrâhim Paşa seferi | iki tek-parça ok: `Suriye harekâtı (1831-32)` 7 nokta, `Anadolu ilerleyişi (1832-33)` 5 nokta; **kademe alanı yok**, ok ilk günden bütün güzergâhı çiziyor (görsel H-0012: Akkâ düştü maddesi Halep'e uzanan tam ok taşıyor) |
| Deniz oklarında KARA (ne_10m_land, liman muafiyeti + kasten kara bacakları hariç) | **13 deniz okunun 8'i karayı kesiyor: 405 km** (Girit 94 · Müttefik 1840 72 · Kıbrıs 68 · Savoy 47 · Rus Çeşme takibi 47 · Mora çıkarması 38 · Rus Baltık 22 · Preveze 16); türü `deniz` OLMAYAN ama denizden giden iki ok daha: `Osmanlı donanmasının İskenderiye'ye teslimi` (61 km — Emre'nin görseli) ve `Mora'dan Çeşme'ye çekilişi` (46 km); yeni Mora→Girit oku düz çizilseydi 32 km. **16 kayıtta toplam 546 km** |
| **Kavis, sorunu ağırlaştırıyor** | `seferKavisliYol` (>200 km bacaklarda %6 sapma) kara bilmiyor: Girit 104→122 km, Müttefik 119→145 km, Savoy 96→101 km |
| Kara kaynağı | `veri-kaynak/ne_10m_land.geojson` — `uret_petek.py:698`in okuduğu gerçek kara. `motor_kara.geojson` (motor ÇIKTISI) KULLANILMADI |

## 2. YAPILAN — `js/` (çalışma ağacında, COMMİTSİZ)

1. **Tahliye ≠ çekilme** — `js/app.js:4641`: `HAREKET.tahliye` deseni `[6,2.5,0.8,2.5]` (uzun çizgi + nokta); `çekilme` `[5,4]` kaldı.
2. **`seferHat(m, gün)`** — `js/app.js:4999` (+ `seferKademeIdx` `:4990`): durağan çizim ve animasyonun TEK hat kaynağı. Kademeli kayıtta `yol[0..i]`, deniz/`rota`lı kayıtta eğrilmez, ötekilerde eskisi gibi kavisli. **Gerileme sınandı: 103 sade kayıtta çıktı eskisiyle BİREBİR aynı.**
3. **Kademe** — veri sözleşmesi `kademe:[["1831-11-27",2],…]` ("şu günden itibaren ok `yol[i]`ye uzanır"); `js/app.js:4864`. Ok başı/ad işareti kademeyle ilerler; kademeli okta "çapadan önceki olay" kırpması kapalı (`:5280`). İndeks MAX'tır: kronoloji sırası ile güzergâh sırası ayrışırsa ok geri kısalmaz.
4. **Animasyon fazı** (`js/sefer_ok.js:189-`) YALNIZ yeni kademeyi ilerletir (`p0` = önceki kademe oranı); madde okta ilerleme değilse `false` döner (sahne "vurus"tan başlar).
5. **`rota`** — `js/app.js:4881`: `yol` = kaynaklı istasyonlar (yorumlar, `kesinlik` onda kalır), `rota` = kıyıyı dolanan TÜRETİLMİŞ çizim hattı. Deniz oku ve `rota`lı kayıt artık eğrilmez.

## 3. DENİZ OKU KARADAN GEÇMİYOR — yöntem ve sonuç (H-0033)

Aletler: `ARAC-SEFER-OK-DENIZ-ROTA-0075.py` (üretir) · `ARAC-SEFER-OK-SINAV-0075.py` (sınar) · `ARAC-SEFER-OK-DUMP-0075.js` (girdi) · `ARAC-SEFER-OK-DENIZ-OLC-0075.py` (ilk ölçüm).
Yöntem: bacak bacak; düz bacak kara kesmiyorsa DOKUNULMAZ; kesiyorsa ızgara+A*+ip germe (3 aşama: 0.03° → 0.01° → 0.004°; Çanakkale ~1 km boğazı 0.01°'de geçildi). Ucu kıyıdan >0.15° içeride bacak (Larnaka→Lefkoşa, Mora çıkarması'nın Tripoliçe bacağı) KASTEN KARA sayılır, dokunulmaz.

| | Yama ÖNCESİ | Yama SONRASI |
|---|---|---|
| Kara üstü km (16 kayıt) | **546** | **3** (Savoy 1.5 · Preveze 0.8 · Girit 0.8) |
| Başarısız bacak | — | **0** |
| Sınav (12 rotalı kayıt) | — | **12 geçti · 0 ihlal**, istasyon uçları korunmuş |
| KONTROL YÖNÜ (yamasız canlı veri) | sınav 8/13 deniz okunda "kara KESİYOR" yakalıyor | — |

Yama aracı kopya üstünde denendi (12 kayıt yamalandı, `savaslar.js` CRLF korundu, `data/` dokunulmadı).

## 4. KİLİT KALKINCA UYGULANACAKLAR (sırayla)

1. `denetim/TASLAK-seferler_sefer_ok_0075.js` → `data/seferler_sefer_ok_0075.js` (`window.SEFERLER_SEFER_OK_0075`, 3 tahliye oku) + `index.html`e `<script>` satırı (js/app.js'ten ÖNCE).
2. `py denetim/ARAC-SEFER-OK-ROTA-YAMA-0075.py denetim/SEFER-OK-DENIZ-ROTA-0075.json --yaz` (12 kayda `rota:` ekler; `yol`a dokunmaz).
3. Kademe yamaları (`data/savaslar.js`, tarayıcıda sınandı — `denetim/ARAC-SEFER-OK-SINAV-TARAYICI-0075.js`):
   - `Suriye harekâtı (1831-32)` → `kademe:[["1831-10-31",1],["1831-11-27",2],["1832-06-15",3],["1832-06-25",5],["1832-07-29",6]]`
   - `Anadolu ilerleyişi (1832-33)` → `f:"1832-07-29"` (şimdi 1832-08-01; kronoloji "Belen Geçidi bozgunu — Çukurova açıldı" maddesinin günü) ve `kademe:[["1832-07-29",1],["1832-11-21",3],["1833-02-02",4]]`
4. `py denetim/ARAC-SEFER-OK-SINAV-0075.py <node denetim/ARAC-SEFER-OK-DUMP-0075.js ile dökülen json>` → 0 ihlal beklenir.

Tarayıcı sonucu (yamalı test sitesi, gerçek `js/` + `data/`, yalnız ek betik ayrı): okun ucu **1832-05-27 Akkâ (35.08,32.93) · 06-16 Şam (36.29,33.51) · 06-26 Halep (37.16,36.20) · 07-09 hâlâ Halep (geri kısalmadı) · 07-29 Belen; Anadolu: Adana → 11-22 Konya → 1833-02-02 Kütahya.** Faz: Akkâ kuşatması/Şam/Halep/Belen/Konya/Kütahya/Mora/Silistre `true`; Akkâ düştü ve Humus `false` (ilerleme yok — tasarım gereği).

## 5. BULDUKLARIM / KARAR BEKLEYENLER

1. 🔴 **`data/seferler_p0074.js` `index.html`e BAĞLI DEĞİL** (7 sefer dosyasından yalnız o) — Silistre→Edirne 1829 oku canlı değil. Bağlama koordinatörün (kendi başlığında da yazıyor).
2. 🔴 **Silistre 1836 okunun varış yeri kaynakta YOK** (TDV yalnız yıl verir). P0074 buna benzer durumda (Anapa) ok'u BOŞ bıraktı. Ben Emre "tahliye oku ile temsil edelim" dediği için Tuna'nın karşı yakasına ~20 km ŞEMATİK yön oku çizdim; `kesinlik` alanı bunu açıkça yazıyor. **Kabul etmezseniz o kaydı silmek yeter**, öteki ikisi bağımsız.
3. **Mora 1828 varış yeri (Girit) Emre'nindir**, TDV limanı da varışı da söylemiyor (bulunamadı); çıkış limanı Modon atlasın kendi kaydından (0073 hükmü: ok gösterimdir).
4. **1841 oku** işgal güzergâhının TERSİ; TDV yalnız "geri çekmek üzere emirler verdi" (27 Kasım 1840). Madde günü yalnız AY (Şubat 1841). `kesinlik`te yazılı.
5. ⚠️ **`Mısır ordusu Suriye ve Çukurova'yı boşalttı` maddesinin `yer_id`si YOK** (`olaylar_ek4.js:276`, `kronoloji_misir.js:215` `yer_id:""`) → `okSec` yeri çözemiyor, o madde için ok ANİMASYONU tetiklenmez (durağan ok görünür). Bu, ⑦ KRONO-YER-0075'in kapsamı (noktasız madde).
6. ⚠️ **Kronoloji sırası ≠ güzergâh sırası:** "Halep ele geçirildi" 1832-06-25, "Humus Muharebesi" 1832-07-08, ama güzergâh Şam→Humus→Halep. Ok Halep'e 06-25'te varıp Humus'tan geçmiş görünüyor. Kronolojideki Halep gününün kaynağı (`gun:"Haziran 1832"`, ay hassasiyeti) TDV ile sınanmadı — ölçülmedi, hüküm vermiyorum.
7. ⚠️ **`js/app.js`'te BAŞKA OTURUMUN commitsiz düzenlemeleri var** (DALGA-0074/H-0012 ikinci turu: `isyanLejanti`, `disEsikBilgiYaz`, `katmanSeciciKur`). Benimkiler ayrı bloklar; commit ederken hunk ayrımı gerekir (pathspec dosya düzeyinde ikisini birlikte alır).
8. Ok rengi: `Suriye harekâtı` kayıtlarında `devlet:` yok → Osmanlı varsayımıyla koyu kırmızı çiziliyor (Mısır oku). H-0010 kuralı gereği `devlet:"misir-kavalali"` yazılması önerilir; **uygulamadım** (H-0029'un renk işiyle çakışır, 1.MURAT'ta).

## 6. SINANMADI
Piksel düzeyinde görsel doğrulama (Browser panosunda ekran görüntüsü 5 sn'de zaman aşımına uğradı, pencere arkada kalmış olabilir): çizilen GeoJSON'un içeriği, katman durumu ve faz dönüşleri okundu; ekranda nasıl göründüğü (okun kalınlığı/deseni, ok başı) GÖRÜLMEDİ.
