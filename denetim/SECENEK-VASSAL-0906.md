# `v:` (TÂBİ) KATMANI — SEÇENEKLER, ÖLÇÜLMÜŞ ZEMİN ÜZERİNE

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · KARAR EMRE'NİN.**
> Ölçüm canlı veriden (`data/yerlesimler*.js`, her dosya ayrı vm bağlamı).

---

## ① ZEMİN — `v:` bugün NE TAŞIYOR (ölçüldü, varsayılmadı)

```
`v:` taşıyan KAYIT : 367
`v:` DÖNEM toplam  : 429
alanlar            : f 429 · t 429 · k 373 · enklav 1
`k` alanının cinsi : STRING (373/373) — sayı değil, SERBEST METİN
`k` içinde farklı değer : 40
```

**En sık `k` değerleri:**
```
74  Mısır (Kavalalı)              16  Eflak Voyvodalığı
54  Kavalalı hânedanı             12  Boğdan Voyvodalığı
41  Cezayir Ocaklığı (dayı)       11  Osmanlı hükümranlık iddiası
39  Trablusgarp Ocaklığı           9  Mekke Şerifliği
30  Mısır (İbrahim Paşa)           7  Bulgaristan Prensliği
```

### 🔴 Buradan çıkan üç somut kusur

```
① KÜNYE BAĞI YOK    `k` bir metin; künye `id`si DEĞİL.
                    ⇒ renk yok · dizin kaydı yok · `denetle.py`
                      "bu devlet o tarihte yaşıyor mu" diye SORAMAZ
② EŞANLAM ÇOKTAN DOĞMUŞ
                    "Mısır (Kavalalı)" 74 + "Kavalalı hânedanı" 54
                    = 128 dönem, AYNI ŞEY, İKİ YAZIM
                    ⇒ `CLAUDE.md`nin eşanlam borcunun ② ekseni
③ 56 DÖNEMDE `k` YOK  (429 − 373) — tâbi ama kimin tâbisi belirsiz
```

📌 Ve `CLAUDE.md`nin kendi dersi bunu tam tarif ediyor: *"bir ders veriye
SERBEST METİN olarak inerse, inmiş sayılmaz — `grep` onu 'uygulanmış'
gösterir."* Sınavı tek soru: ***bu bilgiyi bir `if` ile sorabiliyor
muyum?*** Bugün **hayır**.

### VE İKİNCİ KUSUR: `v:` YALNIZ OSMANLI'YA AÇIK
Motor `v:`yi Osmanlı tâbi katmanı olarak çiziyor. Bir İngiliz ya da
Fransız himayesi bu katmanla **ifade edilemiyor**. Ölçülen sonucu:
20 künye metropol kimliğine dönüşüyor (~1.890 nokta-yıl), 3 künye
bağımsız gibi görünüyor, ve Mısır'daki 5 çakışma **tam bu yüzden** var.

---

## ② SEÇENEKLER — dördü de gerçek, maliyetleri farklı

### 🅐 DOKUNMA
Bugünkü hâl korunur.
```
🟢 maliyet 0
🔴 40 serbest metin · 128 dönemlik eşanlam çifti · renk yok · dizin yok
🔴 Mısır çakışması (5 kayıt) ÇÖZÜLMEZ, kalıcı olarak açık kalır
🔴 FAZ 2/3'te İngiliz-Fransız himayeleri yine metropol adıyla yazılır
```

### 🅑 `k`'YE KÜNYE BAĞI EKLE — *en ucuz gerçek çözüm*
`v:` dönemine `kid:"kavalali"` gibi bir **künye id** alanı eklenir;
görünen ad `k`'de kalır.
```
🟢 SALT EKLEME — hiçbir mevcut alan değişmez, hiçbir kayıt bozulmaz
🟢 40 metin → ~30-35 künye eşlemesi; eşanlam çifti YAPISAL olarak biter
🟢 tâbi gövde kendi RENGİNİ ve DİZİN kaydını kazanır
🟢 `denetle.py` tâbi kimliğin ömrünü DENETLEYEBİLİR (bugün soramıyor)
🔴 373 dönem eşlenecek · eşi olmayan künyeler AÇILACAK
🔴 motor `kid:`i okuyup boyayana kadar veri var, görüntü yok (bir koşu)
```

### 🅒 `v:`Yİ GENELLEŞTİR — *asıl çözüm, ve pahalı olan*
`v:` Osmanlı'ya özel olmaktan çıkar: dönem hem **metbû** (üstteki devlet)
hem **tâbi** kimliği taşır.
```
🟢 İngiliz/Fransız/Rus himayeleri AYNI katmanla yazılır
🟢 Mısır · Hadramut · Agadez · 20 sömürge künyesi TEK modelle çözülür
🟢 Emre'nin "işgal/himaye haritada belli olsun" isteğinin tam karşılığı
🔴 MOTOR İŞİ: `uret_petek.py` iki kimlikli gövde çizmeli
🔴 `denetle.py`nin `Değişmez 3` ve `2i` kolları gözden geçirilmeli
🔴 429 dönemin metbûu da yazılacak (bugün "Osmanlı" varsayılıyor)
```

### 🅓 YALNIZ DİZİN — çizme, ama kaydet
`kid:` eklenir ama harita **boyamaz**; yalnız panel/dizin gösterir.
```
🟢 🅑'nin yarısı maliyet · motor hiç değişmez
🔴 haritada hiçbir şey değişmez ⇒ Emre'nin görsel isteğini KARŞILAMAZ
```

---

## ③ ÖNERİM — 🅑 ŞİMDİ, 🅒 HEDEF

🅑 **salt ekleme** olduğu için risksiz ve geri alınabilir; tek başına
üç kusurun **ikisini** (künye bağı, eşanlam) kapatır ve tâbi gövdeleri
renklendirilebilir yapar. 🅒'nin ön koşulu da zaten 🅑'dir: metbû/tâbi
ayrımı yazılmadan önce **tâbi kimliğin künyesi olmalı**.

⚠️ Ve bir uyarı: 🅒'ye doğrudan gitmek cazip görünüyor ama `v:`nin bugün
429 dönemi var ve hepsi **metbûu Osmanlı varsayıyor**. Genelleştirme,
o varsayımı 429 yerde açığa çıkarmak demek — bu, 🅑'nin eşleme işini
zaten içeriyor. ⇒ **Sıra atlanamaz.**

## ④ ÖLÇMEDİĞİM
- 40 metnin kaçının künyesi **zaten var**, kaçının **açılması gerek**
  (eşleme denenmedi — 🅑'nin gerçek maliyeti budur ve BİLİNMİYOR)
- motorun `v:`yi nasıl boyadığı (`uret_petek.py` okunmadı)
- 🅒'nin `Değişmez 3` üzerindeki etkisi
