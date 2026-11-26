# -*- coding: utf-8 -*-
"""2s kapisinin MERKEZ (`m:`) kolu — olcum ve IKI YONLU SINAV.

NIYE: 20 Eylul 2026'da 2s kapisinin YER kolundaki `m:` bacagi `m:`yi BOLGE
sanip merkez adini GOVDEDE de ariyordu. `m:` bolge degil, k1/k2 MERKEZININ
ADI (VERI-YAPISI.md:120). Bacak `denetle._2s_merkez_aniyor` ile daraltildi.

Bu betik dort olcutu AYNI boru hattinda kosturur ve secilen olcutu iki yonde
sinar. `denetle.py`yi DEGISTIRMEZ — kendi kolunu kurar, veriyi okur, olcer.

Kosum:
    py denetim/ARAC-DENETIM-KAPI-0920.py           # dort olcutu karsilastir
    py denetim/ARAC-DENETIM-KAPI-0920.py --sina    # iki yonlu sinav (cikis kodu)
"""
import sys, os, io, contextlib, re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, 'arac')
import denetle as D

# ── Sinav sabitleri — OLCUMDEN ONCE yazildi (CLAUDE.md §11: ongoru once) ──
#
# 🔴 SINAVIN BIRIMI (TARIH, YERLESIM) CIFTIDIR — TARIH DEGIL. Sebebi olculdu:
#    ilk yazimda ② tarih biriminde kuruldu ve "1473-08-11 Kelkit BOZULDU"
#    dedi. Bakildi: o tarih DARALTMADAN ONCE DE acikti, cunku ayni gun kirilan
#    Karahisar-i Sarki'nin (m: BOS) maddesi yok. Kelkit'in KENDISI iki olcutte
#    de aciklanmis durumda (A=True, F=True). Yani kusur olcutte degil SINAVIN
#    BIRIMINDEYDI. Bu, denetle.py'nin 121→201 notundaki tuzagin birebir ayni-
#    si: "tarihi acan SUSAN komsulariydi; sinavin kendi birimi kabaydi".
#    ⇒ Bir yerlesimin aciklanip aciklanmadigi, komsusunun susmasindan BAGIMSIZ
#      olcumelidir.
#
# ① Daraltma bu CIFTLERI ACMALI: merkez adi yalniz GOVDEDE geciyor, madde
#    kirilan yeri anmiyor. Elle tek tek bakilarak dogrulandi.
TESADUF = {
    ("1395-08-01", "Beykoz"): "m:İstanbul ← 'Anadolu Hisarı'nın yapımı'",
    ("1517-05-19", "Benhâ (Kalyûbiye)"): "m:Kahire ← 'İskenderiye'nin teslim alınması'",
    ("1543-08-10", "Segedin (Szeged)"): "m:Budin ← 'Estergon ve İstolni Belgrad'ın fethi'",
    ("1795-04-01", "Cübeyl"): "m:Basra ← 'Kuveyt…' / 'Basra körfezi' bileşik tuzağı",
    ("1798-10-23", "Butrint (Butrinto)"): "m:Yanya ← 'Preveze'nin Fransızlardan alınışı'",
}
# ② Daraltma bu CIFTLERI BOZMAMALI: merkez GERCEKTEN aniliyor.
#    Ilk ucu yalniz-baslik olcutunde (B) bozuluyor — bu yuzden sinavda.
KORUNMALI = {
    ("1838-10-13", "Berc Bû Areric"): "m:Cezayir ← 'Setif'in işgali' / yer 'İç Cezayir'",
    ("1871-04-20", "Cübeyl"): "m:Basra ← Midhat Paşa Necid seferi / yer '…, Basra'",
    ("1885-02-05", "Akīk"): "m:Sevâkin ← 'Masavva'nın İtalyan işgali' / yer '…Sevâkin…'",
    ("1878-06-04", "Baf (Paphos)"): "m:Lefkoşa ← 'Kıbrıs'ın…' — yer_id kolu taşıyor",
    ("1473-08-11", "Kelkit"): "m:Erzincan ← 'Otlukbeli Savaşı' / yer 'Erzincan yakını'",
    ("1692-06-05", "Debrecen"): "m:Varad (Oradea) ← 'Varad'ın kaybı'",
}

_CINS = D._2S_CINS


def _kur():
    with contextlib.redirect_stdout(io.StringIO()):
        Y = D.yerlesimleri_yukle()
        O = D.olaylari_yukle()
    Y_cek = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
    ol = []
    for o in O:
        ol.append({
            "g": D.gun_no(o["t"]),
            "nrm": D._2s_norm(" ".join([o.get("b") or "", o.get("yer") or "",
                                        o.get("d") or ""])),
            "nrm_b": D._2s_norm(o.get("b") or ""),
            "nrm_y": D._2s_norm(" ".join([o.get("b") or "", o.get("yer") or ""])),
            "yer_id": o.get("yer_id") or "",
        })
    Y_KOK = {y["ad"]: D._2s_norm(re.sub(r"\s*\(.*?\)", "", y["ad"] or "").strip())
             for y in Y}
    MERKEZ = {y["ad"]: (y.get("m") or "", D._2s_norm(y.get("m") or "")) for y in Y}
    kir = {}
    for y in Y_cek:
        for p in (y.get("s") or []):
            for dd, tip in ((p.get("f"), "kazanc"), (p.get("t"), "kayip")):
                if not dd or dd <= "1281-01-01" or dd >= "1923-10-29":
                    continue
                k = kir.setdefault(dd, {"t": tip, "ad": set(), "sahip": {}})
                k["ad"].add(y["ad"])
                t = k["sahip"].setdefault(y["ad"], {"eski": "", "yeni": ""})
                t["yeni" if tip == "kazanc" else "eski"] = p.get("d") or ""
    return Y, ol, Y_KOK, MERKEZ, kir


