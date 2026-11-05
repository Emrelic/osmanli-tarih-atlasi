# -*- coding: utf-8 -*-
"""renk_oneri.json + renk_oneri_ham.json + kunye_boya_eslesme.json -> RENK-ONERI-1103.md"""
import io, os, sys, json, subprocess, collections
BOLUM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(os.path.dirname(BOLUM))


def oku(ad):
    return json.load(io.open(os.path.join(BOLUM, ad), encoding="utf-8"))


O, H, E = oku("renk_oneri.json"), oku("renk_oneri_ham.json"), oku("kunye_boya_eslesme.json")


def git(*a):
    return subprocess.run(["git"] + list(a), cwd=KOK, capture_output=True, text=True).stdout.strip()


tur = collections.Counter(v["tur"] for v in O.values())
sebep = collections.Counter(s.split(":")[0] for v in O.values() for s in v["sebep"])
kotu = [(i, v) for i, v in O.items() if v["dE_min_sonra_kapi"] < 12.0]
sinir = [(i, v) for i, v in O.items() if 12.0 <= v["dE_min_sonra_kapi"] < 15.0]
ayna_kotu = [(i, v) for i, v in O.items() if v["dE_min_sonra"] < 12.0]
ak = [(i, v) for i, v in O.items() if v.get("akraba")]
S = H["sonra"]
o = []
w = o.append
w("# RENK-1103: renk ölçümü ve önerisi\n")
w(f"Ölçüm ağacı: worktree dalı `{git('branch','--show-current')}`, taban `origin/main` = `{git('rev-parse','origin/main')[:12]}` "
  f"(HEAD `{git('rev-parse','HEAD')[:12]}`). Makine: laptop/UMIT tarafı, `py`. Hiçbir `arac/` motor dosyasına, `data/`ya yazılmadı.\n")
w("Araçlar bu dizinde: `renk_oneri.py` (öneri üretici + doğrulayıcı), `kunye_boya_eslesme.py` (c), "
  "`renk_olc_cikti.txt` (ham `py arac/renk_olc.py` çıktısı), `renk_oneri.json` (uygulanabilir), `renk_oneri_ham.json` (ayrıntı).\n")
w("## 1. Özet sayılar\n")
w("| Ölçü | Değer |\n|---|---|")
w("| `renk_olc.py` çıkış kodu | **0** (kod hiçbir sayıya bağlı değil; sonuç satırı 🔴) |")
w("| Taban (renk_olc ham, koordinatörün sayısı) | Voronoi çakışan **64** · yakın-ama-değmeyen **248** (tavan `KADEMELI_IHLAL_TAVANI`=72) · aynı-anahtar örtüşen **162** · aynı-hex **2** · görünmez **0** |")
w(f"| Yönlendirilmiş evren (motorun gerçekten çizdiği, bkz. §3) | Voronoi çakışan **{H['taban_yonlendirilmis']['voronoi_cakisan']}** · yakın-ama-değmeyen **{H['taban_yonlendirilmis']['yakin_ama_degmeyen']}** · künye-penceresi ek **{H['taban_yonlendirilmis']['kunye_penceresi_ek']}** |")
w(f"| `renk_bekleyen.md` dosyaları | 12 dosya, 12'si de \"Yok\" (aşağıda §2) |")
w(f"| Boyasız künye (motor anahtarı yok) | **{len(E['kunye_boyasiz'])}** (`boya_gerekli:true` olan {len(E['kunye_boyasiz_boya_gerekli'])}) |")
w(f"| Önerilen renk (toplam) | **{len(O)}** = {dict(tur)} |")
w(f"| Öneri sebep dağılımı | {dict(sebep)} |")
w(f"| Öneriden SONRA eşik altı (ΔE<12) Voronoi çakışan | **{S['voronoi_cakisan']}** |")
w(f"| Öneriden SONRA yakın-ama-değmeyen | **{S['yakin_ama_degmeyen']}** (+ künye penceresi {S['kunye_penceresi_ek']}) |")
w(f"| Öneriden SONRA gerçek aynı-anahtar örtüşme (motor) | **{S['ayni_anahtar_ortusen_motor_gercek']}** (renk_olc'un `harita:` bazlı sayısı {S['ayni_anahtar_ortusen_renk_olc']}) |")
w(f"| Öneriden SONRA aynı-hex çakışma | **{S['ayni_hex']}** · su yakın **{S['su_yakin']}** · altlıktan ayrışmayan **{S['altliktan_ayrismayan']}** |")
w(f"| Önerilen renklerin kendi ΔE_min'i, kapı evreni (Voronoi ∪ <600 km) | <12: **{len(kotu)}**, 12-15: **{len(sinir)}**, ≥15: **{len(O)-len(kotu)-len(sinir)}** |")
w(f"| Önerilen renklerin kendi ΔE_min'i, 1500 km ayna evreni | <12: **{len(ayna_kotu)}** (ayna uyarıdır, kapı değil; öneri öncesi aynada da var), ≥12: **{len(O)-len(ayna_kotu)}** |")
w("")
w("## 2. a) renk bekleyen künyeler\n")
w("`denetim/DUNYA-1102/*/renk_bekleyen.md`: 12 dosya (afrika-500-1800, asya-1000-1800, asya-1800-2000-afrika-antik, asya-500-1000, "
  "asya-mo3500-500, asya-mo500-ms500, avrupa-1000-1500, avrupa-1500-1800, avrupa-1800-2000, avrupa-500-1000, avrupa-mo3500-500, "
  "avrupa-mo500-ms500) hepsi \"Yok: yeni künye eklenmedi\" diyor. `afrika-1800-2000`, `amerika-*`, `okyanusya-*`, `ikinci-gecis-kunye` "
  "dizinlerinde `renk_bekleyen.md` YOK (yalnız `bekleyen.md`/`ajan_sonuclari.json`). Yani **raporlardan toplanan renk bekleyen künye = 0**; "
  "gerçek liste dosya raporlarından değil `devletler.js` ↔ `BOYALAR` eşlemesinden çıkıyor: **32 boyasız künye** (`kunye_boya_eslesme.md` §1a), "
  "bunların 26'sı `boya_gerekli:true`. Hepsi için §5 tablosunda renk var.\n")
