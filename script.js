const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('#nav-links');
if(menuButton&&navLinks){menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));}

document.querySelectorAll('[data-modal]').forEach(button=>{button.addEventListener('click',()=>{const modal=document.getElementById(button.dataset.modal);if(modal)modal.showModal();});});
document.querySelectorAll('.project-modal').forEach(modal=>{modal.querySelector('.modal-close')?.addEventListener('click',()=>modal.close());modal.addEventListener('click',event=>{const box=modal.getBoundingClientRect();const inside=event.clientX>=box.left&&event.clientX<=box.right&&event.clientY>=box.top&&event.clientY<=box.bottom;if(!inside)modal.close();});});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
