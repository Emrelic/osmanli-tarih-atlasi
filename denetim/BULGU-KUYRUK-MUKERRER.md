# BULGU — BAĞLAMA KUYRUĞUNDA MÜKERRER NOKTA, ve AD DENETİMİNİN KÖR NOKTASI

**Oturum:** OPUS HAZIR KITA 101 · **Tarih:** 2 Eylül 2026
**Tahta:** M-1976 · M-1978 · M-1984 · M-1986 · M-1987 · M-1995 · M-1997 · M-2007
**Durum:** Ölçüm bitti. Aletin `arac/` altına konması KOORDİNATÖRÜN kararı —
dört kez soruldu, cevap gelmedi; iş kaybolmasın diye buraya bırakıldı.

---

## 1. Kusur ne

Aynı gün birden çok oturum, birbirinden habersiz, **aynı coğrafî şeride**
nokta yazdı. Üç turda üç kez tekrarlandı:

```
tur 1   ok101 ↔ ok102   el-Ulâ                    0,045 km   ad AYNI
        ok101 ↔ ok102   Medâin-i Sâlih (el-Hicr)  0,639 km   ad AYNI
tur 2   ok101 ↔ ok107   Hayber                    0,211 km   ad AYNI
        ok102 ↔ ok107   el-Ulâ / "Ulâ (el-Ulâ)"   0,099 km   ad FARKLI  🔴
tur 3   (yeni dosya yok)
```

Üçü de `data/yerlesimler_*.js` içinde, hepsi **bağlanmadan önce** yakalandı.

## 2. 🔴 ASIL BULGU — AD EŞİTLİĞİ YETMİYOR

Dördüncü satır ötekilerden ayrı bir sınıf:

```
ok102   ad:"el-Ulâ"          26,617 / 37,917
ok107   ad:"Ulâ (el-Ulâ)"    26,617 / 37,918      99 METRE
```

`girdi.py`'nin ad çakışması denetimi ve `arac/_sahiplik_uygula.py`'nin
*"ad belirsizse uygulanmaz"* koruması **ikisi de `ad:` alanına bakıyor.**
Farklı dizgi ⇒ **ikisi de göremez.**

Bağlansaydı ne olurdu:

- 99 metre arayla **iki ayrı petek** doğardı
- ikisi de aynı sahiple boyanırdı ⇒ **gözle fark edilmezdi**
- Voronoi tabanı bozulurdu, komşu peteklerin sınırı kayardı
- **hiçbir denetim ötmezdi**

📌 `CLAUDE.md §11`'in Varat/Varad tuzağının **ad değiştirmiş hâli.** Orada
iki kayıt 1 km arayla aynı adı taşıyordu ve ad denetimi yakalayabilirdi;
burada ad farklı ve yakalayan **yok**.

## 3. Niçin bu turda zarar görmedi — ve niçin bu bir yöntem değil

Koordinatör bağlamayı elinde tuttuğu için hiçbiri yayına girmedi. Ama
**yakalayan şey bir denetim değildi**: aynı taramanın tesadüfen
tekrarlanmasıydı. İlk tarama tur 1'i buldu; bir saat sonra *"tek vaka mı"*
diye tekrarlanan tarama tur 2'yi buldu. Tekrarlanmasaydı iki mükerrer
daha kuyrukta bekliyor olacaktı.

> Tesadüf bir yöntem değildir.

## 4. Önerilen kapı

**Bağlanmadan önce**, kuyruktaki bütün dosyalar hem birbirine hem canlı
tabana karşı **`ad:` eşitliği VEYA < 3 km** ölçütüyle taranır.

Aşağıdaki betik bugün dört kez koştu. `arac/_kuyruk_mukerrer.py` diye
konabilir; `girdi.GIRDI_DOSYALARI` ile CANLI/KUYRUK ayrımını kendi yapıyor,
her dosyayı **kendi ad alanından** okuyor (ad alanı yanlışsa o da görünür).

