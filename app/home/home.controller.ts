module App.Home {
    export class HomeController {
        constructor(public name : string) {
        }

        sayHello() {
            return this.name;
        }
    }
}