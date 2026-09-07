# ÖNGÖRÜ — ALASKA DÖNÜŞTÜRÜCÜSÜ

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> 🔴 **ÖLÇÜMDEN ÖNCE YAZILDI.** `ALASKA-DEVIR-0907.json`un yalnız
> **ilk kaydının ilk üç dizgisi** görüldü (önceki turda). Beş kaydın
> hiçbiri açılmadı, dönem sayılmadı.
> Sahibi: bu oturum. Sınav anı: **hemen.**

---

## ⚠️ ÖNCE BİR BELİRSİZLİK — TAHMİN ETMİYORUM, YAZIYORUM

Şart ① *"DİZGİ AYRIŞTIRMAYACAKSIN"* diyor. Ama `eski`/`yeni` alanları
**dizgi listesi** ve hedef `s:[{f,t,d}]` — ***dönüştürmek, ayrıştırmayı
gerektirir.*** İki okuma mümkün:
```
Ⓐ "hiç ayrıştırma, 5 kaydı ELLE transkribe et"
Ⓑ "ayrıştır, AMA ayrıştırıcıya güvenme: her satırı ham hâliyle
   çıktının yanına bas, ve beklenmedik bir biçimde SESSİZCE GEÇME"
```
🟢 **Ⓑ'yi seçiyorum ve sebebini yazıyorum** — Ⓐ'da transkripsiyonu
yapan **ben** olurum ve bu projede elle yazılan her sayı bugün en az
bir kez bayatladı. Ⓑ'de ayrıştırıcı **sessizce başarılı olamaz**:
```
· her dizgi TAM bir kalıba uymak zorunda; uymayan DURDURUR (çıkış 2)
· her dönem, ÜRETİLDİĞİ HAM DİZGİYLE YAN YANA basılır
· sayılar dosyanın kendisinden türetilir, elle yazılmaz
```
⚠️ **Yanlış okuduysam söyle — ürettiğim çıktı `--kuru`, hiçbir şey
yazılmıyor, ve yeniden üretmek ucuz.**

---

## ÖNGÖRÜLER — dört alanla

```
Ö-K1  BEŞ KAYDIN HEPSİ AYNI SINIR GÜNLERİNİ KULLANACAK
      ① beklenen: `yeni` zincirlerindeki sınır günleri kayıttan
         kayda AYNI (`1799-01-01` ve `1867-06-20` dâhil)
      ② MAZERET VAR: beş kayıt aynı devri anlatıyor ama farklı
         yerleşimler farklı tarihlerde el değiştirmiş olabilir —
         bu projede «merkez düştü diye çevre otomatik devrolmaz»
         kuralı var (`§3.5.1`).
      ③ nereden: `yeni` dizgilerinin gün alanları · birim GÜN
      ④ neye karşı: bugünkü dosya

Ö-K2  `yeni` ZİNCİRİ `eski`DEN DAHA UZUN OLACAK (dönem sayısı)
      ① beklenen: her kayıtta `len(yeni) > len(eski)`
      ② MAZERET YOK — `rus-amerika` ARAYA giriyor demek, bir dönemi
         İKİYE bölmek demektir. Kısalması ya da eşit kalması,
         yamanın bir dönem SİLDİĞİ anlamına gelirdi ve o AYRI bir
         karar olurdu.
      ③ nereden: `len(yeni)` ↔ `len(eski)` · birim DÖNEM
      ④ neye karşı: bugünkü dosya

Ö-K3  🔴 KAPSAMA DEĞİŞMEYECEK: boşluk 0 · çakışma 0
      ① beklenen: `yeni` zincirinin ilk günü = `eski`nin ilk günü,
         son günü = `eski`nin son günü, ve ardışık dönemler
         BİTİŞİK (bir öncekinin `t`si sonrakinin `f`si)
      ② MAZERET YOK — 1.MURAT'ın ②. şartı bu, ve `Değişmez 1`
         zaten bunu istiyor. Tutmazsa dönüşüm HATALIDIR.
      ③ nereden: ayrıştırılmış dönemler · birim GÜN
      ④ neye karşı: bugünkü dosya

Ö-K4  TOPLAM ÜRETİLECEK `s:` DÖNEMİ 15-30 ARASINDA
      ① beklenen bant
      ② MAZERET VAR: beş kaydın dönem sayısını görmedim; ilk kayıtta
         `eski` 3 dönem taşıyordu ve `yeni` en az 4. 5×4=20 civarı
         makul ama bant geniş tutuldu.
      ③ nereden: üretilen dönemlerin toplamı · birim DÖNEM
      ④ neye karşı: bugünkü dosya

Ö-K5  🔴 AYRIŞTIRICI EN AZ BİR SATIRDA ZORLANACAK
      ① beklenen ≥1 satır kalıba tam uymayacak (fazladan boşluk,
         açıklama eki, farklı ayraç)
      ② MAZERET VAR: 5 kayıt küçük bir küme; hepsi tek elden
         yazılmışsa tamamı tek biçimde olabilir.
      ③ nereden: kalıba uymayan satır sayısı · birim SATIR
      ④ neye karşı: bugünkü dosya
      ⚠️ ÇÜRÜRSE İYİ HABER — ama o zaman ayrıştırıcının SIKI olduğu
        SINANMAMIŞ olur; ateşleme dalıyla ayrıca zorlanacak.
```

