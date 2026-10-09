# UMIT-W46c — 9 sahiplik hatasının kırılma MADDELERİ (diff) + eşleşen yerleşim önerisi

**Temel: `d0f3cda1`** (`origin/main`, ağaç `C:\atlas-w46c`, `--detach`).
- **Diff:** `denetim/UMIT-W46c-MADDE-1006.diff`. Yalnız YENİ dosya: `data/olaylar_w46c.js`, 11 madde, `window.OLAYLAR_W46C`.
  `git apply --check` temiz `d0f3cda1` ağacında TEMİZ.
- **Ölçüm betiği:** `denetim/UMIT-W46c-D2-OLC-1006.py`. Yalnız okur; `denetle.py`'nin KENDİ `degismez2()`'sini çekirdek süzgeciyle çağırır.
- Yerleşim değişikliği diff'te YOK. Yalnız ölçüm için ağaçta geçici uygulandı (aşağıda ⑤).

## ① Mükerrer taraması
**Yöntem:** `olaylar*.js` + `kronoloji*.js`. Ad normalleştirildi (İ/ı, aksan, küçük harf), ±1 yıl, birden çok ad varyantı.

| uç | sonuç |
|---|---|
| Dubiça · Novi · Kostayniçe · Egina · Lüleburgaz | **0 madde** (ad hiç geçmiyor) |
| Erzurum 1829 | yalnız 1829-09-14 "Edirne Antlaşması — Ahıska ve Ahılkelek…" (kapanış; işgal başlangıcını anlatan yok) |
| Van 1918 | 0 (eşleşmeler "van" alt-dizgisi gürültüsü: Ermenistan, Estonya…) |
| Doğubayazıt | 1877-04-24 "Rusya'nın savaş ilânı" (gövdede yalnız *"Ardahan-Doğubayazıt arasında mevzilenmişti"*; işgali anlatmıyor) · 1878-03-03 Ayastefanos ×2 (terk; isg penceresinin İÇİNDE, kırılma değil) |

⇒ **Yazılan 11 maddenin hiçbiri mükerrer değil.** Var olanlar raporlandı, dokunulmadı.

## ② Dosya seçimi — `data/olaylar_w46c.js` (YENİ, çekirdek)
- **Çekirdek evren:** `olaylar*.js` kalıbı Değişmez 2 evrenindedir (`denetle.py:1110` glob). Kırılmaları kapatması gerektiği için çekirdek seçildi.
  `kronoloji*.js` KUYRUKTUR (§5), kapatmaz.
- **Yeni dosya, mevcut değil:** öteki `olaylar_*.js` dosyalarının sahipleri var. Emsal: `olaylar_serhat.js`, `olaylar_senkron_0930.js` (iş başına dosya).
- **Ad alanı:** `window.OLAYLAR_W46C`, TEK segment. `app.js` süzgeci `/^OLAYLAR(_[A-Za-z0-9]+)?$/`; çok segmentli ad sitede yüklenmez
  (`olaylar_sessiz_borc_0919.js` başlığında ölçülmüş).
- 🔴 **`index.html` satırı GEREKİR (koordinatör):** `<script src="data/olaylar_w46c.js?v=rNNN"></script>`.
  ⚠️ Bağlanmadan önce `denetle_kronoloji.py` bu dosyayı GÖRMÜYOR. Ölçüldü: dosya varken de yokken de "109 dosya · 8258 madde",
  yani evrenini `index.html`'den alıyor. Biçim denetimi bağlamadan sonra koşulmalı. Değişmez 2 ise glob'la görüyor (ölçüldü, ⑤).

## ③ Yazılan maddeler (11) — kaynak cümlesi ve neyi tarihlediği

