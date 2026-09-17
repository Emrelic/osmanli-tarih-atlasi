# Kapsam boşluğu iki cins; boilerplate gövde; genel maddeyi dene

> Kimlik `D216` · `CLAUDE.md §4` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

### 🔴 KAPSAM BOŞLUĞU İKİ CİNSTİR: COĞRAFÎ ve TANECİKLİK

`§4` *"TDV'nin kapsamadığı **coğrafyalar** için standart akademik referans
yeterlidir"* diyor. **8 Ağustos 2026'da bu kuralın bir boşluğu ölçüldü:**

> NOKTA KALİTE-4: *"İran'ı TDV kapsıyor — ama **küçük kasaba özelinde**
> kapsamıyor. Bu farklı bir durum, netleştirmek istiyorum."*

Ölçüm: `kirman` (57 KB) ve `yezd` (61 KB) maddeleri **il düzeyinde zengin**
ama sancak kasabalarının kendi kuruluş/fetih tarihini taşımıyor; kasaba
slugları (`zerend` · `langerud` · `fuman` · `rudbar`) **tek başına ölü.**

```
COĞRAFÎ boşluk      TDV o bölgeyi hiç görmüyor        (Batı Avrupa %0)
TANECİKLİK boşluğu  TDV bölgeyi görüyor ama O KADAR
                    İNCE taneciklikte konuşmuyor      ← YENİ, ölçüldü
```

⇒ **HÜKÜM: ikisi de aynı muameleyi görür.** Kuralın ruhu *"TDV konuşuyorsa
onu dinle, konuşmuyorsa uydurma"*dır — ve TDV **o tanecikte** susuyorsa,
standart akademik kaynak **meşrudur.** Şartı aynı: `kaynak:` alanına
**açıkça** yazılır (`"bulunamadı — TDV bu taneciği kapsamıyor, dayanak:
standart akademik kaynak"`), gizlenmez.
📌 Bu, Loango/Luba/Kuba künyelerinde zaten uygulanan biçimin ta kendisi;
yeni olan **coğrafya değil TANECİK** gerekçesiyle de geçerli olması.

### ⚠️ VE YENİ BİR TUZAK ALT-SINIFI: canlı slug + BOİLERPLATE gövde

`mazenderan` çekildi: **80 KB ham HTML'in tamamı header/arama JS/CSS**,
madde gövdesi **hiç gelmedi** — *"Safevî" · "Kiyâ" · "Mer'aşî"* kelimelerinin
hiçbiri metinde yok. Aynı yöntemle `gilan` · `kirman` · `yezd` **düzgün
geldi**, yani yöntem kusuru değil.
```
① ölü slug        302
② canlı slug, yanlış madde    200 + yanlış başlık   (ordu · saray · cin)
③ canlı slug, BOŞ gövde       200 + doğru başlık    (mogadisu)
④ canlı slug, BOİLERPLATE gövde  200 + doğru başlık ama içerik HİÇ GELMEZ  ← YENİ
```
📌 ③ ile ④ farklı: ③'te madde gerçekten boş, ④'te **madde var ama alınamıyor**
(muhtemelen sayfa boyutu / geç yüklenen içerik). ⇒ ④'te *"TDV'de yok"*
demek **yanlış** olur; doğru hüküm *"çekilemedi, tekrar denenecek"*.

### 🟢 VE TERSİ DE VAR: dar slug tutmazsa GENEL maddeyi dene

`kaynak:` partisinde ölçüldü. Grup 2 (İtalya · Doğu Asya · Amerika) pilotta
**0/6** vermişti ve *"bu coğrafyalar TDV kapsamı dışı"* sanıldı. Kayıt başına
**iki deneme** sınırıyla yeniden arandı:
```
2. denemede tutan: 10/17  (%59)   ⇒ "%0" ÖRNEKLEM GÜRÜLTÜSÜYMÜŞ
```
**Sebep:** denenen sluglar dar **kurum adlarıydı** (`milano-dukaligi` · `cin` ·
`peru`); oysa TDV'nin **genel ülke/kıta maddesi** aynı konuyu kapsıyordu
(`italya` · `cin--ulke` · `amerika`).
🔴 En çarpıcısı: **TDV'nin tek bir `amerika` (kıta) maddesi İnka · Meksika-Aztek ·
Peru · Brezilya'nın hepsini somut tarihle kapsıyor — beş kayıt tek maddeden
doğrulandı.**
⇒ **Kural: dar slug tutmazsa, kapsayıcı maddeyi dene.** Ve *"TDV bu coğrafyayı
kapsamıyor"* hükmü, **genel madde denenmeden verilemez.**
