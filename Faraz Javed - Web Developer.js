//////////////////////// main title animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((el) => observer.observe(el));

//////////////////////// main title animation



//////////////////////// skill section animation

const skillObserver = new IntersectionObserver((skillEntries) => {
    skillEntries.forEach((skillEntry) => {
        // console.log(skillEntry);
        if(skillEntry.isIntersecting){
            skillEntry.target.classList.add('skill-show');
        }
    });
});

const SkillElements = document.querySelectorAll('.skill-hidden');
SkillElements.forEach((skillEl) => skillObserver.observe(skillEl));

//////////////////////// skill section animation



///////////////////////// project section animation

const projectObserver = new IntersectionObserver((skillEntries) => {

    skillEntries.forEach((skillEntry) => {
        // console.log(skillEntry);
        if(skillEntry.isIntersecting){
            skillEntry.target.classList.add('project-show');
        }
    });
});

const projectElements = document.querySelectorAll('.project-hidden');
projectElements.forEach((projectEl) => projectObserver.observe(projectEl));



const outlineObserver = new IntersectionObserver((skillEntries) => {
    const logoText = document.getElementById('logo-text');
    const contactBtn = document.getElementById('contact-btn');

    skillEntries.forEach((skillEntry) => {
        // console.log(skillEntry);
        if(skillEntry.isIntersecting){
            logoText.classList.add('green');
            contactBtn.classList.add('green-btn');
            logoText.classList.remove('logo-text');    
            contactBtn.classList.remove('contact-btn');  
        } else{
            logoText.classList.remove('green');
            contactBtn.classList.remove('green-btn');
            logoText.classList.add('logo-text');
            contactBtn.classList.add('contact-btn');
        }
    });
});

const outlineElements = document.querySelectorAll('.no-green');
outlineElements.forEach((outlineEl) => outlineObserver.observe(outlineEl));

///////////////////////// project section animation



//////////////////////// milestones number animation

const counters = document.querySelectorAll('.counter');

const startCounting = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const destination = +target.getAttribute('data-target');
      
      let count = 0;
      
      // We calculate the step based on the number size
      // Large numbers (600) need bigger steps than small numbers (4)
      const step = destination / 100; 

      const updateCount = () => {
        count += step;

        if (count < destination) {
          target.innerText = Math.floor(count);
          // 30ms is a nice "slow" refresh rate
          setTimeout(updateCount, 30); 
        } else {
          target.innerText = destination + "+";
        }
      };
      
      updateCount();
      observer.unobserve(target);
    }
  });
};

const countObserver = new IntersectionObserver(startCounting, { threshold: 0.5 });
counters.forEach(counter => countObserver.observe(counter));

///////////////////// milestones number animation

//////////////////// back to top

const mybutton = document.getElementById("backToTop");


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
    mybutton.style.animation = "fadeIn 0.5s";
  } else {
    mybutton.style.display = "none";
  }
}