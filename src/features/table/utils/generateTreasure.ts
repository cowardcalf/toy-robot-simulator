const generateTreasure = (
  robotX: number,
  robotY: number,
  rows: number,
  columns: number
) => {
  let x = -1,
    y = -1;
  do {
    x = Math.floor(Math.random() * columns);
    y = Math.floor(Math.random() * rows);
  } while (x === robotX && y === robotY);
  return { x, y };
};

export default generateTreasure;
