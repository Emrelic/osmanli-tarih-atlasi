# CÜLÛS +1 GÜN DESENİ — evren genişletme, birincil kaynak, hüküm

Görev: `oturumlar/` sevki (koordinatör, 11 Eylül 2026), kendi bulduğum
`İÇ TUTARSIZLIK` görevinin dört cülûs adayının kökenini araştırma.

## ① EVREN GENİŞLETİLDİ — 4 değil, TÜM Osmanlı cülûs kayıtları

`padisahlar.js`'in kendi `from`/`to` alanları **ay hassasiyetinde**
("YYYY-AA, ay yaklaşık" — dosyanın kendi başlık yorumu), yani gün
düzeyinde karşılaştırma orada YAPILAMAZ. Gün hassasiyetli cülûs
kayıtları `data/olaylar*.js`de yaşıyor — metin taraması (`tahta çıktı`,
`cülûs`, `hal'i` vb.) ile **29 kayıt** bulundu.

**29 kaydın tek tek karşılaştırması** (`t:` günü vs `gun:` alanının
verdiği gün):

```
✓ TAM EŞLEŞEN (23):  I.Murad-hariç 1362(ay-only,ölçülemez) · Kanunî 1520 ·
   II.Süleyman 1687 · Abdülmecid 1839 · II.Mehmed-2.cülus 1451 (bileşik
   "vefat/cülûs" ifadesi, cülûs günü AÇIKÇA ayrıştırılmış) · Yavuz Selim
   1512 · III.Murad 1574 · III.Mehmed 1595(16'sı, "15-16 Ocak" aralığı) ·
   I.Ahmed 1603 · I.Mustafa-1.cülus 1617 · II.Osman 1618 · IV.Murad 1623 ·
   Sultan İbrahim 1640 · III.Osman 1754 · III.Mustafa 1757 · I.Abdülhamid
   1774 · Abdülaziz 1861 · II.Abdülhamid 1876 · V.Mehmed Reşad 1909 ·
   VI.Mehmed Vahdeddin 1918 · II.Bayezid 1481 · II.Mustafa 1695 (HİCRÎ/
   MİLÂDÎ ÇİFTİ "21 Cemâziyelâhir 1106 / 6 Şubat 1695" — İKİSİ DE t: ile
   TUTARLI, yani hicrî-miladi çevirisi burada SORUNSUZ) · I.Mahmud 1730 ·
   III.Selim 1789
✗ +1 GÜN KAYMIŞ (4):  I.Mustafa-2.cülus 1622 · IV.Mehmed 1648 ·
   IV.Mustafa 1807 · II.Mahmud 1808   ← ZATEN BİLİNEN 4
◐ AYRI OLAY (1):     III.Mehmed 1595 (27 Ocak) — bu ayrı bir kayıt,
   "on dokuz şehzade boğduruldu" olayının GÜNÜDÜR (accession'ın kendisi
   değil, İKİ GÜN SONRAKİ bir eylem) — metin biraz gevşek yazılmış
   ("tahta çıktı" ifadesi kullanılmış) ama TARİH KENDİSİ doğru bir
   farklı olayı gösteriyor, HATA DEĞİL.
```

🔴 **SONUÇ: desen 4'TE KALIYOR, sistematik/evrensel DEĞİL.** 27
karşılaştırılabilir kayıttan **23'ü (%85) tam eşleşiyor** — hicrî/miladi
çifti taşıyan tek örnek (II. Mustafa) bile SORUNSUZ. Eğer neden genel
bir TAKVİM MESELESİ (Osmanlı gününün gün batımında başlaması, hicrî-
miladi çevrim belirsizliği) olsaydı, bu kadar yüksek bir ORANDA
(23/27) tutarlı çıkmasını BEKLEMEZDİK — bir genel mekanizma ya HEMEN
HEPSİNİ ya da RASGELE bir kısmını etkilerdi, "tam olarak bu 4 tanesi"
gibi keskin ve küçük bir alt kümeyi DEĞİL.

## ② BİRİNCİL KAYNAK — TDV, dört sultan için de bulundu

