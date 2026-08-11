# VERİ UFAK DÜZELTME — ilerleme

## KALEM 1 — Cezayir hayaleti — ÖLÇÜLDÜ, UYGULANMADI (görev gereği)

### Ölçülen 6 nokta (görevde tarif edilen küme — "Sahra vahalarının özerk idaresi" etiketi)

| ad | dosya:satır | v: son parça | s: (fransa) başlangıcı | fazla |
|---|---|---|---|---|
| Ağvât | data/yerlesimler_afrika.js:622-624 | 1830-07-05 → 1852-12-04 | 1852-12-04 | 22 yıl 5 ay |
| Gardâye | data/yerlesimler_afrika.js:626-628 | 1830-07-05 → 1852-12-04 | 1852-12-04 | 22 yıl 5 ay (⚠️ altta ayrı not) |
| Cilfe (Djelfa) | data/yerlesimler_h2_kuzeyafrika.js:216-221 | 1830-07-05 → 1852-12-04 | 1852-12-04 | 22 yıl 5 ay |
| Vargla (Ouargla) | data/yerlesimler_h2_kuzeyafrika.js:227-232 | 1830-07-05 → 1854-11-23 | 1854-11-23 | 24 yıl 4 ay |
| el-Vâdî (Sûf) | data/yerlesimler_h2_kuzeyafrika.js:236-241 | 1830-07-05 → 1854-12-02 | 1854-12-02 | 24 yıl 5 ay |
| Tuggurt | data/yerlesimler.js:1198 | 1830-07-05 → 1854-12-02 | 1854-12-02 | 24 yıl 5 ay |

Altısının altısı da `v:` dizisinde ikinci parça taşıyor:
`{f:"1830-07-05", t:"<fetih>", k:"Sahra vahalarının özerk idaresi"}`.
`v:` alanı haritada Osmanlı tâbi rengiyle boyanıyor.

### TEŞHİS

`devletler.js:1121` — `cezayir-ocagi` kaydının kendisi `t:"1830-07-05"` ile
bitiyor (Fransız işgaliyle son buluyor). Yani bu altı noktanın "tâbi
olduğu" Osmanlı siyasi varlığı 1830-07-05'te ortadan kalkmış durumda.

Buna rağmen altı nokta da 1830-07-05'ten fetih gününe kadar (22-24 yıl)
`v:` (Osmanlı tâbi) içinde kalmaya devam ediyor — ve etiketin kendisi
("**özerk** idaresi") zaten Osmanlı'ya tâbi olmadığını söylüyor. Yani
veri kendi içinde çelişiyor: metin "artık Osmanlı değil" diyor, alan
"Osmanlı tâbisi" diyor.

### İKİ UÇ ÖLÇÜLDÜ (CLAUDE.md §3.5.1)

- **Fransa tarafı temiz.** `s:` (fransa-cumhuriyet) dönemleri her nokta
  için gerçek fetih tarihinde başlıyor (Ağvât/Gardâye/Cilfe 1852-12-04,
  Vargla 1854-11-23, Sûf/Tuggurt 1854-12-02) — bunlar önceki bir oturum
  tarafından tek tek kaynaklanmış (dosya içi yorumlar mevcut). Fransa
  tarafında fazlalık YOK.
- **Osmanlı tarafı fazla.** Fazlalık yalnız `v:`'nin 1830-07-05'te
  bitmesi gerekirken uzatılmış olmasından geliyor.

### 🔴 UYGULANAMAZ TESPİTİ — düz kısaltma Değişmez 1b'yi bozar

`v:`'yi 1830-07-05'te kesip boş bırakmak (fetih gününe kadar hiçbir
d:/v:/s: yazmamak) her nokta için 22-24 yıllık bir İÇ BOŞLUK açar.
`arac/denetle.py`'yi okudum (satır 645-671): Değişmez 1/1b yalnız
`kur:` ve `bit:` alanlarını sınır kabul ediyor; `kasitli_bosluk:` alanı
kodda HİÇ okunmuyor — yalnız yorum satırlarında insan için açıklama.
(`kasitli_bosluk` ayrıca yalnız `kur:` ÖNCESİ boşluklar için tasarlanmış,
bir kaydın ortasındaki boşluk için değil.) ⇒ Düz kısaltma **Değişmez
1b'yi 6 yeni ihlalle bozar** — bugünkü tablo "iç boşluk: 0" diyor.

### ÖNERİ (uygulamadım, karar koordinatörün)

Boşluğu kapatacak üçüncü bir kimlik gerekiyor — CLAUDE.md'nin kendi
emsali `abdulkadir` kaydı (Osmanlı da değil, henüz Fransa da değil bir
ara dönem için AYRI devlet kaydı açılmıştı). Bu altı nokta için de
benzer bir "Sahra vahaları özerk idaresi" devlet kaydı (devletler.js'e)
+ altı noktanın `s:` dizisine 1830-07-05→fetih parçası eklenmesi en
temiz çözüm. Bunu ben açmadım çünkü (a) TDV/akademik kaynakla
doğrulanmış yeni bir künye gerektiriyor — bu KALEM 1'in "ölç, uygulama"
sınırının ötesinde, (b) `yerlesimler*.js` benim yazamayacağım dosyalar.

### 🔴 EK BULGU — AYNI KÖK HATA, GÖREVDEKİ 6'DAN FAZLA (bekletmeden bildiriyorum)

Aynı taramada `v:`'nin 1830-07-05'ten sonra devam ettiği başka etiketler
de bulundu — ikisi de kendi metninde Osmanlı'ya tâbi OLMADIĞINI söylüyor
ama yine `v:` (Osmanlı tâbi) içinde kodlanmış:

```
"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"   11 nokta   1830-07-05 → 1832-11-22
"Kabiliye'nin fiilî özerkliği"                        2 nokta   1830-07-05 → 1857-07-11
```
İlkinin metni zaten "ocaklık lağvedildi" (ocaklık kaldırıldı) diyor —
yani yazan kişi de bunun gerçek değil bir İDDİA olduğunu biliyordu.
İkincisi "fiilî özerklik" (gerçekte özerk) diyor. İkisi de görevdeki
"Sahra vahaları" grubuyla BİREBİR aynı mantık hatasını taşıyor.

⇒ **Toplam etkilenen nokta 6 değil, 6+11+2 = 19.**

Ayrıca "Ahmed Bey'in Konstantin beyliği (Osmanlı adına)" etiketli 16
nokta VAR ama bunlar muhtemelen FARKLI/savunulabilir — "Osmanlı adına"
ifadesi gerçek bir nominal bağlılığı işaret ediyor (CLAUDE.md'nin kabul
ettiği voyvodalık/tâbi tipi istisnalarla aynı sınıf olabilir). Bunu
derinlemesine araştırmadım, yalnız gözlemledim; ayrı bir soru.

**Karar koordinatörün:** KALEM 1'i görevde tarif edilen 6 noktayla mı
sınırlı tutayım, yoksa 19 noktalık tam kümeyi mi ölçüp raporlayayım?
Şu ana kadarki ölçüm 19'un tamamını kapsıyor (etiket + tarih), yalnız
"öneri" bölümünü 6'ya yazdım.

---

## KALEM 2 — devam ediyor
## KALEM 3 — sırada
