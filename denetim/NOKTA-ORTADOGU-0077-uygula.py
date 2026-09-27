# -*- coding: utf-8 -*-
"""NOKTA-ORTADOGU-0077 — yama UYGULAYICI (koordinatör kalıbı, M-5275).

Kullanım:
    py denetim/NOKTA-ORTADOGU-0077-uygula.py                      KURU KOŞU, bütün gruplar
    py denetim/NOKTA-ORTADOGU-0077-uygula.py --grup A,B1           KURU KOŞU, yalnız A ve B1
    py denetim/NOKTA-ORTADOGU-0077-uygula.py --grup A,B1 --uygula  YAZAR

Gruplar (rapor: denetim/NOKTA-ORTADOGU-0077.md §2, hüküm M-5238):
    A   Mısır 5 kayıt — s: ingiltere → misir-sultanligi/kralligi · isg: +1914 · v: kid   ONAYLI
    B1  Sudan 39 kayıt — kondominyum günü ingiltere → ingiliz-sudani                     ONAYLI
    B2  Sudan kıyısı — 1899-01-19'da bölünür                                            ŞARTLI
    C   Katar iç dolgusu — s:1913 katar · isg:1916 ingiltere                             ŞARTLI
    D   Qaţţīnah — s/d Ceylanpınar zinciri                                               ŞARTLI

Kurallar (M-5275):
  · hedef kayıt bulunamazsa ATLA ve BİLDİR
  · değişiklik zaten uygulanmışsa DOKUNMA, "zaten böyle" de
  · eski değer birebir tutmuyorsa YAZMA ("eski tutmuyor — kayıt değişmiş")
  · her yazılan dönem kaynak: taşır
  · İDEMPOTENT: ikinci koşu hiçbir şey değiştirmez (zaten-böyle sınaması bunu sağlar)
  · ŞARTLI gruplarda §4 "komşu günü şartlı serbest" dört şartı her öneri için BASILIR;
    şartı sağlamayan öneri betik tarafından ELENİR ve "şartı sağlamadı" diye bildirilir.
"""
import sys
import re
import json

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
UYGULA = "--uygula" in sys.argv
GRUP = None
if "--grup" in sys.argv:
    GRUP = set(sys.argv[sys.argv.index("--grup") + 1].split(","))
import os
# ATLAS_DATA ortam değişkeni yalnız SINAV içindir (kopya klasörde idempotentlik sınaması)
D = os.environ.get("ATLAS_DATA", "C:\\atlas\\data") + "\\"
metin = {}
sayac = {"degisti": 0, "zaten": 0, "yok": 0, "eski_tutmuyor": 0, "sart_elendi": 0}
kayit_degisti = set()
kayit_hepsi = set()


def oku(dosya):
    if dosya not in metin:
        metin[dosya] = open(D + dosya, encoding="utf-8").read()
    return metin[dosya]


def aralik(dosya, ad):
    t = oku(dosya)
    bas = [m.start() for m in re.finditer(r'\{\s*"?ad"?\s*:\s*"' + re.escape(ad) + '"', t)]
    if len(bas) != 1:
        return None, len(bas)
    b = bas[0]
    m = re.compile(r'\n\s*\{\s*"?ad"?\s*:').search(t, b + 5)
    return (b, m.start() if m else len(t)), 1


def js(s):
    return json.dumps(s, ensure_ascii=False)


def P(f, t_, d):
    return r'\{\s*f:\s*"%s",\s*t:\s*"%s",\s*d:\s*"%s"\s*\}' % (f, t_, d)


