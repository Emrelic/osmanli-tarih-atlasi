# ŞARTNAME — `kaynak:` DENETİMİ

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-3042 · 5 Eylül 2026
> **Bu bir ŞARTNAMEDİR, bir alet DEĞİL.** Kod yazılmadı, hüküm verilmedi.
> Ölçümlerin tamamı: `denetim/OLCUM-KAYNAK-TASIMIYOR-0905.md` (künye) ve
> `denetim/OLCUM-KAYNAK-TASIMIYOR-YERLESIM-0905.md` (yerleşim, EK 1-6).

---

## 0. BU DENETİM NE SORAR — ve NE SORMAZ

```
SORAR    «`kaynak:` alanında gösterilen madde, bu kaydın taşıdığı TARİHİ
          taşıyor mu?»
SORMAZ   «bu tarih DOĞRU mu?»
SORMAZ   «bu kaynak GÜVENİLİR mi?»           (o `§4`in işi)
SORMAZ   «bu kimlik buraya AİT mi?»          (o `§3.5` ailesinin işi)
```
🔴 **Ayrım hayatî.** Bir kayıt doğru tarihi taşıyıp yanlış kaynağı
gösterebilir (`urabi-pasa` `t=1914-12-18` — gün tarihen doğru, madde
1911'de bitiyor). Bu denetim **ikincisini** yakalar, birincisi hakkında
hiçbir şey söylemez.

📌 Ve niçin gerekli: `kaynak:` alanı **DOLU** olduğu için hiçbir mevcut
denetim ötmüyor, ve okuyan onu *"kaynaklı"* sanıyor. `§4`ün *"kaynağı
yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez"* kuralının
bir kademe sinsi hâli: **kaynak yazılmış, ama o kaynak bunu söylemiyor.**

---

## 1. YEDİ ŞART — her biri, onu doğuran VAKAYLA

### ① GÖVDE KESİLMEZ
> **VAKA:** TDV gövdelerini ilk `BİBLİYOGRAFYA` geçişinde kestim.
> `uganda` maddesi çok bölümlü (`Müellif:` 8 kez) ve kesme noktası
> **7.313 / 34.134** idi ⇒ metnin **%79'unu attım**, ve `Bunyoro`yu
> *"0 kez geçiyor"* diye ölçtüm — **gerçek 13.**
> Yakalayan şey bir eşik değil, **bilinen bir olguyla çelişmesi** oldu.

⇒ Gövde tam alınır. Alınan karakter sayısı **raporlanır** — bir *"yok"*
hükmü, kaç karakter okunduğu yazılmadan verilemez (`§4⑦` kardeşi).

### ② `⚫ ÖLÇÜLEMEDİ` AYRI KOVA
> **VAKA:** `hidiviyet` · `misir--ulke` · `abbas-hilmi` HTTP **200**
> döndü ama gövde **807 / 1.031 / 869** karakter — boilerplate.
> *"TDV'de yok"* diye raporlansalardı üç yanlış hüküm doğardı.
> Ve `bosna` · `hersek` · `bosna--osmanli-donemi` aynı sınıf.

⇒ `302` · `000` · boilerplate · ayrıştırıcı hatası — **hiçbiri 🔴
değildir.** `§4⑤`: *ölçülemedi ≠ ölü.* Eşik önerisi: gövde < 3.000
karakter ⇒ `⚫`. ⚠️ Eşik keskin değil: `avusturya-macaristan` 5.773
karakterle eşiği geçti ama içerik ince çıktı ⇒ `🟡 şüpheli` sayıldı.

### ③ PENCERE UÇLARI ELENİR
> **VAKA:** `1923-10-29` ve `1281-01-01` atlasın **sınır işaretleri**,
> bir gün iddiası değil. `§4`te ölçülmüş emsal: 161 künyelik bir kova
> **147**'ye indi, çünkü 14 künye o kümeye **yalnız `1923-10-29`
> yüzünden** girmişti.

⇒ Bu iki değer evrene **girmez.**

### ④ MİRAS ALINMIŞ `kaynak:` EVRENE GİRMEZ
> **VAKA:** Yerleşim evrenini kurarken kayıt üstündeki `kaynak:`ı
> dönemlere miras saydım: **428 dönemin 330'u (%77) mirastı**, yalnız
> **101'i** dönemin kendi beyanı. %53'lük ilk manşetim oradan geliyordu.

⇒ Yalnız **dönemin KENDİ `kaynak:` alanı** sayılır. Miras alınmış bir
etiket bir **dayanak beyanı değildir**; ona karşı ölçmek, kaydın **hiç
yapmadığı bir iddiayı** sınamaktır.

### ⑤ `f:` ve `t:` AYRI RAPORLANIR
> **VAKA:** Bir dönemin iki ucu **farklı olaylardır** ve tek `kaynak:`
> ikisini birden göstermek zorunda. `urabi-pasa`: `f=1882-09-13` madde
> tarafından taşınıyor, `t=1914-12-18` **hiç anılmıyor.**
> ⚠️ **AMA:** bundan çıkarılan *"kaynak başlangıcı taşır, bitişi
> taşımaz"* deseni (**%87**) slug çeşitliliği artırılınca **ÇÖKTÜ**
> (%23 ↔ %21) — `urabi-pasa` evrenin %63'üydü ve deseni o sürüklüyordu.

⇒ Ayrı raporlamak **iyi uygulamadır** (iki uç iki iddiadır), ama
*"asimetri"* gerekçesiyle **değil.** Gerekçe: iki ucun **ayrı ayrı
sınanabilmesi.**

### ⑥ BİRİM UÇ DEĞİL, **BENZERSİZ DEMET**
> **VAKA:** `urabi-pasa` **110 uç** taşıyor ama benzersiz gün **2**:
> `f=1882-09-13` ×55 ve `t=1914-12-18` ×55, hepsi `isg`/`ingiltere`.
> Mısır'ın tamamına uygulanmış **tek bir işgal örtüsü.** Şişme **55 kat.**
> Evren geneli: **260 uç → 97 benzersiz iddia (2,7×).**

⇒ Sayım birimi **(gün · kimlik · kategori · kaynak) demeti.**
🔴 Uç sayarsan tek bir cümleyi 110 kusur gibi gösterirsin.
🟢 Ve tersi de doğru: **bir 🔴 düzeltilirse 55 kayıt birden düzelir** —
kalem göründüğünden **ucuz**, kusur göründüğünden **küçük.**

### ⑦ YALNIZ `🔴` OTOMATİKLEŞİR — ve o bile TAKVİM ekseninde yanılır
> **VAKA (çare ısırdı):** Gün araması iki yönde de kırıldı.
> ```
> GEVŞEK  "1 Temmuz" → "21 Temmuz"UN İÇİNDE bulundu
>         "19 Nisan" → «19 Nisan 1918» — BAŞKA YIL
> SIKI    `urabi-pasa f=1882-09-13` 🟡 çıktı — gün gövdede VAR
>         ("13 Eylül'de"), yıl 90 karakterin ötesinde
> ```
> ⇒ ***Gevşek yakalar ve uydurur; sıkı ayıklar ve kaybeder.***
> Dört ucun **üçünün** hükmü okumaya dayandı.
>
> **VE `🔴` BİLE SINIRLI — `kirim`:** kaynak *«(8 Nisan 1783)»* diyor
> (**Jülyen**), veri `1783-04-19` (**Gregoryen**, +11 gün). Aynı gün.
> Otomatik arama onu **hiçbir biçimde** eşleştiremez.

⇒ Otomatikleşen tek kova **`🔴` (yıl gövdede HİÇ yok)** — çünkü ölçüt
**yokluk**, ve yokluk yorum gerektirmez. `⚪`/`🟡` ayrımı
**otomatikleştirilemez**, insan okuması ister.
🔴 Ve `🔴` için de takvim kapısı şart: yıl bulunamazsa **hicrî karşılık**
ve **±2 komşu yıl** aranır; bulunursa `🟡`ye düşer.

---

## 2. DÖRT KOVA — ve adları KASITLI

```
🔴 TAŞIMIYOR    yıl gövdede HİÇ yok (hicrî ve komşu yıllar dâhil)
                ⇒ kaynak o iddiayı KESİNLİKLE taşımıyor
🟡 KABA         yıl var, GÜN yok ⇒ gün bu kaynaktan gelmiyor
⚪ DOĞRULANMADI gün biçimi geçiyor ⇒ ÇÜRÜTÜLMEDİ. **"TEMİZ" DEĞİL.**
                `§4⑧`: rakamın geçmesi, o rakamı taşıyan cümlenin doğru
                şeyi tarihlediğini göstermez.
⚫ ÖLÇÜLEMEDİ   302 · boilerplate · ayrıştırılamadı
```
⚠️ `⚪` asla *"temiz"* diye raporlanmaz — bu, bu gecenin en çok
tekrarlanan hatası olurdu.

### 🔴'IN ÜÇ KADEMESİ — ayrı ayrı raporlanır
```
① kaynak SUSUYOR        yıl gövdede hiç yok            `kastilya`
② kaynak KABA konuşuyor yıl var, gün yok               `kahire`
③ kaynak BAŞKA ŞEY DER  aynı olay, BAŞKA tarih         `portekiz` ·
                                                        `berlin-antlasmasi`
```
③'ün vakaları: `portekiz` künyesi `f=1139-07-25` (Ourique) diyor, TDV
*«bağımsız bir krallık haline dönüştü (**1143**, Zamora Antlaşması)»*
diyor — dört yıl **ve başka olay.** `berlin-antlasmasi` `t=1908-10-05`
diyor, TDV *«**7 Ekim 1908**'de … ilân edildi»* diyor — iki gün, **aynı
fiil.**
🔴 ③ en tehlikelisi: `⚪` kovasına düşebilir (yıl gövdede vardır) ve
**sessiz bir çelişki** bırakır.

---

## 3. ÖN KOŞUL — `§4`ün AYRIŞTIRMA KAPISI

🔴 **Bir fark `③ BAŞKA ŞEY DİYOR` diye damgalanmadan ÖNCE ayrıştırılır.**
Bu gece altı fark ayrıştırıldı ve **beşi çelişki çıkmadı**:
```
① AYRIŞTIRMA  yan cümle yanlış bağlandı        (Harput 1429)
② HASSASİYET  `1913-11-01` gün sanıldı, `gun:` "Kasım 1913" diyor
③ TAKVİM      TDV Rumî 26 Ekim = Milâdî 8 Kasım (Selanik)
④ KAPSAM      `berka` doğu / `trablusgarp` batı — SINIR tarifi
⑤ NESNE       Edirne 1829: TOPRAK Eflak'a · KALE Rusya'ya
⑥ FARKLI OLAY `abbas-hilmi-ii` 19 Aralık — konusu HİDİVİN AZLİ
```
🔴 **Ve altıncısı ÇÖZMEDİ:** `berlin-antlasmasi` 5 ↔ 7 Ekim — TDV'nin
tarihlediği fiil de *"ilân"*, atlasınki de. **Aynı olay, farklı gün.**
⇒ Ayrıştırma bir **ön koşul**, bir **çare** değil; çözmediğinde
`③` damgası **hak edilmiş** olur.

---

## 4. EVREN — nasıl kurulur

```
KÜNYE      `data/devletler.js`
   591 künye → 328 `kaynak:` "bulunamad*" ile BAŞLAMIYOR
            → 172 `f:`/`t:`sinde GÜN hassasiyeti (pencere uçları hariç)
            → 148 `kaynak` bir SLUG                    ⇒ EVREN
              24 serbest metin — otomatik SINANAMAZ

YERLEŞİM   `girdi.yukle()` · dönem bazlı
   3805 yerleşim → 3715 kaynak taşıyan dönem
                 → 2987 GÜN hassasiyetli uç
                 → 428 `kaynak` SLUG olan dönem
                 → 101 … ve slug DÖNEMİN KENDİ alanında  ⇒ EVREN
                        (260 uç · 29 slug · 97 benzersiz iddia)
```
🔴 **SLUG TANIMI: değerin TAMAMI slug olmalı**, ilk kelimesi değil.
> **VAKA:** ilk kelimeyi slug sayan tanım `ankraj` 47 · `ostrog` 42 ·
> `veri-ici` 22 · `1913-05-30` 16 gibi düz metin başlangıçlarını evrene
> soktu (609 → 428).
🔴 Ve `bulunamad*` ile başlayan değer **elenir** — noktasız `bulunamadi`
slug desenine uyuyor ve evrene sızıyor (6 uç).

---

## 5. BUGÜNKÜ TABAN

```
KÜNYE evreni      örneklem 20 künye / 26 uç · random.Random(20260905)
   🔴 3 · 🟡 13 · ⚪ 10 · ⚫ 0
   🔴 vakalar: `kastilya` (f ve t) · `portekiz` (f)

YERLEŞİM evreni   örneklem 20 dönem / 35 uç (yoğun) · 19 slug / 32 uç (çeşitli)
   yoğun    🔴 15 · çeşitli 🔴 7
   ⚠️ %43 ↔ %22 — İKİSİ DE ORAN DEĞİL, örneklem küçük

`isg:` DÖRTLÜSÜ — `t:` uçları tek tek
   urabi-pasa        🔴 KESİN  → ÇÖZÜLDÜ: `kaynak:"misir"` (55 kayıt)
                       `misir` İKİ UCU DA taşıyor, tam dizgiyle
   berlin-antlasmasi 🔴 AÇIK   → TDV 7 Ekim diyor, karar bekliyor (14 kayıt)
   kahire            🔴 AÇIK   → `1801` yalnız "1801-1805 krizi" olarak
   kirim             🟢 TAŞIYOR → 8 Nisan 1783 Jülyen = 19 Nisan Gregoryen
```
🔵 **AÇIK KALEM:** `kirim`in takvim çevirisi **hiçbir alanda beyan
edilmemiş.** `§4` emsali var (*"30 Ocak 1667 (Jülyen) / 9 Şubat 1667
(Gregoryen)"*) — `not:` alanına yazılmalı.

---

## 6. NEREYE KONMAZ

🔴 **`arac/denetle.py`ye KONMAZ.** Ölçüt **HTTP gerektiriyor**; o alet
hızlı ve çevrimdışı olmak zorunda.
⇒ Ayrı bir `denetim/ARAC-*` aleti, **istendiğinde** koşar.

🔴 **Ve `C13` üç ayağı ayrıca gerekir** — özellikle ③ (girdiyi gerçek
kaynağından okuma): gövde **kesilmeden** alınmalı, yoksa nöbetçi bugün
benim yaptığım hatayı yapar ve **sahte 🔴** üretir.

---

## 7. NE ÖLÇÜLMEDİ — şartname bunları KAPSAMIYOR

```
🔴 `🟡` ve `⚪` kovalarının cümleleri hiç okunmadı (örneklemlerde)
🔴 Künye evreninde 24, yerleşimde 1800 serbest-metin dayanak
   OTOMATİK SINANAMAZ — bu şartname onlara UYGULANMAZ
🔴 330 miras dönem için doğru soru BAŞKA: "bu etiket bu döneme miras
   kalmalı mıydı?" — ayrı bir denetim
🔴 `kahire` ve `kirim` için DOĞRU kaynak aranmadı
🔴 Kronoloji katmanına (`olaylar*.js` · `kronoloji*.js`) hiç uygulanmadı
⚪ Örneklemler 20'lik; bir MERTEBE verir, ORAN vermez
```
