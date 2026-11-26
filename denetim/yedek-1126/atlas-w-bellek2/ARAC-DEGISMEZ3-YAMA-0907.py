# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑦ YAMA PROTOTİPİ — `arac/denetle.py`ye ÖNERİ.

🔴 `arac/denetle.py`ye DOKUNULMADI. Bu dosya yamanın **çalışan prototipi**
ve `CLAUDE.md §11 C13`ün DÖRT AYAĞIYLA sınanmış hâlidir. Uygulama tek elden.

İKİ KALEM:
  Y1  `degismez3`in SESSİZ `continue` dalı sayılsın ve BASILSIN —
      sıfır olsa bile. (koordinatör şartı)
  Y2  `gercek_kd` beyanı YANLIŞ ve bir SINAV sessizce ÖLDÜ. 🆕

Y2'nin gerekçesi — `denetle.py:3419-3433`:
    if gercek_kd == 0:
        ...  n3z != n3 ise "kd_oku türetmesi BOZUK" diye İHLAL basar
    else:
        print(f"🟢 {gercek_kd} kayıt gerçek zaman derinliği taşıyor")
  `gercek_kd` 0'dan çıktığı anda İKİ ŞEY OLDU:
    ① beyan YANLIŞLAŞTI — 192 kayıt `kd:` taşıyor ama `m:` değişeni **4**,
      ve `Değişmez 3`ü çözen şey `m:`nin değişmesi.
    ② OKUYUCU SAĞLIK SINAVI SESSİZCE ÖLDÜ — `kd_oku` türetmesi bugün
      bozulsa hiçbir dal ötmez. Sınav bir eşiğe değil bir VERİ DEĞERİNE
      bağlanmıştı, ve veri o değeri terk etti.
  📌 `§11`: *"bir denetimin kapsamı, doğruluğundan ayrı ölçülür"* — burada
     dal doğru çalışıyordu, sonra ÇALIŞMAZ oldu ve kimse fark etmedi.
