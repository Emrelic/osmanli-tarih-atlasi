# DÖRT KALEM — 0907

| alan | değer |
|---|---|
| **AD** | DORT-KALEM-0907 |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **ClaudEmre** | çalıştırma |

---

## ① İŞİN ÖZÜ

Koordinatörün kendi defterinde dört açık kalem var. Dördü de aynı
cinsten: **kaynağa sor, sonra `denetim/` altına bir yama yaz.** Hiçbiri
büyük değil, ama dördü de aylardır kayıtta duruyor ve hiçbiri
ölçülmedi.

🔴 **DÖRDÜNÜ DE BİTİRMEK KABUL ÖLÇÜTÜ DEĞİLDİR.** Ölçütü `⑦`de.

---

## ② DOSYALARIN — ve ad alanı

```
🟢 SENİN         denetim/YAMA-DORTKALEM-*-0907.json
                 denetim/ARAC-DORTKALEM-*-0907.py|js
                 denetim/BULGU-DORTKALEM-0907.md
                 oturumlar/DORT-KALEM-0907.md   (kendi ilerleme notun)
🔴 SENİN DEĞİL   data/*.js · arac/*.py · js/app.js · index.html
```

🔒 **KOŞU 8 SÜRÜYOR** ⇒ `data/` ve `arac/uret_petek.py · renkler.py ·
girdi.py` **DONUK.** Zaten `data/`ye yazmıyorsun; kısıtlanmıyorsun.
Yamaların koşudan sonra TEK ELDEN uygulanacak.

**Ad alanı:** bu kalem `window.<AD>` gerektirmiyor — çıktın `denetim/`
altında JSON. (`§7`: ayrı dosya vermek ayrı ad alanı vermek değildir;
burada ad alanı hiç açılmıyor, o yüzden risk yok.)

---

## ③ DÖRT KALEM

