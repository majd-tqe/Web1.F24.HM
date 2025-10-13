// Data for events
const events = [
  {
    id: 1,
    title: "معرض فني",
    date: "2025-09-20",
    location: "معرض الفنون",
    category: "ثقافة",
    description:
      "هذا المعرض يعرض لوحات فنية من فنانين محليين، مع ورش عمل وجولات إرشادية.",
    image: "assets/img/art.jpg",
    related: [5, 3],
  },
  {
    id: 2,
    title: "مباراة كرة قدم",
    date: "2025-09-22",
    location: "الاستاد",
    category: "رياضة",
    description: "مباراة محلية بين فرق شهيرة.",
    image: "assets/img/football.jpeg",
    related: [6],
  },
  {
    id: 3,
    title: "حفل موسيقي",
    date: "2025-09-25",
    location: "القاعة الكبرى",
    category: "موسيقى",
    description: "حفل لفرقة شهيرة.",
    image: "assets/img/music.jpeg",
    related: [1],
  },
  {
    id: 4,
    title: "يوم عائلي",
    date: "2025-09-28",
    location: "الحديقة",
    category: "عائلي",
    description: "أنشطة للعائلات.",
    image: "assets/img/family.jpeg",
    related: [],
  },
  {
    id: 5,
    title: "محاضرة ثقافية",
    date: "2025-10-01",
    location: "الجامعة",
    category: "ثقافة",
    description: "محاضرة عن التاريخ.",
    image: "assets/img/lecture.jpeg",
    related: [1],
  },
  {
    id: 6,
    title: "سباق رياضي",
    date: "2025-10-05",
    location: "الملعب",
    category: "رياضة",
    description: "سباق جري.",
    image: "assets/img/sport.jpeg",
    related: [2],
  },
  {
    id: 7,
    title: "معرض دمشق الدولي",
    date: "2025-08-27 - 2025-09-05",
    location: "مدينة المعارض - Damascus Fairgrounds",
    category: "ثقافة / معرض تجاري",
    description:
      "أكبر حدث تجاري/ثقافي في المدينة مع أجنحة شركات محلية ودولية، عروض ثقافية ومسرحيات وأكشاك طعام.",
    image: "assets/img/damascus_fair.jpg",
    related: [],
  },
  {
    id: 8,
    title: "مهرجان النادي الصيفي",
    date: "2025-07-15",
    location: "ساحات مفتوحة / نوادي ثقافية بدمشق",
    category: "مهرجان / عائلي / رياضي / فني",
    description: "عروض رياضية، أنشطة للأطفال، معرض لوحات وعروض موسيقية محلية.",
    image: "assets/img/summer_festival.jpg",
    related: [],
  },
  {
    id: 9,
    title: "ليلة موسيقى تقليدية في الميدان",
    date: "2025-10-10",
    location: "ساحة الميدان أو مسرح صغير",
    category: "موسيقى / ثقافة",
    description:
      "أمسية موسيقية تقدم مقامات شامية وأمّهات فصحى، مدة ساعتين، الدخول مجاني أو بتذاكر رمزية.",
    image: "assets/img/traditional_music.jpg",
    related: [3],
  },
  {
    id: 10,
    title: "معرض فنون معاصرة",
    date: "2025-11-05 - 2025-11-20",
    location: "قاعة عرض / مركز ثقافي محلي",
    category: "فن / معرض",
    description: "معرض لوحات وتصوير فوتوغرافي لفنانين شباب من دمشق.",
    image: "assets/img/contemporary_art.jpg",
    related: [1],
  },
  {
    id: 11,
    title: "ماراثون المدينة",
    date: "2025-11-02",
    location: "كورنيش / شارع رئيسي (10 كم)",
    category: "رياضة / مجتمع",
    description:
      "سباق مفتوح لجميع الأعمار مع فئات للعائلات والمحترفين ونقاط تسجيل.",
    image: "assets/img/marathon.jpg",
    related: [6, 2],
  },
  {
    id: 12,
    title: "مهرجان طعام دمشق",
    date: "2025-12-05",
    location: "موقع مفتوح بدمشق",
    category: "طعام / ثقافة",
    description: "أكشاك مأكولات شعبية، أطباق شامية، مسابقات طبخ وركن للأطفال.",
    image: "assets/img/food_festival.jpg",
    related: [],
  },
  {
    id: 13,
    title: "عرض مسرحي في دار الأوبرا",
    date: "2025-10-25",
    location: "دار الأوبرا / قاعة محلية",
    category: "مسرح",
    description: "مسرحية محلية تقليدية أو معاصرة.",
    image: "assets/img/theatre.jpg",
    related: [],
  },
  {
    id: 14,
    title: "سوق الحرف في سوق الحميدية",
    date: "2025-11-15",
    location: "سوق الحميدية، دمشق",
    category: "سوق / تقليدي",
    description: "سوق للحرفيين يتضمن منتجات تقليدية وحلويات ومشغولات يدوية.",
    image: "assets/img/craft_market.jpg",
    related: [],
  },
  {
    id: 15,
    title: "معرض الزهور بدمشق",
    date: "2025-06-26 - 2025-07-14",
    location: "حديقة تشرين، دمشق",
    category: "زهور / طبيعة",
    description:
      "معرض نباتات وزهور بمشاركة شركات محلية ودولية مع مسابقات زراعة وعروض للأطفال.",
    image: "assets/img/flower_exhibition.jpg",
    related: [],
  },
];

