# UMIT-W32 — SESSİZ-SIFIR-1006 (yalnız ölçüm + öneri)

Sınıf: **üretilmiş çıktı ya da girdi yokken SAYI BASMAK**, ve çıkışın bunu söylememesi.
Temel: taze worktree = `origin/main` d0f3cda1 + `origin/makine/umit` e5cc3b6e (yerel birleşim
04c6af4b). Bu ağaçta üretilmiş üç dosya YOK: `data/donemler.js` · `devletler_harita.js` ·
`petek_govde.js` (gitignore'lu; yayında kodlanmış `*_ust.js`/`*_parca.js` olarak gider).
⚠️ Not: 05:03'teki ilk koşu dış kesintiyle (çıkış 4) düştü; bu rapor yeniden, dört
parçada yapılan koşudandır. Commit yok, worktree kaldırıldı.

## ① Sınıfın boyu — adıyla

**Evren:** `denetim/` + `arac/` içinde üretilmiş üç dosyaya ya da `PETEKLER` /
`PETEK_GOVDE` / `DEVLET_HARITA` / `DONEMLER`e atıf yapan **195** betik (165 denetim/ ·
30 arac/). **99**'u taze ağaçta kuru koşturuldu (timeout 150 sn, stdin boş). **96**'sı
KOŞTURULMADI, yalnız durağan sınıflandı: 53 ağır/yan etkili (uret_petek · git · kodla ·
paketle · tahta · renk_olc çağırır), 30 mutlak yollu, 13 ikisi birden.

### Kuru koşu (99)
| kova | sayı | hüküm |
|---|---|---|
| 🔴 **SESSİZ SIFIR — çıkış 0 + sayı basıyor** | **6** | sınıfın kendisi |
| 🟠 ÖLÇÜLEMEDİ/YÜKLENEMEDİ yazıyor ama **çıkış 0** | 2 | `denetle.py`nin 4 Ekim'de kapattığı kusurun aynısı |
| 🟠 Yanlış hüküm, çıkış 0 | 1 | sahte alarm |
| 🟡 "YOK" beyanlı, çıkış 0 | 4 | görünür ama otomasyon görmez |
| ⚪ Üretilmiş dosya yok → **çöküş, çıkış 1** | 41 | gürültülü ama kodu YANLIŞ: 1 = "ihlal", olması gereken 2 |
| ✓ çıkış 2 (ölçülemedi) | 6 | doğru davranış |
| — IndexError: argümansız koşturuldu | 14 | bu sınıf değil (`sys.argv[1]`, ölçüldü) |
| — öteki çöküş (TypeError · ReferenceError · KeyError ATLAS_KOK …) | 7 | ayrı |
| — 150 sn aşımı (bekçi döngüleri) | 5 | beklenen |
| — çıkış 0, üretilmiş veriye dayanmıyor (kodlanmış `_ust` okur, kendi sabiti, yama aracı) | 13 | temiz |

**🔴 SESSİZ SIFIR (6):**
1. `ARAC-ANTLASMA-KAPSAM-0074.js`: `petek_govde.js` yok ⇒ "DAR 0 KB · ORTA 0 KB · GENİŞ 0 KB (×NaN)" (bilinen)
2. `ARAC-ANTLASMA-MALIYET-0074.js`: `PETEKLER || []` ⇒ "PETEKLER: 0 · adı eşleşen sözlük: 0", yine de maliyet basıyor
3. `ARAC-UI2-FARK-0913.js`: "PETEKLER 0 · peteği bulunamayan 570" (bilinen)
4. `ARAC-ISY-OLCUM-0913.js`: "PETEKLER 0 · YOK: data/petek_govde.js", tarama/bütçe sayıları yine basılıyor
5. `ARAC-OK-RENK-0072.js`: `DEVLET_HARITA || []` ⇒ renk kaynağı dağılımında "devlet: 3" — harita varken devlet rengi alacak okları "varsayılan"a itiyor, JSON yazıyor
6. `ARAC-UI3-OLCUM-0914.js`: "Osmanlı kırılması (donemler fi) 0 · DONEMLER YÜKLENEMEDİ" — yazıyor ama çıkış 0 (2. kovaya da girer)

**🟠 "Ölçülemedi" deyip 0 dönen:** `ARAC-VL-SINAV-0907.py` ("⚪ OLCULEMEDI: çapanın KONUMU") ·
`ARAC-UI3-OLCUM-0914.js` (yukarıda).
**🟠 Yanlış hüküm:** `ARAC-KAMERIKA-0903-kosu-bekci.py`: sabit PID 1268 ve olmayan
`donemler.js` damgası (1970) ⇒ "🔴🔴 KOŞU ÖLDÜ … Çıktı EKSİK" basıp **çıkış 0**.
**🟡 Beyanlı YOK, çıkış 0:** `ARAC-TASMA-CEVRE-0911.py` · `ARAC-TASMA-FIYAT-0911.py`
("data/donemler.js ⚪ YOK") · `ARAC-SINIR-KAFRIKA-RIFEMILME-0907.py` ·
`-RIFHUKUM-0907.py` ("üretilmiş geometriden doğrulamadım").

**⚪ Çöküş, çıkış 1 (41)**, yani gürültülü ama kodu "ihlal" diyor:
A-ASYA-0078-olc · ARAC-GECIS-SURE-DAGILIM/-EKSEN-0907 · ARAC-GEO-{BICIM,BOYANMAYAN,
INCEHUCRE,KAFES,KIYI,RECETE,SERIT,TASMA,TUR2,UCGEN}-0916 · ARAC-GOVDE-KIYAS-0922 ·
ARAC-HARITA-DURUM-0074-{CAKISMA,PARCA} · ARAC-MTR-{DENIZASIRI,KOPRU}-0914 (🔴 ikisi
`C:\atlas\data\…` MUTLAK yolu okuyor — durağan süzgeç kaçırdı) · ARAC-SINIR-DIS-0070 ·
ARAC-YUK-{BOLME,YAPI}-0925 · ARAC-YUK-KAPI-SINAV-0925 (`C:\atlas-yuk-bolme` mutlak) ·
ARAC-YUKLEME-0072-{DILIM,DP2,KALDIRAC} · _yukleme0072_dilim_yaz · SINIR-D-OKYANUSYA-0077-
{govde,olc} · ARAC-C-NSEGMENT-0913 · ARAC-D-RENK-0073-{GOVDE,MALIYET} · ARAC-DIKIS-0904-govde ·
ARAC-HALKA-SINA-0913 · ARAC-KITA15-CKATMAN-DOGRULA-0913 · ARAC-PETEKSIZ-0905 ·
ARAC-UI2-YAMA-APP-0913 · SINIR-ARABISTAN-0078-govde · SINIR-UZAKDOGU-0078-govde ·
_bekci_kosu4 · _bekci_kosu4c · _tavan200_olc.

**✓ Çıkış 2 (6):** ARAC-EKSKLAV-0917 (argüman) · ARAC-GECIS-SURE-MALIYET-0907 ·
SINAV-KOSU8-BITIS-0907 · SINAV-KOSU8-PETEKSIZ-0907 · _bekci_kosu7b · **ARAC-UI2-OLCUM-0913**
(⚠️ bkz. aşağı).

### Durağan (koşturulmayan 96 dahil, 195'in tamamı)
Desen sayımı: boş varsayılan (`PETEKLER || []` vb.) 23 · sessiz yükleyici
(`existsSync → return false`) 7 · "ölçülemedi" diyen 31 · üretilmiş dosyaya varlık kapısı
3 · üretilmiş dosyayı doğrudan okuyan 32. **Boş/sessiz VE kapısız: 22**; bunların 18'i
koşturuldu (yukarıdaki kovalara dağıldı). **Koşturulamayan 4 durağan aday:**
`AVRUPA-SINIR-0077-bolge_tasma.js` · `AVRUPA-SINIR-0077-nokta_govde.js` (mutlak yol) ·
`SINAV-M0342-0907.js` (ağır) · `arac/motor_esitlik.py` (mutlak + ağır). Sınıfları
bulunamadı (ölçülmedi).

### Kardeş vakalar
- **odak_olc kaldırılmış API:** `odak_olc.py`de artık olmayan `yer_havuzu` / `_oku` /
  `sinifla` adlarını çağıran **10** betik (AST, `py` dizgi eşleşmesi elendi):
  ODAK-{AFRIKA-AMERIKA,ASYA,AVRUPA-BATI,BALKAN,DOGU-ISLAM,OSMANLI-ANADOLU}-0080-uygula ·
  ODAK-{AVRUPA-BATI,BALKAN}-0080-dokum · ODAK-OSMANLI-ANADOLU-0080-dok · -olcer-sinav.
  W36 9 dedi; fark büyük olasılıkla `ODAK-ASYA-0080-uygula` (W36 onarım diff'i bu ağaçta
  uygulanmamış). Hepsi 26741c10 (27 Eyl) ile kırıldı.
- **Paket yükleyici (W32 önceki teslim):** ODAK-ASYA n=0 ve ANTLASMA-KADEME 238 ayrı bir
  KÖKTEN geliyordu: üretilmiş çıktı yok değil, paketlenmiş girdi görülmüyordu.
  INDEX-KAYNAK ile kapandı; bu taramada o iki betik üretilmiş dosyaya atıf yapmadığı
  için evrende yok.
- ⚠️ **Kendi kapımın yan etkisi:** `ARAC-UI2-OLCUM-0913.js` artık çıkış 2 veriyor:
  "yüklenen yerleşim 814 · motor evreni 4299". Betik `Y = W.YERLESIMLER || []` ile
  **yalnız çekirdek** dosyayı okuyor, `YERLESIMLER_*` partilerini hiç birleştirmiyor.
  Bu eksiklik paketlemeden ÖNCE de vardı (814). Kapı doğru ötüyor ama betiğin
  davranışını değiştirdi: ya partiler birleştirilir ya kapı o betikten kalkar.
  Koordinatörün hükmü.

## ② Ortak ölçüt — öneri
Tek yardımcı (`INDEX-KAYNAK-1006.js`in genellemesi, ör. `denetim/OLCU-KAPISI.{js,py}`),
beş tetik. Hepsi **çıkış 2** verir, metin değil kod:

| tetik | ne zaman | bugün yakalayacağı |
|---|---|---|
| **T1 girdi var mı** | betiğin okuduğu üretilmiş/girdi dosyası diskte yok | 41 çöküş (1→2) · ISY-OLCUM · KAPSAM · KAMERIKA-bekçi |
| **T2 evren tabanı** | yüklenen kayıt sayısı İKİNCİ bir kaynağa (girdi.py · `acikListe`) göre %90'ın altında | paket körlüğü (20 betik, kapandı) · UI2-OLCUM |
| **T3 boş küme / NaN** | bir oran ya da ortalama boş kümeden türetiliyor (`n=0` payda, NaN) | KAPSAM ×NaN · MALIYET · UI2-FARK · OK-RENK |
| **T4 API varlığı** | içe aktarılan modülde çağrılacak adlar açılışta `hasattr` ile sınanır | odak_olc 10 betik |
| **T5 "ölçülemedi" = 2** | çıktıda ÖLÇÜLEMEDİ/YÜKLENEMEDİ geçip çıkış 0 olmaz | VL-SINAV · UI3-OLCUM |

**Sınavı (öneri):** bu taramanın kendisi bir kapı olabilir. Taze ağaçta (üretilmiş
dosyasız) kuru koşu: "üretilmiş veriye atıf yapan + çıkış 0 + sayı basan" = ihlal.
Bedeli ölçüldü: 99 betik, -P4, ~25 dk. Kapıya değil gece taramasına uygun.
`varsayilan_bos` deseni (`X || []` + kapı yok) durağan ön süzgeç olarak ucuzdur
(195 betikte <2 dk).

## ③ 20 betiğin raporlarından hangisi bir kararın dayanağı oldu?
**Paketleme 29 Eylül 10:54'te indi** (af0c78c6). 20 betiğin **20'si de 13-27 Eylül
arasında doğdu** ve dayanak belgeleri de o tarihli: PAKET-UI2-0913 · PAKET-UI3-0914 ·
PAKET-ISYAN-0913/-0914 · PAKET-A1-ARAYUZ-0913 · KAYNAKLI-HALKA-ALTYAPI-0913 ·
OLCUM-HALKA-ADAY-0913 · ELE-GECIRME-ANIM-0070 (20 Eyl) · ISGAL-1806-0920 ·
ANTLASMA-*-0074 (21 Eyl) · EKOKUMA-0077-C (27-28 Eyl) · ODAK-ASYA-0080 (27 Eyl).
⇒ **Hepsi paketlemeden ÖNCE, tam evrende koştu; dayandıkları hükümler GEÇERLİ.**
Bu raporlardan türeyen `js/app.js` ve `js/suzgec.js` atıfları da aynı tarihlerde.

29 Eylül sonrası tek koşu: **OLCULECEK-0930** (30 Eyl, tahta M-5528) SOHUM-ANIM'i koşturdu,
**kusuru kendisi yakaladı** ("10 yerleşim / 23 olay yükleyip sessizce boş döner"),
hükmünü scratchpad'deki düzeltilmiş kopyayla (4296 yerleşim) verdi ve ELE-GECIRME'nin de
etkilenmiş olabileceğini yazdı. ⇒ **O hüküm de geçerli.** 29 Eylül sonrası commit
mesajlarında bu betiklere başka atıf yok (ölçüldü: yalnız W32/W36 onarımları).

🔴 Asıl ders: **sınıf 30 Eylül'de BULUNDU ve "yan bulgu" olarak kaldı.** 6 gün
genelleştirilmedi; W27 envanteri (6 Eki) bu betikleri paketlenmiş evrende koşturup
"GERİLEME/BAYAT ADAYI" diye sınıfladı. Kirlenen karar raporlar değil **W27 envanterinin
kovaları**: ANTLASMA-KADEME-SINAV "BAYAT SABİT ADAYI" (asıl sebep yükleyici) ·
ODAK-ASYA-sina "girdi boş" · HALKA-SINA "üretilmiş çıktı yok".
KUYRUK-1006 §2'deki *"o raporlara dayanan her HÜKÜM geçersizdir"* cümlesi ölçümle
**çürüdü**; düzeltilmesini öneririm.
