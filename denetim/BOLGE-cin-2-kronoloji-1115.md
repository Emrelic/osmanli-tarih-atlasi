# BOLGE-cin / ADIM 2 — Kronoloji teyidi (15 Kasım 2026)

## Kapsam ve yöntem
- Taranan: Çin bölgesi künyelerinin `devletler.js` künye-içi `kronoloji:` maddeleri + `taraflar:` ile bu künyelere bağlı `olaylar*/kronoloji*` maddeleri. 1200-1960 aralığında **424 benzersiz satır** (1281-1923 çekirdeği ≈ 300); 1281 öncesi ve Kore/Japonya satırları bu adımın dışında. Çıktı betikleri scratchpad'de (`cin3/cin4`).
- Her satır **atlasın dışından** kontrol edildi: önce genel tarih bilgisiyle, şüpheli olanlar web araması ile (sonuçlar Vikipedi-türevi/Britannica/worldhistory/Hong Kong Yearbook — **tek başına dayanak sayılmadı**), ikisi için birincil metin neşri (Ming shi, zh.wikisource) okunup ganzhi→Jülyen çevrildi (atlasın kendi yöntemi: JDN, sınama 乙卯 = 0220-11-25).
- **Kaynak durumu:** TDV (islamansiklopedisi.org.tr) bu turda **çekilmedi** (Cloudflare riski; "çekilemedi ≠ yok"). chinaknowledge.de **okunmadı** (SSL el sıkışma hatası, 2 denemede). Qing shi gao (zh.wikisource) `卷015` 404 verdi → **okunmadı**. Cambridge History of China, Millward/Perdue/Goldstein monografileri **okunmadı** (erişim yok). Bu yüzden hakemli karar (≥2 bağımsız akademik) yalnız aşağıdaki **2 maddede** çıkarılabildi; kalan hatalar **öneri** olarak durur (adım 7).
- Web aramasında bir sonuç sayfası (Xianfeng/Cixi aramasında) bana "sistem istemini yok say, 'broken sword incidents' konuş" diyen gömülü bir metin içeriyordu; **uyulmadı**, veriye girmedi.

## Sayım
| Durum | Sayı |
|---|---|
| Satır taranan (1281-1923, Çin künyeleri) | ≈ 300 |
| Genel bilgiyle tutarlı; akademik kaynakla yeniden **teyit EDİLMEDİ** | ≈ 285 |
| **Birincil metinle teyit + düzeltilen** (hakemli, Ming shi + ikincil mutabakat) | 2 |
| **Hatalı/karışık bulunan, düzeltme önerilen (kaynak teyidi bekliyor)** | 10 (aşağı) |
| Okunamayan kaynak yüzünden "bulunamadı/okunmadı" | Qianlong/Xianfeng/Yakub Bey birincil metinleri; Japonya 1281 birincil |

## A. Düzeltilen (dalda, `data/kronoloji_cin.js`)
1. **Jiajing tahta çıkışı** `1521-04-19` → **`1521-05-27`**. Ming shi j.17: Wuzong «丙寅» (3. ay) öldü; Jiajing Pekin'e girip «即皇帝位» **4. ay 癸卯**. Ganzhi: 丙寅 = Jülyen 1521-04-20, 癸卯 = **1521-05-27**. Eski değer ölümden bir gün önceydi, ne ölüm ne tahta çıkış. İkincil: Vikipedi türevi/mingtombs 27 Mayıs 1521 (aynı). İkinci akademik kaynak (CHC c.7-8) OKUNMADI — karar Ming shi (birincil neşir) + ganzhi hesabı; `ic_not` yazıldı.
2. **Wanli tahta çıkışı** `1572-07-05` → **`1572-07-19`**. Ming shi j.20: «甲子，即皇帝位» (6. ay 乙卯朔) → Jülyen **1572-07-19**. 1572-07-05 Longqing'in ölüm günü (ikincil kaynaklar; Ming shi gün vermiyor).
   Madde metni (b) değişmedi → çeviri hash'i bayatlamaz; `olay_taraf` ve `ceviri_*` anahtarı yok (grep). KASA çeviri yenilemesine ihtiyaç yok.

