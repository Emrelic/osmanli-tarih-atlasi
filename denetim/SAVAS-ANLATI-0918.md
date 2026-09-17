# SAVAS-ANLATI — 18 Eylül 2026

**Oturum:** SAVAS-ANLATI (OPUS HAZIR KITA 1014) · **koordinatör:** 1.MURAT
**Şartname:** `oturumlar/DALGA-0068.md` B tablosu — H-0006 (savaş anlatı şeması) · H-0004 (gün içi sıra)
**Çıktı:** bu dosya + `denetim/YAMA-SIRA-0918.json`
**Hiçbir veri dosyasına yazılmadı** — `js/app.js` BAGLAMA'da, `data/olaylar*.js` ve `VERI-YAPISI.md` koordinatörde. Bu dosya ÖNERİDİR.

---

## 1. H-0004 — gün içi sıra: ölçüm

Ölçüm aracı `app.js`in kendi sıralamasının birebir kopyasıdır (`gunIdx` + `gunMetniIdx` +
`olaylarAnahtarSiraNo` + kararlı `sort`), yani "ekranda ne görünüyor"u ölçer, dosyada ne
yazdığını değil.

```
ekrandaki madde            1503        benzersiz gün                1401
2+ maddeli gün                85        o günlerdeki madde            187
grup boyutu            2→71 · 3→11 · 4→3
üyeleri FARKLI dosyalardan gelen grup   77 grup · 169 madde
gün içi sıra alanı         YOK — kronolojide kullanılan 33 alan tarandı
```

### Kök sebep
`js/app.js:5300-5311` maddeleri önce `gi` (gün indeksi) ile sıralar. JS'in `sort`ı
**kararlı** olduğu için aynı `gi`ye sahip maddelerin sırası **diziye giriş sırasıdır**;
giriş sırasını da `olaylarAnahtarSiraNo` belirler: `OLAYLAR`=0, `OLAYLAR_EK`=1, `_EK7`=7,
`_EK17`=17, öteki anahtarlar 999 (sonra alfabetik).

> **Aynı günün iç sırası tarihsel değil, maddenin HANGİ DOSYADA olduğuna bağlı.**
> 77 grup (169 madde) üyelerini farklı dosyalardan alıyor; bu grupların sırası veri dışı
> bir artefakttır.

Ve kusur sessiz değil: `app.js:5328` aynı güne `_agSira` verir, `5384-5386` bunu **①②③
rozeti** olarak basar, `8055-8061` de "Bu günde N olay var — k/N" şeridini yazar.
**Yanlış sıra kullanıcıya numaralanmış olarak gösteriliyor.**

### H-0004 vakası — ekrandaki mevcut sıra
| # | `t` | dosya anahtarı | başlık |
|---|---|---|---|
| 956 | 1788-12-17 | `OLAYLAR_EK` | Özi'nin düşüşü |
| 957 | **1789-04** (`gun`: 7 Nisan 1789) | `OLAYLAR` | III. Selim ve Nizâm-ı Cedîd |
| 958 | 1789-04-07 | `OLAYLAR_EK7` | III. Selim tahta çıktı |
| 959 | 1789-04-07 | `OLAYLAR_EK17` | I. Abdülhamid ... felç geçirip öldü |

Emre'nin verdiği doğru sıra: **Özi → Abdülhamid'in ölümü → Selim'in cülûsu → Nizâm-ı Cedîd.**

- **Özi zaten doğru yerde** (1788-12-17, ayrı gün). Bozuk olan yalnız **7 Nisan 1789'un üç
  maddesi** ve sıra **tam ters**: önce reform, sonra cülûs, en sonda ölüm.
- Sebep yukarıdaki dosya anahtarı sırası (`OLAYLAR`=0 < `_EK7`=7 < `_EK17`=17).

### İki yan bulgu (H-0004'ün dışında, ama aynı üç maddede)
1. `OLAYLAR`daki "III. Selim ve Nizâm-ı Cedîd" maddesi `t:"1789-04"` (**ay** hassasiyeti)
   taşıyor ama `gun:"7 Nisan 1789"` (**gün**) diyor. Alan ile metin aynı hassasiyeti beyan
   etmiyor (`CLAUDE.md §4`).
