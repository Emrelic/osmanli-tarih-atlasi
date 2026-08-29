# -*- coding: utf-8 -*-
"""_bagli_mi.py — İKİ KAPININ NÖBETÇİSİ.

🔴 DOĞURAN ÖLÇÜM — 28 Ağustos 2026, BİR GECEDE ÜÇ VAKA:
    yerlesimler_ek_korfez.js   girdi.py'ye eklendi · index.html'e EKLENMEDİ
    olaylar_ek17.js            aynı hata, aynı gece
    yerlesimler_serhat · _kdmacar   aynı hata, HAFTALARDIR

Bu projede bir veri dosyasının **İKİ AYRI KAPISI** var ve ikisi ayrı
listeden okunuyor:

    MOTOR      `arac/girdi.py` → `GIRDI_DOSYALARI`
    TARAYICI   `index.html`    → `<script src="data/...">`

Biri yazılıp öteki yazılmazsa **hiçbir denetim ötmez**: motor noktayı
görür, tarayıcı görmez (ya da tersi). `denetle.py` "yama UYGULANDI mı"
diye sorar, **"yama BAĞLANDI mı" diye sormaz.**

📌 `index.html`in kendi yorumu bu dersi zaten yazmış:
    *"Cephe yeni parti bağlanırken güncellenecek yer İKİYE düştü:
      girdi.py (motor) + <script src> (yükleme)."*
Ders yazılıydı; **ötecek alet yoktu.** `CLAUDE.md §11`in en çok
tekrarlanan cümlesi: *"kural yetmiyor, ALET gerekiyor."*

─────────────────────────────────────────────────────────────────────────
BEŞ SORU — beşi de ayrı bir kusur sınıfı
(④ ve ⑤ 29 Ağustos'ta eklendi: yayın kapısının "yetim veri dosyası: 45"
 satırı TOPTAN bir listeydi ve içinde İKİ AYRI CİNS vardı — `§11`in
 *"iki ayrı kusur tek satırda raporlanırsa aynı çare uygulanır"* tuzağı.)

  ① MOTOR VAR · TARAYICI YOK    girdi.py'de var, index.html'de yok
                                ⇒ veri doğru, kullanıcı GÖRMÜYOR      İHLAL
  ② TARAYICI VAR · MOTOR YOK    index.html'de var, girdi.py'de yok
                                ⇒ tarayıcı gösteriyor, harita ÇİZMİYOR İHLAL
                                (yalnız `yerlesimler*.js` ailesi için —
                                 olaylar/devletler zaten girdi.py'de olmaz)
  ③ YÜKLENİYOR AMA BİRLEŞMİYOR  index.html'de var, ama tanımladığı küresel
                                değişken `/^YERLESIMLER_/` desenine UYMUYOR
                                ⇒ dosya yükleniyor, `window.YERLESIMLER`e
                                  HİÇ katılmıyor — en sessiz kusur   İHLAL
  ④ KRONOLOJİ YETİMİ            `denetle.py` glob ile SAYIYOR ama
                                `index.html` YÜKLEMİYOR
                                ⇒ denetim maddeyi görür, KULLANICI GÖRMEZ İHLAL
  ⑤ AD ALANI ÇAKIŞMASI          iki dosya AYNI `window.<AD>`i tanımlıyor
                                ⇒ ikincisi birincisini SESSİZCE ezer   İHLAL

③ niçin var: `index.html`deki birleştirme bir ÖNEK TARAMASIDIR. Elle liste
kaldırıldığı için dosya adı değil **DEĞİŞKEN ADI** belirleyici oldu. Yani
`§7`in *"ayrı dosya vermek, ayrı ad alanı vermek değildir"* dersinin ters
yüzü: doğru dosya, yanlış ad alanı ⇒ sessizce hiçbir şey olmaz.

─────────────────────────────────────────────────────────────────────────
MUAFİYET — SESSİZ OLMAZ, BURADA AÇIK DURUR

Bilerek tek taraflı dosyalar için `MUAF` sözlüğü aşağıdadır ve her kaydın
**gerekçesi zorunludur**. Muafiyeti dosyanın kendi yorumundan okumak
yasak: bir yorum değişir, kimse görmez. `CLAUDE.md §11` —
*"'ölçülemedi' asla 'temiz' diye raporlanmaz"*ın kardeşi:
**"muaf" da gerekçesiz yazılamaz.**

KULLANIM
    py arac/_bagli_mi.py            # çıkış kodu 0 temiz · 1 ihlal
    py arac/_bagli_mi.py --ayrinti  # muaf olanları da bas
"""
import argparse
import glob
import os
import re
import sys

