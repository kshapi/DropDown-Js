const dropDown = document.querySelector('.bi-caret-down-fill');
const list = document.querySelector('.bottom');
const language = document.querySelector('.lang');


let hidden = false;

//check box is Up or Down
const drop = ()=> {
  
  if (hidden) {
    down();
  }else {
    up();
  };
  
};

dropDown.addEventListener('click',drop);

//tranlate box to Up -330deg
const down = ()=> {
  list.style.transform = 'translateY(0px)';
  hidden = false;
  
  dropDown.style.transform = 'rotate(0deg)';
};

//bring it Back to 0deg
const up = ()=> {
  list.style.transform = 'translateY(-330px)';
  hidden = true;
  
  dropDown.style.transform = 'rotate(180deg)';
};

//select language
const select = (event)=> {
  language.textContent = event.target.textContent;
};

list.addEventListener('click',select);


let aa =  '';
console.log(isNaN(aa))