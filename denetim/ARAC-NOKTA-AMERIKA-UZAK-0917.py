"""NOKTA-AMERIKA — aday kasabaların mevcut noktalara ve NOKTASIZ-ADAY kümelerine uzaklığı.

Kullanım: py denetim/ARAC-NOKTA-AMERIKA-UZAK-0917.py
Aday listesi aşağıda (ad, lat, lon — koordinatlar bugünkü şehir merkezi).
Her aday için: en yakın mevcut yerleşim (girdi.yukle, 77 dosya) ve mesafesi,
en yakın Amerika NOKTASIZ-ADAY küme merkezi ve mesafesi. 3 km altı = YAKIN MÜKERRER (D002).
Veriye YAZMAZ.
"""
import io, json, math, sys
sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi

ADAY = [
    ("Oruro", -17.9667, -67.1167), ("Cochabamba", -17.3895, -66.1568), ("Tupiza", -21.4447, -65.7189),
    ("Porco", -19.8333, -65.9833), ("Camargo (Cinti)", -20.6400, -65.2100), ("Uyuni", -20.4597, -66.8250),
    ("Barinas", 8.6226, -70.2075), ("Guanare", 9.0418, -69.7421), ("Calabozo", 8.9239, -67.4294),
    ("San Carlos (Cojedes)", 9.6612, -68.5827), ("Maturín", 9.7457, -63.1832),
    ("Diamantina", -18.2413, -43.6031), ("Serro", -18.6048, -43.3794), ("Minas Novas", -17.2182, -42.5886),
    ("Itabira", -19.6192, -43.2267), ("Rio de Contas", -13.5794, -41.8111), ("Caetité", -14.0694, -42.4861),
    ("Pirenópolis", -15.8507, -48.9592), ("Cachoeira", -12.6182, -38.9558), ("Casa Branca", -21.7742, -47.0858),
    ("Mogi Mirim", -22.4332, -46.9578), ("Passo Fundo", -28.2620, -52.4064), ("Cruz Alta", -28.6386, -53.6064),
    ("Caxias do Sul", -29.1678, -51.1794), ("Diamantino", -14.4086, -56.4461), ("Poconé", -16.2566, -56.6228),
    ("Bauru", -22.3246, -49.0871), ("Botucatu", -22.8858, -48.4450), ("Tucuruí (Alcobaça)", -3.7661, -49.6725),
    ("Palmeira dos Índios", -9.4056, -36.6328), ("Viana (Maranhão)", -3.2204, -44.9918),
    ("Chaves (Marajó)", -0.1644, -49.9870), ("Carolina", -7.3322, -47.4697), ("Miranda", -20.2406, -56.3781),
    ("San Ignacio Guazú", -26.8876, -57.0283), ("Encarnación", -27.3306, -55.8667), ("Concepción (Paraguay)", -23.4064, -57.4344),
    ("San Luis", -33.3017, -66.3378), ("Río Cuarto", -33.1232, -64.3493), ("Junín", -34.5856, -60.9589),
    ("San Rafael", -34.6177, -68.3301), ("La Rioja", -29.4131, -66.8558), ("Esquina", -30.0145, -59.5272),
    ("Treinta y Tres", -33.2333, -54.3833), ("Minas (Uruguay)", -34.3759, -55.2377),
    ("Columbia (Missouri)", 38.9517, -92.3341), ("Charlotte", 35.2271, -80.8431), ("Morganton", 35.7454, -81.6848),
    ("Franklin (Venango)", 41.3978, -79.8314), ("Rawlins", 41.7911, -107.2387), ("Traverse City", 44.7631, -85.6206),
    ("Elko", 40.8324, -115.7631), ("Lewistown", 47.0625, -109.4282), ("Aberdeen (S. Dakota)", 45.4647, -98.4865),
]


def km(a, b, c, d):
    p = math.pi / 180
    x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))


Y = girdi.yukle(sessiz=True)
N = json.load(io.open("denetim/NOKTASIZLIK-ADAY-0917.json", encoding="utf-8"))["NOKTASIZ-ADAY"]
N = [k for k in N if k["merkez_lon"] < -30]
for ad, la, lo in ADAY:
    y = min(Y, key=lambda r: km(la, lo, float(r["lat"]), float(r["lon"])))
    dy = km(la, lo, float(y["lat"]), float(y["lon"]))
    k = min(N, key=lambda r: km(la, lo, r["merkez_lat"], r["merkez_lon"]))
    dk = km(la, lo, k["merkez_lat"], k["merkez_lon"])
    isaret = "🔴MÜKERRER" if dy < 3 else ("🟢" if dy >= 100 else "🟡")
    print("%-24s en yakın nokta %-34s %6.0f km %s | küme %6d km² @%.2f,%.2f  %4.0f km" % (
        ad, y["ad"][:34], dy, isaret, k["km2"], k["merkez_lat"], k["merkez_lon"], dk))
