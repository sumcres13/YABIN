const page = document.body.dataset.page || "home";

document.getElementById("site-header-mount").innerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner container-wide">
      <a class="company-brand" href="index.html" aria-label="ブッダ・コーポレーション ホーム" data-i18n-aria="companyHome"><img class="company-mark" src="assets/buddha-logo-enhanced.png" alt=""><span data-i18n="companyName">ブッダ・コーポレーション</span></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション" data-i18n-aria="mainNavigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a>
        <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a>
        <a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a>
        <a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a>
      </nav>
      <div class="header-actions"><button class="language-switch" type="button" id="language-switch" aria-label="英語に切り替える"><span class="language-option language-ja is-active">JP</span><span class="language-option language-en">EN</span></button><button class="menu-toggle" type="button" id="menu-toggle" aria-label="メニューを開く" data-i18n-aria="openMenu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" data-i18n-aria="mobileNavigation" hidden><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">私たちについて</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></nav>
  </header>`;

document.getElementById("site-footer-mount").innerHTML = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a href="index.html"><img class="footer-mark" src="assets/buddha-logo-enhanced.png" alt=""><span data-i18n="companyName">ブッダ・コーポレーション</span></a><p data-i18n="footerStatement">信頼と革新、品質へのこだわりを大切に。</p></div>
    <div><h2 data-i18n="contactLabel">お問い合わせ</h2><p><span data-i18n="addressFull">神奈川県川崎市高津区下作延2-7-3</span></p><a href="tel:0448630558">044-863-0558</a></div>
    <div class="footer-nav"><h2 data-i18n="navigationLabel">ナビゲーション</h2><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">私たちについて</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></div>
  </div><div class="container footer-bottom"><span>© <span id="year">2026</span> <span data-i18n="companyName">ブッダ・コーポレーション</span> <span data-i18n="rightsReserved">無断転載を禁じます。</span></span><a href="#main-content" data-i18n="footerBack">ページ上部へ ↑</a></div></footer>`;

