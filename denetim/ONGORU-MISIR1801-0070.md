# ÖNGÖRÜ — `data/olaylar_misir1801.js` yazılmadan ÖNCE (20 Eylül 2026)

Oturum SEFER-OK-0070 · koordinatör hükmü M-4735 ("öngörünü ÖNCE yaz, sonra ölç").
Sınav anı: iki madde yazıldıktan sonra `py arac/denetle.py` (tam koşu, aynı evren).
Evren: `denetle.py`nin `olaylar*.js` glob'u — yeni dosya `index.html`e bağlanmadan da
okunur (D099: bağlı olmak ≠ okunuyor olmak; burada ters yönü: okunuyor ≠ ekranda).

## Ölçülecek değerler ve beklentim

| Ölçüt | Yama sonrası (bugünkü) | ÖNGÖRÜM | Gerekçe |
|---|---|---|---|
| Değişmez 2i açık | **3** (tavan 3) | **1** | 1801-06-27 (Kahire+Süveyş) ve 1801-08-31 (İskenderiye) kırılmalarının ±30 gün içine maddesi girecek; geriye 1878-09-18 (Bihaç, Ostrovica) kalır |
| Değişmez 2i kırılma | 130 | **130** | madde eklemek kırılma üretmez; kırılma `isg:` uçlarından doğar |
| Değişmez 2 | 587 kırılma, 0 açık | **aynı** | `d:`/`v:` kategorilerine dokunulmuyor |
| Değişmez 2s | 1418 kırılma, 183 açık (tavan 195) | **aynı** | `s:` kategorilerine dokunulmuyor |
| Değişmez 2t (kırılmasız madde) | 1 (tavan 42) | **1** | iki maddenin de aynı gün bir `isg:` kırılması VAR; 2t'ye katılmamalı |
| Değişmez 1 | 3921 yerleşim, 299 sahipsiz | **aynı** | yerleşim eklenmiyor |
| Genel sonuç | temiz | **temiz** | — |

## SONUÇ — ölçüm (öngörü yazıldıktan SONRA koşturuldu)

| Ölçüt | Öngörüm | Ölçülen | Tuttu mu |
|---|---|---|---|
| Değişmez 2i açık | 1 | **1** (kalan: 1878-09-18 Bihaç, Ostrovica) | ✓ |
| Değişmez 2i kırılma | 130 | **130** | ✓ |
| Değişmez 2 | 587 / 0 | **587 / 0** | ✓ |
| Değişmez 2s açık | aynı (183) | **180** | ✗ — 3 AZALDI |
| Değişmez 2t | 1 | **1** | ✓ |
| Değişmez 1 | 3921 / 299 | **3921 / 299** | ✓ |
| Genel sonuç | temiz | **temiz** (ara adımda bir ihlal doğdu, aşağıda) | kısmen |

🔴 **Öngörünün tutmadığı yer — 2s:** 183 → 180. İki madde `s:` kategorisine
dokunmuyor, dolayısıyla "aynı kalır" demiştim. Azalmanın sebebi 2s'nin YER/TARAF
şartlı eşleştiricisinin yeni maddeleri de aday havuzuna alması: Mısır 1801
maddeleri, yakın günlerdeki bazı yabancı kırılmalar için "alâkalı madde" ölçütünü
karşılamış. Yani öngörüm yanlıştı ama yön iyiydi; **tavan 195, ölçülen 180.**
📌 Ders: "o kategoriye dokunmuyorum" demek "o sayı değişmez" demek değildir —
madde havuzu bütün senkron ölçütlerinin ORTAK girdisidir.

🔴 **Ara adımda bir ihlal doğdu ve kapatıldı:** maddeler inince `Ek denetim —
mükerrer madde` **1 şüpheli çift** verdi (SONUÇ: İHLAL VAR, çıkış kodu 1). Çift,
benim iki maddemdi: aynı yıl + ortak başlık kalıbı. Denetimin kendi talimatı
uygulandı ("gerçekten ayrı olaylarsa `BILINEN_AYRI` kümesine ekle"): çift,
gerekçesiyle `arac/denetle.py`ye yazıldı — iki ayrı şehir, iki ay ara, iki ayrı
kumandan, **veride iki ayrı `isg:` kırılması**. Sonra: 0 şüpheli çift, SONUÇ temiz.
⚠️ Başlıkları "benzemesin diye" değiştirmek çözüm sayılmadı: o, denetimi metinle
atlatmak olurdu.

## Tuzaklar — öngörü tutmazsa ilk bakılacak yerler

1. **2t artarsa** (1 → 3): maddelerim kırılmasız sayılmış demektir; sebebi
   `kirilmasiz_madde()`nin hangi kategorileri saydığıdır, madde metni değil.
2. **2i 1'e inmezse:** ±30 gün penceresi tutmuştur ama eşleştirici başka bir
   maddeyi seçmiş olabilir (beraberlik bozucu). O hâlde açık satırının "en yakın
   Ng" değeri 0'a inmiş ama açık listeden çıkmamış olur — çıktıyı satır satır
   okurum, sayıya değil.
3. **Mükerrer madde ölçütü uyarırsa:** 1801-10-09'daki "Mısır'ın Fransızlardan
   tahliyesi" maddesi zaten *"önce Kahire, ardından İskenderiye teslim alındı"*
   diyor. Yeni maddeler onu TANECİKLEŞTİRİYOR (ayrı günler, ayrı şehirler), ama
   ÖNEK/ZAYIF ölçütünde gözden geçirme listesine düşebilirler — bu ihlal değildir,
   yine de teslimde bildirilecek.
4. **`yer_id` havuzda yoksa** madde kırılmayı kapatmayabilir: iki `yer_id`
   (Kahire · İskenderiye) yerleşim havuzunda VAR (ölçüldü — ikisi de
   `data/yerlesimler.js`te işgal kaydı taşıyan kayıtlar).

## Yazılacak maddelerin kaynağı (ölçümden bağımsız, önce sabitleniyor)

TDV'de karşılık **BULUNAMADI** ve bu ölçüldü: `misir` maddesinin gövdesinde
**1801 yılı geçmiyor**; `kahire` ve `iskenderiye` maddeleri bu iki teslime gün
vermiyor. §4 gereği akademik kaynak kullanılacak ve `kaynak:` alanına AÇIKÇA
yazılacak: Fondation Napoléon, *Correspondance générale de Napoléon Bonaparte*,
tome 3 — *Pacifications, 1800-1802* kronolojisi (Fayard 2009 cildinin kronolojisi,
napoleon.org). Gövdeden okunan satırlar:

* **27 juin (8 messidor):** « Le général Belliard signe la capitulation des troupes françaises en Égypte. »
* **17 août (29 thermidor):** « Menou est assiégé à Alexandrie. »
* **21 août (3 fructidor):** « Les Anglais prennent le fort du Marabout, près d'Alexandrie. »
* **31 août (13 fructidor):** « À Alexandrie, Menou signe la capitulation de l'armée d'Orient. »
* **2 septembre (15 fructidor):** « Début du rapatriement en France de l'armée d'Orient. »
