# MUKERRER-KAPI-0930 — mükerrer tavanı 117 → 114

*30 Eylül 2026 · koordinatör: YILDIRIM BAYEZIT*

## Sonuç
**117 → 114** (tavan 114, YÜKSELTİLMEDİ). `BEKLENEN_MUKERRER` değişmedi.

## ① Hangi 3 çift yeni — ölçüm
Alet: `denetim/ARAC-MUKERRER-KAPI-0930.py`. `denetle.py`yi modül olarak içe
aktarır, yalnız `olaylari_yukle` + `mukerrer_maddeler` çağrılır. HEAD evreni
`git show HEAD:data/<olaylar*|kronoloji_sinir*>` ile geçici dizine yazıldı.
Çalışma ağacına dokunulmadı, `git stash` kullanılmadı, tam `denetle.py` koşusu
yapılmadı.

```
ÇALIŞMA: 2152 madde · mükerrer 117
HEAD   : 2142 madde · mükerrer 114
YENİ 3 · GİDEN 0
```

🔴 **Koordinatörün ön ölçümü TUTMADI:** Nyiginya↔Kintu · Cahokia↔Grönland ·
Moundville↔Zimbabve çiftleri yeni üçlünün içinde **yok**. Yeni üç çiftin üçünde
de `olaylar_p0917dunya.js`e bugün eklenen **Kerkük** maddeleri var (TDV `kerkuk`):

| # | Madde A | Madde B | J | ortak kök |
|---|---|---|---|---|
| 1 | 1918-04-14 Batum'un geri alınışı · yer_id Batum | 1918-05-27 Kerkük'ün geri alınışı · yer_id Kerkük · kaynak kerkuk | 0,500 | geri, alinis |
| 2 | 1918-05-07 Kerkük'ün İngiliz işgali · kaynak kerkuk | 1919-01-23 Eskişehir'in İngilizlerce işgali · kaynak eskisehir | 0,500 | ngiliz, isgali |
| 3 | 1918-05-07 Kerkük'ün İngiliz işgali · kaynak kerkuk | 1919-02-22 Maraş'ın İngilizler tarafından işgali · kaynak kahramanmaras | 0,400 | ngiliz, isgali |

## ② Hüküm: üçü de AYRI olay (yanlış pozitif)
Üç çiftte de `t`, `yer_id` ve `kaynak` farklı. `d` metinleri iki ayrı şehri ve
iki ayrı cepheyi anlatıyor: Batum için Brest-Litovsk sonrası Kafkas ilerleyişi,
Kerkük için Irak cephesi. Eskişehir ile Maraş'taki işgaller Mondros sonrasıdır
(1919), Kerkük'ünki mütarekeden öncedir (1918). Çiftleri birleştiren tek şey
başlık kalıbı ("geri alınışı", "İngiliz işgali"). Gerçek mükerrer yok, bu yüzden
hiçbir madde düzeltilmedi ve silinmedi.

## ③ Çare
`arac/denetle.py` `BILINEN_AYRI` kümesinin başına 3 çift ve 9 yorum satırı
eklendi (gerekçe ve alan farkıyla). **+12 −0 satır.** Tavan sayılarına
dokunulmadı.

## İki yönlü sınav (`--sinav`)
```
Yön 2  veride=EVET  GEÇİYOR ✓  ×3   (evren boş değil: altı başlığın altısı da veride)
Yön 1  Kerkük'ün İngiliz işgali kopyası enjekte → 114 → 116  ÖTTÜ ✓
Yön 1  Çimpe Kalesi kopyası enjekte            → 114 → 115  ÖTTÜ ✓
```
Kerkük kopyasının sınanma sebebi: muafiyet başlığa değil **çifte** özgüdür. Aynı
başlığın gerçek kopyası hâlâ yakalanıyor. Enjeksiyon yalnız bellekte yapıldı,
hiçbir dosyaya yazılmadı.

## Bulunamadı / not
- Tam `denetle.py` koşusu yapılmadı. Serbest RAM ölçümde **0,29 GB**'tı, eşik 2 GB.
  Yalnız mükerrer ölçütü ayrı koşturuldu. Yayın kapısının öteki denetimleri bu
  işte ölçülmedi.
- Kerkük'ün kendi iki maddesi (işgal 05-07 · geri alınış 05-27) birbiriyle
  eşleşmedi. İkisi de ayrı olay; bir dönemin iki ucu.

## Değişen dosyalar
- `arac/denetle.py` (+12 −0, yalnız `BILINEN_AYRI` + yorum)
- `denetim/ARAC-MUKERRER-KAPI-0930.py` (yeni)
- `denetim/MUKERRER-KAPI-0930.md` (yeni)
