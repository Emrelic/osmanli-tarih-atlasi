# LAB — TAHTA-SUNUCU-LAB-1010: sunucu açıldı, K3 kısmen ölçüldü (10 Ekim 2026)

> Jeton, port ve adresler bu dosyada YOK — hepsi LAB'daki `C:\atlas-tahta\oturumlar\ag.json`da (gitignore, `.gitignore:271`).
> Kesme (`kes --uygula`) ve K1 yaması (`tahta_kesme.py:306`) koordinatörde; LAB dokunmadı.

## Kurulum
- Sunucu ağacı: `C:\atlas-tahta` = yerel `main` worktree'si, `origin/main` **9d2a0d138**'e ff (sunucu `_git()` ile commit+pull+push yaptığı için ayrık değil, `main` üzerinde).
- `ag.json` LAB'da YOKTU ⇒ yeni yazıldı: `jeton` (43 karakter, `secrets.token_urlsafe(32)`) · `tahta_sunucu` · `makineler` (5 makinenin tailnet adresi).
  🔴 Jeton LAB'da ÜRETİLDİ — `acici` (EMRELIC) jetonuyla ORTAK DEĞİL. İstemcilere güvenli kanaldan (Emre) dağıtılmalı; mesaja/tahtaya girmez.
- Başlatma: `py arac/tahta_sunucu.py --gunluk C:\lab-araclar\tahta\tahta_sunucu.log` (gizli pencere, ayrık süreç).
  Günlük repo DIŞINDA, çünkü `oturumlar/tahta_sunucu.log` gitignore'da DEĞİL.
- Açılış satırı: `TAHTA SUNUCUSU ayakta · makine=LAB · 0.0.0.0:<port> · son M-5910 · imza bde932d98879`.
- ⚠️ Kilit dosyası `oturumlar/tahta.json.sunucu` gitignore'da DEĞİL (`?? ` olarak duruyor). `tahta.py:646` `git add -- <yol>` açık yolla eklediği için commit'e GİRMİYOR — ama `.gitignore`a eklenmesi önerilir.

## ① Tailnet adresi
`tailscale ip -4` → koordinatörün verdiği adresle AYNI (teyit).

## ③ K3 ölçümü
| | soru | sonuç |
|---|---|---|
| ⓐ | loopback `GET /tahta/oku` jetonlu | **200**, 17.237.898 B |
| ⓐ' | loopback jetonsuz | **401** (jeton kapısı çalışıyor) |
| ⓐ'' | LAB'dan kendi tailnet adresine | **200** — ⚠️ yerel yığından geçer, güvenlik duvarını SINAMAZ |
| ⓑ | EMRELIC · HAVVA · KASA · UMIT → LAB:port | **ÖLÇÜLEMEDİ — 0/4** (tek taraflı ölçülemez; her makinede bir oturum gerekir) |
| ⓒ | LAB güvenlik duvarı portu Tailscale arayüzünde geçiriyor mu | **ÖLÇÜLEMEDİ** — `Get-NetFirewallRule` "Erişim engellendi" (yönetici yok). Profil: Tailscale = Private, Ethernet = Private; üç profil Enabled, DefaultInboundAction NotConfigured (= varsayılan Block). Python için gelen kural OKUNAMADI. İlk gelen bağlantıda Windows izin penceresi çıkabilir. |
| ⓓ | dört makinenin `ag.json`'ında `tahta_sunucu` doğru mu | **ÖLÇÜLEMEDİ** — gitignore ⇒ paylaşılmıyor; LAB yalnız kendininkini yazdı ("kaydı paylaşılmayan" sınıfı). |

## ④ `izinli_ip` kapısı — İKİ YÖN (fonksiyon düzeyinde, `arac/tahta_sunucu.py:440`)
- KABUL (beklenen ✓): 100.71.77.116 · 100.65.53.62 · 100.64.0.1 · 100.127.255.254 · ::ffff:100.71.77.116 · 127.0.0.1 · 192.168.1.164 → hepsi True.
- RED (beklenen ✓): 8.8.8.8 · 1.1.1.1 · 100.63.255.255 (aralığın hemen altı) · 100.128.0.0 (hemen üstü) → hepsi False.
- ⚠️ YAN BULGU: 203.0.113.5 (TEST-NET-3, RFC 5737) → **True**. Python'un `is_private`'ı belge aralıklarını (192.0.2/24, 198.51.100/24, 203.0.113/24) da "özel" sayıyor. İnternette yönlendirilmeyen aralıklar ⇒ gerçek risk düşük, ama "yalnız yerel ağ/loopback/Tailscale" cümlesi tam DEĞİL. Daraltma önerisi (uygulanmadı): `is_private` yerine RFC1918 + loopback + link-local + CGNAT açık listesi.
- Sınır: kaynak adresi taklit edilemediği için HTTP düzeyinde genel adresten istek SINANMADI; kapı fonksiyonu ölçüldü.

