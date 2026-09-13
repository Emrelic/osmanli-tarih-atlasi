# -*- coding: utf-8 -*-
"""P09-ISGAL1919 — isg: yerleşim yaması ÜRETİCİ (veriye YAZMAZ).

py denetim/ARAC-ISGAL1919-YAMA-0914.py        → denetim/YAMA-ISGAL1919-0914.json yazar

Her HAZIR kalem için data/<dosya> içinden kaydın TAM metni (eski) çıkarılır,
değişiklik uygulanarak yeni metin kurulur. eski metin dosyada TAM 1 kez geçmek
zorundadır (assert). KARAR / BULUNAMADI kalemleri eski/yeni taşımaz.
Kaynak: yalnız TDV gövdeleri (okundu, alıntılar 15 kelimeden kısa).
"""
import io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")


def kayit_metni(metin, ad):
    anahtar = 'ad:"%s"' % ad
    n = metin.count(anahtar)
    assert n == 1, "%s: ad anahtarı %d kez geçiyor" % (ad, n)
    i = metin.index(anahtar)
    bas = metin.rindex("{", 0, i)
    derin, j, ic = 0, bas, None
    while j < len(metin):
        c = metin[j]
        if ic:
            if c == "\\":
                j += 2
                continue
            if c == ic:
                ic = None
        elif c in "\"'":
            ic = c
        elif c == "{":
            derin += 1
        elif c == "}":
            derin -= 1
            if derin == 0:
                return metin[bas:j + 1]
        j += 1
    raise AssertionError(ad + ": kapanış bulunamadı")


def donem(f, t, d, kaynak):
    return '{f:"%s",t:"%s",d:"%s",kaynak:"%s"}' % (f, t, d, kaynak)


def isg_ekle(eski, donemler):
    assert "isg:" not in eski, "kayıtta zaten isg: var — elle birleştir"
    govde = eski.rstrip()
    assert govde.endswith("}")
    govde = govde[:-1].rstrip()
    if govde.endswith(","):
        govde = govde[:-1]
    return govde + ",\n    isg:[" + ",".join(donemler) + "] }"


def degistir(metin, eski_parca, yeni_parca):
    assert metin.count(eski_parca) == 1, "parça %d kez: %s" % (metin.count(eski_parca), eski_parca)
    return metin.replace(eski_parca, yeni_parca)


YER = io.open(os.path.join(DATA, "yerlesimler.js"), encoding="utf-8").read()

kalemler = []


def hazir(kid, madde, ad, yeni_fn, kaynak, not_=None, kesinlik=None):
    eski = kayit_metni(YER, ad)
    yeni = yeni_fn(eski)
    assert YER.count(eski) == 1
    k = {"id": kid, "madde": madde, "durum": "HAZIR", "ad": ad, "dosya": "data/yerlesimler.js",
         "eski": eski, "yeni": yeni, "kaynak": kaynak}
    if not_:
        k["not"] = not_
    if kesinlik:
        k["gun_kaynagi"] = kesinlik
    kalemler.append(k)


# ── İzmir: s:yunanistan (düz sahiplik) → isg:yunanistan (taralı) ──────────
def izmir(e):
    e = degistir(e, '{f:"1919-05-15",t:"1922-09-09",d:"yunanistan"},{f:"1922-09-09",t:"1923-10-29",d:"tbmm-turkiye"}',
                 '{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}')
    e = degistir(e, '{f:"1425-06-01",t:"1919-05-15",y:"savas"}', '{f:"1425-06-01",t:"1920-04-23",y:"savas"}')
    return isg_ekle(e, [donem("1919-05-15", "1922-09-09", "yunanistan",
                              "TDV izmir — 15 Mayıs 1919'da başlayıp 9 Eylül 1922'ye kadar süren Yunan işgali")])


hazir("ISG-01", "0039/H-0005", "İzmir", izmir,
      {"izmir": "15 Mayıs 1919'da başlayıp 9 Eylül 1922'ye kadar süren Yunan işgali"},
      "Veri Yunan işgalini s:yunanistan (DÜZ sahiplik) olarak yazıyordu — Emre'nin 'tarama ile gösterelim' isteği ve Sevr'in hiç yürürlüğe girmemesi gereği isg:'e çevrildi. Taban, bütün Batı Anadolu'daki atlas geleneğine hizalandı: d: 1920-04-23'e kadar, sonra s:tbmm-turkiye (1920-04-23 kırılmasının maddesi VAR: TBMM'nin açılışı). Kaldırılan kırılmalar: d 1919-05-15 kayıp · s 1922-09-09 tbmm başlangıcı.")


