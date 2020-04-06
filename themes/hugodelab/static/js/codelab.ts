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

    // const allElements = document.getElementsByTagName('*');
    const colabElms = document.getElementById("codelab-content").children;

    // for(let i = 0; i <= h1List.length - 1; i++) {
    //   let tnode = document.createTextNode("<codelab-step></codelab-step>");
    //   h1List[i].parentNode.insertBefore(tnode, h1List[i]);
    // }

    // console.log('allElements', colabElms);

    for(let i = 0; i <= colabElms.length - 1; i++) {
      
      if(colabElms[i]['tagName'] === "H1") {
        // let codelabElm = document.createElement('div');
        // codelabElm.classList.add('codelab-step');
        // codelabElm.appendChild(colabElms[i]);
        // colabElms[i].parentNode.insertBefore(codelabElm, colabElms[i]);
      }

      

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
