# MERAK / EK OKUMA — ilerleme (İÇERİK oturumu)

## 10 Ağustos 2026 · `parti-0007` TESLİM

```
data/merak.js      8 → 14 kart   (+6)
data/ekokuma.js    3 →  4 kart   (+1)
açık kalan                    0
```

Şartnamenin `⑥ BİTİŞ ÖLÇÜTÜ` bölümü bayattı (*"merak 8 → 22"*); dosyanın
başındaki kırmızı düzeltme bloğu doğru olandı: açık kalan **yalnız
`parti-0007`nin 6 kalemi**. Altısı da yazıldı.

| kalem | Emre'nin isteği | kart | dosya |
|---|---|---|---|
| H-0001 | Haçlılar niçin hep başarısız | `haclilar-nicin-basarisiz` | merak |
| H-0002 | Çanakkale'ye hisar · boğaza zincir | `canakkale-hisar-ve-zincir` | merak |
| H-0003 | Fâtih niçin Galata'yı almadı | `galata-nicin-alinmadi` | merak |
| H-0004 | Hıristiyan tebaa · zorlama var mıydı | `hristiyan-tebaa-zorlama-mi` | merak |
| H-0004 | zimmî · cizye · millet düzeni (tanım) | `zimmi-cizye-millet-duzeni` | **ekokuma** |
| H-0005 | Timur şehzâdeleri bağlanmaya zorladı mı | `timur-sehzadeleri-baglanma` | merak |
| H-0006 | Timur'un misyonu neydi | `timurun-misyonu-neydi` | merak |

**6 kalem → 7 kart.** KUTU DENETİM *"belki 5"* demişti; H-0005/H-0006 ayrı
tutuldu (koordinatör onayladı) ve H-0004 zaten iki dosyaya bölünüyordu.

---

## 🔴 DEVRALINAN İKİ İDDİA SINANDI — biri çürüdü, biri doğrulanamadı

KUTU DENETİM notunu *"bu iki cümleyi ÖLÇMEDİM, kartı yazan sınasın"*
damgasıyla bırakmıştı. Sınandı:

```
"Kilitbahir + Kale-i Sultâniye (1462)"        🔴 ÇÜRÜDÜ
   TDV canakkale          "1463 yılında inşa edilen ve Kal'a-i Sultâniyye"
   TDV kilitbahir-kalesi  "İstanbul'un fethinden SONRA yapılmış kale"
                          Kritovulos: 1463-1465
"Galata 28 Mayıs'ta teslim ANLAŞMASIYLA alındı"  🟡 DOĞRULANAMADI
   TDV galata gövdesi okundu — teslim gününe dair kayıt YOK
```

⚠️ Ve çürüyen kısım yıl değil **SIRA**: hisarlar 1453 kuşatmasının aracı
değil, **fetihten on yıl sonraki** bir tedbir. ⇒ Emre'nin gözlemi
**doğruymuş**: kuşatma sırasında Çanakkale hisarsızdı. Kart bu yüzden
*"niçin yapılmadı"* değil ***"niçin O KADAR GEÇ yapıldı"*** sorusuna oturdu —
öncülü düzeltmek soruyu öldürmedi, **keskinleştirdi.**

📌 28 Mayıs karta **yazılmadı**; yerine `⚠️ BULUNAMADI` damgası kondu.
Doğrulanmamış bir günü yazmak, hiç yazmamaktan kötüydü.

---

## Ölçülen sözleşme — `js/app.js`e karşı

Şartname *"şemayı değiştirme"* diyordu; şema **koddan** okundu, belgeden
değil:

```
app.js:3547 ekKartBagliMi()  →  liste.indexOf(o.t)  · BİREBİR eşleşme
app.js:3549                  →  kart.olay || kart.baglanti
app.js:3607                  →  k.goruşler || k.gorusler   (Türkçe 'ş' KORUNDU)
app.js:3552 EKOKUMA_TUR      →  yalnız "sebep-sonuc" | "magazin" | "merak"
```

Denetim (kendi yazdığım, `arac/*`a dokunmadan):
```
merak 14 · ekokuma 4 · mükerrer id 0 · şema uyarısı 0
bağlantı 63 / karşılıksız 0        (16 olaylar dosyası · 1161 madde)
görünmez bayt (0x08 / 0x00) 0      (CLAUDE.md §11 "aletin gösterdiği ≠ dosyada yazan")
```

