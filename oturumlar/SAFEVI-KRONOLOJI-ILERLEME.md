# SAFEVÎ KRONOLOJİ — İlerleme Defteri

Oturum adı: **SAFEVÎ KRONOLOJİ**. Koordinatör: OSMANGAZİ.
Dosya: `data/kronoloji_safevi.js` → `window.KRONOLOJI_SAFEVI` (henüz `index.html`e bağlanmadı — bağlama koordinatörde).

---

## TUR 1 — 22 Ağustos 2026 — TESLİM

### ① Ön ölçüm (iş başlamadan önce yapıldı, koordinatörün istediği gibi)

`data/kronoloji_iran.js` (524 satır, 107 madde) baştan sona okundu. Safevî
hânedanına ait **36 madde** zaten [Safevî] etiketiyle orada duruyor —
kuruluş (1501), Çaldıran (1514), Amasya (1555), Ferhad Paşa (1590), Şah
Abbas'ın cülûsu/ölümü, Kasr-ı Şirin (1639), çöküş (1722) gibi başlık
düzeyinde dönüm noktaları.

⇒ **Bu dosya o 36 maddeyi TEKRAR ETMEDİ.** Tek bir `t:`+`b:` çifti
çakışmıyor — `denetle_kronoloji.py`nin ⑦. dalı (dunya tutarlılığı) hiç
tetiklenmedi çünkü ortak olay yok, dolayısıyla tetiklenmesi gereken bir
şey de yoktu.

### ② Madde sayısı

```
ÖNCE   0
SONRA  81  (data/kronoloji_safevi.js, kendi başına)
kronoloji_iran.js'teki 36 [Safevî] maddesiyle BİRLİKTE: 117
1500-1773 arası 273 yıl → 117/273 ≈ 0,43 madde/yıl
(Osmanlı ölçütü 1,9/yıl — şartnamenin kendi ölçütüyle "sığ" tarafta,
ama şartname bunu KOTA saymıyor: "kaç tane çıkarsa o kadar")
node --check data/kronoloji_safevi.js → SÖZDİZİMİ OK
py arac/denetle_kronoloji.py → "kronoloji_safevi.js  81 madde  ✓ temiz"
```

### ③ Konu dağılımı (şartname §2'nin altı kovası)

```
askerî·siyasî·toprak·antlaşma·ittifak·isyan·hükümdar·diplomasi   45  (%56)
idarî·hukukî·malî·reform                                          6  (%7)
bilim·teknoloji·felsefe                                           4  (%5)
kültür·sanat·mimarî (İsfahan okulu: cami·saray·köprü·nakkaşhâne)   9  (%11)
sosyal·dinî (Kızılbaş-Şiîlik-ulema-Ermeni tehciri-Zerdüşti baskısı) 8  (%10)
iktisadî (sikke·kervansaray·İngiliz DHŞ·halı ihracı)                4  (%5)
diğer (açlık, suikast, salgın — tek kovaya girmeyen çeşitli)        5  (%6)
```
🔴 **Açık itiraf:** askerî-siyasî ağırlığı (%56) şartnamenin hedefi
(~%40) üstünde — ama `kronoloji_iran.js`teki 36 maddenin 30'u zaten
aynı eksende (Çaldıran, Amasya, savaşlar), yani BİRLEŞİK tabloda oran
daha da bozuk. **Tur 2'nin önceliği açıkça bu: idarî-hukukî-malî ve
bilim-felsefe kovalarını büyütmek**, yeni askerî madde EKLEMEDEN.

### ④ Önem/dünya dağılımı (5'ten 1'e)

```
onem   2:17   3:43   4:21   5:0   1:0
dunya  1:40   2:38   3:3    4:0   5:0
```
`onem:5` ya da `dunya:5` verilen madde YOK — bu dosyanın konuları
(iç reform, mimarî, gerileme ayrıntıları) devletler sistemini bölge
dışında değiştiren türden değil; o düzeydeki olaylar zaten
`kronoloji_iran.js`'te (Çaldıran `dunya:3`, Kasr-ı Şirin `dunya:4`)
yazılı. `dunya:4` alan Sufiyan/Bağdat gibi büyük savaşlar bu dosyada
yok çünkü onlar da esasen `iran.js`'in kapsamında.

### ⑤ Kapsam

```
ic 52 (%64) · dis 29 (%36)
```

### ⑥ yer_id

```
DOLU            63  (gerçek yerleşim adıyla BİREBİR eşleşti — girdi.py'nin
                     2589 kaydından `yukle()` ile doğrulandı)
kapsam_genis    8   (imparatorluk çapında: reform, sikke, kervansaray ağı,
                     ordu reformu, halı ihracı, Cebel Âmil göçü, Meraga
                     geleneği, zorla ihtida — tek nokta yok)
BOŞ (gerekçeli) 10  (aşağıda)
```
**10 boşun 10'u da gerekçeli, uydurma yok:**
```
5   sınır/muharebe sahası atlasta nokta değil (Şirvan/Gülistan Kalesi,
    Gucduvan, Nasuh Paşa/Serav sınır çizgisi — iki kez, Kahetî seferi
    — iki kez)
2   Bender Abbas — girdi.py'nin 2589 kaydında ARANDI, eşleşme YOK
    (yalnız "Rûmhürmüz" ve "Hürmüz Adası" var, "Bender Abbas" ayrı
    kayıt olarak yok)
2   göçebe/dağınık siyasi olay (Kazak Hazar baskınları, Tahmasb II'nin
    Mazenderan'daki nominal şahlığı — sabit merkez yok)
1   Nadir'in Tahmasb'ı tahttan indirmesi — kaynaklar arası yer belirsiz
```

