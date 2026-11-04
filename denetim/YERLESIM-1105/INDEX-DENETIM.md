# Yerleşim index'i — mekanik denetim (5 Kasım 2026)

Ölçen: KASA PAZAR, KASA makinesi. Ağaç: yığın `kasa-pazar-yigin-1104` @1080123b2 (main + 17 yerel commit).
Yükleyici: `arac/denetle.py` `yerlesimleri_yukle()` — canlı girdi (`arac/girdi.py` GIRDI_DOSYALARI) + kuyruk dosyaları; kuyruk ayrıca işaretli.
Ad normalleştirme: `denetim/ARAC-NORMAL-0903.py` `norm()` ('İ'.lower() tuzağı yok). Satır no: dosyada ad'ın sıradaki geçişi (0 = bulunamadı).
Yalnız MEKANİK tutarlılık; kaynak teyidi UMIT'in işi. Veri DEĞİŞMEDİ.

| ölçü | sayı |
|---|---|
| kayıt (hepsi) | 5531 |
| kayıt (canlı, kuyruk dışı) | 4337 |
| kuyruk dosyası kayıtları | 1194 |
| koordinat hatası (aralık/0,0/eksik) | 0 |
| aynı koordinat, farklı ad (4 ondalık) | 5 |
| MÜKERRER (aynı norm ad, ≤3 km) çift | 0 |
|   bunların ikisi de canlı olan | 0 |
| aynı norm ad, >3 km (adaş, bilgi) | 2 |
| ad farklı, ≤3 km yakın çift (gözden geçirme) | 27 |
| ZİNCİR sorunu (toplam) | 7 |
|   dönem kuruluştan | 7 |
| SAHİPSİZ aralık (s+d+v birleşiminde boşluk; Değişmez 1 ham) | 51 |
|   bunların canlı olanı | 51 |
| KAYNAKSIZ dönem — s: (boş ya da yalnız 'atlas') | 8459 / 25553 |
| KAYNAKSIZ dönem — v: (boş ya da yalnız 'atlas') | 506 / 680 |
| KAYNAKSIZ dönem — isg: (boş ya da yalnız 'atlas') | 93 / 623 |
| KAYNAKSIZ dönem — d: (boş ya da yalnız 'atlas') | 1152 / 1503 |

## Dosyalar
- `mukerrer_ad_3km.tsv` · `yakin_cift_3km.tsv` · `koordinat_hata.tsv` · `ayni_koordinat_farkli_ad.tsv`
- `zincir_sorun.tsv` · `sahipsiz_aralik.tsv` · `kaynaksiz_donem.tsv` (d: hariç; d: dönemlerinde kaynak alanı şemada isteğe bağlı)

## Okuma notları
- 'sıfır uzunluk' ve 'ters' CLAUDE.md veri kuralı ihlalidir; 'aynı alan içinde çakışma' s×s / d×d / isg×isg'dir (s×d örtüşmesi motor gereği kasıtlı, sayılmadı).
- 'Sahipsiz aralık' ham listedir: `bos:` beyanlı kayıtlar, ufuk sınırları ve isg-yalnız dilimler ayıklanmadı — Değişmez 1'in kendi ölçümü esastır.
- Adaş (>3 km aynı ad) bilgi amaçlıdır, mükerrer sayılmaz.
