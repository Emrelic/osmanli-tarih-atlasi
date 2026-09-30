# ARAYUZ-MADDE-0930 — arayüz maddeleri, kilit altında hazırlık (30 Eylül 2026)

Makine okunur: `denetim/ARAYUZ-MADDE-0930.json`. Hiçbir kilitli dosyaya
(`js/app.js` · `index.html` · `css/style.css` · `js/suzgec.js`) ve `data/`ya
YAZILMADI; `git` yalnız `git apply --check` / `git show` (salt okur) için kullanıldı.

## 1 · Evren — sayım doğrulandı
`ACIK-BIRLESIK-0930.json` → `hukum=sirada` + notunda `app.js|index.html|koridor.js|suzgec.js`
= **12 madde** (app.js 7 · index.html 4 · koridor.js 1 [index.html ile aynı madde] ·
suzgec.js 1). Koordinatörün sayımıyla birebir. Aynı desene uyan `olculecek` 5 ·
`senin-kararin` 1 madde **atlandı: 6**.

## 2 · Hüküm tablosu

| Parti/Madde | Konu | Bugün | Yeni hüküm | Ne gerekiyor |
|---|---|---|---|---|
| 0052/H-0114 | devletsiz halka zamansız | geçerli (`app.js:2727`) | sirada | **yama hazır** `halka-zaman.diff` |
| 0081/H-0009 | Şahkulu Teke→Sivas oku | geçerli (`app.js:5151`) | sirada | **yama hazır** `isyan-yayilma.diff` |
| 0052/H-0014 | komşu: Osmanlı ≡ tâbi | geçerli (`suzgec.js:768`) | sirada | **yama hazır** `komsu-aile.diff` |
| 0042/H-0004 | Katalan oku 1303 maddesinde yok | geçerli | sirada | **veri yaması hazır** `katalan-f.diff` |
| 0068/H-0018 | kart tek paragraf | kaynakta düzelmiş | **bayat** | `ekokuma_celali.js` commit |
| 0052/H-0087 | kart başlığı boş | kaynakta düzelmiş | **bayat** | `ekokuma.js` commit |
| 0052/H-0007 | yanlış Damad İbrahim kartı | kaynakta düzelmiş, pakette YOK | sirada | `paketle.py yenile` |
| 0035/H-0087 | 8 katman ilkesi / yol ağı | geçerli | sirada | kök md + veri (payım dışı) |
| 0068/H-0006 | savaş şeması genel kuralı | geçerli | sirada | VERI-YAPISI + veri (payım dışı) |
| 0068/H-0027 | 1799 işgal taraması | geçerli | sirada | yerleşim verisi (payım dışı) |
| 0052/H-0039 | idam genel kartı | geçerli | sirada | ek okuma verisi (payım dışı) |
| 0054/H-0020 | antlaşma haritaları 4 kayıt | geçerli | sirada | veri + Emre onayı (payım dışı) |

**Satır kaymaları ölçüldü:** H-0114 `2692→2727` · H-0087 `index.html:109→130`. suzgec.js:760-768 kaymamış.

## 3 · Yamalar — hepsi `git apply --check` TEMİZ, beşi birlikte de temiz

| Yama | Hedef | Sınav |
|---|---|---|
| `ARAYUZ-MADDE-0930-halka-zaman.diff` | js/app.js | node --check ✓ · tarayıcıda SINANMADI (kilit) |
| `ARAYUZ-MADDE-0930-isyan-yayilma.diff` | js/app.js | node --check ✓ · bugün `yayilma:` alanlı kayıt 0 ⇒ ok 0 |
| `ARAYUZ-MADDE-0930-komsu-aile.diff` | js/suzgec.js | node --check ✓ · 1738 madde: 15 madde +20 yerleşim, 0 düşen |
| `ARAYUZ-MADDE-0930-katalan-f.diff` | data/savaslar.js | node --check ✓ · eşleşme tam 1 |
| `ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi.diff` | arac/denetle_yayin.py | py_compile ✓ · iki yönlü sınav 5/5 |

⚠️ Üç kod yaması **UFUK-DUGME-0930'un commitlenmemiş paketine** (bugünkü çalışma
ağacı) karşı yazıldı. UFUK ile mutabakat (tahta M-5609): **onun üçlüsü önce iner,
sonra bu üçü**; iner inmez `git apply --check` + `node --check` yeniden koşulur.