⚠️ **Tarayıcıda GÖRSEL doğrulama YAPILMADI** ve sebebi kayda geçiyor:
`.claude/launch.json` yazmak gerekiyordu, o dosya benim değil (`§7`). Onun
yerine sözleşme **koddan** ölçüldü — click-through'dan zayıf değil, ama
**aynı şey de değil.** Bir sonraki arayüz oturumu kartları gözle görsün.

---

## Kaynak turu — `CLAUDE.md §4`

TDV birincil; **HTTP kodu + GÖVDE OKUMASI**, `<title>`e güvenilmedi.

```
🟢 CANLI ve gövdesi OKUNDU
   canakkale · kilitbahir-kalesi · gelibolu · anadoluhisari · rumelihisari
   halic · istanbul · galata · haclilar · nigbolu-savasi · varna-muharebesi
   zimmi · cizye · millet · devsirme · timur · ankara-savasi
   suleyman-celebi-emir · musa-celebi · mehmed-i

🔴 ÖLÜ (302)
   hacli · varna-savasi · bogazkesen · kilitbahir · bogazlar · sultaniye
   kalei-sultaniye · istanbulun-fethi · mutahharten · kara-yusuf
   suleyman-celebi · suleyman-celebi--emir · haclilar--osmanli
```

**Tuzak ② üç kez çıktı** (canlı slug, aranan içerik yok):
- `galata` **200** ve doğru madde — ama 1453 teslimi hakkında **susuyor**
- `emir-suleyman` **200** — ama yalnız bir **yönlendirme kütüğü**; gerçek
  madde `suleyman-celebi-emir` (ve `suleyman-celebi` ÖLÜ)
- `rumelihisari` **200** — Karadeniz ablukası ve Rizzo olayı **yok**

📌 `emir-suleyman` vakası `§4`ün dördüncü alt-sınıfına yeni bir akraba:
gövde boş değil, **başka bir maddeye yönlendiriyor** ve yönlendirmenin hedefi
`--` ekli değil, **tam tersi**: `suleyman-celebi-emir` (sonek değil, sıralama
farkı). *"Ölü slug ise ara"* kuralı burada da tuttu.

**Kalıcı `bulunamadı` (karta açıkça yazıldı):**
- Galata'nın teslim günü — TDV `galata`
- Osmanlı'nın boğazlara zincir germeyi düşünüp düşünmediği — taranan
  maddelerin hiçbirinde kayıt yok; ilgili görüş bir **çıkarım** olarak
  damgalandı

---

## Koordinatöre iletilen, cevabı beklenmeyen not

**H-0004 kartları `§1.6`nın 8. boyutunun (sosyal yapı) kıyısında duruyor.**
Yazdım, çünkü kalem bana açıkça verildi ve `ekokuma.js`te zaten `yeniçeri`
(askerî yapı) kartı var — yani emsal mevcut. Ama bu bir **genişletme kararı**
ise koordinatörün bilmesi gerekiyordu; kartlar kurumun **tanımıyla** sınırlı
tutuldu, bir konu ekseni açılmadı.

---

## Bu partiden çıkan iki ders

🔴 **Bir öncülü düzeltmek soruyu iptal etmez — çoğu zaman KESKİNLEŞTİRİR.**
*"Çanakkale'ye hisar yapılmadı"* öncülü yanlıştı ve ilk refleks kalemi
*"soru geçersiz"* diye kapatmaktı. Ölçülünce görüldü ki Emre'nin **gördüğü
şey doğru**, yalnız tarihi kaymış: hisarlar **fetihten sonra** yapılmış.
⇒ Yanlış öncül, doğru gözlemin üstünü örtebiliyor. Öncülü düzeltip soruyu
**yeniden sormak**, soruyu düşürmekten kat kat verimli.

🔴 **Bir tartışma kartında "açık kalan soru" da KAYNAKLA gösterilmeli.**
H-0006'da *"niçin Avrupa'ya açılmadı"* sorusu cevapsız bırakılmadı ama
uydurulmadı da: TDV'nin Çin seferi için *"gerekçeleri tam olarak açık
değildir"* cümlesi kartın içine kondu. ⇒ **Belirsizliğin de bir kaynağı
olur**; kaynaksız belirsizlik ile kaynaklı belirsizlik aynı şey değildir.
