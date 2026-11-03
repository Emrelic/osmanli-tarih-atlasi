# 10 · Qing Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (salt okuma)

## Özet
- Künye: 1 (`qing-hanedani`, f 1616-01-01 yıl, t 1912-02-12 gün; Sonraki Jin dönemi künyeye GENİŞLETİLMİŞ — `ozet`te beyanlı). Öncülü ayrı künye yok (doğru, CLAUDE.md aşım sınıfı "aynı polity ⇒ genişlet"). İlişkili: `ming-hanedani` (→1644-04-25), `guney-ming` (→1662), `dashun`, `daxi-zhang`, `tungning` (→1683-10-05), `taiping` (1851-01-11→1864-07-19), `cungar` (1634→1758-01-01), `yakub-beg`, `kuca-hocalari`, `mogolistan` (Bogd, 1911-12-29), `cin-cumhuriyeti` (f 1911-10-10), `tibet-ganden-phodrang`.
- Ölçer: 160 yerleşim; en geniş yıl 1817 (156); 109 kırılma günü, **97 AÇIK** (70 kazanç / 27 kayıp; 33'ü `-01-01` yıl-başı). Dağılım: 1600-49: 16, 1650-99: 28, 1700-49: 9, 1750-99: 4, 1800-49: 1, 1850-99: 32, 1900-: 7.
- En ağır 3 bulgu: (1) **f = 1616-01-01'in günü artık biliniyor**: Qing shi gao j.1 «天命元年丙辰春正月壬申朔，上卽位» → 壬申 = **1616-02-17** (gün sayımıyla doğrulandı), künye `ic_not`unda "gün teyitsiz" yazıyor; (2) ölçerin AÇIK'larının bir kısmı **madde var, yerleşim adı maddede geçmiyor/`yer:` boş** (Değişmez 2 yer şartı `odak_yer`i saymıyor, `yer`/`yer_id`/`b`/`d` metnine bakıyor): Nerçinsk 1689-09-06, Aigun 1858-05-28, Pekin Ek 1860-11-14, Tarbagatay 1864-10-07, Tayvan 1683-10-03/05; (3) **Üç Feodal Ayaklanması, Taiping, Cungar/Doğu Türkistan fetihleri, Kanton 1650, Yangzhou 1645, Hangzhou 1645 evrende hiç yok** (evren dışı künye-içi kronolojide de yok); Qing'in 1644-1659 güney fethi ve 1673-1681 ayaklanması haritada 40+ kırılma gününü maddesiz bırakıyor.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| qing-hanedani | Qing Hanedanı (Mançu) | 1616-01-01 | 1912-02-12 | var; 160 yerleşim; kronoloji 6 madde (künye içi: 1616, 1636-05-15, 1644-06-06, 1839, 1900, 1912-02-12) |
| tsongkha | Tsongkha (Qingtang) | 1008 | 1104 | **alakasız** (isim benzerliği) |
| jin-hanedani | Jin (Jurchen) 1115-1234 | | | **Sonraki Jin değil**; Sonraki Jin (1616-1636) `qing-hanedani` içinde |
| sonraki-jin-5hanedan | Sonraki Jin (Shatuo, 936-947) | | | alakasız |
EKSİK: ayrı "Sonraki Jin" künyesi yok (beyanlı, doğru). Qing'in vasal/tabi evreleri (Joseon tabiiyeti 1637-1895, Tibet, Moğolistan, Kokand) künye düzeyinde ilişkili; `s:` sahipliğinde `tabi` tarafı doğru kullanılıyor mu ölçülmedi.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm / öneri |
|---|---|---|---|---|
| f | 1616-01-01 (yıl; «gün doğrulanamadı») | Qing shi gao (Zhao Erxun vd.), j.1 «Taizu 1» zh.wikisource.org/wiki/清史稿/卷1 (okundu): «天命元年丙辰春正月壬申朔，上卽位，建元天命，定國號曰金» | The Cambridge History of China 9 (künye alıntısı: 1616 han ilanı, devlet adı Jin) — **bu turda okunmadı** | Gün: 壬申 = 1616-02-17 (proleptik Gregoryen; 2000-01-01 戊午 çapasıyla 60'lık gün sayımı, 1616-02-16 辛未, 02-18 癸酉; 02-17 ilk ay 朔'una düşer). **Öneri: f `1616-02-17`, kesinlik gün**; ikinci bağımsız akademik kaynak (Crossley, *The Manchus* 1997 / Elliott, *The Manchu Way* 2001 / Peterson CHC 9) okunmalı → okunana dek `ic_not`: "tek kaynak (Qing shi gao, 1928'de derlenmiş geç kaynak); Taizu shilu (Manchu) karşılaştırılmadı". |
| 1636-05-15 (devlet adı Qing) | var (künye içi) | Qing shi gao j.3 (okundu): «夏四月乙酉，祭告天地，行受尊號禮，定有天下之號曰大清，改元崇德» | | 乙酉 = 1636-05-15 (gün sayımı doğrulandı). **Çift teyit gerek**; ikinci kaynak okunmadı. |
| 1644-06-06 (Pekin) | var | Qing shi gao j.4 (okundu): «己丑，大軍抵燕京…睿親王多爾袞入居武英殿» | kronoloji_sinir_dogu_500_1281.js:9195 aynı kaynak | 己丑 = 1644-06-06 ✓. Yeni: **Shunzhi'nin Pekin'de tahta çıkışı 1644-10-30** (j.4 «冬十月乙卯朔…即皇帝位», 乙卯 = 1644-10-30 gün sayımıyla ✓) — madde yok. |
| t | 1912-02-12 (gün) | Qing hanedanı tahttan çekilme fermanı «清帝遜位詔書» (kronoloji_sinir_dogu_500_1281.js:9221'de okunduğu yazılı) | Cambridge History of China 11 (Fairbank & Liu 1980) — **okunmadı** | 12 Şubat 1912 (戊午 ✓) yaygın ve tutarlı. `cin-cumhuriyeti` f=1911-10-10 (Wuchang günü) → 4 aylık örtüşme: Cumhuriyet'in ilanı 1 Ocak 1912, Wuchang ayaklanması 10 Ekim 1911 (gün sayımı 癸丑); ikisi farklı olayı tarihliyor, `ic_not` beyanı gerekli. |
| ara evre: 1644 (Çin hakimiyeti) | `ozet` beyanı | — | — | Qing'in "Çin'in meşru hanedanı" sayılması: Shunzhi tahtı 1644-10-30; ancak hanedanın kendi adı 1636 (künye `kuruluş` maddesi doğru). |

## c) Kronoloji
Var (evren): `kronoloji_sinir_asya.js:52` Nerçinsk 1689-09-06, `:53` Bur Antlaşması 1727-10-12, `:59` Aigun 1858-05-28, `:61` Pekin Konvansiyonu 1860-10-24, `:63` Pekin Ek 1860-11-14, `:64` Tarbagatay 1864-10-07, `:68` İli 1881-08-19, `:69-:96` (Hong Kong 1899, Gando 1909, Moğolistan 1913); `kronoloji_sinir_nokta2.js:40` Tungning'in teslimi 1683-10-03, `:68` Şimonoseki 1895-04-17; `kronoloji_sinir_adalar_dogu_asya.js:11,12,15,18` Tayvan 1680, 1723, 1812, 1875; `kronoloji_sinir_asya_zincir_1024.js:125-126` Zhang Xianzhong 1644-12-04 / Qing'in Daxi'yi yıkışı 1647-01-02; `kronoloji_sinir_dogu_500_1281.js:9195,9221` Leshou 1644-06-06 ve 1912; `kronoloji_sinir_zincir_1281sonra_1024.js:21` Kuça 1864-06-04. `devletler.js:5616` künye içi 6 madde **evren dışı**.
Evrende **hiç olmayanlar** (grep: Taiping/Tayping, Hong Xiuquan, Üç Feodal/Sanfan/Wu Sangui, Opyum/Afyon Savaşı, Cungar yıkımı): Taiping'in Nanjing'i alışı (19 Mart 1853) ve düşüşü (19 Temmuz 1864), Üç Feodal Ayaklanması (28 Aralık 1673 – 1681), Cungar Hanlığı'nın yıkımı 1755-58, Doğu Türkistan'ın fethi 1758-59, Birinci Afyon Savaşı 1839-42 (Nanking `asya_zincir_1024:128` Hong Kong künyesine bağlı; Qing tarafı yok), İkinci Afyon Savaşı, Yakub Bey, Boksör.
Önerilen eksik maddeler. Gün hesabı bu turda gün sayımıyla doğrulananlar (✓), Qing shi gao'dan okunanlar (okundu), geri kalanı hafızadan **doğrulanmamış aday**:
- { t:"1616-02-17", b:"Nurhaci Han ilan edildi: Sonraki Jin (Hou Jin), dönem adı Tianming", yer_id:"Mukden", kaynak:"Qing shi gao j.1 (okundu); CHC 9 (okunmadı)" } — künye içindeki 1616-01-01 maddesini güncelle.
- { t:"1636-05-15", b:"Hong Taiji Mukden'de «Büyük Qing» adını ve Chongde dönemini ilan etti", yer_id:"Mukden", kaynak:"Qing shi gao j.3 (okundu)" } — künye içinde var, **evrene ekle**.
- { t:"1644-10-30", b:"Shunzhi Pekin'de Gök ve Yer'e sunu yapıp imparator oldu", yer_id:"Pekin (Hanbalık)", kaynak:"Qing shi gao j.4 (okundu; gün 乙卯 ✓)" }
- { t:"1645-05-20", b:"Yangzhou Dodo'nun ordusunca alındı", yer_id:"Yangzhou", kaynak:"Wakeman, *The Great Enterprise* (1985) — okunmadı" } (atlas 1645-05-20 ile aynı gün)
- { t:"1645-07-06", b:"Hangzhou teslim oldu", yer_id:"Hangzhou", kaynak:"Wakeman 1985 — okunmadı" } (atlas 1645-07-06)
- { t:"1646-10-06", b:"Fuzhou Qing'e geçti; Longwu İmparatoru yakalandı", yer_id:"Fuzhou", kaynak:"Struve, *Southern Ming* (1984) — okunmadı" }
- { t:"1650-11-24", b:"Kanton (Guangzhou) sekiz aylık kuşatmadan sonra Qing'e geçti", yer_id:"Kanton (Guangzhou)", kaynak:"Wakeman 1985; Struve 1984 — okunmadı" }
- { t:"1673-12-28", b:"Wu Sangui Yunnan'da isyan etti: Üç Feodal Ayaklanması", yer_id:"Dali"(Yunnan), kaynak:"Qing shi gao j.6-7 (Kangxi 12/11); Oxford/CHC 9 — okunmadı }
- { t:"1683-10-03", b:"…Tungning teslimi: Kaohsiung (Takao) dahil Tayvan Qing'e geçti", yer_id:"Kaohsiung (Takao / Dagou)" } — mevcut maddeye yer ekle.
- { t:"1689-09-06", b:"Nerçinsk: Albazin, Blagoveşçensk, Amur ağzı hattı" } — mevcut maddeye yer ekle.
- { t:"1853-03-19", b:"Taiping Nanjing'i aldı ve başkent (Tianjing) yaptı", yer_id:"Nanking (Nanjing)", kaynak:"Spence, *God's Chinese Son* (1996); CHC 10 — okunmadı }
- { t:"1864-07-19", b:"Qing Nanjing'i geri aldı, Taiping son buldu" } (`taiping` t 1864-07-19, atlas 1864-07-19)
- { t:"1759-01-01", b:"Doğu Türkistan (Altishahr) Qing'e katıldı: Kaşgar, Yarkent, Hotan", yer_id:"Kaşgar", kaynak:"Millward, *Beyond the Pass* (1998); Perdue, *China Marches West* (2005) — okunmadı }
- { t:"1755-01-01", b:"Cungar fethi başladı: Gulca, Ili Qing'e geçti (Cungar t 1758-01-01 ile hizalanmalı)", kaynak:"Perdue 2005 — okunmadı }
- { t:"1911-12-29", b:"Moğolistan Bogd Han'ı tahta çıkardı: Dış Moğolistan Qing'den koptu", yer_id:"Bayanhongor"? , kaynak:"`mogolistan` künyesi f 1911-12-29" }

## d) Harita uyumu
AÇIK: **97 / 109**. Sınıflar:
1. **Madde var ama yerleşim maddede geçmiyor** (5-8): Nerçinsk 1689-09-06 (Albazin, Blagoveşçensk, Nikolayevsk); Aigun 1858-05-28; Pekin Ek 1860-11-14 (Habarovka, Vladivostok, İmperator limanı — yalnız `odak_yer`de); Tarbagatay 1864-10-07 (Zaysan); Tungning 1683-10-03/05 (Kaohsiung); 1912-02-12 (kayıp yerleşim listesi 100+; `Leshou` maddesi yalnız Leshou'yu açıklıyor). Çözüm: maddelere `yer:`/`yer_id`/gövde (`d`) ekle.
2. **Güney fethi 1644-1659** (≈25 gün): Taiyuan/Lanzhou/Pingyao/Jiayuguan `1644-10-01` toplu tarihi şüpheli (4 şehir tek günde, Lanzhou ve Jiayuguan sonraki yıllara ait olabilir); Xi'an/Luoyang/Kaifeng/Tongguan `1645-01-18` (toplu gün); Yangzhou 1645-05-20 ✓, Hangzhou 1645-07-06 ✓, Fuzhou 1646-10-06 ✓, Kanton 1650-11-24 ✓, Guilin/Nanning 1652-01-01, Guiyang 1658, Dali 1659-01-07. Bu toplu günlerin **kaynağı `s:` kayıtlarında yazılı mı ölçülmedi**; yeni maddelerle doğrulanıp ayrılmalı.
3. **Üç Feodal Ayaklanması** 1673-12-28 kayıp (Changsha, Chuxiong, Dali, Guilin) → 1674-03-15/26, 1676-03-01/04-05 kayıp; 1676-10-01, 1677, 1679, 1680-02-01, 1681 kazançlar: 14 kırılma günü maddesiz.
4. **Doğu Türkistan/Cungar** 1755-1759-1771 (Altay, Cungarya, Gulca, Aksu, Hotan, Kaşgar, Ürümçi, Qitai): 8 kırılma, madde yok; ayrıca **Cungar Hanlığı t = 1758-01-01** iken Gulca/Almalık Qing'e **1755-01-01**'de geçiyor → iki künye aynı yıl aralığında ayrı sahiplik; sıralama için maddeler.
5. **Taiping** 1853-02-18…1864-07-19 (Jiujiang, Anqing, Nanjing, Suzhou 1860-06-02/1863-12-04, Hangzhou 1861-12-29/1864-03-31): 10 kırılma, madde yok; `taiping` künyesi (1851-01-11→1864-07-19) ile `qing-hanedani` s zincirleri tutarlı (günler ayrı kaynaklarla doğrulanmalı).
6. **Rus/Batı sınırları 1858-1860-1864** (Aigun, Pekin, Tarbagatay) → 1. sınıf.
7. **Yıl-başı `-01-01`** (33): ör. 1621-01-01 Liaoyang/Lüşun/Mukden (Nurhaci Shenyang'ı Nisan 1621'de aldı — Qing shi gao j.1, okunmadı).
8. **1911-1912** (Wuchang 1911-10-10 ✓, Chenzhou/Hengyang 1911-10-22, Ganzhou/Ji'an 1911-10-31, Moğolistan 1911-12-29, 1912-02-12, Kobdo 1912-08-20): Xinhai Devrimi maddeleri evrende yok (`cin-cumhuriyeti` kronoloji maddeleri farklı).
Yerleşim sahipliği: en geniş yıl 1817 (156) bilinen Qing sınırıyla (Moğolistan, Doğu Türkistan, Tibet, Mançurya, Tayvan) tutarlı bir kapsam; **Tibet** (Lhasa, Chamdo `1910-02-12` kazanç — Zhao Erfeng'in Lhasa işgali 1910-02-12 ✓ doğru gün ancak madde yok) ve **Joseon** tabiiyeti haritada bu künyeye yazılı değil (vasal beyanı yok). Yerleşim yok: Qing ömründe 1621:3, 1635:4, 1649:60 — 1636-1649 arası 4 yerleşim (Mançurya + Hohhot) bilinen sınırla uyumlu; ancak **Mukden-Pekin arasındaki Liaodong yerleşimleri** (Jinzhou, Shanhaiguan) listede yok.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:5616` qing-hanedani: `f` `1616-01-01` → `1616-02-17`, `kesinlik:{f:"gun"}` ve `ic_not_f`: "Qing shi gao j.1 壬申朔 (okundu); ikinci kaynak bekliyor"; künye içi 1616 maddesini aynı güne.
2. Evren dosyalarında (öneri: `data/kronoloji_sinir_asya_zincir_1024.js` veya yeni `kronoloji_sinir_cin_qing.js`) yukarıdaki ✓/okundu maddeleri: 1616-02-17, 1636-05-15, 1644-10-30, 1912-02-12 (`yer:` olarak 100+ yerleşim yerine ana şehirler + `d:`'de "Qing'in kayıp yerleşimleri…").
3. Mevcut maddelere `yer:`/`d:` ek: `kronoloji_sinir_asya.js:52,59,63,64`; `kronoloji_sinir_nokta2.js:40`.
4. Üç Feodal, Taiping, Cungar/Doğu Türkistan, Güney fethi madde setleri — **kaynak okunduktan sonra** (şu an hafızadan aday); toplu günler (1644-10-01, 1645-01-18) ayrıştırılacak.
5. `cungar` t=1758-01-01 ile Qing Gulca/Almalık 1755-01-01 çakışması için tek karar.

## Erişilemeyen kaynaklar
Britannica «Qing dynasty» 403. Okunamadı: Cambridge History of China 9 (Peterson 2002), 10 (Fairbank 1978), 11 (Fairbank & Liu 1980); Crossley, *The Manchus* (1997); Elliott, *The Manchu Way* (2001); Wakeman, *The Great Enterprise* (1985); Struve, *The Southern Ming* (1984); Spence, *God's Chinese Son* (1996); Millward 1998; Perdue 2005; Taizu shilu (Manchu). Takvim: ay-güneş Çin tarihleri yalnız gan-zhi gün sayımıyla (2000-01-01 戊午 çapası) Gregoryen'e çevrildi; astronomik ay tablosu (NAOJ/Academia Sinica) bu turda **açılmadı** — gün 壬申朔, 乙酉, 己丑, 乙卯, 戊午 eşleşmeleri gan-zhi ile tutarlıdır ama ay numarasının tablo teyidi yapılmadı.