const en = {
  navHome:"Home", navAbout:"About us", navStore:"Store & access", navReservePlain:"Reservations",
  companyName:"Buddha Corporation", companyHome:"Buddha Corporation Home", footerStatement:"Committed to trust, innovation, and excellence.",
  heroLine1:"Flavors of South Asia,", heroLine2:"here in Mizonokuchi.",
  heroCopy:"Welcome to Yabin Indian Nepali Restaurant.<br class=\"desktop-break\">Enjoy Indian, Nepalese, and Thai cuisine.",
  heroReserve:"Reserve a table", heroAccess:"Store & access", heroImageAlt:"Indian and Nepalese food at Yabin",
  aboutTitle:"Built on trust,<br>driven by new ideas.",
  aboutBody:"Buddha Corporation values trust, innovation, and excellence. At Yabin, we share Indian, Nepalese, and Thai cuisine with our guests in Mizonokuchi.",
  aboutLink:"About our company", diningImageAlt:"Yabin dining room", welcomeStamp:"Welcome<br>to Yabin",
  homeStoreInfoLabel:"STORE INFORMATION", shopName:"Yabin Indian Nepali Restaurant",
  homeQuality1Title:"Indian, Nepalese & Thai flavors", homeQuality1Text:"Choose from a range of dishes to suit what you are craving today.",
  homeQuality2Title:"A warm, wood-accented dining room", homeQuality2Text:"Gather around our wooden tables and enjoy a relaxed meal.",
  homeQuality3Title:"Enjoy at the restaurant or at home", homeQuality3Text:"Dine in or order through our delivery partners.",
  snsTitle:"Stay close to Yabin.", snsCopy:"Connect with Yabin on LINE.", lineFollow:"Connect on LINE",
  homeReserveTitle:"Reservations & inquiries", homeReserveCopy:"Find reservation methods and delivery services here.", reservePage:"Reservations",
  aboutPageTitle:"About us", repRole:"Buddha Corporation / Owner", representativeName:"Jaisi Ramesh raj",
  representativeAlt:"Jaisi Ramesh raj, owner of Buddha Corporation",
  ceoP1:"At our core, we believe that success is built on trust, innovation, and a commitment to excellence. From the very beginning, our mission has been to deliver value that not only meets expectations but consistently exceeds them.",
  ceoP2:"In today’s fast-changing world, we understand the importance of adaptability and forward thinking. Our team works tirelessly to embrace new ideas, improve our services, and create meaningful solutions that empower our customers and partners.",
  valuesTitle:"Our values", value1Title:"Trust", value1Text:"We value the trust of our customers and partners.",
  value2Title:"Innovation & adaptability", value2Text:"We embrace new ideas and adapt to change.",
  value3Title:"Excellence", value3Text:"We work to exceed expectations through our services.",
  companyTitle:"Company overview", companyNameLabel:"Company", companyRepLabel:"Owner", companyRepValue:"Jaisi Ramesh raj",
  companyBusinessLabel:"Business", companyBusiness:"Operating Yabin Indian Nepali Restaurant and serving Indian, Nepalese, and Thai cuisine.",
  companyLocationLabel:"Restaurant address", ownerPhoneLabel:"Owner phone",
  storesPageTitle:"Store & access", storeCuisine:"Indian, Nepalese & Thai cuisine",
  addressLabel:"Address", addressFull:"2-7-3 Shimosakunobe, Takatsu-ku, Kawasaki, Kanagawa",
  hoursLabel:"Hours", hoursValue:"Lunch 11:00–15:00 / Dinner 17:00–22:30",
  closedLabel:"Closed", closedValue:"Open every day", phoneLabel:"Phone",
  galleryTitle:"Scenes from Yabin", slideOne:"Relax on the terrace.", slideTwo:"Take your time in our dining room.", slideThree:"Enjoy a meal at Yabin.",
  locationTitle:"Location", openMap:"Open in Google Maps ↗", mapTitle:"Map to Yabin Indian Nepali Restaurant",
  storeImageAlt:"Entrance to Yabin Indian Nepali Restaurant",
  terraceImageAlt:"Yabin terrace seating", boothImageAlt:"Yabin booth seating",
  bookingTitle:"Reservations & inquiries", bookingIntro:"Reserve through Tabelog or call the restaurant.",
  tabelogTitle:"Reserve on Tabelog", tabelogAlt:"Tabelog", bookingExternal:"Opens the reservation page",
  bookingAction:"Go to reservations", telephoneTitle:"Reserve by phone", telephoneAction:"Call now",
  deliveryTitle:"Delivery", deliveryIntro:"Order Yabin food through a delivery partner.", orderAction:"Order now",
  uberAlt:"Uber Eats", demaeAlt:"Demae-can", rocketAlt:"Rocket Now", lineAlt:"LINE",
  mainNavigation:"Main navigation", mobileNavigation:"Mobile navigation", openMenu:"Open menu", closeMenu:"Close menu",
  contactLabel:"CONTACT", navigationLabel:"NAVIGATION", previousPhoto:"Previous photo", nextPhoto:"Next photo",
  galleryPhotos:"Choose a gallery photo", photoOne:"Photo 1", photoTwo:"Photo 2", photoThree:"Photo 3",
  skipLink:"Skip to content", footerBack:"BACK TO TOP ↑", rightsReserved:"All rights reserved."
};

