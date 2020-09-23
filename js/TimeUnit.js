export class TimeUnit {
    constructor(conversionFactor, nameSingular) {
        this.conversionFactor = conversionFactor;
        this.nameSingular = nameSingular;
        this.namePlural = nameSingular + 's';
    }
    getConversionFactor() {
        return this.conversionFactor;
    }
    getNameSingular() {
        return this.nameSingular;
    }
    setNamePlural(pluralName) {
        this.namePlural = pluralName;
    }
    getNamePlural() {
        return this.namePlural;
    }
}
