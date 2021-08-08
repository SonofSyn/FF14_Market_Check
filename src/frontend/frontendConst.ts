import { textFilter } from "react-bootstrap-table2-filter";
import { TableHeader } from "./frontendInterface";

export const DATAHEADER: TableHeader[] = [
    { dataField: "id", text: "ID" },
    { dataField: "gameid", text: "Game-ID", filter: textFilter() },
    { dataField: "name", text: "Name", filter: textFilter() },
    { dataField: "update", text: "Letzter Update", filter: textFilter() },
    { dataField: "minpricenq", text: "minPriceNQ", filter: textFilter() },
    { dataField: "maxpricenq", text: "maxPriceNQ", filter: textFilter() },
    { dataField: "minpricehq", text: "minPriceHQ", filter: textFilter() },
    { dataField: "maxpricehq", text: "maxPriceHQ", filter: textFilter() },
    { dataField: "amountNQ", text: "Menge der NQ", filter: textFilter() },
    { dataField: "amountHQ", text: "Menge der HQ", filter: textFilter() },
];

export const LISTINGSHEADER: TableHeader[] = [
    { dataField: "id", text: "ID", filter: textFilter() },
    { dataField: "gameid", text: "Game-ID", filter: textFilter() },
    { dataField: "name", text: "Name", filter: textFilter() },
    { dataField: "update", text: "Letzter Update", filter: textFilter() },
];
export const RETAINERHEADER: TableHeader[] = [
    { dataField: "id", text: "ID" },
    { dataField: "gameid", text: "Game-ID", filter: textFilter() },
    { dataField: "name", text: "Name", filter: textFilter() },
    { dataField: "lastupdate", text: "Letzter Update", filter: textFilter() },
    { dataField: "priceperunit", text: "Preis pro", filter: textFilter() },
    { dataField: "quantity", text: "Menge", filter: textFilter() },
    { dataField: "total", text: "Komplett Preis", filter: textFilter() },
    { dataField: "hq", text: "HQ", filter: textFilter() },
    { dataField: "retainername", text: "Gehilfe", filter: textFilter() },
];
export const ORDERSHEADER: TableHeader[] = [
    { dataField: "id", text: "ID", filter: textFilter() },
    { dataField: "lastupdate", text: "Letzter Update", filter: textFilter() },
    { dataField: "priceperunit", text: "Preis pro", filter: textFilter() },
    { dataField: "quantity", text: "Menge", filter: textFilter() },
    { dataField: "total", text: "Komplett Preis", filter: textFilter() },
    { dataField: "hq", text: "HQ" },
    { dataField: "retainername", text: "Gehilfe", filter: textFilter() },
];
