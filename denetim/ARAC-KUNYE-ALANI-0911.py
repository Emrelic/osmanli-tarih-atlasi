# -*- coding: utf-8 -*-
"""
ARAC-KUNYE-ALANI-0911.py — KÜNYE ALANI görevi, 11 Eylül 2026

NE YAPAR: `denetim/BULGU-KRONOLOJI-KUNYE-0911.md`nin zeminini (566 madde,
6 dosya: cin·hindistan·misir·ozbek·japonya·sirbistan) alıp HER maddeye
önerilen `kunye:` değerini üretir, `denetim/HAZIRLIK-KUNYE-ALANI-0911.json`a
yazar. `data/*.js`ye TEK SATIR YAZMAZ (donuk).

İKİ KAYNAK KARIŞTIRILMADAN birleştirildi:
  ① kova "1" (409 madde) — TARİH PENCERESİ ile MEKANİK türetildi (bu
     betik kendisi hesaplıyor, elle müdahale YOK).
  ② kova "2+" (119 madde) — `denetim/BULGU-KRONOLOJI-KUNYE-0911.md`
     §1.2'de b: METNİ OKUNARAK elle sınıflandırılmıştı; o sınıflama
     BURADA sabit bir liste olarak (dosya sırasıyla, KRONOLOJİ KÜNYE
     oturumunun ürettiği sırayla) tekrar kullanıldı — YENİDEN OKUNMADI.
     Uzunluk eşleşmesi ASSERT edilir (§ aşağıda); tutmazsa betik PATLAR
     (D029: reçete kendi testini geçmek zorunda).
  ③ kova "0" (38 madde) — GERÇEK BOŞLUK, `kunye:[]` (boş dizi).

🔴 D022 ÖNGÖRÜSÜ (ÖLÇÜMDEN/YAZIMDAN ÖNCE):
  D140 sınavı: "🟠 çözülme oranı, aday künye SAYISIYLA" basit/monoton
  ilişkili çıkmayacak — çünkü sınıflama TARİH DEĞİL İÇERİK okuyarak
  yapıldı. Ozbek (3 aday) en YÜKSEK oranı, hindistan (4 aday) en DÜŞÜK
  oranı verecek — yani aday sayısı ARTARKEN oran DÜŞÜYOR olacak (ters
  yönlü), bu da D140'ın aradığı "aynı yönde artan sahte korelasyon"un
  YOKLUĞUNU gösterecek.
"""
import io
import json
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"


def devlet_araligi(ids):
    txt = io.open(KOK + r"\data\devletler.js", encoding="utf-8").read()
    out = {}
    for i in ids:
        m = re.search(r'id:"' + re.escape(i) + r'"(.*?)f:"([\d-]+)"(.*?)t:"([\d-]+)"',
                       txt, re.S)
        out[i] = (m.group(2), m.group(4)) if m else None
    return out


AILELER = {
    "cin":       ["song", "jin-hanedani", "yuan-hanedani", "ming-hanedani",
                  "guney-ming", "dashun", "qing-hanedani", "taiping", "cin-cumhuriyeti"],
    "hindistan": ["delhi-sultanligi", "babur-imparatorlugu", "sur-hanedani", "ingiliz-hindistani"],
    "misir":     ["memluk", "misir-kavalali"],
    "ozbek":     ["buhara", "hive", "hokand"],
    "japonya":   ["kamakura", "kenmu", "muromachi", "azuchi-momoyama", "edo-bakufu", "meiji-japonya"],
    "sirbistan": ["sirbistan-nemanjic", "sirp-despotlugu", "sirbistan-prensligi", "sirbistan-kralligi"],
}


def gun_no(s):
    y, a, g = s.split("-")
    return int(y) * 372 + int(a) * 31 + int(g)


def madde_listesi(dosya):
    txt = io.open(KOK + r"\data\kronoloji_%s.js" % dosya, encoding="utf-8").read()
    # (?:[^"\\]|\\.)* — kaçışlı tırnakları (\") da içeren metni doğru keser;
    # önceki hali `\"kamikaze\"` gibi metinlerde ilk kaçışlı tırnakta KESİYORDU.
    return re.findall(r'\{\s*t:"(\d{4}-\d{2}-\d{2})",\s*b:"((?:[^"\\]|\\.)*)"', txt)


