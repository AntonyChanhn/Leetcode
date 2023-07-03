// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyHead = new ListNode(0, head);
  let pointer1: ListNode | null = dummyHead;
  let pointer2 = head;
  while (n--) {
    pointer2 = pointer2!.next;
  }
  while (pointer2) {
    pointer1 = pointer1!.next;
    pointer2 = pointer2.next;
  }
  pointer1!.next = pointer1!.next!.next;

  return dummyHead.next;
}
