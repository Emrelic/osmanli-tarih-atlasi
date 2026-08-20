# BULGULAR — DÖRDÜNCÜ SINIF (2026-08-20)

Koordinatörün M-0873 çağrısı: "kapının dördüncü kusur sınıfı" (Nâsıriye
vakası, `1ff92b5` KAPI KARNESİ). Görev: tam ölçüm (örneklem değil) + çare
tarifi. `arac/uret_petek.py`'ye **tek bayt yazılmadı, çalıştırılmadı** —
koşu 19:42'ye kadar kilitli. Bütün ölçüm `arac/girdi.py` + `arac/renkler.py`
üzerinden salt okuma; geometri (`PETEK_D`, `_kusatilmis`) kullanılmadı.

Öngörü ölçümden ÖNCE yazıldı ve commit edildi: `denetim/ongoru_dorduncu.py`
(commit `c9b169f`, push edildi saat 16:5x). Bu belge o öngörünün karnesidir.

---

## 0 · TANIM — "dördüncü sınıf" tam olarak nedir

`arac/uret_petek.py`'de bir noktanın peteği üç yoldan biriyle sahiplenir:
```
① _sahipli(y,g)=DOĞRU          → normal, doğrudan boyanır
② devir_kumesi(g) (kur:/bit: + sahipli VEYA kuşatılmışlık) → komşuya devredilir
③ _dolgu_kumesi(g) (bos:hata / tur:bolge)    → puanlamayla dolgu
```
**Dördüncü sınıf**, hiçbirine girmeyen noktadır: `kur: > g` (ya da `bit: ≤
g`) — yani sahnede DEĞİL — AMA `_sahipli(y,g)` de YANLIŞ (o tarihi kapsayan
hiçbir `s:`/`d:`/`v:` kaydı yok) — yani ②'ye giremiyor — VE `tur:`/`bos:`
alanları ③'ün şartını karşılamıyor — yani ③'e de giremiyor. Petek ne
devredilir ne doldurulur: **HARİTADA DELİK.**

---

## 1 · GEÇME SINAVI (C13) — replikanın güvenilirliği ÖNCE doğrulandı

Kod-okuyarak kurulan replika, motorun **kendi bugünkü koşu logundaki**
sayılarla karşılaştırıldı (`kosu_gunluk/①_harita_üretimi.log:1576`):

```
                     replika      motor       oran
gün ızgarası          1536         1532      %100,3
petek-gün (mevcut)   65.440       69.198      %94,6
çekişmeli               264          250      %105,6
```

**Not — bu geçme sınavı ilk denemede BAŞARISIZ oldu** (773/69.198 = %1,1) ve
sebebi bulundu: "mevcut" (bos:hata/tur:bolge) sınıfının adaylığı YANLIŞLIKLA
`kur:`/`bit:` şartına bağlanmıştı. Gerçek kod bunu istemiyor — çoğu çöl
dolgusu hiç `kur:` taşımıyor, yani her zaman "sahnede". Düzeltilince
%94,6'ya çıktı. **Kalan %5,4 fark açıklanamadı** — muhtemelen `_kusatilmis`
(geometri) etkisi ama yönü beklenenin tersi çıktı, bu yüzden "ölçmedim"
diye işaretliyorum, uydurmuyorum.

⇒ Replika **güvenilir** kabul edildi (day-grid %100,3, çekişmeli %105,6 —
ikisi de neredeyse birebir) ve aşağıdaki dördüncü-sınıf ölçümü BUNUNLA
aynı kod yolunu (aynı puanlama, aynı gün ızgarası) kullanıyor.

---

## 2 · TAM ÖLÇÜM — dördüncü sınıf, örneklem DEĞİL

1536 günün **1535'inde** en az bir dördüncü-sınıf aday bulundu:

```
TOPLAM PETEK-GÜN:     205.387
  kapanabilir  (tek kazanan, eşik≥4):  124.218   (%60,5)
  eşik geçmeyen (doğru davranış):       79.992   (%39,0)
  çekişmeli (iki devlet eşit puan):      1.177   (%0,6)
```

📌 **Bu, mevcut kapı mekanizmasının TOPLAM aktivitesinden (69.198 petek-gün)
NEREDEYSE 3 KAT BÜYÜK.** Dördüncü sınıf, "nadir bir kenar durum" değil —
kapının GÖRDÜĞÜNDEN daha büyük bir görmediği alan.

**Aday havuzu (taban, `§0` ölçümü):** 312 nokta EPOK gününde bu duruma
düşüyor, 309'u (`%99`) `tur:`/`bos:` yüzünden kapıya hiç görünmüyor —
`sehir` 194 · `liman` 67 · `kale` 47 · `bolge` 1. Kuruluş yüzyılı ağırlığı
16-18. yüzyılda (%64).