🔴 **MAZERETİ OLMAYANLAR: Ö-K2 · Ö-K3.**
🟡 Mazereti olanlar: Ö-K1 · Ö-K4 · Ö-K5.

---

## ⚠️ VE ÇIKTIYA YAZILACAK ŞART (1.MURAT'ın ③. şartı)

Dönüştürücü çıktısına **ATOMİK BİRİM** uyarısını basacak:
```
① künye `rus-amerika` iner   (YAMA-KUNYE-RUS-AMERIKA-0907.json)
② BU yama iner               (data/yer_yama_alaska.js)
③ RENK yazılır               (renkler.py — koşu sonrası)
🔴 ② İNİP ③ İNMEZSE HARİTA DELİĞİ DOĞAR — üçü ATOMİKTİR
```
Bugün ölçüldü: `rus-amerika` **BOYALAR'da YOK · devletler.js'te YOK ·
veride kullanım 0.** ⇒ Bugün delik yok; ② tek başına inerse **doğar.**

---
---

# ⇒ SINAV SONUCU — ölçüldü · 5'in 2'si tuttu

```
Ö-K1 aynı sınır günleri       🔴 ÇÜRÜDÜ   MAZERET VARDI (ve tam o sebep)
Ö-K2 yeni > eski              🔴 ÇÜRÜDÜ   🔴 MAZERET YOKTU
Ö-K3 kapsama değişmiyor       🟢 TUTTU    MAZERET YOKTU
Ö-K4 15-30 bandı (18)         🟢 TUTTU    MAZERET VARDI
Ö-K5 ayrıştırıcı zorlanacak   🔴 ÇÜRÜDÜ   MAZERET VARDI
```

## 🔴 Ö-K2 ÇÜRÜDÜ VE MAZERETİ YOKTU — ve BİLGİYİ O TAŞIDI

Öngörü *"`rus-amerika` ARAYA giriyor demek, bir dönemi İKİYE bölmek
demektir"* diyordu. **Dört kayıtta öyle; beşincisinde DEĞİL:**
```
Alatna · Nikolai · Nuchalawoya · Telida   eski 3 → yeni 4   BÖLME
Fort Yukon                                eski 2 → yeni 2   DEĞİŞTİRME
   1847..1867-07-01 ingiliz-kuzey-amerika  →  1847..1867-06-20 rus-amerika
   1867-07-01..1923 kanada                 →  1867-06-20..1923 abd
```
⇒ ***Bu yama TEK BİR ŞEY YAPMIYOR: dört kayıtta bir dönem EKLİYOR,
birinde var olan dönemlerin KİMLİĞİNİ DEĞİŞTİRİYOR.*** İkincisi ayrı
bir tarihsel iddia ve ayrıca doğrulanmalı — dönem sayısına bakan bir
kabul ölçütü onu **hiç görmezdi.**

## ⇒ ÖLÇÜLEN DEĞERLER

```
üretilen `s:` dönemi            18   (4×4 + 1×2)
benzersiz sınır günü             6   1281-01-01 · 1763-02-10 · 1799-01-01
                                     1847-01-01 · 1867-06-20 · 1923-10-29
YENİ gelen gün                   2   1799-01-01 · 1867-06-20
bırakılan gün                    1   1867-07-01
kalıba uymayan dizgi             0   (31 dizginin 31'i uydu)
```

## ÖLÇÜT SONUÇLARI — hepsi geçti

```
K3a  zincir kendi içinde bitişik        🟢 boşluk 0 · çakışma 0
K3b  uçlar korunuyor                    🟢 5/5
K3c  canlı `s:` == `eski`               🟢 5/5   (girdi.yukle 3805)
K7   künye penceresi tutuyor (§3.5.0)   🟢 18/18
     rus-amerika 1799-01-01→1867-06-20 · dönemler TAM İÇİNDE
```

## `Değişmez 2s` MALİYETİ — AYRICA ÖLÇÜLDÜ (sayılmayan eksen)

