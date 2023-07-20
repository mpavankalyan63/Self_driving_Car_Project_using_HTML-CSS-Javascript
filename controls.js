class Controls{
    constructor(type)
    {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        
// In the given class, this.#addKeyboardListeners() is a method call that invokes a private method called addKeyboardListeners(). The # symbol before the method name indicates that it is a private method.
// Private methods are not accessible outside the class definition and can only be called from within the class itself. They are typically used to encapsulate internal logic or implementation details that are not intended to be used or accessed by external code.
// The addKeyboardListeners() method is likely responsible for adding event listeners to the keyboard in order to capture key presses and handle them accordingly. This method could be implemented to listen for specific keyboard keys related to controlling movement (such as arrow keys or WASD keys) and update the corresponding properties (forward, left, right, reverse) accordingly based on the key press events. The details of the implementation would depend on the specific requirements and design of the class.
        switch(type)
        {
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            
            case "DUMMY":
                this.forward = true;
                break;
        }
    }

    #addKeyboardListeners()
    {
        // the below document.onkeydown is for the event when the key is pressed
        document.onkeydown = (event)=>{

            switch(event.key)
            {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            console.table(this);
        }
        // The below document.onkeyup is for the event when the key is released
        document.onkeyup = (event)=>{

            switch(event.key)
            {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            console.table(this);
        }
    }


}