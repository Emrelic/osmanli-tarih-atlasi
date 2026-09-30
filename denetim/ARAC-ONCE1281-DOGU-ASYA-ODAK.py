# ONCE1281-DOGU-ASYA — kronoloji maddelerine odak alanı (M-5662 DURDURUCU)
# Kural: olay TAM o şehirde → yer_id · olay yakın/bölgesel → odak_yer (yalnız kamera, olay yeri iddiası yok)
# odak_kimlik YAZILMAZ: 1281 öncesinde künyelerin o gün yerleşimi yok → odakKimlikSayisi 0 → kırık atıf.
# Her ad ARAC-ONCE1281-DOGU-ASYA-HAVUZ.py ile havuzda doğrulandı (girdi.yukle, d/v/s süzgeci).
#   py denetim/ARAC-ONCE1281-DOGU-ASYA-ODAK.py
import io, re, sys, json
sys.stdout.reconfigure(encoding="utf-8")
P = r"C:\atlas\data\kronoloji_cok_once1281_dogu_asya.js"
Y, O = "yer_id", "odak_yer"
# (t, b'nin başı) → (alan, değer)
H = [
 ("1005-01-01","Chanyuan",O,"Anyang"), ("1041-01-01","Haoshuichuan",O,"Yinchuan"),
 ("1044-01-01","Qingli",Y,"Kaifeng"), ("1069-01-01","Wang Anshi",Y,"Kaifeng"),
 ("1077-01-01","Như Nguyệt",O,"Hanoi"), ("1081-01-01","Song'un Batı Xia",O,"Yinchuan"),
 ("1114-01-01","Wanyan Aguda",O,"Cilin"), ("1122-01-01","Jin, Liao",Y,"Pekin"),
 ("1124-01-01","Batı Xia, Jin",Y,"Yinchuan"), ("1138-01-01","Lin'an",Y,"Hangzhou"),
 ("1141-01-01","Shaoxing",Y,"Hangzhou"), ("1153-01-01","Jin başkentini",Y,"Pekin"),
 ("1161-01-01","Caishi",O,"Nanking"), ("1209-01-01","Moğollar Batı Xia",Y,"Yinchuan"),
 ("1211-01-01","Cengiz Han Jin",O,"Kalgan"), ("1214-01-01","Jin sarayı",Y,"Kaifeng"),
 ("1215-01-01","Zhongdu",Y,"Pekin"), ("1216-01-01","Doğu Xia",O,"Liaoyang"),
 ("1227-01-01","Moğollar Batı Xia'yı",Y,"Yinchuan"), ("1233-01-01","Kaifeng",Y,"Kaifeng"),
 ("1235-01-01","Moğol–Song",O,["Xiangyang","Çongqing","Kaifeng"]),
 ("1253-01-01","Kubilay'ın Yunnan",Y,"Dali"), ("1094-01-01","Gao Shengtai",Y,"Dali"),
 ("1259-01-01","Möngke",O,"Çongqing"), ("1273-01-01","Xiangyang",Y,"Xiangyang"),
 ("1276-01-01","Güney Song",Y,"Hangzhou"),
 ("1010-01-01","Liao'nun Goryeo",Y,"Kaesong"), ("1019-01-01","Gwiju",O,"Ûicu"),
 ("1044-01-01","Goryeo'nun kuzey",O,["Ûicu","Hamhung"]), ("1107-01-01","Yun Gwan",O,"Hamhung"),
 ("1135-01-01","Myocheong",Y,"Pyongyang"), ("1170-01-01","Askerî darbe",Y,"Kaesong"),
 ("1196-01-01","Choe Chung-heon",Y,"Kaesong"), ("1232-01-01","Goryeo sarayı",Y,"Ganghwa"),
 ("1259-01-01","Goryeo Moğollarla",O,"Ganghwa"), ("1270-01-01","Saray Kaesong",Y,"Kaesong"),
 ("1273-01-01","Sambyeolcho",Y,"Ceccu"), ("1274-01-01","Yuan–Goryeo",Y,"Hakata"),
 ("1086-01-01","İmparator Shirakawa",Y,"Kyoto"), ("1156-01-01","Hōgen",Y,"Kyoto"),
 ("1159-01-01","Heiji",Y,"Kyoto"), ("1167-01-01","Taira no Kiyomori",Y,"Kyoto"),
 ("1180-01-01","Genpei",O,"Kamakura"), ("1187-01-01","Fujiwara no Hidehira",O,["Morioka","Sendai"]),
 ("1199-01-01","Minamoto no Yoritomo öldü",Y,"Kamakura"), ("1203-01-01","Hōjō Tokimasa",Y,"Kamakura"),
 ("1221-01-01","Jōkyū",Y,"Kyoto"), ("1232-01-01","Goseibai",Y,"Kamakura"),
 ("1268-01-01","Kubilay'ın ilk mektubu",O,"Hakata"),
 ("981-01-01","Bạch Đằng",O,"Hai Phong"), ("1005-01-01","Lê Hoàn öldü",O,"Ninh Binh"),
 ("1010-01-01","Başkent Hoa Lư",Y,"Hanoi"), ("1044-01-01","Lý Thái Tông",Y,"Vijaya"),
 ("1069-01-01","Champa kralı",O,"Quang Tri"), ("1010-01-01","I. Suryavarman",Y,"Angkor"),
 ("1113-01-01","II. Suryavarman",Y,"Angkor"), ("1145-01-01","Kmer ordusu",Y,"Vijaya"),
 ("1177-01-01","Cham donanması",Y,"Angkor"), ("1190-01-01","VII. Jayavarman",Y,"Vijaya"),
 ("1203-01-01","Champa doğrudan",Y,"Vijaya"), ("1220-01-01","Kmer Champa",Y,"Vijaya"),
 ("1044-01-01","Anawrahta",Y,"Pagan"), ("1084-01-01","Kyansittha",Y,"Pagan"),
 ("1256-01-01","Narathihapate",Y,"Pagan"), ("1275-01-01","Ramkhamhaeng",Y,"Sukhothai"),
 ("1003-01-01","Srivicaya kralı",Y,"Palembang"), ("1030-01-01","Sanghyang",O,"Batavia"),
 ("1037-01-01","Airlangga",O,"Surabaya"), ("1268-01-01","Kertanagara",O,"Malang"),
 ("1076-01-01","Tholing",O,"Leh"), ("1247-01-01","Sakya Pandita",O,"Lanzhou"),
 ("1268-01-01","Moğol-Sakya",O,"Lhasa"), ("1280-01-01","Phagpa",O,"Lhasa"),
]
s = io.open(P, encoding="utf-8").read()
yapilan, bulunamayan = 0, []
for t, bb, alan, deg in H:
    rx = re.compile(r'(\{ t:"' + re.escape(t) + r'", b:"' + re.escape(bb) + r'[^\n]*\n  etiket:\[[^\]]*\],)( yer:)')
    hits = rx.findall(s)
    if len(hits) != 1:
        bulunamayan.append((t, bb, len(hits))); continue
    v = json.dumps(deg, ensure_ascii=False)
    s = rx.sub(lambda m: m.group(1) + " " + alan + ":" + v + "," + m.group(2), s, count=1)
    yapilan += 1
io.open(P, "w", encoding="utf-8", newline="").write(s)
print("eşleme", len(H), "· yazılan", yapilan, "· bulunamayan", bulunamayan)
