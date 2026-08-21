# BULGULAR — ÖRTME (occlusion) + DÖRDÜNCÜ SINIF UYGULAMASI (2026-08-21)

Koordinatörün çağrısı: dördüncü sınıfın çaresini uygula (§②, koşu kilidi
kalktığında) + Emre'nin yeni yön-dilimi (occlusion) kuralını aynı hesabın
içine kur (§③). Öngörü ölçümden ÖNCE yazıldı ve commit edildi
(`denetim/ongoru_ortme.py`, commit `3512ecc`). Bu belge o öngörünün karnesi
+ uygulanan kodun özeti.

`arac/uret_petek.py`yi ÇALIŞTIRMADIM (koşuyu koordinatör tetikler) — kod
DEĞİŞTİRİLDİ, ölçüm yine `arac/girdi.py` üzerinden salt-okuma replika ile
yapıldı (scratchpad `ortme_olcum.py` + `ortme_olcum2.py`).

---

## 1 · UYGULANAN KOD — `arac/uret_petek.py`

### ① Sabit — dilim genişliği ayarı (Emre'nin istediği gibi)
```python
ORTME_DILIM_SAYISI = 12   # 30°/dilim
```

### ② Dördüncü sınıf eklendi (`_dolgu_kumesi`, kabul şartına üçüncü OR dalı)
```python
_dordurcu = bool((y.get("kur") and y["kur"] > a)
                  or (y.get("bit") and y["bit"] <= a))
if (y.get("bos") in DOLDURULABILIR_BOS
        or (y.get("tur") == "bolge"
            and y.get("bos") in (None, "", "devletsiz"))
        or _dordurcu):
    bos_ix.append(j)
```

### ③ Örtme eklendi (puan matrisi kurulduktan, toplama girmeden ÖNCE)
Bearing (yön açısı) hesaplanır, çevre `ORTME_DILIM_SAYISI` dilime bölünür,
her dilimde YALNIZ en yakın sahip nokta puanı canlı kalır — devleti ne
olursa olsun. `numpy` ile tam vektörize (dilim sayısı kadar döngü, 12 —
sahip/bos sayısına bağlı değil).

---

## 2 · ÖNGÖRÜ KARNESİ — `denetim/ongoru_ortme.py`, 384/1536 gün örneklem (%25)

```
O1  🔴 ÇÜRÜDÜ (yön bile yanlış)  mevcut kapı (C): kapanabilir 482→527 (+9,3%)
O2  🟡 KISMEN ÇÜRÜDÜ (yön doğru, büyüklük küçük)  dördüncü sınıf (D4):
                                 kapanabilir 31.126→29.651 (−4,7%)
O3  🔴 ÇÜRÜDÜ (mazeretsiz)       D4 çekişmeli +33,0% · C çekişmeli −67,2%
                                 (TERS YÖN — tek bir "artar" hükmü yanlıştı)
O4  🟢 TUTTU                    Nâsıriye HAM 41-18 (koordinatörle BİREBİR) ·
                                 örtmeli N=8→16-4 · N=12→24-4 · N=24→29-8 ·
                                 ÜÇÜNDE DE OSMANLI kazandı
O5  🟢 TUTTU (mazeretsiz)       N=8/12/24 düşüş −7,3/−4,5/−2,2%, MONOTON,
                                 oran 3,3× (istenen ≥1,5×)
O6  ⚪ ÖLÇMEDİM                  maliyet artışı ayrıştırılmadı
O7  🟢 TUTTU                    en büyük devlet payı %5,9 — global kaldı
```

**En değerli çürüme O1 + O3:** ikisi de "mevcut kapı (C) ile dördüncü sınıf
(D4) örtmeye AYNI yönde tepki verir" varsayımına dayanıyordu — İKİSİ DE
YANLIŞ. C havuzu (bos:hata/tur:bolge — ıssız çöl dolgu noktaları) örtmeden
sonra kapanabilir sayısını ARTIRIYOR ve çekişmeliyi AZALTIYOR; D4 havuzu
(gerçek şehir/liman/kale, henüz kurulmamış/yok olmuş) beklenen yönde
(kapanabilir azalıyor, çekişmeli artıyor) ama beklenenden çok küçük
büyüklükte tepki veriyor.

**Olası açıklama (ölçülmedi, çıkarım):** C sınıfı noktalar seyrek/ıssız
bölgelerde (Sahra, Rub'ul Hâlî) — birkaç sahip noktası VAR ve büyük açı
aralıklarına yayılmış, örtme NADİREN iki noktayı aynı dilime düşürüyor;
düştüğünde ise genelde tam ÇEKİŞMEYİ BOZAN marjinal puanı siliyor (beraberliği
bozup tek kazanan çıkarıyor). D4 sınıfı ise gerçek yerleşim yoğun
bölgelerde, çok sayıda sahip noktası aynı dilimlere yığılıyor, örtme daha
sık iş görüyor ama etkisi (kapanabilirden düşme) beklenenden küçük çıktı —
muhtemelen 200km-içi TEK NOKTA (4p, tek başına eşiği geçen) kayıtların
payı büyük ve onlar örtmeden ETKİLENMİYOR (§ öngörü O1 gerekçesi).

---

## 3 · NÂSIRİYE — doğrulama, tek gün, örneklem dışı direkt test

```
1703-08-22, index 655, kur:1869-01-01, tur:sehir, bos:None
HAM (örtmesiz)     OSMANLI 41 · safevi 18   (koordinatörün M-0873'teki
                                              rakamıyla BİREBİR)
ÖRTME N=8          OSMANLI 16 · safevi  4
ÖRTME N=12         OSMANLI 24 · safevi  4
ÖRTME N=24         OSMANLI 29 · safevi  8
```
Üçünde de OSMANLI kazanıyor — Basra-Bağdat boşluğunun kapanması KORUNUYOR,
örtme yalnız marjı daraltıyor.

---

## 4 · ÖLÇMEDİM — açıkça

```
· Tam gün ızgarası (1536) — bu tur %25 örneklemle ölçüldü, zaman kısıtı.
· O6 — örtme hesabının baseline'a eklediği kesin süre yüzdesi.
· _kusatilmis(g) etkisi — geometri gerektiriyor (BULGULAR-DORDUNCU.md §5'te
  aynı sınır zaten yazılıydı, burada da geçerli).
· Gerçek koşuda km² olarak ne kadar alan değişeceği — geometri ister.
```

---

## ÖZET — sayıyla

```
uygulanan kod          3 blok: ORTME_DILIM_SAYISI sabiti · dördüncü sınıf
                        (_dordurcu OR dalı) · örtme maskesi (bearing+dilim)
                        arac/uret_petek.py — SALT KOD, koşulmadı
öngörü karnesi          7 kalemden 3 tuttu (O4·O5·O7), 1 ölçülmedi (O6),
                        3 çürüdü (O1·O2·O3) — en değerlisi O1/O3 (yön yanlış)
Nâsıriye                doğrulandı, OSMANLI kazanıyor (41-18 → 24-4)
örneklem                384/1536 gün (%25), açıkça söylendi
```
