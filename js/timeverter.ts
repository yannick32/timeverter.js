import { PrimitivePeriod } from "./PrimitivePeriod.js";
import { TimeUnit } from "./TimeUnit.js"

export abstract class Timeverter {

    public static timevert(amount: number, incomingTimeUnit: TimeUnit, outgoingTimeUnit?: TimeUnit): string {
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