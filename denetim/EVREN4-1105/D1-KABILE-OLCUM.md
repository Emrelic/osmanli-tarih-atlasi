# Kasıtlı boşluk noktaları Değişmez 1'e giriyor mu? — KASA SALI ölçümü (gece-125, EMRELİC sorusu)

Ölçüm KASA'da, kasa-1104-kronoloji ağacında (origin/main ile eş) yapıldı. `denetle.py`'ye dokunulmadı. Betik `d1_belgeli.py`, denetle'nin `degismez1()` fonksiyonunu ve 1c'nin `_belgeli` ölçütünü aynen kullanıyor.

## Cevap: GİRİYOR

`kasitli_bosluk:true` + `bos:"kabile"` noktaları BEKLENEN_SAHIPSIZ sayımına **giriyor**; belgesiz sayımına (1c) girmiyor.

**Kod:**
- `degismez1()` (denetle.py:1268) sahipsizliği yalnız `d:`/`s:`/`v:` dönemlerinden ölçüyor. `kasitli_bosluk`'u ve `bos:`'u hiç okumuyor; yalnız `kur:` ve `bit:` muaf.
- Yorum denetle.py:300'de: "`degismez1()` `kasitli_bosluk` alanini HIC OKUMUYOR (tasarim geregi)".
- Kapı denetle.py:6878: `if n1 > BEKLENEN_SAHIPSIZ: ihlal = True`. Bayrağa bakmadan bloke ediyor.
- Değişmez 1c (denetle.py:6911): `_belgeli(y) = kasitli_bosluk is True or neden dolu or bos dolu`. "Sahipsiz VE belgesiz" sayısı ayrı tavanla (BEKLENEN_BELGESIZ = 4) ölçülüyor.

**Sayım (bugün):**

| ölçü | sayı |
|---|---|
| Değişmez 1 sahipsiz | **311** (= BEKLENEN_SAHIPSIZ 311) |
| bunlardan `kasitli_bosluk:true` | **275** |
| bunlardan `bos:"kabile"` | **149** (girdideki 153 kabile noktasından) |
| bos cinslerine göre | kabile 149 · devletsiz 108 · veri-yok 36 · insansiz 9 · hata 3 · col 1 · (yok) 5 |
| 1c belgesiz | **3** (Agadez, Hadramut, Darfur; tavan 4) |

## Sonuç

- LAB'ın Kunashiri/Ainu, Kpelle ve Acholi önerileri `kasitli_bosluk` + `bos:"kabile"` ile yazılırsa **1c'yi artırmaz** (belgeli), ama **Değişmez 1'i (311) artırır**. Push kapısı `denetle` çıkış 1 verir ve kayıt kadar tavan açılmadan geçmez.
- Geçmişte yapılan da tam buydu (denetle.py:137-236 yorumları): "Artisin tamami KASTEN SAHIPSIZ", tavan aynı commit'te açıldı, 1c sabit kaldı.
- CLAUDE.md "Tavan onayı sorulmaz" kuralına göre oturum aşımın kaynağını ölçüp tavanı açabilir ve sonradan raporlar.
- ⚠️ Ama EMRELİC gece-134 kuralı (LAB SALI DEĞİŞMEZ 1 UYARISI): "BEKLENEN_SAHIPSIZ artıyorsa o dilimde önceki sahip korunur". Bu kural, kabile beyanıyla tavan açmayı bu gece fiilen yasaklıyor.
- **Emre'ye giden soru doğru biçimiyle:** "kabile toprağı beyanı (belgeli boşluk) için BEKLENEN_SAHIPSIZ açılabilir mi, yoksa önceki sahip mi korunur?" "D1'i artırmadan uygulanabilir" doğru DEĞİLDİR; artırır, yalnız belgesiz sayacı artırmaz.
- Alternatif (araç değişikliği, Emre'nin kararı): kapının ölçütünü 1c'ye (belgesiz) taşımak ve D1'i yalnız bilgi satırı yapmak. denetle.py:300-312 yorumları bu yönü zaten tartışıyor.
