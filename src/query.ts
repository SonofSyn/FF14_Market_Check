import {
    collectItemData,
    selectItemMetrics,
    selectListingData,
    checkRetainers,
    ListingData,
    asyncWriteFile,
    MarketableItemIDsReduced,
    ResponseData,
} from "ff14marketfilter";

export let retrievServerData = async () => {
    let marketItemData = await collectItemData("Shiva", MarketableItemIDsReduced, 2000, 1);
    await asyncWriteFile("./data/response.json", JSON.stringify(marketItemData));
    return marketItemData;
};
export let analyseRetainers = async (retainer: string[], listingItemData: ListingData[]) => {
    let retainerData = await checkRetainers(retainer, listingItemData);
    await asyncWriteFile("./data/processed/retainers.json", JSON.stringify(retainerData));
    return retainerData;
};

export let analyseMetrics = async (marketItemData: ResponseData[][]) => {
    let metricData = await selectItemMetrics(marketItemData, 80000);
    await asyncWriteFile("./data/compiledData/metrics.json", JSON.stringify(metricData));
    return metricData;
};

export let analyseListings = async (marketItemData: ResponseData[][]) => {
    let listingData = await selectListingData(marketItemData);
    await asyncWriteFile("./data/compiledData/listings.json", JSON.stringify(listingData));
    return listingData;
};
