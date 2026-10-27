import sys
# POSTIT-71 üçüncü tur: Mardin zinciri (Mardin, Derik, Midyat, ...) Karakoyunlu -> Akkoyunlu geçişi
# 1467-11-10 (kaynaksız) -> 1432-01-01 (TDV mardin: 835/1432, yalnız yıl). 1409-1467 halkası bölünüyor.
BEYAN = "TDV mardin: 'Karayülük Osman Bey, Karakoyunlular'ın muhafız bıraktığı Emîr Nâsır'dan Mardin'i 835'te (1432) teslim aldı'; Akkoyunlu yönetimi XVI. yüzyıl başına kadar sürdü · 1432 YIL, gün kaynakta yok · eski 1467-11-10 kaynaksızdı · POSTIT-71 (Emre onayı, 18 Ekim 2026)"
dosyalar = {
 "data/yerlesimler.js": False,
 "data/yerlesimler_ek25.js": False,
 "data/yerlesimler_ok107.js": False,
 "data/yerlesimler_sinir_guney.js": True,
}
for yol, jsn in dosyalar.items():
    s = open(yol, encoding="utf-8", newline="").read()
    if jsn:
        a = '{"f":"1409-01-01","t":"1467-11-10","d":"karakoyunlu"},{"f":"1467-11-10","t":"1507-01-01","d":"akkoyunlu"}'
        b = '{"f":"1409-01-01","t":"1432-01-01","d":"karakoyunlu"},{"f":"1432-01-01","t":"1507-01-01","d":"akkoyunlu","kesinlik":{"f":"yil","t":"gun"},"kaynak":"%s"}' % BEYAN
    else:
        a = '{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"}'
        b = '{f:"1409-01-01",t:"1432-01-01",d:"karakoyunlu"},{f:"1432-01-01",t:"1507-01-01",d:"akkoyunlu",kesinlik:{f:"yil",t:"gun"},kaynak:"%s"}' % BEYAN
    print(yol, s.count(a))
    if "--yaz" in sys.argv:
        open(yol, "w", encoding="utf-8", newline="").write(s.replace(a, b))
