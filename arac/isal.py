# -*- coding: utf-8 -*-
"""isal.py — BOŞTAKİ BİR OTURUM KENDİ İŞİNİ ALIR.

🔴 DOĞURAN VAKA — Emre, 16 Ağustos 2026:
    "Gerizekâlı yöntemin yüzünden ortalık karıştı."

Ve haklıydı. Koordinatörün yöntemi şuydu: her oturuma AYRI bir satır
ver, doğru pencereye yapıştır. Ama Emre pencereleri **ayırt edemiyor** —
bunu zaten söylemişti:
    "Senin gördüğün isimler ile benim gördüğüm isimler aynı değil,
     nereden bulacağım senin dediğin isimleri ben?"

⇒ Aynı `MOTOR-EPOK.md` satırı ÜÇ pencereye yapıştırıldı. Üç oturum da
`§7`ye uyup DURDU ve sordu — veri kaybı olmadı ama **üç tur yandı.**

📌 KUSUR OTURUMLARDA DEĞİL, ATAMA BİÇİMİNDEYDİ: koordinatör *"hangi
pencere hangisi"* bilgisini kullanıcıdan istiyordu, oysa o bilgi
kullanıcıda YOK. Bir yöntem, var olmayan bir bilgiye dayanamaz.

════════════════════════════════════════════════════════════════════════
KULLANIM — HER PENCEREYE AYNI SATIR. Ayırt etmek gerekmez.

    py arac/isal.py

Betik: boştaki görevleri sayar, birini seçer, tahtaya SAHİPLİK İLANI
yazar ve şartname yolunu basar. Oturum o dosyayı okur ve işe başlar.

    py arac/isal.py --liste     yalnız göster, ALMA
════════════════════════════════════════════════════════════════════════

⚠️ YARIŞ DURUMU — ve niçin KAPATILMIYOR, GÖRÜNÜR KILINIYOR:
İki oturum aynı anda koşarsa ikisi de aynı işi seçebilir. Tahta bir
JSON dosyası; süreçler arası kilit taşımıyor. Çare kilit değil ÖLÇÜM:
sahiplik ilanı tahtaya yazılır ve M-numarası SIRA verir — **küçük numara
kazanır.** Kaybeden `--liste` ile yeniden bakar ve başka iş alır.
📌 `§11`: *"ölçülemedi ≠ temiz."* Yarışı yok saymak yerine hakemini
yazıyorum; hakem zaten elimizde ve adı M-numarasıdır.
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OTURUMLAR = os.path.join(KOK, "oturumlar")
TAHTA = os.path.join(OTURUMLAR, "tahta.json")

# 🔴 SIRA KOORDİNATÖRÜNDÜR — betik kendi önceliğini UYDURMAZ.
# Bu liste elle yazılır ve niçin bu sırada olduğu YAZILIR; bir betiğin
# sessizce seçtiği öncelik, kimsenin tartışamadığı önceliktir.
KUYRUK = [
    ("VERI-ZAMAN.md",
     "62 hayalet yerleşim + 120 borç + kademe/kd: — DARBOĞAZ: "
     "denetle.py bugün BU YÜZDEN kırmızı"),
    ("NOKTA-OKYANUSYA.md",
     "Okyanusya·Avustralya·YZ — Emre ADIYLA sordu, bugün 2 nokta var"),
    ("NOKTA-AFRIKA-IC.md",
     "Batı Afrika içinde 1 nokta, 1281'de SIFIR — Mali yükseliş devri"),
    ("NOKTA-SIBIRYA-2.md",
     "Ural·Yakutistan·Kamçatka — Yakutistan'da 1281'de SIFIR"),
    ("MOTOR-EPOK.md",
     "eğim çarpanı + varlık epoku — arac/uret_petek.py TEK sahipli"),
    ("RENK-AFRIKA.md",
     "10 renksiz kimlik (mali·songhay·oyo·dahomey·sokoto…) — "
     "arac/renkler.py; nokta partileri BAĞLAMADAN önce gerekli"),
    # 🔴 SIRA: KRONOLOJİ en üstte değil ama EN ACİL — yayın kapısını
    # açan TEK iş o. Kuyruk sırası "önce gelen alır" olduğu için üste
    # koymuyorum; boşta kalan İLK oturum zaten onu alacak.
    ("KRONOLOJI-KIRILMA.md",
     "🔴 YAYINI AÇAN TEK İŞ — Değişmez 2'de 4 açık kırılma, madde "
     "bekliyor. Küçük ve kapalı iş. Sonnet yeter."),
    ("KORIDOR-HALKA2B.md",
     "altyapı ⑤ — İran·Rusya·Lehistan·Venedik kolları; Avusturya kolu "
     "yazıldı, dördü kaldı. Opus."),
    # 🔴 KADEME — altyapı ② ve ④. TEK İŞ DEĞİL, ÜÇ BÖLGE.
    # 1586 nokta kademesiz ve türetme kuyusu KURU ⇒ buradan sonrası
    # ARAŞTIRMA. Bir oturumun bitirebileceği hacim değil; üçe böldüm ve
    # bölme ölçütü TDV KAPSAMASI (en verimliden en zora):
    #   Anadolu-Rumeli  TDV en güçlü burada   ⇒ en çok kayıt buradan çıkar
    #   Arap-İran       %86-100 kapsama
    #   Kalan dünya     kapsama düşük ⇒ `bulunamadı` ÇOK olacak, ve bu
    #                   bir başarısızlık DEĞİL
    # Üçü de `KADEME-KD.md`yi okur; ince dosyalar yalnız KUTU ve DOSYA
    # ADI belirler — kural kopyalanmadı (kopyalanan kural bayatlar).
    ("KADEME-ANADOLU.md",
     "altyapı ②④ — Anadolu+Rumeli kademe/kd: (TDV en güçlü burada). Opus."),
    ("KADEME-ARAP-IRAN.md",
     "altyapı ②④ — Arap dünyası+İran+Kafkasya kademe/kd:. Opus."),
    ("KADEME-DUNYA.md",
     "altyapı ②④ — kalan dünya kademe/kd:; `bulunamadı` çok olacak. Opus."),
    # 🔴 İKİ AĞIR BÖLGE AYRILDI — ölçüm, tahmin değil (M-0297):
    #   G.+D. ASYA 536 · AVRUPA 393 · AFRİKA 337 · ORTA ASYA 311 · ARAP 203
    # Üçlü bölmemi TDV KAPSAMASINA göre yapmıştım; iş hacmini belirleyen
    # NOKTA SAYISIYMIŞ ve "KALAN DÜNYA" tek başına 1300+ nokta taşıyordu.
    # 📌 İki ölçüt aynı bölmeyi vermiyor ve ben yanlış olanı seçmişim.
    ("KADEME-ASYA.md",
     "altyapı ②④ — G.+D.+GD Asya kademe/kd:; 536 nokta, EN BÜYÜK küme. Opus."),
    ("KADEME-AVRUPA.md",
     "altyapı ②④ — Batı+Orta Avrupa kademe/kd:; 393 nokta, TDV %0. Opus."),
    # 🟢 İKİSİ DE KİLİDİN DIŞINDA — koşu koşarken alınabilir:
    # `index.html`/`js/app.js` ne GIRDI_DOSYALARI'nda ne motor_izi
    # üçlüsünde; yeni nokta dosyası da bağlanmadığı için motora girmez.
    ("ARAYUZ-KORIDOR.md",
     "altyapı ⑤'i EKRANA getir — koridor verisi HAZIR ama app.js "
     "ÇİZMİYOR (§40: veri doğru, kullanıcı görmüyor). Sonnet yeter."),
    ("NOKTA-AMERIKA.md",
     "K/O/G Amerika — Emre ADIYLA sordu; 139 nokta var, PENCEREDE 0. Opus."),
]

# Bir görevin ALINMIŞ sayılması için tahtada aranan desen. Sahiplik
# ilanı `isal.py` tarafından yazılırsa bu önek konur; elle yazılmış
# "AÇILDIM ... bende" beyanları da sayılır ki eski usul kayıtlar düşmesin.
ONEK = "SAHIPLIK:"

# 🔴🔴 SERBEST METİNDEN NİYET OKUMAYI BIRAKTIM — üç kez yanlış çıktı.
#   ① "bahsetmek" ile "sahiplenmek" ayırt edilmiyordu
#   ② düzeltildi; bu sefer "bırakmak" da sahiplik sayıldı
#   ③ düzeltildi; itiraz mesajı YİNE sahiplik sayıldı
# Her düzeltme bir yönü görüyor, tersini görmüyordu. Ve en acısı: alet,
# KENDİSİNE YAPILAN İTİRAZI sahiplik diye kaydediyordu — itiraz ettikçe
# kilit sıkılaşıyordu.
#
# 📌 Bu projenin kendi dersi: *"kendi yazdığın ayrıştırıcı, var olan bir
# ayrıştırıcıdan HER ZAMAN kötüdür"* (girdi.py tek tırnak · bagla.py CRLF ·
# regex yerine import). Burada ayrıştırılan şey bir DİL değil bir NİYET,
# ve niyetin ayrıştırıcısı YOK.
#
# ⇒ ÇARE: sahiplik artık YALNIZ İKİ YOLDAN kurulur:
#   ① `isal.py`nin kendi yazdığı `SAHIPLIK: <dosya>` satırı (makine)
#   ② aşağıdaki DEFTER — koordinatörün HÜKMÜ (insan)
# Defter, M-0332 mutabakatında ilan edilmiş ve itiraz gelmemiş hâldir.
# Serbest metin ARTIK OKUNMUYOR.
DEFTER = {
    "NOKTA-SIBIRYA-2.md":   "M-0117",
    "MOTOR-EPOK.md":        "M-0124",
    "NOKTA-AFRIKA-IC.md":   "M-0127",
    "NOKTA-OKYANUSYA.md":   "M-0128",
    "VERI-ZAMAN.md":        "M-0144",
    "RENK-AFRIKA.md":       "M-0148",
    "KRONOLOJI-KIRILMA.md": "M-0232",
    "KORIDOR-HALKA2B.md":   "M-0233",
    "KADEME-ANADOLU.md":    "M-0250",
    "KADEME-ARAP-IRAN.md":  "M-0251",
    "KADEME-ASYA.md":       "M-0305",
    "KADEME-AVRUPA.md":     "M-0307",
    "ARAYUZ-KORIDOR.md":    "M-0335",
    "NOKTA-AMERIKA.md":     "M-0336",
    # 🔴 `KADEME-DUNYA.md` KASTEN YOK — hiç alınmadı. `VERI-ZAMAN` onu
    # M-0339'da açıkça reddetti: *"ALMADIM, İSTEMEDİM, SERBEST BIRAK."*
    # Aletin onu üç kez sahipli göstermesi ölçüt kusuruydu, hüküm değil.
}


def _tahta():
    try:
        d = json.load(io.open(TAHTA, encoding="utf-8"))
    except Exception:
        return []
    return d if isinstance(d, list) else (d.get("mesajlar") or [])


def _alinmis():
    """{dosya: [(M-no, kimden)]} — YALNIZ İKİ KAYNAK: DEFTER ve ONEK.

    Serbest metin ARTIK OKUNMUYOR; gerekçesi `DEFTER`in üstünde yazılı.
    """
    out = {}
    for _d, _no in DEFTER.items():
        out.setdefault(_d, []).append((_no, "defter"))
    for m in _tahta():
        kimden = (m.get("kimden") or "").strip()
        if kimden.upper().startswith("KOORDINATOR"):
            continue                    # koordinatörün ATAMASI sahiplik DEĞİL
        t = m.get("mesaj") or ""
        for _d, _ in KUYRUK:
            if ("%s %s" % (ONEK, _d)) in t:
                out.setdefault(_d, []).append((m.get("no") or "", kimden))
        continue                        # ⬇ eski serbest-metin dalı ÖLÜ
        # ── ESKİ DAL — kasten bırakıldı, SİLİNMEDİ ────────────────────
        # Üç kez yamandı ve üçünde de bir yönü görüp tersini görmedi.
        # Silmek yerine ölü bırakıyorum ki bir sonraki oturum aynı yolu
        # yeniden keşfetmesin: burada denendi, ÜÇ KEZ, ve olmuyor.
        for dosya, _ in KUYRUK:
            if dosya not in t:
                continue
            # 🔴 ÖLÇÜT SIKILAŞTIRILDI — 16 Ağustos, `VERI-ZAMAN` bildirdi.
            # ESKİ HÂLİ: metinde dosya adı GEÇİYORSA ve metnin HERHANGİ
            # bir yerinde "BENDE/AÇILDIM/sahibiyim" varsa sahiplik saydı.
            # ⇒ Bir oturum `KADEME-DUNYA.md`den yalnız BAHSETTİ (kuyruk
            # dökümü yapıyordu) ve mesajın başka bir yerinde "AÇILDIM"
            # geçtiği için **almadığı bir iş adına yazıldı.**
            # 📌 Bu, aynı betiğin ÜÇÜNCÜ ölçüt kusuru ve hepsi aynı
            # aileden: *ölçüm doğru, ÖLÇÜT gevşek.* "Bahsetmek" ile
            # "sahiplenmek" ayrı fiiller ve alet ikisini ayırmıyordu.
            #
            # YENİ ÖLÇÜT — ikisinden biri:
            #   ① `isal.py`nin kendi öneki (SAHIPLIK: <dosya>) — kesin
            #   ② dosya adı ile sahiplenme kelimesi AYNI CÜMLEDE
            #      (80 karakterlik pencere) — "X.md BENDE" deseni
            if ("%s %s" % (ONEK, dosya)) in t:
                out.setdefault(dosya, []).append((m.get("no") or "", kimden))
                continue
            # 🔴 ÜÇÜNCÜ KUSUR — İKİNCİ DÜZELTMEDEN SONRA ÇIKTI:
            # sahiplenme kelimelerini tanıyordu ama **BIRAKMA** kelimelerini
            # tanımıyordu. Ve bir işi BIRAKAN mesaj da dosya adını anar —
            # hatta daha fazla anar. `VERI-ZAMAN` *"ALMADIM, İSTEMEDİM,
            # SERBEST BIRAK"* yazdı ve alet onu **ikinci kez sahiplik
            # saydı.** ⇒ Alet, kendisine yapılan itirazı sahiplik olarak
            # kaydediyordu; itiraz ettikçe kilit sıkılaşıyordu.
            # 📌 Aynı ailenin üçüncüsü, ve her seferinde ölçüt bir yönü
            # görüyor, tersini görmüyor. Fiil çiftleri BİRLİKTE tanınmalı:
            # al ↔ bırak · aç ↔ kapat · başla ↔ bitir.
            for mm in re.finditer(re.escape(dosya), t):
                cevre = t[max(0, mm.start() - 120): mm.end() + 120]
                if re.search(r"(ALMADIM|almadım|İSTEMEDİM|ISTEMEDIM|"
                             r"SERBEST BIRAK|BIRAKIYORUM|bırakıyorum|"
                             r"GERİ ÇEKİYORUM|geri çekiyorum|DEĞİL)", cevre):
                    continue                      # BIRAKMA — sahiplik DEĞİL
                if re.search(r"(BENDE|bende|sahibiyim|ALIYORUM|aliyorum|"
                             r"ustlendim|üstlendim)", cevre):
                    out.setdefault(dosya, []).append(
                        (m.get("no") or "", kimden))
                    break
    return out


def _kimlik():
    """Oturumun kendi kimliği — scratchpad yolundan. Bulunamazsa boş."""
    for k in ("CLAUDE_SESSION_ID", "SESSION_ID"):
        if os.environ.get(k):
            return os.environ[k]
    return ""


def main(argv):
    alinmis = _alinmis()
    # ⚠️ Şartnamesi DİSKTE OLMAYAN iş kuyruğa girmez. Bir oturumu var
    # olmayan bir dosyaya göndermek, ona hiç iş vermemekten kötüdür:
    # oturum dosyayı arar, bulamaz, ve kendi başına bir şey uydurur.
    kuyruk = [(d, n) for d, n in KUYRUK
              if os.path.exists(os.path.join(OTURUMLAR, d))]
    bos = [(d, n) for d, n in kuyruk if d not in alinmis]

    print()
    print("GÖREV KUYRUĞU — tahtadan ölçüldü")
    print("=" * 68)
    for dosya, niye in kuyruk:
        s = alinmis.get(dosya)
        if s:
            kim = s[0][1][:24]
            print("  🔴 ALINMIŞ  %-22s %s (%s)" % (dosya, kim, s[0][0]))
            if len(s) > 1:
                print("     ⚠️ %d ayrı oturum sahiplenmiş — EN KÜÇÜK M-NO KAZANIR: %s"
                      % (len(s), min(x[0] for x in s)))
        else:
            print("  🟢 BOŞTA    %-22s %s" % (dosya, niye[:34]))
    print("=" * 68)

    if "--liste" in argv:
        print("(--liste: yalnız gösterildi, iş ALINMADI)")
        return 0

    if not bos:
        print()
        print("BOŞ GÖREV YOK. Bütün kuyruk sahipli.")
        print("⚠️ Bu 'yapacak iş yok' DEMEK DEĞİL — bu betiğin kuyruğu")
        print("   bitti demek. Koordinatöre `*kii` yaz.")
        return 0

    dosya, niye = bos[0]
    yol = "oturumlar/" + dosya
    kimlik = _kimlik()
    metin = (
        "%s %s\n\n"
        "Bu görevi ALIYORUM. `py arac/isal.py` ile seçildi — kuyruktaki\n"
        "ilk BOŞ iş buydu.\n\n"
        "  dosyam    : %s\n"
        "  kimliğim  : %s\n"
        "  gerekçe   : %s\n\n"
        "⚠️ Başka bir oturum da aynı işi ilan ettiyse EN KÜÇÜK M-NUMARASI\n"
        "kazanır. Benimki büyükse DURURUM ve `py arac/isal.py` ile başka\n"
        "iş alırım — koordinatöre sormadan, çünkü hakem numaranın kendisi.\n"
        % (ONEK, dosya, yol, kimlik or "(ölçülemedi)", niye))

    gecici = os.path.join(KOK, "oturumlar", "_isal_mesaj.txt")
    io.open(gecici, "w", encoding="utf-8").write(metin)
    try:
        subprocess.run(
            # 🔴 İLK SÜRÜM BURAYA "(isal)" YAZIYORDU ve bu bir kusurdu:
            # sahiplik ilanı KİMİN aldığını taşımıyordu. İki oturum aynı
            # işi aldı, ikisi de M-0145'i gösterdi, ve hakem kuralı
            # ("en küçük M-no") ikisini AYIRT EDEMEDİ — çünkü tek bir
            # ilan vardı ve sahibi yoktu.
            # ⇒ Artık iş adının kendisi imza: her oturum kendi aldığı
            # işin adıyla imzalanır, yani ilan SAHİPSİZ olamaz.
            # 📌 Bir hakem kuralı, hakemlik yapacağı kayıtta TARAFLARIN
            # ADI yoksa çalışmaz. Kuralı yazdım, kaydı eksik bıraktım.
            [sys.executable, os.path.join(KOK, "arac", "tahta.py"), "yaz",
             "--kim", dosya.replace(".md", ""),
             "--kime", "KOORDINATOR", "--cins", "RAPOR",
             "--mesaj-dosya", gecici, "--dayanak", "isal.py kuyruk secimi"],
            timeout=180)
    except Exception as e:
        print("⚠️ tahtaya yazılamadı: %s — YİNE DE işe başla, ama sahipliğini"
              " ELLE ilan et." % e)
    finally:
        try:
            os.remove(gecici)
        except Exception:
            pass

    print()
    print("🟢 SANA VERİLEN GÖREV: %s" % yol)
    print()
    print("ŞİMDİ ŞUNU YAP:")
    print("  1. %s dosyasını BAŞTAN SONA oku — açılış prompt'un odur." % yol)
    print("  2. Nöbetçini Monitor aracıyla kur (şartnamede yazılı).")
    print("  3. Tahtaya açılış raporunu yaz: hangi dosyalar sende.")
    print("  4. Şartnamedeki HER SAYIYI kendin doğrula (B10).")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
