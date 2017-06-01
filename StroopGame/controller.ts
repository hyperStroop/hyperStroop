import {Model} from './model';
import {View} from './game-view';
// import * as $ from 'jquery';

export class Controller {
    constructor(private model:Model, private view:View) {
        model.subscribe(view);
        view.setController(this);
    }

    start() {
        this.view.display();
    }

    $(document).ready(function() {
        $(document).bind('keydown', function(e) {
            if (e.keyCode == 32) { //spacebar
                this.model.checkQuesion("purple");
            } else if (e.keyCode == 70) { //"F" key
                this.model.checkQuestion("green");
            } else if (e.keyCode == 74) { //"J" key
                this.model.checkQuestion("orange");
            } else {
                
            }
        })
    });

    handleKeyDown(event:KeyboardEvent){
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