# ── Aydın: aynı çevirme + TDV günü 27 Mayıs + 30 Haziran–4 Temmuz boşluğu ─
def aydin(e):
    e = degistir(e, '{f:"1919-05-15",t:"1922-09-07",d:"yunanistan"},{f:"1922-09-07",t:"1923-10-29",d:"tbmm-turkiye"}',
                 '{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}')
    e = degistir(e, '{f:"1425-06-01",t:"1919-05-15"}', '{f:"1425-06-01",t:"1920-04-23"}')
    return isg_ekle(e, [
        donem("1919-05-27", "1919-06-30", "yunanistan", "TDV aydin — 27 Mayıs 1919'da Yunan işgaline uğradı; 30 Haziran'da kısa bir süre için kurtarıldı"),
        donem("1919-07-04", "1922-09-07", "yunanistan", "TDV aydin — 4 Temmuz'da yeniden işgal edildi; 7 Eylül 1922'de kurtarıldı"),
    ])


hazir("ISG-02", "0039/H-0005", "Aydın", aydin,
      {"aydin": "27 Mayıs 1919'da Yunan işgaline uğradı · 30 Haziran'da kısa bir süre için kurtarıldı · 4 Temmuz'da yeniden işgal edildi · 7 Eylül 1922'de kurtarıldı"},
      "Veri Aydın'ı İzmir'le AYNI GÜN (1919-05-15) s:yunanistan gösteriyordu — TDV 27 Mayıs diyor (atlas günü kaynaksızdı, İzmir'den devralınmış). 30 Haziran–4 Temmuz 1919 arası taban d: Osmanlı (isg yok).")

