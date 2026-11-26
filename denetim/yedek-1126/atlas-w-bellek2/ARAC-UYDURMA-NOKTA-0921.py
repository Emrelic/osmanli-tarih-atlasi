# -*- coding: utf-8 -*-
"""YERLEŞİM OLMAYAN NOKTALAR — hangisi beyan, hangisi kaynaksız?

Emre'nin hükmü (21 Eylül 2026): *"gerçek yerleşimler kalsın uydurma noktalar
silinsin. bu çölde eğer bir şehir bir yerleşim yeri var ise oraya nokta
koyabilirsin. yerleşim yeri yok ise koymamalısın."*

🔴 BU ALETİN İLK SÜRÜMÜ YANILDI VE ÇÜRÜTÜLDÜ — kayıt burada duruyor çünkü
   yanılgının kendisi derstir:
   İlk ölçüt ADIN BİÇİMİYDİ: "Beyan G10.5 B52.5" ve "Büyük Victoria Çölü 5"
   gibi adlar *"bir insan bu adı koymaz, demek üretilmiş"* diye 67 kaydı
   SİLİNECEK saydı. Kayıtlar açılınca görüldü ki tam TERSİ:
     { ad:"Beyan G10.5 B52.5", kasitli_bosluk:true, bos:"kabile", s:[],
       neden:"HSAI c.3 'TRIBES OF UPPER XINGU' (Lévi-Strauss) … von den
              Steinen 1884-87 … merkezî devlet TARİF EDİLMİYOR" }
   Bunlar toprağı DOLDURAN noktalar değil, toprağı BOŞ İLAN EDEN kayıtlardır;
   `s:` alanları boş ve her birinin arkasında akademik kaynak var (Handbook
   of South American Indians · AIATSIS). Silinseler atlas o toprağı boş
   bırakmayı SÜRDÜRÜRDÜ ama NİÇİN boş bıraktığını unuturdu.
   ⇒ DERS: bir kaydın uydurma olup olmadığı ADINDAN okunmaz, BEYANINDAN ve
     KAYNAĞINDAN okunur. Ad biçimi olsa olsa zayıf bir işarettir.

BUGÜNKÜ ÖLÇÜT (güçlüden zayıfa):
  ① `kasitli_bosluk:true` → BEYAN. Silinmez. Toprağı boş ilan eden kayıt.
  ② `neden:` / `kaynak:`  → GEREKÇELİ. Silinmez; gerekçesi okunup karar verilir.
  ③ hiçbiri yok          → ŞÜPHELİ. Tek tek bakılacak liste — ve "şüpheli"
                           "uydurma" DEMEK DEĞİLDİR: listede Dâhile, Hârice,
                           Ferâfire, Bahriye gibi GERÇEK vaha şehirleri var;
                           onların kusuru `tur:"bolge"` yazılmış olmaları.

Koşu:  py denetim/ARAC-UYDURMA-NOKTA-0921.py
"""
import os
import sys
from collections import Counter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

YERLESIM_TUR = {"sehir", "kasaba", "kale", "liman", "koy", "vaha"}


def main():
    Y = girdi.yukle(sessiz=True)
    yerlesim = [y for y in Y if (y.get("tur") or "?") in YERLESIM_TUR]
    oteki = [y for y in Y if (y.get("tur") or "?") not in YERLESIM_TUR]
    print(f"toplam nokta {len(Y):,}")
    print(f"① gerçek yerleşim (tur ∈ {sorted(YERLESIM_TUR)}): {len(yerlesim):,}")
    for t, n in Counter(y.get("tur") for y in yerlesim).most_common():
        print(f"     {n:5}  {t}")

    beyan = [y for y in oteki if y.get("kasitli_bosluk")]
    gerekceli = [y for y in oteki if not y.get("kasitli_bosluk")
                 and (y.get("neden") or y.get("kaynak"))]
    supheli = [y for y in oteki if not y.get("kasitli_bosluk")
               and not y.get("neden") and not y.get("kaynak")]
    print(f"\n② BEYAN — `kasitli_bosluk:true`: {len(beyan)}  (SİLİNMEZ)")
    for d, n in Counter(os.path.basename(y.get("_kaynak", "?"))
                        for y in beyan).most_common(6):
        print(f"     {n:5}  {d}")
    print(f"\n③ GEREKÇELİ — `neden:`/`kaynak:` var: {len(gerekceli)}  (SİLİNMEZ)")
    print(f"\n④ ŞÜPHELİ — üç işaretin hiçbiri yok: {len(supheli)}")
    print("   ⚠️ 'şüpheli' ≠ 'uydurma' — listede gerçek vaha şehirleri var.")
    for d, n in Counter(os.path.basename(y.get("_kaynak", "?"))
                        for y in supheli).most_common():
        print(f"     {n:5}  {d}")
    print("\n   ── adlar ──")
    for y in sorted(supheli, key=lambda t: t.get("ad", "")):
        print(f"     {y.get('ad',''):<48} {y.get('lon',0):8.2f},"
              f"{y.get('lat',0):7.2f}  {'s VAR' if y.get('s') else 's yok'}")
    print(f"\nÖZET: yerleşim {len(yerlesim):,} · beyan {len(beyan)} · "
          f"gerekçeli {len(gerekceli)} · şüpheli {len(supheli)}")
    print("🔴 SİLİNECEK KAYIT: bu ölçütle SIFIR. Emre'nin kastettiği "
          "'boşluğa konmuş anlamsız nokta' sınıfı veride BULUNAMADI; "
          "çöldeki dolgunun kaynağı veri değil MOTORUN peteği genişletmesidir.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
