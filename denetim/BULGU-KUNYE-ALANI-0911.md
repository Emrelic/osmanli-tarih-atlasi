# BULGU — KÜNYE ALANI, 11 Eylül 2026

Oturum: KÜNYE ALANI · Görev: 1.MURAT'ın tahta sevki (M-3358'e cevap).
Zemin: `denetim/BULGU-KRONOLOJI-KUNYE-0911.md` (KRONOLOJİ KÜNYE oturumu) —
TEKRARLANMADI, üzerine inşa edildi.
Araç: `denetim/ARAC-KUNYE-ALANI-0911.py` (öngörü commit `29bce4f`, ölçüm
ondan SONRA). Çıktı: `denetim/HAZIRLIK-KUNYE-ALANI-0911.json` (566 madde).

🔒 `data/*.js`e TEK SATIR YAZILMADI — yalnız `denetim/` altına üretildi.

---

## ① ŞEMA KARARI — `kunye:` HER ZAMAN DİZİ

```
alan adı : kunye
biçim    : Array<string> — tekil künye de TEK ELEMANLI DİZİ ["karaman"]
boş dizi : [] = GERÇEK BOŞLUK (o tarihte hiçbir siyasi kimlik yok)
```
**İKİ biçim (bazen string bazen array) DEĞİL, TEK biçim.** Gerekçe:
kardeşin ölçtüğü 566'nın 23'ü (%4) gerçekten çok künyeye ait — bu azınlık
için tüketici kod (`js/app.js`) `Array.isArray` dallanması yazmak
zorunda kalacaktı. Bu projede AYNI SINIFTAN kusurlar defalarca yaşandı
(`tur` sözlük kayması, `sardinya`nın `harita`/`id` karışması, D089/D093).
Tek biçim bu dallanmayı baştan yok eder — %96'sı tek elemanlı olsa bile
hepsi AYNI KOD YOLUNDAN okunur. `bolge:` alanı DOKUNULMAZ, ayrı eksen
kalır (`§3` M/K karışması dersinin künye tarafı).

---

## ② MEKANİK BAĞLANABİLENLER — 493 madde ÜRETİLDİ

```
409  kova "1" (tarih penceresi TEK aday)         → tamamen MEKANİK
 84  kova "2+" (içerik okunarak TEK'e indirgendi)  → KRONOLOJİ KÜNYE'nin
                                                     elle okuduğu sınıflama
─── 
493  TOPLAM — denetim/HAZIRLIK-KUNYE-ALANI-0911.json içindeki "esleme"
     dizisinde `sinif: "mekanik"` ya da `"gercek_belirsizlik_icerik"`
```

### 🔴 D140 SINAVI — aday sayısı ile "çözülme oranı" ilişkili mi?

```
aile        aday künye   2+ kovası   🟠 oranı
cin              9            19       63.2%
hindistan        4            29       41.4%   ← EN DÜŞÜK, aday sayısı 2. en az
ozbek            3            67       86.6%   ← EN YÜKSEK, aday sayısı EN AZ
japonya          6             4       50.0%
```
⇒ **Aday sayısı ARTARKEN oran DÜŞMÜYOR/ARTMIYOR düzenli biçimde** —
hindistan (4 aday) en düşük, ozbek (3 aday) en yüksek; cin (9 aday) ile
japonya (6 aday) arada. Aynı yönlü bir sahte korelasyon YOK ⇒ ölçülen
şey `D140`'ın uyardığı "anahtar uzayı" değil, gerçekten İÇERİK. (Öngörü
`29bce4f`'te ÖNCEDEN yazılmıştı ve TUTTU.)

📌 Hindistan'ın düşük oranının GERÇEK sebebi: aday sayısı değil, ⚪
(üçüncü taraf, aşağıda) kirliliğinin bu ailede yoğunlaşmış olması —
`D140`'ın kendisi bunu ayırt etmiyor, ayrı ölçülmesi gerekiyordu ve
ölçüldü.

### 🟢 D187 POZİTİF KONTROL — üç bilinen doğru + bir dış-doğrulanabilir vaka

```
cin       1281-06-23  yuan-hanedani            ✓ (tarih penceresi, tek aday)
japonya   1281-08-15  kamakura                 ✓ (İKİNCİ DENEMEDE — ilk
                                                  denemem yanlış tarih
                                                  varsaymıştı, 1281-06-23
                                                  cin'in tarihiydi japonya'nın
                                                  değil; ölçüp kendi hatamı
                                                  yakaladım, D062)
hindistan 1206-01-01  (madde yok, beklenen None) ✓
1911-10-10 Wuchang/Xinhai → [qing-hanedani, cin-cumhuriyeti]
   dış kaynakla doğrulanabilir: bu gün Qing'in fiilî sonu VE Cumhuriyet
   hareketinin başlangıcıdır — ikisi de GERÇEKTEN doğru, uydurma değil.
```
⚠️ İlk pozitif kontrol denemem BAŞARISIZ çıktı (japonya için yanlış
tarih varsaymıştım) — düzeltip doğru tarihi (`grep` ile dosyanın
kendisinden) bulup TEKRAR denedim. Bu, `D187`'nin sözünü ettiği riskin
(boş küme her öngörüyü doğrular) küçük bir kanıtı: ilk kontrolüm YANLIŞ
ÇIKTI ve bunu SESSİZCE GEÇMEDİM.

