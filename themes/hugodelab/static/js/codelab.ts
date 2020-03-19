export function codelab() {
  document.addEventListener('DOMContentLoaded', () => {
    // const urlHash = location.hash.slice(1);
    // const h1List = document.getElementsByTagName('h1');
    // for(let i = 0; i <= h1List.length - 1; i++) {
    //   h1List[i].classList.add('codelab-step');
    //   h1List[i].setAttribute("id", String(i));

    //   h1List[i].removeAttribute("selected");

    //   if(!urlHash){
    //     h1List[0].setAttribute("selected", "");
    //   }
    //   if(urlHash === String(i)) {
    //     h1List[i].setAttribute("selected", "");
    //   }
    // }

    const urlHash = location.hash.slice(1);
    const h1List = document.getElementsByTagName('h1');

    const codelabContent = document.getElementById('codelab-content');

    for(let i = 0; i <= codelabContent.childNodes.length - 1; i++) {
      let content = codelabContent.childNodes[i];
      console.log('content:', content);
    }


    for(let i = 0; i <= h1List.length - 1; i++) {
      let div = document.createElement('div');
      div.classList.add('code-name');
      // div.appendChild(h1List[i].children);
    }




  //   for(let i = 0; i <= list.length - 1; i++) {
  //     let pre = list[i].firstElementChild;
  //     let code = list[i].firstElementChild.firstElementChild;
  //     let codeName =  code ? code.className.split(":")[1] : null;

  //     if(codeName) {
  //       let div = document.createElement('div');
  //       div.textContent = codeName;
  //       div.classList.add('code-name');
  //       pre.parentNode.insertBefore(div, pre);
  //     }
  //   }

  });
}
