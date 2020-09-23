export class TimeUnit {
    private conversionFactor: number;
    private nameSingular: string;
    private namePlural: string;

    constructor(conversionFactor: number, nameSingular: string){
        this.conversionFactor = conversionFactor;
        this.nameSingular = nameSingular;
        this.namePlural = nameSingular + 's';
    }

    public getConversionFactor(): number {
        return this.conversionFactor;
    }

    public getNameSingular(): string {
        return this.nameSingular;
    }

    public setNamePlural(pluralName: string): void {
        this.namePlural = pluralName;
    }

    public getNamePlural(): string {
        return this.namePlural;
    }
}