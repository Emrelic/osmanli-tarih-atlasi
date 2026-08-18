# OSMAN GAZİ — ilerleme defteri (18 Ağustos 2026)

> Bu dosya `compact` öncesi yazıldı. Uçuşta olan durum burada; sohbet
> özetlense de iş kaybolmasın.

## Bugün İNEN ve PUSH EDİLEN

```
0cf702b  13 dolgu noktası emekli · taban 2589 → 2576 · denetim TEMİZ
675201d  BEKLENEN_SAHIPSIZ 228 → 214 (denetimin kendi uyarısı)
b55c262  EKLEYİCİ KAPI — Emre'nin 18 Ağu hükmü motora indi
c734af9  DEVLET ODAĞI — harita Osmanlı'dan çözüldü (r2586)
f1873bc  CLAUDE'SUZ KOŞU + YAYIN + zamanlanmış görev "AtlasKosu"
f226aa2  ARAYÜZ üç kalem (scroll başa · süzgeç başlığa · bölge butonlara)
9777657  nicin_bos kur:/bit: körlüğü — ÜÇ HÜKÜM GERİ ALINDI
be9c248  arac/nicin_bos.py          ab8e239  arac/olc_ekleyici.py
66df81b  kutu_dokum · kutu_serit · kutu_olc
```

## SIRADA — Emre'nin sırası: A → B → C

### 🔴 A2 · Napli doğusu (`0023/H-0008`) — ÖLÇÜM HAZIR, yazılacak
Emre: *"o parça asla oradaki adaların peteğinin boyaması olmamalı, eğer
öyleyse bu korkunç bir hata."* **Haklı, ölçüldü:**
```
py arac/nicin_bos.py --lat 37.53 --lon 23.34 --gun 1687-09-26 --yaricap 120
   Çamlıca (Hidra)     24,4 km  OSMANLI   ← ADA
   Egina (Aegina)      26,6 km  OSMANLI   ← ADA
   Anabolu (Nauplion)  47,8 km  venedik   ← ANAKARA, iki kat uzakta
```
⇒ Argolid doğu yarımadasının **kendi yerleşimi yok**; iki adanın peteği
anakarayı boyuyor. Çare: yarımadaya nokta (Damala/Troezen · Methana ·
Ermioni). `§4`: TDV'de Yunan kasabaları zayıf; bulunamazsa
`kaynak:"bulunamadı — …"` + akademik dayanak.
⚠️ `uret_petek.py:1407 ADA KURALI` bunu önlemeliydi; niçin önlemediği
ÖLÇÜLMEDİ — ikinci bir kalem.

### 🔴 A3 · `veri-kaynak/motor_kara.geojson` commit'siz duruyor
İzsiz girdiyle koşulmaz. Tek commit.

### 🟡 A4 · Solnok (`0023/H-0004`, 1686-06-01) — dönem kaydı ölçülecek

### 🟡 B · arayüz (koşuyu beklemez)
- B1 kronoloji sütununu kısalt / madde penceresini büyüt
  (`#olay-listesi` bugün `flex:1 1 auto`, bütün boşluğu yiyor)
- B2 `0023/H-0014` harita tepesindeki metin tarihle senkron değil — GERÇEK KUSUR
- B3 `0023/H-0012·13·15·16·17` Salankamen · Granbosa · Ulaş · Zenta · Karlofça
  haritada işaretsiz

### 🔵 C · araştırma (ayrı oturum işi — Emre'nin bölme kuralı geçerli)
```
C1 İyon+Ege adaları   0021/H-0011 + 0022/H-0004      tek oturum
C2 Ferhad Paşa hattı  0021/H-0019 · 0027 · 0028      tek oturum
C3 Karadeniz bozkırı  0021/H-0032 + 0022/H-0005      tek oturum
C4 Macaristan üçlemesi 0023/H-0001 · 0002 · 0005     tek oturum
C5 Bahreyn/Safevî 1602 0021/H-0007 + H-0021          küçük
```

### ⬜ D · `parti-emrelic-0019` — 81 madde, HİÇ AÇILMADI

## Kutu durumu
```
py arac/kutu_dokum.py            # envanter
py arac/kutu_serit.py <paket>    # görsel künyeleri (86 kat ucuz)
py arac/kutu_olc.py 0021         # 32 maddeyi tek koşuda ölç
313 madde · KAPALI 75 · AÇIK 238
```

## 🔴 BUGÜN ÜÇ KEZ AYNI HATAYI YAPTIM — tekrarlanmasın
Üçü de **"ölçüm doğru, EVREN dar"**:
1. `kaynak:` alanına bakıp dayanağın `neden:`de olduğunu görmemek
2. kayıt yapısını `yerlesimler.js`te doğrulayıp bütün dosyalara genellemek
   (çok satırlı kayıtlar → dört dosya bozuldu, git'ten geri alındı)
3. `nicin_bos.py`nin `kur:`/`bit:` körlüğü → **üç hüküm yanlış zeminde**
   verildi ve "sebep bulundu" diye koordinatöre gitti

⇒ Aletlerin **evren doğrulaması** yok. `--sabit-dogrula` sabitleri kaynağa
soruyor ama *"benim komşu kümem motorunkiyle aynı mı"* diye soran bir
denetim yok. **Bir sonraki oturumun ilk işi bu olmalı.**

## Koşu
```
gece 00:00 · görev "AtlasKosu" · KOSU-BASLAT.bat ile erken de koşar
ölçülmüş süre ~3¼ saat (11 saat UYKUYDU — py arac/olc_kosu_suresi.py)
altı değişmez düşerse commit ATILMAZ, push YAPILMAZ (iki yönde sınandı)
```
