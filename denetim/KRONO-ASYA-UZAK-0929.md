# KRONO-ASYA-UZAK-0929 — Uzak Asya ve Okyanusya kronolojisi (rapor, 29 Eylül 2026)

Oturum: KRONO-ASYA-UZAK-0929 (Sonnet 5.5) · şartname: `oturumlar/KRONO-DALGA3-0929-ORTAK.md` §1 satırı ·
iş listesi: `SENKRON-DEFTER-0929.json` → 5 `PAKETSIZ:` bölgesi (`net_olay_adayi`).

## 1. En değerli satır — 122 adayın sınıflandırması

Defter `net_olay_adayi` toplamı **122**; ben aynı kayıtları (`kuyrukta_kapali`/`kunyede_kapali` hariç)
(gün × eski × yeni × kova) ile grupladım → **121 satır** (Doğu Asya'da defter 49, benim gruplamam 48 —
bir satırlık fark; kaynağı ölçülemedi). Satır satır tablo: [`KRONO-ASYA-UZAK-0929-SINIF.tsv`](KRONO-ASYA-UZAK-0929-SINIF.tsv).

| Sınıf | Doğu Asya | Orta Asya | GD Asya | Okyanusya | Güney Asya | **Toplam** |
|---|---|---|---|---|---|---|
| **GERÇEK — madde YAZILDI** (`G-YAZ`) | 17 | 8 | 3 | 0 | 5 | **33** |
| **GERÇEK — madde ZATEN VAR** (`G-VAR`) | 3 | 4 | 0 | 0 | 2 | **9** |
| **ARTEFAKT — yerleşim DOĞUŞU** (`A-DOGUS`) | 7 | 2 | 7 | 19 | 3 | **38** |
| **ARTEFAKT — künye penceresi/eksiği** (`A-KUNYE`) | 4 | 0 | 3 | 0 | 0 | **7** |
| **ARTEFAKT — yıl temsilî / harita hatası** (`A-YIL` · `A-HATA`) | 2 | 3 | 0 | 0 | 0 | **5** |
| **ÖLÇÜLEMEDİ** (`O`) | 15 | 5 | 3 | 0 | 6 | **29** |
| toplam | 48 | 22 | 16 | 19 | 16 | **121** |

**Yüzdeler:** gerçek 42/121 = **%35** · artefakt 50/121 = **%41** · ölçülemedi 29/121 = **%24**.

🔴 **Sınıfların anlamı — yanlış okunmasın:**
- `A-DOGUS` = yerleşimin `s:` penceresinin ilk günü, `eski` = «—»/`__BOSLUK__`. Yeni nokta açıldığı gün petek
  onun sahibiyle boyanır; **yerleşim kendi doğuşunda «el değiştirmiş» görünür.** Bir devir teslim değil.
- `G-YAZ` **kapattı demek DEĞİL:** 33 satırın yalnız **15'i ±30 gün** içinde, 3'ü yıl temsilîde yıl aynı;
  **15'i madde ile 30 günden fazla uzak** (aynı sefer/savaş ama şehir günleri kaynaksız — Yunnan'ın kuzey şehirleri
  1382-03…04, Panthay'ın son şehirleri 1873-04/08, Zuo'nun Aksu'su 1877-10 gibi). Bu satırlar Değişmez 2s
  açığından DÜŞMEZ; açık olan şehir günü, **olay değil.**

### Lideri sınamanın sonucu — ÖNGÖRÜ ⇒ ÖLÇÜM
Koordinatörün öngörüsü: *«Okyanusya'da artefakt oranı yüksek çıkacak.»* — **TUTTU, ve beklenenden sert:**
**Okyanusya 19/19 (%100) yerleşim doğuşu.** Haritadaki 21 açık kaydın 21'i `s:` ilk günü = `kur:` günü
(Auckland 1840-09-18 · Christchurch 1850-12-16 · Hamilton 1864-08-24 · Ceduna 1901-06-20 · Coober Pedy 1915 …).
Öbür bölgelerde oran: Doğu Asya 7/48 (%15) · Orta Asya 2/22 (%9) · GD Asya 7/16 (%44) · Güney Asya 3/16 (%19).
Tüm adaylarda artefakt+doğuş: 50/121; yalnız doğuş: 38/121 (%31).

⚠️ **Bu, Okyanusya'da HİÇ olay yok demek değil:** doğuş günü, yerleşimin kuruluşudur ve kuruluş çoğu kez
**gerçek bir idari olaydır.** 19 doğuş satırından 5'i için yine de madde yazdım (Auckland — başkent kuruluşu ·
Hamilton — Waikato milis yerleşimi · Fakfak ve Merauke — Hollanda idaresinin kuruluşu; Waikato işgali ayrı).
Ama Christchurch/Timaru/Napier/Blenheim/Invercargill/Queenstown/Hokitika/Greymouth/Taupō/Gisborne/Rotorua ve
Avustralya iç kesiminin altı noktası ayrı olay DEĞİL — madde yazmak artefaktı kalıcılaştırırdı.

