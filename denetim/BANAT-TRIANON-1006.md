# BANAT-TRIANON-1006 — Banat'ın (ve Crișana'nın) Trianon ile Romanya'ya geçişi maddesi

**Oturum:** LUGOS-KLAGENFURT-1006 (devam görevi) · görev: UMIT İRTİBAT, 6 Ekim 2026
**Temel:** `origin/makine/umit` `3ec79a5f` · ağaç `C:\atlas-p84-banat` (ölçümden sonra `git checkout -- data/` ile geri alındı)
**Teslim:** `denetim/BANAT-TRIANON-1006.diff` — `data/olaylar_ok109.js`e 1 madde (**UMIT parti sırası**). `git apply --check`
temiz (tek başına da, LUGOS-KLAGENFURT-1006 KOORD+UMIT diff'lerinin üstüne de), `node --check` temiz, CR **0**, **UYGULANMADI**.
Tırnaklar diff yazılmadan önce gövdeye karşı betikle birebir sınandı. Motor tuzu dosyalarına dokunulmadı.

## 0. Mükerrer kapısı
`data/olaylar*.js` + `data/kronoloji_sinir*.js`te 1919-1921 arasında "Banat" geçen madde **0**. Trianon'u anan maddeler:
`olaylar_ok109.js:151` (Macaristan geneli; Erdel ve Yukarı Macaristan'ı adlandırıyor, Banat'ı anmıyor — bkz.
`LUGOS-KLAGENFURT-1006.md §7`) ve `kronoloji_sinir_avrupa_orta.js:80` (1921-07-26, Macar–SHS sınırı). ⇒ mükerrer değil.

## Ö. ÖNGÖRÜ (ölçümden önce yazıldı)
Taban LUGOS diff'leri uygulanmış hâl (2sk 2249). Madde eklenince: Lugos · Temeşvar · Yanova'nın **1920-06-04** birimleri
TARAF'tan YER'e geçer (**−3**); **1918-11-11** birimleri TARAF'ta kalır (madde o günü anlatmıyor) ⇒ **2249 → 2246**
(GÜN YER +3, GÜN TARAF −3). 2 · 2s · 2i değişmez. Mükerrer: aynı gün Trianon maddesi olduğu için 95 → 95..96 riski.
**Sonuç: sayı ve mekanizma TUTTU** (§3); mükerrer riski gerçekleşmedi.

## 1. Gün seçimi — 1920-06-04 (imza), 1921-07-26 (yürürlük) DEĞİL
| ölçüt | 1920-06-04 | 1921-07-26 |
|---|---|---|
| F8 kararı (Emre, 5 Eki 2026: de jure devir antlaşma gününde) | ✓ | ✗ |
| atlasın Banat/Crișana noktaları (`s:` romanya-kralligi başlangıcı) | Temeşvar `yerlesimler.js:489` · Yanova `:1364` · Lugos (KOORD önerisi) = **1920-06-04** | hiçbiri |
| ±30 gün penceresi | aynı gün | 417 gün uzak — hiçbir birimi kapatmaz |
| kaynak | MNIR ve TDV `birinci-dunya-savasi` imza gününü veriyor | atlasta yalnız Macar–SHS hattının maddesi bu günde |
⇒ 1920-06-04. Gerekçe maddenin `ic_not_d`sine yazıldı.

## 2. Kaynak (birebir; denendi 6 Ekim 2026)
- **MNIR — Muzeul Virtual al Unirii** (mvu.ro), *"Tratatul dintre Puterile Aliate și Asociate și Ungaria, Trianon, 4 iunie 1920"*
  (Romanya Ulusal Tarih Müzesi projesi): *"Tratatul de Pace cu Ungaria , semnat la Trianon la 4 iunie 1920, este actul
  internațional care a recunoscut Unirea Transilvaniei, Banatului, Crișanei și Maramureșului cu Regatul Român și a fixat și
  granița comună româno-ungară"* — **Banat ve Crișana ADIYLA**.
- Aynı sayfada **md. 45** (Romence resmî çeviri): *"„Ungaria renunță, în ceea ce o privește, în favoarea României, la toate
  drepturile și titlurile asupra teritoriilor fostei monarhii austro-ungare situate dincolo de fruntariile Ungariei, astfel cum
  sunt fixate la articolul 27, Partea II (Fruntariile Ungariei) și recunoscute prin prezentul Tractat sau prin orice alte Tractate
  încheiate în scop de a regula afacerile actuale, ca făcând parte din România”"* ve **md. 27** için *"aliniatul 3 -frontiera cu
  România"*.
- **TDV `timisvar`** (önce o okundu): *"Barış antlaşmalarına göre Banat bölgesi Romanya ve Sırbistan arasında bölüşüldü."* ·
  *"Tımışvar şehri Romanya Krallığı’na katıldı."*
- **TDV `yanova`**: *"Günümüzde Batı Romanya’da Arad idarî bölümü içinde Macaristan-Romanya sınırı yakınında Crişul Alb (Türk
  döneminde Ak Köröş) nehri kıyılarında yer alır."*
- **TDV `birinci-dunya-savasi`**: *"4 Haziran 1920’de Macaristan ile Trianon"* … antlaşmaları imzalandı.
- **TDV `banat`: 302 (ölü)**; ilk denemede `000` (taşıma arızası), iki yeniden denemede 302. `trianon`, `trianon-antlasmasi`,
  `trianon-antlasmasi--1920`: 302. Başlık araması `Trianon` / `Banat` (`ARAC-TDV-CIKARICI-1006.py baslik`): Banat ya da
  Trianon maddesi yok (adakale, avrupa, birinci-dunya-savasi, erdel, macaristan… döndü).

