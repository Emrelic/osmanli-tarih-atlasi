# UMIT-K1-KAPANIS-1008 — K1 (kirli ağaçta kesme yarım hâl bırakıyor) kapatıldı

Öngörü: `denetim/UMIT-K1-ONGORU-1008.md` (commit 11804cf6, ölçümden önce).
Yama = 1006'nın `…-kesme-kirli-yol.diff` düzeltmesi, `git apply --check` temiz, UMIT uyguladı.

## Değişen (arac/ tuzda DEĞİL)
- `arac/tahta_kesme.py` +20/-1: (a) ÖN ŞART — `git status --porcelain -- <iki yol>` boş değilse `engel`
  (commit kurulmadan ÖNCE, çıkış 1); (b) `git rm --cached` artık `-f` ile ve dönüş kodu BASILIYOR.
- `denetim/ARAC-TAHTA-KESME-SINAV-1004.py`: K11–K14 (1006'nın kirli-ağaç kolu) + UMIT: K15/K15' + K16/K16'.

## İKİ YÖNLÜ ÖLÇÜM (aynı sınav, iki alet; çıkış kodu)
| Alet | Çıkış | Sonuç |
|---|---|---|
| YAMASIZ (dal ucu 20c5cea7) | **1** | 5 HATA: K12' · K13 · K14' · K15 · K15' |
| YAMALI | **0** | 33 OK, 0 HATA (eski 21 iddia dâhil) |

YAMASIZ hatalar: K12'/K14' yarım hâl doğdu (HEAD yolu kaybetmiş, index tutuyor; K14'te TAHTA.md kirliyken
tahta.json DA düştü — git rm atomik) · K15 reddedilen kesme değil, durum DEĞİŞTİ (`A TAHTA.md · AM tahta.json`) ·
K15' `geri --uygula` "zaten İZLENİYOR" der, KURTARMAZ · K13 sahnelenmiş kolda çıkış 0.

## ROLLBACK yönü (koordinatörün istediği)
- K15: kirli ağaçta kes → çıkış 1; HEAD + index + status kıpırdamıyor (geri alınacak bir şey doğmuyor).
- K15': ardından `geri --uygula` → 1 "geri alınacak kesme yok", durum aynı.
- K16: operatör commitleyince kes 0 → geri 0; iki yol yeniden izleniyor, disk aynı boyda, M-0004 git'te.
  (K9/K10, temiz ağaçta geri dönüşü zaten sınıyordu.)

## ÖNGÖRÜ KARNESİ
P1 ✅ P2 ✅ (yarım hâl, atomik) · P3 ✅ (K13 yamasız 0) · P4 ✅ · P5 ✅ (21 eski OK) · P6 ✅ · P7 ✅ ·
P8 ✅ (yeni kol 8+4=12 iddia → yamasızda 5 HATA, aralıktaki "3-5"in üst ucu; K15/K15' benim eklediğim, öngörümden SONRA
yazıldı ama aynı sınıf).
🟡 Sapma: K15'te ilk yazımım `status`ta izlenmeyen artıkları (`?? istemci-yerel/`) da karşılaştırıyordu → `-uno` ile
sıkılaştırdım ve yamasız aleti BUNDAN SONRA yeniden koşturdum (yukarıdaki tablo bu koşum: 5 HATA).

## BULAMADIKLARIM / SINIRLAR
- `-f` artık fiilen ulaşılmaz bir savunma katmanı (ön şart kirliyi önce keser). Ön şart ile `rm` ARASINDA
  başka bir oturumun dosyayı kirletmesi (yarış) SINANMADI.
- Ön şart git'in reddinden GENİŞ (sahnelenmiş de reddedilir; K13) — 1006'nın "muhafazakâr, zarar değil" notu aynen geçerli;
  bedeli: canlı makinede kesmeden önce `git add -- <iki yol> && git commit -F … -- <iki yol>` gerekir.
- Gerçek 5.845 mesajlı tur bu oturumda yeniden koşturulmadı (1006'da yamasız alet üzerinde yapılmıştı; yamalıda
  yalnız geçici depo sınavı). Kesme günü öncesi yamalı aletle kuru koşu önerilir: `py arac/tahta_kesme.py kes`.
- Push yok `main`e; kutu uçları Emre'yi bekliyor, yazılmadı.
