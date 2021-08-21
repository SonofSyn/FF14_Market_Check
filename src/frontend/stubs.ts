import { ItemMetrics, ListingData, Order, Retainer } from "./frontendInterface";

export const FILTERED: ItemMetrics[] = [
    {
        id: "1",
        type: "metrics",
        gameID: "1879",
        date: "Thu Jul 29 2021 00:45:02 GMT+0200 (GMT+02:00)",
        name: "Mythische Lanze",
        minPriceNQ: null,
        maxPriceNQ: null,
        minPriceHQ: 178500,
        maxPriceHQ: 199498,
        amountHQListing: 9,
        amountNQListings: 1,
    },
    {
        id: "2",
        type: "metrics",
        gameID: "1670",
        date: "Tue Jul 27 2021 08:24:33 GMT+0200 (GMT+02:00)",
        name: "Äolus-Scimitar",
        minPriceNQ: null,
        maxPriceNQ: null,
        minPriceHQ: 89248,
        maxPriceHQ: 104998,
        amountHQListing: 7,
        amountNQListings: 1,
    },
    {
        id: "3",
        type: "metrics",
        gameID: "2492",
        date: "Sun Jul 25 2021 19:48:42 GMT+0200 (GMT+02:00)",
        name: "Miliz-Mörser",
        minPriceNQ: 10000,
        maxPriceNQ: null,
        minPriceHQ: 94500,
        maxPriceHQ: 94500,
        amountHQListing: 1,
        amountNQListings: 1,
    },
];

export const RETAINERS: Retainer[] = [
    {
        id: "1",
        type: "retainer",
        name: "Mythrit-Hakenbüchse",
        retainerOrder: {
            id: "1",
            type: "order",
            pricePerUnit: 47250,
            total: 47250,
            quantity: 1,
            hq: true,
            retainerName: "Wilson-",
        },
        undercuts: [
            {
                id: "1",
                type: "order",
                pricePerUnit: 42000,
                total: 42000,
                quantity: 1,
                hq: true,
                retainerName: "Fiona-madrix",
            },
        ],
    },
    {
        id: "1",
        type: "retainer",
        name: "Zonurenleder-Sandalen der Magie",
        retainerOrder: {
            id: "1",
            type: "order",

            pricePerUnit: 57750,
            total: 57750,
            quantity: 1,
            hq: true,
            retainerName: "Wilson-",
        },
        undercuts: [
            {
                id: "1",
                type: "order",

                pricePerUnit: 57644,
                total: 57644,
                quantity: 1,
                hq: true,
                retainerName: "Kanta",
            },
            {
                id: "2",
                type: "order",

                pricePerUnit: 57645,
                total: 57645,
                quantity: 1,
                hq: true,
                retainerName: "Kira-moneymaker",
            },
            {
                id: "3",
                type: "order",

                pricePerUnit: 57645,
                total: 57645,
                quantity: 1,
                hq: true,
                retainerName: "Kira-moneymaker",
            },
        ],
    },
];

export const METRICS: ItemMetrics[] = [
    {
        id: "1",
        type: "metrics",
        gameID: "1879",
        date: "Thu Jul 29 2021 00:45:02 GMT+0200 (GMT+02:00)",
        name: "Mythische Lanze",
        minPriceNQ: null,
        maxPriceNQ: null,
        minPriceHQ: 178500,
        maxPriceHQ: 199498,
        amountNQListings: 1,
        amountHQListing: 9,
    },
    {
        id: "2",
        type: "metrics",
        gameID: "1670",
        date: "Tue Jul 27 2021 08:24:33 GMT+0200 (GMT+02:00)",
        name: "Äolus-Scimitar",
        minPriceNQ: null,
        maxPriceNQ: null,
        minPriceHQ: 89248,
        maxPriceHQ: 104998,
        amountNQListings: 1,
        amountHQListing: 7,
    },
    {
        id: "3",
        type: "metrics",
        gameID: "2492",
        date: "Sun Jul 25 2021 19:48:42 GMT+0200 (GMT+02:00)",
        name: "Miliz-Mörser",
        minPriceNQ: null,
        maxPriceNQ: null,
        minPriceHQ: 94500,
        maxPriceHQ: 94500,
        amountNQListings: 1,
        amountHQListing: 1,
    },
    {
        id: "4",
        type: "metrics",
        gameID: "2400",
        date: "Wed Jul 28 2021 10:21:15 GMT+0200 (GMT+02:00)",
        name: "Mithril-Ornamenthammer",
        minPriceNQ: 42000,
        maxPriceNQ: 42000,
        minPriceHQ: 126000,
        maxPriceHQ: 126000,
        amountNQListings: 1,
        amountHQListing: 1,
    },
    {
        id: "5",
        type: "metrics",
        gameID: "2325",
        date: "Wed Jul 28 2021 14:32:43 GMT+0200 (GMT+02:00)",
        name: "Kupferstich-Koboldeisen-Fuchsschwanz",
        minPriceNQ: 29400,
        maxPriceNQ: 29400,
        minPriceHQ: 131250,
        maxPriceHQ: 131250,
        amountNQListings: 1,
        amountHQListing: 1,
    },
];

export const LISTINGS: ListingData[] = [
    {
        id: "1",
        type: "listing",
        gameID: "1606",
        date: "Mon Jul 19 2021 16:22:01 GMT+0200 (GMT+02:00)",
        name: "Stumpfes Bastardschwert",
        orders: [],
    },
    {
        id: "2",
        type: "listing",
        gameID: "1603",
        date: "Fri Jul 16 2021 22:52:57 GMT+0200 (GMT+02:00)",
        name: "Wikingerschwert",
        orders: [
            {
                id: "1",
                type: "order",

                pricePerUnit: 6300,
                total: 6300,
                quantity: 1,
                hq: false,
                retainerName: "Lea-sophie",
            },
            {
                id: "2",
                type: "order",

                pricePerUnit: 6300,
                total: 6300,
                quantity: 1,
                hq: false,
                retainerName: "Lea-sophie",
            },
            {
                id: "3",
                type: "order",

                pricePerUnit: 6300,
                total: 6300,
                quantity: 1,
                hq: false,
                retainerName: "Lea-sophie",
            },
        ],
    },
];
