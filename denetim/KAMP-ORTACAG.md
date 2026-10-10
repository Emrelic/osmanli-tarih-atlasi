# KAMP-ORTACAG — K7 (MS 476 – 1281) · BİRİNCİ TUR

**Oturum:** KAMP-ORTACAG (EMRELIC, Opus) · **Taban:** `origin/main` `d147f8a5` (worktree `C:\atlas-kamport`, dal `kamp-ortacag-1010`)
**Şartname:** `oturumlar/KAMPANYA-DUNYA-1010.md` §2 K7 · §3 şema · §4 altı kural · §5 birinci tur.
🔴 **Hiçbir `data/*.js` dosyasına dokunulmadı.** Atlas yalnız SALT OKUNDU (künye taraması + şehir yakınlık ölçümü).
**Dosyalar:** `denetim/KAMP-ORTACAG-POLITY.csv` · `-KRONOLOJI.csv` · `-SEHIR.csv` · bu belge.

---

## SONUÇ (sayıyla)
| | Sayı | Not |
|---|---|---|
| Evrende ZATEN VAR olan künye | **278** | `f` < 1281 ve `t` > 476. Ölçüldü, bu turda yeniden YAZILMADI |
| **YENİ polity** (dizinde karşılığı yok) | **39** | f yazılı 23 · t yazılı 25 · ikisi yazılı 19 |
| └ f ve t'si kaynaklı olup iki ucu da bir maddeye oturan | **19 / 19** | 6 uç ortak maddeyle (Verdun 843 · 582 bölünmesi · 751) |
| └ yalnız `bulunamadı` / yüzyıl olarak kalan | **10** | adlarıyla §4'te |
| **Kronoloji maddesi** | **46** | `harita_degisimi` EVET 42 · HAYIR 4 (hanedan değişimi/unvan) |
| **Şehir** (ilk kayıt tarihiyle) | **25** | hepsi atlasta VAR, hiçbirinde `kur:` YOK ⇒ §3 |
| Şehir — `bulunamadı` | **9** | adlarıyla §4'te |

## 1. Kaynak seti ve kronoloji sistemi
- **İslâm dünyası, Arabistan, bozkır: TDV İslâm Ansiklopedisi birincil** (§4 kural 2). 31 madde çekildi.
  Slug'lar **sitenin kendi öneri uç noktasıyla** bulundu: `/ajax_search_auto.php?sp=aa` başlık, `sp=t` tam metin; sayfa JS'inden okundu. Her aday `GET` ile doğrulandı (`D211⑨`).
