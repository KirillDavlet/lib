const availableCurrencies: any = {
  RUB: {
    symbol: '₽',
    thousandsSeparator: ' ',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'back',
    symbolSpacing: true
  },
  USD: {
    symbol: '$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  }
};

export default {
  getConfig(currency: string) {
    return availableCurrencies.hasOwnProperty(currency)
      ? availableCurrencies[currency]
      : {};
  }
};
