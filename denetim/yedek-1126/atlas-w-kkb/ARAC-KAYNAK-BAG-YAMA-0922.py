# -*- coding: utf-8 -*-
"""`kaynak:` alanı TDV slug'ı DEĞİLSE bağlantı kurulmasın — yama.

KUSUR (ölçümü `denetim/ARAC-KAYNAK-BAG-0922.py`): 1723 maddenin **433'ü**
(%25,1) ekranda "📖 TDV İslâm Ansiklopedisi" bağlantısı basıyor ama
`kaynak` alanı TDV slug'ı değil — akademik künye, çok kaynaklı cümle ya da
düpedüz `bulunamadı`. Bağlantı kırık gitmekle kalmıyor, **kaynağı TDV'ye
atfediyor**: kaynağı bulunamamış bir madde ekranda TDV kaynaklı görünüyor.

ÇARE: `kaynak` yalnız `/^[a-z0-9-]+$/` ise bağlantı + TDV etiketi; değilse
DÜZ METİN, bağlantısız, "📖 Kaynak:" önekiyle. Veri hiç değişmiyor —
değişen yalnız ekranın onu nasıl etiketlediği.

🔴 NİÇİN AYRI BETİK, ELLE DÜZENLEME DEĞİL: `js/app.js`te şu an İKİ
   oturumun commitlenmemiş düzenlemesi duruyor (SEFER-OK-0075 ve
   DALGA-0074). Elle dokunmak onların yarım işini de yayına taşıma riski
   taşıyor. Bu betik YALNIZ iki bloğu, tam metin eşleşmesiyle değiştirir;
   metin birebir tutmazsa hiçbir şey yazmadan durur.

Koşu:  py denetim/ARAC-KAYNAK-BAG-YAMA-0922.py          (kuru — gösterir)
       py denetim/ARAC-KAYNAK-BAG-YAMA-0922.py --yaz    (uygular)
"""
import io
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "js", "app.js")

# ── ① detay penceresi (bugün ~7127) ─────────────────────────────────────
ESKI1 = """  if (o.kaynak) {
    kaynakEl.href = "https://islamansiklopedisi.org.tr/" + o.kaynak;
    kaynakEl.textContent = "📖 Kaynak: TDV İslâm Ansiklopedisi";
    kaynakEl.style.display = "";
  } else { kaynakEl.style.display = "none"; }"""

YENI1 = """  // 🔴 22 Eylül 2026 — TDV ETİKETİ YALNIZ TDV SLUG'INA. Ölçüldü
  // (denetim/ARAC-KAYNAK-BAG-0922.py): 1723 maddenin 433'ünde (%25,1)
  // `kaynak` bir slug DEĞİL — akademik künye, çok kaynaklı cümle ya da
  // "bulunamadı". Eski kod hepsini adresin sonuna ekliyor ve altına
  // "TDV İslâm Ansiklopedisi" yazıyordu; yani kaynağı BULUNAMAMIŞ bir
  // madde ekranda TDV kaynaklı görünüyordu. Veri doğruydu (CLAUDE.md §4
  // TDV dışı kaynağın açıkça yazılmasını söyler), yanlış olan etiketti.
  if (o.kaynak) {
    if (/^[a-z0-9-]+$/.test(o.kaynak)) {
      kaynakEl.href = "https://islamansiklopedisi.org.tr/" + o.kaynak;
      kaynakEl.textContent = "📖 Kaynak: TDV İslâm Ansiklopedisi";
      kaynakEl.removeAttribute("data-bagsiz");
    } else {
      kaynakEl.removeAttribute("href");
      kaynakEl.textContent = "📖 Kaynak: " + o.kaynak;
      kaynakEl.setAttribute("data-bagsiz", "1");
    }
    kaynakEl.style.display = "";
  } else { kaynakEl.style.display = "none"; }"""

# ── ② olay balonu / ob-kaynak (bugün ~9375) ─────────────────────────────
ESKI2 = """  if (o.kaynak) {
    var a = document.createElement("a");
    a.className = "ob-kaynak";
    a.href = "https://islamansiklopedisi.org.tr/" + o.kaynak;
    a.target = "_blank"; a.rel = "noopener";
    a.textContent = "📖 TDV İslâm Ansiklopedisi";
    ozel.appendChild(a);
  }"""

YENI2 = """  if (o.kaynak) {
    // Aynı kural (bkz. detay penceresindeki not): slug değilse BAĞLANTI
    // KURULMAZ, kaynak düz metin olarak yazılır. Etiket de değişir —
    // "TDV İslâm Ansiklopedisi" yalnız gerçekten TDV olan kayda ait.
    var slug = /^[a-z0-9-]+$/.test(o.kaynak);
    var a = document.createElement(slug ? "a" : "span");
    a.className = "ob-kaynak";
    if (slug) {
      a.href = "https://islamansiklopedisi.org.tr/" + o.kaynak;
      a.target = "_blank"; a.rel = "noopener";
      a.textContent = "📖 TDV İslâm Ansiklopedisi";
    } else {
      a.textContent = "📖 Kaynak: " + o.kaynak;
      a.setAttribute("data-bagsiz", "1");
    }
    ozel.appendChild(a);
  }"""


def main():
    yaz = "--yaz" in sys.argv
    m = io.open(YOL, encoding="utf-8").read()
    once = len(m)
    rapor = []
    for ad, eski, yeni in (("① detay penceresi", ESKI1, YENI1),
                           ("② olay balonu", ESKI2, YENI2)):
        n = m.count(eski)
        if n == 1:
            m = m.replace(eski, yeni, 1)
            rapor.append((ad, "hazır", 1))
        elif n == 0 and yeni.split("\n")[0].strip() in m:
            rapor.append((ad, "ZATEN UYGULANMIŞ", 0))
        else:
            rapor.append((ad, f"🔴 {n} eşleşme (1 bekleniyordu)", n))

    for ad, hal, _ in rapor:
        print(f"  {ad:<22} {hal}")
    kotu = [r for r in rapor if r[1].startswith("🔴")]
    if kotu:
        print("\n🔴 DOSYA YAZILMADI — metin birebir tutmadı. `js/app.js`"
              " başka bir oturum tarafından değiştirilmiş olabilir;"
              " bloğu elle karşılaştır.")
        return 1
    if not yaz:
        print(f"\nkuru koşu — uygulamak için --yaz  ({once:,} bayt)")
        return 0
    io.open(YOL, "w", encoding="utf-8", newline="").write(m)
    print(f"\nYAZILDI  {once:,} → {len(m):,} bayt")
    print("⇒ ŞİMDİ: tarayıcıda bir kaynaksız maddeye bak (ör. Campo Formio,"
          " kaynak='bulunamadı') — bağlantı OLMAMALI, '📖 Kaynak: bulunamadı'"
          " yazmalı. Hazırlık kapısı `harita.getLayer(...)`, isStyleLoaded"
          " DEĞİL.")
    print("⚠️ COMMIT'TE HUNK AYRIMI ŞART: js/app.js'te SEFER-OK-0075 ve"
          " DALGA-0074'ün commitlenmemiş düzenlemeleri de var.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
