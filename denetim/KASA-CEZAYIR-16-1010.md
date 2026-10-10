# KASA-CEZAYIR-16-1010 — doğu Cezayir'in 16 noktası: şehir adlı tanık (seçenek 3b)

Görev: YILDIRIM BAYEZIT (BOSLUK-CIZIM kararı: 3b) · Araştırmacı: KASA · `data/` DONUK.
Noktalar (atlas `zeyyani 1281-1519/1552`, kaynaksız): Setif · Biskra · Tuggurt · Kolo · Sikikde · Mîle · Kalme ·
Sûk Ahrâs · Tebesse · Batna · Berc Bû Areric · Mesîle · Akbû (Benî Abbâs) · el-Vâdî (Sûf) · Hanşele · Aynı Beydâ.
Yöntem:
- Her şehir için TDV maddesi aranır (ajax), yoksa akademik. 1281-1574 arası sahibi ADIYLA veren cümle (Y/Ş).
- Bulunanlar → `hafsi` (ya da tanığın verdiği sahip) + kaynak.
- Bulunmayanlar → `__BOSLUK__` (K) (karar: `kesinlik:"bolge"` görünmüyor ⇒ seçenek 1).

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
- TDV'de müstakil maddesi olan: **8 ± 4** (tarihî şehirler: Setif, Biskra, Mîle, Tebesse, Mesîle, Tuggurt, Kalme …;
  modern idarî merkezler Batna, Aynı Beydâ, Hanşele, Berc Bû Areric muhtemelen yok).
- Maddesi olanlardan 1281-1519 sahibini ADIYLA veren: **%50 ± 25** ⇒ **4 ± 3** nokta Y/Ş alır.
- Verilen sahip çoğunlukla **Hafsî** (%75); en az birinde yerel hânedan (Biskra: Benî Müznî; Tuggurt: Benî Cellâb)
  ya da Merînî ara dönemi (%60).
- `__BOSLUK__`'a giden: **12 ± 3**.
- Zeyyânî iddiasını DOĞRULAYAN şehir: **0-1** (Mesîle/Berc Bû Areric batı ucunda ihtimal).

## 1. ÖLÇÜM

**Kaynaklar:**
- TDV: 16'dan YALNIZ `mesile`'nin müstakil maddesi var. Setif, Biskra, Tuggurt, Kolo, Sikikde, Mîle, Kalme, Sûk Ahrâs,
  Tebesse, Batna, Mesîle dışı Hodna, Benî Abbâs, Sûf, Hanşele için ajax araması boş.
- Akademik (birincil, şehir taneciğinde TDV kapsamı yok): **R. Brunschvig, *La Berbérie orientale sous les Hafsides,
  des origines à la fin du XVe siècle*, t. I (Paris 1940)**; archive.org `fr101algeria63`, 1,4 MB OCR.
