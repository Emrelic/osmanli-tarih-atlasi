# ISGAL-BATI-0077 — hükümler ve ölçüm (27 Eylül 2026)

Kol: PAKET-0077 · 11 madde · şartname `oturumlar/ISGAL-BATI-0077.md`.
Uygulanabilir yama: `denetim/ISGAL-BATI-0077-yama.py` (yalnız `isg:` ekler; kayıtta
`isg:` varsa dokunmaz). **UYGULANMADI.** Koordinatör M-5217 ile `isg:`-yalnız
yetki verdi (kutu 36.3–40.7K · 26–31.6D), ama oturumun izin katmanı
(auto-mode sınıflandırıcısı, "paylaşılan kaynak") `data/yerlesimler.js`e yazmayı
REDDETTİ — eş oturum onayı kullanıcı onayı yerine geçmiyor. ⇒ Uygulama Emre'nin
ya da koordinatörün elinde:
```
py denetim/ISGAL-BATI-0077-yama.py data/yerlesimler.js           # kuru koşu
py denetim/ISGAL-BATI-0077-yama.py data/yerlesimler.js --uygula  # 6 nokta
py arac/uret_devirler.py                                         # tarama katmanı
```
Kutu dışı Tekirdağ `ONERI` sözlüğünde; `--oneri` bayrağıyla eklenir (7 nokta).

### Kopya üzerinde `denetle.py` (data/'ya dokunmadan, yerlesimler.js yerine yamalı kopya)
```
                 önce (HEAD)                    sonra (7 nokta, Tekirdağ dâhil)
Değişmez 2i   129 İŞGAL kırılması, 1 açık    139 İŞGAL kırılması, 1 açık (tavan 3)
öteki bütün satırlar (1 · 1b · 1c · 2 · 2s · 2t · 4* · 5* · 7) BİREBİR AYNI · SONUÇ: temiz
```
Aletin ateşlendiği ispatı: +10 = yeni 11 ayrık uç günü − 1 (1922-09-06 Bilecik'te
zaten vardı). Yeni 10 kırılmanın **0**'ı açık.

## 1. Ölçüm

### 1a. Sınıf teşhisi — H-0072 / H-0078 sorusu: noktasızlık mı, eksik `isg:` mi?
Batı Anadolu kutusu (36.3–40.7 K · 26.0–31.6 D): **109 nokta**, 109'u da
`data/yerlesimler.js`te. Şartnamenin verdiği `yerlesimler_anadolu_0914.js`in bu
kutuda **0** noktası var.
1919–22 Yunan/İtalyan `isg:` taşıyan: **11** (İzmir · Manisa · Aydın · Bursa ·
Uşak · Kütahya · Eskişehir · Bilecik · Afyon · Muğla · Antalya).

⇒ **İkisi birden, ama birinci sebep EKSİK `isg:`**: Balıkesir, Alaşehir, Tire,
Birgi, Ayasuluk, Söke, Kuşadası, Bergama, Ayvalık, Edremit, Mihaliç, Kirmasti,
Mudanya, Gemlik, İnegöl, Yenişehir, Bodrum, Marmaris, Milas, Burdur NOKTA OLARAK
VAR, `isg:` YOK. İkinci sebep noktasızlık: Akhisar (Manisa), Soma, Kırkağaç,
Salihli, Turgutlu, Ödemiş, Nazilli, Kula, Gediz, Eşme, Bandırma **yok** — İzmir →
Uşak arası (Salihli–Kula–Eşme hattı) tek başına Uşak peteğinin büyüklüğünü açıklıyor.

### 1b. Kronoloji (Değişmez 2i) — 11 maddenin BAŞLANGIÇ maddeleri mevcut
`olaylar_p0057.js`: 1919-05-11 Marmaris/Bodrum/Kuşadası · 05-26 Manisa/Aydın ·
06-28 Burdur · 1920-06-22 yaz taarruzu · 07-08 Bursa · 07-20 Doğu Trakya ·
08-29 Uşak · 10-25 İnegöl/Yenişehir · kurtuluş maddeleri 1922-08-26 … 09-11.
Yamadaki 7 pencerenin 14 ucunun **14'ü** ±30 gün içinde maddeli (ölçü aşağıda).

