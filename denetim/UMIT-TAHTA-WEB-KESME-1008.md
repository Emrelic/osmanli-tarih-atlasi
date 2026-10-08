# UMIT-TAHTA-WEB-KESME-1008 — tahta sunucusu kutuyu taşıyabilir mi, uyandırma ne olacak

**Oturum:** UMIT (yazıcı) · **tarih:** 8 Ekim 2026 · **evren:** `origin/makine/tahta-web` uç `20c5cea7` (8 commit)
**Dal:** `makine/umit-tahtaweb` (worktree `C:/atlas-umit-tahtaweb`) · **KOD YAZILMADI**, `arac/` ve `denetim/ARAC-*` dosyalarına dokunulmadı.
**Öngörü (②):** ölçümden ÖNCE yazıldı — bu rapordan önce `tahta_sunucu.py` bile okunmamıştı (scratchpad `ongoru.txt`, 8 Ekim, worktree'nin açıldığı an).

## 0. ÖNGÖRÜ ve FARK — ② (sunucu statik dosya servis ediyor mu)

| | Öngörü (ölçümden önce) | Ölçülen |
|---|---|---|
| ② | yalnız `/tahta*` JSON uçları; statik dosya/kutu YOK; `GET /kutu/...` → 404; güven ~%80 | ✅ **TUTTU.** |

Fark yok. Bir ayrıntı öngörümde yoktu ve ölçümde çıktı: 404 gövdesi geçerli uçları **listeliyor**
(`GET /tahta · /tahta/makineler · /tahta/oku · POST /tahta/isaretle · /tahta/islem · /tahta/yaz`) —
yani "kutu yok" sunucunun kendi cevabında da okunuyor.

## ① NE ÖLÇTÜM

### 1.1 Dal envanteri (`arac/tahta_sunucu.py`, 802 satır)
```
port             8788 (acici 8787'de) · ag.json `tahta_sunucu: "<IP>:<port>"` · --port ile ezilir
bağlama          0.0.0.0, ThreadingHTTPServer, HTTP/1.0, daemon_threads
uçlar (6)        POST /tahta/yaz · GET /tahta/oku · POST /tahta/isaretle · POST /tahta/islem
                 GET /tahta (HTML) · GET /tahta/makineler (makine defteri)
kapılar          yalnız özel ağ/loopback (ipaddress.is_private|is_loopback) → dışı 403
                 X-Atlas-Jeton ya da ?jeton= → hmac.compare_digest → yanlış 401
                 sabit eylem tablosu EYLEMLER → tanımsız yol 404 (yol, dosya yoluna HİÇ geçmiyor)
numara           SUNUCU verir: T._yaz_hazirla/_yaz_ekle, KILIT (threading.Lock) + dosya kilidi
                 (T._Kilit) altında; numara BELLEKTEN DEĞİL KAYITTAN (en büyük+1) → yeniden
                 başlamada kaldığı yerden sürer
tek yazıcı       üç katman: ① `<tahta>.sunucu` kilidi + 20 sn nabız (ikinci sunucu → çıkış 4)
                 ② kilit başkasına geçerse YAZMAYI REDDEDER (503, kod 4), istemci yerele DÜŞMEZ
                 ③ farklı makinelerdeki iki AYRI kaydı sunucu göremez → İSTEMCİ yakalar: her cevapta
                 `sunucu` bloğu (makine · tahta_imza · son_no), imza değişirse/numara gerilerse bağırır
makine defteri   X-Atlas-Makine beyanı + ölçülen IP; ag.json'daki `makineler` içinden hiç gelmeyen
                 → "GÖRÜLMEDİ — kapalı ya da BAŞKA SUNUCUDA" (beyan doğrulanmaz, IP ölçümdür)
gövde tavanı     POST 1 MB (ölçtüm: 2 MB → 413)
```
`tahta_kesme.py` (417 satır) geri dönüşü: kesme ÖZEL index'te (`GIT_INDEX_FILE`: read-tree → silme +
.gitignore bloğu → write-tree → commit-tree), `update-ref <dal> <yeni> <eski>` karşılaştır-değiştir
(5 deneme), dosya diskten SİLİNMEZ; sonuç `git show --name-status`/`ls-files`/`check-ignore`/boyut ile
DOĞRULANIR. `geri --uygula` aynı yolla dosyaları git'e **diskteki güncel hâliyle** geri alır (kesmeden
sonra yazılan mesaj kaybolmaz).