# ── Düz isg ekleme — iki ucu da kaynağından ────────────────────────────
DUZ = [
    ("ISG-03", "Manisa", [("1919-05-26", "1922-09-09", "yunanistan", "TDV manisa — Yunan kuvvetleri 26 Mayıs 1919'da şehre girdi · t KOMŞUDAN: İzmir 9 Eylül 1922 (TDV izmir)")],
     {"manisa": "Yunan kuvvetleri 26 Mayıs 1919'da şehre girdi · 1922 Eylülüne kadar Yunan işgalinde kaldı · çekilirken 5 Eylül'de şehri ateşe verdiler, yangın 8 Eylül'de söndü", "izmir": "9 Eylül 1922'ye kadar süren Yunan işgali"},
     "t: GÜN KOMŞUDAN (§4 şartlı): İzmir 1922-09-09 · TDV izmir. Şartlar: ① İzmir günü kendi kaynağında ② TDV manisa yalnız AY veriyor (Eylül 1922) ③ aynı takip harekâtı, 36 km ④ burada yazıldı. ⚠️ TDV manisa yangının 8 Eylül'de söndüğünü söylüyor — kurtuluş 8 Eylül de olabilir; koordinatör 1922-09-08'i seçerse fark 1 gün."),
    ("ISG-04", "Bursa", [("1920-07-08", "1922-09-11", "yunanistan", "TDV bursa — 8 Temmuz 1920'de Yunan işgaline uğradı, 10-11 Eylül 1922'de geri alındı")],
     {"bursa": "8 Temmuz 1920'de Yunan işgaline uğradı, 10-11 Eylül 1922'de geri alındı", "milli-mucadele": "8 Temmuz'da Bursa'yı ele geçirdi"},
     "t: TDV iki günlük aralık veriyor ('10-11 Eylül'); aralığın son günü yazıldı."),
    ("ISG-05", "Uşak", [("1920-08-29", "1922-09-01", "yunanistan", "TDV usak — 29 Ağustos 1920 Yunan işgali; 1 Eylül 1922'de işgalden kurtuldu")],
     {"usak": "Yunan kuvvetleri Uşak'ı işgal etti (29 Ağustos 1920) · Uşak 1 Eylül 1922'de işgalden kurtuldu", "milli-mucadele": "29 Ağustos'ta Uşak'ı da işgal ettiler"}, None),
    ("ISG-06", "Eskişehir", [("1919-01-23", "1920-03-20", "ingiltere", "TDV eskisehir — 23 Ocak 1919'da İngilizler tarafından işgal edildi; İngilizler 20 Mart 1920'de boşalttı"),
                             ("1921-07-20", "1922-09-02", "yunanistan", "TDV eskisehir — 20 Temmuz 1921'de Yunanlılar tarafından işgal edildi; kurtarıldı (2 Eylül 1922)")],
     {"eskisehir": "23 Ocak 1919'da Eskişehir İngilizler tarafından işgal edildi · İngilizler 20 Mart 1920'de Eskişehir'i boşalttılar · 20 Temmuz 1921'de Eskişehir Yunanlılar tarafından işgal edildi · kurtarıldı (2 Eylül 1922)"},
     "İki ayrı işgalci: ingiltere (künye 1066→1923, renk VAR) ve yunanistan. 1920-04-23 öncesi taban d: Osmanlı, sonrası s:tbmm-turkiye — isg ikisinin de üstüne çizilir."),
    ("ISG-07", "Kütahya", [("1921-07-21", "1922-08-30", "yunanistan", "TDV kutahya — Yunan ordusu 21 Temmuz 1921'de girdi; 30 Ağustos günü bir süvari tümeni Kütahya'yı kurtardı")],
     {"kutahya": "Yunan ordusu 21 Temmuz 1921'de girdiği Kütahya'yı bir yıldan fazla işgal etti · 30 Ağustos günü bir süvari tümeni ... Kütahya'yı kurtardı"}, None),
    ("ISG-08", "Bilecik", [("1921-07-22", "1922-09-06", "yunanistan", "TDV bilecik — 22 Temmuz'daki üçüncü işgal 6 Eylül 1922'ye kadar devam etti")],
     {"bilecik": "8 Ocak 1921'de şehir Yunan kuvvetleri tarafından işgal edildiyse de ... İkinci işgal 13 Temmuz'da oldu ve çok kısa sürdü; ancak hemen sonra 22 Temmuz'daki üçüncü işgal 6 Eylül 1922'ye kadar devam etti"},
     "Yalnız ÜÇÜNCÜ işgal yazıldı. Birinci (8 Ocak 1921 → I. İnönü sonrası, çekilme günü YOK) ve ikinci (13 Temmuz, 'çok kısa', bitiş günü YOK) ölçülemedi. 🔴 TDV milli-mucadele ayrıca 23 Mart 1921'de Bilecik'in işgalini anıyor, TDV bilecik bu işgali SAYMIYOR — kaynaklar ayrışıyor (KARAR ISG-K05)."),
    ("ISG-09", "Karahisâr-ı Sâhib (Afyon)", [("1921-03-23", "1921-04-07", "yunanistan", "TDV milli-mucadele — 23 Mart'ta Bilecik ve Afyon'u işgal ettiler; 7 Nisan'da Afyon geri alındı")],
     {"milli-mucadele": "23 Mart'ta yeniden harekete geçerek Bilecik ve Afyon'u işgal ettiler · Aslıhanlar'da ağır yenilgiye uğratılarak 7 Nisan'da Afyon geri alındı", "afyonkarahisar": "şehir, 27 Ağustos 1922'de kurtarıldı"},
     "Yalnız 1921 Mart-Nisan işgali HAZIR. İkinci işgalin (1921 yazı → 1922-08-27) BAŞLANGIÇ günü okunan TDV maddelerinde yok → KARAR ISG-K04."),
    ("ISG-10", "Adapazarı", [("1921-03-25", "1921-06-21", "yunanistan", "TDV adapazari — 25 Mart 1921'de Yunan işgaline uğramış ve aynı yılın 21 Haziranında geri alınmıştır")],
     {"adapazari": "25 Mart 1921'de Yunan işgaline uğramış ve aynı yılın 21 Haziranında geri alınmıştır"}, None),
    ("ISG-11", "Kırklareli", [("1920-07-26", "1922-11-10", "yunanistan", "TDV kirklareli — 26 Temmuz 1920'de Yunan işgaline uğrayan Kırkkilise 10 Kasım 1922'de geri alındı")],
     {"kirklareli": "26 Temmuz 1920'de Yunan işgaline uğrayan Kırkkilise 10 Kasım 1922'de geri alındı"}, None),
    ("ISG-12", "Edirne", [("1920-07-26", "1922-11-10", "yunanistan", "TDV edirne — Temmuz 1920'de Yunan işgaline uğradı, 1922'de kurtarıldı · İKİ GÜN DE KOMŞUDAN: Kırklareli (TDV kirklareli)")],
     {"edirne": "Temmuz 1920'de Yunan işgaline uğradı. 1922'de kurtarıldı", "kirklareli": "26 Temmuz 1920 ... 10 Kasım 1922", "milli-mucadele": "Yunan ordusunun 20 Temmuz'da bütün Trakya'yı ele geçirmesi"},
     "f ve t GÜNLERİ KOMŞUDAN (§4 şartlı): Kırklareli · TDV kirklareli. ① komşunun iki günü kendi kaynağında ② TDV edirne yalnız AY (Temmuz 1920) ve YIL (1922) veriyor ③ aynı harekât (1920 Trakya işgali) ve aynı süreç (Mudanya sonrası Trakya teslimi), 55 km ④ burada yazıldı. ⚠️ f, milli-mucadele'nin 'bütün Trakya 20 Temmuz' cümlesiyle 6 gün ayrışıyor; t teslim sırası kaynakta yok — koordinatör isterse KARAR'a çekilir."),
    ("ISG-13", "Muğla", [("1919-07-23", "1921-07-05", "italya", "TDV mugla — 23 Temmuz 1919'da İtalyan işgaline uğrayan ve 5 Temmuz 1921'de kurtarılan Muğla")],
     {"mugla": "23 Temmuz 1919'da İtalyan işgaline uğrayan ve 5 Temmuz 1921'de kurtarılan Muğla"},
     "italya künyesi 1861-03-17 → 1923-10-29, renk VAR (harita: italya)."),
]

