# SAHIPLIK-KUR-KAPI-1010 — `_sahiplik_uygula.py` yazıcı kur kapısı (+ §6 denetle süresi sorusu)

UMIT yazıcı · 10 Ekim 2026 · teslim DİFF (commit/push YOK, stash YOK, C:\atlas'a yazılmadı).
Dayanak: `denetim/KUR-KAPI-OLCUM-1010.md` §③ (yazıcı yazıyor, Değişmez 5 SONRADAN yakalıyordu).

**Seçim: AYRI diff — `denetim/SAHIPLIK-KUR-KAPI-1010.diff`** (3 dosya, LF, BOM yok, CR 0).
**Uygulama sırası: origin/main → `SAHIPLIK-KAPSAM-1010-v2.diff` → `SAHIPLIK-KUR-KAPI-1010.diff`.** KUR tek başına
uygulanmaz (v2'nin kodu üstüne yazıldı). `git apply --check` ölçüldü:
| sıra | sonuç |
|---|---|
| origin/main `38cc8d15` + v2 → KUR | ✓ |
| `8d8e23e3` + v2 → KUR → SESSIZ-7 v2 | ✓ |
| SESSIZ-7 v2 → v2 → KUR | ✓ |
| v2 → KUR → D5-GUN-1010-v2 · D5-GUN-1010-v2 → v2 → KUR | ✓ · ✓ (D5-GUN'un `degismez5` değişikliğiyle kur sınavı da 16/16) |
`D5-GUN-1010-NEG-SONRA.diff` tek başına main'e de uygulanmıyor (`denetle.py:3178`) — benim diff'lerimle ilgisiz, kendi ön koşulu var.

YENİ DOSYALAR: denetim/ARAC-SAHIPLIK-KUR-KAPI-SINAV-1010.py
DEĞİŞEN DOSYALAR: arac/_sahiplik_uygula.py · denetim/ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py
`arac/denetle.py`ye DOKUNULMADI (Değişmez 5 D5-GUN ajanında). Tuz dosyası `gun.py` yalnız İTHAL edildi.

## 1. Kapı
- **Soru (tolerans 0):** yazılacak d·s·v·isg döneminde `gun.gun(f) < gun.gun(kur)` ⇒ KAYIT YAZILMAZ.
  `kur` yamalı kaydın son hâlinden (yama boş `kur:`u dolduruyorsa onun değeri; `kur` SKALER_KORUNAN — dolu kur ezilmez).
- **Kovalar (bu aracın tablosu, `ATLAMA_CIKIS`):** `kur-oncesi` = **2** (BAYAT ailesi, HİÇBİR dosya yazılmaz; `KUR-ONCESI  ad  [dosya]
  kur:… · alan f:…` ADIYLA) · `kur-olculemedi` = **3** (`f`/`kur` `arac/gun.py` ile ayrıştırılamadı ya da muafiyet ölçütü
  yüklenemedi; `KUR-OLCULEMEDI` ADIYLA). ⚠️ Bunlar `_sahiplik_uygula`nın kodlarıdır; denetle §3'te 2 = ölçülemedi —
  hızlı kipte JSON `listesiz_atlama`ya düşer ve denetle onu kendisi çevirir (`sahiplik atlama: kur-oncesi` grubu, ÖLÇÜLEMEDİ).
  Hüküm listesi `kur-oncesi` satırını da tanır (dayanaklı satır ⇒ 0).
- **Tarih kıyası YALNIZ `gun.gun`** (dizgi/datetime yok). MÖ ve yıl 0 sınandı (U3-U5).
- **"Yazılacak dönem" = bugünkü kayıtta AYNEN DURMAYAN (yeni/değişen) dönem;** yama `kur`u değiştiriyorsa BÜTÜN dönemler.
  🔴 Gerekçe ÖLÇÜLDÜ: katı okuma (yazılan dizinin her dönemi) Z5 v4'ü **4 kayıtta durdururdu** — Berezov (kur 1593, f 1592) ·
  Olyokminsk (1635-07-27 / 1635-01-01) · Selenginsk (1665-09-27 / 1665-01-01) · Yakutsk (1632-10-05 / 1632-01-01).
  Dördünün erken dönemi BUGÜN de veride duruyor (Değişmez 5'in 400 g tolerans bandı = KUR-KAPI-OLCUM'un "Yakutsk sınıfı");
  v4 onları değiştirmiyor, yalnız diziyi 1945'e uzatıyor. Yazıcı o dönemi DOĞURMUYOR ⇒ soru Değişmez 5'indir. Koordinatör
  katı okumayı isterse tek satır (`bugun = set()`), ama v4 o zaman 2 verir.
- **`devir_beyani` muafiyeti — KOPYALANMADI:** yamalı kayıt `denetle.degismez5([kayıt])`e verilir; kayıt onun `muaf` listesine
  düşerse muaftır (iki kilit Değişmez 5'in KENDİSİNDE: beyan metni + kur öncesi dönemlerde `kaynak:` yok). D5-GUN'un değişikliği
  olduğu gibi devralınır (D5-GUN-v2 uygulanmış ağaçta sınandı). ⚠️ Değişmez 5 kendi toleransının ALTINDAKİ farkta kilitleri hiç
  değerlendirmez ⇒ o bantta muafiyet kararı YOK, kapı tolerans 0 ile durdurur ve "Değişmez 5 bu farkta karar VERMİYOR" yazar (U11).
  `denetle` yalnız erken dönem bulunduğunda (tembel) ithal edilir; yüklenemezse `kur-olculemedi` (3).
- Sıra: kapsam kontrolünden SONRA, yazım kuyruğundan ÖNCE (kapsam daralan kayıt zaten yazılmaz).

## 2. Sınav — `denetim/ARAC-SAHIPLIK-KUR-KAPI-SINAV-1010.py` (ESKİ = origin/main aracı)
Tam koşu **17/18** — tek KALDI `SON C:\atlas-umit git status` (koşu sırasında D5-GUN ajanı `C:\atlas-umit\denetim`e dosya yazdı:
`ARAC-D5-GUN-SINAV-1010.py`, `D5-GUN-1010*.diff`). D5-GUN-v2'li ağaçta `--gercek-yok` **16/16** (SON dahil).
| kol | beklenen | sonuç |
|---|---|---|
| U1 Mergen eşi yama `{d,f,t}` (qing 1636 < kur 1686), `--yaz` | 2, KUR-ONCESI, dosya aynı | ✓ · ESKİ 0, yazmadı (tesadüfi kalkan) |
| U2 aynı `{f,t,d}` | 2, aynı | ✓ · ESKİ 0, **YAZDI qing 1636** (kusurun kanıtı) |
| U3 kur -2999 / f -3100 | yazmaz (2) | ✓ |
| U4 kur -3100 / f -2999 (genişletme) | yazar (0) | ✓ |
| U5 kur 0000 / f -0001 | yazmaz (2) | ✓ |
| U6 / U6b f == kur | 0 / yazar | ✓ / ✓ |
| U7 devir_beyani + kur öncesi kaynaksız | muaf, yazar, "KUR MUAF" | ✓ |
| U8 devir_beyani AMA kur öncesi dönem kaynaklı (kilit b) | 2 | ✓ |
| U9 bozuk kur `1686-13-01` | 3, KUR-OLCULEMEDI | ✓ |
| U10 bozuk f `1700-02-30` | 3 | ✓ |
| U11 D5 tolerans bandı (kur 1593, yeni f 1592-06-01) | 2 + "karar VERMİYOR" | ✓ |
| U12 bugün aynen duran erken dönem + yeni geç dönem | 0 (sorulmaz) | ✓ |
| U13 yama boş kur'u dolduruyor, mevcut dönem erken | 2 | ✓ |
| U14 hızlı kip JSON | `listesiz_atlama` = [Sinavmergen · kur-oncesi], çıkış 2 | ✓ |
| G1 gerçek, denetle evreni | ADIYLA | ✓ (aşağıda) |
| G2 gerçek, Z5 v4 + SESSIZ-7 v2 | kur-oncesi 0, çıkış 0 | ✓ (uygulandı 3988) |
- KAPSAM sınavı güncellendi (diff'te): kur kapısı için `gun.py`/`denetle.py`/`uret_petek.py` geçici depoya da kopyalanır
  (denetle import anında uret_petek'ten maske sabiti okuyor); K9 artık `KUR-ONCESI` bekler (Mergen eşi tabana ulaşmadan kur'da
  durur); K10 imzasına kur-öncesi adları eklendi, 48 sırada yine TEK sonuç. `--gercek-yok` **89/90** (tek KALDI: aynı dış SON).
- Gerileme (kur yapısı): `ARAC-SAHIPLIK-KAPI-SINAV-1006` **17/17** · `ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009 --gercek-yok` **24/24**.

## 3. Gerçek veri (hızlı kip, origin/main `8d8e23e3` + v2 + KUR, ayrı worktree)
| evren | kur-oncesi | adlar |
|---|---|---|
| denetle evreni (`yer_yama*.js` − Z5 karantinası) | **2** | **Mergen (Nenjiang)** [yer_yama_doguasya.js] kur:1686 · s f:1636-05-15 · **Mersin** [yer_yama_cukurova_isg_0907.js] kur:1671 · d f:1352-01-01; s f:1281-01-01 |
| Z5 v1 karantinası | 0 | (kayıt kapsam/taban yüzünden zaten durur) |
| Z5 v4 + SESSIZ-7 v2 | **0** | çıkış 0, 3988 uygulanır — v4'ü durdurmaz |
kur-olculemedi: 0. Bugün `denetle.py`de yeni grup `sahiplik atlama: kur-oncesi 2` (ÖLÇÜLEMEYEN 196 → 198).

## 4. Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** kapı Mergen'i iki anahtar sırasında da durduruyor; gerçekte 2 kayıt (Mergen · Mersin); v4 temiz; katı okuma v4'ü 4 kayıtta durdururdu.
- **Bulamadım:** Mersin'in `yer_yama_cukurova_isg_0907.js`teki 1281/1352 dönemleri için verilmiş bir hüküm (listeye girmedi ⇒ 2).
- **İstiyorum:** ① "yazılacak dönem = yeni/değişen dönem" okumasının onayı (katısı v4'ü 4 kayıtta durdurur). ② D5-GUN `degismez5`in
  dönüş biçimini (4'lü, `muaf[i][0] == ad`) korusun — kapı muafiyeti oradan okuyor; biçim değişirse kapı `kur-olculemedi` (3) verir, susmaz.

## 5. Temizlik
Worktree'ler (`-kur` · `-kur4` · `-kurb` · `-chk` · `-sure`) kaldırıldı; Temp `kur_*` dizinleri silindi. `--yaz` yalnız geçici depolarda.

## 6. EK SORU — denetle süresi 126 → 157 → 66 sn: hangisi?
**Hüküm: ⓑ — ortam farklı, üç sayı KIYASLANAMAZ.** ⓒ (sorulmayan soru) YOK, ölçüldü.

**Yöntem:** tek worktree `C:\atlas-umit-sure`, taban origin/main `8d8e23e3`, sıra A B B A (A = yamasız, B = v2 uygulanmış),
her koşu öncesi/sonrası CPU yükü ve python/node/git süreç sayısı:
| koşu | çıkış | süre | CPU % önce→sonra · süreç |
|---|---|---|---|
| A1 yamasız | 2 | **72,0 sn** | 40→20 · 5→2 |
| B1 v2 | 2 | **68,0 sn** | 16→14 · 2 |
| B2 v2 | 2 | **65,2 sn** | 16→13 · 2 |
| A2 yamasız | 2 | **64,0 sn** | 20→31 · 2 |
⇒ aynı ortamda yamasız ve yamalı **aynı aralıkta (64-72 sn)**; v2'nin payı (hızlı kip ~6 sn) gürültünün içinde.

**Satır kümesi:** A1 = A2 birebir. A ile B arasında: A'dan çıkan TEK satır `ÖLÇÜLEMEYEN SORU: 1`; B'ye giren 9 satır =
`ÖLÇÜLEMEYEN SORU: 196` + `Ek denetim ✓ hüküm listesi …` + `Ek denetim ! sahiplik atlama sınıfı …` + `listeli (hükümlü) …` + 4 grup
satırı + `toplam 196 = 1 + 60 + 67 + 53 + 15`. "Değişmez"/"Ek denetim" ile başlayan satır A'da 27, B'de 29 (fark yalnız eklenen iki).
Öteki BÜTÜN satırlar (bütün değişmezlerin sayı satırları dahil) A ile B'de BİREBİR aynı ⇒ hiçbir soru düşmedi. (B1 ≠ B2 yalnız
hızlı kip satırındaki saniye yüzünden.)

**Eski sayıların ortamı (transkriptimden):**
- **126 sn** — `C:\atlas-umit-kps-once`, origin/main `68bcd6c0` (yamasız), ~04:36-04:38.
- **157 sn** — `C:\atlas-umit-kps`, `7a613d9e` + KAPSAM v1, hemen ardından ~04:38-04:41. İkisi de aynı anda koşan ağır işlerin
  arasında: KAPSAM tam sınavının gerçek kolu (paralel Z5 koşuları, `git log -L`) ve BAYAT-TABAN önce/sonra gerçek kolları.
- **66 sn** — `C:\atlas-umit-kps`, `48df6bf1` + v1 + v2, ~06:35; benim başka işim koşmuyordu.
⇒ üç farklı taban, üç farklı yük. 126 ile 157 de kendi aralarında yalnız taban ve yamayla değil sıra/yükle de ayrışıyordu;
"v1'in +31 sn'si" diye okunan şey yük farkıydı. v1 raporundaki "126 → 157" cümlesi yanlış bir kıyas sunuyordu — düzeltiyorum.

**KAPSAM 90/90 sınavı süreyi görür mü?** Hayır. 90/90 sınavı v2 yapısında koştu; 157 sn'lik v1 yapısında o sınav YOKTU (v1'de
78/78'lik sınav vardı). v2 sınavı v1 yapısına koşturulsa V1/V2 kolları `denetle.olculemedi_bas` bulamayıp kalırdı (koşturulmadı,
koddan). Ama hiçbir kol denetle'nin **süresini** ölçmüyor (yalnız F4 hızlı kip ≤ 60 sn); yani bu fark sınavın sorusu değil —
sınav tam bu yüzden "geçti" der. Süre sorusu ancak bu bölümdeki aynı-ortam A/B ölçümüyle cevaplanır.
