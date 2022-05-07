import TymeJS from "..";

for ( let i = 0; i < 12; i++ ) {

    let currentMonth: Date = new Date();
    currentMonth.setMonth(i)

    const a = new TymeJS(currentMonth);
    
    console.log({
        single: a.getMonth("n"),
        double: a.getMonth("m"),
        full:   a.getMonth("F"),
        short:  a.getMonth("M"),
    });
}

