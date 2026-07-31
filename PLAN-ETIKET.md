# ÇOK EKSENLİ KRONOLOJİ ETİKETLEMESİ — plan

Kullanıcının isteği (31 Temmuz): kronoloji on ayrı eksenden süzülebilsin —
dünya · kıta · alt bölge · **bir ülke ve irtibatlı olduğu her yer** · ülke ·
bölge · şehir · olay · kişi · konu (heykelcilik, topçuluk, gemicilik, spor…).
Etiketler çaprazlaşsın, kapsasın, kesişsin. *"Kültür-sanat + bilim seçilirse
tüm dünyada o etiketli olaylar; ek olarak Avrupa seçilirse yalnız Avrupa'dakiler."*

> **Şimdilik ALTYAPI. İçerik sonra.** Meksika'da ne olmuş, heykelcilikte ne
> olmuş — bunlar doldurma işidir ve şemayı beklemek zorunda.

---

## 0. TABAN — tasarımdan ÖNCE ölçüldü (31 Temmuz)

```
madde                                984
`yer:` · `kisiler:` · `etiket:` · `k:` taşıyan   984  (%100)
benzersiz `yer:` değeri              674   ← 433'ü VİRGÜLLÜ (serbest metin)
benzersiz `etiket:` değeri            20
benzersiz `k:` değeri                 25   (bugün üç otorite eşitlendi)
```
📌 **İyi haber:** dört alan da her maddede var, sıfırdan alan eklemiyoruz.
🔴 **Kötü haber:** `yer:` **serbest metin.** 674 değerin 433'ü virgüllü
(`"Tebriz, Azerbaycan"`, `"Kili (Chilia), Tuna deltası, Boğdan sahili"`).
Coğrafî süzme bunun üstüne kurulamaz.
⚠️ `etiket:` sözlüğü de kirli — 20 değerin dördü **yazım ikizi**:
`isyan`↔`ayaklanma` · `idare`↔`idari` · `toprak-kazanc`↔`toprak-kazanci`.
Bugün `k:`de aynı sınıfı ölçüp düzelttik (`OGRENILENLER` bayat sözlük vakaları).

---

## 1. 🔴 ON EKSEN ÜÇ AYRI ŞEY — en önemli tasarım kararı

Kullanıcının listesi on madde ama **tek tip etiket değil.** Karıştırılırsa
şema şişer ve bakımı imkânsızlaşır.

| Aile | Maddeler | Ne | Nasıl saklanır |
|---|---|---|---|
| **COĞRAFYA** | 1,2,3,5,6,7 | *kapsama hiyerarşisi* | **EN DAR yer** yazılır, üstü türetilir |
| **KONU** | 10 | düz, dikey kesen | `etiket:`/`konu:` listesi |
| **VARLIK** | 8,9 | referans | `kisiler.js` · madde kimliği |
| **İLİŞKİ** | 4 | *hesaplanan küme* | **YAZILMAZ, TÜRETİLİR** |

### 1.1 Coğrafya: en dar yer yazılır, ata zinciri türetilir
Bir maddeye *"dünya, Avrupa, Balkanlar, Bulgaristan, Sofya"* yazılmaz —
**yalnız `Sofya`** yazılır, kalanı hiyerarşiden gelir. Aksi hâlde her madde
beş etiket taşır, biri güncellenince öbürleri bayatlar ve **hangisinin bayat
olduğu bilinmez** (bugün beş kez yaşadığımız sınıf).

### 1.2 🔴 Madde 4 (ülke + irtibatlı her yer) ELLE YAZILMAZ
Kullanıcı örnek verdi: İngiltere → Avustralya · Hindistan · Çin · Hong Kong ·
Güney Afrika · Kenya · Osmanlı coğrafyası · Kanada · ABD.
**Bu listeyi elle tutmak yanlış olur** — hem bayatlar hem tartışmalıdır.
Oysa **veride zaten var**: bir devletin irtibat kümesi = `yerlesimler*.js`'te
o devletin herhangi bir tarihte `d:`/`v:`/`s:`/`isg:` ile tuttuğu yerlerin
kümesi. Tek satır sorgu, sıfır bakım, kendiliğinden güncel.
📌 Bu, projenin bugün öğrendiği kuralın aynısı: **türetilebiliyorsa yazma.**

---

## 2. FAZLAR — sıra bağlayıcı

