# DENETLE-STDOUT-1010 — `denetle.py` stdout satırı StringIO altında çöküyordu

Yazıcı: UMIT · 10 Ekim 2026 · taban `origin/main` `667e283a` (iş `397c00c6`da yapıldı;
aradaki tek commit yalnız `denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py`ye dokunuyor,
`denetle.py` iki uçta da aynı).

## Satır ve kusur
`arac/denetle.py:32-33` (yamasız):
```python
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
```
`contextlib.redirect_stdout(io.StringIO())` altında `StringIO.encoding` öznitelik olarak
VARDIR ve değeri `None`dır ⇒ getattr varsayılanı `""` devreye girmez ⇒
`None.lower()` → **AttributeError**, `denetle` içe aktarılamaz. Ölçüldü (sınav a):
`DUSTU AttributeError: 'NoneType' object has no attribute 'lower'`.
İkinci gizli kusur aynı blokta: `.lower()` geçilse bile StringIO'da `buffer` YOK ⇒
`TextIOWrapper(sys.stdout.buffer)` de düşerdi.

## Çare (en küçük, 1 satır → 2 satır koşul + 4 satır yorum)
```python
if ((getattr(sys.stdout, "encoding", None) or "").lower() not in ("utf-8", "utf8")
        and hasattr(sys.stdout, "buffer")):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
```
Buffer'ı olmayan akış (StringIO) zaten `str` taşır, sarılmaz; yakalama StringIO'da kalır.
Konsol / `> dosya` / boru yolunda koşul ve davranış değişmedi (sınav c, d).
`paketle.py:57`nin DURUM-TABLOSU-YUTMA-1009 yamasındaki `hasattr` deseninin aynısı.

## Sınav — `denetim/ARAC-DENETLE-STDOUT-SINAV-1010.py` (her soru TAZE alt süreçte)
Yamasız metin diske yazılmaz: yamalı dosyadaki blok bellekte eski iki satıra çevrilir ve
gerçek yolun `__file__`ı ile derlenir (KOK/sys.path/kardeş içe aktarım birebir; `arac/`a
dosya yazılmaz). Blok bulunamazsa çıkış 2 (ÖLÇÜLEMEDİ).

| Soru | Yön | Sonuç |
|---|---|---|
| a yamasız `redirect_stdout(StringIO)` altında içe aktarım | düşmeli | ✓ AttributeError (kusurun kanıtı) |
| b yamalı aynı koşul | geçmeli | ✓ içe aktarıldı, `sys.stdout is tampon`, Türkçe yakalandı |
| c `PYTHONHASHSEED=0` gerçek CLI `py arac/denetle.py > dosya` + çalıştırıcıda yamalı/yamasız `__main__` | birebir | ✓ çıkış CLI=2 yamalı=2 yamasız=2 · yamalı/yamasız **bayt-eşit** (30.904 bayt) · CLI/yamalı satır-eşit |
| d `PYTHONIOENCODING=cp1254` akışında `ğĞüÜşŞıİöÖçÇ` | korunmalı | ✓ UTF-8 baytlarıyla basıldı, yamalı = yamasız bayt bayt |

Tam koşu: `SONUÇ: 4 soru · 0 kaldı · 0 ölçülemedi`, çıkış 0 (~3,5 dk; c üç tam denetle
koşusu). `--hizli` c'yi atlar → çıkış 2 (atlanan soru temiz sayılmaz). Temiz `origin/main`
ağacında `git apply --check` ✓ ve uygulanmış ağaçta `--hizli` a/b/d ✓ yeniden ölçüldü.
UMIT'te çıkış 2 normaldir: D8 `devletler_harita.js YOK` (ölçülemedi kovası).

⚠️ (d) gerçek bir cp1254 KONSOL penceresi değil, `PYTHONIOENCODING=cp1254` ile cp1254
kodlamalı akıştır (alt süreç konsol açamaz). Kod yolu aynı: `encoding="cp1254"` + buffer
var ⇒ sarılır.

