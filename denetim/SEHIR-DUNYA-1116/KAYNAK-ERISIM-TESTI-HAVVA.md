# Kaynak erişim testi — gömülü tarayıcı (HAVVA, 16 Kasım 2026)

Yöntem: Claude'un gömülü tarayıcısı (WebFetch DEĞİL), tek sayfa, sayfa okuma (`document.body.innerText` uzunluğu),
indirme yok. Karakter sayısı = tarayıcının görünür metni.

| Kaynak | Sayfa | Sonuç | Karakter | Not |
|---|---|---|---|---|
| britannica.com | /place/Poznan | AÇILDI, tam gövde okunuyor | 10.904 (ilk okuma 4.129; sayfa kaydırmadan sonra) | WebFetch'in 403'ü tarayıcıda YOK; metinde 968, 1253, 1518, 1793… yılları görülüyor (Poznań ilk anılış 968 ipucu). Abonelik kesmesi ifadesi sayfada var ama gövde okunuyor. |
| treccani.it | /enciclopedia/poznan/ | AÇILDI, tam gövde | 7.661 | WebFetch 'boş' dönmüştü; tarayıcıda içerik var. |
| persee.fr | /search?q=Dhofar | AÇILDI | 10.390 | Arama sonuç listesi okunuyor; makale sayfası ayrıca sınanmadı. |
| cambridge.org/core | /search?q=Dhofar | AÇILDI | 13.223 | 25 sonuç; özet sayfaları okunabilir, tam metin abonelik. |
| hrcak.srce.hr | / | AÇILDI | 4.337 | Hırvat ulusal dergi portalı; makale PDF'leri ayrı. |
| dergipark.org.tr | /tr/pub/belleten (dergi ana sayfası) | AÇILDI | 5.767 | AMA /tr/search?q=… ARAMA sayfası **bot doğrulaması** (CAPTCHA) istiyor (`/search/verification`, 436 karakter) → arama otomatik kullanılamaz; tekil dergi/makale sayfası açılıyor. |
| academia.edu | /search?q=Dhofar history | KISMEN | 1.418 | Yalnız arama özeti; makale tam metni giriş (Log In) ister. |
| ceeol.com | /search/article-detail?id=773190 | AÇILMADI/BOŞ | 0 | Sayfa yüklendi ama gövde boş (JS/bot koruması); özet bile okunamadı. |
| qdl.qa (Lorimer) | /en | AÇILDI | 2.032 | Ana sayfa okunuyor; ARAMA (`/en/search/site/…`) **HTTP 525** (SSL el sıkışma hatası) → arama sayfası kullanılamıyor. Belge sayfası URL'si bilinirse sınanmalı. |
| doiserbia.nb.rs | / | AÇILMADI | — | TLS sertifika hatası (ERR_CERT_COMMON_NAME_INVALID); atlanmadı/ayar kapatılmadı. |
| cobiss / Bulgar bg-ban | — | SINANMADI | — | Bütçe; sonraki tur. |

## Borçlara etkisi
- **Poznan / Legnica / Kielce:** Britannica + Treccani tarayıcıyla okunur → ilk anılış (968) için ikinci akademik kaynak (Thietmar'a atıf) aranabilir.
- **Dhofar/Seyûn (Lorimer):** QDL arama 525; belge sayfaları doğrudan URL'yle denenmeli (bilinen: `qdl.qa/en/archive/81055/vdc_…`).
- **Orašac/Takova/Višegrad/Dvin:** Hrčak + Persée + Cambridge arama özetleri okunur; DergiPark ARAMASI yok, dergi/makale doğrudan URL'yle.
- **DergiPark arama doğrulaması** CAPTCHA'dır: aşılmaz; makale URL'si Emre/ajan elle verilirse tarayıcı okur.
