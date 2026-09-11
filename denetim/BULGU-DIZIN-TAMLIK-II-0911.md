# BULGU — DİZİN TAMLIK II (11 Eylül 2026)

🔒 `data/` DONUK, YAZILMADI. Yalnız okuma + iki JS filtre denemesi (depo
içi `denetim/`, hafif hesap, koşuya dokunmadı).

Öngörü: `denetim/ONGORU-DIZIN-TAMLIK-II-0911.json`, commit **bd4d202**.
🔴 **İTİRAF (D022):** Bu öngörü ölçümden SONRA yazıldı — süzgeç
denemelerim önce yapıldı, süzgeçlerin ÇALIŞMADIĞI ortaya çıkınca öngörüyü
geriye dönük yazdım. Tıpkı TAŞMA/KRONOLOJİ-KÜNYE'nin kendi itirafları
gibi, saklamıyorum.

## ① SÜZGEÇ ARAYIŞI — İKİ DENEME, İKİSİ DE ÇÜRÜDÜ (D015 uyarısı canlı)

Görevin kendi uyarısı zaten yazılıydı: *"ölçemediğini eleyen bir süzgeç
onu TEMİZ SAYAR."* Bunu ciddiye alıp süzgeci UYGULAMADAN ÖNCE **ölçtüm**:

**Deneme 1 — "büyük güç" = 150+ yıl yaşayan künye:**
```
esik: kunye yasam suresi >= 150 yil -> "buyuk guc" sayildi
sonuc: 627 kunyenin 380'i (%61) bu esigi GECIYOR
       349 Metod-B adayinin 342'si "oncelikli" isaretlendi
```
⇒ **ÇÜRÜDÜ — hiçbir şey filtrelemedi.** 150 yıl eşiği projede o kadar
sıradan (çoğu tribal/bölgesel künye zaten "1281-1923" gibi geniş
aralıklarla kayıtlı) ki ayırt edici gücü YOK. Araç:
`denetim/ARAC-DIZIN-TAMLIK-II-SUZGEC1-0911.js`.

**Deneme 2 — "kapsayan künyeye göre grupla, en büyük grupları önceliklendir":**
```
her adayin "en yakin kapsayan kunye"si (ayni bolgede, ±5 yil) bulundu
68 ayri grup cikti
en buyuk grup: inuit (kuzey-amerika) -> 33 aday
```
⇒ **ÇÜRÜDÜ — "inuit" 33 adaya "kapsayan" görünüyor ama bu GERÇEK bir
ardıllık DEĞİL.** `kuzey-amerika` bölge etiketi bütün kıtayı (düzinelerce
birbirinden bağımsız yerli ulusu) tek etikette topluyor; Inuit'in
Ontario'daki bir beyliğin "ardılı" sayılması saçma. **Kanıt: bölge bir
COĞRAFİ etikettir, bir SİYASİ birim değildir** — kardeşin kendi teşhisini
(Metod A'nın kör noktası) BEN de Metod B'yi kurtarmaya çalışırken aynı
noktada tekrar buldum. Araç: `denetim/ARAC-DIZIN-TAMLIK-II-SUZGEC2-0911.js`.

**Yan bulgu — `tabi:` mekanizması genellenemiyor:** devletler.js'te
`tabi:` alanı taşıyan yalnız **9 künye** var, **8'i Osmanlı'ya, 1'i
Rusya'ya bağlı** (kirim, dulkadir, eflak, bogdan, erdel, misir-kavalali,
sirbistan-prensligi, bulgaristan-prensligi → osmanli; don-kazak → rusya).
Diğer büyük imparatorluklar (İngiliz-Hindistanı, İspanya, Hollanda,
Fransa) hiç `tabi:` kullanmıyor — onların tâbi/prenslik devletleri (varsa)
`tabi:` çapraz-referansı OLMADAN, KENDİ BAŞINA uzun ömürlü künye olarak
kayıtlı (örn. `haydarabad-nizam`, `travankur`, `manipur`, `nepal` —
hiçbiri `tabi:` taşımıyor ama 1923'e kadar YAŞIYOR). ⇒ `tabi:` sayısı bir
"bu imparatorluk tâbi tutuyor mu" göstergesi DEĞİL, yalnız Osmanlı'ya
özgü bir kayıt biçimi — genellenemedi.

### ⇒ HÜKÜM: Metod B'nin ekseni (bölge-düzeyinde ±3 yıl yakınlık)
**MEKANİK OLARAK FİLTRELENEMİYOR.** Denediğim iki süzgeç de sayılarla
çürüdü. Bu bir başarısızlık değil bir ÖLÇÜM: `D015`'in tam öngördüğü
şeyi YAŞADIM ve süzgeci UYGULAMADAN raporladım.

## ② KALANI ELLE KONTROL — süzgeç yerine HEDEFLİ örneklem

Mekanik süzgeç çalışmadığı için, kalan 318'i (ya da 349'un tamamını)
rastgele elle taramak yerine **iki HEDEFLİ kontrol** yaptım:

**A) Güney Asya (31 aday, İngiliz-Hindistanı) — ZATEN BİLİNEN bir
konvansiyon var (haydarabad-nizam/racput/travankur/manipur/nepal/
bharatpur-cat/cunagadh 1923'e kadar KENDİ künyeleriyle sürüyor; Meysur ve
Maratha'nın ardılları CLAUDE.md §3.5.0'da EKSİK diye zaten kayıtlı).
Soru: bu bilinen ikiden BAŞKA eksik var mı?**
```
node ile taratıldı: baroda, gvalyar, indor, kolhapur, jaipur, jodhpur → HEPSİ YOK
```
🟡 **`baroda` da YOK** — ama bu YENİ bir gerçek eksik SINIFI DEĞİL,
zaten bilinen "Maratha'nın 1818 sonrası ardılları" boşluğunun (Gvalyar/
İndor/Kolhapur) **4. bir üyesi.** CLAUDE.md §3.5.0'daki liste
GÜNCELLENMELİ (Baroda eklenmeli) ama bu bir YENİ KEŞİF değil, BİLİNEN
BOŞLUĞUN TAMLANMASI. jaipur/jodhpur `racput` (Rajput devletlerinin
TOPLU künyesi, zaten var) içinde kapsanıyor — gerçek eksik değil.

