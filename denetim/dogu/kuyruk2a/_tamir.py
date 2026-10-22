import io
p='denetim/dogu/kuyruk2a/_baslik.js'
s=io.open(p,encoding='utf8').read()
R={
"'Buhara|0873-08-01': 'Ya‘kūb b. Leys’in Nîşâbur zaferiyle Buhara’da vali çekildi'":"'Buhara|0873-08-01': 'Saffâr kardeşlerin yükselişiyle Buhara’da yerel idare bağı koptu'",
"'Serahs|0873-08-01': 'Serahs Ya‘kūb’un Nîşâbur zaferinden sonra Sîstanlı hâkimiyetine girdi'":"'Serahs|0873-08-01': 'Sîstanlı ordunun yürüyüşü Serahs’ı da kapsadı'",
"'Belh|1157-04-26': 'Sencer’in ölümünün ardından Belh Gürhan’ın vesayetine girdi'":"'Belh|1157-04-26': 'Belh yeni vesayet altına girdi, Karahıtay’ın vergi alanında anıldı'",
"'Merv (Mari)|1157-04-26': 'Merv Sencer’in ölümünden sonra Oğuz beylerinin kontrolüne geçti'":"'Merv (Mari)|1157-04-26': 'Sencer’in Merv’deki ölümünden sonra şehir göçebe beylerin kontrolüne geçti'",
"'Serahs|1157-04-26': 'Serahs bir süre Oğuz beylerinin elinde kaldı'":"'Serahs|1157-04-26': 'Serahs bir süre kabile beylerinin elinde kaldı'",
"'Merv (Mari)|0900-04-19': 'Merv Buhara’dan yönetilen devlete katıldı'":"'Merv (Mari)|0900-04-19': 'Merv taht değiştiren Horasan’ın yeni egemenine bağlandı'",
"'Serahs|0900-04-19': 'Serahs Amr’ın yenilgisinin ardından Buhara hükümdarına bağlandı'":"'Serahs|0900-04-19': 'Serahs Amr’ın yenilgisinin ardından yeni hükümdarın ülkesine girdi'",
"'Nîşâbur|0900-04-19': 'Nîşâbur Merv yerine yeni devletin askerî-idarî merkezi yapıldı'":"'Nîşâbur|0900-04-19': 'Nîşâbur eski merkezin yerine yeni devletin askerî-idarî merkezi yapıldı'",
"'Kuça (Kuqa)|1130-01-01': 'Kuça Uygurları Gürhan’ın tâbileri arasına girdi'":"'Kuça (Kuqa)|1130-01-01': 'Kuça halkı Gürhan’ın tâbileri arasına girdi'",
"'Taraz (Evliya-Ata)|1211-01-01': 'Küçlüğ Gürhan’ı esir aldı; Talas bölgesi Nayman yönetimine kaldı'":"'Taraz (Evliya-Ata)|1211-01-01': 'Gürhan’ı devirenin yönetimi Talas bölgesine de uzandı'",
"'Taraz (Evliya-Ata)|1218-01-01': 'Cebe Noyan Küçlüğ’ü ortadan kaldırınca Talas bölgesi yeni sahibini buldu'":"'Taraz (Evliya-Ata)|1218-01-01': 'Küçlüğ’ün düşüşüyle Talas bölgesi yeni sahibini buldu'",
"'Cizzah|1227-01-01': 'Ulusun paylaşılmasında Cizzah çevresi Çağatay’a düştü'":"'Cizzah|1227-01-01': 'Cizzah çevresi Cengiz’in ikinci oğlunun yurduna katıldı'",
"'Kuça (Kuqa)|1227-01-01': 'Kuça ulusun Doğu Türkistan bölümünde kaldı'":"'Kuça (Kuqa)|1227-01-01': 'Kuça Doğu Türkistan bölümünün ulus payında kaldı'",
"'Bâmiyan|1260-01-01': 'Algu’nun Afganistan zaptıyla Bâmiyân Çağatay’ın bölgesine girdi'":"'Bâmiyan|1260-01-01': 'Afganistan’ın alınışıyla Bâmiyân Algu’nun idaresine girdi'",
"'Kâbil|1260-01-01': 'Algu Afganistan’ı alınca Kâbil Çağatay payına girdi'":"'Kâbil|1260-01-01': 'Kâbil yeni ulusun payına girdi'",
"'Gazne|1260-01-01': 'Gazne yöresine Çağataylılar hâkim oldu'":"'Gazne|1260-01-01': 'Gazne yöresi Kutluğ Hoca’nın Hindistan akınlarını yönettiği ulusa kaldı'",
"'Taraz (Evliya-Ata)|1260-01-01': 'Çu ve Yedisu havzaları geri alınınca Talas Çağatay payında kaldı'":"'Taraz (Evliya-Ata)|1260-01-01': 'Çu ve Yedisu havzalarının geri alınışıyla Talas yeni payına girdi'",
"'Bâmiyan|1215-01-01': 'Celâleddin Ali’nin hükümdarlığı bitti, Bâmiyân kolu Alâeddin Muhammed’e kaldı'":"'Bâmiyan|1215-01-01': 'Gurlu Bâmiyân kolu 612 (1215)’te sona erdi'",
"'Kuça (Kuqa)|0692-11-14': 'Wang Xiaojie Kuça’da Anxi Koruyuculuğu’nu yeniden kurdu'":"'Kuça (Kuqa)|0692-11-14': 'Anxi Koruyuculuğu Kuça’da yeniden kuruldu'",
"'Kuça (Kuqa)|0791-01-01': 'Yanggu’nun öldürülmesiyle Anxi irtibatı koptu, Kuça’nın sahibi belirsizleşti'":"'Kuça (Kuqa)|0791-01-01': 'Yanggu’nun öldürülmesiyle irtibat koptu, Kuça’nın sahibi belirsizleşti'",
"'Hotan|1041-01-01': 'Hoten ve Kâşgar bölünmeden sonra Arslan Han kanadında kaldı'":"'Hotan|1041-01-01': 'Hoten bölünmeden sonra Arslan Han kanadında kaldı'",
"'Cizzah|1041-01-01': 'Karahanlı bölününce Cizzah çevresi Tamgaç kanadında kaldı'":"'Cizzah|1041-01-01': 'Cizzah çevresi bölünmeden sonra Tamgaç kanadında kaldı'",
"'Herat|1041-01-01': 'Mevdûd zamanında Herat tekrar Gazneli hâkimiyetine girdi'":"'Herat|1041-01-01': 'Herat Selçuklu eliyle kısa süre sonra Gazne ülkesine döndü'",
"'Herat|1064-01-01': 'Alparslan döneminde Herat alındı (alt sınır)'":"'Herat|1064-01-01': 'Selçuklu orduları her yıl saldırdıktan sonra Herat’ı aldı (alt sınır)'",
"'Astrahan|1242-01-01': 'Batu Han’ın kurduğu Altın Orda İdil aşağı havzasında hâkim oldu'":"'Astrahan|1242-01-01': 'İdil aşağı havzası Cuci ulusunun merkez bölgesine katıldı'",
"'Cizzah|0999-10-14': 'Buhara’nın düşmesiyle Üsrûşene Karahanlı idaresine girdi'":"'Cizzah|0999-10-14': 'Sâmânî başşehrinin düşmesiyle Üsrûşene Karahanlı idaresine girdi'",
"'Cizzah|0893-03-23': 'Üsrûşene’deki Afşin emirliği Sâmânî topraklarına katıldı'":"'Cizzah|0893-03-23': 'Cizzah’ın bağlı olduğu Afşin emirliği 280 (893)’te ilhak edildi'",
"'Hotan|1130-01-01': 'Yeh-lü Ta-şi Hoten’i tâbi kılıp Balasagun’da devlet kurdu'":"'Hotan|1130-01-01': 'Yeh-lü Ta-şi Hoten’i tâbi kılıp yeni devleti kurdu'",
"'Hotan|1218-01-01': 'Cebe Noyan Hoten’de ezan yasağına son verdi'":"'Hotan|1218-01-01': 'Hoten’de ezan yasağı kalktı, şehir yeni idareye girdi'",
"'Hotan|1211-01-01': 'Nayman Küçlüğ Hoten halkına dinî baskı uyguladı'":"'Hotan|1211-01-01': 'Hoten halkı Küçlüğ’ün dinî baskısına maruz kaldı'",
"'Hotan|0791-01-01': 'Anxi ile bağ koptu; TDV’ye göre Hoten Büyük Uygur sınırında'":"'Hotan|0791-01-01': 'Hoten’in TDV’ye göre Büyük Uygur sınırında olduğu evre başladı'",
}
n=0
for a,b in R.items():
    if a in s:
        s=s.replace(a,b); n+=1
    else:
        print('YOK',a[:70])
io.open(p,'w',encoding='utf8').write(s)
print('degisti',n)
