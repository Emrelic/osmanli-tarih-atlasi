# ODAK-KAPAT-SIRBISTAN-1001 — `kronoloji_sirbistan.js` odaksız maddeleri

Koordinatör görevi (M-5724). `data/`ya YAZILMADI; öneri listesidir.

## 0. Ölçüm ve kaynak erişimi
- Odaksız **22** (görev metniyle aynı).
- TDV indirildi (curl, ham HTML → düz metin): `sirbistan` 200 · `kosova` 200 ·
  `ayastefanos-antlasmasi` 200 · `berlin-antlasmasi` 200 · `karlofca` 200 (antlaşma maddesi, göçü anlatmıyor).
- **TDV tuzakları (D211/D217) — ölçüldü:**
  - ② canlı slug, YANLIŞ madde: `ipek` 200 döndü ama **ipekçilik** maddesi ("1557'de burada 145 kişi
    çalışıyordu" bir ipek atölyesini anlatıyor — Peç Patrikliği DEĞİL). Rakam tuttuğu için tehlikeli (⑧).
  - ① ölü slug 302: `cirmen-savasi` · `pec` · `akkerman-antlasmasi` → arama sayfasına yönleniyor.
    Olay slug'ı ölünce olayın geçtiği YERE bakıldı (D217): Çirmen ve Peç cümleleri `sirbistan` maddesinden.

## 1. Tablo — 22 madde

| # | t | başlık (kısa) | kova | öneri | kaynak cümlesi (birebir, TDV) |
|---|---|---|---|---|---|
| 1 | 1217-01-01 | Sırbistan Krallığı ilan edildi | **C** | — | `sirbistan`: "…1217’de burada Sırbistan Krallığı ilân edildi." — "burada" önceki cümlelerde ÜLKEYİ gösteriyor; taç giyme yeri (Žiča) verilmiyor, atlasta da yok |
| 2 | 1331-01-01 | Duşan tahta çıktı | D | — | `sirbistan`: "…Stefan Duşan zamanına rastlar (1331-1346 arası kral…)" — yer yok |
| 4 | 1355-12-20 | Duşan'ın ölümü | D | — | `sirbistan`: "Stefan Duşan’ın 1355’te âni ölümünün ardından Sırp Devleti parçalanmaya başladı." — ölüm yeri yok |
| 5 | 1371-09-26 | Çirmen (Meriç) Savaşı | **A** | `yer_id:"Çirmen"` | `sirbistan`: "1371 Çirmen ve 1389 Kosova savaşları ile Osmanlı ordularına karşı yenilgiye uğrayan Sırplar…" — savaş yer adıyla anılıyor; Çirmen havuzda (41.72/26.20) |
| 6 | 1389-06-15 | I. Kosova Savaşı | **B** | atlasta yok: **Kosova Ovası** (ova) | `kosova`: "KOSOVA SAVAŞLARI … ilki 791 (1389), diğeri 852’de (1448) yapılan iki savaş." — Priştine havuzda, İTİLMEDİ |
| 7 | 1402-01-01 | Sırp Despotluğu kuruldu | D | — | TDV kuruluş yerini vermiyor (`d`'deki "başkent Belgrad" kaynakta yok) |
| 11 | 1448-10-17 | II. Kosova — despotluğun tarafsızlığı | **B** | atlasta yok: **Kosova Ovası** | `kosova`: (yukarıdaki cümle) · ⚠️ maddenin kaynağı `kronoloji_macaristan.js` — ATLAS, kaynak değil (D207) |
| 13 | 1463-01-01 | Peç Patrikliği kaldırıldı | **B** | 🔴 atlasta yok: **Peç (İpek)** | `sirbistan`: "Sırp Patriği Peç’te (İpek) oturmaktaydı." |
| 14 | 1557-01-01 | Peç Patrikliği ihya edildi | **B** | 🔴 atlasta yok: **Peç (İpek)** | `sirbistan`: "…Sokullu Mehmed Paşa’nın da rolüyle daha önce kaldırılmış olan Peç (İpek) patrikliği yeniden ihya edildi (1557)." |
| 15 | 1690-01-01 | Büyük Sırp Göçü | **B** | atlasta yok: **Karlofça** (varış) | `sirbistan`: "…1690 yılında büyük bir grupla … Kosova’yı terkederek Karlofça’ya (Karlovci) göç etti…" — göç bir hat; varış yeri Karlofça atlasta yok |
| 17 | 1766-01-01 | Peç Patrikliği kalıcı kaldırıldı | **B** | 🔴 atlasta yok: **Peç (İpek)** | `sirbistan`: "…bu patrikhâne 1766’da kaldırılarak bölgedeki kiliseler yeniden Fener Rum Ortodoks Patrikhânesi’ne bağlandı." |
| 18 | 1804-02-14 | Birinci Sırp Ayaklanması | **C** | — | `sirbistan`: "…1804’te Karadjordje … liderliğinde Sırp isyanı patlak verdi." — TDV yer vermiyor (Orašac yalnız `d`'de; atlasta da yok) |
| 21 | 1815-04-23 | İkinci Sırp Ayaklanması | **C** | — | `sirbistan`: "İkinci Sırp isyanı Miloş Obrenoviç isimli bir Sırp knezinin önderliğinde 1815 yılında patlak verdi." — Takovo kaynakta yok |
| 22 | 1826-10-07 | Akkerman Sözleşmesi | **A** (imza) | `yer_id:"Akkirman"` | TDV `akkerman-antlasmasi` 302 → YERE bakıldı (D217), `akkirman` 200: "1820 yıllarında tekrar şiddetlenen Osmanlı-Rus sürtüşmelerini sonuçlandırmak için yapılan antlaşma bu şehirde imzalandı." + "…imzalanan Akkirman Antlaşması ile Sırbistan’ın muhtariyeti … kabul edildi (7 Ekim 1826)." · 🔴 havuzda ad **"Akkirman"** — "Akkerman" yazılırsa ÇÖZÜLMEZ |
| 24 | 1830-10-17 | Özerklik fermanı | D | — | `sirbistan`: "Nihayet 17 Ekim 1830’da verilen bir imtiyaz fermanıyla Sırplar muhtar bir idare elde etti." |
| 26 | 1876-06-30 | Osmanlı'ya savaş ilanı | D | — | ilan |
| 27 | 1878-03-03 | Ayastefanos Antlaşması | **B** (imza) | atlasta yok: **Ayastefanos (Yeşilköy)** | `ayastefanos-antlasmasi`: "…müzakereler Ayastefanos’ta başladı ve 3 Mart 1878 tarihinde antlaşma imzalandı." |
| 28 | 1878-07-13 | Berlin Antlaşması | **A** (imza) | `yer_id:"Berlin"` | `berlin-antlasmasi`: "…Berlin’de bir kongrenin toplanması kararlaştırıldı." + "Bir ay devam eden kongre sonunda imzalanan Berlin Antlaşması altmış dört maddeden oluşmakta idi." (aynı madde, ardışık anlatı) |
| 30 | 1885-11-14 | Sırp-Bulgar Savaşı | D | — | `sirbistan`: "Bulgaristan 1885’te Doğu Rumeli eyaletini ilhak edince Sırbistan Bulgaristan’a savaş açtı." — savaş açma; Slivnitsa kaynakta yok |
| 32 | 1908-10-06 | Bosna ilhakına tepki | D | — | seferberlik/tehdit |
| 33 | 1912-10-08 | I. Balkan Savaşı'na giriş | D | — | savaş ilanı + bölge fethi |
| 34 | 1913-08-10 | Bükreş Antlaşması (1913) | **C** | — (Bükreş havuzda) | imza yeri yalnız ADDA; `sirbistan`taki "Bükreş Antlaşması" cümlesi **1812** antlaşmasıdır, 1913 değil (D211 ⑧ — rakam/ad tutuyor, tarihlediği olay başka) |

## 2. TOPLAM — 22
```
A   3   Çirmen · Akkirman · Berlin — TDV cümlesiyle, havuzda tam adla
B   7   Peç (İpek) ×3 · Kosova Ovası ×2 · Karlofça · Ayastefanos — İTİLMEDİ
C   4   1217 ("burada" = ülke) · 1804 · 1815 (TDV yer vermiyor) · Bükreş 1913 (ad + yanlış yıl tuzağı)
D   8   tahta çıkış · ölüm · kuruluş · ferman · savaş ilanı ×3 · seferberlik
```
⇒ Uygulanırsa dosya ODAKSIZ 22 → **19**. Yeni kırık atıf: Çirmen · Akkirman · Berlin havuzda birebir — 0.

## 3. Gözlem
🔴 **Peç (İpek) atlasta YOK** — Sırp Patrikhânesinin merkezi ve Osmanlı'nın İpek sancağı; bu
dosyada üç madde ona bağlı. Nokta açma kararına eklenmesi en çok kazandıracak tek ad.
Kosova Ovası bir ova; nokta çözmez, `odak_kutu_kaynak` ya da beyanlı `odak_yer` ister.
