import json
s = open('uret_x10.py', encoding='utf8').read()
s = s.replace('''            "kur": None, "ark": None, "bit": None, "sahip": [dict(s, kaynak=kay) for s in sahip], "olay": ol, "ic_not": ic}''', '''            "kur": None, "ark": None, "bit": None, "sahip": [dict(s, kaynak=kay) for s in sahip], "olay": ol,
            "ic_not": ic + ((" SAHİP/DİKİŞ: %s %s → %s (atlas başlangıcı): gün kaynakta yok, atlas başlangıcına ≤1 yıl uzatıldı; kaynak yılı esas, 'f'/'t' kaynağın yıl ucudur, atlas başlangıcı kaynak değildir." % (sahip[0]["d"], sahip[0]["f"], sahip[0]["t"])) if sahip else "")}''')
s = s.replace('"Douala", "Douala", 4.0483', '"Douala", "Duala", 4.0483')
s = s.replace('"Banjul (Bathurst)", "Banjul (Bathurst)"', '"Banjul (Bathurst)", "Bathurst (Banjul)"')
s = s.replace('"Gcuwa (Butterworth)", "Gcuwa (Butterworth)"', '"Gcuwa (Butterworth)", "Gcuva (Butterworth)"')
s = s.replace('"Harare (Salisbury)", "Harare (Salisbury)"', '"Harare (Salisbury)", "Salisbury (Harare)"')
s = s.replace('"Mutare (Umtali)", "Mutare (Umtali)"', '"Mutare (Umtali)", "Umtali (Mutare)"')
s = s.replace('"Libreville", "Libreville", 0.3924', '"Libreville", "Librevil (Libreville)", 0.3924')
open('uret_x10.py', 'w', encoding='utf8').write(s)
json.dump({
 "Libreville": [{"f": "1849-01-01", "t": "1849-08-17", "d": "fransa-cumhuriyet", "kesinlik": "yil"}],
 "Banjul": [{"f": "1816-01-01", "t": "1816-04-23", "d": "ingiltere", "kesinlik": "yil"}],
 "Bangi": [{"f": "1889-01-01", "t": "1889-06-26", "d": "fransa-cumhuriyet", "kesinlik": "yil"}],
 "Harare": [{"f": "1890-01-01", "t": "1890-09-12", "d": "ingiliz-guney-rodezya", "kesinlik": "yil"}]}, open('sah_x10.json', 'w'))
