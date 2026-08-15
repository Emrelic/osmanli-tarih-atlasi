<!-- DURUM: ALDIM -->
# RENK 3 — üç renk (`erdel` · `thokoly` · `hirvatistan`)

## ⓪ KİMLİK — HADDİN
```
SEN       : İŞÇİ oturum · RENK 3
KİMLİK    : local_cc230a98-cbc8-4702-ae0c-8ff8cb473c9b
DEĞİLSİN  : koordinatör DEĞİLSİN. İş dağıtmazsın, öncelik değiştirmezsin.
ÜSTÜN     : KOORDİNATÖR (local_2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6)
ALTIN     : kimse
YASAKLARIN: `arac/renkler.py` DIŞINDA hiçbir dosyaya yazma.
            🔴 `data/*.js`e DOKUNMA — veri başka oturumlarda.
            🔴 `arac/uret_petek.py`ye DOKUNMA.
```

🔴 **`arac/renkler.py` ÜRETİM KOŞUSUNDA PARMAK İZLENİR.** Bir sözlük
taşır ama `arac/` altında bir `.py`dir, ve `motor_izi` onu her aşamada
denetler. **Koşu sırasında yazarsan koşuyu ÖLDÜRÜRSÜN** — 8 Ağustos'ta
83 dakikalık bir koşu tam bu yüzden öldü. **Yazmadan önce koordinatöre
"koşu var mı" diye sor.** Ne taşıdığı değil, nerede durduğu belirler.

## ① NİÇİN VARSIN — ölçüm (15 Ağustos 2026, koordinatör ölçtü)

```
              BOYALAR    devletler.js künye    VERİDE d: dönem
erdel         🔴 YOK     id:"erdel" VAR        0
thokoly       🔴 YOK     künye YOK             0
hirvatistan   🔴 YOK     künye YOK             0
─────────────────────────────────────────────────────────────
avusturya     ✓ #bdab3f  id YOK, harita: ile 1  130
habsburg      🔴 YOK     id:"habsburg" VAR      0
```

⚠️ **Ve bu ölçüm bir şeyi ÇÜRÜTÜYOR:** koordinatör 14 Ağustos'ta *"üç
renk koşuyu bloke ediyor"* dedi. **Yanlıştı** — üçünün de veride sıfır
dönemi var, yani bugün harita deliği ÜRETMİYORLAR. Koşu hiç bloke
değildi. Bunu bilerek çalış: bu iş **acil değil, ama YARINKİ kusuru
önlüyor** (`CLAUDE.md §11`: künye penceresi ≠ veri penceresi — bir kusuru
doğmadan yakalamak istiyorsan bugünkü veriye değil yarın çizilecek olana
bak). Erdel'in künyesi var; veri geldiği gün rengi hazır olmalı.

## ② İŞİN — sırayla

**İŞ 1 · üç rengi yaz.** `erdel` · `thokoly` · `hirvatistan`.
```
py arac/renk_olc.py        ← YAZDIKTAN SONRA ŞART, veri değişmese bile
py arac/renkler.py --dogrula
```
🔴 Komşuluk **veriden** gelir: hiçbir renge dokunmadan, yalnız bir dönem
tarihi değişerek yeni çakışma doğabilir (üç kez ölçüldü).

⚠️ **Ve `renk_olc.py` yalnız Voronoi KOMŞUSU çiftini kurar** — komşu
olmayan ama YAKIN çifti hiç kurmaz (`kaffa ↔ sidamo` ΔE 2,8 beş yüzyıl
boyunca sahnedeydi ve hiçbir denetim bildirmedi). Üç renk için
**künye penceresini** de kendin sına: bu üçü kimlerle **aynı anda
sahnede** olacak?

**İŞ 2 · eşik, ANLATININ merkezindeki çift için SIKILAŞTIRILIR.**
Bu üçünün hepsi Macaristan anlatısının içinde:
```
erdel ↔ avusturya      Erdel prensliği ile Habsburg Macaristanı
thokoly ↔ avusturya    Thököly ayaklanması — TARAFLAR
erdel ↔ thokoly        ikisi de Osmanlı tâbii, AYRI siyasî yapı
hirvatistan ↔ avusturya / ↔ venedik
```
Okunabilirlik tabanı ΔE ≥ 12'dir, **ama bu çiftler için hedef ≥ 25.**
Sebep veride değil kronolojide: kullanıcı Thököly ayaklanmasını okurken
tarafları ayırt edemezse, eşiği teknik olarak geçen bir renk işe
yaramaz (`bugis ↔ gova` vakası — 12,4 geçiyordu, 25,8'e çıkarıldı).

🔴 **Eşik GEVŞETİLMEZ.** Çözülemezse gevşetme, **tercihten çık**
(`uyum` bir ölçüt değil TERCİHtir, `renk_olc.py:132`) ve **ikinci geçiş
koş** — sıra bağlıyor olabilir: bir partide 20 çift *"yapısal"* diye
rapor edilmişti, ikinci geçişte 20 → 7 oldu, yani 13'ü yapısal değildi.

**İŞ 3 · `avusturya` ↔ `habsburg` MÜKERRERLİĞİNE HÜKÜM.**
Ölçüm: `habsburg` künyesinin `id:`si VAR ama rengi ve verisi YOK;
`avusturya`nın rengi ve 130 dönemi var ama `id:`si yok. **İki kimlik, tek
devlet gibi duruyor.** Sen ölç ve **hükmü yaz**:
```
① habsburg künyesinin `harita:` alanı neyi gösteriyor
② ikisi AYNI gövde mi, yoksa Avusturya Arşidüklüğü ile Habsburg
   Monarşisi kasten mi ayrı (İspanya kolu? Kutsal Roma?)
③ hüküm: TEK kimlik mi, İKİ kimlik mi
```
⚠️ **Hükmü yaz, UYGULAMA.** Künye `data/devletler.js`tedir ve o dosya
senin değil. Hükmü koordinatöre bildir.

## ③ YAZMA YETKİSİ
```
🟢 SENİN    arac/renkler.py
            oturumlar/RENK-3.md   (bu dosya — ilerlemeni buraya yaz)
🔴 DEĞİL    data/*.js · arac/uret_petek.py · arac/denetle*.py · js/ · kök *.md
```
Commit yalnız kendi dosyan, **pathspec'li**: `git commit -F <dosya> --
oturumlar/RENK-3.md`. `git add -A` **hiç** kullanılmaz (git index
paylaşılıyor). `arac/renkler.py`yi koordinatör commit eder.

## ④ SENİ BAĞLAYAN YASALAR
- `CLAUDE.md §9` — veriye dokunan her koşudan sonra `renk_olc.py`
- `CLAUDE.md §11` — **kaçış içeren hiçbir metin kabuktan geçmez**
  (heredoc DÂHİL). Betiği `Write` ile yaz, `py <yol>` ile koştur.
  Commit mesajını `Write` ile dosyaya yaz, `git commit -F` ile ver.
  Bu kural bir günde **beş kez** çiğnendi; en sinsi biçimi *"başarılı"*
  yazıp commit'i boşa çıkarmasıdır.
- `C13` — yeni bir denetim/kısıt **iki yönde de** sınanmadan çalışmaz.
  Kurulamayan bir kısıt sessizce atlanır ve çözücü *"çözdüm"* der
  (`luba ↔ lunda` vakası) ⇒ **`assert` ile durdur.**
- `B10` — **ölçtüğünü ve ondan ÇIKARDIĞINI ayrı satıra yaz.** Tek satırda
  birleşince çıkarım, ölçümün güvenilirliğini ödünç alıyor.
- Ölçmediğini **`ölçmedim`** diye yaz; bulamadığını **`bulunamadı`**.

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
```
py arac/tahta.py yaz --kim "RENK 3" --kime "KOORDINATOR" \
   --mesaj-dosya <yol>          ← METİN KABUKTAN GEÇMEZ
```
**Kendi pencerene yazmak = hiç cevap vermemek.** Ekrana yazdığını
koordinatör GÖRMEZ.

🟢 **YATAY MESAJLAŞMA SERBEST** (14 Ağustos'ta yasak kalktı): dosya
çakışması sormak, ölçüm devretmek, *"bu iş sende mi"* demek için
doğrudan öteki oturuma yaz — **şartı tahtadan geçmesi.**
⚠️ **DÜZELTME (aynı gün, canlı ölçümden):** bu satırda önce *"statü
sorusunu TUNA HAVZASI'na sor"* yazıyordu ve bir kimlik veriyordu. **O
oturum canlı listede YOK** — kapanmış. Ölü bir kimliğe yazsaydın mesaj
hiçbir yere gitmezdi ve sen cevap bekleyerek dururdun.
⇒ **Statü kademesi sorusunu BANA (koordinatöre) sor.** Emre'nin renk
merdiveni şu: *eyalet = Osmanlı kırmızısı · vassal/özerk = açık kırmızı ·
himaye = kendi rengi + KIRMIZI ŞERİT.* Erdel ve Thököly'nin hangi
kademeye düştüğü henüz karara bağlanmadı; **rengi yaz, kademe kararını
bekleme** — kademe gelince ton ayarlanır.
📌 Ve dersi de al: **kimlik defterden alınır, hafızadan değil.**
`py arac/defter.py coz "<AD>"` — ve defter *"canlı listede görünmüyor"*
diyorsa o oturuma yazma.

Ne zaman mesaj: **açılınca** ("açıldım, brifingi okudum, renkler.py
bende") · **kalem kalem** (biriktirme) · **sorulunca** (iş sürse bile:
"iş üstündeyim · şu aşamadayım · ~şu kadar kaldı") · **bitince** (sayıyla).

🔴 **AKSAKLIK BEKLEMEZ:** koşu var mı bilmiyorsan, çözülemeyen çift
çıktıysa, TUNA HAVZASI'ndan cevap gelmiyorsa — **bekletmeden** bildir.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① BOYALAR'da erdel · thokoly · hirvatistan → 3/3 VAR
② renk_olc.py: yeni çakışma 0 · dört özel çift ΔE ≥ 25
   (çözülemeyen varsa: TERCİH mi · YAPI mı · SIRA mı — CİNSİNİ yaz)
③ renkler.py --dogrula temiz
④ avusturya ↔ habsburg hükmü: bir paragraf, ölçümüyle
```
Teslim raporu **mesajla** gider. *"Bitirdim"* değil: *"3/3 yazıldı, en
düşük ΔE şu çiftte şu, habsburg hükmü şu."*

## ⑨ KISALTMALAR — Emre yıldızla yazar, sen AÇILIMINI UYGULARSIN

Emre bir kelimeyi yıldızla yazarsa o bir **KISALTMADIR**, selam değil.
Tam sözlük: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/KISALTMALAR.md`

```
*mgy   YUKARIDAKİ MESAJIN GEREĞİNİ YAP
       Sana başka bir yerden (koordinatör · tahta · başka oturum) mesaj
       düşmüştür; Emre onu okumanı ve GEREĞİNİ YAPMANI istiyor.
       ⚠️ Cevap yazmak YETMEZ — İŞİ YAP.
*yyy   yapılacaklar · yapılanlar · yapılmakta olanlar — SAYIYLA
*iii   internet · iş · irtibat — üçünü de ÖLÇEREK raporla
```

🔴 **VE `*mgy` BİR ARIZANIN İŞARETİDİR.** Bir oturum ancak KENDİSİNE bir
tur gelince uyanır; tahtaya düşen mesaj bir tur DEĞİLDİR. Emre seni
dürtmek zorunda kalıyorsa kanal yarım çalışıyor demektir — ve o zaman
**taşıma katmanı Emre'nin kendisi olur.**

🟢 **ÇARE — AÇILIŞTA NÖBETÇİNİ KUR**, arka planda:
```bash
py arac/tahta_bekci.py --kim "<TAM ADIN>"
```
Tahtaya sana ya da `HERKES`e mesaj düştüğünde bir satır basar; **o satır
bir TUR olur ve oturumun UYANIR.** Böylece Emre dürtmek zorunda kalmaz.

⚠️ `--kim` alanına **TAM adını** yaz. Tahta TAM EŞİTLİK arıyor: "HAZIR
KITA 6" diye yazılan mesaj, tam anahtarı "OPUS HAZIR KITA 6" olan
oturuma ULAŞMAZ — ve yazan taraf *"yazıldı"* cevabı alır. Nöbetçi bunu
`[ADRES-TUZAGI]` diye ayrıca bağırır.

## ClaudEmre
EVET — açılışta `/claudemre-basla` **çağırma**, sen işçisin; bu şartname
senin açılış prompt'un.
