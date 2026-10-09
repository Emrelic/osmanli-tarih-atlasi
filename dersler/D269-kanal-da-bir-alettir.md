# D269 — KANAL DA BİR ALETTİR: ölçümün sana NASIL GELDİĞİNİ ölç

**9-10 Ekim 2026 gecesi · ALTI ölçülmüş vaka, dördü koordinatörün**

> 🔴 **Bir aracın çıktısını, o çıktıyı sana getiren KANALIN kusuruyla birlikte
> okursan, aracın davranışı hakkında hüküm verirsin ve hüküm YANLIŞ olur.**
> Ölçümü "ölçülemedi" diye beyan etmeden önce **ölçümün sana nasıl geldiğini**
> ölç. Kanal da bir alettir; ve `HUKUM-KASA-1010 §6.1`in dediği gibi, bir
> aletin kendi hatası okumalarından ÖNCE ölçülür.

---

## Niçin ayrı bir ders

`§11`de zaten iki komşu aile var:
- *"Ölçüm doğru, çıkarım yanlış"* — hüküm ile teşhis ayrıdır
- *"Denetim var ≠ o soruyu soruyor"* — temiz rapor, sorulmayan soruda temiz değildir

Bu üçüncüsü ve ikisinden de **önce** gelir: burada ölçüm bile sana doğru
ulaşmamıştır. Çıkarım yapacak bir ölçümün yoktur, ama **olduğunu sanırsın** —
çünkü ekranda bir sayı durur.

---

## ALTI VAKA, hepsi bir gecede ölçüldü

### ① `git apply`ın başarı satırları, BAŞARISIZ bir yamada
`git apply -3` *"Applied patch to yerlesimler_afrika.js cleanly"* bastı; yamanın
TAMAMI başarısız oldu ve git atomik olarak geri aldı. Satır doğruydu — **o
dosya** gerçekten temiz uygulanmıştı; ama okuyucunun sorusu *"yama indi mi"*ydi
ve araç onu cevaplamıyordu.
**Çare:** `git diff HEAD -- <dosya>` ile SONUCU ölç, sürecin ara satırlarını değil.

### ② `git diff --name-only HEAD` yeni dosyaları GÖRMEZ
`gun.py` ve `js/gun.js` commitlenmedi ve kimse farketmedi; sınavlar GEÇİYORDU
çünkü **diski** okuyorlar, git'i değil.
⇒ *"Sınav geçti" ≠ "dosya indi" ≠ "bir şey KULLANIYOR."* Üçü ayrı soru.
**Çare:** `git status --porcelain` ya da `git ls-files`; ve tüketiciyi ADIYLA ölç.

### ③ `apply --check` çatışması bir TEŞHİS DEĞİLDİR
*"`--check` çakışıyor ⇒ yama yeniden türetilmeli"* diye hüküm verildi. Ölçüldü:
**22 diffin 13'ü zaten `main`deydi.** Aynı çıkış kodu en az iki sebepten gelir —
gerçek çatışma ve "zaten inmiş".
**Çare:** `git apply --check -R` ile ters yönü de dene; çıkış kodundan önce
SEBEBİ ölç. (Bu hüküm üzerine bir kıta yanlış öncülle sevk edildi ve
durdurulmak zorunda kaldı.)

### ④ `$?` BORUDAN SONRA tail'in kodunu verir — ÜÇ KEZ
`komut | tail; echo $?` yazıldı ve `tail`in kodu okundu. Bu hatayla **iki
yanlış iddia** üretildi (*"şu araçlar düşen sınavda çıkış 0 veriyor"*), LAB
çürüttü, koordinatör birebir doğruladı.
Aynı gece **ikinci kez**: boru altında çöken bir sınav `cikis=0` gösterdi.
**Üçüncü kez**: `durum_tablosu` yutmasını kapatan commit'in KENDİSİNDE —
sınav dosyası `main`de yoktu, python `Errno 2` verdi, `$?` 0 döndü ve "geçti"
göründü.
📌 **Bilmek, yapmamaya yetmiyor.** Komutu yazarken SORMAK gerekiyor.
**Çare:** çıkış kodunu komutun KENDİSİNDEN al; çıktıyı dosyaya yaz, sonra oku.

