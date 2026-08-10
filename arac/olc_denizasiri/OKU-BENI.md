# Denizaşırı petek ölçüm takımı — **koşudan sonra ZORUNLU sıra**

> MOTOR DENİZAŞIRI oturumundan kurtarıldı, 10 Ağustos 2026.
> Aletler oturumun scratchpad'indeydi ve **oturum kapanınca gidecekti.**
> Oturum kendisi uyardı: *"taşımazsan koşudan sonra öngörünü sınayacak alet olmaz."*

---

## 🔴 EN SİNSİ TUZAK — `petek.ndjson` BAYATLAR VE SESSİZ KALIR

Aletler bir NDJSON dökümü okur; o döküm **koşudan önceki** `data/petek_govde.js`ten
türetilir.

```
koşudan sonra olc_gorunur.py'yi ndjson'ı YENİLEMEDEN koşarsan
   → ESKİ geometriyi ölçer
   → "19 kusur hâlâ duruyor" der
   → VE HATA VERMEZ
```

📌 `CLAUDE.md §11`: *"bir aletin evreni değişince, alet değişmeden sessizce
yanılır."* 7 Ağustos'ta **üç oturum** aynı tuzağa düşmüştü.

---

## KABUL TESTİNİN TAM SIRASI — koşudan sonra, istisnasız

```bash
# 1 · ÖNCE dökümü tazele — ATLANAMAZ
node arac/olc_denizasiri/disa_aktar_petek.js <hedef>/petek.ndjson

# 2 · öngörü kalem 2 — altı meşru vaka 0 km² kaybetmeli
py arac/olc_denizasiri/olc_ii_riski.py
#    Oslo · Königsberg · Azak · Tromsø · Bergen · Ålesund
#    🔴 TUTMAZSA bileşen kilidi GERİ ALINIR — mazeret yok

# 3 · görünür kusur sayımı — 19'du, kaç oldu?
py arac/olc_denizasiri/olc_gorunur.py
#    Halka 1 yazıldıysa DÖRT kalem düşmeli:
#    Kilitbahir 1.444 · Boğaziçi 137 · Karabiga 124 · Bolayır 93  km²

# 4 · koşu çıktısındaki satır
#    "🔒 bileşen kilidi: N devir REDDEDİLDİ"  →  2 / 12.108 km² olmalı
```

⚠️ `kara_maskesi.pkl` taşınmadı — **28 saniyede yeniden kurulur.** Betiklerin
içindeki scratchpad yolları koşmadan önce düzeltilmeli.

---

## Bulgular (`denetim/` altına kopyalandı)

| dosya | ne var |
|---|---|
| `denetim/denizasiri_v3.json` | dört kova: IHLAL 2 · BOĞAZ 197 · BOŞLUK 2.447 · KARA 149 |
| `denetim/gorunur_kusur.json` | 19 görünür kusur, adıyla ve alanıyla |

## Ölçütün kendisi — `K4`ten çıkarıldı

> Emre: *"…VE GEREĞİ YAPILMALI, **EĞER GERÇEK BİR DURUM DEĞİL İSE ÇÖZÜMLENMELİ.**"*

```
GÖRÜNÜR KUSUR = denizaşırı parçanın sahibi, o TARİHTE, parçayı çevreleyen
                BÜTÜN kara komşularından FARKLI
```
🔴 **Su genişliği ölçütü işe yaramaz** — Tromsø (15,7 km, 20.902 km²) ile
Kilitbahir'i (11,8 km, 1.444 km²) ayıramıyor. `K4` ölçütü ayırıyor: Tromsø'nun
iki yakası da `norvec`, Kilitbahir'in çevresi 1300·1345'te `bizans`.