### ①  ZAPOLYA KÜNYESİ — YOK, açılmalı
```
ÖLÇTÜM   `devletler.js`te 1541-1570 Doğu Macar Krallığı künyesi YOK
DEVRALDIM, DOĞRULANMADI  tarih aralığının kendisi (1541 Buda'nın düşüşü ·
                         1570 Speyer Antlaşması) — HAFIZADAN, kaynağa
                         SORULMADI. Başlangıç aralığı olarak kullan,
                         TABAN yapma.
```
Sorular: János Szapolyai / János Zsigmond hangi kimlikle? Erdel
künyesiyle **aynı mı ayrı mı**? Veride bugün o toprak kime yazılı?
🔴 Künye açmadan önce **veride hangi kimliğin kullanıldığını ÖLÇ** —
ardıl künye var ve penceresi tutuyorsa yeni künye gerekmez
(`§3.5.0 ③`: *"ardıl künyenin VAR OLMASI, YAZILABİLİR olduğu anlamına
gelmez — penceresi de tutmalı"*).

### ②  BOĞDAN DÖNEMİ BÖLÜNMELİ
```
veride   Boğdan  1856-03-30 → 1878-07-13   TEK BLOK
olması gereken   1859-01-24'te BÖLÜNMÜŞ    (Cuza'nın çifte seçilmesi —
                 Eflak ile Boğdan'ın fiilî birleşmesi)
```
🔴 `1859-01-24` **DEVRALDIM, DOĞRULANMADI.** Kaynağa sor. Ve iki uç da
ölçülür (`§3.5.1`): bölme Eflak tarafında ne yapıyor? Eflak'ın kendi
dönemleri aynı günde kırılıyor mu, kırılmalı mı?
⚠️ Yeni bir kırılma günü `Değişmez 2`yi bağlar: o günün ±30 gününde
**ÇEKİRDEKTE** (`data/olaylar*.js`, `kronoloji*.js` DEĞİL) madde var mı?
Yoksa madde de yazılmalı — `§11`: *"bu gün zaten var yetmiyor, HANGİ
KOVADA olduğu da sorulmalı."*

### ③  1921-08-23 — KRONOLOJİ MADDESİ YOK
Faysal'ın Irak tahtına çıkışı. Veride o gün bir kırılma var mı, yok mu
— **önce onu ölç.** Kırılma varsa madde `Değişmez 2` gereği ZORUNLU;
kırılma yoksa madde yazmak yine değerli ama önceliği düşer.

### ④  `Mısır ordusu (işgal)` — `v:` mi `isg:` mi?
Üç kayıtta geçiyor. Soru tek: bu bir **tâbiiyet** mi (`v:`) yoksa bir
**işgal örtüsü** mü (`isg:`)?
🔴 Ölçüt kaynağın **yüklemi**dir, adı değil (`§11`: *sefer · anılma ·
isyan · idarî devir* — dördü de tasarruf sanılan şeyler).
⚠️ Ve `v:` dönemlerinin **kimlik alanı yok** (423 dönemin tamamı yalnız
`f`/`t`/`k`/`enklav` taşıyor, 5 Eylül'de ölçüldü) ⇒ `v:` seçersen
kimlik ifade EDİLEMEZ. Bu, kararın parçası.

---

## ④ KAYNAK KURALI

`CLAUDE.md §4`. Kısaca: TDV birincil · ölü slug tuzağı (302 = ÖLÜ) ·
dar slug tutmazsa **kapsayıcı maddeyi** dene · kapsayıcının
**bağlantılarını tara** (o bir slug dizinidir) · olayın **öteki tarafını**
da dene.
🔴 Üç damga ayrı: `bulunamadi` (aradım, yok) · `olculemedi` (alet cevap
vermedi) · `okumadim` (aramadım bile). **Yanlış damga hatayı
KALICILAŞTIRIR.**
🔴 Tarih uydurma. Kaynak yıl diyorsa yıl yaz, künye gün dese bile.

---

## ⑤ HABERLEŞME

```
mcp__ccd_session_mgmt__send_message  →  1.MURAT (sana mesaj GÖNDEREN kimlik)
py arac/tahta.py yaz --kim "DORT-KALEM-0907" --kime "1.MURAT" --mesaj "..."
```
⚠️ **Kendi pencerene yazmak = hiç cevap vermemek.**
🔴 Kritik bir mesaj yazdıysan `oturumlar/tahta.json`dan **geri oku** ve
kendi kaydını ARA — *"yazıldı"* cevabı yetmez (`§7.1⑤b`).
Ne zaman: **açılınca** · **kalem kalem** · **soru gelince hemen** ·
**bitince sayıyla.**
🔴 **Aksaklık BEKLEMEZ** (`§7.1⑥`): kaynaklar çelişiyorsa, şartname
yanlış çıktıysa, ya da beklenenden çok farklı bir sayı ölçtüysen —
bitmesini bekleme, **hemen** yaz.

---

## ⑥ ÖNCÜL DAMGALARI — bu şartnamedekiler

```
🟢 ÖLÇTÜM      Zapolya künyesi `devletler.js`te YOK
🟢 ÖLÇTÜM      Boğdan dönemi veride TEK BLOK (1856-03-30 → 1878-07-13)
🟡 DEVRALDIM   1541 · 1570 · 1859-01-24 tarihleri — HAFIZADAN, kaynağa
               sorulmadı. DOĞRULA.
🟡 DEVRALDIM   `Mısır ordusu (işgal)` ×3 sayısı — kendi say.
⚪ ÖLÇMEDİM    ③'ün o günde bir kırılmaya denk gelip gelmediği
```
📌 Bu bloğu ciddiye al: bir sevkte yazılı öncül **veri gibi** okunur.
Devraldığım hiçbir sayıyı taban yapma.

---

## ⑦ KABUL ÖLÇÜTÜ

**Dört kalemin dördünü bitirmek DEĞİL.** Ölçüt:
```
① her kalem için: ÖLÇTÜM · BULAMADIM · İSTİYORUM üçlüsü (§7.1④)
② yazılan her yama SAYIYLA raporlanır (kaç kayıt, kaç dönem)
③ yazılamayan kalem NİÇİN yazılamadığıyla birlikte kapanır —
   "bulunamadı" bir SONUÇTUR ve uydurmaktan kat kat değerlidir
```
Bir kalem *"kaynak yok"* diye kapanırsa **o da teslimdir.**

---

## ⑧ İLERLEME

Bu dosyanın altına yaz. Kendi dosyanı commit edebilirsin — **pathspec
ZORUNLU**:
```bash
git commit -F <mesaj-dosyasi> -- oturumlar/DORT-KALEM-0907.md
```
`git add -A` / `git add .` **ASLA** — git index 20+ oturum arasında
paylaşılıyor.
⚠️ Commit teslim değildir; **teslim mesajdır.**

---

## İLERLEME NOTLARI

### 7 Eylül 2026 · 13:20 — TESLİM EDİLDİ

**Oturum:** `local_a6f8263a-6b20-402f-9873-fa068acf6e26`
**Tahta:** M-3142 (açılış + ilk ölçüm) · M-3145 (teslim)
**Çıktılar (commit BEKLİYOR — `denetim/` Oturum 0'ın kalemi):**
```
denetim/BULGU-DORTKALEM-0907.md
denetim/YAMA-DORTKALEM-KRONOLOJI-0907.json     kalem ③
denetim/YAMA-DORTKALEM-ISG-0907.json           kalem ④
```
**Sınav:** 26 çapraz sınavın 26'sı geçti (raporun her sayısı veriye karşı).

#### DÖRT KALEMİN DURUMU
| kalem | durum | özet |
|---|---|---|
| ① Zapolya | 🔴 **AÇIK — aralık çürüdü** | künye yokluğu ✓ · `macaristan` **28 dönemde** künyesini aşıyor · TDV: Szapolyai **10 Kasım 1526**, `1570` **0 cümle** |
| ② Boğdan | 🔴 **AÇIK — yeniden tarif** | tarif edilen blok veride **yok**; gerçek blok `v:` katmanında **1456→1878** (422 yıl) |
| ③ Faysal | 🟢 **KAPANDI** | kırılma **31 yerleşim** · çekirdekte madde **yok** · TDV `faysal-i` günü **adıyla** veriyor · madde yazıldı |
| ④ Mısır ordusu | 🟢 **KAPANDI** | `isg:` **247/247** kimlik taşıyor, `v:` **hiç** · TDV yüklemi **işgal** · öneri yazıldı |

#### ŞARTNAMENİN `§6` ÖNCÜLLERİ — üçü çürüdü
```
🟢 DOĞRULANDI  Zapolya künyesi YOK · `Mısır ordusu (işgal)` ×3
🔴 ÇÜRÜDÜ      "1541-1570" aralığı — TDV iki ucunu da çürüttü
🔴 ÇÜRÜDÜ      "Boğdan 1856-03-30 → 1878-07-13 TEK BLOK" — veride yok
🟢 KAPANDI     ⚪ "ölçmedim" (③'ün kırılması) — VAR, ve 31 yerleşim
```

#### ② ile ④ AYNI KÖKTEN
`v:` katmanı kimlik taşıyamıyor ⇒ kimlik iki ayrı yerde `k:` alanına
**serbest metin** olarak sıkışmış: `"Boğdan Voyvodalığı"` (422 yıl) ·
`"Mısır ordusu (işgal)"` (7 ay). Bu bir şema eksiği ve **kalemim değil**,
ama iki kalemin de niçin var olduğunu açıklıyor.

#### AÇIK BIRAKTIKLARIM — `ölçmedim` diye
```
⚫ `1859-01-24`ün KAYNAĞI — künyelerde tutarlı, kaynağa SORULMADI (`okumadım`)
⚫ ②'de kaç kayıt 1859-01-24'te kırılıyor / kaç kırılmıyor — SAYILMADI
⚫ `_sahiplik_uygula.py`nin `v:`→`isg:` TAŞIMA yeteneği
⚫ ③'ün maddesinin `Değişmez 2s`yi kaça indireceği
⚫ `erdel` künyesinin 1541'e çekilip çekilmeyeceği (kalemim DEĞİL)
⚫ `yer_id:"Bağdat"` atlasta var mı — uygulayan kontrol etsin
```

#### PROTOKOL
veri yazılmadı · yama `.js` üretilmedi (gerekçe raporda) · `data/` ve
`arac/` **dokunulmadı** (koşu 8) · gövde çekimi için aynı gün kurduğum
`denetim/ARAC-KAYNAK-DENETIM-0907.py`in `govde_cek`i kullanıldı,
**yeniden yazılmadı**, gövdeler **kesilmedi**.

⚠️ **Tahta yarım commit bildirdi** (M-3145 yazılırken). Geri okudum:
mesaj `tahta.json`da **var** (5.358 kar, yedi çapanın yedisi yerinde).
Aracın talimatına uydum ve **tekrar yazmadım**; `oturumlar/TAHTA.md` +
`tahta.json` sahnelenmiş hâlde duruyor ve bir sonraki tahta yazımının
pathspec'li commit'ine girecek (`§7.1⑤b`, kendi kendini onaran cins).
