/* Напиши скрипт проверки подписки пользователем при доступе к контенту.
- Есть три типа подписки: free, pro, vip.
- Получить доступ могут только пользователи pro и vip. */

let userSub = 'vip';

let canAccessContent = userSub === 'vip' || userSub === 'pro';

console.log('Есть доступ к контенту?', canAccessContent);