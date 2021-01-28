export class HSVValues {
    public h: number;
    public s: number;
    public v: number;
  
    constructor (h: number, s: number, v: number) {
      this.h = h;
      this.s = s;
      this.v = v;
    }
  }

export class RGBValues{
    public r: number;
    public g: number;
    public b: number;
  
    constructor (r: number, g: number, b: number) {
      this.r = r;
      this.g = g;
      this.b = b;
    }
  }


export enum RGB {
    r = "r",
    g = "g",
    b = "b"
}

export enum HSV {
    h = "h",
    s = "s",
    v = "v"
}

/**
 * Convert hexadecimal value to HSV
 * @param hexValue string
 * @returns HSV values
 */
export function HexToHSV(hexValue: string): HSVValues {
    let rgbValues: RGBValues = HexToRGB(hexValue);
    return RGBToHSV(rgbValues);
}

/**
 * Convert hexadecimal value to RGB
 * @param hexValue string
 * @returns RGB values
 */
export function HexToRGB(hexValue: string): RGBValues {
    if (hexValue.length > 6) {
        hexValue = hexValue.substring(hexValue.length - 6);
    } else if (hexValue.length < 6) {
        let diff = 6 - hexValue.length;
        hexValue = "0".repeat(diff) + hexValue;
    }
    let decimalValue: number = parseInt(hexValue, 16);
    let remainder: number;
    let r: number = Math.floor(decimalValue/(256*256));
    remainder = decimalValue%(256*256);
    let g: number = Math.floor(remainder/256);
    remainder = remainder%256;
    let b: number = remainder;
    return new RGBValues(r, g, b);
}

/**
 * Convert RGB values to HSV
 * @param rgbValues 
 * @returns HSV values
 */
export function RGBToHSV(rgbValues: RGBValues): HSVValues {
    let r = rgbValues.r/255;
    let g = rgbValues.g/255;
    let b = rgbValues.b/255;

    let h: number;
    let s: number;
    let v: number;

    let maxColor = Math.max(r, Math.max(g,b));
    let minColor = Math.min(r, Math.min(g,b));
    let diff = maxColor - minColor;

    h = calculateH(r, g, b, maxColor, diff);
    s = calculateS(maxColor, diff);
    v = calculateV(maxColor);

    return new HSVValues(Math.round(h), Math.round(s), Math.round(v));
}

/**
 * Calculate h value (of HSV) 
 * @param r number value between [0,1]
 * @param g number value between [0,1]
 * @param b number value between [0,1]
 * @param maxColor value of largest of R,G,B between [0,1]
 * @param diff difference between highest and lowest values
 * @returns h value between [0,365]
 */
function calculateH(r: number, g: number, b: number, maxColor: number, diff: number): number {
    let h;
    if (diff === 0) {
      h = 0;
    }
    else if (maxColor === r) {
      h = (60 * ((g-b) / diff) + 360)%360;
    }
    else if (maxColor === g) {
      h = (60 * ((b-r) / diff) + 120)%360;
    }
    else if (maxColor === b) {
      h = (60 * ((r-g) / diff) + 240)%360;
    } else {
      h = 0;
    }
    return h;
}

/**
 * Calculate the s value (of HSV)
 * @param maxColor largest numeric value of R,G, and B (between [0,1])
 * @param diff difference between largest and smallest numeric values of R,G, and B
 * @returns s value
 */
function calculateS(maxColor: number, diff: number): number {
    let s;
    if (maxColor === 0) {
      s = 0;
    }
    else {
      s = (diff / maxColor) * 100;
    }
    return s;
}

/**
 * Calculate the v value (of HSV)
 * @param maxColor largest numeric value of R,G, and B (between [0,1])
 * @returns v value
 */
function calculateV(maxColor: number): number {
    let v = maxColor * 100;
    return v;
  }


/**
* Formats a string to be between 0-255 appropriately
* @param numStr String which represents a number
*/
export function formatNumString(numStr: string, high: number): number {
    let length = numStr.length;
    if (length === 0) {
        return 0;
    }

    let formattedNum = parseInt(numStr);

    if (formattedNum > high) {
      formattedNum = high;
    }

    return formattedNum;
}

