# KRONO-AFRIKA-0929 — YERLEŞİM ÖNERİLERİ (petek koşusu bekler · `data/yerlesimler*.js`e DOKUNULMADI)

Biçim: dosya · yerleşim · mevcut `s:` · önerilen · kaynak · gerekçe · **sınıf** (UYGULANABİLİR / KOŞULLU / ÖLÇÜLEMEDİ).
Genel kural: bu bölgede yerleşim `kur:` yılı, çoğu kez siyasî egemenliğin başlangıcı olarak `s:` başına yazılmış;
kaynak `bulunamadı` (TDV bu taneciği kapsamıyor). Aşağıdakiler kaynağı olan/olmayan farkıyla ayrılmıştır.

## A. UYGULANABİLİR (kaynak var)

### A1. Hamdullahi — kuruluş 1815 (koşul: künye `massina` `f`'i önce inmeli)
- **Dosya:** `data/yerlesimler_afrika2.js:321` · **Yerleşim:** Hamdullahi
- **Mevcut:** `kur:"1820-01-01"` · `s:[{f:"1820-01-01",t:"1862-05-16",d:"massina"}, …]`
- **Önerilen:** `kur:"1815-01-01"` · `s:[{f:"1815-01-01",t:"1862-05-16",d:"massina",kaynak:"TDV fulaniler: '1815'te Bani nehri kıyısında Hamdullahi (Hamdallay) şehrini kurarak burasını başşehir yaptı' — YIL"}, …]`
- **Kaynak:** TDV `fulaniler` (gövde okundu). **Koşul:** `massina` künyesi `f:"1818-01-01"` → `"1810-01-01"` (TDV: Ahmedü Lobbo idaresi 1810-1844) yapılmadan 1815 künye penceresini AŞAR (4c/4d). Bkz. DUZELTME §3.
- **Gerekçe:** 1820 kırılması (defter: `1820-01-01 —→massina`) bu düzeltmeyle 1815'e iner ve künye maddesi (1815'e taşınırsa) onu kapatır.

## B. KOŞULLU (kaynaklı ama karar gerektirir)

### B1. Oranj / Transvaal — `kur:1830` Büyük Göç yılıdır, cumhuriyetlerin yılı değil
- **Dosya:** `data/yerlesimler_e9353f.js:667` (Transvaal) · `:675` (Oranj)
- **Mevcut:** `kur:"1830-01-01"` · `s:[{f:"1830-01-01",t:"1902-01-01",d:"transvaal"|"oranj", kaynak:"guney-afrika-cumhuriyeti"}, …]`
- **Künyeler:** `transvaal f:1852-01-01` · `oranj f:1854-04-07` (SAHO: Bloemfontein Konvansiyonu **23 Şubat 1854**, Sand River **17 Ocak 1852**).
- **Önerilen (A):** `f` → künye `f`; 1830-1852/1854 arası `bos:"veri-yok"` (sahipsiz artışı: +2 yerleşim → beklenen 324→326) · **(B):** olduğu gibi bırak, kırılma BEYANLI kalsın.
- **Öneri:** (B). Gerekçe: yerleşimlerin kendi notu (`neden:`) 1830'un bilinçli seçim olduğunu söylüyor, ve bölgenin 1830-1852 arasında başka egemeni için künye yok — (A) Değişmez 1'i bozar.
- **Sınıf:** koordinatör kararı.

## C. ÖLÇÜLEMEDİ (kaynak `bulunamadı`)

| Yerleşim | Dosya:satır | Mevcut `s:` | Neden ölçülemedi |
|---|---|---|---|
| İlorin | `yerlesimler_afrika2.js:637` | `f:1817 → sokoto` | TDV `fulaniler`: Bello (1817-1837) İlorin+Nupe'yi hâkimiyeti altına aldı — **yıl yok**; `1817` Bello'nun tahta çıkışı, olay yılı DEĞİL. Künye önerisi zaten listede (`ilorin-emirligi`). |
| Bida (Nupe) | `:595` | `f:1859 → sokoto` | TDV `fulaniler` yalnız «Nupe … Bello döneminde» der; 1859 kaynak `bulunamadı`. |
| Kukava | `yerlesimler_ok107.js:249` | `kur:1814` | TDV `bornu` Kukava'yı «Kânimî'nin kurduğu fiilî başşehir» olarak anar, **yıl vermez**; 1814 = Dûneme'nin yeniden tahta getirilişi (TDV), şehrin kuruluşu değil. |
| Antsirabe | `:1943` | `f:1872 → merina` | Kuruluş yılı için TDV/erişilebilir akademik kaynak `bulunamadı`; siyasî değişim değil, yerleşim doğumu (kırılma artefakt). |
| Büyük Zimbabve | `yerlesimler_e9353f.js:617` | `1450→1700 mutapa`, sonrası sahipsiz (`bos:veri-yok`) | KASITLI beyanlı boşluk. TDV `zimbabve`: Mutapa «XVII. yüzyılın sonlarında … Rozvi hânedanının yükselişiyle ortadan kalktı» (yıl yok). `rozvi` künyesi artık var (`f:1684`), ama Büyük Zimbabve'nin Rozvi'ye geçtiğine dair **yer-özel** kaynak `bulunamadı`. |
| Kilva Kivince (1800) · Ujiji (1830) · Kasongo+Nyangwe (1860) · Karonga (1880) | `yerlesimler_afrika2.js:1435 / 1313 / 1296,1279 / 1506` | `d:"umman-zengibar"` `kur:`'dan itibaren | `kur:` yılı = Zengibar egemenliği başlangıcı gibi yazılmış. TDV `malavi`/`tanzanya`: Zengibar'ın **kıyı** hâkimiyeti (Mogadişu–Kabo Delgado) ve **tüccar ağı** var; iç bölge üsleri için toprak egemenliği kaynağı `bulunamadı`. Sınıf: **artefakt olasılığı YÜKSEK ama ölçülemedi.** |
| Mankhamba (Maravi) | `:1706` | `1800 → umman-zengibar` | Künye `maravi t:1800` «Yao ve Ngoni baskısıyla dağıldı» diyor; Mankhamba'nın Zengibar'a **bağlanması** dayanaksız (Yao'nun bağlanışı TDV'de tarihsiz). |

## D. Nkhotakota (Cumbe) — kaynaklı, KORUNMALI (öneri: **dokunma**)
`yerlesimler_afrika2.js:1638` `f:1840 → umman-zengibar`. TDV `malavi`: Sâlim b. Abdullah **1840**'ta Nkhotakota'da 'jumbe' ilân etti; 1895'te İngilizler Mwingi Kheiri'yi tahttan indirdi (mevcut `t:1895` ile UYUMLU). Yıl doğrulandı; yalnız egemenliğin niteliği (Zengibarlı tüccar idaresi ↔ sultanlığın toprağı) tartışmalı → `d:` bir `nkhotakota-jumbelik` künyesine (KUNYE.md) taşınırsa daha doğru olur; koşu gerektirmez, künye+`d:` değişir.
