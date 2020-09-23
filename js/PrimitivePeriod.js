import { TimeUnit } from "./TimeUnit.js";
export class PrimitivePeriod {
}
PrimitivePeriod.SECONDS = new TimeUnit(1, "second");
PrimitivePeriod.MINUTES = new TimeUnit(PrimitivePeriod.SECONDS.getConversionFactor() * 60, "minute");
PrimitivePeriod.HOURS = new TimeUnit(PrimitivePeriod.MINUTES.getConversionFactor() * 60, "hour");
PrimitivePeriod.WORK_DAYS = new TimeUnit(6 * PrimitivePeriod.HOURS.getConversionFactor(), "work day");
PrimitivePeriod.DAYS = new TimeUnit(24 * PrimitivePeriod.HOURS.getConversionFactor(), "day");
