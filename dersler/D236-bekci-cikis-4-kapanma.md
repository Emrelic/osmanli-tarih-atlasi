# D236 — Bekçinin "çıkış kodu 4"ü bir kusur değil, bilgisayarın KAPANMASIDIR

**Slogan:** Dört oturumda aynı çıkış kodu tesadüf değildi — ama sebebi alette değil,
kapatma düğmesindeydi. *Sistemik ≠ aletin kusuru.*

## Vaka (27 Eylül 2026, paket 0077 dağıtımı öncesi)

Koordinatör dört ayrı oturumda aynı satırı gördü:
`Background command "Re-arm watcher" failed with exit code 4`
(kendi bekçisi `brjq1tzjw` + üç işçi oturumu). "Tesadüf değil, **sistemik
kusur**; `tahta_bekci.py`nin ya da onu kuran kalıbın arızası" diye kuyruğa
yazdı ve dokuz kolu dağıtmayı bu ölçüm bitene kadar erteledi.

**Erteleme doğruydu, teşhis yanlıştı.** Ölçüm:

```
① tahta_bekci.py'de "return 4" YOK — betiğin çıkış kodları yalnız 0 ve 2
② dört çıktı dosyasının dördü de "nöbette" satırını basmış, sonra SESSİZCE düşmüş
③ üçü 23 Eylül 19:01:58 – 19:02:02 arasında, DÖRT SANİYE içinde öldü
④ Windows System kütüğü, aynı saniyeler:
     23.09 19:01:57  User32 Id=1074   "kapat öğesini başlattı · Kapatma Türü: kapat"
     23.09 19:02:16  Kernel-Power 109 "kapatma geçişi başlattı"
     26.09 00:20:34  User32 Id=1074   (koordinatörün bekçisi de TAM bu saniyede)
```

⇒ **Çıkış kodu 4 = Windows'un kapanırken süreci sonlandırması.** Alette
düzeltilecek hiçbir şey yok. Son iki günde üç kapanma oldu (26 Eyl 00:20 ·
26 Eyl 18:29 · 27 Eyl 01:42) ve her biri o an yaşayan BÜTÜN bekçileri öldürdü.

## Niçin bu ders yazıldı — iki ayrı tuzak

**① "Sistemik" kelimesi teşhis değildir.** Dört oturumda aynı kodu görmek
gerçekten tesadüf değildi; ama "tesadüf değil" ile "aletin kusuru" arasında
bir ölçüm vardır. O ölçüm yapılmasa dokuz şartnameye *"bekçi arızalı, dikkat"*
yazılacak ve dokuz oturum var olmayan bir kusuru arayacaktı.

**② Sonucu hafif değil — kural gerektiriyor.** Bekçi kapanmayı aşamaz:
```
bilgisayar kapanır  →  bütün bekçiler ölür  →  bütün oturumlar SAĞIR
sağır oturum tahta mesajıyla UYANMAZ (§7.2 ⚠️) → görev send_message ister
```
⇒ **Her açılıştan sonra bekçi yoklaması yapılır.** Ve işçi şartnamesinde
şu satır bulunur: *"bekçin kod 4 ile düştüyse sebep bilgisayarın kapanmasıdır,
senin kusurun değil — sessizce yeniden kur, ekrana yazma (`§7.2 ④`)."*
Aksi hâlde her açılıştan sonra dokuz oturum aynı yanlış teşhisi yazar.

## Bağlı çelişki — çözülmedi, işaret edildi

`tahta_bekci.py`nin kendi belgesi (16 Ağustos) *"Bu betiği MONITOR aracıyla kur,
kabuğun arka planına ATMA"* diyor; `CLAUDE.md §7.2 ④` (22 Eylül) *"Bash
`run_in_background`, Monitor DEĞİL"* diyor. İkisi zıt. Yürürlükte olan yeni
olandır (`§7.2 ④`, gerekçesi ölçülmüş: Monitor 30 dk'da dolup boşuna uyandırır),
ama **betiğin docstring'i hâlâ eski kuralı öğretiyor** ve onu okuyan oturum
yanlış kapıyı kurar. Kalem `YAPILACAKLAR.md`de.

📌 Aile: [`D201`](D201-petek-motoru-sayilar-logdan.md) (sayı logdan okunur,
yorumdan değil) · "ölçüm doğru, çıkarım yanlış" ailesi (`CLAUDE.md §11`).
