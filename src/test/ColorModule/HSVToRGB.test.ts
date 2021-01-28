import * as CM from "../../ColorModule";

test("HSV => RGB works with achromatic values", () => {
    let hsvValues= new CM.HSVValues(232,0,45);
    let rgbValues = CM.HSVToRGB(hsvValues);

    expect(rgbValues.r).toBe(115);
    expect(rgbValues.g).toBe(115);
    expect(rgbValues.b).toBe(115);
});

test("HSV => RGB works with hue as multiple of 60", () => {
    let hsvValues= new CM.HSVValues(240,55,45);
    let rgbValues = CM.HSVToRGB(hsvValues);

    expect(rgbValues.r).toBe(52);
    expect(rgbValues.g).toBe(52);
    expect(rgbValues.b).toBe(115);
});

test("HSV => RGB works with full saturation", () => {
    let hsvValues= new CM.HSVValues(240,100,45);
    let rgbValues = CM.HSVToRGB(hsvValues);

    expect(rgbValues.r).toBe(0);
    expect(rgbValues.g).toBe(0);
    expect(rgbValues.b).toBe(115);
});

test("HSV => RGB works with hue value between 180 and 240", () => {
    let hsvValues= new CM.HSVValues(202,33,45);
    let rgbValues = CM.HSVToRGB(hsvValues);

    expect(rgbValues.r).toBe(77);
    expect(rgbValues.g).toBe(101);
    expect(rgbValues.b).toBe(115);
});

test("RGB => HSV works with unique R, G, and B values", () => {
    let rgbValues = new CM.RGBValues(34, 101, 22);
    let hsvValues = CM.RGBToHSV(rgbValues);

    expect(hsvValues.h).toBe(111);
    expect(hsvValues.s).toBe(78);
    expect(hsvValues.v).toBe(40);
});

test("RGB => HSV works with 2 equivalent R, G, B values", () => {
    let rgbValues = new CM.RGBValues(101, 101, 22);
    let hsvValues = CM.RGBToHSV(rgbValues);

    expect(hsvValues.h).toBe(60);
    expect(hsvValues.s).toBe(78);
    expect(hsvValues.v).toBe(40);
});

test("RGB => HSV works with RGB values all the same", () => {
    let rgbValues = new CM.RGBValues(101, 101, 101);
    let hsvValues = CM.RGBToHSV(rgbValues);

    expect(hsvValues.h).toBe(0);
    expect(hsvValues.s).toBe(0);
    expect(hsvValues.v).toBe(40);
});