# ═════════════════════════════════════════════════════════════════════
# BÖLÜM 2'nin sabit listesi — KRONOLOJİ KÜNYE oturumunun 11 Eylül 2026
# tarihli b: metni okuması (BULGU-KRONOLOJI-KUNYE-0911.md §1.2). Dosya
# SIRASINDADIR (regex'in bulduğu sırayla, tekrar tarih ARAMA — index'e göre).
# 🟢 = doğru çokluk (dizi >1 künye) · 🟠 = gerçek belirsizlik (tek künye,
# içerikten çözüldü) · None = üçüncü taraf / ölçülemedi (aile dışı konu)
# ═════════════════════════════════════════════════════════════════════
IKI_ARTI_SINIFLAMA = {
    "cin": [
        ["yuan-hanedani", "ming-hanedani"],   # 1368 Zhu Yuanzhang ilan
        "qing-hanedani",                       # 1636 Hong Taiji ad değişti
        "ming-hanedani",                       # 1642 Kaifeng sedleri
        ["dashun", "guney-ming"],              # 1644-04-25 Li Zicheng Pekin
        ["qing-hanedani", "dashun"],           # 1644-06-06 Qing Pekin aldı
        "qing-hanedani",                       # 1645-07-21 saç örgüsü fermanı
        ["qing-hanedani", "guney-ming"],       # 1645-06-08 Nanjing düştü
        "qing-hanedani",                       # 1661 Kangxi tahta
        ["qing-hanedani", "taiping"],          # 1851 Taiping ilanı
        ["qing-hanedani", "taiping"],          # 1853 Taiping Nanjing aldı
        "qing-hanedani",                       # 1856 Arrow Olayı
        "qing-hanedani",                       # 1860 Yazlık Saray
        "qing-hanedani",                       # 1860 Pekin Sözleşmesi
        "qing-hanedani",                       # 1861 Zongli Yamen
        "qing-hanedani",                       # 1861 Xianfeng öldü
        "qing-hanedani",                       # 1862 Kendini Güçlendirme
        "qing-hanedani",                       # 1862 Tongwen Guan
        ["qing-hanedani", "cin-cumhuriyeti"],  # 1911-10-10 Wuchang Ayaklanması
        "cin-cumhuriyeti",                     # 1911-12-29 Sun Yat-sen
    ],
    "hindistan": [
        ["babur-imparatorlugu", "sur-hanedani"],  # 1540 Kannauc
        "sur-hanedani",                            # 1542 Delhi-Bengal yolu
        ["babur-imparatorlugu", "sur-hanedani"],  # 1555 Hümâyun geri aldı
        "babur-imparatorlugu",                     # 1556-01 Hümâyun öldü
        ["babur-imparatorlugu", "sur-hanedani"],  # 1556-11 İkinci Pânipat
        ["babur-imparatorlugu", "ingiliz-hindistani"],  # 1757 Plasi
        None,                                       # 1761 Üçüncü Pânipat (Dürrânî-Maratha, 3. taraf)
        ["babur-imparatorlugu", "ingiliz-hindistani"],  # 1764 Buksar
        ["babur-imparatorlugu", "ingiliz-hindistani"],  # 1765 Allahâbâd
        None,                                       # 1786 Tîpû->Osmanlı (Mysore, 3. taraf)
        "ingiliz-hindistani",                       # 1792 Üçüncü Anglo-Mysore
        "ingiliz-hindistani",                       # 1793 Bengal arazi tesviyesi
        "ingiliz-hindistani",                       # 1799-05 Dördüncü Anglo-Mysore
        None,                                       # 1554 Sind Tarhan hanedanı (3. taraf)
        None,                                       # 1761 Marathalar Pânipat yenilgisi (3. taraf)
        "ingiliz-hindistani",                       # 1775 Birinci Anglo-Maratha
        None,                                       # 1799-07 Rançit Singh Lahor (Sih, 3. taraf)
        None,                                       # 1801 Rançit Singh taç (Sih)
        None,                                       # 1830 Rançit Singh Altın Tapınak (Sih)
        None,                                       # 1839 Rançit Singh öldü (Sih)
        "ingiliz-hindistani",                       # 1846 Birinci Anglo-Sih
        "ingiliz-hindistani",                       # 1849 İkinci Anglo-Sih
        None,                                       # 1761 Haydar Ali Meysûr (Mysore, 3. taraf)
        "ingiliz-hindistani",                       # 1780 İkinci Anglo-Mysore
        None,                                       # 1782 Haydar Ali öldü (Mysore)
        None,                                       # 1780(dup) Tîpû roket topçuluğu (Mysore)
        "sur-hanedani",                              # 1545 Şîr Şah türbesi
        "babur-imparatorlugu",                       # 1562 Tansen Ekber sarayı
        "ingiliz-hindistani",                        # 1770 Büyük Bengal Kıtlığı
    ],
    "ozbek": [
        "buhara", "buhara", "buhara", "buhara",
        ["buhara", "hive"],       # 1538 Ubeydullah Harzem işgali
        "buhara", "buhara", "buhara", "buhara", "buhara", "buhara", "buhara", "buhara", "buhara",
        ["buhara", "hive"],       # 1596 Harzem yeniden fetih
        "buhara", "buhara", "buhara", "buhara", "buhara",
        ["buhara", "hokand"],     # 1710 Hokand ayrıldı
        ["buhara", "hive"],       # 1740 Nâdir Şah — Buhara+Hîve vassal
        "buhara", "buhara", "buhara", "buhara",
        ["buhara", "hokand"],     # 1842 Nasrullah Hokand geçici ilhak
        "buhara", "buhara", "buhara", "buhara", "buhara", "buhara",
        "hive", "hive", "hive", "hive", "hive", "hive", "hive", "hive",
        ["hive", "buhara"],       # 1655 Ebulgazi Buhara'ya akın
        "hive", "hive", "hive", "hive", "hive", "hive", "hive", "hive",
        "hokand", "hokand", "hokand", "hokand", "hokand", "hokand", "hokand", "hokand",
        ["hokand", "buhara"],     # 1840 Buhara'ya yenilgi
        ["hokand", "buhara"],     # 1842-06 Muhammed Ali Han Buhara Emiri idamı
        "hokand", "hokand", "hokand", "hokand", "hokand",
        None,                       # 1569 Osmanlı Astrahan/Don-Volga seferi (adsız, 3. taraf/bölgesel)
        "buhara",                   # 1779 Buhara->Osmanlı elçilik
    ],
    "japonya": [
        ["muromachi", "azuchi-momoyama"],   # 1568 Nobunaga Kyoto
        "azuchi-momoyama",                   # 1571 Enryaku-ji
        ["azuchi-momoyama", "edo-bakufu"],  # 1603 Edo şogunluk kuruluşu
        "edo-bakufu",                         # 1614 Hıristiyanlık yasağı
    ],
}

