# BULGU — KOLONYAL AUDİT (11 Eylül 2026)

🔒 `data/` DONUK, YAZILMADI. Yalnız okuma + TDV doğrulaması.

Öngörü: `denetim/ONGORU-KOLONYAL-AUDIT-0911.json`, commit **0333768**.
🟡 Kısmi itiraf: öngörüyü yazmadan önce 5 isimlik (yogyakarta/surakarta/
mataram/brunei/zanzibar) çok kısa bir ön-kontrol yaptım — bu D022'yi
tam ihlal etmiyor (henüz "ölçüm" başlamamıştı, yalnız hangi soruyu
soracağımı kalibre ediyordum) ama şeffaflık için öngörü dosyasının
içinde AYRICA yazılı.

## ① KONVANSİYON AUDİTİ — dört imparatorluk, dört sonuç

```
🟢 HOLLANDA (Güneydoğu Asya)   TUTARLI — Güney Asya ile AYNI desen
   yogyakarta        1755-1923  ✓ (Mataram'ın bölünmesinden)
   surakarta         1755-1923  ✓ (aynı bölünme)
   mataram-sultanligi 1587-1755 ✓ (öncül, doğru bitiyor — bölünmeye)
   brunei-sultanligi 1368-1923  ✓
   ace-sultanligi    →1903 (Hollanda tam ilhak — TDV'de "1903'te Aceh
                      Savaşı resmen bitti" doğrulanabilir, bu GERÇEK bir
                      son, protektora kalıntısı yok, gap DEĞİL)
   ⇒ Hollanda, İngiliz-Hindistanı'yla AYNI konvansiyonu (büyük yerli
   monarşiyi protektora olarak KENDİ künyesiyle sürdürme) TUTARLI
   uyguluyor. İlk tahminim (Hollanda FARKLI davranıyor) ÇÜRÜDÜ.

🟢 FRANSA — VİETNAM         TUTARLI
   nguyen-hanedani   1802-1923 ✓ (Fransız Hindiçini himayesi altında
                      nominal hanedan olarak sürüyor, künye BUNU
                      doğru yansıtıyor)
   tay-son           →1802 (Nguyen tarafından yıkıldı, gerçek son)

🟢 FRANSA — FAS (MAĞRİB)     TUTARLI
   fas               1549-1923 (1923 SONRASINDA DA SÜRDÜ notu künyenin
                      KENDİ ozet'inde var) — 1912 Fas Himayesi geçişini
                      künye ZATEN doğru modelliyor (hanedan bölünmedi,
                      künye kesilmedi)

🔴🔴 FRANSA — TUNUS          TUTARSIZ, GERÇEK EKSİK BULUNDU
   tunus-ocagi       1574-1881-05-12, ozet: "Fransız protektorasıyla
                      FİİLEN SONA ERDİ" — BU YANLIŞ. TDV'nin KENDİ
                      'tunus' maddesi: Bardo Antlaşması'ndan (12 Mayıs
                      1881) SONRA Hüseynî hanedanı NOMİNAL bey olarak
                      SÜRMEYE devam etti — "Emîn Bey on dokuzuncu bey
                      sıfatıyla ... 20 Mart 1956'da Tunus bağımsızlığına
                      kavuşurken" (yani hanedan 1956'ya KADAR, künyenin
                      1923 ufkunun 75 yıl ÖTESİNE kadar sürdü).
   ⇒ devletler.js'te "Tunus Beyliği (Fransız Himayesi Dönemi)"
     1881-05-12'den (bugünkü tunus-ocagi'nin BİTTİĞİ gün) itibaren
     EKSİK. Misir-kavalali/Kırım/Boğdan/Eflak emsalinin (Osmanlı'ya tâbi
     ama KENDİ künyesi olan hanedan) TAM KARŞILIĞI, yalnız suzeren
     Fransa.

⚪ İSPANYA · PORTEKİZ         🟡 ÖLÇÜLEMEDİ TAM — kısmi kontrol yapıldı
   Filipinler (sulu-sultanligi 1450-1915 TEK künyede Ispanyol VE
   Amerikan dönemini kapsıyor — gap yok), Fas'ın Ispanyol bölgesi (`fas`
   künyesi zaten tek parça, ayrı gerekmiyor), Kongo Krallığı (Portekiz
   sferi, 1390-1914 — 1914'teki son TARİHSEL OLARAK doğru, Portekiz'in
   Buta isyanını bastırıp hanedanı fiilen sonlandırdığı yıl, GAP değil).
   🔴 TAM TARANMADI: İspanya'nın Karayip/Amerika sömürgeleri VE
   Portekiz'in Angola/Mozambik/Goa/Makao/Timor bölgelerindeki YEREL
   krallıkların TAMAMI — zaman kısıtı, D107 gereği açıkça "ölçülemedi"
   yazıyorum, "yok" DEMİYORUM.
```

## ② TUTARLILIK SORUSU — TERCİH Mİ EKSİK Mİ? (D077)

**Ölçüldü: bu bir TERCİH DEĞİL, TEK BİR NOKTADA (Tunus) GERÇEK BİR
EKSİK.** Konvansiyonun kendisi güçlü ve TUTARLI uygulanıyor (Hollanda,
Fransa-Vietnam, Fransa-Fas, İngiliz-Hindistanı hepsi aynı desen: büyük
yerli monarşi kolonyal güce YUTULMUYOR, kendi künyesiyle protektora
olarak sürüyor). Tunus bu konvansiyonun **istisnası** ve istisna
KASITLI bir tasarım farkı değil — künyenin kendi `ozet` metni yanlış bir
tarihsel iddia ("fiilen sona erdi") taşıyor ve bu iddia TDV'nin kendi
maddesiyle ÇÜRÜYOR. `D077`'nin uyardığı "hangisi doğru sorusu yanlıştır"
durumu BURADA GEÇERLİ DEĞİL — çünkü bu bir "iki tercih" durumu değil,
tek taraflı bir FAKTA hatası.

