/* ═══ MARKA — KRONOATLAS (Emre, 16 Kasım 2026; EMRELİC 16 KASIM P3+P4) ═══════════
   index.html <head>'inde, HER ŞEYDEN ÖNCE, senkron yüklenir. Üç iş:
   ① KONSOL SESSİZLEŞTİRME — halka açık sitede console.log/info/debug/warn susar
      (LAB P5 ölçümü: her açılışta 63 mesaj, ~10 uyarı; "SINIFLANMAMIŞ 21 katman",
      "KRONOLOJI_* eşlenemedi" gibi dahili tanılar halka açık görünüyordu).
      console.error DOKUNULMAZ (gerçek hata). `?gelistirici=1` ya da `?tani=…`
      verilince hiçbir şey susmaz. (Ctrl+Alt+G ile sonradan açılan geliştirici
      kipi konsolu sayfa yenilenene kadar sessiz bırakır — kabul.)
   ② DİLE GÖRE BAŞLIK + META — <title>, description, og:*, twitter:*. Ham HTML
      Türkçedir (tarayıcı olmayan okuyucular onu görür); burada kullanıcının
      diline (?dil > localStorage "dil" > "tr", js/ceviri.js ile aynı sıra)
      çevrilir. MARKA ADI ÇEVRİLMEZ: KRONOATLAS.
   ③ BETA / HAKKINDA penceresi — küçük "BETA" düğmesi + kapsam beyanı + hata
      bildirme yolu. Metinler bu dosyada, 8 dilde; app.js'e dokunmaz.
   ⚠️ og:url / canonical şimdilik github.io adresi. Alan adı (kronoatlas.com,
      kronoatlas.com.tr) bağlanınca DEĞİŞECEK — index.html'de "ALAN-ADI" notu. */
