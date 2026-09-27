# D239 — Dağıtım yazmakla bitmez: teslim, ALICININ UYANMASIYLA ölçülür

**27-28 Eylül 2026 · paket 0080 dağıtımı · YILDIRIM BAYEZIT**

## Ne oldu

`parti-emrelic-0080`in 30 maddesi yedi sınıfa ayrıldı ve on iki oturuma
dağıtıldı. Dağıtım "yapıldı" sayıldı, çünkü doğru ölçüm yapılmıştı:

```
✓ 12 mesaj tahtaya yazıldı            M-5314 … M-5325
✓ HEPSİ tahta.json'dan GERİ OKUNDU    kısalma yok (§7.1 ⑤b uygulandı)
```

Emre sordu: *"dağıttı isen neden başlamıyor bu hazır kıtalar."* Ölçüm:

```
🔴 45 oturumun HİÇBİRİNDE 17:30'dan sonra etkinlik YOK
   mesajlar 23:45–00:10 arasında yazılmıştı ⇒ TESLİM SIFIR
```

## Kök sebep — iki katman, ve ikincisi görünmez

**① Bekçiler ölmüş.** Üç oturum kendiliğinden bildirmişti: *"tahta bekçisi
127 koduyla kapandı, yeniden kurdum."* §7.2 zaten söylüyor: *"tahta mesajı
DURAN oturumu uyandırmaz — yalnız bekçisi açık olanı uyandırır."*

**② 127'nin sebebi bekçi betiği DEĞİL.** Betik koşturuldu, sağlam çıktı
(`[BEKCI] nöbette · 60 sn`). Sonra kabuğun kendisi ele verdi:

```
$ git log --oneline -3 | cat
/usr/bin/bash: line 1: cat: command not found     ← ÇIKIŞ 127

$ for c in cat sed grep wc py git ls tail head; do command -v $c; done
YOK cat · YOK sed · YOK grep · YOK wc · YOK py · VAR git · YOK ls · YOK tail · YOK head
```

**Kabuğun `PATH`i boşalmış.** `py` bulunamıyor ⇒ arka plana kurulan
`py arac/tahta_bekci.py …` satırı **anında** 127 ile ölüyor. Yani bütün
bekçiler aynı sebepten, sessizce, hep birden öldü.

Çare (her kabukta, iş yapmadan önce):
```bash
export PATH="/usr/bin:/bin:/mingw64/bin:/c/Windows/System32:/c/Windows:$PATH"
```
⚠️ `py.exe` **`C:\Windows`tadır, `System32`de DEĞİL** — yalnız System32
eklenirse `py` hâlâ bulunamaz ve aynı 127 döner. (Bu tuzağa da düşüldü:
ilk düzeltmede System32 yazıldı, `py -V` yine patladı.)

## Dersin kendisi

📌 **Bir dağıtımın tamamlandığı, mesajın YAZILMASIYLA değil ALICININ
UYANMASIYLA ölçülür.** `§7.1 ⑤b` *"yazıldı teslim kanıtı değildir"* diyor
ve ben onu **tahta dosyası için** uyguladım — mesajın metnini geri okudum —
ama **uyanma için** uygulamadım. Yarım uygulanan bir kural, uygulanmış
sanıldığı için uygulanmamış olandan daha tehlikelidir: ölçüm yapıldığı
duygusu denetimi kapatır.

**Ölçüt tek satırdır ve ucuzdur:**
```
dağıtımdan sonra  list_sessions → lastActivityAt
alıcıların hiçbiri dağıtım saatinden SONRA etkin değilse DAĞITIM OLMAMIŞTIR
```

## İkinci ders — "127" bir teşhis değil, bir SORU

Üç oturum *"bekçi 127 verdi, yeniden kurdum"* dedi ve koordinatör (ben)
bunu bir **arıza raporu** olarak değil bir **bilgi notu** olarak okudum.
Oysa 127 = "komut bulunamadı" ve bu tek başına *"ortamda bir şey
kayıp"* demektir. Üç ayrı oturumun aynı kodu bildirmesi tesadüf
olamazdı — `§7.1 ⑥` (aksaklık beklemez) işçi tarafında ÇALIŞTI,
koordinatör tarafında çalışmadı.

⚠️ Ve işçiler "yeniden kurdum" dediği için sorun kapanmış GÖRÜNDÜ.
Kırık bir ortamda yeniden kurmak, aynı 127'yi yeniden üretmekten
başka bir şey değildi.

## Üçüncü ders — `send_message` de tek başına yetmiyor

Duran oturuma görev `send_message` ile gider (§7.2). On gönderimin
sonucu ölçüldü:

```
✓ TESLİM  5   ARAYUZ-0077-B · ARAYUZ-0077 · KUNYE-ANADOLU-0081
              FETIH-1453-0081 · ACILIS-ANIM-0081
🔴 ULAŞMADI 5  "gave no sign of starting within 20s (may be waiting for
              approval there)" — §7.2: onay penceresini yalnız Emre açar
⏳ SINIR      tur başına 10 gönderim; kalan 2 gönderilemedi
```

⇒ Üç kanalın üçü de kısmî: tahta bekçisiz oturuma ulaşmaz ·
`send_message` onay penceresindekine ulaşmaz · ve tur başına
sayılıdır. **Dağıtım bir mesaj değil, bir DOĞRULAMA döngüsüdür.**

📌 Ve tersi de doğru çıktı: uyanan `KORIDOR-0081` bir turda 11 maddelik
sınıfın ölçütünü, 10 vakanın hükmünü ve 7 yan bulgu teslim etti. Yani
kayıp haberleşmedeydi, kapasitede değil.

## Aynı aile

`D222` (nöbetçi altyapıyla ölür) · `D226` (kanal = tahta; ekrana yazılan
rapor koordinatöre ulaşmaz) · `D228` (duran oturum ölü değildir, cevabı
sıkışmış olabilir) · `D235` (bir dizinin VAR OLMASI içinin dolu olması
değildir) · `B9` (`0 bulundu` aletin ateşlendiğinin kanıtı değildir).
