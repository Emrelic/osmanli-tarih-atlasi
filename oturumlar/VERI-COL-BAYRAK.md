# VERİ ÇÖL BAYRAK — 45 çöl noktasının bayrağı eksik, tavan bu yüzden aşılıyor

## ⓪ KİMLİK — HADDİN
```
SEN        : YAPIMCI oturum · adın VERİ ÇÖL BAYRAK
DEĞİLSİN   : koordinatör DEĞİLSİN · MOTOR DEĞİLSİN
ÜSTÜN      : ClaudEmre koordinatörü (sana bu dosyayı veren oturum)
ALTIN      : kimse
YASAKLARIN : 🔴 DÖNEM (`d:` `s:` `v:`) YAZMAK · KOORDİNAT değiştirmek ·
             nokta EKLEMEK ya da SİLMEK · `arac/*` · `js/*` ·
             `index.html` · kök `*.md` · üretim koşusu · iş dağıtmak
```
⚠️ **Senin işin TEK ALAN:** `kasitli_bosluk` ve `bos:`. Başka hiçbir şeye
dokunma — bir noktanın dönemi yanlış görünse bile **BİLDİR, düzeltme.**

---

## ① NİÇİN VARSIN — ölçüldü, 13 Ağustos 2026

`Değişmez 1` bugün **tek kalan ihlal** ve sebebi bir kusur değil,
**etiket eksiği:**
```
denetim              202 sahipsiz (tavan 180)   🔴 İHLAL
hiç sahipli olmayan   71 nokta
  `kasitli_bosluk` BAYRAKLI   26
  BAYRAKSIZ                   45   ← SENİN İŞİN
```

🟢 **VE BAYRAKSIZLARIN TAMAMI ÇÖL** — ölçüldü, ilk on ikisi:
```
Ndjamena · Agadez · Tamanrasset · Timbuktu · Rub'ul Hâlî kuzeyi ·
Rub'ul Hâlî doğusu · Hadramut · Batı çölü (Mısır) · Nûbe çölü ·
Ramletü'l-kübrâ · Gilf el-Kebîr · Selîme
```
📌 Bunlar **eski dolgu noktaları** — `CLAUDE.md §3`ün kendi cümlesiyle:
> *"Bunlar boş kalması DOĞRU olan yerlerdir; çölün emilip Osmanlı
> boyanmasını engellemek için konmuş dolgu noktalarıdır."*

⇒ **Kasıtlı, ama İŞARETSİZ.** Ve işaretsiz olduğu için denetim onları
kusur sayıyor. Bayrak yazılınca tavan **meşru olarak** yükselir ve
`Değişmez 1` temizlenir.

🔴 **Ve bu, projenin yazılı dersinin tam vakası:** *"bir ders veriye
SERBEST METİN olarak inerse inmiş sayılmaz — `if` ile sorulamıyorsa
kayıt vardır, veri yoktur."* Buradaki bilgi (*"bu nokta bilerek boş"*)
bugün yalnız **yorum satırlarında** ve **insan hafızasında** duruyor.

---

## ② İŞİN

### İŞ 1 — 45'İ BUL VE LİSTELE (yazmadan önce)
```
py -c ile DEĞİL — `arac/girdi.py`nin `yukle()`sini çağır (§11: veri zaten
bir dilde yazılıysa o dilin yorumlayıcısını çağır).
Ölçüt: 1300-1920 arası 20 yıllık kesitlerin HİÇBİRİNDE sahipli değil
       VE `kasitli_bosluk` bayrağı YOK
```
🔴 **Listeyi ÖNCE bildir.** 45 sayısı benim ölçümüm; doğrula. Farklı
çıkarsa **bekletmeden** söyle (`§7.1 ⑥`).

### İŞ 2 — HER BİRİNE `kasitli_bosluk` + `bos:` YAZ
```
kasitli_bosluk: true
bos: "devletsiz" | "veri-yok" | "kabile" | "insansiz" | "hata"
neden: "<tek cümle gerekçe>"
```
🔴 **SINAV** (`NOKTA SİBİRYA` vakası — bu projenin yazılı kuralı):
```
kaynağa sor  →  KONUŞUYORSA `devletsiz`  ·  SUSUYORSA `veri-yok`
```
⚠️ `devletsiz` bir **İDDİADIR** ve kaynak ister. Emin değilsen
`veri-yok` yaz — bu bir **SONUÇTUR**, uydurmaktan kat kat değerli.

🟡 **Çöl için beklenen dağılım (tahminim, ÖLÇÜM DEĞİL):** çoğu
`devletsiz` olmalı — Sahra ve Rub'ul Hâlî'de devlet olmadığını kaynaklar
söylüyor. Ama **her birini ayrı ayrı sına**; toplu hüküm verme.
📌 Ve dikkat: `Timbuktu` ile `Rub'ul Hâlî kuzeyi` **aynı sınıf değil** —
Timbuktu gerçek bir şehir (Mali/Songhay), ötekiler adı konmuş boşluklar.
Timbuktu'nun sahipsiz çıkması **şüpheli**; onu ayrı bildir.

### İŞ 3 — DENETİMİ KOŞTUR
```
py arac/yorum_temizle.py      🔴 ÖNCE BU — satır sonu yorumu bugün
                                 İKİ KEZ bütün hattı kilitledi
py arac/denetle.py            Değişmez 1 kaç oldu · 1b hâlâ 0 mı
```
⚠️ Tavan `denetle.py` içinde **sabit 180**. Sen onu **DEĞİŞTİRME** —
yeni sayıyı bildir, tavanı koordinatör yükseltir.

---

## ③ YAZMA YETKİSİ
```
🟢 SENİN   data/yerlesimler*.js  →  YALNIZ `kasitli_bosluk` · `bos:` · `neden:`
                                    ve YALNIZ o 45 kayıtta
           oturumlar/VERI-COL-BAYRAK-ILERLEME.md
🔴 DEĞİL   başka alan · başka kayıt · arac/* · js/* · index.html · kök *.md
           `data/yerlesimler_amerika.js` (NOKTA AMERİKA'da)
           `data/yerlesimler_afrika_guney.js` (NOKTA AFRİKA GÜNEY'de)
           `data/yerlesimler_okyanusya.js` · `_sibirya2.js` (NOKTA OKYANUSYA'da)
```
⚠️ `VERİ FETRET` aynı anda `yerlesimler*.js`te **19 belirli noktanın
dönemlerinde** çalışıyor. Sen **başka alanlara** dokunuyorsun, çakışma
yok — ama aynı dosyayı yazacaksanız **kalem kalem commit at** ki
çakışma erken görünsün.

## ④ SENİ BAĞLAYAN KURALLAR
```
CLAUDE.md §11  🔴 replace(eski, yeni, 1) YASAK — tüm eşleşmeleri değiştir
CLAUDE.md §11  🔴 kaçış içeren metin BASH'ten geçmez, heredoc DÂHİL
CLAUDE.md §11  🔴 yazdıktan sonra GERİ OKU — "yaptım" kanıt değildir
CLAUDE.md §3   Değişmez 1b (iç boşluk) = 0 · BOZULMAMALI
🔴 SÖZLEŞME    yorum YALNIZ KENDİ SATIRINDA
```

## ⑤ HABERLEŞME — 🔴 ASIL KANAL DOSYA, mesaj YEDEK
```
① her parti bitince ilerleme dosyana YAZ + COMMIT AT (pathspec'li)
② mesaj da at:  session_id : local_17712720-a5a0-4315-8986-48c222eeeadf
   "Session not found." alırsan `list_sessions` ile koordinatörü ARA
🔴🔴 ③ ARIZA ÜÇ YERE BİLDİRİLİR — üçüncüsü KULLANICI: bir araç hata
   döndürürse KENDİ PENCERENE de açıkça yaz. Kullanıcı senin pencereni
   OKUYABİLİR, koordinatör okuyamaz.
```

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① 45 doğrulandı mı — kaç çıktı
② kaçına bayrak yazıldı, kaçı ŞÜPHELİ bırakıldı (Timbuktu sınıfı)
③ `bos:` dağılımı — beş kova, sayıyla
④ Değişmez 1: 202 → kaç
⑤ Değişmez 1b hâlâ 0 mı
⑥ yorum_temizle TEMİZ mi
```
Teslim *"yaptım"* değil: *"45 → 41 bayraklandı, 4'ü şüpheli (Timbuktu ·
Ndjamena · Agadez · Hadramut gerçek şehir, sahipsizlikleri AYRI bir kusur
olabilir); Değişmez 1 202 → 161."*
**Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` diye yaz.**
