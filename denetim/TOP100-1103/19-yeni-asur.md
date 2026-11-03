# 19 · Yeni Asur İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (saat kaydedilmedi)

## Özet
- Künye: 1 (`yeni-asur` -0910→-0608); öncüller `orta-asur` (-1362→-0910) ve `eski-asur` (-2024→-1749) yalnız sınır ilişkisi için okundu. Eksik künye yok.
- Ölçer: 9 kırılma günü, **0 AÇIK**; yerleşim 7 (Aşşur, Ninova, Şam, Cerablus, Babil, Samiriye, Megiddo), en geniş an -700 civarı 7.
- En ağır 3 bulgu:
  1. **TDV ile kısmi çelişki, ic_not'ta yok:** TDV `asya` tablosu Yeni Asur'u 883-612, `nineva` 612 verir; atlas f=-0910 (MÖ 911, Iranica/ORACC), t=-0608 (MÖ 609, ABC 3/Iranica). Çelişki iki kaynakla beyan edilmeli.
  2. **"Madde var, harita yok":** evrendeki en az 7 Asur fethi maddesi (Hama -0719, Gazze -0733, Sayda -0676/-0700, Malatya -0711, Uksur -0663, Memphis -0670) haritada mülkiyet değiştirmiyor — bu noktaların `s:` dilimi yok.
  3. Yerleşim kapsamı dar: Harran, Til Barsip, Arpad, Kalhu, Erbil, Nusaybin gibi Asur çekirdeği/eyalet merkezleri ya `s:`sız ya da kayıtsız.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| yeni-asur | Yeni Asur Imparatorlugu | -0910-01-01 | -0608-01-01 | ana; kaynak Iranica (tek) |
| orta-asur | Orta Asur Imparatorlugu | -1362-01-01 | -0910-01-01 | öncül; t = yeni-asur f (süreklilik ✓); TDV 1375-1047 çelişkisi ic_not'ta beyanlı |
| eski-asur | Eski Asur Devleti | -2024-01-01 | -1749-01-01 | öncül; TDV 'Eski Asur' kodlaması uyumsuz, beyanlı |
| yeni-babil | Yeni Babil | -0625-01-01 | -0538-10-12 | ardıl komşu (Babil `s:` -0626/-0625 geçişi) |
Eksik evre: Asur'un -0608 sonrası artığı yok (Harran'ın düşüşü ayrı polity değil). Mısır'ın Suriye'yi alması (-0608) madde ile ayrı kayıtlı.

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f -0910 (MÖ 911, II. Adad-nirari) | -0910-01-01 | ORACC RIAo (Q006021): Adad-nerari II «Written ca. 911-891», Neo-Assyrian dönem | Encyclopaedia Iranica «ASSYRIA i» (künye kaynağı): «Adad-nirari II (911-891 B.C.)» ; Met Museum timeline (özet): 911'e dek kesin kronoloji | **Uyuşuyor, 2 bağımsız kaynak.** Çelişki: TDV `asya`: «Yeni Asur İmparatorluğu (883-612)» (II. Aşurnasirpal başlangıcı) ve TDV `nineva`: Aşurnasirpal 884-858. TDV'nin tablosu şematik (Orta Asur 1375-1047 ⇒ 1047-883 boşluk); gün/yıl iddiası değil periyodizasyon. **Öneri: f korunur, TDV 883 farkı ic_not'a yazılır** |
| t -0608 (MÖ 609, Harran) | -0608-01-01 | Iranica «ASSYRIA i»: Ninova «[August, 612]»; Harran'da direniş | ABC 3 (Grayson, Assyrian and Babylonian Chronicles, 1975; metin Livius'ta çeviri): 16. yıl (610/609) Harran Medler+Babil'e düştü, 17. yıl Du'ûzu-Ulûlu Aššur-uballit II Harran'ı geri alamadı | Hüküm: **korunur.** MÖ 609 = ABC 3 yıl 17. Çelişki: TDV `nineva`/`asya`: 612. Atlas bu iki uç arasında Harran artık devletini -0608'e dek tutuyor (aynı polity sürüyor ⇒ künye GENİŞLET sınıfı). ic_not'a "TDV 612 ↔ ABC 3 609" yazılmalı. Evrende `olaylar_antik_yakin_dogu.js:65` Harran düşüşünü -0609 (MÖ 610) yazıyor, künye t -0608: bir yıl fark ayrı olaylar, tutarlı |
| Aşşur son -0613 (MÖ 614) | Aşşur `s: yeni-asur` t=-0613 | ABC 3: yıl 12 (614/613) Âbu: Aşşur alındı | Iranica (özet) | ✓ |
| Ninova son -0611 (MÖ 612) | t=-0611 | Iranica: Ağustos 612 | TDV `nineva`: 612; ABC 3: Âbu (Temmuz-Ağustos 612) | ✓ üç kaynak |
| Babil `s:` -0709…-0626 | Sargon 710/709, ölümü ve Nabopolassar | `olaylar_arkeoloji_zincir.js:1167`: TDV Babil «Asur hâkimiyeti (745-626)» + Grayson ABC 2 | Brinkman (okunmadı) | Babil kesintileri (Merodakbaladan 721-710, Bel-ibni, Tahrip 689, Şamaş-şuma-ukin 668-648 isyanı) tek dilimle gösteriliyor — kaynak/beyan |
| Şam `s:` -0731 (MÖ 732) | -0731-01-01 | evren madde `olaylar_antik_yakin_dogu.js:85` | (okunmadı) | madde -0732 (Galile/Gilead) Şam için ayrı madde yok (bkz. c) |

