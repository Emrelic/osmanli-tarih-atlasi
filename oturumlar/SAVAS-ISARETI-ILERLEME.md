# SAVAŞ İŞARETİ — ilerleme

Oturum: SONNET HAZIR KITA 75 → SAVAŞ İŞARETİ (koordinatör: OSMANGAZI, görev M-1090)
Dosyam: `data/savaslar.js` → `window.SAVASLAR` (+ `window.ANTLASMALAR`), bu dosya.

## Görev

Paket `ClaudEmre/kutu/giden/parti-emrelic-0027/PARTI.md`, iki madde:
- **H-0008**: "Granbosa Kalesi ve Salankamen Bozgunu maddeleri haritada işaretli değil."
- **H-0011**: "Haçova Meydan Muharebesinin yeri haritada belli değil."

Talimat: önce ⓪ ölçümü — kayıt var mı, `lat`/`lon` dolu mu? (a) yoksa yaz,
(b) var ama koordinatsızsa koordinat ekle, (c) ikisi de varsa DÜZELTME YAPMA,
bildir ve dur.

## ⓪ ÖLÇÜM — üç kayıt da `data/savaslar.js`'te VAR ve koordinatlı

```
data/savaslar.js:121  Salankamen bozgunu        t:1691-08-19  lat:45.13   lon:20.28
data/savaslar.js:135  Granbosa Kalesi'nin fethi  t:1692-01-01  lat:35.622  lon:23.586
data/savaslar.js:227  Haçova                     t:1596-10-26  lat:47.82   lon:20.72
```

Üçü de **(c)**: kayıt VE koordinat mevcut. Kendi dosyamda yapacağım bir
düzeltme yok — talimat gereği burada durdum, `js/app.js`e (başka oturumun
dosyası, §7) dokunmadım.

## Ek ölçüm — kusurun nerede olduğuna dair iz (çıkarım değil, ölçüm)

1. `js/app.js:2074-2090` — 19 Ağustos 2026 (commit `4581d71`, "B3", r2598)
   tarihli bir yorum bloğu, **Salankamen ve Granbosa'yı isimle anıyor**
   ("Salankamen · Ulaş · Zenta"): eski paket `0023/H-0012·13·15·16·17`
   aynı şikayeti taşımış, ve o oturum "odaktaki muharebe artık şehir
   etiketine feda edilip elenmiyor" diye bir düzeltme yapmış.
2. **O commit'in kendi yorumu açıkça yazıyor**: *"bu oturumun tarayıcısında
   harita hiç çizilmedi (WebGL başlamıyor), o yüzden elemeyi ateşleyip
   göremedim... Emre koşudan sonra hâlâ görmüyorsa sebep bu DEĞİLMİŞ
   demektir ve teşhis yeniden kurulur."* ⇒ Düzeltme **hiç gerçek
   tarayıcıda doğrulanmadan** yayınlanmış.
3. Paket `0027` (bugünkü şikayetin kaynağı) `22 Ağustos 22:25:17`
   tarihli — düzeltme commit'inden (`19 Ağustos 23:24`, r2598) **üç gün
   SONRA**. Yayın o zamandan beri ilerlemiş (şu an r3057). ⇒ Bu bayat bir
   şikayet DEĞİL (`CLAUDE.md` §11 "şikâyet düzeltmeden hızlı bayatlar"
   vakasının tersi) — düzeltmeden sonraki TAZE bir rapor.
4. **Haçova hiç dokunulmamış**: `git log -S "Haçova" -- data/savaslar.js
   js/app.js` yalnız kaydın ilk yazıldığı iki eski commit'i gösteriyor
   (`b5a1202`, `501c203`); 19 Ağustos düzeltmesi ona hiç değinmemiş.

## Çıkarımım (ölçümden ayrı satır, ölçüm değil)

19 Ağustos'taki "odaktaki muharebe elenmez" düzeltmesi Salankamen ve
Granbosa için sorunu **muhtemelen çözmedi** — doğrulanmadan yayınlanmış ve
şikayet düzeltmeden sonra aynen tekrarlanmış. Haçova ise hiç ele alınmamış,
aynı çakışma/eleme sınıfına (yakın şehir etiketiyle üst üste binme) girme
ihtimali var ama teyit edilmedi.

## Teslim — bildirdiğim, düzeltmediğim

Sayıyla: 3/3 kayıt ölçüldü, 3/3 (c) çıktı (kayıt+koordinat mevcut), 0
kayıt düzenlendi (kendi dosyamda değişiklik yok, talimata uygun). Kusurun
adresi `js/app.js` (arayüz katmanı) — o dosyanın sahibi olan oturuma
devredilmesi gerekiyor. Koordinatöre tahtadan bildirildi.
