# 91 · Kuş Krallığı (Nubya: Kerma, Napata, Meroe) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (top100_olc.py: kush-krallik meroe-krallik kerma kerma-erken kush-25-hanedan; pre-kerma yalnız künye düzeyinde okundu)

## Özet
- Künye 6: `pre-kerma` (-3499→-2499), `kerma-erken` (-2449→-1749), `kerma` (-1749→-1499), `kush-krallik` (-0749→0349), `meroe-krallik` (-0590→0349), `kush-25-hanedan` (-0724→-0652). Haritada yerleşim: Kerma (2 dilim + 2 BOŞLUK dilimi), Meroe (1 dilim, -0299→0349); `meroe-krallik` ve `kush-25-hanedan` **0 yerleşim, haritada görünmüyor**; Napata (Merevî noktası 1281'den başlar) yok.
- Ölçer: açık kırılma 0 (kush-krallik 2 kırılma, kerma 2 + 1 yalnız otomatik «dönem ucu» maddeli, kerma-erken 2 + 1 otomatik). Sayı «0» ama sebep kapsam darlığı: Kuş'un Napata/Mısır dönemi hiç yerleşim üretmiyor, kırılma yok.
- En ağır 3 bulgu: (1) **MÜKERRER/KAPSAYAN: `meroe-krallik` (-0590→0349) bütünüyle `kush-krallik` (-0749→0349) içinde; aynı polity.** Üstelik «Meroe başkent» tarihi kaynaklarda çelişiyor: TDV `sudan` MÖ 590, Britannica (atlas künyesinde) MÖ 592, ama Treccani «Meroe» maddesi ve Cenevre Üniv. Kerma misyonu (kerma.ch) başkent/taşınmayı MÖ IV. yy'a koyar; PNAS 2026 (atlas yorumu) Meroitik dönemi MÖ 300-MS 350 verir. (2) **KONVANSİYON (Shaw 2000) farkı:** `kush-25-hanedan` f/t -0724/-0652; Shaw tablosu 25. Hanedan'ı c. MÖ 747-656 verir (⇒ -0746 / -0655). Ayrıca kerma.ch 713-656, TDV «yaklaşık 725-660». (3) Evren kronolojisi tutarsız tarihler taşıyor: Napata'nın Psamtik II tarafından alınışı üç ayrı yılda (evren -0592, `kush-krallik` künye kronolojisi -0589, `meroe-krallik` -0590).
- Eksik evren maddesi: 4 (Kerma'nın Mısır'a geçişi, Mısır'ın Nubya'dan çekilişi, Kuş'un Meroe merkezli evresi, Napata'nın Kuş merkezi oluşu). Eksik yerleşim/dilim: Napata (Merevî noktası pre-1281), Kerma -1079→ (Kuş), Meroe -0590/-0399→-0299.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| pre-kerma | Pre-Kerma Kültürü | -3499-01-01 | -2499-01-01 | VAR (kültür); kerma.ch: Pre-Kerma 3200-2500; yerleşim 1 (Kerma?) — ölçülmedi |
| kerma-erken | Erken ve Orta Kerma Krallığı | -2449-01-01 | -1749-01-01 | VAR; 1 yerleşim (Kerma), kaynak kerma.ch; otomatik uç 1 |
| kerma | Kerma Krallığı (Klasik Kerma) | -1749-01-01 | -1499-01-01 | VAR; 1 yerleşim; otomatik uç 1; kronoloji (künye içi) -1649, -1503 |
| kush-25-hanedan | Kusi 25. Hanedan (Mısır) | -0724-01-01 | -0652-01-01 | VAR; **0 yerleşim**; kaynak TDV (nube/sudan/misir) |
| kush-krallik | Kus (Napata–Meroe) Krallığı | -0749-01-01 | 0349-01-01 | VAR; 1 yerleşim (Meroe, -0299→0349) |
| meroe-krallik | Meroe Krallığı (Meroitik evre) | -0590-01-01 | 0349-01-01 | VAR; **0 yerleşim** — MÜKERRER (alt küme) |
| misir-3-ara | Mısır 3. Ara Dönem (21.-25. Hanedan) | -1068-01-01 | -0663-01-01 | ÖRTÜŞME: adı 25. Hanedan'ı (Kuş) da içerir, `kush-25-hanedan` ile -0724→-0663 çakışır; ikisi de 0 yerleşim (Mısır tarafı 20/66 dosyalarının konusu) |
**MÜKERRER:** `meroe-krallik` ⊂ `kush-krallik`. Kalıcı: `kush-krallik` (yerleşim 1, kronoloji mevcut, evren maddesi `yer_id:Meroe` var); `meroe-krallik` kronolojisi (devletler.js:22541-) birleştirilirken «Meroitik evre» künyede `kd:`/`ic_not` ile anılsın. Veri ref. (BOYALAR girdisi tuz: `meroe-krallik` kalır).
EKSİK evre: (i) Kerma sonrası Mısır işgali -1499→-1079 (künye yok; `misir-yeni-krallik` abi merkez adayı — 20-misir-yeni-krallik.md dosyasında borç); (ii) Kuş'un Napata öncesi/ erken evre (Kurru) — künye yok, kaynak okunmadı.

## b) f/t ve evreler (Mısır → Shaw 2000 KONVANSİYONU; Shaw tablosu bu makinede AÇILAMADI — değerler hafızadan, «doğrulanmadı»)
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| kerma-erken f | -2449 | kerma.ch (Univ. Geneva, M. Honegger/C. Bonnet misyonu): «Early Kerma circa 2450-2050» | Berlin Mısır Müzesi (atlas künyesinde okunmadı) | tek kaynak okundu | madde 2. kaynak: Bonnet/Honegger yayını (erişilemeyen) |
| kerma f/t | -1749 / -1499 | kerma.ch: «Classic Kerma circa 1750-1480»; Final Kerma 1480-1450; Thutmose I 1496-1483 | Berlin Müzesi: 1750-1550 (atlas ozet) | kerma.ch kendi (alçak) Mısır kronolojisini kullanır: Thutmose I 1496-1483. KONVANSİYON Shaw: Thutmose I c. MÖ 1504-1492 ⇒ Kerma'nın düşüşü ~ -1503 (atlas künye kronoloji -1503 doğru; künye t -1499 ile 4 yıl farklı) | t `-1499-01-01` → `-1503-01-01` (kesinlik onyil), `ic_not`: «kerma.ch 1480-1450 (alçak kronoloji); Shaw 2000 Thutmose I 1504; fark beyan» |
| Mısır'ın Nubya'dan çekilişi | `s:` BOŞLUK -1499→-1079 | kerma.ch: «Egyptian occupation 1480-1080»; «Dark Ages 1080-730: Withdrawal of Egyptian authority» | Shaw 2000 Yeni Krallık sonu 1069 (hafızadan) | -1079 ucu kerma.ch'nin 1080'idir; Shaw konvansiyonunda Yeni Krallık sonu MÖ 1069 ⇒ -1068 (atlas `misir-3-ara f` -1068 ✓) | Kerma BOŞLUK ucu -1079 → -1068 (hizalama) |
| kush-25-hanedan f | -0724 | TDV `nube`/`sudan`: «m.ö. yaklaşık 725-660» (yaklaşık) | kerma.ch: «25th Dynasty 713-656 BC» (Piankhy kurar) | Shaw 2000 (hafızadan): 747-656. Üç değer. KONVANSİYON Shaw | `f:-0746-01-01` (MÖ 747), `t:-0655-01-01` (MÖ 656; evrende zaten -0655 Psamtik I/Nitokris maddesi) — `ic_not`: «TDV ≈725-660, kerma.ch 713-656, Shaw 747-656; konvansiyon Shaw» |
| kush-25-hanedan t | -0652 | TDV: 660; Psamtik 663 (TDV `misir`) | kerma.ch 656 | Tanutamani'nin son direnişi 656; atlas -0652 (MÖ 653) iki kaynağın hiçbirine uymuyor (beyanda Met 653, dayanak değil) | -0655 |
| kush-krallik f | -0749 | TDV `nube`: Nûbeli reisler «Napata Kuş Krallığı'nı yeniden kurdular» (yıl yok) | kerma.ch: «Napatan period 730-400»; Shaw: Kashta c. 760-747 | f= Kashta'nın Mısır'a girişi, Kuş'un KURULUŞU DEĞİL; Napata krallığı daha eski (Alara/Kurru) — kaynak okunmadı | `kesinlik:{f:"yuzyil"}` + `ic_not` («f = Kashta/25. Hanedan öncesi; kuruluş yılı kaynakta yok»); önerilen f yine -0749 |
| Napata'nın alınışı / Meroe | -0589 (kush-krallik kron.), -0590 (meroe), -0592 (evren) | TDV `sudan`: «MÖ 590'da Mısır'ın Napata'ya saldırması» | Britannica 'Nubia' (atlas künyesinde, okunmadı): ~592; Herodotos/Psamtik II yıl 3 (593) | Shaw: Psamtik II 595-589; yıl 3 = 593 ⇒ -0592. Evren maddesi -0592 doğru | künye kronolojisi satırlarını -0592'ye hizala (evren dışı) |
| Meroe BAŞKENT/Meroitik evre | -0590 | TDV `sudan`: «MÖ 590 … merkezini Meroe'ye taşıyan Kuş Krallığı» | Treccani `Meroe`: «nel corso del 4° sec. a.C. i sovrani vi trasferirono la loro capitale da Napata»; kerma.ch: «capital moved from Kerma to Napata, and later to Meroe in the 4th century BC» | ÇELİŞKİ: TDV MÖ 590 / Treccani, kerma.ch MÖ IV. yy. TDV bu konuda esas kaynak ama Kuş TDV'nin ana konusu değil (Sudan maddesi); iki bağımsız akademik kaynak IV. yy diyor. Kraliyet mezarlığı Nuri→Meroe geçişi ~MÖ 270-300 literatürde | Meroitik evre f = `-0299-01-01` (MÖ 300; PNAS 2026 Meroitik dönem 300-350), çelişki `ic_not`'ta üç kaynakla; `meroe-krallik` künyesi kush-krallik'e birleştirilirse sorun kalmaz |
| t | 0349 | TDV `sudan`: «350 civarı yıkıldı» (Aksum saldırıları) | Britannica (atlas): 320-350; PNAS 2026 (atlas yorumu): ≤350; kerma.ch: Meroitic 400 BC-400 AD | uyumlu; kesinlik `onyil` | evren -0349/0349 maddesi var; değişiklik yok |

## c) Kronoloji
Evren (Değişmez 2) VAR — `data/olaylar_antik_misir_nubya.js` satırları: 4 (-0020 Samos Barışı), 5 (-0022 Petronius Napata'yı aldı), 6 (-0024 Kandake Elefantin/Philae), 36 (-0522 Kambises'in Kuş seferi), 38 (-0592 Psamtik II Nubya seferi), 42-43-45 (-0655 Psamtik/Nitokris; -0662 Teb yağması; -0663 Tantamani), 48 (-0724 Piye Mısır'a indi, onyil), 49 (-0749 Kashta), 60 (-1424 II. Amenhotep Napata'da), 63 (-1498 Thutmose I Asya seferi), 64 (-1524 Ahmose Aşağı Nubya), 68 (-1866 Sesostris III Semne), 75 (-2279 Harkhuf/Yam), 76 (-2299 Weni), 87 (0349 Aksum/Ezana Kuş'u yendi; yer_id Meroe) — hepsi Shaw/kaynaklı, kesinlik yıl/onyıl.
Evren DIŞI: `devletler.js` içi künye kronolojileri (Kerma -1649 Buhen, -1503 Thutmose I; kush-krallik -0749/-0689/-0589; kush-25: -0720, -0689; meroe -0590).
Çelişkiler: evren -0724 Piye «MÖ 725 civarı, 744-714 okuluna göre» (Piye'nin 21. yılı) ⇔ Shaw'da Piye 747-716 ⇒ yıl 21 = MÖ 727/726; fark ±2 (onyıl hassasiyetinde kabul, ama künye f=-0724 bu maddeye uyumlu değil Shaw'a göre, bkz. b).
Eksik, önerilen maddeler (Değişmez 2 ve Boşluk merdiveni borcu; sözdizimi evrende kullanılan JSON/JS biçimi):
```
{ t:"-1503-01-01", kesinlik:"onyil", b:"I. Thutmose Nubya'yı ilhak etti: Klasik Kerma sona erdi, Kerma Mısır'a katıldı (Dukki Gel kuruldu)", tur:"toprak-kayip", yer_id:"Kerma", kaynak:"kerma.ch/en/history: «Egyptian Occupation 1480-1080 … Destruction of the city of Kerma and foundation of Dukki Gel» (kerma.ch Thutmose I 1496-1483, alçak kronoloji) · KONVANSİYON Shaw 2000: Thutmose I c. MÖ 1504-1492 (hafızadan, doğrulanmadı) — fark ic_not'ta" }
{ t:"-1068-01-01", kesinlik:"onyil", b:"Mısır Nubya'dan çekildi: Kuş yeniden bağımsız (Napata çevresi)", tur:"toprak-kayip", yer_id:"Merevî", kaynak:"kerma.ch: «Dark Ages 1080-730: Withdrawal of Egyptian authority»; Shaw 2000 Yeni Krallık sonu 1069 (hafızadan); (20-misir-yeni-krallik.md zaten -1079/-1080 borcu not etti)" }
{ t:"-0299-01-01", kesinlik:"yuzyil", b:"Kuş'un Meroe merkezli evresi: kraliyet mezarlığı/başkent Meroe'ye kaydı (Meroitik dönem)", tur:"kurulus", yer_id:"Meroe", kaynak:"Treccani `Meroe` (MÖ IV. yy başkent nakli); kerma.ch (MÖ IV. yy Meroe); PNAS 2026 (atlas künye yorumu, okunmadı) «Meroitic period 300 BCE-350 CE»; TDV `sudan` MÖ 590 (ÇELİŞKİ — ic_not)" }
{ t:"-0746-01-01", kesinlik:"onyil", b:"Piye (Pankhi) Kuş'ta tahta çıktı: XXV. Hanedan başlangıcı", tur:"siyaset", yer_id:"Merevî", kaynak:"Shaw (ed.) 2000 (hafızadan, doğrulanmadı) 747-716; kerma.ch 713; TDV ≈725" }  // Napata yerleşimi (Merevî) gerektirir; kush-25 f bu madde ile kapanır
```
Not: «Napata (Cebel Barkal)» Atlas'ta ayrı yerleşim olarak yok; Merevî noktası (18.550, 31.850, yerlesimler_afrika.js:877) Napata'ya ~3 km — kayıt `s:` 1281'den başlıyor. yer_id olarak `Merevî` kullanıldı.

## d) Harita uyumu
Açık kırılma: 0 (+ yalnız otomatik «dönem ucu» maddesiyle kapanan 2: kerma -1499, kerma-erken -2449). Ölçer sayısı yanıltıcı: Kuş haritada neredeyse yok.
- `kush-krallik`: 1 yerleşim (Meroe -0299→0349). Napatan evre (-0749→-0299, 450 yıl) HARİTADA YOK: Napata/Merevî `s:` pre-1281 boş (var olduğu tarihte sahipsiz = Değişmez 1 ihlali olasılığı; Merevî `kur` 1281 olduğundan şu an delik sayılmıyor olabilir — ölçülmedi).
- `kush-25-hanedan`: 0 yerleşim → haritada görünmüyor. Öneri: Merevî (Napata) `s:[ -0746/-0749→-0655 kush-25-hanedan ]` + Teb/Memfis için `kush-25-hanedan` dilimi (Piye'nin fethi evrede -0724; Memfis/Teb yerleşimleri 20/66 dosyalarının sahası); Asvan/Elefantin.
- `meroe-krallik`: 0 yerleşim; birleştirme önerisi (a).
- Kerma (19.600, 30.410): `-1499→-1079` BOŞLUK (ABİ MERKEZ adayı misir-yeni-krallik; kerma.ch «Egyptian occupation 1480-1080»: Merkez Dukki Gel, Mısır valisi) ve `-1079→1281` BOŞLUK. Boşluk merdiveni: ① TDV ✗ ② kerma.ch: işgal 1480-1080 (okundu) ⇒ -1499→-1068 `misir-yeni-krallik` ABİ MERKEZ: Teb/Mısır valisi (Kuş valisi, Kush Viceroy) — kaynak «Dukki Gel Mısır şehri»; ③ -1068→-0749: «Dark Ages» ⇒ BEYANLI BOŞLUK (kaynak: kerma.ch «period poorly documented»); -0749→0349: kerma.ch tablosu Napatan (730-400) «western cemetery in Kerma extended», Meroitik (400 BC-400 AD) «occupation of the western cemetery» ⇒ Kerma Kuş sınırlarında: `kush-krallik` ABİ MERKEZ Napata/Meroe (BEYANLI YAKLAŞIKLIK; Kerma'nın siyasi rolü küçüktü). 0349→1281: TDV `nube` Makuria/Nobatia → `nube` künyesi (Dongola 0652→1281 `nube`) ⇒ 0349-0652 boşluk. Bunlar KASA için öneridir, uygulanmadı.
- En geniş an (-0299..): 1 yerleşim (Meroe). Bilinen büyük Kuş şehirleri: Napata/Cebel Barkal, Kurru, Nuri, Meroe ✓, Musawwarat es-Sufra, Naqa, Kawa, Pnubs/Kerma, Faras/Debeira (Aşağı Nubya, Meroe dönemi), Kalabşa; Napata-Meroe devri için Yerleşim eklenmeli (özellikle Napata, Kawa, Naqa, Pselkis/Dakka?).
- 1923-10-29 izi: bu künyelerde Türkiye dışı ufuk izi YOK (Sudan yerleşimleri 1899→1956; Merevî/Debbe `ingiliz-sudani` 1899-01-19 doğrudan TDV).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:19069` `kush-25-hanedan`: `f:"-0746-01-01"`, `t:"-0655-01-01"` (Shaw KONVANSİYONU) + `ic_not` (TDV ≈725-660; kerma.ch 713-656; Shaw 747-656). Harita 0 yerleşim: Merevî/Napata dilimi eklensin.
2. `data/devletler.js:22539` `meroe-krallik` → `kush-krallik`'e birleştir (MÜKERRER); Meroe `s:` zaten kush-krallik (yerlesimler_mo_afrika.js:9). Kaynak çelişkisi (TDV 590 / IV. yy) `ic_not`'ta iki-üç kaynakla.
3. `data/devletler.js:19133` `kerma`: `t:"-1503-01-01"` + ic_not (kerma.ch 1480; Shaw Thutmose I 1504); `data/yerlesimler_afrika.js:869` Kerma dilimleri hizalansın; BOŞLUK ucu -1079 → -1068.
4. Künye kronolojileri: Napata alınışı tek yıl (-0592); `kush-krallik` -0589 ve `meroe-krallik` -0590 satırları evren -0592 ile hizalansın (evren dışı).
5. `data/devletler.js:19137` `kush-krallik`: `kesinlik:{f:"yuzyil"}` + ic_not.
6. Yeni evren maddeleri: -1503 (Kerma), -1068 (Nubya çekilişi), -0299 (Meroe evresi), -0746 (Piye) — c) satırları.
7. Merevî noktasına (Napata) pre-1281 `s:` dilimleri: -1424→-1068 `misir-yeni-krallik` (II. Amenhotep Napata'da, evren -1424), -0749→-0299 `kush-krallik` (25. Hanedan -0746→-0655 `kush-25-hanedan`).

## Erişilemeyen kaynaklar
- Shaw, I. (ed.) *The Oxford History of Ancient Egypt* (2000), kronoloji tablosu (XXV. Hanedan 747-656; Thutmose I; Psamtik II) — okunamadı; bu dosyadaki Shaw değerleri hafızadandır, «doğrulanmadı». Soru: XXV. Hanedan başlangıç/bitiş, Thutmose I 1504-1492, Psamtik II 595-589.
- Török, L. *The Kingdom of Kush* (Brill 1997) / Edwards, D. *The Nubian Past* (2004) — Napata→Meroe nakil tarihi (MÖ 590 mı, IV. yy mı, kraliyet mezarlığı Nuri→Meroe ≈ MÖ 270).
- Britannica «Nubia»/«Meroe»/«Kush» (403); Iranica yok. Met Museum Timeline (HTTP 429).
- Peeters vd. 2026 PNAS «Meroitic period 300 BCE-350 CE» (atlas yerleşim yorumunda; okunmadı).
- kerma.ch «History» okundu (Univ. Geneva misyonu, yazar belirtmiyor; Honegger/Bonnet/Chaix yayınlarına gönderme) — ikinci bağımsız akademik kaynak: Bonnet & Valbelle, *The Nubian Pharaohs* (2006).
- Merevî (Napata) yerleşiminde Mısır Yeni Krallığı ve Kuş sahipliği: Edwards (2004), Kendall (Gebel Barkal).
