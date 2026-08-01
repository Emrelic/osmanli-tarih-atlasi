# -*- coding: utf-8 -*-
"""
DENETLE_YAYIN — index.html'in istediği her dosya gerçekten yayınlanıyor mu?
============================================================================

Bu araç bir vakadan doğdu. 2026-07-30'da `data/olaylar_ek8.js` şu durumdaydı:

    index.html    <script src="data/olaylar_ek8.js?v=r70"></script>   ✓ commit'li
    data/olaylar_ek8.js                                               ✗ UNTRACKED

Yayın o dosyada 404 alıyordu. `js/app.js` `window.OLAYLAR_EK8 || []` kalıbını
kullandığı için sayfa ÇÖKMÜYORDU — beş kronoloji maddesi (Şehrizor 1554, Fizan
1577, Nahçıvan 1585, Azak 1637, Limni 1657) canlıda sessizce yoktu. Dört commit
boyunca kimse görmedi.

Kök sebep bir yazım hatası değil, PARALEL OTURUM tuzağı: bir oturum
`arac/surum_damgala.py` çalıştırıp `index.html`'i commit ediyor, ama o dosya
başka oturumun eklediği yeni `<script>` satırını da taşıyor ve o oturumun
veri dosyası henüz untracked. `git add index.html` masum görünüyor.

Aynı sınıf o gün üç kez vurdu:
  1. Başka oturumun 13 yerleşim eklemesi benim commit'ime karıştı (mesaj
     sayıları yanlış kaldı)
  2. Benim düzenlemem koşan üretimin ortasına düştü (üretim çöpe gitti)
  3. Bu: index.html satırı commit'li, veri dosyası değil

Bu araç üçüncüsünü yakalar. Birinci ve ikincisinin karşılığı CLAUDE.md §7'deki
kilit kuralıdır — onlar disiplinle, bu ise ölçümle çözülür.

Kullanım:
    py arac/denetle_yayin.py           # özet
    py arac/denetle_yayin.py --ayrinti # her varlığı tek tek listele

İhlal varsa çıkış kodu 1. Commit ETMEDEN ÖNCE koşturulmalı.
"""
import argparse
import io
import json
import os
import re
import subprocess
import sys

# ⚠️ KORUMALI. İki TextIOWrapper aynı buffer'ı sararsa ilki çöp toplandığında
# buffer KAPANIR ve bu modülü İÇE AKTARAN aracın çıktısı
# "ValueError: I/O operation on closed file" ile ölür. Üç kez yaşandı.
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# index.html'in çektiği yerel varlıklar: src= ve href=
VARLIK = re.compile(r'(?:src|href)\s*=\s*"([^"]+)"')


def yerel_mi(yol):
    return not (yol.startswith("http://") or yol.startswith("https://")
                or yol.startswith("//") or yol.startswith("data:")
                or yol.startswith("#") or yol.startswith("mailto:"))


# ---------------------------------------------------------------------------
# SÜRÜM DAMGASI — kod yayına gitti, tarayıcı eskisini gösteriyor
# ---------------------------------------------------------------------------
# Vaka (ölçüldü, 2026-07-30): damga r83'te dört commit boyunca takılı kaldı.
# `591a5c6` css+js değiştirdi, damga r83 kaldı; `b8e4794` js/app.js değiştirdi,
# damga yine r83. Kod GitHub Pages'e gitti ama tarayıcılar `?v=r83` ile
# önbelleğe alınmış eski dosyayı sunmaya devam etti — kullanıcı "değişmemiş"
# dedi, oturum "yaptım" dedi, ikisi de haklıydı.
#
# ⚠️ EŞİK YOK, SAYIM VAR. Bu denetimin öznel bir eşiği yok: bir commit js/ ya da
# css/ değiştirmişse damga sayısı ARTMIŞ olmalı, o kadar. Son 30 commit üzerinde
# ölçüldü: 6 commit js/css değiştirmiş, 3'ünde damga artmamış, ÜÇÜ DE GERÇEK
# (591a5c6, b8e4794, cbbc0b9). Yanlış alarm sıfır.
#
# İki ayrı soru sorulur — ikincisi daha değerlidir, çünkü commit'ten ÖNCE uyarır:
#   1) geçmişte hangi commit damgayı unuttu (tarihsel, düzeltilemez)
#   2) ŞU AN çalışma ağacında js/css değişmiş ama damga HEAD'dekiyle aynı mı
DAMGA = re.compile(r"\?v=r(\d+)")


