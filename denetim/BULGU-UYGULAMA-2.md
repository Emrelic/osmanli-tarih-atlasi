# BULGU — UYGULAMA-2 (HAZIR KITA SONNET 93)

Kendi TASNİF-E paketlerimden (`0032 · 0033 · 0036`) 🟠 ve sahibi boş 🔵
maddeleri **gerçek kayda çevirdim**: `data/yer_yama_uyg2.js`
(`window.YER_YAMA_UYG2`, dizi, 9 kalem). Detaylı hüküm:
`denetim/HUKUM-UYGULAMA-2.json`.

```
9 kalem yazıldı  →  9/9 KAPANDI (cozuldu) — üçünde bitiş tarihi TAHMİN, notta açıkça işaretli
```

## TAM KAPANANLAR (6)
- **0033/H-0001** Erzincan — 41 yıl erken d: düzeltildi (Safevî penceresi eklendi)
- **0033/H-0003** Hoy (1724-1739) + Mîyandoab (1585-1603) — İran Koridoru'nun
  hazır ama uygulanmamış çaresi gerçek kayda çevrildi
- **0036/H-0007** (Dörtyol/Erzin/Yumurtalık × 3) — v: alanları Adana'nın
  doğrulanmış dönemiyle dolduruldu

## KAPANDI, BAŞLANGIÇ KESİN + BİTİŞ TAHMİN OLARAK İŞARETLİ (3) — kendi kararımla kapattım
- **0033/H-0020** Manama/Bahreyn — 1521-1602 Portekiz + 1783-1861 Bahreyn
  (kimlik zaten vardı, ilk kez bağlandı) yazıldı; 1602-1783 KASITLI boş
  bırakıldı — TDV kendi ifadesiyle bu aralığı çekişmeli tanımlıyor, kaynak
  susuyor, hayalet devlet riski var. Bu eksik iş değil, kasıtlı boşluk kararı.
- **0036/H-0008** Urfa — TDV'den 1839 (1832 değil) kesin, bitiş (1840-01-01)
  benim tahminim (TDV yalnız "kısa süre" diyor). Ana kusur (7 yıl erken
  başlangıç) kesin kaynakla giderildiği için KAPANDI; bitiş notta TAHMİN
  diye işaretli kaldı.
- **0036/H-0011** Maraş — TDV'den 1833 + "on dokuz aya yakın" kesin, bitişi
  (1834-08-01) hesaplandı. Bu TDV'nin Maraş'a özel anlattığı ASKERÎ İŞGAL —
  0037/H-0003'ün "Maraş'a girdi mi" sorusunun cevabı: EVET, süre TDV ile
  sınırlı. KAPANDI.

## 🔴 YAPMADIĞIM — ve niçin (§1 gereği üç şıktan biri)

**🔴 BAŞKA İŞE BAĞLI / KAYNAK YOK — emilme kümesi (8 madde), bu turda YAZILMADI:**
```
0032/H-0016  Bug-Dinyester boşluğu
0033/H-0006  Çağatay Hanlığı
0033/H-0007  Kazak Hanlığı
0033/H-0008  Sibir Hanlığı
0033/H-0009  Nogay Ordası/Buhara arası
0033/H-0010  Kandehar
0033/H-0014  Kanem-Bornu
0036/H-0015  Polesya/Pinsk
```
Sebep: bunların hepsi YENİ NOKTA gerektiriyor (koordinat + kuruluş/varlık
tarihi bulunması gerekiyor) — "hangi yerleşimin dönemi yanlış" değil "bu
bölgede hiç kayıt yok" sorusu. Yer_yama formatı (ad eşleştirerek düzeltme)
buna uygun değil, `yerlesimler_ek*.js` tarzı YENİ dosya + koordinat
araştırması gerektiriyor — bu, dedicated bir yerleşim-araştırma oturumunun
işi (CLAUDE.md §6 kapsam sırası, Oturum 4 yetkisi). Ölçmeden koordinat
uydurmadım.

**🔴 EMRE'NİN KARARI:**
```
0033/H-0017  Gürcistan alt-krallıklara bölünsün mü — tasarım kararı
```

**🔵 BAŞKA OTURUMUN İŞİ (içerik/geometri/kronoloji, veri değil):**
```
0032/H-0003, H-0009, H-0010, H-0014   icerik-talebi (araştırma/yazım işi)
0033/H-0013, H-0019                    cizim-geometri (canlı harita bakışı ister)
0033/H-0015, H-0016                    degismez2 (kronoloji madde eşleştirme)
0033/H-0018                            icerik-talebi (dedicated çok-kaynaklı araştırma)
0036/H-0005                            cizim-geometri
0036/H-0009                            H-0007/08'e bağlıydı, artık değerlendirilebilir ama
                                        kendisi kronoloji/anlatım işi
0036/H-0012                            degismez2 — olaylar*.js'e madde yazımı
                                        (KRONOLOJİ İÇERİK'in dosyası, benim değil)
```
Tam liste ve gerekçeler `denetim/BULGU-TASNIF-E.md`de.

## AKSAKLIK — koordinatörün karar vermesi gereken iki nokta

1. **Urfa ve Maraş'ın bitiş tarihleri TAHMİNDİR, KAYNAKLI DEĞİL.** TDV
   yalnız başlangıç yılı ve yaklaşık/"kısa" süre veriyor. Kesinleştirmek
   isteyen bir sonraki tur Kütahya Sözleşmesi/İskenderiye Konvansiyonu
   kronolojisiyle çapraz kontrol etmeli.
2. **SINIFLANMADI.md'deki 0033/H-0020 notu** "1602-1717 Safevî/Hürmüz,
   1717-1783 Umman" diyordu — TDV `bahreyn` maddesini doğrudan okudum, bu
   iddia METİNDE YOK. Notun kaynağı belirsiz; ben TDV'siz kısmı yazmadım.
   Kaynağı bulan biri varsa 1602-1783 aralığı tamamlanabilir.
