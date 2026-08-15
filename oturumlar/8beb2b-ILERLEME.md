<!-- DURUM: BEKLIYORUM | 2026-08-16 | dosyam data/yerlesimler_8beb2b.js (0 nokta, KASITLI) · urun NOKTA degil OLCUM ve KAYNAK · 1 hatam var, kaydedildi -->
# 8beb2b — ilerleme

**Kimlik:** scratchpad `8beb2b2b-…` ⇒ dosya adım `8beb2b` (tahta `M-0166`)
**Görev:** [oturumlar/NOKTA-SIBIRYA-2.md](NOKTA-SIBIRYA-2.md)
**Bölgem:** YAKUTİSTAN · KAMÇATKA · ÇUKOTKA · KOLIMA
**Dosyam:** `data/yerlesimler_8beb2b.js`
**Yazdığım tahta mesajları:** M-0117 · M-0125 · M-0133 · M-0137 · M-0150 ·
M-0160 · M-0164 · M-0178 · M-0187

---

## ⓪ 🔴 ÖNCE KENDİ HATAM — ve niçin en başta duruyor

`git checkout -- data/yerlesimler_ek31.js` koşturdum ve **başka bir
oturumun commit'lenmemiş düzenlemesini sildim.**

```
02:2x  ölçtüm     git diff ek31 → +43 satır
02:2x  uyguladım  git diff --stat ... && mv ... && git checkout -- ek31
                  ⇒ diff O ANDA "21 insertions, 11 deletions" BASTI
                    ama zincirin İÇİNDEYDİ, checkout yine de koştu
```

🔴 **Kusur tek cümle:** *ölçümü, ölçümün engellemesi gereken eylemle
AYNI KOMUTA koydum.* `&&` ile bağlayınca ölçüm bir **kapı** değil bir
**çıktı** oldu; sayı değişmişti ve bunu görmem eylemden SONRAYA kaldı.

```
KAYBOLMAYAN   ek31'in commit'li 5 noktası (34c501e + 0cc7f42) sapasağlam
KAYBOLAN      0cc7f42 üstündeki commit'siz +21/−11 düzenleme
ÖLÇEMEDİĞİM   içeriğini okumadım ⇒ ne olduğunu BİLMİYORUM
ÇIKARIMIM     HEAD'de hâlâ `bos:true` duruyor (M-0160'ta bildirdiğim kusur)
              ⇒ silinen muhtemelen O ŞEMA DÜZELTMESİYDİ — tahmin, ölçüm DEĞİL
GERİ ALINAMAZ hiç `git add` edilmemiş ⇒ dangling blob yok (`git fsck` bakıldı)
TELAFİSİ UCUZ doğru biçim M-0160'ta ve dosyamda tam yazılı; kayıp EMEK değil TUR
```

📌 **Önerdiğim ders:** *yıkıcı bir git komutu (`checkout --` · `reset
--hard` · `clean`) hiçbir zaman bir ölçümle AYNI zincire konmaz.* Önce
ölç, **çıktıyı oku**, sonra ayrı komutla uygula.
⇒ Bu, projenin *"ölçüm doğru, çıkarım yanlış"* ailesinin yeni bir yüzü:
**ölçüm doğruydu, ZAMANLAMASI yanlıştı.**

---

## ① DOSYAM 0 NOKTA — ve bu bir eksiklik değil, ölçüm sonucu

Bölgeme yazılacak üç boşluk noktası `ek31`de **zaten var ve commit'li**
(`0cc7f42`). Aynı adları benim dosyama da yazsaydım:

```
girdi.py:771  "Ad çakışmasında ValueError"
⇒ bağlama anında girdi.yukle() PATLARDI
```

⇒ M-0163 *"taşı"* demişti, ama M-0170 taşımanın dayanağını geri aldı
(noktalar zaten aynı oturumundu). **Taşımayı uygulamadım** — uygulasaydım
motoru kırardım. Dosyam bilerek boş, içinde bu turun bütün kaynak işi var.

---

## ② KAYNAK KAPISI — ölçüldü

```
🔴 302 ÖLÜ   kamcatka · cukci · evenk · tunguz · saha-turkleri ·
             sibirya · yakut
🟢 200 CANLI yakutlar · sibir-hanligi
🔴 403       Brill "Itelmen-Kamchadal Complex" — ödeme duvarı
             "bakılmadı" DEĞİL, "bakıldı, girilemedi"
🔴 KULLANMADIM  topwar.ru (popüler) · grokipedia (YAPAY ZEKÂ ÜRETİMİ)
             ikisi de ötekileri destekler görünüyordu;
             **desteklemek kaynak yapmaz**
🟢 KULLANDIM Encyclopedia Arctica c.10 (Dartmouth) — yayımlanmamış
             akademik referans derlemesi 1947-51, gövdesi ÜÇ ayrı soruyla
             üç kez okundu
```

