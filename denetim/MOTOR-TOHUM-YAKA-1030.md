# MOTOR-TOHUM-YAKA-1030 — tohum hücresinin merkezi nehrin öte yakasında

Post-it #157 (Haram / Banatska Palanka, 16 Kasım 1716 Avusturya'ya teslim). Emre: "A SEÇENEĞİNİ SEÇELİM"
(ham ızgarayı ölç · bayraklı çare yaz · dünya sayımı çıkar). **Push ve tam koşu Emre'nin ayrı "it"ini bekler.**

## Kusur
- Haram noktası (21.3318, 44.8453) NE 10m Tuna hattının 2.2 km kuzeyinde. Tohum hücresinin
  (0.05° ızgara) merkezi 44.825K, hattın (~44.8253K) ~30 m güneyinde.
- Dijkstra tohumu hücre merkezinden yürütür ⇒ Haram güney yakada büyür, kuzey yaka (Banat kıyısı)
  güneydeki peteklere (Pasarofça, Semendire) kalır.
- Yayın bayraklarıyla (YÜRÜYÜŞ ızgara sahipliğini kullanır) son petek ızgaradan gelir:
  Haram 310 km², tamamı güney yakada, **nokta kendi peteğinin dışında**. Yayındaki 309 km² ile aynı.
- Sonuç: 16.11.1716 teslim maddesi okunur ama haritada değişim görünmez — Banat kıyısı
  Pasarofça'nın sahipliğinde kalır.
- Bayraksız (saf Voronoi son şekil) koşuda kusur görünmez — Voronoi son şekli noktayı kapsar.

## Çare (bayrak `MOTOR_TOHUM_YAKA=1`; kapalıyken hiçbir satır çalışmaz)
Tohum yerleştirmeden sonra, kıstak köprüsünden önce: nokta→kendi hücre merkezi doğrusu bir nehir
hattını kesiyorsa tohum, merkezi noktayla aynı yakada kalan en yakın 8-komşu kara hücreye taşınır.
Yama: `denetim/MOTOR-TOHUM-YAKA-1030.diff` (63 satır ekleme, `arac/uret_petek.py`).

## Kutu ölçümü (motor_esitlik.py kos · worktree postit-157 · kutu 20.4,44.2,22.6,45.6)
| koşu | bayraklar | Haram son petek | nokta içinde |
|---|---|---|---|
| HARAM-A / B | bayraksız, çare kapalı / açık | Voronoi 3468 km² | evet / evet (anlam farkı yok) |
| HARAM-YA | yayın bayrakları, çare kapalı | 310 km², güney yaka | **hayır** (yayındaki kusur) |
| HARAM-YB | yayın bayrakları + çare | 11.015 km², Tuna'nın kuzeyi | **evet** |

- Log: `🧭 TOHUM YAKASI: 2 tohum … Orsova (Eski Orsova) (2.1 km), Haram (Banatska Palanka) (3.3 km)`.
- `etki YA→YB --nokta 21.3318,44.8453`: 7 petek değişir (Belgrad, Haram, Lepenski Vir, Orsova,
  Pasarofça …), en uzak 130 km. Değişiklik yereldir.
- Haram'ın 11.015 km²'si veri sonucudur: kutuda Tuna kuzeyinde (Banat) başka yerleşim yok
  (Temeşvar, Lugos, Becskerek kutu dışı ya da kenarda). Tam koşuda kuzeyde Temeşvar/Lugos peteğiyle bölüşür.

## Dünya sayımı (motorsuz yaklaşık, betik scratchpad `dunya157.py`)
5379 yerleşim · 678 nehir parçası (motorun süzgeci: BUYUK ad listesi ya da scalerank ≤ 5) ·
**115 yerleşimin hücre merkezi nehrin öte yakasında.** Osmanlı kuşağından örnekler: Yenişehir (Sakarya),
Sivas (Kızılırmak), Tatarpazarcığı (Meriç), Orsova, Haram, Kule (Turnu Măgurele), Vukovar, Ösek,
Segedin, Bratislava, Linz, Palu ve Aşkale (Fırat/Murat), Âne, Nâsıriye, Kürne, Ammâre, Culfa, İbrim, Minye.
Yaklaşıklık: kara-dışı hücreye düşüp kayan tohum ayrıca sınanmadı; kesin sayı tam koşunun
`TOHUM YAKASI` log satırıdır.
Her vakada kusur görünür olmayabilir (karşı yakada rakip petek yoksa toprak yine ona kalır); ama
Haram tipi (yakada rakip var) vakada nokta kendi peteğinin dışına düşer.

## Kabul ölçütü (tam koşuda)
1. Log satırı `TOHUM YAKASI: N` — N ≈ 115 (± kara kayması).
2. Haram 1716-11-15 Osmanlı, 1716-11-17 macaristan-habsburg; Banat kıyısı (21.33, 44.86) el değiştirir.
3. `denetle.py` 0; Değişmez 8 tavanı gerilemez.
4. Bayrak kapalı koşu çıktısı bugünkü ile bayt-eş (kod yolu bayrak arkasında).
