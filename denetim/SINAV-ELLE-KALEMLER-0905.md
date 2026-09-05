# SINAV — ELLE YAPILACAKLAR kontrol listesi (M-2903 yeni iş)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

🔴 **Sebep:** bu gece bir beyan (Timbuktu) sessizce düştü ve düşeceğini
önceden yazan uyarı okunmadı. Elle yapılan iş, aracın YAPMADIĞI iş
demektir — hiçbir otomatik denetim bunu yakalamaz. Bu yüzden sınav
**önceden** yazılıyor, merge SIRASINDA değil.

Kaynak: `oturumlar/KOSU-SONRASI-KUYRUK.md` "🔴🔴 ELLE YAPILACAKLAR" bloğu
(dört kalem, koordinatörün kendi derlemesi) — her kalem burada AYRICA
doğrulandı ve gerekirse düzeltildi.

**Ölçülmüş taban (bu turda canlı ölçüldü, kopyalanmadı):**
`py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.yukle(sessiz=True)))"` → **3805**

---

## ① `kur:` — Ndjamena · Şibâm · Şihr

🟡 **KUYRUK METNİYLE FARK BULUNDU:** `KOSU-SONRASI-KUYRUK.md` üçünü de
`kur:` kalemi altında sayıyor, ama BEN yalnız **Ndjamena**'ya `kur:`
verdim (`denetim/yer_yama_belgesiz4.js`) — Şibâm/Şihr'in kendi yaması
(`denetim/yer_yama_hadramut_nokta.js`) `kur:` TAŞIMIYOR, çünkü ikisi de
antik/sürekli yerleşimler ("kuruluş" tarihi yok, tersine `kasitli_bosluk`
ile pre-1450/pre-1881 açık bırakıldı). ⇒ Bu ikisi ② (YENİ NOKTA) kalemine
ait, ①'e değil — kuyruk metni muhtemelen "elle girilecek alanlar"ı tek
listede topladı. **Uygulayan kişi Şibâm/Şihr'e `kur:` ARAMASIN; yoktur.**

```
DOĞRULAMA (merge sonrası):
  grep -n 'ad:"Ndjamena"' data/yerlesimler.js
  BEKLENEN: kur:"1900-01-01" VE s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}]
            İKİSİ DE aynı kayıtta, d:[] KORUNMUŞ (boş kalabilir, dokunulmamalı)
```

**YANLIŞ YAPILIRSA:**
- `kur:` YANLIŞ KAYDA yazılırsa (ad belirsizliği) → sessiz veri bozulması,
  YALNIZ o kaydı `git diff` ile karşılaştırarak fark edilir. **Geri
  alınabilir** (tek satırlık `git revert`/elle silme) ama YALNIZ fark
  edilirse.
- `kur:` alanı henüz `_sahiplik_uygula.py`ye eklenmeden (bkz. aşağıdaki
  "DÖRDÜNCÜ YER" notu) elle girilirse ve SONRA araç `--yaz` ile tekrar
  koşarsa: `kaynak:` ile AYNI sözleşme (`SKALER_KORUNAN`) sayesinde
  ZATEN DOLU alan EZİLMEZ — güvenli, ama sıralama önemli: **önce araç
  düzeltmesi (4 satır), sonra elle giriş, ya da tersi FARK ETMEZ** çünkü
  koruma her iki yönde de çalışır. Tek risk: araç düzeltmesi YAPILMADAN
  yeni bir `yer_yama_*.js` kur: yaması gelirse, o yama SESSİZCE düşer
  (bu bir Ndjamena riski değil, GELECEK bir yama riski — bkz. ONERI-KUR-ALANI).

---

## ② YENİ NOKTA — 50 (48 + Şibâm + Şihr)

