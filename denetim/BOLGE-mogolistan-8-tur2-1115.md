# BOLGE-mogolistan — 2. tur (15 Kasım 2026): tam metinle teyit, yazılanlar, çözülemeyenler

2. turun düzeltmesi: 1. turun "0/25 teyit" hükmü yetersizdi. Bu tur okunan TAM METİNLER (bu oturumda WebFetch ile Wikisource'tan okundu; arama özeti ve Vikipedi sayılmadı):
- Qing Shilu (Shengzu shilu): juan 150 (Kangxi 30, 4.-5. ay), juan 172 (Kangxi 35, 5.-6. ay), juan 173 (7. ay)
- Qing Shi gao: juan 2 (Taizong benji), juan 7 (Shengzu benji 2), juan 521 (Tüsiyetü Han bölümü), juan 523, 524
- Qinding Huangyu Xiyu tuzhi juan 18; Qinding Daqing yitongzhi juan 411
- Ming shi juan 2 (Taizu benji), Ming tongjian juan 5
- Irkutsk Üniversitesi Haberleri, Seri Tarih, 2016, c.17, s.12-25 (Kyakhta/Burin antlaşması üzerine akademik makale; PDF metni çıkarıldı)
OKUNAMADI: Bawden, Perdue, Courant, Rupen, Howorth, Grousset, Atwood (tam metin bulunamadı), Ming Shilu (Wikisource sayfası bulunamadı), Consolidated Treaty Series, ctext (erişilmedi), Moğolca kaynaklar, TDV (bu oturumda denenmedi).

## Çözülenler (gün hesabı: 干支 sayımı, JDN algoritması, `scratchpad/mog/gz.py`; Çin ay-güneş → Gregoryen, 1582 öncesi Jülyen)
| Konu | Sonuç | Kaynaklar (≥2 tam metin) | Veri |
|---|---|---|---|
| Kuzey Yuan 1368-09-14 | **Teyit**: 洪武元年八月庚午 = Jülyen 1368-09-14, Xu Da Dadu'ya girdi. Ayrıca Toghon Temür'ün kaçışı 閏七月丙寅 = Jülyen 1368-09-10 (Tongzhou alındı, Yuan hanı Shangdu'ya çekildi) | Ming shi juan 2 + Ming tongjian juan 5 | künye f 1368-09-14 doğru (Dadu'nun düşüşü); kaçış 09-10 ayrı gün, yazılmadı |
| Dolon Nor 1691 | Varış 乙酉 = 1691-05-27; Halha hanları 丁亥 = **1691-05-29** huzura çıktı, unvan verildi; ayrılış 壬辰 = 1691-06-03 | Shilu juan 150 + Shi gao juan 7 (丙戌 1691-05-28 «上駐多羅諾爾») + Shi gao juan 521 (4. ay) | Madde yazıldı (`olaylar_mogolistan_1115.js`); künye t 1691-05-30 değişmedi (1 gün) |
| Galdan 1682 / 1688 | 1682 (Tarim, Abdurashid yakalandı): TDV Kalmuklar (künye kaynağı) + Xiyu tuzhi juan 18 = **çift teyit**, 1682 korunur. Halha işgali 1688: Shi gao juan 7 + 521 | — | 1682 maddesi dokunulmadı; 1688 maddesi (yıl) yazıldı |
| Zuunmod 1696 | Battle 5. ay 13. gün; 丙辰朔 = 1696-05-31 ⇒ **1696-06-12**; Shi gao 癸酉 = 1696-06-17 rapor/haber günüdür | Shilu juan 172 (açıkça «五月十三日… 果於是日破噶爾丹») + Shi gao juan 7 | Madde yazıldı |
| Ejei teslimi / Çahar | Ligdan ölümü haberi Tiancong 8 閏八月庚寅 (≈1634-09-28), Ejei'nin annesi onunla teslim: Tiancong 9 五月丙子 (≈**1635-07-11**), Ejei Mukden'e 九月癸丑 (≈1635-10-?) | yalnız Shi gao juan 2 (tek tam metin; Shilu juan okunmadı) | YAZILMADI (≥2 tam metin yok; ay başı hesabı ±1 ay sapma riski) |
| Karakurum 1635 qing | Halha 1691'e dek bağımsız (Shilu juan 150: Halha 1691'de ilk kez «亲身归顺»: «今土射图汗等亲率所属数十余万人来归»; Shi gao 521) | Shilu 150 + Shi gao 7/521 | **Yazıldı**: `data/yerlesimler_asya.js` Karakurum `s:` kuzey-yuan → 1691-05-30, qing 1691-05-30 → 1911-12-29 (kaynak: alanı) |

## Çözülemeyenler (neden)
- **Bur/Kyakhta 1727**: okunan tek akademik metin (İrkutsk Üniv. Haberleri 2016): «подписанием 21 октября 1727 г.» (antlaşma, takvim belirtilmemiş → Rus kaynağı Jülyen ise 1727-11-01 Gregoryen) ve sınır işareti haçı «1727 Августа 20 дня» (Jülyen ⇒ 1727-08-31). Atlasın 1727-10-12'si okunan hiçbir kaynakta yok. İkinci bağımsız tam metin (Consolidated Treaty Series, Myasnikov 2004) ERİŞİLEMEDİ ⇒ madde değiştirilmedi. ÖNERİ: maddeyi ikiye böl (Bur 31 Ağustos 1727 işaret hattı; Kyakhta 1 Kasım 1727 Gregoryen) — kaynak teyidi sonrası.
- **Ungern/Urga 1921**: Vikipedi/ayna siteleri 1-4 Şubat 1921 (Urga muharebesi) ve 26 Şubat taç giyme (22 Şubat teyit edilmedi) der; akademik tam metin (Palmer, Kuzmin, Bawden, Rupen) ERİŞİLEMEDİ ⇒ Urga `cin-cumhuriyeti → mogolistan` 1921-07-11 geçişi DEĞİŞTİRİLMEDİ (kuyrukta).
- **Tuva 1921-08-14**: ikinci tam metin bulunamadı (Qing Shi gao juan 524 Tannu Uriankhai'ı Qing statüsüyle anlatır, 1921 olayına girmez) ⇒ künye `ic_not` "gün teyitsiz" hâlinde kalır.
- **Künye taslakları (Oyrat/Çahar/Halha/Tümed)**: Çahar için tek tam metin (Shi gao juan 2: Ejei 1635 teslimi); f (1604 Ligdan) ve Altan Han/Esen/Halha hanlıklarının f/t günü için tam metin bulunamadı ⇒ künye YAZILMADI. `renkler.py` BOYALAR'da bu künyeler yok (renk önerisi: ayrı palette, tuz KASA).
- **Kuzey Yuan künye t 1691-05-30**: Qing Shilu'ya göre Halha 29 Mayıs'ta huzura çıkar, 1691-05-30 günü hiçbir kayıtta yok; ±1 gün tolerans.

## Önceki turda ölçülen "iç çelişki"nin kapanışı
Karakurum `s:` 1635 qing → artık kuzey-yuan 1691-05-30'a dek. Karakurum `kd:` penceresiyle, künye t'siyle, Urga/Kerulen/Öndörhaan ile tutarlı. Ejin 1636 (Alaşa) ve Kobdo 1635 hâlâ açık.
