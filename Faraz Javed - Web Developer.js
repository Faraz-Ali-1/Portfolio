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