# YERLESIMLER-JS KUYRUĞU — EK 2 (hakemli karar: Beyrut · Modon · Peşte · Yenbu) — 14 Kasım 2026

Hazırlayan: alt ajan (Sonnet 5.5), worktree `agent-ac42c8e49147ebf86`. Taban: `81b566fc5`.
`data/*.js` DEĞİŞMEDİ (yalnız okundu); `py arac/denetle.py` koşturulmadı — "denetle temiz" iddiası YOKTUR.
Önceki turlar: `denetim/D2T-EKSIK-KIRILMA-1114.md`, `denetim/YERLESIMLER-JS-KUYRUK-1114.md` (ikisi `origin/emrelic-1113-d2s-coz`).
Satır numaraları bu taban commit'e aittir; uygularken `ad:` ile ara. Kayıt içi `ic_not` alanı yoktur; atlas `kaynak:` içine ` · ic_not: …` yazar.

Okuma notu: "OKUNDU" = ham metin bu oturumda görüldü (HTML/OCR); "AKTARIM" = ham metin değil, bir sitenin alıntısı (ham baskı sayfası okunmadı); "OKUNMADI" = ulaşılamadı (archive.org ödünç-yalnız, ücretli dergi vb.). Vikipedi ve popüler site hiçbir gün için dayanak sayılmadı; yalnız "ne iddia ediyor" diye anıldı.

## Özet tablo

| # | Yerleşim | Mevcut | Hakemli sonuç | Kaynak (okunan akademik) | Karar türü | Sınıf |
|---|---|---|---|---|---|---|
| 1 | Beyrut | `s` kudus-kralligi→memluk **1291-05-18** | **Gün bulunamadı.** Ay: Temmuz 1291 iddiası yalnız Vikipedi katmanında (21/31 Temmuz çelişkili). Dönem ucu DEĞİŞMEZ; yalnız bayat `ic_not` düzelir | TDV beyrut (yıl) · Sader/AUB (yıl) · Runciman III s.598 OKUNMADI | ÖNERİ YOK: kaynak aranacak (gün); TDV'de gün yok → atlas günü kalır | UYGULA (yalnız ic_not) |
| 2 | Modon | Venedik f / kd **1686-06-01** (kaynaksız ay tabanı) | **1686-07-10** (gün) | Finlay (1877) V s.180 OKUNDU · TDV modon yıl (çelişmez) · Chasiotis 1975 OKUNMADI | Tek akademik gün kaynağı (çift teyit YOK); 7 Temmuz iddiası okunan bir akademik kaynağa dayanmıyor | UYGULA |
| 3 | Peşte | `d` 1541-08-29→1686-09-02 kesintisiz | **`isg` macaristan-habsburg 1684-06-30 → ~1684-11-03** (f gün, t ay) | Bánlaky XVII (MEK 09477) 1382/1384 OKUNDU · K. Magyar (Budavár/MTA ABTK) OKUNDU · TDV budin 1684'ü anmıyor | f: iki bağımsız okunan kaynak (Bánlaky + Magyar'ın "Temmuz başı" cümlesi farklı!) → bkz. gün tartışması; t: Bánlaky gün vermiyor, ay | UYGULA |
| 4 | Yenbu | `s` suud-birinci t / `v` f **1811-11-01** | **Kasım olamaz.** Cebertî'ye göre liman Ramazan 1226 (≈30 Eylül 1811) haberiyle zaten Mısır'ın elinde ⇒ **Eylül 1811 (ay)** | Burckhardt, Travels in Arabia (1829) OKUNDU · Cebertî, Acâibü'l-âsâr III s.333-336 AKTARIM · TDV yenbu (yıl) | Ay hakemli (iki bağımsız: Burckhardt + Cebertî); gün yok | UYGULA (orta güven) |

---

## 1. BEYRUT (Beirut) — `data/yerlesimler.js:870`

### Mevcut
```
s:[ … {f:"1281-01-01",t:"1291-05-18",d:"kudus-kralligi",kaynak:"EPOK-SAHIP-1008 · TDV beyrut: 'on yıl sonra Haçlılar burayı tekrar zaptettiler …' (1197) · '1291’e kadar Haçlılar’ın elinde kalan şehir' — t YIL; 🟡 künye kudus-kralligi t 1291-05-18'e KIRPILDI (Akkâ'nın düşüşü; şehir aynı yaz boşaltıldı — madde 1291-05-18 'Sûr, Sayda, Beyrut … art arda boşaltıldı'). Gerçek teslim birkaç hafta sonradır, gün kaynakta YOK"},
    {f:"1291-05-18",t:"1516-09-27",d:"memluk",kaynak:"EPOK-SAHIP-1008 · TDV beyrut: '1291’e kadar Haçlılar’ın elinde kalan şehir, bu tarihte Memlük Sultanı el-Melikü’l-Eşref Halîl adına … fethedildi' (YIL; gün künye/madde ile hizalı, beyanlı)"} …]
```
Not: `kaynak:` metnindeki "künye kudus-kralligi t 1291-05-18'e KIRPILDI" **bayat** — `data/devletler.js:13026` künyesi bu worktree'de `t:"1291-07-14"` (ic_not_t: "1291-05-18 → 1291-07-14 … Aynı polity GENİŞLETİLDİ", gerekçe TDV sur--lubnan: Sûr 14 Temmuz 1291).

