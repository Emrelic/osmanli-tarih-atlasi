# UMIT19 künye taslağı — Üçüncü Reich

## Ana bulgu: yeni künye GEREKMİYOR
`data/devletler.js` `id:"almanya"` yalnız Kutsal Roma değildir: f 0962-02-02, **t 1945-06-05**, ic_not_t'de "'Nazi Almanyası' AYRI KÜNYE AÇILMADI: aynı polity (Reich) — §3.5 ② sınıfı"; ozet 1933-45'i kapsadığını yazar; kronolojisinde 1933-01-30 (USHMM), 1945-05-08, 1945-05-23 maddeleri var; `harita:"almanya"` (BOYALAR #78d028). 87 yerlesim 1939-45 aralığında `d:"almanya"` ile boyalı (Atina, Selanik, Amsterdam, Brüksel, Metz, Viyana…). Ad düzeltmesi Emre kararıdır (14 Ekim 2026, "künye bölünmedi").
- Belgrad 1944-10-06→10-20 için künye yok değil, **dilim yanlış sahipte**: s: sirbistan-nedic →1944-10-06, sonra yugoslavya. Wehrmacht 20 Ekim'e dek şehirde. Çözüm künyesiz: o 14 gün `d:"almanya"` (Atina 1941-44, Selanik aynı emsal). Alternatif: sirbistan-nedic t'yi 10-20'ye uzatmak — kaynaklar hükûmetin 6 Ekim'de bittiğini söylediği için REDDEDİLİR.
- Bucaş: 1941-07-05→1944-07-27 `polonya-genel-hukumeti` (f 1939-10-06) zaten Alman idaresini kapsıyor; künye işi yok.

## Taslak (opsiyonel): `almanya-nazi`
f=1933-01-30, t=1945-06-05. Dosya: `devletler_taslak.txt`.
- f gerekçesi (birebir): USHMM — "German President Paul von Hindenburg appoints Nazi Party leader Adolf Hitler as chancellor of Germany." Alternatifler: 1933-03-23 Yetki Yasası, 1934-08-02 — gün/kaynak teyidi YAPILMADI (web taranmadı, makine zayıf).
- t gerekçesi (birebir): AVALON wwii/ger01 — "hereby assume supreme authority with respect to Germany" (5 Haziran 1945). 1945-05-08 (AVALON gs11: "cease active operations at 2301 hours Central European time on 8th May 1945") seçilirse 28 gün, 05-23 Flensburg seçilirse 13 gün sahipsiz boşluk doğar (Değişmez 1) çünkü almanya-muttefik-isgali f=1945-06-05.

## Öncül/ardıl ölçümü (devletler.js)
- Weimar/1918-33 için ayrı künye YOK; `almanya` (Alman İmparatorluğu + Weimar + Reich) tek künye; 1918-11-09 maddesi "rejim değişimi, künye bitmez" diyor. Hayalet/boşluk: **yok**.
- `almanya` t 1945-06-05 = `almanya-muttefik-isgali` f 1945-06-05 → çakışma 0, boşluk 0.
- Ardıl: BRD f 1949-05-23, DDR f 1949-10-07, işgal idaresi t 1949-10-07 (önceki oturumca kapatıldı).
- almanya-nazi açılırsa: `almanya` t → 1933-01-30; 37 yerlesim dönemi 1933-01-30'da bölünür (TSV'de işaretli), 1933-1945 maddeleri taşınır, renk_olc + renkler.py = MOTOR TUZU (HAVVA koşusu, tam yeniden inşa 7-8 saat). Bu yüzden **önerim açmamak**.

## Belirsizlikler
TDV 'Almanya' maddesi okunmadı (TDV esas — çelişirse TDV). Renk ΔE ölçülmedi. Kragujevac'ın 10-06 sonrası sahibi (Eylül-Ekim 1944'te Partizan) ölçülmedi. Belgrad 1944-10-20 kronoloji maddesi aranmadı (düzeltme yapılırsa Değişmez 2 için şart).

## Dosyalar
`devletler_taslak.txt`, `boyalar_taslak.txt`, `uygulanacak_yerlesimler.tsv` (ilk 4 satır Belgrad/Bucaş işi; kalanı yalnız almanya-nazi açılırsa etkilenen 1933-45 `almanya` dilimleri).