(function () {
  "use strict";
  var ARAMA = location.search || "";
  var GELISTIRICI = /[?&](gelistirici=1|tani=)/.test(ARAMA);
  window.GELISTIRICI_KIPI = GELISTIRICI;

  // ① konsol
  if (!GELISTIRICI && window.console) {
    var sus = function () {};
    ["log", "info", "debug", "warn"].forEach(function (k) {
      try { console[k] = sus; } catch (e) { /* salt-okunur konsol — geç */ }
    });
  }

  // ② dil
  var dil = "tr";
  try {
    var p = new URLSearchParams(ARAMA).get("dil");
    var k = null;
    try { k = localStorage.getItem("dil"); } catch (e) { /* özel pencere */ }
    dil = (p || k || "tr").toLowerCase();
  } catch (e) { dil = "tr"; }

  var AD = "KRONOATLAS";
  var EPOSTA = "iletisim.kronoatlas@gmail.com";   // Emre, 18 Kasım 2026
  var M = {
    tr: { alt: "Etkileşimli Tarih Atlası",
      acik: "Zaman ilerledikçe devlet sınırlarının değiştiği, yanında kronoloji ve dönemin hükümdarının aktığı etkileşimli tarih atlası. Osmanlı 1281–1923 gün hassasiyetinde; dünya kapsamı kademeli genişliyor. Beta sürümü.",
      beta: "Beta", hakkinda: "KRONOATLAS · Beta sürümü",
      p1: "KRONOATLAS beta sürümündedir; eksikler ve hatalar olabilir.",
      p2: "Kapsam: Osmanlı Devleti 1281–1923 arası gün hassasiyetinde işlenmiştir. Dünyanın geri kalanı kademeli olarak ekleniyor; bazı bölge ve dönemlerde sınırlar yaklaşıktır ya da boştur.",
      p3: "Bir hata ya da eksik gördüyseniz lütfen bildirin:",
      bildir: "Hata bildir", kapat: "Kapat", atla: "Haritaya geç",
      yapimBaslik: "🚧 Yapım aşamasındadır",
      yapimMetin: "KRONOATLAS henüz yapım aşamasındadır. Harita, kronoloji ve forum üzerinde çalışmalarımız sürüyor; bazı bölümler eksik ya da hatalı olabilir. Anlayışınız için teşekkür ederiz.",
      tamam: "Tamam", iletisim: "✉ İletişim", iletisimIpucu: "Bize yazın", iletisimSatir: "İletişim:" },
    en: { alt: "Interactive History Atlas",
      acik: "An interactive history atlas where state borders change as time moves, with the chronology and the ruler of the era alongside. The Ottoman Empire 1281–1923 is covered to the day; the rest of the world is being added step by step. Beta.",
      beta: "Beta", hakkinda: "KRONOATLAS · Beta version",
      p1: "KRONOATLAS is in beta; there may be gaps and errors.",
      p2: "Scope: the Ottoman Empire from 1281 to 1923 is covered to the day. The rest of the world is being added step by step; in some regions and periods borders are approximate or blank.",
      p3: "If you notice an error or a gap, please report it:",
      bildir: "Report an issue", kapat: "Close", atla: "Skip to the map",
      yapimBaslik: "🚧 Under construction",
      yapimMetin: "KRONOATLAS is still under construction. We are working on the map, the chronology and the forum; some parts may be incomplete or contain errors. Thank you for your understanding.",
      tamam: "OK", iletisim: "✉ Contact", iletisimIpucu: "Write to us", iletisimSatir: "Contact:" },
    ar: { alt: "أطلس التاريخ التفاعلي",
      acik: "أطلس تاريخي تفاعلي تتغير فيه حدود الدول مع مرور الزمن، ويرافقه التسلسل الزمني وحاكم تلك الحقبة. الدولة العثمانية 1281–1923 موثقة بدقة اليوم؛ ويجري توسيع التغطية إلى بقية العالم تدريجيًا. نسخة تجريبية.",
      beta: "تجريبي", hakkinda: "KRONOATLAS · نسخة تجريبية",
      p1: "KRONOATLAS في مرحلة تجريبية؛ قد توجد نواقص وأخطاء.",
      p2: "النطاق: الدولة العثمانية من 1281 إلى 1923 موثقة بدقة اليوم. وتُضاف بقية دول العالم تدريجيًا؛ وفي بعض المناطق والفترات تكون الحدود تقريبية أو فارغة.",
      p3: "إذا لاحظت خطأً أو نقصًا، يُرجى الإبلاغ عنه:",
      bildir: "الإبلاغ عن مشكلة", kapat: "إغلاق", atla: "انتقل إلى الخريطة",
      yapimBaslik: "🚧 قيد الإنشاء",
      yapimMetin: "KRONOATLAS لا يزال قيد الإنشاء. نواصل العمل على الخريطة والتسلسل الزمني والمنتدى؛ وقد تكون بعض الأقسام ناقصة أو تحتوي على أخطاء. شكرًا لتفهمكم.",
      tamam: "حسنًا", iletisim: "✉ اتصل بنا", iletisimIpucu: "راسلنا", iletisimSatir: "للتواصل:" },
    es: { alt: "Atlas histórico interactivo",
      acik: "Un atlas histórico interactivo en el que las fronteras de los estados cambian con el paso del tiempo, junto con la cronología y el gobernante de la época. El Imperio otomano (1281–1923) está documentado día a día; el resto del mundo se amplía por etapas. Versión beta.",
      beta: "Beta", hakkinda: "KRONOATLAS · Versión beta",
      p1: "KRONOATLAS está en fase beta; puede haber lagunas y errores.",
      p2: "Alcance: el Imperio otomano de 1281 a 1923 está documentado día a día. El resto del mundo se va añadiendo por etapas; en algunas regiones y períodos las fronteras son aproximadas o están en blanco.",
      p3: "Si ve un error o una carencia, infórmenos:",
      bildir: "Informar de un problema", kapat: "Cerrar", atla: "Ir al mapa",
      yapimBaslik: "🚧 En construcción",
      yapimMetin: "KRONOATLAS todavía está en construcción. Seguimos trabajando en el mapa, la cronología y el foro; algunas partes pueden estar incompletas o contener errores. Gracias por su comprensión.",
      tamam: "Aceptar", iletisim: "✉ Contacto", iletisimIpucu: "Escríbanos", iletisimSatir: "Contacto:" },
    fr: { alt: "Atlas historique interactif",
      acik: "Un atlas historique interactif où les frontières des États évoluent avec le temps, accompagnées de la chronologie et du souverain de l'époque. L'Empire ottoman (1281–1923) est documenté jour par jour ; le reste du monde est ajouté progressivement. Version bêta.",
      beta: "Bêta", hakkinda: "KRONOATLAS · Version bêta",
      p1: "KRONOATLAS est en version bêta ; des lacunes et des erreurs sont possibles.",
      p2: "Périmètre : l'Empire ottoman de 1281 à 1923 est documenté jour par jour. Le reste du monde est ajouté progressivement ; pour certaines régions et périodes, les frontières sont approximatives ou absentes.",
      p3: "Si vous constatez une erreur ou une lacune, merci de la signaler :",
      bildir: "Signaler un problème", kapat: "Fermer", atla: "Aller à la carte",
      yapimBaslik: "🚧 En construction",
      yapimMetin: "KRONOATLAS est encore en construction. Nous travaillons sur la carte, la chronologie et le forum ; certaines parties peuvent être incomplètes ou comporter des erreurs. Merci de votre compréhension.",
      tamam: "OK", iletisim: "✉ Contact", iletisimIpucu: "Écrivez-nous", iletisimSatir: "Contact :" },
    ru: { alt: "Интерактивный исторический атлас",
      acik: "Интерактивный исторический атлас: границы государств меняются со временем, рядом идут хронология и правитель эпохи. Османская империя (1281–1923) охвачена с точностью до дня; остальной мир добавляется поэтапно. Бета-версия.",
      beta: "Бета", hakkinda: "KRONOATLAS · Бета-версия",
      p1: "KRONOATLAS находится в бета-версии; возможны пробелы и ошибки.",
      p2: "Охват: Османская империя с 1281 по 1923 год представлена с точностью до дня. Остальной мир добавляется поэтапно; в некоторых регионах и периодах границы приблизительны или отсутствуют.",
      p3: "Если вы заметили ошибку или пробел, пожалуйста, сообщите:",
      bildir: "Сообщить об ошибке", kapat: "Закрыть", atla: "Перейти к карте",
      yapimBaslik: "🚧 Сайт в разработке",
      yapimMetin: "KRONOATLAS всё ещё находится в разработке. Мы продолжаем работать над картой, хронологией и форумом; некоторые разделы могут быть неполными или содержать ошибки. Спасибо за понимание.",
      tamam: "ОК", iletisim: "✉ Контакты", iletisimIpucu: "Напишите нам", iletisimSatir: "Контакты:" },
    pt: { alt: "Atlas histórico interativo",
      acik: "Um atlas histórico interativo em que as fronteiras dos Estados mudam com o passar do tempo, acompanhadas da cronologia e do governante da época. O Império Otomano (1281–1923) é coberto dia a dia; o resto do mundo está sendo ampliado por etapas. Versão beta.",
      beta: "Beta", hakkinda: "KRONOATLAS · Versão beta",
      p1: "O KRONOATLAS está em beta; pode haver lacunas e erros.",
      p2: "Escopo: o Império Otomano de 1281 a 1923 é coberto dia a dia. O resto do mundo está sendo adicionado por etapas; em algumas regiões e períodos as fronteiras são aproximadas ou estão em branco.",
      p3: "Se notar um erro ou uma lacuna, por favor informe:",
      bildir: "Relatar um problema", kapat: "Fechar", atla: "Ir para o mapa",
      yapimBaslik: "🚧 Em construção",
      yapimMetin: "O KRONOATLAS ainda está em construção. Continuamos trabalhando no mapa, na cronologia e no fórum; algumas partes podem estar incompletas ou conter erros. Obrigado pela compreensão.",
      tamam: "OK", iletisim: "✉ Contato", iletisimIpucu: "Escreva para nós", iletisimSatir: "Contato:" },
    de: { alt: "Interaktiver Geschichtsatlas",
      acik: "Ein interaktiver Geschichtsatlas, in dem sich Staatsgrenzen mit der Zeit verändern, begleitet von Chronologie und Herrscher der jeweiligen Epoche. Das Osmanische Reich (1281–1923) ist tagesgenau erfasst; der Rest der Welt wird schrittweise ergänzt. Beta-Version.",
      beta: "Beta", hakkinda: "KRONOATLAS · Beta-Version",
      p1: "KRONOATLAS befindet sich in der Beta-Phase; Lücken und Fehler sind möglich.",
      p2: "Umfang: Das Osmanische Reich von 1281 bis 1923 ist tagesgenau erfasst. Der Rest der Welt wird schrittweise ergänzt; in manchen Regionen und Zeiträumen sind Grenzen ungefähr oder leer.",
      p3: "Wenn Sie einen Fehler oder eine Lücke bemerken, melden Sie ihn bitte:",
      bildir: "Problem melden", kapat: "Schließen", atla: "Zur Karte springen",
      yapimBaslik: "🚧 Im Aufbau",
      yapimMetin: "KRONOATLAS befindet sich noch im Aufbau. Wir arbeiten weiter an Karte, Chronologie und Forum; einige Teile können unvollständig oder fehlerhaft sein. Vielen Dank für Ihr Verständnis.",
      tamam: "OK", iletisim: "✉ Kontakt", iletisimIpucu: "Schreiben Sie uns", iletisimSatir: "Kontakt:" }
  };
  var T = M[dil] || M.tr;
  window.MARKA = { ad: AD, dil: M[dil] ? dil : "tr", metin: T, tum: M };

  var baslik = AD + " — " + T.alt;
  try { document.title = baslik; } catch (e) { /* başlık yazılamadı */ }
  window.MARKA_BASLIK = baslik;

  // <meta> etiketleri HTML'de Türkçe duruyor; DOM kurulunca dile göre güncelle.
  function metaYaz() {
    var yaz = function (sel, deger) {
      var e = document.querySelector(sel);
      if (e) e.setAttribute("content", deger);
    };
    yaz('meta[name="description"]', T.acik);
    yaz('meta[property="og:title"]', baslik);
    yaz('meta[property="og:description"]', T.acik);
    yaz('meta[name="twitter:title"]', baslik);
    yaz('meta[name="twitter:description"]', T.acik);
    var og = document.querySelector('meta[property="og:locale"]');
    if (og) og.setAttribute("content", { tr: "tr_TR", en: "en_US", ar: "ar_AR", es: "es_ES", fr: "fr_FR", ru: "ru_RU", pt: "pt_BR", de: "de_DE" }[window.MARKA.dil]);
  }

  // ③ BETA düğmesi + Hakkında penceresi (DOM kurulunca)
  function kur() {
    metaYaz();
    var atla = document.getElementById("atla-baglanti");
    if (atla) atla.textContent = T.atla;
    var h1 = document.getElementById("marka-h1");
    if (h1) h1.textContent = baslik;

    var menu = document.getElementById("btn-menu");
    if (!menu || document.getElementById("btn-beta")) return;
    var b = document.createElement("button");
    b.id = "btn-beta"; b.type = "button"; b.className = "beta-ibare";
    b.textContent = T.beta.toUpperCase();
    b.title = T.hakkinda;
    // 22 Kasım 2026 (Emre, telefon): BETA üst çubukta durmasın; ☰ Butonlar penceresine girer
    // (Hakkında penceresi oradan açılmaya devam eder). Masaüstünde yeri aynı.
    var _menuKutu = document.getElementById("menu-butonlar");
    var _dokunmatik = false;
    _dokunmatik = !!window.ATLAS_TELEFON;   // görünüm ayarı (index.html başı)
    if (_dokunmatik && _menuKutu) _menuKutu.appendChild(b);
    else menu.parentNode.insertBefore(b, menu.nextSibling);

    var pen = document.createElement("div");
    pen.id = "hakkinda-pencere"; pen.className = "gizli";
    pen.setAttribute("role", "dialog"); pen.setAttribute("aria-modal", "true");
    pen.setAttribute("aria-labelledby", "hakkinda-baslik");
    var kart = document.createElement("div"); kart.className = "hakkinda-kart";
    var bs = document.createElement("h2"); bs.id = "hakkinda-baslik"; bs.textContent = T.hakkinda;
    var a1 = document.createElement("p"); a1.textContent = T.p1;
    var a2 = document.createElement("p"); a2.textContent = T.p2;
    var a3 = document.createElement("p"); a3.textContent = T.p3 + " ";
    var ln = document.createElement("a");
    ln.href = "https://github.com/Emrelic/osmanli-tarih-atlasi/issues/new";
    ln.target = "_blank"; ln.rel = "noopener noreferrer"; ln.textContent = T.bildir;
    a3.appendChild(ln);
    var a4 = document.createElement("p"); a4.textContent = T.iletisimSatir + " ";
    var ml = document.createElement("a"); ml.href = "mailto:" + EPOSTA; ml.textContent = EPOSTA;
    a4.appendChild(ml);
    var kp = document.createElement("button"); kp.type = "button"; kp.textContent = T.kapat;
    kart.appendChild(bs); kart.appendChild(a1); kart.appendChild(a2); kart.appendChild(a3); kart.appendChild(a4); kart.appendChild(kp);
    pen.appendChild(kart); document.body.appendChild(pen);

    function ac() { pen.classList.remove("gizli"); try { kp.focus(); } catch (e) { /* odak */ } }
    function kapa() { pen.classList.add("gizli"); try { b.focus(); } catch (e) { /* odak */ } }
    b.addEventListener("click", ac);
    kp.addEventListener("click", kapa);
    pen.addEventListener("click", function (ev) { if (ev.target === pen) kapa(); });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && !pen.classList.contains("gizli")) kapa();
    });

    // ⑤ İLETİŞİM düğmesi (Emre, 18 Kasım 2026: "forum ve iletişim herkese açık olsun").
    //    ☰ Butonlar menüsünde Forum'un hemen ardına; tıklayınca e-posta programı açılır.
    var forumBtn = document.getElementById("btn-forum");
    if (forumBtn && !document.getElementById("btn-iletisim")) {
      var ib = document.createElement("button");
      ib.id = "btn-iletisim"; ib.type = "button";
      ib.textContent = T.iletisim;
      ib.title = T.iletisimIpucu + ": " + EPOSTA;
      ib.addEventListener("click", function () { location.href = "mailto:" + EPOSTA; });
      forumBtn.parentNode.insertBefore(ib, forumBtn.nextSibling);
    }

    yapimKur();
  }

  // ⑥ YAPIM AŞAMASINDADIR penceresi (Emre, 18 Kasım 2026: "tüm işler bittikten sonra
  //    açarız · Tamam butonu ile ortadan kalkar"). Her tarayıcı oturumunda bir kez
  //    çıkar (sessionStorage); geliştirici kipinde çıkmaz. KALDIRMA: YAPIM_ACIK = false.
  var YAPIM_ACIK = true;
  function yapimKur() {
    if (!YAPIM_ACIK || GELISTIRICI || document.getElementById("yapim-pencere")) return;
    try { if (sessionStorage.getItem("yapimGoruldu") === "1") return; } catch (e) { /* özel pencere: göster */ }
    var pen = document.createElement("div");
    pen.id = "yapim-pencere";
    pen.setAttribute("role", "dialog"); pen.setAttribute("aria-modal", "true");
    pen.setAttribute("aria-labelledby", "yapim-baslik");
    var kart = document.createElement("div"); kart.className = "hakkinda-kart";
    var bs = document.createElement("h2"); bs.id = "yapim-baslik"; bs.textContent = T.yapimBaslik;
    var p1 = document.createElement("p"); p1.textContent = T.yapimMetin;
    var p2 = document.createElement("p"); p2.textContent = T.iletisimSatir + " ";
    var ml = document.createElement("a"); ml.href = "mailto:" + EPOSTA; ml.textContent = EPOSTA;
    p2.appendChild(ml);
    var tm = document.createElement("button"); tm.type = "button"; tm.textContent = T.tamam;
    kart.appendChild(bs); kart.appendChild(p1); kart.appendChild(p2); kart.appendChild(tm);
    pen.appendChild(kart); document.body.appendChild(pen);
    function kapa() {
      try { sessionStorage.setItem("yapimGoruldu", "1"); } catch (e) { /* özel pencere */ }
      if (pen.parentNode) pen.parentNode.removeChild(pen);
      document.removeEventListener("keydown", tus);
    }
    function tus(ev) { if (ev.key === "Escape" || ev.key === "Enter") kapa(); }
    tm.addEventListener("click", kapa);
    document.addEventListener("keydown", tus);
    try { tm.focus(); } catch (e) { /* odak */ }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kur);
  else kur();

  // ④ SERVİS İŞÇİSİ (P1): sürümlü dosyaları ömür boyu önbellekler — sw.js başlığı.
  //    İlk boyamayı geciktirmesin diye `load`dan sonra kaydolur. `?sw=0` kapatır.
  try {
    if ("serviceWorker" in navigator && !/[?&]sw=0/.test(ARAMA) &&
        (location.protocol === "https:" || location.hostname === "localhost")) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("sw.js").catch(function () { /* kayıt başarısız: site yine çalışır */ });
      });
    }
  } catch (e) { /* eski tarayıcı */ }
})();
