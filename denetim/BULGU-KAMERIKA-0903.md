# BULGU â€” KUZEY AMERÄ°KA Â· DUNYA-KAMERIKA-0903

**Oturum:** DUNYA-KAMERIKA-0903 Â· **KoordinatÃ¶r:** 1.MURAT
**Tarih:** 3 EylÃ¼l 2026 Â· **Kutu:** 15-72K / 170B-52B
**Tur:** ARAÅTIRMA â€” `data/` altÄ±na **yazÄ±lmadÄ±** (koÅŸu canlÄ±ydÄ±, PID 1268)
**Oturum kimliÄŸi:** `local_d7327e89-cf33-4ab3-a1f8-f09ea28be814`

---

> ## âš ï¸ BU RAPOR Ä°KÄ° AÅAMALIDIR â€” Â§1-12 ARAÅTIRMA TURU, Â§13 SONRASI
> Â§1-12 boÅŸluk Ã¶lÃ§Ã¼mÃ¼ ve aday listesi turunu anlatÄ±r ve o turun
> bittiÄŸi andaki durumu gÃ¶sterir. **O turdan sonra iÅŸ devam etti:**
> 43 kÃ¼nye reÃ§etesi Â· 377 zincir Â· 11 kronoloji maddesi Â· 8 kabile
> kararÄ± Â· 3 kÃ¼nye dÃ¼zeltmesi yazÄ±ldÄ±. Hepsi **Â§13**tedir.
> ğŸ“Œ Â§1-12'yi SÄ°LMEDÄ°M, damgaladÄ±m â€” `Â§3.5.1`in *"bir vakayÄ± silmek
> dersi de siler; damgalamak dersi korur"* kuralÄ±. Ama Â§9'un bitiÅŸ
> Ã¶lÃ§Ã¼tÃ¼ tablosu Â§13.5'te **yenilenmiÅŸtir**; ikisi Ã§eliÅŸirse **Â§13.5
> geÃ§erlidir.**

## 0. TESLÄ°M â€” tek satÄ±rda

```
2351 â†’ 149     (1Â° Ä±zgara Â· %84,6 â†’ %5,4)     KAPANAN 2202 hÃ¼cre
 575 â†’  19     (2Â° Ä±zgara Â· %83,1 â†’ %2,7)     KAPANAN  556 hÃ¼cre
377 aday Â· Ã¶n sÄ±nav KIRMIZI 0 Â· kara sÄ±navÄ± KIRMIZI 0
kalan 149'un 143'Ã¼ Arktik/Subarktik Ã§orak Â· 3'Ã¼ kutu dÄ±ÅŸÄ± yerleÅŸimle kapanÄ±r
```

**Ã‡Ä±ktÄ± dosyalarÄ±** (hepsi bu klasÃ¶rde):
| dosya | ne |
|---|---|
| `ADAY-KAMERIKA-0903.json` | **377 aday**, makine okunur â€” yazÄ±m turunun girdisi |
| `KALAN-KAMERIKA-0903.json` | kapanmayan 149 hÃ¼cre, koordinatÄ±yla |
| `ARAC-KAMERIKA-0903-olc.py` Â· `-dene.py` Â· `-kara-sina.py` Â· `-birlestir.py` | Ã¶lÃ§Ã¼m aletleri, koÅŸulabilir (proje kÃ¶kÃ¼nden) |

---

## 1. TABAN â€” devraldÄ±ÄŸÄ±mÄ± Ã¶lÃ§tÃ¼m, TUTTU

Åartname `692 kara Â· 575 AÃ‡IK Â· %83,1` diyordu. Kendi aletimle
(`ne_10m_land.geojson` + `TAVAN 200 km`, `_dunya_bosluk.py` ile aynÄ± yÃ¶ntem)
Ã¶lÃ§tÃ¼m:

```
692 kara hÃ¼cresi Â· 575 AÃ‡IK Â· %83,1     â† ÃœÃ‡ SAYININ ÃœÃ‡Ãœ DE BÄ°REBÄ°R
kutumdaki baÄŸlÄ± nokta: 98
en uzak hÃ¼cre: 2431 km @ 66,0K 91,0B â€” en yakÄ±n noktasÄ± QUEBEC
```

ğŸ“Œ DevraldÄ±ÄŸÄ±m Ã¶ncÃ¼lÃ¼ doÄŸrulamadan Ã¼stÃ¼ne inÅŸa etmedim (`Â§7.1 â‘¦`).

---

## 2. ğŸ”´ BULGU 1 â€” KÃœMELEME: bu bir tamamlama deÄŸil, KITA KURMA iÅŸi

575 aÃ§Ä±k hÃ¼crenin daÄŸÄ±lÄ±mÄ±na bakÄ±nca iÅŸ tarifi deÄŸiÅŸti:

```
KÃœME 1   568 hÃ¼cre   30-70K / 167B-53B      â† TEK PARÃ‡A
KÃœME 2-6   7 hÃ¼cre   Tamaulipas 2 Â· Florida 2 Â· Sonora 1 Â· Panhandle 1 Â· GrÃ¶nland 1
```

â‡’ Meksika ve Karayip kuÅŸaÄŸÄ± doluyken **kÄ±tanÄ±n kuzeyinin tamamÄ±** â€”
Kanada Â· Alaska Â· ABD'nin iÃ§i ve batÄ±sÄ± Â· GrÃ¶nland'Ä±n batÄ± kÄ±yÄ±sÄ± â€” **tek
parÃ§a boÅŸluktu.** 98 noktanÄ±n Ã§oÄŸu 15-35K bandÄ±nda toplanmÄ±ÅŸtÄ±.

Bu, "eksikleri tamamla" deÄŸil, **"bir kÄ±tanÄ±n yerleÅŸim aÄŸÄ±nÄ± baÅŸtan kur"**
iÅŸidir; parti bÃ¼yÃ¼klÃ¼ÄŸÃ¼nÃ¼ (377) belirleyen ÅŸey budur.

---

## 3. ğŸ”´ğŸ”´ BULGU 2 â€” 2Â° IZGARA GERÃ‡EÄÄ° SAKLIYOR (kendi raporumu dÃ¼zelttim)

KapanmayÄ± Ã¶nce 2Â° Ä±zgarayla Ã¶lÃ§tÃ¼m ve koordinatÃ¶re **%2,9** diye
bildirdim (M-2371). Sonra 1Â° ile koÅŸtum:

```
                  kara     Ã–NCE aÃ§Ä±k        SONRA aÃ§Ä±k
2Â° Ä±zgara          692     575  %83,1        19   %2,7
1Â° Ä±zgara         2780    2351  %84,6       149   %5,4
                          ~aynÄ±            Ä°KÄ° KAT
```

**TABAN neredeyse aynÄ±** (%83,1 â†” %84,6) â€” bu, iki aletin aynÄ± ÅŸeyi
Ã¶lÃ§tÃ¼ÄŸÃ¼nÃ¼n kanÄ±tÄ±. Ama **KALAN iki kat**, Ã§Ã¼nkÃ¼ 2Â° Ä±zgara her ikinci
dereceyi Ã¶rnekler ve **aralarÄ±ndaki boÅŸluÄŸu hiÃ§ gÃ¶rmez.** Kapanma
ilerledikÃ§e boÅŸluk incelir ve incelen boÅŸluÄŸu kaba Ä±zgara kaÃ§Ä±rÄ±r.

â‡’ **Izgara, tabanÄ± Ã¶lÃ§erken masum; KALANI Ã¶lÃ§erken deÄŸil.**
ğŸ“Œ AFRIKA aynÄ± farkÄ± %0,3 Ã¶lÃ§tÃ¼, ben %2,7 Ã¶lÃ§tÃ¼m â€” **aynÄ± alet, iki
kutuda dokuz kat farklÄ± hata.** Sebep aletin deÄŸil coÄŸrafyanÄ±n: Afrika'nÄ±n
boÅŸluÄŸu kÃ¼tlesel, Kuzey Amerika'nÄ±nki ince ve daÄŸÄ±nÄ±k.

ğŸŸ¢ **Ã–NERÄ° (koordinatÃ¶re M-2374 ile gitti):** programÄ±n **bitiÅŸ Ã¶lÃ§Ã¼tÃ¼ 1Â°**
olsun; 2Â° yalnÄ±z kaba tarama ve bÃ¶lgeler arasÄ± kÄ±yas iÃ§in.

âš ï¸ DÃ¼zeltmeyi iÅŸi bitirince deÄŸil, **Ã¶lÃ§tÃ¼ÄŸÃ¼m anda** bildirdim â€” Ã§Ã¼nkÃ¼
koordinatÃ¶r benim %2,9'uma gÃ¶re baÅŸka oturumlara sÄ±ra kuruyordu.

---

## 4. ADAY LÄ°STESÄ° â€” 377 kayÄ±t, altÄ± parti

| parti | n | hedef |
|---|---|---|
| 1 | 181 | Rus AmerikasÄ± Â· HBC/NWC aÄŸÄ± Â· Yeni Fransa Â· Arktik Ä°nuit Â· ABD iÃ§i/batÄ±sÄ± |
| 2 | 81 | 1. partinin bÄ±raktÄ±ÄŸÄ± 33 kÃ¼menin hedefleri |
| 3 | 56 | Boreal orman Â· Barren Grounds kenarÄ± Â· BÃ¼yÃ¼k Havza Â· Yayla |
| 4 | 11 | 2Â°'de kalan son adresli kÃ¼meler (Bella Coola Â· Fond du Lac Â· Caniapiscauâ€¦) |
| 5 | 26 | 1Â° Ä±zgaranÄ±n aÃ§tÄ±ÄŸÄ± yeni kÃ¼meler |
| 6 | 12 | son tur â€” Old Crow Â· Vincennes Â· Occaneechi Â· Tukudekaâ€¦ |
| *(ÅŸerit)* | *10* | *15-25K bandÄ± â€” **AYRI TUTULDU**, bkz. Â§7* |

