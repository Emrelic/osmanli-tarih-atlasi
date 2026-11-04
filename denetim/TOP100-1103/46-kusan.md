# 46 · Kuşan İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100 (HEAD d773b144d), 4 Kasım 2026; ölçer top100_olc.py + elle ayrıştırma

## Özet
- Künye 1 (kusan, 0050→0350) + ayrı komşu kusan-sasani (0230→0360, "Kuşanşahlar"; karıştırılmadı). Açık kırılma 0 (2 kırılma: 78 ve 250, ikisi de maddeli).
- Haritada **tek nokta** var: Peşâver (0078→0250). Künyenin başkenti «Bagram → Peşaver» ama Bagram'ın `s:[]`, `bos:"veri-yok"` (data/yerlesimler_once1281_yt_iran_orta_asya.js:35), Belh -0124→0500 beyanlı `__BOSLUK__`, Mathura/Taksila/Kabil dönemleri 1281'den başlıyor ya da yok. Kuşan topraklarının tamamı boş.
- Künye iç çelişkisi: `ozet` «Kanishka tarihi tartışması: Falk 127», ama kronolojideki «Kanishka tahta çıktı» maddesi 0078 (Majumdar 1951) ve Peşâver s: f=0078 buna dayanıyor. Çağdaş akademik görüş 78'den uzaklaşmış durumda (Neelis, UW Silk Road: «scholarly consensus seems to be shifting away from the traditional date of 78 CE»; HCCA II Puri 1994: «remains hotly disputed»).
- t=0350 / harita 0250: Peşâver 250'de bırakılıyor (Majumdar, «yaklaşık 3. yy ortası»), Sasani iddiası (Şapur I Ka'be-i Zerdüşt «Pushkabur'a kadar»; Puri: fetih 224-262 arası, tarih belirsiz). 250→1000 Peşâver `__BOSLUK__` beyanlı (750 yıl).
- En ağır 3: (1) tek yerleşim = Kuşan haritada yok sayılır; (2) f=0078 Kanishka dayanağı künyenin kendi özetiyle çelişir; (3) Peşâver 250→1000 uzun beyanlı boşluk (Kuşano-Sasani/Kidar/Eftalit zinciri okunmadı).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| kusan | Kuşan İmparatorluğu | 0050-01-01 | 0350-01-01 | var |
| kusan-sasani | Kuşano-Sasani Krallığı (Kuşanşahlar) | 0230-01-01 | 0360-01-01 | ayrı devlet; kaynağı iranologie.com (popüler site; dayanak değil) |
Eksik evre: «Erken Kuşanlar / Kujula-Vima Takto-Vima Kadphises (c. 50-127?)» ve «Geç Kuşanlar (Vasudeva sonrası, Pencap/Kuzeybatı, c. 250-350)» ayrı künye gerektirmez; ama Geç Kuşanlar/Kipunada (Majumdar: Gupta öncesi) kaynağı yok.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm / öneri |
|---|---|---|---|---|
| f | 0050 (kesinlik yüzyıl) | B. N. Puri, «The Kushans», History of Civilizations of Central Asia vol.II (UNESCO 1994): Kujula Kadphises yabghu olarak Yuezhi'yi birleştirdi; tarihli yazıtlar A.D. 45, 64, 78 (archive.org kushans-1994-hcca, okundu) | ANS kataloğu: sikkelerde c. MS 50, Kujula ilk kral (künye kaynağı; sayfa URL'si verilmemiş); Majumdar (ed.), History and Culture of the Indian People vol.II (1951): Kujula 40-77 (arşiv.org ageofimperialuni07bhar; atlas kronolojisinde atıf) | Kabul: c. 45-78 aralığı içinde; f=0050 kalır, kesinlik "onyil"e inebilir. Puri'nin yazıt örneklerinin kime ait olduğu (Takht-i Bahi genelde Gondophares'e atfedilir; bu bilgi kaynakla doğrulanmadı) okunmadan «45 = Kujula» yazılmamalı. |
| Kanishka çağı | 0078 maddesi | Majumdar 1951 s.144: «Kanishka ruled from A.D. 78 to A.D. 101 or 102» | Falk 2001 (künye ozeti: 127) — atlas ozetinde ve WebSearch özetinde görüldü, birincil okunmadı; Neelis (UW Silk Road): konsensüs 78'den ayrılıyor; Puri 1994: 78, 103, 142, 144, 232, 248/49, 278 önerileri | **Çelişki.** Önerim: «Kanishka tahta çıktı» maddesi 78 diye yazılamaz; ya t=0127 (Falk, Rabatak yazıtı) ya da madde Kanishka'dan bağımsız «Peşâver'in Kuşan denetimine girmesi» diye yeniden yazılmalı. Peşâver f=0078'in doğrudan dayanağı Hiuen Tsang geleneği (Majumdar s.142) ve Kanishka 78; bu dayanak, künyenin kendi ozetine göre zayıflamış. |
| t | 0350 | Majumdar s.152: Vasudeva (145-176) sonrası halefleri Pencap/Kuzeybatı/Afganistan'da «about the middle of the third century»e dek tam denetim | Puri 1994: Kuşano-Sasani prensleri kuzeyde Kuşan hanedanının yerini aldı; Gupta kuruluşu 319; Şapur II zaferi (c. 4. yy) | Künye t=0350 «Kipunada 350-375» (Vikipedi, dayanak olamaz) → Majumdar-Puri çerçevesinde Büyük Kuşan siyasî birliği ~250-270'te biter, Geç Kuşanlar 4. yy'a uzanır. Öneri: t'yi 0350 yerine yıl düzeyinde beyanla bırak; `ic_not`a «Büyük Kuşan 3. yy ortası, Geç Kuşan 4. yy» yaz; Vikipedi gerekçesini sil. |
| Sasani fethi (komşu künye) | kusan-sasani f=0230 | Puri 1994: Ardeşir/Şapur I saldırısı, fetih 223-262 arası bir tarih | Rezakhani, «The Kushans and the Sasanians», ReOrienting the Sasanians (Edinburgh UP 2017) s.46-71: Şapur'un yazıtı Kushanshahr'ı «Pushkabur'a kadar» sayar, yıl yok | f=0230 yalnız iranologie.com/UNESCO bağlantısına dayanıyor; aralık 224-262, önerilen beyan: onyil. |
Takvim: Jülyen/Gregoryen sorunu yok (MS 1.-4. yy). Kanishka çağı tarihleri yıl düzeyinde.

