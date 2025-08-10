
export default function menuPage(){
    const content = document.getElementById('content');
    content.textContent = '';

    const menuPage = document.createElement('div');;
    menuPage.classList.add('menu-page');

    const title  = document.createElement('div');
    title.classList.add('menu-title');
    title.textContent="Today's Specials";

    const item1 = document.createElement('div');
    item1.classList.add('item1');


    const item1Comment = document.createElement('div');
    
    const item1image = document.createElement('div');
    item1Comment.classList.add('item1-comment');
    item1image.classList.add('item1-image');
    item1Comment.textContent = 'Special puffy Croissant'

    item1.append(item1Comment,item1image);

    const item2 = document.createElement('div');
    item2.classList.add('item2');
    const item2Comment = document.createElement('div');
    const item2image = document.createElement('div');
    item2Comment.classList.add('item2-comment');
    item2image.classList.add('item2-image');
        item2Comment.textContent = 'Veggie delight big pizza'

    item2.append(item2Comment,item2image);

    const item3 = document.createElement('div');
    item3.classList.add('item3');
    const item3Comment = document.createElement('div');
    const item3image = document.createElement('div');
    item3Comment.classList.add('item3-comment');
    item3image.classList.add('item3-image');

    item3Comment.textContent = "Special Magic masala dosa"
    item3.append(item3Comment,item3image);

    menuPage.append(title,item1,item2,item3);

    content.append(menuPage);

}