def islem(grup, dosya, ad, etiket, eski, yeni, zaten, sart=None):
    """eski: regex (kayıt metninde TAM BİR kez) · yeni: eşleşen metni alıp yenisini döndürür
    zaten: regex — kayıtta varsa değişiklik uygulanmış sayılır · sart: None ya da dict."""
    if GRUP and grup not in GRUP:
        return
    kayit_hepsi.add((dosya, ad))
    on = "  [%-2s] %-26s %-24s %-38s" % (grup, dosya[:26], ad[:24], etiket[:38])
    if sart is not None:
        print(on + " — §4 şartları:")
        for k in ("1", "2", "3", "4"):
            print("        %s %s" % ("①②③④"[int(k) - 1], sart[k]))
        if not sart["gecer"]:
            sayac["sart_elendi"] += 1
            print(on + " ✗ ŞARTI SAĞLAMADI — yazılmaz (%s)" % sart["sebep"])
            return
    ar, n = aralik(dosya, ad)
    if ar is None:
        sayac["yok"] += 1
        print(on + " ⚠ KAYIT BULUNAMADI (%d eşleşme) — atlandı" % n)
        return
    b, s = ar
    t = oku(dosya)
    parca = t[b:s]
    if re.search(zaten, parca):
        sayac["zaten"] += 1
        print(on + " = zaten böyle — dokunulmadı")
        return
    es = list(re.finditer(eski, parca))
    if len(es) != 1:
        sayac["eski_tutmuyor"] += 1
        print(on + " ⚠ ESKİ TUTMUYOR (%d eşleşme) — kayıt değişmiş, yazılmadı" % len(es))
        return
    e = es[0]
    metin[dosya] = t[:b] + parca[:e.start()] + yeni(e.group(0)) + parca[e.end():] + t[s:]
    sayac["degisti"] += 1
    kayit_degisti.add((dosya, ad))
    print(on + " ✓ %s" % ("YAZILACAK" if UYGULA else "yazılırdı"))


# ═════════════════════════════════ kaynak metinleri ═════════════════════════════════
K_MISIR = js("TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık "
             "haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; "
             "TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye "
             "misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238")
K_KID = js("HARITA-0076 §4: serbest metin tâbilik kimliği boyanamaz; Kahire'nin v: kaydı kid:misir-kavalali. "
           "Yalnız kid/statu eklendi, tarih değişmedi. NOKTA-ORTADOGU-0077 · YAMA A")
K_SUDAN = js("TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak "
             "hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. "
             "NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238")
K_KIYI = js("Gün TDV `sudan`dan DOĞRUDAN (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN "
            "DEĞİL. Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238")
K_KATAR = js("TDV `katar` (gövde okundu): \"29 Temmuz 1913'te Londra'da imzalanan ... antlaşmanın ilgili maddesinde "
             "Osmanlı Devleti Katar yarımadası üzerindeki bütün taleplerinden feragat etti\" · \"3 Kasım 1916'da Katar "
             "Emîri Abdullah ile ... himaye antlaşması\". İki gün de TDV'den DOĞRUDAN (komşudan değil). "
             "NOKTA-ORTADOGU-0077 · YAMA C · M-5238")

# ═════════════════════════════════ A — Mısır ═══════════════════════════════════════
for dosya, ad in (("yerlesimler.js", "Süveyş"), ("yerlesimler.js", "Sina güneyi"),
                  ("yerlesimler_afrika.js", "Tûr (Sînâ)"), ("yerlesimler_afrika.js", "Sefâce"),
                  ("yerlesimler_afrika.js", "Kusayr")):
    islem("A", dosya, ad, "s: ingiltere → sultanlık/krallık",
          P("1914-12-18", "1923-10-29", "ingiltere"),
          lambda g: ('{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi",kaynak:%s},'
                     '{f:"1922-03-15",t:"1923-10-29",d:"misir-kralligi",kaynak:%s}') % (K_MISIR, K_MISIR),
          r'd:\s*"misir-sultanligi"')
    if ad != "Sina güneyi":
        islem("A", dosya, ad, "isg: +1914-1923 ingiltere",
              r'\{\s*f:\s*"1882-09-13",\s*t:\s*"1914-12-18",\s*d:\s*"ingiltere",\s*kaynak:\s*"urabi-pasa"\s*\}',
              lambda g: g + ',{f:"1914-12-18",t:"1923-10-29",d:"ingiltere",kaynak:%s}' % K_MISIR,
              r'\{\s*f:\s*"1914-12-18",\s*t:\s*"1923-10-29",\s*d:\s*"ingiltere",\s*kaynak:')
        islem("A", dosya, ad, "v: kid misir-kavalali",
              r'k:\s*"Kavalalı hanedanı"\s*\}',
              lambda g: 'k:"Kavalalı hanedanı",kid:"misir-kavalali",statu:"vassal",kaynak:%s}' % K_KID,
              r'k:\s*"Kavalalı hanedanı",\s*kid:')
    else:
        # Sina güneyi: isg alanı YOK (Fransız kaydı M-4731'le kaldırılmış), iki v kaydı var.
        # ⚠️ isg: EKLENMEDİ — alan yok, yeni alan açmak ayrı karar; rapor §2'de not.
        islem("A", dosya, ad, "v1: kid misir-kavalali",
              r'k:\s*"Mısır valiliği \(Kavalalı hanedanı\)"\s*\}',
              lambda g: 'k:"Mısır valiliği (Kavalalı hanedanı)",kid:"misir-kavalali",statu:"vassal",kaynak:%s}' % K_KID,
              r'k:\s*"Mısır valiliği \(Kavalalı hanedanı\)",\s*kid:')
        islem("A", dosya, ad, "v2: kid misir-kavalali",
              r'k:\s*"Mısır Hidivliği"\s*\}',
              lambda g: 'k:"Mısır Hidivliği",kid:"misir-kavalali",statu:"vassal",kaynak:%s}' % K_KID,
              r'k:\s*"Mısır Hidivliği",\s*kid:')

