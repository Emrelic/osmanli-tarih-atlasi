# D272 — TANIM, KENDİ KULLANIMINI EKSİK BEYAN EDER

**Slogan:** Bir alanın TANIMINI okumak, o alanın NEREDE KULLANILDIĞINI ölçmek
değildir. Tanım bir KAYITTIR; `girdi.yukle()` ÖLÇER.

**Tarih:** 10 Ekim 2026 · **Ölçen:** YILDIRIM BAYEZIT (koordinatör), KASA'nın
teslimini doğrularken · **Taban:** `main` @ `56288d4b`, `girdi.yukle()` 4300 kayıt

---

## Vaka

KASA, Feyzâbâd `kur:` hükmünü uygularken teslim mesajında şunu yazdı:

> 🔴 `ic_not` kayıt düzeyinde BİLİNEN ALAN DEĞİL. `girdi.BILINEN_ALANLAR`'da yok,
> kayıt düzeyi `kesinlik` de yok. … *"kur YIL hassasiyeti" için alan yok* ⇒ şema
> kalemi (Emre listene).

Koordinatör bunu Emre'nin karar listesine **şema kalemi** olarak yazmak
üzereydi. Yazmadan önce ölçtü:

```
KAYIT düzeyinde `kesinlik` taşıyan kayıt : 38
bunlardan `kur:` taşıyan                 : 38      ← 38'in 38'i
`bit:` taşıyan                           : 0
değerler : yil 31 · ay 5 · yuzyil 1 · belirsiz 1
emsal    : Bîcâr kur 1801 → "yuzyil"
           Şırnak kur 1891 → "belirsiz"
           San José de Chiquitos kur 1767 → "yil"
           Caçu kur 1918 → "ay"
```

⇒ **Alan yok değil. Alan VAR, 38 emsali var, ve emsallerin HEPSİ tam o işi
yapıyor:** `kur:`'un hassasiyetini nitelemek.

İkinci ölçüm aynı sınıftan ikinci kusuru verdi:

```
`neden:` taşıyan kayıt                    : 796
bunlardan `kasitli_bosluk` TAŞIMAYAN      : 489   (%61)
emsal: Otranto (`m:` NULL gerekçesi) · Bozüyük · Pazaryeri
       (Emre'nin kendi sözünü taşıyorlar — boşlukla ilgisiz)
```

İki tanım, iki eksik beyan:

```
girdi.py:412  "kesinlik": "tarih hassasiyeti — s:/d:/v:/isg: İÇİNDE"
              → KAYIT düzeyini HİÇ ANMIYOR, 38 kayıt orada kullanıyor
girdi.py:222  "neden":    "kasitli_bosluk'un gerekçesi — niçin kasten boş"
              → verinin %61'ini tarif etmiyor; alan fiilen GENEL gerekçe taşıyıcısı
```

## Niçin ayrı bir sınıf

`§11`in kapı ailesine komşu, ama **sonucu TERS**:

```
yorum ≠ kontrol   →  OLMAYAN bir denetimi VAR gösterir   ⇒ sahte GÜVEN
D272              →  OLAN bir alanı YOK gösterir          ⇒ sahte YOKLUK
```

Sahte güvenin bedeli bilinir: ölçülmeyen bir kusur geçer. **Sahte yokluğun
bedeli daha az görünür ama ucuz değil: İŞ ÜRETİR.** Bu vakada üretmek üzere
olduğu iş:

- bir **alan-ekleme** kalemi
- bir **Emre kararı** (`§7.1`: koordinatörün masasındaki en pahalı şey)
- muhtemelen yeni bir **şema alanı** (`ic_not`)

— hepsi **ZATEN ÇÖZÜLMÜŞ** bir şey için. Ve şemaya eklenen gereksiz bir alan
geri alınmaz: 38 kayıt bir sözleşmeyi, yeni alan İKİNCİ bir sözleşmeyi kurar
⇒ `§3`ün *"bir sorunun TEK UYGULAMASI olur"* kuralı ihlal edilirdi.

## Çare

🔴 **Bir alanın varlığı/yokluğu VERİDEN ölçülür, TANIMDAN okunmaz.**

```python
# YANLIŞ — tanımı ölçer
"ic_not" in girdi.BILINEN_ALANLAR        # bir KAYDI sorgular

# DOĞRU — kullanımı ölçer
[k["ad"] for k in girdi.yukle() if "kesinlik" in k]      # 38
```

İki soru ayrıdır ve ikisi de sorulur:

| soru | kaynağı | neyi söyler |
|---|---|---|
| alan TANINIYOR mu | `BILINEN_ALANLAR` | ayrıştırıcı uyarı basar mı |
| alan KULLANILIYOR mu | `girdi.yukle()` | emsal var mı, sözleşme ne |

⚠️ Üçüncü soru da var ve bu vakada cevabı HAYIR'dı: **alan OKUNUYOR mu.**
`girdi.py:410` kendi notunda yazıyor: *"TANINDI ≠ OKUNUYOR: motor bu alanı
okumaz; alan yalnız beyandır."* ⇒ `kesinlik` bir beyandır, davranış değil
(`CLAUDE §4`: *"Hassasiyeti beyan etmek, yanlış günü doğru yapmaz"*).

## İki yan bulgu

**① `kesinlik` İKİ BİÇİM alır ve ikisi de meşru** (`girdi.py:412`): skaler
(`"yil"`) ya da uçları ayrı nesne (`{f:"yil"}`). Ölçüm: dilim düzeyinde
**147 skaler · 57 nesne**. KASA'nın iki diffi iki ayrı biçim kullandı ve
**ikisi de geçerliydi** — biçim farkı bir uyumsuzluk DEĞİL.