```
DOĞRULAMA 1 — SAYI:
  py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.yukle(sessiz=True)))"
  BEKLENEN: 3805 → 3855  (fark tam +50, ne az ne çok)

DOĞRULAMA 2 — 3KM SINAVI (mevcut alet, YENİDEN KOŞULACAK):
  py denetim/ARAC-YENI-NOKTA-3KM-0905-kos.py
  BEKLENEN: 🔴 <3km SIFIR (zaten 5 Eylül 08:45'te 0 ölçülmüştü — bu ELLE
  giriş SIRASINDA bir yazım hatasıyla bozulmadıysa hâlâ 0 olmalı)

DOĞRULAMA 3 — BENİM KENDİ 2 NOKTAM (Şibâm·Şihr) ÖZELİNDE:
  grep -n 'ad:"Şibâm (Hadramut)"\|ad:"Şihr (Hadramut)"' data/yerlesimler*.js
  BEKLENEN Şibâm: kasitli_bosluk:true, bos:"veri-yok",
           s:[{f:"1450-01-01",t:"1923-10-29",d:"kesiri-sultanligi"}]
           (renk BEKLİYOR — kesiri-sultanligi künyesi merge'de EKLENMEDEN
            bu nokta RENKSİZ ÇİZİLECEK, haritada delik AÇAR — sıra şart:
            önce künye+renk, SONRA bu nokta)
  BEKLENEN Şihr:  kasitli_bosluk:true, bos:"kabile",
           s:[{f:"1881-01-01",t:"1923-10-29",d:"kuayti-sultanligi"}],
           isg:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}],
           v:[{f:"1915-01-01",t:"1919-01-01",k:"..."}]
           (AYNI ŞART — kuayti-sultanligi renklenmeden çizilmemeli)
```

