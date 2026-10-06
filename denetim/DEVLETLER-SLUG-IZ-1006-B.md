# DEVLETLER-SLUG-IZ-1006-B — "ucuz okuma turu": 14 künye-kaynağından-devralınmış madde

Yapan: DEVLETLER-SLUG-IZ-1006-B (UMIT, hazır kıta 0610 1239) · görev: YILDIRIM BAYEZIT M-5874, UMIT İRTİBAT aktardı · 6 Ekim 2026
Ağaç: `C:\atlas-p84-slugb` = **origin/makine/umit `b2d4c2ff`** (detached). Veri dosyasına YAZILMADI.
Teslim: bu rapor · `DEVLETLER-SLUG-IZ-1006-B.diff` (**UYGULANMADI**, yalnız `data/devletler.js`, 14/14 satır, LF, CR 0,
`git apply --check` `b2d4c2ff` üstünde TEMİZ) · `DEVLETLER-SLUG-IZ-1006-B-ONGORU.md` (ölçümden ÖNCE) ·
`DEVLETLER-SLUG-IZ-1006-B-URET.py` (salt okur; diff'i üretir, her alıntıyı TDV gövdesinde `assert` eder).

## 0. Mükerrer kapısı ve evren
- "Ucuz" kovanın tanımı `DEVLETLER-SLUG-IZ-1006.md` Öneri 2: *"14 'künye kaynağından devralınmış' madde ucuz bir okuma
  turuyla çevrilebilir (slug canlı, yalnız cümle okunmalı)"* — evren o raporun "Çevrilmeyen 33" tablosundaki 14 satır
  (TSV sınıfı `KUNYE-KAYNAGINDAN-DEVRALINMIS`, 14 satır, birebir).
- `-1006b.md` (4 atlas günü + buganda/funj) ve `-1006-W30USTU.md` (11 ⑤ çakışması) bu 14'ten **hiçbirine** hüküm vermemiş.
  Temelde 14 maddenin `kaynak` alanı hâlâ eski biçimde (ölçüldü). 1006b zinciri temelde ZATEN İNMİŞ (`git apply -R --check` temiz).
- Sınıf doğrulaması (W49b tuzağı): 14'ün hepsi gerçek künye kronoloji maddesi; 9 slug'ın 9'u **GET 200**, başlıklar doğru
  (SURİYE · FİLİSTİN · ÜRDÜN · MISIR · HADRAMUT · SUDAN · HAREMEYN · KATAR · KÜVEYT) + 1 ek slug `sam--suriye` (ŞAM, 200).
  Gövde `ARAC-TDV-CIKARICI-1006.tam` ile (kaynakça HARİÇ, bütün bölümler) okundu.

## 1. Sonuç — 14 kalem
| # | madde | t | slug | sonuç | birebir alıntı (TDV gövdesi) | öneri |
|---|---|---|---|---|---|---|
| 1 | suriye-lubnan-mandasi#0 | 1920-07-24 | `sam--suriye` (+`suriye`) | **✗ gün başka** | «Fransızlar temmuzda Suriyeliler’i ağır bir yenilgiye uğrattıktan sonra Şam’a girerek Faysal yönetimine son verdiler (25 Temmuz 1920).» · `suriye`: «Temmuz 1920’de Beyrut-Şam arasında Han Meyselûn’da … Suriye’de Faysal dönemi sona erdi …» (yalnız AY) | t → **1920-07-25**. 24 Temmuz Meyselûn SAVAŞININ günü; maddenin olayı ("Faysal'ın Şam hükûmetine son verildi") TDV `sam--suriye`de 25 Temmuz. `suriye` maddesinde "24 Temmuz" dizgisi 0 |
| 2 | filistin-mandasi#0 | 1920-07-01 | `filistin` | ✓ AY | «İngiltere, Temmuz 1920 tarihinden itibaren Filistin’de bir sivil manda yönetimi kurdu» | kaynak + "AY (gün TDV'de yok)" |
| 3 | filistin-mandasi#1 | 1922-07-24 | `filistin` | ✓ GÜN | «İngiltere’nin Filistin ve Ürdün üzerinde kurduğu manda idaresi 24 Temmuz 1922’de Milletler Cemiyeti tarafından da onaylandı.» | kaynak |
| 4 | urdun-emirligi#0 | 1921-02-01 | `urdun` | ✓ AY | «kardeşi Abdullah Ürdün’e gelerek Şubat 1921’de kendini Şarkī Ürdün emîri ilân etti.» | kaynak + AY notu |
| 5 | misir-sultanligi#0 | 1914-12-18 | `misir` | ✓ **kısmî** | «İngiltere, 18 Aralık 1914’te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır’ı himayesine aldı. Hidiv II. Abbas Hilmi’yi de düşmanla iş birliği yaptığı gerekçesiyle 19 Aralık’ta görevden alarak yerine amcası Hüseyin Kâmil’i Mısır sultanı olarak ilân etti.» | t DOĞRU (himaye + hükümranlık 18 Aralık). `b` iki olayı birleştiriyor: sultan ilânı TDV'de **19 Aralık** — kaynak notuna yazıldı; `b`yi ayırmak koordinatör kararı |
| 6 | misir-sultanligi#1 | 1922-03-15 | `misir` | ✓ GÜN | «Sultan Ahmed Fuâd 15 Mart 1922’de kral (melik) unvanını aldı ve Mısır’da monarşi ilân edildi.» | kaynak |
| 7 | misir-kralligi#0 | 1922-03-15 | `misir` | ✓ GÜN | (6 ile aynı cümle) | kaynak |
| 8 | kesiri-sultanligi#0 | 1450-01-01 | `hadramut` | ✓ YÜZYIL YARISI | «Aynı yüzyılın ikinci yarısında da Kesîrîler ülkenin bir bölümüne hâkim oldular.» (önceki cümle "XV. yüzyılda") | kaynak + hassasiyet notu. ⚠️ `b`deki "Sayvân/Terîm/Şibâm" bu cümlede YOK (TDV onları XVIII-XIX. yy için anıyor) — `b` sadeleşebilir |
| 9 | kuayti-sultanligi#0 | 1881-01-01 | `hadramut` | ✓ YIL | «İngilizler Yâfiîler’i destekleyerek onların 1881 sonunda Şihr ve Mükellâ dahil bütün Hadramut sahilini ele geçirmelerini sağladılar.» | kaynak + "YIL (TDV '1881 sonunda')" |
| 10 | kuayti-sultanligi#1 | 1888-01-01 | `hadramut` | ✓ YIL | «1888’de imzaladıkları himaye antlaşmasıyla da sahilde hâkim olan Yâfiîler’in dış ilişkilerini tamamen üzerlerine aldılar.» | kaynak + YIL |
| 11 | ingiliz-sudani#0 | 1899-01-19 | `sudan` | ✓ GÜN | «19 Ocak 1899’da Sudan’da yönetimin çerçevesini oluşturan bir antlaşmanın imzalanmasıyla Sudan’ın kontrolü fiilen İngiltere’nin eline geçmiş oldu.» (ikinci bölüm de 19 Ocak 1899 "condominium" — iç tutarlı) | kaynak |
| 12 | mekke-serifligi#0 | 1517-01-01 | `haremeyn` | ✓ YIL | «Mısır’ın fethiyle birlikte (1517) Memlükler’in nüfuzu altında bulunan Haremeyn de Osmanlı hâkimiyetini tanıdı.» | kaynak + YIL |
| 13 | sani-emirligi#0 | 1871-09-20 | `katar` | **✗ gün kaynaksız** | «Böylece 1871 sonbaharında Katar’da da Osmanlı kontrolü sağlandı ve burası Necid sancağına bağlı bir kaza olarak teşkilâtlandırılıp Câsim b. Sânî fahrî kaymakam tayin edildi.» | Olay + yıl + mevsim ✓; **20 Eylül TDV'de yok** (künye `f:` ile aynı gün, künye notu "veriden devralındı" diyor). Diff yalnız kaynağı yazar, t'ye DOKUNMAZ (aşağıda §3) |
| 14 | sabah-emirligi#2 | 1899-01-23 | `kuveyt` | ✓ GÜN | «Hindistan genel valisi Lord Curzon yüzbaşı Mead’i Küveyt’e göndererek Mübârek es-Sabâh ile gizli bir antlaşma yaptı (23 Ocak 1899).» | kaynak. Not: TDV "himaye" kelimesini bu cümlede kullanmıyor (`b` "gizli bir himaye antlaşması"); antlaşmanın içeriği (izinsiz yabancı temsilci yok) bir sonraki cümlede |

**Sayım:** ✓ **11** (gün 5 · ay 2 · yıl 3 · yüzyıl-yarısı 1) · ✓ kısmî **1** · ✗ **2** · ⓿ ölçülemedi **0** · ucuz sanıp pahalı (okuma) **0**.
**Kovaya etkisi (diff uygulanırsa):** 14 maddenin `kaynak`ı `TDV: <slug> — «…»` biçimine geçer ⇒ künye-içi kova tdv **+14**, başka **−14**,
kaynaksız değişmez. Tek tarih değişikliği: #1 (`1920-07-24` → `1920-07-25`).

## 2. Kapı
`py arac/denetle.py` aynı ağaçta: **önce 2 · sonra 2**. Çıktı farkı yalnız eşit-sıralı iki `adal` satırının yer değiştirmesi
(içerik değil). Kod 2 = Değişmez 8 ÖLÇÜLEMEDİ (taze ağaçta `devletler_harita.js` yok, üretilmiş/gitignore'lu) — bu işin sonucu değil.

## 3. Ucuz okumanın ardında PAHALI kalan (ayrı kova — okuma kapandı, düzeltme kapanmadı)
- **sani-emirligi#0 günü (1871-09-20):** TDV yalnız "1871 sonbaharı". Kurala göre `1871-01-01` + `kesinlik:"yil"` olur, ama
  künye `f:` aynı günü taşıyor ve bu gün yerleşim/`s:` kırılmalarında da kullanılıyor olabilir (**ÖLÇÜLMEDİ** — yerleşim
  dosyaları koordinatörde). Kronoloji maddesini tek başına çekmek künyeyle çelişki doğurur ⇒ künye + yerleşim + madde birlikte,
  koordinatör işi. Alternatif: gün için akademik kaynak aramak (bu turda denenmedi).
- **suriye-lubnan-mandasi künye `f:` 1920-07-01:** `suriye-arap-kralligi` künyesi 1920-07-25'te bitiyor; manda künyesi 24 gün
  önce başlıyor (bu ardıl çakışması o künyenin `not:`unda zaten yazılı, bu işin kapsamı DIŞI; #1'in 25 Temmuz'a çekilmesi
  maddeyi o künyenin bitişiyle hizalar, künye `f:`'yi değiştirmez).
- **misir-sultanligi#0 `b`si:** iki günlük olayı tek maddede anlatıyor; ayırmak `b` metnine dokunur (kaynak dışı alan) — öneri, uygulanmadı.

## 4. Öngörü → ölçüm
| | öngörü | ölçüm | |
|---|---|---|---|
| ✓ | 10 | 11 (+1 kısmî) | ~✓ |
| ✗/kısmî | 3 | 2 ✗ + 1 kısmî | ✓ |
| ⓿ | 0-1 | 0 | ✓ |
| pahalı | 0-1 | okuma 0 · düzeltme 1 (sani#0) | ✓ |
| mekanizma: künye kaynağı TDV cümlesini zaten taşıyor ⇒ kapanır | — | 12/14'te tuttu | ✓ |
| mekanizma: suriye#0 "TDV yalnız Temmuz verir" | ay | `suriye` ay veriyor ✓, ama **asıl bulgu başka**: `sam--suriye` olayı 25 Temmuz diye günlüyor ⇒ maddenin günü YANLIŞ olay günü (savaş ↔ yönetimin sonu) | ✗ (mekanizma çürüdü, sonuç daha sert) |
| filistin#0 ✓ AY notuyla | AY | AY | ✓ |

## 5. Bulamadıklarım
- sani-emirligi#0 için 20 Eylül 1871'i veren kaynak: **bulunamadı** (yalnız TDV `katar` okundu; dış kaynak araması YAPILMADI).
- Kesîrî hâkimiyetinin yılı: TDV yalnız "XV. yüzyılın ikinci yarısı" — yıl **TDV'de yok**.
- Denenen yollar: `suriye` "24 Temmuz" → 0 isabet; `sam--suriye` (komşu künyenin kaynak alanı ADAY gösterdi, gövde KENDİM okudum — atlas dayanak değil).