def _git(*a):
    try:
        c = subprocess.run(["git"] + list(a), cwd=KOK, capture_output=True,
                           text=True, encoding="utf-8", errors="replace", check=True)
        return c.stdout
    except (subprocess.CalledProcessError, FileNotFoundError):
        return None


def _damga_no(metin):
    """index.html içindeki en büyük ?v=rNN sayısı; yoksa None."""
    if metin is None:
        return None
    n = [int(m) for m in DAMGA.findall(metin)]
    return max(n) if n else None


def damga_denetimi(gecmis=30):
    """(gecmis_ihlaller, calisma_agaci_ihlali) — ikisi de listedir."""
    log = _git("log", "--format=%H", "-n", str(gecmis + 1))
    if log is None:
        print("UYARI: git log çalıştırılamadı — damga denetimi ATLANDI")
        return None, None
    commitler = log.split()
    ihlal = []
    for i in range(len(commitler) - 1):
        c, p = commitler[i], commitler[i + 1]
        dokunan = [l.strip() for l in (_git("show", "--name-only", "--format=", c) or "").splitlines()
                   if l.strip().startswith(("js/", "css/"))]
        if not dokunan:
            continue
        yeni = _damga_no(_git("show", c + ":index.html"))
        eski = _damga_no(_git("show", p + ":index.html"))
        if yeni is None or eski is None:
            continue
        if yeni <= eski:
            # kaç commit sonra düzeldi? (0 = HEAD'e kadar hâlâ takılı)
            bekleme = 0
            for j in range(i - 1, -1, -1):
                bekleme += 1
                if (_damga_no(_git("show", commitler[j] + ":index.html")) or 0) > eski:
                    break
            else:
                bekleme = -1        # hiç artmadı
            ihlal.append((c[:7], eski, dokunan, bekleme))

    # --- şu anki çalışma ağacı: commit'ten ÖNCE yakalar --------------------
    simdi = []
    durum = _git("status", "--porcelain") or ""
    kod = [l[3:].strip().strip('"') for l in durum.splitlines()
           if l[3:].strip().strip('"').startswith(("js/", "css/"))]
    if kod:
        d_simdi = _damga_no(io.open(os.path.join(KOK, "index.html"), encoding="utf-8").read())
        d_head = _damga_no(_git("show", "HEAD:index.html"))
        if d_simdi is not None and d_head is not None and d_simdi <= d_head:
            simdi = [(d_head, kod)]
    return ihlal, simdi


