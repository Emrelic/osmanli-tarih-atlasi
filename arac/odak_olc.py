# -*- coding: utf-8 -*-
"""odak_olc.py — KRONOLOJİ MADDESİNİN KAMERA ODAĞI VAR MI? Ölçer ve KAPIYA bağlar.

🔴 NİÇİN DOĞDU — 27 Eylül 2026, Emre:
*"tüm dünyadaki kronoloji maddelerinin harita odağını ayarlayalım, konunun
içeriğine göre odak noktalarını kronoloji maddesine ayarlayalım."*
İş dağıtmadan önce ölçüm gerekti ve ÖLÇEN ALET YOKTU: `denetle_kronoloji.py`
⑤ yalnız *"`yer_id` DOLUYSA gerçek bir yerleşime eşleşiyor mu"* diye sorar —
yani YAZILMIŞ bir alanı doğrular, YAZILMAMIŞ odağı saymaz. Boş küme her
öngörüyü doğrular (`CLAUDE.md §11`).

## ODAK NEDİR — app.js'in KENDİ sırası (uydurma değil, koddan okundu)

    ① yer_kon [lat,lon]        NOKTA → flyTo        "OLAY BURADA OLDU"
    ② yer_id "<ad>"            NOKTA → flyTo        "OLAY BURADA OLDU"
    ③ odak_kutu_kaynak         KUTU  → fitBounds    hukukî sınır kutusu
    ④ odak_yer ["<ad>",…]      KUTU  (≥1 ad tutmalı) "KAMERA BURAYA BAKACAK"
    ⑤ odak_kimlik ["id",…]     KUTU  (O GÜN ≥2 YERLEŞİM) devlet toprağı
    ⑥ kapsam_genis:true        OSMANLI kutusu — BEYAN

🔴 `yer_id` ≠ `odak_yer` ve bu ayrım kuralın KENDİSİdir (`app.js:11697`):
`yer_id` *"olay BURADA oldu"* der ve KARTA da yazılır; `odak_yer` yalnız
*"kamera buraya bakacak"* der. 1827 tımar tasfiyesine `yer_id:"İstanbul"`
yazmak kameraya yarar ama VERİYE YALAN yazar. ⇒ Bu alet ikisini AYRI sayar
ve `yer_id`yi odak dolgusu olarak ÖNERMEZ.

## 🔴 BEYANLI'NIN TUZAĞI — odaksızlıktan KÖTÜ

`app.js:11835`:

    var _odakB = _odakKG ? _odakKG.kutu : ((di >= 0 && donemler[di].b) ? donemler[di].b : null);

`kapsam_genis:true` + odak yok ⇒ kamera **`donemler[di].b`**ye gider ve o kutu
O GÜNÜN **OSMANLI SINIRIDIR** (ölçüldü: ilk dönem `[29.32,39.58,30.54,40.22]`
= Söğüt çevresi). ⇒ `kronoloji_japonya.js`te `kapsam_genis:true` yazmak
*"kamerayı Osmanlı'ya gönder"* demektir; 1300'deki bir Balkan maddesinde
kamera SÖĞÜT'ü çerçeveler.
🔴 Bu ODAKSIZLIKTAN KÖTÜDÜR: odaksız maddede kamera DURUR ve panel *"nokta
yeri işaretlenmemiş"* der — kullanıcı eksikliği OKUR. Burada hiçbir sinyal
yoktur; yanlış yer KENDİNDEN EMİN gösterilir. (`dersler/D205` ailesi.)

⚠️ **"→yabancı" sütunu KABA BİR SINAVDIR** — dosya adı `olaylar` ile
başlıyorsa Osmanlı çekirdeği sayar. Gerçek hüküm MADDE BAŞINADIR:
`kronoloji_anadolu.js`teki 1550 tarihli bir madde için imparatorluk kutusu
meşru olabilir, 1300 tarihli bir Balkan maddesi için değildir. Alet SAYAR,
hüküm vermez (`§11`: ölçüm doğru, çıkarım yanlış).

## 🔴 ÇÖZÜM PYTHON'DA DEĞİL, `arac/odak_cozum.js`TE

Sınıflandırma `js/suzgec.js`in GERÇEK işlevleriyle yapılır. Sebebi ölçülmüş:
ilk Python sürümü İKİ yerde yanlıştı ve ikisi de "YANLIŞ TEMİZ" yönündeydi —
`odak_kimlik` için kimlik sayısına bakıyordu (yerleşim sayısına değil), ve
`yer_id` havuzunu `app.js:3101`in `d`/`v`/`s` süzgecinden geçirmiyordu.
⇒ Python yalnız HANGİ dosyalar canlı (`GIRDI_DOSYALARI`, `§5`) ve TABLO;
çözüm JS'te. İki dil, iki otorite, her biri kendi yerinde.

## YAYIN KAPISI — iki ayrı sertlik

    🔴 ÇÖZÜLMEYEN ODAK   0 TOLERANS. `odak_yer`/`odak_kimlik`/`yer_id`/
                         `odak_kutu_kaynak` YAZILMIŞ ama çözülmüyor.
                         Kırık atıftır: yazan kameranın oraya gideceğini
                         sanır, gitmez, ve app.js yalnız KONSOLA yazar.
                         Aynı aile: "renksiz künye — harita deliği".
    🟡 SAYI TAVANI       ODAKSIZ ve BEYANLI→yabancı bugünün ölçümünde
                         DONDURULUR (`denetim/ODAK-TAVAN.json`). Yalnız
                         GERİLEME bloke eder. Tavan bir ONAY değil bir
                         DONDURMADIR — `Değişmez 2s`/`8` ile aynı desen.

KULLANIM
    py arac/odak_olc.py                 özet tablo
    py arac/odak_olc.py --ayrinti       ODAKSIZ maddeleri bas
    py arac/odak_olc.py --kusur         yalnız ÇÖZÜLMEYEN odakları bas
    py arac/odak_olc.py --dosya <ad>    tek dosya
    py arac/odak_olc.py --json <yol>    makine okunur döküm
    py arac/odak_olc.py --tavan-yaz     bugünkü sayıyı TAVAN olarak dondur
"""
import io
import json
import os
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

