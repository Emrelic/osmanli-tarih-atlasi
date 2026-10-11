# -*- coding: utf-8 -*-
"""KİLİT KANCASI — `kilit.py`yi DİLEKTEN KAPIYA çevirir.

`arac/kilit.py` tek başına bir TEZGÂHTIR: çağıran yoksa hiçbir şey yapmaz.
Bu kanca Write/Edit çağrılarının ÖNÜNE takılır ve kilidi MEKANİK kılar —
oturumun hatırlamasına gerek kalmaz.
📌 Niçin şart: bu projede "uyarı yazmak" bir denetim sanıldı ve ödedi.
  Jetonu sohbete yazmayın uyarısı YAZILIYDI; sızıntı ONA RAĞMEN oldu.
  **Bir uyarı bir denetim değil bir dilektir.** `CLAUDE.md §7` dosya
  sahipliğini yıllardır söylüyor; çakışmalar yine oldu, çünkü kural
  BELGEDEYDİ, ÇAĞRI YOLUNDA DEĞİLDİ.

🔴 KURULUMU YALNIZ EMRE YAPAR. `settings` onun alanıdır; hiçbir oturum
  (ben dâhil) kanca yapılandırmasına dokunmaz. Bu dosya kancanın GÖVDESİDİR,
  kaydı değil.

KURULUM (Emre, `.claude/settings.json`):
    "hooks": { "PreToolUse": [ { "matcher": "Write|Edit|MultiEdit|NotebookEdit",
      "hooks": [ { "type": "command",
                   "command": "py C:/atlas/arac/kilit_kanca.py" } ] } ] }

ÇIKIŞ KODLARI (Claude Code sözleşmesi):
   0  geç — kilit sende ya da dosya kapsam dışı
   2  ENGELLE — dosya başkasında; stderr oturuma GÖSTERİLİR

🔴 ARIZA YÖNÜ — İKİ AYRI SINIF, VE ÇARELERİ TERS:
  ① KİLİT DURUMU okunamıyor → ENGELLE (çıkış 2).
     "Ölçülemedi ≠ serbest". Burada ne koruduğumuzu biliyoruz: o dosyayı.
  ② KANCANIN KENDİSİ bozuk (stdin ayrıştırılamadı, içe aktarma patladı)
     → GEÇİR (çıkış 0), ama GÜRÜLTÜYLE.
     Çünkü hangi dosya olduğunu bile bilmiyorsak KORUYACAK bir şey yok;
     her şeyi engellemek hiçbir şeyi korumaz, yalnız makineyi durdurur.
  📌 İkisini tek kovaya atmak bu aleti ya işe yaramaz ya felç edici yapar.
    Ayrım "neyi koruduğumuzu BİLİYOR MUYUZ" sorusunda: ①'de biliyoruz,
    ②'de bilmiyoruz. Kapı, koruduğu şeyi adlandıramıyorsa kapı değildir.
"""
import io
import json
import os
import sys

sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
KAPSAM = ("data/", "arac/", "denetim/", "oturumlar/", "js/", "css/", "dersler/")
MUAF = ("oturumlar/kilit.json", "oturumlar/tahta.json", "oturumlar/defter.json",
        "oturumlar/TAHTA.md")
# MUAF niçin: bunlar ALETLERİN kendi kayıt dosyaları; kilitlenirse tahta ve
# kilit birbirini kilitler. Bir aracın kaydını başka bir araçla korumak
# döngü üretir — ve döngüyü yazdığın gün değil, iki alet aynı anda
# koştuğu gün görürsün.


def kapsamda(yol):
    """Depo içinde ve KAPSAM listesinde mi. Dışındaysa kanca KARIŞMAZ.
    ⚠️ scratchpad, geçici dosya, başka depo → serbest. Kilit bir
    çakışma aletidir, bir yasak aleti değil."""
    try:
        g = os.path.relpath(os.path.abspath(yol), KOK).replace("\\", "/")
    except ValueError:
        return False
    if g.startswith(".."):
        return False
    if g in MUAF:
        return False
    return g.startswith(KAPSAM)