# ============================================================================
# YAYIN BAYAT MI? — sekiz denetimin ORTAK körlüğü
# ============================================================================
# Ölçüldü (31 Temmuz 2026): yayındaki harita girdiden DOKUZ YERLEŞİM geride.
# Fizan'a dokuz Libya noktası eklendi, r176 o eklemeden önce koştu — ve
# **sekiz denetimin sekizi de "temiz" dedi.** Sebep tek cümle:
#
#     Hepsi çıktının KENDİ İÇİNDE tutarlı olup olmadığına bakıyor,
#     hiçbiri çıktının GÜNCEL olup olmadığına bakmıyor.
#
# ⚠️⚠️ BU ÖLÇÜT EKSİKTİR VE BUNU BİLEREK YAZIYORUM — "denetim var" diye
# güvenilmesin. Ad kümesi karşılaştırması DÖRT hata yüzünden üçünü kaçırır:
#   1. yerleşim SİLİNİRSE      → PETEKLER'de fazlalık kalır  ← BU YAKALANIR
#      (⊖ simetrik yazıldı, iki yön ayrı satır olarak raporlanıyor)
#   2. yerleşim TAŞINIRSA      → ad kümesi aynı, hücre yanlış yerde  ✗ KAÇAR
#   3. `d:`/`v:`/`s:` DEĞİŞİRSE → geometri güncel, boyama bayat      ✗ KAÇAR
#   4. üretimin ORTASINDA veri değişirse → ad kümesi aynı            ✗ KAÇAR
#      (CLAUDE.md §7 kilit kuralı; bu depoda yedi kez yaşandı)
#
# DOĞRU ÇÖZÜM ve geçici olmasının sebebi: çıktı kendi GİRDİ PARMAK İZİNİ
# taşımalı. `girdi.parmak_izi()` zaten var; motor bir sonraki koşuda
#     window.URETIM_IZI = {girdi:"<sha256>", motor:{...}}
# yazacak ve denetim tek soru soracak: *çıktıdaki iz = bugünkü girdinin izi mi?*
# O geldiğinde aşağıdaki fonksiyon tek satıra iner ve DÖRT yüzü birden kapatır.
def bayat_mi():
    """(yalnız_girdide, yalnız_ciktida, yöntem, BAYAT) — son değer üç durumlu:
    True = bayat · False = taze · None = ölçülemedi.

    🔴 DÖRDÜNCÜ DEĞER SONRADAN EKLENDİ, ÇÜNKÜ YOKLUĞU HATAYA YOL AÇTI.
    `URETIM_IZI` yöntemi bu fonksiyona sonradan eklendi ve hükmü YALNIZ
    `yöntem` metnine yazıldı; çağıran ise kararını hâlâ eski ad-kümesi
    listelerine (`eksik or fazla`) bakarak veriyordu. İz yöntemi boş liste
    döndürdüğü için çıktı şunu bastı:

        ✓  yayın tazeliği: girdi ile harita aynı (🔴 İZ UYUŞMUYOR — YAYIN BAYAT)

    Yani araç bayatlığı GÖRDÜ, doğru teşhis etti, ekrana yazdı — ve ✓ verdi.
    Güçlü yöntemin cevabı MESAJ kanalına konup KARAR kanalına bağlanmayınca
    ölçüm bir sayaca dönüşmüştü. Ders: yeni bir yöntem eklerken hükmün
    nereden okunduğu da taşınmalı, yoksa eski yöntem sessizce hükmetmeye
    devam eder.
    """
    yol = os.path.join(KOK, "data", "donemler.js")
    if not os.path.exists(yol):
        return None, None, "donemler.js YOK", None
    metin = open(yol, encoding="utf-8").read()
    # URETIM_IZI geldiyse ONU kullan — ad kümesi karşılaştırmasına düşme.
    m = re.search(r'window\.URETIM_IZI\s*=\s*(\{.*?\})\s*;', metin, re.S)
    try:
        sys.path.insert(0, os.path.join(KOK, "arac"))
        import girdi as _g
        Y = _g.yukle(sessiz=True)
    except Exception as e:
        return None, None, "girdi okunamadı: %s" % e, None
    if m:
        try:
            iz = json.loads(m.group(1))
            # `parmak_izi()` DÜZ sözlük döndürür: {dosya: sha256}. Çıktıdaki iz
            # ise kümelenmiştir: {"girdi": {...}, "motor": {...}}.
            # 🔴 Burada `bugun.get("girdi")` yazılıydı ve düz sözlükte o anahtar
            # olmadığı için HER ZAMAN None geliyordu → karşılaştırma HER ZAMAN
            # eşitsiz → denetim üretimden bir saniye sonra bile "BAYAT" derdi.
            # Eski hâlinde görünmüyordu çünkü hüküm ✓ dalına düşüyordu; yani iki
            # hata birbirini örtüyordu. Yakalandı çünkü elle alınan sha256 ile
            # aracın söylediği ÇELİŞTİ: el "1 dosya değişti" dedi, araç "3".
            eski = iz.get("girdi") or {}
            yeni = _g.parmak_izi() or {}
            if not isinstance(yeni, dict) or not yeni:
                return None, None, "parmak_izi() boş/beklenmedik döndü", None
            if set(eski) != set(yeni):
                # Girdi dosyası kümesi değişmiş: kıyas anlamlı değil, ama bu da
                # bir bulgudur — sessizce "taze" deme.
                return [], [], ("girdi DOSYA KÜMESİ değişmiş: %s"
                                % ", ".join(sorted(set(eski) ^ set(yeni)))), True
            if eski == yeni:
                return [], [], "sha256 izi", False
            # Hangi dosyanın değiştiğini SÖYLE — "bayat" tek başına iş görmez,
            # üretimi kimin bozduğu bilinmezse kilit protokolü uygulanamaz.
            degisen = sorted(set(eski) | set(yeni))
            fark = [a for a in degisen if eski.get(a) != yeni.get(a)]
            return [], [], "sha256 izi — değişen: %s" % (", ".join(fark) or "?"), True
        except Exception:
            pass
    i = metin.find("window.PETEKLER = ")
    if i < 0:
        return None, None, "PETEKLER bulunamadı", None
    j = metin.index("];", i) + 1
    petekler = json.loads(metin[i + len("window.PETEKLER = "):j])
    cikti = {p.get("a") for p in petekler}
    girdi_adlar = {y["ad"] for y in Y}
    _e, _f = sorted(girdi_adlar - cikti), sorted(cikti - girdi_adlar)
    return _e, _f, "ad kümesi (GEÇİCİ — 3 hata sınıfını kaçırır)", bool(_e or _f)


