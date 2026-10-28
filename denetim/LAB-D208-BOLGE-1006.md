# LAB-D208-BOLGE-1006 — "kaynak var" diyen kapı, D208'in yasakladığı dayanağı ne kadar sayıyor?

**Gövde:** `origin/main` **2fe8ada77** (KOŞU 21 temeli). Makine `Emre`, scratchpad klonu. **`data/` ve `arac/`a yazılmadı.** `denetle.py` yalnız koşturuldu.
**Çıktılar (hepsi bu dalda):**
- `LAB-D208-BOLGE-1006.tsv`: 16 kayıt + bağlam için Tebriz ve Memel (18 kayıt, 19 dönem satırı), kaynak cümlesi TAM.
- `LAB-D208-EVREN-1006.tsv`: D kovasının **tamamı**, 389 kayıt · 835 kaynaklı `s:` dönemi, her biri sınıfıyla.
- `LAB-D208-HALKA-ACIK-1006.tsv`: şehir tanıklığı halkada duran ama kayda yazılmamış 28 kayıt (34 tanıklık).

**D208 (dersler/D208-bayrak-kurali.md):** HALKA ALMAZ ⇒ *"örtülü · çıkarım · belirsiz · … · **bölge adından şehre taşınan hüküm**"*. Şehir tanıklıkları `data/kaynakli_halka_*.js` içinde (5 dosya, 198 tanıklık; node ile `window.*` olarak okundu).

## ① NE ÖLÇTÜM

### 1. 16 kayıt, adıyla (TSV: `LAB-D208-BOLGE-1006.tsv`)

- **16'nın 16'sı sınıf ② BÖLGE CÜMLESİNDEN TÜRETİLMİŞ.** Tek kaynaklı dönemleri `karakoyunlu 1408-04-13..1468-04-01`. Kaynak metni 16'sında aynı: *"BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208): TDV `karakoyunlular` Serdrûd 13 Nisan 1408 — 'Serdrûd zaferi Kara Yûsuf'a Azerbaycan'ı kazandı…'"*. Cümle Azerbaycan'ı anıyor, 16 şehirden hiçbirini değil. Kayıtların öteki 8-13 `s:` dönemi kaynaksız.
- **Sınıf ① (gerçek şehir tanıklığı):** 16'da **0**. Bağlam olarak tabloda: Tebriz (kaynak "Serdrûd (Tebriz yakınları)", şehri anıyor) ve Memel (Versay md. 99 + FRUS, şehri anıyor).
- **AMA 16'nın 6'sı için gerçek şehir tanıklığı VAR, yalnız başka bir dönem için ve kayda yazılmamış:** Astara · Erdebil · Lenkeran · Merend · Merâga · Sultâniye. Halkada Safevî tanıklığı var (1590-1603, `kaynakli_halka_ferhatpasa.js`: Eskandar Beg Monshi · Encyclopaedia Iranica · TDV «Tebriz»). Atlasın aynı günü kapsayan `safevi 1501..1723/1736` dönemiyle **UYUMLU**, ama o dönemin `kaynak:`ı **boş**. 16'nın 11'inin halkada ayrıca Osmanlı tanıklığı var (Ferhat Paşa dönemi; o `d:` alanına ait, aşağıya bak).

### 2. Yaygınlık: D kovasının tamamı (389 kayıt · 835 kaynaklı dönem)

Sınıflama **sözcük/kopya sezgisidir**, anlam okuması değil. Her sınıfın ölçütü adıyla:

| Sınıf | Ölçüt (makine) | Dönem | Kayıt (en güçlü dönemine göre) |
|---|---|---|---|
| **B** bölge — D208 beyanlı | metinde `BÖLGE CÜMLESİ` / `D208` / "şehir tanıklığı değil" | 17 | **16** |
| **B2** bölge — başka sözle beyanlı | "bölge hükmü" / "bölge düzeyi" / "bölgeden" | 16 | **5** |
| **K1** paylaşılan antlaşma/devir hükmü | aynı metin ≥2 kayıtta + F8 / D205 / antlaşma / treaty / bağımsızlık … | 183 | **108** |
| **K2** paylaşılan, BEYANSIZ | aynı metin ≥2 kayıtta, şehri anmıyor, bölge/devir beyanı yok | 334 | **122** |
| **S** şehri adıyla anıyor | metin kaydın adını (ya da parantez içi adını) içeriyor | 164 | **96** |
| **O** ölçülemedi | tekil metin, şehri anmıyor, beyan yok | 121 | **42** |

