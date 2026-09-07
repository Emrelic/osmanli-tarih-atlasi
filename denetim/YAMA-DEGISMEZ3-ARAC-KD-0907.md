# YAMA ÖNERİSİ — `kd:` desteği · `DEGISMEZ3-0907`

> 🔴 `arac/_sahiplik_uygula.py` ve `arac/girdi.py`ye **DOKUNULMADI**
> (koordinatörün kalemi · `girdi.py` ayrıca parmak izli/donuk).
> Sınav: `denetim/ARAC-DEGISMEZ3-ARACYAMA-0907.py` — **çıkış kodu 0**.

## NİÇİN — ölçülmüş, varsayılmadı
`denetim/YAMA-DEGISMEZ3-KD-0907.json` (368 kayıt) bugün uygulansa
**hiçbir şey inmez** ve alet *"uygulandı"* derdi. Üç ayrı yerde delik var:

```
① NODE SÜZGECİ  :88-92   `r.kd` TANINMIYOR
                → yalnız `ad`+`kd` taşıyan kayıt Python'a HİÇ ULAŞMAZ
② CATISABILIR   :255     `kd` YOK → çatışma ölçülmez, YAZILABILIR değil
③ ALAN_RX       :470     `kd` YOK → satır dönüşümü hiç denenmez
```
📌 Betiğin **kendi yorumu** bu kusuru iki kez anlatıyor — `bos/neden/not`
(2 Eylül) ve `kur` (5 Eylül): *"yeni kod Python'a hiç ULAŞMIYORDU… tam da
bu betiğin önlemek için var olduğu kusur."* Bu **üçüncü** tekrarı olurdu.

🔴 **Ve `kur` vakasının "iki bağımsız yol" deseni burada da geçerli —
sınavda gösterildi:**
```
yalnız-`kd` yama    → node süzgecinde ELENİR, Python'a ULAŞMAZ    (gürültülü yokluk)
`kd`+`kaynak` yama  → süzgeci GEÇER, ama `kd` Python'da HİÇ OKUNMAZ
                      ve `atlanan`a KAYIT DÜŞMEZ                   (SESSİZ)
```
İkincisi tehlikeli: kayıt işlenmiş görünür, `kd` iz bırakmadan yok olur.

---

## D1 · NODE SÜZGECİ (`:88-92`)
```javascript
    if (r && r.ad !== undefined &&
        (r.d || r.s || r.v || r.isg || r.m !== undefined ||
         r.kaynak !== undefined || r.bos !== undefined ||
         r.neden !== undefined || r.not !== undefined ||
         r.kur !== undefined || r.kd !== undefined)) {     // ← EKLENEN
```
**Sınandı:** mevcut süzgeç `KD-YALNIZ-TEST`i **eliyor**, yamalı **geçiriyor**;
`kaynak`lı kayıt ikisinde de geçiyor (geçme yolu bozulmuyor).

## D2 · `CATISABILIR` (`:255`)
```python
CATISABILIR = ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not",
               "kur", "kd")          # ← EKLENEN
```
⚠️ `YAZILABILIR = frozenset(CATISABILIR)` olduğu için bu tek satır hem
çatışma ölçümünü hem yazılabilirliği açar.

## D3 · `ALAN_RX` (`:470`)
```python
ALAN_RX = {a: re.compile(r'(\b%s:\s*)\[' % a)
           for a in ("d", "s", "v", "isg", "kd")}     # ← EKLENEN
```
🟢 **`kd` DİZİ ailesine DOĞRU şekilde ait — ÖLÇÜLDÜ:**
`:832` `yeni_satir[:m.end()-1] + yeni_js + yeni_satir[son+1:]` ⇒ dizi
alanları **birleştirilmiyor, DEĞİŞTİRİLİYOR**. `kd` bir **bölümlemedir**
(dönemler örtüşmemeli, boşluk bırakmamalı); birleştirme geçersiz bir
bölümleme üretirdi. Replace doğru davranış.
**Sınandı:** var olan `kd:[…]` değiştirildi; `kd:` olmayan satırda eşleşme
yok (`ad:` çıpasına eklenecek — mevcut dal).

