import re, sys
sys.stdout.reconfigure(encoding="utf-8")
P = "data/devletler.js"
s = open(P, encoding="utf-8").read()
ESKI = re.compile(r'kaynak:"https://campusgroups\.rit\.edu/csa/caribbean-independence-days/ ; ZAYIF KAYNAK[^"]*"')
YENI = {
 "grenada": ('The Grenada Constitution Order 1973, SI 1973/2155 (19 Aralık 1973\'te yapıldı; yürürlük 7 Şubat 1974) — WIPO Lex GD009 kopyası ve Georgetown PDBA Constitutions kopyası; Grenada kendi mevzuatı Cap. 128A',
  'KUNYE-KAYNAK-1108 (8 Kasım 2026): f günü (7 Şubat 1974) SI yürürlük günüyle teyit; çift teyit (UK SI + Grenada kendi mevzuatı). Alt ajan araştırması: SI başlığı legislation.gov.uk\'ta görüldü, tam metin WIPO Lex kopyasından; atlas f/t değişmedi. Önceki kaynak (RIT öğrenci kulübü sayfası) dayanak olamaz, değiştirildi.'),
 "dominika": ('Commonwealth of Dominica Constitution Order 1978, SI 1978/1027 (25 Temmuz 1978\'de yapıldı; yürürlük 3 Kasım 1978) — WIPO Lex (wipo.int/wipolex/en/text/492259) ve Georgetown PDBA kopyası',
  'KUNYE-KAYNAK-1108 (8 Kasım 2026): f günü (3 Kasım 1978) SI metninde teyit; TEK KAYNAK (ikinci bağımsız kaynak bulunamadı). 1978/1521 değişiklik emridir, karıştırılmasın. Önceki kaynak (RIT öğrenci kulübü sayfası) dayanak olamaz, değiştirildi; atlas f/t değişmedi.'),
 "saint-lucia": ('Saint Lucia Constitution Order 1978, SI 1978/1901 (20 Aralık 1978\'de yapıldı; yürürlük 22 Şubat 1979) — WIPO Lex (wipo.int/wipolex/en/legislation/details/11319); Saint Lucia Başsavcılık Revised Laws (attorneygeneralchambers.com)',
  'KUNYE-KAYNAK-1108 (8 Kasım 2026): f günü (22 Şubat 1979) teyit; çift teyit (UK SI + Saint Lucia kendi mevzuat sitesi). Önceki kaynak (RIT öğrenci kulübü sayfası) dayanak olamaz, değiştirildi; atlas f/t değişmedi.'),
 "antigua-barbuda": ('Antigua and Barbuda Constitution Order 1981, SI 1981/1106 (31 Temmuz 1981\'de yapıldı) ve Anayasa m.3 (yürürlük 1 Kasım 1981) — OAS kopyası (oas.org, ab_constitution_1981.pdf); Georgetown PDBA',
  'KUNYE-KAYNAK-1108 (8 Kasım 2026): f günü (1 Kasım 1981) Anayasa yürürlük/bağımsızlık günüyle teyit; çift teyit (SI metni + OAS kopyası). NÜANS: Emrin kendisi 31 Ekim 1981\'de yürürlüğe girer, Anayasa 1 Kasım\'da (UNEP LEAP 31 Ekim diyor); atlas bağımsızlık günü olan 1 Kasım\'ı kullanır. Önceki kaynak (RIT öğrenci kulübü sayfası) değiştirildi; f/t değişmedi.'),
 "saint-kitts-nevis": ('Saint Christopher and Nevis Constitution Order 1983, SI 1983/881 (22 Haziran 1983\'te yapıldı; Anayasa m.3 ile yürürlük 19 Eylül 1983) — St Kitts ve Nevis hükümeti Anayasa sayfası (gov.kn); Georgetown PDBA',
  'KUNYE-KAYNAK-1108 (8 Kasım 2026): f günü (19 Eylül 1983) Anayasa yürürlüğüyle teyit; çift teyit (SI metni + St Kitts hükümeti). Emrin kendisi 23 Haziran 1983\'te yürürlüğe girmişti, bağımsızlık günü Anayasa\'nınki. Önceki kaynak (RIT öğrenci kulübü sayfası) değiştirildi; f/t değişmedi.'),
}
for i, (k, n) in YENI.items():
    satir = re.search(r'^\{ id:"%s",.*$' % re.escape(i), s, re.M)
    assert satir, i
    st = satir.group(0)
    assert "ic_not:" not in st.split("kronoloji:")[0], i
    m = ESKI.search(st)
    assert m, i
    yeni = 'kaynak:"%s", ic_not:"%s"' % (k.replace('"', "'"), n.replace('"', "'"))
    s = s.replace(st, st[:m.start()] + yeni + st[m.end():], 1)
    print("ok", i)
open(P, "w", encoding="utf-8", newline="").write(s)
