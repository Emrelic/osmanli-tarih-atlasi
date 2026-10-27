p = 'denetim/dogu/yama_uygula.py'
s = open(p, encoding='utf-8').read()

# 1) kur_konumu yardımcısı (main'den önce)
yardimci = '''
def kur_konumu(obj):
    """obj içinde derinlik-1 `kur:"..."` değerinin (açılış tırnağı sonrası başlangıç, bitiş, değer) göreli konumu; yoksa None."""
    d = 0
    for i, c, j in tarama(obj):
        if c in '{[':
            d += 1
        elif c in '}]':
            d -= 1
        elif d == 1 and c == 'k' and (i == 0 or not (obj[i - 1].isalnum() or obj[i - 1] == '_')):
            m = re.match(r'kur"?\\s*:\\s*"([^"]*)"', obj[i:])
            if m:
                bas = i + m.start(1)
                return bas, bas + len(m.group(1)), m.group(1)
        elif d == 1 and c in '"\\'' and obj[i + 1:j] == 'kur':
            m = re.match(r'.kur.\\s*:\\s*"([^"]*)"', obj[i:j + 1 + 30])
            if m:
                bas = i + m.start(1)
                return bas, bas + len(m.group(1)), m.group(1)
    return None


def main():'''
s = s.replace('\n\ndef main():', yardimci, 1)

# 2) uygulanacak'a kur düzenlemesi ekle
s = s.replace("        uygulanacak.append((f, bas + sb, ad, s))",
"""        kd = kur_konumu(obj)
        kur_edit = None
        if kd and kd[2] and gun_sayisi(s[0]['f']) < gun_sayisi(kd[2] if len(kd[2]) >= 10 else (kd[2] + '-01-01')[:10]):
            kur_edit = (bas + kd[0], bas + kd[1], s[0]['f'], kd[2])
        uygulanacak.append((f, bas + sb, ad, s, kur_edit))""")
s = s.replace("for f, pos, ad, s in uygulanacak:\n            by.setdefault(f, []).append((pos, ad, s))",
              "for f, pos, ad, s, ke in uygulanacak:\n            by.setdefault(f, []).append((pos, ad, s, ke))")
s = s.replace("""            for pos, ad, s in sorted(L, reverse=True):
                ek = ''.join(""", """            edits = []
            for pos, ad, s, ke in L:
                ek = ''.join(""")
s = s.replace("""                t = t[:pos] + ek + t[pos:]
                n_yazildi += 1""", """                edits.append((pos, pos, ek))
                if ke:
                    edits.append((ke[0], ke[1], ke[2]))
                n_yazildi += 1
            for a, b, yeni in sorted(edits, key=lambda e: (e[0], e[1]), reverse=True):
                t = t[:a] + yeni + t[b:]""")
s = s.replace("    for f, pos, ad, s in uygulanacak:\n        print('  uygulanır   ', ad,",
              "    for f, pos, ad, s, ke in uygulanacak:\n        print('  uygulanır   ', ad,")
s = s.replace("s[0]['f'], '→', s[-1]['t'])\n    sys.exit", "s[0]['f'], '→', s[-1]['t'], ('· kur %s→%s' % (ke[3], ke[2])) if ke else '')\n    sys.exit")
open(p, 'w', encoding='utf-8', newline='').write(s)
print('ok')
