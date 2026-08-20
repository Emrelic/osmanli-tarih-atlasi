# KRONOLOJİ ŞARTNAMESİ — bütün devlet kronolojisi oturumları için

> Bu dosya **tek otoritedir**. Kendi brifinginde bir çelişki görürsen burası
> geçerlidir. Değiştiği anda koordinatör tahtaya yazar.
> Son güncelleme: 21 Ağustos 2026

---

## 1. HEDEF YOĞUNLUK — Emre'nin hükmü (20 Ağustos)

> *"O devlet kaç sene yaşamış ise **en az sene başına iki olay** olacak
> şekilde kronoloji maddesi olmaya çalışalım. Yani 500 sene yaşayan devletin
> 1000 tane kronolojik maddesi olsun mümkünse."*

Ölçüt Osmanlı'nın kendi yoğunluğudur ve **ölçüldü**:

```
Osmanlı   1281-1923 = 642 yıl · 1223 madde  =  1,9 madde/yıl   ← ÖLÇÜT
```

Bugünkü durum (21 Ağustos, ölçülmüş):

```
devlet      aralık        yıl   madde   /yıl    HEDEF
Rusya       1283-1917     634    141    0,22    ~1.270
Habsburg    1526-1918     392    107    0,27      ~780
Lehistan    1281-1795     514    112    0,22    ~1.030
Venedik     1281-1797     516     86    0,17    ~1.030
İran        1281-1923     642    107    0,17    ~1.280
Bizans      1281-1453     172     83    0,48      ~345
```

⚠️ **Bu tek turda bitmez ve bitirmeye çalışma.** Her tur 150-250 madde
hedefle, bitir, teslim et, rapor ver. Koordinatör sıradaki turu verir.
**Yarım bırakılmış 400 maddelik bir dosya, tamamlanmış 200 maddelikten
kötüdür** — teslim edilmemiş iş yok sayılır.

---

## 2. KONU DAĞILIMI — 🔴 EN SIK YAPILAN HATA BURADA

Emre: *"Askerî, toprak kazanımı, ittifak, savaş, anlaşma, isyan, hükümdar
değişimi filan gibi klasik kronolojik olaylara **ek olarak** o devletin
âlimleri, felsefe, mimar, sanat, kültür, bilim, teknoloji, sosyolojik
gelişmeleri şeklinde kronolojik maddeler de bulalım."*

⇒ Savaş-siyaset kronolojisi yazmak **kolay ve eksiktir**. Bir devletin
tarihi yalnız savaşlarından ibaret değildir.

**Hedef karışım — her 100 maddede kabaca:**
```
40   askerî · siyasî · toprak · antlaşma · ittifak · isyan · hükümdar
15   idarî · hukukî · malî reformlar (kanunname, vergi, para, teşkilat)
15   bilim · teknoloji · tıp · matbaa · rasathane · mühendislik
15   kültür · sanat · mimarî · edebiyat · müzik
10   sosyal · dinî · felsefî · salgın · göç · demografi · şehircilik
 5   iktisadî (ticaret yolu, lonca, kıtlık, keşif, borsa)
```
⚠️ Oranlar **kaba hedeftir, kota değildir.** Kaynak yoksa uydurma —
`kaynak:"bulunamadı"` yaz ve geç.

---

## 3. MADDE ŞEMASI — kesin hâl

```js
{ t:"1683-09-12",              // GÜN. bilinmiyorsa YYYY-01-01 (UYDURMA YOK)
  b:"Viyana kuşatmasının püskürtülmesi",
  tur:"savas",
  onem:5,                      // BU DOSYANIN DEVLETİ için ağırlık  1-5
  dunya:5,                     // OLAYA ait, HER DOSYADA AYNI       1-5
  kapsam:"dis",                // "ic" | "dis"
  etiket:["askeri","toprak-kaybi","ittifak"],
  yer_id:"Viyana",             // 🔴 ZORUNLU — aşağıya bak
  d:"2-4 cümle anlatım.",
  kaynak:"..." }               // ZORUNLU
```

### 🔴 3.1 `yer_id` — ZORUNLU, ve sebebi ölçüldü

Emre (20 Ağustos): *"Tüm kronolojilerin **haritadaki olay mahallini
işaretlememiz** lâzım. Bunu yapmazsak **uçuş modu saçmalıyor**."*

`yer_id` bir **yerleşim adıdır** ve `data/yerlesimler*.js`teki bir kayda
**birebir** eşleşmelidir. Eşleşmezse uçuş hedefi bulamaz.

```
py -c yerine: girdi.yukle() ile adları oku ve BİREBİR eşleştir
⚠️ "Viyana" ✓   "Vienna" ✗   "Viyana kuşatması" ✗
```

**Üç istisna, üçü de açıkça yazılır:**
```
① İMPARATORLUK ÇAPINDA olay (kanunname, para reformu, genel sayım)
   → yer_id:"" ve  kapsam_genis:true
   ⇒ uçuş bütün gövdeyi ekrana sığdırır
② BAŞKENT olayı (cülûs, saray, isyan)     → yer_id:"<başkent adı>"
③ YERİ GERÇEKTEN BİLİNMİYOR               → yer_id:"" ve d: içinde belirt
```
🔴 Eşleşen yerleşim YOKSA **uydurma**: `yer_id:""` bırak ve raporunda
*"şu N madde için yerleşim kaydı yok"* diye SAYIYLA bildir — koordinatör
nokta yazdırır.

### 3.2 İki puanın farkı — karıştırma

