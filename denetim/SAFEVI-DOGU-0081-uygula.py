"""SAFEVI-DOGU-0081 — kaynaklı düzeltmelerin uygulayıcısı (parti-emrelic-0081).

Kullanım:
  py denetim/SAFEVI-DOGU-0081-uygula.py                 # KURU koşu (varsayılan): yalnız sınar
  py denetim/SAFEVI-DOGU-0081-uygula.py --uygula        # yazar
  ek kollar (varsayılan KAPALI, koordinatör hükmü): --ardahan  --kahire

Her değişiklik kendi KAYIT BLOĞUNDA (kayıt satırından bir sonraki kayda kadar) `count == 1`
sınamasının arkasındadır; bir sınama tutmazsa HİÇBİR dosya yazılmaz. İki kez koşulursa
eski metin bulunamaz ⇒ DURUR (idempotent değil, bilerek).
Rapor: denetim/SAFEVI-DOGU-0081.md
"""
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")
UYGULA = "--uygula" in sys.argv
ARDAHAN = "--ardahan" in sys.argv
KAHIRE = "--kahire" in sys.argv
ETIKET = "SAFEVI-DOGU-0081"
KAYIT_BASI = re.compile(r'^\s*\{\s*"?ad"?\s*:')

# ---------------------------------------------------------------- kaynak metinleri
K_KARS = ("TDV kars: ‘907’de (1501) Akkoyunlu Devleti’nin Safevîler tarafından yıkılmasıyla Kars bir "
          "müddet Avşar Türkmenleri’nden Sevündük Han Kurçibaşı’nın elinde kaldı’ — YIL (907 h. = "
          "17.7.1501–5.7.1502) · gün komşudan: Erzurum 1502-01-01 (olaylar_ek11 ‘Akkoyunlu’nun kuzey "
          "kanadı çöktü’, kaynak akkoyunlular; TDV erzurum ‘1502’) · eski akkoyunlu→1514-09-06 "
          "kaynaksızdı: hanedan 1503’ten sonra yalnız Irak’ta · " + ETIKET + " H-0003/H-0010")
K_ARDAHAN = ("TDV ardahan 1501-1551 için SUSUYOR (yalnız ‘Akkoyunlular’ın hâkimiyet sahası’, Evliya’ya "
             "göre I. Selim devri katılış) · ③ ÇIKARIM: komşu Kars ile aynı süreç (TDV kars 907/1501) · "
             "gün komşudan: Erzurum 1502-01-01 · koordinatör hükmüyle (--ardahan) · " + ETIKET + " H-0010")
K_1503 = ("TDV safeviler: ‘909’da (1503) Irâk-ı Arab ve Fars hâkimi Murad Bey’e karşı yürüyen Şah İsmâil "
          "… Hemedan yakınlarında yapılan savaşta üstün geldi’ · TDV sah-ismail ‘Almakulağı savaşında "
          "(908/1503)’ · Irâk-ı Acem, Fars ve Kirman’ın bu savaşla el değiştirmesi: olaylar_ek11 1503-01-01 "
          "maddesi (safeviler) ve kronoloji_safevi 1503 (Iranica AQ QOYUNLU) — YIL · eski 1508-01-01 "
          "kaynaksızdı · " + ETIKET + " H-0004")
K_SIRAZ = ("TDV siraz: ‘909’da (1503) Safevîler’in eline geçti’ — YIL (⚠️ 909 h. 26.6.1503’te başlar; "
           "yıl-01-01 kodu D210 gereği, fark bildirildi) · " + K_1503)
K_KIRMAN = ("TDV kirman: ‘908’de (1502-1503) Şâh İsmâil’in zaptıyla başlayan Safevîler dönemi’ — YIL · "
            "eski 1510-12-02 (Merv günü) kaynaksızdı · " + ETIKET + " H-0004")