const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => originalText.set(element, element.innerHTML));
const originalAttributes = new Map();
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => originalAttributes.set(element, { aria: element.getAttribute("aria-label"), alt: element.getAttribute("alt"), title: element.getAttribute("title") }));
const languageButton = document.getElementById("language-switch");
let language = "ja";
try { language = localStorage.getItem("yabinLanguage") === "en" ? "en" : "ja"; } catch {}
function renderLanguage(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.innerHTML = language === "ja" ? originalText.get(element) : en[element.dataset.i18n] ?? originalText.get(element); });
  document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
    const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
    const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
    const original = originalAttributes.get(element)?.[element.dataset.i18nAria ? "aria" : element.dataset.i18nAlt ? "alt" : "title"];
    element.setAttribute(attribute, language === "ja" ? original : en[key] ?? original);
  });
  languageButton.classList.toggle("is-en", language === "en");
  languageButton.querySelector(".language-ja").classList.toggle("is-active", language === "ja");
  languageButton.querySelector(".language-en").classList.toggle("is-active", language === "en");
  languageButton.setAttribute("aria-label", language === "ja" ? "英語に切り替える" : "Switch to Japanese");
  const descriptions = language === "ja"
    ? {home:"ブッダ・コーポレーションが運営するYabin Indian Nepali Restaurant。川崎市溝の口でインド・ネパール・タイ料理をお楽しみください。",about:"ブッダ・コーポレーションの代表メッセージと会社概要。Yabin Indian Nepali Restaurantを運営しています。",stores:"Yabin Indian Nepali Restaurantの店舗情報。川崎市高津区下作延の所在地、営業時間、店内写真をご案内します。",reservation:"Yabin Indian Nepali Restaurantのご予約・デリバリー。食べログまたはお電話でご予約いただけます。"}
    : {home:"Yabin Indian Nepali Restaurant in Mizonokuchi, operated by Buddha Corporation.",about:"Meet Buddha Corporation and owner Jaisi Ramesh raj.",stores:"Find Yabin's address, hours, and restaurant photos.",reservation:"Reserve at Yabin through Tabelog or by phone, or order delivery."};
  document.querySelector('meta[name="description"]').content = descriptions[page];
  document.title = (language === "ja"
    ? {home:"ホーム",about:"私たちについて",stores:"店舗・アクセス",reservation:"ご予約"}
    : {home:"Home",about:"About us",stores:"Store & access",reservation:"Reservations"})[page] + " | " + (language === "ja" ? "ブッダ・コーポレーション" : "Buddha Corporation");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) menuToggle.setAttribute("aria-label", mobileNav.hidden ? (language === "ja" ? "メニューを開く" : "Open menu") : (language === "ja" ? "メニューを閉じる" : "Close menu"));
}

const header = document.getElementById("site-header");
const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
renderLanguage(language);
languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ja" ? "en" : "ja";
  try { localStorage.setItem("yabinLanguage", nextLanguage); } catch {}
  renderLanguage(nextLanguage);
});
function updateHeader(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
menuToggle.addEventListener("click",()=>{ const opening=mobileNav.hidden; mobileNav.hidden=!opening; header.classList.toggle("menu-open",opening); menuToggle.setAttribute("aria-expanded",String(opening)); menuToggle.setAttribute("aria-label",opening?(language === "ja" ? "メニューを閉じる" : "Close menu"):(language === "ja" ? "メニューを開く" : "Open menu")); });
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");}));

const slides=[...document.querySelectorAll(".gallery-slide")];
if(slides.length){ const dots=[...document.querySelectorAll(".gallery-dots button")];let current=0;function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===current));dots.forEach((dot,i)=>{dot.classList.toggle("is-active",i===current);if(i===current)dot.setAttribute("aria-current","true");else dot.removeAttribute("aria-current");});}document.querySelector(".gallery-prev").addEventListener("click",()=>showSlide(current-1));document.querySelector(".gallery-next").addEventListener("click",()=>showSlide(current+1));dots.forEach((dot,i)=>dot.addEventListener("click",()=>showSlide(i)));}

const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:"0px 0px 30px 0px"});reveals.forEach(element=>observer.observe(element));}else reveals.forEach(element=>element.classList.add("is-visible"));
document.getElementById("year").textContent=new Date().getFullYear();
