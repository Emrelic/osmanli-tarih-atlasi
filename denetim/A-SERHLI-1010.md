# A-SERHLI-1010 — inişin TEK BORÇ DEFTERİ (A-ŞERHLİ kova: iner, gerçek-harita sınavı ADIYLA ertelenir)

İşçi: LAB (ajan) · 10 Ekim 2026 · commit/push YOK (Emre atar) · gerçek checkout'lara YAZILMADI · ağır araç KOŞTURULMADI
(uret_petek · denetle · sınavlar bu işte koşmadı; her satırdaki kanıt adı geçen raporun ölçümüdür) · ağ YOK.
Eş dosya: `A-SERHLI-1010.csv` (aynı 13 satır, makine okur).

## 0. TABAN (ölçüldü)
```
fetch          git -C C:\atlas fetch origin --quiet · origin/main d48c3cfff (TAHTA M-5906)
okunan (main)  denetim/INIS-SIRA-1010.md (141 satır) · denetim/LAB-INIS-AB-1010.md/.csv (154 satır) ·
               oturumlar/INIS-KOSU22.md §10, §10.2 (A-ŞERHLİ tanımı), §10.6 (B② beşlisi), §10.7 (sıra)
okunan (lab)   C:\atlas-lab-denetim\denetim\LAB-INIS-AB2-1010.md §3 (B② beşinin ertelenen komutları)
diff'ler       origin/makine/umit (uç 6dbcc51fb; INIS/LAB tabanı 371961c8) · makine/kasa commit'leri 8614a6af · 7d3270e4 ·
               65e9ac7e · e256778f (YER-YAMA) — her satırda git blob[:12] + sha256[:12] (sha256 = diff DOSYASININ baytı,
               INIS-SIRA §0 ile aynı yöntem; INIS'in verdiği 11 sha256'nın 11'i birebir tuttu)
sınav betikleri her birinin kullanım satırı ve argv işlenişi okundu ("--gercek"/"--tam"/"--kok" var mı — ölçüldü, aşağıda)
```

## 1. A-ŞERHLİ — TANIM (INIS-KOSU22 §10.2, birebir özet)
```
İNİŞ sorusu     : bu commit main'e girince DOĞRU mu?            → A/B'yi bu belirler
DOĞRULAMA sorusu: bugün ÇALIŞTIĞINI kanıtlayabilir miyiz?       → A/B'yi belirlemez
A-ŞERHLİ        : kod doğruluğu TAZE HARİTADAN BAĞIMSIZ gösterilebiliyorsa kalem İNER; koşturulamayan
                  (gerçek-harita) sınav ADIYLA + KİPİYLE + KOMUTUYLA bu deftere yazılır.
İKİ ŞART (ikisi de zorunlu):
  ① kalemin doğruluğu taze harita OLMADAN gösterilmiş olmalı (birim sınavı · py_compile · node yükleme ·
    ÖNCE/SONRA denetle kıyası)
  ② ertelenen sınav ADIYLA, KİPİYLE, TAM KOMUTUYLA yazılmalı — 🔴 "sonra koşturulur" YASAK.
```
INIS-SIRA'nın "sınavsız indi" dediği altı kalem (F4/F5/F6/K2/P5/P6) §10.2 gereği **bu kovanın adsız hâliydi**; burada adıyla.

### 🔴 1.1 NOT — A-ŞERHLİ NEYİ KAPSAMAZ
A-ŞERHLİ yalnız **"sınav bugün KOŞAMIYOR"** durumunu örter. **"Sınav koşuyor ve YANLIŞ cevap veriyor"** durumunu
KAPSAMAZ — o bir borç değil, bir kırmızıdır.
Vaka (ölçüldü, LAB-INIS-AB2 §3/§4 · INIS-SIRA §5): `ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py` tek başına **23/23**, LISTE
uygulandıktan sonra **18/23** (K2 K4 K5 K7 K8 düşer — KAPI fikstüründe site/türev yok, LISTE'nin türetme durdurucusu
devreye giriyor; INIS kümülatif ağaçta 8/23 gördü). Sebep ürün değil **FİKSTÜR BAYATLIĞI**.
⇒ **HÜKÜM: LISTE ve ADD, KAPI sınav fikstürünün güncellemesiyle AYNI COMMIT'te iner** (`§3.4 ②`'nin sınav yüzü:
sabit/fikstür ve onu oynatan değişiklik aynı commit). Bu şart Z2/Z3 satırlarında ayrı **KOŞULLU İNİŞ** notu olarak durur
ve A-ŞERHLİ şerhiyle KARIŞTIRILMAZ: koşullu iniş şartı iniş ANINDA ölçülür (harita gerekmez), ertelenmez.

