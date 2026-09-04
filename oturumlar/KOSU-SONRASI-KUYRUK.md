# KOŞU SONRASI KUYRUK — 4 Eylül 2026

> Koşu 4 bitince **sırayla** uygulanacaklar. Hepsi bugün ölçüldü ve
> donmuş dosyalara dokunduğu için bekliyor.
> 🔴 Sıra kasıtlı: veri → renk → denetim → koşu → yayın.

## ⓪ İLK İŞ — KOŞU BİTER BİTMEZ, BAŞKA HİÇBİR ŞEYDEN ÖNCE

```bash
py arac/denetle.py            # altı değişmez
py arac/renk_olc.py           # 🔴 VERİ DEĞİŞTİYSE ŞART
py arac/durum_tablosu.py --yaz
py arac/surum_damgala.py
git push
```
Ve **Ö9 sınavı** (`PAKET GEOMETRİ 0904`nin betiği, scratchpad'de `peteksiz.js`):
```
PETEKLER  2731 → ~3800      peteksiz oran %28,2 → ~%0
beş dosyanın (afrika2 · kamerika · gamerika · okyanusya · sibirya2)
peteksiz oranı %100 → %0
```
🔴 Tutmazsa koşu **eksik bitmiş** demektir; yayın yapılmaz.

Ve `_B23_SAYAC` karnesini logdan çıkar → `PAKET GEOMETRİ 0904`e ilet
(kapamanın gerçekten ateşleyip ateşlemediği onun açık kalemi).

---

## ① KRONOLOJİ YAMALARI — 200 madde, 56 künye

```
denetim/KRONOLOJI-BATIAFRIKA-0904.json     22 künye · 92 madde
denetim/KRONOLOJI-GUNEYAMERIKA-0904.json   21 künye · 81 madde
denetim/KRONOLOJI-ORTAAMERIKA-0904.json    13 künye · 27 madde
                                           kaynak 200/200 · hata 0
```
Biçim: `{oturum, damga, kunyeler:[{id, eklenen:[{t,tur,b,kaynak}]}]}`
🔴 **`kaynak` MADDEYE İNER** — şema genişledi, `VERI-YAPISI.md`ye yazıldı.
🔴 `d` alanı **inmez**, yamada kalır (ileride `olaylar_ek*` pasının ham maddesi).
⚠️ Birleştirmeden sonra `denetle.py` — `Değişmez 2` senkronu etkilenebilir.

## ② RENK — beş renk + iki eşik

`denetim/ONERI-RENK-0904.json` → `renkler` dizisi. 🔴 **Artefakttan oku**,
mesaj alıntılarından değil (bir tur eski hex'ler dolaşımdaydı).
```
novgorod #84c9cf → #1e333e      le-hanedani #9ceded → #3b025a
norvec-kralligi #2490d2 → #0b1650   bosna #90f3f3 → #0a0381
ilhanli #c690ed → #433be3
DE_DENIZ 15 → 18 · DE_DENIZ_GENIS 20 → 51 · DL_DENIZ 4 SABİT
```
Sonra **gözle sınanacak** — bütün sayılar hesaptan, hiçbiri çizilmedi.

## ③ `renkler.py` — üç borç
```
· _opaklik_dogrula() `"fill-opacity": 0.44` DİZGİSİNİ arıyor; değerler
  artık app.js'te SIYASI_KIP sözlüğünde ⇒ uyarı SERT kipte doğru,
  YUMUŞAK kipte YANLIŞ
· _deniz_oku() YANLIŞ SORUYU SORUYOR: "beyan iki yerde tutarlı mı" diye
  soruyor, "beyan EKRANDA GÖRÜNÜYOR MU" diye sormuyor. SU_RENGI'nin
  üstünde Esri rasteri var; ekrandaki deniz ~#7cb4d4, beyan #c4dcea, ΔE ~20
· deniz bloğu ÇIKIŞ KODUNU ETKİLEMİYOR (`renk_olc.py:547`) ⇒ yayın kapısı
  görmüyor. `2s`nin tavan deseni uygulanacak — AMA düzeltmelerden SONRA,
  tavan bugünkü sayıya konup kademeli indirilecek
· farukiler ↔ gond-kralliklari · ΔE 10.2 · 294 km · 231 yıl → tek renk ihlali
```

## ④ MOTOR — `PAKET GEOMETRİ 0904`ün reçeteleri
`denetim/BULGU-GEOMETRI-0904.md` — 14 reçete, her biri **kendi testiyle**.
🔴 Uygulayan oturum **testi geçirmeden kapatmasın.**
```
R1  don_kose_kur TAM FLOAT EŞİTLİĞİ kullanıyor (:3639) ⇒ dikişte köşeler
    birebir değilse hiçbiri donmuyor, iki taraf 2×tol içeri çekiliyor
    ⇒ 95 parça · 15.526 km² dikiş boşluğu (Riga · Bohemya, Emre'nin görselleri)
R2  kapama koruma şartı (:1319) YANLIŞ EKSENİ ölçüyor — "içinde başka
    devletin YERLEŞİMİ varsa" diyor, korunması gereken PETEK
A2  çift koşu kilidi .bat'tan MODÜLE taşınsın
    TEST: `py arac/uret_petek.py` iki kez → İKİNCİSİ REDDEDİLMELİ
R13 dikiş nöbetçisi ÇİFT değil PARÇA saysın (≤8 km + 2+ gövde)
R14 KIYI KENARI ailesi (2.159 parça · 85.765 km², dikişin 5,5 katı) —
    🔴 İLK SORU: 8 km z4-5'te kaç PİKSEL? Görünmüyorsa kusur değil artefakt
```

## ⑤ VERİ — koşu sonrası kalemler
```
· asanti  kaynak → gana    · dahomey kaynak → benin   (§4 kapsayıcı madde)
· sokoto 1809 maddesi İKİ OLAYI tek maddede birleştirmiş (başkent + halifelik);
  TDV ikisini ayırıyor, halifeliği 1812'ye koyuyor
· sokoto hukumdar 1817-01-01 ↔ yeni kaynaklı 1817-04-20 — mükerrer, birleştir
· basuto 1868-03-12 İKİ OLAYA bağlı (Moshoeshoe'nin ölümü / İngiliz himayesi)
· torva 1683 ↔ Dombo 1684-95 · dahomey 1893 ↔ künye 1894
· venezuela 1829 (ayrılma) ↔ künye 1830-01-13 (resmî kuruluş) — İKİ AYRI OLAY
· Çehrin: lehistan 1281→1678 tek blok, Kazak Hetmanlığı'nı (1648-78) yutuyor
· Suceava ↔ Suçava 4,15 km — OWTRAD'ın kendi `hal:"supheli"` damgası
· pskov (Vasili III / III. İvan) · lakota (`t:` bir katliam günü)
```

## ⑥ ARAYÜZ
```
· serbest-hale · serbest-cekirdek — MapLibre ifade hatası, HİÇ yüklenmiyor
  ⇒ "serbest" topraklar haritada hiç çizilmiyor (4 konsol hatası)
· KRONOLOJI_* 18 küresel değişken DEVLETLER'de karşılıksız
· kmDanZoom 256 px sabiti kullanıyor, 512 olmalı — TAM 2× yanlış
· OWTRAD tarayıcı doğrulaması (node ile sınandı, tarayıcıda DEĞİL)
· tur sözlük kayması: toprak-kayip 105 · kayip 7 · toprak 2
```

## ⑦ EMRE'NİN KARARINI BEKLEYENLER
```
· pembe gövde denizle aynı açıklıkta — rahatsız eder mi? (51 mi 55 mi)
· dağ boşlukları 16-20 km (KAPSAMA ailesi, 19 parça · 127.232 km²) kalsın mı?
  ⚠️ Emre'nin kendi hükmü "devasa boşluklar olacaksa olsun" bunu KAPSIYOR olabilir
· kendi denizimiz Esri'nin üstüne çıksın mı? (H-0004'ün ÖN KOŞULU)
· on oturum emekli edilsin mi
```
