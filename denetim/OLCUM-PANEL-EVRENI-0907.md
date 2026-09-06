# ÖLÇÜM — ㉓ ŞEHİRLER PANELİ EVRENİ (7 Eylül 2026)

> Oturum: SONNET HAZIR KITA 129. Sevk: 1.MURAT, KOL-0907.md sonrası ek kalem
> (⑰'nin bulgusunun devamı). **BU BİR ÖLÇÜMDÜR, DÜZELTME YAZILMADI.**
> `js/app.js`e dokunulmadı — kullanıcı görünürlüğü kararı Emre'nindir.
> `data/` ve `arac/` DONUK (koşu 7b canlı), ikisi de okunmadı bile —
> bu ölçüm yalnız `js/app.js` ve `git log` üzerinde yapıldı.

---

## ① KASITLI Mİ BAYAT MI — `git log -S` ölçümü

```
git log --follow -S "window.YERLESIMLER" --reverse --format="%H %ad %s" -- js/app.js
```

| Tarih | Commit | Ne değişti | O gün `girdi.py`de kaç yerleşim dosyası vardı |
|---|---|---|---|
| 2026-07-28 | `4e6f3c5` | **İLK KULLANIM** — "PETEK SİSTEMİ" | `girdi.py` HENÜZ YOKTU · tek dosya: `data/yerlesimler.js` |
| 2026-08-03 | `88f5eab` | ARAYÜZ 2. parti | 8 |
| 2026-08-08 | `2ab5252` | **"Yerleşim Kronolojileri sekmesi"** eklendi | 34 |
| 2026-08-30 | `16e1c73` | Yabancı başkent yıldızı eklendi | 57 |
| 2026-09-04 | `1aacf30` | T-0126 ters sorgu (haritaya tıklama) eklendi | 77 |

**🟢 İLK YAZIM (`4e6f3c5`) KASITLIYDI VE DOĞRUYDU** — o gün `window.YERLESIMLER`
verinin **tamamıydı** (1 dosya, `girdi.py` bile yoktu). O satırı o gün yazan
kişi hiçbir şeyi kaçırmadı.

**🔴 AMA SONRAKİ DÖRT DOKUNUŞ BAYAT ZEMİNE YAZILDI** — her biri, veri ZATEN
çok-dosyalı hâldeyken, AYNI dar diziye yeni bir özellik bağladı:

- **`2ab5252` (8 Ağustos) en çarpıcısı**: bu commit'in kendi mesajı
  *"Emre'nin 3. işinin ucuz ayağı: 'kullanıcı Belgrad hangi tarihte kimdeymiş
  görebilmeli'. **Veri ZATEN VARDI**... eksik olan yalnız GÖSTERİM'di."*
  diyor — yani yazan kişi verinin dağınık-ama-var olduğunu BİLİYORDU, ve
  o an 34 ayrı dosya bağlıydı. Yeni sekmenin kendi kod yorumu da *"Bu sekme
  SÜZGEÇSİZDİR: her yerleşim, her dönem, sahibiyle"* diyor — ama kodun
  kendisi tek diziye bakıyor. **Niyet ile uygulama ayrıştı.**
- **`16e1c73` (30 Ağustos) kendi eksikliğini İTİRAF EDİYOR**: eklenen kod
  yorumu *"yıldızsız kalır — çökmez, eksik gösterir... bugünkü hâl 'hiç
  yabancı başkent yok'tan iyi"* diyor. Bu bir tasarım kararı değil,
  **bilinerek ertelenmiş bir borç.**
- **`1aacf30` (4 Eylül)**, en yeni dokunuş, 77 dosya varken yine tek diziye
  yazıldı.

⇒ **HÜKÜM: BAYAT, kasıtlı DEĞİL.** Tek bir unutkanlık değil — beş hafta
boyunca beş ayrı commit'te **tekrarlanan** bir desen, ve en az birinde
yazan kişi kendi eksikliğini görüp yine de ertelemiş.

---

## ② DİĞER PANELLER — aynı deseni taşıyan TÜM yerler

`grep -n "window\.YERLESIMLER\b" js/app.js` → **6 farklı işlev, 7 referans**
(hepsi aşağıda, hiçbiri atlanmadı):

| # | Satır | İşlev | Ne için kullanılıyor | Etki |
|---|---|---|---|---|
| 1 | 1732-1735 | `ISARET_KAYNAK` | **Haritadaki el-değiştirme etiketleri** (⚔ 📜 vb. simgeler) | 🔴 YÜKSEK — görsel çekirdek |
| 2 | 1997-2003 | `osmanliBaskentPencereleriKur` | Osmanlı başkent yıldızı (Söğüt→Bursa→Edirne→İstanbul) | 🟢 DÜŞÜK — hedef 4 şehir zaten çekirdek 792'de |
| 3 | 2071-2078 | `yabanciBaskentPencereleriKur` | Yabancı devlet başkent yıldızı | 🔴 YÜKSEK — kod kendi eksikliğini itiraf ediyor |
| 4 | 4686-4696 | `_enYakinYerlesim` | Boş haritaya tıklayınca en yakın yerleşimi bulma (T-0126) | 🔴 YÜKSEK — dünyanın çoğu yerinde yanlış/boş sonuç |
| 5 | 4747-4758 | **"Şehirler" sekmesi** | Osmanlı 4-kademe idari tasnif | ⑰'nin bulduğu, aşağıda ÖLÇÜLDÜ |
| 6 | 4784-4930 | **"Yerleşimler" sekmesi** | Süzgeçsiz arama/liste (8 Ağustos'ta AÇIKÇA bu boşluğu kapatmak için açıldı) | aşağıda ÖLÇÜLDÜ — EN ÇARPICI |

**Ayrıca sınadım, ETKİLENMİYOR:** "Devletler" sekmesi (satır 4907)
`window.DEVLETLER`i okuyor — o TEK dosya (`data/devletler.js`), zaten tam.
Bu desenin dışında.

---

## ③ DÜZELTİLİRSE KAÇ KAYIT GÖRÜNÜR — iki panel AYRI AYRI ölçüldü

Yöntem: `arac/girdi.py`nin okuduğu TAM 3805 kayıtlık bağlı evreni
(`girdi.yukle()`) çektim, her panelin KENDİ süzgeç mantığını satır satır
Python'a taşıdım, ve önce **mevcut 792'lik alt kümede ⑰'nin rakamlarını
BİREBİR ÜRETEREK** (246 dönemsiz · 5 k-yok · 541 gösterilen) yöntemi
doğruladım — sonra AYNI kodu tam evrene çalıştırdım.

### A) "Şehirler" sekmesi (app.js:4754-4758, Osmanlı 4 kademe tasnifi)

```
                    MEVCUT (792 kaynak)   DÜZELTİLMİŞ (3805 kaynak, AYNI süzgeçler)
dönemsiz elenen           246                      2876
k yok/0 elenen              5                         9
GÖSTERİLEN                541  (%14,2)              920  (%24,2)
  kademe 1                  6                          7
  kademe 2                 62                         70
  kademe 3                168                        277
  kademe 4                305                        566
```
⇒ **541 → 920, +379 kayıt (+70%).** ⑰'nin "%14,2" rakamı doğrulandı (541/3805).
Süzgeçler ② ve ③ KASITLI sayıldı (dönemsiz nokta dizine girmemeli, `k:0`
zaten "kademesiz" diye tanımlı) — yalnız KAYNAK DİZİSİ (①) düzeltildi.

### B) "Yerleşimler" sekmesi (app.js:4784+, süzgeçsiz arama/liste) — EK BULGU

🔴 **Bu sekmenin KENDİSİ dönem/kademe süzgeci UYGULAMIYOR.** `ciz()`
fonksiyonu (satır 4871-4877) `YRL`yi (=`window.YERLESIMLER`) YALNIZ arama
kutusundaki METİNLE filtreliyor — kodun kendi yorumu *"SÜZGEÇSİZDİR: her
yerleşim, her dönem, sahibiyle"* diyor ve bu doğru, TEK süzgeç kaynak
dizisinin kendisi:

```
MEVCUT       792 / 3805  = %20,8   (arama kutusu 3013 kaydı HİÇ görmüyor)
DÜZELTİLMİŞ 3805 / 3805 = %100
```
⇒ **792 → 3805, +3013 kayıt (+380%).** Bu, ⑰'nin ölçtüğü "Şehirler"
panelinden ÇARPICI DAHA BÜYÜK bir boşluk — ve ironik: bu sekme **tam olarak**
"Şehirler" panelinin Osmanlı-merkezli darlığını KAPATMAK için 8 Ağustos'ta
açılmıştı (bkz. ①) ve aynı kusuru miras almış.

---

## EK, DÜŞÜK MALİYETLİ BİR ÖLÇÜM — `ISARET_KAYNAK` (harita etiketleri)

Tam simülasyon yapmadım (epok-damgası/pencere mantığı ayrı, zaman sınırı),
ama kaba büyüklük göstergesi olarak `d`+`v`+`s` dönem SAYISINI kıyasladım:
```
792 kaynaktan gelen toplam donem : 4698
3805 tam evrenden gelen toplam donem: 14258   (~3,0×)
```
⇒ Haritadaki el-değiştirme etiketlerinin potansiyel olarak **üçte ikisi**
hiç üretilmiyor olabilir. Bu bir ÜST SINIR tahminidir, `ISARET_KAYNAK`ın
kendi ek süzgeçleri (epok damgası, pencere birleştirme) uygulanmadı —
**ÖLÇÜLEMEDİ**, yalnız büyüklük mertebesi.

---

## ÖLÇMEDİĞİM — açıkça

```
① ISARET_KAYNAK'ın TAM simülasyonu           ÖLÇÜLEMEDİ (yalnız kaba büyüklük)
② yabanciBaskentPencereleriKur'un TAM etkisi ÖLÇÜLEMEDİ (kaç başkent kaçıyor,
                                              isim eşleşmesi ayrı bir hataya
                                              da açık — bu turda bakılmadı)
③ _enYakinYerlesim'in TAM etkisi              ÖLÇÜLEMEDİ (dünya genelinde
                                              "en yakın 150 km" sınavı
                                              koşulmadı)
④ k: alanının TÜM evrende neden HİÇBİR kaydın
   "yok/None" değil, ya 0 ya 1-4 taşıdığı     ÖLÇÜLEMEDİ — muhtemelen
                                              varsayılan `k:0` her kayda
                                              yazılmış; DOĞRULANMADI
```

---

## ÖNERİ — yazılmadı, yalnız kaydediliyor

Kaynak dizi olarak `window.YERLESIMLER` yerine `arac/_yer_ara.py`'nin (ve bu
oturumun `girdi.yukle()`'sinin) yaptığı gibi **78 dizinin birleşimi**
kullanılmalı. `arac/_yer_ara.py`'nin kendi başlığı bu dersi zaten taşıyor:
*"yalnız `window.YERLESIMLER`'e bakan bir sorgu verinin %70'ini GÖRMEZ"* —
bu ölçüm aynı dersin **arayüz** yüzü. Karar ve uygulama Emre'nin/
koordinatörün.
