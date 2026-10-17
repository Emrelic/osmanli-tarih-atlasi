import re, sys
# POSTIT-71 ikinci tur: TDV 'karakoylunlular' "Bütün Karakoyunlu ülkeleri Akkoyunlular'ın eline geçti" (1469)
# ve TDV cizre 1469 ⇒ 1467-11-10 çekimi geri alınır.
dosyalar = ["data/yerlesimler_ok107.js", "data/yerlesimler_ek25.js", "data/yerlesimler_sinir_guney.js"]
for yol in dosyalar:
    s = open(yol, encoding="utf-8", newline="").read()
    pat = re.compile(r'(\{"?f"?:"1431-01-01","?t"?:)"1467-11-10"(,"?d"?:"karakoyunlu"\},\{"?f"?:)"1467-11-10"(,"?t"?:"1508-01-01","?d"?:"akkoyunlu")(,"?kaynak"?:"Karakoyunlu sonu = Cihan[^"]*POSTIT-71[^"]*")')
    yeni, n = pat.subn(lambda m: m.group(1) + '"1469-01-01"' + m.group(2) + '"1469-01-01"' + m.group(3), s)
    print(yol, n)
    if "--yaz" in sys.argv:
        open(yol, "w", encoding="utf-8", newline="").write(yeni)