## ② İstediğim
1. ⓑ için her makinede bir oturumda tek komut (jeton o makinenin `ag.json`ında olmalı):
   `py -c "import json,urllib.request as u;a=json.load(open('oturumlar/ag.json'));r=u.Request('http://'+a['tahta_sunucu']+'/tahta/oku',headers={'X-Atlas-Jeton':a['jeton']});print(u.urlopen(r,timeout=10).status)"` → beklenen 200.
   Önce jeton güvenli kanaldan dağıtılmalı ve `tahta_sunucu` alanı dört makinede LAB'ı göstermeli.
2. ⓒ için LAB'da yönetici yetkisiyle gelen kural kontrolü/ekleme — Emre'nin onayı gerekir (sistem ayarı).
3. `oturumlar/tahta.json.sunucu` ve `oturumlar/tahta_sunucu.log` `.gitignore`a.

## §EK — 10 Ekim 18:20: jeton döndürüldü, sunucu yeniden başladı, Taildrop (jeton bu dosyada YOK)
- Sunucu ağacı `C:\atlas-tahta` → `origin/main` **fd56b9056**'ya ff. Sunucunun OKUDUĞU ayar: `C:\atlas-tahta\oturumlar\ag.json`
  (`tahta_sunucu.py:115-116` `KOK/oturumlar/ag.json`, KOK = `C:\atlas-tahta`) — `ag_ayarla.py --yol` ile aynı dosya.
- `py arac/ag_ayarla.py --uret --yol C:\atlas-tahta\oturumlar\ag.json` → çıkış 0, 43 karakter, son 4 hane `eDAY`; `makineler` (5) korundu.
- Eski süreç KENDİ PID'iyle düşürüldü (4600 python + 5192 py başlatıcı). Kilit (pid 4600) kaldı; yeni süreç onu
  "BAYAT SUNUCU KİLİDİ devralındı (süreç ölü)" diye devraldı — çıkış 4 VERMEDİ. Yeni sunucu pid **2108** (başlatıcı 2204), `son M-5925`.
- Doğrudan HTTP (yeni jetonla, `X-Atlas-Jeton`): loopback **200** · LAB tailnet adresi **200**.
- 🔴 HATA — `arac/ag_ayarla.py:83` `--sina` jetonu **`X-Tahta-Jeton`** başlığıyla gönderiyor; sunucu **`X-Atlas-Jeton`** bekliyor
  (`tahta_sunucu.py:748`). ⇒ `--sina` DOĞRU jetonla bile **401 → "JETON YANLIŞ"** basıp **çıkış 4** veriyor (LAB'da ölçüldü),
  üstelik "ağ ve güvenlik duvarı TAMAM" diye yorumluyor. Dört makinede `--sina` koşulursa hepsi sahte "jeton yanlış" görür.
  Tek satırlık çare (UYGULANMADI): `headers={"X-Atlas-Jeton": jeton}`.
- Taildrop: `tailscale file cp ag.json <makine>:` → emrelic · havva · kasa · umit dördü de **çıkış 0**.
  ⚠️ emrelic için "is not replying; trying anyway" uyarısı — teslim kuyruğa alınmış olabilir, alındığı DOĞRULANMADI.
  Taildrop dosyayı alıcının İndirilenler'ine bırakır; her makinede `oturumlar/ag.json`a taşınmalı ve İndirilenler'deki kopya silinmeli
  (sır orada açıkta durur).
- ④ `ikizler1`: **LAB'ın Windows kullanıcı adı `ikizler1`** (`$env:USERNAME`, hostname LAB). Sunucu günlüğünde bugüne kadar
  LAB dışından TEK istek yok (kaynaklar yalnız 127.0.0.1 ve LAB'ın kendi tailnet adresi). Emre'nin `socket.create_connection`
  testi HTTP olmadığı için günlüğe düşmez. ⇒ Test büyük olasılıkla LAB'da koştu (kendi tailnet adresine = yerel yığın) ve
  güvenlik duvarı hakkında HİÇBİR ŞEY kanıtlamıyor. ÖLÇÜLEMEDİ kalan: öteki makinelerde de kullanıcı adı `ikizler1` mi —
  LAB'dan bakılamaz. Güvenlik duvarı kalemi AÇIK.
