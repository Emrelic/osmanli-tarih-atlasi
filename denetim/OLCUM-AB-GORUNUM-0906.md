# A/B GÖRÜNÜM — ALTYAPI **ZATEN VAR**, eksik olan TEK BİR ANAHTAR

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · KOD OKUNDU, YAZILMADI.**
> Koşu 7 sürüyor ⇒ `arac/uret_petek.py` DONUK; bu ölçüm salt okuma.

---

## ⓪ EMRE'NİN TARİFİ

> *"boşluk kapatma · enklav birleştirme · koridor doldurma · iki devlet
> arası boşluk paylaştırma gibi fonksiyonları kullanarak haritada daha
> geniş bölge kapsayacak görünüm ile A ve B görünümü şeklinde iki
> görünümün altyapısını bitirelim. ikinci görünümde sadece tavana göre
> yerleşimlerin bölge aldığı ve geniş boşlukların, enklavların,
> koridorların, beneklerin olduğu görünüm olacak."*

⇒ **A = doldurulmuş/geniş kapsama** · **B = ham tavan görünümü**

---

## ① 🟢 ÜÇ FONKSİYONUN ÜÇÜ DE KODDA — ve bir orkestratörün altında

```
B1   delikleri_doldur(g, muaf, sahip_ix)      :1331   boşluk kapatma
B2   _b2_enklav_birlestir(g, sahip_ix)        :1512   enklav birleştirme
B3   _b3_koridor_kirp(g, sahip_ix)            :1614   koridor
     gosterim_duzelt(g, sahip_ix)             :1688   B2+B3'ü sırayla uygular
```
Ve çağrı yeri **yan yana** (`:4540-4541`):
```python
g = delikleri_doldur(kapat(g), sahip_ix=aktif)   # B1
g = gosterim_duzelt(g, aktif)                    # B2 enklav + B3 koridor
```
Kodun kendi docstring'i: *"B2 + B3'ü sırayla uygular. B1
`delikleri_doldur` içinde zaten var."*

🟢 **B1'in bir de "ikinci yasağı" var** (`:1369`, 27 Ağustos): başka bir
devletin **yerleşiminin üstüne** doldurmuyor. Yani boşluk kapatma
körlemesine değil, sahipli toprağa saygılı.

⚠️ **Dördüncü kalem — "iki devlet arası boşluk PAYLAŞTIRMA" — ayrı bir
fonksiyon olarak YOK.** Bugün onu **yetim yüz** mantığı yapıyor (kopan
yüzler en yakın sahipli komşuya katılıyor). İsim farklı, iş benzer;
ama **aynı olduğunu ÖLÇMEDİM.**

---

## ② 🟢 B2/B3 ZATEN ANAHTARLI — ve anahtar bir ORTAM DEĞİŞKENİ

```python
B23_ACIK = os.environ.get("MOTOR_B23_KAPALI") != "1"      # :1406
```
⇒ `MOTOR_B23_KAPALI=1` ile enklav birleştirme ve koridor **kapanıyor**,
kod değişikliği gerekmeden.

## ③ 🔴 EKSİK OLAN TEK ŞEY: **B1'İN ANAHTARI YOK**

`delikleri_doldur` `:4540`da **koşulsuz** çağrılıyor. Yani bugün:
```
MOTOR_B23_KAPALI=1  →  B2 ve B3 kapanır, B1 YİNE ÇALIŞIR
                       ⇒ "yarı ham" bir görünüm, Emre'nin B'si DEĞİL
```
Emre'nin B görünümü (boşluklar · enklavlar · koridorlar · benekler
**görünür**) için B1'in de kapanabilmesi gerekiyor.
🟢 **Maliyeti tek satır**, B23'ün emsaliyle birebir:
```python
B1_ACIK = os.environ.get("MOTOR_B1_KAPALI") != "1"
```
ve `:4540`ın koşullu hâle gelmesi.

---

## ④ 🔴 ASIL SORU: İKİ GÖRÜNÜM **TEK KOŞUDAN** ÇIKAR MI?

**Bugün HAYIR.** Sebep yapısal: bayraklar **küresel** ve geometri
**bir kez** yazılıyor (`data/donemler.js` · `bolgeler.js` ·
`devletler_harita.js`). Bir koşu tek bir görünüm üretir.

Üç yol var ve maliyetleri **çok** farklı:
```
Ⓐ İKİ KOŞU        MOTOR_B1_KAPALI=1 MOTOR_B23_KAPALI=1 ile ikinci koşu
                  🟢 kod değişikliği ~1 satır · 🔴 ~20 SAAT daha
Ⓑ TEK KOŞU, İKİ ÇIKTI
                  `gosterim_duzelt` uygulanmadan ÖNCEKİ gövde de
                  yazılır ⇒ iki geometri kümesi, tek koşu
                  🟢 ek süre KÜÇÜK (düzeltme koşunun %0,2'si değil ama
                     gövde birleştirme zaten yapılmış oluyor)
                  🔴 çıktı dosyaları ~2 kat · motor değişikliği ORTA
                  ⚠️ EK SÜREYİ ÖLÇMEDİM — tahmin etmiyorum
Ⓒ ARAYÜZDE ÜRET   tarayıcıda B'den A'yı hesaplamak
                  🔴 ELENDİ: `app.js:993` "gerçek birleşim (union)
                     tarayıcıda hesaplanamaz — geometri kütüphanesi yok"
```

🟢 **Ve Ⓑ için bir işaret var:** `:4738`de `gosterim_duzelt` bir
**kopyaya** uygulanıyor (`_duzelt = gosterim_duzelt(_birlesik, aktif)`)
— yani düzeltilmemiş gövde (`_birlesik`) o noktada **elde duruyor.**
İki çıktı için gereken şey orada zaten mevcut.
⚠️ Bunun ana çıktı yolunda da geçerli olup olmadığını **ölçmedim**.

---

## ⑤ ÖLÇÜLMÜŞ SONUÇ — Emre'nin sandığından ucuz

```
"altyapıyı bitirelim"   →  altyapının 3/4'ü ZATEN BİTMİŞ
eksik olan              →  B1 için bir anahtar (≈1 satır) +
                           iki çıktı kararı (Ⓐ ucuz-yavaş / Ⓑ pahalı-hızlı)
```

## ⑥ ÖLÇMEDİĞİM
- "Boşluk paylaştırma"nın yetim-yüz mantığıyla **aynı şey olup olmadığı**.
- Ⓑ'nin **ek süresi** ve çıktı boyutu.
- `:4738`deki kopya deseninin ana çıktı yolunda da geçerli olduğu.
- B görünümünde "benekler"in ne kadar olacağı — `motor_kara.geojson`
  ölçümü (2 Eylül) A1 tavanının 200 km'de kestiğini gösteriyordu; B
  görünümü **bugünkü `motor_kara`ya yakın** olabilir ama ÖLÇÜLMEDİ.
