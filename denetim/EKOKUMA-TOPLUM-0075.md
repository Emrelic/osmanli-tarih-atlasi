# EKOKUMA-TOPLUM-0075 — teslim raporu (21 Eylül 2026)

Dosyalar (hiçbiri commitlenmedi; `data/` ve `arac/` donuk):
- `denetim/EKOKUMA-P75C-TASLAK.js` — 7 kart, `window.EKOKUMA_P75C` (kilit kalkınca AYNEN `data/ekokuma_p75c.js`)
- `denetim/EKOKUMA-USLUP-0075.json` — H-0007 üslup taraması + önerilen cümleler
- bu rapor

## ① Yedi kart (kaynak: TDV gövdeleri doğrudan HTML'den çıkarılıp okundu)

| Madde | Kart id | Ana kaynak | Not |
|---|---|---|---|
| H-0002 | `fes-resmi-serpus-1829-ve-oncesi` | TDV fes · kavuk · sarik · bork | kalpak/külâh için TDV gövdesi bulunamadı; sivil/ulemâ/gayrimüslim tepkisi bulunamadı |
| H-0030 | `balta-limani-getirdikleri-goturdukleri-1838` | TDV baltalimani-muahedesi · tanzimat | yerli sanayiye etki TDV'de işlenmiyor: bulunamadı |
| H-0035 | `tanzimat-fermani-maddeleri-ve-etkileri-1839` | TDV tanzimat (53k) | edebiyat etkisi için TDV'de ayrıntı bulunamadı; "gâvura gâvur denmeyecek" anekdotu bulunamadı, yalnız itirazın kendisi kaynaklı |
| H-0038 | `bogazlar-kapali-mi-acik-mi-1841` | TDV bogazlar-meselesi (20k) · hunkar-iskelesi | "kimin işine gelir" kaynaksız çıkarım → "sayfanın yorumlaması" damgalı |
| H-0040 | `yemen-elden-cikis-geri-donus-ve-birinci-dunya-savasi` | TDV yemen (Osmanlı Dönemi) · tihame · hudeyde | I. Dünya Savaşı sorusuna TDV'nin doğrudan cevabı yok: bulunamadı, olgular + damgalı yorum |
| H-0041 | `avrupa-1848-ihtilalleri-osmanli-nerede-durdu` | TDV macaristan · abdulmecid · eflak · bogdan · ahmed-vefik-pasa | Avrupa'nın genel seyri TDV'de yok → Britannica/Encyclopedia.com ARAMA ÖZETİ (sayfa gövdesi 403 verdi), kartta "ikincil özet" diye açık |
| H-0042 | `harfus-ailesi-balebek-yerel-hakimiyet` | TDV harfus · balebek | ailenin gücünün kaynağı için TDV tek cümle veriyor; gerisi damgalı yorum |

