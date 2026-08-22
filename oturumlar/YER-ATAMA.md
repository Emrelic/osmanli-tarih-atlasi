# YER ATAMA — koordinatsız kronoloji maddelerine olay mahalli

| alan | değer |
|---|---|
| **AD** | YER ATAMA |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **DOSYAN** | `data/yer_yama.js` → `window.YER_YAMA` · ve `oturumlar/YER-ATAMA-ILERLEME.md` |
| **YAZMAYACAĞIN** | 🔴 **`olaylar*.js` ve `kronoloji_*.js`e DOKUNMA** — sebebi §2'de |

---

## 0. EMRE'NİN İSTEĞİ (22 Ağustos 2026)

> *"Tüm kronoloji maddelerine haritada olay yeri mahali atama için oturum
> görevlendir. Koordinatı olmayan, olay mahali damgası taşımayan tüm
> kronoloji maddelerine olay mahalli koordinat noktası atayalım."*

**Niçin önemli:** `yer_id` olmayan madde tıklandığında harita **hiçbir yere
gitmiyor** — kullanıcı *"📍 Bu olayın haritada nokta yeri işaretlenmemiş"*
notunu görüyor. Uçuş animasyonu ve yeni yazılan **öncesi/sonrası kırpması**
o maddelerde hiç çalışmıyor.

## 1. ÖLÇÜLDÜ (koordinatör, 22 Ağu) — sen DOĞRULA

⚠️ `CLAUDE.md §11`: **devraldığın rakamı doğrulamadan aktarma.**

```
4262 kronoloji maddesi (olaylar*.js + kronoloji_*.js, 2603 yerleşime karşı)
   🟢 yer_id VAR ve eşleşiyor      2585  (%60,7)
   🟡 kapsam_genis (yeri OLMAMALI)  181
   🔴 yer_id VAR ama EŞLEŞMİYOR       8  ← yazım hatası, AYRI iş
   🔴 yer_id YOK                   1488  (%34,9)  ← SENİN İŞİN
```

**En kötü dosyalar:** `olaylar_ek5.js` 162 · `kronoloji_ingiltere.js` 120 ·
`kronoloji_iran.js` **107/107 (hiçbirinde yok)** · `kronoloji_isvec.js` 87 ·
`kronoloji_ispanya.js` 75 · `kronoloji_italya.js` 72 · `kronoloji_fransa.js` 70

## 2. 🔴 NİÇİN YAMA DOSYASI — ve niçin kaynak dosyalara DOKUNMUYORSUN

`kronoloji_ingiltere.js`in **sahibi var** (İNGİLTERE KRONOLOJİ oturumu),
`kronoloji_iran.js`in de. `CLAUDE.md §7`: *iki oturum aynı dosyaya yazarsa
tek satırlık kayıtlardan oluşan dosyalarda **sessiz veri kaybı** olur.*

⇒ Sen bir **YAMA** üretiyorsun, koordinatör uyguluyor. Bu projenin kendi
deseni (`KADEME_YAMA` · `KORIDOR_YAMA` emsalleri).

```js
window.YER_YAMA = [
{ dosya:"olaylar_ek5.js", t:"1516-08-24", b:"Mercidâbık Savaşı",
  yer_id:"Mercidâbık", kaynak:"TDV \"mercidabik\" md. — gövde okundu" },
];
```
🔴 **`dosya` + `t` + `b` ÜÇÜ BİRDEN anahtardır** — tek başına tarih yetmez
(aynı gün birden çok madde var), tek başına başlık da yetmez.
⚠️ `b` alanını kaynak dosyadan **birebir kopyala**, kendi kelimelerinle
yazma; eşleştirme ona bakıyor.

## 3. ⚠️ EN ÖNEMLİ KURAL — `yer_id` UYDURULMAZ

`yer_id`, `girdi.py`nin okuduğu **2603 yerleşimden birinin adına TAM
EŞİT** olmalı. Havuzu şöyle alırsın:
```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;[print(y['ad']) for y in girdi.yukle(sessiz=True)]"
```
⚠️ Bu komut Türkçe karakter taşıyor — `Write` ile betiğe yazıp `py <yol>`
ile koştur (`§11`).

