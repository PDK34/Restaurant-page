
export default function aboutPage(){
    const content = document.getElementById('content');
    content.textContent = '';
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about-page');
    
    const div = document.createElement('div');
    div.textContent = 'Homely Eats, Valeris Estate,Outer Domes,Brayakta,17067237\n\nContact us at homelyEats.gmail.com';

    div.classList.add('about-section');

    aboutPage.append(div);

    content.append(aboutPage);
    
}
