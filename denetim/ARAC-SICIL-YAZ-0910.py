# -*- coding: utf-8 -*-
"""ARAC-SICIL-YAZ-0910 — SICIL.md'nin KULLIYAT bolumunu URETIR.

🔴 SAYILAR ELLE YAZILMAZ (CLAUDE.md §1.5): her kaydin madde sayisi, hukum
   dagilimi ve kaynak madde listesi OLCUM-SICIL-KUME-0910.json'dan uretilir.
   Elle yazilan tek sey KARAR METNIDIR.

🔴 ✅ CÖZÜLDÜ yalniz delil_commit'i DOLU maddelerde yazilir (S-011 kurali).
   `cozuldu` diyip commit izi olmayan madde 🟠 IDDIA EDILDI olur.

Cikti: ClaudEmre/kutu/SICIL.md  (mevcut 11 kayit KORUNUR, altina eklenir)
Kullanim: py denetim/ARAC-SICIL-YAZ-0910.py [--yaz]
"""
import json, io, os, sys, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

G = "denetim/OLCUM-SICIL-KUME-0910.json"
HEDEF = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\SICIL.md"
# 🔴 CAPA BIR HTML YORUMUDUR, BIR BASLIK DEGIL — ve sebebi OLCULDU:
#    ilk surumde capa "# KÜLLİYAT SİCİLİ" idi. Belgenin ELLE yazilan ust
#    bolumune o basligin ADI bir cumlenin icinde gecince (".. altinda
#    **`# KÜLLİYAT SİCİLİ`** var"), split() dosyayi CUMLENIN ORTASINDAN
#    kesti ve ONBIR ELLE YAZILMIS KAYDI SILDI. git'ten geri alindi.
#    ⇒ Bir uretim siniri, belgenin ICERIGINDE gecebilecek bir ifade OLAMAZ.
CAPA = "<!-- URETIM-SINIRI ARAC-SICIL-YAZ-0910 · asagisi HER KOSUDA yeniden yazilir -->"
OLCUM_TARIHI = "2026-09-10"

IM = {
    "cozuldu_commitli": ("✅", "ÇÖZÜLDÜ"),
    "cozuldu_veride":   ("🔵", "VERİDE VAR"),
    "cozuldu_izsiz":    ("🟠", "İDDİA EDİLDİ"),
    "cozuldu_yapilmamis": ("🔴", "YAPILMAMIŞ"),
    "cozuldu_olculemedi": ("❔", "ÖLÇÜLEMEDİ"),
    "cozuldu_iddiasiz": ("➖", "İDDİA TAŞIMIYOR"),
    "cozuldu_curuk":    ("🔻", "ÇÜRÜK"),
    "zaten-dogru":      ("🟢", "ZATEN DOĞRU"),
    "tekrar":           ("🔁", "TEKRAR"),
    "gerek-yok":        ("⚪", "GEREK GÖRÜLMEDİ"),
    "bayat":            ("🕰", "BAYAT ŞİKÂYET"),
    "kapsam-disi":      ("⛔", "KAPSAM DIŞI"),
}

# ── `cozuldu` MADDESININ IMI, `delil_atlas` DEGERINDEN TURER ─────────────
# 🔴 BU TABLO KAPALIDIR: burada olmayan bir deger gelirse alet ÇÖKER, sessizce
#    🟠'ye DUSMEZ. Sebep: `IZ-YOK DENETIM A/B/C` turu bu alani yeni degerlerle
#    dolduracak; tablo acik olsaydi tanimadigi her degeri "iddia edildi" diye
#    raporlar ve ÖLÇÜLMÜŞ bir sonuç ÖLÇÜLMEMİŞ görünürdü (D026 · D067).
#    ⇒ Bir aletin COKMESI, yanlis cevap vermesinden IYIDIR.
DELIL_IM = {
    "dogrulandi":        "cozuldu_commitli",    # commit VAR — S-011 kurali
    "veride-dogrulandi": "cozuldu_veride",      # 🆕 karsiligi VERIDE var
    "iz-yok":            "cozuldu_izsiz",       # henuz olculmemis
    "yapilmamis":        "cozuldu_yapilmamis",  # 🆕 olculdu, karsiligi YOK
    "olculemedi":        "cozuldu_olculemedi",  # 🆕 olculemedi (≠ yapilmamis)
    "iddiasiz":          "cozuldu_iddiasiz",    # uygulama iddiasi TASIMIYOR
    "curuk":             "cozuldu_curuk",
}

