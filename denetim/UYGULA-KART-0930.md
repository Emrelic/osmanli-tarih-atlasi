# UYGULA-KART-0930 — savaş · kişi · ek okuma uygulaması (30 Eylül 2026)

Makine okunur liste: `denetim/UYGULA-KART-0930.json` (her maddede parti · madde · eski/yeni hüküm · delil · dosya · satır).

## ① Pay taraması — koordinatörün sayımıyla fark
Evren: `denetim/KAPAT-*-0930.json` içinde `hukum=sirada` **175** madde. Notunda savaş/kişi/ek okuma/sefer/ok geçen **44** aday çıktı.
- **29** madde bu oturumun dosyalarına düşüyor. Koordinatörün sayımı dosya adına göreydi (savaslar 9 · kisiler 3 · kurum2 2 · bag_oneri 2 · ok103 2 · NAPOLYON 3). Aradaki fark şu kalemlerden geliyor:
  - notunda dosya adı geçmeyen ek okuma kalemleri (Tashih · Kaynarca · tâbiler · idam kartı);
  - `seferler*` diye yazılmış ok kalemleri (Mogilev · Prut · Musul · Stavuçani · Duckworth);
  - kişi kartı genişletme (2 madde).
- **15** aday başka sahibin dosyasında (JSON `baskasinin`). YAMA-SEFER-NAPOLYON'un üç maddesi yerleşim `isg` kaydıdır, ok değildir; oklar zaten var. Bu yüzden onları UYGULA-YERLESIM'e bıraktım.
- Payımda `senin-kararin` / `kosu-bekliyor` / `onay-bekliyor` maddesi **0**. Atladığım madde yok.

## ② Sonuç — 29 madde
| hüküm | sayı | maddeler |
|---|---|---|
| cozuldu | 19 | 0068/14 · 18 · 20 · 0052/7 · 87 · 0054/7 · 13 · 0064/6 · 16 · 17 · 20 · 0066/10 · 0081/7 · 42 · 0082/65 · 66 · 99 · 0053/15 (madde tarafı UYGULA-OLAYLAR) |
| bayat | 1 | 0035/77: 1737 Özi oku 17 Eylül'den beri `seferler_p0064.js:55`te var |
| sirada (yarısı çözüldü) | 3 | 0064/15 (kalan app.js) · 0082/71 (kalan kronoloji başlığı) · 0054/11 (kalan Kazak kartı) |
| cozulemedi | 2 | 0082/31 (1788 Mogilev) · 0082/76 (1828 Prut). ESBE varış/geçiş noktası vermiyor; uydurulmadı |
| sirada (denenmedi) | 5 | 0052/33 (akademik sevk gerekiyor) · 0052/39 · 0054/6 · 0066/9 (yeni araştırma kartları) · 0053/14 + 0066/7 (ikiz: ~221 tek cümlelik kişi kaydı) |

## ③ Öne çıkan ölçümler
- **Ek okuma bağları:** her bağı `app.js`'in kendi `_ekBagEslesir`/`ekKartBagliMi` işlevleriyle node'da ölçtüm (evren: 1761 olay · 796 kart · 75 dosya). Hedef maddelerin hepsinde kart artık görünüyor.
- **Kopan bağlar:** UYGULA-OLAYLAR'ın gün düzeltmeleri 11 bağı koparmıştı (M-5617). 11'i de onarıldı, 2 bayat not güncellendi.
- **Venedik deniz kartı:** "1684-99'da büyük deniz savaşı YAŞANMADI" cümlesi yanlıştı. TDV `mezemorta-huseyin-pasa` 1695-98 arasında en az beş çatışma sayıyor. Cümle TDV `sakiz-adasi` ve `mezemorta-huseyin-pasa` ile düzeltildi.
- **Duckworth rotası:** `ARAC-OSMANLI-IC-0082-ROTA.py` koşturuldu. Rota karada 22,17 km'den 0,00 km'ye indi.
- **Tosun Paşa:** Burckhardt (1831) II. cildinin metnini archive.org'dan çekip kendim okudum; alıntıların hepsi tutuyor. Piyade kolu için yeni bir deniz oku açıldı. Deniz rotası karada 5,5 km kalıyor, o da yalnız iki liman ucunda (düz hat olsa 406 km'si karada).
- **Kişi kaydı:** `damad-ibrahim-pasa-1601` açıldı. `kisiBul` node'da sınandı: 1596 maddesi doğru kişiye gidiyor. 1600-10-20 Kanije maddesi de artık bu kayda gidiyor (yan kazanç).
- **Kaynak alıntıları:** TDV alıntılarından biri WebFetch özetinden çevrilmişti. Onu ham HTML'den birebir cümleyle değiştirdim (azak). Öteki alıntılar ya ham metinden ya da iki bağımsız okumadan geliyor.