**YANLIŞ YAPILIRSA:**
- lat/lon YAZIM HATASI (bir haneli kayma) → nokta ya (a) mevcut bir
  yerin 3km içine düşer (3km sınavı YAKALAR, ② doğrulama 2 bunu görür)
  ya da (b) yanlış coğrafyaya düşer ve **Voronoi'yi bozarak** komşu
  bölgeyi yanlış boyar (`§2` — 3km sınavı bunu GÖRMEZ, yalnız yakın
  NOKTA çakışmasını görür, yanlış PETEK'i görmez). **Geri alınabilir**
  (koordinat düzeltmesi tek satır) ama yalnız harita üretiminden SONRA
  görsel şikâyetle fark edilirse — pahalı geri bildirim döngüsü.
- Şibâm/Şihr, `kesiri-sultanligi`/`kuayti-sultanligi` künyeleri RENKSİZ
  hâldeyken elle eklenirse: nokta ÇİZİLİR ama **renksiz/varsayılan
  renkte** görünür — `polonya-erken` emsalinin aynısı, harita deliği.
  **Geri alınabilir** (künye rengi üretilince otomatik düzelir, veri
  bozulmaz) ama görsel olarak YANLIŞ bir yayın çıkar ARADA.

---

## ③ Mükellâ — `bos:`/`neden:` silinip himaye kalıbına geçiş

🔴🔴 **EN YÜKSEK RİSKLİ KALEM** — `SKALER_KORUNAN`ın kendi tasarım amacı
tam olarak BUNU (bir araştırmacının beyanını sessizce silmeyi)
ENGELLEMEK; bu düzeltme o korumayı **bilerek ve haklı gerekçeyle**
aşıyor (TDV kanıtı: Kuaytî 1881'de kıyının tamamını aldı, "devletsiz"
YANLIŞ). Araç bunu YAPAMAZ — kasıtlı olarak.

```
DOĞRULAMA:
  grep -n 'ad:"Mukalla"' data/yerlesimler.js
  BEKLENEN (data/yerlesimler.js:1001'in YENİ hâli):
    bos: YOK (satırda hiç geçmemeli)
    neden: YOK (satırda hiç geçmemeli)
    s:[{f:"1881-01-01",t:"1923-10-29",d:"kuayti-sultanligi"}]
    isg:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}]
    v:[{f:"1915-01-01",t:"1919-01-01",k:"Osmanlı hâkimiyeti (NOMİNAL — bkz. Şihr kaydı)"}]
```

**YANLIŞ YAPILIRSA:**
- `bos:`/`neden:` silinir AMA `s:` yanlış yazılırsa (örn. hâlâ
  `s:"ingiltere"` doğrudan, himaye kalıbı UYGULANMAZSA): araştırmacı
  beyanı (kim ne zaman "devletsiz" dedi, niçin) **GERİ ALINAMAZ** kaybolur
  — yalnız `git log -p -- data/yerlesimler.js` ile ESKİ COMMIT'TEN
  kazılabilir, dosyanın KENDİSİNDE bir iz KALMAZ.
  ⇒ **ÖNLEM: bu satırı değiştiren commit'in mesajına ESKİ DEĞERİ AYNEN
  YAPIŞTIR** (`bos:"devletsiz", neden:"Körfez şeyhliklerinde..."), böylece
  `git log` araması olmadan da geri dönüş metni COMMIT MESAJINDA durur.
- `kuayti-sultanligi` künyesi henüz renksizken bu düzeltme uygulanırsa:
  ②'deki aynı risk (renksiz çizim) — sıra şart, önce renk.

---

## ④ Yakut cinsi — 6 kayıt `devletsiz` → `kabile`

```
DOĞRULAMA — HEM DEĞİŞENİ HEM DEĞİŞMEYENİ SAY (§3.5.1: iki ucu da ölç):
  grep -n 'ad:"Yakutsk"\|ad:"Vilyuysk"\|ad:"Olyokminsk"\|ad:"Jigansk"\|ad:"Verhoyansk"\|ad:"Bulun"' data/yerlesimler*.js
  BEKLENEN: altısının ALTISINDA da bos:"kabile" (devletsiz DEĞİL)

  grep -n 'ad:"Anadır"\|ad:"Çukotka"' data/yerlesimler*.js
  BEKLENEN: ikisinin İKİSİNDE de bos:"devletsiz" KALDI — DOKUNULMADI
```

**YANLIŞ YAPILIRSA:**
- 6 yerine 8'i (Anadır/Çukotka dahil) değiştirilirse: TDV'nin AÇIKÇA
  konuştuğu bir "devletsiz" beyanı (Çukotka: "never paid... their status
  as subjects was little more than a formality") **yanlış cinse** taşınır
  — `§11` NOKTA SİBİRYA'nın kendi sınavının (kaynak konuşuyor mu/susuyor
  mu) İHLALİ olur. **Geri alınabilir** (git log) ama yalnız fark edilirse
  — ve bu kalem tam olarak "39 değil 6" diye bir kez ZATEN daraltılmıştı,
  yani sayı hassasiyeti burada ÖZELLİKLE kırılgan.
- Yamayla İNMEZ (`SKALER_KORUNAN`) — ③'teki gibi araç kasıtlı olarak
  atlıyor, elle giriş ŞART.

---

## SIRA BAĞIMLILIĞI — dört kalem birbirini bekliyor

```
③ ve Şibâm/Şihr(②)  →  RENK BEKLEYEN KÜNYELER (kesiri·kuayti·piombino·
                        agadez·arma·meysur·maratha) ÜRETİLMEDEN
                        TAMAMLANAMAZ — önce renk, sonra bu ikisi
① ④                  →  renkten BAĞIMSIZ, hemen uygulanabilir
```

## ÖZET TABLO

| # | kalem | doğrulama komutu | geri alınabilir mi |
|---|---|---|---|
| ① | kur: (yalnız Ndjamena) | `grep ad:"Ndjamena"` | ✓ kolay, fark edilirse |
| ② | 50 yeni nokta | nokta sayısı 3805→3855 + 3km sınavı | ✓ ama Voronoi hatası pahalı |
| ③ | Mükellâ | `grep ad:"Mukalla"`, bos/neden YOK | 🔴 GİT LOG'SUZ geri alınamaz |
| ④ | Yakut 6+2 | iki grup da ayrı ayrı sayılmalı | ✓ ama sayı kırılgan (39→6 emsali) |

`⏳ BEKLİYORUM: ①'deki Şibâm/Şihr uyuşmazlığı (kur: onlarda YOK) doğru mu okudum, yoksa ayrıca kur: eklemem mi gerekiyordu?`

---

# EK — DÖRT KALEM BUGÜNKÜ VERİYE KARŞI ÖLÇÜLDÜ (17:15)

**Oturum:** KURE GORUNUM · sevk **M-3010** · ölçüm **read-only**, veri
yazılmadı (koşu 5b canlı).

> 🔴 **Niçin bu EK:** yukarıdaki sınav **11:57**'de yazıldı. O saatten
> sonra en az **10 yeni nokta** indi (`zaza` 7 · `cermik_sason` 2 ·
> `hizan` 1) ⇒ ②'nin sayısı ve ④'ün doğrulama komutu **bayatladı.**
> `§11`: *"kuyruktaki sayı bayat"* bu gece dokuz kez çıktı; bu blok
> ölçülmemiş son kümeydi.

**Bu turda canlı ölçülen taban** (kopyalanmadı):
```
girdi.yukle(sessiz=True)        3805 nokta · 3805 benzersiz ad · 77 dosya
bekleyen yama                   denetim 32 dosya/397 · data 58 dosya/3267
                                (her dosya node+vm ile AYRI bağlamda — §7)
```

## ÖZET — ÜÇ KOVA

| # | kalem | kova | ölçüm |
|---|---|---|---|
| ① | `kur:` | 🟡 **İFADE YANILTICI** | "yalnız Ndjamena" → `kur:` taşıyan **10** kayıt var; ama araç açısından önemli olan **1** |
| ② | yeni nokta | 🟡 **SAYI DEĞİŞTİ** | kuyruk 52 · sınav 50 · **bugün 60** |
| ③ | Mükellâ | 🟢 **HÂLÂ GEÇERLİ** | `bos:'devletsiz'` + `neden:` duruyor, hiçbir yama dokunmuyor |
| ④ | Yakut | 🟢 **GEÇERLİ, ama komutu KIRIK** | 6 kaydın 6'sı hâlâ `devletsiz`; **koruma grep'i hiçbir şey eşleştirmiyor** |

🔴 **Üçüncü kova (`zaten yapılmış`) BOŞ** — dördü de hâlâ yapılacak.

---

## ① `kur:` — 🟡 ifade yanıltıcı, karar DOĞRU

```
bekleyen yamada `kur:` taşıyan kayıt          10
  bunlardan CANLIDA VAR OLAN (mevcut kayıt)    1   ← Ndjamena
  bunlardan YENİ NOKTA                         9
```
| dosya | ad | kur | |
|---|---|---|---|
| `yer_yama_belgesiz4.js` | Ndjamena | 1900-01-01 | **MEVCUT** |
| `yer_yama_1923_nepal_karayip.js` | Cap-Haïtien · Port-au-Prince · Santiago de los Caballeros · Guatemala City | 1670 · 1749 · 1495 · 1776 | yeni |
| `yer_yama_1923_yeni.js` | Kızıl (Belotsarsk) | 1914-01-01 | yeni |
| `yer_yama_doguasya.js` | Hunçun · Hailar · Petuna | 1714 · 1731 · 1726 | yeni |
| `yer_yama_gronland_col.js` | Nuuk (Godthåb) | 1721-01-01 | yeni |

🟢 **Kuyruğun KARARI doğru:** araç yalnız **mevcut** kayda alan yazar;
dokuz yeni nokta zaten ②'de **elle** giriliyor ve `kur:` onlarla birlikte
iniyor. Yani *"araca eklenmesi gereken tek vaka Ndjamena"* — doğru.

🔴 **AMA CÜMLE TUZAK:** *"`kur:` **YALNIZ Ndjamena**"* okunduğunda
**dokuz noktanın `kur:` alanı elle girilmeyebilir.** Kuyruk ②'de
*"lat/lon/kur/kasitli_bosluk alanları da elle"* diyor — iki satır
birbirini tamamlıyor ama **ayrı bloklarda**, ve ① tek başına okunursa
dokuz kuruluş tarihi sessizce düşer.
⇒ **Önerilen ifade:** *"`kur:` taşıyan 10 kayıt var; 9'u YENİ NOKTA
(②'de elle iniyor), araç düzeltmesi gereken tek MEVCUT kayıt Ndjamena."*

### 🔴 ARAÇ DÜZELTMESİ YAPILMADI — ve **iki bağımsız kapı** var
```
arac/_sahiplik_uygula.py:254  CATISABILIR    = (d,s,v,isg,m,kaynak,bos,neden,not)   kur YOK
arac/_sahiplik_uygula.py:389  SKALER_ALANLAR = (m,kaynak,bos,neden,not)             kur YOK
arac/_sahiplik_uygula.py:392  SKALER_KORUNAN = (kaynak,bos,neden,not)               kur YOK
arac/_sahiplik_uygula.py:88   node süzgeci   r.d||r.s||r.v||r.isg||r.m||r.kaynak||
                                             r.bos||r.neden||r.not                  kur YOK
```
⇒ Kuyruğun *"DÖRT yer birlikte"* uyarısı **birebir doğru** ve dördü de
hâlâ açık. Ve ikisi **bağımsız**:
```
YALNIZ `kur:` taşıyan bir yama  → node süzgecinde elenir, Python'a HİÇ ULAŞMAZ
`kur:`+`kaynak:` taşıyan yama   → süzgeci GEÇER, ama SKALER_ALANLAR'da
                                  olmadığı için alan hiç okunmaz
```
🔴 **Ve ikincisi SESSİZ:** döngü `SKALER_ALANLAR` üzerinde döndüğü için
`kur` hiç sorulmuyor ⇒ `atlanan` listesine **kayıt düşmüyor.** Ndjamena
yaması `kaynak:` taşıdığı için süzgeci geçiyor, sonra `kur:` **iz
bırakmadan** yok oluyor. Kalemin elle listede olmasının sebebi tam bu.
📌 `YAMA-1923-0905.json`un iki bağımsız kusurunun aynısı: biri
düzeltilse öteki hâlâ yutar.

🟢 **VE BU DÜZELTME BU GECE YAPILABİLİR — koşu engel DEĞİL.** Ölçüldü:
`girdi.motor_izi()` yalnız **üç** dosyayı parmak izliyor
(`uret_petek.py` · `renkler.py` · `girdi.py`);
`_sahiplik_uygula.py` **listede yok** ⇒ düzenlemek koşuyu öldürmez.

**KİM (§7):** `arac/` düzeltmesi + `data/yerlesimler.js` (Ndjamena) →
**Oturum 0 / merge.**

---

## ② YENİ NOKTA — 🟡 50 → **60** (61 değil)

```
bekleyen kayıt toplam                574
  CANLIDA VAR (güncelleme)           513
  CANLIDA YOK (aday yeni)             61
  ⚪ bunlardan lat/lon TAŞIMAYAN       1   ← NOKTA DEĞİL
  🟢 GERÇEK YENİ NOKTA                60
```
| dosya | n | |
|---|---|---|
| `yer_yama_doguasya.js` | 19 | |
| `yer_yama_gronland_col.js` | 9 | |
| `yer_yama_sibirya_beyan.js` | 8 | |
| `yer_yama_zaza.js` | **7** | 🆕 11:57'den sonra |
| `yer_yama_1923_nepal_karayip.js` | 6 | |
| `yer_yama_1923_yeni.js` | 6 | |
| `yer_yama_cermik_sason.js` | **2** | 🆕 |
| `yer_yama_hadramut_nokta.js` | 2 | Şibâm · Şihr |
| `yer_yama_hizan.js` | **1** | 🆕 |

⇒ 50 + 10 = **60.** Sınav dosyasının `3805 → 3855` beklentisi
**`3805 → 3865`** olmalı.

⚪ **61. kayıt bir nokta değil:** `data/yer_yama_uyg2.js` içinde
`ad:"Urmiye · Selmâs · Sulduz · Dizmâr · Sarukurgân · Saidâbâd"` —
alanları `aciklama · alan · hukum · kaynak · no · parti · yeni`,
**`lat`/`lon` YOK.** Bir HÜKÜM kaydı, bir yerleşim değil.
🟢 Ve araç bunu **sessizce yutmuyor**: `_sahiplik_uygula.py:527`
*"veride YOK — yeni nokta, yama ile yazılmaz"* diye `atlanan`a yazıyor.
⇒ Gürültü, kayıp değil. Ama bir nokta sayacı onu **yeni nokta** sayar —
bu EK'in sayısı 61 değil 60 olmasının sebebi.

### 🟢 3 KM SINAVI BUGÜN YENİDEN KOŞULDU — taban bayattı, HÜKÜM AYAKTA
Sınav dosyası *"5 Eylül 08:45'te 0 ölçülmüştü"* diyor; o ölçüm **50**
noktalıydı. 60 nokta için yeniden koşuldu (hem YENİ↔CANLI hem
**YENİ↔YENİ**):
```
🔴 3 km altı ihlal   0
🟡 3-8 km sınırda    2   Acdîr (Ajdir) ↔ el-Hüseyme      5,27 km
                         Patan (Lalitpur) ↔ Katmandu      5,56 km
```
İkisi de **ayrı yerleşim** (`§11`in Varat/Varad ölçütü: yakınlık tek
başına mükerrer değil — zaman çizgileri farklı). ⇒ Dokunulmasın.
📌 Taban bayattı ama sonuç değişmedi — **ölçmeden bilinemezdi.**

**KİM (§7):** yeni kayıtlar → **Oturum 0 / merge** (`yerlesimler_*.js`).
⚠️ Şibâm/Şihr'in sıra bağımlılığı yukarıda yazılı ve **hâlâ geçerli**:
`kesiri-sultanligi` / `kuayti-sultanligi` renklenmeden inmemeli.

---

## ③ Mükellâ — 🟢 HÂLÂ GEÇERLİ, hiç dokunulmamış

```
CANLI  ad:"Mukalla"   (kayıt adı "Mükellâ" DEĞİL — sınavın grep'i DOĞRU)
       bos:   'devletsiz'                      ← DURUYOR
       neden: "Körfez şeyhliklerinde 19. yy'daki İngiliz himaye ant…"  ← DURUYOR
       s:     [{f:"1888-01-01", t:"1923-10-29", d:"ingiltere"}]
bekleyen yamalarda Mukalla'ya dokunan kayıt: 0
```
⇒ Kalem **tamamen elle**, ve araç onu zaten yapamaz (`SKALER_KORUNAN`
dolu bir `bos:`/`neden:`i **asla silmez** — bilerek).

🔵 **Ve düzeltme sanıldığından bir alan geniş:** mevcut `s:` **1888**'de
başlıyor ve doğrudan `ingiltere`; hedef **1881 `kuayti-sultanligi`** +
`isg:ingiltere 1888`. Yani yalnız kimlik değil **başlangıç yılı da**
değişiyor (1888 → 1881). Sınavın BEKLENEN bloğu bunu zaten doğru yazmış.

📌 Ve `neden:` metnindeki öncül, bu akşam M-3004'te **çürütülen** öncülün
aynısı: *"19. yy'daki İngiliz HİMAYE ANTLAŞMALARINA kadar"* — Bahreyn'de
ölçüldü, 1861 bir himaye antlaşması **değil.** Aynı cümle Manama
kaydının `neden:` alanında da duruyor. **İki kayıt, tek yanlış öncül.**

**KİM (§7):** `data/yerlesimler.js` → **Oturum 0 / merge.**

---

## ④ Yakut — 🟢 sayı DOĞRU (6), 🔴 doğrulama komutu KIRIK

```
Yakutsk · Vilyuysk · Olyokminsk · Jigansk · Verhoyansk · Bulun
  altısının ALTISI da bugün  bos:'devletsiz' · kasitli_bosluk:true
⇒ "39 değil 6" daraltması AYAKTA, kalem YAPILMAMIŞ
```

### 🔴 AMA KORUMA GREP'İ HİÇBİR ŞEY EŞLEŞTİRMİYOR
Sınav şunu yazıyor:
```
grep -n 'ad:"Anadır"\|ad:"Çukotka"' …     BEKLENEN: ikisi de devletsiz KALDI
```
Canlı adlar **bunlar değil**:
```
ad:"Anadır (Anadyrsk)"     lat 64,75  lon 177,48   bos:'devletsiz'
ad:"Çukotka merkezi"       lat 66,0   lon 172,0    bos:'devletsiz'
```
⇒ Kapanış tırnağı yüzünden grep **ikisini de bulamaz**, çıktı **boş**
gelir — ve boş çıktı *"dokunulmamış, temiz"* diye okunur.
📌 `§11`: ***`0`, "yok" ile "bakmadım" arasında ayrım yapmaz.*** Bir
koruma komutunun sessiz kalması, korumanın **çalıştığı** anlamına gelmez.

🟢 **DAHA SAĞLAM DOĞRULAMA — sayım, grep değil.** Bugünkü dağılım:
```
CANLI bos:  devletsiz 132 · kabile 144 · veri-yok 33 · insansiz 10 · hata 7
MERGE SONRASI BEKLENEN:  devletsiz 126 · kabile 150   (öteki üçü DEĞİŞMEZ)
```
Altı fazla ya da eksik taşınırsa bu iki sayı **tutmaz** — ve `Anadır`/
`Çukotka` yanlışlıkla taşınırsa `devletsiz` 124'e düşer.

### 🔴 VE KALEM TEK DOSYA DEĞİL — ÜÇ DOSYA
```
yerlesimler_ek8.js    Jigansk · Verhoyansk · Bulun
yerlesimler_ek9.js    Yakutsk · Olyokminsk
yerlesimler_ek13.js   Vilyuysk
```
Kuyruk da sınav da tek bir düzenleme gibi okunuyor. Üç ayrı dosyada
altı satır — biri atlanırsa **sayım tutmaz ve sebebi görünmez.**

**KİM (§7):** üç `yerlesimler_ek*.js` → **Oturum 0 / merge.**

---

## KİM UYGULAYACAK — dördü de tek elde

| # | dokunulan dosya | sahip |
|---|---|---|
| ① | `arac/_sahiplik_uygula.py` (4 yer) + `data/yerlesimler.js` | Oturum 0 |
| ② | yeni `data/yerlesimler_*.js` kayıtları | Oturum 0 |
| ③ | `data/yerlesimler.js` | Oturum 0 |
| ④ | `data/yerlesimler_ek8.js` · `_ek9.js` · `_ek13.js` | Oturum 0 |

⇒ **Hiçbiri canlı bir işçi oturumun dosyasında değil**; dördü de merge
anında **1.MURAT**'ta. Tek istisna ①'in araç yarısı: `_sahiplik_uygula.py`
parmak izli **değil**, yani **merge'i beklemeden şimdi** düzeltilebilir.

## DAMGALAR
```
🟢 ÖLÇTÜM   dört kalemin dördü de bugünkü veriye karşı, canlı tabandan
🔴 BAYAT    ② (50→60) · ④'ün koruma komutu · ①'in ifadesi
🟢 GEÇERLİ  ③ ve ④'ün özü · ①'in KARARI
⚪ BOŞ      "zaten yapılmış" kovası — hiçbir kalem düşmedi
⚪ ÖLÇMEDİM ② dışındaki kalemlerin merge SONRASI etkisini (Değişmez 1/2)
            — 60 noktanın kırılma günleri `denetle.py`ye SORULMADI
⚪ ÖLÇMEDİM `kur:` düzeltmesinin dört yere yazılmış hâlini SINAMADIM
            (kod değişikliği YAPMADIM; `C13`ün üç ayağı koşulmadı)
🔴 YAZMADIM hiçbir veri · hiçbir dosya taşınmadı
```