for kid, ad, dl, kaynak, not_ in DUZ:
    hazir(kid, "0039/H-0005", ad, lambda e, dl=dl: isg_ekle(e, [donem(*x) for x in dl]), kaynak, not_)

# ── KARAR — kaynak var ama bir uç eksik / çelişik ─────────────────────
KARAR = [
    ("ISG-K01", "Tekirdağ", "yunanistan", "? (TDV tekirdag 1920-06-20 · milli-mucadele 20 Temmuz 'bütün Trakya')", "1922-11-13",
     "🔴 KAYNAK ÇELİŞKİSİ: TDV tekirdag 'Yunanlılar 20 Haziran 1920'de Tekirdağ'a girdiler' diyor; TDV milli-mucadele Yunan ordusunun Trakya'yı 20 Temmuz'da ele geçirdiğini anlatıyor ve Haziran 1920'de Trakya harekâtı anmıyor. Mantıken çelişmeyebilir (Tekirdağ önce düşmüş olabilir) ama tek kaynaklı bir ay farkı. t 1922-11-13 kaynaklı (TDV tekirdag). ÖNERİ: ikinci bağımsız kaynak (Bıyıklıoğlu, Trakya'da Millî Mücadele 1955 — TDV milli-mucadele bibliyografyası) okunmadan f yazılmasın."),
    ("ISG-K02", "Alaşehir", "yunanistan", "1920-06-26", "? (TDV alasehir '4 Eylül 1921')",
     "🔴 KAYNAK İÇİ SORUN: f 26 Haziran 1920 iki TDV maddesinde örtüşüyor. t için TDV alasehir '4 Eylül 1921'de Türk ordusu tarafından ... geri alındı' diyor; ama TDV milli-mucadele'ye göre Eylül 1921'de Yunan ordusu Sakarya'daydı ve Batı Anadolu'dan çekiliş Büyük Taarruz'la (Ağustos-Eylül 1922) oldu. Yıl büyük olasılıkla 1922 — ama bu bir ÇIKARIMDIR, yazılmadı."),
    ("ISG-K03", "Balıkesir", "yunanistan", "[1920-06-22, 1920-07-08] aralığı", "? (yok)",
     "TDV milli-mucadele: 22 Haziran'da başlayan taarruzda Balıkesir, 8 Temmuz'daki Bursa'dan ÖNCE düştü — gün yok. TDV balikesir işgal/kurtuluş günü vermiyor. Komşu günü şartı ③ tutar ama ② için kaynak ARALIK veriyor; aralığın hangi ucunun seçileceği koordinatör kararı. Kurtuluş günü hiçbir okunan maddede yok."),
    ("ISG-K04", "Karahisâr-ı Sâhib (Afyon)", "yunanistan", "? (1921 yazı — gün yok)", "1922-08-27",
     "İkinci işgalin başlangıcı: TDV afyonkarahisar 'bir yıl kadar Yunan işgalinde kaldı' diyor, gün yok. Komşu adayları Eskişehir 1921-07-20 / Kütahya 1921-07-21 (aynı Kütahya-Eskişehir harekâtı) — ama Afyon'un bu harekâtta onlardan önce düştüğü genel bilgidir ve komşu günü işgali KISALTIR. Yazılmadı."),
    ("ISG-K05", "Bilecik", "yunanistan", "1921-01-08 / 1921-03-23 / 1921-07-13", "? (çekilme günleri yok)",
     "İlk iki işgalin bitiş günleri yok; TDV bilecik ile TDV milli-mucadele Mart 1921 işgalinde ayrışıyor (bilecik saymıyor)."),
    ("ISG-K06", "İzmit", "ingiltere → yunanistan", "1920-07-06", "1921-06-28",
     "İki uç kaynaklı (TDV izmit) ama İngiliz → Yunan devir günü YOK ('önce İngilizler ve sonra Yunanlılar'). Tek dönem yazmak ya işgalciyi ya günü uydurur. Seçenek: (a) tek isg d:ingiltere 1920-07-06→1921-06-28 + not, (b) ikinci kaynak bulunana dek bekle. ÖNERİ (b)."),
    ("ISG-K07", "İnegöl", "yunanistan", "1920-10-25", "? (yok)",
     "f TDV milli-mucadele. t hiçbir okunan maddede yok; komşu adayları Bilecik 1922-09-06 (45 km) ve Bursa 1922-09-11 (40 km) — iki komşu 5 gün ayrışıyor, seçim koordinatörün."),
    ("ISG-K08", "Yenişehir (Bursa)", "yunanistan", "1920-10-25", "? (yok)", "İnegöl ile aynı durum (TDV milli-mucadele 'İnegöl ve Yenişehir')."),
    ("ISG-K09", "Bodrum", "italya", "1919-05-11", "? ('Millî Mücadele'nin başarıyla sonuçlanması üzerine')",
     "f TDV bodrum; t yıl bile yok."),
    ("ISG-K10", "Marmaris", "italya", "1919-05-05", "? (yok)", "f TDV sevr-antlasmasi; marmaris slug 302 ÖLÜ."),
    ("ISG-K11", "Kuşadası", "italya", "1919-05-13", "? (yok)",
     "f TDV sevr-antlasmasi; kusadasi slug 302. TDV milli-mucadele 'İtalyanların 18 Nisan'da boşaltmaya başladığı Menderes vadisi' diyor — YIL cümlede yok (paragraf 1922 olaylarının arasında) ve 'başladı' bir bitiş günü değil."),
    ("ISG-K12", "Fethiye (Makri)", "yunanistan / italya ?", "1919-05-11 (Yunan çıkarması, TDV sevr-antlasmasi)", "? (yok)",
     "Yunan çıkarması kaynaklı; sonraki işgalci ve bitiş kaynaksız. fethiye slug 302."),
    ("ISG-K13", "Burdur", "italya", "1919-06-28", "? (TDV burdur yalnız '1919-1921')",
     "f TDV isparta. t için komşu Antalya 1921-06-01 (TDV antalya 'boşaltmaya başlaması', aynı İtalyan tahliye süreci, ~100 km) — şartlar tutar ama Antalya'nın kendi günü bir BAŞLANGIÇ (boşaltmaya başladı), bitiş değil; ve Antalya isg'si YAMA-A3 kalem 5'te (P01) henüz inmedi. ÖNERİ: P01 ile birlikte."),
    ("ISG-K14", "Konya", "italya", "Nisan 1919 (AY)", "1920-03-12 ('11-12 Mart 1920')",
     "TDV konya bir İtalyan BİRLİĞİNİN gelip gittiğini anlatıyor ('başka bir işgale uğramadı' diyerek işgal sayıyor). f yalnız ay; ayın 1'ine kodlamak §4 ③ yasak. Yazılmadı."),
]
for kid, ad, d, f, t, not_ in KARAR:
    kalemler.append({"id": kid, "madde": "0039/H-0005", "durum": "KARAR", "ad": ad, "dosya": "data/yerlesimler.js",
                     "isgalci": d, "f": f, "t": t, "not": not_})

