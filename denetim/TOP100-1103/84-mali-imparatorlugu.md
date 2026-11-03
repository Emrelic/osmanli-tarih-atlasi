# 84 · Mali İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer: top100_olc.py; TDV ve UNESCO GHA IV bu oturumda okundu)

## Özet
- **Künye 1** (`mali-imparatorlugu`; ilişkili ata `susu-kralligi` 0 yerleşim, 1076–1235 = 1281 ufku öncesi). **Mükerrer yok.**
- **Açık kırılma: 4** (Kumbî Sâlih 1400-12-31 · Timbuktu+Valata 1430-01-01 · Gao 1464-01-01 · Niani 1670-01-01). Haritada 5 yerleşim (Niani, Valata, Gao, Timbuktu, Kumbî Sâlih); en geniş yıl 1324 (5).
- **Eksik madde:** 5 (aşağıda). Kuruluş 1235 evrende yok (1281 ufku öncesi).
- **En ağır 3 bulgu:**
  1. **Gao 1324–1464 `mali-imparatorlugu` yanlış:** UNESCO GHA IV (Niane ed., s. 190): Mali'nin Gao üzerindeki hâkimiyeti "14. yüzyıl sonunda" sona erdi, Sunni hanedanı bağımsızlaştı; Tuareg 1433 civarı Sahel şehirlerini "possibly even Gao" aldı. Atlas Gao'yu 1464'e kadar Mali sayıyor ve 1464'te "Mali'den Songhay'a devir" kırılması üretiyor — o devir kaynakta yok (ölçerdeki AÇIK 1464).
  2. **Timbuktu 1281–1329 `mali-imparatorlugu` TDV ile çelişir:** TDV «Tinbüktü» maddesi Mense Mûsâ'nın şehri "(729/1329)" yılında sultanlığına kattığını yazar; 1281–1329 Mali sahipliği kaynaksız. (Yerleşim dosyasının kendi yorum satırı da "1329 Mansa Musa'nın ilhakı" der — `s:` buna uymuyor.)
  3. **t=1670 kaynaksız:** TDV Mali maddesi imparatorluğun sonunu 1430 (Tevârikler) verir; UNESCO GHA IV (Ly-Tall, s. 183-185) 1599 Cenne yenilgisini ("swan song") ve ardından Mali'nin "mere kingdom, Manding"e inmesini verir. 1670 hiçbir okunan kaynakta yok. Öneri: t=1599 (beyanlı) ya da 1670'i kaynaklayıp ardıl Mande krallığı künyesi aç.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| mali-imparatorlugu | Mali İmparatorluğu | 1235-01-01 | 1670-01-01 | VAR; 5 yerleşim; ozet metni "TDV'de ayrı madde yok" **yanlış** — TDV `mali` ve `tinbuktu`, `gao` kullanılıyor (ozet düzeltilmeli) |
