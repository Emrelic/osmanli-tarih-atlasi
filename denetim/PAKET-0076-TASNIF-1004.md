# PAKET-0076-TASNIF-1004 — parti-emrelic-0076'nın işlenmemiş 106 maddesinin tasnifi

4 Ekim 2026. Yalnız okundu, hiçbir dosyaya yazılmadı (veri, CEVAP.json, app.js).
Hüküm verilmedi, yalnız tasnif yapıldı. Hüküm koordinatörün.

## 🔴 ANA BULGU — 106 maddenin 92'si ZATEN İŞLENMİŞ, cevapları ana CEVAP.json'a hiç BİRLEŞTİRİLMEMİŞ

23 Eylül'de paketi sekiz oturum işledi. Bunların yalnız ikisi (EKOKUMA-0076-A ve
KRONO-0076-B) ana `kutu/giden/parti-emrelic-0076/CEVAP.json`a yazdı; 58 maddenin
kaynağı bu. Kalan oturumların cevapları `denetim/` altında **ayrı dosyalarda**
duruyor ve hiç birleştirilmedi:

```
denetim/KRONO-0076-A-CEVAP.json       28 madde  (106'dan 28'i)
denetim/KRONO-0076-C-CEVAP.json       17        (17)
denetim/SINIR-BERLIN-0076-CEVAP.json  25        (25)
denetim/SINIR-CIZGI-0076-CEVAP.json   23        (23; H-0043 iki dosyada)
denetim/HARITA-0076-CEVAP.json        19        (0; hepsi zaten ana dosyada)
EKOKUMA-0076-B                    CEVAP dosyası YOK — 14 kart data/ekokuma_p76c.js'te,
                                  madde eşlemesi denetim/EKOKUMA-0076-B.md'de
```
Ölçüm: 106 bekleyenden 92'si yan dosyalarda cevaplı. Kalan 14 madde, p76c'nin 14
kartıyla birebir örtüşüyor (H-0098 · 0111 · 0113 · 0114 · 0115 · 0129 · 0130 · 0131 ·
0133 · 0141 · 0150 · 0154 · 0159 · 0164; `EKOKUMA-0076-B.md` hepsini adıyla anıyor).
⇒ **106 maddenin 106'sına da 23 Eylül'de bakılmış.** Kutu "106 bekliyor" diyor çünkü
birleştirme adımı atlanmış.

Kartların yayında olduğu ölçüldü: `js/app.js:11219-11225`, `_EKOKUMA_DOSYA_ADLARI`
listesinde p76b…p76h'nin yedisi de var (commit 45791bcb, "105 ek okuma kartı indi").

## SAYIM
```
işlenmemiş görünen 106
  ✔ işlenmiş, cevabı yazılmamış — iş YOK            59   (kart 47 · zaten-dogru 10 · cozulemedi 2)
  ≡ once-cozuldu                                      3
  ↻ tekrar (açık, sonraki pakette yeniden yazılmış)  11
  📖 ek-okuma (kart YOK)                              6
  📐 ölçülecek                                        0
  ❓ emre                                             4
  🔧 iş                                              21
  🟡 şüpheli                                          2
                                                    ---
                                                    106
```

### 🔴 İSTENEN TEK SAYI: kaçı gerçekten yapılacak iş
```
yapılacak madde   🔧 21 + 📖 6 + ↻ 11 + 🟡 2 = 40 madde   (❓ 4 karar ayrı)
bu 40 maddenin altındaki ayrı iş (kök) ≈ 22:
  🔧 21 madde → 15 kök        (Berlin noktasızlık yamaları tek dosyada hazır)
  ↻ 11 madde → 4 kök          (8'i tek karar: D-RENK-0073)
  📖 6 kart · 🟡 2 mükerrerlik ölçümü
iş YOK: 59 + 3 = 62 madde       (yalnız CEVAP.json'a birleştirilmeleri gerekiyor)
```
⚠️ ↻ 11'in 8'i Emre kararı beklediği için bugün yapılamaz (D-RENK-0073 a/b/c).
Bugün başlanabilir iş: **🔧 21 + 📖 6 + ↻ 3 (Katar, Karlofça, Eflak/Boğdan) = 30 madde, ≈ 21 kök.**

