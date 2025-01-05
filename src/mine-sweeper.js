const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  let bombCoord = [];
  let fieldArr = matrix
  matrix.map((row, rowIndex) => {
    row.map((cell, cellIndex) => {
      if(cell === true){
        bombCoord.push([rowIndex,cellIndex])
      }
    })
  })
  bombCoord.forEach(function (item,index, array){
    debugger
    if(fieldArr?.[item[0]-1]?.[item[1]-1] !== undefined){//topLeftNeighbour
      if(fieldArr[item[0]-1][item[1]-1] !== true) {
        fieldArr[item[0]-1][item[1]-1]++;
      } else                 if(fieldArr[item[0]-1][item[1]-1] === true) {
        fieldArr[item[0]-1][item[1]-1] = 1;
      }
    };

    if(fieldArr?.[item[0]-1]?.[item[1]]!== undefined){//topNeighbour
      if(fieldArr[item[0]-1][item[1]] !== true) {
        fieldArr[item[0]-1][item[1]]++;
      } else                 if(fieldArr[item[0]-1][item[1]] === true) {
        fieldArr[item[0]-1][item[1]] = 1;
      }
    };

    if(fieldArr?.[item[0]-1]?.[item[1]+1] !== undefined){//topRightNeighbour
      if(fieldArr[item[0]-1][item[1]+1] !== true){
        fieldArr[item[0]-1][item[1]+1]++;
      } else                 if(fieldArr[item[0]-1][item[1]+1] === true){
        fieldArr[item[0]-1][item[1]+1] = 1;
      }
    };

    if(fieldArr?.[item[0]]?.[item[1]-1] !== undefined){//leftNeighbour
      if(fieldArr[item[0]][item[1]-1] !== true) {
        fieldArr[item[0]][item[1] - 1]++;
      }else                 if(fieldArr[item[0]][item[1]-1] === true) {
        fieldArr[item[0]][item[1] - 1] = 1;
      }
    };

    if(fieldArr?.[item[0]]?.[item[1]+1] !== undefined){//RightNeighbour
      if(fieldArr[item[0]][item[1]+1] !== true){
        fieldArr[item[0]][item[1]+1]++;
      } else                 if(fieldArr[item[0]][item[1]+1] === true){
        fieldArr[item[0]][item[1]+1] = 1;
      }
    };

    if(fieldArr?.[item[0]+1]?.[item[1]-1] !== undefined){//bottomLeftNeighbour
      if(fieldArr[item[0]+1][item[1]-1] !== true) {
        fieldArr[item[0]+1][item[1] - 1]++;
      } else if(fieldArr[item[0]+1][item[1]-1] === true) {
        fieldArr[item[0]+1][item[1] - 1] = 1;
      }
    };

    if(fieldArr?.[item[0]+1]?.[item[1]] !== undefined){//bottomNeighbour
      if(fieldArr[item[0]+1][item[1]] !== true) {
        fieldArr[item[0]+1][item[1]]++;
      } else if(fieldArr[item[0]+1][item[1]] === true) {
        fieldArr[item[0]+1][item[1]] = 1;
      }
    };

    if(fieldArr?.[item[0]+1]?.[item[1]+1] !== undefined){//bottomRightNeighbour
      if(fieldArr[item[0]+1][item[1]+1] !== true) {
        fieldArr[item[0]+1][item[1]+1]++;
      } else if (fieldArr[item[0]+1][item[1]+1] === true) {
        fieldArr[item[0]+1][item[1]+1] = 1
      }
    };

  })
  fieldArr = fieldArr.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      if(cell === false){
        return 0
      } else {
        return cell
      }
    })
  })
  return fieldArr
}

module.exports = {
  minesweeper
};
