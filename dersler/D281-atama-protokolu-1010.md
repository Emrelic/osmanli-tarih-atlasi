# Atama protokolü ①–⑧ — tam metin ve vakalar (10 Ekim hâli)

> Kimlik `D281` · `CLAUDE.md §7.3` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 7.3 🆕 ATAMA PROTOKOLÜ — kime vereceğini ÖLÇ, sonra ver (Emre, 24 Eylül 2026)
Emre: *"madem ölçmek bedava, ölçelim ve gerekirse taze oturuma verelim ve yeni
oturum isteyelim … görevi kime vermek gerektiğini ölçüp sonra işlem yapabiliriz."*

### ① SICAKLIK NASIL ÖLÇÜLÜR — ve hangi alan YALAN söyler
```
🔴 ÖLÇÜT: list_sessions → lastActivityAt.   İstem önbelleği 1 SAATLİK.
   🔥 SICAK  < 45 dk   · 🟡 ILIK 45-60 dk (soğuk say) · ❄️ SOĞUK > 60 dk
⚠️ `isRunning` SICAKLIK DEĞİLDİR — "şu an tur ortasında mı" der.
   Ölçülen vaka: ORTADOĞU `isRunning:false` ama son etkinlik 23 SANİYE önce.
⚠️ `get_usage` "unavailable" = canlı süreç yok ⇒ DOLULUK okunamaz.
   Soğukluk KANITI DEĞİLDİR; soğukluğu `lastActivityAt` söyler.
```

### ② BEDEL — ölçülmüş rakamlarla
```
TAZE oturum   82.561 token TABAN (araç 36.647 · MCP 16.959 · hafıza 9.109 ·
              beceri 4.696 · sistem 4.430 · CLAUDE.md 10.773) + alan öğrenme
SICAK oturum  bağlamı ÖNBELLEKTEN gelir → küçük kesir + yeni iş
SOĞUK oturum  bağlamının TAMAMI tam fiyat  (ör. %37 = 365.096 token)
```

### ③ KARAR — dört satır, sırayla
```
İLGİ yok                        → TAZE. Tecrübe ne olursa olsun. (Nokta.)
İLGİLİ + SICAK                  → ONA VER. Her dolulukta en ucuz seçenek.
İLGİLİ + SOĞUK + < 165.000      → ONA VER. Uyandırmak taze açmanın 2 katından az.
İLGİLİ + SOĞUK + > 165.000      → TAZE aç + SICAK bir ilgiliden TECRÜBE DEVRİ iste
```
📌 **165.000 = 2 × 82.561**, uydurma değil taze tabanın iki katı.
🔴 **DOĞRULUK BEDELİ EZER** (§7.1): soğuk ve ağır oturum, tazenin yeniden
kuramayacağı bir bilgiyi tutuyorsa ona verilir — bedeline bakılmaz.
⇒ Emre'nin *"soğumuş tecrübeliye hiç görev vermeyelim mi"* sorusunun cevabı
**HAYIR, mutlak kural olmaz**: soğuk ama HAFİF oturum en iyi değerdir,
soğuk ama YERİ DOLDURULAMAZ oturum zaten mecburîdir.

### ④ TECRÜBE DEVRİ — bağlamı değil BİLGİYİ taşı
İş zaten taze oturuma gittiyse geri alma (batığı ikiye katlar). Sıcak ilgiliden
TEK MESAJ iste: ① ne ölçtün ② hangi tuzağa düştün ③ neyi YAZMASIN (mükerrer)
④ hangi kaynak/slug tuttu. Bir mesaj, 80 binlik yeniden öğrenmenin yerine geçer.

### ⑤ İŞ TOPLAMA — sıcaklık yapay olarak KORUNMAZ, iş TOPLANIR
Bir oturumu sıcak tutmak için mesaj atmak, tur yakmaktır. Doğrusu: aynı
oturuma gidecek işleri **tek sıcak pencerede** ver, saatlere yayma.

