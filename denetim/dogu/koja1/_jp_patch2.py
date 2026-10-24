# -*- coding: utf-8 -*-
p = r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja1\_jp_build.py'
s = open(p, encoding='utf-8').read()
R = [
("Iwai ile Mii bölgesinde savaştı; Iwai öldürüldü ve Kyūshū üzerindeki sınır Yamato lehine kesinleşti. Aynı yıl Iwai\\'nin oğlu Kuzuko Kasuya\\'daki ambar bölgesini sulh bedeli olarak sundu.",
 "Iwai ile Mii bölgesinde (Chikushi Mii-gun) savaştı; Iwai öldürüldü ve kaynağa göre sınır kesinleşti. Aynı yılın 12. ayında Iwai\\'nin oğlu Kuzuko babasının cezasına ortak olmaktan korkmuştur."),
("Taika 2. yılın ilk gününde, yeni yıl töreni biter bitmez, arazi ve halkın doğrudan devlet mülkü sayılması, idarenin il-ilçe sistemine bağlanması ve vergi düzeninin yeniden kurulmasını içeren Reform Fermanı ilan edildi.",
 "Taika 2. yılın ilk gününde, yeni yıl töreni biter bitmez, «Yenileşme Fermanı» (改新之詔) ilan edildi. Kaynak metnin devamındaki madde içeriği (arazi, idare, vergi) bu oturumda okunmadı."),
]
for a, b in R:
    assert a in s, a[:40]
    s = s.replace(a, b)
open(p, 'w', encoding='utf-8').write(s)
print('ok')
