const cslide = document.querySelector('.slide');
const cimages = document.querySelectorAll('.slide img');

const pBtn = document.querySelector('#prev');
const nBtn = document.querySelector('#nxt');

let counter = 1;
const size = cimages[0].clientWidth;

cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nBtn.addEventListener('click',()=>{
    if(counter)
    cslide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
pBtn.addEventListener('click',()=>{
    cslide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

cslide.addEventListener('transitioned', () => {
   
    if(cimages[counter].id === 'clone2') {
        cslide.style.transition = "none";
        counter = cimages.length -2 ;
        cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(cimages[counter].id === 'clone1') {
        cslide.style.transition = "none";
        counter = cimages.length -counter;
        cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

var noti = document.querySelector('h1');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for (var but of button) {
    but.addEventListener('click', (e) => {
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero')

        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Flowers";
        if (clone) {
            noti.onclick = () => {
                select.classList.toggle('display');
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

        }

    })
}



