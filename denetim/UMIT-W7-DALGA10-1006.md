# UMIT-W7-DALGA10-1006 — KAYNAK-TAVAN sınavının S1'i (bayat taban → ölçüm)

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-06)
- Yazılı (ONGORU): 4298 · 4146 · 2301 · 333 · 1968. Bugün origin/main: W8'in ölçtüğü **4299 · 4147 · 2301 · 366 · 1935** (toplam +1, s +1, kayıt-kaynaksız 0, dönem-içi +33, hiçbiri −33).
- S1 `denetle.kaynaksizlik_olc`'a bağlı ⇒ zincir üstünde ölçülür; KAYNAKSIZLIK-ISG yeni bir isg kovası ekler ama beş sayıyı DEĞİŞTİRMEZ.
- ONGORU bir SABİTTİR (fotoğraf) — ölçüme çevrilir: bağımsız okuyucu (node) ile aynı beş kova.
- Tavan önerisi: hiçbiri tavanı 1935'e (W8'in de dediği `--kaynak-tavan-indir`), kayıt-kaynaksız 2301 aynen.

**Öngörü ↔ ölçüm:** yazılı ONGORU ✓ (taban 11bcae71 bugünkü işlevle yeniden ölçüldü: 4298/4146/2301/333/1968 — birebir) · bugün **4299 · 4147 · 2301 · 371 · 1930** ⇒ W8'in 366/1935'i de **✗ BAYAT** (bir günde 5 kayıt daha dönem-içine geçti) · zincir sayıları değiştirmez ✓ · sabitti, ölçüme çevrildi ✓ · tavan önerisi 1935 ✗ → **1930**.

