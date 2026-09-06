# -*- coding: utf-8 -*-
"""⑯ KOL — MERGE BAĞIMLILIK HARİTASI.

Sevk: 1.MURAT, KOL-0907.md ⑯ (7 Eylül 2026). Mekanik iş, kaynak yargısı YOK.
SALT OKUMA — `data/` ve `arac/` DONUK (koşu 7b canlı), hiçbir dosyaya
YAZMAZ, veriye inmez, commit atmaz.

SORU: koşu bitince 15 kolun artefaktı `denetim/` altında birikecek. Hangi
sırayla `data/`ye inerlerse iş boşa gitmez?
  ① Her `yer_yama_*.js`in KULLANDIĞI kimlikleri çıkar (d:·s:·v:·isg:)
  ② Her `ONERI-KUNYE-*` / `YAMA-KUNYE-*`in TANIMLADIĞI kimlikleri çıkar
  ③ Her `ONERI-RENK-*`in BOYADIĞI kimlikleri çıkar
  ④ Kes: bir yamanın kullandığı kimlik
        · devletler.js'te VAR mı            → yoksa KÜNYE ÖNCE inmeli
        · renkler.BOYALAR'da anahtar VAR mı → yoksa RENK ÖNCE inmeli
          (renk `harita:` anahtarına bakar, `id`ye DEĞİL — dolaylama çözüldü)
  ⑤ Çıktı: denetim/MERGE-BAGIMLILIK-0907.json — sıra + her kenarın gerekçesi

🔴 İKİ TUZAK (sevk kendi ölçtü, ikisi de burada ELE ALINDI):
  ① `girdi.py` ÇIPLAK ad verir, yol değil. Bu araç `girdi.py`yi HİÇ
     KULLANMIYOR — `data/devletler.js` TEK SABİT yol, `denetim/` taraması
     kendi Glob'umdan geliyor (zaten tam yol). Yine de not: eğer ileride
     bu araç `girdi.py`nin dosya listesini kullanacak olursa "data/" öneki
     EKLENMEDEN `fs.existsSync` SESSİZCE atlar.
  ② yama dosyaları `ad:` / `{"ad":` iki yazım biçimi taşıyor — REGEX
     KULLANMADIM, her dosya `node`+`vm` ile GERÇEKTEN parse ediliyor (ayrı
     bir alt-süreç = ayrı bağlamda, "aynı window.X sessiz ezme" riski YOK
     çünkü her dosya kendi node çağrısında, kendi işleminde okunuyor).
"""
import io
import json
import os
import re
import subprocess
import sys
import glob as _glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))

DEVLETLER_YOLU = "data/devletler.js"

_NODE_DEVLETLER = r"""
const fs=require('fs'),vm=require('vm');
const ctx={window:{}}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[1],'utf8'), ctx);
const arr = ctx.window.DEVLETLER || [];
process.stdout.write(JSON.stringify(arr.map(k=>({id:k.id, harita:k.harita||null}))));
"""

_NODE_YAMA = r"""
const fs=require('fs'),vm=require('vm');
const p = process.argv[1];
const ctx={window:{}}; vm.createContext(ctx);
try { vm.runInContext(fs.readFileSync(p,'utf8'), ctx); }
catch (e) { process.stdout.write(JSON.stringify({hata:String(e)})); process.exit(0); }
const key = Object.keys(ctx.window).find(k => Array.isArray(ctx.window[k]));
const arr = key ? ctx.window[key] : [];
const kullanilan = [];
for (const rec of arr) {
  for (const kat of ['d','s','v','isg']) {
    for (const per of (rec[kat]||[])) {
      if (per && typeof per.d === 'string') {
        kullanilan.push({ad: rec.ad||null, alan: kat, kimlik: per.d, f: per.f||null, t: per.t||null});
      }
    }
  }
}
process.stdout.write(JSON.stringify({degisken:key, kayit_sayisi:arr.length, kullanilan}));
"""


