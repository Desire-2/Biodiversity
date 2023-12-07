// Header Section
const header = document.createElement('header');
const nav = document.createElement('nav');
const logo = document.createElement('div');
logo.id = 'logo';
logo.innerText = 'Biodiversity Nexus';
const menuToggle = document.createElement('div');
menuToggle.id = 'menu-toggle';
menuToggle.className = 'nav-toggle';
for (let i = 0; i < 3; i++) {
  const span = document.createElement('span');
  menuToggle.appendChild(span);
}
const navMenu = document.createElement('ul');
navMenu.className = 'nav-menu';
const menuItems = ['Home', 'Projects', 'Events', 'Gallery', 'Opportunities', 'Study', 'Testimonials', 'Donate', 'Partners', 'Contact'];
const menuLinks = ['index.html', 'projects.html', 'events.html', 'gallery.html', 'job.html', './study/index.html', 'testimonials.html', 'donate.html', 'partners.html', 'contact.html'];
for (let i = 0; i < menuItems.length; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = menuLinks[i];
  a.innerText = menuItems[i];
  li.appendChild(a);
  navMenu.appendChild(li);
}
nav.appendChild(logo);
nav.appendChild(menuToggle);
nav.appendChild(navMenu);
header.appendChild(nav);

// Footer Section
const footer = document.createElement('footer');
const container = document.createElement('div');
container.className = 'container';
const footerContent = document.createElement('div');
footerContent.className = 'footer-content';
const logoAlt = document.createElement('img');
logoAlt.src = './Photos/Log D.png';
logoAlt.alt = 'Biodiversity Nexus Rwanda Logo';
const contactInfo = document.createElement('div');
contactInfo.className = 'contact-info';
const h3Contact = document.createElement('h3');
h3Contact.innerText = 'Contact Us';
const emailP = document.createElement('p');
emailP.innerText = 'Email: biodiversitynexus@yahoo.com';
const phoneP = document.createElement('p');
phoneP.innerText = 'Phone: +250 780784924';
const addressP = document.createElement('p');
addressP.innerText = 'Address: University of Rwanda, Nyarugenge Campus, Kigali City, Rwanda';
contactInfo.appendChild(h3Contact);
contactInfo.appendChild(emailP);
contactInfo.appendChild(phoneP);
contactInfo.appendChild(addressP);
const socialMedia = document.createElement('div');
socialMedia.className = 'social-media';
const h3Follow = document.createElement('h3');
h3Follow.innerText = 'Follow Us';
const socialMediaLinks = ['https://www.facebook.com/profile.php?id=61552413531335', 'https://x.com/Biodiversi36098?t=c3MO0IgE02xM-k2aEO08Xw&s=09', 'https://instagram.com/biodiversitynexus10?utm_source=qr&igshid=MThlNWY1MzQwNA==', 'https://linkedin.com/in/biodirvesisty-nexus-ba13b1295', 'https://www.youtube.com/channel/UClzReVQCA-pR9GMQpdtJ8eA'];
const socialMediaImages = ['./Photos/linkedin.jpg', './Photos/twiter.jpg', './Photos/ins.png', './Photos/OIP.jpg', './Photos/youtube.jpg'];
const socialMediaAlt = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Youtube'];
const ul = document.createElement('ul');
for (let i = 0; i < socialMediaLinks.length; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = socialMediaLinks[i];
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  const img = document.createElement('img');
  img.src = socialMediaImages[i];
  img.alt = socialMediaAlt[i];
  a.appendChild(img);
  li.appendChild(a);
  ul.appendChild(li);
}
socialMedia.appendChild(h3Follow);
socialMedia.appendChild(ul);
footerContent.appendChild(logoAlt);
footerContent.appendChild(contactInfo);
footerContent.appendChild(socialMedia);
container.appendChild(footerContent);
footer.appendChild(container);