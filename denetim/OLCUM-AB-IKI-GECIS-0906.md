# A → B İKİ GEÇİŞ — Emre'nin modeli ÖLÇÜLDÜ ve **DOĞRU ÇIKTI**

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · KOD OKUNDU, YAZILMADI** (koşu 7b sürüyor).

---

## ⓪ EMRE'NİN ÖNERİSİ

> *"Önce A koşusu koşulduktan sonra o bir çıktı verir. Ondan sonra B
> koşusu o verinin üstüne koşar. O çıktıdaki boşluklar kapatılır,
> enklavlar birleştirilir, koridorlar doldurulur ve iki devlet
> arasındaki sahipsiz boş alanlar paylaştırılır. Sonra B çıktısı ortaya
> çıkar. Bu şekilde olması gerekmiyor mu?"*

## 🔴 ÖNCE BİR ADLANDIRMA DÜZELTMESİ — belgelerim TERS
Benim daha önceki ölçümüm (`OLCUM-AB-GORUNUM-0906.md`) **A = dolu,
B = ham** diye yazıyor. Emre'nin bu tarifi **tersi**: A = ham (birinci
koşunun çıktısı), B = düzeltilmiş. **Emre'nin adlandırması esastır.**
⇒ Eski belgedeki A/B harfleri bu belgeye göre okunmalı, yoksa bir
sonraki oturum iki görünümü ters kurar.

---

## ① 🟢 CEVAP: EVET — VE SEBEBİ SÖYLEDİĞİNDEN GÜÇLÜ

Bugünkü kod (`uret_petek.py:4538-4542`):
```python
g = unary_union([petek_epok(a)[j] for j in aktif])   # TEK devletin petekleri
g = delikleri_doldur(kapat(g), sahip_ix=aktif)       # B1
g = gosterim_duzelt(g, aktif)                        # B2 enklav + B3 koridor
g = poligonal(g.intersection(KARA))
```
Bu döngü **devlet devlet, dönem dönem** çalışıyor. `g` her seferinde
**tek bir devletin** gövdesi.

🔴 ⇒ **DÜZELTMELER ASLA İKİ DEVLETİ AYNI ANDA GÖRMÜYOR.**

Ve bu, Emre'nin listesindeki **dördüncü kalemin niçin var olmadığını**
açıklıyor: *"iki devlet arasındaki sahipsiz boş alanlar paylaştırılır"*
— bu işlem **iki gövdeyi birden** görmeyi gerektiriyor, bugünkü mimari
ise o noktada elinde hiç iki gövde tutmuyor.

📌 Yani eksik olan şey bir fonksiyon değil, **onu yazacak yer.**
İkinci geçiş tam olarak o yeri açıyor.

---

## ② 🟢 FİZİBİLİTE: A ÇIKTISI GEREKLİ BİLGİYİ ZATEN TAŞIYOR

```
DEVLET_HARITA   [{ id, ad, renk, dnm:[{ f, t, g:[parça indisleri] }] }]   541 devlet
DEVLET_PARCALAR [[ [lon,lat], ... ]]                                    53.100 parça
```
⇒ Her devletin **her dönemde hangi parçalara sahip olduğu** çıktıda
yazılı. İkinci geçişin *"bu tarihte kim nerede"* sorusuna ihtiyacı olan
şey bu — ve **mevcut.**

⚠️ Taşımadığı tek şey `sahip_ix` (hangi YERLEŞİMLER o devletin). B1'in
"ikinci yasağı" (başka devletin yerleşiminin üstüne doldurma) onu
istiyor — ama yerleşimler `yerlesimler*.js`te zaten ayrıca duruyor.

---

## ③ 🟢 İKİNCİ KAZANÇ: B'Yİ AYARLAMAK 20 SAAT OLMAKTAN ÇIKAR

Bugün B1/B2/B3 gövde kurma döngüsünün **içine kaynaklı**. Bir koridor
eşiğini değiştirmek = **16-20 saatlik tam koşu.**
İki geçişte: A bir kez koşar (16-20 saat), B onun üstünde **dakikalar**
mertebesinde yeniden koşar. ⇒ Eşik denemesi, parametre ayarı, "şunu bir
de şöyle görelim" hepsi ucuzlar.

📌 Ve bu, atlasın kendi tarihindeki bir acıyı doğrudan kapatıyor:
`CLAUDE.md` **beş üretimin boşa gittiğini** kaydediyor. Boşa giden şey
her seferinde A'nın 16 saati oldu — oysa değişen genellikle B'ydi.

---

## ④ ⚠️ BEDELLER — ölçülmüş ve ölçülmemiş

```
🟢 GEOMETRI MALIYETI AYNI    B1/B2/B3 işlemleri iki mimaride de aynı
                             sayıda; yalnız YERİ değişiyor
🟡 EK I/O                    A çıktısı okunur (~97 MB) + B yazılır (~97 MB)
🔴 ÖLÇÜLMEDİ                 ikinci geçişin KENDİ süresi. Bugün düzeltmeler
                             gövde kurma içinde eriyor; ayrı ölçülemiyor
                             (aşama tablosu "Yabancı devlet gövdeleri
                             16s14dk %82,3" diyor, içindeki payı vermiyor)
🔴 SIRA KORUNMALI            bugün düzeltmelerden SONRA `intersection(KARA)`
                             ve PUANLAMA KAPISI geliyor. İkinci geçiş
                             onları ya devralmalı ya yeniden uygulamalı —
                             atlanırsa kıyı ve "burası kimsenin mi" kararı
                             bozulur
```

## ⑤ HÜKÜM
**Emre'nin modeli doğru ve uygulanmalı.** Üç gerekçe, üçü de ölçülmüş:
```
① dördüncü fonksiyon (iki devlet arası paylaştırma) bugünkü mimaride
   YAZILAMAZ — düzeltmeler tek gövde görüyor
② A çıktısı ikinci geçişin ihtiyacı olan sahiplik bilgisini ZATEN taşıyor
③ B'yi ayarlamak 20 saatten dakikalara iner
```
⚠️ Ama **koşu 7b bitmeden başlanamaz**: `uret_petek.py` donuk.
Ve ⑤'in ilk işi bir ölçüm olmalı — *ikinci geçişin kendi süresi* —
çünkü Ⓑ'nin bütün cazibesi "dakikalar" varsayımına dayanıyor ve o
varsayım **henüz ölçülmedi.**