### 1.2 Dört sınav — bu makinede koşturuldu (8 Ekim, UMIT, `py`, Python 3.13.7)
| Sınav | Çıkış | Süre |
|---|---|---|
| `ARAC-TAHTA-SUNUCU-SINAV-1004.py` | **0** — "temiz" | 10,8 sn |
| `ARAC-TAHTA-SUNUCU-COKLU-SINAV-1004.py` | **0** — "temiz" (Y1–Y5, 16 satır OK) | 9,7 sn |
| `ARAC-TAHTA-KESME-SINAV-1004.py` | **0** — "temiz" (K1–K10, K8: dal arada ilerledi → yeniden kuruldu, araya giren commit kaybolmadı) | 8,1 sn |
| `ARAC-TAHTA-MAKINELER-SINAV-1004.py` | **0** — "temiz" (M1–M8'') | 21,6 sn |

İddia sayıları (SUNUCU 27 · ÇOKLU 16 · KESME 21 · MAKİNELER 12 = 76) **1006 raporundan alıntıdır**, ben
yeniden saymadım; çıkış kodları ve "temiz" sonuç satırları benim koşumdan. **Bağımsız tekrar: çıkış kodları aynı.**

### 1.3 ② — sunucuyu çıplak koşturup kutu yollarını sordum (127.0.0.1:18791, geçici ag.json/tahta, işi bitince öldürüldü)
```
GET /tahta                                   200      GET /kutu                            404
GET /tahta/oku                               200      GET /kutu/giden                      404
GET /kutu/giden/parti-emrelic-0085/          404      GET /kutu/giden/.../paket.json       404
GET /arac/tahta.py                           404      GET /tahta/../arac/tahta.py (as-is)  404
POST /tahta/yaz 2 MB                         413      Range: bytes=0-10 → 200 (Range yok sayılıyor)
```
Kodla birebir uyuşuyor: statik dosya servisi **YOK**; `_gonder` gövdeyi **belleğe** kurup
`Content-Length` ile yolluyor (akış yok), `Range`/`ETag` yok, gzip yalnız >2 KB JSON/HTML için.
**Cevap: bugünkü sunucu kutuyu TAŞIYAMAZ.** Ama tasarım buna **kapalı değil** (bkz. § 3.1).

### 1.4 Önceki denetim — var, okudum (`C:/atlas/denetim/TAHTA-WEB-DENETIM-1006*.md`, 264 satır)
Hüküm **KUSURLU, tek durdurucu: K1** — `kes --uygula`, kesme yollarından biri commitlenmemişken depoyu
YARIM bırakıyor ve `geri --uygula` kurtarmıyor (`arac/tahta_kesme.py:306`, `git rm --cached` **`-f`'siz** ve
dönüş kodu atılıyor). Yama `denetim/TAHTA-WEB-DENETIM-1006-kesme-kirli-yol.diff` (39 satır) +
sınav kolu `…-sinav-kirli-kol.diff` (179 satır) hazır. **Doğruladım: dal ucunda `:306` HÂLÂ `-f`'siz**
(`g("rm", "--cached", "-q", "--ignore-unmatch", "--", *YOLLAR)`) ⇒ **yama uygulanmamış, K1 dalda açık.**
Gerçek 5.845 mesajla ileri+geri+ileri: kayıp 0, sayaç M-5846'dan sürüyor. K3 (makineler arası
ulaşılabilirlik) orada da **ölçülemedi** — bu rapor da ölçemedi (§ 2).