## D4 · YAZIM DÖNGÜSÜ (`:822`) + YENİ KORUMA KÜMESİ
```python
DIZI_KORUNAN = ("kd",)      # ← YENİ. Dolu ise ATLANIR, üzerine YAZILMAZ.

for alan in ("d", "s", "v", "isg", "kd"):        # ← "kd" EKLENDİ
    if alan not in r:
        continue
    if alan in DIZI_KORUNAN and _mevcut_dolu(satir, alan):   # ← YENİ DAL
        atlanan.setdefault("%s-dolu" % alan, []).append(r["ad"])
        continue
    ...
```
🔴 **Koruma niçin ŞART — koordinatörün sorusunun cevabı EVET:**
`SKALER_KORUNAN`ın kendi gerekçesi (`:520`) birebir geçerli: *"bir
ARAŞTIRMACI BEYANI taşır… sessizce ezmek «kimse burayı araştırmadı» ile
«biri araştırdı ve şu sonuca vardı» arasındaki farkı SİLER."*
`kd:` gerçek zaman derinliği taşıyabilir — bugün **17 kayıt** çok dönemli
ve **4'ünde `m:` gerçekten değişiyor** (Akkirman · Bender · Kili · Özi).
Bunlar borcun bugün **ödenmiş tek kısmı**; mekanik bir yama onları ezerse
ödenmiş borç geri açılır.

⚠️ **Ama `SKALER_KORUNAN`a EKLENEMEZ** — o küme skaler alanlar için
(`_mevcut_dolu` yerine dize karşılaştırması yapıyor). `kd` dizi ⇒ ayrı küme.

🟢 Ve `YAMA-DEGISMEZ3-KD-0907.json` bunu **zaten** uyguluyor (4 kayıt
`kd_zaten_var` diye atlandı) — ama koruma **yamaya değil ARACA** bağlı
olmalı: bir sonraki yama bunu yapmayabilir.

---

## D5 · `girdi.py:1211` — `kd:` İÇERİĞİ HİÇ DENETLENMİYOR
```python
for kat in ("s", "d", "v", "isg"):        # ← `kd` YOK
    for p in y.get(kat) or []:
        for alan in p:
            if alan not in BILINEN_DONEM_ALANLARI: ...uyar...
```
⇒ `kd:` içine yazılan **her alan sessizce kabul ediliyor**; yazım hatası
uyarı basmaz. Sınavda `ZZZBOZUK` alanlı bir kayıt üretildi ve **hiçbir
uyarı çıkmadı**.

**Çare — ayrı kütük, çünkü alanlar farklı:**
```python
BILINEN_KD_ALANLARI = {
    "f": "başlangıç", "t": "bitiş",
    "k": "idarî kademe (0-4)", "m": "bağlı merkez — null OLABİLİR",
    "turetildi": "kd_oku()'nun ÜRETTİĞİ sanal dönem (veriye YAZILMAZ)",
    "yontem": "bu dönem nasıl üretildi — ör. 'mekanik-anakronik'",
    "kaynak": "dayanak",
}
for kat in ("s", "d", "v", "isg"): ...          # mevcut
for p in y.get("kd") or []:                      # ← YENİ
    for alan in p:
        if alan not in BILINEN_KD_ALANLARI: ...uyar...
```
🔒 **`girdi.py` DONUK** (motor parmak izinde) ⇒ yama **yazıldı, UYGULANMADI**.
Koşu 8'den sonra iner.

---

## C13 — DÖRT AYAK, KOŞULDU
| ayak | sınanan | sonuç |
|---|---|---|
| ③ GİRDİ | test yaması **gerçek dosyaya** yazıldı, node onu diskten okudu | ✓ |
| ② ATEŞLEME | yalnız-`kd` kaydı mevcut süzgeçte **eleniyor**, yamalıda geçiyor | ✓ |
| ① GEÇME | `kaynak`lı kayıt **iki süzgeçte de** geçiyor — geçme yolu bozulmadı | ✓ |
| ④ ÇIKTI | `ALAN_RX['kd']` var olanı **değiştirdi**, olmayanda eşleşmedi | ✓ |
```
çıkış kodu 0
```

## ÖLÇMEDİKLERİM — açıkça
- `_mevcut_dolu()` diye bir yardımcı **yok**; D4'te adını verdim ama
  **yazmadım**. Uygulayan `_dilim(satir, alan)` (`:688`) üzerinden kurabilir
  — o zaten `<alan>:[…]` metnini döndürüyor, boş dizi ile dolu diziyi
  ayırmak uygulayanın işi.
- Yamayı **uçtan uca** koşturmadım: `DOSYALAR = girdi.GIRDI_DOSYALARI`
  gerçek 77 dosyayı hedefliyor ve `data/` koşu 8'de donuk ⇒ süzgeç ve
  dönüşüm mantığını **izole** sınadım, tam akışı değil.
- `kd` çatışma tespitinin (`CATISABILIR`) iki farklı `kd` bölümlemesinde
  nasıl davranacağı — `araliklar()` `{f,t}` çiftlerini topluyor, `kd` için
  anlamlı mı **ölçmedim**.