"""
import io
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi    # noqa: E402
import denetle  # noqa: E402

KESITLER = ("1300-06-15", "1400-06-15", "1500-06-15",
            "1600-06-15", "1700-06-15", "1800-06-15")


# ═════════ Y1 — YAMALI degismez3 (imza değişir: tek otorite) ═════════
def degismez3_yamali(Y):
    """(celiskiler, atlanan) — `atlanan`: merkez adı -> [yerleşim adları].

    🔴 SESSİZ `continue` ARTIK SAYILIYOR. Şart `degismez3`ün ta kendisi
    (`ix.get(y["m"])` boş dönüyor) — AYRI bir fonksiyona koymadım çünkü
    o zaman iki otorite doğar ve ayrışır (`§11` uret_bekleyenler dersi).
    """
    ix = {y["ad"]: y for y in Y}

    def durum(y, g):
        for p in (y.get("d") or []):
            if p["f"] <= g < p["t"]:
                return "OSMANLI"
        for p in (y.get("v") or []):
            if p["f"] <= g < p["t"]:
                return "tabi"
        for p in (y.get("s") or []):
            if p["f"] <= g < p["t"]:
                return p["d"]
        return "—"

    celiskiler, atlanan = [], {}
    for g in KESITLER:
        for y in Y:
            if not y.get("m"):
                continue
            m = ix.get(y["m"])
            if not m:
                atlanan.setdefault(y["m"], set()).add(y["ad"])
                continue
            a, b = durum(y, g), durum(m, g)
            if a == "—" or b == "—" or a == b:
                continue
            if {a, b} == {"OSMANLI", "tabi"}:
                continue
            celiskiler.append((g, y["ad"], y["m"], a, b))
    return celiskiler, {k: sorted(v) for k, v in atlanan.items()}


def bas_atlanan(atlanan):
    """SIFIR OLSA BİLE BASAR — koordinatör şartı.

    ⚠️ *"Sessiz bir sıfır, sessiz bir atlamadan yalnız biraz iyidir"* —
    ama bu sıfır sessiz DEĞİL: her koşuda görünür ve 0'dan çıktığı gün
    fark edilir. (`§11`: `0`, "yok" ile "bakmadım" arasında ayrım yapmaz)
    """
    n_kayit = sum(len(v) for v in atlanan.values())
    print("Sayaç       ·  merkezi atlasta BULUNAMAYAN kayıt: %d "
          "(%d ayrı merkez adı)" % (n_kayit, len(atlanan)))
    if not atlanan:
        print("               ⚪ 0 — bu kayıtlar 'temiz' DEĞİL 'BAKILMADI'")
        print("               olurdu; bugün bakılmayan yok.")
        return
    print("               🔴 Bu kayıtlar ÇELİŞKİSİZ DEĞİL, ÖLÇÜLMEMİŞ.")
    print("               Sebep genellikle AD VARYANTI (`§4` eşanlam borcu).")
    for m_ad, kimler in sorted(atlanan.items()):
        print("                 m:%-16s %s" % (m_ad, ", ".join(kimler)[:60]))


# ═════════ Y2 — `kd:` beyanı ve ÖLEN SINAV ═════════
def kd_saglik(Y):
    """(gercek_kd, m_degisen, turetme_bozuk_mu, ayrisan)

    `m_degisen` — `Değişmez 3`ü ÇÖZEN sayı. `gercek_kd` DEĞİL.
    `turetme_bozuk_mu` — ÖLEN SINAVIN YERİNE GEÇEN: `kd:` TAŞIMAYAN bir
        kayıtta zamanlı ile zamansız merkez AYRIŞIYORSA `kd_oku` türetmesi
        bozuktur. Bu sınav `gercek_kd`ye bağlı DEĞİL, yani ölmez.
    """
    gercek_kd = sum(1 for y in Y if y.get("kd"))
    m_degisen = sum(1 for y in Y if y.get("kd")
                    and len(set(p.get("m") for p in y["kd"])) > 1)
    ayrisan = []
    for y in Y:
        if y.get("kd"):
            continue                      # gerçek kd: — ayrışması MEŞRU
        for g in KESITLER:
            _, m_ad = girdi.kd_gun(y, g)
            if m_ad != y.get("m"):
                ayrisan.append((y["ad"], g, y.get("m"), m_ad))
    return gercek_kd, m_degisen, bool(ayrisan), ayrisan


# ═════════════════════ C13 — DÖRT AYAKLI SINAV ═════════════════════
print("=" * 72)
print("YAMA PROTOTİPİ — C13 dört ayaklı sınav")
print("=" * 72)
Y = girdi.yukle(sessiz=True)          # ③ GİRDİ: gerçek dosyadan, enjekte DEĞİL
hata = 0

print("\n③ GİRDİ AYAĞI — girdi gerçek kaynağından okundu")
print("   girdi.yukle() · %d nokta · %d dosya"
      % (len(Y), len(girdi.GIRDI_DOSYALARI)))

print("\n① GEÇME AYAĞI — yama, yamasız aletle AYNI çelişkiyi mi veriyor?")
cel_yama, atlanan = degismez3_yamali(Y)
cel_orij = denetle.degismez3(Y)
if len(cel_yama) == len(cel_orij) and cel_yama == cel_orij:
    print("   ✓ %d = %d ve listeler BİREBİR — yama çelişki ölçümünü BOZMUYOR"
          % (len(cel_yama), len(cel_orij)))
else:
    print("   🔴 AYRIŞTI: yama %d, orijinal %d" % (len(cel_yama), len(cel_orij)))
    hata += 1

print("\n② ATEŞLEME AYAĞI — gerçek veri + ZORLANMIŞ kusur")
print("   [gerçek veri]")
bas_atlanan(atlanan)
if sum(len(v) for v in atlanan.values()) == 0:
    print("   🔴 gerçek veride ateşlemedi — zorlama ŞART")
    hata += 1
else:
    print("   ✓ gerçek veride ATEŞLEDİ")

print("\n   [zorlanmış: sahte bir m: değeri enjekte edildi]")
sahte = dict(Y[0])
sahte["ad"] = "ZZZ-SINAV-NOKTASI-QQQ"
sahte["m"] = "ZZZ-OLMAYAN-MERKEZ-QQQ"
_, atl2 = degismez3_yamali(Y + [sahte])
if "ZZZ-OLMAYAN-MERKEZ-QQQ" in atl2:
    print("   ✓ enjekte edilen kusuru YAKALADI (%d merkez adı)" % len(atl2))
else:
    print("   🔴 enjekte edilen kusuru KAÇIRDI")
    hata += 1

print("\n   [GEÇME'nin sıfır dalı: atlanacak kayıt YOKKEN de BASIYOR mu?]")
temiz = [dict(y) for y in Y]
for y in temiz:
    y.pop("m", None)                  # m: yoksa atlanacak kayıt da yok
_, atl3 = degismez3_yamali(temiz)
print("   ", end="")
bas_atlanan(atl3)
if atl3:
    print("   🔴 temiz kümede boş olmalıydı")
    hata += 1
else:
    print("   ✓ SIFIR da BASILDI — sessiz sıfır yok")

print("\n④ ÇIKTI AYAĞI — aletin cevabını DOĞRU YERDEN okuyorum muyum?")
print("   dönüş tipi: %s · uzunluk %d" % (type(atlanan).__name__, len(atlanan)))
print("   anahtar örneği: %s" % sorted(atlanan)[:3])
print("   değer tipi: %s" % type(list(atlanan.values())[0]).__name__)
bek = 4
gercek = sum(len(v) for v in atlanan.values())
print("   kayıt sayısı %d (bağımsız ölçümüm: %d) %s"
      % (gercek, bek, "✓" if gercek == bek else "🔴 AYRIŞTI"))
if gercek != bek:
    hata += 1

# ═════════════════════ Y2 SINAVI ═════════════════════
print("\n" + "=" * 72)
print("Y2 — `gercek_kd` beyanı ve ÖLEN SINAV")
print("=" * 72)
gercek_kd, m_degisen, bozuk, ayrisan = kd_saglik(Y)
print("  denetle.py'nin BUGÜN bastığı : 🟢 %d kayıt gerçek zaman derinliği"
      % gercek_kd)
print("  `Değişmez 3`ü ÇÖZEN sayı     : %d  (m: gerçekten değişen)" % m_degisen)
print("  ⇒ beyan borcu %d KAT büyük gösteriyor" % (gercek_kd // max(m_degisen, 1)))
print("\n  ÖLEN SINAVIN YERİNE GEÇEN — `kd_oku` türetme sağlığı:")
print("    `kd:` TAŞIMAYAN kayıtta zamanlı≠zamansız merkez : %d" % len(ayrisan))
print("    türetme BOZUK mu : %s" % ("🔴 EVET" if bozuk else "✓ HAYIR"))
print("    📌 Bu sınav `gercek_kd`ye BAĞLI DEĞİL ⇒ veri değişince ÖLMEZ.")
if bozuk:
    for r in ayrisan[:5]:
        print("      %s @%s  m:%s ≠ kd_gun:%s" % r)

print("\n" + "=" * 72)
print("SONUÇ: %s" % ("✓ dört ayak da geçti" if hata == 0 else "🔴 %d ayak DÜŞTÜ" % hata))
print("=" * 72)
sys.exit(1 if hata else 0)
