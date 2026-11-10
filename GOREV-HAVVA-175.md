# GÖREV · HAVVA · post-it #175 — Uyvar–Estergon arası girinti (19 Eylül 1676)

Kaynak: Emre, #175 (10 Kasım 2026): "bu metni HAVVA oturumuna at, HAVVA çözsün." Yazan: KASA'daki
#175 oturumu (Sonnet; motor koşamaz). **Bu belgeyi okuyan HAVVA oturumu işi baştan sona sahiplenir.**
Okuma/cevap: `py arac/not.py oku 175` · rapor: `py arac/not.py yanit 175 --dosya <yol> --durum <d>`.
(#175 şu an KASA oturumunda; HAVVA raporu yazınca KASA oturumu uyanır. İstersen notu sen alırsın:
`py arac/not.py al 175 --zorla --model opus` — YALNIZ Emre "zorla" dediyse.)

## 1. Sorun, tek cümlede
19 Eylül 1676'da Uyvar (Osmanlı, 47.986K 18.162D) ve Estergon (Osmanlı, 47.795K 18.74D) peteklerinin
**arasındaki ~15×20 km'lik girinti Habsburg boyalı**; oysa merkezi (47.933K 18.459D) Uyvar'a 23 km,
Léva'ya (Habsburg) 33 km, Komárom'a (Habsburg) 31 km. Düz "en yakın nokta" Voronoi'si bu girintiyi
**Uyvar'a** verirdi. Emre: "Uyvar'a daha yakın değil mi, Uyvar'a ait boyanmamalı mı? Teyit edelim."

## 2. Ne ölçüldü (KASA, 6 Kasım — canlı sitede)
- Girintinin çevresindeki ~43 örnek nokta: Habsburg 39, Osmanlı 4. Bölgenin içinde yerleşim YOK.
- Canlı harita (`harita.queryRenderedFeatures`): Habsburg boyası `devlet-dolgu` katmanından
  (`macaristan-habsburg`), Osmanlı boyası `osmanli-dolgu` katmanından. İki ayrı havuz.
- Bu bölgede 75 km içindeki yerleşimler (hepsi): Uyvar, Estergon, Komárom, Léva, Nitra, Vaç,
  Aquincum-Óbuda-Pest, Pešte, Yanıkkale (Győr). Başka nokta yok.
- Uyvar'ın Osmanlı poligonu ~20 km yarıçaplı, doğu kenarı **düz çapraz** bir çizgi (Voronoi
  bisektörü gibi durmuyor) — kesilmiş gibi.
- Tarih tarafı (KASA, bitti): Bölge Uyvar eyaletinin Bar (Tekov) ve Hond nahiyeleriyle uyumlu
  (TDV `uyvar`; Çalışır, Bilkent YL 2009, s.46-48). Kesin sınır çizgisi YOK; defter sahipliği ≠
  fiilî denetim. Yani veri tarafında "Osmanlı olmalı" kısmen destekli, kesin değil.