K_YEZD = ("TDV yezd: ‘Şah İsmâil 28 Cemâziyelâhir 910 (6 Aralık 1504) tarihinde bir aylık bir "
          "kuşatmanın ardından şehre girdi’ — GÜN · eski 1508-01-01 kaynaksızdı · " + ETIKET + " H-0004")
K_HALEPCE = ("TDV sehrizor: ‘Şehrizor yöresi Kanûnî Sultan Süleyman’ın Irakeyn Seferi sırasında Osmanlı "
             "idaresi altına girdi (941/1535)’ — YIL · gün komşudan: Şehrizor 1535-01-01 · eski 1534-12-04 "
             "(Bağdat günü) kaynaksızdı ve Halepçe’yi Şehrizor’dan önce ADA yapıyordu · " + ETIKET + " H-0031")
K_AMID = ("TDV selim-i: ‘Âmid / Kara Hamid’i (bugünkü Diyarbakır Kalesi) ele geçirdi (10 Şâban 921 / 19 "
          "Eylül 1515)’ — GÜN · eski 1515-09-10 kaynaksızdı (büyük olasılıkla ‘10 Şâban’ın ay-gün "
          "sanılması); olaylar_ek5 Âmid maddesi zaten 1515-09-19 · " + ETIKET + " H-0014")
K_HARPUT = ("TDV harput: ‘Hüsrev Paşa kumandasındaki Osmanlı kuvvetleri … Harput’u üç gün süren bir "
            "kuşatmadan sonra fethetti (26 Mart 1516)’ — GÜN · eski 1516-05-01 (Koçhisar günü) "
            "kaynaksızdı · " + ETIKET + " H-0014/H-0015")
K_URFA = ("TDV sanliurfa: ‘Dede Garkın Muharebesi (922/1516) ve alınan sonuç 1517 yılı ilkbaharında önce "
          "Mardin’in, ardından Urfa’nın Osmanlı topraklarına katılması anlamına gelecektir’ · gün komşudan: "
          "Mardin 1517-05-01 (TDV diyarbakir ‘Mayıs 1517’de Mardin Kalesi’nin de Osmanlılar’ın eline "
          "geçmesiyle’ — AY) · eski 1516-05-01 kaynaksızdı · " + ETIKET + " H-0015/H-0018")
K_KARS_CEVRE = ("gün: olaylar_ek17 1534-06-01 ‘Kars çevresinin bütünleşmesi: Arpaçay, Digor ve Iğdır’ın "
                "Osmanlı idaresine girmesi’ maddesi (Kars’ın alınış günü; TDV kars 1534 ‘kuvvetle muhtemel’, "
                "1537 ‘kesin’) · eski 1534-01-01 = Bitlis maddesinin yıl-01-01 kodu, kaynaksız, Kars’tan "
                "5 ay önce · yer_yama_kafkas.js notu bu hizalamayı yazmış, canlı veride 1534-01-01 "
                "duruyordu · " + ETIKET + " H-0030")
K_KORIDOR = ("gün komşudan: {k} — bu kaydın kendi ZİNCİR notu dönemlerin «{k}» kaydından BİREBİR "
             "alındığını söylüyor, o kaydın Osmanlı dönemleri kopyada eksik kalmış · Emre H-0045 (28 Eyl "
             "2026): ‘belge arşiv bilgi bulamaz isek bu ufak toprağı da diğer şehirlerle beraber "
             "osmanlıya vermemiz gerekir’ · köyün kendi kaynağı: bulunamadı · " + ETIKET + " H-0045")
K_KAHIRE = ("TDV ridaniye-savasi: ‘Savaşın ertesi günü Osmanlı ordularının Kahire’ye girişine izin "
            "verildi’ — GÜN (22 Ocak 1517’nin ertesi) · padişahın girişi 15 Şubat (aynı madde) · "
            "koordinatör hükmüyle (--kahire) · " + ETIKET + " H-0020")

