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

  // ⚠️ ÇEVİRİ: js/ceviri.js arayüzü METİN DÜĞÜMÜ başına sözlükten çevirir ve
  // arac/ceviri_cikar.js bu dosyadaki dizgileri etiketlerden BÖLEREK toplar.
  // Cümlenin ortasına <b>/<i> koymak cümleyi parçalara ayırır ve yabancı dilde
  // bozuk çeviri üretir. Bu yüzden: `p` = bütün cümleli paragraflar, `m` =
  // [kalın terim, tam cümle açıklama] maddeleri. Metne etiket YAZMA.
  var ADIMLAR_HAM = [
    { baslik: "KRONOATLAS'a hoş geldiniz",
      p: ["Bu atlas, zaman ilerledikçe devlet sınırlarının nasıl değiştiğini gösterir. Haritanın yanında o günün kronolojisi ve hükümdarı akar: bir madde okuduğunuzda haritada tam o değişimi görürsünüz.",
          "Kısa bir turla ekrandaki her parçayı tanıtalım. İleri düğmesiyle (ya da sağ ok tuşuyla) ilerleyin; istediğiniz an Geç diyebilirsiniz."],
      tel: { p: ["Bu atlas, zaman ilerledikçe devlet sınırlarının nasıl değiştiğini gösterir. Haritanın yanında o günün kronolojisi ve hükümdarı akar: bir madde okuduğunuzda haritada tam o değişimi görürsünüz.",
                 "Kısa bir turla ekrandaki her parçayı tanıtalım. İleri düğmesine dokunarak ilerleyin; istediğiniz an Geç diyebilirsiniz."] } },
    { baslik: "Sayfanın düzeni",
      p: ["Ekran dört parçadır:"],
      m: [["Ortada harita", "Seçili günün siyasî haritası."],
          ["Üstte çubuk", "O anki tarih, yakınlaştırma, Butonlar menüsü ve panel düğmesi."],
          ["Altta zaman çubuğu", "Oynat, ileri/geri, akış ayarı, sene ve şehir kutuları, zaman kaydırıcısı."],
          ["Sağda kronoloji sütunu", "Devlet seçici, hükümdar kartı ve olay maddeleri."]],
      tel: { p: ["Telefonda ekran üç parçadır:"],
             m: [["Üstte harita", "Seçili günün siyasî haritası; üst çubukta o anki tarih ve Butonlar menüsü durur."],
                 ["Ortada zaman denetimleri", "Oynat, ileri/geri ve şehir kutusu."],
                 ["Altta kronoloji paneli", "Devlet seçici, hükümdar kartı ve olay maddeleri."]] } },
    { hedef: ["#harita"], baslik: "Harita",
      p: ["Sürükleyerek kaydırın, fare tekerleğiyle (ya da iki parmakla) yakınlaşın.",
          "Renkli alanlar o gündeki devletlerdir; bir yere tıklayınca orası hakkında bilgi açılır. Tarih değiştikçe sınırlar kendiliğinden yeniden çizilir."],
      tel: { p: ["Parmağınızla sürükleyerek kaydırın, iki parmağınızla yakınlaşın.",
                 "Renkli alanlar o gündeki devletlerdir; bir yere dokununca orası hakkında bilgi açılır. Tarih değiştikçe sınırlar kendiliğinden yeniden çizilir."] } },
    { sadece: "masa", hedef: ["#ustbar-orta"], baslik: "O anki tarih",
      p: ["Haritanın şu an gösterdiği gün, dönemin adı ve o gün olan değişim burada yazar. Sağ yanında o günkü toprak alanı ve tarihteki zirveye oranı görünür."] },
    { sadece: "masa", hedef: ["#yakin-grup"], baslik: "+ / − Yakınlaş, uzaklaş",
      p: ["Haritayı bir kademe yakınlaştırır ya da uzaklaştırır (fare tekerleğinin düğme hâli)."] },
    { hedef: ["#btn-menu"], baslik: "☰ Butonlar",
      p: ["Bu düğme araç menüsünü açar. Menü dört gruptur; şimdi menüyü açıp her grubu tek tek tanıyalım."] },
    { hedef: ["#mg-kesfet"], ac: true, baslik: "Butonlar: Keşfet",
      m: [["ℹ Siteyi tanı", "Bu turu yeniden açar."],
          ["📚 Dizin", "Kişi, savaş, antlaşma, devlet, şehir, yüzyıl ve kaynak dizinleri; birine tıklayınca o güne ve yere gidilir."],
          ["📜 Yüzyıllar", "Bütün kronoloji maddelerini yüzyıllara göre, okunur sayfalarda açar."]] },
    { hedef: ["#mg-harita"], ac: true, baslik: "Butonlar: Harita gösterimi",
      p: ["Haritada neyin görüneceğini buradan seçersiniz. Kutucuklarla açılıp kapatılır, birden çoğu seçilebilir."],
      m: [["Küre görünüm", "Dünyayı yuvarlak gösterir."],
          ["Altlık", "Devlet renklerinin altındaki zemini seçer."],
          ["Sınır çizgileri", "Sınırların antlaşmaya göre mi (Hukukî), fiilî duruma göre mi (Hukukî + fiilî) çizileceğini seçer."],
          ["Harekât okları", "Seferleri ok olarak gösterir."],
          ["🗺 Harita işaretleri", "Haritadaki renk ve simgelerin ne anlama geldiğini açıklar."]] },
    { hedef: ["#mg-gezinti"], ac: true, baslik: "Butonlar: Gezinti",
      m: [["🔍 Oto", "Toprak büyüdükçe haritayı kendiliğinden uzaklaştırır."],
          ["⛶ Tam ekran", "Tarayıcıyı tam ekran yapar (Esc ile çıkılır)."],
          ["Bölge seçici", "Anadolu, Rumeli, Kafkasya… Seçilen bölgeye yakınlaşır."]],
      tel: { m: [["Olay olay / Zaman akışı", "Oynatmanın olaydan olaya mı, sene sene mi akacağını ve hızını seçer."],
                 ["🔍 Oto", "Toprak büyüdükçe haritayı kendiliğinden uzaklaştırır."],
                 ["⛶ Tam ekran", "Ekranı tam ekran yapar."],
                 ["Bölge seçici", "Anadolu, Rumeli, Kafkasya… Seçilen bölgeye yakınlaşır."]] } },
    { hedef: ["#mg-topluluk"], ac: true, baslik: "Butonlar: Topluluk ve bilgi",
      m: [["💬 Forum", "Kahvehane: tarih forumu."],
          ["ⓘ Kaynaklar", "Altlık harita, veri ve lisans atıfları. Maddelerin kaynakları Dizin içindeki Kaynaklar sekmesindedir."]] },
    { hedef: ["#btn-panel"], baslik: "⇥ Daralt / Kapat / Genişlet",
      p: ["Sağdaki kronoloji sütununun genişliğini ayarlar. Her basışta sırayla: geniş, dar, kapalı, yeniden geniş.",
          "Düğmenin üstünde, basınca gideceği hâl yazar: Daralt, Kapat ya da Genişlet. Haritayı büyütmek için sütunu kapatın; aynı düğmeyle geri açılır."] },
    { hedef: ["#btn-oynat"], baslik: "▶ Oynat / ⏸ Duraklat",
      p: ["Zamanı kendiliğinden ilerletir: harita ve kronoloji birlikte akar. Tekrar basınca durur."] },
    { hedef: ["#btn-geri", "#btn-ileri"], baslik: "⏮ Geri · ⏭ İleri",
      p: ["İleri düğmesi kronolojideki bir sonraki olaya, Geri düğmesi bir öncekine atlar.",
          "Harita o olayın gününe geçer, kronolojide madde vurgulanır. Oynatmadan, adım adım okumak için en rahat yoldur."] },
    { sadece: "masa", hedef: ["#akis-modu", "#hiz", "#olay-hiz"], baslik: "Oynatma ayarı: olay olay ya da sene sene",
      m: [["📜 Olay olay", "Varsayılan. Oynatınca olaydan olaya geçer; yanındaki kutu her olayda kaç saniye bekleneceğini seçer. Okumak için uygundur."],
          ["⏱ Zaman akışı", "Takvim düzgün akar (sene sene); yanındaki kutu hızı seçer: saniyede bir aydan saniyede on yıla kadar. Sınırların değişimini film gibi izlemek için uygundur."]] },
    { sadece: "masa", hedef: ["#tarihe-git-giris"], baslik: "Sene yaz git",
      p: ["Bu kutuya bir tarih yazıp Enter tuşuna basın; harita ve kronoloji o güne atlar.",
          "Yazım örnekleri: 1453 · 1453-05-29 · 29.05.1453 · 29 Mayıs 1453 · Mayıs 1453",
          "Milattan önce için eksi ya da MÖ yazın: -1236 · MÖ 1236 · -12000. 0 milada (MS 1) götürür."] },
    { hedef: ["#yer-ara"], baslik: "Şehir yaz git",
      p: ["Bu kutuya bir yer adı yazın: şehir, kale, liman, bölge ya da ülke.",
          "Açılan listeden tıklayın (ya da ok tuşları ve Enter ile seçin); harita oraya uçar, tarih değişmez. Listede yalnız o gün haritada olan yerler çıkar."] },
    { sadece: "masa", hedef: ["#zaman-sarmal"], baslik: "Zaman kaydırıcısı",
      p: ["Sürükleyerek zamanda serbestçe gezin; harita bıraktığınız günü gösterir."] },
    // KONTROL-YERLESIMI-1110: uçuş grubu footer'a indi — tur sırası da yerleşimi izler.
    { hedef: ["#ucus-grup"], baslik: "✈ Uçuş ayarları",
      p: ["Sıradaki olaya geçilince haritanın ne yapacağını burada seçersiniz; uçuşun ince ayarları da aynı pencerededir."],
      m: [["Pasif", "Harita yerinden kıpırdamaz, siz nerede bıraktıysanız orada kalır."],
          ["Ani", "Olay yerine bir anda atlar."],
          ["Uçuş", "Olay yerine süzülerek uçar."]] },
    { hedef: ["#devlet-secici"], baslik: "Hangi devletin kronolojisi?",
      p: ["Sütunun tepesindeki seçici, kronolojisini okuyacağınız devleti belirler.",
          "İlk işaretlediğiniz devlet odaktır ve hükümdar kartı onunkidir; sonra işaretlediğiniz devletlerin maddeleri de ek olarak listeye katılır. Önem eşikleriyle kaç madde görüneceğini ayarlayabilirsiniz."] },
    { hedef: ["#padisah-karti"], baslik: "Hükümdar kartı",
      p: ["O gün tahtta kimin oturduğunu, portresini ve saltanat yıllarını gösterir; zaman ilerledikçe kendiliğinden değişir."] },
    { sadece: "masa", hedef: ["#olay-akisi-baslik"], baslik: "📜 Kronoloji başlığı",
      p: ["Sütunun başlığıdır. Yanındaki sayaç, şu an kaçıncı maddede olduğunuzu ve listede toplam kaç madde bulunduğunu gösterir."] },
    { hedef: ["#kr-arama-satir"], baslik: "🔍 Kronolojide ara",
      p: ["Kelimeleri boşlukla ayırarak yazın; hepsi geçen maddeler kalır. Tırnak içindeki ifade tek parça aranır. Büyük/küçük harf ve şapka farkı gözetilmez.",
          "Yanındaki düğme gelişmiş aramayı açar: VE / VEYA, içerir / başlar / biter, başlıkta ya da metinde."] },
    { hedef: ["#olay-listesi"], baslik: "Kronoloji sütunu",
      p: ["Olaylar gün gün sıralanır; o anki madde vurgulanır ve zaman ilerledikçe liste kendiliğinden kayar.",
          "Bir maddeye tıklayınca harita o güne gider, değişen yeri gösterir ve ayrıntı penceresi açılır (açıklama, görsel, kaynak). Böylece kronoloji ile harita birbirini doğrular."] },
    { baslik: "Hazırsınız",
      p: ["Oynat düğmesiyle zamanı akıtabilir, İleri düğmesiyle olay olay ilerleyebilir ya da kronolojiden bir maddeye tıklayabilirsiniz.",
          "Turu yeniden görmek için Butonlar menüsündeki Siteyi tanı düğmesine basın."] }
  ];
  // Masaüstü ve telefon AYRI gösterilir: adım `sadece:"masa"|"tel"` taşıyabilir, `tel:{…}` alanları
  // telefonda adımın üstüne yazılır. Tur her açılışta yeniden kurulur (ATLAS_TELEFON o anda okunur).
  var ADIMLAR = ADIMLAR_HAM;
  function adimlariKur() {
    var tel = !!window.ATLAS_TELEFON;
    ADIMLAR = ADIMLAR_HAM.filter(function (a) { return !a.sadece || a.sadece === (tel ? "tel" : "masa"); })
      .map(function (a) { return tel && a.tel ? Object.assign({}, a, a.tel) : a; });
  }

  // Metin düğümleri ayrı ayrı (createTextNode) — innerHTML yok, her cümle tek düğüm.
  function metinKur(kutu, a) {
    kutu.textContent = "";
    (a.p || []).forEach(function (s) {
      var p = document.createElement("p");
      p.textContent = s;
      kutu.appendChild(p);
    });
    if (a.m) {
      var ul = document.createElement("ul");
      a.m.forEach(function (ik) {
        var li = document.createElement("li");
        var b = document.createElement("b");
        b.textContent = ik[0];
        var sp = document.createElement("span");
        sp.textContent = ik[1];
        li.appendChild(b); li.appendChild(sp);
        ul.appendChild(li);
      });
      kutu.appendChild(ul);
    }
  }

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
    // Tur açıkken tıklama belgeye ulaşmasın: Butonlar menüsü "dışarı tıklayınca kapanır" kuralıyla
    // Geri/İleri tıklamasında kapanmasın (tur menüyü kendisi açıp kapatır).
    ort.addEventListener("click", function (e) { e.stopPropagation(); });
    document.addEventListener("keydown", tus, true);
    addEventListener("resize", yerlestir);
  }

  function tus(e) {
    if (!ort || ort.classList.contains("gizli")) return;
    if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); kapat(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); e.stopPropagation(); if (sira < ADIMLAR.length - 1) git(sira + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); e.stopPropagation(); if (sira > 0) git(sira - 1); }
  }

  function menuAyarla(ac) {
    var m = document.getElementById("menu-butonlar");
    if (m) m.classList.toggle("gizli", !ac);
  }

  function git(n) {
    sira = Math.max(0, Math.min(ADIMLAR.length - 1, n));
    var a = ADIMLAR[sira];
    menuAyarla(!!a.ac);
    ort.querySelector(".tanitim-sayac").textContent = (sira + 1) + " / " + ADIMLAR.length;
    ort.querySelector(".tanitim-baslik").textContent = a.baslik;
    metinKur(ort.querySelector(".tanitim-metin"), a);
    ort.querySelector(".tanitim-geri").disabled = sira === 0;
    ort.querySelector(".tanitim-ileri").textContent = sira === ADIMLAR.length - 1 ? "Bitir ✓" : "İleri ▶";
    ort.querySelector(".tanitim-gec").style.visibility = sira === ADIMLAR.length - 1 ? "hidden" : "";
    yerlestir();
    if (a.ac) setTimeout(yerlestir, 80);   // menü açılışı bir an sürer
    ort.querySelector(".tanitim-ileri").focus();
  }

  // Kartı hedefi ÖRTMEYECEK yere koyar (Emre, 23 Kasım 2026). Masaüstünde sağ/sol/alt/üst ve dört
  // köşe aday olur, hedefle kesişim alanı en küçük olan seçilir (harita gibi ekranı kaplayan hedefte
  // kesişim kaçınılmazdır: kart en az örten köşeye gider). Telefonda kart tam genişlikte, hedefin
  // olmadığı yarıda (üst ya da alt) durur ve yüksekliği o boşluğa sığacak biçimde kısılır.
  function kesisim(a, b) {
    var w = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    var h = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return w > 0 && h > 0 ? w * h : 0;
  }

  function yerlestir() {
    if (!ort || ort.classList.contains("gizli")) return;
    var a = ADIMLAR[sira];
    var r = kusat(a.hedef);
    kart.className = "";
    kart.style.left = kart.style.top = kart.style.right = kart.style.bottom = kart.style.maxHeight = "";
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
    var m = 12;
    var hedef = { left: r.left - p, top: r.top - p, right: r.right + p, bottom: r.bottom + p };
    if (innerWidth < 700) {
      kart.classList.add("tanitim-alt");
      var ust = hedef.top - 2 * m, alt = innerHeight - hedef.bottom - 2 * m;
      var uste = ust > alt;                       // hedefin üstünde daha çok yer varsa kart üste
      var yer = Math.max(120, Math.floor(uste ? ust : alt));
      kart.style.maxHeight = Math.min(yer, Math.floor(innerHeight * 0.6)) + "px";
      kart.style.overflowY = "auto";
      if (uste) { kart.style.top = m + "px"; kart.style.bottom = "auto"; }
      else { kart.style.bottom = m + "px"; kart.style.top = "auto"; }
      return;
    }
    kart.style.overflowY = "";
    var kw = kart.offsetWidth, kh = kart.offsetHeight;
    kart.style.maxHeight = (innerHeight - 2 * m) + "px";
    function sinir(v, kucuk, buyuk) { return Math.max(kucuk, Math.min(buyuk, v)); }
    var ortaY = sinir((r.top + r.bottom) / 2 - kh / 2, m, innerHeight - kh - m);
    var ortaX = sinir((r.left + r.right) / 2 - kw / 2, m, innerWidth - kw - m);
    var adaylar = [
      { x: hedef.right + m, y: ortaY }, { x: hedef.left - kw - m, y: ortaY },
      { x: ortaX, y: hedef.bottom + m }, { x: ortaX, y: hedef.top - kh - m },
      { x: m, y: innerHeight - kh - m }, { x: innerWidth - kw - m, y: innerHeight - kh - m },
      { x: m, y: m }, { x: innerWidth - kw - m, y: m }
    ];
    var en = null, enKes = Infinity;
    adaylar.forEach(function (c) {
      var x = sinir(c.x, m, innerWidth - kw - m), y = sinir(c.y, m, innerHeight - kh - m);
      var kes = kesisim({ left: x, top: y, right: x + kw, bottom: y + kh }, hedef);
      // Ekran dışına taşan aday hedefe yaklaştırılmış (sinir) olur; kesişimi büyürse elenir.
      if (kes < enKes) { enKes = kes; en = { x: x, y: y }; }
    });
    kart.style.left = en.x + "px";
    kart.style.top = en.y + "px";
  }

  function ac() {
    if (!ort) kur();
    adimlariKur();
    ort.classList.remove("gizli");
    git(0);
  }

  function kapat() {
    if (ort) ort.classList.add("gizli");
    menuAyarla(false);
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
