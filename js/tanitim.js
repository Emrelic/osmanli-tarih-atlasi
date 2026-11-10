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
  var ADIMLAR = [
    { baslik: "Tarih Atlası'na hoş geldiniz",
      p: ["Bu atlas, zaman ilerledikçe devlet sınırlarının nasıl değiştiğini gösterir. Haritanın yanında o günün kronolojisi ve hükümdarı akar: bir madde okuduğunuzda haritada tam o değişimi görürsünüz.",
          "Kısa bir turla ekrandaki her parçayı tanıtalım. İleri düğmesiyle (ya da sağ ok tuşuyla) ilerleyin; istediğiniz an Geç diyebilirsiniz."] },
    { baslik: "Sayfanın düzeni",
      p: ["Ekran dört parçadır:"],
      m: [["Ortada harita", "Seçili günün siyasî haritası."],
          ["Üstte çubuk", "O anki tarih, yakınlaştırma, Butonlar menüsü ve panel düğmesi."],
          ["Altta zaman çubuğu", "Oynat, ileri/geri, akış ayarı, sene ve şehir kutuları, zaman kaydırıcısı."],
          ["Sağda kronoloji sütunu", "Devlet seçici, hükümdar kartı ve olay maddeleri."]] },
    { hedef: ["#harita"], baslik: "Harita",
      p: ["Sürükleyerek kaydırın, fare tekerleğiyle (ya da iki parmakla) yakınlaşın.",
          "Renkli alanlar o gündeki devletlerdir; bir yere tıklayınca orası hakkında bilgi açılır. Tarih değiştikçe sınırlar kendiliğinden yeniden çizilir."] },
    { hedef: ["#ustbar-orta"], baslik: "O anki tarih",
      p: ["Haritanın şu an gösterdiği gün, dönemin adı ve o gün olan değişim burada yazar. Sağ yanında o günkü toprak alanı ve tarihteki zirveye oranı görünür."] },
    { hedef: ["#yakin-grup"], baslik: "+ / − Yakınlaş, uzaklaş",
      p: ["Haritayı bir kademe yakınlaştırır ya da uzaklaştırır (fare tekerleğinin düğme hâli)."] },
    { hedef: ["#btn-menu"], baslik: "☰ Butonlar",
      p: ["Tıklayınca araç menüsü açılır:"],
      m: [["ℹ Siteyi tanı", "Bu turu yeniden açar."],
          ["📚 Dizin", "Kişi, savaş ve antlaşma dizinleri; birine tıklayınca o güne gidilir."],
          ["🗺 Harita işaretleri", "Haritadaki simgelerin ne anlama geldiğini gösterir (lejant)."],
          ["ⓘ Kaynaklar", "Altlık harita, veri ve lisans atıfları."],
          ["Katman kutuları", "Yerleşim yerleri, yollar, harekât okları, siyasî yapılar, küre görünüm… Kutucukla açılıp kapatılır, birden çoğu seçilebilir."],
          ["🔍 Oto", "Toprak büyüdükçe haritayı kendiliğinden uzaklaştırır."],
          ["D sınırı", "Sınırların antlaşmaya göre mi (Hukukî), fiilî duruma göre mi (Fiilî) çizileceğini seçer."],
          ["⛶ Tam ekran", "Tarayıcıyı tam ekran yapar (Esc ile çıkılır)."],
          ["Bölge seçici", "Anadolu, Rumeli, Kafkasya… Seçilen bölgeye yakınlaşır."]] },
    { hedef: ["#btn-panel"], baslik: "⇥ Daralt / Kapat / Genişlet",
      p: ["Sağdaki kronoloji sütununun genişliğini ayarlar. Her basışta sırayla: geniş, dar, kapalı, yeniden geniş.",
          "Düğmenin üstünde, basınca gideceği hâl yazar: Daralt, Kapat ya da Genişlet. Haritayı büyütmek için sütunu kapatın; aynı düğmeyle geri açılır."] },
    { hedef: ["#btn-oynat"], baslik: "▶ Oynat / ⏸ Duraklat",
      p: ["Zamanı kendiliğinden ilerletir: harita ve kronoloji birlikte akar. Tekrar basınca durur."] },
    { hedef: ["#btn-geri", "#btn-ileri"], baslik: "⏮ Geri · ⏭ İleri",
      p: ["İleri düğmesi kronolojideki bir sonraki olaya, Geri düğmesi bir öncekine atlar.",
          "Harita o olayın gününe geçer, kronolojide madde vurgulanır. Oynatmadan, adım adım okumak için en rahat yoldur."] },
    { hedef: ["#akis-modu", "#hiz", "#olay-hiz"], baslik: "Oynatma ayarı: olay olay ya da sene sene",
      m: [["📜 Olay olay", "Varsayılan. Oynatınca olaydan olaya geçer; yanındaki kutu her olayda kaç saniye bekleneceğini seçer. Okumak için uygundur."],
          ["⏱ Zaman akışı", "Takvim düzgün akar (sene sene); yanındaki kutu hızı seçer: saniyede bir aydan saniyede on yıla kadar. Sınırların değişimini film gibi izlemek için uygundur."]] },
    { hedef: ["#tarihe-git-giris"], baslik: "Sene yaz git",
      p: ["Bu kutuya bir tarih yazıp Enter tuşuna basın; harita ve kronoloji o güne atlar.",
          "Yazım örnekleri: 1453 · 1453-05-29 · 29.05.1453 · 29 Mayıs 1453 · Mayıs 1453"] },
    { hedef: ["#yer-ara"], baslik: "Şehir yaz git",
      p: ["Bu kutuya bir yer adı yazın: şehir, kale, liman, bölge ya da ülke.",
          "Açılan listeden tıklayın (ya da ok tuşları ve Enter ile seçin); harita oraya uçar, tarih değişmez. Listede yalnız o gün haritada olan yerler çıkar."] },
    { hedef: ["#zaman-sarmal"], baslik: "Zaman kaydırıcısı",
      p: ["Sürükleyerek zamanda serbestçe gezin; harita bıraktığınız günü gösterir."] },
    // KONTROL-YERLESIMI-1110: uçuş grubu footer'a indi — tur sırası da yerleşimi izler.
    { hedef: ["#ucus-grup"], baslik: "Harita olaya nasıl gitsin?",
      p: ["Sıradaki olaya geçilince haritanın ne yapacağı:"],
      m: [["Pasif", "Harita yerinden kıpırdamaz, siz nerede bıraktıysanız orada kalır."],
          ["Ani", "Olay yerine bir anda atlar."],
          ["Uçuş", "Olay yerine süzülerek uçar."],
          ["⚙", "Uçuşun irtifa, yakınlık ve hızını, ayrıca kronoloji görünüm ayarlarını açar."]] },
    { hedef: ["#devlet-secici"], baslik: "Hangi devletin kronolojisi?",
      p: ["Sütunun tepesindeki seçici, kronolojisini okuyacağınız devleti belirler.",
          "İlk işaretlediğiniz devlet odaktır ve hükümdar kartı onunkidir; sonra işaretlediğiniz devletlerin maddeleri de ek olarak listeye katılır. Önem eşikleriyle kaç madde görüneceğini ayarlayabilirsiniz."] },
    { hedef: ["#padisah-karti"], baslik: "Hükümdar kartı",
      p: ["O gün tahtta kimin oturduğunu, portresini ve saltanat yıllarını gösterir; zaman ilerledikçe kendiliğinden değişir."] },
    { hedef: ["#olay-akisi-baslik"], baslik: "📜 Kronoloji başlığı",
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
    metinKur(ort.querySelector(".tanitim-metin"), a);
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
