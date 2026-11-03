# 27 · Yuan Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: top100_olc.py yuan-hanedani; zh.wikisource Yuan shi okumaları; ganzhi→Jülyen dönüşümü bu ajanın JDN hesabı, "doğrulanmadı" ibaresiyle)

## Özet
- Künye: 1 ana (`yuan-hanedani`) + 2 ilişkili (`kuzey-yuan`, `sakya`; Güney Song künyesi bu denetimin dışı). Yerleşim 111 kayıt; 1280'de 32 → 1285'te 108 (1281 öncesi geriye uzatma eksik), en geniş an 1330 (109).
- Kırılma 28, AÇIK 12 (kronolojisi olmayan). Eksik madde önerisi: 9.
- En ağır 3 bulgu:
  1. **1351-1368 arası sahiplik tarihsel olarak yanlış görünüyor:** atlas Nanjing, Hangzhou, Suzhou, Wuchang, Changsha, Nanchang, Chengdu, Anqing... şehirlerini 1368-01-23'e (Ming kuruluşu), Fuzhou/Guangzhou/Xi'an/Luoyang/Kaifeng'i 1368-04-01'e, Dadu vb.'ni 1368-09-14'e kadar Yuan sayıyor. Oysa 1351 Kızıl Sarıklı ayaklanmasından sonra güney ve Yangtze havzası Yuan'ın elinde değildi (Zhu Yuanzhang, Chen Youliang, Zhang Shicheng, Fang Guozhen bölgeleri); Yunnan/Dali/Kunming ise Yuan sadıklarında 1381-82'ye kadar kaldı (atlasta 1368-09-14'te kesiliyor). Bunlar "bilinen genel anlatıdır" — bu oturumda kaynakla okunamadı, Cambridge History of China cilt 7 (Ming) ile doğrulanmalı. Atlas hem "erken Ming" hem "geç Yuan" yönünde tek tarih kullanıyor (üç tarih: 01-23, 04-01, 09-14 = Ming'in kuruluş/ilerleme tarihleri, şehirlerin gerçek el değiştirme günleri DEĞİL).
  2. **1281 öncesi Song fethi yarım:** 1280'de yalnız 32 yerleşim Yuan; 1285'te 108. Song'un 1276-1279 çöküşünde ~76 yerleşim 1281-01-01'e kadar başka sahipli (Song/boşluk). Yamen/Song'un sonu (1279-03-19) evrende madde değil; yalnız künye içi (evren dışı) satırda var.
  3. **Açık kırılmaların 6'sı Ming-geçişi, 3'ü Kore/Tibet kaybı:** 12 açığın 4'ü 1368 günü (Ming'in yerleşim tarihleri için madde yok); Tibet 1354 maddesi (`kronoloji_sinir_asya.js:19`, 1354-01-01) VAR ama ölçer 31 gün gösteriyor (alaka eşleşmesi yer/odak filtresinden düşüyor olabilir — doğrulanmadı).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| yuan-hanedani | Yuan Hanedanı (Moğol Çin) | 1260-01-01 | 1368-09-14 | ana künye; `ic_not_f`: f=Kubilay'ın han seçildiği yıl (Britannica 5 Mayıs 1260), yıl hassasiyeti |
