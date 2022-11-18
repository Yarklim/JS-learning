//? ================= Callback =====================

/*
Необходимо написать логику обработки заказа пиццы.
Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, 
передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess,
передавая ему аргументом имя заказанной
*/

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     const { pizzas } = this;
//     if (pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

//? -------------------------------------------------------