### Bulunan kaynaklar ve verdikleri gün
| Kaynak | Verdiği | Durum |
|---|---|---|
| TDV İslâm Ansiklopedisi «Beyrut» | yalnız **1291** (Memlük fethi; gün/ay yok) | OKUNDU (önceki tur; bu turda yeniden aranmadı) |
| TDV «Sayda» (atlas madde olaylar_ortacag_ortadogu.js:207 alıntısı) | Sayda **Receb 690 / Temmuz 1291**; Beyrut'u anmıyor | AKTARIM (maddedeki `kaynak:`) |
| Hélène Sader, «The Mamluk Period in Lebanon», *In the Steps of the Sultan* (AUB Press; aub.edu.lb PDF) | "1291'de Kalavun'un oğlu el-Eşref Sûr, Sayda, Beyrut… fethetti"; «Aziz Yuhanna kilisesi 1291'de camiye çevrildi» — YIL | OKUNDU (PDF metni çıkarıldı). Dipnot: Fuess, «Beirut in Mamluk Times (1291-1516)», *ARAM* 9/1 (1997) s.85-101; Salih b. Yahya, *Tarih Beyrut* (Hours-Salibi 1969) — ikisi OKUNMADI |
| Vikipedi «Kingdom of Acre» (cümle dipnotsuz): "Beirut garrison surrendered on **31 July**, a day after Haifa" | 31 Temmuz | iddia; dayanak SAYILMADI (dipnot yok; yanındaki dipnot Runciman 1969 s.598 yalnız bir alıntıya ait) |
| Vikipedi «Thibaud Gaudin» (Templier biyografisi, dipnotsuz): "Beirut was taken on **July 21**"; Sayda deniz kalesi 14 Temmuz; Hayfa 30 Temmuz | 21 Temmuz | iddia; dayanak SAYILMADI. Sidon-castle 14 Temmuz künye t ile aynı gün |
| Runciman, *History of the Crusades* III (1954) s.~598 | önceki tur web özetinden "1 July" demişti | OKUNMADI (archive.org ödünç-yalnız; `…_djvu.txt` 172 bayt hata yanıtı). Not: "1 July" ile "31 July" aynı alıntının bozuk okuması olabilir — doğrulanmadı |
| Ibn Abd al-Zahir, Abu'l-Fida, Humphreys, Mayer, Riley-Smith, Edbury | — | OKUNMADI (sayfa metnine ulaşılamadı) |

Hicrî çapraz kontrol (tabular, ±1 gün): 21 Temmuz 1291 ≈ 9 Receb 690; 31 Temmuz ≈ 19 Receb 690 — ikisi de TDV sayda'nın "Receb 690" penceresine düşer (çelişki ayrımı sağlamaz).

