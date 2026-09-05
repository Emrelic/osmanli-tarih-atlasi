# SINAV — kademe yamasının `m:` yarısı, (b) yolu

**Oturum:** KURE GORUNUM · sevk **M-3024** · 5 Eylül 2026
**Üretilen:** `denetim/yer_yama_kademe_m_0905.js` — 24 kayıt · 19.010 bayt
**Cins:** ÖNERİ + SINAV — hüküm yok, `data/`ye taşınmadı, veri yazılmadı.

---

## ① ÜRETİLDİ

```
window.YER_YAMA_KADEME_M_0905      (§7: dosya adındaki ayırt edici parça
                                    değişken adında da var)
24 kayıt · alanlar: ad · m · kaynak · neden
`yerlesim` → `ad` çevrildi           (KAPI B'nin süzgeci `r.ad` istiyor)
kapsam: 38 kaydın 24'ü — öteki 14'te `oneri.m` canlı değerle AYNI, DOKUNULMADI
24'ünde de canlı `m` NULL             (ölçüldü, hepsi TEK kayıtta, ad belirsizliği 0)
`donem:` TAŞINMADI                    ← açık borç, aşağıda ⑤
```

## ② 🔴 KURU KOŞU KOŞULAMADI — ÜÇÜNCÜ BİR KAPI VAR: **DİZİN**

Sevk *"`denetim/` altında üret"* ve *"`py arac/_sahiplik_uygula.py` kuru
koşu: 24'ünün 24'ü iniyor mu?"* diyor. İkisi **birlikte
gerçekleştirilemiyor**:

```
arac/_sahiplik_uygula.py:65   fs.readdirSync('data')     ← SABİT
                              'data/' + f
komut satırı seçeneği          YALNIZ `--yaz` (satır 59) — dizin seçeneği YOK
⇒ alet `denetim/` altına HİÇ BAKMIYOR, ve sevk `data/`ye taşımayı YASAKLIYOR
```
📌 Bu, `kur`un iki kapısının **üçüncüsü**: alan değil, **dosyanın
bulunduğu dizin.** Ve bu 24 kayda özgü değil — `denetim/` altındaki
**397 kaydın tamamı** aynı durumda; taşıma adım ⑥ tam bunun için var.

### 🟢 KAPI A SINANDI — ve aletin KENDİ koduyla
Kendi süzgecimi yazmadım (`§11`: *kendi yazdığın ayrıştırıcı her zaman
kötüdür*). `_sahiplik_uygula.py`nin kaynağından **JS bloğu olduğu gibi
çıkarıldı**, yalnız `readdirSync('data')` → `readdirSync('denetim')`
çevrildi:
```
denetim/ altından süzgeci GEÇEN kayıt : 421   (= 397 + 24 ✓)
bunlardan bu dosyadan                 : 24 / 24   🟢
__alan                                : YER_YAMA_KADEME_M_0905
geçen alanlar                         : ad · kaynak · m · neden
```
⇒ **Biçim doğru.** Kayıtlar süzgeci geçiyor, değişken adı tanınıyor.

### ⚪ KAPI B ÖLÇÜLEMEDİ — ve *"temiz"* diye raporlanmıyor
Python tarafının skaler makinesi (çakışma · `SKALER_KORUNAN` · `atlanan`)
dosya `data/`ye taşınmadan **koşturulamaz.** Taşımadan sonra tek komut:
```bash
py arac/_sahiplik_uygula.py | grep -A100 "İNEN"      # 24 ad aranacak
```

## ③ ÖNGÖRÜ — kuru koşudan ÖNCE yazıldı, damgalı

> `denetim/` altında değil, bu belgede duruyor; taşımadan sonra
> **çürütülebilir** olsun diye.

| # | öngörü | dayanak |
|---|---|---|
| ① | `m` **24/24 İNER** | `SKALER_ALANLAR`da, `SKALER_KORUNAN`da DEĞİL, canlı 24/24 NULL |
| ② | `kaynak` 23 iner · **1** *"ZATEN DOLU"* | canlı `kaynak` 23 boş / 1 dolu (ölçüldü) |
| ③ | `neden` 21 iner · **3** *"ZATEN DOLU"* | canlı `neden` 21 boş / 3 dolu (ölçüldü) |
| ④ | **çakışma 1** — `Kasr-ı Şîrîn` | `yer_yama_kafkas.js` (kaynak+neden) · `yer_yama_p0035.js` (neden) de yazıyor; **`m`i yazan başka yama YOK** ⇒ `m` yine de inmeli |
| ⑤ | `veride-yok` **0** | 24'ün 24'ü canlıda var (tarandı) |
| ⑥ | `belirsiz` **0** | hiçbir ad birden çok kayıtta geçmiyor (tarandı) |

