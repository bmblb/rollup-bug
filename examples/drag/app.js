import MyView from './lib/MyView.js';
import TaskStore from './lib/TaskStore.js';

let myView = new MyView({
    eventStore : {
        storeClass : TaskStore
    }
});

window.myView = myView;

document.getElementById('target').innerText = `${TaskStore.config.Store.name}`;