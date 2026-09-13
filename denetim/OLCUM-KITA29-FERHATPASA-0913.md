# FERHAT PAŞA 1590 · REVAN · NAHÇIVAN · DOĞU SINIRI — ÖLÇÜM · KITA 29 · paket 0046

```
OTURUM   KITA 29 · 13 Eylül 2026 · koşu 10 → data/ DONUK, çıktı ÖLÇÜM + YAMA + C TASLAĞI
TABAN    girdi.yukle() · 3818 nokta
ÖNGÖRÜ   denetim/ONGORU-KITA29-FERHATPASA-0913.md · commit a2e54d9 (05:56:36, ölçümden ÖNCE)
YAMA     denetim/YAMA-KITA29-FERHATPASA-0913.json   A 4 kayıt · B 2 · C 2 şıklı karar
C        denetim/TASLAK-C-KITA29-1590-0913.js       1 kayıt · 17 nokta ataması (KITA 30 ile biçim uzlaşıldı)
ALETLER  ARAC-KITA29-EVREN-0913.py        ad + koordinat (dönem BASMAZ — D022)
         ARAC-KITA29-KESIT-0913.py        9 kesit · zincir · cep · kırılma günleri
         ARAC-KITA29-BENZETIM-0913.py     yamalar BELLEKTE · boşluk · cep önce/sonra · Değişmez 2 · C kutusu
         ARAC-KITA29-IRANICAPASAJ-0913.py Iranica gövdesinden cümle (yönlendirme izlenir)
         ARAC-KITA29-BELGEPASAJ-0913.py   yerel PDF/HTML'den cümle (pypdf · §4⑦)
         ARAC-KITA13-TDVPASAJ-0913.py     (KITA 13'ün aleti, yeniden kullanıldı — D045)
GÖRSEL   hiçbiri AÇILMADI — metin yetti
ÜSTÜNE KURULAN  BULGU-FERHATPASA.md (28 Ağu) · OLCUM-KITA13-VAN-0913.md (dün)
```

---

## ⓪ EMRE'NİN DÖRT SORUSUNA KISA CEVAP

**H-0007 — *"Revan alınırken Gümrü ve Eçmiyadzin alınmadan kalmış mı?"***
```
Eçmiyadzin   Revan'la AYNI idarî birimde: Kasım 1590 Osmanlı tahririnde Karbi nahiyesi
             kayıtlı, Eçmiyadzin Karbi nahiyesinin köyü. Alınmadan KALMAMIŞ.
             🔴 Atlas bunu göstermiyor — ve kaydın kendi beyanı "Revan ile aynı zincir".
             → YAMA B1
Gümrü        KAYNAK BULUNAMADI. Gümrü'nün bölgesi Şüregel, 1590 Revan tahririnde YOK
             (1727'de var). İşaretler iki yönlü. → C2 şıklı karar
Revan'ın      TDV + Mühimme: Eylül 1583 ortası. Atlas 1583-06-01 (3,5 ay erken). → C1
kendisi
```

**H-0010 — *"Nahçıvan ve Ordubad girerken Gümrü, Eçmiyadzin, Başkale, Çaldıran, Şerur, Mâku, Hoy girmiş mi?"***
```
Başkale · Çaldıran   EVET, ÇOK ÖNCE — 1548'den beri (KITA 13 yaması A; atlas bugün 1639 diyor)
Mâku                 EVET, ÖNCE — 1574'ten beri Osmanlı ocaklığı (TDV maku). Atlas hiç göstermiyor → A1
Hoy                  EVET — 1585'te Osmanlı sancak beyi var (TDV hoy). Atlas ✓
Şerur                EVET (1590'da kesin) — Osmanlı tahririnde KAZA. Giriş günü kaynakta yok. Atlas hiç göstermiyor → A2
Eçmiyadzin           EVET — Revan'la (1583). → B1
Gümrü                BULUNAMADI
+ Nahçıvan'ın kendisi: kaynak 1586 diyor (atlas 1585) ve 1587-88 kışında bir Safevî arası var → B2
```

