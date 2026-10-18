# ARKEOLOJİ PİLOTU — RAPOR (MÖ 12000–3000, 18 Ekim 2026)

Şartname: `denetim/ARKEOLOJI-KATMANI-SARTNAME-1018.md`. Veri **yalnız dalda** `claude/distracted-carson-626369`:
`data/olaylar_arkeoloji_pilot.js` (14 madde) · `data/sehir_tarihce_arkeoloji.js` (7 yerleşim) · üretici `denetim/ARKEOLOJI-PILOT-URETICI-1018.py` · ham `denetim/ARKEOLOJI-PILOT-YERLESIM-1018.json`.
`index.html`e `<script>` satırı eklenmedi ⇒ site yüklemez.

## ① Ölçülen
| Kayıt | Kaynak (özet) | Aralık | Yazılan `t` | Kural |
|---|---|---|---|---|
| Ain Mallaha: Erken Natufiyen yerleşimi | Valla vd. 2017 (Valla vd. 2007'ye atfen) GifA-70014 | 12240–12070 cal BC (%68,2) | MÖ 12155 (`-12154`) | orta nokta; UFUK DIŞI; yalnız %68,2 okundu |
| Göbekli Tepe: Çevre D sıvası | DAI Göbekli Tepe blogu 2016, KIA-44149 | 9745–9314 cal BC (%95,4) | MÖ 9529 | orta nokta |
| Göbekli Tepe terk | DAI, aynı yazı | «yaklaşık MÖ 8000» | MÖ 8000 | tek değer |
| Eriha: en erken PPN tabakası | PPND (exoriente.org) Jericho sayfası | toplam 9300–8700 BC | MÖ 9300 | **dönem toplamı → orta nokta ALINMADI**, alt sınır |
| Çatalhöyük başlangıç | Bayliss vd. 2015 (ikincil aktarım) | — | MÖ 7100 | tek değer |
| Çatalhöyük sonu | Marciniak vd. 2015, Antiquity 89(343) | «6000'den hemen sonra» | MÖ 6000 (en erken uç) | tek değer |
| Jiahu başlangıç / son | Zhang vd. 1999, Nature 401 | 7000–5700 (kalibrasyon belirsiz) | MÖ 7000 / 5700 | yerleşim süresi → uç; son için Frontiers tablosu 5500 diyor (çelişki beyanlı) |
| Mehrgarh aseramik mezarlık | Vidale vd. 2025 (PubMed 40234596) | 5200–4900 | MÖ 5050 | orta nokta; Jarrige «pre-7000» ile ÇELİŞKİ beyanlı |
| Harappa Ravi evresi | HARP kronolojisi | 3300 (diğerleri 3700 / >3500) | MÖ 3300 | tek değer; kaynak çelişkisi beyanlı |
| Varna mezarlığı başlangıç / son | Higham vd. 2018, Radiocarbon | 4596–4516 / 4427–4341 (%95,4) | MÖ 4556 / 4384 | orta nokta, `onyil` |
| Badari başlangıcı | Dee vd. 2013, Proc. R. Soc. A 469, Tablo 1 | 4489–4266 (%95) | MÖ 4377 (yarım yıl→geç) | orta nokta; tablo değeri özetten, PDF'le teyit edilmeli |
| Mısır'ın birleşmesi (Aha) | Dee vd. 2013 | 3218–3035 (%95; %68: 3111–3045) | MÖ 3126 (`-3125`) | orta nokta; **atlas künyesi `misir-erken-hanedan` f=-3099 (Shaw 2000) ile 26 yıl fark — künye DEĞİŞTİRİLMEDİ** |

Yerleşimler: Ain Mallaha · Göbekli Tepe · Eriha · Çatalhöyük · Jiahu · Mehrgarh · Harappa. Sahiplik: `__BOSLUK__` (kültür, «sahip kavramı yok»), pilot penceresi sonrası `__BILINMIYOR__` (araştırılmadı; uydurma süreklilik yok).

**Denetim koşuları**
- `py arac/sehir_tarihce.py denetle data/sehir_tarihce_arkeoloji.js` → **çıkış 0**, 7 şehir, ihlal 0, uyarı 0 (regex düzeltmesinden sonra; önce Ain Mallaha 3 ihlal verdi: 5 haneli yıl).
- `py arac/denetle.py` **pilot olay dosyasıyla** → **çıkış 1, Python traceback**: `denetle.py:4434 _gun_no` → `ValueError` (negatif tarih `split('-')`), çağrı `mukerrer_maddeler:4695`. Değişmez 1/2/2s/4/5 blokları çökmeden önce taban değerleriyle aynıydı (Değişmez 2: 698 kırılma, 0 açık).
- `py arac/denetle.py` **pilot olay dosyası çıkarılınca** (taban) → **çıkış 2** (yalnız Değişmez 8 `devletler_harita.js YOK`, bu ağaçta beklenen).
- `negatif_yil_kapisi` denetle'de çağrılmıyor ⇒ kapı «ölçülemedi» DEMİYOR, çöküyor. **Bu yüzden MÖ veri main'e itilmedi.**

## ② Bulamadıklarım (kaynaksız yazılmadı)
- **Eridu** başlangıcı: ~MÖ 5400 anılıyor, ama yalnız Vikipedi aynaları/popüler siteler; Safar-Mustafa-Lloyd veya radyokarbon yayını bulunamadı → yazılmadı.
- **Uruk** (Eanna, ilk yazı levhaları): kaynaklar MÖ 3300/3200–3100 diyor, ama okunabilen birincil metin yok (Brown PDF > 10 MB, CDLI bot koruması) → yazılmadı.
- **Knossos** en erken Neolitik: Douka vd. 2017 (Antiquity) özeti kalibre tarih vermiyor, tam metin ücretli → yazılmadı.
- **Eriha kulesi**: PPND sayfası kuleyi anmıyor («açık soru»); popüler kaynaklar MÖ 8500-8000 diyor → yazılmadı.
- **Naqada I başlangıcı**: Dee 2013 Naqada I başlangıcı vermiyor (yalnız IB/IC geçişi 3731–3550) → Badari + Aha yazıldı, Naqada I yazılmadı.
- **Koordinatlar** 7 yerleşimde hafızadan; Pleiades/TGN ikinci tanığıyla ölçülmedi (`konum_teyit` alanında beyanlı). Haritaya basılmadan önce teyit şart.
- Birincil kaynak okunmayan kalemler: Ain Mallaha (ikincil aktarım), Çatalhöyük başlangıcı (ikincil), Badari/Aha (WebFetch özeti). Hepsi kayıtta `ic_not_d`'de beyanlı.

## ③ İstediklerim
1. Şartname §11'deki 5 karar (özellikle dönem-toplamı → orta nokta uygulanmaz).
2. `mo-sayac`'tan: `denetle.py:4434` çöküşü + `negatif_yil_kapisi` bağlantısı; ikisi inmeden pilot ve Sümer paketi (K9) itilmez.
3. Kilit kancası (`arac/kilit_kanca.py`) Türkçe karakterli dosya adında UnicodeEncodeError veriyor — `Ş` içeren görev adı yüzünden şartname ASCII adla yazıldı.
4. Önerim: pilotu bölge bölge genişletmek (K10); önce K2+K3 (şema + denetim) main'e dokümanla, veri K4 sonrası.