# ── KAYITLAR — sira BURADA belirlenir, S numarasi sirayla verilir ─────────
# (kume_id, baslik, KARAR metni)
KAYITLAR = [
    # ═══ HARİTA VE MOTOR ═══
    ("K16-NOKTASIZLIK",
     "«Aradaki topraklar boyanmamış» · «bu koridor niye boş» · «burası fazladan Osmanlı»",
     """**KUSUR ÇOĞU ZAMAN NE VERİDE NE KODDA — NOKTASIZLIKTADIR.** `CLAUDE.md §2`:
noktası olmayan bölge **en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.**
Çare kod düzeltmek değil **nokta eklemektir.**

Ölçülmüş vakalar: Gümülcine koridoru (İskeçe + Kırcaali → 50 km içinde 1→2 nokta,
2. en yakın 72→43 km) · Mâverâünnehir **16 nokta** (`1f7d8d2`) · Şarköy · Saroz ·
Behramkale · Beykoz **4 nokta** (`a550bcd`) · Kırım yarımadası **14 nokta** ·
Himalaya (`a863b22`) · Boğaziçi (Anadolu ↔ Rumeli Hisarı 1,54 km — depodaki en
yakın iki nokta; `kur:` yüzünden 1452 öncesi peteği yoktu).

🔴 **KURAL: bir «harita yanlış» raporunda İLK SORU şudur — o bölgede yerleşim
noktası var mı?** Cevap hayırsa hata orada, kodda değil.
⚠️ Ve noktasızlık **İKİ YÖNE DE** hata üretir (`§3.5.1`): komşusu Osmanlı ise
Osmanlı FAZLA, komşusu tâbi ise EKSİK görünür. Tek yönlü aramak yarısını kaçırır."""),

    ("K22-DOGRULAMA",
     "«Bu toprak o tarihte gerçekten bunun muydu?» — tarihî doğrulama talebi",
     """Bu kümenin **tek bir çaresi yoktur**; her maddesi ayrı bir kaynak sorusudur ve
işlem `§4`ün kendisidir: **TDV → yoksa akademik → yoksa `bulunamadı` yaz.**

📌 Ve kümenin en öğretici sayısı şu: **{{madde}} maddenin {{zaten}}'i «zaten
doğru» çıktı (%{{yuzde}})** — yani şikâyetin bu kadarında veri haklıydı, görünen
şey kusur değildi. Bu oran kovanın **kapanmayacağını** söyler: doğrulama talebi
bir borç değil, **akan bir iştir.**

🟢 Kapatılanlardan örnekler: Venedik toprakları (`2931f04`) · Parkan bozgunu ile
Estergon kaybı TDV ile ayrıştırıldı, 18 gün fark (`073df09`) · Kırcaali `kur:`
tarihi TDV 1482 tahririyle (`f1c76a3`) · Karaman'ın Taşeli sahili (Alanya ve
Anamur 1471, Silifke 1473 — **gerçekti, düzeltilmedi**)."""),

    ("K18-ENKLAV",
     "Enklav ve benek görünümü — «bu parça niye kopuk duruyor»",
     """**ÜÇ AYRI KÖKÜ VAR ve çareleri farklı:**
```
① KOMŞU KAYITLARIN TARİHİ AYRIŞIYOR   Isparta: kendisi 1381, komşuları 1391
                                       ⇒ on yıl enklav (47aa386)
② KİMLİK ZİNCİRİ EKSİK                 Timurlu–Karakoyunlu–Akkoyunlu tamamlandı
                                       ⇒ enklav 9 → 0 (5336407)
③ NOKTASIZLIK                          S-012'nin ta kendisi
```
🟢 **VE BU KÜMEDEN BİR KURAL MOTORA İNDİ — «EKLEYİCİ KAPI» (`b55c262`).**
Emre'nin cümlesi: *«ileride bir toprak alındığında aradaki topraklar
boyanmıyorsa sistem şunu sormalı: aradaki topraklar katılmadı mı? Katılmadığına
dair kuvvetli emare varsa doğrulanır; yoksa o toprağa giden yol ve çevresi
ENKLAV YARATMADAN boyanmalı.»*

⚠️ **Enklav her zaman kusur değildir** — 46 maddenin 18'i «zaten doğru» çıktı."""),

    ("K19-KIMLIK",
     "Devlet kimliği — `iran` bir coğrafya adıdır, Akkoyunlu/Karakoyunlu/Safevî ayrımı",
     """**`iran` BİR DEVLET DEĞİL, 642 YILLIK BİR ARTIK KUTUSUYDU** — 326 dönem tek
etikete yığılmıştı, Arabistan yarımadasında bile `iran` etiketi vardı.

🟢 **Irak ve Arabistan tarafı ÇÖZÜLDÜ** (`47aa386`): 39 nokta · 44 dönem gerçek
sahiplerine bölündü (`ilhanli → celayirli → karakoyunlu → akkoyunlu` +
`usfuri` · `cebri` · `nebhani`), `iran` dönemi **326 → 282**.

🔵 **AÇIK KALAN — İRAN ÇEKİRDEĞİ:** Safevî–Afşar–Zend–Kaçar ardışıklığı,
~188 dönem. Bu, sicilin **`S-001`** kaydının devamıdır ve hâlâ kuyruktadır.

⚠️ Ve aynı kümenin ikinci yüzü **hayalet devlet**tir (`CLAUDE.md §3.5`): kayıt
sahipsiz değil, **sahibi o tarihte ölmüş.** Denetimlerin hiçbiri bunu sormaz."""),

    ("K17-GEOMETRI",
     "Kıymık · üçgen · cetvel çizgisi · «gözü kanatan» görüntü — petek seyrekliği",
     """**BU BİR ÇİZİM KUSURU DEĞİL, BİR YOĞUNLUK ÖLÇÜSÜDÜR.** Petek sınırı komşuların
tam ortasından geçer; komşu 300 km ötedeyse sınır oraya kadar uzanır ve **kıymık**
görünür. Ölçü birimi: **en yakın nokta mesafesi.**
```
kuzey Arabistan   0 nokta · altı petek 268-345 km'den uzanıyordu
7 çöl noktası     en yakın nokta 268 → 87 km   (3,1×)      95f774c
başka bir vaka    merkez 310 → 94 km            (3,3×)
```
🔴 **VE BİR VAKA GEOMETRİK DEĞİL TOPOLOJİKTİ:** Ulubat 1303'te Osmanlı yazıyordu,
üç komşusu 1334 — ama Bursa 1326'da düştü ve Ulubat ondan **30 km daha batıda.**
Atlas 23 yıl boyunca cepheden kopuk bir ada çiziyordu. `1303 → 1334` (`c8b56a1`).
⚠️ Kaynak TDV değil, **atlasın kendi komşu kayıtlarıdır** — kayıtta öyle yazar.

🟢 Sınır bandı kusuru da burada kapandı: `genislik_px = u_km × 2^zoom / 67,8`
ÜST SINIRSIZDI; çölde 400-1000 px bulanık bant oluyordu. Piksel tavanı + ters
opaklık (`3a36b65`)."""),

    ("K15-BOSLUK-KASITLI",
     "«1281'de burada kimse yaşamıyor muydu?» — boş alan KUSUR DEĞİL BEYANDIR",
     """**BOŞ ALANIN KENDİSİ BİR KAYITTIR.** `data/bos_alanlar.js` ölçüldü
(2026-08-21): **226 gerçek boşluk kaydı**, ve **cinsi yazılmamış kayıt 0**:
```
devletsiz-yerlesim 92 · kabile 48 · devletsiz 37 · veri-yok 32 · insansiz 9 · hata 8
```
⇒ Sahra · Rub'ul Hâlî · Kırım bozkırı · kuzey Asya boş görünüyorsa, çoğu yerde
**öyle görünmesi doğrudur** — orada nokta olmaması bir eksik değil bir beyandır
(`Değişmez 1`in 314 kasıtlı sahipsiz noktası bunun için var).

🟢 Ve gerçekten kapatılması gereken şeritler için **mesafe puanlaması** yazıldı
(`68ac2ab`): Medine–Yenbû–Tebük · Basra–Katîf koridorları.

⚠️ **AMA «beyan» ile «eksik» AYRI ŞEYLERDİR ve ikisi aynı görünür.** Cevabın
kendisi bunu yazmış: *«ÖLÇMEDİM: Medine-Yenbû-Tebük üçgeninin BUGÜNKÜ
doluluğunu.»* Bu satır bir borçtur, kapanmadı."""),

    ("K14-RENK",
     "Renk sistemi — denizle karışan ton, üst üste binmiş iki renk, komşu benzerliği",
     """🟢 **DENİZLE KARIŞAN RENK ÇÖZÜLDÜ** (`eec5f3d`): **56 kimlik denizden
ayrıştırıldı, 44 hex noktası değişti** (Delhi `#00acc1` → `#20d820`).

🔴 **VE ŞİKÂYET BİR DENETİM KÖRLÜĞÜ BULDURDU:** `renk_olc.py` gövdeleri
**birbirine karşı** ölçüyordu, **DENİZİ HİÇ SORMUYORDU** — oysa deniz her
gövdenin her kenarında. Salt ΔE ölçütü Delhi'yi kaçırıyordu (18,74 > 15 eşiği).
📌 `CLAUDE.md §11`in *«denetim var ≠ o soruyu soruyor»* ailesinin renk yüzü.

⚠️ **«Üst üste binmiş iki renk» diye görünen şey üst üste binme DEĞİLDİR:** her
petek hücresinin **tek** sahibi vardır; görülen şey iki rengin arasındaki
sınırdır. Ve `renkler.py` **veriye bağlıdır** — hiçbir renge dokunulmadan, yalnız
bir dönem tarihi değişerek yeni çakışma doğabilir (`§9`: veriye dokunan her
koşudan sonra `renk_olc.py` koşulur)."""),

    ("K05-ISGAL-TARALI",
     "Taralı alanlar — «bu taralı bölgenin Yaş/Bükreş/Karlofça antlaşmasıyla ne alakası var»",
     """🔴 **YEDİ TARALI-ALAN ŞİKÂYETİNİN YEDİSİ DE TEK FONKSİYONUN TEK SATIRINDAN
GELİYORDU** — ayrı ayrı kusur DEĞİLDİ (`e53c86a`).

**KÖK:** `arac/uret_devirler.py` `coz()` **PARCA_HALKA katmanını atlıyordu**
(`app.js:109-120` çoktan yeni biçime geçmişti) ⇒ gövde alakasız halkalardan
kuruluyordu.
```
ÖNCE   Lehistan-Litvanya HİÇ ÇİZİLMİYORDU  ⇒ Podolya "görünmüyor" sanıldı
SONRA  Karlofça'da Avusturya 263.758 km² · 3 parça (Budin·Peçuy·Estergon·Eğri·
       Kanije·Uyvar·İstolni Belgrad·Peşte·Varad·Osek·Mohaç·Varadin)
       Lehistan-Litvanya 164.643 km² · 2 parça (KAMANİCE ve BAR içinde)
```
⚠️ **VE KAYIT EKSİK DEĞİLDİ:** Kamaniçe verisi baştan beri doğruydu
(1683 Osmanlı → 1699 Lehistan); **gövde onu göremiyordu.**
📌 Ders: *«bir düzeltmenin veride inmesi, haritada indiği anlamına gelmez»*
(`D042`) — burada tersi: **veri doğruydu, gösterim yoktu.**"""),

    ("K20-SINIR-1923",
     "1923 kapanış sınırları — Hatay, Suriye-Irak hattı, SSCB sınırı",
     """1923 sınırları **ayrı bir kalite kademesine** bağlıdır (6. kalite) ve Emre'nin
şikâyeti haklı çıktı. Cevabın kendi cümlesi: *«ben NOKTA SAHİPLİĞİ ölçüp size
HARİTA DOĞRU gibi anlatmıştım. İkisi ayrı şey ve bunu sahiplendim.»*

📌 **VE BU KAYDIN ASIL DERSİ BUDUR:** nokta sahipliğinin temiz olması, haritanın
doğru olduğunu **göstermez** — `Değişmez 1` «sahipsiz nokta var mı» diye sorar,
«sınır doğru yerden mi geçiyor» diye sormaz.

⚠️ **Bu kayıtta DOĞRULANMIŞ COMMIT YOK.** Trakya-Bulgaristan hattı gibi
kalemlerin yapıldığı yazılı, ama bu sicilin taban ölçümünde (bugün) bir commit
izine bağlanamadı — yani `S-011` ölçütüne göre **✅ yazılamaz.**"""),

    # ═══ KRONOLOJİ ═══
    ("K24-DEGISMEZ2",
     "Harita değişiyor ama kronolojide maddesi yok — `Değişmez 2`",
     """Bu, projenin **ikinci değişmezidir** ve sistem ZATEN VAR: her kırılmanın ±30
gün içinde bir kronoloji maddesi olmak zorundadır. Bugünkü ölçüm: Osmanlı
tarafında **0 açık.**

🔴 **AMA KARAMAN VAKASI DEĞİŞMEZ 2'NİN KÖR NOKTASINI GÖSTERDİ:**
```
şikâyet   "Karaman'ın ilhakı maddesinde ilhak görünmüyor"
ölçüm     ilhak kendi maddesinde (1468-01-01) DEĞİL, İKİ MADDE SONRA
          (1468-04-01, Uzun Hasan maddesi) boyanıyordu — beş kayıt çekildi
```
⇒ ***`Değişmez 2` «o günde bir madde VAR mı» diye sorar, «DOĞRU madde mi» diye
SORMAZ.*** Denetim temiz raporlarken kullanıcı hatayı görüyor (`1dd0ad7`).

🟢 Öteki kapananlar: İzvornik ayrı maddesi (`1d5fb76`) · Anabolu 1686-08-30 ·
Semendire 1738-08-01 · Munkacs 1688-01-17 — **üçü de zaten yazılmıştı**, şikâyet
bayatlamıştı (`D044`)."""),

    ("K12-OLAY-YERI",
     "Olay mahalli haritada işaretlenmiyor — `yer_id` / savaş kaydı eksiği",
     """Bir savaş, bozgun ya da antlaşma haritada işaretlenmiyorsa kusur **kayıttadır**:
ya kronoloji maddesinde `yer_id` yok, ya `savaslar.js`te girdi yok.

🟢 Kapatılanlar canlı tarayıcıda **görsel olarak** doğrulandı (`4581d71`):
```
Salankamen bozgunu 1691-08-19   işaret çiziliyor · etiket doğru
Granbosa Kalesi    1692         glif: (dbl) kuşatma — doğru tür
Karlofça kasabası  1699-01-26   glif: ANTLAŞMA — doğru tür
Ridaniye · Zenta · Ulaş · Haçova (9d79b24) · Racova (be8ba85) · Sinj (bfe254f)
```
📌 Ve teşhis **karşı-sınavdan** geçti: `sonVurgulanan = -1` yapılarak commit
öncesi davranış üretildi ve kusur geri geldi — yani düzelten şeyin O olduğu
ölçüldü (`D168`)."""),

    ("K07-AYNI-GUN",
     "Aynı güne iki madde düşünce panel ile harita ayrışıyor",
     """🔴 **KÖK SEBEP: DÖRT AYRI «ŞU ANKİ MADDE» TANIMI VARDI.**
```
① liste vurgusu   kendi ikili araması    TARİH güdümlü
② detay paneli    ZAMAN.suankiOlay       TARİH güdümlü
③ başlık damgası  ZAMAN.suankiOlay       TARİH güdümlü
④ suankiOlayI     ⏮/⏭ ve HARİTA         İNDEKS güdümlü   ← hiçbiriyle birleşmemiş
```
Tarih güdümlü arama *«gi ≤ t olan SON madde»*yi verir ve **eşitlikte HEP
SONUNCUYU** seçer ⇒ harita 101, panel 102.

🟢 **ÇARE:** `ZAMAN.suankiOlay`a dördüncü bir `tercih` parametresi — **yalnız
`gi` TAM EŞİTSE** kazanıyor, yani beraberlik dışında davranış hiç değişmiyor
(`d2d35ab`). Ve aynı gün grubu artık ①②③ diye numaralanıyor (`07c33b2`).

🟢 Sessiz bir kusur da önlendi: eski kod `sonVurgulanan`ı **iki işe birden**
kullanıyordu (vurgunun yeri VE `gecmis` boyamasının aralığı); ayrılmasaydı bir
satırın `gecmis` sınıfı bayatlardı."""),

    ("K25-MADDE-METNI",
     "Madde başlığı o gün kırılan öteki yerleşimleri anmıyor",
     """Bir gün birden çok yerleşim el değiştirdiğinde başlık yalnız birini anıyor;
detay metninde hepsi var. Emre'nin isteği: **başlıkta da anılsın.**
```
Halep 1516-08-28   yer: "Halep" → "Halep, Antakya, Deyrizor, Rakka"
Şam               Hama · Humus · Beyrut · Palmyra  — AYNI SINIF, ayrı iş değil
Rodos             Şövalyelerden teslim alınan adalar ADIYLA sayılsın
```
📌 Bu bir **metin** düzeltmesidir: hiçbir dönem tarihine dokunmaz, `Değişmez
1/2/2s` sayaçlarını değiştirmez."""),

    ("K23-DUNYA-OLAYLARI",
     "Dünya olayları kronolojide yer almalı — Fransız Devrimi, uluslararası olaylar",
     """🟢 **ALTYAPI ZATEN VARDI ve devralınan not ÇÜRÜDÜ.** Devralınan not *«hiç
başlanmamış»* diyordu; ölçüm: `dunya:` (1-5 önem) alanı **kırk kronoloji
dosyasında** mevcut ve `index.html`e **42 dosya bağlı**.

🟢 Fransız Devrimi maddesi `data/olaylar_ek19.js`te (Bastille) — iki ayrı
şikâyeti tek madde kapatıyor (`7297135`).

📌 Bu kayıt `D045`in bir üyesidir: *«istenen şeyin altyapısı zaten vardı.»**
⇒ Bir istek gelince **önce var mı diye ölçülür**, sonra yazılır."""),

    ("K10-SEFER-GUZERGAH",
     "Sefer güzergâhı — kesikli çizgi, planlanmış yürüyüş sarı gösterilsin",
     """**KURAL (Emre'nin beyanı):** gerçekleşmiş sefer **siyah kesikli**, henüz
yapılmamış ama planlanmış yürüyüş **SARI KESİKLİ** (koyu sarı / turuncumsu).
Deniz seferleri `savaslar.js` `tur:"deniz"` kaydıyla (Rus donanması 1833-02-20
Büyükdere) çiziliyor.

⚠️ **Bu kümenin 12 maddesinin 7'si «zaten doğru» ve 2'si «tekrar»** — yani istek
büyük ölçüde karşılanmış, şikâyetler bayatlamış. `82aa96e` Timur'un İzmir seferi
çizgisini kapatıyor."""),

    ("K21-VASSAL",
     "Vassal / tâbi gösterimi ve tâbiiyet kademesi",
     """Tâbi toprak açık tonda boyanır; `v:` dönemleri bunu taşır. `Değişmez 3`
bakımından **`OSMANLI` ile `tâbi` çelişki SAYILMAZ** — ikisi de Osmanlı
sistemindedir ve ayrımın bilerek yan yana durduğu yerler var (Boğdan
voyvodalıktır ama Hotin rayası doğrudandır).

⚠️ **Bu kayıtta da DOĞRULANMIŞ COMMIT YOK** (7 maddenin 3'ü «zaten doğru»,
1'i «gerek yok», 1'i «bayat»). Tâbi kademesinin haritaya inişi `r3556`
yayınında ölçüldü (1800-06-15'te 475.231 km² doğrudan→tâbi geçti) ama o ölçüm
bir tahta mesajına dayanıyor, commit'e değil."""),

    # ═══ ARAYÜZ ═══
    ("K13-PANEL-ARAYUZ",
     "Panel · buton · menü · sütun · dizin penceresi",
     """Arayüz kalemleri (`js/app.js` · `css/style.css`) — sahibi **Oturum 1**.
Kapatılanlar: dar/geniş sütun düğmesi · devletler dizini ↔ kronoloji bağı
(`4b6fb71`) · odak seçiliyken ok-tuşu akışı (`fcae60b`) · «haritaya yay»
düğmesi (`88f5eab`) · taslak-rozet metninin kaldırılması · süzgeç düğmesinin
kronoloji başlığına taşınması.

📌 Ve bir kalem `kişiBul()` eşleştiricisiydi: Fetret maddesinde **alakasız kişi**
(Çandarlı Halil) açılıyordu; simetrik eşiğe geçildi ve Kemal Reis gerçek kayıt
oldu (`e8c4515`)."""),

    ("K11-SEMBOL",
     "Sembol sözlüğü — başkent yıldızı, eyalet merkezi, lejant",
     """**KARAR (Emre'nin tarifi birebir):** başkentte **NOKTA yıldıza dönüşür**, adın
yanına ayrı yıldız eklenmez. Lejanta **sembol bölümü** eklendi; sarı gösterimin
karşılığı `.tur-kusatma .sv-ikon`, koyu altın sarısı `#b8860b` (`756c8bc`).

🟡 **VE BİR PARÇASI BİLEREK YARIM BIRAKILDI:** eyalet/sancak **simge ayrımı
YAPILMADI.** Gerekçe kayıtta duruyor: `k:1` bugün yalnız 4 noktada var, hangisi
eyalet hangisi sancak belli değil — **simge çizilse YANLIŞ VERİ çizilirdi.**
Simge ayrımı **idarî katman verisi** gelince bağlanacak.
📌 Bu, sicilin en değerli kayıt cinsidir: *«yapılmadı»* değil **«niçin
yapılmadığı ölçülmüş bir yarım.»**"""),

    ("K06-UST-CUBUK",
     "Üst çubuktaki başlık ile kronoloji sütunundaki madde metni tutmuyor",
     """🔴 **GERÇEK KUSURDU, ölçüldü ve düzeltildi (`ad42467`).**
```
SEBEP  #donem-etiketi DÖNEM adını taşıyordu ve YALNIZ `di !== aktifDonem`
       dalından yazılıyordu ⇒ metin bir sonraki TOPRAK DEĞİŞİMİNE kadar
       takılı kalıyordu
VAKA   8 Kasım 1687 · madde "IV. Mehmed'in hal'i" · tepe hâlâ "Kayıp: Herseknovi"
ÇARE   tepeEtiketGuncelle — TEK yazan fonksiyon, HER GÜN koşuyor.
       Tepe artık KRONOLOJİ MADDESİNİ gösteriyor; dönem adı ayrı alana taşındı.
```
🔴 **VE KUSURU GİZLEYEN ŞEY ÖLÇÜMÜN KENDİSİYDİ: İLK YEDİ ÖLÇÜM TESADÜFEN
UYUŞMUŞ** — hepsi toprak kaybı maddesiydi. Kusur ancak **toprak DEĞİŞMEYEN**
ilk maddede görüldü.
📌 *Bir ölçüm dizisi temiz çıkabilir çünkü hepsi aynı daldan geçmiştir.*"""),

    ("K08-UCUS-ODAK",
     "Uçuş / odak animasyonu ve ayarları",
     """Haritanın olay mahalline çekilmesi, kenardan giriş yönü, zoom seviyesi ve
uçuş ayarlarının etkisi. Kapatılanlar: kenar giriş yönü (`d2d35ab`) · uçuş
ayarları düzenlemesi (`5ca81bf`) · yavaş çekim (`d7dde09`) · elden çıkan
toprağın uçuşsuz gösterimi (`5bbaebc`).

📌 Bir kalem bir **ölçüm dersi** bıraktı: tasnif *«ölçmedim»* demişti, oysa kod
**iki gün önce zaten değişmişti** (`f226aa2`). ⇒ *«ölçülemedi» ile «yapılmadı»
ayrı damgalardır* (`D107`)."""),

    ("K09-HIZ-ANIMASYON",
     "Oynatma hızı · göz kırpma · yeni toprak vurgusu · emoji ayarı",
     """Yeni alınan toprakların **yanıp sönerek** vurgulanması (`3a63fd8`), oynatma
hızları ve çubuk yazısının kalınlaştırılması (`ebbfdcd`), emoji gösterimi
ayarlara alındı (`9a02e24`).

🔴 **VE BİR İSTEK REDDEDİLDİ — GEREKÇESİYLE:** «Taiz'in kaybı haritada belli
olmuyor, nasıl göstermeli?» ⇒ **EMRE'NİN KARARI (2 Eylül, soru ⑤): (b) —
küçük toprak kayıpları için özel görsel vurgu EKLENMEYECEK.** Veri zaten doğru;
işçi oturumun (a) önerisi kendi ifadesiyle *«Emre'nin zevkine bağlı»* idi."""),

    # ═══ İÇERİK ═══
    ("K01-EK-OKUMA",
     "Ek okuma · merak edilenler · tartışma · magazin maddeleri (8. boyut)",
     """**KÜLLİYATIN EN BÜYÜK TEK İSTEK KÜMESİ** — 54 madde. Padişah maddelerinden
Hezârfen'e, kardeş katlinden kadınlar saltanatına: Emre bu maddeleri **anlatıyla
zenginleştirmek** istiyor.

🟢 **VE KAPI AÇIK:** `CLAUDE.md §1.6` — **8. BOYUT AÇILDI (2 Eylül 2026,
Emre'nin kararı).** Açılan iki somut kalem: ① kronoloji maddelerine **kendi
görseli** (🔴 yalnız kamu malı / CC0, kaynağı `gorsel_kaynak:`e yazılır)
② **ek okuma türlerinin tanımlanması** (11 başlığın 7'si hâlâ tanımsız).

⚠️ **AMA «AÇILDI» ≠ «SINIRSIZ».** `ONCELIK.md`in çöl seyyahı ilkesi yürürlükte:
8. boyut hâlâ **devletler ve sınırlardan sonra** gelir. Bu küme bir **sevk**
bekler, kendiliğinden başlamaz.
📌 Altyapısı var: `data/merak.js` · `data/ekokuma.js` · `EKOKUMA_TUR` sözlüğü."""),

    ("K02-ANTLASMA-METNI",
     "Antlaşma maddelerine antlaşma metni / hükümleri düğmesi",
     """🟢 **ZATEN UYGULANMIŞ.** `js/app.js` `EKOKUMA_TUR` sözlüğünde `antlasma`
türü (📜 Antlaşma hükümleri) var; `ANTLASMALAR` (**41/41 kayıt**, `ozet` +
`topraklar` dolu) ile `EKOKUMA`daki `tur:"antlasma"` kartları birleştirilerek
besleniyor.
📌 `D045` — istenen şeyin altyapısı zaten vardı."""),

    ("K04-KAYNAK-YONTEM",
     "Kaynak politikası — TDV birinci kaynak, dışına çıkınca nereye",
     """**KARAR YAZILI VE YÜRÜRLÜKTE** (`CLAUDE.md §4`): İslâm dünyası, Osmanlı ve
komşuları için **birincil kaynak TDV**; TDV'nin kapsamadığı coğrafyalar **ve
kapsamadığı TANECİKLER** için akademik kaynak meşrudur.

🔴 **KIRMIZI ÇİZGİ (Emre'nin beyanı, 9 Ağustos 2026):** gidilecek kaynaklar
**akademik, güvenilir, bilimsel** olmalı. Bağlayıcı sınav **kırmızı listedir**:
forum · blog · içerik çiftliği · kaynaksız derleme · YZ üretimi metin · popüler
«tarih sayfası» **kullanılmaz**. Vikipedi tek dayanak değildir.
⚠️ Üçüncü şart ikisini de denetlenebilir kılar: **KAYNAK GİZLENMEZ** — `kaynak:`
alanına açıkça yazılır, bulunamadıysa `bulunamadı` yazılır.

🟢 Ve bu istek için `denetim/KAYNAK-HARITASI.md` yazıldı: üç kademeli bölge
listesi (TTK/Belleten · İSAM · BOA · Encyclopaedia Iranica · Cambridge History)."""),

    # ═══ ALTYAPI (Atlas dışı) ═══
    ("K03-KUTU-ALTYAPI",
     "Kutu · tespih · paket altyapısı — Atlas deposunun DIŞI",
     """Bu maddeler atlasın verisine/motoruna/arayüzüne dair değil; **ClaudEmre
kutusunun** kendi altyapısına dair.

🟢 Ölçülmüş bir vaka: *«mesaj kutusu ağır çalışıyor»* — tek «Kaydet» tıklaması
**üç tam yeniden çizim ve üç beep** üretiyordu (`_cevabi_yaz`ın iki tazeleme
çağrısı + `_yokla`nın kendi yazdığı dosyayı «biri değiştirdi» sanması).

🔴 **VE BİR SINIR:** bu kalemler **atlas oturumlarının işlem alanı dışındadır**
(`§7`). Koordinatör onayı (M-2104): *«Atlas kuyruğu atlas işleri içindir;
ClaudEmre kutusuna tek satırlık kayıt gitsin.»*"""),
]


