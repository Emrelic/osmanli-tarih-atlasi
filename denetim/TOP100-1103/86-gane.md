# 86 · Gana İmparatorluğu (Wagadu) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer: `top100_olc.py gane wagadu-gane-erken`)

## Özet
- Künye 2 (`gane`, `wagadu-gane-erken`) — **MÜKERRER**: `gane` (1000-1076) tamamen `wagadu-gane-erken`in (0701-1076) içindedir; aynı polity, aynı başkent, aynı kaynak (TDV gane).
- Ölçer: iki künyede de **yerleşim = 0** ("bu künyeye ait döneme sahip 0 kayıt"). Gana haritada fiilen `wagadu-gane-erken` kimliğiyle Kumbî Sâlih (Gāne) yerleşiminde görünür (yerlesimler_dogu_500_1281.js:1370+); `gane` kimliği kullanılmıyor. Kırılma/açık kırılma: ölçer 0 / 0 (kırılma yok çünkü yerleşim yok).
- En ağır 3 bulgu: ① mükerrer künye (`gane` silinmeli ya da `wagadu-gane-erken`e katılmalı); ② 1076 "Murâbıt fethi" modern literatürde **tartışmalı** (Conrad & Fisher) — künye ve kronoloji bunu beyansız kesin veriyor; TDV esastır (1076), çelişki `ic_not`ta iki kaynakla beyan edilmeli; ③ `gane` kronolojisindeki Tunka Manin/el-Bekrî maddesi TDV gane'ye atfediliyor ama okunan TDV gane metninde Tunka Manin geçmiyor (çekilen özette yok) + ikinci dayanak Vikipedi → kaynak düzelt/ayır.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| wagadu-gane-erken | Wagadu (Gāne) — Erken Dönem | 0701-01-01 | 1076-01-01 | ASIL künye; boyası var (renkler.py:262); Kumbî Sâlih'te kullanılıyor |
| gane | Gāne (Gana) Devleti | 1000-01-01 | 1076-01-01 | **MÜKERRER**; boyası var (renkler.py:4432) ama hiçbir yerleşimde yok; kuşak ucu f (D210 ic_not_f) |
| (yok) | Gāne bakiyesi 1076-1240 (Mema Tunkara, Susu Kante, Hingui Niakhaté, Diara) | — | — | Atlasta bilinçli "devlet kimliği yok" beyanı (kronoloji_sinir_dogu_500_1281.js ~7303); TDV mali: dört krallık 1240'ta Mali'ce alındı. Eksik evre sayılmaz, beyanlı boşluk |
Gana Cumhuriyeti (`gana`, 1957) ayrı devlettir, ilgisiz (ozet de bunu söylüyor).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f (wagadu-gane-erken) 0701 | 0701-01-01 | TDV gane: «Bir rivayete göre Gāne'de idare VIII. yüzyılda … Soninke soyuna mensup Sudanlı bir aileye geçmiş» (okundu, islamansiklopedisi.org.tr/gane); aynı madde: kuruluşu bilinmiyor, «milâttan sonra İlkçağ'lardan itibaren» siyasî varlık | Gale Encyclopedia of World History «Empire of Ghana» (encyclopedia.com): kuruluş belirsiz, bazı kaynaklar IV. yy şehir devleti; XI. yy'da zirve | 701 bir **rivayet**'in "VIII. yy" ifadesinden türetilmiş yıl (yüzyıl hassasiyeti, 701 = kuşak ucu). Kaynak "kuruluş yılı yok" diyor | f:"0701-01-01" kalabilir ancak `kesinlik:"yuzyil"` + ic_not_f "KUŞAK UCU, ölçüm değil: TDV 'VIII. yüzyıl' rivayeti; kuruluş yılı bilinmiyor" beyanı şart |
| t 1076 | 1076-01-01 | TDV gane: «1076 yılında da Gāne şehrini ele geçirdiler» (Murâbıtlar); TDV Murâbıtlar/Mali aynı yıl (künye ic_not_t'de okundu); 469 H = 1076-77 | Levtzion, "The Sahara and the Sudan…", *Cambridge History of Africa* II (CUP 1979) s. 637-684 (özet okundu, metin çekilemedi). KARŞI görüş: Conrad & Fisher, "The Conquest That Never Was", *History in Africa* 9 (1982) ve 10 (1983): 1076 tarihi tek kaynağa (ez-Zuhrî) dayanır, fethi gösteren açık kaynak yok | TDV esas: **1076 kalsın**. Ama çelişki iki kaynağıyla `ic_not_t`ta beyan edilmeli. 1076 gün yok → `YYYY-01-01`, yıl hassasiyeti | mevcut t korunur; ic_not_t'ye "Conrad & Fisher 1982-83: fetih tartışmalı; TDV esas alındı" eklenir |
| t 1240 (devletin sonu) | künyede yok (1076) | TDV mali: Gāne «1240 yılında Mali İmparatorluğu tarafından … ele geçirilmesiyle tarih sahnesinden silindi» | Gale «Empire of Ghana»: 1203 Susu saldırısı Gana'nın askerî-iktisadî gücünü bitirdi; son kalıntılar Mali'ye katıldı (1240 tarihi o maddede YOK) | Çelişki değil: TDV 1076'yı devlet sonu, 1240'ı bakiye krallıkların sonu sayar (künye ic_not_t bunu zaten ayrıştırmış). Not: Gale maddesi 1087 sonrası "bir ölçüde toparlandı" ve Susu 1203 der — 1076-1240 arası "Gana" ile "dört krallık" ayrımı kaynaklar arası tutarsız | t:1076 kalsın; 1076-1240 dilimi beyanlı boşluk olarak sürsün |

## c) Kronoloji
Künye `kronoloji:[...]` (devletler.js:11117-11121; evren dışı): 1054 Evdeguşt, 1068 el-Bekrî, 1076 son.
Değişmez 2 evreninde:
- kronoloji_sinir_dogu_500_1281.js ~7276-7295: 1076 Kumbî Sâlih'in Murâbıtlarca alınışı (devlet: murabitlar kimliği, taraflar wagadu-gane-erken) — var, TDV mali alıntılı.
- ~7303-7316: 1087 Ebû Bekir ölümü, dört krallık, "devlet kimliği yok" beyanı — var.
- ~10920-10936: 1240 Mali'nin Kumbî Sâlih'i alışı — var, yıl hassasiyeti.
- ~11865: Kumbî Sâlih zincir başı (wagadu-gane-erken).
- kronoloji_sinir_amerika_afrika3_1024.js:36: 0990 Awdaghust (UNESCO GHA III).
Sorunlar / eksikler:
1. 1054 Evdeguşt (Avdagost) maddesi yalnız künye içi (evren dışı). Önerilen (Değişmez 2 evrenine): `{ t:"1054-01-01", b:"Murâbıtlar Sanhâce Emirliği'nin eski başşehri Evdeguşt'u (Awdaghust) aldı", yer_id:"Awdaghust (Aoudaghost)", kaynak:"TDV Gāne (islamansiklopedisi.org.tr/gane): «1054 yılında … Evdeguşt'u … ele geçirdiler»", ic_not:"yıl hassasiyeti; Awdaghust yerleşimi s:[] / veri-yok — sahiplik atanamadı" }` (öncelik düşük; yerleşim s:[] olduğundan harita etkisi yok).
2. Künye 1068 maddesi (Tunka Manin): TDV gane metninde Tunka Manin geçmiyor (okunan özet: "not mentioned"). Atıf TDV gane'ye değil Vikipedi'ye dayanıyor → **Vikipedi tek dayanak olamaz.** Öneri: kaynak olarak el-Bekrî çevirisi (Levtzion & Hopkins, *Corpus of Early Arabic Sources for West African History*, CUP 1981, s. 62-87; bu oturumda okunamadı) yazılsın ya da madde "kaynak teyitsiz" işaretlensin. Evren dışı olduğundan harita etkisi yok.
3. 1076 maddesine `ic_not`: Conrad & Fisher tartışması + "ele geçirdi" ifadesi TDV'den; fetihin yalnız ez-Zuhrî'ye dayandığı notu (ek bilgi, çelişki beyanı).
4. 1203 Susu (Sumaoro) saldırısı: Gale «Empire of Ghana» verir; TDV mali/gane kapsıyor mu bakılmalı (TDV gane: Gāne'nin düşmesi üzerine Susu bağımsızlığını ilan etti). Kronolojide 1203 maddesi yok; kaynak ikinci basamak teyidi gelmeden eklenmesin ("çekilemedi").

## d) Harita uyumu
- Açık kırılma: **0** (ölçerde kırılma yok; her iki künyenin yerleşimi 0).
- Haritada Gana: Kumbî Sâlih (Gāne) yerleşimi tek nokta (yerlesimler_dogu_500_1281.js:1370; dilimler: wagadu-gane-erken → 1076 murabitlar → 1087 beyanlı boşluk → 1240 mali). `gane` künyesi hiçbir yerleşimde yok → mükerrer künye ölü.
- Awdaghust (Aoudaghost) `s:[]`, "veri-yok" — 990 sonrası Gana hegemonyası (UNESCO GHA III) haritada yok; TDV Gāne/Murâbıtlar'dan Evdeguşt 1054 Murâbıt; öncesi Gana hâkimiyeti için kaynak hâlâ "UNESCO" (ikinci akademik kaynak aranmalı). Öneri: Awdaghust için s: `0990-01-01 → 1054-01-01 wagadu-gane-erken` ancak Gana hegemonyasının "ekonomik, sonra siyasi" olduğu (UNESCO) BEYANLI YAKLAŞIKLIK + ikinci kaynak teyidi gelirse. Şimdilik yazılmaz.
- Wagadu'nun zirvedeki (XI. yy) alanı (Senegal-Nijer arası, Gale) haritada tek yerleşimle temsil ediliyor: coğrafi çıplaklık, "Voronoi petek" tek noktadan geniş bir bölgeyi boyar; kaynaklarda başka nokta (Awdaghust dışında) güvenle adlandırılamadı (Walata, Tegdaoust vb. için Levtzion & Hopkins gerek) — **bulunamadı/çekilemedi**.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js`: `gane` (satır 11111) künyesini kaldır **veya** `wagadu-gane-erken`e birleştir (`gane`yi alias yap); `renkler.py` BOYALAR'da dokunma (motor dondurma — tuz dosyası, ayrı onay). Yalnız devletler.js'te mükerrer künyeyi kaldırmak hiçbir yerleşimi etkilemez (0 kayıt).
2. `wagadu-gane-erken` künyesine: `kesinlik_f:"yuzyil"` (alan adı VERI-YAPISI'na göre) ve ic_not_f: "KUŞAK UCU: TDV 'VIII. yüzyıl' (rivayet); kuruluş yılı bilinmiyor".
3. ic_not_t'ye: "1076 tarihi: TDV gane/murabitlar/mali ortak; Conrad & Fisher (History in Africa 9, 1982; 10, 1983) fethi tartışmalı bulur — TDV esas alındı".
4. Künye içi 1068 maddesinin kaynağından Vikipedi'yi çıkar; TDV gane'de Tunka Manin geçmediğini not et (ya da madde dışı).
5. 1054 Evdeguşt maddesini Değişmez 2 evrenine taşıma (c-1).

## Erişilemeyen kaynaklar
- Levtzion, N. (1979) "The Sahara and the Sudan from the Arab conquest of the Maghrib to the rise of the Almoravids", *Cambridge History of Africa* II, 637-684, DOI 10.1017/CHOL9780521215923.013 — yalnız özet okundu. Soru: Gana'nın 1076 sonrası durumu ve Wagadu'nun kuruluş zamanı için ne diyor?
- Conrad & Fisher, "The Conquest that Never Was: Ghana and the Almoravids, 1076", *History in Africa* 9 (1982) 21-59 ve 10 (1983) 53-78 (cambridge.org, tam metin okunamadı; arama özeti kullanıldı). Soru: ez-Zuhrî dışında 1076 için bağımsız kaynak var mı?
- Levtzion & Hopkins (eds.), *Corpus of Early Arabic Sources for West African History*, CUP 1981 (el-Bekrî, Tunka Manin 1068).
- Britannica «Ghana empire» (403). Gale/encyclopedia.com okundu ama bibliyografik derinlik sınırlı; ayrıca TDV «Mali», «Murâbıtlar» bu oturumda yeniden okunmadı (künye ic_not'larına güvenildi).
