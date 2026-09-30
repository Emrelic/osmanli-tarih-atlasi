# İNCE KÜNYE KAMPANYASI — ORTAK ŞARTNAME (30 Eylül 2026, gece)

*Koordinatör: YILDIRIM BAYEZIT. Kendi bölgen ve dosya adın sana gelen
mesajdadır. Bu dosya bütün dalganın ORTAK kurallarıdır.*

🔴 **BU BİR HIZ KOŞUSU.** Emre'nin haftalık limiti bir saat içinde
sıfırlanıyor; o saati işe çevirmek istiyor. **Ama hız, doğruluktan taviz
DEĞİLDİR** (`CLAUDE.md §7.1`: *doğruluk > tasarruf > hız*). Uydurma bir
madde, yazılmamış bir maddeden kötüdür — çünkü denetim onu temiz görür.
Az yaz, doğru yaz.

---

## 0 · NİÇİN BU DALGA VAR — bugün ölçüldü

```
künye 863 · kronolojisi "ince" olan 335 · medyan 3 madde
teşhis DÜZELTİLDİ: bunlar "sessiz" değil İNCE — künyede 2-5 iskelet madde var,
                   derin kronoloji dosyası YOK
```
Ölçüt **`yerleşim-yıl`** = her `s:` döneminin uzunluğunun künye penceresine
kırpılmış toplamı — yani o devletin **ekranda kaldığı süre**. Sıralama buna
göredir, ölçeğe ya da üne göre değil. `İnuit` 23.586 · `Func` 14.878 ·
`İlhanlı` 12.669 yerleşim-yıl ile en tepede.

`CLAUDE.md §1`: *"Amaç kronoloji ile haritanın birbirini doğrulaması — bir
madde okunduğunda haritada tam o değişim görünmeli."* Kronolojisi olmayan
devlet o doğrulamaya **hiç girmiyor.**

Tam liste: `denetim/KRONO-BOSLUK-0930.json` → `siralama_tek_boya` (335 kayıt).
Her kayıtta `id · ad · f · t · bolge · yer_s · yerlesim_yil · kunye_ici` var.
**Payını oradan kendin süz** (bölge alanıyla), sayısını teslimde bildir.

---

## 1 · 🔴 DOSYAN VE DESEN — yanlış desen işini GÖRÜNMEZ yapar

```js
// data/kronoloji_cok_ince_<bölge>.js
window.KRONOLOJI_COK_INCE_<BÖLGE> = [
  { t:"1335-11-30", k:"siyasi", b:"Ebû Said'in ölümü ve İlhanlı'nın dağılması",
    gun:"30 Kasım 1335", yer:"Karabağ", kisiler:"Ebû Said Bahadır Han",
    d:"paragraf — olayın anlatısı",
    kaynak:"TDV: ilhanlilar (İLHANLILAR)",
    taraflar:["ilhanli"],
    etiket:["konu-siyasi"] },
];
```

🔴 **Desen `KRONOLOJI_COK_*` OLACAK.** Bugün ölçüldü: `js/app.js:14212`
`derinKronolojiBindir` `KRONOLOJI_<ID>` desenini **tek künye id'sine** eşler;
`KRONOLOJI_BALKAN` → `balkan` künyesi yok ⇒ düşer. **15 bölgesel dosyada 2084
madde tam bu yüzden yüklü ama HİÇBİR künyeye bağlı değil**
(`denetim/KRONO-BOSLUK-0930.md §1`). Çalışan bağlayıcı `js/app.js:14264`
`cokTarafliKronolojiEkle`, regex `^KRONOLOJI_(SINIR|COK)_[A-Z0-9_]+$`:
her maddenin `taraflar[]` listesindeki **HER** künyeye **EKLER** (ezmez),
aynı `t`+`b` ikinci kez eklenmez, eşlenemeyen kimliği sayıp konsola basar.

⚠️ Değişken adın `data/` altında başka hiçbir dosyada geçmemeli — yazmadan
önce ara, teslimde "0" diye bildir.
⚠️ `index.html`e **DOKUNMA.** Bağlamayı koordinatör yapar.

🔴 **`taraflar[]` kimliği `data/devletler.js`te VAR OLACAK.** Yoksa madde
yüklenir, sayılır, **görünmez.** Kimliği listeden alıyorsun, yani zaten var —
ama **yazdıktan sonra kendin doğrula** (§5 kapı ②). Künye açman gerekiyorsa
sen açmazsın: `data/devletler.js`in sahibi `KUNYE-1945-0930`, ona yatay mesaj
yazarsın (`§7.1 ③`).

