# -*- coding: utf-8 -*-
"""ARAYÜZ DENETİMİ — `index.html` ile `js/app.js` arasındaki sessiz kopukluklar.

🔴 NİÇİN DOĞDU — 22 Ağustos 2026, üç ölçülmüş vaka:

  ① ÖLÜ DENETİM. Emre sordu: *"bu ayarın ne işe yaradığını anlayamadım."*
     Ölçüldü, cevap: HİÇBİR ŞEY. `ayar-yakinlik` sürgüsü değerini
     `localStorage`a yazıyor, etiketini güncelliyordu — ama **hiçbir kod
     onu OKUMUYORDU.** Kullanıcı, işe yaramayan bir denetimi ayarlamaya
     çalışarak vakit kaybetti.
     📌 `CLAUDE.md §11` "yazılmış görünüyor" sınıfı: kullanılmayan bir
     denetimi ekranda tutmak, onu ANLAMLI sanmaya davettir.

  ② KIRIK HTML YORUMU. Bir yorumun İÇİNDE kapanış dizisi geçti; tarayıcı
     orayı yorumun sonu sanıp kapattı ve geri kalan açıklama AYARLAR
     PENCERESİNE düz metin olarak sızdı. Emre ekran görüntüsüyle gösterdi.

  ③ MÜKERRER id. `ayar-kenarpay` bir ara İKİ ayrı sürgüde kullanılmıştı;
     `getElementById` hep BİRİNCİYİ döndürdüğü için ikinci sürgü hiç
     okunmuyordu (`index.html:383`te kayıtlı).

## ⚠️ VE BU ARACIN İLK SÜRÜMÜ YANLIŞ ALARM VERDİ — kayıt olsun diye
İlk yazımda `app.js`ten yorumları regex'le ayıklayıp `id in metin` diye
bakmıştım. Blok-yorum ayıklama deseni dosyanın büyük bir bölümünü yuttu ve
ÜÇ CANLI denetimi "ölü" ilan etti (`devlet-secici-buton` · `ek-dunya-esik` ·
`ek-yalniz-dis` — üçü de `getElementById` ile okunuyordu).
⇒ Yorum AYIKLAMAK yerine **TÜKETİM DESENİ** aranıyor: bir id ancak
`getElementById("...")` / `querySelector("#...")` içinde geçiyorsa OKUNMUŞ
sayılır. Bu, yorumdaki bir anmayı tüketim sanmaz.
📌 *Kurt masalı anlatan denetim, denetim değildir* — bugün ölçüldü:
`denetle_yayin.py` 26 sahte alarm veriyordu ve aralarındaki 5 GERÇEK
bulgu okunmuyordu.

    py arac/denetle_arayuz.py
Çıkış kodu: ihlal varsa 1, temizse 0.
"""
import io
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HTML = os.path.join(KOK, "index.html")
APP = os.path.join(KOK, "js", "app.js")

# Kasıtlı istisnalar — GEREKÇESİYLE. Boş liste beklenmiyor.
OLU_MUAF = {
    "ayarlar-kapat": "modal kapatma — `pencere` üzerinden dinleniyor olabilir",
}


def _tuketim_kumesi(kaynak):
    """Bir id'nin GERÇEKTEN okunduğu desenler.

    🔴 İKİNCİ YANLIŞ ALARM — ilk sürüm yalnız `getElementById`/`querySelector`
    arıyordu ve `ayar-kirpma-toplam-ms` ile `ayar-kirpma-adet`i "ölü" ilan
    etti. İkisi de CANLIYDI: bu projede ayarlar `_ayar("...")` /
    `_ayarMetin("...")` YARDIMCILARIYLA okunuyor ve `getElementById` çağrısı
    yardımcının İÇİNDE.
    ⇒ Yardımcı adlarını elle listelemek de bayatlar (yarın üçüncü bir
    yardımcı yazılır). O yüzden ölçüt GENİŞLETİLDİ: id, HERHANGİ bir
    fonksiyon çağrısında DİZE OLARAK geçiyorsa tüketilmiş sayılıyor.
    ⚠️ Bu, fazladan tüketim sayabilir (yanlış NEGATİF) ama yanlış POZİTİF
    vermez — ve iki hata yönü EŞİT DEĞİL: yanlış pozitif aracı çöpe atar,
    yanlış negatif yalnız bir kusuru kaçırır. Kurt masalı anlatmaktansa
    sessiz kalmak yeğdir.
    """
    k = set()
    for m in re.finditer(r'getElementById\(\s*["\']([^"\']+)["\']', kaynak):
        k.add(m.group(1))
    for m in re.finditer(r'querySelector(?:All)?\(\s*["\']#([A-Za-z0-9_-]+)', kaynak):
        k.add(m.group(1))
    # HERHANGİ bir çağrının dize argümanı: `_ayar("ayar-kirpma-adet", 2)`
    for m in re.finditer(r'\(\s*["\']([a-z][a-z0-9]*(?:-[a-z0-9]+)+)["\']', kaynak):
        k.add(m.group(1))
    return k


