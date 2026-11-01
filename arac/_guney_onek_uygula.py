# -*- coding: utf-8 -*-
# ITALYA-1029b: guney anakara (Napoli, Taranto, Brindisi, Lecce, Cosenza, Reggio Calabria) 1281 oncesi zincirleri. Tek seferlik.
import sys, glob, re
sys.stdout.reconfigure(encoding="utf-8")

ANTIK = [("-0026-01-16", "0395-01-17", "roma-imp"), ("0395-01-17", "0476-08-23", "bati-roma"),
         ("0476-08-23", "0493-03-05", "odoakar"), ("0493-03-05", "0553-01-01", "dogu-got")]
ORTAK = ("ZİNCİR-GÜNEY-ANTİK (ITALYA-1029b, künye sınırları esas): roma-imp (-0026-01-16→0395-01-17), bati-roma (→476-08-23), odoakar (→493-03-05), dogu-got (→553-01-01), "
         "bizans (553→) künyelerinin kendi sınırları ve kaynakları. BEYANLI YAKLAŞIKLIK: Gotik Savaş'ın şehre özgü günleri, Lombard Benevento/Salerno payları, "
         "Arap emirlikleri (Bari 847-871, Sicilya 827 sonrası akınlar) ve Bizans katepanlığı/thema iç bölünmesi ayrı gösterilmedi; MÖ dönem ({MO}) yazılmadı.")


def seg(f, t, d, kes=None, kay=None):
    s = '{f:"%s",t:"%s",d:"%s"' % (f, t, d)
    if kes:
        s += ',kesinlik:%s' % kes
    if kay:
        s += ',kaynak:"%s"' % kay.replace('"', "'")
    return s + '}'


def uygula(ad, onek, degistir=None):
    """onek: segment metinleri (virgullu); ilk '{f:"1281' ya da 'degistir' ile verilen basa eklenir."""
    for fn in sorted(glob.glob("data/yerlesimler*.js")):
        L = open(fn, encoding="utf-8", newline="").read().split("\n")
        idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"%s"' % ad)]
        if not idx:
            continue
        assert len(idx) == 1, (ad, idx)
        l = L[idx[0]]
        k = l.index("s:[") + 3
        if degistir:
            l = degistir(l)
            k = l.index("s:[") + 3
        L[idx[0]] = l[:k] + onek + l[k:]
        open(fn, "w", encoding="utf-8", newline="").write("\n".join(L))
        print("tamam", ad, fn)
        return
    raise SystemExit("bulunamadi " + ad)


def prefix(ant_mo, bizans_t, sonra):
    """sonra: [(f,t,d,kes,kay)] bizans_t'den sonrasi; ilk antik segment kaynak tasir."""
    segs = []
    ort = ORTAK.replace("{MO}", ant_mo)
    for i, (f, t, d) in enumerate(ANTIK):
        segs.append(seg(f, t, d, None, ort if i == 0 else None))
    segs.append(seg("0553-01-01", bizans_t, "bizans", '{t:"yil"}'))
    for f, t, d, kes, kay in sonra:
        segs.append(seg(f, t, d, kes, kay))
    return ",".join(segs) + ","


ABI_BARI = ("ABİ MERKEZ: Bari — Bari zinciri: TDV 'Bari' (Bârî 3 Şubat 871'de Bizans'a geçti; 1071 Norman fethi), Treccani 'Bari' (Bizans hâkimiyeti 1071'de bitti; 1128-1130 Roger II). "
            "{ad} için şehre özgü tarihli sahip cümlesi TDV/Treccani'de bulunamadı; sahip abi merkezden devralındı. BEYANLI YAKLAŞIKLIK, ikinci kaynak aranıyor.")
KAL_KAY = ("Apulya ve Calabria Dükalığı künyesi f 1059 (Treccani 'Puglia': «ducato di Puglia e Calabria (1059)»); Calabria fethinin şehre özgü günü (Cosenza/Reggio ≈ 1059-1060) "
           "okunmadı — BEYANLI YAKLAŞIKLIK, künye başlangıcı yıl hassasiyetiyle alındı, ikinci kaynak aranıyor. Sahip abi merkez Melfi/Bari zincirinden devralındı.")
S128 = ("1128: Apulya dükalığının Roger II'ye tanınması / Sicilya Krallığı (1130) — Bari ve Salerno zincirleriyle aynı gün (atlas künye apulya-dukaligi t 1128-01-01); "
        "{ad} için şehre özgü cümle yok, abi merkez Bari. BEYANLI YAKLAŞIKLIK.")

