# -*- coding: utf-8 -*-
"""BAYAT YAMA KAPISI — `_sahiplik_uygula.py`nin yazmadan önceki ŞART kapısı.

═══ NİÇİN VAR ═══
6 Ekim 2026 ölçümü (`denetim/YALAN-DAMGA-YERYAMA-1006.md`): araç `data/yer_yama*.js`i
GLOB ile okuyor ve glob, çoktan İNMİŞ yamaları da görüyor. Kuru koşu 177 kayıt
değiştirecekti; **174'ünde** yamanın yazacağı dizi O KAYDIN geçmişinde zaten bir kez
vardı ve sonradan değiştirilmişti ⇒ `--yaz` o sonraki düzeltmeleri SESSİZCE geri
alacaktı (63'ü kaynaklı dönem siliyordu, 93'ü `kid:`li tâbi dönemi).

═══ SORU ═══
Her değişim için, yamanın yazacağı her `d/s/v/isg` dizisi:
    O KAYDIN satır geçmişinde (`git log -L i,j:dosya`) bir sürümde VAR mıydı?
        evet + bugün yok  ⇒ BAYAT: yama bir kez inmiş, kayıt sonra düzeltilmiş.
        hayır             ⇒ TAZE: yazılabilir.
Ölçülemeyen her durum (git yok · depo değil · dosya kirli · aralık HEAD'de yok ·
git hata verdi) bir `KapiOlcemedi` istisnasıdır — çağıran KOŞMAZ.
`ölçülemedi ≠ temiz` (CLAUDE.md §11).
"""
import os
import re
import subprocess
from concurrent.futures import ThreadPoolExecutor

ALANLAR = ("d", "s", "v", "isg")


class KapiOlcemedi(Exception):
    """Kapı soruyu SORAMADI — araç koşmamalı."""


def dilim(metin, alan):
    """Kayıt metnindeki ÜST SEVİYE `<alan>:[ … ]` dizisi (tırnak/kaçış farkında); yoksa None."""
    rx = re.compile(r'(?<![\w"])%s:\s*\[' % alan)
    # dizge içindeki eşleşmeleri atla
    for m in rx.finditer(metin):
        q = esc = False
        for k in range(m.start()):
            c = metin[k]
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                q = not q
        if q:
            continue
        i, der, q, esc = m.end() - 1, 0, False, False
        for k in range(i, len(metin)):
            c = metin[k]
            if esc:
                esc = False
                continue
            if c == "\\":
                esc = True
                continue
            if c == '"':
                q = not q
                continue
            if q:
                continue
            if c == "[":
                der += 1
            elif c == "]":
                der -= 1
                if der == 0:
                    return metin[i:k + 1]
        return None
    return None


def norm(s):
    """Biçim farkını sil: boşluk ve tırnaklı anahtar (`"f":` ↔ `f:`)."""
    s = re.sub(r'"([A-Za-z_]\w*)"\s*:', r"\1:", s)
    return re.sub(r"\s+", "", s)


def _git(kok, *arg):
    try:
        p = subprocess.run(["git"] + list(arg), cwd=kok, capture_output=True)
    except OSError as e:
        raise KapiOlcemedi("git çalıştırılamadı: %s" % e)
    return p


def hazirlik(kok):
    """Kapının soruyu sorabilir olduğunu sına; soramıyorsa KapiOlcemedi."""
    p = _git(kok, "rev-parse", "--is-inside-work-tree")
    if p.returncode != 0 or p.stdout.decode().strip() != "true":
        raise KapiOlcemedi("git deposu değil: %s" % kok)


def _kirli_mi(kok, dosya_yol):
    p = _git(kok, "diff", "--quiet", "HEAD", "--", dosya_yol)
    if p.returncode not in (0, 1):
        raise KapiOlcemedi("git diff hata: %s" % p.stderr.decode("utf-8", "replace")[:200])
    return p.returncode == 1


def _gecmis(kok, dosya_yol, i, j):
    """Aralığın satır geçmişi: [(kısa_hash, gün, '+' satırlarının birleşimi)]."""
    p = _git(kok, "log", "-L", "%d,%d:%s" % (i, j, dosya_yol), "--format=@@C %h %cs")
    if p.returncode != 0:
        raise KapiOlcemedi("git log -L %d,%d:%s → %s" % (
            i, j, dosya_yol, p.stderr.decode("utf-8", "replace").strip()[:200]))
    surum, cur = [], None
    for ln in p.stdout.decode("utf-8", "replace").splitlines():
        if ln.startswith("@@C "):
            parca = ln[4:].split(" ")
            cur = [parca[0], parca[1] if len(parca) > 1 else "", []]
            surum.append(cur)
        elif cur is not None and ln.startswith("+") and not ln.startswith("+++"):
            cur[2].append(ln[1:])
    if not surum:
        raise KapiOlcemedi("git log -L %d,%d:%s hiç sürüm döndürmedi" % (i, j, dosya_yol))
    return [(h, g, norm("".join(p))) for h, g, p in surum]


def bayat_mi(kok, dosya_yol, i, j, eski, yeni):
    """Tek değişim için: [(alan, [(hash, gün), …])] — boşsa TAZE."""
    gec = None
    out = []
    for alan in ALANLAR:
        y, e = dilim(yeni, alan), dilim(eski, alan)
        if not y or (e is not None and norm(y) == norm(e)):
            continue
        if gec is None:
            gec = _gecmis(kok, dosya_yol, i, j)
        ny = norm(y)
        isabet = [(h, g) for h, g, metin in gec if ny in metin]
        if isabet:
            out.append((alan, isabet))
    return out


def tara(kok, degisimler, is_parcacigi=6):
    """degisimler: [{"ad", "dosya_yol" (köke göre), "i", "j" (1 tabanlı), "eski", "yeni"}]
    Dönüş: [(ad, dosya_yol, i, [(alan, [(hash, gün)])])] — yalnız BAYAT olanlar.
    Ölçülemeyen tek bir kayıt bile KapiOlcemedi fırlatır (kısmi temiz yok)."""
    hazirlik(kok)
    kirli = sorted({d["dosya_yol"] for d in degisimler if _kirli_mi(kok, d["dosya_yol"])})
    if kirli:
        raise KapiOlcemedi("hedef dosya COMMİTLENMEMİŞ değişiklik taşıyor, satır geçmişi "
                           "güvenilir değil: %s" % ", ".join(kirli))

    def bir(d):
        return d, bayat_mi(kok, d["dosya_yol"], d["i"], d["j"], d["eski"], d["yeni"])

    with ThreadPoolExecutor(is_parcacigi) as ex:
        sonuc = list(ex.map(bir, degisimler))
    return [(d["ad"], d["dosya_yol"], d["i"], b) for d, b in sonuc if b]
