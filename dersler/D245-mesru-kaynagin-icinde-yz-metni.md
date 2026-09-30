# D245 — Meşrû bir kaynağın İÇİNDE yapay zekâ metni olabilir: "tarayıcıdan aldım" güvence DEĞİLDİR

**Slogan:** Kırmızı çizgi *"YZ üretimi metin kullanılmaz"* der ve bu, kaynağın
**adına** göre değil **o sayfadaki paragrafın kaynağına** göre uygulanır.
Britannica meşrûdur; Britannica sayfasındaki YZ soru-cevap kutusu değildir.

---

## VAKA — 1 Ekim 2026, KAYNAK-DOGRULA-DOGUASYA

Bir işçi oturum, `data/kronoloji_cok_once1281_dogu_asya.js`nin 61 `bulunamadı`
maddesini Britannica ile yeniden taradı (betik 403 veriyordu, tarayıcı içinden
`fetch` ile açıldı — bu da ayrı bir bulgu, `§4` tuzak ⑦'nin kardeşi).

Sonuç 23 maddede kaynak buldu. **Ama ilk taraması kirliydi:**

```
Britannica sayfalarında  .ai-qna-module  ve  .answer-content  kutuları var
⇒ "Britannica AI" soru-cevap bölümleri ve YZ özetleri

İlk tarama bunları da OKUDU. DOM zinciriyle ölçüldü:
  Kertanagara  "reigned from 1268 to 1292…"   → YZ kutusundan
  Kiyomori     "By 1167, Kiyomori became…"    → YZ kutusundan
```

İşçi bunu **kendi** yakaladı, kaynağını DOM zinciriyle **gösterdi**, ve yalnız
`p.topic-paragraph` okuyarak **baştan taradı.** Bir madde (#31, Ch'oe'nin 1170
darbesi) **yalnız** YZ kutusunda geçtiği için `bulunamadı`da bırakıldı.

🟢 O maddeyi YZ cümlesiyle kapatmak, hiç kaynak bulmamaktan **kötü** olurdu:
`bulunamadı` bir sonuçtur, YZ metni ise **sahte bir sonuçtur.**

---

## NİÇİN EN KÖTÜ KİRLENME TÜRÜ

```
forum / blog          → adından belli, kapıda durur
Vikipedi              → adından belli, "tek dayanak olamaz" kuralı var
YZ üretimi bağımsız   → adından belli
🔴 MEŞRÛ SITE İÇİNDE YZ KUTUSU → hiçbir ad sınavından geçmez, çünkü ADI DOĞRU
```
`kaynak:"Britannica «Kertanagara» (britannica.com)"` satırı **doğru görünür**,
denetimden geçer, ve içindeki cümle bir dil modelinin ürünüdür. Kapı kaynağın
**alan adına** bakar; paragrafın **DOM atasına** bakmaz.

---

## KURAL

1. **Modern bir ansiklopedi/haber/arşiv sitesinden metin alan her oturum, YZ
   kutularını DOM SEVİYESİNDE dışarıda bırakır.** Britannica için ölçülmüş
   süzgeç: yalnız `p.topic-paragraph`; dışarıda bırakılanlar `.ai-qna-module`
   ve `.answer-content`.
2. 🔴 **`get_page_text` YETERLİ GÜVENCE DEĞİLDİR** — o da bu kutuları metne
   katar. "Tarayıcıdan aldım" cümlesi, alıntının editör metninden geldiğini
   **kanıtlamaz.**
3. **Alıntı yazan, alıntının DOM atasını bilmek zorundadır.** Bilmiyorsa
   alıntı yazmaz; `kaynak:` alanına eseri yazar, tırnak içine cümle koymaz.
4. **Aynı süzgeç sorusu her yeni siteye yeniden sorulur.** Bugün Britannica
   ölçüldü; encyclopedia.com, müze ve üniversite siteleri **ölçülmedi.**
   Yeni bir alan adı kullanılacaksa YZ kutusu var mı diye **önce bakılır.**

---

## KAPININ SORAMADIĞI SORU

`arac/denetle_yayin.py` ve `denetle.py` `kaynak:` alanını **metin olarak**
sınar: boş mu, kırmızı listede bir ad geçiyor mu. Sormadığı:
**"bu alıntı, o sayfanın editör metninde birebir var mı?"**

O soru ancak sayfayı açarak sorulabilir ve bu gece iki kez elle soruldu:
- `KRONO-KAYNAK-DENETLE` bu geceki 1574 maddede *"TDV alıntısı"* iddialarını
  gövdede `assert` ile aradı → **uydurma 0** çıktı (o oturumlar dürüsttü).
- `KAYNAK-DOGRULA-DOGUASYA` 23 Britannica alıntısını editör metninde birebir
  doğruladı → **23/23**.

🔜 BORÇ: bu sınav bir alete dönüşmeli. Ölçüt hazır: alıntıyı çek, sayfayı
süzgeçle aç, birebir ara, bulunmazsa **adıyla** bildir.

---

## BAĞLI DERSLER

- `D211` TDV tuzakları — ⑦ *"çıkarıcının 'okuyamadım'ı belge hakkında bir şey
  söylemez"*: bu gece o tuzağın **tersi** de ölçüldü — çıkarıcının
  "okudum"u da belge hakkında yeterli şey söylemiyor. Ne okuduğu sorulmalı.
- `D209` kırmızı çizgi ara bölge — bu ders onun **sayfa içi** hâli: kırmızı
  çizgi artık siteler arasında değil **sayfanın içinde** geçiyor.
- `D244` kural yazmak ihlali önlemez — çare yine **araç**: ad sınavı değil
  DOM sınavı.
- `CLAUDE.md §4` *"ALINTI UYDURMA"* kuralı: bu gece ölçülen iki vakada
  oturumlar uydurmadı; **ortam** uydurdu ve onlar farkında değildi.