| Sultan | TDV slug | TDV verdiği tarih | veri `gun:` | veri `t:` |
|---|---|---|---|---|
| I. Mustafa (2. cülus) | `mustafa-i` | **20 Mayıs 1622** (9 Receb 1031, resmî biat töreni — saray baskını 19'unda) | 20 Mayıs 1622 ✓ | **1622-05-21** ✗ |
| IV. Mehmed | `mehmed-iv` | **8 Ağustos 1648** (18 Receb 1058) | 8 Ağustos 1648 ✓ | **1648-08-09** ✗ |
| IV. Mustafa | `mustafa-iv` | **29 Mayıs 1807** (21 Rebîülevvel 1222) | 29 Mayıs 1807 ✓ | **1807-05-30** ✗ |
| II. Mahmud | `mahmud-ii--osmanli` | **28 Temmuz 1808** (4 Cemâziyelâhir 1223) | 28 Temmuz 1808 ✓ | **1808-07-29** ✗ |

**Dördünde de**: TDV, `gun:` alanındaki tarihi BİREBİR doğruluyor;
`t:` alanı TDV'nin verdiği günden TAM 1 GÜN İLERİDE. I. Mustafa'da TDV
hatta İKİ aday tarih veriyor (19 saray baskını / 20 resmî tören) —
`t:`nin 21'i BUNLARIN HİÇBİRİNE denk gelmiyor, ne saray baskınına ne
törene.

## ③ HÜKÜM

🔴 **VERİ HATASI** — dört kayıt da düzeltilmeli, gerekçe:

1. Desen **4/27'lik dar bir alt kümede** kalıyor (②), takvim gibi genel
   bir mekanizmanın etkilemesi beklenen ORANDAN çok daha DÜŞÜK bir
   kesişim.
2. Hicrî/miladi çifti taşıyan TEK karşılaştırılabilir örnek (II.
   Mustafa, 1695) SORUNSUZ eşleşiyor — takvim çevirisi burada bir
   PROBLEM olmadığını GÖSTERİYOR.
3. Birincil kaynak (TDV) dördünde de `gun:`i DOĞRULUYOR, `t:`i
   DOĞRULAMIYOR — I. Mustafa'da TDV'nin verdiği İKİ aday günden
   HİÇBİRİ `t:`nin 21'iyle uyuşmuyor.
4. "Osmanlı günü gün batımında başlar" açıklaması aslında BEKLENEN
   YÖNÜN TERSİNE işler: hicrî gün gün batımıyla başladığı için hicrî
   bir tarihin miladi karşılığı GÜNÜN BAŞINDA MI SONUNDA MI
   HESAPLANDIĞINA göre **1 gün GERİYE** kayabilir (yani MİLADİ tarih
   HİCRÎ günden bir gün ÖNCEYE düşebilir), bir gün İLERİYE değil — bu
   açıklama dört vakanın YÖNÜYLE (t: hep +1, -1 değil) tam
   ÖRTÜŞMÜYOR, bu da TAKVİM açıklamasını ZAYIFLATIYOR.

**ÖNERİLEN DÜZELTME** (uygulamıyorum, `data/` donuk — D098):
```
I. Mustafa 2. cülus   t: 1622-05-21 → 1622-05-20
IV. Mehmed cülusu      t: 1648-08-09 → 1648-08-08
IV. Mustafa cülusu     t: 1807-05-30 → 1807-05-29
II. Mahmud cülusu      t: 1808-07-29 → 1808-07-28
```
Kökeni (nasıl 4 kayıt aynı yönde +1 kaymış) hâlâ AÇIKLANMADI — bu bir
ÇÖZÜLEMEDİ artığı (D033: kaynak yok, hangi işlemin bunu ürettiği
belirlenemedi; muhtemelen elle giriş sırasında bir toplu
düzeltme/kaydırma işlemi, ama BU BİR TAHMİNDİR, kanıtlanmadı).

## ④ KALAN 4 ADAY (Prut · Patrona Halil · Sened-i İttifak · Sapienza) — TEK TEK

| Olay | veri `t:` | veri `gun:` | TDV | HÜKÜM |
|---|---|---|---|---|
| **Sened-i İttifak** | 1808-10-07 | 29 Eylül 1808 | `sened-i-ittifak`: **"7 Ekim 1808"** — AYNEN alıntı: *"Sened-i İttifak diye isimlendirilen ... bir metin kaleme alındı (7 Ekim 1808)"* | 🟢 **`t:` DOĞRU.** `gun:`ün 29 Eylül'ü muhtemelen müzakerelerin BAŞLANGICI/bir ön-aşama — TDV imza gününü NET olarak 7 Ekim veriyor, `t:` ile BİREBİR. `gun:` alanı GÖZDEN GEÇİRİLMELİ (ayrı, küçük bir iş). |
| **Patrona Halil İsyanı** | 1730-09-25 | 28 Eylül 1730 | `patrona-isyani`: **"12 Rebîülevvel 1143'te (25 Eylül 1730)"** asiler toplandı | 🟢 **`t:` DOĞRU.** TDV isyanın BAŞLANGIÇ (toplanma) gününü 25 Eylül veriyor, `t:` ile BİREBİR. `gun:`ün 28'i muhtemelen III. Ahmed'in HAL'İ (birkaç gün sonraki farklı bir alt-olay) — `gun:` alanı gözden geçirilmeli. |
| **Prut Zaferi** | 1711-07-19 | 21 Temmuz 1711 | `baltaci-mehmed-pasa`: muharebe **18 Temmuz**, antlaşma **22 Temmuz** 1711 | ⚪ **ÇÖZÜLEMEDİ** (D033 cinsi: KAYNAK BİRDEN FAZLA AYRI TARİH VERİYOR, "zafer" hangisine karşılık geldiği net değil). `t:` (19) ve `gun:` (21) TDV'nin verdiği İKİ ucun (18/22) İKİSİNE de TAM uymuyor — üçüncü bir ara-aşama (Rus ordusunun KUŞATILMASI/müzakereye razı olması) olabilir, spesifik kaynak GEREKİYOR. |
| **Sapienza Deniz Zaferi** | 1499-08-28 | 12-25 Ağustos 1499 (aralık) | `modon`: yalnız **"yaklaşık bir yıl önce"** (Modon'un 10 Ağustos 1500 fethinden), GÜN VERMİYOR | ⚪ **ÇÖZÜLEMEDİ** (D033 cinsi: BİRİNCİL KAYNAK GÜN SEVİYESİNDE SUSUYOR). `gun:` alanındaki "12-25 Ağustos" aralığının kaynağı kayıtta YAZILI DEĞİL (akademik olduğu ima ediliyor ama adı yok) — `t:`nin bu aralığın 3 gün DIŞINDA olması bu yüzden ne doğrulanabiliyor ne çürütülebiliyor. |

## ⑤ TESLİM — SAYIYLA

```
① Genişletilmiş evren:                    29 cülûs-benzeri kayıt (olaylar*.js)
② Karşılaştırılabilir (gün düzeyinde):     27  (1 ay-only, 1 ayrı-olay çıkarıldı)
③ Tam eşleşen:                             23  (%85)
④ +1 gün kaymış, TDV ile DOĞRULANDI:        4  → HÜKÜM: 🔴 VERİ HATASI
⑤ Kalan 4 aday:
   Sened-i İttifak       → 🟢 t: DOĞRU (TDV birebir)
   Patrona Halil İsyanı  → 🟢 t: DOĞRU (TDV birebir)
   Prut Zaferi           → ⚪ ÇÖZÜLEMEDİ (kaynak çoklu, hangi alt-olay belirsiz)
   Sapienza Deniz Zaferi → ⚪ ÇÖZÜLEMEDİ (birincil kaynak gün vermiyor)
```

Düzeltme YAZILMADI (`data/` donuk, D098: hüküm vermek/uygulamak ayrı
yetki). Önerilen 4 düzeltme ③'te, kaynaklı ve gerekçeli.