### Kaynak kÃ¼tÃ¼kleri

| n | kÃ¼tÃ¼k |
|---|---|
| 138 | **Smithsonian, Handbook of North American Indians** (c.5 Arctic Â· 6 Subarctic Â· 7 NW Coast Â· 8 California Â· 9-10 Southwest Â· 11 Great Basin Â· 12 Plateau Â· 13 Plains Â· 14 Southeast Â· 15 Northeast) |
| 86 | **Historical Atlas of Canada** (University of Toronto Press) |
| 21 | **Dictionary of Canadian Biography** (Toronto / Laval) |
| 19 | **Weber, The Spanish Frontier in North America** (Yale UP) Â· *The Mexican Frontier 1821-1846* (UNM Press) |
| 12 | **Black, Russians in Alaska** (University of Alaska Press) |
| 10 | **Cambridge History of Latin America** (CUP) â€” yalnÄ±z ÅŸerit |
| 9 | Naske & Slotnick, *Alaska: A History* |
| 5 | Usner (UNC Press) Â· Trigger, *The Children of Aataentsic* (McGill-Queen's UP) |
| 3 | Steward, *BAE Bulletin 120* Â· Gubser, *The Nunamiut Eskimos* (Yale UP) Â· Birket-Smith, *The Caribou Eskimos* |
| 1 | GullÃ¸v (ed.), *GrÃ¸nlands forhistorie* |

Hepsi `Â§4`Ã¼n **ğŸŸ¢ KABUL** kÃ¼mesinden: Ã¼niversite yayÄ±nÄ± Â· alanÄ±n standart
el kitabÄ± Â· birincil kaynak neÅŸri. **ğŸ”´ KULLANILMAZ** kÃ¼mesinden (forum Â·
blog Â· iÃ§erik Ã§iftliÄŸi Â· kaynaksÄ±z derleme) hiÃ§bir ÅŸey yok.

TDV bu coÄŸrafyayÄ± **kapsamÄ±yor** â€” `Â§4`Ã¼n *"TDV'nin kapsamadÄ±ÄŸÄ±
coÄŸrafyalar iÃ§in standart akademik referans yeterlidir"* dalÄ±. ÅartÄ± da
yerine getirildi: her kaydÄ±n `kaynak_reg` alanÄ± **dolu**, hiÃ§biri boÅŸ
bÄ±rakÄ±lmadÄ±.

### ğŸ”´ Ã–LÃ‡MEDÄ°ÄÄ°MÄ° `Ã¶lÃ§medim` DÄ°YE YAZIYORUM

> Bu kÃ¼tÃ¼kler alanÄ±n standart akademik referanslarÄ±dÄ±r ve kayÄ±tlar
> onlardan gelmektedir. **Ama 377 kÃ¼nyenin her birini bu oturumda tek tek
> Ã§ekip doÄŸrulamadÄ±m.** YaptÄ±ÄŸÄ±m ÅŸey, alanÄ±n standart literatÃ¼rÃ¼nden bir
> aday kÃ¼mesi kurmak ve onu **Ã¶lÃ§Ã¼lebilir** hÃ¢le getirmektir.
>
> â‡’ **YazÄ±m turu her kaydÄ±n kuruluÅŸ gÃ¼nÃ¼nÃ¼ ve koordinatÄ±nÄ±, adÄ± geÃ§en
> cilde bakarak teyit etmelidir.** Bu rapor bir aday listesidir, bir
> doÄŸrulama tutanaÄŸÄ± deÄŸildir.

ğŸ“Œ `Â§11`: *"Ã¶lÃ§Ã¼lmemiÅŸ her cÃ¼mle aÃ§Ä±kÃ§a iÅŸaretlenir ya da yazÄ±lmaz."*
Bu damga olmadan liste, Ã¶lÃ§Ã¼lmÃ¼ÅŸ sanÄ±lÄ±rdÄ± â€” yanÄ±ndaki 2202'lik kapanma
sayÄ±sÄ± **kendi gÃ¼venilirliÄŸini ona Ã¶dÃ¼nÃ§ verirdi.**

---

## 5. ÃœÃ‡ SINAV â€” hepsi KIRMIZI 0

```
â‘  3 KM   baÄŸlÄ± evrende (2731 nokta)              0
         adaylarÄ±n KENDÄ° iÃ§inde (377Ã—377)        0
â‘¡ KUTU   15-72K / 170B-52B dÄ±ÅŸÄ±na taÅŸan          0
â‘¢ AD     baÄŸlÄ± evrenle Ã§akÄ±ÅŸan ad                0
         adaylar arasÄ±nda mÃ¼kerrer ad            0
```

### ğŸŸ¢ VE DÃ–RDÃœNCÃœ BÄ°R SINAV YAZDIM â€” ve gerÃ§ek bir hata buldu

ÃœÃ§ sÄ±nav ÅŸartnamede yazÄ±lÄ±ydÄ±. DÃ¶rdÃ¼ncÃ¼sÃ¼nÃ¼ kalan hÃ¼creler Ã¶nerdi:
1Â° Ä±zgarada `54,5K 164,5B` hÃ¼cresi **395 km** uzaklÄ±kla aÃ§Ä±k kalmÄ±ÅŸtÄ± â€”
oysa oraya **Unalaska** yazmÄ±ÅŸtÄ±m. Bir aday doÄŸru yazÄ±ldÄ±ÄŸÄ± hÃ¢lde hÃ¼cresini
kapatmÄ±yorsa **koordinatÄ± yanlÄ±ÅŸtÄ±r.**

â‡’ `ARAC-KAMERIKA-0903-kara-sina.py`: her aday `ne_10m_land` maskesinin
Ã¼stÃ¼nde mi?

```
ğŸ”´ Unalaska (Iliuliuk)   57,870B â†’ maskeye 210,4 km   DENÄ°ZÄ°N ORTASINDA
   doÄŸrusu 53,870        (parmak kaymasÄ±: 3 â†’ 7)
   377 adayÄ±n KALANI     hepsi â‰¤ 7,4 km â€” kÄ±yÄ±/ada, maske Ã§Ã¶zÃ¼nÃ¼rlÃ¼ÄŸÃ¼
```

ğŸ“Œ **Ä°ki baÄŸÄ±msÄ±z iÅŸaret aynÄ± hatayÄ± gÃ¶sterdi:** kapanmayan bir hÃ¼cre ve
kara maskesi. Tek baÅŸÄ±na ikisi de zayÄ±ftÄ±; birlikte kesindi.
ğŸ“Œ Ve ders `C13`Ã¼n Ã¼Ã§Ã¼ncÃ¼ ayaÄŸÄ±: bir denetim yazarken **hangi kusur
sÄ±nÄ±fÄ±nÄ± hedeflediÄŸini** de sormak gerekiyor. ÃœÃ§ sÄ±nav "mÃ¼kerrer mi Â·
kutuda mÄ± Â· adÄ± Ã§akÄ±ÅŸÄ±yor mu" diye soruyordu; **"gerÃ§ekten orada mÄ±"**
diye soran yoktu â€” ve gerÃ§ekleÅŸmiÅŸ kusur tam oradaydÄ±.

â‡’ **`_baglama_onsinav.py`ye bir kara sÄ±navÄ± eklenmesini Ã¶neriyorum.**

---

## 6. KALAN 149 HÃœCRE â€” cinsi ve gerekÃ§esi

```
COÄRAFYA                                   hÃ¼cre   Ã–NERÄ°LEN CÄ°NS
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
Arktik Ã§oraklar                              109   devletsiz
  Baffin iÃ§i + Melville + Boothia    45
  Keewatin Barren Grounds            25
  Contwoyto-Point Lake Ã§oraklarÄ±      9
  Victoria AdasÄ± iÃ§i                  7
  Boothia / Prince of Wales           7
  Ã¶tekiler (Banks Â· NWT Â· Keewatin)  16
Quebec-Labrador iÃ§ platosu                    28   devletsiz
  Ungava platosu                     16
  Labrador Ã‡ukuru (Manicouagan)      10
  Ã¶tekiler                            2
Mackenzie DaÄŸlarÄ±                              4   devletsiz
Kuzey Saskatchewan KalkanÄ±                     4   devletsiz
Wyoming KÄ±zÄ±l Ã‡Ã¶l                              1   devletsiz
BatÄ± GrÃ¶nland                                  3   ğŸ”´ KUTU DIÅI â€” bkz. aÅŸaÄŸÄ±
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
TOPLAM                                       149
```

### GerekÃ§e â€” ve bunun bir Ã–NERÄ° olduÄŸu

143 hÃ¼cre iÃ§in Ã¶nerim **`neden:"devletsiz"`**, Ã§Ã¼nkÃ¼ kaynak **susmuyor**:
bu iÃ§ bÃ¶lgeleri, kalÄ±cÄ± yerleÅŸimi olmayan, **devletsiz** avcÄ± bantlarÄ±nÄ±n
mevsimlik avlaÄŸÄ± olarak aÃ§Ä±kÃ§a tarif ediyor â€” Karayer Ä°nuit Â· Denesuline Â·
Innu/Naskapi Â· BakÄ±r Ä°nuit. Baffin'in iÃ§i buz kalkanÄ±dÄ±r; Keewatin aÄŸaÃ§
sÄ±nÄ±rÄ±nÄ±n kuzeyindeki tundradÄ±r.

âš ï¸ **AMA BU BÄ°R Ã–NERÄ°, Ã–LÃ‡ÃœM DEÄÄ°L.** `devletsiz` ile `veri-yok`u ayÄ±ran
sÄ±nav **kaynaÄŸÄ±n davranÄ±ÅŸÄ±dÄ±r** (*konuÅŸuyor mu, susuyor mu*), ve ben o
ciltleri **hÃ¼cre hÃ¼cre aÃ§madÄ±m.** YazÄ±m turu her hÃ¼cre iÃ§in adÄ± geÃ§en
cildi teyit etmeli. YanlÄ±ÅŸ damga pahalÄ±dÄ±r: `devletsiz` bir hÃ¼creye bir
daha **bakÄ±lmaz.**

ğŸŸ¢ Ve bu tam olarak Emre'nin hÃ¼kmÃ¼nÃ¼n tarif ettiÄŸi yerdir:

> **"EÄER YERLEÅÄ°M VAR Ä°SE NOKTA KONUR. YOK Ä°SE UYDURACAK HALÄ°MÄ°Z YOK.
> DEVASA BOÅLUKLAR OLACAKSA OLSUN."**

149 hÃ¼crenin 143'Ã¼ **olmasÄ±nda bir kusur bulunmayan** boÅŸluktur.
Kapatmak iÃ§in oraya nokta yazmak, kuralÄ±n **ihlali** olurdu.

### ğŸ”´ BatÄ± GrÃ¶nland'Ä±n 3 hÃ¼cresi â€” kutunun kendi kusuru

```
71,5K 55,5-54,5B (2 hÃ¼cre) Â· 71,5K 52,5B (1 hÃ¼cre)
kapatacak yerleÅŸim: UPERNAVIK (1772) â€” 72,79K
kutumun kuzey sÄ±nÄ±rÄ±: 72,0K   â‡’ yerleÅŸim kutunun 0,79Â° DIÅINDA
```

Bu Ã¼Ã§Ã¼ **Ã§orak deÄŸil**; kapatacak nokta var ama **benim kutumun dÄ±ÅŸÄ±nda.**
Bu bir *`devletsiz`* deÄŸil, bir **kutu sÄ±nÄ±rÄ± kusurudur** â€” kayÄ±t olarak
bÄ±rakÄ±yorum, cins damgasÄ± **vurulmamalÄ±dÄ±r.**

---

## 7. ğŸ”´ BULGU 3 â€” KUTU Ã–RTÃœÅMESÄ° (15-25K ÅŸeridi)

1Â° Ä±zgara, 2Â°'nin hiÃ§ gÃ¶stermediÄŸi bir ÅŸeyi aÃ§tÄ±: kutumun **gÃ¼ney
ÅŸeridinde** gerÃ§ek boÅŸluklar var â€”

```
Honduras / Moskito kÄ±yÄ±sÄ±   5 hÃ¼cre Â· 597 km   â† kutumun EN BÃœYÃœK kalan boÅŸluÄŸuydu
Oaxaca kÄ±staÄŸÄ± Â· Guerrero Â· Belize Â· Huasteca Â· orta KÃ¼ba
```

Ama benim kutum **15-72K**, DALGA 2'nin *Orta Amerika+Karayip* kutusu ise
**7-25K / 118B-59B** â‡’ **15-25K / 118B-59B ÅŸeridi iki kutuya birden ait.**

Åu an o kutu kimseye verilmediÄŸi iÃ§in bu bir **Ã§akÄ±ÅŸma deÄŸil**, ama bir
**boÅŸluk riski**: ikimiz de *"Ã¶teki bakar"* diye atlayabiliriz.

ğŸŸ¢ **YaptÄ±ÄŸÄ±m:** ÅŸeridin 10 adayÄ±nÄ± (Trujillo Â· RÃ­o Tinto Â· Omoa Â· Belize
Town Â· Tehuantepec Â· Acapulco Â· Chilpancingo Â· PÃ¡nuco Â· Sancti SpÃ­ritus Â·
Santa Clara) **ayrÄ± bir dosyada** tuttum ve `ADAY-KAMERIKA-0903.json`
iÃ§inde `"serit_15_25K": true` alanÄ±yla **damgaladÄ±m.** KoordinatÃ¶r hangi
kararÄ± verirse versin (bana ver Â· Orta Amerika'ya bÄ±rak Â· bÃ¶l) liste
**tek `if` ile ayrÄ±labilir.**

ğŸ“Œ Ve bir mÃ¼kerrer Ã¶nlendi: `Puerto PrÃ­ncipe (CamagÃ¼ey)` yazacaktÄ±m â€”
atlasta **`CamagÃ¼ey bÃ¶lgesi (Taino)` olarak zaten vardÄ±, aynÄ± koordinatta.**
3 km sÄ±navÄ± yakalamadan Ã¶nce elle dÃ¼ÅŸtÃ¼.

---

## 8. ğŸ”´ BULGU 4 â€” "hiÃ§bir hÃ¼cre kapatmayan" 60 aday ELENMEMELÄ°

AdaylarÄ±n 60'Ä± (Halifax Â· Toronto Â· Baltimore Â· Los Ãngeles Â· Zuni Â·
St. Louis Â· Kaskaskia Â· Pecos Puebloâ€¦) **hiÃ§bir aÃ§Ä±k hÃ¼creyi
kapatmÄ±yor** â€” Ã§Ã¼nkÃ¼ zaten kapalÄ± bÃ¶lgelerdeler.

âš ï¸ **Bu onlarÄ± gereksiz yapmaz, ve eleyen bir sonraki oturum hata eder.**

```
KAPSAMA Ã¶lÃ§Ã¼tÃ¼ne katkÄ±sÄ±        0     (200 km tavanÄ±nÄ±n iÃ§indeler)
HARÄ°TA DOÄRULUÄUNA katkÄ±sÄ±      0 DEÄÄ°L
```

`Â§2` emilmesi 200 km'nin **altÄ±nda da** Ã§alÄ±ÅŸÄ±r: Halifax yazÄ±lmazsa Nova
Scotia'yÄ± **Port Royal'in sahibi** boyar, Los Ãngeles yazÄ±lmazsa gÃ¼ney
Kaliforniya'yÄ± **San Diego'nunki.** Ã–lÃ§Ã¼t bunu gÃ¶rmez, **kullanÄ±cÄ± gÃ¶rÃ¼r.**

ğŸ“Œ Bir Ã¶lÃ§Ã¼tÃ¼n *"katkÄ±sÄ± sÄ±fÄ±r"* demesi, *"deÄŸeri sÄ±fÄ±r"* demek deÄŸildir.
Ã–lÃ§Ã¼t kapsamayÄ± Ã¶lÃ§Ã¼yor, **doÄŸruluÄŸu deÄŸil.**

---

## 9. BÄ°TÄ°Å Ã–LÃ‡ÃœTÃœNE GÃ–RE DURUM

| ÅŸart | durum |
|---|---|
| â‘  aÃ§Ä±k hÃ¼cre Ã¶nce/sonra Ã¶lÃ§Ã¼ldÃ¼ | ğŸŸ¢ iki Ä±zgarada da, sayÄ±yla |
| â‘¡ her aÃ§Ä±k hÃ¼cre: nokta ya da cinsi yazÄ±lÄ± beyan | ğŸŸ¡ **nokta tarafÄ± hazÄ±r (377), beyan tarafÄ± Ã–NERÄ°** â€” Â§6 |
| â‘¢ her kaydÄ±n `kaynak:` alanÄ± dolu | ğŸŸ¢ 377/377 Â· ama **tek tek doÄŸrulanmadÄ±** â€” Â§4 damgasÄ± |
| â‘£ her `s:` kimliÄŸi `devletler.js`te var ve Ã¶mrÃ¼ tutuyor | ğŸ”´ **Ã–LÃ‡TÃœM â€” GEÃ‡MÄ°YOR.** `kanada` kÃ¼nyesi YOK, kuzey/batÄ± yerli kimliklerinin neredeyse hiÃ§biri YOK. Bu partinin en aÄŸÄ±r bulgusu, aÅŸaÄŸÄ± bak |
| â‘¤ `_baglama_onsinav.py` KIRMIZI 0 | ğŸŸ¡ kendi eÅŸdeÄŸer sÄ±navÄ±mda 0; **asÄ±l alet `.js` ister, ben `.js` yazmadÄ±m** |

### ğŸ”´ â‘£ SONRADAN Ã–LÃ‡TÃœM â€” ve bu partinin EN AÄIR BULGUSU Ã§Ä±ktÄ±

Raporun ilk hÃ¢linde bu satÄ±r *"Ã¶lÃ§medim, borÃ§tur"* diyordu. Sonra Ã¶lÃ§tÃ¼m,
ve iÅŸ bir borÃ§ deÄŸil bir **kapÄ±** Ã§Ä±ktÄ±.

#### Ã–nce kendi hatam â€” ve `Â§4`Ã¼n yazÄ±m ekseni beni Ä±sÄ±rdÄ±

Ä°lk hÃ¢lde *"`Ä°rokua` kÃ¼nyesi var"* diye **yazmÄ±ÅŸtÄ±m.** `devletler.js`te
`irok` diye aradÄ±m, **hiÃ§bir ÅŸey bulamadÄ±m**, ve *"kÃ¼nye yok"* diye hÃ¼kÃ¼m
verecektim. DoÄŸru yol veriden sormaktÄ±:

```
aradÄ±ÄŸÄ±m      irok Â· iroq          â†’ 0 sonuÃ§
gerÃ§ek `id:`  haudenosaunee        â†’ VAR, ve Cayuga Â· Mohawk Â· Oneida Â·
                                     Onondaga Â· Seneca ZATEN onu kullanÄ±yor
```

ğŸ“Œ `Â§4`Ã¼n *"kendi transliterasyonunu deÄŸil, gerÃ§ek `id:`yi kullan"*
kuralÄ±nÄ±n bu partideki vakasÄ± â€” ve **hÃ¼kmÃ¼ aday listesinden deÄŸil,
noktalarÄ±n kendi `s:` alanÄ±ndan okuyunca** Ã§Ä±ktÄ±.

#### Ã–lÃ§Ã¼m: kutumdaki 98 noktanÄ±n kullandÄ±ÄŸÄ± kimlikler

```
ğŸŸ¢ VAR ve KULLANILIYOR
yeni-ispanya 53 Â· meksika 49 Â· ispanya 43 Â· abd 36 Â· ingiltere 23 Â·
aztek-imparatorlugu 9 Â· maya-sehir-devletleri 9 Â· nahua-sehir-devletleri 7 Â·
fransa 7 Â· haudenosaunee 5 Â· kuba-cumhuriyeti 4 Â· dominik-cumhuriyeti 4 Â·
purepecha-imparatorlugu 3 Â· pueblo-bagimsizligi 3 Â· ingiliz-kuzey-amerika 3 Â·
hollanda 2 Â· zapotek-krallik 2 Â· cahokia Â· powhatan Â· natchez Â·
creek-konfederasyonu Â· cherokee Â· choctaw Â· komanci Â· apaci-ovalar Â·
teksas-cumhuriyeti Â· hawaii-kralligi Â· rusya
```

#### ğŸ”´ğŸ”´ VE Ä°KÄ° DELÄ°K â€” 377 aday bunlar kapanmadan YAZILAMAZ

```
â‘  `kanada` KÃœNYESÄ° YOK.
   441 kÃ¼nyenin hiÃ§birinde 'kanad'/'canad' geÃ§miyor. Kutum 1867-1923
   arasÄ± Kanada ile DOLU (Regina Â· Calgary Â· Battleford Â· Fort Macleod Â·
   Whitehorse Â· Dawson Â· Prince Albert Â· NWMP hattÄ±nÄ±n tamamÄ±) ve
   boyayacak kimlik YOK.
   â‡’ Var olan `ingiliz-kuzey-amerika` 1867'de bitmeli, `kanada`
     baÅŸlamalÄ± â€” ve o gÃ¼n (1867-07-01) `DeÄŸiÅŸmez 2` gereÄŸi MADDE ister.

â‘¡ YERLÄ° KÄ°MLÄ°KLERÄ°N NEREDEYSE HÄ°Ã‡BÄ°RÄ° YOK.
   VAR olanlar DoÄŸu ve GÃ¼ney'e ait: haudenosaunee Â· powhatan Â· cherokee Â·
   choctaw Â· creek-konfederasyonu Â· natchez Â· cahokia Â· pueblo-bagimsizligi Â·
   apaci-ovalar Â· komanci.
   YOK olanlar benim kutumun KUZEYÄ° ve BATISI â€” ve adaylarÄ±mÄ±n Ã§oÄŸu orada:
     Ä°nuit (hiÃ§: inuit Â· inupiat Â· yupik Â· nunavik ARANDI, 0)
     Dene/Atabask Â· Kri Â· Ojibwe Â· Innu/Naskapi Â· Beothuk Â· Mikmak Â·
     Maliseet Â· Abenaki Â· MÃ©tis Â· Tlingit Â· Hayda Â· TsimÅŸiyan Â· Nuxalk Â·
     Salish Â· Nez Perce Â· Klamath Â· Payut Â· ÅoÅŸoni Â· Ute Â· Navaho Â·
     Mandan Â· Hidatsa Â· Pavni Â· Karga Â· WiÃ§ita Â· Lakota/Dakota Â· Kalusa
```

âš ï¸ **Ve bu `Â§8`in doÄŸrudan ihlali olurdu:** *"`s:` iÃ§indeki devlet kimliÄŸi
`BOYALAR` sÃ¶zlÃ¼ÄŸÃ¼nde tanÄ±mlÄ± olmalÄ±; yoksa bÃ¶lge BOYANMAZ."* Kimliksiz
yazÄ±lan 377 nokta, **peteÄŸi Ã¼retir ama hiÃ§birini boyamaz** â€” yani boÅŸluk
kapanmÄ±ÅŸ GÃ–RÃœNÃœR, harita aynÄ± kalÄ±r.

#### Karar bekleyen Ã¼Ã§ soru â€” ve Ã¶lÃ§Ã¼lmÃ¼ÅŸ cevap adaylarÄ±

```
â‘  HBC bir devlet mi?    Rupert's Land 1670-1870 HBC imtiyazÄ±dÄ±r.
   â‡’ Ã–LÃ‡ÃœLDÃœ: `hudson`/`sirket`/`company` kÃ¼nyesi YOK.
     SeÃ§enek: (a) `ingiliz-kuzey-amerika`ya baÄŸla Â· (b) ayrÄ± kÃ¼nye.
     Ã–NERÄ°M (a) â€” HBC bir ÅŸirkettir, atlas TASARRUFU boyar ve
     tasarruf hukuken Britanya tacÄ±nÄ±ndÄ±.
â‘¡ Yerli kimlikler hangi TANECÄ°KTE?
   â‡’ Ã–LÃ‡ÃœLDÃœ: var olanlarÄ±n taneciÄŸi KONFEDERASYON/HALK dÃ¼zeyi
     (haudenosaunee Â· creek-konfederasyonu Â· choctaw). AynÄ± tanecik
     kuzeyde ~25 yeni kÃ¼nye demektir.
     ALTERNATÄ°F: bir kÄ±smÄ± `kasitli_bosluk` + `neden:"devletsiz"`.
     âš ï¸ Ä°kisi aynÄ± ÅŸey DEÄÄ°L: kÃ¼nye BOYAR, boÅŸluk BOYAMAZ.
â‘¢ Rus AmerikasÄ±?
   â‡’ Ã–LÃ‡ÃœLDÃœ, CEVAP HAZIR: Novoarkhangelsk (Sitka) `rusya` kullanÄ±yor.
     11 Rus AmerikasÄ± adayÄ±m da `rusya` alÄ±r. 1867-10-18 devri
     `abd`ye kÄ±rÄ±lma gÃ¼nÃ¼dÃ¼r ve `DeÄŸiÅŸmez 2` madde ister.
```

ğŸ”´ **Bu Ã¼Ã§ soru nokta yazmadan Ã–NCE cevaplanmalÄ±**, Ã§Ã¼nkÃ¼ cevap 377 kaydÄ±n
`s:` alanÄ±nÄ± belirler ve sonradan deÄŸiÅŸtirmek hepsini dolaÅŸmak demektir.
**Karar koordinatÃ¶rde**, ben soruyu Ã¶lÃ§Ã¼p cevap adaylarÄ±nÄ± Ã§Ä±kardÄ±m.

---

## 10. YAZIM TURUNA DEVÄ°R â€” sÄ±rayla

```
â‘  KÃœNYE KARARI      Â§9'daki Ã¼Ã§ soru (HBC Â· yerli kÃ¼nye taneciÄŸi Â·
                    Rus AmerikasÄ±) â€” nokta yazmadan Ã–NCE
â‘¡ KOORDÄ°NAT TEYÄ°DÄ°  377 kaydÄ±n koordinatÄ± ve kuruluÅŸ gÃ¼nÃ¼, adÄ± geÃ§en
                    cilde bakarak. kara sÄ±navÄ± bir kez daha koÅŸar.
â‘¢ CÄ°NS TEYÄ°DÄ°       kalan 143 hÃ¼cre iÃ§in `devletsiz` Ã¶nerisi doÄŸrulanÄ±r
                    (kaynak KONUÅUYOR mu? â€” Â§6)
â‘£ ÅERÄ°T KARARI      15-25K bandÄ± kimin? (Â§7)
â‘¤ YAZIM             `data/<verilecek dosya>.js` + ad alanÄ±
                    (`Â§7` â€” ayrÄ± dosya vermek ayrÄ± ad alanÄ± vermek DEÄÄ°LDÄ°R)
â‘¥ ÃœÃ‡ SINAV + KARA SINAVI, sonra koordinatÃ¶r `girdi.py`ye baÄŸlar
```

âš ï¸ **377 nokta tek partide baÄŸlanmamalÄ±.** `Â§11`: *"bir dosya baÄŸlandÄ±ÄŸÄ±
gÃ¼n, o veriye bakan BÃœTÃœN Ã¶lÃ§Ã¼m aletlerinin tabanÄ± yeniden doÄŸrulanÄ±r"* â€”
2731 â†’ 3108 (%14 bÃ¼yÃ¼me) `renk_olc.py` Â· `denetle.py` Â· `durum_tablosu.py`
tabanlarÄ±nÄ± birden kaydÄ±rÄ±r. **`renk_olc.py` Ã¶zellikle**: `Â§9`daki
*"palet verinin fonksiyonudur"* kuralÄ± gereÄŸi, hiÃ§bir renge dokunulmadan
yeni Ã§akÄ±ÅŸmalar doÄŸabilir â€” ve bu parti **20'den fazla yeni kimlik**
sahneye sokuyor.

---

## 11. BU OTURUMUN Ã–ÄRENDÄ°KLERÄ° â€” `OGRENILENLER.md` adaylarÄ±

**â‘  Bir Ä±zgara, TABANI Ã¶lÃ§erken masum, KALANI Ã¶lÃ§erken deÄŸildir.**
AynÄ± alet aynÄ± kutuda %83,1 â†” %84,6 (fark yok) ama %2,7 â†” %5,4 (iki kat)
verdi. Kapanma ilerledikÃ§e boÅŸluk incelir; **kaba Ä±zgara incelen boÅŸluÄŸu
kaÃ§Ä±rÄ±r ve iÅŸ bitmiÅŸ gÃ¶rÃ¼nÃ¼r.** Ve hata coÄŸrafyaya baÄŸlÄ±: AFRIKA'da %0,3,
burada %2,7 â€” **dokuz kat.** â‡’ *Bir Ã¶lÃ§Ã¼tÃ¼n Ã§Ã¶zÃ¼nÃ¼rlÃ¼ÄŸÃ¼, Ã¶lÃ§tÃ¼ÄŸÃ¼ ÅŸey
kÃ¼Ã§Ã¼ldÃ¼kÃ§e yeniden sorgulanÄ±r.*

**â‘¡ Kapanmayan bir hÃ¼cre, bir ADAYIN kusurunu gÃ¶sterebilir.**
`54,5K 164,5B` aÃ§Ä±k kalmÄ±ÅŸtÄ±, oysa oraya Unalaska yazÄ±lmÄ±ÅŸtÄ± â‡’ koordinat
yanlÄ±ÅŸtÄ± (210 km denizde). â‡’ *Ã–lÃ§Ã¼m yalnÄ±z "ne eksik" demez, "yazdÄ±ÄŸÄ±m
ÅŸey doÄŸru mu" da der â€” yeter ki iki iÅŸaret Ã§akÄ±ÅŸtÄ±rÄ±lsÄ±n.*

**â‘¢ Bir Ã¶lÃ§Ã¼tÃ¼n "katkÄ±sÄ± sÄ±fÄ±r" demesi, "deÄŸeri sÄ±fÄ±r" demek deÄŸildir.**
60 aday hiÃ§bir hÃ¼cre kapatmÄ±yor ama `Â§2` emilmesini 200 km'nin altÄ±nda
dÃ¼zeltiyor. â‡’ *Ã–lÃ§Ã¼t neyi Ã¶lÃ§mediÄŸini sÃ¶ylemez; onu Ã¶lÃ§Ã¼tÃ¼ kuran yazar.*

**â‘£ Ä°ki kutunun ARASI, ikisinin de iÃ§inden gÃ¶rÃ¼nmez.**
15-25K ÅŸeridi hem bende hem Orta Amerika'da; kimseye verilmediÄŸi iÃ§in
**Ã§akÄ±ÅŸma alarmÄ± Ã¶tmez** ve tam bu yÃ¼zden atlanÄ±r. â‡’ *Kutu defteri
"Ã¶rtÃ¼ÅŸÃ¼yor mu" diye soruyor; "arada kalan var mÄ±" diye de sormalÄ±.*

**â‘¤ Bir sevkin doÄŸruladÄ±ÄŸÄ± sayÄ±, sevkin TABANI olduÄŸu Ä±zgarayÄ±
doÄŸrulamaz.** Åartnamenin tablosu 2Â°ydi ve ben onu birebir tutturdum â€”
**taban doÄŸruydu, Ã¶lÃ§ek yanlÄ±ÅŸtÄ±.** â‡’ `Â§11`in *"Ã¶lÃ§Ã¼m doÄŸru, evren dar"*
ailesinin **Ã§Ã¶zÃ¼nÃ¼rlÃ¼k** yÃ¼zÃ¼: burada evren dar deÄŸil, **kaba.**

**â‘¥ "Ã–LÃ‡MEDÄ°M" DAMGASI BÄ°R SON DEÄÄ°L, BÄ°R ADRESTÄ°R â€” ve ilk aÃ§tÄ±ÄŸÄ±mda
partinin en aÄŸÄ±r bulgusu Ã§Ä±ktÄ±.**
BitiÅŸ Ã¶lÃ§Ã¼tÃ¼nÃ¼n â‘£. ÅŸartÄ±nÄ± (*"her `s:` kimliÄŸi `devletler.js`te var mÄ±"*)
Ã¶nce dÃ¼rÃ¼stÃ§e **`Ã¶lÃ§medim`** diye damgaladÄ±m ve borÃ§ yazdÄ±m. Sonra aÃ§tÄ±m:
`kanada` kÃ¼nyesi **yok**, kuzey ve batÄ± yerli kimliklerinin neredeyse
**hiÃ§biri yok** â‡’ 377 aday bugÃ¼n yazÄ±lsa `Â§8` gereÄŸi **peteÄŸi Ã¼retir ama
hiÃ§birini boyamaz.** BoÅŸluk kapanmÄ±ÅŸ **gÃ¶rÃ¼nÃ¼r**, harita **aynÄ± kalÄ±r**.
â‡’ *Bir kalemi `Ã¶lÃ§medim` diye kapatmak, onu aÃ§Ä±k tutmanÄ±n en ucuz yoludur
â€” ama yalnÄ±z gerÃ§ekten geri dÃ¶nÃ¼lÃ¼rse. Damga bir hafÄ±za, mazeret deÄŸil.*

**â‘¦ Ve aynÄ± Ã¶lÃ§Ã¼m beni Ã‡ÃœRÃœTTÃœ:** raporun ilk hÃ¢linde *"Ä°rokua kÃ¼nyesi
var"* diye yazmÄ±ÅŸtÄ±m; `irok` aramasÄ± **0** verdi ve neredeyse *"kÃ¼nye
yok"* diye hÃ¼kÃ¼m verecektim. GerÃ§ek `id:` **`haudenosaunee`**, ve beÅŸ
nokta onu **zaten** kullanÄ±yordu. â‡’ `Â§4`Ã¼n yazÄ±m ekseni: *aday listeme
deÄŸil, VERÄ°NÄ°N KENDÄ° `s:` alanÄ±na sormalÄ±ydÄ±m.* **Bir kimliÄŸin var olup
olmadÄ±ÄŸÄ±nÄ±, onu arayan deÄŸil, onu KULLANAN sÃ¶yler.**

---

## 12. DURUM BEYANI

```
âœ… ARAÅTIRMA TURUM BÄ°TTÄ° â€” boÅŸtayÄ±m, yeni iÅŸ bekliyorum.
â³ BEKLÄ°YORUM:  15-25K ÅŸeridi kararÄ± (Â§7) + kÃ¼nye kararÄ± (Â§9)
   KÄ°MDEN:      1.MURAT
   NE ZAMAN:    bir saat ses gelmezse tahtadan tekrar soracaÄŸÄ±m
```

ğŸ”´ `data/` altÄ±na **hiÃ§bir ÅŸey yazmadÄ±m** â€” koÅŸu canlÄ±ydÄ± (PID 1268) ve
`Â§7` gereÄŸi `data/` ve `arac/` ikisi de donmuÅŸtu. YazdÄ±ÄŸÄ±m her ÅŸey
`denetim/` altÄ±ndadÄ±r.

---

# 13. Ä°KÄ°NCÄ° AÅAMA â€” kÃ¼nye Â· zincir Â· madde

AraÅŸtÄ±rma turu bittikten sonra koordinatÃ¶r (`1.MURAT`) sÄ±rayla Ã¼Ã§ iÅŸ
daha sevk etti. Bu bÃ¶lÃ¼m onlarÄ± ve Ã§Ä±kan bulgularÄ± anlatÄ±r.

## 13.1 KÃœNYE REÃ‡ETESÄ° â€” 43 kÃ¼nye, Ã¼Ã§ parti

`Â§9`daki *"kÃ¼nye yok, 377 nokta yazÄ±lamaz"* teÅŸhisi doÄŸrulandÄ± ve
karÅŸÄ±lÄ±ÄŸÄ± yazÄ±ldÄ±.

| dosya | n | kapsam |
|---|---|---|
| `KUNYE-KAMERIKA-0903.json` | 16 | `kanada` Â· `inuit` Â· `dene` Â· `kri` Â· `ojibwe` Â· `metis` Â· `lakota` Â· `navaho` Â· `nez-perce` Â· `hayda` Â· `tlingit` Â· `vendat` Â· `beothuk` Â· `savni` Â· `miami` Â· `sauk` |
| `-parti2.json` | 14 | `abenaki` Â· `mikmak` Â· `maliseet` Â· `cikasav` Â· `sosoni` Â· `ute` Â· `mandan` Â· `hidatsa` Â· `karga` Â· `pavni` Â· `wicita` Â· `aleut` Â· `alutiiq` Â· `yupik` |
| `-parti3.json` | 13 | `zuni` Â· `nuxalk` Â· `secwepemc` Â· `nuu-cah-nulth` Â· `kalusa` Â· `mohave` Â· `klamath` Â· `sahaptin` Â· `ponka` Â· `occaneechi` Â· `etowah` Â· `moundville` Â· `spiro` |
| `-BEKLEYEN.json` | 17 | yazÄ±lmayanlar, sebep + aday tarih + damgayla |
| `-KABILE.json` | 8 | `M-2425` teritoryal sÄ±navÄ±nÄ± geÃ§emeyenler ve her birinin kararÄ± |
| `-DUZELTME.json` | 3 | **yeni kÃ¼nye deÄŸil**, mevcut kÃ¼nyelerde dÃ¼zeltme |

**Tarih damgalarÄ±:** 43'Ã¼nÃ¼n hiÃ§birinde `ğŸ”´ DAYANAKSIZ` yok.
26'sÄ± gÃ¼n-kaynaklÄ±, kalanÄ± `YYYY-01-01` (`Â§4`). **Uydurma gÃ¼n yazÄ±lmadÄ±.**

ğŸŸ¢ **`M-2498`in ekseni tuttu:** 43 kÃ¼nyenin 22'sinin `t:` gÃ¼nÃ¼
**sÃ¶mÃ¼rgecinin** takviminden geliyor â€” antlaÅŸma (Greenville Â· Fort
Laramie Â· Fort Bridger Â· NumaralÄ± AntlaÅŸma 6 ve 8 Â· Robinson-Superior Â·
Pontotoc Creek Â· Dummer Â· Table Creek), sefer sonu (Bear Paw Â· Wounded
Knee Â· Batoche Â· Bad Axe) ya da idarÃ® devir (Alaska 1867-10-18 Â· Arktik
TakÄ±madalar 1880-09-01 Â· BK Kolonisi 1858-08-02).
âš ï¸ **Tek istisna `beothuk`:** `t:1829-06-06` bir devir deÄŸil,
Shanawdithit'in Ã¶ldÃ¼ÄŸÃ¼ gÃ¼n â€” halkÄ±n kendisinin sonu. `not:` alanÄ±nda
ayrÄ±ca yazÄ±ldÄ± ki okuyan karÄ±ÅŸtÄ±rmasÄ±n.

## 13.2 ZÄ°NCÄ°R â€” 377 nokta Â· 735 dÃ¶nem Â· hayalet 0

`ZINCIR-KAMERIKA-0903.json` Â· alet `ARAC-KAMERIKA-0903-zincir.py`.

ğŸ”´ **En Ã¶nemli bulgu, kimse sormadan Ã§Ä±ktÄ±:** aday listesindeki
`s_oneri` yalnÄ±z **baÅŸlangÄ±Ã§larÄ±** taÅŸÄ±yordu ve **yerli kÃ¼nyelerin
ardÄ±lÄ± yoktu.** Ã–yle bÄ±rakÄ±lsaydÄ± her yerli nokta 1923'e kadar kendi
kÃ¼nyesiyle boyanÄ±rdÄ± â€” oysa kÃ¼nyelerin `t:`si 1450-1899 arasÄ±nda biter
â‡’ `Â§3.5` **HAYALET DEVLET**, bu projenin *"denetimin gÃ¶rmediÄŸi hata
sÄ±nÄ±fÄ±"*.

**Hayalet sÄ±navÄ±nÄ±n kÄ±rÄ±lÄ±mÄ± â€” ve ilk iki adÄ±m BENÄ°M ALETÄ°MÄ°N kusuruydu:**
```
89 â†’ 61   â‘´ Ã¼Ã§ haneli yÄ±l tuzaÄŸÄ±: `fransa` f=987, sÃ¶zlÃ¼ksel kÄ±yasta
             "1600-01-01" < "987-01-01" â‡’ 28 SAHTE hayalet
             (M-2396 bunu bana YAZILI olarak sÃ¶ylemiÅŸti)
   â†’ 30   â‘µ selef/halef onarÄ±mÄ±: dÃ¶nem kÃ¼nyenin Ã¶mrÃ¼ne oturtuldu
   â†’ 22   â‘¶ iki gerÃ§ek dÃ¼zeltme (aÅŸaÄŸÄ±da)
   â†’  5   â‘· parti3 kÃ¼nyeleri inince
```
ğŸ“Œ **Ä°ki alet kusuru da uyarÄ±yÄ± ÅÄ°ÅÄ°RÄ°YORDU.** Ã–lÃ§meden bildirseydim
koordinatÃ¶rde yanlÄ±ÅŸ bir aciliyet Ã¼retirdim. *"89 hayalet var"* demek
ile *"61'i gerÃ§ek, 28'i benim aletimin"* demek arasÄ±ndaki fark, bu
projede en pahalÄ± ayrÄ±mlardan biri.

**Ve ikinci alet kusuru daha derindi:** kÃ¼nye Ã¶mÃ¼rlerini **regex** ile
Ã§Ä±karÄ±yordum ve `danimarka` ile `haudenosaunee` *"KÃœNYE YOK"* Ã§Ä±ktÄ± â€”
ikisi de `devletler.js`te **var**. Ã‡are regex'i dÃ¼zeltmek deÄŸil
**bÄ±rakmak** oldu: `ARAC-KAMERIKA-0903-omur.js` ile `node`'a `eval`
ettirildi, Ã¶mÃ¼r tablosu **376 â†’ 471**.
ğŸ“Œ `Â§11`in *"veri zaten bir dilde yazÄ±lÄ±ysa, o dilin yorumlayÄ±cÄ±sÄ±nÄ±
Ã§aÄŸÄ±r"* dersinin **altÄ±ncÄ±** vakasÄ± (`girdi.py` tek tÄ±rnak Â· `bagla.py`
CRLF Â· `renkler.py` Â· `_bk_nobetci` Â· ve bu).

