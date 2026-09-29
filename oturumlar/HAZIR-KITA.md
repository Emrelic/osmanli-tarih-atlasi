# HAZIR KITA PROTOKOLÜ (Emre, 19 Eylül 2026)

Görevsiz açılan her oturum ("Opus/Sonnet hazır kıta NNNN") bunu CLAUDE.md'den SONRA okur
ve harfiyen uygular. Amaç: **doğruluktan taviz vermeden en az token.** Her ekran satırı,
her gereksiz tur, her yoklama token yakar — Emre'nin en büyük şikâyeti budur.

## 1. Açılış — TEK hamle dizisi, ekrana yazı YOK
1. `CLAUDE.md` + bu dosya. Başka belge OKUMA (görev gelince şartnamen söyler).
2. Adını ölç: `get_session("self")` → başlık (ör. `Opus hazır kıta 1016`). Tahta adın
   bunun BÜYÜK HARFLİSİ: `OPUS HAZIR KITA 1016`.
3. Tahtaya TEK mesaj (Bash ile; PowerShell çok satırı keser):
   `py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "HAZIRIM · <model> · görev bekliyorum"`
4. Bekçiyi kur — **Monitor KULLANMA** (30 dk'da süresi dolup seni boşuna uyandırır).
   **Bash aracı, `run_in_background: true`:** `py arac/tahta_bekci.py --kim "<ADIN>" --cik`
   Süre tavanı yok; YALNIZ sana/HERKES'e mesaj gelince çıkar ve seni uyandırır.
5. **DUR.** Ekrana hiçbir şey yazma — "hazırım", "bekliyorum", "bekçi kuruldu" DAHİL.

## 2. Beklerken — SESSİZLİK
- Bekçi YALNIZ `kime` = ADIN ya da `HERKES` olan mesajda uyandırır. Başkasına giden mesaj
  seni ilgilendirmez; uyandıysan ve mesaj sana değilse tek kelime yazmadan bekçiyi yeniden
  kur ve dur.
- Bekçi mesajla çıktıysa: mesajı işle, sonra AYNI komutla sessizce yeniden kur (kaçan mesaj
  olmaz). Eski Monitor bekçin açıksa TaskStop ile kapat.
- 🔴 **AMA BEKÇİ ÇIKIŞ 3 VERDİYSE YENİDEN KURMA** (Emre, 29 Eylül 2026 — kaynak
  darboğazı). `arac/tahta_bekci.py` açılışta `oturumlar/KAYNAK-DURUM.json`u okur;
  koordinatör bir darboğaz kodu ilan ettiyse bekçi **kurulmaz**, sebebini stderr'e
  basar ve **3** döner. Çıkış kodlarını ayırt et: `2` kullanım hatası · `1` arıza ·
  **`3` = "kurulamadı, TEKRAR DENEME"**. 3 görürsen arka plan süreçlerini de kapat,
  ekrana bir şey yazma, DUR. Görevin gelirse `send_message` ile çağrılırsın
  (`CLAUDE.md §7.2 ⚠️`) — bekçisiz kalmak hiçbir şey kaçırmak değildir.
  📌 **Niçin alet, niçin sadece mesaj değil:** o gün koordinatör dört boş kıtanın
  bekçisini `Stop-Process` ile DIŞARIDAN öldürdü; dördü de bu maddenin üstündeki
  "sessizce yeniden kur" kuralına uyup **yeniden kurdu** — ve haklıydılar.
  *Süreci öldürmek talimatı değiştirmez.* Karar, bekçinin KENDİ okuduğu yere
  yazılmalıydı. Ölçüm: RAM 11,9 GB · boş 0,69 GB · pagefile 5.824 MB kullanımda ·
  claude 44 süreç / 5.689 MB (~285 MB/oturum).
  🔴 **İŞİ BİTEN OTURUM İÇİN YASAK BEKLENMEZ:** teslim + commit'ten sonra bekçini
  kendiliğinden öldür ve kurma. "Bekçimi öldüreyim mi?" diye SORMA, "bekçiyi
  öldürdüm, duruyorum" diye BİLDİR.
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
`py arac/tahta.py yaz --kim "<AD>" --kime "YILDIRIM BAYEZIT" --mesaj "TESLIM · ..."` —
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