| kuzey-yuan | Kuzey Yuan (Moğol Hanlığı) | 1368-09-14 | 1691-05-30 | ardıl; bitişik, ayrı denetim konusu |
| sakya | Sakya Yönetimi | 1264-01-01 | 1354-01-01 | ilişkili; bitişi Phagmodrupa 1354-01-01 maddesiyle uyumlu |
| (Güney Song) | — | — | — | `song` künyesi ayrı; Yuan'ın 1276-1279 fethi ona bağlı |
Eksik parça: Yunnan'da 1368-1382 Yuan sadıkları (Liang Wang Basalawarmi) ve Liaodong'da Nahaçu (1387'ye dek) için "ardıl künye" gerekebilir — ayrıca Kuzey Yuan künyesinin kapsamına girip girmediği kontrol edilmeli (bu oturumda kontrol edilmedi). Ayrıca Goryeo'nun Yuan'a tâbiiyeti (`tabi:` ilişkisi) bu künyede yok — gerekliliği tartışmalı, ölçülmedi.

## b) f/t ve evreler
| uç | atlas değeri | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| f (Kubilay han) | 1260-01-01 (yıl) | Yuan shi j.4 «中統元年 春三月…辛卯，帝即皇帝位» (atlas künye kronolojisi/sınır kaydı `kronoloji_sinir_dogu_500_1281.js:9101` okundu, ben juan 4'ü çekmedim) = Jülyen 1260-05-05 | Britannica "Kublai Khan" (künye ic_not_f'den; 403, okunamadı) | Doğru yönde; ama f=1260-01-01 uydurma gün. Sınır kaydında zaten `1260-05-05` kullanılmış; `mogol-imparatorlugu` t ile bitişik olmak için 01-01 seçilmiş. TDV `kubilay-han` (aranan sayfa): yalnız "(1260-1294)" aralığı okundu. | f `1260-05-05`, kesinlik gün (Jülyen, Yuan shi j.4); `mogol-imparatorlugu` t aynı güne çekilmeli (ortak künye düzeltmesi; diğer ajanla çakışma kontrolü). |
| Yuan adı | künye kron. `1271-01-01` (evren dışı); evrende `olaylar_ortacag_cin.js:70` `1271-12-18` | Yuan shi j.7: «建國號曰大元» (`olaylar_ortacag_cin.js:70` alıntısı; Jülyen çevrimi o madde ic_not_d'sinde) | — | Evrendeki 1271-12-18 doğru; künye içi (evren dışı) `kronoloji:` satırı 1271-01-01 yazmış — tutarsız. | `devletler.js` yuan-hanedani kronoloji `t:"1271-01-01"` → `"1271-12-18"`. |
| Dadu (Zhongdu adı) | `1272-03-04` | `olaylar_ortacag_cin.js:71` | — | Evrende var; kaynağı o madde taşıyor, tekrar okunmadı. | — |
| Hangzhou (Lin'an) | `1276-02-04` | Song shi j.47: «甲申，大元兵至皋亭山，遣…上傳國璽降» (`kronoloji_sinir_once1281_yerlesim_asya_iran.js:47` okundu) | Yuan shi (juan 9; çekilmedi) | Hangzhou Yuan'a 1276-02-04 (Jülyen) geçti; Song'un resmî teslimi. Doğru. | — |
| Güney Song'un sonu | künye kron. (evren dışı) `1279-03-19` | Yuan shi j.10 (zh.wikisource, okundu): «…張弘範將兵追宋二王至崖山寨…廣王昺偕其官屬俱赴海死» — sayfa özeti ay olarak "春正月 甲戌" verdi; ben hesapladım: 甲戌 Jülyen'de 1279-01-09 veya 03-10'a düşer, 正月 (Şubat başı) ile uyuşmuyor → **özet/okuma hatası olasılığı, doğrulanmadı** | Standart tarih: Yamen 19 Mart 1279 (癸未 = Jülyen 1279-03-19, ganzhi hesabım; Song shi okunmadı) | Gün çelişkisi çözülmedi; 19 Mart 1279 en yaygın değerdir ama ikinci akademik kaynak okunamadı. | Maddeyi evrene `kesinlik:"ay"` (1279-03-01) veya gün (1279-03-19) olarak koy; ic_not'a "Yuan shi j.10 ve Song shi j.47 gün çelişkisi KASA'da çözülsün". |
| t (Dadu'nun düşüşü) | `1368-09-14` | Yuan shi j.47 (okundu): «八月庚（申）〔午〕，大明兵入京城，國亡» — sayfa notu: «庚申» düzeltilmiş «庚午» (ay 己巳朔) | Ming shi j.2 (zh.wikisource 404, okunamadı) | 庚午 = Jülyen 1368-09-14 (JDN hesabımla doğrulandı; 己巳朔 = 09-13). Atlasın `1368-09-14` değeri ganzhi ile tutarlı. Toghon Temür'ün kuzeye kaçışı: «閏月 丙寅 …開健德門北奔» = Jülyen 1368-09-10 (hesap). | Künye t doğru. Evrene madde: `{ t:"1368-09-10", b:"Toghon Temür Dadu'dan kuzeye kaçtı", yer_id:"Pekin (Hanbalık)", kaynak:"Yuan shi j.47 (zh.wikisource.org/wiki/元史/卷047), «帝御清寧殿…開健德門北奔»; ganzhi 丙寅→Jülyen: hesap, doğrulanmadı" }` (Ming'in girişinden 4 gün önce). |
| Ming kuruluşu (komşu künye) | ming-hanedani f `1368-01-23` | Ming shi (okunamadı); hesap: 乙亥 = Jülyen 1368-01-23 ✓ | — | Tutarlı (14 numaralı ajanda). | — |
| Kızıl Sarıklı | künye kron. (evren dışı) `1351-01-01` | Yuan shi j.42 (okundu): «辛亥，潁州妖人劉福通為亂，以紅巾為號，陷潁州» (至正11, 五月) = Jülyen 1351-05-28 (hesap, ay bağı doğrulanmadı) | — | Künye içi satır yıl; gün biliniyor. | Evrene madde: `{ t:"1351-05-28", b:"Liu Futong Yingzhou'da Kızıl Sarıklı ayaklanmasını başlattı", yer_id:"Xinyang"... }` (yer_id Yingzhou/Fuyang için yerleşim yok; Xinyang yakın) — gün hesabı doğrulanmadı. |
| 1276-1279 evre sonu | — | — | — | Evre sınırları: 1260-1276 (Moğol fethi sürüyor), 1276-1279 Song direnişi, 1279 sonrası birleşik Çin. Yerleşim sayısı bu evrelemeyi yansıtmıyor (1280'de 32). | Aşağıda (d). |
Güvenilirlik notu: f/t için "2 bağımsız akademik kaynak" yalnızca t (Dadu) için kısmen sağlandı (Yuan shi birincil + gün hesabı); Britannica 403, CHC erişilemedi.

## c) Kronoloji
Var olanlar (evren): Kubilay Yangtze'yi geçti 1259-09-27 (`olaylar_ortacag_cin.js:68`) · Xiangyang çevre kalesi 1270-08-18 (`:69`) · Yuan adı 1271-12-18 (`:70`) · Dadu 1272-03-04 (`:71`) · Hangzhou 1276-02-04 · Yangzhou 1276-08-23 (sınır) · Fuzhou 1276-12-29 · Chongqing 1278-02-23 · Moğol/Japonya seferleri 1274, 1281 (`olaylar_ortacag_dogu_guneydogu_asya.js:44-45`, yıl) · Jeju 1273-05-16 (`:43`) · Pagan 1273/1277 (`kronoloji_sinir_amerika_afrika3_1024.js:21-22`) · Phagmodrupa/Tibet 1354-01-01 (`kronoloji_sinir_asya.js:19`) · Leshou Ming'e 1368-09-14 (sınır). Künye içi `kronoloji:[...]` (1260-05-05, 1271, 1279-03-19, 1351, 1368-09-14) evren dışı.
Eksik/öneri:
1. Güney Song'un sonu (Yamen) 1279-03-19 (gün çelişkisi notlu) — yukarıda b).
2. Yuan'ın Dadu'dan kaçışı 1368-09-10 — yukarıda.
3. Kızıl Sarıklı başlangıcı 1351-05-28 — yukarıda (hesap).
4. Ming'in şehir şehir ilerleyişi: Nanjing (Zhu Yuanzhang aldı **1356**, Jülyen 1356-04-10 — genel anlatı; kaynak okunmadı), Hangzhou, Suzhou (1367), Wuchang (1364), Nanchang (1363?) — **kaynak okunmadı**, yalnız aday olarak yazıldı; her biri CHC 7 / Dreyer, *Early Ming China* (1982) ile doğrulanmadan yazılmamalı.
5. Goryeo'nun Ssangseong'u geri alması (Hamhung, Wonsan; atlas `1356-08-05`, ölçer AÇIK): Goryeosa (Kore birincil) / TDV değil; kaynak okunmadı. Öneri: `{ t:"1356-0?-??", b:"Gongmin Wang Ssangseong Darugachi'liğini geri aldı", yer_id:"Hamhung" }` — gün BİLİNMİYOR, yıl hassasiyeti `1356-01-01`.
6. Jeju (Tamna) 1356-01-01 ayrılışı: tarihsel olarak Jeju Yuan'dan 1356'da değil 1367-70'lerde Goryeo'ya geçmiş olabilir (Tamna'nın Mongol Ming dönemi karışıklığı); atlas kaydı kaynaksız göründü — doğrulanmadı.
7. Shunning (Fengqing) 1327-01-01 kazanç (Yunnan): Yuan'ın 1327'de bu yeri kazandığına dair kaynak yok; kaynak/gerekçe okunmadı.

## d) Harita uyumu
- Kırılma 28; AÇIK 12 (listelenen):
  | gün | yerleşimler | öneri |
  |---|---|---|
  | 1327-01-01 | Shunning (Fengqing) kazanç | gerekçe ara (Yunnan, Yuan'ın İpek yolu? kaynak yok) — madde yoksa dönemi kaldır/`__BOSLUK__` |
  | 1351-01-01 | Xinyang kayıp | Kızıl Sarıklı 1351-05-28 maddesi + Xinyang hangi güce geçti? (Henan'da Han Song, Liu Futong) — kaynak aranmalı; mevcut `d:` hedefi kontrol edilmeli |
  | 1354-01-01 | Gyantse, Lhasa, Çamdo, Şigatse | madde `kronoloji_sinir_asya.js:19` zaten 1354-01-01; ölçer 31 gün gösteriyor → alaka eşlemesi (yer/odak_yer) kontrol: madde `odak_yer`: Lhasa, Yarlung — Gyantse/Şigatse/Çamdo yok. Madde `odak_yer`'ine bu üçünü ekle. |
  | 1356-01-01 | Jeju | yukarıda c.6 |
  | 1356-08-05 | Hamhung, Wonsan | Kore Ssangseong; günü Goryeosa'dan (Jülyen) bulun; atlas 08-05 kaynaksız görünüyor |
  | 1356-09-17 | Hengyang (Hengzhou) | Güney (Hunan) Yuan'dan Kızıl Sarıklı/Chen/Zhu'ya; kaynak aranmalı |
  | 1358-06-19 | Ji'an (Jizhou) | Zhu Yuanzhang/Chen Youliang bölgesi; kaynak aranmalı |
  | 1358-11-01 | Ganzhou | aynı |
  | 1368-01-23 | Anqing, Changsha, Hangzhou, Hefei... | Ming kuruluş günü şehir devri değil; aşağıdaki sorun (b özet #1) |
  | 1368-04-01 | Amoy, Beihai, Chaozhou, Danzhou ... | aynı |
  | 1368-06-29 | Chenzhou (Hunan) | aynı (en yakın madde "Ming…Leshou" 77 gün) |
  | 1368-09-14 | Alaşa kuzeyi, Anyang, Baoding, Bayanhongor | Dadu düşüşü; Ming→Leshou maddesi mevcut (1368-09-14), Anyang/Baoding/Bayanhongor odak_yer'e eklenebilir; Bayanhongor (Moğolistan) Yuan'dan Kuzey Yuan'a geçmeli, Ming'e değil. |
- **Yerleşim kapsamı:** 1260:17 · 1275:23 · 1280:32 · **1285:108** · 1330:109 · 1355:104 · 1365:98. İlk 20 yılda Yuan sahipliği yalnız 32 (Song 1276-79 sonrası 76 yerleşimin ilk Yuan günü 1281-01-01'e dayanıyor, `f:"1281-01-01"` ufuk işareti). Gerçekte Song'un resmî çöküş günleri (Hangzhou 1276-02-04, Fuzhou 1276-12-29, Guangzhou 1278-12-29, Yamen 1279-03-19) başka şehirler için de var; 76 yerleşim için `f` tarihleri kaynaklı bulunmalı.
- **En geniş yıl (1330) sahiplik kontrolü:** Çin'in tamamı, Moğolistan (Karakurum, Kobdo, Kerulen...), Liaodong, Kuzey-Doğu Tibet (Lhasa, Şigatse 1281-1354 — Sakya/Yuan himayesi; atlas Yuan, makul: TDV/Britannica "Tibet Yuan'a bağlı"), Yunnan (Dali, Kunming...), Ceccu (Jeju) 1281-1356. Kore'nin ana kütlesi atlasta Goryeo sayılıyor (Yuan'a vasal). Burada hata gibi görünenler: Penghu 1281-1368, Makao/Macau 1281-1368 (Makao Yuan dönemi pek anılmaz; sahipliği kaynaklı mı? kaynak okunmadı), Pyongyang 1269-11-26→1281-01-01 (Choe Tan'ın isyanı 1269-10-29 → Moğol Pyongyang'ı; sonrası 1281 sonrası Pyongyang 'Yuan'da' değil Goryeo'ya iade 1290; atlasta 1281 sonrası kaydı yok → muhtemelen sahipsiz/başka künyeye geçiyor, bu oturumda ölçülmedi).
- **Ming-geçiş sorunu (özet #1):** Hangzhou 1368-01-23, Suzhou 1368-01-23 gibi kayıtlar Yuan'ın bu şehirleri 1368'e kadar elinde tuttuğunu gösteriyor → tarihsel olarak yanlış (Hangzhou 1359'da Zhang Shicheng, 1367'de Zhu Yuanzhang). Çözüm: şehir bazlı bağımsız `s:` dilimleri (Zhu Yuanzhang/`wu` ardıl künyesi, `han-chen`, `dayuan`... künyeleri henüz yok; `Ming'in öncülleri` için ardıl künye gerekli) ya da "Yuan'ın nominal sahipliği beyanı" ile dönemlere `__BOSLUK__` yaz (beyanlı boşluk, Berat vakası).

## Önerilen düzeltmeler (KASA için)
- `data/devletler.js` yuan-hanedani f `1260-01-01`→`1260-05-05` (gün; mogol-imparatorlugu t ile birlikte), `kronoloji:` 1271-01-01→1271-12-18.
- Yeni madde `data/olaylar_ortacag_cin.js`: 1279-03-19 Yamen (Song'un sonu; ic_not Yuan shi j.10 ile Song shi arasındaki gün çelişkisi), 1368-09-10 Toghon Temür'ün kaçışı, 1351-05-28 Kızıl Sarıklı (hesap doğrulanmadı).
- `data/kronoloji_sinir_asya.js:19` `odak_yer`'e `Gyantse`, `Şigatse`, `Çamdo (Chamdo)` ekle (açık 1354 kapanır).
- `data/kronoloji_sinir_dogu_500_1281.js:9127`-benzeri Ming maddelerinin `odak_yer`'ine 1368-09-14 listesindeki Anyang/Baoding eklenebilir; Bayanhongor için ayrı Kuzey Yuan maddesi (Yuan→Kuzey Yuan, Ming değil).
- 1351-1368 Yangtze ve güney şehirleri için ardıl künye (`wu-zhu-yuanzhang`, `han-chen-youliang`, `zhang-shicheng-wu`, `ming-xia-chengdu`) ve şehir bazlı s: — büyük iş, KASA/Emre kararı; önce kaynak (CHC 7, Dreyer 1982, Mote 1999 *Imperial China*).
- Yunnan t `1368-09-14` → Yuan sadıkları 1381-82'ye kadar (Ming'in Yunnan seferi, genel anlatı); kaynak okunmadı — önce doğrula.
- 76 yerleşimin 1281 öncesi Yuan `f` tarihleri (1276-79 arası) için şehir bazlı kaynak taraması.

## Erişilemeyen kaynaklar
- Britannica, "Kublai Khan" / "Yuan dynasty" (HTTP 403).
- Twitchett–Fairbank (eds.), *The Cambridge History of China* vol. 6, *Alien Regimes and Border States, 907-1368* (1994) — soru: Yamen tarihi (19 Mart 1279) ve Song'un sonu; Yuan'ın 1368 çöküşünün gün sırası.
- *The Cambridge History of China* vol. 7, *The Ming Dynasty 1368-1644, Part 1* (1988), "Early Ming" — soru: Zhu Yuanzhang'ın Nanjing (1356), Hangzhou, Wuchang, Suzhou alışları; Yunnan 1381-82.
- Song shi j.47 (Gong di ji) ve Song shi j.47 "Duanzong/Bing" kayıtları — soru: Yamen günü (二月癸未?).
- Ming shi j.2 ("Taizu 2"; zh.wikisource 404) — soru: 洪武元年 乙亥 (1368-01-23) ve 八月庚午 Dadu girişi.
- Goryeosa (高麗史) 恭愍王 5년 — soru: Ssangseong'un geri alınma günü (atlas 1356-08-05).
- TDV `kubilay-han` (yalnız aralık özeti okundu).
