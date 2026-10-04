# TAHTA-WEB-1004 — tahtayı git'ten çıkar, HTTP sunucusuna taşı

> Şartname · koordinatör YILDIRIM BAYEZIT · 4 Ekim 2026
> Emre'nin kararı: *"tahtayı commit yaparak kullanmaktan vazgeçelim ve bir web
> tabanlı yere dönüştürelim; herkes web tabanlı yere yazsın ve oradan okusun."*

## 0. NİÇİN — ölçülmüş taban, tahmin değil

```
son 200 commit'in 78'i (%39)  TAHTA MESAJI
en çok değişen dosyalar:  oturumlar/TAHTA.md 78 · oturumlar/tahta.json 74
                          üçüncü sıra 9   ⇒ ilk ikisi 8 KAT önde
```
`tahta.json` commit'lenmiş bir **mesaj kuyruğudur**: her mesaj bir commit ve o
commit'i beş makine birleştirmek zorunda. 3 Ekim'de UMIT'in deposu tam bu
dosyadan **rebase ortasında kilitlendi** ve Emre'nin elle müdahalesini
gerektirdi. Çatışmanın %39'u projeyle **ilgisizdir**.

🔴 **Senin işin bir özellik eklemek değil, bir MİMARİ HATAYI geri almaktır:**
git bir sürüm denetimi aracıdır, mesaj yolu değil.

## 1. YAPMAYACAĞIN İKİ ŞEY — ve niçin (karar verilmiş, tartışma yok)

**① GitHub Pages KULLANILMAZ.** Emre sordu, ölçüldü, olmuyor:
- Pages **statiktir** — dosya sunar, **yazı kabul etmez**. Oraya mesaj yazmanın
  tek yolu depoya commit atmaktır, yani **kaçtığımız şeyin kendisi**.
- Depo **HERKESE AÇIK**. Tahtayı orada yayınlamak oturum adlarını, ölçümleri
  ve iç yazışmayı dünyaya açar. 4 Ekim'de tam bu sınıftan 7 dosya depodan
  çıkarıldı. ⇒ Okunur bir görüntü bile yayınlanmaz.

