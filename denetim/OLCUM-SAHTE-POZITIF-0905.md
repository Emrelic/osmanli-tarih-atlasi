# ÖLÇÜM — 🟠 sahte pozitif: **`nube` tek değil, ve biri ondan keskin**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2915` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM — *veri yazılmadı, hiçbir tarih değiştirilmedi.*

---

## 0. 🔴 SINIRLAR — ÖNCE

```
① 25'lik bir örneklem bir ORAN VERMEZ. Aşağıdaki sayılar VARLIK
   gösterir: "nube tek mi, desen mi?" sorusunun cevabıdır.
② Ve boş çıksaydı "yok" DEMEYECEKTİM: bu gece ölçüldü, %5'lik bir
   oranda 20'lik bir çekimin boş gelme olasılığı ≈ %36.
③ Tasnif GÖZLE yapıldı — cümleyi okuyup "bu yıl künyenin olayını mı
   tarihliyor" diye sordum. Otomatik DEĞİL, ve bu bilerek: taramanın
   ölçtüğü şeyin ta kendisi "otomatik eşleşmenin yanılması".
```

### 🔴 VE BİR TUZAĞI ÖNCEDEN KAPATTIM: ÜÇ HANELİ YIL
`nube` f:543. Düz bir `"543" in metin` araması **`1543`ün içinde**
eşleşir — ve bu taramanın evreninde `venedik f:697` · `sirvansah f:861`
gibi üç haneli yıllar var. Rakam sınırlı kalıp kullanıldı:
```python
re.compile(r'(?<!\d)' + yil + r'(?!\d)')
```
📌 Koordinatörün bu gece yaptığı `"543" < "1281"` dizgi kıyası hatasının
**kardeşi**; aynı künye, aynı eksen, farklı yön.

### 🟢 VE ALET GÜRÜLTÜLÜ ÇÖKTÜ — sessizce atlamadı
`venedik f:697-01-01` işlenirken `v[:4]` = `"697-"` ve `int()` patladı.
⇒ Sessiz atlasaydı o künye **taranmamış olduğu hâlde "temiz" sayılırdı.**
Düzeltildi (`v.split('-')[0]`).

---

## 1. EVREN ve ÖRNEKLEM

```
künye toplam                                591
`kaynak:` DÜZ SLUG olan                     225
… VE en az bir PENCERE DIŞI tarih ucu olan  224   ← evren
örneklem: random.Random(20260905) · CANLI slug'a inene kadar · 25 künye
```
⬜ **Pencere işaretleri (`1281-01-01` · `1923-10-29`) taranmadı** — bu
gece kurulan kova: onlar bir iddia değil. 50 değerin **5'i** buraya girdi.

---

## 2. SONUÇ — 45 taranan değer

| kova | sayı |
|---|---:|
| 🟢 cümle **künyenin olayını** tarihliyor | **26** |
| 🟠 cümle **başka bir şeyi** tarihliyor | **4** |
| 🟡 kısmen (ay düzeyi / ilgili ama tam değil) | **3** |
| ⚪ rakam gövdede **geçmiyor** | **12** |
| ⬜ pencere işareti (taranmadı) | *(5, dışarıda)* |

> ### ⇒ CEVAP: **`nube` TEK DEĞİL.** 25 künyelik bir örneklemde
> **4 sahte pozitif** daha çıktı. Desen GERÇEK.

---

## 3. 🟠 DÖRT SAHTE POZİTİF — ve biri yeni bir ALT-SINIF

### 🔴🔴 `saruhan` f:1313 — **gövde o yılı ÇÜRÜTMEK İÇİN anıyor**

Gövdede `1313` **tek bir cümlede** geçiyor:
> *"Manisa'nın fetih tarihinin 713 (1313) olarak gösterilmesi de
> **doğrudan çağdaş bir kaynağa dayanmamaktadır**."*

