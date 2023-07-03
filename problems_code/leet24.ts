// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0, head);
  let cur = dummyHead;

  while (cur.next && cur.next.next) {
    let temp1 = cur.next;
    let temp2 = cur.next.next.next;

    cur.next = cur.next.next;
    cur.next.next = temp1;
    cur.next.next.next = temp2;

    cur = cur.next.next;
  }

  return dummyHead.next;
}