def _korumali_gecer(metin, nrm_m):
    for esl in re.finditer(r"(?<![a-z0-9])" + re.escape(nrm_m) + r"(?![a-z0-9])", metin):
        if re.match(_CINS + r"(?![a-z0-9])", metin[esl.end():esl.end() + 24].lstrip()):
            continue
        return True
    return False


def _m_gecer(o, ham, nrm, olcut):
    if not nrm or len(nrm) < 3:
        return False
    if olcut == 'A':                      # bugunku (daraltma oncesi)
        return D._2s_gecer(o["nrm"], nrm)
    if olcut == 'B':                      # yalniz baslik ya da yer_id
        return D._2s_gecer(o["nrm_b"], nrm) or (ham and o["yer_id"] == ham)
    if olcut == 'F':                      # SECILEN — denetle._2s_merkez_aniyor
        if ham and o["yer_id"] == ham:
            return True
        return _korumali_gecer(o["nrm_y"], nrm)
    return False                          # D — bacak kapali


def aciklandi_mi(tarih, ad, olcut, cev):
    """(TARIH, YERLESIM) cifti o olcutte ACIKLANMIS mi — KOMSUSUNDAN BAGIMSIZ.

    Sinavin dogru birimi budur; tarih birimi komsunun susmasini bu yerlesime
    yazar (bkz. TESADUF/KORUNMALI ustundeki not)."""
    Y, ol, Y_KOK, MERKEZ, kir = cev
    if tarih not in kir or ad not in kir[tarih]["ad"]:
        return None                      # cift yok — sinav sabiti bayatlamis
    gd = D.gun_no(tarih)
    yakin = [o for o in ol if abs(o["g"] - gd) <= 30]
    ham, nrm = MERKEZ.get(ad, ("", ""))
    sah = {ad: kir[tarih]["sahip"].get(ad, {})}
    return any(o["yer_id"] == ad
               or D._2s_gecer(o["nrm"], Y_KOK.get(ad, ""))
               or _m_gecer(o, ham, nrm, olcut)
               or D._2s_tarafi_aniyor(o, sah) for o in yakin)


def kos(olcut, cev):
    Y, ol, Y_KOK, MERKEZ, kir = cev
    acik = []
    for dd in sorted(kir):
        gd = D.gun_no(dd)
        yakin = [o for o in ol if abs(o["g"] - gd) <= 30]
        if not yakin:
            acik.append((dd, kir[dd]["t"], sorted(kir[dd]["ad"])[:4], "—", 31))
            continue
        eksik = []
        for ad in sorted(kir[dd]["ad"]):
            sah = {ad: kir[dd]["sahip"].get(ad, {})}
            ham, nrm = MERKEZ.get(ad, ("", ""))
            if not any(o["yer_id"] == ad
                       or D._2s_gecer(o["nrm"], Y_KOK.get(ad, ""))
                       or _m_gecer(o, ham, nrm, olcut)
                       or D._2s_tarafi_aniyor(o, sah) for o in yakin):
                eksik.append(ad)
        if eksik:
            acik.append((dd, kir[dd]["t"], eksik[:4], "—", 31))
    with contextlib.redirect_stdout(io.StringIO()):
        kapsam, disi = D.kapsam_disi(Y, acik)
        yil, son = D.yil_temsili_ayir(kapsam)
    return {'acik': len(son), 'yil': len(yil), 'disi': len(disi),
            'tarihler': {a[0] for a in son}}


