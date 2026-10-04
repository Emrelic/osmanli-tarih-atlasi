# HÜKÜM — komşudan devralma: YALNIZ GÜN, dönem zinciri DEVRALINAMAZ

> Proje kararı · YILDIRIM BAYEZIT · 4 Ekim 2026 · ölçen KASA
> Dayanak ölçümler: `denetim/KASA-KAYNAKSIZ-1004.md` · `KASA-ZINCIR-1004.md`
> 🔴 Bu karar bundan sonraki her devralmayı bağlar. §4 / `D207`un uygulaması.

## 1. KARAR

**`s:` dönem zinciri (devlet/yıl) bir komşudan DEVRALINAMAZ — beyanlı olsa
bile. §4'ün komşu kuralı YALNIZ GÜNÜ kapsar.**

## 2. GEREKÇE — ve niçin "ama motor zaten öyle boyuyor" savunması ÇÖKÜYOR

İlk hükmüm yanlıştı ve şuydu: *"bir sınır köyü 1400'de gerçekten Artuklu
toprağındaydı çünkü bölge öyleydi; §2 petek mantığı bunu zaten yapıyor, yani
yazmak yeni bir iddia eklemiyor."* Kırıldığı yer:

```
`s:` TAŞIMAYAN nokta  →  BOYANANDIR. Peteği en yakın sahipli komşuya emilir
                         (`_kusatilmis`); komşu DÜZELTİLİRSE O DA düzelir.
`s:` TAŞIYAN nokta    →  BOYAYANDIR. Kendi yetkisiyle petek sahibi olur ve
                         KOMŞULARINI boyar. Komşu yarın düzeltilse ARDINDAN
                         GİTMEZ — kopya, kopyalandığı an DONAR.
```
⇒ Yazılı `s:`, motorun çıkarımıyla **aynı şey değil; daha güçlü.** Bağımlı bir
türetmeyi **bağımsız bir tanıklığa** dönüştürür ve sonra sessizce ayrışır.

🔴 Mekanizma [`D256`](../dersler/D256-cozuluyor-ama-yanlis-cozuluyor.md)nın
birebir aynısı: **bağımsız delil gibi görünen bir kopya.** Orada `yer_id`
komşu şehre yazılmıştı, burada `s:` zinciri komşudan alınıyor. İkisi de
*"çözülüyor ama yanlış çözülüyor."*

📌 Ve kendi önceki cümlem bu hükmü zaten vermişti:
[`D257`](../dersler/D257-olu-nokta-kamera-alamaz.md) — *"`s:` DOLU → var
olmayan şehre toprak boyanır = yanlış veri; sahte `s:` yazmak odak kapısının
~97 vekil kayıt üretmesiyle AYNI kusur."* Askalân/Dvin için bunu söyleyip
sınır köyleri için tersini söylemiştim. **Aynı kural, iki farklı sonuç —
yanlış olan ikincisiydi.**

## 3. KOVALAR — ölçülmüş (KASA, 69 gerçek devralma)

| kova | sayı | hüküm |
|---|---|---|
| **A** beyanlı-ŞARTLI (izinli) | **9** | ✅ kalır |
| **B** beyanlı, 1. şart DÜŞÜYOR | **2** | Dimetoka · Ferecik (←Sofulu/Dedeağaç, ikisi de kaynaksız) |
| **C** beyanlı ama DEVLET/YIL | **52** | 🔴 izinsiz (komşunun bilgisi kendi kaynağına: HAYIR 31 · BELİRSİZ 16 · EVET 5) |
| **D** şüpheli | **6** | Ba'lebek · Sûr · Drama · Niş · Filorina · **Vanimo (600 km ⇒ "yakın konum" açıkça düşer)** |

