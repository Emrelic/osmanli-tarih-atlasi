# HAYALET-KUNYE-1008 — künyesi ölmüş sahipler (1281–1923 dilimi)

**Oturum:** HAYALET-KUNYE-1008 (UMIT, hazır kıta 0810 2230) · 9 Ekim 2026
**Temel:** `origin/makine/umit` `8b2f5415` · ağaç `C:\atlas-hayalet` (kaldırıldı)
**Cins:** ölçüm + UYGULANMAMIŞ diff + künye önerisi. Commit/push yok.
**Gün aralığı (diff'in dokunduğu):** 1523-01-01 → 1923-10-29

Teslim dosyaları:
```
denetim/HAYALET-KUNYE-1008.md                 bu rapor
denetim/HAYALET-KUNYE-1008-KOORD.diff         ANA — 8 nokta, 3 dosya (yerlesimler · _asya · _kamerika)
denetim/HAYALET-KUNYE-1008-EK-KOORD.diff      EK (D206 komşu) — Newfoundland adası 2 nokta, kanada → ingiliz-kuzey-amerika
denetim/HAYALET-KUNYE-1008-KUNYE-ONERI.json   dhar · avsa künye önerisi (RENK ister)
```
`git apply --check`: ikisi ayrı ayrı ve ANA+EK sırayla TEMİZ · CR 0 · `node --check` 3 dosya ✓.

---

## ⓪ Mükerrer kapısı — kısmen ÖLÇÜLMÜŞTÜ, hiç UYGULANMAMIŞTI
| önceki | ne yaptı | bugün |
|---|---|---|
| `ASYA-HINT-HAYALET-0906.md` | meysur/maratha'yı buldu, `yer_yama_asya_1923.js` üretti, Mandu/Uccayn için «bulunamadı» | yama İNMEDİ; `meysur-racaligi` künyesi sonra **f 1799-05-04** ile yazıldı ama 3 nokta hiç bağlanmadı |
| `BULGU-ELBA-0905.md` | Elba'ya `piombino`yu 1923'e kadar BİLEREK basitleştirme olarak yazdı | basitleştirme 4c'ye 375 yıllık aşım olarak düştü |
| `BULGU-HAYALET-RUSYA.md` | rusya kovası | Sohum kaldı |

⇒ Araştırmanın bir kısmı yeniden yapılmadı (TDV `meysur` cümlesi, Elba 1399 günü devralındı). **Yeni olan:** Uccayn ve Mandu'nun ardılı (önceki oturum «bulunamadı» demişti — EB1911 tarama metninde bulundu), Elba'nın 1548-1923 zinciri, Sohum'un TDV günü, Asâyita'nın sınıfı ve iki anomali.

## ① Liste ve evren
**Öngörü (ölçümden önce, `ongoru.txt`):** Z5 X kovası 10 (12 değil) · evren 12 ile sınırlı DEĞİL.
```
ZAMAN-Z5-1008.json  X_kunye_1923_once_bitti   8   (Mysore 3 · Maratha 2 · Sohum · Elba · Asâyita)
                    X_anomali                 2   (St. John's · Tehuantepec, s:abd)
                    TOPLAM                   10   ← mesajdaki "~12" değil
```
Sınıf `denetle.py` **4c** (`degismez4` → `asan`: dönem künyenin ÖLÜMÜNÜ aşıyor) ile birebir; Z5'in 8'i 4c'nin `t=1923-10-29` alt kümesi (⊂ doğrulandı, eksik 0).
```
girdi.yukle: 4300 yerleşim · 93 dosya
tolerans 400 g (denetle varsayılanı)   4c 127 dönem · 33 kimlik · t=1923-10-29 olan 8
tolerans  30 g                          4c 431 dönem · 59 kimlik · t=1923-10-29 olan 8
tolerans   0 g                          4c 487 dönem · 62 kimlik · t=1923-10-29 olan 8
```
⇒ **12 ile sınırlı DEĞİL.** Aynı sınıf 127 dönem (tavan `BEKLENEN_ASAN=127`, bilinen borç). Z5'in gördüğü yalnız 1923'e dayanan uçlardı. En büyük kimlikler: macaristan 14 · pagan 14 · ilhanli 12 · malaka 7 · mentese/kazak/afgan-durrani/filipin 6. Anomaliler 4c'de DEĞİL (künye `abd` yaşıyor; kusur «yer yanlış», D204).

## ② Sınıflandırma (D205) ve kaynak
| nokta | veride | künye ucu | sınıf | çare | kaynak |
|---|---|---|---|---|---|
| Meysûr · Seringapatam · Bangalor | `meysur` →1923 | 1799-05-04 | ③ ardıl | 1799-05-04 → `meysur-racaligi` (künye VAR, renk VAR) | TDV `meysur`: «beş yaşında bir Hindu hânedan üyesini tahta oturtup eski racalığı tekrar ihdas ettiler» (Mayıs 1799) |
| Uccayn | `maratha` →1923 | 1818-06-03 | ③ ardıl | 1818-06-03 → `gvalyar` (künye 1731→1948, renk VAR) | EB1911 c.27 s.583: «in the state of Gwalior» · «headquarters of Sindhia». 1818-06-03 kaynak günü DEĞİL, `maratha` künye sınırı (İndor/Gvalyar emsali) |
| Mandu | `maratha` →1923 | 1818-06-03 | ③ ardıl — **künye YOK** | `dhar` künyesi önerildi; **diff'te YOK** | EB1911 c.17 s.583 «in the Dhar state» · c.8 s.157 «In 1742 Anand Rao received Dhar as a fief» |
| Sohum | `rusya` →1923 | 1917-03-15 | ③ ardıl zincir | rusya-gecici-hukumet → transkafkasya → GDC → 1921-03-04 sovyet-rusya | TDV `sohum`: «Kızılordu ve yerel güçler şehri 4 Mart 1921’de ele geçirip Sovyet hükümranlığını ilân ettiler». 1917-1918 günleri **komşudan: Kutaisi** (TDV bu aralık için yalnız «Rus sivil savaşı içinde yok oldu» diyor) |
| Elba | `piombino` →1923 | 1548-01-01 | ③ ardıl zincir | toskana 1548 → fransa 1802 → __BOSLUK__ 1814-05-05 → toskana 1815-06-09 → italya 1861-03-17 | EB1911 c.9 s.177-178 (BİREBİR, tarama metni): «In 1548 it was ceded by them to Cosimo I.» · «In 1802 the island was given to France by the peace of Amiens.» · «from the 5th of May 1814 to the 26th of February 1815» · Viyana Nihai Senedi 9 Haz 1815 (GRIPS metni: «That part of the island of Elba») |
| Asâyita | `adal` →1923 | 1887-01-06 | ③ ardıl — **künye YOK, t bulunamadı** | `avsa` önerildi; **diff'te YOK** | TDV `harar`: Aussa'ya taşınma + «1647’de Ali b. Dâvûd Aussa imamı olunca … Harar tekrar bağımsız» ⇒ `adal`ın 1887 ucu HARAR koluna ait |
| St. John's | `abd` 1783→1923 | — | **D204 yer yanlış** | ingiltere → 1763-02-10 ingiliz-kuzey-amerika | künye `newfoundland-dominyonu` kaynağı (heritage.nf.ca · gov.nl.ca); 1763-02-10 komşudan: Plaisance |
| Tehuantepec | `ingiltere` 1523 · `abd` 1783 | — | **D204 yer yanlış** | ispanya 1523 → yeni-ispanya 1535-04-17 → meksika 1821-09-27 | günler komşudan: Mitla (Marcus & Flannery 1996), ~136 km, aynı Oaxaca süreci |

**Hiçbiri ① (kısalt) ya da ② (genişlet) değil — 10'un 10'u ③ ya da yer yanlış.** ② adayı tek: `piombino` prensliği 1557'de Appiani'ye iade edilip 1799'a dek sürdü (Viyana metni: «previously to the occupation of those countries by the French troops in 1799»); ama Elba noktası Portoferraio'ya ~4 km ve EB1911 adayı 1548'de Cosimo'ya verir ⇒ nokta için ③. Künyeyi genişletme sorusu AYRI ve açık.

## ③ D206 — iki uç da ölçüldü
- **Kısaltma hiç kullanılmadı.** Mandu ve Asâyita için kısaltma ölçüldü ve reddedildi: Asâyita sahipsiz kalırsa peteği en yakın komşuya emilir = **Dikhil (114 km, `fransa-cumhuriyet`)** ⇒ Aussa Fransız boyanır, Bâtî (`habesistan`) 161 km. Kusur öbür tarafa geçerdi. İkisi künye+renk inene dek DOKUNULMADI.
- **Ardıl pencereleri tutuyor:** meysur-racaligi 1799→1947 · gvalyar 1731→1948 · rusya-gecici-hukumet 1917-03-15→11-07 · transkafkasya 1917-11-07→1918-05-28 · GDC 1918-05-26→1921-03-16 · sovyet-rusya 1917-11-07→ · toskana 1532→1860-03-22 · fransa-cumhuriyet 1792→ · ingiliz-kuzey-amerika 1763→1923 · ispanya/yeni-ispanya/meksika ✓. **Tek pay:** Elba `toskana` 1815-06-09→1861-03-17, künye 1860-03-22'de bitiyor ⇒ 360 gün aşım (tolerans 400'ün altında). Bilerek: Pisa ve Floransa zinciri BİREBİR aynı (`toskana`→`italya` 1861-03-17). EB1911 «passed with it to Italy in 1860» der; üç noktayı birlikte `sardinya-piyemonte` köprüsüne almak ayrı kalem.
- **Boyanmayan kimlik yok:** diff'teki her `d:` `BOYALAR`da (ölçüldü). `newfoundland-dominyonu` doğru kimlik ama künyesinde «Renk YOK» ⇒ diff `ingiliz-kuzey-amerika` kullanıyor, boya inince 1855-01-01'den itibaren çevrilmeli (diff yorumunda yazılı).
- **Komşu tutarsızlığı (EK diff):** St. John's düzelince adanın geri kalanı (Plaisance · Beothuk gölü) `kanada` 1867→1923 olarak kalıyordu; Newfoundland Kanada'ya 1949'da katıldı ⇒ aynı D204. Blanc-Sablon (Québec anakarası) DOĞRU, dokunulmadı.

