// script.js

const projectData = {
    1: {
        title: "Black Hole Documentation",
        description: "A technical documentation page about black holes created with HTML and CSS. This project emphasizes a structured layout and smooth navigation for an enhanced user experience.", 
        image: "https://i.postimg.cc/6qf6hhxC/Capture-d-cran-2024-11-12-230539.png"
    },
    2: {
        title: "Nahla Shop Landing Page",
        description: "A responsive landing page for an artisanal honey shop. Built with HTML, CSS, and JavaScript, it features a modern and minimalist design that highlights the products.",
        image: "https://i.postimg.cc/fy2LHW9W/Screenshot-2024-11-05-at-20-04-34-Page-de-Miel-Artisanal.png"
    },
    3: {
        title: "Pokedex Pokemon API",
        description: "An interactive web application using the Pokémon API to display and search for information about various Pokémon. Developed with HTML, CSS, and JavaScript, it showcases REST API integration.",
        image: "https://i.postimg.cc/pLt5GKyK/Capture-d-cran-2024-12-10-094118.png"
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const detailsSection = document.getElementById('project-details');

    projects.forEach(project => {
        const expandBtn = project.querySelector('.fa-solid');
        expandBtn.addEventListener('click', () => {
            const projectId = project.dataset.project;
            const data = projectData[projectId];
            
            detailsSection.querySelector('h3').textContent = data.title;
            detailsSection.querySelector('p').textContent = data.description;
            detailsSection.querySelector('img').src = data.image;
            
            detailsSection.classList.remove('hidden');
            detailsSection.classList.add('visible');
        });
    });
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    emailjs.sendForm('service_vdfobd8', 'template_5i5g5nq', this)
        .then(() => {
            alert('Message envoyé avec succès !');
        }, (error) => {
            alert('Échec de l\'envoi du message...', error);
        });
});