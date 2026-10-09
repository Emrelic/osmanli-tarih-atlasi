# CELAYIRLI-0085 — parti-emrelic-0085 H-0001 · H-0006 · H-0007 (Celâyirli kopuk parçaları)

Oturum CELAYIRLI-0085 · 9 Ekim 2026 · makine UMIT · temel `origin/main` `6865cc87` · `oturumlar/EEK-PROTOKOL.md` ①-⑤.
**Veriye YAZILMADI.** Öneri: `CELAYIRLI-0085-KOORD.diff` (uygulanmadı). Ek olarak bir seçenek diff'i var, `-SECENEK-KOORD.diff`, ama **önerilmiyor**.
Görseller: önce yalnız metin okundu; metin hangi maddenin hangi yeri gösterdiğini söylemediği için **üç görsel açıldı** (H-0001-1, H-0006-1, H-0007-1). Gizli depodan kopyalanmadı.

## TEK HÜKÜM
**Üç "kopuk Celâyirli parçası"nın üçü de tarihî bir eksklav DEĞİL, VERİDİR (EEK ① sınıfı değil).** Ortak mekanizma şu:
Celâyirli dönemleri, künyenin uçlarından ya da komşu kayıtlardan **toplu olarak kopyalanmış** (HİZALAMA). Bu kopyalar TDV'nin şehir ve bölge cümleleriyle çelişiyor.
- Siirt ve Cizre kayıtlarının **kendi yorumu** bunu açıkça söylüyor: *"bölgesel HİZALAMA, kaynak değil"*.
- Zagros içi bir **dolgu noktası** (`tur:"bolge"`, g:0 k:0). Zinciri Irak'tan kopyalanmış.

