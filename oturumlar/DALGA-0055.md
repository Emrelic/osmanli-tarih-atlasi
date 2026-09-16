# DALGA-0055 — paket 0055 (10 madde) + iki Emre işi · 16 Eylül 2026 gece

Kurallar: `oturumlar/DALGA-0052.md` §0 ve §1. Paket: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden/parti-emrelic-0055/PARTI.md`
- Tahtaya yalnız teslimde, tek mesaj, sayıyla. `git pull --rebase` YOK. Commit: adla add + adla commit.
- Ek okuma yazmadan önce bütün `data/ekokuma_*.js`de aynı konu var mı bak; varsa GENİŞLET.
- Görsel/nota: yalnız kamu malı / CC0, `gorsel_kaynak` açık.

## A. Paket 0055

| Oturum | Madde | İş | Dosya |
|---|---|---|---|
| EKO-VEZIR | 3 · 7 | Reisülküttap Râmi Mehmed Efendi · Bağdat Kölemenleri (kölemen kimdir, Mısır'dan farkı, İstanbul'un tepkisi) | `data/ekokuma_vezir.js` |
| EKO-DUNYA | 4 · 9 | Rusya'nın denize çıkışı (Baltık/Beyaz Deniz/Kamçatka engelleri, sıcak denizler) · Vahran ve Mersalkebîr (önem, niçin geç alındı) | `data/ekokuma_dunya.js` |
| EKO-PADISAH | 6 | Edirne Vakası 1703: Feyzullah Efendi, tepki çeken icraatı, darbenin örgütlenmesi. Etiket: `siyasi-darbe` / `askeri-darbe`; Osmanlı darbelerine genel ek okuma | `data/ekokuma_padisah.js` |
| EKO-RIVAYET | 8 · 10 | Kuzey ve Doğu Afrika eyaletlerinin idarî yapısı ve zaman içindeki değişimi (Cezayir, Tunus, Trablus, Mısır, Sudan, Habeş, Somali; Tunus Hüseynîleri) · Itrî (hayatı, ünlü eserleri; nota görseli yalnız kamu malı) | `data/ekokuma_rivayet.js` |
| TK Kırım | 5 | Karadeniz'in kuzeyinin tarihsel etnik yapısı: Kırım Tatarları, Ukraynalılar, Kazaklar, Çerkezler, Ruslar — kim, ne ölçüde, nerede | kendi ek okuma/yama dosyan |
| D-KATMAN | 1 · 2 | ① Antlaşma haritası BÜTÜN antlaşma maddelerine: maddede "Haritada gör" düğmesi, bırakılan topraklar taralı + "X'e bırakıldı" etiketi (Karlofça pilotunun genellemesi, veri: B bölümü) ② Vasal devletlerin SINIR çizgisi Osmanlı vasal açık kırmızısı, iç dolgu değişmez (Eflak, Boğdan, Erdel ayrı ayrı) | `js/antlasma_harita.js` · `js/d_katman.js` · app.js/index.html satırı gerekirse tahtadan 1.MURAT'a |

## B. Emre işi — BÜTÜN ANTLAŞMA MADDELERİ (harita + ek okuma)

Ölçüm: olaylar+kronoloji dosyalarında adında antlaşma/barış geçen 414 madde (397 benzersiz); künye kronolojilerinde 270; `ANTLASMALAR` 41; antlaşma haritası 1 (Karlofça). Antlaşma içeren ek okuma ≈30.

| Oturum | İş | Dosya |
|---|---|---|
| D-GEOARAC | Antlaşma haritası VERİ ALETİ: her antlaşma maddesi için (tarih ± pencere, taraflar) yerleşim dönemlerinden el değiştiren yerleri çıkar → `data/antlasma_haritalari.js` biçiminde (Karlofça kaydıyla aynı şema). Kaynaksız eşleşme yazma; eşleşmeyeni `bulunamadı` diye listele. Önce Osmanlı antlaşmaları | `denetim/ARAC-ANTLASMA-HARITA-0916.py` · `data/antlasma_haritalari.js` (D-KATMAN'la devir tahtadan) |
| UYGULA | Antlaşma EK OKUMALARI, önce Osmanlı antlaşmaları (kronolojik): sebep · süreç/görüşme hikâyesi · hükümler · sonuçlar · önem. Biçim `ekokuma_antlasma3.js` (`tur:"sebep-sonuc"`) + `hukumler` + `surec` alanları. Var olanı genişlet. TDV birincil | `data/ekokuma_antlasma4.js` (`window.EKOKUMA_ANTLASMA4`) |

## C. Emre işi — EKSİK DEVLET KRONOLOJİLERİ

Ölçüm (`denetim/KRONOLOJI-EKSIK-0916.json`): 639 künye · kronolojisi 0 madde 33 · 1-2 madde 112. Hedef: her künyede en az kuruluş · önemli toprak değişimleri · son (kaynaklı, günlü; gün yoksa YYYY-01-01 + metinde). `devletler.js`e YAZMA — yama yaz, 1.MURAT indirir.

| Oturum | Bölgeler | Dosya |
|---|---|---|
| D-KUNYE | arabistan · misir-sudan · iran · anadolu · kafkasya · orta-asya · sibirya-bozkir · balkanlar · italya · orta-avrupa | `denetim/YAMA-KRONO-DKUNYE-0916.json` |
| D-KAYNAK | bati/orta/dogu/guney/kuzey-afrika · guney/kuzey-amerika · orta-amerika-karayip · guney/guneydogu/dogu-asya · okyanusya | `denetim/YAMA-KRONO-DKAYNAK-0916.json` |

Yama satırı: `{"id":"<künye>","t":"YYYY-MM-DD","tur":"kurulus|son|savas|antlasma|toprak|...","b":"...","kaynak":"<TDV slug ya da akademik ad>"}`.
