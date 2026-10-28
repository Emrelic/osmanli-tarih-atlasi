# UMIT-W5-DALGA2-1006 — Polonya düzeltmesi: bulguların diff'e çevrilmesi

Görev: UMIT İRTİBAT (dalga 2) · İşçi: UMIT-W5-POLONYA-1006 · worktree `C:\atlas-w5`
(origin/main `fc380975`) · çıktı `denetim/POLONYA-DUZELT-1006.diff` (UYGULANMADI, commit yok).
Dayanak: `denetim/POLONYA-GUN-1006.md` (alıntılar AYNEN orada).

## 0. ÖNGÖRÜ (denetle.py ölçümünden ÖNCE mühürlendi)

⚠️ **Dürüstlük notu:** Chełm komşu ölçümünü (§2) bu öngörüyü yazmadan ÖNCE yaptım —
görevin "Chełm'de komşular ne diyecek" öngörüsü bu yüzden mühürlü DEĞİL, ölçülmüş.
Aşağıdaki öngörü yalnız `denetle.py` sayıları için geçerlidir.

**Kapsam (yazmadan önce bilinen):** ① Radom kırılması + maddesi 07-01 → 07-20 ·
② Łódź madde `ic_not_gun` · ③ Lublin YENİ kırılma 1915-07-30 `kongre-polonyasi → avusturya`
+ YENİ madde; Lublin'in 1917 kuyruğu (`rusya-gecici-hukumet`, `sovyet-rusya`) düşer ·
④ Zamość: ay düzeyi zaten yazılı — `gun`/`ic_not_gun` metni üç adayı "seçmiyorum" diye
netleşir, `t` değişmez · ⑤ Chełm: işgalci DEĞİŞMEZ; gün aynı (08-01), hassasiyet ay → gün,
kaynak Rocznik Chełmski 22, çelişki `ic_not_gun`'a.

| Kapı | Öngörü | Mekanizma |
|---|---|---|
| D2 Osmanlı | değişmez | Polonya kırılmaları yabancı |
| 2s YABANCI kırılma | **−1** | Lublin: +1 (1915-07-30) −2 (1917-03-15, 1917-11-07) |
| 2s AÇIK | **değişmez ya da −1/−2** | Radom ve Lublin yeni kırılmaları aynı gün maddeli ⇒ açık eklemez; Lublin 1917 kırılmaları açıksa düşer |
| 2i işgal | değişmez | `isg:` dokunulmadı |
| mükerrer | **±1** | −1: "Zamość 07-01 ↔ Radom 07-01" çifti dağılır · +1 riski: Lublin 07-30 ↔ Chełm 08-01 (iki gün, ikisi Avusturya işgali) |
| D1 sahipsizlik | değişmez | dönem kısalmıyor, el değiştiriyor |

**Radom ±30 / D213 notu (öngörü):** Bugün kırılma da madde de sahte ay başı günündeydi
(07-01) ⇒ ±30 ölçütü ikisini eşleştirdi, sahteliği göremedi. 07-20'ye birlikte kayınca
ölçüt yine eşleştirir — sayı değişmez, ama artık eşleşen gün GERÇEK. Ölçüt bu farkı
hiçbir zaman göremez; görünen tek iz `gun` alanı.

## 1. NE DEĞİŞTİ (worktree'de; diff `denetim/POLONYA-DUZELT-1006.diff`, 9 parça, 40 KB, LF, 0 CR)

| Dosya | Değişiklik |
|---|---|
| `denetim/ARAC-KASA-POLONYA-1005-URET.py` | Kronoloji dosyası ÜRETİLMİŞ ("elle düzenleme"), bu yüzden düzeltme ÜRETİCİYE yapıldı ve yeniden koşturuldu. 4 yeni kaynak sabiti (`K_SLO` `K_SUR` `K_GOL` `K_DAS`) · Radom maddesi · Lublin YENİ madde · Chełm maddesi · Zamość metni · Łódź `ic_not_gun` · başlık satırı. ⚠️ Bu dosya KASA'nın `denetim/` dosyası. |
| `data/kronoloji_sinir_polonya_1915.js` | Üreticinin çıktısı: 15 → **16** madde. |
| `data/yerlesimler.js` | Radom `s:` kırılması 1915-07-01 → **1915-07-20** (iki uç, kaynak alanı) · Łódź iki `kaynak:` alanına Daszyńska + 5/6 Aralık notu (gün DEĞİŞMEDİ). |
| `data/yerlesimler_p0037.js` | Lublin: `kongre-polonyasi` 1815-06-09 → **1915-07-30**, ardından `avusturya` → 1918-11-11; 1917 kuyruğu (`rusya-gecici-hukumet`, `sovyet-rusya`) DÜŞTÜ (KASA §3: "8 şehrin hiçbirinde kalmamalı") · Chełm iki `kaynak:` alanı (gün ve kimlik AYNI) · Zamość üç `kaynak:` alanına "ayın 1'i, gün DEĞİL". |

