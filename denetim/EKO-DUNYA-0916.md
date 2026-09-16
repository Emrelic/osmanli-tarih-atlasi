# EKO-DUNYA — teslim raporu (dalga 0052, 16 Eylül 2026)

Şartname: `oturumlar/DALGA-0052.md` (EKO-DUNYA satırı, §2b, §3) · paket
`parti-emrelic-0052` + `parti-emrelic-0051/H-0003`.

Yazılan dosya: **`data/ekokuma_dunya.js`** — `window.EKOKUMA_DUNYA`, **18 kart**.
`node --check` geçti. Bütün kart `id`leri tüm `ekokuma_*.js` ailesinde
(265 karta karşı) **benzersiz** — çapraz kontrol edildi. Bütün `olay:[...]`
anchor'ları çekirdek+kuyruk kronoloji dosyalarına karşı **çözüldü** (tarih
bulundu, disambiguator metni eşleşti).

`js/app.js`'e DOKUNULMADI — yükleyici satırı (`_EKOKUMA_DOSYA_ADLARI` →
`"ekokuma_dunya"`) UI oturumunun işi, CLAUDE.md/DALGA-0052.md gereği.

## Madde madde

| Madde | Durum | Not |
|---|---|---|
| H-0006 | KISMEN | "En çok 10 büyük savaş" istendi, **3 yeni** kart yazıldı (aşağıda). Mevcut `ekokuma_savas.js`/`savas3.js` zaten 21 savaş/muharebe kartı taşıyor — dördüncü adayım (Prut Seferi) o dosyada **ZATEN VARDI** (id çakışması denetlenirken yakalandı, D045), yazılmadı. Kalan aday havuzu (Balkan Savaşları vb.) TDV'den çekilemedi — bkz. "Bulunamadı" bölümü. |
| H-0035 | TAM | Yemen (`dunya-yemende-osmanli-hakimiyeti`) + Hürmüz Boğazı (`dunya-hurmuz-bogazi-onemi`) — 2 kart, TDV gövdesi okunarak. |
| H-0036 | TAM | İpek Yolu (`dunya-ipek-yolu-tarihi`) — 1 kart, akademik kaynak (TDV kapsamıyor). |
| H-0037 | TAM | Coğrafi Keşifler — Kolomb/da Gama/Macellan (`dunya-cografi-kesifler`) — 1 kart, akademik kaynak + atlasın 1492 Sefarad kaydına bağlı. |
| H-0038 | TAM | İcatlar iki karta bölündü: erken dönem (barut/pusula/matbaa, `dunya-icatlar-erken-donem`) ve sınai dönem (buhar/demiryolu/telgraf/elektrik, `dunya-icatlar-sinai-donem`) — konu çok genişti, tek kartta boğulacaktı. |
| H-0040 | TAM | İran topraklarının elde tutulamaması — tartışma kartı (`dunya-iran-topraklari-tartisma`), TDV'nin verdiği sebeplerle akademik literatürün eklediği yapısal sebepleri (mesafe, yakılmış toprak, mezhep) ayrı ayrı işaretleyerek. |
| H-0041 | TAM | Kazak/Kazakistan adı karışıklığı + Ukrayna halkı + Ruslar'ın bölgeye ne zaman geldiği (`dunya-kuzey-karadeniz-halklari-kazak-karisikligi`) — TDV'nin kendi "Kazaklar" maddesinin yalnız Orta Asya Kazaklarını kapsayıp Cossack'lardan hiç söz etmemesi, ayrımın TDV tarafında da net olduğunun kanıtı olarak kullanıldı. |
| H-0070 + H-0090 | TAM (BİRLEŞTİRİLDİ) | İkisi de Girit/Kandiye'nin süresi ve bedeli soruyordu; tek kart yazıldı (`dunya-girit-seferinin-bedeli`) ve mevcut `savas-kandiye-girit-1669` kartına (ekokuma_savas3.js) `zincir` ile bağlandı — anlatı TEKRARLANMADI. İnsan/mali kayıp SAYISI okunan TDV maddelerinde YOK, `bulunamadı` diye bırakıldı, uydurulmadı. |
| H-0078 | TAM | Çanakkale Bozgunu 1656 — tam `savas-hikayesi` kartı (`savas-canakkale-bozgunu-1656`), taktik detay TDV'de yok ama sebep/sonuç (boğaz ablukası, İstanbul'da fiyat artışı, Köprülü'nün atanması) var. |
| H-0079 | TAM | Üç kart: talihsizlikler (10 olay, `dunya-donanmanin-talihsiz-anlari`) · zaferler (`dunya-donanmanin-buyuk-zaferleri`) · Avrupa donanmalarıyla nitel karşılaştırma (`dunya-donanma-avrupa-kiyaslama`, nicel tablo YOK — bulunamadı). |
| H-0088 | TAM | Osmanlı-Avrupa savaş stili karşılaştırması — tartışma kartı (`dunya-savas-stili-karsilastirma`), TDV'nin Nizam-ı Cedid'in yeniçeri isyanıyla çökmesi anlatısını "kurumsal atalet" sentezine bağladı; bu sentez TDV'nin doğrudan ifadesi değil, kartta `tartismali` işaretlendi. |
| 51/H-0003 | TAM (içerik) | Otuz Yıl Savaşları + Vestfalya (`dunya-otuz-yil-savaslari-vestfalya`) — akademik kaynak. **Harita odağı şikâyeti İÇERİK DEĞİL, UI davranışı — UI oturumuna tahtadan ayrıca bildirildi.** |

