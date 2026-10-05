# UMIT-TASNIF-1006 — UMIT kümesinin dört kovaya tasnifi

Alt koordinatör: **UMIT İRTİBAT** · Genel koordinatör: YILDIRIM BAYEZIT · 6 Ekim 2026
Ölçüm temeli: `origin/main` @ **85c7e2dd**. Kaynak dosyalar o commit'ten okundu, kalemlerin
bugünkü durumu (uygulandı mı, `--check` temiz mi) yine o commit'e karşı ÖLÇÜLDÜ.
Yama sınavı: geçici bir indekse `read-tree origin/main` + `git apply --cached --check`
(ileri ve `-R`). Çalışma ağacına bakılmadı; satır sonu tuzağı yok.

```
A · ŞİMDİ YAPILIR   veri/metin/kronoloji/araç · motor tuzuna DOKUNMAZ · koşu gerektirmez
B · KOŞU BEKLER     görünmesi koşuya bağlı ya da motor tuzunda · yama denetim/*.diff, --check TEMİZ
C · ÖLÇÜM EKSİK     hüküm için önce ölçüm/kaynak gerekiyor
D · EMRE'NİN KARARI kapsam · yeni boyut · tavan · kaynak çelişkisi → genel koordinatöre
✔ · KAPANMIŞ       main'de zaten uygulanmış / düzeltilmiş (ölçüldü)
```

## 0. ÖZET — sayılar

| Öbek | Kalem | ✔ | A | B | C | D |
|---|---|---|---|---|---|---|
| ① PAKET-0083-E bant arayüzü | 5 | 0 | 1 | 1 | 1 | 2 |
| ② DENETIMSIZ-ELLE-VERI | 13 | 2 | 4 | 1 | 2 | 4 |
| ③ ODAK-OLC-KOR-NOKTA | 8 | 0 | 4 | 0 | 1 | 3 |
| ④ KRONOLOJİ KAYNAK BORCU | 13 | 2 | 1 | 1 | 7 | 2 |
| **Toplam** | **39** | **4** | **10** | **3** | **11** | **11** |

