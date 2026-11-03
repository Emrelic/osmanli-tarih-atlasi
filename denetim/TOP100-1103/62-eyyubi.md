# 62 · Eyyûbîler — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer iki kez koşturuldu; ikinci koşu "otomatik dönem ucu" satırlı sürüm)

## Özet
- Künye 7 (eyyubi, -halep, -hama, -meyyafarikin, -yemen, -kerek, -hisnikeyfa). Ölçer ⚠ (harita anahtarıyla yazılmış s:) satırı VERMEDİ.
- Açık kırılma: eyyubi 2 (Bitlis 1208, Nusaybin 1209) + Hama 1 (1299) = 3; otomatik "dönem ucu" maddesiyle kapanan: 0. Halep/Yemen/Hısnıkeyfâ 0 açık.
- En ağır 3 bulgu: (1) `eyyubi-meyyafarikin` ve `eyyubi-kerek` künyeleri haritada 0 yerleşim — s: dönemleri hâlâ `eyyubi` ya da `__BOSLUK__` yazıyor; verideki "BOYALAR'da YOK" beyanı BAYAT (arac/renkler.py:972 ve :1161'de ikisi de tanımlı). (2) Halep künyesi t 1260-09-03 (Aynicâlût) — Halep kolunun sonu Ocak/Şubat 1260 (Hülâgû); künye kendi ic_not'unda gerekçeli ama Halep şehri için sahiplik 1260 başında Moğol'a geçiyor. (3) Hama kolu 1299'da biter (harita ömrü 1299), künye t 1342; TDV Ebü'l-Fidâ'ya göre Hama 1310'dan itibaren yeniden Eyyûbî soyundan yönetildi → 1310-1342 dilimi eksik.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| eyyubi | Eyyûbî Sultanlığı | 1171-09-13 | 1250-04-30 | Doğru (TDV gün verir). 24 yerleşim, en geniş 1219: 16 |
| eyyubi-halep | Halep Eyyûbîleri | 1186-01-01 | 1260-09-03 | f TDV yıl; t tartışmalı (b). 4 yerleşim |
| eyyubi-hama | Hama Eyyûbîleri | 1178-01-01 | 1342-01-01 | 1 yerleşim, s: 1299'da bitiyor — tutarsız |
| eyyubi-meyyafarikin | Meyyâfârikîn (Cebel-Sincar) | 1185-01-01 | 1260-01-01 | HARİTADA YOK (0 yerleşim) |
| eyyubi-yemen | Yemen Eyyûbîleri | 1174-01-01 | 1229-01-01 | 5 yerleşim, iyi |
| eyyubi-kerek | Kerek (en-Nâsır Dâvûd) | 1229-01-01 | 1249-04-16 | HARİTADA YOK; atlasta Kerek/Karak yerleşimi bulunamadı |
| eyyubi-hisnikeyfa | Hısnıkeyfâ | 1232-01-01 | 1462-01-01 | 2 yerleşim (Hasankeyf vb.), iyi |
Eksik evre/parça: Şam/Dımaşk kolu ayrı künye DEĞİL (eyyubi altında izleniyor; baskent alanı "Kahire/Dımaşk"); Humus kolu (1263'e dek, TDV eyyubiler) künyesiz. Öneri: Dımaşk 1250-1260 için halep künyesi zaten yazılı; Humus ayrı künye gerekmez, eyyubi-halep/Memlük arası boşluk kontrolü yap.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| eyyubi f | 1171-09-13 | TDV eyyubiler: "10 Muharrem 567 / 13 Eylül 1171" (okundu) | Treccani ayyubidi (İng. çeviri sayfası): 1171 (567 H.), Selahaddin Fâtımî halifesini kaldırdı (gün yok) | TAMAM |
| eyyubi t | 1250-04-30 | TDV eyyubiler: "30 Nisan 1250 tarihinde sultanı öldürdüler" | Wikipedia-tipi sayfalar 2 Mayıs 1250 der (DAYANAK DEĞİL); akademik ikinci kaynak ÇEKİLEMEDİ (Humphreys, From Saladin to the Mongols 1977 — bkz. Erişilemeyen) | TDV esas; kal. 2 Mayıs farkı TDV'ye ait çelişki beyanı ic_not'a eklenebilir |
| halep t | 1260-09-03 | TDV eyyubiler: Halep "1260 yılı başlarında" zaptedildi; Aynicâlût 3 Eylül 1260 | TDV sam--suriye: Dımaşk Mart 1260 (künye ic_not'unda var) | Künye gerekçesi tutarlı (Filistin'de sürüyor); Halep şehri için sahiplik 1260 başında Moğol'a — s: dönemi kontrol (d) |
| hama t | 1342-01-01 | TDV eyyubiler: Hama "bazı aralıklarla 1342'ye kadar" | TDV ebul-fida: 1310 vali, 1312 melik, 1320 sultan "el-Müeyyed", ö. 1331 | Künye t doğru; HARİTA s: 1299'da kesilmiş (eksik) |
| hısnıkeyfâ t | 1462-01-01 | TDV eyyubiler: "1462'de Akkoyunlular'dan Uzun Hasan" | (2. kaynak çekilemedi) | yıl düzeyinde tamam |
| yemen t | 1229-01-01 | TDV eyyubiler/turan-sah: Yemen kolu 1174-1229 | Treccani: Resûlîler "625 H (1228)" — 1 yıl fark | TDV esas; fark ic_not'a "Treccani 1228" yazılabilir. TDV kendi içinde "1232'den sonra merkezle ilişki kesildi" der (çelişki) |
| meyyafarikin t | 1260-01-01 | TDV meyyafarikin: "658 (1260) yılına kadar" | TDV eyyubiler: Hülâgû bölgeyi "Bağdat'ın ertesi yılı" (1259) | 1259/1260 çelişkisi TDV içinde; künye 1260-01-01 gün yok, kabul |
Hicrî dönüşüm: 658 H ∩ 1260 → kesişimin ilk günü 1260-01-01 (hesap, doğrulanmadı).

## c) Kronoloji (Değişmez 2 evreni)
Var: kuruluş 1171-09-13 (olaylar_t5_1000b.js:24); Dımaşk 1174 (olaylar_t5_1000b.js:25); Yemen 1174 (olaylar_ortacag_ortadogu.js:139-140); Hama kolu 1178 (ortadogu:145); Halep 1183-06-12 (ortadogu:152); Meyyâfârikîn 1185 (:153); Halep kolu 1186 (:154); Hıttîn 1187-07-04 (:158); Kudüs'ün alınışı: evren dışı künye `kronoloji:[]` içinde 1187-10-02 var, Değişmez 2 evreninde YOK; Selâhaddin ö. 1193-03-04 (:164); Kudüs'ün Haçlılara iadesi 1229-02-24 (:182); Hısnıkeyfâ 1232 (:183); Mansûra 1250-04-07 (:195); Halep sonu 1260 (:199); Turanşah öldürülmesi 1250-04-30: Değişmez 2 evreninde YOK (ortadogu:193 yalnız "Memlüklerin Turan Şah'ı öldürmesinin ardından…" 1250-01-01 yıl düzeyi, tarih yanlış sırada: ölüm Nisan sonu, madde Ocak).
Eksik / önerilen:
```
{ t:"1187-10-02", b:"Selâhaddin Kudüs'ü Haçlılardan aldı (27 Receb 583)", yer_id:"Kudüs", kaynak:"TDV İslâm Ansiklopedisi, Selâhaddîn-i Eyyûbî (künye kronolojisinde zaten kayıtlı)" }
{ t:"1250-04-30", b:"Turan Şah öldürüldü; Mısır'da Eyyûbî hâkimiyeti sona erdi", yer_id:"Kahire", kaynak:"TDV eyyubiler: \"30 Nisan 1250 tarihinde sultanı öldürdüler\"" }
{ t:"1207-07-28", b:"Ahlat Ahlatşahlar'dan Eyyûbîler'e (el-Evhad) geçti", yer_id:"Ahlat", kaynak:"TDV ahlatsahlar (Faruk Sümer): son hükümdar Balaban 1207-08'de öldürüldü, Eyyûbîler Ahlat'ı aldı; TDV ahlat (604/1207-08) — gün yıl düzeyi; 07-28 yerleşim verisindeki f" }
{ t:"1260-01-01", b:"Hülâgû Halep'i aldı…", —} zaten var (ortadogu:199).
{ t:"1310-01-01", kesinlik:"yil", b:"Ebü'l-Fidâ Hama valisi oldu; Hama Eyyûbî soyunun yönetimine döndü (1312 melik, 1320 sultan)", yer_id:"Hama", kaynak:"TDV ebul-fida (okundu): 1310 vali, 1312 melik, 1320 sultan el-Müeyyed" }
{ t:"1331-01-01", kesinlik:"yil", b:"Ebü'l-Fidâ öldü (732)", yer_id:"Hama", kaynak:"TDV ebul-fida (hicrî 732; hesap, doğrulanmadı)" }
```
Tarih uyarıları: 1250-01-01 yıl-düzeyi madde gerçek günle (30 Nisan) çakışmıyor — ya düzelt ya yeni madde ekle.

## d) Harita uyumu
Açık kırılma 3 (+0 otomatik maddeyle kapanan). Üç açığın üçü de s: tarihleri:
| gün | yerleşim | öneri |
|---|---|---|
| 1208-01-01 kazanç | Bitlis | Ahlat 1207-08 Eyyûbî'ye geçti (TDV ahlatsahlar); madde yukarıda. Bitlis'in kendi tanığı yoksa Ahlat'a bağlı (abi merkez: Ahlat). Veri f 1208-01-01 yıl düzeyi: Bitlis kaynağı TDV bitlis kontrol |
| 1209-01-01 kazanç | Nusaybin | TDV nusaybin/ el-Eşref Cezîre fetihleri: kaynak çekilemedi; tanık madde (Eyyûbî el-Eşref 1209?) bulunamadı. Gün yoksa YYYY-01-01 beyanıyla "Cezîre bölgesi el-Eşref'e" maddesi yaz |
| 1299-01-01 kayıp | Hama | Memlük ilhakı 1299 (kaynak: TDV hama okunmalı) — madde + 1310'da yeniden eyyubi-hama s: |
Yerleşim sahipliği: en geniş yıl 1219 → 16 yerleşim (Kahire, İskenderiye vb.); sınır dışı şüpheli yer tespit edilmedi (yerleşim adları tek tek açılmadı — ölçülmedi). Haritada görünmeyen: eyyubi-meyyafarikin (0), eyyubi-kerek (0).
Hangi şehirlere s: gerekir: Meyyâfârikîn (atlasta nokta VAR: yerlesimler_ms1_1281_yeni.js:117; s: satırları 1185-1250 `eyyubi`, 1250-04-30→1264 `__BOSLUK__`) → 1185-1260 `eyyubi-meyyafarikin`, boşluk 1260-1264 ayrı karar; Sincar, Harran, Ahlat (1207-1230); Kerek (Karak) için nokta YOK — yeni yerleşim ("mükerrer tara").

## Önerilen düzeltmeler (KASA için)
1. data/yerlesimler_ms1_1281_yeni.js:8,125,127,128: "daha isabetli künye eyyubi-meyyafarikin BOYALAR'da YOK" beyanı bayat — arac/renkler.py:972'de VAR. Meyyâfârikîn 1250-04-30→1260 `d:"eyyubi-meyyafarikin"`; Ahlat 1207-07-28→1230 aynı. (Motor dondurma: renkler.py'ye dokunma; yalnız veri.)
2. eyyubi-kerek için Kerek (Karak, ~31.18N 35.70E) yerleşimi aç ve 1229-1249 s: yaz (TDV el-melikun-nasir-davud, künye kaynağında 626-647 tarihleri).
3. Hama: eyyubi-hama s: 1310-01-01→1342-01-01 (TDV ebul-fida) + 1299 Memlük ilhakı maddesi.
4. data/olaylar_ortacag_ortadogu.js:193: "1250-01-01" yıl-düzeyi → 1250-04-30 gün ve kaynak "TDV eyyubiler".
5. eyyubi-yemen ic_not'a Treccani 1228 farkı + TDV içi 1232 çelişkisi.
6. Dımaşk 1250-1260 sahipliği: eyyubi-halep.baskent "1250-1260 Dımaşk da" yazıyor ama Şam yerleşiminin s:'sinde eyyubi-halep var mı ölçülmedi — kontrol.

## Erişilemeyen kaynaklar
- R. Stephen Humphreys, From Saladin to the Mongols: The Ayyubids of Damascus 1193-1260 (SUNY 1977) — soru: Turan Şah'ın ölüm günü 30 Nisan mı 2 Mayıs mı, ve Şam'ın düşüş günü (Mart 1260)?
- Encyclopaedia of Islam², "Ayyūbids" (Cahen/Humphreys) — soru: Hama kolunun 1299-1310 kesintisi ve son sonlanışı (1341/42).
- Cambridge History of Egypt vol.1 (Petry) — soru: Mısır kolu t günü.
- Encyclopedia.com "Ayyubids" sayfası okundu ama yıl/dal sonlarını vermiyor (tarihleme için işe yaramadı).
