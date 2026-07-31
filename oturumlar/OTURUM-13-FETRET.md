# OTURUM 13 — FETRET DEVRİ'NDE ÜÇ "DOĞRUDAN OSMANLI" KAYDI

**Kullanıcı kusuru:** *"Bu kırmızıki bölge Osmanlı bölgesi içinde ne anlama
geliyor… Osmanlı Fetret'e girmeden önceki renk ve tarz ile gösterilen iki
küçük bölge."*

**Sonuç: kusur GERÇEK, sebebi ihmal, ve düzeltmesi tamamen kaynaklı.**
Üçü de Karesi toprağıdır ve komşularının hepsinin taşıdığı zinciri
taşımalıdır. Uydurma gerekmedi.

---

## 1. Ölçüm — üç kayıt, tam üç, başka yok

Bütün canlı veride (967 nokta) Fetret'in beş kesitinde (`1403 · 1405 · 1408 ·
1410 · 1412`) `d:` ya da `v:` kalan kayıtlar:

```
Erdek     40,40K 27,80D   d:OSMANLI × 5 kesit
Edremit   39,60K 27,02D   d:OSMANLI × 5 kesit
Ayvalık   39,32K 26,69D   d:OSMANLI × 5 kesit
toplam 3
```
⇒ Koordinatörün üç kaydı **listenin tamamıdır**; dördüncü bir vaka yok.
Üçünün de tek bir kesintisiz dönemi var: `d:[{f:"1345-01-01",t:"1923-10-29"}]`.

## 2. Verinin kendi Fetret modeli — iki kanonik zincir

```
ANADOLU  (49-51 kayıt)   1402-07-28→1403-09-01  isa-celebi
                         1403-09-01→1404-03-01  mehmed-celebi
                         1404-03-01→1411-02-17  suleyman-celebi
                         1411-02-17→1413-07-05  mehmed-celebi
RUMELİ   (43 kayıt)      1402-07-28→1410-02-13  suleyman-celebi
                         1410-02-13→1410-06-15  musa-celebi
                         1410-06-15→1411-02-17  suleyman-celebi
                         1411-02-17→1413-07-05  musa-celebi