Hüküm hüküm:
- **RADOM** ✓ kırılma ve madde BİRLİKTE 07-20'ye kaydı. Başlık "Avusturya birliklerince" yerine
  kaynağın dediği "Avusturya-Alman birlikleri"; `devlet:"avusturya"` korundu (sonraki idare).
- **ŁÓDŹ** ✓ `ic_not_gun`: Daszyńska'nın cümlesi AYNEN + "IPN'in 5'i tahliyenin başladığı akşam".
- **LUBLIN** ✓ `ic_not_gun` "NE TARİHLENİYOR (D211 ⑧)": giriş tarihlenir, Rus tahliyesi değil;
  kaynak alanı da aynı ayrımı yazar. Başlık "Lejyon öncüsü Lublin'e girdi" — tahliye iddia edilmedi.
- **ZAMOŚĆ** ✓ `t:"1915-09-01"` aynı; metinden "4 Eylül emriyle kuruldu" cümlesi ÇIKARILDI
  (gövdede bir adayı öne çıkarıyordu). Üç işaret `ic_not_gun`'da "SEÇİLMEDİ" diye sayıldı.
- **CHEŁM** 🔴 §2'ye bak — işgalci DEĞİŞMEDİ.

## 2. CHEŁM — D206 iki uç ölçümü (komşular)
`girdi.yukle()` ile Chełm'in 130 km'si, sekiz günde (öncesi = değişiklikten önceki main):

```
km   ad                  15-07-15 15-07-25 15-08-02 15-08-15 15-09-15 15-10-15 16-03-01 16-07-01
   0 Chełm (Kholm)       kongre-p kongre-p avustury avustury avustury avustury avustury avustury
  50 Zamość              almanya  almanya  almanya  almanya  avustury avustury avustury avustury
  64 Lublin              kongre-p kongre-p kongre-p kongre-p kongre-p kongre-p kongre-p kongre-p
  68 Volodymyr-Volynskyi rusya    rusya    rusya    rusya    rusya    rusya    rusya    rusya
  87 Kovel               rusya    rusya    rusya    rusya    rusya    rusya    rusya    rusya
 107 Brest-Litovsk       rusya    rusya    rusya    rusya    rusya    rusya    rusya    rusya
```
- Krasnystaw, Hrubieszów, Włodawa atlasta YOK — güney/batı komşusu yalnız Zamość ve Lublin.
- **Ağustos 1915'te tek ölçülebilir komşu (Zamość, 50 km) `almanya` diyor**; dönem tebliği
  de "niemieckie pułki". Ama Rocznik Chełmski 22 "wojska austriackie" diyor ve Lewandowski
  2013, chełmski powiatının MGGP'ye ancak Haziran 1916'da bağlandığını yazıyor —
  Ağustos 1915 → Haziran 1916 arası idari sahibini veren kaynak YOK.
- ⇒ İki uç ÇELİŞKİLİ, belirsiz. Hükmünce **"ölçülemedi", değiştirilmedi.** `almanya`ya
  çevirmek, tek komşuya (kendisi de bir kaynağa değil Stankiewicz'in Temmuz cümlesine
  dayanan) ve bir gazete tebliğine dayanıp akademik cümleyi ezmek olurdu.
- Değişen yalnız: gün hassasiyeti ay → gün (gün aynı 08-01) ve kaynak; çelişki
  `ic_not_gun`a ve iki `kaynak:` alanına AÇIKÇA yazıldı.
- ⚠️ Yan bulgu (ölçülmedi, bu işin dışı): Brest-Litovsk 1916'da hâlâ `rusya` — kale Ağustos
  1915'te düştü. Volodymyr-Volynskyi ve Kovel de öyle. Kongre Polonyası dışı, ama aynı cephe.

## 3. SINAV — `py arac/denetle.py --ayrinti`, ÖNCE / SONRA (worktree, aynı HEAD)

| Kapı | ÖNCE | SONRA | Öngörü | |
|---|---|---|---|---|
| D1 sahipsizlik | 4299 / 309 | 4299 / 309 | değişmez | ✓ |
| D2 Osmanlı | 623 / 0 açık | 623 / 0 açık | değişmez | ✓ |
| 2s YABANCI kırılma | 1720 | **1722** | −1 | ✗ |
| 2s AÇIK | 187 (tavan 189) | **187** | değişmez/−1/−2 | ✓ |
| 2sk YER kapanışı | 1571 | **1572** | — | (+1: Lublin maddesi yerle kapandı) |
| 2i işgal | 171 / 1 | 171 / 1 | değişmez | ✓ |
| 2t kırılmasız | 13 | 13 | — | ✓ |
| mükerrer (sayılan) | 112 | **112** | ±1 | ✓ (0) |
| mükerrer ZAYIF (sayılmaz) | 109 | **110** | — | +1: Lublin 07-30 ↔ Chełm 08-01 (`[kişi:girdi]`) |
| D7 sorgusuz enklav | 734 | **732** | ÖNGÖRMEDİM | −2 |
| kronoloji maddesi | 2187 | 2188 | +1 | ✓ |
| Hüküm | çıkış 2 | çıkış 2 | — | ikisinde de yalnız D8 ölçülemedi (`devletler_harita.js` yok — taze ağaç) |