if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                  errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

# ── MUAFİYET — her kayıt {dosya: gerekçe} ───────────────────────────────
# ⚠️ BOŞ OLMASI BİR SONUÇTUR, eksiklik değil: 28 Ağustos 2026 ölçümünde
# girdi.py'nin okuduğu 56 dosyanın 56'sı da tarayıcıya YÜKLENMELİ çıktı.
# `yer_yama_*` ailesi buraya GİRMEZ — onlar `GIRDI_DOSYALARI`nda zaten yok,
# yani bu nöbetçinin evrenine hiç girmiyorlar (yayın kapısı ayrıca sayıyor).
MUAF_MOTOR_VAR_TARAYICI_YOK = {
    # "ornek_dosya.js": "NİÇİN bilerek yüklenmediği — ölçümüyle birlikte",
}
# ── ④ KRONOLOJİ YETİMİ — `denetle.py` SAYAR, kullanıcı GÖRMEZ ───────────
# `denetle.py` kronolojiyi `glob("data/olaylar*.js")` ile okur; `index.html`
# ise ELLE yazılmış `<script>` satırlarıyla. İkisi ayrışırsa **denetim
# maddeyi sayar, kullanıcı göremez** — 27/28 Ağustos gecesi `olaylar_ek17`
# tam böyle kayboldu. Bu dal o kusurun kronoloji tarafıdır.
MUAF_KRONOLOJI_YETIMI = {
    "olaylar_ek19.js":
        "BEKLİYOR, kusur değil: 8. boyut (dünya olayları) ilk maddesi. "
        "Emre 29 Ağu kararı ②: boyut AÇILSIN ama AYARA BAĞLI, varsayılan "
        "KAPALI. ARAYÜZ süzgecinin `kapsam:\"konu\"` mü `boyut:8` mi "
        "okuyacağı HENÜZ KESİNLEŞMEDİ (M-1518). Şimdi yüklenirse madde "
        "süzgeçsiz görünür — yani yüklememek BUGÜN doğru davranış. "
        "ARAYÜZ kararı inince bu satır KALKAR ve dosya index.html'e girer.",
}

# ── ⑤ AD ALANI ÇAKIŞMASI — `CLAUDE.md §7` ───────────────────────────────
# *"AYRI DOSYA VERMEK, AYRI AD ALANI VERMEK DEĞİLDİR."* İki dosya aynı
# `window.<AD>`i tanımlarsa ikincisi birincisini SESSİZCE ezer — ve dosya
# adları ayrı olduğu için `§7`in dosya sahipliği bunu GÖRMEZ.
# Ölçülmüş vaka: `KADEME_YAMA` · 5 dosya · tek ad · tek tek okununca 537
# kayıt, birlikte 137 ⇒ %74 görünmez olurdu. O gün zarar gerçekleşmedi
# ama bu bir tasarım kararı değil TESADÜFTÜ (uygulayıcı tek tek okumuştu).
MUAF_AD_ALANI = {
    "URETIM_IZI":
        "TASARIM: her üretilmiş çıktı KENDİ üretim izini taşır, yani ad "
        "PAYLAŞILMASI kasıtlıdır. Tarayıcıda ezişme OLUYOR (6 dosya "
        "yükleniyor, sonuncusu kalıyor) ama ZARARSIZ — ÖLÇÜLDÜ: "
        "`grep URETIM_IZI js/app.js index.html` → 0 sonuç, tarayıcı bu "
        "değişkeni HİÇ OKUMUYOR. Okuyanların hepsi Python (denetle_yayin · "
        "girdi · uret_petek · denetle_bosluk) ve onlar dosyayı TEK TEK "
        "okuyor, tek bağlamda değil.",
    "KUNYE_YAMA":
        "ÖLÜ ÇAKIŞMA: iki dosyanın (kunye_9d907c · kunye_9d907c_2) İKİSİ DE "
        "UYGULANMIŞ ve `denetle_yayin.py` BEKLEYEN sözlüğünde 'kapali' "
        "damgalı — yani onları bir daha okuyacak bekleyen iş YOK. Ölçüldü. "
        "⚠️ Bu bir TASARIM değil KALINTIDIR: temiz çare ikisini `arsiv/` "
        "altına almaktır, o zaman bu satır da kalkar. "
        "🔴 `KADEME_YAMA` bilerek MUAF DEĞİL — orada iki dosya AÇIK "
        "(kademe_4ff22b 239 kayıt · kademe_8beb2b 11 kayıt), yani çakışma "
        "CANLI ve bekleyen işi tehdit ediyor.",
}

