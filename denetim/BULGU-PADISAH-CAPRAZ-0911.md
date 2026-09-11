# PADİŞAH ÇAPRAZ — kart · kronoloji · TDV üç kaynak karşılaştırması

Görev: koordinatör sevki, 11 Eylül 2026 (Cülûs Deseni görevinin devamı).

## ⚠️ SÜREÇ İTİRAFI — D022 tam uygulanmadı

Ölçümden önce yalnız NİTELİKSEL bir not tahtaya düşüldü ("padişahlar.js
ay hassasiyetinde, bu karşılaştırma FARKLI bir hata sınıfı yakalar")
ama SAYISAL bir öngörü YAZILIP COMMIT'LENMEDİ. Bu bir eksiklik —
kaydediyorum, tekrarlamamak için.

## ① YÖNTEM VE EVREN

`data/padisahlar.js`'in `from`/`to` alanları AY hassasiyetinde ama
`tahta:` alanının çoğu (32/41) GÜN hassasiyetinde bir tarih içeriyor —
bu yüzden karşılaştırma `tahta:`/`olum:` alanları üzerinden yapıldı, ay
hassasiyetli `from`/`to` DEĞİL.

Üç kaynak:
- **KART**: `data/padisahlar.js`, 41 kayıt (`tahta:` ve `olum:` alanları)
- **ÇEKİRDEK**: `data/olaylar*.js` (cülûs/hal'/vefat/katl metin taraması)
- **KUYRUK**: `data/kronoloji*.js` (D124 — ayrı kova)
- **TDV**: birincil kaynak, yalnız GERÇEK uyuşmazlık çıkan kayıtlar için

**KUYRUK sonucu (② şartı, önce verildi):** `kronoloji*.js`de "tahta
çıktı/cülûs" deseniyle **169 kayıt** var ama TARANDI ve **HİÇBİRİ bu 41
Osmanlı padişahına ait değil** — hepsi yabancı hükümdar (Prusya,
İngiltere, Altın Orda hanları, Selçuklu sultanları). ⇒ **KUYRUK evreni
bu soru için 0.**

## ② 41 PADİŞAHIN TAMAMI — KART vs ÇEKİRDEK (mekanik, TDV'siz)

```
TAM EŞLEŞEN (KART = ÇEKİRDEK, gün gün)                    24
KART'TA VAR, ÇEKİRDEK'TE KARŞILIK YOK (kapsama boşluğu)     8
   osman1(tahta yok zaten) · bayezid1 · fetret · mehmed1 ·
   mehmed2(1.saltanat) · murad2(1.saltanat) · ahmed3 · murad5(olum)
   — bunlar HATA DEĞİL, çekirdekte o olayın maddesi hiç yazılmamış
GERÇEK UYUŞMAZLIK (KART ≠ ÇEKİRDEK, ikisi de bir gün veriyor)   5
   4'ü zaten BİLİNEN (Cülûs Deseni görevi): I.Mustafa 2.cülus ·
   IV.Mehmed cülus · IV.Mustafa cülus · II.Mahmud cülus — DÖRDÜNDE
   DE KART (`tahta:`) ZATEN DOĞRU GÜNÜ TAŞIYOR, hata yalnız
   ÇEKİRDEK'TE (`t:`). Yani KART bu 4 hatayı zaten
   YALNIZ KENDİ İÇİNDE TAŞIMIYORDU.
   + 1 YENİ: İbrahim'in cülûsu (aşağıda ③)
"ÇÖZÜLDÜ, HATA DEĞİL" (ilk bakışta uyuşmazlık gibi görünen, TDV ile
   AÇIKLANAN)                                                  2
   Murad II 2. saltanat (KART'ın KENDİ İÇİNDEKİ 1446-05/1446-08
   çelişkisi) · Selim II ölüm günü (KART 13 Aralık vs ÇEKİRDEK 22
   Aralık) — ikisi de ③'te çözüldü
```

## ③ YENİ BULGULAR — TDV birincil kaynakla doğrulandı

**A) İbrahim'in cülûsu — 5. GERÇEK HATA, ama TERS YÖNDE**

| Kaynak | Tarih |
|---|---|
| KART (`tahta:`) | **1640-02-09** |
| ÇEKİRDEK (`t:`/`gun:`) | 1640-02-08 / "8 Şubat 1640" |
| TDV `ibrahim--padisah` | **"resmî biat töreni ise 16 Şevval 1049 (9 Şubat 1640) Perşembe sabahı yapılmıştır"** |

⇒ Bu sefer **KART DOĞRU, ÇEKİRDEK YANLIŞ** — Cülûs Deseni görevindeki
4 vakanın TAM TERSİ yönde (orada ÇEKİRDEK +1 fazlaydı, burada ÇEKİRDEK
1 EKSİK). Bu, **"sistematik +1 kayması" hipotezini daha da
zayıflatıyor**: kayma tek yönlü değil, EN AZ İKİ FARKLI YÖNDE tekil
hatalar var — toplu/yönlü bir script hatasından çok, HER KAYDIN KENDİ
İÇİNDE ayrı ayrı girilmiş olması ihtimalini güçlendiriyor.

**B) İbrahim'in ölümü — KART VE ÇEKİRDEK AYNI HATAYI PAYLAŞIYOR**

