# MOTOR PUANLAMA — çöl/bozkır/tundrada sahiplik tavanı

**AD:** MOTOR PUANLAMA · **MODEL:** Opus · **DİZİN:** proje kökü
**DOSYAN:** `arac/uret_petek.py` (E kolunu da sen ölçtün)
**ClaudEmre:** hayır

---

## ⓪ KİMLİK — HADDİN
SEN: motor oturumu, `arac/uret_petek.py` sahibi.
DEĞİLSİN: koordinatör. İş dağıtmazsın, başka dosyaya yazmazsın.
ÜSTÜN: KOORDİNATÖR. ALTIN: kimse.

---

## ① NİÇİN VARSIN — ölçülmüş boşluk

Emre'nin **beş altyapı unsurundan ④'ü** şunu diyor:

> *"Çöl, bozkır, ova gibi düzlüklerde ya da orman, tundra gibi
> yapılarda veya Himalayalar gibi 'dağ arkasına dağ' yerlerde bir
> yerleşimin etki alanı neye göre belirlenecek?"*

**Bugün cevap: HİÇBİR ŞEYE GÖRE.** Boş coğrafyada bir noktanın etki
alanına **tavan yok** ve bedeli dördüncü koşuda ölçüldü:
```
yabancı toprak   357,2 → 386,5 milyon km²   +29,3 M   (+%8,2)
en çok 1500-1600 arası (+%9,9 … +%10,3)
```
62 nokta girdi ve **29 milyon km² bir gecede boyandı** — çünkü tek bir
nokta, komşusu olmadığında sınırsız alan tutuyor.

🟢 **Ve senin kendi E ölçümün kararı mümkün kıldı:**
```
"üç uzak merkez BİRLİKTE 4 puan yapıyor mu"  →  5,46 MİLYON km²
⇒ SIFIR ÇIKMADI. Puanlamanın getirdiği yetenek teoride kalmıyor.
```

---

## ② EMRE'NİN KARARI — birebir, ve bu bir TASARIM değil BEYAN

> *"Bir yerleşimin düz çöl, ova veya bozkırda etkili olacağı toprak
> alanının belli bir mesafe tavanı olacaktır. Şimdilik bu tavanı
> **200 km** olarak belirleyebiliriz. Fakat bir toprağın bir devletin
> rengine boyanması için **puanlama sistemi** kurabiliriz:*
> ```
> 0-200 km   = 4 puan
> 200-300 km = 2 puan
> 300-400 km = 1 puan
> ```
> *Birden fazla merkezin etrafındaki halkaların puan toplamasına göre
> bir bölge eğer **4 puan** toplar ise o devlete ait olacaktır. Yani
> kuzeyden, batıdan, doğudan 3 ayrı merkeze 250-350-380 km mesafede
> olması oranın boyanmasına sebep olacaktır: 2p+1p+1p = 4 puan."*

---

## ③ İŞİN — ve tasarım kararı KOORDİNATÖRÜN, uygulama SENİN

### İŞ 1 · PUANLAMA SAHİPLİK KAPISI OLARAK KURULUR
```
sürtünmeli mesafe  →  BURASI KİMİN?        (bugün zaten yapıyor)
PUANLAMA           →  BURASI KİMSENİN Mİ?  (YENİ)
```
🔴 **İkisi rakip değil.** Motor bugün her hücreyi **en yakın merkeze**
veriyor ve *"kimse yeterince yakın değil"* diyemiyor. Puanlama tam bunu
söyleyecek.

