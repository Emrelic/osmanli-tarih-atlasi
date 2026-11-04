# 100 · Birinci Bulgar Devleti — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer `top100_olc.py birinci-bulgar buyuk-bulgaristan`; s: dökümü `denetle.yerlesimleri_yukle`)

## Özet
- Künye 1 (`birinci-bulgar`, 0681-01-01 → 1018-01-01) + öncül `buyuk-bulgaristan` (0635 → 0680; 0 yerleşim, haritada görünmüyor) ; ardıl `bulgar-carligi` (1185) yalnız sınır.
- 4 yerleşim kaydı (Pliska, Preslav, Üsküp, Sofya), 6 kırılma, **AÇIK 3** (Pliska 0681, Preslav 0971, Sofya+Üsküp 1000). Yalnız otomatik maddeyle kapanan 0. `bulgaristan` harita anahtarı ⚠ satırı yok.
- Eksik madde: 5 öneri; düzeltme önerisi 8 s: satırı.
- En ağır 3 bulgu: (1) **971-1000 arası harita'da hiç Bulgar yerleşimi yok** (985: 0 yerleşim) — Samuil devleti (Prespa/Ohri, Sredets) 976-1018 haritada yok; Ohri'nin pre-1281 s: kaydı hiç yok, Prespa/Vidin 1003 öncesi yok. (2) Sofya `birinci-bulgar` yalnız 1000-1001 (1 yıl), oysa evren Sofya'nın 809'da Krum tarafından alındığını yazıyor (bekleyen_acik.js:20): dönem 0809→1001 olmalı. (3) Preslav kaybı `0971-01-01`, oysa evren (bekleyen_acik.js:52) Preslav'ın alınışını **971-04-13** yazıyor: s: 3,5 ay erken kapanıyor, alâkalı madde yok.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| buyuk-bulgaristan | Büyük Bulgaristan (Kubrat) | 0635-01-01 | 0680-01-01 | 0 yerleşim; ana devletin öncülü; f/t TDV beyanlı |
| birinci-bulgar | Birinci Bulgar Devleti | 0681-01-01 | 1018-01-01 | ana; ic_not'ta "971-976 kopukluğu koordinatöre bildirilir" notu var |
| idil-bulgar | İdil Bulgar Hanlığı | 0920-01-01 | 1236-01-01 | ayrı polity, **MÜKERRER değil** (Volga) — yalnız ad benzerliği |
| bulgar-carligi | II. Bulgar İmparatorluğu | 1185-01-01 | 1396-10-01 | ardıl, sınır |
**MÜKERRER:** yok. Not: HE'ye göre 976-1018 "Makedonsko Carstvo" ayrı polity; atlas tek künye (681-1018) tutuyor — doğru karar, çünkü TDV 971 sonrası batı topraklarını "bağımsızlığını korumuş" diyor (kaynak: künye alıntısı; TDV sayfası bu oturumda okundu, 971 ve 1018 doğrulandı).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 0681-01-01 | TDV «Bulgaristan» (okundu): Asparuh'la anlaşma «(681)» | TDV «İdil Bulgar Hanlığı» (künye ic_not_f): «681 yılında Tuna Bulgar Devleti'ni kurdu»; Oxford Dictionary of Byzantium «Balkans» (künye alıntısı: 680'de Asparuh) | Yıl 681 TDV-esas kabul. İki ayrı TDV maddesi bağımsız akademik kaynak sayılmaz; üçüncü kaynak (ODB «Bulgaria»/Theophanes/Nikephoros) **okunamadı**. 680 (Ongal) ile 681 (antlaşma) arası 1 yıl öncül boşluğu zorla kapatılmaz. |
| t | 1018-01-01 | TDV «Bulgaristan» (okundu): «1018'de … Ohri'ye girmesiyle Bulgar toprakları tamamıyla Bizans hâkimiyetine girmiş» | Hrvatska enciklopedija «Samuilo» (okundu): «1018. palo je Samuilovo carstvo» (özet; devletin 1018'de düştüğü, başkent Prespa→Ohrid) | Yıl kabul. **Uyarı:** evren `bizans_balkan.js:45` İvan Vladislav'ın 1018'de Draç önünde öldüğünü yazıyor (Skylitzes'te Şubat 1018) ve Ohri girişi yıl içinde; `1018-01-01` bu iki olaydan **önce**. Kaynak yalnız yıl veriyor → `01-01` kuralı gereği kalır, ama t'nin "yıl başı" olduğu ic_not_t'ye yazılsın; 1018 içindeki iki olay için s: gün-kırılması istenmemeli. |
| evre: Pliska→Preslav | 0893 | kronoloji_sinir_akdeniz3_1024.js:29 (0893) | künye `kronoloji` (Preslav Konseyi 893) | uyumlu; ikinci akademik kaynak (Whittow 1996 / Fine 1983) okunmadı |
| evre: 971 | 0971-01-01 | TDV «Bulgaristan»: «971'de Trakya ve Kuzey Bulgaristan Bizans tarafından zaptedilmiş» | evren bekleyen_acik.js:52: 971-04-13 Preslav (Skylitzes geleneği; kaynak okunmadı) | yıl teyitli; **gün**: Pliska/Preslav 971-04-13 (bekleyen_acik) — aynı gün ikinci akademik kaynakta teyit **yapılmadı** (ODB «John I Tzimiskes» / Treadgold, State & Society 1995 önerilir) |
| Samuil | kron 0997-01-01 «Samuil imparator ilan edildi» | HE: «makedonski car od 976.» (okundu) | Larousse «Ohrid»: «tsar Samuel (997-1014)» (künye kaynağı) | **Kaynaklar çelişiyor**: 976 (fiilî iktidar) vs 997 (çar unvanı; Roman'ın ölümü). Madde metni "ilan edildi" → 997 doğru kalır; ic_not'a 976 farkı yazılsın. |
| 1014 | künye kron 1014-01-01 (yıl) | TDV: «1014'te Stumitsa yöresinde … yok edilmiş» (Kleidion adı geçmez) | ODB «Samuel of Bulgaria» (künye alıntısı: July 1014) | Künye Emre kararıyla (TEYIT-KARAR-1014) yıl düzeyine indirilmiş, ama **evren** `olaylar_ortacag_bizans_balkan.js:42` hâlâ `1014-07-29` yazıyor → aynı olay iki hassasiyette. Öneri: kararı evrene uygula (`1014-01-01` + "ay: Temmuz, ODB") ya da ODB ayını ("July") esas alıp `1014-07-01`; KASA karar versin. |
| Samuil ölümü | 1014-10-06 | HE «Samuilo»: «6 October 1014» (okundu) | künye + evren :43 | uyumlu; ikinci bağımsız akademik kaynak okunmadı (Runciman 1930 künye alıntısı, ikincil) |
| Krum ölümü | evren 0814-04-14 | künye kron 0814-04-13 (Britannica) | — | **evren ile künye uyuşmuyor** (`bizans_balkan.js:26` 14 Nisan; ic_not "KRONOLOJI_COK_MS1_1000_IBER_BALKAN aynı günü taşıyor" diyor ama evren 14 diyor). Öneri evren → `0814-04-13` (Britannica; ikinci kaynak okunmadı) veya ikisini 14'e getir; KASA karar. |

## c) Kronoloji
Var olanlar (evren): 0809 Sofya `olaylar_ortacag_bekleyen_acik.js:20`; 0813 Dimetoka/Edirne :21-22; 0813-06-22 Versinikia `olaylar_ortacag_bizans_balkan.js:25`; 0814 Krum :26; 0831 Filibe `bekleyen_acik.js:24`; 0893 `kronoloji_sinir_akdeniz3_1024.js:29`; 0913 `bizans_balkan.js:31`; 0914 :39(bekleyen); 0924 :32; 0926 Tomislav :33; 0927-05-27 Simeon ölümü :34; 0927-09-08 barış :35; 0968→0971 `akdeniz3_1024.js:30`, `bekleyen_acik.js:52` (971-04-13), `bizans_balkan.js:38` (971-04-23 Dorostolon); 0986-08-17 Traian Kapısı :39; 1001 Sofya :40; 1003 Vidin :41; 1014-07-29 :42; 1014-10-06 :43; 1018 Ohri `bekleyen_acik.js:66` + `bizans_balkan.js:44-45`; 1040 Delyan :46; `once1281_geriye.js:43` 1014 Üsküp Bizans'a.
Evren dışı (künye `kronoloji:`): 0681 kuruluş, 0864 Boris Hristiyanlık, 0917-08-20 Anchialos, 0927 antlaşma, 0997 Samuil, 1014-10-06; **Kuruluş 0681 evrende yok** (evren yalnız 674 Emevî kuşatması, 717…) → Değişmez 2 açığı (Pliska 0681).
Eksik maddeler (kaynak okunmadan yazmayın — DOĞRULA):
```
{ t:"0681-01-01", b:"Bizans, Asparuh'un Tuna Bulgar devletini tanıdı ve vergi ödemeyi kabul etti", yer_id:"Pliska", kaynak:"TDV «Bulgaristan»: «dolayısıyla bu devletin varlığını tanıdı (681)»" }  // okundu
{ t:"0864-01-01", b:"Boris I Hristiyanlığı kabul etti", yer_id:"Preslav", kaynak:"TDV «Bulgaristan»: «Hıristiyanlık kabul edilerek (865)…»" }  // TDV 865 diyor; künye kron 864 → ÇELİŞKİ: TDV esas ⇒ 0865-01-01; farkı ic_not'a yaz
{ t:"0976-01-01", b:"Samuil iktidarı üstlendi; Bulgar devleti batıda (Prespa/Ohri) sürdü", yer_id:"Ohri", kaynak:"HE «Samuilo» (okundu: makedonski car od 976.) — ikinci kaynak DOĞRULA" }
{ t:"1004-01-01", b:"Basileios II Üsküp'ü (Skopje) aldı", yer_id:"Üsküp", kaynak:"DOĞRULA — atlas s: Üsküp 1014'e kadar Bulgar" }
{ t:"1018-01-01", ... (MEVCUT bizans_balkan.js:44'e odak_yer ekle) "Ohri", "Prespa" }
```
**TDV–künye çelişkisi:** TDV «Bulgaristan» Boris'in Hristiyanlığı kabulünü **865** verir, künye `kronoloji` 864 yazıyor (Vikipedi); TDV esas ⇒ 865.

## d) Harita uyumu
Yerleşim: 681:1 … 889:1, 905-969: 2, **985: 0**, 1001: 1. Açık **3**:
| gün | yerleşim | öneri |
|---|---|---|
| 0681-01-01 kazanç | Pliska | kuruluş maddesi (c); Pliska'nın 681'de kurulduğu kaynaksız (Bulgar başkenti Pliska arkeolojisi sonraki dönem olabilir) → TDV «Bulgaristan»'da Pliska kuruluşu okunmadı, DOĞRULA |
| 0971-01-01 kayıp | Preslav | s: t → `0971-04-13` (evren bekleyen_acik.js:52). Pliska aynı gün 01-01'de kapanıyor, evrende `kronoloji_sinir_akdeniz3_1024.js:30` 971-01-01 var (yıl düzeyi) — Pliska 971-01-01, Preslav 971-04-13 tutarsız; ikisi için tek gün: `0971-04-13` + beyan |
| 1000-01-01 kazanç | Sofya, Üsküp | "1000" gerçek olay değil. Sofya Krum'dan beri Bulgar (0809); 971 sonrası Bizans'a geçmiş mi belirsiz: evren 1001 Basileios Sofya'yı aldı (TDV: «Sofya'nın elden çıktığı yıl 1001») → Sofya `birinci-bulgar` **0809-01-01 → 1001-01-01**. Üsküp: Bulgar sahipliği başlangıcı kaynaksız (Boris I döneminde 9.yy; DOĞRULA) → `birinci-bulgar` Üsküp f için kaynak ara; bitiş 1014 (`geriye.js:43`) ama Basileios 1004'te aldı mı → DOĞRULA. |
En geniş (905-969): Pliska + Preslav = 2 nokta; gerçek sınır Tuna'dan Trakya/Makedonya'ya uzanıyor. Eksik: **Varna (Bizans 1000'e kadar kaydı yok; 9.yy Bulgar kıyısı), Silistre/Drăstăr (971'e kadar Bulgar; atlas 1281'den başlıyor), Vidin (1003'e kadar Bulgar; s: 1003'ten), Ohri, Prespa (976-1018 başkent), Filibe (831-971; s: yok mu — ölçülmedi), Edirne 813-?**. Bu şehirlerin sahipliği s:'de yok → petek emilir, Bulgar toprağı Pliska/Preslav'a çekilir. Çıkarım yazılmadı; öneri: Sofya, Vidin, Filibe, Ohri, Prespa (kaynakları: TDV «Bulgaristan», HE «Samuilo», evren 0809/0831/1003/1018).
971-1000: hiç Bulgar nokta yok. Öneri: Ohri/Prespa `birinci-bulgar` 0976-01-01 → 1018-01-01, Vidin `0840?`→1003 (DOĞRULA), Sofya 0809→1001, Üsküp →1014 (varsayım: kaynak).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` birinci-bulgar: ic_not_t'ye "t=yıl başı; İvan Vladislav ölümü ve Ohri girişi 1018 içinde" notu; 1014 künye kron tarihi ile evren (:42) hassasiyetini birleştir (karar KASA).
2. Künye `kronoloji`: Boris 864 → 865 (TDV).
3. Evren: `olaylar_ortacag_bizans_balkan.js:26` Krum 0814-04-14 ↔ künye 0814-04-13 hizala (Britannica; KASA karar).
4. Yerleşim s:: Preslav `0971-01-01`→`0971-04-13` (ve Pliska buna hizala); Sofya `0809-01-01→1001-01-01`; Üsküp f kaynaklandır; Ohri/Prespa/Vidin/Filibe/Varna/Silistre için Bulgar dönemleri ekle (DOĞRULA).
5. 0681 kuruluş maddesini evrene ekle (yukarıdaki satır); 976 Samuil maddesi.
6. `buyuk-bulgaristan`: haritada görünmüyor (Phanagoria/Taman için s: yok); 635-680 için TDV kaynaklı yer varsa (Phanagoria) ekle — öncelik düşük.

## Erişilemeyen kaynaklar
- Britannica «Bulgaria/First Bulgarian Empire» (403); Fine, *Early Medieval Balkans* (1983) ve Whittow 1996 tam metinleri okunamadı: soru → Pliska'nın kuruluş yılı, Üsküp ve Sofya sahipliği, Preslav 971-04-13.
- Treadgold, *History of the Byzantine State* (1997) / ODB «John I Tzimiskes»: Preslav 971-04-13 günü.
- TDV «Bulgaristan» md. ilk 100 000 karakter okundu; son 35 000 karakter okunmadı (Samuil 976/997 ve Ohri/Prespa başkentlik tarihleri orada olabilir).
- TDV «Bulgar» md. (İdil Bulgar için Nuri Yüce) ve ODB «Bulgaria» okunmadı.