| susu-kralligi | Susu (Sosso) | 1076-01-01 | 1235-01-01 | ilişkili ata; 0 yerleşim; uç 1235 Kirina ile uyumlu |
| (ardıl/komşu) | Tevârik (Tuareg) 1430–1468 Timbuktu/Valata | — | — | **EKSİK künye**: TDV `mali`/`tinbuktu` "Tevârikler 1430'da Tinbüktü, Velâte, Aravuan ve Gao'yu aldı" der; Tuareg konfederasyonu için Timbuktu bağlamı künye yok (tuareg-air Aïr'ın, uzak). Atlas bu aralıkları (Timbuktu 1430–1468, Valata 1430→) sahipsiz bırakıyor (yerlesimler_e9353f.js:137 'kunye-yok') |
| (ardıl) | Mande/Manding krallığı (Kangaba) 1599→ | — | — | **EKSİK künye**: UNESCO GHA IV: Mali "reduced to a mere kingdom, Manding" + Bambara Segu/Kaarta; Niani 1670 sonrası sahipsiz (e9353f.js:126) |
| (komşu) | Gao Sunni hanedanı ≈1400–1464 | — | — | **EKSİK evre** (bkz. Songhay dosyası, 85-): Songhay'a katılmalı |

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f | 1235-01-01 (yıl) | TDV «Mali» (islamansiklopedisi.org.tr/mali, okundu): «Kirina savaşı Mali İmparatorluğu’nun asıl kuruluş tarihi olarak kabul edilmektedir» (1235) | UNESCO GHA IV (Niane ed., Heinemann/UNESCO 1984; sahistory.org.za/…/general_history_africa_iv.pdf, okundu) "famous battle of Kirina in 1235" (metin satırı ~1278, Ch.6) | ÇİFT TEYİT | değişmez; `ic_not`a "çift teyit" |
| Mansa Musa hac | künye kron. 1324-01-01 (evren dışı) · evren 1325-01-01 (kronoloji_sinir_amerika_afrika3_1024.js:28) | TDV «Mali»: «1323-1325 yılları arasında gerçekleştirdiği hac seyahatine»; Mense Mûsâ 1312-1337 | UNESCO GHA IV: "pilgrimage to Mecca in 1325"; "Mansa Musa (1307-32)" | İki yıl çelişir (1324 künye kronolojisi ↔ 1325 evren). TDV aralığı 1323-1325 | evrende 1325 tutulsun (UNESCO), künye 1324 satırı için `ic_not`: "TDV 1323-1325 aralığı; Kahire'ye varış 1324 Temmuz (Levtzion/al-Umari — erişilemedi)". Düşük öncelik (sınır kırılması değil) |
| t | 1670-01-01 | TDV «Mali»: «Tevârikler’in 1430’da … Gao’yu ele geçirmesi üzerine ortadan kalktı» (TDV'de 1670 YOK) | UNESCO GHA IV Ch.7 (Ly-Tall): "In one last effort in 1599, the mansa of Mali tried to regain … Jenne … It was his swan song"; "Mali was reduced to a mere kingdom, Manding" | **ÇELİŞKİ (TDV-esas kuralı):** TDV 1430'u "devletin sonu" olarak yazar, ama aynı TDV maddesi Mense Süleyman sonrası zayıflamayı anlatır ve UNESCO 16. yy sonunu belgeler: 1430 kuzey illerin (Timbuktu, Valata, Aravan, Gao) kaybıdır, Mande çekirdeği sürmüştür. 1670 hiçbir okunan kaynakta yok (künye kaynağı kendi ⚠ notuyla "doğrulanamadı" diyor). | t=**1599-01-01** (yıl hassasiyeti, Cenne mağlubiyeti) + `ic_not`: "TDV: 1430 (kuzey illeri); UNESCO/Ly-Tall: 1599; 1670 Niani/Kangaba için kaynaksız → kaldırıldı". Alternatif: 1670'i kaynaklayan bir kaynak bulunursa tut. Karar KASA'nın; 2. bağımsız akademik kaynak (Levtzion 1973 / Hunwick 1999) erişilemedi → "çift teyit" yazılamaz |
| Timbuktu f (Mali) | 1281-01-01 | TDV «Tinbüktü»: Mense Mûsâ şehri "(729/1329)" kattı | UNESCO GHA IV: Mansa Musa Gao'ya 1324-5 uğradı (Niane; Timbuktu ilhakı yıl vermiyor) | 1281–1329 kaynaksız | Timbuktu `s:` Mali 1281→**1329-01-01** (hicrî 729 ∩ 1329 → 1329-01-01) ve 1281–1329 `__BOSLUK__` (beyan; abi merkez: Gao/Niani için kaynak yok) |
| Timbuktu t (Mali) | 1430-01-01 | TDV «Tinbüktü»/«Mali»: 1430 | UNESCO GHA IV s.173: Tuareg Timbuktu'yu "around 1433" aldı (Walata, Nema, possibly Gao) | TDV 1430 / UNESCO ~1433 | TDV esas: 1430 kalır; `ic_not`a UNESCO 1433 |
| Timbuktu 1430–1468 | sahipsiz | TDV: «Tevârikler … 1468'e kadar» | UNESCO | Tuareg dönemi | künye yok → merdiven ⑤ (abi merkez: Tuareg şeyhi Akil ag Malwal; UNESCO'da "Tuareg of Akil Ak Melaul" geçer) ile beyanlı `__BOSLUK__` kalsın veya `tuareg-timbuktu` künyesi aç |
| Valata t | 1430-01-01 | TDV «Mali»: 1430 | UNESCO GHA IV: "Walata" Tuareg ~1433 | uyumlu | değişmez |
| Gao Mali dilimi | 1324→1464 | TDV «Gao»: 1324 Songay Sultanı Asibay Mansa Musa'ya biat; «Sonni hanedanı (1339-1493)» | UNESCO GHA IV s.190: Mandingo Gao'yu c.1275 (daha olası 1285-1300) fethetti; "end of the fourteenth century marked the cessation of Mandingo domination over Gao. A new dynasty, that of the Sunni … became independent" | **ÇELİŞKİ:** atlas Mali'yi 1464'e uzatıyor; kaynaklar 14. yy sonu (1400 civarı) diyor. TDV Gao 1430'da Tuareg'e geçti diyor (UNESCO "possibly") | Gao `s:` `mali-imparatorlugu` 1324→**1400-01-01** (UNESCO "end of 14th c.", yüzyıl hassasiyeti, beyanlı), 1400→1464 Songhay-Sunni evresi (künye genişletmesi; bkz. 85-). 1281–1324 Gao: UNESCO Mali fethi c.1275-1300 → mevcut beyanlı boşluk korunabilir; fetih günü yok |
| Kumbî Sâlih Mali dilimi | 1240-01-01→1400-12-31 | TDV «Mali»: «1240 yılında Mali İmparatorluğu tarafından topraklarının tamamının ele geçirilmesiyle» | UNESCO GHA IV (Ch.6): Ghana Mali tarafından 1240'ta yıkıldı (metin satırı ~7167: "destroyed Ghana in 1240") | f=1240 çift teyit; **t=1400-12-31 kaynaksız** (yerleşim dosyası kendi 'ara el değişimi tanığı yok' diyor) | t için kaynak yoksa Mali'nin Kumbi'yi elinde tuttuğu son tanıklı tarih okunup oradan kesilmeli; 1430'a (kuzey illerin kaybı) hizalamak en azından kaynaklıdır. Aksi hâlde AÇIK 1400-12-31 kapanmaz |
| Niani t | 1670-01-01 | (yok) | UNESCO: Mali çekirdeği 1599'dan sonra "Manding" krallığı olarak sürer; Niani 16. yy başında "no longer the great metropolis" | 1670 kaynaksız; ancak Mande çekirdeği ayakta | Niani `s:` mali 1281→1599, sonrası ardıl künye (Manding/Kangaba) açılana dek beyanlı boşluk |

## c) Kronoloji
**Var olanlar (Değişmez 2 evreni)**
- 1240 Mali Gāne'yi tümüyle aldı (Kumbî Sâlih) — data/kronoloji_sinir_dogu_500_1281.js:10916-10936 (yıl)
- 1250 Yerelenku, 1307 Mansa Musa tahta çıktı, 1325 Mekke haccı, 1336 Maghan I indirildi, 1353 Ibn Battuta Niani'de, 1359 Fomba, 1374 Musa II, 1390 Maghan III — data/kronoloji_sinir_amerika_afrika3_1024.js:26-33 (UNESCO GHA IV, yıl)
- 1324 Gao: Kevkev → Mali — data/kronoloji_sinir_once1281_geriye.js:24 (TDV Gao; yıl)
- 1468 Songhay Timbuktu'yu aldı (Mali'nin nüfuz sonu) — data/kronoloji_sinir_guney_g8.js:103 (ortak madde)
- Künye `kronoloji:` 1235/1324/1468/1670 maddeleri **evren dışı**.

