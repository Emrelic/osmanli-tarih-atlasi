# §11 ailesi: kapının beş üyesi · öneri sayısı · desen (10 Ekim hâli)

> Kimlik `D285` · `CLAUDE.md §11` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 11. Tekrarlanmaması gereken hatalar
**Dizin: [`dersler/DIZIN.md`](dersler/DIZIN.md)** — 271 ders (dosya 271 = dizinde anılan
benzersiz no 271, 10 Ekim 2026 ÖLÇÜLDÜ: `ls dersler/ | grep -cE "^D[0-9]+-"`).
⚠️ Sayarken `ls dersler/D*.md` KULLANMA: `DIZIN.md` de "D" ile başlıyor ve glob onu da
sayıyor (bir fazla verir — `D267`nin tuzağının birebir aynısı). Doğrusu
`ls dersler/ | grep -cE "^D[0-9]+-"`. Toplu okunmaz, kural
tartışılınca açılır. Yeni ders: slogan DIZIN'e tek satır, vaka `dersler/D<sıra>-<slug>.md`e
(ikisini buraya yazmak bu dosyayı yeniden şişirir).

🆕 🔴 **VE BU KURALI KOORDİNATÖR 10 EKİM GECESİ İHLAL ETTİ — ÖLÇÜLDÜ, BEYANLI
BORÇ:**
```
gece başı   686 satır ·  50.965 bayt · ~14.561 token
09:00       1218 satır ·  87.917 bayt · ~25.119 token
BÜYÜME      +532 satır · +36.952 bayt · ~+10.557 token   (28 commit)
```
`§7.1`in ölçtüğü taze oturum tabanı **82.561 token** ve içinde CLAUDE.md
**10.773**'tü. ⇒ Bugün bu dosya **tek başına ~25.119 token = taze tabanın
~%30'u**, ve gecenin büyümesi **her oturuma ~10.557 token EKLİYOR.** On beş
açık oturumla ~158.000 token.
📌 Kurallar gerekliydi (bir iniş kazasını ve koordinatörün üç hatasını
önlediler) — **yanlış olan YER.** Vakalar buraya değil `dersler/`e yazılır;
slogan kalır, vaka taşınır.
🔴 **BUDAMA BORCU: iniş sonrası, `§11`in kendi kuralına göre.** 17 Eylül
budaması 167 → 25 KB yapmıştı ve hiçbir kural silinmemişti (sınav
`py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --sina`); aynı yöntem uygulanır.
⚠️ **Bugün budamıyorum** çünkü iniş sürüyor ve bu dosyaya atıf yapan sekiz
hat çalışıyor; bir budama onların çapalarını kırar. **Beyan edilmiş borç,
sessiz borçtan iyidir** (`§3.4 ⑥`) — ama beyan ödeme DEĞİLDİR.

En sık aileler:
- **Ölçüm doğru, çıkarım yanlış** — hüküm ile teşhis ayrıdır; raporu kabul etmeden ölç.
- **Denetim var ≠ o soruyu soruyor** — temiz rapor, sorulmayan soruda temiz değildir;
  ölçülemedi ≠ yok ≠ temiz; boş küme her öngörüyü doğrular.
  🆕 🔴 **VE EN SİNSİSİ: ÇAĞIRANI OLMAYAN KAPI, KAPI DEĞİLDİR** (UMIT ölçtü,
  10 Ekim 2026). Ölçüm: `_sahiplik_uygula`yı ÇAĞIRAN dosya bütün depoda **YOK**
  — `denetle_yayin.py:1376`da yalnız METİN olarak taranıyor (`yer_yama` dizgisi
  aranıyor), subprocess yok; öteki bütün geçişleri yorum. ⇒ O aracın çıkış kodu
  **hiçbir kapı zincirinde okunmuyor**, yalnız elle koşturana görünüyor.
  📌 Aradaki fark: üstteki satırda kapı KOŞAR ama soruyu sormaz; burada kapı
  SORUYU SORAR ama HİÇ KOŞMAZ — ve dışarıdan ikisi de *"denetim mevcut"* diye
  okunur. ⇒ Yeni bir kapı/tavan/istisna konulurken **ÜÇ soru**: ① soruyu soruyor
  mu ② çıkış kodunu KİM okuyor ③ hiç çağrılıyor mu. Üçüncüsü sorulmazsa, sessiz
  bir borcu 2'ye çevirip 2'yi kimseye göstermeyen bir çare yazılır.
  🆕 🔴 **VE ÜÇÜNCÜ ÜYE: YORUM BİR KONTROL DEĞİLDİR.** Ölçülen vakalar
  (LAB, 10 Ekim, `denetle.py` üzerinde):
