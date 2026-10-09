# KRONO-SONRA1923-EKSIK-1008 · ikinci dilim (B)

Makine UMIT · ağaç `C:\atlas-ks1923` · temel `origin/makine/umit` **7f63bcd9** (birinci dilim 219959d6 içinde, dosya 511 madde)
Diff UYGULANMADI, commit yok.

## ① Önce ölçüm: madde gerçekten yok mu?
Evren: 185 dosya, t ∈ [1920, 1947) **1.014 madde** (kronoloji* + olaylar* + künye-içi `kronoloji:`).

| soru | bulunan | hüküm |
|---|---|---|
| Mısır 1936 İngiliz-Mısır antlaşması | **YOK** (yalnız 1945-03-22 Arap Birliği maddesi var) | yazıldı (1936-08-26) |
| Mısır 1922 bağımsızlık | **28 Şubat 1922 tek taraflı İngiliz ilanı: HİÇBİR YERDE YOK.** 15 Mart 1922 krallık ilanı **4 yerde VAR**: künye-içi `misir-sultanligi` + `misir-kralligi`, `KRONOLOJI_SINIR_AFRIKA`, `KRONOLOJI_SINIR_ORTADOGU`, `OLAYLAR_P0050` | **yazılmadı** — 1922 bu dosyanın kuşağının dışında (1923-10-29 →). Hazır madde aşağıda ⑤ |
| Aden 1937 | YOK (1934 Yemen-İngiltere maddesi var) | yazıldı (1937-04-01) |
| Pehlevi 1925 / Kaçar'ın sonu | künye-içi `kacar` 1925-01-01 (yıl-temsilî) · künye-içi `iran` 1925-12-12 · `KRONOLOJI_IRAN` 1923-10-28'de bitiyor · çok taraflı dosyalarda YOK | iki madde yazıldı (1925-10-31 · 1925-12-12) |
| Karpat-Ukrayna 1945-06-29 | YOK (1938-10-08 özerklik · 1939 Macar ilhakı · 1944-05-08 Beneš-Sovyet var) | yazıldı |
| Macar birliklerinin K. Erdel'e girişi | YOK | **yazılmadı — akademik kaynak bulunamadı** (④) |

## ② Yazılan 5 madde (`data/kronoloji_cok_1923_1945.js`, 511 → 516)
| t | madde | taraflar | kaynak |
|---|---|---|---|
| 1925-10-31 | İran meclisi Kaçar hânedanını tahttan indirdi | kacar · iran | **Encyclopaedia Iranica** 'Aḥmad Shah Qājār' (gün) + TDV kacarlar (yıl) |
| 1925-12-12 | Rıza Han şehinşah, Pehlevî hânedanı | iran · kacar | TDV riza-sah-pehlevi |
| 1936-08-26 | İngiliz-Mısır ittifak antlaşması | misir-kralligi · ingiltere | TDV misir (iki birebir cümle) |
| 1937-04-01 | Aden taç kolonisi oldu | ingiltere · ingiliz-hindistani | The National Archives / British Library IOR/R/20 (gün) + TDV aden (yıl) |
| 1945-06-29 | Karpat Ukraynası SSCB'ye bırakıldı | cekoslovakya · sovyet-rusya | FRUS 1945 c. IV d. 511 (gün) + LOC Country Studies Czech Republic |

