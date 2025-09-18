// Data for events
const events = [
  { id: 1, title: 'معرض فني', date: '2025-09-20', location: 'معرض الفنون', category: 'ثقافة', description: 'هذا المعرض يعرض لوحات فنية من فنانين محليين، مع ورش عمل وجولات إرشادية.', image: 'https://placehold.co/600x400?text=معرض+فني', related: [5, 3] },
  { id: 2, title: 'مباراة كرة قدم', date: '2025-09-22', location: 'الاستاد', category: 'رياضة', description: 'مباراة محلية بين فرق شهيرة.', image: 'https://placehold.co/600x400?text=مباراة+كرة+قدم', related: [6] },
  { id: 3, title: 'حفل موسيقي', date: '2025-09-25', location: 'القاعة الكبرى', category: 'موسيقى', description: 'حفل لفرقة شهيرة.', image: 'https://placehold.co/600x400?text=حفل+موسيقي', related: [1] },
  { id: 4, title: 'يوم عائلي', date: '2025-09-28', location: 'الحديقة', category: 'عائلي', description: 'أنشطة للعائلات.', image: 'https://placehold.co/600x400?text=يوم+عائلي', related: [] },
  { id: 5, title: 'محاضرة ثقافية', date: '2025-10-01', location: 'الجامعة', category: 'ثقافة', description: 'محاضرة عن التاريخ.', image: 'https://placehold.co/600x400?text=محاضرة+ثقافية', related: [1] },
  { id: 6, title: 'سباق رياضي', date: '2025-10-05', location: 'الملعب', category: 'رياضة', description: 'سباق جري.', image: 'https://placehold.co/600x400?text=سباق+رياضي', related: [2] }
];

document.getElementById('darkModeSwitch').onclick = function() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');

    // تبديل ألوان الـnavbar
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('bg-primary');
    navbar.classList.toggle('bg-dark');

    // تبديل ألوان الفوتر
    const footer = document.querySelector('footer');
    footer.classList.toggle('bg-primary');
    footer.classList.toggle('bg-dark');
};
// Function to display events (used in events.html)
function displayEvents(filteredEvents) {
  const eventsList = document.getElementById('eventsList');
  if (eventsList) {
    eventsList.innerHTML = '';
    filteredEvents.forEach(event => {
      const col = document.createElement('div');
      col.className = 'col event-item';
      col.dataset.category = event.category;
      col.dataset.date = event.date;
      col.innerHTML = `
        <div class="card h-100">
          <img src="${event.image}" alt="${event.title}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text">تاريخ: ${event.date.split('-').reverse().join('-')}، مكان: ${event.location}، تصنيف: ${event.category}</p>
            <p class="card-text">وصف قصير: ${event.description.substring(0, 50)}...</p>
            <a href="event.html?id=${event.id}" class="btn btn-primary">التفاصيل</a>
          </div>
        </div>
      `;
      eventsList.appendChild(col);
    });
  }
}

// Filtering in events.html
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('filterBtn')) {
        displayEvents(events);

        document.getElementById('filterBtn').addEventListener('click', function () {
            const category = document.getElementById('categoryFilter').value;
            const date = document.getElementById('dateFilter').value;
            const filtered = events.filter(event => (!category || event.category === category) && (!date || event.date === date));
            displayEvents(filtered);
        });

        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        if (categoryParam) {
            document.getElementById('categoryFilter').value = categoryParam;
            const filtered = events.filter(event => !categoryParam || event.category === categoryParam);
            displayEvents(filtered);
        }
    }
});


// Event.html - display single event details
if (document.getElementById('eventDetails')) {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = parseInt(urlParams.get('id'), 10);
  const event = events.find(e => e.id === eventId);
  const detailsDiv = document.getElementById('eventDetails');

  if (event && detailsDiv) {
    detailsDiv.innerHTML = `
      <div class="card">
        <img src="${event.image}" alt="${event.title}" class="card-img-top">
        <div class="card-body">
          <h2 class="card-title">${event.title}</h2>
          <p><strong>التاريخ:</strong> ${event.date.split('-').reverse().join('-')}</p>
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
if (document.getElementById('contactForm')) {
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name && emailRegex.test(email) && message) {
      document.getElementById('formMessage').innerHTML = '<div class="alert alert-success">تم إرسال الرسالة بنجاح!</div>';
      this.reset();
    } else {
      document.getElementById('formMessage').innerHTML = '<div class="alert alert-danger">يرجى ملء الحقول بشكل صحيح!</div>';
    }
  });
}


