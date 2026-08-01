# KAYNAK DENETİMİ — TDV slug doğrulaması (kanonik liste)

**Oturum:** KAYNAK (saf ölçüm — karar vermez, veri dosyasına yazmaz)
**Tarih:** 2026-07-31 · ikinci tur (iki aşamalı sınama)
**Bu tablo bütün araştırma oturumlarının ÖNDEN bakacağı listedir.**

## Yöntem — iki aşama

```
1. <title> "Arama - TDV İslâm Ansiklopedisi" mi?  → ❌ ÖLÜ SLUG
2. gövdede "article-part" bloğu yok + "bk. XXX"   → 📑 KÜTÜK — XXX'e git
3. madde canlı ama kaynak gösterildiği OLAYLARIN yılı gövdede geçmiyor
                                                  → 🟡 FAKIR? (şüphe listesi, hüküm değil)
```

⚠️ Kütük maddeler `<title>` sınamasını GEÇİYOR (`ahmed-urabi-pasa` başlığı
"AHMED URÂBÎ PAŞA" ama gövdesi yalnız "bk. URÂBÎ PAŞA") — 1. aşama tek başına
yetmez, koordinatörün uyarısı ölçümle doğrulandı.

🟡 FAKIR? bir ŞÜPHE listesidir: yıl-yokluğu ölçümü uzun/çok bölümlü maddelerde
ve hicrî yıl verilen pasajlarda yanlış pozitif verebilir. "Madde olayı
anlatmıyor" hükmü ancak maddeyi okuyan araştırma oturumunundur. Dördüncü sınıf
(yanlış tarihli sağlam slug, `aris` vakası) makineyle yakalanamaz — bu listede
YOKTUR.

## Maliyet (ölçüldü)

```
437 kaynak slug'ı · 985 atıf · 411 sayfa indirildi
süre 444 sn → sayfa başına 1,08 sn
```
Tamamı tarandı; ilk-50 sınırlamasına gerek kalmadı. Gövdeler scratchpad'de
önbellekte; yeniden koşu yalnız yeni slugları çeker.