BULUNAMADI = {
    "ad": ["Bergama", "Ayvalık", "Edremit", "Çeşme", "Tire", "Birgi", "Ayasuluk (Selçuk)", "Söke", "Balat (Palatia)", "Milas",
           "Simav", "Emet (Eğrigöz)", "Tavşanlı", "Domaniç", "Bozüyük", "Söğüt", "Mudanya", "Gemlik (Kios)", "Mihaliç (Karacabey)",
           "Kirmasti (M.Kemalpaşa)", "Biga", "Lüleburgaz", "Uzunköprü", "Çorlu", "Keşan", "Malkara", "Havsa", "Vize"],
    "durum": "BULUNAMADI",
    "not": "Bu yerleşimlerin 1919-1922 işgal/kurtuluş GÜNÜ okunan TDV maddelerinde yok (ayvalik · bandirma · edremit · soke · kusadasi · simav · tavsanli · bozuyuk · inegol · mudanya · gemlik slugları 302 ÖLÜ; bergama 'yıl' veriyor: 1919 → 1922). Komşu günü şartı ② tutsa bile ③ 'aynı olay' her biri için ayrıca gösterilmeli; toplu komşu ataması yapılmadı (zincirleme devralma yasağı). Kaynak adayı: TDV milli-mucadele bibliyografyası (Özalp 1971-72 · Bıyıklıoğlu 1955 · Özdemir 1997) ve ATASE Türk İstiklal Harbi ciltleri — OKUNMADI."
}