## 2. Yazılan maddeler — 31, üç dosya

| Dosya | Madde | Kapsam |
|---|---|---|
| [`data/kronoloji_cok_dogu_asya.js`](../data/kronoloji_cok_dogu_asya.js) `KRONOLOJI_COK_DOGU_ASYA` | **9** | Yunnan 1382/1659/1681/1729 · Pingnan 1856/1872 · Sarawak'ın Brunei'den 1861/1882/1890 kopuşları |
| [`data/kronoloji_cok_orta_asya2.js`](../data/kronoloji_cok_orta_asya2.js) `KRONOLOJI_COK_ORTA_ASYA2` | **16** | Şeybânî 1503/1505/1506 · Bedahşan 1584 · Hokand 1816 · Afgan kuzeyi 1859/1883 · Kuça 1864 · Yâkub Bey 1865/1877/1877 · **Güney Asya:** Fârûkîler 1370/1382 · Sih Derajat 1819 · Sambalpur 1849 · Nagpur 1853 |
| [`data/kronoloji_cok_okyanusya.js`](../data/kronoloji_cok_okyanusya.js) `KRONOLOJI_COK_OKYANUSYA` | **6** | Auckland 1840 · Waikato 1863 · Hamilton 1864 · Fakfak 1898 · Merauke 1902 · Avustralya Federasyonu 1901 |

**Dosya sahipliği notu (şartnamede boşluk):** §1 tablosu yalnız üç dosya veriyordu; **Güney Asya ve
Güneydoğu Asya için dosya adı yoktu.** Güney Asya'yı `_orta_asya2.js`e, Borneo'yu (Sarawak) `_dogu_asya.js`e,
Yeni Gine'yi (Fakfak/Merauke) `_okyanusya.js`e koydum — başka dosyaya yazmadım. İstenirse `kronoloji_cok_guney_asya.js`
diye ayrılır (yalnız `window.KRONOLOJI_COK_GUNEY_ASYA` adına dönmesi yeter).

Her maddede on zorunlu alan + `taraflar:[…]` (M-5416) + `gun:` (kaynak çelişkisi/eksiği) + `ic_not_d:` (editoryal
söz, `d`e girmedi). Mevcut `kronoloji_*.js` dosyalarına **dokunulmadı.**

## 3. Ölçtüğüm — sayılarla
- `node --check` ×3: **temiz.**
- `dogrula` (yer_id çözümü · künye penceresi · t biçimi · mükerrer `t`+`b` mevcut 7.689 madde ile): **31 madde, 0 hata.**
  Künyesi olmayan üç `taraflar` id'si (`kunduz-hanligi` · `kuca-hocalari` · `nagpur-bhonsle`) — kural (3): **KUNYE.md.**
- `py arac/odak_olc.py`: yeni dosyalarda **kırık atıf 0**; genel «ÇÖZÜLMEYEN ODAK ATFI 1» bana ait değil
  (`kronoloji_dogu_afrika.js` 1897 `Ogaden`). ODAKSIZ 4 (yer_id boş: Waikato · Nagpur · Fârûkî×2 — bilerek boş).
- `py arac/denetle.py`: **SONUÇ: temiz** (4 dk 6 sn; Değişmez 1/1b/2/2i/2t/2s bu dalgadan etkilenmedi —
  dosyalar `index.html`e bağlı değil).
- **Yeni tavanı kaydırma YOK.** Dosyalar `index.html`e bağlı olmadığı için `denetle.py 2s` bu 33 `G-YAZ` satırını henüz
  kapatmış SAYMAZ; bağlanınca hangilerinin kapandığı KOORDİNATÖR koşusunda ölçülür (beklenti: en çok 15 + 3 yıl-aynı).

## 4. Bulamadığım — `bulunamadı` bir sonuçtur
1. **TDV bu coğrafyanın hemen hiçbirini vermedi.** `yakub-bey` slug'ı 14. yüzyıl Germiyanoğlu'na düşüyor (tuzak ②);
   TDV `arama/?q=Yakub Bey Kaşgar` Osmanlı-Yâkub Bey ilişkisi maddesini vermedi (yalnız `cirağan-vakasi`nde «Kâşgar elçisi
   Yâkub Han» geçiyor); `Şeybânî Muhammed Han` aramasında yalnız fıkıh imamı Şeybânî çıktı. **Osmanlı ile ilgili tek
   uzak-Asya hattı — Yâkub Bey'in 1873 Osmanlı himayesi — bu oturumda kaynaklanamadı**; madde yazılmadı. Öneri: TDV
   `cirağan-vakasi` ve `dogu-turkistan` elle okunmalı; Osmanlı çekirdeği için çekirdek kronolojinin işidir.
