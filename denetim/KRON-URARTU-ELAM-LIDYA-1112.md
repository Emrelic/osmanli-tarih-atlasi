# Urartu · Elam · Lidya — kronoloji × harita × kaynak denetimi (12 Kasım 2026)

Ölçüm: worktree `funny-edison-ff87df` (origin/main tabanı), `data/` grep + kaynak taraması. Veri dosyalarına DOKUNULMADI; `denetle*` koşulmadı. Konvansiyon: Mezopotamya orta kronoloji; Anadolu için Bryce 2005 (bu üç devlet Hitit sonrası, çakışma yok).

## 1. Bulunan kayıtlar
| Devlet | Künye (devletler.js) | Kronoloji maddesi | Harita zinciri |
|---|---|---|---|
| Urartu | f −0859, t −0589 (satır 19405) | 5 madde (−0859, −0839, −0755, −0713, −0589) + `olaylar_antik_yakin_dogu` (−0857, −0809, −0742, −0713, −0599) | YALNIZ Eski Van (Tuşpa) −0859…−0589; sonrası −0589…1230 `__BOSLUK__` |
| Elam | Simaski −2099…−1899 · Sukkalmah −1899…−1499 · Orta −1499…−1099 · Yeni −1099…−0538 (+ Awan −2499…−2099) | ~25 madde | YALNIZ Susa (ur-3 −2111…−2023 → simaski → sukkalmah → orta → yeni → ahamenis −0538) |
| Lidya | f −0679, t −0545 (satır 19398) | 4 madde + olaylar | Sart −0651…−0545 · Gordion −0624…−0545 |

## 2. Bulgular

**B1 — Lidya iç çelişkisi: Gyges ölümü (YÜKSEK).** `devletler.js` kronolojisi `-0643` "Gyges öldürülür (MÖ 644)" (Spalinger 1978, JAOS 98/4, 400-409); `olaylar_antik_yakin_dogu.js` ve `olay_taraf.js` `-0651` "Kimmerler Sardes'i yağmaladı; Gyges öldü (MÖ 652; Livius: 644)". Aynı olay iki tarihte, 8 yıl fark. Spalinger MÖ 644'ü Asur kaynaklarına (Dugdammî) dayandırır (arama özetlerinde teyit; makale metni okunmadı); geleneksel 652 Spalinger'ce reddedilir. **Öneri:** olay −0651 MÖ 644'e (−0643) çekilsin ya da 652'yi "eski gelenek" diye `ic_not`ta beyan etsin.

