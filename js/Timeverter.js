import { PrimitivePeriod } from "./PrimitivePeriod.js";
export class Timeverter {
    static timevert(amount, incomingTimeUnit, outgoingTimeUnit) {
        if (!outgoingTimeUnit) {
            outgoingTimeUnit = PrimitivePeriod.SECONDS;
        }
        let amountInBaseUnit = amount * incomingTimeUnit.getConversionFactor();
        console.log("Converting " + amount + " " + incomingTimeUnit.getNamePlural()
            + " to " + amountInBaseUnit + " seconds");
        let convertedAmount = amountInBaseUnit * 1 / (outgoingTimeUnit.getConversionFactor());
        console.log("Converting " + amountInBaseUnit + " " + PrimitivePeriod.SECONDS.getNamePlural()
            + " to " + convertedAmount + " " + outgoingTimeUnit.getNamePlural());
        return convertedAmount.toLocaleString() + " " + (convertedAmount === 1 ? outgoingTimeUnit.getNameSingular() : outgoingTimeUnit.getNamePlural());
    }
}