### Önerim (karar senin)
Birleştirme betiği yazılırsa 62 madde tek adımda kapanır. Hükümler yan dosyalarda zaten
`HUKUMLER` kelimeleriyle yazılmış. İstisna: SINIR-CIZGI'nin H-0002 ve H-0126 için
yazdığı `sirada`, kart yayında olduğu için `cozuldu` olmalı. p76c'nin 14 maddesi için
hüküm satırı yok; `EKOKUMA-0076-B.md`den üretilmesi gerekiyor.

---

## KALEM KALEM

Lejant:
- **[DOSYA hüküm]**: yan dosyadaki hüküm (KA = KRONO-0076-A · KC = KRONO-0076-C ·
  SB = SINIR-BERLIN-0076 · SC = SINIR-CIZGI-0076 · EB = EKOKUMA-0076-B).
- ✔: iş yok, yalnız birleştirilecek.

### ✔ İşlenmiş, cevabı yazılmamış — iş YOK (59)

**Kart yazılmış ve yayında (47)**
```
H-0001  ✔ [KA cozuldu]  p76d sebep-sonuc-islahat-fermani-1856
H-0002  ✔ [SC sirada→kart var]  p76h islahat-fermani-tanzimatin-eksigi (yayında)
H-0005  ✔ [KA cozuldu]  p76d teknik-arazi-kanunnamesi-1858
H-0006  ✔ [KA cozuldu]  p76d sebep-sonuc-kuleli-vakasi-1859 (+ padisah tartisma-osmanli-darbeleri-tipoloji)
H-0010  ✔ [KA cozuldu]  p76d teknik-darulfunun-dort-deneme + tartisma-universite-kurulus-yili-1453-mi-1863-mu
H-0013  ✔ [KA cozuldu]  p76d teknik-eyaletten-vilayete-1864
H-0016  ✔ [KA cozuldu]  p76d kimdir-yeni-osmanlilar-cemiyeti
H-0018  ✔ [KA cozuldu]  p76d teknik-sura-yi-devlet-1868-idari-yargi
H-0019  ✔ [KA cozuldu]  p76d teknik-galatasaray-mekteb-i-sultanisi-1868
H-0021  ✔ [KA cozuldu]  p76d teknik-bulgar-eksarhligi-1870-kilise-ve-kimlik (TDV iç çelişkisi notta)
H-0030  ✔ [KA cozuldu]  p76d teknik-kanun-i-esasi-1876-sistem
H-0039  ✔ [KA cozuldu]  p76d kimdir-ali-suavi-ve-ciragan-baskini
H-0055  ✔ [KA cozuldu]  p76d tartisma-kibris-1878-beklenen-ingiliz-destegi
H-0056  ✔ [KA cozuldu]  p76d antlasma-ayastefanos-berlin-farki-1878  (⚠️ "ve harita" yüzü yok)
H-0061  ✔ [KA cozuldu]  p76d sebep-sonuc-iskenderiye-1882-ingiliz-cikarmasi
H-0062  ✔ [KA cozuldu]  p76d tartisma-ingiltere-dost-mu-dusman-mi-1856-1882
H-0098  ✔ [EB]  p76c berlin-1878-kotur-irana-verildi; Kotor kaydı zaten-dogru
H-0111  ✔ [EB]  p76c osmanlicilik-islamcilik-turkculuk-uc-tarz
H-0113  ✔ [EB]  p76c abdulhamid-31-mart-rolu-tartismasi
H-0114  ✔ [EB]  p76c hamid-devri-sansur-ve-jurnal-teskilati
H-0115  ✔ [EB]  p76c abdulhamid-halk-nezdinde-itibari
H-0117  ✔ [KC cozuldu]  p76f p76f-arnavut-ihtida
H-0119  ✔ [KC cozuldu]  p76f p76f-italya-libya-amac
H-0122  ✔ [KC cozuldu]  p76f p76f-libya-direnis
H-0124  ✔ [KC cozuldu]  p76f p76f-sisam-ozerklik  (kaydın 13 Mart 1912 günü kaynaksız — KC notunda)
H-0125  ✔ [KC cozuldu]  p76f p76f-onikiada-hikaye
H-0126  ✔ [SC sirada→kart var]  p76h kiklad-adalari-1566-1830 (yayında)
H-0128  ✔ [KC cozuldu]  p76f p76f-balkan-bozgun
H-0129  ✔ [EB]  p76c selanik-etnik-tarihsel-aidiyet-tartismasi
H-0130  ✔ [EB]  p76c kuzey-ege-adalari-averof-hamidiye
H-0131  ✔ [EB]  p76c balkan-bozgununda-ordunun-zaafiyeti
H-0132  ✔ [KC cozuldu]  p76f p76f-arnavutluk-istiklal
H-0133  ✔ [EB]  p76c babiali-baskini-1913-enver-yakup-cemil
H-0140  ✔ [KC cozuldu]  p76f p76f-londra-antlasmasi  (⚠️ "kaybedilen toprakları göster" harita yüzü = 🔧 B kökü)
H-0141  ✔ [EB]  p76c balkan-savaslarinin-sonuclari
H-0142  ✔ [KC cozuldu]  p76f p76f-mahmud-sevket-pasa
H-0150  ✔ [EB]  p76c ikinci-balkan-savasi-1913  (+ olaylar yaması 23↔29 Haziran: EKOKUMA-0076-B-YAMA-olaylar.js — İNDİ Mİ ölçülmedi)
H-0152  ✔ [KC cozuldu]  p76f p76f-istanbul-antlasmasi-1913
H-0154  ✔ [EB]  p76c bozcaada-imroz-bogazlar-icin-onemi
H-0157  ✔ [KC cozuldu]  p76f p76f-osmanli-alman-ittifak
H-0158  ✔ [KC cozuldu]  p76f p76f-kapitulasyon-ilga
H-0159  ✔ [EB]  p76c sultan-osman-resadiye-el-konulan-gemiler
H-0160  ✔ [KC cozuldu]  p76f p76f-goeben-breslau
H-0161  ✔ [KC cozuldu]  p76f p76f-karadeniz-baskini-sebep
H-0162  ✔ [KC cozuldu]  p76f p76f-karadeniz-baskini-zarar  (zayiat dökümü bulunamadı, uydurulmadı)
H-0163  ✔ [KC cozuldu]  p76f p76f-cihad-ilani-1914
H-0164  ✔ [EB]  p76c osmanli-halifesini-taniyan-tanimayan-cografyalar
```
**Hata değildi (10)**
```
H-0004  ✔ [SC zaten-dogru]  1856 Çerkes birlikleri fiilen bağımsız, Rus hakkı hukukî — harita doğru
H-0040  ✔ [SB zaten-dogru]  Batum 1878-07-13 Rus (TDV batum); görüntü komşulardan
H-0058  ✔ [SB zaten-dogru]  Arta 1881 YUN, Preveze/Vonitsa 1913 — veri doğru
H-0076  ✔ [SC zaten-dogru]  1884 Sudan: Hartum/Dongola/Sennar hâlâ Mısır tâbisi — doğru
H-0078  ✔ [SC zaten-dogru]  1885-01-26 Mehdî'ye geçen 35 yer; yığın gün yaklaşık ama savunulabilir
H-0097  ✔ [SC zaten-dogru]  Şehrizor/Halepçe 1917-18'e kadar Osmanlı — doğru
H-0099  ✔ [SC zaten-dogru]  Vâdi Sirhan/Hamad kasıtlı dolgu (yan borç: iki noktaya kaynak alanı yok)
H-0107  ✔ [SB zaten-dogru]  Bosna 1878-1908 d:+isg: temsili doğru; "Avusturya'nın ilgisi" kartı p76g-avusturya-bosna-ilgisi
H-0135  ✔ [SB zaten-dogru]  1. Balkan Yunan işgali isg: ile doğru
H-0153  ✔ [SB zaten-dogru]  Ahtapolu/Mustafapaşa 1913-09-29 Bulgar doğru; bulgar hafızası kartı p76g-balkan-savasi-bulgar-hafizasi
```
**Denendi, olmadı (2)**
```
H-0054  ✔ [SC cozulemedi]  93 Harbi oku Edirne'den başlıyor; Tuna geçişi ayağı için kaynaklı rota yok
H-0127  ✔ [KC cozulemedi]  Nikarya: TDV'de madde yok, kaynaksız kart yazılmadı
```

