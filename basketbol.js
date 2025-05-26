// Menü tıklanınca ilgili bölüm dışındakiler gizlenir
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1);

    document.querySelectorAll('main section').forEach(section => {
      section.classList.remove('active');
    });

    document.getElementById(target).classList.add('active');
  });
});

// Form gönderim mesajı
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Mesajınız başarıyla gönderildi!";
  this.reset();
});
