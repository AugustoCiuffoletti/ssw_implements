// Import stylesheets
import "./style.css";

interface miaInterfaccia {
  f1: string,
  f2: any
}
class miaClasse implements miaInterfaccia {
  f1: string;
  f2: number;
  f3: boolean;
  constructor() {
    this.f1 = "";
    this.f2 = 0;
    this.f3 = false;
  }
}
var X = new miaClasse();
var a = "Hallo";
X.f1 = a;
X.f2 = 4;
console.log(X);
