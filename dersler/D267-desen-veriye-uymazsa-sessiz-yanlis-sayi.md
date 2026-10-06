# D267 — Desen veriye uymazsa araç ÖLMEZ, YANLIŞ SAYI verir — ve sayı güven telkin eder

**6 Ekim 2026.** İki kaynaktan birleşti: UMIT-W32b `SESSIZ-SIFIR-KAPI` ölçümü (ders adayı
(d)) ve aynı gün koordinatörün ÜÇ kez düştüğü hata. Aynı kökün iki yüzü olduğu için tek ders.

## Slogan
Bir desen, eşleştiği veriye uymazsa **hata vermez** — **sıfır** ya da küçük, makul, inandırıcı
bir sayı verir. Yanlış POZİTİF kendini ele verir; yanlış **NEGATİF** vermez. Bu yüzden bu aile
ötekilerden tehlikelidir: çıktı bir ölçüm gibi görünür ve bir hükme temel olur.

## İKİ YÜZ — ve ikincisi daha kötü

### Yüz A — desen HİÇ uymadı (yazıldığı anda yanlış)
Koordinatör 6 Ekim'de üç kez, üçü de aynı sınıf:
```
① "(f|t|d|v)": grep        ↔  veri TIRNAKSIZ anahtar kullanıyor (t:"1920-01-10")
                              ⇒ 0 döndü, "bu alanlara dokunulmamış" hükmü kuruldu
② ls denetim/ | grep W37   ↔  raporlar KONUYLA adlandırılmış (KRONOLOJI-COK-PAKET-1006.md),
                              W numarası dosyanın İÇİNDE  ⇒ 0 döndü, "rapor burada yok"
                              hükmü kuruldu ve bir işçi gereksiz işe yönlendirildi
③ `ad:` ile `kaynak` aynı  ↔  kayıt ÇOK SATIRLI, `kaynak:` kendi satırında
   satırda arandı             ⇒ "18 → 19" döndü, "266 borç ödenmedi, sayaç değişti"
                              hükmü kuruldu. Gerçek: dört commit 277 `kaynak` satırı ekledi.
```
📌 ③'ün yönü TERSTİ ve bu öğreticidir: aynı hata sınıfı bir kez borcu **GİZLER**, bir kez de
**ÖDENMİŞ** bir borcu ödenmemiş gösterir. İkisi de yanlış kayıt.

### Yüz B — desen BİR ZAMAN uydu, sonra VERİ TAŞINDI
29 Eylül 2026 kodlaması üretilmiş dosyaları yeniden adlandırdı:
`PETEKLER → donemler_on.js` · `DONEMLER → donemler_ust.js`. Tüketicilerdeki
`/donemler\.js/` süzgeci artık hiçbir şey görmüyordu. **Dosyalar TAM olan bir ağaçta bile**
(`coz-c` ile geri çözülmüş) yamasız betikler yanlış sayı bastı:
```
UI2-FARK          PETEKLER            0  →  gerçek 4296
                  peteği bulunamayan 570  →  gerçek 2
ANTLASMA-MALIYET  her birleşim "peteksiz"  →  gerçek 0
ANTLASMA-KAPSAM   her satır "0 KB ×NaN"
UI3-OLCUM         Osmanlı kırılması    0  →  gerçek 616
```
⇒ **HER MAKİNEDE 29 Eylül'den beri süren SESSİZ YANLIŞ.**
🔴 B, A'dan kötüdür: desen bir zaman **DOĞRUYDU**, o yüzden kimse ona geri dönüp bakmaz. Ve
bir hafta boyunca makul sayılar üretir.

## Çare — üç madde, biri yapısal
1. **Saymadan önce iki üç kaydı GÖZLE OKU.** Biçimi gör, sonra say. Desen varsayımını
   VERİYE doğrula (`OLCUM-KITA-SARTLARI.md §9`).
2. **Bir sayı hipotezini DOĞRULUYORSA bir kez daha bak.** Rahatlatan sıfır, en az
   şaşırtan sayı kadar ölçüm ister.
3. 🔴 **YAPISAL ÇARE: ADLA SÜZME YASAK.** Yükleme tek yerden okunur
   (`arac/girdi.py GIRDI_DOSYALARI` · `acikListe`). Bir tüketici dosya adını kendi
   düzenli ifadesiyle süzüyorsa, o dosyanın adı değiştiği gün sessizce boşalır.
   Vaka ikizdir: 29 Eylül'de **paketleme VE kodlama aynı sınıfı iki kez üretti**
   (`PAKET-YUKLEYICI` + `SESSIZ-SIFIR`) — tek kökün iki yüzü.

## Bağlı dersler
[[D219]] hangi dosyanın canlı olduğu yalnız `GIRDI_DOSYALARI`dan okunur (bu dersin GİRDİ
yüzü; D267 TÜKETİCİ yüzü) · [[D265]] ölçülüp basılmayan sayı ölçülmemiştir · [[D199]] §1.5
elle yazılmaz, üretilir.

## Sınav
`denetim/SESSIZ-SIFIR-TARA-1006.py` (UMIT-W32b) — boş ağaçta çıkış kodu 45 betikte değişti,
45'i amaçlanan; **T1 yanlış pozitif 0/38**.
⚠️ Taramanın kendisi izlenen dosyalara YAZIYOR ⇒ yalnız atılabilir worktree'de koşar,
**asla `C:\atlas`ta**.
