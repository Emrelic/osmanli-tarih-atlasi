# -*- coding: utf-8 -*-
"""kabuk_nobetci.py — `§11`i BİR KURAL OLMAKTAN ÇIKARIP KAPIYA ÇEVİRİR.

🔴 NİÇİN VAR — Emre, 15 Ağustos 2026:
    "Eğer kuralları uygulamayacaksan boş yere bunları yazmaya, sırtımızda
     taşımaya, bunlar için işimizi yavaşlatmaya, token harcamaya gerek yok.
     Kurallara uyulmayacaksa neden bu kuralları yazdık?"

Haklıydı. `§11` (*"kaçış içeren hiçbir metin kabuktan geçmez"*) bu
projede **YEDİ KEZ** çiğnendi ve yedincisi en utandırıcısıydı: kuralın
kendi metni yazılırken çiğnendi. Ölçülmüş zararlar:

    ① betik patladı                        gürültülü, hemen görülür
    ② betik patladı                        gürültülü
    ③ metin sessizce boşaldı               sessiz, gözle bulunur
    ④ commit BOŞA GİTTİ, "başarılı" BASTI  ← en tehlikelisi
    ⑤ `kavalali` cümlenin ÖZNESİ silindi   push'lanmış, düzeltilemedi
    ⑥ `toga-timur` künye adı silindi       `-F` doğruydu, GİRDİ bozuktu
    ⑦ BEKLEYENLER tablosunda üç ad BOŞ     kuralın kendi metni yazılırken

📌 Ve dizilim öğretici: **patlayan → sessizce bozan → başarılı görünen.**
Aynı kural, giderek daha zor fark edilen biçimlerde çiğnendi.

🔴 DERSİN KENDİSİ ÜÇ KEZ YAZILDI VE ÜÇÜ DE YETMEDİ:
    "kural yetmiyor, ALIŞKANLIK gerekiyor"
    "yeter olan tek şey ARACI DEĞİŞTİRMEK"
    "aracın GİRDİSİNİN nereden geldiğine bakılır"
Üçü de **yazana güveniyor.** Bu nöbetçi güvenmiyor: `PreToolUse` kancası
olarak koşar ve komutu **ÇALIŞMADAN ÖNCE REDDEDER.**

────────────────────────────────────────────────────────────────────────
NEYİ REDDEDER

  ① BACKTICK içeren Bash komutu
     bash onu KOMUT diye çalıştırır; metindeki kelime SİLİNİR ve
     çıktı "başarılı" görünür.
  ② `py -c` / `python -c` içinde TÜRKÇE KARAKTER ya da backtick
     tırnak eşleşmesi bozulur, metin sessizce boşalır.
  ③ heredoc (`<<`) içinde kaçış (`\\n` · `\\b`) ya da Türkçe karakter
     `\\b` bir kez 0x08 BACKSPACE baytına dönüştü ve `Read` onu
     GÖRÜNMEZ gösterdi — denetim çalıştı ama sayısı yalandı.
  ④ `git commit -m` ile Türkçe/backtick içeren mesaj
     `-F <dosya>` şart, ve o dosya da kabukta ÜRETİLMEMELİ.

NEYİ REDDETMEZ — dar tutuldu, çünkü fazla geniş bir nöbetçi kapatılır:
  · saf ASCII komutlar (`git log`, `ls`, `py arac/x.py`)
  · Türkçe DOSYA YOLU (proje kökü zaten "TARİH COĞRAFYA SİTESİ")
  · `git commit -F <dosya>`  ← doğru biçim, serbest

────────────────────────────────────────────────────────────────────────
⚠️ VE BU NÖBETÇİ KENDİ TESTİNİ GEÇMEK ZORUNDA (`C13` + reçete kuralı):
    py arac/kabuk_nobetci.py --sina
Geçme yolu (temiz komut geçer) VE ateşleme yolu (dört kusur dalının
DÖRDÜ de ayrı ayrı öter) sınanır. Zorlanamayan dal, denetimsiz daldır.
"""
import json
import re
import sys

