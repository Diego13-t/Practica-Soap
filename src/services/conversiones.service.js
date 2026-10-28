module.exports = {
  ConversionesService: {
    ConversionesPort: {
      CelsiusAFahrenheit(args) {
        const celsius = parseFloat(args.celsius);
        return { fahrenheit: (celsius * 9) / 5 + 32 };
      },
      KilometrosAMillas(args) {
        const km = parseFloat(args.kilometros);
        return { millas: km * 0.621371 };
      },
    },
  },
};