def _node_calistir(js_kodu, *argv):
    r = subprocess.run(["node", "-e", js_kodu, "--", *argv],
                       capture_output=True, cwd=KOK)
    if r.returncode != 0:
        return {"hata": r.stderr.decode("utf-8", "replace")}
    try:
        return json.loads(r.stdout.decode("utf-8"))
    except Exception as e:
        return {"hata": "JSON ayrıştırılamadı: %r · stdout=%r" % (e, r.stdout[:300])}


def kunye_id_bul(obj, tanimlanan, guncellenen, id_onerisi_gorulen):
    """Bir künye-öneri JSON'unu ÖZYİNELİ tarar. Anahtar adı yerine ŞEKLE
    (id + künye-tipik komşu alan) bakar — bu proje şemasının 12 dosyada
    12 farklı üst-anahtar (`kunye`/`kunyeler`/iç içe) kullandığı ÖLÇÜLDÜ;
    tek bir sabit yol denemek bir kısmını sessizce KAÇIRIRDI."""
    if isinstance(obj, dict):
        if isinstance(obj.get("id"), str) and any(
                k in obj for k in ("ad", "f", "t", "ozet", "tur", "bolge")):
            tanimlanan.add(obj["id"])
        if isinstance(obj.get("id_onerisi"), str):
            tanimlanan.add(obj["id_onerisi"])
            id_onerisi_gorulen.append(obj["id_onerisi"])
        if isinstance(obj.get("hedef_kunye"), str):
            guncellenen.add(obj["hedef_kunye"])
        for v in obj.values():
            kunye_id_bul(v, tanimlanan, guncellenen, id_onerisi_gorulen)
    elif isinstance(obj, list):
        for it in obj:
            kunye_id_bul(it, tanimlanan, guncellenen, id_onerisi_gorulen)


def renk_id_bul(obj, boyanan):
    """ONERI-RENK-* dosyalarında `id` taşıyan her kayıt bir renk teklifidir
    (eski→yeni düzeltme de, yeni kimliğin İLK rengi de aynı şekilde
    sayılıyor — ikisi de merge sırası için "bu kimliğin bir rengi VAR"
    anlamına gelir)."""
    if isinstance(obj, dict):
        if isinstance(obj.get("id"), str):
            boyanan.add(obj["id"])
        for v in obj.values():
            renk_id_bul(v, boyanan)
    elif isinstance(obj, list):
        for it in obj:
            renk_id_bul(it, boyanan)


