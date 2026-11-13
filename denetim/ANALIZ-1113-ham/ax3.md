# EKSEN 3 — Yerleşim / Künye / Renk (ölçüm)
Ağaç: C:\atlas\.claude\worktrees\emrelic-1113-analiz (origin/main f4b45bb0a). Yerleşim 5628 nokta, `s:` dönemi 26579, devletler.js künye 2267, BOYALAR 2245 anahtar. Salt okuma; veri değişmedi.

| # | Ölçüt | Sayı | Komut / yöntem |
|---|---|---|---|
| a1 | denetle Değişmez 4 (ömür TAMAMEN dışı, 400 g tolerans) | **0** (beklenen 0) | `py arac/denetle.py` (ax3 tam çıktı: denetle.out) |
| a2 | 4c: dönem devletin ÖLÜMÜNÜ aşıyor | **60** (tavan BEKLENEN_ASAN 113 → gevşek 53) | denetle |
| a3 | 4d: dönem DOĞUMDAN önce başlıyor | **234** (tavan 325 → gevşek 91); soru sayısı, kusur değil | denetle |
| a4 | Ham tarama: `s:` dönemi künye f/t dışına taşan (toleranssız, `d:` id veya harita: eşleşmesi, `isg:` hariç) | **1071** dönem · 115 kimlik · 851 yerleşim (505 başı künyeden önce / 572 sonu künyeden sonra) | scratchpad ax3b.py |
|   | en çok: avusturya-marki 192, zend 103, fetret-musa 91, fetret-isa 63, mehdi 51, adal 36, venedik 32, altinorda 24, cekoslovakya 21, somali 21 | | not: a4 ile a2+a3 farkı = denetle'nin 400 g tolerans + birim (dönem×kimlik) tekilleştirmesi; ham sayı gün-düzeyi sapmaları da içeriyor (ör. fetret-isa dönemi künyeden 5 ay önce) |
| b1 | devletler.js'te olup BOYALAR'da (id veya `harita:` anahtarıyla) tanımsız | **0** | ax3.py (yalnız id eşleşmesi sayılırsa 52, hepsinin `harita:` karşılığı var) |
| b2 | `s:`/`isg:` içinde devletler.js'te olmayan `d:` | **1**: `__BOSLUK__` (698 kullanım; meşru delik işareti) | ax3.py |
| c | `py arac/renk_olc.py` | koştu (~3 dk). Altlıktan ayrışmayan 0; denizle karışan 454 (dal1 240 + dal2 214); komşusuyla çakışan (ΔE<12) 9 çift; aynı anahtar+tarih örtüşen 164 çift; aynı hex+eşzamanlı+<600 km 6 çift (atina-dukaligi↔atinadukaligi, bosna↔bosna-kralligi, fetret-musa↔musa-celebi, fetret-suleyman↔suleyman-celebi, bati-han↔bati-zhou, avusturya↔habsburg); 1480 çift ÖLÇÜLEMEDİ; UYARI 126 satır = ~120 "BEYAN EDİLMEMİŞ PAYLAŞIM" hex grubu + 6 şema-alanı uyarısı (konum_kesinlik 126 kayıt, s.eksklav 247 kayıt, ic_not/karar_notu/kaynak_kur/dogrulanmis_bosluk 1'er) + 19 kimlik açıklık düzeltmesi | `py arac/renk_olc.py` → renk_olc.out |
| d | sıfır uzunluk (f==t) / ters / çakışan `s:` dönemi (aynı yerleşim içinde, sayısal gün karşılaştırması) | **0 / 0 / 0**; `s:` f'siz dönem 0 | ax3b.py (ilk ham string denemesi MÖ yıllarda sahte 275 ters verdi; sayısal çözümle düştü) |
| e | künye kaynak borcu | `kaynak:` eksik **0**/2267; `ic_not` eksik **1325**/2267 (58%; ic_not yalnız beyan gerektiğinde yazılıyor, borç değil gösterge); ikisi de eksik 0 | ax3.py |
| f | mükerrer aday (norm. ad + ≤3 km) | **2**: Port Vila↔Port Vila (Efate) 0.00 km (a78_okyanusya ↔ ek_pasifik_adalar); Sault Ste. Marie↔Sault Ste. Marie (Ontario) 1.41 km (beyanlı ikiz). Ad-bağımsız ≤3 km çift (girdi.yakin_ciftler/denetle çıktısı): 20 BEYANSIZ + 4 beyanlı ikiz | ax3.py + denetle |
|   | En kötü 10 BEYANSIZ (≤3 km): Karthago↔Kartaca 0.00 · Lusitania↔Baetica 0.00 · Port Vila↔Port Vila (Efate) 0.00 · Kalavrita↔Kalavryta 0.00 · Vostitsa↔Aigion 0.00 · Erbil↔Adiabene 0.03 · Filistin↔Remle 0.19 · Kurtuba↔Endülüs 0.24 · Dimitrofça↔Sirmium 0.36 · Kayrevan↔İfrîkıye 0.42 | | (bir kısmı bölge-nokta/şehir çifti, gerçek mükerrer değil; ad-normalleştirmeli gerçek mükerrer = 1 net, Port Vila, + Kalavrita/Kalavryta, Vostitsa/Aigion) |

## ÖLÇÜLEMEDİ
- `denetle.py` tam koşu BİTMEDİ: çıktı Değişmez 4d'de (179 satır) durdu, süreç ~10 dk sonra hâlâ çıktı vermiyordu (makinede çok python süreci var); çıkış kodu OKUNAMADI. Kapsanan: 1, 1b, 1c, 2, 2s, 2sk, 2i, 2t, 3z, 4, 4c, 4d. Ölçülemeyen: Değişmez 5+ ve 8 (`coz-c` gerekir, ana ağaç dışı); push_kapisi ayrı worktree'de ölçer.
- denetle uyarıları (ölçüldü, tavan): 2sk TAVAN AŞILDI 5735>2246; YIL-TEMSİLÎ BORÇ 440>151 (tavan aşımı → yayın kapısını tıkar, tavan açma kuralı geçerli); BEKLENEN_BELGESIZ 3 (tavan 4) gevşek; "BAYAT BEYAN" Macaristan 0796→0895 beyan temizlenmeli.
- renk_olc: 1480 çift dönemi canlı veride olmayan kimlik yüzünden ölçülemedi.
- a4 ham sayısı denetle'nin toleranslı sayısıyla birebir karşılaştırılmadı.
- Devletler.js künyelerinin `kaynak:` içeriğinin geçerliliği (kaynak sırası) ölçülmedi, yalnız alanın varlığı.

## En büyük 5 iş kümesi
1. **Künye f/t genişletme/hayalet temizliği (a2+a3+a4)**: ~294 denetle dönemi / 1071 ham dönem, 115 kimlik; avusturya-marki (192), zend (103), fetret-musa/isa (154), mehdi (51), adal (36), somali, umman, napoli. Dosya: data/devletler.js (künye f/t) + yerlesimler*.js `s:`; çoğu karar = künyeyi genişlet, dönemi kısaltma (CLAUDE.md sınıflandırma kuralı). Küçük-orta (kimlik başına 1 künye kararı).
2. **Kapanış sınıfı 2sk tavan aşımı (5735>2246) + yıl-temsilî borç (440>151)**: kronoloji/sınır maddeleri `YYYY-01-01` → gün; dosyalar data/kronoloji_sinir*.js, olaylar*.js. Büyük (yüzlerce madde, kaynak araştırması).
3. **Renk paylaşımı**: ~120 beyansız paylaşılan hex grubu (~470 kimlik) + 164 aynı-anahtar-örtüşen çift + 454 denizle karışan: arac/renkler.py (BOYALAR/PAYLASIM) — dikkat: motor tuzu, koşu sürerken commit main'e girmez; HAVVA koşusu gerekir.
4. **konum_kesinlik (126 kayıt) ve s.eksklav (247 kayıt) şemaya kayıt**: arac/girdi.py BILINEN_ALANLAR (motor tuzu dosyası!) — küçük kod ama koşu kilidi; 4 tek-kayıt uyarı alanı.
5. **Mükerrer/ikiz nokta (20 beyansız ≤3 km)**: yerlesimler_a78_okyanusya/ek_pasifik_adalar (Port Vila), Kalavryta, Aigion, Sirmium; yerlesimler*.js — küçük, ama bölge-merkez çiftleri (Lusitania/Baetica, Erbil/Adiabene…) beyan gerektirir.
Yan: BEKLENEN_ASAN 113→60 ve BEKLENEN_D4D 325→234 ve BELGESIZ 4→3 tavanları sıkılabilir (denetle.py, iyileşme yönü).

Betikler: scratchpad ax3.py, ax3b.py; çıktılar denetle.out, renk_olc.out.
