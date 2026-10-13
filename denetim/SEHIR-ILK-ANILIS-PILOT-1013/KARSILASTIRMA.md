# ŞEHİR İLK ANILIŞ PİLOTU — Sonnet × Opus (Adım 0, 13 Ekim 2026)

Emre'nin isteği: yerleşimleri tarih sahnesine ilk çıktıkları tarihe geri götürmek; evren 1900'de
1.–3. kategori şehirler (ülke başkenti · eyalet merkezi · sancak düzeyi bölge merkezi). Bu pilot,
araştırmayı hangi modelin yapabileceğini ölçmek için aynı görevi (`GOREV.md`) iki modele bağımsız verdi.
Veri DEĞİŞMEDİ — yalnız araştırma.

## Örneklem
20 Anadolu şehri, hepsi 1900'de vilayet/sancak merkezi, hepsi atlasta var:
İzmir, Bursa, Ankara, Konya, Sivas, Trabzon, Erzurum, Diyarbakır, Van, Adana, Kastamonu, Bitlis,
Kütahya, Samsun, Çanakkale, Maraş, Antalya, İzmit, Amasya, Muğla.

## Maliyet (ajan kullanım ölçümü)

| | Sonnet | Opus |
|---|---|---|
| süre | 5,5 dk | 23,8 dk |
| araç çağrısı | 46 | 110 |
| token | 136 bin | 281 bin |
| birincil metin açtığı şehir | **0** | 15 (Perseus, Oracc, Pleiades JSON, Belleten) |

## Haritada başlangıç önerisi — yan yana

| Şehir | Sonnet | Opus | Not |
|---|---|---|---|
| İzmir | -0300 | -0280 | yakın; ikisi de nokta kaymasını (Bayraklı 6 km) gördü |
| Bursa | **-0199 "geçici tahmin"** | -0148 | Sonnet kaynaksız yıl uydurdu (YASAK) |
| Ankara | **-0799** (arkeolojik) | -0332 (Arrianos) | Sonnet aralığın YANLIŞ ucunu aldı (güvenli uç -0600) |
| Konya | -1999 (arama özeti) | -0400 (Ksenophon, açıldı) | Sonnet Ksenophon'u "hafızadan" bildi, açmadı |
| Sivas | -0063 | -0062 | Sonnet dayanağı Vikipedi türevi |
| Trabzon | -0399 | -0399 | aynı |
| Erzurum | **0415** | 0422 | Sonnet aralığın ilk ucunu aldı, kesinlik "yil" dedi |
| Diyarbakır | -2299 (TDV arkeolojik) | -0865 (RIMA 2, Oracc'ta açıldı) | Sonnet'in ilk anılışı (-1274) Vikipedi türevi |
| Van | -0829 | -0829 | aynı; ikisi de Tuşpa 4,7 km kaymasını gördü |
| Adana | -0699 (Karatepe) | -1499 (Adaniya) | TDV ham metni: eşitleme "kabul edilmekte", yer kesin değil — Opus'un okuması doğru; hangisinin alınacağı KARAR |
| Kastamonu | bulunamadı | 1118 (TDV, Aleksios dönemi fethi) | Opus TDV cümlesini kullandı |
| Bitlis | 0641 (TDV) | 0610 (Barrington, ikincil) | |
| Kütahya | **0100** | 0023 | Sonnet Strabon'u MS 1. yy SONUNA koydu — olgu hatası |
| Samsun | -0599 | -0500 | aynı TDV yüzyılı, Sonnet yanlış uç |
| Çanakkale | 1463 | 1463 | aynı; ikisi de TDV'deki 1452 cümlesini işaretledi |
| Maraş | -0857 (arama özeti) | -0823 (Bagg RGTC) | |
| Antalya | -0137 | -0137 | aynı |
| İzmit | -0261 | -0261 | aynı; ikisi de Astakos'u ayırdı |
| Amasya | **-2999 (UNESCO arama özeti)** | -0062 | Sonnet yasak/doğrulanmamış kaynak |
| Muğla | **-2499 (haber sitesi)** | -0029 (Barrington) | Sonnet haber kaynağıyla, Mobolla konumu doğrulanmadan |

Aynı: 5 · yakın (≤ 40 yıl): 4 · ayrışan: 11.

## Sonnet'in kural ihlalleri (20 şehirde)
- kaynaksız tahmin yıl: 1 (Bursa)
- yasak/doğrulanmamış dayanak (Vikipedi türevi, haber, UNESCO arama özeti): 4 (Sivas, Diyarbakır ilk anılış, Amasya, Muğla)
- aralığın yanlış ucu: 3 (Ankara, Erzurum, Samsun)
- olgu hatası: 1 (Kütahya)
⇒ **20'de en az 8 öneri yanlış ya da kurala aykırı.** Sonnet bunların çoğunu dürüstçe "düşük güven"
diye işaretledi — ama işaretli bir yanlış da yanlıştır.

## Ham metin doğrulaması (bu oturum, `tdv_ham.py`, 13 Ekim 2026)
WebFetch sayfayı küçük bir modelle özetliyor; ham TDV metni görülmüyor. `urllib` ile ham sayfa çekildi:
- Adana: *"Bu şehrin Adana olduğu kabul edilmekte, ancak … kesinlikle bilinmemektedir"* — Opus doğru.
- Çanakkale: "1452" cümlesi TDV'de AYNEN var — ikisi de doğru işaretledi; açıklama bekliyor.
- Bursa: "II. yüzyıl sonlarında … Hannibal" TDV'de AYNEN var — Opus'un kronoloji itirazı geçerli (Hannibal öl. MÖ 183/181).

## Opus'un ayrıca yakaladığı
- Görev metnimde hata: Abydos KARŞI yakada değil, Anadolu yakasında (Pleiades 501325); karşıdaki Sestos.

## Sonuç
1. Haiku yasak (CLAUDE.md). Sonnet bu işte **karar verici olamaz**: birincil kaynağa hiç ulaşamadı, yasak kaynağa düştü, aralık yönünü ters aldı.
2. Opus araştırmayı yapar. Sonnet en fazla mekanik işte (liste eşleştirme, biçim) kullanılır.
3. TDV için WebFetch DEĞİL ham çekim (`tdv_ham.py` deseni) kullanılmalı — alıntılar birebir olur.
4. Opus temposu: şehir başına ~1,2 dk, ~14 bin token (yalnız ilk anılış; sahiplik zinciri ve kronoloji HARİÇ).

## Açık kalanlar
- Adana: Adaniya (MÖ ~1500, yer kesin değil) mı, Karatepe (MÖ ~700) mi? — kural kararı: "eşitleme kabul edilmekte ama yer kesin değil" hangi tarafa yazılır.
- Çanakkale 1452 cümlesi.
- Nokta kayması > 3 km olan 4 şehir (İzmir, Van, İzmit-Astakos, Çanakkale-Abydos): ayrı antik nokta mı açılır, yoksa modern nokta antik tarihi almaz mı?
- Atlasın `k:` alanı zamansız; 1900 kategorisini vermiyor (Söğüt k1, Samsun k3). 1900 kategorileri ayrıca belirlenmeli.
