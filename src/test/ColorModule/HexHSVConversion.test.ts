import * as CM from "../../ColorModule";

test("Hex => HSV works with a 6 digit hexadecimal", () => {
    let hexValue = "4a6e09";
    let hsvValue = CM.HexToHSV(hexValue);
    expect(hsvValue.h).toBe(81);
    expect(hsvValue.s).toBe(92);
    expect(hsvValue.v).toBe(43);
});

test("Hex => HSV works with a 7 digit hexadecimal", () => {
    let hexValue = "a4a6e09";
    let hsvValue = CM.HexToHSV(hexValue);
    expect(hsvValue.h).toBe(81);
    expect(hsvValue.s).toBe(92);
    expect(hsvValue.v).toBe(43);
});

test("Hex => HSV works with a 5 digit hexadecimal", () => {
    let hexValue = "d1203";
    let hsvValue = CM.HexToHSV(hexValue);
    expect(hsvValue.h).toBe(80);
    expect(hsvValue.s).toBe(83);
    expect(hsvValue.v).toBe(7);
});

test("HSV => Hex works with achromatic values", () => {
    let hsvValues= new CM.HSVValues(232,0,45);
    let hexValue = CM.HSVToHex(hsvValues);

    expect(hexValue).toBe("737373");
});

test("HSV => Hex works with hue as multiple of 60", () => {
    let hsvValues= new CM.HSVValues(240,55,45);
    let hexValue = CM.HSVToHex(hsvValues);

    expect(hexValue).toBe("343473");
});

test("HSV => Hex works with full saturation", () => {
    let hsvValues= new CM.HSVValues(240,100,45);
    let hexValue = CM.HSVToHex(hsvValues);

    expect(hexValue).toBe("000073");
});

test("HSV => Hex works with hue value between 180 and 240", () => {
    let hsvValues= new CM.HSVValues(202,33,45);
    let hexValue = CM.HSVToHex(hsvValues);

    expect(hexValue).toBe("4d6573");
});

test("HSV => Hex works correctly for equivalent R,G,B values > f", () => {
    let hsvValues = new CM.HSVValues(244, 73, 79);
    let hex = CM.HSVToHex(hsvValues);
    expect(hex).toBe("4036c9");
});

test("HSV => Hex works correctly for equivalent R,G,B values < f", () => {
    let hsvValues = new CM.HSVValues(1, 1, 1);
    let hex = CM.HSVToHex(hsvValues);
    expect(hex).toBe("030303");
});