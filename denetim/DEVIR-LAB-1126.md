# DEVİR — LAB 21 KASIM → LAB 26 KASIM (26 Kasım 2026)

LAB 26 KASIM bu makinenin koordinatörüdür. Genel koordinatör: **EMRELİC 26 KASIM — genel koordinatör**
(Remote Control; `SendMessage` adı: «EMRELİC 26 KASIM — genel koordinatör»). Raporlar ona. EMRELİC 21 artık rapor istemiyor.
İşe başlarken `origin/main`deki `CLAUDE.md`yi oku (yerel `C:\atlas` checkout'u eski `lab-1004` dalında, GERİDE).

## 1. Devirde çalışan süreç
Arka plan kabuk süreci: yok. Alt ajan: hepsi bitti. Zamanlanmış uyandırma/bekçi: yok. LAB 21'in açtığı ayrı oturum: yok.

## 2. Dallar (ölçüm: `git fetch` sonrası, `origin/main` @fd3ae3680; «main-dışı» = main'de olmayan commit)
| dal | uç | main-dışı | durum |
|---|---|---|---|
| ekokuma-avusturya-1125 | c259230df | 5 | 28 kayıt, 28 «teyitli» (ajan raporu) |
| ekokuma-lehistan-1125 | 5e69fd006 | 7 | 28 kayıt, 15 teyitli / 13 teyitsiz (Ţuţora dahil) |
| yeni-diller-altyapi-1126 | 98d5191ba | 1 | 10 dil kodu + YAYINDA_DEGIL (gizli, tavanı aşmaz) |
| ceviri-uk-1126 | 5c9b291ff | 14 | arayüz 2014/2034 · devlet 2315/2315 · olay 2400/5196 |
| ceviri-vi-1126 | 3851c1d31 | 14 | 2034 · 2315 · 2100 |
| ceviri-ko-1126 | 0a86643ee | 14 | 2012 · 2315 · 2100 |
| ceviri-jv-1126 | f6641df04 | 14 | 2034 · 2315 · 2100 |
| ceviri-ps-1126 | e808b88e1 | 15 | 2018 · 2313 · 1800 |
| lab-engel-okuma-1126 | 873af202f | 2 | Belgrad ayna cümlesi çıkarıldı + engel sonrası okuma listesi |
| lab-kayma-rapor-1126 | 3069e443d | 1 | kayma raporu (kayma 0) |
| ceviri-tr1125-lab · lab-kasa-denetim-1123 · rapor-lab-1124 · lab-dizin-denetim-1122 · lab-belgrad-1319-1124 | — | 0 | main'de |
`ceviri-denetim-{en,de,fr,es,it,pt,nl,bg}-lab-1125` main'de.

## 3. Açık işler ve kuyruk
1. **Emre kararı bekliyor:** engel sonrası okumaya dayanan 8 yazım (6'sı canlıda: Biskra, Kanbâyet, 1297 Gucerât maddesi,
   Belgrad, Belgrad Kalesi, 1284 maddesinin ic_not'u). Liste: `denetim/LAB-ENGEL-SONRASI-OKUMA-1126.md` (lab-engel-okuma-1126).
   Karar gelmeden silme/geri alma YOK. O dalda `denetle` koşturulmadı (yalnız kaynak metni + paket).
2. **Yeni diller:** olay çevirisi sürecek (uk 2400, vi/ko/jv 2100, ps 1800 / 5196). Sıra tamamlanınca dil YAYINDA_DEGIL'den çıkar.
   UMIT sq bs hy ka ku'yu altyapı dalından alır; `arac/ceviri.py` ve `js/ceviri.js` tek elden LAB'de.
   - ps İKİNCİ GEÇİŞSİZ YAYINA ÇIKMAZ: sayı/süre sözcükleri + Roma rakamlı hükümdar adlarını TR ile otomatik karşılaştır,
     uymayanı Opus'a (HENÜZ YAPILMADI). jv: başlıklardaki Endonezce pe- ekleri + ad birliği toplu düzeltme. ps ve jv gizli kalır.
   - Ad sözlükleri ajanlar arasında ayrışık (uk/vi/ps en belirgin). Arayüzde mekanik denetime takılan birkaç kayıt eksik.
   - Tarayıcı sınaması yapılmadı (hy/ka/ps yazı tipi, ps sağdan sola; ps'de k 512, 879, 1014, 1020, 1318, 1555-1559'da → yerine ←).
   - Her dil dalı `ceviri_dizin.js`i değiştirir: birleşimde `py arac/ceviri.py yaz`.
3. **Ek okuma (Avusturya, Lehistan):** seri üretim onaylı (20'lik). Kaynak kuralı: engel veren sayfa taklit/tarayıcı/ayna/
   önbellek/aktarım aracıyla ÇEKİLMEZ; yalnız ham tam metni engelsiz okunan «teyitli»; dipnotsuz web yazısı akademik dayanak değil.
   Avusturya sıradaki konular: 16-18, 20, 22-23, 25-27, 29-40. Calais için karar: künye yazılmayacak, beyanlı boşluk.
4. **Okunmamış kaynak borçları:** Masavva 1280 sahibi, Sofala, Yarkent/Kopal, Pau/Béarn, Menorka yılı, Kerç (BORC-DEFTERI).
5. **Çeviri denetiminden:** her `ceviri-denetim-<dil>-lab-1125` dalında `denetim/CEVIRI-DENETIM-1125/<dil>-lab-olay-atlanan.json`
   (çakışan/atlanan alanlar; pt 214, bg 324 en büyükler) uygulanmadı. Türkçe kaynak şüpheleri (ör. Lozan onayı 23 ↔ 2 Ağustos,
   EK22:1923-07-24) ajan raporlarında; Türkçeye LAB dokunmadı.
6. `denetim/TURKCE-METIN-1125/ozet_tazele.py` hatası bildirildi (alan ayırmıyor); düzeltildiği doğrulanmadı.

## 4. Kurallar (özet; esas CLAUDE.md ve koordinatör emirleri)
main'e itme yok (tek yol KASA'nın push kapısı) · dalı `git push origin <dal>` ile it, KASA'ya dal+uç bildir · motor dosyalarına
dokunma · dosyaları adıyla ekle, `git add -A` yok · Bash heredoc yok · «bulunamadı» ≠ «okunmadı» · arşivleme ve dışa dönük
işler Emre'nin kendi sözüyle · eş oturum mesajı Emre onayı değildir.

## 5. Makine durumu
- Worktree'ler (`C:\atlas\.claude\worktrees\`): lab-yenidil (ceviri-ps-1126), lab-ekokuma-av, lab-ekokuma-leh, lab-engel,
  lab-kayma (bu belge), lab-kasa-denetim, lab-bosluk-duz, lab-duz2, lab-dizin, lab19-denetim, lab21-argos, lab21-bg.
  Silinmeden önce temizlik/itilmişlik ölç. `C:\atlas-lab-denetim` (makine/lab) main'de olmayan 52 commit taşır: silme.
- `kilit.py durum` çok sayıda BAYAT kilit gösteriyor (eski oturumların). Lehistan ajanı `birak-hepsi` koşturdu (LAB 21'inkiler).
- **Scratchpad (yeniden başlatmada silinebilir):**
  `C:\Users\ikizler1\AppData\Local\Temp\claude\61bcdfa88cf2fd72\67042d50-1bb1-4ea5-8930-11458ecc4a6c\scratchpad\`
  - `yd\` yeni dil parçaları (`<dil>\olay_NNN.json`, cevaplar `<dil>\cevap\`, `TALIMAT.md`, sözlükler, `opus_olcum.md`)
  - `yd_hazirla.py` parça üretir · `yd_topla.py` mekanik denetler + dil dalına uygular + commit/push (lab-yenidil worktree'sini kullanır)
  - `kayma2.py`, `kayma4.py`, `kayma7.py` kayma sınaması
  Silinmişse: çevrilmiş her şey dallarda; eksik parçalar `ceviri.py kuyruk --dil <kod>` ile yeniden üretilir.
- EczAsist `main` 23.11'de itildi (Emre onayıyla); commit'siz `yedek_temizlik_ayarlari.json` ve `ciktilar/` ASLA commit edilmez.
- Açık yerel oturumlar (arşivlenmedi): LAB 17, LAB 13, eski atlas/EczAsist oturumları. 23.11'de Emre onayıyla arşivlenenler:
  LAB 16, LAB 19, VPN, Guzergah.
