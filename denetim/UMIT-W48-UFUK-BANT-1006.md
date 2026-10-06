# UMIT-W48-UFUK-BANT-1006 — ufuk_bantlari.js'i OKUYAN var mı?

Temel commit: `ce885ec2` (origin/main, ağaç C:\atlas-w48, detached) · 6 Ekim 2026

## 0. Öngörü (ölçümden ÖNCE yazıldı)
- Arayüz (app.js / suzgec.js) dosyayı OKUMUYOR; index.html yüklemediği için okuyamaz da.
- Eşleşmeler: uret_petek.py (üretici) + birkaç arac/denetim betiği yalnız ADINI anıyor
  (dosya listeleri, paketle/kodla dışlama listeleri, belki bir boyut ölçümü).
- Gerçek OKUYUCU sayısı: 0.

## 1. Hüküm — öngörü YANLIŞ çıktı; koordinatörün öncülü de yanlış
`data/ufuk_bantlari.js` (264 MB, gitignore'da) **yetim DEĞİL.** Zincir:
```
uret_petek.py (MOTOR_UFUK_BANT=40,56,80)  → data/ufuk_bantlari.js  (ham, .gitignore:207)
kodla.py yay data/ufuk_bantlari.js data bant → data/ufuk_bant_parcalar.js (45,8 MB, TAKİPLİ)
                                              + data/ufuk_bantlari_ust.js (5,7 MB, TAKİPLİ)
js/app.js ufukYukle (tembel <script>)       → o İKİ dosyayı okur, ⑥b Ⓑ Ufuk 5/7/10 seçicisi çizer
```
- "index.html yüklemiyor" — DOĞRU ama **tasarım gereği**: tembel yükleme, `app.js:671`
  `UFUK_DOSYALAR` dizisinden `<script>` ekleniyor (`app.js:706-708`). index.html:156-161 seçiciyi taşıyor.
- "kodla.py kodlamıyor" — **YANLIŞ.** `arac/kodla.py:558-564` dördüncü hedef `"bant"`,
  `kaynak: "ufuk_bantlari.js"`. Çağrı otomatik değil, devir çevriminde elle:
  `KOSU-DEVIR-CEVRIMI.md:194` `py -X utf8 arac\kodla.py yay data\ufuk_bantlari.js data bant`.
  Yayın kapısı `kodla.kapi()` hedef verilmezse diskteki bütün hedefleri (bant dâhil) denetler (`kodla.py:805-828`).
- Yayındaki eser TAZE: iki takipli dosya son kez `3a34f8b0` (1 Eki, KOŞU 19); öteki kodlanmış
  eserler `09cdd1d9` (5 Eki) ile KOŞU 19 gövdelerine döndü ⇒ aynı koşunun ürünü, tutarlı.
  `UFUK_BANT_IZI = {"bant":[40,56,80],"col_ufuk_saat":56,"taban_saat":40}`.

## 2. Eşleşmeler — OKUYAN / ADINI ANAN
| dosya:satır | sınıf |
|---|---|
| `arac/uret_petek.py:2151-2170` | ÜRETİCİ — kontur bantları (bayrak kapısı) |
| `arac/uret_petek.py:7912-7937` | ÜRETİCİ — ham dosyayı yazar |
| `arac/kodla.py:558-564` (+ `yay`, `coz-c`, `kapi` yolları 716-744, 818, 981) | **OKUR** — ham dosyayı kodlar |
| `js/app.js:671,692-768,771-803` | **OKUR** — `_ust` + `_parcalar` (ham dosyayı DEĞİL) |
| `js/app.js:856, 897` | yalnız ad (yorum; 897'deki "HEAD …ufuk_bantlari.js" BAYAT — HEAD bugün `UFUK_DOSYALAR[0]`=`_ust`a gidiyor, `app.js:906`) |
| `denetim/ARAC-B-GORUNUM-UFUK-0072.py:100` | yalnız ad (o kesimin dosyayı yazdığını uyarır) |
| `denetim/ARAC-B-GORUNUM-BANTSINAV-0072.py:20,63` | `MOTOR_UFUK_BANT` adını anar; dökümdeki `bant_ham`ı okur, dosyayı değil |
| `KOSU-DEVIR-CEVRIMI.md:151-152,194,205-206` | çevrim talimatı (bayrak + kodla adımı) |
| `.gitignore:207` | yayından hariç |
| `denetim/*.json` (DEFTER-MUTABAKAT, KAPAT-KUYRUK, PAKET-0074-78, TAM-ENVANTER) | yalnız ad (delil metni) |
| `arac/paketle.py` | eşleşme **0** |
| `js/suzgec.js` | eşleşme **0** |
| `arac/denetle.py`, `girdi.py`, `donanim.py` | "UFUK" başka anlamda (tarih ufku `UFUK=(1281,1923)`, oturum adı) — ilgisiz |
| öteki ~45 `denetim/ARAC-*.py` | "ufuk" kelimesi = tarih ufku / `girdi.UFUK` — ilgisiz (yalnız `ufuk_bant|UFUK_BANT|MOTOR_UFUK` deseniyle süzüldü: 0 eşleşme) |

## 3. Aşamanın doğuşu
`git log -S MOTOR_UFUK_BANT -- arac/uret_petek.py` ve `-S ufuk_bantlari.js` → ikisi de
**`c0bd752c` 2026-09-21** "Motor — çöl kelepçesi parametre oldu + üç ufuk bandı (B-GORUNUM-0072)".
Arayüz: tahta kaydı 938a67f (B-GORUNUM-0072); seçici UFUK-DUGME-0930; kodlama hedefi 30 Eylül (kodla.py yorumu).

## 4. Bayrak — ZATEN VAR
`uret_petek.py:2151-2157`: `MOTOR_UFUK_BANT` verilmezse blok çalışmaz ("VARSAYILAN KAPALI").
7909'daki yazım bloğu `_BANT_HAM and len>1 and _bant_kayit` ister ⇒ bayraksız koşuda dosya da yazılmaz.
Aşamayı "her koşuda" çalıştıran şey koşu komutundaki `set MOTOR_UFUK_BANT=40,56,80` (KOSU-DEVIR-CEVRIMI.md:152).

## 5. Bulamadığım
- **22 dakika** rakamını doğrulayamadım: motor koşu logu (KOŞU 19/20) bu makinede bulunamadı
  (yalnız `DEGISMEZ-KOSU19-UMIT.log` var — denetle logu). Kod yorumu kontur için "bant başına 4 sn"
  diyor (`uret_petek.py:2146`); 22 dk varsa yük büyük olasılıkla bant KESİM/havuz döngüsündedir
  (≈7880-7908) — **ölçülmedi, hipotez.**
- Canlı yayında seçicinin 7/10'u açıyor mu — tarayıcıda bakılmadı.

## 6. Öneri (karar koordinatörde/Emre'de)
Soru "kimse okumuyorsa ① mi ② mi" idi; okuyan VAR ve ① zaten yapılmış. Gerçek seçim:
- **(a) Olduğu gibi kalsın** — Emre'nin 30 Eylül isteği ("5/7/10 bir switch ile") canlı özellik.
  Bantlar coğrafyaya bağlı, veri koşusunda da değişir ⇒ eser her koşuda tazelenmeli.
- **(b) Bayrağı her koşuda verme, yalnız tam inşa / bant girdisi değişince ver** — kod değişikliği
  GEREKMEZ (tuz dokunulmaz): koşu komutundan `MOTOR_UFUK_BANT` satırını çıkarmak yeter, `kodla yay … bant`
  adımı o koşuda ATLANIR, yayındaki eski `_ust`/`_parcalar` kalır. 🔴 Bedel: bantlar o koşunun sınırlarıyla
  BAYATLAR (yeni devlet/dönem bant almaz; `ufukGuncelle` d/f/t ile süzdüğü için yanlış devlete bant
  çizmez ama eksik kalır). Bu bayatlığın görünür olması için `UFUK_BANT_IZI`ye koşu temel commit'i
  eklemek ayrı bir (motor tuzlu) yamadır — `denetim/*.diff` olarak bekletilir.
- Önerim: **(b)**, şu şartla — bant bayatlığı bir sayı olarak ölçülene kadar (yayındaki bant
  dönemleri ∖ güncel donemler) her TAM İNŞA koşusunda bayrak verilir.
- Yan bulgu: `app.js:897` yorumu bayat (ham dosyaya HEAD atıldığını söylüyor).
