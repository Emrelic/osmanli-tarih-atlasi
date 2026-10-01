# D255 — Aracın ÖNERDİĞİ komut, aracın YAPTIĞI şey değildir

**Tarih:** 1 Ekim 2026 gecesi · **Ölçen:** koordinatör
**Bağlı:** `D253` (düzeltme ve tavan aynı commit'te) · `D248` · `D250`

## SLOGAN

Bir aracın kendi çıktısında önerdiği komut, o komutun **gerçekte ne yaptığına
dair bir kanıt değildir.** Mesaj ile eylem ayrışabilir — ve ayrıştığında
tuzak sinsidir, çünkü komut **başarıyla çalışır** ve sonuç **geçerli görünür.**

## VAKA — `odak_olc.py --tavan-yaz`

Odak kapısı iyileşme gördüğünde şunu basıyor:

```
✓  ODAKSIZ 455 (tavan 480 — 25 İYİLEŞME, tavan indirilmeli: `--tavan-yaz`)
```

Mesaj açık: *tavan indirilmeli.* Ama `--tavan-yaz`ın yaptığı
(`odak_olc.py:377-405`):

```python
tv = {"odaksiz": T["ODAKSIZ"],              # ← TOPLAM = 658, evren içi 455 DEĞİL
      ...
      "evren": sorted(d["dosya"] for d in D["dosyalar"])}   # ← BÜTÜN dosyalar
```

🔴 Yani önerilen komut tavanı **480'den 658'e ÇIKARIR** ve `evren` kümesini
bütün taranan dosyalara genişletir ⇒ **YENİ KAPSAM kovasındaki 6 dosyanın
203 odaksızını AFFEDER.**

*"İndir"* diyen mesaj, *"yeniden ölç ve evreni genişlet"* yapan bir bayrağı
öneriyor.

### Niçin bu tuzak özellikle tehlikeli
```
komut CALISIR            → cikis 0
tavan dosyasi GECERLI    → json bozulmaz, alanlar tam
kapi SUSAR               → yeni tavan olcumun ustunde, ihlal YOK
kusur GORUNMEZ           → 203 kalem sessizce affedilmis olur
```
Hiçbir denetim ötmez. Bir sonraki oturum mesaja uyar, komutu koşturur, "tavanı
indirdim" diye commitler ve **tavanı 178 puan yükseltmiş** olur.

## KÖK NEDEN — tek bayrakta İKİ işlem

`--tavan-yaz` iki ayrı şeyi yapıyor ve ikisini ayırmıyor:
```
① IYILESMEYI DONDUR   olculen sayi tavan olur        (mesru, sik)
② KAPSAMI GENISLET    yeni dosyalar evrene girer     (AYRI karar, nadir)
```
`D253`ün konusu birebir: *iyileşmeyi dondurmak* ile *kapsamı genişletmek*
ayrı işlemlerdir. Tek bayrakta birleştirilince, sık olanı isteyen kişi
nadir olanı da alır.

## KURAL

1. **Bir aracın önerdiği komutu, o komutun kodunu OKUMADAN koşturmak
   ölçmemektir.** Özellikle tavan/eşik/beyan yazan komutlarda.
2. **Yıkıcı ya da af niteliğindeki işlemler ayrı bayrak ister** ve bayrağın
   adı yaptığı şeyi söylemelidir (`--tavan-indir` ≠ `--evren-genislet`).
3. **Af ile ölçüm ayrılır:** bir sayıyı yükselten her işlem, yükseltmenin
   GEREKÇESİNİ aynı commit'e yazmak zorundadır (`D253`).
4. Bu vakada yazılan çare: `denetim/ARAC-ODAK-TAVAN-INDIR-1001.py` — yalnız
   `odaksiz` değerini yazar, `evren`e **dokunmaz**, ve ölçüm tavanın
   ÜSTÜNDEYSE yükseltmeyi **REDDEDER** (çıkış 1). Sınavı: `evren` 152 → 152.

## ÖLÇÜM — gece boyunca üç kez kullanıldı, üçünde de doğru davrandı
```
480 → 455   (25 kalem) · evren 152 → 152
455 → 441   (14 kalem) · evren 152 → 152
441 → 438   ( 3 kalem) · evren 152 → 152
```
`--tavan-yaz` bir kez bile kullanılmadı. Kullanılsaydı tavan 658 olurdu ve
gecenin 42 kalemlik gerçek ilerlemesi **ölçülemez** hâle gelirdi.

## BAĞLI

`D253` (zincirin bir kısmı) · `D248` (koşturulmamış komut şartnameye yazılmaz)
· `D250` (kör ölçümün kaydı) · `D254` (kör yazma başarılı görünür) ·
`denetim/ARAC-ODAK-TAVAN-INDIR-1001.py`