Temel: worktree `C:\atlas-w7` = origin/main **6d23f5ac**. Zincir: D7-ISG → ZINCIR-KAYNAGI-KAPI → KAYNAKSIZLIK-ISG → MUKERRER-OLCUT (dördü de main'e ✓ uygulandı). Commit yok · motor tuzuna 0 dokunuş · ağaç sonunda TEMİZ · tavan dosyası YAZILMADI.

## ① S1 — bugün ↔ yazılı, ADIYLA
S1 `denetle.kaynaksizlik_olc(girdi.yukle())`'ye bağlı. Zincirde ve çıplak main'de AYNI (KAYNAKSIZLIK-ISG ayrı `isg` kovası açar, bu dört kovaya dokunmaz).

| Kova | Yazılı (ONGORU, 11bcae71) | Bugün | Fark |
|---|---|---|---|
| toplam | 4298 | **4299** | +1 |
| `s:` taşıyan | 4146 | **4147** | +1 |
| kayıt-kaynaksız | 2301 | **2301** | 0 |
| dönem-içi | 333 | **371** | +38 |
| hiçbiri | 1968 | **1930** | −38 |

Yöntem: taban 11bcae71 geçici ağaçta (kaldırıldı) BUGÜNKÜ `kaynaksizlik_olc`'un birebir kopyasıyla ölçüldü (kopya bugünkü veride `denetle` ile üye üye eşit) ve kayıt kayıt sınıf geçişi çıkarıldı. **Yalnız iki geçiş türü var:**
- **hiçbiri → dönem-içi: 38** (dönemlerine kaynak yazıldı; kayıt hâlâ kaynaksız):
  `yerlesimler.js`: Baç (Bács) · Bratislava · Częstochowa · Estergon · Eğri · Hatvan · Kanije · Kielce · Köstence · Lvov · Mohaç · Peçuy · Radom (Polonya) · Segedin (Szeged) · Solnok (Szolnok) · Temeşvar · Varad (Oradea) · Varadin (Petrovaradin) · Varşova · Vaç (Vác) · Yanova (Ineu) · Yazlofça (Yazlovets) · Zagreb · Ösek (Osijek) · İstolni Belgrad · İzdin (Lamia) · Łódź
  `yerlesimler_ek.js`: Kassa (Košice) · Sopron
  `yerlesimler_ek29.js`: Babadağı (Babadag) · Komárom (Komárno) · Léva (Levice) · Trencsén (Trenčín) · Varasd (Varaždin) · İshakçı (Isaccea)
  `yerlesimler_ek5.js`: Gyula (Göle) · `yerlesimler_ek_macaristan.js`: Szatmár (Satu Mare) · `yerlesimler_kdmacar.js`: Debrecen
- **YOK → kayıt-kaynaklı: 1** — `yerlesimler_ek29.js|Hacıoğlupazarcığı (Dobrich)` (yeni kayıt, kaydı kaynaklı ⇒ toplam ve `s:` +1, kayıt-kaynaksız değişmez).
- Gerileme (bir kovadan kötüye) **0**; silinen kayıt **0**.
Makine okunur liste: `denetim/KAYNAK-TAVAN-S1-GECIS-1006.json`.

## ② Sabit miydi — EVET; ölçüme çevrildi: `KAYNAK-TAVAN-SINAV-SAGLAM-1006.diff`
(LF · CR 0 · +98/−7 · yalnız `denetim/ARAC-KAYNAK-TAVAN-SINAV-1004.py` · main'e İLERİ ✓ / -R ✗ · uygulanmışta -R ✓ · zincirle çakışmaz)
- `ONGORU` TARİHÇE olarak kaldı (yorumla); S1'in ölçütü DEĞİL.
- **S1** — BAĞIMSIZ okuyucu: girdi dosyalarını node ile tarayıcı gibi yükler (dosya başına ilk `window.YERLESIMLER*`, `girdi.oku_dosya` kuralı), kovaları kendisi kurar; `kaynaksizlik_olc` ile **toplam + dört kovanın ÜYELİĞİ** eşit olmalı. Bugün 4299/4147/2301/371/1930 = 4299/4147/2301/371/1930.
- **S1a** — sınıf hâlâ var: dört kova da > 0.
- **S1b** — İKİ YÖNLÜ YAPAY: dört sınıftan birer kayıt (hiçbiri · dönem-içi · kayıt-kaynaklı · `s`'siz) hem Python'a hem node'a (geçici dosya) eklenir → iki okuyucu yine eşit VE fark tam **+4/+3/+2/+1/+1**.
- **S1c** — aynı yapay kopyada eski sabit ONGORU BAYATLAR (kırılganlığın kanıtı).
- **S1d** — NEGATİF KONTROL: dönem kaynağını görmezden gelen kasıtlı yanlış okuyucu (`BOZUK`) S1 eşitliğinden **geçemiyor** ⇒ S1'in dişi var. *(İlk yazımda bayrak `--bozuk` idi; `node -e … --bozuk` bayrağı node'un kendi seçeneği sanıp REDDETTİ ve S1d yanlış sebepten ✗ verdi — ölçüldü, bayrak tiresiz yapıldı, sınava not düşüldü.)*
- Geçici dosyalar `finally` ile silinir; S14 (iz yok) ✓.
- **Sonuç:** çıplak main'de `--hizli` **21/21** (eski 16/17 → S1 düzeldi + 4 yeni soru) · ZİNCİRDE TAM koşu (S12/S13/S20 gerçek denetle.py dahil) **24/24**, 3 dk 36 sn.

## ③ Tavan — ÖNERİ (yazılmadı; koordinatörün diff'iyle aynı commit'te)
Bugünkü tavan dosyası: hiçbiri 1968 · kayıt-kaynaksız 2301.
- **`hicbiri`: 1968 → 1930** — `hicbiri_defter`'den yukarıdaki 38 ad ÇIKAR (gerileme değil, iyileşme).
- **`donem_ici`/`donem_ici_defter`: 333 → 371** — aynı 38 ad GİRER.
- **kayıt-kaynaksız birleşimi: 2301 AYNEN** (38 ad yalnız kova değiştiriyor; Dobrich kaydı kaynaklı, deftere girmez) ⇒ üyelik kuralına göre YENİ üye 0.
- Araç: `py arac/denetle.py --kaynak-tavan-indir` bu daralmayı üretmeli; koşturulursa üye farkının tam bu 38 ad olduğu `KAYNAK-TAVAN-S1-GECIS-1006.json` ile karşılaştırılarak doğrulansın. ⚠️ W8'in bir gün önceki önerisi (1935) BAYAT — tavan yazılmadan hemen önce yeniden ölçülmeli; aradaki 5 kayıtlık fark tam bu tür veri kaymasıdır.
- `isg_defter` (KAYNAKSIZLIK-ISG'nin 53 üyesi) bu ölçümün dışında — W8'in önerisi geçerli, dokunmadım.

## git status
- `C:\atlas-w7` HEAD 6d23f5ac — porcelain BOŞ (kalıyor).
- `C:\atlas-umit`: `?? denetim/KAYNAK-TAVAN-SINAV-SAGLAM-1006.diff` · `?? denetim/KAYNAK-TAVAN-S1-GECIS-1006.json` · `?? denetim/UMIT-W7-DALGA10-1006.md`.
