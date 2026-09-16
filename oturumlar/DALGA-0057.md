# DALGA-0057 — paket 0057 (6 madde) · 16 Eylül 2026 gece

Kurallar: `oturumlar/DALGA-0052.md` §0 ve §1 (ek okuma biçimi: `data/ekokuma_dunya.js` kayıtlarına bak). Paket: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden/parti-emrelic-0057/PARTI.md`
- Ek okuma yazmadan önce bütün `data/ekokuma_*.js`de aynı konu var mı bak; varsa kendi kaydında ona atıf ver, mükerrer yazma.
- 🔴 Her kayıtta `baslik:` ZORUNLU (konu adıyla: "Prens Eugen kimdir" değil "Prens Eugen (Savoyalı Eugen)"), `olay:["YYYY-MM-DD|<madde başlığından ayırt edici kelime>"]` ile doğru kronoloji maddesine bağlanır.
- Yeni dosyalar `js/app.js` `_EKOKUMA_DOSYA_ADLARI`ne koordinatörce bağlandı; dosyayı yazman yeter.
- Tahtaya teslimde tek mesaj, sayıyla. Commit: adla add + adla commit. `pull --rebase` YOK.

| Oturum | Madde | İş | Dosya |
|---|---|---|---|
| D3-AVRUPA-ORTA | 1 · 2 | İstendil (Tinos) niçin 1715'e kadar Venedik'te kaldı · Venedik: denizde güçlü, karada zayıf mı; 1699'da aldığı Mora'yı 1715'te niçin hızla kaybetti | `data/ekokuma_venedik.js` (`window.EKOKUMA_VENEDIK`) |
| D5-AMERIKA | 3 · 4 | Prens Eugen'in Avusturya/Batı hafızasındaki yeri (Avusturya kaynakları ne anlatır; `ekokuma_dunya.js` `dunya3-prens-eugen-kimdir` kaydına atıf) · Osmanlı ordusunun Avusturya karşısında geri kaldığı temel askerî noktalar (1683-1718) | `data/ekokuma_avusturya.js` (`window.EKOKUMA_AVUSTURYA`) |
| D2-KOMSU | 5 | Kesik çizgi = hukukî sınır katmanı (Karlofça 1699 Sava hattı). Altındaki dolgu yanlış: `Bosna Brod'u (Bosanski Brod)` Sava'nın GÜNEY kıyısında, kayıt onu 1699-1918 `avusturya` gösteriyor (muhtemelen Slavonski Brod ile karışmış). Kaynakla doğrula; Sava güney kıyısındaki öteki kayıtları da tara (Kobaş, Berbir/Gradiška, Şamac, Dubica, Kostajnica, Novi). Kaynaklı yama yaz, G3 teslimi sonrası | `denetim/YAMA-0057-SAVA.json` (UYGULA/1.MURAT uygular) |
| D-GEOARAC | 6 | BÜTÜN ek okumaların başlık + ilgililik denetimi: 355 kaydın 249'unda `baslik` YOK (arayüz tür etiketini, ör. "Kimdir?", gösteriyor). Her kayıt için içerikten doğru başlık öner; bağlı olduğu `olay` maddesiyle ilgili mi (evet/hayır/kısmen + gerekçe), başlık-içerik uyumlu mu. Önce Belgrad 1717 / Prens Eugen çevresi | `denetim/ARAC-EKOKUMA-BASLIK-0916.py` · `denetim/YAMA-0057-BASLIK.json` (`{id: {baslik, olay_uygun, not}}`; 1.MURAT uygular) |