- **Avrupa: Treccani** (Istituto dell'Enciclopedia Italiana — akademik ansiklopedi, kırmızı listede değil). 43 madde denendi.
  **Britannica `403`** verdi, kullanılamadı. Treccani'de 9 slug ana sayfaya yönlendi; bunlar "yok" sayıldı ve dosyaları silindi.
- **Koordinat:**
  - İslâm şehirleri: al-Ṯurayyā (`places.geojson`).
  - Avrupa ve Kuzey Afrika: GeoNames (`HUKUM §6`: modern yerleşim için yeter). Ad eşleşmesiyle seçildi; ilk denemede 6 yanlış seçim çıktı ve düzeltildi.
  - Getty TGN denendi, sonuçları gürültülüydü, kullanılmadı.
- **Takvim:** 1582 öncesi bütün tarihler **Jülyen** (kaynakların verdiği biçim). Mezopotamya tipi yüksek/orta/düşük kronoloji sorunu bu dilimde YOK.
- **Hicrî kural** (`CLAUDE.md §4`): hicrî yıl ∩ kaynağın mîlâdî yılı ∩ (varsa) ay ⇒ **kesişimin ilk günü**. Hesap tablo usulü ±1-2 gün.
  **Tablo bir TDV günüyle sınandı ve tuttu:** 1 Şevval 308 = 921-02-13 ⇒ 8 Şevval = 921-02-20; TDV mehdiye: «8 Şevval 308 (20 Şubat 921)» ✓.
  Dokuz şehir ve bir polity ucu bu kuralla yazıldı.
- **Kesinlik değerleri:** `gun` · `ay` · `yil` · `yil-hicri` · `yaklasik` (kaynak "ca./intorno") · `gelenek` (kaynak "secondo la tradizione") · `alt-sinir` · `yuzyil` · `belirsiz` · `evren-oncesi`.

## 2. Bulgular — atlası ilgilendirenler (hüküm DEĞİL, ölçüm)
1. 🔴 **25 şehrin 25'i atlasta nokta olarak VAR ama hiçbirinde `kur:` YOK.**
   - İlk dönemleri çoğunlukla 1281-01-01'de başlıyor (Kahire 1252, Bağdat 1258, Merakeş 1147, Rabat 1150 istisna).
   - Motor `kur:` yoksa noktayı **1000-01-01'den itibaren** sahnede tutuyor (LAB-KUR-SAYIM `§0`).
   - ⇒ Bu dosyanın `ILK_KAYIT_TARIHI` sütunu, 1000 sonrası kurulan Kal'a (1007), Merakeş (1062), Bicâye (1065), Rabat (1150), Münih, Lübeck, Berlin, Dresden, Tallinn için **`kur:` ADAYIDIR**.
   - 1000 öncesi kurulanlar (Basra … Kahire) için `kur:` ufuktan önce kalıyor; etkisi yok.
2. 🟡 **Basra koordinatı:** al-Ṯurayyā'nın ortaçağ Basra'sı atlastaki Basra noktasına **13,4 km**. LAB eşiğine göre (Ṯ tek tanıkken ≥10 km) bu **SİNYAL**. Ortaçağ Basra'sı bugünkü şehrin güneybatısında olabilir; ikinci tanık gerekir. Ölçüm, hüküm değil.
3. 🟡 **Kal'atü Benî Hammâd atlasta YOK** (en yakın nokta Mesîle, 25,9 km). Hammâdî başşehri 1007-1090.
4. 🟡 **Tâhert:** TDV iki şehir anlatıyor (Tâhertülkadîme = Roma Tingartia, Tâhertülhadîse 10 km batıda, 761 sonrası). Atlastaki `Tâhert (Tiaret)` Ṯ noktasına 3,9 km — **hangisi olduğu ölçülemedi.**
5. 🟡 **Bagratlı Ermeni:** Treccani «nell'863 riconobbe come principe vassallo Ashot» diyor, mevcut `ani-bagratli-kralligi` künyesi f **884**. Prenslik (863) ↔ krallık (884) ayrımı olabilir; **ayrıştırılmadı**, mevcut künyeye dokunulmadı.
6. Mevcut künyelerle **ardıl/öncül dikişleri tutuyor:**
   - `bati-frank` t 987 = `fransa` f 987 · `dogu-frank` t 962 = `almanya` f 962 · `asturya` t 910 = `leon-kralligi` f 910 · `ikinci-gokturk` t 745 = `uygur-kaganligi` f 745.
   - Hepsi kaynaklı uç; künye günü kaynak alınmadı, yalnız karşılaştırıldı.

## 3. Kaynak çelişkileri ve şüpheli değerler — BEYAN (taraf seçilmedi ya da gerekçeyle seçildi)
| Kalem | Ne | Yapılan |
|---|---|---|
| Ostrogot f | Treccani «Teodorico scese in Italia (498)», aynı cümle Odoakr'ın yenilgisini anlatıyor | 498 yazıldı, ⚠️ ikinci kaynakla ölçülmedi |
| Merovenj f | TDV Chlodvig «481-511» ↔ Treccani Childerich «m. 482 circa» | TDV esas (§4) |
| Karoling f | Treccani `merovingi` «deposto nel 751» ↔ `carolingi` «(752-987)» — aynı ansiklopedi, 1 yıl | 751 alındı (tahttan indirme olayı) |
| Sırp f | Treccani «Stefano di Nemanja (1151-95)» | 1151 yazıldı, ⚠️ teyitsiz |
| Mercia t | Treccani «si concluse nel 957» | 957 yazıldı, ⚠️ teyitsiz |
| Trondheim | Treccani «fondata nel 996» | 996, ⚠️ teyitsiz |
| Burgond f | «Le prime attestazioni archeologiche … 443, quando furono insediati in Sapaudia» | `D211⑧`: cümle YERLEŞİMİ tarihliyor ⇒ tarihî olay olarak alındı |
| Gassânî t | TDV yıkılışı yazmıyor; son hükümdar Yermük'te | t = Yermük günü (TDV gün), TANIK olarak işaretli |
| Basra · Vâsıt · Merakeş | TDV'de 2-3 rivayet | en erken rivayet alındı, ötekiler `not`ta |
| Zencan (önceki iş) | TDV «Tekiş 614’te» — 614'te hükümdar Alâeddin Muhammed | bu dilimde yeniden kullanılmadı |

## 4. `bulunamadı` — ADIYLA
**Polity (10):**
- Süev (f/t; ilhak yalnız 567-586 aralığıyla) · İtalya Krallığı 888-962 (Treccani slug yönlendi; yalnız 924 tanığı)
- Wessex (yalnız «6° sec.») · Northumbria (kuruluş cümlesi yılsız) · Oğuz Yabguluğu (yılsız)
- **Aksum** (TDV `habesistan` gövdesi ÇEKİLEMEDİ — yalnız sayfa iskeleti, `D211④`: çekilemedi ≠ yok · Treccani `aksum` yılsız)
- Abhazya Krallığı (TDV 302, Treccani yönlendi) · Vaspurakan (TDV başlık araması 0) · Alan Krallığı · Eftalit (yalnız «IV-VI. yüzyıl»)

**Polity ucu (f ya da t'si eksik, öteki yazılı):** Amalfi f · Mercia f · Batı Göktürk t · Türgiş f · Karluk t · Kinde t · Lahmî/Gassânî/Himyerî f (evren öncesi).

**Şehir (9):**
- Moskova · Stockholm · Novgorod · Krakov (Treccani gövdesinde yıl yok)
- Riga · Amsterdam · Prag (yalnız yüzyıl)
- Fes (TDV `fes` = başlık maddesi, şehir değil — `D211②`)
- Cezayir (ilk kayıt antik Icosium ⇒ evren DIŞI)

## 5. YARIM BIRAKILAN YERLER — sınırın adı
1. **Doğu ve Güney Asya** (Tang · Song · Goryeo · Heian · Hint krallıkları): bu turda HİÇ BAKILMADI. Tang 618-907 K6 ile örtüşüyor; `song`, `goryeo` ve `liao-hanedani` künyeleri dizinde VAR.
2. **Sahra altı Afrika** (Gana, Kanem ve Mali dizinde var; Aksum ölçülemedi) · **Amerika** · **Okyanusya** — bakılmadı.
3. **Mevcut 278 künyenin f/t'si yeniden ölçülmedi.** Bu tur yalnız EKSİK olanları kurdu. Hiç anılmayan 228 künye K0'ın evreni.
4. Kafkasya'nın küçük birimleri (Tao-Klarceti, Kaheti-Hereti, Şirvan öncesi), Anglo-Sakson'un öteki krallıkları (Kent, Essex, Sussex, East Anglia), Lombard'ın öteki dukalıkları (Spoleto, Friuli), göç dönemi Rugi ve Heruli birimleri — bakılmadı.

## 6. Hijyen
Çekilen ham metinler `scratchpad/KAMP-ORTACAG/{tdv,trec}/` altında. TDV ve Treccani istekleri sıralı ve yavaş (1,3–1,5 sn). 429/503 alınmadı.
Yeniden üretim: `scratchpad/KAMP-ORTACAG/uret.py <çıktı> <worktree>`. Tek bir betik, bütün satırlar içinde ve okunabilir.
