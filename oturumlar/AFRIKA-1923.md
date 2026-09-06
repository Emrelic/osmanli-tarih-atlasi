# AFRİKA — 1923 SINIR DENETİMİ

```
AD        AFRİKA
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ClaudEmre HAYIR — İŞÇİ oturumsun, koordinatör 1.MURAT HÜDAVENDİGAR
```
> Okuma sıran: **① `CLAUDE.md` · ② `oturumlar/YONTEM-1923-SINIR.md` · ③ bu dosya.**

## ① İŞ
`1923-10-28` kesitinde **Sahra altı Afrika'nın 501 yerleşiminin** sahiplik
kimliklerini kaynağa karşı denetle. Kusurları `denetim/` altına **yama
taslağı** yaz. **VERİ YAZMA** — koşu 7b sürüyor, `data/` ve `arac/` DONUK.

## ② DOSYALARIN (`§7`)
```
🟢 denetim/yer_yama_afrika_1923.js · denetim/AFRIKA-*.md
   denetim/KRONOLOJI-AFRIKA-*.json · oturumlar/AFRIKA-1923.md
🔴 data/* · arac/* · js/* · kök *.md · başka oturumun dosyaları
```

## ③ TABAN — ölçüt YAZILI
```
const {bolge, SAHIP} = require('./ARAC-BOLGE-KUTU-0906.js')   // denetim/ içinden
SAHRA-ALTI-AFRIKA  501 nokta · 12 BENZERSİZ kimlik
```
🟢 Cascade ⇒ örtüşme YOK, boşluk YOK (3630 = 3630). **İlk işin kendin
ölçmek** (`B10`) — ayrışırsa BİLDİR.

## ④ NİÇİN BU BÖLGE FARKLI — ve niçin öncelik 4
Kimlik sayısı **en düşük** (12) ama nokta sayısı **en yüksek** (501).
Sebebi: 1923'te Afrika'nın neredeyse tamamı **sömürge**, ve atlas onları
**metropol kimliğiyle** boyuyor. Yani bu bölgenin işi hayalet avı değil,
**D SINIFI**: `ingiltere` · `fransa-cumhuriyet` · `belcika` (59) ·
`portekiz` (60) · `italya` altında yatan sömürge kimliklerini ayırmak.

🔴 **AMA D SINIFI BİR ADAY LİSTESİDİR, KUSUR LİSTESİ DEĞİL.** Koordinatörün
triyaj aleti aynı ölçütle `sovyet-rusya`yı (Sibirya) ve `yunanistan`ı (Ege
adaları) da işaretledi — ikisi de sömürge değil. **Her kimlik elle
vetlenecek.** Ve BALKAN oturumu o aletin kutularının **122 öksüz nokta
bıraktığını ve 483 noktayı çift saydığını** ölçtü ⇒ triyajın D çıktısına
sayı olarak güvenme, yalnız **aday** olarak.

## ⑤ ÖLÇÜLMÜŞ AÇIK KALEMLER
```
① HAYALET · adal   1 nokta · künye t:1887-01-06 · 36,8 yıl FAZLA
② isg ÖRTÜSÜ · buganda 1 nokta, altta `buganda`, üstte `ingiltere` örtüsü
   ⇒ ÖRTÜLÜ KAYIT SINIFI — aşağıya bak, ÖNEMLİ
③ D SINIFI · Belçika Kongosu · Portekiz Angola/Mozambik · İngiliz ve
   Fransız Afrikası — HANGİLERİNİN KÜNYESİ ZATEN VAR?
   🟢 ÖNCE ŞUNU KOŞTUR: node denetim/ARAC-ATIL-KUNYE-0906.js
      "künye VAR + renk VAR + veride SIFIR dönem" olanları listeler.
      Ortadoğu'da bu tarama 11 hazır künye buldu — Afrika'da kaç?
④ habesistan 64 nokta · liberya 5 — bağımsızlar, sınırları denetlenecek
⑤ GERİ KALAN ~430 noktanın bölge bölge kaynak denetimi
```

## ⑥ 🔴 ÖRTÜLÜ KAYIT — bugün ORTADOĞU'nun düştüğü tuzak
ORTADOĞU *"Tunus 36 nokta 42 yıl anakronizm"* diye bir manşet yazdı ve
**kendi çürüttü**: 36 kaydın 36'sında da `isg: 1881-05-12 →
fransa-cumhuriyet` ZATEN VARDI, ve o gün TDV'nin Bardo Antlaşması günüyle
birebir aynı. Veri yanlış değil, **iyi**.
```
🔴 HATANIN CİNSİ: TEK KATMAN ölçüp HARİTA hakkında hüküm çıkarmak.
   `v:` bakıp `isg:`ye bakmamak — ve koordinatörün 1923 tabanı da
   AYNI KÖRLÜĞÜ taşıyordu (ölçüldü: 90 nokta örtülü, %2,5).
🟢 KURAL: bir noktanın 1923'te NE ÇİZDİĞİNİ sormak için
   d: → v: → s: → **isg:** DÖRDÜ BİRDEN okunur.
```
Ve ORTADOĞU'nun ikinci bulgusu senin de aletini bağlar:
```
`v:` dönemlerinde `k` anahtarı:  HİÇ YOK 56 · VAR-BOŞ 0 · DOLU 373
⇒ bu külliyatta BOŞLUK yok, yalnız YOKLUK var. `p.get("k")` ile yazılan
  bir tarama 56 kaydı SESSİZCE yanlış kovaya koyar. `in` ile sor.
```

## ⑦ BÖLGE-ARASI SINIR — ikisi de ORTADOĞU ile
```
italya ↔ adal   213 km      yemen ↔ adal   277 km
```
`§3.5.1` iki uç da ölçülür. ORTADOĞU'ya tahtadan haber ver.
🔴 **KİMLİK KALEMLERİ CASCADE'E GÖRE BÖLÜNMEZ:** bir kimliğin bütün
noktaları, onu İLK ölçen oturumda kalır.

## ⑧ HABERLEŞME · DAMGALAR · COMMIT
→ `YONTEM-1923-SINIR.md` §④ ⑥ ⑦.
🔴 **Cevabını kendi pencerene yazmak = hiç cevap vermemek.**

---
## İLERLEME NOTU
