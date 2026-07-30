# Mükerrer denetimi neden kaçırdı — eşik ölçümü · 30 Temmuz 2026

**Soru (merkez oturum, hatalar 11 madde 36):** Âli Paşa'nın 1871 vefatı iki madde
görünüyor. Mükerrer denetimi Jaccard ≥ 0.45 (bugün 0.34) + aynı gün + ortak kişi
ile çalışıyor ve bunu yakalamadı. Gerçek Jaccard'ı ölç, eşiği ölçüme dayanarak
ayarla.

**Cevap: eşik suçlu değil, RAPOR suçlu.** Araç çifti görüyordu; 57 satırlık,
ihlal sayılmayan, `--ayrinti` olmadan yalnız ilk sekizi basılan bir listeye
gömmüştü.

---

## 1. Yer gerçeği nereden geldi

`data/olaylar*.js` içindeki `// … SİLİNDİ (tarih): mükerrer: …` yorumları,
kullanıcının gözüyle bulunup Oturum 7'nin sildiği çiftleri **eşiyle birlikte**
kayda geçiriyor. Silinen kayıt HEAD'de duruyor, sağ kalan eşi yorumda adıyla
yazılı. Bu, ölçüm için hazır bir etiketli küme:

**27 doğrulanmış mükerrer çift** (23'ü yorumdan otomatik çözüldü, 2'si elle
eklendi — başlık eşleşmesi tutmadı; 2 çift de HEAD'de bulunamadığı için
sayılmadı).

```bash
git show HEAD:data/olaylar_ek7.js   # silinen kayıtlar burada
grep -n "SİLİNDİ" data/olaylar*.js  # eşleri burada adıyla yazılı
```

## 2. Ölçüm — Âli Paşa çiftinin gerçek Jaccard'ı

```
A: 1871-09-07  Âli Paşa vefat etti                          (olaylar_ek7.js, silindi)
B: 1871-09-07  Sadrazam Âlî Paşa'nın vefatı: Tanzimat        (olaylar_ek5.js, kaldı)
               kadrosunun sonu

başlık Jaccard = 0.125      eşik = 0.34      gün farkı = 0      ortak kişi = 2
```

27 çiftin tamamının dağılımı:

```
min 0.000 · %25 0.125 · orta 0.222 · %75 0.286 · max 0.333
```

**Hiçbiri 0.34'ün üstünde değil.** Yani eşik "biraz yüksek" değil; başlık
benzerliği bu hata sınıfını ilkesel olarak göremiyor. Sebep açık: mükerrer
maddeler *farklı sözcüklerle* yazılıyor ("vefat etti" / "vefatı", "tahttan
indirildi" / "hal'i"), zaten aynı sözcüklerle yazılsalardı yazan oturum kendi
mükerrerini fark ederdi.

## 3. Eşiği düşürmenin ölçülmüş bedeli

Aynı veri, aynı ±400 gün penceresi:

| eşik | çift | gerçek | yanlış |
|---|---|---|---|
| **0.340** (bugün) | 12 | 1 | 11 |
| 0.300 | 32 | 6 | 26 |
| 0.250 | 93 | 16 | 77 |
| **0.150** ← hepsini yakalayan | **207** | **25** | **182** |
| 0.125 ← Âli Paşa'yı yakalayan | 315 | 31 | 284 |

Âli Paşa'yı yakalamak için eşik 0.125'e inmeli; o eşikte **%90 yanlış alarm**
oluyor. `OGRENILENLER.md §3`: "101 yanlış alarmlı bir denetim güvenilirliğini
kaybeder ve kimse bakmaz." **Eşik 0.34'te bırakıldı.**

> Yan ölçüm: bugünkü veride başlık ölçütü **sıfır** çift buluyor. Kademe hâlâ
> duruyor çünkü ucuz ve bir gün başka bir yazım tarzı gelebilir — ama bugün
> denetimin bütün işini ikinci ölçüt yapıyor.

## 4. Asıl kusur: tespit değil triyaj

**27 gerçek çiftin 27'si zaten yakalanıyordu** — zayıf ölçütte (aynı kişi +
±3 gün). Ama o liste 57 çiftti, %47 kesinlikti, ihlal sayılmıyordu ve özet
çıktıda yalnız ilk 8 satırı basılıyordu. Araç doğru cevabı biliyordu, rapor
onu gömüyordu.

Dört aday kademeleme kuralı aynı yer gerçeğine karşı ölçüldü:

