# LAB-INIS-AB2-1010 — ⓐ 2 eksik diff (isim isim) · ⓑ B② 5 kalem kriter ①

## §0 ÖNGÖRÜ (ölçümden ÖNCE) — 2026-10-10 11:24:08 +0300

- ⓐ Öngörü: 134−132 = 2 farkın **yalnız diskte (UMIT), git'te hiç olmayan untracked diff** olduğunu
  tahmin ediyorum (en olası: makine/umit'e commit edilmemiş çalışma kopyası diff'leri); ikinci olasılık:
  INIS'in .diff dışı (.patch / farklı klasör) bir kalemi saymış olması veya geçmişte silinmiş bir diff.
  Ayrıca LAB kümesinde olup INIS'te olmayan 0 isim bekliyorum (sayılar tutuyorsa fark simetrik değil).
- ⓑ Öngörü: 5 kalemden **3'ü** kriter ①'i geçer (py_compile/node load + denetle.py ÖNCE/SONRA ile
  gösterilebilenler); 2'si (OLCUM-AGACI ve YAYIN-KAPI-OLCULEMEDI tipi, üretilmiş harita/ölçüm dosyası
  isteyenler) geçmez.
- Beklenen hata yönü: koordinatör kalibrasyonuna göre LAB arama/sınıflandırmada iki kez KÖTÜMSER çıktı;
  bu yüzden gerçek sonucun öngörüden **daha iyi** (ⓑ'de 3'ten fazla geçen; ⓐ'da farkların git'te
  bulunabilir çıkması) yönünde sapmasını bekliyorum.

---

## §1 TABAN (ölçüldü, 11:25)
```
fetch          git -C C:\atlas fetch origin --quiet · origin/main 197455c8f · ağaçta HEAD..origin/main = 0
ağaçlar        <scratch>/LAB-INIS-AB2/{wt,tk0,tk1,zk,yk} = git worktree add --detach origin/main (hepsi sonunda KALDIRILDI)
               OLCUM-AGACI için <scratch>/LAB-INIS-AB2/oc = `git clone --shared` (yalıtım: sınavın fetch / worktree add /
               PRUNE'u C:\atlas'ın .git'ine değmesin diye; refspec C:\atlas'ın refs/remotes/origin/*'ı) — sonunda SİLİNDİ
INIS girdisi   origin/main:denetim/INIS-SIRA-1010.md blob 43cd59afbc6c8f47e4ef54ac208533777123cd81 (141 satır, tamamı okundu)
LAB kümesi     scratchpad/LAB-INIS-AB/evren.tsv (154 = umit 371961c8 ucunda 132 + uzak dallardan 22 tekil)
Çıktılar       <scratch>/LAB-INIS-AB2/out/*.txt (hepsi `2>&1 | cat > dosya`, PYTHONIOENCODING=utf-8)
```

## §2 ⓐ İKİ FARK — AD AD

### Sonuç (ölçüldü): iki fark ADIYLA BULUNAMADI — git'te ayırt edici kanıt yok
- INIS-SIRA-1010.md 154 kalemin yalnız **52'sini birebir adıyla**, ~21'ini kısaltmayla ("-TUR/-TUR2", "NOKTA-SUMER ANA/B10",
  "LAB-KONUM aday/seçenek diff'leri" …) anıyor; **~81 kalem hiçbir yerde adıyla yok** (INIS: "44 tane 1008/1009 (liste
  `envanter.json`)"). 134'ün ad listesi YALNIZ `scratchpad/INIS-SIRA/envanter.json`da (UMIT diski) — bütün `refs/remotes`ta ve
  `git log --all`da YOK. ⇒ 134 ile 132'nin ad ad kesişimi git'ten kurulamaz.
- INIS §1 yöntemi LAB'inkinden FARKLI: INIS = `C:\atlas-umit\denetim\*.diff` **mtime ≥ 09 Ekim** (izli + TAKİPSİZ); LAB = umit
  geçmişinde 09 Ekim'den beri dokunulmuş ve uçta duran izli diff. İki yöntem dört sınıfta ayrışabilir (aşağıda (a)-(d)); hangi
  ikisinin 134'e girdiği disk mtime'ına ve anlık görüntü saatine bağlı.

