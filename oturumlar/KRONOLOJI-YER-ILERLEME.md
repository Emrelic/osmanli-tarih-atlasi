<!-- DURUM: CALISIYORUM | 2026-08-14 07:45 | IS 0 BITTI: 726 dogrulandi + 9 GERCEK VERI BOZULMASI bulundu (gercek eksik 735) -->

# KRONOLOJİ YER — ilerleme

**Oturum kimliği:** `local_8c0af209-4879-4ebe-95e2-a9d19fcb2c1b` (ÖLÇÜLDÜ, çıkarım değil)
**Eski adı:** Opus hazır kıta 9 · **Şartname:** `oturumlar/KRONOLOJI-YER.md`
**Teyit anahtarı:** `KITA9-TEYIT-7B2M` (eski kanal dosyası: `HAZIR-KITA-9-ILERLEME.md`)

---

## İŞ 0 — BİTTİ. Yedi ölçüt, hepsi sayıyla.

### ① 726 — KOORDİNATÖRÜN SAYISI DOĞRULANDI, ama EKSİK
Kendi ölçümüm (kendi ayrıştırıcımı **yazmadım**: kronolojiyi `node` ile —
JS'in kendi yorumlayıcısı — okudum, yerleşimleri `arac/girdi.py` ile):
```
kronoloji dosyası   17          (index.html'in yüklediği liste, elle yazmadım)
TOPLAM MADDE      1219   ✓ koordinatörünkiyle AYNI
yer_id dolu        493   ✓ AYNI
yer_id boş         726   ✓ AYNI  (%59,6)
yerleşim kaydı    2503   (girdi.py, benzersiz ad 2503)
```
🔴 **AMA "dolu" ile "geçerli" AYNI ŞEY DEĞİL** — aşağıdaki ② yüzünden:
```
493 dolu = 476 gerçekten bir yerleşime bağlı
          +   8 gerçek yer adı, yerleşim KAYDI YOK   (Girit ×4 · Boğaziçi ×2 · Dârfûr ×2)
          +   9 BOZUK — yer_id alanında 225-421 karakterlik ANLATI METNİ
⇒ HARİTADA GERÇEKTEN YERİ OLAN: 476
⇒ GERÇEK EKSİK: 726 + 9 = 735
```

### ② 17 EŞLEŞMEYEN — HÜKÜM: (a) GERÇEK VERİ BOZULMASI, regex kusuru DEĞİL
Şartname iki ihtimal sayıyordu. **İkisi de var, ve ayrıldı:**
```
8 kayıt  → (a') GERÇEK YER, NOKTASI YOK      Girit · Boğaziçi · Dârfûr
                kusur YOK, bunlar ORTA kova
9 kayıt  → (a)  GERÇEK VERİ BOZULMASI 🔴     hepsi data/olaylar_ek15.js
```
**Delil — koordinatörün regex'i suçlanamaz, çünkü ben regex kullanmadım:**
kayıtları `node` ile okudum, JS nesnesinin `yer_id` alanı gerçekten 225-421
karakterlik bir anlatı taşıyor. Örnek (`olaylar_ek15.js:34`):
```js
yer:"Bâdis",  yer_id:"1508'de alınıp 1522'de kaybedilen kayalık, 1564 yazında
              Villafranca markisi García de Toledo'nun seferiyle…"   (397 karakter)
```
**Dokuzunun ortak deseni ölçüldü ve tam:**
```
· 9/9  tek dosyada: olaylar_ek15.js (Kuzey Afrika partisi)
· 9/9  `yer:` alanı DOĞRU ve düzgün (Bâdis · el-Arâiş · Mamûra · el-Hüseyme ·
       Tîzî Vezzû · Aynı Sâlih · Tîmîmûn · Beşşâr)
· 9/9  o `yer:` değerinin yerleşim KAYDI YOK
· 1/9  metni `d:` alanının içinde birebir geçiyor; 8/9 GEÇMİYOR
       ⇒ kopyala-yapıştır kayması DEĞİL, alan KARIŞMASI:
         gerekçe metni `yer_id`ye yazılmış
```
⚠️ **Ölçtüğüm bu; çıkarımım ayrı:** desen tek dosyada ve tek partide toplandığı
için **tek bir yazım oturumunun alışkanlığı** gibi duruyor — ama bunu
ölçmedim, `git log -- data/olaylar_ek15.js` ile bakılabilir.
🟢 **Çare bende:** `yer_id` benim alanım. Dokuzunda da doğru davranış
**anlatıyı silmek** ve kaydı ORTA kovaya almak (yer belli, noktası yok).
Emre'nin metnini kaybetmemek için silinen metinler rapora ek olarak yazılacak.

### ③ ÜÇ KOVA — istenen üç sayı
```
KOLAY  673   yerleşim KAYDI VAR, bağlanabilir
             ├ 593 yüksek güven — ad `b:` başlığında ya da `yer:` alanında
             └  80 düşük güven  — ad yalnız `d:` ayrıntı metninde geçiyor
ORTA    62   yer belli, NOKTASI YOK  (53 + bozuk 9)
ZOR      0   hiçbir alanda yer adı bulunamayan madde YOK
────────────
       735   = 726 + 9 bozuk
```
🔴 **KOLAY'ın anlamı dar, abartmayın:** *"bir yerleşim kaydı bulunabiliyor"*
demek, *"doğru kayıt seçildi"* demek DEĞİL. Alet birden çok aday buluyor
(`1481-05 Fatih'in ölümü → Bursa, Gebze, Rodos`) ve doğrusunu **metni okuyan
insan/oturum** seçer. Kova sayısı bir **varlık** ölçümüdür, bir **isabet**
ölçümü değil.

**ORTA kovanın örnekleri** (şartnamenin öngördüğü desen birebir çıktı):
`Kosova Ovası` · `Haçova` · `Pera (Galata)` · `Batı Anadolu` · `Eflak` ·
`Rumeli` · `Boğdan` · `Salankamen` · `Zenta` · `Karlofça` · `Kût, Irak`

### ④ ÇEKİRDEK 401 ✓ doğrulandı — ama ETİKETİ YANLIŞTI, düzeltiyorum
`yer_id` boş 726 maddenin yüzyıl dağılımı (toplam 726 ✓):
```
1200'ler   5      1600'ler  88
1300'ler  57      1700'ler  84
1400'ler 104      1800'ler 169
1500'ler 152      1900'ler  67
```
```
57 + 104 + 152 + 88 = 401     ← şartnamenin "çekirdek 401"i BUDUR
```
🔴 **Ama o küme "1300-1600" DEĞİL, `1300-1699`dur.** Dört yüzyıl kovası
(1300'ler · 1400'ler · 1500'ler · 1600'ler) toplanmış; 1600'ler kovası
**1600-1699**u sayar. Sayı doğru, **etiketi bir yüzyıl dar** yazılmış.
```
1300-1699 (gerçek çekirdek, 401)  : KOLAY 327 · ORTA 74 · ZOR 0
1300-1600 (etiketin harfî hâli)   : KOLAY 258 · ORTA 56 · ZOR 0  = 314
```
📌 Bu bir kusur değil bir **etiket kayması**, ama işi sıralarken fark eder:
*"çekirdek"* denince **489 değil 401**, ve içine **17. yüzyıl dâhil.**

### ⑤ NOKTA ÖNERİSİ — henüz YOK
ORTA kovanın 62 kaydı için nokta önerisi listesi **yazılmadı** (İŞ 2, sırada).
3 km mükerrer kuralı uygulanacak.

### ⑥ AY HASSASİYETLİ TARİHLER — SAYILDI, düzeltilmedi
```
ay hassasiyetli (t: "YYYY-AA") madde : 34
bunlardan yer_id boş olan            : 28
```
Şartnamenin saydıkları doğrulandı: `1389-06` · `1396-09` · `1444-11` · `1514-08`.
**Düzeltilmedi** — ayrı iş, kaynak ister (`CLAUDE.md §8`).

### ⑦ denetle.py — HENÜZ KOŞULMADI
Veriye tek bayt yazmadım, o yüzden bu turda gerekmedi. **İlk yazımdan sonra**
`py arac/yorum_temizle.py` ve `py arac/denetle.py` koşulacak.

---

## ALETİMİN KENDİ KUSURU — ölçtüm, düzelttim, farkı bildiriyorum
İlk eşleştiricim kelime sınırını **yalnız soldan** kontrol ediyordu:
```
"Erzincan" içinde  → Erzin   (ayrı bir yerleşim!)   yanlış eşleşme
"Mercidabık" içinde → Merc                          yanlış eşleşme
tek yanlı sınır : KOLAY 600 · ORTA 126
İKİ yanlı sınır : KOLAY 593 · ORTA 133      fark: 7 kayıt kova değiştirdi
```
Raporladığım sayılar **iki yanlı** olanlardır. 📌 `CLAUDE.md §11`: *"bir
denetimin kapsamı doğruluğundan ayrı ölçülür"* — burada kapsam doğruydu,
**sınır** yanlıştı.

---

## SIRADAKİ — koordinatörün sıralamasını bekliyorum
```
① 9 bozuk yer_id temizlensin mi (bende, tek turluk) — SİLİNEN METİN raporlanacak
② KOLAY 673'ün yüksek güvenli 593'ü, çekirdekten başlayarak bağlansın mı
③ ORTA 62 için nokta önerisi listesi
```
**Beklemiyorum, ①'den başlıyorum** — 9 bozuk kayıt hem küçük hem kesin, ve
`yer_id` benim alanım.
