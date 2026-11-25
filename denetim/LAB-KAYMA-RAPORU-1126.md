# LAB 21 — çeviri «id ↔ metin kayması» sınaması (26 Kasım 2026)

Alıcı: EMRELİC 26 KASIM (genel koordinatör). Ölçüm: LAB, `origin/main` @831f6dc8f ve adı geçen dallar.

## Sonuç

**Kayma bulunmadı (0).** Bu mekanik bir sonuçtur; anlam doğruluğu ölçülmedi.

## Ne sınandı

| Küme | Kapsam | Kayma |
|---|---|---|
| `origin/main` (yayına inmiş turlar dahil, 21 dil: en ar es fr ru zh hi pt de ja fa it pl nl el id bn ur sw az bg) | her dilde 10.392 olay alanı (başlık+gövde, hepsinin özeti güncel) + 2.315 devlet adı | 0 |
| `ceviri-denetim-{en de fr es it pt nl bg}-lab-1125` (artık main'de) | 10.630 değişen alan | 0 |
| `ceviri-tr1125-lab` (main'de DEĞİL) | 11 dil, 229'ar olay alanı | 0 |
| `ceviri-{uk vi ko jv ps}-1126` (main'de DEĞİL) | o andaki arayüz + devlet + olay; ham cevaplarda paket dışı/eksik anahtar 0 | 0 |

## Yöntem

1. Sayı/yıl imzası: Türkçede ≥2 ayrı 3-4 haneli sayı olan alanlarda çevirinin sayıları; uymayan çeviri başka bir
   kaydın sayılarına daha çok benziyorsa «kayma adayı».
2. Paket bazlı uzunluk ilişkisi (25 kayıt; olayda başlık ve gövde AYRI; veri sırası ve alfabetik sıra); r<0,5 ya da
   bir kaydırılmış hizalama daha iyiyse alarm.
3. Denetim dallarında ek olarak: yeni metnin eski çeviriye benzerliği (<0,5 olanlar elle) ve «başka kaydın metniyle aynı».

**İki yönlü sınama:** bilerek kayma eklendi. Sayı testi 340 alanlık ezmede uyumsuz 33 alanı gösterdi (5'i kayma adayı).
Uzunluk testi İLK HÂLİNDE olaylarda KÖRDÜ (kısa başlık ile uzun gövde sırayla geldiği için ilişki yapay yüksek);
alan bazlı yapınca tek kayıtlık kaydırmayı ve 25'lik paket ezmeyi hem başlıkta hem gövdede yakaladı.
Benzerlik testinin 0,35 eşiği Almanca takas kontrolünde (0,38) kaçırdı; 0,5'e alındı.

## İşaretlenenler ve ne yapıldı

- main, uzunluk alarmı: es 1, fr 1, de 1, ja 2 (veri sırası) + ja 1 (alfabetik); hepsi BAŞLIK paketleri (veri
  sırasında 9, 30, 73. paketler). ja 9/30/73 ve fr 9'dan örnek satırlar elle karşılaştırıldı: hizalı. es/de'nin
  aynı numaralı paketleri ve ja alfabetik alarmı ayrıca satır satır okunmadı.
- main, kayma adayı: yalnız zh 1 (`OLAYLAR_ORTACAG_ANADOLU_KAFKASYA:1225-01-13:0` d): hizalı; sayılar «4万, 一千,
  五百» yazılmış.
- main, sayı uyumsuzu (aday olmayan): zh 14, pl 10, ar 2, fa 2, it 2, fr 1, ru 1, de 1, ja 1, nl 1, el 1. zh ve pl'den
  4'er örnek okundu: sayı sözcükle/yazı rakamıyla yazılmış, hizalı. Kalanlar elle OKUNMADI (başka kayda
  benzemedikleri için aday sayılmadı).
- denetim dalları: it 1 sayı uyumsuzu («1540'lar» → «anni Quaranta»), bg 1 «aynı metin» (Türkçede başlık = gövde):
  yanlış alarm. Benzerlik <0,5: bg 165 (162'si Latin→Kiril harf değişimi); kalan bg 3, de 1, nl 1 Türkçesiyle okundu: doğru.
- TR1125: zh 1 sayı uyumsuzu (164 Çince rakamla yazılmış).

## Sınanmayanlar / sınırlar

- Kapıya girecek turlardan YALNIZ LAB'ın dalları sınandı; öteki makinelerin henüz main'e inmemiş dalları sınanmadı.
- `origin/main`de arayüz kayıtları ve (yeni diller dışında) arayüz paketleri bu koşuda sınanmadı (arayüzde id =
  Türkçe metin; sayı imzası yok).
- Sayı içermeyen ve komşu olmayan tek tük takaslar bu testlerden kaçabilir.
- Başlıklarda (kısa, benzer uzunluk) uzunluk testi gövdedekinden zayıftır.
- Türkçesi değişmiş (bayat) kayıt main'de 0 çıktı; main dışındaki dallarda bayat/eksik kayıtlar kapsam dışı.
