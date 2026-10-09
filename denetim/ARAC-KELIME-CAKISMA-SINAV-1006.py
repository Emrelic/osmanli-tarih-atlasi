# ARAC-KELIME-CAKISMA-SINAV-1006 (1006b: + EŞ-AD kovası soruları) — Değişmez 2sk YER kolu eşleştiricisinin İKİ YÖNLÜ sınavı (SALT OKUR).
# Maddeler degismez2'nin kurduğu biçimde (nrm · kor · nrm_yer · nrm_y · yer_id) kurulur ve
# denetle.py'nin KENDİ _2s_yeri_aniyor işlevine sorulur.
#   SAHTE → kapanmamalı (bugünkü ölçülen 5 vaka + aynı sınıftan türevler)
#   GERÇEK → kapanmalı (ekli/kesme işaretli özel ad, liste, yer alanı, küçük harfli resmî ad)
# Yamasız denetle.py'de SAHTE soruları KALIR (ötmesi beklenir: sınav kusuru görebiliyor mu?).
# Koşum: py denetim/ARAC-KELIME-CAKISMA-SINAV-1006.py   · çıkış 0 = hepsi geçti
import os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D


def madde(b="", yer="", d="", yer_id=""):
    ham = " ".join([b, yer, d])
    o = {"nrm": D._2s_norm(ham), "nrm_b": D._2s_norm(b),
         "nrm_y": D._2s_norm(" ".join([b, yer])), "yer_id": yer_id}
    if hasattr(D, "_2s_kor"):
        o["kor"] = D._2s_kor(ham)
        o["nrm_yer"] = D._2s_norm(yer)
    return o


def soru(ad, o, merkez=""):
    Y_KOK = {ad: D._2s_norm(__import__("re").sub(r"\s*\(.*?\)", "", ad).strip())}
    Y_MERKEZ = {ad: (merkez, D._2s_norm(merkez))}
    return D._2s_yeri_aniyor(o, {ad}, Y_KOK, Y_MERKEZ)


SINAV = [
    # (beklenen, ad, madde, açıklama)
    (False, "Beri", madde(b="Kara Yusuf'un Tebriz'i geri alması",
                          d="Karakoyunlular 1351'den beri Doğu Anadolu'da var olan bir güçtü."),
     "SAHTE: '1351'den beri' (ölçülen vaka)"),
    (False, "Karşi (Nahşeb)", madde(b="Kâzım Karabekir Ermenistan'a karşı taarruza geçti"),
     "SAHTE: 'Ermenistan'a karşı' (ölçülen vaka)"),
    (True, "Karşi (Nahşeb)", madde(d="Karşı saldırı başladı."),
     "BİLİNEN KALINTI: cümle başı büyük harfli sıradan kelime KAPATIR (bugün korpusta 0 vaka; listeye ölçülünce girer)"),
    (False, "Buna (Bouna)", madde(d="Antlaşma yaptı. Buna tepki gösteren Rabih işgale girişti."),
     "SAHTE: cümle başı zamir 'Buna' (ölçülen vaka)"),
    (False, "Ordu (Bayramlı)", madde(b="Kızıl Ordu Azerbaycan'ı işgal etti"),
     "SAHTE: 'Kızıl Ordu' (ölçülen vaka)"),
    (False, "Cotegipe (Campo Largo)", madde(d="Bu hat 1872 Loizaga-Cotegipe Antlaşması'yla çizilmişti."),
     "SAHTE: kişi/antlaşma adı (ölçülen vaka)"),
    (False, "Bar (Podolya)", madde(d="Kahvede bir bar açıldı."),
     "SAHTE türev: küçük harfli sıradan kelime 'bar'"),
    (True, "Beri", madde(d="Kara Yusuf Beri'yi aldı."), "GERÇEK: ekli özel ad"),
    (True, "Ordu (Bayramlı)", madde(b="Hacıemîroğulları'nın ilhakı", yer="Ordu, Ünye"),
     "GERÇEK: eş adlı kök, `yer` alanında"),
    (False, "Ordu (Bayramlı)", madde(d="Hacıemîroğulları Ordu'yu Osmanlı'ya bıraktı."),
     "BEDEL: eş adlı kök gövdede artık kapatmaz (bugün Ordu'nun gerçek kapanışı yer_id yolundan)"),
    (True, "Ordu (Bayramlı)", madde(b="Kızıl Ordu", yer_id="Ordu (Bayramlı)"),
     "GERÇEK: yer_id yolu eş ad kuralından etkilenmez"),
    (True, "Bar (Podolya)", madde(yer="Bar (Podolya), Kamaniçe"), "GERÇEK: kısa ad, yer listesinde"),
    (True, "Kars", madde(d="Ruslar Kars'ı kuşattı."), "GERÇEK: kesmeli ek"),
    (True, "İzmir", madde(d="İZMİR'İN İŞGALİ başladı."), "GERÇEK: tamamı büyük harf"),
    (True, "Şakrâ", madde(yer="Uneyze, Şakrâ, Necid"), "GERÇEK: Türkçe/şapkalı büyük harf"),
    (True, "Teselya Yenişehir (Larissa)", madde(d="Teselya Yenişehir (Larissa) merkezli ova"),
     "GERÇEK: çok kelimeli ad"),
    (True, "Sivas", madde(b="Bir olay", yer="İç Anadolu"), "MERKEZ: m:Sivas başlıkta yok ⇒ False beklenmez"),
]
# son satır merkez yolunu sınar: madde Sivas'ı anmıyor ama merkez 'İç Anadolu' değil ⇒ düzelt:
SINAV[-1] = (True, "Hafik", madde(b="Sivas'ın alınışı"), "MERKEZ yolu (m:Sivas başlıkta) etkilenmez")