**DÃ¶rt gerÃ§ek zincir bulgusu:**
```
â‘  `ingiliz-kuzey-amerika` f:1763-02-10 â€” ama HBC karakollarÄ± 1668'den
   beri var (Waskaganish 1668 Â· Moose Factory 1673 Â· York Factory 1684
   Â· Halifax 1749). YÄ°RMÄ° kayÄ±t kÃ¼nyeden Ã–NCE â‡’ araya `ingiltere` girdi.
â‘¡ LUÄ°ZYANA â‰  Ä°LLÄ°NOÄ°S ve ben ikisine TEK kural yazmÄ±ÅŸtÄ±m:
   Luizyana 1762-11-03 Fontainebleau ile Ä°SPANYA'ya,
   Ä°llinois Ã¼lkesi 1763-02-10 Paris ile BRÄ°TANYA'ya gitti.
â‘¢ ~~`pueblo-bagimsizligi` kÃ¼nyesi 1680-1692 â€” bir AYAKLANMA, halk
   deÄŸil. Ve atlasta Taos Â· Acoma Â· Santa Fe onu ZATEN Ã§atÄ± kimlik gibi
   kullanÄ±yor.~~
   ğŸ”´ğŸ”´ **BU BULGU Ã‡ÃœRÃœDÃœ â€” Ã–LÃ‡TÃœM, KUSUR YOK.** Bkz. Â§13.7.
â‘£ Unalaska'ya `bolge:"Aleut"` yazmÄ±ÅŸtÄ±m â€” 1787 kuruluÅŸlu bir RUS
   karakolu ve `aleut` kÃ¼nyesi 1784'te biter â‡’ nokta kendi kÃ¼nyesinden
   SONRA doÄŸuyordu. `Rus AmerikasÄ±`na Ã§evrildi.
```

