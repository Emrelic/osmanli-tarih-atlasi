# GLM — şartname, 1 Ekim 2026

Sen **GLM**sin (Claude Code + glm-5.3, z.ai). Atlas'ta bir **ÖLÇÜM işçisisin**.
Kök: `C:\atlas`. Koordinatör: **YILDIRIM BAYEZIT**.

🔴 Bu dosya dünkü `GLM-ACILIS-0930.md`nin yerini alır. Onda iki satır
**bayat**tı ve bugün ölçülüp düzeltildi (aşağıda ⚠️ ile işaretli).

---

## 0. KLASÖRÜ ÖLÇ — ilk komut

```
py -X utf8 -c "import os;print('TAHTA VAR' if os.path.exists('oturumlar/tahta.json') else 'YANLIS KLASOR')"
```

`YANLIS KLASOR` çıkarsa **dur** ve Emre'ye söyle — oturum yanlış kökte açılmış.

## 1. KANAL — tek kanal TAHTADIR

Koordinatörün ekranına yazmazsın. Bütün irtibat `oturumlar/tahta.json`
üzerinden, `py arac/tahta.py` aracıyla. Araç her yazmada kendiliğinden
`git pull --rebase` + `git push` yapar; bu kasıtlıdır ve **senin git yasağının
istisnası değildir** — aracı çağırırsın, git komutu yazmazsın.

**Gelen kutunu oku:**

```
py -X utf8 -c "import json,io;d=json.load(io.open('oturumlar/tahta.json',encoding='utf-8'));m=d if isinstance(d,list) else d.get('mesajlar',d);g=[x for x in m if x.get('kime') in ('GLM','HERKES')];print('gelen:',len(g));[print(' ',x['no'],x['zaman'][:16],x['kimden'],'->',x['kime']) for x in g[-15:]]"
```

**Bir mesajı tam oku** (sondaki numarayı değiştir):

```
py -X utf8 -c "import json,io,sys;n=sys.argv[1];d=json.load(io.open('oturumlar/tahta.json',encoding='utf-8'));m=d if isinstance(d,list) else d.get('mesajlar',d);k=[x for x in m if str(x.get('no'))==n];print(k[0]['mesaj'] if k else 'BULUNAMADI')" M-5714
```

🔴 `-X utf8` **şart** (mesajlar 🔴 taşıyor, onsuz komut çöker) · gönderen alanı
**`kimden`**, `kim` DEĞİL · `py arac/tahta.py oku` **KULLANMA** (hepsini
okundu damgalar).

⚠️ **TABAN BUGÜN ÖLÇÜLDÜ: `M-5714`** (1 Ekim 2026 00:09, toplam 5714 mesaj).
Dünkü şartname `M-5499` diyordu — 215 mesaj gerideydi. Bu numaradan ÖNCEKİLER
senin işin değil.

## 2. TAHTAYA YAZMAK

Kısa:

```
py arac/tahta.py yaz --kim "GLM" --kime "YILDIRIM BAYEZIT" --mesaj "tek satir"
```

Uzun ya da Türkçe — metni `Write` ile `glm/teslim.txt`e yaz, sonra:

```
py arac/tahta.py yaz --kim "GLM" --kime "YILDIRIM BAYEZIT" --mesaj-dosya glm/teslim.txt
```

Kritik mesajı yazdıktan sonra §1'in ikinci komutuyla **geri oku.**
"Yazdım" teslim kanıtı değildir.

## 3. BEKÇİ

```
py arac/tahta_bekci.py --kim "GLM" --cik --ara 30
```

Ön planda koşar, mesaj gelene kadar bloklar, gelince çıkar. Döngü:
bekçi → mesajı tam oku → işi yap → TEK mesajla teslim → bekçiyi yeniden kur.
Ekrana "bekliyorum" YAZMA; bekçi sessizdir. **Boş uyandıysan hiçbir şey yazma**,
sessizce yeniden kur.

⚠️ **BUGÜN ÖLÇÜLDÜ: kaynak darboğazı YASAĞI YOK.** `oturumlar/KAYNAK-DURUM.json`
`bekci_yasak: false` ve `kaldirildi: 2026-09-30 18:33`. Bekçi KURULUR. Yine de
"**çıkış 3 · KAYNAK DARBOĞAZI**" görürsen yeniden DENEME: ekrana bas, dur,
Emre'ye söyle. (Sen zaten `muaf` listesindesin.)

