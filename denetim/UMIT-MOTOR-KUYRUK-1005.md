# UMIT-MOTOR-KUYRUK-1005 — yama kuyruğu envanteri

## ÖNGÖRÜ (ölçümden ÖNCE yazıldı)
- Kuyruk: `denetim/*.diff` = 11 dosya (arsiv-yama/ hariç).
- Motor tuzuna dokunanlar: BILINEN-ALAN (girdi.py) · BOZUK-KIYI, V-KID, epok-yorum (uret_petek.py) · boyalar (renkler.py) = 5. Öteki 6 tuzda DEĞİL.
- `apply --check`: tuz yamaları motor donduğu için TEMİZ; ARAYUZ yamaları (js/app.js ×2, suzgec.js, savaslar.js) HEAD/main'den uzaklaştığı için 2-4 tanesi BAYAT.
  Tahmin: 11'den 8 temiz, 3 bayat.
- Çakışma: uret_petek.py'ye üç yama dokunuyor; en az bir çift aynı bölgede (epok-yorum ↔ V-KID veya BOZUK-KIYI) bekleniyor.

## ÖLÇÜM (HEAD `makine/umit` ve `origin/main` 707b4b12; `git apply --check` hem çalışma ağacı hem --cached)
| Yama | Dosya | TUZDA | check |
|---|---|---|---|
| ARAYUZ-0930-halka-zaman | js/app.js | hayır | TEMİZ |
| ARAYUZ-0930-isyan-yayilma | js/app.js | hayır | TEMİZ |
| ARAYUZ-0930-kapi-dom-sozlesmesi | arac/denetle_yayin.py | hayır | **BAYAT** (3. hunk: `return 1` önündeki `or _paket_ihlali` bağlamı değişmiş; hunk 1-2 ofsetle girer) |
| ARAYUZ-0930-katalan-f | data/savaslar.js | hayır | TEMİZ |
| ARAYUZ-0930-komsu-aile | js/suzgec.js | hayır | TEMİZ |
| DEGISMEZ-0086-durum_tablosu | arac/durum_tablosu.py | hayır | TEMİZ |
| MOTOR-BILINEN-ALAN-1004 | arac/girdi.py (229) | **EVET** | TEMİZ |
| MOTOR-BOZUK-KIYI-1001 | arac/uret_petek.py (4080) | **EVET** | TEMİZ |
| MOTOR-V-KID-1004 | arac/uret_petek.py (5730, 7597) | **EVET** | TEMİZ |
| YAMA-MOTOR-0930-boyalar | arac/renkler.py (834, 2155, 3241) | **EVET** | TEMİZ |
| YAMA-MOTOR-0930-epok-yorum | arac/uret_petek.py (4655) | **EVET** | TEMİZ |

**11 yama: 10 TEMİZ, 1 BAYAT** (kapi-dom-sozlesmesi; tuzda değil, koşuyu etkilemez ama sessizce reddedilir). Öngörü 8/3 idi: yanıldım, ARAYUZ yamalarının çoğu bayatlamamış. Tuzdaki 5'in 5'i temiz (motor donuk).
`makine/umit` deposunda ve `origin/main`de aynı sonuç.

## ÇAKIŞMA
uret_petek.py'ye 3 yama: hunk başlangıçları 4080 · 4655 · 5730 · 7597 — ayrık. 10 temiz yama `origin/main` üstüne ARDIŞIK `apply --cached` ile hatasız girdi (sıra önemsiz). Çakışma YOK.

## ÖNGÖRÜLEN KALEMLER (diff olarak YAZILMAMIŞ — bu tarama bulmadı)
girdi.py `koy_kur`+`capa_ad` · Dobruca rengi `#5ad224` · "1923-11-01" sabitleri · 27 UFUK sabiti: `denetim/*.diff` içinde karşılığı yok; tam inşadan önce yamaya çevrilmeli. Hiçbir yama uygulanmadı, motor tuzuna dokunulmadı.
