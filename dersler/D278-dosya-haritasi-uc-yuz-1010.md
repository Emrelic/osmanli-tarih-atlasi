# Dosya haritası ve canlılığın üç yüzü: girdi · çıktı · log (10 Ekim hâli)

> Kimlik `D278` · `CLAUDE.md §5` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 5. Dosya haritası
```
index.html · js/app.js · css/style.css   uygulama (yeni data/*.js → index.html'e satır)
data/yerlesimler*.js     ELLE YAZILAN coğrafî kaynak — CANLI liste: arac/girdi.py GIRDI_DOSYALARI
data/olaylar*.js         kronoloji ÇEKİRDEĞİ (Değişmez 2 evreni)
data/kronoloji_sinir*.js 🔴 DA Değişmez 2 EVRENİNDE (Emre, 24 Eyl 2026 — 10 dosya, 405 madde)
data/kronoloji*.js       öteki kronoloji dosyaları: KUYRUK (Değişmez 2 evreninde DEĞİL)
data/devletler.js        künye + `harita:` boya anahtarı
data/padisahlar.js · kisiler.js · savaslar.js · sehirler.js
data/donemler.js · devletler_harita.js · bolgeler.js   ÜRETİLMİŞ — ELLE DÜZENLEME
arac/uret_petek.py       TEK üretim betiği · arac/renkler.py BOYALAR · arac/denetle.py
veri-kaynak/             motorun girdi verisi (Natural Earth vb.)
veri-kaynak/motor_kara.geojson   GİRDİ DEĞİL ÇIKTI (motorun çizdiği kara, ~200 km tavan)
dersler/ · denetim/ · oturumlar/ · assets/portreler/
```
**Hangi dosyanın canlı olduğu yalnız `GIRDI_DOSYALARI`dan okunur** — burada liste tutulmaz
(üç kez bayatladı). Ayrıştırıcıyı doğrulamak yetmez, okuduğu dosya kümesi de doğrulanır.
```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI));[print(' ',f) for f in girdi.GIRDI_DOSYALARI]"
```
Vaka: [`D219`](dersler/D219-dosya-haritasi-tam.md)

🆕 🔴 **AYNI KURALIN ÇIKTI YÜZÜ — ÜRETİLMİŞ DOSYA DİSKTE OLABİLİR, YAYINDA OLMAYABİLİR**
(10 Ekim 2026). Çıktı tarafında canlı olan, diskteki en büyük dosya değil
**`index.html`in `<script src=>` satırıdır.** Ölçülen vaka: koordinatör
`data/devletler_harita.js`i "yayındaki harita" diye iki kıtaya ve UMIT'e verdi.
```
data/devletler_harita.js    93.694.456 bayt, 4 Ekim   GIT'TE HİÇ YOK (takipsiz,
                            origin/main'de de yok) — YEREL ÇÖZÜM, yayın DEĞİL
                            UMIT'te aynı adda 180.999.059 baytlık BAŞKA kopya
data/devlet_harita_ust.js    3.148.869 bayt  TAKİPLİ · index.html:1759 · YAYIN BU
                            son dokunan: `14174ef7` KOŞU 21 (7 Ekim) ⇒ 93 MB'lık
                            dosya yayındaki haritadan ÜÇ GÜN ESKİ
```
⇒ Kusur "dosya yok" değil: **dosya VARDI ve YANLIŞTI.** Varlığı doğruluk sanıldı.
🔴 Üretilmiş haritayı ölçecek her iş, tabanını KENDİ ÇÖZER:
🆕 ✅ **ALET VAR — AMA 10 EKİM 10:00 İTİBARIYLA `main`'DE DEĞİL** (LAB
ölçtü): `arac/olcum_agaci.py` bu inişte iniyor. **İnene kadar aşağıdaki
İKİ KOMUT elle koşturulur** — ikisi de ŞART. Koordinatör bu satırı *"alet
standart oldu"* diye yazdı ve alet henüz inmemişti; `§11`in *"öneri sayısı
geleceği bugün gibi gösterir"* ailesi.
✅ **ALET** (`OLCUM-AGACI-1010`):
```bash
py arac/olcum_agaci.py hazirla      # fetch · worktree · HEAD..origin/main=0 ·
                                    #   İKİ hedefi çöz · sha256'yı DAMGAYLA kıyasla
py arac/olcum_agaci.py kaldir       # çıkış 0 temiz · 2 ölçülemedi · 3 taban/damga bozuk
```
⚠️ `kodla.py coz_c` damgayı **okuyup ATIYOR**, doğrulamıyor — doğrulamayı
alet yapar. Ölçüldü: `devletler_harita.js` **181.080.905 B (172,69 MB)**
47 sn · `donemler.js` 61.296.467 B 11 sn · toplam 78 sn · disk 231 MB.
🔴 **VE YUKARIDAKİ "93.694.456 bayt" SAYISI YANLIŞ KOPYANINDI** — yayın
damgasının çözümü **172,69 MB**. Yani o satır doğru dersi yanlış sayıyla
anlatıyordu; ders duruyor, sayı düzeltildi.
⚠️ Çözülen kaynaklar **sitede YÜKLENMİYOR** (yükleyiciler `geo_coz.js:195` ·
`index.html:1768` · `:1813-1814`) — çözme bir ÖLÇÜM hazırlığıdır, yayın değil.
Elle yapılacaksa iki komut da ŞART:
```bash
git worktree add <yol> origin/main --detach
cd <yol> && py arac/kodla.py coz-c data data/devletler_harita.js
            py arac/kodla.py coz-c data data/donemler.js donem   # 🔴 ŞART
```
🆕 🔴 **İKİNCİ SATIR 10 EKİM'E KADAR BURADA YAZILI DEĞİLDİ — ve eksikliği
bu çareyi UYGULAYANI YANILTIYORDU** (LAB ölçtü, `LAB-OLCULEMEDI-TABAN-1010`):
```
taze main                → çıkış 2 · D8: devletler_harita.js YOK
yalnız 1. satır (eski §5) → çıkış 2 · D8: bu kez donemler.js YOK
iki satır birlikte        → çıkış 1 · D8 GERÇEKTEN KOŞTU
```
`denetle.py:5212` **iki damga çifti** ister. ⇒ Eski §5'i uygulayan *"D8'i
ölçtüm"* sanıyor ve **ölçmüyor** — `§3`ün *"ölçülemeyen soru TEMİZ DEĞİLDİR"*
kuralının en pahalı hâli: eksik bir ÇARE, çaresizlikten kötüdür çünkü
insanı ölçtüğüne inandırır. Komut `.gitignore:41`de duruyordu.
Ve ölçüm raporuna **taban commit + boyut + sha256** yazılır; yazılmayan parametre
ölçümü tek kullanımlık yapar (ÖNCE/SONRA kıyaslanamaz).
📌 Bu, `§7`in "ÜRETİLMİŞ — ELLE DÜZENLEME" uyarısının eksik yarısı: o satır
üretilmiş dosyaya **yazmayı** yasaklıyordu, **okumayı** düzenlemiyordu.

