# KAYNAK-DOGRULA-DOGUASYA — 1 Ekim 2026

**Dosya:** `data/kronoloji_cok_once1281_dogu_asya.js` (73 madde). Makine: KASA (YAZICI).

## Ölçüm
| Sonuç | Sayı | Madde (0-tabanlı sıra) |
|---|---|---|
| ① TDV'de VAR | 12 | 13 · 18 · 21 · 23 · 25 · 37 · 46 · 47 · 57 · 59 · 60 · 64 |
| ② akademik kaynak açıldı | 0 | — (CHC / CHJ / Coedès / Taylor / Lee / Petech kitaplarının hiçbirinin sayfası açılamadı) |
| ③ bulunamadı | 61 | geri kalanlar |

- Önceden dosyada "TDV'den alıntı" olarak geçen 16 cümlenin **16'sı da** TDV gövdesinde birebir bulundu (uydurma alıntı: 0). Yeni yazılan her TDV alıntısı, çekilen gövdede birebir arandıktan sonra yazıldı (betikte `assert`).
- `ad--nitelik` slug'ıyla kurtarılan: 0. Bu bölgedeki ölü slug'ların hiçbiri `ad--nitelik` karşılığı vermedi: `hitaylar` · `kitanlar` · `mengu-kagan` · `ogedey` · `vietnam` · `kore` · `laos` · `hotan` 302.
- **Tuzak ②:** `cin` 200 döndü ama madde **CİN**'dir (cin/şeytan). Çin için doğru slug `cin--ulke`.
- Alınan 503 / 000: **0**. İstek aralığı ≥1,6 sn tutuldu.
- `node --check`: temiz. 73 maddenin `kaynak` dışındaki alanları **değişmedi**; bu, maddeler özgün dökümle karşılaştırılarak ölçüldü. Silinen madde yok.
- Yeni alan: 73 maddenin hepsinde `ic_not_kaynak` var. İçeriği: sonuç sınıfı · denenen slug'lar · açılmayan eski atıf ("dayanak DEĞİL" damgasıyla).

## Yıl çelişkileri — t'ye DOKUNULMADI, hüküm koordinatörde
| # | Madde t | Açılan kaynak | Durum |
|---|---|---|---|
| 13 | 1209 | TDV cengiz-han: 1210 sonu | 1209'un dayanağı açılmadı |
| 45 | 1203 | TDV japonya: naiplik 1233-1333 | ③; 1203'ün dayanağı (CHJ) açılmadı |
| 56 | 1145 | TDV camlar: 1145 işgalin SONU | ③; TDV maddeyle çelişiyor, alınış yılının dayanağı (Coedès) açılmadı |
| 57 | 1177 | TDV camlar: 1178 | 1177'nin dayanağı açılmadı |