🔴 **MAZERET — önceden yazıldı:** ①'de mazeret **YOK**; 24/24 inmezse
taşıma biçimi yanlış demektir. ②③'te sayı kayabilir (başka bir oturum bu
gece `kaynak`/`neden` yazmış olabilir) — o mazeret **meşru**.
🔵 **ÖLÇMEDİĞİM:** aletin `d2_gerek` kilidi ve *"MADDESİZ GÜN"* dalının bu
kayıtlara ne yapacağını. `m` bir tarih alanı değil, o dallara girmemesi
**bekleniyor** ama **sınanmadı.**

---

## ④ BEŞ ÖRNEK KAYNAĞA SORULDU

**Yöntem:** dört TDV gövdesi çekildi (`tebriz` 24.196 · `sirvan` 17.288 ·
`gurcistan` 50.429 · `klis` 5.909 karakter — dördü de boilerplate değil),
ve `gerekce`nin alıntıladığı cümle **gövdede arandı ve okundu.**

| # | kayıt | sonuç |
|---|---|---|
| ① | **Ahar → Tebriz** | 🟢 doğrulandı |
| ② | **Salyan → Şamahı** | 🟢 doğrulandı, en güçlüsü |
| ③ | **Kuba → Derbend** | 🟡 cümle doğru, **özne yok** |
| ④ | **Zagem → Tiflis** | 🔴 doğru hüküm, **çürük gerekçe** |
| ⑤ | **Knin → Klis** | 🔴 gerekçe **kendi sonucunu zayıflatıyor** |

### 🟢 ① Ahar — ve aynı ölçüm **üç** kaydı birden kapatıyor
TDV `tebriz` 1593 taksimini **birebir** veriyor ve `gerekce`nin saydığı
yedi livâ tam olarak orada: *"…Tebriz eyaleti Tebriz (merkez…), **Suldus,
Dizmâr** (Sendyan, Gerger), **Merâga** (…), **Sarukurgân** (…),
**Saîdâbâd, Alîk** livâ ve nahiyelerinden oluşuyordu."*
`Ahar` · `Miyâne` · `Sarâb` gövdede **0 kez** geçiyor (harf duyarlı) ⇒
*"listede yok ⇒ livâ altı"* çıkarımı **tutuyor**, ve aynı gerekçeyi
taşıyan **üç kayıt** birden doğrulanıyor.

### 🟢 ② Salyan — kaynağın kendisi adıyla sayıyor
*"Şemâhî eyaleti on beş, Derbend yedi sancağa ayrıldı."* **ve**
*"Böylece Şemâhî, Kabala, Bakü, Şâburân, Mahmûdâbâd, **SALYAN** ve
Demirkapı/Derbend Osmanlı kontrolüne girdi."* ⇒ Beşin en güçlüsü:
yerleşim **adıyla** ve **doğru pencerede** geçiyor.

### 🟡 ③ Kuba — cümle var, özne yok
*"Kuzeyde merkezi Demirkapı/Derbend olan Derbend eyaleti…"* **doğrulandı.**
Ama `Kuba` o cümlede **geçmiyor**, ve Osmanlı kontrolüne giren yerler
listesinde de **yok**. Gövdedeki dokuz `Kuba` geçişi **1719 · 1758** —
yani Kuba Hanlığı devri, yamanın penceresinin (**1583-1607**) dışında.
⇒ Atama bir **coğrafî çıkarım** (*"o eyaletin kuzey kesiminde"*); kaynak
onu adıyla desteklemiyor. `guven:"GEREKCELI"` etiketi bunu **olduğundan
güçlü** gösteriyor.