BILINMEYEN = collections.defaultdict(list)   # tanimsiz delil_atlas degerleri
DAMGA_AMA_DELILSIZ = []                      # "dogrulandi" ama commit YOK


def main():
    girdi = G
    if "--girdi" in sys.argv:
        girdi = sys.argv[sys.argv.index("--girdi") + 1]
    d = json.load(io.open(girdi, encoding="utf-8"))
    ms = d["maddeler"]
    kume_ler = collections.defaultdict(list)
    for m in ms:
        kume_ler[m["kume"]].append(m)

    tanimli = {k for k, _b, _t in KAYITLAR}
    eksik = set(kume_ler) - tanimli
    fazla = tanimli - set(kume_ler)
    if eksik or fazla:
        print("🔴 KUME ile KAYIT ayrisiyor — eksik:", eksik, "| fazla:", fazla)
        return 1

    sat = []
    genel = collections.Counter()
    toplam_bagli = 0
    toplam_onay = 0
    for i, (kid, baslik, karar) in enumerate(KAYITLAR, start=12):
        uy = sorted(kume_ler[kid], key=lambda x: (x["paket"], x["no"]))
        toplam_bagli += len(uy)
        sayim = collections.Counter()
        for m in uy:
            h = m["hukum"]
            if h != "cozuldu":
                sayim[h] += 1
                continue
            da = m["delil_atlas"]
            if da not in DELIL_IM:
                BILINMEYEN[da].append("%s/%s" % (m["paket"], m["no"]))
                continue
            anahtar = DELIL_IM[da]
            # 🔴 S-011 KURALI BURADA UYGULANIR: "dogrulandi" damgasi TEK BASINA
            #    ✅ YAPMAZ — commit'in KENDISI aranir. Damga delilin yerine gecemez.
            if anahtar == "cozuldu_commitli" and not m["delil_commit"]:
                DAMGA_AMA_DELILSIZ.append("%s/%s" % (m["paket"], m["no"]))
                continue
            sayim[anahtar] += 1
        toplam_onay += sayim["cozuldu_commitli"]
        genel.update(sayim)
        cm = sorted({m["delil_commit"] for m in uy if m["delil_commit"]})
        kaynak = " · ".join(
            "%s/%s" % (m["paket"].replace("parti-", "").replace("emrelic-", "E"),
                       m["no"].replace("H-", "")) for m in uy)

        hukum_satiri = " · ".join(
            "%s %s **%d**" % (IM[k][0], IM[k][1], v)
            for k, v in sorted(sayim.items(), key=lambda x: -x[1]))

        sat.append("## S-%03d · %s\n" % (i, baslik))
        sat.append("> **küme** `%s` — **%d madde** · ölçüm **%s**\n> %s\n"
                   % (kid, len(uy), OLCUM_TARIHI, hukum_satiri))
        # 🔴 Karar metnindeki her SAYI da uretilir: {{madde}} {{zaten}} {{yuzde}}
        #    Elle yazilan bir sayi, kume degisince SESSIZCE bayatlar.
        zd = sayim.get("zaten-dogru", 0)
        metin = (karar.replace("{{madde}}", str(len(uy)))
                      .replace("{{zaten}}", str(zd))
                      .replace("{{yuzde}}", str(round(100.0 * zd / max(len(uy), 1)))))
        sat.append("")
        sat.append(metin)
        sat.append("")
        if cm:
            sat.append("**Doğrulanmış commit (%d):** %s"
                       % (len(cm), " · ".join("`%s`" % c for c in cm)))
        else:
            sat.append("**Doğrulanmış commit: YOK** — bu kayıtta `✅` yazılamaz "
                       "(`S-011` kuralı).")
        # 🔵 VERIDE VAR olanlarin DELILI: nerede + KIM olctu (D114)
        yer = [m for m in uy if m["delil_yer"]]
        kim = sorted({m["delil_kim"] for m in uy if m["delil_kim"]})
        if yer or kim:
            sat.append("")
            sat.append("**🔵 veride doğrulanan (%d)** — ölçen: %s%s"
                       % (len(yer), " · ".join(kim) or "yazılmamış",
                          (" · örnek: `%s`" % yer[0]["delil_yer"]) if yer else ""))
        sat.append("")
        sat.append("<details><summary>kaynak madde (%d)</summary>\n\n`%s`\n</details>"
                   % (len(uy), kaynak))
        sat.append("")
        sat.append("---")
        sat.append("")

    # ── İKİ KAPI — hicbiri sessizce gecilmez, ve SICIL YAZILMADAN once ──
    if BILINMEYEN:
        print("🔴 TANIMSIZ `delil_atlas` DEGERI — SICIL YAZILMADI.")
        print("   DELIL_IM tablosu KAPALIDIR; tanimadigi bir degeri 🟠 diye")
        print("   raporlamak, OLCULMUS bir sonucu OLCULMEMIS gostermek olurdu.")
        for deger, mad in sorted(BILINMEYEN.items()):
            print("   %-24s %3d madde   ilk: %s" % (repr(deger), len(mad), mad[0]))
        print("   ⇒ ya deger duzeltilir, ya DELIL_IM'e ADIYLA eklenir.")
        return 1
    if DAMGA_AMA_DELILSIZ:
        print("🔴 `dogrulandi` DAMGASI VAR AMA `delil_commit` BOS — SICIL YAZILMADI.")
        print("   S-011: damga delilin yerine gecemez. %d madde:"
              % len(DAMGA_AMA_DELILSIZ))
        for x in DAMGA_AMA_DELILSIZ[:10]:
            print("     ", x)
        print("   ⇒ commit yaziliyorsa `dogrulandi`, yazilamiyorsa")
        print("     `veride-dogrulandi` (🔵) kullanilir.")
        return 1

    ozet = " · ".join("%s %s %d" % (IM[k][0], IM[k][1], v)
                      for k, v in sorted(genel.items(), key=lambda x: -x[1]))

    bas = [
        CAPA,
        "",
        "# KÜLLİYAT SİCİLİ",
        "",
        "> 🔴 **BU BÖLÜM ÜRETİLİR — ELLE DÜZENLENMEZ.**",
        "> `py denetim/ARAC-SICIL-YAZ-0910.py --yaz` (Atlas deposunda).",
        "> Sayılar `denetim/OLCUM-SICIL-KUME-0910.json`dan gelir; elle yazılan tek",
        "> şey KARAR metnidir. Bir sayıyı düzeltmek için **ölçümü** yeniden koştur.",
        "",
        "**NİÇİN VAR:** yukarıdaki 11 kayıt sohbette verilen kararları tutuyordu ve",
        "**beş haftadır yazılmıyordu** (son kayıt 3 Ağustos). Bu arada `kutu/giden/`",
        "altında **45 paket · 681 madde** birikti; **500'ü karara bağlanmış**, ama",
        "45 ayrı `CEVAP.json`a dağılmış hâlde — yani *duruyor ama aranabilir değil.*",
        "Emre bir şikâyeti ikinci kez gönderdiğinde kimse *«bu şöyle karara",
        "bağlanmıştı»* diyemiyordu. Bu bölüm o 500 hükmü **25 KARARA** indirir.",
        "",
        "```",
        "ÖLÇÜM TARİHİ   %s      paket 45 · madde 681" % OLCUM_TARIHI,
        "hükümlü        %-4d    (681 − 181 açık: sirada 128 · olculecek 48 · kosu-bekliyor 5)"
        % toplam_bagli,
        "KARAR kaydı     %-4d   ARTIK (hiçbir karara bağlanamayan madde): 0"
        % len(KAYITLAR),
        "im dağılımı     %s" % ozet,
        "```",
        "",
        "🔴 **`✅ ÇÖZÜLDÜ` YALNIZ COMMIT'İ DOĞRULANMIŞ MADDEDE YAZILIR.**",
        "`S-011`in kendi kuralı budur: *«karar verildi» ile «uygulandı» ayrı",
        "olaylardır* — ve **damga delilin yerine geçemez.** Bir maddede",
        "`delil_atlas: \"dogrulandi\"` yazıp `delil_commit` boşsa üretici **çöker**,",
        "sicili yazmaz.",
        "",
        "⚠️ **VE BU BÖLÜM BAYATLAR, BİLEREK BÖYLE YAZILDI.** `D069`: *bir hüküm",
        "dosyası bir ölçüm değil, ölçümün FOTOĞRAFIDIR* — o yüzden her kaydın",
        "başında **ölçüm tarihi** duruyor. Fotoğrafı yenilemek elle düzeltmekle",
        "değil, ölçümü yeniden koşturmakla olur.",
        "",
        "## Hüküm sözlüğüne bu bölümde eklenen imler",
        "",
        "| im | hüküm | `delil_atlas` | ne demek |",
        "|---|---|---|---|",
        "| 🔵 | **VERİDE VAR** | `veride-dogrulandi` | commit izlenemiyor **ama iddianın karşılığı bugün veride VAR** — nerede olduğu `delil_yer`de, kimin ölçtüğü `delil_kim`de |",
        "| 🟠 | **İDDİA EDİLDİ** | `iz-yok` | «çözüldü» yazıyor, **henüz ölçülmedi** |",
        "| 🔴 | **YAPILMAMIŞ** | `yapilmamis` | ölçüldü, **karşılığı yok** — gerçek borç |",
        "| ❔ | **ÖLÇÜLEMEDİ** | `olculemedi` | ölçüm **yapılamadı** — bilinmeyen, borç DEĞİL |",
        "| ➖ | **İDDİA TAŞIMIYOR** | `iddiasiz` | madde bir uygulama iddiası taşımıyor |",
        "| 🕰 | **BAYAT ŞİKÂYET** | — | şikâyet gönderilirken doğruydu, cevap yazılırken artık üremiyordu |",
        "| ⛔ | **KAPSAM DIŞI** | — | atlasın işi değil (kutu altyapısı, Emre'nin kendi kaydı) |",
        "",
        "🔴 **`🔵` `✅`NİN GEVŞETİLMİŞ HÂLİ DEĞİLDİR** — farklı bir şey ölçüldüğü",
        "için farklı bir imdir. `✅` bir **commit** görmüştür; `🔵` **veride bir",
        "karşılık** görmüştür. İkisini tek imde toplamak, `S-011`i çiğnemek olur.",
        "🔴 Ve **`🔴 YAPILMAMIŞ` ile `❔ ÖLÇÜLEMEDİ` aynı kovaya konmaz** (`D107`):",
        "biri **gerçek borç**, öteki **bilinmeyen**. Birleştirmek, borcu",
        "bilinmezliğin arkasına saklamaktır.",
        "",
        "---",
        "",
    ]

    govde = "\n".join(bas + sat).rstrip() + "\n"

    print("kayit:", len(KAYITLAR), "| baglanan madde:", toplam_bagli,
          "| commit'li (✅ yazilabilen):", toplam_onay)
    print("dagilim:", ozet)
    if toplam_bagli != len(ms):
        print("🔴 BAGLANAN != TOPLAM:", toplam_bagli, "!=", len(ms))
        return 1

    if "--yaz" not in sys.argv:
        print("(kuru kosu — yazmak icin --yaz)")
        print("hedef:", HEDEF)
        return 0

    hedef = HEDEF
    if "--hedef" in sys.argv:          # yalnız SINAV içindir (taklit çıktı)
        hedef = sys.argv[sys.argv.index("--hedef") + 1]
        if not os.path.exists(hedef):
            io.open(hedef, "w", encoding="utf-8").write("# TAKLIT\n")
    eski = io.open(hedef, encoding="utf-8").read()
    if CAPA in eski:
        eski = eski.split(CAPA)[0].rstrip() + "\n\n"
    else:
        eski = eski.rstrip() + "\n\n---\n\n"
    io.open(hedef, "w", encoding="utf-8").write(eski + govde)
    print("YAZILDI:", hedef, "|", len(eski + govde), "karakter")
    return 0


if __name__ == "__main__":
    sys.exit(main())