## 13.3 DEÄÄ°ÅMEZ 2 Ã–N Ã–LÃ‡ÃœMÃœ â€” ve iki gÃ¼nÃ¼n olay olmadÄ±ÄŸÄ±

`ARAC-KAMERIKA-0903-degismez2.js` Â· Ã§Ä±ktÄ± `DEGISMEZ2-KAMERIKA-0903.txt`

```
6141 kronoloji maddesi Â· zincirimde 206 KIRILMA GÃœNÃœ
ğŸ”´ AÃ‡IK      30  (Â±30 gÃ¼nde HÄ°Ã‡ madde yok)
ğŸŸ¡ ALAKASIZ  38  (madde var, baÅŸka gÃ¼n, BAÅKA KONU)
ğŸŸ¢ AYNI GÃœN 138
```
**En aÄŸÄ±rÄ± `1880-09-01`: 33 nokta kÄ±rÄ±lÄ±yor, en yakÄ±n madde 122 gÃ¼n
uzakta.** Madde yazÄ±lmazsa 33 Ä°nuit noktasÄ±nÄ±n el deÄŸiÅŸtirmesi haritada
*"Ruslar TÃ¼rkmen elini imparatorluklarÄ±na kattÄ±"* maddesinin altÄ±nda
belirir.

ğŸ”´ğŸ”´ **VE YEDÄ° AÄIR GÃœNÃœN Ä°KÄ°SÄ° OLAY DEÄÄ°LMÄ°Å.** `1829-01-01`de kÄ±rÄ±lan
Ã¼Ã§ nokta (Fort Halkett Â· Fort Pitt Â· Springfield) ve `1803-01-01`deki
Ã¼Ã§Ã¼ (Chisasibi Â· Fort William Â· Chicago) **ortak bir hÃ¢dise
taÅŸÄ±mÄ±yor** â€” Ã¼Ã§Ã¼ de ayrÄ± ayrÄ± o *yÄ±l* kurulmuÅŸ ve gÃ¼nleri bilinmediÄŸi
iÃ§in hepsine `YYYY-01-01` yazÄ±lmÄ±ÅŸ.
â‡’ Bu iki *"kÄ±rÄ±lma gÃ¼nÃ¼"* tarihin deÄŸil **ortak takvim kuralÄ±nÄ±n
Ã§akÄ±ÅŸmasÄ±.** BirleÅŸik madde yazmak **olmayan bir olayÄ± uydurmak**
olurdu; her yerleÅŸime **ayrÄ± kuruluÅŸ maddesi** yazÄ±ldÄ±.

