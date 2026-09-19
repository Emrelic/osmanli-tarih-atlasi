# SENUSI-NOKTA — 19 Eylül 2026 (sevk M-4609)

## Kalem 1 — Senûsî künyesi + Vaday · UYGULANDI

| Ne | Önce | Sonra | Dayanak |
|---|---|---|---|
| `vaday` t | 1912-01-01 (kaynaksız) | **1909-06-02** | TDV `veday` başlık "(1635-1909)" + "2 Haziran 1909’da Ebîşe’yi ele geçirerek Vedây Sultanlığı’na son verdiler" |
| `vaday` kronoloji | isgal 1909-06-02 + son 1912-01-01 | tek madde: **son 1909-06-02** | aynı |
| `senusi` künyesi | YOK | f 1837-01-01 (yıl) · t 1923-10-29 (pencere ucu) · 3 kronoloji maddesi (1837 · 1902-01-20 · 1913-11-27) | TDV `senusiyye` · `cad` · `veday` |
| Ounianga | vaday→1912 · fransa | vaday→1909-06-02 · **senusi 1909-06-02→1913** · fransa 1913 | TDV `cad`: "Borku ve Ennîdî’yi hâkimiyetlerinde tutan Senûsîler’i buradan çıkardılar (1913)" |
| Fada (Ennedi) | aynı | aynı | aynı (Fada = Ennedi merkezi) |
| Iriba | aynı | vaday→1909-06-02 · **`__BOSLUK__` 1909-06-02→1913** · fransa 1913 | Senûsî hükmü yalnız Borku+Ennedi için; Iriba (Dâr Zagâve) adı geçmiyor → BULUNAMADI, komşuya itilmedi |
| renk | — | `senusi` #d27e24 | `renk_olc --oner` 4 komşu, 27 engel, en yakın ΔE 14.2 · `--dogrula` 0 fark |

