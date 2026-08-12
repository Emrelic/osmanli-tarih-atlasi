# VERİ SINIR 2 — İlerleme raporu

**Durum: TESLİM. 8 → 8, hiçbiri bulunamadı ile kapanmadı (biri kısmi kaynak notuyla).**

## ① Payas hükmü: **DOĞRULANDI**

Kaynak: UK Cmd. 1556 "Turkey No. 2 (1921)" — Franco-Turkish Agreement, Angora,
20 Ekim 1921 (League of Nations Treaty Series, Vol. 54, pp. 178-193), Madde 8.
PDF'i doğrudan indirip okudum (Wikimedia Commons üzerinden, birincil kaynak).
Sınır hattı *"immediately south of the locality of Payas"* noktasından başlayıp
Meidan-Ekbez'e (orası Suriye'de kalacak) doğru ilerliyor. Wikipedia'nın
"Treaty of Ankara (1921)" maddesi aynı LNTS kaydını göstererek aynı tarifi
veriyor — iki bağımsız okuma örtüştü, TEK DAYANAK olarak Wikipedia'ya
güvenilmedi.

**Sonuç: Payas hattın KUZEYİNDE — Türkiye tarafında. Mevcut kayıt
(data/yerlesimler_ek27.js:63-65, fransa-cumhuriyet 1918-1923) YANLIŞ.**

Kırılma günü 1921-10-20 (imza günü) — kronolojide karşılığı VAR:
`data/olaylar_ek5.js:425` "Ankara İtilâfnâmesi: Fransa ile barış..."
Uydurulmadı.

🔴 **Koordinatöre/Oturum 0'a iş:** `data/yerlesimler_ek28.js`'teki düzeltilmiş
Payas kaydı `data/yerlesimler_ek27.js:63-65`'in YERİNE geçmeli. Ben ek27.js'e
dokunamam (yasak).

## ② 7 eksik nokta: 8 → 8 yazıldı (Payas dahil değil, o ayrı madde)

| Nokta | Sonuç | Not |
|---|---|---|
| Dörtyol | ✓ yazıldı | k:3, kaza merkezi (1909) |
| Erzin | ✓ yazıldı | k:4, nahiyeydi (1909 sonrası) |
| Yumurtalık | ✓ yazıldı | k:4, nahiyeydi; işgal/tahliye tarihi İÇİN kaynak bulunamadı, bölgesel çerçeve kullanıldı (aşağı bkz) |
| Arhavi | ✓ yazıldı | k:4, nahiyeydi; hiç Rus toprağı olmadı (yeni bulgu) |
| Borçka | ✓ yazıldı | k:4, nahiyeydi |
| Sarıkamış | ✓ yazıldı | k:3, GARNİZON kanıtlandı |
| Ahılkelek | ✓ yazıldı | k:3, kale+sancak merkezi; TDV'den fetih tarihi DÜZELTİLDİ (1578→1551) |

Hiçbiri tam "bulunamadı" ile kapanmadı, ama **Yumurtalık'ın işgal/tahliye
tarihi için özel kaynak bulunamadı** — bölgesel Çukurova çerçevesi (Mersin ile
aynı) kullanıldı, dosya içinde açıkça işaretli.

## ③ k: dağılımı — hepsi gerekçeli

```
k:3 → 4 nokta: Payas (kale), Dörtyol (kaza merkezi), Sarıkamış (garnizon),
               Ahılkelek (kale+sancak merkezi)
k:4 → 4 nokta: Erzin, Yumurtalık, Arhavi, Borçka — dördü de NAHİYE
               (kaza DEĞİL), Emre'nin "hak etmeyen 4. sınıf yerlere bölge
               atfetmeyelim" sınırına göre k:3 VERİLMEDİ.
```

## ④ 3 km kuralı: **0 çakışma**

Salt-okur node betiğiyle (36 dosya, 2362 nokta) tek tek tarandı — hiçbiri
başka bir noktayla 3 km içinde değil. (Payas kendi eski kaydıyla 0,00 km —
bu ÇAKIŞMA değil, KASITLI aynı-isim override, yukarıda ①'de açıklandı.)

## 🔴 Yol boyunca çıkan iki yan bulgu — bilginize

**1. Hopa kaynak çelişkisi ÇÖZÜLDÜ, ek27.js'teki kayıt DOĞRU çıktı.**
Arhavi'yi araştırırken ilk arama "Hopa 1878'de Osmanlı'da kaldı" dedi; ikinci/
üçüncü arama (sınır komisyonu tarifiyle: *"sınır Esenköy'ün doğusundaki
Kopmuş Burnu'ndan başlar"*) bunu çürüttü — Hopa'nın kendisi Rus tarafında
kalmış. `yerlesimler_ek27.js`'teki mevcut Hopa kaydı (rusya 1878-1921) bu
ikinci/üçüncü kaynakla uyuşuyor. **Düzeltme gerekmiyor, yanlış alarmdı — ama
bildirmek gerekiyordu çünkü ölçüm sırasında ciddi göründü.**

**2. Tarih hassasiyeti — Dörtyol/Erzin/Yumurtalık.**
TÜBA'nın akademik yayını (Nejla Günay, "Occupation and Liberation of Adana")
çok daha kesin tahliye tarihleri veriyor: Dörtyol 1921-12-31, Erzin/Toprakkale
1922-01-04 (Fransız birlikleri tam bu tarihlerde çekildi). Ben bunun yerine
sibling kayıtla (Mersin, ek27.js:51-53) AYNI tarihi (1921-10-20, Ankara
İtilâfnâmesi imza günü) kullandım — çünkü o tarihin kronolojide karşılığı VAR
ve ben olaylar*.js'e madde ekleyemem (yasak). **Daha kesin tarih istenirse:
önce olaylar*.js'e 1921-12-31 ve 1922-01-04 için madde eklenmeli (başka
oturumun işi), sonra bu üç kayıt güncellenebilir.**

## Kanaldan bildirilenler
- Açılış mesajı gönderildi (12:XX).
- Bu rapor `send_message` ile de iletilecek.
