# KRONO-ATLANTIK-A-0929 — mevcut Fransa/İspanya/Portekiz kronolojilerine KAYNAKLI tarih/metin düzeltmesi
# KURU KOŞU VARSAYILAN:  py denetim/ARAC-KRONO-ATLANTIK-A-0929-UYGULA.py            → yalnız gösterir
#                         py denetim/ARAC-KRONO-ATLANTIK-A-0929-UYGULA.py --uygula   → yazar
# Her işlem: (dosya, başlangıç satırı, beklenen t) ile maddeyi bulur; her alan değişimi o maddenin
# bloğunda TAM BİR eşleşme ister (count==1), yoksa HİÇBİR ŞEY yazılmaz.
# Her düzeltmenin gerekçesi ve kaynağı denetim/KRONO-ATLANTIK-A-0929-DUZELTME.md'de aynı sırayla.
import io, re, sys
sys.stdout.reconfigure(encoding="utf-8")
UYGULA = "--uygula" in sys.argv
DZ = r'"(?:[^"\\]|\\.)*"'

def q(s): return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'

F, I, P = "data/kronoloji_fransa.js", "data/kronoloji_ispanya.js", "data/kronoloji_portekiz.js"
IS = [
 # ---------------- FRANSA ----------------
 (F, 277, "1536-02-18", dict(
   d_ek=" TDV `imtiyazat` maddesine göre bu metin İbrahim Paşa'nın idamı yüzünden padişahça tasdik edilmemiş bir taslak olarak kaldı; Fransa'ya verilen ilk tasdikli genel kapitülasyon 18 Ekim 1569 tarihlidir.",
   kaynak_ek=" · TDV `imtiyazat`: 1536 metni \"sultan tarafından tasdik edilmeden kaldı\"; ilk tasdikli genel kapitülasyon 18 Ekim 1569 — TDV'nin iki maddesi burada ayrışır")),
 (F, 447, "1720-01-01", dict(t="1720-10-07",
   b="Yirmisekiz Mehmed Çelebi Paris elçiliğine çıktı",
   gun="7 Ekim 1720 İstanbul'dan hareket (TDV); XV. Louis'nin kabulü 21 Mart 1721",
   kaynak="TDV `yirmisekiz-celebi-mehmed-efendi`: 7 Ekim 1720'de yola çıktı, 21 Mart 1721'de Tuileries'de kabul edildi · TDV `fransa`")),
 (F, 607, "1794-08-01", dict(t="1794-03-11",
   gun="11 Mart 1794 (21 ventôse an II) kuruluş kararı; 'Polytechnique' adı 1 Eylül 1795",
   kaynak="École polytechnique resmî tarihçesi (polytechnique.edu, '1794-1804'): 11 Mart 1794 kararıyla École centrale des travaux publics olarak kuruldu")),
 (F, 667, "1804-12-02", dict(
   b="Napolyon Notre-Dame'da taç giydi",
   kaynak_ek=" · başlık düzeltildi: 2 Aralık 1804 taç giyme törenidir; imparatorluğun ilanı 18 Mayıs 1804 Senato kararıdır (ayrı madde, kronoloji_cok_fransa.js)")),
 (F, 762, "1830-11-25", dict(t="1830-02-25",
   kaynak="BnF Essentiels, 'La bataille d'Hernani' ve Larousse, 'bataille d'Hernani': ilk temsil 25 Şubat 1830, Comédie-Française")),
 (F, 797, "1853-10-04", dict(t="1854-03-27",
   b="Fransa Rusya'ya savaş ilan etti — Kırım Savaşı'na Osmanlı yanında giriş",
   gun="27 Mart 1854 (İngiltere 28 Mart); savaşın kendisi 1853'te başlamıştı",
   kaynak="TDV `fransa`: Kırım Savaşı Rusya'nın saldırısıyla 22 Haziran 1853'te başladı, Fransa ve İngiltere Osmanlı yanında savaşa girdi (gün vermez) · gün: Encyclopaedia Britannica, 'Crimean War' — İngiltere ve Fransa Mart 1854'te savaş ilan etti · ⚠️ eski kaynak alanındaki tırnaklı TDV cümlesi TDV'de BİREBİR YOK, kaldırıldı")),
 (F, 877, "1881-03-28", dict(t="1882-03-28",
   b="Jules Ferry Yasası — ilköğretim zorunlu ve laik oldu",
   gun="28 Mart 1882 (parasızlık yasası ayrı: 16 Haziran 1881)",
   kaynak="Sénat, 'Les lois scolaires de Jules Ferry': Loi du 28 mars 1882 sur l'enseignement primaire obligatoire; parasızlık Loi du 16 juin 1881")),
 # ---------------- İSPANYA ----------------
 (I, 328, "1565-05-18", dict(t="1565-05-19",
   gun="19 Mayıs 1565 donanma Malta önünde (TDV); karaya çıkış 21 Mayıs — Batı literatürü 18 Mayıs der, TDV esas",
   kaynak="TDV `malta` (İdris Bostan): donanma 18 Şevval (19 Mayıs) Malta önüne geldi, 20 Şevval (21 Mayıs) karaya çıktı")),
 (I, 333, "1565-09-07", dict(t="1565-09-08",
   gun="8 Eylül 1565 kuşatma kalktı (TDV); Don García'nın yardım kuvveti 6 Eylül'de karaya çıkmıştı",
   kaynak="TDV `malta`: 6 Eylül'de Don Garcia yönetiminde 8000 asker adaya çıktı; Mustafa Paşa 12 Safer (8 Eylül) kuşatmayı kaldırdı")),
 (I, 353, "1574-08-25", dict(t="1574-09-12",
   gun="12 Eylül 1574 Tunus (TDV); Halkulvâdî 24 Ağustos 1574",
   d="Koca Sinan Paşa ile Kaptanıderyâ Kılıç Ali Paşa kumandasındaki Osmanlı donanması önce Halkulvâdî kalesini (24 Ağustos), altı günlük muhasaradan sonra da Tunus'u aldı; kısa süreli İspanyol hâkimiyeti sona erdi. Şehir bundan sonra üç asır boyunca Osmanlı'ya bağlı bir ocaklık olarak kaldı ve bu tarih İspanya'nın Kuzey Afrika'daki genişleme hırsının fiilen sonu sayılır.",
   kaynak="TDV `tunus`: Halkulvâdî 6 Cemâziyelevvel 982 (24 Ağustos 1574); \"12 Eylül 1574'te Tunus'u geri aldı\" · (eski dayanak atlas kaydıydı — CLAUDE.md §4, kaldırıldı)")),
 (I, 491, "1701-05-01", dict(t="1702-05-15",
   gun="15 Mayıs 1702 Büyük İttifak'ın savaş ilanı; İtalya'da çatışma 1701 yazında başlamıştı",
   kaynak="Encyclopaedia Britannica, 'War of the Spanish Succession': Büyük İttifak 15 Mayıs 1702'de savaş ilan etti · H. Kamen, The War of Succession in Spain 1700-15 (1969) · (1 Mayıs 1701 için dayanak bulunamadı)")),
 (I, 541, "1737-06-02", dict(t="1738-04-18",
   gun="18 Nisan 1738 kuruluş kararnamesi (Aranjuez); ilk tüzük 17 Haziran 1738",
   kaynak="Real Academia de la Historia, 'Real Cédula fundacional' (rah.es): V. Felipe'nin 18 Nisan 1738 tarihli kararnamesi")),
 (I, 551, "1741-03-20", dict(t="1741-05-20",
   gun="kuşatma 13 Mart – 20 Mayıs 1741; 20 Mayıs Vernon'un çekilişi",
   kaynak="Encyclopaedia Britannica, 'War of Jenkins' Ear' / 'Edward Vernon': Cartagena kuşatması Mart-Mayıs 1741 · J. Lynch, Bourbon Spain 1700-1808 (1989)")),
 (I, 670, "1808-07-22", dict(t="1808-07-19",
   gun="19 Temmuz 1808 muharebe; Dupont'un kapitülasyonu 22 Temmuz",
   kaynak="Encyclopaedia Britannica, 'Battle of Bailén': 19 Temmuz 1808; teslim antlaşması 22 Temmuz · C. J. Esdaile, The Peninsular War (2002)")),
 (I, 779, "1912-03-30", dict(t="1912-11-27",
   gun="27 Kasım 1912 Fransız-İspanyol Madrid antlaşması (30 Mart 1912 Fas-Fransa Fes antlaşmasıdır)",
   kaynak="Encyclopaedia Britannica, 'Morocco — the protectorate': İspanyol bölgesi 27 Kasım 1912 Fransız-İspanyol antlaşmasıyla · S. G. Payne, Politics and the Military in Modern Spain (1967)")),
 # ---------------- PORTEKİZ ----------------
 (P, 120, "1471-08-24", dict(t="1471-08-28",
   gun="28 Ağustos 1471 (TDV); 24 Ağustos Arzila'nın alınışıdır",
   kaynak="TDV `tanca`: Portekizliler \"Tanca'yı 28 Ağustos 1471'de işgal ettiler\"")),
 (P, 293, "1547-11-01", dict(t="1549-02-12",
   gun="12 Şubat 1549 Aden'in geri alınışı (TDV); sefer 29 Ekim 1547'de Süveyş'ten çıkmıştı",
   kaynak_ek=" · gün düzeltildi: 1 Kasım 1547 için dayanak yok; TDV `piri-reis` Süveyş'ten hareketi 29 Ekim 1547, Aden'i 12 Şubat 1549 verir")),
 (P, 308, "1552-08-01", dict(t="1552-01-01",
   gun="1552 sonbaharı — TDV: Mayıs 1552'de Süveyş'ten hareket, 10 Ekim 1552'den sonra Hürmüz üzerine yürüdü; kuşatma günü verilmez",
   kaynak_ek=" · Ağustos 1552 dayanaksızdı; TDV \"21 Şevval 959 (10 Ekim 1552)\" sonrası Hürmüz — gün bilinmediğinden yıl yazıldı")),
 (P, 402, "1761-01-19", dict(t="1761-09-19",
   kaynak="Arquivo Nacional Torre do Tombo, sergi 'Abolição do tráfico de escravos': Alvará com força de lei de 19 de Setembro de 1761 · Afro-Ásia 60 (2019)")),
 (P, 407, "1772-01-01", dict(t="1772-08-28",
   kaynak="Universidade de Coimbra (uc.pt), 'A Reforma Pombalina': D. José 28 Ağustos 1772'de yeni Estatutos'u onayladı (carta de roboração)")),
 (P, 461, "1834-05-24", dict(t="1834-05-26",
   kaynak="Biblioteca Nacional de Portugal, el yazması 'Convenção de Évora Monte … a 26 de Maio de 1834' (purl.pt/27157)")),
 (P, 505, "1911-03-22", dict(t="1911-04-20",
   gun="20 Nisan 1911 kararname; Diário do Governo'da 21 Nisan",
   kaynak="Assembleia da República (parlamento.pt), 'Lei da Separação do Estado das Igrejas': Afonso Costa'nın 20 Nisan 1911 tarihli kanun hükmünde kararnamesi")),
 (P, 520, "1923-10-29", dict(t="1923-01-01", sil_kapsam_genis=True,
   gun="yıl özeti — olay değil; 29 Ekim 1923 atlas penceresinin sınır işaretidir, Portekiz'de o gün bir olay yoktur")),
]
# PARTİ 2 — günü DOĞRU çıkan ama kaynağı "bulunamadı/standart" olan maddelere adıyla kaynak (yüksek güven)
IS2 = [
 (P, 110, "1449-05-20", dict(kaynak="Infopédia (Porto Editora), 'Batalha de Alfarrobeira': 20 Mayıs 1449 · A. H. de Oliveira Marques, History of Portugal I (1972)")),
 (P, 115, "1460-11-13", dict(kaynak="P. Russell, Prince Henry 'the Navigator': A Life (Yale UP, 2000) · Encyclopaedia of Portuguese Expansion (FCSH-UNL), 'Prince Dom Henrique (1394-1460)': Sagres, 13 Kasım 1460")),
 (P, 239, "1521-12-13", dict(gun="13 Aralık 1521 I. Manuel'in ölümü; III. João'nun aklamasyonu 19 Aralık",
   kaynak="Encyclopaedia of Portuguese Expansion (FCSH-UNL), 'Dom Manuel I (1469-1521)' ve 'Dom João III (1502/1521-1557)'")),
 (P, 426, "1808-01-28", dict(kaynak="Carta Régia de 28 de Janeiro de 1808 (Salvador) — Arquivo Nacional (Brasil), BR AN RIO 03 cód. 212 fl. 99")),
 (P, 229, "1517-01-01", dict(gun="1517 baharı — TDV: Selman Reis 18 Nisan 1517 tarihli raporunda Portekiz donanmasının Cidde'yi kuşattığını bildirir; muharebe günü verilmez",
   kaynak_ek=" · TDV `selman-reis`: \"26 Rebîülevvel 923 (18 Nisan 1517)\" raporu")),
 (P, 174, "1501-01-01", dict(gun="ilk taş 6 Ocak 1501 ya da 1502 — kurumun kendisi yılı kesinleştirmiyor",
   kaynak="Mosteiro dos Jerónimos e Torre de Belém (resmî kurum, mosteirojeronimos.torrebelem.gov.pt): temel atma \"6 de Janeiro de 1501 ou 1502\"")),
]
if "--parti2" in sys.argv: IS = IS2
# PARTİ 3 — 1923 yıl özetinden kapsam_genis kalkınca madde ODAKSIZ oldu (odak tavanı gerilemesi); başkent noktası
IS3 = [(P, 520, "1923-01-01", dict(yer_id="Lizbon"))]
if "--parti3" in sys.argv: IS = IS3

