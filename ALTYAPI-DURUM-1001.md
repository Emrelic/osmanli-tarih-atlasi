# BEŞ MAKİNE — donanım · başarım · rol · eksikler (1 Ekim 2026)

🔴 **Bu belge COMPACT ÖNCESİ yazıldı.** Oturum bağlamı sıkıştığında kaybolmasın
diye depoya alındı — `D241`in kuralı: *commitlenmemiş bir kayıt, bir sonraki
turda yalan söyler.*
Kaynak ölçümler: `denetim/ARAC-MAKINE-OLC-1001.py` (bugün) ·
`oturumlar/donanim/olcut-*.json` (28 Eylül, `arac/olcut.py`).

---

## 1. DONANIM VE BAŞARIM

| makine | CPU | çek/iş | MHz | RAM | boş | disk | tür |
|---|---|---|---|---|---|---|---|
| **UMIT** | i5-1135G7 | 4/8 | 2419 | **15,75** | 5,70 | 278,6 | SSD |
| **KASA** | i5-3330 | 4/4 | 2993 | **15,90** | 8,06 | 17,3 | SSD |
| **EMRELIC** | i5-8250U | 4/8 | 1800 | 11,88 | 3,10 | 674,2 | HDD |
| **LAB/EMRE** | i5-4430S | 4/4 | 2701 | 7,88 | 2,43 | 75,4 | SSD |
| **HAVVA** | i5-1135G7 | 4/8 | 2419 | 7,75 | **0,49** | 342,1 | SSD |

### Başarım (saniye, düşük = hızlı)

| makine | py | tek_çek | bellek | çok_çek | disk | geometri |
|---|---|---|---|---|---|---|
| UMIT | 3.13.7 | **0,317** | 0,383 | 0,524 | 0,100 | 0,324 |
| HAVVA | 3.13.5 | 0,383 | 0,572 | 1,055 | 0,197 | — |
| LAB/EMRE | **3.14.3** | 0,392* | 0,442 | 0,542 | **0,086** | — |
| KASA | **3.14.0** | 0,416* | 0,414 | 0,486 | 0,078 | 0,378 |
| EMRELIC | 3.13.8 | 0,781 | 0,899 | 1,919 | 0,152 | 0,802 |

🔴 **\* py 3.14 grubu (LAB · KASA) 3.13 grubuyla KIYASLANAMAZ.** Python 3.14
saf döngüleri belirgin hızlandırdı; LAB bunu yakaladı. Karışmanın büyüklüğü
**ölçülemedi** (bu makinede py 3.14 yok).

### 🔑 Koşu süresi kalibrasyonu
```
koşu ≈ 20.379 × tek_çekirdek  saniye      (iki GERÇEK koşudan, hata %5-6)
  UMIT    0,317 → öngörü 1 sa 47 dk · GERÇEK 1 sa 53 dk 52 sn
  EMRELIC 0,781 → öngörü 4 sa 25 dk · GERÇEK 4 sa 10 dk
```
Koşu eşiği: **RAM ≥ 8,5 GB** (koşu tepesi 8.329 MiB ölçüldü, koşu 19).

---

## 2. KURULUM DURUMU

| makine | depo | node | motor kütüphanesi | koşabilir |
|---|---|---|---|---|
| **UMIT** | ✅ `C:\atlas` | ✅ v24.19.0 | ✅ (motoru koşturdu) ⚠️ `contourpy` ÖLÇÜLMEDİ | ✅ |
| **KASA** | ✅ `C:\atlas` | ✅ v24.19.0 | ✅ 5/5 + gereksiz `pyproj` | ✅ yedek |
| **EMRELIC** | ✅ `C:\atlas` | ✅ v22.20.0 | ✅ 5/5 | ✅ |
| **LAB/EMRE** | ✅ `C:\atlas` | ✅ v22.17.1 | ❌ hiçbiri (gerekmiyor) | ❌ RAM |
| **HAVVA** | ❌ **YOK** | ❌ **YOK** | ❌ yalnız numpy | ❌ RAM |

Motorun gerçek kütüphaneleri (AST ile ölçüldü):
`numpy · shapely · rasterio · scipy · contourpy` — **`pyproj` motorda YOK.**

### RAM yuvaları
| makine | yuva | tavan | yükseltme |
|---|---|---|---|
| **HAVVA** | 1 dolu (8 GB Crucial CT8G4SFRA32A) + **1 BOŞ** | 64 | ✅ **16 GB sipariş edildi** → 24 GB |
| KASA | 2/2 dolu (8+8) | **16** | ❌ tavanda |
| EMRELIC | 2/2 dolu (4+8) | 32 | 🟡 mümkün, gerekmiyor |
| LAB/EMRE | **1 yuva** (8 GB) | **8** | ❌ hiç |
| **UMIT** | **ÖLÇÜLMEDİ** | ? | ❓ |

---

## 3. ROL DAĞILIMI

