# KISI-KAYNAK-YENIDEN-1006 — kesik çıkarıcı denetimi (KISI-KAYNAK-TABLO 01–07, ② ve ③)

Görev: UMIT-W22-TDV-CIKARICI-1006 · 5 Ekim 2026 · YALNIZ ARAŞTIRMA, veri yazılmadı.
Ağaç: `C:\atlas-w22` · `origin/main` `78c74b80`.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
Bilinen (ölçümden önce okunan): yedi tablonun altısının aleti scratchpad'lerde bulundu ve OKUNDU
(kodu okumak ölçüm değildir; hiçbir madde henüz bu aletlerle koşturulmadı). TABLO-07'nin aleti bulunamadı.
Kod okumasından beklenti:
- **Kesen aletler:** TABLO-05 (benim eski aletim, ilk kaynakçada keser) ve TABLO-02 (W19 `tdv.py` varsayılan
  kipi: `Müellif-3000 … ilk BİBLİYOGRAFYA` — keser; `-g` kipi kesmez, hangi maddede hangisi kullanıldı bilinmiyor).
  TABLO-01 (W16 `m.py`, tüm sayfa), 03 (W20 `.m-body`), 04 (W21 sayfa/`bodyMainContent`), 06 (W23
  `Kopyalama metni … Her hakkı mahfuzdur`) kesmez.
- ②/③ kayıtlarının dayandığı maddelerin **%30 ± 15**'i çok bölümlüdür (ülke/devlet maddeleri).
- Kesen iki tabloda çok bölümlü maddeye dayanan ②/③ kayıt: **12 ± 6**.
- Yeniden aramada sınıf değişikliği: **③→② 2 ± 2** · **②→① 0–1** · **②→③ 0** (kesik metin fazla değil eksik gösterir).
- TABLO-07: ölçülemedi beklenir (alet yok).
- D218 %81 ölçümü: ③ ölçüt "TDV'de var mı" ise kesiklikten etkilenmiş olabilir; aletini bulursam ölçerim, hüküm yok.