| t | kesinlik | yer_id | başlık | kaynak · cümle (birebir, `ic_not_kaynak`'ta tam) | neyi tarihliyor |
|---|---|---|---|---|---|
| 1664-01-01 | yıl | Egina (Aegina) | Egina Venedik idaresine geçti | HE `egina`: *"Venecije (1451–1537. i 1664–1715) i Osmanskoga Carstva (1537–1664. i 1715–1828)"* | Venedik dönemi başı (yıl). Olay adı HE'de yok, UYDURULMADI |
| 1687-01-01 | yıl | Kostayniçe (Kostajnica) | Kostayniçe Avusturya'ya geçti | HE `hrvatska-kostajnica`: *"Pod osmanskom vlašću ostala je do 1687."* | Osmanlı idaresinin sonu |
| 1687-01-01 | yıl | Bosna Dubiçası | Dubiça Avusturya idaresine girdi | HE `kozarska-dubica`: *"…pod vlast Austrije (1687–1701., …)"* | Avusturya dönemi başı |
| 1691-01-01 | yıl | Bosna Novi'si | Novi Avusturya idaresine girdi | HE `novi-grad`: *"Pod austrijskom vlašću 1691–1703."* | Avusturya dönemi başı |
| 1701-01-01 | yıl | Bosna Dubiçası | Dubiça Osmanlı'ya geri döndü | HE (aynı) + Karlofça birincil metni *"Imperial Garrisons … in Novi, Dubizza … shall be drawn out"* | Avusturya dönemi sonu |
| 1703-01-01 | yıl | Bosna Novi'si | Novi Osmanlı'ya geri döndü | HE (aynı) + Karlofça | Avusturya dönemi sonu |
| 1829-07-08 | gün | Erzurum | Erzurum'un Rus işgali | TDV `erzurum`: *"Rus ordusu 8 Temmuz 1829 günü … şehre girdi"* | Rus girişi |
| 1854-07-29 | gün | Doğubayazıt | Bayazıt bozgunu — Rus işgali | TDV `dogubayazit`: *"29 Temmuz 1854'te işgale uğrayan … Bayazıt'taki Türk kuvvetleri Bargiri'ye … çekildiler"* | İşgal günü |
| 1877-04-30 | gün | Doğubayazıt | Doğubayazıt'ın Ruslarca ele geçirilmesi | TDV `dogubayazit`: *"Rus birlikleri 30 Nisan 1877 tarihinde Doğubayazıt'ı ele geçirdi"* | Ele geçirme günü |
| 1915-09-06 | gün | Dimetoka | Dimetoka Bulgaristan'a bırakıldı | Abay 2023 (hakemli, BOA): *"6 Eylül 1915 … Hudut Tashihi Antlaşması imzalanmıştır … Dimetoka Bulgaristan'a bırakılmıştır"* · TDV `birinci-dunya-savasi` | İMZA günü. Fiilî teslim bulunamadı, `gun:`'de yazılı |
| 1918-04-02 | gün | Van | Van'ın işgalden kurtarılması | TDV `van`: *"2 Nisan 1918 tarihinde Van düşman işgalinden kurtarıldı."* | İşgalin sonu |

- Bütün `yer_id`'ler `sehirler` havuzunda çözülüyor (d/v/s taşıyan yerleşim; ölçüldü: çözülmeyen 0). Hepsinin ilgili kaydı var.
- Her madde KENDİ yerinin kırılmasını anlatıyor; "Van ⇐ Tonga" sınıfı yok.
- **Dimetoka 1915 maddesi listede yoktu, ölçüm doğurdu:** yerleşim önerisi uygulanınca 2s (yer şartlı) `1915-09-06|kazanc|Dimetoka`
  AÇIK verdi. Aynı gündeki çekirdek madde "Sofya Sözleşmesi" Dimetoka'yı adıyla anmıyor. Madde eklenince kapandı.
- §4 ⑥ beyanları maddelerde: HE 1687 ⇄ TDV bosna-hersek 1688 (Dubiça) · Abay'ın teslim planı tutarsızlığı (6 + 15 ≠ 10) ·
  `ek29.js:232` Karlofça yorumunun TERS okunuşu.

## ④ Yazılmayanlar — adıyla
| uç | neden | öneri |
|---|---|---|
| **Doğubayazıt 1828** | TDV yalnız *"1828 yılındaki Osmanlı-Rus harbinin başlarında"* diyor. `1828-01-01` savaş ilanından (Nisan 1828) ÖNCEYE düşer; yıl kodlaması burada **bilerek yanlış gün** olur. Gün TDV'de ve aramada bulunamadı | Gün bulunana dek 1828–29 `isg`'si YAZILMASIN (kapanışı 1829-09-14 Edirne, maddeli) |
| **Lüleburgaz 1912 + 1913** | ⚠️ ÖLÇÜLDÜ: `1912-01-01` kırılması ±30 günde **0 madde** (W46b) ve savaştan (Ekim 1912) 10 ay önce. TDV `luleburgaz` yalnız yıl veriyor | **Çözüm: madde YAZILMADI, komşu günü (§4 şartlı)** — ⑤'e bak. Yeni madde gerekmiyor |
| **Lüleburgaz 1918–22 Yunan** | TDV `luleburgaz` *"1918-1922 yıllarında … Yunanlılar tarafından işgal edildi"*. TDV `kirklareli` ise *"26 Temmuz 1920'de Yunan işgaline uğrayan Kırkkilise"* (§4 ⑥). Hedefin kendi kaynağı ÇELİŞEN bir yıl verdiği için komşu günü şartı (*"hedefte kaynak gün vermiyor"*) temiz sağlanmıyor | **Yazılmadı.** Koordinatör hükmü gerekir: TDV `luleburgaz`'ın "1918"'i ⇄ Kırklareli'nin 1920-07-26'sı |
| **Doğubayazıt WWI (1914/15–1918)** | Başlangıç yok: *"31 Ekim 1914'te … bu şehre saldırdılar"* bir SALDIRI günü, işgal değil. Bitiş: *"14 Nisan 1918'de kesin olarak kurtarıldı"* | `isg` önerilmedi ⇒ madde gerekmedi. Başlangıç bulunursa 1918-04-14 maddesi yazılmalı (çekirdekte o gün yalnız "Batum'un geri alınışı" var) |
| **Van başlangıcı** | TDV `van`'da Rus giriş günü yok (yalnız *"7 Nisan 1915'te Van tamamen kuşatıldı"*, Ermeni kuşatması). 1918-04-02 maddesi YAZILDI | `isg` için başlangıç ölçülmeli. Madde hazır, yerleşim önerisi EKSİK |
| Egina 1715 | W46b'de ANLAM ~ ("Suda ve Spinalonga" + 1714-12-08 "Venedik'e savaş ilanı"). `1715-01-01` de Mora seferinden (yaz 1715) önceye düşer — Doğubayazıt 1828 ile aynı sınıf | Gün bulunana dek `1715-01-01` KAPI ✔ ile bırakıldı; madde yazılmadı (yıl kodlaması yanlış güne madde ekler) |
| Banaluka 1688 | Süre ve bitiş bilinmiyor (HE *"nakratko"*) | `isg` önerilmedi |

## ⑤ Eşleşen yerleşim önerisi (TARİF — koordinatöre; diff'e GİRMEDİ)
Ağaçta geçici uygulandı, ölçüldü, ağaç kirli bırakıldı (kayıt için: scratchpad `gecici_uygula.py`).

| kayıt (dosya) | değişiklik | kapatan madde |
|---|---|---|
| **Dimetoka** (`yerlesimler.js`) | `s` bulgar 1913-05-30→**1913-09-29** · **`d` 1913-09-29→1915-09-06** · `s` bulgar **1915-09-06→1920-05-22** · `s` yunan **1920-05-22**→1923 | 1913-09-29 İstanbul Ant. (çekirdek) · **1915-09-06 W46C** · 1920-05-22 ⇐ +5 "Gümülcine'nin işgali" (hükmünüz: 05-27 Hemetli ayrı olay) |
| **Kostayniçe** (`_ek29.js`) | `d` sonu 1699-01-26 → **1687-01-01** · `s avusturya` başı → **1687-01-01** | W46C 1687 |
| **Bosna Dubiçası** (`_ek29.js`) | `isg` başına `{f:"1687-01-01",t:"1701-01-01",d:"avusturya"}` — **W45 diff'inin ÜSTÜNE zincir** (W45 yalnız `d[0]`/`s[2]` kaynak metnini değiştirir; çakışma yok) | W46C 1687 + 1701 |
| **Bosna Novi'si** (`_ek29.js`) | `isg` başına `{f:"1691-01-01",t:"1703-01-01",d:"avusturya"}` | W46C 1691 + 1703 |
| **Erzurum** (`yerlesimler.js`) | `isg:[{f:"1829-07-08",t:"1829-09-14",d:"rusya"}]` | W46C 1829-07-08 · Edirne Ant. |
| **Egina** (`yerlesimler.js`) | `d` 1537-10-01→**1664-01-01** · **1715-01-01**→1821 · `s venedik` 1664-01-01→1715-01-01 | W46C 1664 · (1715 KAPI ✔, ANLAM ~) |
| **Doğubayazıt** (`_ek26.js`) | `isg:[{1854-07-29→1856-03-30 rusya},{1877-04-30→1878-07-13 rusya}]` | W46C 1854 + 1877 · Paris + Berlin (çekirdek) |
| **Lüleburgaz** (`yerlesimler.js`) | `d` 1413→**1912-10-24** · **1913-07-21**→1920 · `s bulgaristan-kralligi` 1912-10-24→1913-07-21 · kaynak: *"gün komşudan: Kırklareli · TTK İ. Görgülü 'Balkan Harbi'"* | **mevcut** çekirdek maddeler: 1912-10-23 "Şark Ordusu'nun bozgunu ve Çatalca hattına çekiliş" (−1 g) · 1913-07-21 "Edirne'nin geri alınışı" (+0 g) |
| Van | **önerilemedi** (başlangıç yok) | (madde hazır) |

**Lüleburgaz için komşu günü — §4 şartları tek tek:**
1. **Komşunun günü kendi kaynağına dayanıyor:** TTK Görgülü okundu.
   - *"24 Ekim akşamı, Pınarhisar-Lüleburgaz hattına çekilmek zorunluğunda kalındı"*
   - *"Dört gün süren Pınarhisar-Lüleburgaz kesimindeki muharebede"*
   - *"21 Temmuzda Kırklareli, 22 Temmuzda Edirne geri alındı"*
   - *"13 Temmuz 1913'te Çatalca ve Bolayır cephesinden taarruza geçti"*

   ⚠️ Atlasın Kırklareli kaydında 1912-10-24 için `kaynak:` alanı YOK. Dayanak TTK'dır, atlas kaydı değil (§4 D207).
2. **Hedefte kaynak gün vermiyor:** TDV `luleburgaz` yalnız 1912/1913 yılını veriyor.
3. **Aynı süreç, yakın konum:** aynı harekât, 38 km.
4. **Kayda beyan:** "gün komşudan: …" yazılacak.

⚠️ **Bilinen hata payı:** TTK'ya göre Lüleburgaz muharebesi 24 Ekim'den SONRA dört gün sürdü. ⇒ Bulgar başlangıcı fiilen birkaç gün geç,
1913 dönüşü ise 13–21 Temmuz arasında bir gün. Komşu günü erken/geç uçtur. Beyan bunu söylemeli.

## ⑥ Değişmez 2 ölçümü — üç anlık görüntü (`UMIT-W46c-D2-OLC-1006.py`)
| kol | ÖNCE (`d0f3cda1`) | YALNIZ YERLEŞİM | YERLEŞİM + W46C |
|---|---|---|---|
| d/v (kapı: 0) | 623 kırılma · **0 açık** | 627 · **2 açık** (1664 Egina · 1687 Kostayniçe) | 627 · **0 açık** |
| isg (2i) | 171 · 1 açık (mevcut) | 179 · 3 açık (+1687 Dubiça · +1691 Novi) | 179 · **1 açık (aynı mevcut)** |
| s (2s, yer şartlı, ham) | 1720 · 1144 | 1723 · 1146 (+1664 Egina · +1915-09-06 Dimetoka; 1687 kümesi yeniden gruplandı) | 1723 · **1144** |

⇒ **YENİ KIRILMALAR: AÇIK 0** (üç kolda da önce/sonra kümesi BİREBİR; kapanan da yok, yani başka bir açığı yanlışlıkla
örtmedi).
- ⚠️ `s` 1144 ham sayıdır (`yer_sarti=True` çıktısı). `denetle.py`'nin 2s raporundaki 189 "AÇIK" kapsam/yıl-temsilî kovalarından
  sonradır. Ben **küme farkını** ölçtüm, tavanı değil.
- Tam `denetle.py` koşulmadı (RAM: ~2,4 GB, §7.2 M-5457 uyarısı). Koordinatör commit öncesi koşmalı.

## ⑦ Mevcut maddelere METİN eki önerisi (sahipleri başkası — yalnız öneri)
| madde | ek |
|---|---|
| `olaylar*` 1913-09-29 "İstanbul Antlaşması: Bulgaristan ile barış ve Edirne'nin tescili" | "Dimetoka Osmanlı'da kaldı" (TTK + Abay). Dimetoka `d` başlangıcı ANLAMca da kapanır |
| `olaylar*` 1913-07-21 "Edirne'nin geri alınışı" | "Aynı tarihte katılan öteki yerler: Kırklareli, Tekirdağ" listesine **Lüleburgaz** |
| `olaylar_ek10.js` 1912-10-23 "Şark Ordusu'nun bozgunu…" | `yer`'e Lüleburgaz (TTK "Pınarhisar-Lüleburgaz hattı") |

## Bulunamadı
- **Gün:** Doğubayazıt 1828 · Egina 1664 ve 1715 · Dubiça · Novi · Kostayniçe (HE yalnız yıl) · Lüleburgaz düşüş ve dönüş günü ·
  Dimetoka 1915 fiilî teslim.
- **Başlangıç:** Van ve Doğubayazıt WWI.
- **Lüleburgaz Yunan dönemi:** TDV'nin kendi yılı Kırklareli'yle çelişiyor.
