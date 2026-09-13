# KITA 17 — EK OKUMA / İÇERİK · paket 0044

AD: KITA 17 · DİZİN: proje kökü · ClaudEmre: evet
**Önce oku:** `oturumlar/ORTAK-KOSU10-KURALLARI.md` · `CLAUDE.md §1.6`
(8. boyut) · `ONCELIK.md`

**Dosyaların:** `denetim/` — bu tur ÖLÇÜM + ŞEMA ÖNERİSİ + TASLAK. Veri
yazımı YOK (bir PRENSİP tanımlıyor, Emre onaylayacak).

## Emre'nin iki maddesi
**H-0019** (görsel `H-0019-1.png`): *"mersiyenin metni ek okumalarda
gösterilmeli; ilgili sanatkârın/şairin hayatı ve edebiyat için önemi kısaca
anlatılmalı. **Bu prensip tüm şair · şiir · kültür · sanat maddelerinde
olmalı.**"*
**H-0020** (görsel `H-0020-1.png`): *"Bâkî'nin Selim cülûsiyesi ek okuma
olarak yer almalı. Bu tür maddelerde Bâkî'nin resmi, yoksa ilintili görsel —
kitabı vs. — olmalı."*

## ① D045 ÖNCE — ALTYAPI NE KADAR VAR?
`CLAUDE.md §1.6`: 8. boyut 2 Eylül'de açıldı, iki kalem: **① `gorsel:` alanı**
· **② EK OKUMA türleri (11 başlığın 7'si tanımsız)**. Ölç:
- ek okuma nasıl modelleniyor (alan adı · hangi dosya · kaç madde dolu ·
  `js/app.js` nerede gösteriyor)
- tanımlı türler hangileri, "şiir metni" / "şair biyografisi" türü var mı
- `gorsel:` + `gorsel_kaynak:` kaç maddede dolu
- kültür-sanat/şair maddesi kronolojide kaç tane (etiket/kapsam ile say)

## ② ŞEMA ÖNERİSİ — "şair/şiir/kültür maddesi" prensibi
`denetim/SEMA-EK-OKUMA-KULTUR-0913.md`: bir kültür maddesi hangi ek okuma
alanlarını taşır (metin · şair hayatı · edebî önemi · görsel), zorunlu mu
isteğe bağlı mı, nerede gösterilir.

## ③ İKİ ÖRNEK TASLAK — mersiye maddesi + Bâkî cülûsiyesi
`denetim/TASLAK-EK-OKUMA-0913.json` — iki kayıt, şemana göre, KAYNAKLI.

🔴🔴 **TELİF — kırmızı çizgi:**
```
16. yy metnin KENDİSİ (Bâkî, Fuzûlî, Hayâlî…)   kamu malı
MODERN çeviri · sadeleştirme · şerh             ÇOĞU TELİFLİ — KULLANMA
   ⇒ yalnız kamu malı bir neşirden, alıntı KISA (birkaç beyit), kaynak adıyla
GÖRSEL   yalnız kamu malı / CC0; `gorsel_kaynak:` alanına AÇIKÇA (§1.6)
         Bâkî'nin gerçek portresi muhtemelen YOK — minyatür/yazma varsa lisansı
         doğrula; bulunamazsa `bulunamadı`, UYDURMA/yakıştırma görsel YOK
```
- Kaynak: TDV `baki` · `mersiye` · `culusiye` (slugları sına, gövdeyi oku)
- ⚠️ `ONCELIK.md` çöl seyyahı: 8. boyut hâlâ devletler/sınırlardan SONRA.
  Prensibi tanımla ve iki örneği hazırla; **toplu içerik yazımı önerme** —
  kapsamı ölç ve sayıyla bildir (kaç madde etkilenir).

TESLİM TAHTAYA: ① ölçüm · ② şema · ③ taslak — sayıyla.
