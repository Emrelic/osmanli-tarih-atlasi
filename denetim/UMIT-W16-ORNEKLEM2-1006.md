# UMIT-W16-ORNEKLEM2-1006 — ilk örneklemde hiç çekilmeyen 27 kaydın TDV isabeti

Ağaç: `C:\atlas-w16` · `origin/main` `ae2e6bbd` · 5 Ekim 2026 · YALNIZ ÖLÇÜM, veri yazılmadı.

## 1. Evren
İlk örneklemde (tohum 1006) 0 kalem çıkan beş tür, kaynaksız 266 içinden:
`yabanci-komutan` 12 · `denizci` 4 · `mimar` 4 · `edebiyatci` 4 · `hanedan` 3 = **27**.
⚠️ Görev mesajı "komutan" diyor; `komutan` (18) ilk örneklemde 2 kalemle temsil edildi ve
27'nin toplamı ancak `yabanci-komutan` ile tutar — evren `yabanci-komutan` olarak alındı.

## 2. ÖNGÖRÜ — çekilişten ÖNCE mühürlendi
- Osmanlı denizci/mimar/edebiyatçı/hanedan (15): ① ≈ %90, ①+② ≈ %100.
- `yabanci-komutan` (12): ① ≈ %25, ①+② ≈ %75 (Haçlı/Avrupa komutanı TDV'de savaş/yer maddesinde geçer, ama küçük adlar düşebilir).
- 10 kalemde beklenen: **① %55 ± 20 · ①+② %85 ± 15 · ③ %15 ± 15.**

## 3. Çekiliş — tohum 1007, n=10, tekrar üretilebilir
Aynı tanım (kaynaksız = `kaynak` yok/boş), 27 kayıt dosya sırasıyla, `random.Random(1007).sample(E, 10)`;
`E` = kaynaksız ∩ `tur` ∈ {yabanci-komutan, denizci, mimar, edebiyatci, hanedan}. (Satır içi betik;
ARAC-KISI-ORNEKLEM-1006.py'nin aynı okuyucusu + tür süzgeci.) Dağılım: yabanci-komutan 4 · denizci 2 ·
edebiyatçı 2 · mimar 1 · hanedan 1. `kilic-ali-pasa` ve `abdulmecid-efendi` TABLO-01'de de ölçüldü (sonuç aynı).

## 4. Tablo (TABLO-01 sütunlarıyla)
| id | ad | tür | sınıf | slug | kapsayıcı slug | alıntı cümlesi | f desteği | t desteği | not |
|---|---|---|---|---|---|---|---|---|---|
| kilic-ali-pasa | Kılıç Ali Paşa (Uluç) | denizci | ① | `kilic-ali-pasa` | — | "1500'lü yılların başlarında doğmuş olması muhtemeldir"; künye "…995/1587)" | tartışmalı | var | f sahte kesinlik |
| namik-kemal | Nâmık Kemal | edebiyatci | ① | `namik-kemal` | — | "26 Şevval 1256'da (21 Aralık 1840) Tekirdağ'da doğdu"; "28 Rebîülevvel 1306 (2 Aralık 1888) tarihinde vefat etti" | var | var | |
| sedefkar-mehmed-aga | Sedefkâr Mehmed Ağa | mimar | ① | `mehmed-aga-sedefkar` | — | "…1027 (1618) yılında vefat ederek Üsküdar'da defnedildiğini belirtmektedir" (Ayvansarâyî'ye atfen) | — | **çelişki** (kayıt 1617, TDV 1618; hicrî 1027 = 1617-18, TDV miladiyi 1618 yazıyor) | TDV başlığı *Mehmed Ağa, Sedefkâr* |
| abdulmecid-efendi | Abdülmecid Efendi | hanedan | ① | `abdulmecid-efendi` | — | "29 Mayıs 1868'de İstanbul'da doğdu"; "23 Ağustos 1944'te hayata gözlerini yumdu" | var | var | |
| napier | Commodore Napier | yabanci-komutan | ② | — | `kavalali-mehmed-ali-pasa` | "Mehmed Ali 27 Kasım'da Amiral Napier ile bir anlaşma imzaladı" | yok | yok | `not` (İskenderiye Konvansiyonu) ✓ · TDV "Amiral" der, kayıt "Commodore" |
| sinasi | İbrâhim Şinâsi | edebiyatci | ① | `sinasi` | — | "doğumu için 1824 veya 1826 yılı öne çıkarılmıştır"; "13 Eylül 1871'de öldü" | **tartışmalı** (başlık 1826; metin 1824/1826, belgesiz) | var | |
| abdullah-b-suud | Abdullah b. Suûd | yabanci-komutan | ① | `abdullah-b-suud` | — | "Haliç'te Defterdar İskelesi'ne çıkarıldıktan sonra …"; "idam edildi (17 Aralık 1818)" | — | — (donem "?–1818" ✓; TDV verir: t 1818) | ⚠️ TDV "Vehhâbî emîri" — tür `yabanci-hukumdar` olmalı |
| allenby | General Allenby | yabanci-komutan | ② | — | `filistin` (+`birinci-dunya-savasi`) | "Allenby 11 Aralık'ta şehre girip …" | yok | yok | `not` (Kudüs ve Filistin) ✓ |
| baron-de-tott | Baron de Tott | yabanci-komutan | ① | `baron-de-tott-francois` | — | "17 Ağustos 1733'te Fransa'nın Chamigny köyünde doğdu"; "24 Eylül 1793'te burada öldü" | var | var | |
| ahmed-fevzi-pasa | Ahmed Fevzi Paşa (Firârî) | denizci | ② | — | `kavalali-mehmed-ali-pasa` | "Osmanlı donanması Kaptanıderyâ Ahmed Fevzi Paşa'nın hıyaneti sonucu Mısır'a teslim edildi" | — | yok (donem "?–1858" okunmadı) | tahmin slug'ları 4'ü de 302 |

## 5. Sonuç — öngörüyle karşılaştırma
| ölçü | sonuç | öngörü | tuttu mu |
|---|---|---|---|
| ① | **7/10 = %70** (%95: %35–93) | %55 ± 20 | ✓ |
| ①+② | **10/10 = %100** (%95: %69–100) | %85 ± 15 | ✓ (üst sınırda) |
| ③ | **0/10** (%95: %0–31) | %15 ± 15 | ✓ |

Tür başına:
| tür | n | ① | ② | ③ | öngörü ① / ①+② |
|---|---|---|---|---|---|
| yabanci-komutan | 4 | 2 | 2 | 0 | %25 / %75 → **ölçülen %50 / %100** (ikisi de öngörünün üstünde) |
| denizci | 2 | 1 | 1 | 0 | %90 / %100 → ① düşük (Firârî Ahmed Fevzi'nin maddesi yok) |
| edebiyatci | 2 | 2 | 0 | 0 | ✓ |
| mimar | 1 | 1 | 0 | 0 | ✓ |
| hanedan | 1 | 1 | 0 | 0 | ✓ |

TABLO-01 ile birleşik denizci/hanedan bilgisi (örneklem dışı, dosya sırası): denizci turgut-reis ①,
kilic-ali-pasa ①, muezzinzade-ali-pasa ② → 4 denizcinin 4'ü ölçüldü: ① 2 · ② 2. Hanedan cem-sultan ①,
turhan ①, abdulmecid ① → **3 hanedanın 3'ü ①** (tam sayım, örneklem değil).

## 6. Hüküm (karar koordinatörde)
- 27'lik grup **kampanyaya alınmalı**: ③ 0/10; ilk örneklemle birleşince 30 kalemde ③ = **0/30**.
- ② bu grupta yabancı komutanlarda yoğun ve **② kayıtlarda f/t TDV'de yok** (napier, allenby, ahmed-fevzi
  — 3/3). İlk örneklem ve TABLO-01 ile aynı desen: ② = kimlik + olay, yaşam tarihi değil.
- Yan bulgular: abdullah-b-suud türü (emîr → `yabanci-hukumdar`) · sedefkar `t` 1617/1618 · sinasi `f`
  tartışmalı · kilic-ali `f` sahte kesinlik · napier rütbesi.
- Not: n=10 ile tür başı oranlar gösterge, kesin değil (yabanci-komutan 4/12, %95 aralıklar geniş).
