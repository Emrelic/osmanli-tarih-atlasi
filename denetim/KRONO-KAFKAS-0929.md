# KRONO-KAFKAS-0929 — Gürcistan · Ermeni coğrafyası kronolojisi (teslim raporu)

> 29 Eylül 2026 · şartname `oturumlar/KRONO-KAFKAS-0929.md` + `KRONO-DUNYA-0929-ORTAK.md`
> (§4.1 M-5396 ad değişikliği ve M-5416 künye hükmü uygulandı).

## 1. Teslim edilenler

| Dosya | Global | Madde | Not |
|---|---|---|---|
| `data/kronoloji_cok_gurcistan.js` | `window.KRONOLOJI_COK_GURCISTAN` | **35** | YENİ; `kronoloji_gurcistan.js`'in (45) tamamlayıcısı, tek olay tekrar edilmedi |
| `data/kronoloji_cok_ermeni.js` | `window.KRONOLOJI_COK_ERMENI` | **13** | YENİ; başında "coğrafya/topluluk kronolojisi, devlet değil" beyanı |
| `denetim/KRONO-KAFKAS-0929-YERLESIM-ONERI.md` | — | 10 öneri | harita (b) sınıfı |
| `denetim/KRONO-KAFKAS-0929-DUZELTME.md` | — | 12 kalem | mevcut maddelerdeki kusurlar |
| `denetim/KRONO-KAFKAS-0929-KUNYE.md` | — | 7 yeni + 1 genişletme | M-5416 (3) |
| `denetim/KRONO-KAFKAS-0929-tdv.py` + `-tdv-onbellek/` | — | 27 TDV gövdesi | kaynak kanıtı |

🔴 İki dosya da `index.html`e ve `arac/paketle.py`ye **bağlanmayı bekliyor** (koordinatör işi). `data/kronoloji_gurcistan.js`e DOKUNULMADI (KRONO-BAGLAMA-0929).

## 2. Ölçtüklerim

**Envanter (başlangıç):** Gürcistan 45 madde (`kronoloji_gurcistan.js`); Ermeni dosyası yok. 128 kronoloji/olay dosyasında Kafkasya anılması taraması: 228 madde. Gürcistan dosyasının dağılımı: 1281-1400 → 3 madde (Timur), 1400-1578 → 5, 1801-1918 → 3 (1811, 1829, 1804-1810 arası) — en büyük boşluk **1400-1578** ve **1829-1918** idi.

**Yazılanlar yüzyıl yüzyıl** (Gürcistan 35 + Ermeni 13 = 48):
| yy | Gürcistan | Ermeni |
|---|---|---|
| 15 | 2 | 1 |
| 16 | 9 | — |
| 17 | 3 | 1 |
| 18 | 3 | 2 |
| 19 | 13 | 4 |
| 20 | 5 | 5 |

**Künye bağlama:** 48 maddenin hepsi var olan bir künyeye bağlı (bugün ekranda görünür). 26 madde ayrıca M-5416 (3) gereği ÖNERİLEN id taşıyor (`kartli-kralligi` 10 · `revan-hanligi` 5 · `abhazya-prensligi` 4 · `samtshe-atabegligi` 2 · `megrelya-prensligi` 2 · `guria-prensligi` 2 · `cenub-i-garbi-kafkas` 1). Bütün var olan künye atıfları künye penceresinin İÇİNDE (node ile sınandı: pencere dışı 0).

**Kalite kapıları:**
- `node --check` iki dosya: temiz.
- `py arac/odak_olc.py`: `kronoloji_cok_gurcistan.js` 35 madde → 31 KONUMLU · 4 KUTULU (`odak_yer`) · ODAKSIZ **0** · →yabancı 0 · `kronoloji_cok_ermeni.js` 13 → 13 KONUMLU · ODAKSIZ **0**. Kullanılan `yer_id`'ler: Tiflis, Kutaisi, Sohum, Batum, Ahıska, Hulo (Acara), Artvin, Revan, Eçmiyadzin, Kars — hepsi çözülüyor.
- ⚠️ ODAKSIZ toplamı 514, tavan 485 (`denetim/ODAK-TAVAN.json`) — **bu paketten değil**, benim iki dosyam 0 katkı. Ama yayın kapısı bunu gerileme sayabilir; ölçüm tahtada.
- Şema: on zorunlu alan 48/48; `tur` değerleri mevcut 28 değerden.
- `py arac/denetle.py`: sonuç tahtadaki teslim mesajında (bu dosya yazılırken koşu sürüyordu).