⇒ **"Yalnız bölge cümlesiyle D'de duran" kayıt (B+B2) = 21.** Bu, (b) kararının BİLGİ satırının X'i için ölçülmüş alt sınır.
⇒ **En güçlü dayanağı şehre özgü OLMAYAN kayıt (B+B2+K1+K2) = 251 / 389 (%65).** Şehri adıyla anan dayanak yalnız 96'da (%25), 42'si ölçülemedi.
- **K1 D208 ihlali DEĞİL, bir kural sınıfı.** Ör. Trianon (44 kayıt), Kiel 1814 (20), Finlandiya bağımsızlığı (20), Saint-Germain (15). F8/D205 de jure devri antlaşma gününde bütün devredilen şehirlere uygular: hüküm bölge düzeyinde ama kuralla yazılmış.
- **K2 asıl soru işareti.** Ör. 38 İspanya şehri tek bir kitap künyesiyle (Vicens Vives 1952, sayfa/cümle yok); 19 Yunnan şehri `清史稿 卷6` künyesiyle (cümle yok); 13 Eflak şehri "TDV eflak: 'Eflak bu tarihlerde Macar hâkimiyetindeydi'". Bunlar D208'in "bölge adından şehre taşınan hüküm" sınıfına **aday**; beyansız oldukları için makine ayıramaz.

### 3. Halka ↔ kayıt açığı (16'nın ötesinde, bütün evren)

