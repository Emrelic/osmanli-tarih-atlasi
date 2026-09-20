# M-ALANI-0920 — yerleşimlere bölge (`m:`) alanı · 20 Eylül 2026 · 1.MURAT

## Niçin bu iş
20 Eylül'de `arac/denetle.py`nin Değişmez 2s kapısına **yer şartı** eklendi (commit d6fe3f9): bir
yabancı kırılmayı ancak onu gerçekten anlatan bir madde kapatabilir — madde ya yerleşimi anacak
(`yer_id` · ad çekirdeği · yerleşimin `m:` bölgesi) ya tarafı BAŞLIKTA anacak ya da iki tarafı
birlikte metinde anacak. Bu şart girince açık sayısı 13'ten 201'e çıktı; bu bir gerileme değil,
hiç ödenmemiş borcun görünür olması.

Sonra ölçüldü (GLM, sayıları 1.MURAT doğruladı — `glm/M-ALANI-ONERI.json` · `.md`):
açıkların yarısı **madde borcu değil**. Olayın maddesi VAR, ama kırılan yerleşimin `m:` (bölge)
alanı boş olduğu için madde o yerleşime bağlanamıyor.

| ölçüm | sayı |
|---|---|
| açık kayıt (192 tarih) | 1929 · 955 benzersiz yerleşim |
| **`m:` yazılınca kapanır** | **938 kayıt · 548 yerleşim** (güven YÜKSEK 71 · ORTA 867) |
| `m:` çare değil (aday bölge uzakta, ortanca 2457 km) | 991 |
| kesin yeni madde ister | 18 |

Vaka: Buçaş 1672 ve Karlofça 1699 kırılmalarındaki Braslav · Vinnitsa · Kamaniçe noktalarında
`m:` alanı HİÇ yok. `m:"Podolya"` yazılsa mevcut Buçaş/Karlofça maddesi kırılmayı kendiliğinden
kapatır.

## Görev
`glm/M-ALANI-ONERI.json` önerilerini **doğrulayarak** uygula.
1. **Sırayla:** önce güven YÜKSEK (71), sonra ORTA (867). DÜŞÜK'e DOKUNMA (o küme `m:` ile
   kapanmıyor — `glm/DUSUK-973.json`).
2. **Her öneri ayrı ayrı doğrulanır** — toplu `replace` YASAK (D: toplu düzeltme dersi):
   - Önerilen bölge adı o yerleşimin gerçekten bulunduğu tarihî bölge mi? Dayanak: TDV maddesi
     (yerin kendi maddesi ya da bölge maddesi) · akademik kaynak · yoksa **UYGULAMA**, "ölçülemedi"
     yaz. Atlasın kendi kaydı dayanak DEĞİLDİR.
   - Bölge adının yazımı mevcut `m:` sözlüğüyle tutarlı mı (aynı bölge iki ayrı yazımla girmesin)?
     Mevcut değerleri önce tara.
   - Yerleşimin `m:` alanı DOLUYSA değiştirme — ayrı listede raporla (öneri "değiştirme" diyorsa
     bile; mevcut değer başka bir kaynağa dayanıyor olabilir).
3. **Yazım:** yalnız `m:` alanı eklenir/yazılır; başka hiçbir alana dokunulmaz. Kayıt biçimi ve
   sıralama korunur. Dosyalar `arac/girdi.py` → `GIRDI_DOSYALARI` listesinden okunur.
4. **İz:** her partide `denetim/YAMA-M-ALANI-0920.json`a eklenen kayıtlar (yerleşim id/ad · dosya ·
   eski `m:` · yeni `m:` · dayanak · güven).
5. **Ölçüm:** her partiden sonra `py arac/denetle.py` — 2s açık sayısı kaç düştü, yeni ihlal var mı.
   🔴 Açık sayısı düşmüyorsa öneri yanlıştır; devam etme, tahtaya yaz.

**Parti büyüklüğü:** 1. parti YÜKSEK 71'in tamamı → ara teslim. Sonra ORTA'yı 100'erlik partiler
hâlinde, her partide ara teslim. Bekçi partiler arasında açık kalır.

## Dosya sahipliği
`data/yerlesimler*.js` (yalnız `m:` alanı) · `denetim/YAMA-M-ALANI-0920.json` ·
`denetim/M-ALANI-0920.md`. Başka hiçbir dosyaya yazma. `arac/` ve `index.html` senin değil.

## Sınır ve kurallar
- Kaynak: TDV birincil · yalnız akademik · Vikipedi tek dayanak değil · tarih/yer UYDURMA ·
  atlas referans değildir.
- `data/` commit'i işçide izin reddine takılır — DENEME; teslimde değişen dosyaları tek tek say,
  1.MURAT commitler. Kendi `denetim/` raporunu adıyla commit edebilirsin
  (`git add -- <ad>` · `git commit -F <dosya> -- <aynı ad>`), `git add -A` ve dizin pathspec'i YASAK.
- Motor koşusu YASAK (`uret_petek.py`, `kos_ve_yayinla.py`). `denetle.py` koşmak serbest ve şart.
- Türkçe metin karşılaştırmasında `lower()` kullanma; `denetim/ARAC-NORMAL-0903.py` normalleştiricisi.
