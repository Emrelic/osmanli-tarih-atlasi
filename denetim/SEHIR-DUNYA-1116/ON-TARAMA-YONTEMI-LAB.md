# ÖN TARAMA YÖNTEMİ — Britannica /place/ sayfalarından kuruluş cümlesi (LAB, 17 Kasım 2026)

Amaç: yıllı kuruluş/ilk-anılış tanığı olan şehirleri, ajan başına ~120k token harcamadan toplu bulmak. 4 günlük iş ~10 dakikaya indi
(LAB P3: ajan partileri %5-12 verim; ön tarama 365 adaydan 24 kayıt, hit olmayanlar zaten yıl vermiyor).

## Adımlar
1. **Aday listesi:** tarihçesi olmayan şehirler (LAB: `f2_aday.js` → `F2-ADAY.tsv`; ad + koordinat 30 km eşleşmesi). Ad = Britannica slug'ı (boşluk → '-'; `/place/<Ad>`).
2. **Gömülü tarayıcıda (mcp__Claude_Browser__*; Britannica sekmesi aç: önce `navigate https://www.britannica.com/place/Peshawar`) aynı-köken `fetch('/place/<slug>')` + `DOMParser`.**
   Betik curl/WebFetch ile 403 verir; tarayıcı içi fetch çalışır. İstek aralığı ≥350 ms. `javascript_tool` 45 sn'de zaman aşar:
   işi **arka planda başlat** (`window.__job = (async()=>{...})()` ve `await` ETME), sonra sonuç dizisini ayrı çağrılarla oku. Bir çağrıda ≤40 ad.
3. **Görünür gövde + FAQ/YZ bloğu HARİÇ:** Britannica sayfalarında 'Summary created from Britannica articles using AI' bloğu makale altındaki
   kapalı SSS (accordion) içindedir; `innerText` bunu göstermez, `textContent` gösterir. Bu yüzden yalnız `p` öğelerini al ve
   `p.closest('details,[class*=faq],[class*=FAQ],[class*=accordion],[id*=faq]')` olanları ATLA. **YZ özeti kaynak değildir (CLAUDE.md).**
4. **Cümle süzgeci (aday üretir, karar vermez):** cümle ≤260 karakter ve
   `/(found|establish|settled|built|laid out|created|incorporated|began as|originated|grew up|colon|fort )[^.]{0,140}\b(1\d{3}|[5-9]\d{2})\b|\b(1\d{3})\b[^.]{0,100}(found|establish|settled|laid out)/i`.
5. **ELLE SEÇİM (zorunlu):** aday cümleler arasından yalnız şunları al:
   - **kuruluş/ilk-yerleşim cümlesi** ('founded in 1625', 'established in 1885 as a settlement', 'was created in 1938');
   - özne **şehir** ya da **madde-konusu zamir** ('It was founded…', 'Founded in 1904…'; başlık şehir) — ic_not'a 'özne zamir = madde konusu' yaz;
   - **ELE:** belediye ('incorporated as a municipality'), üniversite/enstitü/hastane, demiryolu-uzantısı ('railroad extended'), kale/bina yılı (kale = şehir değil;
     istisna: kalenin şehrin çekirdeği olduğu açıkça yazılıysa beyanla), ad değişimi, devir/antlaşma, idari-merkez/başkent yılı, yüzyıl/onyıl ('18th century', '1890s'), efsane ('said to have been').
   - 'about/circa/by' → kesinlik **belirsiz** (yıl tek başına kesin değil); aralık ('between 1904 and 1907') → ele.
6. **Tanık:** sayfa cümlesinden **BİREBİR** ≤15 kelimelik alt dizgi; yıl ve (varsa) şehir adı içinde. Üretimden önce `includes()` ile sayfada doğrula.
7. **Kayıt üretimi (betik: `P3/onden_uret.py`):** koordinat LISTE satırından (**ÖNCE koordinatı doğrula: KOORD/ yöntemi, ad çakışması riski!**);
   atlas noktası 3 km içindeyse `arac/sehir_tarihce.atlas_ilk_gunleri` ile başlangıcı ölç: atlas başlangıcı kaynak yılından ÖNCE ise `sahip:[]` ve
   atlas başlangıcı düzeltme adayı (KASA); atlas yoksa `__BOSLUK__` kuruluştan 1900-01-01'e + ic_not beyanı (VERI-YAPISI 'Sahibi bilinmiyorsa __BOSLUK__').
   `py arac/sehir_tarihce.py yaz … ; denetle …` → ihlal 0 şart.
8. **Kaynak:** `Encyclopaedia Britannica, '<Ad>', https://www.britannica.com/place/<Slug> (tarayıcıda okundu; görünür makale gövdesi, YZ-SSS bloğu dışı)`. TEK KAYNAK beyan; çift teyit için Columbia/SAHO/TDV'den ikinci kaynak ayrıca aranır (bağımsızlık ölçümü ic_not'a).

## Çalışan örnek (tarayıcı konsolu)
```js
window.__tara = async function(names){
  const out=[]; const re=/(found|establish|settled|built|laid out|created|incorporated|began as|originated|grew up|colon|fort )[^.]{0,140}\b(1[0-9]{3}|[5-9][0-9]{2})\b|\b(1[0-9]{3})\b[^.]{0,100}(found|establish|settled|laid out)/i;
  for(const n of names){
    const r=await fetch('/place/'+encodeURIComponent(n.replace(/\s+/g,'-')),{credentials:'omit'});
    if(!r.ok){out.push([n,r.status]);continue;}
    const d=new DOMParser().parseFromString(await r.text(),'text/html'); const sents=[];
    d.querySelectorAll('p').forEach(p=>{ if(p.closest('details,[class*=faq],[class*=FAQ],[class*=accordion],[id*=faq]')) return;
      p.textContent.replace(/\s+/g,' ').trim().split(/(?<=[.!?])\s+(?=[A-Z])/).forEach(s=>{ if(s.length<260&&re.test(s)) sents.push(s); }); });
    out.push([n,200,d.title.slice(0,40),sents.slice(0,3)]);
    await new Promise(s=>setTimeout(s,350));
  } return out; };
```

## Verim ve sınırlar
- /place/ sayfası yoksa (404) çoğu küçük kasaba: Columbia/Encyclopedia.com (arama sonucundan URL), SAHO (Güney Afrika), DACB, TDV, Banglapedia, ЭСБЕ API ile aynı kalıp denenir.
- Ön tarama **aday üretir**; kayıt kararı (kuruluş mu? özne şehir mi?) elle verilir: otomatik yazma YASAK (belediye/üniversite yıllarını kuruluş sanma riski).
- Atlas başlangıcı kaynak yılından ÖNCE çıkan şehirler ATLAS-BASLANGIC-ADAYLARI'na girer (atlas yanlış erken başlıyor); ÖNCE ise zincir boşluğu (≤1 yıl dikiş, >1 yıl borç/atlas adayı).
- Koordinat güvenilmezse (modern-ana/geonames ilk-PPL tahmini) önce `KOORD/` taramasıyla doğrula: ad çakışması (Chandrapur/Chhapra Gujarat'ta yanlış).
