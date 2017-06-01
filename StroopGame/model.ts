export class Model implements Subject {
  private roundQuestions:Question[];
  private currentTime:number;
  private currentScore:number;
  private firstGame:boolean;
  private lastAnswer:boolean;

  constructor() {
    this.reset(); //reset the game
    this.firstGame = true;
  }

  reset(){
    this.currentScore = 0;
    this.currentTime = 0;
    this.firstGame = false;
    this.lastAnswer = false;
    this.roundQuestions = this.newQuestions();
    this.notifyAll();
  }

  newQuestions():Question[]{
    for(var i = 0; i < 20; i++){
        let created = new QuestionFactory().createQuestion();
        this.roundQuestions.push(created);
    }
    return this.roundQuestions;
  }

  getQuestions():Question[] {
    return this.roundQuestions;    
  }

  getFirstGame():boolean {
    return this.firstGame;
  }

  getCurrentQuestion():Question {
    return this.roundQuestions.pop();
  }
  
  //@param number is the keyboard code for the key that the user entered
  setSelected(selectedKey:number) {
    //key codes:         
        //left arrow: 37
        //up arrow: 38
        //right arrow: 39
        //down arrow: 40
    //still needs to check to see whether that keycode matches with the correct answer
  }

  checkQuestion(answer:string):boolean {
    if(answer == this.getCurrentQuestion().getAnswer()){
      this.lastAnswer = true;
      this.currentScore += 1;
      return true;
    }
    else {
      this.lastAnswer = false;
      return false;
    }
  }

  unselect() {
    //reset to go to the next card
  }

  // getShapeAt(x:number, y:number):Shape{
  //   let found:Shape;
  //   for(let shape of this.shapes){
  //     if(shape.contains(x,y)){
  //       found = shape;
  //     }
  //   }
  //   return found; //return last shape
  // }

  // //TODO: Add more methods...
  

  // updateText(shape, index):void{
  //   this.shapes[index].updateProperties(shape);
  //   let updateShape = this.shapes[index];
  //   this.notifyAll();
  // }

  // Subject methods (Observer pattern)
  private observers:Observer[] = [];


  subscribe(observer:Observer){
    this.observers.push(observer);
  }

  unsubscribe(observer:Observer){
    let index = this.observers.indexOf(observer);
    
    if(index > -1){
      this.roundQuestions.splice(index, 1);
    }
  }

  notifyAll(){
    this.observers.forEach((observer:Observer) => {
      observer.notify();
    })
  }
}

/**
 * Interface for any subject to be observed by an observer.
 */
export interface Subject {
  subscribe(observer:Observer):void   //Adds an observer to the subject.
  unsubscribe(observer:Observer):void //Removes an observer from the subject.
  notifyAll():void //Notifies all observers that the subject has.
}

export interface Observer {
  notify():void; //Notifies the observer of a change.
}

export class Question {
    constructor(private word:string, private color:string, private answer:string) {}

    getWord():string{
        return this.word;
    }

    getColor():string{
        return this.color;
    }

    getAnswer():string{
        return this.answer;
    }
}

export class QuestionFactory {
    createQuestion():Question {
        let firstRand:number = Math.floor(Math.random() * 3) + 1;
        let secondRand:number = Math.floor(Math.random() * 3) + 1;

        while(firstRand == secondRand) {
            let secondRand = Math.floor(Math.random() * 3) + 1;
        }

        let color1 = this.getColorByNumber(firstRand);
        let color2 = this.getColorByNumber(secondRand);

        return new Question(color1, color2, this.getAnswerByColors(color1, color2));
    }

    getColorByNumber(color:number):string{
        if(color == 1){
            return "red";
        }
        else if(color == 2){
            return "blue";
        }
        else if(color == 3){
            return "yellow";
        }
        return "black";
    }

    getAnswerByColors(color1:string, color2:string):string{
        if((color1 == "red" || color2 == "red") && (color1 == "blue" || color2 == "blue")){
            return "purple"
        }
        else if((color1 == "red" || color2 == "red") && (color1 == "yellow" || color2 == "yellow")){
            return "orange"
        }
        else if((color1 == "blue" || color2 == "blue") && (color1 == "yellow" || color2 == "yellow")){
            return "green"
        }
        else {
            return null;
        }
    }
}