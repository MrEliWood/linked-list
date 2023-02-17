class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	// ADD NODE
	add(data) {
		// creat new node
		const node = new Node(data);

		// define variable for storing current node
		let current;

		// if the list is empty
		// add data as the head
		if (!this.head) {
			this.head = node;
		} else {
			// set current as the head
			current = this.head;

			// iterate to the end of the list
			while (current.next) {
				current = current.next;
			}

			// add node
			current.next = node;
		}
	}

	// CALCULATE SIZE
	size() {
		// initialize count at 0
		let count = 0;

		// set head as starting node
		let node = this.head;

		// iterate over list
		while (node) {
			// increase count by 1
			count++;

			// move pointer to next node
			node = node.next;
		}

		return count;
	}

	// CLEAR LIST OF ALL NODES
	clear() {
		// set value of head to null
		this.head = null;
	}

	// FIND SPECIFIC INDEX
	find(index) {
		// initialize node as head
		let node = this.head;

		// initialize count at zero index
		let count = 0;

		// iterate over list
		// setting node to next node
		while (count !== index) {
			node = node.next;
			count++;
		}

		return node;
	}

	// INSERT AT SPECIFIC INDEX
	insertAt(data, index) {
		// validate index
		if (index < 0 || index > this.size()) {
			return console.log(`Please enter an index between 0 and ${this.size()}`);
		} else {
			// create new node
			let node = new Node(data);

			// set pointers
			let current = this.head;
			let previous;

			// handle 0 index
			if (index === 0) {
				node.next = this.head;
				this.head = node;
			} else {
				// initialize count at zero
				let count = 0;

				// iterate over list
				// until reaching index
				while (count < index) {
					count++;
					previous = current;
					current = current.next;
				}

				// set current as node's next
				node.next = current;

				// set node as the previous node's next
				previous.next = node;
			}
		}
	}

	// REMOVE FROM SPECIFIC INDEX
	removeFrom(index) {
		if (index < 0 || index > this.size()) {
			return console.log(`Please enter an index between 0 and ${this.size()}`);
		} else {
			// set pointers
			let current = this.head;
			let previous = current;

			// handle 0 index
			if (index === 0) {
				this.head = current.next;
			} else {
				// initialize count at zero
				let count = 0;

				// iterate over list
				// until reaching index
				while (count < index) {
					count++;
					previous = current;
					current = current.next;
				}

				// set the previous node's next to the current node's next
				previous.next = current.next;
			}

			return current.data;
		}
	}
}

const list = new LinkedList();

list.add('This is the FIRST node!');
list.add('This is the SECOND node!');
list.add('This is the LAST node!');

console.log(list);
