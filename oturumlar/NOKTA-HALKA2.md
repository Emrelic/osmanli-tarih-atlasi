# NOKTA HALKA-2 · 1-3 — seyrek bölgelere yerleşim ekleme

> **Üç oturum bu TEK dosyayı okur.** Kendi adını §② tablosunda bul, yalnız
> kendi bölgeni işle. Her oturumun **kendi çıktı dosyası** var; başkasınınkine
> dokunma.

## ⓪ KİMLİK — HADDİN

- **SEN:** ARAŞTIRMACI-YAPIMCI · `NOKTA HALKA-2 <n>`. Yerleşim noktası araştırır ve **kendi dosyana** yazarsın.
- **DEĞİLSİN:** koordinatör **DEĞİLSİN**. İş dağıtmazsın, oturum açmazsın,
  üretim (`uret_petek.py`) koşturmazsın, başkasının dosyasına yazmazsın.
- **ÜSTÜN:** KOORDİNATÖR (Oturum 0). **ALTIN:** kimse.
- **YASAKLARIN:** `data/yerlesimler.js` (çekirdek — koordinatörün) ·
  `data/devletler.js` · `arac/*.py` · `js/` · `css/` · `index.html` ·
  kök `*.md`. **Okuyabilirsin, YAZAMAZSIN.**

---

## ① NİÇİN VARSIN — ölçülmüş boşluk

`ONCELIK.md §4` yedi halkalı öncelik ölçeğini **kilitledi** (Emre, 7 Ağustos
2026). Kural: *"TÜM 1. halka → TÜM 2. halka → …"*

**Nokta yoğunluğu ölçüldü** (nokta / milyon km², 1800 nokta üzerinden):
```
TABAN — Osmanlı küresi (halka 1)          50,9
🔴 Sudan·Habeşistan·Somali·Umman  (h2)     9,0    tabanın 1/5,7'si
🔴 Rusya (Avrupa)                 (h2)    12,3    tabanın 1/4,1'i
🟡 Kuzey Afrika (Fas→Trablus)     (h2)    26,5    tabanın yarısı
```
⇒ **Halka 2, halka 1'in beşte biri yoğunlukta.** Halka 6 ve 7'nin seyrek
olması sıraya uygundur; **halka 2'nin seyrek olması SIRA İHLALİDİR.**

🔴 **VE BUNUN ÖLÇÜLMÜŞ GÖRSEL BEDELİ VAR.** `CLAUDE.md §2`: *"Noktası olmayan
bölge, en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır."* Ayrıca
7 Ağustos ölçümü: **1800 peteğin 895'i (%50) bir dağ ya da nehri yok
sayıyor** — ve bunun **473'ü doğrudan SEYREKLİKTEN**. Rakip nokta olmayınca
hangi algoritma olursa olsun tek merkez her şeyi alıyor.
⇒ **Senin eklediğin her nokta iki hatayı birden kapatır:** yanlış boyama ve
sınırın engeli görmezden gelmesi.

---

## ② HANGİ BÖLGE SENİN

| oturum | bölge | bugünkü yoğunluk | ÇIKTI DOSYAN |
|---|---|---|---|
| **NOKTA HALKA-2 1** | **Sudan · Habeşistan · Eritre · Somali · Umman** (lon 22-60, lat -2..22) | **9,0** — en seyrek | `data/yerlesimler_h2_afrika.js` |
| **NOKTA HALKA-2 2** | **Avrupa Rusyası + Nogay/Kazak bozkırı** (lon 28-60, lat 45-68) | **12,3** | `data/yerlesimler_h2_rusya.js` |
| **NOKTA HALKA-2 3** | **Kuzey Afrika: Fas · Cezayir · Tunus · Trablus · Fizan** (lon -12..25, lat 25-37) | **26,5** | `data/yerlesimler_h2_kuzeyafrika.js` |

**Hedef:** bölgeni **tabanın (50,9) en az yarısına** çıkar. Kabaca:
```
1  Sudan-Habeş-Somali-Umman    99 →  ~280 nokta   (+180)
2  Avrupa Rusyası              45 →  ~115         (+70)
3  Kuzey Afrika               124 →  ~180         (+56)
```
⚠️ **Sayı hedef DEĞİL, ölçüttür.** 180 nokta uydurmak yerine 90 sağlam nokta
yazmak **kat kat** iyidir. Kaynağı olmayan nokta yazılmaz.