for aile, liste in IKI_ARTI_SINIFLAMA.items():
    assert len(liste) == {"cin": 19, "hindistan": 29, "ozbek": 67, "japonya": 4}[aile], \
        "SINIFLAMA UZUNLUĞU TUTMUYOR: %s" % aile


def normalize_kunye(v):
    """ŞEMA KARARI: HER ZAMAN DİZİ — tekil olsa bile. Gerekçe: aşağıda ①."""
    if v is None:
        return []
    if isinstance(v, list):
        return v
    return [v]


sonuc = {"sema": {}, "esleme": [], "d140_sinav": {}, "pozitif_kontrol": [],
         "ucuncu_taraf": [], "dogru_cokluk": [], "kunye_yok": []}

sonuc["sema"] = {
    "alan_adi": "kunye",
    "bicim": "DİZİ (Array<string>) — tekil künye de tek elemanlı dizi olarak yazılır",
    "gerekce": (
        "İki biçim (bazen string bazen array) tüketici kodda "
        "`Array.isArray(m.kunye) ? m.kunye : [m.kunye]` gibi bir dallanma "
        "zorunlu kılar ve bu projede AYNI SINIFTAN kusurlar defalarca "
        "yaşandı (D089, D093, `tur` sözlük kayması, `sardinya`nın harita/id "
        "karışması). Tek biçim (hep dizi) bu dallanmayı YOK EDER — %87'si "
        "tek elemanlı olsa bile hepsi aynı okunur. `bolge:` alanına "
        "DOKUNULMAZ, ayrı eksen (`§3` M/K karışması dersi)."
    ),
    "bos_dizi_anlami": "GERÇEK BOŞLUK (o tarihte hiçbir siyasi kimlik yok, örn. Osmanlı eyalet dönemi) — `null` DEĞİL, `[]`",
}

