<!-- DURUM: CALISIYORUM | 2026-08-16 | 9 nokta yazildi (2 kur:'lu sehir + 6 kabile dolgu + 1 siyasi govde kunyesiz), devam ediyor -->

# NOKTA OKYANUSYA — İLERLEME

**Kimlik:** `local_9d907ce9-25a6-4bfd-96f5-e944cafb32cf` · **Görev:** M-0128/M-0140, kesin tebliğ M-0161/M-0162.
**Dosyam:** `data/yerlesimler_ek30.js` (bu oturumun ürettiği tek dosya, henüz `girdi.py`ye bağlı değil).

## İş 0 — ölçüm (koordinatörün M-0109/M-0111'deki sayılarını kendim doğruladım, B10)

`girdi.yukle()` ile 2527 noktalık tüm veri tarandı, bölge kutularıyla süzüldü:
```
Avustralya ANAKARASI    0 gerçek nokta   (M-0111'in "Avustralya 2" sayısı YANLIŞTI —
                          o 2 nokta Kupang/Rote, coğrafi olarak ENDONEZYA/Timor)
Yeni Zelanda             0 nokta
Yeni Gine                9 nokta — 2 gerçek sahipli + 7 kasıtlı_boşluk (hepsinin cinsi zaten yazılı)
Polinezya/Hawaii/Fiji/Tonga   0 nokta (hiç veri yok)
```

## İş 1 — üçüncü parti (7 nokta, kümülatif)

```
Sydney       kur:1788-01-26   s: ingiltere(1788-1901) → avustralya(1901-1923)
Auckland     kur:1840-09-18   s: yeni-zelanda(1840-1923)
Avustralya İç Kesimi (Arrernte bölgesi)      kasitli_bosluk:true bos:"kabile"
Aotearoa Māori Yerleşimi (Kuzey Adası içi)   kur:1300-01-01 kasitli_bosluk:true bos:"kabile"
Yap                                          kasitli_bosluk:true bos:"kabile"
Rapa Nui (Paskalya Adası)                    kur:1200-01-01 kasitli_bosluk:true bos:"kabile"
Lapaha (Muʻa), Tongatapu                     kur:1220-01-01 s: tui-tonga-imparatorlugu(1220-1845) → [tonga-kralligi devralacak, künye zaten var]
```

🔴 **KÜNYE EKSİĞİ — M-0180 usulüyle çözüldü, bekletmiyorum.** Koordinatörün kararı:
"kabile/devletsiz" boşluk kayıtları künye istemez (Yap, Rapa Nui zaten bu sınıfta,
sorun yok). Ama Tuʻi Tonga gerçek bir siyasî gövde (`s:[{d:"..."}]`) — kaynak onu
"empire" diye tarif ediyor, "kabile" demek YANLIŞ olurdu. M-0180: nokta yaz, kendi
seçtiğin slug'la, künyeyi koordinatör açsın. Yaptım: `d:"tui-tonga-imparatorlugu"`
KENDİ SEÇTİĞİM slug — `devletler.js`de KÜNYE YOK, açılması gerekiyor. Dosya
`girdi.py`ye bağlı olmadığı için bugün hiçbir şeyi bozmuyor (M-0180'in gerekçesi).

**Kaynak (Lapaha/Tuʻi Tonga):** UNESCO World Heritage Centre, "The Ancient Capitals
of the Kingdom of Tonga" (whc.unesco.org/en/tentativelists/5167) — Muʻa/Lapaha
1220 civarında kalıcı üçüncü ve son başkent oldu (22 kraliyet mezarı/langi bu
döneme tarihleniyor); hanedan çizgisi geleneksel olarak ~950 CE'ye dayanıyor,
imparatorluk gücünün zirvesi 1200-1500. **Bitiş tarihi (1845-12-04) `devletler.js`
içindeki mevcut "tonga-kralligi" künyesinin BAŞLANGIÇ tarihiyle BİREBİR eşleşecek
şekilde seçildi** — devralma sorunsuz, boşluk/çakışma yok.

**Doğrulama (yazdıktan sonra geri okuma):**
```
7/7 kayıt sorunsuz ayrıştı, 0 bilinmeyen alan
3 km kuralı: 7/7 TEMİZ — en yakın komşu 1240-8760 km arası
```

## Dördüncü parti (9 nokta, kümülatif) — Hawaii + Fiji "kabile" dolgu

```
Hawaii Adaları (Birleşme Öncesi — moku/aliʻi sistemi)   kabile
Bau (Fiji Konfederasyonları)                             kabile
```
İkisi de gerçek: 1795/1874'e kadar TEK bir hanedan yoktu, rakip birden fazla
krallık/konfederasyon aynı anda vardı (Hawaii: Hawaiʻi·Maui·Oʻahu·Kauaʻi, her
biri kendi aliʻi nui'si; Fiji: Kubuna/Bau·Burebasaga/Rewa·Tovata). Tek bir siyasî
gövdeye indirmek yanlış olurdu, o yüzden "kabile" (teşkilatlı, merkezî devlet yok)
— künye İSTEMİYOR, M-0180'in birinci kolu.

**Kaynaklar:** EBSCO Research Starters "Wars of Hawaiian Unification"; Museum of
Archaeology and Anthropology (Cambridge) "Fiji Chiefdoms"; University of the South
Pacific (Suva) kaynaklı akademik çalışmalar (D. Routledge ve ötekiler).

⚠️ **Suva'nın kendi `kur:1849` noktasını YAZMADIM** — şartname onu Sydney/Auckland
gibi düz bir kolonyal kur: noktası gibi örnek veriyor ama gerçekte 1849-1874 arası
(trading post → resmi İngiliz ilhakı) için ne "ingiltere" ne "fiji" künyesi tam
oturuyor; bu üçüncü bir künye sorusu, henüz sormadım — bir sonraki turda soracağım.

**Doğrulama:** 9/9 kayıt sorunsuz ayrıştı, 0 bilinmeyen alan, 3 km kuralı 9/9 TEMİZ.

## Bitiş ölçütü — sayıyla
**"9 nokta yazıldı, 3'ünde kaynak+kur (Sydney/Auckland/Lapaha), 6 boşluk kaydı
(hepsi kabile), 0 `bulunamadı`. 1 künyesiz kimlik koordinatöre bildirildi
(`tui-tonga-imparatorlugu`). Suva'nın kolonyal kur: noktası künye belirsizliğinden
henüz YAZILMADI — soracağım."**
