# BULGU — TASNİF · 174 sınıflanmamış madde

**Oturum:** TASNİF · **Tarih:** 28 Ağustos 2026
**Şartname:** `oturumlar/TASNIF.md` + `oturumlar/ORTAK-PAKET-KURALLARI.md`
**Çıktı:** `denetim/HUKUM-TASNIF.json` (174 madde) + bu dosya
**Yetki:** `CEVAP.json`a dokunulmadı · `arac/*.py` kilidine uyuldu

---

## 0. Sayılar

```
174 madde  →  sirada 129 · olculecek 41 · tekrar 4
benzersiz not 161      ⇐ gerçek ölçüm sayısı, 174 değil
tekrarlayan not grubu 8 (21 madde) — bir ölçüm, çok madde
ölçülen tekil madde 8  ·  küme ataması 166
```

⚠️ **Ölçülen ile atanan ayrıdır** ve hüküm notlarında damgalıdır:
küme ataması işin **kime gideceğini** söyler, kusurun **gerçek olduğunu
söylemez.**

---

## 1. 🟠 ANA BULGU — üç kovaya sığmayan DÖRDÜNCÜ kova

Şartname üç kova veriyor: 🟢 KAPANMIŞ · 🔵 KÜMEYE GİT · 🔴 YENİ İŞ.
Ölçtüm, **17 madde üçüne de sığmıyor**:

> **🟠 İŞ TARİF EDİLMİŞ, KÖK BULUNMUŞ — AMA DURMUŞ.**

Ne kapanmıştır (iş yapılmadı), ne yeni iştir (zaten tarif edilmiş), ne de
kümeye gider (kök zaten bulunmuş). Ve üç **alt-cinsi** var — üçü de
`sirada`da aynı görünür ama **çareleri farklı**:

| alt-cins | sayı | çare |
|---|---|---|
| **① çare yazıldı, uygulanmadı** | 7 | dakikalar — yalnız elle uygulama |
| **② sevk edildi, oturum düştü** | 8 | **yeniden sevk**, yeniden ölçüm değil |
| **③ rapor/tasarım var, kod yok** | 2 | gerçek iş, ama sıfırdan araştırma değil |

### ① Çare yazıldı, uygulanmadı (7)

En keskini **`p0002/H-0025`** — notu *"Koşu biter bitmez **YAZILACAK**"*
diyor. **Üç koşu geçti.**

M-1385'in istediği resmî aletle yeniden ölçtüm:
```
py arac/_yer_ara.py "Bağdat"
TABAN: 2607 nokta · 56 girdi dosyası (girdi.GIRDI_DOSYALARI)
Bağdat: ilhanli · celayirli · karakoyunlu · akkoyunlu · safevi ·
        d:OSMANLI · safevi · d:OSMANLI · ingiltere
🔴 `timurlu` HÂLÂ YOK
```
Ötekiler: `p0004/H-0003` (Cem Sultan maddesi) · `p0004/H-0011` (başkent
yıldızı) · `pe0030/H-0001` (*"OKUDUM AMA UYGULAMADIM — dürüstçe"*) ·
`pe0030/H-0010` (iki çare sunulmuş) · `pe0032/H-0009` · `pe0034/H-0020`.

### ② Sevk edildi, oturum düştü (8) — 🔴 en pahalısı

