# UMIT-W57-ODAK-SEKME-YENIDEN-1006 — W13'ün Z8 zinciri güncel `makine/umit` üstünde yeniden üretildi

Görev UMIT İRTİBAT'tan geldi (koordinatör kalemi Z8). **Uygulama yapılmadı.** Ürün 6 diff + bu rapor.

| | |
|---|---|
| ağaç | `C:\atlas-w57` (detached) |
| üretim tabanı | `47290f11` |
| yeniden sınanan taban | `6297a2fe` (bugünkü `origin/makine/umit`) |

`C:\atlas`a, tahtaya ve `ODAK-TAVAN.json`a dokunulmadı. Ara adımlar ağaçta yerel geçici commit olarak tutuldu ve atıldı; push yok.

## 0. Neden bayattı — ölçüm
- `47290f11`'den bu yana zincirin dört dosyasından yalnız `arac/odak_cozum.js` değişti, tek commit'le: **KIRIM-ODAK-A** (`f73235cd`, +65 −2). `odak_olc.py` ile `ODAK-KAPI-SINAV.py` zincirin tabanı `3e4b3a98`'den beri aynı.
- Zincir eski tabanında (`3e4b3a98`) 5/5 temiz uygulanıyor. Güncel tabanda `odak_cozum.js` hunk'ları tutmuyor; `odak_olc.py` hunk'ları tutuyor.
- **İkinci, görünmeyen bayatlık:** `ODAK-KAPI-SINAV.py` W31'de geçici köke taşınmış (UMIT-W31-SINAV-YANETKI). O kökte `index.html` ile `js/app.js` yok.
  - W13 evreniyle ⓿ taban **ÖLÇEMEDİ** veriyor.
  - ①②③ ÖLÇEMEDİ'yi ihlal saydığı için **boşuna geçiyor**: ③ "geçti" görünüyor ama sahte. Ölçüldü: 3/2.
  - Bu yüzden zincire ayrı bir halka eklendi (aşağıda ②').

## 1. Zincir — halka halka (amaç · sınav · tavan etkisi)
Uygulama sırası. Her halka bir öncekinin üstüne `--check`lendi. Geçici indeksle hem `47290f11` hem `6297a2fe` üstünde sırayla: **6/6 ileri ✓**, her halkadan sonra `-R` ✓. Son ağaç Y5 ağacıyla `write-tree` EŞİT. Altı diffte de CR 0.

| # | diff | amaç | sınav | tavan etkisi |
|---|---|---|---|---|
| ① | `ODAK-SEKME-1006-YENI` | W13 O1 sekme dalı · O2 `AD_KONUM` havuzu · O3 tarayıcı evreni. **+ KIRIM-ODAK-A dalı `sekmeDali`ye KATILDI**: SEKME_TABI_KUTU · SEKME_SESSIZ · SEKME_OLCULEMEDI (kapı ✗ ÖLÇÜLEMEDİ) | 13 W13 vakası + **A1/A2** (Kırım 1476 → TABI_KUTU · Kırım 1792 → SESSIZ) = **15/0** | ODAKSIZ 401→374 · BEYANLI→yabancı 426→312 · yeni alan `sekme_okunmayan` 1408 · Ogaden borcu KAPANDI |
| ②' | `ODAK-KAPI-SINAV-TARAYICI-1006-YENI` 🆕 | Geçici köke `index.html` + `js/` kopyalanır, kalan `data/` hardlink'le bağlanır; olmazsa kopyalanır. Yazılan iki dosya (kurban, tavan) eskisi gibi GERÇEK kopya. | aşağıda §3 | yok |
| ② | `ODAK-METIN-1006-YENI` | O8 metni (OLAYLAR → Osmanlı kutusu; sekme → gövde). "SESSİZCE kıpırdamaz / panel notu YAZILMAZ" cümleleri A'ya göre düzeltildi: tâbi kutusu, yoksa panel notu var. | metin; sayı değişmez | yok |
| ③ | `ODAK-SEKME-1006b-YENI` | KIRIM'ın dalı ZATEN var, mükerrer dal açılmadı. 1006b'nin kalan amaçları eklendi: `devletiYay` taklidi app.js'ten kesilen `aktifAralik` + `BASLANGIC/BITIS` **kıstırması** · neden ayrımı (`sahnede_degil` / `harita_kaydi_yok`) · `sekme_sessiz` tavanı · `--tavan-yaz`a yönlendiren dört metin "ELLE indir" oldu. | + S1–S6, N5b = **22/0** | yeni alan `sekme_sessiz` **53** |
| ④ | `ODAK-SEKME-1006c-YENI` | `--yay-dogrula`: gerçek `geo_coz` + `parcaCoz` + `devletiYay` ile taklidi karşılaştırır. Gövde yoluna TABI_KUTU da sayıldı. | + S7 = **25/0** | yok |
| ⑤ | `ODAK-SEKME-1006d-YENI` | D265 durum satırı (KOŞULMADI / KOŞULDU). Asıl diff değişmeden uygulandı. | + S8 = **28/0** | yok |

### Kıstırma neyi değiştirdi (③) — ölçüldü
Gövde aralığı kıstırmasız sorulursa (KIRIM'ın `gunSay` yolu): GOVDE 228 · gövdesiz 84.
App.js gibi kıstırılırsa (1281 öncesi madde 1281'in gövdesine bakar): GOVDE **247** · gövdesiz **65** (TABI 12 + SESSIZ 53).
⇒ KIRIM ölçümünde 19 madde yanlış sınıftaydı (yanlış kirli).

### KIRIM-ODAK-A'nın eski `sekme` alanı — neden kaldırıldı, ne değişti
- Alanın `odak_cozum.js` dışında okuyucusu **0** (grep).
- Bugün tabanda ölçüldü: madde × künye, dosya adıyla bağlama, KUTU doğru günle.

  | ölçü | KUTU | TABI_KUTU | SESSIZ | GOVDE |
  |---|---|---|---|---|
  | KIRIM-ODAK-A (eski alan) | 104 | 13 | **97** | 331 |
  | yeni (tekil · tarayıcı bağlaması · ham `m`) | 14 | 12 | 53 | 247 |

  Yeni ölçünün ayrıca OKUNMAYAN gövde maddelerinin gövde sonucu var: GOVDE 97 · SESSIZ 6 · TABI 2.
- 🔴 **KUTU 104 → 14 yanlış temizdi** (W13'ün bulgusu bugün de geçerli). `maddeAc` ilk çağrıda `maddeOdakKutusu(m)`e HAM `m` verir. `gi` olmadığı için `odak_kimlik` hiç çözülmez. Eski alan bunu doğru günle sayıp "kutu kuruluyor" diyordu.
  - O maddeler şimdi OKUNMAYAN / `govde_odak_kurulmadi` (88) altında.
  - TABI geri düşüşüne ise app.js `gi`yi **kendisi** verir; orada doğru gün doğrudur. İkisi kodda ayrı ayrı yazıldı.

## 2. Bugünkü ölçüm (`6297a2fe` + 6 diff, §3.4 ⓪: tavan önerisinden hemen önce yeniden koşturuldu)
- **Evren:** TARAYICI · yerleşim 4299 · OLAYLAR 1778 · SEKME 10799 · AÇILAMAZ 390
- **SEKME dalları:**
  - NOKTA 5351
  - KUTU 14
  - GOVDE 247
  - TABI_KUTU 12
  - SESSIZ 53 (sahnede_degil 51 · harita_kaydi_yok 2)
  - OLCULEMEDI 0
  - KIPIRDAMAZ 3714
  - OKUNMAYAN 1408 (kipirdamaz_odak 571 · kipirdamaz_yer_kon 732 · govde_odak_kurulmadi 88 · govde_yer_kon 17)
- **SESSİZ künyeler:** iran 16 · macaristan 8 · dulkadir 5 · karadag 5 · zeta 4 · fransa 3 · karaman 2 · aydin 2 · yemen-zeydi 2 · evfat 2 · gürcistan 1 · ispanya 1 · kırım 1 · moundville 1
- **Kapı (bugünkü tavanla):** ihlal YOK. İyileşme satırları ODAKSIZ 374/401 ve BEYANLI 312/426; iki yeni alan için ⓘ satırı.
- `--yay-dogrula` (S7a): taklit_govde | gercek_kutu **344** · taklit_sessiz | gercek_bos **73** · geometri-boş **0** · uyuşmazlık **0**. Gövde yolu toplamı 417 ile birebir tutuyor.

## 3. Sınavlar — iki yönde
| sınav | koşul | sonuç |
|---|---|---|
| `ARAC-ODAK-SEKME-SINAV-1006.py` | Y5, `47290f11` + `6297a2fe` | **28/0**, `data/` temiz |
| `ODAK-KAPI-SINAV.py` | ②' YOK (bugünkü dosya) + W13 evreni | 3/2 — ⓿ ÖLÇEMEDİ, ③ sahte geçiş (bayatlığın kanıtı) |
| `ODAK-KAPI-SINAV.py` | ②' + bugünkü tavan | 3/2 — ① ve ② tavan yazılmadığından (W13'ün bildirdiğiyle aynı); ③ **gerçek** "YENİ ÇÖZÜLMEYEN ODAK ATFI: 1" |
| `ODAK-KAPI-SINAV.py` | ②' + önerilen tavan (geçici yazıldı, geri alındı) | **5/0** (① "374 > tavan 373") |

⚠️ ② önerilen tavanla boş liste üstünde koşuyor ("0 kayıt vardı" → ihlal beklenmez). Bilinen borç sıfırlanınca bu yön **ölçmüyor**. Kusur değil, beyan.

## 4. Tavan ÖNERİSİ (yazmadım — koordinatör kararıyla dosya sahibi ELLE yazar, `--tavan-yaz` YASAK)
`denetim/ODAK-TAVAN.json`:
- `odaksiz` 401 → **374**
- `beyanli_yabanci` 426 → **312**
- yeni `sekme_okunmayan` **1408**
- yeni `sekme_sessiz` **53**
- `bilinen_kusur` → `[]` (Ogaden kapandı)
- `evren` aynı kalır

🔴 **§3.4-2:** altı diff ve tavan AYNI commit'te inmeli. Diffler tek başına inerse ODAK-KAPI-SINAV ① ve ② kırmızı yanar. W13 bunun CLAUDE.md kardeşlerini de üretmişti (`CLAUDE-MD-ODAK-1006` + `1006b`); onları yeniden ÜRETMEDİM, kök `*.md` koordinatörün dosyası.

## 5. 🔴 ÇAKIŞMA — W39d (`ebf1874d`, `ODAK-KAPI-KIMLIK-1006.diff`, uygulanmadı)
**Dört dosyanın dördünde de** bu zincirle çakışıyor:
- `arac/odak_cozum.js`: KIRIM'ın `sekmeSinifi` üstüne `kimlik()` ekliyor. Benim ① o işlevi kaldırıyor.
- `arac/odak_olc.py`: kapıyı kimlik listesine çeviriyor; ①③ de `kapi_olcumu`yu değiştiriyor.
- `denetim/ODAK-KAPI-SINAV.py`: `gecici_kok`a `devlet_harita_ust.js` kopyası ekliyor (+3). Benim ②' bunun **üst kümesi**: bütün `data/` + `index.html` + `js/`.
- `denetim/ODAK-TAVAN.json`: 1297 satırlık kimlik listesi.

**Daha ağır olanı anlam çakışması:**
- W39d kimlik listelerini ESKİ disk evreninde donduruyor: 9.984 madde · ODAKSIZ 401 · BEYANLI 426 · SEKME SESSİZ **97 çift**.
- Bu zincir evreni tarayıcıya çeviriyor: 12.576 madde. 3027 künye-içi madde görünür oluyor; 390 açılamaz madde sayımdan çıkıyor; 152 adlık havuz farkı var.
- SESSİZ 97 çift değil, **53 tekil + 12 TABI**.
- ⇒ İkisi sırayla inerse, ikinci inen birincinin donmuş listesini/sayısını geçersiz kılar.

**Önerim: önce Z8 (bu zincir + tavan), sonra W39d bu evren üstünde yeniden üretilsin.** Gerekçe: yanlış evren üzerinde kimlik dondurmak, yanlışı adıyla dondurmaktır. Ters sıra da mümkün, ama o zaman bu 6 diffin üçüncü kez yeniden üretilmesi gerekir.

W39 ile konuşmadım (talimat).

## 6. Bulunamadı / dokunulmadı
- **SEKME_OLCULEMEDI dalının sınavı YOK.** `DEVLET_HARITA`yı tarayıcı evreninden çıkarmak `data/`ya ya da `index.html`e dokunmayı gerektiriyor. Dal kodda var, kapıya bağlı; bugünkü değeri 0. "Ötüyor" denemez.
- **W13'ün S2 vakası (poni 1405) veride DÜZELMİŞ:** `odak_yer:["Brunei"]` yazılmış, `kapsam_genis` yok ⇒ artık OKUNMAYAN. Aynı nedenin bugünkü örneği alındı: evfat 1350 · `kronoloji_dogu_afrika.js` → SESSIZ / harita_kaydi_yok. Sınav metninde yazılı.
- **`iran` 16 · `macaristan` 8 sessiz:** W13'ün W26'ya devrettiği BAĞLAMA kusuru. Bu iş onu çözmez.
- `data/acilis_siluet.js` node kabuğunda "Element is not defined" veriyor (W13'ten bilinen; uyarı olarak basılıyor).

## 7. Dosyalar (`C:\atlas-w57\denetim\`, commit YOK)
`ODAK-SEKME-1006-YENI.diff` · `ODAK-KAPI-SINAV-TARAYICI-1006-YENI.diff` · `ODAK-METIN-1006-YENI.diff` · `ODAK-SEKME-1006b-YENI.diff` · `ODAK-SEKME-1006c-YENI.diff` · `ODAK-SEKME-1006d-YENI.diff` · bu rapor.

Uygulama sırası tablodaki gibidir: ① → ②' → ② → ③ → ④ → ⑤.
