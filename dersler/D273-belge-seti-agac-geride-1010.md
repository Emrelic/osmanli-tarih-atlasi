# Belge seti ve açılış — AĞACIN GERİDEYSE DUR (10 Ekim hâli)

> Kimlik `D273` · `CLAUDE.md giriş · Belge seti` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

# Tarih Atlası — her oturumun önce okuyacağı dosya

**Her satır bir KURAL; gerekçesi ve vakası [`dersler/`](dersler/DIZIN.md)dedir** (17 Eylül
2026 budaması: 167 → 25 KB, hiçbir kural silinmedi; sınav
`py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --sina`). Kural tartışılınca vakasını aç.

## Belge seti ve açılış
**AÇILIŞTA YALNIZ İKİ BELGE OKUNUR: bu dosya + kendi şartnamen** (`oturumlar/<ADIN>.md`).
🔴 **Görevsiz açıldıysan (adın "… hazır kıta …"): şartnamen [`oturumlar/HAZIR-KITA.md`](oturumlar/HAZIR-KITA.md)dir
— şimdi oku ve harfiyen uygula** (tek "HAZIRIM" tahta mesajı, bekçi, sessizlik, tek teslim,
iş bitince bekçiyi öldür).
Aşağıdakiler **yalnız iş gerektirirse, adıyla ve gerekli bölümüyle** açılır — hiçbiri "her
oturumda" değildir (4 belge = 440 KB/oturumdu; 17 Eylül 2026 token kararı, Emre).

| Belge | Ne zaman |
|---|---|
| `dersler/DIZIN.md` + `D*.md` (kuralların vakaları) | kural TARTIŞILINCA — toplu okunmaz |
| `ONCELIK.md` (neyi önce/hiç, çöl seyyahı) | kapsam sorusunda ÖNCE bak, gerekirse itiraz et |
| `YOL-HARITASI.md` · `YAPILACAKLAR.md` (nereye · iş sırası) | koordinatör; işçi şartnamesi derse |
| `oturumlar/TOPOLOJI.md` (5 makine · roller · TİP1-5 · **birleştirme düzeni**) | 🔴 EMRELIC DIŞINDA bir makinedeysen ŞART · koşu/yayın/push yapacaksan ŞART |
| `MIMARI.md` · `VERI-YAPISI.md` (motor · şemalar) | motora / veriye dokunacaksan ŞART |
| `BES-ALTYAPI.md` (5 altyapı unsuru, `ALTYAPI.md §0` yerine) | altyapı sorusu |
| `DURUM.md` · `OGRENILENLER.md` · `ETIKETLEME.md` | adıyla sorulursa |

Veriye/motora dokunacaksan ek olarak `git log --oneline -10` ve `py arac/durum_tablosu.py`
(sayılar §1.5 ile uyuşmuyorsa önce onu söyle). [`D231`](dersler/D231-belge-seti-acilis-sirasi.md)

🆕 🔴 **AĞACIN GERİDEYSE DUR — ÖLÇME** (9 Ekim 2026). `git log` koşturmak yetmez;
sonucu **`origin/main` ile KARŞILAŞTIRILIR**:
```bash
git fetch origin --quiet && git rev-list --count HEAD..origin/main
```
**0 değilse ÖLÇÜM YAPMA, DUR ve koordinatöre bildir.** Geride bir ağaçta yapılan
ölçüm yanlış değil — **BAŞKA BİR ATLASIN** ölçümüdür, ve hiçbir kapı bunu yakalamaz.
⚠️ Ölçülen vaka: UMIT'in `C:\atlas`'ı **44 commit** geriydi ve bütün kıtalar orada
açılıyordu; o ağaçta bu gecenin **42 inişi YOKTU** (Harput V2 · EPOK-SAHIP ·
bayat-taban kapısı · BOYA · gün sayacı · düzeltilmiş BÜTÜN tavanlar).
📌 Bu, `_sahiplik_uygula`ya aynı gece koyulan **bayat-taban kapısının kör noktası**:
o kapı YAMANIN tabanını ölçer, **İŞÇİNİN GÖZÜNÜ** değil. Yama taze olsa bile
bayat bir ağaçta ölçülen sayı bayattır.
🔴 Ve ölçüm **ayrı worktree'de, `origin/main`den** yapılır:
`git worktree add <yol> origin/main --detach`. Ana checkout okuma tabanıdır,
ölçüm zemini değil.
