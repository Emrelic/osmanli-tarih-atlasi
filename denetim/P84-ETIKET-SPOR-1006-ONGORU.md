# P84-ETIKET-SPOR-1006 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Yazıldığı an: kod okundu (`js/suzgec.js` KONU_GRUPLARI + KONU_BASLIKLARI, `js/app.js`
EKOKUMA_TUR), veri tam taranmadı; yalnız Kırkpınar maddesi + kartı grep ile görüldü.

## Ön gözlem (öngörüyü şekillendiren)
- Kırkpınar 1357 maddesi (`olaylar_ek14.js` → `paket_03.js`) ZATEN `k:"spor"`,
  `etiket:["spor","konu-spor"]` taşıyor. ⇒ Emre'nin gördüğü "teknik/bilimsel" maddenin
  etiketi DEĞİL, ona bağlı EK OKUMA KARTININ türü: `EKOKUMA_TAMAMLA`
  `teknik-osmanli-spor-gelenekleri`, `tur:"teknik-bilimsel"` → akordeonda
  "🔬 TEKNİK BİLİMSEL" üst yazısı (`app.js` `_EK_UST_KISA`).
- `EKOKUMA_TUR` (app.js) içinde `spor` ya da `kultur-sanat` türü YOK. Döngü
  `Object.keys(EKOKUMA_TUR)` üzerinde döner ⇒ tanımsız türdeki kart SESSİZCE görünmez.

## Öngörü — SAYI + MEKANİZMA
1. **Kronoloji madde ekseni (spor):** anahtar kelimeye uyan ~10-15 madde; çoğu zaten
   `konu-spor` taşır (etiket_yama'da güreş/cirit/okçu/Kırkpınar deseni var), `konu-spor`
   EKSİK olan ~3-5 (desende olmayan kelimeler: atçılık, pehlivan, tomak, çevgen…).
   Mekanizma: etiketler bir regex desenle basıldı; desen dar.
2. **Kronoloji madde ekseni (kültür-sanat):** ~100-150 aday; `konu-sanat`/`konu-kultur`
   EKSİK olan ~20-40 (çoğu yalnız `konu-imar`/`konu-bilim`/`konu-din` taşıyan şair,
   musiki, hat, minyatür maddeleri). Mekanizma aynı: desen dar.
3. **Ek okuma kartı ekseni — ASIL H-0004 sınıfı:** spor konulu kart 2-4, HEPSİ
   `teknik-bilimsel`; kültür-sanat konulu kart `teknik-bilimsel` içinde ~10-20 (müzik,
   hat, minyatür, matbaa-değil). Mekanizma: 2 Eylül tür listesinde spor/kültür-sanat
   türü yoktu, yazarlar en yakın türe (teknik-bilimsel) koydu.
4. **Sessiz eleme (D225):** bugün `EKOKUMA_TUR`da tanımsız türde kart: 3-10
   (grep'te `idam`3 · `mimari`1 · `mesnevi`/`mersiye`/`kaside`/`diplomasi` 1'er gördüm;
   kısmı iç içe nesne olabilir). Yeni `spor` türü app.js'siz yazılırsa kart **0 buton**
   verir — kayıt sağlam, ekranda yok.
