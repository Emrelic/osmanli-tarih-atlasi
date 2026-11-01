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

**Kısmen alındı (KASA, 1 Kasım gece; web kaynağı kullanılmadı):**
| dal | alınan | kalan |
|---|---|---|
| `emrelic-1101-teyit-dalga-1014` | Tablolar (`denetim/TEYIT-DALGA-1014/`, `denetim/TEYIT-KAMPANYA-DEVIR-1014/`) güncel main'e `teyit_uygula.py` ile yeniden uygulandı: gün teyidi 602/624 satır işlendi; yıl kararı 117 madde `YYYY-01-01`e indi, 24'ü "[yalnız yıl teyitli; gün teyitsiz]" notuyla kaldı (sınıra bağlı), 132 zaten yıl düzeyindeydi; bağlı yama 21 satır (10 etiket_yama DOSYASIZ-EŞLEŞME, dokunulmadı). `kaynak_guven.js` +13 kod. denetle önce/sonra 0; Değişmez 2'de yeni açık kırılma 0 (2s 215 açık, değişmedi) | Main'de eşlenemeyen 36 satır (gün 22 + yıl 14; künye kayıtları uygulayıcı kapsamı dışında ya da main kaymış) + girdi süzmesinde HARİÇ 3 satır (Kaheti 1492, Lenkoran 1813, yufiri#4 0915; EB1911/erenow kaynaklı). 106 gün teyidinin damga ölçümü aracın eski dizin numarasıyla aramasından ölçülemedi (yazma t+b ile doğru) |
| `havva-1101-degismez2-tarama` | `data/olaylar_2s_1019.js`: 67 maddeden main'de mükerreri olmayan 36'sı (ölçüt: ±30 gün + aynı yer, ad normalleştirilmiş; 31 mükerrer alınmadı); 36'sının 26'sı main'de bir kırılmayı karşılıyor, 10'u karşılamıyor (Serez 1345, Şibenik 1412, Çankırı 1417, Bryansk 1500, Feldkirch 1375, Bregenz 1451, Breslau 1526, Ras el-Hayme 1633, Buraydâ 1906, Sokoto 1903 — dalın kendi yerleşim düzeltmesine bağlı olabilir) | ~1500 satırlık mevcut kayıt düzeltmesi (99 madde genişletme, 72 veri düzeltmesi, "YAPAY 1923-10-29 halef dikişi" 89 dönem birleştirme + 105 dönem taşıma) — güncel main'le yeniden denetlenmeli. Mükerrer sayılan 31'den şüpheli 2'si içerik olarak ayrı olay olabilir: İvranye 1444-11-01 (Sırp Despotluğu'na iade; main'de yalnız Varna maddesinin `yer`inde), Mora 1687-08-01 (Mezistre ve Mora içleri) |
| `havva-1101-capraz-sorgu` | Defterler yalnız teslim olarak `denetim/CAPRAZ-1018/` (29 DEFTER-*.tsv, TAKVIM-SATIRLARI, UC-KAYNAK-SONUC, YONTEM, TAKVIM-ONERI + capraz_cikar.js; 34 dosya) | Tarih kaydırması UYGULANMADI: 33 veri dosyasında +155/−159 satır (devletler.js, etiket_yama, 22 kronoloji*.js, olaylar.js, 6 yer_yama*.js). İçerik: ÇELİŞKİ düzeltmeleri 37+14 madde, 22 olay Jülyen→Gregoryen, 36 `ic_not_takvim`; 909 commit geride — Değişmez 2 ve sınıra bağlı maddelerle yeniden sınanmalı, çıkarım ağırlıklı ("üçüncü kaynak hakemliği") |

**Bekler (kaynak/karar/yeniden uygulama ister):**
| dal | neden |
|---|---|
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