TAVAN_YOL = os.path.join(KOK, "denetim", "ODAK-TAVAN.json")
COZUCU = os.path.join(KOK, "arac", "odak_cozum.js")


def _arg(ad, argv=None):
    argv = argv if argv is not None else sys.argv
    if ad in argv:
        i = argv.index(ad)
        if i + 1 < len(argv):
            return argv[i + 1]
    return None


def canli_dosyalar(tek=None):
    """Taranacak kronoloji/olay dosyaları."""
    if tek:
        return [tek]
    d = os.path.join(KOK, "data")
    return sorted(f for f in os.listdir(d)
                  if f.endswith(".js")
                  and (f.startswith("kronoloji_") or f.startswith("olaylar")))


def olc(tek=None):
    """node çözücüsünü TEK süreçte koştur → döküm sözlüğü.

    🔴 Hata durumunda `{"hata": …}` döner ve çağıran bunu TEMİZ SAYMAZ
    (`denetle_yayin.py` deseni: ÖLÇÜLEMEDİ ≠ temiz)."""
    if not os.path.isfile(COZUCU):
        return {"hata": "arac/odak_cozum.js yok"}
    try:
        import girdi
        havuz = girdi.yukle(sessiz=True)
    except Exception as e:                                  # noqa: BLE001
        return {"hata": "yerleşim havuzu okunamadı: %s" % str(e)[:120]}

    # süzgeç JS'te yapılacak; buraya yalnız çözüm için gereken alanlar gider
    ince = []
    for y in havuz:
        ince.append({"ad": y.get("ad"), "lat": y.get("lat"), "lon": y.get("lon"),
                     "d": y.get("d") or [], "v": y.get("v") or [],
                     "s": y.get("s") or []})

    fd, yol = tempfile.mkstemp(suffix=".json", text=True)
    os.close(fd)
    try:
        io.open(yol, "w", encoding="utf-8").write(json.dumps(
            {"kok": KOK.replace("\\", "/"), "yerlesimler": ince,
             "dosyalar": canli_dosyalar(tek)}, ensure_ascii=False))
        r = subprocess.run(["node", COZUCU, yol], capture_output=True,
                           text=True, encoding="utf-8", errors="replace")
    finally:
        try:
            os.unlink(yol)
        except OSError:
            pass
    if r.returncode != 0:
        return {"hata": "node çıkış %d: %s" % (r.returncode, (r.stderr or "")[:200])}
    try:
        return json.loads(r.stdout)
    except Exception as e:                                  # noqa: BLE001
        return {"hata": "node çıktısı ayrıştırılamadı: %s · %s"
                        % (str(e)[:80], (r.stdout or "")[:120])}


