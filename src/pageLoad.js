
export default function pageLoad(){
    const content  = document.getElementById('content');

    const leftContent = document.createElement('div');
    leftContent.classList.add('leftcontent');

    const comment  = document.createElement('div');
    comment.textContent = 'Divine taste carefully curated to meet the needs of your taste buds, along with the bliss of a homely touch';
    comment.classList.add('comment');
    leftContent.appendChild(comment);

    const rightContent = document.createElement('div');
    rightContent.classList.add('rightcontent');

    content.append(leftContent,rightContent);
}