### ≡ once-cozuldu (3)
```
H-0026  ≡  [KA sirada idi] Abdülaziz hal/intihar-cinayet/darbeler → üç kart yayında:
           padisah supheli-olum-abdulaziz-1876 ("Resmî açıklama intihardı; beş yıl sonraki soruşturma cinayet dedi")
           · p76b abdulaziz-neye-direndi-hal-1876 · padisah tartisma-osmanli-darbeleri-tipoloji
H-0035  ≡  [KA sirada idi] 93 Harbi sebebi → 0082/H-0102 zaten-dogru: "93 Harbi sebep kartı var ve üç 24 Nisan 1877 maddesine de bağlı"
H-0137  ≡  [SC sirada idi] işgal lejantında aynı devlet çok satır → 0077/H-0030 cozuldu: "İşgal lejantı her işgalciyi tek satır basıyor"
```

### ↻ tekrar — açık ve yeniden yazılmış (11) · ÖNCELİKLİ
```
H-0149  ↻  Katar yarımadası yarım (1913) — ikizleri: 0076/H-0023 · 0077/H-0029 · 0081/H-0024 · 0082/H-0101 (hepsi sirada).
           Emre aynı şikâyeti 5. kez yazdı. SC: iç dolgu noktası penceresiz; TDV katar kaynağı SC notunda.
H-0116  ↻  Karlofça Bosna-Sava hattı düz kiriş + 1699-1918 açık — ikizi 0082/H-0004 (senin-kararin: kaldır / Sava'ya oturt / lejant)
H-0037  ↻  93 Harbi'nde Eflak-Boğdan Osmanlı tâbisi rengi — ikizi 0076/H-0038 (ana CEVAP'ta sirada). SC: Romanya müttefik bağımsız,
           iki şık da kaynağa uymuyor; tâbilik 9 Mayıs 1877'de bitmeli
── D-RENK-0073 sınıfı: "D hattı o gün geçerli, renk ona oturmuyor". Tek karar (a/b/c) Emre'de, 0077'de 6 kez yeniden yazıldı
   (0077/H-0014 · H-0015 · H-0065 · H-0066 · H-0070 · H-0084) ──
H-0041  ↻❓  1878 Kars: hat d1829-osm-rus [E] o gün geçerli, anakronizm YOK; dolgu hattı okumuyor
H-0042  ↻❓  GENEL KURAL talebi (8 görsel): çizim zaten pencereye bakıyor; eksik yarı = renk yaslama (motor)
H-0059  ↻❓  1881 Prut/Tuna hattı f 1881-03-26, doğru tarihte
H-0118  ↻❓  1910 Libya-Tunus hattı tam o gün (Trablus Sözleşmesi)
H-0120  ↻❓  1911 Refah hattı 1906 [E] yürürlükte
H-0144  ↻❓  1913 Dobruca hattı Berlin dayanaklı, doğru tarihte
H-0155  ↻❓  1913 Yunan kuzey hattı f 1913-08-10 Bükreş, "sonraki sınır" DEĞİL
H-0156  ↻❓  1913 İran hattı f TAM O GÜN (İstanbul Protokolü); "çok uzun zamandır gösteriliyor" iddiası ölçümde çürüdü
```

