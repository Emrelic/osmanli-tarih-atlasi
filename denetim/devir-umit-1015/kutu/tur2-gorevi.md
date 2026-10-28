# KUTU TUR 2 GÖREVİ

Osmanlı Tarih Atlası. Emre'nin kutu paketlerinde "sırada" kalan maddeleri çözüyorsun.
İzole worktree'desin. **Ortak kurallar `SCRATCH\cozum-gorevi.md` dosyasındadır — önce onu
oku ve aynen uygula** (CLAUDE.md, kaynak kuralı, TUZ yasağı, denetle 0, paketle+damga,
commit biçimi, push kapısı). Bu dosya yalnız farkları söyler.

## Maddelerin önceki notları
Her madde için önceki hüküm notu kutuda:
`C:\claudemre\ClaudEmre\kutu\giden\parti-emrelic-<PAKET>\CEVAP.json` → `maddeler[<H-no>].not`
ve Emre'nin şikâyet metni aynı klasörde `PARTI.json`. Oku; orada bulunmuş kaynak/koordinat
varsa yeniden araştırma, doğrula ve kullan. Kutuya YAZMA (cevapları ben yazarım).

## Push
- Commit başlığı: `KUTU-<AJAN>-1014: ...` · kapı: `py arac/push_kapisi.py --kim "KUTU-<AJAN>-1014"`.
- Kapı rebase'te çatışırsa: veri dosyasında aynı satır → origin satırını al, kendi eklemeni
  anlamıyla yeniden uygula (`-X ours` kullanma, sessiz kayıp olur), sonra yeniden koştur.
  Yalnız üretilmiş paket/damga dosyası çatışıyorsa origin tarafını al; kapı yeniden üretir.
- Partileri küçük tut, iş bitince değil ilerledikçe it.
- `renkler.py` (TUZ) değişikliği gerekirse **yapma**: önerilen BOYALAR satırını çıktında
  `tuz_onerisi` alanına yaz.

## Çıktı
`SCRATCH\tur2-<AJAN>.json` — her maddene bir kayıt (atlama):
```
{"anahtar": "parti-emrelic-00NN/H-00MM", "hukum": "cozuldu|kosu-bekliyor|senin-kararin|cozulemedi|sirada|zaten-dogru",
 "not": "Emre için 1-3 cümle Türkçe: ne yaptın, kaynak, ne kaldı (sayıyla)", "commit": "sha başlık", "kaynak": "URL"}
```
`kosu-bekliyor` = yerleşim `s:/d:/v:/isg:` değişikliği main'de · `cozuldu` = kronoloji/ek okuma/
arayüz main'de · büyük programda yapılan parti sonrası kalan varsa `sirada` + kalan sayısı.
Son mesajında: hüküm sayıları, push edilen commit'ler, kalan iş (sayıyla).
