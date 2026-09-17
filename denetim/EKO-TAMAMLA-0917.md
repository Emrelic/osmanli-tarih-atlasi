# EKO-TAMAMLA — teslim raporu · 17 Eylül 2026

Koordinatör: 1.MURAT · Kaynak: `denetim/PAKET-BEKLEYEN-0917.md` satır 45-47 ·
Dosya: `data/ekokuma_tamamla.js` → `window.EKOKUMA_TAMAMLA` (5 kart,
`node --check` temiz, 5/5 id benzersiz, sıfır çakışma — 39 `ekokuma_*.js`
dosyasının 472 kartına karşı programatik tarandı, tek bir mükerrer id
bulundu ve o BENİM DOSYAM DEĞİL: `kimdir-kuyucu-murad-pasa`
EKOKUMA_VEZIR/EKOKUMA_CELALI arasında, önceden var, tahtaya AYRICA
bildirildi).

## 0. İki madde HİÇ kart almadı — ölçüldü, zaten tam

**H-0031** — `denetim/PAKET-BEKLEYEN-0917.md`nin "tam değil, gerekçe teslim
metninde kesik" flag'i ÇÜRÜDÜ. `data/ekokuma_kurum.js`teki
`teknik-osmanli-devlet-kademeleri` kartı vezir/sadrazam · kazasker ·
defterdar · şeyhülislam · kethüda · serdar-ı ekrem ALTI başlığın hepsini ayrı
bölümle işliyor; EKO-KURUM'un kendi raporu (`denetim/EKO-KURUM-0916.md`)
"H-0031 — YAPILDI" diyor. PAKET-BEKLEYEN'in flag'i tahta mesajının Türkçe
karakter bozulmasından (mojibake) doğan bir YANLIŞ OKUMA — kart okunarak
doğrulandı.

**H-0046** — iki alt-istek de zaten karşılanmış: ① Kemankeş Mustafa Paşa
kişi kartı `data/ekokuma_vezir.js`de TAM biyografiyle var (EKO-VEZIR, M-4008).
② "Anlaşma hükümleri" kartlarının başlık netleştirmesi — `data/
ekokuma_kasrisirin.js` bizzat okundu (§7, sahibi ben değilim, yalnız
okudum): 5 kart zaten ayrışık ve doğru başlıklı ("Zühâb ovasında üç gün:
antlaşma nasıl imzalandı?" / "Kasr-ı Şirin'in hükümleri: kim neyi aldı,
neyi bıraktı?" — Emre'nin istediği "biri hikâye biri hüküm olsun" ayrımı
ZATEN VAR). EKO-VEZIR'in raporu da aynı sonuca varmış ama emin olamamıştı;
bu oturum dosyayı okuyup doğruladı. Yeni kart DUPLİKASYON olurdu, yazılmadı.

## 1. Gerçekten tamamlanan 5 madde, 5 kart

| Madde | Eksen | Kart | Kaynak |
|---|---|---|---|
| H-0029 (1/2) | spor (güreş/Kırkpınar) | `teknik-osmanli-spor-gelenekleri` | TDV gures · kirkpinar · spor |
| H-0029 (2/2) | içki kültürü + bir efsane | `tartisma-selim-ii-kibris-sarap-efsanesi` | TDV selim-ii · icki |
| H-0034 | kıyafet/toplumsal statü | `teknik-osmanli-kiyafet-statu` | TDV kiyafet |
| H-0054 | topçuluk + gemicilik | `teknik-tophane-tersane-amire` | TDV tophane · tersane-i-amire |
| H-0115 | doğum şenlikleri | `sebep-sonuc-hibetullah-sultan-dogum-senligi` | TDV surname |

`olay:` bağları programatik doğrulandı (111 `olaylar*.js`+`kronoloji*.js`
dosyası, 6915 madde taranarak): `1571-08` · `1826-06` · `1826-07-31` ÜÇÜ DE
canlı veride gerçekten var. İki kartta (`teknik-osmanli-kiyafet-statu`,
`teknik-tophane-tersane-amire`) ve bir kartta (`sebep-sonuc-hibetullah-
sultan-dogum-senligi`) `olay:[]` bırakıldı — TDV kaynağı GÜN vermiyor,
kronolojide karşılık da yok, gün/olay UYDURULMADI (her birinin `ic_not`
alanında açık).

## 2. Ne bulamadım (D107)

```
bulunamadı   H-0033'ün istenen ikinci ekseni: Avrupa'nın kilise/burjuvazi/
             sanayi devrimi karşılaştırması. TDV bu konuyu kapsamıyor
             (CLAUDE.md §4 "Avrupa'nın iç tarihi" — meşru coğrafî boşluk).
             Bu turda denenen akademik kaynak (Britannica) HTTP 403 ile
             erişilemedi; TDV'nin "kilise" maddesi de konuyu kapsamıyor
             (WebFetch ile doğrulandı — Ortodoks/İslam fıkhı perspektifi,
             Avrupa feodal ekonomisi YOK). Kaynaksız yazmak yerine
             bulunamadı bırakıldı — EKO-TOPLUM'un aynı maddede bıraktığı
             yerden ileri gidilemedi.
ölçülemedi   H-0054'ün dokumacılık/atölyecilik ekseni (zaman kısıtı,
             EKO-TOPLUM'un aynı gerekçesi) · H-0115'in ölüm/cenaze
             protokolü (TDV "cenaze" maddesi ayrıntısız; tek somut örnek —
             Kanûnî'nin Zigetvar'da ölümünün gizlenmesi — zaten
             data/ekokuma_magazin.js'te var, mükerrer yazılmadı) ·
             "Sarı Selim" lakabının kaynağı (TDV metninde geçmiyor).
```

## 3. Ne istiyorum

`_EKOKUMA_DOSYA_ADLARI` dizisine `"ekokuma_tamamla"` eklenmesi — koordinatör
bunu kendisi ekleyeceğini söylemişti (js/app.js sahibi ben değilim, §7).
Eklenene kadar kart `_ekHavuz()`e hiç girmez, buton çıkmaz.

H-0033 (Avrupa ekonomi karşılaştırması) ve H-0054'ün dokumacılık/atölyecilik
kalanı için AYRI bir sevk (belki akademik kaynak erişimi olan/zaman
kısıtı olmayan bir oturuma) öneriyorum — kendim seçip devam etmiyorum
("yeni iş icat etme" kuralı).

✅ İŞLERİM BİTTİ — 2 madde (H-0031, H-0046) zaten tamdı, dokunulmadı;
5 madde 5 kartla tamamlandı; 3 kalem (H-0033'ün 2. ekseni, H-0054'ün
kalanı, H-0115'in ölüm ekseni) bulunamadı/ölçülemedi diye açık bırakıldı.