2. Aynı madde hem cülûsu hem Nizâm-ı Cedîd'i anlatıyor; cülûs için `_EK7`de, Nizâm-ı Cedîd
   için 1792-06-01'de ayrı madde var ⇒ **mükerrer şüphesi**. Karar koordinatörün: madde
   "cülûs"a daraltılabilir ya da `_EK7` maddesi kaldırılabilir. **Hiçbiri uygulanmadı.**

### Çözüm önerisi (ayrıntı: `YAMA-SIRA-0918.json`)
- **Alan `gs:`** (gün sırası) — tamsayı, varsayılan 50, yalnız 2+ maddeli günlerde, aralıklı
  (10/20/30) yazılır. `saat:` **önerilmedi**: kaynak saat vermiyor, uydurma kesinlik olurdu
  (`§4`). `t`ye saat eklenmesi de önerilmedi: `gunIdx` ve `Değişmez 2` o biçime bağlı.
- **Kod (tek satır, ES5):** `app.js:5311`
  `.sort(function (a, b) { var f = a.gi - b.gi; if (f) return f; var x = (a.gs == null ? 50 : a.gs), y = (b.gs == null ? 50 : b.gs); return x - y; });`
- **Geri uyumlu olduğu SINANDI** (`D010`, dört yön): `gs` yazılı gün tarihsel sıraya oturuyor ·
  `gs` yazılmayan gün **bugünkü sırasını aynen koruyor** · `gs:50` ile `gs`siz eşit ·
  gün farkı her zaman `gs`yi yeniyor. ⇒ `gs` yazılmayan 1316 gün dokunulmaz.
- **Denetim adayı:** "2+ maddeli, üyeleri farklı dosyalardan gelen ve hiçbirinde `gs` olmayan
  gün" — bugün **77**. Bu bir **hata değil, beyan eksikliği**; tavan olarak girer.

---

## 2. H-0006 — savaş anlatı şeması

### 2.1 Emre'nin kuralı
Her büyük savaş beş başlıkla anlatılır: **① savaşa giden süreç · ② savaşın başlaması ·
③ savaş olayları · ④ savaşın sonu · ⑤ barış antlaşması.**

### 2.2 Şema nereye bağlanır — altyapı ZATEN VAR
`data/savaslar.js` `ANTLASMALAR` kayıtlarının **37'sinde `savas_basi` alanı var** ve değeri
**savaşın başlangıç GÜNÜDÜR** (ör. Yaş → `1787-08-17`, Ziştovi → `1788-02-09`, Karlofça →
`1683-07-14`). Yani "hangi antlaşma hangi savaşı bitirdi" bağı kurulu; eksik olan, bir
kronoloji maddesinin **hangi savaşın hangi evresi** olduğunu söyleyen alan.

> Şema bu yüzden yeni bir kütük istemiyor: **savaşın kimliği `savas_basi` günüdür.**

### 2.3 VERI-YAPISI.md'ye önerilen ek (öneri — dosyaya YAZILMADI)

```js
// data/olaylar*.js — kronoloji maddesine iki isteğe bağlı alan
{ t:"1787-08-16", k:"savas", b:"Rusya'ya savaş ilanı — 1787-1792 Osmanlı-Rus Savaşı başladı",
  savas:"1787-08-16",   // SAVAŞIN KİMLİĞİ = savaşın başlangıç günü
  evre:2 }              // 1 süreç · 2 başlangıç · 3 olay · 4 savaşın sonu · 5 barış
```

| Alan | Anlamı |
|---|---|
| `savas` | Maddenin ait olduğu savaşın **başlangıç günü** (`ANTLASMALAR[].savas_basi` ile aynı değer). Bir savaşın bütün maddeleri aynı değeri taşır |
| `evre` | `1`…`5` — yukarıdaki beş başlık |

**Neden ölçülebilir:** bir savaş için `evre` kümesi `{1,2,4,5}`ü kapsamıyorsa ya da `evre:3`
hiç yoksa, o savaşın anlatısı eksiktir — ve bu **tek bir `if` ile sorulabilir** (projenin
kendi ölçütü: bir `if` ile sorulamıyorsa kayıt vardır, veri yoktur).
**Şart (`D010`):** denetim iki yönde sınanmalı — tam anlatılmış bir savaş temiz çıkmalı,
④'ü olmayan bir savaş ötmeli.

