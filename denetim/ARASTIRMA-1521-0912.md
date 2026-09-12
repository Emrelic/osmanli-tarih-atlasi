# ARAŞTIRMA — 1521-01-01 YIĞILMASI (H-0019, İŞ⑧)

```
OTURUM   KITA 18  ·  local_51c63067-51c9-4ea3-aa3e-ec9e8fc4c566
GÖREV    M-3600 (1.MURAT) → İŞ⑧ · parti-emrelic-0043 (Kırım işinden AYRI)
🔴 BU BİR ARAŞTIRMA RAPORUDUR, HÜKÜM DEĞİL. data/ ve arac/'a DOKUNULMADI.
   js/app.js KİMSEDE DEĞİL — dokunulmadı.
```

## ⓪ ÖZET

Emre'nin gördüğü "aynı günde 3 alakasız olay" **6 kronoloji maddesine** ve
— bu araştırmanın yeni ölçtüğü — **en az 10 ayrı petek/toprak kırılmasına**
karşılık geliyor, altı kıtaya yayılmış: Ege (Nikarya, Fornoz), Körfez
(Bahreyn), Rusya (Tula, Ryazan), Karayipler (Caparra, San Juan), Hindistan
(Çaul), Endonezya (Samudra Pasai), Lübnan (Ba'lebek). **Tarihleri
"düzeltmek" bu işin konusu DEĞİL** — `YYYY-01-01` bu projenin kendi kabul
edilmiş yazım biçimi (CLAUDE.md §4, 2052 kayıt). Asıl bulgu: 6 maddenin
yalnız **ikisi** (Bahreyn, Nikarya) doğrudan bir petek kırılmasına
bağlıydı gibi görünüyordu — daha derin taramada bir **üçüncüsü** de
(Canberdi Gazâlî → Ba'lebek) bağlandı, ama geri kalan **sekiz kırılmanın**
altısı bu 6 maddenin HİÇBİRİNDE anılmıyor. Bu, Emre'nin gerçek şikâyetinin
(**atfedilebilirlik** — hangi harita değişikliği hangi metne ait)
göründüğünden de büyük olduğunu gösteriyor.

## ① ALTI KRONOLOJİ MADDESİ — TEK TEK, GÜN ARANDI (D022 öngörüsü altta)

**Öngörü (ölçümden önce yazıldı):** Canberdi Gazâlî için TDV'de ayrı
madde + gün bulma ihtimalini YÜKSEK, Gustav Vasa için akademik kaynaktan
gün bulmayı ORTA (~%50), Sâhib Giray için TDV genel maddesinin gün
VERMEYECEĞİNİ (~%40 ihtimalle ayrı madde bulunur), Nikarya için TDV'nin
ada-özel gün VERMEYECEĞİNİ (~%20) tahmin ettim.

```
① Canbirdi Gazâlî isyanı    → 🟢 GÜN BULUNDU, öngörü TUTTU
② Gustav Vasa (Dalarna)     → 🔴 BULUNAMADI (kırmızı çizgi disi kaynaklarda var)
③ Sâhib Giray → Kazan tahtı → 🟡 KISMEN — MEVSİM bulundu, gün değil
④ Bahreyn → Portekiz        → ⚪ ZATEN ÇÖZÜLMÜŞ (dokunulmadı)
⑤ Piri Reis Kitâb-ı Bahriye → ⚪ ZATEN ÇÖZÜLMÜŞ (dokunulmadı, hicri yıl)
⑥ Nikarya (İkarya) fethi    → 🔴 BULUNAMADI + KAYNAK ALANI YANLIŞ
```

### ① Canbirdi Gazâlî isyanı — 🟢 GÜN BULUNDU

Mevcut kayıt (`data/kronoloji_anadolu.js:1437`) `kaynak:"dulkadirogullari"`
kullanıyor — isyanla dolaylı ilişkili bir kaynak (Şehsuvaroğlu Ali Bey'in
Dulkadir bağlantısı üzerinden). **TDV'nin kendi maddesi `canberdi-gazali`
DEĞİL, `canbirdi-gazali`** (§4② tuzağı — yazım varyantı, ilk fetch arama
sayfasına düştü):
> *"27 Ocak 1521'de yapılan savaşta Canbirdi'nin ordusu bozguna uğradı"*
> (Şam yakınında, Mastaba muharebesi; isyan 1 Kasım 1520'de Halep
> kuşatmasıyla başlamıştı)

⇒ **Aday gün: 1521-01-27.** Mevcut kaydın konusu ("Şehsuvaroğlu Ali Bey'in
bastırmaya destek vermesi") bu savaşla aynı olay penceresinde ama BİREBİR
aynı olay olduğu doğrulanmadı — Şehsuvaroğlu'nun katkısının bu muharebeyle
mi yoksa isyanın başka bir safhasıyla mı örtüştüğü ayrıca sorulmalı.
`kaynak:` alanı da güncellenmeli: `dulkadirogullari` → `canbirdi-gazali`.

### ② Gustav Vasa (Dalarna) — 🔴 BULUNAMADI (kırmızı çizgi)

TDV kapsamı dışı (İsveç, CLAUDE.md'nin "Batı Avrupa %0" kovasında).
Mevcut kaynak zaten akademik (Franklin D. Scott, *Sweden: The Nation's
History*) — bu kitabın kendi metnine erişimim yok. Web araması **6 Ocak
1521** (Gustav'ın Mora'ya dönüşü / hövitsman ilanı) gibi bir tarihe işaret
ediyor, ama kaynaklar Wikipedia/Military Wiki Fandom/Ancient Origins —
CLAUDE.md §4'ün kırmızı çizgisine göre **KULLANILMAZ** sınıfı. ⇒
`bulunamadı` — güvenilir kaynaktan gün alınamadı; Scott'un kitabına
doğrudan erişimi olan biri (kütüphane/Google Books) tekrar deneyebilir.

### ③ Sâhib Giray → Kazan tahtı — 🟡 MEVSİM bulundu, gün değil

Mevcut kayıt `kaynak:"kirim (TDV)"` — belirsiz bir genel referans. Doğru
slug **`sahib-giray`** (200, gövde okundu):
> *"O da 1521 ilkbaharında Kazan'a gelip tahta oturdu."*
> (madde ayrıca 1521 içindeki başka bir olayı GÜN veriyor: Moskova seferi,
> *"927 Şâban / 1521 Temmuz"* — ama bu FARKLI bir olay, Kazan tahtı değil)

⇒ TDV yalnız **mevsim** (ilkbahar) veriyor, gün vermiyor. Bu, projenin
"`YYYY-01-01` gün için, yıl için `bulunamadı`" ikili kuralının ARASINDA
kalan bir hassasiyet — CLAUDE.md'de "ay ayın 1'ine kodlanmış" ekseni gibi
üçüncü bir kademe (§4, `D`-dizini): kaynak yıldan hassas ama günden kaba.
**Bu araştırma bir gün UYDURMUYOR**; `kaynak:` alanının `kirim (TDV)` →
`sahib-giray` olarak güncellenmesi ve `gun:` alanına *"1521 ilkbaharı
(TDV sahib-giray)"* notunun eklenmesi ÖNERİLEBİLİR — hangi ayın seçileceği
(varsa) veri sahibinin kararı.

### ④⑤ Bahreyn ve Piri Reis — zaten doğru, dokunulmadı

İkisi de `gun:` alanında kaynağın kendi hassasiyet sınırını **zaten
doğru** taşıyor (Bahreyn: *"1521 (TDV: ay ve gün yok)"*; Piri Reis: hicrî
yıl *"927 (1521)"*, kitabın kendi tamamlanma ayı/günü kaynakta yok).
Koordinatörün de zaten işaretlediği gibi bunlar **dokunulmayacak.**

### ⑥ Nikarya (İkarya) — 🔴 BULUNAMADI + kaynak alanı YANLIŞ

Mevcut kayıt `kaynak:"sakiz-adasi"` taşıyor. **Bu kaynak İDDİAYI
TAŞIMIYOR** — TDV `sakiz-adasi` maddesi Nikarya/İkarya'dan hiç söz
etmiyor (fetch ile doğrulandı, D144 sınıfı bir kusur: beyan edilen
kaynak iddiayı desteklemiyor). Aranan alternatifler:
```
ikarya      200 ama İÇERİK YOK ("ikarya için madde başlıklarında
            sonuç bulunamadı" — §4① tuzağı: ölü slug 200 dönebiliyor)
oniki-ada   200, CANLI, ama Nikarya/İkarya ADI GEÇMİYOR — TDV'nin
            "on iki ada" listesi (Batnoz, Lipso, Leryoz, Kilimli,
            İstanköy, İstanpulya, İncirli, İlyaki, Sömbeki, Kerpe,
            Herki, Kaşot) İkarya'yı İÇERMİYOR — ada bu gruplamanın
            dışında tutuluyor
```
⇒ `bulunamadı` — TDV'nin bu adayı kapsayan bir maddesi taranan üç slug'da
yok. `kaynak:"sakiz-adasi"` alanı yanlış (bağlantısız), düzeltilmesi
önerilir: `bulunamadı — TDV taranan sluglarda (ikarya/oniki-ada/
sakiz-adasi) Nikarya'yı kapsamıyor`.

## ② SINIFIN BÜYÜKLÜĞÜ — KOORDİNATÖRÜN ÖLÇÜMÜ (M-3600, tekrarlanmadı)

```
1281-01-01 → 13 olay   1348 → 12   1386 → 10   1500 → 10   1554 → 10   1600 → 10
```
Bu ölçüm koordinatöre ait, burada tekrarlanmadı — 1521-01-01 yalnız BİR
örnek, `YYYY-01-01` bu projenin kabul edilmiş yazım kuralı (2052 kayıt).
**Bu araştırmanın işi bu deseni "düzeltmek" değil.**

## ③ 🔑 ASIL SORU — ATFEDİLEBİLİRLİK, YENİ ÖLÇÜLDÜ

Triyajın kendi notu: *"harita o günün toprak değişimini BİR KEZ çiziyor
ve hangi maddeye ait olduğu ayırt edilemiyor."* Bunu ölçmek için 1521-01-01
gününde **petek kırılması** (bir yerleşimin `d:`/`s:`/`v:` dizisinde
`f:` ya da `t:` tam bu güne denk gelen) olan kaç kayıt olduğunu taradım
(78 canlı dosya, `arac/girdi.py` kapsamı):

```
EN AZ 10 AYRI YERLEŞİM KAYDI, 6 AYRI COĞRAFİ HİKÂYE:
  Nikarya (İkarya)      Ceneviz  → Osmanlı     (Ege)
  Fornoz (Fourni)       Ceneviz  → Osmanlı     (Ege, Nikarya'nın KOMŞUSU
                                                 aynı temizlik dalgası —
                                                 kendi kronoloji maddesi YOK)
  Manama (Bahreyn)      Cebrî    → Portekiz    (Körfez)
  Tula                  Ryazan   → Moskova     (Rusya)
  Ryazan (devlet)       (kendisi)→ son (ilhak)  (Rusya — devletler.js'te de
                                                 f:1129/t:1521-01-01)
  Caparra                bit: (şehir terk edildi, San Juan'a taşındı)
  San Juan               kur: (kuruldu), İspanya  (Porto Riko)
  Çaul (Chaul)           Ahmednagar → Portekiz    (Hindistan)
  Samudra Pasai          kendisi  → Portekiz      (Sumatra)
  Ba'lebek (Baalbek)     doğrudan Osmanlı → tâbi Harfûşoğulları (Lübnan —
                                                 Canbirdi Gazâlî isyanı
                                                 SONRASI, kaynağın kendi
                                                 notu böyle diyor)
```
⚠️ İki kayıt (`Deyrülkamer`, bir isimsiz eşleşme) ilk taramada göründü
ama satır satır doğrulamada **1521-01-01 taşımadıkları anlaşıldı** —
arama penceresi (metinde 1500 karakter geriye bakan bir regex) komşu
kayıtlardan isim sızdırmış; bu iki satır **DÜŞÜRÜLDÜ**, sayı 12 değil
**10**, yöntem sınırlaması olarak kayda geçiyor.

### Eşleşme tablosu — 6 madde × 10 kırılma

```
Canbirdi Gazâlî isyanı   ↔ Ba'lebek (v: Harfûşoğulları)      ✅ BAĞLANIYOR
                                                              (kaynağın kendi notu)
Gustav Vasa               ↔ (hiçbiri — İsveç petek'te yok)    ❌ bağlantısız
Sâhib Giray → Kazan       ↔ (hiçbiri — Kazan/Tula/Ryazan      ❌ bağlantısız
                             AYNI GÜN ama AYRI, ilgisiz olay)  (YANILTICI YAKINLIK)
Bahreyn → Portekiz        ↔ Manama                            ✅ BAĞLANIYOR
Piri Reis Kitâb-ı Bahriye ↔ (hiçbiri — kitap, toprak değil)   ❌ bağlantısız
Nikarya fethi              ↔ Nikarya + Fornoz (2 kayıt, 1 madde) ✅ BAĞLANIYOR (x2)

BAĞLANTISIZ KIRILMALAR (6 maddenin HİÇBİRİNDE yok):
  Tula, Ryazan(devlet), Caparra, San Juan, Çaul, Samudra Pasai  → 6 kırılma
```

⇒ **Sayısal cevap:** 1521-01-01'de en az **10 petek kırılması** var; 6
kronoloji maddesinin **3'ü** (Canbirdi Gazâlî, Bahreyn, Nikarya) bunlardan
**4 kırılmayı** açıklıyor (Ba'lebek + Manama + Nikarya + Fornoz);
**6 kırılma tamamen açıklamasız** kalıyor (muhtemelen kendi kronoloji
maddeleri BAŞKA dosyalarda mevcut ama bu araştırmanın taradığı 6-madde
kümesinin dışında — bu araştırma o 6 dosyayı taramadı, ARANMADI).

🔴 **VE BİR TUZAK NOTU:** Sâhib Giray'ın Kazan'a çıkışı ile Tula/Ryazan'ın
Moskova'ya geçişi **AYNI GÜNDE, KOMŞU COĞRAFYADA (ikisi de Volga/Rusya
bozkırı)** ama **BİRBİRİYLE İLGİSİZ** iki olay — bir kullanıcı haritada
aynı anda hem Kazan'da hem Tula'da bir şey değiştiğini görüp bunları TEK
BİR HİKÂYE sanabilir. Bu, atfedilebilirlik sorununun EN SİNSİ biçimi:
yanlış eşleşme yanlış olmaktan da beter, çünkü **inandırıcı.**

## ④ ÖNCEDEN KAYITLI EMSAL — 0019/H-0036

Koordinatörün andığı emsal doğrulandı: `denetim/BULGU-GECE-TASNIF-1.md`
içinde `0019/H-0036` (Nusaybin↔Tersane, 1515-01-01) **aynı sınıf** bir
atfedilebilirlik şikâyeti olarak kayıtlı duruyor — ve o da bu ana kadar
**çözülmemiş.** Bu, tek seferlik bir kusur değil **tekrarlayan bir arayüz
sınıfı**; her yeni vaka kendi başına çözülürse desen hiç kapanmaz.

## ⑤ SEÇENEKLER — KARAR VERİLMEDİ (js/app.js kimsede değil)

```
A) Zaman çubuğunda o günün BİRDEN FAZLA kırılması varsa bunu say/işaretle
   ("bu günde N toprak değişimi var") — kullanıcı en azından ölçeği görür.
B) Kronoloji maddesi tıklanınca, o maddenin YER'İYLE eşleşen kırılmayı
   haritada VURGULA (varsa) — eşleşme yoksa (Gustav Vasa, Piri Reis gibi)
   hiçbir vurgu gösterme, bu da kendi başına bir bilgi.
C) Bir günün birden fazla ALAKASIZ kırılması varsa zaman çubuğunda görsel
   bir uyarı/ayraç ("bu gün N farklı coğrafyada değişim var, aşağı kaydır")
D) Hiçbir şey yapma — mevcut UX korunsun, yalnız belge/rapor düzeyinde
   bilinsin (0019/H-0036 zaten bu durumda, 4 aydır).
```
Dördü de bir **js/app.js** kararı; bu oturum ne dosyaya dokundu ne bir
seçeneği önerdi — ölçüp saydı.

## ⑥ ÖLÇEMEDİKLERİM (D107)

```
⚪ Tula/Ryazan/Caparra/San Juan/Çaul/Samudra Pasai'nin KENDİ kronoloji
   maddelerinin BAŞKA bir dosyada (bu araştırmanın taramadığı) var olup
   olmadığı — ARANMADI, kapsam dışıydı (görev yalnız 6 maddeyi + kırılma
   sayısını sordu).
⚪ Gustav Vasa'nın gerçek günü — Franklin D. Scott kitabına erişimim yok,
   yalnız kırmızı-çizgi-dışı web kaynakları buldum (kullanılmadı).
⚪ Şehsuvaroğlu Ali Bey'in Canbirdi Gazâlî'ye desteğinin TAM OLARAK
   27 Ocak 1521 muharebesiyle mi yoksa isyanın başka bir safhasıyla mı
   örtüştüğü — TDV `canbirdi-gazali` maddesinin TAMAMI okunmadı, yalnız
   özet.
```

## ⑦ KAYNAKÇA

```
TDV canbirdi-gazali   https://islamansiklopedisi.org.tr/canbirdi-gazali   (200, bugün)
TDV sahib-giray       https://islamansiklopedisi.org.tr/sahib-giray       (200, bugün)
TDV sakiz-adasi       https://islamansiklopedisi.org.tr/sakiz-adasi       (200, Nikarya YOK)
TDV ikarya            ÖLÜ (200 ama "sonuç bulunamadı")
TDV oniki-ada         200, Nikarya listede YOK
TDV canberdi-gazali   ÖLÜ SLUG — doğrusu canbirdi-gazali (§4② tuzağı)
web (kırmızı çizgi dışı, KULLANILMADI): Gustav Vasa 6 Ocak 1521 iddiası
  — Wikipedia/Military Wiki Fandom/Ancient Origins, projenin akademik
  kaynak şartını karşılamıyor
```
