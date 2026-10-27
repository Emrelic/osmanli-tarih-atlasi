# -*- coding: utf-8 -*-
p = r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja1\_jp_build.py'
s = open(p, encoding='utf-8').read()
R = [
("gun_not('辛酉 (3. ay içinde)', '710-04-?? civarı', '710-04-13')", "gun_not('辛酉 (3. ay içi; ay başı ≈ 3. ayın 10. günü)', '710-04-04', '710-04-13')"),
("gun_not('辛酉 (10. ay)', '794-10-?? civarı', '794-11-18')", "gun_not('辛酉 (10. ay içi; ≈ 21-22. gün)', '794-10-29', '794-11-18')"),
("gun_not('辛酉 (3. ay içinde)', '710-03-?? (3. ay)', '710-04-13')", "gun_not('辛酉 (3. ay içi; ≈ 10. gün)', '710-04-04', '710-04-13')"),
("'Wadō 3/3/(辛酉)'", "'Wadō 3/3 (辛酉)'"),
("'Enryaku 13/10/22 (辛酉)', 'gun',", "'Enryaku 13/10 (辛酉)', 'gun',"),
("gun_not('辛酉 (10. ay)', '794-10-?? (10. ay)', '794-11-18')", "gun_not('辛酉 (10. ay içi; ≈ 21-22. gün)', '794-10-29', '794-11-18')"),
("'Enryaku 13/10/(丁丑)'", "'Enryaku 13/11 (丁丑)'"),
("gun_not('丁丑 (10. ay)', '794-11-?? (10. ay)', '794-12-04')", "gun_not('丁丑 (11. ay içi; 11. ay 辛未 = 794-11-28)', '794-11-27', '794-12-04')"),
("'0794-11-18': 'Enryaku 13/10/22 (794)'", "'0794-11-18': 'Enryaku 13/10 (794)'"),
("Aynı kaynakta 794-12-04 (丁丑) «Heian-kyō» adı verildi.", "Aynı kaynakta 794-12-04 (11. ay 丁丑) «Heian-kyō» adı verildi."),
("'Yamashiro Yamashiro\\'ya, yeni başkent «Heian-kyō» adını aldı'", "'Yamashiro eyaletinin adı değişti, yeni başkent «Heian-kyō» adını aldı'"),
]
for a, b in R:
    assert a in s, a
    s = s.replace(a, b)
open(p, 'w', encoding='utf-8').write(s)
print('ok')