def ozetle(D):
    """Döküm → (T, beyan_yab, kusur_listesi). `olaylar*` = Osmanlı çekirdeği."""
    T = {"KONUMLU": 0, "KUTULU": 0, "BEYANLI": 0, "ODAKSIZ": 0}
    beyan_yab = 0
    kusur = []
    for d in D.get("dosyalar", []):
        if d.get("hata"):
            continue
        for k in T:
            T[k] += d["sinif"][k]
        if not d["dosya"].startswith("olaylar"):
            beyan_yab += d["sinif"]["BEYANLI"]
        for x in d.get("kusur", []):
            y = dict(x)
            y["dosya"] = d["dosya"]
            kusur.append(y)
    return T, beyan_yab, kusur


def tavan_oku():
    try:
        return json.loads(io.open(TAVAN_YOL, encoding="utf-8").read())
    except Exception:                                       # noqa: BLE001
        return None


def kapi_olcumu():
    """🔴 `denetle_yayin.py` BUNU çağırır. Dönüş:

        {"ihlal": bool, "satirlar": [str, …]}

    `ihlal` True olur ise yayın kapısı çıkış 1 verir. ÖLÇÜLEMEDİ de İHLALDİR.
    """
    sat = []
    D = olc()
    if D.get("hata"):
        return {"ihlal": True,
                "satirlar": ["✗  odak nöbetçisi ÖLÇEMEDİ: %s" % D["hata"][:90]]}
    T, beyan_yab, kusur = ozetle(D)
    ihlal = False

    # ① kırık atıf — YENİSİNE 0 TOLERANS, bilinen borç BEYANLA geçer
    #
    # 🔴 Niçin liste, niçin sayı değil: bir sayı tavanı *"bir kırık atıf
    #    serbest"* der ve hangisi olduğunu söylemez ⇒ bilinen borç kapanırken
    #    yenisi sessizce yerine geçebilir. Liste bunu imkânsız kılar: kimlik
    #    eşleşmezse öter. (`CLAUDE.md §11`: boş küme her öngörüyü doğrular.)
    tv = tavan_oku()
    beyanli = set()
    for x in ((tv or {}).get("bilinen_kusur") or []):
        beyanli.add((x.get("dosya"), x.get("t"), x.get("alan"), x.get("deger")))
    yeni = [x for x in kusur
            if (x["dosya"], x["t"], x["alan"], x["deger"]) not in beyanli]
    kapanan = beyanli - {(x["dosya"], x["t"], x["alan"], x["deger"]) for x in kusur}

    if yeni:
        ihlal = True
        sat.append("✗  YENİ ÇÖZÜLMEYEN ODAK ATFI: %d kayıt — alan YAZILMIŞ, "
                   "kamera oraya GİTMİYOR" % len(yeni))
        for x in yeni[:10]:
            sat.append("     %-28s %s  %s=%r  → %s"
                       % (x["dosya"][:28], x["t"], x["alan"], x["deger"], x["niye"]))
        if len(yeni) > 10:
            sat.append("     … %d kayıt daha (`py arac/odak_olc.py --kusur`)"
                       % (len(yeni) - 10))
    else:
        sat.append("✓  yeni çözülmeyen odak atfı: 0%s"
                   % ("  (beyanlı bilinen borç: %d)" % len(beyanli) if beyanli else ""))
    if kapanan:
        sat.append("✓  beyanlı borç KAPANDI: %d — tavandan düşürülmeli "
                   "(`--tavan-yaz`)" % len(kapanan))

    # ② tavan — yalnız GERİLEME bloke eder
    if tv is None:
        ihlal = True
        sat.append("✗  odak TAVANI yok (%s) — `py arac/odak_olc.py --tavan-yaz`"
                   % os.path.relpath(TAVAN_YOL, KOK))
    else:
        for ad, simdi, etiket in (("odaksiz", T["ODAKSIZ"], "ODAKSIZ"),
                                  ("beyanli_yabanci", beyan_yab, "BEYANLI→yabancı")):
            t = tv.get(ad)
            if t is None:
                ihlal = True
                sat.append("✗  odak tavanında `%s` yok — tavanı yeniden yaz" % ad)
            elif simdi > t:
                ihlal = True
                sat.append("✗  %s GERİLEDİ: %d > tavan %d (+%d)"
                           % (etiket, simdi, t, simdi - t))
            elif simdi < t:
                sat.append("✓  %s %d (tavan %d — %d İYİLEŞME, tavan indirilmeli: "
                           "`--tavan-yaz`)" % (etiket, simdi, t, t - simdi))
            else:
                sat.append("✓  %s %d (tavan %d)" % (etiket, simdi, t))
    return {"ihlal": ihlal, "satirlar": sat}