```
onem   BU DOSYANIN DEVLETİ için ağırlık. Dosyadan dosyaya DEĞİŞİR.
       ölçüt: bu olay BU DEVLETİN tarihinin akışını ne kadar değiştirdi?
dunya  OLAYIN kendisine ait. Aynı olay HER DOSYADA AYNI `dunya`.
       ölçüt: devletler sistemini ne kadar değiştirdi?
```

⚠️ **İKİSİ DE İYİLİK/KÖTÜLÜK SKALASI DEĞİLDİR.** Emre: *"Osmanlı için kötü
bir olay diye gidip 1 veremezsin."* 1683 Viyana bir Osmanlı bozgunudur ve
Osmanlı için `onem:5`tir.

```
dunya  5  devletler sistemini bölge dışında değiştiren, çağ kapatan/açan
       4  iki+ büyük gücün sınırını değiştiren
       3  iki devlet arası kalıcı etkili savaş/antlaşma
       2  bölgesel etki          1  yalnız iç mesele
onem   5  o devletin tarihinde dönüm noktası
       4  hanedanı/sınırı/rejimi değiştiren
       3  önemli ama dönüm değil  2  dolaylı  1  ayrıntı
```
🔴 `onem:5` ya da `dunya:5` verdiğin **her** maddede, hangi kaynağın onu
dönüm noktası saydığını gösterebilmelisin.
🔴 Aynı olay farklı dosyalarda **farklı `dunya`** taşırsa KUSURDUR.

---

## 4. KAYNAK — `§4` KIRMIZI ÇİZGİ

```
🟢 BİRİNCİL   TDV İslâm Ansiklopedisi (islamansiklopedisi.org.tr)
🟢 KABUL      Cambridge History serileri · Encyclopaedia Iranica ·
              üniversite yayını · hakemli dergi · alanın standart el
              kitabı · birincil kaynak neşri/çevirisi
🔴 ASLA       forum · blog · içerik çiftliği · kaynaksız derleme site ·
              yapay zekâ üretimi metin · popüler "tarih sayfası"
🟡 Vikipedi   TEK DAYANAK DEĞİL — yalnız "hangi maddeye bakayım"ı cevaplar
```

**TDV ölü slug tuzağı — iki ayrı tuzak, testleri farklı:**
```
curl -s -o /dev/null -w "%{http_code}" https://islamansiklopedisi.org.tr/<slug>
   302 = madde YOK        200 = madde VAR
```
⚠️ **200 bile DOĞRU madde demek değildir.** Ölçülmüş vakalar:
`ordu` → askerî ordu (şehir `ordu--sehir`) · `saray` → mimarî saray ·
`cin` → cin/fıkıh (ülke `cin--ulke`) · `mogadisu` → 200 ama gövde BOŞ.
⇒ **İÇERİĞİ OKU.**
📌 Dar slug tutmazsa **kapsayıcı maddeyi dene**: `milano-dukaligi` ölü ama
`italya` canlı ve konuyu kapsıyor.

**Kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez.**
Bulamazsan `kaynak:"bulunamadı — <ne aradın>"` yaz. Bu bir SONUÇTUR.

---

## 5. DOSYA VE AD ALANI — `§7`

```
data/kronoloji_<devlet>.js   →   window.KRONOLOJI_<DEVLET>
```
🔴 Dosya adındaki ayırt edici parça **değişken adında da** olacak. Bu kural
bir günde üç kez ihlal edildi ve birinde **%74 kayıt sessizce kayboldu**
(beş dosya tek ad alanı kullandı: tek tek 537, birlikte 137 okundu).

🔴 **`index.html`e SCRIPT SATIRI EKLEMEYİ KOORDİNATÖRE BİLDİR.** Bağlamayı
o yapar. Bu proje bağlanmamış veri dosyasını **DÖRT KEZ** yaşadı — sonuncusu
20 Ağustos'ta, 276 kronoloji maddesi ekranda yoktu.

`data/devletler.js`e **DOKUNMA** — orada o devletin eski kronolojisi var;
sen onu içine al, doğrula, ama AYRI dosyaya yaz.

---

## 6. KURALLAR

- **`§11`**: `sed` · `py -c` · `printf` · heredoc ile **Türkçe ya da
  backtick içeren** metin YAZMA. `Write` aracıyla dosyaya yaz, `py <yol>`
  ile çalıştır. Commit: `git commit -F <dosya> -- <dosyalar>`
- `git add -A` **ASLA**. `arac/uret_petek.py`yi **ASLA** çalıştırma.
- 🔒 Koşu sürerken `arac/girdi.py` · `arac/renkler.py` ·
  `arac/uret_petek.py` dosyalarına **tek bayt yazma** — koşu ölür.
  `data/*.js` serbest.
- Bitince **`node --check data/kronoloji_<devlet>.js`**
- **ÖLÇÜM ile ÇIKARIM AYRI SATIRDA.** Tek satırda birleşince çıkarım,
  ölçümün güvenilirliğini ödünç alır.
- Ölçmediğini **"ölçmedim"** diye yaz. Bulamadığını **"bulunamadı"**.

---

## 7. RAPOR — sayıyla, kalem kalem

```
① madde sayısı  ÖNCE → SONRA   ve madde/yıl oranı
② konu dağılımı — §2'deki altı kova, her birinde kaç madde
③ onem ve dunya dağılımı (5'ten 1'e)
④ kapsam: kaç `ic`, kaç `dis`
⑤ yer_id: kaç madde DOLU · kaç `kapsam_genis` · kaç BOŞ (ve niçin)
⑥ kaynak: kaç madde dolu · kaç "bulunamadı" · hangi kaynaklara dayandın
⑦ NEYİ BULAMADIN — açıkça
⑧ commit hash · index.html'e bağlanması gereken dosya adı
```
Ara rapor: *"iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"*.
