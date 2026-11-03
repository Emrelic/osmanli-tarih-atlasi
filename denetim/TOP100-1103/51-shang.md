# 51 · Shang Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer top100_olc.py; kronoloji taraması k50.py)

## Özet
- Künye 1 (`shang`; `shangshan` Neolitik kültür, ilgisiz), açık kırılma 0 (ölçer) ama bu "temiz" yanıltıcı, eksik madde 3.
- Ağır 1: **Shang haritada tek noktadır** (Yinxu/Anyang) ve yalnız -1224 → -1080 arasında. Künye -1599 → -1045: ömrün 7/10'u haritada hiç görünmez (Erligang/Zhengzhou/Yanshi noktası yok), son 35 yıl da sahipsiz.
- Ağır 2: ölçerin "0 açık" sonucu **kendi kendine yeten kayıtlardan** geliyor: `olaylar_arkeoloji_zincir.js:1330,1345` «sahipsiz aralık dönemi sona erer/başlar» maddeleri "ayrı tarihsel olay DEĞİL, dönem ucu kaydıdır" diyor. Gerçek tarihsel madde -1224 ve -1080 uçlarını karşılamıyor.
- Ağır 3: atlas içinde **iki başlangıç değeri** var: künye f=-1599 (MÖ 1600, XSZ Projesi) ↔ `olaylar_arkeoloji_d3-hint-cin.js:194` «Shang dönemi başlar» -1499 (MÖ ~1500, Liu-Rawson-Pollard 2018). Çelişki beyanlı olmalı.
- MÖ→astronomik çeviri kontrolü: -1599, -1045, -1224, -1080, -1499, -1253, -1196 hepsi doğru; hata yok.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| shang | Shang Hanedanı | -1599-01-01 | -1045-01-01 | Tek künye. Eksik evre yok; ancak başkent "Erligang → Anyang" tek künyede; noktalar eksik (d). |
| shangshan | Shangshan Kültürü | -8849 | -6649 | Adı benzer, Shang hanedanıyla ilgisi yok (--ara shang sahte eşleşmesi). |

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| f | -1599 (MÖ 1600) | Xia-Shang-Zhou Dönemlendirme Projesi (2000): Shang c. MÖ 1600 (Yanshi surlu kenti ile başlatır) — bu oturumda birincil rapor OKUNAMADI; yalnız ikincil özetler görüldü | Liu R., Rawson J., Pollard A.M., *Scientific Reports* 8:11770 (2018), PMC6079070: «the Shang period (ca. 1500–1046 BC)»; Erligang «ca. 1500–1300» | **ÇELİŞKİ: 1600 ↔ 1500.** İki kaynak uyuşmuyor, üçüncüsü (Pankenier astronomik 1554) ikisinin arasında. Karar kaynakla verilemez; kesinlik "yüzyıl". | Künye `ic_not`: «f: XSZ 1600, Liu+2018 1500, Pankenier 1554 (aday)»; `kesinlik:` onyıl → yuzyil. f değişmez (-1599) ya da -1499'a çekilirse yerleşim zinciri etkilenmez (zincir -1224'te başlıyor). |
| t | -1045 (MÖ 1046) | Zhang Pengcheng, "The Chronology of Western Zhou", *Early China* (2022): «initial campaign against the Shang in 1046 b.c.e. and defeated Zhòu in 1044 b.c.e.» (Cambridge Core özeti okundu) | Shaughnessy 1985, *Early China* 11:33-60: «the date of the Zhou conquest of Shang was 1045 B.C.» (okundu); Pankenier 1992 BSOAS 55(2): 1046 (atlas olay kaydı alıntılıyor: «April 26, 1046 B.C.», bu oturumda okunmadı) | **Üç değer: 1046 / 1045 / 1044.** Atlas -1045 = MÖ 1046 (XSZ + Pankenier). Zhang'a göre 1046 yalnız İLK SEFER, fetih 1044 (= -1043). Shaughnessy 1045 = -1044. Çeviri doğru; seçim beyanlı. | `ic_not`ta üçlü beyan; `kesinlik:` yil zaten. Gün: Pankenier 26 Nisan 1046 (Jülyen, MÖ) bu makinede doğrulanmadı → yıl kalsın. |
| evre | Erligang→Anyang | Liu+2018: Erligang 1500–1300, Yinxu II 1200–1046 | Liu K. vd. 2021 *Radiocarbon* 63(1):155-175 (yerleşim kaynağı; Wu Ding başı %68 aralık MÖ 1254–1197) — bu oturumda okunamadı, atlas alıntısına güveniliyor | Başkent geçişi (Erligang→Anyang) künyede evre olarak yok, yerleşim olarak da yok. | Bkz. d). |