/**
* Generate a new six digit hex string given the RGB value that changed and whether it was R,G, or B
* @param changedValue string containing a number between 0-255
* @param inputId Id of InputLabelPair
* @param oldHexValue hex value string to be updated
*/
export function getUpdatedHex(changedValue: string, inputId: RGB, oldHexValue: string): string {
    let hexTranslation: string = numTo2DigitHex(parseInt(changedValue));
    let updatedHex: string;
    if (inputId === RGB.r) {
      updatedHex = hexTranslation + oldHexValue.substring(2);
      return updatedHex;
    }
    else if (inputId === RGB.g) {
      updatedHex = oldHexValue.substring(0,2) + hexTranslation + oldHexValue.substring(4,6);
      return updatedHex;
    }
    else if (inputId === RGB.b) {
      updatedHex = oldHexValue.substring(0,4) + hexTranslation;
      return updatedHex;
    }
    else {
      return "";
    }
}

/**
 * Given HSV values, convert to hexadecimal string
 * @param hsvValues 
 */
export function HSVToHex(hsvValues: HSVValues): string {
    let rgbValues: RGBValues = HSVToRGB(hsvValues);
    return RGBToHex(rgbValues);
}

/**
 * Given RGB values, convert to hexadecimal string
 * @param rgbValues 
 */
export function RGBToHex(rgbValues: RGBValues): string {
    let hexString = numTo2DigitHex(rgbValues.r) + numTo2DigitHex(rgbValues.g) + numTo2DigitHex(rgbValues.b);
    return hexString
}

/**
 * Convert number to 2-digit hex format
 * @param num number between 0-255
 * @returns hex value as string
 */
function numTo2DigitHex(num: number): string {
    let hex = num.toString(16);
    if (hex.length === 1) {
      hex = "0" + hex;
    }
    return hex;
}

/**
 * Generate new RGB values given the old values and the value that changed
 * @param old the RGB values that will be changed
 * @param changedVal the new R, G, or B value
 * @param changedRGB identifies if the value is for R, G, or B
 */
export function getNewRGBValues(old: RGBValues, changedVal: number, changedRGB: RGB): RGBValues {
    if (changedRGB=== RGB.r) {
        return new RGBValues(changedVal, old.g, old.b);
    }
    else if (changedRGB=== RGB.g) {
        return new RGBValues(old.r, changedVal, old.b);
    }
    else {
        return new RGBValues(old.r, old.g, changedVal);
    }
}

/**
 * Generate new HSV values given the old values and the value that changed
 * @param old the HSV values that will be changed
 * @param changedVal the new H, S, or V value
 * @param changedHSV identifies if the value is for H, S, or V
 */
export function getNewHSVValues(old: HSVValues, changedVal: string, changedHSV: HSV): HSVValues {
    let formattedChangedVal: number;
    if (changedHSV === HSV.h) {
        formattedChangedVal = formatNumString(changedVal, 300)
        return new HSVValues(formattedChangedVal, old.s, old.v);
    }
    else if (changedHSV === HSV.s) {
        formattedChangedVal = formatNumString(changedVal, 100)
        return new HSVValues(old.h, formattedChangedVal, old.v);
    }
    else {
        formattedChangedVal = formatNumString(changedVal, 100)
        return new HSVValues(old.h, old.s, formattedChangedVal);
    }
}

/**
* HSV to RGB color conversion
* Found at <script src="https://gist.github.com/eyecatchup/9536706.js"></script>
* H runs from 0 to 360 degrees
* S and V run from 0 to 100
*/
export function HSVToRGB(hsvValues: HSVValues): RGBValues {
    let r, g, b;
    let i;
    let f, p, q, t;
     
    // Make sure our arguments stay in-range
    let h = Math.max(0, Math.min(360, hsvValues.h));
    let s = Math.max(0, Math.min(100, hsvValues.s));
    let v = Math.max(0, Math.min(100, hsvValues.v));
     
    s /= 100;
    v /= 100;
     
    if(s === 0) {
        // Achromatic (grey)
        r = g = b = v;
        return new RGBValues(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
    }
     
    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // remainder part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
     
    switch(i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
     
    return new RGBValues(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}

    
  