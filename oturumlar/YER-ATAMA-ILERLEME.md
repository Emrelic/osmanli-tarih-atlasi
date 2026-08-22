# YER ATAMA — ilerleme defteri

## Kimlik
- **Ad (tahtada):** `YER ATAMA` (eski ad: `SONNET HAZIR KITA 60`)
- **Dinlenen adlar (bekçi):** `YER ATAMA`
- **Model:** Sonnet 5
- **Koordinatör:** OSMANGAZİ
- **Dosyam:** `data/yer_yama.js` → `window.YER_YAMA` · bu defter
- **Yazmayacağım:** `olaylar*.js`, `kronoloji_*.js` — sahipleri var (`CLAUDE.md §7`)

## 2026-08-22 — açılış ve zemin doğrulama

1. `git pull` — güncel, `oturumlar/YER-ATAMA.md` zaten yerdeydi.
2. Şartname baştan sona okundu.
3. Bekçi değiştirildi: eski `SONNET HAZIR KITA 60,HAZIR KITA 60,KITA 60`
   nöbetçisi durduruldu, yeni ad `YER ATAMA` ile Monitor üstünden kuruldu.
4. **§1 sayıları bağımsız ölçüldü** — `arac/girdi.py` ile 2603 yerleşim adı
   çekildi, ardından `data/olaylar*.js` + `data/kronoloji_*.js` diskte
   `eval` ile yüklenip `yer_id` alanı bu havuza karşı sınandı (regex değil,
   projenin kendi diliyle — `CLAUDE.md §11`).

   ```
   MOD B (diskteki 45 dosyanın TAMAMI, sirbistan DAHİL):
     toplam 4262 · yer_id YOK 1488 · eşleşmiyor 8 · (eşleşiyor+kapsam_genis) 2766
   ```
   **Koordinatörün 4262 / 1488 / 8 sayıları BİREBİR TUTTU.**
   `eşleşiyor` (2585) ile `kapsam_genis` (181) arasındaki 10 kayıtlık fark
   sıralama önceliğinden geliyor: 10 kayıtta **hem `yer_id` hem
   `kapsam_genis:true` birlikte** duruyor (örn. Frankfurt Paulskirche →
   `yer_id:"Frankfurt", kapsam_genis:true`). Ben `kapsam_genis`i önce
   sayınca 191 çıktı; koordinatör muhtemelen `yer_id`yi önce saymış (2585).
   Toplam ve iş kapsamımı (1488) etkilemiyor, bilgi amaçlı not.

5. 🔴 **BULGU — tahtaya bildirildi, cevap bekleniyor:**
   `data/kronoloji_sirbistan.js` (318 satır, KRONOLOJI_SIRBISTAN) diskte
   var ama **`index.html`e bağlı DEĞİL** — kullanıcı bugün onu hiç görmüyor.
   Koordinatörün 4262 sayısı bu dosyayı İÇERİYOR (bağlı 44 dosyaya göre
   toplam 4227, +35 sirbistan = 4262). Ve şartnamenin §5 sıra listesinde
   (① olaylar* · ② iran/kirim/macaristan/... · ③ ingiltere/isvec/...)
   **sirbistan hiç anılmıyor.**
   ⇒ Sordum: sirbistan'ı işleyeyim mi, yoksa bağlanmayı bekleyen ayrı bir
   parça mı (başka bir SIRBİSTAN KRONOLOJİ oturumunun elinde olabilir)?
   Cevap gelene kadar sirbistan'a DOKUNMUYORUM — hem yamada hem kapı
   betiğinde §5 sırasındaki dosyalarla sınırlı kalıyorum.

## ① olaylar*.js — kapsam ölçümü

18 dosya (olaylar.js, olaylar_7a4170.js, olaylar_ek.js, olaylar_ek2…16.js) —
toplam **1223 madde**, `yer_id` eksik **412** (şartnamenin "~336" tahmininden
farklı — kaba tahmindi, kendi ölçümüm taban).

`yer_id` eksik 412 madde ikiye ayrıldı:
- **140 "kolay"** — maddenin KENDİ `yer:` alanı (yazarı zaten TDV'den
  doğrulamış, `kaynak:` slug'ı da orada) yerleşim havuzuyla (2603 kayıt)
  BİREBİR ya da ilk virgül-öncesi parçasıyla eşleşiyor. Yeni araştırma
  YAPILMADI — var olan beyanı koordinat bağlantısına çevirdim.
- **272 "araştırma gerektiren"** — `yer:` alanı yok ya da havuzda karşılığı
  yok. TDV'den tek tek doğrulanacak, sıradaki iş.

## PARTİ 1 TESLİM — 140 kayıt

`data/yer_yama.js` yazıldı (**COMMIT EDİLMEDİ** — NOKTA EPİR emsali: veri
dosyası çalışma ağacında bırakılıyor, koordinatör uygulayınca commit'lenecek).

Kapı betiği iki yönde sınandı:
```
ATEŞLEME (5 kasıtlı bozuk kayıt) → 5/5 hata sınıfı yakalandı, çıkış 0
TEMİZ (gerçek 140 kayıt)         → 0 hata, çıkış 0
  · dosya·t·b·kaynak dolu ✓ · yer_id∨eksik_nokta∨kapsam_genis tek seçenek ✓
  · yer_id'lerin HEPSİ 2603 havuzunda VAR ✓ · mükerrer anahtar yok ✓
  · b alanı kaynak dosyadaki (dosya+t+b) kayıtla BİREBİR eşleşti ✓
```

## Durum
**Devam:** 272 kayıtlık araştırma partisi üstünde çalışıyorum (TDV tek tek).
`kronoloji_sirbistan.js` sorusu hâlâ cevapsız — dokunmuyorum.