```
Erdek · Edremit · Ayvalık üçü de **Anadolu yakasındadır** ⇒ Anadolu zinciri.

Komşuları bu zinciri **birebir** taşıyor: Bergama · Balıkesir · Biga ·
Çanakkale · Bursa · İznik · Mihaliç (Karacabey).

## 3. 🔍 Neden atlandılar — ölçüldü, ihmal ve YAPISAL

`data/yerlesimler.js` satır numaraları:

| Kayıt | Satır | Hangi partide |
|---|---|---|
| Balıkesir · Bergama | 141 · 143 | **çekirdek** |
| Biga | 1071 | **çekirdek** |
| **Edremit · Erdek** | **1342 · 1344** | *"TDV KARESİOĞULLARI"* yoğunluk partisi |
| **Ayvalık** | **1376** | *"Batı Karadeniz kıyısı ve Ayvalık: ölçülen açıklar"* partisi |

⇒ Fetret dönüşümü **bir kerelik bir süpürmeydi**; o süpürmeden SONRA eklenen
yoğunluk noktaları dönüşümü hiç almadı. Kasıt değil, **koruması olmayan bir
tek seferlik dönüşüm.**

> 🔴 **Genellenebilir ders:** bir kerelik veri dönüşümünün bekçisi yoksa,
> sonradan eklenen her kayıt onu sessizce ıskalar. Üç değişmezin hiçbiri
> "bu kayıt Fetret dönüşümünü aldı mı" diye sormuyor — ve sormadığı için
> üç yıl boyunca görülmedi. Bu, `denetle.py`'nin sorabileceği bir sorudur:
> *"1402-07-28 – 1413-07-05 arasında `d:` kalan Anadolu kaydı var mı?"*
> Beklenen cevap **0**.

📌 Ayvalık'ın parti yorumu neden eklendiğini de söylüyor: *"Ayvalık'ta en yakın
nokta Midilli'ydi: Ceneviz adasının peteği Anadolu anakarasını boyuyordu."*
Yani Ayvalık **§2 emilmesine karşı konmuş bir dolgu noktasıdır** — kaldırılmamalı.

---

## 4. Kaynak — üç halkanın dördü de TDV'de

| İddia | TDV maddesi | Metinde |
|---|---|---|
| Erdek · Edremit **Karesi toprağıdır**, ilhak **746/1345** | `karesiogullari` ✔ | Beylik "Balıkesir, Bergama, **Edremit**, **Erdek**, Biga"ya hâkimdi; ilhak **746/1345** |
| **İsa Çelebi** Marmara'nın güneyi + Karesi | `isa-celebi` ✔ | *"Kasım 1402 tarihi itibariyle Boğaz'ın Asya yakasında ve **Marmara denizi güneyinde** hâkimiyet sağladı"*; hâkimiyeti **Karesi bölgesini** kapsıyordu |
| İsa'nın **1403 sonunda** elenmesi | `isa-celebi` ✔ | Clavijo **Eylül 1403**'te artık hayatta olmadığını yazar ⇒ veri `1403-09-01` |
| **Emîr Süleyman** Mart 1404'te Anadolu'ya geçti | `suleyman-celebi-emir` ✔ | *"Ramazan 806'da (**Mart 1404**) Bursa'yı hâkimiyeti altına aldı"* ⇒ veri `1404-03-01` |
| Süleyman'ın ölümü | `suleyman-celebi-emir` ✔ · `mehmed-i` ✔ | *"22 Şevval 813'te (**17 Şubat 1411**)"* ⇒ veri `1411-02-17` **birebir** |
| Musa'nın elenmesi, Mehmed tek hükümdar | `mehmed-i` ✔ | *"5 Rebîülâhir 816'da (**5 Temmuz 1413**) rakibini yendi"* ⇒ veri `1413-07-05` **birebir** |

⚠️ **Kaynağın sessiz kaldığı yer:** hiçbir TDV maddesi *"Edremit 1404'te
Süleyman'a geçti"* demiyor. Taşra ayrıntısı kaynaklarda yok. Ama bu bir
**uydurma değil**, iki kaynaklı olgunun bileşimidir:
(a) `karesiogullari` bu üçünü Bergama-Balıkesir-Biga ile **aynı idarî bloğa**
koyuyor, (b) o blok verinin kanonik zincirini taşıyor.
📌 Yani ölçüt: *"kaynaksız sahip yazmıyoruz; kaynaklı bir bloğun içindeki
noktayı bloğun sahibiyle hizalıyoruz."*

### 🔴 Ölü sluglar
`edremit` · `erdek` · `ayvalik` · `emir-suleyman` (yönlendirme kütüğü)
→ hepsi `<title>` = **"Arama - TDV İslâm Ansiklopedisi"**.
Doğru slug: **`suleyman-celebi-emir`** (`suleyman-celebi--emir` değil).
Canlı ve iddiayı içeren: `karesiogullari` · `isa-celebi` · `mehmed-i` ·
`suleyman-celebi-emir` · `fetret-devri`.

---

## 5. Yapılmayan ve sebebi

**Timur penceresi eklenmedi.** `balikesir` araması Timur'un *"Bursa-Edremit
yoluyla İzmir'e yürüdüğünü"* söylüyor ve veride 15 kayıt
`timurlu 1402-07-28..1402-09-15` taşıyor. Ama komşu Bergama ve Balıkesir'de
böyle bir pencere **yok**, ve kaynak bir **yürüyüş güzergâhından** söz ediyor,
işgalden değil. Komşularla tutarlılık esas alındı; pencere açılmadı.

**Ayvalık kaldırılmadı** ama bir borç işaretlendi: `ayvalik` maddesi yok,
TDV'nin verdiği tek tarih *"1785'ten sonra Ayvalık da kaza yapılarak
Balıkesir'e bağlandı"*. Kaydın `kur:` alanı boş ve 1345 başlangıcı Karesi'den
ödünçtür. Nokta **dolgu amaçlıdır ve durmalıdır**; ama `kur:` sorusu ayrı bir
turda çözülmeli.
