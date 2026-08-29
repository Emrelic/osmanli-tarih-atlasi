# BULGU — Değişmez 2s · ÇARPIŞMA kovası · 15 gün

```
OTURUM   ARAŞTIRMA 2S            TARİH   29 Ağustos 2026
NİÇİN    ORHANGAZİ M-1601 ①: "15 günü liste hâlinde yaz — gün · kaç geçiş ·
         yayılım km · hangi kimlik çiftleri. Alanın adını ve denetim dalını
         BEN yazacağım; senin listen olmadan o dalı sınayamam."
TABAN    py arac/denetle.py --ayrinti · 29 Ağu 14:2x
         Değişmez 2s: 963 YABANCI kırılması · 75 AÇIK (tavan 121) · 173 KAPSAM DIŞI
```

## 0. TABAN YENİLENDİ — ve çarpışma kümesi DEĞİŞMEDİ

25 sahiplik kaydı indikten sonra (commit `3cf33e9` + `08ab66d`) evren değişti;
`CLAUDE.md §11` gereği tabanı yeniden ölçtüm:

```
            28 Ağu 13:00      29 Ağu 14:2x
2s açık          80                75        (−5, beşi benim maddelerim)
TEK OLAY         40                35        (−5, aynı beş)
ŞÜPHELİ          25                25
ÇARPIŞMA         15                15        ← DEĞİŞMEDİ
```

🟢 ORHANGAZİ'nin *"o liste tabandan bağımsız"* öngörüsü **tuttu**: günler de,
geçiş kümeleri de, yayılım km'leri de birebir aynı çıktı. Yani bu 15 gün
veri büyümesinden etkilenmiyor — yapısal bir küme.

## 1. AYIRAN ÖLÇÜT — bir `if` ile sorulabilir

```
gün YYYY-01-01 biçiminde            (yuvarlak)
VE o günde ≥3 AYRI kimlik geçişi    (X→Y çifti sayısı)
VE en uzak iki nokta arası > 2000 km
⇒ ÇARPIŞMA: "günü bilinmeyen kırılma", madde eksikliği DEĞİL
```

⚠️ **Eşikler benim seçimim** (3 geçiş · 2000 km), tarihî inceleme değil.
Başka eşik başka dağılım verir. `denetle.py` dalını yazan bunu bilsin.

## 2. LİSTE — 15 gün

| gün | n | en yakın madde | geçiş | yayılım km | kimlik geçişleri |
|---|---|---|---|---|---|
| 1378-01-01 | 1 | 487 g | 3 | 4.960 | artuklu→akkoyunlu · delhi-sultanligi→vijayanagara · madurai-sultanligi→vijayanagara |
| 1379-01-01 | 4 | 731 g | 4 | 2.028 | akkoyunlu→mutahharten · altinorda→timurlu · cagatay→timurlu · eretna→taceddin |
| 1500-01-01 | 4 | 126 g | 5 | 8.498 | altinorda→kazak-hanligi · altinorda→nogay · svahili-sehirleri→portekiz · timurlu→buhara · —→ndongo |
| 1596-01-01 | 4 | 92 g | 5 | 8.646 | ahmednagar→babur-imparatorlugu · kirim→rusya · mazenderan-marasi→safevi · songhay-imparatorlugu→fas · —→rusya |
| 1600-01-01 | 3 | 152 g | 3 | 12.059 | hive→turkmen · svahili-sehirleri→portekiz · —→azuchi-momoyama |
| 1636-01-01 | 1 | 71 g | 5 | 5.572 | ahmednagar→babur-imparatorlugu · ahmednagar→bicapur · kuzey-yuan→qing-hanedani · ming-hanedani→hosut · —→safevi |
| 1663-01-01 | 2 | 266 g | 4 | 9.335 | nogay→rusya · pagaruyung→hollanda-dogu-hint · ternate-sultanligi→hollanda-dogu-hint · —→rusya |
| 1740-01-01 | 4 | 90 g | 4 | 8.088 | hive→afsar · portekiz→maratha · toungoo→hanthawaddy · —→rusya |
| 1784-01-01 | 2 | 257 g | 3 | 14.044 | babur-imparatorlugu→maratha · fransa→hollanda · —→rusya |
| 1785-01-01 | 2 | 623 g | 3 | 5.574 | afsar→buhara · funj→darfur · ingiltere→fransa |
| 1808-01-01 | 3 | 200 g | 4 | 10.970 | afgan-durrani→sih-imparatorlugu · banten-sultanligi→hollanda-dogu-hint · hausa-sehir-devletleri→sokoto · —→kacar |
| 1830-01-01 | 3 | 31 g | 4 | 9.412 | banjar-sultanligi→hollanda-dogu-hint · kaffa→cimma · —→oranj · —→transvaal |
| 1888-01-01 | 1 | 267 g | 4 | 8.883 | magindanao-sultanligi→ispanya · malay-sultanliklari→ingiliz-malaya · —→fransa-cumhuriyet · —→ingiltere |
| 1889-01-01 | 2 | 99 g | 3 | 8.546 | habesistan→italya · luba→belcika · malay-sultanliklari→ingiliz-malaya |
| 1898-01-01 | 2 | 229 g | 4 | 16.184 | fas→fransa-cumhuriyet · —→fransa-cumhuriyet · —→hollanda-dogu-hint · —→qing-hanedani |

