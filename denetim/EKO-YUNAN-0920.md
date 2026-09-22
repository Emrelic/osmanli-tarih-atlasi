# EKO-YUNAN-0072 — paket 0072 / H-0014 raporu

**Oturum:** EKO-YUNAN-0072 (Opus 5) · **Tarih:** 20 Eylül 2026 · **Koordinatör:** 1.MURAT
**Şartname:** `oturumlar/DALGA-0072.md` · **Parti metni:** `ClaudEmre/kutu/giden/parti-emrelic-0072/PARTI.md` §H-0014
**Dosyam:** `data/ekokuma_yunan.js` (`window.EKOKUMA_YUNAN`) — yalnız bu dosya yazıldı.
`js/app.js`, `index.html` ve öteki `data/*` dosyalarına DOKUNULMADI.

---

## 0. Öngörüler — ölçümden ÖNCE yazıldı, sonucu yanında

Öngörüler oturumun başında (ölçüm yapılmadan) yazıldı; aşağıdaki "sonuç" satırları
ölçümden sonra eklendi.

| # | Öngörü (önce) | Sınav | Sonuç |
|---|---|---|---|
| Ö1 | TDV `yunanistan` canlı ve 1821'i, Filiki Eterya'yı, büyük devlet müdahalesini anlatıyor; `mora` canlı ve isyanın seyrini veriyor; `rum` isyanı değil cemaati anlatıyor | slug denemesi | **① ve ② TUTTU** (ikisi de canlı, gövde dolu). ③ **SINANMADI** — `rum` maddesi açılmadı, ihtiyaç kalmadı; "ölçülmedi" olarak yazılıyor, "yok" değil |
| Ö2 | TDV'de `filhelenizm` başlıklı müstakil madde YOK (0 isabet) | `arama/?q=filhelen` | **TUTTU** — tek isabet `yunanistan` maddesinin GÖVDESİ; müstakil madde yok |
| Ö3 | TDV'de "Yunan tarih yazımı" müstakil maddesi YOK; Paparrigopoulos ve süreklilik şeması yalnız akademik kaynaktan gelecek | arama + slug | **TUTTU** — şemanın tamamı Stathis 2021 ve Dialla 2021'den geldi |
| Ö4 | Yazılacak 4 kartın hepsi en az 1 gerçek maddeye TAM EŞİTLİKLE bağlanacak; `1821-03-25` ayırt edicisiz bağda İKİ maddeye birden düşecek | `sina_bag.js` | **TUTTU** — 4/4 kart bağlı, bağsız kart 0. `1821-03-25` iki ayrı maddeye düşüyor (ayırt edici `\|` ekiyle ayrıldı) |
| Ö5 | `tartisma` · `karsi-anlati` (+ `dis-yankilar`) türlerinin `ekKartHtml`de kendi dalı YOK; son çare dalından basılacak | `js/app.js:9683` okundu | **TUTTU** — üçü de son çare dalında; kartlar o dalın okuduğu `ozet`/`metin` alanlarıyla yazıldı |

🔴 **Ö1'in üçüncü şıkkı SINANMADI.** "Ölçülemedi ≠ yok ≠ temiz" (CLAUDE.md §11):
`rum` maddesi hiç açılmadığı için o öngörü ne doğrulandı ne çürütüldü.

---

## 1. Ne ölçtüm

### 1.1 Teslim edilen veri
**4 kart**, `data/ekokuma_yunan.js`, `window.EKOKUMA_YUNAN` (Emre'nin dört sorusu = dört kart):

| id | tür | konu |
|---|---|---|
| `yunan-1821-sebepler` | `sebep-sonuc` | isyanın sebepleri (fikir · örgüt · yerel zemin · fırsat) |
| `yunan-1821-destekciler` | `dis-yankilar` | destekçiler: kim, hangi devlet, hangi aşamada, niçin |
| `filhelenizm-bati-yunan-sevgisi` | `tartisma` | Batı'daki "Yunan sevgisi" nereden geldi + Osmanlı algısına etkisi |
| `yunan-milli-anlati-1821` | `karsi-anlati` | Yunan tarihçiliği 1821'i nasıl işliyor, nerede ayrışıyor |

### 1.2 Bağ sınavı (alet: `scratchpad/sina_bag.js` — app.js'in `_ekNorm` ve `_ekBagEslesir`
fonksiyonları BİREBİR kopyalandı, taklit edilmedi)

**Evren:** `index.html`in yüklediği **123** kronoloji dosyası, **6965** madde.