## ④ `denetle.py` önce / sonra (bu ağaçta)
| | taban | ANA | ANA+EK |
|---|---|---|---|
| **çıkış kodu** | **2** (yalnız D8 ölçülemedi) | **2** | **2** |
| D1 sahipsiz | 309 | 309 | 309 |
| 4c | 127 | **121** ⚠️ TAVAN GEVŞEK | 121 |
| 4s | 5 | **2** | 2 |
| 2s açık | 185 | 185 | 185 |
| 2s kırılma · kapsam dışı · yıl-temsilî | 1722 · 791 · 165 | 1725 · 790 · 167 | — |
| 2sk yalnız-taraf | 2250 | **2254** ⚠️ TAVAN AŞILDI | **2252** |
| D7 enklav | 733 | **735** | 735 |

Öngörü **sonradan** sayıldı (ön kayıtta yalnız «12 ile sınırlı değil» vardı): 4c −6 = 127−6 = 121 tuttu; Mandu ve Asâyita 4c'de kalıyor.

**+4 2sk'nin sahibi ÖLÇÜLDÜ:** yalnız değişen 10 noktayla önce/sonra alt-küme koşusu — yalnız-taraf 0 → 4. Kaynağı benim yeni kırılmalarım; madde DEVLETİ anıyor, YERİ anmıyor. Yalnız-taraf kapanan 4 kırılma 1535-04-17 · 1861-03-17 · 1918-05-26 · 1814-05-05/1921-03-04 adaylarından; tek tek AYIRMADIM. EK diff −2 (1867-07-01 `kanada` kapanışları gidiyor).
**+2 D7'nin sahibi:** ikisi de Elba — `1802-01-01 → fransa-cumhuriyet` A-koridor (Korsika adası, 211 km) ve `1814-05-05 → __BOSLUK__` C-hakiki (5017 km, beyanlı boşluk adası).
**Yıl-temsilî +2:** Elba 1548-01-01 ve 1802-01-01 (kaynak YIL veriyor, gün uydurulmadı).

