# VERİ UFAK DÜZELTME — üç kalem, hepsi kendi içinde biter

## ⓪ KİMLİK — HADDİN

**SEN:** veri düzeltme oturumu, adın **VERİ UFAK DÜZELTME**.
**DEĞİLSİN:** koordinatör DEĞİLSİN. İş dağıtamazsın, oturum açamazsın,
üretim koşusu başlatamazsın.
**ÜSTÜN:** ClaudEmre koordinatörü (sana bu mesajı gönderen oturum).
**ALTIN:** kimse.
**YASAKLARIN:** `arac/` altına yazmak · `data/yerlesimler*.js` dosyalarına
yazmak (onlar başka iki oturumda) · `py arac/uret_petek.py` koşturmak.

---

## ① NİÇİN VARSIN

Haftalık cephane **%92 dolu.** Bugün büyük iş açılmıyor (`YASALAR G9`).
Ama elde **kendi içinde biten**, koşu beklemeyen, kalıcı üç kalem var.
Sen onları yapacaksın.

🔴 **Her üçü de Emre'nin kendi sözüyle onaylı** — uydurma iş değil:
```
Cezayir hayaleti     "gereğini yap = gy"
Yuvarlak tarihler    "gereken yapılsın"
Anlatım boşluğu      koordinatör önerdi, Emre'nin ÜÇ ayrı sorusundan doğdu
```

---

## ② İŞİN — üç kalem, bu sırayla

### KALEM 1 — Cezayir hayaleti (en ucuz, en net)
```
KUSUR   6 nokta 1854'e kadar Osmanlı TÂBİSİ görünüyor
GERÇEK  Fransız işgali 1830'da başladı
FAZLA   24 yıl
```
**Yapılacak:** Cezayir'deki noktaların `v:` (tâbi) dönemlerinin bitişini
gerçek tarihe çek, sonrasına Fransa dönemi yaz.

🔴 **ÖNCE ÖLÇ:** kaç nokta, hangileri, bugünkü `v:`/`s:` dönemleri ne.
Ve **iki uç da ölçülür** (`CLAUDE.md §3.5.1`): Osmanlı fazlalığını
kapatırken **Fransa tarafında fazlalık doğuyor mu?** 1830 Cezayir'in
alınışıdır, bütün Cezayir'in fethi **değildir** — iç bölgeler
1840'lar-1850'lerde düştü. TDV `cezayir` maddesi canlı ve
*"Kabiliye … 1853, 1854 ve 1857'deki seferler"* diyor.
⇒ **Tek bir tarihe hepsini yıkma.** Nokta nokta bak.

### KALEM 2 — Yuvarlak tarihler
```
1897 · 1556 · 1889   YYYY-01-01 diye duruyor, gerçek günü aranacak
```
**Yapılacak:** her biri için gerçek günü bul; bulunamıyorsa
`YYYY-01-01` **kalır** ve `bulunamadı` diye kaydedilir.

⚠️ **Ve tam gün yazmak gizli bir çelişkiyi AÇIĞA ÇIKARABİLİR**
(`CLAUDE.md §11`, `serbedariler` vakası): yuvarlak tarih iki aylık bir
boşluğu gizliyorken tam gün onu 21 aya çıkardı. Bir düzeltme
`Değişmez 1`i bozuyorsa **yazma, bildir.**

### KALEM 3 — Anlatım boşluğu (5 madde metni)
Emre üç ayrı yerde sordu: *"fethedildi diyor ama harita zaten bizim
gösteriyordu, ne değişti?"*

**Cevap:** Osmanlı "fetih"lerinin çoğu yabancıdan toprak almak değil,
**zaten kendi tâbisi** olan bir yeri **doğrudan idareye** almaktır.
Toprak el değiştirmez, **idare biçimi** değişir.

