# SINIR YERLEŞİMİ — 1923 sınırlarını 5 km hassasiyetle çizmek

**Paket:** `parti-emrelic-0039` / **H-0009** (merkez madde, ötekilerin altısı buna bağlı)
**Koordinatör:** ORHANGAZİ · **Karar tarihi:** 30 Ağustos 2026

---

## Emre'nin tarifi

> *"1923 itibarı ile tüm ülkelerin sınırlarını birebir 6. kalite çizelim.
> Sınır çizmek için gerekirse sınırın bir o tarafından bir bu tarafından
> yerleşim alıp **ikisinin arasından geçirelim sınırı.** 1923'de Fransa
> Almanya sınırı nereden geçiyor ise hangi yerleşim şehir köy ilçe bucak
> Fransa'ya kalıyor hangisi Almanya'ya kalıyor ise tüm bu yerleşimleri
> haritada işaretleyip sınırı bunların arasından geçirelim. Şimdi bir
> yerleşim yeri sınıfı ortaya çıkaralım, bunun adına da **SINIR
> YERLEŞİMİ** diyelim."*

Ve ikinci cümlesi tasarımın kalbi:

> *"Bir sınır değişince ama bu sınır şehirleri de değişiyor olacak."*

---

## 🟢 NİÇİN İŞE YARAR — motorla birebir uyumlu

`CLAUDE.md §2`: *"Petek sınırı komşuların **tam ortasından** geçer."*
Yani Voronoi hücre kenarı iki noktanın **dik ortayı**dır. Sınırın iki
yakasına eşlenik nokta koymak motoru zorlamaz — **tam çalıştığı gibi
kullanır.**

## 🔴 VE TEK KISIT — ÖLÇÜLDÜ, ve hedef ondan çıktı

Dik ortay **tam ortadan** geçer. Gerçek sınır iki şehrin tam ortasında
değilse sınır kayar:

```
EN KÖTÜ SAPMA  =  ÇİFT MESAFESİNİN YARISI
```

| çift mesafesi | en kötü sapma |
|---|---|
| bugünkü ortanca **149,5 km** | **74,8 km** |
| 100 km | 50 km |
| 50 km | 25 km |
| **10 km** | **5 km**  ← 🟢 **EMRE'NİN SEÇTİĞİ HEDEF** |
| 5 km | 2,5 km |

**HEDEF: sınır boyunca her ~10 km'de bir çift ⇒ sapma ≤5 km.**

## 🟢 Ve yöntem veride ZATEN kanıtlı

Yoğunluğun olduğu yerde sınır bugün bile doğru geçiyor:

```
 5,1 km   Çirmen (yunanistan) ↔ Mustafapaşa (bulgaristan)
 5,3 km   Rusçuk (bulgaristan) ↔ Yergöğü (romanya)
10,3 km   Meriç (OSMANLI) ↔ Sofulu (yunanistan)
11,5 km   Suruç (OSMANLI) ↔ Ayn el-Arab (fransa)
```

---

## ENVANTER — ölçüldü (`py arac/_sinir_envanteri.py --gun 1923-06-15 --hedef 10`)

```
1923'te sahipli nokta      2.516
komşu devlet çifti           174
🟢 oturmuş (en yakın ≤30 km)  26
🟡 orta     (30-100 km)       58
🔴 tahminle (>100 km)         90
```

🔴 **ENVANTERİN KENDİ KUSURU — okurken bil:** ölçüt *"250 km içinde farklı
sahipli iki nokta"* ve bu **komşuluk değil YAKINLIK** ölçer. Listede
`OSMANLI ↔ romanya` görünüyor ama 1923'te öyle bir sınır YOK — o "çift"
Bulgaristan'ın üstünden atlıyor. ⇒ **Tek ve uzak çifti olan satırları iş
listesine ALMA.** Gerçek komşuluk ölçütü Voronoi ortak kenarıdır ve o
ancak koşudan sonra bilinir.

---

## FAZLAR — hepsi bir gecede bitmez, sıra değere göre

### 🔵 FAZ 1 — TÜRKİYE'NİN 1923 SINIRLARI *(bu gece)*
Emre'nin `H-0001` ve `H-0002`si tam bu:
```
① Yunanistan sınırı — Meriç'e yaslanacak      (H-0001)
② Bulgaristan sınırı                           (H-0001)
③ Suriye sınırı (Fransa mandası)               (H-0002)
④ Irak sınırı (İngiliz mandası)                (H-0002)
⑤ İran sınırı (Kaçar)                          (H-0002)
⑥ Ermenistan · Gürcistan sınırı (SSCB)         (H-0002)
```
### ⚪ FAZ 2 — Avrupa (Fransa-Almanya · Balkanlar · Orta Avrupa)
### ⚪ FAZ 3 — dünyanın kalanı

---

## NASIL YAZILIR

```javascript
{ad:"<gerçek yerleşim adı>", tur:"koy", lat:.., lon:.., g:0, k:4, m:null,
 sinir:true,                      // ← YENİ ALAN: sınır yerleşimi
 s:[{f:"1923-07-24", t:"1923-10-29", d:"yunanistan"}],
 kaynak:"...",
 neden:"sınır çifti: <öteki nokta> ile <N> km, sınır aralarından geçiyor"}
```

🔴 **DÖRT KURAL:**
```
① GERÇEK YERLEŞİM OLACAK. Uydurma köy YOK. Bulamıyorsan `bulunamadı`
   yaz ve o kesimi BOŞ bırak — yanlış nokta, eksik noktadan kötüdür.
② ÇİFT OLACAK. Tek taraflı nokta sınırı çizmez, sadece o devleti büyütür.
   Her kayıt `neden:` alanında EŞİNİ ve MESAFESİNİ yazar.
③ ZAMANLI OLACAK. Emre: *"bir sınır değişince bu sınır şehirleri de
   değişiyor olacak."* Yani `s:`/`d:` dizisi TAM — 1923'te donmuş bir
   çıpa değil, tarih boyunca el değiştiren gerçek bir yerleşim.
④ 3 km MÜKERRER TARAMASI. `py arac/_yer_ara.py "<ad>"` — CLAUDE.md §11.
```

## 🔒 KOŞU KİLİDİ

`arac/` altına **DOKUNULMAZ** (koşu 00:32'de başladı).
⇒ Yeni dosyanı `girdi.py`ye **BEN** bağlayacağım, koşu bitince.
⇒ Yazdığın nokta **bu koşuda çizilmez**, bir sonrakine kalır. Kusur değil
  **gecikme** — `neden:` alanına yaz ki bir sonraki tur "niçin
  görünmüyor" diye aramasın.

## KAYNAK

`CLAUDE.md §4`. TDV birincil; 1923 sınırları için Lozan Antlaşması metni
ve akademik kaynak **meşru** (TDV bu tanecikte çoğu zaman susar).
**`kaynak:` ZORUNLU; bulunamadıysa `bulunamadı` diye YAZ.**
