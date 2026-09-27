# EKOKUMA-0077-B — ek okuma kartları, 1914–1921 · 12 madde → 15 kart

> Şartname: `oturumlar/EKOKUMA-0077-B.md` · dosya `data/ekokuma_p77b.js` ·
> değişken **`window.EKOKUMA_P77B`** · kalıp `data/ekokuma_p76e.js`
> Tarih: 27 Eylül 2026

---

## 0. Öngörü — ÖLÇÜMDEN ÖNCE yazıldı (`denetim/EKOKUMA-0077-B-sina.py` başlığı)

| # | öngörü | evren | sonuç |
|---|---|---|---|
| ① | 15 kart (H-0037, H-0052, H-0068 ikişer) | kart dosyası | ✓ 15/15 |
| ② | türüne göre ZORUNLU alanlar dolu (savas-hikayesi: oncesi·akis·sonuc·tartisma; sebep-sonuc: sebep{b,t}·sonuc{b,t}·metin; öteki: metin) — arayüz (`ekKartHtml`) her türü başka alandan çiziyor | kart dosyası + `js/app.js` | ✓ 15/15 |
| ③ | geliştirici sesi 0 | kart gövdeleri | ✓ 0 |
| ④ | `olay:` çapalarının hepsi canlı kronolojide | 6.651 madde / 116 dosya | ✓ 21/21 |
| ⑤ | id tekil, havuzla çakışma yok | 688 mevcut id | ✓ 0 |
| ⑥ | JS olarak ayrışır | `node --check` + `require` | ✓ 15 kart yüklendi |

**İki yön:** `py denetim/EKOKUMA-0077-B-sina.py` → TEMİZ ✓ · `--ters` (bellekte bozulmuş kopya:
sahte çapa + madde kodu + mükerrer id + eksik `sebep`) → **4/4 bozulma ayrı ayrı yakalandı.**

---

## 1. Hükümler — madde başına

| madde | kart `id` | tür | hüküm |
|---|---|---|---|
| H-0008 | `p77b-sarikamis-harekati-1914` | savas-hikayesi | **sirada** — ek okuma yazıldı, bağlama bekliyor · sefer oku `SEFER-OK-0077`de (dokunulmadı) |
| H-0009 | `p77b-birinci-kanal-harekati-1915` | savas-hikayesi | **sirada** — aynı · sefer oku `SEFER-OK-0077`de |
| H-0037 | `p77b-abdulhamid-filistin-herzl-tartismasi` · `p77b-abdulhamid-ittihad-i-islam-guc-mu-koz-mu` | tartisma ×2 | **sirada** — havuzda zaten 7 Abdülhamid kartı var (istibdat · 31 Mart · itibar · şahsiyet · toprak kayıpları · yenilikler · Özi); Hamidiye Alayları `p77c`de. Mükerrer yazılmadı, kartı OLMAYAN iki tartışma seçildi |
| H-0042 | `p77b-kimdir-mehmed-v-resad-sahsiyet` | kimdir | **sirada** |
| H-0043 | `p77b-kafkas-cephesi-ve-kafkas-islam-ordusu` | savas-hikayesi | **sirada** — 1914-1918 bütün Kafkas cephesi + İslâm Ordusu; Erzurum 1916 ayrıntısı `p77a`da olduğu için özet düzeyde |
| H-0051 | `p77b-kimdir-fahreddin-pasa-medine-mudafii` | kimdir | **sirada** |
| H-0052 | `p77b-buyuk-romanya-1918` · `p77b-sirp-hirvat-sloven-kralligi-yugoslavya-1918` | sebep-sonuc ×2 | **sirada** — ⚠️ Romanya kartının çapası çıplak `1918-12-01` (§3 ①) |
| H-0054 | `p77b-mustafa-kemal-samsun-yolculugu-1919` | sebep-sonuc | **sirada** — sefer oku `SEFER-OK-0077`de |
| H-0056 | `p77b-alsas-loren-tarih-strateji-ekonomi` | sebep-sonuc | **sirada** — TDV kapsamı dışı; Britannica + 1914-1918-online |
| H-0067 | `p77b-istanbulun-resmi-isgali-1920-sebep-sonuc` | sebep-sonuc | **sirada** |
| H-0068 | `p77b-son-meclis-i-mebusan-neden-dagitildi` · `p77b-misak-i-milli-nedir` | sebep-sonuc + tartisma | **sirada** |
| H-0085 | `p77b-sakarya-meydan-muharebesi-1921` | savas-hikayesi | **sirada** |

