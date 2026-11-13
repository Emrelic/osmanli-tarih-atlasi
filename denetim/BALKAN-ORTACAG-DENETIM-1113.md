# BALKAN ORTAÇAĞ DENETİMİ — kronoloji × harita × kaynak (1281 → 1463, Sırp / Bulgar / Bosna / Arnavut)

- **Tarih:** 13 Kasım 2026 · **Makine:** UMIT · **Ağaç:** worktree `umit-1113-bizans`ın devamı (taban `origin/main` f4b45bb0a); rapor ayrı dal
- **Yöntem:** hafif kip. `denetle.py`, `coz-c`, `paketle` koşturulmadı. Künye kronolojileri `data/devletler.js`, yerleşim
  zincirleri `data/yerlesimler*.js` üzerinden node betiğiyle okundu; kaynak doğrulaması WebSearch ile (TDV ilk).
  **Veriye dokunulmadı.**
- **Kapsam sınırı (dürüst):** tam tarama değil, **örneklemeli doğrulama**. Künyeler: `sirbistan-nemanjic`, `sirp-despotlugu`,
  `bulgar-carligi`, `bosna-kralligi`, `arnavutluk-iskenderbey`; zincirler: Tırnova, Vidin, Bosna. Okunmayan künyeler:
  `dobruca-despotlugu`, `topia`, `dukagin`, `hersek`, `zeta`, `dejanovic-prensligi`, `vidin-carligi` (künyesi), `dubrovnik`,
  `epir-despotlugu`, `selanik-*`, `atina/katalan/naksa/ahaya` — bunlar **ölçülmedi**; Mora, Selanik, Epir BALKAN-HALEF ve
  BIZANS raporlarıyla çakışır. Eflak/Boğdan ayrı rapor.

## 0. Envanter (ölçüldü)

| Ne | Sayı |
|---|---|
| `bolge:"balkanlar"` künyesi (tüm devirler) | 126 (devletler.js, tek satırlık künye başlığında bolge:"balkanlar") |
| Ortaçağ (1281–1500) künyesi | 20 (yukarıdaki listenin 5'i okundu, 15'i ölçülmedi) |
| Okunan künyelerin kronolojisi | Nemanjić 8, Sırp Despotluğu 5+, Bosna 6, İskender Bey 5+ madde |

**Ana hüküm:** Okunan kırılmaların günleri kaynakla tutuyor (Tırnova, Kosova, Çirmen, Duşan, Smederevo); tek gerçek sorun
**Bosna'nın yıkılışının iki farklı günle yazılmış olması** ve Vidin'in sona ermesinin TDV içinde çelişkili olması.

## ① KRONOLOJİ

### 1a. Çelişki (2 bulgu, ikisi de Emre kararı)

| # | Kimlik | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| B1 | kronoloji_balkan.js:773 · olaylar_ek.js:55 · devletler.js:1035 (`bosna-kralligi` t) | Bosna Krallığı'nın yıkılışı: künye `t` ve madde **1463-05-01** (kronoloji_balkan), olaylar_ek'te **1463-06-01** ("yaz 1463"); iki madde aynı olayı 31 gün farkla yazıyor | TDV «Bosna-Hersek» (Djurdjev) arama özetinde 1463 günü okunamadı (**ölçülemedi**); Hırvat akademik kaynak (ffstopenpress.ffst.hr) ve ikincil: Bobovac 19–20 Mayıs 1463, Osmanlı fethi 5 Haziran 1463, Tomašević'in idamı Mayıs sonu/Haziran | ÇELİŞKİ | Günü TDV «Bosna-Hersek» + «Mehmed II» tam metninden oku; iki maddeyi ve künye `t`sini aynı güne getir. Gün bulunamazsa `1463-05-01` yıl/ay beyanıyla ikisini eşitle (ay hassasiyeti, `ic_not`). |
| B2 | devletler.js (`vidin-carligi`, harita Vidin `1396-10-01`) | Vidin Çarlığı sonu `1396-10-01` | TDV «Bayezid I»: Bayezid 1393-94 kışında Balkan beylerini Serez'de topladıktan sonra Straşimir'den Vidin'i aldı; TDV «Niğbolu Savaşı»: Haçlılar Vidin'e Osmanlı vasalı Straşimir'in iş birliğiyle girdi (1396). İki TDV maddesi birbirini tutmuyor | ÇELİŞKİ (TDV içinde) | Haritadaki 1396 son kalsın; `ic_not`a iki TDV maddesinin çelişkisi beyan edilsin. Kesin gün için Vidin/Straşimir TDV maddesi (arama çıkmadı) ya da Bulgar akademik kaynak (⑦ basamağı) gerekir. |

### 1b. Doğrulananlar (değişiklik gerekmez)
- **Tırnova `1393-06-17`:** TDV «Tırnova» ve «Bayezid I» «17 Haziran 1393»; üç madde (olaylar_ek.js:39, kronoloji_balkan.js:409,
  kronoloji_bizans.js:377) ve harita `d:"bulgar-carligi"` t=`1393-06-17` aynı gün ✓.
- **I. Kosova `1389-06-15`:** TDV «Kosova Savaşları» (Emecen); 15 Haziran Jülyen günü (Gregoryen 28 Haziran). 1582 öncesi kural
  gereği kaynaktaki gün yazılmış ✓ (Ağustos 1389 önerisini hiçbir arama sonucu desteklemedi).
- **Çirmen `1371-09-26`, Duşan taç `1346-04-16`, Duşan ölümü `1355-12-20`, İskender Bey `1443-11-28`, Napoli vasallığı `1451-03-26`:**
  literatürle tutarlı; bu oturumda TDV ile tek tek teyit edilmedi (**ölçülemedi**, yalnız plausibility).
- **Smederevo `1439-08-27` ve `1459-06-20`, Segedin `1444-08-15`:** literatürle tutarlı; TDV günü bu oturumda okunmadı (**ölçülemedi**).

## ② HARİTA UYUMU
- 2a. Sessiz değişim: `denetle` koşturulmadı → **ölçülemedi.** Elle bakılan Tırnova, Vidin, Bosna kırılmalarında ±30 günde madde var;
  Vidin'in `1360-01-01` / `1365-01-01` / `1369-01-01` dönemleri `-01-01` yıl kırılmasıdır, beyan durumu okunmadı.
- 2b. Sınır/hayalet: **bulunamadı** (örneklem içinde).

## ③ ÖLÇÜLEMEDİ
- 15 künyenin kronolojisi ve harita zincirleri (liste yukarıda).
- TDV «Bosna-Hersek», «Kantakuzenos»-benzeri uzun maddelerin tam metni: arama yalnız özet verdi.
- Değişmez 2/3/8 gerçek sonucu (`denetle`).

## ④ EMRE KARARI BEKLEYENLER
1. B1: Bosna yıkılış günü (künye `t`, iki madde birlikte).
2. B2: Vidin `ic_not` çelişki beyanı.
3. Kapsam: 15 okunmamış Ortaçağ Balkan künyesi için ayrı tur ister misin? (Dobruca, Topia, Dukagin, Hersek, Zeta, Dejanović, Dubrovnik, Epir, Selanik vb.)