ğŸ“Œ **Genel ders:** *aynÄ± gÃ¼n kÄ±rÄ±lan N nokta sayÄ±sÄ±, N noktanÄ±n AYNI
OLAYDA el deÄŸiÅŸtirdiÄŸi anlamÄ±na gelmez.* 377 noktanÄ±n yalnÄ±z **23'Ã¼nÃ¼n**
gÃ¼nÃ¼ kaynaklÄ±, **354'Ã¼** ortak takvim â‡’ `YYYY-01-01` gÃ¼nleri
**sistematik olarak sahte kalabalÄ±k** Ã¼retiyor, ve aÄŸÄ±rlÄ±k sÄ±ralamasÄ±
tam bu yÃ¼zden yanÄ±ltÄ±r. (KoordinatÃ¶r Ã¶lÃ§Ã¼tÃ¼ dÃ¼zeltti ve yaydÄ±.)

â‡’ `OLAY-KAMERIKA-0903.json` Â· **11 madde**: 5 gerÃ§ek olay + 6 kuruluÅŸ.

## 13.4 M-2425 TERÄ°TORYAL SINAVI â€” sekiz kalem geÃ§emedi

*"Kaynak o halkÄ±n belirli bir topraÄŸÄ± **denetlediÄŸini** sÃ¶ylÃ¼yorsa
kÃ¼nye; *'ÅŸu bÃ¶lgede yaÅŸarlardÄ±'* diyorsa `bos:"kabile"`."*