### ⑤ ÇIKTI YAKALAMASI SATIR BAŞINA 165 BAYTTA KIRPIYOR
Bir sınav *"yalnız araçta (15)"* dedi ve **14 ad** bastı. Koordinatör bunu
*"15'incisi çözülemedi"* diye beyan etti, hipotez üretti (yazdırıcı kusuru,
konsol kod sayfası) ve bir işçiye teşhis işi verdi.
İşçi ölçtü: **kod 15 sayıyor VE 15 basıyor**, son ad "Zebîd".
Sonra koordinatör ham çıktıyı ölçtü:
```
satır 3: 155 karakter | 165 BAYT
satır 4: 157 karakter | 165 BAYT   ← AD ORTASINDAN kesik ("Bosna Bro")
satır 5: 157 karakter | 165 BAYT
```
Üç ayrı içerik · karakter sayıları **farklı** · bayt uzunlukları **AYNI**.
Kayıp `", Zebîd"` tam **8 bayt**.
⇒ **Kusur yoktu.** Araç doğruydu; kanal kırpıyordu. Bir işçinin turu bu
beyan yüzünden harcandı.
**Çare:** sınav çıktısını **dosyaya da** yaz ve geri oku (o sınava eklendi:
`R5_LISTE_DOSYA`, stdout ile dosya 196/196 birebir).

### ⑥ `--check` İKİ AĞAÇTA AYRI SONUÇ VERİR
Bir işçi *"CR'siz sürüm `apply --check`te REDDEDİLDİ, CR'li geçiyor"* dedi.
Koordinatörün ağacında **CR'siz sürüm GEÇTİ.** Sebep: `data/devletler.js`
`check-attr text: unspecified` ⇒ her checkout'ta `core.autocrlf`a göre
çözülüyor ve iki ağacın satır sonları AYNI DEĞİL.
⇒ **Başka bir ağacın `--check` sonucu senin ağacında HÜKÜM DEĞİLDİR.**
**Çare:** kendi ağacında ölç, sonucu ayrıştırmayla doğrula.

---

## CRLF ailesi — aynı gecede BEŞ kez, ve biri ölçen betiğin kendisi

`--ignore-all-space` bir satırlık bir sorudur ve beş vakanın beşini de
ayırt ediyordu:
1. `URETIM_IZI` girdi kıyası: **95/95 "farklı"** göründü, fark CRLF'ti
2. Koordinatörün 19 CSV'si: `git diff` +N/−N eşit, `--ignore-all-space` **boş**
3. `MIMARI.md`nin LF çapaları 501 CRLF'li dosyada eşleşmedi
4. `devletler.js`in `--check` sonucu iki ağaçta ayrı (yukarı, ⑥)
5. 🔴 **Ölçen betiğin kendisi:** `CLAUDE.md` yamasının "satır sonu KORUNDU"
   kontrolü `False` bastı ve koordinatör dosyayı bozduğunu sandı. Ölçtü:
   `git diff` **+23 / −0** — yani git'in gördüğü içerik hiç değişmemişti.
   Betik **YANLIŞ SORUYU** ölçüyordu: *"çalışma dosyasının satır sonu ne"* ile
   *"git ne görüyor"* ayrı sorular, ve yetkili olan ikincisi.

---

## DÖRDÜ KOORDİNATÖRÜN — ve bu kişiye değil İŞE bağlı

Altı vakanın dördünde hatayı koordinatör yaptı (①③④⑤), ve dördünde de
**bir işçi ölçümle çürüttü.** Kusur dikkatsizlik değil **konum**: koordinatör
kendi ölçümünü yapmaz, raporları ve çıktıları OKUR — yani kanalın en çok
baktığı yerde durur.
⇒ Bu yüzden kural, en çok koordinatörü bağlar.

---

## KURAL — üç satır

```
① Çıkış kodunu komutun KENDİSİNDEN al. Boru, ölçümün kendisini bozar.
② Uzun çıktıyı DOSYAYA yaz ve geri oku. Ekran bir kanaldır, kayıt değil.
③ Bir şeyi "ölçülemedi" diye beyan etmeden önce, ölçümün sana NASIL
   GELDİĞİNİ ölç — ve farkın GERÇEK olup olmadığını sor
   (`--ignore-all-space` bir satırdır).
```

**Bağlı:** `§3` üç çıkış kodu · `§11` "ölçüm doğru çıkarım yanlış" ·
`HUKUM-KASA-1010 §6.1` (aletin kendi hatası) · [`D265`](D265-olculen-sayi-basilmiyorsa-olculmemistir.md)
(ölçülen ama basılmayan sayı) · [`D267`](D267-desen-veriye-uymazsa-sessiz-yanlis-sayi.md)
(desen veriye uymazsa yanlış sayı) · [`D268`](D268-toplayicinin-kendi-tanimini-okumamak.md)
(toplayıcının tanımını okumamak)
