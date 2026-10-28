module.exports = {
  GeometriaService: {
    GeometriaPort: {
      AreaRectangulo(args) {
        return { area: parseFloat(args.base) * parseFloat(args.altura) };
      },
      PerimetroRectangulo(args) {
        return { perimetro: 2 * (parseFloat(args.base) + parseFloat(args.altura)) };
      },
    },
  },
};