# KITA 14 · ŞEHİRKÖY ZİNCİRİ — **ÖNGÖRÜ** (kaynak okunmadan)

```
🔴 TEK BİR TDV MADDESİ AÇILMADAN YAZILDI VE COMMIT'LENDİ. (D022)
   Şu ana kadar yalnız DEPODAKİ veri okundu; hiçbir dış kaynağa bakılmadı.
```

## ⓪ SEVKİN ÖNCÜLLERİ — ÖLÇTÜM

```
🟢 koşu sürmüyor  → data/ DONMUŞ DEĞİL (yalnız sunucu.py + kutu.py + http.server)
🟢 data/olaylar_p0043a.js  git log BOŞ  ve  diskte YOK   ⇒ "YENİ" iddiası DOĞRU
🟢 data/yerlesimler_serhat.js var (11.707 bayt), Şehirköy kaydı satır 115
```

**Kaydın bugünkü hâli (ölçüldü):**
```
s: 1281-01-01 → 1386-01-01  sirbistan
   1413-07-05 → 1428-01-01  sirp-despotlugu
   1443-01-01 → 1456-01-01  sirp-despotlugu     ← KUSURLU PENCERE
   1689-09-24 → 1690-09-09  avusturya
d: 1386-01-01 → 1413-07-05 · 1428-01-01 → 1443-01-01
   1456-01-01 → 1689-09-24 · 1690-09-09 → 1878-07-13
```
⚠️ Ve kaydın `not:` alanı, 1413-07-05 gününün **nasıl seçildiğini**
açıkça yazıyor (TDV gün vermiyor, külliyatta var olan gün seçilmiş).
Aynı titizliği 1443 ve 1456 için de uygulayacağım.

## ① ÖNGÖRÜLER

### Ö1 · SIRP PENCERESİ 13 YIL DEĞİL, ~1 YIL ÇIKACAK
Haçlı ordusu 1443 kışında ilerledi ve **geri çekildi**; Şehirköy Sofya
yolunun üstünde, Osmanlı çekirdeğinin ortasında. Bir Sırp despotluğunun
orayı 13 yıl tutması, ölçülen tam enklav görüntüsünün ta kendisi.
```
ÖNGÖRÜ   gerçek Sırp penceresi 1443 sonu → 1444 içinde kapanıyor
         süre: 4.748 gün → ~200-500 gün
```

### Ö2 · BAŞLANGIÇ GÜNÜ 1443-11-03'E YAKIN OLACAK
Niş 3 Kasım 1443'te alındı; Şehirköy Niş'in 59 km doğusunda, aynı
harekâtın hattında.
```
ÖNGÖRÜ   1443-01-01 → 1443-11-03 (ya da birkaç hafta sonrası)
🔴 ŞART: TDV GÜN VERMİYORSA GÜN YAZMAM. Kaynak "1443 sonu" diyorsa
   1443-01-01 kalır ve gerekçesi `not:`a yazılır.
```

### Ö3 · 1456 BİR ANTLAŞMA ARTEFAKTI, GERÇEK DEĞİL
`savaslar.js` Edirne-Segedin'i **1444-06-12** kaydediyor ve *"Sırp
Despotluğu'nun toprakları iade edildi"* diyor. Veri iadeyi 12 yıl sonraya
koyuyor.
```
ÖNGÖRÜ   1456-01-01 bir DOLGU tarihidir; gerçek dönüş 1444 içinde
⚠️ KARŞI İHTİMAL (ve ölçülecek): Edirne-Segedin iadesi Şehirköy'ü
   KAPSAMAMIŞ olabilir — antlaşma despotluğun ÇEKİRDEĞİNİ (Semendire)
   iade etti, Sofya yolundaki bir kasabayı değil. O hâlde kusur ters
   yöndedir: Şehirköy 1444'te Sırp OLMAMALIYDI, hiç geçmemeliydi.
```

### Ö4 · ÖTEKİ UÇTA BOŞLUK DOĞMAYACAK (`§3.5.1`)
Şehirköy tam enklav; Sırp despotluğunun gerçek gövdesi kuzeybatıda
(Semendire, Morava). Şehirköy'ü Osmanlı'ya çekmek o gövdeden bir şey
koparmaz.
```
ÖNGÖRÜ   Sırp tarafında yeni sahipsizlik: 0
🔴 Yine de ÖLÇÜLECEK — "bu tarafta fazlalık var mı" yetmez.
```

### Ö5 · KAÇ MADDE YAZILACAK
```
ÖNGÖRÜ   2 madde: (a) Haçlı zaptı 1443 (b) Osmanlı dönüşü 1444
         Değişmez 2 kırılma sayısı: +2 kırılma, +2 madde ⇒ AÇIK 0 kalır
```

### Ö6 · DENETLE.PY
```
ÖNGÖRÜ   Değişmez 2 AÇIK sayısı DEĞİŞMEYECEK (0 → 0)
         Değişmez 1 sahipsiz sayısı DEĞİŞMEYECEK
🔴 Artarsa düzeltme YANLIŞ demektir ve geri alınır.
```

## ② MAZERETİ OLMAYAN YÖN
Ö1 *"~1 yıl"* diyor. TDV Şehirköy'ün 1443-1456 boyunca **gerçekten**
Sırp kaldığını söylüyorsa öngörü **çürümüştür** ve veri **DEĞİŞTİRİLMEZ**
— o zaman kusur veride değil, tam enklav görüntüsü **tarihî gerçeğin
kendisidir** ve öyle raporlanır.