| Kaynak | Tarih |
|---|---|
| KART (`olum:`) | **1648-08-08** |
| ÇEKİRDEK (`t:`, "hal'i ve katli") | 1648-08-08 (`gun:` alanı "8-18 Ağustos" ARALIĞINI zaten disclose ediyor) |
| TDV `ibrahim--padisah` | Tahttan indiriliş: **8 Ağustos** ("tertipli bir harekât sonrası tahttan indirildi, 18 Receb 1058/8 Ağustos 1648"). İdam İÇİN AYRI VE FARKLI: *"8 Şâban Salı günü (Bu tarih 28 Receb / 18 Ağustos olmalıdır)"* — **TDV'nin KENDİSİ kaynağındaki "8 Şâban"ı hatalı bulup 18 AĞUSTOS'A DÜZELTİYOR.** |

⇒ **KART'ın `olum:` alanı (ölüm/idam TARİHİ olması gereken) aslında
TAHTTAN İNDİRİLİŞ (hal') gününü taşıyor, gerçek İDAM 10 gün SONRA (18
Ağustos).** TDV'nin kendisi kaynağını düzeltip bunu doğruluyor. Bu,
`afgan-durrani` emsalinin TAM AYNI SINIFI: **yanlış OLAY seçilmiş**
(deposition ≠ death), gün hatası değil. VE bu hata KART'TA DA
ÇEKİRDEK'TE DE AYNI — birbirini "doğruluyormuş" gibi görünen iki kaynak
aslında AYNI KÖKTEN geliyor (muhtemelen biri ötekinden kopyalandı, ya
da ikisi de aynı ikincil kaynağa dayandı).

**C) Murad II'nin 2. saltanatı — ÇÖZÜLDÜ, hata değil**

KART'ın KENDİ İÇİNDE iki farklı tarih var: 1. saltanat satırının
parantezinde "1446-05 (ikinci saltanat)", 2. saltanat satırının kendi
`tahta:` alanında "1446-08". TDV `murad-ii`: *"II. Murad 8 Safer 850'de
(5 Mayıs 1446) Manisa'dan acele yola çıktı"* ... *"Ağustos sonlarında
... iki yıllık bir aradan sonra tekrar saltanata geçmiş oldu."* ⇒ İKİ
AYRI GERÇEK OLAY (yola çıkış / fiilen tahta geçiş) — KART'ın asıl
`tahta:` alanı (Ağustos, doğru satırda) TDV'nin vurguladığı olayla
UYUŞUYOR. Hata değil, yalnız 1. satırın parantez notu YANILTICI
(yola çıkışı "ikinci saltanat" günü gibi sunuyor) — küçük bir netlik
sorunu, VERİ hatası değil.

**D) Selim II'nin ölümü — ÇÖZÜLDÜ, hata değil**