---

## 2 · KAÇ MADDE — kırılma, sayı değil

Künye başına **en az 3, en çok 8** (bu dalga hızlı; derinlik sonra gelir).
Mutlaka olması gerekenler:
```
kuruluş · toprak kazanç/kayıp · hanedan-rejim değişimi · yıkılış/ardıla geçiş
```
Süs olay yazma. 🔴 **Künye kaydının İÇİNDEKİ `kronoloji:` maddelerini
TEKRARLAMA** — listedeki `kunye_ici` alanı kaç madde olduğunu söylüyor;
`devletler.js`te o künyeyi aç, ne yazılmış OKU, üstüne ekle.

🔴 **Değişmez 2'yi hatırla:** her `d:`/`v:` toprak kırılmasının **±30 gün**
içinde kronoloji maddesi olmalı. Künyenin `f:`/`t:` günleri ve haritadaki
sahiplik dönemleri sana **kırılma günlerini** söyler — onları
önceliklendirirsen maddeniz iki kat değerli olur.

---

## 3 · 🔴 KAYNAK — bu dalganın kırılma noktası

`CLAUDE.md §4`:
- **İslâm dünyası, Osmanlı ve komşuları: TDV BİRİNCİL** · çelişirse TDV esas.
- TDV'nin kapsamadığı coğrafya/tanecikte **akademik kaynak meşrudur** ve
  `kaynak:` alanına **ADIYLA** yazılır.
- 🔴 **KIRMIZI ÇİZGİ — kullanılmaz:** forum · blog · içerik çiftliği ·
  kaynaksız derleme · **YZ üretimi metin** · popüler tarih sitesi.
  **Vikipedi TEK DAYANAK OLAMAZ.**
- **Kaynak gizlenmez;** bulunamadıysa `bulunamadı` yazılır — bu bir SONUÇTUR.
- **Atlas mamul üründür, referans değil:** atlasın kendi kaydı, künye günü,
  komşu kaydın günü **dayanak olamaz.**

🔴 **ALINTI UYDURMA — ölçülmüş vaka var.** Bir dış model *"TDV'den alıntı"*
diye verdiği cümlelerin çoğu TDV'de **birebir yoktu.** Alıntı yazacaksan
gerçekten açtığın sayfadan kelimesi kelimesine kopyala; açamadıysan
`açılamadı` yaz. **Açamamak bir sonuçtur, uydurmak bir kusurdur.**

**TDV durumu ilk 40 künye için ÖLÇÜLDÜ** — `denetim/KRONO-BOSLUK-0930.json`
→ `tdv_ilk40`: doğrudan madde 10 · yalnız kapsayıcı madde 11 · belirsiz 19.
⚠️ **Belirsiz ≠ yok.** TDV yer-kişi ansiklopedisidir; Novgorod 18 · İskoçya 43
· İrlanda 40 · Racput 36 · Maratha ("marata") 39 içerik geçişi var — yani
başka maddelerde anılıyor. Ölü slug **302** verir · `000` ve `503` **taşıma
arızasıdır, ölü DEĞİL** (sonra tekrar dene) · canlı slug yanlış madde olabilir
(`ordu`→`ordu--sehir`) · boilerplate gövde "çekilemedi" demektir, "yok" değil.
Arama: `islamansiklopedisi.org.tr/arama/?q=<kelime>`

🔴 **Kuzey Amerika halkları, Tokugawa, Sahra altı, Polinezya için TDV
BİRİNCİL OLAMAZ** — bu normaldir, akademik kaynağı adıyla yaz.

---

## 4 · 🔴 TARİH — bu dalgada en çok burada hata yapılır

```
gün biliniyor        t:"1335-11-30"  +  gun:"30 Kasım 1335"
gün BİLİNMİYOR       t:"YYYY-01-01"  +  gun:"(kaynak yıl verir)"  +  ic_not_t
ay biliniyor gün yok t:"YYYY-01-01"  +  gun:"Kasım 1335 (gün bilinmiyor)"
YIL BİLİNMİYOR       🔴 YIL DA YAZILMAZ — madde yazılmaz
```
🔴 **AY YAZMA.** `t:"1526-08"` ayın 1'ine genişler ve gün hassasiyetli
yerleşim değişimlerinden **ÖNCE** sıralanır ⇒ senkron bozulur (`§8`).
🔴 **"Temsilî" damgası uydurmayı meşrulaştırmaz** (`D210`). Künyenin `f:`/`t:`
günü bir KAYNAK DEĞİLDİR; pencere uçları (`1281-01-01`, `1923-10-29`,
`1945-09-02`) ölçüm değil **sınır işaretidir**.
⚠️ Senin listendeki künyelerin çoğunda `f:"1281-01-01"` var — o motorun
"araştırılmamış" işaretidir, kuruluş günü DEĞİL. Maddene onu yazma.

