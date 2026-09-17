# PAKET-BEKLEYEN — hukum:"sirada" denetimi (parti 0040-0063)

**Görev:** `DALGA-BEKLEYEN.md` B4. `hukum:"sirada"` taşıyan her CEVAP.json maddesi
tahtada (`oturumlar/tahta.json`) ve `git log`da teslim/yayın izi var mı diye ölçüldü.
**Yöntem:** 0052-0063 paketleri `oturumlar/DALGA-00XX.md` ile oturuma/dosyaya
bağlanıyor → o oturumun tahta TESLİM mesajları + hedef dosyanın `git log`u
karşılaştırıldı. 0040-0051 paketleri DALGA formatından önceki serbest metin
notlarıyla kayıtlı → örnekleme + anahtar kelime taraması (`git log -S`, commit
mesajı arama) ile ölçüldü, **tek tek 61 maddenin hepsi doğrulanmadı** (aşağıda
işaretli).

## 0. Sayım

| Parti aralığı | `sirada` madde | Yöntem |
|---|---|---|
| 0040-0051 | 61 | serbest metin, örnekleme |
| 0052-0063 | 211 | DALGA-00XX.md ile oturuma bağlı |
| **Toplam** | **272** | |

## 1. KESİN TESLİMSİZ — dosyaya hiç inmemiş

| # | Madde | Oturum | Kanıt | Hedef dosya |
|---|---|---|---|---|
| 1 | 0063/H-0003, H-0004, H-0007, H-0008 | **UI-ETKILESIM** | tahtada bu isimle **0 mesaj**; `js/app.js`/`css/style.css` git log'unda sağ-tık-kopyala (25 Ağu, eski özellik) dışında eşleşen commit yok | `js/app.js` · `css/style.css` |
| 2 | 0052 HARITA-VERI 2.tur SINIF(15)+DEVIR(24)+NOKTA(16)+RENK(40) = **95 kalem** | HARITA-VERI (üretti) → UYGULA (uygulayacaktı) | `denetim/YAMA-0052B-*.json` teslim edildi (M-4063) ama `data/yerlesimler*.js` son commit'i `d9cc529` (16 Eylül, UYGULA 1.tur) — bu dosyalar hiç indirilmemiş; `arac/renkler.py` son commit'i de aynı (`783f473`) | `data/yerlesimler*.js` · `arac/renkler.py` |
| 3 | 0052 HARITA-VERI 66-98 (EKO-DUNYA ölçtü, **33 kalem**) | EKO-DUNYA → UYGULA | `denetim/YAMA-0052C-EKODUNYA.json` teslim (M-4026); aynı sebep — yerleşim dosyalarına inmedi | `data/yerlesimler*.js` |
| 4 | 0052 HARITA-VERI 99-131 (EKO-VEZIR ölçtü, **33 kalem**) | EKO-VEZIR → UYGULA | `denetim/YAMA-0052D-VEZIR-0916.json` teslim (M-4027); aynı sebep | `data/yerlesimler*.js` · `data/devletler.js` |

UYGULA oturumu son mesajını **16 Eylül 19:55**'te (M-4072) "karar bekliyorum,
duruyorum" diyerek bıraktı ve bir daha tahtaya yazmadı (toplam 6 mesajın hepsi
bu tarihten önce/o an). Yukarıdaki 4 kalem (161 alt-madde) bu yüzden hâlâ yalnız
`denetim/` klasöründeki öneri dosyalarında duruyor.

**GÜNCEL DURUM (bu denetim sırasında ölçüldü):** koordinatör bu boşluğu az önce
kapatmaya başlamış — tahtada `UYGULA-2` (09:51) ve `KOSU13-YAMA` (09:52) adıyla
iki yeni oturum açılmış, D-KÜNYE2/D-KAYNAK2 kronoloji yamalarını uyguluyor ve
koşu 13'e girecek yerleşim yamalarını birleştiriyor. Yukarıdaki 4 kalem bu yeni
oturumların kapsamında mı **açıkça sorulmalı** — HARITA-VERI 2.tur dosyaları
onların "bende olan dosyalar" listesinde geçmiyor.

## 2. KISMİ TESLİM — dosyaya kısmen indi, kalanı işaretli

| Madde grubu | Oturum | Teslim notu |
|---|---|---|
| 0052/H-0031-94 (13 madde) | EKO-KURUM | M-3987: "12/13 TAM" — H-0031 tam değil, gerekçe teslim metninde kesik |
| 0052/H-0029,33,34,53,54,115-121,127 (13 madde) | EKO-TOPLUM | M-3991: "8 TAM, 5 KISMEN" — H-0029 (kahve+tütün/spor-içki HARİÇ), H-0033 (tımar/feodalizm/kilise-burjuvazi-sanayi HARİÇ), H-0034 (mahalle tam değil), H-0054 (yalnız kısmi) |
| 0052/H-0023,26,30,46,59-68,73,80 (16 madde) | EKO-VEZIR | M-4008: "16/16 işlendi" ama H-0046 "kısmi" işaretli |
| 0052/H-0003,7,8,20,24,25,27,28,39,42,44,71,72,76,82,83 (16 madde) | EKO-RIVAYET | M-4009: 10 madde doğrudan yazıldı, **3 madde** (H-0007/H-0028/H-0044/H-0083 grubu) `denetim/YAMA-RIVAYET-0916.json`'a yazıldı — bu dosyanın devletler.js/kronolojiye indiğine dair ayrı bir "uygulandı" mesajı YOK |
| 0057/madde 5 | D2-KOMSU | `denetim/YAMA-0057-SAVA.json` teslim edildi (M-4186, "G3 teslimi sonrası" şartlı); ayrı bir "1.MURAT uyguladı" izi yok, `data/hukuki_sinirlar.js`/yerleşim commit'lerinde bu düzeltmeye özel bir satır görünmedi |
| 0057/madde 6 ikinci parça (B8, YAMA-0057-OLAY-2) | D-GEOARAC | M-4240: "13 bağsız karttan 6'sı düzeltildi" — kalan 7'si için ayrı sonuç yok |

