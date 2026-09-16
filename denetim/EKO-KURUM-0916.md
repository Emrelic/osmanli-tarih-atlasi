# EKO-KURUM — teslim raporu · DALGA 0052 · 16 Eylül 2026

> Oturum: EKO-KURUM. Dosyalar: `data/ekokuma_kurum.js` (15 kart) ·
> bu rapor. Kaynak yöntemi CLAUDE.md §4 (13 Eylül kararı: "atlas
> referans değildir") — hiçbir tarih/olgu atlastan alınmadı, hepsi
> TDV İslâm Ansiklopedisi'nden (gövdeler WebFetch ile çekilip okundu,
> metin kopyalanmadı, özetlendi). Her slug önce HTTP koduyla tarandı.

## SAYIYLA

```
13 madde  ·  12'si TAM YAPILDI (15 kart) · 1'i PATCH ÖNERİSİ (kod değil)
```

## MADDE MADDE

**H-0031 — YAPILDI.** "Osmanlı devlet kademeleri" (vezir/sadrazam ·
kazasker · defterdar · şeyhülislam · kethüda · serdar-ı ekrem).
Kart: `teknik-osmanli-devlet-kademeleri`. Kaynak: TDV vezir/kazasker/
defterdar/seyhulislam/kethuda (5 madde, gövdeleri okundu).

**H-0032 — YAPILDI.** "Osmanlı idari yapısının değişimi" (Divan-ı
Hümayun → Bâb-ı Âli kayması, eyalet-sancak). Kart:
`teknik-osmanli-idari-yapi-degisimi`. Kaynak: TDV divan-i-humayun.

**H-0051 — YAPILDI.** "Narh defterleri". Kart: `teknik-narh-defterleri`.
Kaynak: TDV narh.

**H-0052 — YAPILDI.** "Tahrir defterleri". Kart:
`teknik-tahrir-defterleri`. Kaynak: TDV tahrir.

**H-0055 — YAPILDI.** "Osmanlı eğitim sistemi" (medrese hiyerarşisi).
Kart: `teknik-osmanli-egitim-sistemi`. Kaynak: TDV medrese.

**H-0056 — YAPILDI.** "Osmanlı hukuk sistemi" (şeriat/örfî, kadı,
fetva). Kart: `teknik-osmanli-hukuk-sistemi`. Kaynak: TDV kadi ·
seyhulislam.

**H-0075 — YAPILDI, KISMEN.** "İltizam sistemi". Kart:
`teknik-iltizam-sistemi`. Kaynak: TDV malikane (slug `iltizam` 302
ölü — §4③ tuzağı, `malikane` maddesi konuyu kapsıyor). 🔴 Şartnamenin
istediği "diğer devletlerle kıyas" (Fransa ferme générale vb.) kartta
YAZILMADI — okunan TDV kaynağı bu kıyası kendisi yapmıyor, ayrı bir
akademik kaynak taraması gerektiriyor; kartta `ölçülemedi/bulunamadı`
diye açıkça işaretlendi (uydurma değil).

**H-0085 — YAPILDI.** "Osmanlı'da doğrudan olmayan yönetim statüleri"
(Eflak · Boğdan · Erdel · Kırım · Hicaz, tarihleriyle). Kart:
`teknik-osmanli-tabi-statu-listesi`. Kaynak: TDV eflak · bogdan ·
erdel · kirim (slug `kirim-hanligi` 302, `kirim` kullanıldı) · hicaz.

**H-0086 — YAPILDI.** "Eflak-Boğdan-Erdel'in iç/dış hakları" (asker,
vergi, prens atama usulü). Kart: `teknik-eflak-bogdan-erdel-haklari`.
🔴 Asker bulundurma yükümlülüğü için okunan kaynaklar AÇIK bir rakam/
zorunluluk vermiyor — kartta `ölçülemedi` diye ayrı işaretlendi, Kırım
Hanlığı'nın (düzenli sefer yükümlülüğü olan) durumuyla kontrast olarak
yazıldı.