def _yorumsuz_html(s):
    """HTML yorumlarını VE `<script>` gövdelerini siler.

    🔴 BİRİNCİ YANLIŞ ALARM — ilk sürüm yalnız HTML yorumlarını siliyordu ve
    `<script>` içindeki JS yorumlarını "sızan metin" sandı: dokuz satır,
    hepsi sahte. Gömülü betik HTML değildir; oradaki metnin ekrana sızma
    ihtimali YOKTUR.
    """
    ACILIS, KAPANIS = "<!" + "--", "--" + ">"
    s = re.sub(r"<script\b[^>]*>.*?</script>", "", s, flags=re.S | re.I)
    return re.sub(re.escape(ACILIS) + r".*?" + re.escape(KAPANIS), "",
                  s, flags=re.S)


def _dinamik_onekler(kaynak):
    """`["ayar-genislik-km", "ayarGenislikKm"]` gibi ELLE listelerden ve
    `[id^="..."]` seçicilerinden gelen adlar."""
    k = set()
    for m in re.finditer(r'\[\s*["\']([a-z][a-z0-9-]{3,})["\']\s*,', kaynak):
        k.add(m.group(1))
    for m in re.finditer(r'\[id\^?\*?=["\']([a-z-]+)["\']', kaynak):
        k.add("ÖNEK:" + m.group(1))
    return k


def _yetim_kapanis(html):
    """Yorum DIŞINDA kalan metinde yorum kapanışı (`-->` ya da `--!>`) var mı?

    🔴 6 Ekim 2026 (UMIT-W47) — 22 Ağustos sızıntısının ASIL sorusu.
    O gün bir yorumun içine kapanış dizisi düz metin olarak yazılmıştı:
    tarayıcı yorumu orada kapattı, kalan açıklama Ayarlar penceresine sızdı.
    Yazarın asıl kapanışı ise metinde YETİM kaldı. Geçerli HTML'de yorum
    dışındaki metinde çıplak kapanış dizisi yazmanın meşru bir yolu yok
    (kasıtlıysa `&gt;` yazılır). Bu yüzden ölçüt kesindir ve terk edilen
    "sızan metin mi, kasıtlı metin mi" belirsizliğine düşmez.

    Yorum sonu WHATWG ayrıştırıcısı gibi bulunur:
      `<!-->` ve `<!--->` → yorum HEMEN kapanır (abrupt closing)
      öteki hâller       → ilk `-->` YA DA `--!>`, hangisi önce gelirse
    Etiket içi (tırnaklı öznitelik değerleri dahil) ve script/style/
    textarea/title gövdeleri metin sayılmaz. Kapanmamış yorum ①a'nın işi.
    Döner: ([(satır, kesit)], ani_kapanan_yorum_sayısı)
    """
    ACILIS = "<!" + "--"
    HAM = re.compile(r"<(script|style|textarea|title)\b", re.I)
    yetim, ani, i, n = [], 0, 0, len(html)
    while i < n:
        lt = html.find("<", i)
        metin = html[i:] if lt < 0 else html[i:lt]
        for m in re.finditer(r"--!?>", metin):
            p = i + m.start()
            yetim.append((html[:p].count("\n") + 1,
                          " ".join(html[max(0, p - 60):p + 4].split())))
        if lt < 0:
            break
        if html.startswith(ACILIS, lt):
            g = lt + len(ACILIS)
            if html.startswith(">", g):
                ani, i = ani + 1, g + 1
                continue
            if html.startswith("->", g):
                ani, i = ani + 1, g + 2
                continue
            k1, k2 = html.find("-" + "->", g), html.find("--!>", g)
            ks = [k for k in (k1, k2) if k >= 0]
            if not ks:
                break
            k = min(ks)
            i = k + (3 if k == k1 else 4)
            continue
        if not re.match(r"[A-Za-z/!?]", html[lt + 1:lt + 2]):
            i = lt + 1          # `a < b` gibi: etiket değil, metin sürüyor
            continue
        h = HAM.match(html, lt)
        # etiketi tırnaklara saygıyla geç
        j, tirnak = lt + 1, None
        while j < n:
            c = html[j]
            if tirnak:
                if c == tirnak:
                    tirnak = None
            elif c in "\"'":
                tirnak = c
            elif c == ">":
                break
            j += 1
        i = j + 1
        if h:
            son = re.compile(r"</" + h.group(1) + r"\s*>", re.I).search(html, i)
            i = son.end() if son else n
    return yetim, ani