## c) Kronoloji (Değişmez 2 evreni; hepsi `olaylar_arkeoloji_*`)
| madde | t | dosya:satır | hüküm |
|---|---|---|---|
| Shang dönemi başlar (14C modeli) | -1499 | olaylar_arkeoloji_d3-hint-cin.js:192-197 | künye f ile ÇELİŞİR (1600 ↔ 1500); odak_yer Yinxu (yanlış: Erligang başlangıcı Yinxu'da değil) |
| Xia sona erer, Shang başlar (yazılı gelenek/XSZ) | tarih okunmadı | olaylar_arkeoloji_d2-cin-dogu-asya.js:144 | künye f'i karşılayan madde bu olmalı; t alanı bu oturumda okunmadı → KASA kontrol |
| Yinxu Wu Ding evresi | -1253 (MÖ 1254) | olaylar_arkeoloji_cin.js:49 | doğru |
| Yinxu son evre / Shang sonu | tarih okunmadı | olaylar_arkeoloji_cin.js:28 | — |
| Zhou'nun Shang'ı fethi (Muye) | -1045 | olaylar_arkeoloji_d3-hint-cin.js:133-143 | doğru ve çelişki beyanlı; **odak_yer Yinxu/Anyang içermiyor** (yalnız Haojing, Qi İlçesi/Zhaoge) |
| Anyang/Yinxu sahipsiz aralık başlar/sona erer | -1253 / -1196 | olaylar_arkeoloji_zincir.js:1345 / 1330 | otomatik dönem-ucu kaydı, tarihsel olay değil |

Eksik maddeler (önerilen):
1. Muye maddesine `odak_yer:["Yinxu (Anyang)"]` ekle (Shang'ın tek harita noktası; Değişmez 2'nin ±30 gün koşulunu gerçek bir olayla karşılar).
2. Yinxu `s:` t'si -1080 → -1045 çekilince karşılayan madde = Muye (mevcut).
3. Erligang evresi için nokta (Zhengzhou/Yanshi) eklenirse onu karşılayan «Erligang kenti kuruldu (14C ~1500-1600)» maddesi: kaynak Liu+2018 (okundu). Tarih yıl düzeyi, gün uydurma YOK.

## d) Harita uyumu
Ölçer: yerleşim 1 (Yinxu), kırılma 2 (-1224, -1080), açık 0 (ama bkz. özet: karşılayan madde otomatik dönem-ucu kaydı).
- En geniş yıl -1224: 1 yerleşim. Bilinen Shang çekirdeği (Sarı Nehir ovası Henan, Hebei güney, Shandong batısı) tek peteğe emiliyor; Erligang-evresi (MÖ 1500-1300) merkezleri Zhengzhou ve Yanshi hiçbir `s: shang` taşımıyor: `Zhengzhou` (yerlesimler_asya.js:1930) kaydında Shang dönemi yok; Erlitou (yerlesimler_mo_dogu_asya.js:11) -1749…-1519 aralığında (MÖ 1750-1520, Shang başlangıcıyla çakışmaz, kasıtlı).
- **Yinxu `s: shang` t=-1080 (kaynak: Liu 2021 bit %68 aralığı orta noktası MÖ 1081)** — yani "son tarihli kehanet kemiği kanıtı", yerleşimin sahiplik sonu DEĞİL. Shang devleti MÖ 1046'ya dek Anyang'ı elinde tuttu. Öneri: `s:` t = **-1045-01-01** (künye t), kaynak Liu+2018 «Yinxu II ca. 1200–1046 BC». Yinxu bit: alanı -1080 kalabilir (arkeolojik); s: ile ayrışması ic_not'ta beyan.
- Harita açısından -1045 sonrası: Zhou çekirdeği Shaanxi (Haojing); Anyang sahibi için `__BOSLUK__` mu Zhou mu? Yinxu s: sonrası boş. Öneri: -1045'ten sonra `__BOSLUK__` beyanı (Wu Geng'in Shang kalıntısı rejimi/Zhou geçişi kaynakla okunmadı).
- Eklenmesi gereken noktalar (kaynak turu gerekir): Zhengzhou (Erligang, MÖ ~1500-1300), Yanshi (Shixianggou, MÖ ~1600), Huanbei (Anyang öncesi), Panlongcheng (güney Erligang karakolu). Bunlarsız Shang haritada "Anyang'daki 144 yıllık nokta"dır.

## Önerilen düzeltmeler (KASA için)
1. data/yerlesimler_mo_dogu_asya.js:13 (Yinxu) — `s:[{f:"-1224-01-01",t:"-1080-01-01",d:"shang"}]` → `t:"-1045-01-01"`; kaynak: Liu+2018 PMC6079070; ic_not'ta «bit:-1080 = Liu 2021 kanıt sonu; s: = künye t».
2. data/devletler.js:20257 (shang) — `ic_not`a f üçlü beyanı (XSZ 1600 / Liu+2018 1500 / Pankenier 1554 aday) ve t üçlü beyanı (1046-1045-1044); `kesinlik:` f için yuzyil.
3. data/olaylar_arkeoloji_d3-hint-cin.js:133 (Muye) — `odak_yer` listesine "Yinxu (Anyang)" ekle.
4. data/olaylar_arkeoloji_d3-hint-cin.js:192-197 — "Shang başlar" maddesinin ic_not'una künye f -1599 ile çelişki beyanı ekle (şu an yalnız d: alanında iki değer anılıyor).

## Erişilemeyen kaynaklar
- Liu K. vd. 2021, *Radiocarbon* 63(1):155-175, doi:10.1017/RDC.2020.90 (Cambridge 404/yönlendirme): soru — Wu Ding evresi başı ve Yinxu'nun son evre sonu hangi yıl aralıkları?
- Keightley, D.N., "The Shang: China's first historical dynasty", *Cambridge History of Ancient China* (Loewe-Shaughnessy 1999), s. 232-291 ve Shaughnessy, "Western Zhou History" s. 292-351: soru — Shang başlangıcı (1600/1554/1500) ve fetih 1045 (Shaughnessy kitap bölümü, makale değil).
- Xia-Shang-Zhou Dönemlendirme Projesi raporu (2000; nihai rapor 2022): soru — Shang başlangıcı «c. 1600» ve «1046» hangi kanıttan?
- Pankenier 1992 BSOAS 55(2):272-297, JSTOR 619624: soru — «April 26, 1046» gününün hesabı ve Muye gününün ganzhi'si (takvim çevirisi bu makinede yapılamadı).
