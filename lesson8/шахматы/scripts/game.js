'use strict';
/*
  Создать функцию, генерирующую шахматную доску.
  Можно использовать любые html-теги.
  Доска должна быть верно разлинована на черные и белые ячейки.
  Строки должны нумероваться числами от 1 до 8,
  столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/

const BOARD = document.querySelector('.container .board');
const BOARD_SIZE = 8;

class Chessman {
  constructor(x, y, unicode) {
    this.x = x;
    this.y = y;
    this.unicode = unicode;

    this.DOMentity = document.createElement('div');
    this.DOMentity.classList.add('figure');
    this.DOMentity.innerHTML = this.unicode;

    this.renderFigure(this.x, this.y);
  }

  renderFigure(x, y) {
    const cell = BOARD.querySelector(`#${x + y}`);
    cell.appendChild(this.DOMentity);
  }
}

class WhitePawn extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9817;');
  }
}

class BlackPawn extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9823;');
  }
}

class WhiteKing extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9812;');
  }
}

class BlackKing extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9818;');
  }
}

class WhiteQueen extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9813;');
  }
}

class BlackQueen extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9819;');
  }
}

class WhiteHorse extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9816;');
  }
}

class BlackHorse extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9822;');
  }
}

class WhiteBishop extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9815;');
  }
}

class BlackBishop extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9821;');
  }
}

class WhiteRook extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9814;');
  }
}

class BlackRook extends Chessman {
  constructor(x, y) {
    super(x, y, '&#9820;');
  }
}

// Создание игрового поля
function createBoard() {
  const table = document.createElement('table');

  table.classList.add('table');
  BOARD.appendChild(table);

  // Числовой номер строки
  // отрисовываем сверху вниз от большего к меньшему
  let rowNum = (BOARD_SIZE + 1);

  for (let x = 0; x < BOARD_SIZE + 2; x++) {
    // коды символов для буквенной нумерации строк
    let colNumText = 65, colNum = 64; 

    // создаем строку таблицы
    let row = document.createElement('tr');
    row.classList.add('row');
    table.appendChild(row);

    // создаем ячейки в текущей строке
    for (let y = 0; y < BOARD_SIZE + 2; y++) {
      let cell = document.createElement('td');
      cell.classList.add('cell');

      // первая и последняя строка – горизонтальная граница нашей доски
      if (x === 0 || x === BOARD_SIZE + 1) {
        cell.classList.add('border', 'horizontalborder');

        // отрисовываем буквенные символы для всех ячеек строки
        // кроме первой и последней, т.к. они угловые
        if (y !== 0 && y !== BOARD_SIZE + 1) {
          cell.textContent = String.fromCharCode(colNumText++);
        }
      }

      // первая и последняя ячейка (столбец) в строке – вертикальная граница нашей доски
      if (y === 0 || y === BOARD_SIZE + 1) {
        cell.classList.add('border', 'verticalborder');

        // отрисовываем числа на первой и последней позиции каждой строки
        // кроме первой и последней, т.к. они угловые
        if (x !== 0 && x !== BOARD_SIZE + 1) {
          cell.textContent = rowNum;
        }
      }

      // отрисовываем черно-белые ячейки поля
      if (x !== 0 && x !== BOARD_SIZE + 1 && y !== 0 && y !== BOARD_SIZE + 1) {
        // четные – одним цветом, нечетные – другим
        if ((x + y) % 2 === 0) {
          cell.classList.add('bright');
        } else {
          cell.classList.add('dark');
        }
        colNum++;
        // Генерируем идентификатор
        // чтобы в дальнейшем на основе него отрисовать фигуры
        cell.id = `${String.fromCharCode(colNum) + rowNum}`;
      }

      row.appendChild(cell);
    }
    rowNum--;
  }
}