### 2.4 Şemanın bugünkü karşılığı — bütün savaşlar için ölçüm
`ANTLASMALAR[].savas_basi` günlerinde kronoloji maddesi var mı (yani **② başlangıç**
yazılmış mı):

```
TAM (o günde madde var)      24 / 37
±30 gün içinde bir madde var  8 / 37
HİÇ YOK                       5 / 37
```
**② başlığı hiç olmayan beş savaş:**
`1443-09-01` (Edirne-Segedin) · `1603-09-01` (Nasuh Paşa) · `1663-04-01` (Vasvar) ·
`1672-06-01` (Bucaş) · **`1683-07-14` (Karlofça — yani Viyana kuşatmasının başladığı gün;
kronolojide 1683-09-12 bozgunu var, kuşatmanın BAŞLANGICI yok)**.

⚠️ Bu beş satır, H-0006'nın 1787-92'nin ötesinde de karşılığı olduğunu gösterir; **düzeltme
bu oturumun kapsamında değildir**, ölçüm olarak bırakılmıştır.

### 2.5 1787-1792 savaşı — mevcut 23 maddenin evrelere dağılımı

| Evre | Madde | Sayı |
|---|---|---|
| ① süreç | 1787-07-27 Rus elçisine ültimatom | **1** (yalnız Rus ayağı) |
| ② başlangıç | 1787-08-16 Rusya'ya savaş ilanı · 1788-02-09 Avusturya'nın savaşa girmesi | **2** |
| ③ olaylar | Böğürdelen · Dinyester geçişi · Dubica · Hotin · Novi · Özi · Bükreş · Bender · Kili · İsmail · Anapa | **11** |
| ④ savaşın sonu | — | **0** |
| ⑤ barış | 1791-08-04 Ziştovi · 1792-01-10 Yaş | **2** |
| evre dışı (araya giren) | Abdülhamid'in ölümü · Selim'in cülûsu · Prusya ittifakı · Oran · Nizâm-ı Cedîd · Fransa'da cumhuriyet | 6 |

🔴 **En büyük boşluk ④: savaşın sonu — sıfır madde.** Savaş, iki cephede de barış
antlaşmasından önce mütarekelerle durmuştur; kronolojide bunların hiçbiri yok.
🟡 **İkinci boşluk ①: Avusturya ayağının "savaşa giden süreç" maddesi yok** — Avusturya
anlatıya doğrudan 1788-02-09'da savaşa girerek başlıyor.

### 2.6 🔴 Atlasın kendi içinde bir günlük çelişki
```
data/savaslar.js   ANTLASMALAR "Yaş".savas_basi = 1787-08-17
data/olaylar*.js   madde t:"1787-08-16" · gun:"16 Ağustos 1787 (2 Zilkade 1201)"
```
Aynı olay iki dosyada bir gün farkla duruyor. **`CLAUDE.md §4`: atlas referans değildir** —
hüküm iki dosyanın birbirine bakmasıyla değil, TDV'ye sorularak verilir. Ölçüm burada
bildirilmiştir; düzeltme koordinatörün.

---

## 3. Eksik maddeler — TDV taraması

36 TDV maddesinin gövdesi okundu (`zistovi-antlasmasi` · `yas-antlasmasi` · `yusuf-pasa-koca`
· `cezayirli-gazi-hasan-pasa` · `selim-iii` · `abdulhamid-i` · `melek-mehmed-pasa` ·
`semendire` · `yergogu` · `ibrail` · `akkirman` · `belgrad` · `kili` · `prusya` · `rusya` ·
`osmanlilar` · `vasif-ahmed-efendi` … ). **Muharebe adlarının kendi maddesi YOK** (`macin` ·
`foksani` · `rimnik` · `kalafat` · `kilburun` · `mehadiye` · `sebes` · `kalas` hepsi 302):
anlatı sadrazam ve şehir maddelerinin içinde — `CLAUDE.md §4`ün "TDV olay değil yer-kişi
ansiklopedisidir" kuralının bir vakası daha.
⚠️ `koca-yusuf-pasa` ve `hasan-pasa-cezayirli` **200 döner ama yalnız "bk." kabuğudur**;
gerçek maddeler `yusuf-pasa-koca` ve `cezayirli-gazi-hasan-pasa`.

