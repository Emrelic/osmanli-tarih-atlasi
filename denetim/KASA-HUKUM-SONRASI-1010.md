# KASA-HUKUM-SONRASI-1010 — koordinatör hükmünün istediği üç küçük ölçüm (Oman · Kostajnica · Surgut)

Görev: YILDIRIM BAYEZIT (GOVDE-TANIK kararı ③ ⑤ ⑥) · Araştırmacı: KASA · `data/` DONUK · salt okuma · main d50ddbedd.
Usul: üçü de tek nokta ya da önceki okumanın yeniden değerlendirmesi ⇒ ayrı öngörü commit'i yok (koordinatörün
rider usulü), beyanlı.

## ⑤ OMAN TEK KAYNAK (hüküm: aynı yazarın aynı eserinin ciltleri BİR kaynak; şart: iki uç şehir adlı ve tarihli)
Kaynak: okuma_G1 (GOVDE-TANIK §1.1), Oman, *A History of the Peninsular War* (Oxford 1902-30; I-IV Gutenberg,
V-VII archive.org). ⚠️ **Sayfa numarası ÖLÇÜLMEDİ** — Gutenberg metni sayfasız, okuyucu cildi verdi. `kaynak:`a cilt
yazılır; sayfa FAZ 2'de arşiv tarayıcısından eklenmeli (şartın ikinci yarısı bu yüzden YARIM).
| şehir | baş (şehir adlı, tarihli) | son / süre tanığı (şehir adlı, tarihli) | hüküm |
|---|---|---|---|
| **Oviedo** | Oman III: *"marched--for the fourth time in three months!--on Oviedo with his whole division; the Spaniards retired"* [29 Mart 1810] | Oman IV: *"On the 14th, therefore, Bonnet left Oviedo"* [14 Haziran 1811] | **YANLIŞ** · Fransa 1810-03-29 → 1811-06-14 (~14,5 ay) |
| **Córdoba** | Oman III: *"he entered Cordova, which opened its gates without resistance, on the 24th"* [24 Ocak 1810] | Oman IV: *"the garrisons of Jaen and Cordova"* [1811] · Oman V: *"he reached Cordova on the fourth day (August 30)"* [1812, Fransız çekilişi] | **YANLIŞ** · Fransa 1810-01-24 → 1812-08/09 |
| **Jaén** | Oman III: *"Sebastiani, arriving in front of Jaen … He attacked at once, and routed these dispirited troops"* [23 Ocak 1810] | Oman V: *"the fourth being left at Jaen"* [Nisan 1812] | **YANLIŞ** · Fransa 1810-01 → ≥ 1812-04 |
| Girona 1809-14 | Oman V: *"the Principality was declared to be united to the French empire … the Ter [capital Gerona]"* [1812] | Oman VII: *"Gerona, Puigcerda, Rosas, and a dozen smaller posts were evacuated"* [Mart 1814] | **YANLIŞ** (zaten 1694-97 ile YANLIŞ'tı; şimdi 1812-14 ilhakı Oman'ın içinde de kapanıyor. 1809 teslimi EB1911'den, AYRI kaynak ⇒ başa birleştirilmedi) |
| Toledo | EB1911: *"being several times occupied by the French in 1808-1812"* | — | ÖLÇÜLEMEDİ (kesintili; tek bir ≥ 1 yıllık aralık yok; Oman'da şehir adlı uç okunmadı) |
| León | Oman V: *"the Swiss battalions long garrisoning the city of Leon"* | süre yok | ÖLÇÜLEMEDİ |
⇒ **+3 YANLIŞ** (Oviedo, Córdoba, Jaén) + Girona'nın 1812-14'ü. Córdoba ve Jaén için Oman III'teki Joseph bildirisi
(*"Jaen, Cordova, Seville have flung open their gates.... The King of Spain desires…"*) **Joseph krallığına eğilimli**
— ilhak cümlesi yok ⇒ koordinatörün sınıflamasıyla `d:ispanya` + `v:fransa` (Madrid/Sevilla ile aynı sınıf). Oviedo:
ayrım ölçülemedi ⇒ `v:fransa` + `ic_not`.
**GOVDE-TANIK G oranı güncellenir:** 16 / 24 = **%67** (ZAYIF TEMİZ'e sayılarak) · sınır çıkınca 15/23 = %65.

## Kostajnica — `ilirya` künyesi VAR MI (§3.5)
- `devletler.js` ve `renkler.py`'de `ilirya` / `illyr` kimlikli **künye YOK** (grep 0).
- AMA atlasın KENDİ kronolojisi İlirya Eyaletleri'ni Fransa'nın toprak kazancı olarak modelliyor:
  `kronoloji_cok_fransa.js:34` — *"İlirya Eyaletleri'nin kuruluşu — Fransa Adriyatik'in kuzey kıyısını aldı"*,
  `devlet:"fransa-cumhuriyet"`, `yer_id:"Karlovac"`, `t:1809-10-14` (Schönbrunn). Künye `fransa-cumhuriyet` ("1792
  Sonrası — Cumhuriyet/İmparatorluk/Restorasyon") VAR.
- ⇒ Hükmün literal hâli ("yoksa `__BOSLUK__` (N)") ile atlasın kendi modeli ayrışıyor: İlirya Eyaletleri ayrı bir
  devlet değil, Fransız İmparatorluğu'nun eyaletleriydi. **Seçenek A:** `d:fransa-cumhuriyet` (kronolojiyle tutarlı;
  ayrı künye gerekmez). **Seçenek B:** `__BOSLUK__` (N) (hükmün literal hâli).
- ⚠️ Süre sorusu da açık: dilim `macaristan-habsburg 1813-01-01`'de başlıyor. HE *"Napoleonovih Ilirskih pokrajina
  (1809–15)"* RESMÎ ucu veriyor; Fransızlar 1813 sonbaharında çekildi. Fiilî uçla 1813-01-01 → 1813 sonbaharı
  **< 1 yıl** ⇒ §0.1'e göre YANLIŞ DEĞİL; resmî uçla (1815) ~2 yıl ⇒ YANLIŞ. Hangi uç? Şehir adlı fiilî gün
  ölçülmedi. ⇒ **Hüküm senin; ölçülemezse SINIR olarak kalır.**

## Surgut — §4 (İslâm dünyası dışı ⇒ akademik birincil) ile yeniden açıldı
- Kayıt (`yerlesimler_ek9.js`): `s: rusya f:1592-01-01`, `kur` YOK. Dayanak: TDV `kucum-han` *"1592'de Pilim,
  Berezov ve Surgut gibi yeni şehirlerin inşasına başladılar"*.
- **ЭСБЕ (Brockhaus–Efron), "Сургут"**: *«С. основан как острог в 1593 г., на месте городка остяцкого князька.»*
  (ru.wikisource.org/wiki/ЭСБЕ/Сургут)
- **BRE "Сургут"** (kayıt notundaki alıntı; bu gece bigenc.ru 401 verdi, YENİDEN ÇEKİLEMEDİ): *«Заложен летом 1594 под
  рук. жильца В. В. Аничкова»*.
- ⇒ **⑥ İKİ AKADEMİK KAYNAK ÇELİŞİYOR: 1593 ↔ 1594.** İkisi de TDV'nin 1592'sinden sonra; TDV ile çelişki yok ("inşaya
  başlama"). BRE daha yeni ve daha ayrıntılı (yaz 1594, kurucunun adı); ЭСБЕ 19. yüzyıl sonu.
- Önerim: `rusya f` **1594-01-01** (BRE; `kesinlik:"yil"`, yaz ⇒ `ay` değil) + `ic_not`: *"ЭСБЕ 1593; TDV kucum-han
  1592 inşaya başlama"*. BRE metni yeniden çekilemediği için alıntı kayıt notundan aktarılıyor (beyan).
- Yan bulgu: ЭСБЕ *"на месте городка остяцкого князька"* ⇒ yerde Rus öncesi bir Ostyak (Hantı) kasabası var. Kaydın
  `kasitli_bosluk`/`bos:"devletsiz"` modeli bununla tutarlı (sahipsiz ≠ yerleşimsiz).
