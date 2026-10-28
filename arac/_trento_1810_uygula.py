# -*- coding: utf-8 -*-
# ITALYA-1028f: Trento 1805-1813 (Bavyera / Italya Kralligi / Avusturya geri donus). Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler_avrupa.js"
K = ("Trento: Pressburg Antlaşması 26 Aralık 1805 (Avusturya Tirol'ü Bavyera'ya bıraktı; Britannica 'Peace of Pressburg') → Bavyera. "
     "28 Şubat 1810 Paris Antlaşması ile Bavyera Güney Tirol'ü Napolyon'a bıraktı (İtalyanca kaynak özeti; ikincil), 9 Haziran 1810 bölüşümle Alto Adige departmanı (merkezi Trento) İtalya Krallığı'na bağlandı → italya-napolyon. "
     "Avusturya birlikleri (General Fenner) Trento'ya 15 Ekim 1813'te girdi (Trentino Kültür Müdürlüğü, Nequirito 2016 sunumu: cultura.trentino.it); 10 Aralık 1813 geçici Avusturya idaresi (Roschmann); "
     "kesin Tirol'e bağlanma 24 Mart 1816 patenti — gösterilmedi. BEYANLI YAKLAŞIKLIK: Bavyera dönemi başlangıcı (fiilî teslim 1806 başı), İtalya Krallığı'na fiilî devir (Haziran 1810) ve 1813-10-15 arasındaki "
     "İtalya Krallığı dönemi günü 1810-02-28 hukukî devir günüdür; ikinci kaynak aranıyor. · ITALYA-1028f")
L = open(DOS, encoding="utf-8", newline="").read().split("\n")
idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"Trento"')]
assert len(idx) == 1
seg = '{f:"1803-02-25",t:"1918-11-03",d:"avusturya"'
assert L[idx[0]].count(seg) == 1
K = K.replace('"', "'")
L[idx[0]] = L[idx[0]].replace(
    seg,
    '{f:"1803-02-25",t:"1805-12-26",d:"avusturya"},{f:"1805-12-26",t:"1810-02-28",d:"bavyera",kaynak:"%s"},'
    '{f:"1810-02-28",t:"1813-10-15",d:"italya-napolyon",kaynak:"Trento: bkz. bavyera dilimi kaynağı (Paris 28 Şubat 1810; Alto Adige departmanı) · ITALYA-1028f"},'
    '{f:"1813-10-15",t:"1918-11-03",d:"avusturya"' % K)
open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")
