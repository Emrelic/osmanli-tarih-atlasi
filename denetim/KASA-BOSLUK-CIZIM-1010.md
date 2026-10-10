# KASA-BOSLUK-CIZIM-1010 — `__BOSLUK__` taşıyan nokta haritada ne oluyor? (motor kodu okuması)

Görev: YILDIRIM BAYEZIT (SAHIP-BOLGE kararı ⑤) · Araştırmacı: KASA · salt okuma, koşu YOK · main a2f1c44d.
Soru: `__BOSLUK__` bir beyan RENGİ mi alıyor, yoksa DELİK mi bırakıyor? (22 noktanın kaderi buna bağlı.)

## Cevap: DELİK — ve dolguya karşı KORUNAN bir delik
Zincir, `arac/uret_petek.py` (satır numaraları main a2f1c44d):
1. **Renk yok** (`:1069-1077`): `if sp["d"] not in BOYALAR:` → `_HARITA_ALT`'ta karşılık yoksa "UYARI boya: … bilinmeyen
   devlet kimliği". `__BOSLUK__` ne BOYALAR'da ne `_HARITA_ALT`'ta ⇒ dönem **boyanmaz**. `arac/durum_tablosu.py:98-104`
   bunu zaten ölçmüş: "deyim KASITLI ama MOTORDA KARŞILIĞI YOK … boyanmaması 'bilinmeyen kimlik → renk yok → çizilmez'
   yolundan geliyor, ÖZEL BİR DAL'dan değil".
2. **Devralma yok** (`:4803` `_sahipli`): `s:` dönemi tarih aralığını kapsıyorsa `True` döner, kimliğe BAKMAZ ⇒
   `__BOSLUK__` "yazılı sahip" sayılır ⇒ `_kusatilmis()` (`:4921`) onu `continue` ile atlar ("zaten devrediliyor").
   ⇒ K2'nin ≥%90 kuşatma devri bu noktalara **uygulanmaz**. Nokta sahnedeyse peteği zaten kendi (renksiz) kimliğiyle
   çizilir.
3. **Dolgu yok** (`:6797`, `:7188` `delikleri_doldur(…, sahip_ix=aktif)`; `:3050` docstring): "halkanın içinde bu kümeye
   AİT OLMAYAN bir yerleşim varsa halka DOLDURULMAZ … nokta o gün sahipsiz olsa bile halka korunur" ⇒ komşu devletin
   gövdesi `__BOSLUK__` peteğini **yutmaz**.
4. **Arayüz:** `js/app.js:11316` `"s:__BOSLUK__"` → "kimsenin değil (boşluk beyanı)" (yalnız etiket; renk değil).
   `js/suzgec.js:513` süzgeçte boyanabilir sayılmıyor.
⇒ **`__BOSLUK__` = haritada RENKSİZ, korunan bir DELİK** (+ fareyle bakana "boşluk beyanı" yazısı).

## 22 nokta için anlamı
- **Doğu Cezayir 16 nokta BİTİŞİK** (Setif–Biskra–Tebesse–Batna–Mîle–Kalme…; 4,5-8,5°D). `__BOSLUK__` yazılırsa
  1281-1519/1552 arası Konstantin–Bicâye arasında **tek büyük delik** açılır. Bicâye ve Konstantin (Y, Hafsî) iki ada
  olarak kalır.
- Reşt · Enzeli (Gîlân), Dahlak · Arkîko (Kızıldeniz), Söke · Kuşadası (Ege): tek tük delikler.
- ⚠️ Bugünkü durum da kaynaksız. Doğu Cezayir'i `zeyyani` boyuyor ve bu bölge tanığıyla ÇELİŞİYOR. Yani seçim
  "doğru renk ↔ delik" değil, **"çelişkili renk ↔ dürüst delik"**.

## Seçenekler (karar senin)
1. **`__BOSLUK__` (K):** dürüst, ama 16 bitişik delik. K2'nin "sahipsiz toprak boş görünür" bulgusunun bilinçli bir
   örneği olur.
2. **Bölge sahibi + beyan:** Bicâye/Konstantin Hafsî (Y) ⇒ çevrelerindeki 16 nokta `hafsi` + `kesinlik:"bolge"` +
   `ic_not:"şehir adlı tanık yok; bölgenin iki merkezi Hafsî (TDV bicaye, kostantine)"`. D208 "bölgeden şehre hüküm
   taşınmaz" kuralına ters. Bunu ancak **beyanlı istisna** olarak kabul edersen.
3. **Erteleme:** 16 noktanın düzeltmesi FAZ 3'e, motor devretme yamasıyla birlikte. Ya da şehir adlı tanık turu
   (TDV `setif`, `biskra`, `tebesse`…) önce. 16 madde, kısa.
**Önerim 3b:** önce 16 şehrin TDV maddeleri taransın; şehir adlı Hafsî tanığı çıkanlar `hafsi` (Y) olur, çıkmayanlar
için 1 ya da 2 kararı verilir. Mîle, Biskra, Tebesse gibi tarihî şehirlerin çoğunda TDV maddesi olması muhtemel.
Kalan delik böylece küçülür.
