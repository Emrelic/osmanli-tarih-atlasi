# -*- coding: utf-8 -*-
"""COZUM partisi 2: osm çelişki adayları #0-24 (öncelikli: ortak sözcük ≥3 ve |fark| ≤400; sıra celiski_dump.js ONCELIK=1 'sehir_tarihce_osm').
osm/k12 dosyaları origin/main'in (LAB'ın değil): düzeltmeler LAB tarafından UYGULANMAZ; KASA/dosya sahibi uygular. Doğrulama: TDV tam gövde (tarayıcı, 16 Kasım 2026) ya da kayıt kaynağına göre (belirtildi).
karar: celiski_degil · sehir_olayi_duzelt (öneri: şehir tarihçesi kaydı) · kronoloji_duzelt (öneri) · borc"""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
R = []
def r(no, sid, ot, kt, karar, kaynak, gerekce, uygulayan):
    R.append(["osm-" + no, sid, ot, kt, karar, kaynak, gerekce, uygulayan])
r("0", "acre-akko", "1191-01-01", "1191-07-11", "sehir_olayi_duzelt", "TDV Haçlılar md. (kron kaydının alıntısı: «11 Temmuz 1191’de … şehri Haçlılar’a teslime mecbur»)", "aynı olay; şehir olayı yıl→gün: t=1191-07-11 (kaynak alıntısı kron kaydında; tam gövdeyle bu turda doğrulanmadı)", "KASA/UMIT (osm)")
r("1", "aden", "1110-07-20", "1110-01-01", "kronoloji_duzelt", "TDV Zürey‘îler md.: «504 (1110) yılında»", "hicrî yıl kuralı: 504 H = 1110-07-20…1111-07-08; kronoloji t=1110-01-01 hicrî yılın dışında → t=1110-07-20", "KASA")
r("2,3", "aleppo", "1080-01-01", "1080-06-18 / 1080-10-01", "sehir_olayi_duzelt", "TDV Mirdâsîler md.: «Halep önüne geldi (8 Haziran 1080)»; «Rebîülâhir 473 (Ekim 1080)» iç kale", "DÜZELTME (17 Kasım, k12k3 ajanı tam gövdeyle): TDV Mirdâsîler md.: «Halep önüne geldi (8 Haziran 1080)» ve «içeri girmeye muvaffak oldu (26 Zilhicce 472 / 18 Haziran 1080)»; kronoloji 1080-06-18 maddesi DOĞRU (şehre giriş), önceki '1080-06-08' önerisi GERİ ALINDI. Şehir olayı (1080-01-01, 'girip') yıl→gün 1080-06-18; iç kale Ekim 1080 (Rebîülâhir 473) ayrı olay", "KASA/UMIT")
r("4", "aleppo", "1146-06-13", "1146-01-01", "sehir_olayi_duzelt", "TDV Nûreddin Zengî md.: «(5 Rebîülâhir 541 / 14 Eylül 1146)» (" + "TDV tam gövde, tarayıcı, 16 Kasım 2026" + ")", "şehir t=1146-06-13 (541 H ilk günü) yerine TDV'nin açık günü 1146-09-14; kronoloji t=1146-01-01 (yıl) de 1146-09-14'e çekilebilir (kronoloji_duzelt)", "KASA/UMIT (osm) + KASA (kron)")
r("5", "aleppo", "1183-06-12", "1183-06-11", "celiski_degil", "TDV Zengîler/Halep md. (18 Safer 579 / 12 Haziran) ↔ TDV Selâhaddîn-i Eyyûbî md. (17 Safer 579 / 11 Haziran)", "1 gün fark, aynı olay (iki TDV maddesi); ±30 gün içinde, çelişki kararı gerekmez; ic_not'ta iki kaynak beyanı önerilir", "-")
r("6", "aleppo", "1186-03-24", "1186-01-01", "kronoloji_duzelt", "TDV Halep md. (582)", "hicrî yıl kuralı: 582 H = 1186-03-24…1187-03-12; kronoloji t=1186-01-01 hicrî yılın dışında → t=1186-03-24", "KASA")
r("7", "algiers", "1184-04-14", "1184-01-01", "kronoloji_duzelt", "TDV Muvahhidler md.: «(580/1184)»", "hicrî yıl kuralı: 580 H = 1184-04-14…1185-04-02; kronoloji t=1184-01-01 → 1184-04-14", "KASA")
r("8", "amasya", "1243-07-01", "1243-01-01", "celiski_degil", "TDV Kösedağ Savaşı md. (11 Muharrem 641); TDV Amasya md. (1243)", "FARKLI olay: Kösedağ yenilgisi/vezirin kaçışı ↔ Moğolların Amasya'yı zaptı", "-")
r("9,14,22", "asyut / banha / damanhur", "0868-01-01", "0868-09-15", "sehir_olayi_duzelt", "TDV Ahmed b. Tolun md. (15 Eylül 868; kron kaydının kaynağı)", "aynı olay (Ahmed b. Tolun'un Mısır'a girişi); üç şehir tarihçesi kaydı yıl→gün: t=0868-09-15 (kron kaynağı gün veriyor; tam gövde bu turda doğrulanmadı)", "KASA/UMIT (osm)")
r("10,15", "asyut / banha", "1250-05-04", "1250-04-30", "borc", "TDV Şecerüddür md. (şehir olayında '30 Muharrem 648 / 4 Mayıs 1250'; tam gövdede yalnız «Safer 648 / Mayıs 1250» görüldü) ↔ TDV Eyyûbîler md. (30 Nisan 1250; kron)", "iki TDV maddesi Turan Şah'ın öldürülmesi gününü 4 gün farkla verir ve şehir olayındaki gün Şecerüddür md. tam gövdesinde bulunamadı: 3. kaynak (el-Makrîzî çevirileri / Cambridge History of Egypt) gerek", "-")
r("11", "baghdad", "1055-12-01", "1055-12-21", "sehir_olayi_duzelt", "TDV Kâim-Biemrillâh md. (kron kaynağı: Tuğrul Bey Bağdat'a giriş; Bağdat'a giriş 18 Aralık, Büveyhî sonu 21 Aralık 1055)", "aynı olay; şehir olayı ay→gün (1055-12-18 giriş); ayrıca olay iki an (giriş ↔ Büveyhî hâkimiyetinin sonu): ayrı iki olaya bölünebilir", "KASA/UMIT (osm)")
r("12", "baghdad", "1059-01-01", "1058-12-27", "borc", "TDV Besâsîrî md.: «(Ocak 1059)» (tam gövde doğrulandı) ↔ TDV Ukaylîler md. (kron; 27 Aralık 1058)", "iki TDV maddesi Besâsîrî'nin Bağdat'a girişini yıl sınırı iki yana düşen tarihlerle verir (Ocak 1059 ↔ 27 Aralık 1058); 3. kaynak (İbnü'l-Esîr çevirisi / Cambridge Hist. Iran V) gerek", "-")
r("13", "baghdad", "1152-04-08", "1152-01-01", "kronoloji_duzelt", "TDV Muktefî-Liemrillâh md.: «(547/1152)»", "hicrî yıl kuralı: 547 H = 1152-04-08…1153-03-27; kronoloji t=1152-01-01 → 1152-04-08 (olaylar_t5_1000a.js)", "KASA")
r("16,21", "bejaia / constantine", "1230-11-09", "1230-01-01", "kronoloji_duzelt", "TDV Hafsîler md.: «(628/1230-31)»", "hicrî yıl kuralı: 628 H = 1230-11-09…1231-10-28; kronoloji t=1230-01-01 hicrî yılın dışında (kaydın gun alanı 'ilk milâdî yıl yazıldı' diyor) → t=1230-11-09", "KASA")
r("17", "berat", "1280-01-01", "1281-01-01", "celiski_degil", "TIB Balkan 'Berat' (121748); kron: Cambridge Medieval History IV, Chronological Table s. 899-907", "FARKLI olay: Berat'ın Bizans'a dönüşü (1280-81) ↔ Berat önünde Anjou kuşatmasının bozulması; ancak ŞEHİR olayının kaynağında 'kuşatma ayrıntısı Vikipedi ipucu, Pachymeres metni açılmadı' yazıyor: kaynak zayıf, olay çıkarılmalı ya da Cambridge Medieval History IV ile güçlendirilmeli", "KASA/HAVVA (balkan)")
r("18,19,20", "cairo", "0969-07-03", "0969-07-06 / 0969-07-01", "borc", "TDV Cevher es-Sıkıllî md.: «3 Temmuz 969’da … Aynı gün Cevher Fustat’a girdi» (tam gövde doğrulandı) ↔ TDV Mu‘izz-Lidînillâh md.: «17 Şâban 358’de (6 Temmuz 969)» ve TDV İhşîdîler (kron)", "TDV İÇ ÇELİŞKİSİ (3 ↔ 6 Temmuz 969): şehir olayı Cevher md.'ne uygun (3 Temmuz); 3. kaynak: el-Makrîzî, el-Hıtat çevirisi / Cambridge History of Egypt / Britannica 'Cairo'", "-")
r("23", "damanhur", "0905-01-01", "0905-01-11", "sehir_olayi_duzelt", "TDV Muktefî-Billâh md.: «1 Rebîülevvel 292 / 11 Ocak 905» (kron kaynağı)", "aynı olay; şehir olayı ay→gün: t=0905-01-11 (kron kaynağı; tam gövde bu turda doğrulanmadı)", "KASA/UMIT (osm)")
r("24", "damanhur", "1171-09-04", "1171-09-13", "sehir_olayi_duzelt", "TDV Eyyûbîler md.: «10 Muharrem 567 / 13 Eylül 1171» (kron kaynağı)", "aynı olay; şehir olayı hicrî ilk gün (567 H) yerine kaynağın açık günü: t=1171-09-13 (kron kaynağı; tam gövde bu turda doğrulanmadı)", "KASA/UMIT (osm)")
yol = os.path.join(D, "COZUM.tsv")
mevcut = [l for l in open(yol, encoding="utf-8").read().split("\n") if l.strip()]
mevcut = [l for l in mevcut if not l.startswith("osm-")]
with open(yol, "w", encoding="utf-8", newline="") as f:
    f.write("\n".join(mevcut) + "\n")
    w = csv.writer(f, delimiter="\t"); w.writerows(R)
import collections
print(len(R), dict(collections.Counter(x[4] for x in R)))
