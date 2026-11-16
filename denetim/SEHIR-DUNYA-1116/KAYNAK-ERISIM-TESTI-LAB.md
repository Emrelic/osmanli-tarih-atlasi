# KAYNAK ERİŞİM TESTİ — gömülü tarayıcı (LAB, 16 Kasım 2026)

Yöntem: Claude uygulamasının gömülü tarayıcısı (navigate + sayfa metni); yalnız sayfa okuma, dosya indirme yok. Karakter = `document.body.innerText.length` (menü/başlık dahil).
HAVVA'nın ayrı testi (Britannica, Persée, Cambridge Core, Treccani, Hrčak, DergiPark dergi sayfası açılıyor) yinelenmedi; aşağıda LAB'ın kendi ölçümü yalnız kontrol için verilmiştir.

| kaynak | sonuç | bot koruması / giriş | tam gövde? | ölçü (karakter) | not |
|---|---|---|---|---|---|
| iranicaonline.org | AÇILDI | yok | EVET | 8 529 (BUKHARA i, Frye) | WebFetch'in 403'ü tarayıcıda yok; tam madde okunuyor |
| britannica.com | AÇILDI | yok | EVET | 13 404 (Ahmedabad) | tahmini slug 404 verdi (geçerli slug gerekir) |
| dergipark.org.tr | KISMEN | arama sayfası CAPTCHA ("gerçek kişi doğrulaması") | dergi ana sayfası okundu | 3 968 (OTAM ana sayfa) | ARAMA engelli; makale sayfası/özet erişimi bu testte denenmedi (geçerli makale URL'si gerekir) |
| jstor.org | AÇILDI (kısa "Client Challenge" kendiliğinden geçti) | "Have library access? Log in" | dergi sayfası/özet | 2 456 (J. African History) | makale tam metni giriş ister; makale özet sayfası ayrıca denenmedi |
| cambridge.org/core | AÇILDI | yok | dergi sayfası; kitap bölümü giriş/ücret olabilir | 6 398 (JAH sayfası) | makale/bölüm tam metni ölçülmedi |
| academic.oup.com | AÇILDI (ilk girişte Cloudflare "Just a moment", 10 sn bekleyince geçti) | Cloudflare challenge | ana sayfa | 2 039 | makale tam metni ölçülmedi; abonelik gerekebilir |
| persee.fr | AÇILDI | yok | ana sayfa (makale PDF/HTML ayrı) | 6 470 | |
| archive.org tam metin | AÇILDI | yok | EVET | Sewell *A Forgotten Empire* (forgottenempire00robe) 884 536; Majumdar HCIP Vol. VI *Delhi Sultanate* (delhisultanate00bhar) 433 869 | Vol. V *Struggle for Empire* (historycultureof0000unse_n2v6) 252 karakter = ödünç/kısıtlı (tam metin yok); Vol. VI ilk istekte 504 verdi, yeniden denemede açıldı; büyük dosyaları JS fetch ile çekmek 45 sn aşıyor, sayfa olarak aç |
| pleiades.stoa.org | AÇILDI (kısa bot kontrolü geçti) | kısa "Bot olmadığınızdan emin oluyoruz" | ölçülemedi | 2 203 (404 hata sayfası: geçerli yer ID'si denenmedi) | |
| whc.unesco.org | AÇILDI | yok | EVET | 14 806 (Historic City of Ahmadabad) | |
| Hooja / Rajasthan kaynakları | ölçülemedi | — | — | — | kitap (A History of Rajasthan); web'de tam metin kaynağı bulunmadı, archive.org'da aranmadı |

## Özet
- Tam metin OKUNABİLEN: Iranica, Britannica, archive.org (Sewell, Majumdar VI), UNESCO WHC.
- Açılan ama makale/bölüm düzeyi ölçülmedi: Cambridge Core, JSTOR, OUP, Persée, DergiPark (dergi sayfası).
- Engelli: DergiPark ARAMA (CAPTCHA); Majumdar V (archive.org ödünç).
- BORC'ta kullanılabilirlik: Hint (Sewell: Vijayanagara; Majumdar VI: Delhi Sultanlığı şehirleri; Iranica; Britannica), Orta Asya (Iranica, Britannica), Afrika (Britannica, JAH/Cambridge kısmen).
