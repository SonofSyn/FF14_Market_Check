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
    imgPath: JSX.Element;
    crafter: JSX.Element;
    gameID: string;
    date: string;
    name: string;
    orders: Order[];
}

export interface ItemMetrics extends DataElement {
    type: "metrics";
    imgPath: JSX.Element;
    gameID: string;
    date: string;
    name: string;
    crafter: JSX.Element;
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
    imgPath: JSX.Element;
    crafter: JSX.Element;
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
    orders: Order[];
}

export interface dbItemMetrics {
    id: string;
    date: string;
    name: string;
    minPriceNQ: number;
    maxPriceNQ: number;
    minPriceHQ: number;
    maxPriceHQ: number;
    amountNQListings: number;
    amountHQListing: number;
}

export interface dbRetainer {
    name: string;
    retainerOrder: Order;
    undercuts: Order[];
}