# 🔴 stdout SARILMADAN önce hiçbir Türkçe karakter basılmaz. Windows
# konsolu cp1254'e düşüyor ve `─` gibi bir karakter bütün betiği
# UnicodeEncodeError ile öldürüyor. Bir NÖBETÇİNİN kendi çıktısında
# ölmesi, nöbeti hiç tutmamasıyla aynı şeydir.
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

TURKCE = set("çÇğĞıİöÖşŞüÜâÂîÎûÛ")

# ── Dallar: (ad, sınayıcı, açıklama) ─────────────────────────────────
def _backtick(k):
    return "`" in k


def _pyc_bozuk(k):
    m = re.search(r"\b(?:py|python|python3)\s+-c\b", k)
    if not m:
        return False
    kuyruk = k[m.end():]
    return "`" in kuyruk or any(c in TURKCE for c in kuyruk)


def _heredoc_bozuk(k):
    if "<<" not in k:
        return False
    kuyruk = k[k.index("<<"):]
    return ("\\n" in kuyruk or "\\b" in kuyruk or "\\t" in kuyruk
            or "`" in kuyruk or any(c in TURKCE for c in kuyruk))


def _commit_m(k):
    m = re.search(r"git\s+commit\b[^|;&]*", k)
    if not m or " -m" not in m.group(0):
        return False
    g = m.group(0)
    return "`" in g or any(c in TURKCE for c in g)


def _add_hepsi(k):
    """`git add -A` / `git add .` — PAYLAŞILAN INDEX'İ süpürür.

    🔴 Bu depoda git index'i birden çok oturum arasında PAYLAŞILIYOR.
    `-A` senin dosyalarını değil, O AN SAHNELENMİŞ HER ŞEYİ alır:
    başka bir oturumun yarım işi senin commit'ine girer ve o oturum
    bir daha kendi commit'ini atamaz.
    ⚠️ Ve mahrem tarafı daha ağır: `-A` TAKİPSİZ her dosyayı süpürür.
    Kardeş projede bir pakette 14 hasta TC kimlik numarası vardı;
    `.gitignore` kapsamıyordu ve tek bir `add -A` onu herkese açık bir
    depoya gönderecekti.
    ⇒ Doğrusu her zaman PATHSPEC: `git add -- <yol> <yol>`
    """
    return bool(re.search(r"git\s+add\s+(-A\b|--all\b|\.(?:\s|$))", k))


DALLAR = [
    ("BACKTICK", _backtick,
     "Bash backtick'i KOMUT diye çalıştırır — metindeki kelime SİLİNİR "
     "ve çıktı 'başarılı' görünür. (`kavalali` ve `toga-timur` böyle "
     "silindi, ikisi de push'lanmıştı.)"),
    ("PY-C", _pyc_bozuk,
     "`py -c` içinde Türkçe/backtick: tırnak eşleşmesi bozulur, metin "
     "SESSİZCE boşalır. (BEKLEYENLER tablosunda üç ad böyle boş kaldı.)"),
    ("HEREDOC", _heredoc_bozuk,
     "heredoc kaçışı yer: `\\b` bir kez 0x08 BACKSPACE baytına döndü ve "
     "`Read` onu GÖRÜNMEZ gösterdi — denetim çalıştı, sayısı yalandı."),
    ("COMMIT-M", _commit_m,
     "`git commit -m` ile Türkçe/backtick mesaj. Doğrusu: metni `Write` "
     "ile dosyaya yaz, `git commit -F <dosya>` ile ver — ve o dosyayı "
     "KABUKTA ÜRETME (`printf`/`py -c` ile bile)."),
    ("ADD-HEPSI", _add_hepsi,
     "`git add -A` / `git add .` — index PAYLAŞILIYOR. Başka bir "
     "oturumun yarım işi senin commit'ine girer (yaşandı), ve TAKİPSİZ "
     "her dosya süpürülür (kardeş projede 14 hasta TC'si kıl payı "
     "kurtuldu).\n   ⇒ Her zaman PATHSPEC: git add -- <yol> <yol>"),
]