`SINAV-KOSU8-ALASKA-MALIYET-0907.py`:
```
M1 KAPSAM   beş noktanın en yakını Osmanlı gövdesine 7102 km
            (tavan 2014 km) ⇒ 🟢 BEŞİ DE KAPSAM DIŞI, `2s` AÇIK DEĞİŞMEZ
            ⚠️ mesafe BAŞKENTE değil `d:`/`v:` taşıyan 929 NOKTAYA ölçüldü
              — `§11` bu hatayı adıyla kaydediyor (15 sanılan sayı 165'ti)
M2 MADDE    1867-06-20 → çekirdekte  1 gün uzaklıkta madde VAR
            1799-01-01 → çekirdekte 70 gün ⇒ kapsam İÇİNDE olsaydı AÇIK
              olurdu; bugün kapsam dışı olduğu için maliyeti YOK
M3 BIRAKILAN 1867-07-01 bu beş kayıt DIŞINDA 125 kayıtta kullanılıyor
            (Kanada Konfederasyonu) ⇒ gün külliyatta KALIYOR
```
📌 `§11`, `zend`→`kacar`: bir hüküm *"her eksende temiz"* diye
savunulmuş, dört eksen sayılmış, **beşincisi** (`2s`) ölçülünce
`101 → 102` çıkmıştı. Bu sefer beşinci eksen **önceden** ölçüldü ve
maliyeti **sıfır** çıktı — ama ölçülmeden bilinemezdi.

## 🔴 ÜÇ AÇIK KALEM — KARAR BENDE DEĞİL

```
① `kaynak:` ALANI HİÇBİR KALEMDE YOK
   5 kalemin alanları: ad · eski · yeni. `§4` kırmızı çizgi:
   «Kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez.»
   ⚠️ Künye yamasının kaynağı VAR ve sağlam (TDV `rusya`, gövde okundu,
     gün uydurulmamış). Eksik olan YERLEŞİM yamasının kaynağı.

② `1867-06-20` NEYİ TARİHLİYOR — ve atlas neyi boyuyor?
   Künye yaması bu günü «devir tamamlandı» diye kullanıyor.
   ⚠️ ÖLÇMEDİM, OKUMADIM: bu gün Alaska satışının hangi aşaması?
     Atlas TASARRUF boyar (`§11`), ve bir antlaşmanın onay teatisi ile
     fiilî devir teslimi AYNI GÜN OLMAYABİLİR. Kaynağa sorulmalı.

③ FORT YUKON 1847-1867 GERÇEKTEN `rus-amerika` MIYDI?
   Yama bu kaydın kimliğini `ingiliz-kuzey-amerika` → `rus-amerika`
   yapıyor. ⚠️ OKUMADIM. Ama sınıf tanıdık: `§11` *«ATLAS SEFERİ DEĞİL
   TASARRUFU BOYAR»* — bir devletin bir yeri TALEP ETMESİ ile orada
   FİİLEN TASARRUF ETMESİ ayrı şeyler, ve bu ayrım bu projede dört kez
   kusur üretti (sefer · anılma · isyan · idarî devir).
   ⇒ Karar kaynağa dayanmalı; ben yalnız SORUYU kaydediyorum.
```

## 🟢 VE BİR ARAÇ KUSURU — BU ALETİN KENDİSİNDE, İLK KOŞUDA

İlk sürüm `Nikolai (Yukarı Kuskokwim)` ve `Telida / Denali eteği`
için **«CANLI VERİDE YOK»** bastı. İkisi de veride **VARDI.**
```
çocuk süreç  json.dumps(..., ensure_ascii=False) + stdout
Windows'ta boru YEREL KODLAMAYLA yazılır (cp1254)
utf-8 okuyan taraf  'Yukar� Kuskokwim'  ⇒ ad EŞLEŞMEZ
ASCII olan üç ad eşleşti · Türkçe harfli İKİ ad 🔴 YOK çıktı
```
🔴 **Alet çökmedi — TEMİZ BİR YALAN üretti.** `§4`ün *"`İ`.lower() iki
kod noktası verir"* dersinin **boru** yüzü, ve `§11`in *"alet hata
vermedi, temiz bir sayı üretti"* ailesinin bugünkü üyesi.
⚠️ Ve zararı somuttu: rapor *"iki yerleşim veride yok"* diyecekti,
koordinatör **var olan iki noktayı aramaya** çıkacaktı.

🟢 **İki düzeltme yapıldı, biri yetmezdi:**
```
① kanal ASCII kaçışlı JSON'a çevrildi ⇒ kodlama yolu tamamen kapandı
② YOKLUK ARTIK TEK KANALDAN İLAN EDİLMİYOR: `girdi` bulamazsa ham
   `data/*.js` dosyalarına İKİNCİ KAPIDAN sorulur; orada varsa çıktı
   «veride yok» değil «ARAÇ KUSURU» der.
```
📌 Ve `C13 ③`: 12 ateşleme dalının 12'si de **enjekte girdiyle** koşuyordu,
yani bozuk kanal **hiç çağrılmıyordu** ve 12/12 🟢 diyordu. Kanal
sınavı (`--atesle` sonuna eklendi) o boşluğu kapatıyor: Türkçe harfli
bir ad · ASCII bir ad · olmayan bir ad, gerçek `girdi.yukle`den.
🟢 Ve kusuru yakalayan şey aletin kendisi değil, **`grep` ile ikinci
bir kanaldan bakmak** oldu. O ikinci kanal artık aletin İÇİNDE.
