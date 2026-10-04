# GLM GÖREV İSTEMİ — 4 Ekim 2026 · "TDV'ye göre" atıflarının doğrulanması

> **Motor:** GLM (Z.ai / Zhipu) — Çinli firma motoru. *Gemini DEĞİL.*
> **Niçin GLM:** bu iş **çok token yiyen ama az hüküm gerektiren** bir iştir — 228 kalem
> için web araması + cümle karşılaştırması. GLM'in tokenleri **bizim Claude limitimizin
> dışında**, yani bu işi ona vermek **bizim en pahalı kaynağımızı korur**.
> **Kural (`harici-yz-iscileri`):** dış YZ'ye **SAYIM verilir, HÜKÜM verilmez.**
> GLM `git add`/`commit`/`push`/`checkout`/`reset`/`stash` **YAPMAZ** ve yalnız
> `denetim/GLM1-*` dosyalarına yazar.

---

## İSTEM — aşağısı GLM'e aynen verilir

Sen bir **kaynak doğrulama işçisisin**. Hüküm vermiyorsun, **sayım yapıyorsun**.

### Bağlam
Osmanlı Tarih Atlası projesinde kronoloji maddeleri var. Bazı maddelerin açıklama
metninde **"TDV'ye göre …"** biçiminde bir atıf geçiyor. TDV = Türkiye Diyanet Vakfı
İslâm Ansiklopedisi (`https://islamansiklopedisi.org.tr`).

🔴 **Ölçülmüş sorun:** iki vakada bu atıf **TDV'de YOKTU** — madde "TDV'ye göre" diyor
ama TDV o şeyi söylemiyor. Yani atıf **uydurma** olabilir. Kaç tanesinin gerçek olduğunu
bilmiyoruz. **Senin işin bunu saymak.**

### Girdi
`denetim/ARAC-KRONO-SUZGEC-1004.py` çıktısının **(c) kovası**: `d` alanında TDV atfı
geçen **228** madde (`olaylar_ek*.js`) + **292** madde (öteki dosyalar).
Her kalem için elinde: dosya adı · madde tarihi · başlık (`b`) · açıklama (`d`) ·
`kaynak:` alanı.

### Yapacağın — kalem başına ÜÇ ADIM
1. `d` metnindeki **TDV'ye atfedilen İDDİAYI** tek cümleyle çıkar.
   *Örnek: "TDV'ye göre bu ilk vakadır" → iddia = "bu olay türünün ilk örneği olması".*
2. TDV'de ilgili maddeyi **BUL ve OKU**. Arama:
   `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`
   ⚠️ Slug tuzakları: **HTTP 302 = ölü slug** · canlı slug yanlış madde olabilir
   (`ordu` → `ordu--sehir`) · boş gövde ≠ yok · `000` taşıma arızasıdır, ölü değil.
   ⚠️ **TDV olay değil YER-KİŞİ ansiklopedisidir:** olay slug'ı ölüyse olayın geçtiği
   **YERE** ya da başındaki **KİŞİYE** bak.
3. ÜÇ KOVADAN BİRİNE koy ve **kanıtı yaz**:
   | kova | koşul | yazacağın |
   |---|---|---|
   | ✅ **VAR** | TDV gövdesi iddiayı destekliyor | destekleyen **TAM CÜMLE** (birebir, kısaltmadan) + madde URL'i |
   | 🔴 **YOK** | TDV maddesi bulundu, okundu, iddia **geçmiyor** | hangi maddeyi okudun (URL) + niçin "yok" dediğin |
   | ⚪ **OKUNAMADI** | slug ölü / gövde boş / madde bulunamadı | ne denedin (bütün denenen slug'lar) |

### 🔴 Mutlak kurallar
- **Cümleyi ASLA özetleme, ASLA yeniden yazma.** Birebir kopyala. Türkçe karakterler
  bozulmasın.
- **"Muhtemelen vardır" diye yazma.** Okumadıysan `⚪ OKUNAMADI`. **Okunamamak bir
  SONUÇTUR** ve `✅` ile birleştirilmez.
- **İddia KISMEN destekleniyorsa `🔴 YOK` yaz ve farkı açıkla.** *Örnek: TDV olayı
  anlatıyor ama "ilk" demiyor ⇒ atıf desteklenmiyor.*
- ⚠️ **Rakamın gövdede geçmesi o değeri desteklemez** — **rakamı taşıyan cümlenin NEYİ
  tarihlediğini** oku. (Ölçülmüş tuzak: gövdede "1402" var ama başka bir olayı tarihliyor.)
- **Vikipedi KULLANMA.** Bu iş TDV atfının doğrulanmasıdır; başka kaynak cevap değildir.
- **Veriye DOKUNMA**, madde düzeltme, tarih önerme. Yalnız ölç.
- **git komutu ÇALIŞTIRMA.** Yalnız `denetim/GLM1-TDV-ATIF-1004.md` dosyasına yaz.

### Teslim biçimi
```
## SAYIM
okunan kalem      : N
✅ VAR            : N
🔴 YOK            : N      ← ASIL ARADIĞIMIZ SAYI
⚪ OKUNAMADI      : N
ölü slug          : N

## KALEM KALEM
### <dosya> · <tarih> · <başlık>
iddia   : …
kova    : ✅ / 🔴 / ⚪
kanıt   : "<TDV'nin tam cümlesi>"  — <URL>
```

### 🔴 İSTEDİĞİM TEK SAYI
**Kaç atıf TDV'de YOK.** Oran, bu sınıfın bir kampanya gerektirip gerektirmediğini
belirleyecek. İlk turda **40 kalem** yeter — hepsini yapma, 40'ta dur ve oranı bildir.
40 seçimini **ölçüme başlamadan önce** dosyaya yaz (hangi 40, hangi ölçütle).

---

## NİÇİN BU İŞ GLM'E UYGUN — ve niçin hüküm bizde kalıyor

| | |
|---|---|
| **token** | 40 kalem × (arama + 1-2 sayfa okuma) ≈ bizim en pahalı turlarımız. GLM'de **bedava** |
| **hüküm** | "atıf var mı yok mu" bir **olgu**, bir hüküm değil. Kovaya koyma mekanik |
| **risk** | GLM yanlış okursa kanıt cümlesi orada durur ve **biz görürüz** — kanıtı zorunlu tutmamızın sebebi bu |
| **bizde kalan** | 🔴 YOK çıkanların **ne yapılacağı**: silme mi, atfı kaldırma mı, başka kaynakla değiştirme mi. O karar atlasın veri bütünlüğünü değiştirir ⇒ koordinatörde |

⚠️ **GLM'in sayısı bir ADAY LİSTESİDİR, ölçüm değildir** — bugün beş kez ölçüldü:
mekanik/vekil sayım **iki yönde** yanılıyor (künye 280↔895 · madde 8575↔1761 ·
Vikipedi 14↔2 · imza 148↔57 · kapsam 668↔670). GLM'in `🔴 YOK` dediği her kalem,
veri değişmeden önce **bizim** tarafımızdan açılacak.
