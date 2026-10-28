# LAB-D7-ETKI-1010 — "731 neyin sayısı?" (yalnız ölçüm)

Tarih 10 Ekim 2026 · makine/lab · **ÖLÇÜMDÜR; hiçbir tavan/taban önerilmiyor.** Emre'nin 9 Ekim "enklav dondurma kalsın" hükmü geçerli; `BEKLENEN_ENKLAV_SORGU = 731` dokunulmadı. Bu not yalnız o sayının NE saydığını açıklar.

## Yöntem

- Ölçüm noktaları: **origin/main `6df8c2cd84aec31af69c1b8d5da3239660b4216d`** (4.300 yerleşim) ve **taban-dondurma commit'i `4b5557965`** (25 Eylül 2026 02:50, 4.294 yerleşim). İkisi de geçici detached worktree'de; `denetle.py` DEĞİŞTİRİLMEDİ.
- Liste: `arac/denetle.py` içe aktarılıp `degismez7(Y, isg_kova={})` çağrıldı (4b5557965'te `isg_kova` parametresi henüz yok → `degismez7(Y)`; o tarihte `isg:` kovası da yoktu). Dönen kayıtlar scratch betiğinde (`scratchpad\d7etki\olc.py`) sonradan işlendi.
- Ölçüm sonunda iki worktree'de `git status` temizdi.

## D7'nin "ada" tanımı (gruplama kuralı — D7'nin kendisinden)

`degismez7.sor()` her **dönem başlangıcı** `(yerleşim i, gün f, sahip-ailesi s)` için `bilesen(i, f, s, tavan=6)` çağırır: `_d7_komsuluk` grafında (≤150 km kenar) o gün **aynı sahipteki** komşulara BFS. BFS 6 düğüme ulaşırsa durur ve kayıt ADA değildir; ≤5'te biterse BFS bileşeni **tümüyle** gezmiş olur. Dolayısıyla ada kümesi, bileşenin hangi üyesinden başlanırsa başlansın AYNIDIR ve kayıttaki `ada` alanı tam bileşendir (kontrol edildi: her kayıtta yerleşim `ada` içinde, |ada| ≤ 5).

⇒ **Ada anahtarı = `(gün f, sahip s, ada kümesi)`.** Aynı gün aynı sahibin iki bileşeni ya özdeştir ya ayrıktır; bu anahtar D7'nin kendi bağlantı kuralının birebir karşılığıdır. Bir bileşenin her üyesi o gün dönem başlatıyorsa her biri ayrı kayıt üretir — çoklu sayım buradan gelir.

Ada başına tek kayıt alınırken alt-sınıf (A/B/C) için adanın **ana gövdeye en yakın üyesinin** kovası kullanıldı (`ana_km` üyeye göre değişir; 22 adada üyeler farklı kovaya düşüyor — toplam etkilenmez, yalnız kırılım).

Not (daha gevşek, D7'nin kendisinde OLMAYAN tanım): tarih yok sayılıp `(sahip, ada kümesi)` alınırsa bugün 487 ada (boşluk hariç 476) — aynı bileşen farklı günlerde yeniden doğduğunda (örn. Budin/Peşte 1527-29 iki pencere; Lahor kümesi 1526/1540/1555) tek sayılır.

## Sonuç — origin/main `6df8c2cd8` (739 değişmedi)

| Ölçü | Toplam | A-koridor | B-bilinmiyor | C-hakiki |
|---|---:|---:|---:|---:|
| bugünkü ölçüm (D7 olduğu gibi) | **739** | 542 | 185 | 12 |
| ada başına tek kayıt | **506** | 372 | 123 | 11 |
| yalnız `__BOSLUK__` muaf (tekilleştirmesiz) | **725** | 538 | 182 | 5 |
| ikisi birden (ada tekil + `__BOSLUK__` muaf) | **495** | 369 | 121 | 5 |

`__BOSLUK__` payı: 14 kayıt (A 4 · B 3 · C 7) = 11 ada. C-hakiki'nin 12 kaydının 7'si `__BOSLUK__`; boşluk muaf tutulunca C-hakiki 5'e iner.
Çoklu sayım dağılımı (kayıt/ada): 1 kayıtlı 374 ada · 2 → 65 · 3 → 38 · 4 → 24 · 5 → 5.
Muafiyet sayaçları: beyan 77 · coğrafi-tecrit 4691 · ada-fethi 9 · küçük-devlet 311 · geçici-cephe 83.

## Dondurma commit'inde — `4b5557965` ("731 neyin sayısı")

| Ölçü | Toplam | A-koridor | B-bilinmiyor | C-hakiki |
|---|---:|---:|---:|---:|
| D7 olduğu gibi | **731** (taban birebir) | 537 | 184 | 10 |
| ada başına tek kayıt | **502** | 372 | 121 | 9 |
| yalnız `__BOSLUK__` muaf | **720** | 533 | 181 | 6 |
| ikisi birden | **494** | 369 | 119 | 6 |

`__BOSLUK__` payı o gün: 11 kayıt (A 4 · B 3 · C 4) = 8 ada. Tarihsiz (sahip, ada): 484 (boşluk hariç 476).

**Yani 731 = 494 ayrı devlet-adası + 226 aynı adanın ek üye kaydı + 11 `__BOSLUK__` beyan-adası kaydı.** Dondurmadan bugüne +8 kayıt (731→739), ama "ikisi birden" ölçüsünde yalnız +1 (494→495): artışın 3'ü `__BOSLUK__` kaydı, 4'ü mevcut/yeni adaların ek üye kaydı, 1'i ise net yeni devlet-adası. (Ölçümdür; kural değişikliği önerilmiyor.)

## En çok üye kaydı olan 15 ada (origin/main)

| # | Kayıt | Gün | Sahip | Ada | Kova |
|---|---:|---|---|---|---|
| 1 | 5 | 1371-09-26 | OSMANLI | Doyran + Köprülü (Veles) + Köstendil + Ustrumca (Strumica) + İştip (Štip) | A 4 · B 1 |
| 2 | 5 | 1640-12-01 | portekiz | Aveiro + Braga + Bragança + Coimbra + Porto | A 3 · B 2 |
| 3 | 5 | 1884-07-18 | ingiltere | Ceel Afveyn + Erigavo + Hîs + Lâs Hore + Mayd | A 5 |
| 4 | 5 | 1304-01-01 | delhi-sultanligi | Baroda (Vadodara) + Broaç (Bharuch) + Kanbâyet (Khambhat) + Sûrat + Çampâner | A 5 |
| 5 | 5 | 1830-07-05 | fransa-cumhuriyet | Blida + Cezayir + Medea (Titteri) + Miliana + Şerşel (Cherchell) | B 5 |
| 6 | 4 | 1337-09-09 | serbedariler | Bistâm + Dihistan ovası (Meşhed-i Misriyân) + Dâmgan + Esterâbâd (Gürgân) + Simnân | A 3 · B 1 |
| 7 | 4 | 1821-09-27 | meksika | Campeche + Chichén Itzá + Maní + Mérida + Sotuta | A 1 · B 3 |
| 8 | 4 | 1515-04-01 | portekiz | Hürmüz Adası + Kişm (Qeshm) + Ras el-Hayme (Cülfâr) + Şârika | A 4 |
| 9 | 4 | 1503-04-02 | moskova | Hluhiv + Novgorod-Seversk + Putivl + Çernigov | A 4 |
| 10 | 4 | 1547-01-16 | rusya | Hluhiv + Novgorod-Seversk + Putivl + Çernigov | A 4 |
| 11 | 4 | 1526-04-21 | babur-imparatorlugu | Câlandhar + Lahor + Ludhiyana + Sirhind + Siyâlkot | A 4 |
| 12 | 4 | 1540-05-17 | sur-hanedani | Câlandhar + Lahor + Ludhiyana + Sirhind + Siyâlkot | A 4 |
| 13 | 4 | 1555-07-23 | babur-imparatorlugu | Câlandhar + Lahor + Ludhiyana + Sirhind + Siyâlkot | A 4 |
| 14 | 4 | 1795-01-01 | siyam-chakri | Angkor (Siem Reap) + Battambang + Chanthaburi + Pursat + Sisophon | A 3 · B 1 |
| 15 | 4 | 1867-07-01 | kanada | Kahnawake + Montreal + Odanak (Abenaki) + Quebec + Trois-Rivières | A 4 |

(4b5557965'te liste aynı; ek olarak `1502-01-01 safevi` Aşkale+Bayburt+Erzincan+Erzurum+Kemah 4 kayıtla ilk 15'teydi, bugün değil.)

## Sınırlar

- "Ada" D7'nin 150 km graf eşiğidir, Voronoi değildir (bkz. LAB-ENKLAV-SINIF-1009): tekilleştirme yalnız çoklu sayımı kaldırır, adanın haritada gerçekten kopuk olup olmadığını söylemez.
- `__BOSLUK__` muafiyeti burada yalnız sayım deneyi; §1.5'teki beyan muafiyetinin D7'ye taşınması önerilmiyor.