## 3. ÖLÇÜM — `py arac/denetle.py` (üç aşama, aynı ağaç)
| soru | ⓪ taban `3ec79a5f` | ① + LUGOS KOORD + UMIT | ② + BANAT |
|---|---|---|---|
| çıkış | 2 (yalnız D8 ölçülemedi — taze ağaç) | 2 | 2 |
| D2 | 623 / 0 | = | = |
| 2s kırılma · AÇIK · yıl-temsilî | 1720 · 186 · 165 | 1721 · 186 · 165 | 1721 · 186 · 165 |
| **2sk yalnız-taraf** | 2247 (tavan 2247) 🧊 | **2249 ⚠️** | **2246** 🧊 — araç: *"🟢 İYİLEŞME: tavan 2247 → 2246 yapılabilir"* |
| GÜN YER · GÜN TARAF | 1368 · 1584 | 1370 · 1586 | **1373 · 1583** |
| 2i | 171 / 1 | 172 / 1 | 172 / 1 |
| 2t · mükerrer | 13 · 95 | = | 13 · **95** |
| mükerrer ZAYIF ölçüt (bilgi, ihlal değil) | — | 80 | 81 |
| `odak_olc.py` çözülmeyen odak atfı | — | — | **0** (yeni `odak_yer` üç adı çözülüyor) |

**Birim birim** (`denetle.py`nin kendi `_2s_yeri_aniyor` / `_2s_tarafi_aniyor` işlevleriyle, ② hâlinde):
| birim | YER | TARAF |
|---|---|---|
| Lugos · Temeşvar · Yanova **1920-06-04** | **1** (yeni madde) | 2 |
| Lugos · Temeşvar · Yanova **1918-11-11** | 0 | 7 (değişmedi) |

**Cevaplar:**
- *Lugos +2 kalkıyor mu?* **Yarısı.** 1920-06-04 birimi YER'e geçti; 1918-11-11 birimi TARAF'ta kalıyor (o gün Macar tacından
  Macar devletine geçiştir; Pat Çiçeği Devrimi maddesi o devri anlatıyor, yeri anmıyor — bu madde o günün maddesi değil).
- *Temeşvar/Yanova kapanıyor mu?* **Evet**, ikisinin de 1920-06-04 birimi YER'den kapanıyor.
- *Tavan kaç düşüyor?* LUGOS'un +2'si ve BANAT'ın −3'ü birlikte: **2247 → 2246 (net −1)**. `§3.4 ③`: iyileşince tavan iner ⇒
  BEKLENEN **2246**, ve `§3.4 ②` gereği üç diff (LUGOS KOORD + LUGOS UMIT + BANAT) ile **AYNI commit'te**. Bu üçü ayrı inerse
  ara commit'te 2sk 2249 ⚠️ olur.
- *2s/2i:* değişmedi (madde yeni kırılma üretmiyor; 1920-06-04 zaten açık değildi).
- Mükerrer ZAYIF ölçüt 80 → 81: bilgi satırı (*"aynı kişi + ±3 gün, AYRI gün"*), ihlal değil. Hangi çift olduğu **ölçülmedi**.

## 4. Madde (özet; tam metin diff'te)
`t:"1920-06-04"` · `k:"antlasma"` · `onem:3` · b: *"Banat ve Crișana Romanya'ya bırakıldı — Temeşvar, Lugoj ve Ineu (Trianon md. 27/3
ve 45)"* · `yer_id:"Temeşvar"` · `odak_yer:["Temeşvar","Lugos (Lugoj)","Yanova (Ineu)"]` · `yer:"Temeşvar (Timișoara), Lugos (Lugoj),
Yanova (Ineu)"`. Yeri: `olaylar_ok109.js`te Trianon maddesinin hemen ardı (Değişmez 2 evreni, `olaylar*`).
`kronoloji_sinir_avrupa_orta.js` **seçilmedi**: dosya başlığı *"ELLE DÜZENLEME"* diyor, `ARAC-D3ORTA-URET-0916.py` üretiyor.

## 5. Dürüstlük notları
- **Yanova Banat'ta DEĞİL**: Arad, Crişul Alb kıyısı (TDV yanova) ⇒ Crișana. Madde bu yüzden "Banat **ve Crișana**" diyor ve
  MNIR Crișana'yı adıyla anıyor. Yanova'yı Crișana'ya yerleştirmek TDV'nin coğrafî tarifinden **çıkarımdır** (Crișana adı TDV'de
  yok) — `ic_not_d`ye yazıldı. Böyle bir tarif olmasaydı Yanova maddeye alınmazdı.
- **Batı Banat (SHS payı)**: atlasta o kesimde nokta yok (Pančevo / Veliki Bečkerek / Vršac YOK) ⇒ madde yalnız TDV'nin
  "bölüşüldü" cümlesini anıyor, yön/sınır iddiası yazmıyor.
- **Orsova** (Banat): atlasta hâlâ `1918-01-01` yıl-temsilî ⇒ bu madde onu kapatmaz; maddeye ADIYLA alınmadı (`ic_not_d`de
  beyan). Orsova'nın kalemi ayrı (LUGOS-KLAGENFURT-1006 §5).

## 6. Bulamadım
- TDV'de Banat ve Trianon maddesi (slug'lar 302, başlık araması boş).
- Antlaşmanın özgün (Fransızca/İngilizce) metninin kurumsal bir kopyası **aranmadı**: MNIR'in Romence resmî çevirisi md. 45'i
  birebir veriyor.
- Mükerrer ZAYIF +1 çiftinin kimliği.
