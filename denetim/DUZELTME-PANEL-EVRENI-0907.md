# ㉖ DÜZELTMEYİ YAZ VE TARAYICIDA DOĞRULA — SONUÇ: DÜZELTME GEREKMİYORDU

> Oturum: SONNET HAZIR KITA 129. Sevk: 1.MURAT (㉖ KOL). **BULGU: ⑰'nin ve
> benim `denetim/OLCUM-PANEL-EVRENI-0907.md`de yazdığım "bug" GERÇEK
> DEĞİLDİ — ikimiz de STATİK DOSYA okumasıyla ölçtük, TARAYICIDA
> DOĞRULAMADIK, ve tarayıcı FARKLI bir gerçek gösterdi.**

---

## NE OLDU — özetle

1. Görevi aldım: `tumYerlesimler()` ortak okuyucusunu yazdım, 6 çağrı
   yerinin hepsini ona bağladım (`js/app.js`).
2. **Tarayıcıda doğrularken** (④ maddesinin gereği), `window.YERLESIMLER`in
   çalışma zamanında **3805** kayıt taşıdığını gördüm — benim ölçtüğüm
   792 DEĞİL.
3. Sebebini `git log -S` ile buldum: **`index.html` satır 1054-1075'te,
   11 Ağustos 2026'dan beri duran bir birleştirme betiği VAR**:
   ```js
   // 11 Ağustos 2026 — ZİNCİR KALDIRILDI, YERİNE OTOMATİK TOPLAMA.
   window.YERLESIMLER = Object.keys(window)
     .filter(function (k) { return /^YERLESIMLER_/.test(k) && Array.isArray(window[k]); })
     .reduce(function (acc, k) { return acc.concat(window[k]); },
             (window.YERLESIMLER || []).slice());
   ```
   Bu kod TAM OLARAK benim yazdığım `tumYerlesimler()`in yaptığını yapıyor
   — ve `js/app.js` (satır 1197'de yüklenir) çalışmaya başladığında
   `window.YERLESIMLER` **ZATEN 3805 kayıtlık birleşik evrendir.**
4. **Kodumu geri aldım** (`git checkout -- js/app.js`) ve orijinal,
   değiştirilmemiş `app.js` ile aynı testi tekrarladım: **AYNI sonuç.**
   Bug hiç yoktu.

---

## TARAYICIDA CANLI DOĞRULAMA (④ maddesinin gereği, eksiksiz yapıldı)

Kendi önizleme sunucumu açtım (`arac/sunucu.py`, port 54221 — Emre'nin
başka bir oturumunun sunucusuyla ÇAKIŞMADI, ayrı port), sayfayı yükledim,
**panel görünür hâldeyken** (§11'in "gizli sekmede ölçüm YOK der" tuzağını
önlemek için: tab'ı `tabs_select` ile öne getirdim, `read_page` ile
viewport'un 0x0 DEĞİL 1280x720 olduğunu doğruladıktan SONRA ölçtüm).

**Konsol çıktısı (orijinal, değiştirilmemiş `app.js` ile):**
```
window.YERLESIMLER uzunluk: 3805
```

**"Şehirler" sekmesini GERÇEKTEN AÇIP SAYDIM** (metin, DOM'dan okundu):
```
1. Kademe — Payitahtlar (7)
2. Kademe — Eyalet / bölge merkezleri (70)
3. Kademe — Sancak merkezleri ve kaleler (277)
4. Kademe — Küçük birimler (kaza-karye) (566)
──────────────────────────────────────────
TOPLAM: 920   ← benim "düzeltilmiş" tahminimle BİREBİR AYNI, KOD DEĞİŞMEDEN
```
İlk açılışta görünen kayıtlar arasında Sibirya (Albazin, Barnaul, Yakutsk,
Tomsk…), Afrika (Akobo, Bentiu, Riyad, Doha…) ve Amerika (**Acoma Pueblo**,
**Taos Pueblo**) yerleşimleri de vardı — yani panel zaten dünyanın her
yerinden veri gösteriyordu.

**"Yerleşimler" sekmesi** (JS ile doğrulandı, kod yalnız `YRL.length`
gösteriyor, ek süzgeç yok): `window.YERLESIMLER.length` = **3805**,
yani bu sekme de zaten TAM evreni gösteriyordu.

---

## ÖNCEKİ RAPORUM (`OLCUM-PANEL-EVRENI-0907.md`) NEDEN YANILDI

O rapor `arac/girdi.py`nin `yukle()` fonksiyonuyla ve `node`in `data/`
dosyalarını TEK TEK, DOĞRUDAN okuyarak ölçüldü — **`index.html`i hiç
çalıştırmadan.** Bu, projenin STATİK dosya ile ÇALIŞMA ZAMANI durumunu
karıştırma tuzağının BİREBİR aynısı (`CLAUDE.md §11`: *"gizli sekmede
yapılan ölçüm YOK der"* ailesinin bir üyesi daha — burada sorun görünürlük
değil, **hangi katmanda ölçüldüğüydü**: dosyanın HAM içeriği ile
tarayıcının o dosyayı yükledikten SONRAKİ durumu farklı şeyler).

⚠️ Yöntemim (⑰'nin 541/246/5 rakamlarını birebir üretmek) DOĞRUYDU —
**ama yalnız `girdi.yukle()`nin okuduğu evreni doğru simüle ettiğimi
kanıtladı, TARAYICININ GERÇEK DURUMUNU DEĞİL.** İki farklı doğrulama
birbirini DOĞRULUYORMUŞ GİBİ göründü (§11: *"iki ölçüm aynı sonuca
varınca birini ötekinin doğrulaması sanmak"*) — ⑰ ve ben AYNI eksik
yöntemi (statik dosya okuma) kullandık, birbirimizi çapraz DOĞRULAMADIK.

📌 **Ders — bu oturumun kendi hatası, saklanmadan kaydediliyor:** ㉓
görevinde "④ TARAYICIDA DOĞRULA" maddesi YOKTU (yalnız ölçüm istenmişti);
ama BEN de kendi inisiyatifimle tarayıcıda doğrulamadım, statik analizle
yetindim. ㉖'da bu adım ZORUNLU kılınmıştı ve TAM OLARAK bunun için —
gerçek hatayı EZİLMİŞ ölçümü değil GERÇEK ÇALIŞMA ZAMANINI görünce buldum.

---

## YAPILAN / YAPILMAYAN

```
🟢 tumYerlesimler() yazıldı, 6 çağrı yerine bağlandı, TARAYICIDA test edildi
🔴 SONRA GERİ ALINDI (`git checkout -- js/app.js`) — gerek yoktu, kod
   zaten doğru çalışıyordu (index.html'in 11 Ağustos'tan beri duran
   birleştirme betiği sayesinde)
🟢 js/app.js ŞU AN COMMIT'TEKİYLE BİREBİR AYNI (git diff --stat: boş)
🔴 PUBLISH edilmedi, sürüm damgasına dokunulmadı (zaten talimat böyleydi)
```

## ÖNERİ

`OLCUM-PANEL-EVRENI-0907.md`in ①②③ bölümlerindeki "bayat/kasıtlı" analizi
ve 6 çağrı yerinin ENVANTERİ hâlâ doğru ve değerli (git tarihi gerçek).
Yalnız "③ Düzeltilirse..." başlığı ve onun vardığı "541→920 / 792→3805"
sonucu **yanlış öncülle** ("hâlâ 792/541 gösteriyor") doğru sayıya
varmıştı — sayı doğru çıktı ama zaten GERÇEKLEŞMİŞ bir durumu "gelecekte
olacak" gibi sundu. O dosyaya bu notu ekliyorum ki bir sonraki oturum
onu "hâlâ açık bir iş" sanıp yeniden düzeltmeye kalkmasın.

**Durum: ✅ boştayım, yeni iş bekliyorum.**