**Üreten komutlar** (oturum scratchpad'i): `slug_envanter.py` →
`slug_dogrula.py` → `aday_test.py` → `govde_tara.py` → `rapor_uret3.py`

## Özet

| durum | slug | atıf (madde) |
|---|---|---|
| ✅ | 326 | 659 |
| 🟡 fakir? | 61 | 261 |
| ❌ ölü | 38 | 44 |
| 📑 kütük | 12 | 21 |

🔴 **`CLAUDE.md §4`'ün "kaynak: kümesi güvenlidir" cümlesi yanlış çıktı:**
985 atıfın 44'i ölü, 21'ü kütük slug'a gidiyor; 261 atıf fakir-şüpheli.

## ANA TABLO A — sorunlu kaynak slugları (111), kullanım sırasıyla

| slug | durum | kaç maddede | ölüyse doğrusu / kütükse hedef / şüphe notu |
|---|---|---|---|
| `osmanlilar` | 🟡 fakir? | 29 | gövdede geçmeyen madde yılları: 1301,1320,1449,1482,1708,1737,1743,1809,1811 |
| `cezayir` | 🟡 fakir? | 18 | gövdede geçmeyen madde yılları: 1833,1838 |
| `girit` | 🟡 fakir? | 10 | gövdede geçmeyen madde yılları: 1646,1648 |
| `misir` | 🟡 fakir? | 9 | gövdede geçmeyen madde yılları: 1802 |
| `bulgaristan` | 🟡 fakir? | 8 | gövdede geçmeyen madde yılları: 1395 |
| `yunanistan` | 🟡 fakir? | 8 | gövdede geçmeyen madde yılları: 1394 |
| `bagdat` | 🟡 fakir? | 7 | gövdede geçmeyen madde yılları: 1723,1724,1831,1917 |
| `belgrad` | 🟡 fakir? | 7 | gövdede geçmeyen madde yılları: 1427,1717 |
| `sirbistan` | 🟡 fakir? | 7 | gövdede geçmeyen madde yılları: 1455 |
| `venedik` | 🟡 fakir? | 7 | gövdede geçmeyen madde yılları: 1500,1566,1715 |
| `ahmed-iii` | 🟡 fakir? | 6 | gövdede geçmeyen madde yılları: 1723 |
| `eflak` | 🟡 fakir? | 6 | gövdede geçmeyen madde yılları: 1849 |
| `sirvan` | 🟡 fakir? | 6 | gövdede geçmeyen madde yılları: 1606,1723 |
| `atina` | 🟡 fakir? | 5 | gövdede geçmeyen madde yılları: 1688 |
| `bogdan` | 🟡 fakir? | 5 | gövdede geçmeyen madde yılları: 1476 |
| `bosna-hersek` | 🟡 fakir? | 5 | gövdede geçmeyen madde yılları: 1483 |
| `budin` | 🟡 fakir? | 5 | gövdede geçmeyen madde yılları: 1529,1544 |
| `bursa` | 🟡 fakir? | 5 | gövdede geçmeyen madde yılları: 1321,1324 |
| `macaristan` | 🟡 fakir? | 5 | gövdede geçmeyen madde yılları: 1688 |
| `merzifonlu-kara-mustafa-pasa` | 🟡 fakir? | 5 | gövdede geçmeyen madde yılları: 1681 |
| `nahcivan` | 🟡 fakir? | 5 | gövdede geçmeyen madde yılları: 1585,1725,1730 |
| `abdulhamid-ii` | 🟡 fakir? | 4 | gövdede geçmeyen madde yılları: 1898,1905 |
| `kapitulasyon` | 📑 kütük | 4 | bk. AHİDNÂME → `ahidname` |
| `kars` | 🟡 fakir? | 4 | gövdede geçmeyen madde yılları: 1551 |
| `musa-celebi` | 🟡 fakir? | 4 | gövdede geçmeyen madde yılları: 1409 |
| `sakiz-adasi` | 🟡 fakir? | 4 | gövdede geçmeyen madde yılları: 1521 |
| `tebriz` | 🟡 fakir? | 4 | gövdede geçmeyen madde yılları: 1535 |
| `yanya` | 🟡 fakir? | 4 | gövdede geçmeyen madde yılları: 1798,1819 |
| `abdulhamid-i` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1788 |
| `akkoyunlular` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1468 |
| `arnavutluk` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1910 |
| `aydinogullari` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1330 |
| `basra` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1546,1776 |
| `bozcaada` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1913 |
| `egriboz` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1829 |
| `iskodra` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1499,1697 |
| `istanbulun-fethi` | ❌ ölü | 3 | `istanbul` (İSTANBUL) |
| `lahsa` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1550,1670 |
| `londra-antlasmasi` | 📑 kütük | 3 | bk. KAVALALI MEHMED ALİ PAŞA → `kavalali-mehmed-ali-pasa` |
| `nizam-i-cedid` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1792,1793 |
| `taun` | 🟡 fakir? | 3 | gövdede geçmeyen madde yılları: 1600 |
| `akce` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1327 |
| `anabolu` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1822 |
| `anapa` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1810 |
| `balkan-savaslari` | ❌ ölü | 2 | ❓ karşılığı bulunamadı |
| `derbend` | ❌ ölü | 2 | ❓ karşılığı bulunamadı |
| `dimask` | 📑 kütük | 2 | bk. ŞAM → `sam--suriye` (ŞAM) — `sam` ölü, çift-tire ekli slug canlı-test edildi |
| `ferhad-pasa-antlasmasi` | ❌ ölü | 2 | `ferhad` (FERHAD) · `ferhad-pasa` (FERHAD PAŞA) |
| `filibe` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1372,1373 |
| `fizan` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1577 |
| `gumulcine` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1920 |
| `hezarfen-ahmed-celebi` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1632,1638 |
| `hidiv` | 📑 kütük | 2 | bk. MISIR → `misir` |
| `isa-celebi` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1406 |
| `karlofca-antlasmasi` | ❌ ölü | 2 | `karlofca` (KARLOFÇA) |
| `mohac-muharebesi` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1687 |
| `nis` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1689 |
| `serez` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1374 |
| `sikke` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1478,1844 |
| `temesvar` | 📑 kütük | 2 | bk. TIMIŞVAR → `timisvar` |
| `tilimsan` | 🟡 fakir? | 2 | gövdede geçmeyen madde yılları: 1552 |
| `zigetvar` | 📑 kütük | 2 | bk. SİGETVAR → `sigetvar` |
| `ahizade-huseyin-efendi` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1634 |
| `ali-kuscu` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1472 |
| `anadolu-hisari` | ❌ ölü | 1 | `anadolu` (ANADOLU) · `anadoluhisari` (ANADOLUHİSARI) |
| `aynaroz` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1424 |
| `bab-i-ali-baskini` | ❌ ölü | 1 | `bab-i-ali` (BÂB-ı ÂLÎ) · `babiali` (BÂBIÂLİ) · `babiali-baskini` (BÂBIÂLİ BASKINI) |
| `belgrad-antlasmalari` | ❌ ölü | 1 | `belgrad` (BELGRAD) |
| `bolu` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1325 |
| `bukres-antlasmasi` | ❌ ölü | 1 | `bukres` (BÜKREŞ) |
| `buyuk-taarruz` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `camurlu-savasi` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `candarli-halil-hayreddin-pasa` | ❌ ölü | 1 | `candarli` (ÇANDARLI) |
| `cildir-savasi` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `cimpe-kalesi` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `cumhuriyet` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `diu` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1538 |
| `dubrovnik` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1458 |
| `duzmece-mustafa` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `edirne-segedin-antlasmasi` | ❌ ölü | 1 | `edirne` (EDİRNE) |
| `habesistan` | 📑 kütük | 1 | bk. ETİYOPYA → `etiyopya` |
| `hasimiler` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `hilafet` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1517 |
| `izladi-savasi` | ❌ ölü | 1 | `izladi` (İZLÂDİ) |
| `kanunname` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1477 |
| `kasr-i-sirin-antlasmasi` | ❌ ölü | 1 | `kasrisirin-antlasmasi` (KASRIŞÎRİN ANTLAŞMASI) |
| `kirim-hanligi` | ❌ ölü | 1 | `kirim` (KIRIM) |
| `kirim-savasi` | ❌ ölü | 1 | `kirim` (KIRIM) |
| `kose-mihal` | 📑 kütük | 1 | bk. MİHALOĞULLARI → `mihalogullari` |
| `kosmidion` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `kutsal-ittifak` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `maliye-nezareti` | 📑 kütük | 1 | bk. DEFTERDAR → `defterdar` |
| `mesaleler-savasi` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `nasuh-pasa-antlasmasi` | ❌ ölü | 1 | `nasuh-pasa` (NASUH PAŞA) |
| `ozdemiroglu-osman-pasa` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `ozi` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `preveze-deniz-savasi` | ❌ ölü | 1 | `preveze-deniz-muharebesi` (PREVEZE DENİZ MUHAREBESİ) |
| `reji` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `rumeli-hisari` | ❌ ölü | 1 | `rumeli` (RUMELİ) · `rumelihisari` (RUMELİHİSARI) |
| `sakarya-meydan-muharebesi` | ❌ ölü | 1 | `sakarya` (SAKARYA) |
| `salankamen-savasi` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `saltanat` | 📑 kütük | 1 | bk. ANAYASA → `anayasa` |
| `sehremaneti` | 📑 kütük | 1 | bk. BELEDİYE → `belediye` |
| `selimiye-camii-ve-kulliyesi` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `sirpsindigi-savasi` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `sofya` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1385 |
| `tersane-konferansi` | 📑 kütük | 1 | bk. İSTANBUL KONFERANSI → `istanbul-konferansi` |
| `ulubat` | ❌ ölü | 1 | ❓ karşılığı bulunamadı |
| `varna` | 🟡 fakir? | 1 | gövdede geçmeyen madde yılları: 1391 |
| `varna-savasi` | ❌ ölü | 1 | `varna` (VARNA) · `varna-muharebesi` (VARNA MUHAREBESİ) |
| `zenta-savasi` | ❌ ölü | 1 | `zenta` (ZENTA) |

## ANA TABLO B — sağlam sluglar (326)

İki aşamayı da geçti, kaynak gösterilen bütün olay yılları gövdede geçiyor.

<details><summary>aç</summary>

| slug | kaç maddede |
|---|---|
| `sudan` | 11 |
| `kavalali-mehmed-ali-pasa` | 10 |
| `selim-i` | 10 |
| `mora` | 9 |
| `birinci-dunya-savasi` | 8 |
| `orhan` | 8 |
| `yemen` | 8 |
| `ankara-savasi` | 7 |
| `barbaros-hayreddin-pasa` | 7 |
| `istanbul` | 7 |
| `milli-mucadele` | 7 |
| `osman-i` | 7 |
| `kibris` | 6 |
| `revan` | 6 |
| `rodos` | 6 |
| `selim-iii` | 6 |
| `trablusgarp-savasi` | 6 |
| `vehhabilik` | 6 |
| `bayezid-i` | 5 |
| `bayezid-ii` | 5 |
| `cem-sultan` | 5 |
| `doksanuc-harbi` | 5 |
| `edirne` | 5 |
| `gedik-ahmed-pasa` | 5 |
| `gelibolu` | 5 |
| `murad-iv` | 5 |
| `safeviler` | 5 |
| `suleyman-i` | 5 |
| `abdulaziz` | 4 |
| `akka` | 4 |
| `duyun-i-umumiyye` | 4 |
| `estergon` | 4 |
| `hotin` | 4 |
| `karamanogullari` | 4 |
| `kirim` | 4 |
| `meclis-i-mebusan` | 4 |
| `mehmed-i` | 4 |
| `mehmed-ii` | 4 |
| `mustafa-ii` | 4 |
| `osman-ii` | 4 |
| `suleyman-celebi-emir` | 4 |
| `akkirman` | 3 |
| `azak` | 3 |
| `egri` | 3 |
| `habes-eyaleti` | 3 |
| `ibrahim-muteferrika` | 3 |
| `ibrahim-pasa-kavalali` | 3 |
| `izmir` | 3 |
| `kanije` | 3 |
| `koprulu-mehmed-pasa` | 3 |
| `lubnan` | 3 |
| `mehmed-iii` | 3 |
| `modon` | 3 |
| `murad-i` | 3 |
| `mustafa-i` | 3 |
| `mustafa-iii` | 3 |
| `piri-reis` | 3 |
| `ridaniye-savasi` | 3 |
| `saruhanogullari` | 3 |
| `selanik` | 3 |
| `selman-reis` | 3 |
| `semendire` | 3 |
| `suriye` | 3 |
| `tanzimat` | 3 |
| `timur` | 3 |
| `tomanbay` | 3 |
| `trablusgarp` | 3 |
| `yirmisekiz-celebi-mehmed-efendi` | 3 |
| `aden` | 2 |
| `alemdar-mustafa-pasa` | 2 |
| `ayastefanos-antlasmasi` | 2 |
| `bagdat-demiryolu` | 2 |
| `balkan-savasi` | 2 |
| `balyabadra` | 2 |
| `banaluka` | 2 |
| `bayezid-sehzade` | 2 |
| `bizans` | 2 |
| `canbirdi-gazali` | 2 |
| `damad-ibrahim-pasa-nevsehirli` | 2 |
| `darfur` | 2 |
| `darulfunun` | 2 |
| `edirne-antlasmasi` | 2 |
| `edirne-vakasi` | 2 |
| `fatih-camii-ve-kulliyesi` | 2 |
| `feyzullah-efendi-seyyid` | 2 |
| `germiyanogullari` | 2 |
| `hacova-meydan-savasi` | 2 |
| `halep` | 2 |
| `hareket-ordusu` | 2 |
| `hicaz` | 2 |
| `hicaz-demiryolu` | 2 |
| `humbaraci` | 2 |
| `hunkar-iskelesi-antlasmasi` | 2 |
| `hurrem-sultan` | 2 |
| `huseyniler` | 2 |
| `ibrahim-pasa-makbul` | 2 |
| `ibrail` | 2 |
| `inebahti` | 2 |
| `irakeyn-seferi` | 2 |
| `iskender-bey` | 2 |
| `iznik` | 2 |
| `karakoyunlular` | 2 |
| `karayazici-abdulhalim` | 2 |
| `kilic-ali-pasa` | 2 |
| `korfu` | 2 |
| `koron` | 2 |
| `kosem-sultan` | 2 |
| `kosova-savaslari` | 2 |
| `kucuk-kaynarca-antlasmasi` | 2 |
| `kudus` | 2 |
| `kutahya` | 2 |
| `kuyucu-murad-pasa` | 2 |
| `mahmud-i--osmanli` | 2 |
| `mecelle-i-ahkam-i-adliyye` | 2 |
| `medine` | 2 |
| `mehmed-efendi-vani` | 2 |
| `mehmed-iv` | 2 |
| `mehmed-vi` | 2 |
| `mekke` | 2 |
| `midhat-pasa` | 2 |
| `muhendishane-i-bahri-i-humayun` | 2 |
| `murad-iii` | 2 |
| `navarin` | 2 |
| `pecuy` | 2 |
| `plevne` | 2 |
| `prut-antlasmasi` | 2 |
| `ragib-pasa` | 2 |
| `resid-mehmed-pasa` | 2 |
| `rustem-pasa` | 2 |
| `sahkulu-baba-tekeli` | 2 |
| `sehrizor` | 2 |
| `sevr-antlasmasi` | 2 |
| `sinop` | 2 |
| `sivas` | 2 |
| `sokullu-mehmed-pasa` | 2 |
| `suleymaniye-camii-ve-kulliyesi` | 2 |
| `sultan-ahmed-camii-ve-kulliyesi` | 2 |
| `sura-yi-devlet` | 2 |
| `suudiler` | 2 |
| `suveys` | 2 |
| `takiyyuddin-er-rasid` | 2 |
| `tekeogullari` | 2 |
| `topkapi-sarayi` | 2 |
| `trablussam` | 2 |
| `tunus` | 2 |
| `urabi-pasa` | 2 |
| `uyvar` | 2 |
| `varad` | 2 |
| `vasvar-antlasmasi` | 2 |
| `vehran` | 2 |
| `yanikkale` | 2 |
| `abdulkadir-el-cezairi` | 1 |
| `abdulkadir-seyhi-efendi` | 1 |
| `abdulmecid` | 1 |
| `ace` | 1 |
| `adana` | 1 |
| `agakapisi` | 1 |
| `ahiska` | 1 |
| `ahmed-i` | 1 |
| `ahmed-ii` | 1 |
| `ahmed-pasa-hain` | 1 |
| `alaiye-beyligi` | 1 |
| `ali-pasa-mehmed-emin` | 1 |
| `altin-orda-hanligi` | 1 |
| `amasya-antlasmasi` | 1 |
| `ankara` | 1 |
| `arazi-kanunnamesi` | 1 |
| `artuklular` | 1 |
| `asakir-i-mansure-i-muhammediyye` | 1 |
| `avlonya` | 1 |
| `avusturya` | 1 |
| `ayamavra` | 1 |
| `baltalimani-muahedesi` | 1 |
| `bedreddin-simavi` | 1 |
| `bektasilik` | 1 |
| `berlin-antlasmasi` | 1 |
| `beyrut` | 1 |
| `bilecik` | 1 |
| `bucas-antlasmasi` | 1 |
| `bucuktepe-vakasi` | 1 |
| `caldiran-savasi` | 1 |
| `canakkale-muharebeleri` | 1 |
| `candarogullari` | 1 |
| `celali-isyanlari` | 1 |
| `cerbe` | 1 |
| `cesme-vakasi` | 1 |
| `cezzar-ahmed-pasa` | 1 |
| `cinar-vakasi` | 1 |
| `ciragan-vakasi` | 1 |
| `cirmen` | 1 |
| `cuneyd-bey` | 1 |
| `dimetoka` | 1 |
| `diriye` | 1 |
| `diyarbakir` | 1 |
| `dolmabahce-sarayi` | 1 |
| `drac` | 1 |
| `dulkadirogullari` | 1 |
| `ebussuud-efendi` | 1 |
| `elci` | 1 |
| `encumen-i-danis` | 1 |
| `eretnaogullari` | 1 |
| `ertugrul-gazi` | 1 |
| `erzurum-kongresi` | 1 |
| `esham` | 1 |
| `eskinci-ocagi` | 1 |
| `evliya-celebi` | 1 |
| `fatma-sultan-camii` | 1 |
| `fes` | 1 |
| `fetret-devri` | 1 |
| `func` | 1 |
| `galatasaray-mekteb-i-sultanisi` | 1 |
| `hamidogullari` | 1 |
| `haremeyn` | 1 |
| `hariciye-nezareti` | 1 |
| `hayir-bey` | 1 |
| `hollanda` | 1 |
| `huseyin-efendi-cinci-hoca` | 1 |
| `husrev-pasa-koca` | 1 |
| `ilhanlilar` | 1 |
| `inebahti-deniz-savasi` | 1 |
| `ingiltere` | 1 |
| `iskenderiye` | 1 |
| `islahat-fermani` | 1 |
| `ittihat-ve-terakki-cemiyeti` | 1 |
| `izmit` | 1 |
| `kabakci-isyani` | 1 |
| `kadi-burhaneddin` | 1 |
| `kadizadeliler` | 1 |
| `kahire` | 1 |
| `kamanice` | 1 |
| `kanun-i-esasi` | 1 |
| `kara-ahmed-pasa` | 1 |
| `karadag` | 1 |
| `katar` | 1 |
| `katib-celebi` | 1 |
| `kemah` | 1 |
| `kemankes-mustafa-pasa` | 1 |
| `kerbela` | 1 |
| `kili` | 1 |
| `konya` | 1 |
| `kopruluzade-fazil-ahmed-pasa` | 1 |
| `kopruluzade-fazil-mustafa-pasa` | 1 |
| `kuleli-vakasi` | 1 |
| `kutulamare` | 1 |
| `kuveyt` | 1 |
| `limni` | 1 |
| `lozan-antlasmasi` | 1 |
| `mahmud-ii--osmanli` | 1 |
| `mahmud-sevket-pasa` | 1 |
| `makedonya` | 1 |
| `malikane` | 1 |
| `malta` | 1 |
| `mardin` | 1 |
| `matbaa` | 1 |
| `meclis-i-vala-yi-ahkam-i-adliyye` | 1 |
| `memluk` | 1 |
| `mercidabik-muharebesi` | 1 |
| `mesrutiyet` | 1 |
| `midilli` | 1 |
| `misak-i-milli` | 1 |
| `mondros-mutarekesi` | 1 |
| `mudanya-mutarekesi` | 1 |
| `muhammed-ahmed-el-mehdi` | 1 |
| `muhendishane-i-berri-i-humayun` | 1 |
| `murad-v` | 1 |
| `mustafa-iv` | 1 |
| `nadir-sah--iran` | 1 |
| `namik-kemal` | 1 |
| `nigbolu` | 1 |
| `nigbolu-savasi` | 1 |
| `nurbanu-sultan` | 1 |
| `ohri` | 1 |
| `ordu--sehir` | 1 |
| `osman-iii` | 1 |
| `otlukbeli-savasi` | 1 |
| `otuzbir-mart-vakasi` | 1 |
| `paris-antlasmasi` | 1 |
| `pasarofca-antlasmasi` | 1 |
| `patrona-isyani` | 1 |
| `pazvandoglu-osman` | 1 |
| `pencik` | 1 |
| `ramazanogullari` | 1 |
| `redif--ordu` | 1 |
| `riyad` | 1 |
| `romanya` | 1 |
| `ruscuk` | 1 |
| `sadabad` | 1 |
| `safiye-sultan` | 1 |
| `sahn-i-seman` | 1 |
| `samsun` | 1 |
| `sarikamis-harekati` | 1 |
| `sekban-i-cedid` | 1 |
| `selim-ii` | 1 |
| `sened-i-ittifak` | 1 |
| `seydi-ali-reis` | 1 |
| `sirket-i-hayriyye` | 1 |
| `sivas-kongresi` | 1 |
| `suleyman-pasa` | 1 |
| `taceddinogullari` | 1 |
| `takvim-i-vekayi` | 1 |
| `tarhuncu-ahmed-pasa` | 1 |
| `tasvir-i-efkar` | 1 |
| `tehcir` | 1 |
| `tercuman-i-ahval` | 1 |
| `tersane-i-amire` | 1 |
| `tesalya` | 1 |
| `timar` | 1 |
| `timisvar` | 1 |
| `tokoli-imre` | 1 |
| `trabzon` | 1 |
| `tulumbaci` | 1 |
| `turgut-reis` | 1 |
| `turkiye-buyuk-millet-meclisi` | 1 |
| `ulucami` | 1 |
| `uskup` | 1 |
| `vaka-i-hayriyye` | 1 |
| `van` | 1 |
| `varadin` | 1 |
| `vidin` | 1 |
| `viyana` | 1 |
| `yafa` | 1 |
| `yas-antlasmasi` | 1 |
| `yeni-osmanlilar-cemiyeti` | 1 |
| `yergogu` | 1 |
| `zistovi-antlasmasi` | 1 |
| `zitvatorok-antlasmasi` | 1 |

</details>

## EK — görev dosyalarında geçen, kaynak setinde olmayan ölü sluglar

Çoğu ilgili dosyada zaten 'ölü' diye kayıtlıdır; bu teyit + aday listesidir.

| slug | nerede | canlı-test edilmiş adaylar |
|---|---|---|
| `93-harbi` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `abaza` | OTURUM-4-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `afgan-durrani` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `akkoyunlu` | OTURUM-13-ANADOLU.md,OTURUM-13-SELCUKLU.md | ❓ karşılığı bulunamadı |
| `arabi-pasa` | koordinator-listesi-2 | `urabi-pasa` (URÂBÎ PAŞA); `ahmed-urabi-pasa` da KÜTÜK → aynı hedef |
| `arama` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `asir` | koordinator-listesi | ❓ karşılığı bulunamadı |
| `baycu` | OTURUM-13-SELCUKLU.md | ❓ karşılığı bulunamadı |
| `belgrad-antlasmasi` | OTURUM-11-BALKAN.md | `belgrad` (BELGRAD) |
| `belgrad-antlasmasi--1739` | OTURUM-11-BALKAN.md | `belgrad` (BELGRAD) |
| `bender` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `bengal-nevabligi` | OTURUM-13-ILERLEME.md | `bengal` (BENGAL) |
| `berar` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `beylikler` | OTURUM-13-SELCUKLU.md,OTURUM-14-BEYLIKLER.md | ❓ karşılığı bulunamadı |
| `bidar` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `burucird` | koordinator-listesi | ❓ karşılığı bulunamadı |
| `buzau` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `canik` | koordinator-listesi | ❓ karşılığı bulunamadı |
| `catalca` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `cavnpur-sultanligi` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `cc714ac` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `cetinje` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `cildir` | koordinator-listesi | ❓ karşılığı bulunamadı |
| `cimri` | OTURUM-14-BEYLIKLER.md | ❓ karşılığı bulunamadı |
| `dogu-rumeli` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `domeke` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `domeke-meydan-muharebesi` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `edhem-pasa` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `elbistan-savasi` | OTURUM-13-SELCUKLU.md | `elbistan` (ELBİSTAN) |
| `enzeli` | OTURUM-4-ILERLEME.md | ❓ karşılığı bulunamadı |
| `eretna` | OTURUM-13-SELCUKLU.md,OTURUM-14-BEYLIKLER.md | ❓ karşılığı bulunamadı |
| `ergani` | OTURUM-13-ANADOLU.md,OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `ermenek` | OTURUM-14-BEYLIKLER.md | ❓ karşılığı bulunamadı |
| `ethem-pasa` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `fethulislam` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `filipin-racaliklari` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `gucerat-sultanligi` | OTURUM-13-ILERLEME.md | `gucerat` (GUCERÂT) |
| `gulistan-antlasmasi` | OTURUM-4-KRONOLOJI.md | `gulistan` (GÜLİSTÂN) |
| `haciemirogullari` | OTURUM-14-BEYLIKLER.md | ❓ karşılığı bulunamadı |
| `haydarabad-nizam` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `hemedan-antlasmasi` | OTURUM-4-DUZELTMELER.md | `hemedan` (HEMEDAN) |
| `href` | OTURUM-4-ILERLEME.md | ❓ karşılığı bulunamadı |
| `ibrahim-pasa` | OTURUM-4-KRONOLOJI.md | ❓ karşılığı bulunamadı |
| `ilhanli` | OTURUM-13-ANADOLU.md,OTURUM-13-ILERLEME.md,OTURUM-13-SELCUKLU.md | ❓ karşılığı bulunamadı |
| `imereti` | OTURUM-4-ILERLEME.md,OTURUM-4-KRONOLOJI.md | ❓ karşılığı bulunamadı |
| `ismail` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `ismail-kalesi` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `istanbul-antlasmasi` | OTURUM-11-BALKAN.md | `istanbul` (İSTANBUL) |
| `izmail` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `kalafat` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `kalas` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `kalikut` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `kanem-bornu` | devletler.js | ❓ karşılığı bulunamadı |
| `karkiya` | OTURUM-4-ILERLEME.md,OTURUM-4-KIMLIK-DOSYASI.md | ❓ karşılığı bulunamadı |
| `kartal` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `kefalonya` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `keys` | OTURUM-4-ILERLEME.md | ❓ karşılığı bulunamadı |
| `kis` | OTURUM-4-ILERLEME.md | ❓ karşılığı bulunamadı |
| `kladovo` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `krayova` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `kutahya-antlasmasi` | koordinator-listesi-2 | `kutahya` (KÜTAHYA şehir maddesi — antlaşma hükümleri orada mı, elle bakılmalı) |
| `laos` | OTURUM-13-KIMLIK.md | ❓ karşılığı bulunamadı |
| `le-hanedani` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `madurai-sultanligi` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `malva-sultanligi` | OTURUM-13-ILERLEME.md | `malva` (MÂLVÂ) |
| `mehdiyye` | koordinator-listesi-2 | `mehdilik` (MEHDÎLİK, kavram) · `muhammed-ahmed-el-mehdi` (Sudan Mehdîsi) — ikisi de canlı, hangisi kastedildiyse |
| `mehmed-ali-pasa` | koordinator-listesi-2 | `kavalali-mehmed-ali-pasa` (KAVALALI MEHMED ALİ PAŞA) |
| `mengucekliler` | OTURUM-14-BEYLIKLER.md | ❓ karşılığı bulunamadı |
| `mentesogullari` | OTURUM-13-SELCUKLU.md,OTURUM-14-BEYLIKLER.md | ❓ karşılığı bulunamadı |
| `merend` | OTURUM-4-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `mogol-imparatorlugu` | OTURUM-13-SELCUKLU.md | ❓ karşılığı bulunamadı |
| `mogulistan` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `multan-langah` | OTURUM-13-ILERLEME.md | `multan` (MÜLTAN) |
| `musasa` | OTURUM-4-ILERLEME.md | ❓ karşılığı bulunamadı |
| `nadir-sah` | OTURUM-4-DUZELTMELER.md | `nadir` (NÂDİR) |
| `nguyen-beyligi` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `nihavend` | OTURUM-4-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `nisabur` | OTURUM-4-ILERLEME.md | ❓ karşılığı bulunamadı |
| `orhei` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `osmanli-yunan-savasi` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `ozdemiroglu` | OTURUM-4-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `parga` | koordinator-listesi | ❓ karşılığı bulunamadı |
| `pitesti` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `preveze` | koordinator-listesi | ❓ karşılığı bulunamadı |
| `sabac` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `safevi` | OTURUM-13-ANADOLU.md | ❓ karşılığı bulunamadı |
| `sahib-atoogullari` | OTURUM-14-BEYLIKLER.md | ❓ karşılığı bulunamadı |
| `sahibata` | OTURUM-13-SELCUKLU.md | ❓ karşılığı bulunamadı |
| `salih-reis` | koordinator-listesi | `salih` (SÂLİH) |
| `samahi` | koordinator-listesi | ❓ karşılığı bulunamadı |
| `samudra-pasai` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `sarki-rumeli` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `segment` | OTURUM-13-OLCUM-ARACLARI.md | ❓ karşılığı bulunamadı |
| `selcuklu` | OTURUM-13-ILERLEME.md,OTURUM-13-SELCUKLU.md | ❓ karşılığı bulunamadı |
| `selmas` | OTURUM-4-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `sevakin` | koordinator-listesi-2 | ❓ karşılığı bulunamadı (`savakin` de ölü) |
| `sipka` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `sirbistan-prensligi` | OTURUM-11-BALKAN.md | `sirbistan` (SIRBİSTAN) |
| `sirvansah` | OTURUM-4-ILERLEME.md | ❓ karşılığı bulunamadı |
| `siva` | OTURUM-14-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `soroka` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `sultaniye` | OTURUM-4-ILERLEME.md | ❓ karşılığı bulunamadı |
| `sur-hanedani` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `surakarta` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `suud` | OTURUM-4-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `ternate-sultanligi` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `timurtas` | OTURUM-13-SELCUKLU.md | ❓ karşılığı bulunamadı |
| `tirgoviste` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `tomarova` | OTURUM-11-BALKAN.md | ❓ karşılığı bulunamadı |
| `tuggurt` | koordinator-listesi | ❓ karşılığı bulunamadı |
| `turkmencay-antlasmasi` | OTURUM-4-ILERLEME.md,OTURUM-4-KRONOLOJI.md | ❓ karşılığı bulunamadı |
| `ulgun` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `vaha` | OTURUM-14-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `vietnam` | OTURUM-13-KIMLIK.md | ❓ karşılığı bulunamadı |
| `yarkent-hanligi` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `yogyakarta` | OTURUM-13-ILERLEME.md | ❓ karşılığı bulunamadı |
| `yunan-savasi` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `zabljak` | koordinatör listesi | ❓ karşılığı bulunamadı |
| `zendiler` | OTURUM-4-DUZELTMELER.md | ❓ karşılığı bulunamadı |
| `zeta` | koordinatör listesi | ❓ karşılığı bulunamadı |

## EK — bilinen kütükler (kaynak seti dışında, elle/bugün doğrulanan)

| slug | başlığı | gövdesi | hedef |
|---|---|---|---|
| `alaiye` | ALÂİYE | bk. ALANYA | beylik için asıl madde: `alaiye-beyligi` (canlı) |
| `ahmed-urabi-pasa` | AHMED URÂBÎ PAŞA | bk. URÂBÎ PAŞA | `urabi-pasa` (canlı) |
| `teselya` | TESELYA | bk. TESALYA | asıl madde: `tesalya` (canlı, 1897 savaşı + Dömeke orada) |
| `abudabi` | ABUDABİ | bk. EBÛZABÎ | `ebuzabi` denenmeli (koordinatör vakası, kütük teyit) |

## Koordinatör listeleri — teyit durumu

Sabitlenen 10 bilinen ölü: **10/10 ölü teyit** (`belgrad-antlasmasi`,
`sarki-rumeli`, `dogu-rumeli`, `93-harbi`, `ergani`, `cimri`, `ermenek`,
`siva`, `tuggurt`, `domeke`); `doksanuc-harbi` canlı teyit.
Bugün bulunan 5 ölü: **5/5 ölü teyit** (`sevakin`, `mehdiyye`, `arabi-pasa`,
`kutahya-antlasmasi`, `mehmed-ali-pasa`) — adayları Ana Tablo A biçiminde
yukarıdaki EK ölü tablosunda.

⚠️ Eş-ad tuzağı: `ordu` canlı ve başlığı "ORDU" ama ASKERÎ ordu maddesi; şehir
`ordu--sehir`. Başlık karşılaştırması eş adlı kavramları AYIRAMAZ.

## 3. AŞAMA — tarih uyuşması ölçümü (`t:` ↔ madde metni) — biçim 3

**Koordinatörün biçim taksonomisiyle eşleme:** biçim 1 (iddia maddede yok) =
4. AŞAMA KELIME-YOK · biçim 2 (künye ölü/kütük) = Tablo A · **biçim 3 (rakam
kaymış) = bu bölüm.**

**Yöntem:** kayıt ayrıştırıcı `olaylar*.js`'ten her kaynaklı maddeyi çıkardı
(satır bazlı sayım 985 atıf, kayıt bazlısı 994). Gün hassasiyetli her `t:` için
önce "G Ay YYYY", bulunamazsa yıl bitişik olmadan "G Ay" biçimi kaynak
gövdesinde arandı (İnebahtı dersi: TDV "26 Ağustos'ta teslim ettiler" yazar,
yılı bitiştirmez). Bizim tarihle metindeki tarihler arasındaki **fark gün
olarak hesaplandı**. `YYYY-01-01` yer tutucu kuralı gereği atlandı.

| kova | adet | anlamı |
|---|---|---|
| ✅ GUN-TEYIT | 249 | tarihimiz metinde yıl bitişik AYNEN geçiyor |
| ✅ GUN-TEYIT-YILSIZ | 69 | gün+ay metinde geçiyor (yıl bitişik değil) — pratik teyit |
| 🔴 FARKLI-TARIH | 115 | metin o yıl için başka tam tarih veriyor, bizimkini vermiyor |
| 🔴 FARKLI-TARIH-YILSIZ | 232 | metin başka gün+ay ifadeleri veriyor (yıl bitişik değil) |
| 🟠 AY-DUZEYI | 3 | metin yalnız ay+yıl veriyor |
| ⚪ GUN-VERILMEMIS | 31 | yıl geçiyor ama hiçbir tam tarih yok — zayıf |
| ⚪ YIL-YOK | 79 | yılımız metinde hiç yok (fakir şüphesiyle örtüşür) |
| — ATLANDI | 146 | yıl/ay hassasiyeti ya da `-01-01` yer tutucu |
| — KAYNAK-SORUNLU / GOVDE-YOK | 70 | kaynağı zaten ölü/kütük ya da gövde önbelleği yok |

⚠️ ŞÜPHE listesidir, hüküm değil: metindeki yakın tarih başka bir olaya ait
olabilir; hicrî biçimler taranmıyor. Karar araştırma oturumunun; veriye BEN
dokunmadım.

### 🔴 BİÇİM 3 — fark ≤ 31 gün olan şüpheliler (189 madde, farka göre sıralı)

Mekke vakası 31 gündü, İnebahtı 2 — bu aralık "aynı olayın kaymış rakamı"
sınıfının yaşam alanı.

| fark (gün) | dosya | bizim `t:` | kaynak | madde başlığı | metindeki tarihler |
|---|---|---|---|---|---|
| **1** | olaylar_ek3.js | 1403-03-09 | `bayezid-i` | Yıldırım Bayezid'in esarette ölümü | 8 Mart |
| **1** | olaylar_ek.js | 1500-08-09 | `modon` | Modon ve Koron'un fethi | 10 Ağustos |
| **1** | olaylar_ek5.js | 1517-01-27 | `ridaniye-savasi` | Tomanbay'ın Kahire baskını ve üç gün süren sokak savaşları | 2 Ocak; 20 Ocak; 22 Ocak; 28 Ocak; 13 Nisan |
| **1** | olaylar.js | 1522-12-21 | `rodos` | Rodos'un fethi | 16 Haziran; 20 Aralık |
| **1** | olaylar_ek5.js | 1543-07-21 | `pecuy` | Valpo, Şikloş ve Peçuy'un fethi | 20 Temmuz |
| **1** | olaylar_ek5.js | 1548-07-27 | `tebriz` | İkinci İran Seferi ve Tebriz'in yeniden alınması | 25 Temmuz; 6 Eylül; 6 Ağustos; 25 Eylül; 21 Ekim; 28 Temmuz |
| **1** | olaylar_ek5.js | 1548-08-25 | `van` | Van'ın fethi ve doğu sınırının sabitlenmesi | 15 Ağustos; 24 Ağustos |
| **1** | olaylar_ek2.js | 1557-10-16 | `suleymaniye-camii-ve-kulliyesi` | Süleymaniye Külliyesi açıldı | 15 Ekim; 16 Ağustos |
| **1** | olaylar_ek.js | 1574-08-25 | `tunus` | Tunus'un kesin fethi | 12 Eylül; 24 Ağustos |
| **1** | olaylar_ek7.js | 1589-06-01 | `abdulkadir-seyhi-efendi` | Tağşiş edilmiş akçe yüzünden Beylerbeyi Vakası patlak verdi | 2 Haziran |
| **1** | olaylar_ek7.js | 1622-05-21 | `mustafa-i` | I. Mustafa'nın ikinci kez tahta çıkarılması | 19 Mayıs; 20 Mayıs |
| **1** | olaylar_ek5.js | 1651-09-02 | `kosem-sultan` | Büyük Vâlide Kösem Sultan'ın öldürülmesi | 3 Eylül |
| **1** | olaylar_ek5.js | 1659-02-16 | `koprulu-mehmed-pasa` | Abaza Hasan Paşa isyanının bastırılması | 17 Şubat |
| **1** | olaylar_ek3.js | 1687-11-08 | `mehmed-iv` | IV. Mehmed'in hal'i ve II. Süleyman'ın cülûsu | 7 Kasım |
| **1** | olaylar_ek7.js | 1807-05-30 | `mustafa-iv` | IV. Mustafa tahta çıktı | 29 Mayıs; 31 Mayıs; 24 Ağustos |
| **1** | olaylar_ek7.js | 1808-07-29 | `mahmud-ii--osmanli` | II. Mahmud tahta çıktı | 28 Temmuz |
| **1** | olaylar_ek5.js | 1869-11-17 | `suveys` | Süveyş Kanalı'nın açılışı: Mısır üzerinden Hint yolunun kısa | 16 Kasım |
| **1** | olaylar.js | 1908-07-23 | `mesrutiyet` | II. Meşrutiyet'in ilanı | 24 Temmuz; 17 Aralık |
| **2** | olaylar_ek.js | 1373-05-01 | `bizans` | Bizans'ın Osmanlı vasallığına girişi | 11 Mayıs; 22 Temmuz; 12 Ağustos; 26 Ağustos; 29 Nisan; 19 Haziran |
| **2** | olaylar_ek.js | 1461-06-01 | `sinop` | Amasra ve Sinop'un katılışı | 2 Kasım; 18 Mayıs; 3 Haziran |
| **2** | olaylar_ek5.js | 1478-06-15 | `arnavutluk` | Akçahisar'ın (Kruja) fethi ve Arnavutluk'un tamamlanması | 18 Eylül; 26 Mart; 13 Haziran; 4 Eylül; 28 Kasım; 29 Temmuz |
| **2** | olaylar_ek5.js | 1491-05-01 | `bayezid-ii` | Osmanlı-Memlük barışı — Tunus arabuluculuğu | 3 Mayıs; 7 Mayıs; 21 Mayıs; 22 Mayıs; 22 Haziran; 29 Temmuz |
| **2** | olaylar_ek5.js | 1499-08-28 | `inebahti` | Sapienza (Zonchio) Deniz Zaferi — Akdeniz'de ilk büyük donan | 26 Ağustos; 7 Ekim |
| **2** | olaylar_ek5.js | 1570-07-23 | `kibris` | Kıbrıs çıkarması: Limasol ve Baf'ın alınışı | 9 Eylül; 2 Temmuz; 25 Temmuz |
| **2** | olaylar_ek5.js | 1787-08-17 | `abdulhamid-i` | Rusya'ya savaş ilanı — Kırım'ı geri alma teşebbüsü | 27 Temmuz; 19 Ağustos |
| **3** | olaylar_ek.js | 1302-08-01 | `osmanlilar` | İznik'in ilk kuşatması ve Marmaracık'ın fethi | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |
| **3** | olaylar.js | 1461-08-15 | `trabzon` | Trabzon'un fethi | 18 Ağustos; 14 Nisan; 16 Nisan; 18 Nisan; 24 Şubat; 8 Kasım |
| **3** | olaylar_ek5.js | 1517-09-10 | `hayir-bey` | Yavuz Sultan Selim'in Kahire'den ayrılışı ve Hayır Bey'in be | 24 Ocak; 13 Eylül |
| **3** | olaylar_ek5.js | 1578-08-04 | `murad-iii` | Vâdisseyl (Kasrılkebir) Savaşı ve Fas'ın Osmanlı himayesine  | 4 Temmuz; 22 Aralık; 5 Ocak; 7 Ağustos; 24 Aralık; 28 Temmuz |
| **3** | olaylar_ek6.js | 1686-10-14 | `pecuy` | Peçuy'un kaybı | 29 Ağustos; 20 Temmuz; 26 Ocak; 17 Ekim |
| **3** | olaylar_ek6.js | 1687-12-17 | `egri` | Eğri'nin kaybı | 14 Aralık |
| **3** | olaylar_ek4.js | 1805-07-03 | `misir` | Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı | 6 Temmuz; 13 Nisan; 9 Haziran; 20 Ekim; 24 Mayıs; 15 Temmuz |
| **3** | olaylar_ek4.js | 1840-09-11 | `beyrut` | Beyrut bombardımanı ve müttefik çıkarması | 19 Haziran; 7 Ekim; 6 Haziran; 21 Ağustos; 14 Eylül; 16 Eylül |
| **3** | olaylar_ek5.js | 1849-08-16 | `macaristan` | Macar mültecileri meselesi: Kossuth ve arkadaşlarının Osmanl | 13 Ağustos |
| **3** | olaylar_ek5.js | 1918-04-14 | `birinci-dunya-savasi` | Batum'un geri alınışı | 3 Mart; 17 Nisan; 21 Mart; 21 Mayıs; 1 Ekim; 15 Eylül |
| **4** | olaylar_ek3.js | 1402-08-01 | `ankara-savasi` | Şehzadeler arasında ülkenin bölünmesi | 13 Mart; 28 Temmuz |
| **4** | olaylar_ek5.js | 1402-12-20 | `isa-celebi` | Îsâ Çelebi Bursa'yı ele geçirdi — Anadolu payı doğdu | 16 Aralık; 28 Temmuz |
| **4** | olaylar_ek5.js | 1523-01-05 | `rodos` | Şövalyelerin çekilişi: Bodrum, İstanköy ve Onikiada'nın devr | 1 Ocak |
| **4** | olaylar_ek5.js | 1537-10-01 | `barbaros-hayreddin-pasa` | Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği adalar | 28 Aralık; 6 Nisan; 22 Eylül; 21 Temmuz; 25 Eylül; 27 Eylül |
| **4** | olaylar.js | 1541-08-29 | `budin` | Budin'in ilhakı — Macaristan Osmanlı eyaleti | 11 Eylül; 10 Kasım; 17 Aralık; 2 Eylül; 31 Temmuz |
| **4** | olaylar_ek10.js | 1595-10-01 | `yergogu` | Eflak'tan çekiliş ve Yergöğü baskını — bastırma seferinin so | 12 Eylül; 8 Haziran; 19 Eylül; 27 Eylül; 14 Eylül |
| **4** | olaylar_ek5.js | 1815-04-23 | `sirbistan` | İkinci Sırp İsyanı ve Miloš Obrenović'in başknezliği | 17 Ekim; 29 Kasım; 27 Nisan; 21 Kasım; 11 Mart; 21 Mayıs |
| **4** | olaylar_ek4.js | 1816-09-01 | `ibrahim-pasa-kavalali` | İbrâhim Paşa Necid seferine çıktı | 9 Temmuz; 28 Ağustos; 20 Mart; 1 Mart; 19 Aralık; 1 Nisan |
| **4** | olaylar_ek9.js | 1874-11-02 | `darfur` | Darfur Sultanlığı'nın Mısır'a ilhakı — Zübeyr Paşa El-Fâşir' | 6 Kasım |
| **4** | olaylar_ek.js | 1898-12-01 | `girit` | Girit'e özerklik | 5 Aralık; 6 Kasım; 19 Kasım; 22 Aralık |
| **4** | olaylar_ek6.js | 1912-05-21 | `rodos` | İstanköy'ün işgali | 17 Mayıs |
| **5** | olaylar_ek5.js | 1324-08-01 | `osman-i` | Osman Gazi'nin vefatı ve Orhan Bey'in beyliğe geçişi | 22 Temmuz; 27 Temmuz; 26 Ağustos; 24 Temmuz |
| **5** | olaylar_ek.js | 1387-04-09 | `selanik` | Selanik'in ilk teslimi | 29 Mart; 26 Ekim; 4 Nisan |
| **5** | olaylar_ek7.js | 1512-05-26 | `bayezid-ii` | II. Bayezid'in Dimetoka yolunda ölümü | 24 Nisan; 21 Mayıs |
| **5** | olaylar_ek3.js | 1687-09-26 | `atina` | Atina'nın kaybı ve Parthenon patlaması | 21 Eylül |
| **5** | olaylar_ek3.js | 1695-02-11 | `mustafa-ii` | II. Mustafa'nın sefere bizzat çıkma kararı | 6 Şubat; 1 Mayıs; 30 Haziran |
| **5** | olaylar_ek.js | 1715-07-01 | `mora` | Mora'nın geri alınışı | 6 Temmuz; 20 Ekim |
| **5** | olaylar_ek5.js | 1716-08-20 | `korfu` | Korfu Kuşatması'nın başarısızlıkla sonuçlanması | 17 Mayıs; 25 Ağustos; 6 Eylül; 26 Ağustos; 5 Mart; 3 Nisan |
| **5** | olaylar_ek5.js | 1774-06-20 | `kucuk-kaynarca-antlasmasi` | Kozluca Bozgunu — Küçük Kaynarca'ya giden yenilgi | 25 Haziran; 21 Ocak; 19 Mayıs; 21 Temmuz; 17 Temmuz |
| **5** | olaylar.js | 1798-07-01 | `misir` | Napolyon'un Mısır'ı işgali | 6 Temmuz; 13 Nisan; 9 Haziran; 20 Ekim; 24 Mayıs; 15 Temmuz |
| **5** | olaylar_ek4.js | 1825-02-24 | `ibrahim-pasa-kavalali` | İbrâhim Paşa Modon'a çıktı | 9 Temmuz; 28 Ağustos; 20 Mart; 1 Mart; 19 Aralık; 1 Nisan |
| **5** | olaylar_ek4.js | 1832-06-25 | `halep` | Halep ele geçirildi | 31 Temmuz; 20 Haziran; 4 Haziran; 11 Temmuz; 3 Aralık; 28 Ağustos |
| **5** | olaylar_ek2.js | 1864-11-08 | `tanzimat` | Vilâyet Nizamnâmesi | 3 Kasım; 24 Mart; 24 Mayıs; 24 Haziran; 1 Temmuz; 17 Temmuz |
| **5** | olaylar_ek5.js | 1896-08-26 | `abdulhamid-ii` | Osmanlı Bankası Baskını: Taşnak eylemcilerinin Galata eylemi | 21 Eylül; 31 Ağustos; 19 Aralık; 23 Aralık; 18 Ocak; 5 Şubat |
| **5** | olaylar_ek6.js | 1912-05-12 | `rodos` | Onikiada'nın İtalyan işgali | 17 Mayıs |
| **6** | olaylar_ek3.js | 1403-06-15 | `suleyman-celebi-emir` | Gelibolu Antlaşması — Bizans'a tavizler | 9 Haziran; 5 Ocak; 24 Mart; 19 Mart |
| **6** | olaylar_ek7.js | 1406-10-21 | `karakoyunlular` | Kara Yusuf'un Tebriz ve Azerbaycan'ı Timurlulardan geri alma | 15 Ekim |
| **6** | olaylar_ek5.js | 1517-07-06 | `mekke` | Hicaz'ın savaşsız katılışı: Mekke Şerifi'nin oğlu Ebû Nümeyy | 12 Temmuz |
| **6** | olaylar.js | 1534-12-04 | `irakeyn-seferi` | Bağdat'ın fethi — Irakeyn Seferi | 6 Ağustos; 14 Haziran; 14 Ekim; 28 Kasım |
| **6** | olaylar_ek2.js | 1855-09-14 | `tanzimat` | Telgraf hattı İstanbul'da | 25 Temmuz; 29 Mart; 28 Mart; 8 Eylül |
| **7** | olaylar_ek5.js | 1552-09-04 | `egri` | Solnok'un fethi ve Eğri kuşatmasının başarısızlığı | 11 Eylül; 12 Ekim; 14 Aralık |
| **7** | olaylar_ek6.js | 1832-03-01 | `cezayir` | Annaba'nın (Bône) işgali | 23 Şubat; 21 Mart; 29 Nisan; 16 Haziran; 20 Ekim; 14 Haziran |
| **7** | olaylar_ek5.js | 1860-05-30 | `lubnan` | Cebel-i Lübnan'da Dürzî-Mârûnî iç savaşı ve Şam olayları | 9 Haziran; 6 Eylül; 11 Temmuz; 8 Ekim; 23 Mayıs; 21 Eylül |
| **7** | olaylar_ek6.js | 1917-11-07 | `birinci-dunya-savasi` | Üçüncü Gazze Muharebesi — Gazze ve Han Yûnus'un kaybı | 11 Mart; 15 Mart; 14 Kasım; 15 Aralık; 6 Nisan; 31 Ekim |
| **8** | olaylar_ek.js | 1403-06-01 | `suleyman-celebi-emir` | Süleyman Çelebi – Bizans antlaşması: Selanik'in iadesi | 9 Haziran; 5 Ocak; 24 Mart; 19 Mart |
| **8** | olaylar_ek11.js | 1510-12-02 | `safeviler` | Merv Savaşı: Özbekler ağır yenilgiye uğradı, Merv ve Herat a | 23 Ağustos; 23 Mayıs; 24 Kasım; 11 Şubat; 1 Eylül; 10 Kasım |
| **8** | olaylar_ek5.js | 1570-09-17 | `kibris` | Girne'nin teslimi — Kıbrıs'ın kuzey kıyısı | 9 Eylül; 2 Temmuz; 25 Temmuz |
| **8** | olaylar_ek4.js | 1811-09-03 | `vehhabilik` | Hicaz seferi başladı: Tosun Paşa Yenbu'ya çıktı | 11 Eylül |
| **8** | olaylar_ek5.js | 1835-05-26 | `trablusgarp` | Trablusgarp'ın doğrudan merkeze bağlanması — Karamanlı haned | 15 Ağustos; 3 Haziran; 1 Eylül |
| **8** | olaylar_ek5.js | 1853-11-11 | `osmanlilar` | Oltenitsa Zaferi: Tuna cephesinde ilk Osmanlı başarısı | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |
| **9** | olaylar_ek.js | 1392-01-15 | `uskup` | Üsküp'ün fethi | 6 Ocak |
| **9** | olaylar_ek5.js | 1517-01-22 | `suveys` | Süveyş'in alınışı — Kızıldeniz'e açılan kapı | 13 Ocak; 5 Ocak; 25 Nisan; 16 Kasım; 29 Ekim; 10 Ekim |
| **9** | olaylar_ek5.js | 1583-08-01 | `sirvan` | Bakü'nün alınışı — Hazar kıyısına çıkış | 24 Haziran; 17 Ağustos; 16 Kasım; 7 Ekim; 25 Aralık; 10 Ağustos |
| **9** | olaylar_ek5.js | 1715-08-01 | `modon` | Modon'un teslimi | 10 Ağustos; 8 Ekim |
| **9** | olaylar_ek5.js | 1867-04-18 | `sirbistan` | Belgrad ve Sırbistan kalelerindeki son Osmanlı garnizonların | 17 Ekim; 29 Kasım; 27 Nisan; 21 Kasım; 11 Mart; 21 Mayıs |
| **10** | olaylar_ek5.js | 1373-05-15 | `murad-i` | Savcı Bey isyanı — şehzade ile Bizans veliahdinin ortak başk | 25 Mayıs |
| **10** | olaylar_ek5.js | 1645-08-22 | `girit` | Girit seferinin başlaması ve Hanya'nın fethi | 6 Mart; 12 Ağustos; 6 Eylül; 21 Eylül; 15 Temmuz; 2 Eylül |
| **10** | olaylar_ek6.js | 1770-09-27 | `akkirman` | Bender'in Ruslara kaybı | 9 Haziran; 4 Ağustos; 30 Kasım; 7 Ekim |
| **10** | olaylar_ek5.js | 1790-01-31 | `selim-iii` | Osmanlı-Prusya İttifakı | 24 Aralık; 24 Ekim; 21 Ocak; 8 Ocak; 7 Nisan; 17 Nisan |
| **10** | olaylar_ek5.js | 1826-10-07 | `sirbistan` | Akkirman Antlaşması — Sırbistan ve prensliklere tavizler | 17 Ekim; 29 Kasım; 27 Nisan; 21 Kasım; 11 Mart; 21 Mayıs |
| **10** | olaylar_ek4.js | 1841-02-25 | `suriye` | Mısır ordusu Suriye ve Çukurova'yı boşalttı | 23 Nisan; 30 Temmuz; 20 Ağustos; 24 Ağustos; 15 Şubat; 23 Temmuz |
| **10** | olaylar_ek2.js | 1869-04-01 | `mecelle-i-ahkam-i-adliyye` | Mecelle'nin ilk kitabı yürürlükte | 22 Mart; 19 Nisan |
| **11** | olaylar_ek.js | 1357-08-01 | `orhan` | Şehzade Halil'in kaçırılması | 21 Temmuz |
| **11** | olaylar_ek.js | 1392-11-01 | `candarogullari` | Kastamonu'nun ilhakı | 21 Ekim |
| **11** | olaylar_ek7.js | 1722-06-01 | `sadabad` | Sâdâbâd Kasrı'nın yapımı | 25 Eylül; 12 Haziran; 24 Haziran; 30 Haziran; 30 Mart; 6 Ekim |
| **11** | olaylar_ek5.js | 1738-08-01 | `kirim` | Özi'nin geri alınışı ve Kırım'ın Rus istilâsından kurtarılma | 25 Ekim; 21 Temmuz; 10 Mart; 8 Nisan; 8 Ocak; 13 Şubat |
| **11** | olaylar_ek5.js | 1801-10-09 | `misir` | Mısır'ın Fransızlardan tahliyesi | 6 Temmuz; 13 Nisan; 9 Haziran; 20 Ekim; 24 Mayıs; 15 Temmuz |
| **12** | olaylar_ek.js | 1366-08-01 | `gelibolu` | Gelibolu'nun kaybı (Savoy Haçlı seferi) | 13 Ağustos |
| **12** | olaylar_ek5.js | 1415-03-01 | `mehmed-i` | Konya kuşatması ve Karamanoğulları ile antlaşma | 2 Aralık; 5 Ocak; 28 Aralık; 13 Şubat; 17 Şubat; 5 Temmuz |
| **12** | olaylar_ek5.js | 1415-06-01 | `izmir` | İzmir'in Aydınoğlu Cüneyd Bey'den alınışı | 17 Eylül; 28 Ekim; 15 Mayıs; 9 Eylül; 20 Mayıs; 30 Haziran |
| **12** | olaylar_ek5.js | 1517-07-12 | `haremeyn` | Hâdimü'l-Haremeyn unvanının kabulü ve Medine'de hutbe | 2 Aralık; 22 Ocak; 2 Mayıs; 28 Eylül; 30 Haziran |
| **12** | olaylar_ek7.js | 1550-06-01 | `suleymaniye-camii-ve-kulliyesi` | Süleymaniye Camii ve külliyesinin inşaatı başladı | 13 Haziran |
| **12** | olaylar.js | 1555-05-29 | `amasya-antlasmasi` | Amasya Antlaşması | 17 Mayıs |
| **12** | olaylar_ek5.js | 1572-06-01 | `kilic-ali-pasa` | İnebahtı sonrası donanmanın yeniden inşası | 13 Haziran |
| **12** | olaylar_ek5.js | 1593-07-01 | `avusturya` | Osmanlı-Avusturya 'Uzun Savaş'ının başlaması | 24 Nisan; 13 Temmuz; 29 Temmuz; 21 Nisan; 26 Şubat; 21 Kasım |
| **12** | olaylar_ek5.js | 1628-09-22 | `murad-iv` | Abaza Mehmed Paşa'nın Erzurum merkezli isyanının bastırılmas | 27 Temmuz; 10 Eylül; 10 Haziran; 5 Mayıs; 6 Ekim; 26 Mayıs |
| **12** | olaylar_ek6.js | 1685-10-19 | `macaristan` | Solnok'un kaybı — Tisa hattının çözülmesi | 15 Mart; 13 Ağustos; 31 Ekim; 11 Ocak; 16 Kasım; 1 Mart |
| **12** | olaylar_ek5.js | 1725-08-04 | `ahmed-iii` | Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi | 31 Aralık; 17 Ağustos; 22 Ağustos; 16 Eylül; 9 Nisan; 23 Temmuz |
| **12** | olaylar_ek5.js | 1813-10-05 | `sirbistan` | Belgrad'ın geri alınışı ve Birinci Sırp İsyanı'nın bastırılm | 17 Ekim; 29 Kasım; 27 Nisan; 21 Kasım; 11 Mart; 21 Mayıs |
| **12** | olaylar_ek5.js | 1866-08-21 | `girit` | Girit İsyanı'nın başlaması (1866-1869) | 2 Eylül |
| **12** | olaylar.js | 1878-07-13 | `berlin-antlasmasi` | Berlin Antlaşması | 3 Mart; 4 Haziran; 1 Temmuz; 13 Haziran |
| **13** | olaylar_ek5.js | 1386-06-01 | `karamanogullari` | Frenkyazısı Savaşı ve Konya kuşatması — ilk Karaman seferi | 14 Mayıs; 19 Mayıs; 17 Nisan |
| **13** | olaylar_ek5.js | 1414-06-01 | `karamanogullari` | Konya kuşatması: Beyşehir, Seydişehir ve Akşehir geri alındı | 14 Mayıs; 19 Mayıs; 17 Nisan |
| **13** | olaylar_ek5.js | 1897-04-17 | `yunanistan` | 1897 Osmanlı-Yunan Savaşı'nın başlaması: Teselya cephesi | 4 Nisan; 6 Temmuz; 20 Ekim; 30 Mayıs; 10 Ağustos; 25 Mart |
| **13** | olaylar_ek.js | 1897-05-17 | `yunanistan` | Dömeke Meydan Muharebesi | 4 Nisan; 6 Temmuz; 20 Ekim; 30 Mayıs; 10 Ağustos; 25 Mart |
| **13** | olaylar_ek6.js | 1912-05-04 | `rodos` | Rodos'un İtalyan işgali | 17 Mayıs |
| **14** | olaylar_ek.js | 1444-08-01 | `semendire` | Semendire'nin fiilen Sırbistan'a iadesi | 15 Ağustos |
| **14** | olaylar_ek5.js | 1513-04-01 | `selim-i` | Yenişehir Muharebesi ve Şehzade Ahmed'in bertarafı | 15 Nisan |
| **14** | olaylar_ek7.js | 1633-10-01 | `murad-iv` | IV. Murad'ın tütün ve kahvehane yasağı | 2 Eylül; 22 Ekim; 15 Ekim |
| **14** | olaylar_ek5.js | 1715-07-20 | `mora` | Anabolu'nun fethi — Mora'nın kilit kalesi | 6 Temmuz; 20 Ekim |
| **14** | olaylar_ek5.js | 1716-08-05 | `varadin` | Varadin (Petrovaradin) Bozgunu — Damad Ali Paşa'nın şehâdeti | 22 Temmuz |
| **14** | olaylar_ek4.js | 1821-08-19 | `sudan` | Kordofan ele geçirildi | 19 Ocak; 26 Ocak; 6 Kasım; 5 Temmuz; 2 Eylül; 25 Kasım |
| **14** | olaylar_ek4.js | 1825-06-22 | `mora` | Tripoliçe geri alındı — Mora'nın merkezi düştü | 6 Temmuz; 20 Ekim |
| **15** | olaylar_ek.js | 1391-10-01 | `istanbul` | İstanbul'un ilk ablukası başladı | 11 Mayıs; 24 Ağustos; 1 Eylül; 6 Kasım; 7 Kasım; 16 Eylül |
| **15** | olaylar_ek5.js | 1416-09-01 | `saruhanogullari` | Torlak Kemal'in idamı — Saruhan kesin olarak Osmanlı'nın | 16 Mayıs; 17 Ağustos |
| **15** | olaylar_ek7.js | 1511-04-01 | `sahkulu-baba-tekeli` | Şahkulu isyanının başlaması | 16 Nisan; 22 Nisan; 15 Haziran |
| **15** | olaylar_ek5.js | 1578-11-01 | `sirvan` | Şirvan'ın fethi: Şamahı'nın alınışı | 24 Haziran; 17 Ağustos; 16 Kasım; 7 Ekim; 25 Aralık; 10 Ağustos |
| **15** | olaylar_ek5.js | 1724-09-28 | `revan` | Revan'ın yeniden fethi | 11 Eylül; 29 Temmuz; 8 Ağustos; 1 Nisan; 13 Ekim; 2 Nisan |
| **15** | olaylar_ek4.js | 1807-04-21 | `kavalali-mehmed-ali-pasa` | Reşid (Rosetta) bozgunu — İngilizler püskürtüldü | 8 Mart; 3 Temmuz; 1 Mart; 6 Nisan; 9 Eylül; 6 Temmuz |
| **15** | olaylar_ek4.js | 1820-07-20 | `sudan` | Sudan seferi başladı | 19 Ocak; 26 Ocak; 6 Kasım; 5 Temmuz; 2 Eylül; 25 Kasım |
| **15** | olaylar_ek4.js | 1821-01-04 | `sudan` | Dongola alındı — Kölemen bakiyesi dağıtıldı | 19 Ocak; 26 Ocak; 6 Kasım; 5 Temmuz; 2 Eylül; 25 Kasım |
| **15** | olaylar_ek4.js | 1828-10-05 | `mora` | Mısır kuvvetleri Mora'yı boşalttı | 6 Temmuz; 20 Ekim |
| **15** | olaylar_ek.js | 1885-09-18 | `bulgaristan` | Doğu Rumeli'nin Bulgaristan'a katılması | 10 Haziran; 13 Ekim; 3 Ekim; 26 Nisan; 11 Mart; 11 Nisan |
| **15** | olaylar_ek9.js | 1911-10-08 | `trablusgarp-savasi` | Tobruk'a İtalyan çıkarması — Trablusgarp'ta ilk işgal | 1 Aralık; 23 Ekim; 5 Kasım |
| **16** | olaylar_ek5.js | 1393-06-01 | `bayezid-i` | Amasya'nın Osmanlı topraklarına katılması | 17 Haziran |
| **16** | olaylar_ek2.js | 1399-06-01 | `ulucami` | Bursa Ulu Camii tamamlandı | 24 Ekim; 17 Ekim; 16 Mayıs; 29 Eylül; 25 Kasım; 25 Ekim |
| **16** | olaylar_ek.js | 1416-05-29 | `gelibolu` | Gelibolu deniz yenilgisi (Venedik) | 2 Mart; 13 Ağustos; 14 Haziran; 4 Ağustos; 3 Ekim |
| **16** | olaylar_ek5.js | 1618-09-26 | `osman-ii` | Serav Antlaşması — İran'la barışın yenilenmesi | 26 Şubat; 10 Eylül; 27 Şubat |
| **16** | olaylar_ek8.js | 1657-11-15 | `limni` | Limni ve Semadirek'in geri alınışı | 23 Ekim; 21 Ekim; 30 Ekim |
| **17** | olaylar_ek5.js | 1456-01-24 | `mehmed-ii` | Enez'in ve Semadirek'in fethi — Batı Trakya kıyısının tamaml | 30 Mart; 12 Haziran; 22 Eylül; 5 Mayıs; 10 Şubat; 18 Şubat |
| **17** | olaylar_ek2.js | 1513-03-01 | `piri-reis` | Pîrî Reis'in dünya haritası | 22 Ağustos; 29 Ekim; 20 Aralık; 12 Şubat; 17 Eylül; 10 Ekim |
| **17** | olaylar_ek5.js | 1567-04-01 | `yemen` | Yemen isyanı ve Koca Sinan Paşa'nın Yemen seferi | 20 Haziran; 10 Ağustos; 18 Nisan; 2 Haziran; 28 Haziran; 27 Şubat |
| **17** | olaylar_ek3.js | 1684-07-14 | `budin` | Birinci Budin savunması | 11 Eylül; 10 Kasım; 17 Aralık; 2 Eylül; 31 Temmuz |
| **17** | olaylar_ek9.js | 1741-06-12 | `huseyniler` | Tabarka'nın Cenevizlilerden alınması — Lomellini mercan imti | 31 Ağustos; 11 Şubat; 2 Eylül; 26 Mayıs; 30 Eylül; 6 Eylül |
| **17** | olaylar_ek5.js | 1871-09-20 | `katar` | Katar'da Osmanlı kontrolünün kurulması | 29 Temmuz; 3 Kasım; 3 Eylül; 22 Şubat; 20 Aralık |
| **17** | olaylar_ek5.js | 1872-04-01 | `yemen` | San'a'nın alınışı: Yemen'de Osmanlı otoritesinin yeniden kur | 20 Haziran; 10 Ağustos; 18 Nisan; 2 Haziran; 28 Haziran; 27 Şubat |
| **18** | olaylar_ek.js | 1305-06-01 | `bizans` | Katalan birliklerinin Anadolu seferi | 11 Mayıs; 22 Temmuz; 12 Ağustos; 26 Ağustos; 29 Nisan; 19 Haziran |
| **18** | olaylar_ek7.js | 1660-07-15 | `agakapisi` | İstanbul'da büyük yangın: Ağakapısı'nın yanması | 5 Şubat; 22 Ağustos; 2 Ağustos; 22 Ekim |
| **18** | olaylar_ek3.js | 1683-10-09 | `estergon` | Parkan bozgunu ve Estergon'un kaybı | 27 Ekim |
| **18** | olaylar_ek3.js | 1696-07-19 | `azak` | Azak Kalesi'nin kaybı | 6 Ağustos |
| **18** | olaylar_ek5.js | 1913-06-29 | `osmanlilar` | II. Balkan Savaşı'nın başlaması: müttefiklerin paylaşım kavg | 23 Ocak; 30 Mayıs; 11 Haziran; 5 Ağustos |
| **19** | olaylar_ek.js | 1376-09-01 | `gelibolu` | Gelibolu'nun geri alınışı | 2 Mart; 13 Ağustos; 14 Haziran; 4 Ağustos; 3 Ekim |
| **19** | olaylar_ek.js | 1526-09-01 | `macaristan` | Macaristan Osmanlı himayesinde | 15 Mart; 13 Ağustos; 31 Ekim; 11 Ocak; 16 Kasım; 1 Mart |
| **19** | olaylar_ek7.js | 1553-12-01 | `piri-reis` | Kaptan-ı derya Pîrî Reis idam edildi | 22 Ağustos; 29 Ekim; 20 Aralık; 12 Şubat; 17 Eylül; 10 Ekim |
| **20** | olaylar_ek5.js | 1567-10-01 | `ace` | Açe Sultanlığı'yla savunma ittifakı ve Hint Okyanusu yardımı | 11 Eylül; 26 Mart; 5 Nisan; 27 Aralık; 4 Aralık |
| **20** | olaylar_ek5.js | 1769-09-19 | `hotin` | Hotin Kalesi'nin Ruslara kaybı | 9 Ekim; 11 Kasım |
| **20** | olaylar_ek6.js | 1885-02-05 | `habes-eyaleti` | Masavva'nın İtalyan işgali — Kızıldeniz'in batı kıyısının ka | 5 Temmuz; 2 Nisan; 20 Nisan; 16 Ocak; 3 Aralık; 2 Mart |
| **21** | olaylar_ek5.js | 1404-03-01 | `suleyman-celebi-emir` | Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun eline g | 22 Mart |
| **21** | olaylar_ek5.js | 1519-09-01 | `barbaros-hayreddin-pasa` | Cezayir'in Osmanlı Devleti'ne bağlanması | 28 Aralık; 6 Nisan; 22 Eylül; 21 Temmuz; 25 Eylül; 27 Eylül |
| **21** | olaylar.js | 1669-09-27 | `girit` | Girit'in fethi tamamlandı | 6 Eylül |
| **21** | olaylar_ek5.js | 1736-09-01 | `osmanlilar` | İstanbul Antlaşması — Güney Kafkasya'nın İran'a terki | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |
| **22** | olaylar_ek5.js | 1768-10-08 | `mustafa-iii` | Rusya'ya savaş ilanı — Balta olayı ve 1768-1774 savaşının ba | 28 Ocak; 22 Aralık; 30 Ekim; 4 Kasım; 10 Ocak; 29 Nisan |
| **22** | olaylar_ek.js | 1830-11-08 | `sirbistan` | Sırbistan'a özerklik fermanı — irsî knezlik ve garnizon şart | 17 Ekim |
| **23** | olaylar_ek7.js | 1509-09-14 | `istanbul` | İstanbul'da 'Küçük Kıyamet' depremi | 22 Ağustos |
| **23** | olaylar_ek5.js | 1555-09-27 | `cezayir` | Bicâye'nin (Bougie) İspanyollardan alınması | 23 Şubat; 21 Mart; 29 Nisan; 16 Haziran; 20 Ekim; 14 Haziran |
| **23** | olaylar_ek5.js | 1595-09-02 | `estergon` | Estergon'un Avusturya'ya kaybı | 10 Ağustos; 3 Ekim; 7 Ağustos; 27 Ekim |
| **23** | olaylar_ek4.js | 1828-08-06 | `navarin` | İskenderiye Sözleşmesi: Mısır Mora'dan çekilme kararı | 29 Ağustos |
| **24** | olaylar_ek.js | 1398-07-01 | `samsun` | Canik kıyılarının katılışı: Samsun | 6 Nisan; 7 Haziran; 19 Mayıs; 17 Ekim; 3 Haziran; 22 Mayıs |
| **24** | olaylar_ek5.js | 1403-03-15 | `timur` | Timur'un Anadolu'dan çekilmesi | 8 Nisan; 9 Nisan; 29 Ağustos; 15 Nisan; 29 Nisan; 10 Eylül |
| **24** | olaylar_ek5.js | 1534-07-13 | `irakeyn-seferi` | Tebriz'e ilk giriş — Irakeyn Seferi'nin açılışı | 6 Ağustos; 14 Haziran; 14 Ekim; 28 Kasım |
| **24** | olaylar_ek5.js | 1746-09-04 | `osmanlilar` | Kerden Antlaşması — Osmanlı-İran savaşlarının sonu | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |
| **24** | olaylar_ek5.js | 1903-10-02 | `makedonya` | Mürzsteg Programı: Makedonya'da uluslararası reform denetimi | 28 Şubat; 24 Temmuz; 28 Haziran; 27 Kasım; 2 Ağustos; 8 Eylül |
| **25** | olaylar_ek2.js | 1362-09-01 | `murad-i` | Rumeli Beylerbeyliği kuruldu | 5 Mayıs; 14 Haziran; 26 Eylül; 13 Kasım; 10 Nisan; 25 Mayıs |
| **25** | olaylar_ek5.js | 1770-08-01 | `mustafa-iii` | Kartal (Kagul) Ovası Bozgunu | 7 Temmuz |
| **25** | olaylar_ek4.js | 1812-11-08 | `medine` | Medine geri alındı | 3 Aralık |
| **26** | olaylar.js | 1361-03-01 | `edirne` | Edirne'nin fethi | 3 Temmuz; 9 Ağustos; 15 Nisan; 3 Şubat; 22 Ağustos; 20 Ocak |
| **26** | olaylar_ek5.js | 1400-08-01 | `sivas` | Timur Sivas'ı yerle bir etti | 4 Temmuz; 11 Eylül; 6 Temmuz; 23 Aralık; 29 Eylül; 1 Ekim |
| **26** | olaylar_ek5.js | 1475-01-10 | `bogdan` | Boğdan'da Racova (Vaslui) bozgunu | 11 Temmuz; 5 Şubat; 24 Şubat |
| **26** | olaylar_ek7.js | 1645-04-01 | `girit` | Girit Seferi'nin divanda kararlaştırılması ve donanmanın yol | 6 Mart; 12 Ağustos; 6 Eylül; 21 Eylül; 15 Temmuz; 2 Eylül |
| **26** | olaylar_ek5.js | 1804-02-14 | `sirbistan` | Birinci Sırp İsyanı'nın başlaması | 17 Ekim; 29 Kasım; 27 Nisan; 21 Kasım; 11 Mart; 21 Mayıs |
| **26** | olaylar_ek5.js | 1899-11-27 | `bagdat-demiryolu` | Konya-Bağdat hattı imtiyazının Almanlara verilmesi | 23 Aralık |
| **27** | olaylar_ek5.js | 1458-05-01 | `balyabadra` | Kuzey Mora'nın fethi: Balyabadra (Patras) | 4 Nisan |
| **28** | olaylar_ek7.js | 1826-05-15 | `eskinci-ocagi` | Eşkinci Ocağı kuruldu | 12 Haziran; 15 Haziran |
| **28** | olaylar_ek7.js | 1853-11-30 | `sinop` | Sinop Baskını | 2 Kasım; 18 Mayıs; 3 Haziran |
| **29** | olaylar_ek.js | 1388-08-27 | `bosna-hersek` | Bileća yenilgisi | 29 Temmuz; 20 Ekim; 7 Ekim |
| **29** | olaylar_ek5.js | 1390-06-01 | `tersane-i-amire` | Gelibolu Tersanesi'nin kurulması — Osmanlı donanmasının doğu | 30 Haziran; 17 Mart |
| **29** | olaylar_ek5.js | 1540-11-01 | `anabolu` | Anabolu'nun (Nauplion) antlaşmayla devralınması | 3 Ekim |
| **29** | olaylar_ek5.js | 1795-06-15 | `muhendishane-i-berri-i-humayun` | Mühendishâne-i Berrî-i Hümâyun'un açılışı | 14 Temmuz |
| **29** | olaylar_ek7.js | 1836-06-01 | `hariciye-nezareti` | Hariciye Nezareti kuruldu | 30 Haziran |
| **30** | olaylar_ek5.js | 1492-08-01 | `bayezid-ii` | İspanya'dan sürülen Sefarad Yahudilerinin Osmanlı'ya kabulü | 31 Ağustos |
| **30** | olaylar_ek4.js | 1832-11-21 | `konya` | Mısır ordusu Konya'ya girdi | 21 Aralık |
| **31** | olaylar_ek2.js | 1553-11-01 | `seydi-ali-reis` | Seydi Ali Reis'in Hint yolculuğu | 2 Aralık; 7 Aralık |
| **31** | olaylar_ek7.js | 1603-12-23 | `mustafa-i` | Kardeş katli geleneğinin fiilen sona ermesi | 22 Kasım; 26 Şubat; 19 Mayıs; 20 Mayıs; 13 Haziran; 24 Haziran |
| **31** | olaylar_ek5.js | 1739-10-03 | `osmanlilar` | Niş Antlaşması — Rusya ile barış, Azak'ın tarafsızlaştırılma | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |

### 🔴 Kalan FARKLI-TARIH satırları (158 — fark >31 gün ya da hesaplanamadı)

<details><summary>aç</summary>

| fark | dosya | bizim `t:` | kaynak | madde başlığı | metindeki tarihler |
|---|---|---|---|---|---|
| 72 | olaylar_ek5.js | 1323-09-01 | `orhan` | Adranos (Orhaneli) seferi — Osman Bey'in son seferi | 6 Nisan; 1 Haziran; 2 Mart; 8 Şubat; 12 Kasım; 6 Mayıs |
| 64 | olaylar_ek.js | 1330-06-01 | `osmanlilar` | Kocaeli kıyılarının ve Kandıra'nın fethi | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |
| 61 | olaylar_ek5.js | 1333-08-01 | `orhan` | Bizans'ın haraca bağlanması — İzmit kuşatması ve antlaşma | 6 Nisan; 1 Haziran; 2 Mart; 8 Şubat; 12 Kasım; 6 Mayıs |
| 58 | olaylar_ek7.js | 1335-12-01 | `ilhanlilar` | İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü | 3 Eylül; 8 Şubat; 24 Mart; 4 Ekim |
| 39 | olaylar_ek.js | 1354-08-01 | `ankara` | Ankara'nın alınışı | 23 Haziran; 27 Aralık; 23 Nisan; 13 Ekim; 29 Ekim |
| 183 | olaylar_ek5.js | 1357-09-01 | `suleyman-pasa` | Rumeli fâtihi Süleyman Paşa'nın ölümü | 2 Mart |
| 32 | olaylar_ek.js | 1362-06-01 | `edirne` | Doğu Trakya'da ilerleyiş: Çorlu ve Lüleburgaz'ın alınışı | 3 Temmuz; 9 Ağustos; 15 Nisan; 3 Şubat; 22 Ağustos; 20 Ocak |
| 49 | olaylar_ek.js | 1381-06-01 | `hamidogullari` | Hamîd ilinin satın alınışı: Isparta'nın katılışı | 13 Nisan; 28 Şubat |
| 52 | olaylar_ek7.js | 1387-11-01 | `timur` | Timur'un İran'ın büyük bölümünü hakimiyeti altına alması | 8 Nisan; 9 Nisan; 29 Ağustos; 15 Nisan; 29 Nisan; 10 Eylül |
| 81 | olaylar_ek2.js | 1390-01-15 | `bayezid-i` | Yıldırım Bayezid – Despina Hatun evliliği | 15 Haziran; 6 Nisan; 17 Haziran; 27 Mayıs; 17 Mayıs; 3 Haziran |
| 37 | olaylar_ek.js | 1393-07-17 | `bulgaristan` | Tırnova'nın düşüşü — Bulgaristan'ın ilhakı | 10 Haziran; 13 Ekim; 3 Ekim; 26 Nisan; 11 Mart; 11 Nisan |
| 32 | olaylar_ek.js | 1393-09-01 | `bulgaristan` | Dobruca'nın katılışı | 10 Haziran; 13 Ekim; 3 Ekim; 26 Nisan; 11 Mart; 11 Nisan |
| 43 | olaylar_ek.js | 1397-07-01 | `karamanogullari` | Karaman'ın ilk ilhakı | 14 Mayıs; 19 Mayıs; 17 Nisan |
| 57 | olaylar_ek5.js | 1398-07-15 | `kadi-burhaneddin` | Kadı Burhâneddin Devleti'nin yıkılışı | 8 Ocak; 9 Şubat; 19 Mayıs; 3 Mayıs |
| 35 | olaylar_ek.js | 1399-09-01 | `ankara-savasi` | Malatya'nın alınışı | 13 Mart; 28 Temmuz |
| 96 | olaylar_ek5.js | 1399-11-01 | `ankara-savasi` | Timur'un restleşmesi: kaçakların iadesi reddedildi | 13 Mart; 28 Temmuz |
| 40 | olaylar_ek5.js | 1401-02-01 | `ankara-savasi` | Yıldırım Bayezid Erzincan ve Kemah'ı geri aldı | 13 Mart; 28 Temmuz |
| 49 | olaylar_ek5.js | 1402-09-15 | `ankara-savasi` | Timur Anadolu beyliklerini yeniden kurdu — Türk birliği dağı | 13 Mart; 28 Temmuz |
| 47 | olaylar_ek5.js | 1402-12-14 | `izmir` | Timur İzmir'i Saint Jean şövalyelerinden aldı | 17 Eylül; 28 Ekim; 15 Mayıs; 9 Eylül; 20 Mayıs; 30 Haziran |
| 33 | olaylar_ek5.js | 1408-06-01 | `sivas` | Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı | 4 Temmuz; 11 Eylül; 6 Temmuz; 23 Aralık; 29 Eylül; 1 Ekim |
| 104 | olaylar_ek3.js | 1411-06-01 | `musa-celebi` | Musa Çelebi'nin İstanbul kuşatması | 17 Şubat |
| 65 | olaylar_ek5.js | 1412-10-01 | `fetret-devri` | İnceğiz Savaşı — Çelebi Mehmed'in ilk Rumeli yenilgisi | 15 Haziran; 11 Temmuz; 18 Mayıs; 17 Şubat; 5 Temmuz; 28 Temmuz |
| 66 | olaylar_ek5.js | 1423-05-01 | `mora` | Turahan Bey'in Mora seferi ve Hexamilion Suru'nun yıkılışı | 6 Temmuz; 20 Ekim |
| 42 | olaylar_ek.js | 1423-09-14 | `selanik` | Selanik'in Venedik'e devri | 29 Mart; 26 Ekim; 4 Nisan |
| 78 | olaylar_ek.js | 1425-06-01 | `aydinogullari` | Batı Anadolu beyliklerinin yeniden ilhakı: Aydın, Menteşe, T | 28 Ekim; 17 Ocak; 18 Ağustos |
| 217 | olaylar_ek.js | 1430-10-09 | `yanya` | Yanya'nın teslimi | 6 Mart |
| 202 | olaylar_ek.js | 1440-04-01 | `belgrad` | Belgrad kuşatması (başarısız) | 1 Aralık; 20 Ekim |
| 38 | olaylar_ek5.js | 1446-05-05 | `bucuktepe-vakasi` | Buçuktepe Vak'ası — ilk yeniçeri ayaklanması ve II. Murad'ın | 12 Haziran; 12 Temmuz; 1 Eylül; 10 Kasım |
| 40 | olaylar_ek2.js | 1456-06-01 | `bogdan` | Boğdan'ın haraca bağlanışı | 11 Temmuz; 5 Şubat; 24 Şubat |
| 109 | olaylar_ek.js | 1456-06-04 | `atina` | Atina'nın fethi | 21 Eylül |
| 40 | olaylar_ek5.js | 1456-07-22 | `mehmed-ii` | Belgrad kuşatmasının başarısızlığı | 30 Mart; 12 Haziran; 22 Eylül; 5 Mayıs; 10 Şubat; 18 Şubat |
| 38 | olaylar_ek.js | 1460-05-29 | `mora` | Mora'nın fethi | 6 Temmuz; 20 Ekim |
| 58 | olaylar_ek.js | 1463-06-01 | `bosna-hersek` | Bosna'nın fethi | 29 Temmuz; 20 Ekim; 7 Ekim |
| 194 | olaylar_ek5.js | 1466-06-01 | `iskender-bey` | II. Arnavutluk seferi — Fatih'in İskender Bey üzerine bizzat | 12 Aralık |
| 120 | olaylar_ek2.js | 1470-12-01 | `fatih-camii-ve-kulliyesi` | Fatih Külliyesi açıldı | 31 Temmuz; 24 Temmuz; 3 Ağustos; 24 Mart |
| 45 | olaylar.js | 1475-06-06 | `kirim` | Kırım'ın Osmanlı himayesine girişi | 25 Ekim; 21 Temmuz; 10 Mart; 8 Nisan; 8 Ocak; 13 Şubat |
| 109 | olaylar_ek10.js | 1479-08-01 | `gedik-ahmed-pasa` | İyon adalarının fethi — Tocco düklüğünün sonu: Ayamavra, Kef | 18 Kasım |
| 99 | olaylar_ek.js | 1480-08-11 | `gedik-ahmed-pasa` | Otranto çıkarması | 18 Kasım |
| 62 | olaylar_ek7.js | 1481-05-28 | `cem-sultan` | Cem Sultan'ın Bursa'da kendini sultan ilan etmesi | 23 Aralık; 29 Temmuz; 15 Ekim; 5 Şubat; 4 Mart; 30 Kasım |
| 39 | olaylar_ek5.js | 1481-06-20 | `cem-sultan` | Yenişehir Muharebesi — Cem Sultan'ın yenilgisi | 23 Aralık; 29 Temmuz; 15 Ekim; 5 Şubat; 4 Mart; 30 Kasım |
| 69 | olaylar_ek.js | 1481-09-10 | `gedik-ahmed-pasa` | Otranto'nun tahliyesi | 18 Kasım |
| 39 | olaylar_ek7.js | 1501-07-01 | `safeviler` | Şah İsmail'in Tebriz'i alması: Safevî Devleti'nin kuruluşu | 23 Ağustos; 23 Mayıs; 24 Kasım; 11 Şubat; 1 Eylül; 10 Kasım |
| 78 | olaylar_ek5.js | 1516-05-01 | `mardin` | Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın fethi | 23 Ağustos; 9 Ocak; 13 Şubat |
| 76 | olaylar_ek5.js | 1516-09-26 | `trablussam` | Trablusşam'ın Osmanlı idaresine girişi | 12 Temmuz |
| 42 | olaylar_ek5.js | 1516-12-28 | `yafa` | Filistin'in katılışı: Yafa, Nablus ve Amman | 8 Mart; 6 Mayıs; 16 Kasım |
| 52 | olaylar.js | 1521-08-29 | `belgrad` | Belgrad'ın fethi | 1 Aralık; 20 Ekim |
| 102 | olaylar_ek5.js | 1532-08-05 | `suleyman-i` | Alman Seferi ve Güns (Kőszeg) kuşatması | 25 Nisan; 22 Kasım |
| 39 | olaylar_ek5.js | 1534-06-01 | `kars` | Kars'ın alınması ve kuzeydoğu sınırının açılması | 3 Mart; 23 Nisan; 5 Kasım; 18 Ocak; 12 Nisan; 30 Ekim |
| 55 | olaylar_ek5.js | 1538-08-01 | `barbaros-hayreddin-pasa` | Barbaros'un Kuzey Ege seferi: İskiros ve Kuzey Sporadlar'ın  | 25 Eylül |
| 36 | olaylar_ek5.js | 1538-08-03 | `yemen` | Yemen sahilinin ilhakı: Zebîd, Moha ve Kızıldeniz adaları | 28 Haziran |
| 52 | olaylar_ek5.js | 1538-09-01 | `bogdan` | Boğdan Seferi ve Bucak (Bender) bölgesinin ilhakı | 11 Temmuz; 5 Şubat; 24 Şubat |
| 39 | olaylar_ek7.js | 1545-10-01 | `ebussuud-efendi` | Ebüssuûd Efendi şeyhülislam oldu | 30 Aralık; 23 Ağustos |
| 38 | olaylar_ek5.js | 1553-10-05 | `suleyman-i` | Şehzade Mustafa'nın Konya Ereğlisi'nde idamı | 28 Ağustos; 27 Kasım |
| 36 | olaylar_ek2.js | 1565-05-18 | `malta` | Malta Kuşatması | 23 Mart; 29 Mart; 23 Haziran; 16 Temmuz; 20 Ağustos; 12 Eylül |
| 63 | olaylar_ek7.js | 1580-02-01 | `ingiltere` | İngiltere ile ilk ticaret ahidnâmesi imzalandı | 15 Haziran; 4 Ağustos; 10 Temmuz; 4 Nisan; 20 Ekim; 13 Temmuz |
| 58 | olaylar_ek5.js | 1583-06-01 | `revan` | Revan'ın (Erivan) fethi ve kale inşası | 11 Eylül; 29 Temmuz; 8 Ağustos; 1 Nisan; 13 Ekim; 2 Nisan |
| 86 | olaylar_ek10.js | 1594-10-05 | `bogdan` | Üç voyvodalığın birden ayaklanması — Erdel, Eflak ve Boğdan  | 11 Temmuz; 5 Şubat; 24 Şubat |
| 59 | olaylar_ek7.js | 1595-02-01 | `safiye-sultan` | Safiye Sultan vâlide sultan olarak nüfuz kazandı | 26 Mayıs; 1 Nisan; 9 Nisan |
| 72 | olaylar_ek5.js | 1599-06-01 | `karayazici-abdulhalim` | Karayazıcı Abdülhalim ayaklanması | 23 Eylül; 12 Ağustos |
| 178 | olaylar_ek7.js | 1602-02-15 | `karayazici-abdulhalim` | Karayazıcı Abdülhalim öldü, isyan hareketi zayıfladı | 23 Eylül; 12 Ağustos |
| 51 | olaylar_ek6.js | 1604-06-08 | `revan` | Revan'ın Şah Abbas'a kaybı | 11 Eylül; 29 Temmuz; 8 Ağustos; 1 Nisan; 13 Ekim; 2 Nisan |
| 135 | olaylar_ek5.js | 1608-08-05 | `kuyucu-murad-pasa` | Alaçayır zaferi ve Kalenderoğlu isyanının bastırılması | 18 Aralık |
| 99 | olaylar_ek7.js | 1609-08-09 | `sultan-ahmed-camii-ve-kulliyesi` | Sultanahmet Camii'nin temeli atıldı | 19 Nisan; 28 Nisan; 2 Mayıs; 20 Mart |
| 38 | olaylar_ek2.js | 1616-06-09 | `sultan-ahmed-camii-ve-kulliyesi` | Sultan Ahmed Camii açıldı | 19 Nisan; 28 Nisan; 2 Mayıs; 20 Mart |
| 49 | olaylar_ek8.js | 1637-06-18 | `azak` | Azak Kalesi'nin Don Kazaklarına kaybı | 6 Ağustos |
| 161 | olaylar_ek5.js | 1642-02-26 | `azak` | Azak Kalesi'nin Kazaklardan geri alınışı | 6 Ağustos |
| 106 | olaylar_ek5.js | 1658-08-27 | `koprulu-mehmed-pasa` | Yanova'nın (Ineu) fethi ve Erdel seferi | 11 Aralık |
| 38 | olaylar_ek.js | 1663-09-24 | `uyvar` | Uyvar'ın fethi | 17 Ağustos |
| 133 | olaylar_ek7.js | 1665-06-01 | `mehmed-efendi-vani` | Vânî Mehmed Efendi'nin Yeni Cami vâizliğine ve pâdişah hocal | 12 Ekim |
| 70 | olaylar_ek5.js | 1685-08-11 | `koron` | Koron'un Venedik'e kaybı | 20 Ekim |
| 70 | olaylar_ek6.js | 1686-06-01 | `modon` | Modon'un Venedik'e kaybı | 10 Ağustos; 8 Ekim |
| 88 | olaylar_ek6.js | 1687-07-01 | `balyabadra` | Balyabadra'nın (Patras) kaybı — Mora'nın kuzey kapısı | 4 Nisan |
| 44 | olaylar_ek3.js | 1688-09-06 | `belgrad` | Belgrad'ın ilk kez kaybı — Kutsal İttifak kuşatması | 1 Aralık; 20 Ekim |
| 41 | olaylar_ek5.js | 1690-04-13 | `kanije` | Kanije Kalesi'nin Avusturya'ya kaybı | 20 Ekim; 10 Eylül; 17 Kasım; 24 Mayıs |
| 41 | olaylar_ek3.js | 1690-09-09 | `belgrad` | Niş, Vidin ve Belgrad geri alındı | 1 Aralık; 20 Ekim |
| 57 | olaylar_ek6.js | 1692-06-05 | `varad` | Varad'ın kaybı | 27 Ağustos; 1 Ağustos; 1 Aralık; 30 Ağustos; 12 Ekim |
| 84 | olaylar_ek3.js | 1695-09-22 | `mustafa-ii` | Lugoş zaferi — II. Him seferi | 6 Şubat; 1 Mayıs; 30 Haziran |
| 148 | olaylar_ek7.js | 1703-03-01 | `feyzullah-efendi-seyyid` | Feyzullah Efendi'nin oğullarını üst görevlere getirmesi ve b | 27 Temmuz |
| 36 | olaylar_ek2.js | 1703-08-22 | `edirne-vakasi` | Edirne Vakası — II. Mustafa'nın hal'i | 17 Temmuz |
| 45 | olaylar_ek5.js | 1705-07-17 | `huseyniler` | Tunus'ta Hüseynî hanedanının kurulması | 31 Ağustos; 11 Şubat; 2 Eylül; 26 Mayıs; 30 Eylül; 6 Eylül |
| 94 | olaylar_ek5.js | 1711-03-01 | `trablusgarp` | Trablusgarp'ta Karamanlı hanedanının kurulması | 15 Ağustos; 3 Haziran; 1 Eylül |
| 107 | olaylar_ek10.js | 1713-06-24 | `hotin` | Hotin'in Boğdan'dan koparılması — voyvodalığın ortasında doğ | 9 Ekim; 11 Kasım |
| 65 | olaylar_ek5.js | 1715-08-16 | `koron` | Koron'un teslimi — Mora seferinin tamamlanması | 20 Ekim |
| 43 | olaylar_ek5.js | 1715-09-07 | `mora` | Çuha Adası'nın (Kythira) alınışı | 6 Temmuz; 20 Ekim |
| 79 | olaylar_ek5.js | 1716-10-13 | `timisvar` | Temeşvar'ın (Timişvar) Avusturya'ya kaybı | 26 Temmuz |
| 62 | olaylar_ek7.js | 1720-06-01 | `tulumbaci` | Tulumbacı Ocağı'nın kuruluşu | 2 Ağustos |
| 36 | olaylar_ek7.js | 1727-07-01 | `ibrahim-muteferrika` | İbrahim Müteferrika'ya matbaa kurma izni | 18 Nisan; 23 Ocak; 7 Ekim; 26 Mayıs; 6 Şubat; 2 Şubat |
| 40 | olaylar_ek2.js | 1727-07-05 | `ibrahim-muteferrika` | İlk Osmanlı matbaası kuruldu | 18 Nisan; 23 Ocak; 7 Ekim; 26 Mayıs; 6 Şubat; 2 Şubat |
| 114 | olaylar_ek7.js | 1729-02-01 | `ibrahim-muteferrika` | İlk basılı kitap Vankulu Lügati'nin tamamlanması | 26 Mayıs |
| 34 | olaylar_ek5.js | 1732-07-01 | `osmanlilar` | Vahran'ın (Oran) yeniden İspanya'ya kaybı | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |
| 215 | olaylar_ek5.js | 1733-05-01 | `humbaraci` | Humbaracı Ocağı'nın Avrupa usulünde ıslahı ve Humbarahâne'ni | 2 Aralık |
| 184 | olaylar_ek7.js | 1733-06-01 | `humbaraci` | Humbaracı Ahmed Paşa'nın topçu ocağını ıslahı | 2 Aralık |
| 62 | olaylar_ek7.js | 1734-06-01 | `mahmud-i--osmanli` | Hendesehâne'nin (mühendislik okulunun ilk örneği) kuruluşu | 2 Ağustos; 2 Ekim; 2 Eylül; 15 Eylül; 10 Ocak; 6 Ekim |
| 39 | olaylar_ek6.js | 1735-06-19 | `nahcivan` | Baghavard (Arpaçay) bozgunu — Kafkasya'nın Nâdir Han'a kaybı | 28 Temmuz; 9 Şubat |
| 90 | olaylar_ek5.js | 1739-07-22 | `belgrad` | Hisarcık (Grocka) Zaferi — Belgrad yolunun açılması | 1 Aralık; 20 Ekim |
| 38 | olaylar_ek7.js | 1766-05-01 | `fatih-camii-ve-kulliyesi` | Büyük İstanbul depremi ve Fâtih Camii'nin yıkılması | 31 Temmuz; 24 Temmuz; 3 Ağustos; 24 Mart |
| 42 | olaylar_ek7.js | 1772-10-01 | `muhendishane-i-bahri-i-humayun` | Baron de Tott öncülüğünde kısa ömürlü topçuluk okulu denemes | 29 Nisan; 15 Temmuz; 12 Kasım; 3 Şubat |
| 155 | olaylar_ek5.js | 1775-05-07 | `hotin` | Bukovina'nın (Kuzey Boğdan) Avusturya'ya terki | 9 Ekim; 11 Kasım |
| 32 | olaylar_ek8.js | 1779-04-01 | `basra` | Basra'nın İran işgalinden geri alınışı | 26 Aralık; 22 Kasım; 17 Ocak; 28 Şubat |
| 325 | olaylar_ek5.js | 1790-12-22 | `osmanlilar` | İsmail Kalesi'nin düşüşü ve katliamı | 31 Ocak |
| 213 | olaylar_ek5.js | 1792-02-12 | `vehran` | Vehrân'ın (Oran) İspanyollarca boşaltılması ve Cezayir'e dev | 12 Eylül |
| 131 | olaylar_ek7.js | 1793-03-01 | `elci` | Avrupa başkentlerine daimi elçilikler kuruldu | 10 Temmuz |
| 151 | olaylar_ek7.js | 1793-06-01 | `esham` | İrad-ı Cedîd hazinesi kuruldu | 30 Ekim |
| 36 | olaylar_ek5.js | 1795-03-01 | `pazvandoglu-osman` | Pazvandoğlu Osman'ın Vidin'de fiilî hükümdarlığı | 21 Haziran; 19 Ocak; 24 Ocak |
| 48 | olaylar_ek6.js | 1795-04-01 | `kuveyt` | Kuveyt'te Sabah emirliğinin Osmanlı himayesine girmesi | 19 Haziran; 20 Ocak; 23 Ocak; 20 Mayıs; 24 Kasım; 19 Mayıs |
| 126 | olaylar_ek9.js | 1798-07-21 | `kahire` | Piramitler Muharebesi ve Kahire'nin Fransızlarca alınması | 24 Kasım; 26 Ocak |
| 47 | olaylar_ek5.js | 1798-09-03 | `misir` | Fransa'ya savaş ilanı ve Rusya-İngiltere ile ittifak | 6 Temmuz; 13 Nisan; 9 Haziran; 20 Ekim; 24 Mayıs; 15 Temmuz |
| 192 | olaylar_ek5.js | 1801-04-01 | `kerbela` | Vehhâbîlerin Kerbelâ baskını | 10 Ekim |
| 64 | olaylar_ek4.js | 1803-05-01 | `husrev-pasa-koca` | Arnavut askerleri Mısır valisini devirdi | 4 Temmuz |
| 119 | olaylar_ek5.js | 1803-05-15 | `vehhabilik` | Vehhâbîlerin Mekke ve Tâif'i ele geçirmesi | 11 Eylül |
| 51 | olaylar_ek4.js | 1805-05-13 | `kavalali-mehmed-ali-pasa` | Kahire ulemâsı Mehmed Ali'yi vali ilan etti | 3 Temmuz |
| 72 | olaylar_ek5.js | 1805-07-01 | `vehhabilik` | Vehhâbîlerin Medine'yi işgali | 11 Eylül |
| 99 | olaylar_ek5.js | 1806-12-22 | `selim-iii` | Rusya ile savaşın başlaması ve Boğazların kapatılması | 14 Eylül |
| 51 | olaylar_ek5.js | 1807-02-20 | `selim-iii` | İngiliz donanmasının İstanbul önlerine gelmesi (Duckworth ha | 12 Nisan; 29 Mayıs |
| 49 | olaylar_ek7.js | 1808-08-15 | `sekban-i-cedid` | Sekbân-ı Cedîd ordusu kuruldu | 3 Ekim; 14 Ekim; 16 Kasım |
| 81 | olaylar_ek4.js | 1811-12-01 | `vehhabilik` | Safra-Cedîde boğazında ilk bozgun | 11 Eylül |
| 103 | olaylar.js | 1821-03-25 | `mora` | Yunan İsyanı başladı | 6 Temmuz; 20 Ekim |
| 199 | olaylar_ek5.js | 1824-06-01 | `suudiler` | İkinci Suûdî Devleti'nin Riyad'da kurulması | 17 Aralık |
| 33 | olaylar_ek4.js | 1826-04-22 | `resid-mehmed-pasa` | Missolonghi (Mesolongi) düştü | 20 Ekim; 28 Ocak; 25 Mayıs; 17 Temmuz; 14 Eylül; 12 Haziran |
| 119 | olaylar_ek5.js | 1827-02-01 | `timar` | Tımar sisteminin tasfiyesi | 31 Mayıs |
| 220 | olaylar_ek5.js | 1827-03-14 | `osmanlilar` | Tıphâne-i Âmire'nin kurulması — modern tıp eğitiminin başlan | 20 Ekim |
| 52 | olaylar_ek7.js | 1828-02-10 | `revan` | Türkmençay Antlaşması: Revan ve Talış'ın Rusya'ya geçişi | 2 Nisan |
| 154 | olaylar_ek7.js | 1829-09-14 | `ahiska` | Ahıska'nın Rusya'ya terki — Çıldır eyaletinin merkezi elden  | 13 Nisan; 16 Mart |
| 50 | olaylar_ek8.js | 1830-02-03 | `yunanistan` | Londra Protokolü — Yunanistan'ın bağımsızlığının tanınması | 4 Nisan; 6 Temmuz; 20 Ekim; 30 Mayıs; 10 Ağustos; 25 Mart |
| 89 | olaylar_ek5.js | 1830-05-07 | `osmanlilar` | Amerika Birleşik Devletleri ile ilk antlaşma | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |
| 35 | olaylar_ek7.js | 1830-08-09 | `cezayir` | Dayı Hüseyin'in sürgünü — Cezayir ocağının fiilen sonu | 14 Haziran; 5 Temmuz |
| 41 | olaylar_ek4.js | 1830-11-01 | `girit` | Girit'in idaresi Mehmed Ali'ye bırakıldı | 6 Mart; 12 Ağustos; 6 Eylül; 21 Eylül; 15 Temmuz; 2 Eylül |
| 68 | olaylar_ek4.js | 1831-10-31 | `suriye` | İbrâhim Paşa Suriye'ye girdi — birinci kriz başladı | 23 Nisan; 30 Temmuz; 20 Ağustos; 24 Ağustos; 15 Şubat; 23 Temmuz |
| 43 | olaylar_ek4.js | 1832-05-27 | `akka` | Akkâ düştü | 9 Temmuz; 18 Mart; 15 Temmuz; 29 Kasım |
| 169 | olaylar_ek4.js | 1833-02-02 | `kutahya` | Mısır ordusu Kütahya'ya ulaştı | 6 Ağustos; 21 Temmuz; 28 Temmuz; 26 Ağustos; 30 Ağustos |
| 174 | olaylar_ek6.js | 1833-03-31 | `atina` | Atina'nın yeni Yunan devletine bırakılması | 21 Eylül |
| 68 | olaylar_ek4.js | 1833-05-14 | `kutahya` | Kütahya Sözleşmesi — Suriye ve Adana Kavalalı'ya | 6 Ağustos; 21 Temmuz; 28 Temmuz; 26 Ağustos; 30 Ağustos |
| 34 | olaylar_ek5.js | 1834-07-01 | `osmanlilar` | Mekteb-i Harbiye'nin Maçka Kışlası'nda kurulması | 31 Ocak; 4 Ağustos; 5 Ağustos; 11 Ağustos; 10 Ocak; 3 Kasım |
| 196 | olaylar_ek5.js | 1839-01-19 | `aden` | İngilizlerin Aden'e yerleşmesi | 3 Ağustos; 30 Kasım |
| 33 | olaylar_ek4.js | 1839-04-21 | `osmanlilar` | Osmanlı ordusu Fırat'ı geçti | 3 Kasım; 2 Eylül; 3 Temmuz; 24 Mayıs |
| 111 | olaylar_ek4.js | 1840-11-03 | `akka` | Akkâ iki saatte düştü | 15 Temmuz |
| 163 | olaylar_ek6.js | 1844-03-04 | `cezayir` | Biskra'nın işgali — Sahra kapısının kaybı | 14 Ağustos; 10 Eylül |
| 70 | olaylar_ek4.js | 1848-09-01 | `ibrahim-pasa-kavalali` | İbrâhim Paşa fiilen Mısır valisi oldu | 10 Kasım |
| 43 | olaylar_ek6.js | 1854-12-02 | `cezayir` | Tuggurt'un işgali — Cezayir'in tamamının elden çıkışı | 23 Şubat; 21 Mart; 29 Nisan; 16 Haziran; 20 Ekim; 14 Haziran |
| 51 | olaylar_ek5.js | 1862-02-21 | `romanya` | Birleşik prensliklerin Romanya adını alması | 1 Ocak; 9 Mayıs; 1 Aralık; 8 Temmuz; 10 Aralık; 8 Ekim |
| 43 | olaylar_ek7.js | 1869-06-01 | `mecelle-i-ahkam-i-adliyye` | Mecelle-i Ahkâm-ı Adliyye çalışmaları başladı | 22 Mart; 19 Nisan |
| 79 | olaylar_ek5.js | 1871-04-20 | `lahsa` | Midhat Paşa'nın Necid seferi: Lahsâ'da Osmanlı hâkimiyetinin | 8 Temmuz; 29 Temmuz; 26 Aralık |
| 40 | olaylar_ek5.js | 1875-06-19 | `bosna-hersek` | Hersek İsyanı'nın başlaması: Şark Meselesi'nin yeniden alevl | 29 Temmuz; 20 Ekim; 7 Ekim |
| 124 | olaylar.js | 1881-05-12 | `duyun-i-umumiyye` | Tunus'un işgali ve Düyûn-ı Umûmiyye | 13 Eylül; 20 Aralık |
| 45 | olaylar_ek.js | 1881-07-02 | `tesalya` | Teselya'nın Yunanistan'a bırakılması | 7 Nisan; 18 Mayıs |
| 57 | olaylar_ek9.js | 1882-07-11 | `urabi-pasa` | İskenderiye'nin bombardımanı ve İngiliz çıkarması | 1 Ocak; 4 Şubat; 6 Eylül |
| 47 | olaylar_ek9.js | 1883-12-23 | `darfur` | Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın teslim | 6 Kasım |
| 88 | olaylar_ek5.js | 1884-02-01 | `muhammed-ahmed-el-mehdi` | Sevâkin — Mehdî'ye düşmeyen tek liman | 12 Ağustos; 8 Aralık; 30 Mayıs; 7 Eylül; 29 Nisan; 21 Ekim |
| 153 | olaylar_ek5.js | 1905-04-01 | `yemen` | San'a'nın İmam Yahyâ'ya kaybı | 1 Eylül |
| 209 | olaylar_ek6.js | 1912-03-13 | `yunanistan` | Sisam'ın Osmanlı idaresinden çıkışı | 8 Ekim |
| 83 | olaylar_ek6.js | 1912-07-17 | `yunanistan` | Nikarya'nın bağımsızlık ilanı | 8 Ekim |
| 44 | olaylar_ek5.js | 1912-10-15 | `trablusgarp` | Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya terki | 15 Ağustos; 3 Haziran; 1 Eylül |
| 73 | olaylar_ek2.js | 1912-11-03 | `edirne` | Edirne kuşatması başladı | 3 Temmuz; 9 Ağustos; 15 Nisan; 3 Şubat; 22 Ağustos; 20 Ocak |
| 46 | olaylar_ek5.js | 1913-11-14 | `yunanistan` | Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya'nın  | 30 Mayıs; 10 Ağustos; 29 Eylül |
| 95 | olaylar_ek6.js | 1916-07-27 | `hicaz` | Yenbu'nun Şerif Hüseyin kuvvetlerine kaybı | 30 Ekim; 10 Ocak |
| 110 | olaylar_ek.js | 1917-12-09 | `kudus` | Kudüs'ün kaybı | 7 Haziran; 17 Haziran; 14 Temmuz; 15 Temmuz; 7 Temmuz; 21 Ağustos |
| 32 | olaylar_ek5.js | 1918-05-25 | `kars` | Elviye-i Selâse: Kars ve Ardahan'ın geri alınışı | 3 Mart; 23 Nisan; 5 Kasım |
| 56 | olaylar_ek.js | 1920-03-16 | `istanbul` | İstanbul'un resmî işgali | 11 Mayıs; 24 Ağustos; 1 Eylül; 6 Kasım; 7 Kasım; 16 Eylül |

</details>

### ⚪ Zayıf kovalar

GUN-VERILMEMIS 31 · YIL-YOK 79 · AY-DUZEYI 3 — tam listeler `tarih_uyum.tsv`'de (scratchpad), `tarih_olc.py` yeniden üretir.

## 4. AŞAMA — başlık anahtar kelimesi ölçümü (Dömeke sınıfı)

ARAŞTIRMA BALKAN'ın önerisi üzerine eklendi. Sınıf: **künye canlı, madde var,
ama iddiayı İÇERMİYOR** (`yunanistan` maddesi Dömeke'yi hiç anmıyor — ölçümle
teyit edildi: gövdede "Dömeke" YOK, gerçek anlatım `tesalya` maddesinde).

**Yöntem:** canlı kaynaklı 921 maddenin `b:` başlığındaki ayırt edici özel
adlar (genel sözlük dışı, diakritik-normalize, kesme eki kırpılmış, 5 harf
önek) kaynak gövdesinde arandı. Başlıktaki HİÇBİR ayırt edici ad geçmiyorsa
listeye girdi. Şüphe listesidir; kısaltılmış/farklı yazımlar yanlış pozitif
verebilir.

### 🟣 KELIME-YOK (17 madde)

| dosya | `t:` | kaynak | madde başlığı | gövdede bulunamayan |
|---|---|---|---|---|
| olaylar_ek.js | 1394-01-01 | `yunanistan` | Teselya'ya iniş | Teselya'ya |
| olaylar_ek.js | 1897-05-17 | `yunanistan` | Dömeke Meydan Muharebesi | Dömeke |
| olaylar_ek2.js | 1793-06-01 | `nizam-i-cedid` | Londra'da ilk daimî elçilik | Londra'da |
| olaylar_ek4.js | 1832-07-08 | `kavalali-mehmed-ali-pasa` | Humus Muharebesi | Humus |
| olaylar_ek4.js | 1839-04-21 | `osmanlilar` | Osmanlı ordusu Fırat'ı geçti | Fırat'ı |
| olaylar_ek4.js | 1841-02-25 | `suriye` | Mısır ordusu Suriye ve Çukurova'yı boşalttı | Çukurova'yı |
| olaylar_ek5.js | 1482-06-01 | `osmanlilar` | Taman yarımadasının katılışı | Taman |
| olaylar_ek5.js | 1746-09-04 | `osmanlilar` | Kerden Antlaşması — Osmanlı-İran savaşlarının sonu | Kerden |
| olaylar_ek5.js | 1770-08-01 | `mustafa-iii` | Kartal (Kagul) Ovası Bozgunu | Kartal,Kagul,Ovası |
| olaylar_ek5.js | 1521-01-01 | `sakiz-adasi` | Nikarya (İkarya) adasının Osmanlı idaresine girmesi | Nikarya,İkarya |
| olaylar_ek5.js | 1723-10-01 | `bagdat` | Kirmanşah'ın alınışı — Zağros kapısı | Kirmanşah'ın,Zağros |
| olaylar_ek5.js | 1918-04-14 | `birinci-dunya-savasi` | Batum'un geri alınışı | Batum'un |
| olaylar_ek6.js | 1635-10-22 | `yemen` | Moha'nın tahliyesi | Moha'nın |
| olaylar_ek6.js | 1819-05-10 | `yanya` | Parga'nın Osmanlı idaresine bırakılması | Parga'nın |
| olaylar_ek6.js | 1912-07-17 | `yunanistan` | Nikarya'nın bağımsızlık ilanı | Nikarya'nın |
| olaylar_ek6.js | 1917-11-07 | `birinci-dunya-savasi` | Üçüncü Gazze Muharebesi — Gazze ve Han Yûnus'un kaybı | Üçüncü,Gazze,Gazze,Yûnus'un |
| olaylar_ek9.js | 1840-01-01 | `kavalali-mehmed-ali-pasa` | Taka bölgesinin fethi ve Kesela'nın kurulması | Taka,Kesela'nın |

## ARAŞTIRMA BALKAN teslimi — çapraz doğrulama (60/60 mutabık)

BALKAN'ın 31 Temmuz turu ölçümleri benim ölçümlerimle karşılaştırıldı:
33 ölü iddiasının 33'ü, canlı iddialarının tamamı bağımsız teyit edildi.
Yeni ölüler yukarıdaki EK ölü tablosuna girdi. İki ek bulgu:

1. 🔴 **`londra-antlasmasi` CANLI değil, KÜTÜK** — gövdesi "bk. KAVALALI
   MEHMED ALİ PAŞA" (1840 mukavelesi oraya yönlendirilmiş). 1913 Londra
   Antlaşması için kaynak GÖSTERİLEMEZ; `savaslar.js`'te 21 atıflı kullanım
   Tablo A'da kütük diye işaretli. BALKAN'a bildirilmeli.
2. `teselya` de KÜTÜK ("bk. TESALYA") — iki yazımdan asıl madde **`tesalya`**.

BALKAN'ın kayda geçen yönlendirme bilgisi (onların bulgusu, künye ölçümüyle
tutarlı): Cetinje ve Zeta için müstakil madde yok → kaynak `karadag`
gösterilmeli; `sabac`/`fethulislam`/`kladovo` → `bogurdelen`;
1739 Belgrad Antlaşması hükümleri → `belgrad` şehir maddesi.

## TARİH AVLARI — koordinatör görevi (2026-08-01, rapor anındaki HEAD: 2d45b17)

### ① Laudon'un Belgrad'ı alışı — TESLİM GÜNÜ BULUNDU

| bulgu | güç | dayanak |
|---|---|---|
| **Teslim: 1789-10-08** | **KESİN** | üç bağımsız kaynak: (1) ÇAĞDAŞ 1789 baskısı Löschenkohl gravürü, Wien Museum katalog kaydı: *"Die Belagerung von Belgrad ... im September 1789 bis zur Übergabe am 8. Oktober 1789"* — sammlung.wienmuseum.at/en/object/396156 · (2) King's College London Mozart & Material Culture projesi: *"Between 15 September and 8 October 1789 ... laid siege to the Ottoman forces at the fortress of Belgrade"* — mmc.kdl.kcl.ac.uk/entities/event/siege-belgrade/ · (3) SANU Belgrad kronolojisi: 7 Ekim'de alındı, Türkler 10 Ekim'e kadar çıktı — mi.sanu.ac.rs/muzej.beograd/d/eng/sad/hron_7.htm |
| Gün yayılımı: 7 Ekim müzakere/kapitülasyon · 8 Ekim teslim · 10 Ekim tahliye tamam | DESEN | SANU 7'sini, çağdaş gravür ve KCL 8'ini veriyor |
| Kuşatma başlangıcı: Sava geçişi 11-15 Eylül 1789 | DESEN | SANU 11 Eylül · KCL 15 Eylül |
| ⚠️ ÇELİŞKİLİ: habsburger.net *"am 8. Oktober 1788 die Eroberung Belgrads"* | ÇELİŞKİLİ | yıl öbür üç kaynakla ve Ziştovi 1791 iadesiyle bağdaşmıyor (Laudon'un 1788 seferi Dubica/Novi'dir); o sayfa KULLANILMAMALI |

⇒ ÇAPRAZ BATI paketi penceresi: **1789-10-08 → 1791-08-04** (bitiş Ziştovi'den zaten kesin). Veriye yazmak koordinatörün.

### ② Ragusa'nın ilk düzenli haracı — 1442 AKADEMİK KAYNAKLA DOĞRULANDI

| bulgu | güç | dayanak |
|---|---|---|
| **1442: yıllık 1.000 altın duka değerinde gümüş "hediye" yükümlülüğü** | **KESİN** | Vesna MIOVIĆ (HAZU Tarih Bilimleri Enstitüsü, Dubrovnik), Dubrovnik Annals 24 (2020) 65-95, s.67: *"According to the terms negotiated at the Porte in 1442, Ragusan ambassadors agreed that the Dubrovnik Republic would present the sultan with an annual gift of silverware worth 1,000 gold ducats."* — dizbi.hazu.hr/d17b118n/main/g/69/7mt/g697mtk79z81.pdf |
| Gün: YOK — elçiler Mart 1442'de Dubrovnik'e döndü (müzakere ondan önce bitti) | KESİN (ay); gün bilinmiyor | aynı makale: *"In March 1442, the ambassadors returned to Dubrovnik."* §76: gün uydurulmadı |
| 1442 hükümleri 1458 imtiyazında esasen TEKRARLANDI; kesin vasallık+haraç 1458 | KESİN | "The Legal Position of the Dubrovnik Republic against Turkey in the 15th and Early 16th Century..." (ejournals.eu, Krakow hukuk tarihi dergisi) |
| 1458 ahidnâmesi: Üsküp, 23 Ekim 1458 (kâtip Toma Katavoljin, Mehmed II) | KESİN | Miović 2020, s.68 |
| 1447'de iptal edilip 1458'de yeniden kurulduğu iddiası | **ZAYIF — DOĞRULANAMADI** | yalnız bir arama özetinde geçti; alıntılanabilir pasaj alınamadı (hrcak PDF inmiyor, ejournals tam metni sertifika hatası). **Bulamadım — negatif sonuç.** 1442-1458 kesintisizliği AÇIK soru |

⇒ 1442 satırı artık Vikipedi'ye değil Miović/HAZU'ya dayanabilir: **1365 (500 duka, TDV) → 1442 (1.000 duka, Miović) → 1458 (1.500 duka, TDV+veri)**.
