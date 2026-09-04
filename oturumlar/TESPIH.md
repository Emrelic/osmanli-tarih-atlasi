# TESPİH — 4 Eylül 2026 gecesi

> Sıra `FAYDA ÷ EMEK`e göre. Kalem kapandıkça işaretlenir; ertesi gün
> **buradan** devam edilir. 20 dakikalık uyandırıcı (`cron fb6be0f1`)
> her turda bu dosyayı okur.

## 🔒 GECENİN KISITI
```
KOŞU 4 sürüyor · 00:47 başladı · tahminî bitiş ~07:45
DONMUŞ : data/*  ·  arac/uret_petek.py · arac/renkler.py · arac/girdi.py
SERBEST: js/app.js · css/style.css · index.html · denetim/* · oturumlar/*
```
🔴 Donmuş bir dosyaya yazmak koşuyu öldürür ya da çıktıyı yayınlanamaz kılar.

---

## SIRA

| # | iş | keskinlik | hedef | niçin bu sırada |
|---|---|---|---|---|
| 1 | ✅ Siyasî katman coğrafyayı örtüyor → **KİP SEÇİMİ** (`932d4cf`) | %100 | %95 | 🔴 Emre'nin **canlı şikâyeti** · `js/app.js` SERBEST · kökü ölçüldü (üç dolgu da `fill-opacity:1`) |
| 2 | ✅ 1923-10-29'da yalnız Türkiye görünüyor (`00975a8`) | %100 | %90 | 🔴 Emre'nin **canlı şikâyeti** · önce ÖLÇÜLECEK: veri mi eksik, çizim mi |
| 3 | ✅ Katman seçici — canlı sayfada doğrulandı (37 katman, sayaç 4) | %100 | %100 | taşındı ve yazıldı, sınavı CPU darlığından yarım kaldı |
| 4 | 🔵 OWTRAD toplamaya girmiyor | %0 | %90 | 154 düğüm + 174 kenar yüklü ama çizilmiyor · `js/app.js` SERBEST |
| 5 | ⚪ Kronoloji dolumu (205 künye) | %0 | %80 | ölçüt + alet HAZIR · **oturum gerekiyor**, Emre uykuda |
| 6 | ⚪ Koşu 4 sonrası: denetle → tablo → damga → yayın | — | — | ~07:45'ten sonra |

```
✅ bitti   ⏳ sürüyor   🔵 sırada   ⚪ bekletildi
```

### Niçin bu sıra
```
① ve ②  Emre'nin KENDİ sözü, ve ikisi de donmuş olmayan dosyalarda
        ⇒ gece boyunca yapılabilir
③        neredeyse bitti, kapatmak ucuz
④        elimizdeki verinin %56'sı görünmez — küçük iş, büyük görünür etki
⑤        oturum açmayı Emre yapar; şartname hazırlanır, dağıtım sabaha
⑥        koşu bitmeden başlayamaz
```

---

## BUGÜN KAPANANLAR
```
✅ katman seçici yazıldı (4 katman, çoklu seçim) — r5585
✅ katman seçici HARİTANIN ÜZERİNDEN `#menu-butonlar` içine taşındı
✅ emeklilik.py acilis.py'ye BAĞLANDI (adım 1f) — 12 sn, bütçe 30
✅ kronoloji ÖLÇÜTÜ yazıldı — oturumlar/KRONOLOJI-OLCUT-0904.md
✅ kronoloji KAPSAM ALETİ — denetim/ARAC-KRONOLOJI-KAPSAM-0904.py
✅ Torun + Elbing indi (3803 → 3805)
✅ koşu 4 yeniden başlatıldı + bekçisi (60 dk'da bir canlılık)
```

## AÇIK BULGULAR — iş değil, KAYIT
```
🔴 serbest-hale · serbest-cekirdek  MapLibre ifade hatası, HİÇ yüklenmiyor
   ⇒ "serbest" topraklar bugün haritada hiç çizilmiyor
🔴 renkler.py OPAKLIK 0.44/0.60/0.68  ·  app.js gerçek 1/1/1
   ⇒ bütün ΔE ölçümleri var olmayan bir çizim kipine göre
   ⚠️ renkler.py DONMUŞ — koşudan sonra
🔴 toprak-kayip 105 · kayip 7 · toprak 2 — aynı cinsin üç yazımı
🔴 `ic-savas` diye bir `tur` YOK
🔴 koridor ağı 4 bileşen (86+23+13+1), tek parça değil
🟡 KRONOLOJI_* eşlenemedi: 18 küresel değişken DEVLETLER'de karşılıksız
   (cin · hindistan · japonya · misir · ozbek · anadolu · arabistan …)
🟡 küresel görünüm: MapLibre 4.7.1, `setProjection` YOK — v5 gerekiyor
```

---

## 🔴 AÇIK BORÇ — kaydedildi, gizlenmedi

```
renkler.py:_opaklik_dogrula()   app.js'te `"fill-opacity": 0.44` DİZGİSİNİ
                                arar. Yumuşak değerler artık SIYASI_KIP
                                sözlüğünde duruyor, o biçimde DEĞİL.
                                ⇒ uyarı ötmeye DEVAM eder, ve uyarı
                                  SERT kipte DOĞRU · YUMUŞAK kipte YANLIŞ
                                🔒 renkler.py DONMUŞ — koşu bitince düzeltilir
```
📌 Bu, projenin *"iki otorite doğar ve ayrışır"* dersinin dördüncü vakası:
denetim yanlış değil, **evreni** eskidi — artık tek bir opaklık yok, iki
kip var ve denetim tek kipi biliyor.