**H-0012 — *"Ferhat Paşa Antlaşması ile … kimde kalmış?"***

| yer | 1590-03-21 atlas | kaynak der ki | hüküm |
|---|---|---|---|
| Çaldıran | safevi | Van'a bağlı (KITA 13) | 🔴 → Osmanlı (K13-A) |
| Başkale | safevi | TDV `hakkari` (KITA 13) | 🔴 → Osmanlı (K13-A) |
| Gümrü | safevi | — | ⚪ bulunamadı (C2) |
| Eçmiyadzin | safevi | Karbi nahiyesi, TD 633 | 🔴 → Osmanlı (B1) |
| Mâku | safevi | TDV `maku` 1574 ocaklık | 🔴 → Osmanlı (A1) |
| Şerur | safevi | TD 633 "Şerur Kazası" | 🔴 → Osmanlı (A2) |
| Merend | safevi | — | ⚪ bulunamadı |
| Selmâs | safevi | yalnız kale önerisi | 🟡 çıkarım-zayıf |

**H-0011 — *"Osmanlı'ya geçen / İran'a kalan toprakları NET, HATASIZ sınır"***
```
🔴 ANTLAŞMA BİR ÇİZGİ ÇİZMİYOR. İlkesi STATÜKO:
   TDV murad-iii [115]  "fethedilen ülkelerin Osmanlılar'ın tasarrufunda kalması şartıyla"
   Adlığ 2026 [299]     "her iki devletin ele geçirdiği yerler kendilerinde kalacaktır"
   Bölge listesi        TDV safeviler [211] · gurcistan [406] (alt küme, çelişki yok)
⇒ "Hatasız sınır" antlaşma METNİNDEN çizilemez; çizilebilen, KAYNAKTA ADIYLA geçen
   yerlerin sahipliğidir. C taslağı bu yüzden 17 NOKTA taşıyor, çizgi taşımıyor.
⇒ Bölge bazında atlas örtüşüyor (Tebriz · Şirvan · Gence/Karabağ · Tiflis · Luristan ·
   Nihâvend · Şehrizor · Karacadağ · Dağıstan hepsi 1590'da Osmanlı — kesit + kırılma listesi).
   Sapma YERLEŞİM bazında: yukarıdaki tablo.
```

---

## ① KESİT — Emre'nin 12 adı (atlas BUGÜN, yama öncesi)

```
                 83-05  83-07  85-10  90-03  95-06  03-11  04-07  07-06  12-11
Revan            saf    OSM🔴  OSM    OSM    OSM    OSM    saf    saf    saf
Gümrü            saf    saf    saf    saf    saf    saf    saf    saf    saf
Eçmiyadzin       saf    saf    saf    saf🔴  saf🔴  saf    saf    saf    saf
Nahçıvan         saf    saf    OSM    OSM    OSM    saf    saf    saf    saf
Ordubad          saf    saf    OSM    OSM    OSM    saf    saf    saf    saf
Çaldıran         saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴   (K13-A: 1548'den OSM)
Başkale          saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴   (K13-A)
Şerur            saf    saf    saf    saf🔴  saf🔴  saf    saf    saf    saf
Mâku             saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴  saf🔴   (1574-1639 OSM)
Hoy              saf    saf    OSM    OSM    OSM    saf    saf    saf    saf
Merend           saf    saf    saf    saf⚪  saf⚪  saf    saf    saf    saf
Selmâs           saf    saf    saf    saf⚪  saf⚪  saf    saf    saf    saf
                 🔴 = kaynağa göre yanlış · ⚪ = kaynak yok
1590-03-21: OSMANLI 4 · safevi 8   (öngörü Ö1: 4 · 8 — TUTTU)
1607-06-15 = 1612-11-21            (Nasuh Paşa yeni kırılma üretmiyor — Ö7 TUTTU)
```

## ② KAYNAKLAR — ne okundu, ne dedi

