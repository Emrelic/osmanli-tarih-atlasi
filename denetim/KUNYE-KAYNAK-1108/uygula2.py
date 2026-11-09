import re, sys
sys.stdout.reconfigure(encoding="utf-8")
P = "data/devletler.js"
s = open(P, encoding="utf-8", newline="").read()
ESKI = "bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak"
YENI = {
 "cenova": ("Aldo Gallotta, «Ceneviz», TDV İslâm Ansiklopedisi, c.7 (İstanbul 1993), s.363-365 (islamansiklopedisi.org.tr/ceneviz) — «Bağımsızlığına 1099'da kavuştuktan sonra…»",
  "KUNYE-KAYNAK-1108 (9 Kasım 2026): f yılı (1099) TDV «Ceneviz» maddesinde okunarak teyit edildi; gün yok, f=YYYY-01-01 yıl düzeyidir [yalnız yıl teyitli; gün teyitsiz]. TEK KAYNAK. t (1797-06-14) bu işte teyit edilmedi, dokunulmadı."),
 "zend": ("Rıza Kurtuluş, «Zendler», TDV İslâm Ansiklopedisi (islamansiklopedisi.org.tr/zendler) — Kerim Han'ın 1751'in ilk aylarında İran'da iktidara gelip son Safevî III. İsmâil adına vekil olduğu",
  "KUNYE-KAYNAK-1108 (9 Kasım 2026): f yılı (1751) TDV «Zendler» maddesinde okunarak teyit edildi; gün verilmiyor, f=YYYY-01-01 yıl düzeyidir [yalnız yıl teyitli; gün teyitsiz]. TEK KAYNAK. t (1794) bu işte teyit edilmedi, dokunulmadı."),
}
for i, (k, n) in YENI.items():
    a = s.index('{ id:"%s",' % i)
    z = s.index("kronoloji:", a)
    st = s[a:z]
    assert st.count('kaynak:"' + ESKI + '"') == 1, i
    assert "ic_not:" not in st, i
    yeni = st.replace('kaynak:"' + ESKI + '"', 'kaynak:"%s",\n  ic_not:"%s"' % (k.replace('"', "'"), n.replace('"', "'")), 1)
    s = s[:a] + yeni + s[z:]
    print("ok", i)
open(P, "w", encoding="utf-8", newline="").write(s)
