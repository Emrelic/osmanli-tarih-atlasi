# ÖNGÖRÜ — SIZMA DERİNLİĞİ ÖLÇÜMÜ (KITA 11, ikinci iş)

> `D022`: ölçümden **önce** yazıldı ve commit'lendi. Tek hücre ölçülmedi,
> Dijkstra bir kez bile koşmadı. Sonradan yalnız **hüküm damgası** eklenecek;
> üstü değişmeyecek.

Oturum: KITA 11 · 12 Eylül 2026 · sevk: tahta M-3584 ·
karar belgesi: `oturumlar/MENZIL-KARARLARI-0912.md`

## Taban (öngörü DEĞİL — verilmiş ya da ölçülmüş)
```
bütçe            40 saat, TEK YÖN            (Emre kararı, MENZIL-KARARLARI ②)
özne             rutin idare                 (Emre kararı ①)
hız eğrisi       Tobler  v = 6·exp(−3,5·|S+0,05|)   ← R1/KITA 9'un alanı,
                 BEN SEÇMEDİM; koordinatörün M-3584'teki hesabı bunu kullanıyor
                 (düz 5,04 km/sa · %15,86'da 2,89 km/sa) ve karşılaştırılabilir
                 kalsın diye aynısını kullanıyorum
düz arazi        40 saat × 5,04 = 201 km
benim R3 ölçümüm Alpler yerel eğim %15,86 · motorun gördüğü %3,68
koordinatörün    TRI ile 116 km · motorun eğimiyle 177 km   (DÜZ hat varsayımı)
Emre'nin sezgisi 20 km  ⇒ 5,8 kat yol uzaması gerektirir
```

## Ö1 — İSVİÇRE, EN KÖTÜ SEKTÖRDE DÜZ ÇİZGİ SIZMASI
Sevk açıkça soruyor: *"İsviçre'de kaç km sızma bekliyorsun?"*
```
Ö1  50 – 85 km        (TRI kademesi, 16 sektörün EN KÖTÜSÜ)
```
Gerekçe: 116 km yürünen yol / beklenen kıvrım 1,4-2,0.

## Ö2 — KIVRIM KATI (yürünen yol / düz çizgi)
```
Ö2a  en kötü sektörde kıvrım katı        1,3 – 1,9
Ö2b  ve 5,8'in ÇOK ALTINDA kalacak       (Emre'nin 20 km'i için gereken)
```
🔴 **Ö2b bu işin asıl sınavıdır.** Tutarsa: 20 km bugünkü veriyle
**çıkmıyor**, ve eksik olan şey sürtünme değil **topoloji**.

## Ö3 — ÜÇ KADEME SIRALAMASI
```
(a) motorun bugünkü eğimi   — en cömert
(c) hücre içi geçit kotu    — ortada
(b) TRI yerel eğimi         — en cimri
Ö3a  sıralama  a > c > b
Ö3b  a / b oranı            1,4 – 1,7
```
⚠️ MAZERET (`D019`): (c)'nin yeri tanımıma bağlı. Geçit kademesini
*"hücreyi geçerken taban kotundan eyer kotuna çıkıp inmek"* diye
tanımlıyorum (`S_c = 2·(geçit − z_min)/5566`). Başka bir tanım (c)'yi
sıranın başına da sonuna da atabilir; o yüzden **tanım ölçümden önce
burada yazılıdır** ve değiştirilmeyecek.

## Ö4 — KAFKASYA İLE İSVİÇRE FARKLI ÇIKACAK
Büyük Kafkas tek ve sürekli bir duvar, Alpler ise yoğun vadi ağı.
```
Ö4a  Kafkasya sızması, İsviçre'ninkinin  %60 – %90'ı
Ö4b  Kafkasya kıvrım katı, İsviçre'ninkinden BÜYÜK
```

## Ö5 — EMRE'NİN 20 km'İ HİÇBİR KADEMEDEN ÇIKMAYACAK
```
Ö5   üç kademenin ÜÇÜNDE DE en kötü sektör sızması  ≥ 40 km
```
ÇÜRÜME ŞARTI: herhangi bir kademe ≤ 25 km verirse bu öngörü çürür ve
*"ceza gerekmiyor"* hükmü ölçümle desteklenmiş olur.

