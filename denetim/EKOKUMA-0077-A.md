# EKOKUMA-0077-A — 14 madde · Çanakkale · Irak · Kafkas · Hicaz · Filistin

**Paket:** `parti-emrelic-0077` · **Şartname:** `oturumlar/EKOKUMA-0077-A.md`
**Teslim:** 27 Eylül 2026 · **Koordinatör:** YILDIRIM BAYEZIT

---

## 0. ÖZET

| | sayı |
|---|---|
| Madde | **14 / 14** işlendi |
| Üretilen ek okuma kartı | **14** (`data/ekokuma_p77a.js` → `window.EKOKUMA_P77A`) |
| `olay:` çapası | **22 / 22** gerçek kronoloji maddesine tutuyor |
| Ters yön sınavı (gün kaydırılmış sahte çapa) | tutmadı ✓ |
| Kimlik çakışması (709 canlı id'ye karşı) | **0** |
| Geliştirici sesi | **0** |
| TDV slug denemesi | gövde çekilen **37** (kartlarda kullanılan 25) · ölü (302) **48** · boş/boilerplate gövde **2** (`ataturk`, `dimask`) · 503 **3** |
| Akademik kaynak (DergiPark PDF gövdesi okundu) | **6** |
| Kaynakların kendi içindeki çelişki | **5** (kartlarda açıkça söylendi, §3) |

**Dosyalarım**
```
data/ekokuma_p77a.js              -> window.EKOKUMA_P77A (14 kart)
denetim/EKOKUMA-0077-A-dogrula.js doğrulayıcı (node ile koşar; KRONO-0076-B'ninkinden uyarlandı)
denetim/EKOKUMA-0077-A.md         bu rapor
```
🔴 `js/app.js`e **dokunulmadı**. Kartların okura ulaşması için `_EKOKUMA_DOSYA_ADLARI`
listesine `"ekokuma_p77a"` satırı gerekir — koordinatörün işi. O satır inmeden
hükümler `sirada`dır, `cozuldu` değil.

Doğrulama:
```
node --check data/ekokuma_p77a.js
node denetim/EKOKUMA-0077-A-dogrula.js     -> SONUC: DOSYA GECERLI
```

---

## 1. HÜKÜMLER

| Madde | Kart id | Çapa | Hüküm |
|---|---|---|---|
| H-0010 | `p77a-18-mart-nusret-seyid` | 1915-03-18 Çanakkale Zaferi | **sirada** — kart hazır, yükleyici satırı bekliyor |
| H-0011 | `p77a-canakkale-amac-bedel-onem` | 1915-03-18 · 1915-04-25 | **sirada** |
| H-0022 | `p77a-kut-1915-isgal-ve-1916-zafer` | 1915-09-26 · 1916-04-29 | **sirada** (kart) + **zaten-dogru** (kronoloji) — aşağıda |
| H-0023 | `p77a-erzurum-1916-nicin-dustu` | 1916-02-16 Erzurum | **sirada** |
| H-0024 | `p77a-dogu-cephesi-basat-faktor` | 1916-03-01 Bitlis · 1916-02-16 | **sirada** |
| H-0025 | `p77a-trabzon-1916-sahil-sirasi` | 1916-04-18 Trabzon | **sirada** (kart) — harita yüzü başka kolda, §2 |
| H-0026 | `p77a-kut-zaferi-nasil` | 1916-04-29 | **sirada** |
| H-0027 | `kimdir-serif-huseyin` | 1916-06-10 Şerif Hüseyin | **sirada** |
| H-0028 | `p77a-erzincan-1916-oncesi` | 1916-07-24 Erzincan | **sirada** (kart) + **senin-kararin** (otomatik araştırma isteği) — aşağıda |
| H-0035 | `p77a-ucuncu-gazze-cephe-yarilmasi` | 1917-11-07 Gazze | **sirada** |
| H-0036 | `p77a-kudus-teslimi-1917` | 1917-12-09 Kudüs | **sirada** |
| H-0038 | `p77a-dogu-anadolu-isgal-kurtulus` | 1918-02-24 · 02-26 · 03-12 | **sirada** |
| H-0040 | `p77a-dogu-anadolu-kurtulus-sebebi` | 1918-03-12 · 03-03 · 02-24 | **sirada** |
| H-0045 | `p77a-filistin-bozgunu-1918-nablus-sam` | 1918-10-01 Şam · 1918-10-27 Halep | **sirada** |

**H-0022 — `zaten-dogru` gerekçesi:** Emre "kronolojide zafer gibi görünmüyor" diyor.
Görünmemesi doğru: 26 Eylül 1915 İngilizlerin Kût'u **alışıdır** (TDV `kutulamare`:
"yol üzerindeki Kûtül'amâre'yi işgal ettiler (26 Eylül 1915)"). Zafer ayrı maddedir:
`olaylar_ek.js` 1916-04-29 "Kûtülamâre Zaferi". Kart iki tarihi birbirine bağlar
(Selmânıpâk → kuşatma → teslim).

