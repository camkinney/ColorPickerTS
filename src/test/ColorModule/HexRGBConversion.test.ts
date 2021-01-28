import * as CM from "../../ColorModule";

test("Hex => RGB works with a 6 digit hexadecimal", () => {
    let hexValue = "32a852";
    let rgbValue = CM.HexToRGB(hexValue);
    expect(rgbValue.r).toBe(50);
    expect(rgbValue.g).toBe(168);
    expect(rgbValue.b).toBe(82);
});

test("Hex => RGB works with a string of hex characters greater than 6", () => {
    let hexValue = "e32a852";
    let rgbValue = CM.HexToRGB(hexValue);
    expect(rgbValue.r).toBe(50);
    expect(rgbValue.g).toBe(168);
    expect(rgbValue.b).toBe(82);
});

test("Hex => RGB works with a string of hex characters less than 6", () => {
    let hexValue = "9a831";
    let rgbValue = CM.HexToRGB(hexValue);
    expect(rgbValue.r).toBe(9);
    expect(rgbValue.g).toBe(168);
    expect(rgbValue.b).toBe(49);
});

test("RGB => Hex works correctly for R,G,B values > f", () => {
    let rgbValues = new CM.RGBValues(234, 122, 104);
    let hex = CM.RGBToHex(rgbValues);
    expect(hex).toBe("ea7a68");
});

test("RGB => Hex works correctly for R,G,B values < f", () => {
    let rgbValues = new CM.RGBValues(9, 9, 8);
    let hex = CM.RGBToHex(rgbValues);
    expect(hex).toBe("090908");
});
