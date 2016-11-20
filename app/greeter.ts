import Name from "./name";

class Greeter {
    private name: Name;

    constructor(name: Name) {
       this.name = name;
    }

    public hello(): string {
        return "hello " + this.name.luke();
    }
}

export default Greeter;