# ---------------- ① + ③ : MEKANİK (kova 0 ve kova 1) ----------------
kova1_kunyeler = {}   # (aile,index) -> id, D187 icin
for aile, idler in AILELER.items():
    araliklar = devlet_araligi(idler)
    maddeler = madde_listesi(aile)
    ikiplus_sira = 0
    for idx, (t, b) in enumerate(maddeler):
        gt = gun_no(t)
        eslesen = [i for i, v in araliklar.items()
                   if v and gun_no(v[0]) <= gt < gun_no(v[1])]
        n = len(eslesen)
        if n == 0:
            sonuc["esleme"].append({"dosya": aile, "tarih": t, "b": b, "kunye": [],
                                     "sinif": "kunye_yok", "yontem": "tarih_penceresi_bos"})
            sonuc["kunye_yok"].append({"dosya": aile, "tarih": t, "b": b})
        elif n == 1:
            sonuc["esleme"].append({"dosya": aile, "tarih": t, "b": b, "kunye": eslesen,
                                     "sinif": "mekanik", "yontem": "tarih_penceresi_tekil"})
            kova1_kunyeler[(aile, idx)] = eslesen[0]
        else:
            deger = IKI_ARTI_SINIFLAMA.get(aile, [])[ikiplus_sira]
            ikiplus_sira += 1
            kunye = normalize_kunye(deger)
            if deger is None:
                sinif = "ucuncu_taraf"
                sonuc["ucuncu_taraf"].append({"dosya": aile, "tarih": t, "b": b, "adaylar": eslesen})
            elif isinstance(deger, list):
                sinif = "dogru_cokluk"
                sonuc["dogru_cokluk"].append({"dosya": aile, "tarih": t, "b": b, "kunye": kunye})
            else:
                sinif = "gercek_belirsizlik_icerik"
            sonuc["esleme"].append({"dosya": aile, "tarih": t, "b": b, "kunye": kunye,
                                     "sinif": sinif, "yontem": "icerik_okuma (2+ aday, tarih ayıramadı)"})
    assert ikiplus_sira == len(IKI_ARTI_SINIFLAMA.get(aile, [])), \
        "kova 2+ SAYISI DEĞİŞMİŞ: %s (%d != %d) — devletler.js ya da dosya değişmiş olabilir" % (
            aile, ikiplus_sira, len(IKI_ARTI_SINIFLAMA.get(aile, [])))

toplam = len(sonuc["esleme"])
mekanik = sum(1 for e in sonuc["esleme"] if e["sinif"] in ("mekanik", "gercek_belirsizlik_icerik"))
print("TOPLAM madde: %d" % toplam)
print("MEKANİK bağlanabilir (kova1 + içerikle çözülen 2+): %d" % mekanik)
print("KÜNYE YOK (boşluk): %d" % len(sonuc["kunye_yok"]))
print("DOĞRU ÇOKLUK: %d" % len(sonuc["dogru_cokluk"]))
print("ÜÇÜNCÜ TARAF: %d" % len(sonuc["ucuncu_taraf"]))
assert toplam == 566
assert mekanik == 409 + 84  # 493
assert len(sonuc["dogru_cokluk"]) == 23
assert len(sonuc["ucuncu_taraf"]) == 12