# ═════════════════════════════════ B1 / B2 — Sudan ═════════════════════════════════
yama = json.load(open("C:\\atlas\\denetim\\NOKTA-ORTADOGU-0077-YAMA.json", encoding="utf-8"))
for o in yama["oneriler"]:
    n = o.get("not") or ""
    if not (n.startswith("B1") or n.startswith("B2")):
        continue
    eski_d = [k for k in o["eski"] if k.get("d") == "ingiltere" and (k.get("t") or "") >= "1923"]
    f = eski_d[0]["f"]
    if n.startswith("B1"):
        islem("B1", o["dosya"], o["ad"], "%s ingiltere → ingiliz-sudani" % f,
              P(f, "1923-10-29", "ingiltere"),
              lambda g, f=f: '{f:"%s",t:"1923-10-29",d:"ingiliz-sudani",kaynak:%s}' % (f, K_SUDAN),
              r'd:\s*"ingiliz-sudani"')
    else:
        if o["ad"] == "Sevâkin":
            sart = {"1": "—", "2": "—", "3": "—",
                    "4": "yazılamaz: kondominyuma katılış günü kaynakta YOK (Batı literatürü 1899 ek anlaşmasını anıyor, okunmadı)",
                    "gecer": False, "sebep": "Sevâkin'in günü bulunamadı"}
        else:
            sart = {"1": "UYGULANMAZ — gün komşudan DEĞİL, TDV `sudan`dan doğrudan (kapsayıcı madde)",
                    "2": "hedefte (kıyı kasabası) ayrı gün: bulunamadı",
                    "3": "aynı süreç: Sudan kondominyumu",
                    "4": "kaynak: alanına 'Gün TDV sudan'dan DOĞRUDAN … KOMŞUDAN DEĞİL' yazılıyor",
                    "gecer": True, "sebep": ""}
        islem("B2", o["dosya"], o["ad"], "%s → 1899-01-19'da bölünür" % f,
              P(f, "1923-10-29", "ingiltere"),
              lambda g, f=f: ('{f:"%s",t:"1899-01-19",d:"ingiltere"},'
                              '{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:%s}') % (f, K_KIYI),
              r'd:\s*"ingiliz-sudani"', sart)

# ═════════════════════════════════ C — Katar iç dolgusu ═══════════════════════════
islem("C", "yerlesimler_ek_korfez.js", "Katar Yarımadası (iç, dolgu)", "s:1913 katar + isg:1916 ingiltere",
      r'd:\[\],\s*s:\[\],',
      lambda g: ('d:[], s:[{f:"1913-07-29",t:"1923-10-29",d:"katar",kaynak:%s}],\n'
                 '  isg:[{f:"1916-11-03",t:"1923-10-29",d:"ingiltere",kaynak:%s}],') % (K_KATAR, K_KATAR),
      r'd:\s*"katar"',
      {"1": "UYGULANMAZ — iki gün de TDV `katar`dan doğrudan (29 Temmuz 1913 · 3 Kasım 1916)",
       "2": "—", "3": "aynı olay: Katar yarımadasının Âl-i Sânî'ye bırakılması",
       "4": "kaynak: alanına TDV cümleleri ve 'komşudan değil' yazılıyor", "gecer": True, "sebep": ""})
islem("C", "yerlesimler_ek_korfez.js", "Katar Yarımadası (iç, dolgu)", "v:1871 katar tâbiliği",
      r'(?!)', lambda g: g, r'(?!)',
      {"1": "✗ komşu Doha'nın 1871-09-20'si KENDİ kaynağına dayanmıyor — ek5:346 kronoloji maddesine hizalı "
            "(Doha kaydındaki yorum); TDV katar yalnız 'sonbahar' diyor",
       "2": "hedefte gün yok ✓", "3": "aynı süreç ✓ (1871 Lahsâ seferi)",
       "4": "yazılamaz: ① sağlanmadan 'gün komşudan' satırı dayanaksız olur",
       "gecer": False, "sebep": "① sağlanmıyor — bulunamadı"})

