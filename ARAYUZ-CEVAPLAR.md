# ARAYÜZ — KULLANICI SORULARININ CEVAPLARI

> 1 Ağustos 2026. Kullanıcı sekiz görsel doğrulamayı ekranda yaptı ve üç soru
> sordu. Cevaplar burada kalıcı; `BEKLEYENLER.md` yalnız **açık** işleri tutar.

---

## ✅ GÖRSEL DOĞRULAMA — SEKİZİ DE KAPANDI (1 Ağustos 17:30)

Kullanıcı sekizini de ekranda doğruladı. **Hiçbiri açık değil.**

| # | neydi | sonuç |
|---|---|---|
| ① | Fetret devrinde zoom zıplaması | ✅ **halledilmiş** |
| ② | Lejant kapalıyken alan göstergesi | ✅ |
| ③ | Anlatım paneli takılmadan ilerliyor | ✅ |
| ④ | z6 idarî birim etiketi | ✅ görünüyor — **ama ad seçimi değişecek, aşağıya bak** |
| ⑤ | Şam `1516-09-27` işaretli | ✅ |
| ⑥ | ▦ Veri sınırı dikdörtgeni | ✅ görüldü — **ne işe yaradığı aşağıda** |
| ⑦ | 🗺 Coğrafya düğmesi | ✅ görüldü — **sorunun yazımı hatalıydı, aşağıda** |
| ⑧ | 1484 Kili/Akkirman rozetleri | ✅ iki ayrı tarih görüldü |

### 🔴 ④'ten doğan YENİ İŞ — dönemin kendi adları
> *"'Ankara bölgesi', 'Sivas bölgesi' diyeceğine **o dönem kullanılan bölge/eyalet
> isimlerini** kullansa daha iyi değil mi — **Saruhan, Anadolu** filan gibi,
> o dönemde ne söyleniyor ise."*

**Haklı ve bugünkü `§74` ailesinden:** etiket bugünün idarî adını taşıyor, oysa
harita **o günü** anlatıyor. `Ankara` 1402'de bir *sancak*, 1600'de *Anadolu
Eyaleti*nin parçası; `İzmir` *Saruhan* / *Aydın*.
⇒ **Zaman içinde değişen bölge adı** gerekiyor — yani bu bir arayüz işi değil,
**veri işi**: bölge adlarının kendi `f:`/`t:` pencereleri olmalı.
🟡 **Açık iş, atanmadı.** Kullanıcı bugün için ertelemedi ama yeni iş de
istemedi; sıradaki oturumda dağıtılacak.

### ⑥ ▦ VERİ SINIRI NE İŞE YARAR
Düğme, atlasın **üretim penceresini** çiziyor: `box(-12, 1.5, 62, 62)`.
```
o dikdörtgenin İÇİ   → veri üretiliyor, boyanıyor
o dikdörtgenin DIŞI  → hiç üretilmiyor; boş görünmesinin sebebi VERİ YOKLUĞU DEĞİL,
                       ATLASIN ORAYA HENÜZ UZANMAMASI
```
⇒ *"İran'ın doğusu niye yok, Hindistan niye boş"* sorusunun cevabı bu çizgi.
**Bir hata göstergesi değil, bir kapsam göstergesi.** Kullanıcı boş bir yer
görünce önce bu düğmeye basar: çizginin dışındaysa **eksik değil, kapsam
dışı.**

### ⑦ 🗺 COĞRAFYA — ve sorunun yazımı HATALIYDI
Kullanıcı: *"dağları ortadan kaldırıyor. 5 katman açıkken okunabiliyor mu
diyor, katmanları nereden ayarlıyoruz?"*

🔴 **"Beş katman" ifadesi koordinatörün uydurmasıydı; öyle bir panel YOK.**
Gerçekte **iki** düğme var ve ikisi ayrı şeyi açıyor:
```
🗺 Coğrafya   BİZİM kendi coğrafya katmanımız (kara · göl · nehir · dağ)
              Açılınca Esri altlığı KAPANIR — o yüzden dağlar kayboluyor
              (Esri'nin dağları gidiyor, bizimki geliyor)
⌁ Motor hattı Motorun kullandığı nehir/sırt hatları
```
📌 `app.js:2811`'in kendi notu: *"iki grup **ayrı ayrı** açılır; birlikte
açılırsa aralarındaki fark kaybolur ve **bütün teşhis değeri o farkta**."*
⇒ Düğmenin amacı güzellik değil **ölçüm**: *Esri'den kendi altlığımıza
geçtiğimizde harita hâlâ okunabilir mi?* Kullanıcının gördüğü *"dağlar
kayboluyor"* **beklenen davranış** — sorunun cevabı da bu.

---

