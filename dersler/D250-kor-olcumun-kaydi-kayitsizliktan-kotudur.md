# D250 — KÖR bir ölçümün KAYDI, kayıtsızlıktan kötüdür

**Slogan:** 🔴 **Bir ölçümü kalıcı kayda geçirmeden önce, ölçen aracın O SÜRÜMÜNÜN kör olup olmadığı sorulur. Kör bir ölçümün kaydı zamanla "o gün böyleymiş" diye okunur: damgası, sağlaması, commit'i vardır — yani kayıtsızlıktan DAHA İNANDIRICIDIR ve daha yanlıştır.**

## Vaka — 1 Ekim 2026, `DEGISMEZ-KOSU19-UMIT.log`

Değişmez 8 yalnız ham çıktının durduğu makinede ölçülebiliyor
(`devletler_harita.js` · `donemler.js` · `petek_govde.js` — üçü de
`.gitignore`lu, 492 MB). Yayıncı makinede `FileNotFoundError` veriyor.
⇒ O değişmezin bugünkü değeri **bir makinenin diskinde yaşıyor** ve o makine
kapanınca kaybolur.

Çare açıktı: ölçümün **kaydını** depoya al (492 MB yerine 26 KB). KOSU-UMIT'e
şu verildi:

> `py -X utf8 arac/denetle.py > denetim\DEGISMEZ-KOSU19-UMIT.log`
> …başına gövde damgası, motor izi ve ölçen makine yazılsın.

🔴 **Talimat eksikti ve KOSU-UMIT eksiği gördü.** Worktree `3a34f8b0`da
duruyordu; `denetle.py`nin O SÜRÜMÜ, aynı gün keşfedilen **paketleme
körlüğünü** taşıyordu (`D246` ailesi): `_d8_d_dosyalari()` 0 dosya döndürüyor,
Değişmez 8a boş kümeye karşı `0 birim (tavan 1611) ✓` basıyor.

Olduğu gibi koşsaydı log şunu **kalıcı olarak** kaydedecekti:

```
Değişmez 8a ✓  şehir peteği D hattını aşıyor: 0 birim (tavan 1611)
               — ≥5 km · 0 (hat, gün) ölçüldü · gövde 2026-10-01 02:33
SONUÇ: temiz
```

Ve o satır **doğru görünecekti**: gövde damgası doğru, motor izi doğru, ölçen
makine doğru, tarih doğru, commit'li. Altı ay sonra okuyan biri *"koşu 19'da
Değişmez 8 temizdi"* derdi. Oysa hiçbir şey ölçülmemişti.

KOSU-UMIT ne yaptı: `git cherry-pick -n b18717ae` ile yalnız üç araç
dosyasını (commit'siz) aldı, ölçtü, araçları geri aldı, worktree'yi
`3a34f8b0`da bıraktı — ve **yöntemi logun başına dördüncü başlık satırı olarak
yazdı.** Gerçek ölçüm: `1517 birim · 725 (hat, gün)`.

## DERS

```
① Bir ÖLÇÜM kaydedilmeden önce ÖLÇEN ARACIN SÜRÜMÜ sorulur.
   "Hangi veriyi ölçtün" kadar "hangi aletle ölçtün" da kayda girer.
② Kaydedilmiş kör ölçüm, kayıtsızlıktan KÖTÜDÜR:
   kayıtsızlık "bilmiyoruz" der · kör kayıt "biliyoruz" der ve YANILTIR.
   `D204`ün üçlüsüne (ölçülemedi ≠ yok ≠ temiz) dördüncü terim:
   **KAYDEDİLMİŞ KÖR ÖLÇÜM = en tehlikeli "temiz".**
③ Bir ölçüm kaydının başlığı ÜÇ DEĞİL DÖRT şey taşır:
   ne ölçüldü (gövde damgası) · hangi motor (iz) · kim ölçtü (makine) ·
   🔴 HANGİ ALET SÜRÜMÜYLE (ve sapma varsa gerekçesi).
④ Talimatı yazan, aletin o makinedeki sürümünü DÜŞÜNMEK zorundadır.
   Ben düşünmedim; işçi düşündü ve bildirdi (`§7.1 ⑥`).
```

📌 Ve bu, `D248`in (*"koşturulmamış komut şartnameye yazılmaz"*) ikizi:
orada **komutun kendisi** sınanmamıştı, burada **komutun koşacağı ortam**.
İkisinde de eksik olan aynı şey — *yazan kişi, çalışacağı yerde bir kez
düşünmedi.*

📌 Üçüncü kez aynı işçi aynı sınıfı yakaladı (CRLF · `yay` imzası · D8a boş
kümesi · ve şimdi bu). Hepsinin ortak kalıbı: **koordinatör uzak makinenin
durumunu VARSAYDI, işçi ÖLÇTÜ.**

## BAĞLI

`D246` (paketleme körlüğü) · `D248` (koşturulmamış komut) · `D204`
(ölçülemedi ≠ yok ≠ temiz) · `D241` (commitlenmemiş kumanda uzak makinede
yalan söyler) · `denetim/DEGISMEZ-KOSU19-UMIT.log`