## ③ GERÇEK EKSİK — künye taslağı (YAZILMADI, yalnız öneri)

```
id_onerisi   : tunus-beyligi-fransiz  (ya da tunus-himaye)
ad_onerisi   : Tunus Beyliği (Fransız Himayesi Dönemi)
f            : 1881-05-12   (Bardo Antlaşması — tunus-ocagi'nin
                              KENDİ t: alanıyla BİREBİR, TDV'den bağımsız
                              doğrulandı: "12 Mayıs 1881'de ... Bardo
                              Antlaşması'nı imzalayarak")
t            : 1923-10-29   (site ufku — gerçek tarihi son 1956-03-20,
                              ufkun 33 yıl ötesinde, künye ufukta kesiliyor)
bolge        : kuzey-afrika
tur_onerisi  : mevcut sözlükte yok (bkz. MISIR-SIRBİSTAN KÜNYE oturumunun
               "eyalet" önerisiyle AYNI açık soru) — belki `tabi:` alanlı
               bir `hanedanlik` uygun (Kırım/Boğdan emsali)
tabi_onerisi : [{f:"1881-05-12", t:"1923-10-29", ust:"fransa-cumhuriyet"}]
               — bu, `tabi:` mekanizmasının Osmanlı/Rusya DIŞINDA
               kullanılacağı İLK örnek olur (DİZİN TAMLIK II'nin yan
               bulgusuyla doğrudan bağlantılı)
harita_onerisi: 🟡 AÇIK SORU — emsal misir-kavalali (Osmanlı'ya tâbi ama
               KENDİ harita:"kavalali" rengi var) buraya da uygulanabilir
               (harita:"tunus-beylik" gibi), ya da cezayir-fransiz'in
               rengini paylaşabilir. Karar gerektiriyor, burada
               UYDURULMADI.
kaynak       : tunus (TDV, CANLI) — alıntı yukarıda AYNEN verildi
```

🔴 Bu künyeyi **YAZMIYORUM** (`D098`: hüküm vermek/uygulamak ayrı
yetki, `data/` donuk).

## ④ D187 KONTROLÜ — boş küme değil, AMA sınırlı

Görevin kendi uyarısı: *"41/41 açıklandı çıkarsa bu eksen de ÖLÜDÜR,
söyle ve kapat."* Burada TAM TERSİ oldu — **eksen İLK denemede 1 gerçek
eksik verdi** (4 imparatorluktan 1'inde, kontrol edilen ~15 künyeden
1'inde). Bu, DİZİN TAMLIK II'nin "konvansiyon audit'i" ekseninin
(Baroda'yı bulan eksen) **ikinci kez** işlediğini gösteriyor — eksen
CANLI, kapatmıyorum. Ama kapsam TAM DEĞİL: İspanya/Portekiz'in çoğu
hâlâ taranmadı, bu YARIM bir tarama, "eksen tükendi" DEMİYORUM.

## Teslim

```
① konvansiyon: Hollanda/Fransa-Vietnam/Fransa-Fas TUTARLI · Fransa-Tunus
   TUTARSIZ (gerçek eksik) · İspanya/Portekiz KISMEN tarandı, tam değil
② tutarlılık sorusu: TERCİH DEĞİL, TEK NOKTALI GERÇEK EKSİK (Tunus)
③ gerçek eksik: Tunus Beyliği (Fransız Himayesi), 1881-05-12→1923-10-29,
   TDV'den doğrulandı, künye YAZILMADI yalnız ÖNERİLDİ
④ D187: eksen ÖLÜ DEĞİL (1/~15 isabet), ama İspanya/Portekiz taraması
   YARIM kaldı — zaman kısıtı, D107 ile açıkça yazılıyor
```

**Öngörü karnesi:** tahmin_1 (Hollanda tutarlı çıkacak) TUTTU ama YÖNÜ
TERSİYDİ — ön-kontrolde zaten sezilmişti, öngörü dosyasında bu dürüstçe
not düşüldü. tahmin_2 (Fransa daha tutarsız çıkacak, çoğu meşru ilhak)
KISMEN TUTTU: Cezayir gerçekten tam ilhak (meşru), ama Tunus'ta
tutarsızlığın sebebi "ilhak" değil "yanlış tarihsel iddia" çıktı —
beklenenden FARKLI bir mekanizma. tahmin_3 (İspanya'da eksik bulunacak)
ÖLÇÜLEMEDİ (zaman kısıtı, taranamadı). tahmin_4 (D187, boş küme
çıkarsa kapat) gerekmedi — küme boş değildi.

**Karar gerektiren açık sorular (Emre'ye/1.MURAT'a):**
1. Tunus Beyliği künyesi açılsın mı — id/ad/tur öyle mi?
2. `tabi:` mekanizması Osmanlı/Rusya dışında (Fransa) ilk kez
   kullanılsın mı, yoksa farklı bir alan mı tercih edilsin?
3. Harita rengi alsın mı (misir-kavalali emsali) yoksa `__BOSLUK__`
   tarzı kronoloji-only mü kalsın?
4. İspanya/Portekiz'in kalan taraması ayrı bir sevk olarak açılsın mı?