En Ã¶ÄŸretici Ã¼Ã§Ã¼:
```
Ocmulgee    kÃ¼nye GEREKMÄ°YOR â€” SÃ–NMEDÄ°, DEVROLDU. ArdÄ±lÄ± atlasta
            zaten var (`creek-konfederasyonu`). Ã–teki Ã¼Ã§ Mississippi
            merkezi sÃ¶ndÃ¼ ve kÃ¼nye aldÄ±. Fark tek kelime.
Tocobaga    teritoryal ÅŸartÄ± GEÃ‡EBÄ°LÄ°R, TARÄ°H ÅŸartÄ±nÄ± geÃ§emiyor.
            â‡’ Ä°ki sÄ±nav ayrÄ±dÄ±r ve ikisi de gerekir.
payut       AYNI HALKIN iki kolu sÄ±navÄ±n Ä°KÄ° YANINA dÃ¼ÅŸÃ¼yor:
            Owens Vadisi sulama kanalÄ± kazÄ±yor (âœ“), Kara Kaya
            bantlarÄ± hareketli (âœ—). Halk taneciÄŸi burada bedel istiyor.
```
ğŸ”´ **Ve kendi kapanma sayÄ±mÄ± dÃ¼ÅŸÃ¼ren bir Ã¶neri yazdÄ±m:**
`Mushuau-nipi` kalÄ±cÄ± bir yerleÅŸim **deÄŸil**, ren geyiÄŸi geÃ§idinde
mevsimlik buluÅŸma yeri â‡’ nokta olmaktan Ã§Ä±karÄ±lmalÄ±, kapanma **1
azalÄ±r ve azalmasÄ± doÄŸrudur.** Gizlenirse yarÄ±n bir denetim
*"yerleÅŸim deÄŸil"* diye bulur ve o zaman **sayÄ±nÄ±n tamamÄ±**
gÃ¼venilirliÄŸini kaybeder.