---

## ③ 12 ÜÇÜNCÜ TARAF — adıyla (mekanik BAĞLANAMAZ, elle karar ister)

```
hindistan (11)
  1554-01-01  Erguniler yıkılıp Sind'de Tarhan hanedanı kuruldu     → SİND
  1761-01-01  Haydar Ali, Meysûr'da fiilî iktidarı ele geçirdi      → MYSORE
  1761-01-14  Üçüncü Pânipat: Ahmed Şah Dürrânî Marathaları yendi   → DÜRRÂNÎ/MARATHA
  1761-01-14  Marathalar Üçüncü Pânipat'ta ağır yenilgi aldı (dup)  → MARATHA
  1780-01-01  Tîpû Sultan roket topçuluğu geliştirdi                → MYSORE
  1782-12-07  Haydar Ali öldü, Tîpû Sultan geçti                    → MYSORE
  1786-01-01  Tîpû Sultan, Osmanlı'ya elçi gönderdi                 → MYSORE
  1799-07-07  Rançit Singh Lahor'u ele geçirdi                      → SİH
  1801-04-12  Rançit Singh taç giydi                                → SİH
  1830-01-01  Rançit Singh Altın Tapınak'ı kaplattı                 → SİH
  1839-06-27  Rançit Singh öldü                                     → SİH
ozbek (1)
  1569-01-01  Osmanlı'nın Astrahan/Don-Volga seferi                 → (adsız/bölgesel)
```
⇒ **Hindistan'ın 11'i ÜÇ ayrı kimliğe kümeleniyor: Mysore (5) · Sih (4)
· Maratha/Dürrânî (2)** — bu, KRONOLOJİ KÜNYE'nin bulgusunu doğruluyor:
bu maddeler "künyesi yok" DEĞİL, **`hindistan` ailesinin candidate
listesinde (babur, ingiliz) yer almayan üçüncü bir künyeye AİTler.**
`devletler.js`de `meysur` / bir Sih künyesi / `maratha` var mı — BU
GÖREVİN DIŞINDA, AYRI taranmalı (öneri: bir sonraki adım).

---

## ④ 23 DOĞRU ÇOKLUK — adıyla

```
cin (7)
  1368-01-23  yuan+ming        Zhu Yuanzhang Hongwu ilan edildi (Ming kuruluşu)
  1644-04-25  dashun+guney-ming  Li Zicheng Pekin'i aldı, Ming imp. intihar
  1644-06-06  qing+dashun      Qing Pekin'i aldı, Dorgon nâip
  1645-06-08  qing+guney-ming  Nanjing düştü
  1851-01-11  qing+taiping     Taiping İsyanı ilanı
  1853-03-19  qing+taiping     Taiping Nanjing'i aldı
  1911-10-10  qing+cin-cumhuriyeti  Wuchang/Xinhai Devrimi
hindistan (6)
  1540-05-17  babur+sur        Kannauc Savaşı
  1555-07-23  babur+sur        Hümâyun Delhi'yi geri aldı
  1556-11-05  babur+sur        İkinci Pânipat
  1757-06-23  babur+ingiliz    Plasi Savaşı
  1764-10-23  babur+ingiliz    Buksar Savaşı
  1765-08-12  babur+ingiliz    Allahâbâd Antlaşması
ozbek (8)
  1538-01-01  buhara+hive      Ubeydullah Han Harzem'i işgal
  1596-01-01  buhara+hive      Harzem'in yeniden fethi
  1655-01-01  hive+buhara      Ebulgazi'nin Buhara'ya akınları
  1710-01-01  buhara+hokand    Hokand ayrılığı
  1740-01-01  buhara+hive      Nâdir Şah istilası — ikisi de vassal
  1840-01-01  hokand+buhara    Hokand'ın Buhara'ya yenilgisi
  1842-01-01  buhara+hokand    Nasrullah'ın Hokand'ı geçici ilhakı
  1842-06-01  hokand+buhara    Muhammed Ali Han'ın Buhara Emiri'nce idamı
japonya (2)
  1568-10-18  muromachi+azuchi-momoyama  Nobunaga Kyoto'ya girdi
  1603-03-24  azuchi-momoyama+edo-bakufu  Tokugawa Edo'da şogunluk kurdu
```
Tam liste (metniyle) `denetim/HAZIRLIK-KUNYE-ALANI-0911.json`'ın
`dogru_cokluk` dizisinde.

---

## §5 — ÖLÇMEDİKLERİM

```
① `devletler.js`de `meysur`/Sih/`maratha` künyelerinin VAR OLUP
   olmadığı bu görevde ARANMADI — yalnız §3'te "böyle bir boşluk var"
   diye işaretlendi.
② kova "1"in (409 madde) İÇERİĞİ okunmadı — yalnız tarih penceresiyle
   mekanik atandı (KRONOLOJİ KÜNYE'nin kendi §5'inde de aynı sınır
   yazılıydı, TEKRAR EDİLDİ, giderilmedi).
③ Uygulamayı YAPMADIM — `data/kronoloji_*.js`ye hiçbir satır yazılmadı,
   yalnız `denetim/HAZIRLIK-KUNYE-ALANI-0911.json` üretildi. Koordinatör
   uygulamanın koşudan SONRA yapılacağını zaten söylemişti.
```
