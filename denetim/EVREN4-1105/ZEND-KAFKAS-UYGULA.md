# ZEND + KAÇAR Kafkas — uygulama talimatı (KASA PAZAR; EMRELİC gece-120)

Öneri dosyası: `ZEND-KAFKAS-ONERI.json` (e034718aa). 33 yerleşim, 126 satır. KASA SALI veriye yazmaz.

## 🔴 Aynı commit şartları

1. **4 künye düzeltmesi yerleşim dönemleriyle AYNI commit'te** (LAB SALI'nın partisi). Yoksa önerilen uçlar künye dışına taşar.

   | künye | alan | eski | yeni |
   |---|---|---|---|
   | `baku-hanligi` | t | 1806-10-03 | 1806-10-15 (3 Ekim O.S.) |
   | `sirvan-hanligi` | f | 1748-01-01 | 1747-06-20 |
   | `sirvan-hanligi` | t | 1820-01-01 | 1820-08-31 (TDV, 19 Ağustos O.S.) |
   | `kumuk-samhalligi` | t | 1726-01-01 | 1867 (gün kaynakla) |

   **Tarki, `kumuk-samhalligi` genişletmesi gelmeden UYGULANMAZ.** `afsar` 1796'da bitiyor; sonrasında künyeli bir sahip yok.
2. **Değişmez 1 ölçüsü:** önce ölç. BEKLENEN_SAHIPSIZ artarsa o dilimde önceki sahip korunur. Önerideki bütün s: zincirleri bitişik (KASA zk_sina: boşluk 0, çakışma 0). `afsar` BEYANLI dilimleri sahipsiz dilim açmaz; künyesi 1736 → 1796.
3. **D2:** 39 tekil kırılmanın 32'sine yeni madde gerekiyor. Maddeler madde kuyruğunda (Sonnet, 7 dil); 103 uç deliğinden sonra yazılacak.
   - Maddeler girmeden kırılmalar uygulanırsa D2 açığı artar. Önerim: maddeler hazır olunca bu dosyayla birlikte tek dalga.

## EMRELİC kararları

- **(a) 1827–28:** savaş işgalinden ilhaka kadar `isg rusya`, altında hanlık sürer.
  - Revan: `isg rusya` 1827-10-13 (TDV, N.S.) → 1828-02-22. Altında `s: revan-hanligi`.
  - Türkmençay 1828-02-22 imza günüdür = `s: rusya` (Rusya yeri zaten idare ediyordu).
  - Norapat, Beri ve Kliçatak aynı modeli izler.
  - 1804–06 hanlık ilhakları ve tâbilikleri önerideki gibi `s:` ve `v:` olarak yazılır.
- **(b) Urmiye:** TDV «Urmiye» cümlesi ham metinden okundu: «1174'te (1760) Urmiye yedi ay süren bir kuşatma sonunda Kerim Han Zend tarafından **ele geçirildi**». Cümle ele geçirmeyi tarihliyor, yalnız kuşatmayı değil → TDV esas.
  - **Urmiye `zend` f = 1760-08-12** (hicrî 1174 ∩ 1760 kesişiminin ilk günü; 1174 = 1760-08-12 → 1761-07-31, tabular Perşembe epoch'u, sınama 923/3/1 = 1517-04-02 G). BEYANLI hicrî yıl.
  - `ic_not`: "Iranica (Perry, «Karim Khan Zand»): «taking Tabriz and Urmia in February 1763»; TDV 1174/1760 esas alındı".
  - Önerideki Urmiye zend f 1763-02-01 bu yüzden 1760-08-12'ye çekilir. Önceki `afsar` dilimi t = 1760-08-12 olur.
  - Öteki güney yerleşimleri (Tebriz vb.) Iranica 1763-02 ile kalır.
- **(c) Derbend → Kuba:** TDV 1759 sonbaharı → `kuba-hanligi` f **1759-09-01** + ay hassasiyeti beyanı. ru.wikipedia'nın 1765'i `ic_not`a yazılır. `derbent-hanligi` künye t'si 1759-09-01'e kısalır (LAB, 5. düzeltme).
- **(d) Koordinat sınaması (uygulamadan ÖNCE):** Natural Earth 10m nehir katmanıyla (`veri-kaynak/`) üç noktanın yakası sınanır.
  - Astara (38.4292 K, 48.8728 D): Astara çayının İran kıyısında mı? İran kıyısındaysa zincir İran Astarası'nındır, Talış hanlığı satırları uygulanmaz.
  - Culfa (38.955, 45.63): Aras'ın güney yakasında mı? Güneydeyse Türkmençay sonrasında `kacar` sürer.
  - Kliçatak (Suser): Arpaçay'a çok yakın; Osmanlı-Rus sınırı yakası.
  - Yaka beklenenden farklı çıkarsa o yerleşimin satırları uygulanmaz ve KASA'ya döner.
- **(e) Künye işleri:** 5 düzeltme + 10 aday tek partide LAB SALI'da.
  - Adaylar: Dünbülî, Kovanlu Kaçar, Âzâd Han, Urmiye Afşar, Karadağ, Erdebil, Şakaki, Mâku, Salyan, Şuregel.
  - Adaylar gelene kadar `s:`'de `afsar` BEYANLI kalır. "v-ADAY (YAZILMAZ)" satırları yazılmaz.

## Uygulanmayan satırlar

- Hükmü "v-ADAY (YAZILMAZ)" olan satırlar.
- Tarki (künye bekliyor).
- (d) sınamasından geçmeyen yerleşimler.
