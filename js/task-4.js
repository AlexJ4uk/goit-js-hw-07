function getShippingCost(country) {
    let price;
    switch (country) {
        case 'China':
            price = 100;
            break;
        case 'Chile':
            price = 250;
            break;
        case 'Australia':
            price = 170;
            break;
        case 'Jamaica':
            price = 120;
            break;
        default:
            return `Sorry, there is no delivery to your country`;
    }
    return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));