def main():
    html = io.open(HTML, encoding="utf-8").read()
    app = io.open(APP, encoding="utf-8").read()
    ihlal = 0

    # ── ① KIRIK / SIZAN YORUM ───────────────────────────────────────────
    # Yorumların dışında kalan metinde açıklama cümlesi varsa, bir yorum
    # erken kapanmış demektir.
    # 🔴 ÜÇÜNCÜ YANLIŞ ALARM — ve bu aracın SINIRINI gösterdi.
    # İlk ölçüt "sızan metin" arıyordu: yorumların dışında kalan, cümle gibi
    # duran satırlar. `<p class="ayar-not">` içindeki KASITLI açıklama metnini
    # sızıntı sandı.
    # ⇒ *"Sızan metin"* ile *"kasıtlı metin"* statik olarak AYIRT EDİLEMEZ —
    #   ikisi de aynı şey: etiketsiz Türkçe cümle. Bu soruyu sormaktan
    #   vazgeçiliyor.
    # 🟢 Ama ASIL KUSUR ayırt edilebilir: yorum gövdesinde `--` dizisi.
    #   HTML spec'i bunu zaten yasaklıyor, ve benim hatamın TAM KAYNAĞI buydu
    #   (metnin içine kapanış dizisini yazdım, tarayıcı orada kapattı).
    #   Bu ölçüt KESİN: yanlış pozitif vermez, ve kusuru DOĞMADAN yakalar.
    ACILIS, KAPANIS = "<!" + "--", "--" + ">"
    kirik, i = [], 0
    while True:
        a = html.find(ACILIS, i)
        if a < 0:
            break
        k = html.find(KAPANIS, a)
        if k < 0:
            kirik.append((html[:a].count("\n") + 1, "KAPANMAMIŞ YORUM"))
            break
        govde = html[a + len(ACILIS):k]
        if "--" in govde:
            kesit = govde[max(0, govde.find("--") - 30):govde.find("--") + 20]
            kirik.append((html[:a].count("\n") + 1,
                          "gövdede `--` var (spec ihlali; tek başına SIZDIRMAZ): …"
                          + " ".join(kesit.split())))
        i = k + len(KAPANIS)
    # 🔴 6 Ekim 2026 (UMIT-W47): bu dal UYGUNLUK sorar, SIZINTI sormaz.
    #   Gövdeyi ilk kapanışta kestiği için erken kapatan dizinin KENDİSİ
    #   gövdeye girmez, kapanıştan sonra sızan metin de taranmaz. 22 Ağustos
    #   kusurunu (`5603267d^`) yalnız örnek yorumdaki AÇILIŞ dizisi `--`
    #   içerdiği için yakaladı; açılışsız tek kapanışlı yazımda KÖRDÜ.
    #   Sızıntıyı ①b sorar.
    print("①a yorum uygunluğu     : %s"
          % ("✓ temiz" if not kirik else "🔴 %d UYGUNSUZ YORUM" % len(kirik)))
    for no, t in kirik[:8]:
        print("     satır %-5d %s" % (no, t[:96]))
    ihlal += len(kirik)

    # ── ①b YORUM SIZINTISI — yorum dışı metinde YETİM kapanış ──────────
    yetim, ani = _yetim_kapanis(html)
    print("①b yorum sızıntısı     : %s"
          % ("✓ yetim kapanış yok" if not yetim
             else "🔴 %d YETİM KAPANIŞ — yorum erken kapandı, metin SAYFAYA SIZDI"
             % len(yetim)))
    for no, t in yetim[:8]:
        print("     satır %-5d …%s" % (no, t[:90]))
    print("     kapsam: yorum dışı metin + öznitelik dışı · script/style/"
          "textarea/title gövdesi HARİÇ · ani kapanan yorum %d" % ani)
    ihlal += len(yetim)

    # ── ② MÜKERRER id ───────────────────────────────────────────────────
    idler = re.findall(r'\bid="([^"]+)"', re.sub(re.escape(ACILIS) + r".*?"
                                                 + re.escape(KAPANIS), "",
                                                 html, flags=re.S))
    muk = {}
    for i in idler:
        muk[i] = muk.get(i, 0) + 1
    cift = {i: n for i, n in muk.items() if n > 1}
    print("② mükerrer id          : %s"
          % ("✓ yok" if not cift else "🔴 " + " · ".join(
              "%s×%d" % (i, n) for i, n in cift.items())))
    ihlal += len(cift)

    # ── ③ ÖLÜ DENETİM ───────────────────────────────────────────────────
    tuketilen = _tuketim_kumesi(app) | _tuketim_kumesi(html)
    dinamik = _dinamik_onekler(app)
    onekler = [d[5:] for d in dinamik if d.startswith("ÖNEK:")]
    denetimler = re.findall(
        r'<(?:input|select|textarea)[^>]*\bid="([^"]+)"',
        re.sub(re.escape(ACILIS) + r".*?" + re.escape(KAPANIS), "",
               html, flags=re.S))
    olu = []
    for i in denetimler:
        if i in tuketilen or i in dinamik or i in OLU_MUAF:
            continue
        if any(i.startswith(o) for o in onekler):
            continue
        olu.append(i)
    print("③ ölü denetim          : %d denetim tarandı · %s"
          % (len(denetimler),
             "✓ ölü yok" if not olu else "🔴 %d ÖLÜ" % len(olu)))
    for i in olu:
        print("     🔴 %-28s index.html'de VAR, hiçbir kod OKUMUYOR" % i)
    ihlal += len(olu)

    print("-" * 68)
    print("SONUÇ: %s" % ("temiz" if not ihlal else "%d İHLAL" % ihlal))
    return 1 if ihlal else 0


if __name__ == "__main__":
    sys.exit(main())
