# ÖNDEN-1 RAPOR (UMIT, 17 Kasım 2026)

① Ölçülen
- Aday: 327 (BORC, eklenen boş) → 70 tarihce_var (iki yönlü ad/≤10 km; yerel + origin/main 2975 kayıt) → 257 → 16 'kaynakta yıl yok' denenmiş → **241 ad tarandı** (6 grup, Britannica /place/, tarayıcı içi fetch+DOMParser, 350 ms, FAQ/YZ bloğu hariç).
- 241 slug: 83 sayfa açıldı, 158 404/400. 158 için Britannica arama (/search?query=) yedeği + doğru yer kontrolü (ülke/slug); yanlış-yer sayfaları ele. Ek olarak sayfası olup regex'te hiç cümle çıkmayan 70 sayfa geniş regex ile yeniden tarandı.
- Yıllı kuruluş/ilk-anılış cümlesi elle seçilen: **32** (1'i Britannica içi çelişki yüzünden düşürüldü: La Isabela).
- **Yazılan: 31 kayıt · 26 sahiplik dönemi (__BOSLUK__) · 31 olay** → `data/sehir_tarihce_onden_1.js` (`window.SEHIR_TARIHCE_ONDEN_1`). Tanıkların hepsi sayfa gövdesinde `includes()` ile birebir doğrulandı (≤15 kelime).
- `py -I -X utf8 arac/sehir_tarihce.py denetle` → **ihlal 0, uyarı 9** (5 'atlas başlangıcı düzeltilmeli': Baracoa 1511-08-15↔1512, Borås 1281↔1622; Arak/Fianarantsoa/Charlotte Amalie aynı yıl = uyumlu; 4 dikiş beyanı: Colón, Copán, Dos Pilas, Higüey).
- Dağılım: atlas noktasız 22 (zincir 1900'e __BOSLUK__), atlas başlangıcı kaynak yılında ya da önce 5 (sahip []), atlas sonra 4 (sahip __BOSLUK__ + dikis_beyan).

② Bulunamayan
- Hedef 60 → 31. ≈105 ad Britannica'da madde yok; ≈70 sayfada yıllı kuruluş cümlesi yok (ayrıntı YAZILAMADI-ONDEN-1.md).
- Sahip zinciri hiçbir kayıtta kaynaklanmadı (Britannica sahiplik vermez): hepsi __BOSLUK__ beyanlı; sömürge sahipliği ayrı iş.

③ İstenen / öneri
- KASA: Baracoa (atlas 1511-08-15) ve Borås (atlas 1281, kaynak 1622) için atlas başlangıcı düzeltme adayı.
- Kalan ≈ 210 ad için Britannica yetmez: Columbia/EI2/Iranica/ELAHC ikinci tür kaynak turu (özellikle Kafkasya/İran/Afganistan, Finlandiya, Faroe) önerilir.
- Britannica YZ-SSS bloğu süzgeci uygulandı; sayfalarda ajanlara talimat veren metin görülmedi. Tarayıcı: kendi sekmem (tab-21), sed/heredoc yok, commit/push yapılmadı.