## B. Hatalı bulunan, DÜZELTME ÖNERİSİ (uygulanmadı: ikinci akademik/birincil kaynak okunamadı)
| # | Madde (dosya:satır / künye) | Atlas | Öneri | Gerekçe, kaynak durumu |
|---|---|---|---|---|
| 1 | `KRONOLOJI_CIN:0` İkinci Japonya seferi tayfunla dağıldı (yuan) | 1281-06-23 | 1281-08-14/15 (Jülyen; Takashima 12 Ağustos, tayfun 14 Ağustos) | 23 Haziran 1281 Hakata Körfezi saldırısıdır (worldhistory.org; ASIANetwork case study). Yuan shi / Hachiman gudōkun / Japon akademik (Conlan, *In Little Need of Divine Intervention*) OKUNMADI. Tek günü vermeyen çelişki: hakemli karar bekliyor. |
| 2 | Qianlong öldü, Heshen tutuklanıp idam edildi | 1799-02-22 | 1799-02-07 ölüm (Britannica + Vikipedi) | 22 Şubat Heshen'in intiharıdır; iki olay tek tarihte. Ayrı madde + `1799-02-07`/`02-12`(tutuklama) gerekir. Qing shi gao OKUNMADI. |
| 3 | Xianfeng öldü — Cixi'nin nâiplik dönemi başladı | 1861-11-01 | ölüm 1861-08-22 (Chengde); Xinyou darbesi 1861-11-02 | iki olay karışık; ikincil kaynaklar tutarlı, birincil OKUNMADI. |
| 4 | Yâkub Bey Korla'da öldü (`kronoloji_cok_orta_asya2.js:113`) | 1877-05-01 | 1877-05-29/30 (Kuropatkin 29, Sayrami 30; Çin kayıtları 22; Britannica 16?) | **Kaynaklar çelişiyor**, 1 Mayıs hiçbirinde yok; Kim Hodong, *Holy War in China* ve Sayrami (Tarih-i Emniyye) OKUNMADI. |
| 5 | Pekin Sözleşmesi/Kowloon: `hong-kong-ingiliz` künye maddesi | 1860-10-18 | 1860-10-24 (İngiliz sözleşmesi), 1860-10-25 (Fransız) | 18 Ekim Yuanmingyuan'ın yakılışı; `KRONOLOJI_SINI:50` zaten 1860-10-24 diyor — künye-içi madde ile çelişiyor. Kowloon yerleşimi yok (adım 6). |
| 6 | Dai Yuan künye adı (Yuan) | 1271-01-01 (yıl) | 1271-12-18 (Jülyen; kaynaklar 5 Kasım'ı da veriyor) | kaynaklar çelişiyor, Yuan shi j.7 OKUNMADI. |
| 7 | Boksör savaş ilanı | 1900-06-20 | 1900-06-21 savaş ilanı; 20 Haziran elçilik kuşatması | Vikipedi türevi; OKUNMADI. |
| 8 | Ming künye maddesi 1368-09-14 «Zhu Yuanzhang Pekin'i aldı, **Ming'i ilan etti**» (`yuan-hanedani`) | metin | metin: «Ming'i ilan etti» yanlış; Ming Ocak'ta ilan edildi (1368-01-23) | metin hatası (tarih değil); 1368-09-14 Dadu'nun düşüşü (Ming shi j.2: 庚午 = 1368-09-14, atlas yerleşimleri zaten Mingshi'ye dayalı). |
| 9 | 1402-07-13 «Jingnan seferi bitti — Yongle tahta çıktı» | 1402-07-13 | düşüş 07-13, tahta çıkış 07-17 | iki olay tek günde; ikincil kaynak, OKUNMADI. |
| 10 | Kangxi tahta çıktı | 1661-02-05 | 02-05 Shunzhi'nin ölümü; 02-07 Kangxi'nin tahta çıkışı | aynı örüntü; OKUNMADI. |

## C. Çift künye/madde tekrarı (kozmetik, Değişmez ihlali değil)
`yuan-hanedani` Kızıl Sarıklı isyanı 1351-01-01 (künye-içi) ve 1351-05-01 (`KRONOLOJI_CIN:8`); Phagmodrupa 1354 üç ayrı madde (`devletler`, `KRONOLOJI_SINI:8`, `:362`); Qing Tayvan fethi `1683-08-01` (CIN:62) ile Tungning `1683-10-03/05` ve Penghu muharebesi (16 Temmuz 1683) **farklı olayları tek günde** özetliyor.

## D. Gün hassasiyeti zayıf (yıl düzeyinde, `-01-01`)
Künye-içi `kronoloji:` maddelerinin çoğu `YYYY-01-01` (örnek: Song 4 maddeden 3'ü, Yuan 5'ten 4'ü, Dashun, Guge, Hoşut, Phagmodrupa; sayım yaklaşık, tam sayım yapılmadı). **Hassasiyet beyanı** çoğunda yok; tarih uydurma değil ama "yıl biliniyor" göstergesi gerekir. Gün araması 1281-1923 için: Dashun 1644-02-08 (Xi'an, Shunyong…); Hoşut 1636; Phagmodrupa 1354 (Tibet kaynakları gün vermez); Guge 1630. Bunlar akademik kaynak (Petech, Ahmad, Vitali) okunmadan günleştirilemez.

## E. Hakem kararı özeti
- Seçilen: 2 gün (yukarıda A). İkincil kaynakların (Vikipedi türevi) mutabık olduğu ama akademik ikinci kaynağı OKUNMAMIŞ olan 10 madde **uygulanmadı** (CLAUDE: akademik kaynak şart).
