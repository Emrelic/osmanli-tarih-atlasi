# BOYA-BORC-1009 — renksiz künye borcunun `arac/renkler.py` önerisi (UMIT)

9 Ekim 2026 · makine UMIT · taban `origin/main` **0c4b383c** (iş sonunda yeniden fetch edildi, main kıpırdamadı).
**UYGULANMADI, commit YOK.** `renkler.py` koordinatörün dosyası; bu yalnız öneri diff'i.
Teslim: `denetim/BOYA-BORC-1009.diff` (yalnız `arac/renkler.py`, +24 satır: 17 BOYALAR kaydı ve 7 yorum satırı;
LF, BOM yok, CR 0; sha256 `ad7f449a…6663`). `git apply --check` iki tabanda ✓: temiz origin/main ve
`ZAMAN-PAKET-1009-v2.diff` uygulanmış ağaç.
⚠️ `renkler.py` motor tuzunda. Tuz bu koşuda zaten değişiyor (ZAMAN paketi `girdi.py` ve `uret_petek.py`ye dokunuyor), o yüzden
boyaların **bu koşuda** inmesi gerekiyor (`§9.1` ②).

## 1. Envanter — bugünkü main'de ÖLÇÜLDÜ (`durum_tablosu.olc()` · yazılmadı)

| kova | önce | sonra (diff uygulanınca) |
|---|---|---|
| 🔴 haritada (`s:`/`isg:`) kullanılıyor, boyasız | **7**: eyyubi-hama · gozleroglu · kudus-kralligi · resuli · sicilya-kralligi · tahiri · trablus-kontlugu | **0** |
| 🟡 hiçbir yerde (gerçek sessiz) | 11: aleut · arua · charrua · crnojevic-zetasi · hatay-devleti · kibris-ingiliz · luksemburg-hollanda-birligi · norvec-isvec-birligi · ranquel · sabah-emirligi · sani-emirligi | 11, aynı adlar (kapsam dışı bırakıldı, §4) |
| 🟢 `boya_gerekli:true` beyanlı | **5**: eyyubi-meyyafarikin · idrisi · sacogullari · tahiri-horasan · uygur-kaganligi | **0** |
| ⚪ yalnız sınır/kronoloji/savaş/kişi katmanında | 125 | **121**. abbasi · antakya-prinkipsligi · eyyubi · mogol-imparatorlugu bu kovadan çıktı (Z6 hazırlığı, aşağıda) |
| ⚪ tâbi-çizili (`v:kid`) | 14 | 14 |
| renkli-künyesiz | 0 | 0 |
| ölü renk | 1: dobruca-despotlugu | **2**: + **argunlular** (künyesi inene kadar). Künye AYNI commit'te inerse 1'e döner |
| BOYALAR | 704 | 721 |

Koordinatörün bildirdiği listeyi doğruladım:
- EPOK'tan gelen 6 kimliğin altısı da 🔴 kovada.
- gozleroglu 🔴 kovada. `boya_gerekli:true` yazılı ve kendine `harita:"gozleroglu"` diyor, ama `s:`te kullanıldığı için beyan onu delik kovasından çıkarmıyor.
- argunlular `devletler.js`'te, veride ve git geçmişinde YOK. Yalnız `DOGU-SAFEVI-0086.md` ve `P10-UZAK-0914.md` anıyor.

**ZAMAN paketinin ölçümü.** `ZAMAN-PAKET-1009.diff` ayrı bir worktree'de `-C1` ile uygulandı (v1 de v2 de temiz uygulanıyor).
Renksiz kovalar paketten sonra **birebir aynı** (7/11/5/14). 1923-1945 kimliklerinin hepsinin boyası var.
Paketin taşıdığı `data/yer_yama_once1281_z6.js` (v2, 80 kayıt) `GIRDI_DOSYALARI`nda değil. Bu yüzden onu `ad` ile
**bellekte** bindirdim, dosya yazmadım. Bindirince 101 kimlikten **4'ü boyasız çıktı**:
`abbasi` · `antakya-prinkipsligi` · `eyyubi` · `mogol-imparatorlugu`. Z6 yaması yerleşimlere indiği an bu dördü 🔴 olur. Diff'e B grubu olarak alındı.
(`_sahiplik_uygula.py --yaz`'ı kendi geçici worktree'mde koşturmak istedim, izin sistemi reddetti. Yerine bellek bindirmesi kullanıldı.)

## 2. Önerilen renkler

Yöntem: `renk_olc.py --oner` bütün kimlikler için BİRLİKTE koşturuldu. Ölçüt aracın kendisinden geliyor: engel = Voronoi ∪ eşzamanlı 1500 km,
`DE_KOMSU` 12, altlık süzgeci ve deniz süzgeci. Ortam: paket-v2 + Z6-v2 bellek bindirmesi. Ek kısıt (aşağıda) **ARDIL** engeli oldu.