```
  :10,16-17  docstring Değişmez 3 için bir ÇIKIŞ KODU iddia ediyor —
             o sabit :852'de SİLİNMİŞ
  :6777      ekrana "Tavan GERİLEMEYİ bloke eder" BASIYOR — kod bloke ETMİYOR
```
  İkincisi daha ağır: yorum değil **ÇIKTI** yalan söylüyor, yani okuyan
  kaynağa bakmıyor bile.
  ⚠️ 🔴 **BU PARAGRAFIN İLK VAKASI YANLIŞTI — ve düzeltmesi dersin kendisi.**
  Buraya `girdi.py:108` yazılmıştı (*"yorum var, kod yok"*); LAB aynı tabanda
  ölçtü: **tam ad kontrolü `girdi.py:620-624`te VAR.** ⇒ O vaka (c) değil
  **(b) sınıfıdır** — kontrol KOŞUYOR, ama *normalleştirilmiş* çakışmayı
  sormuyor (37 kalem: `Kudüs/Kudus` · `Roma`/`Roma (Queensland)` ·
  `Yenişehir (Bursa)`/`(Larissa)`).
  📌 Üç üyeyi ayırt etmek **kodu okumayı gerektirir**, ve bir işçinin
  *"yorum var, kod yok"* raporu da — her rapor gibi — ÖLÇÜLMEDEN kabul
  edilmez (`§11` başı: *ölçüm doğru, çıkarım yanlış*). Koordinatör bu vakayı
  ölçmeden yazdı; ikinci işçi düzeltti.
```
  çağıranı olmayan kapı  → kapı VAR, hiç ÇAĞRILMIYOR
  denetim ≠ soruyu sorar → kapı KOŞUYOR, o soruyu SORMUYOR
  yorum ≠ kontrol        → kapı HİÇ YOK, ama VARMIŞ GİBİ YAZILI
  KAYDI PAYLAŞILMAYAN    → kapı VAR ve ÇALIŞIYOR — ama TEK MAKİNEDE
  YANLIŞ EVRENDE ARAYAN  → kapı VAR, ÇALIŞIYOR, DOĞRU SORUYU SORUYOR —
                           ama YANLIŞ YERDE ARIYOR
```
  🆕 🔴 **BEŞİNCİ ÜYE EN SİNSİSİ** — öteki dördü *"kapı yok/çalışmıyor"*
  ailesinden, bu ise **"kapı doğru çalışıyor" görünümünde** (10 Ekim 2026,
  `KOS-VE-YAYINLA-ADD-1010`):