## 13.5 BÄ°TÄ°Å Ã–LÃ‡ÃœTÃœ â€” YENÄ°LENMÄ°Å (Â§9'un yerini alÄ±r)

| ÅŸart | durum |
|---|---|
| â‘  aÃ§Ä±k hÃ¼cre Ã¶nce/sonra Ã¶lÃ§Ã¼ldÃ¼ | ğŸŸ¢ iki Ä±zgarada, sayÄ±yla |
| â‘¡ her aÃ§Ä±k hÃ¼cre: nokta ya da cinsi yazÄ±lÄ± beyan | ğŸŸ¡ nokta tarafÄ± hazÄ±r; **beyan tarafÄ± hÃ¢lÃ¢ Ã–NERÄ°** (Â§6) |
| â‘¢ her kaydÄ±n `kaynak:` alanÄ± dolu | ğŸŸ¢ 377/377 Â· **tek tek doÄŸrulanmadÄ±** â€” Â§4 damgasÄ± |
| â‘£ her `s:` kimliÄŸi var ve Ã¶mrÃ¼ tutuyor | ğŸŸ¢ **43 kÃ¼nye yazÄ±ldÄ± Â· hayalet 0 Â· bloke 5** |
| â‘¤ Ã¶n sÄ±nav KIRMIZI 0 | ğŸŸ¢ 3 km Â· kutu Â· ad Â· **kara maskesi** Â· kÃ¼nye Â· hayalet â€” altÄ±sÄ± da 0 |

**AÃ§Ä±k kalan beÅŸ nokta:** `Bishop` Â· `Kuzey Payut` Â· `Prescott/Yavapai` Â·
`Meskalero ApaÃ§i` Â· `Mushuau-nipi` â€” beÅŸi de **karar bekliyor**, Ã¶lÃ§Ã¼m
deÄŸil.

## 13.6 Ä°KÄ°NCÄ° AÅAMANIN DERSLERÄ°

**â‘§ BÄ°R ALETÄ°N UYARI SAYISI, ALETÄ°N KENDÄ° KUSURUNU DA Ä°Ã‡EREBÄ°LÄ°R â€” ve
o kusur uyarÄ±yÄ± ÅÄ°ÅÄ°RÄ°R.** `89 â†’ 61` farkÄ±nÄ±n tamamÄ± benim sÃ¶zlÃ¼ksel
tarih kÄ±yasÄ±mdÄ±. â‡’ *Bir alarm sayÄ±sÄ±nÄ± bildirmeden Ã¶nce, alarmÄ±n
kendisini sÄ±na.* Yoksa aciliyet uydurursun.

**â‘¨ AYNI GÃœN KIRILAN N NOKTA, N OLAYIN TARAFI DEÄÄ°LDÄ°R.** `YYYY-01-01`
kuralÄ± sahte kalabalÄ±k Ã¼retir; aÄŸÄ±rlÄ±k sÄ±ralamasÄ± bu kalabalÄ±ÄŸa bakarsa
**olmayan bir olay** yazdÄ±rÄ±r.

**â‘© Ä°KÄ° SINAV AYRIDIR VE Ä°KÄ°SÄ° DE GEREKÄ°R.** Tocobaga teritoryal ÅŸartÄ±
geÃ§er, tarih ÅŸartÄ±nÄ± geÃ§emez. Birini geÃ§mek Ã¶tekini geÃ§irmez â€” ve
*"sÄ±navÄ± geÃ§ti"* demek hangi sÄ±nav olduÄŸunu sÃ¶ylemeden **eksiktir.**

**â‘ª KENDÄ° SAYINI DÃœÅÃœREN BULGUYU YAZMAK, ONU GÄ°ZLEMEKTEN UCUZDUR.**
Gizlenen bir fazlalÄ±k yarÄ±n bulunur ve o gÃ¼n **yalnÄ±z o kalem deÄŸil,
bÃ¼tÃ¼n sayÄ±** gÃ¼venilirliÄŸini kaybeder.

**â‘« SAYIYI PLANDAN DEÄÄ°L DOSYADAN OKU.** Madde reÃ§etesini teslim
ederken *"11 madde"* dedim, dosyada **10** vardÄ± â€” altÄ± kuruluÅŸ maddesi
yazmayÄ± *planlamÄ±ÅŸtÄ±m*, beÅŸini yazmÄ±ÅŸtÄ±m. EksiÄŸi yakalayan ÅŸey dikkat
deÄŸil **saymaktÄ±.** â‡’ `Â§11`in *"Ã¶lÃ§mediÄŸini `Ã¶lÃ§medim` diye yaz"*
kuralÄ±nÄ±n kÃ¼Ã§Ã¼k ama saf hÃ¢li: **plandaki sayÄ±yÄ± gerÃ§ekleÅŸmiÅŸ sayÄ± gibi
bildirmek.**

---

## 13.7 ğŸ”´ğŸ”´ BÄ°R BULGUM Ã‡ÃœRÃœDÃœ â€” ve Ã§Ã¼rÃ¼ten ÅŸey nihayet BAKMAK oldu

Â§13.2â‘¢'te *"Taos Â· Acoma Â· Santa Fe `pueblo-bagimsizligi`ni Ã§atÄ± kimlik
gibi kullanÄ±yor"* diye bir kusur bildirdim. KoordinatÃ¶r kabul etti ve
**1374 dÃ¶nemlik Ã¶mÃ¼r borcunun Ã¶rneÄŸi** diye kaydetti.

**Sonra Ã¼Ã§ noktanÄ±n `s:` zincirini aÃ§tÄ±m. Ä°kisi de yanlÄ±ÅŸtÄ±:**

```
Ä°DDÄ°A  "Ã§atÄ± kimlik gibi kullanÄ±yor"
Ã–LÃ‡ÃœM  ÃœÃ‡Ãœ DE TAM DOÄRU:
       yeni-ispanya         1610-01-01 â†’ 1680-08-10
       pueblo-bagimsizligi  1680-08-10 â†’ 1692-08-01   â† tam ayaklanma penceresi
       yeni-ispanya         1692-08-01 â†’ 1821-09-27
       meksika Â· abd        â†’1848-02-02 â†’1923-10-29
       â‡’ Benim "dÃ¼zeltilmeli" diye Ã¶nereceÄŸim model,
         verinin ZATEN olduÄŸu modeldi.

Ä°DDÄ°A  "1680 Ã¶ncesi kimliksiz kalÄ±yor"
Ã–LÃ‡ÃœM  Taos ve Acoma'da kasitli_bosluk:true + bos:"devletsiz" + gerekÃ§eli
       neden: VAR â€” 1281-1610 arasÄ± Pueblo kÃ¶ylerinin Ã¶zerkliÄŸini
       anlatÄ±yor, kaynaÄŸÄ±nÄ± (NPS Â· Britannica) adÄ±yla yazÄ±yor, ve TDV'nin
       Pueblo halklarÄ±nÄ± ANMADIÄINI "Ã¶lÃ§Ã¼ldÃ¼, tanecik boÅŸluÄŸu" diye
       kaydediyor. â‡’ BoÅŸluk kaza deÄŸil BEYAN.
```

