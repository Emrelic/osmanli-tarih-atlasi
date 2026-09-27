# SEFER-OK-0077 — harekât okları (PAKET-0077 · H-0016 · H-0018 · H-0019 · H-0044 · H-0047)

Oturum: SEFER-OK-0077 (Opus 5.5) · 27 Eylül 2026 · koordinatör YILDIRIM BAYEZIT
Şartname: `oturumlar/SEFER-OK-0077.md` · Emre'nin metinleri: `C:/claudemre/kutu/giden/parti-emrelic-0077/PARTI.md`
Dosyalar: `data/seferler_p0077.js` (`window.SEFERLER_P0077`, YENİ, 10 kayıt) · `index.html` (+1 `<script>` satırı, `seferler_p0074`ün altı)

## 0. Hükümler

| Madde | Hüküm | Özet |
|---|---|---|
| H-0016 Karadeniz Baskını | **cozuldu** (ok) · 💥 **sirada** (çizim ARAYUZ-0077'de) | 4 kol = 4 deniz oku + 4 `vurus` noktası (Sivastopol · Odesa · Novorossiysk · Kefe) |
| H-0018 Sarıkamış | **cozuldu** | kuşatma kolu (İd–Oltu–Bardız–Sarıkamış, kademeli) + Erzurum'a ricat |
| H-0019 Birinci Kanal | **cozuldu** | Birüssebi → kanal (Timsah–Acı göller arası) + çekiliş |
| H-0044 Kafkasya 1918 | **cozuldu** | Erzincan–Erzurum–Kars (kademeli) + Gence–Göyçay–Ağsu–Şamahı–Bakü (kademeli) |
| H-0047 Mondros | **cozulemedi** (oklar) + **kapsam-disi** (sınır) — gerekçe §3 | |

"Cozuldu" = veri yazıldı ve tarayıcıda yüklendiği/çizildiği ölçüldü (§2). Yayına inmesi koordinatörün commit/push'una bağlı.

## 1. Kaynaklar — ne tuttu, ne tutmadı

| Kaynak | Durum | Verdiği |
|---|---|---|
| TDV `sarikamis-harekati` | 200, gövde okundu | kolordu istikametleri, 22 Ara/25 Ara/26 Ara/28 Ara/4 Oca günleri |
| TDV `birinci-dunya-savasi` | 200 | Karadeniz: 27 Ekim açılış, Sivastopol+Novorossiysk · Kanal: 14 Oca Bi'rüssebi, 3 Şub geçiş, 15 Şub dönüş |
| TDV `kars` · `erzurum` · `erzincan` · `azerbaycan` | 200 | 1918 günleri: 26 Şub · 12 Mar · 23 Nis · Bakü 15 Eyl |
| TDV `kanal-harekati` · `kafkas-islam-ordusu` · `nuri-pasa` · `sarikamis` · `suveys-kanali` · `odesa` · `sivastopol` · `novorossiysk` · `musul` | **302 ÖLÜ** | — |
| TDV arama sayfası | içerik JS ile geliyor — `urllib` ile **slug listesi alınamadı** (tuzak ⑦: çıkarıcının okuyamaması) | — |
| Tuna, OTAM 36 (2014) s. 201-228 | PDF okundu | Karadeniz: gemi-liman eşleşmesi, saatler, Odesa ve Kefe (TDV bunları VERMİYOR) |
| Özgan, İnönü Üni. USBD 5/2 (2016) | PDF okundu | Kanal geçiş kesimi: Timsah ile Acı göller arası |
| Türkmen, TDA 235 (2018) s. 23-48 | PDF okundu | Gence → Göyçay (17-30 Haz) → Aksu → Şamahı (21 Tem) → Bakü |

Koordinat: atlas noktası varsa o (9 yer); yoksa Nominatim (Narman, Oltu, Bardız=Gaziler/Şenkaya, Göyçay, Ağsu, Novorossiysk, Sivastopol, Birüssebi). Deniz uçları ve kanal noktası ŞEMATİK — her kaydın `kesinlik` alanında yazılı.

## 2. Ölçüm

- **Şema sınavı** (`node` ile yüklenip): 10 kayıt · hepsinde `yol` ≥ 2 · `f ≤ t` · her `kademe` günü `[f,t]` içinde ve indeksi geçerli · her `vurus` günü `[f,t]` içinde ve noktası yolun bir istasyonunda (<1 km). **0 ihlal.**
- **Deniz okları karada mı** (ne_10m_land): düz `yol` ile 4 kaydın 3'ü karayı kesiyordu (Novorossiysk 20 km, Kefe 16 km, Odesa liman yaklaşımı). `denetim/ARAC-SEFER-OK-DENIZ-ROTA-0075.py` ile `rota` türetildi → **3 kayıtta 0 km** (liman muafiyeti 0.15°, 0075'in sözleşmesi). Yavuz'un bacakları zaten temiz; `rota` yazılmadı.
- **Tarayıcı** (`py arac/sunucu.py`, gerçek `index.html`): `window.SEFERLER_P0077` 10 kayıt · `seferKayitlariniTopla()` 10'unu da aldı (kademe 2/1/2 kayıtta, `rota` 3, `vurus` 4 kayıtta alana geçiyor) · `seferGuncelle` çizgi özelliği: 1914-10-29'da 8, 1914-12-27'de 2, 1915-01-20'de 3, 1918-03-20'de 2, 1918-09-15'te 2 · 1914-10-29 z5 Karadeniz karesinde `queryRenderedFeatures` **40 özellik** (`sefer-cizgi-deniz`, `sefer-kenar-deniz`, `sefer-ucu`, `sefer-kaynak`) — ok ekranda.
- **Mükerrer kuralı** (app.js `_mukerrerMi`: iki uç 25 km içinde): üç Karadeniz kaydı aynı Boğaz noktasından çıkıyor ama varışları yüzlerce km ayrı ⇒ teke indirilmez (ölçüldü: 4 ok da çiziliyor).
- **SINANMADI:** 💥 işareti — `vurus` çizimi ARAYUZ-0077'nin işi (tahta M-5210 → M-5212, "A kabul"). Bu oturumun açıldığı anda app.js'te `vurus` okuyan satır yoktu.

