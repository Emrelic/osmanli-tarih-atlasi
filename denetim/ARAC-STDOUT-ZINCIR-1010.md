# ARAC-STDOUT-ZINCIR-1010 — 94 + 20 stdout kopyasının KOVASI (ön ölçüm, `_utf8.py`den ÖNCE)

Yazıcı: UMIT · 10 Ekim 2026 · ölçülen ağaç `origin/main` **`65b8965d`** (ayrık worktree, iş sonunda
kaldırıldı). **Statik ölçüm** — hiçbir araç bu ölçüm için koşturulmadı; tek yürütülen kod scratch'teki
kendi AST/regex okuyucum. `arac/`a ve `data/`ya dokunulmadı.

## 0. Kısa hüküm

| Küme | 🔴 kapı (aynı süreç) | 🔴ₛ kapı hattı (alt süreç) | 🟡 elle | ⚪ ölü | toplam |
|---|---|---|---|---|---|
| 94 modül düzeyi kopya (A 15 · B 68 · C 11) | **7** | **8** | **51** | **28** | 94 |
| 20 girintili satır | 4 | 0 | 10 | 6 | 20 |

**Envanter yeniden ölçüldü:** `65b8965d`de A **15** · B **68** · C **11** (DENETLE-STDOUT-1010'un
sayısının aynısı; `denetle.py` artık A'da değil — yaması indi). Aynı üç düzenli ifade, yorum satırı hariç.

**20 girintili satırın HİÇBİRİ StringIO altında içe aktarımı düşürmez** (§3): 10'u
`if hasattr(sys.stdout, "reconfigure")` korumalı (`io.StringIO`da `reconfigure` YOK — ölçüldü,
`hasattr(io.StringIO(),'reconfigure') = False`), 6'sı modül düzeyinde `try/except Exception`,
2'si `main()` içinde `try` altında, 2'si yalnız `if __name__ == "__main__"` altında (içe aktarımda koşmaz).
⇒ girintili 20 **yardımcıya taşınmak zorunda değil**; borç değil.

🆕 **ÖLÇÜMDEN SONRA `main` İLERLEDİ** (`git fetch`: `68bcd6c0`): `7a613d9e` DURUM-TABLOSU-YUTMA-1009'u
indirdi ⇒ **`paketle.py:57` KAPANDI** (`if hasattr(sys.stdout, "reconfigure")` korumalı; B düzenli ifadesine
artık uymaz). Arada `arac/`ta değişen yalnız `paketle.py` + `_bagli_mi.py` (stdout satırı yok).
⇒ **bugünkü açık sayı 93: A 15 · B 67 · C 11**; 🔴 kovası 7 → **6**. Tablo `65b8965d` ölçümüdür,
`paketle` satırı ✅ ile işaretlendi; "önce 10" `68bcd6c0`a göre kuruldu.

## 1. Kovaların ölçütü (ve hangi alanın YALAN söyleyeceği)

- **Kökler** (koordinatör ④'nün listesi): `denetle` · `denetle_yayin` · `renk_olc` · `odak_olc` ·
  `durum_tablosu` · `paketle` (sina) · `kaynak_durum` · `tahta` · `tahta_bekci`.
- 🔴 **kapı (aynı süreç)** = kökün kendisi ya da kökün **içe aktarım kapanışı** (AST `import`/`from`,
  işlev içi dahil). Bu yolda kusur GERÇEKTİR: kapı `redirect_stdout(StringIO)` altında içe aktarılırsa
  (sınavlar, `durum_tablosu`nun `denetle_yayin`e gömülmesi gibi) satır içe aktarımı düşürür; C sınıfında
  ayrıca çift `TextIOWrapper` tamponu KAPATIR (`denetle_yayin.py:1774-1797`deki ders).
- 🔴ₛ **kapı hattı (alt süreç)** = `kos_ve_yayinla.py`nin (koşu+yayın hattı; `denetle` + `denetle_yayin`ı
  koşturan, `.ps1`/`.bat` ile başlatılan) `subprocess` ile koşturduğu araçlar ve onların içe aktarım
  kapanışı. Çökerse hattı düşürür, AMA alt sürecin stdout'u gerçek bir dosya tanıtıcısıdır ⇒ **StringIO
  kusuru orada TETİKLENMEZ.** Ayrı tutuldu çünkü öncelik sırasını değiştirir. Kök listesinde
  `kos_ve_yayinla` yoktu; LAB-YALAN0-RISK-1010 §0 onu zincir kökü sayıyor — bu yüzden ayrı kova.
- 🟡 **elle** = kapı zincirinde değil, ama kod (arac/ · denetim/ · .bat/.ps1/.js — docstring/yorum HARİÇ
  dizge ya da `import`) ya da **yaşayan belge** (`CLAUDE.md`, kök `*.md`, `oturumlar/*.md` — `TAHTA*`
  hariç) onu adıyla anıyor.
- ⚪ **ölü** = hiçbir kod onu içe aktarmıyor/adıyla anmıyor VE hiçbir yaşayan belge anmıyor.
  ⚠️ ⚪ "statik olarak çağıranı yok" demektir; bir oturumun TAHTA mesajından elle koşturması görünmez.
- ⚠️ **Sezgisel "dizge" kenarı kapı hükmüne GİRMEDİ.** İlk geçişte `"x.py"` geçen her dizgeyi kenar
  saydım ve 9 araç köklere yalnız böyle bağlandı — **hiçbiri gerçek çağrı değildi** (6'sı ayrıca `kos_ve_yayinla` alt süreci olarak 🔴ₛ'ye girdi, 3'ü — `maliyet` · `yukseklik_indir` · `_sahiplik_uygula` — 🟡; ör. `denetle_yayin.py:249-251` `{"data/altlik.js": "uret_altlik.py"}`
  yalnız bayatlık mesajı; `denetle.py:937` docstring; `uret_petek.py:724` "CARE: py arac/yukseklik_indir.py"
  mesajı). Kapı kenarları **kod okunarak** doğrulandı: köklerin `subprocess` çağrıları yalnız
  `git`/`node` + `durum_tablosu.py:679 → arac/denetle.py` + `kaynak_durum.py:169 → denetim/ARAC-MOTOR-ENV-KAPI-1006.py`.
  🟡/⚪ ayrımında dizge kenarı DURUYOR (zayıf kanıt — "biri anıyor").
- **LAB grafiğiyle fark:** LAB-YALAN0-RISK-1010 §2 köklerden `denetle_eslesme · denetle_statu ·
  denetle_kapsama · denetle_anakronizm`a erişim yazıyor; `denetle.py`deki bu adların HEPSİ yorum/docstring
  (866, 1022, 1897, 1974, 2186-2196, 2435, 4605, 4806 — `denetle.py:2192` "denetle_eslesme'yi IMPORT
  ETMİYORUM" diyor). ⇒ A sınıfının 14'ü (denetle_yayin hariç) kapı zincirinde DEĞİL. LAB'ın sorusu
  (31 denetim/ aracı) farklıydı; bu ölçüm arac/ grafiğini sıfırdan değil, LAB'ın kök listesini alarak kurdu.

## 2. 94 modül düzeyi kopya

| dosya:satır | sınıf | kova | kim çağırıyor / anıyor | tuz |
|---|---|---|---|---|
| `_defter_sinav_ok102.py:38` | A | ⚪ | — |  |
| `_odenmis_sinav_ok102.py:31` | A | ⚪ | — |  |
| `_odunc_capraz_sh110.py:49` | A | 🟡 | denetim/öteki kod 1 (ARAC-UFUK-SABITI-1004.py[dizge]) |  |
| `_yer_eslesme_ok102.py:58` | A | 🟡 | denetim/öteki kod 1 (ARAC-UFUK-SABITI-1004.py[dizge]) · yaşayan belge 1 anış |  |
| `denetle_anakronizm.py:32` | A | 🟡 | arac: denetle_tutarlilik.py[import] · denetim/öteki kod 1 (ARAC-GUN-SAYACI-ENVANTER-1009.py[dizge]) · yaşayan belge 18 anış |  |
| `denetle_bitisiklik.py:37` | A | 🟡 | denetim/öteki kod 1 (ARAC-DONEMLER-OKUYUCU-SINAV-1004.py[dizge]) · yaşayan belge 3 anış |  |
| `denetle_bosluk.py:60` | A | 🟡 | denetim/öteki kod 1 (ARAC-DONEMLER-OKUYUCU-SINAV-1004.py[dizge]) · yaşayan belge 10 anış |  |
| `denetle_eslesme.py:44` | A | 🟡 | arac: _defter_sinav_ok102.py[import], _odenmis_sinav_ok102.py[import] · denetim/öteki kod 2 (ARAC-GUN-SAYACI-ENVANTER-1009.py[dizge], ARAC-UFUK-SABITI-1004.py[dizge]) · yaşayan belge 4 anış |  |
| `denetle_gorunur.py:44` | A | 🟡 | denetim/öteki kod 2 (ARAC-GUN-SAYACI-ENVANTER-1009.py[dizge], ARAC-UFUK-SABITI-1004.py[dizge]) · yaşayan belge 1 anış |  |
| `denetle_gorunurluk.py:41` | A | 🟡 | denetim/öteki kod 1 (ARAC-DONEMLER-OKUYUCU-SINAV-1004.py[dizge]) · yaşayan belge 5 anış |  |
| `denetle_olcek.py:40` | A | 🟡 | yaşayan belge 1 anış |  |
| `denetle_statu.py:49` | A | 🟡 | denetim/öteki kod 3 (ARAC-GUN-SAYACI-ENVANTER-1009.py[dizge], ARAC-UFUK-SABITI-1004.py[dizge] …) · yaşayan belge 11 anış |  |
| `denetle_tabiyet.py:52` | A | ⚪ | — |  |
| `denetle_tutarlilik.py:41` | A | ⚪ | — |  |
| `denetle_yayin.py:48` | A | 🔴 | KÖK (yayın kapısı); kos_ve_yayinla:324 alt süreç |  |
| `_acik_dok.py:16` | B | ⚪ | — |  |
| `_acik_madde.py:11` | B | 🟡 | yaşayan belge 3 anış |  |
| `_baglama_onsinav.py:35` | B | 🟡 | yaşayan belge 13 anış |  |
| `_bk_nobetci.py:34` | B | 🟡 | yaşayan belge 1 anış |  |
| `_bolge_sahip.py:17` | B | ⚪ | — |  |
| `_cok_satir_olc.py:10` | B | ⚪ | — |  |
| `_dunya_bosluk.py:32` | B | 🟡 | yaşayan belge 4 anış |  |
| `_kapanma_hizi.py:13` | B | ⚪ | — |  |
| `_kategori_cakisma.py:19` | B | ⚪ | — |  |
| `_komsu_donem.py:13` | B | ⚪ | — |  |
| `_kopru_sinav.py:4` | B | ⚪ | — |  |
| `_maske_nokta_ara.py:15` | B | ⚪ | — |  |
| `_odunc_tarih.py:50` | B | 🟡 | denetim/öteki kod 1 (ARAC-UFUK-SABITI-1004.py[dizge]) · yaşayan belge 1 anış |  |
| `_paket_bayat.py:33` | B | ⚪ | — |  |
| `_paket_dokum.py:18` | B | 🟡 | yaşayan belge 2 anış |  |
| `_paket_olc.py:11` | B | ⚪ | — |  |
| `_renksiz_kimlik.py:13` | B | ⚪ | — |  |
| `_sinir_hassasiyet.py:20` | B | ⚪ | — |  |
| `_tavan200_olc.py:17` | B | 🟡 | denetim/öteki kod 1 (ARAC-DONEMLER-OKUYUCU-SINAV-1004.py[dizge]) · yaşayan belge 1 anış |  |
| `_uc_renk_kisit.py:42` | B | ⚪ | — |  |
| `_yama_aile.py:16` | B | ⚪ | — |  |
| `_yama_indi_mi.py:15` | B | 🟡 | denetim/öteki kod 1 (ARAC-YALAN-DAMGA-YERYAMA-1006.py[dizge]) |  |
| `adres_nobetci.py:43` | B | 🔴ₛ | kos_ve_yayinla:336 alt süreç |  |
| `altyapi_durum.py:40` | B | 🟡 | yaşayan belge 2 anış |  |
| `bagli_delik.py:15` | B | 🟡 | yaşayan belge 1 anış |  |
| `bayt_denetle.py:16` | B | 🟡 | yaşayan belge 8 anış |  |
| `bekleyen_topla.py:32` | B | ⚪ | — |  |
| `bosluk_haritasi.py:54` | B | 🟡 | yaşayan belge 5 anış |  |
| `calu_deney.py:26` | B | 🟡 | arac: puan_alani.py[dizge] |  |
| `defter.py:84` | B | 🟡 | arac: defter_hayalet.py[dizge], kural_olc.py[dizge] · denetim/öteki kod 1 (ARAC-TASIMA-0922.py[dizge]) · yaşayan belge 7 anış |  |
| `denetle_arayuz.py:43` | B | 🟡 | arac: kosu_yayin.py[dizge] · denetim/öteki kod 2 (ARAC-ARAYUZ-YETIM-KAPANIS-SINAV-1006.py[dizge], SINAV-KOSU8-ZINCIR-0907.py[dizge]) · yaşayan belge 2 anış |  |
| `denetle_kronoloji.py:44` | B | 🟡 | arac: kosu_yayin.py[dizge] · denetim/öteki kod 1 (SINAV-KOSU8-ZINCIR-0907.py[dizge]) · yaşayan belge 37 anış |  |
| `donanim.py:37` | B | 🟡 | yaşayan belge 1 anış |  |
| `durum_tahtasi.py:49` | B | 🟡 | yaşayan belge 1 anış |  |
| `duyur.py:34` | B | 🟡 | denetim/öteki kod 1 (ARAC-DUYUR-MUKERRER-SINAV-1006.py[dizge]) · yaşayan belge 2 anış |  |
| `egim_olc.py:58` | B | 🟡 | yaşayan belge 4 anış |  |
| `etiket.py:30` | B | ⚪ | — |  |
| `evren_dogrula.py:92` | B | ⚪ | — |  |
| `isal.py:46` | B | 🟡 | arac: etiket.py[dizge], etiket.py[import] · yaşayan belge 7 anış |  |
| `kabuk_nobetci.py:64` | B | 🟡 | arac: kural_olc.py[dizge] · yaşayan belge 3 anış |  |
| `kademe.py:56` | B | 🟡 | arac: kural_olc.py[dizge] · yaşayan belge 1 anış |  |
| `kaynak_durum.py:71` | B | 🔴 | KÖK; tahta_bekci:388 içe aktarır |  |
| `kodla.py:63` | B | 🔴 | denetle_yayin:1877 + _bagli_mi:163 içe aktarır (işlev içi) |  |
| `koridor_olc.py:29` | B | 🟡 | arac: kural_olc.py[dizge] · yaşayan belge 5 anış |  |
| `kos_ve_yayinla.py:37` | B | 🔴ₛ | koşu+yayın hattının kendisi (denetle + denetle_yayin'i koşturur); .ps1/.bat başlatır |  |
| `kosu_girdi_bagla.py:30` | B | ⚪ | — |  |
| `kosu_yayin.py:38` | B | 🟡 | denetim/öteki kod 2 (KOSU-BASLAT.bat[betik/js], SINAV-KOSU8-ZINCIR-0907.py[dizge]) · yaşayan belge 8 anış |  |
| `kural_olc.py:72` | B | 🟡 | arac: kabuk_nobetci.py[dizge] · yaşayan belge 1 anış |  |
| `kutu_dokum.py:31` | B | 🟡 | yaşayan belge 1 anış |  |
| `kutu_olc.py:22` | B | ⚪ | — |  |
| `kutu_serit.py:22` | B | ⚪ | — |  |
| `maliyet.py:67` | B | 🟡 | arac: _guzergah_ok106.py[import], yukseklik.py[dizge], yukseklik_indir.py[dizge] · yaşayan belge 3 anış |  |
| `nicin_bos.py:45` | B | 🟡 | arac: evren_dogrula.py[dizge], kutu_olc.py[import], olc_ekleyici.py[import] |  |
| `olc_bayrak.py:13` | B | 🟡 | yaşayan belge 3 anış |  |
| `olc_ekleyici.py:38` | B | ⚪ | — |  |
| `olc_kosu_suresi.py:18` | B | ⚪ | — |  |
| `olc_token.py:15` | B | 🟡 | yaşayan belge 3 anış |  |
| `olcut.py:45` | B | 🟡 | yaşayan belge 2 anış |  |
| `paketle.py:57` | B | 🔴 ✅ KAPANDI `7a613d9e` | KÖK (sina); denetle_yayin:1091,1909 + _bagli_mi:195 içe aktarır |  |
| `puan_alani.py:48` | B | 🟡 | yaşayan belge 1 anış |  |
| `sunucu.py:33` | B | 🟡 | denetim/öteki kod 1 (ARAC-TASIMA-0922.py[dizge]) · yaşayan belge 2 anış |  |
| `tahta.py:76` | B | 🔴 | KÖK (tahta zinciri) |  |
| `uret_bosluk.py:53` | B | 🟡 | yaşayan belge 1 anış |  |
| `viabundus_indir.py:67` | B | 🟡 | arac: viabundus_olc.py[dizge] · yaşayan belge 1 anış |  |
| `viabundus_olc.py:34` | B | 🟡 | yaşayan belge 1 anış |  |
| `yorum_temizle.py:27` | B | 🟡 | arac: kural_olc.py[dizge] · yaşayan belge 11 anış |  |
| `yukseklik.py:65` | B | 🔴ₛ | uret_petek:708 içe aktarır (uret_petek alt sürecinde) | 🧂 TUZ — partiyi bekler |
| `yukseklik_indir.py:29` | B | 🟡 | arac: bosluk_haritasi.py[dizge], egim_olc.py[dizge], kural_olc.py[dizge], maliyet.py[dizge] … · yaşayan belge 1 anış |  |
| `denetle_duygu.py:5` | C | ⚪ | — |  |
| `durum_tablosu.py:20` | C | 🔴 | KÖK; denetle_yayin:1788 içe aktarır (detach korumalı) |  |
| `kunye_olc.py:53` | C | 🟡 | yaşayan belge 9 anış |  |
| `renk_olc.py:44` | C | 🔴 | KÖK (CLAUDE.md §9 veri değiştiyse ŞART); kos_ve_yayinla:292 alt süreç |  |
| `surum_damgala.py:12` | C | 🔴ₛ | kos_ve_yayinla:320 alt süreç |  |
| `uret_altlik.py:34` | C | 🔴ₛ | kos_ve_yayinla:287 alt süreç |  |
| `uret_bekleyenler.py:35` | C | 🔴ₛ | kos_ve_yayinla:289 alt süreç |  |
| `uret_devirler.py:40` | C | 🔴ₛ | kos_ve_yayinla:271 alt süreç |  |
| `uret_donemler.py:61` | C | 🟡 | arac: evren_dogrula.py[dizge] · denetim/öteki kod 2 (ARAC-DONEMLER-OKUYUCU-SINAV-1004.py[dizge], ARAC-UFUK-SABITI-1004.py[dizge]) · yaşayan belge 2 anış |  |
| `uret_duygu.py:9` | C | ⚪ | — |  |
| `uret_petek.py:53` | C | 🔴ₛ | kos_ve_yayinla:265 alt süreç | 🧂 TUZ — partiyi bekler |

## 3. 20 girintili satır — hangi koşulda koşuyor

| dosya:satır | sınıf | kova | kim çağırıyor / anıyor | tuz | koşul (AST) |
|---|---|---|---|---|---|
| `_bekci_ayikla.py:31` | G | ⚪ | — |  | if hasattr(sys.stdout, 'reconfigure') |
| `_bekci_kosu7b_cikis.py:31` | G | 🟡 | yaşayan belge 1 anış |  | try ⊂ if hasattr(sys.stdout, 'reconfigure') |
| `_konum_duzelt.py:33` | G | ⚪ | — |  | if hasattr(sys.stdout, 'reconfigure') |
| `_koordinator_bekcisi.py:40` | G | 🟡 | yaşayan belge 1 anış |  | if hasattr(sys.stdout, 'reconfigure') |
| `_kosu_nabzi.py:22` | G | ⚪ | — |  | if hasattr(sys.stdout, 'reconfigure') |
| `_nobet.py:31` | G | 🟡 | yaşayan belge 1 anış |  | if hasattr(sys.stdout, 'reconfigure') |
| `_pil_bekcisi.py:33` | G | ⚪ | — |  | if hasattr(sys.stdout, 'reconfigure') |
| `_sahiplik_uygula.py:91` | G | 🟡 | arac: denetle_yayin.py[dizge], girdi.py[dizge] · denetim/öteki kod 14 (ARAC-DEGISMEZ3-KDYAMA-0907.py[dizge], ARAC-KOSU13-BIRLESTIR-0917.py[dizge] …) · yaşayan belge 28 anış |  | if hasattr(sys.stdout, 'reconfigure') |
| `_sinir_envanteri.py:35` | G | 🟡 | yaşayan belge 3 anış |  | if hasattr(sys.stdout, 'reconfigure') |
| `_wa_uyar.py:50` | G | ⚪ | — |  | if hasattr(sys.stdout, 'reconfigure') |
| `ad_esanlam.py:278` | G | 🟡 | arac: _bk_nobetci.py[import] · denetim/öteki kod 1 (ARAC-LISTE-BAYAT-1004.py[dizge]) |  | if __name__=='__main__' |
| `bekci_olc.py:42` | G | 🟡 | denetim/öteki kod 2 (ARAC-BEKCI-KIMLIK-SINAV-1006.py[dizge], ARAC-BEKCI-NABIZ-SINAV-1003.py[dizge]) · yaşayan belge 12 anış |  | try |
| `defter_hayalet.py:78` | G | 🟡 | yaşayan belge 3 anış |  | try |
| `motor_esitlik.py:614` | G | 🟡 | denetim/öteki kod 2 (ARAC-DONEMLER-OKUYUCU-SINAV-1004.py[import_module], ARAC-NEGATIF-YIL-B-SINAV-1010.py[dizge]) · yaşayan belge 2 anış |  | try ⊂ işlev main() |
| `odak_olc.py:691` | G | 🔴 | KÖK; denetle_yayin:1847 içe aktarır (işlev içi) |  | try ⊂ işlev main() |
| `paket_coz.py:181` | G | 🔴 | denetle:5149,6328 + odak_olc:176 içe aktarır (işlev içi) |  | if __name__=='__main__' |
| `tahta_bekci.py:146` | G | 🔴 | KÖK (tahta zinciri) |  | try |
| `tahta_bekci.py:150` | G | 🔴 | KÖK (tahta zinciri) |  | try |
| `tahta_sunucu.py:111` | G | 🟡 | denetim/öteki kod 2 (ARAC-API-AD-SINAV-1009.py[dizge], ARAC-TAHTA-SUNUCU-YAZMA-SINAV-1009.py[dizge]) · yaşayan belge 1 anış |  | try |
| `tahta_yeni.py:33` | G | ⚪ | — |  | try |

Koşul özeti: `if hasattr(sys.stdout,'reconfigure')` **10** (içe aktarımda koşar, StringIO'da atlanır) ·
modül düzeyi `try/except Exception` **6** (`bekci_olc` · `defter_hayalet` · `tahta_bekci`×2 · `tahta_sunucu` ·
`tahta_yeni`; içe aktarımda koşar, hata yutulur) · `main()` içinde `try` **2** (`motor_esitlik` · `odak_olc`;
yalnız `main()` çağrılınca) · `if __name__ == "__main__"` **2** (`ad_esanlam` · `paket_coz`; yalnız CLI,
içe aktarımda HİÇ koşmaz). `tahta_bekci:150` ve `tahta_sunucu:111` stderr'dir.
⇒ **20'nin 20'si StringIO altında içe aktarımı düşürmez.** (Statik: modüllerin geri kalanı içe aktarımda
başka şey yapabilir — o bu sorunun dışında; bekçi dosyaları sonsuz döngü kurabildiği için dinamik
içe aktarım sınavı bilerek KOŞULMADI.)

## 4. "ÖNCE düzeltilecek 10" önerisi (A 15 hariç — onlar ARAC-STDOUT-A-1010'da)

Sıra ölçütü: ① aynı süreçte kapıya giren (🔴) önce · ② içe aktarılanlar köklerden önce (başkasının
sürecini öldürür) · ③ C (çift sarmalayıcı tampon kapatır) B'den önce · tuz dışı.

| # | dosya:satır | sınıf | kova | neden önce |
|---|---|---|---|---|
| 1 | `durum_tablosu.py:20` | C | 🔴 | `denetle_yayin:1788` içe aktarıyor; C koşulsuz yeniden sarar ⇒ tampon kapanma sınıfı (`denetle_yayin` bunu `detach()` ile elle örtüyor — örtü, çare değil) |
| 2 | `kodla.py:63` | B | 🔴 | `denetle_yayin:1877` + `_bagli_mi:163` içe aktarıyor |
| 3 | `kaynak_durum.py:71` | B | 🔴 | `tahta_bekci:388` içe aktarıyor (bekçi süreci) |
| 4 | `renk_olc.py:44` | C | 🔴 | kök (CLAUDE.md §9 ŞART); C |
| 5 | `tahta.py:76` | B | 🔴 | kök; her oturumun tek kanalı — sınavları `redirect_stdout` ile yazılabilir |
| 6 | `surum_damgala.py:12` | C | 🔴ₛ | yayın hattı (`kos_ve_yayinla:320`), C |
| 7 | `uret_devirler.py:40` | C | 🔴ₛ | yayın hattı (`kos_ve_yayinla:271`), C |
| 8 | `uret_altlik.py:34` | C | 🔴ₛ | yayın hattı (`kos_ve_yayinla:287`), C |
| 9 | `uret_bekleyenler.py:35` | C | 🔴ₛ | yayın hattı (`kos_ve_yayinla:289`), C |
| 10 | `adres_nobetci.py:43` | B | 🔴ₛ | yayın hattı (`kos_ve_yayinla:336`) |

Sırada (11+): `kos_ve_yayinla.py:37` 🔴ₛ · sonra 🟡 51 · ⚪ 28 (⚪ için
düzeltme değil **silme/arşiv** sorusu da sorulabilir — karar koordinatörde).
🧂 **Tuzdaki ikisi — partiyi bekler, `_utf8.py` yardımcısına bile koşu sırasında taşınmaz:**
`uret_petek.py:53` (C, 🔴ₛ) · `yukseklik.py:65` (B, 🔴ₛ; `uret_petek:708` içe aktarır). İkisi de tam
inşa koşusunun motor yaması partisine (`CLAUDE.md §9.1` madde 2) girer.

## 5. Yardımcı (`arac/_utf8.py`) için not — YAZILMADI, karar bu ölçümden sonra

- Yardımcı, onu içe aktaran her kapı aracının **(f) bağımlılık kapanışına** girer ⇒ kapanış denetiminde
  **BEYANLI_ISTISNA** olarak yazılmalıdır (bugün `denetle.py` ve 🔴 araçlar içe aktaracak).
- İstisna metni: *"`_utf8.py` yalnız `sys.stdout`/`sys.stderr` kodlamasını ayarlar; **bu modül stdout
  dışında bir şey yaparsa (dosya/ağ/alt süreç/içe aktarım/küresel durum) istisna DÜŞER** ve modül
  kapanışta sıradan bağımlılık olarak sayılır."* — istisnanın koşulu kendi içinde ölçülebilir olmalı
  (ör. AST: modülde `open`/`subprocess`/`import` (sys, io dışı) yok).
- Tuz notu: yardımcı `uret_petek.py`/`yukseklik.py` tarafından içe aktarılırsa **tuza girmez** ama
  `uret_petek.py` değişir ⇒ tuz değişir. O yüzden iki tuz dosyası partiyi bekler (§4).

## 6. Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** 94 = A 15 + B 68 + C 11 (`65b8965d`, yeniden sayıldı) → 🔴 7 · 🔴ₛ 8 · 🟡 51 · ⚪ 28.
  Girintili 20 → 🔴 4 · 🟡 10 · ⚪ 6; **20'si de StringIO'da güvenli** (koşul tablosu §3).
  Kapı kenarları kodla doğrulandı (sezgisel dizge kenarı 9 aracı köklere sahte bağlıyordu, ayıklandı).
- **Bulamadım:** KOŞU 22 makinesinin (HAVVA) yerel betikleri/zamanlanmış görevleri; TAHTA'dan elle koşturma
  (⚪ bunu göremez); dinamik ad kurma (`"uret_" + x + ".py"`) — `arac/`ta kapı köklerinde yok, ötekilerde
  taranmadı.
- **İstiyorum:** ① (paketle zaten `7a613d9e` ile kapandı) ② "önce 10"un 1-5'i (🔴 aynı süreç)
  için `_utf8.py` kararı (BEYANLI_ISTISNA metniyle) ③ ⚪ 28 için "düzelt mi, arşivle mi" hükmü.

YENİ DOSYALAR: `denetim/ARAC-STDOUT-ZINCIR-1010.md`
