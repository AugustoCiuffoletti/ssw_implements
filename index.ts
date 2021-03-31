// Import stylesheets
import "./style.css";

interface colorata { colore: string }
interface miaInterfaccia { f1: string, f2: any }
class miaClasse implements miaInterfaccia, colorata {
  f1: string;
  f2: number;
  f3: boolean;
  colore: string;
  constructor() {
    this.f1 = "";
    this.f2 = 0;
    this.f3 = false;
    this.colore = "rosso";
  }
}
var X = new miaClasse();
X.f1 = "Hallo";
X.f2 = 4;
console.log(X);
