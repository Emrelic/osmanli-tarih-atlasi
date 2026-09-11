# BULGU — KRONOLOJİ DALGA 2 (11 Eylül 2026)

## ① Çerçeve ölçümü — sayı 8 değil 11

`TESPIH.md` madde 9/10'un "Okyanusya 5 + Sibirya 8 + Orta Asya 14 = 27, 19'u
4+ maddeli, eksik 8" iddiası 4 Eylül tarihliydi. Bugün `data/devletler.js`
üzerinde aynı yöntemle (her künyenin `kronoloji[]` uzunluğu, eşik "4+ madde")
ölçüldü:

```
bölge toplamları BUGÜN:  okyanusya 5 · sibirya-bozkir 9 · orta-asya 16  = 30
(4 Eylül'de 27'ydi — taban 3 künye büyümüş, D129)
4+ maddeli künye sayısı: 19  (4 Eylül'le BİREBİR aynı)
⇒ eksik = 30 - 19 = 11, 8 DEĞİL
```

Yani 4 Eylül ölçümü kendi ekseninde YANLIŞ değildi — sadece taban o günden
beri 3 künye büyümüş ve üçü de eksik kümesine düşmüş. Bu, bulguyu 1.MURAT'a
tahtadan (M-3345) bekletmeden bildirdim.

## ② 11 künye — hazırlık durumu

| id | bölge | mevcut | hazırlanan aday | kaynak sınıfı |
|---|---|---|---|---|
| hawaii-kralligi | okyanusya | 3 | 4 | akademik (TDV kapsamı dışı) |
| tonga-kralligi | okyanusya | 3 | 2 | akademik — 🔴 bir kaynak çelişkisi ELENDİ (bkz. ③) |
| yeni-zelanda | okyanusya | 3 | 2 | akademik/kurumsal (Te Ara, NZ Hükûmeti) — GÜÇLÜ |
| tui-tonga-imparatorlugu | okyanusya | 1 | 0 | 🟡 ÖLÇÜLEMEDİ — bkz. ④ |
| kasim | sibirya-bozkir | 2 | 3 | TDV CANLI, gövde okundu — GÜÇLÜ |
| kazan | sibirya-bozkir | 3 | 1 | 🟡 zayıf — tek kaynak (Wikipedia) |
| tannu-tuva | sibirya-bozkir | 0 | 3 | 🟡 zayıf — tek kaynak, dar pencere |
| mogulistan | orta-asya | 3 | 1 | 🟡 zayıf — tek kaynak |
| afgan-durrani | orta-asya | 3 | 1 | TDV taranıp KAPSAMADIĞI doğrulandı → akademik meşru |
| harezm-halk-cumhuriyeti | orta-asya | 0 | 2 | TDV CANLI, gövde okundu — GÜÇLÜ |
| buhara-halk-cumhuriyeti | orta-asya | 0 | 3 | akademik/kurumsal (MSU Soviet History arşivi) |

**Toplam 22 aday madde.** Tam alan (gün/yer/kişiler/anlatım/kaynak) ve
kaynak notlarıyla `denetim/HAZIRLIK-DALGA2-0911.json`de.

## ③ Kaynak çelişkisi — Tonga, Sālote Tupou III'ün tahta çıkışı

```
Wikipedia + History-of-Royal-Women + Team Queens   1918-04-05/06  (3 bağımsız sayfa, tutarlı)
encyclopedia.com "Salote Topou III"                1908-04-12
```
1908 MANTIKEN imkânsız: Sālote 1900 doğumlu (8 yaşında kraliçe olamaz), ve
aynı paragraf kocasının zaten başbakan olduğunu söylüyor (evlilik 1917).
encyclopedia.com kaydını dizgi hatası (1908→1918) sayıp ELEDİM; yazma
turunda ikinci akademik kaynakla (Wood-Ellem, *Queen Salote of Tonga*)
teyit önerdim — D073/D096 ailesi: "iki kaynak çelişiyor" demeden önce
hangisinin doğru olduğunu doğrula.

## ④ Tui Tonga İmparatorluğu — bilerek BOŞ bırakıldı

Künye 1220-1845 arası, ~625 yıllık bir sözlü-gelenek dönemi kapsıyor.
Bulduğum bütün adaylar ("Tuʻitātui ~1100 civarı saray kurdu" gibi) YÜZYIL
çözünürlüğünde ve kaynakların çoğu popüler/kaynaksız derleme sınıfına
giriyor (kiddle, thebrainchamber — `§4` KULLANILMAZ listesi). Akademik
Pasifik tarihçilerine (Aoyagi, Wood-Ellem) bu turda ulaşamadım. Tarih
uydurmamak için aday listesi BOŞ — "temsilî" damgasıyla yıl uydurmak
GÖRÜNMEZ KILAR kuralı (`§4`) burada tam uygulanıyor. Bu künye 1 maddede
kalabilir; zorlamak yanlış olur.

## ⑤ Ölçülemeyen / teyit gereken (yazma turunda)

- Kazan 1521 (Sahib Giray), Moğulistan 1462 (Esen Buka bölünmesi),
  Tannu Tuva'nın 3 adayı, Buhara'nın 3. adayı: yalnız Wikipedia — ikinci
  bağımsız akademik kaynakla teyit edilmedi. Yazma turunda ya teyit edilir
  ya da "bulunamadı/zayıf dayanak" notuyla elenir.
- `data/`ye HİÇ DOKUNULMADI — Koşu 9 donuk kuralına uyuldu.

## Teslim

```
① künye sayısı: belge 8 diyordu, ben 11 ölçtüm
② hazırlanan aday: 22 madde, 11 künyenin hepsi için (biri BOŞ: tui-tonga)
③ kaynak: TDV CANLI 5 · akademik/kurumsal güçlü 4 · tek-kaynak-teyitsiz 13
④ ölçülemedi: tui-tonga (sözlü gelenek) · 5 aday tek-kaynaklı, teyit gerekli
```
