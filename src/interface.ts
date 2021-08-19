import { ItemMetrics, ListingData, Retainer } from "./frontend/frontendInterface";

export interface marketdata {
    updateID: string;
    filtered: ItemMetrics[];
    retainers: Retainer[];
    metrics: ItemMetrics[];
    listings: ListingData[];
}