w("Ham renk_olc çıktısı: `renk_olc_cikti.txt`. Koordinatörün 248 / tavan 72 bilgisi **doğrulandı** (tam 248; tavan 72 aşılmış, çıkış kodu etkilenmiyor).\n")
w("## 3. Bulgu: renk_olc'un kör noktası (yönlendirme)\n")
w(f"Motor (`uret_petek.py` ~1111-1148) `s:[{{d}}]` kimliği `BOYALAR`'da yoksa künyenin `harita:` anahtarına düşürür (**{len(E['s_d_yonlenen'])}** kimlik). "
  f"`renk_olc.komsuluk()` ise ham `d`yi okur; bu kimlikleri hiç görmez. Ölçüm yönlendirilmiş veriyle tekrarlanınca "
  f"Voronoi çakışan {H['taban_ham']['voronoi_cakisan']} → {H['taban_yonlendirilmis']['voronoi_cakisan']}, "
  f"yakın-ama-değmeyen {H['taban_ham']['yakin_ama_degmeyen']} → {H['taban_yonlendirilmis']['yakin_ama_degmeyen']} oldu. "
  "Öneriler yönlendirilmiş (gerçek çizilen) evren üzerinde hesaplandı. Düzeltme `renk_olc.py`'ye girmeli (bu işin kapsamı dışı: motor dondurma değil ama koordinatör kararı).\n")
w(f"Ayrıca **ayni_anahtar** 162 çift alarmı: `harita:` ortak ama kayıt `id`si zaten `BOYALAR`'da ise motor `harita`yı hiç kullanmaz. "
  f"Yanlış alarm: **{len(H['yanlis_alarm_ayni_anahtar'])}**, gerçek (motorun aynı kimliğe düşürdüğü): **{162 - len(H['yanlis_alarm_ayni_anahtar'])}** çift → "
  f"**{len(H['bolunecek'])}** kayıt kendi `BOYALAR` girişini alırsa ayrışır (kayıt `id`si BOYALAR'a eklenir; motor A' kuralıyla `s.d`=id'yi doğrudan bulur, veri değişmez).\n")
w("Tarih karşılaştırması: `renk_olc.py` ISO tarihleri DİZE olarak kıyaslıyor (`fa < tb`). İki MÖ (negatif) yıl arasında dize sırası kronolojik sıranın tersidir "
  "(`'-0500' > '-0100'`). Bu raporun çözücüsü sayısal sıra kullandı; renk_olc'un MÖ-MÖ eşzamanlılık kararları bu yüzden yanlış olabilir (ÖLÇÜLEMEDİ: kaç çiftte, kapsam dışı).\n")
w("## 4. Ölçüt ve yöntem\n")
w("- **ΔE**: `renk_olc.py`'nin kullandığı **CIE76** (Lab öklit), `gorunen()` = %44 opaklıkla altlık `#e8dfc8`e bindirilmiş renk; "
  "komşu eşiği `DE_KOMSU=12`, altlık `DE_ALTLIK=15`. İstenen CIEDE2000 karar ölçütü yapılmadı çünkü kapıyı koyan araç CIE76 (karar o kapıya göre); "
  "bilgi için her kayda `dE2000_en_yakin_sonra` yazıldı.")
