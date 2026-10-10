# TAHTA-ISTEMCI-1010 + TAHTA-BEKCI-1010 — tahta.py sunucu istemcisi ve bekçinin sunucu kaynağı

**Taban:** `ff4a832d5` (origin/main, 10 Ekim). `apply --check` taze `origin/main` = `8851a042c` üzerinde de
geçti: hedef dosyalar `ff4a832d5..8851a042c` arasında DEĞİŞMEDİ. İki yama AYRI dosyalara dokunuyor: her biri
tek başına da, ikisi birlikte de uygulanıyor (ölçüldü).
**Hiçbir şey commitlenmedi/push edilmedi.** Gerçek checkout'lara (C:\atlas, C:\atlas-tahta, C:\atlas-lab-denetim)
yalnız bu teslim dosyaları kopyalandı (`denetim/` altına, commitsiz).

| Yama | Değiştirdiği dosyalar | Boy |
|---|---|---|
| `denetim/TAHTA-ISTEMCI-1010.diff` | `arac/tahta.py` · `.gitignore` | 432 satır · 20.468 bayt |
| `denetim/TAHTA-BEKCI-1010.diff` | `arac/tahta_kaynak.py` · `arac/tahta_bekci.py` · `arac/bekci_olc.py` | 313 satır · 16.248 bayt |

Sınavlar (yeni dosya, yamanın İÇİNDE DEĞİL — ayrı kopyalanır):
`denetim/ARAC-TAHTA-ISTEMCI-SINAV-1010.py` · `denetim/ARAC-TAHTA-BEKCI-SUNUCU-SINAV-1010.py`

## İNDİRME (landing) — sırayla

```
# hedef deponun kökünde (origin/main tabanlı ağaç):
git apply --check denetim\TAHTA-ISTEMCI-1010.diff
git apply --check denetim\TAHTA-BEKCI-1010.diff
git apply denetim\TAHTA-ISTEMCI-1010.diff
git apply denetim\TAHTA-BEKCI-1010.diff
py denetim\ARAC-TAHTA-ISTEMCI-SINAV-1010.py        # 0 bekleniyor (gerçek sunucu yoksa G* ÖLÇÜLEMEDİ → 2)
py denetim\ARAC-TAHTA-BEKCI-SUNUCU-SINAV-1010.py   # 0 bekleniyor
git add -- arac/tahta.py .gitignore arac/tahta_kaynak.py arac/tahta_bekci.py arac/bekci_olc.py \
           denetim/ARAC-TAHTA-ISTEMCI-SINAV-1010.py denetim/ARAC-TAHTA-BEKCI-SUNUCU-SINAV-1010.py
```
- Sınavların gerileme kolu eski sürümü `git show ff4a832d5:…` ile alır (HEAD DEĞİL — yama inince HEAD = yeni olurdu).
- 🔴 **Sunucunun kendisi (`C:\atlas-tahta`, pid 2108) bu yamayla değişmez**, ama `tahta_sunucu.py` `tahta.py`yi
  içe aktarır: C:\atlas-tahta'ya inerse sunucu YENİDEN BAŞLATILANA kadar eski kodu koşar. Yeni kod sunucu
  sürecini etkilemez (yönlendirme yalnız `main()`de; sınav I1–I5 yamalı sunucuyla koştu).
- İner inmez etki: `oturumlar/ag.json`u (`jeton`+`tahta_sunucu`) OLAN makinede `tahta.py` ve bekçi
  sunucuya gider. Bugün ölçüldü: C:\atlas ve C:\atlas-lab-denetim'de ag.json YOK ⇒ orada davranış birebir eski.

---

## A) TAHTA-ISTEMCI-1010 — `arac/tahta.py`

### Tasarım
- **Yönlendirme yalnız `main()`de.** `tahta_sunucu.py` `T.yaz(a)`yı doğrudan çağırıyor; yönlendirme `yaz()`ın
  içinde olsaydı sunucu KILIT altında kendine istek atar, kilitlenirdi.
