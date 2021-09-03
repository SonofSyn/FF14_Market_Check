export type Links = { [actions: string]: (input?: string) => void };
export type Views = { [name: string]: () => JSX.Element };
export interface TableHeader {
    dataField: string;
    text: string;
    filter?: Partial<{
        id: string;
        placeholder: string;
        className: string;
        defaultValue: any;
        style: React.CSSProperties;
        delay: number;
        getFilter: (filter: any) => void;
        onFilter: (filterValue: any) => void | any[];
    }>;
}

export interface Order extends DataElement {
    type: "order";
    pricePerUnit: number;
    total: number;
    quantity: number;
    hq: boolean;
    retainerName: string;
}

export interface ListingData extends DataElement {
    type: "listing";
    itemLevel: number;
    crafter: JSX.Element;
    crafterName: string;
    gameID: string;
    date: string;
    name: string;
    orders: Order[];
}

export interface ItemMetrics extends DataElement {
    type: "metrics";
    image: JSX.Element;
    itemLevel: number;
    gameID: string;
    date: string;
    name: string;
    crafter: JSX.Element;
    crafterName: string;
    minPriceNQ: number;
    maxPriceNQ: number;
    minPriceHQ: number;
    maxPriceHQ: number;
    amountNQListings: number;
    amountHQListing: number;
}

export interface Retainer extends DataElement {
    type: "retainer";
    name: string;
    itemLevel: number;
    crafter: JSX.Element;
    crafterName: string;
    retainerOrder: Order;
    undercuts: Order[];
}

export interface DataElement {
    type: DataElementType;
    id: string;
}
export type DataElementType = "metrics" | "retainer" | "listing" | "order";
export type TableData = ItemMetrics[] | Retainer[] | ItemMetrics[] | ListingData[] | Order[];

export interface dbOrder {
    lastReviewTime: string;
    pricePerUnit: number;
    total: number;
    quantity: number;
    hq: boolean;
    retainerName: string;
}

export interface dbListingData {
    id: string;
    date: string;
    name: string;
    crafter: string;
    itemLevel: number;
    orders: Order[];
}

export interface dbItemMetrics {
    id: string;
    date: string;
    name: string;
    crafter: string;
    itemLevel: number;
    minPriceNQ: number;
    maxPriceNQ: number;
    minPriceHQ: number;
    maxPriceHQ: number;
    amountNQListings: number;
    amountHQListing: number;
}

export interface dbRetainer {
    name: string;
    crafter: string;
    itemLevel: number;
    retainerOrder: Order;
    undercuts: Order[];
}
