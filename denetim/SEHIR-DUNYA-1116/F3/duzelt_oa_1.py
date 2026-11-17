# -*- coding: utf-8 -*-
"""F3 ÇÖZÜM partisi 1: şehir tarihçesi tarafındaki düzeltmeler (orta_asya dosyası). Kaynak: TDV tam gövde (tarayıcı, 16 Kasım 2026).
Her düzeltme COZUM.tsv'de 'sehir_olayi_duzelt' satırıdır. Girdi/çıktı: orta-asya-mogolistan/parti3_birlesik.json (yerinde)."""
import json, io, sys, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
Y = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "orta-asya-mogolistan", "parti3_birlesik.json")
a = json.load(open(Y, encoding="utf-8"))
def sehir(i): return [x for x in a if x["id"] == i][0]
def olay(cid, t):
    return [o for o in sehir(cid)["olay"] if o["t"] == t][0]
def not_ekle(cid, s):
    c = sehir(cid); c["ic_not"] = (c.get("ic_not", "") + " " + s).strip()
# Anapa 1829: gün TDV Edirne Antlaşması gövdesinde
o = olay("anapa-ru", "1829-01-01")
o.update(t="1829-09-14", gun="14 Eylül 1829", kesinlik="gun")
o["kaynak"] += "; gün: TDV İslâm Ansiklopedisi, «Edirne Antlaşması» md.: «14 Eylül 1829) Pazartesi günü imza edildi» (TDV tam metin, tarayıcı, 16 Kasım 2026)"
not_ekle("anapa-ru", "F3 çözüm (16 Kasım 2026): 1829 olayı yıl→gün (14 Eylül 1829, TDV Edirne Antlaşması md. gövdesi) ile düzeltildi; devlet kronolojisindeki 1829-09-14 maddesiyle örtüşür.")
# Belh 900: gün TDV Saffârîler gövdesinde (Amr'ın Belh yakınında esiri)
o = olay("belh-af", "0900-01-01")
o.update(t="0900-04-19", gun="15 Rebîülâhir 287 / 19 Nisan 900", kesinlik="gun", b="Sâmânî İsmâil b. Ahmed Belh yakınında Saffârî Amr b. Leys'i yenip esir aldı; Belh Sâmânîler'in eline geçti",
         tanik="Amr’ı Belh yakınında mağlûp ve esir etti (15 Rebîülâhir 287 / 19 Nisan 900).")
o["kaynak"] += " ; gün: TDV İslâm Ansiklopedisi, «Saffârîler» md. (tam metin, tarayıcı, 16 Kasım 2026)"
not_ekle("belh-af", "F3 çözüm (16 Kasım 2026): Belh devri TDV Belh md.'nde yıl (900) olarak verilir; esir alma günü TDV Saffârîler md.'nde (15 Rebîülâhir 287 / 19 Nisan 900) verilir. Belh'in devri esirin günüyle aynı olay kabul edildi (çıkarım; Belh md. ayrı gün vermez).")
# Buhara 992: ay TDV Sâmânîler gövdesinde
o = olay("buhara-uz", "0992-03-09")
o.update(t="0992-05-07", gun="Rebîülevvel 382 / Mayıs 992 (ayın ilk günü: aritmetik tablo)", kesinlik="ay",
         tanik="Hârun Buğra Han harekete geçip Buhara’yı ele geçirdi (Rebîülevvel 382 / Mayıs 992).")
o["kaynak"] = "TDV İslâm Ansiklopedisi, «Sâmânîler» md. (tam metin, tarayıcı, 16 Kasım 2026); yıl: TDV «Buhara» md. (382/992)"
not_ekle("buhara-uz", "F3 çözüm (16 Kasım 2026): 992 işgali yıl (0992-03-09 = 382 ilk günü) → ay (Rebîülevvel 382 / Mayıs 992, TDV Sâmânîler md.) ile düzeltildi; TDV Karahanlılar md. 'Semerkant’ı aldıktan sonra... 992 başlarında Buhara’yı ele geçirdi' diyerek TDV içinde ay bakımından çelişir; TDV Sâmânîler md. ay verdiği için esas alındı, Karahanlılar ifadesi mîlâdî yıl başı demektir ve beyan edilir.")
# Kaşgar 1130: TDV Karahıtaylar doğrudan 1130 verir
o = olay("kasgar-cn", "1130-01-01")
o.update(gun="1130", kesinlik="yil", b="Karahıtaylar Kâşgar'ı Balasagun ve Hoten ile birlikte zaptetti (TDV Karahıtaylar md.: 1130; Kâşgar md.: 1128'deki ilk saldırı başarısız, iki yıl sonra)",
         tanik="Kâşgar, Beşbalık ve Hoten’i de kendine tâbi kılıp başşehri Balasagun olan Karahıtay Devleti’ni kurdu (1130")
o["kaynak"] += " ; yıl: TDV İslâm Ansiklopedisi, «Karahıtaylar» md. (tam metin, tarayıcı, 16 Kasım 2026): doğrudan 1130"
not_ekle("kasgar-cn", "F3 çözüm (16 Kasım 2026): 1130 türetme (1128+2) değil, TDV Karahıtaylar md.'nin doğrudan verdiği yıldır; kesinlik belirsiz→yil. Devlet kronolojisindeki 1128 maddesi başarısız ilk saldırıdır (farklı olay).")
# Sudak: TDV Selçuklular fetih yılı 1224
o = olay("sudak-ua", "1237-12-31")
o.update(t="1224-01-01", gun="1224", kesinlik="yil", b="Anadolu Selçuklu Sultanı Alâeddin Keykubad zamanında Hüsâmeddin Çoban komutasındaki kuvvetler Suğdak'ı fethetti (TDV Selçuklular md.: 1224; Kırım md.: saltanat aralığı 1220-1237)",
         tanik="Karadeniz’in kuzeyindeki Suğdak şehri Hüsâmeddin Çoban tarafından fethedildi (1224)")
o["kaynak"] = "TDV İslâm Ansiklopedisi, «Selçuklular» md. (tam metin, tarayıcı, 16 Kasım 2026); aralık: «Kırım» md. (1220-1237)"
not_ekle("sudak-ua", "F3 çözüm (16 Kasım 2026): olay yılı 'saltanat sonu güvenli ucu' (1237-12-31) yerine TDV Selçuklular md.'nin doğrudan verdiği fetih yılı 1224'e çekildi; 1224, Kırım md.'nin 1220-1237 aralığı içindedir (çelişki değil).")
json.dump(a, open(Y, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("tamam")
