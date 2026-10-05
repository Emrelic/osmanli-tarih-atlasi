# UMIT-W13-ODAK-METIN-1006 — O8 (BEYANLI→yabancı mekanizması) + CLAUDE.md §9 bayat sayılar

Ağaç: `C:\atlas-w13` = origin/main `1381bf76` + `denetim/ODAK-SEKME-1006.diff`.
⚠️ `ca2a19ca` main'in atası ama diffi UYGULAMIYOR; yalnız diff dosyasını ve raporu ekliyor. ODAK-SEKME bu yüzden ağaca elle uygulandı.

Kilit bende: `arac/odak_olc.py` (metin) + CLAUDE.md. CLAUDE.md'ye **YAZMADIM**: diff, `git show HEAD:CLAUDE.md`ın kopyasından üretildi.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı
| öngörü | ölçüm | hüküm |
|---|---|---|
| 355 BEYANLI→yabancının HİÇBİRİ Osmanlı kutusuna gitmez | 355'in 355'i `maddeAc` gövde dalında; Osmanlı kutusuna 0 | ✓ |
| ~%75 gövdeye açılır · ~%25 sessiz kıpırdamaz | **302 (%85) gövde** · **53 (%15) kıpırdamaz** (52 sahnede değil + 1 harita kaydı yok) | yön ✓, oran ✗ |
| Osmanlı künyesinin maddesi gezGit'te `olayaGit`e gider ⇒ ODAK-SEKME'nin SEKME kovasında Osmanlı maddesi varsa dal yanlış | Osmanlı künyesinden gelen SEKME maddesi **0** | ✗: kusur riski vardı ama bugün boş. ODAK-SEKME sayıları doğru |
| 14 "meşru beyan" OLAYLAR yolundan Osmanlı kutusuna gider; bu satır doğru | OLAYLAR'daki BEYANLI **14** | ✓ |

## 1. O8 — mekanizma ÖLÇÜLDÜ
Ölçüm aracı: `odak_cozum.js`in geçici bir kopyasının sonuna eklenen sayaç (yalnız okur, diffte YOK).
- **Çağrı yolu** (`app.js`):
  - Devlet sekmesindeki tıklama `gezGit` ile başlar.
  - Künye `osmanli` ise `olayaGit` → (b) yolu; değilse `maddeAc`.
  - `maddeAc`ın `kapsam_genis` dalında, `maddeOdakKutusu(m)` kutu kurmazsa `devletiYay(d.harita || d.id)` çağrılır.
