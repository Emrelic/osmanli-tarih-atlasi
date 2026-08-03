# NÖBET PLANI — Emre uyurken (3 Ağustos, ~12:30 → ~16:30)

> **Talimat:** *"Kendi kendine yapılacakları planla, yol haritasını çıkar,
> neler eksik kaldı ölç, tespit et… ekipte görevlendirme yap, gelen
> teslim edilen görevleri koda implemente et. Öncelikle bir an önce
> yayını yap. Çok kritik bir olay olmadıkça bana ihtiyaç duymazsın."*

## 🔴 KENDİMİ UYANDIRMA — bugün fikrimi değiştirdiğim yer

Sabah *"tekrarlayan cron israftır, `F11` (her turda tahtayı oku) yeter"*
demiştim ve **o zaman doğruydu** — çünkü Emre yazıyordu, tur zaten oluyordu.

**Şimdi yazmıyor. Tur olmuyor. `F11` boşa düşüyor.**

⇒ 30 dakikada bir nöbet turu kuruldu (`23,53 * * * *`). Her tur: tahtayı
oku · koşuyu bak · teslim varsa al · sessiz oturuma sor · yapacak bir şey
yoksa **tek satır yaz ve dur.**
📌 Kural değişmedi, **koşul değişti**: saatli denetim, tur olmadığında
tek denetimdir.

---

## SIRA — kesin, tartışmasız

```
① KOŞU BİTSİN            12:06 başladı · MOTOR 3 zamanlayıcısı çalışıyor
② DENETİM               denetle · uret_devirler · denetle_yayin · renk_olc
③ DAMGA                 surum_damgala → r691
④ COMMIT + PUSH         yol adıyla (F4)
⑤ YAYIN                 ✅
⑥ SONRA ekip serbest    kilitler kalkar
```

🔴 **⑤'ten önce hiçbir bağlı girdiye ve hiçbir koda yazılmaz.** Sebebi
ölçüldü: `denetle_yayin.py` iki ayrı kapıdan bloke ediyor —
`YAYIN BAYAT` (girdi değişti) ve `ÇALIŞMA AĞACI` (kod değişti, damga eski).

### Beklenen denetim değerleri (bunlar tutmazsa yayınlama, sebebi ara)
```
1606 yerleşim · 55 sahipsiz (beklenen 55) · 1b 0
2 ✓ ~495 kırılma / 0 AÇIK
2s ~120 açık (tavan 114, bilinen borç) · 2t ~51 (tavan 49, bilinen borç)
konum 0 maske dışı · renk 10 görünmez / 55 çakışma / 0 aynı-hex
```

---

## EKİBİN KONUMU — yayını bozmayacak şekilde

| oturum | durum | niçin |
|---|---|---|
| **ARAYÜZ 2** | ⏸ KOD YAZMIYOR | `js/css/index.html` damga kapısını tetikler. Bu arada `ARAYUZ-3-SARTNAME.md` yazıyor (kartvizit paneli · idarî katman düğmesi · başkent şeması) |
| **VERİ KİMLİK 3** | ⏸ VERİ YAZMIYOR | `devletler.js`+`renkler.py` motor girdisi. Bu arada Parti 3 hazırlığı: kalan kimlikleri SAHNEYE göre sırala · kaynak bulunamayanların listesi · `mogolistan`/`mogulistan` aynı mı |
| **PETEK / NOKTA** | 🟢 ÇALIŞIYOR | YENİ dosyaya yazıyor (`yerlesimler_ek3.js`) — bağlı değil, koşuyu bozmaz |
| **ÇAPRAZ İBERYA** | 🟢 ÇALIŞIYOR | Yalnız rapor yazıyor, hiçbir veri dosyasına dokunmuyor |
| **MOTOR 3** | 🟢 ÇALIŞIYOR | Koşuyu ölçüyor; yaması zaten bu koşuda |

---

## 🔴 ÇAPRAZ İBERYA'NIN BULDUĞU — yayından sonra ilk iş

```
D1  İBERYA BİRLİĞİ YOK — 10 dönem, 60 yıl, bütün bir ülke
    Portekiz 1580-1640 İspanyol tacı altındaydı; atlas göstermiyor.
D2  Melilla ve Mersa'l-Kebîr'in NOKTASI BİLE YOK
    İkisi de İspanyol presidio'su, Kuzey Afrika'nın en bilinen üsleri.
D3  Sebte ve Cerbe'nin İspanyol dönemi yok
```
📌 Ve bir ders: brifingimin ③ başlığındaki liste (*"Melilla 1497 ·
Mersa'l-Kebîr 1505…"*) bir **VARSAYIMDI** — oturum ölçtü, tutmadı.
Bulgularının en ağırı tam oradan çıktı. ⇒ Brifinge sayı yazarken
"ölçüldü" ile "sanıyorum"u ayırmam gerekiyordu.

---

## YAYINDAN SONRAKİ SIRA — kilitler kalkınca

```
1. Mankup kuşatması maddesi (1475-12-01) — olaylar*.js, benim dosyam
   ⇒ Theodoro'nun 6 ay erken biten iki kaydı düzeltilir
2. Ordu/Ünye v: etiketi → "Hacıemîroğulları Beyliği (Osmanlı tâbii)"
3. İberya Birliği 1580-1640 — 10 dönem
4. ARAYÜZ 3: kartvizit paneli (şartnamesi hazır olacak)
5. VERİ KİMLİK 3 Parti 3: kalan Asya kimlikleri
6. denetle_iddia.py — "madde bir şey söylüyorsa veride karşılığı var mı"
   (Karaman vakası bunu kanıtladı: Değişmez 2 yanlış maddeyi göremiyor)
7. denetle.py'nin savaş-senkron mazereti daralt (6 doğru, 3 yanlış)
```

## 🔴 EMRE'Yİ UYANDIRMA ÖLÇÜTÜ — yalnız üçü
```
· yayın bozulacaksa (denetim beklenenden sapıyorsa)
· veri kaybı riski varsa
· YALNIZ onun verebileceği bir karar çıktıysa (kapsam/öncelik/tercih)
```
Bunun dışında hiçbir şey için uyandırma. Teslim aldım, iş verdim,
ölçtüm — hepsi sabah okunacak tek özete girer.
