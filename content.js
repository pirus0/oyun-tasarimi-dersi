/*
 * İÇERİK VERİSİ — Oyun Tasarımı Dersi (0. Hafta Tanıtım + 6 Haftalık Teori + 7. Hafta Atölye)
 * ------------------------------------------------
 * Bu dosya SADECE ders içeriğini tutar. Görünüm/motor kodu (index.html,
 * style.css, app.js) burayı hiç bilmeden çalışır; içeriği güncellemek için
 * sadece bu dosyayı düzenlemek yeterlidir.
 *
 * id formatı: "0" tanıtım sunumu (tek oturum); 1-6. haftalar iki oturumlu
 * ("1.1", "1.2", ...; 6. hafta şimdilik yalnızca "6.1"); "7.1" uygulama
 * atölyesi. Ana sayfa, id'nin nokta öncesine göre hafta kartlarını gruplar.
 *
 * Ödevler tek bir hatta ilerler: her hafta öğrencinin kendi oyununa bir parça
 * ekler ve bu parçalar "Tasarım Defteri"nde birikir. 7. haftadaki GDD
 * şablonunun 10 maddesi bu ödevlerden doldurulur (ödevlerde "GDD madde X"
 * etiketi bu eşleşmeyi gösterir).
 *
 * Her oturum bir obje: { id, title, slides: [...] }
 * Her slayt bir obje: { type, heading, bullets } veya (examples için) { type, heading, items }
 * Bir slaytta opsiyonel "download: { label, href }" alanı olabilir; motor bunu
 * bir indirme butonu olarak çizer.
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
  // ---------------------------------------------------------------------
  // HAFTA 0 — Tanıtım sunumu: dersin içeriği, kazanımlar, somut sonuçlar.
  // ---------------------------------------------------------------------
  {
    id: "0",
    title: "Tanıtım Sunumu",
    slides: [
      {
        type: "intro",
        heading: "Oyun Tasarımı Dersine Hoş Geldiniz",
        bullets: [
          "7 hafta boyunca oyunlara oyuncu gözüyle değil, onları yapan kişinin gözüyle bakacağız.",
          "Sonunda elinizde kendi oyununuzun tasarımı ve gamejam'e hazır bir ekip olacak.",
        ],
      },
      {
        type: "concept",
        heading: "Bu Ders Ne Değil, Ne?",
        bullets: [
          "Bir kodlama dersi değil: kod yazmayı değil, bir oyunun nasıl düşünüldüğünü öğreneceğiz. Kâğıt ve kalem yeter.",
          "Oyun oynama dersi de değil: sevdiğiniz oyunları söküp içindeki parçaları inceleyeceğiz.",
          "Bir tasarım dersi: fikir üretecek, kural yazacak, çizecek, evde ailenize ya da arkadaşlarınıza oynatıp düzelteceksiniz.",
          "Derste oyun oynamıyoruz. Oynamak ev ödevi: bazı haftalarda bir oyunu evde tasarımcı gözüyle oynamanızı isteyeceğiz.",
        ],
      },
      {
        type: "concept",
        heading: "Yol Haritası",
        bullets: [
          "Hafta 1: Oyun nedir, bir oyun fikri nasıl doğar?",
          "Hafta 2: Oyuncu kim? Kurallar, mekanikler ve oyun döngüsü.",
          "Hafta 3: Bir oyunu eğlenceli yapan ne? Bölüm (level) tasarımı.",
          "Hafta 4: Karakter, görsel stil, ses ve müzik.",
          "Hafta 5: Arayüz, hikâye ve görevler.",
          "Hafta 6: Tasarım belgesi (GDD) nedir, neden yazılır?",
          "Hafta 7: Atölye: kendi GDD'nizi yazın, prototip yapın, oyununuzu sunun.",
        ],
      },
      {
        type: "concept",
        heading: "Kazanımlar: Ders Bitince Neler Yapabileceksiniz?",
        bullets: [
          "Herhangi bir oyunu parçalarına ayırmak: kuralı, mekaniği, döngüsü ve oyuncuya yaşattığı duygu ne?",
          "Aklınızdaki bir fikri tek cümleye indirip oynanabilir kurallara çevirmek.",
          "Tasarıma oyuncudan başlamak: bu oyunu kim oynayacak, ne hissetmeli?",
          "Zorluğu adım adım artıran bir bölüm kurmak.",
          "Fikrinizi ekibinize yazılı (GDD) ve sözlü (30 saniyelik sunum) olarak anlatmak.",
          "Oyununuzu başkasına oynatmak, izlemek ve gördüğünüze göre düzeltmek.",
        ],
      },
      {
        type: "concept",
        heading: "Somut Sonuçlar: Elinizde Ne Olacak?",
        bullets: [
          "Tasarım Defteri: her haftanın ödeviyle dolan, size ait bir defter.",
          "Kendi oyununuzun 10 maddelik tasarım belgesi (GDD).",
          "İlk bölümünüzün kâğıt üzerindeki haritası, karakter krokiniz, renk paletiniz ve ekran taslağınız.",
          "Evde en az bir kişiye oynatılmış bir kâğıt prototip.",
          "Sınıfa yapacağınız 30 saniyelik oyun sunumu.",
          "Rolleri belli, gamejam'e hazır bir ekip.",
        ],
      },
      {
        type: "concept",
        heading: "Her Hafta Nasıl İşleyecek?",
        bullets: [
          "Kavram: bir tasarım fikrini birlikte öğreniyoruz.",
          "Oyun Örnekleri: o fikri tanıdığınız oyunlarda buluyoruz.",
          "Sınıfa Sorular: kendi oyun deneyiminizle tartışıyoruz.",
          "Ödev: evde kendi oyununuza bir parça ekliyorsunuz. Bazen de bir oyunu evde oynayıp inceliyorsunuz.",
          "7. haftada bu parçalar birleşip GDD'niz oluyor.",
        ],
      },
      {
        type: "concept",
        heading: "Tasarım Defteri",
        bullets: [
          "Bu dersin tek malzemesi: bir defter ya da dosya. Bütün ödevler buraya yazılır ve çizilir.",
          "Kötü fikir diye bir şey yok. Beğenmediğiniz fikri silmeyin, üstünü çizin; bazen eski bir fikir sonra işe yarar.",
          "Güzel yazmak ya da güzel çizmek gerekmiyor. Anlaşılır olması yeter.",
        ],
      },
      {
        type: "examples",
        heading: "Küçük Ekip, Büyük Oyun",
        items: [
          "Minecraft: ilk sürümünü tek bir kişi yaptı.",
          "Among Us: üç kişilik küçük bir stüdyodan çıktı.",
          "Flappy Bird: tek kişinin yaptığı, tek dokunuşla oynanan bir oyun.",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Oynarken “bunu ben yapsam şöyle yapardım” dediğiniz bir oyun oldu mu? Neyi değiştirirdiniz?",
          "Sizce bir oyunu yapmak için en çok neye ihtiyaç var: fikre mi, koda mı, çizime mi, ekibe mi?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendinize bir Tasarım Defteri ayırın.",
          "İlk sayfaya en sevdiğiniz 3 oyunu yazın. Her birinin yanına o oyunun size hissettirdiği duyguyu tek kelimeyle ekleyin (örn. heyecan, merak, rahatlama).",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // HAFTA 1 — Ders anlatımı formatı: paragraf (lead), terim tanımı (terms),
  // tablo (table), adımlar (steps), alıntı (quote). Kaynaklar: Huizinga,
  // Suits, Caillois, Crawford, Salen & Zimmerman, Fullerton, Schell.
  // Diğer haftalar bu formata taşınacak.
  // ---------------------------------------------------------------------
  {
    id: "1.1",
    title: "Oyun Tasarımına Giriş",
    slides: [
      {
        type: "intro",
        heading: "Oyun Tasarımına Giriş",
        lead: "Bu derste oyun tasarımcılarının ve oyun araştırmacılarının “oyun” kavramını nasıl tanımladığını, bir oyunu hangi parçalara ayırarak incelediğini ve bir oyunun nasıl bir ekip ve süreçle üretildiğini öğreneceğiz.",
        bullets: [
          "Oyunun dört temel tanımını ve bu tanımlardaki anahtar kavramları açıklayabilmek",
          "Oyunu oyuncak, bulmaca ve yarışmadan ayırabilmek",
          "Bir oyunu sekiz biçimsel öğesine ayırarak analiz edebilmek",
          "Oyun ekibindeki rolleri ve bir oyunun üretim aşamalarını sayabilmek",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Tasarımı Nedir?",
        lead: "Oyun tasarımı (game design); bir oyunun hedeflerini, kurallarını ve oyuncunun yapabileceği eylemleri belirleme işidir. Tasarımcı oyuncunun yaşayacağı deneyimi doğrudan yaratamaz. Yalnızca kuralları yazar; deneyim, oyuncu bu kurallarla karşılaştığında ortaya çıkar.",
        quote: {
          text: "Oyun, deneyimin kendisi değildir. Oyun, deneyimi mümkün kılar.",
          source: "Jesse Schell, The Art of Game Design (2008)",
        },
        terms: [
          {
            term: "İkinci dereceden tasarım problemi",
            en: "second-order design problem",
            def: "Tasarımcı deneyimi değil, deneyimi doğuracak sistemi tasarlar. Bu yüzden bir kuralın oyuncuyu nasıl etkileyeceği ancak oyun oynatılıp gözlemlenerek anlaşılır (Salen & Zimmerman).",
          },
        ],
      },
      {
        type: "concept",
        heading: "Oyunun Dört Tanımı",
        lead: "“Oyun nedir?” sorusuna tek bir doğru cevap yoktur. Her tanım oyunun farklı bir yönünü öne çıkarır.",
        table: {
          head: ["Kim", "Tanım", "Vurguladığı"],
          rows: [
            ["Johan Huizinga (1938)", "Oyun; belirli bir zaman ve mekân içinde, gönüllü olarak kabul edilen ama kesinlikle bağlayıcı kurallara göre oynanan, amacı kendisinde olan bir etkinliktir.", "Gönüllülük, sınırlar"],
            ["Bernard Suits (1978)", "Oyun oynamak, gereksiz engelleri aşmaya yönelik gönüllü bir girişimdir.", "Engel, gönüllülük"],
            ["Salen & Zimmerman (2004)", "Oyun, oyuncuların kurallarla tanımlanmış yapay bir çatışmaya girdiği ve ölçülebilir bir sonuçla biten bir sistemdir.", "Sistem, çatışma, sonuç"],
            ["Jesse Schell (2008)", "Oyun, oyunbaz bir tutumla yaklaşılan bir problem çözme etkinliğidir.", "Problem çözme"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Tanımdaki Anahtar Kavramlar",
        lead: "Salen ve Zimmerman'ın tanımı tasarımcılar için en kullanışlı olanıdır, çünkü her kelimesi tasarlanabilir bir parçayı gösterir.",
        terms: [
          { term: "Sistem", en: "system", def: "Birbirine bağlı parçalardan oluşan bütün. Bir parçayı değiştirdiğinizde diğerleri de etkilenir: futbolda kaleyi büyütürseniz hem skor hem de oyuncuların taktiği değişir." },
          { term: "Yapay", en: "artificial", def: "Oyun, gerçek hayattan ayrı bir alanda gerçekleşir. Oyunda kaybedilen can, gerçek hayatta bir şey kaybettirmez." },
          { term: "Çatışma", en: "conflict", def: "Oyuncu ile hedefi arasındaki engel: bir rakip, bir süre sınırı ya da çözülmesi gereken bir bulmaca." },
          { term: "Kural", en: "rule", def: "Oyuncunun neyi yapıp neyi yapamayacağını belirleyen sınır. Kurallar oyunu kolaylaştırmaz, zorlaştırır." },
          { term: "Ölçülebilir sonuç", en: "quantifiable outcome", def: "Oyun sonunda kimin kazandığı, kaybettiği ya da kaç puan aldığı belli olur." },
        ],
      },
      {
        type: "concept",
        heading: "Sihirli Çember ve Oyunbaz Tutum",
        image: {
          src: "assets/lesson/huizinga.jpg",
          caption: "Johan Huizinga (1872-1945), Hollandalı tarihçi. Homo Ludens (1938) kitabında oyunun kültürden daha eski olduğunu savundu.",
          credit: "Fotoğraf: bilinmiyor, kamu malı. Kaynak: Wikimedia Commons",
        },
        terms: [
          {
            term: "Sihirli çember",
            en: "magic circle",
            def: "Huizinga'nın ortaya attığı, Salen ve Zimmerman'ın yaygınlaştırdığı kavram. Oyuna başlayan kişi, kuralların geçerli olduğu görünmez bir çemberin içine girer. Satrançta atın L çizmesi yalnızca bu çemberin içinde anlamlıdır.",
          },
          {
            term: "Oyunbozan",
            en: "spoilsport",
            def: "Huizinga'ya göre oyunbozan hileciden daha tehlikelidir: hileci kuralı çiğner ama oyunda kalır; oyunbozan çemberi yok eder.",
          },
          {
            term: "Oyunbaz tutum",
            en: "lusory attitude",
            def: "Suits'in kavramı: kuralları, yalnızca oyun mümkün olsun diye gönüllü olarak kabul etmek. Golfte topu deliğe elle koymak en kolay yoldur; ama sopayı kabul ederiz, çünkü oyun bu engelden doğar.",
          },
        ],
      },
      {
        type: "concept",
        heading: "Oyuncak, Bulmaca, Yarışma, Oyun",
        image: {
          src: "assets/lesson/minecraft-crafting.png",
          caption: "Minecraft: aynı dünya, yaratıcı modda bir oyuncak; hayatta kalma modunda hedef ve tehlike eklenince bir oyun.",
          credit: "Xbox México, CC BY 3.0. Kaynak: Wikimedia Commons",
        },
        lead: "Chris Crawford (2003), etkileşimli eğlenceyi dört basamakta sınıflandırır. Her basamakta bir özellik eklenir.",
        table: {
          head: ["Tür", "Ölçüt", "Örnek"],
          rows: [
            ["Oyuncak (toy)", "Etkileşim var, hedef yok.", "Top, Lego, Minecraft'ın yaratıcı modu"],
            ["Bulmaca (puzzle)", "Hedef var, rakip yok.", "Sudoku, Rubik küpü"],
            ["Yarışma (competition)", "Rakip var, ama rakibe müdahale edilemez.", "100 metre koşusu, bowling"],
            ["Oyun (game)", "Rakip var ve oyuncular birbirini etkileyebilir.", "Satranç, futbol, Clash Royale"],
          ],
        },
        bullets: [
          "Tasarımcı için anlamı: bir oyuncağa hedef ve kural eklendiğinde oyun doğar. Minecraft'ın hayatta kalma modu, yaratıcı moda açlık, düşman ve gece-gündüz döngüsü ekleyerek bunu yapar.",
        ],
      },
      {
        type: "concept",
        heading: "Caillois'nın Dört Oyun Kategorisi",
        lead: "Sosyolog Roger Caillois (1958), oyunları oyuncuya yaşattıkları temel deneyime göre dört gruba ayırır. Çoğu oyun birden fazla kategoriyi birleştirir.",
        table: {
          head: ["Kategori", "Deneyim", "Örnek"],
          rows: [
            ["Agon", "Rekabet, beceriyle üstün gelme", "Satranç, FIFA, Valorant"],
            ["Alea", "Şans, sonucun oyuncunun elinde olmaması", "Zar, piyango, Uno'da kart çekme"],
            ["Mimicry", "Taklit, başka biri olma", "Evcilik, The Sims, rol yapma oyunları"],
            ["Ilinx", "Baş dönmesi, hız ve sarsılma hissi", "Salıncak, lunapark, yarış oyunları"],
          ],
        },
        terms: [
          { term: "Paidia ↔ Ludus", def: "Caillois'nın ikinci ekseni. Paidia serbest, doğaçlama oyundur (çocukların uydurduğu oyunlar); ludus ise kuralları belirlenmiş, beceri isteyen oyundur (satranç)." },
        ],
      },
      {
        type: "concept",
        heading: "Oyunun Biçimsel Öğeleri",
        lead: "Tracy Fullerton (Game Design Workshop), her oyunda bulunan sekiz yapısal parçayı biçimsel öğeler (formal elements) olarak adlandırır. Bir oyunu analiz etmenin ve tasarlamanın ilk adımı bu öğeleri tek tek belirlemektir.",
        terms: [
          { term: "Oyuncular", en: "players", def: "Kaç kişi oynuyor, birbirleriyle ilişkileri ne: tek oyuncu, oyuncuya karşı oyuncu, takım." },
          { term: "Hedefler", en: "objectives", def: "Oyuncu neyi başarmaya çalışıyor?" },
          { term: "Prosedürler", en: "procedures", def: "Oyuncunun yapabileceği eylemler ve bunları yapma yöntemi." },
          { term: "Kurallar", en: "rules", def: "Neye izin verildiği, neyin yasak olduğu ve ne olursa ne olacağı." },
          { term: "Kaynaklar", en: "resources", def: "Değerli ve sınırlı olan her şey: can, para, zaman, mermi, kart." },
          { term: "Çatışma", en: "conflict", def: "Oyuncuyu hedefe ulaşmaktan alıkoyan engeller, rakipler ve ikilemler." },
          { term: "Sınırlar", en: "boundaries", def: "Oyunu gerçek dünyadan ayıran fiziksel ya da kavramsal sınırlar: saha, harita, oyun alanı." },
          { term: "Sonuç", en: "outcome", def: "Oyun nasıl bitiyor: kazanma, kaybetme, puan ya da sıralama." },
        ],
      },
      {
        type: "concept",
        heading: "Örnek Analiz: Tetris",
        image: {
          src: "assets/lesson/tetris-ilk-surum.png",
          caption: "Tetris'in ilk sürümü: Alexey Pajitnov, 1984, Sovyet Elektronika 60 bilgisayarı. Parçalar yazı karakterleriyle çiziliyordu.",
          credit: "Ekran görüntüsü: Alexey Pajitnov. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Sekiz biçimsel öğe, Tetris (1984) üzerinde:",
        table: {
          head: ["Öğe", "Tetris'te"],
          rows: [
            ["Oyuncular", "Tek oyuncu, oyun sistemine karşı."],
            ["Hedefler", "Satırları tamamlayıp silerek olabildiğince uzun dayanmak ve yüksek puan almak."],
            ["Prosedürler", "Düşen parçayı sağa-sola kaydırmak, döndürmek, hızlı indirmek."],
            ["Kurallar", "Tamamlanan satır silinir; parçalar üst üste yığılır; seviye arttıkça parçalar daha hızlı düşer."],
            ["Kaynaklar", "Oyun alanındaki boş yer ve sıradaki parçayı önceden görme bilgisi."],
            ["Çatışma", "Sürekli artan hız ve hangi parçanın geleceğini seçememek."],
            ["Sınırlar", "10 kare genişliğinde, 20 kare yüksekliğinde oyun alanı."],
            ["Sonuç", "Parçalar tepeye ulaşınca oyun biter; sonuç alınan puandır."],
          ],
        },
      },
      {
        type: "concept",
        heading: "Anlamlı Oyun",
        quote: {
          text: "Oyun, bir dizi ilginç karardır.",
          source: "Sid Meier, Civilization serisinin tasarımcısı",
        },
        lead: "Salen ve Zimmerman'a göre iyi bir oyunun ölçütü anlamlı oyundur (meaningful play): oyuncunun yaptığı her eylemin, oyunun içinde gözle görülür ve önemli bir karşılığı olmalıdır. Bunun iki koşulu vardır:",
        terms: [
          { term: "Ayırt edilebilir", en: "discernable", def: "Oyuncu eyleminin sonucunu hemen görebilmelidir. Vurduğunuz düşmanın canı azalmıyorsa, vurmanın bir anlamı yoktur." },
          { term: "Bütünleşik", en: "integrated", def: "Eylemin sonucu, oyunun ilerleyen bölümlerini de etkilemelidir. Bir kararın oyunun sonuna hiçbir etkisi yoksa, o karar anlamsızdır." },
        ],
      },
      {
        type: "concept",
        heading: "Oyun Türleri",
        image: {
          src: "assets/lesson/super-mario.png",
          caption: "Super Mario Bros. (1985): platform türünü tanımlayan oyun. Temel fiil zıplamak; bölüm tasarımı bu fiili sınar.",
          credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Tür (genre), oyunun temel eylemine ve yapısına göre yapılan sınıflandırmadır. Oyuncu bir türün adını duyduğunda ne yapacağını aşağı yukarı bilir.",
        table: {
          head: ["Tür", "Temel eylem", "Örnek"],
          rows: [
            ["Platform (platformer)", "Zıplayarak engelleri ve boşlukları aşmak", "Super Mario Bros., Celeste"],
            ["Bulmaca (puzzle)", "Mantık ve örüntü çözmek", "Tetris, Candy Crush"],
            ["Aksiyon-macera", "Keşfetmek ve dövüşmek", "The Legend of Zelda"],
            ["Strateji", "Kaynak yönetip plan kurmak", "Clash Royale"],
            ["Sonsuz koşu (endless runner)", "Hızlanan engellerden kaçmak", "Subway Surfers, Temple Run"],
            ["Kum havuzu (sandbox)", "Serbestçe inşa etmek ve keşfetmek", "Minecraft, Roblox"],
            ["Roguelike", "Her denemede yeniden üretilen bölümlerde ilerlemek", "Hades, The Binding of Isaac"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Platform: Oyunun Oynandığı Cihaz",
        lead: "Platform, oyunun oynandığı cihazdır: mobil, PC, konsol ya da tarayıcı. “Platform oyunu” ise bir türün adıdır; ikisi karıştırılmamalıdır. Platform; girdi yöntemini, ekran boyutunu ve oyun oturumunun süresini belirler.",
        table: {
          head: ["Platform", "Girdi (input)", "Tipik oturum", "Tasarıma etkisi"],
          rows: [
            ["Mobil", "Dokunmatik ekran", "1-5 dakika", "Az ve büyük düğme, tek elle oynanış, sık kayıt"],
            ["PC", "Klavye ve fare", "30 dakika ve üzeri", "Hassas nişan, çok tuşlu kontroller, karmaşık arayüz"],
            ["Konsol", "Kumanda", "30 dakika ve üzeri", "Sınırlı tuş sayısı, uzaktan okunabilen büyük yazı"],
            ["Tarayıcı", "Fare ya da dokunma", "Birkaç dakika", "Kurulum yok, hemen başlayan oyun; gamejam'lerde yaygın"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Oyun Ekibindeki Roller",
        table: {
          head: ["Rol", "Sorumluluk"],
          rows: [
            ["Oyun tasarımcısı", "Kuralları, hedefleri ve oyuncu deneyimini tasarlar. Büyük ekiplerde uzmanlaşır: sistem tasarımcısı (kurallar, denge, ekonomi), seviye tasarımcısı (bölümler), anlatı tasarımcısı (hikâye, diyalog), UX tasarımcısı (arayüz, kontroller)."],
            ["Programcı", "Tasarımı çalışan bir yazılıma çevirir. Oynanış programcısı (gameplay programmer) mekanikleri, motor programcısı oyunun altyapısını yazar."],
            ["Sanatçı", "Konsept sanatçısı ilk çizimleri yapar; 2D/3D sanatçılar karakter ve dünyayı üretir; animatör hareketi verir."],
            ["Ses tasarımcısı / besteci", "Ses efektlerini ve müziği üretir. Ses, oyuncuya geri bildirim veren en hızlı kanallardan biridir."],
            ["Yapımcı", "Producer: takvimi, bütçeyi ve ekip koordinasyonunu yönetir."],
            ["Test uzmanı", "QA (kalite güvencesi): oyunu sistematik olarak oynayıp hataları bulur ve raporlar."],
          ],
        },
        bullets: [
          "Küçük ekiplerde ve gamejam'lerde bir kişi birden fazla rol üstlenir. Minecraft'ın ilk sürümünü tek kişi yaptı.",
        ],
      },
      {
        type: "concept",
        heading: "Bir Oyun Nasıl Üretilir?",
        lead: "Profesyonel oyun geliştirme genellikle şu aşamalardan geçer:",
        steps: [
          { label: "Konsept", text: "Fikir, hedef kitle ve oyunun ana deneyimi belirlenir." },
          { label: "Ön üretim", text: "Pre-production: prototipler yapılır, oyunun eğlenceli olup olmadığı test edilir, tasarım belgesi (GDD) yazılır." },
          { label: "Üretim", text: "Production: bölümler, karakterler, sesler ve kodun büyük kısmı üretilir." },
          { label: "Alfa", text: "Oyunun bütün özellikleri vardır ama içerik eksik ve hatalar çoktur." },
          { label: "Beta", text: "İçerik tamamdır; ekip hataları ayıklar ve dengeyi ayarlar." },
          { label: "Yayın", text: "Release: oyun oyunculara ulaşır. Ardından güncellemeler ve yeni içerikle yayın sonrası dönem başlar." },
        ],
      },
      {
        type: "concept",
        heading: "Yinelemeli Tasarım",
        image: {
          src: "assets/lesson/kagit-prototip.jpg",
          caption: "Jason Rohrer'in Diamond Trust of London oyunu için hazırladığı kâğıt prototip: harita, puan tablosu, nohut ve bozuk paralar. Oyun kodlanmadan önce kurallar böyle test edildi.",
          credit: "Jason Rohrer, kamu malı. Kaynak: Wikimedia Commons",
        },
        lead: "Oyun tasarımı düz bir çizgide ilerlemez, döngü hâlinde ilerler. Fullerton bu yaklaşımı oyuncu merkezli tasarım süreci (playcentric design) olarak adlandırır: oyuncu, sürecin her adımında tasarıma dahil edilir.",
        steps: [
          { label: "Fikir", text: "Bir kural ya da mekanik önerilir." },
          { label: "Prototip", text: "Fikrin en basit, oynanabilir hâli yapılır. Kâğıt ve kalemle bile olabilir (kâğıt prototip)." },
          { label: "Oyun testi", text: "Playtest: başkaları oynar, tasarımcı izler ve not alır." },
          { label: "Değerlendirme", text: "Ne işe yaradı, ne yaramadı? Kural değiştirilir ve döngü baştan başlar." },
        ],
        terms: [
          { term: "Yineleme", en: "iteration", def: "Bu döngünün her bir turu. İyi oyunlar, tek seferde değil, onlarca yinelemeyle olgunlaşır." },
        ],
      },
      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Oyun tasarımı", en: "game design", def: "Oyunun hedeflerini, kurallarını ve eylemlerini belirleme işi." },
          { term: "Sihirli çember", en: "magic circle", def: "Oyun kurallarının geçerli olduğu, gerçek hayattan ayrı alan." },
          { term: "Oyunbaz tutum", en: "lusory attitude", def: "Kuralları, oyun mümkün olsun diye gönüllü kabul etmek." },
          { term: "Biçimsel öğeler", en: "formal elements", def: "Oyuncular, hedefler, prosedürler, kurallar, kaynaklar, çatışma, sınırlar, sonuç." },
          { term: "Anlamlı oyun", en: "meaningful play", def: "Eylemin sonucunun görülebilir ve oyunun geneline etkili olması." },
          { term: "Tür / Platform", en: "genre / platform", def: "Oyunun yapısına göre sınıfı / oynandığı cihaz." },
          { term: "Prototip", en: "prototype", def: "Bir fikrin en basit oynanabilir hâli." },
          { term: "Yinelemeli tasarım", en: "iterative design", def: "Prototip, test ve düzeltme döngüsüyle ilerleyen tasarım." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Tasarım Defteri'nize yazdığınız 3 oyundan birini seçin ve sekiz biçimsel öğesini Tetris tablosundaki gibi yazın.",
          "Üç oyunun her birini Crawford'a göre (oyuncak, bulmaca, yarışma, oyun) ve Caillois'ya göre (agon, alea, mimicry, ilinx) sınıflandırın. Birden fazla kategoriye giriyorsa hepsini yazıp gerekçelendirin.",
          "Bu oyunlardan birinin ekibinde olsaydınız hangi rolü üstlenmek isterdiniz? Nedenini iki cümleyle yazın.",
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
        heading: "Oyun Fikri Geliştirme",
        lead: "Bir oyun fikri tek bir anda gelen ilhamla değil, belirli tekniklerle üretilir ve bir dizi soruyla olgunlaştırılır. Bu derste bir fikri, bir ekibe anlatılabilecek tek cümlelik bir konsepte dönüştürmeyi öğreneceğiz.",
        bullets: [
          "Oyun fikrinin dört giriş noktasını ayırt edebilmek",
          "Deneyim hedefi ve temel fiil yazabilmek",
          "Fikir üretme tekniklerini uygulayabilmek",
          "Yüksek konsept cümlesi ve tasarım sütunları yazabilmek, kapsamı sınırlayabilmek",
        ],
      },
      {
        type: "concept",
        heading: "Fikrin Dört Giriş Noktası",
        lead: "Tasarımcılar bir oyuna genellikle dört kapıdan birinden girer. Hangi kapıdan girildiği önemli değildir; sonunda dördü de tanımlanmalıdır.",
        table: {
          head: ["Giriş noktası", "Başlangıç sorusu", "Örnek"],
          rows: [
            ["Mekanik", "Oyuncu ne yapabilir?", "Portal: bir öğrenci projesinde (Narbacular Drop) denenen “iki nokta arasında geçit açma” mekaniğinden doğdu."],
            ["Tema / dünya", "Oyun nerede, kimin hakkında?", "Papers, Please: bir sınır kapısında pasaport kontrol eden memur olmak."],
            ["Deneyim", "Oyuncu ne hissetmeli?", "Journey: hiç konuşmadan, tanımadığı biriyle yol arkadaşlığı kurma hissi."],
            ["Kısıt", "Hangi sınırla çalışıyorum?", "Surgeon Simulator: 2013 Global Game Jam'in “kalp atışı sesi” temasından çıktı. Baba Is You da bir gamejam'de yapıldı."],
          ],
        },
      },
      {
        type: "examples",
        heading: "Vaka: Papers, Please (Temadan Mekaniğe)",
        image: {
          src: "assets/lesson/papers-please.jpg",
          caption: "Papers, Please (2013): oyuncu, belgeleri masada yan yana koyup karşılaştırır. Arayüzün kendisi oyunun mekaniğidir.",
          credit: "Lucas Pope. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Lucas Pope'un tek başına geliştirdiği oyunda, oyuncu kurgusal Arstotzka ülkesinde bir sınır kapısı memurudur. Fikir bir temadan doğdu: Pope, seyahatlerinde gördüğü pasaport memurlarının işini oyuna çevirmek istedi.",
        terms: [
          { term: "Temel fiil", def: "Karşılaştırmak: pasaport, giriş izni ve kimlik kartındaki bilgilerdeki tutarsızlığı bulmak, sonra damgalamak (onay ya da red)." },
          { term: "Çatışma", def: "Her gün yeni kurallar eklenir ve süre sınırlıdır. Doğru karar başına maaş alınır; yanlış karar ceza getirir." },
          { term: "Kaynaklar", def: "Gün sonunda maaşla ailenin kirası, yemeği ve ısınması ödenir. Para yetmezse aile hastalanır." },
          { term: "Ders", def: "Tema ile mekanik birbirini destekler. Belgesi eksik birini acıyıp içeri almak, ailenin parasından vazgeçmek demektir: ahlaki ikilem tamamen kurallardan doğar." },
        ],
      },
      {
        type: "examples",
        heading: "Vaka: Journey (Deneyimden Mekaniğe)",
        image: {
          src: "assets/lesson/journey.jpg",
          caption: "Journey (2012): uzaktaki dağa doğru yürüyen iki yabancı oyuncu. İsim, sohbet ya da puan tablosu yoktur.",
          credit: "thatgamecompany. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "thatgamecompany ve tasarımcı Jenova Chen, işe bir mekanikle değil bir deneyim hedefiyle başladı: çevrimiçi oyunlarda yabancılar genellikle birbirine rakip ya da araçtır; Journey'de tanımadığınız biriyle gerçek bir yol arkadaşlığı kurmanızı istediler. Her tasarım kararı bu hedefe göre verildi.",
        terms: [
          { term: "İsim ve sohbet yok", def: "Diğer oyuncunun kim olduğu yolculuk bitene kadar görünmez. Hakaret, rekabet ve dış dünya oyunun dışında kalır." },
          { term: "Tek iletişim yolu", def: "Oyuncular yalnızca bir ses/nota çıkararak iletişim kurabilir." },
          { term: "Birlikte güçlenme", def: "Birbirine yakın duran oyuncular birbirinin uçma gücünü yeniler. Kural, iş birliğini zorlamaz ama ödüllendirir." },
          { term: "Ders", def: "Önce deneyim hedefi yazılır (“yabancıyla bağ kurmak”), sonra bu hedefe hizmet etmeyen her özellik (sohbet, puan, rekabet) çıkarılır." },
        ],
      },
      {
        type: "concept",
        heading: "Deneyim Hedefi",
        lead: "Fullerton, tasarıma başlamadan önce oyuncunun yaşayacağı deneyimin tek cümleyle yazılmasını önerir. Bu cümle, sonradan alınacak her kararın pusulasıdır.",
        terms: [
          { term: "Deneyim hedefi", en: "player experience goal", def: "Oyuncunun oyun sırasında ne hissedeceğini ve ne yaşayacağını anlatan cümle. Kalıp: “Oyuncu ... hissetmeli, çünkü ...”" },
          { term: "Oyuncu fantezisi", en: "player fantasy", def: "Oyuncunun oyunda kim olduğunu hayal ettiği rol: ejderha avcısı, şehir kurucu, dedektif." },
        ],
        table: {
          head: ["Deneyim hedefi", "Bu hissi yaratan tasarım kararları"],
          rows: [
            ["Panik", "Azalan süre, daralan oyun alanı, hızlanan müzik"],
            ["Merak", "Kapalı kapılar, yarım görünen harita, açılmamış sandıklar"],
            ["Güç", "Zayıf başlayıp güçlenen karakter, kolayca yenilen kalabalık düşmanlar"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Temel Fiil ve Çekirdek Mekanik",
        lead: "Oyunların çoğu bir ya da iki eylem üzerine kurulur ve tasarımcılar bu eylemi bir fiille ifade eder.",
        terms: [
          { term: "Mekanik", en: "mechanic", def: "Oyuncunun oyun dünyasıyla etkileşime girdiği eylem ve bu eylemi yöneten kural. Zıplama bir mekaniktir; ne kadar yükseğe zıplanacağı onun kuralıdır." },
          { term: "Temel fiil", en: "core verb", def: "Oyuncunun en sık tekrarladığı eylem. Test: “Oyuncu ... yapar.” Cümle tek fiile sığmıyorsa fikir henüz dağınıktır." },
          { term: "Çekirdek mekanik", en: "core mechanic", def: "Temel fiilin kurallarıyla birlikte tanımlanmış hâli. Oyunun geri kalanı bunun üzerine kurulur." },
        ],
        table: {
          head: ["Oyun", "Temel fiil"],
          rows: [
            ["Flappy Bird", "Kanat çırpmak"],
            ["Super Mario Bros.", "Zıplamak"],
            ["Candy Crush", "Yer değiştirmek"],
            ["Among Us", "Suçlamak ve savunmak"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Kısa ve Uzun Vadeli Hedefler",
        lead: "Oyuncunun her an bir sonraki adımı bilmesi ve aynı zamanda ulaşmak istediği daha büyük bir şeyin olması gerekir. Bu iki hedef türü iç içe çalışır.",
        table: {
          head: ["Oyun", "Kısa vadeli hedef", "Uzun vadeli hedef"],
          rows: [
            ["Flappy Bird", "Bir sonraki borudan geçmek", "Kendi rekorunu kırmak"],
            ["Minecraft (hayatta kalma)", "Geceden önce barınak yapmak", "Ender Ejderhası'nı yenmek"],
            ["Super Mario Bros.", "Önündeki boşluğu atlamak", "Prensesi kurtarmak"],
          ],
        },
        bullets: [
          "Kısa vadeli hedef yoksa oyuncu ne yapacağını bilemez. Uzun vadeli hedef yoksa oyuncu neden devam ettiğini bilemez.",
        ],
      },
      {
        type: "concept",
        heading: "Beyin Fırtınası",
        lead: "Beyin fırtınası (brainstorming) tekniği, Alex Osborn tarafından 1953'te tanımlandı. Amaç, değerlendirmeyi ertelemek ve önce çok sayıda fikir üretmektir. Osborn'un dört kuralı:",
        steps: [
          { label: "Eleştiri yok", text: "Fikir üretme aşamasında hiçbir fikir yargılanmaz. Değerlendirme sonraki aşamadır." },
          { label: "Nicelik", text: "Ne kadar çok fikir, o kadar iyi. İlk akla gelen fikir genellikle herkesin aklına gelen fikirdir." },
          { label: "Uçuk fikirler", text: "Saçma görünen fikirler teşvik edilir; özgün oyunlar sıklıkla buradan çıkar." },
          { label: "Birleştirme", text: "Başkalarının fikirleri geliştirilir ve birbiriyle birleştirilir." },
        ],
      },
      {
        type: "concept",
        heading: "Fikir Üretme Teknikleri",
        image: {
          src: "assets/lesson/necrodancer.png",
          caption: "Crypt of the NecroDancer (2015): zindan keşfi (roguelike) ile ritim oyununun birleşimi. Karakter yalnızca müziğin vuruşunda hareket edebilir.",
          credit: "Brace Yourself Games. Kaynak: Wikipedia (adil kullanım)",
        },
        terms: [
          { term: "Fiil değiştirme", def: "Bilinen bir oyunun temel fiilini değiştirin. “Mario zıplayamasa, sadece yer değiştirebilse ne olurdu?”" },
          { term: "Tür harmanlama", en: "genre mashup", def: "İki türü birleştirin. Crypt of the NecroDancer, roguelike türünü ritim oyunuyla birleştirir: her adım müziğin vuruşunda atılmalıdır." },
          { term: "Rastgele girdi", en: "random input", def: "Rastgele seçilen bir kelime, nesne ya da fotoğrafı oyuna çevirin. Silgi → “lekeleri yayılmadan silmek.”" },
          { term: "Kısıt ekleme", en: "constraint", def: "Kendinize sınır koyun: tek tuşla oynanan oyun, 10 saniyelik oyun, hiç yazı içermeyen oyun. Kısıtlar yaratıcılığı daraltmaz, yönlendirir." },
        ],
      },
      {
        type: "concept",
        heading: "Yüksek Konsept",
        image: {
          src: "assets/lesson/flappy-bird.png",
          caption: "Flappy Bird (2013): Dong Nguyen'in tek başına yaptığı oyun. Tek temel fiil: ekrana dokunup kanat çırpmak.",
          credit: "dotGEARS. Kaynak: Wikipedia (adil kullanım)",
        },
        terms: [
          { term: "Yüksek konsept", en: "high concept", def: "Oyunu tek cümlede özetleyen ifade. Kalıp: “[Oyun], [tür] türünde bir oyundur; oyuncu [temel fiil] yaparak [hedef]e ulaşmaya çalışır.”" },
          { term: "Kanca", en: "hook", def: "Oyunu benzerlerinden ayıran tek özellik. Yüksek konseptin sonuna eklenir: “Farkı: ...”" },
          { term: "Asansör konuşması", en: "elevator pitch", def: "Oyunu 30 saniyede, yüksek konsept + kanca + hedef kitle olarak anlatmak." },
        ],
        quote: {
          text: "Flappy Bird, tek dokunuşla oynanan bir refleks oyunudur; oyuncu kuşu zıplatarak boruların arasından geçmeye çalışır. Farkı: tek bir çarpma her şeyi bitirir.",
          source: "Örnek yüksek konsept + kanca",
        },
      },
      {
        type: "concept",
        heading: "Tasarım Sütunları",
        lead: "Tasarım sütunları (design pillars), oyunun mutlaka sahip olması gereken iki ya da üç temel niteliktir. Ekip bir özelliği eklemeden önce sorar: “Bu, sütunlarımızdan birine hizmet ediyor mu?” Etmiyorsa özellik eklenmez.",
        table: {
          head: ["Örnek oyun: “Leke”", "Sütun"],
          rows: [
            ["1", "Telaş: lekeler her saniye yayılır, oyuncu hiç durmaz."],
            ["2", "Tek parmak: oyunun tamamı tek parmakla silerek oynanır."],
            ["3", "Okul defteri estetiği: her şey mavi tükenmez kalemle çizilmiş gibi görünür."],
          ],
        },
        bullets: [
          "Bu sütunlara göre, “Leke”ye karakter geliştirme menüsü eklemek telaşı böleceği için reddedilir.",
        ],
      },
      {
        type: "concept",
        heading: "Kapsam",
        image: {
          src: "assets/lesson/gamejam.jpg",
          caption: "Global Game Jam 2019, Arles (Fransa). Dünya çapında binlerce ekip aynı tema ile 48 saatte oyun yapar; bu sürede bitirilebilecek kapsamı seçmek en önemli tasarım kararıdır.",
          credit: "Yannickvernet, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Kapsam (scope), oyunun ne kadar büyük olacağıdır: kaç bölüm, kaç mekanik, kaç karakter. Acemi tasarımcıların en sık hatası, elindeki zamana sığmayacak bir oyun planlamaktır.",
        terms: [
          { term: "Özellik şişmesi", en: "feature creep", def: "Geliştirme sırasında sürekli yeni özellik eklenmesi. Sonunda hiçbir özellik tam bitmez." },
          { term: "En küçük oynanabilir sürüm", en: "minimum viable product (MVP)", def: "Çekirdek mekaniği gösteren, başı ve sonu olan en küçük oyun. Gamejam'de önce bu bitirilir, kalan zamanda üstüne eklenir." },
        ],
        bullets: [
          "Kural: tek temel fiil, tek bölüm, tek kazanma koşulu. Bu çalışıyorsa genişletin.",
        ],
      },
      {
        type: "concept",
        heading: "Fikri Seçmek",
        lead: "Beyin fırtınasından çıkan fikirler, değerlendirme aşamasında ölçütlerle puanlanır. Her ölçüte 1-3 puan verin, en yüksek toplamı alan fikirle devam edin.",
        table: {
          head: ["Ölçüt", "Soru"],
          rows: [
            ["Eğlence potansiyeli", "Temel fiil tek başına, ödül ve süs olmadan da ilgi çekici mi?"],
            ["Yapılabilirlik", "Feasibility: elimizdeki süre ve becerilerle bitirilebilir mi?"],
            ["Özgünlük", "Bir kancası var mı, yoksa bilinen bir oyunun kopyası mı?"],
            ["Netlik", "Yüksek konsept cümlesine sığıyor mu?"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Örnek: Bir Fikrin Gelişimi",
        lead: "Bu dersteki adımların tamamı, tek bir fikir üzerinde:",
        steps: [
          { label: "Rastgele girdi", text: "Masadaki silgi." },
          { label: "Temel fiil", text: "Silmek." },
          { label: "Deneyim hedefi", text: "Oyuncu telaş hissetmeli, çünkü lekeler sürekli yayılıyor." },
          { label: "Hedefler", text: "Kısa vadeli: önündeki lekeyi silmek. Uzun vadeli: sayfayı 60 saniye temiz tutmak." },
          { label: "Yüksek konsept", text: "Leke, tek parmakla oynanan bir refleks oyunudur; oyuncu defter sayfasına yayılan mürekkep lekelerini silerek sayfayı temiz tutmaya çalışır. Farkı: sildiğiniz her leke silginizi küçültür." },
          { label: "Kapsam", text: "Tek sayfa, tek leke türü, 60 saniye." },
        ],
      },
      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Deneyim hedefi", en: "player experience goal", def: "Oyuncunun ne hissedeceğini anlatan tek cümle." },
          { term: "Oyuncu fantezisi", en: "player fantasy", def: "Oyuncunun oyunda üstlendiğini hayal ettiği rol." },
          { term: "Mekanik", en: "mechanic", def: "Eylem ve onu yöneten kural." },
          { term: "Temel fiil", en: "core verb", def: "Oyuncunun en sık yaptığı eylem." },
          { term: "Beyin fırtınası", en: "brainstorming", def: "Değerlendirmeyi erteleyerek çok sayıda fikir üretme tekniği." },
          { term: "Yüksek konsept / Kanca", en: "high concept / hook", def: "Oyunun tek cümlelik özeti / onu farklı kılan özellik." },
          { term: "Tasarım sütunları", en: "design pillars", def: "Her kararın test edildiği 2-3 temel nitelik." },
          { term: "Kapsam / Özellik şişmesi", en: "scope / feature creep", def: "Oyunun büyüklüğü / kontrolsüz özellik eklenmesi." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Tasarım Defteri'nize 6 oyun fikri yazın: dört giriş noktasının (mekanik, tema, deneyim, kısıt) her birinden en az bir tane. Her fikir tek cümle: “Oyuncu ... yapar.”",
          "Fikirleri “Fikri Seçmek” tablosundaki dört ölçüte göre 1-3 arası puanlayın ve en yüksek puanlıyı seçin. Dersin sonuna kadar bu oyun üzerinde çalışacağız.",
          "Seçtiğiniz oyun için yazın: geçici isim ve tür (GDD madde 1), yüksek konsept cümlesi + kanca (GDD madde 2), deneyim hedefi ve temel fiil.",
        ],
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
        bullets: ["Oyunu kim oynayacak?", "Farklı oyuncular farklı şeyler arar."],
      },
      {
        type: "concept",
        heading: "Oyuncu Kimdir?",
        bullets: [
          "Oyunu deneyimleyen ve kararları veren kişi.",
          "Önemli bir gerçek: siz oyuncunuz değilsiniz. Kendi yaptığınız oyunu çok iyi bilirsiniz; ilk kez oynayan biri bilmez.",
        ],
      },
      {
        type: "concept",
        heading: "Hedef Kitle Nedir?",
        bullets: [
          "Oyunun kimin için tasarlandığıdır: yaş, ilgi alanı, oyun deneyimi, ne kadar vakti olduğu.",
          "Küçük yaş: basit kurallar, hızlı ve renkli geri bildirim.",
          "Deneyimli oyuncu: daha derin sistemler, daha zor meydan okumalar.",
          "Otobüste 2 dakika oynayan biriyle akşam 2 saat oynayan biri aynı oyunu istemez.",
        ],
      },
      {
        type: "concept",
        heading: "Bartle'ın 4 Oyuncu Tipi",
        bullets: [
          "Başarıcı (Achiever): puan toplamak, seviye atlamak, oyunu bitirmek ister.",
          "Kâşif (Explorer): gizli yerleri ve oyunun sırlarını bulmayı sever.",
          "Sosyal (Socializer): başkalarıyla birlikte oynamaktan keyif alır.",
          "Rakip (Killer): başka oyunculara karşı yarışmayı ve kazanmayı sever.",
          "Çoğumuz bunların bir karışımıyız. Bu tipler bir kutu değil, oyuncuyu anlamaya yarayan bir mercek.",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncu Ne Bekler?",
        bullets: [
          "Net bir hedef, adil kurallar, ne olduğunu anlatan geri bildirim.",
          "Kaybettiğinde “oyun hile yaptı” değil, “ben hata yaptım, bir daha denerim” diyebilmeli.",
          "Gamejam'de sorulacak soru: “Bizim oyunumuz en çok hangi oyuncu tipini mutlu eder?”",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Roblox: çok geniş yaş grubu, arkadaşlarla birlikte oynamak (Sosyal)",
          "Clash Royale: başka oyunculara karşı kısa maçlar (Rakip)",
          "Minecraft: keşfetmeyi ve inşa etmeyi seven oyuncular (Kâşif)",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Siz hangi oyuncu tipine daha yakınsınız? Oynadığınız oyunlar bunu doğruluyor mu?",
          "Küçük kardeşiniz ya da anne-babanız için oyun yapsaydınız neyi değiştirirdiniz?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuzun oyuncusunu tarif edin: kaç yaşında, ne sever, oyunu nerede ve ne kadar süre oynar?",
          "Bu oyuncu en çok hangi Bartle tipine yakın?",
          "Oyununuz ona hangi 2-3 duyguyu yaşatmalı? (GDD madde 8)",
        ],
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
        bullets: ["Kural ile mekanik arasındaki fark.", "Kazanma/kaybetme ve oyun döngüsü."],
      },
      {
        type: "concept",
        heading: "Oyun Kuralları",
        bullets: [
          "Oyuncunun yapabileceği ve yapamayacağı şeyler.",
          "Kurallar net olmalı, herkes aynı şekilde anlamalı.",
          "Test: kuralı hiç konuşmadan, sadece yazılı olarak okuyan biri doğru oynayabiliyor mu?",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncunun Yapabilecekleri",
        bullets: [
          "Hareket etmek, bir şeyle etkileşime girmek, seçim yapmak.",
          "Örnek: Among Us'ta oyuncu hareket eder, görev yapar, toplantı çağırır ve oy verir.",
        ],
      },
      {
        type: "concept",
        heading: "Kazanma ve Kaybetme Koşulları",
        bullets: [
          "Oyuncu ne zaman kazanır, ne zaman kaybeder net olmalı.",
          "Belirsiz koşul, kafa karışıklığı demektir: “Bitti mi? Kazandım mı?”",
          "Bazı oyunlarda kazanma yoktur, rekor vardır (Flappy Bird). Bu da net bir hedeftir.",
        ],
      },
      {
        type: "concept",
        heading: "Kaybedince Ne Olur?",
        bullets: [
          "Kaybetmenin sonucu oyunun hissini belirler: en baştan mı başlanır, son kontrol noktasından mı, yoksa sadece bir can mı gider?",
          "Çok cezalandırıcı olursa (her hatada en baştan) oyuncu sinirlenir. Hiç sonucu olmazsa gerilim kalmaz.",
          "Gamejam'de basit bir seçim yeterli: örneğin 3 can var, can biterse bölüm baştan başlar.",
        ],
      },
      {
        type: "concept",
        heading: "Programcı Ne Yapar?",
        bullets: [
          "Programcı, tasarımcının kurallarını ve mekaniklerini çalışan bir sisteme çevirir.",
          "Önce oyunun çekirdek döngüsünü çalışır hale getirir. Süsler sonra gelir; önemli olan bir an önce test edilebilir bir prototip.",
          "Hız, güç, süre gibi sayıları kolay değiştirilebilir yazar. Böylece ekip “zıplama biraz daha yüksek olsun” denemesini saniyeler içinde yapabilir.",
        ],
      },
      {
        type: "concept",
        heading: "MDA: Mekanik, Dinamik, Estetik",
        bullets: [
          "Mekanik: tasarımcının yazdığı kural ve eylemler (saklan, ara, sobele).",
          "Dinamik: bu kurallar oynanırken ortaya çıkan durum (ebe yaklaşırken nefesini tutmak, son anda yer değiştirmek).",
          "Estetik: oyuncunun hissettiği duygu (gerilim, heyecan).",
          "Tasarımcı mekaniği yazar ama oyuncu önce duyguyu yaşar. Duyguyu doğrudan yazamazsınız; onu yaratacak kuralı tasarlarsınız.",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Döngüsü (Game Loop)",
        bullets: [
          "Çekirdek döngü (core loop): oyuncunun saniyeler içinde tekrar tekrar yaptığı eylem zinciri. Flappy Bird: dokun, zıpla, borudan geç, puan al.",
          "Büyük döngü: maçlar ya da bölümler arası tekrar. Clash Royale: maç yap, ödül al, kartını güçlendir, desteni değiştir, yeni maça gir.",
          "İyi bir çekirdek döngü kısa, anlaşılır ve tek başına bile eğlencelidir. Ödüller ve süsler onun üstüne gelir.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Among Us: kural “sahtekârı oyla bul”; mekanik oylama; dinamik birbirini suçlama ve savunma",
          "Satranç: az sayıda sabit kural, sonsuz farklı oyun",
          "Fall Guys: basit mekanik (koş, zıpla, tutun), çok oyuncu bir araya gelince kaotik sonuçlar",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Bir oyunda “bu kural haksız” dediğiniz bir an oldu mu? Neden haksızdı?",
          "Saklambaçtan tek bir kuralı değiştirseniz oyun nasıl değişirdi? (Örn. ebe gözlerini kapatmıyor.)",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuz için 3 temel kural yazın. Kazanma ve kaybetme koşulunu da ekleyin (GDD madde 7).",
          "Çekirdek döngünüzü yazın: ___ → ___ → ___ → tekrar (GDD madde 6).",
          "Evde kurallarınızı bir aile üyenize ya da arkadaşınıza hiç açıklama yapmadan okutun. Soru sorduysa o kural henüz net değil; düzeltin.",
        ],
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
        bullets: ["Bir oyun neden eğlencelidir?", "Zorluk, ödül, merak, ilerleme ve his."],
      },
      {
        type: "concept",
        heading: "Eğlence = Öğrenmek",
        bullets: [
          "Oyun tasarımcısı Raph Koster'a göre eğlencenin kaynağı öğrenmektir: bir şeyi çözmek, bir hareketi ustalıkla yapmak.",
          "Öğrenecek bir şey kalmayınca oyun sıkıcı olur. Bu yüzden Tic-Tac-Toe'yu (XOX) bir süre sonra kimse oynamaz: hep berabere biter.",
          "Tasarımcının sorusu: “Oyuncu bu oyunda neyi öğreniyor, neyde ustalaşıyor?”",
        ],
      },
      {
        type: "concept",
        heading: "Oyunun Aktardığı Temel Duygular",
        bullets: [
          "İyi bir tasarımcı, oyuna başlamadan önce hangi duyguları hedeflediğine karar verir.",
          "Örnek duygular: heyecan, gerilim, merak, gurur, rahatlama, arkadaşlık, rekabet.",
          "Gamejam'de: “Bizim oyunumuz oyuncuya hangi 2-3 duyguyu yaşatmalı?”",
        ],
      },
      {
        type: "concept",
        heading: "Zorluk ve Akış (Flow)",
        bullets: [
          "Çok kolay olursa sıkıcı, çok zor olursa sinir bozucu olur.",
          "Zorluk oyuncunun becerisiyle birlikte büyüdüğünde oyuncu “akışa” girer: zamanın nasıl geçtiğini fark etmez.",
          "Bu yüzden iyi oyunlar kolay başlar ve oyuncu ustalaştıkça zorlaşır.",
        ],
      },
      {
        type: "concept",
        heading: "Merak ve Keşif",
        bullets: [
          "Bilinmeyeni öğrenme isteği oyuncuyu ileri taşır: “O tepenin arkasında ne var?”",
          "Örnek: Minecraft'ta haritanın henüz görülmemiş kısımları.",
          "Merak uyandırmak için her şeyi göstermeyin: yarım bir ipucu, kapalı bir kapı yeter.",
        ],
      },
      {
        type: "concept",
        heading: "Başarı ve İlerleme Hissi",
        bullets: [
          "Oyuncu geliştiğini hissetmeli: yeni seviye, yeni yetenek, yeni alan.",
          "İlerleme göstergeleri (puan, seviye çubuğu, açılan harita) bu hissi görünür kılar.",
        ],
      },
      {
        type: "concept",
        heading: "Oyun İçi Ekonomi (Kaynaklar ve Ödüller)",
        bullets: [
          "Oyun içi ekonomi: oyuncunun topladığı kaynaklar (puan, para, enerji) ve onları nasıl harcadığı.",
          "Basit bir ekonomi bile ilerleme hissini güçlendirir: puan biriktir, yeni bir şey aç.",
          "Örnek: Clash Royale'de altın toplanır, kartları güçlendirmek için harcanır.",
          "Ödül, oyunun asıl eğlencesinin yerine geçmemeli. Ödül olmasa da oyun oynanmaya değer olmalı.",
        ],
      },
      {
        type: "concept",
        heading: "Oyunun “His”i (Game Feel)",
        bullets: [
          "Aynı zıplama hareketi, ekran hafifçe sarsıldığında ya da yerden küçük bir toz bulutu kalktığında çok daha tatmin edici hissettirir.",
          "Buna “game feel” ya da “juice” denir: ses, titreşim, küçük animasyonlar gibi anlık geri bildirimlerin toplamı.",
          "Gamejam'de neredeyse bedava: bir vuruşta ekranı 2-3 piksel sarsmak bile büyük fark yaratır.",
        ],
      },
      {
        type: "concept",
        heading: "Tekrar Oynanabilirlik",
        bullets: [
          "Oyuncunun oyunu bir kez oynayıp bırakmasını mı istiyorsunuz, yoksa tekrar tekrar açmasını mı?",
          "Rastgelelik (her seferinde farklı harita, farklı düşman sırası) ya da rekor kırma isteği oyuncuyu geri getirir.",
          "Flappy Bird'de hikâye yok ama “bir dahakine daha iyi yaparım” hissi sizi geri çeker.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Zelda: gizli alanları keşfetme merakı",
          "Subway Surfers: oyuncu ustalaştıkça artan hız",
          "Clash Royale: ödül ve ilerleme hissi",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Hangi oyunu oynarken zamanın nasıl geçtiğini anlamadınız?",
          "Bir oyunu neden bıraktınız: çok mu kolaydı, çok mu zordu, yoksa öğrenecek bir şey mi kalmamıştı?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Evde hiç oynamadığınız bir oyunu 10 dakika oynayın. İlk 10 dakikada neyi öğrendiniz? Oyun size bunu nasıl öğretti: yazıyla mı, deneyerek mi?",
          "Kendi oyununuzda oyuncu neyi öğrenecek, neyde ustalaşacak? Tek cümle yazın.",
          "Oyuncunuzu ödüllendiren bir şey var mı (puan, para, yeni karakter)? Nasıl kazanılıyor, ne işe yarıyor? (GDD madde 10)",
        ],
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
        bullets: ["Level design nedir?", "Oyuncuya yazıyla değil, oynatarak öğretmek."],
      },
      {
        type: "concept",
        heading: "Level Design Nedir?",
        bullets: [
          "Oyuncunun bir alanda yaşayacağı deneyimin tasarlanmasıdır: nereden başlar, neyle karşılaşır, nerede biter.",
          "Bölüm, mekanikleri öğrettiğiniz ve test ettiğiniz yerdir.",
        ],
      },
      {
        type: "concept",
        heading: "Yazıyla Değil, Oynatarak Öğret",
        bullets: [
          "Super Mario Bros.'un ilk bölümünde ekranda uzun bir talimat yazmaz.",
          "İlk düşman güvenli bir yerde karşınıza çıkar; zıplamanız gerektiğini kendiniz keşfedersiniz.",
          "İyi bir ilk bölüm oyuncuya “ne yapacağım?” diye sordurmaz. Oyuncu denerken öğrenir.",
        ],
      },
      {
        type: "concept",
        heading: "Öğret, Dene, Zorlaştır",
        bullets: [
          "Öğret: yeni mekaniği güvenli bir yerde tanıtın. Hata yapsa da ceza küçük olsun.",
          "Dene: oyuncunun o mekaniği tek başına kullanmasını isteyin.",
          "Zorlaştır: mekaniği başka bir şeyle birleştirin ya da hızlandırın.",
          "Bitiş: oyuncu öğrendiği her şeyi kullanarak bölümü tamamlar ve başarıyı hisseder.",
        ],
      },
      {
        type: "concept",
        heading: "Engel ve Düşman Yerleşimi",
        bullets: [
          "Engeller, oyuncuyu mekaniği kullanmaya zorlamalı. Zıplama öğrettiyseniz, zıplanacak bir çukur koyun.",
          "Yeni bir engeli önce tek başına gösterin, sonra diğerleriyle karıştırın.",
          "Oyuncunun göremediği yerden gelen ani tehlike haksız hissettirir.",
        ],
      },
      {
        type: "concept",
        heading: "Zorluk Nasıl Artırılır?",
        bullets: [
          "Yeni engel türleri, daha hızlı düşmanlar, daha dar alanlar, daha az zaman.",
          "Her zaman aynı anda tek bir şeyi zorlaştırın. Hepsi birden gelirse oyuncu neden kaybettiğini anlamaz.",
          "Zor bir bölümün ardından kısa bir nefes alma bölümü koyun.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Super Mario Bros: ilk bölüm, oyunun neredeyse bütün kurallarını talimat yazmadan öğretir",
          "Angry Birds: her bölüm yeni bir kuş ya da yeni bir yapı malzemesi tanıtır",
          "Geometry Dash: engeller önce tek tek, sonra art arda gelir",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Bir oyunun ilk bölümü size nasıl öğretti? Yazı mı okudunuz, yoksa deneyerek mi öğrendiniz?",
          "Hiç “bu bölüm haksız” dediğiniz oldu mu? Neden?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuzun ilk bölümünü kareli kâğıda yukarıdan ya da yandan çizin.",
          "Bölümü 3 parçaya ayırıp işaretleyin: Öğret, Dene, Zorlaştır.",
          "Evde çiziminizi bir aile üyenize ya da arkadaşınıza gösterin: parmağıyla bölümü “oynasın”. Nerede takıldığını not alın.",
        ],
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
        bullets: ["Karakterin amacı ve yetenekleri.", "Siluet, renk ve şekil."],
      },
      {
        type: "concept",
        heading: "Karakter Nasıl Oluşturulur?",
        bullets: [
          "Önce karakterin oyundaki rolü ve amacı gelir, görünüşü sonra.",
          "Örnek: Mario'nun amacı prensesi kurtarmaktır; zıplayabildiği için düşmanların üstüne basabilir.",
        ],
      },
      {
        type: "concept",
        heading: "Karakterin Yetenekleri Oynanışı Belirler",
        bullets: [
          "Hızlı, güçlü, gizli, akıllı gibi belirgin özellikler seçin.",
          "Her özellik oynanışa yansımalı: “hızlı” karakterin oyunu koşu, “gizli” karakterin oyunu saklanma üzerine kurulur.",
          "Oyunda hiçbir işe yaramayan özellik sadece süstür.",
        ],
      },
      {
        type: "concept",
        heading: "Siluet: Gölgesinden Tanınmak",
        bullets: [
          "İyi bir karakter, içi simsiyah boyansa bile şeklinden tanınır.",
          "Görünüş, karakterin ne yapabildiğini anlatmalı: iri gövde güç, ince uzun gövde hız.",
          "Basit şekiller, küçük detaylardan daha okunaklıdır; özellikle küçük telefon ekranında.",
        ],
      },
      {
        type: "concept",
        heading: "Renk ve Şekillerin Kullanımı",
        bullets: [
          "Renkler duygu ve rol anlatır. Oyunlarda kırmızı genelde tehlike, yeşil güvenli demektir.",
          "Şekiller karakter algısını etkiler: köşeli ve sivri şekiller sert ya da tehlikeli, yuvarlak şekiller dost canlısı görünür.",
          "Bu kalıplar kural değildir; bilerek bozarsanız oyuncuyu şaşırtabilirsiniz.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Mario: kırmızı şapka ve bıyık, küçük ekranda bile tanınır",
          "Sonic: mavi renk ve geriye doğru sivri dikenler hız hissi verir",
          "Among Us: aynı basit şekil, kimliği sadece renk belirler",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Bir oyun karakterini sadece siluetinden tanıyabilir misiniz? Örnek verin.",
          "Kötü karakterlere neden genelde koyu renkler ve sivri şekiller verilir?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuzun ana karakterini kâğıda çizin. Yanına amacını ve oynanışı etkileyen tek özelliğini yazın.",
          "Siluet testi: karakterin içini kurşun kalemle tamamen karartın. Bir arkadaşınız ne yaptığını tahmin edebiliyor mu?",
        ],
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
        bullets: ["Görsel stil seçimi, 2D mi 3D mü?", "Ses ve müzik de bir tasarım kararıdır."],
      },
      {
        type: "concept",
        heading: "Oyunların Görsel Stilleri",
        bullets: [
          "Piksel sanat, çizgi film tarzı, gerçekçi, minimal.",
          "Stil, oyunun havasını ve kime hitap ettiğini anlatır.",
          "En güzel görünen değil, ekibinizin kısa sürede bitirebileceği stili seçin.",
        ],
      },
      {
        type: "concept",
        heading: "2D ve 3D Tasarım",
        bullets: [
          "2D: daha hızlı üretilir, küçük ekipler ve kısa süreler için uygundur.",
          "3D: çok daha fazla emek ister, derinlik ve mekân hissi verir.",
          "Gamejam'lerde çoğu ekip 2D seçer; kısa sürede bitirmek daha kolaydır.",
        ],
      },
      {
        type: "concept",
        heading: "Renk Seçimi ve Görsel Bütünlük",
        bullets: [
          "Az sayıda ana renk seçin ve hep onları kullanın.",
          "Tüm karakterler ve alanlar aynı stilde olmalı; biri piksel, biri gerçekçi olursa göz rahatsız olur.",
          "Oyuncunun dikkat etmesi gereken şeyler (düşman, altın) arka plandan kolayca ayrılmalı.",
        ],
      },
      {
        type: "concept",
        heading: "Hedef Kitleye Uygun Görsel Stil",
        bullets: [
          "Küçük yaş grubu: parlak renkler, yumuşak şekiller.",
          "Daha büyük yaş grubu: daha karmaşık, gerçekçi ya da karanlık temalar da olabilir.",
          "2.1'de tarif ettiğiniz oyuncuyu düşünün: bu stil ona hitap ediyor mu?",
        ],
      },
      {
        type: "concept",
        heading: "Ses ve Müzik de Bir Tasarım Kararıdır",
        bullets: [
          "Müzik ve ses efektleri, görsel stil kadar oyunun havasını belirler. Korku oyunuyla çizgi film oyununun müziği aynı olamaz.",
          "Doğru anda çalan bir “ding” sesi, oyuncuya başarılı olduğunu ekrana bakmadan da hissettirir.",
          "Gamejam'de hazır, telifsiz ses kütüphaneleri kullanmak tamamen normaldir; beste yapmak zorunda değilsiniz.",
        ],
      },
      {
        type: "concept",
        heading: "Ses Efekti, Müzik, Ortam Sesi Farkı",
        bullets: [
          "Ses efekti (SFX): anlık eylemlere tepki verir. Zıplama, çarpışma, puan alma sesi gibi kısa ve nettir.",
          "Müzik: sahnenin genel duygusunu taşır, sürekli çalar. Tekrar tekrar dinlenince sıkmamalı.",
          "Ortam sesi: mekânı gerçek hissettirir. Rüzgâr, kalabalık uğultusu, su sesi gibi arka plan katmanıdır.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Minecraft: blok ve piksel stili, az detayla kocaman bir dünya",
          "Genshin Impact: anime tarzı karakterler, ayrıntılı dünya",
          "Among Us: minimal ve sade stil, küçük bir ekip için ideal",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Görselleri sade olduğu hâlde çok sevdiğiniz bir oyun var mı?",
          "Aklınızda kalan bir oyun sesi ya da müziği var mı? Neden aklınızda kalmış olabilir?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuz için 2D mi 3D mü, hangi stil? 3 ana renk seçin ve her birinin neden seçildiğini yazın (GDD madde 9).",
          "Oyununuzdaki 3 önemli an için birer ses tarif edin (örn. puan alma: kısa, tiz bir “ding”).",
          "Evde sevdiğiniz bir oyunu 5 dakika sesli, 5 dakika sessiz oynayın. Ne değişti? 2 cümle yazın.",
        ],
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
        bullets: ["Oyuncuya bilgi nasıl verilir?", "Menüler, HUD ve kontroller."],
      },
      {
        type: "concept",
        heading: "Oyun Menüleri",
        bullets: [
          "Ana menü, ayarlar, duraklatma: oyuncunun oyunu yönettiği yerler.",
          "Basit ve anlaşılır olmalı. Oyuncu “Oyna” düğmesini aramak zorunda kalmamalı.",
        ],
      },
      {
        type: "concept",
        heading: "Oyun İçi Arayüzler (HUD)",
        bullets: [
          "Can, puan, süre gibi bilgiler oynarken ekranda sürekli görünür.",
          "Fazla bilgi dikkat dağıtır. Oyuncunun o an karar vermek için gerçekten neye ihtiyacı var?",
          "Önemli bilgiyi oyuncunun baktığı yere yakın koyun; ekranın köşesine değil.",
        ],
      },
      {
        type: "concept",
        heading: "Bilgi Aktarma Yöntemleri",
        bullets: [
          "Renk, ikon, ses, titreşim, animasyon: hepsi bilgi taşır.",
          "Örnek: can azaldığında ekranın kenarları kırmızıya döner ve kalp atışı sesi gelir.",
          "Her eylem bir cevap almalı. Düğmeye basıp hiçbir şey olmazsa oyuncu oyunun bozuk olduğunu düşünür.",
        ],
      },
      {
        type: "concept",
        heading: "Kontroller",
        bullets: [
          "Her hareketin hangi tuşla ya da dokunuşla yapıldığı kontrol şemasıdır.",
          "Oyuncunun zaten bildiği kontrolleri kullanın: PC'de WASD ya da ok tuşları ve boşlukla zıplama, mobilde dokun ve kaydır.",
          "Az tuş, çok olasılık: Flappy Bird'ün tek dokunuşu bütün oyunu taşır.",
        ],
      },
      {
        type: "concept",
        heading: "İyi Arayüz Neye Benzer?",
        bullets: [
          "Oyuncu oyunu durdurmadan bilgiyi anlar.",
          "Arayüz oyunun görsel stiliyle uyumludur.",
          "En iyi arayüz çoğu zaman fark edilmeyendir: oyuncu arayüzü değil, oyunu düşünür.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Clash Royale: iksir (elixir) çubuğu ve kulelerin üstündeki can göstergesi",
          "Fortnite: harita, can, kalkan ve mermi göstergesi",
          "Candy Crush: kalan hamle sayısı ve bölüm hedefi",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Oynadığınız bir oyunda kafanızı karıştıran bir menü ya da ekran oldu mu?",
          "Can azaldığında oyun size bunu hangi yollarla hissettiriyor?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Evde bir oyun oynarken ekranı durdurun: ekranda hangi bilgiler var? Hangisine hiç bakmadınız?",
          "Kendi oyununuzun oyun ekranını çizin. Ekranda en fazla 3 bilgi olsun; neden bu üçünü seçtiğinizi yazın.",
          "Oyuncunun 2-3 temel hareketini ve her birinin hangi tuşla ya da dokunuşla yapıldığını yazın (GDD madde 4-5).",
        ],
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
          "Basit bir hikâye bile oyuncuya neden oynadığını hissettirir.",
          "Oyunlarda hikâye okunmaz, yaşanır: oyuncu hikâyenin içinde karar veren kişidir.",
        ],
      },
      {
        type: "concept",
        heading: "Karakter, Amaç, Problem",
        bullets: [
          "Karakter: kim? Amaç: ne istiyor? Problem: önünde hangi engel var?",
          "Bu üçü bir araya gelince basit bir hikâye oluşur.",
          "Örnek: küçük bir robot (karakter) eve dönmek istiyor (amaç), ama pili bitmek üzere (problem).",
        ],
      },
      {
        type: "concept",
        heading: "Mekân da Hikâye Anlatır",
        bullets: [
          "Hikâyeyi yazıyla anlatmak zorunda değilsiniz; dünya da anlatır.",
          "Yıkılmış bir köprü, yarım kalmış bir yemek masası, duvardaki pençe izleri: oyuncu burada ne olduğunu kendisi tahmin eder.",
          "Az yazı, çok ipucu: oyuncu kendi çıkardığı hikâyeyi daha çok sever.",
        ],
      },
      {
        type: "concept",
        heading: "Görev (Quest) Oluşturma",
        bullets: [
          "Görev, oyuncuya net bir hedef ve bu hedefe ulaşmanın bir yolunu verir.",
          "Örnek: “Kayıp anahtarı bul ve kapıyı aç.”",
          "İyi bir görev oyunun temel eylemini kullanır. Zıplama oyununda görev, bir şeyleri zıplayarak yapmayı gerektirmeli.",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncuya Hedef Verme",
        bullets: [
          "Büyük hedefler küçük adımlara bölünmeli.",
          "Her adım tamamlandığında oyuncu bir geri bildirim almalı: ses, işaret, küçük bir ödül.",
          "Oyuncu hiçbir an “şimdi ne yapmam gerekiyor?” diye kaybolmamalı.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Zelda: kurtarma hikâyesi, dünyanın her köşesinde ipuçları",
          "Minecraft: hikâye neredeyse yok, ejderhayı yenmek isteğe bağlı bir hedef",
          "Among Us: görev listesi, küçük ve net adımlar",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Hikâyesi güçlü olan bir oyun biliyor musunuz? Sizi neden etkiledi?",
          "Hiç hikâyesi olmayan ama sevdiğiniz bir oyun var mı? Hikâye eksikliğini hissettiniz mi?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuz için 3 cümle yazın: karakter kim, amacı ne, önündeki problem ne?",
          "Oyuncunun amacını tek cümleyle yazın: kazanmak ya da ilerlemek için ne yapmalı? (GDD madde 3)",
          "Oyununuz için 3 adımlı küçük bir görev tasarlayın. Her adım oyununuzun temel eylemini kullansın.",
        ],
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
        bullets: ["GDD nedir, neden gerekli?", "Tasarım Defteri'nden GDD'ye."],
      },
      {
        type: "concept",
        heading: "GDD Nedir?",
        bullets: [
          "GDD (Game Design Document), oyun fikrinin tek bir belgede toplanmış halidir.",
          "Ekibin ortak hafızasıdır; herkes aynı oyunu hayal eder.",
        ],
      },
      {
        type: "concept",
        heading: "Neden Gerekli?",
        bullets: [
          "GDD olmadan her ekip üyesi oyunu kafasında farklı hayal eder.",
          "Örnek: programcı hızlı bir koşu oyunu kodlar, sanatçı yavaş ve sakin bir dünya çizer. İkisi de iyi iş çıkarmıştır ama parçalar birbirini tutmaz.",
        ],
      },
      {
        type: "concept",
        heading: "Kısa ve Net Olmalı",
        bullets: [
          "İyi bir GDD uzun bir kompozisyon değil, birkaç kısa başlıktır.",
          "Kötü: “Oyunumuzda oyuncu bir kuş olarak gökyüzünde...” diye başlayan uzun paragraf. İyi: “Oyuncu: kuşu zıplatır.”",
          "GDD bir kere yazılıp kenara konmaz. Oyun değiştikçe o da güncellenir.",
        ],
      },
      {
        type: "concept",
        heading: "GDD'niz Zaten Yarı Yarıya Hazır",
        bullets: [
          "Haftalardır yaptığınız ödevler GDD'nin maddeleridir.",
          "İsim ve tür, oyun fikri, oyuncunun amacı, hareketler ve kontroller, döngü, kazanma ve kaybetme, oyuncu ve duygu, görsel dünya, ödüller.",
          "7. haftada bu parçaları 10 maddelik gerçek bir GDD şablonuna taşıyacak ve eksikleri tamamlayacaksınız.",
        ],
      },
      {
        type: "concept",
        heading: "Gelir Modelleri",
        bullets: [
          "Bir oyun yayınlanacaksa nasıl para kazanacağı da tasarımın bir parçasıdır.",
          "Yaygın modeller: ücretsiz + reklam, tek seferlik satın alma, oyun içi satın alma, ek içerik (DLC).",
          "Tasarımcının sorumluluğu: oyuncuyu kandıran, “parayı veren kazanır” hissi yaratan tasarımlar kısa vadede kazandırır ama oyuncunun güvenini kaybettirir.",
          "Gamejam'de zorunlu değil, ama “bu oyun gerçek olsaydı nasıl gelir kazanırdı?” sorusu tasarımı netleştirir.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Büyük stüdyolar (Ubisoft, Riot Games): yüzlerce kişilik ekipler, sürekli güncellenen kapsamlı tasarım belgeleri",
          "Minecraft: tek kişinin yaptığı küçük bir prototipten doğdu, belgesi oyunla birlikte büyüdü",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "GDD olmadan çalışan bir ekip ne tür karışıklıklar yaşar?",
          "Sizce GDD'nin en önemli maddesi hangisi? Neden?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Tasarım Defteri'nizi baştan sona okuyun. Oyununuz haftalar içinde değiştiyse eski cevapları güncelleyin.",
          "7. haftadaki 10 GDD maddesinden hangileri hâlâ boş? Bir liste çıkarın; atölyede önce onları dolduracağız.",
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
          "Teori bitti: artık kendi GDD'nizi yazıyoruz.",
          "Her başlık için neye göre yazıldığını ve tanıdık bir oyundan (Flappy Bird) doldurulmuş örneğini göreceksiniz.",
        ],
      },
      {
        type: "concept",
        heading: "Jam Temasını Fikre Çevirme",
        bullets: [
          "Gamejam'ler genelde bir tema verir (örn. “Kayıp”, “Döngü”, “Uzay”). Temayı birebir almak zorunda değilsiniz; ondan ilham alın.",
          "Basit yöntem: temayla ilgili 5 kelime yazın, sonra bu kelimelerden birini bir oyun eylemine bağlayın.",
          "Örnek: tema “Döngü” ise, gece ile gündüzün sürekli değiştiği bir hayatta kalma oyunu çıkabilir.",
          "Defterinizdeki oyun temaya uyuyorsa onu uyarlayın; uymuyorsa aynı yöntemle yeni bir fikir üretin.",
        ],
      },
      {
        type: "template",
        heading: "1. Oyun Adı ve Türü",
        guidance: "Oyununuza bir isim verin ve türünü seçin: platform, bulmaca, macera, yarış, koşu, strateji, simülasyon ya da diğer. Defterinizde: 1.2 ödevi.",
        example: "Flappy Bird — Koşu (sonsuz koşu / beceri oyunu)",
      },
      {
        type: "template",
        heading: "2. Oyun Fikri",
        guidance: "“Oyuncu ______ yapar.” Tek cümlede oyununuzu anlatın. Defterinizde: 1.2 ödevi.",
        example: "Oyuncu, borulara çarpmadan geçmek için kuşu doğru zamanda zıplatır.",
      },
      {
        type: "template",
        heading: "3. Oyuncunun Amacı",
        guidance: "Oyuncu oyunda neyi başarmaya çalışıyor? Kazanmak ya da ilerlemek için ne yapmalı? Defterinizde: 5.2 ödevi.",
        example: "Oyuncu, mümkün olduğunca çok boru aralığından geçip yüksek skor yapmaya çalışır.",
      },
      {
        type: "template",
        heading: "4. Oyuncu Ne Yapabilir?",
        guidance: "Oyuncunun 2-3 temel hareketini İSİM + NASIL ÇALIŞTIĞI şeklinde yazın (örn. “Zıplama: boşluğa basınca karakter zıplar”). Defterinizde: 5.1 ödevi.",
        example: "Zıplama: Ekrana dokununca kuş yukarı fırlar. · Düşüş: Dokunmazsanız kuş sürekli aşağı iner (yer çekimi).",
      },
      {
        type: "template",
        heading: "5. Kontroller",
        guidance: "Her hareketin hangi tuşla ya da dokunuşla yapıldığını yazın: Hareket, Zıplama/Etkileşim, Saldırı/Özel hareket. Defterinizde: 5.1 ödevi.",
        example: "Hareket: yok (kuş kendiliğinden ileri gider) · Zıplama/Etkileşim: ekrana dokunmak · Saldırı/Özel hareket: yok",
      },
      {
        type: "template",
        heading: "6. Oyun Döngüsü",
        guidance: "Oyuncunun sürekli tekrarladığı eylemleri sırayla yazın: ___ → ___ → ___ → tekrar. Defterinizde: 2.2 ödevi.",
        example: "Zıpla → Boru aralığından geç → Skor artır → Çarparsan biter → Tekrar başla",
      },
      {
        type: "template",
        heading: "7. Kazanma ve Kaybetme",
        guidance: "Oyuncu nasıl kazanır, nasıl kaybeder? Kaybedince ne olur: baştan mı başlar, can mı gider? Defterinizde: 2.2 ödevi.",
        example: "Kazanma: resmi bir bitiş yok, amaç en yüksek skoru kırmak. Kaybetme: boruya veya yere çarparsa oyun biter, skor sıfırdan başlar.",
      },
      {
        type: "template",
        heading: "8. Oyuncu ve Duygu",
        guidance: "Oyuncumuz kim (yaşı, sevdiği şey)? Neden bu oyunu oynasın? Oynarken hangi duyguları (eğlence, merak, heyecan, korku, güçlü hissetme, rekabet...) yaşasın? Defterinizde: 2.1 ödevi.",
        example: "Her yaştan, kısa aralarda tekrar tekrar oynamayı seven kişiler. Hissedilecek duygular: gerginlik, tatmin, hafif sinirlenme.",
      },
      {
        type: "template",
        heading: "9. Görsel Dünya",
        guidance: "2D mi 3D mü? Dünya ve karakterler nasıl görünüyor? Ana renkleriniz neler? İlham aldığınız oyun, film ya da çizgi film var mı? Defterinizde: 4.2 ödevi.",
        example: "2D, basit piksel sanat. Açık mavi gökyüzü, yeşil borular, sarı ve yuvarlak bir kuş karakteri.",
      },
      {
        type: "template",
        heading: "10. Ödüller ve Ek Özellikler (İsteğe Bağlı)",
        guidance: "Oyununuzda para, puan, eşya, can ya da enerji gibi bir şey var mı? Varsa nasıl kazanılıyor ve ne işe yarıyor? Defterinizde: 3.1 ödevi.",
        example: "Tek kaynak: skor. Yüksek skorlara göre oyun sonunda madalya verilir.",
      },
      {
        type: "concept",
        heading: "İleri Seviye: Gerçek Bir GDD Ne Kadar Büyür?",
        bullets: [
          "Sizin 10 maddelik şablonunuz gamejam için yeterli ve sağlam bir başlangıç.",
          "Profesyonel GDD'ler çok daha büyük olabilir. Örneğin Silent Hill 2 üzerine hazırlanmış bir GDD analizi; oyun konsepti, mekanikler, arayüz, görsel, ses ve müzik, hikâye, bölüm haritaları ve pazar analizi gibi başlıklarla 60 sayfaya kadar çıkıyor.",
          "Fikriniz büyüdükçe GDD'niz de büyüyebilir, ama her zaman net bir özetle başlayın.",
        ],
      },
      {
        type: "concept",
        heading: "Şimdi Sıra Sizde",
        bullets: [
          "Ekibinizle 10 başlığı kendi oyununuz için doldurun. Tasarım Defterlerinizdeki cevaplardan başlayın.",
          "Ekipte birden fazla fikir varsa oylayın ya da birleştirin: hangisini en kısa sürede oynanabilir hâle getirebilirsiniz?",
          "Herkes aynı GDD'yi okuyunca oyun hakkında aynı şeyi anlamalı; bu yüzden kısa ve net yazın.",
        ],
      },
      {
        type: "concept",
        heading: "Takım Lideri Sahneye Çıkıyor",
        bullets: [
          "Sıradaki 3 başlık (playtest, kapsam, sunum) genellikle Takım Lideri'nin koordine ettiği işlerdir.",
          "Zaman takibi, ekip içi iletişim ve “şimdi ne yapıyoruz?” sorusuna cevap vermek onun görevidir.",
        ],
      },
      {
        type: "concept",
        heading: "Kâğıt Prototip ve Playtest",
        bullets: [
          "GDD bitince iş bitmez. Oyununuzu kâğıt, kalem ve birkaç parçayla hemen oynanabilir hâle getirin: bir kişi “bilgisayar” olur, kuralları uygular.",
          "Evde bir aile üyenize ya da ekip dışından bir arkadaşınıza oynatın. Oyuncuyu izleyin, açıklama yapmayın: nerede duraksadı, ne zaman güldü, ne zaman sıkıldı?",
          "Gördüklerinizi şablondaki “Playtest Notları” bölümüne yazın ve küçük değişiklikler yapın. Bu döngü gamejam boyunca tekrar eder.",
        ],
      },
      {
        type: "concept",
        heading: "Kapsamı Küçültün (Scope)",
        bullets: [
          "Gamejam'de zaman çok az. Önce en basit oynanabilir hâli (tek mekanik, tek bölüm) bitirin.",
          "Fikrinizin olmazsa olmaz tek cümlesini (2. madde) koruyun, gerisini gerekirse atın.",
          "Bitmiş küçük bir oyun, yarım kalmış büyük bir oyundan her zaman daha iyidir.",
        ],
      },
      {
        type: "concept",
        heading: "Fikrinizi Sunun (Pitch)",
        bullets: [
          "Oyununuzu sınıfa 30 saniyede anlatın: oyun adı + tek cümlelik fikir + oyuncu ne hissedecek + neden eğlenceli. Metni şablondaki “30 Saniyelik Sunum” bölümüne yazın.",
          "Teknik ayrıntı değil, dinleyenin gözünde canlanan net bir resim hedefleyin.",
          "Karakter krokiniz ya da bölüm çiziminiz varsa gösterin; bir resim uzun bir açıklamadan daha çok şey anlatır.",
        ],
      },
      {
        type: "concept",
        heading: "Boş Şablonu İndirin",
        bullets: [
          "Ekibinizle doldurmak için boş GDD şablonunu Word (.docx) formatında indirin.",
          "Her ekip kendi kopyasını doldurur. Şablonun sonunda playtest notları ve sunum için iki ek bölüm var.",
        ],
        download: { label: "GDD Şablonunu İndir (.docx)", href: "GDD-Sablonu.docx" },
      },
    ],
  },
];
