// Todo : Implement this in future to pack and unpack data
// export function compressData(data: number[][][]): Uint8Array {
//   const compressedData: number[] = [];

//   // Helper function to convert a number to 3-bit binary representation
//   const convertTo3BitBinary = (num: number): string => {
//     const binary = (num + 2).toString(2).padStart(3, '0');
//     return binary;
//   };

//   for (const layer of data) {
//     for (const [vertex, vector] of layer) {
//       for (let i = 0; i < 3; i++) {
//         const [x, y, z] = vertex;
//         compressedData.push(parseInt(convertTo3BitBinary(x)[i], 2));
//         compressedData.push(parseInt(convertTo3BitBinary(y)[i], 2));
//         compressedData.push(parseInt(convertTo3BitBinary(z)[i], 2));
//         const [u, v, w] = vector;
//         compressedData.push(parseInt(convertTo3BitBinary(u)[i], 2));
//         compressedData.push(parseInt(convertTo3BitBinary(v)[i], 2));
//         compressedData.push(parseInt(convertTo3BitBinary(w)[i], 2));
//       }
//     }
//   }

//   return new Uint8Array(compressedData);
// }
