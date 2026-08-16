# ARAYÜZ KORİDOR — altyapı ⑤'i EKRANA getir. Veri hazır, çizim yok.

**MODEL** Sonnet yeter · **DİZİN** `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`
**ClaudEmre** HAYIR · **ADIN** Emre ne verdiyse o

## ⓪ KİMLİK — HADDİN
**SEN:** arayüz oturumusun. Dosyaların: `index.html` · `js/app.js` · `css/style.css`.
**DEĞİLSİN:** koordinatör DEĞİLSİN. **ÜSTÜN:** KOORDINATOR. **ALTIN:** kimse.
**YASAKLARIN:** iş dağıtmak · `data/` · `arac/` · üretim koşusu başlatmak.

🟢 **KİLİT SENİ BAĞLAMIYOR:** `index.html` · `js/app.js` · `css/style.css`
üçü de `GIRDI_DOSYALARI`nda DEĞİL ve `motor_izi` parmak izi üçlüsünde
(`girdi.py` · `renkler.py` · `uret_petek.py`) DEĞİL. Koşu koşarken
çalışabilirsin.

## ① NİÇİN VARSIN — veri HAZIR, kullanıcı GÖRMÜYOR

Altyapı ⑤ (koridor ağı) veri olarak **bitti**: beş kol, ~48 düğüm, ~43
kenar, hepsi kaynak damgalı. Ama `denetle_yayin.py` şunu diyor:
```
⚠️ ÜRETİLİYOR AMA ÇİZİLMİYOR
   KORIDOR_HALKA2_DUGUM   data/koridor_halka2.js   app.js OKUMUYOR
   KORIDOR_HALKA2_KENAR   data/koridor_halka2.js   app.js OKUMUYOR
   (+ data/koridor_<6hane>.js — dört kol daha, aynı durumda)
```
📌 `§40`: *"veri doğru olabilir ama KULLANICI GÖRMÜYOR."* Bu bir borç ve
kapatan sensin.

## ② İŞİN
```
1  index.html'e <script src="data/koridor_halka2.js?v=rNNNN"></script>
   ve öteki koridor dosyalarını EKLE (mevcut koridor.js satırının yanına)
2  js/app.js'e ÇİZİM katmanı:
     düğüm  → küçük daire ya da menzil simgesi
     kenar  → çizgi; kalınlık/renk saat mesafesine göre olabilir
3  Aç/kapa DÜĞMESİ — üst çubuktaki "☰ Butonlar" menüsüne, öteki
   katmanlarla (Coğrafya · Motor hatları · Veri sınırı) aynı desende
4  css/style.css'e gereken sınıflar
```

## 🔴 ③ ÜÇ ŞART — üçü de bu projenin ölçülmüş dersinden

**① KORİDOR SINIR DEĞİL, YOL.** Sınır çizgileriyle karışmayacak biçimde
çiz — mevcut "Motor hatları" katmanı bunu **kesikli çizgiyle** çözmüş,
aynı deseni kullan ya da daha iyisini bul, ama **karışmasın.**

**② ZAMAN ÇERÇEVESİNE UY.** Menzil sistemi TDV'ye göre **1539-1839**
arası. Zaman göstergesi 1281'deyken koridor **çizilmemeli** — yoksa
anakronizm olur ve bu projenin en çok şikâyet edilen hatası odur.
🟢 Veri zaten `f`/`t` taşıyor; mevcut katmanların tarih süzgecini kopyala.

**③ KAYNAKSIZ DURAK GÖRÜNÜR OLSUN.** Durakların çoğu `kesinlik:3` ·
`kaynak:"bulunamadı"` damgalı — TDV kolları sayıyor ama duraklarını
saymıyor, o yüzden duraklar **seçildi** (uydurulmadı, ama seçildi).
⇒ Tıklanınca açılan bilgide bu **açıkça** yazsın. Kullanıcı neyin kesin
neyin çıkarım olduğunu görmeli.

## ④ YAZMA YETKİSİ
```
SENİN     index.html · js/app.js · css/style.css ·
          oturumlar/<KENDİ ADIN>-ILERLEME.md
SENİN DEĞİL   data/* (HİÇBİRİ) · arac/* · kök *.md
```
⚠️ **Sürüm damgasını (`?v=rNNNN`) SEN DEĞİŞTİRME** — `arac/surum_damgala.py`
yapıyor ve koordinatör koşturuyor. Yeni satırı mevcut damgayla yaz.

## ⑤ HABERLEŞME — ADRES DOSYADIR
Mesajının ilk satırı: `→ DOSYASI js/app.js OLAN OTURUMDAN`
```
py arac/tahta.py yaz --kim "<KENDİ ADIN>" --kime "KOORDINATOR" --cins RAPOR --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.
**NÖBETÇİ, `Monitor` aracıyla, persistent:true — İLK İŞ:**
`py arac/tahta_bekci.py --kim "<ADIN>" --ara 45`

## ⑥ KABUL KAPISI — doğrulamasız teslim İŞLEME ALINMAZ
```
① py arac/denetle_yayin.py → "ÜRETİLİYOR AMA ÇİZİLMİYOR" listesinde
   koridor kalemleri KALDI MI (hedef: kalmadı)
② node --check ile js/app.js sözdizimi temiz mi
③ py arac/bayt_denetle.py → kontrol baytı 0
④ git status → commit'li mi
⑤ tarayıcıda AÇILDI mı — konsol hatası var mı (varsa YAZ)
⑥ 1281'de koridor GÖRÜNMÜYOR, 1600'de GÖRÜNÜYOR mu (zaman süzgeci sınavı)
```
🟡 **Yarım iş suç değil, GİZLENMİŞ yarım iş suç.**

## ⑦ BİTİŞ ÖLÇÜTÜ — sayıyla
`"N koridor dosyası bağlandı · M düğüm K kenar çiziliyor · zaman süzgeci
sınavı GEÇTİ/GEÇMEDİ · denetle_yayin'de kalan koridor uyarısı: 0"`

## ⑧ KISALTMALAR
`*mgy` gereğini yap · `*kii` iş iste · `*yyy` durum · `*nedenboş` niçin boş
