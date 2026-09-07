# DEĞİŞMEZ 3 — ÖLÇÜM RAPORU · 7 Eylül 2026 · `DEGISMEZ3-0907`

> **Bu rapor HÜKÜM VERMEZ.** Kabul ölçütü *"çözmek"* değil **doğru
> sınıflandırmaktı**; öneriler ayrı dosyada (`ONERI-DEGISMEZ3-0907.md`).
> `data/` koşu 8'de donuk — hiçbir veri değiştirilmedi.

## ⓪ ALETLER — ve niçin yetkili aleti taklit etmek zorunda kaldım

| alet | ne yapar |
|---|---|
| `ARAC-DEGISMEZ3-TABAN-0907.py` | `denetle.degismez3` / `degismez3z`i **doğrudan çağırır** |
| `ARAC-DEGISMEZ3-KORNOKTA-0907.py` | aletin sessizce atladığı kayıtlar · `kd:` derinliği |
| `ARAC-DEGISMEZ3-TAM-0907.py` | **tam tarama** — olay noktası yöntemi |
| `ARAC-DEGISMEZ3-KOVA-0907.py` | oran kovaları |
| `ARAC-DEGISMEZ3-TESHIS-0907.py` | devralınan teşhisin sınavı |
| `ARAC-DEGISMEZ3-CARE-0907.py` | `kd:` neyi çözer / çözmez |
| `ARAC-DEGISMEZ3-MALIYET-0907.py` | açık kalem + çare maliyeti |

🔴 **Ölçütü yeniden yazmak zorunda kaldım** çünkü `denetle.degismez3`in
evreni **sabit altı gün**. `CLAUDE.md §11` bunu yasaklamıyor ama şart
koşuyor: *"bir aleti taklit eden ölçüm onun EŞİĞİNİ ve KOVA YAPISINI da
taşımalı."*

🟢 **DENKLİK SINAVI KONDU ve GEÇTİ** — tam tarama aynı 6 kesite
daraltıldığında yetkili aletle **birebir** eşleşmeli, eşleşmezse betik
`sys.exit(1)` ile durur:
```
ZAMANSIZ   yetkili 493  ·  benim (6 kesite daraltılmış) 493   EŞİT ✓
ZAMANLI    yetkili 486  ·  benim (6 kesite daraltılmış) 486   EŞİT ✓
```
⇒ Tam tarama sayıları geçerli. *(Bu sınav olmadan sayılarım
`4s` kovası vakasındaki gibi sessizce ayrışabilirdi.)*

---

## ① BUGÜNKÜ SAYI — devralınan 359 çürüdü

**Aynı ölçüt, aynı 6 kesit, bugünkü veri:**
```
evren                3805 nokta · 77 girdi dosyası
m: taşıyan            814  (%21,4)   ← çelişki evreni BU, 3805 DEĞİL
zamansız çelişki      493      (8 Ağu 311 → 359 → bugün 493)
benzersiz yerleşim    254
kesit dağılımı  1300:149 · 1400:162 · 1500:86 · 1600:32 · 1700:32 · 1800:32
```

**TAM TARAMA (1281-01-01 … 1923-10-29, örneklem DEĞİL):**
```
                        ZAMANSIZ (m:)      ZAMANLI (kd_gun)
benzersiz (yer,merkez)        690                689
çelişki aralığı              2531               2482
toplam çelişkili gün   20.670.335         20.244.122     [ÇİFT-GÜN]
```
⚠️ **BİRİM: çift-gün** (çift × gün), takvim günü değil. 690 çiftin toplamı
bir takvim aralığından büyük olabilir ve olması normaldir.

🔴 **ÖRNEKLEM ÇİFTLERİN %63'ÜNÜ HİÇ GÖRMÜYOR:**
```
tam taramanın bulduğu çift            690
6 kesitin gördüğü                     254
6 kesitin HİÇ GÖRMEDİĞİ               436   (%63)
6 kesitte olup tamda olmayan            0   ✓ tutarlılık
```
📌 *"Temiz çıkan bir örneklem, örneklemin dışını temiz ilan etmez"* dersinin
**zaman ekseni** vakası: önceki vakalarda evren coğrafî olarak dardı, burada
**zamansal** olarak.

---

## ② KOVALAR — 690 çift TEK CİNS DEĞİL, üç ayrı eksende ayrışıyor

### ⓐ ORAN ekseni — çelişkili gün / ortak yaşam günü
```
A · HİÇ UYUŞMADI (%100)                0 çift            0 çift-gün
B · ÇOĞUNLUKLA KOPUK (%50-99)         48 çift    7.249.271
C · KISMÎ KOPUKLUK (%10-49)          181 çift   10.880.899
D · GEÇİŞ/FETİH SIRASI (<%10)        461 çift    2.540.165
```
🔴 **İKİ BİRİM TERS SIRALIYOR:** çift SAYISI D'de (%67), zaman AĞIRLIĞI
B+C'de (%88). Tek birimle raporlansaydı ya *"çoğu önemsiz geçiş"* ya
*"çoğu ağır kopukluk"* denirdi — ikisi de yanlış olurdu.