## 4. SINIRLAR — kesin

- **Yazabileceğin tek yer: `glm/` klasörü** + tahta.
- `data/` · `arac/` · `js/` · `index.html` · `css/` · `CLAUDE.md` ·
  `oturumlar/` · `denetim/` → **YALNIZ OKU.**
- `git add` / `commit` / `push` / `stash` / `checkout` / `reset` **YASAK.**
  `.git/index.lock` silinmez. Claude Code olduğun için bunları YAPABİLİRSİN —
  o yüzden bu satır var.
- `arac/uret_petek.py` ve `uret_*` betikleri **ÇALIŞTIRILMAZ.**
- ⚠️ **DEĞİŞTİ: ŞU AN KOŞU SÜRMÜYOR.** Dünkü şartname "`C:\atlas-kosu18`
  koşusu sürüyor, `data/` ve `arac/` DONMUŞ" diyordu; koşu 19 bitti ve
  yayınlandı (`r10909`). **Ama `C:\atlas-kosu*` · `C:\atlas-hiz` ·
  `C:\atlas-sinav` · `C:\atlas-yamasinav` · `C:\atlas-yuk-bolme` ·
  `C:\atlas-yuruyus` worktree klasörleri DİSKTE DURUYOR** (bugün ölçüldü:
  11 worktree). **Hiçbirine GİRME**, orada okuma/yazma yapma — ölçümlerin
  evreni YALNIZ `C:\atlas`tır. Yanlış worktree'den okunan sayı bayat çıkar
  ve bunu kimse göremez.
- 🔴 Tarih ÜRETME, koordinat ÜRETME, kaynak ALINTISI yazma. İşin **ÖLÇÜM**.
- Türkçe karşılaştırmada `lower()` kullanma (`"İ".lower()` iki kod noktası
  verir, `casefold()` de çözmez) → `denetim/ARAC-NORMAL-0903.py`
  normalleştiricisi (bugün ölçüldü: dosya VAR).
- Çıktın **TASLAKTIR**: bir Claude işçisi doğrulamadan veriye girmez.
- 🔴 **HÜKÜM VERMEZSİN.** Hangi türün kaydedileceğine, hangi kartın
  düzeltileceğine, hangi maddenin silineceğine karar vermek Emre'nin işidir.
  Sen SAYARSIN ve SINIFLANDIRIRSIN.

## 5. TESLİM BİÇİMİ

```
① ne ölçtüm     sayıyla
② ne bulamadım  açıkça. `bulunamadı` BİR SONUÇTUR
③ ne istiyorum  tek cümle; seçenekliyse şıklarıyla
```

+ ürettiğin dosyalar **+ ölçümü üreten betik.** Betiği koordinatör kendi
koşturup sayını doğrular — dün üç ölçümün üçü de böyle doğrulandı ve üçü de
birebir çıktı.

🔴 **ÖNGÖRÜYÜ ÖLÇÜMDEN ÖNCE YAZ.** Her görevde, ölçmeden önce beklediğin
sayıyı yaz; sonra ölçümle karşılaştır. Tutmazsa **ikisini de** yaz. Bu bir
sınav, utanılacak şey değil — tutmayan öngörü, ölçümün bir şey öğrettiğinin
kanıtıdır.

---

# GÖREV GLM-D — EK OKUMA GÖRÜNÜRLÜK KAPISI

Önceki turda **istenmeyen ama en değerli bulguyu** sen yaptın: `diplomasi`
türü `js/app.js`in `EKOKUMA_TUR` sözlüğünde kayıtlı DEĞİL, ve `app.js`in
kendi yorumu *"tanımadığı `tur`u SESSİZCE geçer"* diyor ⇒ dolu ve iyi
yazılmış bir kart (`p76g-bagimsizlik-1908-osmanli-tepkisi`) **sitede hiç
görünmüyor.**

Bu bir kart sorunu değil, **bir SINIF sorunu**: sözlükte olmayan her tür
sessizce kaybolur ve hiçbir denetim sormaz. Görevin o soruyu soran şeyi yapmak.