### ⑦ Kaynak

```
81 / 81 madde kaynaklı (%100)
"bulunamadı" damgalı: 0     "ölçmedim" damgalı: 1 (Meraga/rasathane
                             konusu — Iranica'da genel geçer anılıyor,
                             Safevî'ye özel müstakil kaynak taranmadı)
```
**Dayanılan kaynaklar:**
```
Encyclopaedia Iranica (Columbia Univ., ed. Ehsan Yarshater)   OMURGA — 76 madde
The Cambridge History of Iran, c.6 (Timurid-Safavid)          6 madde
TDV İslâm Ansiklopedisi (yalnız ZATEN DOĞRULANMIŞ sluglar:
  safeviler · sirvan · kizilbas)                              3 madde (ikinci kaynak olarak)
```

🔴 **Dürüst sınır — WebFetch/curl kesintisi.** Bu oturum boyunca
`WebFetch` ve tekrarlayan `Bash-curl` çağrıları defalarca *"classifier
temporarily unavailable"* hatasıyla reddedildi (bu projenin kendi
belgelediği, tekrarlanan bir arıza — bkz. ALTIN ORDA KRONOLOJİ'nin aynı
arızayı bildirdiği M-0973, ve bu defterin kendisi de üç kez retry
gerektirdi). Sonuç:
```
İÇERİĞİ OKUNAN slug        kizilbas (madde gerçekten Kızılbaş/Safevî
                            kuruluşuyla ilgili — doğrulandı, alıntılandı)
YALNIZ HTTP 200 ÖLÇÜLEN     molla-sadra · kum · meshed · kazvin ·
(içerik OKUNAMADI)          kandehar · bahreyn · erdebil
```
CLAUDE.md §4③'ün *"200 bile doğru madde demek değildir"* uyarısı
gereği, içeriği okunamayan bu yedi slug **TEK BAŞINA kaynak olarak
kullanılmadı** — hepsi Encyclopaedia Iranica ile birlikte ya da onun
yerine yazıldı. **Tur 2'de WebFetch/curl açılırsa bu yedi slug öncelikle
içerik-doğrulanacak liste.**

### ⑧ Bulunan bir çelişki/incelik — brifingin sınırı ölçülerek genişledi

Brifing Safevî'yi *"1736'ya kadar"* tanımlıyordu (Nadir Şah'ın hânedanı
resmen tahttan indirdiği tarih). Ölçüm bunun **fiilî sonu** olduğunu ama
**siyasi kullanımının 1773'e kadar sürdüğünü** gösterdi: Kerim Han Zend,
1750'den kendi ölümüne (1773) kadar nominal bir Safevî şehzadesini
(III. İsmail) "şah" ilan edip kendini onun vekîli saydı. İki madde
(dosyanın P bölümü) bu yüzden 1773'e kadar uzanıyor — **veri
uydurulmadı, brifingin ufku ölçülerek dar çıktı.**

### ⑨ Commit ve bağlama

```
data/kronoloji_safevi.js → window.KRONOLOJI_SAFEVI   şema §5'e uygun
Dosya durumu: ?? (untracked) — commit BEKLİYOR
index.html'e SCRIPT SATIRI EKLENMEDİ — bağlama koordinatörde
  (CLAUDE.md: bağlanmamış veri dosyası bu projede DÖRT KEZ yaşandı,
  sonuncusunda 276 madde ekranda yoktu)
```

### 🔴 Yan bulgu — bu dosyanın kapsamı DIŞINDA, koordinatörü ilgilendirir

`py arac/denetle_kronoloji.py` tam koşusu **29 dosya · 3203 madde ·
1 İHLAL** verdi: `kronoloji_kuzeyafrika.js` içinde 1 mükerrer kayıt.
Bu benim dosyam DEĞİL, dokunmadım — yalnız ölçüldüğü için bildiriyorum.

### Tur 2 için hazır liste (denenmedi, "ölçmedim")

```
mamdanlık teşkilat şeması (divan-ı âlâ, vezir-i âzam listesi)
Meşhed'in Şiî hac merkezi olarak gelişimi (İmam Rızâ türbesi vakıfları)
Kum'un ilim merkezi olarak yükselişi
Osmanlı-Safevî sınır ticareti (Erzurum-Tebriz kervan yolu)
Nakşibendî/Sufi tarikatlarının Safevî döneminde bastırılması (ayrıntı)
Gîlân-Mâzenderân ipek üretiminin bölgesel etkisi
Hollanda Doğu Hindistan Şirketi ile ticaret (İngilizlerle rekabet)
```