`sirada` = kart diskte, sınavı temiz; `cozuldu` ancak dosya `_EKOKUMA_DOSYA_ADLARI`na bağlanıp
yayına inince.

---

## 2. Kaynak ve kaynak içi çelişkiler

**TDV (gövde doğrudan HTML'den, 18 madde):** sarikamis-harekati · enver-pasa · cemal-pasa ·
fahreddin-pasa · mehmed-v · abdulhamid-ii · ittihad-i-islam · siyonizm · azerbaycan · baku · romanya ·
yugoslavya · samsun · mustafa-kemal-ataturk · milli-mucadele · meclis-i-mebusan · misak-i-milli ·
sevr-antlasmasi.

**TDV tuzakları:** 302 (ölü): kanal-harekati · suveys-kanali · kafkas-islam-ordusu · nuri-pasa ·
sakarya-meydan-muharebesi · ataturk-mustafa-kemal · alsas-loren. Tuzak ④ (canlı, boş gövde):
`sakarya`, `istiklal-harbi`. Tuzak ② (canlı, yanlış kişi): `mustafa-nuri-pasa`.
Arama alanında slug çıkarmak için `denetim/EKOKUMA-0077-B-ara.py` yazıldı ama TDV arama sonuçları
JS ile çiziliyor — curl/urllib sonuç listesini GÖRMÜYOR (yalnız tarayıcı gördü). ⇒ **"TDV aramasında
çıkmadı" hükmü curl ile verilemez.**

**Akademik (TDV kapsamadığında):** *1914-1918-online. International Encyclopedia of the First World
War* (FU Berlin, hakemli) — Egypt · Cemal Paşa (Kayalı) · War Aims Ottoman (Yasamee) · Caucasus Front
(Martirosyan) · Army of Islam (Murgul) · Medina, Siege of (Kayalı) · Alsace-Lorraine (Vlossak) · Romania
(Heppner) · Yugoslavia (Trgovčević) · Greco-Turkish War (Macar). Britannica: Alsace-Lorraine.
⚠️ Bu site de curl'e 7,4 KB'lık kabuk döndürüyor; içerik tarayıcıdan (aynı köken `fetch`) okundu.

**Kartlarda AÇIKÇA beyan edilen ayrışmalar:**
| konu | A | B | kartta |
|---|---|---|---|
| Sarıkamış kaybı | TDV `sarikamis-harekati`: ~30.000 şehid (+~20.000 esir), "90.000 doğru değil" | TDV `enver-pasa`: 90.000'in "çok büyük bölümü" · akademik 78-90 bin | `tartisma` ① |
| Sarıkamış başlangıcı | `sarikamis-harekati`: 22 Aralık | `enver-pasa`: 18 Aralık | `tartisma` ② |
| Sakarya bitişi | TDV (2 madde): 12 Eylül · 21 gün | akademik: 13 Eylül · 22 gün | `tartisma`, kesinlik `tartışmalı` |
| Misâk-ı Millî | 28 Ocak: özel toplantıda 121 imza, **oturum yok** | 17 Şubat: oturumda oy birliğiyle kabul | metin |
| Mustafa Kemal'in unvanı | aynı TDV maddesi "Üçüncü Ordu" | "Dokuzuncu Ordu" (kararname cümlesi) | `not` |
| Bakü'nün İngiliz işgali | TDV `azerbaycan`: Kasım 1919 | mütareke Ekim 1918 + çekilme | gün verilmedi, `tartisma` ② |
| Transilvanya/Bukovina | TDV 1699 / 1775 | akademik 1690/91 / 1774-76 | `not` |

---

## 3. Başka oturumların dosyasına düşen BULGULAR — ben dokunmadım

1. **Büyük Romanya'nın kronoloji maddesi YOK.** Paket başlığı *"1 Aralık 1918 — … Büyük Romanya'nın
   kuruluşu — aynı gün, iki devlet"* diyor, ama 6.651 maddede `1918-12-01` günü yalnız Sırp-Hırvat-
   Sloven maddeleri var; "Romanya" geçen son madde 1913. Kart çıplak `"1918-12-01"` çapasıyla o
   güne bağlandı (bugün SHS maddelerinde görünür; bir Romanya maddesi eklenirse kod değişmeden onda da
   görünür). Kaynak hazır: TDV `romanya` — *"…Romanya Krallığı bayrağı altında birleşti. Böylece Büyük
   Romanya … oluştu (1 Aralık 1918)."*
2. **Samsun maddesi ay hassasiyetinde:** `olaylar.js` `t:"1919-05"`. TDV `mustafa-kemal-ataturk`
   AYNEN: *"…19 Mayıs 1919 sabahı Samsun'a ulaştı."* ⇒ gün kaynaklı; `CLAUDE.md §8` ("gün yaz")
   gereği `1919-05-19` yazılabilir. ⚠️ Değiştirilirse bu kartın çapası `1919-05|Samsun` → `1919-05-19|Samsun`
   olarak GÜNCELLENMELİ (yoksa kart sessizce kopar).
3. **Misâk-ı Millî maddesinin başlığı TDV ile çelişiyor:** `olaylar_ek5.js` `1920-01-28` *"…son Osmanlı
   Meclisi'nde kabulü"*. TDV `misak-i-milli`: 28 Ocak'ta imza, *"meclis o gün herhangi bir oturum
   yapmamıştır"*; kabul 17 Şubat 1920. Öneri: başlık "…imzalanması" ya da gün 17 Şubat.
4. **Sakarya günü:** kronoloji `1921-09-13`; TDV iki maddede **12 Eylül**. `§4` "çelişirse TDV esastır"
   — hüküm koordinatörün. Kart iki günü de beyan ediyor.
5. **Birinci Kanal Harekâtı `1915-01-14`:** okunan kaynaklarda doğrulanamadı (TDV: 7 Ocak Birüssebi'den
   hareket, "Şubat 1915" harekâtı; akademik: baskın 26 Ocak–4 Şubat). `bulunamadı` — yanlış demiyorum.

---

## 4. Ne bulamadım

1. Birinci Kanal Harekâtı'nda Osmanlı kuvvetinin sayısı (kartta "kaynakta sayı verilmiyor").
2. Almanya'nın Kanal Harekâtı'ndan beklentisini anlatan kaynak cümlesi — Alman kurmayların harekâtı
   yönettiği okundu; Sarıkamış'taki "Rus kuvvetlerini bağlama" gerekçesi Kanal'a TAŞINMADI.
3. Bandırma vapurunun yol üzerindeki uğrakları.
4. Sakarya'da Türk kuvvetinin sayısı ve kaybı.
5. Kamu malı/CC0 görsel — paket bu 12 madde için görsel taşımıyor; `gorsel:` açılmadı.

---

## 5. Aletler (hepsi `denetim/`, `arac/` donuk)

- `EKOKUMA-0077-B-tdv.py` — 0076-B TDV çıkarıcısının kopyası, kendi önbellek dizini.
  **Önbellek (19 madde) iş bitince SİLİNDİ** (telif; 0076-B'nin uygulaması).
- `EKOKUMA-0077-B-tara.py` — 0076-B çapa aletini kullanarak anahtar kelimeyle kronoloji taraması.
- `EKOKUMA-0077-B-ara.py` — TDV arama sonuçlarından slug çıkarma denemesi; ⚠️ JS ile çizilen sonuç
  listesini curl GÖRMEZ (§2) — boş çıktı "yok" demek değildir.
- `EKOKUMA-0077-B-sina.py` — teslim sınavı, iki yönlü (`--ters`).

---

## 6. İstenen

**BAĞLAMA** (koordinatör): `js/app.js` `_EKOKUMA_DOSYA_ADLARI` dizisine tek satır —
`"ekokuma_p77b",        // window.EKOKUMA_P77B — EKOKUMA-0077-B (15 kart)`.
`index.html`e satır GEREKMEZ (ek okuma dosyaları tembel yüklenir).
