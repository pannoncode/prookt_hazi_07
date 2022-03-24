console.log("Házi ok");
/*
    1. Készíts egy olyan osztályt, mely egy tömböt tárolására alkalmas, és
        - Képes kiszamolni az elemek összegét, átlagát, minimumát, maximumát (ezek egy-egy külön függvény legyenek)
        - Egy másik ugyanilyen példány tömbjének elemeiből képes átvenni azokat az elemeket, amelyek még nem szerepelnek saját
        magában
    
    2. Készítsük el a számológép objektum orientált változatát. Az objektum tárolya is el az eredmenyt.

    3. Írjuk egy Auto osztályt!
        - Az Auto osztály konstruktorában állítsuk be az autó rendszámát, az üzemanyagtartály méretét literben,
        az autó átlagfogyasztását (Hány litert fogyaszt 100km-en), és azt, hogy az auto eddig hány km-et tett meg.

        - rendelkezzen a egy tankol metódussal, ami paraméterként megkapja, hogy hány litret szeretnénk tankolni.
            - A tankolás sikeres, ha a tartályba belefér még a tankolni kívánt mennyiség
            - A tankolás sikertelen, ha nem fér bele a kívánt mennyiség.
            - A metódus visszatér a tankolás sikerével vagy sikertelenségével, azaz egy logikai típussal.

        - rendelkezzen egy szervíz (szerviz) metódussal, ami lefut előszőr a konstruktorban.
            - Ez a 10 000 km-enkénti kötelező szervízet jelenti.
            - ha megtettünk vele 10 000 km tvolságot, kötelezően szervízelni kell, anékül ne indulhasson el az autó.

            szervíz után természetesen ez a számláló nullázódik.

        - rendekezzen egy száguld (szaguld) metódussal, ami paraméterben megkapja az utazás távolságát km-ben.
            - az üzemanyag fogyjon annyival, amennyi szükséges a megtenni kívánt távolság megtételéhez.
            - a megtett km-ek növekedjen a megtett út hosszával.
            - ha nincs elegendő üzemanyag, az autó ne induljon es térjen vissza "tankolj" üzenettel.
            - ha eljött a kötelező szervíz ideje, az autó ne induljon el és térjen vissza "szerviz" üzenettel.
            - ha sikeresen megtette a távot, térjen vissza "siker" üzenettel.
*/

/*
    1. Készíts egy olyan osztályt, mely egy tömböt tárolására alkalmas, és
        - Képes kiszamolni az elemek összegét, átlagát, minimumát, maximumát (ezek egy-egy külön függvény legyenek)
        - Egy másik ugyanilyen példány tömbjének elemeiből képes átvenni azokat az elemeket, amelyek még nem szerepelnek saját
        magában
*/


var tomb1 = [10, 13, 45, 16];
var tomb2 = [11, 54, 31, 34];

class StoreArr {

    constructor(array) {
        this.array = array.slice();
    }

    sum() {
        let sumArr = this.array.reduce((total, el) => total + el);
        return sumArr;
    }

    avg() {
        let sum = this.array.reduce((total, el) => total + el);
        let avg = sum / this.array.length;
        return avg;
    }

    min() {
        let min = Math.min.apply(Math, this.array);
        return min;
    }

    max() {
        let max = Math.max.apply(Math, this.array);
        return max;
    }

}

let test1 = new StoreArr(tomb1);
let test2 = new StoreArr(tomb2);





/*
    2. Készítsük el a számológép objektum orientált változatát. Az objektum tárolya is el az eredmenyt.
*/

class Calculator {

    constructor(number1, number2, operator) {
        this.num1 = number1;
        this.num2 = number2;
        this.op = operator;
    }

    calc() {
        let result;
        switch (this.op) {
            case "+":
                result = this.num1 + this.num2;
                return result;
                break;
            case "-":
                result = this.num1 - this.num2;
                return result;
                break;
            case "/":
                result = this.num1 / this.num2;
                return result;
                break;
            case "*":
                result = this.num1 * this.num2;
                return result;
                break;
            default:
                console.log("Hiba");
                break;
        }
    }
}

let test3 = new Calculator(10, 5, "+");





