# Kunye - boya eslemesi (RENK-1103 c)

Olcum: salt-okunur, `denetim/RENK-1103/kunye_boya_eslesme.py`. Ham: `kunye_boya_eslesme.json`.

Motor kurali (uret_petek.py ~1111-1148): boya anahtari = `s.d`; BOYALAR'da yoksa kunyenin `harita:` alani; o da BOYALAR'da yoksa gövde BOYANMAZ. renk_olc.py'nin kunye penceresi ise `harita or id` kullanir. Bu rapor ikisini ayri sayar.

## Sayilar

- devletler_js_kayit: **2279**
- BOYALAR_kimlik: **2187**
- kunye_harita_alani_yok: **1922**
- kunye_harita_yok_ama_id_BOYALARda: **1890**
- kunye_harita_yok_ve_id_BOYALARda_yok: **32**
- kunye_harita_var: **357**
- kunye_harita_var_ama_anahtar_BOYALARda_yok: **0**
- kunye_motor_anahtari_yok_BOYASIZ: **32**
- boya_gerekli_isaretli: **508**
- boya_gerekli_ve_BOYASIZ: **26**
- boya_gerekli_ama_artik_boyali_isaret_bayat: **482**
- BOYALAR_yetim_kunyesiz: **3**
- yerlesim_s_d_ayri_kimlik: **1722**
- s_d_BOYALARda_yok: **84**
- s_d_BOYALARda_yok_ama_harita_ile_yonlenen: **83**
- s_d_GERCEKTEN_boyasiz_(__BOSLUK__ haric): **0**
- s_d_BOSLUK_donem: **683**
- s_d_kunyede_yok_ve_BOYALARda_yok: **1**

## 1. `harita:` alani OLMAYAN kunyeler (1922)

- id'si BOYALAR'da olan (sorun yok): 1890
- id'si BOYALAR'da olmayan: **32** (hepsi boyasiz; asagida)

### 1a. Boyasiz kunyeler (motor anahtari yok) - toplam 32

| id | boya_gerekli | f → t | bolge | harita |
|---|---|---|---|---|
| afrasiyabiler | evet | 1612-03-04 → 1668-02-25 | mezopotamya | - |
| alevi-devleti-lazkiye | evet | 1920-08-31 → 1936-01-01 | suriye-filistin | - |
| azerbaycan-milli-hukumeti | hayir | 1945-12-12 → 1946-12-12 | iran | - |
| baban-emirligi | evet | 1669-01-01 → 1850-01-01 | mezopotamya | - |
| bohtan-emirligi | evet | 1821-01-01 → 1847-07-29 | mezopotamya | - |
| cebel-durzi-devleti | evet | 1922-04-05 → 1937-01-01 | suriye-filistin | - |
| cizre-emirligi | evet | 1508-01-01 → 1627-01-01 | mezopotamya | - |
| gojoseon | evet | -2332-01-01 → -0193-01-01 | dogu-asya | - |
| halep-devleti | evet | 1920-09-01 → 1925-01-01 | suriye-filistin | - |
| hou-liang-lu-guang | evet | 0386-01-01 → 0403-01-01 | dogu-asya | - |
| ingiliz-mezopotamya-idaresi | evet | 1914-11-06 → 1921-08-23 | mezopotamya | - |
| ingiliz-tanca | evet | 1661-01-01 → 1684-02-01 | kuzey-afrika | - |
| irak-sam-islam-devleti | evet | 2014-06-29 → 2019-03-23 | mezopotamya | - |
| iskenderun-sancagi-ozel-idare | evet | 1921-10-20 → 1938-09-02 | suriye-filistin | - |
| ispanyol-halkulvad | evet | 1535-07-01 → 1574-08-24 | kuzey-afrika | - |
| ispanyol-oran-1 | evet | 1509-05-17 → 1708-01-01 | kuzey-afrika | - |
| ispanyol-oran-2 | evet | 1732-01-01 → 1792-09-12 | kuzey-afrika | - |
| kafkas-arnavutlugu-krallik | hayir | -0065-01-01 → 0252-01-01 | kafkasya | - |
| kaheti-hereti-kralligi | hayir | 1010-01-01 → 1104-01-01 | kafkasya | - |
| koch-bihar | evet | 1515-01-01 → 1949-01-01 | guney-asya | - |
| kolcak-omsk-hukumeti | evet | 1918-11-18 → 1920-01-04 | sibirya-bozkir | - |
| misir-gazze-idaresi | evet | 1949-02-24 → 1967-06-05 | suriye-filistin | - |
| muntefik-basra | evet | 1694-08-22 → 1697-07-20 | mezopotamya | - |
| oeta-bati-fransiz | evet | 1918-10-08 → 1920-09-01 | suriye-filistin | - |
| oeta-guney | evet | 1917-10-31 → 1920-07-01 | suriye-filistin | - |
| polonya-naiplik-kralligi | hayir | 1916-11-05 → 1918-11-11 | dogu-avrupa | - |
| sam-devleti | evet | 1920-09-01 → 1925-01-01 | suriye-filistin | - |
| sistan-mihribani | hayir | 1236-07-19 → 1543-01-01 | iran | - |
| sunik-kralligi | hayir | 0970-01-01 → 1170-01-01 | kafkasya | - |
| trinh-lordlari | evet | 1545-01-01 → 1786-01-01 | guneydogu-asya | - |
| tripura-manikya | evet | 1279-01-01 → 1949-10-15 | guney-asya | - |
| xi-liang-li-gao | evet | 0400-01-01 → 0421-01-01 | dogu-asya | - |

## 2. `harita:` anahtari BOYALAR'da OLMAYAN kunyeler (0)

yok

## 3. `boya_gerekli:true` (508 kunye)

- hala boyasiz: **26**
- artik motor anahtari olan (isaret bayat): 482

## 4. Yerlesim `s:[{d}]` / `v:[{d}]` kimlikleri (1722 ayri kimlik)

- BOYALAR'da olmayan: **84** kimlik (3150 donem; `__BOSLUK__` 683 donem dahil, o delik)
- bunlardan `harita:` ile BOYALAR'a yonlenen (boyali): **83**
- GERCEKTEN boyasiz (`__BOSLUK__` haric): **0** (0 donem)
- devletler.js'te de BOYALAR'da da olmayan (`__BOSLUK__` dahil): 1


## 5. Yetim boya (BOYALAR'da olup hic bir kunyenin id/harita'si olmayan): 3

britanya-imp, monte-alban-zapotek, tikal-mutal
