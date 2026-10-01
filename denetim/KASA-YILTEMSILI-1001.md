# KASA-YILTEMSILI-1001 — "YIL-TEMSİLÎ BORÇ 164 > 151": hangi 13'ü yeni

*YAZICI KASA PC (DENETLEME rolü) · 1 Ekim 2026 · koordinatör görevi. Yalnız ÖLÇÜM; `data/` ve `arac/` dosyalarına dokunulmadı.*
Makine okur sürüm: `denetim/KASA-YILTEMSILI-1001.json` (iki liste + nedenler + 108 dönemin kaynak notu).

## 0 · Öngörü — ölçümden ÖNCE yazıldı (16:42:01)
| | Öngörü | Ölçüm |
|---|---|---|
| YENİ / DÜŞEN | ~18 / ~5 | **20 / 7** (net +13) |
| Yeninin kaynağı | veri ~12 · kod ~6 | **veri 20 · kod 0** (ilgili işlevler bayt bayt AYNI) |
| "Gün kaynakta var ama `-01-01` yazılmış" | 1-3 | **kanıtlanan 0 · aday 1** (+ künyeden devralınan yıl 4) |

Öngörünün bir kısmı tuttu, bir kısmı tutmadı. Asıl ders öngörüye yazdığım mekanizmada: **kronoloji maddesi bir kırılmayı ancak KAPATIR, yeni borç açamaz.** Koordinatörün `denetle.py:623`teki gerekçesi ("gecenin 1281 öncesi ve Sahra-altı maddelerinde gün kaynakta yok") bu sayacı **büyütemez.** Sayaç **yerleşim** `s:` kırılmalarını sayar. Ölçüm de öyle çıktı: 20 yeninin 20'si yerleşim verisinden.

## 1 · Yöntem
- **Sayaç:** `degismez2(Y_çekirdek, O, ("s",), yer_sarti=True)` → `kapsam_disi` → `yil_temsili_ayir` (`denetle.py:4626-4629`, `:1853`). Ölçüm script'i bu adımları main()'den birebir kopyalıyor; ölçüm ayrı bir ağaçta, o günün **kendi** `denetle.py`siyle yapıldı.
- **Taban:** `4113f793` (2026-09-20 15:39, "M-ALANI-0920"). `BEKLENEN_2S_YIL_BORC = 151` satırını giren commit `git log -S` ile bulundu, yaklaşık tarih seçilmedi.
  - `git worktree` ile o commit ayrıca açıldı ve **o günün kodu + o günün verisi** ile ölçüldü: **151.** Tavanla birebir aynı ⇒ yöntem doğrulandı.
- **HEAD:** `7381a655` → **164.**
- **Birim: kırılma = (tarih, tür).**
  - 🔴 **Tuzak:** borç kayıtları yerleşim adlarının yalnız **ilk 4'ünü** taşıyor (`denetle.py` gösterim kesmesi).
  - Kayıt-adları düzeyinde karşılaştırınca "55 yeni / 42 düşen" çıkıyordu. Bunun 80 birimi yalnız gruplama farkıydı: aynı kırılmaya yeni bir yer eklenince kayıt "yeni" görünüyor.
  - (tarih, tür) çifti her iki ağaçta da tekil (151 / 164). Doğru birim bu.
- **Kod ve veri ayrımı:** `degismez2` · `kapsam_disi` · `yil_temsili_ayir` · `_madde_yeri_aniyor` · `olaylari_yukle` · `KUYRUK_DOSYALARI` · `KAPSAM_ESIGI_KM`: hepsi taban ile HEAD arasında **AYNI** (md5). ⇒ Değişimin tamamı **veriden**.

## 2 · Sonuç: 151 → 164
**ORTAK 144 · YENİ 20 · DÜŞEN 7.**

### YENİ 20 — taban hâlinde neydi
| Neden | Sayı | Kırılmalar |
|---|---|---|
| **A** · tabanda bu tarih/türde kırılma YOKTU (yeni yerleşim dönemi) | 12 | 1283 Moskova · 1330 Eflak (13 yer) · 1341 Afyon · 1365 Vidin · 1475 Martigny · 1526-kazanç Konstantin+Barito Hulu · 1535-kazanç Annaba+Olinda · 1540 Annaba+Vahiguya · 1584 Feyzâbâd · 1684 Tanca+Loreto+York Factory+Danangombe · 1814-kayıp Kotor+Herseknovi+Kukava+Berens River · 1836-kayıp Hâil+Nefud+Dûmetülcendel+Teymâ+Oyo-İle+Rigolet |
| **B** · tabanda kırılma VARDI ve KAPALIYDI, şimdi açık | 6 | 1369 (+Vidin) · 1374 (+Kesriye) · 1378 (+Kemah) · 1448 (+Kili) · 1505 (+Hîve, Hazârasp, Köhne Ürgenç, Küngrat) · 1557 (+Benzert, San Pedro de Atacama) |
| **C** · tabanda açık ama KAPSAM DIŞIYDI | 2 | 1359 Boğdan/Bucak (18 yer) · 1779-kazanç (+Hâil, Nefud) |