## Kalıp envanteri — `arac/*.py`, ADIYLA (denetle.py hariç; düzeltilmedi, "aynı sınıf, ayrı kalem")
**A — tıpatıp aynı kusur** (`getattr(sys.stdout,"encoding","").lower()` + koşulsuz
`.buffer`, modül düzeyi) — 15:
`_defter_sinav_ok102.py:38` · `_odenmis_sinav_ok102.py:31` · `_odunc_capraz_sh110.py:49` ·
`_yer_eslesme_ok102.py:58` · `denetle_anakronizm.py:32` · `denetle_bitisiklik.py:37` ·
`denetle_bosluk.py:60` · `denetle_eslesme.py:44` · `denetle_gorunur.py:44` ·
`denetle_gorunurluk.py:41` · `denetle_olcek.py:40` · `denetle_statu.py:49` ·
`denetle_tabiyet.py:52` · `denetle_tutarlilik.py:41` · **`denetle_yayin.py:48` (yayın kapısı — öncelikli)**

**B — modül düzeyinde koşulsuz `sys.stdout.reconfigure(...)`** (StringIO'da yok) — 68:
`_acik_dok.py:16` · `_acik_madde.py:11` · `_baglama_onsinav.py:35` · `_bk_nobetci.py:34` ·
`_bolge_sahip.py:17` · `_cok_satir_olc.py:10` · `_dunya_bosluk.py:32` · `_kapanma_hizi.py:13` ·
`_kategori_cakisma.py:19` · `_komsu_donem.py:13` · `_kopru_sinav.py:4` · `_maske_nokta_ara.py:15` ·
`_odunc_tarih.py:50` · `_paket_bayat.py:33` · `_paket_dokum.py:18` · `_paket_olc.py:11` ·
`_renksiz_kimlik.py:13` · `_sinir_hassasiyet.py:20` · `_tavan200_olc.py:17` · `_uc_renk_kisit.py:42` ·
`_yama_aile.py:16` · `_yama_indi_mi.py:15` · `adres_nobetci.py:43` · `altyapi_durum.py:40` ·
`bagli_delik.py:15` · `bayt_denetle.py:16` · `bekleyen_topla.py:32` · `bosluk_haritasi.py:54` ·
`calu_deney.py:26` · `defter.py:84` · `denetle_arayuz.py:43` · `denetle_kronoloji.py:44` ·
`donanim.py:37` · `durum_tahtasi.py:49` · `duyur.py:34` · `egim_olc.py:58` · `etiket.py:30` ·
`evren_dogrula.py:92` · `isal.py:46` · `kabuk_nobetci.py:64` · `kademe.py:56` ·
`kaynak_durum.py:71` · `kodla.py:63` · `koridor_olc.py:29` · `kos_ve_yayinla.py:37` ·
`kosu_girdi_bagla.py:30` · `kosu_yayin.py:38` · `kural_olc.py:72` · `kutu_dokum.py:31` ·
`kutu_olc.py:22` · `kutu_serit.py:22` · `maliyet.py:67` · `nicin_bos.py:45` · `olc_bayrak.py:13` ·
`olc_ekleyici.py:38` · `olc_kosu_suresi.py:18` · `olc_token.py:15` · `olcut.py:45` ·
`paketle.py:57` (**DURUM-TABLOSU-YUTMA-1009 yaması bunu düzeltiyor, `origin/main`e henüz inmemiş**) ·
`puan_alani.py:48` · `sunucu.py:33` · `tahta.py:76` · `uret_bosluk.py:53` ·
`viabundus_indir.py:67` · `viabundus_olc.py:34` · `yorum_temizle.py:27` ·
`yukseklik.py:65` (**TUZ — dokunulmaz, tam inşa koşusunu bekler**) · `yukseklik_indir.py:29`

**C — modül düzeyinde koşulsuz `sys.stdout = io.TextIOWrapper(sys.stdout.buffer, …)`** — 11:
`denetle_duygu.py:5` · `durum_tablosu.py:20` (**bilinen**, DURUM-TABLOSU-YUTMA-1009'da anıldı) ·
`kunye_olc.py:53` · `renk_olc.py:44` · `surum_damgala.py:12` · `uret_altlik.py:34` ·
`uret_bekleyenler.py:35` · `uret_devirler.py:40` · `uret_donemler.py:61` · `uret_duygu.py:9` ·
`uret_petek.py:53` (**TUZ — dokunulmaz**)

**Güvenli (StringIO'da düşmez):** `_bagli_mi.py:71` ve `kontrol_dogrula.py:26`
(`if sys.stdout.encoding and …` ⇒ None'da kısa devre).

**Girintili (işlev/blok içi) — içe aktarım yolunda olup olmadığı TEK TEK ÖLÇÜLMEDİ** — 20:
`_bekci_ayikla.py:31` · `_bekci_kosu7b_cikis.py:31` · `_konum_duzelt.py:33` ·
`_koordinator_bekcisi.py:40` · `_kosu_nabzi.py:22` · `_nobet.py:31` · `_pil_bekcisi.py:33` ·
`_sahiplik_uygula.py:91` · `_sinir_envanteri.py:35` · `_wa_uyar.py:50` · `ad_esanlam.py:278` ·
`bekci_olc.py:42` · `defter_hayalet.py:78` · `motor_esitlik.py:614` · `odak_olc.py:691` ·
`paket_coz.py:181` · `tahta_bekci.py:146` · `tahta_bekci.py:150` (stderr) ·
`tahta_sunucu.py:111` (stderr) · `tahta_yeni.py:33`

Envanter yöntemi: `arac/*.py` satır satır düzenli ifade (A: `^if getattr(sys.stdout, "encoding", "")\.lower\(\)`,
B: `^sys\.stdout\.reconfigure\(`, C: `^sys\.stdout = io\.TextIOWrapper\(sys\.stdout\.buffer`;
yorum satırları hariç). Sütun 0 = modül düzeyi. Çok satırlı ya da farklı yazımlı biçimler
(ör. `sys.stdout=...` boşluksuz, alt dizinler) bu taramaya girmez.

## Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** kusur gerçek (a), çare onu gideriyor (b), CLI çıktısı bayt-bayt aynı ve çıkış
  kodu 2=2=2 (c), cp1254 Türkçe davranışı aynı (d). Kalıp `arac/`ta 15 A + 68 B + 11 C =
  **94 modül düzeyi kopya** (+20 girintili, ölçülmedi). `denetle.py` modül düzeyinde bu
  sınıftan yalnız `girdi`yi içe aktarıyor; `paket_coz` (girintili, 181) ve shapely işlev içi.
- **Bulamadım:** girintili 20 satırın içe aktarımda koşup koşmadığı tek tek ölçülmedi.
  Gerçek bir cp1254 konsol penceresinde koşu yapılmadı (akış eşdeğeri ölçüldü).
- **İstiyorum:** ① yamanın inişi (tuzda DEĞİL — `denetle.py` tuz dört dosyasından değil;
  **koşu sürerken inebilir**, motor parmak izini değiştirmez). ② A sınıfı 15 dosya, özellikle
  `denetle_yayin.py:48`, için ayrı kalem (aynı iki satırlık çare, toplu düzeltmede
  `replace(…,1)`/sed değil dosya başına ölçülü yama). ③ B/C için tek ortak yardımcı
  (ör. `arac/_akis.py: utf8_stdout()`) önerisi — karar koordinatörde; `uret_petek.py` ve
  `yukseklik.py` tuz olduğu için tam inşa koşusuna kalır.

## Teslim
- `C:\atlas-umit\denetim\DENETLE-STDOUT-1010.diff` — `origin/main`e karşı, LF, BOM yok,
  CR 0, 8.591 bayt; temiz ağaçta `git apply --check` ✓.
- Worktree'ler (`C:\atlas-umit-dstd`, `C:\atlas-umit-dchk`) kaldırıldı. Commit/push YOK.

YENİ DOSYALAR: `denetim/ARAC-DENETLE-STDOUT-SINAV-1010.py` (diff içinde) ·
`denetim/DENETLE-STDOUT-1010.diff` · `denetim/DENETLE-STDOUT-1010.md`
DEĞİŞEN: `arac/denetle.py` (diff içinde, satır 32-33 → 32-38)
