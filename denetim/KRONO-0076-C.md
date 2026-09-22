# KRONO-0076-C — kronoloji 1909-1914 · 17 madde · RAPOR
**23 Eylül 2026** · dilim: Balkan Savaşları + I. Dünya Savaşı girişi

Madde madde hüküm ve gerekçe: `denetim/KRONO-0076-C-CEVAP.json`.
Bu dosya YÖNTEMİ ve maddelerin dışında kalan bulguları tutar.

---

## 0. Öngörü — ölçümden ÖNCE yazıldı
`denetim/KRONO-0076-C-ONGORU.md` (tahtaya ALINDI yazıldıktan hemen sonra,
tek `grep` koşmadan). Üç öngörü kuruldu, sınav anı ve evreni de yazıldı.

| # | öngörü | sonuç |
|---|---|---|
| Ö1 | 17/17 maddenin kronoloji karşılığı veride BULUNUR | ✅ doğrulandı — 17 madde → 16 ayrı kayıt, bulunamayan 0 |
| Ö2 | "Karadeniz Baskını" veride TEK kayıttır; mükerrer olan PARTİ maddesidir | ✅ doğrulandı — 6670 kayıtta 1 tane |
| Ö3 | 17/17'nin talebi "ek okuma"dır; kronoloji dosyalarında düzeltilecek madde 0'a yakın çıkar | 🟡 kısmen — talep tarafı doğru çıktı, ama kronolojide **3 kusur** ayrıca bulundu (§3) |

Ö3'ün yarısı çürüdü ve bu iyi bir sonuçtur: "düzeltilecek bir şey yok" beklentisiyle
girilen dilimde ölçüm üç kusur çıkardı.

## 1. Ölçüm evreni ve aletin sınavı
```
dosya      : data/olaylar*.js + data/kronoloji*.js = 128 dosya
             index.html'in yüklediği: 128/128 (yüksüz 0 — ölü dosyaya bakılmadı)
kayıt      : `t:` alanı taşıyan 6670 kayıt
yerleşim   : girdi.py GIRDI_DOSYALARI üzerinden 2000 tekil dönem başlangıcı (`f:`)
aletler    : denetim/KRONO-0076-C-olc.py · olc2.py · olc3.py · olc4.py · sinav.py
```
🔴 **Normalleştirici sınavı (tahta M-5024 ①).** Bu oturumun süzgeçlerinde
`.lower()` / `casefold()` / `[^a-z]` YOK — eşleştirme UTF-8 metin üzerinde
doğrudan yapıldı. Kart çapası sınavında (`sinav.py`) app.js'in `_ekNorm`'u
birebir taklit edildiği için oraya POZİTİF KONTROL kondu ve **önce ateşlendi**:
`İstanbul Antlaşması` · `Cihâd-ı Ekber` · `Nikarya'nın bağımsızlık ilanı` ·
`Mahmud Şevket Paşa` → **4/4 geçti**. Kontrol geçmeseydi betik çıkış 2 ile
duracak ve hiçbir sayı basmayacaktı.

## 2. İkiz sınavı — sevkin sorduğu soru
`H-0161` / `H-0162` mükerrer mi? **Hayır.** Bütün evrende "Karadeniz Bask"
geçen **1** kayıt var (`olaylar_ek5.js` t:`1914-10-29`). Mükerrer olan PARTİ
maddesidir; ikisi aynı kayda bakıp **farklı soru** soruyor (biri *niçin*,
öteki *ne kadar zarar*). Bu yüzden `once-cozuldu` verilmedi, iki ayrı kart yazıldı.

## 3. Maddelerin İÇİNDEN çıkan, talepte İSTENMEYEN üç kusur
Hepsi ölçüldü, hepsine ters yön sınavı (D206) yapıldı, yamaları hazır.