# ------------------------------------------------ (dosya, kayıt işareti, [(eski, yeni)], kol)
KAYIT = [
    ("data/yerlesimler.js", '{ ad:"Kars",', [
        ('{f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},{f:"1514-09-06",t:"1534-06-01",d:"safevi"}',
         '{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1534-06-01",d:"safevi",kaynak:"'
         + K_KARS + '"}')], None),
    ("data/yerlesimler_ek28.js", '{ ad:"Sarıkamış",', [
        ('{f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"', '{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"'),
        ('{f:"1514-09-06",t:"1534-06-01",d:"safevi"', '{f:"1502-01-01",t:"1534-06-01",d:"safevi"')], None),
    ("data/yerlesimler.js", '{ ad:"Ardahan",', [
        ('{f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},{f:"1514-09-06",t:"1551-01-01",d:"safevi"}',
         '{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1551-01-01",d:"safevi",kaynak:"'
         + K_ARDAHAN + '"}')], "ardahan"),
    ("data/yerlesimler.js", '{ ad:"Şiraz",', [
        ('{f:"1469-01-01",t:"1508-01-01",d:"akkoyunlu"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"}',
         '{f:"1469-01-01",t:"1503-01-01",d:"akkoyunlu"},{f:"1503-01-01",t:"1736-03-08",d:"safevi",kaynak:"'
         + K_SIRAZ + '"}')], None),
    ("data/yerlesimler.js", '{ ad:"Kirman",', [
        ('{f:"1469-01-01",t:"1510-12-02",d:"akkoyunlu"},{f:"1510-12-02",t:"1736-03-08",d:"safevi"}',
         '{f:"1469-01-01",t:"1503-01-01",d:"akkoyunlu"},{f:"1503-01-01",t:"1736-03-08",d:"safevi",kaynak:"'
         + K_KIRMAN + '"}')], None),
    ("data/yerlesimler.js", '{ ad:"Yezd",', [
        ('{f:"1469-01-01",t:"1508-01-01",d:"akkoyunlu"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"}',
         '{f:"1469-01-01",t:"1504-12-06",d:"akkoyunlu"},{f:"1504-12-06",t:"1736-03-08",d:"safevi",kaynak:"'
         + K_YEZD + '"}')], None),
] + [
    ("data/yerlesimler.js", '{ ad:"%s",' % ad, [
        ('{f:"1469-01-01",t:"1508-01-01",d:"akkoyunlu"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"}',
         '{f:"1469-01-01",t:"1503-01-01",d:"akkoyunlu"},{f:"1503-01-01",t:"1736-03-08",d:"safevi",kaynak:"'
         + ek + K_1503 + '"}')], None)
    for ad, ek in (("Hemedan", "savaşın geçtiği yer · "),
                   ("Zencan", "③ Irâk-ı Acem şehri, TDV zencan 1503 için SUSUYOR · "),
                   ("Kirmanşah", "③ Irâk-ı Acem (Kirmanşahan), TDV’de ayrı cümle BULUNAMADI · eski hâli "
                                 "Kasr-ı Şîrîn’i (1503 safevi) Akkoyunlu içinde ADA yapıyordu · "))
] + [
    ("data/yerlesimler.js", '{ ad:"Halepçe",', [
        ('d:[{f:"1534-12-04",t:"1550-01-01"}',
         'd:[{f:"1535-01-01",t:"1550-01-01",kaynak:"' + K_HALEPCE + '"}')], None),
    ("data/yerlesimler.js", '{ ad:"Diyarbakır",', [
        ('{f:"1507-01-01",t:"1515-09-10",d:"safevi"}', '{f:"1507-01-01",t:"1515-09-19",d:"safevi"}'),
        ('d:[{f:"1515-09-10",t:"1920-04-23",y:"kusatma"}',
         'd:[{f:"1515-09-19",t:"1920-04-23",y:"kusatma",kaynak:"' + K_AMID + '"}')], None),
    ("data/yerlesimler.js", '{ ad:"Harput (Elazığ)",', [
        ('kd:[{f:"1281-01-01",t:"1516-05-01",k:0,m:null},{f:"1516-05-01",t:"1923-10-29",k:4,m:"Diyarbakır"}]',
         'kd:[{f:"1281-01-01",t:"1516-03-26",k:0,m:null},{f:"1516-03-26",t:"1923-10-29",k:4,m:"Diyarbakır"}]'),
        ('{f:"1507-01-01",t:"1516-05-01",d:"safevi"}', '{f:"1507-01-01",t:"1516-03-26",d:"safevi"}'),
        ('d:[{f:"1516-05-01",t:"1920-04-23"}]',
         'd:[{f:"1516-03-26",t:"1920-04-23",kaynak:"' + K_HARPUT + '"}]')], None),
    ("data/yerlesimler.js", '{ ad:"Urfa",', [
        ('kd:[{f:"1281-01-01",t:"1516-05-01",k:0,m:null},{f:"1516-05-01",t:"1923-10-29",k:3,m:"Diyarbakır"}]',
         'kd:[{f:"1281-01-01",t:"1517-05-01",k:0,m:null},{f:"1517-05-01",t:"1923-10-29",k:3,m:"Diyarbakır"}]'),
        ('{f:"1507-01-01",t:"1516-05-01",d:"safevi"}', '{f:"1507-01-01",t:"1517-05-01",d:"safevi"}'),
        ('d:[{f:"1516-05-01",t:"1920-04-23"}]',
         'd:[{f:"1517-05-01",t:"1920-04-23",kaynak:"' + K_URFA + '"}]')], None),
] + [
    ("data/yerlesimler_ek26.js", '{ ad:"%s",' % ad, [
        ('{f:"1501-07-01",t:"1534-01-01",d:"safevi"}', '{f:"1501-07-01",t:"1534-06-01",d:"safevi"}'),
        ('d:[{f:"1534-01-01",t:"1878-03-03"}]',
         'd:[{f:"1534-06-01",t:"1878-03-03",kaynak:"' + K_KARS_CEVRE + '"}]')], None)
    for ad in ("Arpaçay (Akyaka)", "Digor", "Iğdır")
] + [
    ("data/yerlesimler_sinir_kuzey.js", '{"ad":"%s",' % ad, [
        ('{"f": "1501-07-01", "t": "1534-01-01", "d": "safevi"}',
         '{"f": "1501-07-01", "t": "1534-06-01", "d": "safevi"}'),
        ('"d":[{"f":"1534-01-01","t":"1878-03-03"}]',
         '"d":[{"f":"1534-06-01","t":"1878-03-03","kaynak":"' + K_KARS_CEVRE + '"}]')], None)
    for ad in ("Beri", "Küçükperveli")
] + [
    ("data/yerlesimler_sinir_kuzey.js", '{"ad":"%s",' % ad, [
        ('"d": "sovyet-rusya"}],"kaynak":"KONUM',
         '"d": "sovyet-rusya"}],"d":[{"f":"1583-09-13","t":"1604-06-08","kaynak":"' + K_KORIDOR.format(k=k)
         + '"},{"f":"1724-10-03","t":"1735-10-03","kaynak":"' + K_KORIDOR.format(k=k) + '"}],"kaynak":"KONUM')],
     None)
    for ad, k in (("Norapat", "Eçmiyadzin"), ("Kliçatak (Suser)", "Gümrü (Aleksandropol)"))
] + [
    ("data/yerlesimler.js", '{ ad:"Kahire",', [
        ('d:[{f:"1517-02-15",', 'd:[{kaynak:"' + K_KAHIRE + '",f:"1517-01-23",')], "kahire"),
    ("data/yerlesimler.js", '{ ad:"Süveyş",', [
        ('d:[{f:"1517-02-15",', 'd:[{kaynak:"gün komşudan: Kahire · ' + K_KAHIRE + '",f:"1517-01-23",')],
     "kahire"),
]

