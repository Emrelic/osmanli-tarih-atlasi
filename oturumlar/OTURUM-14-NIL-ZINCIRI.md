# Oturum 14 — Nil vadisi: Kavalalı zincirinin SONU

**Araştırma oturumu — `data/` altına hiçbir şey yazılmadı.**
Görev: A5 zincirin **başını** düzeltti (1805-07-03); bitişleri hiç doğrulanmadı.

---

## 0. 🔴 Baş bulgu — zincirin sonu ikiye bölünmüş

118 Kavalalı/Hidiv `v:` dönemi tarandı. Bitiş tarihi dağılımının sonu:

| Bitiş | Kayıt |
|---|---|
| … | … |
| 1885-01-26 | 19 |
| **1914-11-05** | **43** |
| **1914-12-18** | **13** |

**Aynı olay, iki tarih, aynı katman.** 43 + 13 = 56 — A5'in saydığı Mısır
katmanının tamamı.

İki bağımsız yöntemle ölçtüm (gevşek blok eşleştirmesi ve katı `},` sınırlı
eşleştirme), ikisi de **43 / 13** verdi. Kuveyt ve Yirgalem ilk taramada
yanlış pozitif çıkmıştı; katı ölçüm ikisini de dışarıda bıraktı — **43'ün
43'ü Mısır kaydı.**

## 0a. 🔴 VE BU 43 KAYIT BENİM ÖLÇMEDİĞİM KAYIT

Dürüst olmam gerek: `1914-11-05 → 1914-12-18` düzeltmesini **ben önerdim**
(`OTURUM-14-DUZELTMELER §1`) ve listeme **10 kayıt** yazdım. Merkez onları
uyguladı — bugün `1914-12-18` taşıyan 13 kaydın kaynağı bu (10 + kendi
yazdığım 4 vaha, biri örtüşüyor).

**Gerçek kapsam 10 değil 56'ydı.** Kalan 43'ü hiç ölçmedim, çünkü listeyi
çekirdek dosyaya bakarak çıkardım; Mısır katmanının büyük kısmı
`yerlesimler_afrika.js`'te duruyor.

> Bu tam olarak dün adını koyduğunuz sınıf: **yön doğru, ölçek ölçülmemiş.**
> A5 Kavalalı'nın başında "altı kayıt" dedi, 56 çıktı. Ben Kavalalı'nın
> sonunda "10 kayıt" dedim, 56 çıktı. **Aynı zincirin iki ucunda, aynı hata,
> iki ayrı oturum** — üstelik benimki önce oldu ve A5'inkini uyarabilecekken
> uyarmadı.

## 0b. 🔴 DENETİM BUNU YAKALAMIYOR — ve sebebi öğretici

`Değişmez 2` bu 43 kırılmayı **temiz** raporluyor. Sebep:

```
olaylar.js:  t:"1914-11"  "I. Dünya Savaşı'na giriş"     → ay hassasiyeti
             ay hassasiyetli tarih ayın 1'ine genişler   → 1914-11-01
             43 kırılma 1914-11-05'te                    → fark 4 GÜN
             ±30 gün ölçütü                              → ✅ TEMİZ
```

Yani **43 Mısır kasabası, Osmanlı'nın savaşa girişi maddesinin altında el
değiştiriyor.** Kullanıcı 1914 sonuna geldiğinde haritada Mısır'ın renk
değiştirdiğini görüyor, yanındaki listede "I. Dünya Savaşı'na giriş" okuyor.

`CLAUDE.md §10`'un tarif ettiği şikâyetin ta kendisi — ve **denetim temiz
diyor.** `1914-11` maddesinin ay hassasiyetinde olması (CLAUDE.md §8'in
yasakladığı şey) bu körlüğü tek başına üretiyor.

📌 **Doğru tarih zaten kronolojide var:**
`olaylar_ek5.js` → `1914-12-18 "Mısır'ın İngiliz himayesine alınarak
sultanlık ilan edilmesi"`. Yani 13 kayıt doğru maddeye bağlanıyor, 43 kayıt
alâkasız bir maddeye. **Kronoloji doğru, veri geride.**

---

## 1. Hangi tarih doğru? — TDV bir gün fark veriyor

