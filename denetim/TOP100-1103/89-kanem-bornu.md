# 89 · Kanem-Bornu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (top100_olc.py: kanem-bornu; yerleşim ve kronoloji taraması Grep/Read ile)

## Özet
- Künye 1 (`kanem-bornu`, 0800-01-01 → 1905-01-01) + ilişkili ayrı künyeler: `rabih` (1893-1900, ayrı polity, doğru ayrılmış), `kanem-tubu` (1281-1913, Teda-Daza sahası; örtüşme/mükerrer DEĞİL ama Kanem bölgesinde yerleşim sahipliği karışabilir), `hausa-sehir-devletleri`, `sokoto`.
- Ölçer: 8 kırılma günü, açık 4 (1465-01-01 Birni N'gazargamu · 1814-01-01 Kukava · 1900-04-22 Kukava · 1902-01-01 4 yerleşim), yalnız otomatik maddeyle kapanan 0. Evren (olaylar*/kronoloji_sinir*) maddesi çok az: yalnız 1759 Bilma, 1893 Râbih, 1900-04-22 Kusseri.
- En ağır 3 bulgu: (1) **Fizan/Libya içindeki 11 yerleşim 1281→1577 `kanem-bornu`ya yazılı**; TDV `fizan` Kânim hâkimiyetini «Kânim-Bornu savaşlarından sonra erken XVI. yy» da bitirir, Osmanlı'ya geçişi 1551 verir (TDV `kanim` 1571, atlas 1577 — üç farklı değer), ve Vaddân/Zilla/Sokna/Merâde/Câlû'nun Kânim'e ait olduğuna dair kaynak yok (Njimi/Mao'dan ≈1700 km). (2) f=0800-01-01 için TDV'de yıl yok; ikinci akademik kaynak okunamadı → kaynaksız uç, kesinlik `yuzyil` olmalı. (3) Birni N'gazargamu `kur`/f=1465-01-01 TDV'nin hükümdarlık başlangıcıdır; TDV `kanim` şehri başkent yapış yılı olarak 1472 verir; 1465 kırılması maddesizdir.
- Eksik evren maddesi: 6 öneri (1472 Ngazargamu, 1809 Kânimî zaferi, 1814 Kukava, 1902 paylaşım, 1900 maddesine Kukava odağı, 1577→1551 Fizan).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| kanem-bornu | Kanem-Bornu İmparatorluğu | 0800-01-01 | 1905-01-01 | VAR; kaynak alanı yalnız `kanim` (tam künye değil, slug); 18 yerleşim kaydı; harita ömrü 1210→1902 |
| rabih | Râbih b. Zübeyr Devleti | 1893-01-01 | 1900-04-22 | VAR, ayrı polity — doğru (Şehu hânedanını 1893'te yıkar, Dikva merkez) |
| kanem-tubu | Kanem Tubu Sahası (Teda-Daza) | 1281-01-01 | 1913-01-01 | VAR, ayrı (kuzey çöl halkı); Kanem devleti ile karıştırma riski — bkz. d) |
| hausa-sehir-devletleri / sokoto | komşu | — | — | ayrı dosya (90) |
EKSİK evre: Kanem (Njimi, ≤1382/1388) ile Bornu (Ngazargamu, 1472→1808; Kukava 1814→1893) ayrı evre künyesi değil; tek künye, bu kabul edilebilir (TDV `bornu`: Kânim Sultanlığı → Bornu Devleti tek hânedan, Seyfî). Bornu'nun 1809-1814 arası Ngazargamu harabe (Fûlânî saldırısı 1808) hâli künyede beyan edilmemiş.
MÜKERRER: bulunmadı.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f | 0800-01-01 | TDV `kanim` (A. Kavas): ilk tarih 1068 (Hava'nın İslâm'ı «Divân'a göre»), 1075-1086 Hummay; kuruluş yılı YOK | TDV `bornu`: «Dârfûr'dan gelen Zegâveler tarafından kurulmuş» — yıl YOK. İkinci akademik kaynak (Cambridge History of Africa 2-3; Lange *Diwan*; UNESCO GHA IV) açılamadı (archive.org 401/ödünç) | TEYİTSİZ. Web arama özetleri 700-800-9. yy karışık veriyor (hepsi Vikipedi yansıması/BlackPast, dayanak değil). Divân kral listesi efsanevî | f `0800-01-01` kalsın ama `kesinlik:{f:"yuzyil"}` + ic_not: «kuruluş yılı TDV'de yok; Divân listesi tahmini; Seyfî/İslâmî dönem 1075 TDV» |
| Seyfî İslâm | (künye kronoloji 1075, evren dışı) | TDV `kanim`/`bornu`: Hummay 1075-1086 | DergiPark (Hitit İlahiyat/başka) «Umme Jilmi 1085-1097» (özette okundu, künyesi okunmadı) ve Wikipedia 1085 | ÇELİŞKİ: TDV 1075, öteki 1085. TDV esas ⇒ 1075; çelişki ic_not'ta iki kaynakla | madde yok, gerekmez |
| Bornu'ya geçiş | — | TDV `bornu`: «Ömer b. İdrîs (1382-1387) … merkezi Kafa olan Bornu Devleti'ni kurdu» | TDV `kanim`: 1382-1387 Ömer b. İdrîs Kûkû'ya giderek Bornu'yu ele geçirir | çift TDV (aynı yazar). Ayrı akademik kaynak okunamadı | evren maddesi eklenebilir (yıl hassasiyeti 1382) |
| Ngazargamu başkent | yerleşim `kur:1465-01-01` | TDV `bornu`: «Ali b. Dûneme (1465-1497) Birni N'gazargamu'yu kurdu» (hükümdarlık aralığı, kuruluş yılı YOK) | TDV `kanim`: «1472: Ali b. Dûneme N'Gazargamu'yu yeni başşehir yapar». Web: 1470s-1480 (Vikipedi yansıması, dayanak değil) | 1465 = hükümdarlığın başı, olay günü DEĞİL; TDV `kanim` 1472 yıl veriyor | `kur` ve `s f` = 1472-01-01 (kesinlik yil) + madde |
| Bornu'da başkent taşıma | künye kronoloji (evren dışı) «1571 … başkent Ngazargamu'ya taşındı» | TDV `kanim`: 1472 | — | YANLIŞ (künye içi kronoloji; 1571 İdrîs Alooma zirvesi). Evren dışı olduğu için yalnız not | künye kronolojisindeki 1571 maddesinin b'sinden «başkent taşındı» çıkarılsın |
| 1808-09 | — | TDV `osman-b-fudi`: «1809: Bornu alındı ama Kânimî geri aldı» | TDV `bornu`: Kânimî 1809'da Fûlânîler'e karşı zafer | evrende YOK; Ngazargamu 1808'den beri harabe (yerleşim yorumu) | madde öner (c) |
| Kukava | `s f:1814-01-01` | TDV `kanim`: «1814: Kânimî Kukava'yı kurdu» | — (ikinci okunamadı) | doğru (yıl) | madde öner |
| t (Râbih) | `s: 1893-01-01 → rabih` | TDV `kanim`/`bornu`: 1893 | Web: 1892-94 (Vikipedi/Britannica özet; dayanak değil) | uyumlu | — |
| Râbih sonu | 1900-04-22 | TDV `kanim`: «Nisan 1900 Kuseyri» | Michel 2000 (RHA 218) / Bangui 2004 (atlas kaynağında, okunmadı); Britannica: 22 Nisan 1900 | gün 22 Nisan dışarıdan teyitli (okunmadı: erişilemeyen) | — |
| t | 1905-01-01 | TDV `kanim`: «1905: tarihî Kânim-Bornu Devleti tamamen Fransız işgali altına girer (1901-1905 Fransız seferleri)» | TDV `bornu`: «1902'de Bornu Fransa, İngiltere, Almanya arasında paylaşıldı» | ÇELİŞKİ (iki TDV): siyasi özerklik Râbih'le 1893'te bitti; Sanda Kura 1900'de Fransız himayesinde kuruldu (Dikva). Yerleşimler 1902'de kesiliyor | künye t 1905 kalabilir (Kânim/Çad kuzeyi 1905'e kadar direndi, TDV `kanim`), ic_not: «TDV bornu 1902 / kanim 1905, ikisi de beyan»; yerleşim 1902 ucu TDV bornu ile uyumlu |

