const colors = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "green" }
];
const data = [
  {
    colorId: 1
  },
  {
    colorId: 2
  },
  {
    colorId: 3
  }
];

function mapColorsToData(items, colors) {
  return items.map((x) => {
    const findId = colors.find((y) => x.colorId === y.id);
    return { colorId: findId.id, color: findId.color };
  });
}


console.log(mapColorsToData(data, colors))


mapColorsToData(data, colors);

//   const expected = [
//     { colorId: 1, color: "red" },
//     { colorId: 2, color: "blue" },
//     { colorId: 3, color: "green" }
//   ];