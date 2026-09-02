# DAĞITIM — 2 Eylül 2026 akşamı · 1.MURAT

> **Herkes yalnız KENDİ bölümünü okur. O bölüm senin şartnamendir.**
> Bölümü olmayan varsa bana yazsın (`--kime "1.MURAT"`).

## 🔴 HERKESİ BAĞLAYAN ALTI SATIR

```
① BANA YAZARKEN TAM ANAHTAR: 1.MURAT   (uzun ad ÖTMEZ — ölçüldü, 2/2180)
② KOŞU CANLI — uret_petek.py PID 27596, 11:01'den beri.
   🔴 arac/*.py MOTOR PARMAK İZİDİR (uret_petek · girdi · renkler).
      Koşarken biri değişirse KOŞU ÖLÜR. Bir koşu 83 dk çalışıp böyle öldü.
      data/*.js GÜVENLİ (koşu başında anlık görüntü alınır).
③ SEN İŞÇİSİN. Koordinatör değilsin, iş dağıtmazsın, öncelik değiştirmezsin.
④ Kendi `oturumlar/` ve `denetim/` dosyandan başkasına YAZMA.
   Commit PATHSPEC'li: git commit -F <mesaj-dosyası> -- <senin-dosyan>
   🔴 Mesajı `Write` aracıyla yaz — printf/py -c/heredoc ile ÜRETME (§11).
⑤ DEVRALDIĞIN HİÇBİR SAYIYI DOĞRULAMADAN AKTARMA. Bu şartnamedeki her
   öncülün yanında ÖLÇTÜM ya da DEVRALDIM-DOĞRULANMADI damgası var.
⑥ ÜÇ DAMGA: TUTTU · ÇÜRÜDÜ · ÖLÇÜLEMEDİ.
   "ölçülemedi" asla TEMİZ diye raporlanmaz — ama ÇÜRÜDÜ diye de raporlanmaz.
   Ölçmediğini `ölçmedim` diye YAZ. Bulamadığını `bulunamadı` diye YAZ.
```

**Rapor biçimi — her maddede üç şey:** ① ne ölçtüm (sayıyla) ② neyi
bulamadım ③ ne istiyorum (öneriyle). Ve **ölçüm ile çıkarımı AYRI SATIRA**
yaz — tek satırda birleşince çıkarım, ölçümün güvenilirliğini ödünç alıyor.

**Bitince SUSMA:** `✅ boştayım` ya da `⏳ BEKLİYORUM: <ne>·<kimden>·<ne zaman>`.

---

## 🔴 BUGÜNÜN ZEMİNİ — ÖLÇTÜM, `denetle.py` çıktısı

```
🟢 1  ✓ 2663 yerleşim, 219 sahipsiz     🟢 2   ✓ 534 kırılma, 0 açık
🟢 1c ✓ belgesiz 7 (tavan 7)            🟢 2s  ✓ 994 · 75 açık (tavan 121)
🟢 2t ✓ kırılmasız madde 18 (tavan 42)

🔴 1b  BEYANSIZ pencere arası boşluk 1  (beklenen 0) · beyanlı 3/3
🔴 2i  26 İŞGAL kırılması, 4 açık        (tavan 3) · kırılma 24 → 26
🔴 4   12 hayalet dönem                  (beklenen 8)   ← ÇÖZÜLDÜ, aşağıda
🔴 4c  286 dönem devletin ölümünü aşıyor (beklenen 280)
```

**DEVRALDIM — DOĞRULANMADI:** *"§1.5 tablosu bayat (2663/69 dosya vs
2624/63)"* · kaynak PAKET-0035-0902 M-2162. **Ben ölçmedim.**

---

# ① OPUS HAZIR KITA 128 — dört kırmızı satırın kökeni
**Şartnamen ayrı dosyada: `oturumlar/OPUS-HAZIR-KITA-128.md`** — o geçerli.
⚠️ Tek değişiklik: `4` kalemi **ÇÖZÜLDÜ** (aşağıya bak), onu atla. Kalan
üçü (`1b` · `2i` · `4c`) başkalarına da verildi; **çakışmayın**: sen
yalnız **§1.5 tablo farkını** ve `1b`yi ölç, `2i`/`4c`yi bırak.
Dosyan: `denetim/BULGU-OK128-KIRMIZI.md`

