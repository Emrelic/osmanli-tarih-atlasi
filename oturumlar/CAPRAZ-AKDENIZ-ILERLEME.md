# ÇAPRAZ AKDENİZ — ilerleme

> Oturum 1 Ağustos 2026, ~15:0x'te açıldı. Kullanıcının tek talimatı:
> *"ÇAPRAZ AKDENİZ — koordinatör oturumdan görevlerini öğren."*
> Brifing dosyada yoktu; koordinatörün oturum kaydından okundu (§1), onay
> istendi, **ve cevap beklenmeden** iki planda da başkasına ait olmayan
> kesitten ölçüme başlandı.

---

## 1. GÖREV TANIMI — okundu, ONAY BEKLİYOR

`oturumlar/CAPRAZ-GOREV.md` **plan A**'yı anlatıyor (üç oturum) ve orada
Venedik + Fransa **ÇAPRAZ BATI**'da. Koordinatörün kaydı ise **plan B**'yi
taşıyor:

```
ÇAPRAZ AKDENİZ = Venedik + Fransa (1536-1798)
gerekçe: "ikisi de denizci, ikisi de kapitülasyon muhatabı; 1536 k…"
```

⚠️ **İki belge çelişiyor ve bu benim çözeceğim bir çelişki değil** — plan B'ye
göre davrandım, koordinatöre bildirdim.

**Kilitlenmeyi tekrar etmemek için:** ÇAPRAZ BATI aynı boşluğa çarpmış ve
*"koordinatör beş oturum bekliyor, üç oturum brifing bekliyor"* diye yazmış.
Beklemedim; **kesişimden değil, ARTIKTAN başladım** — Fransa, iki planda da
başka kimseye ait değil ve BATI kendi raporunda *"Fransa'ya dokunmadım"* diyor.

### 1.1 Kapsam sorusu — koordinatöre soruldu, cevap beklenmiyor

*"1536-1798"* tarihi **Fransa'nın** ekseni olarak alındı, Venedik'in değil.
Sebep ölçülü: Venedik'in temas pencerelerinin çoğu bu aralığın dışında —
Modon/Koron 1500 · Kıbrıs 1489-1571 · Girit 1645-1669 · Mora 1684-1715 · ve
dizin kaydı `f:"697-01-01"`. 1536'yı Venedik'e de uygulasaydım **kesitin
yarısını görmeden** kapatmış olurdum.

---

## 2. YETKİ — bu oturumda uygulanan

- **Yazdığım dosyalar:** `oturumlar/CAPRAZ-AKDENIZ.md` + bu dosya. Başka hiçbir şey.
- `data/*.js` · `arac/*.py` · kök `*.md` — **okundu, yazılmadı.**
- Commit yol adıyla yapıldı (`ORGANIZASYON §13`): index paylaşılıyor.
- ⚠️ **Bu oturum yanlış klasörde açıldı** (`Projeler\Uibul`). Projeye mutlak yolla
  erişildi; ölçümler `arac/girdi.py`'nin kendi `KOK`'undan okuyor, yani girdi
  kümesi doğru. Yine de: `CLAUDE.md` bu oturumda **otomatik yüklenmedi**, elle
  okundu — aynı klasörde açılacak sonraki oturum için not.

---

## 3. ÖLÇÜM KAYITLARI

### Tur 1 — kesit sayımı (canlı girdi, `girdi.py yukle()`)

```
girdi: 976 nokta   yerlesimler.js 792 + yerlesimler_afrika.js 184
   s:"fransa"    92 pencere /  91 nokta   1281-01-01 → 1923-10-29
   s:"venedik"   80 pencere /  74 nokta   1281-01-01 → 1797-10-17
```

🔴 **VE BU, GÖREV TANIMINDAKİ SAYIYI YALANLIYOR.** `CAPRAZ-GOREV §1` tablosu
*"fransa 178/149 · venedik 83/78"* diyor. Ölçülen: **92/91 · 80/74.**