### ④ SAVAŞIN SONU — bugün sıfır madde, TDV altısını da tarihliyor 🔴
| Tarih | Olay | Kaynak (gövdesi okundu) |
|---|---|---|
| 1790-09-06 | İstanbul meşveretinin mütareke kararı | `zistovi-antlasmasi` |
| **1790-09-18** | **Yergöğü Mütarekesi** — sadrazam çadırında imza (9 Muharrem 1205 Pazar) | `zistovi-antlasmasi` |
| 1790-09-21 | Coburg'un imzası, metinlerin mübadelesi | `zistovi-antlasmasi` |
| 1791-06-11 | Yergöğü mütarekesinin sona ermesi (9 ay vade) | `zistovi-antlasmasi` |
| 1791-08-08 | Kalas'ta Vâsıf–Repnin ön mutabakatı | `yusuf-pasa-koca` |
| **1791-08-11** | **Kalas (Galaç) Mütarekesi** — sekiz aylık (11 Zilhicce 1205) | `yas-antlasmasi` · `vasif-ahmed-efendi` · `nizam-i-cedid` · `osmanlilar` — **dördü uyuşuyor** |

### ③ SAVAŞ OLAYLARI — atlasta olmayan, TDV'de **günü olan** maddeler
| Tarih | Olay | Kaynak |
|---|---|---|
| 1788-05-10 | Cezayirli Hasan Paşa'nın donanmayla Karadeniz'e açılması | `yusuf-pasa-koca` |
| 1789-05-01 | Kalas bozgunu | `yusuf-pasa-koca` |
| **1789-08-01** | **Fokşani bozgunu** | `yusuf-pasa-koca` + `cezayirli-gazi-hasan-pasa` (uyuşuyor) |
| **1789-09-22** | **Rimnik / Boze bozgunu** | aynı iki madde (uyuşuyor) |
| 1789-10-11 | İsmâil'in teslimi — ⚠️ atlastaki **1790-12-22 İsmâil'in düşüşünden AYRI** olay | `yusuf-pasa-koca` |
| 1789-10-13 | Semendire'nin Avusturya'ya teslimi — **toprak değişimi** | `semendire` |
| 1790-04-16 | Eski Hırsova'nın Avusturya'ya geçişi — **toprak değişimi** | `zistovi-antlasmasi` |
| 1790-06-08 | Avusturya'nın Yergöğü'ye inişi ve püskürtülmesi | `yergogu` |
| **1791-07-09** | **Maçin bozgunu** — barışı getiren yenilgi (8 Zilkade 1205) | `yas-antlasmasi` |
| 1789-06-07 · 1789-12-03 · 1790-03-30 · 1791-02-27 · 1792-05-03 · 1792-05-04 | sadrazam zinciri: Koca Yusuf'un azli → Cezayirli Hasan'ın tayini → Şumnu'da ölümü → Koca Yusuf'un 2. sadâreti → azli → Melek Mehmed Paşa | `yusuf-pasa-koca` · `cezayirli-gazi-hasan-pasa` · `melek-mehmed-pasa` |

**Yalnız AY/YIL hassasiyetinde olanlar** (gün uydurulmaz, `YYYY-01-01` + metinde hassasiyet):
Mehâdiye ve Şebeş muharebeleri (Ağustos-Eylül 1788) · Yılan Adası/Fidonisi deniz muharebesi
(Ağustos 1788) · Yaş'ın düşmesi (Eylül 1788) · Kalafat çıkarması (Nisan 1790) · Çettin
kalesi (Haziran 1790) · İbrâil kuşatması (Haziran 1791) · Şerif Hasan Paşa'nın idamı (Şubat
1791) · **Belgrad'ın Avusturya'ya geçişi (yalnız YIL: 1789)** · **Akkirman'ın düşüşü (yalnız
YIL: 1789)**.

### ⑤ BARIŞ — süreç maddeleri (bugün yalnız imza günleri var)
Ziştovi konferansının açılışı 1790-12-30 · görüşmelerin kesilmesi 1791-06-10 · heyetin
dönüşü 1791-07-18 · onay 1791-08-12 · tasdiknâme mübadelesi 1791-08-31 · Yaş'a varış
1791-10-02 · Potemkin'in ölümü 1791-10-16 · Yaş konferansının ilk oturumu 1791-11-10 ·
barışın ilanı 1792-01-07 · sadrazam senediyle onay 1792-01-18 · teyidnâme 1792-01-27 ·
**tasdiknâme mübadelesi 1792-02-10 (barış devletler hukukunda kesinleşir)**.

