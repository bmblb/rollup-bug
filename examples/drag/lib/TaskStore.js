import Util from '../../../lib/Tool/util/Util.js';
import Store from '../../../lib/Tool/data/Store.js';
import Task from './Task.js';

export default class TaskStore extends Store {
    static get config() {
        return {
            Util,
            Store,
            Task
        }
    }
}