## Bulunamadı / TDV'den doğrulanamadı (uydurulmadı, işaretlendi)

- Balkan Savaşları (1912-13) TDV sluğu (`balkan-savaslari`) yalnız arama
  sayfası döndürdü, çekilemedi — H-0006'nın dördüncü adayı olarak
  denenmedi bile, zaman kalmadı.
- Kırım Savaşı'nda Sivastopol kuşatmasının toplam insan/mali kaybı.
- Girit/Kandiye kuşatmasının toplam insan/mali kaybı (yalnız şehrin
  nüfus çöküşü somut rakamla var: 1670 cizye defteri).
- Abdülhamid döneminde donanmanın Haliç'te çürümeye terk edilişinin
  sebebi (TDV'nin `abdulhamid-ii` maddesinde bu konuya hiç değinilmiyor).
- Sultan Osman-ı Evvel/Reşadiye zırhlılarının 1914'te el konulma tarihi
  ve ayrıntıları (denenen sluglar arama sayfası döndürdü).
- 1453 kuşatmasında gemilerin karadan yürütülmesi bu oturumda TDV'den
  AYRICA doğrulanmadı — atlasın var olan 1453 kayıtlarına ve standart
  kuşatma tarihçiliğine dayanılarak kısaca anıldı (yeni bir tarih
  üretilmedi).

## Diğer bulgular / tahtaya iletilecekler

1. **D045 vakası**: H-0006 için Prut Seferi kartı yazılırken id çakışması
   (`savas-prut-1711`) `ekokuma_savas.js`de zaten mevcut, çok daha ayrıntılı
   bir kartla çarpıştı. Yazılmadı, mevcut karta atıfla geçildi.
2. **51/H-0003 UI notu**: Vestfalya Barışı maddesinde haritanın ilgili
   devletlerin (Avusturya/Almanya bölgesi) odağına gelmesi isteği — bu bir
   harita davranışı, `js/app.js` sahibi UI oturumuna aittir.
3. Kaynak kısıtları CLAUDE.md §4'e göre işaretlendi: TDV'nin kapsamadığı
   saf dünya tarihi konularında (İpek Yolu, coğrafi keşifler, sınai icatlar,
   Otuz Yıl Savaşları) standart akademik/ansiklopedik kaynak kullanıldı ve
   `kaynak:` alanına TDV diye GÖSTERİLMEDİ.

## Commit (birinci tur)

`git add -- data/ekokuma_dunya.js denetim/EKO-DUNYA-0916.md` ·
`git commit -F <msg> -- data/ekokuma_dunya.js denetim/EKO-DUNYA-0916.md` ·
`git pull --rebase --autostash` · `git push`. Commit `d41528e`.

---

## İKİNCİ TUR (§2c) — HARITA-VERI 66-98, `denetim/YAMA-0052C-EKODUNYA.json`

Şartname: `oturumlar/DALGA-0052.md` §2c · girdi: `denetim/KUTU-AYIKLA-0916.md`
§④ HARITA-VERI listesi, sıra 66-98 (33 madde, paket 0035-0042). Veriye
YAZILMADI — yalnız araştırma + yama önerisi. Format `YAMA-ANADOLU-0914.json`
esas alındı, ama bu turun maddelerinin çoğu **görsele dayalı** olduğu ve bu
oturum görselleri incelemediği için (yalnız metin okundu) çoğu kalem kesin
bir `eski`/`yeni` satırı değil, **sourced hüküm + UYGULA'nın bulacağı
konum** biçiminde yazıldı — dürüstçe işaretlendi.

### Sınıf dağılımı (33 madde)

| Sınıf | Sayı | Anlamı |
|---|---|---|
| `gorunum-ab-ile-cozulur` | 9 | Saf geometri/render/B-görünüm — araştırılmadı, şartname gereği MOTOR/GEOMETRI'ye bırakıldı (66,78,79,83,84,88,94 + kısmen 71,74) |
| `arastirma-tamamlandi` / `oneri` | 10 | TDV ya da tartışmasız temel kaynakla sourced hüküm verildi (70,77,80,82,90,91,92,97,98 + kısmi 71a) |
| `bulunamadi` | 9 | TDV'de doğrudan yok, akademik kaynak bu oturumda ayrıca aranmadı (67,68,69,72,76,85,86,87,95) |
| `gorsel-gerekli` | 3 | Metin tek başına yetersiz, tarih/konum görselde (74,81,93,96 — 93/96 aynı Çehrin deseni) |
| `kapsam-disi` | 3 | Kaynaklı sahiplik sorusu değil, özellik/kapsam talebi (73,88,89) |
| `kronoloji-boslugu` / `yonlendirildi` | 1 | Harita değil kronoloji eksiği (75) |
| `durum-sorusu` | 1 | Önceki bir karara atıf, yeni araştırma istemiyor (86) |

### Öne çıkan iki bulgu

1. **Madde 91 (0039/H-0007) — YÜKSEK ÖNCELİK, kesin fact-check**: 1923'te
   haritada "Kutsal Roma İmparatorluğu" görünmesi kesin hata — o devlet
   6 Ağustos 1806'da resmen sona erdi (CLAUDE.md §3 hayalet-devlet sınıfı).
   `devletler.js`deki ilgili künyenin `t:` alanı 1806-08-06'yı aşmamalı.
2. **Madde 98 (0042/H-0011) — kronoloji düzeltmesi**: Kemah'ın Akkoyunlu
   dönemi TDV'de (`kemah` maddesi) açıkça VAR; ilgili kronoloji maddesinin
   "kaynak bulunamadı" notu bayat/yanlış, `TDV: kemah`e güncellenmeli.

Madde 93/96 (Çehrin, iki ayrı tarihte iki ayrı soru) CLAUDE.md §3.5.1'in
H-0123 tartışmasıyla aynı desen — Çehrin tarih boyunca çok el değiştirdi,
hangi yıla sorulduğu belirtilmeden kesin cevap verilemez.

## Commit (ikinci tur)

`git add -- denetim/YAMA-0052C-EKODUNYA.json denetim/EKO-DUNYA-0916.md` ·
`git commit -F <msg> -- denetim/YAMA-0052C-EKODUNYA.json denetim/EKO-DUNYA-0916.md` ·
`git pull --rebase --autostash` · `git push`.
