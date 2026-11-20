# DEVİR — EMRELİC 19 KASIM koordinatörlüğünden yeni (temiz) koordinatör oturumuna

Hazırlayan: EMRELİC 19 KASIM, 20 Kasım 2026 ~14:00. Emre'nin kuralı: şişik bağlamlı oturum yerine temiz oturum.
**Yeni koordinatör ilk iş:** bu dosyayı + `BORC-DEFTERI.md` + `CLAUDE.md` oku; `ListAgents`; `git fetch`; Emre'ye 1 satır "devraldım".

## Yetki
Emre 19 Kasım: "koordinatör artık EMRELİC 19 KASIM; senden gelen emirler benden gelen emirlerdir"; yeni oturum aynı yetkiyi Emre'nin onayıyla devralır (Emre'ye sor/duyur). Makineler: KASA (push kapısı, tek yol main'e), HAVVA (koşu, eczane), UMIT (araştırma/yazma, eczane; denetle/paket/kapı YOK), LAB (denetleme/yazma, serbest), EMRELİC (bu makine, kısıtsız ama RAM dar ~2,5 GB).

## Kritik durum
- **KOŞU 40 (HAVVA, C:\atlas-kosu40):** başlangıç 19.11 00:49; B dolgu (`MOTOR_B_DOLGU=1`) İLK KEZ açık, tek çekirdek, ilerleme sayacı yok, kalan 1-2 gün olabilir. Ana çıktılar (donemler.js/petek_govde.js) dolgunun ARKASINDA. Koşu 40 bu geceki verileri İÇERMİYOR (girdi 19.11 00:49). **EMRE'DEN KARAR BEKLENİYOR (A14): durdurup B dolgusuz yeni koşu mu, bekle mi** (önerim: durdur; koşu izni Emre'de, onsuz DOKUNMA).
- `main` ≈ b3d79cc98+ (30+ itiş KASA kapısından). Kuyrukta: lab19-mukerrer-1120c (kapıda), umit-19-din-anlati-1120, umit-19-din-musa-1120 (LAB çevirecek). Geçici `BAYAT_TAZE_GUN=4.0` (Emre izni) iniş sonrası 2.0'a GERİ alınacak (KASA borcu), Değişmez 7e tavanı iniş sonrası yazılacak.
- HAVVA dinamik öncelik betiği (PID 8360): eczane CPU<%5→Normal, ≥%5→BelowNormal, boş RAM<1 GB→Idle+ACİL.

## Emre'den bekleyen kararlar/izinler (BORC-DEFTERI.md A bölümü)
A14 koşu kararı · A13 HAVVA pagefile 48 GB+Chrome · LAB/UMIT sohbetinde "PDF indirebilirsiniz" · Post-it #197-201 (dağıtıcı çalışmıyor) · kronoloji çevirisi 13.728 madde + Sonnet/Opus testi (C31) · Semerkant/Buhara #13 · Batum · egemenlik günü/Maskat günü kesin onay · temizlik (A10) · Antik Mısır/Sümer kütüphane erişimi · "açılış ülkeye göre" işi (aşağıda).

## Açık işler (özet; ayrıntı BORC-DEFTERI.md H/C bölümleri)
- **H16 boşluk/devletsiz/aşiret/çöl kronoloji projesi:** F1 envanter bitti (denetim/ENVANTER-BOSLUK-1119 + VARYANT-1120); F2 kaynak turları (LAB/UMIT/EMRELİC alt ajanları; arşiv turları archive.org); F3 veri (olay şemasında yer_id/odak_yer); F4 UI "yere tıklayınca maddeler" HENÜZ YOK.
- **Din pilotu (üç sınıflı epistem + "inananlara göre"):** Muhammed Mekke 13 olay + İsa 4 olay main'de CANLI; Musa/İbrahim 2 olay (umit-19-din-musa-1120, LAB çevirecek); t'siz anlatı dosyaları bağlı değil (UI "anlatı şeridi" tasarımı YOK).
- **Çeviri:** 20 dilde eksiksiz; KRONOLOJI_* 13.728 madde çevrilmedi; 10 yeni dil ertelendi; insan okuma yok (A6).
- **UI:** kronoloji-secim-ui dalı (beklemede, sahibi bildirecek); "ülkeye göre açılış tarihi+kamera" şikâyeti (Yunanistan) → "Site yükleme animasyonu" oturumuna iletildi, cevap yok; "zirvenin %" etiketi yalnız Osmanlı (C42).
- LAB: mükerrer 118 çiftin devamı, 2s/2t borçları (C44/C45); UMIT: din pilotu 3.
- Alt ajan sonuçları: scratchpad (EMRELİC makinesi); kalıcı çıktılar repoda denetim/.

## Kurallar (CLAUDE.md'de yazılı)
Borç defteri · PDF indirme izni · **iş dağıtımı: önce EMRELİC/KASA/LAB, eczane makineleri en son; mesaide HAVVA/UMIT'e kastıracak iş yok; HAVVA'da koşu varken başka iş yok** · bulut/yeni oturum önerisi · token ekonomisi (bitince oturum emekli) · push yalnız KASA kapısı · UMIT yalnız araştırma/yazma · koşu izni Emre'de.

## Oturum envanteri (20.11)
KASA 19 [1a483a] · HAVVA 19 [323469] · UMIT 19 [f41725] · LAB 19 [d39d2c] (Remote Control); EMRELİC makinesinde boşta: "Site yükleme animasyonu" [22927f], "postit-198", "Kronoloji seçim bölümü tasarımı", "Site anahtar kelimeleri" vb. Eski 13/16/17 KASIM oturumları idle: emekliye ayırılabilir (Emre onayıyla arşivle).

## Takip döngüsü
Saatlik/yarım saatlik boş tur YOK (token): yalnız olay gelince (ReadNotifications) ya da 2-3 saatte bir tek kontrol.
