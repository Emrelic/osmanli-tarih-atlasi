# KAYNAK ERİŞİM TESTİ — UMIT (16–17 Kasım 2026)

Yöntem: Claude desktop **gömülü tarayıcı** (`navigate` + sayfa metni sayacı), sayfa okuma; indirme yok. Karakter sayısı = `document.body.innerText.length` (gezinme/altbilgi dahil, madde gövdesi daha azdır). Örnek sayfa 1-2 adet.

| Kaynak | Sınanan adres | Sonuç | Bot koruması / giriş | Tam gövde? | Karakter |
|---|---|---|---|---|---|
| whc.unesco.org | /en/list/65/ (Antigua Guatemala) | AÇILDI | yok | evet | 10.993 |
| iranicaonline.org | /articles/persepolis | AÇILDI (yüklenmesi ~3 sn) | yok | evet | 80.902 |
| Britannica | /place/Havana | AÇILDI | yok | evet (özet+bölümler) | 17.181 |
| Britannica | /place/Santo-Domingo-national-capital-Dominican-Republic | HTTP 404 (slug yanlış; site açık) | — | — | 441 (hata sayfası) |
| Persée | /search?ta=article&q=Sijilmasa | AÇILDI (arama sonuçları: 106 sonuç) | yok | arama listesi | 8.648 |
| Persée | /doc/outre_0300-9513_1979_num_66_242_1930 | HTTP 404 (uydurulmuş belge no; site açık) | — | — | 384 |
| Pleiades | /places/922662 | AÇILDI | önce Anubis "Bot olmadığınızdan emin oluyoruz" ara sayfası, ~3 sn sonra geçti | evet (yer kaydı); JSON adresleri çalışıyor | 2.697 |
| Getty TGN | vocab.getty.edu/page/tgn/7009852 → getty.edu/vow/TGNFullDisplay | AÇILDI (yönlendirme) | yok | evet (koordinat, hiyerarşi) | 2.166 |
| JSTOR | /action/doBasicSearch?Query=Sijilmasa | AÇILDI (arama sonuçları) | giriş ister (kütüphane girişi) — makale tam metni değil, özet/sonuç | yalnız sonuç listesi/özet | 14.935 |
| DergiPark | /tr/search?q=Sicilmasa | ENGELLİ | "gerçek kişi doğrulaması" kapısı (arama) | hayır | 395 |
| Library of Congress (HLAS) | loc.gov/hlas/ | ENGELLİ | Cloudflare "Just a moment" HTTP 403 | hayır | 272 |
| runeberg.org | runeberg.org/ ve /nfbg/ | AÇILMADI (iki denemede "navigation denied or failed") | belirsiz (ağ/izin) | hayır | — |
| academic.oup.com, cambridge.org/core, web.archive.org, 1914-1918-online | — | DENENMEDİ (oturum kesildi) | — | — | — |

Başka makineden bildirilenler (HAVVA, EMRELİC aktarımı; bu tabloda kendi ölçümüm değil): Cambridge Core 13.223 karakter, Treccani, Hrčak, DergiPark dergi sayfası, QDL ana sayfası açılıyor; DergiPark ARAMA, QDL arama, CEEOL, doiserbia, Academia engelli.

Notlar
- 404 alan iki sınama (Britannica Santo Domingo, Persée belge no) yanlış adres: **site engeli sayılmaz**; doğru slug/belge no ile yeniden sınanmalı.
- TDV: ≥5 sn aralık, tek sekme (EMRELİC koordinasyonu); diğer siteler 3-5 sn.
- JSTOR'da tam metin giriş gerektirir: yalnız arama sonucu/özet kaynak sayılabilir; "okunmadı" yazılır.