# --- Brindisi, Lecce: bizans -> 1071 (abi Bari) -> apulya -> 1128 -> sicilya
for ad in ("Brindisi", "Lecce"):
    sonra = [("1071-01-01", "1128-01-01", "apulya-dukaligi", '{f:"yil",t:"yil"}', ABI_BARI.replace("{ad}", ad)),
             ("1128-01-01", "1281-01-01", "sicilya-kralligi", '{f:"yil"}', S128.replace("{ad}", ad))]
    uygula(ad, prefix("MÖ 3. yy Roma fethi", "1071-01-01", sonra))

# --- Cosenza, Reggio Calabria: bizans -> 1059 -> apulya -> 1128 -> sicilya
for ad in ("Cosenza", "Reggio Calabria"):
    sonra = [("1059-01-01", "1128-01-01", "apulya-dukaligi", '{f:"yil",t:"yil"}', KAL_KAY),
             ("1128-01-01", "1281-01-01", "sicilya-kralligi", '{f:"yil"}', S128.replace("{ad}", ad))]
    uygula(ad, prefix("MÖ dönem", "1059-01-01", sonra))

# --- Napoli: antik + bizans 553-763 + napoli-dukaligi 763-1000 (kunye f 763'e cekilir)
NAP = ("Napoli Dükalığı: Stefanos II'nin 763'te Konstantinopolis'ten Roma'ya yönelmesi / fiilî bağımsızlık (Duchy of Naples; Stephen II of Naples — ikincil kaynaklar; "
       "661'de Basil'in ilk dük olarak atanması da anılır). Künye napoli-dukaligi f 1000 idi; zincir 763 yıl hassasiyetiyle başlatıldı ve künye f 0763-01-01'e çekildi. "
       "ikinci kaynak aranıyor (Treccani 'Napoli', TDV 'Napoli'). · ITALYA-1029b")
nap = prefix("Neapolis'in Roma ile 326 antlaşması (Livy VIII.25-26)", "0763-01-01",
             [("0763-01-01", "1000-01-01", "napoli-dukaligi", '{f:"yil"}', NAP)])
uygula("Napoli", nap)

# --- Taranto: BOSLUK (-0271..1000) ve BOSLUK (1088..1281) doldur
def taranto(l):
    a = l.index('{f:"-0271-01-01",t:"1000-01-01",d:"__BOSLUK__"')
    b = l.index('{f:"1000-01-01",t:"1063-01-01"')
    ant = [("-0271-01-01", "-0026-01-16", "roma-cumhuriyeti")] + ANTIK
    ort = ORTAK.replace("{MO}", "MÖ 272 sonrası Roma müttefikliği/fethi (Treccani 'Taranto': «alleanza ... a dure condizioni»)") + " Önceki BOŞLUK BEYANI bu zincirle kapatıldı."
    segs = [seg(f, t, d, '{f:"yil"}' if i == 0 else None, ort if i == 0 else None) for i, (f, t, d) in enumerate(ant)]
    segs.append(seg("0553-01-01", "1000-01-01", "bizans", '{t:"yil"}'))
    l = l[:a] + ",".join(segs) + "," + l[b:]
    a = l.index('{f:"1088-01-01",t:"1281-01-01",d:"__BOSLUK__"')
    b = l.index('{f:"1281-01-01",t:"1861-02-13"')
    tk = ("1088-1128: Taranto Prensliği (Bohemond I, 1088; atlas künye taranto-prensligi f 1088) apulya-dukaligi içinde sürdürüldü — şehre özgü tarihli sahip cümlesi Treccani 'Taranto'da yok "
          "(yalnız 1063 Guiscardo ve 1301 Anjou apanajı); ABİ MERKEZ: Bari (apulya-dukaligi → sicilya-kralligi 1128). BEYANLI YAKLAŞIKLIK: Taranto Prensliği ayrı boyanmadı; "
          "Roger II'nin Taranto'yu alışı Mayıs-Haziran 1128 (ikincil) — 1128-01-01 yıl hassasiyetiyle Bari zinciriyle hizalandı. ikinci kaynak aranıyor. · ITALYA-1029b")
    mid = seg("1088-01-01", "1128-01-01", "apulya-dukaligi", '{f:"yil",t:"yil"}', tk) + "," + seg("1128-01-01", "1281-01-01", "sicilya-kralligi", '{f:"yil"}', S128.replace("{ad}", "Taranto")) + ","
    l = l[:a] + mid + l[b:]
    return l


uygula("Taranto", "", taranto)
