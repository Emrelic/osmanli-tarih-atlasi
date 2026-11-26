# KALAN 272'NİN KAÇI "KAYNAK GEREKTİRMEYEN" SINIFTA?
#
# Ölçüt: çelişkinin kesiti (g), yerleşimin İLK Osmanlı dönemi başlangıcından ÖNCE ise,
# {1281-01-01 → ilk d:/v: başlangıcı, k:0, m:null} penceresi o çelişkiyi kaldırır ve
# YENİ BİR TARİHÎ İDDİA TAŞIMAZ: kaydın kendi `s:`i zaten o tarihte yabancı bir devlet
# gösteriyor; "yabancı devletteyken Osmanlı kademesinde değildi" bir iç tutarlılık
# ifadesidir, atlastan devşirilmiş yeni bir tarih değildir.
#
# ⚠️ GERİ KALAN sınıf TEHLİKELİ: yerleşim o kesitte ZATEN Osmanlı; `m:` penceresinin
# NE ZAMAN başladığı gerçek bir tarihî olgudur (Söğüt 1299'da Osmanlı ama Bursa 1326'da
# fethedilir — mekanik kural Söğüt'ü 1300'de Bursa'ya bağlar ve çelişki SÜRER).
import sys, collections
sys.path.insert(0, 'arac')
import girdi, denetle

Y = girdi.yukle()
ix = {y["ad"]: y for y in Y}
c3z, _ = denetle.degismez3z(Y)


def ilk_osmanli(y):
    t = [p["f"] for p in (y.get("d") or [])] + [p["f"] for p in (y.get("v") or [])]
    return min(t) if t else None


guvenli, riskli, osmanlisiz = [], [], []
for g, ad, m_ad, a, b in c3z:
    io_ = ilk_osmanli(ix[ad])
    if io_ is None:
        osmanlisiz.append((g, ad, m_ad, a, b))
    elif g < io_:
        guvenli.append((g, ad, m_ad, a, b))
    else:
        riskli.append((g, ad, m_ad, a, b))

print("kalan çelişki:", len(c3z))
print("  A · kesit İLK Osmanlı döneminden ÖNCE  (tek m:null penceresi yeter):", len(guvenli),
      "· ayrı kayıt:", len(set(t[1] for t in guvenli)))
print("  B · kaydın HİÇ Osmanlı dönemi YOK      (ufkun tamamı m:null):", len(osmanlisiz),
      "· ayrı kayıt:", len(set(t[1] for t in osmanlisiz)))
print("  C · kesitte yerleşim ZATEN Osmanlı     (merkez penceresi KAYNAK ister):", len(riskli),
      "· ayrı kayıt:", len(set(t[1] for t in riskli)))
print("\nC sınıfından ilk 20 (kaynak gerektirenler):")
for t in sorted(riskli)[:20]:
    print("   %s  %-24s -> %-18s %s / %s" % t)
