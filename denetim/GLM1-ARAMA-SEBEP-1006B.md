# GLM1-ARAMA-SEBEP-1006B — ARAMA dökümü çekici kusurunun SEBEBİ (ölçüm; çekim yok)

Durum: **BİTTİ** (6 Ekim 2026, GLM1) — teslim üçlüsü §3'te.

Atama: YILDIRIM BAYEZIT (koordinatör) mesajı, 6 Ekim — 1006 tesliminin ① numaralı
ardılı. Soru: **"çekici hangi koşulda arama sayfası kaydediyor?"**
Sınırlar: üç dosya yazılır (eleme · ölçüm · rapor) · önbellek/`data/`/`arac/`'a
dokunulmaz · hüküm verilmez (sebep = ölçüm, çare = hüküm, hüküm koordinatörde).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı, değiştirilmez

Eldeki kanıt (1006'dan, yeni ölçüm yok): örnek ARAMA dosyası içeriği 76 bayt ve
site menüsünün kuyruğu (`duyurular · gecen-ayin-ilk-20-si · iletisim-formu ·
sergi-arsivi`) · `absu` hem `302`-kaydı (5 bayt) hem `ARAMA-absu` olarak AYNI
kovada duruyor · canlıda 5/5 arama sayfası 200 + `bolum=0` (1006 doğrulaması).

**Hipotez (düşüş-arkası fallback):** çekici akışı ① slug'ı dene → 302 (ölü) →
② aramaya düş, sorguyu `ARAMA-<q>` adıyla kaydet → ③ sonuç SAYFASINI madde
sandı. Kusur aletin KESİMİNDE değil, AKIŞTADIR: sonuç sayfası madde değildir.

**Sayı öngörüleri:**
| # | Soru | Öngörü | Mekanizma |
|---|---|---|---|
| Ö1 | 379 dosyanın içerik-hash çeşitliliği | **1-3 benzersiz kalıp** (≥%95 tek) | sonuçsuz arama sayfasının sunucu-HTML'i hep aynı menü iskeleti |
| Ö2 | `ARAMA-<q>` ↔ aynı kovada `<q>` `302`-kaydı eşleşmesi | **≥%75 (280-320/379)** | fallback: önce slug denenmiş, ölünce aramaya düşülmüş |
| Ö3 | canlı arama sayfası sonuç satırı (`madde_liste_satir`) sunucu-taraflı mı? | **EVET** | çıkarıcının `baslik()` komutu buna dayanıyor (bağımlılık ölçülebilir) |
| Ö4 | 76 baytlık menü kalıbını hangi eski alet üretir? | **bütün-sayfa ailesi (W16/W19-g)** | sonuçsuz sayfada gövde zaten ~yalnız menü; kesen aletler de aynı kalıbı verir |
| Ö5 | ARAMA dosyalarının mtime'ı `302`-kayıtlarıyla aynı toplu iş mi? | **aynı pencere (± saatler)** | tek harmanın iki adımı |

## 1. AŞAMA ELEME — disk kanıtı (HTTP yok) — BİTTİ

Çıktı: `denetim/GLM1-ARAMA-SEBEP-ELEME-1006B.tsv` (386 satır + başlık).

**Evren düzeltmesi (beyan):** ARAMA dosyası **386**'dır, 1006 raporundaki 379
değil — 7 adet `ARAMA-*` 0 bayttır ve 1006'da BOŞ 482 havuzunun içinde
sayılmıştı. İki sayı da doğrudur, sınıflar ayrıktır (1006 sınıf sayımı değişmez).

**İçerik çözüldü — biçim:**
```
'HTTP-kodu\n' + sayfanın SİTE-İÇİ href-slug'larının SIRALI TEKİL listesi
```
- 30 Eyl gecesi geçerli menü (5 öge): `dosyalar · duyurular · gecen-ayin-ilk-20-si ·
  iletisim-formu · sergi-arsivi`. Sonuçsuz sorgu → yalnız bu 5 satır.
- **Sonuçlu sorguda madde slug'ları alfabetik araya girer** (`meshed` →
  `ali-meshedi-sultan · hudavendigar--bursa · … · meshed-ulucamii`; `vize` → menü
  + `vize`). Bu, çekicin arama SONUÇLARINI gördüğünü ama maddeye İNMEDİĞİNİ gösterir.