### ⓑ ZAMAN ekseni — çelişki merkezin Osmanlı oluşuna göre nerede?
```
① ANAKRONİK — merkez HENÜZ Osmanlı DEĞİLKEN     372 çift  10.761.882  %52,1
② FETİH ARASI — biri Osmanlı, öteki henüz değil  347 çift   5.044.328  %24,4
③ İKİSİ DE (en az bir kez) OSMANLI OLDUKTAN SONRA 451 çift  4.863.395  %23,5
④ MERKEZ HİÇ OSMANLI OLMAMIŞ                       2 çift         730   %0,0
```
⚠️ **③'ün adı düzeltildi:** ilk yazımı *"ikisi de Osmanlı olduktan sonra"*ydı
ve yanlıştı — şart `f >= max(ilk_osmanlı_günleri)`, yani o anda ikisinin de
Osmanlı **olması gerekmiyor**, sadece daha önce bir kez olmuş olmaları.
Otranto (`napoli`) tam bu yüzden burada. *(`§11` etiket dersi.)*

**Vakalar:**
```
① Çehrin  m:Kamaniçe  1281-1569  Kamaniçe 1672'de Osmanlı oldu → 391 yıl önce
① Uyvar   m:Budin     1281-1526  Budin 1526-09-01
② Korfu   m:Yanya     1430-1797  Yanya 1430 Osmanlı, Korfu Venedik
③ Otranto m:Yanya     1481-1861  Otranto napoli
```