### Fizan (TDV `fizan` ile)
- TDV `fizan`: «Fizan Kânim Sultanlığı'nın kontrolü altına girdi» (1190 sonrası, yıl yok); Trâgen kadısıyla yönetildi; «erken XVI. yy Bornu-Kânim savaşları»ndan sonra Evlâd-ı Muhammed hânedanı (Fas kökenli) iktidarı aldı, Merzûk'u kurup merkez yaptı; Osmanlı 1551'de Trablus'u alıp Fizan'ı sancak yaptı.
- Atlas: 1281→**1577** `kanem-bornu`. TDV `fizan` 1551, TDV `kanim` 1571 (Fizan Osmanlı eline), atlas 1577 → üç değer; 1577'nin kaynağı yok. Evlâd-ı Muhammed dönemi (erken XVI. yy→1551) için künye yok (BOŞLUK beyanı gerekir). Merzûk/Sebha/Gât/Ubârî/el-Katrûn bu hânedanın dönemine kadar `kanem-bornu` yazılı kalabilir ama 1577 yerine «erken XVI. yy» (kesin yıl yok; kaynak okunmadı).

## c) Kronoloji
Evren (Değişmez 2) VAR:
- `data/olaylar_2s_0919.js:493` — 1759-01-01 Agadez Tuaregleri Bilma'yı aldı (TDV `kanim`, yıl) — doğru.
- `data/olaylar_ek12.js:136` — 1893-01-01 Bornu, Râbih'in hâkimiyetine girdi (TDV `bornu`, yıl; yer_id Dikva) — doğru.
- `data/olaylar_ek12.js:143` — 1900-04-22 Râbih öldürüldü (Michel 2000/Bangui 2004 gün; TDV yıl) — doğru, ama `yer_id:"Dikva (Dikeo)"`: Kukava'daki `kanem-bornu` geri geçişi ile örtüşmesi için `odak_yer:["Kukava (Kukawa)","Dikva (Dikeo)"]` eklenmeli (ölçer açığı).
Evren DIŞI (künye `kronoloji:`): `data/devletler.js:6044-6047` — 0800 kuruluş, 1075 İslâm, 1571 Alooma, 1905 son (1571 notu yukarıdaki gibi yanlış).

