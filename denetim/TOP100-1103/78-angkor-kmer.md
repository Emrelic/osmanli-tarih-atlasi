# 78 · Khmer İmparatorluğu (Angkor) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04

## Özet
- Künye: **2** ilgili: `angkor-kmer` (0802-01-01 → 1431-01-01) ve ardıl `kamboc-kralligi` (1431-01-01 → açık). Ana künye angkor-kmer: 28 yerleşim kaydı (802'de 11, 1205'te 20 en geniş, 1422'de 19); kırılma 8; **AÇIK kırılma: 0** (ölçer: alâkalı maddesiz kırılma yok; yalnız-otomatik-maddeyle kapanan 0).
- Ardıl kamboc-kralligi ölçeri (bilgi, bu sıranın dışı): kırılma 9, AÇIK 7 (1431-01-01 Battambang/Ben Tre/Can Tho/Kampot; 1434 Phnom Penh; 1618 Oudong; 1698 Ben Tre/Can Tho/Rach Gia/Saygon kayıp; 1795 Angkor-Siem Reap/Battambang/Pursat/Sisophon kayıp; 1863-08-11 Kampot/Kompong Cham/Kompong Thom/Kratie; 1970-10-09).
- MÜKERRER: yok (khmer-cumhuriyeti 1970-75 ayrı polity; chenla ayrı künye).
- En ağır 3 bulgu: (1) **t 1431 ↔ TDV 1432 çelişkisi** — künyede beyanlı ama kural (TDV esas) iki kaynaklı ic_not ister; Coedès "1431'de başkenti terk kararı" der, TDV 1432 yazar, Nhim 2015 1431'in yalnız Ayutthaya Yıllıkları'na dayandığını söyler; (2) Angkor için evren-içi (Değişmez 2) kronolojide kuruluş (802) ve yıkılış (1431) var ama Yasodharapura/Angkor kuruluşu, Çam işgali karşılığı Angkor'un geri alınışı ve 1220 Çam'dan çekilme/Sukhothai kopuşu eksik; 1283 ve 1296 maddeleri yalnız künye içinde (evren dışı); (3) Ardıl künyede (Phnom Penh 1434, Oudong 1618) 4 açık kırılma gün-kaynaklı maddesiz (Kamboçya Yıllıkları tarihleri tartışmalı).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| angkor-kmer | Kmer (Angkor) İmparatorluğu | 0802-01-01 | 1431-01-01 | Ana künye. harita:"angkor-kmer" |
| kamboc-kralligi | Kamboçya Krallığı (Post-Angkor) | 1431-01-01 | — | Ardıl, ayrı künye uygun (sınıf: ardıl yapı). Başkent Phnom Penh; kaynak:"kamboc" |
| chenla (kronoloji_sinir_amerika_afrika3_1024.js) | Chenla | ? | ? | öncül polity — başka sıra/künye; ölçülmedi |
EKSİK evre: yok (Funan/Chenla öncülleri ayrı polity). Kuruluş Angkor "Yasodharapura" 889 (Yasovarman I) künye içi beyan yok.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f 0802-01-01 | ic_not_f: Kulen dağı cakravartin kutsaması (Sdok Kak Thom) | Coedès, *The Indianized States of Southeast Asia* (EWC 1968), Bölüm VII §1: «we have abundant evidence that the effective beginning of the reign was 802» ve Hiraṇyadāma ritüeli «no longer be dependent on Java» (archive.org/details/theindianizedstatesofsoutheastasia, djvu okundu) | Chandler (Cambridge/Higham) ERİŞİLEMEDİ | 802 YIL doğru; gün yok → `0802-01-01` (kural: gün yoksa 01-01). 2. akademik kaynak ERİŞİLEMEDİ |
| t 1431-01-01 | künye 1431; ic_not'ta TDV 1432 beyan | Coedès, Bölüm XIV §1: «It was … in 1431, that the decision was taken to abandon the capital» (okundu) | TDV *Kamboçya*: «Kimer İmparatorluğu'nun komşu devletler tarafından 1432'de ortadan kaldırılmasıyla» (islamansiklopedisi.org.tr/kambocya, okundu) · Nhim, *Factors that Led to the Change of the Khmer Capitals*, Sophia Univ. Bulletin 2015 (angkordatabase.asia): 1431 yalnız Ayutthaya Yıllıkları'nda, Khmer yıllıkları anmıyor | **ÇELİŞKİ (1431 / 1432).** Kural: TDV esastır, çelişki iki kaynakla ic_not'ta. Ancak TDV cümlesi "imparatorluğun ortadan kaldırılması"nı tarihler, Coedès ise başkentin terk edilmesi kararını; Coedès'in dipnotunda iki Ayutthaya işgali (W. A. R. Wood, History of Siam 1926, s.65) ve 1431 terk. Öneri: künye t'yi `1432-01-01`e çek (TDV kuralı) ve ic_not'a «Coedès 1431 terk kararı; TDV 1432 ortadan kalkış; Nhim 2015: 1431 yalnız Ayutthaya kaynağı» yaz — karar KASA/Emre'nin (aşağıda iki seçenek). Kamboc-kralligi f eşzamanlı değişmeli (dönemler çakışmaz/boşluk olmaz) |

## c) Kronoloji
Evren içi VAR (Değişmez 2: data/olaylar*.js, kronoloji_sinir*.js):
- 0802-01-01 kuruluş: `data/olaylar_ortacag_dogu_guneydogu_asya.js:13` ✓ (yıl hassasiyeti).
- 1113-01-01 II. Suryavarman tahta: `:26`; 1177-01-01 Çam donanması Angkor'u bastı: `:27`; 1181-01-01 VII. Jayavarman: `:28`; 1220-01-01 Sukhothai/Indraditya Kmer'den kopuş: `:36`.
- 1431-01-01 Ayutthaya Angkor'u yağmaladı: `data/kronoloji_sinir_asya.js:25` (tur yikilis, onem 5).
- Künye içi (EVREN DIŞI, `data/devletler.js:7483-7497`): 1283 Kubilay'a haraç, 1296 Zhou Daguan, 1431, 1181, 0802 — bunlar evren sayılmaz.
Eksik (öneri; gün çevirisi/teyit gerektirmeyen yıl hassasiyetli, kaynak okundu atlıyorum):
```
{ t:"0889-01-01", b:"I. Yasovarman Yasodharapura'yı (Angkor) kurdu ve başkenti Roluos'tan buraya taşıdı", yer_id:"Angkor (Siem Reap)", kaynak:"Coedès 1968, Bölüm VII-VIII (okunacak; tarih bu oturumda doğrulanmadı)" }
{ t:"1431-01-01", ... mevcut madde; ic_not'a TDV 1432 çelişkisi eklensin }
{ t:"1434-01-01", b:"Ponhea Yat başkenti Basan'dan Phnom Penh'e (Chaktomuk) taşıdı", yer_id:"Phnom Penh", kaynak:"Coedès 1968 (Bölüm XIV: Basan'dan sonra 'Quatre-Bras'ta yerleşti'; yıl vermez); 1434 yılı ikincil kaynaklarda — akademik teyit ERİŞİLEMEDİ" }
```
Tüm yıllar yıl hassasiyeti; gün kaynakta yok.

## d) Harita uyumu
- angkor-kmer: AÇIK kırılma **0**, kırılma 8. En geniş: 1205 (20 yerleşim). Sahip dökümü ölçer vermedi; «en geniş yıldaki yerleşimlerin kaynakla uyumu» ölçülmedi — Kmer'in 1205'te (VII. Jayavarman, Coedès: Çam topraklarının işgali 1203-1220) gerçekten 20 yerleşim = Çam bölgeleri dahil olabilir; 1236'da 13'e düşüş = 1220 Çam'dan çekilme ile uyumlu görünüyor (ölçülmedi).
- 802'de 11 yerleşim sabit 1174'e kadar 11-12: Kulen/Roluos çevresi — küçük çekirdek, Coedès'in 802 sonrası genişleme tablosuyla (889 Yasodharapura, 11. yy Lopburi/Khorat) uyum için yerleşim eklenmesi önerilir (ölçülmedi).
- Ardıl kamboc-kralligi açıkları (bilgi): 1431-01-01 kazanç (Battambang, Ben Tre, Can Tho, Kampot) — madde yok; 1434 Phnom Penh; 1618 Oudong (Ana düşünce: Chey Chettha II; yıl 1618 doğrulanmadı); 1698 Saygon bölgesi Vietnam'a (Nguyen Huu Canh 1698; doğrulanmadı); 1795 Siam'a Battambang+Siem Reap (Angkor); 1863-08-11 Fransız himayesi (TDV: «1863'te Fransız sömürgesi»; atlas gün 1863-08-11 doğru görünüyor, TDV yalnız yıl); 1970-10-09 Khmer Cumhuriyeti (madde var 31 g uzakta — gün kayması mı yer listesi mi, bakılmalı).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:7483` angkor-kmer: `t` ve ic_not kararı (1431 mi 1432 mi; iki seçenek: (a) t:"1432-01-01" TDV esas, (b) 1431 kal ve ic_not'a çelişkiyi iki kaynakla yaz — mevcut ic_not'ta zaten 1432 anılıyor, kaynak adı eksik). Tutarlılık için kamboc-kralligi f aynı.
2. `data/kronoloji_sinir_asya.js:25` maddesine ic_not: TDV 1432 çelişkisi + Nhim 2015.
3. kamboc-kralligi (başka sıraya bildirilecek): 1434 Phnom Penh, 1618 Oudong, 1698, 1795, 1863, 1970 için karşılayıcı madde; yerleşim `yer:` listeleri.
4. angkor-kmer yerleşim: 802-1174 dönemi çekirdeği büyütmek için Yasodharapura/Roluos/Sambor Prei Kuk, Phimai, Lopburi, Vat Phu s: dönemleri (ölçülmedi).

## Erişilemeyen kaynaklar
- Michael Coe, *Angkor and the Khmer Civilization* (Thames & Hudson 2003) — archive.org metni çekilemedi (borç alma kısıtı).
- D. Chandler, *A History of Cambodia*, ve M. Vickery, *Cambodia after Angkor* (PhD, Yale 1977) / *Society, Economics and Politics in Pre-Angkor Cambodia*: «Angkor'un terki 1431/1432 mi, 15. yy ortası mı?»
- Charles Higham, *The Civilization of Angkor* (2001): «Jayavarman II'nin kutsaması 802 mi 800?»
- Britannica 403 verdi; Iranica ilgisiz.
- TDV'de Kmer/Angkor maddesi yok (arama 'kamboçya' → yalnız KAMBOÇYA ve ÇAMLAR); 'kmer'/'angkor' ayrı sorgu YAPILMADI — "yok" demiyorum.

## Hüküm (UMIT SALI, gece yetkisiyle; parti 7 Çola hükmüyle aynı ilke — koordinatör onaylı ilke)
- Khmer İslâm dünyası dışındadır ⇒ TDV-esas kuralı uygulanmaz; akademik kaynak belirler. Coedès 1431'i
  (başkentin terki kararı) verir, Nhim 2015 bu yılın Ayutthaya Yıllıkları'na dayandığını not eder ⇒ `angkor-kmer`
  t **1431-01-01** kesinlik yil **kalsın**; `ic_not_t`: "TDV «Kamboçya» 1432; Nhim 2015: 1431 yalnız Ayutthaya
  Yıllıkları'na dayanır — Vickery 1977 ile üçüncü teyit bekliyor".
