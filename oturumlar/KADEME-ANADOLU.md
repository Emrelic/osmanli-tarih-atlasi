# KADEME-ANADOLU — KADEME + kd:, bölge: ANADOLU + RUMELİ

**MODEL** Opus · **DİZİN** `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`
**ClaudEmre** HAYIR · **ADIN** Emre ne verdiyse o

## 🔴 ÖNCE ŞUNU OKU — kuralların TAMAMI ORADA

    oturumlar/KADEME-KD.md

Bu dosya onun **bölge ayağıdır** ve yalnız iki şeyi belirler: hangi
kutuyu taradığın ve hangi dosyaya yazdığın. Kademe kuralları, `kd:`
şeması, kaynak kırmızı çizgisi, kabul kapısı, nöbetçi kurulumu —
hepsi `KADEME-KD.md`de. **Buraya kopyalamadım**, çünkü kopyalanan kural
bayatlar ve bu proje o bedeli üç kez ödedi.

## SENİN BÖLGEN

```
ANADOLU + RUMELİ
lat 35-48 / lon 19-45 — Osmanlı çekirdeği. TDV BURAYI EN İYİ KAPSIYOR (eyalet · sancak · şehir maddeleri); en verimli bölge bu.
```

## SENİN DOSYAN

```
data/kademe_<kendi scratchpad UUID'inin ilk 6 hanesi>.js
```
Yama biçimi (`KADEME-KD.md §①`): nokta ADI + `k:` + `kaynak:` + `neden:`.
Mevcut `data/yerlesimler*.js` dosyalarına **DOKUNMA** — onlar başkasında;
yamayı koordinatör işler.

## İLK İKİ İŞİN — sırayla
```
1  NÖBETÇİNİ KUR (Monitor · persistent: true) — bu OLMADAN sağırsın:
   py arac/tahta_bekci.py --kim "<ADIN>" --ara 45
2  TAHTAYA AÇILIŞ RAPORU: hangi kutuyu aldığını KUTUYLA yaz
   (lat/lon aralığı), ki öteki kademe oturumlarıyla çakışmayasın.
   İlk satır: → DOSYASI data/kademe_<6hane>.js OLAN OTURUMDAN
```

## BİTİŞ ÖLÇÜTÜ — sayıyla
`"ANADOLU + RUMELİ kutusunda N kademesiz nokta vardı → M'sine kademe yazıldı,
K'sı 'kaynak susuyor' damgalandı, kd: yazılan L kayıt"`

⚠️ **Yarım iş suç değil, GİZLENMİŞ yarım iş suç.** Bölgen büyükse
bitiremeyebilirsin — o zaman **ne kadarını bitirdiğini sayıyla** yaz.
