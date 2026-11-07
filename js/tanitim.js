// ═══ TANITIM — "bu site nasıl gezilir" turu (Emre, 7 Kasım 2026) ═══
// Emre: "bu sitenin nasıl çalıştırılacağına dair bir info en başa koyalım …
// ekrandaki butonları, sayfayı, kronoloji sütununu tanıtsın. infoyu geç ve bu
// bilgisayarda bir daha açma seçenekleri olsun. butonlar penceresinde infoyu
// görüntüle butonu ile sonradan da bakılabilsin."
// + "butonlar, sayfa, kronoloji başlığı, kronoloji sütunu daralt butonu, ileri
//   butonu, olay veya sene şeklinde oynatma ayarı, şehir yaz git, sene yaz git
//   textboxları — hepsinin fonksiyonunu anlat."
// · Adım adım tur: her adım ekrandaki gerçek öğeyi bir halkayla gösterir
//   (hedef birden çok öğeyse halka hepsini kuşatır). Öğe görünmüyorsa (panel
//   kapalı, dar ekran) halka çizilmez, kart ortada kalır.
// · "Bu bilgisayarda bir daha gösterme" → localStorage `tanitimGosterme`=1.
//   Yalnız açılıştaki kendiliğinden gösterimi susturur; ☰ Butonlar →
//   "ℹ Siteyi tanı" her durumda açar.
// · Açılış perdesi (#acilis) kalkana ve "tam ekran?" sorusu (#tamekran-soru)
//   kapanana kadar bekler — iki pencere üst üste açılmaz.
// · app.js'e dokunmaz; yalnız id'leri okur. Bir id kaybolursa o adım halkasız gösterilir.
// ⚠️ Arayüz değişirse (düğme taşınır, adı değişir) BU METİN de güncellenmeli.
(function () {
  var ANAHTAR = "tanitimGosterme";

  var ADIMLAR = [
    { baslik: "Tarih Atlası'na hoş geldiniz",
      metin: "Bu atlas, zaman ilerledikçe <b>devlet sınırlarının nasıl değiştiğini</b> gösterir. " +
             "Haritanın yanında o günün <b>kronolojisi</b> ve <b>hükümdarı</b> akar: bir madde okuduğunuzda " +
             "haritada tam o değişimi görürsünüz.<br><br>Kısa bir turla ekrandaki her parçayı tanıtalım — " +
             "<b>İleri ▶</b> (ya da → tuşu) ile ilerleyin, istediğiniz an <b>Geç</b> diyebilirsiniz." },
    { baslik: "Sayfanın düzeni",
      metin: "Ekran dört parçadır:<br>" +
             "• <b>Ortada harita</b> — seçili günün siyasî haritası.<br>" +
             "• <b>Üstte çubuk</b> — o anki tarih, yakınlaştırma, <b>☰ Butonlar</b> menüsü ve panel düğmesi.<br>" +
             "• <b>Altta zaman çubuğu</b> — oynat, ileri/geri, akış ayarı, sene ve şehir kutuları, zaman kaydırıcısı.<br>" +
             "• <b>Sağda kronoloji sütunu</b> — devlet seçici, hükümdar kartı ve olay maddeleri." },
    { hedef: ["#harita"], baslik: "Harita",
      metin: "Sürükleyerek kaydırın, fare tekerleğiyle (ya da iki parmakla) yakınlaşın. " +
             "Renkli alanlar o gündeki devletlerdir; bir yere tıklayınca orası hakkında bilgi açılır. " +
             "Tarih değiştikçe sınırlar kendiliğinden yeniden çizilir." },
    { hedef: ["#ustbar-orta"], baslik: "O anki tarih",
      metin: "Haritanın şu an gösterdiği <b>gün</b>, dönemin adı ve o gün olan değişim burada yazar. " +
             "Sağ yanında o günkü toprak alanı ve tarihteki zirveye oranı görünür." },
    { hedef: ["#yakin-grup"], baslik: "+ / − Yakınlaş, uzaklaş",
      metin: "Haritayı bir kademe yakınlaştırır ya da uzaklaştırır (fare tekerleğinin düğme hâli)." },
    { hedef: ["#btn-menu"], baslik: "☰ Butonlar",
      metin: "Tıklayınca araç menüsü açılır:<br>" +
             "• <b>ℹ Siteyi tanı</b> — bu turu yeniden açar.<br>" +
             "• <b>📚 Dizin</b> — kişi, savaş ve antlaşma dizinleri; birine tıklayınca o güne gidilir.<br>" +
             "• <b>🗺 Harita işaretleri</b> — haritadaki simgelerin ne anlama geldiği (lejant).<br>" +
             "• <b>ⓘ Kaynaklar</b> — altlık harita, veri ve lisans atıfları.<br>" +
             "• <b>Katmanlar</b> — yerleşim yerleri, yollar, harekât okları, siyasî yapılar, küre görünüm… " +
             "kutucukla açıp kapatılır, birden çoğu seçilebilir.<br>" +
             "• <b>🔍 Oto</b> — toprak büyüdükçe haritayı kendiliğinden uzaklaştırır.<br>" +
             "• <b>D sınırı</b> (Hukukî / Fiilî) — sınırların antlaşmaya göre mi, fiilî duruma göre mi çizileceği.<br>" +
             "• <b>⛶ Tam ekran</b> — tarayıcıyı tam ekran yapar (Esc ile çıkılır).<br>" +
             "• <b>Bölge seçici</b> — Anadolu, Rumeli, Kafkasya… seçilen bölgeye yakınlaşır." },
    { hedef: ["#btn-panel"], baslik: "⇥ Daralt / Kapat / Genişlet",
      metin: "Sağdaki kronoloji sütununun genişliğini ayarlar. Her basışta sırayla: " +
             "<b>geniş → dar → kapalı → geniş</b>. Düğmenin üstünde, basınca <b>gideceği</b> hâl yazar " +
             "(⇥ Daralt · ⇤ Kapat · ⇥ Genişlet). Haritayı büyütmek için sütunu kapatın; aynı düğmeyle geri açılır." },
    { hedef: ["#btn-oynat"], baslik: "▶ Oynat / ⏸ Duraklat",
      metin: "Zamanı kendiliğinden ilerletir: harita ve kronoloji birlikte akar. Tekrar basınca durur." },
    { hedef: ["#btn-geri", "#btn-ileri"], baslik: "⏮ Geri · ⏭ İleri",
      metin: "<b>⏭ İleri</b> kronolojideki <b>bir sonraki olaya</b>, <b>⏮ Geri</b> bir öncekine atlar. " +
             "Harita o olayın gününe geçer, kronolojide madde vurgulanır. Oynatmadan, adım adım okumak için en rahat yoldur." },
    { hedef: ["#akis-modu", "#hiz", "#olay-hiz"], baslik: "Oynatma ayarı: olay olay ya da sene sene",
      metin: "• <b>📜 Olay olay</b> (varsayılan) — oynatınca olaydan olaya geçer; yanındaki kutu " +
             "<b>her olayda kaç saniye</b> bekleneceğini seçer. Okumak için uygundur.<br>" +
             "• <b>⏱ Zaman akışı</b> — takvim düzgün akar (sene sene); yanındaki kutu hızı seçer: " +
             "saniyede 1 aydan saniyede <b>10 yıla</b> kadar. Sınırların değişimini film gibi izlemek için uygundur." },
    { hedef: ["#tarihe-git-giris"], baslik: "Sene yaz git",
      metin: "<b>tarihe git</b> kutusuna bir tarih yazıp <b>Enter</b>'a basın; harita ve kronoloji o güne atlar. " +
             "Yazım örnekleri: <i>1453</i> · <i>1453-05-29</i> · <i>29.05.1453</i> · <i>29 Mayıs 1453</i> · <i>Mayıs 1453</i>." },
    { hedef: ["#yer-ara"], baslik: "Şehir yaz git",
      metin: "<b>şehir yaz ve git</b> kutusuna bir yer adı yazın: şehir, kale, liman, bölge ya da ülke. " +
             "Açılan listeden tıklayın (ya da ↑/↓ + Enter); harita oraya uçar, <b>tarih değişmez</b>. " +
             "Listede yalnız <b>o gün haritada olan</b> yerler çıkar." },
    { hedef: ["#zaman-sarmal"], baslik: "Zaman kaydırıcısı",
      metin: "Sürükleyerek zamanda serbestçe gezin; harita bıraktığınız günü gösterir." },
    { hedef: ["#devlet-secici"], baslik: "Hangi devletin kronolojisi?",
      metin: "Sütunun tepesindeki seçici, kronolojisini okuyacağınız devleti belirler. " +
             "<b>İlk işaretlediğiniz devlet odaktır</b> (hükümdar kartı onunkidir), sonra işaretlediğiniz devletlerin " +
             "maddeleri de <b>ek</b> olarak listeye katılır. Önem eşikleriyle kaç madde görüneceğini ayarlayabilirsiniz." },
    { hedef: ["#ucus-grup"], baslik: "Harita olaya nasıl gitsin?",
      metin: "Sıradaki olaya geçilince haritanın ne yapacağı:<br>" +
             "• <b>Pasif</b> — harita yerinden kıpırdamaz, siz nerede bıraktıysanız orada kalır.<br>" +
             "• <b>Ani</b> — olay yerine bir anda atlar.<br>" +
             "• <b>Uçuş</b> — olay yerine süzülerek uçar.<br>" +
             "<b>⚙</b> uçuşun irtifa, yakınlık ve hızını, ayrıca kronoloji görünüm ayarlarını açar." },
    { hedef: ["#padisah-karti"], baslik: "Hükümdar kartı",
      metin: "O gün tahtta kimin oturduğunu, portresini ve saltanat yıllarını gösterir; zaman ilerledikçe kendiliğinden değişir." },
    { hedef: ["#olay-akisi h2"], baslik: "📜 Kronoloji başlığı",
      metin: "Sütunun başlığıdır. Yanındaki sayaç <b>şu an kaçıncı maddede</b> olduğunuzu ve listede " +
             "<b>toplam kaç madde</b> bulunduğunu gösterir (örneğin <i>120 / 2400 başlık</i>)." },
    { hedef: ["#kr-arama-satir"], baslik: "🔍 Kronolojide ara",
      metin: "Kelimeleri boşlukla ayırarak yazın — <b>hepsi geçen</b> maddeler kalır (<i>Mohaç macar</i>). " +
             "Tırnak içindeki ifade tek parça aranır. Büyük/küçük harf ve şapka farkı gözetilmez. " +
             "<b>⋯</b> gelişmiş aramayı açar: VE / VEYA, içerir / başlar / biter, başlıkta ya da metinde." },
    { hedef: ["#olay-listesi"], baslik: "Kronoloji sütunu",
      metin: "Olaylar gün gün sıralanır; o anki madde vurgulanır ve zaman ilerledikçe liste kendiliğinden kayar. " +
             "Bir maddeye <b>tıklayınca</b> harita o güne gider, değişen yeri gösterir ve <b>ayrıntı penceresi</b> açılır " +
             "(açıklama, görsel, kaynak). Böylece kronoloji ile harita birbirini doğrular." },
    { baslik: "Hazırsınız",
      metin: "<b>▶</b> ile oynatmayı başlatabilir, <b>⏭</b> ile olay olay ilerleyebilir ya da kronolojiden bir maddeye tıklayabilirsiniz.<br><br>" +
             "Turu yeniden görmek için: <b>☰ Butonlar → ℹ Siteyi tanı</b>." }
  ];

  var ort = null, halka = null, kart = null, sira = 0;

  // Hedeflerin görünen olanlarını kuşatan dikdörtgen; hiçbiri görünmüyorsa null.
  function kusat(secler) {
    var k = null;
    (secler || []).forEach(function (s) {
      var el = document.querySelector(s);
      if (!el) return;
      var r = el.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) return;
      if (r.right < 0 || r.bottom < 0 || r.left > innerWidth || r.top > innerHeight) return;
      if (!k) k = { left: r.left, top: r.top, right: r.right, bottom: r.bottom };
      else {
        k.left = Math.min(k.left, r.left); k.top = Math.min(k.top, r.top);
        k.right = Math.max(k.right, r.right); k.bottom = Math.max(k.bottom, r.bottom);
      }
    });
    if (k) { k.width = k.right - k.left; k.height = k.bottom - k.top; }
    return k;
  }

  function kur() {
    ort = document.createElement("div");
    ort.id = "tanitim";
    ort.setAttribute("role", "dialog");
    ort.setAttribute("aria-modal", "true");
    ort.setAttribute("aria-labelledby", "tanitim-baslik");
    ort.innerHTML =
      '<div id="tanitim-halka"></div>' +
      '<div id="tanitim-kart">' +
        '<button type="button" class="tanitim-kapat" title="Kapat (Esc)">✕</button>' +
        '<div class="tanitim-sayac"></div>' +
        '<div id="tanitim-baslik" class="tanitim-baslik"></div>' +
        '<div class="tanitim-metin"></div>' +
        '<label class="tanitim-gosterme"><input type="checkbox"> Bu bilgisayarda bir daha gösterme</label>' +
        '<div class="tanitim-dugmeler">' +
          '<button type="button" class="tanitim-gec">Geç</button>' +
          '<span class="tanitim-bosluk"></span>' +
          '<button type="button" class="tanitim-geri">◀ Geri</button>' +
          '<button type="button" class="tanitim-ileri">İleri ▶</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ort);
    halka = ort.querySelector("#tanitim-halka");
    kart = ort.querySelector("#tanitim-kart");
    var kutu = ort.querySelector(".tanitim-gosterme input");
    try { kutu.checked = localStorage.getItem(ANAHTAR) === "1"; } catch (e) { /* özel pencere */ }
    kutu.addEventListener("change", function () {
      try {
        if (kutu.checked) localStorage.setItem(ANAHTAR, "1");
        else localStorage.removeItem(ANAHTAR);
      } catch (e) { /* özel pencere — tercih kaydedilemez */ }
    });
    ort.querySelector(".tanitim-kapat").addEventListener("click", kapat);
    ort.querySelector(".tanitim-gec").addEventListener("click", kapat);
    ort.querySelector(".tanitim-geri").addEventListener("click", function () { git(sira - 1); });
    ort.querySelector(".tanitim-ileri").addEventListener("click", function () {
      if (sira >= ADIMLAR.length - 1) kapat(); else git(sira + 1);
    });
    // Kartın dışına tıklamak turu kapatmaz (yanlışlıkla kaçmasın) ama altındaki
    // haritaya da geçmez — tur sırasında ekran kıpırdamaz.
    document.addEventListener("keydown", tus, true);
    addEventListener("resize", yerlestir);
  }

  function tus(e) {
    if (!ort || ort.classList.contains("gizli")) return;
    if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); kapat(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); e.stopPropagation(); if (sira < ADIMLAR.length - 1) git(sira + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); e.stopPropagation(); if (sira > 0) git(sira - 1); }
  }

  function git(n) {
    sira = Math.max(0, Math.min(ADIMLAR.length - 1, n));
    var a = ADIMLAR[sira];
    ort.querySelector(".tanitim-sayac").textContent = (sira + 1) + " / " + ADIMLAR.length;
    ort.querySelector(".tanitim-baslik").textContent = a.baslik;
    ort.querySelector(".tanitim-metin").innerHTML = a.metin;
    ort.querySelector(".tanitim-geri").disabled = sira === 0;
    ort.querySelector(".tanitim-ileri").textContent = sira === ADIMLAR.length - 1 ? "Bitir ✓" : "İleri ▶";
    ort.querySelector(".tanitim-gec").style.visibility = sira === ADIMLAR.length - 1 ? "hidden" : "";
    yerlestir();
    ort.querySelector(".tanitim-ileri").focus();
  }

  function yerlestir() {
    if (!ort || ort.classList.contains("gizli")) return;
    var a = ADIMLAR[sira];
    var r = kusat(a.hedef);
    kart.className = "";
    kart.style.left = kart.style.top = "";
    if (!r) {
      halka.style.display = "none";
      ort.classList.add("tanitim-karart");
      kart.classList.add("tanitim-orta");
      return;
    }
    ort.classList.remove("tanitim-karart");
    var p = 6;
    halka.style.display = "block";
    halka.style.left = Math.max(2, r.left - p) + "px";
    halka.style.top = Math.max(2, r.top - p) + "px";
    halka.style.width = (Math.min(innerWidth - 2, r.right + p) - Math.max(2, r.left - p)) + "px";
    halka.style.height = (Math.min(innerHeight - 2, r.bottom + p) - Math.max(2, r.top - p)) + "px";
    if (innerWidth < 700) { kart.classList.add("tanitim-alt"); return; }
    // Hedef ekranın çoğunu kaplıyorsa (harita) kart ortaya.
    if (r.width > innerWidth * 0.55 && r.height > innerHeight * 0.55) {
      kart.classList.add("tanitim-orta");
      return;
    }
    // Kartı hedefin yanına (solu/sağı), yer yoksa üstüne/altına koy.
    var kw = kart.offsetWidth, kh = kart.offsetHeight, m = 16, x, y, ortala = false;
    if (r.left - m > kw + m) x = r.left - kw - m;
    else if (innerWidth - r.right - m > kw + m) x = r.right + m;
    else { x = (r.left + r.right) / 2 - kw / 2; ortala = true; }
    if (ortala) y = r.bottom + m + kh < innerHeight ? r.bottom + m : r.top - kh - m;
    else y = r.top + r.height / 2 - kh / 2;
    kart.style.left = Math.max(m, Math.min(innerWidth - kw - m, x)) + "px";
    kart.style.top = Math.max(m, Math.min(innerHeight - kh - m, y)) + "px";
  }

  function ac() {
    if (!ort) kur();
    ort.classList.remove("gizli");
    git(0);
  }

  function kapat() {
    if (ort) ort.classList.add("gizli");
  }

  window.tanitimAc = ac;

  // ☰ Butonlar → ℹ Siteyi tanı (index.html #btn-tanitim). Menü kendisi kapanır
  // (app.js: menüde <button> tıklanınca panel gizlenir).
  var dugme = document.getElementById("btn-tanitim");
  if (dugme) dugme.addEventListener("click", function () { setTimeout(ac, 0); });

  // Açılışta kendiliğinden: perde kalksın, harita kurulsun, tam ekran sorusu kapansın.
  try { if (localStorage.getItem(ANAHTAR) === "1") return; } catch (e) { /* özel pencere: göster */ }
  var bas = Date.now();
  (function bekle() {
    var hazir = document.documentElement.classList.contains("atlas-hazir") || Date.now() - bas > 15000;
    if (!hazir || document.getElementById("acilis") || document.getElementById("tamekran-soru")) {
      setTimeout(bekle, 300); return;
    }
    // Perde kalktıktan sonra tam ekran sorusu 250 ms içinde gelebilir — bir tur daha bak.
    setTimeout(function () {
      if (document.getElementById("tamekran-soru")) { setTimeout(bekle, 300); return; }
      if (!ort || ort.classList.contains("gizli")) ac();
    }, 700);
  })();
})();
