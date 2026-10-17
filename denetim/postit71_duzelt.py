import re, sys
BEYAN = "Karakoyunlu sonu = Cihan Şah'ın öldürüldüğü gün (kronoloji 1467-11-10); TDV cizre '1469 yılında Karakoyunlular ve daha sonra Akkoyunlular bölgeye hâkim oldular' cümlesi muğlak, 1469 yılı Karakoyunlu sonu olarak okunmadı · Derik (Akkoyunlu 1467-11-10) ile hizalı · BEYANLI YAKLAŞIKLIK: Cizre'de ardıl sahibin günü kaynakta yok (yerel Bohtan emirliği ayrıca araştırılacak) · POSTIT-71 (Emre: en bilimsel/mantıklı seçenek, 17 Ekim 2026)"
dosyalar = {
 "data/yerlesimler_ok107.js": False,
 "data/yerlesimler_ek25.js": False,
 "data/yerlesimler_sinir_guney.js": True,
}
for yol, jsn in dosyalar.items():
    s = open(yol, encoding="utf-8", newline="").read()
    if jsn:
        a = '{"f":"1431-01-01","t":"1469-01-01","d":"karakoyunlu"},{"f":"1469-01-01","t":"1508-01-01","d":"akkoyunlu"}'
        b = '{"f":"1431-01-01","t":"1467-11-10","d":"karakoyunlu"},{"f":"1467-11-10","t":"1508-01-01","d":"akkoyunlu","kaynak":"%s"}' % BEYAN
    else:
        a = '{f:"1431-01-01",t:"1469-01-01",d:"karakoyunlu"},{f:"1469-01-01",t:"1508-01-01",d:"akkoyunlu"}'
        b = '{f:"1431-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1508-01-01",d:"akkoyunlu",kaynak:"%s"}' % BEYAN
    print(yol, s.count(a))
    if "--yaz" in sys.argv:
        open(yol, "w", encoding="utf-8", newline="").write(s.replace(a, b))
