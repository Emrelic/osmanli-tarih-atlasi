# 42 · Memlûk Sultanlığı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: top100_olc.py safevi memluk song)

## Özet
- Künye 1 (`memluk`, 1250-01-01 → 1517-04-13, harita `memluk`). Yerleşim 136, en geniş an 1406 (129). Kırılma 59, **AÇIK 20**.
- **Bahrî/Burcî evresi** künyede ayrı değil (TDV: Bahrî 1250-1382, Burcî 1382-1517; 1382 Berkûk) — tek künye kabul edilebilir; bölme gerekmiyor (aynı polity).
- Eksik madde: 5 (1250 kuruluş günü Değişmez 2 evreninde yok; Ridâniye gün hatası yok; Bahrî→Burcî 1382; Memlûk Halep/Şam Mercidâbık sonrası; Kudüs 1517-?).
- **En ağır 3 bulgu:** (1) `f:1250-01-01` Türanşâh'ın öldürülüşünden (TDV `seceruddur`: 30 Muharrem 648 / **4 Mayıs 1250**) ÖNCE — Eyyûbîler daha hükümdar; (2) künyenin 1250-05-02 satırı TDV'ye göre 4 Mayıs olmalı (Vikipedi-yansıması 2 Mayıs); (3) 1517-05-19 ve 1517-07-06 kırılmaları künye `t:1517-04-13`'ten SONRA: devlet ölmüşken yerleşimler Memlûk — iç tutarsızlık.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| memluk | Memlûk Sultanlığı (Mısır-Suriye) | 1250-01-01 | 1517-04-13 | TAM; Bahrî+Burcî tek künye |
| bagdat-memlukleri | Bağdat Memlükleri (Eyüplü–Kölemen) | 1704-01-01 | 1831-09-01 | AYRI devlet (Osmanlı eyaleti hanedanı); bu denetimin konusu DEĞİL |
Eksik evre: yok. "Eyyûbî→Memlûk" geçiş künyesi aranabilir (Eyyûbîler ayrı künye olmalı; denetim başka ajanda).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm / öneri |
|---|---|---|---|---|
| f | 1250-01-01 | TDV `seceruddur`: Türanşâh ve Şecerüddür tarihi «30 Muharrem 648 / 4 Mayıs 1250», Aybek'in tahta çıkışı «1 Rebîülâhir 648 / 3 Temmuz 1250» (kısa alıntı; yapı: emirler Şecerüddür'ü sultan seçti) · TDV `memlukler`: Aybek «1 Rebîülâhir 648 / 3 Temmuz 1250»; Faraskur «3 Muharrem 648 / 7 Nisan 1250» | Treccani `mamelucchi`: «1250» yıl (gün yok). Vikipedi-yansıması (DAYANAK DEĞİL, yön): 2 Mayıs 1250 | **f=1250-01-01 Eyyûbî Türanşâh sağken (Faraskur 7 Nisan 1250, ölümü Mayıs) ⇒ ERKEN.** Hüküm: f = **1250-05-04** (TDV; Şecerüddür/emirlerin iktidarı) — alternatif Aybek 1250-07-03 "resmen kuruldu" (TDV memlukler: «Memlükler Devleti resmen kurulmuş oldu»). Öneri 1250-05-04 + ic_not (TDV iki gün; seçim: Eyyûbî soyunun sonu). 2. akademik kaynak: Cambridge History of Egypt vol.1 — ERİŞİLEMEDİ. |
| Türanşâh satırı | künye kronoloji 1250-05-02 | TDV `seceruddur` 4 Mayıs | — | 05-02 → 05-04 (TDV esas). |
| Ayn Câlût | 1260-09-03 | TDV `memlukler`: «25 Ramazan 658 / 3 Eylül 1260» | Treccani yalnız 1260 | DOĞRU (künye ve `olaylar_t5_1000b.js:49` 1260-09-03). |
| Akkâ | 1291-05-18 | TDV `akka`: «1291'de … Akkâ'yı zaptetti» (yıl, gün yok); TDV `memlukler` gün yok | `olaylar_ek5.js:98` kaynağı | Gün TDV'de yok → 2. kaynak gerek (Iranica/EI²: 18 Mayıs 1291). Yıl doğru. |
| Bahrî→Burcî | künyede yok | TDV `memlukler`: Bahrî 1250-1382, Burcî 1382-1517; Berkûk «Ramazan 784 / Kasım 1382» | — | Evre maddesi eksik (c). |
| Mercidâbık | 1516-08-24 | TDV `memlukler`: «25 Receb 922 / 24 Ağustos 1516» | TDV `caldiran`'dan bağımsız Treccani: 1516 | DOĞRU. |
| Ridâniye | 1517-01-22 | TDV `ridaniye-savasi`: «28 Zilhicce 922 (22 Ocak 1517)»; madde 29 Zilhicce/23 Ocak'ı hatalı sayıyor | TDV `memlukler` 23 Ocak 1517 (**TDV içi çelişki**; ridaniye maddesi ayrıntılı ⇒ esas) | DOĞRU (22 Ocak). Çelişki `ic_not`ta iki maddeyle beyan edilmeli. |
| t | 1517-04-13 | TDV `memlukler` ve `ridaniye-savasi`: Tomanbay «21 Rebîülevvel 923 / 13 Nisan 1517» idam | Treccani `mamelucchi`: 1517 | DOĞRU. Ayrıca TDV: Selim Kahire'ye 23 Muharrem 923 / 15 Şubat 1517'de girdi; Tomanbay 27-28 Ocak 1517'de kısa süre geri girdi. t'yi 1517-04-13'te tutmak mantıklı (hükümdarın sonu). |