**Eksik / düzeltilecek**
```
{ t:"1329-01-01", b:"Mense Mûsâ Tinbüktü'yü Mali sultanlığına kattı", yer_id:"Timbuktu", kaynak:"TDV «Tinbüktü» (islamansiklopedisi.org.tr/tinbuktu, okundu): Mense Mûsâ şehri sultanlığına kattı «(729/1329)»; hicrî 729 ∩ 1329 → 1329-01-01 (kesişimin ilk günü). 2. kaynak: UNESCO GHA IV (Niane ed.) Ch.6-7 — yıl vermiyor; çift teyit yazılamaz." }
{ t:"1430-01-01", b:"Tevârikler Tinbüktü, Velâte ve Aravan'ı Mali'den aldı", yer_id:"Timbuktu", kaynak:"TDV «Mali» + «Tinbüktü»: «1430'da» (Tinbüktü 1468'e kadar Tevârik elinde); UNESCO GHA IV s.173: 'captured around 1433, along with … Walata, Nema'. TDV esas (1430), UNESCO 1433 ic_not." }
{ t:"1400-01-01", b:"Gao'da Mali hâkimiyeti sona erdi; Sunni hanedanı bağımsız", yer_id:"Gao", kaynak:"UNESCO GHA IV s.190: «end of the fourteenth century marked the cessation of Mandingo domination over Gao. A new dynasty, that of the Sunni … became independent». Yüzyıl hassasiyeti (1400-01-01 sınır işareti, 1399-12-31 de olabilir). TDV Gao: Sonni hanedanı 1339-1493 (çelişki: bağımsızlık günü yok)." }
{ t:"1599-01-01", b:"Mansa Mahmûd IV Cenne'de Fas ordusuna yenildi; Mali imparatorluğu son bulup 'Manding' krallığına indi", yer_id:"Niani", kaynak:"UNESCO GHA IV Ch.7 (M. Ly-Tall) s.184: «In one last effort in 1599 … It was his swan song»; «Mali was reduced to a mere kingdom, Manding». al-Sa'dî atıf (Houdas 1900 s.279, UNESCO dipnotu 38-39) ikincil aktarım. 2. bağımsız kaynak erişilemedi." }
{ t:"1235-01-01", b:"Sundiata Kirina'da Sumaoro'yu yendi; Mali İmparatorluğu kuruldu", yer_id:"Niani", kaynak:"TDV «Mali»: «Kirina savaşı Mali İmparatorluğu’nun asıl kuruluş tarihi»; UNESCO GHA IV Ch.6: 'battle of Kirina in 1235'. ÇİFT TEYİT. (1281 ufku öncesi → yalnız beyan; evrene zorunlu değil.)" }
```
Evren düzeltmesi: kronoloji_sinir_guney_g8.js:103 (1468) metni "bu Mali'nin bölgedeki nüfuzunun sonu" yerine Tuareg'in aracılığını (1430/1433) belirtmeli — metin zaten "şehir daha önce Mali'den çıkmıştı" diyor, tutarlı; düzeltme gerekmez.

