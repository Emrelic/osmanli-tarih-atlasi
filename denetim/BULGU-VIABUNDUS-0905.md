# `viabundus` envanteri — **ölü veri DEĞİL**, ve bulgum bir YENİDEN KEŞİF

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2955 · 5 Eylül 2026
> 🔴 HÜKÜM YOK — bu bir **envanter**.

---

## ⇒ KOVA: 🟡 **HAZIRLIK, BEKLİYOR** (üçünden ikincisi)

## ① KİM OKUYOR — üç araç VAR
```
arac/viabundus_indir.py     indirici
arac/viabundus_olc.py       ölçüm aracı
arac/koridor_olc.py         koridor ölçümü
data/koridor.js             `KORIDOR_DUGUM` · `KORIDOR_KENAR`
```
⇒ **Ölü veri değil.** Depoya bilerek, künyeli ve araçlı girmiş.

## ② 🔴 VE BENİM "YAN BULGUM" BİR YENİDEN KEŞİFTİ
```
git log -- veri-kaynak/viabundus
ea3cd06  2026-08-15  "ALTYAPI DURUM OLCULDU + Viabundus indi ve
                      OLCUM BENI CURUTTU (**48,7 K altina inmiyor**)"
```
🔴 Bugün *"yan bulgu"* diye bildirdiğim kapsam sınırı (48,72°K) **21 gün
önce ölçülmüş** ve commit mesajına yazılmış. Ben onu bağımsız olarak
yeniden buldum.
📌 `§11`in *"kendi ödediğin borcu kaydını okumadan yeniden iş
sanabilirsin"* dersinin bu geceki ikinci vakası — ve bu sefer zarar
yok, çünkü **iş türetmedim**, yalnız bir eleme gerekçesini
güçlendirdim. Ama sıra doğru olsaydı `git log` **on saniye** sürerdi.
🟢 Ve bir teyit değeri var: aynı sayı iki bağımsız ölçümden çıktı.

⚠️ **Ve commit mesajına da körü körüne güvenilmedi** (`§11` mezar taşı
dersi): kapsam kutusunu bugün **kendim ölçtüm** (48,72-60,71°K ·
3,22-37,62°D) ve commit'in iddiasıyla uyuştu.

## ③ KAPSAM — SAYIYLA
```
atlas noktası toplam .................... 3805
viabundus kutusu içinde ................. **163**  (%4,3)
   Krakov · Lvov · Kiev · Harkov · Amsterdam · Berlin · Hamburg ·
   Frankfurt · Köln · Dresden …

Osmanlı çekirdeği (`d:` taşıyan) ........ 809
   kutu içinde ........................... **4**  (%0,5)
   Çehrin · Bar (Podolya) · Meciboj · Yazlofça
```
🔴 **Osmanlı çekirdeğinin %0,5'i.** Dördü de Podolya/Ukrayna — yani
1672-1699 arası Osmanlı'nın en kuzey ucu.
⇒ Viabundus, atlasın **çekirdeği için değil**, `BES-ALTYAPI ⑤`in
*"halka halka, tüm dünyaya"* hedefinin **batı halkası** için veri.

## ④ `BES-ALTYAPI ⑤` NE İSTİYOR — ve viabundus uyuyor mu
Emre'nin beyanı:
> *"Yerleşim yerleri ve aralarındaki koridorlardan geçen yollar ağ
> şeklinde, düğüm ve ağ olacaktır. 1. bölgeden başlayarak ağ yapısı
> **tüm dünyaya** yayılmalıdır. Bu yollar; vadilerden, geçitlerden,
> boğaz geçitlerinden, dere/ırmak yollarından, tarihî yollardan,
> deniz kıyısındaki düz arazi ve yollardan oluşacaktır."*

Viabundus içeriği (KAYNAK.md, künyeli):
```
kara yolları · iç su yolları · şehirler · gümrük istasyonları ·
istapel pazarları · panayırlar · KÖPRÜLER · FERİBOTLAR · limanlar ·
gemi kilitleri          · 19.283 kenar: land 18.017 · water 1.116 ·
                          ferry 149 · lsnd 1
```
🟢 **Tarife BİREBİR uyuyor** — hatta fazlası var (gümrük, panayır).
Ve `§4` kabul kümesine oturuyor: hakemli dergi (*Research Data Journal*,
Brill 2022), üniversite yürütücülü (Radboud), **CC-BY 4.0**, DOI'li.

🔴 **ATIF ZORUNLU** — KAYNAK.md yazıyor: *"Bu veriden türetilen her
çıktıda Viabundus atfı bulunmalıdır."*

## ⑤ BUGÜNKÜ KORİDOR AĞI — ve viabundus'un dolduracağı boşluk
```
`BES-ALTYAPI ⑤` ölçümü:  106 düğüm · 26'sının koordinatı EKSİK
kapsam: yalnız Osmanlı menzil sistemi (1539-1839) · **dünya ağı YOK**
ekranda 2 parça değil **17 kopuk kümecik** (107 kenarın 43'ü çizilemiyor)
```
⇒ Viabundus **bu boşluğu kapatmıyor** — 26 koordinatsız düğüm Anadolu
ve Rumeli'de, viabundus ise 48,7°K'nin kuzeyinde. **İki ayrı iş.**

---

## ⇒ ENVANTER SONUCU
```
🟢 zaten kullanılıyor        HAYIR — KAYNAK.md: "İNDİRİLDİ ≠ BAĞLANDI"
🟡 hazırlık, bekliyor        **EVET** ← kova bu
🔴 ölü veri / yanlış coğrafya HAYIR — ama kapsamı ÇEKİRDEĞİN DIŞINDA
```
**Ne olduğu:** `BES-ALTYAPI ⑤`in **HALKA 2 batı kanadı** için, künyeli
ve lisanslı, hakemli bir kaynak. Bilerek indirilmiş, motora bilerek
bağlanmamış.
**Ne olmadığı:** bugünkü koridor ağının eksiklerinin çaresi değil, ve
Osmanlı çekirdeğine **%0,5** dokunuyor.

## ⑥ NE ÖLÇMEDİM
```
🔴 `viabundus_olc.py` ve `koridor_olc.py`nin NE ölçtüğünü — dosyaları
   AÇMADIM, yalnız varlıklarını saydım
🔴 19.283 kenarın atlas noktalarıyla eşleşip eşleşmediğini
🔴 `Water-1500` ve `GML` kopyalarının (KAYNAK.md "alınmadı" diyor)
   bugün gerçekten yok olup olmadığını
⚪ 163 noktanın kaçının viabundus düğümleriyle EŞLEŞTİĞİNİ — bu
   kapsamın gerçek kullanılabilirliğini verirdi, ölçmedim
```
