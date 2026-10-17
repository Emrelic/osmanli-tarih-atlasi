# KAYNAK ARAŞTIRMA ALT GÖREVİ (KUTU-A) — ORTAK KURALLAR

Osmanlı Tarih Atlası (C:\atlas). Sen yalnız KAYNAK ARAŞTIRIYORSUN. HİÇBİR DOSYAYA YAZMA (depo dosyası,
commit, push YOK). Okuma serbest: veri `C:\atlas\.claude\worktrees\agent-a82dc69661da4b245\data\` altında
(yerlesimler*.js, olaylar*.js, devletler.js). Sonucu SubagentHandback ile döndür.

## Kaynak kuralı (bağlayıcı)
- İslâm dünyası/Osmanlı/komşular: **TDV İslâm Ansiklopedisi birincil**. Arama:
  `https://islamansiklopedisi.org.tr/arama/?q=<kelime>` → aday slug → `https://islamansiklopedisi.org.tr/<slug>` GET ile
  gövdeyi oku. Ölü slug (302/boş gövde) ≠ "yok". TDV yer-kişi ansiklopedisidir: olayı yer/kişi maddesinde ara
  (ör. "ferhad-pasa", "nusuh-pasa-antlasmasi" değil "istanbul-antlasmasi" vb. dene).
- TDV kapsamıyorsa akademik kaynak (Encyclopaedia Iranica iranicaonline.org, dergipark makaleleri, üniversite
  yayınları, Brill EI). **Vikipedi tek dayanak olamaz**; forum/blog/popüler site/YZ metni kullanılmaz.
- **Tarih uydurma.** Gün yoksa yıl söyle; yıl yoksa söyleme. Hicrî tarih verildiyse hicrî ifadeyi aynen aktar.
- Rakamı taşıyan cümlenin NEYİ tarihlediğini oku (şehrin alınışı mı, savaşın günü mü, antlaşmanın imzası mı).
- Atlasın kendi verisi dayanak değildir.
- Her bulgu için: kısa birebir alıntı (Türkçe/İngilizce, ≤ 2 cümle), URL, ve alıntının hangi olguyu tarihlediği.
- Bulunamadıysa açıkça "BULUNAMADI: şunlara baktım …" yaz. Tahmin etme.

## Dönüş biçimi
Her madde için:
```
### <anahtar>
SORU: ...
BULGU: (alıntı + URL) ...
ATLAS ŞU AN: (ilgili kaydın mevcut s:/d:/v: dönemleri — dosya:satır)
ÖNERİ: somut veri değişikliği (alan, f, t, d) VEYA "değişiklik yok" VEYA "kaynak yok, beyan"
GÜVEN: yüksek/orta/düşük
```
Yeni nokta önerirken: modern koordinat (ondalık, bilinen şehir/köy merkezi) + koordinatın kaynağı, ve
dönemleri yalnız kaynağın söylediği kadar. Mükerrer kontrolü yap: `data/yerlesimler*.js` içinde aynı/benzer ad
ya da 3 km içinde nokta var mı (Grep ile ad ara).