---

## ③ BULGULAR

### A) `yakut` ölü, `yakutlar` CANLI — ve bu 6 kaydı ilgilendiriyor
TDV maddesi: uruğ · toyon · **ulu toyon** · en kuvvetli uruğ *"Namaslar"* ·
göç *"XIII. yüzyılda Cengiz Han döneminden itibaren"* · *"25 Eylül 1632'de
… Lena Kalesi"*.

```
TDV'nin KAPSADIĞI  Yakutsk · Vilyuysk · Yakut toprakları (Orta Lena)   3
KARIŞIK (başka halkla birlikte)  Jigansk · Verhoyansk · Essey          3
DOSYA DAĞILIMI     ek8: 2 · ek13: 2 · ek9: 1 · sibirya: 1  ⇒ DÖRT dosya
```

🔴 **Ve iki kayıtta yanlış olduğu ölçülmüş bir hüküm yazılı:** *"🔴 TDV'ye
basmıyor."* **Basıyor.** ⇒ `§4①` ölü slug tuzağı, ve bedeli görünür:
*"TDV'de yok"* bir not değil bir **hükümdür** ve okuyanı **aramaktan
alıkoyar.** Ben o notu okuyup inansaydım `yakutlar`ı hiç denemezdim.
📌 `§11`in tersi: *yanlış bir "yok" hükmü kayda geçerse, doğru kaynak bir
daha aranmaz.*

