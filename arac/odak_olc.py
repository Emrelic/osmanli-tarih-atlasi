# -*- coding: utf-8 -*-
"""odak_olc.py — KRONOLOJİ MADDESİNİN KAMERA ODAĞI VAR MI? Dosya dosya ölçer.

🔴 NİÇİN DOĞDU — 27 Eylül 2026, Emre:
*"tüm dünyadaki kronoloji maddelerinin harita odağını ayarlayalım, konunun
içeriğine göre odak noktalarını kronoloji maddesine ayarlayalım."*
İş dağıtmadan önce ölçüm gerekti ve ÖLÇEN ALET YOKTU: `denetle_kronoloji.py`
⑤ yalnız *"`yer_id` doluysa gerçek bir yerleşime eşleşiyor mu"* diye sorar —
yani YAZILMIŞ bir alanı doğrular, YAZILMAMIŞ odağı saymaz. Boş küme her
öngörüyü doğrular (`CLAUDE.md §11`).

## ODAK NEDİR — app.js'in KENDİ sırası (uydurma değil, koddan okundu)

`js/app.js` iki katman okur ve sıra ŞUDUR:

    ① olayKonumu(o)        NOKTA  → flyTo
         yer_kon [lat,lon]        savaş meydanı vb. (birebir koordinat)
         yer_id "<ad>"            `sehirler` içinde BİREBİR ad ya da " (" öncesi
    ② maddeOdakKutusu(o)   KUTU   → fitBounds
         odak_kutu_kaynak         HUKUKI_SINIRLAR kaydının kapsama.odak_kutu
         odak_yer ["<ad>", …]     kameranın bakacağı yer(ler) + 0,35° pay
         odak_kimlik ["id", …]    madde GÜNÜNDE o kimliklerin yerleşim kutusu
    ③ hiçbiri yoksa
         kapsam_genis:true        BEYAN — imparatorluk görünümü meşru
         beyan da yoksa           🔴 ODAKSIZ: kamera YERİNDE KALIR

🔴 `yer_id` ≠ `odak_yer` ve bu ayrım kuralın KENDİSİdir (app.js:11697):
`yer_id` *"olay BURADA oldu"* der ve KARTA da öyle yazılır; `odak_yer`
yalnız *"kamera buraya bakacak"* der. 1827 tımar tasfiyesine
`yer_id:"İstanbul"` yazmak kameraya yarar ama VERİYE YALAN yazar.
⇒ Bu alet ikisini AYRI sayar ve `yer_id`yi odak dolgusu olarak ÖNERMEZ.

## ODAKSIZ ≠ KUSURLU — dört sınıf, çareleri ayrı

    KONUMLU     noktası var, kamera oraya gidiyor          → iş yok
    KUTULU      kutusu var (odak_*)                        → iş yok
    BEYANLI     kapsam_genis:true — imparatorluk kutusu     → ⚠️ AŞAĞIYA BAK
    🔴 ODAKSIZ  hiçbiri yok — kamera KIPIRDAMIYOR          → İŞ BURADA

## 🔴 BEYANLI'NIN TUZAĞI — ölçüldü 27 Eylül 2026, ve odaksızlıktan KÖTÜ

`app.js:11835`:

    var _odakB = _odakKG ? _odakKG.kutu : ((di >= 0 && donemler[di].b) ? donemler[di].b : null);

`kapsam_genis:true` + odak yok ⇒ kamera **`donemler[di].b`**ye gider. Ve o
kutu O GÜNÜN **OSMANLI SINIRIDIR** — ölçüldü, ilk dönem `[29.32,39.58,30.54,
40.22]`, yani Söğüt çevresi.
⇒ `kronoloji_japonya.js`te `kapsam_genis:true` yazmak *"kamerayı Osmanlı'ya
gönder"* demektir. 1300'deki bir Balkan maddesinde ise kamera **Söğüt'ü**
çerçeveler.

🔴 Bu ODAKSIZLIKTAN KÖTÜDÜR ve sebebi tek cümle: odaksız maddede kamera DURUR
ve panel *"nokta yeri işaretlenmemiş"* der — kullanıcı eksikliği OKUR. Burada
hiçbir sinyal yoktur; yanlış yer KENDİNDEN EMİN biçimde gösterilir.
(`dersler/D205` ailesi: *eksikliği bir hükümmüş gibi çizmek.*)

⚠️ **BU ALETİN "meşru mu" SÜTUNU KABA BİR SINAVDIR** — dosya adı `olaylar`
ile başlıyorsa Osmanlı çekirdeği sayar, başlamıyorsa yabancı sayar. Gerçek
hüküm MADDE BAŞINADIR: `kronoloji_anadolu.js`teki 1550 tarihli bir madde için
imparatorluk kutusu meşru olabilir, `kronoloji_balkan.js`teki 1300 tarihli
bir madde için değildir. Alet SAYAR, hüküm vermez (`CLAUDE.md §11`: ölçüm
doğru, çıkarım yanlış).

Ayrıca ayrı bir kova: `yer_id` YAZILI ama `sehirler`de ÇÖZÜLMÜYOR. Bu
bir odak eksiği değil bir EŞLEŞME kusurudur (ad yazımı/nokta yokluğu) ve
çaresi de ayrıdır — nokta eklemek ya da adı düzeltmek.

KULLANIM
    py arac/odak_olc.py                 özet tablo (dosya × sınıf)
    py arac/odak_olc.py --ayrinti       ODAKSIZ maddeleri tarih+başlık ile bas
    py arac/odak_olc.py --dosya <ad>    tek dosya
    py arac/odak_olc.py --json <yol>    makine okunur döküm (şartname üretimi)
"""
import io
import json
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

