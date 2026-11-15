# BOLGE-CINHINDI-6-enklav-1115 — Çinhindi bölge denetimi, adım 6 (enklav/eksklav)

Ağaç: worktree `agent-a994e7b7a57a29cc9`, dal `umit-1115-bolge-cinhindi` (taban `origin/main` 8fb10bdf1). Ölçüm 15 Kasım 2026, UMIT.
Bölge tanımı (ölçüm kutusu): lat 7-23,8 / lon 92,3-109,6 → **128 yerleşim**; künye = bu yerleşimleri `s:` ile sahiplenen ve `bolge: guneydogu-asya` olan **58 künye** (`girdi.yukle` + `girdi.oku_devletler`). Madde evreni: `data/olaylar*.js` + `data/kronoloji*.js`, `OLAY_TARAF` eşlemesiyle: **295 madde** (201 tanesi 1281 öncesi, 94 tanesi 1281 sonrası).

**Önce oku — yöntem sınırı:** bu oturumda erişilen web aracı yalnız Vikipedi türevi sayfalar ve archive.org taramaları döndürdü; CLAUDE.md'ye göre Vikipedi tek dayanak olamaz. Akademik kaynakların (Wyatt, Baker-Phongpaichit, Harvey, Hall, Taylor, Coedès, Lieberman, Leider, TDV'nin Tayland/Vietnam/Burma maddeleri) sayfaları **okunmadı** (TDV Cloudflare, ticari kitaplar kapalı). Bu yüzden aşağıda "teyit edildi" yalnız **atlasın kendi kaynaklı kayıtlarının birbiriyle tutarlılığı** için kullanılır; dış teyit gerektiren her yer "OKUNMADI" diye işaretlidir. Veri düzeltmesi yazılmadı (bkz. adım 7).

## 1. Ölçülen
Bölgedeki 128 yerleşimin `s:`/`isg:`/`v:` alanları tarandı:
```
isg Mandalay ..1885-11-28 ingiltere
isg Taungdwingyi ..1885-11-28 ingiltere
isg Yenangyaung ..1885-11-28 ingiltere
isg Meiktila ..1885-11-28 ingiltere
isg Minbu ..1885-11-28 ingiltere
isg Pyinmana ..1885-11-28 ingiltere
Yuanjiang 1368-09-14..1382-04-14 kuzey-yuan True
Lin'an (Jianshui) 1368-09-14..1382-01-16 kuzey-yuan True
Mengzi 1368-09-14..1382-01-16 kuzey-yuan True
Kaihua (Wenshan) 1368-09-14..1382-01-16 kuzey-yuan True
```
- `eksklav:true` taşıyan pencere: **4** (Yuanjiang 1368-09-14..1382-04-14, Lin'an (Jianshui), Mengzi, Kaihua (Wenshan) — `kuzey-yuan`, Yunnan'ın Çin-Kuzey Yuan kalesi; Çinhindi kutusunun kuzey ucunda, bölgeye ait sayılmaz).
- `isg:` (işgal) kaydı: **6** — Mandalay, Taungdwingyi, Yenangyaung, Meiktila, Minbu, Pyinmana: 1885-11-28'e kadar `ingiltere` (3. Anglo-Birman Savaşı).
- `v:` (tâbi) kaydı: **0**.

## 2. Beklenen enklavlar ve karşılıkları
| enklav/eksklav | atlasta | karar |
|---|---|---|
| Fransız Kochinşin, Annam, Tonkin, Laos, Kamboçya (Hindiçini Birliği) | `fransiz-cinhindi` 46 pencere, tek künye | enklav değil, bütünlük içinde |
| Siyam'a bağlı Battambang/Angkor (1795-1907) | `siyam-chakri` penceresi 1795-1907 | **modellendi** (Angkor/Battambang 1795→1907-03-23) |
| İngiliz Burması içinde Şan beylikleri, Kengtung | `san-devletleri` → `ingiliz-burma` 1923-10-29 | modellendi (künye t 1923-10-29) |
| Portekiz/Hollanda/İngiliz ticaret kaleleri (Ayutthaya, Pegu, Hội An/Faifo, Tourane) | yok | **eksik** — Çinhindi ticaret faktörileri (Hội An Faifo yerleşimi var ama sahibi Nguyễn) enklav olarak modellenmedi; çekirdek dışı/kaynak okunmadı |
| Kra İstmusu/Malay Siyam eyaletleri 1943-08-20 | maddesi var (1943-08-20), yerleşimler kutu dışı (Maritim bölgede) | bu bölgenin değil |
| Sipsong Panna (Çiang Rung) — Çin/Birman ikili vasallık | `sipsong-panna` 1180-1950, 1 yerleşim | enklav değil; ikili bağlılık yok (kaynak okunmadı) |
| Champa kalıntısı Panduranga (1471-1832) | `campa` penceresi 1306'dan sonra Trần/Ming/Lê → Phan Rang sahibi? | Phan Rang (Panduranga) penceresi `campa` 1281-1832; Vijaya `lê` 1471'den sonra → **madde yok (1471)**; Panduranga eksklavı olarak Cham, ayrı künye yok |
| Mekong deltası Khmer-Nguyễn (Prey Nokor/Saygon 1698) | Saygon 1431-1698 `kamboc-kralligi`, 1698 `nguyen-beyligi` | modellendi (1698-01-01 yıl-temsilî) |

## 3. Değişmez 8 (şehir bölgesi ülke sınırını aşamaz)
Ana ağaçta ölçülemez (`coz-c` + motor çıktısı ister; denetle çıktısında "ölçülemedi" olarak raporlanır — çıkış kodu **2 temiz sayılmaz**). Bölge-özgü Değişmez 8 sayısı: **ölçülmedi**.

## 4. Sonuç
Enklav/eksklav modeli bölgede **asgari**; Hội An/Faifo, Pegu ve Ayutthaya'daki yabancı ticaret kolonileri ve Panduranga Cham kalıntısı modellenmemiş. Bunlar 1281-1923 çekirdeğinde küçük alanlar; kaynaksız ekleme yapılmadı.
