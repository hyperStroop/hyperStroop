export class Model implements Subject {
  private allQuestions:Question[];
  private roundQuestions:Question[];
  private roundAnswers:boolean[];
  private currentQuestion:Question;
  private currentTime:number;
  private currentScore:number;
  private lastAnswer:boolean;
  private startTime:number;

  constructor() {
    this.reset(); //reset the game
  }

  /**
   * Resets the game to new game.
   * First game booleans stays false.
   */
  reset(){
    this.currentScore = 0;
    this.currentTime = 0;
    this.lastAnswer = false;
    this.startTime = new Date().getTime();
    this.roundQuestions = this.newQuestions();
    this.roundAnswers = [];
    this.allQuestions = this.roundQuestions;
    this.currentQuestion = this.roundQuestions.pop();
    this.notifyAll();
  }

  getQuestions():Question[] {
    return this.roundQuestions;    
  }

  getCurrentQuestion():Question {
    return this.currentQuestion;
  }

  getRoundAnswers():boolean[] {
    return this.roundAnswers;
  }

  getAllQuestions():Question[] {
    return this.allQuestions;
  }

  /**
   * Figures out the current time elapsed.
   * @returns the time elapsed since game start.
   */
  getTime():number {
    let distance = new Date().getTime() - this.startTime;
    let currentTime = Math.floor(distance);

    //document.getElementById("timer").innerHTML = "Time left: " + currentTime;

    return currentTime;
  }

  /**
   * Creates a new list of questions. 
   * @returns the list of questions.
   */
  newQuestions():Question[]{
    let roundQuestions:Question[] = [];
    for(var i = 0; i < 20; i++){
        let created:Question = new QuestionFactory().createQuestion();
        roundQuestions.push(created);
    }
    return roundQuestions;
  }
  
  /**
   * Checks to see if the user's answer matches the question's answer.
   * Updates the score, last answer boolean, current question, list of answers.
   * @param is the user's answer as a string (purple, orange, or green)
   * @returns whether their answer was true or false.
   */
  checkQuestion(answer:string):boolean {
    let check:boolean = (answer == this.getCurrentQuestion().getAnswer())
    if(check){
      this.currentScore += 1;
    }

    this.lastAnswer = check;
    this.roundAnswers.push(check);
    this.currentQuestion = this.roundQuestions.pop();
    this.notifyAll();
    return check;
  }


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