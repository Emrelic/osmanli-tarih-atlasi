<!-- DURUM: BITTI ¦ 2026-08-15 ¦ maliyet-mesafe prototipi: Çimpe sınavı GEÇTİ -->
# MALİYET-MESAFE PROTOTİPİ — SONUÇ

**Alet:** `arac/maliyet.py` · **Öngörü:** `denetim/MALIYET-ONGORU.md`
(kod yazılmadan önce yazıldı) · **Koşu:** 2026-08-15, adım 0,03° (~3 km)

---

## 🟢 ASIL SINAV GEÇTİ — Emre'nin kendi kuralı

> *"Toprağın boyanması için orada yerleşim ya da garnizon olmalı; karşı
> kıyıdaki egemenliğin taşması olmamalı."*

```
                          VORONOİ (bugünkü motor)      MALİYET-MESAFE
1346-06-15  Rumeli'de
  Osmanlı boyalı hücre    29  🔴 (hepsi ÇANAKKALE'den)   0  🟢
1352-03-02  Rumeli'de
  Osmanlı boyalı hücre    43  🔴 (Çanakkale 29+Çimpe 14) 12 🟢 HEPSİ ÇİMPE
```

⇒ **Beklenen buydu ve birebir çıktı:** 1346'da Rumeli **boş**, 1352'de
**yalnız Çimpe.** Bugünkü motor 1346'da Çanakkale'nin peteğini boğazın
karşısına atıyor ve Osmanlı'yı Rumeli'de **altı yıl erken** gösteriyor.

📌 Ve bu, `CLAUDE.md §2`de sayılan hata ailesinin kökü: Sardinya'nın
Annaba'dan, Kefalonya'nın Ayamavra'dan boyanması **aynı kusurdur.**

---

## Beş öngörünün hükmü — ölçüm neyi çürüttü

| # | öngörü | hüküm |
|---|---|---|
| ① | Voronoi Rumeli kıyısını Anadolu'ya verir, > %20 | 🟡 **ÖLÇÜTÜ ÇÜRÜDÜ** — aşağı bak |
| ② | Maliyet-mesafe bunu SIFIRA indirir | 🟢 **TUTTU: 0** |
| ③ | Kara üzerinde ayrışma %5-15 | 🟢 **TUTTU: %13,9** |
| ④ | Aynı ağırlık, çevreye göre > 3 kat fark | 🟢 **TUTTU: 25,9 ve 7,7 kat** |
| ⑤ | Bölgesel ızgara < 60 sn | 🟢 tuttu (0,03°) · ⚠️ 0,01° **ölçülmedi** |

### 🔴 ①'in hikâyesi — ilk koşu ÇÜRÜDÜ ve kusur ÖLÇÜTTEYDİ

İlk sürümde iki yaka bir **doğruyla** ayrılıyordu (*"boğaz kabaca şu
hat boyunca uzanır"*). Sonuç imkânsızdı:

```
VORONOİ atlayan  97   ·   MALİYET atlayan 106
```

**Maliyet-mesafenin atlamayı ARTIRMASI imkânsızdır** — deniz sonsuz
sürtünmedir, hücre karşı kıyıya geçemez. ⇒ Kusur motorda değil ölçütte:
Şarköy gibi **Trakya'daki** noktalar doğrunun güneyine düşüyor, "Anadolu"
sayılıyor, onların peteği de "atlamış" görünüyordu.

**Çare tahmini iyileştirmek değil, tahmini BIRAKMAK oldu:** yakalar artık
**bağlantılı kara bileşeni** ile ayrılıyor (`kara_bilesenleri`). Gelibolu-
Trakya kütlesi ile Anadolu kütlesi bu kutuda karadan bağlı **değildir**;
sahibi başka bileşende olan hücre gerçekten "atlamıştır". Tahmin yok,
**tanım** var.

```
düzeltilmiş ölçüt:  VORONOİ 147 hücre (%8,8)  ·  MALİYET 0 (%0,0)
```

⚠️ ①'i *"tuttu"* diye yazmıyorum: **ölçütü değişti, o hâliyle sınanamadı.**
Sonradan yeni ölçüte göre "zaten tutmuştu" demek, mazereti bulguya
benzetmek olurdu.

📌 Ders: *"doğru aleti yanlış evrenle koşturmak"* ailesinin yeni üyesi —
ölçülen şey boğaz değil, **benim çizdiğim doğruydu.**

### ⚠️ ④'ün ince yeri

İddia tuttu ama **seyreklik ölçüsü kaba**: `en yakın komşu km` proxy
olarak zayıf. Çanakkale'nin en yakın komşusu **7 km** (en yakını) ama
alanı ikinci en büyük — çünkü arkasında geniş ve noktasız bir kütle var.
⇒ İddia (*"belirleyen ORAN değil, ÇEVRE"*) doğrulandı; **ölçüsü daha
iyisiyle değiştirilmeli** (ör. yarıçap içindeki nokta yoğunluğu).

---

## 🔴 NE ÖLÇÜLMEDİ — açıkça

```
yükseklik · eğim      VERİ YOK (veri-kaynak/ tarandı: kıyı·göl·nehir·
                      bölge·ülke var, DEM YOK). Katman kodda DURUYOR,
                      ağırlığı 0. "Dağ engeldir" iddiası SINANMADI.
orman · bataklık      aynı
dünya ölçeği          prototip BÖLGESEL. Dünyada koşacağı ÖLÇÜLMEDİ.
0,01° çözünürlük      koşulmadı
üretime etkisi        `uret_petek.py`ye DOKUNULMADI. Bu bir prototip.
```

---

## 🟢 BEKLENMEYEN BULGU — Voronoi'nin göremediği şey

`maliyet.py kutu` çıktısında yeni bir kova var: **maliyetle ULAŞILAMAYAN
hücre** — karadan gidilemeyen ada ve enklavlar. Bugünkü motorda böyle bir
kategori **yoktur**: Voronoi her hücreye bir sahip bulur, çünkü *"en
yakın"* sorusunun cevabı hep vardır.

⇒ Maliyet-mesafe yalnız daha doğru boyamıyor, **"burası kimsenin değil"
diyebiliyor** — ki `OGRENILENLER §72`nin *"`Değişmez 1` kimsenin değildi
diyemiyor"* borcunun tam karşılığı bu.

---

## Sıradaki adım (bu gece DEĞİL — ayrı ve büyük iş)

Prototipi üretime almak `uret_petek.py`nin petek kurma aşamasını
değiştirmek demektir: ~80 dakikalık koşu, tam denetim, yayın kapısı.
**Ölçülmeden ve Emre onaylamadan yapılmaz.**