# ------------------------------------------- kronoloji: (dosya, [(eski, yeni)]) dosya genelinde count==1
MADDE_HARPUT = (
    '{ t:"1516-03-26", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Harput\'un fethi — '
    'Diyarbekir yolunun açılması", gun:"26 Mart 1516", yer:"Harput (Elazığ)", yer_id:"Harput (Elazığ)", '
    'kisiler:"Hüsrev Paşa, Çerkez Hüseyin Bey", d:"Çaldıran\'dan sonra alınan Diyarbekir\'i Safevî '
    'kuşatmasından kurtarmak üzere yola çıkan Karaman Beylerbeyi Hüsrev Paşa, çevresini daha önce Çerkez '
    'Hüseyin Bey\'in ele geçirdiği Harput Kalesi\'ni üç günlük bir kuşatmanın sonunda aldı. Fırat\'ın '
    'doğusunda Diyarbekir\'e uzanan yol böylece güvenceye alındı.", ic_not_d:"' + ETIKET + ' H-0014/H-0015: '
    'Harput haritada 1516-05-01 Koçhisar gününde katılıyordu; TDV harput günü 26 Mart 1516.", '
    'kaynak:"harput", duygu:["🎉"] },')
MADDE_MARDIN = (
    '{ t:"1517-05-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Mardin Kalesi\'nin teslimi '
    '— Hasankeyf ve Urfa\'nın katılması", gun:"Mayıs 1517", ic_not_gun:"TDV diyarbakir \'Mayıs 1517\' · TDV '
    'mardin \'1516 sonlarında (veya Mayıs 1517)\' — ay hassasiyeti", yer:"Mardin, Midyat, Hasankeyf, Urfa", '
    'yer_id:"Mardin", kisiler:"Bıyıklı Mehmed Paşa, Eyyûbî Meliki Halil", d:"Mercidâbık\'tan sonra Mardin '
    'önlerine dönen Diyarbekir Beylerbeyi Bıyıklı Mehmed Paşa kuşatmayı sıklaştırdı ve Safevî '
    'muhafızlarının elindeki kaleyi teslim aldı. Mardin\'in düşmesiyle Diyarbekir bölgesinin bütün kaleleri '
    'aynı idare altında toplandı: Hasankeyf\'i Eyyûbî Meliki Halil Osmanlı desteğiyle geri aldı, Urfa da '
    'hemen ardından Osmanlı topraklarına katıldı.", ic_not_d:"' + ETIKET + ' H-0017/H-0018: bu kırılma '
    '(Mardin · Midyat · Hasankeyf) haritada vardı ama kendi maddesi yoktu; Koçhisar maddesi Mardin\'i Mayıs '
    '1516\'da alınmış gösteriyordu. ⚠️ TDV kerkuk Kerkük · Mardin · Musul · Hasankeyf\'i Mayıs 1516\'ya '
    'koyar — TDV mardin/diyarbakir/sanliurfa/hasankeyf ile ÇELİŞİR, bildirildi.", '
    'kaynak:"mardin · diyarbakir · hasankeyf · sanliurfa", duygu:["🎉"] },')
