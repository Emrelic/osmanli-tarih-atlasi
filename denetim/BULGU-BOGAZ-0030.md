<!-- DURUM: OLCULDU ¦ 2026-08-24 ¦ MOTOR EPOK ¦ H-0002 · H-0007 · H-0016 -->
# BOĞAZ KÜMESİ — ÖLÇÜM · `0030/H-0002 · H-0007 · H-0016`

**Ölçen** MOTOR EPOK (`arac/uret_petek.py`) · **Motora YAZILMADI** — teşhis + öneri.

---

## ⓪ ÖNCE: ŞİKÂYET HÂLÂ GEÇERLİ Mİ — EVET
`git log --oneline --all -i --grep="bogaz|maske|kiyi kes"` → yalnız **tahta
mesajları** çıktı, **düzeltme commit'i yok.** Şikâyet ayakta.

---

## 🔴 ① ÖLÇÜM: KARA MASKESİ BOĞAZLARI **KESİYOR** — teşhis çürüdü

`SONNET HAZIR KITA 78` (M-1191) kökü şöyle koymuştu:
> *"kara maskesinde **İSTANBUL BOĞAZI KESİLMEMİŞ**"*

**Ölçtüm ve tutmadı.** Boğazı **enine kesen** hatlar üzerinde 60 nokta
örnekledim (tek nokta yanıltır), maskenin **dört aşamasında** birden:
```
geçit                              gerçek   ①HAM   ②+BÖLGE  ③+simplify  ④+göller
İstanbul Boğazı (Rumeli↔Anadolu)   0,7 km   12/60   12/60    13/60      13/60
İstanbul Boğazı (güney ağzı)       1,5 km   23/60   23/60    23/60      23/60
Çanakkale (Nara dar yeri)          1,3 km   20/60   20/60    22/60      22/60
Çanakkale (güney ağzı)             4,0 km   60/60   60/60    60/60      60/60
Saroz (Gelibolu↔kuzey)            22,0 km   40/60   40/60    40/60      40/60
Marmara (Bandırma↔Tekirdağ)       61,0 km   60/60   60/60    60/60      60/60
```
⇒ **Yedi geçidin yedisi de AÇIK**, ve `simplify(0,002)` hiçbirini kapatmıyor
(sayılar aşamalar arasında düşmüyor, birinde **artıyor** bile).
```
ÖLÇTÜĞÜM     maske dört aşamada da boğazları su gösteriyor
ÇIKARDIĞIM   "maskede kesilmemiş" teşhisi YANLIŞ — kusur maskede DEĞİL
```

---

## 🔴 ② GERÇEK KÖK: **IZGARA** BOĞAZI GÖRMÜYOR, MASKE DEĞİL

Motor sahiplik kararını maskede değil **0,05°lik (~5,5 km) ızgarada** veriyor.
```
İstanbul Boğazı — iki yaka hücresi:  (1040,1080) ve (1040,1081)  → KOMŞU
aradaki hücreler:  K K     🔴 İKİSİ DE KARA ⇒ ızgara boğazı GÖRMÜYOR
Çanakkale       — aradaki hücreler:  K s     🟢 su hücresi VAR, ızgara GÖRÜYOR
```
⇒ **0,7 km'lik boğaz 5,5 km'lik hücreye sığmıyor.** Çanakkale (1,3 km + geniş
güney ağzı) görülüyor, İstanbul Boğazı görülmüyor.

🟢 **VE MOTOR BU KÖRLÜĞÜ ZATEN BİLİYOR** — kendi yorumunda yazılı:
> *"0,05°lik ızgara (≈5,5 km) dar boğazı GÖREMİYOR ve adayı anakaraya bitişik
> sanıyor — Pag %83,9 · Vardø %100"*

Ama oradaki çare (**bileşen kilidi**) bu vakada **çalışamaz** ve sebebi yapısal:

## 🔴 ③ ADA KURALI / BİLEŞEN KİLİDİ BU VAKADA İŞE YARAMAZ
```
maskede 3695 ayrı kara parçası
Ankara (Anadolu) ile İstanbul-Avrupa yakası → AYNI parçada (alan 7944 birim²)
```
⇒ Avrupa ile Anadolu **Kafkasya/Levant üzerinden KARADAN BAĞLI**, yani tek
bileşen. Pag ve Vardø *gerçekten ayrı adalardı* — kilit orada işe yaradı.
**Burada iki yaka aynı bileşen olduğu için kilidin sorabileceği bir soru yok.**
```
ÖLÇTÜĞÜM     iki yaka aynı kara bileşeninde
ÇIKARDIĞIM   var olan çare (bileşen kilidi) bu kusuru KAPATAMAZ —
             genişletilse bile, çünkü dayandığı ayrım burada YOK
```

---

## 🟡 ④ VE ÜÇ MADDE **AYNI KÖKTEN DEĞİL** — zorlamadım, ölçtüm
Koordinatör uyarmıştı: *"tek köke bağlamak cazip ve yanıltıcı olabilir."*
```
H-0002 İstanbul Boğazı   🔴 ızgara GÖRMÜYOR      ⇒ kök: ÇÖZÜNÜRLÜK
H-0007 Saroz körfezi     🟢 ızgara GÖRÜYOR (%43 su hücresi) ⇒ kök BAŞKA
H-0016 Tuna              — NEHİR, ayrı mekanizma (yaslama) ⇒ ÖLÇMEDİM
```
🔴 **H-0007 bu açıklamayla açıklanamıyor** — Saroz ızgarada apaçık su. Sebebi
başka olmalı ve **henüz ölçmedim.** En güçlü adayım, kendi daha önceki
ölçümümden: `uret_petek.py`nin *"tohum→parça düz hattı tamamen karadaysa
Voronoi KALIR"* süzgeci. Çimpe→Saroz-kuzeyi düz hattı **denizi kesiyor**, yani
ızgaraya sorulması gerekir — sorulup sorulmadığı ayrı bir ölçüm.
⚠️ **Bunu ölçmeden çare önermiyorum.**

---

## ⑤ ÇARE ADAYLARI — maliyetleriyle, karar koordinatörün
```
Ⓐ IZGARAYI İNCELT (0,05° → 0,02°)
   İstanbul Boğazı görünür olur.  🔴 MALİYET: hücre 6,4 M → 40 M (6,25 kat)
   KV Dijkstra 1 dk → ~7 dk, bellek ~6 kat. Ve YALNIZ bu boğaz için.
Ⓑ ELLE BOĞAZ KESİĞİ — maskeye değil IZGARAYA
   Bilinen dar boğazların hücrelerini ZORLA su yap (İstanbul · Kerç ·
   Cebelitarık · Bab-el Mendeb…). 🟢 ucuz, 🔴 elle liste = bakım borcu
   ve "listede olmayan boğaz sessizce kalır" riski.
Ⓒ IZGARAYI MASKEDEN TÜRETİRKEN "HÜCRE MERKEZİ" YERİNE "HÜCRE ALANI" SOR
   Bugün hücre MERKEZİ karada mı diye soruluyor. Bunun yerine hücre
   KUTUSU denizle kesişiyorsa su say. 🟢 tek satır, 🟡 kıyıyı içeri çeker —
   bütün kıyı şeridini etkiler, ölçülmeden uygulanamaz.
Ⓓ SU KATMANINI AYRI VER — Dijkstra'ya maskeden bağımsız bir "geçilmez su"
   katmanı (dar boğazlar dâhil) ekle. 🟡 orta maliyet, en temiz ayrım.
```
🟢 **ÖNERİM: önce Ⓒ'yi ÖLÇ** (tek satır, ve kıyı şeridine etkisi sayılabilir).
Ⓒ yetmezse Ⓑ. Ⓐ'yı **önermiyorum**: bir boğaz için bütün koşuyu 6 kat
pahalılaştırır.

---

## ⑥ EMRE'NİN İKİNCİ CÜMLESİ — ölçülmedi, açıkça yazıyorum
> *"körfezi dolanacak isen o zaman DOLANAN TÜM TOPRAKLARI boyaman lazım"*

Bu **ayrı bir kural** ve bugünkü motorda karşılığı olup olmadığını **ölçmedim.**
Kara-kısıtlı Dijkstra *"en ucuz kara yolu"*nu buluyor ama yol üzerindeki
toprağı **boyamıyor** — sahiplik yalnız varış hücresine yazılıyor. ⇒ Emre'nin
istediği şey bugün **yok** görünüyor, ama bu bir **okuma**, ölçüm değil.