CARE = ("\n⇒ DOĞRU YOL — üç adımın ÜÇÜ de şart:\n"
        "   ① metni `Write` aracıyla bir dosyaya yaz\n"
        "   ② bash o dosyaya HİÇ dokunmasın (printf/py -c ile ÜRETME)\n"
        "   ③ `py <yol>` ya da `git commit -F <yol>` ile çalıştır\n")


def denetle(komut):
    """(engelle_mi, sebep). Kural değil KAPI: sebep hep yazılır."""
    for ad, sina, aciklama in DALLAR:
        if sina(komut):
            return True, ("🔴 §11 — %s\n%s\n%s" % (ad, aciklama, CARE))
    return False, ""


def _sina():
    """C13: geçme yolu VE dört ateşleme dalı, AYRI AYRI."""
    gecmeli = [
        "git log --oneline -5",
        "py arac/denetle.py",
        'py arac/tahta.py yaz --kim "KOORDINATOR" --mesaj-dosya /tmp/m.txt',
        'git commit -F /tmp/mesaj.txt -- oturumlar/X.md',
        'cd "/c/Users/emrem/OneDrive/Desktop/TARİH COĞRAFYA SİTESİ" && ls',
        'git add -- arac/x.py data/y.js',        # PATHSPEC serbest
        'git add arac/kural_olc.py',             # tek dosya da serbest
    ]
    otmeli = [
        ("BACKTICK", 'echo "VERI DEVLET 2 `toga-timur` onerdi"'),
        ("PY-C", 'py -c "print(\'kraliyet-macaristani künyesi\')"'),
        ("HEREDOC", "py - <<'EOF'\nprint('satır\\nsonu')\nEOF"),
        ("COMMIT-M", 'git commit -m "üç mükerrer yerleşim birleştirildi"'),
        ("ADD-HEPSI", "git add -A"),
        ("ADD-HEPSI", "git add ."),
        ("ADD-HEPSI", "git add --all && git commit -F m.txt"),
    ]
    hata = 0
    print("── GEÇME YOLU (temiz komut ENGELLENMEMELİ) ──")
    for k in gecmeli:
        e, s = denetle(k)
        if e:
            hata += 1
        print("%s %s" % ("🔴 YANLIŞ ENGELLENDİ:" if e else "✓", k[:64]))
    print("\n── ATEŞLEME (her kusur dalı AYRI AYRI ötmeli) ──")
    for bek, k in otmeli:
        e, s = denetle(k)
        ok = e and bek in s
        if not ok:
            hata += 1
        print("%s %-9s %s" % ("✓" if ok else "🔴", bek,
                              k.replace("\n", "⏎")[:56]))
    # 🔴 SAYAÇ HESAPLANIR, YAZILMAZ. İlk hâli "9/9 dal sağlam" diye SABİT
    # yazıyordu; dal sayısı 9'dan 14'e çıkınca çıktı YALAN SÖYLEMEYE başladı
    # ve hiçbir şey ötmedi. Bu, projenin kendi kayıtlı kusuru: *"araç kendi
    # eyleminin SONUCUNU değil DENEMESİNİ raporluyor."* Sabit yazılmış her
    # sayı, veri büyüdüğü an bayatlar.
    toplam = len(gecmeli) + len(otmeli)
    print("\n%s" % ("🔴 %d/%d dal ÇÖKTÜ" % (hata, toplam) if hata
                    else "✓ %d/%d dal sağlam" % (toplam, toplam)))
    return 1 if hata else 0


def main():
    if "--sina" in sys.argv[1:]:
        return _sina()
    # PreToolUse kancası: stdin'den JSON gelir
    try:
        g = json.load(sys.stdin)
    except Exception:
        return 0                      # okunamadıysa ENGELLEME — nöbetçi
    if g.get("tool_name") != "Bash":  # kendisi bir engel olmamalı
        return 0
    komut = (g.get("tool_input") or {}).get("command") or ""
    engel, sebep = denetle(komut)
    if not engel:
        return 0
    print(json.dumps({
        "hookSpecificOutput": {
            "hookEventName": "PreToolUse",
            "permissionDecision": "deny",
            "permissionDecisionReason": sebep,
        },
        "systemMessage": "§11 nöbetçisi bir Bash komutunu reddetti.",
    }, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
