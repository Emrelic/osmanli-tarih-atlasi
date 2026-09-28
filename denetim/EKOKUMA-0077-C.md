# EKOKUMA-0077-C — Ermeni meselesi ek okumaları (paket 0077 · H-0012)

27 Eylül 2026 · şartname `oturumlar/EKOKUMA-0077-C.md` · yazılan dosya `data/ekokuma_p77c.js` (`window.EKOKUMA_P77C`)

## Hüküm

| Madde | Hüküm | Gerekçe |
|---|---|---|
| H-0012 | **sirada** | 8 kart yazıldı ve sınandı; **yükleyiciye bağlı değil** — `js/app.js` ek okuma listesine `"ekokuma_p77c"` satırı (p76h'nin altına) ve `index.html` gerekiyorsa koordinatör/app.js sahibi ekler. Kartlar bağlanmadan ekranda görünmez (D099). |

## Yazılan 8 kart

| # | id | tür | Emre'nin sorusu |
|---|---|---|---|
| ① | `ermeni-1915-soykirim-tehcir-mukatele-tartisma` | tartisma | soykırım mı · tehcir mi · mukatele mi, karşılıklı iddialar |
| ② | `ermeni-nufusu-savas-oncesi-sonrasi-tartisma` | tartisma | savaş öncesi/sonrası nüfus |
| ③ | `ermeni-komitalari-isyanlar-1887-1909-tartisma` | tartisma | komitacılık, isyanlar, Ermeni olayları |
| ④ | `hamidiye-alaylari-1890-tartisma` | tartisma | Hamidiye alayları |
| ⑤ | `osmanli-toplumunda-ermeniler-1461-1923` | tartisma | Fâtih'ten bugüne Osmanlı toplumunda Ermeniler |
| ⑥ | `ermeni-bagimsizlik-neden-olmadi-tartisma` | tartisma | Balkanların aksine bağımsızlık neden olmadı |
| ⑦ | `ermeni-meselesi-kronolojisi-1878-1923` | sebep-sonuc | kronolojik sıralama (1461 → 1923 + sonrası, 30 satır) |
| ⑧ | `ermeni-meselesi-1918-1923-sevr-gumru-tartisma` | tartisma | savaş sonrası olanlar |

## Hassasiyet disiplini — nasıl uygulandı
- Hiçbir cümle hüküm olarak yazılmadı: her iddia **kaynağıyla** ("TDV'nin tehcir maddesine göre") ya da **sahibiyle** ("Türkiye'nin resmî görüşü", "USHMM'nin özeti") verildi.
- **Çelişen sayılar yan yana**, ortalama yok: kayıp TDV/Lewy 56.000–2.000.000 ↔ USHMM 664.000–1.200.000; Erzurum Ermeni nüfusu Cuinet 134.967 ↔ Kāmûsü'l-a'lâm 109.835; Van şehri TDV'nin kendi içinde 70.000 ↔ 30-35.000.
- Soykırım tezi, Türk resmî tezi ve "mukatele" (Müslüman kayıpları merkezli) okuma **üç ayrı paragraf**; karşılıklı itirazlar ayrı paragraf.
- TDV `tehcir` maddesinin **taraf tutan bir yazar metni** olduğu (Kemal Beydilli, yazar sayfadan doğrulandı) kart içinde açıkça söylendi; TDV `teskilat-i-mahsusa` maddesiyle arasındaki gerilim (`not:` alanı) gizlenmedi.
- Kaynaksız kalan 6 cümle yazım sonrası özdenetimde **ayıklandı** (ör. "Balkan milletleri çoğunluktu", "Van müdafaası adlandırması", Talat Paşa hakkında tarafların nitelemesi, "Lozan doğu sınırını Gümrü üzerine kurdu") — bunlar okunan kaynaklarda yoktu.

## Kaynaklar
- **TDV CANLI (gövde okundu, 21):** tehcir · hamidiye-alaylari · teskilat-i-mahsusa · millet · islahat-fermani · berlin-antlasmasi · ayastefanos-antlasmasi · sevr-antlasmasi · lozan-antlasmasi · abdulhamid-ii · talat-pasa · kazim-karabekir · mondros-mutarekesi · van · mus · erzurum · adana · osmanlilar · nufus · sivas · bitlis (son ikisinde Ermeni nüfus paragrafı çıkmadı)
- **TDV ÖLÜ (302, 20):** ermeniler · ermeni-meselesi · ermenistan · ermeni · ermeniyye · sasun · sason · zeytun · hincak · hincakyan · tasnak · kilikya · osmanli-bankasi · osmanli-bankasi-baskini · gumru-antlasmasi · kars-antlasmasi · ermeni-patrikhanesi · millet-sistemi · kumkapi · malta-surgunleri (+ birkaç türev slug)
- **TDV BOŞ GÖVDE (tuzak ③, yalnız tanım satırı):** patrikhane · fatih-sultan-mehmed · maras · urfa
- **TDV 503 (tuzak ⑤, taşıma):** ilk turda 7 slug 503 verdi; 3 sn aralıkla tekrar denendi, canlıları okundu.
- **TDV arama sayfası** sonuçları JS ile yüklüyor; düz HTML'de madde bağlantısı yok ⇒ slug'lar kapsayıcı YER/KİŞİ maddelerinden denendi (§4).
- **TDV dışı, "kimin iddiası" olarak:** T.C. Dışişleri Bakanlığı "The Events of 1915 and the Turkish-Armenian Controversy over History: An Overview" (Türkiye'nin resmî görüşü) · USHMM Holocaust Encyclopedia "The Armenian Genocide (1915–16): Overview" (soykırım tezinin kurumsal özeti).
- **Çekilemedi:** Britannica (403) · Ermenistan Soykırım Müzesi-Enstitüsü (alan adı çözülmedi) · Ermenistan Dışişleri (404). ⇒ **Ermenistan'ın resmî metni doğrudan alıntılanamadı.**
- Önbellek: `denetim/EKOKUMA-0077-C-tdv-onbellek/` (commitlenmedi — 0076 kollarının önbellekleri gibi izlenmeyen dosya; osmanlilar.txt 687 KB).

## Bulunamadı
- Osmanlı'nın 1914 resmî istatistiğinin **imparatorluk geneli** Ermeni toplamı ve Ermeni Patrikhanesi'nin savaş öncesi sayımı.
- 1927 sayımındaki Ermeni sayısı; bugünkü Türkiye Ermeni cemaatinin sayısı/kurumları.
- 1909 Adana olaylarının Ermeni tarafındaki anlatısı ve kayıp sayıları; 1894-96 olayları için "katliam" adlandırmasını savunan tarafın kendi gerekçesi.
- Van 1915 ve 1920 doğu harekâtının Ermeni tarafındaki anlatısı.
- 1919 Divan-ı Harb-i Örfi yargılamalarının öteki sanıkları ve hükümleri.
- "Mukatele" kelimesinin kendisi — okunan hiçbir kaynakta geçmiyor; kavram TDV'nin "sivil savaş / kanlı hesaplaşma" ifadeleriyle temsil edildi (kartta söylendi).
- Sason, Zeytun, Kumkapı olaylarının gün/ay tarihleri (müstakil maddeler ölü).

## Kaynak çelişkileri (tuzak ⑥)
1. **TDV `tehcir`:** uygulamanın sonu "15 Mart 1915" basılı — kanunun onayından (27 Mayıs 1915) önce. Baskı hatası olmalı; doğru gün bulunamadı, kartta yazılmadı, çelişki `not:`ta.
2. **TDV `van`:** Türk ordusunun şehre girişi "Nisan 1919" yazılı. Atlas kronolojisinde Van'ın kurtuluşu `1918-04-02` — atlas dayanak olmadığı için hüküm vermedim; ama iki tarih arasında bir yıl var, kronoloji sahibi bakmak isteyebilir. Kartta TDV'nin kendi ifadesi ("1919'da 10-15 bin") kullanıldı.
3. **TDV `van`:** savaş öncesi şehir nüfusu bir paragrafta ~70.000, başka paragrafta 30-35.000.

## Sınav (öngörü önce)
- **Öngörü:** 8 kartın bütün `olay:` bağları (26) canlı kronolojide (index.html'in yüklediği 128 olaylar*/kronoloji* dosyası, 7165 madde) en az bir maddeye tutar; bilerek bozulan bir bağ (`1915-05-28|Tehcir`) tutmaz.
- **Sonuç:** `node denetim/ARAC-EKOKUMA-0077-C-OLAY.js` → bağ 26 · tutmayan **0**; `--bozuk` → bağ 27 · tutmayan **1** (alet ateşliyor). Dosya `vm` ile hatasız yüklendi (sözdizimi temiz), mükerrer id yok.

## Araçlar
- `denetim/ARAC-EKOKUMA-0077-C-TDV.py` — TDV slug çekici (yönlenmeyi izlemez → 302'yi ölü olarak görür)
- `denetim/ARAC-EKOKUMA-0077-C-PASAJ.py` — önbellekte desenli paragraf ayıklayıcı
- `denetim/ARAC-EKOKUMA-0077-C-DIS.py` — TDV dışı kurumsal kaynak çekici
- `denetim/ARAC-EKOKUMA-0077-C-OLAY.js` — `olay:` bağ sınavı (app.js `_ekNorm`/`_ekBagEslesir` mantığının kopyası)

## İstenen
1. `js/app.js` yükleyici listesine `"ekokuma_p77c",  // window.EKOKUMA_P77C — EKOKUMA-0077-C (8 kart)` satırı (app.js sahibi).
2. Ermeni tarafının resmî metni istenirse: Ermenistan Soykırım Müzesi-Enstitüsü'ne erişebilen bir oturum/ağ (bu makineden DNS çözülmedi).

(Not 28 Eylül: 1. madde yapıldı — `app.js:10500` `"ekokuma_p77c"` bağlı.)

---

# EK GÖREV — paket 0080 H-0023: Tımar sistemi (28 Eylül 2026)

| Madde | Hüküm | Gerekçe |
|---|---|---|
| H-0023 | **sirada** | 9. kart `timar-sistemi-1432-1827` (tur `sebep-sonuc`) `data/ekokuma_p77c.js`e eklendi; dosya yükleyicide ZATEN bağlı (`app.js:10500`) — yeni satır gerekmez. Koşu 17 sürdüğü için yayın koordinatörde. |

Kapsam (koordinatörün listesi, hepsi kartta): tımar nedir · dirlik/zeâmet/has farkı · sipahinin yükümlülüğü · cebelü hesabı · veriliş ve geri alınış · çözülüş · 1827 elli üç sancak.

## Ölçüm — "1432" neyi tarihliyor (D211 ⑧)
- TDV `timar` (Halil İnalcık, c.41 s.168-173): "835 (1432) tarihli **Arvanid Defteri**" ve "Daha 835 (1432) yılı civarında bu kanunlar tam olarak yürürlükteydi". ⇒ 1432 bir kuruluş günü DEĞİL, **günümüze ulaşan en eski icmal defterinin yılı**. Sisteme belgeli ilk atıf Orhan Bey dönemine gider.
- TDV `cebelu` (Feridun Emecen): aynı defteri "**1431** tarihli" der. Çelişki DEĞİL: hicrî 835 ≈ Eylül 1431 – Ağustos 1432. Kart bunu açıkça anlatır.
- TDV `timar`: 1827'de "Rumeli ve Anadolu'daki **elli üç sancaktan 5200 kadar** timarlı sipahi" Asâkir-i Mansûre süvarisine çevrildi — koordinatörün "53 sancak" ölçümü TDV'de birebir var.

## Kaynaklar
- CANLI: timar (37.029 kr.) · zeamet (Erhan Afyoncu) · sipahi (Erhan Afyoncu) · cebelu (Feridun Emecen)
- BOŞ GÖVDE (tuzak ③): dirlik (yalnız tanım satırı)
- ÖLÜ (302): has · kilic-timar

## Bulunamadı
- Kurumsallaşmanın gün/ayı — hiçbir kaynakta yok; yapısı gereği olamaz (süreç).
- 1827 tasfiyesinin gün/ayı — TDV `timar` yalnız "1827" der.

## Atlasa not (benim dosyam değil, hüküm vermedim)
- Kronoloji maddeleri `1432-06-01` (OLAYLAR_EK14 "Tımar sisteminin kurumsallaşması") ve `1827-02-01` (OLAYLAR_EK5 "Tımar sisteminin tasfiyesi") **ay taşıyor**; okunan TDV maddeleri ikisinde de yalnız YIL veriyor. `§4` / `D213` gereği `YYYY-01-01` olmalı gibi görünüyor — kronoloji sahibi kaynağını kontrol etsin. Kartın `olay:` bağları bugünkü tarihlere bağlı; tarih düzelirse bağ da güncellenmeli.

## Sınav
`node denetim/ARAC-EKOKUMA-0077-C-OLAY.js` → kart 9 · bağ 29 · tutmayan 0 (yeni üç bağ: 1432-06-01 · 1827-02-01 · 1650-01-01 İltizam).
