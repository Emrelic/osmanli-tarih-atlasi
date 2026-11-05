# KRONOLOJI-1104 — doğrulama ajanı brifi (kalıcı kurallar)

Her parti ajanına aynen verilir. Kaynak: CLAUDE.md kaynak kuralı + koordinatör kararları
(EMRELİC 1 KASIM, 4 Kasım 2026).

1. **Veriye yazılmaz.** Çıktı yalnız öneri satırıdır (`oneri_L2_<aralık>_dogrulama.tsv`).
2. **Arama aday üretir, GET doğrular.** Arama özeti delil değildir, ipucudur. Tarihi taşıyan
   cümle kaynak sayfasında birebir okunur.
3. **WebFetch 403 ya da boş dönerse tarayıcı paneliyle dene** (navigate + get_page_text);
   ikisi de başarısızsa CEKILEMEDI. Hiçbir madde aranmadan geçilmez.
4. **Sonuç sınıfları yalnız:** DOGRULANDI / TARIH_DUZELT / CEKILEMEDI / BULUNAMADI /
   KAYNAK_UYGUN_DEGIL / KUNYE_DOGRULANAMADI. Kısmi uyum `uyum` sütununa yazılır.
   BULUNAMADI = arandı, akademik kaynak yok. Aranmadıysa ya da sayfa açılmadıysa CEKILEMEDI.
5. **Kaynak kalitesi (kalıcı kural):** DOGRULANDI yalnız akademik kaynakla verilir:
   akademik ansiklopedi (TDV, Treccani DBI, ADB/NDB, HLS, Iranica, DCB, DIB, PWN, RAH DBE,
   Kotobank Yamakawa…), hakemli dergi, akademik monografi, birincil belge neşri (Hansard,
   Aitchison, Hertslet, Yale Avalon), devlet/akademi arşiv kataloğu.
   **Kişisel site, belediye/turizm sitesi, dernek dergisi/bülteni, soyağacı sitesi, haber sitesi,
   popüler tarih sitesi tek dayanak olamaz** → KAYNAK_UYGUN_DEGIL; tarih tutuyorsa ipucu olarak
   `uyum`a yazılır. Britannica/EB1911 ve akademik olmayan eski yerel tarihler (ör. Chalfant 1933)
   tek başına düzeltme dayanağı değildir (en çok kısmi) — tarih düzeltmesi de metin düzeltmesi de
   bunlara tek başına dayanamaz. Akademik monografinin ayna sitedeki metni ipucu değil,
   monografi sayılır; künye yayıncıdan doğrulanır.
6. **Gün ve yıl:** atlas gün yazmış, kaynak yalnız yıl veriyorsa BULUNAMADI + "yıl evet; gün
   yok"; yıl hassasiyetli maddede yıl tutuyorsa DOGRULANDI. Yalnız yıl teyitli madde sınıra
   bağlı değilse YYYY-01-01'e iner, bağlıysa «[yalnız yıl teyitli; gün teyitsiz]».
7. **Takvim:** 1582-10-15 öncesi atlas Jülyen kullanır (kaynak günü). Sonrası Gregoryen; Jülyen
   veren kaynak çevrilir (İngiltere 1752'ye, Rusya 1918'e dek). Ay-güneş takvimi NAOJ ECO ile.
   Devrim takvimi standart çevrimle.
8. **Olay eşleşmesi:** madde metninin neyi anlattığı okunur. İmza / onay / fiilî devir / ilan
   ayrı günlerdir; tek kurala göre sahiplik (s:) değişimi hukukî tasarruf, öncesi isg.
   TDV kendi içinde çelişirse "TDV esas" işlemez: iki madde de yazılır, üçüncü kaynağa gidilir.
9. Açılamayan abonelikli/kitap kaynakları `tarayici_okuma.tsv` sonuna (eser, cilt, sayfa, url,
   soru). Her 10 satırda dosya yazılır. Ara betikler scratchpad'de parti önekiyle.