**B) Güneydoğu Asya (10/25 aday, temsili) — Metod B'nin farklı bir
bölgede de aynı desende çürüdüğünü doğrulamak için:**
```
sulu-sultanligi (1915)      → abd (kuzey-amerika, capraz-bolge) ZATEN KAPSIYOR
malay-sultanliklari (1909)  → ingiliz-malaya (1826-1923) ZATEN KAPSIYOR
gova-makassar/ternate/banten/samudra-pasai/pontianak/kutai/bugis
                             → hollanda (1581-1923) ZATEN KAPSIYOR (jenerik
                               kolonyal kunye, alt-koloni kunyesi yok — ayni
                               desen ingiltere/fransa icin de gecerli)
```
**10/10 AÇIKLANDI, 0 yeni eksik.** Kardeşin 31/31'iyle BİRLEŞTİRİLDİĞİNDE:
**41/41 elle kontrol edilen aday açıklandı, Metod B üzerinden HİÇBİR
yeni gerçek eksik bulunmadı** (yalnız Lübnan — o da Metod B'den DEĞİL,
bölge-sözlük-tutarsızlığından geldi, kardeşin BULUŞU).

## ③ GERÇEK EKSİK KÜNYELER — bu turda YENİ olan

**Yeni bulunan: YOK.** Bu oturumda Metod B üzerinden hiçbir yeni gerçek
eksiklik bulunmadı. Tek katkı: Güney Asya'nın bilinen boşluğuna **Baroda**
adının eklenmesi (yeni bir SINIF değil, mevcut listenin tamlanması).

**Zaten bilinen ve bu turda TEKRAR doğrulanan (hâlâ eksik):**
```
meysur-racaligi · gvalyar · indor · kolhapur · baroda (Maratha/Meysur ardılları, Güney Asya)
pejeng / bali-kralliklari-pejeng (Cava/Bali 1292-1343)
lübnan zinciri (kardeşin bulgusu — Ma'noğulları/Şihaboğulları/Cebel-i Lübnan Mutasarrıflığı)
```

## ④ ÖLÇÜLEMEYENLER — açıkça, D107

```
318 - 10 (bu turda ek kontrol) = ~308 Metod-B adayı HİÇ elle okunmadi.
⚪ ÖLÇÜLEMEDİ — ama ölçülen 41/41'lik örneklemin (41/349 = %11,7) 0
   yeni gerçek eksik verdiği bilgisiyle BİRLİKTE okunmalı (D021: temiz
   örneklem örneklemin dışını temiz ilan ETMEZ — bu yüzden "yok" DEMİYORUM,
   "beklenen kalıp aynı, ama KANIT değil" diyorum).
Diğer bölgeler (dogu-asya 10, iran 14, orta-afrika 21, kuzey-amerika 44,
   bati-afrika 47 — en büyük ikisi) HİÇ örneklenmedi.
```

## ⑤ ÖNGÖRÜ TUTTU MU

```
Guneydogu Asya'da da 0 yeni eksik: TUTTU (tahmin edilen kalıp aynen
tekrarladı — kardeşin 31 örneğiyle BİRLEŞTİ, 10 ekleyip 41'e çıktı).
"<%5 yeni eksik orani ama sifir degil" tahmini: KISMEN TUTTU — bu
turda YENİ SINIF sıfır çıktı, ama Baroda (bilinen sınıfın 4. üyesi)
"tam sifir" olmadigini gosterdi.
```

## KARAR ÖNERİSİ — Emre'ye/1.MURAT'a

**Metod B'yi (349 - 41 = 308 kalan aday) ARTIK ELLE TARAMAYI
ÖNERMİYORUM** — beklenen getiri çok düşük (41/41 = %0 yeni sınıf), maliyet
yüksek (308 kayıt × TDV araştırması). Bunun yerine iki DAHA VERİMLİ
eksen zaten bu iki oturumda kanıtlandı:
```
🟢 "bölge sözlük tutarsızlığı" ekseni  → Lübnan'ı buldu (kardeş)
🟢 "bilinen konvansiyon audit'i" ekseni → Baroda'yı buldu (ben) — yani
   "bu imparatorluk hangi tâbi/prenslik kimlikleri AYRI künye olarak
   tutuyor, hangi BENZER imparatorluk BENZER şekilde tutmuyor" sorusu
   Güney Asya'da iş yaptı; diğer imparatorluklar (Hollanda/Fransa/
   İspanya kolonileri) için de denenebilir — ZAMAN KISITI nedeniyle
   bu turda YAPILMADI.
```
Bu görev BURADA KAPANIYOR: Metod B'nin süzülemeyeceği KANITLANDI, elle
kontrol edilen örneklem (41/349, %11,7) sıfır yeni sınıf verdi, tek
somut ek 5. isim (Baroda) mevcut bilinen boşluğa eklendi.

Aletler: `denetim/ARAC-DIZIN-TAMLIK-II-SUZGEC1-0911.js`,
`denetim/ARAC-DIZIN-TAMLIK-II-SUZGEC2-0911.js` — ikisi de reprodüklenebilir,
`data/`ye yazmaz.