# ============================================================================
# ÜRETİLİYOR AMA ÇİZİLMİYOR  (OGRENILENLER §40)
# ============================================================================
# Bugünün en sık kusur sınıfı ve HİÇBİR DENETİM YAKALAMADI — çünkü bütün
# denetimlerimiz verinin DOĞRULUĞUNA bakıyor, TÜKETİLDİĞİNE değil.
# Dört ölçülmüş vaka:
#   ISGALLER        tüketicisi vardı, ÜRETİCİSİ yoktu → canlıda length === 0
#   serbest-hale    üç koşudur üretiliyordu, HİÇ çizilmiyordu
#   KAYNAK-LICENSE  içeriği "404: Not Found"
#   237 madde       `k:` değeri var, CSS sınıfı yok → renksiz
#
# Üç soru sorulur; biri bile eksikse ⚠️:
#   (a) X tanımlı ve DOLU mu
#   (b) js/app.js X'i OKUYOR mu
#   (c) index.html X'in dosyasını YÜKLÜYOR mu
#
# ⚠️ BEKLENEN DEĞER SIFIR DEĞİL. Kasıtlı istisnalar var ve listelenmeli —
# aksi hâlde denetim doğru veriye ihlal der (bugün `k:`↔`etiket:`de aynı
# tuzaktan eşiği 0 yerine ölçülen 5'e çekmiştik).
CIZILMEYEN_MUAF = {
    "PETEK_GOVDE": "motor ara çıktısı — index.html'e BİLEREK yüklenmiyor",
    "PETEK_GOVDE_PARCA": "aynı, PETEK_GOVDE'nin parça havuzu",
    "PARCALAR": "DONEMLER'in parça havuzu — app.js DONEMLER üzerinden çözer",
    "DEVLET_PARCALAR": "DEVLET_HARITA'nın parça havuzu, aynı desen",
    "DEVIRLER_KAYNAK_OZET": "üretim raporu, arayüz tüketicisi yok (bilerek)",
    # MOTOR GİRDİLERİ — app.js'in okumaması DOĞRU. Bunları `girdi.py` okur ve
    # motor geometriye çevirir; tarayıcıya ham hâlleri hiç gitmez.
    "YERLESIMLER": "motor girdisi — app.js üretilmiş geometriyi okur, ham noktayı değil",
    "YERLESIMLER_AFRIKA": "motor girdisi, girdi.py okur",
    "GOLLER": "motor girdisi — girdi.oku_goller(), uret_petek.py doğrudan okur",
    "URETIM_IZI": "üretim parmak izi — tüketicisi denetle_yayin.py'nin kendisi",
}


