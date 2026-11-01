# DEVİR — KASA tek yazıcı (1 Kasım 2026)

Emre, 1 Kasım 2026: **HAVVA** yalnız koşu + iniş · **KASA** tek yazıcı · **EMRELİC** koordinasyon +
siteye bakış · **UMIT**'e dokunulmaz · **LAB** ufak iş. Bu liste beş makinede `main`e girmemiş
bütün işin tek kaydıdır. Hepsi `origin`de dal olarak durur, hiçbir makinede yalnız yerelde iş
kalmadı. Ölçüm: EMRELİC, 1 Kasım 15:30. Raporlar: KASA PAZAR, UMIT PAZAR, HAVVA PAZAR, LAB PAZAR.

**Main'e giren birleşim** (`emrelic-1101-birlesim`): kasa-1101-birlesim-main (Avrupa) +
entegrasyon-1101 (UMIT: GDA, Güney Asya, Mağrip + LAB kıta denetimleri) + #163 + #146 (UMIT
Lugos) + #109 + derin Asya-Afrika kronolojisi + #152 (KASA Gördüs + UMIT Vostitsa/Kalavrita) +
yayın kapısı düzeltmeleri + kurallar. **Aşağıdakiler GİRMEDİ.**

Yöntem: dal başına `git merge-tree --write-tree --name-only origin/main <dal>`; paket/index
çatışması kapının işidir, gerçek veri çatışması elle çözülür. Konu eşleşmesi içerik eşleşmesi
değildir — "ölü" demeden diff'e bak. Her iş aynı gün `main`e girer.

## A. Önce — koşu 32'den ÖNCE (motor, TUZ; HAVVA ile)
| dal | ne | not |
|---|---|---|
| ~~`havva-1101-kosu31`~~ | KUR-DEVIR + KUSATMA-BILESEN + TOHUM-YAKA | ✅ main'e girdi (c1f89a803, koşu 31 inişi) — dal silinebilir |
| `havva-1101-mo-ayni-prensip` | MÖ motor aynı prensip yaması | "DAL, İTİLMEZ" diye işaretli — Emre kararı |
| `emrelic-1101-negatif-yil-b-v3` | MÖ tarih sırası gün sayacı (girdi.py, denetle.py…) | 14 Eki; main'le karşılaştır, büyük ihtimal geçersiz |
| `emrelic-1101-motor-yuruyus` | MOTOR_YURUYUS ilk yaması (17 Eyl) | bayrak main'de var — büyük ihtimal ölü |
| `havva-1101-boya-paketi-k3` | renkler.py renk paketi K3/MS1 | renkler.py çatışır |

## B. Temiz ya da küçük veri — hemen
| dal | ne |
|---|---|
| `emrelic-1101-yollar-pers-afrika` | Pers (22) + Afrika (19) yolu, 31 Eki — yeni dosya, index.html'e script satırı gerekir |
| `emrelic-1101-drac-1018` | Draç 1282-1368 zinciri (TDV kruya) |
| `emrelic-1101-ekokuma-makam` | Ek okuma: devlet makamları (js/app.js + yeni dosya) |
| `kasa-1101-postit-148` | Basra (yerlesimler.js +2/-2) — yarım, kronoloji maddesi yok |
| `kasa-1101-postit-132` | Gyula/Yanova/Mohaç — #132 Emre kararı bekliyor |
| `postit-173-zend` | İran 1747-1751 Zend/Afşar — #173 Emre kararı bekliyor |

## C. Çatışmalı veri — elle ayıkla
| dal | ne |
|---|---|
| `havva-1101-push-0cmqdy57` | İskandinavya/İsveç kronoloji + yerleşim — devletler.js, yerlesimler.js, yerlesimler_ek12.js, kronoloji_sinir_iskandinavya.js çatışır |
| `kasa-1101-postit-146c` | Lugos — main'deki UMIT #146 ile karşılaştır, fazlası varsa al |
| `kasa-1101-postit-151` | Rio–Patras — denetle.py + 15 yerlesimler*.js (+210/-201) |
| `havva-1101-capraz-sorgu` | CAPRAZ-1018 çapraz sorgu defterleri (15 commit) |
| `havva-1101-degismez2-tarama` | kronolojisiz toprak değişimleri (54 dosya) |
| `havva-1101-yedek-ms1-1281` | VERİ-MS1-1281 yedeği (16 commit, 32 dosya) |
| `havva-1101-yedek-postit-117-eski3` | Kutsal İttifak şehir el değişimleri (eski, eski2 bunun öncülleri) |
| `havva-1101-postit-62` · `-99b` · `-101` · `-104` · `-135-ayna` | eski post-it çözümleri |
| `havva-1101-w-veri` · `-reverent-visvesvaraya-6b5a52` | şüpheli; önce diff |
| `emrelic-1101-teyit-dalga-1014` | teyit kampanyası 1.+2. dalga (93 dosya, 15 Eki) — büyük ihtimal sonraki işlerle aşıldı |

## D. Kod ve arayüz — Emre'ye göster
`kasa-1101-postit-duzenle-ekran` (post-it'e ekran görüntüsü + düzenleme) ·
`emrelic-1101-not-kaydet-takilma` · `emrelic-1101-postit-model-sayac` ·
`emrelic-1101-rotus-dugme-tasi` · `emrelic-1101-vassal-rengi-geri` (TABI_RENK) ·
`havva-1101-b-gorunum-bekliyor` · `havva-1101-blissful-jackson-5eb584` (B görünümü) ·
`emrelic-1101-yuk-bolme-0925` (geometri dilimli yükleme, TASLAK) · `emrelic-1101-push-tren`
(kapı tren kipi) · `lab-1101-krono-arama-stash` (main'de bilerek geri alınmış — girmez).

## E. Salt denetim/rapor — `denetim/`e alınabilir
`emrelic-1101-enklav-harita-1028` · `emrelic-1101-d8-once-olcum` · `lab-1101-lab1004`
(2 denetim dosyası).

## F. Ölü — silinebilir (konuları main'de)
HAVVA ajanın ayıklaması: 24 dal (`havva-1101-agent-*`, `-w-gece`, `-w-not2`, `-w-renk2`,
`-w-t5a`, `-w-uyg1`, `-w-uyg2`, `-yedek-ms1-1281-v2`, `-kosu`, `-kosu25-olc`) + 2 eski tahta
(`-tablo-1016`, `-tahta-yerel-1017`). `kasa-1101-postit-136` (main'de aynı Orsova maddesi var).
`devir-1030/*` (16 dal) ve `birlesim-denetim-1028`, `entegrasyon-1029-asya`,
`worktree-kron-lehistan` birleşimin içinde. Silmeden önce Emre'ye sor.

## G. Post-it sahipliği
UMIT oturumlarının elinde: #156 #161 #163 #170 #173 #174 (`not.py bekle` açık). KASA'nın
alabilmesi için Emre sitede "sahipsiz bırak" der ya da 7 gün sessizlikle düşer. Emre kararı
bekleyen: #100 #113 #132 #133 #135 #138 #151 #152 #172 #173. Yeni post-it yalnız KASA'da.

## H. Bu günün borcu
- Yıl temsilî borç 382 (izleme tavanı 151) — birleşen kıta işleri `YYYY-01-01` kırılmalarını
  artırdı. Değişmez 2s: 172 açık. Kaynak sınırı 2 Kasım 09:00'da açılınca ilk iş.
- Değişmez 8a tavanı koşu 31'de 180→182 açıldı (Tirol/Habsburg 1816-78) — koşu 32'de ölç.
