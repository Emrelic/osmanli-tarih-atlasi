<!-- DURUM: BOSTA | 2026-08-22 | acildim, KOORDINATOR'a (OSMANGAZI) M-1018 ile bildirdim, gorev bekliyorum -->

# SONNET HAZIR KITA 60-5 — ilerleme defteri

## Kimlik
- **Ad (tahtada, TAM ANAHTAR):** `SONNET HAZIR KITA 60-5`
- **Dinlenen adlar (bekçi):** `SONNET HAZIR KITA 60-5` · `HAZIR KITA 60-5` · `KITA 60-5`
- **Model:** Sonnet 5
- **Kimliğim (session id):** ölçemedim / erişimim yok — bana yazarken yukarıdaki
  üç takma addan biri TAM ANAHTAR.
- Çalışma dizini: `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` —
  atlas deposunun kendisi.
- Koordinatör: `KOORDINATOR` (tahtadaki kanonik ad; kullanıcı bu kişiyi
  "OSMANGAZİ" diye anıyor — board'da her iki yazım da geçiyor, ben `KOORDINATOR`
  adresini kullandım çünkü `_adres_denetle` onu bilinen ad olarak tanıyor).

## 🔴 AÇILIŞTAKİ ADRES TUZAĞI — virgül → tire

Emre bana açılışta "isim çakışmasın diye numaran buçuklu oldu, 60,5 numara
verdim" dedi (zaten canlı bir `SONNET HAZIR KITA 60` var). Bekçiyi ilk kurarken
TAM ADIMI virgülle (`...60,5`) verdim ve **kendi ölçtüğüm** bir arıza çıktı:

```
arac/tahta_bekci.py:161   benler = {_sade(x) for a in ham for x in a.split(",") if _sade(x)}
```

`--kim` değeri HER ZAMAN virgülden bölünüyor, kaçış (escape) mekanizması yok.
`"SONNET HAZIR KITA 60,5"` verince bekçi onu `"SONNET HAZIR KITA 60"` +
`"5"` diye ikiye böldü ve **halihazırda var olan başka bir oturumun**
(`SONNET HAZIR KITA 60`) adını dinlemeye başladı — ilk Monitor bildirimi bunu
doğruladı: `4 ad dinleniyor: 5 | HAZIR KITA 60 | KITA 60 | SONNET HAZIR KITA 60`.

⇒ **Düzeltme:** TAM ADIMDA virgül yerine **tire** kullandım:
`SONNET HAZIR KITA 60-5`. `_sade()` yalnız Türkçe harf/boşluk normalliyor,
tireye dokunmuyor — bölünme riski yok. Bunu KOORDINATOR'a `M-1018`de açıkça
bildirdim (CLAUDE.md `§11`in "aksaklık bekletmeden bildirilir" kuralı).

## 2026-08-22 — açılış

1. `CLAUDE.md` baştan sona okundu: §2 (petek motoru zayıf noktası — noktasız
   bölge en yakın peteğe emilir), §3 (üç değişmez + denetim komutları), §4
   (kaynak kuralı: TDV birincil, dışına çıkarken akademik/bilimsel/güvenilir
   kaynak kırmızı çizgisi, TDV ölü slug tuzağı), §7 (dosya sahipliği — tek
   sahip kuralı, commit yalnız Oturum 0'dan + `oturumlar/` istisnası), §7.1
   (haberleşme protokolü — tahta tek kanal, el sıkışma üç adım).
2. `py arac/isal.py --liste` koşturuldu: kuyruktaki görevlerin tamamı
   **ALINMIŞ**, boş görev yok. Kendi işimi **seçmedim** (`§7.1` / `M-0020`
   dersi: boştaysan kendi iş seçme).
3. `py arac/tahta.py oku --kim "SONNET HAZIR KITA 60-5"` — bana adresli
   mesaj yok (yeni ad, doğal). 193 geçmiş HERKES mesajı okundu-işaretlendi.
4. Bekçi kuruldu — **Monitor** aracıyla (kabuk arka planına değil, `§`
   `tahta_bekci.py` kendi belgesinin şartı), `persistent: true`:
   `py arac/tahta_bekci.py --kim "SONNET HAZIR KITA 60-5" --kim "HAZIR KITA 60-5" --kim "KITA 60-5"`
   İlk bildirim doğrulandı: `3 ad dinleniyor: HAZIR KITA 60-5 | KITA 60-5 | SONNET HAZIR KITA 60-5`.
5. `M-1018` yazıldı: `SONNET HAZIR KITA 60-5 → KOORDINATOR`, cins RAPOR —
   açılış bildirimi + adres tuzağı bulgusu + görev talebi. Push edildi.

## Durum

**BOŞTAYIM — kendi işimi SEÇMİYORUM.** KOORDİNATÖRÜN (OSMANGAZİ) adımla
vereceği bir `oturumlar/<AD>.md` şartnamesini ve başlangıç promptunu
bekliyorum. Nöbetçi kurulu; adıma ya da HERKES'e (özellikle DURDURUCU/ACİL)
gelen mesaj beni uyandıracak. Şartname gelince baştan sona okunacak, içindeki
her sayı bağımsız doğrulanacak (`§11`: "bir sayı bir başkasının iş tarifine
giriyorsa kaba ölçüm yetmez").