## ⑤ Bulunamadı / ölçülemedi
```
🔴 bulunamadı  Asâyita'nın 1647-1923 sahibi (Aussa sultanlığı) — TDV avsa/afar/afarlar/adal/adel/denakil/danakil 302
⚠️ çelişki     TDV etiyopya «(Aussa'daki Harar Sultanlığı) yıkıldı (1577)» ↔ TDV harar «1647'de Aussa imamı» — taraf seçilmedi
🔴 bulunamadı  Dhar künyesinin bitiş günü (1948 birleşmesi) — pencere ucu 1945-09-02 önerildi
⚪ ölçülemedi  Britannica çevrimiçi (Ujjain, Mandu) HTTP 403 — EB1911 tarama metni kullanıldı
⚪ ölçmedim    Elba 1815-02-26 → 06-09 arası (Yüz Gün) gerçek sahibi — __BOSLUK__ beyanına katıldı
⚪ ayırmadım   2sk +4'ün hangi 4 kırılma olduğu tek tek (alt-küme toplamı 4 tuttu)
⚪ ölçmedim    tolerans 400 altındaki 360 aşımın (4c 127 → 431 @30g) tamamı — evren sorusu cevaplandı, sınıflandırılmadı
```

## ⑥ Yolda görülen (iş dışı, düzeltilmedi)
- **KAMERIKA şablon hatası (6c2e5923):** St. John's ve Tehuantepec aynı «1783-09-03 → abd» kalıbını taşıyordu. Aynı kalıpla Kanada topraklarındaki 3 nokta hâlâ `abd` 1783→1923: **Kahnawake** (Québec) · **Sainte-Marie-au-pays-des-Hurons** · **Ossossané** (Ontario). D204 yer yanlış; 4c görmez.
- Tehuantepec'in kendi notu «1522 İspanyol» der, zincir 1523-01-01 (künye `zapotek-krallik` ucu). Baş taraf dokunulmadı.
- Elba kaydının `not:` alanı («piombino 1923'e kadar basitleştirme») ANA uygulanınca BAYATLAR; diff yorum satırında yazılı, `not:` metnine dokunulmadı.

## ⑦ İstenen (koordinatör kalemi, §3.4② — tavan + veri AYNI commit'te)
```
BEKLENEN_ASAN              127 → 121   (iyileşme; iner)
BEKLENEN_SARAN               5 → 2     (iyileşme; iner)
BEKLENEN_2S_YALNIZ_TARAF  2250 → 2254 (yalnız ANA) / 2252 (ANA+EK) — YÜKSELTME: beyanla
                                     (künye devralan doğru kırılmalar) ya da yeri anan madde yazılır
BEKLENEN_ENKLAV_SORGU      731 (taban zaten 733) → 735 — +2 Elba, ikisi de ada
```
Öneri: **ANA + EK birlikte** (2sk +2 ile kalır, ada tek renk). Mandu ve Asâyita: `KUNYE-ONERI.json`, renk istediği için **tam inşa koşusuna**; Asâyita'nın künyesi `t` bulunmadan yazılmamalı.
