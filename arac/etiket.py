# -*- coding: utf-8 -*-
"""etiket.py — YENİ OTURUM KARTI ÜRETİR. Emre'nin isteği (16 Ağustos 2026):

    "Etikette açılması gereken oturumun ADI, MODELİ, GÖREVİ, BAŞLANGIÇ
     PROMPTU, ŞARTNAMESİ, ve bu BEKÇİ vesaire yapısı hepsi bir arada
     olmalı. Ayrıca elbet DİZİNİ."

🔴 NİÇİN BİR ALET — ve niçin ELLE YAZILMIYOR:
Bu gece etiketi altı kez elle yazdım ve **altı adres kazası** oldu
(ad · dosya yolu · kuyruk · M-numarası · takma ad). Her seferinde bir
şey unutuldu ya da kullanıcının bilmediği bir bilgiye dayandı.
📌 `§11`: *"kural yetmiyor, ALIŞKANLIK gerekiyor; o da yetmiyorsa ARACI
DEĞİŞTİR."* Etiket artık üretiliyor — unutulacak alan kalmıyor.

════════════════════════════════════════════════════════════════════════
KULLANIM

    py arac/etiket.py --gorev NOKTA-AMERIKA --model Opus
    py arac/etiket.py --gorev KADEME-ASYA --model Opus --ad "Opus 24"
    py arac/etiket.py --liste          kuyruktaki BOŞ görevler için etiket

`--ad` verilmezse etiket *"Emre ne ad verdiyse o"* der — çünkü adı
KULLANICI verir, koordinatör DEĞİŞTİRMEZ (M-0129'un doğurduğu kural).
════════════════════════════════════════════════════════════════════════
"""
import io
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OTURUMLAR = os.path.join(KOK, "oturumlar")

# 🔴 DİZİN BİR KEZ YAZILIR — Emre "elbet dizini" dedi ve sebebi ölçülü:
# `YASALAR F9`, yanlış dizinde açılan oturum proje dosyalarını GÖREMEZ,
# ve dizini yazmamak kullanıcıyı TAHMİNE zorlar.
DIZIN = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"

KART = """
╔══════════════════════════════════════════════════════════════════════╗
║  🎫 OTURUM ETİKETİ — {gorev}
╚══════════════════════════════════════════════════════════════════════╝

  AD        : {ad}
  MODEL     : {model}
  DİZİN     : {dizin}
  GÖREV     : oturumlar/{dosya}
  ŞABLON    : oturumlar/SABLON.md   (kuralların TAMAMI orada)
  ClaudEmre : HAYIR — bu bir PROJE oturumu, sistem oturumu değil

──────────────────────────────────────────────────────────────────────
  📋 AÇILIŞ PROMPTU — pencereye AYNEN bunu yapıştır
──────────────────────────────────────────────────────────────────────

Bu bir Osmanlı Tarih Atlası işçi oturumusun. Dizin:
{dizin}

SIRAYLA YAP, hiçbir adımı atlama:

1) CLAUDE.md ve oturumlar/SABLON.md dosyalarını baştan sona oku.
   SABLON.md kuralların TAMAMINI taşır; şartnamen yalnız BÖLGE, DOSYA
   ve BİTİŞ ÖLÇÜTÜNÜ belirler.

2) NÖBETÇİNİ KUR — Monitor aracıyla, kabuk arka planına DEĞİL:
     Monitor · persistent: true · timeout_ms: 3600000
     command: cd "{dizin}" && py arac/tahta_bekci.py --kim "<ADIN>" --ara 45
     description: tahta mesajları
   Bu OLMADAN mesaj tahtasını göremezsin ve SAĞIR kalırsın.
   Açılış satırını OKU: kaç ad dinlediğini yazar.
   ⚠️ Bekçi oturumla aynı ömrü paylaşır — her uyanışta YENİDEN KUR.

3) oturumlar/{dosya} şartnamesini baştan sona oku. İçindeki HER SAYIYI
   kendin doğrula (koordinatörün sayıları bayat olabilir, iki kez oldu).

4) TAHTAYA SAHİPLİK İLANI YAZ — ilk mesajın bu olsun:
     py arac/tahta.py yaz --kim "<ADIN>" --kime "KOORDINATOR" --cins RAPOR --mesaj "..."
   İlk satırı: → DOSYASI <senin dosyan> OLAN OTURUMDAN
   İçeriği: "<GÖREV>.md bende · dosyam <yol> · nöbetçim kurulu"
   Tahtada o görevi almış biri VARSA dur ve sor.

5) Çalış. İş bitince kabul kapısını koştur (SABLON.md §⑥) ve ÇIKTISIYLA
   teslim et. "Bitirdim" bir teslim DEĞİLDİR.

MUTLAK KURALLAR — hepsi SABLON.md'de gerekçeleriyle:
- Kendi pencerene yazmak = hiç cevap vermemek. Cevap TAHTADAN gider.
- Adres DOSYADIR, ad değil. Mesaj sana mı, DOSYA SATIRINA bak.
- Yalnız SANA VERİLEN dosyaya yaz.
- Kaçış/Türkçe içeren metin kabuktan GEÇMEZ: Write + py <yol>.
  git add -A ASLA. Commit pathspec'li.
- Kaynak: TDV birincil; dışına çıkarsan AKADEMİK/GÜVENİLİR/BİLİMSEL.
  Forum, blog, içerik çiftliği, turizm sitesi, yapay zekâ üretimi metin
  KULLANILMAZ. Vikipedi ve Britannica TEK DAYANAK DEĞİL.
  kaynak: zorunlu; bulamazsan "bulunamadı" diye YAZ.
- Tarih uydurma. Gün bilinmiyorsa YYYY-01-01.
- Ölçtüğünü ve çıkardığını AYRI SATIRA yaz. Ölçmediğine "ölçmedim" de.
- Yarım iş suç değil, GİZLENMİŞ yarım iş suç.
- Aksaklık BEKLEMEZ: şartname yanlış/bayat çıktıysa, kaynaklar
  çelişiyorsa, sayı beklenenden çok farklıysa — HEMEN bildir, ama
  sormakla beklemek ayrı şeyler: muhafazakâr seçenek varsa ilerle.
- İşin biterse: py arac/isal.py · kuyruk boşsa koordinatöre *kii.

──────────────────────────────────────────────────────────────────────
  ⚙️ KOORDİNATÖRÜN KONTROL LİSTESİ — etiketi vermeden ÖNCE
──────────────────────────────────────────────────────────────────────
  [{s1}] oturumlar/{dosya} DİSKTE VAR
  [{s2}] arac/isal.py KUYRUĞUNDA kayıtlı
  [{s3}] görev henüz SAHİPSİZ (isal.py --liste ile ölç)
  [ ] şartnamedeki sayılar BUGÜN ölçüldü (bayat sayı iki kez ısırdı)
  [ ] dosya adı çakışmıyor (6-haneli scratchpad UUID kuralı)
"""


