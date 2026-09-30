# UYGULA-YERLESIM-0930 — yerleşim payının uygulanması (30 Eylül 2026)

Makine okunur: `denetim/UYGULA-YERLESIM-0930.json` · alet: `denetim/ARAC-UYGULA-YERLESIM-0930.py`

## Evren
- `ACIK-BIRLESIK-0930`: acik 259 · sirada 175.
- Pay ölçütü (sirada + notta `yerlesimler`): **18 madde** (şartname 13 diyordu).
- 🔴 `yerlesimler` kelimesini geçirmeyen ama yalnız yerleşim verisi isteyen sirada: **≈85** (+15 karma), ör. SAFEVI-DOGU / BALKAN-MACAR / KAFKAS-KORFEZ uygulayıcılarının inmemiş kalemleri, Doha 0081/H-0024 ile 0082/H-0101, Szatmár (ORTA), Nalçik Y-1, YAMA-BASRA-0917. Koordinatöre M-5604 ile soruldu. **Bu rapor yalnız 18'i kapsar.**

## Sonuç: 7 çözüldü · 3 çözülemedi · 8 sırada kaldı

| Madde | Hüküm | Ne oldu |
|---|---|---|
| 0042/H-0030 | cozuldu | Bağdat timurlu 1393-01-01 → **1393-08-29** (TDV timur "20 Şevval 795 / 29 Ağustos 1393") |
| 0042/H-0029 | sirada | Bağdat kısmı indi; Irak şehirlerinin 1393 durumu için kaynak yok, tek hücre cep sürüyor |
| 0042/H-0037 | cozuldu | Ankara → Süleyman Çelebi **Mart 1404** (TDV suleyman-celebi-emir), gün bulunamadı; `kesinlik`+`kaynak` |
| 0042/H-0011 | sirada | ② Kemah 1402-1502 TDV sırasına göre beş döneme bölündü (yıllar komşudan Erzincan) · ① olaylar ic_not → UYGULA-OLAYLAR |
| 0035/H-0079 | cozuldu | Hâil 1779→1818-09 **suud** (TDV residiler + diriye), Nefud dolgusu 1744→1779 |
| 0035/H-0088 | cozuldu | Kasr-ı Şîrîn d 1534-12-04→1623-11-28 (A0047-1) + **eski s/d çakışması giderildi** |
| 0042/H-0006 | cozuldu | Çehrin 1281→1362 altinorda, 1362 günü `bulunamadı` damgalı |
| 0076/H-0023 | cozuldu | Doha 1868→1871 s:katar (TDV katar); Katar iç dolgusu Doha zincirine bağlandı |
| 0076/H-0064 | sirada | Sîva `kid:misir-kavalali` indi; Cağbûb petek taşması motor ölçümü ister |
| 0064/H-0007 | cozuldu | 7/7 Erdel v: penceresine `kid:"erdel"` |
| 0035/H-0065 | cozulemedi | İbrim başlangıç yılı: TDV yalnız 1573 terminus ante quem; Orhonlu erişilemedi |
| 0035/H-0068 | cozulemedi | Szatmár 1682-85: TDV tokoli-imre anmıyor; 7 nokta kaynaksız |
| 0042/H-0018 | cozulemedi | Trakya kıyı noktaları: TDV slugları 302, kirklareli anmıyor; Emre sorusu olarak bekletilmişti |
| 0052/H-0125 | sirada | Kabartay (Nalçik) adı yer_id/kademe/paket anahtarı — tek başına değiştirilemez |
| 0082/H-0090 | sirada | SIRP-NOKTA: 4 hazır kayıt 1718/1739 kararı ve dosya yeri (girdi.py tuzu) bekliyor |
| 0081/H-0043 · 0082/H-0014 | sirada | Bozkır v:kirim = Emre kararı D; don-kazak önerisi Emre'ye gitmeli |
| 0042/H-0014 | sirada | atladım: renkler.py + olaylar, bende değil |

## Değişmez notları
- **d:/v: günü kaydırılmadı.** Yeni d:/v: kırılmaları mevcut günlerde: Kasr-ı Şîrîn (Bağdat 1534-12-04 / 1623-11-28), Katar dolgusu (Doha 1871-09-20 / 1913-07-29).
- **2s (yabancı) için yeni kırılmalar:** Kemah 1422 · 1450 · 1457 (Erzincan'la aynı gün, ikisinin de maddesi yok) · Doha ile Katar dolgusu 1868-01-01. Madde önerileri kaynak cümleleriyle UYGULA-OLAYLAR-0930'a gitti (M-5608). 2s tavanına (195, açık 189) etkisi **ölçülmedi** — denetle.py şartname gereği koşturulmadı.
- Sahipsizlik: Nefud 1744-1779 artık `bos:"devletsiz"` beyanına düşüyor (nokta zaten 1744 öncesi sahipsizdi).
- `paket_*.js` üretilmiş kopyalar yeniden paketlenmeli (`py arac/paketle.py yenile`), bu Oturum 0'ın işi.
