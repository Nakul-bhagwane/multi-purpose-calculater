//                                                    navigation menu tab  section starts here ==>
//============================================================================================================================================

// navigation menu buttons varibles
const calculater = document.getElementById("calculater_section");
const exchange = document.getElementById("exchange_section");
const converter = document.getElementById("converter_section");

// calculater navigation button
calculater.addEventListener("click", () => {

    document.getElementById("calculater").style.display = "block";
    document.getElementById("convertermain").style.display = "none";
    document.getElementById("exchange").style.display = "none";

    calculater.style.color = "aqua";
    calculater.classList.add("active_div")

    exchange.style.color = "white";
    exchange.classList.remove("active_div")

    converter.style.color = "white";
    converter.classList.remove("active_div")
});

// Currency exchange navigation button
exchange.addEventListener("click", () => {

    document.getElementById("calculater").style.display = "none";
    document.getElementById("convertermain").style.display = "none";
    document.getElementById("exchange").style.display = "block";

    calculater.style.color = "white";
    calculater.classList.remove("active_div")

    exchange.style.color = "aqua";
    exchange.classList.add("active_div")

    converter.style.color = "white";
    converter.classList.remove("active_div")
});

// converter navigation button
converter.addEventListener("click", () => {

    document.getElementById("calculater").style.display = "none";
    document.getElementById("convertermain").style.display = "flex";
    document.getElementById("exchange").style.display = "none";

    calculater.style.color = "white";
    calculater.classList.remove("active_div")

    exchange.style.color = "white";
    exchange.classList.remove("active_div")

    converter.style.color = "aqua";
    converter.classList.add("active_div")
});


//                                                      calculater logic starts from here ==>
// ===========================================================================================================================================
// variables for the display or buttons and one for evaluted values
const screen = document.getElementById('app_screen');
let buttons = document.getElementsByClassName('btns');
let master = '';

// for kyboard buttons 
window.addEventListener("keypress", (i) => {
    let value = i.key;
    console.log(i);

    if (value == "1" || value == "2" || value == "3" || value == "4" || value == "5" || value == "6" || value == "7" || value == "8" ||
        value == "9" || value == "0" || value == "+" || value == "-" || value == "*" || value == "/" || value == "=" || value == "X" ||
        value == "x" || value == "Enter") {

        if (value == "=" || value == "Enter") {
            screen.value = eval(master);
        }
        else if (value == "AC") {
            master = " ";
            screen.value = " ";
        }
        else if (value == "X" || value == "x") {
            value = "*"
            master += value;
            screen.value = master;
        }
        else if (value == "Enter") {
            // value = "=";
            // master += value;
            // screen.value = master;
        }
        else {
            master += value;
            screen.value = master;
        }
    }
});

// for app keypad buttons 
for (let i of buttons) {
    i.addEventListener('click', () => {
        let value = i.innerHTML;

        if (value == "=") {
            console.log(master);
            screen.value = eval(master);
        }
        else if (value == "AC") {
            master = " ";
            screen.value = " ";
        }
        else if (value == "DEL") {
            let del_value = master.slice(0, master.length - 1);
            master = del_value
            screen.value = master;
        }
        else if (value == "X") {
            value = "*"
            master += value;
            screen.value = master;
        }
        else {
            master += value;
            screen.value = master;
        }
    });
};


//                                                        Currency exchange logic starts from here =>
//=============================================================================================================================================

// this varible is for telling to the currencySetter that this option button called me becaue there are two option buttons 
let exchange_section = "";

// currenc exchange options displays this fucntion also tell us that which button calling it 
CurrencyOptionsVisible = (e) => {
    exchange_section = e;
    document.getElementById("currency_options").style.display = "block"
}

/* currency exchange options hide/it is just a cross button in the options with this user 
can also hide the options display without even selecting an option*/
document.getElementById("hider").addEventListener("click", () => {
    document.getElementById("currency_options").style.display = "none"
});


/* currency exchange option setter when this fucntion get called it will set the choosen option
 in the option displayer button or we can say indicator*/
let currencySetter = "";
exchangeOptionSetter = (e) => {
    currencySetter = e.textContent
    if (exchange_section == "section1") {
        document.getElementById("currencyOptionsBtn1").textContent = currencySetter;
        document.getElementById("currency_options").style.display = "none"
    }
    else if (exchange_section == "section2") {
        document.getElementById("currencyOptionsBtn2").textContent = currencySetter;
        document.getElementById("currency_options").style.display = "none"
    }
}

let currencyInput_definne = "";
currencyInput = (e) => {
    currencyInput_definne = e;
};

let screen1 = document.querySelector(".converter1");
let screen2 = document.querySelector(".converter2");

let ceKeypad = document.querySelectorAll('.CE_btns');
let mastervar = "";
let mastervar2 = "";



