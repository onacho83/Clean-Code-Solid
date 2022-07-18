(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {
            
        }
    }

    class InputEvents {
        constructor( ) {
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    class InputElements {
        public htmlElement : HtmlElement;
        public inputAttributes : InputAttributes;
        public inputEvents: InputEvents;

        getValue() {
            return this.inputAttributes.value; // Esto ahora es posible
        };
        constructor( 
            value : string,
            placeholder : string,
            id: string
            ){
                this.htmlElement = new HtmlElement(id, 'input');
                this.inputAttributes = new InputAttributes(value, placeholder);
                this.inputEvents = new InputEvents();
            }


    }

    const nameField = new InputElements('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()