**Zincirleme: 8, hepsi derinlik 2** (derinlik 3 YOK — önceki alt sınır 6'ydı).

🔴 **A kovasının ince ayrımı (KASA):** Başkale · Çaldıran · Şeyhrumi'nin komşu
kaydı BOŞ ama günleri komşuya değil **kaynağa** dayanıyor — kendi kayıtlarında
TDV `van` "24 Ağustos 1548"i doğrudan anıyorlar. §4'ün şartı *komşunun kaydının
dolu olması* değil, **günün bir kaynağa dayanması.** Aynısı Gümülcine/Londra.

🔴 **69'un 69'u da BEYANLI** — neyi kimden aldığını yazıyor. **Karanlık
devralma bu kümede YOK.** Bu küme, hiç beyanı olmayan **1969** kümesinden
AYRIDIR ve ikisini karıştırmak (benim yaptığım hata) gerçek ihlalleri gizler.

## 4. ÇARE KOŞUYA BAĞLI — `kosu-bekliyor`, bu gece UYGULANMAZ

Doğal çare: *iddiayı kaldır, motora bırak* — dönem kalkınca nokta `s:`siz
kalır, peteği `_kusatilmis` ile bölgeye emilir, harita görünüşte AYNI kalır
ama köy artık **iddia etmez.**

⚠️ **Ama doğrulanamıyor, ve ölçüldü niçin:**
```
denetle.py  BEKLENEN_SAHIPSIZ = 309 · "kasten sahipsiz dolgu, delik AÇMIYOR"
            ⇒ sahipsiz SAYAR, ama `_kusatilmis` YUTMASINI MODELLEMEZ
```
Dönemler kalkarsa sayaç 309 → ~337 çıkar ve **ihlal basar** — oysa gerçek soru
*"delik açıldı mı"*dır ve onu yalnız **koşu** söyler. Kıyıda ya da nokta
bulutunun kenarındaki bir köy yutulmaz ve gerçek delik açar.

⇒ **Karar kesin, uygulama koşu sonrası.** İkisi karıştırılmıyor:
```
"devralınamaz"          KESİN, bugün yürürlükte — YENİ devralma YAZILMAZ
"nasıl geri alınacağı"  ÖLÇÜME BAĞLI — HAVVA'nın veri koşusundan sonra
```
Koşudan sonra iki yol: ① yutulanların dönemi kalkar · ② yutulmayanlar
`BEKLENEN_SAHIPSIZ`a **aynı commit'te beyanla** eklenir ([`D253`](../dersler/D253-zincirin-bir-kismini-tamamlamak-baska-denetimi-otur.md)).

## 5. BUGÜN YÜRÜRLÜKTE OLAN — koşu beklemeyen kısım

```
🔴 YENİ bir kayda komşudan DEVLET/YIL devralınarak `s:` YAZILMAZ.
   Gün devralması §4'ün DÖRT şartıyla serbesttir; dördüncüsü "kayda
   'gün komşudan: <komşu> · <kaynağı>' yazılır" ve BİRİNCİSİ
   "komşunun günü KENDİ KAYNAĞINA dayanıyor" — komşunun kaydı dolu
   olsa bile kaynağı "bulunamadı" ise şart DÜŞER.
🔴 Etiket, yapılan işi söylemek ZORUNDA: "§4 şartlı komşu GÜNÜ" yazıp
   dönem zinciri devralan 28 `sinir_*` kaydı, izinli bir kuralın adını
   kullanarak izinsiz bir işi meşru gösteriyordu. (`D255`in kardeşi:
   bir alanın ADI, yaptığı işi söylemeyebilir.)
```

## 6. SIRA — kök önce, yaprak sonra
27 yaprak, **29 boş kökten** besleniyor (en çok besleyenler: Sivas 6 · Van 5 ·
Kayseri 5 · Sofulu 4 · Dedeağaç 3). Kökü kaynaklamak, ona dayanan yaprakları
**geriye dönük meşrulaştırır** — §4'ün birinci şartı sağlanmış olur.
⇒ Çekirdek yedi: **Van · Mardin · Ahıska · Batum · İpsala · Sivas · Kayseri**
(son ikisi KASA'nın önerisi, kabul edildi — en çok kaydı onlar besliyor).
📌 **Öngörü, ölçümden önce yazılıyor:** yedi kök kaynaklandıktan sonra
C kovası 52 → **35 altına**, zincirleme 8 → **5 altına** inmeli. İnmezse
bahis yanlıştır ve C'ye toplu beyanla gidilir.
