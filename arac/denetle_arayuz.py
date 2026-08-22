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
                          "gövdede `--` var → yorum ERKEN KAPANIR: …"
                          + " ".join(kesit.split())))
        i = k + len(KAPANIS)
    print("① yorum bütünlüğü      : %s"
          % ("✓ temiz" if not kirik else "🔴 %d KIRIK YORUM" % len(kirik)))
    for no, t in kirik[:8]:
        print("     satır %-5d %s" % (no, t[:96]))
    ihlal += len(kirik)

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