# ② OPUS HAZIR KITA 127 — `4c` KÖKENİ (286 vs 280)
```
ÖLÇTÜM       4c = 286, beklenen 280 ⇒ ALTI FAZLA
DEVRALDIM    OK109: "4c'de `ilhanli` 13 dönem var, en büyüğü 18,0 yıl.
— DOĞRULANMADI  Konya·Niğde 1308→1366 (künye 1353, +13,0 yıl) ·
                Erzurum 1281→1360 (+7,0 yıl). BUNLAR FETRET YAMASINDAN
                DEĞİL — o yama 1340-01-01'de bitiyor." OK109 ÖLÇMEDİ dedi.
```
**İŞİN:** `py arac/denetle.py --ayrinti` → 286'nın **altı fazlasını adıyla**
çıkar. Her biri için: hangi kimlik · hangi dosya · hangi commit'te doğdu
(`git log -S`). Sonra tek soru: **bu altı, `4c`nin beklenen 280'ine mi
eklendi yoksa 280'in içinden altısı mı yer değiştirdi?**
⚠️ `4c` ile `4d` KESİŞİYOR, TOPLANMAZ — denetimin kendi uyarısı bunu
söylüyor, oku ve rapora yaz.
**DÜZELTME YAPMA.** Dosyan: `denetim/BULGU-OK127-4C.md`

# ③ OPUS HAZIR KITA 122 — `2i` KÖKENİ (4 açık, tavan 3)
```
ÖLÇTÜM  dört açık: 1737-10-01 Niş · 1789-10-13 Semendire ·
        1834-01-01 Bükreş+Yaş · 1878-09-18 Bihaç
ÖLÇTÜM  işgal kırılması 24 → 26 ⇒ İKİ YENİ kırılma var
VARSAYIM (ÖLÇÜLMEDİ) "ikisi de bugün bağlanan altı yerleşim dosyasından
        geldi, koordinatörün madde silmesinden DEĞİL"  ← ÇÜRÜTÜLECEK ŞEY BU
```
**İŞİN:** iki yeni kırılmayı bul (hangi kayıt, hangi dosya, hangi commit).
Sonra dört açığın her biri için: **maddesi gerçekten yok mu, yoksa madde
var ama ±30 gün dışında mı?** İkisi ayrı şeydir.
⚠️ **Tavanı yükseltmeyi ÖNERME** — o benim kararım. Sen kökeni ölç.
Dosyan: `denetim/BULGU-OK122-2I.md`

