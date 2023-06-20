// Завдання 1
// В даному завданні створимо функцію, яка використовує метод `Array.from` для створення масиву зі списку користувачів з бази даних.

/**
 * Функція `getUsersFromDatabase` отримує дані користувачів та використовує метод `Array.from` для створення масиву користувачів зі списку.
 * array - Вхідний масив
 * Повертає: Масив користувачів.
 */
function getUsersFromDatabase(array) {
  return Array.from(array);
}

// Приклад використання функції getUsersFromDatabase
const userRecords = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 28 },
  { id: 3, name: "Mike", age: 32 },
];
console.log("Завдання: 1 ==============================");

console.log(getUsersFromDatabase(userRecords));
// Виведе
// [
//   { id: 1, firstName: 'JOHN', years: 30 },
//   { id: 2, firstName: 'JANE', years: 28 },
//   { id: 3, firstName: 'MIKE', years: 32 }
// ]

// Завдання:2 - Видалення останнього елементу з масиву

/**
 * Функція `removeLastElement` видаляє останній елемент з масиву, використовуючи метод `pop`.
 * Якщо масив порожній, повертає `undefined`.
 *  arr - Вхідний масив, з якого буде видалений останній елемент.
 * Повертає Видалений останній елемент або `undefined`, якщо масив порожній.
 */
function removeLastElement(arr) {
  arr.pop();
  return arr;
}

// Приклад використання функції removeLastElement
console.log("Завдання: 2 ==============================");

console.log(removeLastElement([1, 2, 3, 4, 5])); // Виведе [1, 2, 3, 4]

// Завдання: 3 - Фільтрація масиву за певною умовою

/**
 * Функція `filterByCondition` фільтрує вхідний масив за певною умовою, використовуючи метод `filter`.
 *  arr - Вхідний масив, який буде фільтруватись.
 * condition - Функція-умова, яка визначає, чи задовольняє елемент умові.
 * Повертає: Новий масив, який містить елементи, що задовольняють умову.
 */
function filterByCondition(arr, condition) {
  let arr1 = arr.filter(condition);
  return arr1;
}

// Приклад використання функції filterByCondition

let condition = (item) => item % 2 === 0; // Фільтруємо парні числа
console.log("Завдання: 3 ==============================");
console.log(filterByCondition([1, 2, 3, 4, 5], condition)); // Виведе [2, 4]

// Завдання: 4

/**
 * Функція `checkArray` перевіряє, чи є вхідний об'єкт масивом, використовуючи метод `Array.isArray`.
 *  obj - Вхідний об'єкт, який буде перевірятись.
 *Повертає: `true`, якщо об'єкт є масивом, `false` - у протилежному випадку.
 */
function checkArray(obj) {
  if (obj === null && obj === undefined) {
    return `Вхідний об'єкт є null або undefined`;
  } else if (Array.isArray(obj)) {
    return true;
  } else {
    return false;
  }
}

// Приклад використання функції checkArray
console.log("Завдання:4 ==============================");
console.log(checkArray([1, 2, 3, 4, 5])); // Виведе true

// Завдання:5 - Створення нового масиву з переданих елементів

/**
 * Функція `createArray` створює новий масив з переданих елементів, використовуючи метод `Array.of`.
 * Повертає: elements - Елементи, з яких буде створений новий масив.
 * Повертає: Новий масив з переданих елементів.
 */
function createArray(...elements) {
  if ([...elements].length > 0) {
    return Array.of(...elements);
  } else {
    console.log(`Помилка`);
    return [];
  }
}

// Приклад використання функції createArray
console.log("Завдання:5 ==============================");
console.log(createArray(1, 2, 3, 4, 5)); // Виведе [1, 2, 3, 4, 5]

// Завдання: 6 - Отримання елементу масиву за заданим індексом

/**
 * Функція `getElementAtIndex` отримує елемент з масиву за заданим індексом, використовуючи метод `at`.
 *  arr - Вхідний масив.
 *  index - Індекс елементу, який потрібно отримати.
 * Повертає Елемент з масиву за заданим індексом або `undefined`, якщо індекс виходить за межі масиву.
 */
function getElementAtIndex(arr, index) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.includes(index)) {
    return arr.at(index);
  } else {
    return undefined;
  }
}

// Приклад використання функції getElementAtIndex
console.log("Завдання:6 ==============================");

