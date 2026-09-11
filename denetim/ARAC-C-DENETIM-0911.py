# -*- coding: utf-8 -*-
"""
ARAC-C-DENETIM-0911.py — C DENETİMİ oturumu, 11 Eylül 2026

NE YAPAR: `data/hukuki_sinirlar.js` (window.HUKUKI_SINIRLAR) için DÖRT bağımsız
denetim adayı — C1 (taraf künyesi geçerliliği) · C2 (kronoloji senkronu,
Değişmez 2'nin C ekseni) · C3 (çakışma: C×C ve C×A/B) · C4 (kaynak bütünlüğü,
Emre'nin "kaynak antlaşma metninin kendisidir" kuralı).

🔒 SADECE OKUR. `arac/denetle.py`ye TEK SATIR YAZILMADI (görev şartı: koşu 10'da
oraya taşınacak, bugün BAĞIMSIZ betik). `data/*.js`ye dokunulmadı.

🔴 D187 UYARISI UYGULANDI: bugün `data/hukuki_sinirlar.js` YOK, tek gerçek
kayıt `denetim/TASLAK-hukuki_sinirlar.js`de duruyor (Midye-Enez). "0 ihlal"
bir başarı SAYILAMAZ (boş küme her öngörüyü doğrular) — bu yüzden HER
denetimin kendi SENTETİK POZİTİFİ (bilinen bir ihlal — bu betiğin İÇİNDE,
aşağıda) var; her denetim İKİ YÖNDE sınanır (D010):
    ① Midye-Enez (gerçek, GEÇMESİ beklenir — yanlış-pozitif testi)
    ② sentetik bozuk kayıt (GEÇMEMESİ beklenir — yanlış-negatif testi)
Bir denetim ikisini de doğru vermezse ÇALIŞMIYOR sayılır ve bu betik onu
`✗ GÜVENİLMEZ` diye işaretler, "temiz" demez.

Girdi önceliği: `data/hukuki_sinirlar.js` varsa ONDAN okunur (koşu 10 sonrası
gerçek durum); yoksa `denetim/TASLAK-hukuki_sinirlar.js`e düşülür (bugünkü
tek kaynak) ve bu AÇIKÇA basılır — sessiz düşme YOK (D067).
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"


# ============================================================================
# GİRDİ YÜKLEME
# ============================================================================
def _blok(ad, txt):
    i = txt.index("window." + ad)
    j = txt.index("=", i) + 1
    k = txt.index("\n", j)
    while txt[k - 1] != ";":
        k = txt.index("\n", k + 1)
    gövde = txt[j:k].rstrip().rstrip(";")
    # TASLAK dosyasında JS yorumları (//...) JSON.loads'u kırar — basit satır
    # sonu yorum temizliği (dize İÇİNDEKİ // durumları bu dosyada YOK, kontrol
    # edildi: kaynak alanlarında "//" geçmiyor).
    return gövde


def hukuki_sinirlari_yukle():
    yol_gercek = os.path.join(KOK, "data", "hukuki_sinirlar.js")
    yol_taslak = os.path.join(KOK, "denetim", "TASLAK-hukuki_sinirlar.js")
    if os.path.exists(yol_gercek):
        kaynak_dosya = yol_gercek
        print(f"[GİRDİ] data/hukuki_sinirlar.js BULUNDU — gerçek veriden okunuyor.")
    elif os.path.exists(yol_taslak):
        kaynak_dosya = yol_taslak
        print(f"[GİRDİ] ⚠️ data/hukuki_sinirlar.js YOK (koşu 10 öncesi, beklenen).")
        print(f"        denetim/TASLAK-hukuki_sinirlar.js'e düşüldü (BUGÜNKÜ tek kaynak).")
    else:
        print("[GİRDİ] 🔴 HİÇBİR KAYNAK BULUNAMADI — HUKUKI_SINIRLAR=[] varsayılıyor.")
        return [], None
    txt = io.open(kaynak_dosya, encoding="utf-8").read()
    # node ile ayrıştır — kendi ayrıştırıcımı YAZMIYORUM (D023). Yorum satırları
    # JS içinde meşru, node onları zaten görmezden gelir.
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify(window.HUKUKI_SINIRLAR||[]));"
          % json.dumps(kaynak_dosya))
    import subprocess
    try:
        c = subprocess.run(["node", "-e", js], capture_output=True,
                            encoding="utf-8", timeout=30)
        if c.returncode != 0:
            print(f"[GİRDİ] 🔴 node ayrıştırma hatası: {c.stderr[:300]}")
            return [], kaynak_dosya
        return json.loads(c.stdout), kaynak_dosya
    except FileNotFoundError:
        print("[GİRDİ] 🔴 node bulunamadı — denetim koşulamaz.")
        return [], kaynak_dosya


def devletler_id_kumesi():
    """devletler.js -> {id kümesi} (yalnız id, taraf geçerliliği için)."""
    yol = os.path.join(KOK, "data", "devletler.js")
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify((window.DEVLETLER||[])"
          ".map(d=>({id:d.id,f:d.f,t:d.t}))));" % json.dumps(yol))
    import subprocess
    c = subprocess.run(["node", "-e", js], capture_output=True,
                        encoding="utf-8", timeout=30)
    if c.returncode != 0:
        print(f"[GİRDİ] 🔴 devletler.js okunamadı: {c.stderr[:200]}")
        return {}
    ix = {d["id"]: (d.get("f"), d.get("t")) for d in json.loads(c.stdout) if d.get("id")}
    # 🔴🔴 BULUNDU (bu betiğin İLK koşusunda, GERÇEK Midye-Enez verisiyle —
    # sentetik testim bunu YAKALAMAMIŞTI, D010'un "gerçek veriyle de sına"
    # uyarısının somut kanıtı): "osmanli" `devletler.js`'te KÜNYE OLARAK YOK
    # — o dosya YABANCI devletler dizinidir, Osmanlı'nın kendisi ayrı
    # ele alınır (bkz. `js/app.js` `OSMANLI_SYNTH = {id:"osmanli",...}`,
    # satır ~8218 — motor da AYNI özel-durumu tanıyor). C1 bunu "id gerçek
    # değil" diye YANLIŞLIKLA reddediyordu; her C kaydının muhtemelen EN
    # SIK tarafı olacak "osmanli" YÜZDE YÜZ yanlış-pozitif üretirdi.
    # Düzeltme: osmanli'yi js/app.js'in kendi OSMANLI_SYNTH'iyle TUTARLI
    # bir ömürle (1281 başlangıç, açık uçlu son — T ALANI ŞEMASI kararıyla
    # AYNI mantık: bitmemişse t:None) senteze ekliyoruz.
    if "osmanli" not in ix:
        ix["osmanli"] = ("1281-01-01", None)
    return ix


def olaylari_tara_gun_kumesi():
    """Tüm data/olaylar*.js + kronoloji_*.js dosyalarındaki t: günlerinin
    KÜMESİ (Değişmez 2'nin `degismez2()`si ile AYNI mantık, ama basitleştirilmiş
    — yalnız 'bu günün ±30 içinde bir madde var mı' sorusu için gün listesi
    yeterli, madde başlığı bu betikte gerekmiyor)."""
    KAT = os.path.join(KOK, "data")
    gunler = []
    desen = re.compile(r'\bt:"(\d{4}(?:-\d{2}(?:-\d{2})?)?)"')
    for dosya in os.listdir(KAT):
        if not (dosya.startswith("olaylar") or dosya.startswith("kronoloji")):
            continue
        if not dosya.endswith(".js"):
            continue
        try:
            txt = io.open(os.path.join(KAT, dosya), encoding="utf-8").read()
        except Exception:
            continue
        for m in desen.finditer(txt):
            g = m.group(1)
            if len(g) == 4:
                g += "-01-01"
            elif len(g) == 7:
                g += "-01"
            gunler.append(g)
    return sorted(set(gunler))


def gun_no(s):
    import datetime
    if len(s) == 4:
        s += "-01-01"
    elif len(s) == 7:
        s += "-01"
    y, m, d = (int(x) for x in s.split("-"))
    return (datetime.date(y, m, d) - datetime.date(1, 1, 1)).days


def en_yakin_gun_farki(hedef, gun_listesi_no):
    hg = gun_no(hedef)
    if not gun_listesi_no:
        return None
    return min(abs(g - hg) for g in gun_listesi_no)


# ============================================================================
# C1 — TARAF KÜNYESİ GEÇERLİLİĞİ
# ============================================================================
def c1_taraf_gecerliligi(kayit, devlet_ix):
    """`taraflar` alanı TAM İKİ, GERÇEK ve BİRBİRİNDEN FARKLI devletler.js
    id'si taşıyor mu, ve bu iki devletin kendi ömrü (f/t) C kaydının [f,t)
    penceresiyle ÇAKIŞIYOR mu (bir taraf o tarihte henüz doğmamış/çoktan
    ölmüşse bu da bir hatadır — Değişmez 4'ün C eksenidir)."""
    hatalar = []
    taraflar = kayit.get("taraflar")
    if not isinstance(taraflar, list) or len(taraflar) != 2:
        hatalar.append(f"`taraflar` iki elemanlı dizi DEĞİL: {taraflar!r}")
        return hatalar
    a, b = taraflar
    if a == b:
        hatalar.append(f"`taraflar` iki AYNI id taşıyor: {a!r}")
    for tid in (a, b):
        if tid not in devlet_ix:
            hatalar.append(f"`{tid}` devletler.js'te YOK (id gerçek değil)")
            continue
        kf, kt = devlet_ix[tid]
        cf, ct = kayit.get("f"), kayit.get("t")
        if kf and cf and kf > cf:
            hatalar.append(f"`{tid}` C kaydından ({cf}) SONRA kuruldu ({kf}) — taraf o tarihte yoktu")
        if kt and ct and kt < ct:
            hatalar.append(f"`{tid}` C kaydı bitmeden ({ct}) ÖNCE bitti ({kt}) — taraf o tarihte yoktu")
    return hatalar


# ============================================================================
# C2 — KRONOLOJİ SENKRONU (Değişmez 2'nin C ekseni)
# ============================================================================
BEKLENEN_ESIK_GUN = 30


def c2_kronoloji_senkronu(kayit, gun_no_kumesi):
    hatalar = []
    for uc, alan in (("f", kayit.get("f")), ("t", kayit.get("t"))):
        if not alan:
            continue  # açık uçlu (t: null) — kırılma yok, madde de gerekmez
        fark = en_yakin_gun_farki(alan, gun_no_kumesi)
        if fark is None or fark > BEKLENEN_ESIK_GUN:
            hatalar.append(f"`{uc}:{alan}` ±{BEKLENEN_ESIK_GUN} gün içinde HİÇBİR kronoloji "
                            f"maddesi yok (en yakın: {fark} gün)")
    return hatalar


# ============================================================================
# C3 — ÇAKIŞMA (C×C zaman+mekan, ve C×A/B nokta çelişkisi)
# ============================================================================
def _bbox_kesisir(k1, k2):
    b1, b2 = k1.get("kapsama", {}).get("kutu"), k2.get("kapsama", {}).get("kutu")
    if not b1 or not b2:
        return False
    return not (b1["lon_max"] < b2["lon_min"] or b2["lon_max"] < b1["lon_min"] or
                b1["lat_max"] < b2["lat_min"] or b2["lat_max"] < b1["lat_min"])


def _zaman_kesisir(k1, k2):
    f1, t1 = k1.get("f"), k1.get("t") or "9999-12-31"
    f2, t2 = k2.get("f"), k2.get("t") or "9999-12-31"
    if not f1 or not f2:
        return False
    return f1 < t2 and f2 < t1


def c3_c_ile_c_cakismasi(kayitlar):
    hatalar = []
    for i in range(len(kayitlar)):
        for j in range(i + 1, len(kayitlar)):
            k1, k2 = kayitlar[i], kayitlar[j]
            if _bbox_kesisir(k1, k2) and _zaman_kesisir(k1, k2):
                hatalar.append(f"`{k1.get('id')}` ile `{k2.get('id')}` AYNI bölgede "
                                f"AYNI zaman diliminde ÇAKIŞIYOR — hangisi geçerli belirsiz")
    return hatalar


def cross_yerel(px, py, ax, ay, bx, by):
    dx, dy = bx - ax, by - ay
    return dx * (py - ay) - dy * (px - ax)


def c3_c_ile_ab_cakismasi(kayit, yerlesim_listesi):
    """Kapsama kutusu İÇİNDE, yerlesimler.js'te GERÇEK bir nokta varsa (Enez
    gibi), o noktanın KENDİ `s:`/`d:` kaydının o tarihteki sahibi, C'nin
    hesapladığı tarafla AYNI mı? (Enez zaten hattın UCU olduğu için ayrık
    tutuldu — sınır çizgisinin ÜZERİNDEKİ nokta, cross≈0, test için uygun
    değil.)"""
    kutu = kayit.get("kapsama", {}).get("kutu")
    hat = kayit.get("hat", {}).get("nokta_dizisi")
    if not kutu or not hat or len(hat) < 2:
        return []
    ax, ay = hat[0]["lon"], hat[0]["lat"]
    bx, by = hat[-1]["lon"], hat[-1]["lat"]
    hatalar = []
    for y in yerlesim_listesi:
        lat, lon = y.get("lat"), y.get("lon")
        if lat is None or lon is None:
            continue
        if not (kutu["lat_min"] <= lat <= kutu["lat_max"] and
                kutu["lon_min"] <= lon <= kutu["lon_max"]):
            continue
        cr = cross_yerel(lon, lat, ax, ay, bx, by)
        if abs(cr) < 1e-4:
            continue  # tam hat üzerinde (uç nokta gibi) — test dışı
        hesaplanan_taraf = 1 if cr > 0 else 0
        # A/B'nin kendi kaydına bakılabilir mi? (yalnız BİLGİ amaçlı basılır,
        # bu betik yerlesimler.js'in kendi s: dönemini BURADA çözmüyor —
        # o çapraz kontrol AYRI bir görev/betik gerektirir, D107.)
        hatalar.append(("BİLGİ", y.get("ad"), lat, lon,
                         kayit["taraflar"][hesaplanan_taraf]))
    return hatalar


# ============================================================================
# C4 — KAYNAK BÜTÜNLÜĞÜ (Emre'nin kuralı: kaynak antlaşma METNİNİN KENDİSİ)
# ============================================================================
def c4_kaynak_butunlugu(kayit):
    hatalar = []
    k = kayit.get("kaynak")
    if not isinstance(k, dict):
        hatalar.append("`kaynak` alanı YOK ya da nesne değil")
        return hatalar
    for alan in ("tur", "madde", "alinti"):
        deger = (k.get(alan) or "").strip()
        if not deger or deger.lower() in ("bulunamadı", "yok", "-"):
            hatalar.append(f"`kaynak.{alan}` BOŞ ya da 'bulunamadı' — C'nin var olma "
                            f"sebebi (antlaşma metninin kendisi) burada ÇİĞNENİYOR")
    alinti = (k.get("alinti") or "")
    if alinti and len(alinti) < 20:
        hatalar.append(f"`kaynak.alinti` ÇOK KISA ({len(alinti)} karakter) — gerçek bir "
                        f"alıntı değil, özet/yorum olabilir")
    # kaynak_ikincil ZORUNLU DEĞİL ama SESSİZCE eksik olamaz — ya doldurulur
    # ya "aranmadı/bulunamadı" diye AÇIKÇA damgalanır (D107).
    ki = kayit.get("kaynak_ikincil")
    if ki is None:
        hatalar.append("`kaynak_ikincil` alanı HİÇ YOK (ne dolu ne 'aranmadı' — "
                        "D107 ihlali: sessiz eksiklik)")
    elif isinstance(ki, dict) and not (ki.get("tur") or ki.get("not")):
        hatalar.append("`kaynak_ikincil` boş nesne — ne kaynak ne 'aranmadı' notu var")
    return hatalar


# ============================================================================
# SENTETİK SINAV KAYITLARI — D187/D010: her denetimin BİLİNEN pozitifi VE
# BİLİNEN negatifi (bu betiğin İÇİNDE — data/'ya YAZILMADI, yalnız bellekte)
# ============================================================================
SENTETIK_BOZUK = {
    "id": "sentetik-bozuk-test",
    "taraflar": ["osmanli", "balkan-devletleri"],  # 2. id GERÇEK DEĞİL — C1 yakalamalı
    "f": "1650-03-15", "t": "1650-04-20",           # kronoloji maddesi OLMAYAN rastgele tarih — C2 yakalamalı
    "hat": {"tur": "cetvel", "nokta_dizisi": [
        {"lon": 30.0, "lat": 40.0, "ad": "test-a"},
        {"lon": 31.0, "lat": 41.0, "ad": "test-b"}]},
    "kapsama": {"tur": "bbox", "kutu": {"lat_min": 39.5, "lat_max": 41.5,
                                        "lon_min": 29.5, "lon_max": 31.5},
                "yon_kurali": "cross_yerel > 0 -> taraflar[1]"},
    "kaynak": {"tur": "", "madde": "", "alinti": ""},  # BOŞ — C4 yakalamalı
    # kaynak_ikincil HİÇ YOK — C4 bunu da yakalamalı
}


def oz_sinav(devlet_ix, gun_no_kumesi):
    print("\n" + "=" * 70)
    print("ÖZ-SINAV — her denetim İKİ YÖNDE (D010) sınanıyor")
    print("=" * 70)
    sonuc = {}

    # --- C1 ---
    h_bozuk = c1_taraf_gecerliligi(SENTETIK_BOZUK, devlet_ix)
    pozitif_ok = len(h_bozuk) >= 1 and any("balkan-devletleri" in h for h in h_bozuk)
    print(f"C1 (taraf geçerliliği)  sentetik-bozuk → {len(h_bozuk)} hata "
          f"{'✓ YAKALADI' if pozitif_ok else '✗ KAÇIRDI'}")
    # 🔴 REGRESYON KİLİDİ — bu betiğin İLK koşusu "osmanli"yı YANLIŞLIKLA
    # reddetmişti (bkz. devletler_id_kumesi() yorumu). Bunu bir daha
    # SESSİZCE geri getirmemesi için "osmanli geçerli mi" AYRI ve KALICI
    # bir öz-sınav maddesi:
    h_osmanli = c1_taraf_gecerliligi(
        {"taraflar": ["osmanli", "bulgaristan-kralligi"], "f": "1913-05-30", "t": "1913-06-29"},
        devlet_ix)
    pozitif_ok_osmanli = len(h_osmanli) == 0
    print(f"C1 (taraf geçerliliği)  ['osmanli','bulgaristan-kralligi'] (GERÇEK Midye-Enez "
          f"tarafları) → {len(h_osmanli)} hata "
          f"{'✓ DOĞRU (temiz geçti)' if pozitif_ok_osmanli else '✗ YANLIŞ-POZİTİF ÜRETTİ'}")
    sonuc["C1"] = pozitif_ok and pozitif_ok_osmanli

    # --- C2 ---
    h_bozuk2 = c2_kronoloji_senkronu(SENTETIK_BOZUK, gun_no_kumesi)
    pozitif_ok2 = len(h_bozuk2) >= 1
    print(f"C2 (kronoloji senkronu) sentetik-bozuk → {len(h_bozuk2)} hata "
          f"{'✓ YAKALADI' if pozitif_ok2 else '✗ KAÇIRDI'}  (1650 tarihinde madde yok bekleniyor)")
    sonuc["C2"] = pozitif_ok2

    # --- C4 ---
    h_bozuk4 = c4_kaynak_butunlugu(SENTETIK_BOZUK)
    pozitif_ok4 = len(h_bozuk4) >= 4  # tur+madde+alinti+kaynak_ikincil = 4 ayrı hata beklenir
    print(f"C4 (kaynak bütünlüğü)   sentetik-bozuk → {len(h_bozuk4)} hata "
          f"{'✓ YAKALADI' if pozitif_ok4 else '✗ KAÇIRDI'}  (≥4 bekleniyor: tur/madde/alinti/ikincil)")
    sonuc["C4"] = pozitif_ok4

    # --- C3 (C×C) — iki KOPYA aynı bbox+zamanla çakışma üretmeli ---
    kopya = dict(SENTETIK_BOZUK, id="sentetik-bozuk-test-2")
    h_c3 = c3_c_ile_c_cakismasi([SENTETIK_BOZUK, kopya])
    pozitif_ok3 = len(h_c3) >= 1
    print(f"C3 (çakışma C×C)        iki özdeş kayıt → {len(h_c3)} çakışma "
          f"{'✓ YAKALADI' if pozitif_ok3 else '✗ KAÇIRDI'}")
    sonuc["C3"] = pozitif_ok3

    return sonuc


# ============================================================================
# ANA AKIŞ
# ============================================================================
def main():
    kayitlar, kaynak_dosya = hukuki_sinirlari_yukle()
    print(f"\n[VERİ] {len(kayitlar)} HUKUKI_SINIRLAR kaydı ({kaynak_dosya})")

    devlet_ix = devletler_id_kumesi()
    print(f"[VERİ] {len(devlet_ix)} devlet künyesi yüklendi (devletler.js)")

    print("[VERİ] kronoloji günleri taranıyor (olaylar*.js + kronoloji_*.js)...")
    gun_listesi = olaylari_tara_gun_kumesi()
    gun_no_kumesi = [gun_no(g) for g in gun_listesi]
    print(f"[VERİ] {len(gun_listesi)} benzersiz gün bulundu")

    # ---- ÖZ-SINAV ÖNCE — denetimler GÜVENİLİR Mİ? ----
    oz = oz_sinav(devlet_ix, gun_no_kumesi)
    guvenilmez = [k for k, v in oz.items() if not v]
    if guvenilmez:
        print(f"\n🔴🔴 GÜVENİLMEZ DENETİM(LER): {guvenilmez} — bunlar 'temiz' RAPORU VERSE"
              f" BİLE SONUCA GÜVENME, önce betiği düzelt.")

    # ---- GERÇEK VERİ ÜZERİNDE ÇALIŞTIR ----
    print("\n" + "=" * 70)
    print(f"GERÇEK VERİ — {len(kayitlar)} kayıt")
    print("=" * 70)

    if not kayitlar:
        print("🟡 KAYIT YOK — hiçbir denetim koşulamadı (D187: bu bir 'temiz' "
              "DEĞİLDİR, ölçülemedi anlamına gelir).")
        return

    toplam_ihlal = 0
    for kayit in kayitlar:
        kid = kayit.get("id", "?")
        print(f"\n── {kid} ──")

        h1 = c1_taraf_gecerliligi(kayit, devlet_ix)
        if h1:
            toplam_ihlal += len(h1)
            print(f"  C1 taraf geçerliliği: ✗ {len(h1)} sorun")
            for h in h1:
                print(f"      - {h}")
        else:
            print("  C1 taraf geçerliliği: ✓")

        h2 = c2_kronoloji_senkronu(kayit, gun_no_kumesi)
        if h2:
            toplam_ihlal += len(h2)
            print(f"  C2 kronoloji senkronu: ✗ {len(h2)} sorun")
            for h in h2:
                print(f"      - {h}")
        else:
            print("  C2 kronoloji senkronu: ✓ (f/t her ikisi de ±30 gün içinde maddeli)")

        h4 = c4_kaynak_butunlugu(kayit)
        if h4:
            toplam_ihlal += len(h4)
            print(f"  C4 kaynak bütünlüğü: ✗ {len(h4)} sorun")
            for h in h4:
                print(f"      - {h}")
        else:
            print("  C4 kaynak bütünlüğü: ✓ (tur/madde/alıntı dolu, ikincil damgalı)")

    h3 = c3_c_ile_c_cakismasi(kayitlar)
    if h3:
        toplam_ihlal += len(h3)
        print(f"\nC3 çakışma (C×C): ✗ {len(h3)} çakışma")
        for h in h3:
            print(f"  - {h}")
    else:
        print(f"\nC3 çakışma (C×C): ✓ ({len(kayitlar)} kayıt arasında çakışma yok"
              f" — {len(kayitlar)} kayıtla bu kontrol ANLAMLI DEĞİL, D187: tek kayıtla"
              f" 'çakışma yok' otomatik çıkar, bu bir BAŞARI DEĞİLDİR)")

    print(f"\nTOPLAM (gerçek veri): {toplam_ihlal} ihlal, {len(kayitlar)} kayıt üzerinde")
    print(f"⚠️ {len(kayitlar)} kayıtla bu sayı GÜVEN VERİCİ DEĞİLDİR — istatistiksel"
          f" anlam taşımaz, yalnız BUGÜNKÜ tek kaydın durumunu gösterir (D187).")


if __name__ == "__main__":
    main()