2. **Kitap SAYFALARI hiçbirinde açılmadı.** `kaynak:` alanı eser+yazar+yıl verir, sayfa vermez; günler web'de çapraz
   kontrol edilen web özetlerinden geldi; **bu özetlerin çoğu Vikipedi'ydi (Britannica · Iranica · Te Ara onları
   destekleyen ikinci kaynak olarak göründü, hepsi için değil).** `kaynak:` alanına yazılan eser, günü/olayı destekleyen
   akademik eserdir — ama **o eserin sayfası açılıp gün orada okunmadı.** Bunun sonucu: **yayına girmeden madde günleri
   ve ayrıntıları kitap/madde sayfasıyla sınanmalı** — `gun:` ve `ic_not_d:` alanlarında hangisinin nasıl
   kaynaklandığı açıkça yazıldı. (Bu, CLAUDE.md §4 «Vikipedi tek dayanak değildir» kuralının sınırında bir durumdur;
   itiraz varsa maddeleri KAPI dışı tutun — hüküm koordinatörde.)
3. **Gün bulunamayanlar:** Dali'nin düştüğü ay (Ocak/Nisan) · Kunming'in düşüş günü (Ekim 1681; Wu Shifan'ın ölümü tek
   kaynakta 7 Aralık) · Yâkub Bey'in ölüm günü (16/30 Mayıs çelişkili) · Bintulu 1861'in ve Baram 1882'nin günü ·
   Ömer Han'ın Sayram/Şımkent alışı. Hepsi `gun:` alanında.
4. **29 satır ölçülemedi** (satır satır: `.tsv`, sınıf `O`): Doğu Asya 15 — Ming'in 1368 Hunan/Henan günleri (2) · Qing'in
   Xinyang 1645 ve Güney Ming'den Jiangxi-Hunan'ı alışı 1646-48 (5) · San Fan'ın Hunan-Jiangxi safhası 1674-79 (4) ·
   Taiping'in Ji'an'ı 1856/1858 (2) · Zuo'nun Qitai 1876 ve Manas 1876-08-18 günleri (2) · Orta Asya 5 — Anadolu 1402 (aşağıda) ·
   Bedahşan 1657 · Hucend 1802 · Issık Göl/Narın 1825 · Darvaz 1873 · GD Asya 3 — Atapupu 1818 · Sintang 1822 · Kapuas Hulu 1895 ·
   Güney Asya 6 — Baroda 1304 · Chhattisgarh/Sambalpur 1741/1750/1797/1817 · Asîrgarh/Burhânpûr 1860.
   **Hiçbirine tahminle madde yazılmadı.**
5. **Anadolu tuzağı:** `orta-asya` bölgesinde 8 Anadolu şehri (Aksaray · Burdur · Ermenek · Eğirdir · Ilgın · Karapınar …)
   1402-07-28'de `OSMANLI→timurlu`, kova **`acik`** — Ankara Savaşı günü; bölge etiketi HATALI, bu **KRONO-OSMANLI-CEVRE**
   kapsamı (Opus). Ona havale: kayıt sınıf `O`, gerekçe `.tsv`de.

## 5. Öneri / istek
- **Bağlama (koordinatör):** `index.html`e üç satır (`kronoloji_cok_dogu_asya.js` · `_orta_asya2.js` · `_okyanusya.js`) +
  `arac/paketle.py`. Bağlanana kadar sitede görünmez (normal). `app.js:13573` bindirir; eşlenmeyen üç künye id'si konsola düşer.
- **Künye:** [`…-KUNYE.md`](KRONO-ASYA-UZAK-0929-KUNYE.md) — 3 eksik künye (mecburî) + 9 öneri.
- **Yerleşim öneri:** [`…-YERLESIM-ONERI.md`](KRONO-ASYA-UZAK-0929-YERLESIM-ONERI.md) — 12 kalem; uygulanabilir biçim.
  En önemlisi **Herat 1826** (Herat 1863'e dek Afganistan'ın parçası değildi) ve **Harezm 1502→1505**.
- **Düzeltme:** [`…-DUZELTME.md`](KRONO-ASYA-UZAK-0929-DUZELTME.md) — Nerçinsk üç gün (bir tanesi Julian) · San Fan 1673-12-01↔28 ·
  `pingnan`/`yakub-beg`/`farukiler`/`timor-beylikleri` künye günleri.
- **Şartname itirazı (kısa):** «`net_olay_adayi` doğru sütun» — doğru, ama bir aday «bir olay»ın karşılığı DEĞİL: bir
  savaşın 5 şehir günü 5 ayrı aday. 122 aday ≈ 33 farklı olay (madde) + 38 doğuş + 7 künye eksiği + 29 ölçülemedi.
  Dalga 4'te «aday» yerine «olay kümesi» sayılırsa iş yükü tahmini 3× daha doğru çıkar.
