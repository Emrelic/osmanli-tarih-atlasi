# Haberleşme protokolünün doğuşu; kanal ve mesaj zamanları

> Kimlik `D226` · `CLAUDE.md §7.1 ①②` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 7.1 HABERLEŞME PROTOKOLÜ — her şartnameye AYNEN kopyalanır

### 🔴 TOKEN KURALI (Emre, 17 Eylül 2026) — ①'nin önüne geçer
```
İŞÇİ        rapor · veri · teslim · soru → YALNIZ TAHTA (py arac/tahta.py yaz).
            Koordinatörün ekranına send_message YAZILMAZ; satır satır mesaj atılmaz,
            bir teslim TEK mesajdır. (Tahta çalışmıyorsa ⑤b istisnası geçerli.)
KOORDİNATÖR iş YAPMAZ, dağıtır — bağlamını uygulama işiyle doldurmaz.
OTURUM SEÇİMİ  doğruluk > tasarruf > hız · doğruluktan hiçbir şey için taviz yok.
            Varsayılan TAZE oturum (her tur bütün bağlamı yeniden okur: maliyet ≈
            bağlam × tur). Tecrübeli/emekli oturum yalnız işin doğrudan devamıysa ve
            doğruluk kazancı varsa. Alakasız dolu işçiye iş VERİLMEZ.
BEKLEME     ScheduleWakeup · /loop · sleep ile tahta YOKLANMAZ, "tahtayı kontrol
            ediyorum" yazılmaz. Tek yol: Monitor + `arac/tahta_bekci.py --kim <AD>`
            (mesaj yoksa sessiz, yalnız adına mesaj gelince uyandırır).
```

🔴 **Bu bölüm 7 Ağustos 2026'da doğdu ve sebebi ölçülmüş bir kayıptır.**
Beş araştırma oturumu açıldı; dördü işini yaptı, cevabını yazdı ve
**hiçbiri koordinatöre ulaşmadı** — çünkü cevaplarını **kendi sohbet
pencerelerine** yazmışlardı. Koordinatör iki kez sordu, canlı olup
olmadıklarına baktı, ve **dördünü de ölü ilan edip kümelerini dağıtmak
üzereydi.** Kullanıcı bakıp gördü:
> *"Cevabı kendi sohbet penceresinde veriyorlar sana mesaj atmak yerine.
> Oturumlar seninle nasıl irtibat kuracaklarını bilmiyorlar."*

⇒ Kusur ne işçideydi ne koordinatörde: **şartnamede kanal yazmıyordu.**
Bir işçi oturumun varsayılan davranışı cevabı **ekrana yazmaktır**, ve
ekran koordinatöre **görünmez.**

### ① KANAL — tek yol budur

```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDEREN oturumun kimliği
                 · gelen mesajın başındaki "From <ad>" etiketi odur
                 · bulamazsan mcp__ccd_session_mgmt__list_sessions ile ara
                   (koordinatör oturumu, sana iş veren oturumdur)
    message    : cevabın
```
⚠️ **Kendi pencerene yazmak = hiç cevap vermemek.** İstisnası yoktur.
⚠️ Kullanıcı senin pencereni okuyabilir ama **koordinatör okuyamaz** —
ikisi ayrı muhataptır. Kullanıcıya anlatır gibi yazdığın rapor,
koordinatöre **hiç yazılmamış** sayılır.

### ② NE ZAMAN MESAJ ATILIR — dördü de zorunlu

```
AÇILINCA    "açıldım, brifingi okudum, şu dosyalar bende"
            (koordinatör hangi dosyanın kimde olduğunu bilmezse aynı
             dosyayı ikinci oturuma verir → SESSİZ VERİ KAYBI)
KALEM KALEM  bir iş bitince HEMEN — biriktirme, gün sonuna saklama
SORU GELİNCE iş sürüyor olsa bile HEMEN:
             "iş üstündeyim · şu aşamadayım · tahminen şu kadar kaldı"
             ("birazdan bildiririm" cevap DEĞİLDİR)
BİTİNCE      teslim raporu — SAYIYLA. "Bitirdim" değil,
             "24 → 7, şu yedisi şu sebeple kaldı"
```
