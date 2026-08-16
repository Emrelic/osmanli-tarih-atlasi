<!-- DURUM: BEKLIYOR ¦ 2026-08-16 ¦ KOSUDAN ÖNCE yazıldı, damgalı -->
# PENCERE DIŞI TOHUM — KOŞU ÖNGÖRÜSÜ · `Ⓐ düzeltmesi`

**Yazan** Opus hazır kıta 4 (`MOTOR-EPOK.md`) · **Karar** M-0509 Ⓐ
**Damga** koşu başlamadan; `git log`da bu dosya koşunun commit'inden ÖNCEDİR.

> 🔴 **VE BU ÖNGÖRÜDE BANTLARI DARALTTIM.** İŞ 2'de sekiz kalemin sekizi
> tuttu ve **hiçbiri bir şey öğretmedi**; sebebini o gün kaydettim: *"tek≤5 ·
> komşusuz≤2"* diye pay bırakmıştım, ikisi de sıfır çıktı. Bu sefer üç kalem
> **tek sayı**, band yok. Çürüyebilsinler diye.

---

## ⓪ NE DEĞİŞTİ — tek cümle
KV sahiplik ızgarasının tohum yerleştirmesi, pencerenin **dışındaki** noktayı
kenar sütununa **kıstırıyordu**. Artık **hiç almıyor**; o noktalar için Voronoi
kalır (`_kverisilmez` ile aynı yol).

**Bu bir DARALTMA, yeni davranış değil.** Pencere dışındaki bir noktanın maliyet
ızgarasına tohum ekmesi hiçbir hâlde doğru değildi.

---

## ① TABAN — ölçüldü, tahmin edilmedi
```
girdi.yukle()          2527 nokta = 2383 pencere İÇİ + 144 DIŞI
son koşu logu          2391 tohum yerleşti · 136 yer bulunamayan
                       2391 + 136 = 2527 ✓
⇒ 2391 − 2383 = 8      dışarıdaki 144'ün 8'i yerleşmiş, 136'sı bulamamış
⇒ pencere İÇİNDEKİ 2383 noktanın 2383'ü yerleşiyor (hepsi)
```

## ② ÖNGÖRÜ — koşu BAĞLAMADAN ÖNCE koşarsa (2527 nokta)
```
🔒 PENCERE DIŞI, ızgaraya ALINMADI      144      🔴 MAZERETİ YOK
   tohum yerleşti                      2383      🔴 MAZERETİ YOK
   ızgarada yer bulunamayan               0      🔴 MAZERETİ YOK
```

## ③ ÖNGÖRÜ — koşu BAĞLAMADAN SONRA koşarsa (beş dosya, +26 iç / +36 dış)
```
🔒 PENCERE DIŞI                          180      🟡 taban (başka oturum yazabilir)
   tohum yerleşti                       2409      🟡 aynı sebep
   ızgarada yer bulunamayan                0      🔴 MAZERETİ YOK
```
🔴 **Ve KORUNUM her iki hâlde de mazeretsiz:**
`pencere_dışı + tohum_yerleşti + yer_bulunamayan = toplam nokta`
Tutmazsa bir tohum **sessizce kaybolmuş** demektir ve bu, düzeltmenin
önlemeye çalıştığı şeyin ta kendisi olur.

⚠️ **`yer bulunamayan = 0` niçin mazeretsiz:** bugün 2383 iç noktanın 2383'ü
yerleşiyor, yani iç pencerede erişilmez nokta **yok**. Sıfırdan büyük çıkarsa
bu **yeni bir bulgudur** — bağlanan dosyalardan gelen bir iç nokta küçük bir
adada olabilir. O zaman **isim isim** yazılır, "olur böyle" denmez.

---

## ④ KOORDİNATÖRÜN ÜÇ ŞARTI (M-0509 ④)
```
⑤ Güney Afrika lat −11 kuşağında Kap/Oranj/Transvaal/Ulundi/
  Büyük Zimbabve gövdesi                  0        🔴 MAZERETİ YOK
⑥ Kongo/Tanzanya/Angola kuşağı alanı  DEĞİŞMEMELİ  🟡 aşağıya bak
⑦ Osmanlı hiçbir kesitte değişmemeli   DEĞİŞMEZ    🔴 MAZERETİ YOK
```
🟡 **⑥'nın mazereti VAR ve kapsamını ÖNCEDEN yazıyorum:** bu koşu bağlamayla
birlikte gelecekse Afrika'ya **26 yeni iç nokta** giriyor ve onlar Kongo
kuşağını meşru olarak değiştirir. ⇒ Ölçüt *"hiç değişmesin"* değil,
***"değişimin sebebi yeni NOKTALAR olsun, kıstırılmış tohum OLMASIN"***.
Ayırt etme yolu: değişen alanın sahibi Kap/Oranj/Transvaal/Ulundi/Zimbabve/
Mapungubwe ise **kusur**; yeni Afrika noktaları ise **doğru**.

