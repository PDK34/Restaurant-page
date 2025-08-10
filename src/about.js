
export default function aboutPage(){
    const content = document.getElementById('content');
    content.textContent = '';
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about-page');
    
    const div = document.createElement('div');
    div.textContent = 'Welcome to Homely Eats,\n 24/7 restaurant catering delicious foods to your special tastes,\nwith a slight home-made essence.\n Our ingredients are fresh and locally sourced from the finest of markets.';

    const div2 = document.createElement('div');
    div2.textContent = 'Come visit us or Contact us at homelyEats@gmail.com for reservations or inquiries.\n\nHomely Eats,Valeris Estate,\nOuter Domes,Brayakta,17067237\n';
    div2.classList.add('contact-section');
    div.classList.add('about-section');

    aboutPage.append(div,div2);

    content.append(aboutPage);
    
}
