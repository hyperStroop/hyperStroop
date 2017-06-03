import 'bootstrap'; //bootstrap.js for button toggling
import 'jQuery';

import {Model} from './model';
import {View as GameView} from './game-view';
import {Controller} from './controller'

let model = new Model();
let view = new GameView(model);
let controller = new Controller(model, view);