def blok(L, s, t):
    i = s - 1
    if f't:"{t}"' not in L[i]: raise SystemExit(f"❌ L{s}: beklenen t:{t} yok → {L[i][:90]}")
    j = i
    while "kaynak:" not in L[j]:
        j += 1
        if j - i > 15: raise SystemExit(f"❌ L{s}: kaynak satırı bulunamadı")
    return i, j

def tek(metin, rx, yeni, ad, s):
    n = len(re.findall(rx, metin))
    if n != 1: raise SystemExit(f"❌ L{s} {ad}: {n} eşleşme (1 bekleniyordu)")
    return re.sub(rx, lambda m: yeni(m), metin)

dosyalar = {}
for dosya, s, t, a in IS:
    L = dosyalar.setdefault(dosya, io.open(dosya, encoding="utf-8").read().split("\n"))
    i, j = blok(L, s, t)
    m = "\n".join(L[i:j + 1]); eski = m
    if "t" in a: m = tek(m, r'\bt:"' + t + '"', lambda _: f't:"{a["t"]}"', "t", s)
    if "gun" in a:
        if re.search(r'\bgun:"', m): m = tek(m, r'\bgun:' + DZ, lambda _: "gun:" + q(a["gun"]), "gun", s)
        else: m = tek(m, r'(\bt:"[^"]*",)', lambda x: x.group(1) + " gun:" + q(a["gun"]) + ",", "gun+", s)
    if "b" in a: m = tek(m, r'(?<![a-z_])b:' + DZ, lambda _: "b:" + q(a["b"]), "b", s)
    if "d" in a: m = tek(m, r'(?<![a-z_])d:' + DZ, lambda _: "d:" + q(a["d"]), "d", s)
    if "d_ek" in a: m = tek(m, r'(?<![a-z_])d:' + DZ, lambda x: x.group(0)[:-1] + a["d_ek"].replace('"', '\\"') + '"', "d_ek", s)
    if "kaynak" in a: m = tek(m, r'\bkaynak:' + DZ, lambda _: "kaynak:" + q(a["kaynak"]), "kaynak", s)
    if "kaynak_ek" in a: m = tek(m, r'\bkaynak:' + DZ, lambda x: x.group(0)[:-1] + a["kaynak_ek"].replace('"', '\\"') + '"', "kaynak_ek", s)
    if "yer_id" in a: m = tek(m, r'\byer_id:""', lambda _: "yer_id:" + q(a["yer_id"]), "yer_id", s)
    if a.get("sil_kapsam_genis"): m = tek(m, r',\s*kapsam_genis:true', lambda _: "", "kapsam_genis", s)
    print(f"── {dosya} L{s} {t}\n   ESKİ: {eski[:230]!r}\n   YENİ: {m[:230]!r}")
    L[i:j + 1] = m.split("\n")
print(f"\n{len(IS)} işlem, hepsi tek eşleşmeli.")
if UYGULA:
    for dosya, L in dosyalar.items():
        io.open(dosya, "w", encoding="utf-8", newline="").write("\n".join(L))
    print("✅ YAZILDI:", ", ".join(dosyalar))
else:
    print("(kuru koşu — yazmak için --uygula)")