| kaynak | tür | kullanılan cümle | neyi taşıyor |
|---|---|---|---|
| TDV `revan` [37][42-43][48-49] | ansiklopedi | *"991 Ramazanı başlarında (Eylül 1583 ortaları)"* · 1590 tahriri 27 nahiye | C1 · 1604 |
| TDV `maku` [17][19-20][22-24] | ansiklopedi | 1574 İvaz Bey · 1605 Abbas alamadı · 1639 yıkım | A1 |
| TDV `murad-iii` [114-115] | ansiklopedi | Gence 1 Eylül 1588 · statüko şartı | A3 · C kaydı |
| TDV `safeviler` [210-211] | ansiklopedi | Gence 1 Eylül 1588 · 13 bölgelik liste | A3 · C kaydı |
| TDV `gurcistan` [406][417-418] | ansiklopedi | bölge listesi (alt küme) · Tiflis 1603 | C kaydı |
| TDV `tebriz` [53-54][58][184] | ansiklopedi | 25 Eylül 1585 · 21 Ekim 1603 · 1593 taksim (Miyandûvab) | C kaydı · t |
| TDV `hoy` [24-25][28-29] | ansiklopedi | 1585 sancak beyi · 1612 İran'a terk | zaten doğru |
| TDV `nahcivan` [73-74] | ansiklopedi | 1603 Abbas geri aldı (fetih günü YOK) | B2 |
| TDV `nasuh-pasa` [73] | ansiklopedi | 20 Kasım 1612, 1555 esas | t_hukuki · A1 mazereti |
| TDV `luristan` [35] · `sirvan` [33-35] · `karabag` [22-23] · `kars` [52] | ansiklopedi | bölge teyitleri · Şüregel 1534 | C kaydı · C2 |
| **Adlığ 2026**, Dicle Üniv. SBED 42, doi 10.15182/diclesosbed.1696513 | hakemli | [268-270] yürüyüş emri 13 Eylül 1583 · [298-299] 21 Mart 1590 + statüko · [318-320] 8 Haziran 1604, geri alınamadı | C1 · C kaydı · çelişki |
| **Bilgili 2016**, Ermeni Araştırmaları 53 (BOA **TD 633** · **TD 901**) | hakemli | [52] 1590 kaza/nahiye listesi · [85] Şerur Kazası · [87] Şüregel göçü · [212-214] 1727 listesi · [236] Üç Kilise (1727) | A2 · B1 · C2 · ek bulgu |
| **Bilge**, Vakanüvis 2 Kafkasya özel sayısı | hakemli | [51-52] Nahçıvan 1586 · 1587-88 arası · 1588 · [55] 1590 sancak yapısı | B2 |
| **Köse 2024**, Türkiyat Mecmuası 34/1, doi 10.26650/iuturkiyat.1351237 | hakemli | [141][163] Vagharshapat Karbi nahiyesinde | B1 |
| İslamoğlu 2015, CAHIJ 4, doi 10.18299/cahij.50 | hakemli — **yalnız özet** | Ordubad 1590 Revan eyaletinde | C kaydı |
| Çeribaş 2025, Hazine-i Evrak 7/8 | hakemli | [139] Urmiye/Selmas/Hoy'a kale önerisi | Selmâs |
| Iranica `erevan-1` [392-396] · `abbas-i` [75-76] · `khoy` [56-59] | ansiklopedi | 1604 "retaken" (çürüdü) · 1605-06 · Salmās/Khoy valileri | çelişkiler |

🔴 **Kullanılmayanlar (`§4` kırmızı liste):** arama motoru YZ özetleri (üçü de belgenin söylemediğini söyledi — aşağıda) · Kars Öğretmenevi sitesi (popüler) · kupdf/Scribd barındırmaları.

## ③ BENZETİM — yamalar bellekte uygulandı (`ARAC-KITA29-BENZETIM-0913.py`)