def main():
    # 🔴 `reconfigure` MODÜL DÜZEYİNDE DEĞİL, BURADA — ve sebebi ölçülmüş bir
    # çökme: `denetle_yayin.py:1350` bu modülü İÇE AKTARACAK ve o dosyanın
    # kendi yorumu şöyle diyor: *"`durum_tablosu.py:20` modül düzeyinde
    # `sys.stdout = io.TextIOWrapper(...)` yapıyor; içe aktarılınca eski
    # sarmalayıcı çöpe gidince ALTTAKİ TAMPONU KAPATIR ve kapının bundan
    # sonraki her `print`i ValueError ile patlar — kapı ÖLÜR."*
    # ⇒ Modül düzeyinde HİÇBİR stdout yan etkisi yok; ayar yalnız bu alet
    #   DOĞRUDAN koşarken yapılır. `kapi_olcumu()` zaten basmaz, satır DÖNER.
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:                                       # noqa: BLE001
        pass
    ayrinti = "--ayrinti" in sys.argv
    yalniz_kusur = "--kusur" in sys.argv
    tek = _arg("--dosya")

    D = olc(tek)
    if D.get("hata"):
        print("🔴 ÖLÇÜLEMEDİ:", D["hata"])
        print("   ⚠️ ÖLÇÜLEMEDİ ≠ TEMİZ. Kapı bunu İHLAL sayar.")
        return 2

    print("yerleşim %d · `sehirler` havuzu %d ad / %d kayıt (d/v/s süzgeci) · künye %d"
          % (D.get("yerlesim", 0), D.get("sehir_havuzu", 0),
             D.get("sehir_kayit", 0), D.get("kunye", 0)))
    print("=" * 104)

    T, beyan_yab, kusur = ozetle(D)

    if not yalniz_kusur:
        print("%-42s %6s %8s %7s %8s %9s %9s %6s" %
              ("dosya", "madde", "KONUMLU", "KUTULU", "BEYANLI", "→yabancı",
               "🔴ODAKSIZ", "%iş"))
        print("-" * 104)
        for d in D["dosyalar"]:
            if d.get("hata"):
                print("🔴 %-42s AYRIŞTIRILAMADI: %s" % (d["dosya"], d["hata"]))
                continue
            s = d["sinif"]
            n = d["madde"]
            if n == 0:
                continue
            by = 0 if d["dosya"].startswith("olaylar") else s["BEYANLI"]
            yuk = s["ODAKSIZ"] + by
            print("%-42s %6d %8d %7d %8d %9s %9d %6.1f" %
                  (d["dosya"], n, s["KONUMLU"], s["KUTULU"], s["BEYANLI"],
                   ("🔴%d" % by) if by else "✓ 0", s["ODAKSIZ"], 100.0 * yuk / n))
            if ayrinti and d["odaksiz"]:
                for x in d["odaksiz"][:40]:
                    print("      🔴 %s  %s" % (x["t"], x["b"]))
                if len(d["odaksiz"]) > 40:
                    print("      … %d madde daha" % (len(d["odaksiz"]) - 40))
        n = sum(T.values())
        yuk_t = T["ODAKSIZ"] + beyan_yab
        print("-" * 104)
        print("%-42s %6d %8d %7d %8d %9s %9d %6.1f" %
              ("TOPLAM", n, T["KONUMLU"], T["KUTULU"], T["BEYANLI"],
               "🔴%d" % beyan_yab, T["ODAKSIZ"], 100.0 * yuk_t / max(n, 1)))
        print()
        print("🔴 ODAKSIZ %d — kamera KIPIRDAMIYOR (panel eksikliği YAZAR)."
              % T["ODAKSIZ"])
        print("🔴 BEYANLI→yabancı %d — kamera OSMANLI kutusuna uçar."
              % beyan_yab)
        print("   Osmanlı çekirdeğinde kalan meşru beyan: %d"
              % (T["BEYANLI"] - beyan_yab))
        print("⇒ TOPLAM İŞ: %d madde (%.1f%%)" % (yuk_t, 100.0 * yuk_t / max(n, 1)))
        print()

    print("🔴 ÇÖZÜLMEYEN ODAK ATFI: %d kayıt" % len(kusur))
    if kusur:
        print("   (alan YAZILMIŞ ama kamera oraya GİTMİYOR — app.js yalnız"
              " KONSOLA yazar)")
        say = {}
        for x in kusur:
            say[x["alan"]] = say.get(x["alan"], 0) + 1
        print("   alan dağılımı:", dict(sorted(say.items())))
        for x in kusur[:60]:
            print("   %-34s %s  %-18s %r → %s"
                  % (x["dosya"][:34], x["t"], x["alan"], x["deger"], x["niye"]))
        if len(kusur) > 60:
            print("   … %d kayıt daha" % (len(kusur) - 60))

    if "--tavan-yaz" in sys.argv:
        if tek:
            print("🔴 --tavan-yaz TEK DOSYAYLA yazılmaz — tavan BÜTÜN evrenin ölçümüdür.")
            return 2
        tv = {"odaksiz": T["ODAKSIZ"], "beyanli_yabanci": beyan_yab,
              "konumlu": T["KONUMLU"], "kutulu": T["KUTULU"],
              "beyanli_toplam": T["BEYANLI"], "madde": sum(T.values()),
              "bilinen_kusur": [{"dosya": x["dosya"], "t": x["t"],
                                 "alan": x["alan"], "deger": x["deger"],
                                 "niye": x["niye"]} for x in kusur],
              "not": ("Tavan bir ONAY degil bir DONDURMADIR (Degismez 2s/8 ile ayni "
                      "desen). Yalniz GERILEME yayin kapisini bloke eder; iyilesme "
                      "olunca tavan --tavan-yaz ile INDIRILIR. bilinen_kusur bir "
                      "SAYI degil LISTEdir: beyanli borc kapanirken yenisi sessizce "
                      "yerine gecemez, kimlik eslesmezse oter.")}
        io.open(TAVAN_YOL, "w", encoding="utf-8", newline="\n").write(
            json.dumps(tv, ensure_ascii=False, indent=1) + "\n")
        print()
        print("✓ TAVAN YAZILDI: %s" % os.path.relpath(TAVAN_YOL, KOK))
        print("  odaksiz %d · beyanli_yabanci %d" % (T["ODAKSIZ"], beyan_yab))

    jy = _arg("--json")
    if jy:
        io.open(jy, "w", encoding="utf-8").write(json.dumps(
            {"toplam": T, "beyanli_yabanci": beyan_yab,
             "kusur": kusur, "dosyalar": D["dosyalar"]},
            ensure_ascii=False, indent=1))
        print("döküm yazıldı: %s" % jy)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
