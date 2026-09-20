/*
 * İÇERİK VERİSİ — Oyun Tasarımı Dersi (6 Haftalık Teori + 7. Hafta Atölye)
 * ------------------------------------------------
 * Bu dosya SADECE ders içeriğini tutar. Görünüm/motor kodu (index.html,
 * style.css, app.js) burayı hiç bilmeden çalışır; içeriği güncellemek için
 * sadece bu dosyayı düzenlemek yeterlidir.
 *
 * Program 6 haftaya sıkıştırılmıştır; çoğu hafta iki oturumdan oluşur
 * (X.1 ve X.2). id alanı bu yüzden "1.1", "1.2", "2.1" ... formatındadır.
 * Hafta 6 şimdilik tek oturumlu (sadece "6.1" — sunum oturumu "6.2" ileride
 * eklenebilir). 7. hafta ayrık bir uygulama atölyesidir (tek oturum, id
 * "7.1"): teori bitti, artık gerçek GDD dolduruyorlar. Bu yüzden "template"
 * slayt tipi vardır (bullets/items yerine guidance + example alanları
 * kullanır). Bir slaytta ayrıca opsiyonel "download: { label, href }" alanı
 * olabilir; motor bunu bir indirme butonu olarak çizer.
 * Her oturum bir obje: { id, title, slides: [...] }
 * Her slayt bir obje: { type, heading, bullets } veya (examples için) { type, heading, items }
 *
 * type değerleri:
 *   "intro"     -> "Bu Hafta" açılış slaytı
 *   "concept"   -> normal kavram slaytı (sade)
 *   "examples"  -> "Oyun Örnekleri" slaytı (items: "Oyun Adı: açıklama" formatında)
 *   "questions" -> "Sınıfa Sorular" slaytı
 *   "homework"  -> "Ödev" slaytı
 *   "template"  -> GDD şablon alanı (bullets/items yerine: guidance, example)
 */