## 3. H-0047 — neden ok yazılmadı

Emre iki şey istiyor: ① Mondros anındaki Osmanlı sınırı ② sonra İtilaf ilerleyişi.

① **kapsam-disi (bu kol için):** o gün haritanın kendisi — `yerlesimler.js`/motor, Oturum 0'ın dosyaları. Ok verisi sınır çizmez.

② **cozulemedi:** İtilaf işgallerinin VARIŞ yeri ve günü kaynakta var, ÇIKIŞ yeri yok:

| Yer | Kaynak (TDV) | Atlasta `isg:` |
|---|---|---|
| İskenderun | 9 Kas 1918 İngiliz; 10 Kas Fransız birliği *Coutelas* gemisinden çıktı | **YOK** |
| Antep | 17 Ara 1918 İngiliz (`gaziantep`) | ✓ 1918-12-17 ingiltere |
| Adana | 24 Ara 1918 Fransız (`adana`) | ✓ 1918-12-24 fransa |
| Batum | 24 Ara 1918 İngiliz (`batum`) | **YOK** |
| Maraş | 22 Şub 1919 İngiliz (`kahramanmaras`) | ✓ |
| Urfa | Mart 1919 İngiliz (`sanliurfa`) | ✓ (1919-01-01 — ⚠️ TDV "Mart 1919" diyor; ay sapması) |
| Musul | TDV `mondros-mutarekesi`: 7. maddeye dayanılarak işgal, **gün yok**; `musul` slug 302 | **YOK** |

İngilizlerin Antep/Maraş/Urfa'ya Halep'ten geldiği çıkarımı makul ama kaynakta CÜMLE YOK; ok uydurulmadı (0074'ün Anapa hükmüyle aynı). İşgaller haritada zaten tarama (`isg:`) olarak görünüyor — Emre'nin "ilerlemeyi görelim"inin haritadaki karşılığı o taramadır.

## 4. İstediğim / öneri

1. **ARAYUZ-0077:** `vurus` çizimi indiğinde canlıda sınanması (kendisi söz verdi). `vurus` alanı `seferKayitlariniTopla` çıktısına geçiyor — ölçüldü.
2. **Koordinatör (yerlesimler.js sahibi):** İskenderun 1918-11-09 ingiltere ve Batum 1918-12-24 ingiltere `isg:` pencereleri eksik (TDV `iskenderun`, `batum`); Urfa'nın 1919-01-01'i TDV'de "Mart 1919". Uygulamadım — dosya benim değil.
3. **H-0047 okları istenirse:** çıkış noktasını veren bir kaynak (ATASE / Mondros sonrası işgal makalesi) okunmalı — ayrı sevk.
4. Yazılmayan oklar (kaynakta istasyon yok): Sarıkamış'ta 9. Kolordu'nun kendi çıkışı ve 11. Kolordu cephe taarruzu · Kafkas İslâm Ordusu'nun demiryolu (Kürdemir) ve Salyan kolları · 1918 Batum ve Trabzon.
