# KRONO-GORUNURLUK-1008 — DEVAM: `suzgec.js` (TUR_GRUP + bilinmeyenler) · ikinci tur eşlemesi

Oturum: KRONO-GORUNURLUK-1008 (UMIT) · 9 Ekim 2026 · görev: UMIT İRTİBAT (DEVAM) · ağaç `C:\atlas-kg2` @ `origin/makine/umit` 7f63bcd9 (f5050c51 = ilk TUR diff'i İÇİNDE)
Önceki: `KRONO-GORUNURLUK-1008.md`

## ① ÖNGÖRÜ — değişiklikten ÖNCE
- `TUR_GRUP`'a 6 değer (rejim · bagimsizlik · tabi · ateskes · siyasi → siyasi; kurtulus → askeri); `ilhak` EKLENMEZ (belirsiz, §②a).
  ⇒ "Sınıflandırılmamış"tan çıkan ≈ rejim 102 + tabi 21 + kurtulus 19 + bagimsizlik 6-8 + siyasi 3 + ateskes 2 ≈ **153-155**; `ilhak` 4-5 "diğer"de kalır.
- İkinci tur eşleme (tur = k, şimdi `siyasi` TUR_GRUP'ta): 199 boştan **172 eşlenir** (hepsi k=siyasi), **27 boş** kalır (olay 18 · catisma 4 · temas 3 · toplumsal 2). TUR2 uygulanınca "diğer"den +172 daha çıkar.
- `bilinmeyenler()` yeni tanımla (madde gerçekten "diğer"e DÜŞÜYOR mu): bugünkü veride SUZGEC+TUR2 sonrası kalan = ilhak ~5 + olay/catisma/temas/toplumsal 27 + künye-içi `hanedanlik`/`olay` 2 + k/tur'u hiç olmayan madde (bilinmiyor) .
- Görünürlük (iner/ODAK/EK) değişmez — grup yalnız konu süzgecini etkiler.
- `py arac/odak_olc.py` ve `py denetim/ODAK-KAPI-SINAV.py`: önce/sonra **birebir** (değişen işlevler `odak_cozum.js`in kullandığı `sahipKimlikte/sahipAnahtari/aktifVAdi`ya dokunmuyor). Taban: odak çıkış 0 · sınav çıkış 1 (geçen 2 · BAŞARISIZ 3 — değişiklikten ÖNCE de böyle).

### Öngörü değerlendirmesi
- "Diğer"den çıkan 153-155 → **155** ✓ (388 → 233; askeri +19, siyasi +136). `ilhak` 5 "diğer"de ✓.
- TUR2: 172 eşlenen / 27 boş → **172 / 27** ✓.
- `bilinmeyenler()` kalanı → ölçüm §②b; k/tur'u hiç olmayan madde **0** çıktı (öngörüde "bilinmiyor" demiştim).
- odak_olc / sınav birebir → **bayt bayt aynı** ✓ (`diff` boş; sınav öncesi de sonrası da "geçen 2 · BAŞARISIZ 3").
- 🔴 Öngörmediğim: TUR2'nin İÇERİK doğruluğu düşük çıktı (§②c) — mekanik olarak doğru, editoryal olarak yarısı yanlış grupta.

## ② NE ÖLÇTÜM
Araç: `grup.js` (scratchpad) — `gorunur.js` ile aynı önyükleme (index.html'in app.js'ten önceki 67 betiği + app.js'ten kesilen bağlama IIFE'leri), evren = bütün `KRONOLOJI_*` + künye-içi, TEKİL nesne (10.718). `SUZGEC.grupSayilari` ve `SUZGEC.bilinmeyenler` GERÇEK modülden.

### ②a `TUR_GRUP`'a eklenen 6 değer — `KRONO-GORUNURLUK-1008-SUZGEC.diff`
| tur | → grup | madde | gerekçe (örnekler okundu) |
|---|---|---|---|
| rejim | siyasi | 102 | hükûmet/rejim değişimi; hepsi `konu-siyasi` (MacDonald hükûmeti 1924 · Almanya tek parti 1933 · Quisling 1942) |
| tabi | siyasi | 21 | `tabiiyet`in eşanlamı (Mervânî hutbesi 1049 · Rusudan'ın Moğol metbûluğu 1243) |
| kurtulus | askeri | 19 | işgalden kurtarma, hepsi `konu-askeri` (Addis Ababa 1941 · Lüksemburg 1944 · Brunei 1945) |
| bagimsizlik | siyasi | 8 | bağımsızlık ilânı/tanınması (Nepal 1923 · Irak 1932 · Lübnan 1943) |
| siyasi | siyasi | 3 (+ TUR2'de 172) | `siyaset`in eşanlamı |
| ateskes | siyasi | 2 | `antlasma` ailesi (Villa Giusti · Compiègne 1918) |
| ~~ilhak~~ | **EKLENMEDİ** | 5 | belirsiz: antlaşmayla katılma (Hatay 1939, Oniki Ada 1924) ile zorla ilhak (Lüksemburg 1942, Danzig 1939) karışık; konu etiketleri diplomasi/askeri/siyasi. **Önerim:** `askeri` (`toprak-kazanc`/`toprak-kayip` ailesiyle tutarlı — TUR_GRUP toprak değişimini askeri sayıyor); alternatif `siyasi`. Karar koordinatörde; o güne kadar "diğer"de ve artık `bilinmeyenler()`de ADIYLA görünüyor. |
Grup sayıları (evren 10.718): **önce** askeri 3.271 · siyasi 1.758 · hanedan 3.613 · icduzen 825 · kultur 703 · iktisat 160 · **diğer 388** → **sonra** askeri 3.290 · siyasi 1.894 · … · **diğer 233** (−155).
Kapılar: `node --check js/suzgec.js` ✓ · `py arac/odak_olc.py` önce/sonra BAYT BAYT aynı (çıkış 0) · `py denetim/ODAK-KAPI-SINAV.py` önce/sonra BAYT BAYT aynı (çıkış 1 — "geçen 2 · BAŞARISIZ 3" değişiklikten ÖNCE de böyleydi, bu işin kusuru değil: SEKME SESSİZ +1 · SEKME OKUNMAYAN +3; ayrı kalem).
⚠️ TUR_GRUP'a `siyasi` eklemek `k:"siyasi"` taşıyan 172 maddeyi TAŞIMAZ: `maddeGrubu` önce `k`ye KONU_GRUPLARI'nda bakar (orada yok), sonra `tur`a (yok) ⇒ "diğer". Yani SUZGEC diff'i tek başına hiçbir maddeyi sessizce yeniden sınıflamaz; 172'yi taşıyan TUR2'dir.

### ②b `bilinmeyenler()` — yeniden tanım (aynı diff)
Soru artık `maddeGrubu`nun sorusu: *madde "diğer"e TANINMADIĞI İÇİN mi düştü?* Anahtar düşüren alanı ve değeri söyler.
```
                 ESKİ (yalnız k)                                     YENİ
bugünkü veri     hukumdar 60 · hanedan 77 · siyasi 182 · askeri 60    k:siyasi 172 · k:olay 18 · tur:ilhak 5 · k:catisma 4 ·
                 toprak-kazanc 36 · toprak-kayip 28 · olay 24 …       k:temas 3 · k:toplumsal 2 · tur:hanedanlik 1 · tur:olay 1
                 = 493 (çoğu ZATEN tur'dan doğru gruba gidiyordu)     = 206   (+27 açıkça "diger" yazılmış = 233 = "diğer" grubu ✓)
                 tanınmayan tur: HİÇ sayılmıyordu (rejim 102 …)       tanınmayan tur: sayılıyor
```
Toplama sınavı: yeni `bilinmeyenler` toplamı (206) + açık `"diger"` (27) = `grupSayilari().diger` (233) ⇒ "diğer"e düşen her madde ya adıyla sayılıyor ya da bilinçli "diger". Eski tanımla bu toplam tutmuyordu (493 ≠ 388).
Dönüş biçimi değişti (`{"değer": n}` → `{"k:değer"|"tur:değer"|"(k/tur yok)": n}`); çağıran 0 olduğu için kırılan yok (grep: `js/*.js` · `arac/` · `denetim/` — yalnız suzgec.js'in kendisi).

### ②c İkinci tur eşleme — `KRONO-GORUNURLUK-1008-TUR2.diff` (199 boştan kaçı eşlenebildi)
**172 / 199 eşlenebildi** (tur = k, aynı üç şart): hepsi `k:"siyasi"` → `tur:"siyasi"` — senkron_0930 68 · ince_avrupa_amerika 30 · ince_gd_asya 24 · ince_dg_afrika 22 · ince_guney_asya 14 · ince_misir_orta_asya 14. **27 BOŞ:** olay 18 (once1281_iran) · catisma 4 · temas 3 · toplumsal 2 — TUR_GRUP'ta yok, eklenmedi.
Nesne düzeyinde: 477 madde · 172 yeni `tur` · `tur`u zaten olan 278 madde BAYT BAYT aynı · **hata 0** · onem/dunya/kapsam dokunulmadı (BOŞ — beyan).
**Elle doğrulama 24 madde** (her dosyadan orantılı): 🔴 **11 ✅ siyasi · 13 ⚠️ başka grup.**
- ✅ Şubat Devrimi 1917 · Küçük Kaynarca 1774 · Gaeta/İtalya birliği 1861 · Lehistan'ın I. paylaşımı 1772 · Kilkenny Statüsü 1367 · Parma'nın Fransa'ya katılması 1802 · Britanya-Venezuela sınır anlaşması 1850 · Penang 1786 · Saigon Antlaşması 1862 · Goryeo-Moğol barışı 1259 · Nizâmülmülk'ün Dekken valiliği 1725.
- ⚠️ askeri: Merv Savaşı 1510 · Riyad'ın alınışı 1902 · Riga kuşatması 1621 · Tilimsân'ın geri alınışı 1348 · Dârfûr'un Mehdîlere teslimi 1883 · Moskova-Novgorod savaşı 1441.
- ⚠️ hanedan: Func tahtına Nâyil 1534 · Dârfûr tahtına Muhammed Hüseyin 1839 · Vedây tahtına Abdülkerîm 1805 · Kazan Timur Han öldürüldü 1346 · Bîkâner'in kuruluşu 1488 · Madurai nâyaklığının kuruluşu 1529.
- ⚠️ icduzen: Sankin-kotai 1635 (idari).
⇒ Mekanik eşleme `k`ye sadık, ama eski şemanın `k:"siyasi"`si **kaba bir torba** (savaş, taht, kuruluş hepsi içinde). TUR2 uygulanırsa 172 maddenin ~yarısı (örneklemde 13/24 ≈ %54) "Sınıflandırılmamış"tan **YANLIŞ** gruba geçer.
**Önerim: TUR2'yi UYGULAMA.** "Sınıflandırılmamış"ta kalmak dürüst ("ölçülmedi"), yanlış grupta olmak sessiz yanlıştır — konu süzgecinde "Siyasî"yi kapatan kullanıcı Merv Savaşı'nı da kaybeder. Doğru yol 172 maddenin editoryal sınıflaması (başlık okunarak; örneklem yarısının tek bakışta karar verilebildiğini gösteriyor). Diff hazır ve temiz — karar koordinatörde.

## ③ NE BULAMADIM / ÖLÇMEDİM
- TUR2 için elle doğrulama 24 madde; 172'nin geri kalanının dağılımı tahmin (örneklemden).
- `ilhak` için kaynak/editoryal bir kural aranmadı (yalnız etiket dağılımı okundu).
- Panel bağlantısı yazılmadı (app.js Z2'nin).

## ④ NE İSTİYORUM
1. `KRONO-GORUNURLUK-1008-SUZGEC.diff` uygulansın (TUR_GRUP +6 · `bilinmeyenler` tur'u da sayar). Görünürlüğü ve odak kapılarını değiştirmez (ölçüldü).
2. `KRONO-GORUNURLUK-1008-TUR2.diff` — önerim UYGULAMAMAK (§②c); 172 madde editoryal sınıflama kalemine.
3. `ilhak` → `askeri` mi `siyasi` mi: koordinatör kararı (önerim askeri).
4. **Z2'ye çağrı yeri önerisi (app.js):**
   - `odakOzetYaz` (app.js:15259-15287), `bolgeVekil` satırından sonra: `var bl = SUZGEC.bilinmeyenler(kaynak), nb = Σ bl;` ⇒ `nb` > 0 ise özet satırına `" · ⚠️ " + nb + " madde Sınıflandırılmamış (" + en çok 3 anahtar + ")" + (ODAK_KONU && ODAK_KONU.indexOf("diger") < 0 ? " (GİZLİ)" : "")`. Seçili devletin kronolojisinde "diğer"e düşenleri ADIYLA söyler; konu süzgeci "Sınıflandırılmamış"ı kapatmışsa GİZLİ olduğunu söyler (aynı `puansiz` satırının deseni).
   - `suzgecKur` (app.js:7923-7925, Osmanlı konu süzgeci): `grupSayilari(olaylar)` yanında `bilinmeyenler(olaylar)` — "Sınıflandırılmamış" kutusunun `title`ına tanınmayan değerler.
5. **`VERI-YAPISI.md` metin önerisi (koordinatör dosyası) — kronoloji maddesi alanları:**
```
### Kronoloji maddesi — sınıflama ve puan alanları
- `tur`  (ZORUNLU olmalı · tek değer) Maddenin türü. Değer `js/suzgec.js` `TUR_GRUP`
         anahtarlarından biri olmalı; değilse madde konu süzgecinde "Sınıflandırılmamış"a
         düşer (silinmez, `SUZGEC.bilinmeyenler()` adıyla sayar). Yeni değer gerekiyorsa
         önce `TUR_GRUP`'a grubuyla eklenir.
- `k`    (ESKİ ŞEMA — `olaylar*.js`in alanı) Osmanlı zaman çizgisinin konu bölüntüsü,
         `KONU_GRUPLARI` değerleri. `maddeGrubu` ÖNCE `k`ye bakar, tanımazsa `tur`a.
         Yeni `KRONOLOJI_*` dosyasında `k` YAZILMAZ, `tur` yazılır.
- `onem` (1-5 tamsayı) Maddenin KENDİ devleti için önemi. 5 çok önemli … 1 hiç önemli değil.
         Yoksa: ODAK listesinde `puansiz` ayarıyla görünür ("ölçülmedi ≠ önemsiz"),
         EK görünümde 3 sayılır.
- `dunya`(1-5 tamsayı) Dünya ölçeğinde önemi. Aynı olay her dosyada AYNI `dunya`yı taşır
         (`denetle_kronoloji.py` ⑦). EK görünüm bu alanla süzer (varsayılan eşik 4);
         yoksa `onem`e, o da yoksa 3'e düşer ⇒ varsayılan eşikte GİZLİ.
- `kapsam` ("ic" | "dis") Olay devletin iç meselesi mi, dış mı. Yoksa "ic" sayılır.
Şema denetimi: `py arac/denetle_kronoloji.py` (onem · dunya · kapsam ZORUNLU, 1-5).
Puan EDİTORYALDİR: elle yazılır, türetilmez, mekanik doldurulmaz.
```

## Dosya listesi (`C:\atlas-umit\denetim\`e kopyalandı; UYGULANMADI; commit/push YOK)
- `denetim/KRONO-GORUNURLUK-1008-DEVAM.md` — bu rapor
- `denetim/KRONO-GORUNURLUK-1008-SUZGEC.diff` — `js/suzgec.js` (TUR_GRUP +6 · bilinmeyenler) · apply --check temiz (ağaç + atlas-umit) · CR 0
- `denetim/KRONO-GORUNURLUK-1008-TUR2.diff` — 6 dosya, 172 madde `tur:"siyasi"` · apply --check temiz · CR 0 · **önerim: uygulama**
- Araçlar scratchpad'de: `grup.js` · `tur_esle2.py` · `gorunur.js`
