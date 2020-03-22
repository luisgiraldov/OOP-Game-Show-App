
class Animation {

    // constructor(element){
    //     this.element = element;
    //     this.txt = this.element.textContent;
    //     this.speed = 130;
    //     this.element.textContent = "";
    // }
    typeWriter(element) {
        let i = 0;
        let txt = "";
        let elements = null;
        const speed = 130;

        //if it is just one element will be undefined, hence the negation, to validate that it is one element and not a nodelist
        if(!element.length){
            txt = element.textContent;
            element.textContent = "";
        } //The following should return true, if element is of type NodeList
         else if(NodeList.prototype.isPrototypeOf(element)){
            elements = element;
        }

        function executeTypeWriter(){

            if(elements !== null){
                if(i < elements.length){
                    //removes the js-hidden class on each li element so it will show up like writing it
                    elements[i].classList.remove("js-hidden");
                    i++;
                    setTimeout(executeTypeWriter, speed);
                }
            }
            else{
                if (i < txt.length) {
                    element.textContent += txt.charAt(i);
                    i++;
                    setTimeout(executeTypeWriter, speed);
                }
            }
                

        }

        executeTypeWriter();
    }


} // end Animation
    // let i = 0;
    // const h2 = document.getElementById("prueba");
    // const txt = h2.textContent;
    // h2.textContent = "";
    // const speed = 130;

    // function typeWriter() {

    //     if (i < txt.length) {
    //         h2.textContent += txt.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, speed);
    //     }
    // }

    // typeWriter();