import { dateFilter, numberFilter, textFilter } from "react-bootstrap-table2-filter";
import { TableHeader } from "./frontendInterface";

export const DATAHEADER: TableHeader[] = [
    { dataField: "id", text: "ID" },
    { dataField: "itemImg", text: "" },
    { dataField: "name", text: "Name", filter: textFilter({ placeholder: " " }) },
    { dataField: "crafter", text: "Hersteller" },
    { dataField: "itemLevel", text: "Item Level", filter: numberFilter({ placeholder: " " }) },
    // { dataField: "gameid", text: "Game-ID", filter: textFilter({ placeholder: " " }) },
    { dataField: "minpricenq", text: "min Preis NQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "maxpricenq", text: "max Preis NQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "amountNQ", text: "Menge der NQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "minpricehq", text: "min Preis HQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "maxpricehq", text: "max Preis HQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "amountHQ", text: "Menge der HQ", filter: numberFilter({ placeholder: " " }) },
    { dataField: "update", text: "Letztes Update", filter: dateFilter({ placeholder: " " }) },
];

export const ORDERSHEADER: TableHeader[] = [
    { dataField: "id", text: "ID" },
    { dataField: "total", text: "Komplett Preis" },
    { dataField: "hq", text: "HQ" },
    { dataField: "quantity", text: "Menge" },
    { dataField: "priceperunit", text: "Einzelpreis" },
    { dataField: "retainername", text: "Gehilfe" },
];
