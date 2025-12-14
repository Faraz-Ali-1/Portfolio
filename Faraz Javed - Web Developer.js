//////////////////////// main title animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((el) => observer.observe(el));

//////////////////////// main title animation


//////////////////////// skill section animation

const skillObserver = new IntersectionObserver((skillEntries) => {
    skillEntries.forEach((skillEntry) => {
        console.log(skillEntry);
        if(skillEntry.isIntersecting){
            skillEntry.target.classList.add('skill-show');
        } else{
            skillEntry.target.classList.remove('skill-show');
        }
    });
});

const SkillElements = document.querySelectorAll('.skill-hidden');
SkillElements.forEach((skillEl) => skillObserver.observe(skillEl));

//////////////////////// skill section animation


