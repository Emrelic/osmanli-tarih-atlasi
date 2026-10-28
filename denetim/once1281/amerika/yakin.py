import json, math, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
o = json.load(open('denetim/once1281/amerika/yerlesim_am.json', encoding='utf8'))
T = {
 'Huacas de Moche': (-8.1322, -78.9947), 'Cahuachi': (-14.8186, -75.1167), 'Wari': (-13.0614, -74.194),
 'Tula': (20.0564, -99.3419), 'Xochicalco': (18.8043, -99.2966), 'Pueblo Bonito': (36.0606, -107.962),
 'Snaketown': (33.1834, -111.934), 'Spiro': (35.3119, -94.5686), 'Uxmal': (20.3594, -89.7714),
 'Calakmul': (18.105, -89.8106), 'Yaxchilan': (16.9, -90.9667), 'Piedras Negras': (17.1667, -91.2625),
 'Dos Pilas': (16.4458, -90.2958), 'Naranjo': (17.1336, -89.2622), 'EkBalam': (20.8911, -88.1363),
 'Coba': (20.4898, -87.7251), 'Cacaxtla': (19.2436, -98.3399), 'Teyuna': (11.038, -73.9252),
 'Tilantongo': (17.25, -97.2833), 'Chan Chan': (-8.1106, -79.075), 'Casas Grandes': (30.3758, -107.9556),
 'Tibes': (18.0422, -66.6218), 'Tambo Colorado': (-13.7053, -75.8292), 'Quirigua': (15.2694, -89.0403),
 'Chichen': (20.6831, -88.5686), 'Tiwanaku': (-16.5547, -68.6733), 'Pikillacta': (-13.6167, -71.7147),
}
def km(a, b):
    R = 6371; p1, p2 = math.radians(a[0]), math.radians(b[0])
    dl = math.radians(b[1] - a[1]); dp = p2 - p1
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))
for k, c in T.items():
    best = sorted(((km(c, (x['lat'], x['lon'])), x['ad'], x['pre'][:1], x['post']) for x in o))[:2]
    print(k, [(round(b[0], 1), b[1], b[2], b[3]) for b in best])