## 3. ARAŞTIRMA TAMAM, VERİYE İNİŞ "KOŞU SONRASI"NA BAĞLI — 0040-0051

Bu paketlerin çoğu (0040/H-0009, 0042/H-0006,7,11,18,19,22,25,27,28,29,38,43,
0043/H-0003,9,10,15, 0044/H-0004,12, 0046/H-0007,10b,12, 0048/H-0001,9,10,11) not
metninde açıkça **"koşu 10/11 yayınından sonra iner"** diyor. Koşu 10 (`92d9349`,
13 Eylül) ve koşu 11 (`a4894b9`, 14 Eylül) **YAYINLANDI**, ve örneklenen bazı
kalemlerin gerçekten indiği doğrulandı:

- Kemah/Erzincan (0042/H-0011) → `9dcbb6e` ile indi
- Kartlı/Kaheti künyesi (0043/H-0010) → `c952eb7` ile indi
- Kırım üç ton + himaye gövdesi (0043/H-0003, H-0009, 0044/H-0004) → `8ba093e` + `a4894b9` ile indi
- Van/Çaldıran/Başkale (0044/H-0012, 0049/H-0001) → ARAS-CALDIRAN ile indiği CEVAP.json'un kendi notunda da yazıyor

Ama **`oturumlar/KOSU10-SONRASI.md`** (13 Eylül tarihli, 12 yama/karar dosyasının
sıralı kontrol listesi — Vodina/Üsküp/Köstendil/Manisa/Kazak Hetmanlığı/Ferhat
Paşa cephesi dahil) içindeki **~40 kutucuğun neredeyse tamamı hâlâ `[ ]` işaretli**
(yalnız 2 tanesi `[x]`/`✅`). Bu iki ihtimalden biri:

1. Liste **bayat** — kalemler başka commit'lerle indi ama kutu işaretlenmedi
   (yukarıdaki 4 örnek gibi), **veya**
2. Bir kısmı **gerçekten hâlâ bekliyor** (özellikle Vodina/Üsküp Balkan zinciri,
   Manisa/Saruhan, Kazak Hetmanlığı künyesi + Çehrin 1648-1678 penceresi,
   Ferhat Paşa güney/batı cephesi YAMA dosyaları — bunlar için indirdiğine dair
   ayrı bir commit bulunamadı).

**Bu 61 maddenin tek tek hangi kovaya girdiği bu turda tam çözülmedi** — `git log
-S` ile büyük dosya taraması zaman aşımına uğradı (repo + Windows git yavaş).
Önerilen sonraki adım: `oturumlar/KOSU10-SONRASI.md`'yi güncel commit listesine
karşı **tek tek** işaretleyecek bir oturum (D-KÜNYE ya da UYGULA-2 kapsamı
genişletilebilir).

## 4. ŞU AN AKTİF — bekliyor ama TERK EDİLMEMİŞ

| İş | Oturum | Durum |
|---|---|---|
| D-KÜNYE2/D-KAYNAK2 2. tur kronoloji yamaları | **UYGULA-2** | 09:51'de açıldı, 10:02'de ara rapor verdi (59 satırdan 40'ı indi) |
| Koşu 13'e girecek yerleşim yamaları (TK FERHATPASA IRAN1723/0063-IRAN, D4-ORTADOGU HAZAR/KRONO, D5-AMERIKA KRONO-1736, D5-OKYANUSYA KISI, D-KATMAN antlaşma haritası vb.) | **KOSU13-YAMA** | 09:52'de açıldı, `denetim/YAMA-KOSU13-BIRLESIK-0917.json` üzerinde birleştiriyor |

Bu ikisi **teslimsiz değil, işlemde** — listeye "gap" diye girmemeli, ama
takibi bu iki oturuma bağlanmalı.

## 5. Özet — nereye ne gidecek

```
UI-ETKILESIM açılmamış        → js/app.js · css/style.css (4 madde, 0063)
HARITA-VERI 2.tur + EKO-DUNYA/VEZIR HARITA-VERI payı (161 alt-kalem)
                                → data/yerlesimler*.js · arac/renkler.py · data/devletler.js
                                  (UYGULA-2 ya da yeni bir UYGULA turuna verilmeli —
                                   şu anki UYGULA-2/KOSU13-YAMA kapsamında YOK)
EKO-RIVAYET 3 madde (YAMA-RIVAYET-0916.json)  → data/olaylar*.js / devletler.js (koordinatör uygular)
D2-KOMSU YAMA-0057-SAVA.json                  → data/hukuki_sinirlar.js / yerleşim (uygulanma teyidi gerekir)
D-GEOARAC YAMA-0057-OLAY-2 kalan 7 kart       → ilgili ekokuma dosyaları
KOSU10-SONRASI.md ~40 kutucuk                 → tek tek işaretlenmeli (ayrı denetim işi)
```