**Yer havuzda YOKSA üç seçeneğin var, hiçbiri "uydur" değil:**
```
① EN YAKIN ANLAMLI YERLEŞİM      Örn. bir köyde geçen olay için, olayın
                                 idarî merkezi. `not:` alanına NİÇİN
                                 onu seçtiğini yaz.
② YENİ NOKTA GEREKİYOR           `eksik_nokta:` alanına ad + yaklaşık
                                 koordinat + kaynak yaz. Koordinatör
                                 nokta oturumuna paslar. SEN YAZMA.
③ GERÇEKTEN YERİ YOK             `kapsam_genis:true` öner — bu bir BEYANDIR:
                                 "olay imparatorluk çapındaydı." 🔴 `yer_id`
                                 YOKLUĞU bunu göstermez; ancak olayın
                                 KENDİSİ öyleyse yazılır.
```

🔴 **③ ile ①'i karıştırmak en tehlikeli hata.** `js/app.js:4754`te bu
ölçülmüş ve düzeltilmiş: eskiden `yer_id` çözülemeyen HER madde
imparatorluk görünümüne açılıyordu ve Emre *"harita odağı bir yakın bir
uzak, koca imparatorluğu gösteren tarzda olmamalı"* dedi. **Veri eksikliği
bir hüküm değildir.**

## 4. YER SEÇMEK BİR TARİHÎ İDDİADIR

Bir antlaşmanın yeri imzalandığı şehirdir, savaşın yeri muharebe
meydanıdır, bir padişahın ölümü öldüğü yerdedir — **tahmin edilmez,
kaynaktan okunur.** `CLAUDE.md §4`: TDV birincil, dışına çıkarsan akademik.
**Vikipedi tek dayanak OLAMAZ.** Bulamadığını **`bulunamadı`** diye yaz ve
o maddeyi ATLA — yanlış yer, yer olmamasından kötüdür.

⚠️ TDV slug tuzakları: ölü slug **302** döner · canlı slug yanlış madde
açabilir (`ordu` → askerî ordu, şehir `ordu--sehir`) · **gövdeyi OKU.**

## 5. SIRA — Osmanlı çekirdeği ÖNCE

```
① olaylar*.js            ~336 madde   ← ANA kronoloji, kullanıcı bunu görüyor
② iran · kirim · macaristan · lehistan · venedik · habsburg · memluk · misir
③ ingiltere · isvec · ispanya · italya · fransa · almanya · cin · japonya
```
**①'i bitirmeden ②'ye geçme.** Her parti bitince tahtaya rapor at; ben
uygularım ve sıradakini onaylarım.

## 6. KABUL KAPISI

```
node --check data/yer_yama.js                → 0
her kayıtta: dosya · t · b · (yer_id | eksik_nokta | kapsam_genis) · kaynak DOLU
yer_id yazılanların HEPSİ 2603'lük havuzda VAR
b alanı kaynak dosyadaki başlıkla BİREBİR
```
🔴 **Kendi kapı betiğini yaz ve İKİ YÖNDE sına** (`§11 C13`): temiz veride
sussun, sahte bozuk kayıtla **ötsün**. Ateşlenemeyen dal denetimsiz daldır.

## 7. TESLİM RAPORU — SAYIYLA

```
① kaç madde işledin · kaçına yer_id · kaçına eksik_nokta · kaçına kapsam_genis
② kaç "bulunamadı" — ve NİÇİN
③ eksik_nokta listesi: ad + koordinat + kaynak (koordinatör nokta oturumuna paslayacak)
④ §1'deki 1488 sayısını kendi ölçümünle doğruladın mı — farklıysa NE ÇIKTI
⑤ kapı betiğinin iki yönlü sınav çıktısı
⑥ NE BULAMADIN
⑦ BAĞLANMAYI BEKLİYOR: data/yer_yama.js → window.YER_YAMA
```

## 8. HABERLEŞME

```bash
py arac/tahta.py yaz --kim "YER ATAMA" --kime "KOORDINATOR" --mesaj "..."
```
Açılınca haber ver · **parti parti** bildir, gün sonuna biriktirme ·
aksaklığı **bekletme** · sorulunca *"iş üstündeyim · şu aşamadayım · ~şu
kadar kaldı"*. 🔴 **Kendi pencerene yazmak = hiç cevap vermemek.**

Kaçış/Türkçe karakter içeren metni bash'ten geçirme: `Write` ile dosyaya
yaz, `py <yol>` ile çalıştır. `git add -A` ASLA.