**Makine için düz liste** (denetim dalına kopyalanabilir):

```
1378-01-01 1379-01-01 1500-01-01 1596-01-01 1600-01-01
1636-01-01 1663-01-01 1740-01-01 1784-01-01 1785-01-01
1808-01-01 1830-01-01 1888-01-01 1889-01-01 1898-01-01
```

## 3. NİÇİN MADDE YAZILMIYOR — iki yolun ikisi de yanlış

```
tek madde    → 4 ayrı kıtadaki 4 olayı TEK maddenin altına sokar
               = Emre'nin en çok şikâyet ettiği kusurun ta kendisi
dört madde   → günü BİLMEDİĞİMİZ hâlde dört gün UYDURMAK olur
```

🔴 Ve bunlar **uydurma tarih değil**: projenin kendi `YYYY-01-01` kuralının
(*"gün bilinmiyorsa YYYY-01-01 yaz"*, `§4`) farklı oturumlarca bağımsız
uygulanıp **1 Ocak'ta çarpışmasıdır**. Kural doğru, sonuç yanlış görünüyor.

## 4. ⚠️ ASIL TEHLİKE — sessiz açık, tavanı zorlamayan borç

Bu 15 gün bugün `2s`nin 75 açığının içinde ve tavan 121. Yani:

```
denetim "✓ 75 AÇIK (tavan 121)" der  →  SONUÇ: temiz
borç görünür bir alarm üretmez       →  kimse ona bakmaz
```

⇒ Bir **BEYAN kovası** gerekiyor: kırılma *"günü bilinmiyor"* diye
işaretlenir, `2s` onu **ayrı sayar** — ne sessiz açık, ne sahte kapalı.
Proje bunu iki yerde zaten yapıyor: `Değişmez 1` → `kasitli_bosluk` + `neden`;
`Değişmez 1b` → beyanlı boşluk 3/3.

📌 Ve bu, `CLAUDE.md`nin **on birinci kusur sınıfını** kapatır: *"doğru
öğrenilmiş bir dersin makinenin göremeyeceği yere yazılması. Sınavı tek soru:
bu bilgiyi bir `if` ile sorabiliyor muyum?"* Bugün soramıyoruz — §2'deki
ölçüt tam olarak o `if`i verir.

## 5. ÖLÇMEDİKLERİM — açıkça

```
· Hiçbir KAYNAK okunmadı. Bu bir VERİ DÖKÜMÜDÜR, tarihî hüküm değil.
· 15 günün HİÇBİRİ tek tek tarihî olarak incelenmedi. Bazılarının gerçek
  günü kaynakta BULUNABİLİR (ör. 1898 Fas-Fransa, 1889 Habeşistan-İtalya
  Uccialli sonrası). "Günü bilinmiyor" demek "günü bilinemez" demek DEĞİL.
· `n` sütunu denetimin KAPSAM İÇİ saydığı kırılma sayısı; geçiş listesi ise
  o günün BÜTÜN `s:` sınırlarından çıkarıldı ⇒ ikisi ayrışabilir.
  Yani geçiş listesi ADAY kümesidir, kapsam-içi küme değil.
· Eşikler (≥3 geçiş · >2000 km) ÖLÇÜLMÜŞ değil SEÇİLMİŞtir.
```
