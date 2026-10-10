# KASA-BAYAT-OZILAN-1010 — bayat öz-ilan taraması (üç kova)

Görev: YILDIRIM BAYEZIT (M-5905 ④ + son hüküm ⑥: "formülü bekleme, ③'e geç") · Araştırmacı: KASA · salt okuma.
**Bağlayıcı dört şart:**
1. ÜÇ kova ayrı sayılır. "raporda/bildirildi/çelişki" ibareleri ⓑ'ye değil ⓒ ADAYINA düşer; ⓒ kararı VERİYE bakılarak
   verilir.
2. Çıktı LİSTE: kayıt adı + dosya + kova.
3. Hiçbir eski ilan silinmez, çürütme yanına yazılır.
4. Desen `girdi.yukle()` ile kurulur, grep ile değil.

Kovalar:
- ⓐ **SUSAN** — ilan var ama hata, ilanın sustuğu aralıkta (Mljet).
- ⓑ **BAYAT** — ilan çözülmüş bir sorunu açık gösteriyor (Bosna ×5).
- ⓒ **DOĞRU ama UYGULANMAMIŞ** — ilan doğru, raporlanmış, veriye inmemiş (Novi).
- Kova dışı, sayılır ama listelenir:
  - **GEÇERLİ**: ilan bugün de doğru.
  - **İLGİSİZ**: desen tuttu ama cümle bir öz-ilan değil, ya da yıl başka bir olayın.

## Evren (ölçüldü — `girdi.yukle()`, @ 6f9e5fb7; SINIFLANDIRMA YAPILMADAN)
- Taranan: **4300** kayıt.
- Kayıt düzeyinde (`neden`/`not`/`kaynak`) öz-ilan deseni taşıyan: **857** (kaynak 789 · not 40 · neden 38).
  - Desen: araştırılmadı · bulunamadı/bulunamadi · doğrulanamadı · kaynağı yok · komşu emsal.
  - ⇒ Hepsine elle bakılmaz.
- **Mekanik aday kümesi B1** (ⓑ adayı): öz-ilan CÜMLESİNDE geçen bir yıl, kaydın HİÇBİR dilim sınırında / `kur` /
  `bit`'te YOK. Yani ilan, verinin artık taşımadığı bir tarihe atıf yapıyor. ⇒ **29 kayıt, 35 cümle.**
  - Doğrulama: bilinen 5 bayat Bosna kaydından **2'sini** yakalıyor (Brod, Jasenovaç: "1538").
  - Kalan 3'ün ilan yılları hâlâ bir sınırda ⇒ **B1'in duyarlılığı bilinen pozitiflerde 2/5** (beyan; B1 bayatlığın
    yalnız "tarih kayması" yüzünü görür).
- **Mekanik aday kümesi C** (ⓒ adayı, şart ①): herhangi bir metin alanında (kayıt + dilim `kaynak:`)
  raporda/rapora/raporlandı/bildirildi/çelişki rapor ⇒ **23 kayıt.**
- **Bakılacak:** B1 ∪ C = en çok 52 kayıt — HEPSİNE elle (veriye bakarak) bakılır.
- **ⓐ SUSAN mekanik olarak ÖLÇÜLEMEZ:** ilanın sustuğu yerdeki hatayı görmek gövde ölçümü ister ⇒ bu taramada **0
  beklenir**, bulunursa yan bulgu.

## 0. ÖNGÖRÜ (sınıflandırmadan ÖNCE — ayrı commit)
- **B1 (29 kayıt):** ⓑ BAYAT **8 ± 4** · GEÇERLİ **13 ± 5** · İLGİSİZ **6 ± 3** · ⓒ **1 ± 1**.
- **C (23 kayıt):**
  - ⓒ (raporlanmış, veride UYGULANMAMIŞ) **6 ± 3**.
  - ⓑ (raporlanmış VE uygulanmış, ifade bayat) **7 ± 4**.
  - İLGİSİZ ("rapor" başka anlamda: dış rapor, denetim dosyası) **8 ± 4**.
  - GEÇERLİ **2 ± 2**.