KOCHISAR_ESKI_B = 'b:"Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa\'nın fethi"'
KRONO = [
    ("data/olaylar_ek5.js", [
        (KOCHISAR_ESKI_B,
         'b:"Koçhisar (Kızıltepe) Savaşı — Kara Han\'ın yenilgisi", ic_not_b:"eski: Koçhisar (Kızıltepe) '
         'Savaşı ve Mardin ile Urfa\'nın fethi — TDV mardin/diyarbakir/sanliurfa Mardin Kalesi\'ni ve '
         'Urfa\'yı Mayıs 1517\'ye koyar (' + ETIKET + ' H-0015/H-0018)"'),
        ("Ardından Mardin topa tutularak alındı ve Şah İsmâil'in Diyarbekir bölgesindeki son direnç "
         "noktası çöktü.",
         "Ardından Osmanlı kuvvetleri Mardin şehrine girdiyse de birkaç gün kalıp ayrıldı; Safevî "
         "muhafızlarının tuttuğu Mardin Kalesi ancak bir yıl sonra teslim alınabildi."),
        ("Aynı tarihte katılan öteki yerler: Harput (Elazığ).",
         "Aynı tarihte katılan öteki yerler: Palu, Çemişgezek, Siverek."),
    ]),
    ("data/olaylar_ek8.js", [
        ('"t": "1515-01-01",\n  "b": "Nusaybin ve Cizre-Mardin',
         '"t": "1515-09-19",\n  "b": "Nusaybin ve Cizre-Mardin'),
    ]),
    ("data/kronoloji_safevi.js", [
        ('{ t:"1504-06-01", b:"Kâşân ve Yezd\'in ilhakı",',
         '{ t:"1504-12-06", b:"Yezd\'in ilhakı — bir aylık kuşatmanın sonu",'),
        ('kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL I ṢAFAVĪ", yer_id:"Yezd" }',
         'kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL I ṢAFAVĪ · gün: TDV yezd (28 Cemâziyelâhir 910 / '
         '6 Aralık 1504) · eski t:1504-06-01 · Kâşân atlasta 1503 Hemedan kırılmasıyla gider (' + ETIKET
         + ' H-0004)", yer_id:"Yezd" }'),
    ]),
]
EKLE = ("data/olaylar_ek5.js", KOCHISAR_ESKI_B, [MADDE_HARPUT, MADDE_MARDIN])


