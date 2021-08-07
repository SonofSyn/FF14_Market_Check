export type Links = { [actions: string]: (input?: string) => void };
export type Views = { [name: string]: () => JSX.Element };

export interface TableHeader {
    dataField: string;
    text: string;
}

export interface MetricData {}
export interface FilteredData {}
export interface ListingsData {}
export interface RetainerData {}
export interface OrderData {}
