import TymeJS from "../src";

let startDate: Date = new Date();

for ( let i = 0; i < 7; i++ ) {
    const a = new TymeJS(startDate);
    console.log(startDate, {
        single:    a.getDate("single"),
        double:    a.getDate("double"),
        dowsingle: a.getDate("dowsingle"),
        dowdouble: a.getDate("dowdouble"),
        full:      a.getDate("long"),
        short:     a.getDate("short"),
    });

    startDate.setDate(startDate.getDate() + 1);
}