### 📖 ek-okuma — kart YOK (6)
```
H-0003  📖  "Avrupa devletler sistemi nedir" + Paris'in önemi. Paris'e bağlı 3 kart var (antlasma-paris-1856 · sebep-sonuc-paris-1856
            · savas-kirim-savasi); eksik olan kavram kartı. TDV kapsamıyor, akademik kaynak gerek
H-0007  📖  Suriye-Lübnan toplulukları (Dürzî, Mârûnî, Süryânî, Keldânî, Yezîdî, kiliseler…) genel kartı. Yan kart: p76b bunv-lubnan-1861
            1860 iç savaşını anlatıyor, topluluk dökümü değil. Çapa 1860-05-30
H-0014  📖  Girit ve Kıbrıs'ın Rum/Helen kimliği, hak iddiasının tarihî dayanağı. Çapa 1866-08-21. KA: TDV girit gövdesi çekilemedi
H-0017  📖  Girit imtiyazları bağladı mı kopardı mı · Osmanlıcılık niçin tutmadı · dış mihrak mı iç dinamik mi (tartışma).
            Kısmî örtüşme: p76c osmanlicilik-islamcilik-turkculuk-uc-tarz
H-0024  📖  "Vatan yahut Silistre" + Nâmık Kemal. ⚠️ kişi kartı (data/kisiler.js) da isteniyor, iki şema
H-0025  📖  Hersek İsyanı / Balkan isyanlarının sebebi (baskı · vergi · dış mihrak · ihtilâl fikirleri · devletin gücü) tartışması.
            Çapa 1875-06-19
```