Eksik, önerilen maddeler (hepsi yıl hassasiyeti; TDV `kanim`/`bornu`/`osman-b-fudi` okundu, ikinci bağımsız akademik kaynak okunamadı → `ic_not`: «tek kaynak TDV; ikinci kaynak erişilemedi»):
```
{ t:"1472-01-01", kesinlik:"yil", b:"Ali b. Dûneme Birni N'gazargamu'yu Bornu'nun yeni başşehri yaptı", yer_id:"Birni N'gazargamu", kaynak:"TDV `kanim` (A. Kavas) — «1472: Ali b. Dûneme, N'Gazargamu'yu yeni başşehir yapar» · TDV `bornu`: Ali b. Dûneme (1465-1497) Birni N'gazargamu'yu kurdu" }
{ t:"1809-01-01", kesinlik:"yil", b:"Muhammed el-Emîn el-Kânimî Fûlânîler'e karşı zafer kazandı: Bornu Sokoto cihadından kurtuldu", yer_id:"Birni N'gazargamu", kaynak:"TDV `bornu` — Kânimî «1809'da Fûlânîler'e karşı zafer»; TDV `osman-b-fudi` «1809: Bornu alındı, Kânimî geri aldı»" }
{ t:"1814-01-01", kesinlik:"yil", b:"Kânimî Kukava'yı kurdu: Bornu'nun yeni merkezi (Şehu hânedanı)", yer_id:"Kukava (Kukawa)", kaynak:"TDV `kanim` — «1814: Kânimî, Kukava'yı kurar»" }
{ t:"1893-01-01", ... }   // VAR; ek: Kukava yağmalanıp yıkıldı, Dikva başşehir (TDV `kanim` 1893) — mevcut maddenin odak_yer'ine Kukava zaten yazılı
{ t:"1902-01-01", kesinlik:"yil", b:"Bornu Fransa, İngiltere ve Almanya arasında paylaşıldı", yer_id:"Birni N'gazargamu", kaynak:"TDV `bornu` — «1902 yılında Bornu Fransa, İngiltere ve Almanya arasında paylaşıldı»" }
{ t:"1382-01-01", kesinlik:"yil", b:"Ömer b. İdrîs Çad gölünün batısına çekilip Bornu Devleti'ni kurdu (merkez Kafa)", yer_id:"Birni N'gazargamu", kaynak:"TDV `bornu` · TDV `kanim` (1382-1387)" }  // ⚠ Bornu tarafında henüz yerleşim/kırılma yok; kırılmaya bağlı olmadığından isteğe bağlı
```
Hesap notu (yer_id): 1472 ve 1809 maddeleri için yer_id olarak atlasta var olan yerleşim adı kullanılmalı; «Birni N'gazargamu» adı yerlesimler_e9353f.js:313 ile birebir.