**Baş sayılar:**
| Ölçüm | Değer |
|---|---|
| dosya | **386** (35 kova; ONCE1281-YERLESIM'de yoğun) |
| benzersiz içerik-hash | **81** = kalıp `26128ca4` ×**300** (76 bayt, sonuçsuz) + boş `d41d8cd9` ×**7** + **79 tekil** (79-293 bayt, sonuçlu) |
| `302`-kardeşi (aynı kovada `<q>.txt` = `302\n`) | **363/386 (%94)** |
| dolu-kardeşi (aramanın hedefi ayrıca inmiş) | 17 |
| `madde_izi` (madde_liste/BİBLİYOGRAFYA/Müellif) | **0** — biçim HTML imi taşımaz (1006'daki "gövdesiz sayfa" teşhisinin kesin biçimi) |
| mtime | ONCE1281-YERLESIM: ARAMA **21:37-22:00** ↔ 302-kayıtları **20:55-21:59** (aynı akşam, 30 Eyl) · IRAN-KAFKAS 02:03 |

**Disk geçişi (386'nın tamamı, HTTP'siz):** dolu 379 gövdenin **379'u (%100)
sıralı+tekil** → serileştirici `sorted(set(slug))`. Sonuç-slug (menü-dışı satır):
**79 dosyada ≥1** · toplam **217 satır / 208 benzersiz** · dosya başına ort 0,6,
maks 12. Sonucun kovada **dolu döküm kardeşi var: yalnız 14 satır (%6,5)**.

## 2. AŞAMA ÖLÇÜM — canlı teşhis (6 istek; önbelleğe YAZILMADI)

Çıktı: `denetim/GLM1-ARAMA-SEBEP-OLCUM-1006B.tsv` (3 satır: meshed · absu · vize).
**Toplam istek 6** (tur 1: 3 · tur 2: 2 · tur 3: 1); ara bekleme 1 sn.

**Ö3 — ✓ tuttu:** `madde_liste_satir` **sunucu-taraflı** (curl ham HTML'inde:
meshed **13** · vize **2** · absu 5 satır). absu'nun 5 satırı makale değildir —
yakalanan href'ler `?q=absu&p=m` (sorgu-eko sayfalama bağı) + `hakkinda.php`
(arama kılavuzu); önbellekle uyumlu: absu sonuçsuz.

**Ö4 — ✗ düzeltildi (eksen hatası bende):** bilinen ayıklamaların **hiçbiri**
biçimi üretmedi (hash eşleşmesi **0/8**: tam-govde + eski6 + bağlantı-METNİ
dom/sıralı — ilk turda bağlantı metinlerini karşılaştırmıştım; önbellek satırları
metin değil **href-slug**). Gerçek üretici: **href-slug sıralı-tekil
serileştirici** — kanıt zinciri:
1. 379/379 dolu gövde sıralı+tekil (§1);
2. önbellek satırları canlı href kümesinin **alt kümesi**: meshed **14/14** ·
   absu **5/5** · vize **6/6**;
3. hash birebir tutmuyor, ÇÜNKÜ **site 30 Eyl'den beri değişmiş**: canlı menü
   bugün 9+ öge (`duyuru/arama-kilavuzu · genel_kisaltmalar · hakkinda ·
   hakkinda.php` yeni) ve meshed'in madde sonuçları **9 slug'dan 3'e inmiş**.
Dökücünün KODU (1006'daki T07/W24 aleti) diskte yok → **biçim ölçüldü, alet
kimliği ölçülemedi** (ölçülemedi ≠ yok).

**SEBEBİN ÖLÇÜMÜ (koordinatörün sorusu):** çekici arama sayfasını **şu koşulda**
kaydediyor: sorgunun slug denemesi `302` ile ölmüş ve akış aramaya düşmüşse —
kanıt: %94 ortak kova + aynı akşam mtime + gövde = o sayfanın slug listesi.
Kayıt, sonuç sayfasının KENDİSİNİN madde sandalyesine oturmasıdır (`200\n` +
liste); arama sonucundaki 217 slug'dan **yalnız 14'ü izlenmiş**. 23 dosya
`302`-kardeşsiz (17'sinin dolu kardeşi var, 7'si boş) — diskten nedeni okunamaz.

**ÖNGÖRÜ KARŞILAŞTIRMASI (kural ⑦ — §0 değiştirilmedi):**
| # | Öngörü | Ölçüm | Tuttu mu |
|---|---|---|---|
| Ö1 | 1-3 hash (≥%95 tek kalıp) | **81** (300+7+79) | ✗ — menü özdeşliğini gördüm, sonuç-slug'ların da serileştiğini öngörmedim; örneklemlerim sonuçsuzdu |
| Ö2 | ≥%75 302-kardeş | **%94** (363/386) | ✓ |
| Ö3 | madde_liste_satir sunucu-taraflı | **EVET** (13/2/5) | ✓ |
| Ö4 | bütün-sayfa ailesi (W16/W19-g) | **hiçbiri (0/8)** — üretici href-serileştirici | ✗ |
| Ö5 | aynı mtime penceresi | **aynı akşam** (21:37-22:00 ↔ 20:55-21:59) | ✓ |

## 3. TESLİM — üçlü kural

**① NE ÖLÇTÜM** — ARAMA dökümü 386 dosya; biçimi çözüldü: `200\n + sıralı tekil
site-içi href-slug listesi` (379/379 gövde sıralı+tekil; önbellek satırları canlı
href kümesinde 14/14 · 5/5 · 6/6). Koşul ölçüldü: **363/386 (%94) aynı kovada
`302`-kardeşli ve aynı akşam damgalı** → akış "slug dene → 302 → aramaya düş →
sonuç sayfasını madde yerine kaydet". Aramanın bulduğu 217 sonuç-slug'dan 14'ü
izlenmiş; 300 sorgu sonuçsuz, 79'u sonuçlu (208 benzersiz slug). Site 30 Eyl'den
beri değişmiş: menü büyümüş (arama-kilavuzu vb.), meshed sonuçları 9→3.

**② NE BULAMADIM** (bulunamadı bir sonuçtur):
- Dökücünün KODU diskte yok — biçim ölçülür, alet kimliği **ölçülemedi**.
- Hash-birebir eşleşme **ölçülemedi**: site 30 Eyl'den beri değişti (menü + sonuç
  seti) — bu bir ölçüm kusuru değil, iki tarih arasındaki site farkının kendisi.
- `302`-kardeşsiz 23 dosyanın aramaya neden düştüğü diskten okunamaz.

**③ NE İSTİYORUM** (öneriler, hüküm koordinatörde):
1. **③ slug-onarım ADAY tablosuna hazır girdi:** 79 sonuçlu ARAMA dosyası TDV'nin
   kendi motorunun o geceki önerilerini taşıyor (208 benzersiz slug, D217
   "kapsayıcı madde" denemesinin girdisi) — AMA motor değişti (meshed 9→3):
   aday tablosu bu listelerden beslenirse her aday **bugünkü canlı motorla yeniden
   doğrulanmalı**.
2. **Mükerrer düşürme:** 14 inmiş slug (dolu kardeşi olanlar) yeniden-çekim
   listesinden düşünülebilir — listesi ELEME TSV'den okunabilir.
3. **② yeniden çekimde akış kuralı:** arama-adımı bu biçimle kaydetmemeli (sonuç
   sayfası madde sandalyesine oturmamalı); ölçülen kusur akıştadır, alet kesiminde
   değildir. Uygulanması hüküm ve şartnamedir — sizde.

**Yazdığım üç dosya:** `denetim/GLM1-ARAMA-SEBEP-ELEME-1006B.tsv` (386 satır) ·
`denetim/GLM1-ARAMA-SEBEP-OLCUM-1006B.tsv` (3 satır, 6 istek) ·
`denetim/GLM1-ARAMA-SEBEP-1006B.md` (bu rapor).
Önbellek dizinlerine, `data/`'ya, `arac/`'a yazılmadı.
