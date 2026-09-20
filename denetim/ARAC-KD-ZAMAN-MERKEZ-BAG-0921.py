# `m:"İzmir"` bağını TAŞIYAN bütün kayıtlar — çelişki üretsin üretmesin.
# Niçin: TDV izmir'e göre İzmir 1841'e kadar KENDİSİ bağlı bir kazaydı; ona bağlanan
# her kayıt aynı soruyu taşıyor. A yaması m:'i DOĞRULAMADI, yalnız zaman sınırı verdi.
import sys, collections
sys.path.insert(0, 'arac')
import girdi, denetle

Y = girdi.yukle()
ix = {y["ad"]: y for y in Y}
c3z, _ = denetle.degismez3z(Y)

m_izmir = [y["ad"] for y in Y if y.get("m") == "İzmir"]
kd_izmir = [y["ad"] for y in Y if y.get("kd") and any(
    p.get("m") == "İzmir" for p in y["kd"])]
celisen = set(t[1] for t in c3z if t[2] == "İzmir")

print("m:'i İzmir olan kayıt          :", len(m_izmir))
print("  bunlardan kd: penceresinde de İzmir taşıyan:", len(kd_izmir))
print("  hâlâ çelişki üreten          :", len(celisen), sorted(celisen))
print("  A/önceki partilerde kd: yazılmış ama çelişkisi kalmamış:",
      len([a for a in kd_izmir if a not in celisen]))
print("   ", sorted(a for a in kd_izmir if a not in celisen))

# Aynı soru: kaç ayrı merkez adı, kaç kayıt taşıyor (ilk 12)
say = collections.Counter(y.get("m") for y in Y if y.get("m"))
print("\nen çok kayıt bağlayan merkezler:", say.most_common(12))