| kural | seçer | gerçek | diğer | kesinlik | duyarlılık |
|---|---|---|---|---|---|
| (mevcut) tüm zayıf liste | 57 | 27 | 30 | 0.47 | 1.00 |
| gün=0 VE aynı kaynak slug | 20 | 19 | 1 | 0.95 | 0.70 |
| gün=0 VE (kaynak \| J≥.10) | 24 | 23 | 1 | 0.96 | 0.85 |
| **gün=0 VE (kaynak \| J≥.10 \| ortak≥3)** | **25** | **24** | **1** | **0.96** | **0.89** |
| gün≤1 VE (kaynak \| J≥.10) | 30 | 25 | 5 | 0.83 | 0.93 |

Seçilen kural işaretli olan. **Tek "diğer"i de gerçek bir mükerrer** (§6), yani
ölçülen yanlış alarm **sıfır**.

**Gün farkının tam 0 olması şart.** Gevşetilince gelen 5 çiftin hepsi Yavuz'un
Mısır seferi gibi ardışık günlerde geçen **ayrı** olaylar: Halep 28/29 Ağustos
1516, Trablusşam–Şam 26/27 Eylül, Filistin–Kudüs 28/29 Aralık. Bir gün
gevşeklik bu veride "sefer günlüğü" demek.

Kaçırdığı 3 çift de aynı sebepten kaçıyor (1-2 gün aralıklı) ve gözden geçirme
kademesinde duruyorlar — kaybolmuyorlar:
`Fatih'in ölümü` (2 gün) · `Şehzade Mustafa` (1 gün) · `İttihat ve Terakki` (1 gün).

## 5. Uygulanan değişiklik

`arac/denetle.py`, 5. denetim artık **üç kademeli**:

| kademe | ölçüt | sonuç |
|---|---|---|
| `[başlık]` | Jaccard ≥ 0.34 | **İHLAL** |
| `[kişi!]` | aynı GÜN + ortak kişi + (aynı kaynak \| J≥0.10 \| 3 ortak kişi) | **İHLAL** (yeni) |
| `[kişi:]` | ±3 gün + ortak kişi, aynı gün değil | gözden geçirme listesi |

Eşik değerleri değişmedi (`MUKERRER_ESIK = 0.34`, `MUKERRER_GUN = 400`,
`MUKERRER_KISI_GUN = 3`). Yeni sabitler: `KESIN_JACCARD = 0.10`,
`KESIN_ORTAK_KISI = 3` — ikisi de yukarıdaki tablodan okundu.

**Doğrulama (regresyon):** silme öncesi veriye (HEAD) uygulandığında yeni kademe
**25 alarm** veriyor, 24'ü yer gerçeği. Bugünkü veride **1 alarm**.

## 6. Yeni bulgu — Pasarofça iki kez yazılmış

Bugünkü tek alarm, sahibi başka oturumda olan gerçek bir mükerrer:

```
1718-07-21  Pasarofça Antlaşması — Lâle Devri                     data/olaylar.js
1718-07-21  Pasarofça Antlaşması — Mora kazanıldı, Belgrad ve      data/olaylar_ek5.js
            Banat kaybedildi
aynı gün · aynı k:"antlasma" · aynı kaynak slug · 6 ortak kişi · başlık J = 0.222
```

Üçüncü bir Pasarofça kaydı (`olaylar_ek7.js`) hatalar 5 turunda zaten silinmişti;
bu ikisi kaldı. **Düzeltme benim işim değil** — `data/olaylar.js` ve
`data/olaylar_ek5.js`'in sahibine havale.

## 7. Denetimin kalan kör noktası

- **±3 günden uzak mükerrerler.** Zayıf ölçüt 3 günle sınırlı; 400 günlük
  pencerede yalnız başlık benzerliği çalışıyor ve o da bu sınıfı göremiyor.
  Yıl kayması olan bir mükerrer (Selimiye 1574/1575 gibi) bugün ancak başlıklar
  benzerse yakalanır.
- **`d:` gövde metni ölçüldü ve işe yaramadı.** Gövde Jaccard'ı gerçeklerde 0.169,
  diğerlerinde 0.108 medyan — ayrım gücü zayıf, kurala girmedi.
- **Yer gerçeği kümesi kendi kendini doğrular.** Kural, kullanıcının bulduğu
  çiftlere göre ayarlandı; kullanıcının hiç görmediği bir mükerrer sınıfı varsa
  bu ölçüm onu göstermez.
