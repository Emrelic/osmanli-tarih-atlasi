# VERİ İÇERİK — kullanıcının 11 maddesi, tek partide

> Açılış brifingi · 7 Ağustos 2026 · **model: Sonnet** · rol: **YAPIMCI**
> ⚠️ `claudemre-basla` ÇALIŞTIRMA — o yalnız koordinatör oturumunda çalışır.

## AÇILIŞ — sırayla
```
1. bu dosyayı oku
2. CLAUDE.md baştan sona — özellikle §4 (TDV + ÖLÜ SLUG 302 TESTİ),
   §7 (dosya sahipliği), §10 (protokol), §11 (heredoc YASAK)
3. EK-OKUMA.md ve MERAK.md — ŞARTNAMELERİN — baştan sona
4. git log --oneline -8
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

Kullanıcı `parti-0006`da **11 madde** yazdı ve hiçbirine dokunulmadı. Bu,
kutudaki **en büyük dokunulmamış küme** ve tamamı **kullanıcının kendi
sözü**:

```
H-0013  merak edilenler ekleme · kart · tartışma
H-0014  tartışma maddesi
H-0015  merak konusu tartışma maddesi
H-0016  "ankaranın sahibi AHİLER olarak görünüyor, bu ahilerin ne olduğu…"
H-0017  ek okuma: YENİÇERİ OCAĞI nedir, kuruluşu, teşkilatı
H-0018  ek okuma: VASSALLIK nedir
H-0019  tartışma · merak edilenler ekleme
H-0020  merak: KARDEŞ KATLİ gibi uygulamalar
H-0021  merak: hânedanda EVLİLİK MÜESSESESİ ve çok eşlilik
H-0022  merak: OSMANLIDA SİYASÎ EVLİLİKLER
H-0023  merak: KADINLAR SALTANATI
```

🔴 **Ve bir dosya hiç yok:** `data/ekokuma.js` **mevcut değil** ama arayüz
onu bekliyor — `index.html:142` *"data/ekokuma.js + data/merak.js ana yüke
KATILMAZ, ilk gerektiğinde çeker"* diyor ve `#ob-ekokuma-butonlar` ile
`#ekokuma-pencere` **zaten duruyor.** Yani iskelet hazır, içerik yok.

```
data/merak.js      VAR · 8 kayıt · şema oturmuş (ÇAPRAZ İBERYA yazdı)
data/ekokuma.js    🔴 YOK — arayüz bekliyor, sen açacaksın
```

## ② İŞİN — sırayla, bitirilebilir kalemler

**KALEM 1 — `data/ekokuma.js` doğsun (H-0017, H-0018)**
İki ansiklopedi kartı: **Yeniçeri Ocağı** ve **Vassallık**. Şema
`EK-OKUMA.md §Şema`da; `kesinlik:` alanı **zorunlu** (`EK-OKUMA.md §13`
"EN ÖNEMLİ KURAL" diyor, oku).
⚠️ Dosyayı açtıktan sonra **bana haber ver** — `index.html`e yükleme satırı
eklemek BENİM işim (`§7`), sen yazma.

**KALEM 2 — dört merak kartı (H-0020, H-0021, H-0022, H-0023)**
`data/merak.js`e ekle, mevcut 8 kaydın şemasına birebir uy:
```
kardeş katli · hânedanda evlilik ve çok eşlilik · siyasî evlilikler ·
kadınlar saltanatı
```
📌 `MERAK.md` kartın *"niçin öyle olmadı"* sorusuna cevap vermesini istiyor —
ansiklopedi maddesi değil, **tartışma** kartı. `goruşler:[{tez, dayanak}]`
alanı birden çok görüş taşır; tek görüş yazmak bu kartın kısır hâlidir.

**KALEM 3 — Ahîler (H-0016)**
Kullanıcı *"Ankara'nın sahibi Ahîler görünüyor, bunlar ne"* diyor. Bu bir
**ek okuma** kartı. ⚠️ Ve haritada gerçekten `ahiler` etiketi var mı, önce
**ÖLÇ** — varsa hangi pencerede.

