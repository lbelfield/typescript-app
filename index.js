import Greeter from "./app/build/greeter.js";
import Name from "./app/build/name.js";

var name = new Name();
var greeter = new Greeter(name);

console.log(greeter.hello());