Fransa'da fark **iki kat.** Sebebi tahmin değil, `CLAUDE.md §5`'te kayıtlı hata
sınıfının aynısı: sayı, **merge bekleyen** `yerlesimler_avrupa.js`'i (228 nokta,
15 tanımsız kimlik) de sayan bir taramadan geliyor olmalı. O dosya
`GIRDI_DOSYALARI`'nda **yok** — yani o 86 pencere **çizilmiyor.**

📌 Ders, `CLAUDE.md §5`'in kendi cümlesiyle: *"ayrıştırıcıyı doğrulamak
yetmiyor, hangi DOSYALARI okuduğunu da doğrulamak gerekiyor."* Görev tanımının
kendisi bu tuzağa düşmüş ve **üç oturumun ilk iş seçimi o sayılara bakıyor.**
⇒ Koordinatöre bildirildi.

### Tur 2 — hayalet hesabı (dizin ömrü ↔ harita kullanımı)

```
fransa    dizin 987-01-01 → 1792-09-21 ("Fransa Krallığı")
          ölümden sonra açılan pencere  85
          en uzun tekil fazlalık        47.883 gün = 131,1 yıl
venedik   dizin 697-01-01 → 1797-05-12
          ölümden sonra açılan pencere  0
          en uzun tekil fazlalık        158 gün = 0,4 yıl   → MEŞRU (Campo Formio)
```

### Tur 3 — İyon zinciri, nokta nokta (`d:`/`v:`/`s:`/`isg:` tam dökümü)

12 nokta tarandı (7 İyon + Malta + Cenova + Dubrovnik + Preveze + Vonitsa).
**Zincir boşluğu (`!! BOSLUK`) sıfır** — yani `Değişmez 1` bu kesitte temiz ve
A-1'deki hata **sahipsizlik değil, YANLIŞ SAHİP.** Üç değişmezin hiçbiri bunu
göremiyor; `CLAUDE.md §3.5`'in sınıfı.

### Tur 4 — kaynak turu (TDV, `<title>` ile slug sınaması)

```
CANLI   yedi-ada-cumhuriyeti   "YEDİ ADA CUMHURİYETİ - TDV İslâm Ansiklopedisi"
CANLI   ayamavra               "AYAMAVRA - TDV İslâm Ansiklopedisi"
CANLI   suriye                 "SURİYE - TDV İslâm Ansiklopedisi"
```
`yedi-ada-cumhuriyeti` `CLAUDE.md §4`'ün canlı slug listesinde **yok** — eklenebilir.
⚠️ `parga` ve `preveze` **ÖLÜ** kayıtlı (§4); A-1'in Parga ucu bu yüzden
kaynaklanamadı ve **açık bırakıldı**, tahmin edilmedi.

---

## 4. TESLİM — 4 bulgu

| kod | konu | hüküm | ölçü |
|---|---|---|---|
| **A-1** | İyon adaları 1799-1807 | 🔴 ÇELİŞİYOR | 58,4 yıl-nokta · 7 nokta |
| **A-2** | `fransa` torba + dizin 1792'de ölü | 🔴 ÇELİŞİYOR (tanım) | 85 pencere · 131,1 yıl |
| **A-3** | BATI'nın B-1 Venedik hayaleti | 🟢 TUTMADI (ölçüm artefaktı) | — |
| **A-4** | Şam/Halep 1918 Fransız | 🟡 ÇELİŞİYOR (6 nokta) | ≈10,6 yıl-nokta |

Ayrıntı ve kaynak künyeleri: `CAPRAZ-AKDENIZ.md`.

📌 **Bu turda hiçbir çelişki ÇÖZÜLMEDİ** (`CAPRAZ-GOREV §8`). A-1'in ortasındaki
1799-03-05 → 1800-03-21 penceresi **kasten boş bırakıldı**: TDV o kesitin idarî
statüsünü bu maddede söylemiyor ve *"doğrulanamadı"* tam bir hükümdür.