### 3.1 §8 ihlali — ay hassasiyetli `t:`, gün biliniyor (2 kayıt)
`olaylar.js` t:`1911-09` (gun: "29 Eylül 1911") ve t:`1914-11`
(gun: "29 Ekim – 11 Kasım 1914"). Ay hassasiyetli `t:` ayın 1'ine genişler ve
gün hassasiyetli yerleşim değişimlerinden **önce** sıralanır.
Bağlam: bütün evrende 21 ay hassasiyetli kayıt var, 19'u `olaylar.js`te
(Faz 1 dosyası, başlığında "t (YYYY-AA)" yazıyor); **1909-1914 diliminde 2**.
Öteki 19'a DOKUNULMADI — başka dilimlerin maddeleridir.
Ters yön: eski konumun kapsayıp yeni konumun kapsamadığı kırılma **0**, ikisinde de.

### 3.2 §4 ihlali — atlas kendini kaynak göstermiş, üstelik ÇELİŞKİ SAHTE
`kronoloji_italya.js` t:`1911-09-29` kaydının `kaynak:` alanı dayanak olarak
`data/devletler.js`i gösteriyor ve *"TDV `trablusgarp` 1 Eylül 1911 diyor, İKİ
KAYNAK ÇELİŞTİ, çelişki KOORDİNATÖRE bildirilecek"* diye açık bir kalem bırakıyordu.
İki kusur birden: ① atlas kaydı dayanak olamaz (Emre, 13 Eylül) ② çelişki
**yanlış slug**tan doğmuş — `trablusgarp` TDV'de YER maddesi; savaşın maddesi
`trablusgarp-savasi` (D211 tuzak ②). Doğru madde çekildi, gövde **aynen**
"29 Eylül'de ilân edilen savaş" diyor. ⇒ **Tarih doğruymuş, çelişki yok, kaynak
düzeliyor ve koordinatöre açık bırakılmış kalem KAPANIYOR.**

### 3.3 Sisam'ın elden çıkış günü ATLASIN KENDİ GÜNÜ
`olaylar_ek6.js` t:`1912-03-13`, `gun:"1912"` — yani hassasiyet alanı YIL derken
`t:` gün iddia ediyor. Günün kaynağı ölçüldü: `yerlesimler.js`te Sisam'ın vassal
dönemi tam o gün bitip Yunan dönemi başlıyor; ayrıca 1912-03-13 veride **zaten**
Sırp-Bulgar İttifak Antlaşması'nın günü. TDV `sisam` gövdesi **aynen**:
*"Balkan savaşları sonunda Sisam adası Yunanistan ile birleşti (11 Kasım 1912)"*
ve aynı madde valinin **1913'e kadar** görevde olduğunu söylüyor — Mart 1912'de
idare sona ERMEMİŞ. Kaydın `v:` döneminin BAŞI (1832-12-10) TDV ile birebir
tutuyor; demek ki başı kaynaklı, **sonu değil**.
Ters yön: eski konumun kapsayıp yeninin kapsamadığı kırılma 2 gün
(1912-02-12, 1912-03-13) — ikisi de **başka maddelerle korunuyor**, açıkta kalan **0**.
Değişmez 1: `v:` sonu ile `s:` başı aynı güne taşındığı için boşluk/örtüşme doğmaz.
⚠️ Uygulanırsa **petek koşusu gerekir** (harita geometrisi değişir).

## 4. Çözülemeyen ve açık bırakılanlar — `bulunamadı` bir sonuçtur
| ne | durum |
|---|---|
| Nikarya/İkarya maddesi | TDV'de **YOK** (site araması: "sonuç yok"); «Oniki Ada»da sayılan on iki adanın arasında da geçmez. Kart yazılmadı (`cozulemedi`). |
| Nikarya harita ↔ kronoloji çelişkisi | `yerlesimler.js` 17 Temmuz 1912'den YUNAN İŞGALİ diyor (`isg:`, kaynak `oniki-ada` — ada o maddede geçmiyor), atlasın kendi kronolojisi aynı gün için beş aylık bağımsız devlet diyor. İkisi aynı anda doğru olamaz. **Kaynak bulunamadığı için DOKUNULMADI.** |
| Cihâd-ı Ekber'in günü | TDV «Birinci Dünya Savaşı» gövdesinde 15 Kasım 1914 geçtiği bildirildi, atlas 14 Kasım diyor. Birebir cümle çekilemedi ⇒ **ölçülemedi**, tarihe dokunulmadı, kartta gün yazılmayıp ay verildi. |
| Goeben/Breslau'nun sonraki akıbeti | TDV'nin ilgili maddesinde yok — kartta uydurulmadı. |
| Oniki Ada nüfus oranları · II. Dünya Savaşı'nda Türkiye'ye teklif iddiası | TDV «Oniki Ada»da yok; kartta "doğru sayılmamalıdır" denildi. |
| 1910 Arnavut isyanının seyri | TDV «Arnavutluk» gövdesinde yok. |
| İtilâf devletleriyle ittifak görüşmeleri | TDV «Birinci Dünya Savaşı» gövdesinde ayrıntısı yok. |

