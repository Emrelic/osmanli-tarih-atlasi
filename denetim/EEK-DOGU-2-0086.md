# EEK-DOGU-2-0086 — parti-0086: H-0010 (9 görsel) · H-0011 (5 görsel)

**Oturum:** EEK-DOGU-2-0086 (UMIT) · 9 Ekim 2026 · yöntem `oturumlar/EEK-PROTOKOL.md`
**Temel:** `origin/main` `6865cc87` · ağaç `C:\atlas-eekd2` (kaldırıldı) · `PYTHONHASHSEED=0`
**Gün aralığı (diff'lerin dokunduğu):** 1501-07-01 → 1592-01-01

```
denetim/EEK-DOGU-2-0086.md              bu rapor
denetim/EEK-DOGU-2-0086-KOORD.diff      data/yerlesimler.js — 12 nokta (UYGULANMADI)
denetim/EEK-DOGU-2-0086-KRONO.diff      data/olaylar_ek11.js — 1 madde, Yezd 1504-12-06 (UYGULANMADI)
```
İkisi `git apply --check` temiz (6865cc87), CR 0, `node --check` ✓. **KOORD tek başına inerse çıkış 1 olur** (2s +1, Yezd) — iki diff BİRLİKTE iner.

## ⓪ Okunan · açılan · bulunamayan
- Okundu: `EEK-PROTOKOL.md` · `EEK-DOGU-1008.md` (Cizre ① · Erciş ③ · H-0028 olculemedi — üstüne kuruldu, yeniden ölçülmedi). `DOGUBEYAZIT-0087.md` (Doğubayazıt safevi 1502→) · `DOGU-1533-0087.md` (Iğdır/Beri/Revan kümesi, safevi 1501-07-01→1534) okundu: benim 12 noktamla KESİŞİM YOK (adlar grep'le tarandı).
- 🔴 **Görseller AÇILDI** (beyan): H-0010-1…9 ve H-0011-1…5, gizli depodan yalnız okundu, açık depoya kopyalanmadı. Görsellerde gün yok; ada kümesi 1503→1508 penceresini gösteriyor.
- ⚠️ Mesajdaki iki yeni protokol satırı («tâbilik toprak bağı değildir» · «noktasız komşu eksklavı büyütür») `EEK-PROTOKOL.md`nin HİÇBİR dalında yok (origin/main · makine/umit · bütün remote'lar tarandı) ⇒ mesajdaki ifadeyle uygulandı; ikisi de bu kalemde ÖLÇÜLEREK doğrulandı (Şirvan · Gence-Berde).
- `DOGU-SAFEVI-0086` (local_e583…) oturumuna yatay mesaj gitti (kuyrukta); cevap gelmedi ⇒ çakışma kontrolü YAPILAMADI. Benim dokunduğum 12 nokta + 1 madde aşağıda adıyla.

## ① Görsel → bölge → ölçüm (`girdi.yukle`, 4300 nokta)
| görsel | bölge | veride | komşular |
|---|---|---|---|
| H-0010-1 · H-0011-1? | **Zencan** | akkoyunlu →**1508** | Sultâniye 1501 · Kazvin 1503 Safevî |
| H-0010-2 · H-0011-2? | **Hemedan** | akkoyunlu →**1508** | Nihâvend · Burûcird 1503 Safevî |
| H-0010-3 | **Kasr-ı Şîrîn** | safevi **1503**→ (Safevî CEBİ) | Hânekîn · Kirmanşah akkoyunlu →1508 |
| H-0010-4 · H-0011-3 | **Yezd** | akkoyunlu →**1508** | Erdekân · Nâin · Ebrekûh 1503 |
| H-0010-5 · H-0011-4? | **Şiraz** | akkoyunlu →**1508** | Kâzerûn · Fesâ 1503 |
| H-0010-6 · H-0011-3 | **Kirman** | akkoyunlu →**1510-12-02** | Rafsencân · Bem 1503 |
| H-0010-7 | Mazenderan (Âmül · Sârî · Bârfurûş · Eşref) | mazenderan-marasi →1596 | Safevî çevrili |
| H-0010-8 | Gilan: Lâhîcan · Enzeli / **Reşt** | gilan-kiya →1592 / **Reşt safevi 1501** | |
| H-0010-9 | Şirvan: Salyan · Kuba · Şeki / **Şamahı · Bakü · Kabala · Ereş · Şâbüran · Mahmudâbâd** | sirvansah →1538 / **çekirdek safevi 1501** | |
H-0011'in tekil eşleşmesi ("?") görselden kesin okunamadı; beşi de aynı Akkoyunlu ada kümesi ⇒ H-0011'in cevabı H-0010'un Akkoyunlu satırlarıdır.

## ② Karar — dört ihtimal
| bölge | karar | niçin (TDV) | çare |
|---|---|---|---|
| Hemedan | **② DAHA ÖNCE ALINDI** | `sah-ismail` «Akkoyunlu Murad Bey’i de Hemedan yakınlarında Almakulağı savaşında mağlûp etti (908/1503). Böylece Irâk-ı Arab, Horasan ve Hûzistan hariç Akkoyunlu topraklarının büyük bölümünü ele geçirdi» | 1508 → **1503-01-01** |
| Şiraz | **②** | `siraz` «Karakoyunlu ve Akkoyunlular’ın, 909’da (1503) Safevîler’in eline geçti» | → **1503-01-01** |
| Kirman | **②** | `kirman` «908’de (1502-1503) Şah İsmâil’in zaptıyla başlayan Safevîler dönemi». Eski **1510-12-02 = Merv savaşı günü** (Şeybânî) — Kirman'la ilgisiz kopya | → **1503-01-01** (908'in içinde, yıl) |
| Yezd | **② + ①** | `yezd` «28 Cemâziyelâhir 910 (6 Aralık 1504) … bir aylık bir kuşatmanın ardından şehre girdi». 1503→1504 adası **GERÇEK**: `sah-ismail` «Bayındırlı Murad Bey Yezd’de … bağımsız» · «Yezd’de ortaya çıkan ayaklanma» | → **1504-12-06** (gün) + KRONO maddesi |
| Zencan | **③ KAYNAK SUSUYOR — ÇIKARIM** | `zencan` 1503-08 için SUSUYOR; `sah-ismail` bölge cümlesi (Irâk-ı Arab/Horasan/Hûzistan HARİÇ ⇒ Zencan dahil) | → **1503-01-01**, kayıtta «ÇIKARIMDIR» |
| Mazenderan | **① GERÇEK** | `sah-ismail` 1504 «Mâzenderan, Lâhîcân ve Cürcân hâkimleri şaha gelip itaatlerini bildirdiler» = TÂBİLİK; toprak Mar'aşî'de kalır (künye →1596) | yok · BEYAN |
| Gilan Lâhîcan · Enzeli | **① GERÇEK** | aynı cümle + `gilan` «I. Şah Abbas 1592’de bölgeyi hâkimiyeti altına aldı» | yok · BEYAN |
| **Reşt** | **② (D206 ters uç)** | `gilan` «Safevîler … mahallî beyliklerin arasını bozmaya çalıştılar … 1592’de bölgeyi hâkimiyeti altına aldı». 1501-07-01 = Safevî künyesinin doğum günü, kaynaksız | safevi 1501 → **gilan-kiya →1592-01-01** |
| Şirvan Salyan · Kuba · Şeki | **① GERÇEK** | Şirvanşahlar 1538'e dek sürdü | yok |
| **Şirvan çekirdeği** (Şamahı · Bakü · Kabala · Ereş · Şâbüran · Mahmudâbâd) | **② (D206 ters uç — cep küçük değil, ÇEVRESİ yanlış)** | `sirvansahlar` 1500'de «Bakü ve Şemâhî’yi zaptedip» ama hanedan sürdü: «Safevîler’e vergi ödeyen Şirvanşahlar iç işlerinde serbestti» · Ekim 1538 son. `derbend--dagistan` (kronolojide alıntı) «1538’de Şirvan **doğrudan** Safevî hâkimiyetine girince» ⇒ öncesi tâbilik | safevi 1501 → **sirvansah →1538-01-01** |
| Kasr-ı Şîrîn | **olculemedi** | kaydın `kaynak:` alanı «hemedan» — Hemedan'dan BENZETME; TDV `kasr-i-sirin` 302, `kirmansah` XVI. yy'ı anlatmıyor, `hanekin` 302 | yok |
| Kirmanşah (köprü) | **olculemedi** | `sah-ismail` «Irâk-ı Arab … hariç» Kirmanşah'ı adıyla anmıyor | yok |
⚠️ Şirvan'da 1500 zaptı ile vasal iadesi arasındaki pencere için gün BULUNAMADI — o kısa Safevî dilimi yazılmadı (yıl bilinmiyorsa yıl yazılmaz). Safevî künyesi zaten 1501-07-01'de başlıyor.

## ③ D206 — iki uç ölçüldü (denetle --ayrinti, D7 ada listesi)
| yeni/değişen ada | sebep | hüküm |
|---|---|---|
| **Gence + Berde** (Safevî, 166-189 km) | Şirvan çekirdeği Şirvanşah'a dönünce Karabağ'ı Tebriz gövdesine bağlayan şey Şirvan peteğiymiş — Berde ile Ahar arası NOKTASIZ | ⚠️ «noktasız komşu eksklavı büyütür»ün ölçülmüş örneği; çare ara nokta (Karabağ dağlık), tarih değil |
| **Derbend** (Safevî, Tarki + Ağraham adasına katıldı) | 1509 Safevî garnizonu (TDV `derbend`), artık Şirvanşah toprağının kuzeyinde | ① GERÇEK eksklav — BEYAN. ⚠️ Tarki `altinorda→safevi 1501` kaynaksız görünüyor (Kumuk Şamhallığı), ayrı kalem |
| **Hemedan** (Burûcird + Nihâvend Safevî adasına katıldı, 170 km) | 1503'te Kirmanşah-Luristan Akkoyunlu/Lur kalınca bu Safevî kümesi zaten ADAYDI | önceden var olan sınıf; Hemedan ona katılıyor |
| kapanan | Zencan · Şiraz · Kirman · Yezd(1504 sonrası) Akkoyunlu adaları · Reşt Safevî cebi · Şirvanşah cebi | ✓ |

## ④ `denetle.py` önce / sonra (`PYTHONHASHSEED=0`, origin/main)
**Öngörü önceden yazıldı** (`eek_ongoru.txt`):
| | taban | KOORD | KOORD+KRONO | öngörü | tuttu |
|---|---|---|---|---|---|
| **çıkış** | **2** | **1** ✗ | **2** | 2 | KOORD tek başına ✗ (öngördüğüm «Yezd maddesizse +1» gerçekleşti) |
| D1 · 4c · 4d | 309 · 126 · 324 | aynı | aynı | aynı | ✓ |
| 2s açık (tavan 184) | 184 | **185** — tek kalem Yezd 1504-12-06 | **184** | 185±3 | ✓ |
| 2s kırılma | 1727 | 1728 | 1728 | — | |
| 2sk yalnız-taraf (tavan 2251) | 2251 | 2241 | **2241** | — | iyileşme −10 |
| 2sk YER | 2087 | 2089 | 2090 | — | |
| D7 enklav (🧊 731) | 737 | 741 | **741** | ≤737 | ✗ **çürüdü** — +4 = Gence · Berde · Derbend · Hemedan (③) |

## ⑤ İstenen
1. **KOORD + KRONO aynı commit'te** (KOORD tek başına çıkış 1).
2. §3.4 ③ iyileşme: `BEKLENEN_2S_YALNIZ_TARAF` 2251 → **2241** aynı commit'te.
3. D7 (🧊 donuk taban, çıkış etkilemez) +4 beyanla: Derbend ① gerçek; Gence-Berde ara nokta kalemi; Hemedan mevcut ada.
4. Kasr-ı Şîrîn · Kirmanşah 1503-1508: kaynak ara (Irâk-ı Arab mı Irâk-ı Acem mi). Tarki 1501 Safevî: ayrı `*eek`/hayalet kalemi.
5. `EEK-PROTOKOL.md`ye mesajdaki iki satır yazılmamış — koordinatör kalemi.

---

# ⑥ BİRLEŞTİRME — DOGU-SAFEVI-0086 ile çakışma (9 Ekim 2026, teslimden SONRA)
DOGU-SAFEVI-0086 cevap verdi: Zencan · Hemedan · Yezd · Şiraz · Kirman ve Şirvan çekirdeği **onun diff'inde de var**
(+ Zagros içi, Kars, Ardahan, Sarıkamış, Fergana, Salyan/Kuba, `denetle.py` 2sk tavanı).
🔴 **Benim `EEK-DOGU-2-0086-KOORD.diff` ve `-KRONO.diff`im GEÇERSİZDİR — onunkiyle birlikte UYGULANMAZ** (aynı satırlar).
Yerine: **DOGU-SAFEVI-0086 KOORD + KRONO (temel) + benim FARK diff'lerim.**

| nokta | DOGU-SAFEVI | ben | birleşik hüküm |
|---|---|---|---|
| Hemedan · Şiraz · Kirman · Zencan | 1503-01-01 | 1503-01-01 | **AYNI** — onunki |
| Şirvan çekirdeği (+Salyan, Kuba) | sirvansah →**1538-10-01** (kesinlik ay, TDV «Ekim 1538») | →1538-01-01 | **onunki** (daha kesin). ⚠️ `sirvansah` künyesi t 1538-01-01 ⇒ 9 ay aşım (tolerans 400 g altında, 4c saymaz); künye t de 1538-10-01'e çekilmeli. Şeki 1538-01-01'de kalıyor (onun notu: Şeki ayrı hâkim) |
| **Yezd** | 1503-01-01 — gerekçesi «TDV safeviler aynı seferde "Yezd’e girip" der» | **1504-12-06** | **benimki**: o cümle 1503 Hemedan seferinde DEĞİL, 1504 Fîrûzkûh seferinden sonra («1504’te … Fîrûzkûh’a yürüdü … bu esnada … Muhammed Kere’yi bertaraf ettikten sonra Yezd’e girip»). TDV `yezd` günü veriyor: «6 Aralık 1504». İki TDV maddesi 1504'te birleşiyor |
| **Reşt** | dokunmadı | gilan-kiya →1592 | **benimki** (onda yok) |
| Derbend | «kaynak bulunamadı» | — | veri değişmiyor; kaynak VAR: TDV `derbend--dagistan` (atlasın `olaylar_ek21.js:66` maddesinde alıntılı) «Şah İsmâil 1509’da şehri zaptedip» · «1538’de Şirvan doğrudan Safevî hâkimiyetine girince» |

**FARK diff'leri** (DOGU-SAFEVI uygulanmış hâle göre; `git apply --check` temiz, CR 0, temel origin/main `0291c38d`):
```
denetim/EEK-DOGU-2-0086-FARK-KOORD.diff   yerlesimler.js — Yezd 1503→1504-12-06 · Reşt 1501→1592
denetim/EEK-DOGU-2-0086-FARK-KRONO.diff   olaylar_ek11.js — Yezd 1504-12-06 maddesi (origin/main'e doğrudan da temiz)
```
**Ölçüm** (`PYTHONHASHSEED=0`, origin/main 0291c38d):
| | DOGU-SAFEVI tek | + FARK |
|---|---|---|
| çıkış | 2 | **2** |
| D1 · 4c · 4d | 309 · 126 · 324 | aynı |
| 2s açık (tavan 184) | 184 | **184** (Yezd maddesi kapatıyor) |
| 2sk yalnız-taraf | 2242 (onun yeni tavanı) | **2240** ⇒ tavan 2242 → **2240** aynı commit'te (§3.4 ③) |
| D7 enklav | 736 | 736 |
⚠️ FARK-KOORD, FARK-KRONO'suz inerse 2s 185 > 184 ⇒ çıkış 1. Dördü TEK commit.
