import {Model} from './model';
import {View} from './game-view';

export class Controller {
    constructor(private model:Model, private view:View) {
        model.subscribe(view);
        view.setController(this);
    }

    start() {
        this.view.display();
    }

    handleKeypress(event:KeyboardEvent){
        let selectedKey = event.keyCode;
        //key codes:         
        //left arrow: 37
        //up arrow: 38
        //right arrow: 39
        //down arrow: 40
        //f: 70
        //j: 74
        //space: 32

        if(selectedKey === 70){
            this.model.checkQuestion('green');
        } 
        else if(selectedKey === 74){
            this.model.checkQuestion('orange');   
        }
        else if(selectedKey === 32){
            this.model.checkQuestion('purple');
        }
    }
}