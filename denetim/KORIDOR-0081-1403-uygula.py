"""KORIDOR-0081 ③ — 1403 Gelibolu antlaşmasının Karadeniz kıyısı (koordinatör koşturur).

KAYNAK (hepsi TDV, adıyla):
  fetret-devri: "Gelibolu Antlaşması'nı imzaladı (Şubat 1403). Buna göre Süleyman
      Çelebi Kartal, Pendik ve Gebze ile bazı adaları ve Misivri'ye kadar Karadeniz
      sahillerini, Rumeli'de Selânik ve Tesalya'yı Bizanslılar'a terkediyordu."  — AY
  suleyman-celebi-emir: "Marmara denizinden Karadeniz'deki Mesembria'ya (Misivri)
      uzanan sahil toprakları Bizanslılar'a terkedildi."
  murad-ii: "barış antlaşması imzaladı (21 Rebîülevvel 827 / 22 Şubat 1424).
      İmparator … Silivri ve Terkos hisarları hariç Marmara, Ege ve Karadeniz
      kıyılarında 1402'den sonra aldığı yerleri geri vermeyi kabul etti."  — GÜN

ATLASTA O KIYIDA NOKTA yalnız üç: İğneada · Rezve · Ahtapolu (Boğaz ile Misivri
arası; Kıyıköy/Midye/Süzebolu/Ahyolu/Misivri'de nokta YOK). Değişiklik:
  s: suleyman-celebi 1402-07-28→B  +  bizans B→1424-02-22  (ara Süleyman/Musa
     dönemleri silinir) · d: 1413-07-05→…  ⇒  1424-02-22→…
  1424-02-22 maddesi (olaylar_p0058.js) ve 1403 maddesi (olaylar_ek.js) METNİNE
  kıyı hükmü eklenir; madde tarihlerine DOKUNULMAZ.

⚠️ ÖLÇÜLEMEDİ: TDV bizans "bu durum 1411'de Mûsâ Çelebi'nin … iktidarı ele
geçirmesiyle bozuldu" — Musa'nın 1411-1413'te kıyıyı fiilen alıp almadığı kasaba
düzeyinde yazılı değil. 1424 hükmü "1402'den sonra aldığı yerleri geri vermeyi"
dediği için bizans penceresi kesintisiz yazıldı — ÇIKARIM.
⚠️ KAPSAM DIŞI BIRAKILDI: Kartal · Pendik · Gebze (fetret-devri adıyla sayıyor).
Atlasta Gebze var (İsa/Mehmed/Süleyman Çelebi gösteriyor); başlangıcı kaynaklı, ama
1424'te döndüğü "Marmara kıyılarındaki yerler" genellemesinden ÇIKARIM ⇒ ayrı karar.

🔴 BAŞLANGIÇ GÜNÜ (B) — koordinatör hükmü, --baslangic ZORUNLU:
  1403-02-01  TDV fetret-devri "Şubat 1403" (AY hassasiyeti, kaynak alanında yazılı).
              ⚠️ Değişmez 2: kıyı kırılması ±30 günde madde bulamaz — iki 1403
              maddesi Haziran'da (olaylar_ek 1403-06-01 · olaylar_ek3 1403-06-15).
              ekokuma_antlasma4.js ic_not'u bunu ZATEN bildirmiş: "iki maddenin tek
              olay olduğu ve gününün Şubat olması gerektiği". Madde taşımak
              etiket_yama.js ("t": "1403-06-01") ve ekokuma_antlasma4.js
              (olay:"1403-06-01|Selanik") bağlarını kırar — o iş bu betiğin DIŞINDA.
  1403-06-01  mevcut madde/Selanik günü — Değişmez 2 tutar, ama gün kaynaksız
              ve TDV'nin Şubat'ıyla ÇELİŞİYOR (D207).
  Önerim: 1403-02-01 — ve madde taşıma işini maddelerin sahibine ver.

Kullanım: py denetim/KORIDOR-0081-1403-uygula.py --baslangic 1403-02-01 [--uygula]
"""
import sys

sys.stdout.reconfigure(encoding="utf-8")
arg = sys.argv[1:]
YAZ = "--uygula" in arg
if "--baslangic" not in arg:
    raise SystemExit("DUR: --baslangic 1403-02-01 | 1403-06-01 zorunlu (docstring'e bak)")
