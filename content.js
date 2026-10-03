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
