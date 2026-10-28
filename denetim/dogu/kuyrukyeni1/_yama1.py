p = r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\kuyrukyeni1\_uret.js'
s = open(p, encoding='utf8').read()
m = {
    "yer('Leshou (Xianxian)', 'cin1', {": "tang",
    "yer('Yarlung (Nêdong/Tsetang)', 'cin1', {": "tibet-imparatorlugu",
    "yer('Banavasi', 'hint1', {": "kadamba-banavasi",
    "yer('Anuradhapura', 'hint1', {": "anuradhapura",
    "yer('Denduluru (Lendulura)', 'hint1', {": "vishnukundina",
    "yer('Kaveripattinam (Puhar)', 'hint1', {": "kalabhra",
}
for k, v in m.items():
    assert k in s, k
    s = s.replace(k, k + "\n  onceki: '%s'," % v)
open(p, 'w', encoding='utf8').write(s)