## 5. Başka dilime düşen, sahibine bırakılan bulgu
`olaylar_ek5.js` t:`1913-06-29` "II. Balkan Savaşı'nın başlaması" diyor;
TDV «Balkan Savaşı» gövdesi savaşın **23 Haziran 1913**'te başladığını veriyor.
Bu kayıt bu dilimin numaralarından değildir (`H-0150` başka oturumun listesinde)
— **dokunulmadı**, yalnız bildiriliyor.

## 6. Üretilenler
```
denetim/KRONO-0076-C-ONGORU.md              ölçümden önce yazılan öngörü
denetim/KRONO-0076-C.md                     bu rapor
denetim/KRONO-0076-C-CEVAP.json             17 maddenin hükmü (parti CEVAP'ına birleştirilecek)
denetim/KRONO-0076-C-YAMA-ekokuma_p76f.js   16 ek okuma kartı → window.EKOKUMA_P76F
denetim/KRONO-0076-C-YAMA-kronoloji.js      §8 + §4 yamaları (belge)
denetim/KRONO-0076-C-YAMA-yerlesimler.js    Sisam yaması (belge) + Nikarya açık sorusu
denetim/KRONO-0076-C-YAMA-uygula.py         yamaları UYGULAYAN betik (bayraksız = önizleme)
denetim/KRONO-0076-C-olc.py · olc2 · olc3 · olc4 · sinav.py     ölçüm ve sınav aletleri
denetim/KRONO-0076-C-OLCUM.txt · OLCUM2 · OLCUM3 · OLCUM4       ham çıktılar
```
`arac/` · `data/` · `js/` · `index.html`: **tek satır dokunulmadı.**

## 7. Uygulama sırası (koordinatöre)
1. `py denetim/KRONO-0076-C-YAMA-uygula.py` → önizleme; yedi çapanın yedisi de
   dosyada **tam 1 kez** bulunuyor (ölçüldü). Betik 1 bulamazsa o yamayı atlar.
2. `--uygula` (Sisam'ı şimdi istemiyorsan listeden çıkar — yamalar bağımsız,
   yalnız iki Sisam satırı ile kronoloji satırı **ayrılamaz**).
3. `py arac/denetle.py` — Değişmez 2 kapısı.
4. Sisam uygulandıysa **petek koşusu** + `renk_olc.py`.
5. Ek okuma kartları: `denetim/KRONO-0076-C-YAMA-ekokuma_p76f.js` →
   `data/ekokuma_p76f.js`, sonra `js/app.js` `_EKOKUMA_DOSYA_ADLARI` dizisine
   `"ekokuma_p76f"` satırı (yükleyici koordinatörde; bu oturum `js/`ye dokunmadı).
   Değişken adı: **`window.EKOKUMA_P76F`**.
   Çapa sınavı geçildi: 16/16 kart en az bir kronoloji kaydına bağlanıyor,
   çapası tutmayan **0** (`py denetim/KRONO-0076-C-sinav.py` ile tekrarlanabilir).
   İki kartta ikişer çapa var — biri bugünkü `t:` değerine, öteki §8 yaması
   uygulandıktan sonraki değere; kart **yama uygulansa da uygulanmasa da** bağlı kalır.
