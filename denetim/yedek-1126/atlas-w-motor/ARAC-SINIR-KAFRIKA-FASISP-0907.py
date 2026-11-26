# -*- coding: utf-8 -*-
"""FAS–İSPANYA — kimlik ÖLÇÜLDÜ, dayanak DEVRALINDI · SINIR-KAFRIKA-0907

Kenar 21,5 km ve iki parça: Ceuta ve Melilla.
🟢 ÖLÇTÜM  : iki parçanın da 1923 kimliği, çevredeki atlas noktalarından
🟡 DEVRALDIM: sınırı tanımlayan sözleşmeler — arama özeti gördüm, kaynağı
             AÇAMADIM (IBRU PDF'i HTML döndü, Max Planck EPIL kapalı)
⇒ `hal` `olculemedi` KALIYOR. Kendi ölçütümü Eritre–Sudan'da savunduktan
   yarım saat sonra burada gevşetemem.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json")

DAYANAK = (
    "🟡 DEVRALDIM, DOĞRULANMADI: Ceuta'nın kara çevresi 1860 demarkasyonu, "
    "Melilla'nınki 1859 ve 1862 sözleşmeleriyle tespit edilmiş; ikisi de "
    "26 Nisan 1860 Vâdiârâs (Tetuan) Antlaşması bağlamında. Kaynağı "
    "AÇAMADIM.")

KAYNAK = (
    "🟡 İki iz var, İKİSİ DE AÇILAMADI: (a) 'Ceuta and Melilla', Max "
    "Planck Encyclopedia of Public International Law / Oxford Public "
    "International Law — kapalı erişim, yalnız arama özeti görüldü; "
    "(b) IBRU (Durham Üniversitesi) Boundary & Territory Briefing "
    "Vol.1 No.2 — PDF indirilemedi, sunucu HTML döndürdü (919 bayt). "
    "⇒ `§4`: bir arama motoru özeti bir KAYNAK DEĞİLDİR.")

NOT = (
    "🟢 KİMLİK ÖLÇÜLDÜ — ve ülke genelinden DEĞİL, kenarın ÇEVRESİNDEN. "
    "Sorgu günü 1923-10-28. Parça 1 (Ceuta, merkez 5,37°B/35,88°K): en "
    "yakın nokta Sebte 5,1 km `ispanya`, Fas yakası Tıtvân 34,0 km `fas`. "
    "Parça 2 (Melilla, 2,95°B/35,30°K): Melîle 0,9 km `ispanya`, Fas "
    "yakası Vecde 117,3 km `fas`. ⇒ `fas` ↔ `ispanya`, FARKLI ⇒ gerçek "
    "bir C kenarı, `ayni-kimlik` DEĞİL. "
    "Bu ölçüm ülke geneline (yetkili tablo: Fas→`fas`, İspanya→`ispanya`) "
    "eklenen ikinci bir ayak: ülke geneli bir kenarın iki yakası hakkında "
    "hüküm vermez. "
    "🔴 VE BİR ANOMALİ ÖLÇÜLDÜ — `rif-cumhuriyeti` ATLAS PENCERESİNDE "
    "HİÇ BOYANMIYOR: künye penceresi 1921-09-18 → 1923-10-29, ama veride "
    "o kimliği kullanan TEK dönem `Şefşâven s: 1924-11-15 → 1926-05-27`. "
    "İki aralık HİÇ ÖRTÜŞMÜYOR — veri, künye kapandıktan 383 gün SONRA "
    "başlıyor ve atlasın ufkunu AŞIYOR. ⇒ 1923-10-28'de Şefşâven `fas`, "
    "ve Rif Cumhuriyeti atlasın penceresi içinde bir kez bile "
    "boyanmıyor. (KIMLIK-1923-0907 Şefşâven'in ufku aşan kaydını M-3205 "
    "④'te bildirmişti; buradaki ek şey künye ile verinin ÖRTÜŞMEMESİ ve "
    "sonucun 'kimlik hiç kullanılmıyor' olması.) "
    "⚪ Bunun bir veri kusuru mu bilinçli bir tercih mi olduğunu ÖLÇMEDİM "
    "ve iş açmadım — benim kalemim değil.")


def main():
    d = json.load(io.open(YOL, encoding="utf-8"))
    n = 0
    for k in d["kenarlar"]:
        if (k["a"], k["b"]) == ("Morocco", "Spain"):
            k["dayanak"] = DAYANAK
            k["dayanak_t"] = None
            k["kaynak"] = KAYNAK
            k["not"] = NOT
            k["nitelik_1923"] = "uluslararasi"
            k["kimlik_1923_a_yerel"] = "fas (Titvan 34,0 km · 1923-10-28)"
            k["kimlik_1923_b_yerel"] = "ispanya (Sebte 5,1 km · Melile 0,9 km)"
            k["dayanak_1923"] = "devraldim-acilamadi"
            # sureklilik: `okumadim` DEGIL artik — arandi, kaynak ACILAMADI
            k["sureklilik"] = "olculemedi"
            k.pop("_UYARI", None)
            n += 1
    if not n:
        print("🔴 KENAR BULUNAMADI")
        return 2
    sd, ss = {}, {}
    for k in d["kenarlar"]:
        sd[k.get("dayanak_1923")] = sd.get(k.get("dayanak_1923"), 0) + 1
        ss[k.get("sureklilik")] = ss.get(k.get("sureklilik"), 0) + 1
    print("Fas-Ispanya guncellendi (hal DEGISMEDI: olculemedi).")
    print("dayanak_1923: %s" % sd)
    print("sureklilik  : %s" % ss)
    with io.open(YOL, "w", encoding="utf-8") as f:
        f.write(json.dumps(d, ensure_ascii=False, indent=1))
    return 0


if __name__ == "__main__":
    sys.exit(main())