```
ön koşul    K13-A (Başkale · Çaldıran · Şeyhrumi 1548) ÖNCE uygulandı — D166
boşluk      değişen 8 kaydın 8'inde YOK

komşu cebi (en yakın 8'in ≥6'sı farklı · kur: duyarlı)
            ÖNCE   K13-A+A   +B1
1575-06-15   13       9       9
1590-03-21   11       8       7
1605-06-15    7       3       3
1620-06-15    8       4       4

1590'da yama sonrası KALAN Emre-cepleri:  Gümrü 8/8 · Selmâs 8/8 · Merend 7/8
   ⇒ tam olarak KAYNAĞI BULUNAMAYAN ÜÇÜ. Kaynaklı her yama bir cebi kapattı;
     kalan her cep bir kaynak boşluğu.
Mâku sonrası  1590 0/8 · 1605 2/8  → ada DEĞİL (iki uç, §3.5.1)
Eçmiyadzin    YALNIZ A inerse 1590'da 7/8 CEP — B1 bunu kapatıyor
```
**Değişmez 2:** `1574-01-01` 🔴 AÇIK (236 gün) · `1588-09-01` 🔴 AÇIK · öteki dört ✓ — KITA 14'ten istendi (M-3743).
⚠️ `1585-01-01` "kapalı" ama en yakın madde **"Büyük tağşiş — akçe krizi"** — konusu ilgisiz; Nahçıvan · Ordubad · Culfa bugün de ona yaslanıyor.

**C kutusu (§F):** 33-43°K · 41,5-50,5°D kutusunda 1590'da **123 noktanın 23'ü Osmanlı/tâbi değil** (Erdebil · Zencan · Kazvin · Reşt · Lenkeran · Kürdistan altılısı · Gümrü · Merend · Selmâs …) ⇒ KITA 30'un önerdiği tek renk dolgu yanlış boyardı; taslakta `kapsama.tur:"nokta-listesi"`, kutu yalnız kamera odağı (M-3742).

## ④ KAYNAK ÇELİŞKİLERİ VE TUZAKLAR

```
🟢 KAPANDI  1604 Revan: TDV + Adlığ ("tekrar alınamamıştır") ↔ Iranica ("retaken soon")
            2'ye 1, atlas doğru tarafta
🟡 NOT      Iranica abbas-i taarruzu 1605-06'ya koyuyor ↔ TDV tebriz · nahcivan 1603 — atlas TDV'yi izliyor
🔴 ÖLÇÜLDÜ  Bilgili [235-237] "Üç Kilise" vakıf alıntısı 1727 TD 901 bölümünde ([212] başlığı) —
            1590'a TAŞINSAYDI Eçmiyadzin sahte "KESİN" olacaktı
🔴 ÖLÇÜLDÜ  ARAMA MOTORU YZ ÖZETİ ÜÇ KEZ ŞİŞİRDİ:
            · "Merend, Selmas, Hoy Tebriz eyaletinin sancaklarıydı" → belge: kale ÖNERİSİ, Merend yok
            · "Şerur 1590 defterinde s.162, 165" → üç PDF'te "162"/"165" ARANDI: Bilge 0 ·
              Adlığ 1 sahte ("1623" alt dizgisi, D159) · Bilgili 1 = [479-480] "BA, TD 905,
              s. 162-163" — BAŞKA bir defterin dipnotu, Şerur'la ilgisiz ⇒ sayfa atfı
              BULUNAMADI (Şerur'un kendisi Bilgili [52][85]'te DOĞRULANDI)
              ⚠️ bu satırın ilk yazımı "hiçbir okunan belgede yok" diyordu ve ARANMADAN
              yazılmıştı — commit'ten önce yakalandı, ölçülüp düzeltildi (D035)
            · "Şüregel kazası (Kızılçakçak, Akyaka)" → dayanağı bir öğretmenevi sitesi
            ⇒ özet bir KAYNAK DEĞİL, bir "nereye bakılır" işaretidir
🔴 İÇ ÇELİŞKİ × 3  ek26 Eçmiyadzin + Gümrü "ankraj Revan — aynı zincir" ama Revan'ın Osmanlı
            dönemleri yok · kalite4 Şerur "sık sık el değiştirdi" ama zincir hiç değişmiyor
🔴 AD TUZAĞI  1590 Nahçıvan sancağının "Karabağ nahiyesi" ≠ atlastaki "Berde (Karabağ)"
🔴 SÜZGEÇ    grep -i Git Bash'te Türkçe baytları eşleştiremedi: 12 adın 7'sini "yok" gösterdi,
            12'si de atlasta VAR (yorumlayıcıyla ölçüldü, D054/D064)
```