```
her hücre için:
  o hücreye 400 km içindeki BÜTÜN merkezleri bul
  her biri için mesafeye göre puan:  ≤200 → 4 · ≤300 → 2 · ≤400 → 1
  AYNI DEVLETE ait merkezlerin puanları TOPLANIR
  toplam ≥ 4  ⇒  hücre O DEVLETE ait
  hiçbir devlet 4'e ulaşamıyorsa  ⇒  hücre SAHİPSİZ (boyanmaz)
```
⚠️ **Puanlar devlete göre toplanır, karışık değil.** Emre'nin örneği
üç ayrı merkezden bahsediyor ama hepsi aynı devletin merkezleri
olmalı — yoksa iki devletin puanı birleşip üçüncü bir sonuç doğurur.
🔴 Bu benim yorumum, **Emre'ye doğrulatacağım** — sen uygula, gerekirse
tek satır değişir.

### İŞ 2 · NEREDE UYGULANIR — ve bu en kritik karar
🔴 **HER YERDE DEĞİL.** Emre açıkça *"düz çöl, ova veya bozkırda"*
diyor. Anadolu'da 200 km tavanı uygularsak **çekirdek harita çöker.**
```
UYGULANIR    çöl · bozkır · tundra · ova (ENGELSİZ, seyrek arazi)
UYGULANMAZ   engelli arazi (dağ · nehir · kıyı) — orada sınırı
             ZATEN topoğrafya çiziyor (unsur ③)
```
📌 Ölçüt hazır: `ne_10m_geography_regions_polys.geojson` — `Desert` 38 ·
`Plain` 16 (Kazak/Pontik bozkırı dâhil) · `Tundra` 1 poligon. B kolu
ölçtü, `veri-kaynak/`te duruyor.
⚠️ Alternatif ölçüt: **nokta yoğunluğu** — 200 km içinde başka merkez
yoksa zaten seyrek arazidir. Hangisi daha sağlam, **ölç ve söyle.**

### İŞ 3 · ÖNGÖRÜ — koşudan ÖNCE, damgalı
`denetim/PUANLAMA-ONGORU.md`. En az beş kalem, ve **her birinin
mazereti olup olmadığı da önceden** yazılacak:
```
· Osmanlı yüzölçümü 9/9 kesitte  → MAZERETİ YOK (Anadolu'ya değmemeli)
· yabancı toplam ne kadar DÜŞECEK (bugün 386,5 M)
· sahipsizleşen alan kaç km²
· 5,46 M km²lik "üç merkez birlikte" bölgesi ne oldu
· hangi devletler EN ÇOK küçüldü — isim isim
```

---

## ④ YAZMA YETKİSİ
```
🟢 SENİN     arac/uret_petek.py · denetim/PUANLAMA-ONGORU.md
🔴 DEĞİL     data/*.js · arac/girdi.py · arac/renkler.py · kök *.md
```
⚠️ **Koşuyu SEN başlatmazsın.** Kod hazır olunca tahtaya *"hazır"* yaz;
girdi kilidini ve koşuyu koordinatör yönetir.

---

## ⑤ HABERLEŞME
```
py arac/tahta.py yaz --kim "MOTOR PUANLAMA" --kime "KOORDINATOR" ...
py arac/tahta_bekci.py --kim "MOTOR PUANLAMA" --dosyam "arac/uret_petek.py" --ara 45
```
Kendi pencerene yazmak = hiç cevap vermemek. Aksaklık BEKLEMEZ:
şartname yanlış çıktıysa, ölçüm beklenenden çok farklıysa, ya da
**Emre'nin tarifinin uygulanamadığı bir yer bulursan** — bekletmeden
bildir. Bugün üç oturum reçetemi uygulamadan önce ölçüp çürüttü ve
üçünde de haklıydılar.

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① puanlama kodu yazıldı ve C13 ile İKİ YÖNDE sınandı
   (kusur yokken temiz · zorlanınca ötüyor)
② hangi arazide uygulanacağı ÖLÇÜLEREK seçildi
③ öngörü koşudan ÖNCE damgalandı, mazeretleriyle
④ tahtaya "hazır" — koşuyu koordinatör başlatır
```
🔴 *"Bitirdim"* deme: **sayı ver.** Kaç hücre sahipsizleşiyor, Osmanlı
kaç kesitte değişiyor, hangi devlet ne kadar küçülüyor.