// innerHTML for navbar and footer
class MainNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#" data-i18n="title">دليل فعاليات المدينة</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
             <ul class="navbar-nav ms-auto" id="mainNav">
        <li class="nav-item">
          <a class="nav-link" href="index.html" data-i18n="home">الرئيسية</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="events.html" data-i18n="events">الفعاليات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html" data-i18n="about">عن الدليل</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html" data-i18n="contact">اتصل بنا</a>
        </li>
      </ul>

      <!-- أدوات جانبية: dark mode + language -->
      <div class="navbar-nav d-flex align-items-center" id="sideNav">
              <div class="form-check form-switch ms-2">
                <input class="form-check-input" type="checkbox" id="darkModeSwitch" />
                <label class="form-check-label text-white" for="darkModeSwitch" data-i18n="darkMode">الوضع الداكن</label>
              </div>
              <div class="language-switch ms-2 d-flex flex-column align-items-center">
                <img src="assets/img/syria-flag.png" alt="عربي" id="langAr" class="lang-icon" title="العربية" style="cursor:pointer; width:28px; margin-right:5px;margin-bottom:5px;">
                <img src="assets/img/us-flag.png" alt="English" id="langEn" class="lang-icon" title="English" style="cursor:pointer; width:28px; margin-right:5px;">
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;

    const links = this.querySelectorAll(".nav-link");
    const current = window.location.pathname.split("/").pop() || "index.html";
    links.forEach((link) => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}
customElements.define("main-navbar", MainNavbar);

class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container justify-content-center">
        <a class="text-decoration-none text-white lh-base mrl-8" href="index.html">الرئيسية</a>
        <a class="text-decoration-none text-white lh-base mrl-8" href="events.html">الفعاليات</a>
        <a class="text-decoration-none text-white lh-base mrl-8" href="about.html">عن الدليل</a>
        <a class="text-decoration-none text-white lh-base mrl-8" href="contact.html">اتصل بنا</a>
      </div>
    </nav>
    <footer class="dark-footer text-white text-center py-3">
                    <p>البريد الإلكتروني: info@cityevents.com</p>
                    <p> الهاتف: 0123456789</p>
      <div class="socialbutton mb-1">
        <a href="#" class="text-white"
          ><i class="fa-brands fa-facebook-f"></i
        ></a>
        |
        <a href="#" class="text-white"
          ><i class="fa-brands fa-x-twitter"></i
        ></a>
        |
        <a href="#" class="text-white"
          ><i class="fa-brands fa-instagram"></i
        ></a>
      </div>
         <p class="mb-0">© 2025 دليل فعاليات المدينة. جميع الحقوق محفوظة.</p>
         <p>تم إنشاء هذا الموقع كجزء من مشروع مقرر BWP401</p>
<p style="white-space: normal; word-wrap: break-word; overflow-wrap: anywhere;">
  <a class="text-decoration-none text-white" href="about.html">فريق العمل</a>: [سيزار - مجد - أكرم - شيماء - الاء]
  [alaa_315297,shaimaa_298178,muhammed_akram_287865,majd_290635,cesar_287052]
</p>