hata = 0


def kova_sinavi():
    """1006b şartı ③: EŞ-AD muafiyeti SESSİZ OLMAZ — kova uçtan uca (degismez2 → rapor) dolup
    BASILIYOR mu, ve kapatanı olmayan eş-ad birimi AÇIK'a da KAPALI'ya da değil ÖLÇÜLEMEDİ'ye mi
    düşüyor? Sentetik iki kayıt: Ordu (yalnız eş-ad gövde anışı → ÖLÇÜLEMEDİ) ·
    Buna (eş-ad anışı + TARAF başlıkta → TARAF-KAPATTI)."""
    import io, contextlib
    if not hasattr(D, "ES_AD_MUAF_2S"):
        return [(False, "EŞ-AD kovası YOK (yama 1006b değil)")]
    Y = [{"ad": "Ordu (Bayramlı)", "_kaynak": "sinav", "m": "", "lat": 41.0, "lon": 37.9,
          "s": [{"f": "1400-01-01", "t": "1427-06-01", "d": "haciemir"},
                {"f": "1427-06-01", "t": "1430-01-01", "d": "karaman"}]},
         {"ad": "Buna (Bouna)", "_kaynak": "sinav", "m": "", "lat": 9.27, "lon": -3.0,
          "s": [{"f": "1890-01-01", "t": "1897-03-01", "d": "kong"},
                {"f": "1897-03-01", "t": "1900-01-01", "d": "fransa"}]}]
    O = [{"t": "1427-06-05", "b": "Bir sınır olayı",
          "d": "Hacıemîroğulları Ordu'yu terk etti.", "yer": ""},
         {"t": "1897-03-03", "b": "Fransa himayesi ilan edildi",
          "d": "Antlaşma yapıldı. Buna tepki gösteren Kong direndi.", "yer": ""}]
    D.OLCULEMEDI_KOVA.clear()
    kir, acik = D.degismez2(Y, O, ("s",), yer_sarti=True)
    kova = {(k[1], k[2]) for k in D.ES_AD_MUAF_2S}
    tampon = io.StringIO()
    with contextlib.redirect_stdout(tampon):
        D._2s_es_ad_rapor()
    yazi = tampon.getvalue()
    # yalnız SINANAN kırılmanın günü (sentetik kaydın öteki uçlarında madde yok — onlar AÇIK, beklenir)
    acik_adlar = {a for d, _, adl, _, _ in acik if str(d) == "1427-06-01" for a in adl}
    return [
        (("Ordu (Bayramlı)", "OLCULEMEDI") in kova, "KOVA: gövdede 'Ordu'yu' + kapatan yok ⇒ OLCULEMEDI"),
        ("Ordu (Bayramlı)" not in acik_adlar, "KOVA: ÖLÇÜLEMEDİ birim 1427-06-01 kırılmasında 2s AÇIK listesine YAZILMIYOR"),
        (("Buna (Bouna)", "TARAF-KAPATTI") in kova, "KOVA: eş-ad anışı + TARAF kapatıyor ⇒ TARAF-KAPATTI"),
        ("EŞ-AD" in yazi and "ÖLÇÜLEMEDİ 1" in yazi and "Ordu (Bayramlı)" in yazi,
         "KOVA BASILIYOR: rapor satırı + adıyla kayıt"),
        (any(a == "Değişmez 2sk eş-ad" for a, _ in D.OLCULEMEDI_KOVA),
         "KOVA HÜKME GİRİYOR: OLCULEMEDI_KOVA ⇒ denetle.py çıkış 2"),
    ]


for bek, ad, o, acik in SINAV:
    m = "Sivas" if ad == "Hafik" else ""
    sonuc = soru(ad, o, m)
    ok = sonuc == bek
    hata += not ok
    print(("✓" if ok else "✗"), "beklenen", "KAPANIR " if bek else "KAPANMAZ", "·", ad, "—", acik)
toplam = len(SINAV)
for ok, acik in kova_sinavi():
    toplam += 1
    hata += not ok
    print(("✓" if ok else "✗"), acik)
print("yama %s · %d/%d geçti" % ("VAR" if hasattr(D, "_2s_kor") else "YOK", toplam - hata, toplam))
sys.exit(1 if hata else 0)