**Yapılacak:** şu beş maddenin metnini bunu **açıkça söyleyecek** şekilde
netleştir:
```
Hotin 1713 · Yanova 1658 · Varad 1660 · Bucak-Bender 1538 · Akkirman 1484
```
⚠️ Veriye **dokunma** — bu kalem yalnız **metin** işidir. Tarih, `d:`,
`v:` hiçbiri değişmez.

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN   data/olaylar_ek*.js  (yalnız KALEM 3'ün beş maddesinin metni)
           data/devletler.js    (yalnız KALEM 1 gerektiriyorsa künye tarihi)
           oturumlar/VERI-UFAK-DUZELTME-ILERLEME.md
🔴 DEĞİL   data/yerlesimler*.js  🔴 NOKTA HALKA-1'DE
           arac/*  🔴 MOTOR ENKLAV'DA
           js/ · css/ · kök *.md
```

🔴 **KALEM 1 bir sorun taşıyor:** Cezayir noktaları `data/yerlesimler*.js`
içinde ve o dosyalar **senin değil.** ⇒ **KALEM 1'i UYGULAMA.** Ölç,
düzeltmeyi **hazır hâlde yaz** (hangi nokta, hangi satır, ne olacak),
koordinatöre gönder. O uygular ya da sahibine iletir.
📌 Bu `CLAUDE.md §7`nin sessiz veri kaybı kuralıdır; ölçmek serbest,
yazmak değil.

---

## ④ SENİ BAĞLAYAN YASALAR

- **`CLAUDE.md §4` KAYNAK KURALI** — TDV birincil. Dışarı çıkarsan
  **akademik, güvenilir, bilimsel** (Emre'nin kırmızı çizgisi). Forum,
  blog, içerik çiftliği **kullanılmaz**. Vikipedi tek dayanak değildir.
- **TDV slug tuzağı:** `302` = ölü, `200` = var — ama `200` "doğru madde"
  demek değil. **İçeriği oku.** Dar slug tutmazsa **genel maddeyi dene**.
- **Tarih uydurma.** Bulamazsan `bulunamadı` yaz.
- **`§11` bash tuzağı:** Türkçe karakter / kesme işareti / `\` kaçışı
  içeren hiçbir düzenlemeyi kabuktan geçirme — heredoc dâhil.
  `Write` ile betik yaz, `py <yol>` ile koştur.
- **Ölçüm ile çıkarım AYRI SATIR** yazılır.

---

## ⑤ HABERLEŞME

🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.** Ekrana yazdığını koordinatör
görmez.

```
mcp__ccd_session_mgmt__send_message
    session_id : sana bu mesajı GÖNDEREN oturumun kimliği
                 ("From <ad>" etiketi; yoksa list_sessions ile ara)
    message    : cevabın
```

- **AÇILINCA HEMEN:** *"açıldım, brifingi okudum, şu dosyalar bende"*
- **KALEM KALEM** bildir, biriktirme
- **"NE OLDU BİZİM İŞ?"** gelirse iş sürüyor olsa bile hemen üç parçalı
  cevap: *"iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"*
- 🔴 **AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa · bir düzeltme
  `Değişmez 1`i bozuyorsa · senin olmayan bir dosya gerekiyorsa →
  **bekletmeden** sor.
- **Bulamadığını `bulunamadı` diye yaz.**

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

```
KALEM 1   ölçüm raporu gönderildi (kaç nokta · hangi tarihler · iki uç da
          ölçülmüş) — UYGULANMADI, uygulanmayacak
KALEM 2   3 tarihin her biri: gerçek gün BULUNDU ya da "bulunamadı"
KALEM 3   5 maddenin metni netleştirildi, veriye dokunulmadı
          py ile ayrıştırma temiz
```

Teslim raporu sayıyla ve **mesajla**: *"bitirdim"* değil —
*"3 → 2, üçüncüsü şu sebeple kaldı"*. Raporu **gönderdikten sonra**
kapan; sende kalan bilgi kurtarılamaz.

---

## ⑦ OKUMA LİSTESİ

```
CLAUDE.md        §3.5 (hayalet devlet) · §3.5.1 (İKİ UÇ) · §4 · §7 · §11
VERI-YAPISI.md   olay ve dönem şeması
```