### FAZ 0 — ÖLÇÜM *(DENETÇİ + TAKİPÇİ)*
Tasarım kararlarını **ölçüm belirlesin**, tahmin değil.
1. **`yer:` çözünürlüğü**: 674 değerin kaçı bilinen bir yerleşime/bölgeye
   çözülüyor? Kaçı hiçbir şeye? Virgüllü 433'ün ayrıştırılmasıyla kaç ayrı
   yer çıkıyor?
   ⚠️ `denetle_eslesme.py`'de eşleştirme makinesi **zaten var** ve körlükleri
   ölçülü (`§19` sağ kelime sınırı · `§26` üretilmiş ek · Türkçe hâl eki).
   Sıfırdan yazma, onu kullan.
2. **`kisiler:` çözünürlüğü**: kaç ad `data/kisiler.js`'e çözülüyor?
3. **`etiket:` temizliği**: dört yazım ikizinin dağılımı, birleştirme önerisi.
4. **Konu ekseni ne kadar dolu**: `denizcilik` 11, `kultur-sanat` 57, `bilim`
   43 — kullanıcının saydığı konular (heykelcilik, topçuluk, spor) veride
   **kaç madde** buluyor? Sıfırsa o eksen bugün boş demektir ve bunu bilerek
   başlamalıyız.

### FAZ 1 — ŞEMA *(KOORDİNATÖR)*
`VERI-YAPISI.md`'ye yazılacak. Faz 0 ölçümü olmadan yazılmaz.
- `yer:` **serbest metin olarak KALIR** (insan okur) + yeni `yer_id:` alanı
  eklenir (makine okur). İkisi bir arada, biri diğerinin yerine geçmez.
  ⚠️ Serbest metni silmek geri alınamaz bilgi kaybıdır: *"Tuna deltası,
  Boğdan sahili"* bir kimlikte kodlanamaz.
- `konu:` listesi — kontrollü sözlük.
- `kisi_id:` listesi.
- Madde 4 için **hiçbir alan yok** — türetilir.

### FAZ 2 — COĞRAFYA HİYERARŞİSİ *(yeni: KATALOG/U2 ya da ayrı oturum)*
`data/cografya.js`: kıta → alt bölge → ülke → bölge → şehir.
🔴 **EN BÜYÜK TUZAK, şimdiden yazıyorum:** "ülke" tarih boyunca değişir.
1453'te Bulgaristan diye bir ülke yok. Bu hiyerarşi **BUGÜNKÜ coğrafyadır ve
yalnız SÜZME İSKELESİDİR — tarihî iddia değildir.** Bu cümle dosyanın başına
yazılmazsa atlas kendi kendine anakronizm üretir ve bütün güvenilirliği
oraya dayanıyor.
⇒ Süzgeçte "Bulgaristan" demek *"bugün Bulgaristan sınırları içinde kalan
yerler"* demektir; haritada 1453'te Bulgaristan devleti gösterilmez.

### FAZ 3 — ARAYÜZ *(ARAYÜZ)*
Süzgeç paneli. **Semantik kararı:**
```
aynı aile içinde   → VEYA   (Avrupa VEYA Asya)
aileler arasında   → VE     (coğrafya VE konu VE dönem)
```
Kullanıcının örneği birebir bunu istiyor: *"kültür-sanat + bilim"* (VEYA),
*"ek olarak Avrupa"* (VE).
⚠️ Seçili etiketler **URL'de** taşınsın — bir süzme sonucu paylaşılabilir
olmalı; akademik başvuru kaynağı iddiasının pratik karşılığı bu.

### FAZ 4 — İÇERİK *(araştırma oturumları)*
Konular ve dünya kapsamı doldurulur. **Faz 1-2 bitmeden başlamaz** — aksi
hâlde şema değişince yeniden yazılır.

---

## 3. ⚠️ SIRA VE MALİYET — dürüst uyarı

Bu, bugüne kadarki en büyük tek özellik. Ve şu an **8 paketlik uygulama
kuyruğu** ile **üç açık motor kalemi** (anlık görüntü · çöl tavanı · scalerank)
var. Faz 0 ölçümü hemen başlayabilir (ölçüm kimseyi bloke etmiyor), ama
Faz 2-3 mevcut dalga kapanmadan başlarsa ikisi de yarım kalır.

📌 Bugünün dersi: *"iş → dalga → yayın → sonraki dalga."* Bu plan **bir
sonraki dalganın** konusudur; Faz 0 bu dalgada ölçülür.
