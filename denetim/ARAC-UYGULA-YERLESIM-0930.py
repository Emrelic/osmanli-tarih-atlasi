# -*- coding: utf-8 -*-
"""UYGULA-YERLESIM-0930 — sirada maddelerin yerleşim verisine uygulanması.

    py denetim/ARAC-UYGULA-YERLESIM-0930.py          # KURU KOŞU (yazmaz)
    py denetim/ARAC-UYGULA-YERLESIM-0930.py --yaz    # yazar

Her düzeltme (dosya, eski, yeni, beklenen_sayi). `eski` dosyada TAM OLARAK
beklenen sayıda geçmiyorsa HİÇBİR ŞEY yazılmaz (replace(…,1) tuzağı, §11).
`eski` dizgileri kayıt alanlarının kendisidir; dizgi içi kod alıntısına
düşmediği, her birinin yalnız beklenen yerde geçtiğiyle sınanır (Erdel için
evren ayrıca erdel_tara ile 7 ölçüldü).
"""
import io, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
K = r"C:\atlas\data"
YAZ = "--yaz" in sys.argv
U = "UYGULA-YERLESIM-0930"

D = []  # (madde, dosya, eski, yeni, sayi)

# ── 0042/H-0030 + H-0029 · Bağdat 1393 ───────────────────────────────────
D.append(("0042/H-0030", "yerlesimler.js",
  '{f:"1335-12-01",t:"1393-01-01",d:"celayirli"},{f:"1393-01-01",t:"1394-01-01",d:"timurlu"}',
  '{f:"1335-12-01",t:"1393-08-29",d:"celayirli"},{f:"1393-08-29",t:"1394-01-01",d:"timurlu",'
  'kaynak:"TDV timur: \'Bağdat’ı ele geçirdikten sonra (20 Şevval 795 / 29 Ağustos 1393)\' — GÜN · '
  'eski 1393-01-01 yalnız YIL idi (TDV bagdat \'795’te (1393)\') ve 1393-08-29 maddesinden (olaylar_ek5.js) 8 ay önce Timurlu enklavı çiziyordu · '
  'bitiş 1394-01-01 kaynaksız, DEĞİŞMEDİ · ' + U + ' (0042/H-0030 · H-0029)"}', 1))

# ── 0042/H-0037 · Ankara — Süleyman Çelebi'ye geçiş ──────────────────────
D.append(("0042/H-0037", "yerlesimler.js",
  '{f:"1402-07-28",t:"1404-03-01",d:"timurlu"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"}',
  '{f:"1402-07-28",t:"1404-03-01",d:"timurlu",kaynak:"f: TDV timur/ankara-savasi 28 Temmuz 1402 · t: Süleyman Çelebi’nin geçişi (aşağıda) · '
  '⚠️ Timur’un Anadolu’dan çekilişi (TDV timur: Bayezid’in ölüm haberi Mart 1403) ile Mart 1404 arasında Ankara’nın FİİLÎ sahibi BULUNAMADI — timurlu dönemi bu arada kaynaksız · ' + U + ' (0042/H-0037)"},'
  '{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi",kesinlik:{f:"ay"},kaynak:"TDV suleyman-celebi-emir: \'Ramazan 806’da (Mart 1404) Bursa’yı hâkimiyeti altına aldı. 22 Mart 1404’te İspanyol Clavijo … Hatta Ankara’nın onun kontrolü altında bulunduğu … anlaşılır\' — AY (Mart 1404), gün BULUNAMADI · '
  't: aynı madde \'22 Şevval 813’te (17 Şubat 1411) Edirne’ye âni bir baskın yapan Mûsâ Çelebi şehri aldı\' · ⚠️ Ankara’nın Çelebi Mehmed’e geçişi TDV’de yalnız \'Ankara ve Bursa’yı alıp … 813 tarihli para bastırdı\' (YIL 1410-11) · ' + U + ' (0042/H-0037)"}', 1))