</footer>
        <button id="backToTop" class="back-to-top-btn" title="العودة للأعلى">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
    `;
  }
}
customElements.define("main-footer", MainFooter);

// Function to display events (used in events.html)
function displayEvents(filteredEvents) {
  const eventsList = document.getElementById("eventsList");
  if (eventsList) {
    eventsList.innerHTML = "";
    filteredEvents.forEach((event) => {
      const col = document.createElement("div");
      col.className = "col event-item";
      col.dataset.category = event.category;
      col.dataset.date = event.date;
      col.innerHTML = `
        <div class="card h-100">
          <img src="${event.image}" alt="${event.title}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text">تاريخ: ${event.date
              .split("-")
              .reverse()
              .join("-")}، مكان: ${event.location}، تصنيف: ${event.category}</p>
            <p class="card-text">وصف قصير: ${event.description.substring(
              0,
              50
            )}...</p>
            <a href="event.html?id=${
              event.id
            }" class="btn btn-primary">التفاصيل</a>
          </div>
        </div>
      `;
      eventsList.appendChild(col);
    });
  }
}

// Filtering in events.html
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("filterBtn")) {
    displayEvents(events);

    document.getElementById("filterBtn").addEventListener("click", function () {
      const category = document.getElementById("categoryFilter").value;
      const date = document.getElementById("dateFilter").value;
      const filtered = events.filter(
        (event) =>
          (!category || event.category === category) &&
          (!date || event.date === date)
      );
      displayEvents(filtered);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");
    if (categoryParam) {
      document.getElementById("categoryFilter").value = categoryParam;
      const filtered = events.filter(
        (event) => !categoryParam || event.category === categoryParam
      );
      displayEvents(filtered);
    }
  }
});

// Event.html - display single event details
if (document.getElementById("eventDetails")) {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = parseInt(urlParams.get("id"), 10);
  const event = events.find((e) => e.id === eventId);
  const detailsDiv = document.getElementById("eventDetails");

  if (event && detailsDiv) {
    detailsDiv.innerHTML = `
      <div class="card">
        <img src="${event.image}" alt="${event.title}" class="card-img-top">
        <div class="card-body">
          <h2 class="card-title">${event.title}</h2>
          <p><strong>التاريخ:</strong> ${event.date
            .split("-")
            .reverse()
            .join("-")}</p>
          <p><strong>المكان:</strong> ${event.location}</p>
          <p><strong>التصنيف:</strong> ${event.category}</p>
          <p><strong>الوصف:</strong> ${event.description}</p>
        </div>
      </div>
    `;
  } else if (detailsDiv) {
    detailsDiv.innerHTML = `<p class="text-danger text-center">الفعالية غير موجودة.</p>`;
  }
}

// Contact form validation
if (document.getElementById("contactForm")) {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (name && emailRegex.test(email) && message) {
        document.getElementById("formMessage").innerHTML =
          '<div class="alert alert-success">تم إرسال الرسالة بنجاح!</div>';
        this.reset();
      } else {
        document.getElementById("formMessage").innerHTML =
          '<div class="alert alert-danger">يرجى ملء الحقول بشكل صحيح!</div>';
      }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("bg-dark", "text-white", "dark-mode");
    document.querySelectorAll(".navbar").forEach(function (navbar) {
      navbar.classList.remove("bg-primary");
      navbar.classList.add("dark-navbar");
    });
    document.querySelectorAll(".card-body").forEach(function (card) {
      card.classList.toggle("dark-footer");
      card.classList.toggle("text-white");
    });
    document.getElementById("darkModeSwitch").checked = true;
  }
});

document.getElementById("darkModeSwitch").onclick = function () {
  const isDark = document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");
  document.body.classList.toggle("dark-mode");

  document.querySelectorAll(".navbar").forEach(function (navbar) {
    navbar.classList.toggle("bg-primary");
    navbar.classList.toggle("dark-navbar");
  });
  document.querySelectorAll(".card-body").forEach(function (card) {
    card.classList.toggle("dark-footer");
    card.classList.toggle("text-white");
  });

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "on");
  } else {
    localStorage.setItem("darkMode", "off");
  }
};

//back to top button
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Function to change language
let translations = {};

// تحميل ملف الترجمة عند بدء الصفحة
async function loadTranslations() {
  const response = await fetch("/assets/translation/translations.json");
  translations = await response.json();
}

// تطبيق الترجمة على الصفحة
function translatePage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang); // حفظ اللغة
}

// تغيير اللغة
function setLanguage(lang) {
  const mainNav = document.getElementById("mainNav");
  const sideNav = document.getElementById("sideNav");

  if (lang === "ar") {
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");
    mainNav.classList.add("ms-auto");
    sideNav.classList.remove("ms-auto");
  } else if (lang === "en") {
    document.body.classList.add("ltr");
    document.body.classList.remove("rtl");
    mainNav.classList.remove("ms-auto");
    sideNav.classList.add("ms-auto");
  }

  translatePage(lang);
}

// event listeners للأعلام
document.getElementById("langAr").addEventListener("click", () => setLanguage("ar"));
document.getElementById("langEn").addEventListener("click", () => setLanguage("en"));

// عند التحميل، اختر اللغة المحفوظة أو افتراضية
document.addEventListener("DOMContentLoaded", async function() {
  await loadTranslations();
  const savedLang = localStorage.getItem("lang") || "ar";
  setLanguage(savedLang);
});

