# İşçi işçiye yazmaz kuralının düşmesi — yatay mesajlaşma

> Kimlik `D227` · `CLAUDE.md §7.1 ③` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

### ③ ~~İŞÇİ İŞÇİYE DOĞRUDAN YAZMAZ~~ → 🔴 **KURAL DEĞİŞTİ, 14 Ağustos 2026**

**ESKİ KURAL (çürüdü):** *"Bir oturumun işi başka bir oturumu
ilgilendiriyorsa koordinatöre yazılır, koordinatör iletir. Sebebi yetki
değil ÖLÇÜM: koordinatör kimin neyi beklediğini bilmezse darboğazı
göremez."*

🔴 **GEREKÇESİ ORTADAN KALKTI VE YASAK KALDI — klasik bayat kural.**
```
kural yazıldığında   kanal `send_message`dı: ÖZEL ve GÖRÜNMEZ. İki işçi
                     konuşursa koordinatör HİÇ göremezdi.        ✓ haklıydı
14 Ağustos 2026      kanal TAHTA (`arac/tahta.py`): HERKESE AÇIK, git'te,
                     `--kime` alanı kimin kime yazdığını taşıyor.
                     Yatay mesajı koordinatör ZATEN GÖRÜYOR.     ✗ gerekçe yok
```

**Ve bedeli aynı gün ölçüldü — Emre sordu:**
> *"Oturumlar birbirleriyle mesajlaşarak anlaşması gerektiği yerde
> birbirlerine mesaj atmıyorlar, öyle aval aval bakıyorlar. Nedir bu
> mesajlaşma kültürünü bozan şey?"*

Ölçüm: **60 tahta mesajının OTURUMDAN OTURUMA olanı: 1.** Ve sebebi
kültür değil, **bu satırdı** — işçiler aval aval bakmıyor, **kurala
uyuyorlardı.**
```
İKİ ÇAKIŞMA (aynı gün): TUNA HAVZASI ve M-0017 iki oturuma birden gitti.
Birbirlerine "bu iş sende mi" diye sorabilselerdi 30 SANİYE;
koordinatörden geçtiği için 20+ DAKİKA sürdü ve biri iki kayıt
yazdıktan sonra Edit uyarısıyla durdu.
```

## 🟢 YENİ KURAL — YATAY MESAJLAŞMA SERBEST, ŞARTI GÖRÜNÜRLÜK
```
py arac/tahta.py yaz --kim "<SEN>" --kime "<ÖTEKİ OTURUM>" --mesaj "..."
```
```
🟢 SERBEST   dosya çakışması sorma · ölçüm devri · "bu iş sende mi" ·
             bir bulgunun ötekini ilgilendiren kısmı · doğrudan teyit
🔴 YİNE DE KOORDİNATÖRE   iş ATAMASI · öncelik değişikliği · kaynak
             çelişkisi hükmü · yetki gerektiren her şey
⚠️ ŞART: TAHTADAN geçecek. Özel kanal (`send_message`) yatay konuşma için
   KULLANILMAZ — görünmezliği, eski yasağın haklı olduğu tek sebepti.
📌 Ve koordinatöre AYRICA haber vermeye gerek yok: tahtayı zaten okuyor.
   Aynı bilgiyi iki kez göndermek, ikisinin de okunmamasına yol açar.
```

📌 **Dersin kendisi:** bir yasak, onu doğuran şart ortadan kalktığında
**kendiliğinden düşmez** — çünkü yasağa uyanlar onu sorgulamaz, uyulduğu
için de kimse bedelini ölçmez. ⇒ *Bir kuralın gerekçesi değişince kuralın
kendisi YENİDEN ÖLÇÜLÜR; "hâlâ yazılı" olması "hâlâ doğru" demek değildir.*