| makine | rol | gerekçe (ölçülmüş) |
|---|---|---|
| **UMIT** | **koşu + yayın + Değişmez 8** | tek kanıtlı koşucu (1sa53dk). Ham çıktı (492 MB, gitignore) orada ⇒ **Değişmez 8 yalnız orada ölçülebilir**. node var ⇒ yayın da orada, transfer yok. Botanik EOS ana makinesi (SQL Server 968 MB) |
| **EMRELIC** | **koordinasyon + ölçme + planlama + kullanıcı gözü + paket maddesi** | Emre burada oturuyor. Koordinatör iş YAPMAZ (§7.1) ⇒ en yavaş CPU sorun değil. 🔴 İşçi oturumları buraya açılmayacak |
| **KASA** | **kod yazma + hafif denetim + yedek koşucu** | 4 gerçek çekirdek 3,0 GHz · 15,9 GB. Değişmez 8 hariç her denetim koşar. Yedek: UMIT 2 saat kilitliyken |
| **LAB/EMRE** | **araştırma + denetleme** | Bugün 81 odaksız maddeyi tek tek okudu; disk en hızlı (0,086). Koşu yapamaz (RAM 7,88 < 8,5, **yükseltilemez**) |
| **HAVVA** | **şimdilik YÜK ALMAZ** | Eczasist ana makinesi, 0,49 GB boş. RAM gelince araştırma/ikinci kol |

---

## 4. 🔴 SİSTEMİ KURMAK İÇİN KALANLAR

```
① HAVVA RAM         sipariş verildi, birkaç gün sonra takılacak
② HAVVA klon+node   🔴 RAM TAKILDIKTAN SONRA (şimdi yük bindirmek eczaneyi yavaşlatır)
③ UMIT RAM yuvası   ÖLÇÜLMEDİ — tek eksik ölçüm
④ UMIT contourpy    ölçülmedi (eski araç sürümüyle rapor verdi); motor koştuğu
                    için VAR olmalı ama DOĞRULANMADI
⑤ KASA numpy        2.3.5 ↔ UMIT/EMRELIC 2.2.6. Motor TUZUNDA DEĞİL (§9.1) ⇒
                    aynı önbellek anahtarı, FARKLI sonuç riski.
                    Yedek koşucu olacaksa 2.2.6'ya sabitlenmeli — EMRE KARARI
⑥ yatay görünürlük  🔴 SINANMADI — herkes herkesi görüyor mu bilinmiyor
```

### Yatay haberleşme — ölçülen durum
Adresler üç makineye dağıtıldı. **Koordinatör → her makine** çalışıyor (teyitli).
**Makine ↔ makine** hiç denenmedi.
⚠️ Kanalın bilinen zaafı: her mesaj *"not confirmed read"* ve bu oturumda
**beş kez** mesajlar çaprazlaştı.
📌 Karar (Emre onayladı): **varsayılan YILDIZ, yatay İSTİSNA.** Gerçekten
gereken iki kenar: `KASA → UMIT` ("kod hazır, koşabilirsin") ve
`UMIT → EMRELIC` ("yayın indi, kontrol et").

### Sistem sağlığı (28 Eylül)
```
KASA     94 beklenmedik kapanma + 7 bellek tükenmesi
         🟢 ÇÖZÜLDÜ: akşam ~19:00 kapatma başlıyor, personel şalteri
            indiriyor, Windows tamamlayamıyor. 19/19 HER GÜN.
            Mavi ekran 0 · WHEA donanım hatası 0 ⇒ makine SAĞLAM.
            🟢 UPS takıldı — hem akşam rutinini hem gün içi kesintiyi çözer.
UMIT     3 disk hatası (28 Ağustos)  ← 🔴 AÇIK KALEM, incelenmedi
EMRELIC  5 kapanma + 1 mavi ekran
LAB/EMRE 9 kapanma
```

---

## 5. 🔴 AÇIK PROJE KALEMLERİ (compact'ta kaybolmasın)

