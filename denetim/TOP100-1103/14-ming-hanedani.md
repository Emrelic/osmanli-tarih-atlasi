# 14 · Ming Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py + elle grep)

## Özet
- Künye 3 (ming-hanedani, guney-ming, ming-annam-idaresi). Açık kırılma: ming-hanedani 31/36, guney-ming 17/17, ming-annam-idaresi 0/2. Toplam AÇIK 48.
- Eksik kronoloji maddesi (Değişmez 2 evreninde): kuruluş, Pekin düşüşü, Yunnan fethi, Güney Ming evreleri, Mançu girişi, Yongli sonu — en az 14 madde önerildi.
- En ağır 3 bulgu:
  1. Ming'in kendi kuruluş/başkent/son maddeleri yalnız `devletler.js` içindeki künye `kronoloji:` dizisinde. Değişmez 2 evreni (olaylar*/kronoloji_sinir*) bunları saymıyor; 1368-01-23, 1644-04-25 kırılmaları bu yüzden AÇIK.
  2. Vietnam'daki Ming işgali iki zincire bölünmüş: 12 yerleşim hâlâ eski `ming-hanedani 1407-06-17 → 1428-01-03` zincirinde; yalnız Hanoi `ming-annam-idaresi 1407-06-16 → 1427-11-12` + `__BOSLUK__` → 1428-01-03 zincirinde. Künye t'si Mingshi ile teyitli (1427-11-12), yerleşimlerin 1428-01-03 ucu 52 gün sonra → AÇIK.
  3. Makao 1557'de `ming-hanedani` → `portekiz`: egemenlik Çin'de kaldı (kira/ikamet); 1557 "kayıp" olarak gösterimi tartışmalı (aşağıda d).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| ming-hanedani | Ming Hanedanı | 1368-01-23 | 1644-04-25 | VAR; harita ömrü 1368→1661 (yerleşim s: Penghu 1661-04-30'a dek Ming kalıyor, bkz. d) |
| guney-ming | Güney Ming (Hongguang/Longwu/Yongli) | 1644-04-25 | 1662-01-01 | VAR; f = Pekin düşüşü, Hongguang'ın Nanjing'de tahta çıkışı değil (aşağıda) |
| ming-annam-idaresi | Ming Çin'i Đại Việt İdaresi | 1407-06-16 | 1427-11-12 | VAR; 1 yerleşim (Hanoi) |
| tungning | Tungning (Zheng) | — | — | ardıl, ayrı künye var (bu denetimde ölçülmedi) |
| dashun / daxi-zhang | Li Zicheng / Zhang Xianzhong | — | — | rakip rejimler, ayrı künye var |
EKSİK parçalar: Longwu (Fuzhou, 1645-1646) ve Yongli (Zhaoqing/Guilin/Kunming, 1646-1662) ayrı künye değil, guney-ming içinde tek parça. Ming'in Qing'e karşı direniş evreleri kronolojide yok. Pekin düşüşü (Nisan) ile Hongguang (Haziran) arasındaki ~8 haftada Güney'in sahibi künye bakımından belirsiz.

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm | Önerilen |
|---|---|---|---|---|---|
| ming f | 1368-01-23 | Mingshi juan 2 (zh.wikisource.org/wiki/明史/卷2), okundu: 「春正月乙亥，祀天地於南郊，即皇帝位。定有天下之號曰明，建元洪武。」 | Cambridge History of China vol.7 (Mote/Twitchett 1988) ERİŞİLEMEDİ | Yıl+ay+gün-kök (乙亥 = 1. ay 4. gün) birincil belgeyle TUTARLI. Jülyen/Gregoryen çevirisi bu makinede doğrulanmadı ("çevrilmedi"). | Değişme. Madde ekle (c). 2. akademik kaynak başka makinede. |
| ming t | 1644-04-25 | Mingshi juan 24, okundu: 「丁未，昧爽，內城陷。帝崩於萬歲山」 (17. yıl 3. ay, 丁未 = 19. gün) | Cambridge Hist. China vol.7 s. (Struve ch.) ERİŞİLEMEDİ | 3/19 = 25 Nisan 1644 Gregoryen standart karşılık (çevrilmedi/doğrulanmadı). Künye t = Pekin düşüşü; "hanedanın sonu" tanımıyla uyumlu, Güney Ming'e devir. | Değişme. |
| guney-ming f | 1644-04-25 | Mingshi juan 24 (aynı gün) | Mingshi juan 120 (Fu Wang bölümü): 「偽號弘光」 (Hongguang, Nanjing) | f Pekin düşüşüne bağlanmış; Hongguang'ın fiilî tahta çıkışı sonradan (Haziran 1644). Beyan yok. | `ic_not`a "f = Ming merkezinin düşüşü; Nanjing sarayı 1644 yazında kuruldu" beyanı. Gün: Hongguang tahta çıkış günü 2 akademik kaynakla başka makinede (listede). |
| guney-ming t | 1662-01-01 | Mingshi juan 120 (Gui Wang bölümü), okundu: 「緬人以由榔父子送軍前…明年四月，死於雲南」 | ERİŞİLEMEDİ (Struve, Camb. Hist. China 7 ch.10) | Yongli'nin ölümü Yunnan'da "ertesi yıl 4. ay" = Kangxi 1 (1662). Yıl uyumlu. Gün teyitsiz. | Yıl hassasiyeti kalsın; gün için ikinci kaynak (Struve) bekleniyor. |
| ming-annam f | 1407-06-16 | Atlas `kronoloji_sinir_asya_zincir_1024.js:120` gün çevirimi (Yongle 5/5/甲子) | Cambridge ch.6 (künye kaynağı) yalnız yıl | Gün tek kaynaklı; Mingshi juan 6'dan okunamadı (bu turda). | Gün "teyitsiz" beyanı kalsın. |
| ming-annam t | 1427-11-12 | Mingshi juan 9, okundu: 「冬十月戊寅，王通棄交阯，與黎利盟。」 (Xuande 2/10, 戊寅) | atlas çevirimi 12 Kasım 1427 (cin_gun, doğrulanmadı) | Birincil belgeyle gün-kök TUTARLI (戊寅). | Değişme. Gün kaynak olarak Mingshi juan 9 eklenebilir. |

## c) Kronoloji
Var olanlar (Değişmez 2 evreninde):
- kronoloji_sinir_adalar_dogu_asya.js:9-10 — VOC Penghu 1622-01-01 / çekilme 1624-08-26 (ming-hanedani).
- kronoloji_sinir_asya_zincir_1024.js:120-121 — ming-annam-idaresi 1407-06-16 / 1427-11-12.
- kronoloji_sinir_asya_zincir_1024.js:125 — Zhang Xianzhong Daxi 1644-12-04.
- Otomatik "X Ming Hanedanı egemenliğine geçti — <yer>" maddeleri (olaylar_arkeoloji_zincir.js ve kronoloji_sinir_*), yalnız tek yerleşim başına; kuruluş/başkent/fetih gibi kök olay değil.
Evren DIŞI (`data/devletler.js` içinde künye `kronoloji:`; Değişmez 2 saymıyor): satır 5589-5592 (1368-01-23 kuruluş, 1405 Zheng He, 1421 Pekin'e taşınma, 1644-04-25 son), guney-ming satır ~7727-7731.

Eksik, önerilen maddeler (hepsi `kronoloji_sinir_ming_1103.js` gibi yeni bir dosyaya; yer_id'ler atlasta var olan adlara göre kontrol edilmeli):
```
{ t:"1368-01-23", gun:"23 Ocak 1368 (Hongwu 1/1/4, 乙亥)", kesinlik:"gun", devlet:"ming-hanedani", taraflar:["ming-hanedani","yuan-hanedani"], b:"Zhu Yuanzhang Nanjing'de imparator ilan edildi; devlet adı Ming, yıl adı Hongwu", tur:"kurulus", yer_id:"Nanjing (Jiankang)", kaynak:"Mingshi juan 2: 「春正月乙亥，祀天地於南郊，即皇帝位。定有天下之號曰明，建元洪武」 (zh.wikisource.org/wiki/明史/卷2) · ikinci akademik: Camb. Hist. China 7 (erişilemedi); gün Jülyen/Gregoryen çevirisi doğrulanmadı" },
{ t:"1368-09-14", kesinlik:"gun", devlet:"ming-hanedani", taraflar:["ming-hanedani","yuan-hanedani"], b:"Xu Da Yuan başkenti Dadu'ya girdi (Pekin Ming'e geçti); Yuan Şangdu'ya çekildi", tur:"toprak-kazanc", yer_id:"Pekin (Hanbalık)", kaynak:"Mingshi juan 2: 「庚午，徐達入元都」 (8. ay) · atlas başka yerde 1368-09-14 kullanıyor (yerlesimler_asya.js yorumu); gün çevirisi doğrulanmadı" },
{ t:"1382-01-06", kesinlik:"gun", devlet:"ming-hanedani", taraflar:["ming-hanedani","kuzey-yuan"], b:"Yunnan'ın Ming'e geçişi: Fu Youde Baishijiang'da (14. yıl 12. ay) Yuan ordusunu yendi, Liang Prensi intihar etti", tur:"toprak-kazanc", yer_id:"Kunming", kaynak:"Mingshi juan 2: 「傅友德大敗元兵於白石江，遂下曲靖」 (戊辰), 「元梁王把匝剌瓦爾密走普寧自殺」 (壬申), 12. ay Hongwu 14. Not: 1382-01-06 günü s: dizisindeki kırılmadır; 壬申→Gregoryen eşleme doğrulanmadı" },
{ t:"1421-01-01", kesinlik:"yil", devlet:"ming-hanedani", b:"Ming başkenti Nanjing'den Pekin'e resmen taşındı (Yongle 19)", tur:"baskent", yer_id:"Pekin (Hanbalık)", kaynak:"Camb. Hist. China 7 ch.3 (Yongle) — ERİŞİLEMEDİ; devletler.js:5589'daki satır kaynaksız" },
{ t:"1428-01-03", ... }  // GEREKSİZ: s: ucu 1427-11-12'ye çekilirse (bkz. d-1).
{ t:"1644-04-25", kesinlik:"gun", devlet:"ming-hanedani", taraflar:["ming-hanedani","dashun"], b:"Li Zicheng Pekin'i aldı; Chongzhen Wansui (Jingshan) Tepesi'nde intihar etti; Ming merkezi düştü", tur:"son", yer_id:"Pekin (Hanbalık)", kaynak:"Mingshi juan 24: 「丁未，昧爽，內城陷。帝崩於萬歲山，王承恩從死」 (17/3/丁未)" },
{ t:"1644-06-06", kesinlik:"gun", devlet:"qing-hanedani", taraflar:["qing-hanedani","dashun","ming-hanedani"], b:"Qing ordusu Pekin'e girdi; Güney Ming (Nanjing) ayrı rejim olarak kaldı", tur:"toprak-kazanc", yer_id:"Pekin (Hanbalık)", kaynak:"Mingshi juan 24: «五月…以帝禮改葬»; künye qing-hanedani 1644-06-06 satırı (atlas) — iki akademik kaynak gerekli" },
{ t:"1644-06-19", kesinlik:"gun", devlet:"guney-ming", b:"Hongguang (Prens Fu Zhu Yousong) Nanjing'de imparator oldu: Güney Ming kuruldu", tur:"kurulus", yer_id:"Nanking", kaynak:"Mingshi juan 120 Fu Wang bölümü: 「偽號弘光」 · gün 19 Haziran 1644: DOĞRULANMADI — ikinci akademik kaynak (Struve) gerekli, tarih bu makinede teyit edilemedi" },
{ t:"1645-06-08", kesinlik:"gun", devlet:"guney-ming", b:"Qing ordusu Nanjing'e girdi / Hongguang yakalandı (künye kronolojisinde 1645-06-08 var; alıntı atlas kaynaklı, doğrulanmadı)", tur:"toprak-kayip", yer_id:"Nanking", kaynak:"Struve, Camb. Hist. China 7 ch.10 — ERİŞİLEMEDİ" },
{ t:"1646-10-06", ... Fuzhou düştü / Longwu sonu }  // s: kırılması Fuzhou, Wenzhou, Zeytun, Zhangzhou için 1646-10-06; maddesi yok
{ t:"1650-11-24", ... Guangzhou'nun Qing'e geçişi (Güney Ming) }  // s: kırılması Kanton, Chaozhou, Leizhou için; madde yok
{ t:"1659-01-07", ... } // künye kronolojisinde var; evren dışı
{ t:"1661-04-30", ... Koxinga Penghu / Tayvan seferi }  // s: kırılması Penghu için; Zheng Chenggong Tayvan'a çıkışı 1661-04-30 civarı
{ t:"1662-06-01", ... Yongli öldürüldü }  // gün yalnız "Kangxi 1 / 4. ay" Mingshi juan 120'den; gün hesabı doğrulanmadı
```
(Tür "…" ile bırakılan satırlar: ana kayıt var ama bu turda kaynak okunamadığı için tam satır yazılmadı.)

## d) Harita uyumu
Açık kırılma: 31 (ming-hanedani) + 17 (guney-ming) + 0 (annam) = 48. Kalabalık/önemli olanlar:
| # | gün | yerleşim | öneri |
|---|---|---|---|
| 1 | 1368-01-23 kazanç | Anqing, Changsha, Ganzhou, Hangzhou… (Ming kuruluşu) | Kuruluş maddesi (c) |
| 2 | 1382-01-06 → 1382-04-14 (6 ayrı gün) | Dali, Guiyang, Kunming, Chuxiong, Kaihua, Lin'an, Mengzi, Tonghai, Jingdong, Lijiang, Tengyue, Yongchang, Shunning, Yuanjiang | Yunnan fethi maddesi; 6 ayrı gün tek maddeyle karşılanamaz (±30 gün) — maddeyi gün-gün 1382-01-06, -01-15/16, -03-16, -04-07, -04-14 aç ya da s: ucunu 1382-01-06'ya topla (Mingshi 14. yıl 12. ay) |
| 3 | 1644-10-01 | Jiayuguan, Lanzhou, Yinchuan, Zhangye | Qing/Shun/Daxi'ye geçişin hangi künyeye gittiği beyan; madde gerekli |
| 4 | 1644-06-06 | Anyang, Baoding, Jinan, Kalgan | Qing'in Pekin'e girişi maddesi (±30 gün içinde ama 'alâkalı' sayılmıyor — yer_id eşleşmesi) |
| 5 | 1621-01-01 | Liaoyang, Lüşun, Mukden (Mançu fethi) | Hou Jin'in Liaoyang/Mukden alışı 1621 (Nurhaci); madde ekle, gün yoksa YYYY-01-01 |
| 6 | 1428-01-03 | Bac Giang, Cao Bằng, Hai Phong, Huế | s: ucunu 1427-11-12'ye çek (Mingshi juan 9 戊寅) ve künyeyi ming-annam-idaresi yap |
| 7 | 1404-01-01 | Hâmi (Kumul), Tientsin | madde yok; Hami 1404'te Ming himayesinde Kumul beyliği — "kazanç" tanımı tartışmalı |
| 8 | 1643-10-11 | Tongguan, Xi'an, Yan'an | Li Zicheng'in Xi'an'ı aldığı olay; madde yok |
| 9 | 1646-10-06 | Fuzhou, Wenzhou, Zeytun, Zhangzhou | Longwu'nun yenilişi |
| 10 | 1650-11-24 | Kanton, Chaozhou, Leizhou | Guangzhou'nun düşüşü |
| 11 | 1645-05/07 | Yangzhou, Anqing, Hefei, Jingzhou, Hangzhou | Yangzhou katliamı (Mayıs 1645) ve Nanjing'in düşüşü |
| 12 | 1557-01-01 | Makao | **Makao Ming'den "kaybedilmedi"**: Portekiz kira/ikametle yerleşti, egemenlik 1887'ye dek Çin'de; 1557'de s: `portekiz`e geçişi yanlış gösterir. Kaynak: Porter, Macau (1996), Cambridge Hist. China 8 — ERİŞİLEMEDİ. Öneri: 1557 kırılmasını kaldır; devredilme 1887 Lisbon/Pekin Antlaşması. |
| 13 | 1524-01-01 / 1513-01-01 | Dunhuang / Hâmi | Hami'nin Turfan'a düşüşü (1513) ve Jiayuguan'ın batısının bırakılışı (1524): Mingshi juan 330 gibi kaynak gerekli (okunmadı) |
| 14 | 1661-04-30 | Penghu | Koxinga seferi; Penghu zaten VOC'den dönmüştü (1624); 1661 Zheng'e geçiş |
| 15 | 1659-01-07 / 1659-04-22 | Yunnan şehirleri | Yongli'nin Burma'ya kaçışı; iki ayrı gün (1659-01-07 ve 04-22) 105 gün aralıklı; madde 1659-01-07 var (künye kronolojisinde) ama evren dışı |
En geniş an: 1410, 101 yerleşim. Bilinen sınır: Ming, Liaodong'dan Yunnan'a; Vietnam (1407-1427) Ming-hanedani içinde; Moğolistan sınırı (Hâmi, Dunhuang) Ming'in zayıf kontrolü. Ölçerin örneğinde Dariganga, Ejin, Gaçun Gobi `kuzey-yuan`a ait — Ming'in kuzey sınırı Ordos/Dayan Han dönemi ile uyumlu görünüyor. Vietnam'daki 12 yerleşim ming-hanedani'nde: bu tutarsızlık (bkz. özet 2).

## Önerilen düzeltmeler (KASA için)
1. `data/yerlesimler*.js`: Vietnam'da `ming-hanedani 1407-06-17 → 1428-01-03` olan 12 yerleşimi (Hai Phong, Nam Dinh, Thanh Hoa, Vinh, Son Tay, Ninh Binh, Bac Giang, Cao Bằng, Huế…) `ming-annam-idaresi 1407-06-16 → 1427-11-12` + `__BOSLUK__ 1427-11-12 → 1428-01-03` zincirine çevir (Hanoi örneği).
2. `data/yerlesimler_asya.js:2362` Makao: `1368-04-01 → 1557-01-01 ming-hanedani` + `1557-01-01 → 1923 portekiz` satırı: 1557 kırılmasını kaldır, `ming-hanedani → qing-hanedani → …` zincirine bağla; Portekiz kiracı notu `kaynak`ta.
3. Yeni dosya `data/kronoloji_sinir_ming_1103.js` ve `index.html`'e `<script>` satırı; yukarıdaki (c) maddeleri `devlet:` ve `taraflar:` ile.
4. `data/devletler.js:5585` ming-hanedani: `kaynak:"cin--ulke"` → "Mingshi juan 2 (zh.wikisource.org/wiki/明史/卷2) + Camb. Hist. China vol.7"; `ic_not_f` ekle (Jülyen/Gregoryen beyanı).
5. `data/devletler.js:7723` guney-ming: `kaynak:"bulunamadı…"` TDV-yok beyanı yerine Mingshi juan 120 + Struve ch.10 yaz; `ic_not_f`.
6. 12 Haziran/Kasım gibi kırılmaları için `kd:` gerekmiyor; s: sınırlarının madde ile eşlenmesi yeterli.

## Erişilemeyen kaynaklar
- Mote & Twitchett (eds.), *The Cambridge History of China*, vol.7 "The Ming Dynasty 1368-1644 Part 1" (CUP 1988), ch.2 "The rise of the Ming" (Hongwu'nun 23 Ocak 1368 günü; Jülyen/Gregoryen) — Soru: Hongwu 1/1/4 hangi Jülyen/Gregoryen güne denk düşüyor?
- Twitchett & Mote, vol.8 (1998) ve ch.10 "The Southern Ming 1644-1662" (L. Struve) — Soru: Hongguang'ın tahta çıkış günü (19 Haziran 1644?) ve Yongli'nin ölüm günü (1 Haziran 1662?).
- Porter, J., *Macau: The Imaginary City* (Westview 1996) / Cambridge Hist. China 8: Makao'nun 1557-1887 egemenlik durumu.
- Mingshi juan 6 (Yongle 5/5 Giao Chỉ fethi) ve juan 330 (Hami/Dunhuang) — zh.wikisource sayfaları bu turda okunmadı.
- Iranica/JSTOR gerekmedi (Çin devleti).

## JSTOR teyidi (HAVVA SALI, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- **Makao — kaynaklı:** Wu Zhiliang & Jin Guoping, «Ambergris and Opium in Macau's History», *China
  Perspectives* 44 (2002), s. 4 (jstor.org/stable/24051370): Portekizliler kıyıyı «within the Chinese
  Empire» yerleşimi olarak kullandı; Portekiz «perpetual occupation and government of Macau» hakkını
  ancak **1887** Çin-Portekiz Dostluk ve Ticaret Antlaşması'yla aldı.
  **Hüküm (UMIT SALI):** Makao'nun 1557'de Portekiz'e geçişi egemenlik kaybı DEĞİL. Öneri: `s:` 1557 →
  1887-12-01 arası `ming-hanedani` / `qing-hanedani` kalsın (Portekiz yerleşimi `v:`/statü notuyla
  gösterilebiliyorsa "Portekiz kiracı yerleşimi" diye); Portekiz egemenliği **1887-12-01** (Pekin'de
  imzalanan antlaşma; gün KASA'da antlaşma metniyle teyit) başlasın. İkinci kaynak: Porter, *Macau*
  (1996) KASA'da.
