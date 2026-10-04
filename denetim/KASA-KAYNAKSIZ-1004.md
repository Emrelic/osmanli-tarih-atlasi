# KASA-KAYNAKSIZ-1004 — Akçakale sınıfı taraması (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatör YILDIRIM BAYEZIT'in talebi · taban `f731b575`
Okuyucu: `girdi.yukle()` (regex yok) · araç: `denetim/ARAC-KASA-KAYNAKSIZ-1004.py` · ham liste: `denetim/KASA-KAYNAKSIZ-1004.json`
**Düzeltme YAZILMADI. Hüküm koordinatörde.**

## HÜKÜM (ölçtüm)
1. 🔴 **4298 noktanın 4146'sı `s:` taşıyor; bunların 2301'inde kayıt düzeyinde `kaynak:` alanı YOK.** Bu tek kayıt değil, bir **kampanya**.
   - 2301'in 332'sinde `s:` dönemlerinin en az birinin içinde `kaynak` var ⇒ **hiçbir düzeyde kaynağı olmayan: 1969.**
   - 2301'in 200'ünde `neden:` dolu (gerekçe var ama kaynak değil). 139'unda yalnız `isg:` içinde kaynak var.
2. **"DOĞRULANMADI" geçen 19 dosyada** `s:` var/`kaynak:` yok: **873.** Bunun 613'ü çekirdek `yerlesimler.js`'te (799 `s:` taşıyanın 613'ü).
   - Başlığı "DOĞRULANMADI" demeyen dosyalarda da büyük yığınlar var: `asya` 344/344 · `avrupa` 227/237 · `h2_afrika` 155 · `amerika` 131 · `gdasya` 128 · `h2_rusya` 87 · `a78_asya` 66.
3. **Devralma ibaresi** (`kaynak:` içinde komşu/devral/ARAŞTIRILMADI/ankraj/`[K `) taşıyan `s:`li kayıt: **100.**
   - ⚠️ Bu sayı §4'ün İZİN VERDİĞİ **gün** devralmalarını da içeriyor (ör. Niş: "TDV `nis` YIL · gün komşudan"). Gün mü devlet/yıl mı ayrımı **elle okunmadı.**
4. 🔴 **Zincirleme: 22 kayıt** — devraldığı komşunun kendisi ya kaynaksız (16) ya da o da devralmış (6). Jadlā' ← Akçakale bunlardan yalnız biri.
   - Komşusu kaynaksız 16: Bitlis←**Van** · Özalp←**Van** · Ceylanpınar←**Mardin** · Jadlā'←**Akçakale** · Kilise←**Çölemerik** · Trakya sınırı 6 (←Uzunköprü/Orestiada/Havsa/İpsala/Elhova) · Gürcistan sınırı 5 (←Ahıska/Batum/Şavşat/Hulo).
   - Komşusu da devralmış 6: Qaţţīnah←**Ceylanpınar←Mardin** (üç halka) · Távri←Ferecik←Sofulu/Dedeağaç · Norapat/Beri/Kliçatak/Küçükperveli ← Eçmiyadzin/Iğdır/Gümrü/Arpaçay ← **ankraj Revan** (bu dördünün komşusunun dönem içi 3 kaynağı var; zincir ama kaynaklı uca bağlanıyor).
   - 📌 Van, Mardin, Ahıska, Batum, İpsala gibi **çekirdek şehirlerin** ne kayıt ne dönem düzeyinde kaynağı var.

## BULAMADIM / beyan
- 65 devralan kaydın komşu adını regex çözemedi (komşu adı « » ya da "ankraj X (" kalıbında yazılmamış: ör. Soçi/Tuapse/Maykop ← "KOMSU KAYIT … Anapa"). Bunların zinciri **ölçülmedi** ⇒ 22 bir **alt sınır**.
- `kaynak:` alanının 16 Ağustos 2026'da zorunlu olduğu (`girdi.py:150`) biliniyor; çekirdeğin büyük kısmı bu tarihten önce yazıldı. Kaynaksızlık "kaynak yok" değil "**beyan yok**" demek olabilir — kayıtların tarihinin doğru/yanlışlığı ölçülmedi.
- `yer_yama_*.js` dosyaları `yukle()`'ye girmiyor; bir yamanın kaynağı varsa bu sayımda görünmez. Ölçülmedi.
- `girdi.yukle()` UYARI: `yerlesimler_ek29.js:Deyrülkamer` kaydında şemada olmayan `dogrulanmadi` alanı var.
- `oturumlar/tahta.json` bu makinede kilitli/silinemiyor (`unable to unlink … Invalid argument`); yerel çalışma ağacında eski sürüm duruyor, commit'e GİRMEDİ.

## İSTİYORUM
- Hüküm: 2301'in kampanya mı, yoksa önce **zincir 22 + devralan 100**'ün mü ele alınacağı.
- Gün/devlet ayrımı için 100 devralanı elle okumamı istersen ayrı iş olarak ver.

## ① DOSYA DOSYA SAYIM
| dosya | DOĞRULANMADI | nokta | `s:` taşıyan | `s:` var, `kaynak:` YOK | ↳ dönem içi kaynak var | `kaynak:` = bulunamadı | devralma ibaresi |
|---|:-:|--:|--:|--:|--:|--:|--:|
| **yerlesimler.js** | ✔ | 814 | 799 | 613 | 92 | 10 | 30 |
| **yerlesimler_afrika.js** | ✔ | 184 | 171 | 141 | 20 | 1 | 2 |
| **yerlesimler_h2_kuzeyafrika.js** | ✔ | 64 | 64 | 48 | 0 | 0 | 0 |
| **yerlesimler_gamerika.js** | ✔ | 112 | 91 | 26 | 0 | 0 | 0 |
| **yerlesimler_ek29.js** | ✔ | 41 | 41 | 19 | 7 | 8 | 4 |
| **yerlesimler_ek24.js** | ✔ | 16 | 16 | 13 | 0 | 0 | 0 |
| **yerlesimler_ek26.js** | ✔ | 14 | 14 | 4 | 0 | 0 | 9 |
| **yerlesimler_ek27.js** | ✔ | 5 | 5 | 3 | 1 | 0 | 0 |
| **yerlesimler_ek25.js** | ✔ | 11 | 11 | 2 | 0 | 0 | 1 |
| **yerlesimler_ek31.js** | ✔ | 6 | 2 | 2 | 0 | 0 | 0 |
| **yerlesimler_hindistan.js** | ✔ | 2 | 2 | 2 | 0 | 0 | 0 |
| **yerlesimler_epir.js** | ✔ | 10 | 10 | 0 | 0 | 3 | 0 |
| **yerlesimler_okyanusya.js** | ✔ | 118 | 74 | 0 | 0 | 1 | 2 |
| **yerlesimler_sibirya2.js** | ✔ | 64 | 64 | 0 | 0 | 0 | 0 |
| **yerlesimler_kamerika.js** | ✔ | 377 | 372 | 0 | 0 | 372 | 0 |
| **yerlesimler_p0037.js** | ✔ | 15 | 15 | 0 | 0 | 3 | 0 |
| **yerlesimler_a78_amerika.js** | ✔ | 190 | 190 | 0 | 0 | 0 | 0 |
| **yerlesimler_a78_okyanusya.js** | ✔ | 61 | 61 | 0 | 0 | 3 | 3 |
| **yerlesimler_p77_avrupa.js** | ✔ | 2 | 2 | 0 | 0 | 0 | 0 |
| yerlesimler_asya.js |  | 344 | 344 | 344 | 0 | 0 | 0 |
| yerlesimler_avrupa.js |  | 237 | 237 | 227 | 44 | 0 | 0 |
| yerlesimler_h2_afrika.js |  | 180 | 168 | 155 | 27 | 0 | 0 |
| yerlesimler_amerika.js |  | 133 | 131 | 131 | 0 | 0 | 0 |
| yerlesimler_gdasya.js |  | 128 | 128 | 128 | 0 | 0 | 0 |
| yerlesimler_h2_rusya.js |  | 88 | 88 | 87 | 1 | 0 | 0 |
| yerlesimler_a78_asya.js |  | 66 | 66 | 66 | 66 | 0 | 0 |
| yerlesimler_ek8.js |  | 39 | 35 | 31 | 10 | 0 | 0 |
| yerlesimler_emilme.js |  | 32 | 28 | 28 | 0 | 0 | 0 |
| yerlesimler_ek7.js |  | 39 | 39 | 27 | 21 | 0 | 0 |
| yerlesimler_e9353f.js |  | 29 | 23 | 23 | 23 | 0 | 0 |
| yerlesimler_ek13.js |  | 15 | 15 | 15 | 0 | 0 | 0 |
| yerlesimler_ek.js |  | 15 | 15 | 12 | 9 | 0 | 3 |
| yerlesimler_ek9.js |  | 12 | 12 | 12 | 0 | 0 | 0 |
| yerlesimler_ek17.js |  | 11 | 11 | 11 | 2 | 0 | 0 |
| yerlesimler_ek18.js |  | 10 | 10 | 10 | 0 | 0 | 0 |
| yerlesimler_ek3.js |  | 9 | 9 | 9 | 1 | 0 | 0 |
| yerlesimler_ek14.js |  | 9 | 9 | 9 | 0 | 0 | 0 |
| yerlesimler_seyrek.js |  | 11 | 10 | 8 | 1 | 0 | 0 |
| yerlesimler_ortaasya2.js |  | 7 | 7 | 7 | 0 | 0 | 0 |
| yerlesimler_ek15.js |  | 7 | 7 | 7 | 0 | 0 | 0 |
| yerlesimler_ek19.js |  | 6 | 6 | 6 | 0 | 0 | 0 |
| yerlesimler_ek21.js |  | 6 | 6 | 6 | 0 | 0 | 0 |
| yerlesimler_ek2.js |  | 5 | 5 | 5 | 0 | 0 | 0 |
| yerlesimler_ek22.js |  | 5 | 5 | 5 | 0 | 0 | 0 |
| yerlesimler_sibirya.js |  | 9 | 5 | 5 | 0 | 0 | 0 |
| yerlesimler_kirim.js |  | 9 | 9 | 4 | 0 | 0 | 0 |
| yerlesimler_ek20.js |  | 4 | 4 | 4 | 0 | 0 | 0 |
| yerlesimler_ek23.js |  | 4 | 4 | 4 | 0 | 0 | 0 |
| yerlesimler_ek28.js |  | 8 | 8 | 4 | 1 | 0 | 0 |
| yerlesimler_kalite4.js |  | 5 | 5 | 4 | 0 | 0 | 0 |
| yerlesimler_ek11.js |  | 4 | 4 | 4 | 1 | 0 | 0 |
| yerlesimler_0ee15e.js |  | 4 | 4 | 4 | 0 | 0 | 0 |
| yerlesimler_ek_ferhadpasa.js |  | 4 | 4 | 4 | 0 | 0 | 0 |
| yerlesimler_ek6.js |  | 3 | 3 | 3 | 0 | 0 | 0 |
| yerlesimler_ek10.js |  | 3 | 3 | 3 | 0 | 0 | 0 |
| yerlesimler_ek_bozkir.js |  | 4 | 4 | 3 | 3 | 0 | 1 |
| yerlesimler_ek4.js |  | 5 | 2 | 2 | 1 | 0 | 0 |
| yerlesimler_ek16.js |  | 2 | 2 | 2 | 0 | 0 | 0 |
| yerlesimler_ek12.js |  | 4 | 2 | 2 | 0 | 0 | 0 |
| yerlesimler_amerika2.js |  | 2 | 2 | 2 | 0 | 0 | 0 |
| yerlesimler_ek5.js |  | 1 | 1 | 1 | 0 | 0 | 0 |
| yerlesimler_serhat.js |  | 3 | 3 | 1 | 0 | 1 | 0 |
| yerlesimler_kdmacar.js |  | 1 | 1 | 1 | 0 | 0 | 0 |
| yerlesimler_ek_macaristan.js |  | 4 | 4 | 1 | 0 | 0 | 3 |
| yerlesimler_ek_korfez.js |  | 1 | 1 | 1 | 1 | 0 | 0 |
| yerlesimler_sinir_dogu.js |  | 6 | 6 | 0 | 0 | 1 | 2 |
| yerlesimler_sinir_guney.js |  | 12 | 12 | 0 | 0 | 0 | 12 |
| yerlesimler_sinir_kuzey.js |  | 16 | 16 | 0 | 0 | 0 | 16 |
| yerlesimler_ok106.js |  | 11 | 11 | 0 | 0 | 10 | 1 |
| yerlesimler_ok110.js |  | 1 | 1 | 0 | 0 | 0 | 1 |
| yerlesimler_p0043libya.js |  | 1 | 1 | 0 | 0 | 0 | 1 |
| yerlesimler_ukrayna_0916.js |  | 5 | 5 | 0 | 0 | 0 | 2 |
| yerlesimler_anadolu_0914.js |  | 7 | 7 | 0 | 0 | 0 | 1 |
| yerlesimler_nokta_asya_0917.js |  | 18 | 18 | 0 | 0 | 4 | 3 |
| yerlesimler_a78_avrupa.js |  | 34 | 34 | 0 | 0 | 1 | 3 |

_Tabloda olmayan 17 dosyada `s:` taşıyıp `kaynak:`sız kayıt ve devralma ibaresi 0._

### ③ ZİNCİR LİSTESİ

| devralan | dosya | dayandığı komşu | komşunun dosyası | komşunun durumu |
|---|---|---|---|---|
| Bitlis | yerlesimler.js | Van | yerlesimler.js | KAYNAKSIZ |
| Ceylanpınar | yerlesimler_ek25.js | Mardin | yerlesimler.js | KAYNAKSIZ |
| Özalp (Saray) | yerlesimler_ek26.js | Van | yerlesimler.js | KAYNAKSIZ |
| Qaţţīnah | yerlesimler_sinir_guney.js | Ceylanpınar | yerlesimler_ek25.js | DEVRALMIS |
| Jadlā’ | yerlesimler_sinir_guney.js | Akçakale | yerlesimler_ek25.js | KAYNAKSIZ |
| Kilise | yerlesimler_sinir_guney.js | Çölemerik (Hakkâri) | yerlesimler_ek_ferhadpasa.js | KAYNAKSIZ |
| Uluköy (Akçadam) | yerlesimler_sinir_kuzey.js | Uzunköprü | yerlesimler_ek24.js | KAYNAKSIZ |
| Stérna | yerlesimler_sinir_kuzey.js | Orestiada (Kumçiftliği) | yerlesimler_ek24.js | KAYNAKSIZ |
| Távri | yerlesimler_sinir_kuzey.js | Ferecik (Feres) | yerlesimler.js | DEVRALMIS |
| Küfkaynapınarı (Azatlı) | yerlesimler_sinir_kuzey.js | Havsa | yerlesimler_ek24.js | KAYNAKSIZ |
| Karpuzlu (Yenikarpuzlu) | yerlesimler_sinir_kuzey.js | İpsala | yerlesimler.js | KAYNAKSIZ |
| Malak Dervent (Lalkovo) | yerlesimler_sinir_kuzey.js | Elhova (Elhovo) | yerlesimler_ek24.js | KAYNAKSIZ |
| Umur Fakih (Fakia) | yerlesimler_sinir_kuzey.js | Elhova (Elhovo) | yerlesimler_ek24.js | KAYNAKSIZ |
| Zazalo | yerlesimler_sinir_kuzey.js | Ahıska | yerlesimler.js | KAYNAKSIZ |
| Murvaneti | yerlesimler_sinir_kuzey.js | Batum | yerlesimler.js | KAYNAKSIZ |
| Ts’q’altbila | yerlesimler_sinir_kuzey.js | Ahıska | yerlesimler.js | KAYNAKSIZ |
| Saylıca | yerlesimler_sinir_kuzey.js | Şavşat | yerlesimler_ek26.js | KAYNAKSIZ |
| Makhalak’auri | yerlesimler_sinir_kuzey.js | Hulo (Acara) | yerlesimler_ek26.js | KAYNAKSIZ |
| Norapat | yerlesimler_sinir_kuzey.js | Eçmiyadzin | yerlesimler_ek26.js | DEVRALMIS |
| Beri | yerlesimler_sinir_kuzey.js | Iğdır | yerlesimler_ek26.js | DEVRALMIS |
| Kliçatak (Suser) | yerlesimler_sinir_kuzey.js | Gümrü (Aleksandropol) | yerlesimler_ek26.js | DEVRALMIS |
| Küçükperveli | yerlesimler_sinir_kuzey.js | Arpaçay (Akyaka) | yerlesimler_ek26.js | DEVRALMIS |

### ② DEVRALMA İBARESİ TAŞIYAN 100 KAYIT

- **Otranto** (yerlesimler.js) — komşu: — regex çözemedi
- **Bitlis** (yerlesimler.js) — komşu: Van
- **Malatya** (yerlesimler.js) — komşu: — regex çözemedi
- **Drama** (yerlesimler.js) — komşu: — regex çözemedi
- **Dimetoka** (yerlesimler.js) — komşu: — regex çözemedi
- **Niş** (yerlesimler.js) — komşu: — regex çözemedi
- **Soçi (Sâşe)** (yerlesimler.js) — komşu: — regex çözemedi
- **Tuapse** (yerlesimler.js) — komşu: — regex çözemedi
- **Maykop (Çerkezya)** (yerlesimler.js) — komşu: — regex çözemedi
- **Tarki (Tarku)** (yerlesimler.js) — komşu: — regex çözemedi
- **Zagem (Kaheti)** (yerlesimler.js) — komşu: — regex çözemedi
- **Kirmanşah** (yerlesimler.js) — komşu: — regex çözemedi
- **Derne** (yerlesimler.js) — komşu: — regex çözemedi
- **Agadez** (yerlesimler.js) — komşu: — regex çözemedi
- **Ferecik (Feres)** (yerlesimler.js) — komşu: — regex çözemedi
- **Gümülcine** (yerlesimler.js) — komşu: — regex çözemedi
- **Ahar (Karadağ)** (yerlesimler.js) — komşu: — regex çözemedi
- **Sarâb** (yerlesimler.js) — komşu: — regex çözemedi
- **Miyâne** (yerlesimler.js) — komşu: — regex çözemedi
- **Nihâvend** (yerlesimler.js) — komşu: — regex çözemedi
- **Burûcird** (yerlesimler.js) — komşu: — regex çözemedi
- **Salyan** (yerlesimler.js) — komşu: — regex çözemedi
- **Kuba** (yerlesimler.js) — komşu: — regex çözemedi
- **Buraydâ (Kasîm)** (yerlesimler.js) — komşu: — regex çözemedi
- **Uneyze** (yerlesimler.js) — komşu: — regex çözemedi
- **Şakrâ** (yerlesimler.js) — komşu: — regex çözemedi
- **Divriği** (yerlesimler.js) — komşu: — regex çözemedi
- **Arapkir** (yerlesimler.js) — komşu: — regex çözemedi
- **Kragujevac** (yerlesimler.js) — komşu: — regex çözemedi
- **Çaçak** (yerlesimler.js) — komşu: — regex çözemedi
- **Kerene** (yerlesimler_afrika.js) — komşu: — regex çözemedi
- **Cenîne** (yerlesimler_afrika.js) — komşu: — regex çözemedi
- **Eperjes (Prešov)** (yerlesimler_ek.js) — komşu: — regex çözemedi
- **Tokaj** (yerlesimler_ek.js) — komşu: — regex çözemedi
- **Sin (Sinj)** (yerlesimler_ek.js) — komşu: — regex çözemedi
- **Ceylanpınar** (yerlesimler_ek25.js) — komşu: Mardin
- **Arpaçay (Akyaka)** (yerlesimler_ek26.js) — komşu: Revan
- **Digor** (yerlesimler_ek26.js) — komşu: — regex çözemedi
- **Iğdır** (yerlesimler_ek26.js) — komşu: Revan
- **Gümrü (Aleksandropol)** (yerlesimler_ek26.js) — komşu: Revan
- **Eçmiyadzin** (yerlesimler_ek26.js) — komşu: Revan
- **Çaldıran** (yerlesimler_ek26.js) — komşu: — regex çözemedi
- **Özalp (Saray)** (yerlesimler_ek26.js) — komşu: Van
- **Başkale** (yerlesimler_ek26.js) — komşu: — regex çözemedi
- **Yüksekova (Gever)** (yerlesimler_ek26.js) — komşu: — regex çözemedi
- **Jasenovaç (Jasenovac)** (yerlesimler_ek29.js) — komşu: — regex çözemedi
- **Bosna Brod'u (Bosanski Brod)** (yerlesimler_ek29.js) — komşu: — regex çözemedi
- **Ba'lebek (Baalbek)** (yerlesimler_ek29.js) — komşu: — regex çözemedi
- **Sûr (Tyre) — Lübnan** (yerlesimler_ek29.js) — komşu: — regex çözemedi
- **Yedisan bozkırı** (yerlesimler_ek_bozkir.js) — komşu: — regex çözemedi
- **Fülek (Fiľakovo)** (yerlesimler_ek_macaristan.js) — komşu: — regex çözemedi
- **Ungvár (Uzhhorod)** (yerlesimler_ek_macaristan.js) — komşu: — regex çözemedi
- **Munkács (Mukacheve)** (yerlesimler_ek_macaristan.js) — komşu: — regex çözemedi
- **Şeyhrumi (Yücelen)** (yerlesimler_sinir_dogu.js) — komşu: — regex çözemedi
- **Şeyh Salû-yi Ulyâ** (yerlesimler_sinir_dogu.js) — komşu: — regex çözemedi
- **Qaţţīnah** (yerlesimler_sinir_guney.js) — komşu: Ceylanpınar, Rakka
- **Ḩīmū** (yerlesimler_sinir_guney.js) — komşu: Nusaybin, Malikiye (Derik)
- **Jadlā’** (yerlesimler_sinir_guney.js) — komşu: Akçakale, Ayn el-Arab (Kobani)
- **Mercihamis (Yurtbağı)** (yerlesimler_sinir_guney.js) — komşu: Birecik
- **Sincan** (yerlesimler_sinir_guney.js) — komşu: İskenderun
- **Cibri (Güçlü)** (yerlesimler_sinir_guney.js) — komşu: Cizre
- **Babū** (yerlesimler_sinir_guney.js) — komşu: Nusaybin, Malikiye (Derik)
- **Kilise** (yerlesimler_sinir_guney.js) — komşu: Çölemerik (Hakkâri)
- **Gōrabī** (yerlesimler_sinir_guney.js) — komşu: Şemdinli (Şemdinni), Rewândiz
- **Tirwānīsh** (yerlesimler_sinir_guney.js) — komşu: İmâdiye (Amêdî)
- **Balıklı** (yerlesimler_sinir_guney.js) — komşu: Şemdinli (Şemdinni)
- **Cumai (Birlikköy)** (yerlesimler_sinir_guney.js) — komşu: Silopi
- **Uluköy (Akçadam)** (yerlesimler_sinir_kuzey.js) — komşu: Uzunköprü
- **Stérna** (yerlesimler_sinir_kuzey.js) — komşu: Orestiada (Kumçiftliği)
- **Távri** (yerlesimler_sinir_kuzey.js) — komşu: Ferecik (Feres)
- **Küfkaynapınarı (Azatlı)** (yerlesimler_sinir_kuzey.js) — komşu: Havsa
- **Karpuzlu (Yenikarpuzlu)** (yerlesimler_sinir_kuzey.js) — komşu: İpsala
- **Malak Dervent (Lalkovo)** (yerlesimler_sinir_kuzey.js) — komşu: Elhova (Elhovo)
- **Umur Fakih (Fakia)** (yerlesimler_sinir_kuzey.js) — komşu: Elhova (Elhovo)
- **Zazalo** (yerlesimler_sinir_kuzey.js) — komşu: Ahıska
- **Murvaneti** (yerlesimler_sinir_kuzey.js) — komşu: Batum
- **Ts’q’altbila** (yerlesimler_sinir_kuzey.js) — komşu: Ahıska
- **Saylıca** (yerlesimler_sinir_kuzey.js) — komşu: Şavşat
- **Makhalak’auri** (yerlesimler_sinir_kuzey.js) — komşu: Hulo (Acara)
- **Norapat** (yerlesimler_sinir_kuzey.js) — komşu: Eçmiyadzin
- **Beri** (yerlesimler_sinir_kuzey.js) — komşu: Iğdır
- **Kliçatak (Suser)** (yerlesimler_sinir_kuzey.js) — komşu: Gümrü (Aleksandropol)
- **Küçükperveli** (yerlesimler_sinir_kuzey.js) — komşu: Arpaçay (Akyaka)
- **Lubnı** (yerlesimler_ok106.js) — komşu: — regex çözemedi
- **Darende** (yerlesimler_ok110.js) — komşu: — regex çözemedi
- **Oodnadatta** (yerlesimler_okyanusya.js) — komşu: — regex çözemedi
- **Meekatharra** (yerlesimler_okyanusya.js) — komşu: — regex çözemedi
- **Sîva (Siwa)** (yerlesimler_p0043libya.js) — komşu: — regex çözemedi
- **Braslav (Bratslav)** (yerlesimler_ukrayna_0916.js) — komşu: — regex çözemedi
- **Berdiçev (Berdychiv)** (yerlesimler_ukrayna_0916.js) — komşu: — regex çözemedi
- **Bayburt** (yerlesimler_anadolu_0914.js) — komşu: — regex çözemedi
- **Dera Gazi Han** (yerlesimler_nokta_asya_0917.js) — komşu: — regex çözemedi
- **Dera İsmail Han** (yerlesimler_nokta_asya_0917.js) — komşu: — regex çözemedi
- **Chenzhou (Hunan)** (yerlesimler_nokta_asya_0917.js) — komşu: — regex çözemedi
- **Şelon havzası (Soltsı)** (yerlesimler_a78_avrupa.js) — komşu: — regex çözemedi
- **Murska Sobota** (yerlesimler_a78_avrupa.js) — komşu: — regex çözemedi
- **Filorina (Florina)** (yerlesimler_a78_avrupa.js) — komşu: — regex çözemedi
- **Vanimo** (yerlesimler_a78_okyanusya.js) — komşu: — regex çözemedi
- **Garapan (Saipan)** (yerlesimler_a78_okyanusya.js) — komşu: — regex çözemedi
- **Whanganui** (yerlesimler_a78_okyanusya.js) — komşu: — regex çözemedi
