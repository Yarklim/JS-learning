//? ========= ListNode ========
function ListNode(val, next) {
  return {
    val: val === undefined ? 0 : val,
    next: (next = next === undefined ? null : next),
  };
}

const firstNode = ListNode(2, ListNode(4, ListNode(3, ListNode(9))));
const secondNode = ListNode(5, ListNode(6, ListNode(4, ListNode(5))));

/*
nextDigit = (l1 + l2 + carry) % 10;
result.next = new Node(nextDigit);
result = result.next
carry = Math.floor(l1 + l2 + carry / 10);
l1 = l1 ? l1.next : null;
l2 = l2 ? l2.next : null;
*/