## c) Kronoloji
Var (evren içi): asya_zincir_1024.js:49 `0078` Kanishka tahta çıktı (Peşâver başkent; kesinlik onyil; Majumdar s.142, 144); :54 `0250` Kuşan kontrolünün sonu (Majumdar s.152).
Yok / eksik:
```
{ t:"0127-01-01", gun:"c. 127 (Falk 2001); Majumdar 1951: 78", kesinlik:"onyil", devlet:"kusan", b:"Kanishka tahta çıktı (çağ başlangıcı tartışmalı): Kuşan İmparatorluğu en geniş sınırlarına", yer_id:"Peşâver", kaynak:"Falk 2001 (atlas ozeti); Neelis, UW Silk Road: konsensüs 78'den ayrılıyor; Puri, HCCA II 1994: çağ 'hotly disputed'" }  // 0078 maddesi yerine ya da yanı sıra
{ t:"0050-01-01", kesinlik:"onyil", devlet:"kusan", b:"Kujula Kadphises Yuezhi yabghu'larını birleştirdi: Kuşan krallığının başlangıcı", yer_id:"Belh", kaynak:"Puri 1994 (Hou Hanshu özeti); ANS sikke kataloğu" }
{ t:"0230-01-01", kesinlik:"onyil", devlet:"kusan-sasani", b:"Sasani Ardeşir/Şapur Kuşan ülkesinin batısını (Baktriya) aldı: Kuşano-Sasani yönetimi", yer_id:"Belh", kaynak:"Puri 1994 (fetih 223-262 aralığında); Rezakhani 2017", ic_not_d:"gün/yıl tartışmalı" }
```
(Son madde kusan-sasani'ye ait; bu dosyada yalnız 250 kırılmasının nedeni için yazıldı.)
Not: Kuşan t=250 kırılmasını karşılayan madde var, ama maddenin yer_id'si Peşâver ve açıklamada «Sasani baskısı bu pakette yazılmadı»; nedeni kaynaksız.

## d) Harita uyumu
- Açık kırılma: 0 (2 kırılma maddeli). Madde-harita yönü: Majumdar «3. yy ortası» ↔ Peşâver 250: uyumlu.
- Yerleşim: yalnız Peşâver (0078→0250). En geniş yıl 78 (1 nokta). Yani Kuşan imparatorluğu haritada tek şehirdir; en geniş dönemde (c. 127-230) Baktriya (Belh, Termez, Bagram), Gandhara (Taksila, Peşâver), Mathura, Kabil, Kandahar, Doğu Türkistan (Kaşgar, Hotan — Kuşan hâkimiyeti tartışmalı) Kuşan'dı. Mevcut ölçüm:
| gün | yerleşim | durum | öneri |
|---|---|---|---|
| 150 | Belh | `__BOSLUK__` -0124→0500 (beyanlı: «bu pakette kaynak okunmadı»; yerlesimler_ek16.js:89) | Belh: kusan c. 0100? → 0230 (Kushano-Sasani'ye); kaynak: Puri 1994 (Baktriya Kuşan çekirdek); 2. kaynak Rezakhani 2017 / HCCA II. Kuşan hâkimiyetinin Belh'te başlangıç günü okunmadı → beyanlı yaklaşıklık. |
| 150 | Bagram | `s:[]`, `bos:"veri-yok"` (yt_iran_orta_asya.js:35) — künyenin başkenti | kusan künyesi başkenti Bagram (Kapisa): s: kusan c. 78/127→250 + beyan (kaynak: Majumdar s.142 Hiuen Tsang Gandhara; Bagram'ın kendisi okunmadı) |
| 150 | Termez (Tirmiz) | `s:[]`, bos veri-yok | HCCA II Mukhamedjanov bölümü (Orta Asya Kuşan çağı) okunmalı; Termez Kuşan şehri kabul edilir ama okunmadı |
| 150 | Mathura | s: 1281'den başlıyor (yerlesimler_asya.js:249) | Mathura Kuşan'ın 2. başkenti (Majumdar vol.II); s: kusan -> okunmadı; erişilemeyen listede |
| 150 | Ujjain | sakalar-bati-satraplar | Kuşan'a bağlı değil; Kanishka çağında Batı Satraplar bağımsız/vasal tartışmalı — dokunma. |
| 250→1000 | Peşâver | `__BOSLUK__` beyanlı (kusan sonrası) | Kuşano-Sasani (Şapur I yazıtı «Pushkabur»; Puri'ye göre fetih 224-262) → s: kusan-sasani 0250?→? ; sonrası Kidar/Eftalit/Hindu Şahi zinciri okunmadı: önce TDV hindusahiler + İSAM; erişilemeyen listede |
- Kuşan t=0350 künye, harita 250: fark (100 yıl) beyanlı değil. Öneri: künye `ic_not`'a «Peşâver s: 250'de biter; 250-350 Geç Kuşan, kaynak haritalanmadı» yaz.

## Önerilen düzeltmeler (KASA için)
1. data/kronoloji_sinir_asya_zincir_1024.js:49 — `t:"0078-01-01"` Kanishka maddesi: ya `t:"0127-01-01"` (Falk) ile değiştir ya da başlığı «Peşâver Kuşan denetimine girdi (Kanishka çağı c. 78-127, tartışmalı)» yap; Peşâver s: f aynı gün (0078/0127) olmalı (senkron).
2. data/devletler.js kusan: `ozet`ten Vikipedi Kipunada 350-375 atfını sil; `kaynak:`a Puri 1994 + Majumdar 1951 + Neelis ekle (ANS/UNESCO bağlantıları URL'siz); t için `ic_not` (Büyük Kuşan 250/Geç Kuşan 350).
3. data/yerlesimler_asya.js:521 Peşâver s: dönem (f 0078) ve ek yerleşimler için «Bagram, Belh, Termez, Mathura» s: dönemleri (yukarıda); hepsi `kesinlik:"onyil"` + beyan.
4. data/devletler.js kusan-sasani f=0230: kaynak iranologie.com/UNESCO bağlantısı dayanak olamaz; Rezakhani 2017 + Puri 1994'e bağla (bu denetimin kapsamı dışında; komşu not).

## Erişilemeyen kaynaklar
- Falk, Harry 2001, «The yuga of Sphujiddhvaja and the era of the Kuṣāṇas», Silk Road Art and Archaeology 7: Kanishka çağı 127 (atlas ozetinde atıf; birincil okunmadı). Soru: «Kanishka I çağının 1. yılı MS 127 mi, ve Rabatak yazıtı hangi yıllar?»
- Encyclopaedia Iranica «Kushan dynasty» (iranicaonline.org 403). Soru: «Kuşan ilk kral ve Sasani fethi için Iranica hangi tarihleri verir?»
- Rezakhani, ReOrienting the Sasanians (Edinburgh UP 2017) böl.3 «The Kushano-Sasanians in East Iran»: Cambridge Core özeti yıl vermiyor. Soru: «Kuşano-Sasani krallığının başlangıç yılı (Ardeşir 224-232 / Şapur I 240-270)?»
- Puri 1994 (HCCA II) metninin yalnız ilk 100.000 karakteri WebFetch ile okundu; Kuşan kronolojisi ve şehir listesi (Termez, Bagram, Mathura) için kalan bölüm okunmalı.
- UNESCO Silk Road «The Kushans» PDF'leri artık erişilebilir değil (301→unesco.org/en/silkroads).

## JSTOR teyidi (HAVVA SALI, tarayıcıdan, 4 Kasım 2026; aktarım)
- J. Cribb, «Numismatic evidence and the date of Kaniṣka I», *Problems of Chronology in Gandhāran Art*
  (Archaeopress 2018) s. 7 (açık erişim, JSTOR jj.15135994.7): Falk 2001'in «Kaniṣka I's year 1 to AD 127»
  önerisi «now widely accepted»; H. Falk, «Ancient Indian Eras: An Overview», *BAI* 21 (2007) s. 131-145.
  **Hüküm (UMIT SALI):** Kanişka 1. yılı **MS 127** (iki akademik kaynak); Majumdar'ın 78'i (Saka çağı) azınlık
  görüşü olarak `ic_not`ta. Peşâver `s: kusan` f 0078 → Kuşan'ın Peşâver hâkimiyeti Kujula/Vima dönemine
  (I. yy) dayanıyorsa f korunabilir ama "Kanişka 78" gerekçesi düşülmeli; künye-içi Kanişka maddesi
  **0127-01-01** + kesinlik yil.
