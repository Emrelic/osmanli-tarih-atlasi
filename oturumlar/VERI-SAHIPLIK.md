# VERİ SAHİPLİK — 48 madde · sahiplik teyidi + noktasızlık

```
AD        VERİ SAHİPLİK
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya + oturumlar/ORTAK-PAKET-KURALLARI.md  ← ÖNCE ONU OKU
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

🔴 **Sen KOŞUYU BEKLETEN iki oturumdan birisin.** Yazdığın her kayıt bu
koşuya yetişir; yazmadığın **bir tur (~4 saat + yayın)** bekler.

## 1. İŞİN — iki küme, tek kök

```
denetim/kume/sahiplik-teyidi.md    32 madde
denetim/kume/emilme.md             16 madde
                                   ── 48
```

**İkisi de aynı kökten:** `CLAUDE.md §2` — *"noktası olmayan bölge, en
yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır."* Emre'nin gördüğü
şey çoğu zaman bir kod hatası değil, **o bölgede nokta olmamasıdır.**

⇒ **İlk sorun her maddede aynı:** *o bölgede yerleşim noktası var mı?*

## 2. YÖNTEM — her madde için üç adım

```
① NOKTA VAR MI     ilgili kutuda kaç nokta, kimin?
② KAYNAK NE DİYOR  TDV → akademik. Kim, ne zaman, hangi gün?
③ KAYIT YAZ        yeni nokta ya da dönem düzeltmesi
```

**Ölçüm komutu — kutuda nokta saymak:**
```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;Y=girdi.oku();print(sum(1 for y in Y if 35<=y['lat']<=38 and 43<=y['lon']<=48))"
```
*(sınırları kendi maddene göre değiştir)*

## 3. NEREYE YAZILIR

```
data/yer_yama_sahiplik.js   →  window.YER_YAMA_SAHIPLIK    dönem düzeltmesi
data/yer_yama_emilme.js     →  window.YER_YAMA_EMILME      YENİ nokta
```
🔴 **Dosya adındaki ayırt edici parça, DEĞİŞKEN adında da olacak.**
Bir günde üç kez ihlal edildi ve bir vakada **%74 kayıp riski** doğdu
(`CLAUDE.md §7`). İki dosyayı da **koordinatör bağlar**; sen `girdi.py`ye
dokunma.

Biçim için var olan bir örneği aç: `data/yer_yama_iran.js`.

## 4. 🔴 İKİ UÇ DA ÖLÇÜLÜR

`CLAUDE.md §3.5.1`: bir sınır kayması önerildiğinde *"bu tarafta fazlalık
var mı"* yetmez, **"öbür tarafta fazlalık doğuyor mu"** da sorulur.
```
Yukarı Macaristan  noktasız → komşusu OSMANLI → Osmanlı FAZLA görünüyor
Gyula              noktasız → komşusu tâbi    → Osmanlı EKSİK görünüyor
```
**Noktasızlık İKİ YÖNE de hata üretir** ve hangi yöne ürettiği tamamen
komşunun kimliğine bağlıdır. Tek yönlü arama yarısını kaçırır.

## 5. TUZAKLAR — bu projede ısırmış olanlar

```
🔴 3 KM KURALI      yeni nokta eklemeden önce 3 km içinde başka nokta var mı
                    bak (Varat/Varad 1 km arayla iki kayıttı)
🔴 HAYALET DEVLET   yeni bir `s:` dönemi yazarken devletin ÖMRÜNÜ kontrol et
                    (`data/devletler.js` f/t) — Batnoz'da 84 yıl fazlalık vardı
🔴 SIFIR UZUNLUK    {f:"1514-09-06", t:"1514-09-06"} → Tebriz Çaldıran'dan
                    sonra hiç Osmanlı görünmedi
🔴 KİMLİK YAZIMI    `d:` yazarken kendi transliterasyonunu değil
                    `devletler.js`teki GERÇEK `id:`yi kullan
                    (aceh ✗ → ace-sultanligi ✓)
🔴 kasitli_bosluk   `bos:` taşıyan noktaya DOKUNMA — orası bilerek boş
```

## 6. TESLİM

```
denetim/HUKUM-VERI-SAHIPLIK.json    her madde için hüküm
denetim/BULGU-VERI-SAHIPLIK.md      ölçümler ve kapatılamayanların sebebi
```
Rapor **sayıyla**: *"48 → N, kalan M'nin sebebi şu."*

⚠️ Bir madde Emre'nin zevkine bakıyorsa (*"nasıl gösterilmeli"* tipi)
`senin-kararin` yaz ve **şıklarıyla + kendi önerinle** tarif et — koordinatör
onu Emre'ye taşıyacak.