for (let btn of ceKeypad) {
    btn.addEventListener('click', () => {
        let value = btn.innerHTML;

        if (currencyInput_definne == "currencyInput1") {
            if (value == "=") {
                console.log(mastervar);
                screen1.value = eval(mastervar);
            }
            else if (value == "AC") {
                mastervar = " ";
                screen1.value = " ";
            }
            else if (value == "DEL") {
                let del_value = mastervar.slice(0, mastervar.length - 1);
                mastervar = del_value
                screen1.value = mastervar;
            }
            else if (value == "X") {
                value = "*"
                mastervar += value;
                screen1.value = mastervar;
            }
            else {
                mastervar += value;
                screen1.value = mastervar;
            }
        }

        else if (currencyInput_definne == "currencyInput2") {
            if (value == "=") {
                console.log(mastervar2);
                screen2.value = eval(mastervar2);
            }
            else if (value == "AC") {
                mastervar2 = " ";
                screen2.value = " ";
            }
            else if (value == "DEL") {
                let del_value = mastervar2.slice(0, mastervar2.length - 1);
                mastervar2 = del_value
                screen2.value = mastervar2;
            }
            else if (value == "X") {
                value = "*"
                mastervar2 += value;
                screen2.value = mastervar2;
            }
            else {
                mastervar2 += value;
                screen2.value = mastervar2;
            }
        }
        else {
            alert("please select the display one or two")
        }
    });
};





//                                           converter section logic starts from here ==> 
//=============================================================================================================================================
let convertBtnID = '';

// this function display the converter calculater screen  and hide all the converter optionn 
converterBtnshider = () => {
    document.getElementById("converterScreen").style.display = "block";
    document.getElementById("length").style.display = "none";
    document.getElementById("area").style.display = "none";
    document.getElementById("volume").style.display = "none";
    document.getElementById("speed").style.display = "none";
    document.getElementById("weight").style.display = "none";
    document.getElementById("temprature").style.display = "none";
    document.getElementById("power").style.display = "none";
    document.getElementById("pressure").style.display = "none";
}


// this fucntion takes action when user choose the conveerter option 
// this fucntion also calls a fucntion name "converterBtnshider" you can see that function above 
//this is just for changing the default value of the unit indicators
//  this fcuntionn also give us a value that we are making available globally and that value tell us that what option is choosen by user
converterOptionBtn = (e) => {
    convertBtnID = e;
    converterBtnshider();

    if (convertBtnID == "this is length") {
        document.getElementById("converterBtn1").textContent = "Meter";
        document.getElementById("converterBtn2").textContent = "Inch";
        
    }
    else if (convertBtnID == "this is area") {
        document.getElementById("converterBtn1").textContent = "Square cm";
        document.getElementById("converterBtn2").textContent = "Square meter";
    }
    else if (convertBtnID == "this is volume") {
        document.getElementById("converterBtn1").textContent = "Cubic meter";
        document.getElementById("converterBtn2").textContent = "Hectoliter";
    }
    else if (convertBtnID == "this is speed") {
        document.getElementById("converterBtn1").textContent = "km/s";
        document.getElementById("converterBtn2").textContent = "km/hour";
    }
    else if (convertBtnID == "this is weight") {
        document.getElementById("converterBtn1").textContent = "Kg";
        document.getElementById("converterBtn2").textContent = "Mg";
    }
    else if (convertBtnID == "this is temprature") {
        document.getElementById("converterBtn1").textContent = "Degree Celsius";
        document.getElementById("converterBtn2").textContent = "Kelvin";
    }
    else if (convertBtnID == "this is power") {
        document.getElementById("converterBtn1").textContent = "Watt";
        document.getElementById("converterBtn2").textContent = "Kilowatt";
    }
    else if (convertBtnID == "this is pressure") {
        document.getElementById("converterBtn1").textContent = "Milibar";
        document.getElementById("converterBtn2").textContent = "Bar";
    }
}


/* this is exit button action this exit button is visible when user choos the converter option and when it get clicked it will show the 
 converter options again */
document.getElementById("converterSreenExit").addEventListener("click", () => {
    document.getElementById("converterScreen").style.display = "none";
    document.getElementById("length").style.display = "block";
    document.getElementById("area").style.display = "block";
    document.getElementById("volume").style.display = "block";
    document.getElementById("speed").style.display = "block";
    document.getElementById("weight").style.display = "block";
    document.getElementById("temprature").style.display = "block";
    document.getElementById("power").style.display = "block";
    document.getElementById("pressure").style.display = "block";
});


// this function is for the units indicators it will show the little winndow that contains unit lists
// this function also give us a value that tell us that i am comming from indicator 1 or 2
// and we are making that value global available with 'convertsUnitID' variable so that other function also use that

let convertsUnitID = "";

convertersUnits = (e) => {
    convertsUnitID = e;
    console.log(e);

    if (convertBtnID == "this is length") {
        document.getElementById("displayForLength").style.display = "block"
    }
    else if (convertBtnID == "this is area") {
        document.getElementById("displayForArea").style.display = "block"
    }
    else if (convertBtnID == "this is volume") {
        document.getElementById("displayForVolume").style.display = "block"
    }
    else if (convertBtnID == "this is speed") {
        document.getElementById("displayForSpeed").style.display = "block"
    }
    else if (convertBtnID == "this is weight") {
        document.getElementById("displayForWeight").style.display = "block"
    }
    else if (convertBtnID == "this is temprature") {
        document.getElementById("displayForTemprature").style.display = "block"
    }
    else if (convertBtnID == "this is power") {
        document.getElementById("displayForPower").style.display = "block"
    }
    else if (convertBtnID == "this is pressure") {
        document.getElementById("displayForPressure").style.display = "block"
    }
}


// this function is for hiding the little window fo unites that will popup when we will click on the unit indicator
converterUnitsHider = (e) => {
    document.getElementById(`displayFor${e}`).style.display = "none"
}



units=(e)=>{
    if( convertsUnitID == "units section 1"){
        document.getElementById("converterBtn1").textContent = e.textContent;
    }
    else if( convertsUnitID == "units section 2"){
        document.getElementById("converterBtn2").textContent = e.textContent;
    }
}