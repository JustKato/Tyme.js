import TymeJS from "../src";

for ( let i = 0; i < 12; i++ ) {

    let currentMonth: Date = new Date();
    currentMonth.setMonth(i)

    const a = new TymeJS(currentMonth);
    
    console.log({
        single: a.getMonth("single"),
        double: a.getMonth("double"),
        full:   a.getMonth("full"),
        short:  a.getMonth("short"),
    });
}