🔴 **⑦ niçin mazeretsiz:** Osmanlı gövdesi pencerenin ortasında; kıstırılan
144 tohumun hiçbiri Osmanlı coğrafyasına yakın değil. Değişirse düzeltme
beklenmedik bir yere dokunmuş demektir ve **yayın durur.**

---

## ⑧ ⑤'İN GEÇERLİLİK ŞARTI — KOŞUDAN ÖNCE ÖLÇÜLDÜ
🔴 **⑤ yanlış sebeple geçebilirdi.** Bağlama altı künyesiz kimlik açmıştı
(M-0546) ve üçü tam da bu noktaların kimlikleriydi. **Kimliğin künyesi/rengi
yoksa gövde zaten çizilmez** ⇒ ⑤ sıfır çıkar ama düzeltmeyi kanıtlamaz.

Ölçtüm (koşudan ÖNCE — sonra ölçseydim mazerete benzerdi):
```
hollanda · ingiltere · mutapa · oranj · transvaal · zimbabve-kralligi · zulu-kralligi
   renk  7/7 VAR      künye 7/7 VAR      ⇒ hepsi ÇİZİLEBİLİR
```
🟢 **⑤ geçerli bir test.** Sıfır çıkarsa sebebi düzeltmedir.

## 🔴 ⑨ VE BU ÖLÇÜM KENDİ RAPORUMU DÜZELTTİ — M-0502'de BİR FAZLALIK
M-0502'de *"altısı da gerçek devletler, `s:` dönemleri VAR, SAHİPLİ"* demiştim.
**Mapungubwe için yanlış:**
```
Mapungubwe   29,39 · −22,19   d/v/s dönemi HİÇ YOK   ⇒ SAHİPSİZ
```
⇒ Gerçek risk **altı değil BEŞ noktaydı.** Karar (Ⓐ) etkilenmedi — beşi de
1.000-2.555 km kuzeye kıstırılıyordu ve beşi de sahipliydi. Ama sayıyı
**kontrol etmeden yazdığım** gerçeği kayda geçiyor: `§⑦` *devraldığın rakamı
doğrula* kuralı **kendi rakamını da** kapsıyor.

---

## ⑤ A1 TUZAĞI — SORULDU VE ÖLÇÜLDÜ (M-0509 ④)
> *"Izgaradan düşen tohumların peteği Voronoi'ye kalıyor. O peteklerin yüzleri
> 'yetim yüz' sayılıp komşuya katılıyor mu? Katılıyorsa düzeltme yine kendini
> iptal eder."*

**Ölçüm — kodun sırası, tahmin değil:**
```
polygonize (yüzler)          :1205
🔴 YETİM YÜZ ataması         :1235
ada kuralı                   :1407
KV ızgara kuruluyor          :1519
🟢 BENİM DÜZELTMEM           :1570
KV Dijkstra                  :1676
KV devir                     :1754
```
🟢 **Yetim yüz ataması düzeltmemden 335 satır ÖNCE koşuyor.** İkisi ayrıca
**farklı veri yapısına** dokunuyor:
```
_yuzler / _kume / _yetim   →  PETEK_D (geometri)      ← yetim yüz burayı kurar ve BİTER
_kvtohum / _kvsahip        →  sahiplik ızgarası       ← düzeltmem yalnız burada
```
Düzeltmem `PETEK_D`yi **hiç değiştirmiyor**; yalnız hangi parçanın
devredileceğini değiştiriyor. ⇒ **A1 tuzağı bu eksende geçerli DEĞİL.**

🔴 **AMA GERİYE BİR RİSK KALIYOR ve onu ÖLÇMEDİM:** pencere dışı noktanın
`PETEK_D`si boş mu? Boş değilse peteği pencere içine **taşabilir** ve o zaman
nokta ızgarada olmasa bile haritada görünür. Bunu ancak koşu ölçer.
```
ÖLÇTÜĞÜM     aşama sırası ve veri yapısı ayrımı
ÇIKARDIĞIM   A1 tuzağı bu eksende yok
ÖLÇMEDİĞİM   pencere dışı noktaların PETEK_D'si — koşu söyleyecek
```

---

## 🔴 KOŞUDAN SONRA
| # | kalem | mazeret | öngörü | ölçüm | sonuç |
|---|---|---|---|---|---|
| ① | pencere dışı sayısı | 🔴 yok / 🟡 | 144 (veya 180) | | |
| ② | tohum yerleşti | 🔴 yok / 🟡 | 2383 (veya 2409) | | |
| ③ | yer bulunamayan | 🔴 yok | **0** | | |
| ④ | KORUNUM (①+②+③=toplam) | 🔴 yok | tutar | | |
| ⑤ | G. Afrika gövdesi lat −11'de | 🔴 yok | **0** | | |
| ⑥ | Kongo kuşağı | 🟡 yeni nokta | kıstırma kaynaklı değişim 0 | | |
| ⑦ | Osmanlı | 🔴 yok | değişmez | | |
