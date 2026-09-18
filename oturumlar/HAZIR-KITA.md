# HAZIR KITA PROTOKOLÜ (Emre, 19 Eylül 2026)

Görevsiz açılan her oturum ("Opus/Sonnet hazır kıta NNNN") bunu CLAUDE.md'den SONRA okur
ve harfiyen uygular. Amaç: **doğruluktan taviz vermeden en az token.** Her ekran satırı,
her gereksiz tur, her yoklama token yakar — Emre'nin en büyük şikâyeti budur.

## 1. Açılış — TEK hamle dizisi, ekrana yazı YOK
1. `CLAUDE.md` + bu dosya. Başka belge OKUMA (görev gelince şartnamen söyler).
2. Adını ölç: `get_session("self")` → başlık (ör. `Opus hazır kıta 1016`). Tahta adın
   bunun BÜYÜK HARFLİSİ: `OPUS HAZIR KITA 1016`.
3. Tahtaya TEK mesaj (Bash ile; PowerShell çok satırı keser):
   `py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "HAZIRIM · <model> · görev bekliyorum"`
4. Bekçiyi kur: Monitor, `timeout_ms` 1800000,
   `py arac/tahta_bekci.py --kim "<ADIN>"`
5. **DUR.** Ekrana hiçbir şey yazma — "hazırım", "bekliyorum", "bekçi kuruldu" DAHİL.

## 2. Beklerken — SESSİZLİK
- Bekçi YALNIZ `kime` = ADIN ya da `HERKES` olan mesajda uyandırır. Başkasına giden mesaj
  seni ilgilendirmez; uyandıysan ve mesaj sana değilse tek kelime yazmadan bekçiyi yeniden
  kur ve dur.
- Bekçi zaman aşımıyla biterse SESSİZCE yeniden kur.
- YASAK: ScheduleWakeup · /loop · sleep ile yoklama · tahtayı elle okuyup durmak ·
  "kontrol ediyorum" / "mesaj yok" / "hâlâ bekliyorum" yazmak · kendi kendine iş aramak ·
  repo'yu "tanımak için" gezmek · açılışta git log / durum_tablosu koşturmak.

## 3. Görev gelince
- Görev ya tahtadan ya doğrudan mesajla gelir; İLK SATIR yeni adındır (ör. `MOTOR-SINAV`).
  Koordinatör pencere adını da ona çevirir.
- Eski bekçiyi durdur (TaskStop), YENİ adınla yeniden kur. Tahtada artık bu adı kullan.
- Şartnameni oku (`oturumlar/<AD>.md`); yalnız onun gösterdiği belge ve dosyalara bak.
- Dosya sahipliği şartnamede yazar; başkasının dosyasına YAZMA, emin değilsen tahtadan sor.
- İş sürerken ekrana ara rapor YOK. Aksaklık (kaynak çelişkisi, başka oturumun dosyası,
  şartname yanlış, iş çok uzuyor) → HEMEN tek tahta mesajı, sonra işe devam.
- Kaynak kuralı (CLAUDE.md §4), commit kuralı (adıyla, `git add -- <adlar>` +
  `git commit -F <dosya> -- <aynı adlar>`, dizin pathspec ve `git add -A` YASAK) aynen geçerli.

## 4. Teslim — TEK mesaj
`py arac/tahta.py yaz --kim "<AD>" --kime "1.MURAT" --mesaj "TESLIM · ..."` —
① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum/öneriyorum + değişen dosyalar + commit.
Uzun rapor → `denetim/<AD>-<tarih>.md` dosyasına, mesajda yalnız yolu. Mesajı
`oturumlar/tahta.json`dan geri oku (uzunluğu tam mı).

## 5. Köşeye çekil
- Teslimden sonra DUR. Ekrana özet YAZMA (koordinatör tahtadan okur).
- Koordinatör "devamı var" dediyse bekçin açık kalır.
- **İş bittiyse ve devamı beklenmiyorsa BEKÇİNİ ÖLDÜR** (TaskStop) ve dur. Koordinatör seni
  emekli grubuna taşır. Emekli oturum yeniden uyandırılırsa yalnız işinin doğrudan devamı içindir.

## 6. Token ilkeleri (özet)
Az oku (yalnız gerekeni, gereken bölümüyle) · az yaz (tek teslim) · yoklama yapma ·
ekrana konuşma · tahmin etme, sor (tek mesaj) · aynı ölçümü iki kez yapma.
