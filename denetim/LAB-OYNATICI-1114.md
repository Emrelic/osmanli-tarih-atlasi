# LAB — antlaşma oynatıcısı canlı doğrulama (14 Kasım 2026)

Ölçülen yer: yayın sitesi https://emrelic.github.io/osmanli-tarih-atlasi/ (origin/main d6fa0146c, `app.js?v=r252816258`). Makine LAB. Tarayıcı paneli GİZLİ olduğundan animasyon/zamanlayıcı ve harita boyaması ölçülemedi; ekran görüntüsü alınmadı. Aşağıdakiler yalnız DOM/veri okumasıdır.

## Ölçülen (✔)
| Antlaşma | Tarih | Düğme | Adım | Taraf seçici |
|---|---|---|---|---|
| Prut 1711 | 1711-07-21 | ✔ | 16 | Osmanlı nüshası/Rus nüshası (veride) |
| Pasarofça 1718 | 1718-07-21 | ✔ | 50 | ✔ Tüm taraflar/Habsburg/Venedik; Venedik → "Venedik giriş (1/27)" |
| Belgrad 1739 | 1739-09-18 | ✔ | 43 | Habsburg/Rusya (veride) |
| Küçük Kaynarca 1774 | 1774-07-21 | ✔ | 31 | taraf yok |
| Sevr 1920 | 1920-08-10 | ✔ | 178 | taraf yok |
| Lozan 1923 | 1923-07-24 | ✔ | 159 | taraf yok |
| Karlofça 1699 | 1699-01-26 | ✔ | 53 | ✔ Tüm/Habsburg/Venedik/Lehistan/Rusya |

Konsol: `read_console_messages` hata kaydı yok (No console logs).
Yan düğmeler her birinde var: ◀◀ Savaştan önce, ⚑ Savaş sonrası, ⌖ Farka odaklan, 🗺️ Haritada gör.

## KUSUR 1 — aynı antlaşma iki kez yükleniyor (ölçüldü)
`ANTLASMA_MADDELERI` 61 kayıt içinde 7 id ikişer kez: zistovi-1791, yas-1792, karlofca-1699, prut-1711, pasarofca-1718, belgrad-1739, kerden-1746. İki kopya `JSON.stringify` olarak birebir aynı (içerik farkı yok).
Neden: hem paket (`data/paket_39.js`, `data/paket_40.js`, içinde ilgili `antlasma_madde_*.js` birleşmiş) hem tek tek `<script src="data/antlasma_madde_*.js">` satırları index.html'de yüklü. Sonuç: yinelenen kayıt; oynatıcı ilkini bulduğu için görünür bozulma yok, ama kayıt sayısı şişiyor ve ileride iki kopya ayrışırsa hangisinin kazandığı belirsiz. Öneri: ya paketten ya tek satırlardan biri (paketle.py'nin antlaşma dosyalarını paketlemesi mi, index.html satırları mı fazla — KASA/UMIT karar versin).

## Ölçülemedi
- Adım adım oynatma: Pasarofça'da ▶ ile adım ilerlemesi gizli panelde yenilenmedi (başlık "1/27"de kaldı) — hata mı gecikme mi ayırt edilemedi.
- Pasarofça'da mod düğmeleri: yalnız `SONRA` göründü (Karlofça'da üç kip vardı). Pasarofça kaydında `onceki_t` yok; bu tasarım gereği olabilir — EMRELİC teyit etsin.
- Harita ÖNCE/SONRA geometri farkı, kamera, ✕ sonrası düğmenin geri gelmesi, 375 px: ölçülmedi.
- Bölüm (2): son iki günde main'e giren antlaşma adımlarından 5'er rastgele adımın ham kaynakla (Noradounghian/Martens/Dumont) karşılaştırması BAŞLATILMADI.
