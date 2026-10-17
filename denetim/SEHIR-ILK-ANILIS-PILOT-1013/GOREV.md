# GÖREV — 20 Anadolu şehrinin TARİHTE İLK ANILIŞI (Osmanlı Tarih Atlası, Adım 0 pilotu)

Sen bir kaynak araştırmacısısın. Aynı görevi başka bir araştırmacı da bağımsız yapıyor; sonuçlar
karşılaştırılacak. Hız değil DOĞRULUK ölçülüyor. Bilmediğini "bulunamadı" diye yaz — uydurma tarih,
uydurma kesinlik, uydurma kaynak en ağır hatadır.

## Ne soruluyor
Her şehir için: bu koordinattaki yerleşim **tarih sahnesine ilk ne zaman çıkıyor?** İsim değişikliği
önemsizdir (Ankara = Ankyra = Ancyra; İzmit = Nikomedeia/Astakos? — aynı koordinat mı, DİKKAT, Astakos ayrı yerdir).

Üç ayrı nicelik var, KARIŞTIRMA:
- `kurulus` — kaynak kuruluşa tanıklık ediyor ("X tarafından şu yıl kuruldu"). Ör. Bağdat 762.
- `ilk_anilis` — yazılı kaynakta ilk geçtiği tarih. Bu kuruluşun ÜST sınırıdır, kuruluşun kendisi DEĞİLDİR.
- `arkeolojik` — kazı/tarihleme ile yerleşimin varlığı (ör. "höyük MÖ 3000'e tarihleniyor").
Elinde yalnız ilk anılış varsa ona `kurulus` DEME. Üçü de bulunursa üçünü de yaz.

Aralık veren kaynakta ("Adad-nirari III döneminde, MÖ 810-783") güvenli uç hangisiyse onu seç ve
neden seçtiğini yaz (ilk anılış için: kesin olarak var olduğu en erken gün = aralığın SON ucu).

## Tarih yazımı
- Astronomik yıl: MÖ n → `-(n-1)`. MÖ 3000 → `-2999`. MÖ 1 → `0000`. MS 908 → `0908`. Biçim `YYYY-AA-GG`.
- Gün yoksa `-01-01`, ama `kesinlik` alanı dürüst olsun: `gun | ay | yil | onyil | yuzyil | belirsiz`.
- Her tarihin yanına insan okunur metin: "MÖ 8. yüzyıl", "MS 74", "1462". Sayı ile metin tutarlı olmalı.
- Hicrî tarih geçerse hicrî yılı aynen yaz, miladi karşılığı ayrıca.

## Kaynak kuralı
- **TDV İslâm Ansiklopedisi birincil.** Arama: `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`.
  Arama aday üretir; madde sayfasını AÇIP (GET) doğrula. Tuzaklar: ölü slug, yanlış madde (aynı adlı
  başka yer/kişi), boş gövde, "çekilemedi ≠ yok". TDV şehir maddeleri çoğu zaman antik dönemi de anlatır.
- TDV antik dönemi kapsamıyorsa akademik kaynak: Brill's New Pauly, Barrington Atlas / Pleiades
  (pleiades.stoa.org — yer kimliği ve tarihleme için iyi), Encyclopaedia Iranica, Encyclopaedia of Islam,
  Princeton Encyclopedia of Classical Sites (perseus), üniversite/kazı yayınları.
- **Vikipedi tek dayanak olamaz** (yalnız ipucu olarak kullanılabilir; dayanak yazılmaz).
  Forum, blog, belediye tanıtım sayfası, turizm sitesi, popüler tarih sitesi, YZ metni KULLANILMAZ.
- Rakamı taşıyan cümlenin NEYİ tarihlediğini oku (şehri mi, kaleyi mi, piskoposluğu mu, bölgeyi mi?).
- Kaynaktan alıntı: en fazla 15 kelime, tırnak içinde. Gerisini kendi cümlenle özetle.

## Şehirler (atlastaki ad · enlem, boylam)
1. İzmir · 38.419, 27.129
2. Bursa · 40.188, 29.061
3. Ankara · 39.933, 32.860
4. Konya · 37.872, 32.492
5. Sivas · 39.750, 37.015
6. Trabzon · 41.005, 39.723
7. Erzurum · 39.905, 41.266
8. Diyarbakır · 37.911, 40.237
9. Van · 38.502, 43.393  (dikkat: Urartu başkenti Tuşpa = Van Kalesi, aynı yer mi?)
10. Adana · 37.000, 35.321
11. Kastamonu · 41.377, 33.777
12. Bitlis · 38.401, 42.108
13. Kütahya · 39.424, 29.983
14. Samsun · 41.286, 36.331  (dikkat: antik Amisos'un tam yeri ile modern merkez)
15. Çanakkale · 40.147, 26.409  (dikkat: Kale-i Sultâniye ile antik yerleşimler — Abydos KARŞI yakadadır)
16. Maraş · 37.575, 36.937
17. Antalya · 36.887, 30.703
18. İzmit · 40.766, 29.917
19. Amasya · 40.650, 35.833
20. Muğla · 37.215, 28.363

**Koordinat kuralı:** Antik yerleşim modern şehirden > 3 km uzaktaysa (ör. Eski İzmir/Bayraklı höyüğü
Smyrna ile Kadifekale Smyrnası) bunu `yer_notu` alanına yaz ve hangi noktayı tarihlediğini söyle.

## Çıktı
Sonucu şu dosyaya yaz (başka hiçbir yere yazma, depo dosyalarına DOKUNMA):
`<CIKTI_DOSYASI>`

Biçim: her şehir için bir blok, tam bu alanlarla:

```
### <n>. <ad>
- antik_adlar: …
- kurulus: <YYYY-AA-GG | yok | bulunamadı> · metin: … · kesinlik: … · kaynak: …
- ilk_anilis: <YYYY-AA-GG | bulunamadı> · metin: … · kesinlik: … · kaynak: …
- arkeolojik: <YYYY-AA-GG | yok | bulunamadı> · metin: … · kesinlik: … · kaynak: …
- haritada_baslangic_onerisi: <tarih> · hangi nicelikten: kurulus|ilk_anilis|arkeolojik · gerekçe: …
- o_tarihteki_sahip: <siyasal yapı adı | bulunamadı>
- tanik_cumle: "<≤15 kelime alıntı>" (hangi kaynaktan)
- yer_notu: …
- acilan_url: <GET ile açıp doğruladığın URL'ler>
- guven: yuksek | orta | dusuk · neden: …
```

En sona: `## Özet` — kaç şehirde TDV yetti, kaç şehirde akademik kaynağa gittin, kaç şehirde
bulunamadı dedin, en zor 3 şehir ve neden.

Alt ajan AÇMA. Kendin araştır.