# ── 0042/H-0011 ② · Kemah 1402-1502 ──────────────────────────────────────
KEM = ('TDV kemah: \'Timur … Kemah’ı alıp tekrar Mutahharten’e verdi. Ardından Karakoyunlular’ın eline geçen Kemah, Karakoyunlular’la Akkoyunlular arasındaki mücadelelere sahne oldu ve zaman zaman el değiştirdi\' — SIRA var, YIL YOK ⇒ '
       'gün komşudan: Erzincan (40 km, aynı beylik/aynı süreç; TDV mutahharten künyesi \'Erzincan-Kemah Beyliği\') · Erzincan’ın kaynağı: TDV erzincan \'1410 yılında Karakoyunlu hâkimiyetine girdi\' · \'Karayülük Osman … Akkoyunlu topraklarına katıldı (1422)\' · \'Uzun Hasan … yeniden Akkoyunlu hâkimiyetine aldı (1457)\' · TDV uzun-hasan \'Cihan Şah’ın 854’te (1450) Erzincan’a ordu gönderip burayı alması\' — YIL · '
       'eski tek \'akkoyunlu 1402-07-28→1502\' bloğu kaynaksızdı ve TDV sırasıyla çelişiyordu · ' + U + ' (0042/H-0011 ②)')
D.append(("0042/H-0011", "yerlesimler.js",
  '{f:"1402-07-28",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1515-05-19",d:"safevi"}',
  '{f:"1402-07-28",t:"1410-01-01",d:"mutahharten",kaynak:"' + KEM + '"},'
  '{f:"1410-01-01",t:"1422-01-01",d:"karakoyunlu",kaynak:"' + KEM + '"},'
  '{f:"1422-01-01",t:"1450-01-01",d:"akkoyunlu",kaynak:"' + KEM + '"},'
  '{f:"1450-01-01",t:"1457-01-01",d:"karakoyunlu",kaynak:"' + KEM + '"},'
  '{f:"1457-01-01",t:"1502-01-01",d:"akkoyunlu",kaynak:"' + KEM + '"},{f:"1502-01-01",t:"1515-05-19",d:"safevi"}', 1))

# ── 0035/H-0079 · Hâil 1779-1818 Suûdî ───────────────────────────────────
D.append(("0035/H-0079", "yerlesimler.js",
  'k:1, d:[], s:[{f:"1779-01-01",t:"1836-01-01",d:"hail-ibn-ali",kaynak:"',
  'k:1, d:[], s:[{f:"1779-01-01",t:"1818-09-01",d:"suud",kesinlik:{t:"ay"},kaynak:"TDV residiler: \'1779’da Suûdî-Vehhâbî güçleri Hâil emirliğini ele geçirdikleri sırada yönetim Abde aşiretinden İbn Ali ailesindeydi\' · \'1818’de Mehmed Ali Paşa kuvvetleri Dir‘iye’ye hâkim olunca Cebelişemmer bölgesi Suûdî hâkimiyetinden çıktı\' · AY: TDV diriye \'şehri 1818 Eylülünde ele geçirdi\' — gün BULUNAMADI (ayın 1’i ay hassasiyetidir, bkz. kesinlik) · İbn Ali ailesi bu dönemde Suûdî’ye bağlı yerel yönetici; v: YAZILMADI çünkü v: Osmanlı tâbiliğidir · ' + U + ' (0035/H-0079 · 0081 Hâil)"},'
  '{f:"1818-09-01",t:"1836-01-01",d:"hail-ibn-ali",kaynak:"', 1))

# Nefud dolgusu: Suûdî kimliği 1779’dan (Cebelişemmer)
D.append(("0035/H-0079", "yerlesimler.js",
  's:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1836-01-01",d:"suud-ikinci"},{f:"1836-01-01",t:"1921-11-02",d:"sammar"}',
  's:[{f:"1779-01-01",t:"1818-09-09",d:"suud",kaynak:"TDV residiler: \'1779’da Suûdî-Vehhâbî güçleri Hâil emirliğini ele geçirdikleri sırada …\' · \'1818’de … Cebelişemmer bölgesi Suûdî hâkimiyetinden çıktı\' — Nefud Cebelişemmer’in kuzeyindeki çöl dolgusu; eski f:1744 (Dir‘iye ittifakı) bu kesim için KAYNAKSIZDI ⇒ 1744-1779 artık bos:devletsiz beyanına düşer · ' + U + ' (0035/H-0079)"},{f:"1824-06-01",t:"1836-01-01",d:"suud-ikinci"},{f:"1836-01-01",t:"1921-11-02",d:"sammar"}', 1))

