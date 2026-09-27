# ODAK-ASYA-0080 — teslim raporu (27 Eylül 2026)

Şartname: `oturumlar/ODAK-ASYA-0080.md` · Paket ODAK-0080 · Asya kolu, 8 dosya.

## ① Ölçtüm
- **Taban** (`py arac/odak_olc.py --dosya …`): 888 madde · ODAKSIZ **59** · BEYANLI→yabancı **137** · yük **196**.
  Şartname tablosuyla **birebir aynı**. Havuz 5662 ad.
- **196 kararın hepsi** sınıflandı ve uygulayıcının süzgecinden geçti (kuru koşu):
  `değişen 193 · zaten böyle 3 · kayıt yok 0 · eski tutmuyor 0 · şartı sağlamadı 0`.
- Sınıf dağılımı: **A 21** (yer_id) · **AK 10** (yer_kon, yaklaşık) · **B 110** · **C 51** · **E 4**.
  `kapsam_genis:true` kaldırılan: **137** (hepsi yabancı; D sınıfı bu kolda YOK).
- Her dosya düzenlendikten sonra node ile yeniden ayrıştırıldı: düzenlenen madde hedefe,
  öteki maddeler eskiye **birebir** eşit (8/8 dosya).

## ÖNGÖRÜ — uygulamadan ÖNCE yazıldı (§11)
```
                   ODAKSIZ  BEYANLI→yabancı
şimdi                  59      137
sonra (app.js)          4        0     ← kameranın gerçekten yaptığı
sonra (odak_olc)       59        0     ← bugünkü sinifla (aşağıda ⚠️ 1)
```
Koordinatör uyguladıktan sonra: `py arac/odak_olc.py --dosya <dosya>` (8 dosya).
`odak_olc` 59 derse bu **beklenen**dir — sebebi ⚠️ 1; 59'dan farklı derse sebebi aranır.

## ② Bulamadım (E sınıfı — 4 madde, kamera durur, panel söyler)
- `kronoloji_cin.js` 1424-08-12 Yongle'nin ölümü — kaynak "yolda" diyor, yer yok (BEYANLI: yalnız `kapsam_genis` kaldırıldı).
- `kronoloji_orta_asya.js` 1207 Kırgız itaati · 1218 Cuci'nin bastırması · 1650 Kırgız İslâmlaşması — yer kaynakta yok (zaten ODAKSIZ, dokunulmadı).

## ⚠️ Aksaklıklar — hepsi BAŞKASININ dosyası, düzeltmedim
1. **`arac/odak_olc.py:156` ölçüm kusuru.** `len(ok) >= 2` odak_kimlik LİSTESİNİN uzunluğuna bakıyor;
   `app.js:11751` ise YERLEŞİM sayısına (`n >= 2`) bakar, tek kimlik yeter. ⇒ C sınıfının 51 maddesi
   (tek kimlik: `qing-hanedani`, `hive`, `nogay`…) kamerayı DOĞRU yere götürdüğü hâlde `odak_olc`
   onları ODAKSIZ sayar. Öneri: `sinifla` tek kimliği de kabul etsin (yerleşim sayımı node gerektirir;
   bu betiğin `ODAK-ASYA-0080-sina.js` yardımcısı app.js yoluyla sayıyor, kullanılabilir).
2. **`js/suzgec.js` `sahipKimlikte` çekirdek-ad eşleşmesi yanlış pozitif:** `mac-hanedani` (Vietnam, Mạc)
   1527'de **Erdel · Budin · Lugos · Peşte · Varad · Yanova** döndürüyor — kid'siz `v:` döneminin `k`
   adı ("Macar…") künye çekirdeği "mac" ile başladığı için. Bu kimliği odak_kimlik'te KULLANMADIM.
   Aynı yol isyan taramasını (`isyanSecim`) ve halka katmanını da besliyor.
3. **`singhasari` kimliği 1292'de Bali · Mataram (Lombok) · Sumbawa · Bima döndürüyor** — Singhasari
   Doğu Cava'daydı (`§3.5 devlet var, yeri yanlış` sınıfı olabilir). Kullanmadım; `odak_yer:["Malang"]`.
4. **`kronoloji_sinir_asya.js` ÜRETİLMİŞ dosya** (üretici `denetim/ARAC-D5-ASYA-KRONOLOJI-0916.py`).
   Üretici yeniden koşarsa bu 94 odak SİLİNİR. Üreticinin sahibi odak alanlarını öğrenmeli.
5. **Havuz ad tuzakları** (betik bunları tam adla aşıyor, ölçüldü): `Hunza` = Kolombiya'daki
   *Hunza (Tunja)* · `Mataram` = *Mataram (Lombok)*, Cava'daki değil · `Feyzâbâd` iki yerleşim
   (Ayodhya · Bedahşan) — kısa adla yazılsa app.js İLKİNİ alır.

## ③ İstiyorum
- `py denetim/ODAK-ASYA-0080-uygula.py --uygula` (koşu 16 bittikten sonra; betik yalnız `data/` yazar).
- **AK sınıfı (10 madde) ayrı karar:** koordinatlar yerin *bilinen konumu*, ölçüm değil (Göktepe ·
  Fetihpûr Sikri ×2 · Buksar · Sâsârâm · Ömerkût · Ranthambor · Calor · Kançi · Kolaçel). Kabul
  edilmezse `--konsuz` her birine hazır YEDEK `odak_yer`i uygular; `--grup A,B,C,E` AK'yi hiç indirmez.
- ⚠️ 1'in düzeltilmesi (koordinatör/`arac` sahibi) — yoksa bu paketin kazancı ölçümde görünmez.

## Dosyalar (hepsi `denetim/`, salt okuma ya da kuru koşu varsayılanlı)
- `ODAK-ASYA-0080-uygula.py` — uygulayıcı (196 karar · sınıf + gerekçe + kaynak basar · süzgeç · öngörü)
- `ODAK-ASYA-0080-sina.js` — app.js ad/kimlik kuralıyla şart sınayıcı (uygulayıcı çağırır)
- `ODAK-ASYA-0080-dok.js` — iş maddelerinin dökümü + aday kimliklerin o günkü yerleşim sayısı
- `ODAK-ASYA-0080-ara.js` — havuzda ad / kimlik / künye arama aleti
