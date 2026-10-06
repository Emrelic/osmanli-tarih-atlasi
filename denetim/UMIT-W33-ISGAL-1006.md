# UMIT-W33-ISGAL-1006: YERKORU'nun 28 borç satırı için 11 kaynaklı kronoloji maddesi (YALNIZ DIFF)

**Temel commit:** `481b0482`. Yama: `denetim/UMIT-W33-ISGAL-1006.diff`. Tek dosyaya dokunuyor: `data/olaylar_ok109.js`
(+110 satır, 11 madde; dosyadaki madde sayısı 13 → 24). `git apply --check` temiz: `481b0482` ve güncel
`origin/main` `7a65122b`. Uygulanmadı, commit yok.

## 0. Sayım: 28 borç SATIRI üç kovaya nasıl dağılıyor (birimiyle)
UMIT'in "11 / 5 / 12" bölüşü farklı birimleri karıştırıyordu (madde, kırılma, satır). Yer başına ölçüm:

| kova | satır | kırılma | madde | işlem |
|---|---|---|---|---|
| ① tesadüfi kapanış | **13 satır** | 12 kırılma | **11 YENİ madde** | bu yama |
| ② kapsayan madde (yer_id kamerayı çeker) | **15 satır** | 15 kırılma | 5 MEVCUT madde | beyanlı borç, aşağıda adıyla |
| ③ kalan | **0 satır** | 0 | — | 28 − 13 − 15 = 0 |

## 1. ① Yeni 11 madde (hepsi o yeri `yer_id` ile anar = K1)
| t | yer_id | olay | dayanak (bu oturumda OKUNDU) |
|---|---|---|---|
| 1918-11-14 | Peçuy | Sırp işgali başladı | Macar Millî Arşivi, Baranya (mnl.gov.hu) |
| 1918-11-22 | Lvov | Polonya kuvvetleri Lviv'i aldı (gece 21/22) | Internet Encyclopedia of Ukraine (CIUS) |
| 1918-12-01 `kesinlik:"ay"` | Brassó (Braşov) | Romen ordusu girdi, karşılandı | Adevărul (gazete) — §3 |
| 1918-12-19 | Knin | İtalyan işgali | Knin şehrinin resmî tarihi (Paić 1998) |
| 1918-12-29 | Kassa (Košice) | Çekoslovak 30. Alay | Kárpáty (Východoslovenské múzeum) söyleşisi |
| 1919-04-20 | Varad (Oradea) + başlıkta Szatmár | Romen girişi 19/20 Nisan | Satu Mare İl Müzesi · Oradea Belediyesi |
| 1919-08-03 | Temeşvar | Romen idaresi | Ziua de Vest (gazete; HCL 217/1999 anma günü) |
| 1919-08-12 | Murska Sobota + `yer`de Lendava | SHS Prekmurje'de | Banac 1984 (KARDEŞTEN) · gün: Kosi 2020 (OKUNMADI) |
| 1921-04-04 | Knin | İtalyan tahliyesi | Knin resmî tarihi |
| 1921-06-12 | Şibenik (Sebenico) | İtalya teslim etti | Grad Šibenik + Renje tezi — §2 |
| 1921-08-22 | Peçuy | Sırp işgali sona erdi | Macar Millî Arşivi, Baranya |

Atlas kaydı (`isg:` alanı) DAYANAK olarak kullanılmadı (§4); yalnız hangi kaynağın aranacağını gösterdi. Kaynak
niteliği gizlenmedi: iki gazete, bir müze söyleşisi ve bir okunmamış gün alıntısı `kaynak`ta "nitelik notu" ile yazılı.

## 2. ŞİBENİK — UMIT'in üç adımı sırayla
- **① Tezin KENDİ kaynağı:** s. 40'taki *"Ceremonija vojnih predstavnika Italije i Kraljevine SHS obavljena je 12. lipnja
  1921."* cümlesinin dipnotu 199 "Isto". Bu, dipnot 198'e işaret ediyor: **Novo doba (Split), 13. VI 1921.** Kısaltma
  tezin dipnot 78'inde açılıyor ("Novo doba (dalje: ND)"). Gazete çevrimiçi **OKUNAMADI**: Split Üniversite
  Kütüphanesi dijital koleksiyonuna HTTPS bağlantısı reddedildi, HTTP sayfası doğrudan bağlantı vermiyor.
- **② Tezin derecesi ve deposu:** "Diploma Thesis / diplomski rad", FFZG Odsjek za povijest, 2017, mentor G. Hutinec.
  Kurumsal depo `darhiv.ffzg.unizg.hr/id/eprint/8718`. Diplomski rad Bologna 2. kademedir (YL düzeyi), ama depo
  kaydında **jüri ya da savunma bilgisi YOK** ⇒ savunma DOĞRULANAMADI ⇒ tez **TEK DAYANAK OLAMAZ**, yalnız köprü.