**② GitHub API (Issue/Gist) yolu BUGÜN kapalı.** Teknik olarak en temizdi
(append'ler sunucu tarafında atomik ⇒ çatışma **üretmez**), ama `gh` CLI kurulu
değil ve kullanıcının jetonu çıkarılıp kullanılmaz. Emre `gh` kurup
yetkilendirirse ayrı karar olarak açılır. **Sen bu yolu denemeyeceksin.**

## 2. YAPACAĞIN — `acici.py` desenini genişlet

`arac/acici.py` zaten **altı yönde sınanmış** bir HTTP dinleyicisi:
sabit eylem listesi · `hmac.compare_digest` ile jeton · **yalnız özel ağ**
(`ipaddress...is_private or is_loopback`) · her istek loglu.
**O deseni birebir koru.** Yeni dosya: `arac/tahta_sunucu.py`.

```
POST /tahta/yaz    jeton · kim · kime · mesaj [· dayanak]   → numarayı DÖNDÜRÜR
GET  /tahta/oku    jeton · kim [· son_no]                    → yeni mesajlar (JSON)
GET  /tahta        jeton                                      → OKUNUR HTML görüntü
```
🔴 **Numarayı SUNUCU verir.** Kilidin kökü buydu: `tahta.py` numarayı
`len(kayit)+1` ile **yerel** dosyadan üretiyordu, dosya bayatsa iki makine
AYNI numarayı alıyordu. Tek yazıcı ⇒ numara tek elden ⇒ çatışma imkânsız.

### İstemci tarafı
`arac/tahta.py` ve `arac/tahta_bekci.py` **ince istemciye** döner. Komut satırı
arayüzü **DEĞİŞMEZ** — onlarca şartname `py arac/tahta.py yaz --kim ... --kime
... --mesaj ...` yazıyor; kırarsan bütün kadroyu kırarsın.
⚠️ `tahta_bekci.py`nin nabız damgası (`oturumlar/bekci/<AD>.json`, 3 Ekim) ve
`KAYNAK-DURUM.json` çıkış-3 kapısı **korunacak**.

### Ayar
`oturumlar/ag.json` (gitignore'da) içine `"tahta_sunucu": "<IP>:<port>"`.
🔴 **Makine adı KODA GÖMÜLMEZ.** Ölçüldü: EMRELIC ağ değiştiriyor (evde
`192.168.0.1`, eczanede `192.168.1.x`) ⇒ sunucu EMRELIC'te olursa eczane
makineleri EMRELIC evdeyken ulaşamaz. Varsayılan EMRELIC, ama taşınabilir
olmalı.

### Düşüş — BEYANLI, sessiz DEĞİL
Sunucuya ulaşılamazsa istemci yerel dosyaya yazar **ve ekrana basar**:
`⚠️ SUNUCUYA ULAŞILAMADI — YEREL yazıldı, çatışma riski GERİ DÖNDÜ`.
🔴 Sessiz düşüş yasak: o anda eski kilit sınıfı geri gelir ve kimse bilmez.

## 3. GİT'TEN ÇIKARMA — son adım, ve bana SOR
`oturumlar/tahta.json` + `oturumlar/TAHTA.md` → `.gitignore`.
⚠️ İkisi de **izlenen** dosya; `git rm --cached` + pathspec'li commit
**SESSİZCE ÇALIŞMAZ** (4 Ekim'de ölçüldü: pathspec'li commit index'i değil
çalışma ağacını okur, silme kaydedilmez, "1 file changed" der). Doğrusu
`git rm` ya da pathspec'siz commit. **Bu adımı sen YAPMA** — tahta canlı
kullanımda, kesme anını ben seçeceğim.
Tarih kaybolmasın: koordinatör **günde bir** arşiv commit'i atar.

## 4. SINAV — iki yönde, yazmadan ÖNCE öngörüyü dosyaya yaz
`denetim/ARAC-TAHTA-SUNUCU-SINAV-1004.py`, en az:
```
① jetonsuz istek → 401       ② yanlış jeton → 401 (compare_digest)
③ özel ağ dışı → RED         ④ iki eşzamanlı yaz → İKİ AYRI numara (asıl sınav)
⑤ `oku --son_no` yalnız YENİLERİ döndürür
⑥ sunucu KAPALIYKEN istemci yerele düşer VE UYARIYI BASAR
⑦ `tahta.py` komut satırı arayüzü DEĞİŞMEDİ (eski çağrı aynen çalışıyor)
⑧ bekçi nabız damgası ve çıkış-3 kapısı hâlâ çalışıyor
```
🔴 ④ bu işin kabul ölçütüdür — çözmeye çalıştığımız şeyin ta kendisi.
🔴 Bir kapının "çalışıyor" demesi iki yönde sınanmadan geçerli değil (`§11`).

## 5. SINIRLAR
- **Yazdığın dosyalar:** `arac/tahta_sunucu.py` (yeni) · `arac/tahta.py` ·
  `arac/tahta_bekci.py` · `denetim/ARAC-TAHTA-SUNUCU-SINAV-1004.py`
- `data/` · `CLAUDE.md` · `oturumlar/*.md` → **DOKUNMA**
- Push: `git push origin HEAD:makine/tahta-web` — **`main`e ASLA.**
  `git add -A` ve dizin pathspec'i **YASAK** (`D223`). Ve `D259`: pathspec
  fazlalığa karşı korur, **eksikliğe karşı korumaz** — bir aracın yazdığı
  dosyaların listesini `git status --porcelain`den oku, hafızandan yazma.
- Motor tuzuna (`uret_petek.py` · `renkler.py` · `girdi.py` ·
  `motor_onbellek.py`) **dokunma** (§9.1).
- Teslim: TEK mesaj, üçlü kuralla (① ne ölçtüm ② ne bulamadım ③ ne istiyorum)
  + değişen dosya listesi + sonunda "bekçimi öldüreyim mi?"