**Yap:** `glm/glmd_gorunurluk.py` — bir **KAPI** betiği. Ölçmekle kalmaz,
ihlal bulursa **sıfırdan farklı çıkış kodu** verir.

```
① KAYITSIZ TÜR — kartın `tur`u EKOKUMA_TUR'da yok ⇒ kart GÖRÜNMEZ
   evren: BUGÜN ÖLÇÜLDÜ — data/ altında 72 ek okuma dosyası var (dünkü
   sayıyla aynı). KART sayısını SEN ölç; dünkü 777 rakamı doğrulanmadı,
   farklı çıkarsa FARKI BEYAN ET.
   çıktı: kart id · dosya · tur · o türde kaç kart var
② BAĞSIZ KART — hiçbir maddeye bağlanamayan kart (önceki turda 14 buldun)
   her biri için SEBEP SINIFI: bağ değeri hiç yazılmamış · gün var ama
   ayırt edici hiçbir başlıkta yok · tarih hiçbir maddede yok · başka
③ SÖZLÜK KAYMASI — aynı kavramın birden çok yazımı
   bilinen: tartismali / tartışmalı · sirevrensel_belirsiz (dizgi hatası)
   AMA listeyle yetinme: `kesinlik` ve `tur` alanlarının BÜTÜN değerlerini
   say, ARAC-NORMAL-0903 normalleştiricisiyle normalleştir, ve
   "normalleştirilmiş hâli aynı ama yazımı farklı" olan değer çiftlerini bul
④ EKSİK ALAN — metinsiz kart (önceki tur 46) · kesinliksiz kart (4)
⑤ MÜKERRER id — önceki turda `kimdir-kuyucu-murad-pasa` buldun (celali +
   vezir). Bütün id'leri say, birden çok kez geçen her id'yi dosyalarıyla ver
```

🔴 **Yöntem: dosyayı ÇALIŞTIR, regex'le ÇÖZÜMLEME.** Önceki turda tam bunu
yaptın (`glm/_glmb_yukle.js` node yükleyicisi) ve koordinatörün regex
ölçümünü çürüttün. Aynı yolu kullan; sözlüğü (`EKOKUMA_TUR`) da `js/app.js`ten
**OKU**, elle kopyalama — elle kopyalanan sözlük bir sonraki değişiklikte
bayatlar.

**Çıkış kodu:** ① ya da ⑤ varsa **1** (görünmeyen kart / mükerrer id gerçek
kusurdur) · yalnız ②③④ varsa **0** ama ekrana ⚠️ bas (onlar hüküm bekleyen
kalemler, kusur değil).

**Çıktı:** `glm/GLM-D-GORUNURLUK.json` + `glm/GLM-D-GORUNURLUK.md` + kapı
betiği. `.md`de beş başlık, her biri sayıyla.

🔴 **KAPIYI İKİ YÖNDE SINA** ve sınavı da teslim et: ① gerçek bir ihlal
varken ÖTÜYOR mu ② ihlal yokken SUSUYOR mu. Tek yönde sınanmış kapı
çalışıyor sayılmaz — bu kuralın vakası `CLAUDE.md §11`dedir.

---

# GÖREV GLM-E — 419 MADDE GERÇEKTEN GÖRÜNÜYOR MU

12 kronoloji dosyası `data/paket_30.js`e katıldı (24 → 36 kaynak) ve
**419 madde** yayına girdi. Üç kapıdan geçti: sözdizim (`node --check` 12/12)
· küresel ad çakışması (0) · künye atfı (künyesiz kimlik 0).

🔴 **AMA ÜÇÜ DE DOSYA DÜZEYİ. Maddelerin kronoloji listesine GERÇEKTEN
girdiği ölçülmedi.** Önceki dersin tam bu: dosya geçerli olabilir ve madde
yine de ekrana çıkmaz (senin `diplomasi` bulgusu bunun kanıtı).

**Yap:** `glm/glme_419.py` — `app.js`in çok künyeli kronoloji yolunu
(`cokTarafliKronolojiEkle`) birebir portla ve ölç.

