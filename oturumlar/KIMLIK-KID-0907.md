# KIMLIK-KID-0907 — tâbi gövdelerin etiketi: 26 kimlik kararı

## ⓪ KİMLİK — HADDİN
```
SEN         İşçi oturum · KIMLIK-KID-0907
DEĞİLSİN    Koordinatör DEĞİLSİN. İş dağıtmazsın, oturum açmazsın.
ÜSTÜN       1.MURAT HÜDAVENDİGAR (Oturum 0)
ALTIN       kimse
YASAKLARIN  iş dağıtmak · başkasının dosyası · `data/*.js` (KOŞU SÜRÜYOR)
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

Emre'nin isteği (`HUKUM-VASSAL-GORUNUM-0906.md`): tâbi gövdelerin rengi
Osmanlı'yla birleşecek, **ayrımı ETİKET taşıyacak** — *"kırmızı üstünde
beyaz yazı, parantez içinde vassal/özerk/himaye"*.

Motor tarafı **7 Eylül'de yazıldı** (`uret_petek.py` → `donemler.js` `vl`
çapa listesi). Bloke motor değil, **etiketin İÇERİĞİ**:

```
`v:` dönemi   429   ·  statu 421  ·  k 373  ·  kid 291
```
🔴 Ve etiket bugün **aynı polity'yi iki kez** gösteriyor, çünkü kapsama
kısmî:
```
Boğdan Voyvodalığı      +  Boğdan Voyvodalığı (Moldavia)
Kavalalı hanedanı  ·  Mısır Kavalalı Hanedanı  ·  Mısır valiliği (Kavalalı…)
```
20 mekanik tamamlama yapıldı (verinin kendi sözlüğünden). **Kalan senin.**

## ② İŞİN

Tabanı KENDİN ölç, devralma:
```bash
py -X utf8 denetim/ARAC-KID-TAMAMLA-0907.py
py -X utf8 denetim/ARAC-VL-KID-0907.py
```
7 Eylül ölçümü (**doğrula**): `kid`siz 157 → MEKANİK 20 (yapıldı) ·
**ARAŞTIRMA 81 (26 farklı `k` metni)** · **ADSIZ 56**.

### ② a — 26 `k` metnini künyeye bağla
Her biri için: `data/devletler.js`te karşılığı var mı?
🔴 **`§4`: ad benzerliği eşanlam DEĞİLDİR** (Haydarâbâd Sind ↔ Dekken,
1500 km). Künye adıyla `k` metnini *benzeterek* bağlama — **kaynağa sor.**
🔴 **`§3.5.0`: künye VAR olması YAZILABİLİR olduğu anlamına gelmez** —
penceresi de tutmalı.

### ② b — 🔴 VE BUNLARIN BİR KISMI POLITY DEĞİL, DURUM
Ölçüldü, ve bu **modelleme sorusu**, mekanik tamamlama değil:
```
"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"   ×11
"Sahra vahalarının özerk idaresi"                     ×6
"Mısır ordusu (işgal)"                                ×3
"Kabiliye'nin fiilî özerkliği"                        ×2
```
Bir harita etiketi **polity** ister. Bunlara `kid` **uydurma**; kovayı
ayır ve koordinatöre **soru olarak** getir: bu dönemler etiketsiz mi
kalsın, yoksa `statu` bir varyantla mı ifade edilsin?
📌 Bu, `§4`ün *"bulamadığını `bulunamadı` diye yaz"* kuralının kimlik
yüzü — **kimlik yoksa yok demektir.**

### ② c — 56 adsız dönem
`k` de `kid` de yok. Etiket üretmezler (kod onları zaten eliyor).
Sayıyı doğrula ve **kapsamı bildir**; hepsini araştırmak senin işin değil.

### ② d — TESLİM
`denetim/yer_yama_kid_<sen>_0907.js` — tam `v:` dizisiyle.
🔴 UYGULAMA. Koşu bitince Oturum 0 uygular.
Ve etkiyi ÖLÇ: `ARAC-KID-20-ETKI-0907.py` deseniyle *"etiket N → M"*.

## ③ YAZMA YETKİSİ
```
🟢 SENİN   denetim/yer_yama_kid_*_0907.js · denetim/BULGU-KID-*.md
           oturumlar/KIMLIK-KID-0907.md (kendi ilerleme dosyan)
🔴 DEĞİL   data/*.js (KOŞU 8 sürüyor, 7 Eylül 11:17:46, ~16 s)
           arac/*.py · js/app.js · kök *.md
```
🔴 Koşu sırasında `data/*.js` yazmak koşuyu öldürmez ama **çıktıyı
yayınlanamaz** yapar (`§7` — ölçülmüş: 10s35dk'lık bir koşu bu yüzden
reddedildi).

## ④ SENİ BAĞLAYAN YASALAR
```
§4       TDV esas · ölü slug · ad benzerliği ≠ eşanlam · "bulunamadı" SONUÇTUR
§3.5.0   künye var ≠ yazılabilir (penceresi de tutmalı)
§7       dosya sahipliği · koşu sırasında donuk olanlar
§11      devraldığın rakamı DOĞRULAMADAN aktarma · ölçmediğini `ölçmedim` yaz
         `0`, "yok" ile "bakmadım" arasında ayrım yapmaz
🔴 §11 KABUK  kaçış/Türkçe/backtick bash'ten GEÇMEZ · sed/heredoc/py -c YOK
         Write + `py <yol>` / `git commit -F <dosya>`
```

## ⑤ HABERLEŞME
```
py arac/tahta.py yaz --kim "KIMLIK-KID-0907" --kime "1.MURAT" --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.
🔴 Kritik mesajı `oturumlar/tahta.json`dan **geri oku** (`§7.1 ⑤b`).

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
kid kapsaması   291 / 429  →  hedef: ölçülebilir bir artış
etiket sayısı   ARAC-VL-KID ile ÖNCE/SONRA — mükerrer etiket AZALMALI
```
Teslim SAYIYLA: *"26 → 9 bağlandı, 17'si şu sebeple polity değil"*.

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"
```

## ⑧ EMEKLİLİK NÖBETİ
```bash
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/emeklilik.py --nobet --kim "KIMLIK-KID-0907"
```
⚠️ **Bulamadığını `bulunamadı` diye yaz.**
⚠️ Oku: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/KISALTMALAR.md`
