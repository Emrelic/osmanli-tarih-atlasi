# VERİ KİMLİK 2 — GÖREV TANIMI

> Kullanıcı kararı (K4), 1 Ağustos 2026 17:30: *"ikinci bir kimlik oturumu
> açalım."* Sebep: VERİ KİMLİK bütün gün sessiz kaldı, kuyruk **8 → 12
> kaleme** çıktı ve **yedi oturumun bitmiş araştırması** haritaya giremedi.

---

## 1. KAPSAM — on iki kalemin **tamamı** sende

Orijinal `VERİ KİMLİK` oturumu (son etkinlik 1 Ağustos 12:10) **bölünme
almıyor.** Sebep: bölüşme, iki oturumun da aynı kalemi bekleyip hiçbirinin
başlamaması riskini taşıyor — bugün tam bu yüzden kuyruk büyüdü.

⇒ **Kalemler sende. VERİ KİMLİK uyanırsa koordinatör onu durduracak.**

### Öncelik sırası — çapraz oturumları bekleten kalemler önce

| # | kimlik | niçin bekliyor | kaynak |
|---|---|---|---|
| 1 | 🔴 **`dehlek`** | Masavva · Dahlak · Arkîko **236 yıl yanlış devlet** (`memluk` yazılı) | ⚠️ **SINIFI DÜZELTİLDİ 17:55** — koordinatör *"kayıt var, yalnız renk yok"* yazmıştı, **YANLIŞ.** VERİ KİMLİK 2 ölçtü, koordinatör doğruladı: `id:"dehlek"` **0** · `renkler.py` **0**. ⇒ **Sıfırdan kayıt** (`f:`·`t:`·`bolge:`·`baskent:`·`ozet:`) **+ yeni renk** (13,6 eşiği burada GERÇEKTEN uygulanacak; komşuları `memluk`·`habesistan`·`func`·`adal`·`yemen`). **ARAŞTIRMA kalemi, tek satır değil.** Tanım ÇAPRAZ DOĞU'dan gelmeli |
| 2 | **`sirbistan-nemanjic`** | kayıt **var**, ömür `1217-1402` **yazılı** — eksik olan **yalnız renk** | en ucuz kalem, tek satır |
| 3 | **`merini`** | Fas · Merakeş · Rabat · Agadir **642 yıllık tek pencere**, 1.340 yıl-nokta | ÇAPRAZ GÜNEY `9a145c5`. Kayıt **var** (`merini` 1196-1549), `harita:` **boş** |
| 4 | **`astarhan` + `nogay`** | ÇAPRAZ KUZEY paketi **hazır**, 7 nokta. 🔴 **Renksiz uygulanırsa `altinorda` yerine DELİK açar** | ÇAPRAZ KUZEY tur 4 |
| 5 | **`cezayir-fransiz`** | dizinde **kayıtlı, kullanım 0**. Tek başına **40 noktayı** kurtarıyor | ÇAPRAZ GÜNEY G-1 |
| 6 | **`aragon` + `kastilya`** | ikisi de dizinde **var**, `harita:` boş, kullanım 0. Sevilla'da 198 yıl-nokta | ÇAPRAZ GÜNEY G-6① |
| 7 | `arnavutluk-bagimsiz` | dizinde var (`t=1923-10-29`), haritada kullanılmıyor | `§80.1` |
| 8 | `afsar` · `zend` | 🔴 **kullanıcı kararı var:** *"aynı renk AİLESİ, farklı parlaklık"* (`safevi` ile) | İran hanedan bölmesi |
| 9 | `kafkas-hanliklari` | ÇAPRAZ DOĞU'nun 8 slug'ı buraya bağlanabilir | |
| 10 | `buyuk-orda` · `hersek` · `zeta` · `bahreyn` · `idrisi` | grup, tek turda | |
| 11 | `suriye-arap-kralligi` | 🟡 **ERTELENDİ** — koordinatör `hicaz`ı seçti, kalıntı **4 ay** | ÇAPRAZ AKDENİZ G-4 |
| 12 | 15 tanımsız kimlik | 228 noktalık partiyi kilitliyor | |

🔴 **SIRA DEĞİŞTİ 17:55:** `dehlek` en başta değil. Ölçülen sınıflar:
```
2 sirbistan-nemanjic   kayıt VAR · renk VAR · yalnız harita: eksik   ✅ BİTTİ (fe9c96c)
3 merini               kayıt VAR · renk VAR (fas) · harita: boş      ← EN UCUZ, sıradaki
1 dehlek               kayıt YOK · renk YOK                          ← ARAŞTIRMA, sona
```
📌 Ve ders koordinatörde: brifing ÇAPRAZ DOĞU'nun raporundan yazıldı, **dizin
durumu doğrulanmadı** (`ORGANIZASYON §12`). *"236 yıl yanlış devlet"* doğruydu;
*"yalnız renk yok"* değildi.

---

## 2. ÇAKIŞMA — dosyaya yazılan claim

Kilit mekanizması yok; **dosya claim'i** kullanılacak:

> Bir kaleme başlamadan önce `oturumlar/VERI-KIMLIK-2-ILERLEME.md`'ye
> **`⏳ başladım: <kimlik> — <saat>`** satırı yaz ve **commit et.**
> Bitince `✅` yap.

📌 `ORGANIZASYON Karar 2`: *"durum mesajla değil dosyayla akar."* Bugün beş
çakışma bu kuralın uygulanmamasından çıktı.

---

## 3. RENK — sende, ama iki kısıtla