**② `kur:` hassasiyet borcu ölçüldü ve bir TABAN verdi:**

```
`kur:` taşıyan kayıt                    : 1477
`kur:` değeri `-01-01` ile biten         : 1101   (%74,5)
bunlardan hassasiyetini BEYAN eden       :   38   (%2,6)
```

⇒ `CLAUDE §4`ün hicrî/`YYYY-01-01` sözleşme açığının **`kur:` yüzü**. 1101
sayısı bir TAVAN değil TABANDIR: `-01-01` olmayan 376 kaydın hassasiyeti
ölçülmedi, ve `-01-01` olanların bir kısmı gerçekten 1 Ocak olabilir.
📌 **Beyan edilmemiş bir yaklaşıklık, beyan edilmiş bir boşluktan KÖTÜDÜR**
(`§3.5`) — ve burada 1101 kalem beyansız.

## İKİNCİ VAKA — aynı sınıf, bir saat sonra, HABERLEŞME katmanında

Koordinatör yukarıdaki ölçümü yaptıktan ~30 dakika sonra aynı hataya
**başka bir alanda** düştü, ve bu ikinci vaka sınıfın alan sözlüğüne özgü
olmadığını gösteriyor.

`MOTOR-GECISLI` kapsam notunu Atlas'ın yazıcı oturumuna göndermek için
`ListAgents` okundu. Listede **canlı bir `UMIT`** vardı; mesaj ona gitti.
Dönen cevap:

> *"Bu oturumun çalışma klasöründe (`C:\eczane-rc-umit`) atlas deposu yok …
> `girdi.py`, `yerlesimler_a78_asya.js`, `denetim/` bu makinede mevcut
> değil, git deposu da değil."*

```
ADRES  doğru çözüldü     — "UMIT" diye bir oturum GERÇEKTEN canlı
EVREN  yanlıştı          — o oturum BAŞKA BİR PROJEDE çalışıyor
```

⇒ **`UMIT` bir MAKİNE adıdır, bir ROL adresi değil.** O makinede aynı anda
birden çok oturum var ve çalışma dizinleri farklı. `ListAgents` **ADI**
verir; **DİZİNİ VERMEZ.** Ölçüldü: `list_sessions` uzak (Remote Control)
oturumların `cwd`sini hiç döndürmüyor — yani bu soru **o aletle
ölçülemiyor**, ve ölçülemediği için ad *ölçüm sanıldı.*

📌 Slogan birebir aynı, yalnız nesnesi değişiyor:
```
alan sözlüğü katmanı :  TANIM bir KAYITTIR, `girdi.yukle()` ÖLÇER
haberleşme katmanı   :  AD    bir KAYITTIR, DİZİN  ÖLÇER
```

⚠️ Ve bedeli ilk vakayla aynı sınıfta: **bir işçinin turu harcandı.** Zarar
büyük değildi çünkü o oturum belirsiz görevi kendi lehine yorumlamadı,
**ÖLÇTÜ ve geri sordu** (`§7.1 ⑥`nın doğru hâli; `§9.1 ③`ü doğuran
davranışın aynısı). Yani çember yine ÇALIŞTI — bedel bir tur.
🔴 Bir veri kaybı/karışma olmadı: Atlas içeriği Emre'nin beyanıyla
**herkese açık** (*"bu atlas projesinde hasta tc si filan yok"*), ters yön
(eczane içeriğinin Atlas'a girmesi) yasak ve o yön hiç işlemedi.

### Çare — mesaj değil, GİT
Kanal ölçülünce şu çıktı: Atlas'ın UMIT kanalı **şu an KAPALI**
(`UMIT İRTİBAT` offline). ⇒ Doğru çare yeni bir adres aramak değil,
`HAZIR-KITA §3.1`i uygulamak:

> **ŞARTNAME MESAJDA DEĞİL, GİT'TE — git İÇERİĞİ taşır, mesaj UYANDIRIR.**

İki kalem `oturumlar/PAKET-1010-UMIT.md §L/§M`ye yazıldı, kanal şerhi `§N`ye.
Kanal geri geldiğinde içerik orada duruyor ve uyandırma mesajı TEK SATIR olur.
📌 Bu, `§7.2`nin *"dalda çalışan bir makine `main`e yazılanı HİÇ görmez"*
şerhinin ters yüzü: oraya **yazılan** şey, kanal kapalıyken de BEKLER;
**gönderilen** şey beklemez.

## Bağlı kurallar

- `§3` — bir sorunun TEK UYGULAMASI olur (gereksiz alan ikinci sözleşme kurar)
- `§3.4 ⑥` — yalnız düz metinde yaşayan bir beyan ÖLÇÜLEMEZ (alan sayılır,
  proza sayılmaz); Feyzâbâd hükmü bu yüzden **ŞARTLA** onaylandı: hassasiyet
  `neden:` prozasından `kesinlik:` alanına taşınacak
- `§7.1` — koordinatör OLGU hakkında hüküm vermez, OLGUYU ÖLÇTÜRÜR. Bu vakada
  kural **ters yönde** işledi: işçi ölçtü ve YANLIŞ ölçtü, koordinatör
  Emre'ye yazmadan önce doğruladı. ⇒ Çember iki yönde çalışır.
- [`D199`](D199-durum-tablosu-elle-yazilmaz.md) — "defter KAYDEDER, ÖLÇMEZ"in
  alan sözlüğü yüzü
- [`D267`](D267-desen-veriye-uymazsa-sessiz-yanlis-sayi.md) — aracın deseni bir
  ölçüm parametresidir (aynı aile: ölçüm aletinin kendisi yanlış soruyu sorar)