def main():
    sina = '--sina' in sys.argv
    cev = _kur()
    R = {k: kos(k, cev) for k in ('A', 'B', 'F', 'D')}

    print('=' * 72)
    print('2s MERKEZ (`m:`) kolu — olcut karsilastirmasi')
    print('=' * 72)
    print('%-42s %6s %6s %6s' % ('olcut', 'ACIK', 'yil', 'disi'))
    print('-' * 62)
    for k, ad in (('A', 'A  eski: baslik+yer+GOVDE'),
                  ('B', 'B  yalniz baslik ya da yer_id'),
                  ('F', 'F  SECILEN: baslik+yer (korumali) | yer_id'),
                  ('D', 'D  bacak tamamen kapali')):
        r = R[k]
        print('%-42s %6d %6d %6d' % (ad, r['acik'], r['yil'], r['disi']))

    print('\nF, A\'ya gore ACTIGI tarih: %d' % len(R['F']['tarihler'] - R['A']['tarihler']))
    print('B\'nin actigi ama F\'nin KORUDUGU: %d  %s'
          % (len(R['B']['tarihler'] - R['F']['tarihler']),
             sorted(R['B']['tarihler'] - R['F']['tarihler'])))
    print('F\'nin actigi ama B\'nin korudugu: %d  (F, B\'nin ALT KUMESI olmali)'
          % len(R['F']['tarihler'] - R['B']['tarihler']))

    if not sina:
        print('\n(iki yonlu sinav icin: --sina)')
        return 0

    print('\n' + '=' * 72)
    print('IKI YONLU SINAV')
    print('=' * 72)
    hata = 0

    print('\n① TESADUFI kapanislar ACILMALI — birim: (tarih, yerlesim) (%d cift):'
          % len(TESADUF))
    for (t, ad), aciklama in sorted(TESADUF.items()):
        onc = aciklandi_mi(t, ad, 'A', cev)
        son = aciklandi_mi(t, ad, 'F', cev)
        if son is None:
            print('   YOK    %s %-22s — cift veride yok, sabit bayat' % (t, ad[:22]))
            hata += 1
            continue
        ok = onc is True and son is False        # once kapali, simdi ACIK
        print('   %s %s %-22s A=%-5s F=%-5s  %s'
              % ('GECTI ' if ok else 'KALDI ', t, ad[:22], onc, son, aciklama))
        if not ok:
            hata += 1

    print('\n② GERCEK kapanislar BOZULMAMALI — ayni birim (%d cift):' % len(KORUNMALI))
    for (t, ad), aciklama in sorted(KORUNMALI.items()):
        onc = aciklandi_mi(t, ad, 'A', cev)
        son = aciklandi_mi(t, ad, 'F', cev)
        if son is None:
            print('   YOK    %s %-22s — cift veride yok, sabit bayat' % (t, ad[:22]))
            hata += 1
            continue
        ok = son is True                          # hala aciklanmis
        print('   %s %s %-22s A=%-5s F=%-5s  %s'
              % ('GECTI ' if ok else 'BOZULDU', t, ad[:22], onc, son, aciklama))
        if not ok:
            hata += 1

    print('\n③ F, B\'nin ALT KUMESI mi (daraltma B\'den daha az zarar veriyor mu):')
    fazla = R['F']['tarihler'] - R['B']['tarihler']
    print('   %s  F\\B = %d' % ('GECTI ' if not fazla else 'KALDI ', len(fazla)))
    if fazla:
        hata += 1

    print('\n④ Tavan denetle.py ile tutuyor mu:')
    ok = R['F']['acik'] == D.BEKLENEN_ACIK_S
    print('   %s  olculen %d · BEKLENEN_ACIK_S %d' % ('GECTI ' if ok else 'KALDI ',
                                                      R['F']['acik'], D.BEKLENEN_ACIK_S))
    if not ok:
        hata += 1
    ok2 = R['F']['yil'] == D.BEKLENEN_2S_YIL_BORC
    print('   %s  yil borc %d · BEKLENEN_2S_YIL_BORC %d' % ('GECTI ' if ok2 else 'KALDI ',
                                                            R['F']['yil'], D.BEKLENEN_2S_YIL_BORC))
    if not ok2:
        hata += 1

    # ═══ ⑤ SINAVIN KENDI SINAVI ═══════════════════════════════════════════
    # CLAUDE.md §11: "yeni denetim IKI YONDE sinanmadan calisiyor sayilmaz".
    # Hep gecen bir sinav hicbir sey kanitlamaz. Burada sinavin YANLIS
    # olcutlerde GERCEKTEN KALDIGINI gosteriyoruz:
    #   A (eski, gevsek) → ① dusmeli (tesadufler hala kapali)
    #   B (yalniz baslik) → ② dusmeli (3 gercek kapanis bozuluyor)
    print('\n⑤ SINAVIN KENDI SINAVI — yanlis olcutte KALMALI:')
    a_bir = sum(1 for (t, ad) in TESADUF
                if aciklandi_mi(t, ad, 'A', cev) is not False)
    print('   %s  A olcutunde ① kalan cift: %d/%d (0 olsaydi sinav kor demekti)'
          % ('GECTI ' if a_bir == len(TESADUF) else 'KALDI ', a_bir, len(TESADUF)))
    if a_bir != len(TESADUF):
        hata += 1
    b_iki = sum(1 for (t, ad) in KORUNMALI
                if aciklandi_mi(t, ad, 'B', cev) is not True)
    print('   %s  B olcutunde ② bozulan cift: %d (3 bekleniyor)'
          % ('GECTI ' if b_iki == 3 else 'KALDI ', b_iki))
    if b_iki != 3:
        hata += 1

    toplam = len(TESADUF) + len(KORUNMALI) + 5
    print('\n' + ('SINAV GECTI — %d madde' % toplam
                  if not hata else 'SINAV KALDI — %d madde basarisiz' % hata))
    return 1 if hata else 0


if __name__ == '__main__':
    sys.exit(main())
