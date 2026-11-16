# BOLGE-rusya · Adım 1 — Künye envanteri (UMIT, 15 Kasım 2026, dal umit-1115c-rusya)

Taban `origin/kasa-1115-umit-birlesim` (c317d2d85). Ölçüm: `girdi.oku_devletler()` (2286 künye) + `girdi.yukle()` (5644 yerleşim); araçlar scratchpad'de, depoya yazılmadı. Kapsam: `bolge:dogu-avrupa` + Rusya/Litvanya/Polonya/Kırım-Altın Orda/Baltık-Karadeniz ilişkili 105 künye (regex), 91'i bu envanterde.

## Ölçülen
- Aktif künye (Rusya + Doğu Avrupa listesi): **91**; renksiz (`harita:`→BOYALAR) **0**.
- Yerleşimli (en az 1 `s:` penceresi künyeye ait): **80**; yerleşimsiz: **11** (aşağıda).
- Künye ömrü aşımı (D4c türü, künye f/t dışına taşan pencere): altinorda 24 pencere (1502-03-01 > t 1502-01-01), nijni-novgorod-suzdal 2 pencere (Nijniy Novgorod, Suzdal t 1392-01-01 > künye t 1391-01-01), rusya 1 pencere (Riga 1721→1917-09-03 > t 1917-03-15). `denetle` D4c'yi 0 raporluyor; bu üç aşım denetlenen ölçütün dışında kalıyor (ölçütü ben tanımladım, denetle'nin D4c kodu ayrıca okunmadı).
- Künyesi **olup yerleşimi olmayan 11**: hazar (0650-0965), pecenek-konfederasyonu (pecenek'in ikizi), yaroslavl-knezligi, beloozero-knezligi, gdansk-kral-sehri, kraliyet-prusyasi, budjak-ordasi, polonya-naiplik-kralligi, belarus-halk-cumhuriyeti, kolcak-omsk-hukumeti, memel-bolgesi. (Oct 24 tarihli KAPSAM-GUNCEL tablosundaki "s yok" 25 künyeden 14'ü sonradan pencere almış.)
- `harita:` ile başka renge bağlı: moskova→rusya, polonya-halk/-iii/polonya-genel-hukumeti→polonya, rusya-federasyonu→sovyet-rusya.

## Künye listesi (f/t; kısaltılmış, tam liste ölçüm çıktısından)
Kiev-rusu 0882-01-01→1240-12-06 · polotsk 0978→1307 · çernigov 1024→1239-10-18 · smolensk 1054→1404 · pereyaslavl 1054→1239-03-03 · ryazan 1127→1521 · novgorod 1136-01-01→1478-01-15 · vladimir-suzdal 1157→1281 · galiçya-volhinya 1199→1340 · livonya-tarikati 1202→1561-11-28 · litvanya-büyük-dukalık 1236→1569-07-01 · altınorda 1242→1502 · tver 1246→1485-09-12 · moskova 1283→1547-01-16 · pskov 1348→1510-01-13 · kazan 1437→1552-10-02 · kırım 1441→1783-04-19 · rusya 1547-01-16→1917-03-15 · zaporojye 1552→1775-06-16 · lehistan 1569-07-01→1795-10-24 · kazak-hetmanlığı 1648→1764-11-21 · geçici hükümet 1917-03-15→1917-11-07 · sovyet-rusya 1917-11-07→1991-12-26 · UNR 1917-11-20→1920-11-21 · … (Baltık/Polonya 1918-39, Ukrayna/Belarus/Moldova 1990-91).

## Künye içi bulgu (kaynakla çözülmemiş)
1. `moskova` künyesi: `kaynak:"bulunamadı — TDV'de müstakil maddesi yok"`; f 1283-01-01 kaynaksız (öteki künye listelerinde 1263 geçer: KAPSAM-GUNCEL satırı "Moskova Knezliği 1263"). **Hakem açık**: 1263 mü 1283 mü; Daniil'in apanaj tarihi akademik kaynakla okunmadı. Değiştirilmedi.
2. `moskova` künye-içi kronoloji: Novgorod teslimi **1478-01-14**, Tver **1485-09-08**; ana kronoloji (olaylar) 1478-01-15 ve 1485-09-12 — iki iç kayıt çelişiyor. Kronoloji maddeleri (adım 2) tarafında 15 Ocak / 12 Eylül çekirdek kabul; künye-içi satırlar hizalanmalı (öneri, kaynak: künye-içi kayıtta ebsco/tver.ru URL'si var, okunmadı).
3. Aynı polity iki id: `pecenek` / `pecenek-konfederasyonu`; `hazar` / `hazar-kaganligi` (dogu-avrupa + sibirya-bozkir). **Silinmedi**; öneri: yerleşimli olanı (pecenek, hazar-kaganligi) bırak, ikizi `harita:` ile bağla.
4. Eksik devlet için bkz. ABC belgesi (B).