## c) Kronoloji
VAR (Değişmez 2 evreni): Ayn Câlût `olaylar_t5_1000b.js:49` (1260-09-03); Baybars Yafa 1268-03-08 `olaylar_2s_1019.js:131`, Antakya 1268-05-18 `:145`; Akkâ 1291-05-18 `olaylar_ek5.js:98`; Sûr 1291-07-14 `olaylar_ortacag_ortadogu.js:208`; Malatya 1315-04-28 `olaylar_ek20.js:115`, 1338 `:134`; Elbistan 1381/1384 `olaylar_2s_0919.js:91`; Mercidâbık `olaylar.js:71`; Ridâniye `olaylar.js:73-74`; Süveyş 1517-01-24 `olaylar_ek5.js:92`; Amman 1516-12-28 `olaylar_ek5.js:91`; Mercidâbık öncesi Safevî Musul/Sincar `olaylar_2s_1019.js:260`.
Künye `kronoloji:` içinde (evren dışı): 1250-05-02, 1277-07-01, 1400, 1485, 1517-04-13.
EKSİK (öneri satırları):
```
{ t:"1250-05-04", kesinlik:"gun", b:"Memlûk emirleri Türanşâh'ı öldürdü; Şecerüddür sultan seçildi — Eyyûbî hânedanının Mısır'daki sonu", tur:"kurulus", yer_id:"Kahire", kaynak:"TDV `seceruddur`: «30 Muharrem 648 / 4 Mayıs 1250» (emirler Türanşâh'ı öldürdü, Şecerüddür'ü sultan seçti); TDV `memlukler`: Faraskur 7 Nisan 1250" }
{ t:"1250-07-03", kesinlik:"gun", b:"Aybek tahta çıktı — Memlûk Devleti resmen kuruldu", tur:"hukumdar", yer_id:"Kahire", kaynak:"TDV `memlukler`: «1 Rebîülâhir 648 / 3 Temmuz 1250»" }
{ t:"1382-11-01", kesinlik:"ay", b:"Berkûk tahta çıktı — Bahrî Memlûkler'den Burcî Memlûkler'e geçiş", tur:"hukumdar", yer_id:"Kahire", kaynak:"TDV `memlukler`: «Ramazan 784 / Kasım 1382» (ay hassasiyeti; gün yok)" }
{ t:"1516-08-24", kesinlik:"gun", b:"Halep, Hama, Humus ve Şam Memlûk idaresinden Osmanlı'ya geçti — Kansu Gavri'nin ölümü", tur:"toprak-kayip", yer_id:"Halep", kaynak:"TDV `memlukler`: Mercidâbık 25 Receb 922 / 24 Ağustos 1516; Şam'a giriş ayrı gün (kaynak aranacak: Osmanlı Şam'a 1516-09-26?) — GÜN TEYİTSİZ, yalnız Mercidâbık tek gün" }
{ t:"1517-04-13", kesinlik:"gun", b:"Tomanbay Bâbüzüveyle'de idam edildi — Memlûk Sultanlığı sona erdi", tur:"son", yer_id:"Kahire", kaynak:"TDV `memlukler`; TDV `ridaniye-savasi`: «21 Rebîülevvel 923 / 13 Nisan 1517»" }
```
Düzeltme: `olaylar.js:73`, kaynak notu: "TDV `memlukler` 23 Ocak, `ridaniye-savasi` 22 Ocak — esas ridaniye (madde 23'ü hatalı sayar)" `ic_not_t` ekle.

