# KASA-BAYAT-OZILAN-1010 — bayat öz-ilan taraması (üç kova)

Görev: YILDIRIM BAYEZIT (M-5905 ④ + son hüküm ⑥: "formülü bekleme, ③'e geç") · Araştırmacı: KASA · salt okuma.
**Bağlayıcı dört şart:**
1. ÜÇ kova ayrı sayılır. "raporda/bildirildi/çelişki" ibareleri ⓑ'ye değil ⓒ ADAYINA düşer; ⓒ kararı VERİYE bakılarak
   verilir.
2. Çıktı LİSTE: kayıt adı + dosya + kova.
3. Hiçbir eski ilan silinmez, çürütme yanına yazılır.
4. Desen `girdi.yukle()` ile kurulur, grep ile değil.

Kovalar:
- ⓐ **SUSAN** — ilan var ama hata, ilanın sustuğu aralıkta (Mljet).
- ⓑ **BAYAT** — ilan çözülmüş bir sorunu açık gösteriyor (Bosna ×5).
- ⓒ **DOĞRU ama UYGULANMAMIŞ** — ilan doğru, raporlanmış, veriye inmemiş (Novi).
- Kova dışı, sayılır ama listelenir:
  - **GEÇERLİ**: ilan bugün de doğru.
  - **İLGİSİZ**: desen tuttu ama cümle bir öz-ilan değil, ya da yıl başka bir olayın.

## Evren (ölçüldü — `girdi.yukle()`, @ 6f9e5fb7; SINIFLANDIRMA YAPILMADAN)
- Taranan: **4300** kayıt.
- Kayıt düzeyinde (`neden`/`not`/`kaynak`) öz-ilan deseni taşıyan: **857** (kaynak 789 · not 40 · neden 38).
  - Desen: araştırılmadı · bulunamadı/bulunamadi · doğrulanamadı · kaynağı yok · komşu emsal.
  - ⇒ Hepsine elle bakılmaz.
- **Mekanik aday kümesi B1** (ⓑ adayı): öz-ilan CÜMLESİNDE geçen bir yıl, kaydın HİÇBİR dilim sınırında / `kur` /
  `bit`'te YOK. Yani ilan, verinin artık taşımadığı bir tarihe atıf yapıyor. ⇒ **29 kayıt, 35 cümle.**
  - Doğrulama: bilinen 5 bayat Bosna kaydından **2'sini** yakalıyor (Brod, Jasenovaç: "1538").
  - Kalan 3'ün ilan yılları hâlâ bir sınırda ⇒ **B1'in duyarlılığı bilinen pozitiflerde 2/5** (beyan; B1 bayatlığın
    yalnız "tarih kayması" yüzünü görür).
- **Mekanik aday kümesi C** (ⓒ adayı, şart ①): herhangi bir metin alanında (kayıt + dilim `kaynak:`)
  raporda/rapora/raporlandı/bildirildi/çelişki rapor ⇒ **23 kayıt.**
- **Bakılacak:** B1 ∪ C = en çok 52 kayıt — HEPSİNE elle (veriye bakarak) bakılır.
- **ⓐ SUSAN mekanik olarak ÖLÇÜLEMEZ:** ilanın sustuğu yerdeki hatayı görmek gövde ölçümü ister ⇒ bu taramada **0
  beklenir**, bulunursa yan bulgu.

## 0. ÖNGÖRÜ (sınıflandırmadan ÖNCE — ayrı commit)
- **B1 (29 kayıt):** ⓑ BAYAT **8 ± 4** · GEÇERLİ **13 ± 5** · İLGİSİZ **6 ± 3** · ⓒ **1 ± 1**.
- **C (23 kayıt):**
  - ⓒ (raporlanmış, veride UYGULANMAMIŞ) **6 ± 3**.
  - ⓑ (raporlanmış VE uygulanmış, ifade bayat) **7 ± 4**.
  - İLGİSİZ ("rapor" başka anlamda: dış rapor, denetim dosyası) **8 ± 4**.
  - GEÇERLİ **2 ± 2**.
- **B1 ∩ C:** **2 ± 2** kayıt.
- **Novi tipi YENİ bir veri hatası** (ⓒ'de, kaynakla teyitli, veri ≠ kayıt içi kaynak) en az 1: **%70**; ≥ 3: %25.
- **Dosya yoğunlaşması:** ⓑ+ⓒ'nin ≥ %50'si **en çok 3 dosyada** (paket-paket güncelleme deseni — Bosna ek29 gibi):
  **%65**.
- **Diff:** ⓒ'lerin veriye bakılarak teyit edilenleri + ⓑ'lerin yanına "⇒ GÜNCEL DEĞİL" notu ⇒ bir diff; tam `denetle`
  ⓑ notları için tabanla AYNI %95, ⓒ düzeltmeleri için kapı sayısı değişebilir.