### 1.5 Kutu kusurunun bu makinedeki izi
- `C:/atlas-umit` (UMIT'in klonu): `git ls-files kutu` = **0**, `kutu/` diskte **yok**, `ClaudEmre-kutu/` **yok**.
- `.git/info/exclude` bu klonda `kutu` satırı **taşımıyor** (ortak git dizini `C:/atlas/.git`).
  ⇒ koordinatörün "exclude depoda değildir, hiçbir makineye gitmez" bulgusu **ikinci yönden doğrulandı:**
  sebep satırı yalnız EMRELIC'te var; UMIT klonu hem dosyayı hem sebebi göremiyor.

### 1.6 ③ — uyandırma için ölçülenler
- `ListAgents`: 93 oturum; **idle ve erişilebilir 4 makine + koordinatör** (HAVVA `e14ee7`, KASA `f84b9d`,
  LAB `9fa38c`, YILDIRIM `05fe6b`); **88 oturum offline** (eski UMIT/HAVVA/KASA/LAB kopyaları dâhil — **aynı
  ad iki satırda var**: HAVVA `e14ee7` idle, HAVVA `648cde` offline). UMIT'in kendisi bu oturum (`f81a26`).
- `tahta_bekci.py` başlığı (yazılı, ölçülmüş tavanlar): Monitor `timeout_ms` ≤ **30 dk, sessizce yenilenir**;
  kabuk arka planı `--cik` ≤ **2 sa** (SABAH-1004 A6: 09:05'te **CANLI 0 · BİTMİŞ 11**).
- Sunucu bekçinin ÖMRÜNÜ değiştiremez: bekçi, sunucu ne olursa olsun, harness'in çocuk sürecidir. Sunucu
  yalnız **yoklamanın maliyetini** düşürür (bugün `_getir` 17 MB'lık tahtayı okumak yerine `son_no` soruyor).

## ② NE BULAMADIM — "bulunamadı" bir sonuçtur

1. **K3 (makineler arası ulaşılabilirlik): BULUNAMADI / ÖLÇÜLEMEDİ.** Bu makinede `oturumlar/ag.json` **yok**
   (gitignore) ⇒ EMRELIC'in LAN adresini, jetonu, güvenlik duvarını bilmiyorum. Yalnız 127.0.0.1 ölçüldü.
   `kutu`yu taşıma kararı bu ölçüme bağlı: sunucuya erişemeyen makine kutuyu da göremez.
2. **462 MB / 0085=16 MB / 0084=28 MB ve `exclude:20` yorumu: DOĞRULANAMADI** — `kutu/` bu makinede yok.
   Rakamlar koordinatörün; ben yeniden sayamadım.
3. **LAN hızı ölçülmedi.** Yazılmış bir `/kutu` ucu yok; "462 MB kaç dakikada iner" sorusu cevapsız.
   (Python `http.server` + HTTP/1.0 için tipik bir sayı bilsem de **ölçmeden yazmıyorum.**)
4. **`CronCreate`/zamanlanmış görevin boşta oturumu uyandırıp uyandırmadığı ÖLÇÜLMEDİ** (§ 3.2). Aracı gördüm,
   çalıştırmadım; aşağıdaki karşılaştırma bir **çıkarım**, ölçüm değil — etiketli.
5. **Canlı `KAYNAK-DURUM.json`.** Dalın kopyası `bekci_yasak:false · kod KOSU · kaldirildi 2026-10-04 22:00`
   diyor; sizin canlı dosyanız farklı olabilir. **Bekçi kurmadım, `kaynak_durum.py ac` çalıştırmadım.**
6. Sınavların hiçbiri `/kutu` ya da dosya akıtma yolunu sınamıyor (yok): "sunucu sınavı temiz" ≠ "kutuyu
   taşır". 1006'nın deyişi: *denetim var ≠ o soruyu soruyor.*

## ③ NE İSTİYORUM — tasarım (kod YOK)

### 3.1 Kutu taşıma: aynı sunucu, İKİ yeni salt-okunur uç — ya da kardeş süreç
```
GET /kutu/liste?parti=0085      → {"kok_var": true, "parti": "...", "dosyalar":[{ad, boy, sha256, mtime}],
                                   "git_izli": 0, "neden": "paketler depoda değil (gizli kanal), buradan çekilir"}
GET /kutu/dosya?parti=..&ad=..  → AKIŞ (parça parça), Content-Length, Range, ETag=sha256
```
- **Yol güvenliği yapıdan gelir, süzgeçten değil:** kök ag.json'daki `kutu_kok`tan (istekten değil); `parti`
  ve `ad` istekten gelen **anahtarlardır, yol DEĞİL** — sunucu önce `liste`yi (kök altındaki
  `parti-*/` taramasından) kurar, istenen `ad` listede yoksa 404. `../`, mutlak yol, sembolik bağ
  (`realpath` kök altında kalmalı) ayrıca reddedilir. Mevcut desenle aynı: *sabit tablo, istekten gelen
  metin yola geçmez.*
- **Salt okunur.** Yükleme (HAVVA → EMRELIC) bugünkü `POST /tahta/yaz` 1 MB tavanında **metin ölçüm
  çıktısı** için yeter; görsel yükleme bu tasarımın DIŞINDA (ayrı karar).
- **Belleğe yüklemeyen akış** şart: `_gonder` bugün gövdeyi baştan sona belleğe kurar; 16–28 MB'lık parti
  ve 462 MB toplam için ayrı bir akış yolu gerek (`Range` ile yarım kalan çekim sürsün).
- **Kimlik:** aynı jeton + aynı özel-ağ kapısı. Günlük `iz`i yol+yöntemle sınırlı, sorgu (jeton) **loga
  girmiyor** — koduyla doğruladım (`iz = "%s %s" % (yontem, yol.path)`).
- **İstemci:** `arac/kutu_cek.py --parti 0085 --hedef <yerel, gitignore'lu dizin>` — sha256 doğrular, yarım
  kalanı sürdürür, **"liste boş" ile "kutu yok"u ayrı basar** (HAVVA'nın yaşadığı tam buydu).
- **Ölçüt (koordinatörün):** paketler GitHub'a HİÇ gitmeden öteki makineden okunabilir. ✅ tasarım karşılıyor;
  ❌ **bugün ölçülemez** (K3 + uç yok).
- **Sınav (iki yönde, öngörüsü önce mühürlenecek):** liste dışı ad → 404 · `../` · mutlak yol · sembolik
  bağ · jetonsuz 401 · özel ağ dışı 403 · `Range` · sha uyumsuzluğu · 28 MB'ı çekerken sunucu RSS'i **şişmiyor** ·
  ters yön: izinli parti **200 ve sha eşit**.
- **Ek maliyet tahmini (ölçüm değil):** ~150–200 satır sunucu + ~100 satır istemci + sınav. Önce K3.

**Görünmeme SEBEBİ görünür olsun** (asıl kusur): `/kutu/liste` dosyalar boşken bile `neden` alanını doldurur,
`tahta_bekci`/`tahta.py` cevabındaki `sunucu` bloğuna `kutu: {kok_var, parti_sayisi, toplam_mb}` eklenir ⇒
bir makine "boş" gördüğünde "neden boş" sorusunu **sunucudan** sorabilir; `.git/info/exclude`a bağımlı kalmaz.
Depoya hiçbir görsel girmez; istenirse yalnız **içeriksiz bir işaret dosyası** (adı: `kutu/OKU-BENI.md`,
"paketler depoda değil; sunucudan çekilir: …") — o ayrıca bir karardır (aşağıda).

### 3.2 Uyandırma — iki seçeneğin karşılaştırması
| | (a) 2 saatte bir yeniden kurmayı garanti eden dış tetik | (b) işçi bekçi kurmaz, görev doğrudan mesajla gelir |
|---|---|---|
| Ölçülen dayanak | Monitor tavanı 30 dk/sessiz yenileme, kabuk tavanı 2 sa, A6: CANLI 0/BİTMİŞ 11 | `ListAgents`: 4 makine + koordinatör idle ve ulaşılabilir; dün gece HAVVA'ya tam şartname gitti, tam teslim geldi, **tahta/git kullanılmadı** (koordinatör ölçümü) |
| Temel sorun | 🟡 **çıkarım:** yeniden kurmak bir **araç çağrısıdır**; yalnız o oturumun KENDİ turunda yapılır. Windows Görev Zamanlayıcı yeni bir `claude` süreci başlatabilir, **mevcut boşta oturuma tur ekleyemez.** Yani dış tetik, tur üretmek için yine bir **mesaj** gerektirir — (b)'nin kanalı. Oturum içi `CronCreate` ise **ölçülmedi.** | Mesaj `send_message`/`SendMessage` ile gider; bekçi süreci **yok**, ömrü yok. Kırılgan nokta: **ad çözümleme** (aynı ad iki satırda, 88 offline satır) ve alıcı offline iken teslim |
| Yan maliyet | Her yeniden kurma = bir bağlam turu (Emre'nin "bekçi zırt pırt yeniden kuruluyor" şikâyetinin aynısı); tetikçi başka bir arıza noktası | Tahta artık **kayıt**: görev mesajla gelir, işçi sonucunu sunucuya `yaz`ar (numara + iz); uyandırma işini tahta yapmaz |
| Sunucu ile ilişki | Sunucu geldi diye değişmez (A6 haklı) | Sunucu **kayıt defteri** olarak tam yerine oturur; makine defteri "son istek" ile idle'ı da gösterir |

**Öneri: (b)**, iki ek tedbirle:
1. Tahta **yazma** yolu kalır (kayıt/iz), **uyandırma** yolu `send_message`dir; şartnameler "bekçi kur" yerine
   "görev mesajla gelir, sonucu `tahta.py yaz` ile bırak" der.
2. Bekçi yalnız **aktif görev içinde, kısa süreli** Monitor olarak kalır (çıkış 3 kapısı/`KAYNAK-DURUM` aynen);
   boşta oturum bekçi kurmaz (bu `tahta_bekci.py` başlığındaki mevcut kuraldır, yeni bir şey değil).
3. Yan ürün: sunucunun makine defteri **idle'ı da gösterir** (`son_istek_sn_once`) — koordinatör "kim canlı"
   sorusunu `ListAgents`+defterden iki ayrı kaynaktan görür, biri yanıldığında ötekiyle çapraz bakar.
   **Önce şunu ölçmek ucuz:** `CronCreate` ile 1 dakikalık bir iş kurup boşta oturumun uyanıp uyanmadığı —
   uyanıyorsa (a) bir yedek olarak yeniden düşünülür. Yapmadım; karar sizde.

### 3.3 Sıra önerisi
```
1. K3 ölçümü           koordinatör/HAVVA'dan: EMRELIC'te sunucu açıkken ag.json'lı bir makineden
                       `curl -H "X-Atlas-Jeton: …" http://<emrelic>:8788/tahta/makineler`  → 200 mü?
2. K1 yaması           `…-kesme-kirli-yol.diff` + `…-sinav-kirli-kol.diff` dalda uygulansın (1006: yamalı
                       alet 29/29, yamasız 3 HATA) — kesme gününden ÖNCE
3. kutu uçları         yalnız K3 yeşilse ve Emre "evet" derse (aşağıda)
4. (b) şartname sadeleşmesi  koordinatör kendi şartnamelerinde, kod gerekmez
```

## KARARLAR

### Emre'ye gidecek (mahremiyet / kapsam — ne ben ne koordinatör)
1. **Ekran görüntüleri LAN'da jetonla servis edilsin mi?** GitHub'a gitmez, ama bir kapı daha açılır;
   görüntüler "gizli kanal" sayılmıştı. Özel ağ + jeton + yalnız `kutu/giden/parti-*` + salt okunur önerilir.
2. **Sunucu hangi makinede?** EMRELIC ağ değiştiriyor (ev `192.168.0.x` / eczane `192.168.1.x`); kutu da
   EMRELIC'te. EMRELIC evdeyken eczane makineleri ne tahtayı ne kutuyu görür. (Taşınabilirlik `ag.json`
   ile var; **hangi makine** kararı Emre'nin.)
3. **Depoya içeriksiz işaret dosyası** (`kutu/OKU-BENI.md`) eklensin mi — "paketler depoda yok, şuradan
   çekilir"? Görüntü girmez; yalnız sebep görünür olur. (`exclude` satırını silmek **önerilmiyor**.)
4. **Kesme günü** (`tahta.json`/`TAHTA.md` git'ten çıkış) — Emre'nin onayıyla koordinatör seçer.

### Koordinatör (teknik, benim önerim)
5. K1 yamasının dala alınması + sınav kolu (kesmeden önce şart).
6. Uyandırma = (b); şartname metinlerinin sadeleşmesi.
7. K3 ölçümünün kimde olduğu (bende `ag.json` yok).

## DEĞİŞEN DOSYALAR
- `denetim/UMIT-TAHTA-WEB-KESME-1008.md` (bu rapor) — **tek dosya.**
- Geçici: `C:/atlas-umit-tahtaweb` worktree, `makine/umit-tahtaweb` dalı (`origin/makine/tahta-web` ucundan);
  sunucu süreçleri ve geçici dizinler temizlendi. `main`e **push yok.**

— UMIT, 8 Ekim 2026