195 halka tanıklığı atlas adlarıyla eşleşti (adı atlasta olmayan 0; 3'ü koordinatlı, eşlenmedi). Yabancı devlet tanıklıkları (68) tanıklık gününü kapsayan `s:` dönemiyle karşılaştırıldı:
- **UYUMLU ve dönemin `kaynak:`ı BOŞ: 28 kayıt** (34 tanıklık) → TSV. Kovaya göre **H 14 · D 8 · T 6**.
  - H'deki 14: Belgrad · Bâdis · Böğürdelen · Edirne · Gelibolu · Havîza · Kazvin · Luristan · Malaka · Mardin · Masavva · Modon · Pekin · Zaklise.
  - ⇒ **Elde zaten okunmuş, kaynaklı, şehir düzeyinde bir tanıklık var ama kayıt hâlâ "hiçbir yerde kaynak yok" sayılıyor.** Bunlar yazılsa: 14 kayıt H→D **gerçek şehir tanıklığıyla**, 8 D kaydı (6'sı yukarıdaki 16'dan) bölge cümlesinin yanına şehir tanıklığı kazanır. Yeni araştırma gerektirmez; halkadaki `kaynak` alanı dönem `kaynak:`ına taşınır.
- Osmanlı tanıklıkları (127): `s:` değil `d:`/`v:` alanına karşılık gelir ⇒ bu görevin ölçütü dışında, **ölçülmedi**.
- Yabancı tanıklıklardan 30'u ÇELİŞİK/KAPSAMSIZ çıktı. Kapsamsızların çoğu tarih hassasiyeti: halka ay/yıl temsilî gün veriyor (Estergon 1595-09-01 ↔ Osmanlı bitişi 1595-09-02), ya da tanıklık `isg:` alanında duruyor (Bender · Trablus · Derne · Bingazi · Maraş 1919 · Böğürdelen 1788). **Çelişki diye RAPORLAMIYORUM.** Gerçek çelişki adayları (kaynak sorusu): Selanik 1423 (atlas bizans ↔ halka venedik) · Leş 1393 (dukagin ↔ venedik) · Maraş 1381 (dulkadir ↔ memluk) · Kandehar 1545/1622 · Kayseri 1437 (Osmanlı `d:` ↔ halka dulkadir) · Mekke 1806 (`suud` ↔ `suud-birinci`, büyük ihtimalle yalnız kimlik adı). Tam liste `halka_ac` çıktısında; KASA'ya sevk adayı.

### 4. `zincir_kaynagi` kapısı bunları kopya sayıyor mu? **HAYIR, ve yapısal olarak sayamaz**

- `denetle.py` 2fe8ada7 çıktısı: *"Ek denetim i zincir_kaynagi: 0 kayıt beyanlı — bayat kopya sorusu SORULACAK beyan yok (**serbest metin kopyaları bu kapıya GÖRÜNMEZ**)"*. `data/*.js` içinde `zincir_kaynagi` alanı taşıyan dosya: **0**.
- Alan olsa bile soru farklı: kapı kopya kaydın **zincirinin** (sahip sırası) kaynak kaydın bugünkü zinciriyle aynı kalıp kalmadığını sorar. **Kaynak METNİNİN** bölge cümlesi olup olmadığını sormaz. 16 bölge cümlesi kopyası kayıttan kayda zincir kopyası değil; bir kaynak cümlesinin 16 kayda yazılması. Hiçbir kapının sorusu değil.

### 5. Görev dışı ama koşuyu ilgilendiren bulgu: 2fe8ada7'de **çıkış 1**

`denetle.py` bu ağaçta, site damgasıyla uyuşan geometriyle (gövde `uret_petek 8b6aaea5`, `__DP_SHA 0ef2d3e2…` tuttu) koşturuldu → **SONUÇ: İHLAL VAR — çıkış kodu 1**, sebep **Değişmez 8a ✗ 1509 (tavan 1508)**. 600e2d00'da aynı geometriyle 1508'di. Geometri aynı olduğuna göre +1, 600e2d00..2fe8ada7 arasındaki **girdi** değişikliğinden. Hangi birim olduğunu ayırmadım (iki `--ayrinti` koşusu gerekir, ~10 dk). ⚠️ Bu yayındaki ESKİ geometriye karşı ölçüm; KOŞU 21 yeni geometri üretecek, oradaki 8a başka çıkabilir.

## ② NE BULAMADIM

- **K2'nin (122 kayıt) gerçekten bölge cümlesi mi, şehre özgü bir künye mi olduğu.** Sınıf makine sezgisidir (paylaşılan metin + şehir adı yok). Okunmadan hüküm yok ⇒ **ölçülemedi**, "bölge" de "yok" da yazılmadı. Aynısı O (42 kayıt) için.
- S sınıfı "şehri adıyla anıyor" demek, "o şehrin o günkü sahipliğine tanıklık ediyor" demek değil (Tebriz örneği: "Tebriz yakınları"). S yalnız **aday**.
- T kovasının (1847 kayıt, kayıt düzeyinde kaynak) aynı sınıflaması **yapılmadı**. Bölge cümlesi kayıt düzeyinde de olabilir ⇒ ölçülmedi.
- 16 şehre tarihsel doğruluk sınaması ve merge içi satır ayrımı: talimat gereği **DOKUNULMADI**. Birincisi KASA'ya sevk (aşağıda).
- 8a'daki +1 birimin kimliği.

## ③ NE İSTİYORUM (yazmadım)

1. **(b) BİLGİ satırının ölçütü hazır, iki katmanlı önerim:** "D'nin **21**'i yalnız beyanlı bölge cümlesiyle (B+B2) · **122**'si paylaşılan beyansız metinle (K2, okunmadı)". Yalnız 21'i basmak, %31'lik ikinci katmanı "temiz" gösterir.
2. **En ucuz, en etkili iş: halka → kayıt taşıması (28 kayıt, TSV hazır).** Yeni araştırma yok, okunmuş kaynak zaten repoda. 14'ü H→D'yi **şehir tanıklığıyla** yapar (bölge cümlesinin 16'lık iyileşmesinden daha sağlam bir 14). Veri yazma işi: koşu sonrası, sana ya da bir veri oturumuna.
3. **KASA'ya sevk:** (a) 16 şehrin karakoyunlu 1408'e tarihsel doğruluğu · (b) K2'nin en büyük üç grubu (İspanya 38 · Yunnan 19 · Eflak 13): künye mi, cümle mi, bölge mi · (c) 6 çelişki adayı (Selanik 1423 · Leş 1393 · Maraş 1381 · Kandehar · Kayseri 1437 · Mekke 1806).
4. **8a 1509 > 1508:** koşu sonrası `--ayrinti` farkını ister misin? Yoksa yeni geometriyle zaten yeniden ölçülecek mi?