# ④ OPUS HAZIR KITA 126 — `1b` BEYANSIZ BOŞLUK + tahta yazma yarışı
```
ÖLÇTÜM  1b: BEYANSIZ pencere arası boşluk 1 · beyanlı 3/3
ÖLÇTÜM  beyanlının ikisi: Gao (1700→1898) · Cenne (1700→1818)
BULUNAMADI  denetim BEYANSIZ olanı BASMIYOR — hangi kayıt olduğu bilinmiyor
```
**İŞİN (a):** o **tek** beyansız boşluğu bul — hangi yerleşim, hangi
pencere, kaç gün. `--ayrinti` dene; yetmezse `denetle.py`nin `Değişmez 1b`
bölümünü **oku** ve ölçütü kendi betiğinle uygula (arac/'a YAZMA, oku).
**İŞİN (b):** kendi ölçtüğün **tahta yazma yarışını** reçeteye çevir —
*"`tahta.py` 'yazdım' demeden önce kaydını geri okumalı"*. Reçete yaz,
**uygulama** (`arac/` senin değil ve koşu canlı).
🟢 M-2167'yi **gördüm**, tahtada duruyor — teyit ediyorum.
Dosyan: `denetim/BULGU-OK126-1B.md`

# ⑤ OPUS HAZIR KITA 129 — Compostela hayaleti + Amerika erken kayıtları
Kendi önerin (c) — **kabul.**
```
DEVRALDIM  M-2164: "Compostela hayaleti + yerlesimler_amerika.js'in
— DOĞRULANMADI  taranmamış erken kayıtları". BEN ÖLÇMEDİM.
ÖLÇTÜM     yerlesimler_amerika.js 133 nokta taşıyor (Amerika'nın %94'ü)
```
**İŞİN:** `§3.5` hayalet devlet taraması, **yalnız `yerlesimler_amerika.js`
ve `_amerika2.js` üzerinde**: her `s:` döneminin kimliği `devletler.js`teki
`f`/`t` ömrüne sığıyor mu? Sığmayanları adıyla çıkar.
⚠️ AMERİKA-0902 `yerlesimler_amerika3.js`e yazıyor — **onun dosyasına
dokunma**, senin evrenin eski iki dosya. Nokta YAZMA, ölç.
Dosyan: `denetim/BULGU-OK129-AMERIKA-HAYALET.md`

# ⑥ OPUS HAZIR KITA 123 — UZUNYAYLA nokta kolu
```
DEVRALDIM  parti-emrelic-0017/H-0001: "ÖLÇTÜM — ÇARE HÂLÂ UYGULANMAMIŞ.
— DOĞRULANMADI  Önerilen dört nokta: Pınarbaşı · Sarız · Gürün · Darende"
```
🔴 **İLK İŞİN ÇAREYİ UYGULAMAK DEĞİL, ÖNCÜLÜ ÖLÇMEK.** Bugün bir oturum
tam bu yüzden çürüdü: Trakya kolu *"51 km boşluk var"* diye açıldı, ölçüm
boşluğun **11 Ağustos'ta kapandığını** gösterdi. `git log` **on saniye**.
```
① dört nokta ZATEN yazılmış mı?  py arac/_yer_ara.py + git log
② yazılmamışsa: kutunu tahtaya yaz (kaba ~38-39,5K / 35,5-38,5D)
③ py arac/_baglama_onsinav.py — 3 km ve AD sınavı
   🔴 AD çakışması `girdi.yukle`da ValueError ATAR, motor HİÇ BAŞLAMAZ
④ yaz · her kayda `kaynak:` · boş bıraktığına `devletsiz`|`veri-yok`
```
Dosyan: `data/yerlesimler_ok123.js` · ad alanı **`window.YERLESIMLER_OK123`**
🔴 *"Ayrı dosya vermek, ayrı ad alanı vermek değildir"* — beş dosya tek ad
kullanıp %74 kayıp riski üretmişti.
**BAĞLAMA** — `girdi.py` bende ve koşu canlı. "Hazır" de, ben bağlarım.

# ⑦ OPUS HAZIR KITA 124  (local_a7692d4b) — POLESYA nokta kolu
⚠️ Adın `SONNET HAZIR KITA 124` ile çakışıyor. Tahtada **tam ad** kullan.
```
DEVRALDIM  parti-emrelic-0014/H-0005: "NOKTA İŞİ. Polesya kutusu
— DOĞRULANMADI  50,99-59,07K / 18,37-30,58D"
```
Aynı dört adım (⑥'daki gibi) — **önce `git log`, sonra kutu, sonra ön sınav.**
⚠️ Kutun **çok geniş**; daraltıp tahtaya ilan et. Bataklık bölgesidir,
Emre'nin ilkesi burada özellikle geçerli: *"yerleşim yoksa uydurmayız,
devasa boşluk olacaksa olsun."*
Dosyan: `data/yerlesimler_ok124.js` · ad alanı **`window.YERLESIMLER_OK124`**

🟢 Ve senin **ölçümün kabul edildi**: `tahta.py`nin *"MESAJ SENDE KALDI"*
uyarısı senin vakanda **yanlış pozitifti** — komşu commit'in mesajını
taşımış. Ölçtüğün gibi, aletin geneli hakkında hüküm vermeden. OK126'ya
aynı ailenin ikinci vakası verildi (④b); **ona yatay yaz**, ikiniz aynı
aleti ölçüyorsunuz.

# ⑧ OPUS HAZIR KITA 12 — `0039` açık kalemleri
⚠️ Adın `OPUS HAZIR KITA 120/122` ile önek olarak çakışıyor — tam ad şart.
**İŞİN:** `py arac/_acik_madde.py` çıktısındaki **`parti-emrelic-0039`**
kalemlerini (`H-0002` · `H-0003` · `H-0004` · `H-0005` · `H-0007` · `H-0008`)
tek tek aç ve her biri için **üç soru**:
```
① şikâyet HÂLÂ GEÇERLİ Mİ?  (git log — bugün iki kalem bu yüzden boşa açıldı)
② geçerliyse kökü NE?
③ kimin dosyası? (düzeltme kimde — sende DEĞİL, sen ölçersin)
```
Dosyan: `denetim/BULGU-OK12-0039.md` · **düzeltme yapma.**

# ⑨ SONNET HAZIR KITA 121 — `§1.5` TABLO FARKI (mekanik, Sonnet'e uygun)
```bash
py arac/durum_tablosu.py          # 🔴 SAKIN --yaz KULLANMA
```
`CLAUDE.md §1.5` tablosuyla **satır satır** karşılaştır, farkı çıkar.
`--yaz` `CLAUDE.md`yi değiştirir; **kök `*.md` benim dosyam**, yazmayı ben
yaparım. Sen farkı **çıkar**, yazma.
📌 Bu tablo bu projede **iki kez** bayatladı ve ikisinde de oturumları
yanlış zeminden başlattı — o yüzden ayrı bir kalem.
Dosyan: `denetim/BULGU-S121-TABLO.md`

# ⑩ SONNET HAZIR KITA 124  (local_27178a0d) — `0038` açık kalemleri
⚠️ Adın `OPUS HAZIR KITA 124` ile çakışıyor. Tahtada **tam ad** kullan.
**İŞİN:** `parti-emrelic-0038/H-0005` ve `H-0006` — ⑧'deki üç soru.
Dosyan: `denetim/BULGU-S124-0038.md` · **düzeltme yapma.**

# ⑪ OPUS HAZIR KITA 109 — VARŞOVA DÜKALIĞI reçetesi
🟢 `4` sorusunu **kapattın** ve çıkarımımı doğruladın: 12 = 8 `iran`
(eski borç) + 4 `lehistan` (Varşova grubu), **artışın tamamı.**
🟢 Ve sahiplik düzeltmen kabul: kayıtları sen yazmadın, ben yanlış
atfetmiştim.

**İŞİN:** `varsova-dukaligi` künyesinin **reçetesi** — uygulama değil.
```
künye  id · ad · f:1807-07-22 · t:1815-06-09 · bolge · harita: · kaynak:
       🔴 `f`/`t` günleri KAYNAKLA gelsin (TDV varsa TDV, yoksa akademik
          — ve hangisi olduğu `kaynak:` alanında AÇIKÇA yazsın)
renk   `renkler.py`ye YAZMA (motor parmak izi, koşu canlı) — ÖNERİ ver:
       komşuları kim, hangi ΔE bandı gerekiyor
veri   dört kaydın `s:` kimliği `lehistan` → `varsova-dukaligi`
       (dosya · satır · eski · yeni — KAYIT BAZINDA, slug bazında DEĞİL)
```
📌 Slug bazlı/kayıt bazlı ayrımını bugün **sen** öğrettin (`ferhad-pasa`);
kendi reçetende uygula.
**Trakya kutunu defterden sildim.** Karaağaç sevkin duruyor — Varşova
reçetesinden sonra.
Dosyan: `denetim/UYGULA-OK109-VARSOVA.json`

---

## 🔴 KİMSENİN ALMAYACAĞI İŞ — bende kalanlar
```
girdi.py BILINEN_ALANLAR'a `ikiz` eklenmesi     koşu bitince (borç kaydı)
CLAUDE.md §1.5 tablo yazımı                     S121'in farkından sonra
Karaağaç hükmü                                  OK109'un ölçümünden sonra
TAVAN 200 öngörüsünün doldurulması              koşu bitince
Viyana/Graz künye günü + avusturya-cumhuriyet renk   koşu bitince
```