### Karar (hakemli kural)
- TDV Beyrut için **gün vermiyor** (yalnız yıl) → TDV'ye karşı "aynı günü veren ≥2 bağımsız akademik kaynak" koşulu aranacak bir TDV günü yok; öte yandan atlas'ın 05-18'i **Beyrut için hiçbir kaynağa dayanmıyor** (Akkâ'nın düştüğü gün).
- Okunan akademik kaynaklar (TDV, Sader) yalnız **yıl** veriyor. 21 vs 31 Temmuz iddiaları yalnız Vikipedi katmanında; ikisi de dipnotsuz, kendi aralarında çelişkili. **Hakemli gün çıkmadı.**
- Karar: **ÖNERİ YOK: kaynak aranacak** (Runciman III s.598'in ham sayfası; Fuess ARAM 1997; Salih b. Yahya; Gestes des Chiprois/«Templier de Tyr»; Holt/Humphreys). Uydurma gün yazılmaz.
- Dönem ucu 1291-05-18 KALIR (mevcut ic_not "gün kaynakta YOK" zaten doğru beyan; künye t 07-14'ün içinde).

### Uygulanacak değişiklik (yalnız `kaynak:` ek/düzeltme; tarih DEĞİŞMEZ)
İlk `s:` (f 1281-01-01 kudus-kralligi) `kaynak:` içinde şu parçayı değiştir:
`🟡 künye kudus-kralligi t 1291-05-18'e KIRPILDI (Akkâ'nın düşüşü; …)`
→
`🟡 t 1291-05-18 = Akkâ'nın düştüğü gün (madde olaylar_ek5.js:102); künye kudus-kralligi t artık 1291-07-14'e GENİŞLETİLMİŞ (devletler.js ic_not_t), Beyrut ucu bu günü izlemez — Beyrut'a özgü gün kaynakta YOK`
ve `kaynak:` sonuna ekle:
` · ic_not (hakemli arama, 14 Kasım 2026): Beyrut'un teslim günü OKUNAN akademik kaynakta yok — TDV beyrut (yıl 1291), H. Sader, In the Steps of the Sultan (AUB Press; yıl 1291). Vikipedi-katmanında dipnotsuz 21 Temmuz (Gaudin maddesi) ve 31 Temmuz (Kingdom of Acre maddesi) iddiaları çelişkilidir ve dayanak sayılmadı; ikisi de Receb 690/Temmuz 1291 penceresine düşer. OKUNMADI: Runciman, History of the Crusades III s.598; Fuess, ARAM 9/1 (1997) s.85-101; Salih b. Yahya, Tarih Beyrut. Çift teyit YOK → 05-18 ucu beyanlı yaklaşıklık olarak kalır (gerçek gün 1291 Temmuz'unda olabilir).`
`memluk` dilimi (f 1291-05-18) `kaynak:` sonuna aynı kısa hâl: ` · ic_not: f ucu Akkâ günüdür; Beyrut'un gerçek teslimi muhtemelen Temmuz 1291 (kaynakla doğrulanmadı).`

### İki uç ölçümü
- Öncül `s` t=1291-05-18 = ardıl `s` f=1291-05-18 → bitişik (değişmez). Ardıl t=1516-09-27 = `d` f (değişmez).
- Künye: `kudus-kralligi` 1099-07-15 → **1291-07-14** (devletler.js:13026; uç künyenin içinde, aşım yok); `memluk` 1250-01-01 → 1517-04-13 (devletler.js:106) içinde.
- ±30 gün (Değişmez 2 evreni): `olaylar_ek5.js:102` t=1291-05-18 (başlık "…Sayda ve Beyrut", gun "Beyrut 1291") → tam gün VAR. Ek: `olaylar_ortacag_ortadogu.js:207` t=1291-07-01 (Sayda), `:208` t=1291-07-14 (Sûr) — Beyrut ucundan 44/57 gün, yani bu iki madde Beyrut'a tanık DEĞİL.
- **Alternatif (UYGULANMASI ÖNERİLMEZ, yalnız bilgi):** gün çıkarsa f/t=1291-07-?? olur; o zaman künye t 07-14'ü aşmamak için Temmuz 14'ten önceki bir gün gerekir (21/31 Temmuz künye t'yi aşar → künye genişletme veya ardıl künye kararı gerekir). Bu yüzden Vikipedi günlerini sessizce yazmak Değişmez/künye aşımı üretirdi.

---

## 2. MODON (Methoni) — `data/yerlesimler.js:498`

### Mevcut (yapı)
```
kd:[…,{f:"1500-08-10",t:"1686-06-01",k:3,m:"Mora (Tripoliçe)"},{f:"1686-06-01",t:"1715-08-01",k:0,m:null},…]
s:[ … {f:"1686-06-01",t:"1715-08-01",d:"venedik",eksklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 … TDV mora: '…Francesco Morosini … bütün yarımadayı ele geçirdi' … (şehir şehir giriş-çıkış günleri bu beyanla doğrulanmadı)"} … ]
d:[{f:"1500-08-10",t:"1686-06-01",y:"kusatma"},{f:"1715-08-01",t:"1825-02-24"}]
```
Kronoloji: `olaylar_ek6.js:68` t=**1686-07-10**, gun "10 Temmuz 1686", `kaynak:"modon"` (TDV, yıl).

### Bulunan kaynaklar ve verdikleri gün
| Kaynak | Verdiği | Durum |
|---|---|---|
| **G. Finlay, *A History of Greece … B.C. 146 to A.D. 1864*, c.V (Oxford 1877; archive.org `historyofgreecef05finl` djvu metni), bölüm «Venetian domination», "Siege of Modon" — Vikipedi'nin atıf verdiği s.179-180 ile örtüşür; OCR'de bu paragraf «SIEGE OF NAUPLIA … 181» başlığından hemen önce (≈ s.180)** | «The place was well fortified … garrison of one thousand men; but it capitulated, after a feeble defence, on the **10th of July**, and the inhabitants, four thousand in number, were transported to … Tripoli» (OCR "ioth"; bağlam: 1686) | **OKUNDU** (ham djvu metni). Dipnotta çağdaş Saksonyalı gönüllü raporu: *Gründlicher und genauer Bericht aller merkwürdigen Sachen … Navarino und Modon …* (1686) |
| TDV «Modon» | «1097'de (1686) … Venedikliler'in eline geçince»; «4000 Türk'ün kaleyi teslim ettiği belirtilir» — YIL | OKUNDU (bu turda) — çelişmez |
| Vikipedi «Morean War / Siege of Modon (1686)» | **7 Temmuz** (dipnotlar: Chasiotis 1975 s.24; Finlay 1877 s.179-180) | iddia. **Finlay'ın ham metni 10 Temmuz diyor** — Vikipedi'nin Finlay'a 7 Temmuz bağlaması doğrulanamadı |
| kulturenvanteri.com (T.C. Kültür Envanteri); venetostoria.com; alternatehistory forumu | 7 Temmuz | popüler/türev (kulturenvanteri kaynak olarak "Morean War, Wikipedia" yazıyor) → dayanak SAYILMADI |
| kastra.eu (popüler) | 10 Temmuz (Türkler teslim oldu) | popüler; yalnız tutarlılık notu, dayanak değil |
| slpress.gr (popüler Yunanca) | 25 Haziran | popüler; Modon'u Pylos/Koron karışımıyla anlatıyor, DAYANAK SAYILMADI |
| Setton, *Venice, Austria, and the Turks in the 17th c.* (1991) | — | OKUNMADI |
| Chasiotis (1975, Vikipedi atfı), Pinzelli/Ca' Foscari, Hellenic Net'in anıp geçtiği Jansic makalesi | — | OKUNMADI |

Önceki tur "Finlay s.215-216: 7 Temmuz (NWE dolaylı)" yazmıştı: bu turda Finlay'ın kendi metni okundu ve **10 Temmuz** çıktı; önceki tur kaydı düzeltilir (sayfa 215-216 yanlış baskı/dolaylı atıftı).

### Karar (hakemli kural)
- TDV gün vermiyor (yıl; çelişmiyor). Okunan akademik kaynak sayısı: **1 (Finlay) → 10 Temmuz**. 7 Temmuz'u veren hiçbir kaynak ham olarak okunamadı; 7 Temmuz'un dayandığı Chasiotis'e ulaşılamadı (müzakere/teslim günü farkı olabilir). ≥2 bağımsız "7 Temmuz" teyidi yok → TDV'ye karşı 7 Temmuz seçilemez; TDV günsüz olduğundan okunan tek akademik gün (**10 Temmuz**) seçilir. **Çift teyit YOK**, `ic_not`ta beyan.
- Bonus: seçim, mevcut `olaylar_ek6.js:68` maddesiyle (10 Temmuz) örtüşür → madde DEĞİŞMEZ.

### Uygulanacak değişiklik (`yerlesimler.js:498`, yalnız bu kayıtta)
Dört tarih ucu `1686-06-01` → `1686-07-10`:
```
kd:[{f:"1281-01-01",t:"1500-08-10",k:0,m:null},{f:"1500-08-10",t:"1686-07-10",k:3,m:"Mora (Tripoliçe)"},{f:"1686-07-10",t:"1715-08-01",k:0,m:null},{f:"1715-08-01",t:"1821-03-25",k:3,m:"Mora (Tripoliçe)"}],
s: … {f:"1686-07-10",t:"1715-08-01",d:"venedik",eksklav:true,kesinlik:{f:"gun"},kaynak:"(mevcut ENKLAV BEYANI + TDV mora metni AYNEN KORUNUR; sondaki '(şehir şehir giriş-çıkış günleri bu beyanla doğrulanmadı)' parantezi silinir) · f: G. Finlay, A History of Greece (Oxford 1877) c.V s.~180 (Venetian domination, Siege of Modon): Modon '10th of July' 1686'da teslim oldu, 4000 kişi Trablus'a nakledildi — GÜN (OKUNDU, ham metin) · TDV modon: '1097'de (1686)' — yıl, çelişmez · ic_not: önceki 1686-06-01 kaynaksız ay tabanıydı. 7 Temmuz iddiası (Vikipedi → Chasiotis 1975 s.24; popüler siteler) OKUNAN akademik kaynağa dayanmıyor, Chasiotis/Setton OKUNMADI; çift teyit YOK — gün tek akademik okumaya dayanır (müzakere günü ile boşaltma günü ayrışıyor olabilir)"},
d:[{f:"1500-08-10",t:"1686-07-10",y:"kusatma"},{f:"1715-08-01",t:"1825-02-24"}]
```
(Dikkat, bu turda değiştirmeden gördüm: `d:` ikinci dilim `1715-08-01→1825-02-24` ile `s` yunanistan f `1821-03-25` çakışıyor görünür; bu işin konusu DEĞİL, yalnız bilgi.)
SERBEST/ek öneri (yerlesimler.js DIŞI, uygulanması şart değil): `olaylar_ek6.js:68` maddesinin `kaynak:"modon"` alanına "· Finlay 1877 V s.~180" eklenmesi; `ic_not_b` ile 10 Temmuz'un tek-okuma olduğunun beyanı; çeviri eşitliği gereği değişen madde diller arası yenilenir.

### İki uç ölçümü
- Öncül `d` t = `kd[1]` t = `kd[2]` f = ardıl `s` f = **1686-07-10** (4 uç aynı gün → bitişik). Ardıl `s` t = 1715-08-01 = `kd[2]` t = `d` f (değişmez).
- Künye: `venedik` 0697-01-01 → 1797-05-12 (devletler.js:388 başlangıç satırı; t ayrıca doğrulanmadı ama önceki tur 1797-05-12 ölçtü) içinde. Osmanlı `d` ucu yalnız kısalır/uzar, künye (osmanli) içinde.
- ±30 gün: `olaylar_ek6.js:68` t=1686-07-10 → **tam gün**, VAR (eski 1686-06-01 ucunda fark 39 gündü).

---

## 3. PEŞTE (Pest) — `data/yerlesimler.js:1514`

### Mevcut
```
{ ad:"Peşte", ikiz:"Aquincum-Óbuda-Pest", kaynak:"budin", … m:"Aquincum-Óbuda-Pest",
  s:[{1281-01-01→1526-11-10 macaristan},{1527-09-23→1529-09-08 macaristan-habsburg},{1686-09-02→1918-11-16 macaristan-habsburg, …}…],
  v:[{1526-11-10→1527-09-23 Zapolya},{1529-09-08→1541-08-29 Zapolya}],
  d:[{f:"1541-08-29",t:"1686-09-02"}] }
```
Kronoloji: `olaylar_ki117.js:12-15` t=**1684-11-03** kesinlik **ay** «Peşte'nin Osmanlı'ya geri dönüşü», gun "~3 Kasım 1684", ic_not_d "Bánlaky 0017/1384: ~3 Kasım" (metin: "Haziran 1684'te Habsburg birliklerinin girdiği Peşte … Kasım 1684 başında yeniden Osmanlı denetimine döndü"). Giriş (Haziran) ucu için madde YOK; en yakın `olaylar_ek3.js:37` t=1684-07-14 «Birinci Budin savunması» (yer Aquincum-Óbuda-Pest).

### Bulunan kaynaklar ve verdikleri gün
**Giriş (Habsburg/Lotharingia Dükü Pest'te):**
| Kaynak | Verdiği | Durum |
|---|---|---|
| **J. Bánlaky, *A magyar nemzet hadtörténelme* XVII (MEK 09477), 1684 bölümü** — `mek.oszk.hu/09400/09477/html/0017/1382.html` (alt bölüm «c) Pest megszállása **június 30-án**») | «The Christian army reached Pest on **June 30**» (Vác'ta 28 Haziran dinlendi, 29'da yürüdü, 30'unda Pest'e vardı); Türklerin çoğu çekilmişti, ejderhalar atlarından inip saldırdı, **1800 kişilik** garnizon bırakıldı, ordu Rákos'ta ordu kurdu; Türkler ~45 tekne kaybetti | **OKUNDU** (HTML; bölüm başlığı 30 Haziran) |
| Bánlaky XVII (aynı eser, başka dosya `…/1392.html`) | «Június 27-én, a vácii csata után a császári dragonyosok foglalták el Pestet» — 27 Haziran (öncü ejderhalar) | **OKUNDU** (aynı eser içinde iki ayrı gün: öncü süvari 27/29, ana ordu 30) |
| Károly Magyar, «Buda in the Turkish Era», Budavár (MTA/ABTK) `budavar.abtk.hu` | «occupied Pest, which had been evacuated by the Turks at the **beginning of July**» | **OKUNDU**; Bánlaky'den 1-3 gün farklı, tam gün yok |
| hu.wikipedia «Buda ostroma (1684)» (kaynak: Hóman-Szekfű 1928; Bánlaky XVII s.1380-1392; Hochedlinger 2003 s.159; Rycaut 1700…) | süvari 29 Haziran Pest'te, ana ordu 30 Haziran | Vikipedi → dayanak SAYILMADI; Bánlaky ile uyumlu |
| en.wikipedia «Siege of Buda (1684)» | «On 30 June the imperial main army entered … Pest» (Türkler yakmıştı) | Vikipedi → dayanak SAYILMADI; uyumlu |
| "17 Haziran" iddiası | — | Bánlaky'de **17 Haziran = Hallewyl süvarisinin Esztergom yakınında Tatar akıncılarıyla çatışması** (`…/1380.html`); Pest girişiyle ilgisi YOK → YANLIŞ; "Vikipedi 17 Haziran / 30 Haziran çelişkisi" bundan kaynaklanıyor |
| Hóman-Szekfű, *Magyar történet* VI (1928); Hochedlinger 2003 s.159; Stoye 1964; Barker 1967; Ágoston; Szakály | — | OKUNMADI |
| TDV «Budin» | 1684'ü ve Peşte'yi anmıyor (1686 genel hücum: 2 Eylül) | OKUNDU |

**Çıkış / Osmanlı'nın dönüşü:**
| Kaynak | Verdiği | Durum |
|---|---|---|
| Bánlaky XVII — `…/1384.html` («e) Buda sikertelen ostroma július 15-től október 31-ig») | 1 Kasım hastalar Szentendre adasına; **3 Kasım** ordu geri çekilmeye başladı; «Pestet körülvette egy másik ellenséges csoport; az ottani őrség a főseregnek a visszavonulása közben, komolyabb ellenállás nélkül **Vácra** húzódott vissza»; metin Pest'in çekilme/dönüş **gününü vermiyor**; 5 Kasım Mustafa Paşa Buda kalesine girdi | **OKUNDU** |
| K. Magyar (Budavár) | kuşatmayı "1-3 Kasım" arasında kaldırdılar | OKUNDU |
| en.wikipedia | kuşatma kaldırıldı **30 Ekim** («withdrew after 109 days»); hu.wikipedia 30 Ekim "infobox", 3 Kasım geri çekilme + Pest garnizonu aynı gün çekildi | Vikipedi, dayanak SAYILMADI; 30 Ekim = kararın günü/kuşatma bitişi, geri çekilme 1-3 Kasım |
| Atlas madde `olaylar_ki117.js:12` | ~3 Kasım 1684 (ay) | Bánlaky 1384'e dayanıyor (okunan metinle UYUMLU) |
| "Osmanlı Pest'i Kasım 1684'te geri aldı" | — | Bánlaky: çarpışma/fetih yok; Pest boşaltıldı ve Osmanlı'ya geri döndü. "Geri alma" = boş bırakılan yere dönüş; kaynakta ayrı bir Osmanlı fethi günü YOK |

### Karar (hakemli kural)
- Giriş (f): Okunan **bağımsız iki kaynak**: Bánlaky (hadtörténelem, 1928-42; bölüm başlığı + metin 30 Haziran) ve K. Magyar (Temmuz başı, gün yok — 30 Haziran ile UYUMLU, çelişmez, ama gün vermez). TDV bu konuda kayıtsız. Bánlaky içindeki 27/29 Haziran = öncü ejderha baskını; Pest'in "megszállása" (garnizon bırakılarak işgal) **30 Haziran**. → **1684-06-30 (gün)**; `ic_not`ta 27/29/30 ayrımı beyan.
- Çıkış (t): Bánlaky Pest garnizonunun çekilişine **gün vermiyor**; ordunun geri çekilme başlangıcı 3 Kasım; Osmanlı fiilen 5 Kasım'da Buda'da. → **~1684-11-03, kesinlik ay** ("Kasım 1684 başı"); gün uydurulmaz. Madde `olaylar_ki117.js:12` zaten aynı (t 11-03, ay).
- Hukuki sınıf: Habsburg Pest'i 4 ay işgal etti, garnizon bırakıp geri çekildi, vergi/tahrir/idarî bağlama yok → **`isg:`** (VERI-YAPISI §151: kendi idaresine katmadı, devir askerî/geçici). `s:` değil.
- Hiçbir kaynak TDV'ye karşı farklı bir gün vermiyor (TDV konuyu içermiyor); çift teyit f için YOK (tek okuma + dolaylı uyum).

### Uygulanacak değişiklik (`yerlesimler.js:1514`)
`d:` kesintisiz dilimini böl ve `isg:` ekle:
```
d:[{f:"1541-08-29",t:"1684-06-30"},
   {f:"1684-11-03",t:"1686-09-02",kesinlik:{f:"ay"},kaynak:"f: J. Bánlaky, A magyar nemzet hadtörténelme XVII (MEK 09477) 1384 'e) Buda sikertelen ostroma': ordu 3 Kasım 1684'te geri çekilmeye başladı, Pest garnizonu 'komolyabb ellenállás nélkül Vácra húzódott'; Pest'e dönüş günü kaynakta YOK → Kasım 1684 başı (AY); olaylar_ki117.js:12 ile hizalı"}],
isg:[{f:"1684-06-30",t:"1684-11-03",d:"macaristan-habsburg",kesinlik:{f:"gun",t:"ay"},
      kaynak:"f: J. Bánlaky, A magyar nemzet hadtörténelme XVII (MEK 09477; 1928-42), bölüm «Pest megszállása június 30-án» (html/0017/1382): ana ordu 30 Haziran 1684'te Pest'e girdi, Türkler boşaltmış/yakmıştı, 1800 kişilik garnizon bırakıldı; öncü ejderhalar 27-29 Haziran (aynı eserin başka bölümünde 27 Haziran, Vác muharebesi sonrası) · K. Magyar, Buda in the Turkish Era (Budavár/MTA ABTK): 'occupied Pest, evacuated by the Turks at the beginning of July' (gün yok, çelişmez) · t: Bánlaky 1384: ordunun 3 Kasım geri çekilmesi sırasında garnizon Vác'a çekildi (gün yok) → AY · 'isg': Habsburg Pest'i kendi idaresine katmadı, garnizon bırakıp çekildi (kalıcı fetih 2 Eylül 1686 Budin, TDV budin) · ic_not: '17 Haziran' tarihi Bánlaky'de Hallewyl'in Esztergom çatışmasıdır, Pest girişi DEĞİL; 30 Ekim = kuşatmanın bırakılma kararı (Vikipedi), geri çekilme 1-3 Kasım; Hóman-Szekfű/Hochedlinger/Stoye/Barker OKUNMADI; çift teyit YOK (gün tek eserdeki bölüm başlığına dayanır)"}],
```
`v:` değişmez. Öneri (yerlesimler.js DIŞI, SERBEST): giriş ucu için yeni kronoloji maddesi ("Habsburg ordusu Peşte'ye girdi", t=1684-06-30, yer Peşte, kaynak Bánlaky XVII 1382) — mevcut `olaylar_ek3.js:37` (07-14) 14 gün uzak olduğundan Değişmez 2'yi şimdilik geçer ama kırılmayı tam yansıtan madde yoktur; `olaylar_ki117.js:12`'nin gövdesi zaten Haziran girişini anıyor.
Not: ikiz Budin (`Aquincum-Óbuda-Pest` ikizi) 1684'te DEĞİŞMEZ — Buda alınamadı.

### İki uç ölçümü
- `d`[1] t = `isg` f = **1684-06-30**; `isg` t = `d`[2] f = **1684-11-03** (ay işareti); `d`[2] t = 1686-09-02 = ardıl `s` f (değişmez). Çakışma/boşluk yok; öncül `d` f 1541-08-29 = `v` t (değişmez).
- Künye: `macaristan-habsburg` 1526-12-17 → 1918-11-16 (devletler.js:776) → isg ucu içinde.
- ±30 gün: f 1684-06-30 ↔ `olaylar_ek3.js:37` (1684-07-14, 14 gün) VAR; t 1684-11-03 ↔ `olaylar_ki117.js:12` (tam gün, ay kesinlikli) VAR. 1686-09-02 ucu değişmez.
- `isg:` dönemi `d`'nin üstünde mi dışında mı yazılır sorusu için bir emsal: `Ulubat` (yerlesimler.js:100) `isg` ayrı alan, `d`/`s` boşluğunu doldurmaz — bu yüzden `d` bölünür (yukarıda). Uygulamadan önce `py arac/denetle.py` ile Değişmez 1/3 etkisi KASA'da ölçülmeli (bu turda koşturulmadı).

---

## 4. YENBU (Yanbu) — `data/yerlesimler.js:905`

### Mevcut
```
{ ad:"Yenbu", tur:"liman", lat:24.089, lon:38.063, …,
  s:[ …{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1805-07-20",t:"1811-11-01",d:"suud-birinci"},{f:"1916-07-27",t:"1925-12-19",d:"hicaz-kralligi",…} …],
  d:[{f:"1517-07-06",t:"1805-07-20"},{f:"1841-05-24",t:"1916-07-27"}],
  v:[{f:"1811-11-01",t:"1841-05-24",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] }
```
`suud-birinci` ve `v` ucunda `kaynak:` YOK. Kronoloji: `olaylar_ek4.js:52` t=**1811-09-03** «Hicaz seferi başladı — ordu Süveyş'ten … Yenbu'ya yürüdü» (gun "Eylül 1811"); `:56` t=**1811-10-01** kesinlik ay «Yenbu teslim alındı — Hicaz seferinin ilk kıyı üssü» (gun "Ekim 1811"; ic_not Burckhardt, *Notes on the Bedouins and Wahábys* II (1831) s.345-346: Eylül hareket ayı, "Yenbu'ya çıkış Ekim 1811" — Burckhardt metni ay vermiyor, "Ekim" atlasın çıkarımı).

### Bulunan kaynaklar ve verdikleri gün
| Kaynak | Verdiği | Durum |
|---|---|---|
| **J. L. Burckhardt, *Travels in Arabia* (London 1829; Project Gutenberg #9457 metni), Yembo bölümü** | «**In the autumn of 1811**, when the Turkish army under Tousoun Pasha effected its first landing near the town, the Yembawys were very willing to shake off the government both of the Sherif and the Wahabys; … after a trifling show of resistance, the two first days, by Ghaleb's commander …, the town opened its gates»; «Tousoun's first expedition … defeated in autumn 1811» (Cüdeyde vadisi); «The last time the Wahabys performed the Hadj was in 1811, shortly after the first defeat of Tousoun Pasha at Djedeyde» | **OKUNDU** (ham metin, bu turda). **Ay vermiyor — "sonbahar 1811".** (Önceki turun "Burckhardt 'Ekim 1811'" ifadesi doğru değil: "Ekim" Vikipedi/Vassiliev kaynaklı; Burckhardt Travels'ta ay yok) |
| Burckhardt, *Notes on the Bedouins and Wahábys* II (1831) s.345-346 (atlas madde ic_not'u aktarıyor) | «ready for departure, at the end of August, 1811»; piyade Süveyş'ten Yenbu'ya gemiyle, Tosun süvarisiyle karadan | AKTARIM (atlas maddesindeki alıntı; bu turda ham sayfa okunmadı) |
| **Abdurrahman el-Cebertî, *Acâibü'l-âsâr fi't-terâcim ve'l-ahbâr* III s.333-336** (Salaf Center'ın tarihlendirilmiş aktarımı `salafcenter.org/8371`, dipnot 42-47) | (a) giriş **12 Ramazan 1226 / 30 Eylül 1811** (editör çevirisi): «وردت الأخبار بأن العساكر البحرية **ملكوا ينبع البحر** ونهبوا ما كان فيه من ودائع التجار» (haber Kahire'ye ulaştı); (b) **19 Zilkade 1226 / 5 Aralık 1811**: «اجتمع العسكر البري مع البحري وأخذوا **ينبع البر** من غير حرب»; (c) **15 Zilhicce 1226 / 31 Aralık 1811**: kara ordusu «ينبع البر'a **21 Şevval**'da (≈ 7 Kasım 1811) vardı» | **AKTARIM** (Arapça cümleler siteden; baskı/editör sayfası okunmadı). Girişin tarihi **haberin Kahire'ye gelişidir**, olay tarihi değil → "liman en geç ≈30 Eylül 1811'de alınmıştı" (terminus ante quem) |
| TDV «Yenbu'» | «Tosun ve İbrâhim paşaların öncülüğünde Yenbu' tekrar Osmanlı egemenliğine sokuldu (1811)» — YIL | OKUNDU |
| TDV «Tosun Paşa»/«Mehmed Ali Paşa» | Yenbu maddesi aranan sayfada bulunamadı (arama sayfası döndü) | OKUNMADI |
| Vikipedi «Capture of Yanbu (1811)» | «Ekim 1811» (dayanak Vassiliev, *History of Saudi Arabia*; yıl/sayfa verilmemiş) | iddia; dayanak SAYILMADI |
| lakhasly.com özeti | "Şaban 1226 (Eylül 1811) sefer başlangıcı, Yenbu çıkarması Kasım" ; Cebertî'den 21 Şevval alıntısı | popüler; Cebertî alıntısı (c) ile aynı; "Kasım" cümlesi dayanaksız → SAYILMADI |
| Fahmy, *All the Pasha's Men*; Vassiliev; Cevdet Tarihi; Abdurrahman Şeref; Mehmed Ali Paşa-İzzet; DergiPark Hicaz makaleleri | — | OKUNMADI (Fahmy/Vassiliev metinlerine ulaşılamadı; DergiPark'ta Yenbu'ya özel makale bulunamadı) |

Not (karışıklık kaynağı): Cebertî **iki Yenbu** ayırır — *Yenbu' el-Bahr* (liman; atlasın `tur:"liman"`, 24.089/38.063 koordinatı = bu) ve *Yenbu' el-Berr/Nahl* (iç vaha). Atlas kaydı liman olduğundan (a) maddesi geçerlidir; (b)-(c) iç vaha / kara ordusunun gelişiyle ilgilidir ve Kasım'ın dayanağı DEĞİL (21 Şevval ≈ 7 Kasım, atlasın 1 Kasım'ından da farklı).

### Karar (hakemli kural)
- TDV yalnız yıl (1811): TDV'ye karşı gün aranacak bir TDV günü yok.
- Ay hakemliği (bağımsız iki kaynak, ikisi okunarak ya da aktarımla): Burckhardt «1811 sonbaharı; piyade Ağustos sonunda hazır» + Cebertî «liman haberi 12 Ramazan 1226 ≈ 30 Eylül 1811'de Kahire'de» ⇒ liman ele geçirilişi **Eylül 1811** (Süveyş'ten hareket 3 Eylül madde tarihi ile 30 Eylül haber tarihi arası). **1811-11-01 (Kasım) iki kaynakla da çelişir** (Kasım 1811'de Cüdeyde yenilgisi artık yaşanmış, Vehhâbîler 1811 haccına katılmıştı).
- Gün: **kaynakta yok** (yalnız terminus ante quem ≈30 Eylül). Gün uydurulmaz; kesinlik **ay**.
- Güven: ORTA — Cebertî yalnız ikincil aktarımdan okundu; baskı sayfası/çeviri günü doğrulanmadı; Hicrî çevirisi aktarımdaki editör günü. Çift teyit (gün) YOK.
- "Ekim" (atlas madde 56 + Vikipedi/Vassiliev) ile "Eylül" çelişir: Cebertî haber tarihi 30 Eylül'den ÖNCE ele geçirişi gerektirir; Vassiliev'in "Ekim" dediği ham metin OKUNMADI. Karar: Eylül; Ekim için kaynak aranacak (Vassiliev, Fahmy).

### Uygulanacak değişiklik (`yerlesimler.js:905`)
```
s: … {f:"1805-07-20",t:"1811-09-01",d:"suud-birinci",kesinlik:{t:"ay"},kaynak:"t: ay işareti (ayın 1'i) — liman Eylül 1811'de Mısır donanmasına teslim oldu: J. L. Burckhardt, Travels in Arabia (London 1829), Yembo bölümü: 'In the autumn of 1811 … Tousoun Pasha effected its first landing near the town … the town opened its gates' (OKUNDU; ay yok) · Cebertî, Acâibü'l-âsâr III s.333-334 (Salaf Center aktarımı; baskı OKUNMADI): 12 Ramazan 1226 / 30 Eylül 1811'de Kahire'ye 'العساكر البحرية ملكوا ينبع البحر' haberi geldi ⇒ en geç Eylül 1811 sonu · TDV yenbu: yıl (1811) · ic_not: önceki 1811-11-01 ucu kaynaksızdı ve Cebertî/Burckhardt ile çelişir; 1 Kasım ≈ iç vahaya (Yenbu' el-Berr) kara ordusunun gelişine (21 Şevval 1226 ≈ 7 Kasım) yakındır, liman değil; 'Ekim 1811' (Vikipedi/Vassiliev) OKUNAN kaynağa dayanmıyor; gün kaynakta YOK; Fahmy/Vassiliev/Cevdet OKUNMADI"} …
v:[{f:"1811-09-01",t:"1841-05-24",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali",kesinlik:{f:"ay"},kaynak:"f: bkz. suud-birinci t (Burckhardt 1829; Cebertî III s.333-334 aktarım) — Eylül 1811, AY"}]
```
SERBEST ek (yerlesimler.js DIŞI): `olaylar_ek4.js:56` maddesi t `1811-10-01`/gun "Ekim 1811" → t `1811-09-01`, gun "Eylül 1811", `kesinlik:"ay"` ve ic_not'a Cebertî eklenmeli; yoksa `v` f ucu ile madde 30 gün ayrışır (kesin sınır, Değişmez 2 sınırında). Not: `olaylar_ek4.js:52` (Hareket, 1811-09-03) `v` f 1811-09-01'den 2 gün SONRA kalır — ay işareti ayın 1'i olduğu için "hareket"ten önce görünür; ay hassasiyetinin bilinen yan etkisi, kayıtta beyanlıdır.

### İki uç ölçümü
- `s` suud-birinci t = `v` f = **1811-09-01** (bitişik). `v` t 1841-05-24 = `d` f (değişmez). `s` f 1805-07-20 (Suud'un Yenbu'yu alışı, değişmez).
- Künye: `suud-birinci` 1744-01-01 → 1818-09-09 (devletler.js:1361) içinde; `misir-kavalali` 1805-07-03 → 1914-12-18, `tabi osmanli` (devletler.js:1460) içinde.
- ±30 gün: yeni uç 1811-09-01 ↔ `olaylar_ek4.js:52` (1811-09-03, 2 gün) VAR; ↔ `:56` (1811-10-01, 30 gün — sınırda; madde 09-01'e alınırsa 0 gün). Eski uç 1811-11-01 ↔ `:56` 31 gün (eşik 30 aşımı; D2T bulgusunun kaynağı).
- Kalan belirsizlik: Cebertî baskı sayfası; Vassiliev'in 'Ekim'inin dayanağı; Yenbu' el-Bahr'in tam teslim günü (Eylül ortası mı sonu mu).

---

## Genel uyarılar
1. Hiçbir dosyada değişiklik yapılmadı; bu belge KASA/uygulayıcı için kuyruktur. Uygulamadan sonra `py arac/denetle.py` + `renk_olc.py` + `paketle.py yenile` + `surum_damgala.py` şart.
2. Peşte (isg) ve Yenbu (v f) önerileri Değişmez 1-3 ve renk motoru etkisini içerir; motor çıktısı koşudan sonra görünür.
3. Okunmayan kaynaklar listesi (sonraki turda öncelik): Runciman III s.598; Fuess ARAM 9/1 (1997); Setton (1991); Chasiotis (1975); Hóman-Szekfű VI; Hochedlinger (2003) s.159; Vassiliev; Fahmy; Cebertî baskısı (Beyrut baskısı/ Cairo 1998) c.3 s.333-336.
