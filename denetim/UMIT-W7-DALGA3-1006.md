# UMIT-W7-DALGA3-1006 — madde · duygu · yer_id sayımlarının node ile düzeltmesi

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- Ekran `alt_kronoloji`yi: **GÖMÜLÜ** gösterir (ana maddenin detay kartında alt liste; olay listesinde ayrı satır değil) → 29 alt madde SAYILMAZ.
- Düzeltme sonrası (bugünkü veri değişmediyse): **madde 1768 · duygu 1418 · yer_id 1633 · vefat_id 27**.
- Diff seçimi: vefat_id yaması main'e İNMEDİYSE tek birleşik diff (eskisinin yerine), indiyse yalnız ardışık yeni diff.

**Öngörü ↔ ölçüm:** gömülü ✓ · madde 1768 ✓ · duygu 1418 ✓ · **yer_id 1633 ✗ → 1629** (4 madde `yer_id:""` taşıyor; ÖNGÖRMEDİM) · vefat_id 27 ✓ · birleşik diff ✓ (VEFAT main'e inmemişti).

Temel: worktree `C:\atlas-w7` = origin/main **6ba250497be30e37781aebad2e166b27d4cc9e8d**. `--yaz` YOK, commit YOK, yasaklı dört motor dosyasına dokunulmadı (diff'te 0 geçiş), worktree sonunda temiz.

## 1. EVREN — ekran `alt_kronoloji`yi nasıl gösteriyor (ölçüldü, `js/app.js`)
- Olay listesi `app.js:7035`te `Object.keys(window)` → `/^OLAYLAR(_[A-Za-z0-9]+)?$/` dizileri → `.reduce(concat)` ile **yalnız ÜST DÜZEY** elemanlardan kurulur. `alt_kronoloji` listeye girmez.
- `alt_kronoloji` yalnız `derinAdimlari()` (`app.js:15361`) → `derinDugmeGuncelle()`: ana maddenin detay kartında **"🔎 Olayın içine gir · N adım"** düğmesi; tıklanınca tam ekran "derin pencere"de **ADIM** listesi (`derin-liste`). Geçersiz adım (günsüz/kaynaksız/başlıksız) elenir.
- Veri: 29 adım, iki ana maddede (1453-05-29 ×14 · 1915-03-18 ×15); **29'u da** `derinAdimlari` süzgecinden geçiyor.
- ⇒ Hüküm uygulandı: ekran onları ayrı MADDE olarak göstermiyor → **madde/yer_id sayımına girmez**; `kronoloji_say.js` `alt_adim` olarak ayrı raporlar (bugün 29).
- ⚠️ YAN NOT (hüküm değil): aynı "görünmeyen madde değildir" ilkesi düz uygulanırsa O7'nin 112 maddesi (app.js süzgeci eliyor) ve `kapsam:"konu"` maddeleri (varsayılan kapalı) da düşer. Uygulamadım: evren `denetle.py olaylari_yukle` ile aynı tutuldu (Değişmez 2 çekirdeği, `OLAYLAR\w*`) — hükmün kapsamı yalnız `alt_kronoloji`ydi. Karar sizin.

## 2. Çözüm — `DURUM-TABLOSU-SAYIM-1006.diff` (LF, CR 0 · 3 dosya · 260+/10−)
- **YENİ `arac/kronoloji_say.js`** (node): her `data/olaylar*.js` dosyası tarayıcı gibi yüklenir (`new Function("window", …)`), `window.OLAYLAR\w*` dizilerinin üst düzey nesneleri sayılır. madde = nesne · duygu = `duygu` DİZİ · yer_id = `yer_id` DOLU · vefat_id = dolu. Dosya yüklenemezse ya da `OLAYLAR*` dizisi tanımlamazsa `{hata}` döner.
- **`arac/durum_tablosu.py`**: dört regex satırı → `kronoloji_say()`; `kronoloji_satiri()` hücreyi yazar. Hata yolları: node yok · sıfırdan farklı çıkış · kesik/ayrıştırılamayan JSON · verilen ↔ sayılan dosya sayısı tutmuyor · dosya listesi boş → hücre **"🔴 ÖLÇÜLEMEDİ — … (sebep)"**, hiçbir sayı yazılmaz, eski regex'e GERİ DÜŞÜLMEZ. (`--yaz` o durumda §1.5'e de ÖLÇÜLEMEDİ yazar — gerçeği.)
- **YENİ `denetim/ARAC-KRONO-SAY-SINAV-1006.py`**: iki yönlü sınav (aşağıda).
- `durum_tablosu.py --sina` (mevcut iç sınav) 9/9 ✓ — dokunulan yer o dallara girmiyor.
- **VEFAT-1006 ile ilişki — SEÇİM: BİRLEŞİK, eskisinin YERİNE GEÇER.** Gerekçe: node dört sayıyı birden doğru sayınca VEFAT'ın `_kod_iskeleti`i ölü kod olur; ardışık uygulamak bir yardımcıyı ekleyip hemen yetim bırakmak demekti. Ölçüldü: VEFAT uygulanmış ağaçta bu diff `--check` **RED** (`durum_tablosu.py:402`) ⇒ ikisi birlikte UYGULANMAZ; **VEFAT-1006 geri çekilmeli, yalnız SAYIM-1006 uygulanmalı.**
- `git apply --check`: temiz main'de İLERİ ✓ (GERİ ✗) · uygulanmış ağaçta GERİ ✓ (İLERİ ✗).

## 3. ÖNCE / SONRA (`py arac/durum_tablosu.py`, çıkış 0 / 0)
```
ÖNCE  | Kronoloji | **1774** madde · 1398 duygu etiketli · 1641 `yer_id` · 28 `vefat_id` |
SONRA | Kronoloji | **1768** madde · 1418 duygu etiketli · 1629 `yer_id` · 27 `vefat_id` |
```
`diff` → yalnız bu satır değişti.

## 4. İki yönlü sınav — `py denetim/ARAC-KRONO-SAY-SINAV-1006.py` → **SINAV 57/57**
- **YÖN 1 (yeni doğru sayar) + YÖN 2 (eski regex aynı vakada YANLIŞ):** dalga 2 üyeliğinin 19 gerçek-dosya vakası — olaylar.js madde 81 / yer_id 73 (alt adım) · ek17 vefat 1 (yorum) · ek5 yer_id 389 (yorum) · ok106 madde 7 / yer_id 7 (yorum) · sh110 madde 0 / duygu 0 · sk105 madde 0 (blok yorum) · ek8 madde 35 / duygu 8 / yer_id 16 (`{` ayrı satır) · kamerika 11/11/11 (JSON anahtarı) · ek21 duygu 4 · ek22 duygu 1 (`duygu: [`) · p0917taraf yer_id 4 · p0063 yer_id 9 (`yer_id:""`). Her biri iki satır: yeni = doğru ✓, eski ≠ doğru ✓.
  ⚠️ Zayıf iki vaka: p0917taraf/p0063'ün "doğru"su `eski − boş yer_id sayısı` diye TÜRETİLDİ (sabit değil); YÖN 2 orada kendiliğinden doğru. Öteki 17 vakanın doğrusu sabit sayı (node ölçümü, dalga 2).
- Sentetik eş (her kusur sınıfı tek dosyada: yorum · blok yorum · `d:` metninde alan adı · `https://` · `yer_id:""` · iç içe adım · ayrı satır `{` · JSON anahtarları · boş `duygu:[]`): madde 3 · duygu 2 · yer_id 2 · vefat_id 1 · alt_adim 1 — yeni ✓, eski dördünde de ≠ ✓.
- **YÖN 3 (ölçülemeyen → ÖLÇÜLEMEDİ, sayı YOK):** sözdizimi bozuk dosya · `OLAYLAR*` dizisi olmayan dosya · olmayan dosya · boş liste · kesik JSON · node çıkış 1 · eksik dosya sayımı · node bulunamadı — 8/8.

## 5. Bulunamayan / açık
- `yer_id:""` taşıyan 4 madde (p0063 1734-05-31 · p0917taraf 1886-01-01, 1892-01-01, 1906-10-01): sayılmadı. "Konum yok" beyanı mı, unutulmuş alan mı: ölçülmedi.
- "Kesim işareti" terimi için projede tanım bulunamadı (`arac/`, `CLAUDE.md` grep 0); kesik node çıktısı + dosya sayısı tutarsızlığı olarak yorumlandı.
