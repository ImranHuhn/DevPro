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
  
function mapColorsToData(data, colors) {
  
  const result = data.map(function(x){
    const findId = colors.find(y => x.colorId === y.id)
    return obj = {colorId: findId.id, color: findId.color}
  })
console.log(result);

}
console.log(mapColorsToData(data, colors));
// mapColorsToData(data, colors);

//   const expected = [
//     { colorId: 1, color: "red" },
//     { colorId: 2, color: "blue" },
//     { colorId: 3, color: "green" }
//   ];

// export function mapColorsToData(items, colors) {
//   const mapItems = items.map(function(x){
//     const findId = colors.find(function(y){
//       if(x.colorId === y.id){
//         const obj = {colorId: y.id, color: y.color}
//         return obj;
//       }
//       return findId;
//     })
//     return mapItems;
//   })
//   return;
// }