**Sınıflandırma (§3.5):** Vaday t → ① devlet öldü (TDV 1909) **ve** ③ ardıl yapı (Borku-Ennedi'de Senûsî).
**1913 ucu YIL:** TDV cad/veday yalnız "(1913)" diyor. TDV senusiyye'nin 27 Kasım 1913 günü Borku merkezi
**Ayn Kelek** zâviyesinin günüdür — Fada/Ounianga'ya taşınmadı (bölgeden şehre hüküm yok).

**Denetim (`denetle.py`, uygulamadan sonra):** SONUÇ temiz · 4c 130 (aynı) · 4d 356 (aynı) · 2s 11 açık (aynı) ·
Değişmez 2 0 açık · 1b beyanlı 5→6 (Iriba).

**Gözlem (dokunulmadı):**
- Biltine (KRONO-2S-3) 1909-06-02'den fransa alıyor; Iriba (60 km kuzeyi) BOSLUK. Biltine'nin dayanağı
  "sultanlığın sonuna bağlandı" çıkarımı — aynı çıkarım Iriba'ya uygulanmadı, sevk "bulunamazsa BOSLUK" dedi.
- TDV `veday` ve `senusiyye`: 1911'de Yüzbaşı Rıfkı Bey'in müfrezesi **Borku kazasını fiilen kurdu**, Osmanlı
  birliği 1913'e kadar Senûsîlerle birlikte savaştı; 1902 civarında Tîbûlar "Osmanlı tebaası" oldu. ⇒ Borku-Tibesti
  1911-1913 için bir `v:` (Osmanlı tâbi/nüfuz) sorusu var. Kalem değil, KAYIT.

## Kalem 2 — Lugos · Orsova · UYGULANDI (M-4623 kararlarıyla)

### Son hâl (data/yerlesimler.js, Temeşvar'ın altı) — aşağıdaki taslaktan FARKLAR
M-4623 kuralı: *çıkarım tarih yazılmaz; kaynaklı son tarihte dönem durur, arası `__BOSLUK__` beyanı.*

**Lugos (Lugoj)** 45.688, 21.903
```
s macaristan        1281-01-01 → 1526-08-29
v Zapolya vasal     1526-08-29 → 1541-08-29
v Erdel Prensliği   1541-08-29 → 1551-07-01   (kidsiz — erdel künyesi f 1570)
s avusturya         1551-07-01 → 1552-08-06   enklav:true (Ferdinand'ın Banat kaleleri; Temeşvar kaydı bunu taşımıyor)
d OSMANLI           1552-08-06 → 1554-04-07   (B 0013/1005 · B 0013/1022 Petrovics sancakbeyi)
s __BOSLUK__        1554-04-07 → 1596-05-10   enklav:true — Erdel'e devrin yılı YOK (1556 çıkarımı YAZILMADI)
v Erdel Prensliği   1596-05-10 → 1658-08-30   f: B 0014/1137 'Palatics György lugosi bán' · ⚠️ 1599-1603 Osmanlı ara dönemleri yazılmadı
d OSMANLI           1658-08-30 → 1688-06-01   gün komşudan: Yanova · TDV yanova (B 0016/1302 'Jenővel elveszett Lugos')
s avusturya         1688-06-01 → 1689-01-01
s __BOSLUK__        1689-01-01 → 1695-01-01   enklav:true — Osmanlı'nın geri alış yılı YOK; 1691 'megvételére indult' alışı AÇIKÇA söylemiyor; 1690-09-09 komşu günü REDDEDİLDİ (D207 şartı tutmuyor)
s avusturya         1695-01-01 → 1695-09-01   TDV mustafa-ii (1695 zapt kararı) · B 0017/1500
d OSMANLI           1695-09-01 → 1716-01-01   TDV mustafa-ii 'Bu zaferin ardından Lugoş alındı'
s avusturya         1716-01-01 → 1918-01-01   TDV timisvar (eyalet 1552-1716; Lugos'un kendi günü yok)
s romanya-kralligi  1918-01-01 → 1923-10-29
```
**Orsova (Eski Orsova)** 44.720, 22.400 — taslaktaki zincir AYNEN (1689-90 ara dönemi yazılmadı, M-4623 onayı).

**Yeni kronoloji dosyası** `data/olaylar_senusi_0919.js` → `window.OLAYLAR_SENUSI_0919` (index.html bağlaması 1.MURAT'ta):
1551-07 (ay) Ferdinand'a teslim · 1554-04-07 Petrovics sancakbeyi · 1596-05-10 Lippa kuşatmasının kalkması ·
1689-07-15 Orsova geri alındı · 1738-05-08 Orsova palankası. Sevk 2 Orsova maddesi dedi; 3 Lugos maddesi aynı
Değişmez 2 gereğiyle (±30 günde madde yoktu) eklendi.

**denetle.py (son):** SONUÇ temiz · D1 ✓ · 1b 0 beyansız · D2 579 kırılma 0 açık · 2s 10 açık · 2i 1 · 2t 6 ·
4c 130 · 4d 356 · D7 667/667 (ilk koşuda 670: üç Lugos adası → `enklav:true` beyanı) · konum 0.
**renk_olc:** yeni kimliklere değen ihlal yok.

**Kayıt (dokunulmadı):** Temeşvar kaydı 1281→1552-07-27 macaristan — TDV timisvar'a göre 1541'den sonra Erdel,
1551-52 Ferdinand. Ayrıca `macaristan` künyesi 1526-08-29'da bitiyor (bilinen 4c).

---

## (Tarihçe) Kalem 2 taslağı — ilk sorudaki hâli

Mükerrer taraması (ad + 3 km): Lugos'a en yakın Temeşvar 52.9 km · Orsova'ya en yakın Turnu Severin 22.5 km. Adakale
atlasta yok. **0 mükerrer.**

### Kaynaklar
- TDV `timisvar` · `yanova` · `lipova` · `mustafa-ii` · `zistovi-antlasmasi` · `macaristan` · `adakale` (gövdeleri okundu, 200)
- **Bánlaky József, *A magyar nemzet hadtörténelme*** (1928-42), MEK 09477 — akademik askerî tarih; sayfa no'ları
  aşağıda `[B 0017/1443]` biçiminde (mek.oszk.hu/09400/09477/html/<no>.html)
- Arcanum *Erdély, Bánság és Partium helységnévtára* — CAPTCHA, okunamadı. Magyar Katolikus Lexikon Lugos: "1616
  Bethlen átengedte" — TDV (1658) ile çelişiyor, TDV esas.

### 🔴 Sevkteki iki uç TERS
- **Orsova "Ziştovi ile geri" DEĞİL.** TDV `zistovi-antlasmasi`: "muâhede-i mahsûsa senedinde … Çerna ve Eski
  Hırsova bölgesinin tahkim edilmemek kaydıyla terki" · Bánlaky [B 0019/1796]: "Ausztria **Orsova kivételével** összes
  hódításait … visszaadta". ⇒ 1790-04-16'dan 1918'e kadar Avusturya.
  (TDV'nin "Eski Hırsova"sı = Eski Orsova: Çerna suyu; Dobruca'daki Hırsova değil.)
- **Lugos "1688-95 Habsburg" düz değil:** 1688 Habsburg [B 0017/1443] → 1691'den önce yeniden Osmanlı (Veterani 1691'de
  "Lugos és Karánsebes megvételére indult" [B 0017/1474]) → 1691 Habsburg → 1695 Osmanlı.

### Orsova — taslak zincir
| Dönem | Sahip | Dayanak | Hassasiyet |
|---|---|---|---|
| 1281 → 1524 | macaristan | Szörény bánsağı; [B 0012/927] 1524 "Péthet és Orsovát hatalmukba kerítették" | yıl · ⚠️ aynı sayfa 1522 de diyor (kaynak kendiyle çelişiyor) |
| 1524 → 1688 | Osmanlı d | aynı | yıl |
| 1688 → 1689-07-15 | avusturya | [B 0017/1443] Veterani Orsova'yı işgal etti (Haziran 1688 sonrası) · [B 0017/1450] Thököly 15 Temmuz 1689'da girdi | yıl / gün |
| 1689-07-15 → 1717 | Osmanlı d | ⚠️ 1689 sonu–1690 Eylül arası kısa bir imparatorluk dönemi var (1690'da Mezzomorto Paşa Orsova'yı "aldı", [B 0017/1463]) ama geri alınış günü BULUNAMADI → yazılmadı | gün / yıl |
| 1717 → 1738-05-08 | avusturya | [B 0019/1715] Splényi 27 Ağustos 1717'de Orsova önünde, "könnyű szerrel" alındı · [B 0019/1730] 8 Mayıs 1738 palanka düştü | yıl / gün |
| 1738-05-08 → 1790-04-16 | Osmanlı d | + TDV zistovi | gün |
| 1790-04-16 → 1918 | avusturya | TDV zistovi + [B 0019/1796] | gün / yıl |
| 1918 → | romanya-kralligi | TDV timisvar "Habsburg … hâkimiyeti I. Dünya Savaşı sonuna kadar (1918) sürdü … Romanya Krallığı’na katıldı" | yıl |

### Lugos — taslak zincir
| Dönem | Sahip | Dayanak | Hassasiyet |
|---|---|---|---|
| 1281 → 1526-08-29 | macaristan | künye penceresi (Mohaç) | gün |
| 1526-08-29 → 1541-08-29 | v Zapolya | TDV macaristan "Osmanlı himayesini kabul eden I. János" | ⚠️ tâbiliğin başlangıcı 1529 olabilir |
| 1541-08-29 → 1551-07 | v Erdel | TDV timisvar (1541 Erdel Prensliği) | gün / ay |
| 1551-07 → 1552-08-06 | avusturya (Ferdinand) | [B 0013/988] Temmuz 1551 Báthory Lugos'u Ferdinand adına teslim aldı · [B 0013/1005] 6 Ağustos 1552 Lugos teslim oldu | ay / gün |
| 1552-08-06 → 1556 | Osmanlı d | [B 0013/1022] 1554 Petrovics "lugosi és karánsebesi szandzsák" atandı | ⚠️ 1556 ÇIKARIM: Petrovics 1556'da Lugos'tan Erdel'e geçip naib oldu [B 0013/1029]; Lugos'un Erdel'e devrinin kendi yılı BULUNAMADI |
| 1556 → 1658-08-30 | v Erdel | TDV timisvar/yanova "tekrar fethedilip" · [B 0016/1302] "Jenővel elveszett Lugos" | gün komşudan: Yanova · TDV yanova 30 Ağustos 1658 |
| 1658-08-30 → 1688-06 | Osmanlı d | [B 0017/1443] | ay |
| 1688-06 → ??? | avusturya | aynı | ⚠️ Osmanlı'nın geri alış tarihi BULUNAMADI |
| ??? → 1691 | Osmanlı d | [B 0017/1474] | ⚠️ |
| 1691 → 1695-09 | avusturya | TDV lipova (Veterani 1691) · [B 0017/1474] | yıl / ay |
| 1695-09 → 1716 | Osmanlı d | TDV mustafa-ii "Bu zaferin ardından Lugoş alındı" (savaş 21 Eylül 1695, Bánlaky) | ay / yıl |
| 1716 → 1918 | avusturya | TDV timisvar "1552-1716 … Tımışvar beylerbeyiliği" | yıl (eyaletten şehre çıkarım) |
| 1918 → | romanya-kralligi | TDV timisvar | yıl |

### Değişmez 2 — Osmanlı kırılmaları ±30 gün (ölçüldü, `data/olaylar*.js`)
| Kırılma | En yakın madde | İlgili mi |
|---|---|---|
| Orsova 1790-04-16 | 0g "Eski Hırsova'nın düşüşü" | ✅ |
| Lugos 1552-08-06 | 10g Temeşvar'ın fethi | ✅ |
| Lugos 1658-08-30 | 3g Yanova'nın fethi | ✅ |
| Lugos 1695-09 | 0g/21g Lugoş zaferi | ✅ |
| Orsova 1689-07-15 | **71g** | ❌ AÇIK — madde gerekir |
| Orsova 1738-05-08 | **85g** | ❌ AÇIK — madde gerekir |
| Orsova 1524 · 1688 · 1717 · Lugos 1556 · 1688-06 · 1716 | 0-43g ALAKASIZ madde | ⚠️ ölçüt geçer, ama madde o değişimi anlatmıyor |
