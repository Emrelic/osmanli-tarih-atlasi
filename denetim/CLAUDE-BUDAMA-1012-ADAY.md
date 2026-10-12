# CLAUDE.md BUDAMA-1012 — aday listesi (KARAR EMRE'DE)

**Zemin:** Emre 12 Ekim 2026 — koordinatör / işçi oturum / hazır kıta / tahta düzeninden
VAZGEÇİLDİ. Yeni düzen: *bir iş = bir oturum + gerekirse kendi alt ajanları* · HAVVA koşu ·
UMIT yazma-denetim-araştırma · laptop bakış + kutu.

**Ölçüm (12 Ekim, `c949e91a`):** CLAUDE.md **52.032 bayt ≈ 14.900 token** (bayt/3,5, `BUDAMA-1010-SINAV` ölçütü).
Her yeni oturum bunu açılışta öder.

**Kovalar:**
- **K — KALSIN** (gerekirse kısalt)
- **D — DEĞİŞTİR** (kural kalır, koordinatör/tahta dili yeni düzene çevrilir)
- **T — TAŞI** → yalnız gerektiğinde açılan belgeye (önerim: `KOSU-YAYIN.md`; CLAUDE.md'de tek satır işaret kalır)
- **E — ESKİDİ** → silinmez, `dersler/D286-koordinator-donemi-arsiv.md`e ARŞİVLENİR (iz kalır, `BUDAMA-1010-SINAV` ① yeşil kalır)
- **S — SÜZ** → kural satırı kalır, vaka/hikâye anlatısı (📌 "niçin var" paragrafları) derse gider

Cevap için numarayla yazın: ör. *"12 E değil K"*. Yazılmayan madde önerildiği gibi uygulanır.

---

## Başlık + Belge seti ve açılış (2.362 bayt)
1. **S** — budama tarihçesi satırı (17 Eyl / 10 Ekim sayıları) → tek satıra.
2. **E** — "AÇILIŞTA YALNIZ İKİ BELGE: bu dosya + kendi şartnamen". Artık şartname yok; görev Emre'den gelir.
3. **E** — 🔴 "Görevsiz açıldıysan → HAZIR-KITA.md". (Dosya diskte kalır, işaret kalkar.)
4. **K** — "yalnız iş gerektirirse aç" belge tablosu. **D:** "koordinatör; işçi şartnamesi derse" ibaresi düşer.
5. **K** — veriye/motora dokunacaksan `git log -10` + `durum_tablosu.py`.
6. **K+D** — 🔴 AĞACIN GERİDEYSE DUR. "koordinatöre bildir" → "Emre'ye bildir". (Çok makineli düzende daha da önemli.)

## §1 Proje · §1.5 Durum · §1.6 Kapsam · §2 Petek (4.737 bayt)
7. **K** — §1 proje tanımı.
8. **K (soru)** — §1.5 tablo, 2,7 KB. Taşınabilir ama `durum_tablosu.py --yaz` ve `BUDAMA-1010-SINAV` ③ bu tabloya ÇAPALI ⇒ taşımak alet değişikliği ister. **Önerim: şimdilik KALSIN**, ayrı iş.
9. **K** — §1.6 kapsam disiplini (8. boyut kararı).
10. **K** — §2 petek motoru.

## §3 Değişmezler · §3.4 Tavan · §3.5 Görülmeyen sınıflar (5.664 bayt)
11. **K** — çıkış kodu 0/1/2 · vaka bayatlar · kapının yeri · tek otorite · Değişmez 1, 2, 8.
12. **S** — Değişmez 3 paragrafı (`kd:` / gövde çakışması ayrıntısı) → iki satır + ders bağlantısı.
13. **D** — §3.4 ④ "Tavanı İŞÇİ ÖNERİR, KOORDİNATÖR YAZAR" → "**tavanı oturum önerir, EMRE onaylar**; `--tavan-yaz` körü körüne kullanılmaz". Öteki 7 madde **K**.
14. **K** — §3.5 hayalet devlet · yeri yanlış · üç sınıf · ters yön · `__BOSLUK__` deliktir.

## §4 Kaynak kuralı (5.065 bayt)
15. **K** — TDV birincil · atlas referans değil · bayrak kuralı · kırmızı çizgi · tarih uydurma · hassasiyet · Türkçe yazım. Veri yazan her oturumun işi.
16. **K (soru)** — 🔴 hicrî gün sözleşmesi, ~1,3 KB. Veri yazan her oturum gerekir ⇒ kalsın; istenirse `VERI-YAPISI.md`ye taşınır, burada 2 satır kalır.
17. **S** — TDV tuzakları ①–⑨: liste kalsın, açıklamalar derste (`D211`).

## §5 Dosya haritası · §6 (2.704 bayt)
18. **K** — dosya ağacı · `GIRDI_DOSYALARI` doğrulama komutu.
19. **T** — 🔴 "Çıktıda canlı olan index.html'in script satırıdır… `coz-c` İKİ komut" paragrafı → `KOSU-YAYIN.md` (yalnız ölçüm/yayın oturumu gerekir).
20. **T** — 🔴 "Koşu logu başka makinededir" → `KOSU-YAYIN.md`.
21. **K** — §6 kapsam genişleme sırası.

## §7 Oturum düzeni ve dosya sahipliği (5.476 bayt) — EN ÇOK DEĞİŞEN
22. **D** — "her dosyanın tek sahibi var" → "**her dosyanın o anki sahibi kilit kimdeyse odur**".
23. **K+S** — 🔴 DOSYA KİLİDİ `kilit.py` (al/birak/sıra, 0/1/2/3). Paralel oturum düzeninde EN ÖNEMLİ kural; hikâye ("jeton sızıntısı", "16 saatlik koşu") derse. **Eklenecek:** "iş bitince `birak-hepsi`".
24. **K** — kanca (`kilit_kanca.py`) kurulumu YALNIZ Emre. (Kurulması önerildi, M ayrı.)
25. **K** — kilit BU MAKİNEYE aittir (beyanlı sınır).
26. **E** — "Oturum 0 (koordinatör, YILDIRIM BAYEZIT): `yerlesimler.js`, `uret_petek.py`, üretilen `data/*.js`, kök `*.md`" sahipliği. Yerine 22 + 29.
27. **E** — "rapor/denetim oturumları düzeltme yapmaz" (işçi rolü kalmadı). *Soru: korumak ister misiniz?*
28. **D** — MAKİNE ROLLERİ → **HAVVA koşu · UMIT yazma/denetim/araştırma · laptop bakış+kutu · LAB/KASA yedek** (TOPOLOJI.md de güncellenmeli). "TİP1–TİP5" atfı düşer.
29. **D** — "`main`in TEK YAZICISI koordinatördür" → "**`main`e push yalnız push kapısından**" (betik: `MAIN` kilidi → fetch/rebase → `denetle` 0 → koşu donmuyorsa push). *Betik yazılana kadar geçici metin: "push öncesi `git pull --rebase` + `denetle` çıkış 0".* Üretilen `data/*.js` yalnız HAVVA, çatışmada yeniden üretilir — **K**.
30. **D** — "`uret_petek.py`yi yalnız Oturum 0 koşturur" → "**yalnız HAVVA**". Koşu sürerken `data/`+`arac/` donuk — **K**.
31. **E** — uzun iş öncesi tahtaya "BEN BAŞLATIYORUM" + 60 sn bekle.
32. **K** — 🔴 SÜREÇ ÖLDÜRME yalnız kendi PID alt ağacı.
33. **K+D** — ajanlar birbirinin dizinine yazmaz / scratchpad. **Alt ajanlara da uygulanır** diye eklenir.
34. **T** — "Bu makinede ölçüldü: Stop-Process 127 / taskkill 1" → `KOSU-YAYIN.md`.
35. **T** — koşu nöbetçisi 60 dk → `KOSU-YAYIN.md`.
36. **K+D** — Commit pathspec kuralı (`git add -A` yasak, `git commit -F … -- <adlar>`). Paralel oturumda ŞART. "push ve paylaşılan dosyalar Oturum 0'da" kısmı düşer (→ 29).
37. **K** — ayrı dosya ≠ ayrı ad alanı → §8'e taşınır.
38. **E** — cevap kendi pencerene / "ne oldu bizim iş?".
39. **E** — yeni oturumun görev tanımı `oturumlar/` altına.

## §7.1 Haberleşme / TOKEN KURALI (2.707 bayt)
40. **E** — işçi yalnız tahtaya yazar · koordinatör iş yapmaz · oturum seçimi · ①–③ ⑤ ⑥ ⑦ tahta kuralları.
41. **K → §11'e** — "**olgu bir DOSYADA yaşıyorsa hüküm verilmez, ÖLÇÜLÜR**" + "hükmün MAKİNESİNİ sor". Genel doğruluk kuralı, koordinatörden bağımsız.
42. **K → §10'a** — **④ Üçlü kural** (ne ölçtüm · ne bulamadım · ne istiyorum) = oturumun Emre'ye iş sonu raporu biçimi.
43. **K → §10'a** — BEKLEME: ScheduleWakeup / /loop / sleep ile yoklama yapılmaz.

## §7.3 ATAMA PROTOKOLÜ (1.723 bayt)
44. **E** — tamamı (sıcaklık, 82.561 taban, 165.000 eşiği, hazır kıta ölçümü). Bilgi `D281`de duruyor.
    *Yeni düzene kalan tek ders tek satır §10'a:* "soğuk oturuma (>1 saat) iş vermek taze oturumdan ucuz değildir."

## §7.2 TOKEN ZİNCİRİ (5.933 bayt)
45. **E** — açılış/adlandırma, görevlendirme, tahta komutu, NUMARA otoritesi (`M-`/`Y-`), nokta atışı, bekçi + nabız, 2 saat tavanı, toplu okuma, emeklilik, uyandırma, çözülmemiş çelişkiler. (Araçlar diskte kalır.)
46. **K → §10'a** — "**kaydedildi ≠ teslim edildi: push edilmemiş iş yapılmamıştır**".
47. **T** — kaynak darboğazı kapısı (`kaynak_durum.py kapat --kod KOSU`) → `KOSU-YAYIN.md`; push kapısı (29) bunu okur.

## §8 Veri biçimleri (761 bayt)
48. **K** — BOYALAR · dönem çakışması · kronolojide gün yaz. (+37)

## §9 Komutlar (10.115 bayt) — EN BÜYÜK BÖLÜM
49. **K** — komut listesi (7 satır) · `py` değil `python` · kabul ölçütü = `denetle` çıkış kodu, "tüm peteği geçerli ✓" değil.
50. **T** — 🔴 KOŞU BAYRAKLARI + `MOTOR_DEVAM` anlatısı → `KOSU-YAYIN.md` (yalnız HAVVA koşar).
51. **T** — 🔴 ÇÖL KELEPÇESİ (yürürlük KOŞU 23, "taban SHA farklı" kuralı) → `KOSU-YAYIN.md`.
52. **T** — zincir/iniş adımları · `kodla.py yay` arite tuzağı · 🔴 `coz-c` DİRİLTİCİDİR → `KOSU-YAYIN.md`. *CLAUDE.md'de bir satır kalsın mı:* "yay çıkış 0 vermeden `coz-c` yazılmaz" — önerim **evet** (yıkıcı, telafisiz).
53. **T** — 🔴 100 MiB GitHub eşiği → `KOSU-YAYIN.md` (koşudan ÖNCE ölçülür).
54. **T** — yasak betiğe değil KİPE (`kos_ve_yayinla --yayinlama`) → `KOSU-YAYIN.md`.
55. **K+S** — palet `renk_olc` · odak nöbetçisi (kronoloji yazan oturum da `denetle_yayin`a takılır) → 3 satıra.
56. **T** — "koşu çıktısı bayat da yayınlanır" → `KOSU-YAYIN.md`.

## §9.1 Motor kodu dondurma (1.516 bayt)
57. **K+S** — tuz dört dosya · veri koşusunda donuk · koşu sürerken dokunulmaz. UMIT motor koduna yazarken HAVVA koşabilir ⇒ CLAUDE.md'de KALMALI. Ölçüm-worktree'si 4 şartı → `KOSU-YAYIN.md`.

## §10 Çalışma protokolü (746 bayt)
58. **K** — onay bekleme, devam et · numaralı partiye madde madde cevap · 3/9 beep.
59. **YENİ (öneri)** — "**iş bitince üç şart:** push edildi · `kilit.py birak-hepsi` · arka planda süreç yok. Sonra oturum OLDUĞU GİBİ bırakılır (compact/emeklilik yok)." + 42, 43, 46.
60. **YENİ (öneri)** — "**işçi gerekirse önce alt ajan**; ayrı oturum yalnız başka makine / saatler süren / Emre'yle konuşması gereken iş için, Emre'den istenir."

## §11 Tekrarlanmaması gereken hatalar (2.523 bayt)
61. **K+S** — aileler kalır; uzun cümleler kısalır. (+41)

---

## CLAUDE.md DIŞI ama aynı bedeli ödeten
62. **SORU** — ClaudEmre SessionStart kancası her oturuma ~1,5 KB denetim çıktısı + "a/b/c/d başlat mı" sorusu basıyor. Sahibi ClaudEmre sistemi, karar Emre'nin. Atlas oturumlarında kapatılması ya da kısaltılması önerilir.
63. **SORU** — `C:\claudemre` çekirdeği (YASALAR, SARTNAME ⑤ "send_message") da koordinatör düzenini anlatıyor; o ayrı bir budama.

## Tahmini sonuç (TAHMİN — ölçüm uygulamadan sonra)
| Kova | ~bayt |
|---|---|
| E (arşive) | ~13.000 |
| T (`KOSU-YAYIN.md`) | ~10.000 |
| S (derse) | ~4.000 |
| **Kalan CLAUDE.md** | **~24.000 bayt ≈ 6.900 token** (bugün ~14.900) |

## Uygulama sırası (onaydan sonra)
1. Taban commit'i yaz · `BUDAMA-1010-SINAV.py` birleşimine `KOSU-YAYIN.md` eklenir (yoksa T maddeleri "silindi" sayılır) — **önce sınavı iki yönde sına**.
2. E → `dersler/D286-koordinator-donemi-arsiv.md` · T → `KOSU-YAYIN.md` · S → ilgili `D*.md`.
3. D maddeleri yazılır · 59-60 eklenir.
4. Sınav: ① satır korunumu (E/T/S hedefleriyle) ② kırık bağlantı 0 ③ §1.5 çapası ④ tuz çapası ⑤ boyut.
5. `oturumlar/TOPOLOJI.md` makine rolleri (28) — ayrı, küçük.