### 🟡 şüpheli — mükerrerlik ölçülmeden karar verilemez (2)
```
H-0012  🟡  Çerkes sürgününün dünyada/sonrasında karşılanışı. p75b tartisma-p75b-cerkes-surgunu-1864 VAR ("TDV 'birçok araştırmacıya
            göre mod[ern soykırım]'…") ve 0076'dan ÖNCEki paketten. KA bu kartı anmamış, yalnız karadeniz kartlarını anmış.
            p75b kartı istenen "tarihçi/siyasetçi yorumları" yüzünü karşılıyorsa ≡, karşılamıyorsa 📖. İçeriği okunmadı
H-0029  🟡  V. Murad'ın şahsiyeti/akıl sağlığı. padisah tartisma-deli-padisahlar-karsilastirma bu çapaya bağlı (1876-08-31).
            KA: "yeni kart ancak bunun ötesine geçerse". Ötesi istenen şehzadelik/yetişme/sinir hastalığı; karşılanıyor mu ölçülmedi
```

### ❓ emre — kapsam/tercih kararı (4)
```
H-0009  ❓  [KA senin-kararin] her padişahın ölüm maddesine "nasıl bilirdiniz" övgü+yergi kartı: 27 tekil kimlik / ≈82 kart. Kapsam kararı
            (örnek var: p76b abdulaziz-nasil-bilirdiniz)
H-0052  ❓  [SB senin-kararin] 9 Balkan ülkesinin Osmanlı anlatısı, her biri ayrı kart. Var olanlar: bakis-bulgar (H-0051 ≡) · bakis-romen
            · p76g-bulgaristan-kurtulus-anlatisi. Kalan 7 ülke; kapsam kararı
H-0066  ❓  [SC senin-kararin] "1800'den beri topraklar kapanın elinde" — 7 bölge × ayrı kart mı tek tartışma mı
H-0080  ❓  [SC senin-kararin] 1885-02-05'te 7 Kızıldeniz kıyı noktası (Sevakin, Sinkat, Hayya, Muhammed Kol, Derudeb…) İngiltere'ye geçiyor,
            maddesi YOK (Değişmez 2 yanlış temizi). Kaynaklı gün yok; SC taslak + ara çözüm önerdi, seçim bekliyor
```

