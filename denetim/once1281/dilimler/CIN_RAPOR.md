# CIN_RAPOR — Çin ve çevresi (1281 öncesi devlet listesi)

Ölçüm: `CIN_A..E.json` (üretici betik scratchpad'de; mevcut_id'lerin hepsi `mevcut_once1281.tsv`'de doğrulandı).

## ① Sayılar
| Dilim | Kayıt | okundu | taslak | var | var-kisa | eksik |
|---|---|---|---|---|---|---|
| A (MÖ 12000-3001) | 0 | 0 | 0 | 0 | 0 | 0 |
| B (MÖ 3000-501) | 29 | 0 | 29 | 5 | 1 | 23 |
| C (MÖ 500-MS 499) | 71 | 0 | 71 | 20 | 0 | 51 |
| D (MS 500-999) | 50 | 0 | 50 | 30 | 0 | 20 |
| E (MS 1000-1280) | 10 | 0 | 10 | 8 | 0 | 2 |
| Toplam | 160 | 0 | 160 | 63 | 1 | 96 |

**Hiçbir kayıt "okundu" değildir.** Bu oturumda web sayfası açılıp okunmadı (WebSearch/WebFetch yüklenmedi); bütün tarihler hafızadan yazıldı, hepsi `dogrulama:"taslak"`. `kaynak:` alanında sayfa okunmuş gibi künye yok; "doğrulama adayı" olarak gerçek eser adları (Cambridge History of Ancient China, CHC cilt 1/3/5/6, Shiji, Zizhi tongjian, Beckwith, Backus…) listelendi, sayfa numarası yok. Dönem oturumları yeniden doğrulamalıdır.

Tarih sözleşmesi: MÖ N = -(N-1). Bilinmeyen başlangıç `null` (B diliminde ~20 kayıt: Lu, Jin, Yan, Song, Wey, Cai, Cao, Chen, Xu, Ju, Zhu, Teng, Zeng, Guo, Yu, Ba, Shu, Dai, Yue; bunların eyalet verilme yılı kaynaklarda yok).

## ② Bulamadıklarım / sığ olabilecek yerler
- **A dilimi boş**: MÖ 3000 öncesi Çin'de belgeli siyasî birim yok; Liangzhu/Taosi/Shimao zaten `kultur` künyeli, "erken devlet" iddiaları arkeolojik.
- **Xia**: tarihselliği tartışmalı; yalnız XSZ Projesi tarihleriyle yazıldı.
- **Zhou eyaletleri (B)**: yalnız 20 kadarı yazıldı. Shiji "Oniki Feodal Bey" ve Zuozhuan'daki yüzlerce küçük devlet (Xue, Ji 杞/紀, Lai, Ying, Shen, Deng, Ru, Tan, Sui vs.) eksik; Rong/Di kabile devletleri (Xianyu, Feihu, Wuhuan) alınmadı.
- **Han hanedanı vasal krallıkları** (Yan, Zhao, Chu, Liang, Huainan, Changsha, Qi, Dai vb. 'wang guo' sistemi, MÖ 202-MS 220) alınmadı; Han'ın iç idaresi kabul edildi. Han Wang (MÖ 206) Batı Han'a katıldı.
- **Han sonu / Üç Krallık öncesi savaş ağaları** (Yuan Shao, Yuan Shu'nun Zhong'u, Liu Biao, Dong Zhuo, Gongsun Zan, Ma Teng, Han Sui…), **Wei Ao (Longyou), Dou Rong (Hexi), Peng Chong (Yan), Lu Fang, Liu Yong** gibi MS 23-37 isyan rejimleri alınmadı (sadece Gengshi, Chimei, Chengjia).
- **Tang fanzhen / Huang Chao (Qi, 880-884)** alınmadı; Tang sonu jiedushi devletleri sadece Jin, Qi, Zhao, Yan yazıldı; Yiwu, Dingnan, Zhenwu vb. eksik.
- **Tibet/Tarim**: Sumpa, Zhangzhung (yalnız tek kayıt), Tubo çökmesi sonrası Yumtan/Lhasa, Amdo Tibet beylikleri (Liangzhou Tibetleri, Gyalmo Rong, Chonggye?), Ladakh/Maryul alınmadı. Atlas'ta aynı polity için iki künye var: `tibet-imparatorlugu` ve `tubo-tibet-imparatorlugu` (mükerrer).
- **Gaochang/Turfan, Khotan, Shanshan, Uygurlar, Kara Hıtay** orta-asya oturumuna bırakıldı; Ganzhou Uygur çakışabilir. **Funan, Champa, Lac Viet/Au Lac, Dai Viet** guneydogu-asya'ya.
- **Doğu Liao (Yelü Liuge, 1213-), Xia Wang Yaoshi...** son ve zayıf; atlanmıştır. Dingan (Jeongan) devleti tarihleri çok belirsiz.
- **Bohai**: Kore oturumuyla çakışır (balhae `var`).
- 1271 öncesi Moğol ve Yuan başlangıcı: atlas `yuan-hanedani` f=1260; resmî Yuan adı 1271-12-18; fark ≤ 25 yıl => var.
- Gün hassasiyeti yalnız Xin (atlas gün veriyor) ve birkaç sınır tarihinde (Song t 1279-03-19, Jin t 1234-02-09, Yuan t 1368-09-14) yazıldı; gün tarihleri de hafızadandır (taslak).

## ③ Ana oturumdan istediklerim
1. Web okuma izni/yeteneğiyle ikinci tur: B ve D'de `okundu` yapacak doğrulama (Iranica değil; Cambridge History of China, Shiji tabloları, CHC 6 Liao/Jin/Xia bölümleri, Beckwith, Backus). Öneri: önce çakışma riski olan "var" kayıtlarının künye tarihlerini doğrulayın, sonra eksiklerden yüksek öncelik (Zhou eyaletleri, 16 Krallık, Beş Hanedan sonrası Qi/Jin/Zhao/Yan, Chu-Han krallıkları).
2. Karar: Chu-Han 18 krallığı (17 kayıt, `oncelik:kucuk`, ±1 yıl) haritada ayrı çizilecek mi? Çizilmeyecekse silinebilir.
3. Karar: Bahar-Güz küçük devletleri (Xu, Ju, Zhu, Teng, Zeng, Guo, Yu) kaç tanesi alınacak? Şu an `kucuk`.
4. `tur` sözlüğüne `teokrasi` (Hanzhong Zhang Lu) önerisi (`tur_yeni` alanı kayıtta).
5. Mükerrer atlas künyesi: `tibet-imparatorlugu` / `tubo-tibet-imparatorlugu` birleştirilsin.
6. Zaman çizelgesinde "Wu" adlı üç farklı polity (Gou Wu, Sun Wu, Yang Wu) için id'ler ayrı: `wu-devleti`, `sun-wu`, `yang-wu`.
7. Atlas `chu-devleti` f=MÖ 704 (kral ilanı); Chu'nun daha önceki vikontluk aşaması için `chu-devleti-erken` var-kisa olarak yazıldı; genişletme kararı sizde.