def _dosya_var(d):
    return os.path.exists(os.path.join(OTURUMLAR, d))


def _kuyruk():
    try:
        sys.path.insert(0, os.path.join(KOK, "arac"))
        import isal
        return isal.KUYRUK, isal._alinmis()
    except Exception as e:
        print("⚠️ isal.py okunamadı: %s — kuyruk kontrolü ATLANDI" % e)
        return [], {}


def main(argv):
    kuyruk, alinmis = _kuyruk()

    if "--liste" in argv:
        bos = [(d, n) for d, n in kuyruk
               if d not in alinmis and _dosya_var(d)]
        if not bos:
            print("BOŞ GÖREV YOK — kuyruğun tamamı sahipli.")
            return 0
        print("BOŞTA %d GÖREV — her biri için etiket:" % len(bos))
        for d, _ in bos:
            _bas(d.replace(".md", ""), "Opus", None, kuyruk, alinmis)
        return 0

    if "--gorev" not in argv:
        print("kullanim: py arac/etiket.py --gorev <GOREV-ADI> [--model Opus] [--ad \"...\"]")
        print("          py arac/etiket.py --liste")
        return 2

    gorev = argv[argv.index("--gorev") + 1].replace(".md", "")
    model = argv[argv.index("--model") + 1] if "--model" in argv else "Opus"
    ad = argv[argv.index("--ad") + 1] if "--ad" in argv else None
    _bas(gorev, model, ad, kuyruk, alinmis)
    return 0


def _bas(gorev, model, ad, kuyruk, alinmis):
    dosya = gorev + ".md"
    # ⚠️ Kontrol listesi ÖNCEDEN ölçülür — etiketi verirken değil.
    # Var olmayan bir şartnameye oturum göndermek, ona hiç iş
    # vermemekten KÖTÜDÜR: oturum dosyayı arar, bulamaz, UYDURUR.
    s1 = "✓" if _dosya_var(dosya) else "🔴 YOK"
    s2 = "✓" if any(d == dosya for d, _ in kuyruk) else "🔴 YOK"
    s3 = "✓" if dosya not in alinmis else "🔴 ALINMIŞ: %s" % (
        alinmis[dosya][0][0] if alinmis.get(dosya) else "?")
    print(KART.format(
        gorev=gorev, dosya=dosya, model=model, dizin=DIZIN,
        ad=ad or "Emre ne ad verdiyse O — koordinatör DEĞİŞTİRMEZ",
        s1=s1, s2=s2, s3=s3))


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