- **`devletiYay`**: `DEVLET_HARITA`da o günün (`suanki`, 1281–1923'e kıstırılır) gövdesini arar.
  - Bulursa gövdenin tamamına `fitBounds` yapar.
  - Bulamazsa `return` eder: kamera kıpırdamaz, panel notu da YAZILMAZ. `ob-yer-yok` bu dalda yalnız uçuş kapalıyken boşaltılıyor.
- **Sonuç** (355 tekil madde; künye×madde çiftinde 495):

  | sonuç | tekil | çift |
  |---|---|---|
  | gövde var → bütün gövdeye açılır | 302 | 423 |
  | sahnede değil → sessiz duruş | 52 | 64 |
  | harita kaydı yok → sessiz duruş | 1 | 8 |

  Örnekler:
  - `iran` 1555/1578/1598/1600: `harita:` o gün çizilmiyor.
  - `poni` 1405: harita kaydı yok.
- **Hüküm:** Eski metin ("kamera OSMANLI kutusuna uçar") `kronoloji_*` için yanlış mekanizma. Doğrusu: **kaba ölçek** (302) ya da **sessiz duruş** (53). İkincisi ODAKSIZ'dan kötü, çünkü orada panel "nokta yeri işaretlenmemiş" der.

### `ODAK-METIN-1006.diff` (yalnız `arac/odak_olc.py`, 91 satır)
- **Belge başı (`__doc__`):**
  - ⑥ satırı "BEYAN — kamera YOLA göre gider" oldu.
  - "BEYANLI'NIN TUZAĞI" bölümü iki yola ayrıldı: (b) OLAYLAR → Osmanlı kutusu (meşru); (a) SEKME → gövde ya da sessiz duruş. Ölçüm ve örnek bölümde yazılı.
  - Bayat "→yabancı dosya adından sayılır" paragrafı kalktı; ODAK-SEKME'den beri yoldan sayılıyor.
- **Çıktı metni:**
  - `🔴 BEYANLI→yabancı N — devlet sekmesinde odak yok: kamera devletin O GÜNKÜ BÜTÜN gövdesine açılır (devletiYay); o gün gövdesi yoksa SESSİZCE kıpırdamaz. Osmanlı kutusuna GİTMEZ.`
  - Meşru beyan satırına "(OLAYLAR yolu → o günün Osmanlı kutusu)" eklendi.
  - SEKME_GOVDE tarifine "(yoksa sessiz durur)" eklendi.
- Kapı satırlarına ve sayılara DOKUNULMADI. Değişiklik yalnız metin.

## 2. CLAUDE.md §9 — `CLAUDE-MD-ODAK-1006.diff` (koordinatör uygular)
- **Sabit sayı kalktı:** "ODAKSIZ 485 · BEYANLI→yabancı 669" yerine şu cümle: *"Sayılar BURAYA YAZILMAZ — `denetim/ODAK-TAVAN.json`dan okunur (`py arac/odak_olc.py` basar)."* Bayatlamanın vakası da yazıldı: W13 öngörüsü.
- **`--tavan-yaz` cümlesi düzeltildi:** "iyileşince `--tavan-yaz` ile indirilir" yanlış yönlendiriyordu. Yerine: tavan ELLE indirilir; `--tavan-yaz` evreni genişletip YENİ KAPSAM'ı affeder (`tavan_notu_1001`).
- **ODAK-SEKME'nin özü eklendi:** üç tavan alanı (+SEKME_OKUNMAYAN), tarayıcı evreni (OLAYLAR · SEKME · AÇILAMAZ), app.js'ten metinle kesme, ÇIKIŞ 2.
- **🔴 satırı iki yola ayrıldı:** OLAYLAR → Osmanlı sınırı; sekme → gövde ya da sessiz duruş.
- ⚠️ Bu diff ODAK-SEKME iniş sonrasını tarif eder. ODAK-SEKME + tavan ile **aynı committe** inmeli; tek başına inerse "SEKME_OKUNMAYAN", "AÇILAMAZ" ve "ÇIKIŞ 2" henüz olmayan şeyleri anlatır.

## 3. Sınav — iki yönde
| sınav | koşul | sonuç |
|---|---|---|
| `ODAK-KAPI-SINAV.py` | bugünkü tavan (438/655, Ogaden beyanlı) | **3/2** — ① ve ②, ODAK-SEKME raporundakiyle aynı sebepten; bu iş değiştirmedi |
| `ODAK-KAPI-SINAV.py` | önerilen tavan (325/355/1103, `[]`) geçici yazıldı, geri alındı | **5/0** — ③ kırık atıf ötüyor, ④ temiz |
| `ARAC-ODAK-SEKME-SINAV-1006.py` | | **13/0** |

Metin değişikliği kapının sayılarını ve ihlallerini DEĞİŞTİRMEDİ: aynı koşulda öncesi de sonrası da aynı.

## 4. Diff denetimi
- **`ODAK-METIN-1006.diff`:** LF, CR 0. Geçici indeksle:
  - yalnız origin/main üstüne ✗ (beklenen: ODAK-SEKME gerekli)
  - origin/main + ODAK-SEKME üstüne ileri **✓**, `-R` **✗**
- **`CLAUDE-MD-ODAK-1006.diff`:** LF, CR 0. origin/main üstüne ileri **✓**, `-R` **✗**.

## 5. Bulunamadı / yan bulgular
- Gövde/sessiz ayrımının sayısı `odak_olc` çıktısında YOK; ölçüm geçici kopyayla yapıldı. Çıktıya girmesi için `odak_cozum.js`te bir sayaç gerekir (~10 satır: `DEVLET_HARITA` + `aktifAralik` taklidi). O dosya kilidimde değil; istenirse ayrı iş.
- `iran` künyesinin `harita:` anahtarı 1555–1600'de DEVLET_HARITA'da çizilmiyor. Safevî gövdesi başka bir kimlikte olabilir. Ölçmedim; künye/renk sahibine.
- `ODAK-KAPI-SINAV.py` tavanı LF yazıyor ve `autocrlf` ağaçta içerik aynı kalsa da `M` bırakıyor. Her koşudan sonra `git checkout --` ile temizledim.

## 6. git status (`C:\atlas-w13`)
```
 M arac/odak_cozum.js                       ← ODAK-SEKME (taban, bu işin değil)
 M arac/odak_olc.py                         ← ODAK-SEKME + O8 metni
?? denetim/ARAC-ODAK-SEKME-SINAV-1006.py    ← ODAK-SEKME
```
`ODAK-TAVAN.json` ve `data/` temiz. CLAUDE.md'ye dokunulmadı. Ağaç devam işi için açık bırakıldı.