- **③'e inilmedi:** gün ikinci, kurumsal bir tanıkla kuruldu. Grad Šibenik'in resmî sayfası:
  *"Dana 12. lipnja 1921. na osnovi Rapalskog ugovora, Talijani napuštaju Šibenik, a 13. lipnja Šibenčani dočekuju
  jugoslavensku vojsku."* İki tanık aynı günü veriyor. Kullanılan yol `kaynak` alanında yazılı.

## 3. BRASSÓ — okuma (seçim değil)
Kaynaktaki iki cümle:
- (A) *"…ceremonialul primirii armatei române în Braşov, avându-l în frunte pe generalul Berthelot în 24 noiembrie - 7
  decembrie 1918."* "24 Kasım – 7 Aralık" iki gün değil, TEK günün Jülyen/Gregoryen çift yazımı (13 gün fark).
- (B) *"…manifestările prilejuite de intrarea triumfală a Armatei Române în Braşov pe 10 decembrie 1918."*

**Aynı olay mı?** (A) "Romen ordusunun Brașov'da karşılanma töreni", (B) "Romen ordusunun Brașov'a zafer girişinin
kutlamaları". İkisi de ordunun şehre gelişini tarihliyor ve metin ayrı bir ikinci giriş anlatmıyor ⇒ aynı olaya iki gün
(7 ve 10 Aralık). Ayrı olay olduklarını gösteren bağımsız kaynak **BULUNAMADI**: Brașov kurumları ve bir akademik makale
arandı; arama sonuçlarındaki yerel portal kırmızı çizgide. ⇒ **D213: AY düzeyi**, `t:"1918-12-01"` + `kesinlik:"ay"`.
Gerekçe iki alıntıyla `ic_not_d`de. Madde ±30 gün içinde 1918-12-07 kırılmasını yine K1 ile kapatıyor.
⚠️ Yerleşim kaydının `isg:` günü 1918-12-07 (A'yı seçmiş). Bu çelişki o kayıtta duruyor; koordinatörün işi, yazılmadı.

## 4. PREKMURJE — kardeş madde
`ic_not_d`: **ASIL MADDE** `data/kronoloji_cok_sirbistan.js` · 1919-08-12 · *"SHS ordusu Prekmurje'ye girdi — Mura
ötesi Yugoslavya'ya katıldı"* (yer_id Murska Sobota; Banac 1984). Yeni madde onun Değişmez 2 evrenindeki kardeşi:
**YENİ KAPSAM DEĞİL.** Asıl madde bu kırılmayı karşılamak için yazılmıştı ama dosyası KUYRUK'ta olduğu için kapı görmüyordu.
Mükerrer kapısı ÖTMEDİ: `Ek denetim ✓ mükerrer madde: 112 şüpheli çift (beklenen ≤113)`. Kardeşler farklı evrenlerde.

## 5. ÖNCE / SONRA (temel 481b0482)
| ölçüm | ÖNCE | SONRA |
|---|---|---|
| `denetle.py` çıkış | 2 (yalnız D8 ÖLÇÜLEMEDİ, ORTAM: taze ağaçta `devletler_harita.js` yok) | 2 (aynı sebep) |
| Değişmez 2 | ✓ 623 kırılma, 0 açık | ✓ 623, 0 açık |
| Değişmez 2i | ✓ 171, 1 açık | ✓ 171, 1 açık |
| Değişmez 2t | ✓ 13 | ✓ 13 |
| Değişmez 2s AÇIK | 187 | **186** ⚠️ SAHTE iyileşme, §6 |
| Değişmez 2sk | 🧊 3236 = YER 1571 + TARAF 1665 (tavan 1665) · maske 1646 birim | ⚠️ **3343 = YER 1599 + TARAF 1744 > tavan 1665** · maske 1543 birim |
| mükerrer (ek denetim) | ✓ ≤113 | ✓ 112 (ötmedi) |
| kronoloji maddesi (denetle evreni) | 2187 | 2198 (+11) |
| YERKORU 2i | eşli 119 · kör 51 · açık 1 | **eşli 131 · kör 39** · açık 1 |
| YERKORU yeni satır (eski anahtar) | 19 grup | **7 grup** = yalnız ② kovası + 1913 anahtar kusuru |
| odak (`odak_olc.py`) | çıkış 0 · ok109 KONUMLU 5 | çıkış 0 · ok109 KONUMLU 16 · ODAKSIZ 0 |

## 6. 🔴 YAN ETKİ — Lvov maddesi bir TESADÜFİ kapanış üretiyor
2s'de **1918-11-11 kovası** (Polonya'nın doğuşu: Częstochowa, Gdansk, Varşova…; 2sk'nın bilinen "Gdansk maskesi") AÇIK'tan
KAPALI'ya geçti. 2sk'daki sıçrama (maske −103 birim, YER +28, TARAF +79) tamamen bu.
`denetle`nin KENDİ işlevleriyle (`_2s_yeri_aniyor` / `_2s_tarafi_aniyor`) ölçüldü: Częstochowa, Gdansk ve Varşova'yı
±30 gün içinde kapatan TEK madde **1918-11-22 "Polonya kuvvetleri Lviv'i (Lvov) ele geçirdi"**, ve yalnız TARAF
koluyla (yeni sahip `polonya`, başlıkta "Polonya" geçiyor). Lviv olayı Varşova'nın bağımsızlığını anlatmıyor.
⇒ UMIT'in uyardığı sınıf: **tesadüfi kapanışı elle üretmek.** 187 → 186 bir iyileşme değil; 2sk tavan aşımı bunun gölgesi.
**Öneri (karar koordinatörün):**
- (a) **Önerilen:** aynı commit'te kaynaklı bir **1918-11-11 "Polonya'nın bağımsızlığı — Piłsudski Varşova'da
  yetkiyi aldı"** maddesi (yer_id Varşova; Gdansk/Częstochowa adıyla). Kova o zaman YER koluyla, doğru maddeyle kapanır;
  Lvov maddesi zararsız kalır. Bu yamaya koymadım: kapsam dışı ve kaynak okuması gerekiyor. İstenirse yazarım.
- (b) Lvov maddesini (a) yazılana kadar beklet; geri kalan 10 madde tek başına iner. 2s ve 2sk ÖNCE değerlerine döner,
  YERKORU'da Lvov 1918-11-22 satırı borç kalır.
- 2sk tavanı (1665) bu yamayla YÜKSELTİLMEMELİ: artış sahte kapanıştan geliyor (§3.4-1).

## 7. ② BEYANLI BORÇ — 15 satır / 5 madde, yer_id yazılmaz (adıyla)
| kırılma (satır) | kapsayan madde (mevcut) | niçin yer_id yok |
|---|---|---|
| 1878-07-13 kayıp · Sofya | Berlin Antlaşması (yer_id Berlin) | odak Berlin |
| 1918-11-04 kazanç · Zadar (Zara) | Villa Giusti Mütarekesi (yer_id Padova) | odak Padova |
| 1918-11-06 kazanç · Şibenik (Sebenico) | Villa Giusti Mütarekesi | odak Padova |
| 1920-06-04 kayıp · Brassó, Eisenstadt, Erdel, Kassa, Lendava, Murska Sobota, Szatmár, Temeşvar, Varad, Zagreb (10) | Trianon Antlaşması (gövdede anıyor, K3) | tek madde 10 yer; odak Trianon/Budapeşte |
| 1920-11-12 kayıp · Zadar (Zara) | Rapallo Antlaşması (gövdede, K3) | odak Rapallo |
| 1923-03-15 kayıp · Lvov | Büyükelçiler Konferansı | odak yok, Doğu Galiçya kararı |
Toplam 1 + 2 + 10 + 1 + 1 = **15 satır.** Bu satırlar YERKORU defterine koordinatör yazarsa beyanlı borç olur (§3.4-4).

## 8. Bulamadım / ölçmedim
- Novo doba 13. VI 1921 (Şibenik'in birincil kaynağı): erişilemedi.
- Brașov için 7 / 10 Aralık'ı ayıran bağımsız kaynak: bulunamadı.
- Prekmurje günü (Kosi 2020, Zawistowska): okunmadı; kaynakta "OKUNMADI" diye yazılı.
- Temeşvar'ın 1918-11-14 → 1919-08-03 Sırp/Fransız işgali haritada YOK (kaynak açıkça yazıyor). Yerleşim kaydı
  koordinatörün işi; maddenin `ic_not_d`sinde beyanlı.
- `denetle_yayin.py` koşturulmadı. Odak kapısının kendi ölçüsü (`odak_olc.py`) temiz.

## 9. git status
- `C:\atlas-w33` (temel 481b0482) kaldırılmadan önce `--porcelain`: yalnız ` M data/olaylar_ok109.js`. `C:\atlas-w33b`
  (apply-check ağacı) boştu. İkisi de kaldırıldı; `worktree list`te w33 sayısı 0.
- `C:\atlas-umit` izlenmeyen: `denetim/UMIT-W33-ISGAL-1006.diff` + `.md`. Commit yok.
