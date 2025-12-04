// Existing modal JS unchanged

document.addEventListener('DOMContentLoaded',()=>{

  // Modal form logic
  const modal = new bootstrap.Modal(document.getElementById('contactModal'));
  document.querySelectorAll('.contact-btn').forEach(btn=>{
    btn.onclick=()=>{
      const name=btn.dataset.name;
      document.getElementById('modalTitle').textContent='Contact '+name;
      document.getElementById('targetName').value=name;
      document.getElementById('contactForm').reset();
      modal.show();
    };
  });

  // On‑page form logic
  const pageForm=document.getElementById('pageContactForm');
  const alertBox=document.getElementById('pageAlert');
  const submitBtn=document.getElementById('pageSubmit');

  pageForm.addEventListener('submit',e=>{
    e.preventDefault();
    submitBtn.disabled=true;
    submitBtn.textContent='Sending...';

    setTimeout(()=>{
      alertBox.textContent='Message sent successfully!';
      alertBox.classList.remove('d-none','alert-danger');
      alertBox.classList.add('alert','alert-success');
      submitBtn.disabled=false;
      submitBtn.textContent='Send Message';
      pageForm.reset();
    },800);
  });
});