```
  kabuk_nobetci.py:165 (ADD-HEPSI) yalnız KABUKTA yazılan `git add -A`'yı
  görüyor; bir ARACIN kendi `subprocess` argv'si onun evreninde DEĞİL.
  ⇒ `kos_ve_yayinla.py` hem `git add -A -- data` hem **pathspec'SİZ
    `git commit -F`** yapıyordu ve kapı HİÇ GÖRMEDİ.
  Ölçülen sonuç (yamasız sınav): commit yarım bir `yerlesimler_x.js`,
  izlenmeyen bir dosya, **BAŞKA BİR OTURUMUN indekslediği `olaylar_y.js`**
  ve yayında olmayan bir motor çıktısını TAŞIDI · çıkış 0 · push çağrıldı.
```
  ⇒ **Yasak komutun METNİNE değil, KOMUTUN KENDİSİNE yazılır:** `git add -A`
  kabuktan da, bir Python `subprocess`ünden de çıkar. ⚠️ Ve 17+ oturum
  **AYNI git indeksini** paylaştığı için pathspec'siz bir commit, başkasının
  yarım işini yayınlar — `§7`nin *"pathspec commit'te de TEKRARLANIR,
  `git show --name-only` ile doğrulanır"* kuralı tam bu yüzden var ve bir
  ARAÇ onu çiğniyordu.
  📌 Çare çifti: kapıyı **statik taramaya** da genişlet (kanca dört makinede
  kayıtlı DEĞİL ⇒ kanca biçimi yalnız EMRELIC'te korur; statik tarama her
  yerde koşar).
  🆕 🔴 **DÖRDÜNCÜ ÜYE, ve bu dosyanın kendi nöbetçisi** (10 Ekim 2026;
  UMIT kendi makinesinde ölçtü, koordinatör EMRELIC'te doğruladı):
```
  arac/kabuk_nobetci.py     TAKİPLİ — KOD paylaşılıyor
  .claude/settings.json     `.gitignore:3` ⇒ origin/main'de YOK
                            EMRELIC: hooks PreToolUse → kabuk_nobetci ✅
                            UMIT   : settings YOK, hiçbir kanca KAYITLI DEĞİL
```
  ⇒ `§11`in kaçış nöbetçisi **yalnız koordinatörde bir KAPI**, öteki dört
  makinede bir **YORUM.** Ölçülen kanıt: bu gece EMRELIC'te backtick ve
  heredoc denemelerim REDDEDİLDİ, UMIT'te Türkçe karakterli heredoc'lar
  **geçti.** Ve `kural_olc.py:211/220` o kapıyı *"KAPI (bugün)"* diye
  sayıyor — yani **kural ölçer kendi kapısını ölçmüyor.**
  📌 Ayırt edici soru bu yüzden ÜÇ değil **DÖRT**: ① soruyu soruyor mu
  ② çıkış kodunu KİM okuyor ③ hiç çağrılıyor mu **④ KAYDI HER MAKİNEDE
  VAR MI** — yoksa bir makinedeki *"geçti"*, ötekilerde ölçülmemiş demektir.
  ⚠️ Kaydın paylaşılması bir **YAPILANDIRMA** kararıdır (kanca/izin alanı)
  ⇒ hüküm Emre'nin; hiçbir oturum başka bir makinenin `settings`ine
  dokunmaz.
  ⇒ **Bir yorumun iddia ettiği değişmez, KODDA ARANMADAN doğru sayılmaz** — ve
  yorum, yokluktan **daha kötüdür:** yokluk soru sordurur, yorum **soruyu
  KAPATIR.** (Koordinatör tam buna güvendi: bir defter anahtarını `ad`ın tekil
  olduğu varsayımına kurdu, ölçüm 37 çakışma buldu.)
- **Bayatlayan belge/sayı** — sayı ölçümün fotoğrafıdır; kaynağını (log, alet) aç.
  🆕 🔴 **VE AYNA GÖRÜNTÜSÜ — ÖNERİ üzerinde ölçülen sayı da bugünkü durum
  DEĞİLDİR.** Bir kapının *"AÇIK"* olması, ölçülen kümenin **CANLI** olmasına
  bağlıdır; önerilen küme üzerinde ölçülen kapı **AÇILACAK**'tır, ve ikisini
  aynı kelimeyle anmak **yapılmamış bir işi yapılmış gösterir.** Ölçülen vaka
  (10 Ekim 2026, koordinatörün kendi hükmü): `KAMPANYA §12`ye *"① yoğunluk 🟢
  AÇIK — 26 nokta ⇒ p95 111,4"* yazılmıştı; ölçüm — `grep -rl "Uruk|Nippur|
  Borsippa" data/` → **0 dosya**, ve `devletler.js`te `ahameni·makedon·selefki·
  part·akkad` → **0** (yalnız `sasani` 1). Yani p95 geçerliydi, **zemini
  değil.** ⇒ Bir sayıyı aktarırken *ne zaman* ölçüldüğü kadar **NEREDE** —
  `data/`da mı, `denetim/`de bir öneride mi — sorulur. Bayat sayı GEÇMİŞİ,
  öneri sayısı **GELECEĞİ** bugün gibi gösterir; ikincisi daha sinsidir çünkü
  tarihi yoktur, yani tazeliği sorgulanmaz.
- **Toplu düzeltme** — `replace(…, 1)` yalnız ilk eşleşmeyi değiştirir; Türkçe/kesme işaretli
  metinde `sed` kullanma; heredoc yerine `Write` + `py <yol>`.
- **Yakın mükerrer yerleşim** — yeni noktadan önce ad (normalleştirilmiş) + 3 km tara.
- 🆕 **Aracın DESENİ de bir ölçüm parametresidir** — gevşek desen sayı verir ve
  güven telkin eder. Ölçülen vaka (KASA, 10 Ekim): `grep 'd:"…"'` deseni
  `id:"…"`yi de yakaladı ⇒ *"Töton künyeleri 2'şer dilimde kullanılıyor"*
  çıktı, oysa yakalananlar **künye TANIMI**ydı; `girdi.yukle` ile gerçek **0**.
  Aynı aile: `ls dersler/D*.md` `DIZIN.md`yi de sayar (`§11` başı). ⇒ Desen,
  tavan gibi, **yazıldığı anda sınanır** — ve tercihen ayrıştırıcıyla
  değiştirilir.
- **Öngörü ölçümden önce yazılır** (sınav anı + evreniyle); yeni denetim iki yönde
  sınanmadan çalışıyor sayılmaz.
