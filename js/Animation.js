/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Animation.js */
class Animation {

    /***
    * `typeWriter` method
    * @param {Object} element - holds the element where the animation it's going to take place
    * this method uses setTimeout to add each character into the element creating a typing effect
    * Effect learned from https://www.w3schools.com/howto/howto_js_typewriter.asp
    ***/
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