### 1c. Kaynak taraması — TDV birincil, ham HTML'den doğrulandı
| Yer | işgal | kurtuluş | kaynak | durum |
|---|---|---|---|---|
| Tire | 1919-05-28 | 1922-09-04 | TDV tire | ✓ yamada |
| Ayasuluk (Selçuk) | 1919-05-22 | 1922-09-08 | TDV ayasuluk | ✓ yamada |
| Balıkesir | 1920-06-30 | 1922-09-06 | TDV balikesir-kongreleri | ✓ yamada |
| İnegöl | 1920-10-25 | 1922-09-06 | TDV milli-mucadele · Selvi, TTK 2024 | ✓ yamada |
| Yenişehir (Bursa) | 1920-10-25 | 1922-09-06 | aynı | ✓ yamada |
| Tekirdağ | 1920-06-20 | 1922-11-13 | TDV tekirdag | ✓ yamada (H-0073) |
| Gelibolu | 1920-08-04 | 1922-10-03 | TDV gelibolu | ✓ yamada (H-0073) |
| Alaşehir | 1920-06-26 | **TDV: 4 Eylül 1921** | TDV alasehir | 🔴 çelişki — §3 |
| Akhisar (Manisa) | TDV: "1921-1922" · TDV milli-mucadele: Haziran 1920 | Eylül 1922 | iki TDV maddesi çelişiyor | nokta da YOK |
| Bergama | 1919 (yıl) | 1922 (yıl) | TDV bergama | gün yok |
| Birgi | 1920 (yıl) | 1922 (yıl) | TDV birgi | gün yok |
| İznik | 1920-09-21 | — | TDV iznik: "dört defa el değiştirdi" | tek pencere YANLIŞ olur |
| Bodrum (İt.) | 1919-05-11 | — | TDV bodrum: "Millî Mücadele'nin başarıyla sonuçlanması üzerine çekildiler" | bitiş yok |
| Marmaris (İt.) | 1919-05-05 | — | TDV sevr-antlasmasi | bitiş yok |
| Kuşadası (İt.) | 1919-05-13 | — | TDV sevr-antlasmasi | bitiş yok |
| Milas (İt.) | 1919 · (Çelebi 2008: 2 Haziran) | 1921 (yıl) | TDV milas | bitiş günü yok |
| Burdur (İt.) | 1919-06-28 | 1921 (yıl) | TDV isparta + burdur | bitiş günü yok |
| Batı Trakya (Fr.) | 1919-10-15 | Yunan: 1920-05-22 | TDV bati-trakya | H-0064, §3 |

Akademik (TDV dışı, açıkça): Haluk Selvi, "Bursa Vilayeti'nde Yunan Vahşet ve
Soykırımı", TTK 2024 (ttk.gov.tr/wp-content/uploads/2024/05/8-Haluk-Turkce.pdf,
PDF'ten doğrulandı) · Mevlüt Çelebi, "Menteşe Sancağı'nda İtalyan ve Yunan
İşgallerine Tepkiler", İLKE S.21, 2008 (alt ajan okudu, ben doğrulamadım) ·
Barış Metin – Nimet Sert, "Milli Mücadele Yıllarında Salihli'nin İşgali ve
Kurtuluşu", Akademik Bakış 14/27, 2020 (Salihli 1920-06-23 → 1922-09-05; nokta
yok; alt ajan okudu, ben doğrulamadım).
REDDEDİLDİ: Nail Topal, kusadasikulturelmiras.com (akademik değil, §4 kırmızı
çizgi ara bölgesi) — Kuşadası/Söke 1922 günlerini veren TEK kaynaktı.

### 1d. Tuzaklar (kayda)
- `balikesir-kongreleri`nin "Ayvalık (29 Mayıs) · Soma (9 Haziran) · Akhisar (23
  Haziran) · Salihli (22 Haziran)" listesi **cephe kuruluş** günleridir, işgal
  günü DEĞİL (D211 ⑧).
- Ölü/yanlış slug: `/yenisehir` → Yunanistan'daki Yenişehir · `/turgutlu`,
  `/cesme`, `/bayindir`, `/kirmasti` başka maddeye düşüyor · Doğu Trakya'da
  `corlu uzunkopru kesan malkara vize havsa ipsala enez babaeski silivri` 302.
- Selvi İnegöl/Yenişehir işgaline **27 Ekim** diyor, TDV **25 Ekim** — TDV esas.
- TDV sevr: İtalyanlar Selçuk'a **16 Mayıs 1919**'da girdi; TDV ayasuluk Yunan
  işgali 22 Mayıs. İtalyan evresinin bitişi kaynakta yok → yazılmadı.

## 2. Hükümler

