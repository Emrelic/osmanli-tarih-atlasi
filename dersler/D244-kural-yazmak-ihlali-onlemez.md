# D244 — Bir kuralı YAZMAK, o kuralın ihlalini önlemiyor: çare PAYLAŞILAN ARAÇ

**Slogan:** `D240` yazıldı. Aynı oturumda, `D240`'tan **sonra** yazılan **iki
araç** aynı tuzağa düştü. Kural bilinmiyor değildi — **hatırlanmadı.** Bir
biçim tuzağının çaresi yeni bir kural değil, o biçimi tanıyan **tek bir
paylaşılan okuyucudur.**

---

## VAKA — 30 Eylül / 1 Ekim 2026, aynı oturum, iki araç

`D240` şunu yazıyor: bu depoda **üç yazım biçimi** bir arada yaşar —
```
{ t:"…" }        çıplak anahtar
{"t": "…"}       JSON tırnaklı anahtar
dizgi İÇİNDE kod alıntısı   (ör. bir `neden:` alanı içinde v:[{\"f\":\"…\"}])
```
ve *"yalnız birini arayan kalıp **sessizce 0 der**."*

### İhlal ①  — paket toplayıcı (sabah)
Koordinatörün yazdığı toplayıcı `CEVAP.json`ları okudu ve **162 maddenin
104'ünü** saydı. Sebep: iki şema bir arada (`partiler[…]["madde"]` ve kökte
`madde`). Ağaç gezici olarak yeniden yazıldı, 162 = 162 oldu.

### İhlal ②  — odak yazıcı (gece)
Koordinatörün yazdığı `odak_yaz.js` maddeleri `b:"…"` çıplak anahtarıyla
bağladı ve **JSON tırnaklı dosyaları SESSİZCE atladı:**
```
kronoloji_cok_1923_1945.js        500 × ` b:`    → yazdı
once1281_ortadogu.js              171 × `"b":`   → ATLADI  (81 aday)
ince_bati_afrika.js                14 × `"b":`   → ATLADI  (7)
once1281_hint_amerika.js           51 × `"b":`   → ATLADI  (2)
                                                   ─────────
                                                   446 adaydan 90'ı düştü
```
İki biçimli hâle getirilince 446/446 oldu.

🔴 **İkisi de `D240`ı yazan oturumun kendi araçlarıydı.** Yani kuralı yazan,
aynı gün, iki kez ihlal etti.

---

## TEŞHİS — kural bir HATIRLAMA yükü, araç bir GÜVENCEDIR

`D240`ın çaresi *"kalıbın çoğul olduğunu yaz"*dı. O çare doğru ama **yetersiz**:
her yeni araç, her yeni oturum, her yeni alan için yeniden hatırlanması
gerekiyor. Hatırlama yükü sıfırlanmadıkça ihlal tekrarlanır.

⇒ Doğru çare: biçimi tanıyan **tek bir okuyucu**, ve her aracın onu
çağırması. Taslağı `denetim/` altındaki odak araçlarında duruyor:

```js
alanBul(metin, alan, deger)   // dört biçimi dener, bulduğunu ve BİÇİMİNİ döner
alanSay(metin, alan, deger)   // kaç kez geçiyor — TEKİLLİK sınavı için
yeniAlan(bicim, alan, deger)  // kaydın KENDİ biçiminde yeni alan üretir
```
Ve Python tarafında sınanmış eşi **zaten vardı ve kullanılmadı:**
`denetim/ARAC-YERLESIM-UYGULA-0930.py` → `_ust_duzey_alanlar` ·
`_dengeli_son` · `alan_yaz` (19 çift yönlü savla sınandı, 19/19).

🔴 Yani araç vardı, ders vardı, ve ikisi buluşmadı.

---

## KURAL

1. **Alan okuyan/yazan yeni bir araç yazmadan önce, var olan sınanmış
   okuyucuyu ARA.** `denetim/ARAC-YERLESIM-UYGULA-0930.py` ve odak araçları
   bugünün iki referansı.
2. **Yeni bir okuyucu yazmak zorundaysan, BİÇİMİ de döndür** — `yeniAlan`
   örneğinde olduğu gibi. Kaydın biçimini korumak, dosyayı bozmamanın
   koşuludur (JSON tırnaklı bir dosyaya çıplak anahtar yazmak `node --check`i
   geçer ama biçimi karıştırır).
3. **"0 buldum" bir sonuç değildir.** `D240`ın kuralı yürürlükte: 0 bulan her
   ölçüm **evreninin kaç eleman olduğunu** da basar.
4. 🔴 **Ve bir kural iki kez ihlal edildiyse, üçüncü kez yazmak çare değildir.**
   O noktada sorulacak soru: *"bu kuralı gereksiz kılan araç ne olurdu?"*

---

## AYNI GECENİN DÖRT "ALET YANILDI" VAKASI — desen

Bu ders yalnız biçim tuzağıyla ilgili değil; aynı gece alet **dört kez** yanıldı
ve dördünde de ilk tepki "veri bozuk" olmaya çalıştı:

```
① node --check `.yeni` uzantısını REDDETTİ   → "7 dosya BOZUK" sandım; dosyalar sağlamdı
② kendi sınavım `yer_id != yer`i İHLAL saydı → 87 başarılı yazımı "başarısız" ilan etti
③ havuzumu `y.ad`dan kurdum, app.js'in
   parantez esnekliğini taklit etmedim        → "58 gizli kırık atıf" YOKTU
④ (30 Eylül) tarayıcı sekmesi GİZLİYDİ,
   requestAnimationFrame çalışmıyordu         → "site kırık" ölçümü GEÇERSİZDİ
```
📌 **Ölçüm bir alete güvenir; aletin kendisi de ölçülür.** Bir sayı beklenenden
çok farklıysa ilk şüphe **alete** yönelir, veriye değil.
🟢 Ve ③ verimli oldu: aletin niçin saptığı kovalanınca havuzun `5483/4146`
oranı görüldü ve `D242` oradan doğdu (`ODAK-YANLIS-KITA-1001.md`).

---

## BAĞLI DERSLER

- `D240` araç modeli biçim değişince — bu dersin **atası**; burada söylenen,
  onun çaresinin yetersiz olduğu.
- `D010` yeni yazılan denetim iki yönde sınanmadan çalışıyor sayılmaz —
  `ARAC-YERLESIM-UYGULA-0930-SINAV.py`nin 19 savı bu kuralın ürünü ve o araç
  **bu yüzden** güvenilirdi; onu kullanmamak bir kayıptı.
- `CLAUDE.md §11` *"ölçüm doğru, çıkarım yanlış"* ailesi.