```
yunan-1821-sebepler            2 bağ →  2 madde
yunan-1821-destekciler         5 bağ → 11 madde
filhelenizm-bati-yunan-sevgisi 4 bağ →  8 madde
yunan-milli-anlati-1821        3 bağ →  5 madde
TOPLAM 26 madde-kart eşleşmesi · BAĞSIZ KART = 0 · TUTMAYAN BAĞ = 0
```

Her bağ ayırt edici (`gün|başlık parçası`) taşıyor; hiçbiri çıplak gün değil.
`1827-10-20|Navarin` beş ayrı dosyadaki beş Navarin maddesine, `1826-04-22|Missolonghi`
üç maddeye düşüyor — bu kusur değil, aynı günün ayrı dosyalardaki kayıtlarıdır.

### 1.3 Gösterici sınavı
`js/app.js` `EKOKUMA_TUR`da dört türün DÖRDÜ DE tanımlı (`sebep-sonuc`, `dis-yankilar`,
`tartisma`, `karsi-anlati`) → buton/akordeon satırı çıkar.
`ekKartHtml` dal kontrolü: `sebep-sonuc` kendi dalında (`sebep`/`sonuc`/`bag`/`surec`/
`metin` dolu); öteki üçü **son çare dalında** ve o dalın bastığı `ozet` + `metin`
alanlarıyla yazıldı. Başlıksız kart yok (4/4 `baslik` ya da `sebep/sonuc` taşıyor).

📌 **Bir alan sırası tercihi:** son çare dalı `ozet → metin → kisa` sırasıyla basıyor.
Mevcut `data/ekokuma_karsi.js` girişini `kisa`ya yazdığı için okuyucuya GÖVDEDEN SONRA
çıkıyor (kayıp yok, sıra ters). Bu dosyada giriş `ozet`e yazıldı — kod değişmeden doğru
sırada okunuyor. `ekokuma_karsi.js` benim dosyam değil, düzeltme ÖNERİSİ olarak §4'te.

### 1.4 Değişmezler
`py arac/denetle.py` → **SONUÇ: temiz.** (Kronolojiye ya da yerleşime dokunulmadığı için
sayılarda değişiklik beklenmiyordu; beklenti tuttu.)

---

## 2. Kaynaklar — hepsinin GÖVDESİ bu oturumda açıldı

**TDV (birincil, CLAUDE.md §4):**
1. `yunanistan` — Mehmet Hacısalihoğlu, c. 43, 2013
2. `mora` — Machiel Kiel – John Alexander, c. 30, 2020
3. `fener-rum-ortodoks-patrikhanesi` — M. Süreyya Şahin, c. 12, 1995
4. `tepedelenli-ali-pasa` — Kemal Beydilli, c. 40, 2011
5. `mahmud-ii--osmanli` — Kemal Beydilli, c. 27, 2003

