# UMIT-W42-SEHZADE-SUZGEC-1006 — kartvizit K2/K3 süzgeci (app.js:9397-9398)

**Ağaç:** atılabilir worktree `C:\atlas-w42`, `--detach origin/main` = **`d0877829`**
(HAZIR-KITA 3: HAZIRIM makineye BAGLI…). Düzeltme yapılmadı, diff yok.

## Öngörü (ölçümden önce yazıldı)
`kisiler.js`te `tur:"sehzade"` ve `tur:"valide"` yok ⇒ K2 = 0, K3 yalnız `hanedan`dan gelir.

## Ölçüm
| Soru | Sonuç |
|---|---|
| Süzgeç ne arıyor | `js/app.js:9397` K2: `k.tur === "sehzade"` · `:9398` K3: `k.tur === "valide" \|\| k.tur === "hanedan"` |
| `kisiler.js` `tur` değerleri (d0877829) | alim 24 · denizci 7 · edebiyatci 4 · **hanedan 3** · komutan 20 · mimar 4 · sadrazam 23 · siyasi 13 · vezir-pasa 9 · yabanci-hukumdar 168 · yabanci-komutan 13 — **`sehzade` 0 · `valide` 0** |
| Başka `data/` dosyasında `tur:"sehzade"/"valide"` | 0 dosya |
| Kişi tür sözlüğü `TUR_ADI` (`app.js:9125`) | `hanedan:"Hanedan"` var; **`sehzade`/`valide` YOK** |
| `git log -S'k.tur === "sehzade"' -- js/app.js` | tek commit `71826780` (2026-08-03, ARAYUZ 3 kartvizit paneli, r727) |
| O commit'te `kisiler.js` | aynı küme, `hanedan 3`, `sehzade`/`valide` **0** |
| `git log -S'tur:"sehzade"'` / `-S'tur:"valide"'` -- data/kisiler.js | **0 commit** — hiç var olmadı |
| `hanedan` kayıtları | `cem-sultan` (şehzade, taht rakibi) · `turhan-hatice-sultan` (vâlide) · `abdulmecid-efendi` (son halife) |

## Sınıf: **BEKLEYEN** (ne KIRIK ne tam ÖLÜ)
Süzgeç yanlış alanı aramıyor (`tur` doğru alan); aradığı DEĞER şemaya hiç girmedi.
Planlı olduğu belgeli: `oturumlar/ARAYUZ-3-SARTNAME.md:133-138` "iki ayrı `tur` değeri
açılsın (`sehzade` · `valide`), `TUR_ADI`ye iki satır eklenir" önerisi + `:329-` K2 için
9, K3 için 10 kayıt listesi ("TDV'den teyit edilmeden yazılmamalı"); `PADISAH-KARTVIZITI.md:170`
"K2 … 🔴 dizinde YOK, önce toplanacak". Arayüz önden yazıldı, veri hiç gelmedi.

## Kullanıcıya görünen etki
1. **K2 başlığı hiç görünmüyor** (boş sekme değil): `KV_KADEME.forEach` içinde
   `if (!grp.kisi.length) return;` — başlık sessizce atlanır. Kartvizitler sekmesinde K1, K3, K4, K5 var, K2 yok.
2. **K3 yanlış etiketli:** "K3 — Vâlide sultanlar ve hanedan kadınları (x/3 bağlı)" başlığı
   altında 3 kişiden **2'si erkek** — Cem Sultan (K2'nin asıl adayı) ve Abdülmecid Efendi.
   Bugün kullanıcının gördüğü gerçek kusur budur; K2'nin yokluğundan daha yanıltıcı.
3. `kisiler.js`te 0 kaydın `vefat_id`si var (grep) — K3 satırlarının tıklanabilirliği
   kronolojideki `vefat_id` dizinine bağlı, bu ölçümün kapsamı dışında.

## Gizli tuzak (veri gelirse) — ölçüldü
Dizin "Kişiler" sekmesi (`app.js:9147-9155`) yalnız `Object.keys(TUR_ADI)` üzerinden döner;
`TUR_ADI`de olmayan `tur` **sessizce elenir**. Bugün etkisiz (11 değerin 11'i sözlükte), ama
`tur:"sehzade"/"valide"` kayıtları `TUR_ADI`ye satır eklenmeden yazılırsa kartvizit K2/K3'te
görünür, **Kişiler sekmesinden kaybolur** — devlet dizininde (`app.js:9344-9378`, BULGU-TUR-SOZLUGU-0911)
zaten düzeltilmiş olan sınıfın aynısı.

## Bulunamadı
- W11'in "0 kayıt" ölçümünün kendisi görülmedi; aynı sonucu bağımsız buldum (K2 = 0).
- Tarayıcıda canlı ekran görüntüsü alınmadı; etki koddan + veriden çıkarıldı.

## Karar koordinatörde — seçenekler (önerim ①)
① **Veri ekle (önerilen, plan zaten bu):** `kisiler.js`e `sehzade`/`valide` türü + `TUR_ADI`ye iki
   satır; Cem Sultan `hanedan`→`sehzade`, Turhan Hatice `hanedan`→`valide` (Abdülmecid Efendi `hanedan`da kalır,
   K3 başlığından çıkar ya da başlık düzeltilir). Kayıtlar TDV teyitli yazılmalı (şartname uyarısı). `kisiler.js` sahibi ayrı.
② **Ara çare, yalnız app.js (küçük):** K3 başlığını "Vâlide sultanlar ve hanedan" yap ya da `hanedan`ı
   K3'ten çıkarıp ayrı göster — 2 erkeğin "hanedan kadınları" altında görünmesini bugün düzeltir; veri beklemez.
③ Kaldır: önermiyorum — plan belgeli, K2 kartın "en güçlü olduğu yer" (PADISAH-KARTVIZITI.md:187).
Her durumda `app.js:9150` Kişiler döngüsüne devlet dizinindeki "tanınmayan türü de göster" kalıbı eklenmeli.
