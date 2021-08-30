import { dateFilter, numberFilter, textFilter } from "react-bootstrap-table2-filter";
import { TableHeader } from "./frontendInterface";

export const DATAHEADER: TableHeader[] = [
    { dataField: "id", text: "ID" },
    { dataField: "gameid", text: "Game-ID", filter: textFilter({ placeholder: " " }) },
    { dataField: "name", text: "Name", filter: textFilter({ placeholder: " " }) },
    { dataField: "update", text: "Letzter Update", filter: dateFilter({ placeholder: " " }) },
    { dataField: "minpricenq", text: "minPriceNQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "maxpricenq", text: "maxPriceNQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "minpricehq", text: "minPriceHQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "maxpricehq", text: "maxPriceHQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "amountNQ", text: "Menge der NQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "amountHQ", text: "Menge der HQ", filter: numberFilter({ placeholder: " " }) },
];

export const LISTINGSHEADER: TableHeader[] = [
    { dataField: "id", text: "ID", filter: textFilter({ placeholder: " " }) },
    { dataField: "gameid", text: "Game-ID", filter: textFilter({ placeholder: " " }) },
    { dataField: "name", text: "Name", filter: textFilter({ placeholder: " " }) },
    { dataField: "update", text: "Letzter Update", filter: dateFilter({ placeholder: " " }) },
];

export const ORDERSHEADER: TableHeader[] = [
    { dataField: "id", text: "ID" },
    { dataField: "priceperunit", text: "Preis pro" },
    { dataField: "quantity", text: "Menge" },
    { dataField: "total", text: "Komplett Preis" },
    { dataField: "hq", text: "HQ" },
    { dataField: "retainername", text: "Gehilfe" },
];