Ve TDV'nin kendi tarihlemesi **başka**:
> *"Batı Anadolu uç kesiminde **1290'lı yıllardan itibaren** faaliyet
> gösteren Saruhan Bey tarafından Manisa merkezli olarak kurulmuş…"*

```
otomatik arama          "1313 gövdede VAR"  ⇒ DESTEKLENDI
gövdenin söylediği      "bu tarih dayanaksız"  ⇒ ÇÜRÜTÜYOR
gövdenin kendi tarihi   1290'lar — künyeden ~20 yıl ÖNCE
```
🔴 **Bu, `nube`den bir kademe kötü.** `nube`de gövde yılı **başka bir
olaya** bağlıyordu; burada gövde yılı **reddetmek için** anıyor.
⇒ ***Bir sayı eşleşmesi yalnız yanlış dayanak üretmez — kaynağın
AKSİNİ söylediği yerde onu DESTEK gibi gösterir.***

### 🟠 `rusya` t:1917-03-15
`1917` gövdede **17 cümlede** geçiyor — ve hiçbiri II. Nikolay'ın
tahttan çekilmesi değil. Ölçüldü: **"Mart 1917" 0 kez · "Şubat 1917"
0 kez.** Gövdenin verdiği: *"Lenin önderliğindeki Bolşevikler **1917
Ekim İhtilâli** akabinde iktidarı ele geçirdiler."*
⇒ Yıl doğru, **olay başka** (Ekim ≠ Mart). *"17 cümle bulundu"* diyen
bir sayaç bunu güçlü bir dayanak sanırdı.

