# F2 şehir tarihçesi ajan brifi (EMRELİC, 17 Kasım 2026)

Çalışma dizini: C:\atlas\.claude\worktrees\sehir-emrelic-1116 (git worktree). Commit/push YAPMA; yalnız kendi dosyana yaz.
Önce oku: CLAUDE.md (Kaynak kuralı + Veri kuralları), VERI-YAPISI.md şehir tarihçe bölümü (~satır 944-1030), örnek: data/sehir_tarihce_guney_amerika.js, data/sehir_tarihce_hint.js. Araç: `py arac/sehir_tarihce.py denetle` (çıkış 0 olmalı) ve `yaz`.

Görev: LISTE.tsv'deki (bölgene ait) şehirlerden `tarihce_var` hayır olanları öncelik sırasıyla (kat 1 > kat 2 > kat 3, atlas_aday/kron_anma dolu olanlar önce) kaynaklı şehir tarihçesine çevir: ilk anılış / kuruluş, sahiplik dönemleri (sahip[]), olaylar (el değiştirme, savaş, isyan, bağımsızlık, yıkım), çok dilli adlar (adlar + ad_kaynak).

Kurallar (ihlal = kayıt yazılmaz, YAZILAMADI listesine):
- Tarih uydurma yok. Gün yoksa yıl; yıl yoksa yazma. Atlas referans değildir.
- Tanık: tam gövdeden BİREBİR alıntı (≤25 kelime), şehir adı + yıl aynı cümlede (madde başlığı şehirse atıflı cümle kabul; özne belirsizse kesinlik 'belirsiz'). Alıntı okunmadıysa yazma.
- Kaynak sırası: TDV (Doğu Asya/Okyanusya için Britannica, UNESCO WHC, ulusal akademik ansiklopediler, IBGE/INEGI tipi resmî tarih sayfaları, açık erişimli akademik dergiler). Vikipedi tek dayanak olamaz; forum/blog/YZ metni yok.
- Gömülü tarayıcı: kendi sekmeni aç (tabs_create), mcp__Claude_Browser__navigate + get_page_text. TDV'de istekler arası ≥10 sn, 429/503'te 60-180 sn bekle. Bot koruması (CAPTCHA, Anubis, Cloudflare) AŞMA; açılmazsa 'okunamadı'.
- İNDİRME YOK (dosya, PDF, zip). Yalnız sayfa okuma.
- Çelişkide 3. kaynak ara; bulunamazsa mevcut değeri koru, ic_not'a iki kaynakla beyan.
- Bağımsız kaynak: aynı soydan (kaynakçasız kopya, aynı ansiklopedi) çift teyit sayılmaz; tek kaynak ic_not'ta beyan.
- Sahiplik zinciri: atlas başlangıcı ilk.t'den geçse bile uydurma zincir kurma; yoksa dikiş beyanı ic_not'ta.
- sahip[].d devlet kimliği devletler.js gerçek id olmalı; emin değilsen sahip[] boş bırak, ic_not'a yaz.

Çıktı: kendi dosyan (aşağıda), `py arac/sehir_tarihce.py denetle` çıkış 0, ihlal 0. Rapor: kaç şehir yazıldı, kaç YAZILAMADI (neden), kaç çift teyit/tek kaynak, bulduğun atlas önerileri (başlangıç farkı, künye eksikliği), koordinat sorunları. Ağır komut yok.