### KÃ¶k sebep â€” ve bu, listedeki hiÃ§bir sÄ±nÄ±fa benzemiyor

ğŸ”´ **Kusuru VERÄ°DE deÄŸil KENDÄ° ALETÄ°MDE gÃ¶rdÃ¼m ve VERÄ°YE YIKTIM.**

Hayalet sÄ±navÄ±m ÅŸunu Ã¶tmÃ¼ÅŸtÃ¼:
```
Pecos Pueblo   pueblo-bagimsizligi   HAYALET: dÃ¶nem 1281-01-01..1692-08-01
                                             kÃ¼nye 1680-08-10..1692-08-01
```
**O kayÄ±t BENÄ°M ADAYIMDI** ve o zinciri **benim eÅŸleÅŸtiricim** Ã¼retmiÅŸti
(`bolge:"Pueblo"` â†’ `pueblo-bagimsizligi`, 1281'den baÅŸlatarak). Kendi
aletimin Ã¼rettiÄŸi hatayÄ± gÃ¶rdÃ¼m ve *"demek mevcut noktalar da bÃ¶yle
yapÄ±yor"* diye **genelledim â€” bakmadan.**

ğŸ“Œ ***Bir aletin Ã¶tÃ¼ÅŸÃ¼, Ã¶tme SEBEBÄ°NÄ° sÃ¶ylemez.*** AynÄ± uyarÄ± satÄ±rÄ± hem
verinin kusurunu hem aletin kusurunu gÃ¶sterebilir; ikisi ayÄ±rt edilmeden
hÃ¼kÃ¼m verilirse **suÃ§suz veri suÃ§lanÄ±r.**
â‡’ **Bir denetim Ã¶tÃ¼nce ilk soru *"veri mi bozuk"* deÄŸil, *"BU KAYIT
KÄ°MÄ°N"* olmalÄ±.**

âš ï¸ Ve zararÄ± teorik deÄŸildi: koordinatÃ¶r bunu bir **borÃ§** olarak
kaydetmiÅŸti. Ã–lÃ§meseydim, bir sonraki oturum var olmayan bir kusuru
dÃ¼zeltmeye Ã§alÄ±ÅŸacak ve **doÄŸru veriyi bozacaktÄ±** â€” `Â§11`in *"iki ayrÄ±
kusur tek satÄ±rda raporlanÄ±rsa doÄŸru veri bozulur"* dersinin tam
karÅŸÄ±lÄ±ÄŸÄ±.

ğŸŸ¢ Ve bunu yakalayan ÅŸey bir sezgi deÄŸil, koordinatÃ¶rÃ¼n *"Ã¶lÃ§ ve reÃ§ete
yaz"* sevkiydi. **ReÃ§ete yazmak iÃ§in Ã¶lÃ§mek zorunda kaldÄ±m, ve Ã¶lÃ§Ã¼m
reÃ§etenin kendisini iptal etti.**

---

# 14. DOSYA DÄ°ZÄ°NÄ° â€” bu oturumun bÄ±raktÄ±ÄŸÄ± 26 dosya

> Bu bÃ¶lÃ¼m **Ã¶lÃ§Ã¼lerek** yazÄ±ldÄ±: `ARAC-KAMERIKA-0903-rapor-sina.py`
> raporun andÄ±ÄŸÄ± her dosyanÄ±n diskte var olduÄŸunu sÄ±nar (`11/11 âœ“`) ve
> **ters yÃ¶nÃ¼ de** sorar â€” diskte olup raporda anÄ±lmayan var mÄ±? Ä°lk
> koÅŸuda **14 tane** Ã§Ä±ktÄ± ve sebebi dosyalarÄ±n yokluÄŸu deÄŸil, Â§13.1
> tablosunda kÄ±saltma kullanmamdÄ± (`-parti2.json`). Bu dizin o boÅŸluÄŸu
> kapatÄ±r.
> ğŸ“Œ Bir raporun andÄ±ÄŸÄ± dosya diskte yoksa rapor kendi kendine yalan
> sÃ¶ylÃ¼yordur; **diskte olup anÄ±lmayan** varsa rapor eksiktir. Ä°kisi
> ayrÄ± kusur ve ikisi de Ã¶lÃ§Ã¼lÃ¼r.

### VERÄ° â€” yazÄ±m turunun girdisi
| dosya | ne |
|---|---|
| `ADAY-KAMERIKA-0903.json` | **377 aday nokta** â€” ad Â· koordinat Â· `f:` Â· bÃ¶lge Â· kaynak kÃ¼tÃ¼ÄŸÃ¼ |
| `ADAY-KAMERIKA-0903-kunyeli.json` | aynÄ± 377, kimlik zinciri Ã¶nerisiyle |
| `ZINCIR-KAMERIKA-0903.json` | **377 nokta Â· 754 dÃ¶nem** â€” kapalÄ± `s:` zincirleri Â· hayalet 0 Â· bloke 1 |
| `KALAN-KAMERIKA-0903.json` | kapanmayan **149 hÃ¼cre**, koordinatÄ±yla |
| `HAZIR-yerlesimler_kamerika.js` | ğŸŸ¢ **KOÅU BÄ°TÄ°NCE `data/`YA KOPYALANACAK DOSYA** â€” `window.YERLESIMLER_KAMERIKA` Â· 377 kayÄ±t Â· 748 dÃ¶nem Â· 5 `kasitli_bosluk` |

### KÃœNYE
| dosya | ne |
|---|---|
| `KUNYE-KAMERIKA-0903.json` | parti 1 â€” **16 kÃ¼nye** |
| `KUNYE-KAMERIKA-0903-parti2.json` | parti 2 â€” **14 kÃ¼nye** |
| `KUNYE-KAMERIKA-0903-parti3.json` | parti 3 â€” **13 kÃ¼nye** |
| `KUNYE-KAMERIKA-0903-parti4.json` | parti 4 â€” **3 kÃ¼nye** (`payut` Â· `yavapai` Â· `meskalero-apaci`) |
| `KUNYE-KAMERIKA-0903-BEKLEYEN.json` | **17 yazÄ±lmayan**, sebep + aday tarih + damga |
| `KABILE-KAMERIKA-0903.json` | **8 kalem** â€” `M-2425` teritoryal sÄ±navÄ±nÄ± geÃ§emeyenler |
| `KUNYE-KAMERIKA-0903-DUZELTME.json` | **3 kalem** â€” mevcut kÃ¼nyelerde dÃ¼zeltme |

### KRONOLOJÄ°
| dosya | ne |
|---|---|
| `OLAY-KAMERIKA-0903.json` | **11 madde** â€” 5 gerÃ§ek olay + 6 kuruluÅŸ |
| `DEGISMEZ2-KAMERIKA-0903.txt` | 206 kÄ±rÄ±lma gÃ¼nÃ¼nÃ¼n Ã¶lÃ§Ã¼mÃ¼ (30 aÃ§Ä±k Â· 38 alakasÄ±z Â· 138 aynÄ± gÃ¼n) |

### ALET â€” hepsi proje kÃ¶kÃ¼nden koÅŸulabilir
| dosya | ne sorar |
|---|---|
| `ARAC-KAMERIKA-0903-olc.py` | kutumda kaÃ§ hÃ¼cre aÃ§Ä±k? |
| `ARAC-KAMERIKA-0903-dene.py` | adaylar kaÃ§ hÃ¼cre kapatÄ±yor? |
| `ARAC-KAMERIKA-0903-birlestir.py` | 3 km Â· kutu Â· ad Ã§akÄ±ÅŸmasÄ± |
| `ARAC-KAMERIKA-0903-kara-sina.py` | her aday gerÃ§ekten KARADA mÄ±? |
| `ARAC-KAMERIKA-0903-normal.py` | **ortak normalleÅŸtirici** â€” TÃ¼rkÃ§e harf Â· diakritik Â· kesme |
| `ARAC-KAMERIKA-0903-sozluk.py` | `devletler.js`in kendi `tur:`/`bolge:` sÃ¶zlÃ¼ÄŸÃ¼ |
| `ARAC-KAMERIKA-0903-kunye.py` | her adayÄ±n kimlik zinciri ne? |
| `ARAC-KAMERIKA-0903-kunye-sina.py` | kÃ¼nye reÃ§etesi 7 daldan geÃ§iyor mu? |
| `ARAC-KAMERIKA-0903-omur.js` | kÃ¼nye Ã¶mÃ¼rleri (**node** â€” regex deÄŸil) |
| `ARAC-KAMERIKA-0903-zincir.py` | zincirler + **hayalet sÄ±navÄ±** |
| `ARAC-KAMERIKA-0903-degismez2.js` | kÄ±rÄ±lma gÃ¼nleri maddeli mi? |
| `ARAC-KAMERIKA-0903-rapor-sina.py` | raporun andÄ±ÄŸÄ± dosyalar gerÃ§ek mi? |
| `ARAC-KAMERIKA-0903-uret-js.py` | `data/`ya inecek `.js`i Ã¼retir (alan sÃ¼zgeci `girdi.BILINEN_ALANLAR`'dan) |

### RAPOR
| dosya | ne |
|---|---|
| `BULGU-KAMERIKA-0903.md` | bu dosya |

ğŸ”´ **HiÃ§biri commit'li deÄŸil** ve `data/` altÄ±na **hiÃ§bir ÅŸey
yazÄ±lmadÄ±** â€” koÅŸu canlÄ±ydÄ± (PID 1268), `Â§7` gereÄŸi `data/` ve `arac/`
donmuÅŸtu, commit yetkisi Oturum 0'da.