B = arg[arg.index("--baslangic") + 1]
if B not in ("1403-02-01", "1403-06-01"):
    raise SystemExit("DUR: --baslangic yalnız 1403-02-01 ya da 1403-06-01")

KAY = ("TDV fetret-devri: Gelibolu Antlaşması (Şubat 1403 — AY) 'Misivri’ye kadar Karadeniz "
       "sahillerini … Bizanslılar’a terkediyordu' · TDV suleyman-celebi-emir aynı hüküm · "
       "TDV murad-ii: 22 Şubat 1424 antlaşmasıyla 'Silivri ve Terkos hisarları hariç … "
       "Karadeniz kıyılarında 1402’den sonra aldığı yerleri geri vermeyi kabul etti' · "
       + ("başlangıç günü MADDE günü (kaynaksız) · " if B == "1403-06-01" else "")
       + "Musa 1411-13 ara dönemi kasaba düzeyinde ÖLÇÜLEMEDİ · KORIDOR-0081")
ESKI_S = ('{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",'
          'd:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},'
          '{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},')
YENI_S = (f'{{f:"1402-07-28",t:"{B}",d:"suleyman-celebi"}},'
          f'{{f:"{B}",t:"1424-02-22",d:"bizans",kaynak:"{KAY}"}},')
ADLAR = ["Ahtapolu (Ahtopol)", "Rezve (Rezovo)", "İğneada"]


def degistir(metin, eski, yeni, nerede):
    if metin.count(eski) != 1:
        raise SystemExit(f"DUR: {nerede}: {metin.count(eski)} eşleşme (beklenen 1): {eski[:70]}")
    return metin.replace(eski, yeni)


def kiyi(metin):
    for ad in ADLAR:
        bas = metin.find('{ ad:"' + ad + '"')
        if bas < 0:
            raise SystemExit(f"DUR: {ad} bulunamadı")
        son = metin.find("\n{ ad:", bas + 1)
        son = son if son > 0 else len(metin)
        g = metin[bas:son]
        g = degistir(g, ESKI_S, YENI_S, ad + " s:")
        g = degistir(g, '{f:"1413-07-05",t:', '{f:"1424-02-22",t:', ad + " d:")
        metin = metin[:bas] + g + metin[son:]
        print(f"  {ad}: bizans {B}→1424-02-22 · Osmanlı 1424-02-22'den")
    return metin


def madde_1424(metin):
    metin = degistir(
        metin,
        "Bizans bu antlaşmayla yeniden Osmanlı'ya haraç ödemeyi kabul etti; ",
        "Bizans bu antlaşmayla yeniden Osmanlı'ya haraç ödemeyi kabul etti ve Silivri "
        "ile Terkos hisarları hariç Marmara, Ege ve Karadeniz kıyılarında 1402'den "
        "sonra aldığı yerleri geri verdi — haritada Karadeniz kıyısındaki İğneada, "
        "Rezve ve Ahtapolu bu tarihte Osmanlı'ya döner; ",
        "olaylar_p0058 1424 maddesi")
    print("  1424 maddesi: kıyı iadesi hükmü eklendi")
    return metin


def madde_1403(metin):
    metin = degistir(
        metin,
        "Selanik ile bazı kıyı bölgelerini iade etti; ",
        "Selanik'i ve Misivri'ye kadar Karadeniz sahillerini Bizans'a terk etti (TDV "
        "fetret-devri: Gelibolu Antlaşması, Şubat 1403) — haritada İğneada, Rezve ve "
        "Ahtapolu Bizans'a geçer; ",
        "olaylar_ek 1403 maddesi")
    print("  1403 maddesi: kıyı hükmü eklendi (t: DEĞİŞMEDİ)")
    return metin


def main():
    for yol, is_ in (("data/yerlesimler_ek24.js", kiyi), ("data/olaylar_p0058.js", madde_1424),
                     ("data/olaylar_ek.js", madde_1403)):
        eski = open(yol, encoding="utf-8").read()
        print(yol)
        yeni = is_(eski)
        if YAZ:
            with open(yol, "w", encoding="utf-8", newline="") as f:
                f.write(yeni)
    print("YAZILDI" if YAZ else "KURU KOŞU — --uygula ile yaz")


if __name__ == "__main__":
    main()
