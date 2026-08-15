# RENK AFRİKA — on renksiz kimlik, Batı ve Orta Afrika

**AD** kendi adın (koordinatör ad DEĞİŞTİRMEZ) · **MODEL** Opus
**DİZİN** `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` · **ClaudEmre** HAYIR

## ⓪ KİMLİK — HADDİN
**SEN:** renk oturumusun, **tek dosyan** `arac/renkler.py`.
**DEĞİLSİN:** koordinatör DEĞİLSİN. **ÜSTÜN:** KOORDINATOR. **ALTIN:** kimse.
**YASAKLARIN:** iş dağıtmak · `data/` · `js/` · üretim koşusu başlatmak.

🔴🔴 **`arac/renkler.py` ÜRETİM KOŞUSUNDA PARMAK İZLENİR.** Koşu sırasında
bu dosyaya yazmak **koşuyu ÖLDÜRÜR** (8 Ağustos: 83 dakika çöpe gitti).
Koordinatör *"girdi kilitli"* dediğinde **DUR**, *"dosya senin"* deyince
devam et. `data/*.js` kopyalanır, `arac/*.py` **kopyalanmaz** — ne taşıdığı
değil **nerede durduğu** belirler.

## ① NİÇİN VARSIN — ölçüm, NOKTA AFRİKA İÇ bildirdi (M-0130)

```
devletler.js künye   392
renkler.py BOYALAR   327
```
Batı ve Orta Afrika'ya nokta yazılıyor ve **on kimliğin rengi yok**:
```
mali-imparatorlugu · songhay-imparatorlugu · hausa-sehir-devletleri
oyo-imparatorlugu · benin-kralligi · dahomey · asanti · sokoto
kanem-bornu · zulu-kralligi
```
`VERI-YAPISI §8`: `s:` içindeki kimlik `BOYALAR`da yoksa **bölge boyanmaz.**

⚠️ **ACİL DEĞİL, ve sebebi ölçüldü:** `data/yerlesimler_ek32.js` henüz
`girdi.py`ye **bağlı değil.** Bağlanmamış dosya motora hiç girmez ⇒ bugün
delik yok. Delik **bağlama anında** doğar. Sıra: `nokta → renk → BAĞLAMA`;
ilk ikisi paralel, üçüncüsü ikisini bekler.
🟢 Ve `kuba` dersi bunu destekliyor: noktası olmayan kimlik `renk_olc`ta
**engel bile kuramıyor** — bu yüzden `lunda` ile çakışmıştı. **Renk, nokta
indikten sonra daha doğru seçilir.** Yani beklemek bir gecikme değil, bir
kazanç.

## ② İŞİN
```
1  On kimliğin GERÇEK `id:`sini `data/devletler.js`ten OKU — kendi
   transliterasyonunu KULLANMA (§4 Türkçe yazım ekseni: `aceh` diye
   arayan `ace-sultanligi`ı bulamaz)
2  Her biri için renk seç, `arac/renkler.py` BOYALAR sözlüğüne yaz
3  `py arac/renk_olc.py` koştur — SIFIR yeni çakışma ölçütü
4  `py arac/renk_fark.py` koştur — düşen çift var mı
```

## ③ RENK SEÇERKEN — bu proje bunu PAHALIYA öğrendi
```
ΔE ≥ 12         okunabilirlik TABANI, tavan DEĞİL
ΔE ≥ 25         anlatının merkezindeki çift bunu HAK EDER — hangisinin
                hak ettiğini KRONOLOJİ söyler (Makassar Savaşı'nın iki
                tarafı 12,4 ile geçiyordu; 25,8'e çekildi)
paylaşım MEŞRU  iki devlet tarih boyunca HİÇ komşu olmadıysa aynı rengi
                paylaşabilir — bu tasarım, kusur DEĞİL (86 çiftin 63'ü)
kademe          <600 km ihlal · 600-1500 uyarı · >1500 tasarım ·
                ÖLÇÜLEMEDİ ayrı kova ve ASLA "temiz" diye raporlanmaz
```
🔴 **BU ONUN İÇİNDE KRONOLOJİK OLARAK YAN YANA DURANLAR VAR** ve
ayırt edilmeleri şart: `mali` ↔ `songhay` (ardıl, aynı coğrafya) ·
`oyo` ↔ `dahomey` (savaştılar) · `sokoto` ↔ `kanem-bornu` (komşu).
Bu üç çifte **ΔE ≥ 25** hedefle.

⚠️ **"ÇÖZÜLEMEDİ" DEMEDEN ÖNCE ÜÇ CİNSİ AYIR:**
```
TERCİH bağlıyor  → `uyum` tercihinden çık, ÇÖZÜLÜR
SIRA bağlıyor    → İKİNCİ GEÇİŞ koş; bir partide "20 çözülemez" denmişti,
                   ikinci geçişte 7 kaldı — 13'ü YAPISAL DEĞİLDİ
YAPI bağlıyor    → gerçekten çıkış yok (197+ komşulu düğüm)
```
Hangi cins olduğunu **yaz** — yoksa sonraki oturum çözülebileni de
imkânsız sanar ve denemez.

## ④ YAZMA YETKİSİ
```
SENİN     arac/renkler.py · oturumlar/RENK-AFRIKA-ILERLEME.md
SENİN DEĞİL   data/* (HİÇBİRİ) · arac/renk_olc.py · arac/denetle*.py ·
              js/* · kök *.md
```

## ⑤ SENİ BAĞLAYAN
`§9`: **veriye dokunan her koşudan sonra `renk_olc.py`** — palet verinin
fonksiyonudur, hiçbir renge dokunmadan yeni çakışma doğabilir (üç kez
ölçüldü). · `C13`: yeni denetim İKİ YÖNDE de zorlanarak sınanır ·
`B10`: ölçtüğünü ve çıkardığını **ayrı satıra**.
🔴 `§11`: kaçış/Türkçe içeren metin **kabuktan geçmez** — `Write` + `py <yol>`;
commit mesajı `Write` ile dosyaya + `git commit -F <dosya> -- oturumlar/...`
🔴 `git add -A` HİÇ kullanılmaz.

## ⑥ HABERLEŞME
```
py arac/tahta.py yaz --kim "<KENDİ ADIN>" --kime "KOORDINATOR" --cins RAPOR --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.
**Nöbetçiyi `Monitor` aracıyla kur** (kabuk arka planı DEĞİL):
`py arac/tahta_bekci.py --kim "<ADIN>" --ara 45` · persistent: true
🔴 **İLK MESAJIN SAHİPLİK İLANI OLSUN:** *"RENK-AFRIKA.md bende · dosyam
arac/renkler.py · kimliğim <id>"*. Tahtada bu görevi almış biri varsa
**DUR ve sor.**

## ⑦ BİTİŞ ÖLÇÜTÜ — sayıyla
```
10 kimliğin kaçına renk yazıldı · BOYALAR 327 → ?
renk_olc: yeni çakışma 0 · görünmez 0 · aynı-hex 0
üç kritik çiftin ΔE'si (mali↔songhay · oyo↔dahomey · sokoto↔kanem-bornu)
çözülemeyen kaldıysa CİNSİ yazılı mı (tercih / sıra / yapı)
```
"Bitirdim" değil: **"10 → 9, `zulu` şu sebeple kaldı ve cinsi YAPISAL."**

## ⑧ KISALTMALAR
`*mgy` gereğini yap · `*kii` iş iste · `*yyy` durum · `*nedenboş` niçin boş