## d) Harita uyumu
Ölçer: kırılma 59, AÇIK 20. Yerleşim 1250:6 → 1276:22 → 1289:119 (Akkâ/Sûr/Trablus) → 1406:129 (en geniş).
Ön tespit: 1250'de yalnız 6 yerleşim; 1250-1289 arası Suriye'nin (Halep Moğol/Eyyûbî; Şam 1260 sonrası) boş kalması TARİHSEL olarak uyumlu (Suriye'nin Memlûk idaresi 1260). Treccani da "1260'dan itibaren Suriye" der — Mısır'da 1250, Suriye'de 1260 (bkz. `1263:16`).
| gün | yerleşimler | öneri |
|---|---|---|
| 1266-08-24 | Misis (Yakapınar) | Kilikya Memlûk seferi 1266 (Sis/Misis) — madde YOK; Vikipedi'siz dayanak: TDV `misis`. Kaynak aranmalı; yıl düzeyi `t:1266-01-01`. |
| 1268-01-01 | İskenderun | Antakya maddesi (`olaylar_2s_1019.js:145`, 1268-05-18) VAR; İskenderun TDV `iskenderun` «1268'de Memlükler Antakya Prinkepsliği'ne son verince» ⇒ dönem t:1268-05-18 yap. |
| 1277-01-01 | Birecik | Baybars 1277 Anadolu seferi; Birecik Memlûk Birecik 1277? kaynaksız. Kaynak ara. |
| 1289-01-01 | Trablusşam | Trablus Kalavun 1289-04-26/27 fethi (Haçlı) — madde YOK ⇒ ekle (kaynak: TDV `trablus`, çekilemedi); dönem t'sini 1289-04'e al. |
| 1299-01-01 | Hama | Hama 1299 Memlûk valisi/Eyyûbî Hama krallığı sonu 1341; Hama'nın 1299 yılı yönetim değişimi — kaynak ara; kaynaksızsa kaldır. |
| 1335 / 1337 | Eski Malatya / Maraş | Eretna 1335 `olaylar_ek16.js:59` yanlış ilişkili; Malatya Memlûk→Eretna? TDV `malatya`: «1338'den itibaren yeniden Memlükler» (`olaylar_ek20.js:134`) ⇒ Malatya'nın 1335 kaybı 1315-1338 arası Eretna işgali beyanıyla çelişkili: dönem kaybı `1335` doğru, geri dönüş 1338. |
| 1375-04-14 | Sis (Kozan) | Memlûk Kilikya Ermeni Krallığı'na son verdi 1375 (Sis düştü); madde `olaylar_ek20.js:67` mentionlu (Karamanoğlu), ama Sis'in alınışı ayrı madde değil ⇒ ekle: "Sis'in alınışı, Kilikya Ermeni Krallığı sona erdi" kaynak: TDV `sis`? çekilemedi. |
| 1381-01-01 / 1384-01-01 | Elbistan, Maraş, Divriği | `olaylar_2s_0919.js:91` Elbistan 1381/1384 VAR (1384 yıl düzeyi); Maraş/Divriği aynı olaya bağlı mı: kaynak yok → ayırma. |
| 1402-07-28 | Arapkir, Malatya, Hısn-ı Mansûr, Kâhta | Ankara Savaşı günü (1402-07-28): Memlûk'ün Timur-sonrası kazancı Ankara maddesiyle bağlantısız; Malatya TDV'ye göre 1399'da Osmanlı'ya geçti (`olaylar_ek.js:46`) ve Memlûk 1402+ iade. Gün kaynaksız → kesinlik yıl. |
| 1396 / 1500 | Cirge, Benî Süveyf | Mısır içi idari yerleşimler: kırılma kaynaksız; atlas 1396-01-01/1500-01-01 yer tutucu (yıl) — sahiplik zaten Memlûk; muhtemelen "boşluk→Memlûk" yerleştirmesi. Ya `f` ufku. |
| 1402-1418 | Besni | Dulkadıroğlu Mehmed Bey Besni 1418 `olaylar` VAR (`yer` farklı). |
| 1435 / 1465 | Ürgüp / Siverek, Urfa | Ürgüp 1435: kaynaksız (Burgonya maddesi alâkasız). Urfa 1465 kayıp: Akkoyunlu/Memlûk 1465 kaynak bul. |
| 1516-08-24 | Arapkir, Besni, Divriği, Malatya | Mercidâbık ile aynı gün; fakat TDV/atlas (`olaylar_2s_1019.js:262`): bu yerler Bıyıklı Mehmed Paşa tarafından Mercidâbık'tan ÖNCE (Mayıs-Ağustos 1516) alındı ⇒ Memlûk'ten kayıp tarihi ya Mercidâbık günü ya "yaz 1516"; yer adı maddeye eklenmeli. |
| 1516-12-21 | Refah | Gazze maddesi (Han Yûnus) 1516-12-21'den VAR; Refah `yer` değil — ekle. |
| **1517-05-19** | Benhâ, Bilbîs, Bürüllüs, Demenhûr, … (Delta) | **Künye t=1517-04-13'ten 36 gün SONRA.** Alâkalı madde: İskenderiye'nin teslimi (`olaylar_ek5.js`, "Mısır fethinin tamamlanması"). Düzelt: Delta yerleşimleri t:1517-04-13 ya da maddeye gün ver. |
| **1517-07-06** | Bedir, Hurma, Râbiğ, Türabe | Hicaz'ın katılışı (Mekke Şerifi oğlu) maddesi VAR (`olaylar_ek5.js`) ama Memlûk t'den (04-13) 84 gün sonra; Hicaz Memlûk himayesi (şeriflik) — beyan: "yarı bağımlı". Önerilen: kırılma t'sini madde gününe hizala ve künye ozet'ine dipnot. |
En geniş an 1406: 129 yerleşim — Mısır, Suriye, Hicaz, Kilikya sınırları; Malatya/Besni/Maraş (1381-1384 Memlûk/Dulkadir salınımı) kontrol edilmeli: Maraş 1384'te Dulkadir, 1406'da Memlûk görünüyor mu ⇒ ölçülmedi.

## Önerilen düzeltmeler (KASA için)
1. `devletler.js` `memluk`: `f:"1250-01-01"` → `"1250-05-04"` (+ic_not: TDV `seceruddur` 4 Mayıs; Aybek 3 Temmuz alternatif); künye kronoloji `1250-05-02` → `1250-05-04`.
2. Yeni madde satırları (c): 1250-05-04, 1250-07-03, 1382-11 (ay), 1517-04-13 evren içine.
3. 1517-05-19 ve 1517-07-06 kırılmalarını `t:1517-04-13` ile hizala (Delta) ya da beyanlı Hicaz yarı-bağımlılığı.
4. `olaylar.js:73-74` Ridâniye: ic_not (TDV iki gün çelişkisi).
5. Antakya sonrası İskenderun `t:1268-05-18` hizası; Trablus 1289-04 maddesi ekle (kaynak aranacak).

## Erişilemeyen kaynaklar
- Cambridge History of Egypt vol.1 (Petry): «Islamic Egypt 640–1517» — Memlûk f günü (2 Mayıs mı 4 Mayıs mı).
- Encyclopaedia of Islam², «Mamlūks» (Ayalon) / «Aybak» — 1250 günü; Akkâ 18 Mayıs 1291 günü.
- Iranica yok (konu dışı). TDV `trablus`, `sis`, `misis` maddeleri çekilemedi/denenmedi (Trablus 1289, Sis 1375).
- Şam'ın Osmanlı'ya geçiş günü: TDV `sam` — denenmedi.