### H-0014 ayrıntı — neden "iki uç da dolu" şartı
İlk sürüm 16 madde / 21 yerleşim ekledi; biri **yanlıştı**: 1482-01-01 Cetinje
(`""→tabi:zeta`) ile Kırcaali (`""→osmanli`) 500 km arayla "aynı olay" sayıldı.
Sahipsizden kazanç zayıf bağ ⇒ aile eşitliği yalnız iki ucu da dolu el değiştirmede.
Kalan 20 eklemenin hepsi aynı gün aynı el değiştirme (Tarki 1578/1607 Şirvan ·
Oltenya 1739 Belgrad · Siwa 1914 Mısır · Prevadi 1908 …). 🟡 Gözden geçir:
1371-09-26 Dejanoviç maddesi Malak Dervent + Umur Fakih'i alıyor (`s:bulgaristan→osmanli`,
Çirmen'in aynı günü) — o gün bu iki yeri alan başka madde yok.

### H-0004 ayrıntı — neden kod değil veri
`app.js:5815` kuralı doğru ("başında madde varsa kırpma yok"). Tutmamasının sebebi
`savaslar.js:684` `f:"1303-09-01"` — kaynaksız gün (maddenin kendi `ic_not`u:
"DAYANAK DEĞİLDİR"). TDV yıl verir ⇒ §4: `1303-01-01`. Uygulanınca ok 1303 maddesiyle
belirir. ⚠️ savaslar.js paket içinde: yama sonrası `paketle.py yenile` şart.

## 4 · KAPI SORUSU — istenen soru yakalamazdı, başka soru yakalıyor

Alet: `ARAYUZ-MADDE-0930-OLC-KAPI.py` (salt `git show`).

| Revizyon | durum | A · global tanımsız | B · DOM etiket uyumsuz |
|---|---|---|---|
| 17cd2f98 | sağlam | 0 | 0 |
| **2ddede3d** | **KIRIK** | **0** ← yakalamazdı | **2** `#ufuk-sec <span>` ama js `.options`/`.value` |
| **9a956026** | **KIRIK** | 0 | **2** |
| 7f790990 | geri alındı | 0 | 0 |
| HEAD | — | 0 | 0 |
| çalışma ağacı (UFUK paketi) | — | 1 **yanlış alarm** (`acilisBitir`, `data/acilis_siluet.js:189`) | 0 ✓ |

**Neden:** kırılma JS→HTML yönündeydi (eski JS, yeni HTML'de `<span>` olmuş
`#ufuk-sec`i `<select>` sanıyor), HTML→JS yönünde değil. ⇒ Önerim **B**:
`dom_sozlesmesi()` — iki ağaçta sorulur, **çalışma ağacı** (tarayıcıda sınanan) ve
**HEAD** (yayınlanan). Yarım commit yalnız HEAD'de görünür; bugünkü vakada çalışma
ağacı tutarlıydı. Beklenti evreni 0 ise ✗ (ölçülemedi ≠ temiz).
**Sınır:** yalnız sabit id + değişkene atanan `getElementById` + 1500 karakterlik
pencere; `querySelector`, dinamik id, fonksiyonlar arası akış görülmez.

## 5 · Odak kapısı (§9)
Hiçbir yama odak çözümüne değmiyor: `arac/odak_cozum.js` yalnız `sahipAnahtari` ·
`sahipKimlikte` · `aktifVAdi` çağırır; `komsu-aile` yalnız `maddeDegisimleri`ni
değiştirir; `yer_id`/`odak_*`e dokunan yama yok ⇒ `odak_olc.py` koşturulmadı.

## 6 · Bulunamadı / ölçülemedi
- Yamaların **tarayıcıda** davranışı ölçülemedi (dosyalar kilitli).
- H-0014 ölçümü `olaylar`ı index.html'in yüklediği **paketlerden** okudu; paketler
  BAYAT (`paketle.py sina`: 37 kaynak) — yenilemeden sonra sayı değişebilir.
- Finschhafen halkası 1,05 km'de eşleşmedi (eşik 1 km) — zamansız kalır.
