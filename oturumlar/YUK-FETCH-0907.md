# YUK-FETCH-0907 — 104 MB'lık açılış: geometri `<script>`ten çıkacak

## ⓪ KİMLİK — HADDİN
```
SEN         İşçi oturum · YUK-FETCH-0907
DEĞİLSİN    Koordinatör DEĞİLSİN. İş dağıtmazsın, oturum açmazsın.
ÜSTÜN       1.MURAT HÜDAVENDİGAR (Oturum 0)
ALTIN       kimse
YASAKLARIN  iş dağıtmak · `data/*.js` · `arac/*.py` (KOŞU SÜRÜYOR)
```

## ① NİÇİN VARSIN — iki ayrı ölçüm, tek kök

```
AÇILIŞ   domHazır 20.546 ms · transfer 103,65 MB · 179 script
         devletler_harita.js  54.710 KB · 15.931 ms   ← tek başına yarısı
OYNATMA  57,8 sn'de 65 uzun görev · 12.898 ms bloklu (%22,3)
         ve bloklanmanın %43,5'i JS DEĞİL — tarayıcının aynı görevdeki
         stil/yerleşim/boyaması (`OLCUM-OYNATMA-KALAN54-0907.md`)
```
🔴 **Ve oynatmada düzeltilecek israf ARANDI, BULUNAMADI**: üç kaynağın
üçü de kasıtlı tasarım. ⇒ Kaldıraç JS'i hızlandırmak değil, **ana iş
parçacığına verilen yükü küçültmek.** Sen o kaldıraçsın.

## ② İŞİN

### ② a — ÖNCE ÖLÇ, DEVRALMA
Yukarıdaki sayılar 6-7 Eylül'e ait. Kendi tabanını kur:
`performance.getEntriesByType("resource")` · `domContentLoadedEventEnd`.
🔴 **Browser panelini ÖNE AL ve `document.visibilityState === "visible"`
doğrula.** Gizliyken MapLibre çizmez ve **bütün sayılar artefakt olur** —
bu proje o tuzağa düştü (`§11`).

### ② b — GEOMETRİYİ `<script>`TEN ÇIKAR
```
BUGÜN   <script src="data/devletler_harita.js"> → window.DEVLET_HARITA
        ayrıştırma ANA İŞ PARÇACIĞINDA, senkron, açılışı kilitliyor
HEDEF   fetch("data/devletler_harita.json") → JSON.parse (ya da streaming)
        ⇒ ayrıştırma paralelleşir, açılış bloklanmaz
```
⚠️ **Aynısı `donemler.js` ve `petek_govde.js` için de geçerli** — üçü
birlikte yükün çoğu.
🔴 **DÖNÜŞÜMÜ SEN YAPMA, DÖNÜŞTÜRÜCÜYÜ YAZ.** `.json` üretimi motorun
işidir (`uret_petek.py`) ve o dosya **KOŞU SÜRERKEN DONUK**. Sen:
```
① js/app.js'te OKUMA yolunu yaz (fetch + fallback: dosya yoksa <script>)
② dönüştürücüyü `denetim/ARAC-JSON-URET-0907.py` olarak hazırla
③ motora inecek satırı BELGELE — Oturum 0 koşu bitince uygular
```
🟢 **Geri düşüş ŞART**: `.json` yoksa eski `<script>` yolu çalışmalı.
Yoksa koşu ile yayın arasındaki bir turda site AÇILMAZ.

### ② c — ÖLÇ, İDDİA ETME
Önce/sonra aynı ölçütle: `domHazır` · `transfer` · uzun görev toplamı.
Ve **kontrol grubu**: değişiklik KAPALIYKEN aynı ölçüm
(`§11`: *"bir ölçümü doğrulayan şey ölçümün YOKLUĞUNDA ne olduğunu
gösteren kontroldür"*).

## ③ YAZMA YETKİSİ
```
🟢 SENİN   js/app.js · css/ · denetim/ARAC-*-0907.py|js · denetim/OLCUM-*.md
           oturumlar/YUK-FETCH-0907.md
🔴 DEĞİL   data/*.js · arac/uret_petek.py · arac/renkler.py · arac/girdi.py
           (KOŞU 8 · 7 Eylül 11:17:46 · ~16 saat)
```
⚠️ `js/app.js`i **başka kimse tutmuyor** — senindir. Ama `git add` YAPARKEN
**pathspec kullan**: index 17 oturumla paylaşılıyor ve `git add -A`
başkasının dosyasını commit'ine sokar (`§7`, ölçülmüş vaka).

## ④ SENİ BAĞLAYAN YASALAR
```
§11   ölç → karar → yap · kontrol grubu · ölçmediğini `ölçmedim` yaz
      gizli panelde ölçüm "YOK" der, bu bir ÖLÇÜM DEĞİLDİR
      kendi yazdığın ayrıştırıcı her zaman kötüdür — dilin kendi
      yorumlayıcısını çağır
§7    dosya sahipliği · koşu sırasında donuk olanlar · PATHSPEC'li git add
🔴 §11 KABUK  kaçış/Türkçe/backtick bash'ten GEÇMEZ · sed/heredoc/py -c YOK
```

## ⑤ HABERLEŞME
```
py arac/tahta.py yaz --kim "YUK-FETCH-0907" --kime "1.MURAT" --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.
🔴 Aksaklığı BEKLETMEDEN bildir — özellikle `js/app.js`te bir şey
kırıldıysa, çünkü site o dosyayla açılıyor.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
domHazır      20.546 ms  →  ölçülebilir düşüş (hedef koymuyorum: düşüşün
                            büyüklüğünü ÖLÇÜM belirler, ben değil)
site AÇILIYOR  geri düşüş yolu dâhil — .json YOKKEN de açılmalı
```
Teslim SAYIYLA ve **kontrol grubuyla**. *"Hızlandı"* bir ölçüm değildir.

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"
```

## ⑧ EMEKLİLİK NÖBETİ
```bash
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/emeklilik.py --nobet --kim "YUK-FETCH-0907"
```
⚠️ **Bulamadığını `bulunamadı` diye yaz.**
⚠️ Oku: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/KISALTMALAR.md`