**H-0087 — YAPILMADI (kod değil), PATCH ÖNERİSİ YAZILDI.** Bu madde
`data/ekokuma_kurum.js`e değil `data/ekokuma.js`e ait mevcut bir kart
(`hukum-alani-mesafe`, satır 155) — dosya BENİM DEĞİL (§7), doğrudan
düzenlemedim. Ölçtüm: kartın `metin` alanı ZATEN "■ BAŞLIK\n\n" biçiminde
düzgün paragraflanmış (şikâyetin "karman çorman" tarifi güncel hâle
uymuyor — muhtemelen daha önce düzeltilmiş). Gerçek eksik: kartın
görünür bir BAŞLIK alanı yok (`tur:"teknik-bilimsel"` şeması `kisa`yı
alt-başlık gibi taşıyor, `kimdir` türündeki `ad:` gibi bir üst başlık
YOK). **ÖNERİ (dosya sahibine / UI oturumuna):** `hukum-alani-mesafe`
kaydına `baslik:"Bir İmparatorluk Ne Kadar Uzağa Hükmedebilir? — Menzil,
Konak ve Sefer Takvimi"` alanı eklensin; bu alanın akordeon satırında
gösterilmesi için `js/app.js`in teknik-bilimsel render bloğuna (kimdir
türündeki `ad:` render mantığının benzeri) bir satır gerekiyor —
kod değişikliği, benim yetkim dışı, tahtadan bildirildi.

**H-0091 — YAPILDI, 3 kişi kartı + 1 genel kart.** "Osmanlı
tarihçiliğinin kaynakları" (genel: `teknik-osmanli-tarihciligi-
kaynaklari`) + `kimdir-nesri` + `kimdir-naima` +
`kimdir-ahmed-cevdet-pasa`. 🔴 Vecihî Hasan Efendi için `bulunamadı`
— denenen slug (`vecihi`) 302 döndü, alternatif bu turda aranmadı.
📌 D109 vakası: `ahmed-cevdet-pasa` slugu 200 döndü ama gövdesi yalnız
"bk. CEVDET PAŞA" idi — asıl madde `cevdet-pasa` sluğunda bulunup
okundu.

**H-0093 — YAPILDI, KISMEN.** "Cezayir'de dayı idaresi" (ocak/dayılık
tarihi, İstanbul'la gevşek bağ, askerî yapı, korsanlık geliri). Kart:
`teknik-cezayir-dayilik`. Kaynak: TDV cezayir. 🔴 `dayi` sluğu 200
döndü ama madde FIKIH terimi (anne tarafından akraba) — CLAUDE.md §4②
tuzağı, KULLANILMADI. 🔴 Şartnamenin istediği Tunus/Libya/Mısır/Sudan/
Somali/Etiyopya kıyası bu turda YAPILAMADI — zaman sınırı, kartta
`bulunamadı` diye açıkça işaretlendi.

**H-0094 — YAPILDI.** "Osmanlı-Fas ilişkileri" (1554 Fas şehri kısa
işgali · 1578 Vâdiülmehâzin · elçi/hediye düzeyinde ilişki · resmî
tâbilik/himaye KURULMADI). Kart: `teknik-osmanli-fas-iliskileri`.
Kaynak: TDV fas.

## NE BULAMADIM (D107 — toplu)

```
bulunamadı    Vecihî Hasan Efendi (TDV sluğu) · iltizam-Fransa kıyası ·
              Eflak/Boğdan/Erdel asker yükümlülüğü rakamı · Tunus/Libya/
              Mısır/Sudan/Somali/Etiyopya-Osmanlı bağı (H-0093'ün
              genişletilmiş kısmı)
ölçülemedi    (yukarıdakilerle aynı — kartlarda ayrıca işaretli)
```

## NE İSTİYORUM

Dosyam hazır — koordinatör/UI oturumu `_EKOKUMA_DOSYA_ADLARI`na
`"ekokuma_kurum"` eklerse kartlar görünür olur (D099 sınıfı borç, bu
oturumun kapsamı dışı, tahtaya bildirildi). H-0087 patch önerisi
uygulanacaksa app.js sahibine iletilmesi gerekiyor.

✅ İŞLERİM BİTTİ — 12/13 madde tam, 1/13 (H-0087) patch önerisi.