**B2 — Gyges/Mermnad başlangıcı üç farklı değer.** künye f −0679 (MÖ 680); `olaylar` −0684 (MÖ 685, "Livius ~680"); Sart zinciri f −0651 (MÖ 652, "noktanın kur'u"). Sart zinciri künyeden 28 yıl geç başlıyor → −0679…−0651 arası Lidya başkenti Sart haritada **sahipsiz** (Değişmez 1 şüphesi; Sart `kur` −0651 mi, yerleşim daha eski mi bakılmalı) ve künyedeki "Britannica/EBSCO" kaynak metni zincirde hâlâ duruyor (künyede TDV/Treccani'ye çevrilmiş, zincirde değil). **Öneri:** Sart zinciri f'i −0679'a (TDV Asya 680) çek, kaynak metnini künyeyle eşitle.

**B3 — Eklips/Halys barışı üç günle yazılmış.** `devletler.js` Lidya −0584-05-28; Medya kaydı (satır 20863) −0584-05-29; `olaylar` −0584-01-01 "28 veya 30 Mayıs". Tutulma MÖ 28 Mayıs 585 (Jülyen; NASA/Espenak–Meeus kataloğu, Leloux 2016 *Polemos*'a atıf — katalog doğrudan okunmadı; ikincil derlemelerde 28 Mayıs). 585 < 1582 ⇒ kaynak günü yazılır: **28 Mayıs**. Medya kaydındaki 29 hatalı; `olaylar`daki yıl-hassasiyetli kayıt ile gün kaydı aynı olayın mükerrerleri (Değişmez 2 sayımı için ayrı kayıt gerekmez). Ayrıca alternatif (MÖ 609 / 587 ay tutulması; Kyaksares ölmüş olması — Eusebius) `ic_not`ta beyan edilmeli; yok.

**B4 — Urartu bitişi: TDV 610 / Iranica 590 / Livius 547.** Atlas −0589 (c. 590, Iranica; konvansiyonel; Karmir-blur yıkımı ≈MÖ 600, `olaylar` −0599). TDV Asya 856-610 / Ağrı 900-600. Kroll bitişi birkaç on yıl daha erken, Livius 547 (Kyros) önerir. Hepsi `ic_not`ta zaten beyanlı (TDV 610); **üçüncü bağımsız kaynak (Kroll/Zimansky) tam metinle okunamadı**, çelişki beyanlı bırakıldı. Künyeler arası tutarsızlık: künye t −0589 ↔ kronoloji "Med fethiyle" −0589 ↔ `olaylar` −0599 "kaleler yıkıldı" — 10 yıl, "onyıl" kesinliği içinde, kabul edilebilir. "Med fethi" ifadesi tartışmalı (Iskit/Med/içten çöküş; Wikipedia/Livius: yazılı kayıt yok) → madde metni "fethiyle" yerine "çöküşüyle (Med/İskit/iç; yazılı kayıt yok)" olmalı.

**B5 — Urartu kuruluşu ve II. Sarduri.** künye f −0859 (MÖ 860), kronoloji "Aramu ile Urartu krallığı başlar c.860"; ilk Asur anışı III. Şalmaneser 858 (`olaylar` −0857) ve TDV Asya 856. Üç kayıt 856-860 arasında; "onyıl" içinde. "II. Sarduri MÖ 756'da tahta çıkar" (−0755) maddesi: yaygın literatürde II. Sarduri ~764-735; **756'yı destekleyen kaynak bulunamadı, 764'ü de bu turda teyit edemedim** → madde "beyanlı/teyitsiz" işaretlensin ya da kaldırılsın. Madde kaynağı yalnız Livius (Vikipedi-sınıfı derleme sayılmaz).

**B6 — Urartu haritası: tek nokta, 340 yıllık delik (YÜKSEK, görünürlük).** Urartu toprağı (Van, Muş, Erciş, Revan/Erivan, Urmiye, Aras) yalnız Eski Van peteği ile temsil; çevre noktaların negatif-yıl zinciri yok. `__BOSLUK__` −0589…1230 (≈1800 yıl) büyük ölçüde beyanlı ama Boşluk merdiveni (CLAUDE.md) uygulanmamış: MÖ 590-330 Tuşpa/Armina bölgesi için Med→Ahamenis (Armina satraplığı; Behistun) tanığı var, `kaynakli_halka_*` adayı. Bu bir veri işi; kronoloji tarafı −0589 sonrası sessiz.

**B7 — Lidya haritası: yalnız Sart + Gordion.** Kroisos'un hâkimiyeti (Efes/İyonya haracı −0559, Halys'e kadar) haritada yalnız iki noktayla; Efes/Bayraklı/Foça/Manisa zincirleri MÖ 6. yy'a inmiyor (Foça, Manisa, Alaşehir, Uşak kayıtlarında negatif yıllı `s:` yok). Değişmez 2'ye bağlı değil ama "madde okununca haritada görünmeli" ilkesine aykırı (Kroisos'un İyonya'yı haraca bağlaması −0559, harita boş). Gordion zinciri Lidya −0624'ü TDV 676 ile boşluk bırakıyor: Frigya t −0675 ↔ Lidya −0624 arası 51 yıl beyanlı BOŞLUK (FRIGYA-T-1111) — doğru yaklaşım, kabul.

**B8 — Lidya bitişi.** künye t −0545 (MÖ 546; TDV Asya 546, Treccani 547-546); `olaylar` Pteria −0546 (MÖ 547); Sardes'in düşüşü için 547/546 iki gelenek (Nabonid Vakayinamesi 9. yıl kırık satır). `ic_not` iki yılı beyan ediyor; yeterli. Sart'ın Ahamenis'e geçişi −0545 künye ile uyumlu. Nabonid Vakayinamesi doğrudan okunmadı → bu çift teyit iki kaynaktan (TDV+Treccani).

**B9 — Elam: Susa'nın düşüşü 646/645/647.** künye zinciri `-0645` (MÖ 646, Iranica Vallat); `olaylar` −0644 (MÖ 645, "647-640 arası"); `olaylar` Elam-Babil "−0647 Babil teslim". Kesinlik "onyıl", beyanlı → sorun yok; ama Yeni Elam künye t −0538 (Kyros) ile Susa'nın MÖ 646 yıkımı arasında Elam fiilen siyasî varlık değildi (Asur sonrası yerel yönetim). Zincirde Susa −0538'e kadar `elam-yeni`. **Karar kaydı gerekir** (bkz. K3).

**B10 — Elam: Şutruk-Nahhunte Babil'i yağması.** künye −1154 (MÖ 1155, Kassit sonu) ↔ `olaylar` −1157 (MÖ 1158, onyıl). Potts/Iranica'da Sippar yağması ~1158, Kassit son kral Enlil-nadin-ahi 1157-1155. İki madde farklı olay (Sippar yağması / Kassit sonu) — çelişki değil; metinler "aynı olay" gibi yazılmış, ayrı beyan ister (`ic_not`).

**B11 — Elam: Susa Ur III → Simaski devri.** Zincir −2023; künye Simaski f −2099 (76 yıl "Simaski var, Susa Ur III'te"). Ur III sonu −2003 ve Kindattu Ur'u alışı −2003 ile Susa'nın −2023'te Simaski'ye geçişi arasında 20 yıl: Susa'yı Ur III Ibbi-Sin ~2023'e kadar tutuyorsa (zincir kaynağı Sallaberger 2015) tutarlı; Iranica Simaski'nin Susa'yı ~2004 civarı aldığını yazar. **Beyanlı bırak:** iki kaynak 20 yıl farklı; üçüncü kaynak aranmadı.

**B12 — Elam dönem sınırları (Treccani tek kaynak).** Sukkalmah, Orta ve Yeni Elam künyeleri tek kaynağa (Treccani, "circa") dayanıyor; atlas ve Treccani 50-100 yıl ayrışıyor (Sukkalmah 1990-1600 ↔ atlas 1900-1500; Orta 1550-1110 ↔ 1500-1100; Yeni 1000 ↔ 1100). Künyelerdeki `ic_not` bunu beyan ediyor. Orta/Yeni sınırı −1099 hem Iranica (Vallat, "ca. 1100") hem atlas — kabul. Sukkalmah ve Simaski başlangıç/bitiş tarihleri için ikinci akademik kaynak (Potts 1999; Vallat) bu turda web'den okunamadı → beyanlı kalsın.

## 3. Karar gereken (öneri ile)
- **K1 — Gyges ölümü iki tarih (B1):** −0651 maddesini MÖ 644'e (−0643) çek, 652'yi `ic_not`ta "eski gelenek" olarak beyan et. *Öneri: evet.* 
- **K2 — Sart zinciri f −0651 → −0679 (B2) ve Medya eklips günü 29 → 28 Mayıs (B3):** ikisi de kaynakla düzelir. *Öneri: evet; eklips için `ic_not`a alternatif tutulmalar (MÖ 609/587) yazılsın.*
- **K3 — Yeni Elam t −0538 mi MÖ 646 mı (B9):** *Öneri:* künye kalsın (Kyros fethi kaynaklı), Susa zincirinde −0645 sonrası dilim "Asur egemenliği / yerel Elam kalıntısı" olarak beyanlı bırakılsın; ayrı kaynak aranmadan değişmesin.
- **K4 — II. Sarduri MÖ 756 (B5):** kaynak bulunamadı. *Öneri:* maddeyi "teyitsiz" etiketle; Salvini 2008 / Kroll okunduktan sonra düzelt.
- **K5 — Harita kapsamı (B6, B7):** Urartu çevre noktaları ve Lidya/İyonya noktaları için ayrı veri işi (Boşluk merdiveni ⑤: abi merkez Tuşpa/Sart). *Öneri:* KASA'nın veri kuyruğuna al; bu oturumun işi değil.
- **K6 — Urartu bitişi (B4):** TDV 610 / Iranica 590 / Livius 547. *Öneri:* −0589 kalsın, "fethiyle" → "çöküşüyle (neden tartışmalı)"; Kroll'un erken tarihi `ic_not`ta anılsın.

## 4. Ölçülemeyen / okunamayan
- Spalinger 1978 ve Nabonid Vakayinamesi tam metni okunmadı (yalnız ikincil özet).
- Kroll/Zimansky/Salvini tam metinleri okunamadı; II. Sarduri 764-735 kaynaklı teyit alınamadı.
- TDV'de "Lidya", "Urartu", "Elam" maddelerinin ayrı ayrı yeniden taranması bu turda yapılmadı (mevcut `ic_not`lar TDV Asya/Anadolu/Ağrı'ya atıf yapıyor; doğrulanmadı).
- Sart `kur` değerinin kaynağı ve Tuşpa/Revan/Muş çevre zincirlerinin yokluğu yalnız grep ile; motor çıktısı ölçülmedi.
- Hiçbir veri dosyası değiştirilmedi; `denetle.py` koşulmadı.
