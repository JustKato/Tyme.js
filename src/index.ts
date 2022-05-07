import { dayDictionary }       from "./Dictionaries/dateDictionary";
import { monthDictionary }     from "./Dictionaries/monthDictionary";
import { commonDateFormats, dateType, hourType, isDateType, isHourType, isMeridiemType, isMonthType, isYearType, meridiemType, monthType, yearType } from "./Types/formatTypes";


/**
 * The main Tyme Class, initialize it by optionally passing a date object
 * Created by Kato Twofold https://justkato.me
 * @author Kato Twofold
 * @example new TymeJS().format("d/m/Y h:i A")
 * @class
 */
export default class TymeJS {

    /**
     * The current TymeStamp that we are assigned
     */
    private ts: Date;

    constructor(dat: Date | null = null) {
        // Check if a date was passed to the initialization
        if ( dat != null ) {
            // Assign the adte to self
            this.ts = dat;
        } else {
            // There was no date provided, get the current timestamp
            this.ts = new Date();
        }
    }

    /**
     * Get the currently assigned date object
     * @returns The assigned Date object
     */
    public getDateObject(): Date {
        return this.ts;
    }

    /**
     * @returns a string representation of a date. The format of the string depends on the locale.
     */
    public toString(): string {
        // Return the current date as a string
        return this.getDateObject().toString();
    }

    /**
     * Format the current timestamp to a workable format
     * @param dateTimeFormat
     * @returns The date formatted in the provided dateTimeFormat
     */
    public format(dateTimeFormat: commonDateFormats | string ): string {
        /**
         * The formatted date
         */
        let formattedDate = ``;

        // Go through all of the characters of the dateTimeFormat string
        for ( let char of Array.from(dateTimeFormat) ) {
            // Check which one of the formatters can handle this
            if ( isDateType(char) )
                formattedDate += this.getDate(char);
            else if ( isMonthType(char) )
                formattedDate += this.getMonth(char);
            else if ( isYearType(char) )
                formattedDate += this.getYear(char);
            else if ( isMeridiemType(char) )
                formattedDate += this.getMeridiem(char);
            else if ( isHourType(char) )
                formattedDate += this.getHour(char);
            else {
                // Just append the char to the result
                formattedDate += char;
            }

        }

        // Return the formatted date
        return formattedDate;
    }


    // ############################## [ Time Formats ] ##############################

    public getMeridiem(t: meridiemType): string {
        // Get the current meridiem
        let meridiem = ((this.ts.getHours() + 11) % 12 + 1) > 12 ? "pm" : "am";
        // Check which format to return
        if ( t === "A" ) {
            return meridiem.toUpperCase();
        } else if ( t === "a" ) {
            return meridiem;
        }

        throw new Error(`Invalid format for meridiem ${t}`);
    }

    public getHour(t: hourType): string | number {
        // Get current hour
        let h = this.ts.getHours();

        if ( t == "G" ) {
            return h;
        } else if ( t === "g" ) {
            if ( h > 12 )
                return h - 12;
            return h;
        } else if ( t === "H" ) {
            return String(h).padStart(2, "0");
        } else if ( t === "h" ) {
            if ( h > 12 )
                return String(h - 12).padStart(2, "0");
            return String(h).padStart(2, "0");
        }

        throw new Error(`Invalid format for Hour ${t}`);
    }


    // ############################## [ Date Formats ] ##############################

    /**
     * 
     * @param t The format to get the date in
     * @returns A string of the formatted date
     */
    public getDate(t: dateType): string | number {

        if ( t == "j" ) {
            // get the index of the current day
            let currentDate: number = this.ts.getDate();
            return currentDate;
        } else if ( t == "d" ) {
            // get the index of the current day
            let currentDate: number = this.ts.getDate();
            return String(currentDate).padStart(2, "0");
        } else if ( t == 'w' ) {
            return String(this.ts.getDay());
        } else if ( t == "l") {
            return String(dayDictionary[this.ts.getDay()]);
        } else if ( t == 'D' ) {
            return String(dayDictionary[this.ts.getDay()]).slice(0, 3);
        }

        throw new Error(`Invalid format for date ${t}`);
    }

    /**
     * Format the current date object's month
     * @param t The format to get the date in
     * @returns A string of the formatted date
     */
    public getMonth(t: monthType): string | number {
        // get the index of the current month
        let monthIndex: number = this.ts.getMonth();

        if ( t === "n" ) {
            return (monthIndex + 1);
        } else if ( t === "m" ) {
            return String(monthIndex + 1).padStart(2, "0");
        } else if ( t === "M" ) {
            return monthDictionary[monthIndex].slice(0, 3);
        } else if ( t === "F" ) {
            return monthDictionary[monthIndex];
        }

        throw new Error(`Invalid format for date ${t}`);
    }

    /**
     * Format the current date object's year
     * @param t The format to get the date in
     * @returns A string of the formatted date
     */
    public getYear(t: yearType): string | number {

        if ( t == "L" ) {
            return (TymeJS.isLeapYear(this.ts.getFullYear())) ? 1 : 0;
        } else if ( t == 'Y' ) {
            return this.ts.getFullYear();
        } else if ( t == 'y' ) {
            return String(this.ts.getFullYear()).slice(2);
        } else if ( t == 'o' ) {
            throw new Error(`Not yet implemented`);
        }

        throw new Error(`Invalid format for year ${t}`);
    }

    public static isLeapYear(year: number): boolean {
        return new Date(year, 1, 29).getDate() === 29;
    }

}


// Export this for the package
(globalThis as any).TymeJS = TymeJS;