```python
# -*- coding: utf-8 -*-
"""BAGLANMAMIS NOKTA DOSYALARINDA CAPRAZ MUKERRER AVI.
Olcut: `ad:` esitligi VEYA < 3 km. Ikisi de gerekli —
ad tek basina "Ula (el-Ula)" ile "el-Ula"yi KACIRIR (99 m, olculdu)."""
import glob, json, math, os, subprocess, sys
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi

CANLI = set(girdi.GIRDI_DOSYALARI)
adaylar = [y for y in sorted(glob.glob(os.path.join("data", "yerlesimler_*.js")))
           if os.path.basename(y) not in CANLI]

def oku(yol):
    kod = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
           "const k=Object.keys(window).filter(x=>x.startsWith('YERLESIMLER'));"
           "process.stdout.write(JSON.stringify({k:k,v:k.flatMap(x=>window[x]||[])}));"
           % json.dumps(yol))
    r = subprocess.run(["node", "-e", kod], capture_output=True,
                       text=True, encoding="utf-8")
    if r.returncode != 0:
        print("  🔴 OKUNAMADI", yol, r.stderr[:200]); return [], []
    d = json.loads(r.stdout)
    return d["k"], d["v"]

def km(a, b, c, d):
    R = 6371.0
    p1, p2 = math.radians(a), math.radians(c)
    dp, dl = math.radians(c - a), math.radians(d - b)
    h = math.sin(dp/2)**2 + math.cos(p1)*math.cos(p2)*math.sin(dl/2)**2
    return 2 * R * math.asin(min(1.0, math.sqrt(h)))

kume = {}
for y in adaylar:
    k, v = oku(y)
    kume[os.path.basename(y)] = v
    print("  %-34s ad alani=%s  nokta=%d" % (os.path.basename(y), ",".join(k), len(v)))

Y = girdi.yukle(sessiz=True)
n1 = n2 = 0
dosyalar = sorted(kume)
print("\n=== ① KUYRUK DOSYALARI ARASINDA ===")
for i in range(len(dosyalar)):
    for j in range(i + 1, len(dosyalar)):
        for a in kume[dosyalar[i]]:
            for b in kume[dosyalar[j]]:
                if a.get("lat") is None or b.get("lat") is None:
                    continue
                u = km(a["lat"], a["lon"], b["lat"], b["lon"])
                if a.get("ad") == b.get("ad") or u < 3.0:
                    n1 += 1
                    print("  🔴 %-26s [%s]" % (a.get("ad"), dosyalar[i]))
                    print("     %-26s [%s]   %.3f km  ad ayni: %s"
                          % (b.get("ad"), dosyalar[j], u, a.get("ad") == b.get("ad")))
print("  cift:", n1)

print("\n=== ② KUYRUK vs CANLI TABAN ===")
for dos, v in kume.items():
    for a in v:
        if a.get("lat") is None:
            continue
        for b in Y:
            if b.get("lat") is None:
                continue
            u = km(a["lat"], a["lon"], b["lat"], b["lon"])
            if a.get("ad") == b.get("ad") or u < 3.0:
                n2 += 1
                print("  🔴 %-26s [%s]  ↔  %-26s [%s]  %.3f km"
                      % (a.get("ad"), dos, b.get("ad"), b.get("_kaynak"), u))
print("  cift:", n2)
sys.exit(1 if (n1 or n2) else 0)
```

### Sınama durumu — dürüst beyan

```
🟢 ATEŞLEME  dört kez koştu, üç kez GERÇEK mükerrer buldu (biri ad
             denetiminden kaçan). Dört ayrı kusur satırı da basıldı.
🟡 GEÇME     "kusur yokken temiz der mi" — kuyrukta HER ZAMAN en az bir
             çift olduğu için TEMİZ hâli hiç gözlenmedi. `§11`in
             *"iki yönde de sınanmadan çalışıyor sayılmaz"* kuralı
             gereği: BU DAL SINANMADI. Sahte bir kuyruk dizini ile
             zorlanmalı. ÖLÇMEDİM, uydurmuyorum.
🔴 ÇIKIŞ KODU  eklendi (1 = mükerrer var) ama bir kapıya BAĞLANMADI.
```

## 5. Bu turda çözülenler ve açık kalan

```
🟢 ok101 ↔ ok102  el-Ulâ · Medâin-i Sâlih   ok102'de kaldı, ok101 düşürdü
                  (yatay konuşma, OPUS 102 onayı M-1981)
🟢 ok101 ↔ ok107  Hayber                     ok107'de kaldı, ok101 düşürdü
                  (M-1984/M-1995 · cevap gelmedi, ama silmeden ÖNCE
                   ok107'nin kaydının durduğu ÖLÇÜLDÜ ⇒ tek yönlü silme
                   güvenliydi, geriye tam bir kayıt kaldı)
🔴 ok102 ↔ ok107  el-Ulâ / "Ulâ (el-Ulâ)"    AÇIK — iki taraf da canlı
                  (M-2001…M-2006) ama cevap vermiyor. Koordinatöre
                  M-2007 ile taşındı.
```

⚠️ **Karar verilirken hangi tarafın sileceği AÇIKÇA yazılmalı.** İkisi
birden silerse nokta tamamen kaybolur ve **hiçbir denetim ötmez** —
"eksik nokta" arayan bir nöbetçi yok.

## 6. Ölçülmemiş olan

- Kapının nereye bağlanacağı (yayın kapısı mı, bağlama anı mı) — **ölçmedim.**
- `denetim/` ve `oturumlar/` dışındaki dosya türlerinde (kronoloji, künye)
  aynı sınıfın olup olmadığı — **bakmadım**, yalnız yerleşim dosyaları tarandı.
- Geçme yolu (yukarıda).