## c) Kronoloji
Evrende var (Değişmez 2): -0910 Adad-nirari II (`olaylar_antik_yakin_dogu.js:98`); -0878 Kalhu başkent (`:96`); -0883 Aşurnasirpal (`kronoloji_sinir_antik3_1024.js:14`); -0858; -0744 Tiglat-pileser III (`:88`); -0732 Galile/Gilead, -0733 Gazze, -0719 Hama, -0716 Karkemiş, -0713 Urartu, -0711 Malatya, -0704 Sennacherib, -0700 Yahuda/Sayda, -0688 Babil tahribi, -0676 Sayda yeniden kuruldu, -0670 Mısır/Memphis (`olaylar_antik_misir_nubya.js:46`), -0663 Teb, -0647 Babil, -0644 Susa, -0630 Aşurbanipal ölümü, -0613 Kyaksares ittifakı, -0609 Harran, -0608 Neko. İyi kapsanmış.
Ninova düşüşü (`olaylar_arkeoloji_mezopotamya.js:10`, Grayson ABC 3 + TDV Ninevâ) ve Aşşur düşüşü (`olaylar_arkeoloji_mezopotamya.js:23`, MÖ 614) evrende de var: eksik madde bulunamadı. Zayıf nokta: ABC 3 ay veriyor (Âbu), madde yıl hassasiyetinde olabilir.
Madde-yer eşleşmesi (madde var, `s:` yok — d bölümüne bakın): Hama -0719, Gazze -0733, Sayda -0676/-0700, Malatya -0711, Teb/Uksur -0663, Memphis -0670.