## 3. İSTENEN — motoru değiştirmeden TANI
**Motor dosyalarına dokunma** (`uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`),
üretim çıktısını (`data/*.js`) ezme, `main`e motor commit'i sokma. Tam koşu da gerekmeyebilir:
önce önbellekten / son koşunun ara çıktılarından oku (`MOTOR_ONBELLEK_DIZIN`, `MOTOR_DEVAM`).
Bölge-sınırlı koşu bayrağı motorda **yok** (`MOTOR_KUTU` benzeri bir şey bulamadım); gerekiyorsa
mevcut koşu çıktısını bir ölçüm betiğiyle bu kutuya kırp (betik `denetim/` ya da scratchpad'de kalır).

Kutu: **47.8–48.1 K / 18.2–18.8 D**, gün **1676-09-19**. Ölçülecek yerleşimler: Bratislava,
Yanıkkale (Győr), Komárom (Komárno), Nitra, Léva (Levice), Uyvar, Estergon, Vaç, Aquincum-Óbuda-Pest,
Somorja (Emre'nin listesi — kutuya girmeyenler yalnız komşuluk için).

Her biri için sayı ve km² yaz:
1. **Uyvar'ın ve Estergon'un o günkü ham Voronoi peteği** ve sonraki aşamalardaki hâli (kıyı kesimi,
   A1 tavanı [200 km], ada kuralı, kara-kısıtlı sahiplik, çöl tavanı, örtü sadeleştirme). Girinti ham
   Voronoi'de Uyvar'ın içinde mi? Hangi aşamada Uyvar'dan çıkıyor?
2. **`macaristan-habsburg` gövdesi** (yabancı havuz, `DEV_HALKA`): kapama (`kapat`), B2 köprüsü, B3
   koridor doldurma, `_komsu_toprak_cikar` **öncesi ve sonrası**. Girinti bu adımlardan birinde
   Habsburg'a mı ekleniyor? Eklenen alan (km²) ve hangi adım?
3. **Osmanlı havuzu (`PARCALAR`) ile yabancı havuzun öncelik kuralı:** aynı toprak iki havuzda da
   varsa hangisi boyuyor (çizim sırası / çıkarma)? Girinti Osmanlı petekte VAR ama Habsburg gövde
   üstüne mi biniyor, yoksa Osmanlı petekte hiç YOK mu?
4. **Kronoloji sınır hattı:** `MOTOR_SINIR_KISIT=1` iken D/E/F egemenlik hattı gövdenin kesin kısıtıdır
   (koşu bayrağı listesinde var). 1664 Vasvár (9-10 Ağustos) için `data/kronoloji_sinir*.js` ya da
   `data/antlasma_haritalari.js`te bir hat var mı, ve o hat bu kutuyu Habsburg/Osmanlı diye KESİYOR mu?
   Uyvar poligonunun düz çapraz doğu kenarı bu hattan gelebilir — **ilk şüphelim bu.** Elle çizilmiş
   bir hatsa girinti motor hatası değil VERİDİR (o zaman hattın kaynağını ve doğruluğunu ölç).
5. **Neden Uyvar'ın peteği bu girintiyi taşımıyor?** Uyvar `kd:` ile 1663-09-24→1685-08-19 arası
   k:1 (eyalet merkezi). Epok / `kur:` / bölge (`m:`) / `kademe` mantığının etkisini ölç.

**Beklenen:** girintinin hangi aşamada ve hangi kuralla Habsburg'a geçtiğini söyleyen **tek cümlelik
kök neden** + rakamlar + (varsa) küçük, kapsamı sınırlı düzeltme önerisi: motor düzeltmesi mi, veri
(`s:`/`d:`/hat) düzeltmesi mi, yoksa harita doğru mu. Motor düzeltmesi gerekiyorsa **uygulama;** diff
olarak `denetim/MOTOR-<ad>-<tarih>.diff` yaz ve Emre'ye öner (koşu sürerken motor dondurulu —
CLAUDE.md "Motor dondurma").

## 4. Kurallar (CLAUDE.md'den, bu iş için)
- Motor/tuz dosyalarına dokunma; HAVVA'da koşu sürüyorsa bu iş koşuyu bölmez, önbellekten okur.
- Ölçülemedi ≠ yok ≠ temiz. Rakamın yanına hangi makinede, hangi ağaçta/koşuda ölçüldüğünü yaz.
- Kaynak kuralı: veri önerisi yazarsan TDV ilk başvuru; Vikipedi tek dayanak olamaz.
- Raporu #175'in altına yaz; sonunda **ÖZET** (Hüküm / Senden beklenen / Bilgi) bırak
  (`/postit` skill'indeki kalıp).
- İş bitince: kilitler bırakılır, worktree kaldırılır, `main`e yalnız `py arac/push_kapisi.py --kim "<AD>"`.