| kimlik | grup | renk | en yakın engel ΔE (oner) | ardıl ΔE | gerekçe |
|---|---|---|---|---|---|
| kudus-kralligi | A delik | `#8ad824` | 12.9 | →memluk 47.5 | oner |
| trablus-kontlugu | A delik | `#ae24d8` | 13.0 | →memluk 46.3 | oner; kudus ile komşu, ayrık |
| eyyubi-hama | A delik | `#de4eba` | 12.0 | →memluk 28.5 | oner; ayrı renk (aşağıya bak) |
| resuli | A delik | `#6cd824` | 17.9 | →tahiri **92.5** | oner |
| tahiri | A delik | `#9c24d8` | (2. geçiş) | ←resuli 92.5 · →memluk 46.6 · →yemen 69.7 | **çakışma çözüldü** (aşağıya bak) |
| sicilya-kralligi | A delik | `#1eb42a` | 12.0 | →napoli 67.1 | oner |
| gozleroglu | A delik | `#c66c24` | 12.3 | →akkoyunlu 34.8 | oner |
| antakya-prinkipsligi | B Z6 | `#d86624` | 12.6 | →selcuklu 27.5 · →memluk 15.8 | oner (Z6 bindirmesiyle 2 Voronoi komşusu) |
| eyyubi | B Z6 | `#24bacc` | 15.3 | →mogol 57.4 | oner |
| abbasi | B Z6 | `#246ccc` | 12.3 | →ilhanli 22.7 | oner + ardıl engeli |
| mogol-imparatorlugu | B Z6 | `#de246c` | 12.4 | →ilhanli 39.3 · altinorda 18.7 · cagatay 25.1 · selcuklu 19.2 · harizmsah 66.0 | 2. geçiş, ardıl engeli |
| eyyubi-meyyafarikin | C beyanlı | `#90d824` | 20.7 | — | ilk öneri `#6c24d8` `--dogrula`da **saltuklu ile 11.0** verdi; main ortamında yeniden çözüldü |
| idrisi | C beyanlı | `#7224d8` | 40.7 | — | ⚠️ komşu ölçülemedi |
| sacogullari | C beyanlı | `#72d824` | 17.0 | — | ⚠️ komşu ölçülemedi |
| tahiri-horasan | C beyanlı | `#78d824` | 16.0 | — | ⚠️ komşu ölçülemedi |
| uygur-kaganligi | C beyanlı | `#8424d8` | 39.5 | — | ⚠️ komşu ölçülemedi |
| argunlular | D künye yok | `#d2d824` | 12.9 | — | ⚠️ komşu ölçülemedi · **KÜNYE GEREKLİ** |

**resuli/tahiri çakışması: kök neden ve çözüm.** İkisi birlikte `--oner`a verilince araç resuli için `#6cd824`, tahiri için `#72d824` öneriyor (ΔE ≈ 1).
Aracın engel ölçütü yalnız **eşzamanlılığa** bakıyor. resuli 1454-01-01'de bitiyor, tahiri 1454-07-01'de başlıyor ⇒ araç bu paylaşımı "meşru" sayıyor.
Oysa ikisi **aynı yerleşimlerde ardışık sahip** (veride 2 geçiş). Renkler eşit olursa 1454'teki el değiştirmesi haritada görünmez.
Bu da `§1`in "kronoloji ile harita birbirini doğrulamalı" hedefini bozar.
Çare: aynı yerleşimin `s:`/`d:` dizisinde ardışık iki sahip `engel_kumesi`ne eklendi. Bunu yalnız bu koşu için, scratchpad'deki bir sarmalayıcıyla yaptım;
`renk_olc.py`ye DOKUNULMADI. Önce resuli seçildi, sonra tahiri resuli engel sayılarak seçildi. Sonuç ΔE 92.5.
Aynı sınıfta bir yeni↔yeni çift daha var, `eyyubi→mogol-imparatorlugu`, o da ayrık (57.4).

