# KADEME-MODEL-0907 — hukukî sınırın VERİ MODELİ (kademe C)

## ⓪ KİMLİK — HADDİN
```
SEN         İşçi oturum · KADEME-MODEL-0907
DEĞİLSİN    Koordinatör DEĞİLSİN. İş dağıtmazsın, oturum açmazsın.
ÜSTÜN       1.MURAT HÜDAVENDİGAR (Oturum 0)
ALTIN       kimse
YASAKLARIN  iş dağıtmak · `data/*.js` · `arac/uret_petek.py` (KOŞU SÜRÜYOR)
            VERİ YAZMAK — bu kalem MODEL kalemidir, içerik değil
```

## ① NİÇİN VARSIN — ve niçin SEN İLK SIRADASIN

Emre 7 Eylül'de üçüncü bir kademe tanımladı. Tam hüküm:
**`denetim/HUKUM-UC-KADEME-0907.md`** — önce onu oku.
```
A  şehir etki alanları toplamı (petek) — benekli/enklavlı HAM hâl
B  A'nın rötuşlanmışı — boşluk/enklav/koridor PAYLAŞTIRILMIŞ
C  🆕 uluslararası antlaşmalarla çizilmiş HUKUKÎ sınır
```
🔴 **SEN BLOKE EDİCİSİN.** C'nin bölge bölge doldurulması senin
çıktından sonra başlayacak. Model yanlış kurulursa her bölge onu tekrar
eder — ve bu proje o dersi ölçtü: beş dosya aynı `window` adını kullandı
ve birlikte okununca **537 kayıt 137'ye düştü** (`§7`).

## ② İŞİN

### ② a — EMRE'NİN İKİ KARARI, ve ikisi de BAĞLAYICI
```
BİRİM       KENAR (sınır parçası) — ülke poligonu DEĞİL
            Sebep: "bu kenar hukukî, şu kenar değil" diyebilmek şart.
            Poligon bunu ifade EDEMEZ.
ÇIPA        1923-10-29 (atlasın pencere sonu)
```

### ② b — ÖLÇÜLMÜŞ TABAN, devralma ama BİL
```
veri-kaynak/ne_10m_admin_0_countries.geojson
   Natural Earth 1:10m · 13 MB · 258 ülke · 168 öznitelik/ülke
   geometri MultiPolygon · alanlar NAME · ADMIN · ISO_A3 · SOVEREIGNT · TYPE
   Sahra dokuzunun DOKUZU da içinde
```
🔴 **AMA BU DOSYA BUGÜNÜN SINIRLARINI TAŞIYOR** (2020'ler). 1923'e
olduğu gibi kopyalanamaz: Hatay 1939 · Aouzou 1994 · Cezayir-Fas 1963.
⇒ Model bunu ifade edebilmeli: bir kenarın **hangi tarihten itibaren**
hukukî olduğu.

### ② c — MODELİN CEVAPLAMASI GEREKEN BEŞ SORU
Tasarımını bunlara karşı sına; biri cevapsızsa model eksiktir:
```
① bu kenar KİMLE KİM arasında?           (iki kimlik)
② hangi TARİHTEN itibaren hukukî?        (ve varsa ne zamana kadar)
③ DAYANAĞI ne?                           (antlaşma adı + madde + kaynak)
④ geometrisi NEREDE?                     (koordinat dizisi · hangi dosyada)
⑤ hukukî DEĞİLSE ne olur?                (A/B'ye düşer — ve bu SESSİZ olmamalı)
```

### ② d — POLİGONDAN KENARA: ölç, sonra karar ver
NE poligon veriyor, model kenar istiyor. İki komşu poligonun **ortak
kenarını** çıkarmak gerekiyor.
🔴 **KENDİ AYRIŞTIRICINI YAZMA** (`§11`, bu proje 7 kez ısırdı). Önce
ölç: paylaşılan kenarlar NE'de **birebir aynı koordinatları** taşıyor mu,
yoksa kıl payı ayrışıyorlar mı? Cevap işin cinsini belirler:
```
birebir aynı   → kenar çıkarımı MEKANİK
ayrışıyor      → tolerans gerekir, ve toleransın kendisi bir KARAR
```
Bu ölçüm olmadan tasarım yapma.

### ② e — TESLİM: ÖNERİ, KOD DEĞİL
```
denetim/ONERI-KADEME-C-MODEL-0907.md
   alan adları · örnek kayıt · beş sorunun cevabı · poligon→kenar ölçümü
   ve 🔴 ÖLÇEMEDİKLERİN
```
🔴 Kod yazma, veri yazma. Model onaylanınca uygulama ayrı sevk.

## ③ YAZMA YETKİSİ
```
🟢 SENİN   denetim/ONERI-KADEME-C-*.md · denetim/ARAC-KENAR-*-0907.py|js
           oturumlar/KADEME-MODEL-0907.md
🔴 DEĞİL   data/*.js · arac/*.py · js/app.js · index.html · kök *.md
```

## ④ SENİ BAĞLAYAN YASALAR
```
§2     petek emilmesi — C'nin çözdüğü şey tam olarak bu; C olan kenarda
       emilme KONUŞULMAZ
§4     kaynak GİZLENMEZ — bir sınırın dayanağı yazılmazsa o sınır
       kaynaksızdır. Geometriye de uygulanır.
§7     ad alanı: `data/<tur>_<kısaltma>.js` → `window.<TUR>_<KISALTMA>`
§11    alan icat etmeden önce VAR OLUP OLMADIĞINI ÖLÇ
       kendi ayrıştırıcın kötüdür · ölçmediğini `ölçmedim` diye yaz
🔴 §11 KABUK  kaçış/Türkçe/backtick bash'ten GEÇMEZ · sed/heredoc/py -c YOK
```

## ⑤ HABERLEŞME
```
py arac/tahta.py yaz --kim "KADEME-MODEL-0907" --kime "1.MURAT" --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.
🔴 Modeli BANA GETİR — onaysız hiçbir bölge kolu açılmayacak.

## ⑥ BİTİŞ ÖLÇÜTÜ
```
beş sorunun BEŞİ de cevaplanmış bir model önerisi
poligon→kenar ölçümü SAYIYLA (birebir mi, tolerans mı, kaç kenar)
ve ölçemediklerin ADIYLA
```

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım."   ⏳ "BEKLİYORUM: <ne>·<kimden>·<ne zaman>"
```

## ⑧ EMEKLİLİK NÖBETİ
```bash
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/emeklilik.py --nobet --kim "KADEME-MODEL-0907"
```
⚠️ **Bulamadığını `bulunamadı` diye yaz.**