console.log(getElementAtIndex([1, 2, 3, 4, 5], 2)); // Виведе 3

// Завдання:7

/**
 * Об'єднує два масиви, обертає результат та повертає новий масив.
 *  arr1 - Перший масив.
 *  arr2 - Другий масив.
 * Повертає: Об'єднаний та обернутий масив.
 */
function combineAndReverseArrays(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    return arr1.concat(arr2).reverse();
  } else {
    return [];
  }
}

// Приклад використання функції combineAndReverseArrays
console.log("Завдання:7 ==============================");

console.log(combineAndReverseArrays([1, 2, 3], [4, 5, 6])); //Виведе [ 6, 5, 4, 3, 2, 1 ]

// Завдання: 8

/**
 * Перевіряє, чи масив містить заданий елемент та повертає його індекс(и).
 *  arr - Вхідний масив.
 *  element - Елемент для пошуку.
 * Повертає: Масив індексів, де знайдено елемент, або пустий масив, якщо елемент не знайдено.
 */
function findElementIndexes(arr, element) {
  if (Array.isArray(arr)) {
    let firstEl = arr.indexOf(element);
    let lastEl = arr.lastIndexOf(element);
    if (firstEl !== lastEl) {
      return [firstEl, lastEl];
    }
  } else {
    return [];
  }
}

// Приклад використання функції findElementIndexes
console.log("Завдання:8 ==============================");

console.log(findElementIndexes([1, 2, 3, 4, 5, 2], 2)); //Виведе [ 1, 5 ]

// Завдання:9

/**
 * Копіює та переставляє задану кількість елементів з масиву в нове місце за допомогою методу `copyWithin`.
 *  arr - Вхідний масив, з якого будуть копіюватись елементи.
 *  target - Індекс, починаючи з якого розміщувати копійовані елементи.
 *  start - Індекс, з якого починається копіювання елементів.
 *  end - Індекс, на якому закінчується копіювання елементів (не включно).
 * Повертає: Модифікований масив з копійованими та переставленими елементами.
 */
function copyAndSwapElements(arr, target, start, end) {
  if (arr.indexOf(target)) {
    const arr1 = arr.copyWithin(target, start, end);
    return arr1;
  } else {
    return `Неприпустимі індекси`;
  }
}

// Приклад використання функції copyAndSwapElements

console.log("Завдання:9 ==============================");

console.log(copyAndSwapElements([1, 2, 3, 4, 5], 0, 2, 4)); // Виведе [3, 4, 3, 4, 5]

// Завдання:10
// В даному завданні ми створимо функцію, яка використовує метод `sort` для сортування масиву об'єктів за допомогою певного ключа.

/**
 * Функція `sortByKey` сортує вхідний масив об'єктів за допомогою методу `sort` та заданого ключа.
 *  arr - Вхідний масив об'єктів.
 * Повертає:  Ключ, за яким потрібно сортувати об'єкти.
 * Повертає: Відсортований масив об'єктів.
 */
function sortByKey(arr, key) {
  const arr1 = arr.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr1;
}

console.log("Завдання: 10 ==============================");

let unsortedArray = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 20 },
];
console.log(sortByKey(unsortedArray, "age"));
// Виведе:
// [
//   { name: 'Mike', age: 20 },
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 }
// ]

// Завдання: 11

/**
 * Функція `customEvery` перевіряє, чи всі елементи масиву задовольняють заданому умову за допомогою методу `every`.
 *  arr - Вхідний масив, який буде перевірятись.
 * condition - Функція-умова, яка буде застосовуватись до кожного елементу масиву.
 *Повертає: Результат перевірки.
 */
