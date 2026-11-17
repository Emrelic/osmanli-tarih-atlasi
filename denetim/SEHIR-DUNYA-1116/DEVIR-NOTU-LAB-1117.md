# LAB DEVİR NOTU (17 Kasım 2026) — yeni oturum için kısa özet
Dal `sehir-afrika-1116` (origin'e push'lu; main'e itme yok). Çalışma ağacı: `.claude/worktrees/sehir-afrika-1116`.
Birleşik JSON kaynakları (JS buradan üretilir): `denetim/SEHIR-DUNYA-1116/F2-1117/{hint_birlesik11,orta_asya_birlesik10,afrika_birlesik10}.json`;
üretim: `py arac/sehir_tarihce.py yaz <json> data/sehir_tarihce_<bolge>.js <HINT|ORTA_ASYA|AFRIKA_GB>` ; denetim: `… denetle <js>` (ihlal 0 şart).
## Durum (denetle ihlal 0)
hint 91 · orta_asya 44 · afrika_gb 104 şehir kaydı; `ad_kaynak` (çok dilli ad) 147 şehir/536 girdi/36 dil; P3 ajan partileri B01-B21 + ön tarama (ON.json) yazıldı; kalan P3 B22-B38 (365 ad) Britannica ön taramasından geçti (kuruluş cümlesi olanlar kayda çevrildi).
## Yöntemler (kısa dosyalar)
- `ON-TARAMA-YONTEMI-LAB.md` (ucuz Britannica ön tarama) · `P3/GOREV.md` (ajan görevi; verim %5-12: kullanma) · `KOORD/` (GeoNames koordinat taraması; yalnız Hint ilk 241 satır tarandı; Afrika/Orta Asya LISTE TARANMADI).
- `ATLAS-BASLANGIC-ADAYLARI-LAB.tsv` (140 satır; KASA'ya) · `MUKERRER-SEHIR.tsv` + `AD-KAYNAK-YAMA-OTEKI.json` (KASA) · `yama_hakem13.json` · `CIFT-ID/` (12 çift id yaması).
## Açık işler
1. Afrika/Orta Asya LISTE koordinat taraması (GeoNames; adı Chapra tipi yazım varyantlarını yakalamaz: 'ilk PPL' tahminleri güvenilmez; en kalabalık nüfuslu PPL + elle inceleme).
2. P3 kalan: Columbia/SAHO ön tarama uyarlaması (verim düşük); ajan partisi AÇMA.
3. Aşama 2 (ad eşdeğer): 8 şehir ad_kaynak'sız; 62 mevcut ad `adlar_kaynaksiz`.
## Kurallar
Yalnız Sonnet; rapor = sayı + dal + engel; yeniden tarama/tekrar doğrulama yok; indirme izni: yalnız archive.org açık erişimli *_djvu.txt (Emre sohbetinde verdi).
