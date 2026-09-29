# ACILIS-ANIM-0929 — açılış perdesi GÖRSEL KAYNAK + LİSANS defteri

Kural: `CLAUDE.md §1.6` (görsel YALNIZ kamu malı/CC0, `gorsel_kaynak:` açık) ·
`§4` kırmızı çizgi (YZ üretimi görsel yok). Lisansı belirsiz görsel KULLANILMAZ.

## 1. KULLANILAN — perdede bugün görünen her şey
| Öğe | Kaynak | Lisans |
|---|---|---|
| Küre kara şeridi | Natural Earth `ne_10m_land` (sadeleştirilmiş, 0,9°) | kamu malı (Natural Earth kullanım koşulu) |
| 14 bugünkü ülke silüeti (RUS CHN USA IND CAN BRA AUS DEU FRA IRN EGY GBR ITA + final TUR) | Natural Earth `ne_10m_admin_0_countries`, `ADM0_A3` | kamu malı |
| Osmanlı Devleti (1600) | atlasın kendi gövdesi, `denetim/ARAYUZ-0077-osmanli-zirve.json` | projenin kendi çıktısı — telif YOK |
| 14 imparatorluk (Britanya · Rus Çarlığı · Safevî · Babür · Timurlu · Av-Mac · Qing · İspanya · Memlük · Altın Orda · İlhanlı · Alman İmp. · Lehistan-Litvanya · Ming) | atlasın kendi gövdeleri `data/devletler_harita.js` (her birinin dönemi `data/acilis_siluet.js` `kaynak` alanında) | projenin kendi çıktısı — telif YOK |
| Yazılar | SVG `<text>`, sistem yazı tipi (Georgia/serif) | — |

Silüetler SÜS'tür, ölçü değil: sadeleştirme ~%0,8, atlas gövdelerine ~0,3° kapama.
Etiketteki yıl = atlasın o künye için en geniş gövde döneminin başlangıç yılı
(mamul ürünün kendini göstermesi; tarih hükmü değil).

## 2. ÖLÇÜLDÜ, KULLANILMADI — padişah portreleri (`assets/portreler/`)
- 36 dosya (+ `KAYNAKLAR.txt`, `OKUYUNUZ.txt`), toplam 2,5 MB.
- `KAYNAKLAR.txt` her dosyaya Vikipedi sayfası + Commons dosya adı veriyor; lisans
  **toplu beyan** ("tümü kamu malı"), **dosya-başı lisans satırı YOK** — Commons
  sayfaları tek tek okunmadı ⇒ `ölçülemedi`, "doğrulandı" DEĞİL.
- 🟡 `ahmed1.jpg` kaynağı `صورة_للشاهزاده_أحمد_2013-12-19_09-18.jpg` — 2013 tarihli,
  yazar adı yok; modern çizim/fotoğraf olabilir ⇒ lisansı **BELİRSİZ**.
- 🟡 `mehmed1.jpg` kaynağı `Tughra_of_Mehmed_I.svg` — portre değil tuğra (OKUYUNUZ
  bunu söylüyor), ama dosya `.jpg` adında.
- Perdede KULLANILMADI: lisans ölçülmedi + 2,5 MB bayt 4 sn'lik açılışta yüklemeyi
  yavaşlatır.

## 3. ÖLÇÜLMEDİ — devlet adamları (11 millet × 5) ve armalar
- `bulunamadı` / ölçülmedi: 55 devlet adamının hiçbiri için dosya-başı kamu malı
  görsel aranmadı; hiçbir arma aranmadı.
- Karar koordinatöre soruldu (tahta M-5470): öneri **tipografik kart** (ad · yıllar ·
  millet rengi — telif 0, bayt ~0); 55 adın SEÇİMİ editör kararı, Emre onayı ister.
  Cevap gelene kadar perdede devlet adamı/arma YOK.