### 🔴 ④ Zagem — DOĞRU HÜKÜM, ÇÜRÜK GEREKÇE
```
gerekce  "Tiflis eyaletinin dört sancağı (Gori·Tiflis·Tumanıs·Lori)
          sayılıyor, Kaheti bunların İÇİNDE DEĞİL ⇒ tâbi krallık merkezi"
TDV      "KARTLİ VE KAHET TİFLİS EYALETİ HALİNE GETİRİLDİ."
```
⇒ Kaheti **eyaletin içindeydi.** Ve dört sancak cümlesi başka bir şeyi
söylüyor: *"1588'de **doğu ve batı Kartli'yi içerisine alan** Tiflis
eyaleti dört sancaktan oluşmaktaydı"* — yani o sayım **Kartli** içindir.
🟢 **Sonuç (`m:Tiflis`) çürümüyor, GÜÇLENİYOR** — ama dayanağı ters.
🔴 **Ve bedeli `m`de değil `k`de:** `k:3` (*tâbi krallık merkezi*) tam o
çürüyen yarıya dayanıyor, ve `k` **zaten inmiş** (38/38). Ayrı kalem.
📌 `§11`: *doğru hüküm, yanlış teşhisle gelebilir.*

### 🔴 ⑤ Knin — gerekçe kendi sonucunu zayıflatıyor
Cümle **birebir doğru**: *"1580'de Bosna vilâyeti tesis edildiğinde Klis
sancağı ikiye ayrıldı ve **kuzeybatısı Kırka adıyla Bosna vilâyetine
bağlandı**."* Ve `gerekce`nin kendisi Knin'i **o kesime** koyuyor
(*"Knin o kesimde"*).
```
yamanın penceresi   1522-05-29 .. 1688-09-11   ⇒ 1580'i AŞIYOR
1580 ÖNCESİ         m:Klis   makul
1580 SONRASI (108 yıl)  Knin Klis'ten AYRILMIŞ görünüyor ⇒ m:Klis TARTIŞMALI
`Knin` gövdede      0 kez
```
⇒ **KARAR GEREK.** Hüküm vermedim; kaydın `neden:` alanına damgalandı.

### 🔴 VE BİR YAKALAMA — `Ahar` ≠ `bahAratı`
İlk arama büyük/küçük harf **duyarsız alt dizgi**ydi ve *"Ahar 1 cümlede
geçiyor"* dedi. Cümle ticaret hakkındaydı ve içindeki eşleşme
**"ba·har·atı"**nın içiydi. Harf duyarlı sayım: **0**.
📌 Bu gecenin ikinci vakası (`astı` ↔ `bastırıldı`), ve `§11`in
*"eşleşme bulmak, doğru şeyi bulmak değildir"* ailesinin en ucuz üyesi.
⚠️ Yakalanmasaydı *"Ahar gövdede geçiyor ama ilgisiz bir cümlede"* diye
raporlanacaktı — **doğru sonuç, yanlış dayanak.**

### 📌 BEŞ YOKLAMANIN TOPLU OKUMASI
```
alıntılanan cümle GERÇEKTEN var mı   5 / 5   🟢 — uydurma kaynak YOK
cümleden `m`ye giden ÇIKARIM tutuyor 2 / 5   (+1 kısmî)
```
⇒ **Zayıf halka kaynak değil ÇIKARIM.** `gerekce` alanları güvenilir
biçimde **gerçek cümle** alıntılıyor; sınanmamış olan, cümleden atamaya
giden adım. ⚠️ Ve beş örnek bir **oran** vermez — 24'ün kalan 19'u
`⚪ DEVRALDIM, kaynağa SORULMADI` diye damgalandı.

## ⑤ `donem:` TAŞINMADI — açık borç
Kademe yaması her kayıt için geçerli pencereleri de veriyor
(`["1585-09-25..1603-10-21", …]`) — yani `kd:[{f,t,k,m}]` biçiminin
yükü. `kd:` canlı veride **192 kayıtta** kullanılıyor, yani ölü bir
tasarım değil; ama **hiçbir alet bir yamadan `kd:`ye yazmıyor.**
Her kaydın `neden:` alanına pencereler **metin olarak** yazıldı — makine
okuyamaz, ama kaybolmaz.

## ÖLÇMEDİM
```
⚪ KAPI B (Python skaler makinesi) — dosya data/ye taşınmadan koşulamaz
⚪ 19 kaydın kaynağa uygunluğunu — beş örneklik yoklamanın dışında
⚪ Zagem'in `k:3`ünün doğruluğunu — `k` zaten inmiş, ayrı kalem
⚪ Knin'in 1580 sonrası doğru merkezinin ne olduğunu (Kırka? Bosna?)
   — çürüttüm, YERİNE KOYMADIM
```
