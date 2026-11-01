# ÇAPRAZ SORGU KAMPANYASI (Emre, 18 Ekim 2026)

**Amaç:** Osmanlı'nın 1281–1923 boyunca ilişkili olduğu devletlerin atlastaki kronoloji
maddelerini, o devletin **kendi bilimsel kaynaklarıyla** (ve Osmanlı/TDV ile) çapraz sorgulayıp
doğrulamak. İki kaynak ayrışırsa üçüncüye bakılır; ayrışma kayda geçer; gerekirse düzeltilir.

## Sıra (Osmanlı'ya yakınlık)
1 Bizans · 2 Bulgar · 3 Sırp · 4 Arnavut · 5 Macar · 6 Yunan · 7 Avusturya/Habsburg · 8 Alman ·
9 Polonya · 10 Litvanya · 11 Ukrayna · 12 Rus · 13 Venedik · 14 Ceneviz · 15 Papalık · 16 Napoli ·
17 İspanyol · 18 Portekiz · 19 Fransız · 20 İngiliz · 21 Hollanda · 22 İsveç · 23 Fas · 24 Mısır ·
25 İran · 26 Gürcü · 27 Ermeni · 28 Hint · 29 Habeş

Her grubun kapsadığı devlet kimlikleri: `node arac/capraz_cikar.js sayim` (grep ile ara),
maddeler: `node arac/capraz_cikar.js dok <id> …` (JSON). Kapsam tek grup = o devletin bütün
`devletler.js` kimlikleri (öncül/ardıl/alt künye dâhil) + o devleti `taraflar`da taşıyan maddeler.
Pilot: maddenin 1281–1923 aralığındaki hâli öncelikli; aralık dışı madde sona kalır.

## Kaynak hiyerarşisi (CLAUDE.md "Kaynak kuralı" geçerli)
1. Osmanlı/İslâm dünyası tarafı: **TDV İslâm Ansiklopedisi** esas.
2. **Karşı taraf, kendi ulusal/akademik kaynağı** (örnek: Bizans → ODB *Oxford Dictionary of
   Byzantium*, Ostrogorsky, Nicol, Treadgold, Kazhdan; Bulgar → BAN/Bulgarian Academy, Zlatarski;
   Sırp → SANU, Ćirković; Macar → Engel *Realm of St Stephen*, Magyar Katolikus Lexikon;
   Alman/Avusturya → ÖBL, NDB/ADB (deutsche-biographie.de), Brockhaus; Venedik → Treccani DBI;
   Papalık → Treccani, Catholic Encyclopedia + Pastor; Fransız → Larousse/BnF/Gallica;
   İngiliz → ODNB; Hollanda → Huygens/BWN; İsveç → SBL; Polonya → PSB, Encyklopedia PWN;
   Rus → Bolşaya Rossiyskaya Entsiklopediya; Gürcü/Ermeni/Hint/Habeş → ilgili ulusal
   ansiklopedi + Encyclopaedia Iranica / Encyclopaedia of Islam / Cambridge History).
3. Üçüncü taraf: Encyclopaedia of Islam (EI²/EI³), Cambridge Histories, Britannica (yalnız ek).
- **Vikipedi tek dayanak olamaz.** Forum/blog/YZ metni/popüler tarih sitesi kullanılmaz.
- **Atlas referans değildir**; çelişkide atlas düzelir.
- Küçük model (Haiku) kullanılmaz.

## Karar çizelgesi (madde başına)
| Sonuç | Anlamı | Eylem |
|---|---|---|
| **TEYİT** | ≥2 bağımsız kaynak atlasla uyumlu (biri karşı taraf) | `capraz_teyit` kaydı (defter) |
| **FARK-KÜÇÜK** | gün/ay farkı, kaynaklar ayrışıyor | üçüncü kaynak; defterde not; `ic_not` ile beyan |
| **ÇELİŞKİ** | yıl/olay/aktör/sonuç ayrışıyor | üçüncü kaynak → hüküm; defter + düzeltme önerisi |
| **KAYNAK-YOK** | karşı tarafta bulunamadı | "bulunamadı" yaz; sessizce teyit sayma |
| **ÖLÇÜLEMEDİ** | site açılmadı / bağlam okunamadı | "çekilemedi ≠ yok"; tekrar dene |

**Düzeltme yetkisi:** tek başına atlas aleyhine karar, **iki bağımsız kaynak + biri karşı
taraf** şartıyla uygulanır. Aksi hâlde yalnız defter kaydı + Emre'ye soru. Düzeltme `kaynak:`a
her iki künyeyi ve "ÇAPRAZ-1018" notunu yazar; Hicrî/takvim kuralları CLAUDE.md'deki gibi;
**tarih uydurma yok** (gün yoksa yıl/ay hassasiyeti).

## Defter
`capraz/DEFTER-<grup>.tsv` — sütunlar:
`madde_t | madde_b | karar | atlas_degeri | kaynak1(künye+URL) | kaynak1_degeri | kaynak2 | kaynak2_degeri | kaynak3 | hukum | duzeltme(E/H/ONERI)`

## Bizans pilotundan çıkan kurallar (18 Ekim 2026)
1. **"Bağımsız" tanımı:** aynı yayıncının iki maddesi (Treccani + Treccani DBI) ya da TDV'nin iki
   maddesi bağımsız sayılmaz. ÇELİŞKİ ve düzeltme için iki *farklı yayıncı* gerekir.
2. **Yeni sınıf TEK-KAYNAK-AYRIŞMA:** yalnız bir kaynak atlasla ayrışıyor, ikincisi yok → ÇELİŞKİ
   değil; defter + Emre'ye soru. ÇELİŞKİ = iki bağımsız kaynak ayrışıyor.
3. **Kabul edilen karşı taraf kaynaklar** (kitaplar açılmadığında): Treccani DBI, Hrvatska
   enciklopedija, Catholic Encyclopedia, FHW (fhw.gr), TIB (tib.oeaw.ac.at), encyclopedia.com, doaks.org.
4. **Erişim:** Britannica, Iranica, Oxford Reference, ResearchGate WebFetch'te 403 verir; yalnız arama
   özetiyle kullanılırsa "özet, doğrulanmadı" işaretlenir, TEYİT sayılmaz (ÖLÇÜLEMEDİ). WebSearch'te
   allowed_domains ile süz (sonuçlar Vikipedi ağırlıklı).
5. **TDV iç tutarsızlığı:** iki TDV maddesi ayrışırsa "TDV esas" yetmez; hangisinin esas alınacağı
   Emre'ye sorulur.
6. **Önce tekilleştir:** aynı olayın mükerrer satırları (1453 ×2, 1460 ×2…) bir kez sorgulanır.
7. **Alt ajan payı** önceden kesin aralıkla yazılır (çift tarama olmasın).

Madde sayısı çok büyük (Almanya 292, İngiltere 213, Rusya 169…): her grup **kesit** ile
başlar — önce 1281–1923 çekirdek + Osmanlı'yla kesişen maddeler, sonra kalan.
