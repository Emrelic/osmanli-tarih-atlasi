# 45 · Zhou Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100 (HEAD d773b144d), 4 Kasım 2026; ölçer top100_olc.py + elle ayrıştırma

## Özet
- Künye 2 (bati-zhou, dogu-zhou); Wu Zhou (690-705) ve Kuzey/Sonraki Zhou ayrı, karıştırılmadı. Ölçer: açık kırılma 0 (bati-zhou'nun yerleşimi yok; dogu-zhou 2 kırılma/0 açık).
- **Batı Zhou haritada görünmüyor (yerleşim 0).** Haojing (Fenghao) ≈ Xi'an (Chang'an) noktası ve Luoyi (Chengzhou/Wangcheng) ≈ Luoyang noktası için -1045→-0770 s: dönemi yok; Luoyang'ın ilk dönemi dogu-zhou -0769'da başlıyor.
- Doğu Zhou künyesi iç çelişkili: t=-0248 (MÖ 249, Doğu Zhou beyliğinin ilhakı) fakat `ozet` «MÖ 256»; Luoyang s: dönemi -0254'te (MÖ 255) bitiyor; Nan maddesi -0255 (MÖ 256). Üç farklı uç aynı olguya bakıyor; hepsi Shiji'de kaynaklı ama aynı künyede beyan edilmemiş.
- Antik kronoloji beyanı: atlas MÖ 1046 (XSZ Projesi) seçmiş ve `ozet`te «XSZ 1046» yazıyor; ama `kaynak:` alanındaki Zhang Pengcheng 2022 kendi tablosunda 1044 verir (atlasın ic_not'u da bunu söylüyor) — kaynak, seçilen değeri desteklemiyor. MÖ 841 öncesi için beyan sınırı iyi yazılmış (asya3_1024:5 `ic_not_d`).
- En ağır 3: (1) Batı Zhou 0 yerleşim; (2) Doğu Zhou t/ozet/s: üçlü tutarsızlık; (3) Batı Zhou f kaynağı seçilen yılı desteklemiyor (1046 vs 1044/1045).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| bati-zhou | Batı Zhou | -1045-01-01 (MÖ 1046) | -0770-01-01 (MÖ 771) | var; yerleşim 0 |
| dogu-zhou | Doğu Zhou | -0769-01-01 (MÖ 770) | -0248-01-01 (MÖ 249) | var; Luoyang -0769→-0254 |
Komşu/ayrı künyeler: han-devleti-zhou, wei-devleti-zhou, chu-devleti, qin-devleti (Savaşan Devletler; Zhou hanedanı değil); wu-zhou, kuzey-zhou, sonraki-zhou-5hanedan (başka hanedanlar). Eksik evre: Zhou öncesi "Zhou boyu/Pre-dynastic Zhou (Bin-Qi, MÖ 11. yy öncesi)" künyesi yok ve gerekmez (Shang'a vassal; shang künyesi bu denetim dışı).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm / öneri |
|---|---|---|---|---|
| bati-zhou f | -1045 (MÖ 1046) | Xia-Shang-Zhou Kronoloji Projesi (2000): 20 Ocak 1046 (WebSearch özeti; Vikipedi yansıması yol gösterir, dayanak değil — birincil rapor okunmadı) | Jessica Rawson, «Western Zhou Archaeology», Cambridge History of Ancient China (1999): fetih «may be dated at ca. 1045 B.C.» (archive.org djvu, okundu); Zhang Pengcheng, Early China 2022 (atlasın kaynağı): 1044; Nivison/Shaughnessy: 1045 (Early China özetleri) | Akademik yelpaze MÖ 1046-1044 (3 yıl). Atlas -1045 (=MÖ 1046) XSZ tarafını seçiyor; kaynak alanı (Zhang) onu desteklemiyor. Öneri: f kalsın, kesinlik "onyil", `ic_not`: «MÖ 1046 (XSZ) / 1045 (Rawson, Shaughnessy-Nivison) / 1044 (Zhang)»; `kaynak:`a Rawson ekle. MÖ 841 öncesi için yıl-düzeyi gün yok → kural gereği -1045-01-01. |
| bati-zhou t / dogu-zhou f | -0770 / -0769 | Shiji 4 «遂殺幽王驪山下» (asya3_1024:6 okundu); Shiji 14 tablosu: You'nun öldürülmesi MÖ 771, «平王元年東徙雒邑» MÖ 770 | Rawson 1999: Zhou başkentlerini «in 771 B.C.» terk etti; von Falkenhausen (CHAC böl.7): Doğu Zhou «begins as early as 770 B.C.» | ÇİFT TEYİT. Doğru (MÖ 771 = -0770, MÖ 770 = -0769). Zhang 2022: You ile Ping arasında 7 yıllık boşluk (Ping yuan 772/770 tartışması) — künyede beyan var. |
| dogu-zhou t | -0248 (MÖ 249) | Shiji 5 «莊襄王元年…東周君…盡入其國» (zh.wikisource okundu): Doğu Zhou beyliği MÖ 249'da Qin'e katıldı | Cambridge History of China vol.1: «In 256 Ch'in destroyed the Chou ruling house» — hanedan MÖ 256'da (-0255) sona erdi, MÖ 249 yalnız Gong'daki Doğu Zhou beyliğinin ilhakı | Çelişki yok, ama iki farklı olgu. Öneri: **künye adı «hanedan» ise t = -0255 (MÖ 256: kral Nan'ın ölümü, Shiji 15 «赧王卒»; CHC vol.1 «256»); künye «beylik dahil» ise t = -0248 kalsın.** Öncelik: hanedanın siyasî sonu 256 (iki kaynak, ikisi de Nan'a/Zhou hanedanına bağlar). Karar Emre'nin; tavsiye -0255, `ozet` «MÖ 256»yla tutarlı olur ve Luoyang s: dönemi -0254'ten -0255'e çekilmelidir? (Hayır: Qin Batı Zhou'yu MÖ 255'te aldı — Shiji 5 «五十二年…周初亡»; s: -0254 kalsın, künye t -0255 olursa 1 yıl sarkma künyeden küçük kalır, sorun çıkmaz.) |
Takvim: MÖ→astronomik çeviri doğru; Çin ay-güneş çevirisi yok (yıl hassasiyeti).

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar:
- asya3_1024.js:5 `-0840` Gonghe naipliği (MÖ 841, Shiji 14; Çin'in kesin yıl bilinen en eski tarihi) — doğru.
- asya3_1024.js:6 `-0770` You'nun ölümü (MÖ 771) — doğru.
- asya_zincir_1024.js:6 `-0769` Ping'in doğuya göçü (MÖ 770, Shiji 14) — doğru; olaylar_arkeoloji_d2-cin-dogu-asya.js (Xu Zhaofeng 2012, Guangming Daily; `kaynak_turu` gazete — akademik hakemli değil; yalnız ikincil) `-0769` tekrar madde.
- asya3_1024.js:17 `-0255` Nan öldü (MÖ 256); asya_zincir_1024.js:18 `-0254` Qin Batı Zhou'yu aldı (MÖ 255; Shiji 15 «取西周», Shiji 5 52. yıl «周初亡» — doğru). MÖ 249 yalnız `d:` alanında; ayrı madde yok.
- asya3_1024.js:8 `-0402` Weilie'nin Han/Wei/Zhao'yu tanıması (MÖ 403) — Zhou ile ilgili ama Savaşan Devletler.
Eksik/öneri:
```
{ t:"-1045-01-01", gun:"MÖ 1046 (XSZ) / 1045 / 1044 (yalnız yıl)", kesinlik:"onyil", devlet:"bati-zhou", taraflar:["bati-zhou"], b:"Zhou kralı Wu Muye'de Shang'ı yendi: Batı Zhou başladı", tur:"kurulus", yer_id:"Xi'an (Chang'an)", kaynak:"Rawson, Cambridge History of Ancient China (1999), Western Zhou Archaeology: «may be dated at ca. 1045 B.C.»; XSZ Projesi 2000: 1046; Zhang Pengcheng, Early China 2022: 1044", ic_not_d:"kesin yıl tartışmalı; üç akademik değer beyan edildi" }
{ t:"-0248-01-01", ...Doğu Zhou beyliğinin Qin'e katılması (MÖ 249; Shiji 5 莊襄王元年) — bkz. 44-qin-hanedani.md }
```
Not: Batı Zhou kuruluş maddesi Değişmez 2 evreninde yok (kurucu kırılma yerleşim s: eksik olduğu için ölçerde açık da görünmüyor; yerleşim s: eklenirse madde zorunlu olur).

## d) Harita uyumu
- Açık kırılma: dogu-zhou 2/0 (Luoyang -0769, Luoyang -0254; ikisi de kronolojide var). bati-zhou: ölçülecek kırılma yok.
- Yerleşim: bati-zhou 0 → **haritada görünmüyor**. dogu-zhou 1 (Luoyang -0769→-0254).
- Öneri s: dönemleri (kaynak + beyan şartıyla):
  1. **Xi'an (Chang'an)**: `{f:"-1045-01-01", t:"-0770-01-01", d:"bati-zhou"}` — Haojing/Fenghao Xi'an ovasındadır (atlas noktası Chang'an, ~10-20 km; künye başkenti Haojing; Shiji 4 «武王…居鎬»); atlas Xi'an'da zaten Qin Xianyang'ı için ~21 km sapmayı beyan ederek kabul ediyor (asya.js:1812 kaynak metni). -0770→-0349 arası Xi'an şu an kayıtsız: Shiji 5 Wengong 16. yıl (MÖ 750) «岐以東獻之周» Qin Fenghao'yu Zhou'ya bıraktı, sonrası Zhou→Qin geçiş tarihi bu denetimde okunmadı → aralık `__BOSLUK__` beyanlı kalmalı (kaynak merdiveni ①-⑦ çalıştırılmadı: TDV bu konuyu kapsamaz).
  2. **Luoyang**: `-1045→-0769` bati-zhou DEĞİL; Luoyi/Chengzhou'nun kuruluşu (Zhou Gong, Cheng Wang dönemi, c. MÖ 11. yy) kaynağı okunmadı; öneri Luoyang'a Batı Zhou dönemi için "Chengzhou doğu başkenti" kaydıyla -1040 (yaklaşık) → kaynak gerek; erişilemeyen listede.
- Doğu Zhou en geniş anda tek noktadır (Luoyang): gerçekte Luoyi çevresi (Henan) dışında Zhou toprağı yok (Doğu Zhou "sembolik krallık"); kaynakla uyumlu.

## Önerilen düzeltmeler (KASA için)
1. data/devletler.js dogu-zhou: `ozet` «(MÖ 770 / MÖ 249)» düzelt ya da t=-0255 (karar Emre); `kaynak:`a Shiji 5/15 + CHC vol.1 («In 256 Ch'in destroyed the Chou ruling house») ekle.
2. data/devletler.js bati-zhou: `kaynak:`a Rawson 1999 (ca. 1045) ekle; `ic_not`: 1046/1045/1044 üçlüsünü yaz; Theobald «zayıf» kaynağını çıkar.
3. data/yerlesimler_asya.js Xi'an: -1045→-0770 bati-zhou s: dönemi (kesinlik onyil, beyan: Haojing~Chang'an uzaklığı). Önce bati-zhou BOYALAR'da tanımlı mı arac/renkler.py'den doğrulanmalı (bu denetimde bakılmadı).
4. data/kronoloji_sinir_asya3_1024.js: Muye/Batı Zhou kuruluş maddesi (yukarıda), MÖ 249 Doğu Zhou ilhakı maddesi.

## Erişilemeyen kaynaklar
- XSZ Projesi 2000 Özet Raporu / Shaughnessy-Nivison 1045 makaleleri: yalnız arama özetlerinden görüldü; birincil rapor ve CHAC Shaughnessy bölümü (Zhou fetih yılı) okunmadı. Soru: «Shaughnessy CHAC bölüm 5'te fetih yılı hangi yıl: 1045 mi 1046 mı?»
- Zhang Pengcheng 2022 «The Chronology of Western Zhou», Early China (Cambridge, DOI yok): Tablo 2'nin 1044/771-770 satırları.
- Luoyi'nin kuruluş tarihi (Zhou Gong, Cheng Wang 5-7. yıl): CHAC Shaughnessy bölümü, soru: «Chengzhou/Luoyi hangi MÖ yıl kuruldu?»
