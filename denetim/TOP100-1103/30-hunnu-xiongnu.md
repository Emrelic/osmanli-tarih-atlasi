# 30 · Asya Hun (Xiongnu) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 ~23:30

## Özet
- Künye 3 aday: `hunnu-xiongnu` (devletler.js:20176), `xiongnu` (devletler.js:22551; f/t/ad aynı, ÇİFT KAYIT) ve `guney-xiongnu` (48→216, Han vasalı). Üçünün de yerleşim sayısı 0: haritada GÖRÜNMÜYOR. Açık kırılma: 0 (kırılma günü yok ya da yerleşimsiz).
- Eksik madde: Değişmez 2 evreninde yalnız 1 madde var (olaylar_arkeoloji_d2-cin-dogu-asya.js:4-14, kuruluş); bölünme (48), Kuzey Xiongnu'nun yenilgisi (91/93), Xianbei (155) ve Han savaşları yok.
- En ağır 3 bulgu: (1) Mükerrer künye `hunnu-xiongnu` = `xiongnu` (biri silinmeli/birleşmeli). (2) t=155 yalnız KUZEY kolun sonu; konfederasyon künyesi 48'den sonra Güney kolla örtüşüyor (`guney-xiongnu` 48-216) ve TDV `Türk` md. Kuzey Hun'un sonunu 93 verir (155'i vermez) — TDV-esas ihlali: künye 155'i TDV'ye dayandırıyor ama TDV'de (okuduğum ilk 100.000 karakterde) 155/156 yok. (3) Harita boş: Ötüken/Longcheng çevresi ve Ordos/Yin Dağları için yerleşim `s:` dönemi yok.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| hunnu-xiongnu | Xiongnu (Hunnu) Konfederasyonu | -0208-01-01 | 0155-01-01 | 0 yerleşim; kaynak TDV (iki md) |
| xiongnu | Xiongnu (Hunnu) Konfederasyonu | -0208-01-01 | 0155-01-01 | 0 yerleşim; kaynak Grousset 1970 + Golden 1992 (atlas ic_not'a göre arşivde okunmuş; ben doğrulayamadım). MÜKERRER. |
| guney-xiongnu | Güney Xiongnu (Han vasalı) | 0048-01-01 | 0216-01-01 | 0 yerleşim; Grousset kaynaklı |
Ayrı olarak ilgili ama bu devlete sayılmayan: `hun-avrupa`, `kidarit`, `eftalit`, `alkhon`, `tuyuhun` (Hunnu soyunu iddia eden/başka siyaset).
Eksik evre: Kuzey Xiongnu ayrı künye değil (t=155 yalnız o kolun sonu). Öneri: tek künye + `ic_not`.

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f | -0208-01-01 (MÖ 209) | TDV `turk` (okundu 2026-11-03): «milâttan önce 209’da babası T’ou-man’ı öldürüp Hun tahtına çıktı» | Grousset *Empire of the Steppes* (atlas künyesinde alıntı: «Mao-tun ... (ca. 209-174)»; BEN OKUMADIM) | Mo-tu'nun tahta çıkışı = konfederasyonun kuruluşu değil; Tuman öncül (Grousset, Golden). MÖ 209 → astronomik -0208 DOĞRU. Gün yok → `-0208-01-01`. Kabul. |
| 48 bölünme | — | TDV `turk`: «milâttan sonra 48’de ikiye ayrıldı» | Hou Hanshu 89 (ctext.org: erişim engelli, çekilemedi); web aracıyla yalnız ikincil özet (Wikipedia yansımaları, dayanak değil): Bi Şanyü 48/49 kışı. | Yıl 48 TDV ile teyit. İkinci bağımsız akademik kaynak bu oturumda OKUNAMADI. |
| t | 0155-01-01 | TDV `turk`: Kuzey Hun «milâttan sonra 93 yılında tarihe karıştı» (okudum); atlas künyesi TDV `asya`dan «156'lar» alıntılıyor (ben `asya` md.yi çekmedim; `turk` md. sayfası 542.632 karakter, yalnız ilk 100.000'i okundu) | Grousset/Golden «around 155» Xianbei (atlas alıntısı; okunmadı) | ÇELİŞKİ: TDV 93 ↔ (TDV `asya` ?/Grousset/Golden) 155-156. Üçüncü olgu: Han kaynakları 91 (Altay Dağları, Dou Xian/Geng Kui) ve 93 (Xianbei Xiongnu topraklarını aldı). Hüküm: "Xiongnu konfederasyonu" siyasî varlığı Moğolistan'da 91-93'te biter; 155 Xianbei Tanshihuai'nin Kuzey Xiongnu artıklarını bastırmasıdır. Öneri (kuralda: TDV esas, çelişki iki kaynakla beyan): `t:"0093-01-01"` + `ic_not_t`: "TDV `turk` 93; Grousset/Golden 155 (Xianbei); 91 Altay Dağı Han yenilgisi". Karar Emre'nin (tek ucu `0091` da savunulabilir). |
| Güney kol | 48 → 216 | TDV `turk`: 48'de ayrıldı | Grousset (atlas alıntısı) | 216: Cao Cao'nun Güney Xiongnu şanyüsünü beş bölüğe bölmesi (Hou Hanshu/Sanguozhi; çekilemedi). Kaynak okunmadı → hüküm verilmedi. |

## c) Kronoloji
Var (evren İÇİ): olaylar_arkeoloji_d2-cin-dogu-asya.js:4-14 "Xiongnu İmparatorluğu kurulur" (Brosseder & Miller 2011, Xiongnu Archaeology s.~19; kaynak sınıfı akademik-ikincil).
Var (evren DIŞI): `hunnu-xiongnu`/`xiongnu` künyelerinin kendi `kronoloji:[...]` listeleri (satır 20176+, 22551+).
Yok (evren içinde): 48 bölünme, 91/93, 155, Han-Xiongnu savaşları, MÖ 36 Zhizhi, MÖ 51/53 Huhanye'nin Han'a boyun eğişi. Önerilen maddeler (HEPSİ kaynak okunmadan, hafızadan; teyit edilmeden yazılmaz — şablon):
```
{ t:"-0208-01-01", b:"Modu (Mete) babası Touman'ı öldürüp şanyü oldu; Xiongnu konfederasyonu kuruldu", kesinlik:"yil", taraflar:["hunnu-xiongnu"], kaynak:"TDV `turk` «milâttan önce 209’da babası T’ou-man’ı öldürüp Hun tahtına çıktı»" }
{ t:"0048-01-01", b:"Xiongnu Kuzey ve Güney konfederasyonlarına ayrıldı; Bi (Huhanye II) Güney şanyüsü Han'a bağlandı", kesinlik:"yil", taraflar:["hunnu-xiongnu","guney-xiongnu","han"], kaynak:"TDV `turk` «milâttan sonra 48’de ikiye ayrıldı» (2. akademik kaynak: Hou Hanshu 89 — çekilemedi)" }
{ t:"0093-01-01", b:"Kuzey Xiongnu devleti tarihe karıştı", kesinlik:"yil", taraflar:["hunnu-xiongnu"], kaynak:"TDV `turk` «milâttan sonra 93 yılında tarihe karıştı»; ikinci kaynak bekliyor (Grousset: 155)" }
```
Önerilmeyen (kaynak okunmadı, gün/yıl hafızadan, YAZILMAZ): Baideng kuşatması (MÖ 200), Mayi (MÖ 133), Huo Qubing (MÖ 121-119), Zhizhi'nin ölümü (MÖ 36, Talas), 91 Altay savaşı. Önce Hanshu 94 / Hou Hanshu 89, Cambridge History of China 1, di Cosmo *Ancient China and its Enemies* (2002) okunmalı; "Erişilemeyen kaynaklar".

## d) Harita uyumu
Yerleşim 0 → haritada görünmüyor (hunnu-xiongnu, xiongnu, guney-xiongnu). Boşluk doldurma merdiveni ve "noktası olmayan bölge en yakın peteğe emilir" kuralı: Orta Asya bozkırı komşu petek sahibine boyanıyor olabilir (Han? başka). Gereken `s:` dönemleri (kaynakla öncesinde doğrulanacak yerler; ADLAR ADAYDIR, koordinatlar bu oturumda üretilmedi):
- Ötüken/Orhun vadisi ve Longcheng (Xiongnu ibadet merkezi) — mevcut atlas yerleşimi «Karakurum» (Karakurum 13. yy'dır; Ötüken yerleşimi ayrı olmalı: "Orhun Vadisi (Ötüken bölgesi)" atlas'ta var, Göktürk künyeleri onu kullanıyor).
- Ordos / Yin Dağları kuzeyi (Han sınırı), Gobi kuzeyi, Altay eteği.
Öneri: önce mükerrer künyeyi birleştir (`xiongnu` kalsın, `hunnu-xiongnu` künyesi `alias`/sil), sonra Orhun Vadisi, Ötüken, Longcheng yerleşimlerine `s:[{d:"xiongnu"}]` (-0208 → 93/155) ver; 48'den sonra Güney Xiongnu bölgesini Han vasalı olarak `guney-xiongnu`'ya (Meiji/Xihe, Pingyang) bağla.
Haritada ayrıca BOYALAR'da `xiongnu`/`hunnu-xiongnu` anahtarı olup olmadığı arac/renkler.py'den kontrol edilmedi (salt-okuma, bu oturumda bakılmadı).

## Önerilen düzeltmeler (KASA için)
1. Mükerrer künye: `hunnu-xiongnu` (devletler.js:20176) ve `xiongnu` (22551) tek id'ye indirilsin (hangi `s:` ve kronoloji referansları var, denetle.py ile taranmalı).
2. `t` kararı: 0155 ↔ 0093 (TDV esas) — ikinci kaynak okununca; şimdilik `ic_not_t`'ye iki kaynak ve 91/93/155 ayrımı yazılsın.
3. Evren içine 3 madde (c bölümü).
4. Haritada görünmesi için Orhun/Ötüken/Longcheng yerleşimleri; ayrıca `guney-xiongnu` için.

## Erişilemeyen kaynaklar
- Hou Hanshu 89 «Nan Xiongnu liezhuan» (ctext.org/hou-han-shu/nan-xiong-nu-lie-zhuan): ctext otomatik erişimi engelledi. Soru: 48'de «八部大人立比為呼韓邪單于» tarihi ve Altay Dağları 91 / 93 yenilgisi.
- TDV `asya` md. ve `turk` md. sayfasının 100.000. karakterden sonrası: «156'lar» ve «Kuzey Hun» ibaresi okunamadı.
- Grousset (1970) ve Golden (1992) tam metin: archive.org `download/golden_202303/golden_202303_djvu.txt` 404 verdi; doğru dosya adı bulunamadı. Sorular: «around 155» Xianbei; s. 63.
- Cambridge History of China vol.1 (Twitchett & Loewe 1986) ch.8 «The Hsiung-nu» (Loewe/ Yü Ying-shih): 48 ve 91/93/155 için bağımsız akademik kaynak.
- di Cosmo, *Ancient China and Its Enemies* (CUP 2002): Xiongnu kronolojisi.