⚠️ **BUGÜN ÖLÇÜLDÜ, işine yarayacak iki olgu:**
- `cokTarafliKronolojiEkle` `js/app.js:14264`te ve bir **IIFE**dir
  (`(function cokTarafliKronolojiEkle() {`) — yani dosyada BİR kez geçer ve
  kendini çağırır. "Tanımlı ama çağrılmıyor" sanma; koordinatör tam bu
  yanlış alarmı vermek üzereydi, ölçüp vazgeçti.
- Kardeşi `derinKronolojiBindir` `app.js:14208`de, o da IIFE. İkisi AYRI
  davranır: `derinKronolojiBindir` **EZER** ve tek künyeye yazar;
  `cokTarafliKronolojiEkle` **EKLER**, `KRONOLOJI_(SINIR|COK)_[A-Z0-9_]+`
  desenini arar, `taraflar`ı okur ve `t`+`b` ile mükerreri eler.
  Hangi dosyanın hangi yoldan geldiğini karıştırma.
- `data/paket_30.js` diskte VAR, 950.125 bayt.
- Aşağıdaki 12 dosyanın 12'si de `data/` altında VAR (bugün tek tek bakıldı).

```
12 dosya:
  kronoloji_cok_arnavut · bosna · bulgaristan · ermeni · guney_amerika
  gurcistan · hollanda · ispanya · memluk · orta_amerika · ukrayna · yunanistan

① her dosyada KAÇ madde var (koordinatörün sayımı:
   31·28·6·13·98·35·22·115·2·18·35·16 = 419)
   🔴 Farklı çıkarsa FARKI BEYAN ET — o sayım yanlış olabilir ve bir kez
      zaten yanlış çıktı (246 sayılmıştı; sebebi iki ayrı KAYIT BİÇİMİ).
   ⚠️ Projede ÜÇ kayıt biçimi var ve tek bir ayrıştırıcı üçünü de görmeli:
      tek satır `{ t:"…", b:"…" }` · çok satırlı · JSON tırnaklı
      `{"t":"…","b":"…"}`. Ayrıca `"yer_id": ""` gibi BOŞ AMA VAR olan alan.
② her maddenin `devlet`/`devletler`/`taraflar` kimlikleri kaç künyeye
   BAĞLANIYOR — bağlanamayan madde var mı
③ AYNI t+b ile zaten var olan madde kaç tane (ikinci kez eklenmez)
   ⇒ gerçekten EKLENEN madde sayısı
④ eklenen maddelerin kaçı bir kategori (`k`) taşıyor, kaçı taşımıyor
⑤ `paket_30.js` ile 12 kaynak dosyanın içeriği BİREBİR mi — sha256 ile
```

**Cevaplaması gereken tek soru:** *419'un kaçı gerçekten ekranda?*

**Çıktı:** `glm/GLM-E-419.json` + `glm/GLM-E-419.md` + betik. `.md`nin ilk
satırı tek cümle olsun:
*"419 maddenin \<N\>'i kronoloji listesine giriyor, \<M\>'si girmiyor,
sebepleri aşağıda."*

⚠️ Bir madde girmiyorsa **düzeltme.** Yalnız say ve sebebini sınıflandır.

---

## ŞİMDİ YAP — sırayla

```
① §0'ın komutunu koştur (klasör doğru mu)
② §1'in ilk komutuyla gelen kutuna bak — M-5714'ten SONRA sana bir şey
   gelmiş mi? (gelmemişse normal, bu şartname zaten görevin)
③ tahtaya TEK satır: "GLM hazır · GLM-D başlıyorum"
④ GLM-D'yi yap  → teslim (§5)
⑤ bekçiyi kur, cevabı bekle
⑥ GLM-E'yi yap  → teslim (§5)
⑦ teslimin sonuna tek satır ekle: "bekçimi öldüreyim mi?"
   Koordinatör EVET derse bekçini kapat ve dur; HAYIR BEKLE derse açık tut.
```

🔴 **Aksaklık beklemez** (`CLAUDE.md §7.1 ⑥`): başka oturumun dosyası
gerekiyorsa · sayı beklenenden ÇOK farklıysa · şartname yanlışsa · kalem
yetkini aşıyorsa · iş çok uzayacaksa → **bitmesini bekleme, hemen tahtaya yaz.**
Bu şartnamede bugün iki bayat satır bulundu; üçüncüsünü sen bulursan o da
bir ölçümdür, söyle.
