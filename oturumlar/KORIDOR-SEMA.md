# KORİDOR ŞEMA — 5. altyapı maddesini VERİYE indir

## ⓪ KİMLİK — HADDİN
```
SEN        : TASARIM + YAPIMCI oturum · adın KORİDOR ŞEMA
             (KORİDOR TASARIM'ın devamısın — araştırman bitti, yapım başlıyor)
DEĞİLSİN   : koordinatör DEĞİLSİN · MOTOR DEĞİLSİN
ÜSTÜN      : ClaudEmre koordinatörü (sana bu dosyayı veren oturum)
ALTIN      : kimse
YASAKLARIN : `arac/uret_petek.py` · var olan `data/yerlesimler*.js` ·
             `js/*` · `index.html` · kök `*.md` · üretim koşusu ·
             iş dağıtmak · başka oturum açmak
```

---

## ① NİÇİN VARSIN — ve hüküm SENİN turlarında değişti

Emre koridor ağını **5. altyapı maddesi** ilan etti (12 Ağu):
> *"Örümcek ağı yahut balık ağı gibi **iplikler ve ipliklerin ORTASINDA
> boğum noktalardan** oluşuyor."*

🟢 **VE SEN HİPOTEZİ TAM DOĞRULADIN** (tur 1 EK-3, commit `c631c31`):
```
ilk hüküm   KISMEN TUTTU  — "TDV kol listesini vermiyor"
son hüküm   TAM TUTTU     — "hata TDV'de değil BENDEYDİ: yanlış yerde
                             aradım. TDV KURUMU anlatır, GÜZERGÂHI
                             hakemli literatür verir."
kaynak      İzzet SAK – Cemal ÇETİN, DergiPark · 43 sayfa · gövdesi okundu
            arşiv dayanağı: Konya Şer'iye Sicili · Mühimme defterleri
çıkarılan   6 kol · 62 adlı durak · 2 kanat · 1 çatal (Kars / Tebriz)
```

🔴 **BUGÜN VERİDE HİÇBİRİ YOK** (13 Ağustos ölçümü, 2369 nokta):
```
boğum düğümü şeması    YOK
kenar şeması           YOK
kd: zamanlı kademe     0 / 2369   — şema VAR, veri BOŞ
m: bağlı merkez        721 / 2369 (%30) — ve YANLIŞ EKSENDE (Değişmez 3)
```

📌 **VE İŞİN ASIL ÖNEMİ BURADA:** senin kendi bulgun *"`m:` alanı ZATEN
BİR AĞDIR"* dedi. `Değişmez 3` `m:`yi **bozuk** ilan ediyor (359 çelişkili
çift, teşhis: *"siyasî bir şeyi coğrafî gruplama için kullanıyor"*).
⇒ **Senin şeman, ③ ve ④ altyapı maddelerinin ANAHTARIDIR.** `m:`yi
%100'e çıkarmak, şema gelmeden, bozuk modeli derinleştirmek olur —
o yüzden bölge işi SENİ BEKLİYOR.

**Oku:** `MESAFE-VE-SURTUNME.md` §③ ve §⑧ · `ALTYAPI-DORT-MADDE.md` §⑤ ·
kendi `oturumlar/KORIDOR-TASARIM-ILERLEME.md` dosyan.

---

## ② İŞİN — sıra bağlayıcı

### İŞ 1 — 62 DURAĞI VERİYE İNDİR (`data/koridor.js`)
Altı kolun tamamı EK-3'te durak durak yazılı. Her durak için:
```
· yerleşim kaydı VAR MI — `girdi.yukle()` ile ARA, ADI EŞLEŞTİR
  ⚠️ Türkçe yazım tuzağı: "Firecik" ile "Ferecik", "İzdin" ile "Zeytun"
     ayrışabilir. Eşleşmeyeni UYDURMA, `eslesmedi` diye işaretle.
· eşleşmeyen durak için nokta ÖNERİSİ yaz — ama EKLEME
  (yerleşim dosyaları senin değil)
```
🔴 **62'nin kaçının kaydı var, kaçının yok — SAYIYLA bildir.** Bu sayı
Emre'nin ② maddesinin (1281 yerleşimleri) de ölçüsüdür.

### İŞ 2 — BOĞUM DÜĞÜMÜ ve KENAR ŞEMASI
Viabundus (Göttingen/Brill 2022) tipolojisini **uyarla, kopyalama**:
```
onların  settlement·town·toll·staple·fair·ferry·bridge·harbour·lock
         "A node without any attribute = simple junction"
bizim ?  yerleşim · kale · liman · geçit(derbend) · köprü · geçit yeri ·
         menzilhane · kavşak
```
🔴 **ÖNCE `git grep` — bu proje 10 Ağustos'ta "istenen şeyin altyapısı
zaten vardı" hatasını BİR GÜNDE BEŞ KEZ yaptı.** Bak: `tur:` (sehir 1252 ·
liman 523 · kale 434 · bolge 122 · kasaba 36 · koy 2) · `k:` · `kd:` · `m:`.
📌 `tur:` alanında **liman 523 ve kale 434** zaten var — bunlar boğum
düğümü olabilir. Yeni alan icat etmeden önce ölç.

**Kenar şeması ZORUNLU alanlar:**
```
uc1 · uc2        düğüm kimlikleri (ad DEĞİL — ad değişir)
agirlik          🔴 BİRİMİ SEN SEÇ ve GEREKÇELENDİR: km mi · SAAT mi ·
                 KONAK mı? Kaynağın SAAT ve KONAK veriyor; Viabundus
                 metre tutup süreyi hız tablosundan TÜRETİYOR.
kalinlik         ana kol / tali (Viabundus `Zoomlevel` 1-4 — ama rota
                 hesabında YOK SAYIYOR; bizde de öyle mi olacak?)
f · t            🔴 ZAMAN AYAĞI ŞART. Viabundus'un KUSURU tam buydu ve
                 sen bulmuştun: zamanı `Comment` serbest metnine gömmüşler,
                 makine soramıyor. BİZ O KUSURU KOPYALAMAYACAĞIZ.
kesinlik         1-3 · rekonstrüksiyonun güvenilirliği
kaynak           ZORUNLU — bulunamadıysa `bulunamadı`
```

### İŞ 3 — `m:` EKSENİ HÜKMÜ (tur 2'den devreden, YAPILMADI)
Kendi cümlen: *"koridor ağı, `m:`nin doğru ekseni olabilir — bu bir
EĞİLİM, karar değil."* Şimdi ölç ve **karara bağla**:
```
· 36 dosyanın TAMAMINDA `m:` sayısı (721 ölçüldü — doğrula)
· `m:` bağları çizge kuruyor mu: kaç bileşen · kök · döngü · yetim (4 bulundu)
· ortalama kenar km — ulak tablosundaki 120 km/gün ile kıyaslanabilir mi
· Değişmez 3'ün 359 çifti çizgenin NERESİNDE toplanıyor
🔴 HÜKÜM: `m:` koridor kenarı olarak YENİDEN YORUMLANABİLİR Mİ,
   yoksa siyasî bağ olduğu için coğrafî kenar OLAMAZ MI?
```

### İŞ 4 — KAPSAM İTİRAZI (`YASALAR G8` — itiraz GÖREVİN)
Emre *"tüm dünya nezdinde"* diyor. `ONCELIK.md`nin çöl seyyahı ilkesiyle
çelişebilir. **Kademe öner:** hangi halka önce, niçin, ve her halkanın
kaynak durumu ne (Osmanlı kolları belgeli — Batı Avrupa'da Viabundus var —
ötesi?).

---

## ③ YAZMA YETKİSİ
```
🟢 SENİN   data/koridor.js                    ← YENİ dosya, teslimin BU
           oturumlar/KORIDOR-SEMA-ILERLEME.md
           oturumlar/KORIDOR-SEMA-TASLAK.md   ← şema tarifi
🔴 DEĞİL   arac/*  ·  var olan data/*  ·  js/*  ·  index.html  ·  kök *.md
```
⚠️ `index.html`e ve `girdi.py`ye bağlamayı **KOORDİNATÖR** yapar — sen
dosyayı yaz ve *"hazır"* de. (11 Ağu'da bir bağlama betiği *"bağlandı"*
deyip bağlamadı, 33 nokta tarayıcıya hiç girmedi.)
🔴 **MOTOR MALİYET oturumu aynı anda `arac/uret_petek.py`de çalışıyor** —
oraya dokunma; motorun koridoru okuması AYRI ve SONRAKİ iştir.

## ④ SENİ BAĞLAYAN KURALLAR
```
CLAUDE.md §4    🔴 AKADEMİK · GÜVENİLİR · BİLİMSEL. Forum/blog/içerik
                çiftliği/YZ metni KULLANILMAZ. Vikipedi TEK DAYANAK DEĞİL.
                `kaynak:` alanı ZORUNLU; yoksa `bulunamadı` YAZ.
CLAUDE.md §4    🔴 TARİH UYDURMA. Gün bilinmiyorsa YYYY-01-01.
CLAUDE.md §11   🔴 kaçış içeren metin BASH'ten geçmez, heredoc DÂHİL.
                `Write` ile betik yaz, `py <yol>` ile koştur.
CLAUDE.md §11   🔴 yazdıktan sonra GERİ OKU — "yaptım" kanıt değildir.
CLAUDE.md §11   🔴 serbest metne gömülen bilgi VERİ DEĞİLDİR — `if` ile
                sorulamıyorsa kayıt vardır, veri yoktur. (Viabundus'un
                zaman kusuru ve bizim `kasitli_bosluk neden:` kusurumuz.)
```

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
Cevabın **kendi pencerene YAZILMAZ**; koordinatör ekranını GÖRMEZ.
```
mcp__ccd_session_mgmt__send_message
    session_id : local_2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6
```
⚠️ **Tur 1'de tam bunu atladın:** raporu dosyaya yazdın, mesaj atmadın.
Dosyadan okudum ama koordinatör dosya taramaz. Bu turda **her kalem
bitiminde** mesaj at.
`AÇILINCA HEMEN` haber ver · `KALEM KALEM` bildir · *"ne oldu iş?"* gelirse
**hemen** üç parça · **AKSAKLIK BEKLEMEZ.**

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① 62 durağın kaçı veride eşleşti, kaçı eşleşmedi     — sayı + liste
② boğum düğümü şeması — kaç öznitelik, kaçı ZATEN VAR — `git grep` çıktısıyla
③ kenar şeması — alanlar + ağırlık BİRİMİ ve GEREKÇESİ
④ data/koridor.js — kaç düğüm, kaç kenar               — sayı
⑤ `m:` hükmü: kenar OLABİLİR / OLAMAZ                  — ölçümle
⑥ kademe önerisi — hangi halka önce                    — gerekçeli
```
Teslim *"yaptım"* değil: *"62 → 48 eşleşti, 14 eşleşmedi; şema 2 tablo;
koridor.js 48 düğüm 41 kenar; `m:` kenar OLAMAZ çünkü …"*
**Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` diye yaz.**