### ⚠️ 1.2 ÖLÇÜM NOTU — §10.2'nin Z1 cümlesi ölçümle TUTMADI
§10.2: *"`KOSU-YAYIN-KAPI (Z1)` · `ZAMAN-Z1-ARAC` … SINAVLARI `--gercek` kipinde `devletler_harita.js` istiyor."*
Ölçüldü: **yalnız ZAMAN-Z1 doğru** (`ARAC-ZAMAN-Z1-SINAV-1008.py:3-4,107`). `ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py`
**`--gercek` kipi YOK** — tek argümanı `--kok` (`:5,:59`); bütün alt betikler sahte (STUB_<AD>=kod), geçici `git init`
deposunda koşar (LAB-INIS-AB csv #75: "Sınavı sahte data/*.js yazar"). ⇒ Z1'in ertelenen yarısı bir sınav kipi değil,
**dolu ağaçta gerçek ⑥ kodunun** ölçümüdür (satır Z1). Hüküm (A-ŞERHLİ) değişmez; gerekçesi düzeltilir.

## 2. ORTAK HAZIRLIK — "dolu ağaç" (bütün satırlar buna atıf yapar)
Komutlar **Git Bash** sözdizimindedir (bayt-güvenli boru; PowerShell `|` metni yeniden kodlayabilir). Ağaç kökünden.
```bash
# H0 — KOŞU 22c bitip yeniden KODLANMIŞ parçalar origin/main'e indikten SONRA, yeni main'de:
git -C /c/atlas fetch origin
git -C /c/atlas worktree add /c/atlas-serhli origin/main --detach
cd /c/atlas-serhli
export PYTHONIOENCODING=utf-8 PYTHONHASHSEED=0
O=/c/atlas-serhli-cikti; mkdir -p $O                 # çıktılar AĞAÇ DIŞINDA (takipsiz dosya ölçülen ağacı kirletir)
py arac/kodla.py kapi data                           ; echo "H0a=$?"   # beklenen 0: parça ↔ sha damgası tutarlı
py arac/kodla.py coz-c data data/devletler_harita.js ; echo "H0b=$?"   # beklenen 0  (.gitignore:20,:28)
py arac/kodla.py coz-c data data/donemler.js donem   ; echo "H0c=$?"   # beklenen 0  (.gitignore:38,:42)
# 🔴 D8 İKİSİNİ BİRDEN okur (denetle.py _D8_GOVDE_DAMGA :5212) — biri eksikse D8 yine ÖLÇÜLEMEDİ.
# H1 — yalnız Z2/Z3 (yayın listesi dört kaynağı ister):
py arac/kodla.py coz-c data data/petek_govde.js govde    ; echo "H1a=$?"   # .gitignore:56
py arac/kodla.py coz-c data data/ufuk_bantlari.js bant   ; echo "H1b=$?"   # .gitignore:207
```
Alternatif H0 (E3 OLCUM-AGACI indiyse, tarifin tamamını + sha256=damga kapısını yapar):
`py arac/olcum_agaci.py hazirla --yol /c/atlas-serhli` → çıkış 0 (3 = ÖLÇÜLEMEDİ, durdur).
Bitiş: `git -C /c/atlas worktree remove --force /c/atlas-serhli` (ya da `py arac/olcum_agaci.py kaldir /c/atlas-serhli`).

**ÖNCE/SONRA yöntemi (F4 · F5 · F6 · K2 · P5 · P6 · Z4):** SONRA = H0 ağacı olduğu gibi. ÖNCE = aynı ağaçta kalemin
diff'i ters uygulanmış hâli: `git show <rev>:<diff> | git apply -R --check && git show <rev>:<diff> | git apply -R`,
ölçüm, sonra `git checkout -- . && git clean -fdq -e data/devletler_harita.js -e data/donemler.js` (izli dosyalar geri).
`--check` düşerse (sonradan inen bir commit bağlamı değiştirmiş) **o satır ÖLÇÜLEMEDİ** yazılır ve yedek yöntem:
iniş commit'i `C=$(git log origin/main --format=%H -1 -S '<satırdaki iz>' -- <dosya>)`, iki ağaç `C^` ve `C`, ikisinde H0.

## 3. DEFTER — 13 SATIR

Sütunlar: **#** · **kalem** (INIS kodu) · **tür** · **diff / blob** · **ertelenen sınav — TAM KOMUT · KİP** · **gereken
üretilmiş dosya** · **ne zaman** · **taze haritasız kanıt (verilmiş)** · **beklenen (PASS)** · **durum**

### 3a. SINIR KALEMLERİ (§10.2 hükmü) — 2

| # | kalem | diff / blob | ertelenen — TAM KOMUT · KİP | üretilmiş | ne zaman | taze haritasız kanıt | beklenen (PASS) | durum |
|---|---|---|---|---|---|---|---|---|
| S1 | **KOSU-YAYIN-KAPI-1010 (Z1)** — kosu_yayin + kos_ve_yayinla, ⑥=1/2 ayrımı, push düşerse 1, zincir kilidi | umit `700bebd9` · `denetim/KOSU-YAYIN-KAPI-1010.diff` · blob `1d2be671aba0` · sha256 `dd33fb7e4bd9` · UYGULANABİLİR | **KİP: `--gercek` YOK (ölçüldü, §1.2)** ⇒ yerine geçen ölçüm, H0 ağacında: `py arac/denetle_yayin.py > $O/S1-yayin.txt 2>&1; echo "S1=$?"` — zincirin ⑥ adımına GERÇEK veriyle hangi kodun geldiği (0/1/2). Kapının o koda verdiği tepki sahte 0/1/2 ile zaten sınandı (K4/K5/Z3/Z4). Ek (harita gerekmez, iniş commit'inde): `py denetim/ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py` (sınav dosyası main'de YOK — ölçüldü; `git show origin/makine/umit:denetim/ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py > denetim/ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py` ile iniş commit'ine girer) | ⑥ için: data/donemler.js (denetle_yayin `bayat_mi` :190); devletler_harita.js 2 seviye uzakta (LAB csv #75) | KOŞU 22c sonrası, yeni main, H0 ağacında | sınav yamalı **23/23**, yamasız 7/23 (16 ısırıyor) — KOSU-YAYIN-KAPI-1010.md §3 · LAB-INIS-AB2 §4 "tek başına 23/23" | S1 çıkışı **0 ya da 1** (1 = bilinen SARI borç; zincir `--yayin-kapisi-uyari` ile UYARI sayar) ve çıktıda "ÖLÇÜLEMEYEN SORU" bloğu YOK. **2 gelirse** zincir commit ATMAMALI — bu doğru davranış, ama kovayı ADIYLA koordinatöre yaz. KAPI sınavı: `SONUÇ … 23/23`, çıkış 0 (LISTE+ADD+fikstür güncellemesi sonrası — bkz. §3b KOŞULLU İNİŞ) | **BEKLİYOR** |
| S2 | **ZAMAN-Z1-1008-ARAC** — `girdi.UFUK`/`VERI_UFKU` tek tanım, `denetle.kirilma_disi`, D1 kapsam dışı kovası, odak VERİ PENCERESİ DIŞI | umit · `denetim/ZAMAN-Z1-1008-ARAC.diff` · blob `7e3e64f43878` · sha256 `fddad49ddc5a` · **İNMİŞ** (02f337288 ZAMAN-PAKET-v2 ile) | **KİP `--gercek`** (odak_olc'u gerçek veriyle iki kez koşturur, ~2-4 dk): H0 ağacında `git show origin/makine/umit:denetim/ARAC-ZAMAN-Z1-SINAV-1008.py > denetim/ARAC-ZAMAN-Z1-SINAV-1008.py && py denetim/ARAC-ZAMAN-Z1-SINAV-1008.py --gercek > $O/S2.txt 2>&1; echo "S2=$?"` (sınav dosyası main'de YOK — ölçüldü; blob `3db4141fef1a`) | data/devletler_harita.js (sınav :4 "devletler_harita.js ister"); index.html `data/donemler.js`'i de yükler ⇒ H0'ın ikisi | KOŞU 22c sonrası, yeni main, H0 | iniş anında **31/31** (⑥ dahil, ağaç 8b2f5415) — ZAMAN-Z1-1008.md:11-12. ⚠️ **Bugünkü main'de haritasız kip KOŞTURULMADI** (ne INIS ne LAB koşturdu) ⇒ ön kanıt şimdi de alınabilir, harita gerekmez: `py denetim/ARAC-ZAMAN-Z1-SINAV-1008.py` → beklenen **27/27** (31 − ⑥'nın 4 sorusu; ① döngüsü `UFUK_DAMGASI` 4 öğe, main girdi.py:748) | `SONUÇ: 31/31`, çıkış 0; ⑥ satırlarında "odak ölçülebildi: …" hata satırı YOK, "⑥ kova DOLU (n>0)" | **BEKLİYOR** |

### 3b. B② BEŞLİSİ (§10.6 — ŞERHLİ ADAY, LAB-INIS-AB2 §3: 5/5 ① GEÇTİ) — 5

| # | kalem | diff / blob | ertelenen — TAM KOMUT · KİP | üretilmiş | ne zaman | taze haritasız kanıt | beklenen (PASS) | durum |
|---|---|---|---|---|---|---|---|---|
| B1 | **DENETLE-TARIH-KALAN-1008** — D8 ölçüm günü kümesi (`_d8_gun_once`, `_d8_gunler`), 4s eşitlik kırıcı | main `denetim/DENETLE-TARIH-KALAN-1008.diff` · blob `6ef54b6255cd` · sha256 `5649ead42dfb` · **İNMİŞ** (cefc73bb7; öncesi 23c083633) | **KİP `--tam`** (S6: gerçek denetle.py × 2 kol × tohum 0/3, ~10 dk): H0 ağacında `SINAV_TABAN=23c083633 py denetim/ARAC-DENETLE-TARIH-KALAN-SINAV-1008.py --tam > $O/B1.txt 2>&1; echo "B1=$?"` (sınav main'de VAR, blob `36af35391229`) | data/devletler_harita.js · data/donemler.js (D8 okur) | KOŞU 22c sonrası, yeni main, H0 | varsayılan kip **29/29 rc 0**; `denetle.py` ÖNCE/SONRA rc 2=2, 351=351 satır, tek fark adal/katalan SIRASI — LAB-INIS-AB2 §3 satır 1 | S6'nın 4 sorusundan **"tohum 0≠3 (yamasız)" · "tohum 0==3 (yamalı)" · "değerler birebir (fark yalnız 4s)"** ✓. ⚠️ 4. soru "çıkış kodu yamasız == yamalı == **2**" haritasız ağaca göre yazıldı: dolu ağaçta iki çıkış EŞİT ama ≠2 ise o tek ✗ **beklenen** (ürün değil sınav varsayımı) ⇒ PASS = `SONUÇ: 33/33` ya da `32/33` + tek ✗ o soru + `$O/B1.txt`'de iki kolun çıkışı eşit. D8 satırında "ÖLÇÜLEMEDİ" YOK | **BEKLİYOR** |
| B2 | **KOSU-YAYIN-LISTE-1010 (Z2)** — yeni `arac/yayin_listesi.py`, commit listesi türetilir (bayat .gitignore'lu liste biter) | umit `047b8d9b` · `denetim/KOSU-YAYIN-LISTE-1010.diff` · blob `576acf6b8718` · sha256 `ea361154be0d` · tek başına ÇAKIŞIYOR, Z1 üstüne ✓ | **KİP: sınavın gerçek kipi YOK** (yalnız `--kok`); ertelenen = gerçek türetme, H0+H1 ağacında: `py arac/yayin_listesi.py --eski > $O/B2.txt 2>&1; echo "B2=$?"` | data/devletler_harita.js · data/donemler.js · data/petek_govde.js · data/ufuk_bantlari.js (H0+H1) | KOŞU 22c sonrası, yeni main, H0+H1 | py_compile ✓; kendi sınavı KAPI+LISTE ağacında **11/11**, yamasız 1/11, ADD sonrası 11/11; gerçek ağaçta `--eski` rc 2 "ÖLÇÜLEMEDİ 4" (kaynaklar yok — beklenen), dosya yazmadı — LAB-INIS-AB2 §3 satır 2 | çıkış **0**, "ÖLÇÜLEMEDİ" satırı **0** | **BEKLİYOR** · 🔴 **KOŞULLU İNİŞ** (aşağıda) |
| B3 | **KOS-VE-YAYINLA-ADD-1010 (Z3)** — kos_ve_yayinla `git add -A` yerine türetilmiş liste | umit `820d517e` · `denetim/KOS-VE-YAYINLA-ADD-1010.diff` · blob `5b1ac358b1c2` · sha256 `f2476a5cf76e` · tek başına ÇAKIŞIYOR, Z1+Z2 üstüne ✓ | **KİP: sınavın gerçek kipi YOK** (yalnız `--kok`); ertelenen = gerçek türetme girdisi, H0+H1 ağacında: `py arac/yayin_listesi.py > $O/B3.txt 2>&1; echo "B3=$?"` (kos_ve_yayinla'nın `yayin_listesi.turet(KOK)` girdisi, diff :43). Gerçek zincir `py arac/kos_ve_yayinla.py` bu defterle KOŞTURULMAZ (yayın yapar); ilk gerçek yayında çıktısında "✓ commit geri okundu" ve `git show --name-only HEAD` = B3'ün türettiği liste OKUNUR | aynı dört dosya (H0+H1) | KOŞU 22c sonrası, yeni main, H0+H1 (gözlem: 22c sonrası ilk gerçek yayın) | py_compile ✓; kendi sınavı **11/11** (D0 depo dışı git 0), yamasız 3/11; LISTE sınavı ADD sonrası 11/11 — LAB-INIS-AB2 §3 satır 3 | B3 çıkış **0** (durdurucusuz türetme); ilk gerçek yayında commit dosyaları = türetilen liste, `git add -A` izi YOK | **BEKLİYOR** · 🔴 **KOŞULLU İNİŞ** (aşağıda) |
| B4 | **OLCUM-AGACI-1010 (E3)** — `arac/olcum_agaci.py`: taze worktree + coz-c ikilisi + sha256=damga kapısı | umit `c0f5a830` · `denetim/OLCUM-AGACI-1010.diff` · blob `b25321de0e69` · sha256 `e8ec4dfabde0` · UYGULANABİLİR (sınav diff'in içinde) | **KİP `--tam`** (S14/S15: iki ağaçta TAM denetle.py + D8 satırı ADIYLA, ~2-4 dk/ağaç). 🔴 Sınav paylaşılan depoda `worktree add/remove/prune` + `fetch` yapar ⇒ **yalıtılmış klonda**: `git clone --shared /c/atlas /c/atlas-oc && git -C /c/atlas-oc config remote.origin.fetch '+refs/remotes/origin/*:refs/remotes/origin/*' && git -C /c/atlas-oc fetch origin && git -C /c/atlas-oc checkout --detach origin/main && cd /c/atlas-oc && py denetim/ARAC-OLCUM-AGACI-SINAV-1010.py --tam > $O/B4.txt 2>&1; echo "B4=$?"` · bitiş `rm -rf /c/atlas-oc` | **yok** — sınav kendisi çözer (devletler_harita.js · donemler.js) | KOŞU 22c sonrası, yeni main (yeni damgalarla) | varsayılan kip **15/15 rc 0** (110 sn, `clone --shared` içinde): S8 iki gövde sha256 = damga, S10 çıplakta D8 RAISE, S11 hazır ağaçta D8 GEÇTİ — LAB-INIS-AB2 §3 satır 4 | `SONUÇ 17/17 GEÇTİ`, çıkış 0; S14 "çıplak: çıkış 2 + D8 ÖLÇÜLEMEDİ" ✓, S15 "hazır: D8 ÖLÇÜLDÜ" ✓ | **BEKLİYOR** |
| B5 | **YAYIN-KAPI-OLCULEMEDI-1010 (Z4)** — denetle_yayin "yayın tazeliği" ölçülemezse ÖLÇÜLEMEYEN kovası (çıkış 2) | umit `eec0419c` · `denetim/YAYIN-KAPI-OLCULEMEDI-1010.diff` · blob `f43ba13e7557` · sha256 `032d9dd407c3` · UYGULANABİLİR · 🔴 Z1 ÖNCE ya da AYNI iniş (INIS-SIRA Z4) | **KİP: sınavın gerçek kipi YOK** (monkeypatch); ertelenen = dolu ağaçta ÜRÜN, H0 ağacında: `py arac/denetle_yayin.py > $O/B5.txt 2>&1; echo "B5=$?"` ve `py denetim/ODAK-KAPI-SINAV.py > $O/B5-odak.txt 2>&1; echo "B5o=$?"` (yalnız `data/` kirliyse reddeder — H0'da gitignore'lu çözümler kir sayılmaz; LAB-INIS-AB2 §4) | data/donemler.js (`bayat_mi`, denetle_yayin.py:190) | KOŞU 22c sonrası, yeni main, H0 | py_compile 4 dosya ✓; kendi sınavı **14/14 rc 0**; denetle_yayin ÖNCE/SONRA rc 1=1, tek fark eklenen 4 satır "ÖLÇÜLEMEYEN SORU: 1 — yayın tazeliği donemler.js YOK"; ODAK-KAPI-SINAV ÖNCE/SONRA ikisi de "geçen 2 · BAŞARISIZ 3" (mevcut SEKME borcu) — LAB-INIS-AB2 §3 satır 5 | B5 çıktısında **"yayın tazeliği" ÖLÇÜLEMEYEN kovasında YOK**; çıkış kodu yalnız gerçek ✗'lere bağlı (bugün 1: üretim izi · SEKME SESSİZ · SEKME OKUNMAYAN) — 2 gelirse ÖLÇÜLEMEYEN kovayı ADIYLA yaz. ODAK-KAPI-SINAV: "BAŞARISIZ" sayısı ≤ 3 ve yeni ad YOK | **BEKLİYOR** |

**🔴 KOŞULLU İNİŞ — B2 (LISTE) ve B3 (ADD)** (§1.1; A-ŞERHLİ DEĞİL, iniş ANINDA ölçülür, harita gerekmez):
LISTE ve ADD, `denetim/ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py` fikstürünün güncellemesiyle **AYNI COMMIT'te** iner
(`§3.4 ②`, sınav yüzü). İniş commit'inin ağacında (KAPI+LISTE+ADD+fikstür) üçü birden:
```bash
py denetim/ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py      ; echo "K-KAPI=$?"    # beklenen SONUÇ 23/23, çıkış 0  (bugün 18/23 = KIRMIZI)
py denetim/ARAC-KOSU-YAYIN-LISTE-SINAV-1010.py     ; echo "K-LISTE=$?"   # beklenen 11/11, çıkış 0
py denetim/ARAC-KOS-VE-YAYINLA-ADD-SINAV-1010.py   ; echo "K-ADD=$?"     # beklenen 11/11, çıkış 0
```
(üç sınav dosyası da main'de YOK — ölçüldü; diff'ler yalnız arac/ dosyalarını taşıyor ⇒ `origin/makine/umit:denetim/…`'dan
iniş commit'ine alınır; blob'lar `fd24fdf0a0c2` · `676b10d1b596` · `5994e436086c`). KAPI 23/23 değilse LISTE+ADD **İNMEZ**.
Fikstürü güncelleyen: KAPI sahibi (LAB-INIS-AB2 §3 şerhi). Bu şart karşılanmadan B2/B3 satırları "BEKLİYOR" değil "İNMEDİ"dir.

### 3c. "SINAVSIZ İNDİ" ALTILISI (INIS-SIRA §2/§5: "çalıştırılabilir sınav dosyası YOK — denetle.py çıktısıyla dolaylı") — 6
Hepsinde **SINAV YOK**. Yerine geçen ölçüm: H0 dolu ağacında ÖNCE/SONRA (§2 yöntemi) — haritasız ÖNCE/SONRA'nın
ölçemediği tek şey D8 (+ D8'e bağlı çıkış kodu) idi; ertelenen tam olarak budur.

| # | kalem | diff / blob | SINAV YOK — yerine geçen ölçüm, TAM KOMUT · KİP | üretilmiş | ne zaman | taze haritasız kanıt | beklenen (PASS) | durum |
|---|---|---|---|---|---|---|---|---|
| F4 | **YER-YAMA-SESSIZ-7-1010-KOORD-v2** — Timbuktu TAM zinciri (10 dönem) + `BEYAN_EDILEN_BOSLUK` += ("Timbuktu","1893-01-01","1894-01-01") | umit `e256778f` · `denetim/YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff` · blob `08311b335afd` · sha256 `227fe5e47337` · UYGULANABİLİR · dosyalar arac/denetle.py + data/yerlesimler.js (INIS "yerlesimler.js (+1)" yazıyor; diff İKİ dosya — ölçüldü) | **SINAV YOK** · KİP denetle `--ayrinti` ÖNCE/SONRA, H0: `py arac/denetle.py --ayrinti > $O/F4-SONRA.txt 2>&1; echo "F4s=$?"` → `git show e256778f:denetim/YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff \| git apply -R --check && git show e256778f:denetim/YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff \| git apply -R && py arac/denetle.py --ayrinti > $O/F4-ONCE.txt 2>&1; echo "F4o=$?"; git checkout -- . ; diff $O/F4-ONCE.txt $O/F4-SONRA.txt` · yedek iz: `-S '("Timbuktu", "1893-01-01", "1894-01-01")' -- arac/denetle.py` | data/devletler_harita.js · data/donemler.js (yalnız D8 için) | KOŞU 22c sonrası, yeni main, H0 | denetle `--ayrinti` ÖNCE/SONRA (PYTHONHASHSEED=0, main 2d931a6f; ikisi de rc 2 = D8 ölçülemedi): 1c BELGESİZ 4→3 · 1b beyanlı 7/7→8/8 (beyansız 0) · 2s 1805→1807, **AÇIK 193→193** · D7 muaf 4711→4718 · ötekiler aynı — YER-YAMA-SESSIZ-7-1010.md § v2 | F4o == F4s (aynı çıkış kodu); fark yalnız md'deki satırlar (1c −1 Timbuktu, 1b beyanlı +1, 2s AÇIK **değişmez**, D7 muaf +7); **D8 satırı ÖNCE = SONRA** ve "ÖLÇÜLEMEDİ" değil. Şerhler: aynı commit'te `BEKLENEN_BELGESIZ 4→3` (§3.4 ③, md "İstiyorum ①"); sonra `py arac/renk_olc.py` (arma ilk kez sahnede); ⚠️ LAB karantina uyarısı (INIS §6b) ve v2 hükmü "koşudan sonra iner" — INIS-SIRA ③a ile çelişir, koordinatöre | **BEKLİYOR** |
| F5 | **KASA-GORUNURLUK-SAYAC-1010** (v2) — beyanlı sayaçlar TAM PENCERE 110 · tek dilimli 112 · künye iç boşluğu 27 · `BULUNAMADI_DEFTER` 7; `_kaynak_tanikli` | kasa `8614a6af` (ilk `a169e505`) · `denetim/KASA-GORUNURLUK-SAYAC-1010.diff` · blob `08b6dbb4560f` · sha256 `e5fdb478e024` · UYGULANABİLİR (`diff --git` başlıksız) | **SINAV YOK** (satır içi 6/6 + 13/13, dosya yok) · KİP denetle ÖNCE/SONRA, H0. 🔴 F6 F5'in `_kaynak_tanikli`'sine bağlı ⇒ ÖNCE için önce F6, sonra F5 geri alınır: `py arac/denetle.py --ayrinti > $O/F56-SONRA.txt 2>&1; echo "F56s=$?"` → `git show 7d3270e4:denetim/KASA-DIKIS-KAPI-1010.diff \| git apply -R` → `py arac/denetle.py --ayrinti > $O/F5-SONRA.txt 2>&1; echo "F5s=$?"` → `git show 8614a6af:denetim/KASA-GORUNURLUK-SAYAC-1010.diff \| git apply -R --check && git show 8614a6af:denetim/KASA-GORUNURLUK-SAYAC-1010.diff \| git apply -R && py arac/denetle.py --ayrinti > $O/F5-ONCE.txt 2>&1; echo "F5o=$?"; git checkout -- .` · yedek iz `-S 'def gorunurluk_olc' -- arac/denetle.py` | aynı (yalnız D8) | KOŞU 22c sonrası, yeni main, H0 | sentetik 6/6 + v2 13/13; gerçek veri 110/112/27/7; tam denetle ÖNCE/SONRA: fark YALNIZ yeni blok, çıkış 2=2 (D8 ölçülemedi) — KASA-GORUNURLUK-SAYAC-1010.md "Sınav" + "v2"; DIKIS v3 aynı zeminde GÖRÜNÜRLÜK 13/13 | F5o == F5s; `diff $O/F5-ONCE.txt $O/F5-SONRA.txt` yalnız "Ek denetim · GÖRÜNÜRLÜK" bloğu; blokta "GERİLEME" ve "BULUNAMADI YENİ" YOK (sayılar A grubu verisiyle oynamış olabilir — ölçüt tavan aşılmaması, sabit sayı değil); D8 ÖNCE = SONRA | **BEKLİYOR** |
| F6 | **KASA-DIKIS-KAPI-1010 v3** — `DIKIS_DEFTER` (13), `dikis_olc/dikis_rapor`, VERI_UFKU[0] günündeki sahte geçiş kapısı | kasa `7d3270e4` · `denetim/KASA-DIKIS-KAPI-1010.diff` · blob `aec60c345001` (LAB csv'deki 8614a6af sürümü main'de ÇAKIŞIYOR) · sha256 `22c26f9234ea` · F1-F5 üstüne ✓ (§10.7 sıra ③ A-SON) | **SINAV YOK** (satır içi 17/17) · KİP denetle ÖNCE/SONRA, H0 — F5 zincirinin ilk adımı: ÖNCE = `$O/F5-SONRA.txt` (F6 geri alınmış), SONRA = `$O/F56-SONRA.txt`; `diff $O/F5-SONRA.txt $O/F56-SONRA.txt` · `--check` için: `git show 7d3270e4:denetim/KASA-DIKIS-KAPI-1010.diff \| git apply -R --check` · yedek iz `-S 'def dikis_olc' -- arac/denetle.py` | aynı (yalnız D8) | KOŞU 22c sonrası, yeni main, H0 | DIKIS 17/17 + GÖRÜNÜRLÜK 13/13 yeni zeminde ÇALIŞTIRILDI; tam denetle ÖNCE/SONRA fark YALNIZ `✓ UFUK DİKİŞİ (1281-01-01): kaynaksız geçiş 13 (defter 13) · kaynaklı geçiş 1 · kırpma (s[0]) 2442` (+ zamanlama), çıkış 2=2 — KASA-DIKIS-KAPI-1010.md §5 | F5s == F56s; fark yalnız "UFUK DİKİŞİ" satırı (+zamanlama), satır ✓ ve "GERİLEME"/"İHLAL" YOK; D8 ÖNCE = SONRA | **BEKLİYOR** |
| K2 | **KASA-FAZ2-1010** — 7 veri dosyası, 15 kayıt, 9 kronoloji maddesi (Oviedo isg 1810-03-29→1811-06-14 · Dubrovnik · Hama · Aosta · Klagenfurt …) | kasa `65e9ac7e` · `denetim/KASA-FAZ2-1010.diff` · blob `0aebe6c29c7d` · sha256 `ba84025c8656` · UYGULANABİLİR · 🔴 K1 KOORD-DEVLETLER (ONAY BEKLİYOR) + `py arac/paketle.py yenile` AYNI iniş | **SINAV YOK** (md'de sınav yok) · KİP denetle ÖNCE/SONRA, H0: `py arac/denetle.py --ayrinti > $O/K2-SONRA.txt 2>&1; echo "K2s=$?"` → `git show 65e9ac7e:denetim/KASA-FAZ2-1010.diff \| git apply -R --check && git show 65e9ac7e:denetim/KASA-FAZ2-1010.diff \| git apply -R && py arac/denetle.py --ayrinti > $O/K2-ONCE.txt 2>&1; echo "K2o=$?"; git checkout -- .` + paket tazeliği `py arac/denetle_yayin.py > $O/K2-yayin.txt 2>&1` · yedek iz `-S 'f:"1810-03-29",t:"1811-06-14",d:"fransa-cumhuriyet"' -- data/yerlesimler_avrupa.js` (dosya adı ÖLÇÜLMEDİ — `-S` dosya süzgeçsiz de koşar) | aynı (yalnız D8) | KOŞU 22c sonrası, yeni main, H0 (K1+paketle ile aynı inişten sonra) | tam denetle yığın ↔ yığın+FAZ2: 2i 171→185 / açık 1 (tavan 1) · 2s 1807→1811 / **AÇIK 193** · kronoloji 2223→2232 · kaynaksız s: 1841→1839 · isg 372→382 · D7 800→802 · taban-ölçülemedi 188→189 (Girona) · çıkış 2↔2 — KASA-FAZ2-1010.md §2 | K2o == K2s; 2i açık ≤ 1, 2s AÇIK ≤ 193 (tavanlar aşılmaz); fark yalnız md §2 satırlarının yönünde; D8 ÖNCE = SONRA; K2-yayin'da paket tazeliği ✗ YOK (paketle yenile aynı commit'te). ⚠️ `yer_yama_1923_1945.js` bayat-yama riski (md §3, 15 kayıt) Z5 inişinde ayrıca | **BEKLİYOR** |
| P5 | **BOYA-BORC-1009-v2** — `renkler.py` 17 boya (resuli/tahiri ardıl çözümü ΔE 92.5 …) | umit · `denetim/BOYA-BORC-1009-v2.diff` · blob `9a67f3044ff6` · sha256 `d851887e2786` · UYGULANABİLİR · **B① (tuz: renkler.py) ⇒ İNİŞİ de 22c SONRASI**, P6 ile AYNI commit | **SINAV YOK** · KİP `renk_olc.py` varsayılan denetim + denetle, ÖNCE/SONRA, P5+P6 iniş commit'inde (H0'ın aynısı o commit'te): `py arac/renk_olc.py > $O/P56-SONRA.txt 2>&1; echo "P56s=$?"` → `git show origin/makine/umit:denetim/BOYA-PARTISI-1010-v2.diff \| git apply -R && git show origin/makine/umit:denetim/BOYA-BORC-1009-v2.diff \| git apply -R --check && git show origin/makine/umit:denetim/BOYA-BORC-1009-v2.diff \| git apply -R && py arac/renk_olc.py > $O/P56-ONCE.txt 2>&1; echo "P56o=$?"; git checkout -- .` + aynı iki kolda `py arac/denetle.py > $O/P56-den-{ONCE,SONRA}.txt` | **yok** — renk_olc üretilmiş harita okumuyor (ölçüldü: renk_olc.py'de `devletler_harita`/`donemler.js` okuması 0; BOLGE uret_petek.py'den metin olarak); denetle kolu için H0 | 22c bitip P5+P6 (B①) indiği commit'te, yeni main | renk_olc ÖNCE/SONRA: görünmez 0→0 · çakışma 7→7 · aynı-anahtar 70→70 · aynı-hex 0→0 · yakın 14→14 · SINIRDA 131→135; `--dogrula` 0 fark; denetle 2→2 birebir — BOYA-BORC-1009.md §3 | P56o == P56s; görünmez 0, komşu çakışma / aynı-anahtar / aynı-hex / yakın-değmeyen ÖNCE = SONRA (yeni ihlal 0); yalnız SINIRDA (ekran) bandı artabilir; denetle ÖNCE/SONRA çıktısı birebir. Şerh: `argunlular` künyesi aynı commit'te inmezse `renk_olu` 1→2 (md "KÜNYE GEREKLİ") | **BEKLİYOR** |
| P6 | **BOYA-PARTISI-1010-v2** — `renkler.py` teuton-devleti #6c0cf0 · bavyera #ea9618 · nagpur-bhonsle #b424d8 + `devletler.js` teuton-devleti `boya_gerekli` kalkar | umit · `denetim/BOYA-PARTISI-1010-v2.diff` · blob `813d00639d4a` · sha256 `b4a5ff50ffd1` · **B① ⇒ İNİŞİ 22c SONRASI**, K1 üstüne, P5 ile AYNI commit | **SINAV YOK** · P5 satırının ÖNCE/SONRA'sı (P6 önce geri alınır) + ARA adım: P6 geri alınınca `py arac/renk_olc.py > $O/P5-SONRA.txt 2>&1` ⇒ `diff $O/P5-SONRA.txt $O/P56-SONRA.txt` = P6'nın tek başına etkisi | yok (P5 ile aynı) | P5 ile aynı commit | ardıl-yamalı renk_olc + simülasyon, iki tabanda: görünmez 0 · komşu 8 · aynı-anahtar 70 · aynı-hex 0 · yakın 15 · ARDIL 10 ÖNCE = SONRA; yeni ihlal 0, kaybolan 0; tek yeni satır SINIRDA `ARDIL 13,59 avusturya ↔ bavyera`; çıkış 0 (4 koşu) — BOYA-PARTISI-1010.md §3. ⚠️ simülasyon gerçek veri değil (md "SINIR") | P5-SONRA vs P56-SONRA: yeni ihlal 0; çıkış ÖNCE = SONRA; görünmez 0. **Tam doğrulama ayrıca:** üç kimliği `s:`'e yazan veri işi indiği commit'te `py arac/renk_olc.py` (md §3 SINIR) | **BEKLİYOR** |

## 4. ÖLÇÜLEMEDİ — satır düzeyi: **0**
Her satırın komutu, kipi ve beklenen sonucu belirlendi. Satır İÇİ iki açık (satırı ÖLÇÜLEMEDİ yapmaz, adıyla):
- **S2**: bugünkü main'de haritasız ön kanıt yok (INIS ve LAB koşturmadı) — komutu S2 satırında, harita gerekmez, şimdi koşabilir.
- **K2**: yedek `-S` izinin hangi `yerlesimler*.js`'te olduğu ölçülmedi (diff 7 dosya) — `-S` dosya süzgeçsiz koşturulursa sonuç aynı.
- ÖNCE/SONRA'larda `git apply -R --check` iniş SONRASI ağaçta düşerse o satır ölçüm anında ÖLÇÜLEMEDİ olur ⇒ §2 yedek yöntemi.

## 5. FOOTER — SAYIM ve TEK KOMUT BLOĞU
```
TOPLAM 13 SATIR · hepsi BEKLİYOR
  SINIR (§10.2)          2   S1 KOSU-YAYIN-KAPI (Z1) · S2 ZAMAN-Z1-1008-ARAC (İNMİŞ)
  B② (§10.6)             5   B1 DENETLE-TARIH-KALAN-1008 (İNMİŞ) · B2 KOSU-YAYIN-LISTE · B3 KOS-VE-YAYINLA-ADD ·
                             B4 OLCUM-AGACI · B5 YAYIN-KAPI-OLCULEMEDI
  SINAVSIZ (INIS §5)     6   F4 · F5 · F6 · K2 · P5 · P6  (hepsi SINAV YOK → ÖNCE/SONRA ikamesi)
kip dağılımı             --gercek 1 (S2) · --tam 2 (B1, B4) · gerçek kip YOK → ürün ölçümü 4 (S1, B2, B3, B5) ·
                         ÖNCE/SONRA ikamesi 6
harita gerektirmeyen     B4 (sınav kendi çözer) · P5/P6 renk_olc kolu
KOŞULLU İNİŞ             2 (B2, B3) — KAPI fikstürü AYNI commit, iniş anında ölçülür, ertelenmez
ÖLÇÜLEMEDİ satır         0
```

**KOŞU 22c SONRASI — hepsi, SIRAYLA (Git Bash, yeni main):**
```bash
# ── 0. HAZIRLIK (§2 H0 + H1) ─────────────────────────────────────────────── beklenen: H0a..H1b hepsi 0
git -C /c/atlas fetch origin && git -C /c/atlas worktree add /c/atlas-serhli origin/main --detach && cd /c/atlas-serhli
export PYTHONIOENCODING=utf-8 PYTHONHASHSEED=0; O=/c/atlas-serhli-cikti; mkdir -p $O
py arac/kodla.py kapi data                               ; echo "H0a=$?"
py arac/kodla.py coz-c data data/devletler_harita.js     ; echo "H0b=$?"
py arac/kodla.py coz-c data data/donemler.js donem       ; echo "H0c=$?"
py arac/kodla.py coz-c data data/petek_govde.js govde    ; echo "H1a=$?"
py arac/kodla.py coz-c data data/ufuk_bantlari.js bant   ; echo "H1b=$?"

# ── 1. S2 ZAMAN-Z1 --gercek ───────────────────────────────────────────────── beklenen: SONUÇ 31/31 · S2=0
git show origin/makine/umit:denetim/ARAC-ZAMAN-Z1-SINAV-1008.py > denetim/ARAC-ZAMAN-Z1-SINAV-1008.py
py denetim/ARAC-ZAMAN-Z1-SINAV-1008.py --gercek > $O/S2.txt 2>&1 ; echo "S2=$?"
rm denetim/ARAC-ZAMAN-Z1-SINAV-1008.py

# ── 2. B1 DENETLE-TARIH-KALAN --tam ───────────────────────────────────────── beklenen: 33/33, ya da 32/33 ve tek ✗
SINAV_TABAN=23c083633 py denetim/ARAC-DENETLE-TARIH-KALAN-SINAV-1008.py --tam > $O/B1.txt 2>&1 ; echo "B1=$?"
#    "çıkış kodu … == 2" (iki kolun çıkışı EŞİT olmak şartıyla); D8 satırında ÖLÇÜLEMEDİ yok

# ── 3. S1 + B5 yayın kapısı, dolu ağaçta ──────────────────────────────────── beklenen: S1/B5 çıkışı 0|1,
py arac/denetle_yayin.py > $O/S1-B5-yayin.txt 2>&1 ; echo "S1B5=$?"          #  "yayın tazeliği" ÖLÇÜLEMEYEN'de YOK
py denetim/ODAK-KAPI-SINAV.py > $O/B5-odak.txt 2>&1 ; echo "B5o=$?"           # BAŞARISIZ ≤ 3, yeni ad yok

# ── 4. B2 LISTE + B3 ADD gerçek türetme ───────────────────────────────────── beklenen: B2=0 ÖLÇÜLEMEDİ 0 · B3=0
py arac/yayin_listesi.py --eski > $O/B2.txt 2>&1 ; echo "B2=$?"
py arac/yayin_listesi.py        > $O/B3.txt 2>&1 ; echo "B3=$?"

# ── 5. F4 ÖNCE/SONRA ──────────────────────────────────────────────────────── beklenen: F4o==F4s, D8 aynı, 2s AÇIK aynı
py arac/denetle.py --ayrinti > $O/F4-SONRA.txt 2>&1 ; echo "F4s=$?"
D=e256778f:denetim/YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff
git show $D | git apply -R --check && git show $D | git apply -R && { py arac/denetle.py --ayrinti > $O/F4-ONCE.txt 2>&1; echo "F4o=$?"; }
git checkout -- . ; diff $O/F4-ONCE.txt $O/F4-SONRA.txt

# ── 6. F6 → F5 zinciri ────────────────────────────────────────────────────── beklenen: F56s==F5s==F5o, D8 aynı,
py arac/denetle.py --ayrinti > $O/F56-SONRA.txt 2>&1 ; echo "F56s=$?"        #  fark yalnız DİKİŞ satırı / GÖRÜNÜRLÜK bloğu
git show 7d3270e4:denetim/KASA-DIKIS-KAPI-1010.diff | git apply -R --check && git show 7d3270e4:denetim/KASA-DIKIS-KAPI-1010.diff | git apply -R \
  && { py arac/denetle.py --ayrinti > $O/F5-SONRA.txt 2>&1; echo "F5s=$?"; } \
  && git show 8614a6af:denetim/KASA-GORUNURLUK-SAYAC-1010.diff | git apply -R --check && git show 8614a6af:denetim/KASA-GORUNURLUK-SAYAC-1010.diff | git apply -R \
  && { py arac/denetle.py --ayrinti > $O/F5-ONCE.txt 2>&1; echo "F5o=$?"; }
git checkout -- . ; diff $O/F5-SONRA.txt $O/F56-SONRA.txt ; diff $O/F5-ONCE.txt $O/F5-SONRA.txt

# ── 7. K2 ÖNCE/SONRA (K1 + paketle ile aynı inişten sonra) ────────────────── beklenen: K2o==K2s, 2i açık ≤1, 2s AÇIK ≤193
py arac/denetle.py --ayrinti > $O/K2-SONRA.txt 2>&1 ; echo "K2s=$?"
git show 65e9ac7e:denetim/KASA-FAZ2-1010.diff | git apply -R --check && git show 65e9ac7e:denetim/KASA-FAZ2-1010.diff | git apply -R \
  && { py arac/denetle.py --ayrinti > $O/K2-ONCE.txt 2>&1; echo "K2o=$?"; }
git checkout -- . ; diff $O/K2-ONCE.txt $O/K2-SONRA.txt

# ── 8. B4 OLCUM-AGACI --tam, YALITILMIŞ KLONDA ───────────────────────────── beklenen: SONUÇ 17/17 GEÇTİ · B4=0
git clone --shared /c/atlas /c/atlas-oc && git -C /c/atlas-oc config remote.origin.fetch '+refs/remotes/origin/*:refs/remotes/origin/*' \
  && git -C /c/atlas-oc fetch origin && git -C /c/atlas-oc checkout --detach origin/main
(cd /c/atlas-oc && py denetim/ARAC-OLCUM-AGACI-SINAV-1010.py --tam > $O/B4.txt 2>&1 ; echo "B4=$?")
rm -rf /c/atlas-oc

# ── 9. P5+P6 — YALNIZ B① (tuz) partisi 22c sonrası İNDİKTEN sonra, yeni main'de ─ beklenen: P56o==P56s, yeni ihlal 0,
git -C /c/atlas-serhli checkout --detach origin/main   # (fetch'ten sonra; çözülmüş .js'ler ignore'lu, yerinde kalır)
py arac/renk_olc.py > $O/P56-SONRA.txt 2>&1 ; echo "P56s=$?"                 #  görünmez 0; denetle ÖNCE/SONRA birebir
py arac/denetle.py  > $O/P56-den-SONRA.txt 2>&1
git show origin/makine/umit:denetim/BOYA-PARTISI-1010-v2.diff | git apply -R \
  && { py arac/renk_olc.py > $O/P5-SONRA.txt 2>&1; } \
  && git show origin/makine/umit:denetim/BOYA-BORC-1009-v2.diff | git apply -R --check && git show origin/makine/umit:denetim/BOYA-BORC-1009-v2.diff | git apply -R \
  && { py arac/renk_olc.py > $O/P56-ONCE.txt 2>&1; echo "P56o=$?"; py arac/denetle.py > $O/P56-den-ONCE.txt 2>&1; }
git checkout -- . ; diff $O/P56-ONCE.txt $O/P56-SONRA.txt ; diff $O/P5-SONRA.txt $O/P56-SONRA.txt ; diff $O/P56-den-ONCE.txt $O/P56-den-SONRA.txt

# ── SON ─────────────────────────────────────────────────────────────────────
cd /c && git -C /c/atlas worktree remove --force /c/atlas-serhli
```
İniş ANINDA (22c beklemez) koşan iki blok bu defterin DIŞINDA değil, ön şartıdır: **§3b KOŞULLU İNİŞ** (KAPI 23/23 ·
LISTE 11/11 · ADD 11/11) ve **S2 haritasız ön kanıt** (`py denetim/ARAC-ZAMAN-Z1-SINAV-1008.py` → 27/27).
Her satır kapanınca durum `BEKLİYOR → KAPANDI (<tarih> · $O/<dosya> · çıkış)` diye BU dosyada güncellenir; tek borç defteri budur.

## §EK — S2 haritasız ön kanıtı ÖLÇÜLDÜ (10 Ekim, LAB)

`ZAMAN-Z1-1008-ARAC` (S2) satırındaki açık kapandı: bugünkü main'de haritasız kip koşturuldu.
- Taban `origin/main` **bcb7c4a7e** (geride 0), ayrık worktree; sınav `origin/makine/umit:denetim/ARAC-ZAMAN-Z1-SINAV-1008.py`
  (blob **3db4141fef1a**) — sınav dosyası main'de YOK, umit dalından alındı.
- Komut: `py denetim/ARAC-ZAMAN-Z1-SINAV-1008.py` (çıktı boruyla) → **SONUÇ: 27/27 · çıkış 0**.
- Yan etki: yalnız `arac/__pycache__/` (gitignore'lu); takipli dosya değişmedi. Worktree kaldırıldı.
⇒ S2'nin A-ŞERHLİ ön koşulu (taze haritasız doğruluk) **sağlandı**. Ertelenen yarı aynen: `--gercek` kip, KOŞU 22c sonrası, beklenen 31/31.
⚠️ Not: sınav dosyası main'de olmadığı için ertelenen komut `git show origin/makine/umit:... > denetim/...` adımına bağlı;
sınav main'e alınmazsa defterin bu satırı tek bir dalın varlığına rehin kalır (disk-only riskinin dal-only hâli).
