# MOTOR KUYRUK — `arac/uret_petek.py`in TEK SAHİBİ

**Koordinatör:** 1.MURAT · **Açılış:** 2 Eylül 2026

---

## 🔴🔴 AÇILIŞTA ÖNCE BUNU ÖLÇ — KOŞU SÜRÜYOR OLABİLİR
```bash
tail -3 kosu_2eylul.log
ls -l data/donemler.js
```
`arac/uret_petek.py` · `girdi.py` · `renkler.py` üçü **PARMAK İZLİDİR**
(`girdi.motor_izi()`, üç ad sabit yazılı). Koşu sürerken bu üçünden birine
yazmak **koşuyu ÖLDÜRÜR.**

⚠️ **Ve "koşu bitti" bir DURUM İDDİASIDIR, ölçülmeden söylenmez.** Bugün
bir oturum *"koşu bitti, renkler.py yazılabilir"* diye **önerdi**;
yanlıştı — biten koşu 10:30'da bitmişti, YENİ koşu 11:01'de başlamıştı.
Koordinatör yakaladı. Kendi teşhisi: *"bu bayat bir bilgiyi devralmak
değil, TAZE bir bilgiyi gözden kaçırmaktı."*
🟢 `data/*.js` koşu sırasında **SERBEST** (motor onları başta kopyalar).

## AÇILIŞTA YAPACAĞIN ÜÇ ŞEY
```
① CLAUDE.md — BAŞTAN SONA. Özellikle §2 (petek motoru ve tek zayıf
   noktası), §7 (dosya sahipliği), §9 (komutlar), §11.
   Sonra MIMARI.md (motora dokunacaksan ŞART).
② Tahtaya AÇILIŞ mesajı — `session_id`ini
   `mcp__ccd_session_mgmt__get_session('self')` ile ÖLÇ, TAHMİN ETME.
③ Koşu durumunu ölç ve tahtaya YAZ — herkes aynı zeminden çalışsın.
```

