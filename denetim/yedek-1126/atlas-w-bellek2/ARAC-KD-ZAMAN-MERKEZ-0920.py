# Kalan çelişkileri MERKEZE göre grupla — sıradaki partinin kapsayıcı kaynağını seçmek için.
import sys, collections
sys.path.insert(0, 'arac')
import girdi, denetle

Y = girdi.yukle()
ix = {y["ad"]: y for y in Y}
c3z, _ = denetle.degismez3z(Y)

merkez = collections.Counter(t[2] for t in c3z)
kayit = collections.defaultdict(set)
for g, ad, m_ad, a, b in c3z:
    kayit[m_ad].add(ad)

print("kalan çelişki:", len(c3z), "· ayrı merkez:", len(merkez))
print("%-26s %6s %6s" % ("MERKEZ", "çelişki", "kayıt"))
for m_ad, n in merkez.most_common(20):
    print("%-26s %6d %6d   %s" % (m_ad, n, len(kayit[m_ad]),
                                  ", ".join(sorted(kayit[m_ad])[:6])))
