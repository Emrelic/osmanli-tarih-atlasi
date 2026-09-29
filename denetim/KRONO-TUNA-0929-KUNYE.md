# KRONO-TUNA-0929 — künye önerileri (Romanya · Ukrayna)

> 29 Eylül 2026 · `data/devletler.js`e DOKUNULMADI. Hüküm koordinatörde (M-5416 kural 3).
> Biçim M-5416'nın istediği gibi: id · ad · f · t · sınıf (D205) · kaynak · kaç madde bağlıyor.
> Madde sayıları `node denetim/ARAC-KRONO-TUNA-0929-SINA.js` çıktısından.

## Ölçülen künyeler (devletler.js'ten okundu)

| id | ad | f → t | bu paketin maddesi |
|---|---|---|---|
| `eflak` | Eflak Voyvodalığı | 1330-01-01 → 1859-01-24 | 38 |
| `bogdan` | Boğdan Voyvodalığı | 1359-01-01 → 1859-01-24 | 31 (1'i Ukrayna dosyasında) |
| `erdel` | Erdel Prensliği | 1570-01-01 → 1711-04-30 | 16 |
| `romanya` | Romanya | 1859-01-24 → 1881-03-26 | 2 |
| `romanya-kralligi` | Romanya Krallığı | 1881-03-26 → 1923-10-29 | 1 |
| `zaporojye` | Zaporojye Kazak Hetmanlığı | 1552-01-01 → 1775-06-16 | 30 |

## Ö-1 · `erdel` — `f:` GENİŞLET (D205 sınıf ②) · 4 madde

- **Öneri:** `f: "1570-01-01"` → `f: "1541-08-29"`; `tabi[0].f` aynı.
- **Gerekçe:** TDV `erdel`: *"1541'de Erdel Osmanlılar'a bağlı haraçgüzâr statüsünde bir voyvodalık haline geldi."*
  TDV `romanya`: *"1541'de Transilvanya (Erdel) Voyvodalığı … özerk haraçgüzâr bir prenslik olarak Osmanlı
  hâkimiyetini kabul etti."* Gün: History of Transylvania I (MTA), s. 101 — 29 Ağustos 1541'de padişah,
  Kral János'un oğlunun yıllık 10.000 forint haraçla Erdel'i yönetmesine izin verdi.
  1570 Speyer yalnız unvan değişimidir ('rex electus' → 'princeps'); polity aynıdır (János Zsigmond).
- **Haritayla uyum:** yerleşim `v:` pencereleri zaten `1541-08-29`de başlıyor (Erdel/Kaloşvar, Brassó).
- **Bağladığı madde:** 1541-08-29 · 1551-06-19 · 1556-03-12 · 1557-01-01 (4 — 1557 de pencere dışında).
- **Kardeş bulgu:** `KUNYE-DUNYA-0929.json` aynı öneriyi `supheli_omur` ve `eksik: dogu-macar-kralligi`
  altında iki kez yapmış; ayrı künye DEĞİL genişletme doğru.
- ⚠️ 1526-1541 (Zapolya'nın Doğu Macar Krallığı, Budin merkezli) bu genişletmeye GİRMEZ — o dönem
  `macaristan` künyesi 1526-08-29'da bitiyor ve arada künye yok. Bu paketin işi değil; KRONO-ORTA-AVRUPA'ya.

## Ö-2 · `erdel.tabi` — `t:` KISALT (D205 sınıf ①, yalnız tâbilik alanı)

- **Öneri:** `tabi: [{f:"1541-08-29", t:"1699-01-26", ust:"osmanli"}]` (şimdi `t:"1711-04-30"`).
- **Gerekçe:** TDV `erdel`: *"1699 Karlofça Antlaşması ile Erdel Avusturya'ya terkedildi."* TDV `romanya`:
  *"Transilvanya Prensliği ise 1699 yılı Karlofça Muahedesi'nin ardından Avusturya'ya dahil edilecektir."*
  Künyenin kendi 1690-12-04 maddesi (Diploma Leopoldinum) de Habsburg üstünlüğünü yazıyor; Osmanlı
  metbûluğu 1699'dan sonra hiçbir kaynakta yok. Künyenin kendi `t:` (1711 Szatmár) prensliğin sonu
  olarak kalabilir — kısaltılan yalnız TÂBİLİK.

## Ö-3 · `zaporojye` — Sich ile Hetmanlık aynı künyede (hüküm VERİLDİ, kayıt için)

- M-5416: Hetmanlık maddeleri `devlet:"zaporojye"`. Uygulandı (26 madde 1648-1764).
- KUNYE-DUNYA-0929 ise ayrı bir `kazak-hetmanligi` önerdi. İki yapının ayrılığı kaynakta açık:
  EoU «Hetman state»: *"the Ukrainian Cossack state, which existed from 1648 to 1782"*, başkentleri
  Çehrin · Hadiç · Baturin · Hluhiv; EoU «Zaporozhian Sich»: Dinyeper çağlayanlarındaki askerî merkez,
  1709'da Petro'ya karşı Mazepa ile birleşti, 1775'te yıkıldı. TDV `hatman`: hatman unvanı *"1648-1764
  yılları arasında Dinyeper Kazakları'nda seçimle başa gelen kumandanın"*.
- **Öneri (koordinatör ayırmak isterse):** `kazak-hetmanligi` · "Kazak Hetmanlığı (Ukrayna)" ·
  `f:"1648-01-01"` · `t:"1764-01-01"` (hatmanlık kaldırılışı; EoU kurumların sonu 1782) · sınıf ③
  (ardıl değil, eşzamanlı ayrı polity). Bu durumda `zaporojye`ye bağlı 30 maddeden Seç'e ait 5'i
  (1558 · 1624 · 1709-03-28 · 1709-05-25 · 1734) yerinde kalır, kalan 25'i (1637-1764 Hetmanlık ve
  hatmanlar) taşınır. Taşıma madde başına tek alanlık `devlet:` değişikliğidir.
- `tur:"cumhuriyet"` ile ad 'Hetmanlık' çelişkisi KUNYE-DUNYA'nın `tur_ad_celiski` listesinde var.

## Ö-4 · `ukrayna-halk-cumhuriyeti` — YENİ (künye yok) · 2 madde

- **ad:** Ukrayna Halk Cumhuriyeti · **f:** `1917-11-20` · **t:** `1920-11-21`? → **t ölçülemedi**:
  EoU «Ukrainian National Republic»: *"existed on Ukrainian territory until 1920"* — gün vermez.
  Önerilen `t:"1920-01-01"` DEĞİL; kaynak gün vermediği için künye t'si koordinatörün kaynağına kalır.
- **Kaynak:** EoU «Ukrainian National Republic» (Üçüncü Üniversal 20 Kasım 1917; Dördüncü Üniversal
  25 Ocak 1918; Brest-Litovsk 9 Şubat 1918). TDV `ukrayna` (Merkezî Rada 17 Mart 1917; 26 Aralık 1918).
- **Not:** 29 Nisan → 14 Aralık 1918 arası ayrı rejim (Ö-5). Künye tek tutulacaksa Ö-5 ona katılır.
- KUNYE-DUNYA-0929 aynı id'yi `eksik` listesinde öncelik 1 ile önermiş — id'ler EŞ.
- **Bağladığı:** 1917-11-20 · 1918-02-09 (Brest-Litovsk — Osmanlı taraf).

## Ö-5 · `ukrayna-devleti-1918` — YENİ (künye yok) · 3 madde

- **ad:** Ukrayna Devleti (Skoropadski Hetmanlığı) · **f:** `1918-04-29` · **t:** `1918-12-14`
- **Kaynak:** EoU «Hetman government» (darbe 29 Nisan 1918; çekilme 14 Aralık 1918); TDV `hatman`
  (*"1918 yılında kurulan Ukrayna millî devletinin başkanı Skoropadski son Ukrayna hatmanıdır"*;
  Osmanlı elçisi Ahmed Murad Bey'in kabulü 12 Ekim 1918).
- **Bağladığı:** 1918-04-29 · 1918-10-12 · 1918-12-14.
- Ayrı künye gerekmiyorsa: üç madde `devlet:"ukrayna-halk-cumhuriyeti"`ye çevrilir (tek satır).

## Ö-6 · "Ukrayna" künyesi 1281-1923 için ANAKRONİKTİR — açılmasın

Şartname ③ sordu. Ölçüm: `devletler.js`te `ukrayna` id'li künye YOK (taranan anahtarlar: ukrayn ·
kazak · hetman · zaporo · ruthen · galiç · kiev). 1281-1917 arasında "Ukrayna" adlı sürekli bir polity
yoktur (TDV `ukrayna`: Kiev Prensliği 1240'ta yıkıldı; Galiçya-Volhinya 1323/1352'de Litvanya ve
Polonya'ya geçti). ⇒ Tek bir `ukrayna` künyesi açmak hayalet devlet üretir (CLAUDE.md §3.5). Doğrusu
Ö-3 + Ö-4 + Ö-5 gibi polity başına künyedir. `kazak-hanligi` (Kazakistan) ile karıştırılmamalı —
eşanlam tuzağı, bu pakette ölçüldü: "kazak" araması iki ayrı halkı getiriyor.