# ═════════════════════════════════ D — Qaţţīnah (JSON satırı) ══════════════════════
KOMSU_D = "gün komşudan: Ceylanpınar · ankraj Mardin (külliyattaki zincir)"
SART_D = {"1": "⚠ ZAYIF — Ceylanpınar'ın d:→1920-04-23 günü kaydında 'ankraj Mardin — külliyattaki zincir' "
               "diye dayanaklanıyor; bağımsız akademik kaynak DEĞİL. Karar koordinatörün (M-5238: 'D için ④'ü yaz ve uygula')",
          "2": "hedefte gün yok ✓ (kaydın kendi notu: 'köyün kendi tarihi ARAŞTIRILMADI')",
          "3": "✓ 4,3 km · aynı süreç (Osmanlı → TBMM → 1921 Ankara sınırı)",
          "4": "✓ kaynak: '%s' her döneme yazılıyor · 1921-10-20 kaydın KENDİ kaynağından (Ankara İtilafnamesi md. 8)" % KOMSU_D,
          "gecer": True, "sebep": ""}


def d_yeni(eski_satir):
    son = "," if eski_satir.rstrip().endswith(",") else ""
    y = json.loads(eski_satir.rstrip().rstrip(","))
    y["s"] = [k for k in y["s"] if k["t"] <= "1516-08-24"] + [
        {"f": "1920-04-23", "t": "1921-10-20", "d": "tbmm-turkiye", "kaynak": KOMSU_D},
        {"f": "1921-10-20", "t": "1923-10-29", "d": "suriye-lubnan-mandasi",
         "kaynak": "Ankara İtilafnamesi md. 8 (20.10.1921) — kaydın kendi kaynağı"}]
    y["d"] = [{"f": "1516-08-24", "t": "1920-04-23", "kaynak": KOMSU_D}]
    y["yama_notu"] = ("NOKTA-ORTADOGU-0077 · YAMA D · M-5238/M-5275: eski s: fransa-cumhuriyet 1918-10-26 (Halep'in "
                      "işgal günü; Ras'ülayn için kaynak YOK) kaldırıldı. Ceylanpınar'ın isg: fransa kaydı "
                      "DEVRALINMADI: onun kaynağı 'bulunamadı — KAYNAKSIZ' (§4 ①).")
    return json.dumps(y, ensure_ascii=False, separators=(",", ":")) + son


islem("D", "yerlesimler_sinir_guney.js", "Qaţţīnah", "s/d Ceylanpınar zinciri",
      r'\{"ad":"Qaţţīnah".*?"d":\[\{"f":"1516-08-24","t":"1918-10-26"\}\].*\},?',
      d_yeni, r'"yama_notu":"NOKTA-ORTADOGU-0077 · YAMA D', SART_D)
islem("D", "yerlesimler_sinir_guney.js", "Qaţţīnah", "isg: fransa (Ceylanpınar'dan)",
      r'(?!)', lambda g: g, r'(?!)',
      {"1": "✗ Ceylanpınar'ın isg: kaydının kaynağı 'bulunamadı — KAYNAKSIZ'", "2": "—", "3": "✓",
       "4": "yazılamaz", "gecer": False, "sebep": "① sağlanmıyor"})

# ═════════════════════════════════ özet ══════════════════════════════════════════
print("-" * 100)
print("değişen kayıt: %d/%d · değişiklik %d · zaten böyle %d · kayıt yok %d · eski tutmuyor %d · şartı sağlamadı %d"
      % (len(kayit_degisti), len(kayit_hepsi), sayac["degisti"], sayac["zaten"], sayac["yok"],
         sayac["eski_tutmuyor"], sayac["sart_elendi"]))
if UYGULA and sayac["degisti"]:
    for dosya, icerik in metin.items():
        open(D + dosya, "w", encoding="utf-8", newline="").write(icerik)
    print("YAZILDI:", ", ".join(sorted(metin)))
elif not UYGULA:
    print("KURU KOŞU — hiçbir dosya yazılmadı (yazmak için --uygula)")