## d) Harita uyumu
Açık kırılma: **4**; en geniş an 1324'te 5 yerleşim (Niani, Valata, Gao, Timbuktu, Kumbî Sâlih) — kaynakla Mali'nin 14. yy çekirdeği (Niani, Gao, Timbuktu, Valata, Kumbî Sâlih/Wagadu) örtüşüyor. Eksikler: Senegambiya illeri (Gambia, Kaabu, Casamance — UNESCO: Mali egemenliği 16. yy sonuna kadar sürdü; Kaabu künyesi `kaabu` devletler.js:18718 var ama Mali sahipliği yazılmamış), Nema/Mema, Jenne yok-ele-geçirme. Haritada Mali'nin batı illeri hiç görünmüyor.

| gün | yerleşim | durum | öneri |
|---|---|---|---|
| 1400-12-31 kayıp | Kumbî Sâlih | madde yok, t kaynaksız | t'yi kaynaklı tarihe çek (1430 hizası) ve 1430 maddesiyle kapat |
| 1430-01-01 kayıp | Timbuktu, Valata | madde yok | c) 1430 satırı |
| 1464-01-01 kayıp | Gao | madde yok; **yanlış sahiplik** | Gao Mali dilimini 1400'de kes (c) 1400 satırı); 1464 "devir" kalkar |
| 1670-01-01 kayıp | Niani | madde yok; t kaynaksız | t=1599'a çek, c) 1599 satırı |
Ek: Timbuktu 1281–1329 `__BOSLUK__` (c) 1329 satırı).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:6015` `mali-imparatorlugu`: `ozet` ("TDV'de ayrı madde yok" ifadesini sil); `t:"1599-01-01"` + `ic_not_t` (TDV 1430 / UNESCO 1599 / 1670 kaynaksız); `kaynak` UNESCO GHA IV Ch.6-7 satırı ekle.
2. `data/yerlesimler.js:1210` Timbuktu: `{f:"1281-01-01",t:"1329-01-01",d:"__BOSLUK__",kaynak:"BOŞLUK BEYANI: …"},{f:"1329-01-01",t:"1430-01-01",d:"mali-imparatorlugu",kaynak:"TDV tinbuktu (729/1329)"}`.
3. `data/yerlesimler_e9353f.js:158` Gao: `{f:"1324-01-01",t:"1400-01-01",d:"mali-imparatorlugu"}` + 1400–1464 Songhay-Sunni (85- öneri 1).
4. `data/yerlesimler_e9353f.js:122` Niani `t:"1599-01-01"` (karar 1'e bağlı); Kumbî Sâlih `t` 1400-12-31 kaynaklanana dek 1430 hizası + beyan.
5. Evren: c) bölümü 1329, 1400, 1430, 1599 (ve isteğe bağlı 1235) satırları.
6. Künye ekleri (başka makine): Tuareg-Timbuktu (1430–1468), Manding/Kangaba krallığı (1599→), Senegambiya illeri için Kaabu/Gambia Mali sahipliği.

## Erişilemeyen kaynaklar
- Levtzion, N., *Ancient Ghana and Mali*, Methuen 1973 — Soru: Mali'nin Gao üzerindeki hâkimiyeti hangi yıl bitti (≈1400 mü, 1430'lar mı)? Timbuktu'nun ilk Mali ilhakı 1329 mu (TDV) yoksa ≈1300 mü? Mansa Musa'nın Kahire'ye varışı (1324 Temmuz) ve hac yılı.
- Hunwick, J., *Timbuktu and the Songhay Empire: al-Sa'dī's Ta'rīkh al-sūdān down to 1613*, Brill 1999 — Soru: Mahmûd IV'ün Cenne saldırısı 1599 mu? Mali imparatorluğunun sonu/Manding krallığı.
- Cambridge History of Africa vol. 3 (c.1050–c.1600), CUP 1977 — archive.org `cambridgehistory03fage` 401 (ödünç kısıtlı). Soru: Mali'nin 14.-15. yy kuzey illeri kaybı tarihleri.
- Britannica "Mali empire / Songhai empire" — 403.