İki kayıt bunu **açıkça** yazıyor:
> *"MOTOR EPOK'a sevk edildi (M-1186), **oturum ÖLÜ, okunmadı**"*
> — `pe0030/H-0007` (Çimpe, Saroz'un kuzeyi) · `pe0030/H-0018` (üçgen gösterim)

Öteki altısı GÖRSEL ARAŞTIRMA'ya sevk edilmiş: `pe0028/H-0001` ·
`pe0028/H-0003` · `pe0028/H-0007` · `pe0029/H-0002` · `pe0029/H-0003` ·
`pe0029/H-0007`.

> ⚠️ **Bunlar kimseyi beklemiyor — beklediği oturum artık yok.**
> Sevk kaydı bir teslim gibi okunuyor, oysa teslim edilmemiş.

### ③ Rapor/tasarım var, kod yok (2)

`pe0023/H-0003` — Kutsal İttifak rozeti: commit `d9b255e`'nin **kendi
mesajı** *"KOD YAZILMADI"* diyor. `pe0030/H-0014` — *"RAPOR GELDİ, HENÜZ
İŞLENMEDİ"*.

📌 Bu kova, koordinatörün *"156 madde niçini yazılmadığı için öksüz
kalmış"* ölçümünün kardeşi — ama daha kötüsü: **bunların niçini yazılmış.**
Yazılı olması, yapılmasını sağlamamış.

---

## 2. Kapsam — 174 madde ama 174 iş değil

Notları normalize edip kümeledim: **161 benzersiz not.** Sekiz grupta aynı
ölçüm birden çok maddeyi kapsıyor:

```
5 madde  pe0008/H-0009·0010·0011·0012·0014   "1281 BOŞLUKLARI"
3 madde  p0002/H-0014 · pe0016/H-0004·0005    "ADA KURALI / KARA-KISITLI"
3 madde  p0006/H-0007·0008·0010               "ENKLAV — iki anakronik kayıt"
2'şer    pe0019 (H-0001/0003 · 0018/0019 · 0022/0025 · 0041/0062 · 0077/0078)
```
⇒ Bu 21 maddeyi tek tek işlemek **21 iş**, grup olarak **8**.

---

## 3. Küme dağılımı (166 madde, puanlamalı atama)

| küme | sayı |
|---|---|
| sahiplik-teyidi | 41 |
| emilme | 33 |
| renk-kimlik | 16 |
| cizim-geometri | 11 |
| degismez2 | 9 |
| hareket-tipoloji | 6 |
| etiketleme | 4 |
| icerik-talebi | 2 |
| koridor-agi | 1 |
| **ARTIK** (işaret yok) | **51** |

🔴 **`hareket-tipoloji` 6 maddesi ölçülmeden sevk edilmemeli.**
`CLAUDE.md §11` yazıyor: *"HAREKET tipolojisi — 9 tür · 9 glif · 9 katman ·
dinamik lejant, commit `591a5c6`"*. İstenen şey **zaten var** olabilir.

⚠️ **ARTIK 51:** notları anlatı üslubunda, hiçbir anahtar işaret taşımıyor —
koordinatörün *"makine desenle ayıramadı"* teşhisi doğru. Bunların hükmü
`olculecek` ve notlarına **notun özü** kondu ki bir sonraki okuyan sıfırdan
başlamasın.

---

## 4. Doğrulanan commit'ler — hiçbiri hayalî değil

Notlarda anılan 15 commit `git show` ile sınandı, **on beşi de gerçek**:

| commit | tarih | ne |
|---|---|---|
| `591a5c6` | 30 Tem | hareket tipolojisi (`js/app.js`) |
| `5a90515` | 19 Ağu | ARGOLID — ada peteği anakarayı boyuyordu |
| `9777657` | 18 Ağu | `kur:`/`bit:` körlüğü, **üç hüküm geri alındı** |
| `073df09` | 20 Ağu | dört araştırma dosyası + İran hayaleti |
| `cb24187` | 23 Ağu | üç reçete + Debrecen |
| `d9b255e` | 24 Ağu | İTTİFAK tasarımı — **"KOD YAZILMADI"** |
| `e53c86a` | 27 Ağu | taralı alan kökü |

---

## 5. Ölçülen tekil maddeler (8)

| madde | hüküm | ölçüm |
|---|---|---|
| `p0002/H-0025` | sirada 🟠① | `timurlu` Bağdat'ta yok — resmî aletle doğrulandı |
| `p0007/H-0008` | sirada 🟠① | `kirim` 1783 sonrası **4 kayıt** duruyor: Soçi · Tuapse · Maykop · Yedisan |
| `p0006/H-0001` | sirada | **(a) KAPANDI** — Katîf'ten `iran` gitmiş; (b)(c) açık |
| `pe0023/H-0011` | olculecek | **notu çürüdü** — dördü de aynı zincirde; ama şikâyet *kaynak*tı, onu ölçmedim |
| `p0003/H-0008` | tekrar | `p0002/H-0025` ile birebir aynı |
| `p0003/H-0022` | tekrar | `p0003/H-0015`'te ölçülmüş |
| `pe0031/H-0020` | tekrar | `pe0031/H-0018`'de kapanıyor (`07c33b2`) |
| `pe0019/H-0047` | tekrar | `pe0019/H-0045` ile aynı sınıf |

---

## 6. Ölçmediklerim — açıkça

- **166 maddenin 166'sı tek tek ölçülmedi.** 8'i ölçüldü, gerisi küme
  ataması. Hüküm notlarının **hepsinde** bu damga var.
- **ARTIK 51 maddesinin kümesi belirlenmedi** — `olculecek` olarak
  bırakıldı, notlarına özleri kondu.
- **Hiçbir görsel açılmadı.**
- **Sekiz tekrarlayan grubun içeriği ölçülmedi** — yalnız aynı oldukları
  gösterildi (1281 boşlukları · ADA KURALI · ENKLAV vb.).
- **② kovasındaki 8 maddenin sevk edildiği oturumların gerçekten ölü olup
  olmadığı** doğrulanmadı; notların beyanına dayanıyor.
> 🟢 Bu maddede bir açık bırakmıştım (*"dört `kirim` kaydını resmî aletle
> sınamadım"*) ve **kapattım** — `py arac/_yer_ara.py "Soçi" "Tuapse"
> "Maykop" "Yedisan"`, taban 2607 nokta / 56 dosya:
> ```
> Soçi (Sâşe)       kirim 1441-01-01 → 1829-09-14   🔴 +46,4 yıl
> Tuapse            kirim 1441-01-01 → 1829-09-14   🔴
> Maykop (Çerkezya) kirim 1441-01-01 → 1829-09-14   🔴
> Yedisan bozkırı   kirim 1502-03-01 → 1792-01-09   🔴 +8,7 yıl
> ```
> Dördü de duruyor; hüküm ayakta. Kırım Hanlığı **1783-04-19**'da sona
> erdi, bu dört kayıt onun ötesine uzanıyor.
