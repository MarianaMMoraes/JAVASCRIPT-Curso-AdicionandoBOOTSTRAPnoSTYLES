
    console.log("JS - Hello World");

    let firstName = "Mariana"; //String
    let lastName = "De Melo Moraes";
    //let price = 30; //Se após isso for definido outro let para price, o valor passa a ser o novo valor associado
    //const price = 30; //Valor é constante
    let itemPrice = 10; //Number
    let itemAvailable = true; //Boolean
    //let itemColor; //Undefined
    let itemColor = "Red";

    //itemPrice = null; //NULL

    console.log(firstName, lastName);
    console.log(typeof lastName);

    //Object
    let pen = {
        firstName: "Mariana", //Property
        lastName: "De Melo Moraes",
        itemPrice: 10,
        itemAvailable: true,
        itemColor: "Red"
    };

    pen.itemColor = "Blue";

    console.log(pen.itemColor);

    //Array
    let friends = ["Ana", "Bernando", "Davi"];
    console.log(friends);
    friends[0] = "Mariana";
    console.log(friends[0]);

    console.log(pen);

    