- ag.json'da `jeton` + `tahta_sunucu` varsa:
  `yaz` → `POST /tahta/yaz` · `oku`/`bekleyen`/`teyitsiz`/`kimler` → `GET /tahta/oku` · okundu damgası →
  `POST /tahta/isaretle` · `teyit`/`tamam`/`kapat` → `POST /tahta/islem` (kapsam notu: islem istenmemişti; eklenmeseydi
  sunucuda numaralanmış mesaja yerel `teyit` "BÖYLE MESAJ YOK" derdi).
  `oku --kim X` sunucuda süzülür (`kim` gönderilir; takma ad çözümü sunucuda, `adlar`/`toplam` cevaptan).
  Açık `--kaynak origin|yerel` verilirse sunucuya GİDİLMEZ (kullanıcının seçimi).
- **ag.json YOK ⇒ tek satır basılmaz, tek istek atılmaz** — araç birebir eskisi (gerileme R1 ölçtü).
  ag.json VAR ama eksik/bozuk ⇒ `⚪ sunucu yok (…), yerele düştüm` basılır, git yolu.
- **Düşüş ADIYLA:** ulaşılamaz / zaman aşımı (10 sn) / 5xx / 403 / 404 ⇒
  `⚠️ sunucu ulaşılamadı (<sebep>), yerele düştüm — …` ve BUGÜNKÜ git yolu (`yaz(a)`, çıkış kodu onun 0/1/2'si).
- **401 kararım: ADIYLA BAĞIR + YERELE DÜŞ + KUYRUĞA AL.** `🔴 JETON YANLIŞ (HTTP 401) — … ag.json jeton: N
  karakter · …son4 — ağ TAMAM, sorun jetonda ⇒ ag_ayarla.py --sina`. Gerekçe: jetonu düzeltmek insan işi;
  o arada mesaj kaybolmamalı. Kuyruk jeton düzelene kadar boşaltılmaz (T5), her komutta yine bağırır.
- **Düşülmeyenler:** `400` (sunucu reddetti: HERKES kapısı, `--yanit` yok) ⇒ kodu döner (2); `503 kod 4`
  (sunucu çatışması) ⇒ 4 döner — `tahta_sunucu.py` sözleşmesi ("düşmek bölünmeyi derinleştirir").
  Docstring'e `4` satırı eklendi; 0/1/2/3 anlamları DEĞİŞMEDİ.
- **Mükerrer koruması (`yerel_kimlik`):** her `yaz` `<makine>-<uuid12>` kimliğini İLK denemede de gönderir
  (zaman aşımında sunucu yazmış olabilir). Düşüşte yerel kayda `yerel_kimlik` alanı yazılır ve gövde
  `oturumlar/tahta_kuyruk.json`a (gitignore, `_Kilit` altında, atomik) girer. Sunucu dönünce **bir sonraki
  sunucu komutu (yaz/oku/islem) kuyruğu ÖNCE boşaltır**, aynı kimlikle; `ey_yaz` o kimliği gördüyse yazmaz
  (`mukerrer`). Kuyruk kaydı yalnız 200'de silinir; 400 (kalıcı ret) kuyruktan çıkarılır ve ADIYLA basılır.
- `X-Atlas-Makine: platform.node()` (ag_ayarla ile aynı). Vekil (proxy) BİLEREK kapalı (`ProxyHandler({})`):
  jeton özel ağ dışına çıkmaz. Jeton hiçbir çıktıya/dosyaya yazılmaz (T6, G4).
- Stdlib (urllib, gzip, uuid, platform). `duyur.py`nin okuduğu `"<no> yazıldı"` satırı sunucu çıktısından aynen basılır.

### Sınav — `ARAC-TAHTA-ISTEMCI-SINAV-1010.py` → **25/25, çıkış 0** (iki tam koşu, ikisi de 0)
Evren: uzaksız kum havuzu git depoları · yamalı `tahta_sunucu.py` 127.0.0.1:**8799**'da (kendi `--ag/--tahta/--gunluk`) ·
istemci KOMUT SATIRINDAN alt süreç.
- R1 ag.json YOK: eski (`ff4a832d5`) ↔ yeni, 19 komut (yaz ×6 dahil red/eksik argüman, oku ×2, teyit/tamam/kapat,
  bekleyen, teyitsiz, kimler, argümansız, `--kaynak bozuk`, tanımsız komut) → **çıkış kodları + normalize
  çıktı birebir** (tanımsız komut `__doc__` basar ⇒ orada yalnız kod kıyaslandı) · son tahta.json birebir · kuyruk doğmadı.
- I1 yaz → 0, sunucu kaydında (sunucu izi + yerel_kimlik), istemcinin yerel tahtası/HEAD'i değişmedi ·
  I2 oku → sunucudan GERİ OKUNDU, okundu damgası sunucuda · I3 teyit · I4 bekleyen · I5 ACİL HERKES → 2, düşmedi.
- T1 yanlış jeton → 401 "JETON", düşüş beyanlı, mesaj yerelde + kuyrukta (kod 2: havuzun upstream'i yok = ÖLÇÜLEMEDİ, beklenen) ·
  T1c oku "JETON" + düşüş · T5 jeton yanlışken kuyruk boşaltılmadı ·
  T2 sunucu KAPALI → düşüş beyanlı, mesaj kaybolmadı · T3 ASILI sunucu (dinler, cevap yok) → 11 sn'de zaman aşımı, beyanlı ·
  T4 sunucu dönünce kuyruk boşaldı, düşüş mesajı sunucuda TEK kopya · T4b aynı kimlik ikinci kez → "ZATEN vardı", sayı artmadı ·
  T6 jeton istemci dosyalarına sızmadı.
- G1–G6 gerçek sunucu (yalnız GET; sınav içinde GET dışı yöntem ENGELLENİR): istemci okuma yolu 200 ·
  yanlış jeton 401 ve "JETON" · makineler 200 · jeton çıktıda yok · gerçek tahta.json özeti sınav boyunca değişmedi.

### Mevcut tahta sınavları — ÖNCE / SONRA (worktree, ag.json yok)
| Sınav | Önce | Sonra |
|---|---|---|
| ARAC-TAHTA-CGNAT-SINAV-1009 | 0 · 15/15 | 0 · 15/15 |
| ARAC-TAHTA-GIT-YARIM-SINAV-1006 | 0 · 25 OK | 0 · 25 OK |
| ARAC-TAHTA-KAPI-SINAV-1003 | 0 · 9 OK | 0 · 9 OK |
| ARAC-TAHTA-SUNUCU-YAZMA-SINAV-1009 | 0 · 24/24 | 0 · 24/24 |
| ARAC-TAHTA-TEMIZ-AGAC-SINAV-1010 | 0 · 6 OK | 0 · 6 OK |
| ARAC-TAHTA-ULASTI-SINAV-1006 | 0 · 10 OK | 0 · 10 OK |
| ARAC-TAHTA-ORIGIN-SINAV-1006 | 1 · 2 OK / 5 HATA | 1 · 2 OK / 5 HATA (AYNI) |
| ↳ aynısı, `KAYNAK-DURUM.json` `bekci_yasak` yalnız MY worktree'de geçici `false` | 0 · 20/20 | 0 · 20/20 |

OK/HATA satırları birebir; farklar yalnız geçici yol · saat · sha. ORIGIN'in 1'i YAMA ÖNCESİ de var: sebep
`oturumlar/KAYNAK-DURUM.json` `bekci_yasak: true` (KOSU) ⇒ bekçi çıkış 3. Yasak (yalnız scratch worktree'lerimde,
sonra `git checkout` ile geri alındı) kaldırılınca önce/sonra 20/20.

---

## B) TAHTA-BEKCI-1010 — bekçi sunucudan okur

### Doğrulanan mevcut hâl
`tahta_bekci.py` → `tahta_kaynak.Okuyucu` → `git fetch` (özel ref `refs/bekci/<AD>`) + `rev-parse/cat-file` +
yerel birleşim; `--fetch-ara` varsayılan 60 sn; damga `kaynak · fetch_ok · fetch_hata · fetch_ms · fetch_son_basari`
alanlarını zaten taşıyor — DOĞRU.

### Tasarım
- `Okuyucu(…, sunucu=<ag ayarı>, sunucu_ara=0)`: ilk okuma `GET /tahta/oku?hepsi=1` (origin kolunun ilk okumasıyla
  AYNI kapsam — `--cik`+`son_dosya` boşluk teslimi bozulmasın), sonra her tur yalnız `son_no=<en büyük no>`
  (bellekte ayna; anahtar `(no, kimden, zaman)`), ∪ yerel (origin kolundaki gibi). Kaynak `"sunucu"`.
- ag.json tahtanın yanında aranır (`dirname(TAHTA)/ag.json` — `--tahta` sınav dikişiyle tutarlı). YOKSA durum
  sözlüğü, banner, damga **birebir eski** (`sunucu*` alanı bile eklenmez; R1b ölçtü).
- `--kaynak sunucu|origin|yerel` (yeni değer `sunucu`; ag.json varken `origin` = eski git kolu, açıkça) ·
  `--sunucu-ara SN`.
- **④ Sunucu ölümü bekçiyi öldürmez:** her ağ hatası `_sunucu_oku` içinde yutulur; o tur BUGÜNKÜ git koluna
  düşülür; damga `kaynak: "git"` (git de düştüyse `"yerel"`) + `kaynak_not: "sunucu düştü (N tur): <sebep>"` +
  `sunucu_ard: N` + `sunucu_ok: false`; stderr'de `🔴 SUNUCU DÜŞTÜ (N. ardışık tur)` (ilk · metin değişince · her 10.)
  ve dönüşte `✓ SUNUCU YENİDEN ÇALIŞIYOR`. Bilinçli fark: koordinatörün "N turdan sonra" eşiği yerine **1. turdan
  itibaren** beyan ediliyor (sessiz pencere yok); N damgada sayı olarak duruyor. Stdout'a hiçbir teşhis düşmez (kimseyi boşuna uyandırmaz).
- `bekci_olc.py`: `sunucu` kaynağı `origin` kadar sağlıklı sayılır (aksi hâlde her sunucu bekçisi için
  "🔴 SUNUCU okuyan nöbetçi — GÖRMEYEBİLİR" yanlış alarmı basardı); `git` kaynağı kırmızı + not ile basılır.
- ⑤ `--toplu` döngü mantığına dokunulmadı; sunucu kolunda sınandı (B2).

### ② YOKLAMA ARALIĞI — ÖLÇÜM (karar koordinatörün)
Gerçek sunucu `100.108.173.121:8788` (LAB→LAB, tailnet), tahta 5.926 mesaj / 17,7 MB. 30 istek, 1 sn arayla, yalnız GET:

| Sorgu | medyan | p95 | max | tel bayt (gzip) | dönen |
|---|---|---|---|---|---|
| `limit=1` | 68,2 ms | 74,2 | 161,8 | 2.205 | 1 |
| `limit=20` | 71,6 ms | 75,2 | 77,5 | 29.261 | 20 |
| `limit=100` | 76,9 ms | 86,3 | 93,6 | 89.550 | 100 |
| **`son_no=<son>` (boş tur — bekçinin tipik yoklaması)** | **66,8 ms** | 76,9 | 87,1 | **200** | 0 |
| `son_no=<son-20>` (20 yeni) | 74,3 ms | 77,8 | 168,8 | 29.261 | 20 |
| `son=20` (n=3) | **1.154 ms** | 1.193 | 1.193 | **5.628.404** | **5.926 = TAMAMI** |

🔴 **`/tahta/oku` `son` parametresini TANIMAZ** (o `GET /tahta` HTML'inin). `son=20` tahtanın tamamını
(5,6 MB gzip, 1,15 sn) döndürüyor. Doğrusu `limit=N` ya da `son_no=M`; bekçi `son_no` kullanıyor.
Aynı kusur `ag_ayarla.py --sina`da var (`/tahta/oku?son=1` → her sınamada tam tahta) — DOKUNMADIM, açık iş.
Gecikmenin kaynağı: 8799 sınav örneğinde boş yoklama **1 mesajlık tahtada da 57,6 ms**, 5.926 mesajlıkta 70,8 ms
⇒ ~58 ms tahtadan bağımsız sabit (TCP gecikmeli-ACK/Nagle olabilir, AYRIŞTIRILMADI), tahtaya bağlı kısım ~13 ms.

Git kolu (Okuyucu'nun BUGÜNKÜ yolu, ayrı `--shared` klonda, GitHub'a): ilk fetch 20,8 sn (ısınma), sonra
**fetch 928–1.024 ms** (değişiklik yokken; 4 tur) · blob değişince `cat-file`+`json.loads` **+399 ms**.
⇒ boş tur: sunucu ~67 ms / 200 B · git ~1.000 ms (+400 ms ayrıştırma). Bekçi açılışı sunucu kolunda bir kez 5,6 MB / ~1,2 sn.

İstek yükü (bekçi başına bir yoklama/tur):

| | 5 sn | 10 sn | bugünkü 60 sn |
|---|---|---|---|
| 5 makine × 1 bekçi | 60/dk (1/sn) | 30/dk | 5/dk |
| 5 makine × 10 bekçi | 600/dk (10/sn) | 300/dk (5/sn) | 50/dk |
| boş-tur trafiği (50 bekçi) | ~2 KB/sn | ~1 KB/sn | — |

KILIT doluluk ÜST SINIRI (her isteğin 70 ms'si kilit altında olsa): 10/sn → %70, 5/sn → %35. Gerçek kilit süresi
ÖLÇÜLMEDİ; tahtaya bağlı ~13 ms'nin kilit içinde olduğu varsayılırsa 10/sn → ~%13.
**Seçtiğim varsayılan:** `--sunucu-ara 0` = her turda bir yoklama; tur sıklığı `--ara` (varsayılan **60 sn,
DEĞİŞMEDİ**) ⇒ yük bugünkü fetch sıklığıyla aynı, kimse aralık değiştirmedikçe hiçbir şey artmaz. "Anlık" için
bekçi `--ara 5` (ya da 10) ile kurulur; sunucu kolunda bu git'e hiç gitmez (git kolu `--fetch-ara 60`la korunur).

### ③ `POST /tahta/isaretle` — ölçülen davranış
Kod (`ey_isaretle`): `m["okuyan"][kim] = zaman` — anahtar YALNIZ istekteki `kim` (oturum ADI); makine başlığı
damgaya HİÇ girmez; tek global kayıt. 8799'da ölçüldü (B3): `OTURUM X`@MAKINE-1 → yeni=1 · `OTURUM X`@MAKINE-2 → yeni=0 ·
`OTURUM Y`@MAKINE-2 → yeni=1 · okuyan = {OTURUM X, OTURUM Y}.
⇒ **Damga OTURUM ADI başına, makine başına DEĞİL** — koordinatörün istediği "oturum başına" ile uyumlu, şu iki
kayıtla: ① aynı adı taşıyan iki oturum damgayı paylaşır (`kimlik`/UUID kullanılmıyor; tahtanın bilinen ad
çakışması sınıfı) ② `oku --yeni` süzgeci bu damgaya bakar. Görüşüm: `tahta.py oku` için güvenli (oraya bağladım —
bugünkü yerel damganın birebir karşılığı). **Bekçiye BAĞLAMADIM:** bekçi bugün de damga basmıyor; bekçi okumaz,
uyandırır — uyandırmayı "okundu" saymak oturum mesajı görmeden `--yeni`den düşürürdü.

### Sınav — `ARAC-TAHTA-BEKCI-SUNUCU-SINAV-1010.py` → **14/14, çıkış 0**
Evren: yerel BARE origin + klonlar (uzak yalnız bare) · yamalı sunucu 127.0.0.1:8799 (uzaksız git havuzunda) · bekçi
gerçek alt süreç `--ara 1`.
- R1 ag.json YOK, eski (`ff4a832d5`) ↔ yeni: aynı çıkış kodu + birebir stdout · damga anahtarları aynı, `kaynak: origin`,
  `sunucu*` alanı yok · stderr `[BEKCI]` durum satırları aynı.
- B1 banner+damga `kaynak: sunucu`, sunucuya yazılan mesaj stdout'a düştü · B4 sunucu öldürüldü → bekçi YAŞIYOR,
  bare origin'e yazılan mesajı git kolundan gördü, damga `kaynak: git` + `sunucu düştü (2 tur)` + `sunucu_ard 2`,
  stderr'de ADIYLA, stdout temiz · B5 sunucu yeniden açıldı → `kaynak: sunucu`, "YENİDEN ÇALIŞIYOR", yeni mesaj uyandırdı,
  eskisi ikinci kez uyandırmadı (aynı süreç) · B2 `--toplu 3` → `[BEKCI] 2 yeni: …` tek satır · B6 yanlış jeton →
  `kaynak: git`, not "JETON", bekçi koşuyor · B3 isaretle ölçümü (yukarıda).

### Mevcut bekçi sınavları — ÖNCE (pristine origin/main worktree) / SONRA (yamalı worktree)
| Sınav | Önce | Sonra |
|---|---|---|
| ARAC-BEKCI-NABIZ-SINAV-1003 | 1 · 10 OK / 1 HATA (2a) | 1 · 10 OK / 1 HATA (2a) — AYNI |
| ARAC-BEKCI-KIMLIK-SINAV-1006 `--kok <worktree>` | 0 · GEÇTİ | 0 · GEÇTİ (farklar yalnız PID/yol) |
| ARAC-TAHTA-ORIGIN-SINAV-1006 (yasak kaldırılmış) | 0 · 20/20 | 0 · 20/20 |

NABIZ 2a ("9 saat sessiz + süreç ayakta → ASILI", dönen BITMIS) YAMA ÖNCESİ de kırık — bu işin dışı, açık iş.
`ARAC-BEKCI-KOSU8C/KOSU9/SAHTEMOTOR/YARIYAZIM` koşu (motor) nöbetçisi sınavları, `tahta_bekci` değil — koşturulmadı.

---

## Gerçek sunucuya (8788) giden BÜTÜN istekler — hepsi GET, 0 POST
| Ne | İstek | Adet |
|---|---|---|
| İstemci sınavı, 2 tam koşu × | `GET /tahta/oku ?kim,limit=3` (doğru jeton) | 2 |
| | `GET /tahta/oku ?limit=1` (yanlış jeton → 401) | 2 |
| | `GET /tahta/oku ?limit=1` (yanlış jeton, istemci okuma yolu → 401) | 2 |
| | `GET /tahta/makineler` | 2 |
| ② ölçümü | `GET /tahta/oku ?limit=1` ×30 · `?limit=20` ×30 · `?limit=100` ×30 · `?son_no=5926` ×30 · `?son_no=5906` ×30 · `?son=20` ×3 | 153 |
| **Toplam** | | **161 GET** |

Yan etki (sunucunun KENDİ işi, benim yazımım değil): GET'ler sunucunun günlüğüne `KABUL`/`RED (jeton)` satırı ve
makine defterine (`tahta.json.makineler.json`, beyan = bu makinenin `platform.node()`'u) son okuma damgası düşürür.
`tahta.json` özeti sınav ve ölçüm pencerelerinde DEĞİŞMEDİ (`8aebb317…` önce = sonra). Pencereler dışında tahta
başka oturumların gerçek yazımlarıyla değişti (ilk bakış `e9b3883a…`, ben henüz istek atmamışken).
`C:\atlas-tahta`ya hiçbir dosya yazmadım; ag.json yalnız okundu. Jeton hiçbir yere yazılmadı/basılmadı
(yalnız açılış incelemesinde son 4 hane, maskeli).
Git ölçümü: `C:\atlas`tan `--shared --no-checkout` scratch klon (C:\atlas'a yazmaz; `refs/bekci/OLCUM` C:\atlas'ta YOK — ölçüldü),
GitHub'dan fetch o klona; sonra silindi.

## Açık işler / ÖLÇÜLEMEDİ
1. **ÖLÇÜLEMEDİ:** gerçek sunucuda istek başına KILIT süresi (yalnız uçtan uca ms ölçüldü); 58 ms sabitin ayrıştırılması.
2. **ÖLÇÜLEMEDİ:** başka makineden (tailnet üzerinden gerçek ağ) gecikme — ölçümler LAB→LAB.
3. Düşüşte `teyit/tamam/kapat` YEREL yazılır, **kuyruğa ALINMAZ** (yalnız `yaz` kuyruklu). Düşüş kuyruğundaki `--yanit M-x`
   yerel numarayı taşır; sunucuda yoksa 400 → kuyruktan çıkarılır ve ADIYLA basılır.
4. Düşüş = bugünkü git yolu: sunucu kaydı ile git'teki `tahta.json` ayrı numaralanır (sunucu git'e push etmiyorsa
   iki ayrı tahta). Sunucu tarafında mükerrer yok (yerel_kimlik); git tarafındaki kopya ayrıca durur.
5. `ag_ayarla.py --sina` `/tahta/oku?son=1` ile TAM tahtayı çekiyor (5,6 MB) — `limit=1` olmalı. Dokunulmadı.
6. Sunucu imza/numara geri gitmesi denetimi (`tahta_sunucu.py` başlığındaki `tahta._sunucu_denetle`) main'de yok; bu yama da eklemedi.
7. ORIGIN sınavı `KAYNAK-DURUM` yasağı varken her makinede 1 döner (yama öncesi de) · NABIZ 2a yama öncesi de kırık.
8. `isaretle` damgası oturum ADINA bağlı; aynı adı taşıyan iki oturum damgayı paylaşır.