### Aritmetik kısıt (ölçüldü)
INIS: umit 134 + uzak 23 (3+2+2+1+2+11+1+1) → **154**. LAB: 132 + 23 − 1 (KUNYE-SUMER-7-1010 iki dalda aynı blob) = 154.
⇒ INIS'in 154'ü tutuyorsa INIS'in 134'ünden **2 ad uzak-dal kümesiyle de kesişiyor** (umit diskinde uzak dal diff'lerinin
takipsiz KOPYASI = sınıf (a)) — ya da +k/−(k−2) gibi dengelenen bir takas var. 52/50/52 kovalarının BİREBİR tutması kümenin aynı
olduğu (a) yorumunu destekliyor; takas yorumunda kovaların tesadüfen tutması gerekir. **Bu bir çıkarım, ölçüm değil.**

### Aday tablo (her satırın git bilgisi ölçüldü; "134'te mi" ÖLÇÜLEMEDİ)
| aday ad | sınıf | INIS'te nerede | git'te var mı | LAB 154'te |
|---|---|---|---|---|
| KUNYE-SUMER-7-1010-v2 | (a) uzak-dal diff'inin umit diskinde kopyası? | §2 V1 "kunye-2 cd5828f8", V2 "v4 v2 ÜSTÜNE artımlı" | origin/makine/emrelic-kunye-2:denetim/KUNYE-SUMER-7-1010-v2.diff (umit geçmişinde HİÇ yok) | ✓ (uzak) |
| NOKTA-SUMER-1010 (+ -B10) | (a) aynı | §3c "NOKTA-SUMER ANA / B10" | origin/makine/emrelic-nokta:denetim/… (umit geçmişinde yok) | ✓ (uzak) |
| KASA-GORUNURLUK-SAYAC-1010 · KASA-DIKIS-KAPI-1010 · KASA-FAZ2-1010 | (a) aynı | §2 F5, F6, K2 | origin/makine/kasa 8614a6af (umit geçmişinde yok) | ✓ (uzak) |
| ↑ dayanak | — | NEGATIF-YIL-1010-A2.md:82 (umit 371961c8): NOKTA-SUMER-1010 ve KUNYE-v2 "C:\atlas-umit\denetim\'de **yoktu**" (o an); SUMER-SAHIP-1010.md:7 ve TAM-INSA-PARTISI-1010.md:45-49 bunları sonra taban yaması olarak UYGULADI ⇒ sonradan diske kopyalanmış olabilirler | — | — |
| ARAYUZ-UFUK-KIRPMA-1010 (v1) | (b) INIS anlık görüntüsünde diskte, sonra silinmiş | §3 "YERİNİ ALDI … → v2" | eklendi 930bca479 (09:34) · **silindi f38fd9080 (09:46)** — INIS sürüm-1 tabanı 09:26, INIS commit 371961c8 09:55 | ✗ (LAB u_gone) |
| ARGV-GIT-DENETIM-1010 (v1) | (b) aynı | §3 "YERİNİ ALDI … → v2" | eklendi 93acc5f12 (09:28) · **silindi 509a0368e (09:45)** | ✗ (LAB u_gone) |
| ↑ not | — | 13 silinmiş diff'ten YALNIZ bu ikisi INIS'in 09:26 tabanından SONRA silindi (öteki 11'i 02:02–09:18 arası) — "tam 2" ile örtüşen tek ikili; ama bunlar 134'teyse 154'ü tutturmak için 2 başka adın düşmesi gerekir | — | — |
| MADDE-VAR-MO-1010 | (c) takipsiz | §3d "takipsiz diff var: kümülatife check ✓" | **yalnız diskte (UMIT), git'te yok** (`git log --all` 0) | ✗ |
| OKU-DOSYA-ATLAMA-1010 | (c) takipsiz | §3d "takipsiz: check ✓" | **yalnız diskte (UMIT), git'te yok** | ✗ |
| SAHIPLIK-OLCULEMEDI-CIKIS-1010 | (c) takipsiz | §3d "takipsiz: Y1+Y2 üstüne ✓, yalnız Y2 RED :215" | **yalnız diskte (UMIT), git'te yok** (yalnız 1006 tarihli SAHIPLIK-OLCULEMEDI-1006-OLC.py/.md var, 32732eb05) | ✗ |
| NEGB-eksi3188.diff | (c) INIS'in kendi ayıkladığı türev | §2 P1 "→ ayıklanmış NEGB-eksi3188.diff" | **git'te yok**; yeri (denetim/ mi scratchpad mi) belirtilmemiş | ✗ |
| YAYIN-KAPI ajanının beş diff'i (adsız) · DENETLE-ONBIR-1010 · URET-PETEK-KAPI | (c) "teslim edilmedi ya da takipsiz" | §3d | git'te yok (beşinin adı bile yok) | ✗ |
| MOTOR-GECISLI-DEVIR | — | §3d "yalnız sınav dosyası var, diff yok" | diff yok | ✗ |
| ARTUKLU-IKI-PARCA-1008-KOORD · GUNNO-PAD-1008 · KRONO-SENKRON-1008 · KRONO-SENKRON-1008-KOORD · ZAMAN-Z1-1008-KOORD · ZAMAN-Z7-1008-MADDE · ZAMAN-Z7-1008-PAD (7) | (d) 8 Ekim 22:25–23:03 commit'li, umit ucunda duruyor | adıyla YOK | umit 371961c8'de var; son dokunuş 08 Ekim ⇒ LAB filtresi dışı; diske 9 Ekim 00:00'dan sonra çekildiyse mtime ≥ 09 Ekim ⇒ INIS'e girer | ✗ |
| Diff olmayan, INIS'te geçen | — | UMIT-KAPANIS-1010.md (§2, "dosya kopyası, diff değil"), ARAC-TAM-INSA-PARTISI-1010-TUZ.py, ARAC-NEGATIF-YIL-B-SINAV-1010.py | — | 154 dışı (doğru) |

### LAB'de olup INIS'te OLMAYAN ad
- Adıyla çelişen: **0** — INIS'in andığı her diff adı (52 birebir + ~21 kısaltma) ya LAB kümesinde ya yukarıdaki (b)/(c) satırlarında.
- INIS'te adıyla hiç geçmeyen LAB kalemleri: ~81 (birebir-ad testinde 102: 47 İNMİŞ · 17 UYGULANABİLİR · 38 ÇAKIŞIYOR; ~21'i
  kısaltmayla anılıyor). Liste `<scratch>/LAB-INIS-AB2/lab_inis_yok.txt`. Bunlar "INIS'te yok" DEĞİL, "INIS'te adıyla yazılmamış"
  — envanter.json olmadan karar verilemez.