const WEEKS = [
  {
    id: "1.1",
    title: "Oyun Tasarımına Giriş",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: [
          "Oyun nedir, kim tasarlar?",
          "Game design ekibinde kim ne yapar?",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Nedir?",
        bullets: [
          "Oyun, kurallarla sınırlı ve oyuncuya seçim hakkı veren bir deneyimdir.",
          "Örnek: Satranç'ta kurallar sabit, ama her oyuncunun seçimi farklıdır.",
        ],
      },
      {
        type: "concept",
        heading: "Ekipteki Roller",
        bullets: [
          "Game Designer: fikir ve kural sahibi",
          "Programcı: mekanikleri kodlar",
          "Görsel Sanatçı: görselleri üretir",
          "Ses/Müzik: müzik ve efekt",
          "Takım Lideri: zaman ve koordinasyon",
        ],
      },
      {
        type: "concept",
        heading: "Game Designer Ne Yapar?",
        bullets: [
          "Kod yazmaz; “bu eğlenceli mi?” sorusuna cevap arar.",
          "Kuralları, mekanikleri ve oyuncu deneyimini tasarlar.",
        ],
      },
      {
        type: "concept",
        heading: "Oyunun Yapı Taşları",
        bullets: [
          "Kurallar, mekanikler, hedefler, geri bildirim.",
          "Bu yapı taşları ilerleyen haftalarda tek tek işlenecek.",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Türlerine Hızlı Bakış",
        bullets: [
          "Platform (Mario), bulmaca (Tetris), macera, strateji, koşu oyunu (Subway Surfers).",
          "Her tür farklı bir oyuncu deneyimi sunar.",
        ],
      },
      {
        type: "concept",
        heading: "Platform: Oyun Nerede Oynanacak?",
        bullets: [
          "Dikkat: burada “platform” bir tür değil, oyunun oynandığı cihazdır — az önceki “platform oyunu” (Mario gibi) türüyle karıştırmayın.",
          "Platform, oyunun hangi cihazda oynanacağıdır: mobil, PC, konsol veya tarayıcı (web).",
          "Her platformun kendi kısıtları vardır: mobilde dokunma, konsolda kumanda, PC'de klavye/fare.",
          "Gamejam'de platform seçimi, hangi kontrolleri ve ekran boyutunu tasarlayacağınızı belirler.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Minecraft: özgür yapım, keşif",
          "Uno: basit ve net kurallar",
          "Among Us: sosyal + rekabet",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "En sevdiğiniz oyun hangisi, neden?",
          "Bir oyunun “oyun” olması için sizce ne gerekir?",
          "Bu oyunu kim tasarlamış olabilir, ekipte kimler vardır sizce?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Sevdiğiniz bir oyunu seçin. O oyunun ekibinde SİZ olsaydınız hangi rolü (tasarımcı, programcı, sanatçı, ses, prodüktör) yapmak isterdiniz? Bir cümleyle yazın ve nedenini söyleyin.",
        ],
      },
    ],
  },
  {
    id: "1.2",
    title: "Oyun Fikri Geliştirme",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Bir oyun fikri nasıl doğar?", "Türler ve temel oyuncu eylemleri."],
      },
      {
        type: "concept",
        heading: "Fikir Nasıl Oluşturulur?",
        bullets: [
          "Fikir genelde tek bir eylemden başlar: zıplamak, toplamak, kaçmak, inşa etmek.",
          "Soru: “Oyuncu bu oyunda ne yapıyor, tek cümleyle?”",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Türleri",
        bullets: [
          "Platform, bulmaca, macera, strateji, koşu, simülasyon.",
          "Tür seçimi, hangi mekaniklerin kullanılacağını belirler.",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncunun Temel Eylemleri",
        bullets: [
          "Zıplama, koşma, toplama, çarpışma, inşa etme, kaçma.",
          "Bir oyun genelde 1-2 temel eylem üzerine kurulur.",
        ],
      },
      {
        type: "concept",
        heading: "Oyunun Ana Hedefi",
        bullets: [
          "Her oyunun bir ana hedefi olmalı: oyuncu neyi başarmaya çalışıyor?",
          "Kısa vadeli hedef: bu turda ne kazanılır? Uzun vadeli hedef: oyunun sonunda ne elde edilir?",
          "Örnek: Flappy Bird'de kısa vadeli hedef bir sonraki boruyu geçmek, uzun vadeli hedef kendi rekorunu kırmaktır.",
        ],
      },
      {
        type: "concept",
        heading: "Mini Aktivite: Fikir Turu",
        bullets: [
          "Herkes elindeki bir nesneyi oyun mekaniğine dönüştürsün, tek cümleyle anlatsın.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Flappy Bird: tek mekanik — zıplama",
          "Temple Run: tek mekanik — kaçma",
          "Candy Crush: tek mekanik — eşleştirme",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Hangi oyunlar tek bir eylem üzerine kurulu sizce?",
          "Aklınıza gelen basit bir oyun fikri var mı?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["Kendi oyun fikrinizi tek cümleyle yazın: “Oyuncu ... yapar.”"],
      },
    ],
  },
  {
    id: "2.1",
    title: "Oyuncu ve Hedef Kitle",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Oyunu kim oynayacak?", "Yaşa göre tasarım farkları."],
      },
      {
        type: "concept",
        heading: "Oyuncu Kimdir?",
        bullets: [
          "Oyunu deneyimleyen, kararlar veren kişi.",
          "Her oyuncunun beklentisi farklıdır.",
        ],
      },
      {
        type: "concept",
        heading: "Hedef Kitle Nedir?",
        bullets: [
          "Oyunun tasarlandığı yaş/ilgi grubu.",
          "Küçük yaş → basit kurallar, hızlı geri bildirim; büyük yaş → karmaşık sistemler.",
        ],
      },
      {
        type: "concept",
        heading: "Bartle'ın 4 Oyuncu Tipi",
        bullets: [
          "Achiever: puan, seviye, bitirmek ister.",
          "Explorer: keşfetmeyi, gizli yerleri bulmayı sever.",
          "Socializer: birlikte oynamaktan keyif alır.",
          "Killer: rakiplere karşı yarışmayı sever.",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncu Beklentileri",
        bullets: [
          "Net hedef, adil kurallar, anlaşılır geri bildirim.",
          "Gamejam'de: “Bizim oyunumuz hangi tipi en çok memnun eder?”",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Roblox: geniş yaş grubu, sosyal (Socializer)",
          "Among Us: sosyal + rekabet",
          "Minecraft: keşfetmeyi seven oyuncular (Explorer)",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Roblox'u kim oynar, daha rekabetçi bir oyunu kim oynar? Farkları ne?",
          "Siz hangi oyuncu tipine (Achiever/Explorer/Socializer/Killer) daha yakınsınız?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["En sevdiğiniz oyunu yazın ve onu neden sevdiğinizi 2-3 cümleyle açıklayın."],
      },
    ],
  },
  {
    id: "2.2",
    title: "Oyun Kuralları ve Mekanikleri",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Kural ile mekanik arasındaki fark.", "Kazanma/kaybetme koşulları."],
      },
      {
        type: "concept",
        heading: "Oyun Kuralları",
        bullets: [
          "Oyuncunun yapabileceği ve yapamayacağı şeyler.",
          "Kurallar net olmalı, herkes aynı şekilde anlamalı.",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncunun Yapabilecekleri",
        bullets: [
          "Hareket, etkileşim, seçim.",
          "Örnek: Among Us'ta hareket etme, görev yapma, oy verme.",
        ],
      },
      {
        type: "concept",
        heading: "Kazanma ve Kaybetme Koşulları",
        bullets: [
          "Oyuncu ne zaman kazanır, ne zaman kaybeder net olmalı.",
          "Belirsiz koşul = kafa karışıklığı.",
        ],
      },
      {
        type: "concept",
        heading: "Kaybedince Ne Olur?",
        bullets: [
          "Kaybetmenin sonucu oyunun hissini belirler: baştan mı başlar, son kontrol noktasından mı, yoksa bir can mı kaybeder?",
          "Çok cezalandırıcı (her hatada en baştan) oyuncuyu sinirlendirir; hiç sonucu olmayan kaybetme de gerilimi öldürür.",
          "Gamejam'de basit bir seçim yeterli: örn. 3 can, can biterse bölüm baştan başlar.",
        ],
      },
      {
        type: "concept",
        heading: "Programcı Ne Yapar?",
        bullets: [
          "Programcı, tasarımcının kural ve mekaniklerini çalışan bir sisteme çevirir.",
          "Önce oyunun çekirdek döngüsünü (temel oynanışı) çalışır hale getirir — süslemeler sonra gelir, test edilebilir bir prototip her şeyden önemlidir.",
          "Mekaniklerin hız/güç/süre gibi sayılarını kolayca değiştirilebilir yapması, ekibin hızlı denemeler yapmasını sağlar.",
        ],
      },
      {
        type: "concept",
        heading: "MDA Çerçevesi: Mekanik–Dinamik–Estetik",
        bullets: [
          "Mekanik = kuralın oyun içinde çalışan hali (örn. “zar atma” kuralının sisteme dönüşmüş hali).",
          "Dinamik = kurallar çalışırken ortaya çıkan davranış.",
          "Estetik = oyuncunun hissettiği duygu.",
          "Örnek: Saklambaç → mekanik: saklanma/arama; dinamik: bulunma riski; estetik: gerilim.",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Döngüsü (Game Loop)",
        bullets: [
          "Oyun döngüsü, oyuncunun sürekli tekrarladığı temel eylem zinciridir.",
          "Örnek: Clash Royale'de döngü şudur → kart topla, deste kur, savaş, ödül al, tekrar savaş.",
          "İyi bir döngü kısa, anlaşılır ve tekrar oynatacak kadar tatmin edici olmalı.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Among Us: kural = görev yap/oy ver; mekanik = oylama",
          "Satranç: net ve sabit kurallar",
          "Fall Guys: basit mekanik, kaotik sonuçlar",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Among Us'ta kuralların net olmadığı bir an oldu mu?",
          "Bir oyunun kuralı belirsiz olsaydı ne olurdu?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["Sevdiğiniz bir oyunun 3 temel kuralını yazın."],
      },
    ],
  },
  {
    id: "3.1",
    title: "Eğlence ve Oyuncu Deneyimi",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Bir oyun neden eğlencelidir?", "Zorluk, ödül, merak, ilerleme."],
      },
      {
        type: "concept",
        heading: "Oyun Neden Eğlencelidir?",
        bullets: [
          "Eğlence; zorluk, ödül, merak ve keşfin dengesinden gelir.",
          "MDA'nın estetik katmanı tam olarak bunu anlatır.",
        ],
      },
      {
        type: "concept",
        heading: "Oyunun Aktardığı Temel Duygular",
        bullets: [
          "İyi bir tasarımcı, oyuna başlamadan önce hangi duyguları hedeflediğine karar verir.",
          "Örnek duygular: heyecan, gerilim, merak, gurur, rahatlama, dostluk.",
          "Gamejam'de: “Bizim oyunumuz oyuncuya hangi 2-3 duyguyu yaşatmalı?”",
        ],
      },
      {
        type: "concept",
        heading: "Zorluk ve Ödül",
        bullets: [
          "Çok kolay → sıkıcı; çok zor → sinir bozucu.",
          "Doğru zorluk, oyuncuyu oyunda tutar.",
        ],
      },
      {
        type: "concept",
        heading: "Merak ve Keşif",
        bullets: [
          "Bilinmeyeni öğrenme isteği oyuncuyu ileri taşır.",
          "Örnek: Minecraft'ta haritanın keşfedilmemiş kısımları.",
        ],
      },
      {
        type: "concept",
        heading: "Başarı ve İlerleme Hissi",
        bullets: [
          "Oyuncu kendini geliştirdiğini hissetmeli: yeni seviye, güç, alan.",
          "İlerleme göstergeleri (puan, seviye çubuğu) bu hissi güçlendirir.",
        ],
      },
      {
        type: "concept",
        heading: "Oyun İçi Ekonomi (Kaynaklar ve Ödüller)",
        bullets: [
          "Oyun içi ekonomi; oyuncunun topladığı kaynaklar (puan, para, enerji) ve bunları nasıl kullandığıdır.",
          "Basit bir ekonomi bile ilerleme hissini güçlendirir: puan biriktir, yeni bir şey aç.",
          "Örnek: Clash Royale'de altın toplanır, yeni kartlar ve yükseltmeler için harcanır.",
        ],
      },
      {
        type: "concept",
        heading: "Oyunun “His”i (Game Feel)",
        bullets: [
          "Aynı zıplama hareketi, ekran hafif sarsıldığında veya küçük bir toz efekti çıktığında çok daha “tatmin edici” hissettirir.",
          "Buna “game feel” ya da “juice” denir: ses, titreşim, küçük animasyonlar gibi anlık geri bildirimlerin toplamıdır.",
          "Gamejam'de bedavaya yakın: bir vuruşta ekranı 2-3 piksel sarsmak bile büyük fark yaratır.",
        ],
      },
      {
        type: "concept",
        heading: "Tekrar Oynanabilirlik",
        bullets: [
          "Oyuncunun oyunu bir kez oynayıp bırakmasını mı istiyorsunuz, yoksa tekrar tekrar açmasını mı?",
          "Rastgelelik (farklı harita, farklı düşman sırası) veya skor/rekor kırma isteği, oyuncuyu geri getirir.",
          "Örnek: Flappy Bird'de hikaye yok ama “bir dahaki sefere daha iyi yaparım” hissi sizi geri çeker.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Zelda: gizli alanları keşfetme merakı",
          "Subway Surfers: artan zorluk",
          "Clash Royale: ödül ve ilerleme hissi",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Hangi oyunu oynarken zamanın nasıl geçtiğini anlamadınız?",
          "O oyunda sizi motive eden neydi: zorluk mu, ödül mü, merak mı?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["En çok oynadığınız oyunda sizi oyunda tutan 1 şeyi yazın ve nedenini açıklayın."],
      },
    ],
  },
  {
    id: "3.2",
    title: "Bölüm (Level) Tasarımı",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Level design nedir?", "Bir bölüm nasıl kurgulanır?"],
      },
      {
        type: "concept",
        heading: "Level Design Nedir?",
        bullets: [
          "Oyuncunun bir alanda yaşayacağı deneyimin tasarlanması.",
          "Mekanikleri öğretmenin ve test etmenin yeridir.",
        ],
      },
      {
        type: "concept",
        heading: "Başlangıç, Gelişme, Bitiş",
        bullets: [
          "Başlangıç: mekanik güvenli şekilde tanıtılır.",
          "Gelişme: zorluk kademeli artar.",
          "Bitiş: oyuncu bir başarı hissiyle bölümü tamamlar.",
        ],
      },
      {
        type: "concept",
        heading: "Engel ve Düşman Yerleşimi",
        bullets: [
          "Engeller, oyuncuyu mekaniği kullanmaya zorlamalı.",
          "Aniden değil, kademeli yerleştirilmeli.",
        ],
      },
      {
        type: "concept",
        heading: "Zorluk Seviyesinin Artırılması",
        bullets: [
          "Yeni engel türleri, daha hızlı düşmanlar, daha dar alanlar.",
          "Oyuncu her seferinde biraz daha zorlanmalı, ama pes etmemeli.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Super Mario Bros: klasik bölüm yapısı",
          "Angry Birds: bölüm bazlı zorluk artışı",
          "Geometry Dash: kademeli zorlaşan engeller",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Bir oyunun ilk bölümü ile son bölümü arasında ne değişir?",
          "Çok kolay ya da çok zor bir bölüm oynadınız mı, nasıl hissettirdi?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["Sevdiğiniz bir oyunun haritasını (dünyasını) kağıda kabaca çizin."],
      },
    ],
  },
  {
    id: "4.1",
    title: "Karakter Tasarımı",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Karakterin amacı ve görünüşü.", "Renk ve şekil kullanımı."],
      },
      {
        type: "concept",
        heading: "Karakter Nasıl Oluşturulur?",
        bullets: [
          "Karakterin oyundaki rolü ve amacı net olmalı.",
          "Örnek: Mario'nun amacı prensesi kurtarmak.",
        ],
      },
      {
        type: "concept",
        heading: "Karakterin Amacı ve Özellikleri",
        bullets: [
          "Hızlı, güçlü, gizli, akıllı gibi belirgin özellikler.",
          "Özellikler, oyuncunun oynanış tarzını etkiler.",
        ],
      },
      {
        type: "concept",
        heading: "Karakter Görünüşü",
        bullets: [
          "Görünüş, karakterin ne yapabildiğini anlatmalı (siluet okunabilirliği).",
          "Basit şekiller, karmaşık detaylardan daha okunaklıdır.",
        ],
      },
      {
        type: "concept",
        heading: "Renk ve Şekillerin Kullanımı",
        bullets: [
          "Renkler duygu ve rol iletir (kırmızı = tehlike, mavi = dost).",
          "Şekiller karakter algısını etkiler (köşeli = sert, yuvarlak = dost canlısı).",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Mario: kırmızı, tanınabilir siluet",
          "Sonic: hız temasını yansıtan renk ve şekil",
          "Among Us: basit şekil, renkle kimlik",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Bir oyun karakterini sadece siluetinden tanıyabilir misiniz? Örnek verin.",
          "Kötü karaktere neden genelde koyu renkler verilir sizce?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["Kendi oyun fikriniz için basit bir karakter krokisi çizin (kağıt üzerine)."],
      },
    ],
  },
  {
    id: "4.2",
    title: "Görsel Tasarım ve Oyun Stili",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Görsel stil seçimi.", "2D mi 3D mü?"],
      },
      {
        type: "concept",
        heading: "Oyunların Görsel Stilleri",
        bullets: [
          "Piksel sanat, çizgi film tarzı, gerçekçi, minimal.",
          "Stil, oyunun kime hitap ettiğini de yansıtır.",
        ],
      },
      {
        type: "concept",
        heading: "2D ve 3D Tasarım",
        bullets: [
          "2D: daha hızlı üretilir, sade oyunlara uygun.",
          "3D: daha fazla emek ister, derinlik hissi verir.",
        ],
      },
      {
        type: "concept",
        heading: "Renk Seçimi ve Görsel Bütünlük",
        bullets: [
          "Az sayıda ana renk, tutarlı kullanım.",
          "Tüm karakterler ve alanlar aynı stilde olmalı.",
        ],
      },
      {
        type: "concept",
        heading: "Hedef Kitleye Uygun Görsel Stil",
        bullets: [
          "Küçük yaş grubu → parlak renkler, yumuşak şekiller.",
          "Büyük yaş grubu → daha karmaşık, gerçekçi ya da karanlık temalar da olabilir.",
        ],
      },
      {
        type: "concept",
        heading: "Ses ve Müzik de Bir Tasarım Kararıdır",
        bullets: [
          "Müzik ve ses efektleri, görsel stil kadar oyunun “havasını” belirler — korku oyunuyla çizgi film oyununun müziği aynı olamaz.",
          "Basit bir ipucu bile fark yaratır: doğru anda çalan bir “ding” sesi, oyuncuya başarılı olduğunu görsel olmadan da hissettirir.",
          "Gamejam'de: hazır (telifsiz) ses kütüphaneleri kullanmak tamamen normaldir, kendiniz beste yapmak zorunda değilsiniz.",
        ],
      },
      {
        type: "concept",
        heading: "Ses Efekti, Müzik, Ortam Sesi Farkı",
        bullets: [
          "Ses efekti (SFX): anlık aksiyonlara tepki verir — zıplama, çarpışma, puan alma sesi gibi kısa ve nettir.",
          "Müzik: sahnenin genel duygusunu taşır, sürekli çalar, tekrar dinlenince sıkmayacak şekilde seçilmelidir.",
          "Ortam sesi: mekânı gerçek hissettirir — rüzgar, kalabalık uğultusu, su sesi gibi arka plan katmanıdır.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Minecraft: blok/piksel stil",
          "Genshin Impact: anime/gerçekçi karışım",
          "Among Us: minimal, sade stil",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Bir oyunun görselleri sizce neden önemli, oynanışı etkiler mi?",
          "2D mi 3D mü oynamayı daha çok seviyorsunuz, neden?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["Kendi oyun fikriniz için 3 ana renk seçin ve neden seçtiğinizi yazın."],
      },
    ],
  },
  {
    id: "5.1",
    title: "Arayüz ve Kullanıcı Deneyimi",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Oyuncuya bilgi nasıl verilir?", "Menüler ve HUD."],
      },
      {
        type: "concept",
        heading: "Oyun Menüleri",
        bullets: [
          "Ana menü, ayarlar, duraklat: oyuncunun oyunu kontrol ettiği yerler.",
          "Basit ve anlaşılır olmalı.",
        ],
      },
      {
        type: "concept",
        heading: "Oyun İçi Arayüzler (HUD)",
        bullets: [
          "Can, puan, süre gibi bilgiler ekranda sürekli görünür.",
          "Fazla bilgi dikkat dağıtır; sade tutulmalı.",
        ],
      },
      {
        type: "concept",
        heading: "Bilgi Aktarma Yöntemleri",
        bullets: [
          "Renk, ikon, ses, titreşim gibi geri bildirimler.",
          "Örnek: canın azalması ekranın kırmızıya dönmesiyle hissettirilebilir.",
        ],
      },
      {
        type: "concept",
        heading: "İyi Arayüz Neye Benzer?",
        bullets: [
          "Oyuncu oyunu durdurmadan bilgiyi anlar.",
          "Arayüz, oyunun görsel stiliyle uyumlu olmalı.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Clash Royale: elixir barı ve kule can göstergesi",
          "Fortnite: harita, can, mermi göstergesi",
          "Candy Crush: hamle sayısı, hedef göstergesi",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Oynadığınız bir oyunda kafanızı karıştıran bir arayüz oldu mu?",
          "Can azaldığında oyun size bunu nasıl hissettiriyor?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["Sevdiğiniz bir oyunun ekran görüntüsünü tarif edin: ekranda hangi bilgiler var?"],
      },
    ],
  },
  {
    id: "5.2",
    title: "Hikâye ve Görev Tasarımı",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["Oyunlarda basit hikâye kurma.", "Görev (quest) tasarımı."],
      },
      {
        type: "concept",
        heading: "Oyunlarda Hikâye Kullanımı",
        bullets: [
          "Her oyunun büyük bir hikâyeye ihtiyacı yok.",
          "Basit hikâye bile oyuncuya “neden oynadığını” hissettirir.",
        ],
      },
      {
        type: "concept",
        heading: "Karakter, Amaç, Problem",
        bullets: [
          "Karakter: kim? Amaç: ne istiyor? Problem: önündeki engel ne?",
          "Bu üçü bir araya gelince basit bir hikâye oluşur.",
        ],
      },
      {
        type: "concept",
        heading: "Görev (Quest) Oluşturma",
        bullets: [
          "Görev, oyuncuya net bir hedef ve bunu tamamlamanın bir yolunu verir.",
          "Örnek: “Kayıp anahtarı bul ve kapıyı aç.”",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncuya Hedef Verme",
        bullets: [
          "Hedefler küçük adımlara bölünmeli.",
          "Her adım tamamlandığında oyuncuya geri bildirim verilmeli.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Zelda: kurtarma görevi",
          "Minecraft: opsiyonel ejderha yenme hedefi",
          "Among Us: görev listesi (quest benzeri)",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Hikayesi güçlü olan bir oyun biliyor musunuz? Sizi neden etkiledi?",
          "Hiç hikaye olmayan ama sevdiğiniz bir oyun var mı?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: ["Kendi oyun fikriniz için: karakter kim, amacı ne, önündeki problem ne — 3 cümlede yazın."],
      },
    ],
  },
  {
    id: "6.1",
    title: "GDD'ye Giriş (Teori)",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: ["GDD nedir, neden gerekli?", "Basit bir GDD nasıl hazırlanır?"],
      },
      {
        type: "concept",
        heading: "GDD Nedir?",
        bullets: [
          "Oyun fikrinin tek bir belgede toplanmış hali.",
          "Ekibin ortak hafızası; herkes aynı fikri anlar.",
        ],
      },
      {
        type: "concept",
        heading: "Neden Gerekli?",
        bullets: [
          "GDD olmadan her ekip üyesi oyunu kafasında farklı hayal eder.",
          "Örnek: programcı bir kural kodlar, sanatçı ona uymayan bir görsel çizer — ikisi de \"doğru\" ama birbirini tutmuyor.",
        ],
      },
      {
        type: "concept",
        heading: "Kısa ve Net Olmalı",
        bullets: [
          "İyi bir GDD uzun bir kompozisyon değil, birkaç kısa başlıktır.",
          "Kötü: \"Oyunumuzda oyuncu bir kuş...\" diye uzun paragraf. İyi: \"Oyuncu: kuşu zıplatır.\"",
        ],
      },
      {
        type: "concept",
        heading: "7. Haftada Ne Olacak?",
        bullets: [
          "7. haftada kendi oyun fikriniz için gerçek bir GDD şablonunu adım adım dolduracaksınız.",
          "Bugün sadece mantığını öğreniyoruz; başlıkların detayını orada göreceksiniz.",
        ],
      },
      {
        type: "concept",
        heading: "Gelir Modelleri",
        bullets: [
          "Bir oyun yayınlanacaksa, nasıl gelir elde edeceği de tasarımın bir parçasıdır.",
          "Yaygın modeller: ücretsiz + reklam, tek seferlik satın alma (premium), oyun içi satın alma, ek içerik (DLC).",
          "Gamejam'de zorunlu değil, ama “bu oyun gerçek olsaydı nasıl gelir kazanırdı?” sorusu tasarımı netleştirir.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Ubisoft, Riot Games: fikirlerini yüzlerce sayfalık GDD'lerle belgeler",
          "Minecraft: ilk prototipi de tek sayfalık basit bir fikirle başlamıştı",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Sizce bir GDD olmadan ekip nasıl karışıklık yaşar?",
          "GDD'de en önemli bulduğunuz madde hangisi?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Sevdiğiniz bir oyun için GDD'nin ilk iki maddesini (isim/tür ve tek cümlelik fikir) bir kağıda yazın — 7. haftada gerçek GDD'nizi bununla başlatacağız.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // HAFTA 7 — 6 haftalık teorinin ardından gelen uygulama atölyesi.
  // Kendi gamejam fikirleri için GERÇEK bir GDD dolduruyorlar. Her alan için
  // "template" tipi slayt: hem doldurma kriterini hem de tanıdık bir oyun
  // (Flappy Bird) üzerinden doldurulmuş örneğini gösterir.
  // ---------------------------------------------------------------------
  {
    id: "7.1",
    title: "GDD Atölyesi (Uygulama)",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: [
          "6 haftalık teori bitti — artık kendi GDD'nizi dolduruyoruz.",
          "Her başlık için: neye göre yazılır + tanıdık bir oyundan örnek (Flappy Bird).",
        ],
      },
      {
        type: "concept",
        heading: "Jam Temasını Fikre Çevirme",
        bullets: [
          "Gamejam'ler genelde bir tema/kısıt verir (örn. “Kayıp”, “Döngü”, “Uzay”). Temayı birebir almak zorunda değilsiniz — ondan ilham alın.",
          "Basit yöntem: temayla ilgili 5 kelime yazın, sonra bu kelimelerden birini bir oyun mekaniğine bağlayın.",
          "Örnek: tema “Döngü” olsa, gece-gündüz döngüsü mekaniği olan bir hayatta kalma oyunu fikrine dönüşebilir.",
        ],
      },
      {
        type: "template",
        heading: "1. Oyun Adı ve Türü",
        guidance: "Oyununuza bir isim verin ve türünü seçin (platform, bulmaca, macera, strateji, koşu, simülasyon, diğer — 1. haftadaki tür listesi).",
        example: "Flappy Bird — Koşu (sonsuz koşu / beceri oyunu)",
      },
      {
        type: "template",
        heading: "2. Oyun Fikri",
        guidance: "“Oyuncu ______ yapar.” Tek cümlede oyununuzu anlatın.",
        example: "Oyuncu, borulara çarpmadan geçmek için kuşu doğru zamanda zıplatır.",
      },
      {
        type: "template",
        heading: "3. Oyuncunun Amacı",
        guidance: "Oyuncu oyunda neyi başarmaya çalışıyor? Kazanmak/ilerlemek için ne yapmalı?",
        example: "Oyuncu, mümkün olduğunca çok boru aralığından geçip yüksek skor yapmaya çalışır.",
      },
      {
        type: "template",
        heading: "4. Oyuncu Ne Yapabilir?",
        guidance: "Oyuncunun 2-3 temel hareketini İSİM + NASIL ÇALIŞTIĞI şeklinde yazın (örn. “Zıplama: boşluğa basınca karakter zıplar”).",
        example: "Zıplama: Ekrana dokununca kuş yukarı fırlar. · Düşüş: Dokunmazsanız kuş sürekli aşağı iner (yer çekimi).",
      },
      {
        type: "template",
        heading: "5. Kontroller",
        guidance: "Her hareketin hangi tuş/dokunuşla yapıldığını yazın: Hareket, Zıplama/Etkileşim, Saldırı/Özel hareket.",
        example: "Hareket: yok (kuş otomatik ileri gider) · Zıplama/Etkileşim: ekrana dokunmak · Saldırı/Özel hareket: yok",
      },
      {
        type: "template",
        heading: "6. Oyun Döngüsü",
        guidance: "Oyuncunun sürekli tekrarladığı eylemleri sırayla yazın: ___ → ___ → ___ → tekrar.",
        example: "Zıpla → Boru aralığından geç → Skor artır → Çarparsan biter → Tekrar başla",
      },
      {
        type: "template",
        heading: "7. Kazanma ve Kaybetme",
        guidance: "2. haftada gördüğünüz kazanma/kaybetme koşulu kavramını kullanın: oyuncu nasıl kazanır, nasıl kaybeder?",
        example: "Kazanma: resmi bir bitiş yok, amaç en yüksek skoru kırmak. Kaybetme: boruya veya yere çarparsa oyun biter.",
      },
      {
        type: "template",
        heading: "8. Oyuncu ve Duygu",
        guidance: "Oyuncumuz kim (yaşı, sevdiği şey)? Neden bu oyunu oynasın? Oynarken hangi duyguları (eğlence, merak, heyecan, korku, güçlü hissetme, rekabet...) yaşasın?",
        example: "Her yaştan, kısa sürede tekrar oynamayı seven kişiler. Hissedilecek duygular: gerginlik, tatmin, hafif sinirlenme.",
      },
      {
        type: "template",
        heading: "9. Görsel Dünya",
        guidance: "2D mi 3D mü? Dünya ve karakterler nasıl görünüyor? İlham aldığınız oyun/film/çizgi film var mı?",
        example: "2D, basit piksel sanat. Açık mavi gökyüzü, yeşil borular, sarı yuvarlak bir kuş karakteri.",
      },
      {
        type: "template",
        heading: "10. Ödüller ve Ek Özellikler (İsteğe Bağlı)",
        guidance: "Oyununuzda para, puan, eşya, can veya enerji gibi bir şey var mı? Varsa nasıl kazanılıyor ve ne işe yarıyor?",
        example: "Tek kaynak: skor. Biriken skorla oyun sonunda farklı kuş renkleri açılabilir (opsiyonel).",
      },
      {
        type: "concept",
        heading: "İleri Seviye: Gerçek Bir GDD Ne Kadar Büyür?",
        bullets: [
          "Sizin 10 maddelik şablonunuz gamejam için yeterli ve kapsamlı bir başlangıç noktası.",
          "Profesyonel stüdyo GDD'leri çok daha büyük olabilir: örneğin Silent Hill 2 üzerine yapılmış bir örnek GDD analizi, Oyun Konsepti, Mekanikler, Arayüz, Görsel/Video, Ses/Müzik, Hikâye, Bölüm Haritaları ve Pazar Analizi gibi başlıklarla 60 sayfaya kadar çıkabiliyor.",
          "Fikriniz büyüdükçe GDD'niz de büyüyebilir — ama her zaman net bir özetle başlayın.",
        ],
      },
      {
        type: "concept",
        heading: "Şimdi Sıra Sizde",
        bullets: [
          "Ekibinizle bu 10 başlığı kendi oyun fikriniz için doldurun.",
          "Herkes aynı GDD'yi okuyunca oyun hakkında aynı şeyi anlamalı — bu yüzden kısa ve net yazın.",
        ],
      },
      {
        type: "concept",
        heading: "Takım Lideri Sahneye Çıkıyor",
        bullets: [
          "Bundan sonraki 3 başlık (playtest, kapsam, sunum) genellikle Takım Lideri'nin koordine ettiği işlerdir.",
          "Zaman takibi, ekip içi iletişim ve “şimdi ne yapıyoruz?” sorusuna cevap vermek onun görevidir.",
        ],
      },
      {
        type: "concept",
        heading: "Prototip ve Playtest",
        bullets: [
          "GDD bitince iş bitmiyor — hemen kabaca bir prototip yapıp birine oynatın.",
          "Oyuncuyu izleyin, açıklama yapmayın: nerede duraksadı, ne zaman güldü, ne zaman sıkıldı?",
          "Gördüğünüz sorunları GDD'nize geri yazıp küçük değişiklikler yapın — bu döngü gamejam boyunca tekrar eder.",
        ],
      },
      {
        type: "concept",
        heading: "Kapsamı Küçültün (Scope)",
        bullets: [
          "Gamejam'de zaman çok az; en basit oynanabilir hâli (tek mekanik, tek bölüm) önce bitirin.",
          "Fikrinizin “olmazsa olmaz” tek cümlesini (2. maddeniz) koruyun, gerisini gerekirse atın.",
          "Bitmiş küçük bir oyun, yarım kalmış büyük bir oyundan her zaman daha iyidir.",
        ],
      },
      {
        type: "concept",
        heading: "Fikrinizi Sunun (Pitch)",
        bullets: [
          "GDD'nizi doldurduktan sonra ekip arkadaşlarınıza 30 saniyede anlatın: oyun adı + tek cümlelik fikir + neden eğlenceli.",
          "Uzun teknik detay değil, dinleyenin gözünde canlanan net bir resim hedefleyin.",
        ],
      },
      {
        type: "concept",
        heading: "Boş Şablonu İndirin",
        bullets: [
          "Kendi ekibinizle doldurmak için boş GDD şablonunu Word (.docx) formatında indirin.",
          "Şablonu çoğaltıp her ekibe birer kopya dağıtabilirsiniz.",
        ],
        download: { label: "GDD Şablonunu İndir (.docx)", href: "GDD-Sablonu.docx" },
      },
    ],
  },
];
