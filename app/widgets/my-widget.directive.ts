module App.Widgets {
    export class MyWidget {
        constructor(public name : string) {            
        }

        sayHello() {
            return this.name;
        }
    }
}