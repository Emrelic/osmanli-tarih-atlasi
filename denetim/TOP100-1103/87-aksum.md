# 87 · Aksum Krallığı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer: `top100_olc.py aksum`)

## Özet
- Künye 1 (`aksum`, f 0100-01-01, **t boş**). Ölçer: 1 yerleşim (San'a, 525-575); harita ömrü 525-575. **Aksum şehri ve Aksum'un çekirdek toprağı haritada yok**: `Aksum` yerleşimi yalnız 1270'ten başlar (habesistan); Adulis/Yeha yerleşimi kayıtlı değil. Yani Aksum haritada fiilen "Yemen'de 50 yıllık bir nokta"dır.
- Açık kırılma **2** (ikisi de San'a: 0525-01-01 kazanç, 0575-01-01 kayıp); yalnız-otomatik-madde kırılması 0.
- En ağır 3 bulgu: ① Aksum çekirdeği haritada boş (1270 öncesi Aksum, Adulis, Yeha s: yok) — künye var, toprak yok; ② `t` boş: künye "bugüne kadar sürüyor" görünür (hayalet devlet riski); kaynaklar "X. yüzyıla dek krallar" der, net bitiş yılı yok; ③ 525/575 San'a kırılmalarının Değişmez 2 evreninde maddesi yok (570 maddesi var ama 5 yıl uzak ve yer_id boş, 575 TDV [?] ile 570 çelişir).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| aksum | Aksum Krallığı | 0100-01-01 | (boş) | tek künye; boya renkler.py:1252 var; yerleşim 1 (San'a 525-575) |
Eksik evre/parça: Aksum'un öncülü D'MT (MÖ ~8-5. yy) ve proto-Aksum evresi (MÖ 4.-MS 1. yy) künyesiz — kapsam dışı sayılabilir (TOP100 yalnız "Aksum"). Ardıl: Zague (`zagve` 1137) arasında ~940-1137 boşluğu: Aksum sonrası/Zague öncesi (Gudit/Agaw) için künye yok.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f | 0100-01-01 | Gale «Aksumite Kingdom» (encyclopedia.com; Munro-Hay 1991, Phillipson 1998 atıflı): «By the first century AD, and probably much earlier» ticaret — kuruluş yılı değil | Periplus Maris Erythraei (MS 1. yy) "Adulis/Aksum" ticaret merkezi (birincil, bu oturumda okunamadı); Munro-Hay 1991 | f=100 ölçüm değil; kuruluş tarihi yok, Aksum MS 1. yy'da biliniyor. Önceki oturum kaynağı (Britannica Students) çocuk kaynağıydı, düzeltilmiş | f:"0100-01-01" `kesinlik:"yuzyil"` + ic_not_f "KUŞAK UCU: Periplus'ta MS 1. yy'da anılır; kuruluş yılı bilinmiyor" |
| t | boş | Phillipson/Gale: «Though there were Aksumite kings well into the tenth century, power had shifted to the Agaw people long before.» | Gale: Müslümanların 7.-8. yy'da Kızıldeniz'e hâkimiyeti sonrası gerileme; sikke basımı 7. yy'da durur (Munro-Hay'in timeline'ında "End of Aksum as capital" 619 tablosu çekilemedi/okunamadı). TDV etiyopya: Aksum'u 1531'de Adal'ın aldığını söyler (başşehir olarak anılır) | Net bitiş yok; kaynaklarda X. yy'a kadar kral listesi. Boş t "devlet bugün sürüyor" demek (hayalet) | **Öneri:** t:"1000-01-01" + `kesinlik_t:"yuzyil"` + ic_not_t "PENCERE/KUŞAK UCU, ölçüm değil: Phillipson 'kings well into the tenth century'; sonrası Agaw/Zague; Gudit tarihi 940/960 teyitsiz". (Alternatif: boş bırak, ama o zaman motor/denetim açık-uçlu künye için beyan şart.) |
| 525 Himyar | San'a: 0525 (aksum) | TDV Himyerîler (Algül): «Himyerî Devleti son buldu ve toprakları Habeşistan'a bağlandı» (525; künye kaynağında okundu); TDV etiyopya: Aksumlular'ın Yemen'i «son defa zaptettikleri 525'e kadar» (okundu) | Brill (Migration Histories… ch. 11) + Cambridge makalesi özeti: Kaleb 525'te Zû Nuvâs'ı yendi; Abraha sonradan Himyar'ı Aksum'a haraçla yönetti. Procopius/Justinian birincil | 525 iyi teyitli (2 TDV maddesi + akademik özet). **Fakat** Abraha evresi (Yemen'de bağımsızlaşan vâli) atlasta aksum'a yazılmış; kronolojide "Abraha" yok | 525 kalsın; Abraha (c. 535-570) için ic_not: "fiilen özerk Habeş vâlisi, Aksum'a haraçlı" |
| 575 Himyar sonu | San'a: 0575 (abna-yemen) | TDV Ebnâ: Vehriz'in gönderilmesi «575 [?]» (soru işaretli) | UNESCO GHA III (atlas kronoloji_sinir_amerika_afrika3:34): Sâsânî fethi **570**; Gale: «By 600, Persians permanently driven Aksumites off» | **Çelişki: 570 (UNESCO) / 575[?] (TDV) / ~570-575 (Procopius'a dayanan akademik hesaplar)**. TDV esas → 575; çelişki iki kaynaklı beyan edilmeli | 575 kalsın; ic_not'a "UNESCO 570" ve TDV [?] beyan; kronoloji 570 maddesi yer_id:"Sana" + t:"0575-01-01" ya da 0575 maddesi eklenmeli (aşağıda) |

Ezana kronolojisi (künye içi): ozet "Ezana c.303-c.350" ile kronoloji "t:0330 hükümdar" ve openstax "c.330-356" **tutarsız** (üç farklı aralık). Gale: Ezana'nın Meroe seferi "325 civarı". Ezana'nın hükümdarlığı için Munro-Hay: c. 320-360 (hafızadan, doğrulanmadı). Öneri: ozet ve maddeyi tek aralığa bağla; kaynaksız aralık yazılmasın.

## c) Kronoloji
Değişmez 2 evreninde (olaylar*.js, kronoloji_sinir*.js) var olanlar:
- data/olaylar_antik_misir_nubya.js:87 — Ezana Kush'u yendi; Meroe sonu, "c. MS 350" (kesinlik onyıl, t 0349-01-01). Tarih yıl düzeyi, kaynak olarak Treccani Meroe (olaylar_arkeoloji_gecis.js:164 «seconda metà del sec. III» ile ÇELİŞİR: Meroe sonu III. yy ikinci yarısı mı, c. 350 mi? İki madde birbirini yalanlıyor → tek bir "tartışmalı" ic_not'a bağlanmalı).
- data/kronoloji_sinir_amerika_afrika3_1024.js:34 — 0570 Sâsânî Güney Arabistan'ı fethetti (UNESCO), 35 — 0628 Pers valisi Müslüman oldu.
- TDV etiyopya / Adal 1531 (Aksum'un alınışı): atlasta Değişmez 2 evreninde "Aksum" odaklı madde bulunamadı (yalnız 1529 Şimbra Kure ve 1543 Wayna Daga var).
Yalnız künye içinde (evren dışı): 0100 kuruluş, 0330 Ezana, 0514 Kaleb tahta (hükümdarlık 514-542, openstax), 0520 Kaleb Himyer seferi (**525'le çelişir**: TDV 525; openstax'ın 520'si yanlış kalır).
Eksikler ve önerilen maddeler:
1. `{ t:"0525-01-01", b:"Kaleb (Ella Asbeha), Himyer kralı Zû Nuvâs'ı yenerek Güney Arabistan'a hâkim oldu; Himyerî Devleti sona erdi", yer_id:"Sana", kaynak:"TDV Himyerîler (islamansiklopedisi.org.tr/himyeriler): «Himyerî Devleti son buldu ve toprakları Habeşistan'a bağlandı»; TDV etiyopya: Aksumlular Yemen'i 525'te son kez zaptetti", ic_not:"yıl hassasiyeti; gün yok. Künye içi 0520 maddesi 525'e düzeltilmeli" }` (AÇIK 0525-01-01 kırılmasını karşılar).
2. `{ t:"0575-01-01", b:"Sâsânî komutanı Vehriz Yemen'e girdi; Habeş hâkimiyeti sona erdi", yer_id:"Sana", kaynak:"TDV Ebnâ (islamansiklopedisi.org.tr/ebna): «Vehriz … bütün Habeşliler'i katletti» (575 [?]); UNESCO GHA III 570", ic_not:"575 TDV'de soru işaretli; UNESCO 570; çelişki beyanlı, TDV esas" }` (AÇIK 0575 kırılmasını karşılar; mevcut 570 maddesinde yer_id:"" ve t:0570 olduğundan ölçer 1827 gün diye saymıyor).
3. 1531 Adal'ın Aksum'u alışı: `{ t:"1531-01-01", b:"Ahmed Gran (Adal) başşehir Aksum'u ele geçirdi", yer_id:"Aksum", kaynak:"TDV Etiyopya: «1531'de başşehir Aksum'un ele geçirilmesinden sonra»" }` — Aksum yerleşimi s: dilimiyle uyumlu olmalı (habesistan sahipliği kesintisi yok → madde olay maddesi, dönem kırılması değil).
4. Aksum'un ticaret/gerileme: "Müslüman Kızıldeniz hâkimiyeti 7.-8. yy" (Gale) — kronoloji maddesi yıl yok; eklenmez (tarih uydurma).

## d) Harita uyumu
- Açık kırılma: **2** (San'a 0525 kazanç, San'a 0575 kayıp) + yalnız-otomatik 0. İkisi için c-1 ve c-2 maddeleri.
- Aksum çekirdeği boş: `Aksum` yerleşimi (data/yerlesimler_afrika.js:709) yalnız 1270-1281 habesistan (TDV etiyopya Süleymanî); 1281-1936 habesistan; **0100-1270 hiçbir dilim yok**. Adulis, Yeha, Matara, Qohaito yerleşim kaydı yok (grep: yok). Kaynaklarda Aksum'un çekirdek toprağı (Tigray, Eritre yaylası, Adulis limanı) MS 1.-7. yy Aksum'undur (Gale, Munro-Hay, TDV Etiyopya).
- Öneri s: `Aksum`: `0100-01-01 → ~1000-01-01 aksum` (BEYANLI: f yüzyıl hassasiyeti; t Phillipson "tenth century"); 1000-1137 arası `__BOSLUK__` + boşluk merdiveni (TDV etiyopya Zague'den önce 'Esato 976' saldırısını anıyor: «976'da yahudi Kraliçe Esato'nun … saldırılarında» — Gudit'le özdeşliği TDV'de yok, tarih uydurma yok); 1137 zagve ya da komşu; 1270 habesistan. Adulis yerleşimi yeni eklenmeli (Periplus; Aksum limanı, koordinat ~15.28N 39.66E) — ayrıntılı kaynak aranmalı (**çekilemedi**).
- San'a 525-575 aksum dilimi var, ama Aksum merkezi boş olduğundan harita "Yemen'de Aksum, Afrika'da hiç" gösterir → Değişmez 1 (sahipsizlik) ihlali değil çünkü 1270 öncesi o Afrika yerleşimleri yok; **eksik toprak**, yani harita uyumunu en çok bozan bulgu.
- Penceresi: Aksum künyesi f 0100; ölçer "harita ömrü 525→575" — künye ömrünün yalnızca %9'u haritada.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` satır 19144 `aksum`: t:"1000-01-01" (pencere ucu beyanıyla, ya da boş bırakma kararı Emre'de); ozet'te Ezana "c.303-c.350" düzelt (tek kaynak aralığı); künye kronolojisinde 0520 → 0525 (kaynak TDV).
2. Değişmez 2 evrenine (kronoloji_sinir_amerika_afrika3_1024.js benzeri dosya): c-1 (0525), c-2 (0575), c-3 (1531) maddeleri; mevcut 570 maddesine `yer_id:"Sana"` ve kaynak TDV Ebnâ çelişki ic_not.
3. `data/yerlesimler_afrika.js:709` Aksum: `{f:"0100-01-01",t:"1000-01-01",d:"aksum",kesinlik:"yuzyil",kaynak:"Phillipson/Gale…"}` + 1000-1137 `__BOSLUK__` beyanı + (yeni) Adulis yerleşimi. HAVVA koşusu şart (motor çıktısı).
4. olaylar_antik_misir_nubya.js:87 ve olaylar_arkeoloji_gecis.js:164 (Meroe sonu c. 350 / III. yy) çelişkisine ic_not.

## Erişilemeyen kaynaklar
- Munro-Hay, S. *Aksum: An African Civilisation of Late Antiquity*, Edinburgh UP 1991 (tam metin çekilemedi; timeline "End of Aksum as capital 619" bozuk özetten). Soru: Aksum'un siyasî sonu hangi yıl/yüzyıl? Ezana hükümdarlık aralığı?
- Phillipson, D.W. *Ancient Ethiopia*, British Museum Press 1998; ve Phillipson (ed.) *Foundations of an African Civilisation* (ch. 16). Soru: «kings well into the tenth century» cümlesinin kaynağı ve Gudit/Agaw geçişi.
- Procopius, *Bella* I.19-20 (Abraha/Kaleb) ve Periplus Maris Erythraei §4 — birincil; çekilemedi.
- Brill, Migration Histories of the Medieval Afroeurasian Transition Zone, ch. 11 "The Aksumites in South Arabia" — yalnız arama özeti okundu.
- Treccani Axum maddesi (www.treccani.it/enciclopedia/axum/) çekilemedi — doğru URL bulunamadı (ana sayfa döndü).
- Archive.org Cambridge History of Africa II: `cambridgehistory02fage` tam metni WebFetch'te çekilemedi (djvu metni dönmedi). Soru: Aksum'un Yemen 525 ve gerileme tarihleri (Cambridge History of Africa II, ch. 3-4).