### 🔧 iş — somut düzeltme (21 madde, ≈15 kök)
Durum ölçüldü (4 Ekim): SINIR-BERLIN yamaları **İNMEMİŞ**. Vranya, Leskofça, Kurşumlu,
Prokuplye, Nikşiç, Antivari, Ülgün, Kolaşin, Mangalia, Tulça, Hırşova, Lofça, İslimye,
Hasköy ve Burgaz noktası 0. Köstendil hâlâ `d:` →1913-05-30 (A1). Silistre hâlâ romanya
1913-05-30 (H-0050). Kırklareli hâlâ `s:` bulgaristan 1912-10-24 (B1).

Tarif dosyası: `denetim/SINIR-BERLIN-0076-YAMA-yerlesimler.js`. Sıra: önce A sınıfı,
sonra B. B, KRONO-0076-C ile eşleşmeden uygulanmaz.

```
── kök: Berlin 1878 noktasızlığı (A sınıfı, koşu ister) ──
H-0044  🔧  Bulgaristan/Doğu Rumeli: Ziştovi·Lofça·İslimye·Burgaz·Hasköy yok
H-0106  🔧  = H-0044 kökü (1908 Krallık 14 nokta); "Osmanlı tepkisi" yüzü ✔ p76g-bagimsizlik-1908-osmanli-tepkisi
H-0045  🔧  Yunanistan: İzdin 1832 olmalı (TDV izdin, üç cümle) + ikinci kusur SB notunda
H-0046  🔧  Sırbistan: Vranya·Leskofça·Kurşumlu·Prokuplye yok
H-0060  🔧  = H-0046 kökü (Sırbistan Krallığı)
H-0047  🔧  Dobruca: Tulça·Hırşova·Mangalia yok
H-0048  🔧  Karadağ: Nikşiç·Antivari·Ülgün·Kolaşin yok — kazanımın tamamı haritada silik
H-0049  🔧  Niğbolu: sınır değil kademe ayrıtı; Niğbolu·Plevne·İhtiman s:→v: (A5)
H-0053  🔧  Sofya v: 1878-01-04 → 13 Temmuz'dan önce Rus askerî idaresi (A4); Niş yüzü zaten-dogru
H-0050  🔧  Silistre'nin Romanya'ya geçişi Londra 1913-05-30 değil Bükreş 1913-08-10 (+ ikinci kusur)
── kök: Bosna 1878 işgali eksik 4 nokta (A3) — ikizi ana CEVAP'ta 0076/H-0095 (sirada) ──
H-0043  🔧  Bosna Brodu·Dubiçası·Novi'si·Krupa isg:avusturya yok (KA + SB iki ölçüm aynı)
H-0057  🔧  = H-0043 (batı Bosna Osmanlı kalmış görünümü)
H-0108  🔧  birleşim: H-0043 + H-0044 + H-0046 kökleri, kendi kusuru yok
── tek tek ──
H-0134  🔧  İşkodra: 1913-04-23 Karadağ'a düştü, 14 Mayıs boşaltıldı → Arnavutluk; veri doğrudan arnavutluk yazıyor
H-0143  🔧  Midye-Enez doğusunda 15 nokta Bulgar (Edirne, Kırklareli, Vize, Demirköy, İğneada…) — Londra'ya aykırı
H-0036  🔧  Kars 1877-11-18→1878-03-03 eksklavı (105 gün): 93 Harbi'nde isg: katmanı hiç yok (Kars 0/34, Tuna 0/58).
            + sefer okları. HARITA-0076 hükmü M-5037
H-0123  🔧  işgal taraması 2:1 — YAMA HAZIR, İNMEMİŞ: denetim/SINIR-CIZGI-0076-YAMA-app_js.js (K 8→6). Ölçüldü: js/app.js:4620
            hâlâ `var K = 8`. Yalnız app.js, koşu istemez. Yan kalem ❓: işgal paleti devlet renginden ayrı (devirler.js, üretici)
── kök B: Balkan Savaşı de facto/de jure karışık (14 isg / 11 s:) — B1/B2 ──
H-0138  🔧  Bulgar ele geçirmeleri s: (ilhak) olarak yazılmış, Yunanlılar isg:; ikisi de isg: olmalı, barışta renge dönmeli
H-0145  🔧  = H-0138 Sırbistan tarafı (13 kayıt s:)
H-0146  🔧  = H-0138; Çirmen/Dimetoka/Kumçiftliği antlaşma günüyle kayıtlı, harekât izi yok. + TDV 20 / atlas 21 Temmuz 1913
H-0151  🔧  adım adım Balkan Savaşı kronolojisi — B1/B2'den SONRA; tanecik kapsamı ❓ Emre
```