| Kaynak | Tarih | Ne diyor |
|---|---|---|
| Verideki madde (`olaylar_ek5.js`) | **18 Aralık 1914** | himaye + sultanlık ilânı |
| TDV `abbas-hilmi-ii` ✅ CANLI | **19 Aralık 1914** | *"19 Aralık 1914'te İngiltere Mısır'ı himayesine aldı"* |

### 1a. Çelişki değil — ardışık iki olay

Standart kayıt ikisini ayırır: **18 Aralık** himaye ilânı, **19 Aralık**
Hidiv Abbas Hilmi'nin azli ve Hüseyin Kâmil'in sultan ilânı. TDV'nin maddesi
**hidivin kendi maddesi** olduğu için tarihi *azil gününden* veriyor.

**Harita için hangisi doğru?** `v:` dönemi bir **tâbiiyet** ilişkisidir
(Kavalalı hanedanı, Osmanlı vasalı). Onu bitiren şey hanedanın değişmesi
değil — hanedan devam etti, Hüseyin Kâmil aynı aileden — **metbûun
değişmesidir.** Osmanlı hukukî hükümranlığını bitiren **18 Aralık himaye
ilânıdır.**

⇒ **Önerim: `1914-12-18` kalsın, 43 kayıt ona hizalansın.** Veri değil,
verinin çoğunluğu yanlış; azınlık (13) doğru.

### 1b. 🟡 Ama mevcut maddenin `kaynak:`ı zayıf olabilir

Madde `kaynak:"misir"` diyor. `misir` maddesini çektim: **tarih bölümü
1780-90'larda bitiyor**, XX. yüzyıla hiç girmiyor. Yani madde, olayı
anlatmayan bir maddeye atıf yapıyor olabilir — sizin "fakir slug" sınıfınız.

⚠️ **Kesin konuşmuyorum:** TDV'nin uzun ülke maddeleri bölümlere ayrılıyor
ve çektiğim gövde eksik olabilir. Ama `abbas-hilmi-ii` olayı **açıkça ve
tarihiyle** anlatıyor.

**Önerim:** maddenin `kaynak:`ı `misir` → **`abbas-hilmi-ii`** olsun; `misir`
doğrulanana kadar. Bu, maddenin metnini değiştirmez, yalnız atfını sağlamlaştırır.

---

## 2. Uygulanacak — 43 kayıt

`1914-11-05` → `1914-12-18`. **Kuveyt DEĞİŞMEZ** (aşağıda), Yirgalem'in
zincirinde Kavalalı dönemi yok.

Delta bölgesi ve Aşağı Mısır (15): Demenhûr · Dessûk · Kafrüşşeyh ·
Bürüllüs (Baltîm) · Tanta · Mahalletülkübrâ · Şibînülkûm · Benhâ · Mansûre ·
Mît Gamr · Menzile · Bilbîs · Fâkūs · Sâlihiyye · Ebûkîr

Kanal ve Sînâ (5): Portsaid · İsmâiliye · Katye · El-Arîş · Tûr (Sînâ)

Batı çölü ve kıyı (2): Mersâ Matruh · Sellûm

Orta Mısır (8): Atfîh · Benî Süveyf · Feyyûm · Behnesâ · Minye · Mellevî ·
Deyrût · Tahtâ

Yukarı Mısır (9): Ahmîm · Cirge · Ferşût · Kına · Kūs · Uksur · Esna · Edfû ·
Kûm Ombo

Kızıldeniz kıyısı (3): Kusayr · Sefâce · Ebû Ramâd (Şalâtîn)

Nübye (1): Vâdî Halfâ

**Toplam 43.**

### 2a. ⚠️ KUVEYT DEĞİŞMEZ — ve sebebini yazıyorum ki tekrar sorulmasın

Kuveyt'in `1914-11-05`i **doğru ve başka bir olaydır**: İngiltere'nin Osmanlı
ile savaş hâline girmesi ve Kuveyt'i bağımsız şeyhlik olarak tanıması.
Mısır himayesiyle alâkası yok, aynı güne düşmesi tesadüf.

`DUZELTMELER §1`'de de dışarıda bırakmıştım; **o kararım doğruydu, eksik
olan yanı kapsamdı.**

### 2b. Denetime beklenen etki