### ⓒ ÇARE ekseni — `kd:` neyi çözer? **(en önemli ayrım)**
```
🔴 COĞRAFÎ BAĞ  — hiç aynı devlette olmadılar        0 çift          0   %0,0
🟠 NEREDEYSE COĞRAFÎ — uyum < %5                      7 çift  1.437.208   %7,0
🟢 SİYASÎ BAĞ   — aynı devlette oldular             683 çift 19.233.127  %93,0
```
🟠 kovanın **7'sinin 6'sı Yanya**: Otranto · Korfu · Paksos · Zakynthos ·
Kefalonya · İthaki (+ Dir'iye `m:Basra`). İyonya adaları ve Otranto —
`m:"Yanya"` burada gerçekten **coğrafî** bir gruplama.

---

## ③ DEVRALINAN TEŞHİS — DOĞRU AMA ÇOK GENİŞ

`CLAUDE.md §3` (🟡 devralındı, bugüne kadar ölçülmemişti):
> *"Kusur `m:`nin güncellenmemesi değil, `m:`nin YANLIŞ EKSENDE olması.
> `m:` bir idarî merkez tutuyor — siyasî bir şey — ama coğrafî bir
> gruplama için kullanılıyor."*

**Sınanabilir hâle getirildi:** teşhis doğruysa çiftlerin önemli bir kısmı
**hiç aynı devlette olmamış** olmalı — çünkü coğrafî bir bağ siyasî uyum
gerektirmez.

```
🔴 ÖNGÖRÜM (ölçümden ÖNCE yazıldı): coğrafî kova %10-30 bandında
   ÖLÇÜM: çift %1,0  ·  çift-gün %7,0
   ⇒ ÖNGÖRÜ ÇÜRÜDÜ — ve çürümesi asıl bilgiyi taşıyor
```

⇒ **TEŞHİS DARALTILDI, ÇÜRÜTÜLMEDİ:**
```
EKSEN kusuru (m: coğrafî)    GERÇEK ama    7 çift ·  %7,0
ZAMAN kusuru (m: zamansız)   ASIL KUSUR  683 çift · %93,0
```
📌 `m:` **doğru eksende**: 690 çiftin 683'ünde yerleşim ile merkez gerçekten
bir dönem aynı devlette olmuş — bağ siyasîdir. Eksik olan tek şey **zaman
penceresi**. Devralınan teşhis bir *"eksen"* kusuru tarif ediyordu; ölçüm
onu **%7'lik bir alt-kova**ya indirdi.

⚠️ **Ama %7 "yok" demek değil:** o 7 çift `kd:` ile ÇÖZÜLEMEZ ve tek satırda
raporlansalardı `kd:` çaresiyle *"çözüldü"* sayılıp bir daha bakılmayacaktı.

---

## ④ `kd:` DURUMU — ⚪ "ölçmedim" kalemi kapandı

```
kd: taşıyan kayıt                      192      (VERI-YAPISI.md "henüz yok" DİYOR)
  ├ tek dönemli                        175
  │   ├ penceresi UFUK ile birebir       7   ← kd_oku'nun türeteceğinin aynısı
  │   └ penceresi FARKLI               168   ← bilgi TAŞIYOR (varlık penceresi)
  └ çok dönemli                         17
      ├ k: değişen                       3
      └ 🔴 m: GERÇEKTEN DEĞİŞEN           4   ← BORCUN ÖDENEN KISMI
          Akkirman · Kili · Bender · Özi  (Silistre → Özi, 1593)
`turetildi:True` damgası taşıyan          0
```

🔴 **`degismez3z`in bastığı "gerçek kd: 192" borcun ödendiğini 48 KAT
büyük gösteriyor.** `Değişmez 3`ü çözen şey `m:`nin zamanla değişmesidir;
192'nin **4'ünde** değişiyor.

> ⚠️ **Kendi ilk okumamı daralttım:** ilk turda *"175'i tek dönemlik, zaman
> derinliği yok"* diye bildirmiştim. Ölçüm bunu düzeltti — 168'i UFUK'tan
> farklı, anlamlı bir varlık penceresi taşıyor (Granada 1281-1492 · Venedik
> 1281-1797). Bilgi **var**; `m:` değişimi yok. İki ayrı şey.

🔴 **AYIRT EDİLEMEZLİK:** `girdi.kd_oku()` türettiği dönemi `turetildi:True`
ile damgalıyor, veriye **elle yazılan** tek dönemli `kd:` o damgayı
taşımıyor (ölçüldü: 0). ⇒ *"Bu kayıt araştırıldı mı, yoksa varsayılan mı"*
sorusu **veriden cevaplanamıyor**.

🔴 **BELGE BAYAT:** `VERI-YAPISI.md:160` `kd:`yi hâlâ **"🔜 Planlanan alanlar
(henüz yok)"** başlığı altında gösteriyor. `girdi.py`de `kd_oku()`+`kd_gun()`
canlı, `kd` `BILINEN_ALANLAR`da, veride 192 kayıt. Bu satıra bakan bir oturum
**var olan bir alanı yeniden tasarlar** — `sinif:` ↔ `kd:` vakasının tekrarı.

---

## ⑤ ALETİN KÖR NOKTASI — 4 kayıt "temiz" değil, **BAKILMADI**

`denetle.py:1487` → `m = ix.get(y["m"]);  if not m: continue`
Merkezi atlasta bulunamayan kayıt **sessizce atlanıyor** ve sayısı hiç
basılmıyor. (`§11`: *"`0`, 'yok' ile 'bakmadım' arasında ayrım yapmaz"*)

```
Prizren             m:"Üsküb"   → atlasta `Üsküp`         (b / p)
Kovel               m:"Lutsk"   → atlasta `Lutsk (Łuck)`  (parantezli ek)
Rivne (Równe)       m:"Lutsk"   → aynı
Volodymyr-Volynskyi m:"Lutsk"   → aynı
```

🔴 **VE ÖNCE BENİM ALETİM YANILDI:** ilk turda dördünü de *"GERÇEKTEN YOK"*
diye bastım. Yanlıştı — ikisi de atlasta var. Normalleştiricim iki eksende
kör: **parantezli ek** ve **b/p ünsüz varyantı**. `CLAUDE.md §4`ün eşanlam
borcunun (`Budin ↔ Buda`) yeni iki ekseni; normalleştirici çözmez, **eşanlam
sözlüğü** çözer.

⇒ Ad düzeltilirse bu 4 kayıt ölçüme **girer** ve 690 sayısı **artabilir**.

---

## ⑥ ÇARE MALİYETİ — pahalı olan alan değil, ARAŞTIRMA
```
düzeltilecek yerleşim              690
yazılacak kd: dönemi (ALT SINIR)  3221   (690 taban + 2531 çelişki aralığı)
ortalama aralık / yerleşim         3,7
en çok bölünecek: Cübeyl · Eçmiyadzin · Gümrü · Katîf · Lahsa · Ukayr (16'şar)
```
🔴 Her `kd:` dönemi *"bu yerleşim o tarihte şu idarî merkeze bağlıydı"*
iddiasıdır ve `§4`e göre **kaynak ister**. Yani maliyet ~3221 **kaynaklı
iddia** — alan eklemek değil.

---

## ⑦ ÖLÇMEDİKLERİM — açıkça
- 🟠 kovadaki 7 çiftin `m:` değerlerinin **doğru olup olmadığı**. Onları
  *"coğrafî bağ"* diye sınıfladım; `m:"Yanya"`nın Korfu için tarihen doğru
  bir idarî atıf olup olmadığını **kaynağa sormadım.**
- `Üsküb`/`Lutsk` düzeltmesinin 690'ı **kaça** çıkaracağı (ad `data/`de,
  koşu 8 donuk — denemedim).
- `kd:` taşıyan 192 kaydın **niçin** o 192 olduğu (hangi parti yazdı).
- Zamanlı (689) ile zamansız (690) arasındaki **1 çiftlik farkın hangisi**
  olduğu.
- `Üsküp`ün `grep`te **2 kez** çıkması — mükerrer nokta olabilir, benim
  kalemim değil, **bildiriyorum**.
