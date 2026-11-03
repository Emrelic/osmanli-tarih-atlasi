# 55 · Tibet İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04

## Özet
- Künye 2 id, 1 devlet: `tibet-imparatorlugu` (4 yerleşim kaydı) ve `tubo-tibet-imparatorlugu` (0 yerleşim, ama kronoloji `taraflar` listesinde var). İkisi de f=0629-01-01, t=0842-01-01; künye ic_not_f "AYNI DEVLET" diyor. Öncül `yarlung-krallik` (-0126→0629) ve ardıllar `guge`, `sakya`, `tibet`, `tibet-ganden-phodrang` ayrı.
- Ölçer: kırılma 4, AÇIK 0. En geniş an 679-689: 4 yerleşim; öteki yıllarda 1 (pratikte Tibet İmparatorluğu haritada ~yok).
- Eksik kronoloji maddesi 3 (821/822 antlaşma günü; Hexi'nin ele geçirilişi 764-786 evreleri; Dunhuang 786-848). Evrende 629, 634, 641, 670, 763-11-18, 821 (yıl), 842 (yıl) var.
- En ağır 3 bulgu: (1) mükerrer künye (`tubo-tibet-imparatorlugu` öksüz id; `kronoloji_sinir_dogu_500_1281.js:532` bu ölü id'yi taraf diye kullanıyor; asıl künye `tibet-imparatorlugu`) — birleştir; (2) Tibet'in tepe dönemi (780-840: Hexi, Dunhuang, Khotan, Kucha, Turfan, Qinghai, Sichuan batısı) haritada neredeyse boş; Dunhuang yerleşiminde 0400→0851 arasında hiç dilim yok (yerlesimler_asya.js:2289, Tibet 786-848 eksik); (3) f=629 için tek akademik kaynak (Britannica, erişilemedi), ikinci kaynak yok; künye notları EBSCO (627) ve Britannica (629) çelişkisini beyan ediyor ama ikisi de akademik hakemli değil.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| tibet-imparatorlugu | Tibet İmparatorluğu (Tubo / Yarlung) | 0629-01-01 | 0842-01-01 | ASIL; 4 yerleşim kaydı (Kâşgar 670-04-25→692-11-14 vb.). |
| tubo-tibet-imparatorlugu | Tibet (Tubo/Tufan) İmparatorluğu — Yarlung hanedanı | 0629-01-01 | 0842-01-01 | MÜKERRER (aynı devlet; yerleşim yok). Kaynak: Beckwith 1987 + tibet.net. Kronolojide `taraflar`: kronoloji_sinir_dogu_500_1281.js:532 (Dunhuang 851 maddesi). |
| yarlung-krallik | Yarlung Krallığı | -0126-01-01 | 0629-01-01 | Öncül; f=-0126 (MÖ 127) Tibet gelenek tarihi: f için akademik kaynak bu oturumda araştırılmadı. t=0629 bu denetimin f'sine eşit: iyi. |
| guge | Guge | 1000 | 1630 | Ardıl bölgesel; ayrı. |
Evre eksiği: 842-1264 arası (Parçalanma Dönemi, Yumtan hanedanı Yarlung'da) — künye yok; yerleşim s: kaynaklarında "yerin sahibi belirsiz (beyanlı boşluk — Yarlung)" kronoloji :9251. Kabul.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f (629) | 0629-01-01 | Britannica «Srong-brtsan-sgam-po» (künye ic_not_f'de alıntı; bu oturumda ERİŞİLEMEDİ — britannica 403): "crowned 629". | Jiu Tang shu j.196 (zh.wikisource.org/wiki/舊唐書/卷196上; okundu): «貞觀八年，其贊普棄宗弄贊始遣使朝貢» (= 634, ilk elçi) — kuruluş değil, en erken Çin tanığı. | f için TEK akademik kaynak (Britannica, dolaylı); okunan Çin kaynağı 634'ü verir. 629 doğrudan teyitsiz. Künye ic_not_f 627 (EBSCO) ile 629 çelişkisini beyan ediyor. | İkinci akademik kaynak (Beckwith 1987, archive.org `tibetanempireinc0000beck`; Stein, Tibetan Civilization; CHC3'te Tibet) bu oturumda açılmadı: Erişilemeyen'e yazıldı. f değişmesin, "[tek kaynak; ikinci kaynak bekliyor]" ic_not'a yaz. |
| t (842) | 0842-01-01 | Xin Tang shu j.216 (zh.wikisource.org/wiki/新唐書/卷216下; okundu): «[會昌二年]，贊普死，論贊熱等來告，天子命將作監李璟吊祠» (會昌二年 = 842). | Künye ic_not_t: 842 (EBSCO, Tibet geleneği) vs 846 (Britannica 841-846) çelişkisi beyanlı. Jiu Tang/Xin Tang elçi haberi 842'yi destekler; Langdarma'nın ölümü ile 842 imparatorluk çöküşü ayrı olgudur. | Elçi tanığı 842'de zanpu ölümünü doğrular; "imparatorluk sonu"nu yıl 842 olarak almak Beckwith/EBSCO ile uyumlu, Britannica 846 ile çelişir (ikisi de akademik kaynak değil kesin). | Değişmez. ic_not_t'ye Xin Tang 216 «會昌二年» tanığı eklenmeli. Gün yok → 0842-01-01 korunur (YYYY-01-01 kuralı). |
| 763-11-18 | olaylar_ortacag_cin.js:32 (gün) | Jiu Tang shu j.196: «降將高暉引吐蕃入上都城…立…廣武王承宏為帝» «吐蕃居城十五日退» (廣德元年; sayfada ay/gün yok). | Atlas günü başka kaynaktan (Jiu Tang j.11 «Daizong ji»?) alınmış olabilir — bu oturumda açılmadı. | Gün doğrulanmadı; yıl 763 ✓ (廣德元年). | Kaynağı kontrol et; 15 günlük işgal için `s:` dilimi YAZMA (sıfır-uzunluk/yaprak kuralı): kronoloji maddesi yeterli. |
| 821/822 antlaşma | 0821-01-01 (yıl) (olaylar_ortacag_cin.js:33) | Xin Tang j.216下: «[長慶元年]…乃遣使者尚綺力陀思來朝，且乞盟，詔許之» (821) | Lhasa dikilitaşı 823 (Beckwith) — açılmadı. | Yıl 821 ✓; gün (Chang'an andı 821-10 ve Lhasa andı 822) kaynak okunmadı. | Gün için Jiu Tang j.16/17 «Muzong ji» ve Tibet dikilitaşı çevirisi okunmalı (Erişilemeyen). |

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar:
- data/kronoloji_sinir_dogu_500_1281.js:352 · 0629-01-01 · Songtsen Gampo tahta çıktı (yıl; Britannica atıf "açılmadı", TDV «Tibet» yılsız).
- :6256 · 0670-04-25 · Tibet Bahuan'ı aldı, Dört Garnizon kalktı (ay; Jiu Tang 5/198).
- :9251 · 0842-01-01 · Tibet egemenliği sona erdi (yıl, beyanlı boşluk Yarlung).
- data/olaylar_ortacag_cin.js:20 · 0634-01-01 elçi; :22 · 0641-01-01 Wencheng evliliği (Jiu Tang 196 «貞觀十五年» ✓ = 641); :25 · 0751-01-01 Nanzhao Tibet'e bağlandı; :32 · 0763-11-18 Chang'an; :33 · 0821-01-01 antlaşma; :34 · 0842-01-01 hükümdar ölümü bildirildi.
- :527 (kronoloji_sinir_dogu) · 0851-01-01 Dunhuang Guiyi Jun (taraflar: tubo-tibet-imparatorlugu).
- Künye içi `kronoloji:` (devletler.js:21053-): 755, 763, 815, 821, 836, 842 (EBSCO; evren dışı).

Eksik maddeler (öneri):
```
{ t:"0764-01-01", b:"Tibet Hexi Koridoru'nun kapısı Liangzhou'yu aldı; Ganzhou/Suzhou/Guazhou/Shazhou sırayla (766-786) Tibet idaresine girdi", yer_id:"Dunhuang", kesinlik:"yil", kaynak:"BU OTURUMDA OKUNMADI — Xin Tang shu j.216 上 (吐蕃傳) ve Beckwith 1987 bölüm 'Hexi' ile teyit edilmeli; yıllar (764 Liangzhou, 766 Ganzhou-Suzhou, 776 Guazhou, 786 Shazhou) hafızadan (doğrulanmadı)" },
{ t:"0848-01-01", b:"Zhang Yichao Shazhou'yu (Dunhuang) Tibet'ten aldı; Tibet'in Hexi'deki son dayanağı çözüldü", yer_id:"Dunhuang", kesinlik:"yil", kaynak:"künye ic_not (kronoloji_sinir_dogu_500_1281.js:550) 848'i verir ama maddenin kendisi 851 (Tang tanıması); 848 için kaynak bu oturumda okunmadı" },
{ t:"0821-10-01", b:"Chang'an'da Tang-Tibet antlaşmasının andı içildi (Tibet 822'de Lhasa'da tamamladı)", yer_id:"Xi'an (Chang'an)", kesinlik:"ay", kaynak:"Xin Tang j.216下 «長慶元年…乞盟»; ay/gün için Jiu Tang j.16 okunmadı — doğrulanmadı" },
```
Bu üç madde "öneri": ay/gün ve 764-786 yılları teyitsiz; KASA uygulamadan önce Jiu Tang j.196下/Xin Tang j.216上'dan okumalı.

## d) Harita uyumu
- Ölçer: kırılma günü 4 (0629-01-01, 0670-04-25, 0692-11-14, 0842-01-01), AÇIK 0.
- En geniş an 679-689: 4 yerleşim (Kâşgar 670-04-25→692-11-14 + Khotan/Kucha dilimleri; yerlesimler_asya.js:2882, Khotan/Kucha dilimleri 0649-01-19/0670-04-25 sonrası Tibet'e yazılı görünüyor). Diğer yıllar 1: Lhasa tek.
- Haritada görünmeyen: Dunhuang (yerlesimler_asya.js:2289 — `0397-01-01→0400-01-01` kuzey-liang ile `0851-01-01` guiyi arasında 451 yıl dilimsiz, Tibet 786-848 yok); Turfan/Beiting (Tibet 790-?); Khotan ve Kucha'nın 692-851 sahipliği; Hexi (Liangzhou, Ganzhou, Suzhou); Qinghai/Xining (Tibet'in Tang'a komşu çekirdeği); Chang'an kısa işgali 763 (dilimsiz kalmalı).
- Öneri s: dilimleri (kaynaklar okunduktan sonra): Dunhuang `786→848` ve Khotan/Kashgar/Kucha 700-850 evreleri `tibet-imparatorlugu`; Lhasa 629→842 (varsa); Qinghai (Xining) 670→848. Kaynak sırası: Jiu Tang j.196/198, Xin Tang j.216, Tibetli Dunhuang belgeleri; Beckwith 1987.
- Tutarsızlık: kronoloji :527 maddesinin `taraflar`ında `tubo-tibet-imparatorlugu` ve gövdesinde "(Dunhuang sahibi tubo-tibet-imparatorlugu → guiyi-jun-dunhuang)" yazıyor ama Dunhuang yerleşiminde bu sahiplik dilimi yok; ölçer 0 yerleşim sayıyor — madde ile harita arasında Değişmez 2 çerçevesinde ayrışma (kronolojide anlatılan sahiplik haritaya yazılmamış).

## Önerilen düzeltmeler (KASA için)
1. data/devletler.js:21368 `tubo-tibet-imparatorlugu` künyesini sil ya da `ic_not`ta "tibet-imparatorlugu'na birleşti" yaz; kronoloji_sinir_dogu_500_1281.js:532 ve kronoloji_cok_ms1_1000_asya.js (9 kullanım), sehir_tarihce_k12.js (1) dosyalarında `tubo-tibet-imparatorlugu` → `tibet-imparatorlugu` yap (id birleşimi). Önce paket (paket_05.js) ve denetle etkisini ölç.
2. data/yerlesimler_asya.js:2289 Dunhuang: 0400→0851 boşluğu için kaynak ara; Tibet dilimi 786→848 (kaynak okunduktan sonra), 848→851 Guiyi öncesi.
3. data/devletler.js:21053 `tibet-imparatorlugu` ic_not_t: Xin Tang j.216 «會昌二年» tanığını ekle.
4. c) bölümündeki üç öneriyi yazmadan önce kaynak teyidi.

## Erişilemeyen kaynaklar
- Beckwith, The Tibetan Empire in Central Asia (Princeton 1987) — archive.org id `tibetanempireinc0000beck` (bulundu, metin açılmadı): sorular — Songtsen Gampo'nun tahta çıkış yılı (627/629), Hexi (764-786) ve Dunhuang 786 ele geçirişi, 821/822 antlaşma günü, 842 sonu.
- Britannica «Srong-brtsan-sgam-po» ve «Tibet» (403): 629 ve 841-846.
- Jiu Tang shu j.196下 (zh.wikisource.org/wiki/舊唐書/卷196下): 763 sonrası olaylar, Hexi, 821-822 and.
- Jiu Tang shu j.11 «Daizong ji» (zh.wikisource.org/wiki/舊唐書/卷11): 763-11-18 gün teyidi.
- Stein, Tibetan Civilization (1972) ve Cambridge History of Early Inner Asia (1990), «Tibet» bölümü: 629 f için ikinci akademik kaynak.
- TDV «Tibet» (islamansiklopedisi.org.tr/tibet): bu oturumda açılmadı; kronolojide "yıl vermez" notu mevcut.