| madde | parça (görselle bağlandı) | sınıf | çare |
|---|---|---|---|
| **H-0001** | **Gence** (Sevan'ın doğusu, Şirvan komşusu) 1386→1406 | veri: komşular 1386'da Timurlu'ya geçerken Gence Celâyirli kalmış | **DÜZELT** → `timurlu` 1386-01-01→1406-10-21 |
| **H-0006** | **Siirt + Cizre + Cibri** (Bitlis–Hasankeyf–Cizre arası) 1353→1431; **1411-1431 boyunca haritadaki BÜTÜN Celâyirli devleti yalnız bu 3 nokta** | veri (hizalama), TDV ile çelişiyor | 1394 sonrasının yanlış olduğu **kesin**; doğru sahip **ölçülemedi** ⇒ seçenek diff'i, önerilmiyor |
| **H-0007** | **"Zagros içi"** dolgu noktası (Râmhürmüz–Behbehân yakını) 1340→1410 | veri: Irak zincirinin kopyası | **DÜZELT** → Râmhürmüz/Behbehân zinciri (`lur-i-buzurg` 1335-12-01→1393 · `timurlu` 1393→1452 · `karakoyunlu` 1452→1469) |

## ① ÖNGÖRÜ — ölçümden ÖNCE (scratchpad `celayir_ongoru.md`, görseller açılmadan)
1. Kopuk parça Celâyirli gövdesinin Irak çekirdeğinden ayrı bir bileşenidir; adayım kuzey Irak kümesiydi (FETRET 1340 bölge cümlesi). ⇒ **YANLIŞ.** Kuzey Irak kümesi gövdeye bağlı; kopuk parçalar Gence, Siirt/Cizre ve Zagros.
2. İkinci adayım "1411 sonrası artık parça"ydı. ⇒ **TUTTU.** 1411-1431 boyunca Celâyirli yalnız Siirt/Cizre/Cibri.
3. "Kaynağı VERİDİR, tarihî eksklav değil." ⇒ **TUTTU, üçünde de.**

## ② NE ÖLÇTÜM
**Yöntem.** `girdi.yukle()` (93 dosya, 4300 nokta). Bir noktanın o günkü sahibi: isg > d (OSMANLI) > s > v (EEK-DOGU ile aynı kural). Komşuluk: Delaunay, ≤250 km. Bileşenler 1341–1430 arasında 19 tarihte tarandı.

**Künye.** `celayirli` 1340-01-01→1431-01-01, 88 nokta. Kopuk bileşenler (önce):

| bileşen | pencere | çevre |
|---|---|---|
| Siirt | 1340→ | ilhanli / eyyubi-hisnikeyfa |
| Siirt + Cizre + Cibri | 1353→1431 | artuklu 5 · eyyubi-hisnikeyfa 2 · karakoyunlu |
| Diyarbakır | 1353→1394 | artuklu |
| Gence | 1386→1406 | timurlu 4 · sirvansah 2 |
| Zagros içi | 1340→1410 | lur-i-buzurg 3 · incu/muzafferi |
| Fâv | 1340→1411 | lur-i-buzurg / timurlu — tek nokta, Basra'ya Delaunay kenarı yok; ölçüm eseri olabilir, görsel yok, dokunulmadı |

**TDV — HTTP 200, gövdeden birebir:**
- `celayirliler`:
  - *"Üveys 1358'de Azerbaycan ile Tebriz'i, 1364'te Musul ve Diyarbekir'i ele geçirerek…"*
  - *"Timur'un … 1393'ten itibaren de Bağdat, Diyarbekir ve el-Cezîre bölgelerini ele geçirmesi…"*
  - *"…Hille Kalesi'ne kaçtı. Uzun bir kuşatmadan sonra Karakoyunlular kaleyi ele geçirip Hüseyin'i öldürdüler (1431)."*
- `gence`: *"XIV. yüzyıl ortalarında Gence ve Karabağ'a Celâyirliler hâkim oldular. XV. yüzyılın başlarında bu bölge Karakoyunlular'ın eline geçti."* · Gence *"Karabağ-Arrân vilâyetinin merkezi"*.
- `karabag`: *"…İldenizliler, İlhanlılar, Timurlu ve Akkoyunlular'ın idaresi altına girdikten sonra…"*
- `cizre`:
  - *"Timur 796'da (1394) el-Cezîre'yi istilâ ettiği sırada el-Melikü'z-Zâhir ve nâibi İzzeddin el-Kürdî'nin elinde bulunan Cizre mukavemet gösterilmeden Timur'a teslim edildi."*
  - *"Timur'un oğulları Şâhruh Mirza ile Muhammed zamanında ise Emîr Bahtî'nin idaresindeydi."*
  - *"1469 yılında Karakoyunlular ve daha sonra Akkoyunlular bölgeye hâkim oldular."*
  - Celâyirli adı bu maddede **HİÇ geçmiyor**.
- `siirt`: *"İlhanlılar'ın ve onların halefleri durumundaki Celâyirliler'in hâkimiyeti altına giren Siirt, Timur istilâsını da gördükten sonra 866'ya (1462) doğru Akkoyunlular tarafından ele geçirildi."*
- `huzistan`: *"Hûzistan kaleleri 811'de (1408) Celâyirliler tarafından zaptedildi."*
- `lur-i-buzurg`: *"1155-1424 yılları arasında Luristan ve Hûzistan'da hüküm süren mahallî bir emirlik"* · *"Abaka Han Huzistan, Kuhgîlûye, Fîrûzân ve Cerbâzekān'ın (Gülpâyigân) yönetimini ona verdi."*

**H-0001 Gence.**
- Gence'nin zinciri: `celayirli 1340→1406-10-21 → karakoyunlu`.
- Aynı vilâyetteki komşular (Berde, Revan, Nahçıvan): `celayirli →1386-01-01 → timurlu → 1408-04-13 karakoyunlu`.
- Gence'nin kendi 1406-10-21 kırılması, `olaylar_ek7` 1406-10-15 maddesine (*"Aras zaferi: Kara Yûsuf, **Timurlu** Ebû Bekir Mirza'yı yendi"*) bağlı. Yani veri kendi içinde tutarsız: Gence'yi Karakoyunlu'ya kaybeden Timurlu, ama zincir onu Celâyirli'den alıyor.
- Hüküm: ③/hizalama hatası. Gence Timurlu'ya Karabağ'la birlikte geçer.
- Gün komşudan: Berde/Revan/Nahçıvan 1386-01-01 · `olaylar_ek5` "788 / 1386" (Timur'un Azerbaycan seferi). Bu madde Değişmez 2 kapsamında zaten var.

**H-0006 Siirt / Cizre / Cibri.**
- Celâyirli 1340/1353→1431. TDV `cizre` Celâyirli'yi hiç anmıyor ve 1394'te Timur'a teslimi yazıyor. TDV `celayirliler` 1393'te el-Cezîre ile Diyarbekir'i Timur'a veriyor.
- 1410'dan sonra son Celâyirliler Hille'de (TDV) ve Huzistan'da (TDV `huzistan`, 1408). ⇒ Siirt ve Cizre'nin 1394-1431 Celâyirli dönemi kesin olarak YANLIŞ.
- Doğru sahip ölçülemedi:
  - 1394-1405 Timurlu (TDV, iki madde).
  - 1405-1431: Cizre için TDV *"Emîr Bahtî'nin idaresindeydi"* diyor. Bu mahallî bir emir; Cizre/Bohtan künyesi yok, aynı sebeple Cizre'nin 1508-1515 aralığı zaten bilerek boş bırakılmış. Siirt için TDV sessiz.
- **D206 ters yön ölçüldü** (seçenek diff'i uygulandı, bileşen taraması yeniden koşuldu): Celâyirli cebi kalkıyor, ama **aynı üç nokta 1395-1431 boyunca TİMURLU cebi oluyor** (çevre artuklu/karakoyunlu). Görüntü düzelmiyor, yalnız rengi değişiyor. Bu yüzden önermiyorum.
- 1353-1394 aralığındaki cep de kalıyor; çevreyi Artuklu kümesi (Mardin, Nusaybin, Silopi…) kesiyor. Bu ayrı bir koridor sorusu.

**H-0007 Zagros içi.**
- Dolgu noktası. Zinciri `ilhanli → celayirli 1340-1410 → karakoyunlu 1410-1469 → akkoyunlu…` Bu, Irak noktalarının zincirinin birebir aynısı.
- Bütün gerçek komşuları farklı bir zincir taşıyor: Râmhürmüz 88 km, Behbehân 104 km, Şüşter, Ahvaz, Dizfûl `lur-i-buzurg 1335-12-01→1393 · timurlu 1393→1452 · karakoyunlu 1452→1469`.
- 31.5K 50.5D Kuhgîlûye'de; TDV `lur-i-buzurg` Kuhgîlûye'yi Lur-i Büzürg'e veriyor.
- Hüküm: dolgu zinciri en yakın gerçek noktalarla hizalanır. Dolgunun kendi tanıklığı yok; bu bir hizalama ve kayda öyle yazıldı.
- `renkler.py:350` yorumu da bu noktayı "lur-i-buzurg çekirdeği" diye seçmiş (atlas dayanak değil, bilgi olarak).

**Bileşen taraması, yamadan sonra** (ana diff; bölge 26-45K × 34-56D, 1335-1474, yılda iki tarih, BÜTÜN kimlikler).
- Kaybolan 4 kopuk parça: `celayirli/Gence` · `celayirli/Zagros içi` · `ilhanli/Zagros içi` · `karakoyunlu/Zagros içi`.
- **Yeni kopuk parça: 0.**

**`denetle.py`, PYTHONHASHSEED=0, main üstünde:**

| ölçü | önce | ana diff | ana + seçenek |
|---|---|---|---|
| çıkış | 2 (yalnız D8 ÖLÇÜLEMEDİ: devletler_harita.js yok) | 2 (aynı) | 2 (aynı) |
| D1 sahipsiz | 309/309 | 309 | 309 |
| D2 açık | 0 | 0 | 0 |
| **2s AÇIK** | 184 (tavan 184) | **183** | 184 |
| D7 🧊 sorgusuz enklav | 737 | 738 | 741 |
| kaynaksız `s:` | 1908 | 1907 | 1907 |

- **D7'nin +1'i** `--ayrinti` listeleri iki hâlde diff'lenerek bulundu. Yeni bir enklav DEĞİL: Gence, zaten var olan "Berde (Karabağ)" Timurlu adasına (A-koridor, ana gövdeye 189 km) katılıyor ve ada "Berde+Gence" oluyor. Bu adanın kendisi bugün de var (Karabağ'ın 1386 Timurlu koridoru); bu iş onu doğurmadı.
- 🔴 **2s 184→183 bir iyileşme: §3.4 kural 2 ve 3'e göre `BEKLENEN` 2s tavanı aynı commit'te 183'e inmeli.** İnmezse aradaki pay sessiz borç olur.

## ③ NE BULAMADIM / ÖLÇMEDİM
- Siirt ve Cizre'nin 1405-1431 sahibi. Mahallî Cizre/Bohtan beyleri için künye yok; Siirt için TDV sessiz.
- Fâv'ın kopukluğunun gerçek mi yoksa Delaunay eseri mi olduğu. Görsel yok, maddelerde de geçmiyor.
- Zagros içi zincirinin ne zaman Irak kopyasına döndüğü. Kayıt çok satırlı olduğu için git geçmişinde iz sürmek çok pahalıydı; durduruldu.
- Hille'nin 1411-1431 sahibi. TDV son Celâyirli'nin Hille Kalesi'nde öldürüldüğünü yazıyor, ama ne zamandan beri orada olduğunu söylemiyor. Atlasta 1411-1431 arasında **Celâyirli'nin hiçbir noktası yok** (ana diff'ten sonra).

## ④ İSTİYORUM / YAN BULGULAR (kalemin dışında; dokunulmadı)
1. **Ana diff** (Gence + Zagros içi) ve **aynı commit'te 2s tavanının 184→183 indirilmesi.**
2. **H-0006 kararı:** seçenek diff'i (`timurlu` 1394-1431) önermiyorum, çünkü ters yönde Timurlu cebi doğuyor. Önerim ikili:
   - 1394-04-25'te Celâyirli'yi kesmek kesin (TDV), ama 1394-1431 için bir sahip lazım.
   - Doğrusu bir **Cizre/Bohtan beyliği künyesi** (TDV `cizre` bu beyleri anlatıyor; aynı künye 1508-1515 boşluğunu da kapatır). Künye kararı koordinatörde.
3. **Celâyirli'nin geniş 1340 kopyası** — kalemin dışında ama aynı mekanizma, TDV ile çelişiyor:
   - Azerbaycan/Kafkasya (~35 nokta) 1340'tan Celâyirli; TDV *"1358'de Azerbaycan ile Tebriz'i"* diyor.
   - Musul kümesi 1340; TDV 1364 (`karakoyunlular` 767/1366).
   - Diyarbakır 1353; TDV 1364.
   - Bağdat 1335-12-01'de başlıyor, künye 1340'ta (künye penceresini 4 yıl aşıyor).
   - Huzistan 1408 (TDV) atlasta Timurlu.
   - Bu `YAMA-INMEMIS-1009` Bölüm B'deki Musul açık kalemiyle aynı aile (D208 bölge cümlesi).
4. Cizre'nin `karakoyunlu 1431→1469` dönemi de TDV `cizre` *"1469 yılında Karakoyunlular"* ile çelişiyor; EEK-DOGU H-0027'nin ölçtüğü cebin öncesi bu.

## Dosyalar
- `denetim/CELAYIRLI-0085.md` (bu rapor)
- `denetim/CELAYIRLI-0085-KOORD.diff`: ana, 2 kayıt, `data/yerlesimler.js`; `git apply --check` origin/main üstünde temiz, CR 0
- `denetim/CELAYIRLI-0085-SECENEK-KOORD.diff`: 3 kayıt, `yerlesimler_ok107.js` + `yerlesimler_sinir_guney.js`; check temiz, CR 0, **önerilmiyor**
- Betikler scratchpad'de: `celayir_bilesen.py` · `hepsi.py` · `celayir_yama.py`