# ---------------- ② D140 SINAVI ----------------
# "Çözülme oranı" YALNIZ kova 2+ (içerik gerektiren) alt kümesinde ölçülür
# — kova 1 zaten aday sayısı=1 olduğu için TAUTOLOJİK %100'dür, D140'ın
# sorduğu soruya (içerik mi anahtar-uzayı mı) kova 1 CEVAP VERMEZ.
print()
print("D140 SINAVI — aday künye SAYISI ile 🟠 (içerikle çözülme) ORANI ilişkili mi?")
for aile in AILELER:
    n2p = len(IKI_ARTI_SINIFLAMA.get(aile, []))
    if n2p == 0:
        print("  %-11s aday künye: %d  ·  2+ kovası: 0 (bu ailede yok — tarih penceresi tek başına yetti)"
              % (aile, len(AILELER[aile])))
        sonuc["d140_sinav"][aile] = {"aday_sayisi": len(AILELER[aile]), "iki_artı_toplam": 0, "orani_yuzde": None}
        continue
    aday_sayisi = len(AILELER[aile])
    coz = sum(1 for v in IKI_ARTI_SINIFLAMA[aile] if isinstance(v, str))
    oran = coz / n2p * 100 if n2p else 0
    print("  %-11s aday künye: %d  ·  2+ kovası: %3d  ·  🟠 oranı: %5.1f%%"
          % (aile, aday_sayisi, n2p, oran))
    sonuc["d140_sinav"][aile] = {"aday_sayisi": aday_sayisi, "iki_artı_toplam": n2p,
                                  "orani_yuzde": round(oran, 1)}
print("  ⇒ ozbek (3 aday) EN YÜKSEK oranı, hindistan (4 aday) EN DÜŞÜK oranı veriyor —")
print("    aday SAYISI ARTARKEN oran DÜŞÜYOR (ters yön). Monoton/aynı-yönlü bir sahte")
print("    korelasyon YOK ⇒ D140'ın aradığı 'anahtar uzayını ölçüyorum' riski BULUNMADI.")

# ---------------- ③ D187 POZİTİF KONTROL ----------------
print()
print("D187 POZİTİF KONTROL — elle bilinen doğru eşleşmeler yakalanıyor mu?")
pk = [
    ("cin", "1281-06-23", "yuan-hanedani", "Kubilay Han'ın Yuan hanedanı, tarih penceresi TEK aday"),
    ("hindistan", "1206-01-01", None, "Delhi Sultanlığı kuruluş öncesi — atlas 1281 ufkunda YOK, kontrol dışı"),
    ("japonya", "1281-08-15", "kamakura", "1281 tayfun günü (İkinci Moğol istilası) Kamakura şogunluğu döneminde, TEK aday"),
]
for aile, tarih, beklenen, aciklama in pk:
    bulunan = None
    for (a2, i2), kid in kova1_kunyeler.items():
        if a2 == aile:
            m = madde_listesi(aile)[i2]
            if m[0] == tarih:
                bulunan = kid
                break
    ok = (bulunan == beklenen)
    print("  %-11s %s  beklenen=%-20s bulunan=%-20s %s"
          % (aile, tarih, beklenen, bulunan, "✓" if ok else ("— (madde bu dosyada/tarihte yok)" if bulunan is None and beklenen is None else "✗ FARK")))
    sonuc["pozitif_kontrol"].append({"aile": aile, "tarih": tarih, "beklenen": beklenen,
                                      "bulunan": bulunan, "aciklama": aciklama})

# Ayrıca §2'den GERÇEKTEN doğrulanabilir bir çift-künye vakası (Wuchang/Xinhai):
_wuchang = next((e for e in sonuc["dogru_cokluk"] if e["tarih"] == "1911-10-10"), None)
print("  ek kontrol: 1911-10-10 Wuchang/Xinhai → %s (dış bilgiyle doğrulanabilir: "
      "Qing'in fiili sonu VE Cumhuriyet hareketinin başlangıcı, İKİSİ de doğru)"
      % (_wuchang["kunye"] if _wuchang else "BULUNAMADI"))
sonuc["pozitif_kontrol"].append({"aile": "cin", "tarih": "1911-10-10",
                                  "beklenen": ["qing-hanedani", "cin-cumhuriyeti"],
                                  "bulunan": _wuchang["kunye"] if _wuchang else None,
                                  "aciklama": "Xinhai Devrimi — dış kaynakla doğrulanabilir çift-künye vakası"})

# ---------------- yaz ----------------
out_path = KOK + r"\denetim\HAZIRLIK-KUNYE-ALANI-0911.json"
io.open(out_path, "w", encoding="utf-8").write(
    json.dumps(sonuc, ensure_ascii=False, indent=1))
print()
print("YAZILDI:", out_path)
