# NOKTA HALKA-1 · 1-2 — ARAP VİLÂYETLERİ, halka 1'in kapatılmamış yarısı

> **İki oturum bu TEK dosyayı okur.** Kendi adını §② tablosunda bul.
> Her oturumun **kendi çıktı dosyası ve kendi ilerleme notu** var.

## ⓪ KİMLİK — HADDİN

- **SEN:** ARAŞTIRMACI-YAPIMCI · `NOKTA HALKA-1 <n>`.
- **DEĞİLSİN:** koordinatör **DEĞİLSİN**. İş dağıtmazsın, oturum açmazsın,
  üretim koşturmazsın, başkasının dosyasına yazmazsın.
- **ÜSTÜN:** KOORDİNATÖR (Oturum 0). **ALTIN:** kimse.
- **YAZMA YETKİN:** yalnız kendi çıktı dosyan + `oturumlar/NOKTA-HALKA1-<n>.md`
- **YASAK:** `data/yerlesimler.js` · `data/devletler.js` · `arac/` · `js/` ·
  `css/` · `index.html` · kök `*.md` · **bu ortak şartname**

---

## ① NİÇİN VARSIN — 🔴 BİR SIRA İHLALİ, VE KUSUR KOORDİNATÖRDE

`ONCELIK.md §4` kilitli kural: ***"TÜM 1. halka → TÜM 2. halka → …"***
Koordinatör **halka 1 bitmeden** üç oturumu halka 2'ye gönderdi. Bunu
`NOKTA HALKA-2 1` ölçerek gösterdi (*"Yemen bir Osmanlı EYALETİDİR ⇒ halka 1"*).

**Ölçüm — KARA maskesi üzerinden** (ham kutu değil; o ölçüt de bir işçi
oturum tarafından çürütüldü):

```
🟢 Ege + Girit + Kıbrıs        119 nokta   392,5
🟢 Anadolu batı+orta           159         354,4     ← TABAN
🟢 Rumeli (Balkanlar)          117         221,8
🟢 Kırım + Azak                 23         132,6
🟢 Macaristan-Erdel             54         127,7
🟡 Anadolu doğu                 52         111,3
🟡 Kafkasya güney               49         109,7
🟡 Eflak-Boğdan                 30         109,2
🟡 Irak                         58          64,8
🔴 Mısır                        65          56,0
🔴 Suriye-Filistin-Lübnan       25          50,4
🔴 Kuzey Afrika (Osmanlı)       52          23,9   ← NOKTA HALKA-2 3'te
🔴 YEMEN-HADRAMUT               13          21,8
🔴 Hicaz-Necid                  29          16,1   ← EN SEYREK
```

🔴 **Anadolu 354, Hicaz 16 — YİRMİ İKİ KAT fark, ve İKİSİ DE HALKA 1.**
Arap vilâyetleri yüzyıllarca Osmanlı toprağıydı; haritada Anadolu'nun
yirmide biri yoğunlukta duruyorlar.

⚠️ **AMA BİR AYRIM ŞART, yoksa yanlış iş yaparsın:**
```
ÇÖL          Hicaz-Necid'in ve Kuzey Afrika'nın büyük kısmı ÇÖLDÜR ve
             CLAUDE.md §3'e göre oradaki 114 SAHİPSİZ NOKTA KASITLIDIR —
             çölün emilip Osmanlı boyanmasını engellemek için konmuştur.
             ⇒ Çölde düşük yoğunluk KISMEN DOĞRUDUR.
GERÇEK EKSİK Yemen ÇÖL DEĞİLDİR — dağlık, tarih boyunca YOĞUN yerleşimli,
             ve bir Osmanlı EYALETİDİR. 21,8 orada gerçek bir boşluktur.
             Suriye-Filistin de öyle: 50,4, Anadolu'nun yedide biri.
```
⇒ **Ölçüt "yoğunluğu 354'e çıkar" değil, "tarihen var olan yerleşimi yaz".**
Boş çöle nokta serpmek **hata**, var olan şehri yazmamak **hata**.

---

## ② HANGİ BÖLGE SENİN

| oturum | bölge | bugün | ÇIKTI DOSYAN |
|---|---|---|---|
| **NOKTA HALKA-1 1** | **Yemen · Hadramut · Hicaz · Necid · Asîr** (lon 34-54, lat 12-30) | 13 + 29 nokta · **21,8 / 16,1** | `data/yerlesimler_h1_arabistan.js` |
| **NOKTA HALKA-1 2** | **Suriye · Filistin · Lübnan · Irak · Mısır** (lon 24-49, lat 22-37) | 25 + 58 + 65 · **50,4 / 64,8 / 56,0** | `data/yerlesimler_h1_bereketlihilal.js` |

### 🟢 1 numaraya hazır liste — `NOKTA HALKA-2 1` ölçtü, sende eksik
```
Sa'da · Ma'rib · Şibâm · Seyûn · Târim · Beyhân · Damâr · İbb · Amrân · Hacce
```
⚠️ Bu **başlangıç**, bitiş değil. Zebîd · Ta'izz · Mokha · Aden · Lahic ·
Cîzân · Ebhâ · Necrân · Hâil · Uneyze · Büreyde · Riyad · Hufûf · Katîf
gibi kalemleri de ölç.

---

## ③ NASIL YAZILIR — dört zorunlu kontrol

Şema: **`VERI-YAPISI.md`**, yazmadan önce oku. Dosya başına
`window.YERLESIMLER_H1_<BOLGE> = [ … ];` — kendi değişken adın.

