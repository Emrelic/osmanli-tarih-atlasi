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

*(Öteki oturumlar açılış mesajlarında kimliklerini bildirdikçe eklenecek.
Boş kalan satır bir eksiklik değil, **bir ölçüm borcudur** — ve tahminle
doldurulmaz.)*