def blok(satirlar, isaret):
    i = [n for n, s in enumerate(satirlar) if s.lstrip().startswith(isaret)]
    if len(i) != 1:
        return None, f"kayıt işareti {len(i)} kez: {isaret}"
    j = i[0] + 1
    while j < len(satirlar) and not KAYIT_BASI.match(satirlar[j]):
        j += 1
    return (i[0], j), None


BEKLENEN = [  # (ad, gün, beklenen sahip) — değişmiş metin girdi.py'nin KENDİ ayrıştırıcısıyla okunur
    ("Kars", "1502-01-02", "safevi"), ("Kars", "1501-12-31", "akkoyunlu"),
    ("Sarıkamış", "1510-01-01", "safevi"), ("Kars", "1534-06-02", "OSMANLI"),
    ("Şiraz", "1503-01-02", "safevi"), ("Kirman", "1503-01-02", "safevi"),
    ("Hemedan", "1503-01-02", "safevi"), ("Zencan", "1503-01-02", "safevi"),
    ("Kirmanşah", "1503-01-02", "safevi"), ("Yezd", "1504-12-05", "akkoyunlu"),
    ("Yezd", "1504-12-06", "safevi"), ("Halepçe", "1534-12-05", "safevi"),
    ("Halepçe", "1535-01-02", "OSMANLI"), ("Diyarbakır", "1515-09-18", "safevi"),
    ("Diyarbakır", "1515-09-19", "OSMANLI"), ("Harput (Elazığ)", "1516-03-26", "OSMANLI"),
    ("Harput (Elazığ)", "1516-03-25", "safevi"), ("Urfa", "1516-06-01", "safevi"),
    ("Urfa", "1517-05-01", "OSMANLI"), ("Iğdır", "1534-03-01", "safevi"),
    ("Iğdır", "1534-06-01", "OSMANLI"), ("Beri", "1534-03-01", "safevi"),
    ("Küçükperveli", "1534-06-01", "OSMANLI"), ("Arpaçay (Akyaka)", "1534-05-31", "safevi"),
    ("Norapat", "1590-01-01", "OSMANLI"), ("Norapat", "1604-06-08", "safevi"),
    ("Kliçatak (Suser)", "1730-01-01", "OSMANLI"), ("Kliçatak (Suser)", "1740-01-01", "afsar"),
]


