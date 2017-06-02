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

    handleKeypress(event:KeyboardEvent, action:string){
        let selectedKey = event.keyCode;
        //key codes:         
        //left arrow: 37
        //up arrow: 38
        //right arrow: 39
        //down arrow: 40
        this.model.setSelected(event.keyCode);
    }

    handleKeyUp(event:MouseEvent) {
        this.model.unselect();
    } 

}