def main():
    # ---- ② KANCA ARIZASI: GEÇİR, ama GÜRÜLTÜYLE -------------------------
    try:
        ham = sys.stdin.read()
        g = json.loads(ham) if ham.strip() else {}
        arac = g.get("tool_name") or ""
        girdi = g.get("tool_input") or {}
        yol = girdi.get("file_path") or girdi.get("notebook_path") or ""
        oturum = (g.get("session_id") or os.environ.get("CLAUDE_SESSION_ID") or "")
    except Exception as e:
        print("⚪ KİLİT KANCASI girdiyi okuyamadı (%s) — GEÇİRİLDİ."
              " Korunacak dosya ADLANDIRILAMADIĞI için engellemek"
              " hiçbir şeyi korumaz." % type(e).__name__, file=sys.stderr)
        return 0

    if arac not in ("Write", "Edit", "MultiEdit", "NotebookEdit") or not yol:
        return 0
    if not kapsamda(yol):
        return 0

    # ---- ① KİLİT DURUMU: okunamıyorsa ENGELLE ---------------------------
    sys.path.insert(0, ARAC)
    try:
        import kilit
    except Exception as e:
        print("⚪ KİLİT KANCASI `kilit.py`yi yükleyemedi (%s) — GEÇİRİLDİ"
              " (② sınıfı: aletin kendisi yok, kural ölçülemez)."
              % type(e).__name__, file=sys.stderr)
        return 0

    ben = kimlik(oturum)
    try:
        with kilit.Nobet():
            d = kilit.yukle()
            anah = kilit.yol_anahtar(yol)
            k = d["kilitler"].get(anah)
            if k is None:                      # serbest ⇒ KENDİLİĞİNDEN AL
                d["kilitler"][anah] = {"sahip": ben, "alindi": kilit.simdi(),
                                       "sira": []}
                kilit.kaydet(d)
                print("🟢 KİLİT ALINDI: %s → %s (ilk yazmada kendiliğinden)."
                      " İş bitince: py arac/kilit.py birak-hepsi --kim \"%s\""
                      % (anah, ben, ben), file=sys.stderr)
                return 0
            if k.get("sahip") == ben:
                return 0                       # sessiz geç — gürültü yapmaz
            sira = k.setdefault("sira", [])
            if not any(s.get("kim") == ben for s in sira):
                sira.append({"kim": ben, "girdi": kilit.simdi()})
            yer = [s.get("kim") for s in sira].index(ben) + 1
            kilit.kaydet(d)
    except Exception as e:
        print("🔴 KİLİT DURUMU OKUNAMADI (%s: %s) — ENGELLENDİ."
              % (type(e).__name__, e), file=sys.stderr)
        print("   Ölçülemedi ≠ serbest. Hangi dosya olduğunu BİLİYORUZ (%s),"
              " onu korumak için engelliyoruz." % yol, file=sys.stderr)
        print("   Çare: py arac/kilit.py durum — bozuksa koordinatöre bildir.",
              file=sys.stderr)
        return 2

    # ---- ENGELLEME MESAJI — Emre'nin istediği cümle ---------------------
    print("🔴 BU DOSYA ŞU ANDA KULLANIMDA, KULLANIM BİTENE KADAR BEKLİYORUM",
          file=sys.stderr)
    print("   dosya   : %s" % anah, file=sys.stderr)
    print("   kullanan: %s (%s önce aldı)"
          % (k.get("sahip"), kilit.yas_yazi(k.get("alindi"))), file=sys.stderr)
    print("   sıradaki yerim: %d / %d" % (yer, len(sira)), file=sys.stderr)
    print("   ⇒ YAZMA. Sıraya girdin; kilit boşalınca tahtadan haber"
          " gelecek. Emre'ye bu cümleyle bildir.", file=sys.stderr)
    print("   durum: py arac/kilit.py durum %s" % anah, file=sys.stderr)
    return 2


def kimlik(oturum_id):
    """Oturumun kilit kimliği: kayıtlı ADI varsa O, yoksa oturum kimliği.

    🔴 Kanca oturumun ADINI bilmez — Claude Code ona `session_id` verir,
    başlığı vermez. İki seçenek vardı ve ikisi de eksikti:
      ⓐ yalnız kimlik kullan → kilit tablosu okunamaz hâle gelir
         ("3f91c2 dosyayı tutuyor" kimseye bir şey söylemez)
      ⓑ adı zorunlu kıl → kanca kurulamaz, çünkü ad kancaya ulaşmıyor
    ⇒ Seçim: kimlik ÇALIŞIR, ad OKUNABİLİR KILAR. Oturum bir kez
      `py arac/kilit.py al <dosya> --kim "<ADIN>"` çağırırsa adıyla görünür;
      çağırmazsa kısa kimliğiyle görünür ama KİLİT YİNE ÇALIŞIR.
    📌 Doğruluğu okunabilirliğe bağlamak, ikisini birden kaybetmenin yoludur.
    """
    harita = os.path.join(KOK, "oturumlar", "kilit_adlar.json")
    try:
        with io.open(harita, encoding="utf-8") as f:
            ad = json.load(f).get(oturum_id)
        if ad:
            return ad
    except Exception:
        pass
    return "oturum-" + (oturum_id[:6] if oturum_id else "bilinmeyen")


if __name__ == "__main__":
    sys.exit(main())
