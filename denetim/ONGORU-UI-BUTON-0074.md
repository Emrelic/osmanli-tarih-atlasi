# ÖNGÖRÜ — UI-BUTON-0074 (H-0001 · H-0003 · H-0012)
Yazıldığı an: 21 Eylül 2026, ölçümden ÖNCE. Oturum: UI-BUTON-0074.
Sınav evreni her maddenin altında yazılıdır.

## H-0001 — "🔍 Oto" düğmesi BUTONLAR alanına
- Öngörü 1: düğme `index.html` `<footer id="zamanbar">` içinde, `id="btn-zoom"`,
  `#olay-hiz` seçicisinin hemen ardında. (Evren: index.html'in tamamı.)
- Öngörü 2: `js/app.js` düğmeye `getElementById("btn-zoom")` ile bağlanıyor, yani
  DOM'da yerini değiştirmek JS'te **0 satır** değişiklik gerektirir.
- Öngörü 3: CSS'te düğmeye `#zamanbar button` gibi KONUMA bağlı bir kural
  uygulanıyorsa taşındığında görünümü değişir → `css/style.css`te en az 1 kural
  düzeltmesi gerekir. (Evren: style.css'te `btn-zoom` ve `#zamanbar` seçicileri.)

## H-0003 — D/C (hukukî/fiilî) görünüm anahtarı haritadan BUTONLAR alanına
- Öngörü 4: anahtar `js/d_katman.js`te `_DGorunumKontrolu`, haritaya
  `harita.addControl(..., "top-right")` ile eklenmiş; `index.html`te HİÇ yok.
- Öngörü 5: **Örtüşme gerçektir ve iki kutu arasındadır**: MapLibre'nin
  `.maplibregl-ctrl-top-right` yığını ile `#harita-ust-sag` (içinde `#btn-panel`).
  Ölçülen kesişim alanı > 0 px² olacak. (Evren: `#harita` içindeki bütün mutlak
  konumlu üst-sağ kutular — `#harita-ust-sag`, `.maplibregl-ctrl-top-right`,
  varsa başkaları; ikişerli bütün çiftler taranacak.)
- Öngörü 6: `.maplibregl-ctrl-top-left` (NavigationControl) bu örtüşmenin
  TARAFI DEĞİLDİR (karşı köşe) — kesişimi 0 çıkacak.
- Öngörü 7: taşındıktan sonra `addControl` çağrısı kaldırılır ve düğmeler
  `#menu-butonlar` içine kurulur; `_dGorunum` değişkeni ve `_dSinirGuncelle`
  çağrısı AYNEN kalır (yeni mekanizma açılmaz, D045).

## H-0012 — geliştirici notunun son kullanıcıya sızması
- Öngörü 8: blok **veride değil**, `js/app.js:9433-9444` `antlasmaFarkiGoster`
  içinde üretiliyor; `data/` altında bu metnin kaynağı yok.
- Öngörü 9: metin, antlaşma maddelerinin **%30–60'ında** görünüyor
  (evren: `antlasmaMaddesiMi(o)` doğru olan bütün kronoloji maddeleri;
  `antlasmaFarkiHesapla(o).f` boş çıkanlar sayılacak).
- Öngörü 10: okura sızan **başka 3–6 iç not sınıfı** daha bulunacak. Beklediklerim:
  ① "Görünüm kurulamadı — sayfayı yenileyin (js/suzgec.js eski sürüm (önbellek))"
  ② "bölge sınırları yüklenemedi (data/petek_govde.js)"
  ③ "N bölgenin peteği yok, çizilmedi"
  ④ "bölge sınırları yükleniyor…"
  ⑤ "o günün öteki N değişimi bu maddeye ait değil, yanıp sönmez"
  ⑥ "kimsenin değil (boşluk beyanı)"
  (Evren: `js/app.js` + `js/*.js` içinde kullanıcıya basılan — `textContent` /
  `innerHTML` — dize sabitleri; `console.*` hariç.)
- Öngörü 11: emsal var — H-0047 (16 Eylül) aynı sınıfı `maddeFarkiGoster`te
  konsola indirmişti; doğru çare aynı desendir: kutuyu hiç basma, teşhisi
  `console.debug`a ver.
