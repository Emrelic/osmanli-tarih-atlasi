# GÖREV — 1900 KATEGORİ 1–3 ŞEHİR LİSTESİ (Osmanlı Tarih Atlası)

Önceki adımda her ülkenin 1900 idarî katmanları sayıldı. Dosyalar (önce kendi bölgeninkini OKU):
`C:\Users\user\AppData\Local\Temp\claude\C--atlas\0bb584e4-fb2f-4ba1-ad69-2d8a32833b28\scratchpad\` →
iskelet_avrupa.md / iskelet_osmanli.md / iskelet_asya.md / iskelet_afrika_amerika.md

Şimdi şehirleri **tek tek, adıyla** listeleyeceksin.

## Kategoriler (Emre'nin kararı, 1 Ocak 1900 durumu)
- **kat 1** — YALNIZ bağımsız devletin başkenti.
- **kat 2** — 1. kademe idarî birimin merkezi (vilayet, guberniya, eyalet, Land, département, ken, il …)
  + tâbi/özerk/protektora/sömürge birimlerinin başkentleri (Bulgaristan, Mısır, Girit, Bosna, Hindistan
  eyaletleri, sömürge yönetim merkezleri …).
- **kat 3** — YALNIZ aşağıdaki listedeki ülkelerin 2. kademe birim merkezleri (ortalama alanı ≥ 8.000 km²
  — Osmanlı sancağı boyu). Bu listede OLMAYAN ülkenin 2. kademesi ALINMAZ:
  Osmanlı sancakları · Cezayir arrondissement + askerî subdivision · Çin fu/chow/t'ing (China Proper +
  Mançurya + Sinkiang) · Britanya Hindistanı district (Burma dahil) · Rus uyezd/okrug — Avrupa Rusyası,
  Orta Asya, Sibirya, Bozkır (Polonya ve Kafkasya HARİÇ) · Alman Regierungsbezirk düzeyi (61) ·
  Peru provincia · Şili departamento · Bolivya provincia · Rodezya district · Fransız Batı Afrikası cercle.
- Bir şehir birden çok düzeyin merkezi ise EN YÜKSEK kategorisiyle BİR KEZ yazılır.

## Kaynak kuralı
- Tercih: Statesman's Year-Book (1899/1896/1903 — archive.org djvu.txt ham metni), 1897 Rus sayımı
  (Demoscope), Osmanlı için TDV vilayet maddeleri + salname, Imperial Gazetteer of India, Richard 1908 (Çin),
  Statoids. İskelet dosyalarında indirilen ham metinler şuradadır, yeniden kullan:
  `C:\Users\user\AppData\Local\Temp\claude\C--atlas\0bb584e4-fb2f-4ba1-ad69-2d8a32833b28\scratchpad\indir_*\`
- Vikipedi YALNIZ ipucu. Vikipedi'den aldığın satırın `dogrulama` sütunu `vikipedi` olur.
- Bilmediğini uydurma. Merkez adı bulunamadıysa `ad_1900` = `bulunamadı` yaz, birimi yine listele.
- WebFetch sayfayı küçük modelle özetler; listeler için ham metin indir (`py -I` + urllib, kendi alt klasörüne).

## Çıktı — SEKMEYLE AYRILMIŞ (TSV), UTF-8, başlık satırı aynen:
```
kat	ad_1900	ad_modern	ulke_1900	birim_turu	birim_adi	ust_birim	modern_ulke	kaynak	dogrulama	not
```
- `ad_1900`: kaynaktaki yazım (ör. "Kastamuni", "Ekaterinoslav", "Tientsin-fu").
- `ad_modern`: bugünkü yaygın ad, Latin harfli (ör. "Kastamonu", "Dnipro", "Tianjin"); Türkiye'dekiler Türkçe.
- `birim_turu`: başkent | vilayet | sancak | guberniya | uyezd | fu | district …
- `ust_birim`: kat 3 için bağlı olduğu 1. kademe birim; kat 1-2 için boş.
- `kaynak`: kısa künye (ör. "SYB1899 s.512", "Demoscope 1897 tablo", "TDV KONYA").
- `dogrulama`: `kaynakli` | `vikipedi` | `tahmin`
- KOORDİNAT YAZMA (sonraki adımda ayrıca bulunacak).

Dosya: `<CIKTI_DOSYASI>` (depoya — C:\atlas — HİÇBİR ŞEY yazma).
Bitince kısa rapor: kat 1/2/3 satır sayısı, `kaynakli`/`vikipedi`/`tahmin` dağılımı, `bulunamadı` sayısı,
iskeletteki sayıyla tutmayan yerler. Alt ajan AÇMA.
