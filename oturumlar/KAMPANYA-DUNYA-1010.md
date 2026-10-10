# KAMPANYA: DÜNYA — MÖ 3500 … MS 2000

> Emre, 10 Ekim 2026 akşamı: *"ne bekliyorsun tüm devletleri şehirleri
> kronolojileri eklemek araştırtmak için acaba. neden bütün eksik devletleri
> emirlikleri krallık dükalık prenslik sultanlık ne varsa hepsini tespit edip
> hepsi için kronoloji maddelerini araştırıp koymuyorsun."*

**Haklı bir itiraz.** 10 Ekim 17:00'de tek bölge (Mezopotamya) atanmıştı;
bu belge kampanyanın TAMAMINI açar. Her oturum buraya bakar, kendi dilimini
bulur, başlar.

---

## §0 ÖLÇÜLEN AÇIK — niçin bu kampanya var

10 Ekim 17:40 ölçümü (`main`):

| Soru | Ölçüm |
|---|---|
| Künye toplam | **897** · en eski `f:` **MS 226** · MÖ künye **0** |
| 28 antik kimlikten kaçı yok | 🔴 **22** (`sumer · akkad · babil · asur · uruk · lagas · elam · hitit · urartu · frig · lidya · sparta · makedon · pers · part · selevk · kartaca · etrusk · mitanni · mari · isin · larsa`) |
| Kronoloji maddesi | 1.801 · **anılan künye 669** · 🔴 **hiç anılmayan 228 (%25)** |
| Yerleşim | 4.287 nokta · en eski `f:` **MS 330** · MÖ dönem **0** · `f:`<1281 yalnız **143** |
| `m:` (bölge) yazılı | 1.176 / 4.287 = **%27,4** |

⇒ Atlas bugün **1281-1923 Osmanlı çekirdeğidir.** Pencere dışında künye ve
kronoloji kısmen taşmış, **harita boyası hiç taşmamış**, MÖ'de hiçbir
katmanda tek kayıt yok.

---

## §1 MİMARÎ — niçin araştırma PARALEL, yazma SIRALI

🔴 **ARAŞTIRMA METİN ÜRETİR, VERİ ÜRETMEZ.** Her oturum yalnız kendi
`denetim/` dosyalarına yazar ⇒ **dosya çakışması YAPISAL OLARAK İMKÂNSIZ**
⇒ istenildiği kadar oturum aynı anda koşabilir.

```
ARAŞTIRMA (paralel, N oturum)        →  denetim/<AD>-{POLITY,KRONOLOJI,SEHIR}.csv
                                        denetim/<AD>.md   (gerekçe · kaynak · boşluk)
YAZMA     (sıralı, dosya başına 1)   →  data/*.js          koordinatör sıraya koyar
```

Bölme ölçütü `§7`in kendisi: **araştırmacı hiçbir `data/` dosyasına
dokunmaz.** Bu yüzden on oturum birbirini beklemeden çalışır.

---

## §2 DİLİMLER — her satır bir oturum

| Kod | Oturum adı | Evren | Beklenen aile (TAM DEĞİL, başlangıç) |
|---|---|---|---|
| **K0** | `KAMP-EKSIK-KRONOLOJI` | 🔴 **228 anılmayan künye** (pencere içi) | zaten dizinde, kronolojisi SIFIR — **beyan edilmiş borç** |
| K1 | `KAMP-MEZOPOTAMYA` | MÖ 3500 – MÖ 539 | Uruk · Ur · Lagaş · Umma · Kiş · Nippur · Akkad · Ur III · İsin · Larsa · Eşnunna · Mari · Eski Babil · Kassit · Mitanni · Asur (3 devir) · Yeni Babil · Elam |
| K2 | `KAMP-MISIR` | MÖ 3100 – MÖ 30 | Erken/Eski/Orta/Yeni Krallık · Ara Dönemler · Kuş/Napata/Meroe · Ptolemaios |
| K3 | `KAMP-ANADOLU-ANTIK` | MÖ 2000 – MÖ 330 | Hitit · Arzawa · Kizzuwatna · Urartu · Frigya · Lidya · Karya · Likya · Kilikya · Troya · İyonya kentleri |
| K4 | `KAMP-AKDENIZ` | MÖ 800 – MS 476 | Atina · Sparta · Korint · Thebai · Makedonya · Epir · Siraküza · Kartaca · Etrüsk · Roma (Cumhuriyet/İmparatorluk) · Numidya · Mauretanya |
| K5 | `KAMP-IRAN` | MÖ 700 – MS 651 | Med · Ahameniş · Selevkos · Part · Greko-Baktria · Sasani · Hurri/Kafkas |
| K6 | `KAMP-DOGU` | MÖ 2500 – MS 1000 | Harappa · Maurya · Gupta · Çola · Şang · Zhou · Qin · Han · Tang · Göktürk · Hun · Kuşan |
| K7 | `KAMP-ORTACAG` | MS 476 – 1281 | 🔴 **çekirdeğin HEMEN ÖNÜ** — Frank · Kutsal Roma · Papalık · Lombard · Vizigot · Emevî · Abbâsî · Fâtımî · Selçuklu · Gazneli · Kiev Rus · Bulgar · Sırp · Gürcü · Ermeni |
| K8 | `KAMP-20YY` | 1923 – 2000 | ulus devletler · sömürge çözülmesi · SSCB · Yugoslavya · iki Almanya |
| K9 | `KAMP-KUCUK-BIRIMLER` | 1281 – 1923 | 🔴 Emre'nin adıyla istediği: **emirlik · krallık · dükalık · prenslik · sultanlık · beylik · kontluk · hanlık · cumhuriyet** — pencere İÇİNDE eksik olanlar |

