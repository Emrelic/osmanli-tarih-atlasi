# SINIR-GAFRIKA-0907 — ilerleme

Oturum kimliği: `local_723a9a44-c39b-4097-b285-fb645a628779` (opus-5 · effort high)
Bölge: **Sahra altı Afrika** — Batı · Orta · Doğu · Güney
Ad alanı: `data/sinir_hukuki_gafrika.js` → `window.SINIR_HUKUKI_GAFRIKA`
Çıktı: `denetim/SINIR-HUKUKI-GAFRIKA-0907.json`

---

## TUR 1 — payda ve 1923 sınıflaması

### Aletler (üçü de `denetim/` altında, hiçbiri `data/`ye dokunmuyor)
```
ARAC-SINIR-GAFRIKA-ENVANTER-0907.py   NE girdi envanteri, alan kümesi DÖKÜLDÜ
ARAC-SINIR-GAFRIKA-KENAR-0907.py      kenar çıkarımı (+ --ates ateşleme dalı)
ARAC-SINIR-GAFRIKA-TDV-0907.py        slug canlılık taraması
ARAC-SINIR-GAFRIKA-GOVDE-0907.py      TDV gövdesinden CÜMLE çıkarır
ARAC-SINIR-GAFRIKA-1923-0907.py       1923 egemen tablosu + sınıflama
```

### 🟢 ÖLÇÜLDÜ — payda
```
NE girdi 258 · CONTINENT=Africa 55
kenar paylaşan çift (KÜRESEL)            342   ← KADEME-MODEL'in 342'si BAĞIMSIZ DOĞRULANDI
BENDE    (iki ucu da Sahra altı)          89
BEKLİYOR (tek ucu Sahra altı)             11   ← sahiplik kararı 1.MURAT'ta
```

### 🟢 ÖLÇÜLDÜ — 89 kenarın 1923-10-29 sınıflaması
```
uluslararasi              54  (%61)   iki yan AYRI egemenlik ⇒ metin ARANABİLİR
ayni_egemen_farkli_yapi   18  (%20)   aynı güç, ayrı hukukî yapı (manda ↔ koloni)
ic_idari_cizgi            17  (%19)   aynı idarî çatı (AOF · AEF · AMS · Ruanda-Urundi)
```
⇒ **39 kenar (%39) 1923-10-29'da ULUSLARARASI SINIR DEĞİLDİ.**

`hal` dağılımı (ORTAK §4 sözlüğü):
```
olculemedi   54   antlaşma metni HENÜZ ARANMADI  ← "bulunamadi" YAZMADIM
bulunamadi   35   o gün uluslararası sınır DEĞİLDİ ⇒ C'ye girmez, A/B'de kalır
hukuki        0   TUR 1'de hiçbir kenar kapatılmadı
```

### 1923 egemen tablosunun dayanağı — 48 girdi
```
🟢/🟢 13 kenar · 🟢/🟡 12 · 🟡/🟢 9 · 🟡/🟡 55
```
TDV gövdesinden **cümleyle** alınanlar: Senegal · Mali · Nijer · Burkina Faso ·
Gine · Fildişi Sahili · Benin (AOF) · Çad (AEF) · Kamerun (manda) ·
Orta Afrika C. (Fransız sömürgesi).
Ölü slug çıkanlar: `angola` · `kongo` · `namibya` · `gambiya` · `burundi` ·
`somaliland` · `guney-sudan` · `lesotho` · `botsvana` · `svaziland` ·
`ekvator-ginesi` · `sao-tome-ve-principe` · `yesilburun-adalari`.

---

## Öngörü sınavı — koşudan ÖNCE yazıldı

| # | öngörü | sonuç |
|---|---|---|
| ① | kenar 90–140 | 🔴 **ÇÜRÜK — ve kusur bende:** payda tanımını (BENDE mi BENDE+BEKLİYOR mü) öngörüyle birlikte sabitlemedim. 89 ↔ 100. |
| ② | `kimlik-degil` ≥ 1 | 🔴 **ÇÜRÜDÜ.** Bendeki 89'da `TYPE != Sovereign country` **0**. NE'nin iki `Indeterminate` Afrika kaydı (W. Sahara · Bir Tawil) **Kuzey Afrika'da**. |
| ③ | 🟢 kovası yarıdan az | ⚪ henüz sınanamadı — ama **tavan 54 (%61)**: 35 kenar zaten yapısal olarak C dışı. |
| ④ | ≥1 kenarda çizgi değişti | ⚪ henüz ölçülmedi (metin araması TUR 2). |
| ⑤ | `SUBREGION` bölgeyi tanımlamaya yetmez | 🟢 **TUTTU.** NE **Sudan'ı "Northern Africa"** sayıyor; saf süzgeç Sudan'ın **beş** Sahra altı kenarını sessizce düşürürdü. |

### 🔴 Kendi hipotezim de kısmen çürüdü
TUR 1'e girerken *"Sahra altı kenarların ÇOĞU 1923'te iç idarî çizgiydi"*
diye yazmıştım. Ölçüm: **%39** — çoğunluk değil, ama küçümsenecek de değil.
*"Çoğu"* demek ölçmeden verilmiş bir hükümdü; sayı onu düzeltti.

---

## Açık kalemler
1. **11 kenarın sahipliği** — 1.MURAT'tan cevap bekliyor (M-3175 · M-3182).
2. **`hal` sözlüğünde bir kova YOK:** *"o gün uluslararası sınır değildi"*
   üç değerin hiçbiriyle tam örtüşmüyor. Şimdilik `bulunamadi` + `sinif_1923`
   ile yazıyorum ve bunu **açıkça** bildirdim.
3. **`Somaliland` `kimlik-degil` sınavını `TYPE` ile geçemiyor** — NE onu
   `Sovereign country` yazıyor, oysa tanınmış bir devlet değil.
4. **AMS (Anglo-Mısır Sudanı) egemen kodu bir MODEL SEÇİMİ**, ölçüm değil:
   kondominyumu `GB-EG` diye ayrı kodladım ⇒ Sudan↔Kenya "uluslararası"
   çıkıyor. Başka türlü kodlansa sınıf değişir.
5. **TDV taneciklik boşluğu ölçüldü** (bkz. TUR 2 notu).