🆕 🔴 **VE ÜÇÜNCÜ YÜZ — LOG: BAŞKA MAKİNENİN KOŞUSU, BU MAKİNEDE BAYAT BİR
DOSYA OLARAK DURUR** (10 Ekim 2026, koordinatörün kendi hatası). Koşucu
HAVVA'dır (`§7`), ama `uretim_canli.log` adı HER makinede vardır:
```
EMRELIC  C:\atlas\uretim_canli.log   507.121 bayt, 4 EKİM 19:17  ← ALTI GÜN BAYAT
         içinde GERÇEK bir AŞAMA BİLANÇOSU var (yabancı gövdeler 2s10dk,
         dönemler 1s37dk) ⇒ "koşu bitti, 4 saat sürdü" diye OKUNUYOR
GERÇEK   KOŞU 22b HAVVA'da, 06:53:49'da başladı, 30 dakikadır koşuyor
```
⇒ **Kusur "dosya yok" değil yine: dosya VARDI, İÇİ TUTARLIYDI ve YANLIŞTI.**
🔴 Ve bu yüz ötekilerden daha sinsi, çünkü **anomali YOK:** 93 MB'lık vaka
BOYUTUYLA ele veriyordu, bayat log hiçbir şeyle ele vermiyor — tek belirti
**mtime**, ve kimse loga mtime için bakmaz. Koşu durumu bir sabah belgesine
yazılacaksa, kaynağı **koşucunun ÖLÇÜMÜ**dür; kendi diskimdeki aynı adlı
dosya değil.
```bash
ls -la --time-style=full-iso uretim_canli.log   # ÖNCE BU. Bugün değilse DUR.
```
🔴 **VE BU BAYATLIK KAZA DEĞİL, YAPISALDIR:** `§7` koşuların **ayrı
worktree'de** koşmasını emreder ⇒ canlı log HER ZAMAN başka bir dizindedir
(ölçülen: `C:\atlas-kosu22\uretim_canli.log`, HAVVA). Yani ana checkout'un
`uretim_canli.log`u **tanım gereği** o koşunun logu DEĞİLDİR — bugün bayat
olması bir arıza değil, beklenen hâldir. ⇒ Koşu logu **dizin adıyla** anılır,
`uretim_canli.log` diye anılmaz.
📌 `§1`in "AĞACIN GERİDEYSE DUR" kuralının log yüzü: orada ölçüm **başka
bir atlasın**, burada **başka bir koşunun**. İkisinde de hiçbir kapı
yakalamaz.