def cizilmiyor_mu():
    """(bulgular, muaf_sayisi) — üretilen her `window.X` tüketiliyor mu?"""
    import glob as _g
    try:
        app = open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
        html = open(os.path.join(KOK, "index.html"), encoding="utf-8").read()
    except Exception as e:
        return None, 0
    bulgular = []
    for yol in sorted(_g.glob(os.path.join(KOK, "data", "*.js"))):
        dosya = "data/" + os.path.basename(yol)
        try:
            metin = open(yol, encoding="utf-8").read()
        except Exception:
            continue
        yukleniyor_dosya = os.path.basename(yol) in html
        for m in re.finditer(r"^window\.(\w+)\s*=", metin, re.M):
            ad = m.group(1)
            # 🔴 MUAFİYET BOŞLUK TESTİNİ YUTAMAZ.
            # Kural (koordinatör, 31 Temmuz): *index.html'in YÜKLEDİĞİ üretilmiş
            # bir dosya BOŞ OLAMAZ.* Muafiyet listesi yalnız "yüklenmez" diyenler
            # içindir. İkisi zıt yönde:
            #     petek_govde.js  index.html YÜKLEMEZ → muaf, doğru
            #     sirt.js         index.html YÜKLER    → muaf DEĞİL, boşsa İHLAL
            # Sebebi ölçüldü: COĞRAFYA'nın başarısız koşusu `data/sirt.js`'i
            # 299 bayt, `window.SIRTLAR = []` olarak yazdı. Commit edilseydi
            # "üretiliyor" görünecek, okuyan sessizce BOŞ veri alacaktı — §40.
            # COĞRAFYA kaynağı da kapattı (çıktı boşsa dosya hiç yazılmıyor);
            # bu ikinci savunma, çünkü iki savunma bir savunmadan iyi.
            muaf = ad in CIZILMEYEN_MUAF
            # (a) dolu mu — ilk 200 karaktere bak, boş dizi/nesne mi
            kuyruk = metin[m.end():m.end() + 200].strip()
            bos = kuyruk.startswith("[]") or kuyruk.startswith("{}")
            # (b) app.js okuyor mu
            # ⚠️ İLK YAZIMDA  BACKSPACE OLDU (ham dize değildi) ve regex
            # HİÇBİR ŞEYE eşleşmedi: araç 37 bulgu verdi, PETEKLER ve DONEMLER
            # dahil - app.js onları apaçık okuyor. Sayı MAKUL GÖRÜNÜYORDU.
            # Bugünün dördüncü "yanlış ayrıştırma, makul sayı" vakası.
            okunuyor = re.search(r"(?<![A-Za-z0-9_])" + re.escape(ad)
                                 + r"(?![A-Za-z0-9_])", app) is not None
            # (c) index.html dosyayı yüklüyor mu
            yukleniyor = os.path.basename(yol) in html
            # MUAFİYET yalnız "okunmuyor/yüklenmiyor" testlerini susturur.
            # BOŞLUK testini SUSTURAMAZ — yüklenen bir dosya boş olamaz.
            if muaf:
                if bos and yukleniyor:
                    bulgular.append((ad, dosya, True, okunuyor, yukleniyor))
                continue
            if bos or not okunuyor or not yukleniyor:
                bulgular.append((ad, dosya, bos, okunuyor, yukleniyor))
    return bulgular, len(CIZILMEYEN_MUAF)


