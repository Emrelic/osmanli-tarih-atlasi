# BULGU — KÜNYE ÖNCESİ KULLANIM TARAMASI

> **Oturum:** KÜNYE ÖNCESİ (eski ad: HİNDİSTAN KÜNYE II) · **Sevk:** koordinatör mesajı
> **Araç:** `denetim/ARAC-KUNYE-ONCESI-0911.py` · **Ölçüm:** `denetim/OLCUM-KUNYE-ONCESI-0911.json`
> `data/` ve `arac/` **okunuyor, değiştirilmiyor.**

## 0. D022 ÖNGÖRÜ — ölçümden ÖNCE

```
TAHMİN: 609 künyenin 15-40'ı (kabaca %3-6) veride kendi f:'inden ÖNCE
kullanılıyor olacak. Çoğu KÜÇÜK sapma, sih-imparatorlugu gibi BÜYÜK
sapmalar (5'ten az) AZINLIKTA.
```
Sonuç: **sayı TUTTU** (54/609 = %8,9, üst sınıra yakın) ama **büyüklük
dağılımı ÇÜRÜDÜ** — büyük sapmalar (>40 yıl) azınlık değil, ölçülen
54'ün **16'sı** (%30'u) 40 yıldan büyük. Küçük sapma beklentim yanlıştı.

---

## 1. SAYILAR

```
devletler.js künye sayısı (f: taşıyan)         609
veride s:/isg: ile kullanılan benzersiz kimlik  568
ÖNCESİ-KULLANIM ADAYI                            54   (%8,9)
KOVA DAĞILIMI  YANLIŞ_ATİF_ŞÜPHESİ 29 · AYIRT_EDEMEDİM 23 · MEŞRU_ERKEN 2
```
En büyük sapma **iran** (644,9 yıl — muhtemelen ayrı bir id-tekrar-
kullanım sorunu, aşağıda not edildi). En küçük ölçülen sapmalar birkaç
gün mertebesinde (tam liste JSON'da).

---

## 2. 🔴🔴 D010 SINAMASI — VE ARACIN SINIRINI ARACIN KENDİSİ GÖSTERDİ

**Ham tespit KATMANI geçti**: bilinen pozitif (`sih-imparatorlugu`,
1764 vs 1801, 37,2 yıl) **bulundu** — araç çalışıyor.

**Ama SINIFLANDIRMA katmanı sınıfta kaldı, VE bunu bir SPOT-CHECK
yakaladı:**
```
sih-imparatorlugu  BİLİNEN MEŞRU (yerlesimler_asya.js:442-445'te AÇIKÇA
                   belgelenmiş) → araç YANLIŞ_ATİF_ŞÜPHESİ'ne attı (🔴 YANLIŞ)
toskana, mantua    araç MEŞRU_ERKEN dedi → elle kontrol ettim, İKİSİ DE
                   "konfederasyon" kelimesinin 25 satırlık pencerede
                   TESADÜFEN geçmesinden (Floransa/Mantova kayıtlarıyla
                   İLGİSİZ bir bağlamdan) kaynaklanıyor (🔴 YANLIŞ)
```
**Yani ölçtüğüm 3 örnekte heuristic'in kendisi 3/3 YANLIŞ sınıflandırma
yaptı** — biri false negative (meşruyu şüpheli saydı), ikisi false
positive (şüpheliyi meşru saydı). Sebep ikisi de aynı kökten:

```
false negative (sih)     gerekçe yorumu KAYDIN 25 satır DIŞINDA — "Pencap
                          standart zinciri" yorumu Lahor'un üstünde yazılı,
                          ama en erken kullanım Sirhind'de (479. satır),
                          25 satır çok DAR kaldı
false positive (toskana) "konfederasyon" kelimesi 25 satırlık pencerede
                          ALAKASIZ bir başka kayıttan (muhtemelen bir
                          Alman/İsviçre konfederasyonu notu) SIZDI —
                          pencere çok GENİŞ kaldı
```
⇒ **AYNI ARAÇTA, AYNI TUR İÇİNDE hem dar hem geniş kalan bir pencere.**
Bu tesadüf değil: yakın-yorum sezgisi tek bir sabit uzunlukla ("25
satır") hem "yorumun kayda YAKIN olması" hem "yorumun BAŞKA bir kayda
SIZMAMASI" şartını birden karşılayamıyor — çünkü yorum bloklarının
kendi uzunluğu ve kapsadığı kayıt sayısı DEĞİŞKEN.

🔴 **HÜKÜM: `MEŞRU_ERKEN` ve `AYIRT_EDEMEDİM` kovaları GÜVENİLMEZ.**
Yalnız ham tespit (54 aday + sapma büyüklüğü) ve `YANLIŞ_ATİF_ŞÜPHESİ`
kovası bile **temkinli okunmalı** — sih-imparatorlugu örneği o kovaya
da (yanlışlıkla) düştüğü için, kovanın kendisi "kesin yanlış atıf"
değil "gerekçesi otomatik OLARAK BULUNAMADI" anlamına geliyor.
📌 `D015`in aynası: orada *ölçemediğini eleyen bir süzgeç onu TEMİZ
sayardı*; burada süzgeç ölçemediğini **ŞÜPHELİ sayıyor** — daha güvenli
bir yanılma yönü, ama YİNE DE yanılma.

---

## 3. ÜÇ KOVA — çareleri ters (`D024`), ve BU TUR HİÇBİRİ UYGULANMADI

```
🟢 MEŞRU_ERKEN    → çare: KÜNYEYİ GENİŞLET (f:'i geri çek)
🔴 YANLIŞ_ATİF    → çare: VERİYİ DÜZELT (yanlış id yerine doğrusunu yaz)
⚪ AYIRT_EDEMEDİM → çare: ELLE İNCELE, otomatik karar verme
```
54 adayın TAMAMI şu an fiilen ⚪'dir — kovalar bir **öncelik sıralaması**
olarak okunmalı (büyük sapma + gerekçe bulunamadı = önce bakılacak),
**hüküm** olarak değil. İlk 5 (en büyük sapma): `iran` (644,9y) ·
`lehistan` (288,5y) · `toskana` (251y, YANLIŞ meşru damgalı) · `somali`
(219y) · `meysur` (195,9y — 🔴 dikkat: bizim kendi taslağımızdaki
`meysur`in f:'i 1761, ama veri 1565'ten kullanıyor — BU AYRI VE YENİ bir
bulgu, `meysur`ün KENDİ f:'i de sorgulanabilir).

Tam liste: `denetim/OLCUM-KUNYE-ONCESI-0911.json` → `sonuclar`.

---

## 4. § 11 DERSİ ADAYI — sloganı

```
BİR "GEREKÇE YAKINDA MI" SEZGİSİ, TEK SABİT MESAFEYLE HEM ÇOK DAR
HEM ÇOK GENİŞ KALIR — YAKINDAKİ GERÇEK GEREKÇEYİ KAÇIRIR, UZAKTAKİ
İLGİSİZ KELİMEYİ YAKALAR.
```
(Vaka adı önerisi: `KÜNYE-ONCESI-0911` ya da kısaca `D0911-YAKIN-YORUM`)

---

## 5. ÖLÇMEDİKLERİM

```
① `v:` alanı TARANMADI — şemaya göre `k:` serbest metin taşıyor, id değil
② `d:` (doğrudan Osmanlı) dizisi TARANMADI — o dizinin öğelerinde d: alanı
   YOK ve "osmanli" diye bir devletler.js kaydı da yok
③ 54 adayın HİÇBİRİNİN gerçek sınıfı (meşru/yanlış) TEK TEK doğrulanmadı
   — yalnız 3'ü (sih-imparatorlugu, toskana, mantua) elle kontrol edildi
④ `meysur`ün kendi f:'inin (1761) veri kullanımıyla (1565) çelişmesi
   YENİ bir bulgu, bu turda AYRICA araştırılmadı — bir sonraki adaya
```
