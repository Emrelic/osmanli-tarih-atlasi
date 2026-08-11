# RENK DENİZ — "gözü kanatan" mavi/yeşil tonları

## ⓪ KİMLİK — HADDİN

**SEN:** renk oturumu, adın **RENK DENİZ**.
**DEĞİLSİN:** koordinatör DEĞİLSİN. İş dağıtamazsın, oturum açamazsın,
üretim koşusu başlatamazsın.
**ÜSTÜN:** ClaudEmre koordinatörü (sana bu mesajı gönderen oturum).
**ALTIN:** kimse.
**YASAKLARIN:** `data/` · `arac/uret_petek.py` (🔴 **MOTOR TAVAN-YÖN'DE**) ·
`arac/girdi.py` · `js/` · kök `*.md`.

🔒 Şu anda **başka bir oturum `uret_petek.py`ye yazıyor.** Koşu başlarsa
`arac/*.py` parmak izlenir; koordinatör *"girdi kilitli"* derse
`renkler.py`ye **dokunma**, haber ver.

---

## ① NİÇİN VARSIN — Emre'nin iki maddesi (parti-emrelic-0014)

**H-0001:**
> *"Deniz ile aynı renk tonlarını ülke haritalarında tercih etmemeliyiz;
> denizden **ciddi biçimde farklı** bir renk tonu olmalı. **Delhi
> Sultanlığı'na bak mesela, deniz gibi görünüyor, gözümüzü kanatıyor.**"*

**H-0005:**
> *"**Kutsal Roma Germen İmparatorluğu rengini deniz renginden daha
> algısal olarak farklı bir renge** bulamamız lazım."*

🔴 **VE BU, DENETİMİN GÖRMEDİĞİ BİR SINIF.** `renk_olc.py` bugün **devlet
gövdelerini birbirine karşı** ölçüyor. **Denizi hiç sormuyor** — deniz bir
devlet değil, ama ekranda **en büyük tek renk kütlesi**.
📌 `CLAUDE.md §11`: *"denetim var ≠ o soruyu soruyor."* Bu, o dersin renk
tarafı ve bugüne kadar ölçülmemiş.

---

## ② İŞİN

### ADIM 1 — DENİZ RENGİNİ BUL, sonra ÖLÇ
```
① altlığın deniz rengi NE — index.html / css / MapLibre stil ayarı ·
   ve `data/altlik.js`in su rengi
② BOYALAR'daki HER kimliği o renge karşı ΔE ile ölç
③ eşiğin altında kalanları ADIYLA listele
```
⚠️ **Eşiği kendin seç ve GEREKÇELENDİR.** `renk_olc.py`de gövde-gövde
tabanı **ΔE 12**; denizle karşılaştırma **daha gevşek olamaz**, çünkü deniz
her karede ve gövdenin **her kenarında** var. Önerim taban **ΔE ≥ 15** ama
ölçüp kendi sayını ver.

### ADIM 2 — DÜZELT, ama YALNIZ EŞİĞİN ALTINDAKİLERİ
Her değiştirilen renk için mevcut kısıtlar **korunur**:
```
· gövde-gövde ΔE eşiği (renk_olc.py)
· aynı-hex çakışması 0
· Osmanlı şeridine yakınlık kısıtı
```
🔴 **Bir kısıt "uygulanamadı" diye sessiz geçilmez** — kurulamıyorsa
`assert` ile DUR (8 Ağustos `luba ↔ lunda` vakası: kısıt hiç kurulmadı,
çözücü *"çözdüm"* dedi).

### ADIM 3 — SIRA ETKİSİNİ ÖLÇ
Bir renk seçmek sonrakine engel olur. **İkinci geçiş koş.**
📌 8 Ağustos'ta *"20 çift yapısal, çıkış yok"* denmişti; ikinci geçiş
**20 → 7** yaptı — bildirilenin **13'ü yapısal değildi.**
⇒ *"Çözülemedi"* raporlamadan önce ikinci geçiş **zorunlu**, ve hangi cins
olduğu yazılır: **tercih bağlıyor / yapı bağlıyor / sıra bağlıyor.**

---

## ③ YAZMA YETKİSİ
```
🟢 SENİN   arac/renkler.py
           oturumlar/RENK-DENIZ-ILERLEME.md
🔴 DEĞİL   arac/uret_petek.py (MOTOR TAVAN-YÖN'de) · data/* · js/ · index.html
```
⚠️ Deniz rengi `css/` ya da `index.html`deyse **DEĞİŞTİRME** — ölç, bildir.
Devlet rengini denizden uzaklaştırmak senin işin; **denizi taşımak değil.**

Commit yalnız kendi ilerleme dosyan, pathspec'li.

## ④ SENİ BAĞLAYAN YASALAR
- **`§9`:** veriye/renge dokunan her koşudan sonra `py arac/renk_olc.py`.
  *"Renkler değişmedi, denetim de değişmez"* cümlesi **üç kez yanlış çıktı.**
- **`C13`** iki yönde: geçme (temizken temiz) **ve** ateşleme (kusurluyken
  ötüyor). Gerçek veride kusur yoksa **sahte girdiyle zorla.**
- **`§11` bash tuzağı:** kaçış içeren düzenleme kabuktan geçmez, heredoc
  dâhil. `Write` + `py <yol>`.
- **Ölçüm ile çıkarım AYRI SATIR.**
- **Ölçmediğini `ölçmedim` diye yaz.**

## ⑤ HABERLEŞME
🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.**
```
mcp__ccd_session_mgmt__send_message
    session_id : sana bu mesajı GÖNDERENİN kimliği ("From <ad>")
    message    : cevabın
```
- **AÇILINCA HEMEN:** *"açıldım, brifingi okudum, `renkler.py` bende"*
- **ADIM 1 BİTİNCE BİLDİR** — kaç kimlik eşiğin altında, adlarıyla
- 🔴 **AKSAKLIK BEKLEMEZ:** deniz rengi bulunamıyorsa · bir kısıt
  kurulamıyorsa · sayı beklenenden ÇOK farklıysa → **bekletmeden** sor.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
✅ deniz rengi ÖLÇÜLDÜ ve nereden geldiği yazıldı
✅ BOYALAR'ın tamamı denize karşı ölçüldü — kaç kimlik eşiğin altındaydı
✅ düzeltilenler: kaç · hangileri · yeni ΔE'leri
✅ çözülemeyen varsa CİNSİ yazılı (tercih / yapı / sıra)
✅ renk_olc.py TEMİZ — 0 görünmez · 0 çakışma · 0 aynı-hex
✅ Delhi Sultanlığı ve Kutsal Roma Germen ADIYLA raporda
```
Teslim raporu sayıyla ve **mesajla**. Raporu gönderdikten sonra kapan.

## ⑦ OKUMA LİSTESİ
```
arac/renkler.py     dosya BAŞINDAKİ uyarılar — tasarımın kendisi orada
arac/renk_olc.py    :132 "uyum ölçüt değil TERCİH" — eşik ile tercih ayrımı
CLAUDE.md           §8 (BOYALAR'da olmayan boyanmaz) · §9 · §11
```
