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
    ⑥ kapsam_genis:true        BEYAN — kamera YOLA göre gider (aşağıda)

🔴 `yer_id` ≠ `odak_yer` ve bu ayrım kuralın KENDİSİdir (`app.js:11697`):
`yer_id` *"olay BURADA oldu"* der ve KARTA da yazılır; `odak_yer` yalnız
*"kamera buraya bakacak"* der. 1827 tımar tasfiyesine `yer_id:"İstanbul"`
yazmak kameraya yarar ama VERİYE YALAN yazar. ⇒ Bu alet ikisini AYRI sayar
ve `yer_id`yi odak dolgusu olarak ÖNERMEZ.

## 🔴 BEYANLI'NIN TUZAĞI — İKİ YOL, İKİ AYRI KUSUR

`kapsam_genis:true` + odak yok: kameranın nereye gittiği maddenin AÇILDIĞI
YOLA bağlıdır, dosyasına değil. İki yol iki ayrı işlevdir.

**(b) OLAYLAR — Osmanlı listesi, `haritayiOlayaGotur`:**

    var _odakB = _odakKG ? _odakKG.kutu : ((di >= 0 && donemler[di].b) ? donemler[di].b : null);

⇒ kamera **`donemler[di].b`**ye, yani O GÜNÜN **OSMANLI SINIRINA** gider
(ölçüldü: ilk dönem `[29.32,39.58,30.54,40.22]` = Söğüt çevresi). Bu yol
yalnız `OLAYLAR` dizilerinindir; orada beyan meşrudur (çıktıda "Osmanlı
çekirdeğinde kalan meşru beyan").

**(a) SEKME — devlet sekmesi, `maddeAc` gövde dalı:** `→yabancı` sütunu BUDUR.
⇒ kamera Osmanlı'ya GİTMEZ (UMIT-W13-ODAK-METIN-1006; eski metin bu yolu
(b) sanıyordu). `maddeOdakKutusu(m)` kutu kurmazsa `devletiYay(d.harita ||
d.id)` çağrılır:
  · devletin O GÜN `DEVLET_HARITA` gövdesi varsa → BÜTÜN gövdeye açılır.
    1600'de Viyana'yı anlatan bir madde Habsburg topraklarının tamamını
    çerçeveler: yer DOĞRU devlet, ama ÖLÇEK yanlıştır.
  · gövdesi yoksa (sahnede değil · harita kaydı yok · 1281 öncesi madde
    1281'e kıstırılır) → `devletiYay` `false` döner ve KIRIM-ODAK-A-1006
    geri düşüşü devreye girer: `maddeOdakKutusu({t, gi, odak_kimlik:
    [d.id]})` — künyenin o gün ≥2 (tâbi dâhil) yerleşimi varsa onların
    kutusuna uçar (SEKME_TABI_KUTU); yoksa kamera KIPIRDAMAZ, panele
    *"Bu tarihte <devlet> haritada çizili değil"* yazılır ve
    `SEKME_ODAK_DUSEN` sayılır (SEKME_SESSIZ).
    ⚠️ A'dan ÖNCE bu dalda panel notu YOKTU (5 Ekim ölçümü, 355 madde:
    302 gövde · 52 sahnede değil · 1 harita kaydı yok). Not artık var ama
    kamera yine yerinde: ODAKSIZ ile aynı kusur sınıfıdır.
    Örnek: `iran` künyesi 1555–1600 (`KRONOLOJI_IRAN` Pehlevi künyesine
    bağlı; Safevî topraklarını `safevi` çizer — W13 1006c §2).
    🆕 1006b: bu son kova `SEKME_SESSIZ` dalıdır ve tavanı vardır
    (`sekme_sessiz`); sayı buradan değil koşudan okunur.
⇒ `→yabancı` iş YÜKÜDÜR: odak yazılmalı. Ama kusur "Osmanlı'ya uçmak"
değil, "kaba ölçek ya da kıpırdamayan kamera"dır.

## 🔴 ÇÖZÜM PYTHON'DA DEĞİL, `arac/odak_cozum.js`TE

Sınıflandırma `js/suzgec.js`in GERÇEK işlevleriyle yapılır. Sebebi ölçülmüş:
ilk Python sürümü İKİ yerde yanlıştı ve ikisi de "YANLIŞ TEMİZ" yönündeydi —
`odak_kimlik` için kimlik sayısına bakıyordu (yerleşim sayısına değil), ve
`yer_id` havuzunu süzgeçten geçirmiyordu.
⇒ Python yalnız HANGİ betikler yükleniyor (`paket_coz.py`) ve TABLO;
çözüm JS'te. İki dil, iki otorite, her biri kendi yerinde.

## 🆕 EVREN = TARAYICI (UMIT-W13-ODAK-SEKME-1006)

Eskiden evren `data/` DİSK listesiydi (`kronoloji_*` + `olaylar*`). Ölçüldü
(`denetim/ODAK-OLC-KOR-NOKTA-1005.md`): 2975 künye-içi madde HİÇ görülmüyordu,
2059 madde sayılıyordu ama hiçbir ekranda AÇILAMIYORDU, havuz app.js'in
`AD_KONUM`u değildi (152 ad farkı). Artık `odak_cozum.js` index.html'in
app.js'ten önce koşturduğu betikleri aynı sırayla koşturur ve app.js'in
gerçek işlevlerini METİNLE keser. Kesemezse ÇIKIŞ 2 — ölçülemedi.

    OLAYLAR   Osmanlı listesi — `haritayiOlayaGotur` yolu
    SEKME     DEVLETLER[].kronoloji — `maddeAc` yolu (dalı: `sekmeDali`)
    AÇILAMAZ  yüklenen ama hiçbir ekranda açılamayan — sınıf/tavan sayımına
              GİRMEZ; kırık atıf sorusu YİNE sorulur