## Ö6 — EKSİĞİN NE OLDUĞU (20 km çıkmazsa)
```
Ö6  eksik olan şey SÜRTÜNME DEĞİL, IZGARANIN ENGEL TAŞIYAMAMASI olacak
```
5,6 km'lik bir hücre kapalı bir vadiyi ifade edemez: 8 komşulu ızgarada
her sırt geçilebilir, çünkü sırt hücrenin İÇİNDE kalıyor. Ölçülebilir
biçimi: **kıvrım katı 2'nin altında kalacak** — yani ızgara neredeyse
düz gidiyor, oysa gerçek dağda yol vadiyi takip eder.
⚠️ MAZERET: bunu doğrudan ölçemem (gerçek yol verisi yok). Dolaylı
kanıt: kıvrım katının düşük çıkması + geçit kademesinin (c) sızmayı
belirgin biçimde DEĞİŞTİRMEMESİ.

---
# 🔵 HÜKÜM DAMGASI — ölçümden SONRA eklendi, ÜSTÜ DEĞİŞTİRİLMEDİ

Ölçüm: `denetim/OLCUM-SIZMA-0912.md` + `.json` · **TUTTU 4 · ÇÜRÜDÜ 5**

| öngörü | hüküm | ölçülen |
|---|---|---|
| Ö1 İsviçre 50-85 km | 🔴 ÇÜRÜDÜ | 93-104 km |
| Ö2a kıvrım 1,3-1,9 | 🔴 ÇÜRÜDÜ | 1,02-1,28 |
| **Ö2b kıvrım 5,8'in çok altında** | 🟢 **TUTTU** | **1,1** |
| Ö3a a > c > b | 🟢 TUTTU | 6/6 tohum |
| Ö3b a/b = 1,4-1,7 | 🟢 TUTTU | 1,39-1,68 |
| Ö4a Kafkasya %60-90 | 🔴 ÇÜRÜDÜ | %110 |
| Ö4b Kafkasya kıvrımı büyük | 🔴 ÇÜRÜDÜ | daha küçük |
| Ö5 üç kademe de ≥40 km | 🟢 TUTTU | en cimri 93 km |
| Ö6 eksik = ızgara çözünürlüğü | 🔴 ÇÜRÜDÜ | 6× inceltme kıvrımı DEĞİŞTİRMEDİ |

### 🟢 Ö6 — "ölçemem" dediğim şeyi ölçtüm ve kendimi çürüttüm
Öngörüde *"bunu doğrudan ölçemem, dolaylı kanıt kullanacağım"* yazmıştım.
Ölçülebildi: ızgara 36 kat sıklaştırıldı (927 m hücre, 755 bin ve 975 bin
hücre) ve kıvrım katı **1,1'den kıpırdamadı**. Dolaylı kanıtla yetinseydim
yanlış sonuca **daha ikna edici biçimde** varmış olacaktım.
📌 ***Bir öngörünün "ölçülemez" damgası, ölçüm yolunu aramamak için bir
gerekçe değildir.***

### 🔴 Ö1 ve Ö2a birlikte çürüdü — ve aynı yönde
İkisi de arazinin gerçekte olduğundan **daha zorlayıcı** olduğunu
varsayıyordu. Ölçüm ikisini de gevşetti: sızma tahminimden UZUN, kıvrım
tahminimden DÜŞÜK. ⇒ Sistematik bir eğilim: **dağı gözümde büyütmüşüm**,
ve tam olarak Emre'nin 20 km sezgisinin yönünde.

---

## NE ÖNGÖRMÜYORUM
- Ceza önermiyorum (`M-3584 ④`: ölçüp bildireceğim, yorumlamayacağım).
- Tobler'ın doğru eğri olduğunu iddia etmiyorum — R1/KITA 9'un alanı.
- Kıvrım katının "gerçek" değerini bilmiyorum; ölçtüğüm şey **bu ızgarada
  bu maliyet alanının** ürettiği kıvrımdır, arazinin kendisininki değil.
