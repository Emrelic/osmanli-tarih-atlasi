# UMIT-W18-VIKIPEDI-JASENOVAC-1006 — rapor

İşçi: UMIT-W18-VIKIPEDI-JASENOVAC-1006 · alt koordinatör UMIT İRTİBAT · 5-6 Eki 2026
Ağaç: `C:\atlas-w18` (detached, origin/main `3e4b3a98`) · **commit YOK**
Çıktılar: `denetim/VIKIPEDI-KAYNAK-ZAYIF-1006.diff` · `denetim/JASENOVAC-BROD-1536-1006.diff` · `denetim/CRES-NOT-1006.diff`
(eski `VIKIPEDI-DOGRULANMADI-1006.diff` SİLİNDİ — koordinatör hükmüyle alan adı `dogrulanmadi` → `kaynak_zayif:true`)

## 0. ÖNGÖRÜ — ölçümden önce mühürlendi
- İŞ 1: `dogrulanmadi` uyarısı N → N+3 (Cres dâhil; Cres düşünce gerçekleşen +2); değişmez sayıları ÖNCE = SONRA.
- İŞ 2: Osmanlı kırılması +0/+1; D2 açık 0 (madde aynı diff'te); güçlü çevrim −1 (Brod⇄Dubiça çözülür).
- ⚠️ Öngörüm taban sayısını §1.5'ten (621) aldı; gerçek taban 623'tü — §1.5 bayat.

## 1. İŞ 1 — `kaynak_zayif:true` (Deyrülkamer biçimi; ilk teslimde `dogrulanmadi` idi)

| kayıt | dosya | Vikipedi'ye dayanan iddia | yapılan |
|---|---|---|---|
| Şefşâven | `yerlesimler_h2_kuzeyafrika.js:98` | `rif-cumhuriyeti` 1924-11-15 geçişi (Wikipedia "1924 retreat from Chaoen") | `kaynak_zayif:true` + `neden:`e EKLENDİ; AYRIM yazılı: "TDV'de yok" = bulunamadı ≠ kaynak_zayif (Vikipedi'ye dayanan 1924-11-15) |
| Maroa | `yerlesimler_a78_amerika.js:1640` | yalnız KOORDİNAT (en.wikipedia "Maroa, Amazonas"); dönem kurumsal (FEP DHV) | `kaynak_zayif:true` + `neden:`e EKLENDİ; yalnız KOORDİNATI kapsadığı yazılı |
| Cres | `yerlesimler.js:1659` | — bkz. §1.1 | işaret YOK — `CRES-NOT-1006.diff`: bayatlık notu + birincil dayanak atfı |

Hiçbir dönem, nokta ya da koordinat SİLİNMEDİ.
`neden:` çakışması: üç kaydın üçünde de `neden:` ZATEN VARDI ⇒ hepsinde ekleme (` · dogrulanmadi (UMIT-W18…): …`).

### 1.1 Cres — aksaklık (UMIT İRTİBAT'a anında bildirildi)
"İtalya'ya geçiş" artık yalnız Vikipedi'de DEĞİL: `s[]` dönemleri F8 /
ONCE1281-CISLEITHANIA-1005 ile yeniden yazılmış — `avusturya →1919-09-10` ·
`itilaf-emaneti 1919-09-10→1920-11-12` (Saint-Germain md. 91, FOROST 19190910-1) ·
`italya 1920-11-12→` (Rapallo md. 2-3, LNTS c.18 s.397-403). Vikipedi yalnız kayıt
düzeyindeki `kaynak:` alanında kalmış; `neden:` ise BAYAT ("1918-1920 AYRIŞTIRILMADI"
diyor, oysa ara dönem ayrıştırılmış). Kusur sınıfı "zayıf kaynak" değil "bayat açıklama".
Karar (UMIT İRTİBAT, seçenek a): `dogrulanmadi` YAZILMAZ; `neden:`e bayatlık notu EKLENİR, `kaynak:`a Saint-Germain md.91 + Rapallo LNTS atfı (s[]'deki dayanağa atıf, kopya değil). `yerlesimler.js` W8'de kilitli ⇒ `CRES-NOT-1006.diff` W8 teslim edince, ayrı teslim.

### 1.2 Beklenen uyarı — ölçüldü
```
denetle.py · odak_olc.py   ÖNCE: 'dogrulanmadi' BILINEN_ALANLAR'da yok — 1 kayıtta (Deyrülkamer)
                           SONRA (yeniden üretimde, 45f6a33c): 'dogrulanmadi' 1 kayıt (Deyrülkamer) + 'kaynak_zayif' — 2 kayıtta (Şefşâven · Maroa)
değişmez özet satırları ÖNCE = SONRA birebir
```
`girdi.py`ye DOKUNULMADI (motor tuzu, §9.1). Uyarı, alan BILINEN_ALANLAR'a tam inşa
koşusunda girene kadar BEKLENENDİR.

## 2. İŞ 2 — Jasenovaç + Bosna Brod'u 1538 → 1536

### 2.1 Kaynak (ham sayfadan, harf harf — çıkarıcı özeti DEĞİL)
```
HE enciklopedija.hr/clanak/jasenovac       "Bosanski sandžak-beg Husrev-beg osvojio ga je 1536.,
                                            pa je Jasenovac postao sjedište kapetanije."
HE enciklopedija.hr/clanak/bosanski-brod   "Osmanlije su ga zauzeli 1536."
HE enciklopedija.hr/clanak/kozarska-dubica "… a 1538. …"   (Dubiça — DOKUNULMADI)
```
**TDV:** `jasenovac`, `brod` slug'ları ölü (HTTP 302). Ajax arama (`sp=m`/`sp=t`)
Jasenovac/Yasenovac/Brot: yer olarak 0 isabet; "Brod" yalnız `banaluka`da nahiye adı.
Bağlam (DAYANAK DEĞİL, bölgeden kaleye hüküm taşınmadı):
`gazi-husrev-bey` «1536'da üçüncü defa Bosna sancak beyliğine tayin» · «Pojega ve
civarını zaptetmiş (1536)» · `diyakova` «1536'da Hırvatistan'a yönelik akınlar».
⇒ TDV ile HE ÇELİŞMİYOR; TDV taneciği kapsamıyor (§4: akademik kaynak meşru, `kaynak:`ta açık).
**Hassasiyet:** iki kaynak da YIL ⇒ `1536-01-01`, metinde ve `kesinlik:"yil"` ile beyanlı (D210/D213).
**Brod'u Hüsrev Bey'e bağlayan cümle HE'de YOK** — maddede kişi yalnız Jasenovaç için yazıldı.

### 2.2 Değişiklik
`yerlesimler_ek29.js` (her iki kayıt): `s[1] avusturya t` + `d[0] f` 1538-01-01 → 1536-01-01;
`d[0]`a kaynak eklendi; kayıt `kaynak:` "komşu emsali (Bosna Dubiçası, 1538)" → HE alıntısı;
`neden:` "1538 komşu emsali" cümlesi düzeltildi; `s[0]/s[1]` kaynaklarındaki
"(atlas 1538 — çelişki raporda)" → "(atlas 1538'di, W18'de 1536'ya çekildi)".
`olaylar_ek5.js` (çekirdek, D2 evreni; Knin 1522 · Banaluka 1528 · Klis 1537 Hüsrev Bey
serisinin dosyası): YENİ madde `1536-01-01 · kesinlik:"yil" · k:"fetih"` "Sava hattında
Jasenovaç ve Brod'un fethi", `yer_id: Jasenovaç`, `fethedilen: [Jasenovaç, Bosna Brod'u]`.
ek5'te yalnız bu madde (W17 kuralı).

### 2.3 Ölçüm — ÖNCE / SONRA (taze ağaç, `denetle.py` çıkış 2 = Değişmez 8 ölçülemedi, her iki koşuda aynı)
```
                         ÖNCE                     SONRA
Değişmez 1               4299 · 309 sahipsiz      aynı
Değişmez 2               623 kırılma, 0 açık      624 kırılma, 0 açık     (+1 = 1536-01-01 yeni kırılma tarihi)
Değişmez 2s/2i/2t/4/5/7  …                        aynı (özet satırları birebir)
odak_olc ek5             421 madde / 409 odaklı   422 / 410               (yeni madde ODAKLI)
DEVRALMA-DONGU güçlü     3 çevrim                 2 çevrim                (Brod⇄Dubiça ÇÖZÜLDÜ)
çözülemeyen-GÜÇLÜ        44                       42                      (Jasenovaç+Brod "emsal (Dubiça)" düştü)
```
Kalan iki çevrim: Dimetoka⇄Sofulu (beyanlı) · **Akçakale⇄Jadlā' — beyanlı listede YOK**
(`DEVRALMA-DONGU-1004` 2 diyordu; taban bugün 3). Kapsamım dışı, yalnız bildiriyorum.
Dubiça→Brod kenarı (1718/1739 günleri) tek yön kaldı: Brod'un `1739-09-28` dönemi TDV'li,
ama Brod'un `1718-07-21` ucu (`d[0] t`, `s[2] f`) HÂLÂ kaynaksız — dokunulmadı.

## 2.5 Cres — CRES-NOT-1006.diff
**Tazelik: ölçüldü** — bayat `neden:` ("AYRIŞTIRILMADI — doğrudan avusturya'dan italya'ya") ve yalnız
Wikipedia alıntılı kayıt `kaynak:`ı main'de HÂLÂ var (2da07731 + POLONYA-ISG-1006, ve 45f6a33c).
Değişiklik: `neden:`e "⚠️ BU NOT BAYAT" eki (ara dönemin itilaf-emaneti olarak ayrıştırıldığı,
dayanakların s[] kaynaklarında olduğu, bu yüzden işaret YAZILMADIĞI) · `kaynak:`a Saint-Germain md. 91 +
Rapallo md. 2-3 (LNTS c.18) ATFI — alıntı kopyalanmadı. Tek hunk, yalnız Cres satırı; Polonya kayıtlarına dokunulmadı.
denetle: Cres öncesi/sonrası özet satırları BİREBİR aynı (yalnız metin alanı).

## 3. Diff sınavı
Hepsi LF, CR 0 · `-R` ✗. JASENOVAC: 3e4b3a98'e karşı ileri ✓ · KAYNAK-ZAYIF: 45f6a33c'ye karşı ileri ✓ · CRES: 2da07731+POLONYA ve 45f6a33c'ye karşı ileri ✓.

## 4. BULAMADIM
- Şefşâven 1924-11-15 için akademik/kurumsal kaynak bu turda ARANMADI (görev işaretlemekti).
- Jasenovaç/Brod fethinin ayı/günü: kaynak yok.
- HE Dubica'nın 1687-1701 Avusturya dönemi (SABAH-1004 B8 yan bulgu): dokunulmadı.

## 5. İSTEDİĞİM
- Uygulamadan sonra `py arac/paketle.py yenile` (paket_13/14/24 kaynakları değişti; paketlere dokunmadım).
- Akçakale⇄Jadlā' çevrimi için sahip.