---

## ③ NASIL YAZILIR — şema ve dört zorunlu kontrol

Şemanın tamamı **`VERI-YAPISI.md`**'de; yazmadan önce **oku**. Asgarî kayıt:
```js
{ ad:"Sevâkin", tur:"liman", lat:19.107, lon:37.331, g:0, k:3,
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"}],
  d:[{f:"1557-01-01",t:"1923-10-29"}] }
```
Dosyanın başına `window.YERLESIMLER_H2_<BOLGE> = [ … ];` koy — **kendi
değişken adın**, başkasınınkiyle çakışmasın.

### 🔴 DÖRT KONTROL — her nokta için, istisnasız

```
① MÜKERRER   3 km içinde başka nokta var mı? (§11 — Varat/Varad vakası)
             py -c "import sys;sys.path.insert(0,'arac');import girdi;
                    print(girdi.yakin_ciftler())"  ile taban al
② KARA       nokta kara maskesinin İÇİNDE mi? Denizdeki nokta üretimi kırar.
             Ölçüt: `arac/denetle.py`nin "konum" denetimi 0 demeli
③ SAHİPLİK   nokta VAR OLDUĞU HER TARİHTE bir sahibi olmalı (Değişmez 1).
             Boşluk bırakma; bilmiyorsan `kur:` alanıyla noktayı geç başlat
④ KİMLİK     kullandığın her `d:"..."` kimliği `arac/renkler.py`de RENKLİ ve
             `data/devletler.js`de KÜNYELİ olmalı. Değilse KOORDİNATÖRE
             BİLDİR — sen yazamazsın, o dosyalar senin değil
```

⚠️ **④ bekleyemez** (`§7.1 ⑥`): renksiz kimlik haritada **hiç boyanmaz**;
künyesiz kimlik dizinde karşılıksız kalır. İkisini de kalem kalem bildir.

---

## ④ SENİ BAĞLAYAN KURALLAR

- **`CLAUDE.md §4` — kaynak.** TDV birincil; **Vikipedi tek dayanak değildir.**
  Tarih bilinmiyorsa `YYYY-01-01`. **TARİH UYDURMA.**
- 🔴 **`§4` ölü slug tuzağı:** `curl -s -o /dev/null -w "%{http_code}" <url>`
  → **302 = madde YOK**, 200 = var. ⚠️ **200 almak DOĞRU maddeyi açtığını
  göstermez** (`ordu` askerî ordu maddesini açar). *"TDV'de yok"* demeden
  önce **ARA**: `islamansiklopedisi.org.tr/arama/?q=<kelime>`.
  Bugün üç kez ısırdı: `evfat` canlıyken ölü ilan edildi · `mogadisu` canlı
  ama **içi boş** (asıl madde `makdisu`) · `artukogullari` ölü, doğrusu
  `artuklular`.
- **`§3.5` hayalet devlet:** yazdığın her `s:` dönemi için **devletin
  ömrünü** kontrol et. 1517-04-13 Memlûk **devletinin** sonudur, Kızıldeniz
  kıyısının **fethi değildir** — merkez düştü diye çevre otomatik devrolmaz.
- ⚠️ **KOMŞU TUTARLILIĞI KAYNAK DEĞİLDİR.** *"Yanındaki nokta da X diyor"*
  delil sayılmaz — `§2` emilme kuralı komşudan kopyalamayı zaten teşvik
  ediyor. 7 Ağustos'ta koordinatör tam bu yüzden yanlış devleti yazmak
  üzereydi (`celayirli` yerine `lur-i-buzurg` çıktı).
- **`§11`** — Türkçe/kesme işaretli düzeltmede `sed` ve `heredoc` KULLANMA.
  Betiği `Write` ile scratchpad'e yaz, `py <yol>` ile koştur.
- **Bulamadığını `bulunamadı` diye yaz.** Negatif sonuç da sonuçtur.

---

## ⑤ HABERLEŞME — `CLAUDE.md §7.1`, tamamı seni bağlar

