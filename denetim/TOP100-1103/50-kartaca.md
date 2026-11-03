# 50 · Kartaca (Pön) Devleti — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer top100_olc.py; kronoloji taraması k50.py, Değişmez 2 evreni: data/olaylar*.js + data/kronoloji_sinir*.js)

## Özet
- Künye 1 (`kartaca`), açık kırılma 2 (ikisi de Cartagena), eksik madde 4 (2'si kesin kaynaklı, 2'si aday).
- Ağır 1: **haritada yalnız 2 yerleşim var (Karthago + Cartagena)**; en geniş yıl -219'da bile 2. Pön devleti Tunus kıyısı, Tripolitania, Güneydoğu İberya, Baleares, Batı Sicilya (-240'a dek), Sardinya (-237'ye dek) üzerinde hüküm sürdü; bunların hiçbirinde `s: kartaca` yok (Cádiz yalnız `roma-cumhuriyeti` -205'ten).
- Ağır 2: **Cartagena `f:-0220` (MÖ 221) yanlış görünüyor.** Polybios 2.13.1 kuruluşu Ebro antlaşmasından (MÖ 226) ÖNCE koyar; Britannica 1911 «227». Treccani «221» der (Hasdrubal'ın ölüm yılı) — kaynak çelişkisi, ic_not'a yazılmalı.
- Ağır 3: Pön Savaşları kronolojisi (264-241, 218-201, 149-146) Değişmez 2 evreninde eksiksiz ve MÖ→astronomik çevirileri doğru (aşağıda tablo); eksik olan Barkid İberyası (kuruluş + Yeni Kartaca'nın alınışı).
- MÖ→astronomik çeviri kontrolü: incelenen 25 tarihin (künye, kronoloji, yerleşim) 25'i doğru; hatalı çeviri YOK.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| kartaca | Kartaca (Pön) Devleti | -0813-01-01 | -0145-01-01 | Tek künye; evre bölünmesi yok. Eksik parça: yok (Mozia ayrı künye `mozia`, -0749→-0396, Fenike kolonisi; Kartaca'dan bağımsız tutulmuş). |

`--ara karthago` boş döndü; `--ara kartaca` yalnız bu künyeyi verdi.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| f | -0813-01-01 (MÖ 814, gelenek) | Treccani, Enciclopedia Italiana «Cartagine»: «La fondazione risale ... all'814 a. C.» (okundu; ayrıca «approssimativamente esatta», Menandros desteği) | Britannica 11. basım (1911) «Carthage» (Wikisource kopyası): «about 822 B.C.» ve «classical tradition ... about 850 B.C.» — Timaios 814/813 ile UYUŞMAZ; atlasın kendi olayı Iustinus 825 diyor | Gelenek tarihi; iki akademik kaynak aynı sayıya varmıyor. Künye açıklamada zaten "gelenek, kesinlik yüzyıl" diyor. Doğru. | Değişiklik yok; `ic_not`a ekle: «EB1911: ~822; Iustinus 825; arkeolojik ~760 (Docter 2002-03, yerleşimde)». |
| t | -0145-01-01 (MÖ 146) | Treccani «Cartagine»: «assalto generale ... marzo-aprile del 146 da Publio Cornelio Scipione Emiliano» | Britannica 1911: «after a heroic resistance the City fell in 146» (mevsim yok) | Yıl iki kaynakta teyitli (çift teyit); gün yok → yıl hassasiyeti doğru. | Değişiklik yok. |
| evre sınırları (Pön Savaşları) | bkz. c) | Treccani: 1. savaş 264 («Da ciò ebbe inizio la prima guerra»), Egadi 241; 2. savaş «primavera del 218» savaş ilanı; 3. savaş «consoli del 149» | EB1911: Aegates «ended the war (241)», Zama «October 19, 202», Hasdrubal Carthagena «in 227» | Atlas kronolojisiyle uyumlu. | — |

Not (Treccani ile EB1911 çelişkisi): 2. Pön Savaşı başlangıcı — atlas «Hannibal Saguntum'u aldı -0218» = MÖ 219 (Saguntum'un düşüşü, Polybios 3.17); Treccani'nin «primavera del 218» ifadesi Roma'nın savaş ilanıdır. İkisi farklı olayları tarihler; atlas başlığı «fitili ateşlendi» diyor, doğru.

