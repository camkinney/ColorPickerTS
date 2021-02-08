import * as CM from "../../ColorModule";

test("formatNumString returns '0' for an empty string", () => {
    let numStr = "";
    let formattedNumStr = CM.formatNumString(numStr, 255);
    expect(formattedNumStr).toBe(0);
});

test("formatNumString returns the same value for valid num below the upper limit", () => {
    let numStr = "24";
    let formattedNumStr = CM.formatNumString(numStr, 255);
    expect(formattedNumStr).toBe(24);
});

test("formatNumString returns the upper limit for valid num above the upper limit", () => {
    let numStr = "432";
    let formattedNumStr = CM.formatNumString(numStr, 255);
    expect(formattedNumStr).toBe(255);
});

test("getNewRGBValues works for changed r value", () => {
    let oldRGBValues = new CM.RGBValues(100,200,40);
    let newRGBValues = CM.getNewRGBValues(oldRGBValues, 215, CM.RGB.r);
    expect(newRGBValues.r).toBe(215);
    expect(newRGBValues.g).toBe(200);
    expect(newRGBValues.b).toBe(40);
});

test("getNewRGBValues works for changed g value", () => {
    let oldRGBValues = new CM.RGBValues(100,200,40);
    let newRGBValues = CM.getNewRGBValues(oldRGBValues, 215, CM.RGB.g);
    expect(newRGBValues.r).toBe(100);
    expect(newRGBValues.g).toBe(215);
    expect(newRGBValues.b).toBe(40);
});

test("getNewRGBValues works for changed b value", () => {
    let oldRGBValues = new CM.RGBValues(100,200,40);
    let newRGBValues = CM.getNewRGBValues(oldRGBValues, 215, CM.RGB.b);
    expect(newRGBValues.r).toBe(100);
    expect(newRGBValues.g).toBe(200);
    expect(newRGBValues.b).toBe(215);
});

test("getNewHSVValues works for changed h value", () => {
    let oldHSVValues = new CM.HSVValues(212,32,49);
    let newHSVValues = CM.getNewHSVValues(oldHSVValues, "215", CM.HSV.h);
    expect(newHSVValues.h).toBe(215);
    expect(newHSVValues.s).toBe(32);
    expect(newHSVValues.v).toBe(49);
});

test("getNewHSVValues works for changed s value", () => {
    let oldHSVValues = new CM.HSVValues(212,32,49);
    let newHSVValues = CM.getNewHSVValues(oldHSVValues, "41", CM.HSV.s);
    expect(newHSVValues.h).toBe(212);
    expect(newHSVValues.s).toBe(41);
    expect(newHSVValues.v).toBe(49);
});

test("getNewHSVValues works for changed v value", () => {
    let oldHSVValues = new CM.HSVValues(212,32,49);
    let newHSVValues = CM.getNewHSVValues(oldHSVValues, "41", CM.HSV.v);
    expect(newHSVValues.h).toBe(212);
    expect(newHSVValues.s).toBe(32);
    expect(newHSVValues.v).toBe(41);
});