## ④ Bulamadıklarım
- 1686 Anabolu Osmanlı komutanının adı: TDV `anabolu` ve `mora` maddelerinde geçmiyor.
- 1788 Rumyantsev ordusunun varış noktası: ESBE vermiyor.
- 1828 Prut geçiş yeri: ESBE vermiyor.
- Azak 1696 için RGAVMF ve EIU kaynakları: EIU sayfası boş döndü, wikisource ESBE "Азовские походы" Wikimedia Error verdi.
- `tosun-pasa` TDV slug'ı ölü (302, rapordan).

## ⑤ Yan bulgular — karar sizde
1. **105 kartın satır başlığı BOŞ basılıyor.** Ölçüm `_ekSatirBasligi` mantığıyla birebir yapıldı; evren 794 benzersiz kart. Bu kartlarda soru/baslik/ad alanı yok ve EKOBASLIK_ONERI'de satırları yok (antlaşma · teknik · bunv · seyahat…). Bu oturum yalnız dokunduğu 4 karta `baslik` yazdı. Kalıcı çare `app.js`'te `kisa`ya düşen bir yedek olur (js sahibinin işi); ya da 101 başlık tek tek yazılır.
2. **Paket tazeliği:** `savaslar.js`, `kisiler.js` ve `seferler_*.js` `data/paket_*.js` içinde paketleniyor. Yayından önce `py arac/paketle.py yenile` gerekli; aksi hâlde bu değişiklikler siteye inmez. Ek okuma dosyaları dinamik yükleniyor, onlar için paket gerekmez.
3. **`data/ekokuma.js`'e bir satır yazdım** (0052/H-0087 başlığı). Dosya `ekokuma_*` kalıbına tam uymuyor; sahibi başkaysa bildirin.
4. **Oturum başındaki git durumunda üç dosyada başkalarının commitlenmemiş değişikliği vardı:** `ekokuma_camitarz`, `ekokuma_dunya`, `ekokuma_ekonomi`. Commitlenecek diff'te yalnız benim değişikliklerim yok.
5. **Hint Okyanusu için iki kart var:** `merak.js`'teki `hint-okyanusu-rekabeti` (merak türü, 14 Eylül) aynı soruyu görüşler biçiminde cevaplıyor. Taşıdığım tartışma kartı TDV anlatısı; ikisi farklı türde, ikisi de iki maddede görünüyor.
6. **`olaylar_ek3.js` 1695-02-22 maddesi** Koyun Adaları'nı anıyor ama kaynağı `sakiz-adasi` gösteriyor; o bilgi TDV `mezemorta-huseyin-pasa`'da. UYGULA-OLAYLAR'a bildirildi (M-5621).

## ⑥ Değiştirdiğim dosyalar (17) — hepsi `node --check` ✓
```
data/ekokuma_kurum2.js      data/ekokuma_dunya.js       data/ekokuma_camitarz.js
data/ekokuma_ekonomi.js     data/ekokuma.js             data/ekokuma_celali.js
data/ekokuma_karadeniz.js   data/ekokuma_isyan1821.js   data/ekokuma_antlasma4.js
data/ekokuma_rusiran.js     data/ekokuma_kadin.js       data/ekokuma_mimari.js
data/kisiler.js             data/savaslar.js            data/seferler_p0064.js
data/seferler_p0071.js      data/seferler_ok103.js
+ bu oturumun kendi dosyaları: denetim/UYGULA-KART-0930.json · denetim/UYGULA-KART-0930.md
```
`denetle.py` koşturulmadı (şartname §4). `git` kullanılmadı.
