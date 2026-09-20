# VURUŞ-0072 — ele geçirme sahnesinin vuruş tablosu (Emre'nin birebir sırası)

Oturum: SEFER-OK-0070 (Opus) · 20 Eylül 2026 · koordinatör sevki
Öngörü (ölçümden ÖNCE): `denetim/ONGORU-VURUS-0072.md`
Alet: `denetim/ARAC-VURUS-0072.js` (headless Chrome + CDP)

## 1. İSTENEN SIRA

```
1 Odaklanma
2 Eski harita durumu
3 Yansın  (ele geçirenin KOYU rengi)
4 Sönsün  (ESKİ DURUM)
5 Yansın  (KOYU)
6 Sönsün  (ESKİ DURUM)
7 Yansın  (ele geçirenin ORİJİNAL rengi)
```
→ hâl dizisi: `once → koyu → once → koyu → once → sonra → (çözülme)`

## 2. ÖLÇÜM — eski dizideki "sönük ara" neydi?

Eski dizi: `koyu(420) → yok(180) → koyu(420) → yok(180) → sonra(620) → yok`.
`hal:"yok"` yalnız örtünün `fill-opacity`sini 0 yapıyor; altından **haritanın o
günkü kendi çizimi** çıkıyor.

Ölçülen madde: **"Mohaç sonrası Budin'in teslimi — Macar tahtına iki kral"
(1526-09-01), 12 petek.**

| Ölçüm | Sonuç |
|---|---|
| `once` rengi kaç petekte tanımlı | **12 / 12** (Budin, Mohaç, Erdel, Peşte, Varad… hepsi `#20d880` Macaristan) |
| `sonra` renkleri | `#b2384a` (tâbi) · `#8e0b22` (Osmanlı) |
| `koyu` | `#621f29` · `#4e0613` (yani `sonra`nın koyu tonu) |
| **`yok` anında üstteki dolgu** | `devlet-dolgu`, özellik `id: "avusturya"`, renk **`#bdab3f`** |

🔴 **ÖNGÖRÜM KISMEN YANLIŞ ÇIKTI ve fark önemli.** Öngörüm: *"`yok` anında YENİ
sahip görünür"*. Ölçüm: görünen ne `once` (Macaristan `#20d880`) ne `sonra`
(`#b2384a`) — **üçüncü bir şey**, haritanın o gün çizdiği sahip (Avusturya).
Yani ara vuruş "eski durum"u göstermiyordu; ama "yeni durum"u da göstermiyordu.
Ders: örtü kalkınca ekranda ne kaldığı, ÖRTÜNÜN kendi `once`/`sonra` alanlarından
DEĞİL, haritanın o günkü sahiplik çiziminden gelir — ikisi aynı olmak zorunda
değil. Emre'nin istediği eski durum ancak `once` AÇIKÇA istenerek gösterilir.

## 3. UYGULANDI

`js/app.js` — `ELE_GECIRME_DILI` + `eleGecirmeDizisi()`:

| Adım | Hâl | ms |
|---|---|---|
| ② eski harita durumu | `once` | 300 (`eskiMs`, yeni alan) |
| ③ yansın | `koyu` | 420 |
| ④ sönsün = ESKİ DURUM | `once` | 180 |
| ⑤ yansın | `koyu` | 420 |
| ⑥ sönsün = ESKİ DURUM | `once` | 180 |
| ⑦ orijinal renk | `sonra` | 620 |
| çözülme | `yok` | 0 |

* **Vuruş sayısı değişmedi** (`vurus: 2`) — koordinatörün hükmü: 2↔3 çelişkisi
  kapandı, "3 kez" savaş yeri simgesinindir, simgeye dokunulmadı.
* **Ek maliyet sıfır:** `_antlasmaHal("once")` zaten vardı ("◀ Öncesi" düğmesi
  onu kullanıyor), renk her petekte hesaplı. Yeni katman/kaynak/zamanlayıcı
  açılmadı; sahne `ANIM` dilinin içinden akıyor.
* Sahne süresi 1820 → **2120 ms**; `ANIM.SABIT.FAZ_TAVAN_MS` = 2400 — altında
  (öngörü bu noktada tuttu).

## 4. SINAV — sahne gerçekten bu sırayla akıyor mu?

Boya özelliği 80 ms aralıkla örneklendi (`iz`):

```
yok(0) → once(329) → koyu(709) → once(1153) → koyu(1630) → sonra(1997) → yok(2661)
```

Emre'nin sırası ekranda akıyor. ⚠️ İkinci ara `once` (⑥, 180 ms) örneklemede
yakalanmadı — 80 ms'lik örnekleme ve headless'ın yavaşlığı yüzünden; dizinin
kendisi (`eleGecirmeDizisi()`) onu içeriyor ve ilk arası ölçüldü.

## 5. 🔴 BİLDİRİM — hareket kısıtı açıkken sahne HİÇ akmıyor

İlk sınav koşusunda iz `yok → sonra → yok` çıktı: yeni dizi hiç koşmadı. Sebep
atlasta değil ortamda — **headless Chrome'da `prefers-reduced-motion: reduce`
varsayılan olarak açık** ve `antlasmaFarkiKirp()` o hâlde bilerek tek durak
gösteriyor (yeni sahibin rengi → çözülme). Sınav, CDP ile
`prefers-reduced-motion: no-preference` emüle edilerek tekrarlandı.

⚠️ Bu yalnız sınav ortamının sorunu olmayabilir: ELE-GECIRME-ANIM-0070 aynı gün
**Emre'nin tarayıcısında da `matchMedia(...).matches` TRUE ölçmüştü**
(app.js:8960 civarındaki not). Eğer Emre'nin işletim sisteminde "hareketi azalt"
açıksa, istediği yedi adımlı sahneyi **göremez** — tek durak görür. Karar
Emre'nin: (a) hareket kısıtına saygı sürsün (bugünkü hâl), (b) bu sahne
kısıttan muaf tutulsun, (c) kısıt altında daha yavaş ama tam sıra oynasın.
Kod değiştirilmedi; erişilebilirlik dalı kendi kuralını koruyor.

## 6. DEĞİŞEN DOSYA

`js/app.js` — yalnız `ELE_GECIRME_DILI` ve `eleGecirmeDizisi()` (paylaşılan dosya,
commit koordinatörde). Veri dosyası değişmedi.
