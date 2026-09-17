# Ayrı dosya ≠ ayrı ad alanı; kaynak (CPU/koşu) sahipliği

> Kimlik `D225` · `CLAUDE.md §7` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

- 🔴🔴 **AYRI DOSYA VERMEK, AYRI AD ALANI VERMEK DEĞİLDİR.**
  *(16 Ağustos 2026 — bir günde ÜÇ vaka, biri %74 kayıp riski taşıyordu)*

  `§7`'nin tamamı **dosya** sahipliğini koruyor. Ama `data/*.js`
  dosyaları `window.<AD>` küresel değişkenleri tanımlıyor ve
  **JavaScript'te asıl paylaşılan kaynak dosya değil KÜRESEL AD
  ALANIDIR.** İki dosya aynı adı kullanırsa ikincisi birincisini
  **sessizce ezer** — dosyalar ayrı olduğu için `§7` bunu görmez.

  ```
  ① KORIDOR_YAMA      2 dosya · biri DİZİ öteki NESNE
                      koordinatör ikisine ayrı DOSYA adı verdi,
                      DEĞİŞKEN adını sormadı
  ② KADEME_YAMA       5 dosya · TEK ad
                      tek tek okununca 537 kayıt · BİRLİKTE 137
                      ⇒ %74 (400 kayıt) görünmez olurdu
  ③ app.js süzgeci    ada değil BİÇİME bağlıydı — yeni yamaların
                      biçimi tanınmadı, ikisi de ELENDİ
  ```

  🟢 **②'de zarar GERÇEKLEŞMEDİ** ve bunu varsayım değil ölçüm söyledi:
  üç oturum kendi yamasının indiğini ayrı ayrı doğrulamıştı (57/57 ·
  127/127 · 239), yani uygulayıcı dosyaları **tek tek** okumuş.
  ⚠️ Ama bu bir **tasarım kararı değil, tesadüf**: uygulayıcı doğru
  biçimde yazılmıştı. Tek bağlamda `eval` eden biri 400 kaydı sessizce
  yok edebilirdi ve **hiçbir denetim ötmezdi** — denetimler *"yama
  UYGULANDI mı"* diye sorar, *"yama OKUNDU mu"* diye sormaz.

  ⇒ **KURAL:** `data/<tur>_<kısaltma>.js` → `window.<TUR>_<KISALTMA>`.
  **Dosya adındaki ayırt edici parça, değişken adında da olacak.**
  Bir oturuma dosya verirken **ad alanını da ver.**

  📌 Ve ③ ayrı bir ders: elle liste → önek deseni → **biçim varsayımı**.
  Her çare bir öncekinin daha görünmez hâli oldu.
  ***Bir varsayımı kaldırmak, onu bir kademe daha derine gömmek
  olabilir.*** Süzgeç tanımadığını **sessizce elemez, SAYIP BASAR.**


- 🔴🔴 **`§7` DOSYA SAHİPLİĞİNİ KORUYOR AMA *KAYNAK* SAHİPLİĞİ DİYE BİR
  ŞEY YOK — ve bir gecede İKİ KEZ ısırdı.** *(3 Eylül 2026)*

  `§7`nin tamamı *"hangi dosyaya kim yazar"* sorusunu cevaplıyor. Ama
  uzun bir koşu bir dosyaya yazmaz — **CPU'yu, belleği ve saati**
  tüketir, ve o kaynakların sahibi yazılı değil.
  ```
  22:54:46  koordinatör 143 kimlik renk koşusunu başlattı  (~60 dk)
  22:55:33  PRUSYA-0903 AYNI koşuyu başlattı               (~60 dk)
  arada 47 SANİYE · ikisi de "başlıyorum" dedi, ikisi de SORMADI
  ```
  ⇒ İki koşu aynı CPU'yu paylaştı, **ikisi de yavaşladı**, ve iki ayrı
  artefakt doğacaktı. Kusur iki taraflı: biri *"koştur"* dedi ama
  **kendi de koşturdu**; öteki *"başlıyorum"* dedi ama **sormadı.**

  🟢 **KURAL:** birkaç dakikadan uzun süren bir işi başlatan taraf,
  **başlatmadan ÖNCE** tahtaya yazar ve **60 saniye bekler**:
  ```
  py arac/tahta.py yaz --kim "<SEN>" --kime "HERKES" \
      --mesaj "KOŞUYU BEN BAŞLATIYORUM · <ne> · ~<süre>"
  ```
  ⚠️ Ve bu bir nezaket değil ölçüm meselesi: aynı anda koşan iki iş
  yalnız yavaşlamaz, **süre ölçümünü de bozar** — *"60-90 dakika
  sürüyor"* hükmü o gece verilseydi yanlış olurdu.

  📌 Ve tereddüdü doğuran şey kaydedilmeye değer: koordinatör koşusunun
  saatini **yanlış beyan etti** (*"23:1x"*, gerçek 22:54:46) ve karşı
  taraf bir an *"yanlış olanı durduruyorum"* diye duraksadı. Süreçlerden
  ölçtü, beyandan değil, ve doğruyu buldu.
  ⇒ ***Bir çakışmayı çözerken beyana değil SÜREÇ DAMGASINA bak.***

  🔴 Aynı turda koordinatörün ikinci teşhisi de çürüdü: *"seninki
  muhtemelen 550 renkli `BOYALAR` ile başladı"* dedi; ölçüldü, koşu
  `checkout`tan **67 saniye SONRA** başlamıştı ve çıktısında *"zaten
  tanımlı"* satırı **0**'dı. ⇒ **Hüküm doğru (koşu durmalı), teşhis
  yanlış (sebep o değil).** Bu ayrım korunmazsa bir sonraki oturum
  yanlış sebebi düzeltmeye kalkar.

Yeni bir oturum başlatılacaksa görev tanımı `oturumlar/` altına yazılır
(örnek: `oturumlar/OTURUM-3-DEVLETLER.md`).

---
