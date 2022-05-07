import TymeJS from "..";

let d: Date = new Date();

for ( let i = 0; i < 7; i++ ) {

    const a = new TymeJS(d);
    console.log(d, {
        single:    a.getDate("j"),
        double:    a.getDate("d"),
        dowdouble: a.getDate("w"),
        full:      a.getDate("l"),
        short:     a.getDate("D"),
    });

    d.setDate(d.getDate() + 1);
}

