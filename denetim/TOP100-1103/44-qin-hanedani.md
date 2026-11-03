# 44 · Qin Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100 (HEAD d773b144d), 4 Kasım 2026; ölçer top100_olc.py + elle ayrıştırma (yerlesimler*.js)

## Özet
- Künye 2 (qin-devleti, qin-hanedani). Ölçer: açık kırılma 0 + 0 — ama -0206 kırılmasını yalnız otomatik üretilmiş bir "sahipsiz aralık" maddesi karşılıyor ve o maddenin `kaynak:` alanı 221 birleşmesini anlatıyor (MÖ 207'yi değil). Gerçek madde yok.
- Eksik madde 3 (Ziying'in teslimi/Qin sonu; Doğu Zhou'nun ilhakı 249; Qin künye f'si ile -0770 madde yılı uyumsuz).
- En ağır 3 bulgu: (1) **Qin İmparatorluğu haritada tek noktadır** (Xi'an, -0220→-0206); Luoyang, Chengdu, Jingzhou (Jiangling) -0220'de `__BOSLUK__`a düşer — oysa Qin bu yerlerin sahibidir; -0220 "birleşme" maddesinin `odak_yer`i Luoyang/Chengdu/Xi'an'dır ama harita ikisini boş gösterir (madde-harita çelişkisi, amaç ihlali). (2) Jiangling -0277'de Qin'e geçtiği maddede yazılı (asya_zincir_1024:17) ama noktada -0277→-0205 `__BOSLUK__`. (3) Qin devleti f'si -0769 (MÖ 770) iken kronoloji maddesi -0770 (MÖ 771) — bir yıl fark.
- f/t değerlerinin hepsi yıl düzeyinde kaynakla uyuşuyor (aşağıda); künye `kaynak:`ları ağırlıkla tek kaynak (Theobald/Sima Qian) — ikinci akademik kaynak bu denetimde eklendi.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| qin-devleti | Qin Devleti | -0769-01-01 (MÖ 770) | -0220-01-01 (MÖ 221) | var; Qin devleti evresi |
| qin-hanedani | Qin Hanedanı (birleşik İmparatorluk) | -0220-01-01 (MÖ 221) | -0206-01-01 (MÖ 207) | var |
Eksik evre yok: Qin devleti (MÖ 770-221) + imparatorluk (221-207) iki künyeyle örtülü. Komşu künyeler (ayrı devlet, dokunulmadı): onceki-qin, sonraki-qin, bati-qin-qifu, sui-qin-xue-ju. Qin öncesi "Xiang Gong'dan önce Qin" (c. MÖ 897-771, Shiji'ye göre Feizi/Qin boyları) künyesi yok; künye 770'ten başlıyor — Shiji geleneği (Zhou'ca lordluk) ile tutarlı, beyanlı yaklaşıklık künyede yazılı.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| qin-devleti f | -0769 (MÖ 770) | Shiji 5 «平王封襄公為諸侯，賜之岐以西之地» (zh.wikisource 史記/卷005, okundu); yıllık tablo (juan 14) bu olayı MÖ 771 satırına koyar | CHAC (Loewe-Shaughnessy 1999) von Falkenhausen bölümü: Doğu Zhou «begins as early as 770 B.C.»; Nivison'a göre Ping'i Luoyi'de Jin Wen Hou'nun tahta oturttuğu anlatılır, Xiang Gong'dan söz edilmez (arşiv.org CHAC djvu, offset ~1.9M, okundu) | Yıl düzeyinde 770/771; Shiji içinde bile 1 yıl oynar. KABUL, beyan: «MÖ 770 (Shiji tablosu MÖ 771)». |
| qin-devleti t / qin-hanedani f | -0220 (MÖ 221) | Shiji 5 «秦王政立二十六年，初并天下» | Cambridge History of China vol.1 (Twitchett-Loewe 1986, Bodde böl.): «the establishment of the Ch'in empire in 221 B.C.» (archive.org djvu, okundu) | ÇİFT TEYİT. Doğru. |
| qin-hanedani t | -0206 (MÖ 207) | Shiji 6 «子嬰即系頸以組…降軹道旁» (künye kaynağı; MÖ yılı metinde yok) | CHC vol.1 bölüm 1 (Bodde/Loewe): Liu Bang Ziying'in teslimini Kasım/Aralık MÖ 207'de aldı; bölüm 2 aynı olayı Han takvimiyle «10. ay, MÖ 206» yazar (okundu, WebFetch özeti) | ÇİFT TEYİT yıl düzeyinde: astronomik -0206 = MÖ 207 doğru. Ay (Kasım/Aralık) bilindiği hâlde `YYYY-01-01` kuralı gereği yıl hassasiyeti kalır; `ic_not`a «Han yıl başı 10. ay: MÖ 207 Kasım/Aralık ≡ Han 1. yıl 10. ay (MÖ 206 etiketi)» yazılmalı. |
Takvim: gün yok; MÖ yıl astronomik sayıma çevrilmiş (MÖ n → -(n-1)) doğru uygulanmış. Çin ay-güneş çevirisi yapılmadı (cin_gun.py yok).
Künye `kaynak:` zayıflığı: qin-devleti → chinaknowledge.de (Theobald, kişisel site; yönergede zayıf) tek kaynak; öneri: kaynak alanına Shiji 5 + CHC vol.1 eklenmeli.

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar:
- data/kronoloji_sinir_asya3_1024.js:7 — `-0770` Ping Xiang Gong'u lord yaptı (MÖ 771; kaynak Shiji 5 + 14). Künye f'si -0769 ile 1 yıl uyumsuz (bkz. b).
- asya3_1024.js:11 `-0349` Xianyang başkent; :12 `-0358` Shang Yang reformu; :13 `-0339`; :14 `-0337` (Shang Yang ölümü) — tablo yıllarından türetilmiş, `ic_not_d` bunu beyan ediyor.
- asya_zincir_1024.js:17 `-0277` Ying alındı (Jiangling Chu'dan Qin'e); :18 `-0254` Qin Batı Zhou'yu aldı; :20 `-0229` Han yıkıldı; :21 `-0227` Handan; :22 `-0224` Daliang; :23 `-0220` Qi yıkıldı; asya3:19-21 Chu/Zhao; asya3:21 `-0220` birleşme + 36 komandanlık.
- olaylar_arkeoloji_zincir.js:955 `-0315` «Chengdu: Qin Devleti dönemi başlar» (MÖ 316); :98 `-0206` «Xi'an: Qin Hanedanı → sahipsiz aralık» (otomatik; bkz. sorun).
- olaylar_arkeoloji_d2-cin-dogu-asya.js:17 `-0220` Qin birleşmesi (Liu Rui, CASS; yalnız yıl).
Kontrol: bu maddelerin yılları Shiji juan 15 (Liuguo nianbiao) ile uyumlu; 256/255 ayrımı: Shiji 5 «五十二年，周民東亡，其器九鼎入秦。周初亡» (Zhaoxiang 52 = MÖ 255; zh.wikisource okundu) → atlas `-0254` doğru. Nan'ın ölümü MÖ 256 (-0255) doğru; Cambridge History of China vol.1: «In 256 Ch'in destroyed the Chou ruling house» (aynı olaya 256 diyen kaynak; iki tarih, beyan edilmeli: 256 teslim/Nan ölümü, 255 «Zhou ilk söndü»).
SORUN: olaylar_arkeoloji_zincir.js:98 maddesinin `kaynak:` alanı «Qin Shi Huang 26. yıl: ilk kez bütün ülkeyi birleştirdi» = MÖ 221; MÖ 207 sonunu kanıtlamaz. Değişmez 2'yi sayısal karşılıyor, içerik karşılamıyor.

Eksik madde önerileri:
```
{ t:"-0206-01-01", gun:"MÖ 207 (yalnız yıl; Kasım/Aralık)", kesinlik:"yil", devlet:"qin-hanedani", taraflar:["qin-hanedani","bati-han"], b:"Ziying Liu Bang'a teslim oldu: Xianyang düştü, Qin İmparatorluğu sona erdi", tur:"toprak-kayip", yer_id:"Xi'an (Chang'an)", kaynak:"Sima Qian, Shiji 6 «Qin Shihuang benji» (子嬰即系頸以組…降軹道旁); Cambridge History of China vol.1 (1986), böl.1: Liu Bang Ziying'in teslimini Xianyang dışında Kasım/Aralık MÖ 207'de aldı; Xiang Yu onu sonra öldürdü", ic_not_d:"Han yıl başı 10. ay: MÖ 207 Kasım/Aralık ≡ 'MÖ 206 10. ay' (CHC böl.2). Gün/ay çevrilmedi; yıl hassasiyeti." }
{ t:"-0248-01-01", gun:"MÖ 249 (yalnız yıl)", kesinlik:"yil", devlet:"qin-devleti", taraflar:["dogu-zhou","qin-devleti"], b:"Qin Zhuangxiang'ın 1. yılında Doğu Zhou beyliği ilhak edildi: Zhou hanedanından kalan son toprak da Qin'e geçti", tur:"toprak-kayip", yer_id:"Luoyang", kaynak:"Shiji 5 «莊襄王元年…東周君與諸侯謀秦，秦使相國呂不韋誅之，盡入其國» (zh.wikisource 史記/卷005, okundu); Shiji 15: MÖ 249 «取東周»" }   // dogu-zhou künye t=-0248'i karşılar
{ t:"-0220-01-01", ...mevcut birleşme maddesine ek: taraflar'a "qin-devleti" eklenmeli; Luoyang/Chengdu/Jingzhou'nun qin-hanedani'ne geçişi ayrı yazılmalı (aşağı) }
```

## d) Harita uyumu
- Açık kırılma (ölçer ölçütü): qin-devleti 4 kırılma/0 açık; qin-hanedani 2/0 açık. Yani sayı sıfır; ama -0206 maddesi sahtedir (yukarıda).
- Yerleşim sayısı: qin-devleti 3 (Xi'an -349→-220, Chengdu -315→-220, Luoyang -254→-220); qin-hanedani 1 (Xi'an -220→-206). En geniş an: -253 (3). Sahip dağılımı (ölçüm, yerlesimler*.js): -253'te 8 noktalı Doğu Asya evreni; -215'te 4 nokta: Xi'an=qin-hanedani, Luoyang/Chengdu/Jingzhou=`__BOSLUK__`.
| gün | yerleşim | sorun | öneri |
|---|---|---|---|
| -0220 | Luoyang (asya.js:1866-67 civarı) | qin-devleti -0254→-0220 sonra -0220→0023 `__BOSLUK__` («künye sonrası boşluk»); Luoyang Qin'in Sanchuan komutanlığı | `{f:"-0220-01-01",t:"-0206-01-01",d:"qin-hanedani"}` ekle, kalan boşluk -0206→0023 (kaynak: Shiji 6/Shiji 5 «初併天下…三十六郡»; Sanchuan: Shiji 6 «滅二周而置三川郡»; atlas kaydı dayanak değil) |
| -0220 | Chengdu (asya.js:2175) | qin-devleti -0315→-0220, sonra -0220→0025 `__BOSLUK__` | aynı: qin-hanedani -0220→-0206 (Shu komutanlığı; Shiji 5 Huiwen: Sima Cuo Shu'yu fethetti; 36 komandanlıktan biri Shu) |
| -0277 | Jingzhou (Jiangling) (odak_yedek_1023.js:73) | Ying/Jiangling -0277'de Qin'e geçti (maddede var) ama nokta -0277→-0205 `__BOSLUK__` | `{-0277→-0220 qin-devleti}`, `{-0220→-0206 qin-hanedani}`, -0206→-0205 boşluk kalsın; kaynak Shiji 5 «白起拔郢…南郡» (okunmadı: erişim sırasında yalnız atlas kronolojisinde var, 2. kaynak gerek) |
| -0206 | Xi'an | qin-hanedani sonrası -0206→-0201 `__BOSLUK__` (Han henüz değil) | beyanlı; kaynaklı madde yukarıda |
- Haritada "görünmeyen" Qin: Linzi, Handan, Daliang, Xinzheng, Pengcheng gibi fethedilen şehirler bu veri evreninde (yerlesimler*.js) hiç yok ya da Qin dönemi s: taşımıyor (-215'te Çin kutusunda 4 nokta). Bu bu çalışmanın kapsamı dışında kalan veri kapsama boşluğudur: Qin İmparatorluğu için en az Linzi, Handan, Daliang (Kaifeng), Xinzheng, Ying/Jiangling, Chengdu, Luoyang, Ji (Pekin), Xianyang s: dönemi gerekir (fetih yıllarına bağlı: kronoloji maddeleri zaten var: asya_zincir 17-23).

## Önerilen düzeltmeler (KASA için)
1. data/yerlesimler_asya.js (Luoyang ~satır 1864-1866; Chengdu 2175): -0220→-0206 `__BOSLUK__` yerine `d:"qin-hanedani"` (kesinlik onyil; kaynak Shiji 6, CHC vol.1).
2. data/yerlesimler_odak_yedek_1023.js:73-75 Jingzhou: -0277→-0220 qin-devleti, -0220→-0206 qin-hanedani.
3. data/kronoloji_sinir_asya3_1024.js: yukarıdaki -0206 (Ziying) ve -0248 (Doğu Zhou ilhakı) maddelerini ekle; :7 (Qin Xiang Gong) t'sini -0769'a çek ya da künye f'sini -0770 yap — yönerge: Shiji 5 «平王封襄公» olayı Ping'in doğuya göçünden sonradır, Ping yuan MÖ 770 → -0769 daha doğru.
4. data/olaylar_arkeoloji_zincir.js:98 maddesinin `kaynak:`ı Ziying/Liu Bang kaynağıyla değiştir (Shiji 6 son paragraf + CHC vol.1).
5. data/devletler.js qin-devleti `kaynak:`: Theobald yanına Shiji 5 + CHC vol.1 yaz; qin-hanedani: CHC vol.1'i ikinci kaynak olarak ekle; ic_not'a Han yıl başı notu.

## Erişilemeyen kaynaklar
- Cambridge History of Ancient China (Loewe-Shaughnessy 1999) Qin bölümü (Qin'in Ping tarafından lord yapılma tarihi 770/771 tartışması): archive.org tam metni ayrıntılı okunamadı (3 MB; yalnız 4 pencere gezildi). Soru: «Qin Xiang Gong'un lordluğu MÖ 770'te mi 771'de mi, ve Shiji tablosu neden 771 koyuyor?»
- Shiji 5 Qin benji MÖ 278 Bai Qi/Ying satırı (Jiangling ilhakı) doğrudan okunmadı.
- ctext.org otomatik erişime kapalı (yalnız zh.wikisource okundu).
- Cambridge History of China vol.1 tam sayfa numaraları: WebFetch özetinden okundu, sayfa yok.