**KALEM 4 — H-0013/14/15/19 (başlıksız "tartışma" maddeleri)**
Bunların metni kısa ve belirsiz. `kutu/giden/parti-0006/` altındaki asıl
paketten **tam metni oku**; anlaşılmıyorsa **`bulunamadı` yaz ve bana bildir**,
tahmin etme.

## ③ YAZMA YETKİSİ
```
🟢 SENİN      data/ekokuma.js (YENİ) · data/merak.js
              oturumlar/VERI-ICERIK-ILERLEME.md
🔴 DEĞİL      index.html · js/ · css/ · arac/ · data/olaylar*.js
              data/yerlesimler*.js · kök *.md
```
⚠️ **`index.html`e dokunma.** Yeni veri dosyası bağlanırken **üç yer birden**
güncellenir (`girdi.py` · `<script src>` · birleştirme) ve üçü de bende.
Dün bu üçlünün biri atlandı ve **59 nokta tarayıcıda görünmez kaldı.**

## ④ SENİ BAĞLAYAN YASALAR
```
CLAUDE.md §4   TDV birincil kaynak. 🔴 ÖLÜ SLUG TESTİ DEĞİŞTİ:
               curl -s -o /dev/null -w "%{http_code}"   302 = ÖLÜ · 200 = VAR
               ⚠️ Ve `ordu` tuzağı: 200 + doğru <title> ama YANLIŞ MADDE
               (askerî ordu ≠ Ordu şehri). İÇERİĞİ OKU.
CLAUDE.md §11  🔴 heredoc/`sed` ile Türkçe metin YAZMA — kaçışlar bozuluyor,
               dün dört kez ısırdı. Betiği Write ile dosyaya yaz, `py` ile koş.
CLAUDE.md §1.6 KAPSAM: 8. boyut (askerî/sosyal/kültür) KASTEN KAPALI —
               ama `ek okuma` ve `merak` kartları BU KURALIN İSTİSNASIDIR,
               çünkü haritaya değil PANELE yazıyorlar. Sınırı aşma:
               kart yaz, kronoloji maddesi ya da yerleşim YAZMA.
EK-OKUMA.md §13  `kesinlik:` alanı zorunlu — ölçüt örnekleri §32'de
EK-OKUMA.md §43  kullanıcının yorumu karta GİRMEZ
```

## ⑤ HABERLEŞME
```
🔴 AÇILINCA HEMEN HABER VER: "VERİ İÇERİK açıldı, brifingi okudum,
   data/ekokuma.js ve data/merak.js bende"
   Bu nezaket değil PROTOKOL — hangi dosyanın kimde olduğunu bilmezsem
   aynı dosyayı ikinci oturuma veririm (sessiz veri kaybı).
· KALEM KALEM bildir, biriktirme
· commit YALNIZ oturumlar/VERI-ICERIK-ILERLEME.md, pathspec'li:
      git commit -F - -- oturumlar/VERI-ICERIK-ILERLEME.md
· bulamadığını `bulunamadı` diye yaz — negatif sonuç da sonuçtur
```

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① data/ekokuma.js DOĞDU ve en az 2 kart taşıyor (yeniçeri · vassallık),
   ikisinin de `kesinlik:` alanı dolu ve kaynağı TDV slug'ıyla yazılı
② data/merak.js 8 → en az 12 kayıt (dört yeni merak kartı)
③ her kartın kaynağı <title> ya da HTTP koduyla SINANMIŞ
④ H-0013/14/15/19 için: ya kart yazılmış ya `bulunamadı` gerekçesiyle
```
⚠️ **11'i de bitirmen şart değil.** Dört kartı KESİN kaynakla yazmak,
on biri zayıf yazmaktan iyidir (`ONCELIK.md` kalite kademeleri).
