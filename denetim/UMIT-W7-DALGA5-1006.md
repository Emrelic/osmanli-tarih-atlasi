# UMIT-W7-DALGA5-1006 — `dogrulanmadi` alanı + 4 boş yer_id sınıflaması

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- Bugün `dogrulanmadi` işaretli kayıt N: **1** (Deyrülkamer).
- "①'siz ② inebilir mi": **EVET, güvenli yön** — ② sayıyı basar, UYARI sürer (borç iki yerden görünür); ① tek başına inerse uyarı susar.
- 4 boş yer_id: **3 BEYAN** (p0917taraf — sınır düzenlemesi, tek nokta yok, gerekçe yazılı) · **1 BORÇ** (p0063).
- İş 1 diff'i origin/main'e tek başına: **RED** (1006b'ye bağlı).

**Öngörü ↔ ölçüm:** N = 1 ✓ · "①'siz ②" yönü ✓ · İş 1 diff'i main'e tek başına RED ✓ · **4 boş yer_id: 3 beyan/1 borç ✗ → ölçütle 4 BORÇ** (gerekçe kayda da commit'e de inmemiş; 3'ünün gerekçesi yalnız bir denetim dosyasında).

Temel: worktree `C:\atlas-w7` = origin/main **8552686e0716d2cd5d3a479b48e1cd92721e2c29** + `DURUM-TABLOSU-SAYIM-1006b.diff`.
Commit yok · `--yaz` yok · **motor tuzu dosyalarına (girdi.py dahil) dosya düzeyinde 0 dokunuş** · ağaç sonunda TEMİZ.

## İŞ 1 · `dogrulanmadi`

### 1a. Ölçüm
- Gerçek alan: **1 kayıt** — `data/yerlesimler_ek29.js:571` Deyrülkamer (Dayr al-Kamer) `dogrulanmadi:true` (kayıt `:570`). Node okuyucusuyla sayaç birebir (1 = 1).
- ⚠️ Metin taraması (`dogrulanmadi\s*:\s*true`) **4** verir: `ek29:256` ve `:260` YORUM, `:579` `kaynak:` dizgesi içinde — 1006'nın kapattığı "metinden sayma" tuzağının aynısı; bu yüzden sınav ④ node ile çapraz sınar.
- 🔴 **Tanımla ÇELİŞEN mevcut kullanımlar (yalnız ölçüm):**
  - `ek29:255-256` (yorum) Jasenovac: "KENDİ kaynağı bulunamadı, `dogrulanmadi:true` ruhunda" — bu kaynak YOKLUĞU; yeni tanıma göre `bulunamadı` sınıfı.
  - `ek29:259-261` (yorum): koordinatlar "GPS/harita ile birebir doğrulanmadı (`dogrulanmadi:true` damgası orijinal kayıtta duruyor)" — hazırlık kaydındaki damga KOORDİNAT doğrulamasıydı, iddia çelişkisi değil.
  - `data/hukuki_sinirlar.js` (ör. :74, :77, :177, :546-547, :579, :583): `dogrulanmadi: true|false` — "köşe kaynakta adıyla yok, orta noktadan türetildi" anlamında (dosyanın kendi yorumu :546). Ayrı şema; VERI-YAPISI tanımında ayrıca anıldı.
- Okuyan kod: `arac/` + `js/` grep → **0** (yalnız `data/`). Hükümle aynı.

### 1b. ① `BILINEN_ALANLAR` — METİN (girdi.py'ye DOKUNULMADI, diff ÜRETİLMEDİ)
Yer: **`arac/girdi.py:290`** — `"not": …` girdisinin son satırı (`"tersi (orada alan araçta yoktu ve beyan SESSİZCE DÜŞTÜ)",`) ile sözlüğü kapatan **`:291` `}`** arasına (origin/main 8552686e'de). Eklenecek tam metin:
```python
    "dogrulanmadi":
           "true ise kaydın bir iddiasının kaynağı VAR ama ona DAYANILAMIYOR "
           "(kaynak zayıf — tek dayanak Vikipedi — ya da kaynaklar çelişiyor). "
           "'bulunamadı' DEĞİLDİR: bulunamadı 'aradım yok', bu 'var ama "
           "dayanamıyorum' der. Hangi iddianın işaretlendiği `neden:`de yazılır. "
           "🔴 5 Ekim 2026'da eklendi: Deyrülkamer'de (ek29) kasıtlı beyan "
           "olarak duruyordu ama hiçbir kod okumuyordu — D265 ailesi. "
           "Sayacı `durum_tablosu.dogrulanmadi_say`; tanım VERI-YAPISI.md",
```

### 1c. ② sayaç — `DOGRULANMADI-SAYIM-1006.diff` (LF · CR 0 · 2 dosya · 174 satır)
- `durum_tablosu.py`: `dogrulanmadi_say(Y)` (girdi.yukle'nin döktüğü kayıtlar; kayıt düzeyi ya da `s/d/v/isg` dönemi; truthy sayar) · `dogrulanmadi_eki()` Yerleşim satırına `· doğrulanmadı işaretli kayıt: N` · istisna → `🔴 ÖLÇÜLEMEDİ (sebep)`, rakam yok · `__main__` adları listeler (`🟡 DOĞRULANMADI İŞARETLİ …`) — liste tabloda değil; `--yaz` §1.5'e yalnız eki yazar.
- **"alan yokken eski çıktı birebir" yorumum:** evrende alanı TAŞIYAN kayıt yoksa ek HİÇ basılmaz (satır eski biçim); alan varsa (değeri `false` olsa bile) N basılır — 0 dâhil. Böylece "0/1/3 → 0/1/3" ile "alan yokken birebir" birlikte sağlanıyor. ⚠️ Bedeli: alan veriden tamamen kalkarsa ibare de kaybolur (sayının 0 olduğu GÖRÜNMEZ). Tersini isterseniz (her zaman bas) tek satırlık değişiklik; seçim sizin.
- YENİ `denetim/ARAC-DOGRULANMADI-SINAV-1006.py` — **13/13:** ① enjeksiyon 0/1/3 → `…: 0/1/3` (+ `false` taşıyan ve alansız kayıt sayılmaz) · dönem düzeyi işaret = 1 kayıt · ② alan yokken ek boş, Yerleşim satırı ESKİ biçimle birebir, öteki 18 satır aynı · ③ `Y=None` · sözlük olmayan kayıt · liste olmayan dönem → ÖLÇÜLEMEDİ, rakam yok · ④ gerçek: sayaç = node okuyucusu = 1, Deyrülkamer listede, tabloda ek basılı.
- 1006b sınavı 63/63 ve `--sina` 9/9 — D1 üstündeyken de geçiyor.
- **Bağımlılık:** origin/main 8552686e'ye TEK BAŞINA `--check` **RED** (`durum_tablosu.py:448` — 1006b'nin `kronoloji_satiri` bağlamına dayanır) · origin/main + 1006b'ye İLERİ ✓ · GERİ ✗ · uygulanmış ağaçta GERİ ✓. ⇒ **sıra: 1006b → DOGRULANMADI-SAYIM-1006.**
- ÖNCE/SONRA (main+1006b → +D1, `--yaz`'sız, çıkış 0/0), `diff`:
```
< | Yerleşim (motorun okuduğu) | **4299** nokta, 93 girdi dosyası |
> | Yerleşim (motorun okuduğu) | **4299** nokta, 93 girdi dosyası · doğrulanmadı işaretli kayıt: 1 |
> 🟡 DOĞRULANMADI İŞARETLİ (kaynak çelişkili/zayıf, beyanlı): yerlesimler_ek29.js:Deyrülkamer (Dayr al-Kamer)
```
  Başka satır değişmedi; `UYARI alan: 'dogrulanmadi' …` satırı İKİ çıktıda da duruyor.

### 1d. "①'siz ② inebilir mi?" — ÖLÇÜLDÜ
| Durum | UYARI satırı | Sayı tabloda | Ölçüm yolu |
|---|---|---|---|
| bugün (ikisi de yok) | 1 | yok | gerçek koşu |
| **② tek başına** | **1 (sürer)** | **1** | gerçek koşu (main+1006b+D1) |
| ① tek başına | **0 (susar)** | yok | BELLEKTE taklit (`girdi.BILINEN_ALANLAR` sözlüğüne çalışma anında anahtar; dosya yazılmadı) |
| ① + ② | 0 | 1 | yukarıdakilerin birleşimi |

⇒ **② tek başına güvenli yön: EVET** — borç iki yerden görünür (UYARI + sayaç). **① tek başına TEHLİKELİ:** uyarı susar, sayaç yoksa borç hiçbir yerde görünmez (tam D265). ⇒ Kuyrukta ① ②'den ÖNCE inmemeli; ② şimdi, ① motor kuyruğuyla.

### 1e. VERI-YAPISI — `VERI-YAPISI-DOGRULANMADI-1006.diff` (LF · CR 0 · 46+ · bağımsız)
- Yeni alt başlık `### 🆕 dogrulanmadi:true` — yerleşim bölümünde, `bos:`/`kd:` bloğundan sonra, `kesinlik` öncesi (origin/main'de `VERI-YAPISI.md:247`).
- İçerik: ne demek (var ama dayanılamıyor: zayıf/çelişkili) · 🔴 `bulunamadı` ile ters ayrım tablosu · komşu emsali/türetilmiş değer bu alanın konusu DEĞİL · ne zaman konur · yalnız `true` · ne zaman kalkar (doğrulayan kaynak yazılınca SİLİNİR ya da iddia çıkınca) · görünürlük (sayaç + UYARI borcun ikinci yüzü) · `hukuki_sinirlar.js`teki aynı adlı farklı anlam.
- origin/main'e İLERİ ✓ / GERİ ✗; 1006b ve D1'den bağımsız (ikisiyle birlikte de uygulanıyor).

### 1f. Kapsam — Cres · Şefşâven · Maroa (YAZILMADI; yalnız yer + bugünkü Vikipedi beyanı)
| Kayıt | Dosya:satır | Bugünkü Vikipedi beyanı (aynen, kısaltılmış) |
|---|---|---|
| Cres (Cherso) | `data/yerlesimler.js:1659` (tek satır kayıt) | "Treaty of Rapallo (12 Kasım 1920) — Cres adası İtalya Krallığı'na verildi (WebFetch ile Wikipedia 'Cres' maddesi doğrulandı: 'At the end of World War I, with the Treaty of Rapallo signed in 1920, the island was handed over to the Kingdom of Italy')" |
| Şefşâven | `data/yerlesimler_h2_kuzeyafrika.js:98` (kayıt 98-100) | "islamansiklopedisi'de bu tanecik yok; Wikipedia '1924 retreat from Chaoen' — İspanyol tahliyesi 15 Kasım 1924 gecesi" |
| Maroa | `data/yerlesimler_a78_amerika.js:1649` `not:` (kayıt 1640-1649) | "Koordinat en.wikipedia (Maroa, Amazonas)" — ⚠️ burada Vikipedi yalnız KOORDİNAT dayanağı; tarih dayanağı `kaynak:` Fundación Empresas Polar DHV (:1647) |

Üçü de `GIRDI_DOSYALARI`nda (canlı). Bugün hiçbiri `dogrulanmadi` taşımıyor; koordinatör koyunca sayaç kendiliğinden 4'e çıkar (sınav ①'in gösterdiği gibi). ⚠️ Şefşâven'deki cümle "TDV'de bu tanecik yok" diyor — yeni tanıma göre o kısım `bulunamadı`, Vikipedi'ye dayanan kısım `dogrulanmadi`; ikisi aynı kayıtta. Maroa'da işaretlenecek iddia koordinattır, tarih değil.

## İŞ 2 · 4 boş `yer_id` — beyan mı borç mu
Ölçüt (sizin): gerekçe kayıtta (`ic_not*`, `kaynak`) ya da commit mesajında varsa BEYAN, yoksa BORÇ.

| Madde | Kayıtta gerekçe | Commit (`git log -S 'yer_id:""'`) | Başka iz | SINIF |
|---|---|---|---|---|
| p0063 `:26` 1734-05-31 Nâdir↔Golitsın | YOK (`ic_not_gun` yalnız takvim) | `b20363bc` 09-17 "UYGULA-2 C1 indi — 7 yama…" (alanı BOŞ getirdi, gerekçe yok) · `3a80130a` 09-22 KRONO-YER-0075 (mesaj genel, bu maddeyi anmıyor) | `denetim/KRONO-YER-0075.json`: K4_YERSIZ_ya_da_GEZICI · "Gezici ordugâh; kaynak audiyans yerini vermiyor ⇒ bulunamadı." | **BORÇ** (gerekçe ölçülmüş ama kayda inmemiş) |
| p0917taraf `:45` 1886-01-01 Tunus-Trablusgarp | YOK | `2caba846` 09-17 "UYGULA-3 — … Osmanli taraf maddeleri …" (alanı BOŞ getirdi) | KRONO-YER-0075: K2_BOLGESEL · "Sınır çizgisi olayı; uç noktalar d/kaynakta yok ⇒ bulunamadı." | **BORÇ** (aynı) |
| p0917taraf `:51` 1892-01-01 Gadames'e uzatma | YOK | `2caba846` (aynı) | KRONO-YER-0075: K2_BOLGESEL · "Aynı." | **BORÇ** (aynı) |
| p0917taraf `:57` 1906-10-01 Refah Anlaşması | YOK | `2caba846` (aynı) | KRONO-YER-0075: **K1_YERI_BELLI_BAGLANMAMIS** · "Refah atlasta YOK; ⚠️ 'Sina' aramasının tuttuğu 'Tûr (Sînâ)' Refah'a ait DEĞİL — kullanılmaz." | **BORÇ** (gerçek veri borcu: yer belli, nokta yok) |

⇒ **4/4 BORÇ.** İki alt sınıf: **3 "ölçülmüş-bulunamadı ama kayda inmemiş"** (gerekçe yalnız `denetim/KRONO-YER-0075.json`'da; kayda bir `ic_not_yer_id` ile inerse beyana döner) · **1 gerçek eksik nokta** (Refah). Projede `ic_not_yer_id` kalıbı bugün **0** kez kullanılıyor (grep). Tavan önermedim.

## Bulunamayan
- Jasenovac/Bosanski Brod'un "orijinal kayıttaki `dogrulanmadi:true` damgası"nın bugün nerede durduğu (`denetim/HAZIRLIK-BOSNA-NOKTA-0911.json` anılıyor) — açılmadı.
