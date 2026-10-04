# D260 — Atlas kendini kaynak gösteriyor: türetilmiş iddianın izi SİLİNMİŞ

**Slogan:** *Haritadan türetilen bir kronoloji maddesi haritayı doğrulamaz, tekrarlar —
ve denetim bunu "senkron ✓" diye okur.*

**Tarih:** 4 Ekim 2026 · **Ölçen:** `KRONO-ATLAS-DONGUSU-1004`
**Rapor:** `denetim/KRONO-ATLAS-DONGUSU-1004.md`

---

## Vaka

Bir örneklem turunda işçi şunu fark etti ve **ölçmediğini söyledi**:
`304 Şam 1918` maddesi *"Aynı tarihte elden çıkan diğer yerleşimler: Hama, Humus"* diyor,
**desteksiz**. Not düştü: *"haritadan türetilmiş iddia olabilir, ÖLÇMEDİM."*

Ölçüldü:
```
kalıplı madde                                      130   (99'u olaylar_ek*)
  └─ "Aynı tarihte … yerler: A, B, C" LİSTE biçimi   76
örneklem 10 madde → ② atlasta aynı gün + ① kaynak saymıyor   8/10
76 listedeki 282 adın atlasta TAM O GÜN kırılanı   252  (%89,4)
```

🔴 **Ama en güçlü kanıt sayı değil, kaydın kendi notu:**
```
"katılan öteki" fiilli 51 liste maddesinin 51'inin `ic_not_d` alanı:
   "eski ifade: Aynı tarihte HARİTAYA katılan diğer yerleşimler:"
```
Yani liste **atlastan üretilmiş**, sonra metinden **"haritaya" kelimesi çıkarılmış.**
Fiiller de motor dili: *"tâbi katmana geçen"*, *"tâbi katmandan doğrudan katmana dönen"*.

⇒ Bu bir çıkarım değil, **belge**. Kayıt kendi kökenini yazmış; sonra köken ifşa eden
kelime silinmiş ve cümle bir **tanıklık** gibi kalmış.

---

## Üç alt sınıf — ve çareleri AYRI

| sınıf | ne | örnek |
|---|---|---|
| **(a) türetilmiş + YANLIŞ** | atlas o gün yanlıştı, iddia yanlışı taşıdı | `#9` Ankara 1402 "116 yer elden çıktı" — TDV `fetret-devri`: Rumeli/Bursa/Amasya şehzadelerde kaldı · `#786` 1841 **YÖN TERS** (TDV: Şubat 1841'de *tekrar Osmanlı yönetimine girdi*) |
| **(b) türetilmiş + DOĞRU** | doğruluğu **atlas sağlıyor**, kaynak değil | `#291` Bükreş — kaynak slug ÖLÜ |
| **(c) türetilmiş + BAYAT** | harita sonradan düzelmiş; kronoloji şimdi **haritayı yalanlıyor** | `#22` + 13 benzeri: listeyle atlas arasında hiç aynı-gün kırılma YOK |

🔴 **(b) en sinsi olanı:** doğru olduğu için hiçbir denetim ötmez, ama doğruluğunun
dayanağı **kendisi**. Bir hata düzeltilirse yanlışa döner ve kimse bilmez.

---

## Niçin bu, ölçüm hatasından daha ağır

`CLAUDE.md §1`: *"Amaç kronoloji ile haritanın birbirini DOĞRULAMASI — bir madde
okunduğunda haritada tam o değişim görünmeli; bütün kalite kuralları buradan türer."*

Türetilmiş bir madde bu vaadi **tersine çevirir**: harita maddeyi doğruluyor görünür,
oysa madde haritadan kopyalanmıştır. Ve `Değişmez 2` (her kırılmanın ±30 gün içinde
maddesi olmalı) tam bu maddeyi **kırılmayı kapatan kanıt** sayar.
⇒ **Kapı, denetlediği şeyden türetilmiş veriyle kendini temiz ilan ediyor olabilir.**

**Ölçülmesi gereken bir sayı var ve henüz ölçülmedi:** bu listeler Değişmez 2 evreninden
çıkarılınca **kaç kırılma AÇIK düşer.** O sayı döngünün denetime sızma derinliğidir.

---

## Kural

1. **Atlasın kendi boyaması bir KAYNAK DEĞİLDİR** (`D207`in zaten dediği) — ve bir madde
   onu kaynak gibi gösteren bir ek taşıyorsa o ek **kaynak iddiası gibi durmamalıdır.**
2. **Bir beyanın izini silmek, beyanı kaldırmaz; gizler.** `ic_not_d`de "eski ifade"
   kalmasaydı bu sınıf **ölçülemezdi**. ⇒ Köken alanı asla temizlenmez; taşınır.
3. **(c) BAYAT olanlar en acil:** 14 madde bugün haritayı yalanlıyor, ve bir okuyucu
   maddeyi okuyup haritada göremiyor — projenin tek vaadinin doğrudan ihlali.
4. Çare üç yönlü ve **madde başına** seçilir: ek **silinir** · ayrı bir alana
   (kaynak iddiası olmayan) **taşınır** · ya da **tek tek doğrulanır** (~282 iddia).
   Toptan silme (b) sınıfında doğru bilgiyi, toptan bırakma (a)/(c)'de yanlışı korur.

---

## Bağlı dersler

[`D207`](D207-atlas-referans-degil.md) atlas referans değildir — bu, onun **ölçülmüş
ihlali**. [`D211 ⑧`](D211-tdv-tuzak-5-8-once-ayristir.md) rakamın gövdede geçmesi onu
desteklemez. [`D259`](D259-kapinin-hukmu-ortamin-ozelligidir.md) doğrulamak başka
yerden ölçmektir — burada "başka yer" kaydın **kendi not alanı** oldu.

📌 **Ve bulgunun doğuş biçimi dersin bir parçası:** işçi kalıbı başka bir iş sırasında
gördü, *"ölçmedim"* diye bıraktı, ben ayrı bir tur açtım. **Ölçülmediğini söylemek bir
sonuçtur** — susulsaydı sınıf hiç bulunmayacaktı.
