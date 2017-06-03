import {Model} from './model';
import {Controller} from './controller';

/**
 * A class to represent the View. Contains control buttons and an HTML5 canvas.
 */
export class View {
  //constants for access
//   readonly canvas = <HTMLCanvasElement>$('#graphics-view canvas')[0];

  readonly document = <HTMLElement>$('#game-view')[0];

  private selected:KeyType; //selected state is handled by View
  private action:string; //what action we are doing (handled by View)
  private ctrl:Controller;

  constructor(private model:Model){
    //event listeners (DOM for readability/speed)
    this.document.addEventListener('keypress', (e) => {this.handleKeypress(e)});

    // let newGame = $("#newgame");
    //this.action = optionButtons.val(); //current (initial) selection    
    //optionButtons.change((e) => { this.action = $(e.target).val();  console.log(this.action); }); //update action

    //responsive canvas
    // $(window).resize(() => {this.resizeCanvas()}); //call function on window resize
    // this.resizeCanvas(); //initial sizing

  }

  setController(ctrl:Controller) {
    this.ctrl = ctrl;
  }

  display() {
    let questions = this.model.getQuestions(); //read from the model
  }

  handleKeypress(event:KeyboardEvent){
    //console.log("view handle key down");
    this.ctrl.handleKeypress(event);
  }  

  handleMouseDown(event:MouseEvent){
    //console.log(" view handle key up");
    //this.ctrl.handleKeyUp(event);   
  }

  //make game responsive
  resizeCanvas() {
    // add code here
    this.display();
  }

  notify() {
    this.display();
  }

}