## İŞ SIRASI
```
① TAVAN 200'ÜN SONUCU — ve bu EMRE'NİN AÇIK BİR SORUSU
   Emre "hepsi 200 olsun, BİR GÖRELİM" dedi. Koşu koştu ve ilk ölçüm:
      604 petek tavana bağlandı (%22,7) · KARA alanının %56,9'u KESİLDİ
   Kıyas: aynı mekanizma daha yumuşak ayarla (`4b`) %23 kesmişti ve
   o koşunun yayını DURDURULMUŞTU — ama %23 yüzünden değil:
      "⑤ öngörü Osmanlı 0/9 kesitte değişmeli — MAZERETİ YOK
        ölçüm  Osmanlı 7/9 DEĞİŞTİ · yabancı +%15"
      sebep: 3.397.649 km² sahipsizleşti, 118 YETİM YÜZ komşulara katıldı
   🔴 KESİM YÜZDESİ ÖLÇÜT DEĞİLDİR. Ölçüt: dokuz kesitte OSMANLI ALANI.
   ⇒ Koşu bitince `denetim/ONGORU-TAVAN-200.md`nin sekiz satırlık
     tablosunu DOLDUR. Kabul ölçütü o dosyada YAZILI ve damgalı.
   ⚠️ Bu bir DENEY: Emre "bir görelim" dedi, "böyle kalsın" demedi.

② ENKLAV KÖPRÜ ŞEKLİ (0038/H-0003)
   Üç kural da motorda DOĞRU çalışıyor (en yakın nokta bağlantısı · aynı
   kapsamda birleşme · farklı enklavlar birleşmez); ayrışan tek şey
   kenarın ŞEKLİ — Emre konkav/parabolik tarif etti, motor yamuk/düz
   çiziyor. Yer: `_b2_enklav_birlestir`.

③ KÖPRÜ RENGİ (0038/H-0004)
   Ölçülmüş kusur: köprü rengi bağlanan parçanın KATMANINI almalı
   (tâbi→tâbi, doğrudan→doğrudan) ama şu an HEP DOĞRUDAN yazılıyor.
   ② ile TEK sevk, çelişmiyorlar.

④ BÖLGE YASLANMASI — ölçüldü, çare ölçülmedi
   PETEK sınırı topoğrafyaya %5,4 yaslanıyor, BÖLGE sınırı %2,6 —
   yarısı kayboluyor. Sebep kodda: `bolgeler.js` üretimi peteklerden
   MİRAS alıyor, sonra `kapat(0,15°≈17 km)` ve `delikleri_doldur()`
   içbükey ayrıntıyı siliyor — ve nehir/vadi kıvrımı tam olarak odur.
   ⚠️ Çare ölçülmedi: yarıçapı küçültmek "kopuk ada" derdini geri
     getirebilir (1299 İnegöl vakası, kodun kendi gerekçesi).
   ⇒ ÖNCE simülasyon: üç yarıçapta (0,15° · 0,05° · 0,00°) İKİ sayıyı
     BİRLİKTE ölç — yaslanma oranı VE kopuk bölge parçası sayısı.
     İkincisi artıyorsa küçültme yanlıştır.

⑤ PUANLAMA KAPISI ETİKETİ — küçük ama bir borç
   `uret_petek.py` şunu basıyor: "🚪 PUANLAMA KAPISI: kesilen 743.793.802 km²"
   Sayı doğru, BİRİM YANLIŞ: sayaç her devlet × her DÖNEM birikiyor ⇒
   birim **km²·DÖNEM**. Bu etiket on yedi gün arayla İKİ KİŞİYİ yanılttı
   (öngörüyü yazan oturumu ve koordinatörü; ikincisi "50 kat sapma,
   yayın durabilir" diye alarm verdi).
   ⇒ `kesilen … km²·dönem` diye düzelt, yanına "ayrık alan DEĞİLDİR" notu.
```

## KABUL ÖLÇÜTÜ — `C13`, ÜÇ AYAK
```
① GEÇME · ② ATEŞLEME (her dal AYRI) · ③ GİRDİ (gerçek dosyadan okuma)
```
Ve motor işinde bir dördüncü: **ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR** ve dört
şey taşır — ne bekliyorum · mazereti var mı (yoksa "MAZERET YOK" diye
YAZ) · hangi çıktıdan hangi BİRİMDE okuyacağım · **hangi koşuda ve neye
karşı ölçülecek.**
🔴 Dördüncüsü bugün eklendi: sekiz kalemlik damgalı bir öngörünün DÖRDÜ
*ölçülemedi* çıktı ve hepsinin kökü tekti — öngörü kapının İLK koşusu
için yazılmıştı ama kapı bir haftadır açıktı; **kontrol grubu yoktu.**

## 🔴 YASAKLAR
```
① Koşu sürerken parmak izli üç dosyaya YAZMA. Ölç, sonra yaz.
② `js/app.js`e dokunma — ARAYÜZ oturumunun.
③ `git commit -m` yok; `-F <dosya> -- <yol>`, pathspec İKİSİNDE de.
④ heredoc · `py -c` · `sed` ile Türkçe/backtick metin — YASAK.
⑤ Bir sayıyı kodun YORUMUNDAN okuma — koşunun LOGUNDAN oku.
   Bugün beş sayı birden bayat çıktı (göl 89→705 · nehir 187→293 ·
   dağ 127→275 · bölge 61→77 · çöl tavanı "âtıl"→1,3 M km²), ve bir
   koordinatör bayat bir yoruma dayanıp Emre'ye yanlış bilgi verdi.
```

## RAPOR
`denetim/HUKUM-MOTOR-KUYRUK.json` · `CEVAP.json`a YAZMA.
Kalem kalem, biriktirmeden. Aksaklığı bekletmeden.
