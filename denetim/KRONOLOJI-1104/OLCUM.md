# KRONOLOJI-1104 — kronoloji maddeleri ikinci geçiş: ölçüm

Görev: EMRELİC 1 KASIM → KASA SALI, 4 Kasım 2026 (Emre önceliği: çekirdek denetim). Dal
`kasa-1104-kronoloji` (origin/main ceb0ce402'den). **Veriye yazılmaz;** çıktı öneri satırıdır.

## Ölçüm (KASA, bu worktree, `py arac/kaynak_guven.py`, çıkış 0)

Evren: index.html'in yüklediği 283 kronoloji/olay dosyası · 17.921 dosya maddesi · 2.265 künye ·
13.372 künye-kronoloji maddesi. Damga: `data/kaynak_guven.js` tablosu (app.js ile aynı bölme, 24.213
dizgede 0 fark).

| damga | dosya maddesi | künye-kronoloji | künye kaynak |
|---|---|---|---|
| güvenli | 12.108 | 3.847 | 1.218 |
| ikincil | 2.411 | 3.867 | 440 |
| tanınmayan | 2.143 | 1.987 | 250 |
| **güvensiz** | **499** | **1.564** | 99 |
| **bulunamadı** | **757** | **180** | 258 |
| **boş** | **3** | **1.927** | 0 |

Ayrıntı tabloları `denetim/KAYNAK-GUVEN-1014/` (bu koşuyla tazelendi): `guvensiz_maddeler.tsv`,
`bulunamadi_dayanakli.tsv`, `damga_dosya.tsv`, `damga_kunye_bolge.tsv`.

## Sınır kırılmasına bağlılık (Değişmez 2 evreni: 7.332 madde, 5.532 yerleşim)

Güvensiz/boş/bulunamadı maddeler süzülürse açılan kırılma (yeni açık, ±30 gün):

| senaryo | Değişmez 2 | 2s |
|---|---|---|
| S1 yalnız güvensiz | 0 | 3 (ham 13) |
| **S2 güvensiz + boş + bulunamadı** | **2** | **34** (ham 54) |
| S3 yalnız A/B kalır | 19 | 314 |

**Öncelik listesi:** `oncelik.tsv` (`py arac/kronoloji_oncelik.py`) — S2'nin tanık maddeleri,
**61 madde** (bulunamadı 37 · güvensiz 21 · boş 3); 47'si en az bir kırılmanın TEK tanığı.
Sıra: tek tanık olduğu kırılma sayısı, sonra toplam kırılma. En yoğun dosyalar: `olaylar_ek16.js`
25 · `kronoloji_sinir_cin_sanguo.js` 6 · `kronoloji_sinir_dogu_500_1281.js` 6 ·
`kronoloji_sinir_karayip_adalar.js` 5 · `olaylar_kamerika.js` 4.

### Gözlem: "güvensiz"in bir kısmı birincil metin neşridir

Çin/Kore maddelerinin güvensiz damgası, kaynağın `zh.wikisource.org`'da okunmasından gelir
(Sanguozhi, Jin shu, Zizhi tongjian, Samguk sagi). Metin birincil kaynaktır (kaynak sırası ⑧);
güvensiz olan barındırıcıdır. Öneri: aynı juan'ın basılı akademik neşrini künye olarak yazmak
(ör. Zhonghua Shuju 1959/1974 punktuasyonlu baskı, cilt/sayfa) — içerik değişmez, damga
güvenliye geçer. Bu, kaynak tablosuna kural EKLEMEK değildir; künye düzeltmesidir.

## Kapsam notu

S2 listesi BUGÜNKÜ Değişmez 2 evreni (olaylar*.js + kronoloji_sinir*.js) üzerinden ölçülür.
Evrene yeni alınacak `kronoloji_*.js` (sınır dışı) ve künye-içi maddeler için "kırılmaya
bağlılık" ancak evren genişletilince ölçülebilir; o maddeler bu ölçümde **damga** ile
sıralanacak (ikinci liste).
