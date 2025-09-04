let education_div = document.querySelector("#education-div");
let education_icon = document.querySelector("#education-icon");
let Certifications_div = document.querySelector("#Certifications-div");
let Certifications_icon = document.querySelector("#Certifications-icon");
let scholarship_div = document.querySelector("#scholarship-div");
let scholarship_icon = document.querySelector("#scholarship-icon");


education_div.addEventListener('mouseenter', () => {
    education_icon.classList.add("fa-bounce");
});
education_div.addEventListener('mouseleave', () => {
    education_icon.classList.remove("fa-bounce");
});




Certifications_div.addEventListener('mouseenter', () => {
    Certifications_icon.classList.add("fa-bounce");
});
Certifications_div.addEventListener('mouseleave', () => {
    Certifications_icon.classList.remove("fa-bounce");
});




scholarship_div.addEventListener('mouseenter', () => {
    scholarship_icon.classList.add("fa-bounce");
});
scholarship_div.addEventListener('mouseleave', () => {
    scholarship_icon.classList.remove("fa-bounce");
});