def sina(metin):
    import importlib.util
    sys.path.insert(0, "arac")
    import girdi
    asil = girdi.oku_dosya

    def sahte(ad):
        yol = "data/" + ad
        if yol in metin:
            js = metin[yol]
            m = re.search(r"window\.(YERLESIMLER\w*)\s*=", js)
            return girdi._cevir(js, m.group(1))
        return asil(ad)
    girdi.oku_dosya = sahte
    sp = importlib.util.spec_from_file_location("d", "denetim/SAFEVI-DOGU-0081-dok.py")
    d = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(d)
    Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
    kotu = 0
    for ad, g, bek in BEKLENEN:
        s = d.sahip(Y[ad], g)
        ok = s == bek
        kotu += not ok
        print(f"  {'✓' if ok else '✗'} {ad:22s} {g}  {s}  (beklenen {bek})")
    print(f"SINAV: {len(BEKLENEN) - kotu}/{len(BEKLENEN)}")
    girdi.oku_dosya = asil


def main():
    hata, metin, say = [], {}, 0
    oku = lambda f: metin.setdefault(f, open(f, encoding="utf-8").read())  # noqa: E731
    for dosya, isaret, degis, kol in KAYIT:
        if kol == "ardahan" and not ARDAHAN or kol == "kahire" and not KAHIRE:
            print(f"  atlandı (kol --{kol} kapalı): {isaret}")
            continue
        sat = oku(dosya).split("\n")
        ab, h = blok(sat, isaret)
        if h:
            hata.append(f"{dosya}: {h}")
            continue
        parca = "\n".join(sat[ab[0]:ab[1]])
        for eski, yeni in degis:
            c = parca.count(eski)
            if c != 1:
                hata.append(f"{dosya} {isaret} — eski metin {c} kez: {eski[:70]}")
                continue
            parca = parca.replace(eski, yeni)
            say += 1
        sat[ab[0]:ab[1]] = parca.split("\n")
        metin[dosya] = "\n".join(sat)
        print(f"  ✓ {dosya}  {isaret}  ({len(degis)} değişiklik)")
    for dosya, degis in KRONO:
        t = oku(dosya)
        for eski, yeni in degis:
            c = t.count(eski)
            if c != 1:
                hata.append(f"{dosya} — eski metin {c} kez: {eski[:70]}")
                continue
            t = t.replace(eski, yeni)
            say += 1
        metin[dosya] = t
        print(f"  ✓ {dosya}  ({len(degis)} değişiklik)")
    dosya, isaret, yeni_satirlar = EKLE
    sat = metin[dosya].split("\n")
    i = [n for n, s in enumerate(sat) if "Koçhisar (Kızıltepe) Savaşı — Kara Han" in s]
    for y in yeni_satirlar:
        if y.split(' b:"')[1][:30] in metin[dosya]:
            hata.append(f"{dosya}: eklenecek madde zaten var: {y[:60]}")
    if len(i) != 1:
        hata.append(f"{dosya}: Koçhisar satırı {len(i)} kez (ekleme noktası)")
    else:
        sat[i[0] + 1:i[0] + 1] = yeni_satirlar
        metin[dosya] = "\n".join(sat)
        say += len(yeni_satirlar)
        print(f"  ✓ {dosya}  +{len(yeni_satirlar)} madde (Harput 1516-03-26 · Mardin 1517-05-01)")
    print(f"\n{say} değişiklik · {len(hata)} hata")
    for h in hata:
        print("  ✗", h)
    if hata:
        print("HATA VAR — hiçbir dosya yazılmadı.")
        sys.exit(1)
    if "--sina" in sys.argv:
        sina(metin)
    if not UYGULA:
        print("KURU KOŞU — yazılmadı. Yazmak için --uygula.")
        return
    for f, t in metin.items():
        with open(f, "w", encoding="utf-8", newline="") as fh:
            fh.write(t)
        print("  yazıldı:", f)


if __name__ == "__main__":
    main()