def main():
    rapor = {"olcum_zamani": "2026-09-07", "olcen": "SONNET HAZIR KITA 129 (⑩→⑯ KOL)"}

    # ── BASELINE ① — devletler.js: mevcut id kümesi + id→harita eşlemesi
    dv = _node_calistir(_NODE_DEVLETLER, DEVLETLER_YOLU)
    if "hata" in dv:
        print("🔴 ÖLÇÜLEMEDİ — devletler.js okunamadı:", dv["hata"])
        return 1
    BASELINE_ID = {k["id"] for k in dv}
    ID_TO_HARITA = {k["id"]: k["harita"] for k in dv if k.get("harita")}
    # 🔴 BULUNAN KUSUR (kendi ilk sürümümde): `d:` alanı çoğu zaman `id`
    # DEĞİL `harita:` değerini taşıyor (ör. `sirbistan-nemanjic` ·
    # `sirbistan-prensligi` · `sirbistan-kralligi`'nin ÜÇÜNÜN de
    # harita:"sirbistan"; yerleşim verisi doğrudan "sirbistan" yazıyor).
    # İlk sürüm yalnız `id`ye bakıyordu ve `sirbistan`·`ceneviz`·
    # `bulgaristan`·`sardinya`·`musa-celebi`·`suleyman-celebi`yi SAHTE
    # "künye YOK" diye raporlayacaktı — `data/devletler.js`i elle
    # `grep`leyerek YAKALADIM, "künye var, `harita:` başka anahtara
    # bakıyor" (CLAUDE.md §11) vakasının aynısı. Künye varlığı artık
    # id ∪ harita BİRLEŞİMİYLE sınanıyor.
    BASELINE_HARITA = set(ID_TO_HARITA.values())
    BASELINE_KUNYE_ANAHTAR = BASELINE_ID | BASELINE_HARITA
    rapor["baseline_kunye_sayisi"] = len(BASELINE_ID)
    rapor["baseline_harita_anahtar_sayisi"] = len(BASELINE_HARITA)

    # ── BASELINE ② — renkler.py BOYALAR anahtar kümesi
    import renkler as R
    BASELINE_RENK = set(R.BOYALAR.keys())
    rapor["baseline_renk_anahtar_sayisi"] = len(BASELINE_RENK)

    # ── ② TANIMLANAN KİMLİKLER — ONERI-KUNYE-* / YAMA-KUNYE-* (.json)
    kunye_dosyalari = sorted(
        _glob.glob("denetim/ONERI-KUNYE-*.json") +
        _glob.glob("denetim/YAMA-KUNYE-*.json"))
    TANIMLANAN = {}     # dosya -> set(id)
    GUNCELLENEN = {}    # dosya -> set(hedef_kunye) (YENİ id DEĞİL, mevcut kaydın düzeltmesi)
    id_onerisi_semasi = []  # bilinen şema sapması görülen dosyalar
    for f in kunye_dosyalari:
        try:
            d = json.load(open(f, encoding="utf-8"))
        except Exception as e:
            rapor.setdefault("json_hatasi", []).append({"dosya": f, "hata": str(e)})
            continue
        tan, gun, io_gor = set(), set(), []
        kunye_id_bul(d, tan, gun, io_gor)
        TANIMLANAN[f] = tan
        GUNCELLENEN[f] = gun
        if io_gor:
            id_onerisi_semasi.append(f)
    rapor["id_onerisi_sema_sapmasi_gorulen_dosyalar"] = id_onerisi_semasi

    # Ayrıca .md uzantılı öneri dosyaları — YAPISAL OKUNAMADI, ayrı kova.
    md_kunye = sorted(_glob.glob("denetim/ONERI-KUNYE-*.md"))
    rapor["kunye_md_okunmadi"] = md_kunye

    TUM_TANIMLANAN = set()
    for s in TANIMLANAN.values():
        TUM_TANIMLANAN |= s
    # hangi dosya hangi id'yi tanımlıyor (ilk bulunan dosya — birden fazla
    # dosya aynı id'yi tanımlıyorsa bu AYRICA raporlanır, sessizce üzerine
    # yazılmaz)
    KUNYE_SAHIBI = {}
    CAKISAN_KUNYE_TANIMI = {}
    for f, s in TANIMLANAN.items():
        for kid in s:
            if kid in KUNYE_SAHIBI:
                CAKISAN_KUNYE_TANIMI.setdefault(kid, [KUNYE_SAHIBI[kid]]).append(f)
            else:
                KUNYE_SAHIBI[kid] = f

    # ── ③ BOYANAN KİMLİKLER — ONERI-RENK-*.json
    renk_dosyalari = sorted(_glob.glob("denetim/ONERI-RENK-*.json"))
    md_renk = sorted(_glob.glob("denetim/ONERI-RENK-*.md"))
    rapor["renk_md_okunmadi"] = md_renk
    BOYANAN = {}
    for f in renk_dosyalari:
        try:
            d = json.load(open(f, encoding="utf-8"))
        except Exception as e:
            rapor.setdefault("json_hatasi", []).append({"dosya": f, "hata": str(e)})
            continue
        b = set()
        renk_id_bul(d, b)
        BOYANAN[f] = b
    TUM_BOYANAN = set()
    for s in BOYANAN.values():
        TUM_BOYANAN |= s
    RENK_SAHIBI = {}
    for f, s in BOYANAN.items():
        for kid in s:
            RENK_SAHIBI.setdefault(kid, []).append(f)

    # ── ① KULLANILAN KİMLİKLER — yer_yama_*.js (her dosya AYRI node
    #    alt-süreci = ayrı bağlam, sessiz ezme riski yok)
    yama_dosyalari = sorted(_glob.glob("denetim/yer_yama_*.js"))
    YAMA_KULLANIM = {}   # dosya -> {"kayit_sayisi":n, "kullanilan": [...] }
    for f in yama_dosyalari:
        sonuc = _node_calistir(_NODE_YAMA, f)
        YAMA_KULLANIM[f] = sonuc

    # ── ④ KESİŞİM — her yamanın her kullandığı kimlik için künye/renk durumu
    kenarlar = []          # bağımlılık kenarları (yama -> künye/renk dosyası)
    coz_yok = []           # ne baseline'da ne önerilerde bulunan kimlikler
    dosya_ozet = []

    for f, sonuc in YAMA_KULLANIM.items():
        if "hata" in sonuc:
            dosya_ozet.append({"yama": f, "hata": sonuc["hata"]})
            continue
        kullanilan = sonuc.get("kullanilan", [])
        kimlikler = sorted({k["kimlik"] for k in kullanilan})
        kunye_eksik, renk_eksik, coz_yok_bu = [], [], []
        kimlik_durum = {}
        for kid in kimlikler:
            # KÜNYE durumu — id ∪ harita birleşimiyle (yukarıdaki not)
            if kid in BASELINE_KUNYE_ANAHTAR:
                kunye_durum = "mevcut"
            elif kid in KUNYE_SAHIBI:
                kunye_durum = "bekliyor:" + KUNYE_SAHIBI[kid]
                kenarlar.append({"yama": f, "once_gerekli": KUNYE_SAHIBI[kid],
                                  "tur": "kunye", "kimlik": kid})
            else:
                kunye_durum = "YOK"
                coz_yok_bu.append(kid)

            # RENK durumu — dolaylama: önce BASELINE'daki (ya da yeni
            # tanımlanan) künyenin `harita:` alanına bak, yoksa id'nin
            # kendisine.
            boya_anahtari = ID_TO_HARITA.get(kid, kid)
            if boya_anahtari in BASELINE_RENK or kid in BASELINE_RENK:
                renk_durum = "mevcut"
            elif boya_anahtari in RENK_SAHIBI or kid in RENK_SAHIBI:
                kaynaklar = RENK_SAHIBI.get(boya_anahtari) or RENK_SAHIBI.get(kid)
                renk_durum = "bekliyor:" + ",".join(kaynaklar)
                for kaynak in kaynaklar:
                    kenarlar.append({"yama": f, "once_gerekli": kaynak,
                                      "tur": "renk", "kimlik": kid})
            else:
                renk_durum = "YOK"
                if kunye_durum != "YOK":  # künyesi de yoksa zaten kova ①'de
                    coz_yok_bu.append(kid + " (renk)")

            kimlik_durum[kid] = {"kunye": kunye_durum, "renk": renk_durum}

        if coz_yok_bu:
            coz_yok.append({"yama": f, "kimlikler": coz_yok_bu})

        dosya_ozet.append({
            "yama": f,
            "degisken": sonuc.get("degisken"),
            "kayit_sayisi": sonuc.get("kayit_sayisi"),
            "kullanilan_benzersiz_kimlik": len(kimlikler),
            "kimlikler": kimlikler,
            "kimlik_durum": kimlik_durum,
            "hazir_mi": not coz_yok_bu and not any(
                v["kunye"].startswith("bekliyor") or v["renk"].startswith("bekliyor")
                for v in kimlik_durum.values()),
        })

    # ── TOPOLOJİK SIRA — basit üç katman (künye < renk < yama), bunun
    #    İÇİNDE künye/renk dosyaları arasında bilinen bir bağımlılık
    #    ÖLÇÜLMEDİ (mekanik tarama bunu görmüyor — hiçbir künye önerisi
    #    başka bir künye önerisine `hedef_kunye` ile işaret etmiyor;
    #    ÖLÇTÜM, 0 çıktı).
    kunye_katman = sorted(TANIMLANAN.keys())
    renk_katman = sorted(BOYANAN.keys())
    yama_katman = sorted(f for f in YAMA_KULLANIM.keys())

    rapor["sira"] = {
        "1_KUNYE_ONCE": kunye_katman,
        "2_RENK_SONRA": renk_katman,
        "3_YAMA_EN_SON": yama_katman,
        "gerekce": "Künye ve renk dosyaları arasında birbirine bağımlılık"
                   " ÖLÇÜLMEDİ (0 `hedef_kunye` künye-öneri dosyasına işaret"
                   " ediyor) — ikisi PARALEL inebilir, ikisi de yamalardan"
                   " ÖNCE inmeli."
    }
    rapor["kenarlar"] = kenarlar
    rapor["kenar_sayisi"] = len(kenarlar)
    rapor["kunye_tanimlanan_dosya_sayisi"] = len(TANIMLANAN)
    rapor["kunye_guncellenen_hedef_sayisi"] = len({k for s in GUNCELLENEN.values() for k in s})
    rapor["renk_boyanan_dosya_sayisi"] = len(BOYANAN)
    rapor["yama_dosya_sayisi"] = len(YAMA_KULLANIM)
    rapor["cakisan_kunye_tanimi"] = CAKISAN_KUNYE_TANIMI
    rapor["coz_yok_kimlikler"] = coz_yok
    rapor["yama_ozet"] = dosya_ozet
    rapor["kunye_tanimlayan_id_listesi"] = {f: sorted(s) for f, s in TANIMLANAN.items()}
    rapor["kunye_guncelleyen_id_listesi"] = {f: sorted(s) for f, s in GUNCELLENEN.items()}
    rapor["renk_boyayan_id_listesi"] = {f: sorted(s) for f, s in BOYANAN.items()}

    # ── ÖLÇÜLEMEYEN / KAPSAM DIŞI — açıkça
    rapor["OLCULEMEDI_kapsam_disi"] = {
        "not": "Görev tanımı YALNIZ üç kalıbı adlandırdı (yer_yama_*.js ·"
               " ONERI-KUNYE-*/YAMA-KUNYE-* · ONERI-RENK-*). Aşağıdaki"
               " benzer adlı dosyalar İSTENMEDİĞİ için TARANMADI — kimlik"
               " taşıyıp taşımadıkları bilinmiyor.",
        "dosyalar": sorted(
            _glob.glob("denetim/YAMA-1923-*.json") +
            _glob.glob("denetim/YAMA-ZEND-*.json") +
            _glob.glob("denetim/YAMA-HAYALET-*.json") +
            _glob.glob("denetim/YAMA-VASSAL-*.json") +
            _glob.glob("denetim/YAMA-ISG-*.json") +
            _glob.glob("denetim/ORTADOGU-YAMA-*.json")
        ),
    }

    cikti_yolu = "denetim/MERGE-BAGIMLILIK-0907.json"
    with open(cikti_yolu, "w", encoding="utf-8") as fh:
        json.dump(rapor, fh, ensure_ascii=False, indent=1)

    print("🟢 YAZILDI:", cikti_yolu)
    print("  yama dosyası:", len(YAMA_KULLANIM), "· künye-tanımlayan dosya:", len(TANIMLANAN),
          "· renk-boyayan dosya:", len(BOYANAN))
    print("  bağımlılık kenarı:", len(kenarlar), "· çözümsüz kimlik taşıyan yama:", len(coz_yok))
    if CAKISAN_KUNYE_TANIMI:
        print("  🔴 ÇAKIŞAN KÜNYE TANIMI:", CAKISAN_KUNYE_TANIMI)
    return 0


if __name__ == "__main__":
    sys.exit(main())