## d) Harita uyumu
Açık: 4 (+0 yalnız otomatik madde).
| gün | yerleşim | öneri |
|---|---|---|
| 1465-01-01 kazanç | Birni N'gazargamu | f/kur → 1472-01-01 + c) 1472 maddesi |
| 1814-01-01 kazanç | Kukava | c) 1814 maddesi |
| 1900-04-22 kazanç | Kukava | 1900-04-22 maddesine `odak_yer` Kukava ekle. UYARI: Kukava 1893'te yıkıldı (TDV `kanim`: «Kukava'yı yağmalayıp yıkar»); Râbih'in ölümünden sonra Fransızlar Sanda Kura'yı DIKVA'da kurdu (web arama özeti: 5 Haziran 1900; dayanak değil). Kukava'nın 1900-04-22'de `kanem-bornu`ya geri geçişi kaynakta okunmadı → eşleştirme doğrulanmalı (erişilemeyen) |
| 1902-01-01 kayıp | Birni N'gazargamu, Dikva, Kukava, Mao | c) 1902 maddesi (TDV bornu). Dikva için ayrı sahip: yerlesimler_ok107.js:262 `alman-kamerun` 1902-01-01→1916-02-18 (TDV bornu) iyi beyanlı |
En geniş an 1482: 17 yerleşim, 11'i Fizan/Libya (yukarıdaki sorun). Gerçek Kânim-Bornu çekirdeği: Mao, Birni N'gazargamu, Kukava, Dikva (+Bilma 1281-1759). Bilma 1759 ucu TDV ile uyumlu.
**Şüpheli sahiplik**: `Vaddân (Cufre)`, `Zilla (Zella)`, `Sokna`, `Merâde`, `Câlû` (Cufra/Jufra, Sirte körfezi ve Awjila-Jalu; yerlesimler_h2_kuzeyafrika.js:402/407/420, yerlesimler_afrika.js:1145/1150) — `kaynak:"fizan"` ama TDV `fizan` bu yerlerden hiçbirini anmıyor, Kânim kontrolü yalnız Fizan'ı (Trâgen kadılığı) kapsar. Öneri (Boşluk merdiveni ③-④): bu beş yerleşimin 1281-1577 `kanem-bornu` dilimi kırpılsın ya da sahibi Hafsî/Trablus komşusu olarak yeniden araştırılsın; geçici olarak BEYANLI BOŞLUK. Kânim kontrolü doğrulanan çekirdek: Tırgan (Trâgen), Murzuk/Sebha/Gât/Ubârî/el-Katrûn (bunların Merzûk'u erken XVI. yy sonrası Evlâd-ı Muhammed kurdu ⇒ Murzuk noktasının 1281 başlangıcı anakronik; TDV `fizan`).
Mükerrer olasılığı: `kanem-tubu` (1281-1913) ile Kanem çekirdeğinde (Mao) çakışma yok (Mao `kanem-bornu`).

