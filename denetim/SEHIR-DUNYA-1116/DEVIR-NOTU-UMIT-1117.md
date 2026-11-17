# UMIT devir notu (17 Kasım 2026)

**Makine/dal:** UMIT (eczane SQL makinesi: Claude+Python ≤%25, ajan ≤2, ağır komut yok). Dal `sehir-afrika-kuzey-dogu-1116` (origin). `main`'e push yalnız KASA; tam `denetle`/paketle/surum_damgala/push_kapisi KOŞMA; hafif kontrol: `py -I -X utf8 arac/sehir_tarihce.py denetle data/<dosya>.js`.
**Kurallar:** yalnız Sonnet ajan; kısa rapor (sayı+dal+engel); tekrar doğrulama yok; tanık = tam gövdeden birebir, yıl+şehir aynı cümlede (madde konusu zamir ise ic_not; aksi kesinlik belirsiz); Britannica YZ-SSS bloğu kaynak değil (innerText gövde); indirme yok; ilk = kaynaklı en erken yazılı anılış (imtiyaz/kale/ad değişimi kur/olay); atlas başlangıcından önce başlayan ilk için kaynaklı zincir şart yoksa kur'a; k3 ölçütü: bölge merkezi + 1900'de ≳100 bin ya da tarihî (küçük idari merkezler kat=4). Commit: `git add -- <adlar>` + `git commit -F <dosya>`; sed/heredoc yok; push `git push origin HEAD`.

**Yazılı (hepsi dalda):** Mısır/Mağrip/ada (sehir_tarihce_afrika_*, adalar_ek), kuzey_avrupa_1-5, karayip_1-5, dogu_borc_1-4 (+ _5 beklemede), tarihçe dışı: BORC-GUNCEL-UMIT.tsv, KOORD-HATA (temiz), KAPSAM 50 satır (34'ü kat=4), YAMA-OSM-MISIR-UMIT.json (KASA uygular). Raporlar `denetim/SEHIR-DUNYA-1116/*-RAPOR-UMIT.md`, yazılamayanlar `YAZILAMADI-*.md`.

**Süren (eski oturumda; çıktıları o oturum commit'ler):** Doğu borcu 5 (`data/sehir_tarihce_dogu_borc_5.js`, Opus ajan) ve ön tarama (`data/sehir_tarihce_onden_1.js`, Sonnet; LAB yöntemi `ON-TARAMA-YONTEMI-LAB.md` → `git show origin/sehir-afrika-1116:denetim/SEHIR-DUNYA-1116/ON-TARAMA-YONTEMI-LAB.md`).

**Sıradaki işler (öncelik):**
1. Ön tarama (Britannica /place/ fetch+DOMParser, ≥350 ms, ≤40 ad/çağrı, arka plan işi) ile BORC (BORC-GUNCEL-UMIT.tsv durum=BORC, eklenen boş, kat=4 hariç) tarihçesiz şehirleri toplu: onden_2, onden_3…
2. Kuzey Avrupa BK/İrlanda kalan ~39 (YAZILAMADI-KUZEY-5.md), İskandinavya kalan, Karayip kalan (YAZILAMADI-KARAYIP-3/4.md, yıl bulunamayanlar: ön tarama + ELAHC/SciELO/Redalyc), Doğu/İran-Kafkasya kalan TDV'siz şehirler (YAZILAMADI-DOGU-BORC-2/3.md).
3. Kapsam: kalan 15 (≥50 bin) KAPSAM satırı tarihçeleri.
4. Çözülmemiş (karar/kaynak bekleyen): Cartago 1563/1564, Kingston 1692/1693, Puerto Plata 1502/1503, Les Cayes (1786 muhtemelen yanlış; 1720/1751), Addis 1886/1887, Strathclyde 1018/1034, Kismayu devri 1924/1927; PDF-only kaynaklar (indirme yalnız Emre'nin o oturumda yazılı izniyle).
5. İş sonunda: `py arac/kilit.py birak-hepsi --kim "<kancanın verdiği ad>"`; KASA'ya dal adı ve kısa sayı.

**Adresler (ListAgents):** EMRELİC 16 KASIM OTURUMU, KASA 16 KASIM OTURUMU, LAB 16 KASIM OTURUMU, HAVVA 16 KASIM OTURUMU. Emre emri: şehir kronolojilerini derhal bitir, en hızlı ama en az token.
