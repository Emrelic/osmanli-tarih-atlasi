# SINIR-D-ASYA-0077 — çalışma defteri

Dosyam: `data/d_sinirlar_asya.js` (tek). Koordinatör: YILDIRIM BAYEZIT.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (sınav anı 2026-09-24 ~13:05)

Görülen tek şey: 133 kaydın `sinif · id · f · t · taraflar · hat nokta sayısı` listesi
(dayanak/not içeriği OKUNMADI). Ölçüm betiği henüz yok.

- **Ö1 · 82 YOK kaydının en çok 20'si** (%24) belgeye + geometriye bağlanıp C/E'ye
  çıkarılabilir; bunun **en çok 6'sı E**. Sebep: YOK'ların çoğu aynı coğrafî hattın
  zaman kopyası (Rusya/Geçici Hükûmet/SSCB × Qing/Çin Cumhuriyeti) — biri çözülürse
  kopyaları da çözülür, ama `FIILI`/`DEGISTI` etiketlileri (Aksay Çin, Karakurum, McMahon,
  Pamir, Vahan, Mekong adaları) hukukî hat taşımaz, YOK ya da `D`'de kalır.
- **Ö2 · ÖNCE (1923-09-01, 5 km iki yan, yaslama uygulanmış `devlet` kaynağı):**
  çizilen E hatlarında doğru renk ortalaması **≥ %80**; C hatlarında (yaslanmaz)
  **%50–75**. En kötü E hattı Hindistan–Nepal (513 noktalı, Himalaya — petek noktası seyrek).
- **Ö3 · Pozitif kontrol:** betik önce KOMSU/Türkiye ailesinin yaslanan bir E hattında
  (`d1923-tr-ir-1`) koşturulur, ≥ %90 vermezse Asya sayıları sonuç sayılmaz (B9).
- **Ö4 · Kapsam:** dosyamda İran/Kafkas/Karadeniz-kuzeyi kaydı **0** (ölçüldü, 13:00) —
  bunlar `d_sinirlar.js` + `d_sinirlar_komsu.js`te. Tahta M-5064 ile koordinatöre soruldu.

## 1. ÖLÇÜ ALETİ — `denetim/SINIR-D-ASYA-0077-olc.js`

🔴 Şartname `.py` diyor; alet **JS** ve **tarayıcıda** koşuyor. Sebep: yaslama `js/d_katman.js`
içinde tarayıcıda yapılıyor; Python'da yeniden kurmak ölçüyü ölçülen şeyden ayırırdı.
Hattın her 10 km'sinde 5 km sol/sağ nokta; `ham` = petek gövdesi (devletler2), `son` =
ekrandaki gövde (`_dYaslaSon` uygulanmış). Gövdesiz nokta (deniz/delik) paydadan çıkar, `bos` sayılır.

**B9 pozitif kontrol** (1923-09-01, KOMSU + Türkiye ailesi, yaslanan E hatları):

| hat | ham → son |
|---|---|
| d1923-tr-ir-1 | %69,2 → **%100** |
| d1923-tr-ir-2 | %50 → **%100** |
| d1923-ir-af-kuzey | %50 → **%97,2** |
| d1923-iq-ir | %50 → **%89,7** |

⇒ alet ateşleniyor; Asya sayıları sonuçtur.

## 2. ÖNCE → SONRA (1923-09-01, `D_SINIRLAR_ASYA`, 32 çizilen hat)

| küme | ÖNCE (son) | SONRA (son) | yaslanan hat |
|---|---|---|---|
| **E (18 hat, 5.215 km)** | **%36,1** | **%70,3** | 1 → **3** |
| C (14 hat, 4.819 km) | %50,2 | %50,2 | (C yaslanmaz — kural) |
| hepsi | %43,5 | %59,7 | |

Değişiklik: 3 E kaydında `sol_taraf` YOKTU (E6A yaması `ARAC-D1923-E6A-YAMA-0920` hattı
bağlamış, yönü yazmamış) ⇒ yaslama "sol_taraf belirsiz" diye atlıyordu. Yön ölçüldü
(her ülkeden 2–3 iç şehir, en yakın parçaya göre işaret) ve yazıldı:

| kayıt | km | sol_taraf | ÖNCE → SONRA |
|---|---|---|---|
| d1923-ih-np-BILINMIYOR | 1.482 | nepal | %54,6 → **%99,5** |
| d1923-cn-fc-BILINMIYOR-tonkin | 1.048 | fransiz-cinhindi | %51,5 → **%99,0** |
| d1923-cn-fc-BILINMIYOR-laos | 361 | fransiz-cinhindi | %50,9 → %50,9 (gövde — aşağı) |

**Öngörü Ö2 ÇÜRÜDÜ** (E ≥%80 demiştim, %36,1 çıktı): 18 E hattından yalnız 1'i yaslanıyordu.

## 3. Kalan 15 yaslanmayan E hattı — kusur VERİDE DEĞİL, GÖVDEDE

| sebep | hatlar | ölçülen |
|---|---|---|
| **Yunnan çevresi gövdesiz** — Çin gövdesi sınıra inmiyor | ih-cn-guney1-1/-2, guney3, cn-fc-laos | Tengchong, Simao, Jinghong, Mengzi, Lao Cai: HİÇBİR gövdede değil; Kunming Çin |
| **Şan Devletleri ayrı gövde** — taraf `ingiliz-hindistani`, boyanan `san-devletleri` | ih-fc-mekong, ih-cn-guney3 | Kengtung → san-devletleri |
| **Güney Sahalin Sovyet boyalı** | jp-sscb-sahalin | 49,5°K gövdesiz; 50°K güneyindeki örnekler sovyet-rusya |
| **Timor gövdeleri ters/eksik** | hd-pt-orta, hd-pt-oecussi | Oecussi'de Portekiz gövdesi yok; Batı Timor'un 5 km şeridi Portekiz |
| **Kuzey Borneo'da `ingiltere` gövdesi yok** (OKYANUSYA M-5069 da ölçtü) | hd-en-sebatik, 4-20-4/5 | — |
| **Pamir gövdesiz** | af-sscb-pamir | 22/22 örnek gövdesiz |
| hat < 10 km | hd-en-4-20-1/2/3 | kural gereği |

Bunlar `yerlesimler*.js` / künye `harita:` işidir — benim kalemim değil.

## 4. Başarım ölçüsü (şartname §2 "ilk teslim eden ölçecek")
Bütün aileler açıkken 1923-09-01'de `_dYaslaGuncelle` soğuk önbellekle **29,3 sn** sürdü
(81 hat yaslandı, 82 atlandı; tek ölçüm, bu makine, gizli bölme).

## 5. 82 YOK — Ö1 henüz SINANMADI (veri yazılmadı)

Önceki tur (`denetim/D1923-CIZGI-0920.md` §13–14) 1923 penceresindeki YOK'ları kovaladı.
Bu turda IBS 64 (China–U.S.S.R., 1978) indirildi, 21 sayfa tam metin okundu:
- Türkistan kesimi 1864 Tarbagatay + 1881 St. Petersburg + 1882–1893 protokolleriyle;
  Mançurya kesimi 1727 Kiahta + 1858 Aigun + 1860 Pekin (+ Rus yorumunda 1911 Tsitsihar)
  ile tarif ediliyor; 1923'te yürürlükte olan belgeler bunlar. IBS 1978 hattını AYNI
  belgelere bağlıyor ⇒ 1923 ↔ 1978 ayağı KAPALI.
- Açık ayak 1978 → bugün (1991/2004 Çin–Rusya, Orta Asya devir anlaşmaları) — OKUNMADI.

**Öneri (koordinatör hükmü bekliyor):** `sscb-cn-dogu/batialtay/kazak/kirgiz` (d1923 + g2
+ g3 kopyaları, 16 kayıt) `YOK → C`, geometri NE bugünkü çizgi = **C kaba vekil** (antlaşmanın
adla saydığı nehir/sırt izi), `degisti:null` KORUNUR, `kesinlik_km` "ölçülemedi". Bu,
üreticinin "bugünkü geometri yalnız 'değişmedi' ile" kuralını C için gevşetir — bu yüzden
yazmadım. Pamir, Moğolistan, Aksay Çin, Karakurum, McMahon, Vahan (FİİLÎ) kapsam dışı.