---

## BİRLEŞTİRME — 4 Ekim 2026 (koordinatör onayı, M-5782 cevabı)
```
hedef   C:/claudemre/kutu/giden/parti-emrelic-0076/CEVAP.json
yedek   CEVAP.json.BIRLESTIRME-1004.yedek (60979 bayt = özgün)
önce    58  {cozuldu 37 · sirada 15 · senin-kararin 2 · olculecek 2 · once-cozuldu 1 · zaten-dogru 1}
eklenen 62  {cozuldu 47 · zaten-dogru 10 · once-cozuldu 3 · cozulemedi 2}
sonra  120  {cozuldu 84 · sirada 15 · zaten-dogru 11 · once-cozuldu 4 · cozulemedi 2 · senin-kararin 2 · olculecek 2}
geri okuma: 120 ✓ · 62'nin hükmü doğru ✓ · eski 58 bayt bayt aynı ✓ · hükümsüz parti maddesi 44 (beklenen 44)
```
Kurallar: yan dosyadaki hüküm AYNEN taşındı (her kayda `oturum` + `birlestirme` alanı).
Üç istisna, üçü de beyanlı: H-0002/H-0126 `sirada→cozuldu` (`onceki_hukum` saklı) ·
EKOKUMA-0076-B'nin 14'ü `cozuldu` (kaynak hüküm yoktu; `delil` kart + app.js satırı) ·
≡ 3 madde `once-cozuldu` (`onceki_hukum: sirada` saklı, künye `not` başında).
Eski sıra korundu, biçim özgün (indent 1). Betik: scratchpad `birlestir.py` (kuru koşu varsayılan).
⚠️ `ClaudEmre-kutu/paketler/parti-emrelic-0076/CEVAP.json` kopyasına dokunulmadı; `tasi.py esitle` iki yönlü eşitler.

## Ölçüm defteri (yeniden üretmek için)
```
betikler (scratchpad, Türkçe metin py -c'ye girmedi):
  dok.py      → PARTI 164, ana CEVAP 58, bekleyen 106; 0077-0082 PARTI+CEVAP dökümü (0083 PARTI yok)
  eslestir.py → 106'nın yan dosyalardaki cevapları + kart dosyalarında H- geçişi
  kartlar.py  → data/ekokuma*.js'ten 733 kart (id · kisa · olay); 1853-1915 çapalı 151 kart
ölçülmedi:
  · p75b Çerkes kartı ve deli-padisahlar kartının İÇERİĞİ (yalnız 'kisa' satırı okundu) → 🟡 ikisi
  · EKOKUMA-0076-B-YAMA-olaylar.js (H-0150 günü) indi mi
  · H-0056'nın "ve harita" yüzü, H-0140'ın "kaybedilen toprakları göster" yüzü başka yerde yapıldı mı
  · SB'nin 0076 sonrası tek tek alt kalemleri (A1-A5, B1/B2) kısmen inmiş olabilir; yalnız
    yukarıdaki 5 örnek ölçüldü, beşi de İNMEMİŞ
```