AYRINTI = "--ayrinti" in sys.argv


def _arg(ad):
    if ad in sys.argv:
        i = sys.argv.index(ad)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return None


def _oku(yol):
    """node ile ayrıştır — kendi JS ayrıştırıcımı yazmıyorum.
    (`denetle_kronoloji.py:_oku` ile AYNI yol; veri bir dilde yazılıysa o
    dilin yorumlayıcısı çağrılır — bu proje dersi üç kez öğrendi.)"""
    betik = (
        "global.window={};"
        "eval(require('fs').readFileSync(process.argv[1],'utf8'));"
        "const k=Object.keys(global.window)[0];"
        "process.stdout.write(JSON.stringify({ad:k,kayit:global.window[k]||[]}));"
    )
    r = subprocess.run(["node", "-e", betik, yol],
                       capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        return None, (r.stderr or "").strip()[:200]
    return json.loads(r.stdout), None


def yer_havuzu():
    """`sehirler` evreni — app.js hangi adlara bakıyorsa O.

    ⚠️ app.js `sehirler`i `data/sehirler.js`ten DEĞİL, motorun ürettiği
    yerleşim listesinden kurar; buradaki evren `girdi.yukle()`dir — yani
    `GIRDI_DOSYALARI`nın okuduğu 92 dosya (`CLAUDE.md §5`: liste burada
    TUTULMAZ).  Çözülemezse odak ölçümü yapılamaz, ATLANMAZ — durur."""
    import girdi
    havuz = set()
    for y in girdi.yukle(sessiz=True):
        ad = y.get("ad")
        if not ad:
            continue
        havuz.add(ad)
        havuz.add(ad.split(" (")[0])        # app.js'in tek esnekliği
    return havuz


def sinifla(o, havuz):
    """Maddenin odak sınıfı + `yer_id` eşleşme durumu.

    Dönüş: (sınıf, yer_id_cozulmedi_mi)
    Sıra app.js ile BİREBİR aynıdır; değiştirilirse ölçüm yalan söyler."""
    yid = o.get("yer_id")
    yid_var = bool(yid)
    yid_cozuldu = bool(yid) and (yid in havuz)

    yk = o.get("yer_kon")
    if isinstance(yk, (list, tuple)) and len(yk) == 2:
        return "KONUMLU", False
    if yid_cozuldu:
        return "KONUMLU", False

    # ② kutu katmanı
    if o.get("odak_kutu_kaynak"):
        return "KUTULU", (yid_var and not yid_cozuldu)
    oy = o.get("odak_yer")
    if oy:
        if not isinstance(oy, list):
            oy = [oy]
        if any((a in havuz) for a in oy if isinstance(a, str)):
            return "KUTULU", (yid_var and not yid_cozuldu)
    ok = o.get("odak_kimlik")
    if isinstance(ok, list) and len(ok) >= 2:
        return "KUTULU", (yid_var and not yid_cozuldu)

    # ③ beyan
    if o.get("kapsam_genis") is True:
        return "BEYANLI", (yid_var and not yid_cozuldu)
    return "ODAKSIZ", (yid_var and not yid_cozuldu)


def main():
    dizin = os.path.join(KOK, "data")
    tek = _arg("--dosya")
    if tek:
        dosyalar = [tek]
    else:
        dosyalar = sorted(f for f in os.listdir(dizin)
                          if f.endswith(".js")
                          and (f.startswith("kronoloji_") or f.startswith("olaylar")))
    if not dosyalar:
        print("kronoloji/olaylar dosyası yok")
        return 2

    try:
        havuz = yer_havuzu()
    except Exception as e:                                  # noqa: BLE001
        print("🔴 yerleşim havuzu okunamadı — ÖLÇÜM YAPILAMAZ (atlanmıyor):", e)
        print("   `yer_id` çözümü olmadan KONUMLU/ODAKSIZ ayrımı yalan olur.")
        return 2
    print("yerleşim adı havuzu: %d (ad + parantez öncesi)" % len(havuz))
    print("=" * 96)

    dokum = []
    T = {"KONUMLU": 0, "KUTULU": 0, "BEYANLI": 0, "ODAKSIZ": 0}
    yid_kirik_t = 0
    beyan_yab_t = 0          # Osmanlı çekirdeği DIŞINDA kalan kapsam_genis
    print("%-42s %6s %8s %7s %8s %9s %9s %6s" %
          ("dosya", "madde", "KONUMLU", "KUTULU", "BEYANLI", "→yabancı",
           "🔴ODAKSIZ", "%iş"))
    print("-" * 104)
    for f in dosyalar:
        d, hata = _oku(os.path.join(dizin, f))
        if hata:
            print("🔴 %-42s AYRIŞTIRILAMADI: %s" % (f, hata))
            continue
        kayit = d["kayit"]
        if not isinstance(kayit, list):
            print("⚠️ %-42s liste değil, atlandı" % f)
            continue
        s = {"KONUMLU": 0, "KUTULU": 0, "BEYANLI": 0, "ODAKSIZ": 0}
        yid_kirik = 0
        odaksiz = []
        for o in kayit:
            if not isinstance(o, dict):
                continue
            sn, kirik = sinifla(o, havuz)
            s[sn] += 1
            T[sn] += 1
            if kirik:
                yid_kirik += 1
                yid_kirik_t += 1
            if sn == "ODAKSIZ":
                odaksiz.append({"t": o.get("t"), "b": (o.get("b") or "")[:90],
                                "yer_id": o.get("yer_id"),
                                "dunya": o.get("dunya"), "onem": o.get("onem")})
        n = sum(s.values())
        if n == 0:
            continue
        # KABA sınav — gerekçesi başlıktaki uyarıda; hüküm madde başınadır
        osm_cekirdek = f.startswith("olaylar")
        beyan_yab = 0 if osm_cekirdek else s["BEYANLI"]
        beyan_yab_t += beyan_yab
        yuk = s["ODAKSIZ"] + beyan_yab
        print("%-42s %6d %8d %7d %8d %9s %9d %6.1f" %
              (f, n, s["KONUMLU"], s["KUTULU"], s["BEYANLI"],
               ("🔴%d" % beyan_yab) if beyan_yab else "✓ 0",
               s["ODAKSIZ"], 100.0 * yuk / n))
        dokum.append({"dosya": f, "madde": n, "sinif": s,
                      "osm_cekirdek": osm_cekirdek, "beyanli_yabanci": beyan_yab,
                      "yuk": yuk,
                      "yer_id_cozulmedi": yid_kirik, "odaksiz": odaksiz})
        if AYRINTI and odaksiz:
            for x in odaksiz[:40]:
                print("      🔴 %s  %s" % (x["t"], x["b"]))
            if len(odaksiz) > 40:
                print("      … %d madde daha" % (len(odaksiz) - 40))

    n = sum(T.values())
    yuk_t = T["ODAKSIZ"] + beyan_yab_t
    print("-" * 104)
    print("%-42s %6d %8d %7d %8d %9s %9d %6.1f" %
          ("TOPLAM", n, T["KONUMLU"], T["KUTULU"], T["BEYANLI"],
           "🔴%d" % beyan_yab_t, T["ODAKSIZ"], 100.0 * yuk_t / max(n, 1)))
    print()
    print("🔴 ODAKSIZ %d madde — kamera KIPIRDAMIYOR (panel eksikliği YAZAR)."
          % T["ODAKSIZ"])
    print("🔴 BEYANLI→yabancı %d madde — kamera OSMANLI kutusuna uçar."
          % beyan_yab_t)
    print("   Osmanlı çekirdeğinde kalan meşru beyan: %d"
          % (T["BEYANLI"] - beyan_yab_t))
    print("   ⚠️ İkincisi birincisinden KÖTÜDÜR: sinyal yok, yanlış yer emin"
          " biçimde gösterilir.")
    print("⇒ TOPLAM İŞ: %d madde (%.1f%%)" % (yuk_t, 100.0 * yuk_t / max(n, 1)))
    print()
    print("⚠️ AYRI KOVA — `yer_id` yazılı ama yerleşime ÇÖZÜLMÜYOR: %d madde."
          % yid_kirik_t)
    print("   Bu bir odak eksiği DEĞİL eşleşme kusurudur (ad yazımı ya da nokta"
          " yokluğu); çaresi de ayrıdır.")

    jy = _arg("--json")
    if jy:
        io.open(jy, "w", encoding="utf-8").write(
            json.dumps({"toplam": T, "beyanli_yabanci": beyan_yab_t,
                        "yuk": yuk_t, "yer_id_cozulmedi": yid_kirik_t,
                        "dosyalar": dokum}, ensure_ascii=False, indent=1))
        print("döküm yazıldı: %s" % jy)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