w("- **Hedef (kısıt merdiveni)**: kapı evreninde (Voronoi ∪ <600 km) ΔE ≥ 13 ZORUNLU (eşik 12 + 1 pay); 1500 km ayna evreninde önce ≥15, sonra 13.5, 12, 10, 8, 6, 4, 2, 0; "
  "olmazsa kapıda 12.3. Her kaydın hangi basamakta çözüldüğü `renk_oneri.json` `secim_merdiveni`.")
w("- **Engel evreni**: Voronoi komşuları ∪ 1500 km içinde eşzamanlı (nokta düzeyinde, MÖ-doğru sayısal tarih) ∪ verisiz kimlikler için aynı bölge+pencere örtüşmesi ∪ Osmanlı ikilisi. (`renk_olc` kapısı 600 km; ayna 1500 km.)")
w("- **Sabit kısıtlar** (yeni renk için): altlıktan ΔE≥16; bindirilmiş L*≥59.5 (`ACIKLIK_TABANI_L`=59); ham hex ↔ `#c4dcea` ≥19.5 (`SU_ESIK_DE`=18); "
  "denizle DAL1 ΔE≥19 ve DAL2 elenmiş; iki kabartma tonundan ΔE≥15.5; hex tekil.")
w("- **Seçim**: mevcut kimlik için eski renge **en yakın** (en küçük değişiklik) aday; ardıl/akraba kanıtı olan için akraba tonuna (Lab hue) en yakın; "
  "kanıtsız yeni kimlik için paletin ortancasına en uygun (`uyum`).")
w("- **Kapsama**: çakışma grafiği (Voronoi ∪ yakın ∪ künye-penceresi çiftleri) açgözlü en küçük düğüm kapsamasıyla çözüldü; "
  "maliyet = 1 + 0.02·nokta_sayısı + 40 (PAYLASIM'da beyanlı grup üyesi). Osmanlı ikilisine çakışan taraf zorunlu hedef.\n")
w("## 5. Hanedan / ardıl kanıtı (tahmin değil)\n")
w("`devletler.js`'te ardıl/öncül/hanedan için YAPISAL alan **yok** (alan sayımı: `denetim/RENK-1103/alan_say.py`). Kullanılan kanıtlar:")
w("1. **Yapısal**: ortak `harita:` anahtarı (ayni-anahtar bölünmesi alan kayıtları anahtarın rengine ton olarak yakın tutuldu).")
w("2. **Metinsel**: `ozet`/`ad` içinde açıkça geçen ardıl/devir ilişkisi; her kayıt `akraba_kanit` alanında alıntısıyla yazıldı. Kanıtı olmayan kimlik tonu serbest bırakıldı.")
w(f"Akraba kanıtı taşıyan öneri sayısı: **{len(ak)}**.")
_t = oku("ton_ailesi.json")
_h = sorted(x["hue_fark"] for x in _t)
w(f"Ton ailesi ölçümü (`ton_ailesi_olc.py`, Lab hue farkı yeni renk ↔ akraba): medyan **{_h[len(_h)//2]}°**, ≤30°: **{sum(x<=30 for x in _h)}**, "
  f"30-60°: **{sum(30<x<=60 for x in _h)}**, >60°: **{sum(x>60 for x in _h)}** (toplam {len(_h)}). "
  "60°'yi aşanların neredeyse hepsi `ingiltere` ailesi (ortak `harita:` anahtarı olan ~16 koloni): ingiltere bölgesindeki komşuların tamamı aynı turuncu "
  "ailede ΔE≥13 payını bırakmadığı için bu kayıtlarda ΔE kısıtı ton ailesinden önce geldi. İstenirse bu 16 kayıt tek tek elle tonlanabilir.\n")
w("## 6. c) Künye-boya eşlemesi\nAyrıntı: `kunye_boya_eslesme.md`.\n")
ozet = E["ozet"]
for k, v in ozet.items():
    w(f"- {k}: **{v}**")
