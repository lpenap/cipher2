class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(o) {
        this.observers.push(o);
    }

    notifyObservers(event, data) {
        this.observers.forEach(o => {
            o.update(event, data);
        });
    }
}

class AbstractUi extends Subject {
    constructor() {
        super();
        if (this.constructor == AbstractUi) {
            throw new Error(" Object of AbstractUi Class cannot be created");
        }
    }

    loadTabs() {
        throw new Error("Abstract Method has no implementation");
    }

	init() {
		throw new Error("Abstract Method has no implementation");
	}
}

module.exports = AbstractUi;