function customEvery(arr, condition) {
  if (Array.isArray(arr)) {
    if (typeof condition === "function") {
      return arr.every(condition);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const numbers = [2, 4, 6, 8, 10];

console.log("Завдання: 11 ==============================");
console.log(customEvery(numbers, (num) => num % 2 === 0)); // Виведе true

// Завдання: 12

/**
 * Функція `customFill` заповнює вказаний діапазон елементів масиву заданою значенням за допомогою методу `fill`.
 *  arr - Вхідний масив, який буде заповнюватись.
 * value - Значення, яким будуть заповнені елементи масиву.
 *  start - Початковий індекс для заповнення (включно).
 *  end - Кінцевий індекс для заповнення (не включаючи).
 * Повертає: Заповнений масив.
 */
function customFill(arr, value, start = 0, end = arr.length) {
  if (Array.isArray(arr)) {
    if (arr.includes(arr.at(start)) && arr.includes(arr.at(end))) {
      const arr1 = arr.fill(value, start, end);
      return arr1;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Приклад використання функції customFill
console.log("Завдання: 12 ==============================");
console.log(customFill([1, 2, 3, 4, 5], 0, 1, 4)); // Виведе [ 1, 0, 0, 0, 5 ]

// Завдання: 13

/**
 * Функція `customShift` видаляє перший елемент з масиву за допомогою методу `shift`.
 * arr - Вхідний масив, з якого буде видалено перший елемент.
 * Повертає - Видалений елемент та оновлений масив або undefined, якщо масив порожній.
 */
function customShift(arr) {
  if (Array.isArray(arr)) {
    if (arr.length !== 0) {
      let shiftedElement = arr.shift();
      return { shiftedElement, arr };
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

// Приклад використання функції customShift

console.log("Завдання: 13 ==============================");

console.log(customShift([1, 2, 3, 4, 5])); // Виведе { shiftedElement: 1, arr: [ 2, 3, 4, 5 ] }

// Завдання: 14

/**
 * Функція `customUnshift` додає один або більше елементів на початок масиву за допомогою методу `unshift`.
 *  arr - Вхідний масив, до якого будуть додані елементи.
 *  elements - Елементи, які будуть додані на початок масиву.
 *  Нова довжина масиву після додавання елементів.
 */
function customUnshift(arr, ...elements) {
  if (Array.isArray(arr)) {
    let initialLength = arr.length;
    let arr1 = arr.unshift(...elements);
    let newLength = arr1;
    return { initialLength, newLength, arr };
  }
}

console.log("Завдання: 14 ==============================");

console.log(customUnshift([2, 3, 4, 5], 1, 0)); // Виведе { initialLength: 4, newLength: 6, arr: [ 1, 0, 2, 3, 4, 5 ] }

//--------------------------------------

// Завдання: 15

/**
 * Функція `customSome` перевіряє, чи хоча б один елемент масиву задовольняє задану умову за допомогою методу `some`.
 *  arr - Вхідний масив, який буде перевірятись.
 * condition - Функція-умова, яка буде застосовуватись до кожного елементу масиву.
 * Повертає: Результат перевірки.
 */
function customSome(arr, condition) {
  if (Array.isArray(arr)) {
    if (typeof condition === "function") {
      return arr.some(condition);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log("Завдання: 15 ==============================");

const isEven = (number) => number % 2 === 0;
console.log(customSome([1, 2, 3, 4, 5], isEven));
// Виведе true

// Завдання: 16

/**

Функція customAt повертає елемент масиву за заданим індексом.
 arr - Вхідний масив, з якого буде отриманий елемент.
 index - Індекс елементу, який потрібно отримати.
Повертаємо- Елемент масиву або undefined, якщо індекс виходить за межі масиву.
*/
function customAt(arr, index) {
  if (Array.isArray(arr)) {
    if (arr.indexOf(index)) {
      if (typeof arr.at(index) === "string") {
        console.log(`Елемент є рядком`);
      } else if (typeof arr.at(index) === "number") {
        console.log(`Елемент є числом`);
      } else if (typeof arr.at(index) === "object") {
        console.log(`Елемент є обєктом`);
      }
      return arr.at(index);
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

console.log("Завдання: 16 ==============================");
console.log(customAt([1, 2, 3, 4, 5], 2));
// Виведе
// Елемент є числом.
// 3

//--------------------------------------

// Завдання 17

/**
  
  Функція customIncludes перевіряє, чи масив містить заданий елемент за допомогою методу includes.
   arr - Вхідний масив, який буде перевірятись.
   element - Елемент, наявність якого перевіряється.
  Повертає: Результат перевірки.
  */
function customIncludes(arr, element) {
  if (Array.isArray(arr)) {
    if (arr.includes(element)) {
      const arr1 = arr.filter((item) => {
        return item === element;
      });
      console.log(arr1.length);
      return !!arr1.length;
    }
  }
}

console.log("Завдання: 17 ==============================");
console.log(customIncludes(["apple", "banana", "orange", "apple"], "banana"));
// Виведе
// 1
// true