def git_izlenen():
    """Depoda git tarafından İZLENEN dosyaların kümesi."""
    try:
        c = subprocess.run(["git", "ls-files"], cwd=KOK, capture_output=True,
                           text=True, encoding="utf-8", check=True)
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print("UYARI: git ls-files çalıştırılamadı (%s) — yalnız disk kontrolü yapılıyor" % e)
        return None
    return {l.strip().replace("\\", "/") for l in c.stdout.splitlines() if l.strip()}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ayrinti", action="store_true")
    ap.add_argument("--gecmis", type=int, default=30,
                    help="damga denetiminin tarayacağı commit sayısı")
    args = ap.parse_args()

    html = io.open(os.path.join(KOK, "index.html"), encoding="utf-8").read()
    izlenen = git_izlenen()

    yoklar, izlenmeyenler, tamam = [], [], []
    for ham in VARLIK.findall(html):
        if not yerel_mi(ham):
            continue
        yol = ham.split("?")[0].split("#")[0].lstrip("./")
        if not yol:
            continue
        tam = os.path.join(KOK, yol.replace("/", os.sep))
        if not os.path.exists(tam):
            yoklar.append(ham)
        elif izlenen is not None and yol not in izlenen:
            izlenmeyenler.append(ham)
        else:
            tamam.append(ham)

    print("index.html'in çektiği yerel varlık: %d" % (len(yoklar) + len(izlenmeyenler) + len(tamam)))
    print("  diskte VAR ve git'te izlenen : %d" % len(tamam))

    durum1 = "✓" if not yoklar else "✗"
    print("\n%s  diskte HİÇ YOK: %d" % (durum1, len(yoklar)))
    for y in yoklar:
        print("     %s" % y)

    durum2 = "✓" if not izlenmeyenler else "✗"
    print("%s  diskte var ama GIT'TE İZLENMİYOR: %d" % (durum2, len(izlenmeyenler)))
    for y in izlenmeyenler:
        print("     %s   ← yayında 404 verir, sayfa sessizce eksik çalışır" % y)

    # --- TERS YÖN: diskte veri var ama index.html onu istemiyor ---------------
    # Oturum 14'ün bulgusu (2026-07-30): araç yalnız "index.html'in istediği
    # dosya var mı" diye soruyordu. Tersini sormuyordu ve o yüzden
    # `data/olaylar_ek9.js` araca HİÇ GÖRÜNMEDİ: 13 madde diskte duruyor,
    # denetle.py `data/olaylar*.js` deseniyle okuduğu için onları sayıyor ve
    # TEMİZ diyor, yayın ise göstermiyor. `olaylar_ek8.js` 404'ünün AYNADAKİ hâli.
    # Yani iki araç birbirini doğrulamak yerine ikisi de yanlış cevap veriyordu.
    # ⚠️ İlk sürüm 5 YANLIŞ ALARM verdi ve sebebi öğretici: `data/` altındaki her
    # .js dosyası tarayıcı girdisi DEĞİL. İki ayrı tüketici var:
    #   MOTOR girdisi   → uret_petek.py, arac/girdi.py'nin izin listesinden okur
    #                     (yerlesimler_afrika.js böyle; tarayıcı onu hiç yüklemez,
    #                      tarayıcı ÜRETİLMİŞ donemler.js'i yükler)
    #   TARAYICI girdisi → index.html'in <script> satırları
    # Bir dosya bu ikisinden HİÇBİRİNDE değilse gerçekten yetimdir.
    istenen = {y.split("?")[0].split("#")[0].lstrip("./") for y in VARLIK.findall(html)
               if yerel_mi(y)}
    motor_girdisi = set()
    try:
        sys.path.insert(0, os.path.join(KOK, "arac"))
        import girdi
        motor_girdisi = {"data/" + f for f in girdi.GIRDI_DOSYALARI}
        # ⚠️ ÜÇÜNCÜ YOL — girdi.py'nin İZİN LİSTESİ motorun okuduklarının
        # TAMAMI DEĞİL. `data/goller.js` bu yüzden 'yetim' raporlanıyordu:
        # uret_petek.py onu girdi.oku_goller() ile DOĞRUDAN okuyor, izin
        # listesinden değil. Yanlış alarmın sebebi verinin değil ARACIN
        # modeliydi — dosya bağlıydı, benim haritam eksikti.
        # Aynı sınıftaki her fonksiyon buraya eklenmeli; kaynak koddan
        # okunuyor ki yeni bir oku_*() eklendiğinde elle güncelleme gerekmesin.
        try:
            gk = open(os.path.join(KOK, "arac", "girdi.py"), encoding="utf-8").read()
            for m in re.finditer(r'["\'](\w+\.js)["\']', gk):
                motor_girdisi.add("data/" + m.group(1))
        except Exception:
            pass
    except Exception as e:
        print("UYARI: arac/girdi.py okunamadı (%s) — motor girdisi ayrımı yapılamıyor" % e)

    # Henüz aktif olmayan, gerekçesi belgeli partiler. Buraya bir dosya
    # eklenirken NEDEN aktif olmadığı yazılır, yoksa liste çöplüğe döner.
    BEKLEYEN = {
        "data/yerlesimler_avrupa.js":    "237 nokta, 15 kimlik renkler.py'de tanımsız",
        "data/yerlesimler_asya.js":      "344 nokta, 98 kimlik + harita penceresi 62°D'de bitiyor",
        "data/yerlesimler_ortaasya2.js": "7 nokta, nogay+kazak kimliği tanımsız",
        "data/kimlikler.js":             "kimlik sözlüğü, arayüz henüz kullanmıyor (ETIKETLEME.md)",
    }

    diskte, kayitsiz, bekleyen_bulunan = [], [], []
    veri_dizini = os.path.join(KOK, "data")
    if os.path.isdir(veri_dizini):
        for f in sorted(os.listdir(veri_dizini)):
            if not f.endswith(".js"):
                continue
            yol = "data/" + f
            diskte.append(yol)
            if yol in istenen or yol in motor_girdisi:
                continue
            if yol in BEKLEYEN:
                bekleyen_bulunan.append(yol)
            else:
                kayitsiz.append(yol)

    durum4 = "✓" if not kayitsiz else "✗"
    print("%s  yetim veri dosyası: %d / %d  (ne index.html ne girdi.py okuyor)"
          % (durum4, len(kayitsiz), len(diskte)))
    for y in kayitsiz:
        print("     %s   ← yayında yüklenmez; denetle.py sayar, kullanıcı görmez" % y)
    if kayitsiz:
        print("     → ya index.html'e <script> satırı, ya girdi.py izin listesine,")
        print("       ya BEKLEYEN sözlüğüne gerekçesiyle, ya arsiv/ altına")
    if bekleyen_bulunan:
        print("  i %d parti bilerek bekliyor:" % len(bekleyen_bulunan))
        for y in bekleyen_bulunan:
            print("      %-34s %s" % (y, BEKLEYEN[y]))

    # sürüm damgası tutarlılığı: hepsi aynı ?v=rNN taşımalı
    damgalar = set(re.findall(r'\?v=(r\d+)', html))
    durum3 = "✓" if len(damgalar) <= 1 else "✗"
    print("%s  sürüm damgası: %s" % (durum3, ", ".join(sorted(damgalar)) or "yok"))
    if len(damgalar) > 1:
        print("     birden çok damga var — surum_damgala.py yarım kalmış olabilir")

    # --- sürüm damgası ARTTI MI (r83 vakası) ---------------------------------
    gecmis_ihlal, simdi_ihlal = damga_denetimi(args.gecmis)
    damga_ihlali = False
    if gecmis_ihlal is not None:
        takili = [x for x in gecmis_ihlal if x[3] == -1]
        durum5 = "✓" if not simdi_ihlal and not takili else "✗"
        print("%s  damga artışı: son %d commit'te js/css değiştiren %d commit damgayı "
              "arttırmamış" % (durum5, args.gecmis, len(gecmis_ihlal)))
        for c, eski, dokunan, bekleme in gecmis_ihlal:
            nasil = ("HÂLÂ TAKILI" if bekleme == -1 else
                     "%d commit sonra düzeldi" % bekleme)
            print("     %s  r%-3d %-24s ← %s" % (c, eski, ",".join(
                sorted({d.split("/")[0] for d in dokunan})), nasil))
        if takili:
            damga_ihlali = True
            print("     → HEAD'de hâlâ eski damga: py arac/surum_damgala.py")
        if simdi_ihlal:
            damga_ihlali = True
            for eski, kod in simdi_ihlal:
                print("✗  ÇALIŞMA AĞACI: %d kod dosyası değişmiş, damga hâlâ r%d"
                      % (len(kod), eski))
                for k in kod[:8]:
                    print("     %s" % k)
                print("     → COMMIT ETMEDEN ÖNCE: py arac/surum_damgala.py")

    if args.ayrinti:
        print("\nizlenen varlıklar:")
        for y in sorted(tamam):
            print("     %s" % y)

    print()
    # ---- YAYIN BAYAT MI (sekiz denetimin ortak körlüğü)
    eksik, fazla, yontem, _bayat = bayat_mi()
    bayat = bool(_bayat)
    print()
    if _bayat is None:
        print("!  yayın tazeliği ÖLÇÜLEMEDİ: %s" % yontem)
    elif _bayat:
        print("✗  YAYIN BAYAT — üretim girdiden geride (%s)" % yontem)
        print("     data/donemler.js ve devletler_harita.js GİRDİYİ TEMSİL ETMİYOR;")
        print("     bu geometri üzerinde alınan HER ölçüm bayat sayı üretir.")
        if eksik:
            print("     girdide VAR, haritada YOK: %d" % len(eksik))
            for a in eksik[:10]:
                print("       %s" % a)
            if len(eksik) > 10:
                print("       … +%d" % (len(eksik) - 10))
        if fazla:
            print("     haritada VAR, girdide YOK: %d  ← silinmiş nokta hâlâ boyanıyor" % len(fazla))
            for a in fazla[:10]:
                print("       %s" % a)
        print("     → py arac/uret_petek.py  (girdi DONDURULDUKTAN sonra)")
    else:
        print("✓  yayın tazeliği: girdi ile harita aynı (%s)" % yontem)
    if "GEÇİCİ" in (yontem or ""):
        print("   ⚠️ BU ÖLÇÜT EKSİK — yalnız ad kümesine bakıyor. Yerleşim TAŞINIRSA,")
        print("      `d:`/`v:`/`s:` DEĞİŞİRSE ya da üretimin ORTASINDA veri değişirse")
        print("      TEMİZ der. Kesin çözüm window.URETIM_IZI (motorda sırada).")

    # ---- ÜRETİLİYOR AMA ÇİZİLMİYOR (§40)
    cizilmiyor, muaf_n = cizilmiyor_mu()
    print()
    if cizilmiyor is None:
        print("!  §40 denetimi ÖLÇÜLEMEDİ (js/app.js ya da index.html okunamadı)")
    elif not cizilmiyor:
        print("✓  üretilen her window.X tüketiliyor (%d kasıtlı muaf hariç)" % muaf_n)
    else:
        print("⚠️  ÜRETİLİYOR AMA ÇİZİLMİYOR: %d  (%d kasıtlı muaf hariç)"
              % (len(cizilmiyor), muaf_n))
        for ad, dosya, bos, okunuyor, yukleniyor in cizilmiyor:
            eksik = []
            if bos:
                eksik.append("BOŞ")
            if not okunuyor:
                eksik.append("app.js OKUMUYOR")
            if not yukleniyor:
                eksik.append("index.html YÜKLEMİYOR")
            print("     %-22s %-28s %s" % (ad, dosya, " · ".join(eksik)))
        print("     → §40: veri doğru olabilir ama kullanıcı GÖRMÜYOR.")
        print("       Kasıtlıysa CIZILMEYEN_MUAF'a gerekçesiyle eklensin.")

    if yoklar or izlenmeyenler or kayitsiz or len(damgalar) > 1 or damga_ihlali or bayat:
        print("SONUÇ: İHLAL VAR — çıkış kodu 1")
        return 1
    print("SONUÇ: temiz")
    return 0


if __name__ == "__main__":
    sys.exit(main())
