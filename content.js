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
 *   "gallery"   -> ara görsel sayfası: gallery: [{ src, caption, credit }] (1-4 görsel)
 *
 * Her slaytta opsiyonel "bridge" alanı: sayfanın bir sonraki sayfaya nasıl
 * bağlandığını söyleyen kapanış satırı. Ara görsel sayfası eklenince, önceki
 * slayda görsel sayfasına, görsel sayfasına da sonraki slayda köprü yazılır.
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
  // HAFTA 1 — Bölümlü yapı (bkz. Hafta 2 açıklaması). Öğrenciler bu haftaya
  // kendi oyun fikirlerini bir metin olarak yazıp getirir; kurs boyunca bu
  // fikir haftadan haftaya biçilerek 7. haftada GDD'ye dönüşür.
  // 1.1 kavramsal araçları verir, 1.2 bu araçlarla fikir metnini işler.
  // Kaynaklar: Huizinga, Suits, Caillois, Crawford, Salen & Zimmerman,
  // Fullerton, Schell, Osborn.
  // ---------------------------------------------------------------------
  {
    id: "1.1",
    title: "Oyun Tasarımına Giriş",
    slides: [
      {
        type: "intro",
        heading: "Oyun Tasarımına Giriş",
        lead: "Bir oyun ekibindeki rolleri tanıdınız. Bu derste bir oyun tasarımcısının kullandığı temel kavramları öğreneceğiz. Bu kavramlar, getirdiğiniz oyun fikrini kurs boyunca biçmek için kullanacağımız araçlardır.",
        steps: [
          { label: "Oyun nedir?", text: "Tasarımcılar ve araştırmacılar oyunu nasıl tanımlar, oyunu oyuncak ve bulmacadan ne ayırır?" },
          { label: "Oyunun parçaları", text: "Her oyunda bulunan sekiz biçimsel öğe ve bir oyunu bu öğelerle analiz etmek." },
          { label: "Oyun nasıl tasarlanır?", text: "Fikir, prototip, test ve düzeltme döngüsü: yinelemeli tasarım." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Oyun Nedir?",
        lead: "Bir şeyi tasarlamadan önce onun ne olduğunu bilmek gerekir. Bu bölümde oyunu tanımlayan kavramları göreceğiz. Bu kavramlar, fikrinizin gerçekten bir “oyun” olup olmadığını, yoksa bir hikâye ya da oyuncak mı olduğunu anlamanızı sağlayacak.",
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
        bridge: "Bu beş kavramı sıradaki sayfada üç tanıdık oyunda arayalım.",
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
        type: "gallery",
        heading: "Tanım Üç Oyunda",
        lead: "Önceki sayfadaki beş kavram, en eski sokak oyunlarında da, kutu oyunlarında da aynı biçimde bulunur:",
        gallery: [
          { src: "assets/lesson/saklambac.jpg", caption: "Saklambaç: çatışma ebe ile saklananlar arasında; kural “sayarken bakmak yok”; sonuç, kimin yakalandığı.", credit: "Friedrich Eduard Meyerheim (muhtemelen), kamu malı. Kaynak: Wikipedia" },
          { src: "assets/lesson/satranc.jpg", caption: "Satranç: her taşın hareketi bir kural; taşlar birbirine bağlı bir sistem; sonuç, mat.", credit: "MichaelMaggs, CC BY-SA 3.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/monopoly.jpg", caption: "Monopoly: oyun parası yapaydır, gerçek hayatta bir şey kaybettirmez; sonuç, iflas eden oyuncu.", credit: "Horst Frank, CC BY-SA 3.0. Kaynak: Wikimedia Commons" },
        ],
        bridge: "Bir şeyin oyun olup olmadığını bu kavramlarla sınayabiliriz. Sıradaki sayfa, oyunun ayrıldığı sihirli çemberi anlatıyor.",
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
          { term: "Sihirli çember", en: "magic circle", def: "Huizinga'nın ortaya attığı, Salen ve Zimmerman'ın yaygınlaştırdığı kavram. Oyuna başlayan kişi, kuralların geçerli olduğu görünmez bir çemberin içine girer. Satrançta atın L çizmesi yalnızca bu çemberin içinde anlamlıdır." },
          { term: "Oyunbozan", en: "spoilsport", def: "Huizinga'ya göre oyunbozan hileciden daha tehlikelidir: hileci kuralı çiğner ama oyunda kalır; oyunbozan çemberi yok eder." },
          { term: "Oyunbaz tutum", en: "lusory attitude", def: "Suits'in kavramı: kuralları, yalnızca oyun mümkün olsun diye gönüllü olarak kabul etmek. Golfte topu deliğe elle koymak en kolay yoldur; ama sopayı kabul ederiz, çünkü oyun bu engelden doğar." },
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
            ["Oyuncak (toy)", "Etkileşim var, hedef yok.", "Top, Lego"],
            ["Bulmaca (puzzle)", "Hedef var, rakip yok.", "Sudoku, Rubik küpü"],
            ["Yarışma (competition)", "Rakip var, ama rakibe müdahale edilemez.", "100 metre koşusu, bowling"],
            ["Oyun (game)", "Rakip var ve oyuncular birbirini etkileyebilir.", "Satranç, futbol"],
          ],
        },
        bullets: [
          "Tasarımcı için anlamı: bir oyuncağa hedef ve kural eklendiğinde oyun doğar. Fikriniz yalnızca bir dünya ya da karakter anlatıyorsa, henüz bir oyuncaktır.",
        ],
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Oyunun Parçaları",
        lead: "Bir saati tamir etmek için onu parçalarına ayırmayı bilmek gerekir. Oyun için de durum aynıdır. Bu bölümdeki sekiz öğe, 1.2'de kendi fikir yazınızı okurken kullanacağınız kontrol listesidir.",
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
        type: "examples",
        heading: "Örnek Analiz: Tetris",
        image: {
          src: "assets/lesson/tetris-ilk-surum.png",
          caption: "Tetris'in ilk sürümü: Alexey Pajitnov, 1984, Sovyet Elektronika 60 bilgisayarı. Parçalar yazı karakterleriyle çiziliyordu.",
          credit: "Ekran görüntüsü: Alexey Pajitnov. Kaynak: Wikipedia (adil kullanım)",
        },
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

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Oyun Nasıl Tasarlanır?",
        lead: "İyi oyunlar ilk denemede iyi olmaz; defalarca denenip düzeltilerek olgunlaşır. Bu kursta getirdiğiniz fikir de aynı yoldan geçecek: her hafta yeni bir araçla ele alınıp biçilecek, 7. haftada bir tasarım belgesine (GDD) dönüşecek.",
      },
      {
        type: "concept",
        heading: "Yinelemeli Tasarım",
        image: {
          src: "assets/lesson/kagit-prototip.jpg",
          caption: "Jason Rohrer'in Diamond Trust of London oyunu için hazırladığı kâğıt prototip: harita, puan tablosu, nohut ve bozuk paralar. Oyun kodlanmadan önce kurallar böyle test edildi.",
          credit: "Jason Rohrer, kamu malı. Kaynak: Wikimedia Commons",
        },
        lead: "Fullerton bu yaklaşımı oyuncu merkezli tasarım (playcentric design) olarak adlandırır: oyuncu, sürecin her adımında tasarıma dahil edilir.",
        steps: [
          { label: "Fikir", text: "Bir kural ya da mekanik önerilir." },
          { label: "Prototip", text: "Fikrin en basit, oynanabilir hâli. Kâğıt ve kalemle bile olabilir." },
          { label: "Oyun testi", text: "Playtest: başkaları oynar, tasarımcı izler ve not alır." },
          { label: "Değerlendirme", text: "Ne işe yaradı, ne yaramadı? Kural değiştirilir, döngü baştan başlar." },
        ],
        terms: [
          { term: "Yineleme", en: "iteration", def: "Bu döngünün her bir turu. Fikir yazınızın her haftaki yeni hâli de bir yinelemedir; eski hâlini silmeyin." },
        ],
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Caillois'nın Dört Oyun Kategorisi",
        bridge: "Dört kategorinin gündelik hayattaki karşılıklarını sıradaki sayfada görelim.",
        lead: "Sosyolog Roger Caillois (1958), oyunları oyuncuya yaşattıkları temel deneyime göre dört gruba ayırır. Çoğu oyun birden fazla kategoriyi birleştirir.",
        table: {
          head: ["Kategori", "Deneyim", "Örnek"],
          rows: [
            ["Agon", "Rekabet, beceriyle üstün gelme", "Satranç, FIFA"],
            ["Alea", "Şans, sonucun oyuncunun elinde olmaması", "Zar, Uno'da kart çekme"],
            ["Mimicry", "Taklit, başka biri olma", "Evcilik, The Sims"],
            ["Ilinx", "Baş dönmesi, hız ve sarsılma hissi", "Salıncak, yarış oyunları"],
          ],
        },
      },
      {
        type: "gallery",
        extra: true,
        heading: "Dört Kategori, Dört Fotoğraf",
        lead: "Caillois'nın kategorileri yalnızca video oyunlarını değil, bütün oyunları kapsar. Önceki tablodaki dört deneyim, bir parkta da görülebilir:",
        gallery: [
          { src: "assets/lesson/satranc-park.jpg", caption: "Agon: Paris'te bir parkta satranç. Kazanan, daha iyi oynayandır.", credit: "Jorge Royan, CC BY-SA 3.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/zar.jpg", caption: "Alea: zar atıldığında sonuç oyuncunun elinde değildir.", credit: "PierreSelim, CC BY 3.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/evcilik.jpg", caption: "Mimicry: 1930'larda kılık değiştirip başka biri olma oyunu.", credit: "VinnieRattolle, CC BY-SA 4.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/salincak.jpg", caption: "Ilinx: salıncağın verdiği hız ve baş dönmesi.", credit: "Peachyeung316, CC BY-SA 4.0. Kaynak: Wikimedia Commons" },
        ],
        bridge: "Kendi fikrinizin hangi kategoriye girdiğini bilmek, oyuncuya ne vaat ettiğinizi gösterir. Son ek bilgi, bir oyunun hangi aşamalardan geçerek üretildiğini anlatıyor.",
      },
      {
        type: "extra",
        heading: "Bir Oyun Nasıl Üretilir?",
        lead: "Profesyonel ekiplerde tasarım döngüsü, şu üretim aşamalarının içinde döner:",
        steps: [
          { label: "Konsept", text: "Fikir, hedef kitle ve ana deneyim belirlenir." },
          { label: "Ön üretim", text: "Pre-production: prototipler yapılır, tasarım belgesi (GDD) yazılır." },
          { label: "Üretim", text: "Production: bölümler, karakterler, sesler ve kodun büyük kısmı üretilir." },
          { label: "Alfa / Beta", text: "Alfa: bütün özellikler var, hatalar çok. Beta: içerik tamam, hatalar ayıklanıyor." },
          { label: "Yayın", text: "Release: oyun oyunculara ulaşır; ardından güncellemeler gelir." },
        ],
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Oyun tasarımı", en: "game design", def: "Oyunun hedeflerini, kurallarını ve eylemlerini belirleme işi." },
          { term: "Sihirli çember", en: "magic circle", def: "Oyun kurallarının geçerli olduğu, gerçek hayattan ayrı alan." },
          { term: "Oyunbaz tutum", en: "lusory attitude", def: "Kuralları, oyun mümkün olsun diye gönüllü kabul etmek." },
          { term: "Oyuncak / oyun", en: "toy / game", def: "Hedefsiz etkileşim / hedef, kural ve çatışması olan etkileşim." },
          { term: "Biçimsel öğeler", en: "formal elements", def: "Oyuncular, hedefler, prosedürler, kurallar, kaynaklar, çatışma, sınırlar, sonuç." },
          { term: "Anlamlı oyun", en: "meaningful play", def: "Eylemin sonucunun görülebilir ve oyunun geneline etkili olması." },
          { term: "Prototip", en: "prototype", def: "Bir fikrin en basit oynanabilir hâli." },
          { term: "Yinelemeli tasarım", en: "iterative design", def: "Prototip, test ve düzeltme döngüsüyle ilerleyen tasarım." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Sevdiğiniz bir oyunu seçin ve sekiz biçimsel öğesini Tetris tablosundaki gibi yazın.",
          "Aynı oyunda verdiğiniz bir kararı yazın: sonucu ayırt edilebilir mi, oyunun geri kalanını etkiliyor mu (anlamlı oyun)?",
          "Oyun fikri yazınızı bir sonraki derse getirin. Henüz yazmadıysanız, oyununuzu 5-10 cümleyle, aklınıza geldiği gibi anlatın; 1.2'de bu yazıyı birlikte işleyeceğiz.",
        ],
      },
    ],
  },
  {
    id: "1.2",
    title: "Fikirden Tasarıma",
    slides: [
      {
        type: "intro",
        heading: "Fikirden Tasarıma",
        lead: "Bu derse bir oyun fikri yazısıyla geldiniz. Bu yazı, kursun sonuna kadar üzerinde çalışacağımız ham maddedir. Bugün onu bir tasarımcı gibi okuyacak, parçalarına ayıracak, gereksiz yerlerini kesecek ve tek cümlelik bir konsepte dönüştüreceğiz.",
        steps: [
          { label: "Fikir yazısını okumak", text: "Fikir ile tasarım arasındaki fark; fikriniz hangi kapıdan girdi?" },
          { label: "Fikri parçalara ayırmak", text: "Biçimsel öğeler, deneyim hedefi, temel fiil, hedefler." },
          { label: "Fikri biçmek", text: "Kapsam, tasarım sütunları; neyi tutacağız, neyi keseceğiz?" },
          { label: "Fikri sabitlemek", text: "Tür ve yüksek konsept: oyunu tek cümlede anlatmak." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Fikir Yazısını Okumak",
        lead: "Bir fikir yazısı genellikle bir dünya, bir karakter ve bir hikâye anlatır. Tasarım ise oyuncunun ne yaptığını anlatır. İşe, yazınızın hangisini anlattığını görerek başlıyoruz. Ders boyunca aşağıdaki örnek yazıyı birlikte işleyeceğiz.",
        quote: {
          text: "Okulda sıkılan bir öğrencinin defterine mürekkep dökülür ve mürekkep canlanıp sayfayı ele geçirmeye çalışır. Öğrenci silgisiyle defterini kurtarmalıdır. Sonunda dev bir mürekkep canavarıyla savaşılır. Oyuncu karakterini geliştirebilir, farklı silgiler alabilir ve arkadaşlarıyla oynayabilir.",
          source: "Örnek öğrenci fikir yazısı: “Leke”",
        },
      },
      {
        type: "concept",
        heading: "Fikir, Tasarım Değildir",
        lead: "Fikir yazıları çoğunlukla oyunun ne hakkında olduğunu anlatır: tema ve hikâye. Oynanış ise oyuncunun oyun sırasında fiilen ne yaptığıdır. Bir fikri oyuna çeviren, oynanış sorularının cevaplarıdır.",
        terms: [
          { term: "Tema", en: "theme", def: "Oyunun ne hakkında olduğu: dünya, karakterler, konu. “Defterdeki canlı mürekkep.”" },
          { term: "Oynanış", en: "gameplay", def: "Oyuncunun oyun sırasında yaptığı eylemler ve verdiği kararlar. “Parmakla sürterek lekeleri silmek.”" },
        ],
        table: {
          head: ["Fikir yazısının söylediği", "Tasarımın sorduğu"],
          rows: [
            ["Öğrenci defterini kurtarmalıdır.", "Oyuncu her saniye ne yapıyor? Defter ne zaman “kurtarılmış” sayılır?"],
            ["Mürekkep sayfayı ele geçirmeye çalışır.", "Mürekkep nasıl ve ne hızla yayılıyor? Oyuncu ne zaman kaybeder?"],
            ["Dev bir mürekkep canavarıyla savaşılır.", "Savaşmak hangi eylemle yapılıyor? Silmekten farklı bir oyun mu?"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Fikriniz Hangi Kapıdan Girdi?",
        bridge: "Tablodaki ilk kapının, mekaniğin, en ünlü örneğini sıradaki sayfada görelim.",
        lead: "Tasarımcılar bir oyuna genellikle dört kapıdan birinden girer. Fikriniz büyük olasılıkla bunlardan birinden doğdu; diğer üçünü tasarım sırasında tamamlamanız gerekecek.",
        table: {
          head: ["Giriş noktası", "Başlangıç sorusu", "Örnek"],
          rows: [
            ["Mekanik", "Oyuncu ne yapabilir?", "Portal: bir öğrenci projesinde (Narbacular Drop) denenen “iki nokta arasında geçit açma” mekaniğinden doğdu."],
            ["Tema / dünya", "Oyun nerede, kimin hakkında?", "Papers, Please: bir sınır kapısında pasaport kontrol eden memur olmak."],
            ["Deneyim", "Oyuncu ne hissetmeli?", "Journey: hiç konuşmadan, tanımadığı biriyle yol arkadaşlığı kurma hissi."],
            ["Kısıt", "Hangi sınırla çalışıyorum?", "Surgeon Simulator: 2013 Global Game Jam'in “kalp atışı sesi” temasından çıktı."],
          ],
        },
        bullets: [
          "“Leke” temadan girdi: canlı mürekkep ve okul defteri. Eksik olan, temanın içinde oyuncunun ne yaptığıdır.",
        ],
      },
      {
        type: "gallery",
        heading: "Mekanikten Doğan Oyun: Portal",
        lead: "Önceki tablodaki “mekanik” kapısının en ünlü örneği Portal'dır. Öğrenci projesi Narbacular Drop'taki geçit açma fikri, Valve'da bütün bir oyuna dönüştü. Mekanik aynı kaldı; dünya, karakter ve hikâye sonradan değişti.",
        gallery: [
          { src: "assets/lesson/narbacular-drop.jpg", caption: "Narbacular Drop (2005): DigiPen öğrencilerinin projesi. İki geçitten birine giren, diğerinden çıkar.", credit: "Nuclear Monkey Software. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/portal-2.jpg", caption: "Portal 2 (2011): aynı geçit mekaniği, üzerine eklenen yeni yan mekaniklerle.", credit: "Valve. Kaynak: Wikipedia (adil kullanım)" },
        ],
        bridge: "“Tema” kapısının örneği Papers, Please; sıradaki sayfada bir temanın nasıl mekaniğe dönüştüğünü görüyoruz.",
      },
      {
        type: "examples",
        heading: "Vaka: Papers, Please (Temadan Mekaniğe)",
        image: {
          src: "assets/lesson/papers-please.jpg",
          caption: "Papers, Please (2013): oyuncu, belgeleri masada yan yana koyup karşılaştırır. Arayüzün kendisi oyunun mekaniğidir.",
          credit: "Lucas Pope. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Fikirlerin çoğu gibi bu oyun da bir temadan doğdu: Lucas Pope, seyahatlerinde gördüğü pasaport memurlarının işini oyuna çevirmek istedi. Asıl tasarım işi, bu temayı bir oynanışa dönüştürmekti.",
        terms: [
          { term: "Temel fiil", def: "Karşılaştırmak: pasaport, giriş izni ve kimlik kartındaki tutarsızlığı bulmak, sonra damgalamak." },
          { term: "Çatışma", def: "Her gün yeni kurallar eklenir ve süre sınırlıdır. Doğru karar başına maaş alınır." },
          { term: "Kaynaklar", def: "Maaşla ailenin kirası, yemeği ve ısınması ödenir. Para yetmezse aile hastalanır." },
          { term: "Ders", def: "Tema, mekaniğe dönüşünce güçlenir. Belgesi eksik birini acıyıp içeri almak, ailenin parasından vazgeçmek demektir: ahlaki ikilem tamamen kurallardan doğar." },
        ],
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Fikri Parçalara Ayırmak",
        lead: "1.1'deki sekiz biçimsel öğe şimdi bir kontrol listesine dönüşüyor. Fikir yazınızı bu listeyle okuduğunuzda, hangi parçaların hazır olduğunu ve hangilerinin henüz boş olduğunu görürsünüz. Boş kalan her satır, tasarımın yapılması gereken yeridir.",
      },
      {
        type: "concept",
        heading: "Fikir Yazısını Biçimsel Öğelerle Okumak",
        table: {
          head: ["Öğe", "“Leke” yazısında", "Durum"],
          rows: [
            ["Oyuncular", "“Arkadaşlarıyla oynayabilir.” Birlikte mi, karşı karşıya mı?", "Belirsiz"],
            ["Hedefler", "“Defterini kurtarmalıdır.” Ne zaman kurtarılmış sayılır?", "Belirsiz"],
            ["Prosedürler", "“Silgisiyle.” Nasıl: dokunarak mı, sürterek mi?", "Belirsiz"],
            ["Kurallar", "Yazıda hiç kural yok.", "Boş"],
            ["Kaynaklar", "“Farklı silgiler.”", "Var"],
            ["Çatışma", "Mürekkep sayfayı ele geçirmeye çalışıyor.", "Var"],
            ["Sınırlar", "Defter sayfası.", "Var"],
            ["Sonuç", "Kazanma ve kaybetme yazılmamış.", "Boş"],
          ],
        },
        bullets: [
          "Yazıdaki en canlı şeyler (tema, çatışma, dünya) hazır; en zayıf olanlar (kural, hedef, sonuç) ise oyunu oyun yapan parçalar. Bu çok yaygın bir durumdur.",
        ],
      },
      {
        type: "concept",
        heading: "Deneyim Hedefi",
        lead: "Fullerton, tasarıma devam etmeden önce oyuncunun yaşayacağı deneyimin tek cümleyle yazılmasını önerir. Bu cümle, fikri biçerken neyin kalıp neyin gideceğine karar veren pusuladır.",
        terms: [
          { term: "Deneyim hedefi", en: "player experience goal", def: "Oyuncunun oyun sırasında ne hissedeceğini anlatan cümle. Kalıp: “Oyuncu ... hissetmeli, çünkü ...”" },
          { term: "Oyuncu fantezisi", en: "player fantasy", def: "Oyuncunun oyunda kim olduğunu hayal ettiği rol: ejderha avcısı, şehir kurucu, dedektif." },
        ],
        table: {
          head: ["Deneyim hedefi", "Bu hissi yaratan tasarım kararları"],
          rows: [
            ["Telaş", "Azalan süre, hızla yayılan tehdit, durmaya izin vermeyen tempo"],
            ["Merak", "Kapalı kapılar, yarım görünen harita, açılmamış sandıklar"],
            ["Güç", "Zayıf başlayıp güçlenen karakter, kolayca yenilen kalabalık düşmanlar"],
          ],
        },
        bullets: [
          "“Leke” için: Oyuncu telaş hissetmeli, çünkü mürekkep durmadan yayılıyor ve her an sayfayı kaplayabilir.",
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
        lead: "thatgamecompany ve Jenova Chen işe bir deneyim hedefiyle başladı: tanımadığınız biriyle gerçek bir yol arkadaşlığı kurmak. Her tasarım kararı, bu hedefe hizmet edip etmediğine göre verildi.",
        terms: [
          { term: "İsim ve sohbet yok", def: "Diğer oyuncunun kim olduğu yolculuk bitene kadar görünmez. Hakaret ve rekabet oyunun dışında kalır." },
          { term: "Tek iletişim yolu", def: "Oyuncular yalnızca bir ses/nota çıkararak iletişim kurabilir." },
          { term: "Birlikte güçlenme", def: "Birbirine yakın duran oyuncular birbirinin uçma gücünü yeniler." },
          { term: "Ders", def: "Deneyim hedefine hizmet etmeyen her özellik (sohbet, puan, rekabet) çıkarıldı. Fikri biçmek budur." },
        ],
      },
      {
        type: "concept",
        heading: "Temel Fiil ve Hedefler",
        lead: "Oyunların çoğu bir ya da iki eylem üzerine kurulur ve tasarımcılar bu eylemi bir fiille ifade eder. Fiil, oyuncunun bir hedefe ulaşmak için yaptığı şeydir.",
        terms: [
          { term: "Temel fiil", en: "core verb", def: "Oyuncunun en sık tekrarladığı eylem. Test: “Oyuncu ... yapar.” Cümle tek fiile sığmıyorsa fikir henüz dağınıktır. 2.2'de bu fiili çekirdek mekaniğe dönüştüreceğiz." },
          { term: "Kısa vadeli hedef", def: "Oyuncunun şu an yapmaya çalıştığı şey. Yoksa oyuncu ne yapacağını bilemez." },
          { term: "Uzun vadeli hedef", def: "Oyuncunun sonunda ulaşmak istediği şey. Yoksa oyuncu neden devam ettiğini bilemez." },
        ],
        table: {
          head: ["Oyun", "Temel fiil", "Kısa vadeli hedef", "Uzun vadeli hedef"],
          rows: [
            ["Flappy Bird", "Kanat çırpmak", "Bir sonraki borudan geçmek", "Kendi rekorunu kırmak"],
            ["Super Mario Bros.", "Zıplamak", "Önündeki boşluğu atlamak", "Prensesi kurtarmak"],
            ["“Leke”", "Silmek", "Önündeki lekeyi silmek", "Sayfayı 60 saniye temiz tutmak"],
          ],
        },
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Fikri Biçmek",
        lead: "Fikir yazıları neredeyse her zaman elimizdeki zamana sığmayacak kadar büyüktür. Terzi kumaşı keserek elbiseyi ortaya çıkarır; tasarımcı da fikirden keserek oyunu ortaya çıkarır. Ne kesileceğine rastgele değil, ölçütlerle karar verilir.",
      },
      {
        type: "concept",
        heading: "Kapsam",
        image: {
          src: "assets/lesson/gamejam.jpg",
          caption: "Global Game Jam 2019, Arles (Fransa). Ekipler aynı temayla 48 saatte oyun yapar; bu sürede bitirilebilecek kapsamı seçmek en önemli tasarım kararıdır.",
          credit: "Yannickvernet, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Kapsam (scope), oyunun ne kadar büyük olacağıdır: kaç bölüm, kaç mekanik, kaç karakter. Acemi tasarımcıların en sık hatası, elindeki zamana sığmayacak bir oyun planlamaktır.",
        terms: [
          { term: "Özellik şişmesi", en: "feature creep", def: "Sürekli yeni özellik eklenmesi. Sonunda hiçbir özellik tam bitmez." },
          { term: "En küçük oynanabilir sürüm", en: "minimum viable product", def: "Temel fiili gösteren, başı ve sonu olan en küçük oyun. Önce bu bitirilir, kalan zamanda üstüne eklenir." },
        ],
      },
      {
        type: "concept",
        heading: "Tasarım Sütunları",
        lead: "Tasarım sütunları (design pillars), oyunun mutlaka sahip olması gereken iki ya da üç temel niteliktir. Deneyim hedefinden türetilir. Bir özellik ancak sütunlardan birine hizmet ediyorsa oyunda kalır.",
        table: {
          head: ["“Leke” sütunu", "Anlamı"],
          rows: [
            ["Telaş", "Lekeler her saniye yayılır, oyuncu hiç durmaz."],
            ["Tek parmak", "Oyunun tamamı tek parmakla silerek oynanır."],
            ["Okul defteri", "Her şey mavi tükenmez kalemle çizilmiş gibi görünür."],
          ],
        },
      },
      {
        type: "concept",
        heading: "Örnek: “Leke” Yazısını Biçmek",
        lead: "Fikir yazısındaki her parçayı sütunlara ve kapsama göre üç kutudan birine koyuyoruz:",
        table: {
          head: ["Yazıdaki parça", "Karar", "Gerekçe"],
          rows: [
            ["Silgiyle mürekkebi silmek", "Tut", "Temel fiil; üç sütunun hepsine hizmet ediyor."],
            ["Mürekkebin sayfayı ele geçirmesi", "Tut", "Çatışma ve telaşın kaynağı."],
            ["Farklı silgiler", "Sonraya bırak", "Yan mekanik adayı; 2.2'de ölçütlerle değerlendirilecek."],
            ["Arkadaşlarla oynamak", "Dönüştür", "Çok oyunculu yapmak yerine skor paylaşmak."],
            ["Dev mürekkep canavarıyla savaş", "Çıkar", "Silmekten farklı bir oyun; kapsamı ikiye katlar."],
            ["Karakter geliştirme", "Çıkar", "Menüde gezinmek telaşı böler."],
          ],
        },
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Fikri Sabitlemek",
        lead: "Biçilmiş fikir, artık başkasına anlatılabilecek kadar nettir. Son adım, onu bir türe yerleştirmek ve ekibin, öğretmenin ya da jürinin hemen anlayacağı tek bir cümleye dönüştürmektir. Bu cümle, GDD'nin ilk iki maddesi olacak.",
      },
      {
        type: "concept",
        heading: "Oyununuzun Türü",
        bridge: "Tablodaki türlerden dördünün ekranda nasıl göründüğünü sıradaki sayfada görelim.",
        lead: "Tür (genre), oyunun temel eylemine ve yapısına göre yapılan sınıflandırmadır. Tür adı, oyuncuya ne yapacağını önceden söyler. Türünüzü temel fiilinize bakarak seçin.",
        table: {
          head: ["Tür", "Temel eylem", "Örnek"],
          rows: [
            ["Platform (platformer)", "Zıplayarak engelleri ve boşlukları aşmak", "Super Mario Bros., Celeste"],
            ["Bulmaca (puzzle)", "Mantık ve örüntü çözmek", "Tetris, Candy Crush"],
            ["Aksiyon-macera", "Keşfetmek ve dövüşmek", "The Legend of Zelda"],
            ["Strateji", "Kaynak yönetip plan kurmak", "Clash Royale"],
            ["Refleks / arcade", "Hızlı ve doğru zamanlanmış tepki", "Flappy Bird, Fruit Ninja"],
            ["Sonsuz koşu (endless runner)", "Hızlanan engellerden kaçmak", "Subway Surfers"],
            ["Kum havuzu (sandbox)", "Serbestçe inşa etmek ve keşfetmek", "Minecraft, Roblox"],
          ],
        },
      },
      {
        type: "gallery",
        heading: "Türler Ekranda",
        lead: "Tür adı oyuncuya ne yapacağını söyler; ekran görüntüsü de. Önceki tablodaki dört türün temel eylemi, ekrana bakınca okunur:",
        gallery: [
          { src: "assets/lesson/celeste.png", caption: "Platform: Celeste. Boşluklar ve çıkıntılar, zıplamayı çağırır.", credit: "Maddy Makes Games, CC BY-SA 4.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/tetris-ilk-surum.png", caption: "Bulmaca: Tetris. Düşen parça ve boşluk, örüntü kurmayı çağırır.", credit: "Ekran görüntüsü: Alexey Pajitnov. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/botw.jpg", caption: "Aksiyon-macera: Zelda. Uzanan arazi keşfi çağırır.", credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/minecraft-crafting.png", caption: "Kum havuzu: Minecraft. Üretim ekranı inşa etmeyi çağırır.", credit: "Xbox México, CC BY 3.0. Kaynak: Wikimedia Commons" },
        ],
        bridge: "Türünüzü seçtikten sonra fikrinizi tek cümleye sığdırma sırası geliyor: yüksek konsept.",
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
        ],
        quote: {
          text: "Flappy Bird, tek dokunuşla oynanan bir refleks oyunudur; oyuncu kuşu zıplatarak boruların arasından geçmeye çalışır. Farkı: tek bir çarpma her şeyi bitirir.",
          source: "Örnek yüksek konsept + kanca",
        },
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Önceki ve Sonraki Hâli",
        table: {
          head: ["", "Fikir yazısı", "Biçilmiş tasarım"],
          rows: [
            ["Anlattığı", "Bir hikâye: öğrenci, canlı mürekkep, canavar", "Bir oynanış: lekeleri yayılmadan silmek"],
            ["Deneyim", "Yazılmamış", "Telaş"],
            ["Temel fiil", "Belirsiz (silmek? savaşmak? geliştirmek?)", "Silmek"],
            ["Hedef ve sonuç", "“Defteri kurtarmak”", "Sayfayı 60 saniye temiz tut; %50'si kaplanırsa kaybedersin"],
            ["Kapsam", "Bölümler, boss savaşı, geliştirme, çok oyunculu", "Tek sayfa, tek leke türü, skor paylaşma"],
          ],
        },
        quote: {
          text: "Leke, tek parmakla oynanan bir refleks oyunudur; oyuncu defter sayfasına yayılan mürekkep lekelerini silerek sayfayı temiz tutmaya çalışır. Farkı: sildiğiniz her leke silginizi küçültür.",
          source: "“Leke”nin yüksek konsepti",
        },
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Fikri Güçlendirmek: Teknikler",
        image: {
          src: "assets/lesson/necrodancer.png",
          caption: "Crypt of the NecroDancer (2015): zindan keşfi (roguelike) ile ritim oyununun birleşimi. Karakter yalnızca müziğin vuruşunda hareket edebilir.",
          credit: "Brace Yourself Games. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Biçtikten sonra fikriniz sıradan kaldıysa, bir kanca bulmak için şu teknikleri kullanabilirsiniz:",
        terms: [
          { term: "Fiil değiştirme", def: "Bilinen bir oyunun temel fiilini değiştirin: “Mario zıplayamasa, sadece yer değiştirebilse?”" },
          { term: "Tür harmanlama", en: "genre mashup", def: "İki türü birleştirin: roguelike + ritim = Crypt of the NecroDancer." },
          { term: "Kısıt ekleme", en: "constraint", def: "Tek tuş, 10 saniye, hiç yazı yok. Kısıtlar yaratıcılığı yönlendirir." },
        ],
      },
      {
        type: "extra",
        heading: "Beyin Fırtınası",
        lead: "Ekipte fikir üretirken Alex Osborn'un (1953) beyin fırtınası (brainstorming) kuralları kullanılır. Amaç, değerlendirmeyi ertelemek ve önce çok sayıda fikir üretmektir.",
        steps: [
          { label: "Eleştiri yok", text: "Fikir üretme aşamasında hiçbir fikir yargılanmaz." },
          { label: "Nicelik", text: "Ne kadar çok fikir, o kadar iyi. İlk akla gelen fikir, herkesin aklına gelen fikirdir." },
          { label: "Uçuk fikirler", text: "Saçma görünen fikirler teşvik edilir." },
          { label: "Birleştirme", text: "Başkalarının fikirleri geliştirilir ve birleştirilir." },
        ],
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Tema / oynanış", en: "theme / gameplay", def: "Oyunun ne hakkında olduğu / oyuncunun fiilen ne yaptığı." },
          { term: "Deneyim hedefi", en: "player experience goal", def: "Oyuncunun ne hissedeceğini anlatan tek cümle." },
          { term: "Temel fiil", en: "core verb", def: "Oyuncunun en sık yaptığı eylem." },
          { term: "Kısa / uzun vadeli hedef", def: "Şu an yapılan / sonunda ulaşılmak istenen." },
          { term: "Kapsam", en: "scope", def: "Oyunun büyüklüğü: bölüm, mekanik, karakter sayısı." },
          { term: "Özellik şişmesi", en: "feature creep", def: "Kontrolsüz özellik eklenmesi." },
          { term: "Tasarım sütunları", en: "design pillars", def: "Her kararın test edildiği 2-3 temel nitelik." },
          { term: "Yüksek konsept / kanca", en: "high concept / hook", def: "Oyunun tek cümlelik özeti / onu farklı kılan özellik." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Fikir yazınızı “Leke” tablosundaki gibi sekiz biçimsel öğeyle okuyun; her öğeyi “var”, “belirsiz” ya da “boş” olarak işaretleyin ve boş olanları doldurun.",
          "Deneyim hedefinizi, temel fiilinizi, kısa ve uzun vadeli hedefinizi yazın.",
          "2-3 tasarım sütunu belirleyin. Fikir yazınızdaki her parçayı “tut / sonraya bırak / dönüştür / çıkar” diye işaretleyin ve gerekçesini yazın.",
          "Oyununuza bir isim ve tür verin (GDD madde 1). Yüksek konsept cümlenizi kancasıyla birlikte yazın (GDD madde 2).",
          "Fikir yazınızın yeni hâlini Tasarım Defteri'ne yazın. Eski hâlini silmeyin: her hafta yeni bir yineleme ekleyeceğiz.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------
  // HAFTA 2 — Bölümlü yapı: her ders "intro" (ders haritası) ile açılır,
  // "section" slaytları bölümleri ayırır ve bağlamı verir; "extra" slaytları
  // ana konu olmayan ek bilgidir ve dersin sonunda yer alır.
  // Kaynaklar: Piaget, Norman (1988), Bartle (1996), Yee / Quantic Foundry,
  // Ryan, Rigby & Przybylski (2006), Cooper (1999), Salen & Zimmerman (2004),
  // Sicart (2008), Fullerton, Adams & Dormans (2012), Hunicke, LeBlanc &
  // Zubek (2004), Juul (2002).
  // ---------------------------------------------------------------------
  {
    id: "2.1",
    title: "Oyuncu ve Hedef Kitle",
    slides: [
      {
        type: "intro",
        heading: "Oyuncu ve Hedef Kitle",
        lead: "1. haftada oyun fikrinizi biçip yüksek konseptini yazdınız. Bu derste o oyunun kimin için olduğuna ve nerede oynanacağına karar vereceğiz. Bu iki karar, sonraki haftalarda kontrolleri, bölümleri, zorluğu ve görselleri belirleyecek.",
        steps: [
          { label: "Oyuncuyu anlamak", text: "Neden oyuncuyla başlıyoruz? Hedef kitle neyle tanımlanır?" },
          { label: "Hedef kitleyi seçmek", text: "Fikir, yaş aralığı, oyun deneyimi ve motivasyona göre dört adımda karar." },
          { label: "Platformu seçmek", text: "Bu oyuncu nerede oynar, temel fiil hangi kontrolle en doğal yapılır?" },
          { label: "Kararları birleştirmek", text: "Bütün kararları tek bir kişi tarifinde toplamak: persona." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Oyuncuyu Anlamak",
        lead: "Tasarımcı kuralları yazar ama oyunu oyuncu yaşar. Aynı kural, bir oyuncuya heyecan, bir başkasına sıkıntı verebilir. Bu yüzden kural yazmadan önce kimin için yazdığımızı bilmemiz gerekir.",
      },
      {
        type: "concept",
        heading: "Siz Oyuncunuz Değilsiniz",
        lead: "Tasarımcının en büyük yanılgısı, oyuncunun da kendisi gibi düşündüğünü varsaymaktır. Oyunu yapan kişi kuralları, gizli yolları ve düşmanların davranışını zaten bilir; ilk kez oynayan kişi bunların hiçbirini bilmez.",
        terms: [
          { term: "Bilgi laneti", en: "curse of knowledge", def: "Bir şeyi bilen kişinin, onu bilmeyen birinin yerine kendini koyamaması. Tasarımcıya “çok kolay” gelen bölüm, yeni oyuncuyu duvara toslatır." },
          { term: "Hedef kitle", en: "target audience", def: "Oyunun özellikle kimin için tasarlandığı. “Herkes” bir hedef kitle değildir; herkes için tasarlanan oyun genellikle kimseye tam oturmaz." },
        ],
        bullets: [
          "Bu yüzden oyun testi (playtest) zorunludur: oyuncuyu tahmin etmek yerine izlersiniz.",
        ],
      },
      {
        type: "concept",
        heading: "Hedef Kitle Neyle Tanımlanır?",
        lead: "Hedef kitle üç tür bilgiyle tanımlanır. Oyun tasarımında ikinci ve üçüncüsü çoğu zaman birincisinden daha önemlidir: aynı yaştaki iki oyuncu tamamen farklı şeyler isteyebilir.",
        table: {
          head: ["Bilgi türü", "Ne söyler?", "Örnek"],
          rows: [
            ["Demografik", "Kim olduğu: yaş, ülke, cihaz", "14-16 yaş, akıllı telefon kullanan lise öğrencisi"],
            ["Psikografik", "Ne istediği: ilgi alanı, motivasyon, alışkanlık", "Arkadaşlarıyla rekabet etmeyi seven, kısa maç oynayan"],
            ["Oyun deneyimi", "Ne kadar oyun bildiği", "Gündelik oyuncu (casual) ya da deneyimli oyuncu (core)"],
          ],
        },
        bullets: [
          "Bir sonraki bölümde bu üç bilginin her birine nasıl karar verileceğini adım adım göreceğiz.",
        ],
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Hedef Kitleyi Seçmek",
        lead: "Hedef kitle rastgele seçilmez, sırayla sorulan dört soruyla daraltılır. Her adım bir öncekinin cevabını kullanır.",
      },
      {
        type: "concept",
        heading: "Adım 1: Fikirden Başlamak",
        lead: "Hedef kitle, fikrin içinde zaten saklıdır. 1. haftada yazdığınız deneyim hedefi, temel fiil ve tema, oyunun kime doğal olarak hitap ettiğini gösterir.",
        table: {
          head: ["Fikirdeki ipucu", "Ne söyler?", "Örnek"],
          rows: [
            ["Deneyim hedefi", "Bu duyguyu kim arıyor?", "“Telaş” → hızlı, kısa oyun seven oyuncu"],
            ["Temel fiil", "Bu eylemi kim rahatça yapabilir?", "“Hassas zıplamak” → refleksi gelişmiş, deneyimli oyuncu"],
            ["Tema", "Bu dünya kimin ilgisini çeker?", "“Okul defteri” → okul çağındaki oyuncu"],
          ],
        },
        terms: [
          { term: "Test edilebilirlik", def: "Gamejam'de en önemli pratik ölçüt: oyunu bitirdiğinizde ona deneteceğiniz insanlar kim? Kendi yaş grubunuz en güvenli seçimdir, çünkü onları tanırsınız ve hemen test edebilirsiniz." },
        ],
      },
      {
        type: "concept",
        heading: "Adım 2: Yaş Aralığı Neye Göre Seçilir?",
        lead: "Yaş aralığı, oyuncunun düşünme biçimine göre seçilir. Psikolog Jean Piaget'nin bilişsel gelişim evreleri, hangi yaşta hangi tür kuralın anlaşılabileceğine dair temel bir çerçeve verir.",
        table: {
          head: ["Yaş (Piaget evresi)", "Düşünme biçimi", "Tasarım sonucu"],
          rows: [
            ["3-6 (işlem öncesi)", "Sembollerle düşünür, okuma yok ya da çok az, ince motor beceri gelişiyor", "Tek eylem, sesli ve görsel yönlendirme, büyük dokunma alanları, kaybetme cezası yok"],
            ["7-11 (somut işlemler)", "Kuralları mantıkla takip eder ama somut olanı anlar; okuma gelişiyor", "Açık ve görünür kurallar, kısa metin, görünür ilerleme (yıldız, rozet), toplama"],
            ["12+ (soyut işlemler)", "Soyut düşünür, ihtimalleri tartar, plan kurar", "Çok katmanlı sistemler, strateji, rekabet, sosyal statü, karmaşık hikâye"],
          ],
        },
        bullets: [
          "Yaş büyüdükçe oyun “daha zor” olmak zorunda değildir; değişen, oyuncunun kaldırabildiği kural sayısı ve soyutluk düzeyidir.",
        ],
      },
      {
        type: "concept",
        heading: "Adım 3: Oyun Deneyimi",
        lead: "Aynı yaştaki iki oyuncudan biri her gün oynuyor, diğeri yılda birkaç kez oynuyor olabilir. Deneyimli oyuncu, oyunların ortak dilini zaten bilir.",
        terms: [
          { term: "Oyun okuryazarlığı", en: "game literacy", def: "Oyun alışkanlıklarını tanımak: kırmızı bar can demektir, parlayan nesne alınabilir, WASD ile yürünür. Deneyimli oyuncuya bunları öğretmek gerekmez." },
          { term: "Öğrenme eğrisi", en: "learning curve", def: "Oyuncunun oyunu ne kadar sürede öğrendiği. Gündelik oyuncu için eğri yumuşak olmalıdır." },
        ],
        table: {
          head: ["", "Gündelik oyuncu (casual)", "Deneyimli oyuncu (core)"],
          rows: [
            ["Öğrenme süresi", "Saniyeler içinde oynayabilmeli", "Uzun öğretici bölümleri kabul eder"],
            ["Kontroller", "Bir-iki dokunuş ya da tuş", "Çok tuşlu, kombinasyonlu kontroller"],
            ["Kaybetme", "Hafif bedel, hemen yeniden deneme", "Ağır bedeli zorluğun parçası sayar"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Adım 4: Motivasyon ve Bartle Tipleri",
        image: {
          src: "assets/lesson/bartle.jpg",
          caption: "Richard Bartle, ilk çok oyunculu çevrim içi oyunlardan MUD1'in (1978) ortak yaratıcısı.",
          credit: "J. G. Bartle, CC BY-SA 3.0. Kaynak: Wikimedia Commons",
        },
        lead: "Son soru, oyuncunun oyundan ne istediğidir. Bu konudaki ilk ünlü model Richard Bartle'ın (1996) dört oyuncu tipidir. İki eksene dayanır: oyuncu dünyayla mı yoksa oyuncularla mı ilgileniyor; onları etkilemek (acting on) mi, onlarla etkileşmek (interacting with) mi istiyor?",
        table: {
          head: ["", "Etkilemek", "Etkileşmek"],
          rows: [
            ["Dünya", "Başarıcı: puan, seviye, eşya toplar", "Kâşif: haritayı ve sırları keşfeder"],
            ["Oyuncular", "Rakip: diğer oyunculara üstün gelir", "Sosyal: diğer oyuncularla ilişki kurar"],
          ],
        },
        bullets: [
          "Sınırı: model çok oyunculu sanal dünyalar (MUD) için gözlemle yazıldı, istatistiksel değildir. Gerçek oyuncular tek bir tipe sığmaz.",
        ],
      },
      {
        type: "concept",
        heading: "Adım 4: Quantic Foundry Motivasyon Modeli",
        lead: "Nick Yee ve Quantic Foundry, yüz binlerce oyuncudan toplanan anket verisiyle 12 oyun motivasyonu belirledi. Bartle'dan farkı, veriye dayanması ve tek oyunculu oyunlar dahil her türe uygulanabilmesidir. Hedef kitleniz için en güçlü bir-iki motivasyonu seçin.",
        table: {
          head: ["Grup", "Motivasyonlar", "Oyuncu ne arar?"],
          rows: [
            ["Aksiyon", "Yıkım, heyecan", "Patlamalar, hızlı tempo, sürpriz"],
            ["Sosyal", "Rekabet, topluluk", "Başkalarını yenmek; takımda olmak"],
            ["Ustalık", "Meydan okuma, strateji", "Zor rakipler; plan kurup kazanmak"],
            ["Başarı", "Tamamlama, güç", "Her şeyi toplamak; güçlenmek"],
            ["Sürükleyicilik", "Fantezi, hikâye", "Başka biri olmak; iyi bir hikâye"],
            ["Yaratıcılık", "Tasarım, keşif", "Kendi şeyini kurmak; kurcalamak"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Motivasyonun Altındaki İhtiyaçlar",
        lead: "Motivasyon modelleri oyuncunun ne istediğini söyler; psikolojideki Öz-Belirleme Kuramı ise neden istediğini açıklar. Ryan, Rigby ve Przybylski (2006), oyunların üç temel psikolojik ihtiyacı karşıladığı ölçüde oyuncuyu bağladığını gösterdi.",
        terms: [
          { term: "Yetkinlik", en: "competence", def: "Becerikli ve gelişen biri olma hissi. Oyunda: net geri bildirim, ustalaştıkça zorlaşan bölümler." },
          { term: "Özerklik", en: "autonomy", def: "Kendi seçimini yapma hissi. Oyunda: farklı yollar, oynanış tarzı seçenekleri." },
          { term: "İlişkisellik", en: "relatedness", def: "Başkalarıyla bağlı olma hissi. Oyunda: takım arkadaşları, topluluk, oyuncuyu önemseyen karakterler." },
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke” İçin Hedef Kitle Kararı",
        lead: "1. haftadaki örnek oyunumuz “Leke”ye dört adımı uygulayalım:",
        steps: [
          { label: "Fikir", text: "Deneyim hedefi “telaş”, tema “okul defteri”: hızlı oyun seven, okul çağındaki oyuncu. Kendi yaşıtlarımız, yani test edebileceğimiz kişiler." },
          { label: "Yaş aralığı", text: "13-16. Puan ve rekor yarıştırmayı anlar, basit ama hızlı kararlar verebilir." },
          { label: "Oyun deneyimi", text: "Gündelik oyuncu: oyun saniyeler içinde öğrenilmeli, tek parmakla oynanmalı." },
          { label: "Motivasyon", text: "Rekabet ve meydan okuma (Quantic Foundry); ihtiyaç: yetkinlik (her turda daha uzun dayanmak)." },
        ],
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Platformu Seçmek",
        lead: "Hedef kitle belli olunca platform sorusu gelir. Platform, oyunun oynandığı cihazdır; kontrolleri, ekran boyutunu ve oturum süresini belirlediği için tasarımın parçasıdır, sonradan verilen teknik bir karar değildir.",
      },
      {
        type: "concept",
        heading: "Platformlar ve Kısıtları",
        bridge: "Tablodaki dört platformun oyuncunun elinde nasıl durduğunu bir sonraki sayfada görelim.",
        lead: "Her platform, oyuncunun eline farklı bir kontrol aracı verir ve farklı bir oynama ortamı yaratır.",
        table: {
          head: ["Platform", "Girdi (input)", "Tipik oturum", "Ortam", "Tasarıma etkisi"],
          rows: [
            ["Mobil", "Dokunmatik ekran", "1-5 dakika", "Yolda, kalabalıkta, sessiz", "Az ve büyük düğme, tek elle oynanış, sese bağımlı olmamak"],
            ["PC", "Klavye ve fare", "30 dakika ve üzeri", "Masa başı", "Hassas nişan, çok tuş, ayrıntılı arayüz"],
            ["Konsol", "Kumanda", "30 dakika ve üzeri", "Salonda, televizyon karşısında", "Sınırlı tuş, uzaktan okunacak büyük yazı, yan yana çok oyunculu"],
            ["Tarayıcı", "Fare, klavye ya da dokunma", "Birkaç dakika", "Her yerde, kurulum yok", "Linkle hemen başlayan oyun; gamejam'lerde yaygın"],
          ],
        },
      },
      {
        type: "gallery",
        heading: "Platformlar Oyuncunun Elinde",
        lead: "Önceki tablodaki “girdi” ve “ortam” sütunları fotoğraflarda somutlaşıyor: telefonda başparmaklar ekranın üstünde, kumandada parmaklar fiziksel tuşlarda, PC'de bir el klavyede, bir el farede.",
        gallery: [
          { src: "assets/lesson/mobil-oyun.jpg", caption: "Mobil: iki başparmak ekranın üstünde; parmak, oyunun bir kısmını kapatır.", credit: "Biswarup Ganguly, CC BY 3.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/switch.jpg", caption: "Konsol: Nintendo Switch'in kumandası ve televizyona bağlanan yuvası. Az sayıda, hissedilen tuş.", credit: "Evan-Amos, kamu malı. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/pc-oyun.jpg", caption: "PC: klavye, fare ve kumanda bir arada. En çok tuş, en hassas nişan.", credit: "Jean-Marc Trappler, CC BY-SA 4.0. Kaynak: Wikimedia Commons" },
        ],
        bridge: "Elin cihazda nasıl durduğu, hangi fiilin o cihazda doğal hissettireceğini belirler. Sıradaki sayfa bu eşleşmeyi anlatıyor.",
      },
      {
        type: "concept",
        heading: "Temel Fiil ile Girdi Uyumu",
        lead: "Tasarımcı Don Norman (The Design of Everyday Things, 1988), kontrol ile sonucu arasındaki ilişkinin sezgisel olmasına doğal eşleme (natural mapping) der. Oyunda bu, temel fiilin kontrolle doğal biçimde eşleşmesidir. Fiil girdiyle uyuşmuyorsa, oyuncu oyunla değil kontrollerle savaşır.",
        table: {
          head: ["Temel fiil", "Doğal girdi", "Neden?"],
          rows: [
            ["Silmek, çizmek, kaydırmak", "Dokunmatik ekran", "Parmak hareketi, eylemin kendisidir"],
            ["Nişan almak", "Fare", "Ekranda istenen noktaya hızlı ve hassas gidilir"],
            ["Koşmak, hassas zıplamak", "Kumanda, klavye", "Fiziksel tuş, basıldığını hissettirir; parmak ekranı kapatmaz"],
            ["Zamanlamak (tek dokunuş)", "Her platform", "Tek girdi her cihazda aynı çalışır"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Platform Seçim Ölçütleri",
        lead: "Platformu seçerken bu beş soruyu sırayla sorun. Gamejam'de son iki soru çoğu zaman belirleyicidir.",
        table: {
          head: ["Ölçüt", "Soru"],
          rows: [
            ["Hedef kitle", "Oyuncumun elinde hangi cihaz var?"],
            ["Oynanış bağlamı", "Nerede ve ne kadar süre oynayacak?"],
            ["Fiil-girdi uyumu", "Temel fiil hangi kontrolle en doğal yapılır?"],
            ["Ekip ve araç", "Kullandığımız oyun motoru ya da araç bu platforma oyun çıkarabiliyor mu? Bu cihazda test edebiliyor muyuz?"],
            ["Erişim", "Jüri ve oyuncular oyunu nasıl açacak? Tarayıcıda açılan bir link, indirme gerektiren dosyadan çok daha kolaydır."],
          ],
        },
      },
      {
        type: "concept",
        heading: "Örnek: “Leke” İçin Platform Kararı",
        steps: [
          { label: "Hedef kitle", text: "13-16 yaş: neredeyse hepsinin telefonu var." },
          { label: "Bağlam", text: "Servis, teneffüs: 1-3 dakikalık turlar, sessiz ortam." },
          { label: "Fiil-girdi", text: "“Silmek” parmakla sürterek yapılır: dokunmatik ekran." },
          { label: "Ekip ve araç", text: "Kullandığımız araç tarayıcıya oyun çıkarabiliyor; telefonda tarayıcıdan test edebiliyoruz." },
          { label: "Karar", text: "Mobil tarayıcı. Dikey ekran, tek parmak, ses olmadan da oynanabilir." },
        ],
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Kararları Birleştirmek",
        lead: "Şimdiye kadar verdiğimiz kararlar (fikir, yaş, deneyim, motivasyon, platform) ayrı ayrı listelendiğinde akılda kalmaz. Persona yöntemi bunları tek bir kişi tarifinde birleştirir; ekip bundan sonraki her kararı bu kişiye göre test eder.",
      },
      {
        type: "concept",
        heading: "Persona",
        lead: "Persona, hedef kitleyi temsil eden kurgusal ama gerçekçi bir kişi tarifidir. Yazılım tasarımcısı Alan Cooper (1999) tarafından yaygınlaştırıldı. Ekip “oyuncu bunu sever mi?” yerine “Elif bunu sever mi?” diye sorar; tartışma somutlaşır. Tablodaki her satır, bu dersteki bir karardan gelir.",
        table: {
          head: ["Alan", "Kaynağı", "“Leke” için Elif"],
          rows: [
            ["Kim?", "Yaş aralığı", "14 yaşında, 9. sınıf öğrencisi."],
            ["Ne kadar oyun oynar?", "Oyun deneyimi", "Gündelik oyuncu; uzun öğretici ekranları atlar."],
            ["Ne ister?", "Motivasyon", "Arkadaşlarıyla skor yarıştırmak, her seferinde daha iyi olmak."],
            ["Nerede, ne kadar?", "Platform ve bağlam", "Telefonda, serviste, bir seferde 3-5 dakika, sessiz."],
            ["Tasarıma etkisi", "Hepsi", "60 saniyelik turlar, tek dokunuşla yeniden başlama, skor paylaşma."],
          ],
        },
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Erişilebilirlik",
        image: {
          src: "assets/lesson/celeste.png",
          caption: "Celeste (2018): zor bir platform oyunu. Yardım Modu ile oyuncu oyunu yavaşlatabilir ya da yenilmezlik açabilir; varsayılan zorluk değişmez.",
          credit: "Maddy Makes Games, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Erişilebilirlik (accessibility), engeli olan oyuncuların da oyunu oynayabilmesi için alınan kararlardır. Hedef kitleyi büyütür.",
        table: {
          head: ["Durum", "Tasarım çözümü"],
          rows: [
            ["Renk körlüğü (yaklaşık her 12 erkekten biri)", "Bilgiyi yalnızca renkle değil, şekil ve simgeyle de vermek"],
            ["İşitme kaybı", "Altyazı, sesli uyarıların görsel karşılığı"],
            ["Motor güçlük", "Tuşları yeniden atama, basılı tutma yerine dokunma"],
          ],
        },
      },
      {
        type: "extra",
        heading: "Yaş Derecelendirmesi (PEGI)",
        lead: "Avrupa'da oyunlar PEGI sistemiyle derecelendirilir. Mağaza sayfalarındaki yaş etiketi, oyunun içeriğine göre verilir; seçtiğiniz yaş aralığı, oyununuzun içerebileceği şiddet ve temaları da sınırlar.",
        table: {
          head: ["Etiket", "Anlamı"],
          rows: [
            ["PEGI 3 / 7", "Her yaşa uygun / hafif korkutucu sahneler, gerçekçi olmayan hafif şiddet"],
            ["PEGI 12", "Fantastik karakterlere yönelik şiddet, hafif küfür"],
            ["PEGI 16 / 18", "Gerçekçi şiddet, yetişkin temaları / ağır şiddet ve yetişkin içerik"],
          ],
        },
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Hedef kitle", en: "target audience", def: "Oyunun özellikle kimin için tasarlandığı." },
          { term: "Bilgi laneti", en: "curse of knowledge", def: "Bilen kişinin bilmeyenin yerine kendini koyamaması." },
          { term: "Bilişsel gelişim evreleri", def: "Piaget: işlem öncesi, somut işlemler, soyut işlemler." },
          { term: "Oyun okuryazarlığı", en: "game literacy", def: "Oyunların ortak alışkanlıklarını tanımak." },
          { term: "Bartle tipleri", def: "Başarıcı, kâşif, rakip, sosyal." },
          { term: "Öz-Belirleme Kuramı", en: "self-determination theory", def: "Yetkinlik, özerklik, ilişkisellik ihtiyaçları." },
          { term: "Doğal eşleme", en: "natural mapping", def: "Kontrol ile sonucu arasındaki sezgisel ilişki." },
          { term: "Persona", def: "Hedef kitleyi temsil eden kurgusal ama gerçekçi kişi tarifi." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuz için “Hedef Kitleyi Seçmek” bölümündeki dört adımı “Leke” örneğindeki gibi yazın: fikir, yaş aralığı (Piaget tablosuna göre gerekçesiyle), oyun deneyimi, motivasyon.",
          "Platformunuzu beş ölçüte göre seçin ve temel fiilinizin girdiyle nasıl eşleştiğini bir cümleyle açıklayın.",
          "Bu kararları persona tablosunda birleştirin; personanıza bir isim verin ve oyun sırasında yaşaması gereken 2-3 duyguyu ekleyin (GDD madde 8).",
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
        heading: "Kurallar ve Mekanikler",
        lead: "2.1'de oyunu kimin oynayacağına ve nerede oynanacağına karar verdiniz. Bu derste oyuncunun ne yapacağına karar veriyoruz: hangi kurallar geçerli, oyuncu hangi eylemleri yapabilir, nasıl kazanır, nasıl kaybeder ve bütün bunlar oyuncuda hangi deneyimi yaratır.",
        steps: [
          { label: "Kurallar", text: "Kural nedir, hangi katmanları vardır, iyi kural nasıl yazılır?" },
          { label: "Mekanikler", text: "Çekirdek mekanik ve yan mekanik; yan mekanik neye göre seçilir?" },
          { label: "Kazanmak ve kaybetmek", text: "Kazanma koşulu türleri ve kaybetmenin bedeli." },
          { label: "Mekanikten deneyime", text: "Kurallar oyuncuda nasıl bir duyguya dönüşür? MDA ve döngüler." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Kurallar",
        lead: "Kurallar oyunun sınırlarını çizer: neyin mümkün, neyin yasak olduğunu ve ne olursa ne olacağını söyler. Mekanikler bu sınırların içinde çalışır; bu yüzden önce kuralları anlamamız gerekir.",
      },
      {
        type: "concept",
        heading: "Kuralın Üç Katmanı",
        image: {
          src: "assets/lesson/saklambac.jpg",
          caption: "Saklambaç (Meyerheim, 19. yüzyıl). Yazılı kural kitabı olmayan bir oyunda bile üç katman da vardır.",
          credit: "Friedrich Eduard Meyerheim (muhtemelen), kamu malı. Kaynak: Wikipedia",
        },
        lead: "Salen ve Zimmerman (Rules of Play, 2004), bir oyunun kurallarını üç katmanda inceler:",
        terms: [
          { term: "İşlemsel kurallar", en: "operational rules", def: "Oyuncunun okuyup uyguladığı kurallar: “Ebe 10'a kadar sayar, sonra arar.”" },
          { term: "Kurucu kurallar", en: "constitutive rules", def: "Oyunun altında yatan mantık: kim bulunduğunda ne değişir, oyun hangi durumda biter. Bilgisayar oyununda bunlar koddur." },
          { term: "Örtük kurallar", en: "implicit rules", def: "Yazılmayan ama herkesin uyduğu kurallar: ebe gözlerini aralamaz, kimse eve gidip saklanmaz." },
        ],
      },
      {
        type: "concept",
        heading: "İyi Kural Nasıl Yazılır?",
        lead: "Belirsiz bir kural, oyuncular arasında tartışmaya ya da oyuncuyla oyun arasında “bu haksızlık” hissine yol açar. İyi bir kural dört ölçütü karşılar:",
        table: {
          head: ["Ölçüt", "Zayıf kural", "Güçlü kural"],
          rows: [
            ["Net", "Oyuncu hızlı olmalı.", "Oyuncunun her lekeyi silmek için 3 saniyesi var."],
            ["Ölçülebilir", "Çok leke birikirse kaybedersin.", "Sayfanın %50'si lekeyle kaplanırsa kaybedersin."],
            ["Tutarlı", "Bazen lekeler hızlanır.", "Her 15 saniyede lekelerin yayılma hızı iki katına çıkar."],
            ["Gerekli", "Lekeler farklı renklerde olabilir.", "(Oyuna bir şey katmıyorsa kural çıkarılır.)"],
          ],
        },
        bullets: [
          "Kural testi: kuralı yalnızca yazılı olarak okuyan biri, soru sormadan doğru oynayabiliyor mu?",
        ],
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Mekanikler",
        lead: "Kural neyin mümkün olduğunu söyler; mekanik ise oyuncunun bu kurallar içinde fiilen ne yaptığıdır. Bir oyunun mekanikleri eşit değildir: biri oyunun kalbidir, diğerleri onu destekler. Bu bölümde bu ayrımı ve destekleyici mekaniklerin nasıl seçildiğini öğreneceğiz.",
      },
      {
        type: "concept",
        heading: "Mekanik Nedir?",
        lead: "Oyun araştırmacısı Miguel Sicart (2008) mekaniği, oyuncunun oyun dünyasıyla etkileşmek için başvurduğu yöntemler olarak tanımlar. Kısaca: bir eylem ve o eylemi yöneten kural.",
        terms: [
          { term: "Mekanik", en: "mechanic", def: "Zıplamak bir eylemdir; ne kadar yükseğe zıplandığı, havada yön değiştirilip değiştirilemediği onun kuralıdır. İkisi birlikte zıplama mekaniğidir." },
          { term: "Oyun durumu", en: "game state", def: "Oyunun herhangi bir andaki tüm bilgisi: skor, can, karakterlerin yeri, kalan süre. Her mekanik bu durumu değiştirir." },
          { term: "Girdi → durum → çıktı", def: "Oyuncu bir girdi verir (dokunur), mekanik oyun durumunu değiştirir (kuş yükselir), oyun bunu bir çıktıyla gösterir (görüntü, ses)." },
        ],
      },
      {
        type: "concept",
        heading: "Çekirdek Mekanik ve Yan Mekanik",
        image: {
          src: "assets/lesson/super-mario.png",
          caption: "Super Mario Bros. (1985): çekirdek mekanik zıplamak. Mantar, ateş çiçeği ve borular bu zıplamayı yeni durumlarda kullandıran yan mekaniklerdir.",
          credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)",
        },
        terms: [
          { term: "Çekirdek mekanik", en: "core mechanic", def: "Oyuncunun hedefe ulaşmak için en sık kullandığı mekanik. Çıkarılırsa oyun başka bir oyuna dönüşür. 1. haftadaki temel fiilin kurallarıyla birlikte hâli." },
          { term: "Yan mekanik", en: "secondary mechanic", def: "Çekirdek mekaniği destekleyen, çeşitlendiren ya da zorlaştıran mekanik. Tek başına oyunu taşımaz; çıkarıldığında oyun yine aynı oyundur ama daha sade olur." },
        ],
        table: {
          head: ["Oyun", "Çekirdek", "Yan mekanikler"],
          rows: [
            ["Super Mario Bros.", "Koşmak, zıplamak", "Güçlendiriciler, borudan gizli bölgeye girmek"],
            ["Portal", "Portal açmak", "Küp taşımak, düğmeye basmak"],
            ["Among Us", "Suçlamak, oylamak", "Görev yapmak, sabotaj, kamera izlemek"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Yan Mekanik Neye Göre Seçilir?",
        lead: "Yan mekanik aklınıza gelen her güzel fikir değildir. Bir yan mekanik ancak aşağıdaki soruların çoğuna “evet” cevabı veriyorsa oyuna eklenir:",
        steps: [
          { label: "Çekirdeğe bağlı mı?", text: "Oyuncuyu çekirdek mekaniği yeni bir biçimde kullanmaya zorluyor mu? Çekirdekle hiç etkileşmeyen mekanik, oyunun içinde ayrı bir oyun olur." },
          { label: "Deneyime hizmet ediyor mu?", text: "Deneyim hedefini ve tasarım sütunlarını güçlendiriyor mu, yoksa bölüyor mu?" },
          { label: "Yeni karar yaratıyor mu?", text: "Oyuncuya daha önce olmayan ilginç bir seçim sunuyor mu?" },
          { label: "Öğretme maliyeti", text: "Oyuncu bunu birkaç saniyede, açıklama okumadan anlayabilir mi?" },
          { label: "Yapım maliyeti", text: "Elimizdeki sürede yapılıp test edilebilir mi?" },
        ],
      },
      {
        type: "examples",
        heading: "Vaka: Celeste'nin Yan Mekanikleri",
        image: {
          src: "assets/lesson/celeste.png",
          caption: "Celeste (2018): çekirdek mekanik zıplamak, havada atılmak (dash) ve duvara tırmanmak. Her bölüm bunlara yeni bir yan mekanik ekler.",
          credit: "Maddy Makes Games, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Celeste'nin çekirdek mekaniği oyun boyunca hiç değişmez. Her bölüm, çekirdeği yeni bir durumda kullandıran bir yan mekanikle kurulur:",
        table: {
          head: ["Bölüm", "Yan mekanik", "Çekirdekle ilişkisi"],
          rows: [
            ["Bölüm 1", "Dokununca hareket eden bloklar", "Bloğun hızını zıplamaya eklemek"],
            ["Bölüm 2", "Rüya blokları", "Atılarak bloğun içinden geçmek"],
            ["Bölüm 4", "Rüzgâr", "Zıplama ve atılmayı rüzgârın yönüne göre zamanlamak"],
          ],
        },
        bullets: [
          "Ders: Yan mekanik, çekirdeği değiştirmez; onu yeni sorular soran bir ortama koyar. Böylece oyuncu az sayıda kontrolle çok farklı durumlar yaşar.",
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke” İçin Mekanik Seçimi",
        lead: "Çekirdek mekanik: parmakla sürterek lekeyi silmek. Aday yan mekanikleri ölçütlere göre değerlendirelim:",
        table: {
          head: ["Aday", "Çekirdeğe bağlı", "Deneyime hizmet", "Öğretme / yapım", "Karar"],
          rows: [
            ["Silgi her silişte küçülür", "Evet", "Evet: telaşı artırır", "Kolay", "Ekle"],
            ["Mürekkep şişesi devrilip büyük leke yapar", "Evet", "Evet", "Kolay", "Ekle"],
            ["Lekeleri sürükleyip birleştirmek", "Kısmen", "Telaşı böler", "Zor", "Çıkar"],
            ["Karakter giydirme menüsü", "Hayır", "Hayır", "Zor", "Çıkar"],
          ],
        },
        bullets: [
          "Gamejam için mekanik bütçesi: bir çekirdek mekanik ve en fazla iki yan mekanik. Çekirdek tek başına eğlenceli değilse, yan mekanik onu kurtarmaz.",
        ],
      },
      {
        type: "concept",
        heading: "Mekanik Türleri",
        lead: "Ernest Adams ve Joris Dormans (Game Mechanics: Advanced Game Design, 2012) mekanikleri beş türe ayırır. Kendi çekirdek ve yan mekaniklerinizin hangi türde olduğunu bilmek, hangi becerilere ihtiyacınız olduğunu gösterir.",
        table: {
          head: ["Tür", "Ne yönetir?", "Örnek"],
          rows: [
            ["Fizik", "Hareket, kuvvet, çarpışma, zamanlama", "Flappy Bird'de yer çekimi"],
            ["İç ekonomi", "Kaynakların kazanılması ve harcanması", "Clash Royale'de iksir"],
            ["İlerleme mekanizmaları", "Kapı, anahtar, kilit: dünyada nasıl ilerlenir", "Zelda'da yeni eşyayla açılan bölgeler"],
            ["Taktik manevra", "Birimlerin harita üzerindeki konumu", "Satranç"],
            ["Sosyal etkileşim", "İttifak, oylama, iletişim", "Among Us'ta toplantı"],
          ],
        },
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Kazanmak ve Kaybetmek",
        lead: "Mekanikler oyuncuya ne yapabileceğini söyler; kazanma ve kaybetme koşulları ise bunu neden yaptığını. Hafta 1'deki biçimsel öğelerden “hedefler” ve “sonuç” burada somut kurallara dönüşür.",
      },
      {
        type: "concept",
        heading: "Kazanma Koşulu: Hedef Türleri",
        bridge: "Bu on türden dördünü sıradaki sayfada tanıdık oyunlarda görelim.",
        lead: "Fullerton oyun hedeflerini on türe ayırır. Seçilen tür, gereken mekanikleri belirler.",
        table: {
          head: ["Hedef türü", "Oyuncu ne yapar?", "Örnek"],
          rows: [
            ["Ele geçirme", "Rakibin birimlerini yok eder ya da alır", "Satranç, dama"],
            ["Kovalama", "Birini yakalar ya da ondan kaçar", "Saklambaç, Pac-Man"],
            ["Yarış", "Hedefe rakiplerden önce varır", "Mario Kart"],
            ["Hizalama", "Parçaları belirli bir düzene sokar", "Tetris, Candy Crush"],
            ["Kurtarma / kaçış", "Birini ya da kendini güvenli bir yere ulaştırır", "Super Mario Bros."],
            ["Yasak eylem", "Kuralı ilk çiğneyen kaybeder", "Jenga, Operation"],
            ["İnşa", "Bir şey kurar ya da büyütür", "Minecraft, SimCity"],
            ["Keşif", "Bilinmeyen alanları açar", "Zelda"],
            ["Çözüm", "Bir problemi önce ya da doğru çözer", "Sudoku, Portal"],
            ["Alt etme", "Bilgi ya da blöfle rakibi aldatır", "Among Us, poker"],
          ],
        },
      },
      {
        type: "gallery",
        heading: "Hedef Türleri Ekranda",
        lead: "Tablodaki hedef türleri, oyunun ekranına ya da tahtasına bakınca bile okunur. Hedef, oyunun neyi ön plana koyduğunu belirler:",
        gallery: [
          { src: "assets/lesson/satranc.jpg", caption: "Ele geçirme: satrançta her taş, rakibin alabileceği bir birimdir.", credit: "MichaelMaggs, CC BY-SA 3.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/pacman.png", caption: "Kovalama: Pac-Man hayaletlerden kaçar; güç hapını yiyince onları kovalar.", credit: "Bandai Namco, CC BY 3.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/mario-kart-8.jpg", caption: "Yarış: Mario Kart 8'de hedef, bitiş çizgisine rakiplerden önce varmaktır.", credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/tetris-ilk-surum.png", caption: "Hizalama: Tetris'te parçalar boşluksuz bir sıra oluşturacak biçimde dizilir.", credit: "Ekran görüntüsü: Alexey Pajitnov. Kaynak: Wikipedia (adil kullanım)" },
        ],
        bridge: "Hedefe ulaşmak oyunun bir yüzü; diğer yüzü, ulaşamayınca ne olduğu. Sıradaki sayfa kaybetmenin bedelini anlatıyor.",
      },
      {
        type: "concept",
        heading: "Kaybetmenin Bedeli",
        lead: "Kaybedince ne olduğu da tasarlanır. Bedel ağırsa oyuncu temkinli, hafifse cesur oynar. Seçim, 2.1'deki hedef kitleye bağlıdır: gündelik oyuncu hafif bedel bekler.",
        table: {
          head: ["Bedel", "Nasıl çalışır?", "Örnek"],
          rows: [
            ["Anında yeniden deneme", "Aynı noktadan, kayıpsız devam", "Celeste"],
            ["Kontrol noktası", "Checkpoint: son kaydedilen noktadan devam", "Çoğu platform ve macera oyunu"],
            ["Can sistemi", "Birkaç hata hakkı; can bitince bölüm baştan", "Klasik Super Mario Bros."],
            ["Geri alınabilir kayıp", "Kaybedilen kaynak, ölünen yere dönülürse geri alınır", "Dark Souls"],
            ["Kalıcı ölüm", "Permadeath: karakter ve ilerleme tamamen gider", "Minecraft hardcore modu"],
          ],
        },
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Mekanikten Deneyime",
        lead: "Şimdiye kadar tasarımcının yazdıklarını gördük: kurallar, mekanikler, kazanma ve kaybetme. Oyuncu ise bunları değil, bunların ona hissettirdiğini yaşar. Bu bölüm, yazdığımız kuralların oyuncuda nasıl bir deneyime dönüştüğünü inceler.",
      },
      {
        type: "concept",
        heading: "MDA Çerçevesi",
        lead: "Hunicke, LeBlanc ve Zubek'in 2004'te yayımladığı MDA (Mechanics, Dynamics, Aesthetics) oyunu üç katmanda inceler. Tasarımcı oyuna mekanikten başlayarak bakar, oyuncu ise estetikten, yani hissettiği duygudan.",
        steps: [
          { label: "Mekanik", text: "Tasarımcının yazdığı kurallar ve eylemler. Saklambaçta: ebe sayar, arar, bulduğunu sobeler." },
          { label: "Dinamik", text: "Bu kurallar oynanırken ortaya çıkan davranışlar. Ebe uzaklaşınca kaleye koşmak, son anda saklanma yeri değiştirmek." },
          { label: "Estetik", text: "Oyuncunun yaşadığı duygusal tepki. Gerilim, heyecan, yakalanmama sevinci." },
        ],
        bullets: [
          "Tasarımcı estetiği doğrudan yazamaz: istediği duyguyu seçer, onu doğuracak davranışları düşünür ve bu davranışları mümkün kılan kuralları yazar. Duygu türlerini 3. haftada ayrıntılı göreceğiz.",
        ],
      },
      {
        type: "examples",
        heading: "Vaka: Among Us'ın MDA Analizi",
        image: {
          src: "assets/lesson/among-us.png",
          caption: "Among Us (2018): sağ alttaki USE, REPORT ve KILL düğmeleri oyunun temel mekaniklerini gösterir.",
          credit: "Innersloth. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Üç kişilik Innersloth stüdyosunun oyununda, az sayıda mekanik zengin bir sosyal deneyim üretir:",
        table: {
          head: ["Katman", "Among Us'ta"],
          rows: [
            ["Mekanik", "Mürettebat görev yapar; sahtekâr öldürür ve sabote eder; ceset rapor edilir; toplantıda oy verilir."],
            ["Dinamik", "Birlikte dolaşıp birbirine tanıklık etmek, kanıt olarak görev göstermek, suçlamak, yalan söylemek."],
            ["Estetik", "Şüphe, gerilim, blöf yapmanın heyecanı, arkadaşlar arasındaki kahkaha."],
          ],
        },
        bullets: [
          "Ders: Oylama mekaniği tek başına basittir; “sahtekâr aranızda” bilgisiyle birleşince tartışma, ittifak ve ihanet dinamikleri ortaya çıkar.",
        ],
      },
      {
        type: "concept",
        heading: "Çekirdek Döngü",
        image: {
          src: "assets/lesson/mario-kart-8.jpg",
          caption: "Mario Kart 8: saniyelik döngü (sür, eşya al, kullan) yarışın, yarış da kupanın içindedir.",
          credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Çekirdek mekanik tek bir eylemdir; çekirdek döngü (core loop) ise bu eylemin sonucuyla birlikte tekrar eden zinciridir. Oyunlar farklı zaman ölçeklerinde iç içe döngüler kurar.",
        table: {
          head: ["Ölçek", "Clash Royale", "Flappy Bird"],
          rows: [
            ["Saniyeler", "İksir biriktir → kart oyna → saldır/savun", "Dokun → yüksel → borudan geç"],
            ["Dakikalar", "Maç oyna → kazan → sandık al", "Öl → skoru gör → yeniden başla"],
            ["Günler", "Kart güçlendir → desteyi değiştir → arenada yüksel", "Rekoru kır → arkadaşına göster"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Geri Bildirim Döngüleri",
        image: {
          src: "assets/lesson/monopoly.jpg",
          caption: "Monopoly: çok mülkü olan daha çok kira toplar, daha çok mülk alır. Sonuç çoğu zaman oyun bitmeden belli olur.",
          credit: "Horst Frank, CC BY-SA 3.0. Kaynak: Wikimedia Commons",
        },
        lead: "Bir mekaniğin sonucu aynı mekaniği tekrar etkilediğinde geri bildirim döngüsü (feedback loop) oluşur. Döngünün yönü, oyunun ne kadar çekişmeli kalacağını belirler.",
        terms: [
          { term: "Pozitif döngü", en: "positive feedback", def: "Önde olanı daha da öne geçirir. Oyunu hızla bitirir ama geride kalan umudunu kaybeder." },
          { term: "Negatif döngü", en: "negative feedback", def: "Geride olana yardım eder ya da öndekini yavaşlatır; yarışı son ana kadar çekişmeli tutar. Mario Kart'ta geride olan daha güçlü eşya alır." },
        ],
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Ayar Değişkenleri",
        lead: "Bir mekaniğin hissini çoğu zaman kuralın içindeki sayılar belirler: ayar değişkenleri (tuning variables). Programcı onları kolayca değiştirilebilir yazar; tasarımcı test ederek doğru değeri bulur.",
        table: {
          head: ["Değişken", "Düşük değer", "Yüksek değer"],
          rows: [
            ["Yer çekimi", "Süzülen, rahat", "Ağır, hızlı düşen, gergin"],
            ["Zıplama kuvveti", "Kısa, dikkatli zıplamalar", "Uçar gibi, kontrolü zor"],
            ["Oyun hızı", "Düşünmeye vakit kalır", "Panik ve refleks"],
          ],
        },
      },
      {
        type: "extra",
        heading: "Denge ve Ortaya Çıkış",
        terms: [
          { term: "Baskın strateji", en: "dominant strategy", def: "Her durumda en iyi sonucu veren seçenek. Oyuncular yalnızca onu seçer; karar ortadan kalktığı için tasarım hatasıdır." },
          { term: "Geçişsiz denge", en: "intransitive balance", def: "Taş-kâğıt-makas yapısı: her seçenek birini yener, birine yenilir. Pokémon'daki tip üstünlükleri böyle çalışır." },
          { term: "Ortaya çıkış / ilerleme", en: "emergence / progression", def: "Jesper Juul (2002): az kuralın etkileşiminden doğan sayısız durum (satranç) / tasarımcının tek tek hazırladığı zorluklar (macera bulmacaları). Gamejam'de ilki daha az içerikle daha uzun oynatır." },
        ],
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "İşlemsel / kurucu / örtük kural", def: "Okunan kural / alttaki mantık / yazılmayan kural." },
          { term: "Mekanik", en: "mechanic", def: "Bir eylem ve onu yöneten kural." },
          { term: "Çekirdek mekanik", en: "core mechanic", def: "En sık kullanılan, çıkarılırsa oyunu değiştiren mekanik." },
          { term: "Yan mekanik", en: "secondary mechanic", def: "Çekirdeği destekleyen, çeşitlendiren mekanik." },
          { term: "Oyun durumu", en: "game state", def: "Oyunun bir andaki tüm bilgisi." },
          { term: "MDA", def: "Mekanik → dinamik → estetik." },
          { term: "Çekirdek döngü", en: "core loop", def: "Çekirdek eylemin sonucuyla birlikte tekrar eden zinciri." },
          { term: "Geri bildirim döngüsü", en: "feedback loop", def: "Pozitif: öndekini güçlendirir. Negatif: oyunu dengeler." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuz için en fazla 5 kural yazın ve her birini dört ölçüte (net, ölçülebilir, tutarlı, gerekli) göre kontrol edin.",
          "Çekirdek mekaniğinizi yazın. En az dört aday yan mekanik bulun ve “Leke” tablosundaki gibi ölçütlerle değerlendirin; en fazla ikisini seçin.",
          "Kazanma koşulunuzun hedef türünü ve kaybetmenin bedelini, 2.1'deki hedef kitlenize göre gerekçesiyle yazın (GDD madde 7).",
          "Çekirdek döngünüzü saniyeler ve dakikalar ölçeğinde yazın (GDD madde 6) ve oyununuzun MDA tablosunu Among Us örneğindeki gibi doldurun.",
          "Evde: kurallarınızı bir aile üyenize ya da arkadaşınıza hiç açıklama yapmadan okutun. Sorduğu her soru, henüz net olmayan bir kuralı gösterir; düzeltin.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------
  // HAFTA 3.1 — Kaynaklar: Koster (2004), Hunicke, LeBlanc & Zubek (2004),
  // Csikszentmihalyi (1990), Chen (2007), Lepper, Greene & Nisbett (1973),
  // Skinner, Swink (2009), Jonasson & Purho (2012), Adams & Dormans (2012).
  // ---------------------------------------------------------------------
  {
    id: "3.1",
    title: "Eğlence ve Oyuncu Deneyimi",
    slides: [
      {
        type: "intro",
        heading: "Eğlence ve Oyuncu Deneyimi",
        lead: "2.2'de kuralların ve mekaniklerin oyuncuda bir deneyime dönüştüğünü (MDA) gördük. Bu derste o deneyimin kendisini inceliyoruz: eğlence nereden gelir, zorluk ne zaman keyif verir, ödüller oyuncuyu nasıl etkiler ve bir oyun kendini nasıl “iyi hissettirir”.",
        steps: [
          { label: "Eğlence nedir?", text: "Eğlence ile öğrenme arasındaki bağ ve eğlencenin sekiz türü." },
          { label: "Zorluk ve akış", text: "Oyuncu ne zaman sıkılır, ne zaman bunalır, ne zaman kendini kaybeder?" },
          { label: "Ödül ve ilerleme", text: "Ödüller oyuncuyu ne zaman güçlendirir, ne zaman eğlenceyi bozar?" },
          { label: "Oyun hissi", text: "Kontrollerin ve geri bildirimin oyuna kattığı his." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Eğlence Nedir?",
        lead: "“Eğlenceli olsun” her tasarımcının hedefidir, ama eğlencenin ne olduğunu bilmeden onu tasarlayamayız. Bu bölümde eğlenceyi iki açıdan tanımlıyoruz: nereden geldiği ve hangi türleri olduğu. Fikrinizin hangi tür eğlenceyi vaat ettiğini bilmek, bundan sonraki her kararı yönlendirecek.",
      },
      {
        type: "concept",
        heading: "Eğlence, Öğrenmektir",
        image: {
          src: "assets/lesson/koster.jpg",
          caption: "Raph Koster, oyun tasarımcısı. A Theory of Fun for Game Design (2004) kitabının yazarı.",
          credit: "Official GDC, CC BY 2.0. Kaynak: Wikimedia Commons",
        },
        lead: "Raph Koster'a göre oyunlar, beynimizin çözmeyi sevdiği örüntülerdir. Bir örüntüyü kavramaya başladığımızda keyif alırız; tamamen çözdüğümüzde oyun sıkıcı olur.",
        quote: {
          text: "Eğlence, öğrenmenin başka bir adıdır.",
          source: "Raph Koster, A Theory of Fun for Game Design (2004)",
        },
        terms: [
          { term: "Örüntü", en: "pattern", def: "Oyunun içindeki tekrar eden düzen: düşmanın saldırı sırası, parçaların düşüş biçimi." },
          { term: "Ustalık ve sıkılma", def: "XOX (tic-tac-toe) çocuklara eğlenceli gelir; her oyunun berabere biteceği anlaşıldığında sıkıcılaşır. Öğrenilecek bir şey kalmayan oyun biter." },
        ],
      },
      {
        type: "concept",
        heading: "Eğlencenin Sekiz Türü",
        bridge: "Bu türlerin birkaçının oyuncuya nasıl göründüğünü bir sonraki sayfada görelim.",
        lead: "MDA makalesinin yazarlarından Marc LeBlanc, “eğlenceli” kelimesinin yerine sekiz ayrı estetik önerir. Oyunlar genellikle bir-iki türü öne çıkarır; tasarımcı hangisini hedeflediğini bilirse kuralları ona göre seçer.",
        table: {
          head: ["Tür", "Oyuncu ne yaşar?", "Örnek"],
          rows: [
            ["Duyum (sensation)", "Göze ve kulağa hitap eden haz", "Rhythm oyunları, Journey"],
            ["Fantezi (fantasy)", "Başka biri olmak, hayal dünyası", "The Sims, Zelda"],
            ["Anlatı (narrative)", "Gelişen bir hikâye", "Papers, Please"],
            ["Meydan okuma (challenge)", "Engeli aşmak, ustalaşmak", "Celeste, Dark Souls"],
            ["Dostluk (fellowship)", "Başkalarıyla birlikte olmak", "Among Us, Minecraft sunucuları"],
            ["Keşif (discovery)", "Bilinmeyeni bulmak", "Zelda, Minecraft"],
            ["İfade (expression)", "Kendini ortaya koymak, yaratmak", "Minecraft, Roblox"],
            ["Oyalanma (submission)", "Zihni dinlendiren vakit geçirme", "Candy Crush, Solitaire"],
          ],
        },
      },
      {
        type: "gallery",
        heading: "Eğlence Türleri Ekranda",
        lead: "Bir oyunun hangi eğlence türünü hedeflediği, ekran görüntüsünden bile sezilir. Önceki tablodaki türlerden dördünün örnekleri:",
        gallery: [
          { src: "assets/lesson/journey.jpg", caption: "Duyum ve keşif: Journey'de geniş çöl, ışık ve müzik; oyuncu yürüdükçe bilinmeyeni görür.", credit: "thatgamecompany. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/minecraft-crafting.png", caption: "İfade: Minecraft'ın üretim ekranı, oyuncunun kendi dünyasını kurmasının aracıdır.", credit: "Xbox México, CC BY 3.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/among-us.png", caption: "Dostluk: Among Us'ın asıl içeriği, diğer oyuncularla konuşmak ve birbirinden şüphelenmektir.", credit: "Innersloth. Kaynak: Wikipedia (adil kullanım)" },
        ],
        bridge: "Kendi oyununuz için de bütün türleri değil, bir-ikisini seçeceksiniz. Sıradaki sayfada “Leke” için bu seçimi yapıyoruz.",
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Eğlence Türleri",
        lead: "Fikrinizin bütün türleri vaat etmesi gerekmez; bir-iki tanesini çok iyi vermesi yeter. 1.2'deki deneyim hedefi (telaş), hangi türlerin seçileceğini zaten gösterir.",
        table: {
          head: ["Tür", "Karar", "Neden?"],
          rows: [
            ["Meydan okuma", "Birincil", "Her turda daha uzun dayanmak; telaşın kaynağı."],
            ["Duyum", "İkincil", "Lekenin silinirken verdiği görsel ve işitsel tatmin."],
            ["Dostluk", "Yan", "Skoru arkadaşla paylaşmak; 2.1'deki personanın motivasyonu."],
            ["Anlatı, keşif, fantezi", "Yok", "60 saniyelik turda yer yok; kapsam dışı."],
          ],
        },
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Zorluk ve Akış",
        lead: "Meydan okuma, eğlencenin en yaygın türüdür, ama zorluk tek başına keyif vermez. Çok zor oyun bunaltır, çok kolay oyun sıkar. Bu bölüm, zorluğun hangi düzeyde ve hangi temposuyla oyuncuyu oyuna bağladığını açıklar.",
      },
      {
        type: "concept",
        heading: "Akış",
        image: {
          src: "assets/lesson/csikszentmihalyi.jpg",
          caption: "Mihaly Csikszentmihalyi (1934-2021), psikolog. Akış kavramını sanatçılar, sporcular ve cerrahlar üzerindeki araştırmalarıyla tanımladı.",
          credit: "Ehirsh, kamu malı. Kaynak: Wikimedia Commons",
        },
        lead: "Psikolog Mihaly Csikszentmihalyi (Flow, 1990), insanın bir işe tamamen gömüldüğü, zamanın nasıl geçtiğini fark etmediği hâle akış (flow) adını verdi. Akış, görevin zorluğu ile kişinin becerisi denk olduğunda ortaya çıkar.",
        table: {
          head: ["Durum", "Oyuncu ne hisseder?"],
          rows: [
            ["Zorluk > beceri", "Kaygı: bunalır, “haksızlık” der, bırakır."],
            ["Zorluk < beceri", "Sıkılma: dikkati dağılır, bırakır."],
            ["Zorluk ≈ beceri", "Akış: odaklanır, zamanı unutur, devam eder."],
          ],
        },
        bullets: [
          "Akışın koşulları oyunlarda hazır bulunur: net hedef, anında geri bildirim ve beceriye uyan zorluk.",
        ],
      },
      {
        type: "concept",
        heading: "Akış Kanalı ve Zorluk Eğrisi",
        lead: "Oyuncunun becerisi oynadıkça artar; zorluk da onunla birlikte artmalıdır. Bu iki çizginin arasında kalan bölgeye akış kanalı denir. İyi oyunlarda zorluk düz bir çizgi gibi değil, testere dişi gibi yükselir.",
        terms: [
          { term: "Zorluk eğrisi", en: "difficulty curve", def: "Oyun boyunca zorluğun nasıl değiştiğini gösteren çizgi." },
          { term: "Testere dişi tempo", def: "Zorluk bir süre yükselir, yeni bir bölüm ya da mekanikle kısa bir süre düşer, sonra yeniden yükselir. Düşüş anları oyuncuya nefes aldırır ve yeni şeyi öğrenme fırsatı verir." },
          { term: "Gerilim ve rahatlama", def: "Sürekli yüksek gerilim yorar. Zirveler, aralarındaki sakin anlarla anlam kazanır." },
        ],
      },
      {
        type: "examples",
        heading: "Vaka: flOw",
        image: {
          src: "assets/lesson/flow-oyun.jpg",
          caption: "flOw (2006): oyuncu küçük bir canlıyı yönetir. Daha derine inmek zorluğu artırır, yukarı çıkmak azaltır.",
          credit: "thatgamecompany. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Jenova Chen, yüksek lisans tezinde (Flow in Games) akış kuramını oyunlara uyguladı ve tezini flOw oyunuyla gösterdi. Sorusu şuydu: herkesin becerisi farklıysa, tek bir zorluk eğrisi herkesi akışta tutabilir mi?",
        terms: [
          { term: "Çözüm", def: "Zorluğu oyuncunun seçimine bıraktı. Okyanusta daha derine inen oyuncu daha güçlü canlılarla karşılaşır; zorlanan oyuncu istediği an yukarı çıkabilir." },
          { term: "Ders", def: "Zorluk ayarı bir menü seçeneği olmak zorunda değildir; oyun dünyasının içine yerleştirilebilir. Oyuncu farkında olmadan kendi akış kanalını bulur." },
        ],
      },
      {
        type: "concept",
        heading: "Zorluğu Ayarlamanın Yolları",
        lead: "“Daha zor yap” belirsiz bir istektir. Tasarımcı zorluğu belirli boyutlar üzerinden ayarlar; bunlar 2.2'deki ayar değişkenleriyle doğrudan bağlantılıdır.",
        table: {
          head: ["Boyut", "Nasıl artar?", "“Leke”de"],
          rows: [
            ["Hız", "Olaylar daha hızlı olur", "Lekeler daha hızlı yayılır"],
            ["Sayı", "Aynı anda daha çok tehdit", "Aynı anda daha çok leke"],
            ["Hassasiyet", "Hedefler küçülür, zaman penceresi daralır", "Küçük lekeler, küçülen silgi"],
            ["Bilgi", "Oyuncu daha az şey görür ya da önceden bilir", "Lekenin nereye yayılacağı belirsizleşir"],
            ["Karmaşıklık", "Aynı anda düşünülecek kural sayısı artar", "Silinince ikiye bölünen leke türü"],
          ],
        },
        bullets: [
          "Kural: aynı anda yalnızca bir boyutu artırın. Oyuncu neyin zorlaştığını anlarsa, ona uyum sağlamayı öğrenir.",
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Zorluk Eğrisi",
        lead: "60 saniyelik bir turun zorluk planı, testere dişi tempoya göre:",
        steps: [
          { label: "0-10 sn: öğret", text: "Tek, yavaş leke. Oyuncu silmeyi öğrenir." },
          { label: "10-25 sn: yükselt", text: "Leke sayısı artar (sayı boyutu)." },
          { label: "25-30 sn: nefes", text: "Sayfa kısa süre temizlenir; yeni şey gelir: mürekkep şişesi devrilir." },
          { label: "30-50 sn: yükselt", text: "Yayılma hızı artar (hız boyutu)." },
          { label: "50-60 sn: zirve", text: "En hızlı ve en kalabalık an; tur biter, skor görünür." },
        ],
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Ödül ve İlerleme",
        lead: "Puanlar, rozetler, yeni karakterler: oyunlar ödülle doludur. Ama ödül her zaman eğlenceyi artırmaz; yanlış kullanılırsa eğlencenin yerine geçer ve hatta onu bozar. Bu bölüm, ödülün ne zaman ve nasıl işe yaradığını açıklar.",
      },
      {
        type: "concept",
        heading: "İçsel ve Dışsal Motivasyon",
        lead: "2.1'deki Öz-Belirleme Kuramı, iki tür motivasyon ayırır. Oyun tasarımında ikisinin dengesi kritiktir.",
        terms: [
          { term: "İçsel motivasyon", en: "intrinsic", def: "Bir şeyi kendisi keyifli olduğu için yapmak: zıplamanın kendisi zevkli olduğu için zıplamak." },
          { term: "Dışsal motivasyon", en: "extrinsic", def: "Bir şeyi sonundaki ödül için yapmak: rozet almak için görevi bitirmek." },
          { term: "Aşırı gerekçelendirme", en: "overjustification effect", def: "Lepper, Greene ve Nisbett (1973): resim çizmeyi seven çocuklara çizim için ödül vaat edildi. Ödül kaldırıldığında bu çocuklar, ödül almayanlardan daha az çizdi. Dışsal ödül, içsel keyfi bastırabilir." },
        ],
        bullets: [
          "Tasarım dersi: ödül, sıkıcı bir mekaniği kurtarmak için değil, zaten eğlenceli olan bir mekaniği taçlandırmak için kullanılır.",
        ],
      },
      {
        type: "concept",
        heading: "Ödül Türleri",
        lead: "Ödüller, oyuncuya ne kazandırdıklarına göre ayrılır. Hangi türün seçildiği, 2.1'deki hedef kitlenin motivasyonuna bağlıdır.",
        table: {
          head: ["Tür", "Oyuncuya ne verir?", "Örnek", "Hitap ettiği motivasyon"],
          rows: [
            ["Puan / skor", "Ölçülebilir başarı", "Flappy Bird skoru", "Meydan okuma, rekabet"],
            ["Erişim", "Yeni bölüm, yeni alan", "Zelda'da açılan bölgeler", "Keşif"],
            ["Güç", "Yeni yetenek, daha güçlü eşya", "Mario'da mantar", "Güç, ustalık"],
            ["Koleksiyon", "Tamamlanacak bir set", "Celeste'deki çilekler", "Tamamlama"],
            ["Kozmetik", "Görünüş değişikliği", "Among Us şapkaları", "İfade, sosyal statü"],
            ["Bilgi", "Hikâyenin bir parçası, sır", "Gizli not, ara sahne", "Anlatı, merak"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Ödülün Zamanlaması",
        image: {
          src: "assets/lesson/ganimet-kutusu.png",
          caption: "Ganimet kutusu (loot box) temsili çizimi: oyuncu, içinden ne çıkacağını bilmediği bir kutu için ödeme yapar.",
          credit: "Sameboat, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Davranış psikoloğu B. F. Skinner, ödülün ne zaman verildiğinin davranışı nasıl etkilediğini inceledi. En güçlü bağlanmayı, ne zaman geleceği bilinmeyen ödül yaratır.",
        terms: [
          { term: "Sabit oranlı ödül", def: "Her 10 düşmanda bir ödül. Tahmin edilebilir; oyuncu ödülden sonra ara verir." },
          { term: "Değişken oranlı ödül", def: "Ödül rastgele gelir. Oyuncu “belki şimdi” diye durmadan devam eder. Kumar makineleri bu ilkeyle çalışır." },
          { term: "Etik sınır", def: "Ganimet kutuları değişken oranlı ödülü gerçek parayla birleştirir. Belçika 2018'de paralı ganimet kutularını kumar saydı. Tasarımcının sorumluluğu, bağlanmayı oyuncunun aleyhine kullanmamaktır." },
        ],
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Oyun Hissi",
        lead: "Aynı kurallara sahip iki oyundan biri “tatlı”, diğeri “odun gibi” hissettirebilir. Fark, kontrollerin tepkisinde ve her eylemin ardından gelen geri bildirimdedir. Bu bölüm, oyunun elde nasıl hissettirdiğini tasarlamayı anlatır.",
      },
      {
        type: "concept",
        heading: "Oyun Hissi",
        lead: "Steve Swink (Game Feel, 2009), oyun hissini sanal bir nesneyi gerçek zamanlı kontrol etmenin verdiği his olarak tanımlar. Üç parçadan oluşur:",
        terms: [
          { term: "Gerçek zamanlı kontrol", def: "Oyuncunun girdisi ile ekrandaki tepki arasında fark edilir bir gecikme olmaması. Gecikme, karakteri “ağır” ve “tepkisiz” hissettirir." },
          { term: "Simüle edilmiş uzay", def: "Nesnelerin çarpışması, yer çekimi, sürtünme: dünyanın kendi tutarlı fiziği." },
          { term: "Cila", en: "polish", def: "Etkileşimi vurgulayan görsel ve işitsel ayrıntılar: toz bulutu, ses efekti, ekran sarsıntısı." },
        ],
      },
      {
        type: "examples",
        heading: "Vaka: Celeste'nin Görünmez Yardımları",
        image: {
          src: "assets/lesson/celeste.png",
          caption: "Celeste (2018): oyuncunun “tam zamanında bastım” hissi, oyunun fark ettirmeden yaptığı küçük düzeltmelerle desteklenir.",
          credit: "Maddy Makes Games, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Celeste zor bir oyundur ama haksız hissettirmez. Tasarımcı Maddy Thorson, oyunun oyuncu lehine yaptığı küçük düzeltmeleri açıkladı:",
        terms: [
          { term: "Coyote time", def: "Platformun kenarından düştükten sonra çok kısa bir süre daha zıplanabilir. Oyuncu “kenardaydım” dediğinde haklı çıkar." },
          { term: "Zıplama tamponu", en: "jump buffering", def: "Yere inmeden hemen önce basılan zıplama tuşu hatırlanır ve yere değince uygulanır." },
          { term: "Tepe noktasında hafiflik", def: "Zıplamanın en yüksek noktasında yer çekimi azalır; oyuncuya havada yön düzeltecek zaman kalır." },
        ],
      },
      {
        type: "concept",
        heading: "Geri Bildirim ve “Juice”",
        lead: "Martin Jonasson ve Petri Purho, 2012'deki “Juice it or lose it” konuşmasında aynı Breakout oyununu önce sade, sonra adım adım efektler ekleyerek gösterdi. Kurallar hiç değişmedi, ama oyun bambaşka hissettirdi. Bu efektlere “juice” denir.",
        table: {
          head: ["Teknik", "Ne yapar?", "“Leke”de"],
          rows: [
            ["Parçacık", "Eylemin etrafına küçük parçalar saçar", "Silinen lekeden silgi kırıntıları"],
            ["Ses", "Her eyleme kısa ve karakterli bir ses", "Sürterken hışırtı, temizlenince “çıt”"],
            ["Ekran sarsıntısı", "Güçlü anlarda ekranı kısa süre titretir", "Mürekkep şişesi devrildiğinde"],
            ["Ezilme-uzama", "Squash and stretch: nesne çarpınca basılır, hızlanınca uzar", "Silgi bastırınca yassılır"],
            ["Duraksama", "Hit-stop: önemli anda oyun bir an durur", "Son leke silinince"],
          ],
        },
        bullets: [
          "Ölçü: juice, olanı açıklamalıdır. Her şey parlayıp titrerse oyuncu önemli olanı göremez.",
        ],
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Dinamik Zorluk Ayarı",
        lead: "Bazı oyunlar zorluğu oyuncunun performansına göre kendiliğinden ayarlar: dinamik zorluk ayarı (dynamic difficulty adjustment). Resident Evil 4, oyuncu sık ölürse düşmanları fark ettirmeden zayıflatır, çok iyi oynarsa güçlendirir. 2.2'deki Mario Kart'ın lastik bant etkisi de bunun bir türüdür. Risk: oyuncu fark ederse, başarısının kendine ait olmadığını hisseder.",
      },
      {
        type: "extra",
        heading: "İç Ekonomi",
        lead: "Oyunda kazanılan ve harcanan her şey (altın, iksir, can) bir ekonomi oluşturur. Adams ve Dormans ekonomiyi dört parçayla anlatır:",
        terms: [
          { term: "Kaynak", en: "source", def: "Bir şeyi üreten yer: düşman öldürünce düşen altın." },
          { term: "Gider", en: "drain", def: "Bir şeyi yok eden yer: dükkânda harcanan altın." },
          { term: "Dönüştürücü", en: "converter", def: "Bir şeyi başka bir şeye çeviren yer: odunu tahtaya çeviren tezgâh." },
          { term: "Takas", en: "trader", def: "Oyuncular ya da oyuncu ile oyun arasında değiş tokuş." },
        ],
        bullets: [
          "Kaynak giderden büyükse “enflasyon” olur: oyuncu her şeyi alabilir, ödüller değerini kaybeder.",
        ],
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Örüntü", en: "pattern", def: "Oyunun içinde öğrenilecek tekrar eden düzen." },
          { term: "Sekiz estetik", def: "Duyum, fantezi, anlatı, meydan okuma, dostluk, keşif, ifade, oyalanma." },
          { term: "Akış", en: "flow", def: "Zorluk ile becerinin denk olduğu, zamanın unutulduğu hâl." },
          { term: "Zorluk eğrisi", en: "difficulty curve", def: "Zorluğun oyun boyunca değişimi; testere dişi tempo." },
          { term: "İçsel / dışsal motivasyon", def: "Eylemin kendisi için / sonundaki ödül için yapmak." },
          { term: "Değişken oranlı ödül", def: "Ne zaman geleceği bilinmeyen, en güçlü bağlanmayı yaratan ödül." },
          { term: "Oyun hissi", en: "game feel", def: "Kontrol, fizik ve cilanın birlikte verdiği his." },
          { term: "Juice", def: "Kuralları değiştirmeden geri bildirimi güçlendiren efektler." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Oyununuzun birincil ve ikincil eğlence türünü sekiz estetikten seçin; “Leke” tablosundaki gibi hangi türleri bilerek dışarıda bıraktığınızı da yazın.",
          "Bir oturumun zorluk eğrisini testere dişi tempoyla planlayın: hangi saniyede ya da bölümde hangi zorluk boyutu artıyor, nerede nefes aralığı var?",
          "Oyununuzdaki ödülleri yazın: türü ne, nasıl kazanılıyor, oyuncunun hangi motivasyonuna hitap ediyor? (GDD madde 10)",
          "Temel fiiliniz için üç juice efekti tarif edin (parçacık, ses, sarsıntı ya da başka).",
          "Evde: hiç oynamadığınız bir oyunu 10 dakika oynayın ve akıştan çıktığınız anı not edin. Sıkıldınız mı, bunaldınız mı? Hangi zorluk boyutu buna yol açtı?",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------
  // HAFTA 3.2 — Kaynaklar: Miyamoto (Super Mario Bros. 1-1 üzerine 2015
  // röportajı), Hayashida (kishōtenketsu, 2012), Dan Taylor (Ten Principles
  // of Good Level Design, GDC 2013), Kevin Lynch (The Image of the City, 1960).
  // ---------------------------------------------------------------------
  {
    id: "3.2",
    title: "Bölüm (Level) Tasarımı",
    slides: [
      {
        type: "intro",
        heading: "Bölüm Tasarımı",
        lead: "3.1'de zorluğun testere dişi gibi yükselmesi gerektiğini gördük. Bölüm tasarımı, bu eğriyi oyuncunun içinde dolaştığı somut bir mekâna çevirir: hangi engel nerede, oyuncu bir mekaniği nerede öğrenir, nereye gideceğini nasıl bilir?",
        steps: [
          { label: "Bölüm tasarımı nedir?", text: "Bölümün görevi ve iyi bölüm tasarımının ilkeleri." },
          { label: "Oynatarak öğretmek", text: "Super Mario Bros. 1-1 ve dört perdelik bölüm yapısı." },
          { label: "Tempo ve yapı", text: "Yoğunluk, nefes alanları ve bölümlerin birbirine bağlanması." },
          { label: "Oyuncuyu yönlendirmek", text: "Oyuncu, kimse söylemeden nereye gideceğini nasıl bilir?" },
          { label: "Kâğıttan teste", text: "Bir bölüm hangi adımlarla yapılır?" },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Bölüm Tasarımı Nedir?",
        lead: "Mekanikler oyuncuya ne yapabileceğini söyler; bölüm, bu mekaniklerin hangi sırayla ve hangi koşullarda sınanacağını belirler. Aynı mekanikle kolay ya da imkânsız bir bölüm yapılabilir. Fark, bölüm tasarımındadır.",
      },
      {
        type: "concept",
        heading: "Bölüm Tasarımı Nedir?",
        lead: "Bölüm tasarımı (level design), oyun alanının, engellerin, düşmanların, ödüllerin ve yolların yerleştirilmesidir. Bölüm tasarımcısı yeni kural yazmaz; var olan mekanikleri bir mekâna dizerek oyuncuya bir deneyim yaşatır.",
        terms: [
          { term: "Bölüm", en: "level", def: "Oyunun başı ve sonu olan bir parçası: bir harita, bir sahne, bir tur. “Leke”de bir defter sayfası." },
          { term: "Bölümün üç görevi", def: "Öğretmek: yeni mekaniği tanıtmak. Sınamak: öğrenileni zorlaştırarak test etmek. Yaşatmak: deneyim hedefine uygun bir tempo ve duygu üretmek." },
        ],
      },
      {
        type: "concept",
        heading: "İyi Bölümün İlkeleri",
        lead: "Bölüm tasarımcısı Dan Taylor, 2013'teki GDC konuşmasında iyi bölüm tasarımının on ilkesini sıraladı. Gamejam ölçeğinde en işe yarayan beşi:",
        table: {
          head: ["İlke", "Anlamı"],
          rows: [
            ["Mekaniklerden doğar", "Bölüm, oyunun mekaniklerini kullanmak ve sınamak için vardır; mekaniğin kullanılmadığı alan boş alandır."],
            ["Sürekli öğretir", "Öğretici bölüm ilk bölümde bitmez; her bölüm bir şey öğretir ya da öğreneni derinleştirir."],
            ["Ne yapılacağını söyler, nasıl yapılacağını değil", "Hedef açıktır; çözüm yolu oyuncuya bırakılır."],
            ["Şaşırtır", "Öğrenilen kural beklenmedik bir biçimde kullanılır."],
            ["Verimlidir", "Aynı alan ve aynı parçalar farklı biçimlerde yeniden kullanılır; her şey sıfırdan yapılmaz."],
          ],
        },
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Oynatarak Öğretmek",
        lead: "Oyuncular öğretici metinleri okumaz, atlar. En iyi oyunlar kuralları yazıyla değil, bölümün kendisiyle öğretir: oyuncunun karşısına, ancak doğru şeyi yaparak geçebileceği bir durum koyar. Bu bölümde bunun en ünlü örneğini ve arkasındaki yapıyı göreceğiz.",
      },
      {
        type: "examples",
        heading: "Vaka: Super Mario Bros. 1-1",
        image: {
          src: "assets/lesson/mario-1-1.png",
          caption: "Super Mario Bros. (1985), Dünya 1-1'in ilk ekranı: tek bir yazı olmadan oyunun temel kurallarını öğretir.",
          credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Shigeru Miyamoto, 1-1'in ilk ekranının oyunu bilmeyen birine kuralları kendiliğinden öğretmek için tasarlandığını anlatır:",
        terms: [
          { term: "Yön", def: "Mario ekranın solunda başlar, sağı boştur: oyuncu sağa gitmesi gerektiğini anlar." },
          { term: "İlk düşman", def: "Yavaşça yaklaşan Goomba'dan kaçmanın tek yolu zıplamaktır. Oyuncu ya zıplamayı öğrenir ya da ölür ve öğrenir." },
          { term: "Soru blokları", def: "Parlayan bloğa vurmak bir şey çıkarır; merak, deneme yaptırır." },
          { term: "Mantar", def: "İlk mantar sağa gider, borudan sekip oyuncuya doğru döner. Oyuncu kaçamasa bile ona dokunur ve iyi bir şey olduğunu öğrenir." },
        ],
      },
      {
        type: "concept",
        heading: "Dört Perdelik Bölüm: Kishōtenketsu",
        image: {
          src: "assets/lesson/mario-3d-world.png",
          caption: "Super Mario 3D World (2013): her bölüm tek bir yeni fikir üzerine kurulur ve bu fikri dört adımda işler.",
          credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Super Mario 3D Land ve 3D World'ün yönetmeni Koichi Hayashida, bölümlerini Çin ve Japon anlatı geleneğindeki dört perdeli yapıyla kurduğunu anlatır: kishōtenketsu.",
        steps: [
          { label: "Ki: giriş", text: "Yeni mekanik güvenli bir yerde tanıtılır; hata yapmanın bedeli yoktur." },
          { label: "Shō: gelişme", text: "Aynı mekanik biraz daha zor bir durumda kullanılır." },
          { label: "Ten: büküm", text: "Mekanik beklenmedik bir biçimde kullanılır ya da başka bir mekanikle birleşir." },
          { label: "Ketsu: sonuç", text: "Öğrenilenlerin hepsi son bir sınavda bir araya gelir; bölüm biter." },
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin İlk Dört Sayfası",
        lead: "“Leke”de her defter sayfası bir bölümdür. 2.2'de seçtiğimiz yan mekanik (devrilen mürekkep şişesi), dört sayfaya kishōtenketsu ile yayılır:",
        table: {
          head: ["Sayfa", "Perde", "Ne olur?"],
          rows: [
            ["1", "Giriş", "Sayfanın köşesinde tek bir mürekkep şişesi yavaşça devrilir. Oyuncu büyük lekeyi silmeyi öğrenir."],
            ["2", "Gelişme", "İki şişe, farklı zamanlarda devrilir. Oyuncu hangisine önce gideceğini seçmek zorunda kalır."],
            ["3", "Büküm", "Şişe, normal lekelerin arasında devrilir; küçük lekeleri silerken büyüğü gözden kaçırmak kolaylaşır."],
            ["4", "Sonuç", "Bütün leke türleri ve şişeler aynı sayfada; 60 saniyenin zirvesi."],
          ],
        },
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Tempo ve Yapı",
        lead: "Tek tek iyi tasarlanmış engeller, sıralanışları kötüyse yorucu ya da sıkıcı bir bölüm oluşturur. Bu bölüm, engellerin bölüm boyunca nasıl dağıtılacağını ve bölümlerin birbirine nasıl bağlanacağını anlatır.",
      },
      {
        type: "concept",
        heading: "Yoğunluk ve Nefes Alanları",
        lead: "Bölüm boyunca oyuncunun üzerindeki baskı, 3.1'deki zorluk eğrisinin küçük bir kopyası gibi iniş çıkış yapar. Tasarımcılar bunu bir yoğunluk grafiğiyle planlar.",
        terms: [
          { term: "Yoğunluk", en: "intensity", def: "Belirli bir anda oyuncunun ne kadar baskı altında olduğu: düşman sayısı, zaman baskısı, hata payının darlığı." },
          { term: "Nefes alanı", def: "Tehlikenin olmadığı kısa bölge. Oyuncu dinlenir, ödülünü toplar, bir sonraki bölümü görür. Kontrol noktaları genellikle burada olur." },
          { term: "Ritim", def: "Yoğun ve sakin anların sırası. Hep yoğun bölüm yorar; hep sakin bölüm sıkar." },
        ],
      },
      {
        type: "concept",
        heading: "Bölümlerin Yapısı",
        bridge: "Üç yapının oyuncunun ekranında nasıl göründüğünü bir sonraki sayfada karşılaştıralım.",
        lead: "Bölümlerin birbirine nasıl bağlandığı, oyuncunun ne kadar özgür olduğunu belirler. Yapı seçimi kapsamı da doğrudan etkiler.",
        table: {
          head: ["Yapı", "Nasıl çalışır?", "Örnek", "Gamejam'e uygunluğu"],
          rows: [
            ["Doğrusal", "Bölümler sırayla, tek yoldan oynanır", "Super Mario Bros., Celeste", "En uygun: en az içerik"],
            ["Merkez ve kollar", "Hub: bir merkezden farklı bölümlere gidilir", "Super Mario 64", "Orta"],
            ["Kilit ve anahtar", "Gating: yeni yetenek, kapalı yeri açar", "Zelda, Metroid", "Zor: çok planlama ister"],
            ["Açık dünya", "Oyuncu her yere istediği sırayla gider", "Minecraft, Zelda: Breath of the Wild", "Uygun değil"],
          ],
        },
      },
      {
        type: "gallery",
        heading: "Üç Yapı, Üç Mekân",
        lead: "Önceki tablodaki yapılar, oyuncunun ekranda gördüğü mekânı da biçimlendirir:",
        gallery: [
          { src: "assets/lesson/super-mario.png", caption: "Doğrusal: Super Mario Bros.'ta ekran yalnızca sağa kayar; geri dönülemez.", credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/metroid.png", caption: "Kilit ve anahtar: Metroid'de (1986) harita her yöne uzanır, ama bazı geçitler ancak yeni bir yetenekle açılır.", credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/botw.jpg", caption: "Açık dünya: Zelda: Breath of the Wild'da (2017) görünen her dağa gidilebilir.", credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)" },
        ],
        bridge: "Yapı ne olursa olsun, oyuncu nereye gideceğini bilmek zorunda. Sıradaki bölüm, oyuncuyu fark ettirmeden yönlendirmeyi anlatıyor.",
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Oyuncuyu Yönlendirmek",
        lead: "Oyuncu kaybolduğunda oyun durur. Ama ok işaretleri ve yazılar sihirli çemberi bozar. Bölüm tasarımcısı, oyuncuyu fark ettirmeden yönlendirmek için şehir planlamacılarından ve mimarlardan ödünç alınan araçlar kullanır.",
      },
      {
        type: "concept",
        heading: "Şehrin İmgesi",
        image: {
          src: "assets/lesson/hl2-city17.jpg",
          caption: "Half-Life 2 (2004), City 17: arkadaki dev Citadel kulesi şehrin her yerinden görünür ve oyuncuya hep nerede olduğunu söyler.",
          credit: "Valve. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Şehir planlamacısı Kevin Lynch (The Image of the City, 1960), insanların bir şehirde yollarını beş öğeyle bulduğunu gösterdi. Bölüm tasarımcıları bu öğeleri oyun haritalarında kullanır.",
        terms: [
          { term: "Yol", en: "path", def: "Oyuncunun ilerlediği hat: koridor, cadde, patika." },
          { term: "Kenar", en: "edge", def: "Geçilemeyen sınır: duvar, nehir, uçurum." },
          { term: "Bölge", en: "district", def: "Kendine özgü görünüşü olan alan: çarşı, mezarlık, liman." },
          { term: "Düğüm", en: "node", def: "Yolların kesiştiği, karar verilen nokta: meydan, kavşak." },
          { term: "İşaret", en: "landmark", def: "Uzaktan görünen ve yön veren yapı: kule, dağ, dev ağaç." },
        ],
      },
      {
        type: "concept",
        heading: "Yönlendirme Teknikleri",
        bridge: "Tablodaki “renk” tekniğinin en bilinen örneğini sıradaki sayfada görelim.",
        lead: "Lynch'in öğelerine ek olarak, bölüm tasarımcıları oyuncunun gözünü istedikleri yere çekmek için görsel ipuçları kullanır:",
        table: {
          head: ["Teknik", "Nasıl çalışır?", "Örnek"],
          rows: [
            ["Işık", "Göz, karanlıktan aydınlığa yönelir", "Karanlık koridorun sonundaki aydınlık kapı"],
            ["Renk", "Tutarlı bir renk, “buradan geçilir” demektir", "Mirror's Edge'de tırmanılabilir yerlerin kırmızıya boyanması"],
            ["Kırıntı izi", "Breadcrumbs: toplanabilir nesneler yolu çizer", "Mario'da havada dizili altınlar"],
            ["Çizgiler", "Kenarlar, kablolar, yollar bakışı bir noktaya taşır", "Hedefe doğru uzanan raylar"],
            ["Hareket", "Göz, hareket eden şeye bakar", "Uzaktan uçan bir kuş sürüsü"],
          ],
        },
        bullets: [
          "Ölçü: ipucu fazla belirginse (her tırmanılacak yerde sarı boya), oyuncu kendini yönlendirilmiş değil, elinden tutulmuş hisseder.",
        ],
      },
      {
        type: "gallery",
        heading: "Renkle Yönlendirme: Mirror's Edge",
        lead: "Mirror's Edge'de (2008) oyuncu çatılarda koşarken her an nereye atlayacağına karar verir. Şehir neredeyse tamamen beyaz; tırmanılabilen boru, rampa ve kapılar kırmızı. Buna “koşucu görüşü” (runner vision) denir ve önceki sayfadaki ölçüye uyar: kırmızı seçenekleri gösterir, yolu oyuncu seçer.",
        gallery: [
          { src: "assets/lesson/mirrors-edge.jpg", caption: "Mirror's Edge (2008): beyaz şehirde kırmızı nesneler koşu yolunu çizer.", credit: "DICE / Electronic Arts. Kaynak: Wikipedia (adil kullanım)" },
        ],
        bridge: "Işık, renk ve işaretler önce kâğıtta planlanır, sonra oyunda denenir. Son bölüm, bir bölümün hangi adımlarla yapıldığını anlatıyor.",
      },

      // --- Bölüm 5 ---
      {
        type: "section",
        heading: "Kâğıttan Teste",
        lead: "Profesyonel bölüm tasarımcıları güzel görünen bir bölümle işe başlamaz. Önce bölümün oynanıp oynanmadığını en ucuz yoldan test ederler, görselliği en sona bırakırlar. Bu bölüm, bir bölümün hangi adımlarla yapıldığını anlatır.",
      },
      {
        type: "concept",
        heading: "Bir Bölüm Nasıl Yapılır?",
        image: {
          src: "assets/lesson/mario-1-1-sema.png",
          caption: "Mario 1-1'in ilk ekranının blokaj hâli: zemin, bloklar, boru ve düşman yalnızca renkli kutularla gösterilmiş. Oynanış, görsel olmadan da okunur.",
          credit: "Maplestrip, CC0. Kaynak: Wikimedia Commons",
        },
        steps: [
          { label: "Amaç", text: "Bölüm neyi öğretecek, hangi duyguyu yaşatacak? Tek cümle." },
          { label: "Kâğıt harita", text: "Kareli kâğıda yukarıdan ya da yandan çizim: yollar, engeller, ödüller, başlangıç ve bitiş." },
          { label: "Blokaj", text: "Blockout / graybox: bölüm oyunda yalnızca gri kutularla kurulur. Görsel yoktur, sadece oynanış vardır." },
          { label: "Test ve düzeltme", text: "Başkası oynar, tasarımcı izler; takılınan yerler değiştirilir." },
          { label: "Görselleştirme", text: "Bölüm oynanır hâle geldiğinde son görseller eklenir." },
        ],
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Prosedürel Bölüm Üretimi",
        lead: "Bazı oyunlarda bölümleri tasarımcı değil, bilgisayar kurallara göre üretir: prosedürel üretim (procedural generation). Spelunky, her oyunda elle hazırlanmış oda parçalarını rastgele birleştirerek yeni bir harita kurar. Bu, tekrar oynanabilirliği artırır ama tasarımcıya yeni bir iş verir: rastgele üretilen her bölümün oynanabilir ve adil olmasını garanti eden kuralları yazmak.",
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Bölüm tasarımı", en: "level design", def: "Alanın, engellerin, ödüllerin ve yolların yerleştirilmesi." },
          { term: "Kishōtenketsu", def: "Giriş, gelişme, büküm, sonuç: dört perdelik bölüm yapısı." },
          { term: "Yoğunluk / nefes alanı", def: "Oyuncu üzerindeki baskı / baskının olmadığı kısa bölge." },
          { term: "Doğrusal / merkez / açık", def: "Bölümlerin birbirine bağlanma yapıları." },
          { term: "Kilit ve anahtar", en: "gating", def: "Yeni yeteneğin kapalı alanı açması." },
          { term: "Lynch'in beş öğesi", def: "Yol, kenar, bölge, düğüm, işaret." },
          { term: "Kırıntı izi", en: "breadcrumbs", def: "Yolu gösteren toplanabilir nesneler." },
          { term: "Blokaj", en: "blockout / graybox", def: "Bölümün görselsiz, gri kutularla kurulmuş hâli." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Oyununuzun ilk bölümünün amacını tek cümleyle yazın: hangi mekaniği öğretiyor, hangi duyguyu yaşatıyor?",
          "Bölümü kareli kâğıda çizin ve kishōtenketsu'nun dört perdesini haritada işaretleyin. Bölümünüz tek ekransa (“Leke” gibi), dört sayfa ya da dört dalga olarak planlayın.",
          "Bölümün yoğunluk grafiğini çizin: nerede zirve, nerede nefes alanı var? Haritaya en az bir işaret (landmark) ve bir yönlendirme tekniği ekleyin.",
          "Evde: çiziminizi hiç açıklama yapmadan bir aile üyenize ya da arkadaşınıza gösterin ve parmağıyla “oynamasını” isteyin. Nereye gideceğini bilemediği ya da takıldığı yerleri not alıp haritayı düzeltin.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------
  // HAFTA 4.1 — Kaynaklar: Miyamoto (Mario'nun piksel kısıtından doğan
  // tasarımı), Naoto Ohshima / Yuji Naka (Sonic, 1991), Toru Iwatani
  // (Pac-Man, 1980), Masahiro Sakurai (Kirby's Adventure, 1993), Mitchell,
  // Francke & Eng (Illustrative Rendering in Team Fortress 2, NPAR 2007),
  // Tom Bancroft (Creating Characters with Personality, 2006), Mike Bithell
  // (Thomas Was Alone, 2012).
  // ---------------------------------------------------------------------
  {
    id: "4.1",
    title: "Karakter Tasarımı",
    slides: [
      {
        type: "intro",
        heading: "Karakter Tasarımı",
        lead: "3.2'de oyuncunun dolaştığı mekânı kurduk. Şimdi o mekânda dolaşan karakterlere geçiyoruz: oyuncunun yönettiği karakter ve onun karşısına çıkan düşmanlar. Oyunda karakter önce bir resim değil, bir yetenek setidir; görünüş, o yetenekleri oyuncuya anlatmak için tasarlanır.",
        steps: [
          { label: "Karakter = mekanik", text: "Oyuncu karakteri ne yapabildiğiyle tanımlanır." },
          { label: "Okunabilirlik", text: "Siluet, şekil dili ve renk: karakter bir bakışta nasıl anlaşılır?" },
          { label: "Karakter ve oyuncu", text: "Oyuncu karakterin kendisi mi, yoksa onu izleyen biri mi?" },
          { label: "Düşmanlar", text: "Her düşman, oyuncunun yeteneklerine sorulan bir sorudur." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Karakter = Mekanik",
        lead: "Bir romanda karakteri düşünceleri ve konuşmaları tanımlar; bir oyunda ise oyuncunun onunla ne yapabildiği. Bu yüzden oyun karakteri tasarlanırken ilk soru “neye benziyor?” değil, “ne yapabiliyor?” sorusudur.",
      },
      {
        type: "concept",
        heading: "Oyuncu Karakteri Nedir?",
        lead: "Oyuncu karakteri (player character), oyuncunun oyun dünyasındaki temsilcisidir. Oyuncunun 2.2'de seçtiğimiz çekirdek mekaniği, bu karakter aracılığıyla yaptığı her şeydir.",
        terms: [
          { term: "Avatar", def: "Oyuncunun oyun dünyasındaki bedeni. Bir insan, bir araba, bir blok, bir imleç olabilir." },
          { term: "Yetenek seti", en: "moveset", def: "Karakterin yapabildiği eylemlerin tamamı: koşmak, zıplamak, saldırmak, saklanmak. Bölümler bu sete göre tasarlanır." },
          { term: "3C", def: "Endüstride karakter (character), kamera (camera) ve kontrolün (control) birlikte tasarlanması. Biri değişirse diğer ikisi de değişir: 3.1'deki oyun hissi bu üçünden doğar." },
        ],
      },
      {
        type: "examples",
        heading: "Vaka: Yetenekten Doğan Karakterler",
        image: {
          src: "assets/lesson/pacman.png",
          caption: "Pac-Man (1980): karakterin bütün görünüşü tek bir fiili, yemeyi anlatır.",
          credit: "Bandai Namco, CC BY 3.0. Kaynak: Wikimedia Commons",
        },
        lead: "Ünlü karakterlerin çoğu, önce bir fiil olarak doğmuş, görünüşleri bu fiile göre çizilmiştir:",
        terms: [
          { term: "Pac-Man", def: "Toru Iwatani, oyunu “yemek” fiili üzerine kurdu. Karakter, bir dilimi alınmış pizzadan esinlenen, sadece ağızdan ibaret bir daire oldu." },
          { term: "Sonic", def: "Yuji Naka, düşmanlara top olup yuvarlanarak saldıran hızlı bir karakter istedi. Tavşan, armadillo gibi adaylar arasından kendini top hâline getirebilen kirpi seçildi." },
          { term: "Kirby", def: "Masahiro Sakurai'nin karakteri düşmanları yutar; Kirby's Adventure'da (1993) yuttuğu düşmanın yeteneğini kopyalar. Yuttuğu her şey ona yeni bir fiil kazandırır." },
        ],
      },
      {
        type: "concept",
        heading: "Teknik Kısıt Tasarımı Belirler",
        image: {
          src: "assets/lesson/mario-nakaue.png",
          caption: "Mario'nun şapka, bıyık ve tulumu, 1981'de birkaç pikselle çizilebilmek için seçildi.",
          credit: "Shigehisa Nakaue / Nintendo. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Shigeru Miyamoto, Mario'yu Donkey Kong (1981) için 16x16 piksellik bir alana çizmek zorundaydı. Karakterin en tanıdık parçaları, aslında bu kısıta verilmiş cevaplardır:",
        table: {
          head: ["Parça", "Hangi sorunu çözdü?"],
          rows: [
            ["Şapka", "Saçı çizmek ve zıplarken hareket ettirmek zordu."],
            ["Bıyık", "Ağzı ve ifadeyi birkaç pikselle göstermek mümkün değildi."],
            ["Tulum", "Gövdeden farklı renkteki tulum, kolların hareketini görünür kıldı."],
          ],
        },
        bullets: [
          "Ders: Gamejam'de çizim beceriniz ve zamanınız da bir kısıttır. Çizebileceğinizden daha karmaşık bir karakter tasarlamayın; basitliği bir kimliğe dönüştürün.",
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Oyuncu Karakteri",
        lead: "“Leke”nin fikir yazısında bir öğrenci vardı. Biçilmiş tasarımda oyuncu öğrenciyi değil, silgiyi yönetir. Karakteri yetenek setinden başlayarak tanımlayalım:",
        table: {
          head: ["Soru", "“Leke”nin silgisi"],
          rows: [
            ["Ne yapabiliyor?", "Parmağın gittiği yere gider ve değdiği mürekkebi siler. Tek eylem."],
            ["Neyi yapamıyor?", "Zıplamaz, saldırmaz, saklanmaz. Kısıt, telaş sütununu korur."],
            ["Kaynağı ne?", "Kendi boyu: her silişte küçülür. Karakterin görünüşü aynı zamanda can göstergesidir."],
            ["Kişiliği nereden gelir?", "Hareketinden: bastırınca yassılır, büyük leke silince sevinçle zıplar (3.1'deki juice)."],
          ],
        },
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Okunabilirlik",
        lead: "Oyuncu, karakterlere oyun sırasında, hızla ve çoğu zaman göz ucuyla bakar. Bir karakterin kim olduğu ve ne yapabildiği yarım saniyede anlaşılmıyorsa, tasarım ne kadar güzel olursa olsun oyunda işe yaramaz. Bu bölüm, karakteri okunur yapan üç aracı anlatır.",
      },
      {
        type: "concept",
        heading: "Siluet",
        image: {
          src: "assets/lesson/tf2-siniflar.jpg",
          caption: "Team Fortress 2 (2007): dokuz sınıfın her biri, içi siyaha boyansa bile gövde biçimi ve silahından tanınır.",
          credit: "Valve. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Valve'ın sanatçıları Team Fortress 2 için yazdıkları makalede (Mitchell, Francke ve Eng, 2007), dokuz sınıfın kalabalık bir çatışmada bile uzaktan ayırt edilmesi gerektiğini anlatır. Bunu sırayla üç katmanda çözdüler:",
        steps: [
          { label: "Takım", text: "Kırmızı ya da mavi: dost mu, düşman mı?" },
          { label: "Sınıf", text: "Siluet: iri Heavy, ince Scout, sırtında tüp taşıyan Pyro. Gövde biçimi rolü söyler." },
          { label: "Silah", text: "Silah gövdeden dışarı taşar, siluete eklenir: karakterin ne yapacağı uzaktan görülür." },
        ],
      },
      {
        type: "concept",
        heading: "Şekil Dili",
        image: {
          src: "assets/lesson/sonic-taslak.png",
          caption: "Naoto Ohshima'nın Sonic için ilk eskizleri (1990): geriye doğru sivri dikenler, durduğu yerde bile hızı anlatır.",
          credit: "Sega / Naoto Ohshima. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Animasyon geleneğinden gelen şekil dili (shape language), temel geometrik şekillerin izleyicide benzer çağrışımlar uyandırdığını söyler. Disney animatörü Tom Bancroft (Creating Characters with Personality, 2006) bunu karakter tasarımının temeli olarak anlatır:",
        terms: [
          { term: "Daire", def: "Yumuşak, dost, sevimli, zararsız. Kirby, Pac-Man." },
          { term: "Kare", def: "Sağlam, güçlü, güvenilir, ağır. TF2'nin Heavy'si, Minecraft'ın Steve'i." },
          { term: "Üçgen", def: "Hızlı, keskin, tehlikeli, dengesiz. Sonic'in dikenleri, kötü karakterlerin sivri hatları." },
        ],
        bullets: [
          "Bu çağrışımlar kural değil, beklentidir. Yuvarlak ama tehlikeli bir düşman, oyuncuyu bilerek şaşırtmak için kullanılabilir.",
        ],
      },
      {
        type: "concept",
        heading: "Renk ve Değer",
        lead: "Renk, karakteri hem arka plandan ayırır hem de rolünü söyler. Ama ayrımı asıl yapan renk tonu değil, değerdir.",
        terms: [
          { term: "Değer", en: "value", def: "Bir rengin ne kadar açık ya da koyu olduğu. Görüntü siyah-beyaza çevrildiğinde karakter hâlâ arka plandan ayrılıyorsa değer doğru seçilmiştir." },
          { term: "Kontrast", def: "Karakterle arka plan arasındaki fark. Oyuncu karakteri sahnenin en dikkat çeken öğesi olmalıdır." },
          { term: "İmza renk", def: "Karakterle özdeşleşen tek renk. Sonic'in mavisi Sega'nın logosundan alındı. Among Us'ta herkes aynı şekli taşıdığı için kimliği yalnızca renk belirler." },
        ],
        bullets: [
          "Renk tek başına bilgi taşımamalı: renk körü oyuncular için dost ve düşman şekille de ayrılmalı.",
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”yi Okunur Yapmak",
        lead: "“Okul defteri” sütunu her şeyi mavi tükenmez kalemle çizilmiş gibi gösteriyor. Bu, silgiyi öne çıkarmak için kolay bir fırsat:",
        table: {
          head: ["Araç", "Silgi (oyuncu)", "Mürekkep (düşman)"],
          rows: [
            ["Siluet", "Düzgün, yuvarlak köşeli dikdörtgen", "Düzensiz, akan, kenarları dağınık leke"],
            ["Şekil dili", "Yumuşak kare: güvenilir, dost", "Sivri damlalar: tehlikeli, yayılan"],
            ["Renk", "Sahnedeki tek sıcak renk: pembe", "Defterle aynı ailede: koyu mavi"],
            ["Değer", "Açık; beyaz kâğıtta bile kenar çizgisiyle ayrılır", "Koyu; kâğıtta en belirgin şey"],
          ],
        },
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Karakter ve Oyuncu",
        lead: "Oyuncu, karakteri yönetirken onunla bir ilişki kurar: kimi zaman karakterin kendisi olur, kimi zaman onu izleyen biri. Bu ilişkinin türü, karaktere ne kadar kişilik verileceğini belirler.",
      },
      {
        type: "concept",
        heading: "Üç Tür Oyuncu Karakteri",
        bridge: "Üç türün birer temsilcisini sıradaki sayfada yan yana görelim.",
        table: {
          head: ["Tür", "Nasıl çalışır?", "Örnek", "Bedeli"],
          rows: [
            ["Sessiz kahraman", "Karakter konuşmaz, yüzü az görünür; oyuncu kendini onun yerine koyar", "Link (Zelda), Gordon Freeman (Half-Life)", "Karakter oyuncunun boş kalıbıdır; kendi hikâyesi zayıftır"],
            ["Tanımlı karakter", "Adı, geçmişi, sesi ve kişiliği vardır; oyuncu onu yönetir ama o başka biridir", "Lara Croft, Kratos, Celeste'nin Madeline'i", "Güçlü hikâye ister: yazı, ses, ara sahne"],
            ["Özelleştirilebilir avatar", "Oyuncu görünüşü kendisi seçer", "Minecraft, Among Us, Mii", "Karakter bir kimlik taşımaz; kimliği oyuncu getirir"],
          ],
        },
        bullets: [
          "Gamejam'de tanımlı karakter, en pahalı seçenektir: kişiliğini anlatacak yazıya ve sahnelere zaman gerekir.",
        ],
      },
      {
        type: "gallery",
        heading: "Üç Tür, Üç Karakter",
        lead: "Önceki tablodaki üç türün farkı, karakterin nasıl çizildiğine de yansır:",
        gallery: [
          { src: "assets/lesson/gordon-freeman.png", caption: "Sessiz kahraman: Half-Life'ın Gordon Freeman'ı oyun boyunca tek kelime konuşmaz; oyuncu onu kendi gözünden, birinci şahıs kamerayla oynar.", credit: "Valve. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/lara-croft.png", caption: "Tanımlı karakter: Tomb Raider'ın (2013) Lara Croft'u kendi adı, geçmişi ve sesiyle bir kişidir.", credit: "Crystal Dynamics / Square Enix. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/mii.jpeg", caption: "Özelleştirilebilir avatar: Nintendo'nun Mii karakterleri bilerek sade çizildi; yüzü oyuncu kendisi kurar.", credit: "Nintendo. Kaynak: Wikipedia (adil kullanım)" },
        ],
        bridge: "Hangi türü seçerseniz seçin, karaktere kişilik vermenin en ucuz yolu yazı değil harekettir. Sıradaki sayfa bunu anlatıyor.",
      },
      {
        type: "concept",
        heading: "Kişilik Hareketle Anlatılır",
        lead: "Oyunda karakterin kişiliğini anlatmanın en ucuz yolu yazı değil, harekettir: nasıl yürüdüğü, nasıl düştüğü, beklerken ne yaptığı.",
        terms: [
          { term: "Bekleme animasyonu", en: "idle animation", def: "Oyuncu bir şey yapmadığında karakterin hareketi. Sonic the Hedgehog'da (1991) Sonic beklerken sabırsızca ayağını yere vurur: tek bir hareketle “ben hızlıyım, oyalanma” der." },
          { term: "Tepki", def: "Karakterin olaylara verdiği küçük yanıtlar: hasar alınca irkilmek, yükseklikten düşünce sendelemek." },
          { term: "Abartma", en: "exaggeration", def: "Animasyonun 12 ilkesinden biri. Hareket, gerçekte olduğundan büyük gösterilir ki küçük ekranda da okunsun." },
        ],
      },
      {
        type: "examples",
        heading: "Vaka: Thomas Was Alone",
        image: {
          src: "assets/lesson/thomas-was-alone.png",
          caption: "Thomas Was Alone (2012): karakterler yalnızca renkli dikdörtgenlerdir, ama oyuncular onları isimleriyle hatırlar.",
          credit: "Mike Bithell. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Mike Bithell'in oyununu tek kişi yaptı ve karakter çizmedi. Her karakter bir dikdörtgendir; kişiliğini yeteneği ve anlatıcının sözleri verir:",
        terms: [
          { term: "Thomas", def: "Orta boy, ortalama zıplama. Meraklı ve iyimser." },
          { term: "Chris", def: "Küçük ve kısa zıplıyor. Huysuz; kimseye ihtiyacı olmadığını düşünüyor." },
          { term: "John", def: "Uzun ve çok yükseğe zıplıyor. Gösterişi seviyor." },
          { term: "Claire", def: "Büyük ve ağır, ama suda yüzebilen tek kişi. Kendini süper kahraman sanıyor." },
        ],
        bullets: [
          "Ders: Yetenek seti kişiliğin kendisidir. Chris'in kısa zıplaması onu hem mekanik hem duygusal olarak başkalarına muhtaç kılar.",
        ],
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Düşmanlar",
        lead: "Düşman, oyuncunun karşısına çıkan, onun yeteneklerini sınayan karakterdir. İyi bir düşman yalnızca bir engel değil, oyuncuya sorulan bir sorudur: “Bu yeteneğini şu durumda kullanabilir misin?”",
      },
      {
        type: "concept",
        heading: "Her Düşman Bir Soru Sorar",
        lead: "Düşmanlar, oyuncu karakterinin yetenek setine göre tasarlanır. Super Mario Bros.'ta Mario'nun tek ana fiili zıplamaktır; her düşman bu fiile farklı bir soru sorar:",
        table: {
          head: ["Düşman", "Davranışı", "Sorduğu soru"],
          rows: [
            ["Goomba", "Yavaşça düz yürür", "Zıplayabiliyor musun?"],
            ["Koopa Troopa", "Basılınca kabuğuna girer; kabuk tekmelenebilir", "Düşmanı başka düşmanlara karşı silah olarak kullanabilir misin?"],
            ["Piranha Plant", "Borudan belirli aralıklarla çıkar", "Zamanlamayı bekleyebilir misin?"],
            ["Hammer Bro", "Yaylı bir yörüngeyle çekiç fırlatır", "Hem kaçıp hem saldırabilir misin?"],
          ],
        },
        bullets: [
          "Yeni bir düşman, yeni bir soru sormuyorsa yalnızca eskisinin farklı renklisidir. Gamejam'de bu, boşa harcanmış çizim süresidir.",
        ],
      },
      {
        type: "concept",
        heading: "Vaka: Pac-Man'in Hayaletleri",
        lead: "Toru Iwatani, dört hayaletin aynı şekilde kovalamasının oyunu bunaltıcı ve tek düze yapacağını fark etti. Her hayalete farklı bir davranış verdi; şekilleri aynı, renkleri ve kişilikleri farklıydı:",
        table: {
          head: ["Hayalet", "Davranışı"],
          rows: [
            ["Blinky (kırmızı)", "Doğrudan Pac-Man'in arkasından gelir; kovalayıcı."],
            ["Pinky (pembe)", "Pac-Man'in gittiği yönün birkaç kare önünü hedefler; pusucu."],
            ["Inky (mavi)", "Blinky'nin konumuna göre hedef seçer; tahmin edilmesi zor."],
            ["Clyde (turuncu)", "Uzaktayken kovalar, yaklaşınca köşesine kaçar; kararsız."],
          ],
        },
        bullets: [
          "Ders: Dört basit kural bir araya gelince karmaşık bir davranış oluşur. Oyuncu hayaletleri tanıdıkça onları birbirine karşı oynamayı öğrenir.",
        ],
      },
      {
        type: "concept",
        heading: "Adil Düşman: Telgraf",
        image: {
          src: "assets/lesson/kirby-yetenek.png",
          caption: "Kirby'nin kopyalama yeteneğinin şeması: düşmanı yutan Kirby, düşmanın yeteneğini alır. Düşman hem tehdit hem ödüldür.",
          credit: "FedericoMP, CC BY-SA 3.0. Kaynak: Wikimedia Commons",
        },
        lead: "Oyuncu, ne olacağını önceden görebildiği bir saldırıya yakalanırsa kendini suçlar ve tekrar dener. Habersiz bir saldırıya yakalanırsa oyunu suçlar.",
        terms: [
          { term: "Telgraf", en: "telegraphing", def: "Düşmanın saldırmadan önce verdiği açık işaret: geri çekilmek, parlamak, ses çıkarmak. Oyuncuya tepki verecek süre tanır." },
          { term: "Zayıf nokta", def: "Düşmanın oyuncu fiiline açık olduğu an ya da yer. Saldırıdan sonraki kısa duraksama en klasik zayıf noktadır." },
          { term: "Düşman ödül olarak", def: "Kirby'de düşman yutulunca yeni bir yetenek verir; Koopa'nın kabuğu silaha dönüşür. Düşman, oyuncuya bir şey kazandırınca kaçılacak değil, aranacak bir şey olur." },
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Düşmanları",
        lead: "“Leke”de düşmanlar mürekkep lekeleridir. Silginin tek fiili silmek; her düşman bu fiile farklı bir soru sormalı:",
        table: {
          head: ["Düşman", "Davranışı", "Telgraf", "Sorduğu soru"],
          rows: [
            ["Damla", "Küçük, yavaş yayılır", "Yok: zararsız başlangıç", "Silebiliyor musun?"],
            ["Mürekkep şişesi", "Devrilip büyük leke yapar", "Devrilmeden 1 saniye önce sallanır", "Hangisine önce gideceğini seçebiliyor musun?"],
            ["Sıçrayan leke", "Silinince iki küçük damlaya bölünür", "Kenarları titrer", "Silgini harcamaya değer mi?"],
          ],
        },
        bullets: [
          "Üçüncü düşman, silginin küçülme kuralıyla birleşir: bölünen leke, oyuncuya her silişin bir bedeli olduğunu hatırlatır. Yeni soru sormayan bir dördüncü düşman eklenmez.",
        ],
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Karakter Sayfası",
        lead: "Animasyon ve oyun stüdyolarında bir karakter onaylandığında karakter sayfası (model sheet) hazırlanır: karakterin önden, yandan ve arkadan çizimi (turnaround), boy oranları, ifadeleri ve renk kodları. Bu sayfa, karakteri farklı kişilerin her seferinde aynı biçimde çizmesini sağlar. Gamejam'de birden fazla kişi çiziyorsa tek sayfalık basit bir karakter sayfası, oyunun sonunda birbirine benzemeyen karakterlerle karşılaşmayı önler.",
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Oyuncu karakteri / avatar", en: "player character", def: "Oyuncunun oyun dünyasındaki temsilcisi." },
          { term: "Yetenek seti", en: "moveset", def: "Karakterin yapabildiği eylemlerin tamamı." },
          { term: "3C", def: "Karakter, kamera ve kontrolün birlikte tasarlanması." },
          { term: "Siluet", en: "silhouette", def: "Karakterin içi doldurulmuş dış hattı; okunabilirliğin ilk testi." },
          { term: "Şekil dili", en: "shape language", def: "Daire dost, kare sağlam, üçgen tehlikeli." },
          { term: "Değer", en: "value", def: "Rengin açıklığı ya da koyuluğu." },
          { term: "Sessiz kahraman / tanımlı / özelleştirilebilir", def: "Oyuncu ile karakter arasındaki üç ilişki türü." },
          { term: "Bekleme animasyonu", en: "idle animation", def: "Karakterin oyuncu bir şey yapmazken yaptığı hareket." },
          { term: "Telgraf", en: "telegraphing", def: "Düşmanın saldırıdan önce verdiği işaret." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Oyuncu karakterinizi önce yazıyla tanımlayın: “Leke” tablosundaki dört soruyu (ne yapabiliyor, neyi yapamıyor, kaynağı ne, kişiliği nereden geliyor) cevaplayın.",
          "Karakterinizi kâğıda çizin, sonra içini kurşun kalemle tamamen karartın. Siluet hâlâ ne yapabildiğini anlatıyor mu? Şekil dilinizi ve imza renginizi gerekçesiyle yazın (GDD madde 9, karakter kısmı).",
          "En fazla üç düşman ya da engel tasarlayın. Her biri için “Leke” tablosundaki gibi davranışını, telgrafını ve karakterinizin fiiline sorduğu soruyu yazın.",
          "Evde: siluetinizi ve düşman siluetlerinizi hiçbir açıklama yapmadan birine gösterin. Hangisinin oyuncu, hangisinin düşman olduğunu bilebiliyor mu? Bilemediyse şekil dilini değiştirin.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------
  // HAFTA 4.2 — Kaynaklar: Studio MDHR (Cuphead, 2017), Eric Barone
  // (Stardew Valley, 2016), Playdead (Limbo, 2010), ustwo / Ken Wong
  // (Monument Valley, 2014), Koji Kondo (Super Mario Bros. müziği, 1985),
  // Tomas Pettersson (sfxr, Ludum Dare 10, 2007).
  // ---------------------------------------------------------------------
  {
    id: "4.2",
    title: "Görsel Stil ve Ses",
    slides: [
      {
        type: "intro",
        heading: "Görsel Stil ve Ses",
        lead: "4.1'de karakterlerin okunur olması gerektiğini gördük. Şimdi bakışımızı bütün oyuna genişletiyoruz: karakterler, bölümler ve arayüz aynı dünyaya ait görünmeli ve duyulmalı. Bu ders, GDD'nin 9. maddesini, “Görsel Dünya”yı dolduracak kararları anlatır.",
        steps: [
          { label: "Görsel stil seçmek", text: "Stiller, maliyetleri ve seçim ölçütleri." },
          { label: "Okunabilirlik ve bütünlük", text: "Oyuncu neye bakacağını nasıl bilir? Parçalar nasıl aynı dünyaya ait görünür?" },
          { label: "Renk ve palet", text: "Renk uyumları, kısıtlı palet ve moodboard." },
          { label: "Ses", text: "Ses türleri, sesin taşıdığı bilgi ve gamejam kaynakları." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Görsel Stil Seçmek",
        lead: "Görsel stil, oyunun nasıl göründüğüne dair bütün kararların toplamıdır. Bu karar zevke bırakılmaz: stil, oyunun deneyim hedefine hizmet etmeli, hedef kitleye hitap etmeli ve ekibin elindeki zamanla bitirilebilmelidir.",
      },
      {
        type: "concept",
        heading: "Görsel Stil Nedir?",
        lead: "Bir oyunun bütün görselleri, aynı kurallara göre üretildiğinde bir stil oluşturur. Bu kuralları belirleyen ve herkesin onlara uymasını sağlayan işe sanat yönetimi denir.",
        terms: [
          { term: "Sanat stili", en: "art style", def: "Görsellerin ortak kuralları: çizgi, şekil, renk, ışık, doku, ayrıntı düzeyi." },
          { term: "Stilizasyon", def: "Gerçekliği bilerek sadeleştirmek ya da abartmak. Stilize oyunlar daha az ayrıntıyla daha çok şey anlatır ve yıllar geçtikçe eskimiş görünmez." },
          { term: "Sanat yönetimi", en: "art direction", def: "Stilin kurallarını koymak ve oyunun her parçasının bu kurallara uymasını sağlamak." },
        ],
      },
      {
        type: "concept",
        heading: "Stiller ve Maliyetleri",
        bridge: "Tablodaki ilk dört stili sıradaki sayfada yan yana görelim.",
        lead: "Her stilin bir üretim maliyeti vardır: bir karakteri, bir bölümü, bir animasyonu o stilde yapmak ne kadar sürer? Gamejam'de stil seçimi her şeyden önce bir zaman kararıdır.",
        table: {
          head: ["Stil", "Nasıl görünür?", "Örnek", "Üretim maliyeti"],
          rows: [
            ["Piksel sanat", "Görünür, büyük kare piksellerle çizim", "Celeste, Stardew Valley", "Düşük-orta: küçük boyutta hızlı, animasyonda emek ister"],
            ["Düz / vektör", "Düz renkli, sade geometrik şekiller", "Among Us, Monument Valley", "Düşük: şekiller kolay çizilir ve hareket ettirilir"],
            ["El çizimi", "Kâğıtta ya da tablette çizilmiş kareler", "Cuphead, Hollow Knight", "Yüksek: her animasyon karesi ayrı çizilir"],
            ["Low-poly 3D", "Az yüzeyli, keskin köşeli 3D modeller", "Superhot, Untitled Goose Game", "Orta: 3D bilgisi ister ama doku gerektirmez"],
            ["Gerçekçi 3D", "Fotoğrafa yakın modeller ve ışık", "The Last of Us", "Çok yüksek: büyük ekipler ve yıllar ister"],
          ],
        },
      },
      {
        type: "gallery",
        heading: "Dört Stil Yan Yana",
        lead: "Dört oyun, dört stil. Önceki tablodaki üretim maliyetini görsellerdeki ayrıntı miktarıyla karşılaştırın: hangisini 48 saatte bitirebilirdiniz?",
        gallery: [
          { src: "assets/lesson/celeste.png", caption: "Piksel sanat: Celeste (2018).", credit: "Maddy Makes Games, CC BY-SA 4.0. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/among-us.png", caption: "Düz / vektör: Among Us (2018).", credit: "Innersloth. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/hollow-knight.jpg", caption: "El çizimi: Hollow Knight (2017).", credit: "Team Cherry. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/superhot.jpg", caption: "Low-poly 3D: Superhot (2016).", credit: "SUPERHOT Team. Kaynak: Wikipedia (adil kullanım)" },
        ],
        bridge: "Maliyet farkını en uçtaki iki oyunla, Cuphead ve Stardew Valley ile daha yakından görelim.",
      },
      {
        type: "examples",
        heading: "Vaka: İki Uç",
        image: {
          src: "assets/lesson/cuphead.png",
          caption: "Cuphead (2017): 1930'ların çizgi filmleri gibi kâğıda elle çizilmiş kareler.",
          credit: "Studio MDHR. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Stil seçiminin maliyetini gösteren iki bağımsız oyun:",
        terms: [
          { term: "Cuphead", def: "Chad ve Jared Moldenhauer kardeşler, Fleischer stüdyosunun 1930'lardaki çizgi filmlerini taklit etmek için her animasyon karesini kâğıda elle çizdi. Oyun yedi yılda bitti; kardeşler stüdyoyu ayakta tutmak için evlerini ipotek ettirdi." },
          { term: "Stardew Valley", def: "Eric Barone oyunun kodunu, piksel sanatını ve müziğini tek başına, yaklaşık dört buçuk yılda yaptı. Küçük piksel boyutu, tek kişinin yüzlerce nesne ve karakter çizmesini mümkün kıldı." },
        ],
        bullets: [
          "Ders: İki stil de oyununa uygundu. Ama Cuphead'in stili, ekibinin zamanını yıllarca yuttu. Gamejam'de 48 saatiniz var.",
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke” İçin Stil Seçimi",
        lead: "2.2'deki mekanik seçimi gibi, aday stilleri ölçütlerle değerlendiriyoruz. Ölçütler: deneyim hedefi ve sütunlar (1.2), hedef kitle (2.1), ekibin becerisi ve süre.",
        table: {
          head: ["Aday", "Sütunlara uygun", "Hedef kitleye uygun", "Üretim", "Karar"],
          rows: [
            ["Piksel sanat", "Kısmen: defter hissi vermez", "Evet", "Orta", "Çıkar"],
            ["Gerçekçi defter fotoğrafı", "Evet", "Evet", "Animasyonu zor", "Çıkar"],
            ["Tükenmez kalem çizimi", "Evet: “okul defteri” sütununun kendisi", "Evet: tanıdık", "Kolay: tek renk çizgi", "Seç"],
          ],
        },
        bullets: [
          "Ucuz canlılık: aynı çizimi üç kez hafifçe farklı çizip sırayla göstermek, çizgilerin titreşmesini sağlar (line boil). Tek bir hareketsiz çizim bile canlı görünür.",
        ],
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Okunabilirlik ve Bütünlük",
        lead: "Güzel bir sahne, oyuncunun neye bakması gerektiğini söylemiyorsa oyunu zorlaştırır. Parçaları güzel ama birbirine benzemeyen bir oyun ise dağınık görünür. Bu bölüm, ekrandaki her şeyin hem okunur hem de aynı dünyaya ait olmasını anlatır.",
      },
      {
        type: "concept",
        heading: "Görsel Hiyerarşi",
        image: {
          src: "assets/lesson/limbo.jpg",
          caption: "Limbo (2010): oyun tamamen siyah, beyaz ve gri. Karakter ve tehlikeler en koyu değerde, arka plan sise gömülü.",
          credit: "Playdead. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Görsel hiyerarşi, ekrandaki öğelerin dikkat sırasıdır: oyuncu önce neyi, sonra neyi görmeli? Oyun ekranı genellikle katmanlara ayrılır:",
        terms: [
          { term: "Arka plan", def: "Atmosfer ve mekân. Düşük kontrast, soluk renk; oyuncunun gözünü çekmemeli." },
          { term: "Oynanış katmanı", def: "Oyuncunun dokunduğu, kaçtığı, topladığı her şey. En yüksek kontrast buradadır." },
          { term: "Ön plan", def: "Oyuncunun önünde kalan süs öğeleri. Seyrek kullanılır; oynanışı kapatmamalı." },
          { term: "Paralaks", en: "parallax", def: "Uzaktaki katmanların daha yavaş kayması. 2D oyuna derinlik hissi verir." },
        ],
      },
      {
        type: "concept",
        heading: "Görsel Bütünlük",
        lead: "Farklı kaynaklardan toplanan ya da farklı kişilerin çizdiği görseller yan yana gelince göz uyumsuzluğu hemen fark eder. Bütünlük için birkaç kuralın bütün oyunda aynı tutulması gerekir:",
        table: {
          head: ["Kural", "Bozulursa ne olur?"],
          rows: [
            ["Piksel boyutu", "Farklı ölçekte piksellerin aynı ekranda görünmesi (mixels) acemi işi gibi görünür."],
            ["Çizgi kalınlığı", "Kalın kenar çizgili karakter, ince çizgili dünyada yapıştırılmış gibi durur."],
            ["Işık yönü", "Gölgeler farklı yönlere düşerse nesneler aynı sahnede değilmiş gibi görünür."],
            ["Ayrıntı düzeyi", "Sade bir dünyada çok ayrıntılı tek bir nesne, önemli olmadığı hâlde dikkati çeker."],
            ["Perspektif", "Yandan görünüşlü dünyada üstten çizilmiş nesneler düz durur."],
          ],
        },
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Renk ve Palet",
        lead: "Renk, oyunun havasını oyuncu tek bir kelime okumadan belirler. Ama rastgele seçilmiş renkler birbiriyle çatışır ve önemli olanı gizler. Tasarımcılar bu yüzden oyuna başlamadan önce sınırlı bir renk paleti seçer ve ona bağlı kalır.",
      },
      {
        type: "concept",
        heading: "Rengin Üç Boyutu ve Uyumlar",
        image: {
          src: "assets/lesson/monument-valley.jpeg",
          caption: "Monument Valley (2014): turkuaz zemin üzerinde pembe ve krem yapılar. Tamamlayıcı renkler yapıyı arka plandan koparır.",
          credit: "ustwo games. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Her renk üç boyutla tarif edilir: ton (hue: kırmızı, mavi), doygunluk (saturation: canlı ya da soluk) ve 4.1'de gördüğümüz değer (value: açık ya da koyu). Renk çemberindeki konumlarına göre renkler arasında uyumlar kurulur:",
        terms: [
          { term: "Tamamlayıcı", en: "complementary", def: "Çemberde karşı karşıya duran renkler: mavi-turuncu, kırmızı-yeşil. Güçlü kontrast; önemli olanı öne çıkarır." },
          { term: "Komşu", en: "analogous", def: "Çemberde yan yana duran renkler. Sakin, bütünlüklü bir hava verir." },
          { term: "Sıcak / soğuk", def: "Kırmızı, turuncu, sarı öne çıkar ve enerji verir; mavi, yeşil, mor geri çekilir ve sakinleştirir." },
        ],
      },
      {
        type: "concept",
        heading: "Kısıtlı Palet",
        lead: "Kısıtlı palet (limited palette), oyunun bütün görsellerinin az sayıda, önceden seçilmiş renkle yapılmasıdır. Eski konsollarda bu donanımın zorunluluğuydu; bugün bütünlük için bilerek seçilir. İç mimarlıktan gelen 60-30-10 kuralı, renklerin ekrana nasıl dağıtılacağını söyler:",
        table: {
          head: ["Oran", "Görevi", "“Leke”de"],
          rows: [
            ["%60 ana renk", "Zemin; gözü dinlendirir", "Kâğıt beyazı ve açık mavi satır çizgileri"],
            ["%30 ikincil renk", "Dünyanın ve tehdidin rengi", "Tükenmez kalem mavisi: çizimler ve mürekkep lekeleri"],
            ["%10 vurgu rengi", "Oyuncunun bakması gereken şey", "Silgi pembesi: sahnedeki tek sıcak renk"],
          ],
        },
        bullets: [
          "Değer testi: ekran görüntüsünü siyah-beyaza çevirin. Silgi ve lekeler hâlâ kâğıttan ayrılıyorsa paletiniz okunurdur.",
        ],
      },
      {
        type: "concept",
        heading: "Moodboard",
        image: {
          src: "assets/lesson/moodboard.jpg",
          caption: "Bir tasarım stüdyosunun duvarındaki moodboard: çizimler, kumaş örnekleri, fotoğraflar ve renk kartları bir arada.",
          credit: "Aminabell, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Moodboard (ilham panosu), bir projenin görsel havasını tarif etmek için toplanan görsellerin bir araya getirildiği panodur. Ekipteki herkesin aynı şeyi hayal etmesini sağlar.",
        steps: [
          { label: "Topla", text: "Oyunlardan, filmlerden, fotoğraflardan ve gerçek nesnelerden 20-30 görsel. Sadece oyunlara bakmayın." },
          { label: "Ele", text: "Deneyim hedefinize uymayanları çıkarın; 8-12 görsel bırakın." },
          { label: "Ortak noktayı yaz", text: "Kalan görsellerin ortak özelliği ne? Çizgi, ışık, doku, ayrıntı düzeyi." },
          { label: "Paleti çıkar", text: "Görsellerden 3-5 renk seçin ve 60-30-10 ile dağıtın." },
        ],
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Ses",
        lead: "Oyuncular sesi çoğu zaman fark etmez, ama sesi kapatınca oyunun ne kadar boşaldığını hemen hisseder. Ses, oyunun havasını taşır, oyuncuya bilgi verir ve 3.1'deki juice'un yarısını oluşturur.",
      },
      {
        type: "concept",
        heading: "Oyunda Ses Türleri",
        table: {
          head: ["Tür", "Görevi", "Örnek"],
          rows: [
            ["Ses efekti (SFX)", "Anlık bir eyleme ya da olaya tepki verir; kısa ve nettir", "Zıplama, çarpışma, altın toplama"],
            ["Müzik", "Sahnenin genel duygusunu taşır, sürekli çalar", "Bölüm müziği, boss müziği"],
            ["Ortam sesi", "Mekânı gerçek hissettiren arka plan katmanı", "Rüzgâr, kalabalık uğultusu, su sesi"],
            ["Arayüz sesi", "Menüde ve HUD'da yapılan işlemleri onaylar", "Düğme tıklaması, puan sayacı"],
          ],
        },
        terms: [
          { term: "Diegetik ses", def: "Kaynağı oyun dünyasının içinde olan, karakterlerin de duyduğu ses: ayak sesi, oyundaki radyo. Arka plan müziği ise diegetik olmayan sestir; onu yalnızca oyuncu duyar." },
        ],
      },
      {
        type: "examples",
        heading: "Vaka: Koji Kondo ve Super Mario Bros.",
        image: {
          src: "assets/lesson/koji-kondo.jpg",
          caption: "Koji Kondo, Super Mario Bros. (1985) ve The Legend of Zelda'nın (1986) bestecisi.",
          credit: "Keith Mlynarski (atıf ile kullanım). Kaynak: Wikimedia Commons",
        },
        lead: "Koji Kondo, Super Mario Bros.'un ana temasını ekranı izlemeden değil, oyunun prototipini oynayarak besteledi. Müziği oynanışın bir parçası yapan üç karar:",
        terms: [
          { term: "Hareketin ritmi", def: "İlk denemesi yavaş bir melodiydi; Mario'nun koşma ve zıplama hızına uymadığı için atıldı. Son hâli, oyuncunun hareket ritmine göre yazıldı." },
          { term: "Kısa döngü", def: "Kartuşta az yer vardı. Melodiler kısa tutuldu ve tekrar ettikçe sıkmayacak şekilde kuruldu." },
          { term: "Müzik bilgi verir", def: "Süre 100'ün altına düşünce müzik hızlanır. Oyuncu sayaca bakmadan acele etmesi gerektiğini anlar." },
        ],
      },
      {
        type: "concept",
        heading: "Ses Bilgi Taşır",
        lead: "Ses yalnızca süs değildir; oyuncuya ekrana bakmadan bilgi verir. Her önemli olayın bir sesi olmalı, her sesin bir anlamı olmalıdır.",
        table: {
          head: ["İşlev", "Ne yapar?", "“Leke”de"],
          rows: [
            ["Geri bildirim", "Eylemin gerçekleştiğini onaylar", "Sürterken kâğıt hışırtısı, leke bitince kısa bir “çıt”"],
            ["Uyarı (telgraf)", "4.1'deki telgrafın sesli hâli", "Mürekkep şişesi devrilmeden önce cam tıngırtısı"],
            ["Ekran dışı bilgi", "Oyuncunun bakmadığı yerde olanı duyurur", "Şişenin sesi, devrildiği yönden gelir"],
            ["Durum", "Oyunun gidişatını sürekli hissettirir", "Sayfanın %40'ı kaplanınca müzik hızlanır"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Gamejam'de Görsel ve Ses Kaynakları",
        lead: "Gamejam'de her sesi kaydetmek, her müziği bestelemek gerekmez. Ücretsiz araçlar ve kütüphaneler serbestçe kullanılabilir; tek şart lisansa uymaktır.",
        table: {
          head: ["Kaynak", "Ne verir?"],
          rows: [
            ["sfxr / jsfxr", "Tek tıkla retro ses efekti üretir. Tomas Pettersson 2007'de Ludum Dare gamejam'inde katılımcılar için yaptı."],
            ["Freesound", "Kullanıcıların yüklediği yüz binlerce ses kaydı."],
            ["OpenGameArt, Kenney", "Oyunlar için hazırlanmış ücretsiz görsel, ses ve müzik paketleri."],
          ],
        },
        terms: [
          { term: "CC0", def: "Hiçbir koşul yok; isim vermeden de kullanılabilir." },
          { term: "CC BY", def: "Kullanılabilir, ama yapanın adı oyunun jeneriğinde ya da açıklamasında yazılmalıdır." },
        ],
        bullets: [
          "Jam'in kurallarını okuyun: bazı jam'ler hazır varlıkları yasaklar ya da beyan edilmesini ister.",
        ],
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Uyarlanabilir Müzik",
        lead: "Bazı oyunlarda müzik, oynanışa göre kendini değiştirir: uyarlanabilir müzik (adaptive music). İki yaygın teknik vardır. Dikey katmanlama (vertical layering): aynı parçanın davul, bas ve melodi gibi katmanları ayrı kaydedilir; tehlike arttıkça yeni katmanlar eklenir. Yatay sıralama (horizontal resequencing): müzik kısa parçalara bölünür ve oyunun durumuna göre bir sonraki parça seçilir. “Leke”de dikey katmanlama çok ucuzdur: sayfa doldukça müziğe yeni bir katman eklemek, telaşı müziğin kendisine taşır.",
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Sanat stili / sanat yönetimi", en: "art style / art direction", def: "Görsellerin ortak kuralları / bu kuralların korunması." },
          { term: "Stilizasyon", def: "Gerçekliği bilerek sadeleştirmek ya da abartmak." },
          { term: "Görsel hiyerarşi", def: "Ekrandaki öğelerin dikkat sırası." },
          { term: "Oynanış katmanı", def: "Oyuncunun etkileşime girdiği, en yüksek kontrastlı katman." },
          { term: "Ton / doygunluk / değer", en: "hue / saturation / value", def: "Rengin üç boyutu." },
          { term: "Tamamlayıcı / komşu renk", en: "complementary / analogous", def: "Renk çemberinde karşı / yan yana duran renkler." },
          { term: "Kısıtlı palet, 60-30-10", def: "Az sayıda renk; ana, ikincil ve vurgu rengi oranı." },
          { term: "Moodboard", def: "Görsel havayı tarif eden ilham panosu." },
          { term: "SFX / ortam sesi / diegetik ses", def: "Eylem sesi / mekân sesi / oyun dünyasının içinden gelen ses." },
          { term: "CC0 / CC BY", def: "Koşulsuz / isim vererek kullanılabilen lisans." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "En az üç aday stili “Leke” tablosundaki gibi sütunlarınıza, hedef kitlenize ve üretim maliyetine göre değerlendirin; birini seçin ve 2D mi 3D mi olduğunu yazın (GDD madde 9).",
          "8-12 görsellik bir moodboard hazırlayın (kâğıda yapıştırarak ya da dijital). Altına görsellerin ortak özelliğini bir cümleyle yazın.",
          "Moodboard'unuzdan 3 renk seçin ve 60-30-10 tablosuna yerleştirin: hangisi zemin, hangisi dünya, hangisi oyuncunun bakması gereken şey? (GDD madde 9)",
          "Oyununuzdaki dört önemli olay için “Ses Bilgi Taşır” tablosunu doldurun. Her ses için bir kaynak seçin (sfxr, Freesound ya da kendi kaydınız) ve lisansını not edin.",
          "Evde: sevdiğiniz bir oyunu 5 dakika sesli, 5 dakika sessiz oynayın. Sessizken hangi bilgiyi kaçırdınız? 2 cümle yazın.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------
  // HAFTA 5.1 — Kaynaklar: Don Norman (The Design of Everyday Things, 1988;
  // gözden geçirilmiş baskı 2013), Erik Fagerholt & Magnus Lorentzon (Beyond
  // the HUD, Chalmers, 2009), Visceral Games (Dead Space, 2008), Paul Fitts
  // (1954), Steven Hoober (How Do Users Really Hold Mobile Devices?, 2013),
  // Apple Human Interface Guidelines, George Fan (Plants vs. Zombies, GDC 2012).
  // ---------------------------------------------------------------------
  {
    id: "5.1",
    title: "Arayüz ve Kullanıcı Deneyimi",
    slides: [
      {
        type: "intro",
        heading: "Arayüz ve Kullanıcı Deneyimi",
        lead: "4.2'de oyunun nasıl göründüğüne ve duyulduğuna karar verdik. Bu derste oyunun oyuncuyla nasıl konuştuğuna bakıyoruz: oyuncu ne yapabileceğini nereden anlar, yaptığının sonucunu nasıl görür, kontrolleri nasıl öğrenir? Bu ders, GDD'nin 4. ve 5. maddelerini, “Oyuncu Ne Yapabilir?” ve “Kontroller”i dolduracak kararları anlatır.",
        steps: [
          { label: "Arayüz nedir?", text: "Arayüz, kullanıcı deneyimi ve oyuncu ile oyun arasındaki iki boşluk." },
          { label: "Bilgiyi nereye koymalı?", text: "Dört arayüz türü ve ekranda neyin gösterileceği." },
          { label: "Oyuncuyla konuşmak", text: "Olanak, işaret, geri bildirim ve dokunma hedefleri." },
          { label: "Kontroller ve öğretici", text: "Kontrol şeması ve oyuncunun kontrolleri nasıl öğrendiği." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Arayüz Nedir?",
        lead: "Oyuncu oyunun kurallarını göremez; yalnızca ekranda gördüğünü, duyduğunu ve elindeki kontrolü bilir. Arayüz, kuralların oyuncuya görünen yüzüdür. Kurallar ne kadar iyi olursa olsun, arayüz onları anlatamıyorsa oyuncu için o kurallar yoktur.",
      },
      {
        type: "concept",
        heading: "Arayüz ve Kullanıcı Deneyimi",
        lead: "İki terim sık karıştırılır. Arayüz oyuncunun gördüğü ve dokunduğu şeydir; kullanıcı deneyimi ise oyuncunun bunları kullanırken yaşadığı şeydir.",
        terms: [
          { term: "Arayüz", en: "user interface, UI", def: "Oyuncu ile oyun arasındaki bütün temas noktaları: menüler, düğmeler, göstergeler, yazılar, sesler, titreşim." },
          { term: "Kullanıcı deneyimi", en: "user experience, UX", def: "Oyuncunun oyunu anlamasının, kontrol etmesinin ve oyunda yolunu bulmasının ne kadar kolay olduğu. Arayüz güzel olup deneyim kötü olabilir." },
          { term: "HUD", en: "heads-up display", def: "Oyun sırasında ekranda sürekli duran göstergeler: can, puan, süre, mini harita. Adını savaş uçaklarında pilotun önündeki cama yansıtılan göstergelerden alır." },
          { term: "Menü", def: "Oyunun dışında kalan ekranlar: ana menü, ayarlar, duraklatma, oyun sonu." },
        ],
      },
      {
        type: "concept",
        heading: "Oyuncu ile Oyun Arasındaki İki Boşluk",
        lead: "Don Norman (The Design of Everyday Things, 1988), birinin bir aleti kullanırken iki boşluğu aşması gerektiğini söyler. Norman bunlara körfez (gulf) der. İyi arayüz iki körfezin üstüne köprü kurar.",
        table: {
          head: ["Körfez", "Oyuncunun sorusu", "Köprü kurulmazsa", "Köprü"],
          rows: [
            ["Yürütme körfezi", "Ne yapabilirim, nasıl yaparım?", "Oyuncu ekrana bakar ama ne yapacağını bilemez.", "Görünür seçenekler, tanıdık kontroller, öğretici"],
            ["Değerlendirme körfezi", "Yaptığım işe yaradı mı?", "Oyuncu düğmeye basar ama bir şey olup olmadığını anlayamaz.", "Anında ve açık geri bildirim: ses, animasyon, sayı"],
          ],
        },
        bullets: [
          "Bu dersin bundan sonraki her konusu, bu iki körfezden birine köprü kurmanın bir yoludur.",
        ],
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Bilgiyi Nereye Koymalı?",
        lead: "Oyuncu oynarken sürekli bilgiye ihtiyaç duyar: canı ne kadar, ne kadar süresi kaldı, nereye gitmeli? Bu bilginin ekranın köşesindeki bir sayıyla mı, karakterin üzerindeki bir ışıkla mı, yoksa oyun dünyasının içindeki bir nesneyle mi verileceği bir tasarım kararıdır.",
      },
      {
        type: "concept",
        heading: "Dört Arayüz Türü",
        image: {
          src: "assets/lesson/dead-space.jpg",
          caption: "Dead Space (2008): karakterin canı sırtındaki zırhta yanan bir çubuktur, mermisi silahın üzerinde belirir. Ekranda ayrı bir gösterge yoktur.",
          credit: "Visceral Games / Electronic Arts. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Erik Fagerholt ve Magnus Lorentzon (Beyond the HUD, 2009), arayüz öğelerini iki soruyla sınıflandırır: Öğe oyunun hikâyesinin içinde mi, yani karakter onu görebilir mi? Öğe oyunun mekânında mı duruyor, yoksa ekranın üstünde mi?",
        terms: [
          { term: "Diegetik", en: "diegetic", def: "Hem hikâyede hem mekânda. Karakter de görür: Dead Space'te sırttaki can çubuğu, bir yarış oyununda arabanın kendi hız göstergesi." },
          { term: "Diegetik olmayan", en: "non-diegetic", def: "Ne hikâyede ne mekânda. Yalnızca oyuncu görür: köşedeki puan, can kalpleri, mini harita." },
          { term: "Mekânsal", en: "spatial", def: "Mekânda ama hikâyede değil: karakterin başının üstündeki isim, yere çizilmiş yol oku." },
          { term: "Meta", def: "Hikâyede ama mekânda değil: hasar alınca ekranın kenarlarının kırmızıya dönmesi. Karakterin acısını oyuncunun ekranına taşır." },
        ],
        bridge: "Diegetik olmayan ve mekânsal arayüzün birer örneğini sıradaki sayfada görelim.",
      },
      {
        type: "gallery",
        heading: "Arayüz Türleri Ekranda",
        lead: "Önceki sayfadaki Dead Space, diegetik arayüzün en bilinen örneğidir. Çoğu oyun ise iki türü birlikte kullanır:",
        gallery: [
          { src: "assets/lesson/supertuxkart.png", caption: "Diegetik olmayan: SuperTuxKart'ta süre, tur, sıralama ve hız göstergesi ekranın köşelerinde durur; yalnızca oyuncu görür.", credit: "SuperTuxKart geliştirici ekibi, CC BY-SA 3.0. Kaynak: Wikipedia" },
          { src: "assets/lesson/sims-plumbob.jpg", caption: "Mekânsal: The Sims'te seçili karakterin başının üstünde dönen yeşil elmas (plumbob). Fotoğraftaki, bu göstergenin lamba olarak satılan hâli.", credit: "Dinosaur918, CC BY-SA 4.0. Kaynak: Wikimedia Commons" },
        ],
        bridge: "Tür seçmeden önce daha temel bir soru var: hangi bilgi ekranda olmalı? Sıradaki sayfa bunu anlatıyor.",
      },
      {
        type: "concept",
        heading: "Ekranda Ne Gösterilmeli?",
        lead: "Acemi tasarımcılar her bilgiyi ekrana koyar; sonuçta oyuncu hiçbirine bakmaz. Her bilgi için sorulacak soru: Oyuncu karar vermek için bu bilgiye şu anda ihtiyaç duyuyor mu?",
        table: {
          head: ["Bilgi türü", "Ne zaman gösterilir?", "Örnek"],
          rows: [
            ["Sürekli gereken", "Her an ekranda", "Can, kalan süre, mermi"],
            ["Değişince önemli", "Yalnızca değiştiği anda, kısa süre", "Yeni görev, kazanılan puan, seviye atlama"],
            ["İstenince gereken", "Oyuncu açtığında", "Harita, envanter, ayarlar"],
            ["Oyuncunun bilmesi gerekmeyen", "Hiç", "Düşmanın tam canı, zorluk ayarının iç değerleri"],
          ],
        },
        bullets: [
          "Önemli bilgiyi oyuncunun zaten baktığı yere yakın koyun. Oyuncu hızlı bir anda ekranın köşesine bakmaz; karakterine ve tehlikeye bakar.",
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Ekranı",
        lead: "“Leke”nin oyuncusu 60 saniye boyunca gözünü lekelerden ayıramaz. Bu yüzden bilgiyi olabildiğince oyun dünyasının içine, defter sayfasına taşıyoruz:",
        table: {
          head: ["Bilgi", "Ne zaman?", "Nasıl gösterilir?", "Tür"],
          rows: [
            ["Silginin kalan ömrü", "Sürekli", "Silginin kendi boyu: küçüldükçe ömrü azalır (4.1)", "Diegetik"],
            ["Sayfanın ne kadarı kaplandı", "Sürekli", "Sayfa kenarında mavi mürekkeple dolan bir çizgi", "Diegetik"],
            ["Kalan süre", "Sürekli", "Sayfanın üstünde, kalemle çizilmiş gibi kısalan bir çizgi", "Diegetik"],
            ["Kazanılan puan", "Değişince", "Silinen lekenin yerinde bir an beliren sayı", "Mekânsal"],
            ["Rekor", "Oyun sonunda", "Sonuç ekranında, önceki rekorla yan yana", "Menü"],
          ],
        },
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Oyuncuyla Konuşmak",
        lead: "Oyuncu bir şeyi kullanmadan önce onun ne işe yaradığını tahmin eder; kullandıktan sonra da işe yarayıp yaramadığına bakar. Bu bölüm, Norman'ın günlük eşyalar için önerdiği ilkeleri ve parmağın ekrandaki sınırlarını anlatır.",
      },
      {
        type: "concept",
        heading: "Olanak, İşaret ve Geri Bildirim",
        image: {
          src: "assets/lesson/kapi-itiniz.jpg",
          caption: "Japonya'da bir kapı. Üstteki levhada “itiniz” (おす) yazıyor, ama tutmak için yapılmış çubuk kollar “çek” diyor. Tasarımcılar böyle kapılara “Norman kapısı” der.",
          credit: "Ishikawa Ken, CC BY-SA 2.0. Kaynak: Wikimedia Commons",
        },
        lead: "Norman'a göre iyi tasarlanmış bir nesne, nasıl kullanılacağını kendisi söyler. Kapıda yazı gerekiyorsa tasarım başarısız olmuştur. Aynı ilkeler oyun arayüzü için de geçerlidir:",
        terms: [
          { term: "Olanak", en: "affordance", def: "Bir nesnenin kişiye sunduğu eylem. Düğme basmayı, kol çekmeyi, kenar tutunmayı sunar." },
          { term: "İşaret", en: "signifier", def: "Olanağın görünür ipucu: parlayan düğme, tutunulabilen kenarın beyaz boyası, 3.2'deki Mirror's Edge kırmızısı." },
          { term: "Geri bildirim", en: "feedback", def: "Eylemin sonucunun hemen gösterilmesi. 3.1'deki juice, geri bildirimin oyundaki adıdır." },
          { term: "Kısıt", en: "constraint", def: "Yanlış eylemi baştan imkânsız kılmak: kullanılamayan düğmenin soluklaşması." },
        ],
      },
      {
        type: "concept",
        heading: "Fitts Yasası ve Dokunma Hedefi",
        image: {
          src: "assets/lesson/fitts.jpg",
          caption: "Fitts'in deneyi: iki hedef arasındaki uzaklık (D) ve hedefin genişliği (W). Hedef küçüldükçe ve uzaklaştıkça ona ulaşmak uzar.",
          credit: "Mantury, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Psikolog Paul Fitts (1954), bir hedefe ulaşma süresinin iki şeye bağlı olduğunu ölçtü: hedefin uzaklığı ve büyüklüğü. Bu ilke, ekrandaki her düğmenin boyutunu ve yerini belirler:",
        terms: [
          { term: "Fitts yasası", en: "Fitts's law", def: "Büyük ve yakın hedefe hızlı, küçük ve uzak hedefe yavaş ulaşılır. Sık kullanılan düğme büyük ve yakın olmalıdır." },
          { term: "En küçük dokunma hedefi", def: "Apple'ın arayüz kılavuzu en az 44x44 nokta, Google'ın Material kılavuzu 48x48 dp önerir. Daha küçüğüne parmak ıskalayarak dokunur." },
          { term: "Başparmak bölgesi", def: "Steven Hoober'ın 2013'te 1.333 kişiyi gözlemlediği araştırmada telefonu kullananların yaklaşık yarısı tek eliyle tutuyordu. Ekranın alt-orta kısmına başparmak kolayca ulaşır; üst köşelere ulaşamaz." },
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”de Parmak ve Ekran",
        lead: "“Leke” tek parmakla oynanır (1.2'deki sütun). Bu, dokunmatik ekranın bütün sorunlarını oyunun merkezine taşır:",
        table: {
          head: ["Sorun", "Çözüm", "İlke"],
          rows: [
            ["Parmak, silgiyi ve sildiği lekeyi kapatıyor", "Silgi, parmağın biraz üstünde durur", "Geri bildirim görünür olmalı"],
            ["Oyuncu telaşla duraklatma düğmesine yanlışlıkla basıyor", "Düğme üst köşede: kolay ulaşılmaz, ama 44 noktadan küçük değil", "Fitts yasasını tersine kullanmak"],
            ["Oyun sonunda “Tekrar” düğmesi aranıyor", "Büyük düğme, ekranın alt-ortasında", "Başparmak bölgesi"],
            ["Silindiği anlaşılmayan leke", "Silinirken parçalanma, hışırtı ve hafif titreşim", "Değerlendirme körfezine köprü"],
          ],
        },
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Kontroller ve Öğretici",
        lead: "Oyuncu, oyunun ilk saniyelerinde iki şeyi öğrenmek zorundadır: hangi kontrolün ne yaptığını ve oyunun amacını. Bu bölüm, kontrollerin nasıl seçildiğini ve oyuncuya yazı yığını olmadan nasıl öğretildiğini anlatır.",
      },
      {
        type: "concept",
        heading: "Kontrol Şeması",
        lead: "Kontrol şeması (control scheme), her eylemin hangi tuşla, düğmeyle ya da dokunuşla yapıldığının listesidir. 2.1'deki doğal eşleme ilkesi burada somutlaşır: eylem ile hareket birbirine benzemelidir.",
        terms: [
          { term: "Gelenek", en: "convention", def: "Oyuncuların başka oyunlardan öğrendiği alışkanlık: PC'de WASD ile yürümek, boşlukla zıplamak, Esc ile duraklatmak. Geleneğe uyan kontrolü oyuncu öğrenmek zorunda kalmaz." },
          { term: "Az tuş, çok olasılık", def: "Her yeni tuş, öğrenilecek yeni bir şeydir. Gamejam oyunları için en fazla üç-dört temel eylem yeterlidir." },
          { term: "Yeniden atama", en: "remapping", def: "Oyuncunun tuşları kendisinin değiştirebilmesi. Sol elini kullananlar ve farklı klavye düzenleri için önemlidir." },
        ],
        bridge: "Geleneklerin donanımdan nasıl doğduğunu sıradaki sayfada görelim.",
      },
      {
        type: "gallery",
        heading: "Geleneğe Dönüşmüş Kontroller",
        lead: "Önceki sayfadaki gelenekler bir anda ortaya çıkmadı; donanımın sınırlarından ve milyonlarca oyuncunun alışkanlığından doğdu:",
        gallery: [
          { src: "assets/lesson/nes-kumanda.jpg", caption: "NES kumandası (1985): bir yön tuşu ve iki düğme. Super Mario Bros.'tan beri “A zıplar, B koşar” geleneği buradan gelir.", credit: "Evan-Amos, kamu malı. Kaynak: Wikimedia Commons" },
          { src: "assets/lesson/wasd.jpg", caption: "WASD: 1990'ların sonunda Quake oyuncularıyla yaygınlaştı. Sol el yürür, sağ el fareyle nişan alır.", credit: "Santeri Viinamäki, CC BY-SA 4.0. Kaynak: Wikimedia Commons" },
        ],
        bridge: "Gelenek oyuncunun neyi bildiğini söyler. Bilmediğini nasıl öğreteceğimizi sıradaki vaka gösteriyor.",
      },
      {
        type: "examples",
        heading: "Vaka: Plants vs. Zombies'in Öğreticisi",
        lead: "PopCap'ten George Fan, 2012'deki GDC konuşmasında Plants vs. Zombies'i (2009) hiç oyun oynamayan annesinin bile bitirebileceği biçimde nasıl tasarladığını anlattı. İlkelerinden bazıları:",
        terms: [
          { term: "Yaparak öğret", def: "İlk bölümde tek bir bitki ve tek bir sıra vardır. Oyuncu okumaz, ilk bitkiyi ekerek öğrenir." },
          { term: "Bir seferde bir şey", def: "Her bölüm tek bir yeni bitki ya da düşman tanıtır. 3.2'deki kishōtenketsu'nun “giriş” perdesi gibi." },
          { term: "Az yazı", def: "Ekrandaki ipucu yazıları birkaç kelimeyi geçmez ve yalnızca gerektiği anda görünür." },
          { term: "Öğretici oyunun içinde", def: "Ayrı bir “öğretici” bölümü yoktur; öğretim, oyunun ilk saatine dağıtılmıştır." },
        ],
      },
      {
        type: "concept",
        heading: "Öğretici Türleri",
        lead: "Öğretici (tutorial ya da onboarding), oyuncunun kontrolleri ve amacı öğrendiği bölümdür. Dört yaygın türü vardır; yukarıdan aşağıya doğru oyuncuyu daha az bölerler:",
        table: {
          head: ["Tür", "Nasıl çalışır?", "Örnek", "Sorunu"],
          rows: [
            ["Ön metin", "Oyun başlamadan kontroller yazıyla anlatılır", "Eski oyunların “Nasıl Oynanır?” ekranı", "Oyuncular okumaz, atlar"],
            ["Bağlamsal ipucu", "İpucu, eylem gerektiğinde ve tek sefer çıkar", "Kapıya yaklaşınca beliren “E: Aç”", "Fazlası ekranı doldurur"],
            ["Gösterim", "Hayalet bir el ya da animasyon hareketi gösterir", "Angry Birds'ün ilk bölümünde sapanı çeken el", "Karmaşık kontrolleri anlatamaz"],
            ["Güvenli alan", "Hatanın bedeli olmayan ilk bölüm", "Super Mario Bros. 1-1'in ilk ekranı (3.2)", "Tasarlaması en çok emek isteyen"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin İlk On Saniyesi ve Kontrol Şeması",
        lead: "“Leke” tek kontrolle oynanır; öğretilmesi gereken tek şey sürterek silmektir. Gösterim ile güvenli alanı birleştiriyoruz ve ekranda hiç yazı kullanmıyoruz:",
        steps: [
          { label: "0-3 sn", text: "Sayfada tek bir küçük damla ve onu sürterek silen yarı saydam bir el. Süre işlemiyor." },
          { label: "3-6 sn", text: "Oyuncu damlayı silince kırıntılar saçılır, “çıt” sesi gelir: ilk geri bildirim." },
          { label: "6-10 sn", text: "Süre çizgisi kısalmaya başlar ve ikinci damla belirir. Oyun başlamıştır; oyuncu öğretici bittiğini fark etmez." },
        ],
        table: {
          head: ["Eylem (GDD 4)", "Kontrol (GDD 5)"],
          rows: [
            ["Silmek: silgi değdiği mürekkebi siler, silgi küçülür", "Parmağı ekranda sürtmek"],
            ["Duraklatmak", "Sağ üst köşedeki düğmeye dokunmak"],
          ],
        },
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Ekran Akışı",
        lead: "Ekran akışı (screen flow), oyuncunun menüler ve oyun arasında hangi sırayla dolaştığını gösteren basit bir çizimdir: Açılış → Ana menü → Oyun → Sonuç → (Tekrar ya da Ana menü). Her ok, oyuncunun bir dokunuşudur. Gamejam'de jüri oyununuzu yalnızca birkaç dakika oynar; açılıştan oyuna ve sonuç ekranından yeni tura geçiş birer dokunuş olmalıdır. “Leke”de sonuç ekranındaki büyük “Tekrar” düğmesi, oyuncuyu doğrudan yeni bir sayfaya götürür.",
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Arayüz / kullanıcı deneyimi", en: "UI / UX", def: "Oyuncunun gördüğü ve dokunduğu / bunları kullanırken yaşadığı." },
          { term: "HUD", def: "Oyun sırasında ekranda sürekli duran göstergeler." },
          { term: "Yürütme / değerlendirme körfezi", def: "“Ne yapabilirim?” / “İşe yaradı mı?” boşlukları." },
          { term: "Diegetik / diegetik olmayan", def: "Karakterin de gördüğü / yalnızca oyuncunun gördüğü arayüz." },
          { term: "Mekânsal / meta", def: "Mekânda ama hikâyede değil / hikâyede ama mekânda değil." },
          { term: "Olanak / işaret", en: "affordance / signifier", def: "Nesnenin sunduğu eylem / bu eylemin görünür ipucu." },
          { term: "Fitts yasası", def: "Hedefe ulaşma süresi uzaklığa ve büyüklüğe bağlıdır." },
          { term: "Kontrol şeması / gelenek", def: "Eylem-kontrol listesi / oyuncuların alıştığı kontroller." },
          { term: "Öğretici", en: "tutorial / onboarding", def: "Oyuncunun kontrolleri ve amacı öğrendiği bölüm." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Oyuncunun 2-3 temel eylemini “Leke” tablosundaki gibi isim + ne yaptığı biçiminde yazın (GDD madde 4) ve her birinin hangi tuşla ya da dokunuşla yapıldığını gerekçesiyle belirtin (GDD madde 5).",
          "Oyununuzda oyuncunun bilmesi gereken bilgileri listeleyin. Her biri için “Ekranda Ne Gösterilmeli?” tablosundaki türü ve dört arayüz türünden hangisiyle gösterileceğini yazın.",
          "Oyun ekranınızı telefon ya da monitör oranında kâğıda çizin. Düğmeleri gerçek boyutlarında çizin ve başparmak bölgesini işaretleyin.",
          "Oyununuzun ilk on saniyesini “Leke” örneğindeki gibi saniye saniye yazın: oyuncu kontrolleri yazı okumadan nasıl öğrenecek?",
          "Evde: bilmediğiniz bir oyunu açın ve ilk iki dakikasını izleyerek oynayın. Oyun size ne öğretti, nasıl öğretti, nerede takıldınız? 3 cümle yazın.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------
  // HAFTA 5.2 — Kaynaklar: Marc LeBlanc (gömülü ve ortaya çıkan anlatı,
  // GDC 2000), Henry Jenkins (Game Design as Narrative Architecture, 2004),
  // Kenn Adams (hikâye omurgası, 1991), Don Carson (Environmental
  // Storytelling, 2000), Harvey Smith & Matthias Worch (GDC 2010), Clint
  // Hocking (Ludonarrative Dissonance in BioShock, 2007), Joseph Campbell
  // (Kahramanın Sonsuz Yolculuğu, 1949).
  // ---------------------------------------------------------------------
  {
    id: "5.2",
    title: "Hikâye ve Görev Tasarımı",
    slides: [
      {
        type: "intro",
        heading: "Hikâye ve Görev Tasarımı",
        lead: "5.1'de arayüzün oyuncuya ne yapacağını nasıl söylediğini gördük. Hikâye ise oyuncuya bunu neden yaptığını söyler. Bu ders, oyunlarda hikâyenin kitaplardan ve filmlerden nasıl farklı anlatıldığını ve oyuncuya hedefin görevlerle nasıl verildiğini anlatır. GDD'nin 3. maddesi, “Oyuncunun Amacı”, bu dersten çıkacak.",
        steps: [
          { label: "Oyunda hikâye nedir?", text: "Tasarımcının yazdığı hikâye ve oyuncunun yaşadığı hikâye." },
          { label: "Hikâyenin iskeleti", text: "Karakter, amaç, engel ve hikâye omurgası." },
          { label: "Dünyayla anlatmak", text: "Çevresel anlatım ve hikâye ile mekaniğin çatışması." },
          { label: "Görev tasarımı", text: "Görev türleri, iyi görevin ölçütleri ve gamejam'de hikâye bütçesi." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "Oyunda Hikâye Nedir?",
        lead: "Romanda okur, filmde izleyici hikâyeyi dışarıdan takip eder. Oyunda ise oyuncu hikâyenin içindedir: karar verir, hata yapar, başka bir yoldan gider. Bu yüzden oyun tasarımcısı hikâyeyi tek başına yazamaz; bir kısmını yazar, bir kısmının oyuncu tarafından yaşanmasına alan açar.",
      },
      {
        type: "concept",
        heading: "Gömülü ve Ortaya Çıkan Anlatı",
        lead: "Marc LeBlanc (GDC 2000), oyunlardaki hikâyeyi kimin yazdığına göre ikiye ayırır. Çoğu oyun ikisini farklı oranlarda karıştırır:",
        terms: [
          { term: "Gömülü anlatı", en: "embedded narrative", def: "Tasarımcının önceden yazıp oyuna yerleştirdiği hikâye: ara sahneler, diyaloglar, bulunan notlar. Her oyuncu aynı hikâyeyle karşılaşır." },
          { term: "Ortaya çıkan anlatı", en: "emergent narrative", def: "Kimsenin yazmadığı, kuralların ve oyuncuların etkileşiminden doğan hikâye. “Son saniyede kazandık”, “en yakın arkadaşım hain çıktı.”" },
        ],
        table: {
          head: ["Oyun", "Gömülü anlatı", "Ortaya çıkan anlatı"],
          rows: [
            ["The Last of Us", "Çok güçlü: senaryo, oyuncular, ara sahneler", "Az: çatışmaların nasıl geçtiği"],
            ["Among Us", "Neredeyse yok: bir uzay gemisi ve hainler", "Çok güçlü: her tur yeni bir şüphe ve ihanet hikâyesi"],
            ["Minecraft", "Çok az: ejderhayı yenmek isteğe bağlı", "Çok güçlü: oyuncunun inşa ettiği ve başına gelen her şey"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Jenkins'in Dört Anlatı Türü",
        image: {
          src: "assets/lesson/henry-jenkins.jpg",
          caption: "Henry Jenkins, medya araştırmacısı. 2004'te oyun tasarımcısını hikâye anlatıcısından çok bir “anlatı mimarı” olarak tanımladı.",
          credit: "Derzsi Elekes Andor, CC BY-SA 3.0. Kaynak: Wikimedia Commons",
        },
        lead: "Henry Jenkins (Game Design as Narrative Architecture, 2004), oyunların hikâyeyi mekân aracılığıyla anlattığını söyler ve dört yol tanımlar:",
        table: {
          head: ["Tür", "Nasıl çalışır?", "Örnek"],
          rows: [
            ["Çağrıştırıcı", "Oyuncunun zaten bildiği bir hikâyeyi ya da dünyayı hatırlatır", "Star Wars, Harry Potter oyunları"],
            ["Canlandırılan", "Hikâye, oyuncunun yaptığı eylemlerle ilerler", "Zelda'da tapınaktan tapınağa yolculuk"],
            ["Gömülü", "Hikâye mekâna saklanmıştır; oyuncu parçaları bulup birleştirir", "Gone Home, Hollow Knight"],
            ["Ortaya çıkan", "Mekân ve kurallar, oyuncunun kendi hikâyesini kurmasına izin verir", "The Sims, Minecraft"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Anlatısı",
        lead: "1.2'de “Leke”nin fikir yazısındaki canavar savaşını ve karakter geliştirmeyi kestik. Geriye kalan küçük oyun, hikâyeyi hangi yollarla anlatabilir?",
        table: {
          head: ["Tür", "Karar", "Neden?"],
          rows: [
            ["Çağrıştırıcı", "Kullan", "Herkes defterine karalama yapmış, mürekkep dökmüştür. Dünyayı anlatmaya gerek yok."],
            ["Ortaya çıkan", "Kullan", "Her tur kendi telaş hikâyesini üretir: “son saniyede şişeye yetiştim.”"],
            ["Gömülü", "Az kullan", "Sayfaların içeriği (bir matematik sorusu, bir harita, bir mektup) öğrencinin gününü ima eder."],
            ["Canlandırılan", "Kullanma", "Bölümler arasında yolculuk yok; 60 saniyelik turda ara sahneye yer yok."],
          ],
        },
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Hikâyenin İskeleti",
        lead: "Oyunun hikâyesi ne kadar küçük olursa olsun, oyuncunun “neden?” sorusuna cevap vermelidir. Bu bölüm, hikâyenin en küçük parçalarını ve bir hikâyeyi birkaç cümlede kurmanın yolunu anlatır.",
      },
      {
        type: "concept",
        heading: "Karakter, Amaç, Engel, Bedel",
        lead: "Hikâye anlatıcılığının temel kalıbı dört parçadan oluşur. Bunlardan biri eksikse hikâye yürümez; oyunda ise bu dört parça doğrudan tasarım kararlarına dönüşür:",
        table: {
          head: ["Parça", "Soru", "Oyunda neye dönüşür?"],
          rows: [
            ["Karakter", "Kim?", "Oyuncu karakteri ve yetenek seti (4.1)"],
            ["Amaç", "Ne istiyor?", "Kazanma koşulu ve uzun vadeli hedef (1.2, 2.2)"],
            ["Engel", "Onu ne durduruyor?", "Çatışma: düşmanlar, süre, bulmaca (4.1)"],
            ["Bedel", "Başaramazsa ne kaybeder?", "Kaybetmenin bedeli (2.2)"],
          ],
        },
        bullets: [
          "Oyunda bu dört parça zaten tasarlandı. Hikâye, onlara isim ve anlam vermektir: “zamanla yarışmak” yerine “zil çalmadan defteri kurtarmak.”",
        ],
      },
      {
        type: "concept",
        heading: "Hikâye Omurgası",
        lead: "Doğaçlama tiyatro yazarı Kenn Adams (1991), bir hikâyeyi birkaç cümlede kurmak için bir kalıp önerdi: hikâye omurgası (story spine). Pixar'ın senaryo ekibi de bu kalıbı kullanır. Cümlelerin başlangıçları sabittir; boşlukları siz doldurursunuz:",
        steps: [
          { label: "Bir zamanlar…", text: "Karakter ve dünya tanıtılır." },
          { label: "Her gün…", text: "Karakterin sıradan hayatı. Değişmeden önceki düzen." },
          { label: "Ama bir gün…", text: "Düzeni bozan olay. Oyunun başladığı an." },
          { label: "Bu yüzden…", text: "Olayın sonucu. Bu adım birkaç kez tekrarlanabilir: oyunun bölümleri." },
          { label: "Sonunda…", text: "Doruk noktası ve sonuç. Kazanmak ya da kaybetmek." },
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Hikâye Omurgası",
        lead: "“Leke”nin fikir yazısındaki dağınık hikâyeyi omurgaya döküyoruz. Her cümle, oyunda bir şeye karşılık gelmeli:",
        table: {
          head: ["Omurga", "“Leke”", "Oyundaki karşılığı"],
          rows: [
            ["Bir zamanlar…", "sıkıcı bir matematik dersinde bir öğrenci vardı.", "Açılış ekranı"],
            ["Her gün…", "defterinin kenarlarına karalamalar yapardı.", "Sayfaların tükenmez kalem çizimleri (4.2)"],
            ["Ama bir gün…", "dolma kaleminin mürekkebi canlandı.", "İlk damla (5.1'deki ilk on saniye)"],
            ["Bu yüzden…", "lekeler sayfadan sayfaya yayıldı ve öğrenci silgisine sarıldı.", "Dört sayfa, dört bölüm (3.2)"],
            ["Sonunda…", "zil çaldı.", "Kazanırsa temiz defter, kaybederse mürekkebe boğulmuş sayfa"],
          ],
        },
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "Dünyayla Anlatmak",
        lead: "Oyuncular uzun yazıları okumaz ve ara sahneleri atlar. Ama içinde dolaştıkları dünyaya dikkatle bakarlar. Bu bölüm, hikâyeyi yazı yerine mekânla anlatmayı ve hikâye ile mekaniğin birbirine ters düştüğü durumları anlatır.",
      },
      {
        type: "concept",
        heading: "Çevresel Anlatım",
        image: {
          src: "assets/lesson/edith-finch.jpg",
          caption: "What Remains of Edith Finch (2017): ailenin üst üste eklenerek büyümüş evi, ailenin tarihini anlatır. Yazılar bile mekânın içinde, havada durur.",
          credit: "Giant Sparrow. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Disney tema parklarında çalışmış tasarımcı Don Carson (2000), ziyaretçilerin bir mekâna bakarak orada ne olduğunu kendiliğinden tahmin ettiğini anlattı. Harvey Smith ve Matthias Worch (GDC 2010) bunu oyunlar için “Burada ne oldu?” sorusuyla özetler:",
        terms: [
          { term: "Çevresel anlatım", en: "environmental storytelling", def: "Hikâyeyi mekânın düzeniyle, nesnelerle ve izlerle anlatmak. Devrilmiş sandalye, yarım kalmış yemek, duvardaki pençe izi." },
          { term: "Oyuncunun çıkarımı", def: "Oyuncu parçaları kendisi birleştirir. Kendi çıkardığı hikâyeyi, kendisine anlatılan hikâyeden daha iyi hatırlar." },
          { term: "Ucuzluk", def: "Bir nesne yerleştirmek, bir ara sahne çekmekten çok daha ucuzdur. Gamejam için en verimli anlatım yolu budur." },
        ],
        bridge: "Neredeyse hiç konuşmadan hikâye anlatan üç oyunu sıradaki sayfada görelim.",
      },
      {
        type: "gallery",
        heading: "Mekânla Anlatan Oyunlar",
        lead: "Önceki sayfadaki “Burada ne oldu?” sorusu, bu üç oyunun anlatım biçimidir. Üçünde de hikâyenin büyük kısmını anlatıcı ya da ara sahne değil, mekân anlatır:",
        gallery: [
          { src: "assets/lesson/gone-home.png", caption: "Gone Home (2013): oyuncu boş bir aile evinde dolaşır; çekmecelerdeki notlar ve eşyalar ailenin hikâyesini anlatır.", credit: "The Fullbright Company, CC BY-SA 3.0. Kaynak: Wikipedia" },
          { src: "assets/lesson/limbo.jpg", caption: "Limbo (2010): tek bir kelime yoktur. Karanlık orman ve terk edilmiş şehir, çocuğun yalnızlığını anlatır.", credit: "Playdead. Kaynak: Wikipedia (adil kullanım)" },
          { src: "assets/lesson/journey.jpg", caption: "Journey (2012): uzaktaki dağ hem hedef hem hikâyedir. Kalıntılar, kaybolmuş bir uygarlığı ima eder.", credit: "thatgamecompany. Kaynak: Wikipedia (adil kullanım)" },
        ],
        bridge: "Mekân ve hikâye birbirini desteklediğinde oyun güçlenir. Birbirine ters düştüklerinde ne olduğunu sıradaki sayfa anlatıyor.",
      },
      {
        type: "concept",
        heading: "Ludonarratif Uyumsuzluk",
        image: {
          src: "assets/lesson/bioshock.jpg",
          caption: "BioShock (2007): oyun, oyuncuyu kendi çıkarı için güç toplamaya teşvik ederken hikâye ona seçenek vermeden başkasına yardım ettirir.",
          credit: "2K Games. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Tasarımcı Clint Hocking, 2007'de BioShock üzerine yazdığı yazıda, oyunun mekaniklerinin söylediği ile hikâyesinin söylediği birbirine ters düştüğünde oyuncunun oyundan koptuğunu anlattı. Buna ludonarratif uyumsuzluk der (Latince ludus: oyun).",
        terms: [
          { term: "Uyumsuzluk", def: "Hikâye karakteri barışçıl biri olarak anlatırken oyun, yüzlerce düşmanı öldürmeyi ödüllendirir. Oyuncu hangisine inanacağını bilemez." },
          { term: "Uyum", def: "Mekanik hikâyeyi anlatır. Papers, Please'te (1.2) pasaport kontrol etmek hem oyunun eylemi hem de hikâyenin kendisidir." },
        ],
        bullets: [
          "Test: hikâyenizin karakter hakkında söylediğini, oyuncunun o karakterle yaptığı eylemler de söylüyor mu?",
        ],
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Görev Tasarımı",
        lead: "Hikâye oyuncuya neden oynadığını söyler; görev ise şu an ne yapması gerektiğini. İyi tasarlanmış görevler, oyuncuyu kaybolmadan hikâyenin içinde ilerletir. Bu bölüm görevleri ve gamejam ölçeğinde hikâyeye ne kadar zaman ayrılacağını anlatır.",
      },
      {
        type: "concept",
        heading: "Görev ve Hedef Hiyerarşisi",
        lead: "Görev (quest ya da mission), oyuncuya verilen, başı ve sonu belli bir hedeftir. 1.2'deki kısa ve uzun vadeli hedefler, görevlerle birbirine bağlanır:",
        terms: [
          { term: "Hedef hiyerarşisi", def: "Uzun vadeli hedef orta boy görevlere, görevler de kısa adımlara bölünür. Oyuncu her an bir sonraki küçük adımı bilmelidir." },
          { term: "Ana görev", def: "Oyunun bitmesi için tamamlanması zorunlu olan görev zinciri." },
          { term: "Yan görev", def: "İsteğe bağlı görev. Keşfetmek ya da ustalaşmak isteyen oyuncuya ek hedef verir." },
          { term: "İlerleme göstergesi", def: "Görevin ne kadarının yapıldığını gösteren işaret: “3/5 toplandı”, dolan bir çubuk." },
        ],
      },
      {
        type: "concept",
        heading: "Görev Türleri ve Tuzakları",
        lead: "Görevlerin çoğu birkaç temel kalıptan türer. Her kalıbın, kötü kullanıldığında oyuncuyu sıkan bir tuzağı vardır:",
        table: {
          head: ["Tür", "Oyuncu ne yapar?", "Tuzağı"],
          rows: [
            ["Getir", "Bir nesneyi bulup bir yere götürür", "Anlamsız gidip gelme: “10 kurt postu getir.”"],
            ["Yok et", "Belirli düşmanları ya da bir boss'u yener", "Aynı düşmanı tekrar tekrar kesmek"],
            ["Koru / eşlik et", "Birini ya da bir şeyi güvenli bir yere ulaştırır", "Korunan karakter aptalca davranırsa oyuncu öfkelenir"],
            ["Ulaş / keşfet", "Haritada bir yeri bulur", "Yön verilmezse oyuncu kaybolur (3.2)"],
            ["Çöz", "Bir bulmacayı ya da gizemi çözer", "Tek bir doğru cevap ve hiç ipucu yoksa takılır"],
          ],
        },
        bullets: [
          "İyi görev, oyunun temel fiilini kullanır. Zıplama oyununda görev zıplayarak, silme oyununda silerek yapılmalıdır.",
        ],
      },
      {
        type: "concept",
        heading: "Gamejam'de Hikâye Bütçesi",
        image: {
          src: "assets/lesson/among-us.png",
          caption: "Among Us: hikâye tek cümledir (gemide hainler var), görevler ekranın köşesinde bir listedir. Gerisini oyuncular yaratır.",
          credit: "Innersloth. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Her anlatım aracının bir üretim maliyeti vardır. 48 saatlik bir oyunda hikâye, oynanıştan zaman çalmamalıdır:",
        table: {
          head: ["Araç", "Maliyet"],
          rows: [
            ["Tek cümlelik giriş ve sonuç ekranı", "Çok düşük"],
            ["Çevresel ipuçları: nesneler, mekânın düzeni", "Düşük"],
            ["Kısa yazılı notlar ya da diyalog kutuları", "Orta"],
            ["Ara sahne, animasyon", "Yüksek"],
            ["Dallanan diyaloglar, seslendirme", "Çok yüksek"],
          ],
        },
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Amacı ve Görevleri",
        lead: "“Leke”nin ana görevi tek cümleye sığar; yan görevler, ustalaşmak isteyen oyuncuya temel fiil üzerinden yeni hedefler verir:",
        quote: {
          text: "Oyuncunun amacı, defterin dört sayfasını birer dakika boyunca mürekkebin yarısını kaplamasına izin vermeden korumak ve zil çalana kadar defteri kurtarmaktır.",
          source: "“Leke”nin amacı (GDD madde 3)",
        },
        table: {
          head: ["Yan görev", "Kullandığı fiil", "Neyi ödüllendirir?"],
          rows: [
            ["Bir sayfayı silginin yarısı kalmışken bitir", "Silmek, idareli", "Verimli silmek"],
            ["Hiçbir şişenin devrilmesine izin verme", "Silmek, öncelikli", "Telgrafı okumak (4.1)"],
            ["Dördüncü sayfayı %10'un altında mürekkeple bitir", "Silmek, hızlı", "Ustalık"],
          ],
        },
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Kahramanın Yolculuğu",
        lead: "Mitoloji araştırmacısı Joseph Campbell (Kahramanın Sonsuz Yolculuğu, 1949), dünyanın dört bir yanındaki mitlerin ortak bir yapı taşıdığını öne sürdü: kahraman sıradan dünyasından ayrılır, sınavlardan geçer, büyük bir dönüşüm yaşar ve değişmiş olarak geri döner. Senaryo yazarı Christopher Vogler bu yapıyı Hollywood için on iki adıma böldü. Journey'nin yönetmeni Jenova Chen, oyunun yapısını bu yolculuğa göre kurduğunu anlatır: çölde başlayan oyuncu, dağın zirvesine doğru tırmanırken karla ve soğukla sınanır, sonunda ışığa ulaşır. Uzun oyunlar için güçlü bir iskelettir; gamejam ölçeğinde ise hikâye omurgası çoğu zaman yeterlidir.",
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Gömülü / ortaya çıkan anlatı", en: "embedded / emergent", def: "Tasarımcının yazdığı / kurallardan ve oyunculardan doğan hikâye." },
          { term: "Jenkins'in dört türü", def: "Çağrıştırıcı, canlandırılan, gömülü, ortaya çıkan." },
          { term: "Karakter, amaç, engel, bedel", def: "Hikâyenin dört temel parçası." },
          { term: "Hikâye omurgası", en: "story spine", def: "Bir zamanlar… Her gün… Ama bir gün… Bu yüzden… Sonunda…" },
          { term: "Çevresel anlatım", en: "environmental storytelling", def: "Hikâyeyi mekânla, nesnelerle ve izlerle anlatmak." },
          { term: "Ludonarratif uyumsuzluk", def: "Mekaniğin söylediği ile hikâyenin söylediğinin çatışması." },
          { term: "Hedef hiyerarşisi", def: "Uzun hedef, görevler ve kısa adımlar zinciri." },
          { term: "Ana / yan görev", def: "Zorunlu / isteğe bağlı görev." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Oyununuzun hikâye omurgasını beş cümleyle yazın ve “Leke” tablosundaki gibi her cümlenin oyunda neye karşılık geldiğini yanına not edin.",
          "Oyuncunun amacını tek cümleyle yazın: kazanmak ya da ilerlemek için ne yapmalı, başaramazsa ne olur? (GDD madde 3)",
          "Oyununuzun anlatısını Jenkins'in dört türüyle değerlendirin: hangisini kullanıyorsunuz, hangisini bilerek dışarıda bırakıyorsunuz?",
          "Hikâyenizi yazı kullanmadan anlatacak en az üç çevresel ipucu tasarlayın: bir nesne, bir iz, mekânın bir düzeni.",
          "En fazla üç yan görev tasarlayın. Her biri oyununuzun temel fiilini kullansın.",
          "Evde: oynadığınız bir oyunda hikâyenin söylediği ile sizin oyunda yaptıklarınız uyumlu mu? Bir örnekle 3 cümle yazın.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------
  // HAFTA 6.1 — Kaynaklar: Tom Hall (Doom Bible, 1992), Condor (Diablo
  // sunum belgesi, 1994), Scott Rogers (Level Up!, 2010: one-sheet,
  // ten-pager, GDD), Stone Librande (One-Page Designs, GDC 2010).
  // ---------------------------------------------------------------------
  {
    id: "6.1",
    title: "Oyun Tasarım Belgesi (GDD)",
    slides: [
      {
        type: "intro",
        heading: "Oyun Tasarım Belgesi",
        lead: "Beş haftadır her derste fikrinize bir parça ekleyip Tasarım Defteri'ne yazdınız: hedef kitle, mekanikler, zorluk eğrisi, bölüm haritası, karakter, stil, arayüz, hikâye. Bu derste bu parçaları tek bir belgede, oyun tasarım belgesinde (GDD) toplamayı öğreniyoruz. 7. haftada kendi GDD'nizi yazacaksınız.",
        steps: [
          { label: "GDD nedir?", text: "Belgenin görevi ve iki tarihî örnek." },
          { label: "Belgenin biçimleri", text: "Tek sayfadan yüz sayfaya: hangi uzunluk ne zaman?" },
          { label: "İyi GDD nasıl yazılır?", text: "Yazım ilkeleri ve kararların gerekçesi." },
          { label: "Defterden GDD'ye", text: "Ödevlerinizin GDD'nin hangi maddesine dönüştüğü." },
        ],
      },

      // --- Bölüm 1 ---
      {
        type: "section",
        heading: "GDD Nedir?",
        lead: "Bir oyunu bir kişi bile yapsa, onu haftalar boyunca aklında aynı biçimde tutamaz. Ekip büyüdükçe sorun da büyür: her üye oyunu biraz farklı hayal eder. GDD, oyunun tek bir yerde yazılı hâlidir.",
      },
      {
        type: "concept",
        heading: "Oyun Tasarım Belgesi",
        lead: "Oyun tasarım belgesi (game design document, GDD), bir oyunun ne olduğunu, nasıl oynandığını ve neden böyle tasarlandığını anlatan belgedir.",
        terms: [
          { term: "Ortak hafıza", def: "Ekipteki herkes aynı belgeye bakar. Programcı, sanatçı ve ses tasarımcısı aynı oyunu yapar." },
          { term: "Yaşayan belge", en: "living document", def: "GDD bir kez yazılıp kenara konmaz. Oyun test edildikçe değişir; belge de onunla birlikte güncellenir." },
          { term: "Karar kaydı", def: "Belge yalnızca neyin yapılacağını değil, neden öyle karar verildiğini de yazar. Gerekçe yazılmazsa aynı tartışma her hafta yeniden yapılır." },
        ],
        table: {
          head: ["GDD olmadan", "Sonuç"],
          rows: [
            ["Programcı hızlı bir koşu oyunu kodlar, sanatçı sakin ve yavaş bir dünya çizer", "İkisi de iyi iş çıkarmıştır ama parçalar birbirini tutmaz"],
            ["Biri yeni bir özellik ekler, kimseye söylemez", "Diğerleri onu hata sanar ve siler"],
          ],
        },
      },
      {
        type: "examples",
        heading: "Vaka: Doom İncili",
        image: {
          src: "assets/lesson/tom-hall.jpg",
          caption: "Tom Hall, id Software'in kurucu tasarımcılarından. 1992'de Doom için ayrıntılı bir tasarım belgesi yazdı.",
          credit: "Cmcurly, CC BY-SA 4.0. Kaynak: Wikimedia Commons",
        },
        lead: "Tom Hall, Doom'un (1993) yapımına başlarken “Doom İncili” (Doom Bible) adını verdiği uzun bir belge yazdı: karakterler, bölüm bölüm bir hikâye, ayrıntılı bir dünya.",
        terms: [
          { term: "Ne oldu?", def: "Ekibin geri kalanı, özellikle programcı John Carmack, hızlı ve yalın bir aksiyon oyunu istiyordu. Prototipler geliştikçe oyun belgeden uzaklaştı; belge güncellenmedi." },
          { term: "Sonuç", def: "Belgenin büyük kısmı kullanılmadı. Hall, Doom bitmeden 1993'te şirketten ayrıldı." },
        ],
        bullets: [
          "Ders: Belge oyunu takip etmezse kimse onu okumaz. Ayrıntılı ama güncellenmeyen belge, hiç olmayan belgeden daha çok zaman harcatır.",
        ],
        bridge: "Bunun tersi bir örnek: belgesi oyunla birlikte değişen bir oyun.",
      },
      {
        type: "examples",
        heading: "Vaka: Diablo'nun Sunum Belgesi",
        image: {
          src: "assets/lesson/diablo.jpg",
          caption: "Diablo (1996): sunum belgesinde sıra tabanlı olarak tarif edilen oyun, gerçek zamanlı olarak çıktı.",
          credit: "Blizzard North. Kaynak: Wikipedia (adil kullanım)",
        },
        lead: "Condor stüdyosu (sonradan Blizzard North), 1994'te Diablo'yu yayıncılara kısa bir sunum belgesiyle anlattı. Belge oyunun özünü birkaç sayfada veriyordu: rastgele üretilen zindanlar, karakter sınıfları, ganimet.",
        terms: [
          { term: "Büyük değişiklik", def: "Belgede oyun sıra tabanlıydı: oyuncu bir adım atar, sonra canavarlar hareket eder. Blizzard oyunun gerçek zamanlı olmasını önerdi; ekip denedi ve oyun bambaşka hissettirdi." },
          { term: "Sonuç", def: "Mekanik değişti ama belgenin anlattığı öz, yani rastgele zindanlar ve ganimet, korundu. Belge değişikliği yön verdi." },
        ],
        bullets: [
          "Ders: İyi belge her ayrıntıyı sabitlemez; değişmemesi gereken özü (1.2'deki tasarım sütunları) açıkça söyler.",
        ],
      },

      // --- Bölüm 2 ---
      {
        type: "section",
        heading: "Belgenin Biçimleri",
        lead: "Her belge aynı uzunlukta olmaz. Bir yayıncıya fikir anlatırken tek sayfa yeterlidir; yüz kişilik bir ekibin oyunu yapabilmesi için yüzlerce sayfa gerekebilir. Doğru uzunluk, belgeyi kimin, ne zaman okuyacağına bağlıdır.",
      },
      {
        type: "concept",
        heading: "Üç Uzunluk",
        lead: "Oyun tasarımcısı Scott Rogers (Level Up!, 2010), oyun geliştikçe büyüyen üç belge tarif eder:",
        table: {
          head: ["Belge", "Kim okur?", "Ne zaman?", "İçinde ne var?"],
          rows: [
            ["Tek sayfa", "Öğretmen, jüri, yayıncı", "Fikir aşamasında", "İsim, tür, yüksek konsept, hedef kitle, platform, kanca"],
            ["On sayfa", "Ekip ve yatırımcı", "Ön üretimde", "Oyunun akışı, mekanikler, karakter, dünya, kontroller, para kazanma"],
            ["Tam GDD", "Bütün ekip", "Üretim boyunca", "Her mekanik, bölüm, düşman, ekran ve ses ayrıntılı olarak"],
          ],
        },
        bullets: [
          "Gamejam'de tek sayfa ile on sayfa arası yeterlidir. 7. haftadaki 10 maddelik şablonumuz bu ölçektedir.",
        ],
        bridge: "Tam bir GDD'nin ne kadar büyüdüğünü sıradaki sayfada, gerçek bir içindekiler sayfasında görelim.",
      },
      {
        type: "concept",
        heading: "Tam Bir GDD'nin İçindekiler Sayfası",
        image: {
          src: "assets/lesson/gdd-ornek.jpg",
          caption: "“Iron Sand: Heart of Darkness” adlı oyunun tasarım belgesinin içindekiler sayfası.",
          credit: "Screen Log, CC BY-SA 4.0. Kaynak: Wikipedia",
        },
        lead: "Önceki tablodaki “tam GDD”, onlarca başlıktan oluşur. Sağdaki belgenin ana bölümleri ve altlarındaki başlıklardan bazıları:",
        terms: [
          { term: "Pazarlama", def: "Çıkış tarihi, tür, benzer oyunlar, yüksek konsept, rakip analizi, sistem gereksinimleri." },
          { term: "Oynanış", def: "Etkileşimler, ortamlar, görevler, hedefler, çok oyunculu mod." },
          { term: "Oyun akışı", def: "Açılış ekranları, ara sahneler, menüler, haritalar." },
          { term: "Hikâye", def: "Birinci, ikinci ve üçüncü perde, final." },
        ],
        bullets: [
          "Bizim 10 maddemiz, bu başlıkların en temel olanlarıdır: “Pazarlama”dan isim, tür ve yüksek konsept; “Oynanış”tan amaç, eylemler, döngü.",
        ],
        bridge: "Uzun belgeyi kimse baştan sona okumaz. Bir tasarımcı bu yüzden belgeyi tek sayfaya sığdırmayı önerdi.",
      },
      {
        type: "concept",
        heading: "Tek Sayfa Tasarım",
        lead: "SimCity ve Spore üzerinde çalışmış tasarımcı Stone Librande, GDC 2010'daki konuşmasında uzun belgelerin okunmadığını, ama duvara asılan tek sayfalık görsel belgelerin ekip tarafından sürekli kullanıldığını anlattı. Tek sayfa tasarımın ilkeleri:",
        terms: [
          { term: "Görsel ağırlıklı", def: "Paragraf yerine ekran çizimi, harita, akış şeması; yanlarında oklarla kısa notlar." },
          { term: "Tek konu", def: "Her sayfa bir şeyi anlatır: bütün oyun, bir bölüm, bir düşman ya da bir ekran." },
          { term: "Duvara asılır", def: "Büyük kâğıda basılır ve ekibin görebileceği bir yere asılır. Herkes geçerken bakar, üzerine not alır." },
          { term: "Kolay güncellenir", def: "Değişen bir şey olduğunda sayfa yeniden çizilir; uzun belgede bir paragrafı bulmaktan daha hızlıdır." },
        ],
      },

      // --- Bölüm 3 ---
      {
        type: "section",
        heading: "İyi GDD Nasıl Yazılır?",
        lead: "GDD bir kompozisyon değil, bir kullanım kılavuzudur. Okuyan kişi, belgeye bakarak oyunun bir parçasını yapabilmelidir. Bu bölüm, belgeyi okunur ve kullanışlı yapan yazım ilkelerini anlatır.",
      },
      {
        type: "concept",
        heading: "Yazım İlkeleri",
        lead: "Her ilkeyi “Leke”den bir örnekle görelim:",
        table: {
          head: ["İlke", "Kötü", "İyi"],
          rows: [
            ["Kısa ve net", "Oyunumuzda oyuncu, sıkıcı bir derste defterine mürekkep dökülen bir öğrencinin silgisi olarak…", "Oyuncu: parmağıyla sürterek mürekkep lekelerini siler."],
            ["Ölçülebilir", "Lekeler hızlıca yayılır.", "Her leke saniyede kendi boyunun %10'u kadar büyür."],
            ["Görsel", "Ekranın üstünde süre, kenarında doluluk var.", "Ekran çizimi, üzerinde oklarla “süre çizgisi”, “doluluk çizgisi” notları."],
            ["Gerekçeli", "Silgi küçülür.", "Silgi her silişte küçülür; çünkü telaş sütunu her silişin bir bedeli olmasını ister."],
          ],
        },
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Değişiklik Kaydı",
        lead: "Yaşayan belgenin en önemli parçası değişiklik kaydıdır (changelog): ne, ne zaman ve neden değişti? “Leke”nin bu kurstaki yolculuğu, aslında bir değişiklik kaydıdır:",
        table: {
          head: ["Ders", "Değişiklik", "Neden?"],
          rows: [
            ["1.2", "Dev canavar savaşı ve karakter geliştirme çıkarıldı", "Kapsam; telaş sütununu bölüyordu"],
            ["2.1", "Platform: dokunmatik telefon", "Temel fiil (silmek) parmakla doğal eşleşiyor"],
            ["2.2", "Mürekkep şişesi yan mekanik olarak eklendi", "Çekirdeğe bağlı, telaşı artırıyor"],
            ["3.2", "Tek sayfa yerine dört sayfa", "Kishōtenketsu ile mekaniği adım adım öğretmek"],
            ["4.1", "Sıçrayan leke eklendi", "Silgi küçülme kuralıyla birleşen yeni bir soru"],
            ["5.1", "Silgi parmağın biraz üstüne taşındı", "Parmak, silinen lekeyi kapatıyordu"],
          ],
        },
      },

      // --- Bölüm 4 ---
      {
        type: "section",
        heading: "Defterden GDD'ye",
        lead: "GDD'nizin büyük kısmı zaten yazıldı: her ödev, şablonun bir maddesine karşılık geliyordu. Bu bölüm, hangi ödevin nereye gideceğini ve eksiklerin nasıl bulunacağını gösteriyor.",
      },
      {
        type: "concept",
        heading: "On Madde ve Kaynakları",
        lead: "7. haftadaki şablonun on maddesi ve Tasarım Defteri'nizdeki karşılıkları:",
        table: {
          head: ["GDD maddesi", "Defterdeki kaynağı"],
          rows: [
            ["1. Oyun adı ve türü", "1.2: tür ve isim"],
            ["2. Oyun fikri", "1.2: yüksek konsept ve kanca"],
            ["3. Oyuncunun amacı", "5.2: amaç cümlesi"],
            ["4. Oyuncu ne yapabilir?", "5.1: temel eylemler"],
            ["5. Kontroller", "5.1: kontrol şeması"],
            ["6. Oyun döngüsü", "2.2: çekirdek döngü"],
            ["7. Kazanma ve kaybetme", "2.2: hedef türü ve kaybetmenin bedeli"],
            ["8. Oyuncu ve duygu", "2.1: persona"],
            ["9. Görsel dünya", "4.1: karakter; 4.2: stil, palet, moodboard"],
            ["10. Ödüller ve ek özellikler", "3.1: ödüller ve motivasyon"],
          ],
        },
        bullets: [
          "Şablonda ayrı maddesi olmayan ödevler (3.2 bölüm haritası, 4.1 düşmanlar, 5.2 hikâye omurgası) GDD'nin sonuna ek olarak konur.",
        ],
      },
      {
        type: "concept",
        heading: "Örnek: “Leke”nin Tek Sayfası",
        lead: "“Leke”nin bütününü Librande'nin yöntemiyle tek bir A4 sayfaya yerleştiriyoruz. Sayfanın ortasında oyun ekranının çizimi durur; her şey ona bağlanır:",
        table: {
          head: ["Sayfadaki yer", "İçerik"],
          rows: [
            ["Üst şerit", "İsim, tür ve yüksek konsept: “Leke, tek parmakla oynanan bir refleks oyunudur…”"],
            ["Orta", "Telefon ekranının çizimi: silgi, lekeler, şişe, süre ve doluluk çizgileri"],
            ["Ekranın çevresi", "Oklarla notlar: “silgi her silişte küçülür”, “şişe devrilmeden önce sallanır”"],
            ["Sol sütun", "Üç sütun (telaş, tek parmak, okul defteri) ve persona"],
            ["Sağ sütun", "Dört sayfanın küçük çizimleri ve kishōtenketsu perdeleri"],
            ["Alt şerit", "Çekirdek döngü: sil → silgi küçülür → yeni leke → sil"],
          ],
        },
      },

      // --- Ek bilgi ---
      {
        type: "extra",
        heading: "Gelir Modelleri",
        lead: "Yayınlanacak bir oyunun nasıl para kazanacağı da tasarımı etkiler. Gamejam'de zorunlu değildir, ama “bu oyun gerçek olsaydı nasıl gelir kazanırdı?” sorusu, tasarımın neyi ödüllendirdiğini netleştirir.",
        table: {
          head: ["Model", "Nasıl çalışır?", "Tasarıma etkisi"],
          rows: [
            ["Tek seferlik satın alma", "Oyun bir kez satın alınır", "Tasarım yalnızca oyunun kendisine odaklanır"],
            ["Ücretsiz + reklam", "Oyun bedava, aralarda reklam gösterilir", "Kısa turlar ve sık yeniden başlama teşvik edilir"],
            ["Oyun içi satın alma", "Kozmetik ya da zaman kazandıran ürünler satılır", "Ödül ve ilerleme hızı satışa göre ayarlanma riski taşır"],
            ["Ganimet kutusu", "İçeriği rastgele paketler satılır", "Kumara benzediği için birçok ülkede düzenleniyor (3.1)"],
          ],
        },
      },

      {
        type: "summary",
        heading: "Terim Sözlüğü",
        terms: [
          { term: "Oyun tasarım belgesi", en: "game design document, GDD", def: "Oyunun ne olduğunu, nasıl oynandığını ve neden böyle tasarlandığını anlatan belge." },
          { term: "Yaşayan belge", en: "living document", def: "Oyun değiştikçe güncellenen belge." },
          { term: "Karar kaydı", def: "Kararın yanında gerekçesinin de yazılması." },
          { term: "Değişiklik kaydı", en: "changelog", def: "Ne, ne zaman ve neden değişti listesi." },
          { term: "Tek sayfa / on sayfa / tam GDD", def: "Fikir, ön üretim ve üretim aşamalarının belgeleri." },
          { term: "Tek sayfa tasarım", en: "one-page design", def: "Duvara asılan, görsel ağırlıklı tek konulu belge." },
          { term: "Sunum belgesi", en: "pitch document", def: "Oyunu yayıncıya ya da jüriye anlatan kısa belge." },
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Tasarım Defteri'nizi baştan sona okuyun. Oyununuz haftalar içinde değiştiyse eski cevapları güncelleyin.",
          "Oyununuzun değişiklik kaydını “Leke” tablosundaki gibi yazın: fikriniz hangi derste nasıl değişti ve neden?",
          "“On Madde ve Kaynakları” tablosuna bakarak 10 maddeden hangilerinin boş ya da eski olduğunu listeleyin; 7. haftada önce onları dolduracağız.",
          "Oyununuzun tek sayfa tasarımını A4 ya da A3 kâğıda çizin: ortada oyun ekranı, çevresinde oklarla notlar.",
          "Evde: tek sayfanızı oyunu hiç bilmeyen birine gösterin. Bir dakika içinde oyunun nasıl oynandığını anlayabiliyor mu? Anlamadığı yeri sayfada düzeltin.",
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
