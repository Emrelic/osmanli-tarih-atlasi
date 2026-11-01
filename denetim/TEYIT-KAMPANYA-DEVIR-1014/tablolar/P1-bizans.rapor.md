# P1-bizans — teyit raporu (14 Ekim 2026)

Girdi: `P1-bizans.tsv`: `data/kronoloji_bizans.js`ten 70 madde, hepsinin kaynağı `el-kitabi`.
Çıktı: `P1-bizans.cikti.tsv`: 70 satır, başlık aynen.

## Hüküm sayıları

| hüküm | sayı |
|---|---|
| teyit | 33 |
| teyit-yil | 21 |
| tarih-celiski | 7 |
| teyit-edilemedi | 9 |
| **toplam** | **70** |

**tarih-celiski (madde değişmedi, karar Emre'nin):**
- [12] Bursa ablukası 1317. TDV «Osman I» 1303 diyor, TDV «Bursa» 1308 diyor.
- [14] Pelekanon 1329-06-10. TDV «Orhan»: savaşın ilk günü 1 Haziran 1329, asıl çarpışma ertesi gün.
- [20] Taç mücevherleri 1345. Kushch 2021 (doi:10.15688/jvolsu4.2021.6.14) Ağustos 1343 diyor.
- [46] Tırnova 1393-07-17. TDV «Tırnova (Bulgaristan)» ve «Bayezid I» 17 **Haziran** 1393 diyor.
- [55] Musa Çelebi kuşatması 1411-06-01. TDV «Mûsâ Çelebi» 1411 **sonbaharı** diyor.
- [59] II. Murad'ın cülûsu 1421-05-26. TDV «Murad II» 25 Haziran 1421 diyor. 26 Mayıs büyük olasılıkla I. Mehmed'in ölüm günü.
- [64] Mora'daki son Latin toprakları 1428. TDV «Mora»: Glarentza 1427, Patras 1430.

## Kaynaklar
- **TDV İslâm Ansiklopedisi (A)** — 32 satırda birincil kaynak. Okunan maddeler: Bizans (ham), Murad I, Bayezid I, Mehmed I, Murad II, Mehmed II, Mûsâ Çelebi, Orhan, Osman I, Bursa, İzmit, Selânik, Tırnova (Bulgaristan), Anadoluhisarı, Rumelihisarı, Mora, Ceneviz, İstanbul (ilk 100 bin karakter), Atina, Galata.
- **Encyclopaedia Britannica (B)** — 14 satır: Michael VIII, Andronicus II, Andronicus III, Andronicus IV, John V, John VI, John VIII, Manuel II, Constantine XI, Stefan Dušan, Roger de Flor, Gennadios II, Amadeus VI. Hepsi ham olarak curl ile okundu.
- **A. A. Vasiliev, History of the Byzantine Empire (University of Wisconsin Press, 1952)** (A, UNIV-YAYIN deseni). Metin ellopos.net'teki barındırmadan okundu.
- **TABLODA-YOK** — önerilen kodlar:
  - `FHW`: Foundation of the Hellenic World, «Chronos» Geç Bizans siyaset bölümleri, pegasos.fhw.gr. Araştırma kurumu; B olarak önerilir. 5 satırda kullanıldı.
  - `EEOC-WILEY`: McGuckin (ed.), *The Encyclopedia of Eastern Orthodox Christianity*, Wiley-Blackwell. Tabloda yalnız `wiley.com` URL deseni var.
  - `GRBS`: *Greek, Roman, and Byzantine Studies*, Duke Üniversitesi'nin hakemli dergisi.
- Hakemli dergi (HAKEMLI-DERGI, DOI ile): Kushch 2021.

## Zorluklar
- **Kabuk erişimi oturumun ortasında kapandı.** Ana oturum başka bir worktree'ye geçince Bash ve PowerShell "farklı worktree" gerekçesiyle reddedilmeye başladı. Bu yüzden:
  - Ham olarak (curl/urllib) doğrulanabilenler yalnız şunlar: TDV «Bizans» ve yukarıdaki Britannica sayfaları.
  - Öteki TDV maddeleri, Vasiliev ve FHW yalnız **WebFetch** ile okundu. Rakam taşıyan cümleler alıntı olarak istendi; Pelekanon ve Tırnova iki kez okundu, aynı rakam geldi.
  - [59]'da TDV «Mehmed I» ölüm tarihini de 25 Haziran 1421 olarak döndürdü. Bu bir WebFetch karışıklığı olabilir, hamdan doğrulanmalı.
- **Britannica** önce curl ile 403/200 arasında gidip geldi; yeniden denemeyle açıldı. WebFetch ile ise hep 403 verdi. Bu yüzden Palamas, Hesychasm, Catalan Company, Plethon ve John VII maddeleri okunamadı.
- **TDV'de olmayan konular:** Bizans'ın iç ve kilise tarihi (1283 ve 1285 sinodları, Hesykhast sinodları, Zelotlar, Kara Ölüm, Ceneviz savaşı). Bunlarda Vasiliev, FHW ve EEOC'ye başvuruldu.
- **Gün düzeyinde zayıflık:** 21 satır `teyit-yil`. Günlerin büyük kısmı Vikipedi'den alınmış görünüyor.
- **TDV maddeleri birbiriyle çelişiyor** (her biri `not`ta yazılı):
  - Filibe: «Bizans» 1363, «Murad I» 765/1364 diyor.
  - Edirne'nin başşehir olması: «Bizans» 1363, «Murad I» 770/1369 diyor.
  - Anadoluhisarı: 1390-91, 1394-95 ve 1396-97 olmak üzere üç ayrı tarih var.
- **Bot korumasına takılanlar:** HAL (Congourdeau). Aşılmaya çalışılmadı.

## Süre
Yaklaşık 1 saat 20 dakika. Başlangıç 15:03; bitiş saati kabuk kapalı olduğu için ölçülemedi.