- `Değişmez 2`: 43 kırılma `1914-11-05`ten `1914-12-18`e taşınır. Yeni tarihte
  **madde zaten var** (`olaylar_ek5.js`), yani açık **üretmez** —
  ve 43 kırılma "I. Dünya Savaşı'na giriş"in altından çıkıp doğru maddesine
  bağlanır. **Sayı değişmez, doğruluk değişir.**
- `1914-11-05` tarihi veriden **tamamen kalkar** (Kuveyt hariç).
- `Değişmez 3` etkilenmez (`m:` bağları oynamıyor).

---

## 3. 🔴 AÇIK KALAN ASIL SORU — 1882 veride HİÇ YOK

Zincirin sonunu ölçerken çıktı ve sizin sorunuzun ikinci yarısıydı
(*"1882 İngiliz işgali mi, 1914 himaye ilânı mı"*). Cevap:

> **1882 hiçbir Mısır kaydında geçmiyor.** Bütün yerleşim dosyalarında
> `1882` içeren tek kayıt **Aseb** ve o da İtalya ile ilgili.

### 3a. Bu bir hata mı? — Hayır, ama eksik

`v:`/`d:`/`s:` **hukukî** ekseni tutar. 1882'de Mısır'ın hukukî statüsü
**değişmedi**: hidivlik Osmanlı vasalı olarak sürdü, İngiltere işgal etti
ama ilhak etmedi. Bu yüzden 1882'de bir `v:` sınırı **olmaması doğrudur.**

🔴 **Ama kullanıcının `hatalar 11 md.41-42` şikâyeti tam da buydu**: haritada
1882'de hiçbir şey olmuyor. Ve doğru çözümü zaten teşhis edilmişti —
**`isg:` örtüsü.** Ölçtüm:

```
data/yerlesimler.js         isg: 3 kayıt  (üçü de Bosna)
data/yerlesimler_afrika.js  isg: 0 kayıt
```

⇒ **Mısır'da tek bir `isg:` örtüsü yok.** Ne 1882 İngiliz örtüsü, ne
`DUZELTMELER §18`'de kesinleştirdiğim Napolyon örtüsü uygulanmış.

### 3b. Öneri

1882-1914 arası İngiliz işgali için `isg:` örtüsü, **56 Mısır kaydına**:
```js
isg:[{f:"1882-09-13", t:"1914-12-18", d:"ingiltere", kaynak:"❓"}]
```
- **Başlangıç `1882-09-13`** — Tel el-Kebîr Muharebesi, `olaylar_ek9.js`'te
  maddesi var (benim yazdığım). Kahire'nin düşüşü ve Urâbî ordusunun dağılması.
- **Bitiş `1914-12-18`** — himaye ilânı; o tarihte örtü gereksizleşir çünkü
  `s:"ingiltere"` başlar.
- `kaynak:` ❓ — `misir` doğrulanmadı (§1b), `abbas-hilmi-ii` 1882'yi
  anmıyor. **Bir TDV maddesi bulmam gerek**; isterseniz bakarım.

⚠️ **Bu 56 kayıtlık bir iştir ve ölçüsünü şimdi yazıyorum ki üçüncü kez aynı
hataya düşmeyelim.** `isg:` kırılma üretmediği için (`DUZELTMELER §18a`)
kronoloji borcu doğurmaz; maliyeti yalnız 56 satır düzenleme.

---

## 4. Özet

| Bulgu | Durum |
|---|---|
| Zincir sonu 43/13 bölünmüş | 🔴 **43 kayıt düzeltilecek**, liste §2'de |
| Doğru tarih hangisi | ✅ `1914-12-18` — gerekçe §1a |
| TDV bir gün fark veriyor | 🟡 ardışık iki olay, çelişki değil |
| Maddenin `kaynak:`ı | 🟡 `misir` → `abbas-hilmi-ii` önerildi |
| Denetim neden görmedi | 🔴 `1914-11` ay hassasiyetli, 4 gün uzakta |
| Kuveyt | ✅ değişmez, ayrı olay |
| 1882 | 🔴 veride hiç yok — `isg:` örtüsü gerekli, 56 kayıt |
| Zincir **başı** (1805-07-03) | A5'in işi, dokunmadım |

**Ölçülmüş kapsam: 43 kayıt (hizalama) + 56 kayıt (`isg:` örtüsü).**
İkisi de `yerlesimler.js` ve `yerlesimler_afrika.js`'te, yani sizde.
