# -*- coding: utf-8 -*-
"""CEZAYİR–FAS — kaynağı açıldı · SINIR-KAFRIKA-0907

Bölgemin en uzun ikinci kenarı (1.550,9 km). Üç turdur `olculemedi`
kovasındaydı; bu turda 1845 antlaşmasının METNİ okundu ve kenar
`bulunamadi` kovasına geçti — yani ölçüldü ve C'ye GİRMEDİĞİ anlaşıldı.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json")

DAYANAK = (
    "1923'TE: Lalla Maghnia Antlaşması (18 Mart 1845) — sınırı yalnız "
    "Akdeniz'den güneye doğru sınırlı bir mesafede tespit etti; "
    "Sahra'yı AÇIKÇA delimitasyon dışında bıraktı. "
    "BUGÜN: Rabat Sözleşmesi (15 Haziran 1972) — 🟡 DEVRALDIM, metnini "
    "AÇMADIM.")

ALINTI = (
    "Madde 4: «Dans le Sahara (desert), il n'y a pas de limite "
    "territoriale a etablir entre les deux pays, puisque la terre ne se "
    "laboure pas et qu'elle sert seulement de pacage aux Arabes des deux "
    "Empires...»  ||  "
    "Madde 6: «Quant au pays qui est au sud des kessours des deux "
    "gouvernements, comme il n'y a pas d'eau, qu'il est inhabitable et "
    "que c'est le desert proprement dit, la delimitation en serait "
    "superflue.»")

KAYNAK = (
    "1845 Lalla Maghnia Antlaşması'nın Fransızca metni — 🟢 AÇIP OKUDUM "
    "(archive.org 'Lalla Maghnia' tam metni). "
    "⚠️ PROVENANS EKSİĞİ, GİZLENMİYOR: o nüshanın yayın künyesi (naşir, "
    "yıl, hangi neşirden alındığı) YOK. İçerik iki bağımsız kaynakla "
    "ÖRTÜŞÜYOR: (a) N. Lygeros, 'Remarks on the Lalla Marnia Treaty "
    "(18 March 1845)'; (b) 'The Politics of Boundaries in North and West "
    "Africa', Journal of Modern African Studies (Cambridge, hakemli) — "
    "Clive Parry'nin Consolidated Treaty Series'teki çevirisini aktarıyor. "
    "(b)'yi ÖZETİNDEN gördüm, makaleyi AÇMADIM.")

NOT = (
    "🔴 SONUÇ: NE'nin çizdiği 1.550,9 km'lik hat 1923'te YOKTU. "
    "1845 antlaşması sınırı Akdeniz'den güneye doğru yalnız sınırlı bir "
    "mesafede tespit etti (kaynaklar ~150-165 km diyor — ⚪ bu SAYIYI "
    "metinden doğrulamadım, yalnız özetlerden aldım); ötesi için Madde 4 "
    "ve Madde 6 delimitasyonu AÇIKÇA REDDEDİYOR. "
    "⇒ Mısır–Libya ile AYNI SINIF: çapa gününde bir çizgi değil, "
    "delimite edilmemiş bir bölge var. C'ye GİRMEZ. "
    "🟢 BİR ÇELİŞKİ ÇÖZÜLDÜ: kaynaklardan biri Sahra hükmünü 'Madde 4', "
    "öteki 'Madde 6' diyordu. Metin okununca İKİSİ DE DOĞRU çıktı — iki "
    "AYRI madde, iki AYRI kademe: Madde 4 Sahra'da sınır olmadığını, "
    "Madde 6 ksurların GÜNEYİ için delimitasyonun gereksiz olduğunu "
    "söylüyor. Taraf seçmeye gerek kalmadı; metni açmak yetti. "
    "🟡 AÇIK KALAN: bugünkü hattın dayanağı (15 Haziran 1972 Rabat "
    "Sözleşmesi) DEVRALINDI, metni açılmadı. Ve ARANIRKEN BİR TUZAK "
    "ÇIKTI: bir arama sonucu onu UNTS vol. 1035, I-15406 diye verdi; "
    "belge indirilip okundu ve MORİTANYA–FAS 14 Nisan 1976 sözleşmesi "
    "çıktı. "
    "⚪ VE BİR KALEM: kuzeydeki ~165 km 1845'te delimite EDİLMİŞTİ. "
    "Model kenar-parçası düzeyinde kayıt tutsaydı o parça 🟢 olabilirdi; "
    "bugünkü birim KENAR olduğu için bütün kenar `bulunamadi`.")


def main():
    d = json.load(io.open(YOL, encoding="utf-8"))
    bulundu = False
    for k in d["kenarlar"]:
        if (k["a"], k["b"]) == ("Algeria", "Morocco"):
            k["hal"] = "bulunamadi"
            k["nitelik_1923"] = "uluslararasi"
            k["degisti_1923_sonrasi"] = True
            k["dayanak"] = DAYANAK
            k["dayanak_t"] = "1845-03-18"
            k["kaynak"] = KAYNAK
            k["alinti"] = ALINTI
            k["not"] = NOT
            k.pop("_UYARI", None)
            bulundu = True
    if not bulundu:
        print("🔴 KENAR BULUNAMADI — hicbir sey yazilmadi")
        return 2
    sayac = {}
    for k in d["kenarlar"]:
        sayac[k["hal"]] = sayac.get(k["hal"], 0) + 1
    d["kova"] = sayac
    with io.open(YOL, "w", encoding="utf-8") as f:
        f.write(json.dumps(d, ensure_ascii=False, indent=1))
    print("Cezayir-Fas guncellendi.")
    print("kova: %s" % sayac)
    print("alintili (kaynagi acilmis) kenar: %d/25"
          % sum(1 for k in d["kenarlar"] if k.get("alinti")))
    return 0


if __name__ == "__main__":
    sys.exit(main())