/*
    3. Írjuk egy Auto osztályt!
        - Az Auto osztály konstruktorában állítsuk be az autó rendszámát, az üzemanyagtartály méretét literben,
        az autó átlagfogyasztását (Hány litert fogyaszt 100km-en), és azt, hogy az auto eddig hány km-et tett meg.

        - rendelkezzen a egy tankol metódussal, ami paraméterként megkapja, hogy hány litret szeretnénk tankolni.
            - A tankolás sikeres, ha a tartályba belefér még a tankolni kívánt mennyiség
            - A tankolás sikertelen, ha nem fér bele a kívánt mennyiség.
            - A metódus visszatér a tankolás sikerével vagy sikertelenségével, azaz egy logikai típussal.

        - rendelkezzen egy szervíz (szerviz) metódussal, ami lefut előszőr a konstruktorban.
            - Ez a 10 000 km-enkénti kötelező szervízet jelenti.
            - ha megtettünk vele 10 000 km tvolságot, kötelezően szervízelni kell, anékül ne indulhasson el az autó.

            szervíz után természetesen ez a számláló nullázódik.

        - rendekezzen egy száguld (szaguld) metódussal, ami paraméterben megkapja az utazás távolságát km-ben.
            - az üzemanyag fogyjon annyival, amennyi szükséges a megtenni kívánt távolság megtételéhez.
            - a megtett km-ek növekedjen a megtett út hosszával.
            - ha nincs elegendő üzemanyag, az autó ne induljon es térjen vissza "tankolj" üzenettel.
            - ha eljött a kötelező szervíz ideje, az autó ne induljon el és térjen vissza "szerviz" üzenettel.
            - ha sikeresen megtette a távot, térjen vissza "siker" üzenettel.
*/
class Auto {

    constructor(rendszam, uzanytart, atlagfogy, kmoraallas) {
        this.rendszam = rendszam;
        this.uzanytart = uzanytart;
        this.atlagfogy = atlagfogy;
        this.kmoraallas = kmoraallas;

        this.sumTankLevel = 0;
        this.tankOption = true;

        this.szervizLevel = 0;
        this.szervizeles = false;
        this.szervizValue = 9999;

        this.szerviz = function(distance) {
            if (distance > this.szervizValue) {
                alert("Szervizelés nélkül ennyit nem mehet az autó");
                this.szervizeles = true;
            } else {
                this.szervizLevel += distance;
                if (this.szervizLevel > this.szervizValue) {
                    this.szervizeles = true;
                    if (confirm('Szerivezlni kell')) {
                        // ezt azért csináltam, hogy ilyenkor "egyből ment szervízbe a kocsi"
                        this.szervizeles = false;
                        this.szervizLevel = 0;
                        alert("Szervizben voltál, minden rendben! A km óra állásod: " + this.kmoraallas);
                    } else {
                        this.szervizeles = true;
                        alert("Addig nem indulhatsz amíg nincs szerviz!");
                    }
                }
            }
        }
    }


    tankol(tank) {
        this.sumTankLevel += tank;
        let emptyTank = this.uzanytart - this.sumTankLevel;

        for (this.sumTankLevel; emptyTank >= 0;) {
            alert(`A tank szintje: ${this.sumTankLevel}L. Maradék mennyiség amit még tankolhatsz: ${emptyTank}L`);
            this.tankOption = true;
            return this.tankOption;
        }
        this.sumTankLevel -= tank;
        emptyTank += tank;
        alert("Ez már nem fér bele");
        this.tankOption = false;
        return this.tankOption;
    }

    szaguld(distance) {
        let consumption = (distance / 100) * this.atlagfogy;
        this.szerviz(distance);
        if (!this.szervizeles) {
            this.sumTankLevel -= consumption;
            this.kmoraallas += distance;
            if (this.sumTankLevel <= 0) {
                // itt visszatöltöm a this.sumTankLevelt-t, hogy megmaradjon az "eredeti" állapot
                this.sumTankLevel += consumption;
                this.tankOption = false;
                alert("Tankolni kell!");
            }
        }
        if (this.szervizeles === false && this.tankOption === true)
            alert("SIKER");
    }
}


var test4 = new Auto("KNH630", 100, 5, 100000);