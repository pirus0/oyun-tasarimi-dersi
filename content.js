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
          "Bir tasarım dersi: fikir üretecek, kural yazacak, çizecek, arkadaşlarınıza oynatıp düzelteceksiniz.",
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
          "Arkadaşlarınıza en az bir kez oynatılmış bir kâğıt prototip.",
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
          "Ödev: kendi oyununuza bir parça ekliyorsunuz. 7. haftada bu parçalar birleşip GDD'niz oluyor.",
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

  {
    id: "1.1",
    title: "Oyun Tasarımına Giriş",
    slides: [
      {
        type: "intro",
        heading: "Bu Hafta",
        bullets: [
          "Oyun nedir, oyunu oyun yapan ne?",
          "Bir oyun ekibinde kim ne yapar?",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Nedir?",
        bullets: [
          "Oyunun dört parçası var: bir hedef, onu zorlaştıran kurallar, oyuncunun kendi seçimleri ve bu seçimlerin sonucunu gösteren geri bildirim.",
          "Satranç'ta kurallar hiç değişmez, ama iki oyun asla birbirinin aynısı olmaz. Farkı oyuncuların seçimleri yaratır.",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncak mı, Oyun mu?",
        bullets: [
          "Bir top tek başına oyuncaktır: onunla istediğiniz gibi oynarsınız.",
          "Kale, iki takım ve “elle dokunmak yasak” kuralı eklenince futbol olur: artık bir hedef ve kurallar var.",
          "Tasarımcının işi tam olarak bu: oyuncağa hedef ve kural ekleyerek onu oyuna çevirmek.",
        ],
      },
      {
        type: "concept",
        heading: "Ekipteki Roller",
        bullets: [
          "Oyun Tasarımcısı (Game Designer): fikir, kural ve oyuncu deneyimi",
          "Programcı: kuralları çalışan bir oyuna çevirir",
          "Görsel Sanatçı: karakterleri, dünyayı ve arayüzü çizer",
          "Ses/Müzik: efektler ve müzik",
          "Takım Lideri: zaman planı ve ekip koordinasyonu",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Tasarımcısı Ne Yapar?",
        bullets: [
          "Kod yazmak zorunda değildir. Asıl sorusu şudur: “Bu eğlenceli mi, oyuncu ne hissediyor?”",
          "Kuralları ve mekanikleri tasarlar, oyunu insanlara oynatır, izler ve düzeltir.",
          "Küçük ekiplerde herkes birden fazla rol üstlenir. Tasarımcı çizim de yapabilir, programcı da fikir verebilir.",
        ],
      },
      {
        type: "concept",
        heading: "Oyun Türlerine Hızlı Bakış",
        bullets: [
          "Platform (Mario), bulmaca (Tetris), macera (Zelda), strateji (Clash Royale), koşu (Subway Surfers), simülasyon (Minecraft'ın yaratıcı modu).",
          "Her tür oyuncuya farklı bir deneyim sunar: platformda refleks, bulmacada “buldum!” anı, stratejide plan kurmak.",
        ],
      },
      {
        type: "concept",
        heading: "Platform: Oyun Nerede Oynanacak?",
        bullets: [
          "Dikkat: burada “platform” bir tür değil, oyunun oynandığı cihazdır. Az önceki “platform oyunu” (Mario gibi) türüyle karıştırmayın.",
          "Platform, oyunun hangi cihazda oynanacağıdır: mobil, PC, konsol veya tarayıcı (web).",
          "Her platformun kendi kısıtları vardır: mobilde dokunmatik ekran, konsolda kumanda, PC'de klavye ve fare.",
          "Gamejam'de platform seçimi, hangi kontrolleri ve hangi ekran boyutunu tasarlayacağınızı belirler.",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Minecraft: yaratıcı modda hedef yok, oyuncak gibidir; hayatta kalma modunda hedef ve tehlike eklenince oyuna dönüşür.",
          "Uno: az ve net kural, herkes 2 dakikada öğrenir.",
          "Among Us: kurallar basit, asıl oyun oyuncuların birbirini ikna etmesinde.",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "En sevdiğiniz oyunun hedefi ne, sizi zorlayan kuralı ne?",
          "Bir oyunun kurallarını hiç kendiniz değiştirdiniz mi (örn. arkadaşlarla Uno oynarken)? Oyun nasıl değişti?",
          "Sevdiğiniz oyunu yapan ekipte kimler vardır sizce?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Tasarım Defteri'nizdeki 3 oyunun her biri için yazın: Hedefi ne? Oyuncuyu zorlayan bir kuralı ne?",
          "O oyunlardan birinin ekibinde olsaydınız hangi rolü üstlenmek isterdiniz? Bir cümleyle nedenini yazın.",
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
        bullets: ["Bir oyun fikri nasıl doğar?", "Önce his, sonra mekanik."],
      },
      {
        type: "concept",
        heading: "Fikir Nereden Gelir?",
        bullets: [
          "Fikir genelde tek bir eylemden başlar: zıplamak, toplamak, kaçmak, saklanmak, inşa etmek.",
          "Ya da bir histen: “Oyuncu sonuna kadar gergin olsun”, “Oyuncu kendini dev gibi hissetsin.”",
          "Ya da gündelik hayattan: otobüse yetişmek, kalabalıkta birini aramak, dolabı düzenlemek.",
        ],
      },
      {
        type: "concept",
        heading: "Önce His, Sonra Mekanik",
        bullets: [
          "Tasarımcılar önce oyuncunun ne hissetmesini istediklerine karar verir, sonra bu hissi yaratacak kuralları arar.",
          "Hedef his “panik” ise: süre azalıyor, ekran daralıyor, müzik hızlanıyor.",
          "Hedef his “merak” ise: kapalı kapılar, yarım görünen haritalar, açılmamış kutular.",
        ],
      },
      {
        type: "concept",
        heading: "Oyuncunun Temel Eylemi",
        bullets: [
          "Oyunların çoğu 1-2 temel eylem üzerine kurulur: zıplama, koşma, toplama, çarpışma, inşa etme, kaçma.",
          "Test sorusu: “Oyuncu bu oyunda ne yapıyor, tek cümleyle?” Tek cümleye sığmıyorsa fikir henüz dağınıktır.",
        ],
      },
      {
        type: "concept",
        heading: "Oyunun Ana Hedefi",
        bullets: [
          "Her oyunun bir ana hedefi olmalı: oyuncu neyi başarmaya çalışıyor?",
          "Kısa vadeli hedef: şu an ne yapıyorum? Uzun vadeli hedef: sonunda neye ulaşacağım?",
          "Flappy Bird'de kısa vadeli hedef bir sonraki borudan geçmek, uzun vadeli hedef kendi rekorunu kırmaktır.",
        ],
      },
      {
        type: "concept",
        heading: "Çok Fikir, Sonra Seçim",
        bullets: [
          "İlk fikir nadiren en iyisidir. Önce çok fikir üretin, sonra seçin.",
          "Fikir üretirken eleştirmek yok. Saçma görünen fikirler bazen en özgün oyunları çıkarır.",
          "Seçerken sorun: Hangisini bir arkadaşıma hemen oynatmak isterdim?",
        ],
      },
      {
        type: "concept",
        heading: "Mini Aktivite: Fikir Turu",
        bullets: [
          "Masanızdaki bir nesneyi (kalem, silgi, su şişesi) seçin.",
          "Onu bir oyunun temel eylemine çevirin ve tek cümleyle söyleyin: “Oyuncu ... yapar.”",
          "Örnek: silgi → “Oyuncu, ekrandaki mürekkep lekeleri yayılmadan onları siler.”",
        ],
      },
      {
        type: "examples",
        heading: "Oyun Örnekleri",
        items: [
          "Flappy Bird: tek eylem, zıplamak",
          "Temple Run: tek fikir, kovalanırken kaçmak",
          "Candy Crush: tek eylem, üç aynı şekeri yan yana getirmek",
        ],
      },
      {
        type: "questions",
        heading: "Sınıfa Sorular",
        bullets: [
          "Tek bir eylem üzerine kurulu hangi oyunları biliyorsunuz?",
          "Sevdiğiniz bir oyunu tek cümleyle anlatabilir misiniz: “Oyuncu ... yapar”?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Tasarım Defteri'nize 3 farklı oyun fikri yazın, her biri tek cümle: “Oyuncu ... yapar.”",
          "Birini seçin. Dersin sonuna kadar bu oyun üzerinde çalışacağız. Ona geçici bir isim ve tür verin (GDD madde 1-2).",
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
          "Kurallarınızı bir arkadaşınıza hiç açıklama yapmadan okutun. Soru sorduysa o kural henüz net değil; düzeltin.",
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
          "En çok oynadığınız oyunda ilk 10 dakikada neyi öğrendiniz? Bugün hâlâ neyi öğrenmeye devam ediyorsunuz?",
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
          "Çiziminizi bir arkadaşınıza gösterin: parmağıyla bölümü “oynasın”. Nerede takıldığını not alın.",
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
          "Sesi kapatarak oynadığınızda oyun nasıl değişiyor?",
        ],
      },
      {
        type: "homework",
        heading: "Ödev",
        bullets: [
          "Kendi oyununuz için 2D mi 3D mü, hangi stil? 3 ana renk seçin ve her birinin neden seçildiğini yazın (GDD madde 9).",
          "Oyununuzdaki 3 önemli an için birer ses tarif edin (örn. puan alma: kısa, tiz bir “ding”).",
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
        guidance: "Oyununuza bir isim verin ve türünü seçin: platform, bulmaca, macera, yarış, koşu, strateji, simülasyon ya da diğer.",
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
        guidance: "Oyuncu oyunda neyi başarmaya çalışıyor? Kazanmak ya da ilerlemek için ne yapmalı?",
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
        guidance: "Her hareketin hangi tuşla ya da dokunuşla yapıldığını yazın: Hareket, Zıplama/Etkileşim, Saldırı/Özel hareket.",
        example: "Hareket: yok (kuş kendiliğinden ileri gider) · Zıplama/Etkileşim: ekrana dokunmak · Saldırı/Özel hareket: yok",
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
        guidance: "Oyuncu nasıl kazanır, nasıl kaybeder? Kaybedince ne olur: baştan mı başlar, can mı gider?",
        example: "Kazanma: resmi bir bitiş yok, amaç en yüksek skoru kırmak. Kaybetme: boruya veya yere çarparsa oyun biter, skor sıfırdan başlar.",
      },
      {
        type: "template",
        heading: "8. Oyuncu ve Duygu",
        guidance: "Oyuncumuz kim (yaşı, sevdiği şey)? Neden bu oyunu oynasın? Oynarken hangi duyguları (eğlence, merak, heyecan, korku, güçlü hissetme, rekabet...) yaşasın?",
        example: "Her yaştan, kısa aralarda tekrar tekrar oynamayı seven kişiler. Hissedilecek duygular: gerginlik, tatmin, hafif sinirlenme.",
      },
      {
        type: "template",
        heading: "9. Görsel Dünya",
        guidance: "2D mi 3D mü? Dünya ve karakterler nasıl görünüyor? İlham aldığınız oyun, film ya da çizgi film var mı?",
        example: "2D, basit piksel sanat. Açık mavi gökyüzü, yeşil borular, sarı ve yuvarlak bir kuş karakteri.",
      },
      {
        type: "template",
        heading: "10. Ödüller ve Ek Özellikler (İsteğe Bağlı)",
        guidance: "Oyununuzda para, puan, eşya, can ya da enerji gibi bir şey var mı? Varsa nasıl kazanılıyor ve ne işe yarıyor?",
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
          "Başka bir ekipten birine oynatın. Oyuncuyu izleyin, açıklama yapmayın: nerede duraksadı, ne zaman güldü, ne zaman sıkıldı?",
          "Gördüğünüz sorunları GDD'nize yazıp küçük değişiklikler yapın. Bu döngü gamejam boyunca tekrar eder.",
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
          "Oyununuzu sınıfa 30 saniyede anlatın: oyun adı + tek cümlelik fikir + oyuncu ne hissedecek + neden eğlenceli.",
          "Teknik ayrıntı değil, dinleyenin gözünde canlanan net bir resim hedefleyin.",
          "Karakter krokiniz ya da bölüm çiziminiz varsa gösterin; bir resim uzun bir açıklamadan daha çok şey anlatır.",
        ],
      },
      {
        type: "concept",
        heading: "Boş Şablonu İndirin",
        bullets: [
          "Ekibinizle doldurmak için boş GDD şablonunu Word (.docx) formatında indirin.",
          "Her ekip kendi kopyasını doldurur.",
        ],
        download: { label: "GDD Şablonunu İndir (.docx)", href: "GDD-Sablonu.docx" },
      },
    ],
  },
];
