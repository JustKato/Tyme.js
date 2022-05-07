import TymeJS from "../index";

test(`Formatting Test`, () => {
    let ts = new Date();

    ts.setFullYear(1998);
    ts.setMonth(9);
    ts.setDate(24);

    let ty = new TymeJS(ts);

    expect(ty.format("d/m/Y")).toBe("24/10/1998")

})