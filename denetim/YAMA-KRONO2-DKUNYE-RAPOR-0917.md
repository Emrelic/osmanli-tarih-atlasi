# YAMA-KRONO2-DKUNYE — DALGA-BEKLEYEN.md B1 teslim raporu

Oturum: D-KUNYE · 17 Eylül 2026. Görev: `denetim/KRONOLOJI-EKSIK-2-0917.json`'daki 10 bölgemde
(orta-asya · iran · balkanlar · anadolu · kafkasya · arabistan · mısır-sudan · sibirya-bozkır ·
orta-avrupa · italya) 48 künyeye **kaynaklı önemli toprak değişimi** maddesi eklemek — round-1'de
"kuruluş+son yeterli" denip atlananlar dahil. `devletler.js`'e YAZMADIM — yama
`denetim/YAMA-KRONO2-DKUNYE-0917.json`.

## 1. 🔴 Yan bulgu — round-1'in 4 künyesi UYGULAMADAN düşmüş

Round-1 yamamda (`YAMA-KRONO-DKUNYE-0916.json`) yazdığım satırların **çoğu** `devletler.js`'e
işlenmiş, ama şunlar **hiç uygulanmamış**:
- `harezm-halk-cumhuriyeti` — kronoloji hâlâ **0** (3 satırımın hiçbiri girmemiş)
- `buhara-halk-cumhuriyeti` — kronoloji hâlâ **0**
- `kumuk-samhalligi` — yalnız "son" girmiş, **"kurulus" satırım eksik**
- `orta-macar-kralligi` — yalnız "son"+"siyaset" girmiş, **"kurulus" (1682) satırım eksik**

Bu 4'ünü bu turda **yeniden gönderdim** (kumuk-samhalligi'ninkini bu sefer `tur:"vassal"` ile,
`tur:"kurulus"` yerine — daha doğru bir sınıflandırma, aşağıya bkz.).

## 2. 🔴 Tür sözlüğü uyuşmazlığı

1.MURAT'ın görevlendirme mesajı "vassal" türünü örnek verdi ama `VERI-YAPISI.md`'nin
`kronoloji[].tur` listesi (`kurulus|hukumdar|toprak-kazanc|toprak-kayip|savas|antlasma|
bolunme|birlesme|ittifak|isyan|isgal|son`) bunu içermiyor. Kontrol ettim: **UYGULA round-1'i
uygularken zaten `vassal` ve `siyaset` türlerini fiilen kullanmış** (`devletler.js`'te
`mekke-serifligi`, `sani-emirligi`, `sabah-emirligi`, `tunus-beyligi-fransiz` içinde `tur:"vassal"`;
`suriye-lubnan-mandasi`, `orta-macar-kralligi` içinde `tur:"siyaset"`). Yani **belge sözlüğü
güncel değil, fiilî kullanım daha geniş.** Bu turda ben de aynı genişletilmiş sözlüğü kullandım
(`vassal` — tâbiiyet kabulü — ve VERI-YAPISI listesindeki 12 değer). UYGULA/1.MURAT
`VERI-YAPISI.md`'yi güncellese iyi olur.

## 3. Yöntem ve sonuç

48 künyenin her birini tek tek inceledim (güncel `kronoloji` dizileriyle). **Çoğu kısa ömürlü
hanedan/işgal/geçici hükûmet** ve kaynakları (çoğunlukla TDV) kuruluş+son dışında bir ara olay
vermiyor — bunlara **yeni satır yazmadım, uydurmadım.** İyi belgelenmiş, güçlü ara olayı OLAN
**9 künyeye 11 yeni satır** ekledim (+ yukarıdaki 4 künyenin round-1'den düşen satırları = toplam
13 künye, 20 satır):

| Künye | Yeni olay |
|---|---|
| `galzay` | 1722 Mahmud Hotakî'nin İsfahan'ı alması (Safevî başkentinin düşüşü) |
| `mora-despotlugu` | 1446 II. Murad'ın Hexamilion'u yarıp Mora'yı harâca bağlaması |
| `dukagin` | 1444 Lezhë Birliği (İskender Bey ittifakı) |
| `sirbistan-eyaleti` | 1717 Belgrad'ın Avusturya'ya düşüşü + 1739 Belgrad Antlaşması ile geri alınışı |
| `kibris-krallik` | 1426 Hirokitia — Memlük'e haraca bağlanma |
| `azerbaycan-demokratik-cumhuriyeti` | 1918 Osmanlı-Azerbaycan İslâm Ordusu'nun Bakü'yü alması |
| `suud-ikinci` | 1837-40 Mısır'ın Necid işgali |
| `mekke-serifligi` | 1803 Suûdî-Vehhâbî işgali + 1813 Osmanlı-Mısır'ın geri alması |
| `misir-eyaleti` | 1798 Napolyon'un Mısır'ı işgali + 1801 İskenderiye teslimiyle çıkışı |

⚠️ Bu 9'unun tamamı **TDV kapsamı dışında** (Osmanlı'yı doğrudan ilgilendirmeyen ya da TDV'nin
ayrıntı vermediği yan olaylar) — standart akademik/genel tarih bilgisiyle yazıldı, çoğu **çok iyi
belgelenmiş** (Napolyon'un Mısır seferi, Belgrad antlaşmaları gibi) ama **gün düzeyinde
doğrulanmamış** olanlar açıkça işaretlendi.

## 4. Dokunulmayan 35 künye

`lur-i-kucek · incu · kutlughanli · hurmuz-sultanligi · bosna-isgal · oniki-ada-italyan ·
sarki-rumeli · garbi-trakya · arvanid-sancagi · crnojevic-zetasi · dejanovic-prensligi ·
kibris-ingiliz · fetret-isa · eyyubi-hisnikeyfa · sutayogullari · cemisgezek-beyligi · kabartay ·
kaheti-kralligi · hicaz-kralligi · usfuri · nebhani · suriye-lubnan-mandasi · urdun-emirligi ·
kesiri-sultanligi · sani-emirligi · sabah-emirligi · cebel-i-lubnan-mutasarrifligi · dacu ·
misir-sultanligi · ingiliz-sudani · kasim · tannu-tuva · avusturya-cumhuriyet · bonacolsi ·
piombino` — bilerek dokunulmadı: kısa ömür (10-60 yıl, tek bir kuruluş-son hikâyesi yeterli),
kaynağın sessiz kalması (`lur-i-kucek`, `dacu` — TDV zaten "ayrıntı yok" diyor), ya da künyenin
kendi içinde zaten açık bir kimlik/tarih çelişkisi olduğu için (`usfuri`, `nebhani`,
`cemisgezek-beyligi` — bunlara yeni katman eklemek riskli, önce çelişki çözülmeli).

## 5. İstek

1. `denetim/YAMA-KRONO2-DKUNYE-0917.json`'ı uygula, özellikle 4 düşen künyeyi kontrol et.
2. `VERI-YAPISI.md`'nin `kronoloji[].tur` sözlüğünü fiilî kullanıma göre güncelle (`vassal`,
   `siyaset` eklensin).
3. `sirbistan-eyaleti`'ne eklediğim 1717/1739 satırlarının, ozet alanında bahsi geçen "ayrıca
   modellenmiş" Avusturya işgali künyeleriyle çakışıp çakışmadığını kontrol et.