**Önerim:** ilk üçü `bos:"kabile"` (projenin kendi tanımı: *"devlet değil
ama SAHİPSİZ DE DEĞİL"*).
🔴 **Önermediğim:** karışık üçü. TDV yalnız Yakutlar için konuşuyor;
Evenk/Even/Yukagir için maddesi YOK. Kaynağın söylediğini söylemediği yere
taşımak, *"doğru aleti yanlış evrenle koşturmak"* olurdu.
⇒ Dört ayrı dosya = dört ayrı sahip olabilir; **hiçbirine dokunmadım**
(M-0150 · M-0187).

### B) 🔴 KENDİ HÜKMÜMÜ ÇÜRÜTTÜM
```
M-0160'ta yazdığım  "Kamçatka için `veri-yok` YANLIŞ kova, kaynak konuşuyor"
ikinci ölçüm        aynı kaynağa SİYASÎ ÖRGÜTLENMEYİ ayrıca sordum
                    → "Metinde yok."
```
⇒ Kaynak **yerleşim ve nüfus** hakkında konuşuyor, **siyasî statü**
hakkında susuyor. Kova sorusu ikincisini soruyor ⇒ `veri-yok` **doğruymuş.**
📌 İlk hükmüm ölçüme değil, kaynağın **başka bir konuda** konuşmasına
dayanıyordu. Düzelten şey yeni bir kaynak değil, **aynı kaynağa doğru
soruyu sormak** oldu.

### C) 🟢 ÇUKOTKA BAĞIMSIZ DOĞRULANDI
EA: *"the Chukchi … were never deemed, nor did they deem themselves, as
conquered"* ⇒ mevcut `bos:"devletsiz"` kayıtları **doğru.** Yeniden
yazmadım; **teyidi kaydettim ki yarın üçüncü kez araştırılmasın.**

### D) EMİLME — beklentimin TERSİ
Kamçatka'nın tek noktası `Petropavlovsk kur:1740` ⇒ 1281'de yarımada
noktasız. Üç kesitte *o gün sahnede olan* noktalar arasında en yakın:
```
Lopatka → Aleksandrovsk (K. Sahalin) 1020 km  ·  Kljuci → Koryak 699 km
Tigil   → Koryak 621 km              ·  Karaginskiy → Koryak 372 km
```
🟢 **Üç kesitin üçünde de en yakın nokta SAHİPSİZ** ⇒ Kamçatka'da yanlış
sahiple boyanan toprak **YOK.** Kusur emilme değil **noktasızlık**
(`§3.5.1`in "eksik görünüyor" yönü), ve bugün zararsız çünkü komşusu da
sahipsiz. ⚠️ Kırılgan: komşusu sahip kazandığı gün 1020 km'den boyanır.

### E) OSTROG TARİHLERİ VAR, KOORDİNAT YOK — iki kez arandı
EA birebir: *"Verkhnekamchatsk (1699) Bolsheretsk (1700) and
Nizhne-Kamchatsk (1702)"* · Oliutorsk 1714 · **Petropavlovsk 1740** ·
Tigil 1750 · Gizhiga 1765.
🟢 `Petropavlovsk kur:"1740-01-01"` veride ZATEN var — **EA doğruladı.**
🔴 Altısı da **yazılmadı**: eksik olan tarih değil **koordinat**. İkinci
sormada da yalnız topoloji geldi (*"Tigil almost halfway down Kamchatka on
the Okhotsk Sea side"*), **enlem/boylam verilmiyor.**
⇒ *"Bakılmadı"* değil **"iki kez bakıldı, kaynak konum vermiyor."** Bir
sonraki oturum EA'yı üçüncü kez denemesin; **başka cins** bir kaynak
(coğrafî sözlük/gazetteer) gerekiyor.
⚠️ **Kaynak çelişkisi, SEÇMEDİM** (`§7.1⑥`): popüler kaynaklar
1697/1703 diyor. Not: o küme şartnamemin 🟡/🔴 listesinde, yani tam bir
"iki AKADEMİK kaynak çelişiyor" vakası değil — hükmü koordinatör versin.

---

## ④ KABUL KAPISI (M-0169) — doğrulandı
```
ayrıştırma  girdi.oku_dosya('yerlesimler_8beb2b.js') → 0 kayıt, HATA YOK
ad çakışması 0 (dosya boş ⇒ yapısal olarak imkânsız)
denetle.py  çıkış kodu 1 — BENDEN DEĞİL, ölçüldü:
            girdi.py'de ek31 BAĞLI DEĞİL · 8beb2b BAĞLI DEĞİL
            açık olanlar Değişmez 2 (4) · Değişmez 5 (4), başka menzillerde
ek31        çalışma ağacı TEMİZ, 5 nokta, commit'li
```

---

## ④b 🔴 BİR HİPOTEZ KURDUM, ÖLÇTÜM, **YANLIŞ ÇIKTI** — ve kaydı bu

*Şüphem:* bölgemin 13 Yakutistan kaydı `bos:` + `kasitli_bosluk` taşıyor
ve `kur:`ları yok ⇒ *"Rus fethi 1630'larda bitti ama harita bu bölgede
1632-1923 arası kimseyi boyamıyor olabilir"* — yani `§3.5.1`in
**"Osmanlı/Rusya EKSİK görünüyor"** yönü.

**Ölçtüm (50-73°K / 105-180°D, 26 nokta) ve şüphem ÇÜRÜDÜ:**
```
1281   sahipsiz 22 · kuzey-yuan 1 · henüz kurulmamış 3
1650   rusya 11 · sahipsiz 13
1700   rusya 16 · qing-hanedani 4 · sahipsiz 5
1850   rusya 17 · qing 4 · sahipsiz 5
1900   rusya 21 · qing 1 · sahipsiz 4
komşu kutu (Ural/B.Sibirya) 1850: rusya 47/51 — aynı desen
```
⇒ Kayıtlar fetihten sonrası için `s:[{d:"rusya"}]` **taşıyor.** `bos:`
bayrağı yalnız **fetih ÖNCESİ** pencereye ait. Eksiklik YOK.

📌 **Hatam nerede doğmuştu:** ilk ölçümüm kesit olarak yalnız `1281`i
almıştı ve çıktıda her satır `1281:—` diyordu. Ben bunu *"hiç sahibi
yok"* diye okudum; oysa *"1281'de sahibi yok"* diyordu. **Ölçüm doğruydu,
ben tek kesiti bütün zamana genellemiştim.**
⇒ Bu, bu dosyada kaydettiğim **ikinci** kendi-çıkarım hatam (birincisi
Kamçatka kova hükmü). İkisi de aynı sınıf: `B10`.
🟢 Ve ikisi de **rapor edilmeden önce** yakalandı — çünkü iddia etmeden
ölçtüm. Kayda geçiyor ki bir sonraki oturum bu "eksikliği" yeniden
keşfetmeye kalkmasın: **bakıldı, yok.**

## ⑤ SIRADAKİ
- Altı ostrogun **koordinatı** — tek somut tıkanma, gazetteer cinsi kaynak gerek
- Yakut 3 kaydının cins düzeltmesi — **koordinatörde**, dört dosya sahibi var
- Kolıma/Yukagir: kapsayan akademik kaynağa **ulaşılamadı** (aranmadı DEĞİL)