**`harita:` devralma önerisi: YOK.** eyyubi-hama, eyyubi-meyyafarikin ve eyyubi'yi tek boyaya bağlamak düşünülebilirdi, ama mevcut desen tersini gösteriyor:
`eyyubi-hisnikeyfa` (`#36d224`) kendi rengini taşıyor, kollar ayrı boyanıyor. Ayrıca Hama kolu 1250 sonrasında Memlük'e tâbi ayrı bir yapı
(1342'ye kadar). Ana kolun boyasını devralsaydı 1250 sonrası haritada "Eyyûbî" görünürdü. ⇒ Ayrı renk.

## 3. Çakışma ölçümü önce/sonra (main ortamı, `renk_olc.py` varsayılan denetim)

| sayaç | önce | sonra |
|---|---|---|
| görünmez | 0 | 0 |
| çakışma | 7 | 7 (aynı liste) |
| aynı-anahtar örtüşmesi | 70 | 70 |
| aynı-hex çakışması | 0 | 0 |
| yakın-ama-değmeyen (ΔE<12) | 14 | 14 (aynı liste) |
| SINIRDA 12 ≤ ΔE < 15 (yalnız ekranda, çıkış kodunu etkilemez) | 131 | **135**. Yeni dört çift: kesiri-sultanligi↔tahiri 12.61 · celayirli↔gozleroglu 13.13 · macaristan↔sicilya-kralligi 13.64 · ceneviz↔gozleroglu 14.74 |
| ÖLÇÜLEMEDİ çift | 7425 | 8275 (yeni kimliklerin verisiz pencereleri) |

`--dogrula` (17 öneri, birleşik artefakt) iki ortamda koşturuldu: main ve paket-v2+Z6 bindirmesi. Sonuç: **0 fark · eşik altı komşu 0**.
Import: `import renkler` ✓, 721 kimlik. Açıklık tabanı hiçbir yeni hex'e dokunmadı. Basılan iki "BEYAN EDİLMEMİŞ PAYLAŞIM" uyarısı
(#d24824 · #5ad224) **önceden de var**, bu diff'le ilgisi yok.
`PYTHONHASHSEED=0 py arac/denetle.py`: önce **2**, sonra **2**. Çıktı birebir aynı; tek ölçülemeyen Değişmez 8 (`devletler_harita.js YOK`, taze ağaç).

## KÜNYE GEREKLİ:
- **argunlular** (`devletler.js`'te künyesi YOK). DOGU-SAFEVI-0086 önerisine göre ~1479/1507–1522 aralığı (Kandehar; Sind kolu 1554'e kadar). TDV `argunlular` 302 (ölü slug), TDV `kandehar` ve `zunnun-argun` canlı.
  Künye boyayla **aynı commit'te** inmezse `renk_olu` 1→2 olur (yukarıda ölçüldü). Künye inmeyecekse diff'teki tek satır (D grubu) çıkarılsın.

## Ölçtüm · bulamadım · istiyorum
**Ölçtüm**
- Renksiz kovalar ADIYLA (yukarıda): 🔴 7 → 0 · 🟢 5 → 0 · Z6'nın getireceği 4 delik önceden kapandı.
- resuli/tahiri çakışmasının kök nedeni aracın ardıl kör noktası; çözüldü (ΔE 92.5).
- eyyubi-meyyafarikin↔saltuklu 11.0 `--dogrula` ile yakalandı ve düzeltildi.
- denetle 2→2. Çakışma sayaçları değişmedi; yalnız SINIRDA bandı +4.

**Bulamadım**
- argunlular künyesi ve onun akademik kaynağı.
- C grubu ve argunlular için komşuluk: veride dönemleri yok, araç da "öneri yalnız altlık ve Osmanlı ikilisine dayanır" diyor. Bu altı renk **zayıf öneridir**; veri inince `--oner` ile yeniden sınanmalı.

**Tuzak.** `durum_tablosu.olc()` stdout yönlendirilmiş (`contextlib.redirect_stdout`) çağrılınca `_bagli_mi.index_dosyalari()` içindeki `paketle.kaynaklar()` sessizce düşüyor (`except: pass`).
Katman evreni 13/184/2/1 yerine 0/22/0/0 çıkıyor ve sessiz borç **11 → 51** görünüyor. Yalancı bir ölçüm; ben bir kez düştüm.
Doğrudan komut satırında doğru sonuç veriyor. Araç sahibine bildirilmeli.

**Aracın kör noktası.** `renk_olc.py --oner` aynı yerdeki ardışık sahipleri engel saymıyor. Kalıcı çare `engel_kumesi`ne bir ardıl dalı eklemek.
Bu motor tuzu DEĞİL (`renk_olc.py` tuzda yok), ayrı bir iş olarak verilebilir.

**İstiyorum**
1. Diff bu geceki tam inşa koşusuna girsin. Seçenek (a) A+B+C+D hepsi (önerim). Seçenek (b) yalnız A+B: haritada görünen etki tamamen budur; C ve D'yi çıkarmak satır silmekle olur.
2. argunlular künyesi aynı commit'te insin. İnmeyecekse D satırı çıkarılsın.
3. 🟡 11 gerçek sessiz künye bu diff'e alınmadı. Hiçbir katmanda kullanılmıyorlar; boyamak haritada bir şey değiştirmez ve komşuları ölçülemez. İstenirse ayrı iş.

YENİ DOSYALAR: denetim/BOYA-BORC-1009.diff · denetim/BOYA-BORC-1009.md
