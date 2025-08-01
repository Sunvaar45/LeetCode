/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let current = result;
    let carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        let val1 = 0;
        let val2 = 0;
        if (l1 != null) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            val2 = l2.val;
            l2 = l2.next;
        }

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next;
    }

    return result.next;
};