// All mappings according to: https://www.php.net/manual/en/datetime.format.php#refsect1-datetime.format-parameters

// ############################## [ Common Formats ] ##############################

export type commonDateFormats = "d/m/Y" | "m/d/Y" | "d/m/Y h:i A" | "d/m/Y H:i" | "m/d/Y h:i A" | "m/d/Y H:i";

// ############################## [ Time Formats ] ##############################

// =-=-=-=-=-=-=-=-=-=-= [ Meridiem ] =-=-=-=-=-=-=-=-=-=-=
const mertypes = [ "a", "A" ];
/**
 * Possible formats for the date
 */
export type meridiemType = "a" | "A";
export const isMeridiemType = (x: any): x is meridiemType => mertypes.includes(x);

// =-=-=-=-=-=-=-=-=-=-= [ Hours ] =-=-=-=-=-=-=-=-=-=-=
const hourtypes = [ "g", "G", "h", "H" ];
/**
 * Possible formats for the date
 */
export type hourType = "g" | "G" | "h" | "H";
export const isHourType = (x: any): x is hourType => hourtypes.includes(x);

// =-=-=-=-=-=-=-=-=-=-= [ Minutes ] =-=-=-=-=-=-=-=-=-=-=
const minutetypes = [ "i" ];
/**
 * Possible formats for the date
 */
export type minuteType = "i";
export const isMinuteType = (x: any): x is minuteType => minutetypes.includes(x);

// =-=-=-=-=-=-=-=-=-=-= [ Seconds ] =-=-=-=-=-=-=-=-=-=-=
const secondtypes = [ "s" ];
/**
 * Possible formats for the date
 */
export type secondType = (typeof secondtypes)[number];
export const isSecondType = (x: any): x is secondType => secondtypes.includes(x);



// ############################## [ Date Formats ] ##############################

// =-=-=-=-=-=-=-=-=-=-= [ Date ] =-=-=-=-=-=-=-=-=-=-=
const dtypes = [ "j", "d", "D", "l", "w" ];
/**
 * Possible formats for the date
 */
export type dateType = "j" | "d" | "D" | "l" | "w";
export const isDateType = (x: any): x is dateType => dtypes.includes(x);

// =-=-=-=-=-=-=-=-=-=-= [ Month ] =-=-=-=-=-=-=-=-=-=-=
const mtypes = [ "n", "m", "M", "F" ];
/**
 * Possible formats for the month
 */
export type monthType = "n" | "m" | "M" | "F";
export const isMonthType = (x: any): x is monthType => mtypes.includes(x);

// =-=-=-=-=-=-=-=-=-=-= [ Year ] =-=-=-=-=-=-=-=-=-=-=
const yeartypes = [ "L", "o", "y", "Y" ];
/**
 * Possible formats for the year
 */
export type yearType = "L" | "o" | "y" | "Y";
export const isYearType = (x: any): x is yearType => yeartypes.includes(x);