w("")
w("## 7. Uygulama notu (renkler.py'ye tek partide)\n")
w("`renk_oneri.json` kayıt biçimi: `{kimlik: {ad, tur, eski (dosyadaki literal hex), eski_calisma_zamani (açıklık tabanı yükseltmesinden sonraki, varsa), yeni, sebep[], gerekce, dE_min_once, dE_min_sonra, komsu, dE2000_en_yakin_sonra, akraba, akraba_kanit}}`.")
w("- `tur=DEGISIM`: `BOYALAR[kimlik]` satırının hex'i `yeni` ile değişir.")
w("- `tur=YENI-ANAHTAR (...)`: `BOYALAR`'a `\"kimlik\": (\"ad\", \"yeni\")` satırı EKLENİR. Ayni-anahtar bölünmesinde kayıt `id`si ile eklendiği için veri/`harita:` değişmez.")
w("- Uygulamadan sonra: `py arac/renk_olc.py` (hedef: Voronoi çakışan ve yakın-ama-değmeyen 0), `renkler.py` `PAYLASIM` beyanı bozulan gruplar için uyarı verebilir (grup üyesi recolor edildiyse).")
w("- renkler.py motor tuzundadır; uygulama HAVVA'da koşu **bitmeden** yapılmamalı, sonraki tam inşa koşusuna girer.\n")
w("## 8. Kalanlar ve sınırlar\n")
w("- **Kalan 1 'yakın-ama-değmeyen' = renk_olc MÖ tarih hatasının yanlış alarmı**: `natufiyen` (-12649..-9549) ↔ `part` (-0249..0224). "
  "`renk_olc` ISO tarihleri dize kıyaslıyor; `'-12649' < '0224'` ve `'-0249' < '-9549'` dize olarak doğru ⇒ 'eşzamanlı' sanıyor, gerçekte 9000+ yıl ayrı. "
  "Renk önerisiyle kapanmaz; `renk_olc.py`'de tarih kıyası sayısal olmalı (bu işin kapsamı dışı, koordinatör kararı).")
w("- Kapı evreninde 13'ün altında kalan öneri: " + (", ".join(f"{i} {v['dE_min_sonra_kapi']}" for i, v in sinir if v['dE_min_sonra_kapi'] < 13.0) or "yok") + " (12 eşiğinin üstünde).")
if kotu:
    w(f"- Kapıda eşiği (12) tutturamayanlar ({len(kotu)}): " + ", ".join(f"{i} {v['dE_min_sonra_kapi']}" for i, v in kotu))
w("- 'Künye penceresi' çiftleri (veride henüz eşzamanlı olmayan, künyesi örtüşenler) da kapsama alındı. Öneriden sonra kalan: "
  + (", ".join(f"{a} ↔ {b} ΔE {d} ({km} km)" for d, km, a, b in H['sonra_ayrinti']['yeni']) or "yok")
  + ". (ingiltere çok komşulu olduğundan 12'yi geçen tek renk bulunamıyor; borçtur, ihlal değil: veride henüz eşzamanlı değiller.)")
w("- Kalan 'yakın-ama-değmeyen' (tam liste): " + (", ".join(f"{a} ↔ {b} ΔE {d}" for d, km, a, b in H['sonra_ayrinti']['yak']) or "yok"))
w("- Boyasız 32 künyenin yerleşim noktası YOK ⇒ renk_olc bunları ölçemez ('ölçülemedi'); onlar için engel evreni aynı bölge + künye penceresi (en kötü hâl) alındı. Gerçek komşuluk nokta partisi inince `renk_olc` ile yeniden sınanmalı.")
_g = oku("degisim_buyuklugu.json")
w(f"- **Değişimin büyüklüğü** (`DEGISIM` {_g['n']} kayıt, eski→yeni ΔE): medyan **{_g['medyan']}**, >30: **{_g['gt30']}**, >60: **{_g['gt60']}**. "
  "En büyük sıçramalar (gözle kontrol önerilir): " + ", ".join(f"{k[1]} {k[0]} ({k[2]}→{k[3]})" for k in _g['en_buyuk_20'][:10])
  + ". Sebep: komşuluğu doymuş bölgelerde (Avrupa, Doğu Akdeniz, Britanya kolonileri) eski tona yakın ve 13'ü geçen boş renk kalmıyor. `ingiltere` (Britanya) #7e3d8f→#fc7200 de bunlardan: kapı evreninde 12.1'e ancak ulaştı, koordinatör bu tek kaydı elle gözden geçirmeli.")
w("- Aday ızgara 6'lık adımlı (79 507 ham renk), hex tekil; ince ayar yok.")
w("- Öneriler birlikte çözüldü ve bellekte uygulanıp `renk_olc` fonksiyonlarıyla (komsuluk, yakin_renk, ayni_hex, deniz, kabartma) yeniden ölçüldü (`renk_oneri.py` G bölümü); bu ölçüm sonuç satırlarının kaynağıdır.\n")
w("## 9. Tablo: öneriler\n")
w("| kimlik | tür | eski | yeni | ΔE önce | ΔE sonra | sebep | en yakın komşu (sonra) |")
w("|---|---|---|---|---|---|---|---|")
for i, v in O.items():
    w(f"| {i} | {v['tur'].split(' ')[0]} | {v['eski'] or '-'} | {v['yeni']} | {v['dE_min_once'] if v['dE_min_once'] is not None else '-'} | "
      f"{v['dE_min_sonra']} | {','.join(s.split(':')[0] for s in v['sebep'])} | {v['komsu'].split('|')[0].strip()} |")
w("")
io.open(os.path.join(BOLUM, "RENK-ONERI-1103.md"), "w", encoding="utf-8").write("\n".join(o))
print("yazildi", len(o), "satir")