# ── 0076/H-0023 · Doha 1868-1871 Âl Sânî ─────────────────────────────────
KAT = ('TDV katar: \'1868 sonbaharında Katar’a gemi göndererek Muhammed b. Sânî’yi Bahreyn emîrlerine vergi vermeye mecbur bıraktılar\' ⇒ 1868’de Âl Sânî Katar’ın yöneticisi (terminus ante quem; kuruluş yılı BULUNAMADI, gün yok ⇒ 1868-01-01) · '
       'bitiş: \'1871 sonbaharında Katar’da da Osmanlı kontrolü sağlandı\' (mevcut v: 1871-09-20) · ⚠️ 1871-04-20 maddesi (olaylar_ek5.js) LAHSÂ seferidir, Katar değil · ' + U + ' (0076/H-0023)')
D.append(("0076/H-0023", "yerlesimler.js",
  '    s:[{f:"1913-07-29",t:"1923-10-29",d:"katar"}] },',
  '    s:[{f:"1868-01-01",t:"1871-09-20",d:"katar",kaynak:"' + KAT + '"},{f:"1913-07-29",t:"1923-10-29",d:"katar"}] },', 1))
# Katar iç dolgusu: Doha ile aynı zincir (yarımada bütünü)
D.append(("0076/H-0023", "yerlesimler_ek_korfez.js",
  '  d:[], s:[],\n  v:[{ f:"1559-01-01", t:"1670-01-01", k:"Katar (Benî Müsellem) — Lahsâ beylerbeyiliğine bağlı", statu:"vassal",',
  '  d:[], s:[{f:"1868-01-01",t:"1871-09-20",d:"katar",kaynak:"' + KAT + '"},{f:"1913-07-29",t:"1923-10-29",d:"katar",kaynak:"Doha kaydıyla aynı: 29 Temmuz 1913 Osmanlı-İngiliz mukavelesi (Osmanlı çekilir) · ' + U + '"}],\n'
  '  isg:[{f:"1916-11-03",t:"1923-10-29",d:"ingiltere",kaynak:"TDV katar: \'3 Kasım 1916’da … himaye antlaşması\' (Doha kaydıyla aynı) · ' + U + '"}],\n'
  '  v:[{ f:"1559-01-01", t:"1670-01-01", k:"Katar (Benî Müsellem) — Lahsâ beylerbeyiliğine bağlı", statu:"vassal",', 1))
D.append(("0076/H-0023", "yerlesimler_ek_korfez.js",
  'yıl Lahsa kaydına hizalı (kaynağı bulunamadı)" }] },',
  'yıl Lahsa kaydına hizalı (kaynağı bulunamadı)" },\n'
  '     { f:"1871-09-20", t:"1913-07-29", k:"Sânî emirliği (Osmanlı kazâsı)", kid:"katar", statu:"vassal", kaynak:"TDV katar: \'1871 sonbaharında Katar’da da Osmanlı kontrolü sağlandı ve burası Necid sancağına bağlı bir kaza olarak teşkilâtlandırılıp Câsim b. Sânî fahrî kaymakam tayin edildi\' — Doha kaydıyla aynı gün · ' + U + '" }] },', 1))

# ── 0076/H-0064 · Sîva v: kid ────────────────────────────────────────────
D.append(("0076/H-0064", "yerlesimler_p0043libya.js",
  '    v:[{f:"1805-07-03",t:"1914-12-18"}],',
  '    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali",kaynak:"kid/statu kardeş vahalarla aynı (Dâhile · Hârice · Ferâfire · Bahriye); tarih DEĞİŞMEDİ · ' + U + ' (0076/H-0064)"}],', 1))

# ── 0064/H-0007 · Erdel v: kid ───────────────────────────────────────────
D.append(("0064/H-0007", "yerlesimler.js", 'k:"Erdel Prensliği",statu:"vassal"', 'k:"Erdel Prensliği",statu:"vassal",kid:"erdel"', 4))
D.append(("0064/H-0007", "yerlesimler.js", '"k":"Erdel Prensliği","statu":"vassal"', '"k":"Erdel Prensliği","statu":"vassal","kid":"erdel"', 2))
D.append(("0064/H-0007", "yerlesimler_kdmacar.js", 'k:"Erdel Prensliği",statu:"vassal"', 'k:"Erdel Prensliği",statu:"vassal",kid:"erdel"', 1))

