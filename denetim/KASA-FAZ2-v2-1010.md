# KASA-FAZ2-v2-1010 — üç teslimin yazılabilir kalemleri (Cenevre + Sümer değişiklik talepleri)

Görev: YILDIRIM BAYEZIT (VARLIK-2 / CENEVRE / Hursagkalama kararı (e): "KASA-FAZ2-v2 olarak yaz, sonra zayıf 42") ·
Yazan: KASA · `data/` DONUK ⇒ diff.

## 1. Diff'ler (iki dosya — biri benim, biri SENİN dosyan)
| dosya | ne | uygulanır |
|---|---|---|
| `KASA-FAZ2-v2-1010.diff` (13 satır) | `yerlesimler_avrupa.js` · **Cenevre** `s:` zinciri | FAZ 2 üstüne ✓ · çıplak `main` 1d5e2dfd ✓ |
| `KASA-FAZ2-v2-1010-KUNYE.diff` (24 satır) | `devletler.js` · **`cenevre-cumhuriyeti` künye ÖNERİSİ** (`isvicre`'nin hemen ardına) — `devletler.js` senin dosyan, ÖNERİ olarak | FAZ 2 üstüne ✓ · çıplak `main` ✓ |
⚠️ **Sıra şartı:** veri diff'i künye diff'inden SONRA ya da AYNI anda iner — künyesiz `cenevre-cumhuriyeti` kimliği
Değişmez 4'e "künyesiz" düşer. İkisi birlikte sınandı: künye yükleniyor (f 1536-08-07, t 1815-05-19), Cenevre için
hayalet / aşan / önce kovası **0**, kümesel sayılar değişmedi (hayalet 0 · künyesiz 0 · aşan 118 · önce 325).
2i / 2s açık kümesi FAZ 2'ye göre **değişmedi** (Cenevre `yerlesimler_avrupa.js` = KUYRUK dosyası).

### 1.1 Cenevre zinciri (senin hükmün: künye AÇILIR, 1815-05-19)
```
almanya              1281-01-01 → 1536-08-07   (eski: → 1536-01-01; HLS "7 août 1536 traité … perpétuel")
cenevre-cumhuriyeti  1536-08-07 → 1798-04-26   (HLS-C "Seigneurie et République de Genève (1534-1798)";
                                                "tentatives … d'entrer comme canton … échouent")
fransa-cumhuriyet    1798-04-26 → 1813-12-31   (HLS-C "traité de réunion du 26 avril 1798"; HLS Léman
                                                "restauration … le 31 décembre 1813") — doğrudan ilhak
cenevre-cumhuriyeti  1813-12-31 → 1815-05-19   (Acte d'union 19.05.1815; Diet kararı 12.09.1814 kaynak:'ta)
isvicre              1815-05-19 → 1923-10-29   (HLS-C "Canton suisse depuis 1815")
```
Bubna'nın Avusturya işgali (décembre 1813, gün yok) `isg:` YAZILMADI (§8), `kaynak:`'ta beyan. Her dilimin `kaynak:`'ı
birebir alıntı + KASA-CENEVRE-1010.
### 1.2 `cenevre-cumhuriyeti` künye önerisi
`f:"1536-08-07"` · `t:"1815-05-19"` · `boya_gerekli:true` (BOYALAR'da yok ⇒ beyanlı boya borcu, §1.5 listesine ADIYLA) ·
`ic_not_f` / `ic_not_t` kaynak cümleleriyle · `ic_not_t` 1798-1813 ARASINI açıkça yazıyor (künye ömrü kesintili; nokta
zinciri arayı `fransa-cumhuriyet` ile taşıyor) · 4 kronoloji maddesi (1536-08-07 · 1798-04-26 · 1813-12-31 · 1815-05-19).
⚠️ Künye ömrünün kesintili olması = VARLIK-2'deki "çok aralıklı" şema sınıfının künye yüzü; bugün `ic_not` ile beyan.

## 2. Sümer kalemleri — DEĞİŞİKLİK TALEBİ (diff değil; sebebiyle)
Bu kalemlerin noktaları ve dilimleri `main`de YOK: Uruk/Umma/Kiş/Girsu noktaları ve `bit:`'leri inmemiş
`NOKTA-SUMER-1010` (+B10) diff'inde (`origin/makine/emrelic-nokta`), Kiş 8/9 dilimleri inmemiş `SUMER-SAHIP-1010.diff`'te
(`origin/makine/umit`). Başka işçilerin inmemiş diff'lerini benim yamalamam iki yamayı birbirine bağlar ve bayat-taban
riskini katlar ⇒ **değerleri sahiplerine talep olarak veriyorum** (alan, eski → yeni, kaynak, beyan):
| nokta | dosya / sahibi | alan | eski → yeni | `kaynak:` / `ic_not` (koordinatör şartlarıyla) |
|---|---|---|---|---|
| **Uruk (Warka)** | NOKTA-SUMER | `bit:` | `0640-01-01` → **`0400-01-01`**, `kesinlik:"yuzyil"` | van Ess, RlA 14 s.457: *"im 4. Jh. n. Chr. aufgegeben (Kose 1998, 70)"* · ic_not: "YÜZYIL; sur dışı Sasani yerleşimi (*'bis in die sasan. Zeit … für die Stadt'*) hinterland sayıldı, şehir iskânı değil · iç boşluklar MÖ 17.-15. yy (belki 11.-10. yy) şemada yazılamıyor (VARLIK-2 §1.2)" |
| **Umma (Tell Jokha)** | NOKTA-SUMER | `bit:` | `-0999-01-01` → **`-1594-01-01`**, `kesinlik:"yuzyil"` | J. Ur, RlA 14 s.329: *"it appears that the site was fully abandoned after the OB period"* · ic_not: "TÜRETİLMİŞ: Eski Babil sonu = MÖ 1595 (ORTA KRONOLOJİ, Brinkman 1977); YÜZYIL" |
| **Kiş (Tell Uhaimir)** | NOKTA-SUMER | `bit:` | (NOKTA-SUMER'deki değer) → **`0640-01-01`**, `kesinlik:"yuzyil"` | Gibson, RlA 5 s.619: *"Since, with the Islamic Period, both Uḫaimir and Inġarra were not occupied, Kiš in effect ceased to exist."* · ic_not: "İslâm döneminin başı, YÜZYIL" — ⚠️ NOKTA-SUMER'deki mevcut Kiş `bit:` değerini ölçmedim; talep yalnız kaynaklı değeri verir |
| **Kiş 8 / 9** | SUMER-SAHIP | ahameni dilimlerinin `kaynak:` | (OECT 10) → **Gibson RlA 5 s.619 cümlesi** | `kaynak:` *"Both parts of Kiš continued into the Achaemenid Period, although Ḫursagkalama was clearly the dominant half. Many economic texts found at Mound W are dated by reference to Achaemenid kings."* · ic_not: OECT 10, 122 (Cyrus 8) · 173 (Xerxes 7) · 209 (Artaxerxes 34) — tarih desteği; Kiş 9 ZAYIF (Artaxerxes I/II belirsiz) |
| **Girsu (Tell Telloh)** | NOKTA-SUMER | `bit:` AYNEN `-0549-01-01` + ic_not | — | Falkenstein, RlA 3 s.390: *"… bis in die erste Hälfte des 1. Jahrtausends besiedelt … Erst ein später Herrscher, wohl dem 2. Jahrhundert v. Chr. angehörend, Adadnādinaḫḫē … ‚Palast' … Characene … bis zum Beginn des 2. Jahrhunderts n. Chr."* · ic_not: "bit: BİRİNCİ EVRENİN SONU. İkinci evre ~MÖ 200 → ~MS 100 (Karakene) VAR ama şema tek aralık ⇒ yazılmadı (eksik, uydurmasız) — şema kalemi" |
| Lagaš · Şuruppak | — | — | AYNEN (TEYİT) | okuyucu kaynaklı, KASA doğrulamadı (beyan) |

## 3. Düzeltme notu (FAZ 2 raporuna)
FAZ 2 §5'te "boya borcu: `dubrovnik` (1358-1459)" yazdım. **Ölçüm:** `devletler.js`'teki `dubrovnik` künyesi ZATEN
`boya_gerekli:true` taşıyor ⇒ o boya borcu yeni değil, beyanlı listede zaten var. FAZ 2'nin YENİ boya borçları ikiye iner:
`teuton-devleti` · `eyyubi-hama`. v2 ile + `cenevre-cumhuriyeti`.

## 4. Sınav
- `girdi.yukle`: 4300 kayıt; Cenevre zinciri beklenen 5 dilim; künye okunuyor.
- `degismez4`: hayalet 0 · künyesiz 0 · aşan 118 · önce 325 (FAZ 2 tabanıyla aynı; Cenevre hiçbir kovada yok).
- `degismez2` 2s / 2i açık kümesi FAZ 2 tabanına göre: değişiklik YOK.
- Satır sonu: `yerlesimler_avrupa.js` CRLF (çıplak LF 0) · `devletler.js` tabanda zaten 225 çıplak LF taşıyor, ekleme
  CRLF (sayı değişmedi).
- Tam `denetle.py` koşusu bu v2 için YAPILMADI (iki satırlık veri + künye; FAZ 2'nin tam koşusu tabanda) — beyan.