⚠️ Beklenen aileler **BİRER BAŞLANGIÇTIR, TAM DEĞİLDİR.** Bulduğunu ekle;
**bulamadığını `bulunamadı` diye ADIYLA yaz** — boş bırakma.

---

## §3 HER DİLİMİN ÜRETECEĞİ ÜÇ DOSYA

### `denetim/<AD>-POLITY.csv`
```
kimlik_onerisi · ad · tur · f · t · merkez · oncul · ardil · kaynak · kesinlik · not
```
`tur` = Emre'nin saydığı kovalar: `imparatorluk · krallik · sultanlik ·
emirlik · dukalik · prenslik · beylik · kontluk · hanlik · cumhuriyet ·
sehir-devleti · konfederasyon · teokrasi`

### `denetim/<AD>-KRONOLOJI.csv`
```
tarih · kesinlik · polity · baslik · metin · yer · kaynak · harita_degisimi
```
🔴 `harita_degisimi` = `EVET` ise bu madde bir `d:`/`v:` kırılmasına
karşılık gelir (Değişmez 2'nin evreni). `HAYIR` ise ayrı kovada kalır.
**En az: doğuş · başkent değişimi · büyük fetih · yıkılış.**

### `denetim/<AD>-SEHIR.csv`
```
ad · enlem · boylam · ILK_KAYIT_TARIHI · kesinlik · kaynak · arkeolojik_katman · not
```
🔴 **Emre'nin kuralı, AYNEN:** *"şehirler tarihî kayıtlara ilk hangi tarihte
düşmüş ise o tarihte başlayacak, o tarihte sahneye çıkacak."*
⇒ `ILK_KAYIT_TARIHI` = **en erken TARİHÎ KAYDIN** tarihi.
⇒ **Arkeolojik katman tarihi (C14, tabaka) TARİHÎ KAYIT DEĞİLDİR** —
`arkeolojik_katman` alanına yaz, `ILK_KAYIT_TARIHI`ne **YAZMA.**

### `denetim/<AD>.md`
Gerekçe · kullanılan kaynak seti · kullanılan kronoloji sistemi ·
`bulunamadı` listesi · yarım bıraktığın yerin ADI.

---

## §4 HERKESE AYNEN GEÇERLİ ALTI KURAL

1. 🔴 **TARİH UYDURMA.** Gün yoksa `YYYY-01-01`; **yıl yoksa YIL YAZILMAZ.**
   Hicrî kaynakta `CLAUDE.md §4`ün sözleşmesi. *"Temsilî"* damgası
   meşrulaştırmaz.
2. 🔴 **KIRMIZI ÇİZGİ** (`CLAUDE.md §4`): forum · blog · içerik çiftliği ·
   kaynaksız derleme · YZ üretimi metin · popüler tarih sitesi **KULLANILMAZ.**
   Vikipedi tek dayanak değildir. İslâm dünyası için **TDV birincil**.
3. 🔴 **ATLAS REFERANS DEĞİL.** Atlasın kendi kaydını, komşu kaydın gününü,
   atlas koordinatını DAYANAK YAPMA. Çelişkide atlas düzelir.
4. 🔴 **KRONOLOJİ SİSTEMİNİ BEYAN ET.** Mezopotamya/Mısır tarihleri
   yüksek/orta/düşük kronolojiye göre 56-120 yıl kayar. Hangisini
   kullandığını **her tarihte** yaz. İki kaynak çelişiyorsa önce
   *"aynı kronolojide mi"* diye sor — çelişki olmayabilir, **evrenleri**
   farklı olabilir.
5. 🔴 **KRAL LİSTESİ ≠ TARİH.** Sümer Kral Listesi mitolojik süreler taşır;
   dayanak yapma. Mısır'da Manetho aynı sınıf.
6. 🔴 **`bulunamadı` BİR SONUÇTUR.** Kaynak yoksa öyle yaz; boş hücre
   "araştırılmadı" ile "yok" arasını ayırt edilemez kılar.

---

## §5 ÖLÇEK — ve yarım bırakmanın doğru şekli

Bu kampanya tek turda bitmez. **Her dilim BİRİNCİ TURDA şunu teslim eder:**

```
① POLITY listesi — dilimin ana ailesi TAM (kaynaklı f/t)
② her polity için EN AZ doğuş + yıkılış maddesi
③ en az 25 şehir, ilk kayıt tarihiyle
```

Bitirince **teslim et, bekleme.** Devamı ikinci turda istenir.
🔴 Yarım bırakacağın yeri **ADIYLA** yaz. *"Bitti"* demeyeceğin yer bir
kusur değil bir **SINIRDIR** — ama sınırın **adı olmalı.**

---

## §6 TESLİM

TEK mesaj, tahtaya, üçlüyle: ① ne ölçtüm (kaç polity · kaç madde · kaç
şehir, **SAYIYLA**) ② ne bulamadım ③ ne istiyorum — + üç dosyanın yolu +
kullandığın kronoloji sistemi.

⚠️ Araştırmacı **öncelik/sıra hükmü vermez** (`§7.1`); o koordinatörde.
⚠️ Hiçbir `data/*.js` dosyasına **dokunma.** Yazma işi ayrı ve sıralıdır.