## SONUÇ (özet)
- 147 satır denetlendi (② 118 · ③ 18 · D 11 = koordinatörün 118 + 29'u). **Sınıf değişikliği: 0.**
- Yalnız iki alet keser: **T05** (benim eski aletim) ve **T02**'nin varsayılan kipi. Öteki beş tablonun aleti
  çok bölümlü 42 maddenin 42'sini tam okuyor.
- Kesilmiş maddeye dayanan **26** satır (T02 11 · T05 15) ve aleti bilinmeyen T07'den **2** satır tam metinde
  yeniden arandı: ③→② 0 · ②→① 0 · ②→③ 0. Kalan **119** satır kesmeyen aletle okunmuş, aynen kalır.
- D218: **WebFetch** ile ölçülmüş (bizim kaynakça-kesik aletimiz değil). 7 "çürük"ten biri tam metinle çelişiyor (§6).

## 1. Hangi tablo hangi aletle okudu (kaynak: scratchpad'deki aletin kendisi; rapor metni yöntemi yazmıyordu)
| tablo | oturum / alet | metin nasıl alınıyor | çok bölümlü maddeyi keser mi (ÖLÇÜLDÜ, 42 madde) |
|---|---|---|---|
| 01 | W16 · `54307855…/m.py` | bütün sayfa | **hayır** (42/42 tam) |
| 02 | W19 · `d3c01881…/tdv.py` | varsayılan kip: `Müellif−3000 … ilk BİBLİYOGRAFYA` · `-g` kipi: bütün sayfa | **varsayılan kip KESER (42/42 yalnız 1. bölüm)** · `-g` kesmez. Hangi maddede hangi kip kullanıldığı kayıtlı değil |
| 03 | W20 · `5c405971…/tdv.py` | `.m-body` (BeautifulSoup) | **hayır** (42/42 tam) |
| 04 | W21 · `835e6f21…/tdv.py` | `bodyMainContent` yoksa bütün sayfa (TDV'de o kimlik yok) | **hayır** (42/42 tam) |
| 05 | W22 · `3fb763a7…/tdv.py` İLK sürümü | `body_pad_article` … ilk BİBLİYOGRAFYA | **KESER (42/42 yalnız 1. bölüm)** — 5 Ekim'de dilim ortasında düzeltilmişti |
| 06 | W23 · `4ca9d42d…/tdv.py` | ilk "Kopyalama metni" … "Her hakkı mahfuzdur" | **hayır** (42/42 tam) |
| 07 | W24 · **bulunamadı** (hiçbir scratchpad'de yok) | ölçülemedi | **ölçülemedi**. Ama dolaylı kanıt var: T07'nin `caterina-cornaro` ve `guy-de-lusignan` alıntıları `kibris` maddesinin **2/5. bölümünde** geçiyor ⇒ o alet en azından `kibris`i kesmeden okudu |

**İkinci, bağımsız kanıt (alıntı yeri):** tabloların alıntıları tam metinde arandı. T03'ün 15, T04'ün 5, T06'nın 8 kendi
alıntısı (örneklemden alınan satırlar hariç) maddelerin **2. ve sonraki bölümlerinde** geçiyor ⇒ bu aletler fiilen tam okumuş (ölçümle tutarlı).
T02'de `omer-mekrem` (ezher 2/2), `palmerston` (ingiltere 3/5), `eugen` (avusturya 2/5), `milos-obrenovic`
(sirbistan 2/2) alıntıları da sonraki bölümlerden ⇒ W19 bu dört maddede `-g` ya da eşdeğer tam okuma kullanmış.
T02'nin kalan 7 satırı için kip kanıtlanamadı → yine de yeniden arandı.

## 3. Yeniden arama — 28 satır, tam metinde (sınıf eski → yeni)
Yöntem: satırın bütün maddeleri + ilgili ek maddeler, yeni çıkarıcıyla, ad varyantları regex'iyle bölüm bölüm
tarandı (gövde ve kaynakça ayrı). ②→① için her kişi TDV başlık aramasında (`&p=m`) ayrıca arandı.
| tablo | id | eski | yeni | tam metindeki bulgu |
|---|---|---|---|---|
| 02 | layos2 | ② | ② | `mohac-muharebesi` 9 isabet (tek bölüm), `budin` 1. bölüm; başlıkta kendi maddesi yok |
| 02 | janos-zapolya | ② | ② | `budin` 1/2, `erdel`; başlık araması 0 |
| 02 | jan-sobieski | ② | ② | `polonya` **2/3**: "Bu savaşlarda öne çıkan isim Johann Sobieski oldu … kaleyi zaptetti (17 Ekim 1673)" — f/t vermez; başlıkta yok |
| 02 | katerina2 | ② | ② | `rusya` **2/4**: "Bu şekilde tahta sahip olan II. Katerina (1762-1796)" (saltanat); başlıkta yok |
| 02 | ismail-kamil-pasa | ② | ② | `sudan` **3/3**: "Mehmed Ali Paşa'nın oğlu İsmâil Kâmil Paşa" (1826'ya kadar yönetenler); başlıkta yok |
| 02 | omer-mekrem | ② | ② | `ezher` **2/2** (tablonun alıntısı zaten buradan) |
| 02 | palmerston | ② | ② | `ingiltere` **3/5** (tablonun alıntısı zaten buradan) |
| 02 | eugen | ② | ② | `avusturya` **2/5** (tablonun alıntısı zaten buradan) |
| 02 | milos-obrenovic | ② | ② | `sirbistan` **2/2** (tablonun alıntısı zaten buradan) |
| 02 | hasan-tahsin | ③ | ③ | `izmir` (3 bölüm) tam metinde ad YOK; isabetler adaş (`selanik` Vali Hasan Tahsin Paşa 1912, hattat, dil âlimi, `nevres-osman`) |
| 02 | suleyman | ② | ② | `safeviler` 1/2 (12 isabet, tümü 1. bölüm) |
| 05 | kerey-han | ③ | ③ | `kazakistan` 4 bölüm tam: "Kerey" yalnız boy adı; `kazaklar` 2 bölüm tam: yok |
| 05 | kenesari-han | ② | ② | `kazakistan` 27 isabet, hepsi 1/4; t yine yok |
| 05 | harihara1 | ③ | ③ | `hindistan` **3/8**: "Horihara ve Gondvana racalıkları" (kişi değil) · `behmeniler` "II. Harihara" (adaş) |
| 05 | krisnadevaraya | ③ | ③ | 4 madde tam metinde 0 isabet |
| 05 | sivaci | ② | ② | `hindistan` **3/8** + `evrengzib` 6 isabet; f/t yok |
| 05 | zhao-kuangyin | ③ | ③ | `cin--ulke` 3 bölüm: yalnız "Sung sülâlesi kuruluncaya kadar … (906-960)"; "T'ai-tsu" isabetleri **Ming** kurucusu (adaş unvan) |
| 05 | zhu-yuanzhang | ② | ② | `cin--ulke` 2/3 ve 3/3 (tablo bunları zaten kullanmıştı) |
| 05 | sejong | ③ | ③ | `kore-cumhuriyeti` 2 bölüm tam: 0 |
| 05 | gojong | ② | ② | `kore-cumhuriyeti` 1/2 tek isabet |
| 05 | minamoto-no-yoritomo · tokugawa-ieyasu · meiji-imparatoru | ② | ② | `japonya` 2/3 (tablo zaten buradan alıntıladı) |
| 05 | raden-wijaya · hayam-wuruk | ③ | ③ | `cava`, `endonezya` (4 bölüm), `singapur`, `malezya`, `sumatra` tam metinde 0 |
| 05 | u-thong | ② | ② | `tayland` 2/2 (tablo zaten buradan) |
| 07 | guy-de-lusignan | ② | ② | `kibris` 2/5 (16 isabet) + `lefkose`, `larnaka`; başlıkta yok |
| 07 | caterina-cornaro | ② | ② | `kibris` 2/5; başlıkta yok |

⇒ **0 sınıf değişikliği.** Neden: T05'in kesik okumaları dilim ortasında fark edilip düzeltilmişti (`kazakistan`,
`kazaklar`, `hindistan` tam metinle yeniden koşuldu; sonraki maddeler zaten düzeltilmiş aletle okundu). T02'nin ②'leri
ise kişiyi ilk bölümde ya da başka bir tek bölümlü maddede zaten bulmuştu; ② için kesik metin yalnız EK bilgi kaçırtır.
Ek bilgi (sınıfı değiştirmez, W16'nın bilmesi için): `jan-sobieski` (17 Ekim 1673 Hotin), `katerina2` (saltanat
1762-1796), `ismail-kamil-pasa` (Sudan'ı 1826'ya kadar yönetenler arasında) — üçü de tam metinde, 2.+ bölümde.

## 4. Öngörünün sınavı
| öngörü (§0) | ölçülen | tuttu mu |
|---|---|---|
| kesen aletler: T05 + T02 varsayılan | T05 + T02 varsayılan (42/42 keser); öteki beşi 0/42 | ✓ |
| ②/③ maddelerinin %30 ± 15'i çok bölümlü | 42 / 154 gövdeli madde = **%27** (302: 33, gönderme: 11 ayrı) | ✓ |
| kesen tablolarda etkilenen satır 12 ± 6 | **26** (T02 11 · T05 15) | ✗ **düşük tahmin**: T05'in dilimi tümüyle ülke maddesine dayanan Asya hükümdarlarıydı |
| ③→② 2 ± 2 · ②→① 0–1 · ②→③ 0 | 0 · 0 · 0 | ✓ (alt uçta) |
| T07 ölçülemedi | alet ölçülemedi, ama `kibris` alıntısı aletin o maddeyi tam okuduğunu kanıtlıyor | kısmen |

## 6. D218 (%81 TDV isabeti) — ÖLÇÜLDÜ, hüküm yok
- **Kaynak:** ders 8 Ağustos'ta `67333816` commit'iyle CLAUDE.md'ye girdi; ölçümün kendi kaydı
  `oturumlar/VERI-DEVLET-GOREV.md` "㉘ PARTİ A": *"Yöntem — her aday için HTTP kodu VE gövde okuması (**WebFetch**)"*.
  ⇒ Bu tablolardaki çıkarıcılarla **aynı tür değil**: WebFetch sayfayı küçük bir modele özetletir; uzun sayfayı ne
  kadar okuduğu ölçülemez (CLAUDE.md §4 küçük modeli zaten yasaklıyor). Kaynakça-kesiği değil, **başka bir kesik/özet riski**.
- **Ölçülebilen:** 36 adaydan yalnız 7 "çürük" adıyla yazılmış; 29 "doğrulandı"nın slug listesi kayıtta yok → **ölçülemedi**.
  7 çürüğün maddeleri yeni çıkarıcıyla ölçüldü:
  | aday → açılan | bölüm | D218 hükmü | tam metin ölçümü |
  |---|---|---|---|
  | `nis`, `kili`, `suleyman-i` | 1 · 1 · 2 | yanlış madde | kesiklikle ilgisiz (madde konusu yanlış) |
  | `saltanat` | gönderme (`bk.` 6 hedef) | yanlış madde | kesiklikle ilgisiz |
  | `rumeli` | **1** | 1878-85'i kapsamıyor | tam metinde "1878", "1885", "Şarkî/Doğu Rumeli" 0 → hükümle **tutarlı** |
  | `bursa` | 2 | Fetret bölümü 1403 değil 1481 Cem | tam metinde "İsa Çelebi" ve "1403" 0 → hükümle **tutarlı** |
  | `ankara` | **3** | Ahî yönetimi iddiasını **desteklemiyor** | 🔴 **2/3. bölüm:** *"Bu dönemde yönetimi ellerinde tutan ahîlerin şehrin sosyoekonomik hayatında önemli rol oynadıkları bilinmektedir."* → hükümle **ÇELİŞİYOR** |
  `ahilik` (1 bölüm) tam metinde "Ankara" 0 → oradaki "doğrulamıyor" hükmü tutarlı.
- Hüküm verilmedi: ankara vakasının %81'i değiştirip değiştirmediği "isabet"in tanımına (ilk aday slug doğru madde
  mi) bağlıdır; 29 doğrulanmışın listesi olmadan oranın kendisi yeniden ölçülemez.

## 7. Yan bulgular
1. **Gönderme sayfası "bölümsüz" görünür** (11 madde: `gazi-evrenos-bey`, `patrona`, `kuva-yi-milliye`, `istiklal-harbi`,
   `turki-b-abdullah`, `habesistan`, `songay`, `sulu`, `zeyyaniler`, `ibn-ebu-umare`, `garabet`). Çıkarıcı artık
   `gonderme` alanında hedefi döndürür (`.madde_sayfa_atif`). 9'unun hedefi satırın kendi slug listesinde zaten var;
   `patrona`→`bahriye`/`riyale` ve `garabet`→`garib--arap-dili` ilgisiz (tablolar da öyle yazmış).
2. **T02 aletinin varsayılan kipi tehlikeli kalır:** `d3c01881…/tdv.py` hâlâ ilk BİBLİYOGRAFYA'da kesiyor; scratchpad'de
   duruyor. Kampanyada kullanılmamalı → `ARAC-TDV-CIKARICI-1006.py`.
3. **Sayfa boyutu ≠ gövde:** `istanbul` 12 bölüm / 567 bin kr; kesik aletler bundan 43 bin görüyordu (%7,6).
4. 162 canlı madde · 33 ölü (302) slug (tabloların "denendi, ölü" diye yazdıkları; hepsi 302 döndü, 000/503 yok).

## 2. Kesilen maddeler — ADIYLA (çok bölümlü 42 madde; yalnız iki alet keser)
Karakter = gövde metni (kaynakça hariç) · eski aletlerin sayısı sayfa kabuğunu da içerir. "kapsanan" = eski metinde iki yoklaması da bulunan bölüm sayısı.

| madde | bölüm | YENİ gövde kr | T05 eski (W22) kr · kapsanan | T02 varsayılan (W19) kr · kapsanan | T01/T02-g/T03/T04/T06 kapsanan | dayanan ②/③ satırlar |
|---|---|---|---|---|---|---|
| `istanbul` | 12 | 567,449 | 43,108 · 1/12 | 43,410 · 1/12 | tam | 03:enrico-dandolo |
| `hindistan` | 8 | 232,245 | 24,349 · 1/8 | 24,652 · 1/8 | tam | 05:harihara1, 05:krisnadevaraya, 05:sivaci |
| `asya` | 7 | 208,138 | 28,036 · 1/7 | 28,334 · 1/7 | tam | 05:zhao-kuangyin, 06:agung |
| `afrika` | 5 | 128,770 | 28,355 · 1/5 | 28,655 · 1/5 | tam | 06:nzinga, 06:shaka |
| `kibris` | 5 | 120,973 | 9,337 · 1/5 | 9,637 · 1/5 | tam | 07:guy-de-lusignan, 07:caterina-cornaro |
| `rusya` | 4 | 117,011 | 10,116 · 1/4 | 10,415 · 1/4 | tam | 02:katerina2, 03:ivan4, 03:aleksandr1, 03:nikolay2, 03:mihail-fyodorovic, 03:nikolay1 |
| `endonezya` | 4 | 100,937 | 15,533 · 1/4 | 15,836 · 1/4 | tam | 05:raden-wijaya, 05:hayam-wuruk, 06:agung |
| `ingiltere` | 5 | 98,738 | 23,904 · 1/5 | 24,207 · 1/5 | tam | 02:palmerston, 03:elizabeth1, 04:victoria, 04:george5 |
| `fransa` | 6 | 98,438 | 9,171 · 1/6 | 9,471 · 1/6 | tam | 03:francois1, 03:louis16, 03:louis14 |
| `bulgaristan` | 5 | 95,575 | 30,833 · 1/5 | 31,138 · 1/5 | tam | 04:ivan-sisman |
| `almanya` | 4 | 94,686 | 18,839 · 1/4 | 19,140 · 1/4 | tam | 03:ferdinand1, 03:karl5, 03:rudolf2, 03:franz2 |
| `ispanya` | 4 | 90,688 | 7,937 · 1/4 | 8,238 · 1/4 | tam | 03:karl5, 03:felipe2 |
| `bahriye` | 2 | 85,363 | 38,984 · 1/2 | 39,285 · 1/2 | tam | — (yalnız gönderme hedefi) |
| `izmir` | 3 | 78,053 | 52,923 · 1/3 | 53,222 · 1/3 | tam | 02:hasan-tahsin |
| `polonya` | 3 | 70,025 | 8,099 · 1/3 | 8,400 · 1/3 | tam | 02:jan-sobieski, 03:zygmunt3, 03:michal-korybut-wisniowiecki, 06:jozef-pilsudski |
| `yunanistan` | 2 | 66,701 | 12,684 · 1/2 | 12,988 · 1/2 | tam | 04:othon1 |
| `amerika` | 2 | 65,000 | 32,520 · 1/2 | 32,821 · 1/2 | tam | 06:moctezuma2, 06:cuauhtemoc, 06:pachacuti, 06:atahualpa, 06:simon-bolivar, 06:jean-jacques-dessalines |
| `amerika-birlesik-devletleri` | 2 | 64,847 | 25,434 · 1/2 | 25,755 · 1/2 | tam | 06:kamehameha1, 06:liliuokalani |
| `cin--ulke` | 3 | 57,698 | 13,377 · 1/3 | 13,674 · 1/3 | tam | 05:zhao-kuangyin, 05:zhu-yuanzhang |
| `kazakistan` | 4 | 57,578 | 28,712 · 1/4 | 29,016 · 1/4 | tam | 05:kerey-han, 05:kenesari-han |
| `ezher` | 2 | 53,547 | 27,685 · 1/2 | 27,984 · 1/2 | tam | 02:omer-mekrem |
| `macaristan` | 2 | 53,462 | 50,328 · 1/2 | 50,632 · 1/2 | tam | 03:matyas-corvinus, 03:vladislav2, 06:miklos-horthy |
| `etiyopya` | 2 | 52,134 | 19,802 · 1/2 | 20,104 · 1/2 | tam | 04:gelawdewos, 04:menelik2 |
| `avusturya` | 5 | 51,211 | 9,250 · 1/5 | 9,553 · 1/5 | tam | 02:eugen, 03:ferdinand1, 03:maria-theresia, 03:josef2, 03:franz2 |
| `safeviler` | 2 | 50,117 | 41,704 · 1/2 | 42,007 · 1/2 | tam | 02:suleyman |
| `sudan` | 3 | 44,055 | 7,105 · 1/3 | 7,404 · 1/3 | tam | 02:ismail-kamil-pasa |
| `budin` | 2 | 41,469 | 20,653 · 1/2 | 20,952 · 1/2 | tam | 02:layos2, 02:janos-zapolya |
| `japonya` | 3 | 37,686 | 5,908 · 1/3 | 6,209 · 1/3 | tam | 05:minamoto-no-yoritomo, 05:tokugawa-ieyasu, 05:meiji-imparatoru, 06:sho-hashi |
| `cekoslovakya` | 3 | 36,074 | 9,164 · 1/3 | 9,470 · 1/3 | tam | 06:tomas-masaryk |
| `sirbistan` | 2 | 34,624 | 6,202 · 1/2 | 6,505 · 1/2 | tam | 02:milos-obrenovic, 04:stefan-lazarevic, 04:djuradj-brankovic, 04:kara-yorgi |
| `filipinler` | 2 | 34,155 | 12,734 · 1/2 | 13,038 · 1/2 | tam | 06:serif-ul-hasim |
| `tayland` | 2 | 31,197 | 9,334 · 1/2 | 9,635 · 1/2 | tam | 05:u-thong, 06:rama1, 06:rama5 |
| `portekiz` | 3 | 29,222 | 7,833 · 1/3 | 8,135 · 1/3 | tam | 06:nzinga, 06:dom-pedro1, 06:dom-pedro2 |
| `romanya` | 2 | 27,380 | 6,831 · 1/2 | 7,132 · 1/2 | tam | 06:alexandru-ioan-cuza |
| `cava` | 2 | 25,087 | 8,073 · 1/2 | 8,371 · 1/2 | tam | 05:raden-wijaya, 05:hayam-wuruk, 06:agung |
| `nijerya` | 2 | 21,872 | 6,582 · 1/2 | 6,883 · 1/2 | tam | 06:oba-ewuare |
| `tesbih--tespih` | 2 | 20,578 | 12,376 · 1/2 | 12,676 · 1/2 | tam | 04:pius5 |
| `kazaklar` | 2 | 20,541 | 10,338 · 1/2 | 10,640 · 1/2 | tam | 05:kerey-han |
| `moldova` | 2 | 15,773 | 5,480 · 1/2 | 5,781 · 1/2 | tam | 04:bogdan1 |
| `kore-cumhuriyeti` | 2 | 15,210 | 9,276 · 1/2 | 9,586 · 1/2 | tam | 05:sejong, 05:gojong |
| `myanmar` | 2 | 15,046 | 4,602 · 1/2 | 4,903 · 1/2 | tam | 06:alaungpaya, 06:thibaw |
| `singapur` | 2 | 14,609 | 6,613 · 1/2 | 6,915 · 1/2 | tam | 05:hayam-wuruk |

## 5. YENİ SINIF TABLOSU — 147 satır (W16 birleştirmesi için)
`dayanak` = satırın kendi tablosunun aleti, satırın maddelerinden birini kesti mi · `alıntı yeri` = tablonun alıntısının tam metinde bulunduğu bölüm (bölüm ≥ 2 ⇒ o tablonun aleti o maddeyi FİİLEN tam okumuş).

| tablo | id | eski sınıf | YENİ sınıf | dayanak | yeniden arandı mı | alıntı yeri (çok bölümlü madde) |
|---|---|---|---|---|---|---|
| 01 | evrenos-bey | ② | ② | temiz | hayır | — |
| 01 | pasa-yigit-bey | ② | ② | temiz | hayır | — |
| 01 | turahanoglu-omer-bey | ② | ② | temiz | hayır | — |
| 01 | halil-pasa | ② | ② | temiz | hayır | — |
| 01 | muezzinzade-ali-pasa | ② | ② | temiz | hayır | — |
| 01 | konstantinos11 | ② | ② | temiz | hayır | — |
| 02 | layos2 | ② | ② | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 02 | janos-zapolya | ② | ② | KESİK (alet keser) | evet — tam metin | `budin` 1/2 |
| 02 | jan-sobieski | ② | ② | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 02 | katerina2 | ② | ② | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 02 | tosun-pasa | ② | ② | temiz | hayır | — |
| 02 | ismail-kamil-pasa | ② | ② | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 02 | hafiz-mehmed-pasa | ② | ② | temiz | hayır | — |
| 02 | omer-mekrem | ② | ② | KESİK (alet keser) | evet — tam metin | `ezher` 2/2 |
| 02 | codrington | ② | ② | temiz | hayır | — |
| 02 | palmerston | ② | ② | KESİK (alet keser) | evet — tam metin | `ingiltere` 3/5 |
| 02 | hunyadi-yanos | ② | ② | temiz | hayır | — |
| 02 | andrea-doria | ② | ② | temiz | hayır | — |
| 02 | don-juan | ② | ② | temiz | hayır | — |
| 02 | eugen | ② | ② | KESİK (alet keser) | evet — tam metin | `avusturya` 2/5 |
| 02 | nelson | ② | ② | temiz | hayır | — |
| 02 | townshend | ② | ② | temiz | hayır | — |
| 02 | patrona-halil | ② | ② | temiz | hayır | — |
| 02 | kabakci-mustafa | ② | ② | temiz | hayır | — |
| 02 | milos-obrenovic | ② | ② | KESİK (alet keser) | evet — tam metin | `sirbistan` 2/2 |
| 02 | hasan-tahsin | ③ | ③ | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 02 | suleyman | ② | ② | KESİK (alet keser) | evet — tam metin | `safeviler` 1/2 |
| 02 | kara-yuluk-osman-bey | ② | ② | temiz | hayır | — |
| 02 | ahmed-fevzi-pasa | ② | ② | temiz | hayır | — |
| 02 | napier | ② | ② | temiz | hayır | — |
| 02 | allenby | ② | ② | temiz | hayır | — |
| 03 | yakub-bey | ② | ② | temiz | hayır | — |
| 03 | kara-yusuf | ② | ② | temiz | hayır | — |
| 03 | ferdinand1 | ② | ② | temiz | hayır | `almanya` 2/4 |
| 03 | karl5 | ② | ② | temiz | hayır | `ispanya` 2/4 |
| 03 | rudolf2 | ② | ② | temiz | hayır | `almanya` 2/4 |
| 03 | leopold1 | ② | ② | temiz | hayır | — |
| 03 | maria-theresia | ② | ② | temiz | hayır | `avusturya` 2/5 |
| 03 | josef2 | ② | ② | temiz | hayır | `avusturya` 2/5 |
| 03 | franz2 | ② | ② | temiz | hayır | `almanya` 2/4, `avusturya` 2/5 |
| 03 | matyas-corvinus | ② | ② | temiz | hayır | alıntı başka maddeden |
| 03 | zygmunt3 | ② | ② | temiz | hayır | `polonya` 2/3 |
| 03 | michal-korybut-wisniowiecki | ② | ② | temiz | hayır | `polonya` 2/3 |
| 03 | vladislav2 | ② | ② | temiz | hayır | `macaristan` 1/2 |
| 03 | enrico-dandolo | ② | ② | temiz | hayır | alıntı başka maddeden |
| 03 | ivan4 | ② | ② | temiz | hayır | `rusya` 2/4, `rusya` 3/4 |
| 03 | aleksandr1 | ② | ② | temiz | hayır | `rusya` 2/4 |
| 03 | nikolay2 | ② | ② | temiz | hayır | `rusya` 2/4 |
| 03 | mengli-giray1 | ② | ② | temiz | hayır | — |
| 03 | ulug-muhammed | ② | ② | temiz | hayır | — |
| 03 | edigu | ② | ② | temiz | hayır | — |
| 03 | francois1 | ② | ② | temiz | hayır | `fransa` 2/6, `fransa` 3/6 |
| 03 | louis16 | ② | ② | temiz | hayır | `fransa` 2/6 |
| 03 | felipe2 | ② | ② | temiz | hayır | `ispanya` 2/4 |
| 03 | elizabeth1 | ② | ② | temiz | hayır | `ingiltere` 1/5, `ingiltere` 3/5 |
| 03 | louis14 | ② | ② | temiz | hayır | `fransa` 2/6 |
| 03 | mihail-fyodorovic | ② | ② | temiz | hayır | `rusya` 2/4 |
| 03 | nikolay1 | ② | ② | temiz | hayır | `rusya` 2/4 |
| 04 | victoria | ② | ② | temiz | hayır | `ingiltere` 1/5 |
| 04 | george5 | ② | ② | temiz | hayır | alıntı başka maddeden |
| 04 | pius5 | ② | ② | temiz | hayır | alıntı başka maddeden |
| 04 | stefan-lazarevic | ② | ② | temiz | hayır | alıntı başka maddeden |
| 04 | djuradj-brankovic | ② | ② | temiz | hayır | `sirbistan` 2/2 |
| 04 | kara-yorgi | ② | ② | temiz | hayır | `sirbistan` 2/2 |
| 04 | ivan-sisman | ② | ② | temiz | hayır | alıntı başka maddeden |
| 04 | tvrtko1 | ② | ② | temiz | hayır | — |
| 04 | basarab1 | ② | ② | temiz | hayır | — |
| 04 | mircea | ② | ② | temiz | hayır | — |
| 04 | vlad3 | ② | ② | temiz | hayır | — |
| 04 | bogdan1 | ② | ② | temiz | hayır | `moldova` 2/2 |
| 04 | stefan-cel-mare | ② | ② | temiz | hayır | — |
| 04 | othon1 | ② | ② | temiz | hayır | `yunanistan` 2/2 |
| 04 | turki-bin-abdullah | ② | ② | temiz | hayır | — |
| 04 | muhammed-bin-resid | ② | ② | temiz | hayır | — |
| 04 | ahmed-bin-said | ② | ② | temiz | hayır | — |
| 04 | ahmed-karamanli | ② | ② | temiz | hayır | — |
| 04 | amara-dunkas | ② | ② | temiz | hayır | — |
| 04 | gelawdewos | ② | ② | temiz | hayır | `etiyopya` 1/2, `etiyopya` 2/2 |
| 04 | menelik2 | ② | ② | temiz | hayır | alıntı başka maddeden |
| 05 | tarmasirin-han | ② | ② | temiz | hayır | — |
| 05 | kerey-han | ③ | ③ | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 05 | kenesari-han | ② | ② | KESİK (alet keser) | evet — tam metin | `kazakistan` 1/4 |
| 05 | erdeni-batur | ③ | ③ | temiz | hayır | — |
| 05 | tsevang-rabtan | ② | ② | temiz | hayır | — |
| 05 | alaeddin-hasan-behmen-sah | ② | ② | temiz | hayır | — |
| 05 | harihara1 | ③ | ③ | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 05 | krisnadevaraya | ③ | ③ | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 05 | sivaci | ② | ② | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 05 | rancit-singh | ② | ② | temiz | hayır | — |
| 05 | zhao-kuangyin | ③ | ③ | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 05 | wanyan-aguda | ③ | ③ | temiz | hayır | — |
| 05 | zhu-yuanzhang | ② | ② | KESİK (alet keser) | evet — tam metin | `cin--ulke` 2/3, `cin--ulke` 3/3 |
| 05 | sejong | ③ | ③ | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 05 | gojong | ② | ② | KESİK (alet keser) | evet — tam metin | `kore-cumhuriyeti` 1/2 |
| 05 | minamoto-no-yoritomo | ② | ② | KESİK (alet keser) | evet — tam metin | `japonya` 2/3 |
| 05 | tokugawa-ieyasu | ② | ② | KESİK (alet keser) | evet — tam metin | `japonya` 2/3 |
| 05 | meiji-imparatoru | ② | ② | KESİK (alet keser) | evet — tam metin | `japonya` 2/3 |
| 05 | dalai-lama5 | ② | ② | temiz | hayır | — |
| 05 | raden-wijaya | ③ | ③ | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 05 | hayam-wuruk | ③ | ③ | KESİK (alet keser) | evet — tam metin | alıntı başka maddeden |
| 05 | parameswara | ② | ② | temiz | hayır | — |
| 05 | u-thong | ② | ② | KESİK (alet keser) | evet — tam metin | `tayland` 2/2 |
| 05 | mevlay-muhammed | ② | ② | temiz | hayır | — |
| 06 | rama1 | ② | ② | temiz | hayır | `tayland` 2/2 |
| 06 | rama5 | ② | ② | temiz | hayır | `tayland` 2/2 |
| 06 | le-loi | D | D | temiz | hayır | — |
| 06 | nguyen-anh | D | D | temiz | hayır | — |
| 06 | alaungpaya | ② | ② | temiz | hayır | `myanmar` 2/2 |
| 06 | thibaw | ③ | ③ | temiz | hayır | alıntı başka maddeden |
| 06 | agung | ② | ② | temiz | hayır | `cava` 2/2 |
| 06 | sundiata-keita | ② | ② | temiz | hayır | — |
| 06 | sunni-ali | ② | ② | temiz | hayır | — |
| 06 | askiya-muhammed | ② | ② | temiz | hayır | — |
| 06 | idris-alooma | ② | ② | temiz | hayır | — |
| 06 | oba-ewuare | ③ | ③ | temiz | hayır | alıntı başka maddeden |
| 06 | joao1 | ③ | ③ | temiz | hayır | — |
| 06 | nzinga | D | D | temiz | hayır | alıntı başka maddeden |
| 06 | shaka | ③ | ③ | temiz | hayır | alıntı başka maddeden |
| 06 | moctezuma2 | D | D | temiz | hayır | alıntı başka maddeden |
| 06 | cuauhtemoc | D | D | temiz | hayır | alıntı başka maddeden |
| 06 | pachacuti | D | D | temiz | hayır | alıntı başka maddeden |
| 06 | atahualpa | D | D | temiz | hayır | alıntı başka maddeden |
| 06 | simon-bolivar | D | D | temiz | hayır | alıntı başka maddeden |
| 06 | kamehameha1 | ③ | ③ | temiz | hayır | alıntı başka maddeden |
| 06 | george-tupou1 | D | D | temiz | hayır | — |
| 06 | miklos-horthy | ② | ② | temiz | hayır | `macaristan` 1/2 |
| 06 | jozef-pilsudski | ② | ② | temiz | hayır | `polonya` 2/3 |
| 06 | tomas-masaryk | ② | ② | temiz | hayır | `cekoslovakya` 2/3 |
| 06 | alexandru-ioan-cuza | ② | ② | temiz | hayır | alıntı başka maddeden |
| 06 | dom-pedro1 | ② | ② | temiz | hayır | `portekiz` 2/3 |
| 06 | dom-pedro2 | D | D | temiz | hayır | alıntı başka maddeden |
| 06 | jean-jacques-dessalines | D | D | temiz | hayır | alıntı başka maddeden |
| 06 | liliuokalani | ③ | ③ | temiz | hayır | alıntı başka maddeden |
| 06 | muhammed-davud-sah | ② | ② | temiz | hayır | — |
| 06 | serif-ul-hasim | ② | ② | temiz | hayır | `filipinler` 2/2 |
| 06 | andrianampoinimerina | ③ | ③ | temiz | hayır | — |
| 06 | ranavalona3 | ② | ② | temiz | hayır | — |
| 06 | sho-hashi | ③ | ③ | temiz | hayır | alıntı başka maddeden |
| 07 | yagmurasen-b-zeyyan | ② | ② | temiz (tek bölümlü) | hayır | — |
| 07 | ebu-zekeriyya-yahya | ② | ② | temiz (tek bölümlü) | hayır | — |
| 07 | guy-de-lusignan | ② | ② | ÖLÇÜLEMEDİ (alet yok) | evet — tam metin | `kibris` 2/5 |
| 07 | caterina-cornaro | ② | ② | ÖLÇÜLEMEDİ (alet yok) | evet — tam metin | `kibris` 2/5 |
| 07 | garabet-balyan | ② | ② | temiz (tek bölümlü) | hayır | — |
| 07 | nikogos-balyan | ② | ② | temiz (tek bölümlü) | hayır | — |
| 07 | cerkes-hasan-bey | ② | ② | temiz (tek bölümlü) | hayır | — |
| 07 | yedisekiz-hasan-pasa | ② | ② | temiz (tek bölümlü) | hayır | — |
| 07 | gercek-davud | ② | ② | temiz (tek bölümlü) | hayır | — |