### 🟠 `cagatay` t:1370
Tek cümle: *"Daha sonra Hüseyin'i de bertaraf edip **1370'lerde**
Mâverâünnehir'e fiilen hâkim oldu."* — özne **Timur**, ve ifade bir
**on yıl** (*1370'ler*), bir yıl değil.

### 🟠 `gurcistan-demokratik-cumhuriyeti` t:1921-03-16
Gövde: *"…Sovyet Rusyası, **Şubat 1921**'de Gürcistan'ı da işgal
ederek…"* — künye **16 Mart 1921** diyor. Yıl eşleşiyor, **ay
çelişiyor.**
⚠️ İkisi de tarihen savunulabilir (Kızıl Ordu Şubat'ta girdi, hükümet
Mart'ta ayrıldı). **Hangisinin doğru olduğunu ÖLÇMEDİM** — yalnız
"yıl eşleşmesi dayanak değildir"i gösteriyor.

---

## 4. 🟡 ÜÇ KISMÎ — ve üçü de HASSASİYET ekseninde
```
aiz          f:1918-10-30 · gövde "Ekim 1918-Şubat 1919 … Osmanlı'nın
                            Ebhâ'dan çekilmesi" ⇒ AY destekli, GÜN yok
suud-birinci t:1818-09-09 · gövde "Dir'iye'ye girdi … (Eylül 1818)"
                            ⇒ AY destekli, GÜN yok
katar        f:1868-01-01 · gövde "1868 SONBAHARINDA Katar'a gemi
                            göndererek…" ⇒ mevsim, ve olay İngiliz
                            müdahalesi; künye Âl Sânî'nin öne çıkışı
```
📌 Ve bir yan bulgu: `suud-birinci` f:1744 için gövde **iki yıl**
veriyor — *"1157 (1744) **veya** 1158 (1745) yılında yapılan … Dir'iye
ittifakı"*. Künye 1744'ü seçmiş; kaynak seçmemiş.

---

## 5. 🟢 YİRMİ ALTI DESTEKLENEN — ve dokuzu GÜN veriyor

Kova tek yönlü değil; taramanın çoğu **gerçek dayanak** buldu:
```
GÜN düzeyinde (9):
  hive t:1920-04-26        "26 Nisan 1920'de Hârizm Halk Cumhuriyeti ilân edildi"
  bulgaristan t:1908-10-05 "Bulgaristan 5 Ekim 1908 tarihinde bağımsızlığını ilân"
  arnavutluk f:1912-11-28  "28 Kasım 1912'de İsmâil Kemali … istiklâlini ilân etti"
  sardinya t:1861-03-17    "Vittorio Emanuele … 17 Mart 1861'de … ilân edildi"
  abdulkadir f:1832-11-22  "22 Kasım 1832'de 'emîrü'l-mü'minîn' unvanını aldı"
  abdulkadir t:1847-12-23  "23 Aralık 1847'de Fransızlar'a teslim oldu"
  kibris t:1489-02-26      "Kraliçe Caterina'nın 26 Şubat 1489'da tahttan feragati"
  gurcistan f:1918-05-26   "26 Mayıs 1918 tarihinde bağımsızlığını ilân e[tti]"
  polonya f:1320-01-20     "…taç giymesiyle (20 Ocak 1320) fetret devri sona erdi"
```
YIL düzeyinde: `hive f` · `bulgaristan f` (Berlin → *"muhtar bir
Bulgaristan Prensliği kuruldu"*) · `akkoyunlu f/t` · `kert f/t` ·
`sind t` · `venedik t` · `kibris f` · `polonya t` · `saruhan t` ·
`sirvansah t` · `ace t` · `memluk f/t` · `bahavelpur f`

🔴 **VE `bulgaristan` f:1878 BENİM İLK ŞÜPHEMİ ÇÜRÜTTÜ.** İlk üç cümle
1877-78 savaşı ve **nüfus istatistiğiydi** (*"Ritter tarafından 1878'de
Doğu Rumeli nüfusu 1.304.352"*) — 🟠 sanmıştım. 11 cümlenin tamamı
arandı ve gerçek dayanak çıktı. ⇒ ***İlk üç cümleye bakıp hüküm vermek,
bu taramanın kendi tuzağıdır.***

---

## 6. DAMGALAR

```
🟢 ÖLÇTÜM      evren 224 · örneklem 25 · 45 taranan değer
               🟢26 · 🟠4 · 🟡3 · ⚪12 · ⬜5(dışarıda)
🔴 BULDUM      4 sahte pozitif — `nube` TEK DEĞİL, desen gerçek
🔴 YENİ ALT-SINIF  `saruhan`: gövde yılı ÇÜRÜTMEK İÇİN anıyor
               ("doğrudan çağdaş bir kaynağa dayanmamaktadır")
🟢 ÖNLEDİM     üç haneli yıl tuzağı — rakam sınırlı kalıp kullanıldı
🟢 ÇÜRÜTTÜM    kendi ilk şüphemi (`bulgaristan` f:1878 🟠 sanmıştım,
               11 cümlenin tamamı arandı, 🟢 çıktı)
🟢 GÜRÜLTÜLÜ   alet `697-01-01`de ÇÖKTÜ, sessizce atlamadı
⚪ ÖLÇMEDİM    `gurcistan t` çelişkisinde hangi tarafın doğru olduğunu
⚪ ÖLÇMEDİM    ORANI — 25'lik örneklem oran vermez, VARLIK verir
⚪ ÖLÇMEDİM    `kaynak:` slug'ı ÖLÜ olan künyeleri (evrenin dışında)
🔵 OKUMADIM    hiçbir gövdenin TAMAMINI — rakam çevresi ve hedefli arama
🔴 YAZMADIM    hiçbir tarih, hiçbir alan. HÜKÜM YOK.
```

---

## 7. TESLİM — sayıyla

```
SORU     "nube tek mi, desen mi?"
CEVAP    DESEN — 25 künyelik örneklemde 4 sahte pozitif daha
KOVA     🟢26 · 🟠4 · 🟡3 · ⚪12   (+ ⬜5 pencere işareti, taranmadı)
EN AGIR  `saruhan` f:1313 — gövde o yılı ÇÜRÜTMEK için anıyor, ve
         gövdenin kendi tarihi 1290'lar (künyeden ~20 yıl önce)
SINIR    oran DEĞİL varlık; ve tasnif GÖZLE yapıldı, otomatik değil
```
