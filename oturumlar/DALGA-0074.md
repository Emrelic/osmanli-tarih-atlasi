# DALGA-0074 — Emre'nin 17 maddelik partisi (21 Eylül 2026, 00:49)

Parti metni: `C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0074\PARTI.md`
Görseller AYNI dizinde. 🔴 Yalnız KENDİ maddenin görselini aç.

| madde | kim | konu |
|---|---|---|
| H-0004 · H-0010 · H-0017 | KRONO-YER-0072 | haritada noktası olmayan maddeler — Emre "TÜMÜ taransın" diyor |
| H-0011 | SEFER-OK-0070 | Anapa'nın teslimi gibi maddelerde sefer oku |
| H-0006 | CIZGI-ANLAM-0073 | mavi çizgiler: sınır mı, o yıl geçerli mi |
| H-0009 | D-RENK-0073 | sınır o tarihte geçerliyse renk ona oturmalı |
| H-0002 | EKO-YENICERI-0073 | Bektaşîlik nedir · yeniçeri ocağıyla ilgisi |
| H-0005 · H-0016 | EKO-BOLGE-0073 | tımar sistemi + dünyadaki benzerleri · Cezayir'in ordusu yok muydu |
| H-0001 · H-0003 · H-0012 | UI-BUTON-0074 (YENİ) | oto butonu + D/C ayarı butonlar alanına · madde içi geliştirici notları |
| H-0007 · H-0008 · H-0014 · H-0015 | HARITA-DURUM-0074 (YENİ) | boş toprak · üst üste binme · Edirne sonrası Eflak-Boğdan |
| H-0013 | ANTLASMA-KADEME-0074 (YENİ) | antlaşma maddelerinde ÜÇ kademe gösterim |

## Herkes için ortak kurallar
`oturumlar/DALGA-0073.md`in "Herkes için ortak kurallar" bölümü aynen geçerlidir
(kaynak · öngörü · dosya sahipliği · denetle · teslim · bekçi). Ek olarak:
🔴 `js/app.js`e aynı anda birkaç oturum yazıyor: yazmadan HEMEN önce yeniden oku,
yazdıktan sonra kendi satırlarını geri oku, `node --check js/app.js` koştur.

## Yeni oturumların kalemleri

### UI-BUTON-0074 — H-0001 · H-0003 · H-0012
- H-0001: "oto" butonu (otomatik odaklama · olay play · olay hızı ayarının yanındaki)
  BUTONLAR alanına taşınsın.
- H-0003: fiilî D görünümü ile C görünümü ayarı da haritadan BUTONLAR alanına
  alınsın — Emre "zaten üst üste binmiş yapı var" diyor, yani harita üzerindeki
  kutular birbirini örtüyor. Önce ÖLÇ: hangi kutular hangi kutuyu örtüyor.
- H-0012: 🔴 KURAL İHLALİ, madde metinlerinde geliştirici notu var. Emre'nin
  gösterdiği örnek: "🗺 Antlaşmanın haritadaki karşılığı — Bu maddenin
  penceresinde taraflar arasında haritada el değiştiren toprak yok. Antlaşma var
  olan durumu tanımış olabilir ya da toprak değişimi bu güne işlenmemiş olabilir."
  Bu metin SON KULLANICIYA gidiyor ve bizim iç notumuz. ÖNCE ÖLÇ: bu blok nerede
  üretiliyor (veri mi, `js/app.js` mi), kaç maddede görünüyor, başka hangi iç not
  sınıfları okura sızıyor? Sonra kaldır. Ölçümü sayıyla ver.

### HARITA-DURUM-0074 — H-0007 · H-0008 · H-0014 · H-0015
- H-0008 bir SINIF, tek vaka değil: "bütün atlasta üst üste binmiş toprakları
  tespit edip düzeltelim". 🔴 TABAN ÖLÇÜM VAR, sıfırdan başlama:
  ENKLAV-0072 (20 Eylül, `denetim/ENKLAV-0072-0920.md`) Karadağ penceresinde
  0,01 derecelik ızgarayla ölçtü — çifte iddialı toprak 1.563 km², o pencerede
  sahipli toprağın %15,3'ü. Yöntemi genişlet: aynı ızgara, bütün dünya, birkaç
  kesit. Çıktı: hangi kimlik çifti, nerede, kaç km².
  ⚠️ Ölçümün kendisi ağır olabilir — önce dar kutuda maliyet ölç.
- H-0007 ve H-0015'in "açık yeşil boş arazi"si: Emre'nin "sürekli başımıza belâ
  oluyor" dediği sınıf. 🔴 Bugün B görünümü çalışması tam bunu çözüyor
  (`oturumlar/GORUNUM-ABCD-0916.md` UFUK AYARI + B-GORUNUM-0072'nin ölçümü:
  doğru ufukta sahipsiz kara Anadolu kutusunda 0'a iniyor). O yüzden
  "boşluğu doldur" işine GİRME — senin işin boşluğun SEBEBİNİ teşhis etmek:
  nokta yokluğu mu, kayıt yokluğu mu, yoksa ufuk kesmesi mi. Sınıfı say.
- H-0014 ve H-0015: Edirne Antlaşması'ndan (1829) SONRA Eflak-Boğdan hâlâ işgal
  taralı görünüyor. Emre "böyle bir madde mi vardı" diye soruyor. ÖLÇ: ilgili
  `isg:` kayıtlarının `t:` alanı ne diyor, antlaşma ne diyor (TDV
  `edirne-antlasmasi`), ikisi tutuyor mu. Tutmuyorsa veri kusurudur — düzeltme
  yetkisi için bana yaz, 2s bütçesini de hesapla.

### ANTLASMA-KADEME-0074 — H-0013 (büyük, mimarî)
Emre antlaşma maddelerinde ÜÇ kademeli gösterim istiyor:
`1) savaştan önce · 2) savaş sonrası FİİLÎ durum (işgaller) · 3) barış
antlaşmasından sonra`. Bugün iki kademe var (önce/sonra — `_antlasmaHal`).
- 🔴 ÖNCE ÖLÇÜM VE PLAN, kod sonra: bugünkü iki kademe hangi veriden türüyor,
  üçüncüsü hangi veriden türeyecek? "Savaş sonrası fiilî durum" = `isg:`
  kayıtlarının antlaşma gününden HEMEN ÖNCEKİ hâli olabilir; bu bir ÖNERİDİR,
  ölç ve doğrula.
- Kaç antlaşma maddesi var, kaçında üç kademe ANLAMLI (yani savaş + işgal +
  antlaşma zinciri tam)? Sayıyla ver. Emre "tüm antlaşmaların ayarını buna göre
  yapalım" diyor, ama önce kaç tanesinin verisi buna yetiyor bilinmeli.
- Emre'nin Edirne görselinde saydığı dört gösterim (taralı işgal · açık yeşil boş
  arazi · koyu yeşil · turkuaz Çerkezistan) HARITA-DURUM-0074'ün kalemi; sen
  yalnız KADEME mimarisine bak, onunla yatay konuş.