| nokta | tanık (birebir) | sınıf | öneri |
|---|---|---|---|
| **Biskra** | Brunschvig: "En 691 ou 692 / 1292-93, al-Manṣūr … se rendit à Bougie, reconnut la souveraineté d'Abū Zakariyā' et … marcha sur Biskra, chef-lieu du Zāb. … la province … fut annexée par Abū Zakariyā', qui y mit un gouverneur militaire de son choix, tandis que l'administration financière seule en incombait à al-Manṣūr b. Muznī" | **Y — Hafsî** (Bicâye kolu); Benî Müznî Hafsî adına ⇒ `ic_not` | `hafsi` (691/1292 ∩ … yıl) |
| **Mîle** | "Parvenu à Mila … regagner Tunis, où il arriva en ramadān 695 / juillet 1296" (Hafsî sultanının seferi) · "fidèle à son maître de Tunis … le rejeta même au delà de Mila … 712/1312" · "En 758-9/1357-8, il guerroya contre les troupes marinides dans le Constantinois, après avoir pris et occupé pendant quelque temps Mila" | **Y — Hafsî**, Merînî ara (1357-58) | `hafsi` + Merînî ara dilimi (kaynak cümlesiyle) |
| **Kolo (Collo)** | "descente de Pierre d'Aragon à Collo (1282) … Le gouvernement tunisien, qui gardait à son encontre une attitude de défiance … depuis sa descente à Collo" | **Ş — Hafsî kıyısı** | `hafsi` (Ş) |
| **Tuggurt** | "Le territoire d'allégeance hafside se prolongeait encore … vers le sud … Il englobait en effet le sillon de l'O. Righ, avec Touggourt (Tuqqurt) comme capitale … Touggourt, gouvernée par la famille des B. Yūsuf b. 'Ubaidallāh, fut pillée par le général hafside Ibn al-Ḥakīm vers 1340" · "à Touggourt, qu'il punit de sa désobéissance … (début 870 / automne 1465)" | **Ş — Hafsî tâbiyeti, yerel Benî Yûsuf ailesi** (künye YOK) | `hafsi` (allégeance) + yerel aile `ic_not` |
| Mesîle | TDV `mesile`: "Abdülvâdîler ile Hafsîler hânedanı arasındaki mücadeleden olumsuz yönde etkilenen Mesîle bir müddet de bölgeye hâkim olan Dâvûdî ailesinin idaresine geçti" · Brunschvig: "Sous les Hafsides, Msila, à la limite de leur empire … la victime de leur lutte" + Abū Ḥammū (Tilimsan) "s'avança jusqu'à Msila … septembre 1370" | **KARIŞIK** (San'a deseni) | `__BOSLUK__` (K); Osmanlı "Hasan Paşa'nın ikinci valiliği" (yılsız) |
| Tebesse | Brunschvig: "l'indépendance des cités vis-à-vis de l'Etat hafside fut encore … plus marquée : Tébessa obéissait à un cheikh, Muḥammad b. 'Abdūn" (dönem bu turda tarihlenmedi) | yerel bağımsız şeyh — Zeyyânî DEĞİL | `__BOSLUK__` (K) |
| Setif · Kalme · Sûk Ahrâs · Sikikde · Berc Bû Areric · Akbû · el-Vâdî · Hanşele · Aynı Beydâ · Batna (10) | şehir adlı 1281-1519 sahiplik cümlesi YOK. Brunschvig'in bölge cümlesi (Biskra'daki Müznî'ye "autorité sur tout le Sud-Constantinois, y compris le Hodna, l'Aurès, l'O. Righ et Ouargla") **S** ⇒ D208 gereği taşınmaz | ölçülemedi | `__BOSLUK__` (K) |
**Yan bulgu — Cicel** (16'nın dışında): Brunschvig "les privilèges des Génois à Djidjelli, mentionnés dans le traité
Aragon-Bougie de 1309" ⇒ Cicel 1309'da Hafsî Bicâye emirliğinin antlaşma toprağı (Y) ⇒ `zeyyani 1281-1513` yerine
`hafsi` → Oruç 1513.
**Yan bulgu — VARLIK (§9.7):** Batna, Aynı Beydâ, Berc Bû Areric, Sikikde (Philippeville) modern idarî merkez
görünümlü. Atlas onları 1281'den sahnede tutuyor. Brunschvig Skikda'yı "l'antique Rusicade, dont le nom était devenu
Skikda" diye antik/ortaçağ adıyla anıyor; öteki üçü için 1281 iskân tanığı YOK ⇒ `kur:` sorusu (Hudeyde deseni).
Bu turda ÖLÇÜLMEDİ.

### 1.1 Sayılar ve öngörü
```
16 nokta → Hafsî (Y/Ş) 4 (Biskra · Mîle · Kolo · Tuggurt) · __BOSLUK__ (K) 12 (Mesîle karışık · Tebesse yerel · 10 tanıksız)
Zeyyânî iddiasını doğrulayan şehir 0 (Mesîle'de Zeyyânî yalnız çekişme tarafı)
ek: Cicel hafsi (Y 1309)

öngörü                                   ölçüm
TDV maddesi 8 ± 4                         1 ✗ (yalnız Mesîle) — tanık akademikten geldi
Y/Ş alan 4 ± 3                            4 ✓
verilen sahip çoğunlukla Hafsî %75        4/4 ✓
yerel hânedan ya da Merînî ara %60        ✓ (Benî Müznî, Benî Yûsuf, Merînî Mîle 1357-58, Tebesse şeyhi)
__BOSLUK__ 12 ± 3                         12 ✓
Zeyyânî doğrulayan 0-1                    0 ✓
```

## 2. TESALYA (b) — Angelos Philanthropenos: bağımsız mı, Bizans ataması mı? (Nicol)
Nicol, *Despotate of Epiros* (1984): "His place in Thessaly was taken not by a Serbian but by a Greek, Alexios
Angelos Philanthropenos … Alexios held the Byzantine title of Caesar … there can be no doubt that Alexios was made
Caesar by a Byzantine emperor. **For in 1382 he recognised Manuel II in Thessalonica as his overlord.**"
- Nicol bir ATAMA demiyor (Alexios, John Uroš'un yerine geçiyor; Bizans tarafından gönderilmiyor).
- Nicol bir BAĞIMSIZLIK cümlesi de kurmuyor. Bizans unvanının kanıtı olarak 1382 tâbiyetini gösteriyor, yani
  unvanın 1382'de verilmiş olması da mümkün.
- 1382 tâbiyeti açık ve yıllı (Y).
⇒ **1372/73-1382: ÖLÇÜLEMEDİ** (ne bağımsızlık ne atama cümlesi var). **1382-1393: `v:bizans`** (tâbiyet ≠ ilhak). `d:`
için yerel yönetici künyesi gerekir. Karine bağımsızlık lehine ama karine ölçüm değil.
⇒ Senin kuralınla: `tesalya-angelos` **AÇILMAZ**; 1372/73-1393/94 `__BOSLUK__` (N). 1382'den itibaren `v:bizans`
yazılabilir (kaynak: Nicol). İkinci akademik kaynak (Fine 1987/1994, archive.org `medievalbalkans`) bu turda
taranmadı. Ararsam bağımsızlık sorusu kapanabilir.

## 3. ③ İSTİYORUM
a) Hafsî: Biskra (Y, 1292/93) · Mîle (Y, Merînî 1357-58 ara) · Kolo (Ş) · Tuggurt (Ş, yerel aile `ic_not`) ·
   Cicel (Y 1309, → Oruç 1513).
b) `__BOSLUK__` (K): 12 nokta (Mesîle · Tebesse · 10 tanıksız).
c) Batna / Aynı Beydâ / Berc Bû Areric `kur:` (varlık) sorusu ayrı kalem.
d) Tesalya 1372/73-1382: Fine'ı tarayayım mı, yoksa `__BOSLUK__` (N) ile kapansın mı?