- ⇒ Kesin çözüm tek adım: UMIT'te `scratchpad/INIS-SIRA/envanter.json`ın umit-disk kalemlerini LAB'in `lab132.txt`'siyle kıyaslamak.

## §3 ⓑ B② BEŞ KALEM — KRİTER ① (taze harita OLMADAN doğruluk gösterilebilir mi)

Durum origin/main 197455c8'de (ölçüldü): DENETLE-TARIH-KALAN-1008 **İNMİŞ** (`apply -R --check` ✓; inişi cefc73bb7, öncesi
23c083633) · KOSU-YAYIN-KAPI UYGULANABİLİR · KOSU-YAYIN-LISTE ve KOS-VE-YAYINLA-ADD tek başına ÇAKIŞIYOR, **KAPI üstünde sırayla ✓** ·
OLCUM-AGACI UYGULANABİLİR · YAYIN-KAPI-OLCULEMEDI UYGULANABİLİR. Bütün ağaçlarda `data/devletler_harita.js`, `data/donemler.js`
YOK (.gitignore :28, :42) = "üretilmiş dosyasız ağaç". Sınav betikleri origin/makine/umit:denetim/ARAC-*-SINAV-*.py'den alındı
(YAYIN-KAPI ve OLCUM-AGACI sınavları diff içindekiyle birebir — cmp).