(KF-2 "C→A" satırı C'de sayıldı: seçim yapılmış ama kaynak çelişkisi bildirilmeden yazılmaz.)

🔴 **Genel koordinatörün kümesindeki iki varsayım ÖLÇÜMLE düzeldi:**
1. "E EMRELIC'te koşmadı" → **koştu.** GLM1 5 Ekim'de teslim etti
   (`denetim/PAKET-0083-E-BANT-ARAYUZ.md` · `denetim/ARAYUZ-BANT-TAM-1005.diff`, 5 hunk).
   Ama o diff **bugün main'e uymuyor** (E1). Yani iş yapılmış, ürünü bayatlamış.
2. "DENETIMSIZ-ELLE-VERI'de kalan 18 kusur" → raporun kendi sayısı **20 üye**. Bunların
   **2'si main'de zaten düzeltilmiş** (K1 `sibir`, K2 `abdulaziz-bin-suud`). 20 üye ve
   raporun yan bulguları (kaynak borcu, okuyucusuz dosyalar, belge bayatlığı) burada
   13 kaleme toplandı (aynı dosya + aynı düzeltme = tek kalem); 2'si ✔, 11'i açık.

🔴 **Koşuya yetişmesi gereken kalem:** HAVVA'nın tam inşa koşusu `origin/main`den başlar.
B kovasındaki **E2 · ④-E1** main'e girmeden koşu başlarsa bir koşu daha beklerler.
Hükmü genel koordinatörde: E2 (`MOTOR-BANT-TAM`) ile E1'in (arayüz) **aynı koşuda** inmesi
gerekir (şartname §E). E1 bugün uygulanamadığı için **E2'yi tek başına koşuya sokmak
haritayı bozar**: iç içe tam bölgeler eski arayüzle üst üste çizilir.

---

## ① PAKET-0083-E — 5/7/10 günlük bant, ARAYÜZ yarısı

| # | Kalem | Kova | Niçin o kovada (ölçüm) |
|---|---|---|---|
| E1 | `ARAYUZ-BANT-TAM-1005.diff` YENİDEN ÜRETİLMELİ | **A → ✔ (W1)** | `--check` ileri **1** · geri **1**: ne uygulanabiliyor ne uygulanmış. 🔴 **DÜZELTME (W1 ölçtü, UMIT doğruladı):** sebep bağlam kayması DEĞİL. Depodaki blob **CRLF**, 156 CR. CR silinince ileri 0, ve 5 hunk'ın bağlamı değişmemiş. İlk gerekçem ("app.js değişti") ölçülmemiş bir çıkarımdı. W1 teslim etti: `ARAYUZ-BANT-TAM-1006.diff` (CR 0). Bir sonraki koşunun B kovasına girer. |
| E2 | `MOTOR-BANT-TAM-1005.diff` (bant = tam bölge) | **B** | `--check` ileri **0** · geri **1**: temiz, uygulanmamış. `uret_petek.py` tuzda ⇒ tam inşa koşusu. **E1 ile AYNI koşuda inmeli.** |
| E3 | Bantta görevli (vassal) 14 kayıt kendi rengiyle çiziliyor; ince eşleme için bant kaydına `cins` taşınmalı | **D** | Raporun kendi hükmü: "motor/tasarım kararı". Motor şemasına yeni alan = kapsam. |
| E4 | Bant açıkken etiket/kenar görünümü (etiketler 5 günlük konumda kalıyor) | **D** | GLM1 §7 ③: "Emre'ye sorulur". Görünüm tercihi. |
| E5 | Tarayıcıda GÖRSEL doğrulama | **C** | GLM1: "YAPILMADI", iki yama aynı koşuda inmeden anlamlı değil. Koşudan SONRA ölçülür. |

## ② DENETIMSIZ-ELLE-VERI — 14 elle yazılmış, kapısız dosya

| # | Kalem | Kova | Niçin o kovada (ölçüm) |
|---|---|---|---|
| K1 | `kucum-han` `devlet:"sibir"` | **✔** | main'de `devlet:"sibir-hanligi"`. Düzeltilmiş. |
| K2 | `abdulaziz-bin-suud` yanlış polity | **✔** | main'de `devlet:"suud-ucuncu"`. Düzeltilmiş. |
| P1 | `osman1` ölüm < saltanat sonu | **C** | main'de hâlâ `to:"1326-04"` · `olum:"1324-08-01"` (ölçüldü). Hangi ucun doğru olduğu kaynak ister (TDV `osman-gazi`). Kaynak açılmadan düzeltme yazılamaz. |
| P2 | Mükerrer `id`: `murad2` · `mehmed2` · `mustafa1` → `vefat_id:"mehmed2"` Fatih'i değil 1. saltanat kaydını buluyor | **A** | `vefatKisiBul` main'de hâlâ İLK eşleşmeyi döndürüyor (ölçüldü). Çare `js/app.js`te: aynı id'nin kayıtlarından ölüm gününü kapsayan/son saltanatı seçmek. id'leri yeniden adlandırmak öteki atıfları kırar, o yüzden önerilmez. UMIT yolu (`js/*.js`), motor dışı. Kartvizitteki görünür etkisi tarayıcıda GÖZLENMEDİ ⇒ işçi önce gözler. |
| P3 | `murad2` (sıra 6) `saltanat_yil:28` = iki saltanatın TOPLAMI; dosyanın geri kalanı saltanat BAŞINA | **A** | Tek alan, tek kayıt, kuralı dosyanın kendisi veriyor (23 → doğru değer). `data/padisahlar.js` koordinatörün dosyası ⇒ işçi DİFF yazar, uygulamaz. |
| K3 | `edigu` `devlet:"nogay"` ama ölüm 1420 < künye 1440 | **D** | Sınıf belirsiz (`D205`): `altinorda`ya bağlamak mı, künyeyi genişletmek mi? Rapor açıkça "koordinatörde" diyor. Künye penceresi = kapsam kararı. |
| SK | `savas_kunye_1.js` 7 tarafta eksik `devlet_id` (künyeleri VAR) | **D** | Dosya **yüklü ama okuyan kod YOK** (rapor §4, `SAVAS_KUNYE_1` hiçbir toplayıcıya düşmüyor). Doldurmanın görünür etkisi 0. Önce "bağlanacak mı" kararı (kapsam), sonra içerik. Mohaç künye ucu (1526-08-29 = savaş günü) da hüküm ister. |
| IT | `ittifaklar.js` yüklü, okuyan kod YOK | **D** | Aynı sınıf: bağlama kararı kapsamdır. İçerikte kusur 0. |
| S1 | `seferler_p0037` Abdülaziz'in Avrupa seyahati: `kaynak`/`id`/`devlet`/`taraf` alanı yok + `savaslar.js`teki kayıtla MÜKERRER | **A** | `app.js:5726` mükerreri zaten ayıklıyor ⇒ kaydın p0037'den çıkarılması görünür bir şey değiştirmez, veri tek yere iner. Diff işi (`data/` koordinatörün). |
| S3 | `seferler_p0071` `p0071-edirne-vakasi-1703` devlet/renk yok ⇒ Osmanlı varsayılıyor | **C** | `app.js` yorumu kaydı "Osmanlı DEĞİL" diye sayıyor. Hangi `devlet`/`taraf` yazılacağı (isyancı taraf künyesi var mı?) önce ölçülmeli, `devletler.js` taranmalı. |
| S4 | `sefer_ok_0075` iki ok (`misir-kavalali`) rengi çözülmüyor → Osmanlı koyusu çiziliyor | **B** | `kavalali` `renkler.py` BOYALAR'da VAR, üretilmiş `DEVLET_HARITA`da (584) YOK ⇒ renk koşu çıktısına girince çözülür. `renkler.py` tuzda. Koşudan SONRA yeniden ölçülür. |
| KB | `kisiler.js` 266/288 kayıt kaynaksız, `bulunamadı` beyanı da yok | **D** | `§4` ihlali ama 266 kalemlik bir kaynak kampanyası = öncelik/kapsam kararı. İki seçenek koordinatöre: (a) kampanya, (b) toplu `kaynak:"bulunamadı"` beyanı. (b) yalan değil, ama borcu görünmez yapar. |
| VY | `VERI-YAPISI.md:544` `kisiler.js` için 247 diyor, ölçülen 288 | **A** | Belge bayatlığı, tek sayı. Kök `*.md` koordinatörün ⇒ öneri olarak iletilir. |

## ③ ODAK-OLC-KOR-NOKTA — `odak_olc.py`nin devlet sekmesi körlüğü

| # | Kalem | Kova | Niçin o kovada (ölçüm) |
|---|---|---|---|
| O1 | `odak_cozum.js`e sekme dalı sınıflandırıcısı (`sekmeDali`): KIPIRDAMAZ / OKUNMAYAN / KUTU / GÖVDE | **A** | main'de `sekmeDali`/`SEKME_` geçişi **0** (ölçüldü) ⇒ yapılmamış. Yalnız araç kodu (`arac/`), motor tuzunda DEĞİL, koşu gerektirmez. UMIT yolu. ⚠️ Kapıya eklenecek yeni donmuş sayı (`SEKME_OKUNMAYAN = 1103`) **D'dir**, kod A'dır. İşçi sayıyı ÖNERİR, yazmaz. |
| O2 | Havuz: `SEHIR` yerine app.js'in `AD_KONUM`u (152 ad farkı, Ogaden "yanlış kirli") | **A** | Araç kodu. Kopyalamak değil, app.js bloğunu metinle kesip eval etmek (raporun yöntemi). ⚠️ `ODAK-TAVAN.json` `bilinen_kusur`dan Ogaden'in düşmesi tavan dosyasıdır ⇒ o satır **D**. |
| O3 | Evren: disk listesi yerine tarayıcı evreni (2975 görünmeyen + 2059 açılamayan madde doğru kovaya) | **A** | Araç kodu. Kesim işareti bulunamazsa ÇIKIŞ 2 (ölçülemedi) şartıyla. ⚠️ Bu değişiklik ODAKSIZ/BEYANLI sayılarını oynatır ⇒ yeni tabanın onayı **D**. |
| O4 | `maddeAc` HAM `m` veriyor → `odak_kimlik` sekmede hiç çözülmüyor (129 gizli vaka) | **A** | `js/app.js` tek satır: `kopyaMaddesi(d, m)` (zaten var, `app.js:14780`). Motor dışı, koşu istemez. UMIT yolu. Bugün görünür vaka 0. Ama C dalı bağlandığı gün 129 madde sessizce düşer ⇒ C dalından ÖNCE yapılmalı. |
| O5 | C dalı (`kapsam_genis` yok) `odak_*`/`yer_kon`u hiç okumuyor → **1103 madde** yazılı ama sekmede etkisiz | **D** | Raporun kendi hükmü: "ayrı bir ürün kararı". Kameranın davranışını değiştirmek görünür ürün değişikliği. |
| O6 | 16 `KRONOLOJI_*` değişkeni hiçbir künyeye bağlanmıyor (`_ANADOLU` 273 · `_DOGU_AFRIKA` 217 …) → **2059 madde** hiçbir ekranda açılamıyor | **D** | Bağlama hedefi (`anadolu` → hangi künye?) bir kapsam/model kararı. Konsol zaten "eşlenemedi" diyor. |
| O7 | 112 `OLAYLAR_*` maddesi iki parçalı sonek yüzünden Osmanlı listesine girmiyor (`_2S_0919` 71 …) | **C** | Kasıtlı mı (Değişmez 2 desteği, ekranda olmasın) bulunamadı ⇒ kronoloji sahibine SORULMALI. Cevap gelmeden ne düzeltme ne tavan. |
| O8 | `odak_olc.py` çıktısındaki "BEYANLI→yabancı — kamera OSMANLI kutusuna uçar" tarifi `kronoloji_*` maddeleri için YANLIŞ mekanizma | **D** | Metin düzeltmesi tek başına ucuz, ama `CLAUDE.md §9` aynı tarifi kural olarak taşıyor ⇒ kök belge değişikliği koordinatörde. O3 ile birlikte iner. |

## ④ KRONOLOJİ KAYNAK BORCU — Polonya 1915 · Kafkasya 1920-21

**Polonya** (`KASA-POLONYA-1005.md`):

| # | Kalem | Kova | Niçin o kovada (ölçüm) |
|---|---|---|---|
| PL-1 | 5 şehir (Częstochowa · Łódź · Kielce · Zamość · Varşova) kırılması + kronoloji | **✔** | `data/kronoloji_sinir_polonya_1915.js` main'de VAR. `KASA-POLONYA-1005-YERLESIM.diff` `--check` ileri 1 · **geri 0** ⇒ uygulanmış. |
| PL-2 | Kielce 1914 ara işgal pencereleri (3 pencere) | **✔** | Aynı diff'in parçası (KASA ölçümü: 2i +6 kırılma). Diff uygulanmış. |
| PL-3 | **Lublin** gün `bulunamadı` (aday 1915-07-30, Teatr NN 403/Cloudflare) | **C** | KASA'da tarayıcı yoktu. **UMIT'te uygulama içi tarayıcı VAR** ⇒ bu kalem UMIT'te ölçülebilir. |
| PL-4 | **Radom** yalnız AY (Temmuz 1915) | **C** | Gün kaynağı aranacak. "20 lipca 1915" kaynaksız arama özeti, kullanılmadı. |
| PL-5 | **Chełm** yalnız AY (Ağustos 1915) | **C** | "1 sierpnia" yalnız blog/forumda (kırmızı liste) ⇒ akademik/kurumsal gün aranacak. |
| PL-6 | Zamość: önce Alman (1915-07-01), Eylül 1915'ten Avusturya → ikinci pencere | **C** | Kaynak ay veriyor ("We wrześniu 1915"). İşgalci kimliği ayrımı isteniyor mu + gün? |
| PL-7 | Mükerrer madde 112 → **115** (tavan 113), 4 yanlış pozitif çift | **D** | KASA'nın çaresi `BILINEN_AYRI`ya 4 çift = `denetle.py`, koordinatörün dosyası. İstisna listesi tavan ailesidir. ⚠️ main'de bugün kaç olduğu ÖLÇÜLMEDİ: işçi önce `py arac/denetle.py` ile sayıyı alır. |
| PL-8 | Łódź: IPN 5 Aralık · iki akademik 6 Aralık farkı | **A** | Gün seçildi (6 Aralık). Fark ilgili maddenin `ic_not`una yazılır (`§4`: fark bildirilir). Tek madde metni, `data/kronoloji_sinir_polonya_1915.js` (KASA'nın dosyası) ⇒ diff. |

**Kafkasya** (`KASA-ERMENISTAN-1921-1005.md`):

| # | Kalem | Kova | Niçin o kovada (ölçüm) |
|---|---|---|---|
| KF-1 | 7 kaynaklı çıkış günü (Artvin 1921-02-27 · Posof/Şavşat/Hanak 1921-02-23 · Iğdır 1920-11-12 · Digor 1920-10-22 · Arpaçay 1920-11-03) | **B** | main'de **UYGULANMAMIŞ**. Ölçüldü: Artvin hâlâ `sovyet-rusya 1917-11-07 → 1921-10-13`. Veri kaynaklı ve hazır, ama `yerlesimler*` değişikliği haritada ancak koşudan sonra görünür. ⚠️ HAVVA koşusu başlamadan main'e girmezse bir koşu daha bekler. ⚠️ Kafkasya künyelerinin pencere içi olduğu KASA'da ölçülmüş (Ermenistan DC 1920-12-02, Gürcistan DC 1921-03-16). |
| KF-2 | TDV kendisiyle çelişiyor: Artvin 27 Şubat (`artvin`) ↔ 11 Mart (`acara`) | **C→A** | KASA'nın önerisi gerekçeli (şehrin kendi maddesi + "kesin olarak"). `§4` ⑥: üç gün kayda yazılır ⇒ seçim yapılmış, yazımı A. Kaynak çelişkisi yine de koordinatöre BİLDİRİLİR. |
| KF-3 | Digor 1920-10-22 tek kurumsal kaynak, düşmanı "Rus" diye yanlış adlandırıyor | **C** | Düşük güven. Akademik teyit aranmalı. |
| KF-4 | Borçka · Saylıca · Küçükperveli · Beri `bulunamadı` | **D** | KASA "komşu günü şartlı serbest" öneriyor (Saylıca↔Şavşat, Küçükperveli↔Arpaçay, Beri↔Iğdır). `§4` komşu günü hükmü koordinatörde. |
| KF-5 | 1918 ara katmanı (Brest-Litovsk sonrası Osmanlı dönüşü · Cenûb-ı Garbî Kafkas Hükûmeti · İngiliz işgali · Gürcü/Ermeni DC) — `sovyet-rusya` etiketi 1917-11 → 1920/21 arası SAHTE | **C** | KASA yer yer kaynaklayabileceğini söylüyor. Ayrı kampanya. KF-1 tek başına uygulanırsa delik açmaz ama sahte etiketi bırakır (raporun asgari biçimi). |

---

## 5. DAĞITIM ÖNERİSİ — A ve C kovaları, dosya ölçütüyle

Kural 1 (aynı dosya → aynı işçi) uygulandı. UMIT'te **14 canlı hazır kıta** var
(`ListAgents`: "Hazır kıta 0510 1850…1860" 11 + "2034" · "2035" · "Kita 0510 2036").
Kural 5 (iki kıta boş) ⇒ en çok 12'si kullanılır. Bu kümeye **7 işçi** yetiyor.

| İşçi | Kalemler | Dokunduğu dosyalar (ÜRÜN = diff/rapor) | Kova |
|---|---|---|---|
| W1 | E1 | `js/app.js` bant bölümü → `denetim/ARAYUZ-BANT-TAM-1006.diff` | A |
| W2 | P2 · O4 | `js/app.js` `vefatKisiBul` + `maddeAc` → `denetim/APP-VEFAT-ODAK-1006.diff` | A |
| W3 | O1 · O2 · O3 | `arac/odak_cozum.js` (+ `odak_olc.py` çıktı metni) → `denetim/ODAK-SEKME-1006.diff` | A |
| W4 | P3 · S1 · VY | `data/padisahlar.js` · `data/seferler_p0037.js` → `denetim/ELLE-VERI-DUZELT-1006.diff` | A |
| W5 | PL-3 · PL-4 · PL-5 · PL-6 · PL-8 | yalnız kaynak; çıktı `denetim/POLONYA-GUN-1006.md` (+ PL-8 diff) | C (+A) |
| W6 | KF-2 · KF-3 · KF-5 | yalnız kaynak; çıktı `denetim/KAFKAS-ARA-KATMAN-1006.md` | C |
| W7 | P1 · S3 · O7 | P1 TDV `osman-gazi` · S3 `devletler.js` tarama · O7 kronoloji sahibine soru → `denetim/ELLE-VERI-OLCUM-1006.md` | C |

🔴 **Çakışma uyarısı:** W1 ve W2 aynı dosyaya (`js/app.js`) diff yazıyor. Farklı işlevler
olsa da `④ ③` "sıralı yama çakışması" riski var. Kural 1'e harfiyen uyulursa ikisi
TEK işçiye gider. Önerim: **W1 ile W2 birleşsin** (6 işçi). Ayrı tutulacaksa ikisi de
GÜNCEL main'e karşı üretilir ve ardışık `--check` sınanır.

B kovası (E2 · S4 · KF-1) işçiye gitmez: koordinatörün koşu kararıdır. D kovası (11)
işçiye gitmez: aşağıda.

## 6. D KOVASI — genel koordinatöre taşınanlar

E3 vassal `cins` · E4 bant etiketi · K3 `edigu` sınıfı · SK `savas_kunye_1` bağlansın mı ·
IT `ittifaklar` bağlansın mı · KB 266 kaynaksız kişi (kampanya mı beyan mı) ·
O5 C dalı okusun mu · O6 16 bağlanmayan KRONOLOJI değişkeni · O8 `§9` metni ·
PL-7 `BILINEN_AYRI` 4 çift · KF-4 komşu günü (4 köy).
⊕ A kalemlerinden doğan D yan kararları: O1 yeni tavan `SEKME_OKUNMAYAN` · O2 Ogaden'in
`bilinen_kusur`dan düşmesi · O3 yeni ODAKSIZ/BEYANLI tabanı.

## 7. ÖLÇÜLEMEDİ / SINIRLAR
- Kalemlerin GÖRÜNÜR etkileri (kartvizit, ok rengi, kamera) tarayıcıda gözlenmedi. Raporların kod okumasına dayanıyor.
- PL-7 mükerrer sayısı main'de bugün ölçülmedi.
- Hazır kıtaların `list_events` mesaj sayısı ve `lastActivityAt` sıcaklığı **dağıtımdan ÖNCE** ölçülecek (`§7.3 ⑧`). Bu tasnif onları "boş" VARSAYMADI.
- `C:\atlas-umit` `.git` BUILTIN/Administrators sahipli: yönetici olmayan işçi git'i orada koşturursa "dubious ownership" alır. İşçilere `-c safe.directory=C:/atlas-umit` öğretilecek, global ayara dokunulmayacak.
