# G2 alt ajanı — savaş hikâyesi kartı yazımı (ortak kurallar)

Osmanlı Tarih Atlası (eğitim sitesi). Kronolojideki savaş/kuşatma maddelerine "ek okuma"
kartı (tür `savas-hikayesi`) yazıyorsun. **Depoya (C:\atlas) hiçbir şey yazma.** Yalnız
çıktı JSON dosyanı yaz. Git komutu koşturma.

## Girdi
- Maddeler: `SCRATCH\G2_maddeler.json` (62 madde; her birinde `t` tarih, `b` başlık, `d` metin,
  `kaynak` TDV slug'ı). Sana atanan kartlar görev mesajında; her kartın bağlanacağı madde
  `t` değerleri verilmiştir.
- Biçim örneği (birebir taklit et): `C:\atlas\.claude\worktrees\agent-a50da12ada13c611c\data\ekokuma_savas3.js`
  ve `ekokuma_savas1770.js` — birini baştan sona oku.

## Kaynak kuralı (kesin)
- **TDV İslâm Ansiklopedisi birincil.** Arama: `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`;
  madde: `https://islamansiklopedisi.org.tr/<slug>`. WebFetch ile gövdeyi OKU (ölü slug 302 verir,
  yanlış madde, boş gövde tuzaklarına dikkat). TDV olay değil YER-KİŞİ ansiklopedisidir: savaşın
  kendi maddesi yoksa komutan/padişah/şehir/kale maddelerine bak (ör. `korfu`, `banaluka`,
  `gazi-hasan-pasa`, `ibrail`, `ruscuk`, `mehmed-ali-pasa-kavalali`, `ibrahim-pasa-kavalali`,
  `akka`, `milli-mucadele`, `inonu-muharebeleri`, `buyuk-taarruz`, `balkan-savaslari`, `edirne`).
  Maddedeki `kaynak` slug'ından başla.
- TDV kapsamıyorsa **akademik kaynak** (DergiPark hakemli makale, üniversite yayını, ATASE/TTK
  yayını, akademik kitap), `kaynak` alanına açıkça (yazar, başlık, dergi/yayın, yıl, URL).
- **Vikipedi tek dayanak olamaz**; forum, blog, popüler tarih sitesi, YZ metni kullanılmaz.
- **Rakam/tarih uydurma yok.** Kaynakta olmayan sayı (kuvvet, kayıp) yazma; bilinmiyorsa
  `kuvvet: "kaynakta sayı verilmiyor"`. Kaynaklar ayrışıyorsa `tartisma` alanına iki tarafı yaz.
- Metni kopyalama: oku, kendi cümlelerinle okur dilinde yaz. Alıntı en fazla birkaç kelime.
- Atlasın kendi kronoloji metni kaynak DEĞİLDİR (yalnız maddeyi bulmak için).

## Kart şeması (JSON nesnesi)
```
{ "id": "savas-<kisa-ad>-<yil>",          // küçük harf, ascii, tire
  "tur": "savas-hikayesi",
  "baslik": "Ad (gün ay yıl)",             // tarih aralığı da olabilir
  "kisa": "1 cümle, merak uyandıran düğme ipucu",
  "tarih_metin": "gün/aralık + varsa hicrî; kaynağa göre",
  "yer": "...",
  "taraflar": [ {"ad":"...","komutan":"...","kuvvet":"..."}, ... ],
  "oncesi": "...", "akis": "...", "sonuc": "...",   // üçü birlikte 150-300 kelime
  "tartisma": "kaynakların ayrıştığı yerler (yoksa kısa: 'Kaynaklar ana çizgide ayrışmıyor.' değil — ayrışma yoksa boş string)",
  "kesinlik": "kesin|tartismali",
  "olay": ["<t>|<anahtar>", ...],          // aşağıya bak
  "kaynak": "TDV: <slug> · TDV: <slug> · <akademik kaynak tam künye>",
  "gorsel": null, "gorsel_kaynak": "aranmadı",
  "ic_not": "okunan URL'ler + HTTP durumu, denenen ölü slug'lar (okura çizilmez)" }
```
- `olay` bağı: `"<t>|<anahtar>"` — `t` maddenin `t` değeri BİREBİR, `anahtar` o maddenin `b`
  (başlık) metninde geçen ayırt edici bir kelime (ör. `"1716-08-20|Korfu"`). Anahtar `b`'de
  büyük/küçük harf ve aksan dışında birebir geçmeli.
- Bir kart aynı seferin birkaç maddesini birlikte anlatıyorsa hepsine bağlanır (görevde verildi).
- Kartın anlattığı tarih maddeyle çelişirse (kaynak başka gün diyorsa) kartta kaynağın gününü
  yaz ve çelişkiyi `ic_not`ta + raporunda "TARIH-CELISKI: madde t=..., kaynak=..., URL" diye bildir.

## Çıktı
`SCRATCH\G2_kart_<HARF>.json` — kart nesnelerinden oluşan JSON dizisi (UTF-8). Yazdıktan sonra
`py -c "import json;print(len(json.load(open(r'<yol>',encoding='utf-8'))))"` ile geçerliliğini sına.
Son mesajında: yazılan kart sayısı, yazamadıkların (neden), TARIH-CELISKI listesi, ek bulgu.
SCRATCH = C:\Users\user\AppData\Local\Temp\claude\C--atlas\81b30657-a92f-49c7-b3ae-b5ecd2d82813\scratchpad\tasnif