## d) Harita uyumu
Ölçer: 9 kırılma, 0 AÇIK; harita ömrü -910→-608 (künyeyle uyumlu); yerleşim 2→4→6→7 (-910: 2, -730: 4, -700: 7, -610: 4).
En geniş (-700) sahiplik: Şam (-0731'den), Cerablus/Karkemiş (-0716'dan), Babil (-0709'dan), Aşşur, Ninova, Samiriye (-0721'den), Megiddo (-0731'den) — hepsi evrendeki fetih maddeleriyle uyumlu (Şam -0732 Galile/Gilead maddesi bölgesel; Şam için ayrı madde önerilir, bkz. aşağı).
Bilinen sınırdan taşan yok. Kudüs `yahuda` (Asur vasalı) olarak bırakılmış — vasal ≠ mülk, makul.
**Haritada karşılığı olmayan kayıtlı Asur toprakları** (mevcut yerleşim kaydı var, -0910…-0608 arası `s:` yok):
| Yerleşim | Öneri `s: yeni-asur` | Dayanak (evrendeki madde / kaynak) |
|---|---|---|
| Hama | f=-0719 (kaynaksız madde: `olaylar_antik_yakin_dogu.js:84`) | Sargon II eyalet yaptı (MÖ 720) |
| Gazze | f=-0733 (`:86`) | Tiglat-pileser III (MÖ 734) |
| Sayda | f=-0676 (`:75`) / -0700 (`:79`) | Esarhaddon Kar-Esarhaddon (MÖ 677); Sennacherib (MÖ 701) — iki madde çelişir: önce hangisi sahip değiştirir kararlaştırılmalı |
| Malatya / Eski Malatya | f=-0711 (`:81`) | Sargon II Melid'i aldı (MÖ 712) |
| Uksur (Teb) | f=-0663 (`:74`) | Asurbanipal Teb'i yağmaladı; fetih değil yağma ⇒ `s:` önerilmez, beyan |
| Memphis | f=-0670, t=-0663? (`olaylar_antik_misir_nubya.js:46`) | Esarhaddon Memphis'i aldı (MÖ 671); Taharka geri aldı (MÖ 669?), sahiplik kısa; kaynak okunmadı |
| Harran | çekirdek eyalet; rump başkent -0610…-0608 | ABC 3 yıl 14-17 |
| Til Barsip | f=-0855 (Shalmaneser III Bit-Adini, ORACC RIAo; kaynak okunmadı) | |
| Arpad (Tall Rif‘at) | f≈-0739 (Tiglat-pileser III 743-740 kuşatma; kaynak okunmadı) | evrende `:87` yalnız savaş |
| Erbil, Nusaybin, Kerkük, Halep, Sûr, Akkâ | kaynak aranmalı | Asur eyalet listesi (Eponym/Forrer/RIAo) okunmadı |
| Kalhu (Nimrud) | yerleşim kaydı yok (evrende `odak_yer:"Musul"`) | yeni yerleşim kaydı + mükerrer tarama (normalleşmiş ad + 3 km) gerekir |
Babil `s:` -0626→-0625 arası 1 yıllık `__BOSLUK__` (ardıl yeni-babil f -0625): kaynak (Nabopolassar 626-625) ile örtüşmeli; boşluk 1 yıl, beyanlıysa bırak.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `yeni-asur` `ic_not`: «TDV asya: 883-612; TDV nineva: 612, Aşurnasirpal 884-858. Iranica+ORACC: Adad-nirari II 911, ABC 3: MÖ 609 Harran. f/t korundu: TDV tablosu periyodizasyon, Orta Asur tablosuyla (1375-1047) 1047-883 boşluk bırakıyor.» `kaynak:`a ORACC RIAo Q006021 ve ABC 3 (Grayson) eklenir (2. kaynak).
2. Yerleşim dosyalarında (`yerlesimler_ek25.js`/`mo_zincir.js`/ilgili) Hama, Gazze, Sayda, Malatya için `s:` dilimleri — her biri yalnız o evrendeki maddenin tarihi + kaynağı ile; sahibi sonra gelen devlete (Mısır/Babil/Ahamenid) bağlanana dek `__BOSLUK__`.
3. Til Barsip, Arpad, Harran, Kalhu için kaynaklı `s:` dilimi (kaynak: ORACC RIAo/Grayson/Iranica); Kalhu yerleşimi yeni kayıt.
4. İki madde çiftinde çelişen tarihler tek bir hükme bağlanmalı: Sayda -0676/-0700.

## Erişilemeyen kaynaklar
- TDV `asya` tablosu başlıkları var (883-612) ama bu tablonun dayandığı akademik kaynak ve neden Orta Asur 1047'de bitiyor belli değil; TDV'de «Asurlular» maddesi aranmadı bulunamadı (arama `asurlular` ilgisiz sonuç döndürdü) — kesin "yok" değil.
- Brinkman, A Political History of Post-Kassite Babylonia (1968) ve Grayson, ABC (1975) ABC 2/3 sayfa numaraları: erişilemedi; ABC 3 yalnız Livius çevirisi (yol gösterici) üzerinden okundu. Soru: Nabopolassar yıl 17 (609) Harran kuşatması gün/ay.
- ORACC RIAo Q006021 yalnız künye düzeyinde okundu; RINAP 1-5 giriş sayfaları ve Eponym Kanonu okunmadı.
- Met Museum «Assyria 1365-609 B.C.» esse: HTTP 429; özet arama sonucu üzerinden.
- Iranica ASSYRIA i: künye `kaynak`ından alıntı, bu oturumda sayfa açılmadı.
- Til Barsip/Arpad/Hama/Gazze/Sayda/Malatya eyalet tarihleri için Radner, «Assyrian Empire» (CAH/Brill) ve Parpola-Porter Helsinki Atlas: erişilemedi. Soru: her bir yerin eyalet olma yılı (eponym).