cikti = {
    "baslik": "YAMA-ISGAL1919-0914 — P09-ISGAL1919 'isg:' işgal taraması önerileri (14 Eylül 2026). HİÇBİRİ VERİYE YAZILMADI; data/yerlesimler.js KİLİTLİ (P02 inişlerinden sonra koordinatör uygular).",
    "kural": "§4 ATLAS REFERANS DEĞİLDİR: her gün kaynağıyla yazıldı; komşu günü yalnız §4 şartlı serbestlikle ve kayıtta açıkça. eski = kaydın dosyadaki TAM metni (1 kez geçtiği ölçüldü); uygulayıcı düz metin değişimi yapar.",
    "uretici": "denetim/ARAC-ISGAL1919-YAMA-0914.py",
    "madde_dosyasi": "data/olaylar_p0057.js — her HAZIR kırılma gününün ±30 günde kaynaklı maddesi (Değişmez 2i)",
    "gorsel_not": "arac/uret_devirler.py ISGALCI_AD yalnız ingiltere/avusturya içeriyor — yunanistan ve italya lejantta HAM KİMLİKLE ('yunanistan') basılır (1912 ada kayıtlarında da bugün böyle). Koordinatör dosyası; ölçülmedi, işaret.",
    "sayim": {},
    "kalemler": kalemler,
    "bulunamadi": BULUNAMADI,
}
cikti["sayim"] = {
    "HAZIR_kayit": sum(1 for k in kalemler if k["durum"] == "HAZIR"),
    "HAZIR_isg_donemi": sum(k["yeni"].count('kaynak:"TDV') - k["eski"].count('kaynak:"TDV') for k in kalemler if k["durum"] == "HAZIR"),
    "KARAR": sum(1 for k in kalemler if k["durum"] == "KARAR"),
    "BULUNAMADI_yerlesim": len(BULUNAMADI["ad"]),
}
yol = os.path.join(KOK, "denetim", "YAMA-ISGAL1919-0914.json")
io.open(yol, "w", encoding="utf-8", newline="\n").write(json.dumps(cikti, ensure_ascii=False, indent=1) + "\n")
print("yazıldı", yol, cikti["sayim"])
