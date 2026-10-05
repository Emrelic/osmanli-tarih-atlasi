# UMIT-W16-KAMPANYA-02-1006 — kişi kaynak kampanyası, dilim 02 (TABLO-02…07 + W12 not-çelişkileri)

Yama: `denetim/KISI-KAYNAK-02-1006.diff` (sha256 `26b5b039e97131db…`, 706 satır, CR 0) · yalnız `data/kisiler.js`.
**Taban:** `origin/main` `1381bf76` + `EDIGU-1006.diff` + `KISI-KAYNAK-01-1006.diff` — ikisi de main'de yalnız
DOSYA olarak duruyor, `data/kisiler.js`e UYGULANMAMIŞ (main'de kaynaklı kişi hâlâ 22). İkisi bugünkü main'e
ileri temiz uygulandı (arada `7a1a855e` kisiler.js'e dokunmuş, çakışma yok), 02 onların üstüne çıkarıldı.
⇒ **Uygulama sırası zorunlu: EDIGU → 01 → 02.** Commit yok.

## 1. Kapsam
- Kaynaksız 266 − 01'in 47'si − `edigu` (EDIGU kaynak yazıyor) = **218**. Bunun **189**'una kaynak: ① 78 · ② 111.
- **③ 18 + D 11 = 29 kayda kaynak YAZILMADI** (koordinatör: W22 çıkarıcı bulgusu, yeniden denetlenecek). Kalan kaynaksız 29 =
  tam bu liste: hasan-tahsin · kerey-han · erdeni-batur · harihara1 · krisnadevaraya · zhao-kuangyin · wanyan-aguda · sejong ·
  raden-wijaya · hayam-wuruk · le-loi · nguyen-anh · thibaw · oba-ewuare · joao1 · nzinga · shaka · moctezuma2 · cuauhtemoc ·
  pachacuti · atahualpa · simon-bolivar · kamehameha1 · george-tupou1 · dom-pedro2 · jean-jacques-dessalines · liliuokalani ·
  andrianampoinimerina · sho-hashi.
- + `nevsehirli-damad-ibrahim-pasa` (zaten kaynaklı; yalnız W12 not-çelişkisi düzeltmesi) ⇒ **190 kayıt değişti.**
- Kaynaklı kişi: 22 → 23 (EDIGU) → 70 (01) → **259** (02).
- 27'lik grup (yabanci-komutan/denizci/mimar/edebiyatçı/hanedan) **DAHİL** — hepsi ① ya da ②'ydi.

## 2. Biçim (01 ile aynı; koordinatöre giden iki soru cevaplanınca toplu değiştirilebilir)
- ① `kaynak:"TDV: <slug>"` · ② `kaynak:"TDV: <kapsayıcı> (müstakil madde yok; …)"` — burak-reis emsali.
- Kaynağın vermediği DOLU f/t: parantezde "doğum yılı / ölüm yılı kaynakta yok" — **① kayıtlarda da** (ör. `resid-mehmed-pasa`).
- Kaynak seçimi tablolardan otomatik: ① slug sütunu, ② kapsayıcı sütununun İLK slug'ı; "+" ile anılan ek maddeler yazılmadı
  (yalnız `suleyman`: ölüm `huseyin-mirza`'da olduğu için parantezde anıldı).
- Adaş canlı slug uyarısı parantezde: yakub-bey · yakub-bey-kasgar · mevlay-muhammed · hayrullah-efendi · ziya-pasa · nadir-sah · hafiz-mehmed-pasa.
- Alan değişikliği sayımı: kaynak 189 · f 15 · t 14 · donem 14 · tartisma 14 · tur 3 · not 5 · ic_not_f 9 · ic_not_t 6 · ic_not_tur 3 · ic_not_not 5.
  288 kayıt alan alan karşılaştırıldı: izinsiz anahtar 0, sıra/`id`/`devlet` değişmedi.

## 3. 🔴 Koordinatör şartları — tek tek
| şart | uygulama |
|---|---|
| 27'lik grup dahil | ✓ |
| seyh-bedreddin İKİ yol | **01'de zaten yazılı, 02'de dokunulmadı**: `t:"1420"` + `ic_not_t` hem "1416 = İznik'ten kaçış yılı" hem "kaydın kendi notu 823 (1420)" diyor. Görünür bir alana da (tartisma) yazılması isteniyorsa söyle |
| W12'nin 7 not-çelişkisi diff'in içinde | turgut-reis · uzun-hasan · seyh-bedreddin **01'de** · cengiz-han 1162→1155 · nevsehirli 1666→1662 · ahmed-cevdet 1822→1823 · piri-reis t 1554→1553 **02'de** ✓ (7/7) |
| mimar-sinan 1488 çelişki değil | `f:"1488"` YERİNDE; parantez: "TDV yalnız '896 (1491) yılından önce' der — 1488 kaynakta yok, üst sınırla çelişmiyor". ⚠️ bk. §4-K3 |
| birleştirmede çakışma ölç | §4 |
| saltanat parantezi sonu t sayılmaz | louis14 · mihail-fyodorovic · nikolay1 · rancit-singh · tsevang-rabtan → "ölüm yılı kaynakta yok". **Bu beş satırı örneklemde (W16-ORNEKLEM-1006 §4) ben saymıştım; düzeltildi** |
| ③ 29 kayda yazma | ✓ 0 yazıldı |
| tür/not hataları | §5 |

## 4. ÇAKIŞMALAR — adıyla (sessizce seçilmedi)
Tablolar 01–07 + iki örneklem tek listeye çekildi: 266 farklı `id`, 30'u iki kaynakta.
- **Sınıf/slug çakışması: 0** — 30 çift kaydın hepsinde ① / ② ve slug/kapsayıcı aynı.
- **K1 · f/t hükmü çakışması: 5** — louis14, mihail-fyodorovic, nikolay1, rancit-singh, tsevang-rabtan. Örneklem "saltanat ✓ t ✓",
  TABLO-03/05 "var (örneklemde …)" diye taşımış. Koordinatör kuralıyla hepsi t **yok**.
- **K2 · "dolaylı" t (tablo "var" diyor, ben YOK yazdım — kuralın ruhuyla):** `patrona-halil` (25 Kasım; yıl maddenin bağlamından) ·
  `kabakci-mustafa` (cümle yıl yazmaz, II. Mahmud cülusuna bağlar) · `alaeddin-hasan-behmen-sah` (halefin saltanat parantezinden çıkarım).
  TABLO-06 §C-4 "çıkarımla gelen yıllar halka almaz" ile aynı gerekçe. Koordinatör "var" derse 3 parantez silinir.
- **K3 · mimar-sinan ↔ kilic-ali/ali-kuscu emsali:** W12 + koordinatör "çelişki değil" dedi, değer kaldı. Ama 01'de `kilic-ali-pasa`
  (TDV "1500'lerin başı muhtemel") ve 02'de `ali-kuscu` (TDV "XV. yüzyıl başları tahmin") D210 gereği BOŞALTILDI. Sinan'da TDV yalnız
  üst sınır veriyor — 1488 kaynakta yok ama çelişmiyor. Tutarlılık için hüküm koordinatörde: (a) bırak (şu an) · (b) boşalt.
- **K4 · edigu ↔ TABLO-03:** EDIGU-1006 `kaynak`ı "823'te (1420) ölümünden sonra" (`nogaylar`) cümlesine dayanıyor. TABLO-03 §D-2:
  **TDV kendi içinde çelişik** — `mangitlar` "ö. 1419", `baba-tukles` "822/1419", `nogaylar` 823/1420. W11'in kaydı; **dokunmadım**.
  Öneri: `tartisma` alanına iki değer (seçimsiz). İstersen 03'e koyarım.
- **K5 · kampanya ↔ W12:** W12'nin 7'si ile tablolar arasında yön çakışması yok (cengiz/cevdet/piri tablolarda da ÇELİŞKİ, aynı yön).
  `nevsehirli` hiçbir tabloda yok (zaten kaynaklıydı) — TDV ayrıca okundu: "tahminen 1073'te (1662) dünyaya geldi".
- **K6 · koca-husrev-pasa:** TDV yalnız tahmin veriyor ("1756 yılında doğduğu tahmin edilmektedir"). Turgut (tahminen 1487) ve
  Nevşehirli (tahminen 1662) emsaline uyup **1756 yazdım**, eski 1769 `ic_not_f`'te. 1769 TDV'nin "öldüğünde doksanı aşmıştı"
  cümlesiyle de çelişiyordu.

## 5. Düzeltmeler
**Çelişkiler (TDV esas, eski değer `ic_not_<alan>`, `donem` birlikte):** serif-huseyin f 1854→1853 · koca-husrev f 1769→1756 ·
mengli-giray1 t 1515→1514 · feth-ali-sah f 1772→1771 · abdulaziz-bin-suud f 1876→1880 · huseyin-bin-ali t 1740→1739 ·
cengiz-han f 1162→1155 · piri-reis t 1554→1553 · seydi-ali-reis t 1563→1562 · huseyin-rifki-tamani t 1817→1816 ·
ahmed-cevdet-pasa f 1822→1823 · ziya-pasa f 1825→1829 · sedefkar-mehmed-aga t 1617→1618 · nevsehirli f 1666→1662 (**14**).
**D210:** ali-kuscu f 1403 boşaltıldı, `donem` "XV. yüzyıl başı (tahmin) – 1474".
**Tartışmalı → `tartisma`, değer yerinde (14):** kavalali · sultan-huseyin · kara-yuluk (t) · batu-han (t) · kucum-han (t) · ahmed-bin-said (t) ·
yahya-hamiduddin · hayrullah-efendi · sinasi · muhammed-ahmed · evliya-celebi (t boş, DOLDURULMADI) · yakub-bey-kasgar (f boş, doldurulmadı) ·
agung (saltanat sonu 1645/1646, TDV kendi içinde) · hoca-tahsin (f 1811 TDV başlığından + üç aday).
**TDV'nin doldurduğu boş alanlar (kesin olanlar):** t → abdullah-b-suud 1818 · yakub-bey 1490 · cihan-sah 1467 · barsbay 1438 · kayitbay 1496 ·
ilbars-han 1525 · sundiata-keita 1255 · hoca-tahsin 1881 · f → kayitbay 1423 · devlet-giray 1512 · aga-muhammed 1741 · suud-bin-abdulaziz 1750 ·
haydar-ali 1720 · hoca-tahsin 1811. **Bilerek DOLDURULMAYAN** (TDV tahmin/rivayet): zahir-berkuk ~1340 · tomanbay 1474-75 "kabul edilir" ·
muhammed-bin-suud "muhtemelen" 1689 · ahmed-gran 1506 "rivayet" · piri-reis ~1470 · askiya-muhammed (1528 tahttan düşüş, ölüm DEĞİL).
**Tür (sözlükte var):** said-efendi alim→sadrazam · seydi-ali-reis alim→denizci · abdullah-b-suud yabanci-komutan→yabanci-hukumdar (eski `ic_not_tur`).
**Not (yeni `not`, eski `ic_not_not`):** abbas2 (Bağdat 1638/Kasr-ı Şirin 1639 onun saltanatından önce) · ahmed-bin-said (Maskat'ı
İranlılar'dan kurtardı, Portekizlilerden değil) · kara-yusuf (1410 Bağdat'ı oğlu Şah Mehmed aldı) · yakub-bey (doğrudan halef Halil) ·
kayitbay ((1485-1491) → (1485-1490)).

## 6. Yapılmayan / öneri
- `gercek-davud` türü: TDV "mühendis"; sözlükte karşılığı yok (`mimar` aynı şey değil) — **önerim:** yeni tür değeri ya da bırak. Dokunmadım.
- `mehmed-namik-pasa` (TDV "devlet adamı", kayıt komutan) · `gojong` saltanat başı 1863/TDV 1864 · `idris-alooma` "yak." · `bogdan1`
  t 1367 (işaretlendi, değer duruyor) · TABLO-02 §D-5 / 03 §D-4'teki kaynakta okunmayan `not` iddiaları (Sobieski Olesko, Katerina Stettin,
  İsmâil Kâmil "öldürüldü", Eugen 1717, Ömer Mekrem nakîbüleşraf) — **raporlandı, değiştirilmedi** (TDV ile ÇELİŞKİ değil, desteksizlik).
- `edhem-pasa` ad (01'den) hâlâ açık.

## 7. Sınav
| | ÖNCE (main+EDIGU+01) | SONRA (+02) |
|---|---|---|
| `denetle.py` | çıkış 2 | çıkış 2 — **içerik birebir**: tek fark Değişmez 4s listesinde eşit sayılı `adal`/`katalan` satırlarının yer değiştirmesi (sıralı içerik aynı; kişi dosyasıyla ilgisiz eşitlik sırası) |
| `odak_olc.py` | 0 | 0 — birebir |
| `durum_tablosu.py` | 0 | 0 — birebir |
| UYARI | 1 | 1 — **yeni 0** (var olan: ek29 Deyrülkamer) |
- denetle çıkış 2 her iki tarafta: Değişmez 8 ÖLÇÜLEMEDİ (`devletler_harita.js` taze ağaçta yok) — kişi dosyası girdisi değil.
- Kişi atfı: 61/61 çözülüyor, **kırık 0**.
- CR 0 · main+EDIGU+01 üstüne **ileri ✓ / -R ✗**.

## 8. Git
- `C:\atlas-w16`: temiz (0 satır; indeks sıfırlandı).
- `C:\atlas-umit`: bu teslimden `?? denetim/KISI-KAYNAK-02-1006.diff` · `?? denetim/UMIT-W16-KAMPANYA-02-1006.md`.
