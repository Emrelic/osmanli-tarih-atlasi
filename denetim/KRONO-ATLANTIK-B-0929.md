# KRONO-ATLANTIK-B-0929 — İngiltere · Hollanda kronolojisi: denetim ve doldurma

29 Eylül 2026 · şartname `oturumlar/KRONO-ATLANTIK-B-0929.md` · Dalga 2

## ① ÖLÇTÜM

### Envanter (başlangıç)
| Dosya | Madde | Yüzyıl | Kaynak | `gun:` alanı |
|---|---|---|---|---|
| `kronoloji_ingiltere.js` | 270 | 13:11 · 14:22 · 15:21 · 16:33 · 17:43 · 18:40 · 19:67 · 20:33 | **246 `el-kitabi`** · 24 TDV `ingiltere` | 1/270 |
| `kronoloji_hollanda.js` | 42 | 16:6 · **17:28** · 18:3 · 19:4 · 20:1 | TDV `hollanda`, akademik; **8 "bulunamadı"** | 0/42 |

Zorunlu on alanda eksik yok (ikisi de). Hollanda'da 1714-1794 arası tek madde (1713) ve 1815-1914 arası dört madde vardı. En zayıf dönem buydu.

### Senkron defteri — B kolu (`denetim/ARAC-KRONO-ATLANTIK-B-0929-DEFTER.py`)
A kolu ile M-5419 bölüşümü kabul edildi (ORTAK 53 kayıt A'da).
```
B kaydı 685 · net aday 456   (yeni nokta doğuşu 255 · gerçek devir 201)
kova: kapsam_disi 316 · yil_temsili 88 · acik 52
bölge: Afrika/Ortadoğu 144 · K.Amerika 114 · Avustralya/Okyanusya 73 · G.Afrika 71
       Karayip 19 · GD Asya 18 · G.Asya 14 · G.Amerika 2 · AVRUPA 1
```
🔴 **Metropolde (Britanya adaları + Alçak Ülkeler) net aday: 1** (Tanca 1684, İngiliz tacının Fas'taki mülkü). Geri kalan 455 aday sömürge ya da savaş kırılmasıdır:
- **Sömürge (~436):** Kuzey Amerika kolonileri, Hindistan, Güney Afrika, Doğu Hint Adaları, Batı Afrika, Avustralya. Metropol kronolojisine AİT DEĞİL, yazılmadı. Dalga 3 / PAKETSİZ.
- **Osmanlı→ingiltere 1915-1918 (19):** Birinci Dünya Savaşı cephesi. Maddeleri `kronoloji_cok_1dunya_B.js`te zaten var (Kûtülamâre, Bağdat, Kudüs, Hayfa, Şam). Bunlardan **4'ü veri hatası**: Erbil, Kifri, Tuz Hurmatu ve Halepçe, Bağdat'ın günü olan 1917-03-11'de İngiliz'e geçmiş görünüyor → `-YERLESIM-ONERI.md` Y-1.
- ⇒ B kolunun `net_olay_adayi` sütunu metropol kronolojisi için iş yükü DEĞİLDİR. Şartnamenin "yükün çoğu sömürge" öngörüsü doğrulandı, üstelik tahminden daha keskin: %99,8.

### Denetim (Dalga 2 ①)
Ayrıntı: `denetim/KRONO-ATLANTIK-B-0929-DUZELTME.md`
- **Tarih hatası / sahte kesinlik: 8.** Dafydd'in idamı Haziran değil 3 Ekim 1283. Oliver Twist'in günü hiçbir olaya karşılık gelmiyordu. Hastings'in günü 1773 değil 20 Ekim 1774. Machynlleth'in 21 Mart'ı kaynaksızdı. Amsterdam Borsası ile Mare Liberum'un günleri kaynaksızdı. Levant Company'nin günü TDV'de yok. Globe tiyatrosu (beyan edildi).
- **Takvim karışıklığı:** İngiltere dosyası 1582-1752 arasında Jülyen ve Gregoryen'i karışık kullanıyordu. Armada, Blenheim ve Karlofça Gregoryen, 46 gün Jülyen, 3 madde ay kodlu. **52 maddeye takvim notu** yazıldı; `t:` ÇEVRİLMEDİ.
- **Yapısal:** 32 maddede `yer_id` anahtarı iki kez yazılmıştı → teklendi (etkin değer değişmedi).
- **Yanlış olgu:** "Piast hattı" (İskoçya maddesinde Leh hanedanı) · Utopia'nın basım yeri (Londra değil Louvain).
- **`dunya` çelişkisi:** 1688 Şanlı İhtilâl İngiltere dosyasında 4, Hollanda dosyasında 5 → 4.
- **Kamera:** 13 madde `kapsam_genis` ile Osmanlı sınırına uçuyordu → 0.
- **Mükerrer:** 1739 Wesley iki madde (hüküm bekliyor, B-1).
- **Şartnamenin kendi ölçümü:** "Armada ve Şanlı İhtilâl İngiltere'de değil" doğru değil. İkisi de İngiltere dosyasında var (B-2).

### Doldurma (Dalga 2 ②)
| Dosya | Madde | İçerik |
|---|---|---|
| `data/kronoloji_cok_hollanda.js` → `window.KRONOLOJI_COK_HOLLANDA` | **22** | 1566 Geuzen · 1572 Den Briel · 1576 Gent · 1584 Willem'in öldürülmesi · 1586 Leicester · 1618 mezhep krizi · 1619 Oldenbarnevelt · 1651 Büyük Meclis · 1672 De Witt · **1680 ahidnâme** · **1699 Karlofça (Colyer)** · 1787 Prusya · 1795 Lahey · **1798 ilişkilerin kesilmesi** · **1804 ilişkilerin yeniden kurulması** · 1806 Holland Krallığı · 1810 ilhak · 1813 Scheveningen · **1825 Zuylen elçiliği** · 1848 anayasa · 1863 kölelik · **1872 Cidde konsolosluğu** |
| `data/kronoloji_cok_ingiltere.js` → `window.KRONOLOJI_COK_INGILTERE` | **7** | **1601 ahidnâme (Flandır gemileri)** · **1718 Pasarofça arabuluculuğu** · **1801 Ebûkīr çıkarması** · **1825 Levant Company'nin lağvı** · **1838 Balta Limanı** (İngiliz gözünden) · **1854-03-28 Kırım'a giriş** · **1906 Akabe ültimatomu** |

Kalın olanlar Osmanlı eksenindeki maddelerdir (şartname ④). Hepsinde gerçek künye kimliği yazılı: `devlet:` ya da `devletler:[…]`. Künyesi olmayan iki öneri kimliği var: `habsburg-hollandasi` (3 madde) ve `batav-cumhuriyeti` (5 madde). Mükerrer taraması `denetim/ARAC-KRONO-ATLANTIK-B-0929-MUKERRER.py` ile 36 aday üzerinde yapıldı. Veride zaten bulunanlar yazılmadı: Kal'a-i Sultâniyye, St. Petersburg Protokolü, Birinci Dünya Savaşı cephesi, 1920 İstanbul işgali, Mudanya, Tanca 1684.

### Sınavlar
```
node --check        4 dosya ✓
odak_olc.py         kırık atıf (yeni) 0 · dört dosyamda BEYANLI 13→0 · yeni dosyalarda ODAKSIZ 0
                    (kalan tek kırık: kronoloji_dogu_afrika 'Ogaden' — benim değil)
denetle.py          aşağıda — teslim mesajında
```

## ② BULAMADIM
- Kifri ve Tuz Hurmatu'nun İngiliz işgal günleri (Y-1). Tanca 1684'ün günü (Y-3).
- 1702 İspanya Veraset Savaşı ilânı için akademik kaynak. Yalnız zayıf kaynaklar vardı, bu yüzden madde yazılmadı; yalnız yanlış başlık düzeltildi.
- Çanak krizi (1922) ve Sultan Osman/Reşadiye zırhlılarına el konması (1914) için TDV slug'ı bulunamadı (302). Bu yüzden yazılmadılar.
- 1652 İngiliz savaş ilânının hangi takvimde olduğu.
- İrlanda Krallığı (1542-1801) için okunmuş akademik künye (K-4).
- TDV arama sayfası (`/arama/?q=`) makine ile okununca madde listesi vermiyor. Slug'lar tek tek denendi: `kut` · `musul` · `kirim-savasi` · `canak-krizi` · `yusuf-agah-efendi` → 302.
- **TDV kendi içinde ya da başka kaynakla çelişiyor:** TDV `hollanda` Prusya işgali için "1786" diyor, Parlement.com (Leiden) "1787" diyor. Madde `celiski:` alanıyla yazıldı.

## ③ İSTİYORUM / ÖNERİYORUM
1. `index.html` + `arac/paketle.py`: iki yeni dosya **bağlanmayı bekliyor** (`KRONOLOJI_COK_HOLLANDA`, `KRONOLOJI_COK_INGILTERE`).
2. **Y-1 Irak düzeltmesi** bir sonraki koşuya (dört nokta, kaynaklı).
3. Künye: K-1 `habsburg-hollandasi` · K-2 `batav-cumhuriyeti` (KUNYE-DUNYA'da zaten aday) · K-4 `irlanda` penceresi hükmü.
4. **B-11 hükmü:** İskoçya'nın 34 maddesi bugün sitede `iskocya` künyesinde GÖRÜNMÜYOR. Tek yol `kronoloji_cok_*`'a taşımaktır. Karar sizin; isterseniz taşıma betiğini ben yazarım.
5. **B-3:** 236 madde yalnız "el-kitabi" dayanağıyla duruyor, üstelik başlıkta popüler bir kaynak (History.com) beyan edilmiş. Ayrı bir kaynaklandırma paketi öneriyorum.
