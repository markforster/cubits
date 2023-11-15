export const areAllValuesSame = <T>(arr: T[]): boolean => {
  if (arr.length === 0) {
    // An empty array is considered as having all values the same.
    return true;
  }

  // Compare each element with the first element to check if they are all the same.
  const firstElement = arr[0];
  return arr.every((element) => element === firstElement);
};