```
① MÜKERRER   3 km içinde başka nokta var mı? (§11 — Varat/Varad vakası)
② KARA       nokta kara maskesinin İÇİNDE mi? denetle.py "konum" 0 demeli
③ SAHİPLİK   nokta VAR OLDUĞU HER TARİHTE sahipli olmalı (Değişmez 1)
             ⚠️ TAVAN 114 — çöl dolgu noktaları buna dâhil. Aşarsan
                denetim kırılır; emin değilsen KOORDİNATÖRE SOR
④ KİMLİK     her `d:"..."` kimliği renkte VE künyede olmalı; değilse
             KOORDİNATÖRE BİLDİR (§7.1 ⑥ — beklemez)
```

### 🔴 BÖLGENE ÖZEL — hayalet devlet burada YOĞUN
`CLAUDE.md §3.5` ve `§3.5.1` **senin sahandan** dört gerçekleşmiş vaka
sayıyor. En önemlisi:
> **1517-04-13 Memlûk DEVLETİNİN sonudur; Kızıldeniz kıyısının, Nûbe'nin,
> Hicaz'ın FETHİ DEĞİLDİR.** Merkez düştü diye çevre otomatik devrolmaz.
> TDV `habes-eyaleti`: *"Bu kıyı toprakları 1517'de Memlükler'den
> DEVRALINMADI."* Habeş Eyaleti **1555-07-05**.

Ölçülmüş fazlalıklar (düzeltildi ama **desen tekrar edebilir**):
```
İbrim · Sevâkin · Akîk · Halâib · Tokar · Sinkat   ~38-56 yıl fazla Osmanlı
Mekke'nin memlûk dönemi 1517-07-06'da biter — devlet 04-13'te yıkıldı
⇒ Bölgesel teslim gecikmesi MEŞRUDUR ama AYLAR mertebesinde, YILLAR değil
```

---

## ④ SENİ BAĞLAYAN KURALLAR
- **`§4`** TDV birincil — **ve senin bölgen TDV'nin EN GÜÇLÜ olduğu yer.**
  Yemen · Hicaz · Suriye · Irak · Mısır: neredeyse her şehrin maddesi var.
  *"Bulunamadı"* demeden önce mutlaka **ara**.
- 🔴 **ölü slug tuzağı:** `curl -s -o /dev/null -w "%{http_code}" <url>` →
  **302 = YOK**, 200 = var. ⚠️ **200 doğru maddeyi açtığını göstermez.**
  Bugün üç kez ısırdı: `evfat` canlıyken ölü ilan edildi · `mogadisu` canlı
  ama **içi boş** (asıl madde `makdisu`) · `artukogullari` ölü → `artuklular`.
- ⚠️ **KOMŞU TUTARLILIĞI KAYNAK DEĞİLDİR.** `§2` emilme kuralı komşudan
  kopyalamayı zaten teşvik ediyor.
- **`§11`** `sed`/`heredoc` YOK — `Write` + `py <yol>`.
- **Bulamadığını `bulunamadı` diye yaz.**

---

## ⑤ HABERLEŞME — `CLAUDE.md §7.1`

🔴🔴 **CEVABINI KENDİ PENCERENE YAZMA — koordinatör GÖRMEZ.**
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDEREN oturumun kimliği ("From <ad>")
    message    : cevabın
```
```
AÇILINCA     "açıldım, brifingi okudum, <bölgem> ve <dosyam> bende"
KALEM KALEM  bir küme bitince HEMEN
SORU GELİNCE "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
AKSAKLIK     BEKLEMEZ — kimlik eksiği · kaynak çelişkisi · şartname hatası ·
             beklenenden çok farklı sayı → HEMEN
BİTİNCE      SAYIYLA: "13 → 68, şu 12'si şu sebeple yazılmadı"
```
```bash
git commit -F - -- data/yerlesimler_h1_<bolge>.js oturumlar/NOKTA-HALKA1-<n>.md
```
⚠️ `git add -A` **asla.** · **Ortak şartnameye yazma.**

### ⑤.1 KOMŞU OTURUMLARLA SINIR
```
H1-1 ↔ H1-2   Hicaz/Necid ↔ Irak/Suriye  (lat 29-30 civarı)
H1-1 ↔ H2-1   Yemen/Asîr ↔ Kızıldeniz karşı kıyısı (Habeşistan)
H1-2 ↔ H2-1   Mısır güneyi ↔ Sudan  (lat 22 civarı)
H1-2 ↔ H2-3   Mısır batısı ↔ Libya  (lon 25 civarı)
```
⚠️ **`3 km` kontrolü ayrı dosyalarda karşı tarafı GÖREMEZ.** Sınırda kalan
nokta için **birbirinize değil KOORDİNATÖRE** yazın (`§7.1 ③`).

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
✅ bölge yoğunluğu    (çöl payı düşülerek) en az 100'e — Anadolu'nun ~1/3'ü
✅ mükerrer 3 km      yeni çift: 0
✅ konum              kara maskesi dışı: 0
✅ sahiplik           boşluk 0 · Değişmez 1 tavanı (114) AŞILMADI
✅ hayalet kontrolü   yazdığın her `s:` için devletin ömrü doğrulandı
✅ kaynak             her noktada TDV slug + HTTP kodu
```
*"Bitirdim"* değil — **"42 → 118, şu 9'u şu sebeple yazılmadı"** de.

📌 **Ve niçin bu iş önemli:** `CLAUDE.md §2` — *"Noktası olmayan bölge, en
yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır."* 7 Ağustos ölçümü:
**1800 peteğin 895'i (%50) bir dağı ya da nehri yok sayıyor, ve 473'ü
doğrudan SEYREKLİKTEN.** Senin yazdığın her nokta **iki hatayı birden**
kapatır — yanlış boyama ve sınırın engeli görmezden gelmesi.
