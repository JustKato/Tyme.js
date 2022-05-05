import { dayDictionary } from "./Dictionaries/dateDictionary";
import { monthDictionary } from "./Dictionaries/monthDictionary";
import { dateType, monthType } from "./Types/formatTypes";





/**
 * The main Tyme Class, initialize it by optionally passing a date object
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
     * Format the current timestamp to a workable format
     * @param dateTimeFormat
     * @returns The date formatted in the provided dateTimeFormat
     */
    public format(dateTimeFormat: string): string {
        /**
         * The formatted date
         */
        let formattedDate = ``;

        // Return the formatted date
        return formattedDate;
    }

    /**
     * Get the current month
     */
    public getMonth(mType: monthType): string {
        // get the index of the current month
        let monthIndex: number = this.ts.getMonth();

        if ( mType === "single" ) {
            return String(monthIndex + 1);
        } else if ( mType === "double" ) {
            return String(monthIndex + 1).padStart(2, "0");
        } else if ( mType === "short" ) {
            return monthDictionary[monthIndex].slice(0, 3);
        } else {
            return monthDictionary[monthIndex];
        }

    }

    public getDate(dType: dateType): string {

        if ( dType == "single" ) {
            // get the index of the current day
            let currentDate: number = this.ts.getDate();
            return String(currentDate);
        } else if ( dType == "double" ) {
            // get the index of the current day
            let currentDate: number = this.ts.getDate();
            return String(currentDate).padStart(2, "0");
        } else if ( dType == 'dowsingle' ) {
            return String(this.ts.getDay());
        } else if ( dType == 'dowdouble' ) {
            return String(this.ts.getDay()).padStart(2, "0");
        } else if ( dType == "short") {
            return String(dayDictionary[this.ts.getDay() - 1]);
        } else {
            return String(dayDictionary[this.ts.getDay() - 1]).slice(0, 3);
        }
    }

}


// Export this for the package
(globalThis as any).TymeJS = TymeJS;