- **B1 ∩ C:** **2 ± 2** kayıt.
- **Novi tipi YENİ bir veri hatası** (ⓒ'de, kaynakla teyitli, veri ≠ kayıt içi kaynak) en az 1: **%70**; ≥ 3: %25.
- **Dosya yoğunlaşması:** ⓑ+ⓒ'nin ≥ %50'si **en çok 3 dosyada** (paket-paket güncelleme deseni — Bosna ek29 gibi):
  **%65**.
- **Diff:** ⓒ'lerin veriye bakılarak teyit edilenleri + ⓑ'lerin yanına "⇒ GÜNCEL DEĞİL" notu ⇒ bir diff; tam `denetle`
  ⓑ notları için tabanla AYNI %95, ⓒ düzeltmeleri için kapı sayısı değişebilir.

## 1. ÖLÇÜM (B1 ∪ C = 47 ayrı kayıt; HEPSİNE elle, veriye bakarak)
B1 ∩ C = 5 kayıt (Brod, Jasenovaç, Çaldıran, Başkale, Sambalpur) ⇒ 29 + 23 − 5 = **47**. Kova kararı kayıt başına,
ⓒ kararları VERİ okunarak (şart ①).

### 1.1 LİSTE (şart ②)
| kova | kayıt | dosya | gerekçe (veri okundu) |
|---|---|---|---|
| ⓑ BAYAT | Bosna Brod'u | yerlesimler_ek29.js | `neden:`/`kaynak:` "1538 komşu emsali" + s[0]/s[1] "(atlas 1538 — çelişki raporda)" — veri 1536 (BOSNA-MACAR-0087) |
| ⓑ BAYAT | Jasenovaç | yerlesimler_ek29.js | aynı |
| ⓑ BAYAT | Çaldıran | yerlesimler_ek26.js | `neden:` "atlas Van kaydı 25 yazıyor, fark raporda" — Van artık **1548-08-24** (ölçüldü) |
| ⓑ BAYAT | Başkale | yerlesimler_ek26.js | aynı |
| ⓒ UYGULANMAMIŞ | Bosna Novi'si | yerlesimler_ek29.js | "Osmanlı 1557 (atlas 1556 — çelişki raporda)" — veri 1556 ⇒ **KASA-BOSNA-EK29 diff'inde çözülüyor** |
| ⓒ UYGULANMAMIŞ | **Uyvar** | yerlesimler.js | s[0]: "⚠️ nokta 1545'te KURULDU (kur: yok, ayrıca bildirildi)" (TDV uyvar: kale 1545'te Estergon başpiskoposunca) — veri: `kur` YOK, `macaristan 1281 →` ⇒ kur hükmü sınıfı (Feyzâbâd emsali: öncül yerleşim var mı ölçülmeli) |
| ⓒ UYGULANMAMIŞ | **Lugos → Temeşvar** | yerlesimler.js | Lugos s[1] (enklav:true): "Ferdinand 1551'de Banat kalelerinin HEPSİNİ (Temesvár, Lippa … Lugos …) aldı; ada, komşu Temeşvar kaydının bu dönemi taşımamasından doğuyor (Temeşvar 1552'ye kadar macaristan — raporda kayıtlı)" — veri: Temeşvar `macaristan 1281 → 1552-07-27`, 1551-07 → 1552-07 Ferdinand dilimi YOK ⇒ Lugos enklavı canlı. Kayıt-içi tanık B 0013/988 ('július 16-ika körül') — **KASA doğrulamadı** |
| ⓒ UYGULANMAMIŞ | **Cizre** | yerlesimler_ok107.js | `neden:` "Cizre/Bohtan emirliği künyesi YOK … KUNYE ONERISI raporda" — `devletler.js`'te cizre/bohtan/botan kimliği **0** (ölçüldü); veride 1508 → 1515-09-19 deliği sürüyor |
| ⓒ UYGULANMAMIŞ | **Rykovskoye (Kirovskoye)** | yerlesimler_a78_asya.js | s[2]: "1920-07-03 → 1925-05-15 JAPON İŞGALİ (FRUS 1921 II belge 656 · FRUS 1925 II belge 563) — isg YAZILMADI, koordinatöre bildirildi" — veride `isg` YOK |
| ⓒ UYGULANMAMIŞ | **Onor** | yerlesimler_a78_asya.js | aynı cümle, `isg` YOK |
| GEÇERLİ | Kirmanşah | yerlesimler.js | "1588-1604 ADIYLA kaynak BULUNAMADI" hâlâ doğru; d 1590-1603 açıkça Emre kararı + komşu-kuşak dayanağı (kayıt bunu söylüyor) |
| GEÇERLİ | Deyrülkamer · Katar Yarımadası · Şeyhrumi · Sambalpur · Hengyang · Ganzhou · Chenzhou · Mianning · Lijiang · Taşkurgan | ek29 · ek_korfez · sinir_dogu · nokta_asya_0917 ×4 · a78_asya ×3 | ilan bugünkü veriyle uyumlu (kodlanmayan dönem / reddedilen öneri / uçsuz işgal beyanı) |
| GEÇERLİ | Colcha K · Inquisivi · Moura · San Pedro de Atacama · Putre · Taltal · Daru | a78_amerika ×6 · a78_okyanusya | kuruluş / işgal günü bulunamadı — hâlâ doğru |
| GEÇERLİ | Dimetoka · Drežnik · Zeya · Cali · La Agüera · Atâr · Şinkît · Gobernador Gregores · Murska Sobota · Napier · Taupō · Eisenstadt | yerlesimler.js · ek29 · sibirya2 · gamerika · a78_afrika ×3 · a78_amerika · a78_avrupa · a78_okyanusya ×2 · p77_avrupa | "çelişki bildirildi" = kaynak SEÇİMİ yapılmış ve beyan edilmiş (ya da emsal sınıfı, F8) — uygulanacak bir şey yok |
| İŞLENDİ (inmemiş diff) | Ji'an (1861 cümlesi) · Feyzâbâd | nokta_asya_0917 · a78_asya | çürütme notları KASA-JIAN-TAIPING / KASA-FEYZABAD-KUR diff'lerinde |
| İLGİSİZ | Beyan K7.5 B62.5 · Santa Ana del Yacuma · São Paulo de Olivença · Fortín Muñoz · Cushamen | gamerika · a78_amerika ×4 | yıl, başka bir yerin kuruluşu / aday nokta notu — öz-ilan değil |
| ⓐ SUSAN | — | — | mekanik ölçülemez (beyan); bu taramada yan bulgu da çıkmadı |

**Sayım:** ⓑ **4** · ⓒ **6** (Novi + 5 yeni) · GEÇERLİ **30** · İŞLENDİ **2** · İLGİSİZ **5** · ⓐ 0 ⇒ 47.
- B1 içinde (29): ⓑ 4 · ⓒ 0 · GEÇERLİ 18 · İŞLENDİ 2 · İLGİSİZ 5.
- C içinde (23): ⓑ 4 · ⓒ 6 · GEÇERLİ 13 · İLGİSİZ 0.

### 1.2 🔴 Bulgu: ⓒ'nin beş yeni üyesi — "bildirildi" bir ÖDEME DEĞİL
Novi tek değilmiş. Beşinin ortak deseni: işçi doğru bulguyu kaydın İÇİNE yazmış ("raporda kayıtlı" / "ayrıca
bildirildi" / "koordinatöre bildirildi" / "KUNYE ONERISI raporda"), ama veri değişmemiş.
- **Kuzey Sahalin Japon işgali 1920-1925:** iki kayıt kendi kaynağında FRUS belgesiyle yazıyor, `isg:` yok. Aynı bölgenin
  Aleksandrovsk ve "Kuzey Sahalin (bölge)" kayıtlarında da `isg:` yok (ölçüldü) ⇒ 4 kayıtlık bir uçsuz-DEĞİL işgal
  (iki ucu günlü!). Kuyruğun en ucuz kalemi.
- **Temeşvar 1551-52:** Lugos'un enklavı Temeşvar'ın eksik dilimi yüzünden; düzeltme Lugos'ta değil KOMŞUDA ⇒ notu
  okuyan, sorunu notun yazılı olduğu kayıtta arar ve bulamaz.
- **Uyvar `kur`** ve **Cizre künyesi:** kur hükmü (Feyzâbâd sınıfı) ve künye kuyruğu kalemleri.
⇒ Bu kova, öz-ilan evreni üstüne kurulacak işler için en tehlikelisi (koordinatörün uyarısı birebir tuttu): beşi de
"ele alınmış" diye okunuyor.

### 1.3 Diff'ler
- **`KASA-BAYAT-OZILAN-1010.diff`** (yerlesimler_ek26.js, 2+/2−): Çaldıran + Başkale `neden:` "fark raporda"nın yanına
  "⇒ GÜNCEL DEĞİL: Van kaydı artık 1548-08-24 — fark kapanmış". Eski metin silinmedi.
- **`KASA-BOSNA-EK29-1010.diff` v2** (aynı dosya ⇒ KATLANDI, "atıf aynı commit'te iner"): v1 + Brod/Jasenovaç s[0]/s[1]
  "(atlas 1538 — çelişki raporda)" yanına "⇒ GÜNCEL DEĞİL: veri artık 1536". v1'e göre yalnız not; veri değişikliği aynı
  (Novi 1557).
- ⓒ'lerin veri düzeltmeleri bu turda YAZILMADI (Sahalin isg · Temeşvar dilimi · Uyvar kur · Cizre künye) — her biri
  ayrı kaynak doğrulaması ve/veya senin hükmün ister. Liste §1.1'de.
- Sınav: aşağı (§3).

## 2. Öngörü ↔ ölçüm
```
B1 ⓑ 8 ± 4            ✗ 4 … AMA B1'de ⓑ 2 kayıt (Brod, Jasenovaç); Çaldıran/Başkale ⓑ'si C'den geldi
                      (B1'deki ilan cümleleri GEÇERLİ, bayat olan aynı kaydın BAŞKA cümlesi) — sayım kayıt başına 4
B1 GEÇERLİ 13 ± 5     ✗ 18 (üst sınır 18 — sınırda)
B1 İLGİSİZ 6 ± 3      ✓ 5
B1 ⓒ 1 ± 1            ✓ 0
C ⓒ 6 ± 3             ✓ 6
C ⓑ 7 ± 4             ✓ 4
C İLGİSİZ 8 ± 4       ✗ 0 — "bildirildi" bu veride hep öz-ilan anlamında
C GEÇERLİ 2 ± 2       ✗ 13 — "çelişki bildirildi"nin çoğu kaynak SEÇİMİ beyanı; öngörü onu İLGİSİZ sanmıştı
B1 ∩ C 2 ± 2          ✗ 5
Novi tipi yeni hata ≥1 %70 / ≥3 %25    ✓ 5 (Sahalin ×2 · Temeşvar · Uyvar · Cizre) — ≥3 tuttu
ⓑ+ⓒ ≥%50 en çok 3 dosyada %65          ✓ 7/10 (ek29 3 · ek26 2 · yerlesimler.js 2)
```
**Ders:** "bildirildi" kelimesinin anlamını öngörüde dağıttım (İLGİSİZ 8). Veride bu kelime HEP öz-ilan ve iki
anlamı var: (i) "seçim yaptım, beyan ettim" ⇒ GEÇERLİ; (ii) "bulgu başkasına gitti, ben uygulamadım" ⇒ ⓒ. İkisini
ayıran tek şey VERİ okumak (şart ①'in birebir gerekçesi).

## 3. Sınav
- İki diff birlikte (temiz worktree, @ aa279db0): `git apply` ✓; `girdi` ek26 (14 kayıt) ve ek29 (42 kayıt) okunuyor; çıplak LF 0.
- Tam `denetle.py` tabanla **satır satır AYNI** (yalnız not değişikliği + v1 Novi düzeltmesi).
- `paketle.py yenile` gerekir (ek26 + ek29 paketleri).
