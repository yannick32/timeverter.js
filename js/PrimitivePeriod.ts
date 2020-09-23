import { TimeUnit } from "./TimeUnit.js"

export abstract class PrimitivePeriod {
    static SECONDS: TimeUnit = new TimeUnit(1, "second");
    static MINUTES: TimeUnit = new TimeUnit(PrimitivePeriod.SECONDS.getConversionFactor() * 60, "minute");
    static HOURS: TimeUnit = new TimeUnit(PrimitivePeriod.MINUTES.getConversionFactor() * 60, "hour");
    static WORK_DAYS: TimeUnit = new TimeUnit(6 * PrimitivePeriod.HOURS.getConversionFactor(), "work day");
    static DAYS: TimeUnit = new TimeUnit(24 * PrimitivePeriod.HOURS.getConversionFactor(), "day");
}