# ── ⑥ HİÇBİR KAPININ OKUMADIĞI `yerlesimler*.js` ───────────────────────
# 🔴 KAPSAM BOŞLUĞU, 30 Ağustos 2026'da ölçüldü: ② yalnız "index'te VAR,
# motorda YOK"a bakıyordu. Ama bir dosya İKİSİNDE DE olmayabilir — ve adı
# `yerlesimler` ile başlıyorsa bu en tehlikeli hâldir, çünkü ad CANLI VERİ
# VAADİ taşır: dosyayı gören *"bu bağlı"* sanır.
# Gerçekleşen vaka: `yerlesimler_kafkas_duzeltme.js` — 19 kayıtlık bir YAMA,
# adı `yerlesimler_` diye başladığı için AYLARCA "bağlı" sanıldı, ve 19
# kaydın 19'u da hiç inmedi (M-1388 · koordinatör 30 Ağu'da doğruladı).
# 📌 `§7`in *"ayrı dosya vermek, ayrı ad alanı vermek değildir"* dersinin
# ÜÇÜNCÜ yüzü: burada ad ne çakışıyor ne eksik — **YANILTIYOR.**
#
# ⚠️ BU DAL YAYINI DURDURMAZ ve sebebi ölçülmüş: `denetle_yayin.py` yetim
# dosyaları ZATEN sayıyor ve ihlal veriyor. İkinci bir veto koymak aynı
# kusuru iki kez cezalandırmak olur — bu aletin katkısı VETO değil TASNİF:
# *"bu yetim bir sözlük mü, yoksa canlı veri VAAT EDEN bir dosya mı?"*
MUAF_YERLESIM_YETIMI = {
    # "ornek.js": "NİÇİN hiçbir kapının okumaması doğru — ölçümüyle",
}

MUAF_TARAYICI_VAR_MOTOR_YOK = {
    # `yerlesimler.js` çekirdek dosyadır ve `window.YERLESIMLER`i (öneksiz)
    # tanımlar; birleştirmenin TOHUMUDUR, öneki olmadığı için ③'e takılmasın.
}
# ③ için: bu değişkenler öneksiz olduğu hâlde birleştirmeye TOHUM olarak
# giriyor (index.html: `(window.YERLESIMLER || []).slice()`).
TOHUM_DEGISKEN = {"YERLESIMLER"}


def index_dosyalari(yol):
    """index.html'in <script src="data/..."> ile yüklediği dosya adları."""
    ham = open(yol, encoding="utf-8").read()
    # Yorum İÇİNDEKİ <script> satırları SAYILMAZ — ölü örnekler var.
    ham = re.sub(r"(?s)<!--.*?-->", " ", ham)
    bulunan = []
    for m in re.finditer(r'<script\s+src="data/([^"?]+)', ham):
        bulunan.append(m.group(1))
    return bulunan


def dosya_degiskeni(yol):
    """Dosyanın tanımladığı `window.<AD>` değişkeni (ilk eşleşme)."""
    try:
        ham = open(yol, encoding="utf-8").read()
    except OSError:
        return None
    ham = "\n".join(s for s in ham.split("\n") if not s.strip().startswith("//"))
    m = re.search(r"window\.([A-Za-z_]\w*)\s*=", ham)
    return m.group(1) if m else None


