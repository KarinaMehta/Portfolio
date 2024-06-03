
document.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});


    // script for navbar section
    var sidemenu = document.getElementById("sidemenu");
  
    function openmenu(){
      sidemenu.style.right = "0";
    }
    function closemenu(){
      sidemenu.style.right = "-200px";
    }

                // // script for form section
              
                // // Deployment ID
                // //  AKfycbzP-aT7v6Kn6ZpPKB-Uf0MEnWOIKMBmA2KLLpEp0Wr3WIe48YkUfb4ZWO58e-DEyWVI-w
              
                // // Google Sheet Link
                // // https://docs.google.com/spreadsheets/d/1MNR1SwW3It__vSqChRko3uDE-UPUMwlcnSQMiVDukWA/edit#gid=0
                // const scriptURL = 'https://script.google.com/macros/s/AKfycbzP-aT7v6Kn6ZpPKB-Uf0MEnWOIKMBmA2KLLpEp0Wr3WIe48YkUfb4ZWO58e-DEyWVI-w/exec'
                // const form = document.forms['submit-to-google-sheet']
                // const msg = document.getElementById("msg")
              
                // form.addEventListener('submit', e => {
                //   e.preventDefault()
                //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                //     .then(response => {
                //       msg.innerHTML = "Message sent successfully"
                //       setTimeout(function(){
                //         msg.innerHTML = ""
                //       },5000)
                //       form.reset()
                //     })
                //     .catch(error => console.error('Error!', error.message))
                // })
              