**Değişmez 2 ile ilişki — ÖNEMLİ:** `denetle.py` Değişmez 2 evreni `olaylar*.js` + `kronoloji_sinir*.js`'tir (`olaylari_yukle`, satır 1047). `kronoloji_cok_*` dosyaları o evrende **DEĞİL** ⇒ bu paketin maddeleri 2s AÇIK kırılmalarını ölçümde kapatmaz (ekranda karşılar). Kafkasya'daki AÇIK kırılmalar: 1578-08-01 (Ahıska/Zazalo/Ts'q'altbila — DUZELTME K8: tarih kaynaksız, Çıldır'dan önce), 1578-08-09 (Batum/Hulo/Makhalak'auri — Ö9), 1801-09-12 (Tiflis/Zagem — `kronoloji_gurcistan.js`'te maddesi VAR ama evren dışı), 1918-04-14 / 1918-12-01 (Batum/Murvaneti — Ö3), 1920-12-02 (Revan — K9).

## 3. Harita ile senkron — en önemli bulgular (ayrıntı YERLESIM-ONERI)
1. **Tiflis 1918-1921 Gürcistan Cumhuriyeti'nin başşehri ama haritada sovyet-rusya** (Zagem de). Kutaisi doğru. (Ö1)
2. **Kars 1919-04-12 → 1920-10-30 İngiliz işgali + Ermeni idaresi haritada yok**; harita Osmanlı→TBMM. (Ö2)
3. **Batum** İngiliz işgali (1918-12-24→1920-07-01) yok, Gürcü idaresi 1918-12'de başlıyor; Mart 1921 Türk varlığı yok. (Ö3)
4. **Ahıska** 1918-1921 kesintisiz sovyet-rusya. (Ö4)
5. Tiflis'in Safevî'ye geçişi harita 1606, TDV iki maddede 1603; Osmanlı'nın çıkışı harita 1735-06-19, TDV 1735-08-12. (Ö5, Ö6)
6. Revan fiilî Rus işgali 1827-10-13 yok. Sohum 1854-56 ve 1877 Osmanlı işgalleri yok. (Ö7, Ö8)

**Şartname sorusu ① — "Gürcü krallıkları haritada ayrı ayrı mı?"** Ölçüldü (68 Kafkasya yerleşimi, `girdi.yukle`): **HAYIR.** Haritada Gürcü kimliği üç: `gurcistan` 20 pencere (Tiflis, Zagem, Sohum, Batum, Ahıska, Artvin çevresi …) · `imereti` 1 (yalnız Kutaisi) · `gurcistan-demokratik-cumhuriyeti` 3. Kartli ile Kaheti AYNI renkte (`gurcistan`; Zagem'de 1578-1606 `v: kaheti-kralligi` tâbi penceresi tek istisna); Samçhe, Guria, Megrelya, Abhazya için ayrı kimlik YOK — Sohum 1281-1578 `gurcistan`. Künye önerileri KUNYE.md'de; boya/pencere kararı koordinatörün.

## 4. Bulamadıklarım (`bulunamadı` / `ölçülemedi`)
- TDV'de müstakil madde YOK (302): ermeni · ermeniler · ermenistan · irminiye · ecmiyadzin · kilikya · imeret/imereti · megrel(ler) · abhaz(lar/ya) · guriya · kutais(i) · gori · tasnak · hincak · sason · zeytun · kumkapi · nizamname · gumru(-antlasmasi) · kars-antlasmasi · moskova-antlasmasi · brest-litovsk-antlasmasi · batum-konferansi · adana-olaylari · ermeni-meselesi · kafkas-islam-ordusu · nuri-pasa · cenub-i-garbi-kafkas-hukumeti. `erivan` canlı ama yalnız yönlendirme sayfası.
- Ermenistan'ın bağımsızlık GÜNÜ (TDV yalnız "Mayıs 1918"; madde künye gününü devraldı, `gun:`'de yazılı).
- Ermenistan'da Sovyet idaresinin ilanı (Aralık 1920) — TDV'de gün yok ⇒ madde YAZILMADI.
- Kars'ın İngilizlerden Ermenistan'a devir günü.
- 1771 Abhaz isyanı — künye olmadığı için değil, kuralın (3) çıkmadan önceki kararla yazılmadı; artık `abhazya-prensligi` ile yazılabilir (TDV `sohum`: *"1771'de isyan edip Sohum Kalesi'ni kuşatarak ele geçirdiler"*, yılsız gün). İstenirse ekleyeceğim.
- İmereti'nin iç hanedan tarihi (1490-1810): TDV kapsamıyor; akademik kaynak bu turda okunamadı.
- 14. yüzyıl Gürcistan (V. Giorgi'nin Moğol hâkimiyetine son vermesi): TDV yıl vermiyor.

## 5. Mükerrer disiplini — yazılmayan ve niçin
1440/1445/1458/1476/1489 Tiflis seferleri (karakoyunlu/akkoyunlu) · 1490 bölünme (olaylar_ek20) · 1555 Amasya · 1578-08-09/24 · 1583/1604/1635/1636 Revan · 1590 · 1603 · 1606 · 1612 Nasuh Paşa · 1613/1616 Kaheti seferleri (safevi) · 1639 · 1723-1736 · 1795 · 1801 · 1804 · 1810 · 1826 Akkirman · 1828 Türkmençay · 1829 · 1878 Ayastefanos/Berlin · 1918-03-03/04-14/05-26/06-04/12-24 · 1919-04-12 · 1920 Batum devri · 1920-09-28/10-30/12-03 · 1921-02-23/03-16/03-28/10-13 — hepsi başka dosyada VAR.

## 6. Kaynak disiplini
- Birincil kaynak TDV; her maddede yük taşıyan cümle `kaynak:` alanında tırnakla. Vikipedi, blog, YZ metni kullanılmadı.
- Gün olmayan her madde `YYYY-01-01` + `gun:` açıklaması; ay biliniyorsa `YYYY-MM-01` + `gun:`. İki madde "gün komşudan" şartlı kuralıyla (1578-08-09 Dadyan/Güryel ← Çıldır · 1919-04-12 Kars devri ← İngiliz işgali), `gun:` alanında beyanlı, değer EN ERKEN sınır.
- Bir maddede kaba tarih künye penceresinin dışına düştüğü için künyenin günü devralındı ve kaynaksızlığı yazıldı (1918-05-28 Ermenistan).
- TDV'nin kendi içindeki çelişkiler maddelerin `ic_not_d:` alanında ve DUZELTME'de: Tiflis 1536/1540 · Rostom 1632/1643 · Georgievsk 1783/1784 · Gümrü 2/3 Aralık 1920 · Acara 1479/1535 · Ahıska "Trabzon Antlaşması".
