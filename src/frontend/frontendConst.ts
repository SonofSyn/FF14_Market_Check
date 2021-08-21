import { textFilter } from "react-bootstrap-table2-filter";
import { TableHeader } from "./frontendInterface";

export const DATAHEADER: TableHeader[] = [
    { dataField: "id", text: "ID" },
    { dataField: "gameid", text: "Game-ID", filter: textFilter({ placeholder: " " }) },
    { dataField: "name", text: "Name", filter: textFilter({ placeholder: " " }) },
    { dataField: "update", text: "Letzter Update", filter: textFilter({ placeholder: " " }) },
    { dataField: "minpricenq", text: "minPriceNQ", filter: textFilter({ placeholder: " " }) },
    { dataField: "maxpricenq", text: "maxPriceNQ", filter: textFilter({ placeholder: " " }) },
    { dataField: "minpricehq", text: "minPriceHQ", filter: textFilter({ placeholder: " " }) },
    { dataField: "maxpricehq", text: "maxPriceHQ", filter: textFilter({ placeholder: " " }) },
    { dataField: "amountNQ", text: "Menge der NQ", filter: textFilter({ placeholder: " " }) },
    { dataField: "amountHQ", text: "Menge der HQ", filter: textFilter({ placeholder: " " }) },
];

export const LISTINGSHEADER: TableHeader[] = [
    { dataField: "id", text: "ID", filter: textFilter({ placeholder: " " }) },
    { dataField: "gameid", text: "Game-ID", filter: textFilter({ placeholder: " " }) },
    { dataField: "name", text: "Name", filter: textFilter({ placeholder: " " }) },
    { dataField: "update", text: "Letzter Update", filter: textFilter({ placeholder: " " }) },
];
export const RETAINERHEADER: TableHeader[] = [
    { dataField: "id", text: "ID" },
    { dataField: "type", text: "Typ", filter: textFilter({ placeholder: " " }) },
    { dataField: "name", text: "Name", filter: textFilter({ placeholder: " " }) },
];
export const ORDERSHEADER: TableHeader[] = [
    { dataField: "id", text: "ID", filter: textFilter({ placeholder: " " }) },
    { dataField: "priceperunit", text: "Preis pro", filter: textFilter({ placeholder: " " }) },
    { dataField: "quantity", text: "Menge", filter: textFilter({ placeholder: " " }) },
    { dataField: "total", text: "Komplett Preis", filter: textFilter({ placeholder: " " }) },
    { dataField: "hq", text: "HQ" },
    { dataField: "retainername", text: "Gehilfe", filter: textFilter({ placeholder: " " }) },
];