**Akademik (TDV'nin kapsamadığı tanecik — filhelenizm ve Yunan tarihyazımı;
üçünün de TAM METİN PDF'i indirilip okundu, açık erişim):**
6. Liz Potter, "British Philhellenism and the Historiography of Greece: A Case Study of
   George Finlay (1799-1875)", *The Historical Review / La Revue Historique* 1 (2004/2005),
   183-206, doi:10.12681/hr.176 — 25 sayfa
7. Panagiotis Stathis, "The Historiography of the Greek Revolution of 1821: From Memoirs
   to National Scholarly History, 1821-1922", *Historein* 19/2 (2021),
   doi:10.12681/historein.18371 — 26 sayfa
8. Ada Dialla, "Imperial Rhetoric and Revolutionary Practice: The Greek 1821",
   *Historein* 20/1 (2021), doi:10.12681/historein.27480 — 22 sayfa

**Kullanılmayanlar:** Vikipedi ve popüler tarih siteleri hiç açılmadı (§4 kırmızı çizgi).
**Kapanan kapılar (okunamayan hiçbir kaynak listeye yazılmadı, D211 ⑦):** Brill
*Understanding the Greek Revolution* kronolojisi HTTP **403**; Cambridge bölüm PDF'i
Cloudflare (HTML döndü); JSTOR ve Taylor & Francis gövdeleri ücretli.

---

## 3. Ne bulamadım (`bulunamadı` bir sonuçtur)

1. **25 Mart / Agia Lavra.** Millî bayramın 25 Mart'a nasıl ve ne zaman oturduğu ve
   Piskopos Germanos rivayetinin akademik tartışması için okunabilir GÖVDE bulunamadı
   (Brill 403 · T&F "On National Anniversaries: Greece, 1821-2021" ücretli). Kartlar bu
   rivayet hakkında olumlu ya da olumsuz HİÇBİR ŞEY söylemiyor; atlasın `1821-03-25`
   kaydı bu oturumda ne doğrulandı ne yalanlandı.
2. **İngiliz ve Fransız hükûmetlerinin saiki.** TDV üç devletin 1826-1827 protokollerini
   ve Navarin'i kaydediyor, gerekçelerini tartışmıyor; okunan akademik kaynaklar Rus
   tarafını ayrıntılandırıyor, İngiliz/Fransız hükûmet saikini değil. Destekçiler kartı
   bu yüzden "İngiltere Rusya'yı yalnız bırakmamak için katıldı" gibi yaygın hükmü
   YAZMIYOR — ölçülemedi.
3. **Byron'ın ölüm günü.** Potter yalnız "şairin son ayları"nı anıyor; gün okunan
   kaynaklarda geçmiyor → karta tarih yazılmadı (§4 tarih uydurma yasağı).
4. **TDV `rum` maddesi** açılmadı (ihtiyaç doğmadı) — Ö1'in üçüncü şıkkı sınanmadı.

---

## 4. Ne istiyorum / öneriyorum (hepsi BAŞKASININ dosyası — dokunulmadı)

### ① 🔴 ZORUNLU — yükleyici satırı (1.MURAT / `js/app.js` sahibi)
`_EKOKUMA_DOSYA_ADLARI` listesine:
```js
  "ekokuma_yunan",   // window.EKOKUMA_YUNAN — EKO-YUNAN teslimi (4 kart)
```
Bu satır eklenmeden kartlar HİÇ görünmez (D045 ailesi: veri doğru, yükleyici eksik).
Yeni tür tanımı ya da `ekKartHtml` dalı GEREKMİYOR — dört tür de zaten tanımlı.

### ② Ölçülen çelişki — patriğin sıra numarası (TDV kendiyle çelişiyor, §4 tuzak ⑥)
TDV `yunanistan` ve atlas kronolojisi **V. Grigorios**; TDV
`fener-rum-ortodoks-patrikhanesi` AYNI kişiyi **II. Gregorius** diye anıyor.
Kartlarda `yunanistan` okunuşu kullanıldı. **Atlas düzeltmesi önerilmiyor** — atlas zaten
çoğunluk okunuşunda; yalnız kayda geçiyor.

### ③ Ölçülen çelişki — Ypsilanti'nin Prut'u geçişi (EKO-ISYAN-0072'nin kalemi)
Atlas: `1821-02-22` (iki dosyada: `data/kronoloji_balkan.js`, `data/olaylar_ek5.js`).
Dialla 2021: "crossed the River Pruth into Moldavia (on 23 February 1821)".
Bir günlük fark ÖLÇÜLDÜ. Kayıt benim dosyam değil ve konu EKO-ISYAN-0072'nin (H-0013)
işidir → **değiştirilmedi**, hüküm o oturuma/koordinatöre bırakıldı. (Not: fark takvim
dönüşümünden de doğabilir; bu oturum onu ölçmedi.)

### ④ Çıkarıcı şüphesi — hüküm verilmedi (D211 ⑧)
TDV `mahmud-ii--osmanli` çıkarımı Edirne Antlaşması'nı "14 Ağustos 1829" verdi; atlas
`1829-09-14` diyor. Çıkarıcı arızası olması kuvvetle muhtemel; kart bu tarihi hiç
kullanmıyor, **atlasta değişiklik önerilmiyor**. İkinci çıkarıcıyla teyit edilmeli.
Aynı sınıf: TDV `mora` maddesindeki 25.000 kişilik katliam rakamının bağlı olduğu AY-YIL
iki çıkarımda farklı geldi → kartta sayı TDV'ye atıfla verildi, tarihlendirme VERİLMEDİ.

### ⑤ Küçük öneri — `data/ekokuma_karsi.js` (benim dosyam değil)
O dosyanın kartları girişi `kisa`ya yazıyor; son çare dalı `ozet → metin → kisa` sırasıyla
bastığı için giriş gövdeden SONRA çıkıyor. İçerik kaybı yok, yalnız okuma sırası ters.
Tek satırlık çare: `kisa:` → `ozet:`. Sahibinin kararı.

---

## 5. Değişen dosyalar

| dosya | durum | commit |
|---|---|---|
| `data/ekokuma_yunan.js` | **YENİ** (4 kart) | paylaşılan `data/` → **1.MURAT commitler** |
| `denetim/EKO-YUNAN-0920.md` | **YENİ** (bu rapor) | EKO-YUNAN-0072 kendi adıyla commitledi |

`js/app.js` · `index.html` · öteki `data/*` · `arac/*`: **DOKUNULMADI.**
