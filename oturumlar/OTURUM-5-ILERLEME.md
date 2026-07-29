# Oturum 5 — İlerleme (Dünya Hükümdarları) — TAMAMLANDI

Görev: `oturumlar/OTURUM-5-HUKUMDARLAR.md`. Yazılan tek dosya: `data/kisiler.js`
(sadece ekleme; mevcut 90 kayıt olduğu gibi korundu). Yeni alan: `devlet` —
yabancı hükümdarlarda `data/devletler.js`'teki ilgili kaydın `id` alanıyla
eşleşen serbest metin; dosyanın başındaki açıklamaya da eklendi.

## Sonuç
**90 → 247 kişi (157 yeni kayıt).** Hedef aralık 150-250 idi.

Doğrulama komutu (görev tanımındaki) çalıştırıldı:
```
kisi: 247
TEKRAR: Mustafa Reşid Paşa   ← bu oturumdan ÖNCE de vardı (satır 23 ve 87,
                                orijinal 90 kayıt içinde), ben eklemedim.
                                Dosya sahipliği kuralı gereği düzeltmedim;
                                entegrasyon oturumuna bırakıyorum.
```

## Partiler (görev tanımındaki sıraya göre)

1. **Safevî / Akkoyunlu / Karakoyunlu / Memlûk** — 13 kişi: Şah I-II. Abbas,
   Şah Süleyman, Şah Sultan Hüseyin, Kara Yülük Osman Bey, Yakub Bey
   (Akkoyunlu), Kara Yusuf, Cihan Şah, I. Baybars, Zâhir Berkuk, Sultan
   Barsbay, Sultan Kayıtbay, Tomanbay.
2. **Habsburg / Macaristan / Lehistan / Venedik** — 12 kişi: I. Ferdinand,
   V. Karl (Şarlken), II. Rudolf, I. Leopold, Maria Theresia, II. Josef,
   II. Franz, Mátyás Corvinus, III. Zygmunt, Michał Korybut Wiśniowiecki,
   II. Vladislav (Jagellon), Enrico Dandolo.
3. **Rusya / Kırım / Altın Orda ardılları** — 12 kişi: IV. İvan, Mihail
   Fyodoroviç, I. Aleksandr, I. Nikolay, II. Nikolay, Hacı Giray, I. Mengli
   Giray, Devlet Giray, Batu Han, Uluğ Muhammed, Küçüm Han, Edigü.
4. **Batı Avrupa — Fransa, İspanya, İngiltere, Papalık** — 8 kişi: I. François,
   XIV. Louis, XVI. Louis, II. Felipe, I. Elizabeth, Kraliçe Victoria,
   V. George, Papa V. Pius.
5. **Balkanlar — Sırp, Bulgar, Bosna, Eflak, Boğdan, Yunanistan** — 11 kişi:
   Stefan Lazarević, Đurađ Branković, Kara Yorgi, İvan Şişman, Tvrtko I,
   Basarab I, Mircea (cel Bătrân), III. Vlad (Kazıklı Voyvoda), Bogdan I,
   Ştefan cel Mare, I. Othon.
6. **Arap ve İran dünyası — Suûdî, Şammar, Yemen, Umman, Kaçar, Afşar** —
   14 kişi: Nadir Şah, Ağa Muhammed Han Kaçar, Feth Ali Şah, Muhammed Şah
   Kaçar, Nâsırüddin Şah, Muhammed bin Suûd, Muhammed bin Abdülvehhâb,
   Suûd bin Abdülazîz, Türkî bin Abdullah, Abdülazîz bin Suûd (İbn Suûd),
   Muhammed bin Reşid, İmam Yahyâ Hamîdüddin, Ahmed bin Said, Said bin Sultan.
7. **Kuzey Afrika ocakları, Fas, Sudan, Habeşistan** — 10 kişi: Hüseyin bin
   Ali, Ahmed Karamanlı, Ahmed el-Mansûr, Muhammed Ahmed (Mehdî), Halife
   Abdullah et-Teâyişî, Amara Dunkas, Ahmed Gran, Gelawdewos, II. Menelik,
   Mevlây Muhammed.
8. **Uzak dünya (yalnız devletler dizininde adı geçenler)** — 60 kişi: Orta
   Asya (8), Güney Asya (13), Doğu Asya (12), Güneydoğu Asya (11), Afrika
   batı/orta/doğu/güney (10), Amerika (5), Okyanusya (2). Tam liste dosyada.
9. **Ek — 1918 sonrası yeni devletler ve atlanan hükümdarlar** — 17 kişi:
   Horthy, Piłsudski, Masaryk, Cuza, I-II. Dom Pedro, Dessalines,
   Liliuokalani, Muhammed Davud Şah, Şerif ül-Hâşim, Andrianampoinimerina,
   III. Ranavalona, Shō Hashi, Yağmurasen b. Zeyyân, Ebû Zekeriyyâ Yahyâ,
   Guy de Lusignan, Caterina Cornaro.

## Kaynak / doğrulama notu
`kisiler.js` şeması bu kadroda `kaynak:` (TDV slug) alanı taşımıyor — padişah
dışı kadro tablosu madde metni değil, başlık düzeyinde bir dizin. Dolayısıyla
CLAUDE.md §4'teki ölü slug tuzağı bu dosyada doğrudan geçerli değildi; hiçbir
TDV URL'si fetch edilmedi. Tarihler/saltanat yılları yerleşik akademik bilgiye
(Pitcher, Danişmend, İnalcık, Encyclopaedia Iranica/Britannica düzeyinde
standart kaynaklar) dayanıyor. Belirsiz olan saltanat yılları kasıtlı olarak
yaklaşık ("yak.", "ö.", yüzyıl) yazıldı, uydurulmadı.

## Entegrasyon oturumuna not
- `data/kisiler.js` içinde yeni `devlet:` alanı eklendi; `data/devletler.js`
  ile bağlama (id eşleştirme) ileride yapılacak — bu turda yalnız veri katmanı
  hazırlandı, `js/app.js`'e dokunulmadı.
- Pre-existing "Mustafa Reşid Paşa" tekrarı (satır 23 ve satır 87'de, iki farklı
  `donem` ile) bu oturumdan önce vardı; dosya sahipliği kuralı gereği
  düzeltilmedi.
- Commit atılmadı, `arac/uret_petek.py` çalıştırılmadı — görev tanımına uygun.