**Üyelik:**
- **2s ✗ öngörü yanlıştı, mekanizma yanlıştı:** `degismez2` kırılmayı **GÜNE** göre sayar
  (`kir.setdefault(d, …)`), yerleşime göre değil. Radom 07-01'den ayrılınca 07-01 günü
  Zamość yüzünden YAŞADI, 07-20 YENİ gün oldu (+1). Lublin 07-30 yeni gün (+1); 1917-03-15
  ve 1917-11-07 başka yerleşimlerde yaşadığı için DÜŞMEDİ (0). Toplam +2. İki yeni günün
  ikisi de aynı gün maddeli ⇒ AÇIK 187'de kaldı.
- **mükerrer:** KASA'nın "Zamość 07-01 ↔ Radom 07-01" çifti ÖNCE de sayılan listede YOKTU
  (main'de zaten `BILINEN_AYRI`ya alınmış) ⇒ dağılması sayıyı oynatmadı. Yeni Lublin↔Chełm
  çifti yalnız ZAYIF listede (iki ayrı gün, ortak kelime "girdi") — ihlal değil.
- **D7 −2:** "1915-07-01 Radom → HABSBURG 171 km ada" ve "1915-10-01 Kielce → HABSBURG
  185 km ada: Kielce+Krakov+Radom" satırları düştü; `gecici-cephe` muafiyeti 77 → 79.
  Sebep ÖLÇÜLMEDİ; muhtemel okuma: Lublin de 1915-07-30'dan Avusturya olunca Radom/Kielce
  Habsburg parçası artık tek başına bir ada değil.

**Radom ±30 / D213 (ölçüldü):** öngörü tuttu — 2s AÇIK değişmedi; kırılma ve madde önce
07-01'de, sonra 07-20'de eşleşti. Ölçüt iki durumu AYIRT EDEMEDİ. Görünen tek fark `gun`
alanı ("Temmuz 1915 (ay düzeyi…)" → "20 Temmuz 1915"). D213'ün görünmeyen yüzü sürüyor:
ay düzeyindeki Zamość 09-01 ve (artık geçmiş) Radom 07-01 ölçütte gerçek günden ayırt edilmez.

## 4. `--check` iki yönde
Worktree'de değişiklikler stash'lendi, temiz `fc380975` üzerinde:
```
temiz main:  ileri OK · geri RED (beklenen)
uygulandı:   geri OK  · ileri RED (beklenen)
uygulanan diff'in hash'i = düzenlenen ağacın diff'inin hash'i (özdeş)
```
`origin/main` bu arada `e3fe366a`ya ilerledi; `git diff --stat fc380975 e3fe366a` dört
dosyada BOŞ ⇒ diff güncel main'e de uygulanır.

## 5. AÇIK KALANLAR / İSTEKLER
1. **Paket:** diff uygulanınca `py arac/paketle.py sina` → "PAKET BAYAT — 3 kaynak"
   (`paket_09`, `paket_13`, `paket_23`). Ölçüldü (worktree). Çare `py arac/paketle.py yenile`
   — üretilmiş dosya, diff'e KONMADI; koordinatör uygular.
2. **Üretici dosyası** (`denetim/ARAC-KASA-POLONYA-1005-URET.py`) KASA'nın. Elle `.js`
   düzeltmesi bir sonraki üretimde silinirdi; bu yüzden düzeltme oraya yapıldı. Sahibine bildirilmeli.
3. **Chełm işgalcisi:** ölçülemedi. Çözmek için Ağustos 1915 – Haziran 1916 idari
   sahibini veren kaynak gerekir (Lewandowski, *Królestwo Polskie pod okupacją austriacką
   1914–1918*, Warszawa 1980 — Rocznik Chełmski'nin işaret ettiği temel eser; çevrimiçi bulunamadı).
4. **Lublin bitiş günü:** `avusturya` 1918-11-11'de bitiyor (komşu desen). Lewandowski
   2013 MGGP için "do 3 listopada 1918 r." diyor — bu işin kapsamı dışında, değiştirilmedi.
5. Yan bulgu: Brest-Litovsk / Kovel / Volodymyr-Volynskyi 1915-16'da `rusya` (§2).