KART `olum:1574-12-13`. ÇEKİRDEK'in "II. Selim'in vefatı ve III.
Murad'ın cülûsu" maddesi `t:1574-12-22`. TDV `selim-ii`: *"28 Şâban 982
(13 Aralık 1574) Pazartesi akşamı vefat ettiğini ve ON İKİ GÜN sarayda
bekletildiğini"* — ölüm GİZLENDİ, III. Murad İstanbul'a ulaşana kadar
(~12 gün sonra) açıklanmadı. ⇒ KART gerçek ÖLÜM gününü, ÇEKİRDEK
GERÇEK AÇIKLAMA/cülûs gününü taşıyor — İKİSİ DE DOĞRU, FARKLI OLAY.

## ④ D110 TAKVİM DEĞERLENDİRMESİ

Hiçbir yeni uyuşmazlık HİCRÎ/MİLADİ çeviri farkına dayanmıyor —
İbrahim'in cülûsunda bile TDV kendi hicrî-miladi çiftini net veriyor
(16 Şevval 1049 = 9 Şubat 1640, tartışmasız) ve ÇEKİRDEK'in 8'i bu
çiftin DIŞINDA. Takvim, Cülûs Deseni görevinde olduğu gibi burada da
**kolay bir mazeret değil** — her vakada ayrıca kontrol edildi ve
DIŞLANDI.

## ⑤ SONUÇ — SAYIYLA

```
① Evren: 41 padişah kartı × (cülûs + vefat) = 82 aday tarih
② KUYRUK'ta bu 41 kişiye ait kayıt: 0 (D124, ayrı kova, boş)
③ ÇEKİRDEK'te KARŞILIĞI OLAN kart-tarihi: 33/82 (kalan 49'u
   kapsama boşluğu — çoğu erken dönem/az bilinen padişahlar,
   HATA DEĞİL, eksik VERİ)
④ Tam eşleşen: 28  (24 ilk turda + Murad-II ve Selim-II açıklanarak)
⑤ GERÇEK HATA (TDV ile doğrulandı): 5
   — 4'ü Cülûs Deseni görevinden (I.Mustafa · IV.Mehmed · IV.Mustafa ·
     II.Mahmud cülûsu, KART zaten doğruydu)
   — 1'i YENİ (İbrahim cülûsu, KART doğru ÇEKİRDEK yanlış, TERS YÖN)
⑥ KART'IN KENDİ HATASI (YENİ SINIF — İbrahim'in ölümü, ÇEKİRDEK'le
   PAYLAŞILAN): 1  — deposition/death karışıklığı, afgan-durrani
   emsaliyle AYNI SINIF
```

**Genel hüküm:** desen HÂLÂ dar ve İZOLE (6/82'lik bir kesim,
%7) — "41 padişahın kartı sistematik olarak bozuk" DEĞİL. Ama İbrahim
vakası (B) göstermiştir ki hata sınıfı yalnız kronolojide değil,
**padişah KARTLARININ KENDİSİNDE de** (en azından bir örnekte)
yaşıyor — bu, `§1.5`teki "28 vefat_id" ile ilişkili ayrı bir denetim
gerektirebilir (kapsam dışı, öneri olarak bırakıyorum).

## ⑥ ÖNERİLEN DÜZELTMELER (YAZILMADI, `data/` donuk)

```
data/olaylar*.js  "IV. Murad'ın ölümü ve Sultan İbrahim'in cülûsu"
   t: 1640-02-08 → 1640-02-09   (kaynak: TDV ibrahim--padisah)

data/padisahlar.js  ibrahim.olum
   1648-08-08 → 1648-08-18   (kaynak: TDV ibrahim--padisah, kendi
   düzeltmesiyle: "8 Şâban ... Bu tarih 28 Receb / 18 Ağustos olmalıdır")
data/olaylar*.js  "Sultan İbrahim'in hal'i ve katli"
   t: 1648-08-08 → aynı kalabilir EĞER madde "hal'i"yi temsil ediyorsa,
   AMA "katli" kelimesi başlıkta olduğu için ya t: 08-18'e taşınmalı ya
   da madde ikiye bölünmeli (hal' 8'i, katl 18'i) — karar Oturum 0'ın.
```