⚠️ `ic_not_*` alanları kullanıcıya **HİÇ gösterilmez** — editör notudur.
Şüpheni, çeliştiğin kaynağı, ölçemediğini oraya yaz; metne taşıma.

---

## 5 · KENDİ İŞİNİ SINA — teslimden ÖNCE, üç kapı

```bash
node --check data/kronoloji_cok_ince_<bölge>.js        # ① ŞART
```
② **taraf kimliği** — yazdığın her `taraflar[]` kimliği `devletler.js`te var
mı? Say ve teslimde yaz: **"eşlenemeyen taraf: 0"**. Eşlenemeyen varsa o madde
görünmez ve kapıda takılır.
③ **küresel ad** — değişken adın `data/` altında başka dosyada geçiyor mu (0).

🔴 **ÜÇ YAZIM BİÇİMİ** (`dersler/D240`): `{ t:"…" }` çıplak · `{"t": "…"}`
JSON tırnaklı · **dizgi İÇİNDE kod alıntısı** — üçü bu depoda bir arada.
Yalnız birini arayan kalıp **sessizce "0" der.** Bugün bir araç 419 maddeyi
246 saydı, bir başkası dizgi içindeki alıntıya yazıp `yerlesimler.js`i bozdu.
**0 bulursan evreninin kaç eleman olduğunu da bas** — evren 0 ise sonuç
"temiz" değil `ölçülemedi`.
⚠️ Türkçe karşılaştırmada `lower()` KULLANMA (`"İ".lower()` iki kod noktası
verir, `casefold()` de çözmez) → `denetim/ARAC-NORMAL-0903.py`.

---

## 6 · YASAKLAR

```
⛔ data/devletler.js            sahibi KUNYE-1945-0930
⛔ data/kronoloji_*.js (eski 15) sahibi KRONO-BOSLUK-OLC-0930 (diriltiyor)
⛔ data/olaylar*.js             sahibi UYGULA-OLAYLAR-0930
⛔ data/yerlesimler*.js · savaslar · kisiler · ekokuma
⛔ js/ · css/ · index.html · arac/        YALNIZ OKU
⛔ git add / commit / push               koordinatör commitler
⛔ py arac/denetle.py                    tepesi 2,4 GB, çok oturum çalışıyor
```
Sen **yalnız kendi yeni dosyanı** yazarsın. Başka hiçbir şeye dokunmazsın.

---

## 7 · HABERLEŞME

Tek kanal tahta; koordinatörün ekranına YAZILMAZ.
```bash
py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <dosya>
py arac/tahta_bekci.py --kim "<ADIN>" --cik --ara 45    # Bash run_in_background
```
Uzun ya da Türkçe metni komut satırına gömme — `Write` ile dosyaya yaz,
`--mesaj-dosya` ile ver, `tahta.json`dan **geri oku.** "Yazdım" teslim
kanıtı değildir.

🔴 **BU DALGADA ARA TESLİM İSTİYORUM.** Bir saatlik pencere var: **20
dakikada bir** o ana kadar yazdığın madde sayısını tek satırla tahtaya yaz.
Pencere kapanırsa yarım da olsa dosyan sağlam olsun — bu yüzden dosyaya
**biriktirerek değil, parça parça yaz** ve her yazımdan sonra `node --check`
koştur. Yarım geçerli dosya, hiç dosyadan iyidir; **bozuk dosya ikisinden de
kötüdür.**

**TESLİM — üçlü kural** (`§7.1 ④`): ① ne ölçtüm (sayıyla) ② ne bulamadım
(`bulunamadı` bir SONUÇTUR) ③ ne istiyorum. + ürettiğin dosya.
Ayrıca say: kaç madde · kaç künyeye dokundu · kaçında gün var kaçında yıl ·
kaç `bulunamadı` · eşlenemeyen taraf (0 olmalı).
Sonuna tek satır: **"bekçimi öldüreyim mi?"**

**AKSAKLIK BEKLEMEZ** (`§7.1 ⑥`): künye eksikse · kaynaklar çelişiyorsa ·
sayı beklenenden çok farklıysa → **hemen yaz, durma.**
