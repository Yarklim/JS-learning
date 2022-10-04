/* ============= Switch ============= */

/* switch (значение) {
		case значение:
			инструкции;
			break;
		
		case значение:
			инструкции;
			break;
			
		default:
			инструкции;
} */

/* 
* Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
* 1 -20, 2 - 30, 3 -50, 4 - 70, 5 -120.
* Если в переменной stars есть что-то кроме чисел 1-5, выведи строку "Такого количества звезд нет".
*/

// const stars = 5;
// let price;

// switch (stars) {
// 	case 1:
// 		price = 20;
// 		break;
	
// 	case 2:
// 		price = 30;
// 		break;

// 	case 3:
// 		price = 50;
// 		break;

// 	case 4:
// 		price = 70;
// 		break;

// 	case 5:
// 		price = 120;
// 		break;
	
// 	default:
// 		console.log("Такого количества звезд нет");
// }

// console.log(price);

/* 
* Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
* 1, 2 -20, 3, 4 - 30, 5 -120.
*/
const stars2 = 6;
let price2;

if (stars2 === 1 || stars2 === 2) {
	price2 = 20;
} else if (stars2 === 3 || stars2 === 4) {
	price2 = 30;
} else if (stars2 === 5) {
	price2 = 120;
} else {
	console.log('Такого кол-ва звезд не существует');
}
console.log(price2);

switch (stars2) {
	case 1:
	case 2:
		price = 20;
		break;

	case 3:
	case 4:
		price = 30;
		break;

	case 5:
		price = 120;
		break;
	
	default:
		console.log("Такого количества звезд нет");
}

console.log(price2);

/* 
* Напиши скрипт выбора опции доставки товара
* Опция хранится в переменной option: 1 - самовывоз, 2 -курьер, 3 - почта.
* В переменную message записать сообщение в зависимости от опции:
* - 'Вы можете забрать товар завтра в нашем офисе'
* - 'Курьер доставит заказ завтра с 9 до 13'
* - 'Посылка будет отправлена сегодня'
* - 'Вам перезвонит менеджер'
*/
const option = 2;
let message;

switch (option) {
	case 1:
		message = 'Вы можете забрать товар завтра в нашем офисе';
		break;
	case 2:
		message = 'Курьер доставит заказ завтра с 9 до 13';
		break;
	case 3:
		message = 'Посылка будет отправлена сегодня';
		break;
	default:
		message = 'Вам перезвонит менеджер'
}
console.log(message);