- 📌 **B'nin mekanizması:** mevcut bir kırılmaya yeni bir yerleşim eklenmiş; kapatan madde o yeri anmıyor. 20 Eylül'den beri geçerli **yer şartı** bu yüzden kırılmayı açık sayıyor. Kod değişmedi, değişen veri.
- 📌 **Tür dönmesi:** 1535 · 1814 · 1836'da aynı tarihteki kırılmanın türü değişmiş (kayıp ↔ kazanç). DÜŞEN listesindeki 1535-kayıp · 1814-kazanç · 1836-kazanç bunların eşidir. ⇒ "Gerçekten yeni tarih" sayısı **17.**
- **Son dokunan commit** (`git blame`, 108 dönemin 75'inde bulundu):
  - `17cd2f98` 2026-09-30 (49 dönem)
  - `2e656b0d` 2026-09-27 DUNYA-0079 (16)
  - `52222fa3` 2026-10-01 (6)
  - `0db86f2a` 2026-09-28 KUNYE-ANADOLU-0081 (2)
  - 33 dönemde ÖLÇÜLEMEDİ (satırda ad ve tarih birlikte geçmiyor)

### DÜŞEN 7
| Neden | Sayı | Kırılmalar |
|---|---|---|
| HEAD'de kırılma VAR ve KAPANDI (madde yazıldı) | 3 | 1422-kazanç (Ayasuluk, Aydın, Bayburt…) · 1428 (Niş, Alacahisar, Tenochtitlan…) · 1457 (Erzincan, Podgorica) |
| HEAD'de bu tarih/türde kırılma YOK (tür döndü / dönem değişti) | 3 | 1535-kayıp · 1814-kazanç · 1836-kazanç |
| HEAD'de KAPSAM DIŞI | 1 | 1327 Afyon (HEAD'de aynı yerin kırılması 1341'e kaydı: YENİ listesinde) |

⇒ **④ Arada düşen VAR: 7.** Bunların 3'ü gerçekten **ödendi** (madde yazıldı). Kalan 4'ü yer değiştirdi.

## 3 · Yeni 20'nin kaynak notu: gün bilinip yazılmamış kayıt var mı
Yeni kırılmaları üreten **108 yerleşim dönemi** tarandı. 46'sında kaynak notu var; notun içinde gün geçen: 1 (o da yanlış pozitif, notun kendi `1836-01-01` dizgisi).

| Sınıf | Kırılma | Hüküm |
|---|---|---|
| **Kaynak yalnız YIL veriyor, notta açıkça beyanlı** ("— YIL", `kesinlik:"yil"`, "en geç 1283") | 1283 Moskova · 1365/1369 Vidin · 1448 Kili · 1526 Konstantin · 1535/1540 Annaba · 1584 Feyzâbâd · 1814 Kotor/Herseknovi (LZMK "od 1814") | **Meşru** (D210): borç, doğru davranmanın bedeli |
| 🟠 **Yıl KÜNYEDEN devralınmış** (notun kendi cümlesi) | **1330 Eflak** "bitiş = künye eflak f" (13 yer) · **1359 Boğdan** "bitiş = künye bogdan f" + ÇIKARIM (13 yer) · **1526 Barito Hulu** "banjar-sultanligi künyesi 1526'da başlıyor" · **1836 Hâil** "t: 1836-01-01 (sammar'ın başladığı gün; **TDV 1835 der**)" | `§4`/`D207`: künye günü kaynak DEĞİLDİR. Bu dört kırılma için kaynak yılı ölçülmemiş. **Hâil'de kaynak 1835 diyor, veri 1836 yazıyor.** |
| 🟡 **Aday: kaynakta gün olabilir** | 1330: not "**1330 Posada**" diye bir **muharebe** anıyor. Muharebelerin günü genelde bilinir, ama notta gün yok ve kaynağı açmadım | Kaynakta aranmalı. Kusur DEĞİL, aday |
| **Kaynak notu YOK** | 1341 Afyon · 1374 Kesriye · 1475 Martigny · 1505 Hîve grubu · 1557 Benzert/San Pedro · 1684 Tanca/Loreto/York/Danangombe · 1814 Kukava/Berens · 1836 Oyo-İle (`kaynak:"bulunamadi"`) | ÖLÇÜLEMEDİ: yılın dayanağı kayıtta yok |
| Komşudan devralma (kurallı) | 1378 Kemah: "başlangıç günü komşudan: Erzincan · TDV erzincan 1378" | `§4` komşu kuralına uygun beyan |

⇒ **③ "Gün kaynakta var ama `-01-01` yazılmış": KANITLANAN 0.** Aday 1 (Posada). Ama ayrı ve daha ağır bir sınıf çıktı: **yılı künyeden alınmış 4 kırılma**, biri kaynağıyla çelişiyor (Hâil 1835 ↔ 1836).

## 4 · Öneri (hüküm koordinatörde)
1. **Tavanın 164'e çıkması** ancak §3'ün ilk satırı için meşru: 8-9 kırılma "kaynak yıl veriyor" beyanlı.
   - Künyeden devralınan 4 kırılma ve notsuz 8 kırılma "doğru davranmanın bedeli" **değil**: beyanı ya da kaynağı eksik.
   - ⇒ Tavanı yükseltmek bu 12'yi de **aftan geçirir.**
2. **`denetle.py:623`teki gerekçe metni yanlış mekanizmayı anlatıyor.** Kronoloji maddeleri bu sayacı büyütmez. Büyüten, yerleşim verisine yazılan `-01-01` dönemleri ve kırılma gruplarına eklenen yeni yerler.
3. Uyarı satırındaki "yeni `YYYY-01-01` kırılması yazılmış olabilir" cümlesi bu kez **doğru**: 17 gerçek yeni tarih var.

## 5 · Ölçülemeyen / beyan
- 33 dönemde `git blame` satırı bulamadı (yerleşim adı ile tarih aynı satırda değil). Commit ataması o dönemler için ölçülemedi.
- "1330 Posada" muharebesinin günü için kaynak açılmadı. Aday olarak bırakıldı, tarih yazılmadı.
- Borç kaydındaki "en yakın madde" alanı (`fark_gun`) 31 gün sınırını gösteriyor. Maddelerin içeriği bu turda okunmadı.
