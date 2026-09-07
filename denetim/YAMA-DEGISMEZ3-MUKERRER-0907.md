# MÜKERRER 3 ÇİFT — HÜKÜM ve YAMA · `DEGISMEZ3-0907`

> 🔒 `arac/denetle.py` koordinatörün kalemi · `data/` donuk.
> **Hüküm verildi, yama hazırlandı, UYGULANMADI.**

## HÜKÜM: 3'ÜN 3'Ü DE ÖLÇÜT UYUMSUZLUĞU — hiçbiri mükerrer değil
```
Antep'in kurtuluşu   — Fransızların şehri boşaltması   1921-12-25
Tarsus'un kurtuluşu  — Fransızların şehri boşaltması   1921-12-27
Adana'nın kurtuluşu  — Fransızların şehri terketmesi   1922-01-05
```
**Üç AYRI ŞEHİR, üç AYRI GÜN.** Aynı süreç (Ankara Antlaşması sonrası
Fransız tahliyesi) ama ayrı olaylar. Ölçütü tetikleyen şey **başlık
şablonunun aynı olması** — `kurtuluşu` · `fransızların` · `şehri` ·
`boşaltması` kelimeleri ortak, Jaccard 0,43-0,67.

⇒ Üçü de `BILINEN_AYRI` kümesine girmeli. Aletin kendi çıktısı zaten
bunu söylüyor: *"→ gerçekten ayrı olaylarsa `BILINEN_AYRI` kümesine ekle"*.

## 🔴 ÖNGÖRÜM ÇÜRÜDÜ — VE MAZERETİM KENDİ ŞARTIYLA DÜŞTÜ
```
ÖNGÖRÜ (çiftleri GÖRMEDEN): "3'ün en az 2'si GERÇEK MÜKERRER"
ÖLÇÜM                     : 3'ün 3'ü de ÖLÇÜT UYUMSUZLUĞU
MAZERETİM                 : "aynı yıl + aynı tür olaylar tetikleyebilir —
                             o çıkarsa mazeret GEÇERLİ; ama 3'ün 3'ü de
                             ölçüt uyumsuzluğu çıkarsa MAZERET YOK"
⇒ Tam o çıktı ⇒ MAZERET YOK.
```
📌 Ve gerekçem yanlıştı: *"`BILINEN_AYRI` yanlış pozitifleri zaten
eliyor"* dedim — ama o küme **geçmişte görülmüş** çiftleri tutuyor, yeni
bir şablon doğduğunda **boş** oluyor. Muafiyet listesi bir **kayıt**tır,
bir **kural** değil.

## 🔴 KENDİ ALETİMİN KUSURU — ilk turda 3 ihlali HİÇ GÖREMEDİM
```
denetle.py:3726  mk = [r for r in tum if r[4] == "başlık"
                                      or r[4].startswith("kişi!")]
benim ilk filtrem: "!" in olcut     ⇒ `başlık` ölçütlüleri KAÇIRDIM
sonuç            : "KESİN 0" bastım; koordinatör 3 görmüştü
```
📌 **Ve bu, `denetle.py:3732`nin anlattığı hatanın AYNASI:** orada zayıf
liste ihlal sanılmıştı (iki kez, iki ayrı oturum); burada **ihlal listesi
hiç görülmedi**. Aynı çıktı, ters yönde yanlış okuma.
🟢 Çare: kova ayrımı **taklit edilmez, kaynağından kopyalanır** — düzeltildi.

## YAMA — `arac/denetle.py` · `BILINEN_AYRI` kümesine
```python
    # ⭐ «ŞEHİR KURTULUŞU» ŞABLONU — 7 Eylül 2026, DEGISMEZ3-0907.
    # Üç AYRI şehrin kurtuluşu AYRI günlerde; ölçütü tetikleyen şey
    # başlık ŞABLONUNUN aynı olması (Jaccard 0,43-0,67), olayların
    # aynı olması DEĞİL. Ankara Antlaşması sonrası Fransız tahliyesi
    # şehir şehir ilerledi: Kilis 23 Ara · Antep 25 Ara · Tarsus 27 Ara ·
    # Mersin 3 Oca · Adana 5 Oca.
    ("Antep'in kurtuluşu — Fransızların şehri boşaltması",
     "Tarsus'un kurtuluşu — Fransızların şehri boşaltması"),
    ("Antep'in kurtuluşu — Fransızların şehri boşaltması",
     "Adana'nın kurtuluşu — Fransızların şehri terketmesi"),
    ("Tarsus'un kurtuluşu — Fransızların şehri boşaltması",
     "Adana'nın kurtuluşu — Fransızların şehri terketmesi"),
```
✅ Uygulanınca: `mükerrer madde: 3 → 0`, `denetle.py` bu kalemde temiz.

## 🔴 AMA ÇİFT EKLEMEK ÖLÇEKLENMİYOR — ÖLÇÜLDÜ
```
«kurtuluş» geçen madde        : 6
«Fransızların…» şablonu       : 4
pencere (±400 gün) içi çift   : 6      ← bugün ihlal 3
```
Bugün 6 değil 3, çünkü `Kilis'in kurtuluşu — Fransızların TAHLİYESİ`
başlığı eşiğin (0,34) altında kalıyor. **Başlıklar birbirine yaklaştıkça
artacak.** Ve şehir sayısıyla **karesel**:
```
 3 şehir →  3 çift      6 şehir → 15 çift
 4 şehir →  6 çift      8 şehir → 28 çift
 5 şehir → 10 çift     10 şehir → 45 çift
```
🔴 Millî Mücadele'de kurtuluş günü olan şehir **onlarca**. Her yeni şehir
mevcut hepsiyle bir çift üretir ⇒ `BILINEN_AYRI` bir **kayıt** olarak
şişer ve okunmaz hâle gelir.

## 🟡 ÖNERİ (ölçüt değişikliği — koordinatörün kalemi, SINANMADI)
> İki başlık **farklı yer adı** taşıyorsa mükerrer sayılmasın.

Bugünkü 3 ihlali kapatır (Antep ≠ Tarsus ≠ Adana) ve gerçek mükerrerleri
kaçırmaz **görünüyor** — çünkü gerçek mükerrer genellikle **aynı yer**
hakkındadır.
⚠️ **SINAMADIM.** Bugünkü 54 çift ve mevcut `BILINEN_AYRI` üzerinde iki
yönde de koşturulmalı (`C13`): kuralı ekleyince kaç gerçek mükerrer
kaçıyor? Ölçmeden uygulanmamalı.
⇒ **Kısa vadede yama (3 çift), uzun vadede ölçüt.** İkisi çelişmiyor.

## ÖLÇMEDİKLERİM
- 51 `ZAYIF` çifti **açmadım** — alet onları ihlal saymıyor ve
  koordinatörün şartı *"karıştırma"*ydı.
- Yer adı kuralının yanlış negatif oranı (yukarıda).
- `Kilis` ve `Mersin` maddelerinin ileride eşiği geçip geçmeyeceği —
  bugünkü başlıklarıyla geçmiyorlar; **başlık değişirse** geçerler.
