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
]

# Bir görevin ALINMIŞ sayılması için tahtada aranan desen. Sahiplik
# ilanı `isal.py` tarafından yazılırsa bu önek konur; elle yazılmış
# "AÇILDIM ... bende" beyanları da sayılır ki eski usul kayıtlar düşmesin.
ONEK = "SAHIPLIK:"


def _tahta():
    try:
        d = json.load(io.open(TAHTA, encoding="utf-8"))
    except Exception:
        return []
    return d if isinstance(d, list) else (d.get("mesajlar") or [])


def _alinmis():
    """{dosya_adi: [(M-no, kimden), ...]} — tahtadan ÖLÇÜLÜR, varsayılmaz."""
    out = {}
    for m in _tahta():
        kimden = (m.get("kimden") or "").strip()
        if kimden.upper().startswith("KOORDINATOR"):
            continue                    # koordinatörün ATAMASI sahiplik DEĞİL
        t = m.get("mesaj") or ""
        for dosya, _ in KUYRUK:
            if dosya not in t:
                continue
            # sahiplik ilanı mı, yoksa sadece bahsetmiş mi?
            if ONEK in t or re.search(r"(BENDE|bende|sahibiyim|AÇILDIM|ACILDIM)", t):
                out.setdefault(dosya, []).append((m.get("no") or "", kimden))
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