**H-0028 — `senin-kararin` gerekçesi:** Emre'nin ikinci cümlesi bir **süreç** istiyor:
"bir toprak ele geçirildi denecekse öncesinde çevresindeki toprakların durumu
otomatik araştırılmalı, kronoloji maddesinde anılmalı, harita buna göre çizilmeli".
Bu bir ek okuma değil, yeni bir denetim/iş akışı talebidir (kronoloji + harita
kolları). Kapsamı ve kime verileceği koordinatör/Emre kararıdır. Ek okuma yüzü
(Erzincan'dan önce neresi düşmüştü) kartta yanıtlandı.

---

## 2. HARİTA KOLUNA DEVREDİLECEK ÖLÇÜM (H-0025 · H-0028)

Bu kol haritaya dokunmaz; ama iki madde "haritada öyle görünüyor" diyor. Kaynaklı
işgal sırası ölçüldü, kronolojide karşılığı olup olmadığı tarandı:

| Yer | Rus işgali | Kaynak | Kronolojide madde var mı |
|---|---|---|---|
| Hopa | Ocak 1916 ortası (gün yok) | Türkman | **yok** |
| Arhavi | **bulunamadı** | — (TDV slug'ı ölü) | yok |
| Erzurum | 1916-02-16 | TDV erzurum | var |
| Muş | 1916-02-18 | TDV mus | var |
| Aşkale | Şubat 1916 sonu (gün **bulunamadı**) | Türkman | **yok** |
| Bitlis | 1916-03-01 | TDV bitlis | var |
| Rize | **1916-03-08** | TDV rize · Türkman | **yok** |
| Mamahatun (Tercan) | 1916-03-15 | Türkman | **yok** |
| Trabzon | 1916-04-18 | TDV trabzon | var |
| Bayburt | **1916-07-16** | Türkman (TDV yalnız "1916") | **yok** |
| Gümüşhane | **1916-07-19** | TDV gumushane | **yok** |
| Kelkit | 1916-07-22 | Türkman | **yok** |
| Erzincan | 1916-07-24 | TDV erzincan | var |

⇒ **Rize Trabzon'dan ~6 hafta ÖNCE, Bayburt Trabzon'dan ~3 ay SONRA düştü.** Emre'nin
H-0025 görselindeki izlenim (Trabzon Rize/Bayburt'tan önce gitmiş gibi) kronolojide
Rize/Bayburt/Gümüşhane/Kelkit maddelerinin **olmamasıyla** tutarlı; haritanın o
noktalarda ne gösterdiği **ölçülmedi** (bu kolun dosyası değil). Tarama betiği:
`olaylar*.js` + `kronoloji*.js`, 1916 ve 1918, yer adıyla.
Kurtuluş tarafı: Gümüşhane 1918-02-28 (TDV), Rize ve Bayburt **gün bulunamadı**.

---

## 3. KAYNAKLARIN KENDİ İÇİNDEKİ ÇELİŞKİLER (kartlara yazıldı, uydurma tercih yapılmadı)

1. **Nusret'in mayın gecesi:** TDV `canakkale-muharebeleri` + Semiz → 17/18 Mart;
   Taşkıran → 7-8 Mart. Kart ikisini verir, `kesinlik:"tartismali"`.
2. **Kût teslimi:** TDV `kutulamare` 29 Nisan 1916 · TDV `birinci-dunya-savasi`
   28 Nisan 1916. Müstakil madde esas alındı.
3. **Şerif Hüseyin isyanının başlangıcı:** TDV `fahreddin-pasa` 3 Haziran (Medine) /
   9 Haziran (Mekke genel saldırı); TDV `serif-huseyin` "Haziran 1916" + 27 Haziran
   bildirisi. Kronolojinin `1916-06-10` günü bu iki maddeden **okunmuyor** — kart
   çapayı değiştirmedi, günleri metinde verdi. Tâif: 17 Eylül (serif-huseyin) ↔
   22 Eylül (fahreddin-pasa); kronolojideki `1916-09-17` birinciyle uyuşuyor.
4. **Kudüs:** TDV `filistin` Allenby'nin girişi 11 Aralık; TDV `birinci-dunya-savasi`
   9 Aralık. Üzen ayırır: 9 Aralık teslim, 11 Aralık törenli giriş. Ayrıca TDV
   `filistin` "Haçlı seferleri şimdi bitti" sözünü aktarır, Üzen bu tür sözlerin
   kanıtlanamadığını yazar — kartta ikisi de verildi.
5. **Muş'un 1916 kurtuluşu:** TDV `mus` 26 Temmuz · Türkman 6 Ağustos.

---

## 4. BULUNAMADI

- **Seyid Onbaşı:** TDV'de madde yok, Çanakkale maddelerinde anılmıyor. Tek akademik
  dayanak Taşkıran; Semiz'in ayrıntılı 18 Mart anlatısı onu anmıyor ve Ocean'ı
  mayına bağlıyor. Kart bunu açıkça söyler. (DergiPark'ta bulunan "Seyit Onbaşı"
  başlıklı ikinci makale bir eğitim/metafor çalışması çıktı — tarih kaynağı değil,
  kullanılmadı.)
- **Arhavi** işgal günü · **Aşkale** işgal günü · **Rize/Bayburt** kurtuluş günü.
- **Van**'ın işgal günü: TDV yalnız "1915-1917 Rus işgali" der.
- TDV'de müstakil madde yok (302): Yıldırım Ordular Grubu, Allenby, Liman von
  Sanders, Falkenhayn, Halil (Kut) Paşa, Vehib Paşa, Brest-Litovsk, Nusret,
  Seyid Onbaşı. Bu tanecik akademik kaynaktan alındı ve `kaynak:`ta adıyla yazıldı.

## 5. YÖNTEM NOTLARI

- TDV arama sayfası (`/arama/?q=`) istemci tarafında doluyor, betikle sonuç
  dönmüyor → slug'lar doğrudan denendi; 302 = ölü, 503 = taşıma arızası (tekrar
  denenmedi, madde başka slug'dan okundu).
- `WebFetch` küçük modelle özetlediği için **kullanılmadı** (§4: küçük model yok);
  DergiPark PDF'leri `pypdf` ile ham gövde olarak çekilip pasaj pasaj okundu.
- Her çapa `_ekNorm` + `_ekBagEslesir` (app.js'ten birebir kopya) ile sınandı;
  sınav önce bilinen pozitif (1915-03-18) ile ateşlendi, sonra gün kaydırılmış
  negatifle (1915-03-19) gevşek olmadığı gösterildi.

---

## 6. EK GÖREV — PAKET 0080 (M-5320, 28 Eylül 2026)

Aynı dosyaya (`data/ekokuma_p77a.js`, yükleyici satırı zaten `js/app.js`te) 3 kart
eklendi → toplam **17 kart**. Doğrulayıcı: şema 0 · ses 0 · çapa hepsi tutuyor ·
725 canlı id'ye çakışma 0.

| Madde | Kart id | Çapa | Hüküm |
|---|---|---|---|
| H-0006 | `kimdir-sehzade-halil-orhan-oglu` (kim, hikâye) · `p80-sehzade-halil-sebep-etki-sonuc` (SEBEPLER · ETKİLER · SONUÇLAR ayrı başlıklarla) | 1357-08-01 Şehzade Halil | **sirada** (dosya zaten yükleyicide; yayın inince görünür) |
| H-0026 | `p80-saray-ovasi-ilhak-1448` | 1448-01-01 Saray ovası | kart **sirada** + harita yüzü **koordinatöre** (§6.2) |

### 6.1 H-0006 — kaynak
TDV `orhan` (İnalcık) olayı gün gün anlatır: 758/1357'de 11 yaşında İzmit körfezinde
kaçırılış, Foça valisi Leo Kalothetos, "Bizans sarayının tertibi" yorumu, Orhan'ın
dört şartlı antlaşması, 1359 Üsküdar-Kızkulesi pazarlığı, **30.000 Venedik altını**,
İrene ile nişan, veliahtlık vaadi ve unutuluşu. TDV `murad-i`: teslim Eylül-Ekim 1359,
1359 Haçlı çıkarmasının Lapseki-Saros'ta önlenmesi, 1362'de Halil'in 16 yaşında
adamlarının taht girişimi.
**BULUNAMADI:** Halil'in 1362 sonrası akıbeti · kaçırılışın ayı/günü.
🟡 **Kronoloji notu (başkasının dosyası, dokunulmadı):** `olaylar_ek.js:95`
`t:"1357-08-01"` ama `gun:"1357"` ve TDV yalnız 758/1357 veriyor → `-08-01`
kaynağı okunmadı (§4 sahte kesinlik şüphesi; 758 Hicrî yılı 1356 Aralık-1357 Aralık'ı
kapsar). Hüküm sahibine.

### 6.2 H-0026 — HARİTA ŞÜPHESİ ÖLÇÜLDÜ
`girdi.yukle()` ile 1448-06-01 günü, kutu 41.8-44.6 K / 17.6-22.0 D (25 yerleşim):
```
OSMANLI (d:)        3   Saraybosna · Visoko · Üsküp
bosna               7   Vişegrad · Foça · Koniçe · Tuzla · İzvornik · Travnik · Herseknovi
sirp-despotlugu     5   Niş · Alacahisar · Kragujevac · Yagodina · Çaçak
sirbistan           4   Yenipazar · Priştine · Prizren · Podgorica
hersek 2 · venedik 2 · macaristan 1 · SAHİPSİZ 1 (Cetinje)
tâbi (v:)           0
```
⇒ Atlasta Saraybosna+Visoko, Üsküp'ten ~250 km ötede **yabancı boyalı** topraklarla
çevrili bir Osmanlı adası. Emre'nin görseli (H-0026-1.png) tam bunu gösteriyor.
**Kaynağa göre ada kendisi DOĞRU** (TDV saraybosna: Hodidjed-Saray ovası 1448'de
tamamen Osmanlı idaresinde, "çift taraflı kontrol"). **Yanlış olan çevresi:**
- TDV `bosna-hersek` + `saraybosna`: Bosna kralları **1428-1429'da haraca bağlandı**,
  Stjepan Tomaš (1443-1461) haraç ödemeyi sürdürdü → 1448'de Bosna **tâbi** olmalı;
  atlasta 7 Bosna yerleşiminin hiçbirinde `v:` yok.
- TDV `sirbistan`: Sırp Despotluğu Osmanlı **vasalıydı** (Brankoviç 1427-1456) → 5
  despotluk yerleşiminde de `v:` yok.
Bu bir **koridor** eksiği değil (kaynakta doğrudan idare edilen bir koridor yok),
bir **tâbi statüsü eksiği** (`v:` alanı). Tâbi açık renkle çizilseydi ada, Osmanlı
rengindeki tâbi kuşakla ana karaya bağlı görünürdü. Sınıflandırma ve kime
verileceği koordinatörün; ben düzeltmedim.
Ek not: `sirbistan` kimliği (`harita:` anahtarı; künyesi `sirbistan-nemanjic`
1217-1402) 1448'de Yenipazar/Priştine/Prizren/Podgorica'da kullanılıyor —
künye penceresini aşıyor mu, ölçmedim (§3.5 sınıflandırma işi).