### ① SÜREÇ — üçü tarihli, dördü TDV'de tarihsiz
Tarihli: Kırım Senedi 1784-01-08 · Melek Mehmed Paşa'nın azli 1788-01-25 (savaş karşıtlarının
tasfiyesi) · II. Joseph'in ölümü 1790-02-20.
🔴 **`bulunamadı`** (uydurulmadı): Avusturya-Rusya ittifakının tarihi · II. Joseph'in savaş
kararı · II. Katerina'nın 1787 Kırım gezisi · Aralık 1787 Belgrad baskını · **Kılburun
(Ekim 1787)** — TDV savaşın bununla başladığını söylüyor ama **tarih vermiyor**.

---

## 4. Mevcut veriye dair uyarılar (düzeltme yapılmadı)

1. **`savaslar.js` ↔ `olaylar*.js` çelişkisi:** Yaş'ın `savas_basi` = `1787-08-17`, kronoloji
   maddesi `1787-08-16` (hicrî çapası var: 2 Zilkade 1201). TDV'nin çapalı tarihi **16
   Ağustos**; yani kronoloji doğru, `savaslar.js` düzeltilmeli.
2. **Kili (atlas `1790-10-24`):** TDV `kili` maddesi yalnız "1790'da… teslim alındı" diyor,
   **gün vermiyor.** Atlastaki günün dayanağı TDV değil — kaydın `kaynak:` alanı gözden
   geçirilmeli.
3. **Nizâm-ı Cedîd (atlas `1792-06-01`):** TDV gün vermiyor, yalnız "(1792)". TDV'nin
   desteklediği en yakın çapa **1792-06-07** (Melek Mehmed Paşa'nın İstanbul'a ulaşıp
   lâyihaların toplanmaya başlaması).
4. **TDV kendi içinde dokuz yerde çelişiyor** (taraf seçilmedi, çapalı olan işaretlendi):
   Maçin 9 Tem / 5 Ağu / 6 Ağu 1791 → **9 Temmuz** (hicrî çapalı) · Yergöğü mütarekesi 18/19
   Eylül → **18** (hicrî + gün adı) · Kalas mütarekesi 11/12 Ağustos → **11** (dört madde) ·
   Yaş imzası 8/9/10 Ocak → **10 Ocak** (hicrî + gün adı; 9 Ocak *planlanan* gündü, `rusya`
   maddesindeki 8 Ocak çapasız) · Ziştovi tasdiknâmesi 23/31 Ağustos → **31** (1 Muharrem
   1206) · Avusturya'nın savaşa girişi "8 Şubat **1787**" (aynı maddede, açık dizgi hatası) →
   9 Şubat 1788 · Kırım Senedi 8/9 Ocak 1784 (ve bir maddede "1783") · savaş ilanı 16/17/19
   Ağustos → 16 · Ziştovi son oturumu 3/4 Ağustos → 4 Ağustos (imza).
   ⇒ **Atlastaki 1792-01-10 (Yaş) ve 1787-08-16 (savaş ilanı) TDV'nin en iyi çapalanmış
   tarihleridir; değiştirilmemeli.**

---

## 5. Ne istiyorum (1.MURAT)

1. **`YAMA-SIRA-0918.json`** — `gs` alanı + `app.js` tek satırlık comparator + üç maddeye
   `gs` değeri. `js/app.js` BAGLAMA'da; devir gerekiyor.
2. **`VERI-YAPISI.md`ye `savas:` + `evre:` alanları** (§2.3) — dosya koordinatörde, öneri
   olarak bırakıldı.
3. **④ kovasının altı maddesi** öncelikli: bugün 1787-92 savaşının "sonu" kronolojide hiç
   yok. Yazılacaksa madde metinleri bu rapordaki tarih ve kaynaklarla yazılabilir; yazacak
   oturum ayrıca sevk edilmeli (bu oturum `data/olaylar*.js`e yazmadı).
4. **Üç veri uyarısı** (§4.1-4.3) ayrı kalemler: `savaslar.js` bir gün kayması, Kili'nin
   kaynaksız günü, Nizâm-ı Cedîd'in kaynaksız günü.
5. **②'si hiç olmayan beş savaş** (§2.4) — 1787-92'nin dışında, ayrı sevk konusu.