🔴🔴 **ÖNCE BU: CEVABINI KENDİ PENCERENE YAZMA.** Senin ekrana yazdığın
metni koordinatör **GÖRMEZ**. Cevap ancak araçla gider:
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDEREN oturumun kimliği
                 (gelen mesajın başındaki "From <ad>" etiketi odur;
                  bulamazsan mcp__ccd_session_mgmt__list_sessions ile ara)
    message    : cevabın
```
⚠️ 7 Ağustos'ta dört oturum bunu bilmediği için **ölü ilan edilmek üzereydi**;
dördü de işini bitirmiş, cevabını kendi penceresine yazmıştı.

```
AÇILINCA     "açıldım, brifingi okudum, <bölgem> ve <dosyam> bende"
KALEM KALEM  bir küme bitince HEMEN bildir, biriktirme
SORU GELİNCE iş sürüyor olsa bile HEMEN:
             "iş üstündeyim · şu aşamadayım · tahminen şu kadar kaldı"
AKSAKLIK     BEKLEMEZ — renksiz/künyesiz kimlik · kaynak çelişkisi ·
             şartname hatası · beklenenden çok farklı sayı → HEMEN
BİTİNCE      teslim raporu SAYIYLA: "99 → 214, şu 30'u şu sebeple yazılmadı"
```
Commit yalnız **kendi çıktı dosyan ve kendi ilerleme notun**, pathspec'li:
```bash
git commit -F - -- data/yerlesimler_h2_<bolge>.js oturumlar/NOKTA-HALKA2-<n>.md
```
⚠️ `git add -A` **asla** — git index oturumlar arasında PAYLAŞILIYOR.

🔴 **BU DOSYAYA (ortak şartnameye) YAZMA.** İlerleme notun **`oturumlar/
NOKTA-HALKA2-<n>.md`** — kendi numaranla, ayrı dosya.
📌 İlk yazımda burada *"ilerleme notun: `oturumlar/NOKTA-HALKA2.md`"*
yazıyordu ve **yanlıştı**: üç oturum tek dosyaya yazarsa çakışır — yani
şartname, `§7`nin *"her dosyanın tek sahibi olur"* kuralını **kendi içinde
ihlal ediyordu.** Üç oturuma da düzeltme gönderildi.

## ⑤.1 🔴 KOMŞU OTURUMLA SINIR — birbirinize DEĞİL, koordinatöre

Bölgeleriniz kenarlarda **örtüşüyor**:
```
1 ↔ 3   Sudan/Darfur/Fizan hattı (lon 22-25)
2 ↔ 1   yok        2 ↔ 3   yok
2'nin GÜNEY kenarı (lat ~45, Kırım-Azak-Kuban) ÇEKİRDEKTE ZATEN YOĞUN
```
⚠️ **`3 km` mükerrer kontrolü ayrı dosyalarda çalışırken karşı tarafı
GÖREMEZ.** İkiniz de aynı yeri yazarsanız denetim bunu **koşu sonrasına
kadar** göstermez. ⇒ Sınırda kalan her nokta için **koordinatöre yaz**
(`§7.1 ③`), o iletir.

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

```
✅ bölge yoğunluğu       9,0 (ya da 12,3 / 26,5) → en az 25
✅ mükerrer              3 km içinde yeni çift: 0
✅ konum                 kara maskesi dışında nokta: 0
✅ sahiplik              yeni noktaların hiçbirinde boşluk yok
✅ kimlik                kullanılan her kimlik ya renkli+künyeli, ya
                        KOORDİNATÖRE BİLDİRİLMİŞ — sayısıyla
✅ kaynak                her noktanın kaynağı yazılı; TDV slug + HTTP kodu
```
*"Bitirdim"* değil, **"99 → 214, şu 30'u şu sebeple yazılmadı"** de.

📌 Ve şunu unutma: **eklediğin nokta yalnız bir şehir değil, bir SINIR
KARARIDIR.** Noktasız kalan her bölge komşusunun rengiyle boyanıyor —
Sardinya 1533'te Osmanlı göründü, Kefalonya 1684'e kadar Osmanlı kaldı,
Yukarı Macaristan 91 yıl boyunca 28.000 km² yanlış devlette durdu. Hepsi
tek sebepten: **orada nokta yoktu.**
