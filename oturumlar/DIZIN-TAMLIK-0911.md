# DİZİN TAMLIK — 1281-1923 arasında EKSİK KÜNYE var mı

```
AD      DİZİN TAMLIK
MODEL   Opus
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SENİN DOSYAN   denetim/ARAC-DIZIN-TAMLIK-0911.py · denetim/BULGU-DIZIN-TAMLIK-0911.md
               oturumlar/DIZIN-TAMLIK-0911.md (bu dosya)
🔒 KOŞU 9 CANLI — `data/*.js` ve `arac/*.py` DONUK. OKU, YAZMA.
   Bu bir ÖLÇÜM işi; düzeltmeyi koşudan sonra başkası uygular (`D098`).
⚠️ Makine meşgul. Ağır bir şey koşturacaksan ÖNCE tahtaya yaz, bana sor.
```

## ① İŞ — Emre'nin kendi cümlesi

> *"1281-1923 arası tüm devletlerin var olup olmadığı"*

Bu, kronoloji doldurmaktan **ayrı** bir iştir: mevcut künyelerin
kronolojisini zenginleştirmek değil, **hiç olmayan künyeyi bulmak.**

`data/devletler.js` bugün **617 künye** taşıyor. Soru: 1281-1923
penceresinde var olmuş ve dizinde **hiç bulunmayan** devlet hangileri?

## ② YÖNTEM — ve kolay tuzağı

🔴 **"Aklıma gelenleri listeleyeceğim" YÖNTEM DEĞİLDİR.** `§4`ün ölçülmüş
dersi: elle yazılmış bir aday listesi gerçek kümenin **%40'ını kaçırdı**
(33 elle · 55 gerçek). Sistematik bir tarama ekseni seç ve onu YAZ.

Öneri (tartışmaya açık, daha iyisini bulursan bildir):
```
① COĞRAFÎ tarama — `bolge:` alanındaki her bölge için, o bölgede
   1281-1923 arası var olmuş devletleri kaynaktan çıkar, dizinle kıyasla
② ARDIL/SELEF zinciri — mevcut künyelerin `f:`/`t:` uçlarında BOŞLUK
   var mı? "X 1450'de bitti, Y 1520'de başladı" ⇒ arada kim vardı?
   📌 Bu eksen `§3.5.0`ın ARDIL sınıfının tam kardeşi ve ÖLÇÜLEBİLİR.
③ VERİDE KULLANILAN ama künyesi olmayan kimlik — bu ZATEN denetleniyor
   (§1.5 "Dizinsiz harita kimliği: 0"), yani burada iş YOK. Tekrarlama.
```
🟢 ②'yi öneriyorum çünkü **aletle sorulabilir** ve boş küme üretmez.

## ③ KURALLAR
```
🔴 KAYNAK: İslâm dünyası ve komşuları için TDV BİRİNCİL. Dışarı çıkarsan
   akademik/güvenilir/bilimsel. Forum · blog · içerik çiftliği · YZ metni
   · kaynaksız derleme KULLANILMAZ. Vikipedi TEK DAYANAK DEĞİL.
🔴 TDV TUZAĞI: ölü slug 302 döner; ama CANLI slug YANLIŞ MADDE açabilir
   (`ordu` askerî ordudur, şehir maddesi `ordu--sehir`). `<title>` testi
   bunu GEÇİRİR — tek çare İÇERİĞİ OKUMAK.
🔴 TARİH UYDURMA. Gün bilinmiyorsa `YYYY-01-01`. Yıl bilinmiyorsa
   YIL DA UYDURMA — `bulunamadı` yaz.
🟢 `D107`: `bulunamadı` / `ölçülemedi` / `okumadım` ÜÇ AYRI DAMGA.
🟢 `D022`: ÖNGÖRÜNÜ ÖLÇÜMDEN ÖNCE YAZ ve COMMIT'LE — kaç eksik künye
   bekliyorsun? Sonra ölç. Çürüyen öngörü tutandan değerlidir.
```

## ④ TESLİM — SAYIYLA
```
① kaç künye TARANDI (evren)
② kaç EKSİK bulundu — her biri için: ad · pencere · bölge · KAYNAK
③ kaç tanesi ÖLÇÜLEMEDİ, ve niçin
④ öngörün tuttu mu, çürüdü mü
```
🔴 Eksik künyeyi **YAZMA** — `data/devletler.js` donuk ve senin değil.
Raporla; uygulaması ayrı bir iş (`D098`: hüküm vermek ile uygulamak ayrı
yetkilerdir).

Tahtaya: `py arac/tahta.py yaz --kim "DİZİN TAMLIK" --kime "1.MURAT"`.
Commit'te her dosya ADIYLA, `add` ve `commit -F` ikisinde de. Dizin
pathspec'i YASAK.