- **Pehlevi çelişkisi** 1925-10-31 maddesinin `ic_not_t`'sinde: TDV `riza-sah-pehlevi` *"31 Ocak 1924 tarihinde meclis … Kaçar hânedanına son verdi"* ↔ TDV `kacarlar` (1925; hükümdar listesi Ahmed Şah 1909-1925) ↔ Iranica *"On 31 October 1925, the Majlis approved a bill deposing the Qajars"*. TDV kendi içinde çelişiyor (§4 ⑥); kacarlar + Iranica esas alındı. Iranica 1924'ü cumhuriyet tartışması yılı olarak anlatıyor.
- Mısır: madde **isg: kapanış günü değildir** — antlaşma işgalin "tedricen" kaldırılmasını ve kanal bölgesine çekilmeyi KARARLAŞTIRIR; çekilmenin günü TDV'de yok. Z5'in 57 noktası için bu madde tek başına `isg:` bitişi dayanağı OLAMAZ (`ic_not_d`'de yazılı).
- Aden: veride Aden noktası 1839'dan beri `s:ingiltere` (ingiliz-hindistani değil) ⇒ 1937 haritada kırılma üretmez; Aden kolonisi künyesi yok. Madde bilgi maddesidir.
- TDV alıntıları kaydedilmiş gövdeye karşı programla **5/5 birebir**; İngilizce alıntılar çekilen sayfa metninden (FRUS'taki "Ukranian" yazımı asıldaki gibi).

## ③ Kapılar
| kapı | önce | sonra |
|---|---|---|
| `node --check` | — | ✓ |
| madde | 511 | 516 · sıralı ✓ · t+b ikizi 0 |
| eşlenemeyen taraf | — | **0** / 10 |
| `denetle.py` | çıkış **2** | çıkış **2** — yalnız D8 ölçülemedi (`devletler_harita.js` taze ağaçta yok); `Değişmez`/`Ek denetim` satırları birebir aynı |
| `odak_olc.py` | dosya 511/511 KONUMLU · AÇILAMAZ 390 | **515/515 KONUMLU · ODAKSIZ 0 · AÇILAMAZ 391 (+1)** · çıkış 0 |
| diff | — | +77 satır, LF (CR 0), `git apply --check` temiz |

### 🔴 AÇILAMAZ +1 — ölçüldü, sebebi künye penceresi
Fazla madde **1925-10-31 Kaçar** maddesi. `js/app.js:14880` `cokTarafliKronolojiEkle` künye penceresi dışındaki
madde × künye çiftini **indirmez** (konsola "PENCERESİ DIŞINDA" yazar). Madde `kacar [1789-03-21, 1925-01-01]` ile
`iran [1925-12-12, …]` arasındaki 345 günlük boşluğa düşüyor ⇒ hiçbir sekmede açılmıyor.
**Çare veri değil künye:** `kacar.t` 1925-01-01 (yıl-temsilî) → **1925-10-31** (Iranica). Öneri `-KUNYE.json`da (`genislet`).
Uygulanınca AÇILAMAZ 390'a döner. Tarih uydurmamak için maddeyi taşımadım, uygun olmayan bir taraf da eklemedim.
⚠️ Aynı mekanizma birinci dilimdeki 1932-03-01 Mançukuo maddesini `mancukuo` sekmesinden düşürüyor (öteki iki tarafta açılıyor) — `genislet` önerisi aynı dosyada.

## ④ Bulamadıklarım
- **Macar birliklerinin Kuzey Erdel'e girişi:** arama 5-13 Eylül 1940 aralığını (Diosig 4 Eylül çatışması, Kolozsvár 11 ya da 15 Eylül) yalnız Vikipedi, popüler tarih dergisi (Rubicon), anı derlemesi (JewishGen Yizkor) ve film arşivi künyesinden veriyor — **kırmızı çizgi; akademik/kurumsal kaynak bulunamadı.** TDV erdel yalnız 30 Ağustos'u veriyor. Yazılmadı; II. Viyana maddesi tek günüyle kalıyor.
- Mısır'da İngiliz birliklerinin kanal bölgesine çekilme günü (isg: kapanışı için) bulunamadı.
- Karpat-Ukrayna'ya Kızıl Ordu'nun giriş günü kaynaklanmadı (metinde "1944 sonbaharı", dosyanın 1944-05-08 maddesi bağlamı).

## ⑤ İstediklerim / öneriler
1. **Künye önerileri** → `denetim/KRONO-SONRA1923-EKSIK-1008-KUNYE.json` (ONCE1281-KAMPANYA-ORTAK §1 şeması, `islem` alanlı):
   - `yeni` **ingiliz-birmanyasi** · f 1937-04-01 (EBSCO; TDV yıl) · t **1948-01-04** (TDV myanmar: *"4 Ocak 1948’de Burma Birliği adıyla bağımsızlığına kavuştu"*) · `harita:null` + **`boya_gerekli:true`** (anahtar uydurulmadı) · seçenek (b) `harita:"ingiltere"` borçsuz. 2 iskelet madde. Künye inince 1937-04-01 maddesine taraf eklenmeli.
   - `genislet` **kacar.t** 1925-01-01 → 1925-10-31 (+ künye-içi maddenin t'si) — AÇILAMAZ'ı kapatır.
   - `genislet` **mancukuo.f** 1932-03-09 → 1932-03-01.
2. **Mısır 28 Şubat 1922 maddesi** kuşak dışı olduğu için yazılmadı; uygun dosya (ör. `kronoloji_sinir_afrika` ya da 1. Dünya ardılı) sahibine hazır içerik:
   t `1922-02-28` · *"İngiltere Mısır'ı tek taraflı olarak bağımsız devlet ilân etti"* · taraflar `misir-sultanligi`, `ingiltere` ·
   kaynak TDV misir: *"İngiltere ve Mısır arasında yapılan müzakerelerde bir sonuca ulaşılamamasına rağmen İngiltere 28 Şubat 1922’de tek taraflı olarak Mısır’ı bağımsız devlet ilân etti."*
3. Yeni künye gerektiren ama önermediklerim (yalnız bildirim): Aden Kolonisi 1937-1963 (noktası bugün `ingiltere`, harita deliği yok) · Ukrayna SSC (Karpat-Ukrayna noktaları için `sovyet-rusya` yeterli).

## Dosyalar
- `denetim/KRONO-SONRA1923-EKSIK-1008-B.md` (bu rapor)
- `denetim/KRONO-SONRA1923-EKSIK-1008-B.diff` → `data/kronoloji_cok_1923_1945.js` (+5 madde)
- `denetim/KRONO-SONRA1923-EKSIK-1008-KUNYE.json` (3 künye önerisi — `devletler.js` koordinatörde)