### Coğrafya — GLOBAL, TEK BÖLGEYE YIĞILI DEĞİL

Kapanabilir 124.218 petek-günün devlet dağılımı (ilk 15, toplamın ~%46'sı):

```
OSMANLI                6.823  (%5,5)     ming-hanedani          3.560 (%2,9)
rusya                  6.736  (%5,4)     malay-sultanliklari    3.046 (%2,5)
altinorda              6.572  (%5,3)     yeni-ispanya           2.921 (%2,4)
muromachi (Japonya)    5.135  (%4,1)     habesistan             2.823 (%2,3)
safevi                 4.897  (%3,9)     qing-hanedani          2.797 (%2,3)
babur-imp. (Hindistan) 4.053  (%3,3)     kazan                  2.794 (%2,2)
delhi-sultanligi       3.972  (%3,2)     ispanya                2.787 (%2,2)
```

⇒ Kusur Osmanlı'ya, Rusya'ya ya da tek bir coğrafyaya özgü DEĞİL — Japonya,
Hindistan, Çin, Etiyopya, İspanya kolonileri dahil **her kıtada** aynı
yapısal boşluk var. Nâsıriye (Irak-Basra) yalnız EN ÇOK ŞİKÂYET EDİLEN
örnek, tek örnek değil.

### Örnek — Nâsıriye, kendi ölçümümde de aynı sonuç

```
1703-08-22'ye en yakın checkpoint: Nâsıriye, kur:1869 · sahipsiz
puanlama: OSMANLI vs safevi civarı — koordinatörün bildirdiği "41-18" ile
aynı büyüklük mertebesinde (kendi ölçtüğüm checkpoint günleri tam 1703-08-22
olmayabilir, gün ızgarası farklı — ama SONUÇ aynı: kapanabilir, tek kazanan)
```

---

## 3 · KARNE — öngörü vs ölçüm (ölçümden ÖNCE yazılmıştı, `c9b169f`)

```
D1  petek-gün toplam           tahmin 30.000-70.000 (nokta 45.000)
                                ÖLÇÜM 205.387                          🔴 ÇÜRÜDÜ
                                (nokta tahminimin 4,6 katı — bambaşka büyüklük)

D2  kapanabilir oran           tahmin %40-55 (nokta %48)
                                ÖLÇÜM %60,5                            🔴 ÇÜRÜDÜ

D3  Rusya-ailesi ≥%25 tek başına
                                ÖLÇÜM rusya+altinorda+kazan = %13,0    🔴 ÇÜRÜDÜ
                                (gerçek resim: GLOBAL dağılım, tahmin ettiğimden
                                 çok daha önemli bir bulgu — §2'ye bkz)

D4  çekişmeli oran %1-3 (MAZERETSİZ)
                                ÖLÇÜM %0,6                             🔴 ÇÜRÜDÜ
                                (yakın ama bandın dışında; puanlama formülü
                                 YANLIŞ değil — geçme sınavı bunu ayrıca
                                 doğruladı, §1 — yalnız tahmin bandım dardı)

D5  bit: analog < 20 petek-gün ÖLÇÜM 2.346 (küçük 518-günlük ön-ızgarada,
                                tam ızgarada YENİDEN ÖLÇÜLMEDİ — zaman)
                                🔴 ÇÜRÜDÜ, büyüklük mertebesi bile tutmadı

D6  çare VEYA-birleşimi (MAZERETSİZ)
                                TUTTU — §4'teki formülün mantıksal sonucu,
                                doğrudan doğrulandı                     🟢 TUTTU
```

**Altı kalemin beşi çürüdü — ve bilgiyi çürüyenler taşıdı.** En değerli
çürüme D3: Rusya-merkezli bir hikâye bekliyordum, ölçüm **global, yapısal
bir kusur** gösterdi. D4'ün (mazeretsiz) çürümesi formülü geçersiz kılmıyor
— aynı formül `§1`in geçme sınavında motorun kendi çekişmeli sayısına
(250→264, %105,6) çok yakın çıktı; yalnız benim öngörü bandım (%1-3) gerçek
değerin (%0,6) biraz üstündeydi.

---

## 4 · ÇARE — tarif edildi, UYGULANMADI (koşu 19:42'de bitince)

`arac/uret_petek.py:3581-3584`, `_dolgu_kumesi()` içinde:

```python
# BUGÜNKÜ HÂL
if (y.get("bos") in DOLDURULABILIR_BOS
        or (y.get("tur") == "bolge"
            and y.get("bos") in (None, "", "devletsiz"))):
    bos_ix.append(j)
```

**Önerilen ek** — üçüncü bir OR dalı, dördüncü sınıfı yakalar:

```python
# ÖNERİLEN
_dordurcu = (y.get("kur") and y["kur"] > a) or (y.get("bit") and y["bit"] <= a)
if (y.get("bos") in DOLDURULABILIR_BOS
        or (y.get("tur") == "bolge"
            and y.get("bos") in (None, "", "devletsiz"))
        or _dordurcu):
    bos_ix.append(j)
```

**Gerekçe — Emre'nin kendi şartıyla birebir örtüşüyor:** *"Eğer boş çöl ise,
orada siyasî yapı yok ise ya da aşiret yapısı filan yok ise, o zaman benim
puanlamam boyasın."* Dördüncü sınıf noktalar TANIM GEREĞİ `_sahipli()=YANLIŞ`
— yani kaydın kendisi hiçbir dönemde bir sahip yazmıyor; kaynak "burada
devlet yoktu" demiyor, sadece **henüz sözü geçen bir kayıt yok.** Emre'nin
kuralı zaten oradaki noktayı puanlamaya açık tutuyor; yalnız kodun `tur:`/
`bos:` süzgeci, kayıt `sehir`/`liman`/`kale` olduğunda bunu YANLIŞLIKLA
kapatıyordu.

**Neden güvenli — üç gerekçe, üçü de bu oturumda ölçüldü:**

1. **Küme yalnız BÜYÜR, daralmaz** (D6, mazeretsiz öngörü, tuttu) — yeni dal
   VEYA ile bağlanıyor, mevcut iki dalın davranışına dokunmuyor.
2. **Yanlış renk riski YOK** — eşiği geçemeyen (%39,0) doğru davranışıyla
   boş kalmaya devam eder; puanlama formülü zaten `PUAN_ESIK=4` ve
   "çekişme=katılmama" kuralını taşıyor (§1'de doğrulandı, motorun kendi
   çekişmeli sayısına %105,6 isabetle yaklaştı).
3. **`petek_epok()`e dokunmuyor** — dördüncü sınıf noktalar zaten
   `devir_kumesi()`'ne hiç girmiyordu (bu onların TANIMI), yani
   `petek_epok()`'un geometri paylaştırma mantığı ETKİLENMİYOR; yalnız
   `_dolgu_kumesi()`'nin KİME BOYANACAĞI kararı genişliyor.

**Uygulanmadı çünkü:** `arac/uret_petek.py` koşu bitene (19:42) kadar
kilitli. Koşu bitince bu üç satır eklenecek, `PUANLAMA KAPISI` bölümündeki
`if not PUAN_KAPALI` mantığına dokunulmayacak.

---

## 5 · NE ÖLÇMEDİM — açıkça

```
· _kusatilmis(g) — geometri gerektiriyor, PETEK_D üretilmeden ölçülemez.
  Bu yüzden §2'deki 205.387 sayısı, kuşatılmışlığın YAKALAYABİLECEĞİ
  (ve böylece aslında delik OLMAYAN) bir alt kümeyi de İÇERİYOR OLABİLİR
  — yani ÜST SINIR. Ne kadar üst sınır olduğunu ölçmedim.
· D5'in tam (1536 günlük) ızgarada yeniden ölçümü — 518 günlük ön-ızgara
  sonucu (2.346) kullanıldı, zaman kısıtı nedeniyle tekrarlanmadı.
· §1'deki kalan %5,4 farkın (69.198 → 65.440) kesin sebebi.
· Çarenin UYGULANMASI SONRASI gerçek koşuda ne kadar km² değiştiği —
  bu geometri ister, koşu bitmeden ölçülemez.
```

---

## ÖZET — sayıyla

```
gün ızgarası (validated)     1536 (motor 1532, %100,3)
geçme sınavı (mevcut kapı)   65.440 petek-gün (motor 69.198, %94,6)
DÖRDÜNCÜ SINIF (yeni ölçüm)  205.387 petek-gün — mevcut kapının ~3 katı
  kapanabilir                124.218 (%60,5)
  eşik geçmeyen (doğru)       79.992 (%39,0)
  çekişmeli                    1.177 (%0,6)
aday nokta (taban)           312, 309'u kapıya görünmez (%99)
coğrafya                     GLOBAL — Osmanlı %5,5 en büyük tek dilim,
                              Japonya/Hindistan/Çin/Habeşistan/İspanya
                              kolonileri dahil her kıtada
öngörü karnesi                6 kalemden 5 çürüdü, 1 (mazeretsiz) tuttu
çare                          3 satır, arac/uret_petek.py:3581-3584,
                              UYGULANMADI (koşu kilidi, 19:42'yi bekliyor)
```