`→yabancı` artık dosya adından değil YOLDAN okunur: SEKME'deki BEYANLI.

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
    py arac/odak_olc.py --yay-dogrula   gövde taklidini GERÇEK devletiYay ile
                                        karşılaştır (+1,1 GB bellek, +4 sn)
    py arac/odak_olc.py --tavan-yaz     bugünkü KİMLİK LİSTESİNİ dondur (yalnız İNER;
                                        kapıda ✗ varken REDDEDER, evreni genişletmez)
    py arac/odak_olc.py --tavan-yaz --ilk-dondurma
                                        eski SAYI tavanını listeye çevir (ölçüm eski
                                        sayılarla birebir tutmazsa REDDEDER)

## 🆕 KİMLİK LİSTESİ (ODAK-KAPI-KIMLIK-1006)

Tavan artık SAYI değil MADDE KİMLİĞİ LİSTESİdir (t | NFC(b), `odak_cozum.js`).
Sayı tavanı dosyalar arası göçü göremiyordu — ölçüldü, iki temelde
(`denetim/ODAK-KAPI-KORLUK-1006.md`): bir dosyadaki gerileme, başka bir
dosyadan çıkan maddeyle 1'e 1 sıfırlanıyor, ihlal False dönüyordu.
"→yabancı" de dosya adından değil maddenin AÇILDIĞI YOLDAN okunur (SEKME);
`olaylar*` dışındaki maddeler Osmanlı kutusuna uçmaz, sekmede açılır
(app.js `maddeAc`). Sınav, iki yönde:
`py denetim/ODAK-KAPI-KIMLIK-SINAV-1006.py`.

