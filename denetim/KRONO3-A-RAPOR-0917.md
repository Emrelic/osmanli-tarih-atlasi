# KRONO3-A — teslim raporu · 17 Eylül 2026

Kaynak: `oturumlar/KOSU13-OTOBUS.md` EK KADRO. Kapsam: `data/devletler.js`te
`bolge:"arabistan"` (10) + `bolge:"balkanlar"` (7) — kronoloji dizisi ≤2
maddeli 17 künye. Sayı programatik ölçüldü (node), görev tanımındaki
10+7 ile birebir eşleşti. Çıktı: `denetim/YAMA-KRONO3-A-0917.json` —
**devletler.js'e YAZILMADI**, UYGULA uygular.

## Sayıyla

```
17 künye taşındı · 8 yeni satır · 7 künyeye YENİ OLAY eklendi
10 künyeye DOKUNULMADI — sekizi D-KUNYE'nin önceki turda "riskli" diye
  bıraktığı künyelerin İÇİNDE (bu turda TEK TEK yeniden denendi, ikisinde
  YENİ bulgu çıktı — aşağıya bak), ikisi bu turun kendi zaman kısıtı
```

## Eklenen 7 künye, 8 satır

| Künye | Yeni olay | Tarih | Kaynak |
|---|---|---|---|
| suud-ikinci | Faysal'ın ölümü sonrası taht kavgası | 1865 | TDV necid |
| sani-emirligi (Katar) | Hâfız Mehmed Paşa'nın Devha hezimeti | 1893 | TDV katar |
| sabah-emirligi (Kuveyt) | Muhammed es-Sabah suikastı + Mübârek'in onayı | 1896, 1897 | TDV kuveyt |
| cebel-i-lubnan-mutasarrifligi | 1864 nizamname/protokol revizyonu | 1864-09-06 | TDV lubnan |
| oniki-ada-italyan | Lozan md.15 — adalar resmen İtalya'ya | 1923-07-24 | TDV oniki-ada |
| arvanid-sancagi | İlbasan sonrası Avlonya/Ohri/İşkodra'ya bölünme | 1466 | TDV arnavutluk |
| bosna-isgal | Ali Fehmi Câbiç'in dinî özerklik mücadelesi | 1899 | TDV bosna-hersek |

## İki değerli yan-bulgu (veri değil, BULGU — UYGULA'ya sözlü bildirim)

1. **hicaz-kralligi'nin `t:`si (1923-10-29) gerçek son DEĞİL, atlasın kendi
   pencere kapağı.** TDV `serif-huseyin`: krallık ve hilâfet iddiaları
   "16 Ekim 1924"te sona erdi (İbn Suûd Mekke'yi aldı) — künyenin t:'sinden
   **353 gün SONRA**. Pencere içinde yeni olay EKLEMEDİM (D011: künye
   penceresi aşılamaz, §7: t:'yi değiştiremem) — t: 1924-10-16'ya
   çekilirse gerçek "son" olayı bir sonraki turda eklenebilir.
2. **crnojevic-zetasi'nin "son" kaydındaki "DOĞRULANMADI" etiketi artık
   gereksiz olabilir.** TDV `karadag` yeniden okundu: aile 1499'da
   GERÇEKTEN direnme gücünü kaybetti (künyenin t:'siyle uyumlu), 1514'teki
   İskender Bey sancağı bundan 15 yıl SONRA, AYRI bir olay — çelişki değil,
   ardışık iki olay. Yeni SATIR eklemedim (uydurma riski yok zaten, sadece
   var olan kaydın güven notu güncellenebilir).

## Dokunulmayan 10 künye — gerekçesiyle

```
usfuri                künyenin kendi kaynağı kimlik çelişkisini itiraf
                       ediyor (TDV'de "Usfûrî" adı hiç yok) — D-KUNYE'nin
                       "riskli" gerekçesi hâlâ geçerli, dokunulmadı
nebhani                TDV yalnız 11.yy'daki BİTİŞ referansını veriyor,
                       kuruluş günü YOK ve zaten atlas penceresinden
                       (1281) çok önce — eklenecek pencere-içi olay yok
suriye-lubnan-mandasi  gerçek devamı 1946'ya kadar sürüyor, pencere içinde
                       (1920-1923) TDV'de yeni bir ORTA olay bulunamadı
urdun-emirligi         TDV `urdun` 1923 özerklik ayrıntısını vermiyor,
                       bulunamadı
kesiri-sultanligi      TDV `hadramut` bu turda TEKRAR taranmadı (zaman
                       kısıtı) — bir sonraki tura kalabilir
sarki-rumeli           TDV `rumeli`/`bati-trakya` bu 7 yıl için ek olay
                       vermiyor, bulunamadı
garbi-trakya           57 günlük ömür — D-KUNYE'nin "kısa ömür" emsaliyle
                       aynı, orta olay aranmadı
dejanovic-prensligi    künyenin kendi notu hâlâ "ARANMAYA DEVAM" diyor,
                       bu turda da ek kaynak bulunamadı
crnojevic-zetasi       bkz. yukarıdaki bulgu — yeni SATIR gerekmedi
hicaz-kralligi         bkz. yukarıdaki bulgu — pencere dışı, satır
                       eklenemedi
```

## Doğrulama

`node -e` ile 8 satırın 8'i de kendi künyesinin `[f, t]` penceresi
İÇİNDE — programatik kontrol edildi, hiçbiri künye penceresini aşmıyor.

✅ İŞLERİM BİTTİ — 17 künyenin 7'sine 8 yeni satır, 2 değerli yan-bulgu,
10 künye açıkça gerekçeli bırakıldı. Devletler.js'e dokunulmadı.