# ── 0035/H-0088 · Kasr-ı Şîrîn (YAMA-0047 A0047-1, C0047-5 şık a) ─────────
D.append(("0035/H-0088", "yerlesimler.js",
  '{f:"1503-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t: "1794-01-01",d:"zend"},{f: "1794-01-01",t:"1923-10-29",d:"kacar"}], d:[{f:"1723-10-01",t:"1730-08-12"}] },',
  '{f:"1503-01-01",t:"1534-12-04",d:"safevi"},{f:"1623-11-28",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t: "1794-01-01",d:"zend"},{f: "1794-01-01",t:"1923-10-29",d:"kacar"}], '
  'd:[{f:"1534-12-04",t:"1623-11-28",kaynak:"TDV bagdat: \'1578-1588 listelerine göre Bağdat eyaleti … başlıca sancaklarını … Derteng, Cevâzir, Vâsıt, Kasrışîrin teşkil ediyor\' — TANIKLIK ARALIĞI, gün yok ⇒ gün komşudan: Hânekîn (25 km, aynı Bağdat eyaleti; d 1534-12-04 Bağdat’ın alınışı → 1623-11-28 Bağdat’ın Safevî’ye geçişi) · YAMA-0047-FERHATPASA-BATI A0047-1 · C0047-5 şık a · eski 1503-1736 kesintisiz safevi 1590’da Bağdat–Kirmanşah arasında kama çiziyordu · ' + U + ' (0035/H-0088)"},{f:"1723-10-01",t:"1730-08-12"}] },', 1))

# ── 0042/H-0006 · Çehrin 1281-1362 ───────────────────────────────────────
D.append(("0042/H-0006", "yerlesimler.js",
  's:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1678-08-21",d:"lehistan"}',
  's:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda",kaynak:"YAMA-A6B-0913 P-CEH-1: 1281’de Kiev yöresi Litvanya DEĞİL Altın Orda nüfuzundaydı · EoU \'Chyhyryn\': yerleşim 16. yy ortasında Kazak kışlağı (14. yy’da yerleşim YOK — nokta bu dönemde bölgeyi temsil eder) · 🔴 GÜN BULUNAMADI: 1362 (Mavi Sular) yalnız komşu Kiev kaydından; Kiev’in 1362’sinin kendi kaynağı DOĞRULANAMADI (TDV ukrayna/polonya/lipkalar tarandı: 1362 yok · EoU \'Blue Waters\'/\'Syni Vody\' sayfası yok · Britannica 403) · ' + U + ' (0042/H-0006)"},'
  '{f:"1362-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik",kaynak:"başlangıç günü BULUNAMADI (bkz. önceki dönem) · ' + U + '"},{f:"1569-07-01",t:"1678-08-21",d:"lehistan"}', 1))

# ── uygula ────────────────────────────────────────────────────────────────
metin, hata = {}, []
for madde, dosya, eski, yeni, n in D:
    if dosya not in metin:
        metin[dosya] = io.open(os.path.join(K, dosya), encoding="utf-8", newline="").read()
    if "\r\n" in metin[dosya]:          # CRLF dosyada çok satırlı kalıp
        eski, yeni = eski.replace("\n", "\r\n"), yeni.replace("\n", "\r\n")
    say = metin[dosya].count(eski)
    if say != n:
        hata.append("%s %s: beklenen %d, bulunan %d · %s" % (madde, dosya, n, say, eski[:70]))
        continue
    metin[dosya] = metin[dosya].replace(eski, yeni)
    print("✓ %-12s %-28s ×%d" % (madde, dosya, n))
if hata:
    print("\n🔴 UYUŞMAZLIK — HİÇBİR ŞEY YAZILMADI:")
    for h in hata:
        print("   " + h)
    sys.exit(1)
if not YAZ:
    print("\n⚪ KURU KOŞU — yazılmadı. --yaz ile yaz.")
    sys.exit(0)
for dosya, t in metin.items():
    io.open(os.path.join(K, dosya), "w", encoding="utf-8", newline="").write(t)
    print("  ✓ yazıldı: data/" + dosya)