## Önerilen düzeltmeler (KASA için)
1. `data/yerlesimler_e9353f.js:313-314` Birni N'gazargamu: `kur:"1472-01-01"`, `s f:"1472-01-01"` (kesinlik yil, kaynak TDV `kanim`); + c) 1472 maddesi.
2. `data/yerlesimler_*`: Fizan oazları `1281-01-01 → 1577-01-01 kanem-bornu` dilimleri: TDV `fizan` ile 1577 → «erken XVI. yy (yıl okunmadı)» ve/veya 1551 (TDV `fizan`; TDV `kanim` 1571 çelişkisi `ic_not`'ta iki kaynakla). Vaddân/Zilla/Sokna/Merâde/Câlû dilimleri kaynaksız → kırp veya beyanlı boşluk.
3. `data/devletler.js:6039` künye: `kaynak:` slug `kanim` yerine tam künye (A. Kavas, TDV «Kânim», islamansiklopedisi.org.tr/kanim; TDV «Bornu», /bornu); `kesinlik:{f:"yuzyil"}`; ic_not f=0800 beyanı; t için TDV 1902/1905 çelişkisi beyanı.
4. `data/olaylar_ek12.js:143` 1900-04-22 maddesi: `odak_yer:["Kukava (Kukawa)","Dikva (Dikeo)"]`.
5. Yeni evren maddeleri: 1472, 1809, 1814, 1902 (ve isteğe bağlı 1382) — yukarıdaki satırlar.
6. Künye kronolojisi (evren dışı) 1571 maddesi: «başkent Ngazargamu'ya taşındı» ifadesi TDV ile çelişiyor.

## Erişilemeyen kaynaklar
- Cambridge History of Africa vol. 3 (Lange/Barkindo, Kanem-Bornu ch.) ve vol. 4/5 — archive.org `cambridgehistory03fage` / `...05fage` ödünçlü (401). Soru: Ngazargamu'nun kuruluş yılı (1470'ler?) ve Kanem başlangıç yüzyılı.
- UNESCO General History of Africa IV (Niane) Kanem-Bornu bölümü; Lange, *Le Diwan des sultans du Kanem-Bornu* (1977). Soru: Seyfî hânedanı/Hummay 1068/1075/1085 hangi tarih; f=0800 desteği.
- Michel (2000) *Revue historique des Armées* 218 / Bangui (2004) *Journal des africanistes* 74: Kusseri 22 Nisan 1900 günü.
- Encyclopaedia of Islam 2 «Kānim»/«Bornu» (Brill). Britannica/Iranica 403.
- Kukava'nın 1900-04-22 sonrası durumu (Sanda Kura/Garbai, Kukava mı Dikva mı) — hakemli kaynak.
- Fizan: Vaddân/Sokna/Zella/Câlû'nun 1281-1577 sahibi (TDV `trablusgarp`/`sirte`/`audjila`), Evlâd-ı Muhammed'in başlangıç yılı (Bornu-Kânim savaşları).