**Koordinatör hükmü (YILDIRIM BAYEZIT):** Dördünde de `t` KALIR. Çelişki, iki okumayla birlikte `ic_not_t`ye yazıldı (#13 yeni alan, #45 · #56 · #57'de eski not değiştirildi). Başka alana dokunulmadı, fark ölçümüyle doğrulandı.

## Kısmi destek (① ama iddianın bir kısmı TDV'de yok)
- **18:** TDV başkentin teslimini açıkça yazmıyor.
- **21:** TDV "Nan-çan Devleti" diyor; Dali ile eşleme bizim yorumumuz.
- **23:** TDV Diaoyu kuşatmasını anmıyor.

## Yöntem
- Denenen TDV maddeleri: `cin--ulke` · `cengiz-han` · `mogollar` · `kubilay-kagan` · `karahitaylar` · `mogolistan` · `kore-cumhuriyeti` · `japonya` · `camlar` · `kambocya` · `myanmar` · `tayland` · `sumatra` · `cava` · `endonezya` · `tibet` · `budizm` (hepsi 200).
- Başlık araması (`ajax_search_auto.php`) 0 sonuç verenler: tangut · cürçen · kitan · möngke · ögeday · angkor · kmer · pagan · sriv · dalay.
- Her maddede TDV cümlesi, olayla **ve** yılla birlikte eşleşirse ① sayıldı. Yalnız yüzyıl ya da dönem veren cümleler (ör. "XI. yüzyılda", "1127-1279") desteğe sayılmadı ve ③'ün notuna yazıldı.

---

# EK — Batı Afrika devri: `data/kronoloji_cok_ince_bati_afrika.js`

Kusurlu madde 6 (#1 · 2 · 3 · 4 · 5 · 9; 0-tabanlı). Bu maddelerde yalnız WebSearch özeti okunmuştu, sayfa gövdesi açılmamıştı.

| # | Madde | Sonuç | Açılan gövde |
|---|---|---|---|
| 1 | 1896-07-30 Voulet-Chanoine Bandiagara'dan çıkış | ③ | TDV burkina-faso + Encyclopedia.com «Burkina Faso» yılı ve Uagadugu'ya girişi veriyor, **30 Temmuz gününü vermiyor** |
| 2 | 1896 Prempeh tutuklanıp sürüldü | ② | Encyclopedia.com: Women in World History «Yaa Asantewaa» · Encyclopedia of Western Colonialism «Asante Wars» |
| 3 | 1900 Yaa Asantewaa savaşı | ② | Women in World History «Yaa Asantewaa» (Nisan 1900) + TDV gana (1901) |
| 4 | 1481 Ozolua oba oldu | ② | Britannica «Ozolua» |
| 5 | 1897 İngiliz heyeti öldürüldü | ② | Britannica «Ovonramwen» (Ocak 1897) |
| 9 | 1870 Jaja Opobo'yu ilân etti | ② | Encyclopedia of World Biography «Ja Ja of Opobo» |

- **Britannica:** betikle (urllib) 403 verdi, uygulama içi tarayıcıda açıldı. Metin `get_page_text` ile okundu.
- **Açılamayanlar:** Oxford RE (403) · encyclopedia.com'un Asante Wars eski adresi (404).
- **Alıntı kapısı:** Her Encyclopedia.com ve TDV alıntısı çekilen gövdede birebir arandı (`assert`).
- **Değişen alanlar:** yalnız `kaynak` ve `ic_not_kaynak`. Fark ölçümüyle doğrulandı: 14 maddenin öteki alanlarında fark 0.
- **Kapılar:** `node --check` temiz, CRLF korundu.
- **#1 için hüküm koordinatörde:** gün dayanaksız. Seçenek: `t:"1896-01-01"` + `gun` alanına "yıl".
- **ad--nitelik:** denenmedi. Gerekmedi, çünkü gerekli TDV maddeleri (burkina-faso · gana) doğrudan açıldı. `benin` 200 döndü ama ülke maddesi (Dahomey), Benin Krallığı değil (tuzak ②). `asanti` · `asantiler` · `kumasi` · `benin--ulke` 302.

---

# EK 2 — Doğu Asya tarayıcı turu (koordinatör görevi: 61 `bulunamadı` yeniden)

Britannica betiğe 403 veriyor ama uygulama içi tarayıcıda açılıyor. 61 madde, tarayıcının içinden (aynı kaynaktan `fetch`, istekler arası 1,5 sn) Britannica arama sonucu ve makale alt sayfalarıyla yeniden tarandı.

| Sonuç | Önce | Sonra |
|---|---|---|
| ① TDV | 12 | 12 |
| ② Britannica (editör metni) | 0 | **23** — #2 3 10 19 24 38 39 40 41 42 43 44 48 51 53 54 55 56 58 61 67 68 72 |
| ③ bulunamadı | 61 | **38** — hepsine "betik 403 · tarayıcıyla denendi (sayfalar)" notu yazıldı |

🔴 **Britannica sayfalarında YZ metni var.** Sayfalarda "Britannica AI" soru-cevap kutuları (`.ai-qna-module`) ve YZ özetleri bulunuyor. İlk taramada bunlar da okunmuştu; Kertanagara ve Kiyomori'deki bazı cümleler bu kutulardan geliyordu. Kırmızı çizgi (YZ üretimi metin) gereği tarama **yalnız `p.topic-paragraph`** ile, YZ kutuları dışarıda bırakılarak yeniden yapıldı. #31 (Ch'oe 1170 darbesi) yalnız YZ kutusunda geçtiği için ③ kaldı.

**Yıl ve ayrıntı farkları (t'ye dokunulmadı):**
- **#19:** Britannica Kaifeng'in alınışını 1234'e koyuyor, madde 1233. İki okuma `ic_not_t`ye yazıldı.
- **#67:** Britannica "about 1035" diyor, madde 1037. İki okuma `ic_not_t`ye yazıldı.
- **#56:** Britannica maddenin **alınış** okumasını destekliyor (1145 fethi). Çelişki artık TDV ile Britannica arasında; `ic_not_t`ye eklendi.
- **#44:** Britannica günü de veriyor (9 Şubat 1199). `t` değiştirilmedi.
- **#53:** Britannica 1069'da bırakılan toprağı "Vijaya" diye veriyor, madde "üç kuzey vilayet" diyor.

**Kör noktalar:** Goryeo maddesinde yalnız kısa giriş okunabildi (~500 karakter). Bu yüzden Kore maddelerinin (#26-36) hepsi ③ kaldı. Le Hoan, Song, Liao ve Genghis Khan sayfaları da kısa ya da bölümlü; o maddeler de destek vermedi.