`arac/renkler.py` → `BOYALAR` sözlüğü.
```python
"dehlek": ("Dehlek Melikleri", "#RRGGBB"),
```

⚠️ **17:55 DÜZELTMESİ — "iki dosya, ikisi birden" kuralı FAZLA GENELDİ.**
VERİ KİMLİK 2 `sirbistan-nemanjic`te gösterdi: `sirbistan` anahtarı
(`#6a8fa0`) **zaten vardı** ve üç Sırp kaydı onu kullanıyordu
(`sirp-despotlugu` 1402-1459 · `sirbistan-prensligi` 1804-1882 ·
`sirbistan-kralligi` 1882-1918). Nemanjić **1217-1402**, despotluğun
başlangıcıyla **birebir aynı gün** — örtüşme yok.
> **Doğru kural: renk VAR OLMALI ve `harita:` ona işaret etmeli.**
> *"Her kaleme YENİ renk"* **değil.**

🔴 Ve gerekçeleri de doğru: *"Yeni renk açsaydım Sırbistan dönemlere göre iki
ayrı ülke rengine bölünürdü."* — `§78` gereği **emsali kendileri sınadı**
(üç bağımsız kayıt, bitişik tarihler, hepsi `bolge:"balkanlar"`).
⇒ `merini` de aynı sınıf: `fas` (`#9e6b5b`, 1549-1923) var, `merini`
1196-**1549** tam bitişik.

🔴 **KISIT 1 — komşu çakışması** (yalnız GERÇEKTEN yeni renk açılacaksa)**.** Yeni renk, o kimliğin **haritada komşu
olduğu** devletlerin renginden ayırt edilebilmeli. MOTOR bugün ölçtü:
**mevcut paletteki en dar aralık 13,6** (HSV mesafesi). Yeni renk o eşiğin
altına inmesin.
⚠️ Ölçmeden renk yazma — `renkler.py`'de zaten bir mesafe kontrolü var,
koştur.

🔴 **KISIT 2 — `afsar`/`zend` için kullanıcı kararı bağlayıcı:**
> *"Aynı renk **AİLESİ**, farklı **parlaklık**"* — `safevi` ile aynı ton,
> farklı açıklık. Bu üçü bir hanedan zinciri; ayrı renkler İran'ı üç ayrı
> devlet gibi gösterir (bugün `iran`/`safevi` ayrımında tam bu yaşandı).

---

## 4. ÇIKTI — iki dosya, ikisi de gerekli

```
arac/renkler.py       BOYALAR sözlüğüne satır       ← RENK
data/devletler.js     ilgili kaydın harita:"..."    ← BAĞLAMA
```
⚠️ **İkisi birden olmadan hiçbir şey çizilmez.** Bugün üç kalem tam bu yüzden
"dizinde var, kullanım 0" durumundaydı: **kimlik yazılmış, `harita:` boş
bırakılmış.**

**Gerçek örnek** (`data/devletler.js`, çalışan bir kayıt):
```js
{ id:"kirim", ad:"Kırım Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1441-01-01", t:"1783-04-19", baskent:"Bahçesaray", harita:"kirim", … }
```
`harita:` değeri, `renkler.py`'deki anahtarla **birebir aynı** olmalı.

---

## 5. DİZİN

🔴 **Proje: `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`**
Sen `Projeler\Uibul`'da açılmışsın. **`cd` yapma, mutlak yolla çalış** —
index paylaşılıyor (`ORGANIZASYON §13`), ve commit'te **yol adı** yaz:
```bash
git commit -F - -- arac/renkler.py data/devletler.js
```

---

## 6. BİTİRİNCE — her kalem için

1. `git diff --cached` **commit'ten ÖNCE** (`§66`)
2. `py arac/denetle.py` — yeni renk **sahipsizlik açmamalı**
3. 🔴 `py arac/uret_petek.py` **ÇALIŞTIRMA** — üretimi koordinatör tetikler
4. Koordinatöre **kalem kalem** haber ver, on ikisini biriktirme
   📌 Bugünkü darboğazın sebebi buydu: tek büyük teslim beklenirken **hiçbiri**
   gelmedi

---

## 7. BUGÜN DOĞAN VE SENİ BAĞLAYAN KURALLAR

```
§73    Her bulguya GÜÇ ETİKETİ: KESİN · DESEN · ZAYIF · ÇELİŞKİLİ
§78    Mevcut bir kayda benzemek doğru olmanın delili değildir —
       emsal göstermeden önce EMSALİN KENDİSİ sınanır
§78.1  "Şema şunu taşıyabilir" ≠ "şema bunu BÖYLE KULLANIYOR"
       Birincisi belgeden okunur, ikincisi ÖLÇÜLÜR
§14    Rapor yazmadan önce git log --oneline -5, ölçüm commit'ini yaz
§81    Ucuz ölçüt yeşil yandığında pahalı olanın da yandığını görmeden
       yayınlama
```

🔴 Ve **MOTOR'un kuralı, senin işinin tam ortasında:**
> *"**Yanlış renk boşluktan KÖTÜDÜR:** boşluk 'bilmiyoruz' der, yanlış renk
> 'biliyoruz' der."* (`uret_petek.py:1243`)

⇒ Bir kimliğin **hangi renk olacağından emin değilsen yazma.** Bugün bir
oturum `abd`yi `abdulkadir`e bağlayacaktı — **ABD'nin Filipinler'i Cezayirli
bir emirliğin turkuazıyla boyanacaktı** ve kimse fark etmeyecekti.
