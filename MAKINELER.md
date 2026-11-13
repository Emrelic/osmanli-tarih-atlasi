# MAKİNELER — donanım ve roller

Emre'nin 13 Kasım 2026 kararı. Donanım her makinenin kendi 13 Kasım oturumunda ölçüldü
(PowerShell `Win32_Processor`, `Win32_ComputerSystem`, `Get-PSDrive`). Donanım değişirse bu
tablo yeniden ölçülüp güncellenir.

## Donanım (ölçüm 13 Kasım 2026)

| Makine | İşlemci | Çekirdek / iş parçacığı | RAM | Disk boş | Kısıt |
|---|---|---|---|---|---|
| **HAVVA** | Intel i5-1135G7 2,4 GHz | 4 / 8 | **23,7 GB** | C: 130,7 GB | eczane makinesi — mesaide düşük öncelik, mesai sonrası tam güç |
| **UMIT** | Intel i5-1135G7 2,4 GHz | 4 / 8 | 15,7 GB | C: 200 GB | eczanenin ana makinesi, SQL Server burada — mesaide Claude+Python ≤%25, boş RAM ≥4 GB |
| **EMRELİC** | Intel i5-8250U | 4 / 8 | 11,9 GB | C: 652 GB | Emre'nin dizüstüsü, eczane↔ev taşınır — kısıt yok |
| **KASA** | Intel i5-3330 3,0 GHz (2012) | 4 / 4 | 15,9 GB | D: 85 GB | sabit, eczane işi yok — işlemci zayıf; coz-c'de bellek yetmediği oldu |
| **LAB** | Intel i5-4430S 2,7 GHz | 4 / 4 | 7,9 GB | C: 53,6 GB (D: dolu) | en zayıf; büyük ekran (1920×1080), eczanede arka oda |

İşlemci sırası (aynı yük): HAVVA ≈ UMIT > EMRELİC > KASA ≈ LAB. RAM sırası: HAVVA > KASA ≈
UMIT > EMRELİC > LAB.

## Roller

| Rol | Makine | Neden |
|---|---|---|
| Koşu + iniş | HAVVA | en güçlü. İnişin push'unu kendisi yapar (üretilmiş `data/*.js` HAVVA'nındır); kapıya girmeden KASA'dan sıra alır, o sırada KASA'da kapı koşmaz |
| Birleştirme + push kapısı + genel koordinasyon | KASA | `main`e tek yol tek makinede olmalı (kilit yalnız kendi makinesini görür). Sürekli açık, sabit. İçerik yazmaz: kapı koşarken paralel ağır iş RAM'i bitirir |
| Araştırma + yazma — ana hat | EMRELİC | kısıtsız. Araştıran yazar: kaynağın inceliği el değiştirirken kaybolur |
| Araştırma + yazma — hafif hat | UMIT | mesai kuralıyla tek iş/tek ajan; mesai dışında 2 ajan |
| Denetleme + Emre'nin mesai ekranı | LAB | yazandan bağımsız göz: dal diff'i okuma (Değişmez 2, gün, kaynak, künye) ve yayın sonrası sitede kronoloji↔harita bakışı. Ağır betik koşturmaz |

**Kullanıcı bakışı:** mesaide LAB ekranı, evde EMRELİC.
**Post-it oturumları:** araştırma + yazma makinelerinde (UMIT; EMRELİC açıkken o da). Notu
alan oturum düzeltmeyi dalda commit'ler, `origin`e iter, KASA birleştirir.
**Post-it dağıtıcısı (EMRELİC, 13 Kasım 2026):** EMRELİC'te tek bir dağıtıcı oturum
`py arac/not.py sahipsiz-bekle` ile (arka planda, 3-5 dk'da bir yalnız GitHub'a bakar, model
çalışmaz) yeni sahipsiz notu bekler; bulunca `/postit <no>` için yeni oturum açar — **aynı anda en
çok 1 post-it oturumu**, motor/geometri notu Opus, öteki Sonnet. Oturum "yazma-makinesi kipi"nde
denetle/paketle/damga/kapı koşturmaz; düzeltmeyi `postit-<no>` dalına iter ve KASA'ya bildirir
(`.claude/skills/postit/SKILL.md` 0. adım). Dizüstü kapağı kapalıyken uyumaz (Emre ayarladı).

## Komuta zinciri ve haberleşme

KASA'nın günlük koordinasyon oturumu (genel koordinatör) → her makinenin günlük oturumu
("<MAKİNE> 13 KASIM" gibi; o makinenin koordinatörü) → o makinedeki öteki oturumlar.
Haberleşme: Remote Control üzerinden `SendMessage`. Her makinede `\Claude-RC-Bekci` görevi
(`C:\eczane-rc\`) Remote Control döngüsünü ayakta tutar — **kapatılmaz**.

## Emekli sistemler (Emre, 13 Kasım 2026)

Tahta ve kutu atlas için kullanılmıyor; post-it sistemiyle (GitHub Issues + `arac/not.py` +
`js/gelistirici.js`) ilgileri yok. Yapılan:
- LAB: `tahta_sunucu.py` süreci kapatıldı; açılıştaki `Startup\atlas-tahta.vbs` →
  `atlas-tahta.vbs.emekli` (silinmedi).
- KASA: `\ClaudEmre Kutu Esitle` zamanlanmış görevi devre dışı.
- EMRELİC: `\ClaudEmre-gece-kipi` (`C:\claudemre\kutu\gece-kipi.bat`) devre dışı.
- HAVVA, UMIT: çalışan tahta/kutu süreci yoktu; `\ClaudEmre Kutu Esitle` zaten devre dışıydı.