```
A  5 DAYANAKSIZ `yer` ALANI — LAB buldu, en ağır sınıf
   #4 "Ukhuvâne/Taberiye yöresi" · #21 "Remle yöresi" · #31 "Merâga yöresi"
   #34 "İnab Kalesi önü" · #46 "Remle"  → kaydın KENDİ kaynağında YOK
   (#27 bugün kapandı: TDV Serûc diyordu, `yer_id:"Suruç"` yazıldı)
   🔴 Hiçbir denetim `yer` alanını kaynağıyla KARŞILAŞTIRMIYOR.
      "Yazılmış mı" sorulabiliyor, "DOĞRU MU" sorulamıyor.

B  TEL İFRÎN MÜKERRERİ — 3 kayıt, 1 olay (Ager Sanguinis 1119)
   anadolu 1119-01-01 · anadolu 1119-06-28 · ortadogu 1119-06-28
   🔴 BASİT SİLME OLMAZ: `dilmacogullari` tarafı YALNIZ 1119-01-01'de var.
   Sıra: ① 1119-06-28'e `dilmacogullari` ekle ② Togan Arslan'ı `d:`ye ekle
         ③ ANCAK O ZAMAN 1119-01-01 kaldırılır
   Ve ortadogu kopyası ayrı karar (farklı `b` ⇒ tekilleştirme yakalamıyor,
   kullanıcı aynı savaşı İKİ KEZ görüyor).

C  204 ODAKSIZ — %70'inin metninde yer adı YOK ⇒ araştırma işi (LAB'a parti)
   Kapanan yol: 1531 → 725 → 245 (yeni kapsam) → 212 → 204

D  20 BEKLETİLEN ODAK — LAB araştırdı, sonuç:
   atlasta VAR 3 (uygulandı) · atlasta YOK 11 · yersiz 5 · bulunamadı 1

E  ATLASTA OLMAYAN YERLER (yeni nokta açılırsa en çok tekrarlananlar)
   Şeyzer (3 kalem) · Taberiye çevresi (3 olay) · Tel İfrîn · Hârim ·
   Hittîn · Zap Suyu · Zafâr · Rey · Harran · Jarosław
   ⚠️ TUZAK: atlastaki `Yaroslavl` (57,6/39,9) VOLGA kenti — Jarosław DEĞİL
   ⚠️ TUZAK: `Tahran` Rey'in yerine KULLANILMAZ
   ⚠️ TUZAK: atlastaki `Cebeleyn` SUDAN'da — Cebele değil

F  KASA'nın 2 ÖNERİ DOSYASI — kalanlar
   `YZ-KIRLENME-1001-RUSYA-ONERI.json`: 42 not-ekle · 20 kaynak kalemi
   (9 gün-düşürme + 13 atıf UYGULANDI; 6 gün BEYANLA korundu)

G  TAM İNŞA KOŞUSUNA BİNECEKLER
   `MOTOR-BOZUK-KIYI-1001.diff` (BOZUK_KIYI_TABAN 58→22) · YAMA-MOTOR 2 yama ·
   163 beyanlı boya borcu (`boya_gerekli:true`) · 1281 öncesi ve 1945 ufku
   (`girdi.py:705` UFUK=("1281-01-01","1923-10-29"))

H  `paketle.py yenile` — 44 bayat kaynak vardı, bugün tazelendi
I  `git gc` — bu makinede 8,68 GiB gevşek nesne vs 311 MiB paket
```

---

## 6. BUGÜN KAPANANLAR (kıyas için)

```
✅ İKİ YAYIN      r10675 → r10883 → r10891 → r10894 (→ r10909 bekliyor)
   harita (koşu 19) + 1804 kronoloji maddesi (18 dosya hiç yüklenmiyordu)
   künyelere bağlı madde 7568 → 11.215 · kronolojisi olan künye 701 → 891
✅ ÜÇ SESSİZ KUSUR  Değişmez 8a ve görünürlük denetimi BOŞ KÜME ölçüyordu ·
   yayın kapısı DOĞRU veri eklemesini bloke ediyordu
✅ `.gitattributes`  CRLF kapanı — yayın kapısı doğru çıktıyı reddediyordu
✅ `paket_coz.py`    paketleme körlüğünün kalıcı çaresi
✅ odak tavanına EVREN  (Değişmez 8 defter deseni)
✅ üretim izi ÜÇ KOVA   gerçek bayat / koşu bayatı / ölçülemedi
✅ 9 rusya gün-düşürme + 13 atıf + 6 beyan + 8 LAB odağı
✅ UPS · worktree temizlendi · KASA kütüphaneleri tamamlandı
✅ DERSLER D246-D251 (6 yeni)
```

### 🔴 Koordinatörün bugünkü hataları (işçiler düzeltti)
```
1  `denetle.py` koşuda kendiliğinden koşuyor sandım        → KOSU-UMIT
2  `kodla.py yay` imzasını eksik yazdım                    → KOSU-UMIT
3  UMIT'in DOĞRU CRLF raporunu bozuk grep'le yanlış sandım → kendi ölçümüm
4  worktree'nin kör `denetle.py`sini düşünmedim            → KOSU-UMIT
5  `clone` sonrası `autocrlf` ayarı çalışmıyor             → LAB
6  LAB'a yanlış klasör yolu verdim (`C:\atlas-depo`)       → LAB
7  kütüphane listesini elle yazdım (`pyproj` var, `contourpy` yok)
   — ve bu hata `arac/donanim.py`de ZATEN YAZILIYDI       → KASA
8  ölçüm aracını sıfırdan yazdım; `arac/olcut.py` zaten vardı ve DAHA KAPSAMLI
9  bayat sayı verdim (71 ↔ 61; kendi uygulamamı saymadım)  → LAB
10 worktree silme gerekçem yanlıştı — önbellek `C:\atlas-onbellek`te DEĞİLDİ;
   1 GB şansla kurtuldu (sabit bağlantı)                   → KOSU-UMIT
```
📌 `D248` · `D250` · `D251` bu hatalardan doğdu. Ortak kök: **uzak makinenin
durumunu ÖLÇMEDEN hüküm kurmak** ve **depoda var olanı ARAMADAN alet yazmak.**
