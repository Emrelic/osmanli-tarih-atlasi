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
| ~~`emrelic-1101-yollar-pers-afrika`~~ | ✅ main'e girdi (KASA, 1 Kasım, 7a0ac954f) |
| ~~`emrelic-1101-drac-1018`~~ | ✅ main'e girdi (KASA, 1 Kasım, 7a0ac954f; yerlesimler.js çatışması elle: main'in 1000-1272 ve topia dilimleri korundu) |
| ~~`emrelic-1101-ekokuma-makam`~~ | ✅ main'e girdi (KASA, 1 Kasım, 7a0ac954f) |
| `kasa-1101-postit-148` | Basra (yerlesimler.js +2/-2) — yarım, kronoloji maddesi yok |
| `kasa-1101-postit-132` | Gyula/Yanova/Mohaç — #132 Emre kararı bekliyor |
| `postit-173-zend` | İran 1747-1751 Zend/Afşar — #173 Emre kararı bekliyor |

## C. Çatışmalı veri — ayıklandı (KASA, 1 Kasım akşamı)
Ölçüm: dal başına `git diff origin/main...<dal>` eklenen satırları main'de birebir / kayıt
(`ad:` + `s:` dilimleri, madde t + yer_id) düzeyinde arandı; iki Sonnet alt ajan, salt okuma.
Ölü olanlar F'ye taşındı.

**Alındı (main'e girdi):**
| dal | ne alındı |
|---|---|
| ~~`havva-1101-push-0cmqdy57`~~ | İskandinavya — zaten main'in atasıydı (0 commit ileri), iş yok |
| ~~`havva-1101-reverent-visvesvaraya-6b5a52`~~ | `data/sehir_tarihce_k3.js` (282 şehir, hiçbiri main'de yoktu, 282/282 `ilk.kaynak` dolu) + `denetle_yayin.py` "kasıtlı YÜKLENMEZ" kaydı |
| ~~`havva-1101-postit-62`~~ | Sivrihisar Karaman→Osmanlı 1413-07-05 → 1415-03-01 (TDV sivrihisar) + 1415-03-01 Konya maddesine Sivrihisar; dalın tavan/paket hunk'ları alınmadı |

**Bekler (kaynak/karar/yeniden uygulama ister):**
| dal | neden |
|---|---|
| `havva-1101-degismez2-tarama` | `data/olaylar_2s_1019.js`'in 67 maddesinden 43'ünün main'de eşdeğeri yok (TDV AYNEN) — yer_id eşleşmesi kaba, mükerrer taramasıyla alınmalı; ~1500 satırlık kayıt düzeltmesi + "YAPAY 1923-10-29 halef dikişi" güncel main'le yeniden denetlenmeli |
| `havva-1101-capraz-sorgu` | `capraz/` defterleri (33 dosya) + `arac/capraz_cikar.js` main'de yok (denetim olarak alınabilir); 155 satırlık tarih düzeltmesi uygulanmamış, tarih kaydırır → Değişmez 2 ile yeniden sınanmalı (909 commit geride) |
| `emrelic-1101-teyit-dalga-1014` | ÖLÜ DEĞİL: kronoloji dosyalarındaki eski satırlar main'de duruyor = uygulanmamış. Dal değil tablolar (`denetim/TEYIT-DALGA-1014/`, `denetim/TEYIT-KAMPANYA-DEVIR-1014/`) + `kaynak_guven.js` 13 kod alınıp `teyit_uygula.py` ile güncel main'de yeniden uygulanmalı |
| `kasa-1101-postit-151` | enklav→`kopuk:` şema değişikliği (236 dönem + denetle.py `_beyan`); main'de `kopuk` yok; Emre/HAVVA onayı + betikle yeniden üretim |
| `havva-1101-postit-101` | antlaşma "bırakılan bölgeler" petek boyama (js/antlasma_harita.js); main POSTIT-120 ile aynı bölgeyi değiştirdi → elle yeniden uygulama + tarayıcıda sına (D'ye de uyar) |

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

C ayıklamasından (KASA, 1 Kasım; içerik ölçümü):
`kasa-1101-postit-146c` (Lugos — main'de UMIT a090268e1, sahiplik özdeş) ·
`havva-1101-postit-99b` (main aynı maddeye daha geniş terim notu yazmış; yalnız "hatman Türkçe
taman/ataman kökenli" cümlesi eksik) · `havva-1101-postit-104` (Poti 1640-1724 kırpması main'de) ·
`havva-1101-postit-135-ayna` (main'de caccb96fc, daha yeni; almak geri adım) ·
`havva-1101-yedek-ms1-1281` (eklenen 3367 satırın 2332'si birebir, 178/178 devlet id main'de; yalnız
`kronoloji_sinir_once1281_geriye.js`'te 117 madde main'de yok, toplu alınmaz) ·
`havva-1101-yedek-postit-117-eski3` (main'de ee8889606, 4 maddeyi bilerek çıkarmış) ·
`havva-1101-w-veri` (4/5 commit main'de; 5.si Jülyen'e çevirme, Emre #10 TAKVIM-1015 ile ters) ·
`havva-1101-push-0cmqdy57`, `havva-1101-reverent-visvesvaraya-6b5a52`, `havva-1101-postit-62`
(alındı).

## G. Post-it sahipliği
UMIT oturumlarının elinde: #156 #161 #163 #170 #173 #174 (`not.py bekle` açık). KASA'nın
alabilmesi için Emre sitede "sahipsiz bırak" der ya da 7 gün sessizlikle düşer. Emre kararı
bekleyen: #100 #113 #132 #133 #135 #138 #151 #152 #172 #173. Yeni post-it yalnız KASA'da.

## H. Bu günün borcu
- Yıl temsilî borç 382 (izleme tavanı 151) — birleşen kıta işleri `YYYY-01-01` kırılmalarını
  artırdı. Değişmez 2s: 172 açık. Kaynak sınırı 2 Kasım 09:00'da açılınca ilk iş.
- Değişmez 8a tavanı koşu 31'de 180→182 açıldı (Tirol/Habsburg 1816-78) — koşu 32'de ölç.
