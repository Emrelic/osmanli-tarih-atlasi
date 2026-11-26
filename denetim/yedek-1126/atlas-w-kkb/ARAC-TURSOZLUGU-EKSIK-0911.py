# -*- coding: utf-8 -*-
"""TUR SOZLUGU -- top-level `tur:` alani olmayan kayitlarin TAM listesini
cikarir (kayit govdesinin TAMAMINDA tur: var mi diye bakarak, ilk 120
karakterle sinirli olmadan)."""
import io, re

txt = io.open("data/devletler.js", encoding="utf-8").read()

# her kaydin basini (id: ... ad: ...) ve bir sonraki kaydin basina kadar
# olan govdeyi yakala (kaba ama bu dosyada kayitlar '{ id:"..."' ile
# basliyor ve ayni satirda/yakininda bitmiyor -- kabaca "kronoloji:[...] },"
# ile bitiyor. Basit bir yontem: bir sonraki '\n{ id:"' basina kadar olan
# metni o kaydin govdesi say.
starts = [m.start() for m in re.finditer(r'\n\{ id:"', txt)]
starts = [0] + [s + 1 for s in starts]  # ilk kayit da dahil (dosya basinda \n olmayabilir)
recs = []
ids = re.findall(r'\{ id:"([^"]*)"', txt)

# daha guvenilir: split yontemi
parcalar = re.split(r'(?=\{ id:")', txt)
gorulen = 0
eksik = []
for p in parcalar:
    m = re.match(r'\{ id:"([^"]*)", ad:"([^"]*)"', p)
    if not m:
        continue
    gorulen += 1
    kid, ad = m.group(1), m.group(2)
    # bu kaydin govdesi: bir sonraki '\n{ id:"' basina kadar (p zaten oyle)
    if not re.search(r'\btur:"', p):
        eksik.append((kid, ad))

print("toplam kayit:", gorulen)
print("HICBIR tur: alani TASIMAYAN kayit sayisi:", len(eksik))
out = io.open("denetim/OLCUM-TURSOZLUGU-EKSIK-0911.txt", "w", encoding="utf-8")
for kid, ad in eksik:
    line = "%s | %s" % (kid, ad)
    out.write(line + "\n")
out.close()
print("yazildi: denetim/OLCUM-TURSOZLUGU-EKSIK-0911.txt")