def denetle(ayrinti=False):
    """İhlal SAYISINI döndürür. 🔴 `main()`den AYRI TUTULMASININ sebebi:

    `denetle_yayin.py` (yayın kapısı) bunu içe aktarıp çağırıyor. `main()`
    çağrılsaydı `argparse` KAPININ argümanlarını (`--gecmis` …) ayrıştırmaya
    kalkar ve kapı `SystemExit(2)` ile ölürdü — yani nöbetçiyi bağlamak
    kapıyı KIRARDI. Argüman ayrıştırma yalnız `main()`de kalır.
    """
    import girdi
    motor = list(girdi.GIRDI_DOSYALARI)
    tarayici = index_dosyalari(os.path.join(KOK, "index.html"))

    print("_bagli_mi — İKİ KAPI KARŞILAŞTIRMASI")
    print(f"  motor    `girdi.GIRDI_DOSYALARI` : {len(motor)} dosya")
    print(f"  tarayıcı `index.html <script>`   : {len(tarayici)} dosya")
    print()

    m_kume, t_kume = set(motor), set(tarayici)
    ihlal = 0

    # ── ① MOTOR VAR · TARAYICI YOK ──────────────────────────────────────
    a = sorted(m_kume - t_kume)
    a_ihlal = [d for d in a if d not in MUAF_MOTOR_VAR_TARAYICI_YOK]
    a_muaf = [d for d in a if d in MUAF_MOTOR_VAR_TARAYICI_YOK]
    print(f"① MOTOR VAR · TARAYICI YOK   {'✗' if a_ihlal else '✓'}  "
          f"{len(a_ihlal)} ihlal · {len(a_muaf)} muaf")
    for d in a_ihlal:
        print(f"     🔴 {d}  — motor okuyor, kullanıcı GÖRMÜYOR")
        print(f"        çare: index.html'e `<script src=\"data/{d}?v=rNNNN\">`")
    if ayrinti:
        for d in a_muaf:
            print(f"     🟡 {d}  MUAF — {MUAF_MOTOR_VAR_TARAYICI_YOK[d]}")
    ihlal += len(a_ihlal)

    # ── ② TARAYICI VAR · MOTOR YOK (yalnız yerlesimler ailesi) ──────────
    b = sorted(d for d in (t_kume - m_kume) if d.startswith("yerlesimler"))
    b_ihlal = [d for d in b if d not in MUAF_TARAYICI_VAR_MOTOR_YOK]
    print(f"\n② TARAYICI VAR · MOTOR YOK   {'✗' if b_ihlal else '✓'}  "
          f"{len(b_ihlal)} ihlal")
    for d in b_ihlal:
        print(f"     🔴 {d}  — tarayıcı gösteriyor, MOTOR OKUMUYOR "
              f"⇒ nokta var ama peteği YOK")
        print(f"        çare: arac/girdi.py `GIRDI_DOSYALARI`na ekle")
    ihlal += len(b_ihlal)

    # ── ③ YÜKLENİYOR AMA BİRLEŞMİYOR ────────────────────────────────────
    # index.html `window.YERLESIMLER`i ÖNEK TARAYARAK kuruyor; deseni
    # tutmayan bir dosya yüklenir ama HİÇ katılmaz.
    c = []
    for d in sorted(t_kume):
        if not d.startswith("yerlesimler"):
            continue
        yol = os.path.join(KOK, "data", d)
        if not os.path.exists(yol):
            # ⚠️ Ayrı bir kusur: index.html OLMAYAN bir dosyayı yüklüyor.
            # ③'ün mesajıyla karıştırılmasın — orada dosya VAR ama adı
            # deseni tutmuyor; burada dosya HİÇ YOK. Aynı satırda
            # raporlamak `CLAUDE.md §11`in "iki ayrı kusur tek satırda"
            # tuzağıdır ve çareleri TERSTİR.
            c.append((d, "🔴 DOSYA DİSKTE YOK — index.html olmayan dosyayı "
                         "yüklüyor (çare: satırı SİL ya da dosyayı YAZ)"))
        elif (dg := dosya_degiskeni(yol)) is None:
            c.append((d, "window.<AD> bulunamadı — dosya bir küresel "
                         "değişken TANIMLAMIYOR"))
        elif dg not in TOHUM_DEGISKEN and not dg.startswith("YERLESIMLER_"):
            c.append((d, f"window.{dg}"))
    print(f"\n③ YÜKLENİYOR AMA BİRLEŞMİYOR {'✗' if c else '✓'}  {len(c)} ihlal")
    for d, dg in c:
        print(f"     🔴 {d}  → {dg}")
        print(f"        index.html birleştirmesi `/^YERLESIMLER_/` deseni "
              f"arıyor ⇒ bu dosya window.YERLESIMLER'e HİÇ katılmıyor")
    ihlal += len(c)

    # ── ④ KRONOLOJİ YETİMİ ──────────────────────────────────────────────
    kron = []
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "olaylar*.js"))):
        d = os.path.basename(yol)
        if d in t_kume or d in MUAF_KRONOLOJI_YETIMI:
            continue
        kron.append((d, len(re.findall(r'(?<![A-Za-z_])t\s*:\s*"',
                                       open(yol, encoding="utf-8").read()))))
    print(f"\n④ KRONOLOJİ YETİMİ           {'✗' if kron else '✓'}  "
          f"{len(kron)} ihlal · {len(MUAF_KRONOLOJI_YETIMI)} muaf")
    for d, n in kron:
        print(f"     🔴 {d}  ~{n} madde — `denetle.py` SAYIYOR, "
              f"`index.html` YÜKLEMİYOR")
        print(f"        ⇒ denetim maddeyi görür, KULLANICI GÖRMEZ "
              f"(olaylar_ek17, 27 Ağu)")
    if ayrinti:
        for d, g in MUAF_KRONOLOJI_YETIMI.items():
            print(f"     🟡 {d}  MUAF — {g}")
    ihlal += len(kron)

    # ── ⑤ AD ALANI ÇAKIŞMASI ────────────────────────────────────────────
    sahip = {}
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "*.js"))):
        ham = open(yol, encoding="utf-8").read()
        ham = "\n".join(s for s in ham.split("\n")
                        if not s.strip().startswith("//"))
        for m in re.finditer(r"window\.([A-Za-z_]\w*)\s*=\s*[\[{]", ham):
            sahip.setdefault(m.group(1), set()).add(os.path.basename(yol))
    cakisan = {k: v for k, v in sahip.items()
               if len(v) > 1 and k not in MUAF_AD_ALANI}
    # 🔴 İHLAL Mİ UYARI MI — ÖLÇÜLEREK AYRILIR, ve ayrım şudur:
    #   YÜKLENEN > 1  → ezişme YAYINLANMIŞ SAYFADA oluyor ⇒ İHLAL, yayın durur
    #   öteki hâller  → ezişme ancak biri dosyaları TEK BAĞLAMDA okursa olur
    #                   ⇒ UYARI: yayını durdurmaz ama ASLA susturulmaz
    # Niçin: bu kapı SİTEYİ yayınlıyor. Yayınlanan çıktıya zarar vermeyen
    # bir riskle yayını durdurmak bir kategori hatasıdır — ve `renkler.py`nin
    # dersini tekrarlar: *gürültü üreten denetime kimse bakmaz.*
    # ⚠️ Ama "durdurmuyor" DEMEK "raporlamıyor" DEMEK DEĞİL: uyarı her
    # koşuda basılır ve sayısı SONUÇ satırına yazılır.
    c_ihlal, c_uyari = {}, {}
    for k, v in cakisan.items():
        (c_ihlal if len(v & t_kume) > 1 else c_uyari)[k] = v
    print(f"\n⑤ AD ALANI ÇAKIŞMASI         {'✗' if c_ihlal else '✓'}  "
          f"{len(c_ihlal)} ihlal · {len(c_uyari)} uyarı · "
          f"{len(MUAF_AD_ALANI)} muaf")
    for k, v in sorted(c_ihlal.items()):
        yuklenen = sorted(v & t_kume)
        print(f"     🔴 window.{k}  ← {len(v)} dosya: {', '.join(sorted(v))}")
        print(f"        {len(yuklenen)}'i TARAYICIYA YÜKLENİYOR — sonuncusu "
              f"ötekileri EZER, YAYINLANMIŞ SAYFADA sessiz veri kaybı")
    for k, v in sorted(c_uyari.items()):
        print(f"     ⚠️ window.{k}  ← {len(v)} dosya: {', '.join(sorted(v))}")
        print(f"        yayına zarar vermiyor (tarayıcıya {len(v & t_kume)} "
              f"tanesi yükleniyor) — ama bu dosyaları TEK BAĞLAMDA okuyan "
              f"bir uygulayıcı sonuncusu dışındakileri KAYBEDER (`§7`)")
        print(f"        ⓘ 29 Ağu ölçümü: bu adı okuyan bir UYGULAYICI BETİK "
              f"YOK (`grep -rl` → yalnız denetle_yayin + bu alet). Yani risk "
              f"GERÇEK ama BUGÜN tüketicisi yok — uyarı olmasının sebebi bu. "
              f"Biri uygulayıcı yazarsa ÖNCE değişkenleri ayrıştırsın.")
    if ayrinti:
        for k, g in MUAF_AD_ALANI.items():
            print(f"     🟡 window.{k}  MUAF — {g}")
    ihlal += len(c_ihlal)

    # ── ⑥ HİÇBİR KAPININ OKUMADIĞI `yerlesimler*.js` ───────────────────
    yetim = []
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "yerlesimler*.js"))):
        d = os.path.basename(yol)
        if d in m_kume or d in MUAF_YERLESIM_YETIMI:
            continue
        ham = open(yol, encoding="utf-8").read()
        yetim.append((d, len(re.findall(r'(?<![A-Za-z_])ad\s*:', ham)),
                      dosya_degiskeni(yol)))
    print(f"\n⑥ ADI YANILTAN DOSYA         {'⚠️' if yetim else '✓'}  "
          f"{len(yetim)} uyarı · {len(MUAF_YERLESIM_YETIMI)} muaf")
    if yetim:
        print(f"     bu dal 'yetim mi' DEMİYOR — onu `denetle_yayin.py` zaten "
              f"sayıyor ve kendi BEKLEYEN sözlüğü var.")
        print(f"     bu dalın sorduğu: **AD YALAN SÖYLÜYOR MU?** "
              f"`yerlesimler*.js` adı, projede 'motorun okuduğu yerleşim "
              f"girdisi' demektir.")
    for d, n, dg in yetim:
        print(f"     ⚠️ {d}  ~{n} kayıt → window.{dg}")
        print(f"        `girdi.py` bu dosyayı OKUMUYOR — yani ad, taşımadığı "
              f"bir şeyi vaat ediyor. Vaka: `yerlesimler_kafkas_duzeltme.js` "
              f"bir YAMA'ydı, adı yüzünden AYLARCA 'bağlı' sanıldı, 19 kaydın "
              f"19'u da inmedi.")
        print(f"        ⇒ çare KAYIT DEĞİL AD: yama ise `yama_`/`yer_yama_` "
              f"diye yeniden adlandır; gerçekten girdiyse `girdi.py`ye bağla.")
    if ayrinti:
        for d, g in MUAF_YERLESIM_YETIMI.items():
            print(f"     🟡 {d}  MUAF — {g}")

    print()
    if ihlal:
        print(f"SONUÇ: {ihlal} İHLAL — çıkış kodu 1")
        print("       ⚠️ Bir dosya yarım bağlıyken YAYIN YAPILMAZ: veri doğru "
              "olsa bile\n"
              "          motorun gördüğü ile kullanıcının gördüğü AYRIŞIR.")
    else:
        # ⚠️ "TEMİZ" derken UYARI SAYISI DA yazılır. Yoksa satır
        # *"bakılacak bir şey yok"* diye okunur ve uyarı sessizce ölür —
        # `CLAUDE.md §11`: *"'ölçülemedi' asla 'temiz' diye raporlanmaz"*ın
        # kardeşi: **yayını durdurmayan bir bulgu da GİZLENMEZ.**
        # ⚠️ ⑤ VE ⑥'nın uyarıları BİRLİKTE sayılır. Yalnız ⑤ sayılsaydı
        # özet satırı ⑥'yı yutardı — ve bu alet tam da o kusuru (bir bulgunun
        # toplu bir satırda görünmez olması) ölçmek için yazıldı.
        n_uyari = len(c_uyari) + len(yetim)
        ek = (f" · {n_uyari} UYARI duruyor (yayını durdurmuyor, yukarıda)"
              if n_uyari else "")
        print(f"SONUÇ: TEMİZ — iki kapı da aynı dosyaları tanıyor{ek}")
    return ihlal


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ayrinti", action="store_true")
    args = ap.parse_args()
    return 1 if denetle(ayrinti=args.ayrinti) else 0


if __name__ == "__main__":
    sys.exit(main())