### ⑥ YENİ OTURUM NE ZAMAN İSTENİR
İlgili+sıcak oturum yoksa, ilgili+soğuk olanlar 165.000'in üstündeyse ve
hazır kıta havuzu boşsa → Emre'den yeni oturum istenir. Tek satır yeter:
*"hazır kıtada N eksik."*

### ⑦ ÖLÇMENİN BEDELİ — endişe yersiz, ölçüldü
`get_usage` ≈ 1.100 token · `list_sessions` ≈ 1.500 · yanlış atama ≈ 82.000.
⇒ **Ölçmek tek bir yanlış atamadan ~18 kat ucuz. Atamadan önce HEP ölç.**

📌 **VAKA (24 Eylül 2026):** 10 kıta dağıtıldı, sonra ölçüldü — **4'ü yanlıştı**,
dördü de aynı hata: *sıcak ve ilgili oturum dururken taze açmak.* ASYA (%33,
sıcak) → İÇ ASYA + GD ASYA · ORTADOĞU (%37, sıcak) → ARABİSTAN · AVRUPA-ORTA
(sıcak) → A-AVRUPA (üstelik o listeyi BİZZAT O keşfetmişti). Kalan 6 doğruydu:
karşılık gelen oturumlar gerçekten soğuktu (AFRİKA 2s48dk, KOMŞU/OKYANUSYA/
AMERİKA ~3s). 🔴 İlk hükümde `isRunning`e bakıp "3 yanlış" demiştim; doğru
alana (`lastActivityAt`) bakınca 4 çıktı. **Yanlış alanla ölçmek, ölçmemekten
daha tehlikelidir: sayı verir ve güven telkin eder.**

### ⑧ 🆕 HAZIR KITAYA GÖREV VERMEK — genel kural (Emre, 27 Eylül 2026)
Emre: *"soğuk hazır kıtalara görev vermek daha tasarruflu daha doğru daha hızlı
olacak ise verebiliriz genel kural olarak; olmayacaksa hazır kıta iste."*
Cevap **şartlıdır ve şartı ÖLÇÜLÜR:**
```
① ADI "hazır kıta" olan oturum BOŞ SAYILMAZ  →  list_events MESAJ SAYISI ölçülür
② GERÇEKTEN BOŞ (yalnız /kita okumuş, ~10-20 mesaj), soğuk olsa bile → KULLAN
   bağlamı taze tabana yakındır (~90-100 bin ≈ 82.561) · fark küçük ·
   Emre'yi elle oturum açmaktan kurtarır  ⇒ EVET, genel kural budur
③ DOLU/tecrübeli + SOĞUK + bilgisi `denetim/*.md`de YAZILI → KULLANMA, TAZE aç
   ölçülmüş bedel: soğuk %37 oturum 365.096 · taze 82.561 + tek dosya (~5.000)
   ⇒ taze + disk devri ~4 KAT UCUZ, ve doğruluk kaybı YOK (ölçüm diskte)
④ DOLU/tecrübeli + SOĞUK + bilgisi YAZILMAMIŞ (yarım iş) → ONU UYANDIR
   `§7.3`ün "doğruluk bedeli ezer" maddesi burada yürürlüktedir
```
🔴 **VAKA — kural tam bu yüzden yazıldı (27 Eylül, paket 0077 dağıtımı):** üç
oturumun adı `OPUS HAZIR KITA 2309 00xx /kita`ydı; ölçülünce **290 · 279 · 56
mesaj** çıktı — üçü de dolu işçiydi (biri KRONO-0076-B'nin 24 maddesini ve 20
ek okuma kartını yapmış). Görev verilince adları görev adına çevrilmemişti
(`§7.2 ①` ihlali) ve havuz listede **boş görünüyordu.** ⇒ Ölçülmeden hazır
kıta sayılan oturuma iş vermek, dolu bir işçinin üstüne ikinci iş yığmaktır.
📌 Ve tersi de doğrudur (`F18`): defterin "hazır kıta 0" demesi de kanıt değil.
**Ad ve defter KAYIT tutar, `list_events` ÖLÇER.**
