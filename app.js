const myslide = document.querySelectorAll('.myslider'),
    dot = document.querySelectorAll('.dot')

    let counter = 1;
    slidefun(counter);

    let timer = setInterval(autoslide, 5000)
    function autoslide (){
        counter += 1;
        slidefun(counter)
    }
    function plusSlider(n){
        counter += n
        slidefun(counter)
        resetTimer()
    }
    function currentSlide(n){
        counter = n
        slidefun (counter)
        resetTimer()
    }
    function resetTimer (){
        clearInterval(timer)
        let timer = setInterval(autoslide, 5000)
    }



    function slidefun (n){
        let i;
        for(i = 0; i < myslide.length; i++){
            myslide[i].style.display = "none";
        }
        for(i = 0; i < dot.length; i++){
            dot[i].classList.remove('active')
        }
        if(n > myslide.length){
            counter  = 1;
        }
        if(n < 1){
            counter = myslide.length
        }
        myslide[counter - 1].style.display = "block"
        dot[counter - 1].classList.add('active')
    }

    // class MenuCard{
    //     constructor(src, name, descr, perentSelector, ...classes){
    //         this.src = src
    //         this.name = name
    //         this.descr = descr
    //         this.perent = document.querySelector(perentSelector)
    //     }
        

    //     render(){
    //         if(this.classes.length === 0){
    //             this.classes = 'content'
    //             element.classList.add(this.classes)
    //         }else{
    //             this.classes.forEach(className => element.classList.add(className))
    //         }
    //         const element = document.createElement('div')
    //         element.innerHTML = `            
    //         <div class="content">
    //             <div class="content-img">
    //                 <img src="${this.src}" alt="jpg" >
    //         </div>
    //         <div class="content-info">
    //             <a href="#">${this.name}</a>
    //             <p>${this.descr}</p>
    //         </div>
    //     </div>`

    //     this.perent.appent(element)
    //     }
    // }

    // new MenuCard(
        
    // ).render()
    const menu = document.querySelector('.menu'),
          navbar = document.querySelector('.nav-link1');
          console.log(menu);
          console.log(navbar);

    scroll =>({
        
    })