| Madde | Hüküm | Gerekçe |
|---|---|---|
| H-0053 | **cozulemedi** | Marmaris 05-05 · Bodrum 05-11 · Kuşadası 05-13 başlangıçları TDV'de VAR; üçünün de İtalyan **boşaltma günü** TDV'de ve doğrulanabilen akademik kaynakta YOK. `isg:` `t:` zorunlu; uydurulamaz. Önceki kol (YAMA-ISGAL1919) da aynı yerde durmuş. |
| H-0055 | **zaten-dogru** | Manisa `isg:` 1919-05-26 (TDV manisa) · Aydın 05-27 / 07-04 (TDV aydin) veride var; H-0081 görselinde (1921-01-10) ikisi de taralı görünüyor. |
| H-0060 | **cozulemedi** | H-0053 ile aynı üç yer, aynı sebep. |
| H-0061 | **senin-kararin** | Burdur: başlangıç 1919-06-28 kesin (TDV isparta), bitiş TDV burdur'da yalnız YIL (1921). Seçenek A: `t:"1921-01-01"` (§4 "gün bilinmiyorsa YYYY-01-01" — ama İtalyan varlığını ~6 ay kısa gösterir ve o güne düşen maddesi yok → 2i açık +1). Seçenek B: kaynak bekle. **Önerim B.** |
| H-0064 | **senin-kararin** | Kapsam Batı TRAKYA, bu kolun Batı Anadolu'su değil. Ölçtüm: TDV bati-trakya "Fransız kuvvetlerinin Batı Trakya'yı işgali (15 Ekim 1919)" · Yunan işgali 22 Mayıs 1920. Veride Gümülcine/İskeçe/Dedeağaç/Dimetoka/Sofulu/Ferecik/Çirmen… 1920-05-14/27'ye kadar `bulgaristan-kralligi` — Fransız/İtilaf evresi YOK, ve Yunan'a geçiş günleri kendi arasında iki değerli (14 ve 27 Mayıs), TDV 22 diyor. Çare iki katlı: `isg:` Fransız evresi (motor koşusu istemez) + `s:` günlerinin 22 Mayıs'a çekilmesi (koşu ister). Noktalar 5+ dosyaya dağılmış (yerlesimler.js · ek24 · seyrek · sinir_kuze…) ⇒ sahiplik kararı sende. 1919-10-15 için kronoloji maddesi YOK (Neuilly 11-27 madde, 43 gün uzak). |
| H-0071 | **sirada** (kısmî) | Balıkesir 1920-06-30 yamada. Alaşehir bitiş çelişkisi (§3), Akhisar/Soma/Kırkağaç **nokta yok**. |
| H-0072 | **sirada** (kısmî) | İzmir→Bursa arası: Balıkesir yamada; Bergama/Birgi yalnız yıl; Mihaliç/Kirmasti/Mudanya/Gemlik/Ulubat/Gölyazı/Kite için gün veren kaynak bulunamadı. Tam kapanması için Akhisar–Soma noktaları ŞART (B yolu). |
| H-0073 | **sirada** (kısmî) | Doğu Trakya'da `isg:` yalnız Edirne + Kırklareli'de. Tekirdağ (1920-06-20 → 1922-11-13) ve Gelibolu (1920-08-04 → 1922-10-03) yamada. Kalan ~25 Doğu Trakya noktası (Lüleburgaz, Çorlu, Uzunköprü, Keşan, Malkara, Vize, Havsa, İpsala, Enez…) için TDV'de ya madde yok (302) ya da yalnız "1918-1922" (luleburgaz). |
| H-0078 | **sirada** (kısmî) | İzmir→Uşak arası: Tire + Ayasuluk yamada; Alaşehir §3'te; Salihli–Turgutlu–Kula–Eşme **nokta yok** — Uşak'ın ekslav görünmesinin asıl sebebi bu. |
| H-0079 | **sirada** | İnegöl + Yenişehir yamada (TDV + Selvi, iki uç da kaynaklı). |
| H-0081 | **sirada** (kısmî) | Bu partinin toplamı. Yama 7 nokta ekler; tam düzgün görünüm için hem B yolu (yeni noktalar) hem de gün veren kaynak gerekiyor. |

## 3. Senin kararın / açık sorular
1. **Dosya sahipliği (M-5211):** yama `data/yerlesimler.js`e yazar. Ya bana yetki
   ver (yalnız `isg:`), ya da `py denetim/ISGAL-BATI-0077-yama.py data/yerlesimler.js --uygula`
   komutunu sen koştur. Motor koşusu İSTEMEZ; `uret_devirler.py` yeter.
2. **Alaşehir:** TDV alasehir "26 Haziran 1920'de Yunan işgaline uğrayan şehir, 4
   Eylül 1921'de … geri alındı". 1921 Eylül'ü Sakarya dönemidir, Yunan cephesi o
   sırada Alaşehir'in 250 km doğusunda; TDV'nin yıl hatası olması kuvvetle
   muhtemel ama bunu gösteren akademik kaynağı DOĞRULAYAMADIM. §4 "TDV esas"
   der → 1921 yazarsam İzmir–Uşak arasında 1 yıllık yeni bir delik açılır. Yazmadım.
3. **B yolu — yeni noktalar** (`data/yerlesimler_p77_bati.js` + `girdi.py`
   satırı senin elinle + petek koşusu): Akhisar (Manisa) · Soma · Salihli ·
   Turgutlu · Kula · Eşme · Ödemiş · Nazilli. Her birinin 1281–1923 bütün
   `s:`/`d:` geçmişi kaynaklanmalı — ayrı bir iş, bu kolda BAŞLAMADIM.