## ⑤ ÖNGÖRÜ KARNESİ

| # | öngörü | ölçüm | hüküm |
|---|---|---|---|
| Ö1 | 1590'da OSM 4 · saf 8 | 4 · 8 | 🟢 TUTTU (Şerur mazeret dalı tetiklenmedi) |
| Ö2 | cep 5-9, içinde Gümrü·Eçmiyadzin·Çaldıran·Başkale·Mâku | 13 (`kur:`suz alet) · 11 (`kur:` duyarlı); Eçmiyadzin ve Mâku YOK | 🔴 ÇÜRÜDÜ — sayı da üyelik de. **Bilgi taşıdı:** Eçmiyadzin ve Mâku cep değildi ama yamanın iki UCUNDA cep oluyorlar |
| Ö3 | TDV `revan` Gümrü/Eçmiyadzin'i 1583-1604'te anmaz | anmıyor (Üçkilise yalnız 1441) | 🟢 TUTTU — ama hüküm başka kaynaktan (TD 633 Karbi) yükseldi |
| Ö4 | Mâku 1590 OSM · 1603-1639 ayrıştırılamaz | 1590 ✓ · **1605 ölçülebildi** (Abbas alamadı) · ayrıştırılamayan yalnız 1612-1639 hukuku | 🟡 YARIM |
| Ö5 | ≥3 kaynaktan birleşir · `bolge` · Erdebil istisnası olabilir | `safeviler` [211] **tek başına** liste veriyor · `bolge` ✓ · Erdebil yok · öngörülmeyen: statüko ilkesi + tahrir yer listesi | 🟡 YARIM |
| Ö6 | bölge sapması 0-1 · Emre'nin 12'sinden 4-8 yama adayı | bölge 0 (+Kürdistan belirsiz) ✓ · yama adayı benimkiler 3, K13-A ile 5 | 🟡 **öngörüm çift anlamlıydı** ("yama adayı" K13'ü kapsıyor mu yazmadım — D052 cinsi) |
| Ö7 | 1607 = 1612 | özdeş | 🟢 TUTTU |
| Ö8 | kaynaklı yama 2-5 · çıkarım 3-6 · yeni gün 0-1 | 4 kayıt ✓ · 3 ✓ · **2** | 🟡 ikisi tuttu, yeni gün ÇÜRÜDÜ |

📌 **En değerli bulgu öngörülmemişti:** 1590 Revan tahririnin (BOA TD 633) kaza/nahiye listesi — üç soruyu (Şerur · Eçmiyadzin · Gümrü) birden cevaplayan tek belge. Öngörüler TDV ve Iranica'ya kurulmuştu.

## ⑥ NE ÖLÇEMEDİM — üç damga (D107)

```
BULUNAMADI   Gümrü'nün 1583-1604 sahibi · Merend'in 1590 sahibi · Revan fethinin GÜNÜ ·
             Nahçıvan'ın 1587-88 kesintisinin GÜNLERİ · Şerur'un Osmanlı giriş/çıkış GÜNLERİ
ÖLÇÜLEMEDİ   Hoy'un Osmanlı başlangıç günü ("savaşların başlarında") · Mâku 1612-1639 hukukî
             durumu · Kotur/Mâku bitişi 1639-05-17 ↔ "IV. Murad'ın ölümünden sonra"
OKUMADIM     BOA TD 633'ün KENDİSİ (atıflar makaleler üzerinden) · İslamoğlu 2015 tam metni
             (yalnız özet) · Kaya 2023 tam metni · Karagöz 2001 tezi · Kütükoğlu 1993 ·
             antlaşmanın kendi metni/neşri · Erdebil ve Kürdistan altılısı için 1590 kaynağı ·
             Talin/Aralık/Karbi koordinatları (3 km taraması YAPILAMADI) ·
             1724-1735 ek bulgusunun günleri
```
