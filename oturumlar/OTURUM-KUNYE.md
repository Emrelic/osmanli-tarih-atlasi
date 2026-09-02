# OTURUM KÜNYESİ — hangi oturum kim, ve hangi işte

> Tutan: koordinatör. **Emre'nin isteği (1 Eylül 2026):** *"HAZIR KITALARDAKİ
> İSİM KARMAŞASINA ÇÖZÜM BUL — HER OPUS SONNET OTURUMUNA YAPTIĞI İŞE GÖRE
> İSİM VER YA DA NUMARALARINI DÜZELT."*

## 🔴 KARMAŞANIN ÖLÇÜLMÜŞ SEBEBİ — iki ad uzayı var ve BİRBİRİNİ TANIMIYOR

```
① OTURUM BAŞLIĞI   `list_sessions`in gösterdiği ad. Emre açarken verir.
                   Örnek: "PAKET-0034"
② TAHTA ADI        oturumun kendi yazdığı ad (`--kim`). Şartnameden gelir.
                   Örnek: "OPUS HAZIR KITA 106"
```

**2 Eylül 2026'da ölçüldü — ikisi AYNI OTURUM için farklıydı:**
```
local_49b1017f…   başlık "PAKET-0034"  ·  tahtada "OPUS HAZIR KITA 106"
local_e9ebc14b…   başlık "PAKET-0039"  ·  tahtada "OPUS HAZIR KITA 109"
```

⚠️ **Ve zararı somut:** koordinatör tahtaya `OPUS HAZIR KITA 106` diye
yazıyor, `list_sessions`ta o adı **bulamıyor**, oturumu **ölü sanıyor.**
`CLAUDE.md §7`de kayıtlı vakanın tam sebebi bu — *"dört oturum ölü ilan
edilmek üzereydi, dördü de çalışıyordu."* Orada teşhis *"cevabı kendi
penceresine yazıyorlar"* olmuştu; **bu ikinci sebep ve o gün görülmedi.**

## 🟢 ÇARE — TEK ADRES, VE O ADRES `session_id`

Ad değil **kimlik** adreslenir. Bir oturumun adı iki yerde farklı olabilir;
`session_id` **tektir ve değişmez.**

### İŞÇİ OTURUMUN İLK İŞİ — açılış mesajına bunu EKLE
```
py arac/tahta.py yaz --kim "<TAHTA ADIN>" --kime "KOORDINATOR" --mesaj "
AÇILDIM · brifingi okudum · şu dosyalar bende: …
oturum kimliğim: <session_id>
oturum başlığım: <list_sessions'ta görünen ad>
"
```
🔴 **`session_id` olmadan açılış mesajı EKSİKTİR.** Koordinatör sana
`send_message` ile ulaşamaz; yalnız tahtadan seslenebilir ve tahtayı ne
zaman okuyacağın belli değildir.

### 🔴🔴 KİMLİĞİNİ NASIL ÖLÇECEKSİN — TEK DOĞRU ALET
```
mcp__ccd_session_mgmt__get_session("self")     →  sessionId ve title, DOĞRUDAN
```
⚠️ **SCRATCHPAD YOLUNDAKİ UUID'Yİ OTURUM KİMLİĞİ SANMA.** Bu vaka
gerçekleşti ve **bir oturumun bütün mesajlarını bozdu:**
> PAKET-0037, 2 Eylül: *"Bugüne kadarki bütün mesajlarımda (M-1898 · M-1905
> · M-1958 …) `local_8e1e88ad-…` yazdım; **O YANLIŞ.** Scratchpad yolundaki
> UUID'yi oturum kimliği sandım."* Gerçek kimliği `local_7449dd23-…` çıktı.

📌 Ve daha beteri: **daha önce bir oturum bu yöntemi "kendimde sınadım,
tuttu" diye onaylamıştı** (M-0023) — o oturumda **tesadüfen** tutmuş.
İki başka oturum (M-0010 · PAKET-0103) şüphelenmiş ve haklı çıkmışlar.
⇒ ***Bir yöntemin bir kez tutması, doğru olduğunu göstermez.*** Kimlik
gibi tek doğrulu bir şey **tahmin edilmez, ALETİNE SORULUR.**

### KOORDİNATÖRÜN İŞİ
Bir oturumun kimliği doğrulanınca:
1. `set_session_title` ile başlığı **tahta adına** hizala (tahta, projenin
   kayıt kanalıdır — başlık ona uyar, tersi değil).
2. Aşağıdaki tabloya yaz.

⚠️ **TAHMİNLE YAZILMAZ.** Bir oturumun kimliği ancak **o oturumun kendi
mesajından** öğrenilir. Ada bakıp eşleştirmek, `§11`in *"ölçüm doğru,
çıkarım yanlış"* ailesine yeni bir vaka eklemekten başka şey değildir.

---

## KÜNYE — yalnız DOĞRULANMIŞ satırlar

| session_id | tahta adı | iş | doğrulandı |
|---|---|---|---|
| `local_49b1017f-73ac-404c-aa6e-e72340748e34` | OPUS HAZIR KITA 106 | koridor ağı · süre kaynağı · güzergâh | 2 Eylül · kendi mesajı |
| `local_e9ebc14b-a780-4a6f-9172-79af0ef7de8a` | OPUS HAZIR KITA 109 | güney sınır · İmâdiye · Şırnak | 2 Eylül · kendi mesajı |
| `local_2259d4bf-8f1b-4916-bac6-7d351fafd831` | PAKET-0003-0006 | arayüz kuyruğu · karar masası triyajı | 2 Eylül · `get_session("self")` |
| `local_7449dd23-8e55-4452-a6fe-6460309e6d55` | PAKET-0037 | Niş/Vidin · paket kolu (Fable) | 2 Eylül · `get_session("self")` |

⚠️ **PAKET-0037 satırı bir DÜZELTMEDİR.** Aynı oturum M-1898'den beri
`local_8e1e88ad-…` diye yazıyordu ve o **yanlıştı** (scratchpad yolundaki
UUID). Eski kimliğe gönderilmiş her mesaj **hedefine varmamıştır.**

*(Öteki oturumlar açılış mesajlarında kimliklerini bildirdikçe eklenecek.
Boş kalan satır bir eksiklik değil, **bir ölçüm borcudur** — ve tahminle
doldurulmaz.)*
