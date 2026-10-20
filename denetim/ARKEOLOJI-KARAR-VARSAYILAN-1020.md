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