🆕 W57 (Z8, 6 Ekim 2026) — kimlik listesi TARAYICI evreninde tutulur:
kimliğin "dosyası" app.js'in gördüğü KAYNAK dosyadır (paket değil);
SEKME SESSİZ ve SEKME OKUNMAYAN çifti (kimlik, maddenin bağlandığı İLK
künye) olarak dondurulur — `sekmeDali` tekil sayar, liste de tekildir.
"""
import hashlib
import io
import json
import os
import subprocess
import sys
import tempfile
from collections import Counter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi as _girdi   # ZAMAN-GENİŞ-1008: UFUK / VERI_UFKU tek otoritesi

TAVAN_YOL = os.path.join(KOK, "denetim", "ODAK-TAVAN.json")
SEKME_DALLARI = ("SEKME_NOKTA", "SEKME_KIPIRDAMAZ", "SEKME_OKUNMAYAN",
                 "SEKME_KUTU", "SEKME_GOVDE", "SEKME_TABI_KUTU", "SEKME_SESSIZ",
                 "SEKME_OLCULEMEDI", "SEKME_VERI_DISI")   # sonuncusu ZAMAN-GENİŞ-1008
COZUCU = os.path.join(KOK, "arac", "odak_cozum.js")


def _arg(ad, argv=None):
    argv = argv if argv is not None else sys.argv
    if ad in argv:
        i = argv.index(ad)
        if i + 1 < len(argv):
            return argv[i + 1]
    return None


def disk_dosyalari():
    """Diskteki kronoloji/olay dosyaları — artık EVREN DEĞİL, yalnız
    "diskte var, tarayıcı yüklemiyor" farkını basmak için."""
    d = os.path.join(KOK, "data")
    return sorted(f for f in os.listdir(d)
                  if f.endswith(".js")
                  and (f.startswith("kronoloji_") or f.startswith("olaylar")))


def etiket_kaynak():
    """index.html'in her `data/` etiketi → içindeki kaynak dosyalar, SIRAYLA.

    Paket çözümü `paket_coz.py`nindir (TEK paylaşılan okuyucu, `D244`) —
    burada regex yazılmaz. Boş/tutarsız künye `PaketCozHatasi` fırlatır."""
    import paket_coz
    harita = {}
    kunye = None
    for e in paket_coz.index_kaynaklari(KOK, ham=True):
        if paket_coz._PAKET.match(e):
            if kunye is None:
                kunye = paket_coz._kunye(KOK)
            if e not in kunye:
                raise paket_coz.PaketCozHatasi("paket künyede yok: %s" % e)
            harita[e] = list(kunye[e])
        else:
            harita[e] = [e]
    return harita


def olc(tek=None, yay_dogrula=False):
    """node çözücüsünü TEK süreçte koştur → döküm sözlüğü.

    Evren HER ZAMAN bütün tarayıcıdır (bağlama bütün betiklere bağlı); `tek`
    yalnız ÇIKTIYI o dosyaya süzer.

    🔴 Hata durumunda `{"hata": …}` döner ve çağıran bunu TEMİZ SAYMAZ
    (`denetle_yayin.py` deseni: ÖLÇÜLEMEDİ ≠ temiz)."""
    if not os.path.isfile(COZUCU):
        return {"hata": "arac/odak_cozum.js yok"}
    try:
        ek = etiket_kaynak()
    except Exception as e:                                  # noqa: BLE001
        return {"hata": "index.html betik listesi çözülemedi: %s" % str(e)[:160]}

    fd, yol = tempfile.mkstemp(suffix=".json", text=True)
    os.close(fd)
    try:
        io.open(yol, "w", encoding="utf-8").write(json.dumps(
            {"kok": KOK.replace("\\", "/"), "etiket_kaynak": ek,
             "disk": disk_dosyalari(), "yay_dogrula": bool(yay_dogrula),
             # ZAMAN-GENİŞ-1008: VERİ PENCERESİ DIŞI kovasının TEK evren tanımı
             "devirler": [list(x) for x in _girdi.ufuk_devirleri()]},
            ensure_ascii=False))
        r = subprocess.run(["node", COZUCU, yol], capture_output=True,
                           text=True, encoding="utf-8", errors="replace")
    finally:
        try:
            os.unlink(yol)
        except OSError:
            pass
    D = None
    try:
        D = json.loads(r.stdout)
    except Exception as e:                                  # noqa: BLE001
        if r.returncode == 0:
            return {"hata": "node çıktısı ayrıştırılamadı: %s · %s"
                            % (str(e)[:80], (r.stdout or "")[:120])}
    if isinstance(D, dict) and D.get("hata"):
        return D                                # çözücünün kendi ÖLÇÜLEMEDİ'si (çıkış 2)
    if r.returncode != 0:
        return {"hata": "node çıkış %d: %s" % (r.returncode, (r.stderr or "")[:200])}
    if tek:
        D["dosyalar"] = [d for d in D.get("dosyalar", []) if d.get("dosya") == tek]
        if not D["dosyalar"]:
            return {"hata": "%s tarayıcı evreninde madde vermedi (yüklenmiyor ya da "
                            "kronoloji/olay değil)" % tek}
    return D


def ozetle(D):
    """Döküm → (T, beyan_yab, kusur_listesi).

    `beyan_yab` = SEKME yolundaki BEYANLI (dosya adından değil, yoldan)."""
    T = {"KONUMLU": 0, "KUTULU": 0, "BEYANLI": 0, "ODAKSIZ": 0}
    beyan_yab = 0
    kusur = []
    for d in D.get("dosyalar", []):
        if d.get("hata"):
            continue
        for k in T:
            T[k] += d["sinif"][k]
        beyan_yab += d.get("beyanli_yabanci") or 0
        for x in d.get("kusur", []):
            y = dict(x)
            y["dosya"] = d["dosya"]
            kusur.append(y)
    return T, beyan_yab, kusur


def sekme_ozet(D):
    """Bütün evrenin sekme dalı sayımı."""
    S = dict((k, 0) for k in SEKME_DALLARI)
    for d in D.get("dosyalar", []):
        for k in SEKME_DALLARI:
            S[k] += (d.get("sekme") or {}).get(k) or 0
    return S


def tavan_oku():
    try:
        return json.loads(io.open(TAVAN_YOL, encoding="utf-8").read())
    except Exception:                                       # noqa: BLE001
        return None


def _sha8(k):
    """`odak_cozum.js` `ozet8` ile BİREBİR (sha1, ilk 8 hex)."""
    return hashlib.sha1(k.encode("utf-8")).hexdigest()[:8]


def kimlik_ozetle(D):
    """Döküm → KİMLİK kovaları (ODAK-KAPI-KIMLIK-1006). Hepsi ÇOKLU KÜMEdir.

    Dönüş sözlüğü:
      odaksiz      Counter{k}              ODAKSIZ maddeler (bütün dosyalar)
      sessiz       Counter{(k, kunye)}     SEKME_SESSIZ: kamera KIPIRDAMIYOR
      okunmayan    Counter{(k, kunye)}     SEKME_OKUNMAYAN: odak yazılı, sekmede etkisiz
      yab_beyanli  Counter{k}              SEKME yolundaki BEYANLI maddeler
      cek_beyanli  Counter{k}              OLAYLAR yolundaki BEYANLI maddeler
    🆕 W57: yabancı/çekirdek ayrımı DOSYA ADINDAN değil maddenin açıldığı
    YOLDAN (`odak_cozum.js` evreni) okunur; künye kimliği maddenin bağlandığı
    İLK künyedir (`sekmeDali` tekil sayar).
      dosya        {k: set(dosya)}         kimliğin BUGÜN durduğu dosyalar
      sekme_olculemedi  int                sekme sınıfı ölçülemeyen çift
      hata         [dosya]                 ayrıştırılamayan dosyalar
      ozet         set(sha8)               bütün maddelerin evren özeti
    """
    od, ss, ok, yb, cb = Counter(), Counter(), Counter(), Counter(), Counter()
    vd = []                                        # ZAMAN-GENİŞ-1008 VERİ PENCERESİ DIŞI
    yer = {}
    hata, olcm, ozet = [], 0, set()
    for d in D.get("dosyalar", []):
        if d.get("hata"):
            hata.append(d["dosya"])
            continue
        ad = d["dosya"]
        for x in d.get("odaksiz") or []:
            od[x["k"]] += 1
            yer.setdefault(x["k"], set()).add(ad)
        for x in d.get("sekme_sessiz") or []:
            ss[(x["k"], x["kunye"])] += 1
            yer.setdefault(x["k"], set()).add(ad)
        for x in d.get("okunmayan") or []:
            ok[(x["k"], x["kunye"])] += 1        # `yer`e girmez: TAŞINDI bilgisi odaksız kovası içindir
        for x in d.get("beyanli") or []:
            (cb if x.get("yol") == "OLAYLAR" else yb)[x["k"]] += 1
            yer.setdefault(x["k"], set()).add(ad)
        vd.extend(d.get("veri_disi") or [])
        olcm += (d.get("sekme") or {}).get("SEKME_OLCULEMEDI", 0)
        ozet.update(d.get("k8") or [])
    return {"odaksiz": od, "sessiz": ss, "okunmayan": ok, "yab_beyanli": yb, "cek_beyanli": cb,
            "dosya": yer, "sekme_olculemedi": olcm, "hata": hata, "ozet": ozet,
            "veri_disi": vd}


def _sayac(liste, anahtar):
    return Counter(anahtar(x) for x in (liste or []))


def _kisa(k, n=70):
    return k if len(k) <= n else k[:n - 1] + "…"


def yay_satiri(D):
    """Geometri-boş doğrulamasının (`--yay-dogrula`) DURUM satırı.

    🔴 D265 (koordinatör, 6 Ekim 2026): doğrulama kapıya ALINMADI (bellek
    345 → 1438 MB, o gün 0 vaka) ama "0 vaka" ile "SORULMADI" ayırt
    edilebilmeli. Bu satır kapalıyken de basılır — sessizlik "temiz" sanılmasın.
    Satır bilgi satırıdır, `ihlal` hükmünü DEĞİŞTİRMEZ."""
    yd = D.get("yay_dogrulama")
    if not yd:
        return "ⓘ  geometri-boş doğrulaması KOŞULMADI (--yay-dogrula kapalı)"
    return ("ⓘ  geometri-boş doğrulaması KOŞULDU: %d geometri-boş · %d uyuşmazlık "
            "(%d halka)" % (len(yd["ucuncu_return"]), len(yd["uyusmazlik"]), yd["halka"]))


def kapi_olcumu(yay_dogrula=False):
    """🔴 `denetle_yayin.py` BUNU çağırır. Dönüş:

        {"ihlal": bool, "satirlar": [str, …]}

    `ihlal` True olur ise yayın kapısı çıkış 1 verir. ÖLÇÜLEMEDİ de İHLALDİR.

    🆕 ODAK-KAPI-KIMLIK-1006 — ölçüt SAYI değil MADDE KİMLİĞİ LİSTESİ.
    Sayı tavanı dosyalar arası göçü göremiyordu (ölçüldü, iki temelde:
    `denetim/ODAK-KAPI-KORLUK-1006.md`): bir dosyadaki gerileme, başka bir
    dosyadan çıkan bir maddeyle 1'e 1 SIFIRLANIYORDU ve ihlal False dönüyordu;
    taşınan beyanlı kusur ise "yeni" diye ötüyordu. `§3.4 ⑤`: istisna listesi
    tavan ailesidir — ve TAVANIN KENDİSİ de liste olmalıydı.
    Kimlik `odak_cozum.js`te üretilir (t | NFC(b)); burada yalnız karşılaştırılır.
    `yay_dogrula` varsayılan KAPALI (D265); kapalı olduğu SATIRDA yazılır.
    """
    sat = []
    D = olc(yay_dogrula=yay_dogrula)
    if D.get("hata"):
        return {"ihlal": True,
                "satirlar": ["✗  odak nöbetçisi ÖLÇEMEDİ: %s" % D["hata"][:90]]}
    T, beyan_yab, kusur = ozetle(D)
    K = kimlik_ozetle(D)
    ihlal = False

    # ⓪ ölçülemeyen — hiçbiri TEMİZ sayılmaz
    if K["hata"]:
        ihlal = True
        sat.append("✗  ÖLÇÜLEMEDİ: %d kronoloji dosyası ayrıştırılamadı — maddeleri "
                   "listeden 'çıkmış' görünürdü: %s" % (len(K["hata"]), ", ".join(K["hata"][:5])))
    if K["sekme_olculemedi"]:
        ihlal = True
        sat.append("✗  ÖLÇÜLEMEDİ: %d sekme çiftinin sınıfı ölçülemedi "
                   "(`DEVLET_HARITA` tarayıcı evreninde yok/boş)"
                   % K["sekme_olculemedi"])

    tv = tavan_oku()
    if tv is None:
        return {"ihlal": True, "satirlar": sat + [
            "✗  odak TAVANI yok/bozuk (%s) — `py arac/odak_olc.py --tavan-yaz --ilk-dondurma`"
            % os.path.relpath(TAVAN_YOL, KOK)]}
    if "odaksiz_kimlik" not in tv or "sekme_sessiz_kimlik" not in tv:
        return {"ihlal": True, "satirlar": sat + [
            "✗  odak tavanı ESKİ BİÇİMDE (sayı) — kimlik listesi yok. Sayı tavanı "
            "göçü göremez; `--tavan-yaz --ilk-dondurma` ile listeye çevrilir."]}
    if "sekme_okunmayan_kimlik" not in tv:
        # W57: OKUNMAYAN listesi tavanla AYNI commit'te iner (§3.4-2); yoksa
        # kapı o soruyu SORAMAZ — ölçülemeyen soru temiz sayılmaz.
        return {"ihlal": True, "satirlar": sat + [
            "✗  odak tavanında `sekme_okunmayan_kimlik` YOK — SEKME OKUNMAYAN "
            "sorusu ÖLÇÜLEMEDİ (tavan, çözücüyle aynı commit'te iner)."]}

    # ① kırık atıf — YENİSİNE 0 TOLERANS; anahtar (kimlik, alan, değer), DOSYA YOK
    #    (dosya anahtardaydı ⇒ taşınan beyanlı kusur hem "yeni" hem "kapandı"
    #    basılıyordu: yanlış pozitif, KORLUK-1006 E4).
    beyanli = {(x.get("k"), x.get("alan"), x.get("deger"))
               for x in (tv.get("bilinen_kusur") or [])}
    simdi = {(x.get("k"), x["alan"], x["deger"]) for x in kusur}
    yeni = [x for x in kusur if (x.get("k"), x["alan"], x["deger"]) not in beyanli]
    kapanan = beyanli - simdi
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
                   "(`--tavan-yaz`): %s" % (len(kapanan), "; ".join(
                       "%s %s" % (_kisa(k or "?", 40), a) for k, a, _ in sorted(kapanan, key=str)[:3])))

    # ② tavan sağlaması — sayı ile liste AYNI şeyi söylemeli (elle düzenleme sezici)
    for sayi, liste, ad in (("odaksiz", "odaksiz_kimlik", "ODAKSIZ"),
                            ("sekme_sessiz", "sekme_sessiz_kimlik", "SEKME SESSİZ"),
                            ("sekme_okunmayan", "sekme_okunmayan_kimlik", "SEKME OKUNMAYAN"),
                            ("beyanli_yabanci", "yabanci_beyanli_kimlik", "BEYANLI→yabancı"),
                            ("beyanli_cekirdek", "cekirdek_beyanli_kimlik", "BEYANLI çekirdek")):
        if tv.get(sayi) is not None and tv.get(liste) is not None \
                and tv[sayi] != len(tv[liste]):
            ihlal = True
            sat.append("✗  tavan TUTARSIZ: `%s` = %s ama `%s` %d kimlik — sayı elle "
                       "düzenlenmiş olabilir; liste OTORİTEDİR" % (sayi, tv[sayi], liste,
                                                                 len(tv[liste])))

    evren = set(tv.get("evren") or [])
    ev_ozet = tv.get("evren_ozet") or ""
    ev_ozet = {ev_ozet[i:i + 8] for i in range(0, len(ev_ozet), 8)}
    simdi_yer = K["dosya"]

    def eski_yer(liste):
        y = {}
        for x in liste or []:
            y.setdefault(x["k"], set()).add(x.get("d"))
        return y

    # ③ ODAKSIZ — kimlik listesi. Kova: tavan (evren dosyaları) + YENİ KAPSAM
    t_od = _sayac(tv.get("odaksiz_kimlik"), lambda x: x["k"])
    t_yk = _sayac(tv.get("yeni_kapsam_kimlik"), lambda x: x["k"])
    c_od = K["odaksiz"]
    artan = c_od - (t_od + t_yk)
    geri, ykap = [], []
    for k, n in sorted(artan.items()):
        dosyalar = simdi_yer.get(k, set())
        # VARDI ⇒ bu madde dondurma anında bir yerdeydi: odağı düştü ya da
        #          bozulup taşındı. Taşınmak GERİLEMEYİ yeni kapsama ÇEVİRMEZ.
        # Eski dosyada yeni madde ⇒ odaksız eklendi.
        if _sha8(k) in ev_ozet or (dosyalar & evren) or not evren:
            geri.extend([(k, dosyalar)] * n)
        else:
            ykap.extend([(k, dosyalar)] * n)
    iyi = t_od - c_od
    yk_kapandi = t_yk - c_od
    ey = eski_yer(list(tv.get("odaksiz_kimlik") or []) + list(tv.get("yeni_kapsam_kimlik") or []))
    tasindi = [k for k in (t_od + t_yk) & c_od
               if simdi_yer.get(k, set()) and ey.get(k) and simdi_yer[k] != ey[k]]
    if geri:
        ihlal = True
        sat.append("✗  ODAKSIZ GERİLEDİ: %d YENİ odaksız kimlik (tavan %d kimlik) — dosyası "
                   "ne olursa olsun:" % (len(geri), len(tv.get("odaksiz_kimlik") or [])))
        for k, ds in geri[:10]:
            sat.append("     %-70s  %s" % (_kisa(k), ",".join(sorted(ds))[:40]))
        if len(geri) > 10:
            sat.append("     … %d kimlik daha (`--ayrinti`)" % (len(geri) - 10))
    else:
        sat.append("✓  ODAKSIZ: yeni odaksız kimlik 0 (tavan %d kimlik · bugün %d · "
                   "yeni kapsam listesi %d)" % (sum(t_od.values()), sum(c_od.values()),
                                                 sum(t_yk.values())))
    if ykap:
        sat.append("ⓘ  YENİ KAPSAM: dondurmada OLMAYAN %d madde, tavan evreni DIŞINDAKİ "
                   "dosyalarda odaksız — BLOKE ETMEZ, adıyla basılır:" % len(ykap))
        for k, ds in ykap[:8]:
            sat.append("     %-70s  %s" % (_kisa(k), ",".join(sorted(ds))[:40]))
        if len(ykap) > 8:
            sat.append("     … %d daha · ⇒ İNCELE, odak yaz, sonra `--tavan-yaz`" % (len(ykap) - 8))
    if iyi:
        sat.append("✓  ODAKSIZ İYİLEŞME: %d kimlik tavandan çıktı — tavan indirilmeli "
                   "(`--tavan-yaz`): %s" % (sum(iyi.values()), "; ".join(
                       _kisa(k, 50) for k in sorted(iyi)[:3])))
    if yk_kapandi:
        sat.append("ⓘ  yeni kapsam listesinden %d kimlik kapandı" % sum(yk_kapandi.values()))
    if tasindi:
        sat.append("ⓘ  TAŞINDI: %d odaksız kimlik dosya değiştirdi — kova AYNI, "
                   "hüküm değişmez: %s" % (len(tasindi), "; ".join(_kisa(k, 50) for k in tasindi[:3])))

    # ④ SEKME SESSİZ / OKUNMAYAN — "→yabancı" artık DOSYA ADINDAN DEĞİL,
    #    maddenin açıldığı YOLDAN okunur (`odak_cozum.js` `sekmeDali`, app.js
    #    `maddeAc`). `olaylar*` dışındaki her madde YALNIZ künye sekmesinde
    #    açılır ⇒ eski "BEYANLI→yabancı = Osmanlı kutusuna uçar" sayısı o
    #    maddeler için ölçülen davranış DEĞİLDİ. İki gerçek kusur:
    #      SESSİZ    gövde yok + tâbi kutusu yok → kamera kıpırdamıyor
    #      OKUNMAYAN odak/yer_kon YAZILMIŞ ama sekme dalı onu okumuyor
    #    (UMIT-W13-ODAK-SEKME-1006 · W57: çift = (kimlik, İLK künye), tekil.)
    for ad, alan, tarif in (
            ("SEKME SESSİZ", "sessiz", "künye sekmesinde kamera KIPIRDAMIYOR"),
            ("SEKME OKUNMAYAN", "okunmayan", "odak YAZILMIŞ, künye sekmesinde ETKİSİZ")):
        t_x = _sayac(tv.get("sekme_%s_kimlik" % alan), lambda x: (x["k"], x["kunye"]))
        c_x = K[alan]
        x_yeni = c_x - t_x
        x_iyi = t_x - c_x
        if x_yeni:
            ihlal = True
            sat.append("✗  %s GERİLEDİ: %d YENİ (madde × künye) çifti — %s:"
                       % (ad, sum(x_yeni.values()), tarif))
            for (k, kid) in sorted(x_yeni)[:10]:
                sat.append("     %-60s  sekme %s" % (_kisa(k, 60), kid))
        else:
            sat.append("✓  %s: yeni çift 0 (tavan %d çift · bugün %d)"
                       % (ad, sum(t_x.values()), sum(c_x.values())))
        if x_iyi:
            sat.append("✓  %s İYİLEŞME: %d çift kapandı — tavan indirilmeli "
                       "(`--tavan-yaz`)" % (ad, sum(x_iyi.values())))

    # ④b ZAMAN-GENİŞ-1008 — VERİ PENCERESİ DIŞI: o devirde hedef kimliğin HİÇ gövde
    #    verisi yok (ölçüt `odak_cozum.js` `veriDisi`). SESSİZ/OKUNMAYAN tavanına
    #    GİRMEZ, onlarla TOPLANMAZ, ihlal üretmez; kalem adıyla basılır ve veri
    #    yazılınca kendiliğinden çıkar. `ufuk_devirleri()` boşsa (UFUK = VERI_UFKU) kova yok.
    if _girdi.ufuk_devirleri():
        _vd = K["veri_disi"]
        _dv = Counter(x["devir"] for x in _vd)
        sat.append("ⓘ  ZAMAN-GENİŞ-1008 VERİ PENCERESİ DIŞI: %d (madde × künye) — o devirde "
                   "gövde verisi YOK · %s · SEKME SESSİZ ile TOPLANMAZ (bugün %d)"
                   % (len(_vd), " · ".join("%s %d" % kv for kv in sorted(_dv.items())) or "—",
                      sum(K["sessiz"].values())))
        for x in sorted(_vd, key=lambda x: x["t"]):
            sat.append("     %-60s  sekme %s  (%s)" % (_kisa(x["k"], 60), x["kunye"], x["devir"]))

    # ⑤ ÇEKİRDEĞE GÖÇ — yabancı BEYANLI bir madde `olaylar*`a taşınırsa sekme
    #    dökümünden ÇIKAR (iyileşme gibi görünür) ama artık ana listede açılır
    #    ve kamera OSMANLI kutusuna uçar (app.js `haritayiOlayaGotur`) —
    #    odaksızlıktan KÖTÜ. W57: "çekirdek" = OLAYLAR YOLU (dosya adı değil).
    #    KORLUK-1006 E3a/E3e'nin kaçış yolu buydu.
    #    ⚠️ Çoklu küme FARKI: 52 dosyalar-arası ikiz grubunun bir kopyası
    #       zaten çekirdekte olabilir — ölçülen şey ARTIŞTIR, varlık değil.
    t_yb = _sayac(tv.get("yabanci_beyanli_kimlik"), lambda x: x["k"])
    t_cb = _sayac(tv.get("cekirdek_beyanli_kimlik"), lambda x: x["k"])
    goc = [k for k in (K["cek_beyanli"] - t_cb) if k in t_yb]
    if goc:
        ihlal = True
        sat.append("✗  ÇEKİRDEĞE GÖÇ: %d yabancı BEYANLI madde `olaylar*`a taşındı — kamera "
                   "artık OSMANLI kutusuna uçar:" % len(goc))
        for k in sorted(goc)[:10]:
            sat.append("     %-70s  %s" % (_kisa(k), ",".join(sorted(simdi_yer.get(k, ())))[:40]))
    sat.append(yay_satiri(D))          # D265: bilgi satırı, `ihlal`e dokunmaz
    return {"ihlal": ihlal, "satirlar": sat}


def _json_yaz(tv):
    """Tavanı yazar: kimlik listelerinin her öğesi TEK SATIR (diff okunur kalsın)."""
    sat = ["{"]
    anahtarlar = list(tv)
    for i, k in enumerate(anahtarlar):
        v = tv[k]
        son = "" if i == len(anahtarlar) - 1 else ","
        if isinstance(v, list) and v and isinstance(v[0], dict):
            sat.append(" %s: [" % json.dumps(k, ensure_ascii=False))
            for j, x in enumerate(v):
                sat.append("  %s%s" % (json.dumps(x, ensure_ascii=False),
                                       "" if j == len(v) - 1 else ","))
            sat.append(" ]%s" % son)
        else:
            sat.append(" %s: %s%s" % (json.dumps(k, ensure_ascii=False),
                                      json.dumps(v, ensure_ascii=False), son))
    sat.append("}")
    io.open(TAVAN_YOL, "w", encoding="utf-8", newline="\n").write("\n".join(sat) + "\n")


def tavan_yaz(D, T, beyan_yab, kusur, ilk=False):
    """Bugünün ölçümünü KİMLİK LİSTESİ olarak dondurur. Dönüş: çıkış kodu (0 yazıldı).

    🔴 İKİ KİLİT (`§3.4`, `D255`: `--tavan-yaz` bir kez evreni genişletip
       203 kusuru AFFETMİŞTİ):
       ① Kapıda ✗ varken YAZMAZ — tavan yalnız İNER. Gerileme varken yazmak
          onu affetmek olurdu. Gerekirse JSON elle, gerekçesiyle ve commit
          mesajında beyanla değiştirilir.
       ② `evren` (dosya kümesi) GENİŞLETİLMEZ — eski tavanınki korunur.
    `--ilk-dondurma`: sayı biçimindeki eski tavanı listeye ÇEVİRİR. Yalnız
       ölçüm eski sayılarla BİREBİR tutuyorsa yazar (`§3.4 ⓪`: tavan yazıldığı
       anda ölçülür ve fark ADIYLA karşılaştırılır).
    """
    eski = tavan_oku() or {}
    eski_bicim = "odaksiz_kimlik" not in eski
    if ilk and not eski_bicim:
        print("🔴 --ilk-dondurma: tavan ZATEN liste biçiminde — çevrilecek bir şey yok.")
        return 2
    if not ilk and eski_bicim:
        print("🔴 tavan ESKİ biçimde (sayı). Önce `--tavan-yaz --ilk-dondurma`.")
        return 2
    if not ilk:
        r = kapi_olcumu()
        kirmizi = [s for s in r["satirlar"] if s.strip().startswith("✗")]
        if kirmizi:
            print("🔴 --tavan-yaz REDDEDİLDİ — kapıda ✗ var; tavan yalnız İNER:")
            for s in kirmizi:
                print("   " + s)
            return 1
    evren = eski.get("evren") or sorted(d["dosya"] for d in D["dosyalar"])
    ev = set(evren)
    K = kimlik_ozetle(D)
    if K["hata"] or K["sekme_olculemedi"]:
        print("🔴 ÖLÇÜLEMEDİ — ölçülemeyen ölçüm dondurulmaz: dosya hatası %s · sekme %d"
              % (K["hata"], K["sekme_olculemedi"]))
        return 2
    od, yk, ss, ok, yb, cb = [], [], [], [], [], []
    for d in D["dosyalar"]:
        if d.get("hata"):
            continue
        ad = d["dosya"]
        for x in d.get("odaksiz") or []:
            (od if ad in ev else yk).append({"k": x["k"], "d": ad})
        for x in d.get("sekme_sessiz") or []:
            ss.append({"k": x["k"], "kunye": x["kunye"], "d": ad})
        for x in d.get("okunmayan") or []:
            ok.append({"k": x["k"], "kunye": x["kunye"], "d": ad})
        for x in d.get("beyanli") or []:
            (cb if x.get("yol") == "OLAYLAR" else yb).append({"k": x["k"], "d": ad})
    srt = lambda L: sorted(L, key=lambda x: (x["k"], x.get("kunye", ""), x["d"]))  # noqa: E731
    if ilk:
        fark = []
        if len(od) != eski.get("odaksiz"):
            fark.append("odaksiz: tavan %s · ölçüm %d" % (eski.get("odaksiz"), len(od)))
        if len(yb) != eski.get("beyanli_yabanci"):
            fark.append("beyanli_yabanci: tavan %s · ölçüm %d"
                        % (eski.get("beyanli_yabanci"), len(yb)))
        if fark:
            print("🔴 --ilk-dondurma REDDEDİLDİ — ölçüm eski sayı tavanıyla TUTMUYOR "
                  "(önce farkı adıyla çöz, `§3.4 ⓪`):")
            for f in fark:
                print("   " + f)
            return 1
    tv = dict(eski)
    for k in ("beyanli_toplam",):
        tv.pop(k, None)
    tv.update({
        "odaksiz": len(od), "odaksiz_kimlik": srt(od),
        "yeni_kapsam_kimlik": srt(yk),
        "sekme_sessiz": len(ss), "sekme_sessiz_kimlik": srt(ss),
        "sekme_okunmayan": len(ok), "sekme_okunmayan_kimlik": srt(ok),
        "beyanli_yabanci": len(yb), "yabanci_beyanli_kimlik": srt(yb),
        "beyanli_cekirdek": len(cb), "cekirdek_beyanli_kimlik": srt(cb),
        "konumlu": T["KONUMLU"], "kutulu": T["KUTULU"], "madde": sum(T.values()),
        "bilinen_kusur": [{"k": x["k"], "t": x["t"], "alan": x["alan"],
                           "deger": x["deger"], "niye": x["niye"]} for x in kusur],
        "evren": evren,
        "evren_ozet": "".join(sorted(K["ozet"])),
        "kimlik_not": (
            "ODAK-KAPI-KIMLIK-1006: tavan SAYI degil KIMLIK LISTESI. Kimlik = t | NFC(b) "
            "(odak_cozum.js `kimlik`). Sayilar (`odaksiz`, `sekme_sessiz`, `beyanli_*`) "
            "listenin uzunlugudur ve SAGLAMA icin durur: elle degistirilirse kapi oter. "
            "`d` alani BILGIDIR, anahtar degildir: dosya degistiren kimlik TASINDI basilir, "
            "otmez. `evren_ozet` dondurmada VAR olan butun maddelerin sha1[:8] ozeti: "
            "bozulup yeni dosyaya tasinan madde YENI KAPSAM sayilmasin diye. "
            "`yabanci_beyanli_kimlik` / `cekirdek_beyanli_kimlik` bir TAVAN degil GOC "
            "bekcisidir: yabanci BEYANLI madde olaylar*'a tasinirsa kamera Osmanli "
            "kutusuna ucar ve kapi oter. Kamera kusurunun olcusu artik `sekme_sessiz`dir "
            "(maddenin GORUNDUGU kunye sekmesi), dosya adi degil."),
    })
    _json_yaz(tv)
    print()
    print("✓ TAVAN YAZILDI: %s" % os.path.relpath(TAVAN_YOL, KOK))
    print("  odaksiz %d · yeni kapsam %d · sekme sessiz %d · sekme okunmayan %d · "
          "yabancı beyanlı %d · çekirdek beyanlı %d · bilinen kusur %d · evren özeti %d"
          % (len(od), len(yk), len(ss), len(ok), len(yb), len(cb), len(kusur), len(K["ozet"])))
    return 0


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

    D = olc(tek, yay_dogrula="--yay-dogrula" in sys.argv)
    if D.get("hata"):
        print("🔴 ÖLÇÜLEMEDİ:", D["hata"])
        print("   ⚠️ ÖLÇÜLEMEDİ ≠ TEMİZ. Kapı bunu İHLAL sayar.")
        return 2

    ev = D.get("evren_sayi") or {}
    print("EVREN = TARAYICI · %d kaynak betik + %d satır içi · yerleşim %d · "
          "`AD_KONUM` %d ad (eski d/v/s havuzunda olmayan %d) · künye %d"
          % (D.get("yuklenen_kaynak", 0), D.get("satir_ici", 0), D.get("yerlesim", 0),
             D.get("ad_konum", 0), D.get("havuz_fark_eski_sehir", 0), D.get("kunye", 0)))
    print("madde: OLAYLAR %d · SEKME %d · AÇILAMAZ %d (sayıma girmez) · t+b ikizi "
          "sekmede görünür %d" % (ev.get("OLAYLAR", 0), ev.get("SEKME", 0),
                                  ev.get("ACILAMAZ", 0), ev.get("tb_ikizi_gorunur", 0)))
    for u in D.get("yuk_uyari") or []:
        print("   ⚠️ betik uyarısı: %s" % u)
    if D.get("disk_tarayicida_yok"):
        print("   ⚠️ diskte var, tarayıcı YÜKLEMİYOR: %s" % ", ".join(D["disk_tarayicida_yok"]))
    if D.get("app_sonrasi_kronoloji"):
        print("   ⚠️ app.js'ten SONRA yüklenen kronoloji (bağlama görmez): %s"
              % ", ".join(D["app_sonrasi_kronoloji"]))
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
            by = d.get("beyanli_yabanci") or 0
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
        print("🔴 BEYANLI→yabancı %d — devlet sekmesinde odak yok: kamera devletin "
              "O GÜNKÜ BÜTÜN gövdesine açılır" % beyan_yab)
        print("   (`devletiYay`); gövde yoksa künyenin tâbi/yerleşim kutusuna, o da yoksa "
              "kıpırdamaz (panel notu). Osmanlı kutusuna GİTMEZ.")
        print("   Osmanlı çekirdeğinde kalan meşru beyan: %d  (OLAYLAR yolu → "
              "o günün Osmanlı kutusu)" % (T["BEYANLI"] - beyan_yab))
        print("⇒ TOPLAM İŞ: %d madde (%.1f%%)" % (yuk_t, 100.0 * yuk_t / max(n, 1)))
        print()
        # 🆕 O1 — devlet sekmesi (`maddeAc`) gerçekte ne yapıyor
        S = sekme_ozet(D)
        print("DEVLET SEKMESİ (`maddeAc` yolu, %d madde) — kamera GERÇEKTE ne yapıyor:"
              % sum(S.values()))
        for k, tarif in (("SEKME_NOKTA", "yer_id çözülüyor → noktaya uçar"),
                         ("SEKME_KUTU", "kapsam_genis + odak kutusu kuruluyor"),
                         ("SEKME_GOVDE", "kapsam_genis, odak yok → devletin BÜTÜN gövdesi"),
                         ("SEKME_TABI_KUTU", "o gün GÖVDE YOK → künye kimliğiyle tâbi/yerleşim kutusu (KIRIM-ODAK-A)"),
                         ("SEKME_SESSIZ", "o gün GÖVDE YOK, tâbi kutusu da yok → kıpırdamaz (panel notu VAR)"),
                         ("SEKME_OLCULEMEDI", "DEVLET_HARITA tarayıcı evreninde yok — temiz DEĞİL"),
                         ("SEKME_KIPIRDAMAZ", "kapsam_genis yok, odak yok → kamera durur"),
                         ("SEKME_OKUNMAYAN", "odak/yer_kon YAZILMIŞ ama sekmede ETKİSİZ")):
            print("   %-18s %6d  %s" % (k, S[k], tarif))
        alt = D.get("sekme_alt") or {}
        if alt:
            print("   OKUNMAYAN ayrımı:", dict(sorted(alt.items())))
        og = D.get("sekme_okunmayan_govde") or {}
        if og:
            print("   OKUNMAYAN gövde maddelerinin gövde sonucu (OKUNMAYAN'da sayılır):",
                  dict(sorted(og.items())))
        if D.get("sekme_sessiz_neden"):
            print("   SESSİZ ayrımı:", dict(sorted(D["sekme_sessiz_neden"].items())))
        if D.get("sekme_nokta_odak_kimlik"):
            print("   ⓘ NOKTA dalında odak_kimlik yazılı %d madde — ham `m` (gi yok) ile"
                  " sorulur" % D["sekme_nokta_odak_kimlik"])
        ac = D.get("acilamaz_degisken") or {}
        if ac:
            print("AÇILAMAZ — yüklenen ama hiçbir ekranda açılamayan %d madde:"
                  % sum(ac.values()))
            for k, v in sorted(ac.items(), key=lambda r: -r[1]):
                print("   %-34s %5d" % (k, v))
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
        rc = tavan_yaz(D, T, beyan_yab, kusur, ilk="--ilk-dondurma" in sys.argv)
        if rc:
            return rc

    yd = D.get("yay_dogrulama")
    print()
    print(yay_satiri(D))
    if yd:
        print()
        print("GÖVDE TAKLİDİ ↔ GERÇEK `devletiYay` (%d halka): %s"
              % (yd["halka"], dict(sorted(yd["capraz"].items()))))
        print("   geometri boş (taklit YANLIŞ TEMİZ): %d · taklit YANLIŞ KİRLİ: %d"
              % (len(yd["ucuncu_return"]), len(yd["uyusmazlik"])))
        for x in (yd["ucuncu_return"] + yd["uyusmazlik"])[:20]:
            print("      %s" % x)

    jy = _arg("--json")
    if jy:
        io.open(jy, "w", encoding="utf-8").write(json.dumps(
            {"toplam": T, "beyanli_yabanci": beyan_yab, "sekme": sekme_ozet(D),
             "kusur": kusur, "dosyalar": D["dosyalar"],
             "evren": dict((k, D.get(k)) for k in (
                 "evren_sayi", "acilamaz_degisken", "sekme_alt", "sekme_sessiz_neden", "yerlesim",
                 "ad_konum", "havuz_fark_eski_sehir", "disk_tarayicida_yok",
                 "app_sonrasi_kronoloji", "yuk_uyari"))},
            ensure_ascii=False, indent=1))
        print("döküm yazıldı: %s" % jy)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