Programatik doğrulama (`node`): 7/7 kart tüm alanları dolu · 0 mükerrer id (599 mevcut ek okuma id'siyle) · her `olay:` canlı kronolojide ≥1 maddeye düşüyor (Boğazlar 2, Yemen 2 — iki kayıt aynı olay) · yasak ifade (Emre / bu oturum / H-#### / dosya yolu) 0.

## ② H-0007 üslup taraması — SAYILAR

Ölçüt: `js/app.js` `_icNotAyikla` ic_not* alanlarını basmıyor (temizlik gerektirmez); basılan alanlar: ek okuma kartında ic_not dışı her yazı alanı + "Kaynak:" satırı, kronolojide `b · d · gun · yer · k`. 446 `data/*.js` çalıştırıldı, 0 yüklenemedi.

- **A — "Emre" adı basılan yerde: 6 yer** (5 ek okuma kartı + 1 kronoloji `gun` alanı): `ekokuma_1806` (1), `ekokuma_kolemen` (2), `ekokuma_yeniceri` (2), `olaylar_ek8` (Nahçıvan `gun`, 1). Her biri için yeni cümle JSON'da.
- **B — geliştirici sesi (bu oturum · bu dosyada · dosya yolu · H-####/KITA · D### · "atlasın kendi kaydı") ek okuma kartlarında: 122 bulgu / 71 kart / 19 dosya**; 3'ünde cümlenin tamamı geliştirici notu (SİL önerildi), gerisinde kural-tabanlı yeni cümle (uygularken elle gözden geçirilir).
- **C — kronoloji `d` alanında: 85 madde**; 80'i `kronoloji_sinir_guney_g8.js`te aynı ek cümle ("devletler.js künye kronolojisinden ana akış kronolojisine taşındı — G8/G9/G10 geriye sarma taraması.") — 21 Eylül'deki antlaşma sızıntısıyla aynı sınıf; tamamı SİL.
- **E — BASILAN ama şartname kapsamı dışı: yerleşimin `kasitli_bosluk` `neden` alanı** (dizin penceresi `js/app.js:8226`, boşluk kutusu `:2390`): 321 kayıt · **1'inde "Emre" adı** (`yerlesimler_h2_afrika.js` "Meşra er-Rek", `uret_petek.py:3564` satır numarası + "(Emre 0036/H-0001, G1)" da içinde) · 115 kayıt geliştirici işareti taşıyor (gürültülü: ` kod adı 72, 🔴 39, ⚠️ 20); kesin geliştirici sesi ~10 kayıt (Değişmez · .py · damga · motor · petek…). Düzeltme önerisi yalnız "Emre" kaydı için yazıldı; kalanı JSON bölüm E'de listeli, sahibi yerleşim dosyalarının sahibi.
- **Basılmayan ama "Emre" içeren: 17 ic_not alanı** (kart 0 kayıp) + `data/yerlesimler*`, `yer_yama_*`, `hukuki_sinirlar`, `devletler.js`… içinde ~1100 (`neden/gerekce/hukum/kaynak`, kasıtlı-boşluk kayıtları HARİÇ) — app.js bunları okumuyor; temizlik gerekmez.
- Yanlış pozitif elenen: 3 ("emre uymayışı", "merkezden gelen emre" = buyruk; "Emre Karakaya" = makale yazarı; "bu turda başarısız oldu" = anlatı).

## ③ Ek bulgular (kapsam dışı, sahibine)

1. **js/app.js:9304-9308 (kaynaktan okundu, tarayıcıda DENENMEDİ):** kronoloji `kaynak` alanı `"https://islamansiklopedisi.org.tr/" + o.kaynak` bağlantısına olduğu gibi konuyor; 7165 kronoloji maddesinin 4818'inde `kaynak` boşluk ya da "bulunamad" içeriyor (ör. "karakoyunlular · akkoyunlular") → kırık TDV bağlantısı olabilir.
2. **Yemen kronoloji maddesi** (`olaylar_ek5`, 1849-01-01 "Tihâme sahiline dönüş: Hudeyde, Zebîd ve Moha'nın alınması"): TDV yemen/hudeyde 1849 için yalnız Kemeran ve Hudeyde'yi verir; Zebîd ve Muhâ'nın aynı yıl alındığı bulunamadı.
3. **Harfûş maddesi** (`olaylar_ek2`, 1850 "yerel hâkimiyetin sonu", kaynak `balebek`): TDV 1850'yi Ba'lebek'in kaza yapıldığı yıl olarak verir; ailenin sonunu o yılla bağlamaz ("XIX. yüzyılın ortalarına kadar"). Ikincil anlatılar 1865 sürgünü der; akademik dayanak bulunamadı.
4. **Mevcut `balta-limani-mehmed-ali-ticaret-acilimi` kartı:** "ithalatta %5 (artı iç nakil için %2)" — TDV: ithalatta %3, memleket içine götürülürse ilave %2 (toplam %5); "%5 artı %2" okunuşu çifte sayım gibi duruyor (uygulamayı sahibi ölçsün).
5. **Fes maddesi** `1829-06-01`: TDV yalnız "1244/1829" verir; ay/gün kaynakta bulunamadı (`YYYY-01-01` kuralına göre 06-01 tutarsız olabilir).
6. Kayıt: yeni dosya için `js/app.js` `_EKOKUMA_DOSYA_ADLARI` + `index.html` `<script>` satırı gerekir (ikisi Oturum 0).

## Bekleyen (kilit kalkınca "dosya senin" dendiğinde)

- `denetim/EKOKUMA-P75C-TASLAK.js` → `data/ekokuma_p75c.js` kopyası
- H-0007 düzeltmelerinin uygulanması (yalnız A + B onayınla; C kronoloji dosyaları kronoloji sahibinin)