| kalem | ① sonucu | kanıt | ertelenen sınav — TAM KOMUT (mod) | gereken üretilmiş dosya | önerilen kova |
|---|---|---|---|---|---|
| DENETLE-TARIH-KALAN-1008 (İNMİŞ) | **① GEÇTİ** | (1) Kendi sınavı varsayılan kip (S1-S5): `SINAV_TABAN=23c083633 py denetim/ARAC-DENETLE-TARIH-KALAN-SINAV-1008.py` → **rc 0 · 29/29** (10 sn; yamasız kol = 23c083633'ün denetle.py'si). (2) `py arac/denetle.py` ÖNCE/SONRA (tk0 = main + `apply -R`, tk1 = main): **rc 2 = 2**, 351 = 351 satır, tek fark `adal`/`katalan` satır SIRASI (4s eşitlik kırıcı — yamanın düzelttiği nondeterminizm; sınav S5 bunu 20 tohumda ölçtü). Dokunduğu soru D8: iki kolda da "ÖLÇÜLEMEDİ — devletler_harita.js YOK" ⇒ D8 DEĞERİ bu ağaçta ölçülemedi; D8 gün kümesi işlevleri (`_d8_gun_once`, `_d8_gunler`) S2/S3'te doğrudan sınandı. (3) `git status --porcelain --ignored` önce/sonra: yalnız `!! arac/__pycache__/`. | `py arac/olcum_agaci.py hazirla --yol <Y>` ile çözülmüş ağaçta, Y içinde: `SINAV_TABAN=23c083633 py denetim/ARAC-DENETLE-TARIH-KALAN-SINAV-1008.py --tam` (S6: denetle.py × 2 kol × tohum 0/3). ⚠️ S6'nın "çıkış 2 = 2" sorusu üretilmiş dosyasız ağaca göre yazılmış — dolu ağaçta çıkış farklıysa o soru düşer; değer satırları kıyası yine geçerli | data/devletler_harita.js · data/donemler.js (D8 okur) | **A-ŞERHLİ** (zaten inmiş; şerh: D8 değeri ÖNCE/SONRA dolu ağaçta ölçülmedi) |
| KOSU-YAYIN-LISTE-1010 (KAPI üstüne) | **① GEÇTİ** | py_compile kosu_yayin.py + yayin_listesi.py rc 0. Kendi sınavı (sahte git-init depolar): `py ARAC-KOSU-YAYIN-LISTE-SINAV-1010.py --kok <ağaç>` → **KAPI+LISTE ağacında 11/11 rc 0** · yamasız main'de **1/11 rc 1** (ısırıyor) · ADD sonrası yine **11/11**. ⚠️ KAPI sınavı LISTE sonrası **18/23** (K2,K4,K5,K7,K8 düşer: KAPI fikstüründe site/türev yok, LISTE'nin türetme durdurucusu devreye giriyor — INIS de "son ağaçta 8/23" gördü) ⇒ fikstür etkileşimi; ürün gerilemesi olarak ÖLÇÜLMEDİ. Gerçek ağaçta `py arac/yayin_listesi.py --eski` → rc 2, "ÖLÇÜLEMEDİ 4" (devlet_parcalar/donem_parcalar/petek_govde_parca/ufuk_bant_parcalar: kaynak diskte yok); dosya yazmadı (status önce = sonra). | Dört kaynağı çözülmüş ağaçta: `py arac/kodla.py coz-c data data/devletler_harita.js devlet` · `py arac/kodla.py coz-c data data/donemler.js donem` · `py arac/kodla.py coz-c data data/petek_govde.js govde` · `py arac/kodla.py coz-c data data/ufuk_bantlari.js bant`, ardından `py arac/yayin_listesi.py --eski` → beklenen: "ÖLÇÜLEMEDİ" satırı 0, çıkış 0 | data/devletler_harita.js · data/donemler.js · data/petek_govde.js · data/ufuk_bantlari.js | **A-ŞERHLİ** (şerh: KAPI sınavı LISTE'den sonra 18/23 — fikstür KAPI sahibince güncellenmeli; gerçek liste dolu ağaçta türetilmedi) |
| KOS-VE-YAYINLA-ADD-1010 (KAPI+LISTE üstüne) | **① GEÇTİ** | py_compile kos_ve_yayinla.py rc 0. Kendi sınavı: `py ARAC-KOS-VE-YAYINLA-ADD-SINAV-1010.py --kok <ağaç>` → **11/11 rc 0** (D1-D10 + D0 depo dışı git 0) · yamasız main'de **3/11 rc 1**. LISTE sınavı ADD sonrası 11/11 (gerileme yok). status önce/sonra: yalnız uyguladığım 3 dosya + `!! arac/__pycache__/`. | Aynı dolu ağaçta (LISTE satırındaki dört `coz-c` sonrası): `py arac/yayin_listesi.py` → çıkış 0 (kos_ve_yayinla'nın `yayin_listesi.turet(KOK)` girdisi durdurucusuz); ardından ilk gerçek `py arac/kos_ve_yayinla.py` çıktısında "✓ commit geri okundu" + `git show --name-only HEAD` = türetilen liste | aynı dört dosya | **A-ŞERHLİ** (şerh: gerçek zincir koşmadı — tasarım gereği) |
| OLCUM-AGACI-1010 | **① GEÇTİ** | py_compile olcum_agaci.py + sınav rc 0. Kendi sınavı varsayılan kip, yalıtılmış `clone --shared` içinde: `py denetim/ARAC-OLCUM-AGACI-SINAV-1010.py` → **15/15 rc 0** (110 sn): S8 iki gövde çözüldü, sha256 = damga (devletler_harita 172.7 MB 82cc1224…, donemler 58.5 MB 5469235f…); S10 çıplak ağaçta D8 RAISE; **S11 hazır ağaçta D8 GEÇTİ**; S16/S17 kaldırma. Taze harita (uret_petek) KOŞMADI — araç depodaki kodlu gövdeyi `kodla.py coz-c` ile çözer. status: yalnız `!! __pycache__`; `worktree list` sonda yalnız clone'un kendisi. | `py denetim/ARAC-OLCUM-AGACI-SINAV-1010.py --tam` (S14/S15: iki ağaçta TAM denetle.py + D8 satırı ADIYLA; ≈2-4 dk/ağaç). ⚠️ paylaşılan depoda `worktree add/remove/prune` + `fetch` yapar ⇒ yalıtılmış `git clone --shared` içinde koşturulmalı (bu ölçümdeki gibi) | yok (sınav kendisi çözer: data/devletler_harita.js · data/donemler.js) | **A-ŞERHLİ** (şerh: --tam koşmadı; sınav paylaşılan depoda `worktree prune` çağırır) |
| YAYIN-KAPI-OLCULEMEDI-1010 | **① GEÇTİ** | py_compile 4 dosya rc 0. Kendi sınavı (monkeypatch, depoya yazmaz): `py denetim/ARAC-YAYIN-KAPI-OLCULEMEDI-SINAV-1010.py` → **14/14 rc 0**. `py arac/denetle_yayin.py` ÖNCE/SONRA: **rc 1 = 1** (main'de mevcut ✗: üretim izi 4/7 · SEKME SESSİZ 1 · SEKME OKUNMAYAN 1); tek fark yamalıda eklenen 4 satır "🔴 ÖLÇÜLEMEYEN SORU: 1 — yayın tazeliği donemler.js YOK" (yamanın amacı). `py denetim/ODAK-KAPI-SINAV.py` ÖNCE/SONRA: **ikisi de "geçen 2 · BAŞARISIZ 3"** (taban zaten SEKME ✗ ⇒ mevcut borç, yamadan değil), yamalı 11 satır fazla = ✗ altındaki ad satırları (yamanın amacı); data/ geri alma ✓. status önce = sonra (+ `!! __pycache__`). | Dolu ağaçta: `py arac/denetle_yayin.py` → "yayın tazeliği" ÖLÇÜLEMEYEN kovasında YOK olmalı; çıkış kodu yalnız gerçek ✗'lere bağlı (bugün 1) | data/donemler.js (bayat_mi okur, denetle_yayin.py:190) | **A-ŞERHLİ** (şerh: INIS — Z1 KAPI önce/aynı iniş; aksi halde main kosu_yayin 2'yi BİLİNEN BORÇ sayar) |

**Sayım: 5/5 kalem ① GEÇTİ.** (Öngörü 3/5 idi ⇒ öngörü KÖTÜMSER çıktı — koordinatörün kalibrasyon yönüyle aynı.)
ⓐ'da öngörü (iki fark untracked) DOĞRULANAMADI: git'ten ad çıkmadı; aritmetik daha çok "uzak dal kopyası" yorumunu destekliyor.

## §4 YAN BULGULAR
- KOSU-YAYIN-KAPI sınavı tek başına 23/23 (yamasız 7/23); LISTE indikten sonra 18/23 ⇒ KAPI ve LISTE aynı inişte inerse KAPI
  sınavı main'de kırmızı kalır (fikstür eski liste dünyasını varsayıyor).
- ODAK-KAPI-SINAV "kirli ağaçta reddeder" (INIS §5) — ölçüldü: yalnız `data/` kirliyse reddeder; arac/ + denetim/ kirli ağaçta koştu.
- OLCUM-AGACI yalıtılmış clone'da çalışıyor ⇒ DENETLE-TARIH-KALAN'ın ertelenen D8 sınavı için hazır araç.

## §5 ÖLÇÜLEMEDİ
- ⓐ 134'ün ad listesi (envanter.json, UMIT diski) ⇒ iki farkın adı.
- ⓑ dolu ağaçta D8 değeri ÖNCE/SONRA (TARIH-KALAN), gerçek yayin_listesi türetmesi, OLCUM-AGACI --tam: ertelenen komutlar §3'te.
