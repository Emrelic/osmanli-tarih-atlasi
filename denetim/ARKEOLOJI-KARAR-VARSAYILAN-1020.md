# ARKEOLOJİ KATMANI — §11 KARARLARI İÇİN VARSAYILANLAR (20 Ekim 2026)

Yazan: VERI-MO-ARKEO. Şartname: `ARKEOLOJI-KATMANI-SARTNAME-1018.md` §11. Emre'den bu kararlar için cevap
gelmedi; onay beklenmeden aşağıdaki **varsayılanlar** uygulandı. Hepsi **varsayılan, Emre değiştirebilir** —
değişirse yalnız ilgili kayıtların `t`/`aralik` alanı yeniden üretilir (üretici betikler `denetim/`de).

| # | Soru | Varsayılan (uygulanan) | Gerekçe | Değişirse ne olur |
|---|---|---|---|---|
| 1 | Dönem-toplamı aralığına orta nokta? | **Hayır** — `tur:"donem-toplami"` / `"yerlesim-suresi"` için `t` = en eski uç (ALT SINIR) | Aralık sürenin kendisi; orta nokta «yerleşim şimdi başladı» der (yanlış). `arkeoloji_denetle.py` bu kuralı zaten sınıyor | Bu türden kayıtların `t`si ve denetim kuralı |
| 2 | Yarım yıl hangi yöne? | **Daha geç yıla** (küçük MÖ sayısı) | Kaynağın söylemediğinden erken görünme; Şırnak kalıbıyla aynı yön | Kayıtlarda ±1 yıl |
| 3 | MÖ petek yarıçap tavanı | **Bu işin kapsamı DEĞİL (motor, MÖ-MOTOR sahibi).** Öneri: ayardaki **7 günlük** sürtünmeli yürüyüş (5/7/10'un ortası); aşan toprak `__BOSLUK__` + `bos:"veri-yok"` | Veri yoğunluğu MÖ'de düşük; tavan yoksa tek nokta kıtayı boyar | Yalnız motor ayarı; bu verideki hiçbir kayıt etkilenmez |
| 4 | Ufuk dışı (örn. Ain Mallaha MÖ 12155) | **Kayıt TARİHİ AYNEN tutulur**, harita `f`'i ufka kenetlenir (`UFUK` = `-11999-01-01`); ufuk sessizce kaydırılmaz | Emre'nin MÖ 12000 ufku; tarihi kırpmak veri kaybı | Ufuk MÖ 12200'e açılırsa kayıt zaten doğru günde duruyor |
| 5 | Çekirdek (1281-1923) çubuk payı | **%62 yeterli**, ama arayüz işi (K7) bu oturumun dışı | Şartname hesabı; arayüz oturumu ölçer | Yalnız `js/` |
| 6 | Sahiplik (kültür) | MÖ kültür/yerleşim için `d:"__BOSLUK__"` + `ic_not`'ta `bos:"veri-yok"` beyanı («sahip kavramı yok ≠ kültürsüz»); `bos:` alanı yerleşim NOKTASI içindir, `sehir_tarihce` sahip dönemine yeni alan eklenmedi | `VERI-YAPISI.md:44-48` | Motora yerleşim noktası girince `bos:` o noktada yazılır |
| 7 | Yerleşim noktaları motora girsin mi? | **Hayır** — `sehir_tarihce_arkeoloji*.js` (motor/site okumaz). Yerleşim dosyası `GIRDI_DOSYALARI`'na girerse motor tuzu değişir/koşu etkilenir | CLAUDE.md «Motor dondurma»; MÖ-MOTOR işi | MÖ-MOTOR hazır olunca bu dosyalardan `yerlesimler_mo_*.js` üretilir |
| 8 | Kaynak çelişkisinde seçim | **Tek kaynak, gerekçeli**; ortası alınmaz (şartname §3.2) | Hiçbir ölçüm olmayan ortalama | — |
| 9 | Kronoloji okulu (yazılı dönem) | **Orta kronoloji** (Mezopotamya), Shaw 2000 / Dee 2013 farkı kayıtta açıkça yazılı | Alandaki en yaygın okul | Kayıtlarda yıl kayması; `ic_not_d` karşılığı verir |

## Emre devretti, bilimsel gerekçe (21 Ekim 2026, VERI-MO-ARKEO gözden geçirmesi)

Dokuz varsayılan gözden geçirildi; 1–6 ve 8 olduğu gibi kalır. Değişen ya da netleşen:

- **#7 güncellendi:** yerleşim noktaları artık motora girer — `yerlesimler_mo_*.js` dosyaları `GIRDI_DOSYALARI`'nda ve BOYALAR hazır (MO-MOTOR). Yalnız BOYALAR'ı olmayan künyeli noktalar `yerlesimler_mo_boya_bekleyen.js`te park edilir. `sehir_tarihce_arkeoloji*.js` hâlâ motora girmez.
- **#9 netleşti (kronoloji okulu, alan bazlı):** Mezopotamya'da orta kronoloji esas; çelişkili okul değerleri `ic_not`ta iki kaynağıyla beyan edilir, ortalanmaz. **Mısır Erken Hanedan'da Dee vd. 2013 (radyokarbon + Bayes) esas:** Aha tahta çıkışı MÖ 3126 (astronomik -3125) → `misir-erken-hanedan` f = `-3125-01-01`, Naqada t ile uç uca (çakışma yok, sıfır uzunluk yok). Gerekçe: ölçüme dayanan, %95 aralığı yayımlanmış tek model; Shaw 2000 (~3100) ve AIC/EES (~3000) kronolojik gelenektir, aralığın içinde kalır ve künye metninde beyanlıdır.
- **İki kaynaklı uç / okullar arası çelişki kuralı (yeni, genel):** kaynaklar farklı uç verirse **iki değer `ic_not`ta iki kaynağıyla yazılır, seçim yapılacaksa gerekçesi yazılır, aradaki boşluk zorla kapatılmaz** (Hicrî yıl kuralının ilkesi). Çelişkili (`celiskili:true`) şehir dönemleri zincir üreticisine ALINMAZ.
- **Künye ucu önerileri (Eski Krallık t, Hitit t, Kush 25. Hanedan t, Ahameniş Mısır t) mevcut değerle kalır:** ajan raporu fark gösteriyor (Eski Krallık 2181 ↔ Erdil 2025 aralığı 2283–2158; Hitit 1180 ↔ Manning 2023 ~1198–1196; Kush 653 ↔ 672/664/656; Ahameniş Mısır 404 ↔ 402/408) ama farkın bir kısmı aralık içinde; değişiklik için ikinci bağımsız teyit gerekir. Bu uçlar `denetim/arastirma/4-misir-hitit-levant.json` `kunye_karsilastirma`'dadır.