## c) Kronoloji (Değişmez 2 evreni; dosya:satır)
Var olanlar (hepsinde MÖ→astronomik çeviri DOĞRU):
| madde | t | MÖ | dosya:satır |
|---|---|---|---|
| Kartaca'nın geleneksel kuruluşu | -0813 | 814 | data/olaylar_antik_akdeniz.js:167 |
| Kartaca Sardinya'ya yerleşti (Malkhos) | -0549 | 550 | data/olaylar_dunya_avrupa_mo.js:11 |
| Alalia deniz savaşı | -0534 | 535 | olaylar_antik_akdeniz.js:161 |
| Roma-Kartaca ilk antlaşma | -0508 | 509 | olaylar_antik_akdeniz.js:160 |
| Himera | -0479 | 480 | olaylar_antik_akdeniz.js:153 |
| Selinus/Himera yıkımı | -0408 | 409 | olaylar_antik_akdeniz.js:140 ; kronoloji_sinir_zincir_avrupa_h.js:11-12 |
| 1. Pön Savaşı başladı | -0263 | 264 | olaylar_antik_akdeniz.js:81 |
| Aegates, Sicilya Roma eyaleti | -0240 | 241 | olaylar_antik_akdeniz.js:76 |
| Roma Sardinya+Korsika'yı aldı | -0237 | 238 | olaylar_antik_akdeniz.js:75 |
| Ebro antlaşması | -0225 | 226 | olaylar_antik_akdeniz.js:74 |
| Saguntum / 2. Pön Savaşı | -0218 | 219 | olaylar_antik_akdeniz.js:70 |
| Hannibal Alpler | -0217 | 218 | :69 |
| Cannae | -0215 | 216 | :67 |
| Capua | -0210 | 211 | :66 |
| Tarent | -0208 | 209 | :65 (bu madde Cartagena'yı karşılamaz) |
| Ilipa ve Gades | -0205 | 206 | :64 |
| Zama | -0201 | 202 | :62 |
| Zama sonrası barış | -0200 | 201 | :60 |
| Masinissa saldırısı | -0149 | 150 | :46 |
| 3. Pön Savaşı başladı | -0148 | 149 | :45 |
| Kartaca yıkıldı | -0145 | 146 | :42 |

Yıkılış maddesi (:42) kaynağı Appianos Pun. 135 + TDV «Afrika»; yıl doğru. Mevsim (mart-nisan 146, Treccani) `d:` alanına eklenebilir.

Eksik / önerilen maddeler:
1. **Yeni Kartaca (Carthago Nova) kuruluşu** (haritadaki Cartagena `s:` başlangıcını karşılar):
   `{ t:"-0226-01-01", kesinlik:"yil", b:"Hasdrubal Yeni Kartaca'yı (Carthago Nova, Cartagena) kurdu: Pön İberyası'nın başkenti", yer_id:"Cartagena", tur:"kurulus", kaynak:"Polybios 2.13.1 «the foundation of the city called by some Carthage, and by others the New Town» (Ebro antlaşmasından önce, 13.7); Britannica 11. bs. (1911) «Carthage»: «Hasdrubal Pulcher built Carthagena in 227»; ÇELİŞKİ: Treccani «Cartagena»: «fu fondata da Asdrubale, dopo la morte di Amilcare, nel 221 a. C.»" }` (MÖ 227 = -0226). Kesin yıl 228/227 tartışmalı: ikinci akademik okuma CAH VII.2 (Walbank) için bkz. Erişilemeyen kaynaklar.
2. **Scipio Yeni Kartaca'yı aldı (MÖ 209):**
   `{ t:"-0208-01-01", kesinlik:"yil", b:"Scipio Yeni Kartaca'yı (Cartagena) aldı: Pön İberyası'nın başkenti Roma'ya geçti", yer_id:"Cartagena", tur:"toprak-kazanc", kaynak:"Treccani «Cartagena»: «P. Scipione nel 209 a. C. s'impadronì audacemente della città»; Polybios 10.8-20" }` — Cartagena `s:` t=-0208 bu maddeyi bekliyor (şu an yanında yalnız Tarent maddesi var, ilgisiz). Polybios 10.8-20 satırı bu oturumda OKUNMADI, yalnız Treccani okundu → ikinci kaynak aday.
3. **Hamilcar Barca'nın İberya seferi (MÖ 237 → -0236)** — aday; kaynak oturumda okunmadı (Polybios 2.1; Livius 21.2). Haritada Pön İberyası'nın nasıl genişlediğini açıklayan tek madde olurdu.
4. **Paralı askerler (Libya) Savaşı, MÖ 241-238 (→ -0240…-0237)** — aday; Treccani'de «dopo la guerra dei mercenari» geçiyor ama tarih okunmadı; Polybios 1.65-88.

## d) Harita uyumu
Ölçer: kırılma 4, ±30 günde alâkalı maddesi olmayan **2** (hepsi Cartagena).
| gün | yerleşim | durum | öneri |
|---|---|---|---|
| -0220-01-01 kazanç | Cartagena | en yakın madde "Qin birleşmesi" (alâkasız) | c.1 maddesi eklenip `s:` f'si **-0226-01-01**'e çekilmeli (Cartagena kaynağı «221» kayıt hatası: Polybios 2.13 ile çelişir). `s:` kaynak alanına Polybios+EB1911 yazılıp Treccani çelişkisi `ic_not`a beyan. |
| -0208-01-01 kayıp | Cartagena | en yakın madde Tarent (alâkasız) | c.2 maddesi. |
(-0759 Karthago kuruluşu: yıl yok, madde -0813 ile 54 yıl fark: kronolojideki madde gelenek, `s:` arkeolojik; `kur:` beyanı yerleşimde var. Kabul.)

En geniş yıl -219: 2 yerleşim (Karthago, Cartagena). Sahiplik doğru ama **eksik**. Noktası olmayan bölge en yakın peteğe emildiğinden Tunus-Cezayir sahili Karthago peteğinden boyanıyor olabilir; ölçülmedi (motor çıktısı bu makinede yok).
Eklenmesi gereken `s: kartaca` dönemleri (kaynak araştırması YAPILMADI, yalnız Treccani «Cartagine» ile desteklenenler işaretli):
- Sardinya: Kalyari (Cagliari; yerleşimde `s:` boş), Nora, Tharros, Sulci — Pön hâkimiyeti → Roma -0237 (Treccani: Sardinya'nın devri okundu).
- Batı Sicilya: Panormos/Palermo, Solunto (Treccani: «colonie di Mozia, Panormo e Solunto» Kartaca'ya bağlı), Lilybaion (MÖ 397'de Mozia'nın yıkımından sonra), Eryx, Drepana/Trapani → Roma -0240.
- Afrika: Utica, Hadrumetum (Sousse), Leptis Parva, Thapsus, Hippo Regius, Leptis Magna/Oea/Sabratha (Emporia) → -0145.
- İberya (-0236…-0205): Cádiz (Gadir; müttefik/özerk, `s:` şu an -0205'ten Roma), Malaka, Sexi.
- Baleares: Ibiza (Eivissa).
Her biri için "yerleşim o devirde Pön mü, müttefik mi?" ayrımı kaynakla yapılmalı; beyansız yaklaşıklık yazılmasın.

## Önerilen düzeltmeler (KASA için)
1. data/olaylar_antik_akdeniz.js — c.1 ve c.2 maddelerini ekle (-0226 ve -0208, yer_id:"Cartagena").
2. data/yerlesimler_avrupa.js:267 (Cartagena) — `s:[{f:"-0220-01-01",...kartaca}]` → `f:"-0226-01-01"`; kaynak: Polybios 2.13.1; EB1911; ÇELİŞKİ Treccani 221 → ic_not.
3. data/devletler.js:19173 (kartaca) — `ic_not`a EB1911 822/850 + Iustinus 825 + ~760 arkeolojik; yıkılış mevsimi «marzo-aprile 146».
4. Yeni `s: kartaca` dönemleri için yukarıdaki yerler listesi (ayrı kaynak turu).

## Erişilemeyen kaynaklar
- Cambridge Ancient History VIII (Rome and the Mediterranean to 133 B.C.), archive.org `cambridgeancient0008cook_c7g7` — tam metin 401 verdi (ödünç kitap). Soru: Hasdrubal Yeni Kartaca'yı hangi yıl kurdu (228/227/226)? Zama Ekim 202, barış 201, Sardinya 238.
- Polybios 2.13 / 10.8-20 (Perseus bölüm sayfası gövde döndürmedi; yalnız Thayer'in 2.13 özeti okundu, yıl vermiyor).
- Lancel, S., *Carthage: A History* (1995) — kuruluş tarihi ve Barkid İberya kronolojisi için.
- Treccani «Cartagine» 2. Pön Savaşı BİTİŞ yılı ve Barkid İberya yılları verilmedi (yalnız Zama anıldı).
- Britannica çevrimiçi 403 verdi; 1911 baskısı (Wikisource) kullanıldı, onun hakemli sayılması KASA kararı.

## Iranica / Oxford teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026; aktarım)
- OCD⁴ «Carthago Nova» (Keay) ve «Hasdrubal (1)»: «refounded as New Carthage by Hasdrubal (1) in 228 bc».
  **Hüküm (UMIT SALI):** Polybios 2.13 / EB1911 (227) ile OCD⁴ (228) ayrışıyor; atlasın -0220 (MÖ 221) hiçbirine
  uymuyor. OCD⁴ akademik ve güncel ⇒ Cartagena `s: kartaca` f **-0227-01-01** (MÖ 228) + kesinlik yil +
  `ic_not`: "OCD⁴ 228; EB1911 227 (Polybios 2.13 Hasdrubal'ın kuruşunu tarihlemez, yalnız Ebro antlaşmasını)".

## JSTOR teyidi (HAVVA SALI, tarayıcıdan, 4 Kasım 2026; aktarım)
- Yeni Kartaca: J. R. C. Martyn, *Speculum* 81/3 (2006) s. 799 «founded by Hasdrubal in 228 B.C.»; C. Cowherd, *Afro-Hispanic Review* 2/2 (1983) s. 23-25 (228; 221 Hasdrubal'ın ölümü) ⇒ OCD⁴ ile birlikte **MÖ 228 (-0227) teyit**; atlasın -0220'si Hasdrubal'ın ölüm yılıyla karıştırılmış görünüyor.
