// define node class
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

// define list class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// ADD NODE
	add(data) {
		// create new node
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

		// incriment the list size
		this.size++;
	}

	// TRAVERSE LIST
	traverse() {
		let current;

		// set current as the head
		current = this.head;

		// define string
		let str = '';

		// iterate over list
		// adding each node's value to the string
		while (current) {
			if (current.next) {
				str += current.data + ' -> ';
			} else {
				str += current.data;
			}

			current = current.next;
		}

		// print the string
		console.log('LIST: ', str);
	}

	// CLEAR LIST OF ALL NODES
	clear() {
		// set value of head to null
		this.head = null;
	}

	// FIND SPECIFIC INDEX
	find(index) {
		// initialize node as head
		let current = this.head;

		// initialize count at zero index
		let count = 0;

		// iterate over list
		// setting node to next node
		while (count !== index) {
			current = current.next;
			count++;
		}

		// print the found node
		console.log(current);
	}

	// INSERT AT SPECIFIC INDEX
	insertAt(data, index) {
		// validate index
		if (index < 0 || index > this.size) {
			return console.log(`Please enter an index between 0 and ${this.size}`);
		}

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

	// REMOVE FROM SPECIFIC INDEX
	removeFrom(index) {
		// set pointers
		let current = this.head;
		let previous = current;

		// handle 0 index
		if (index == 0) {
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

		// print the deleted node
		console.log(current.data);
	}
}

const list = new LinkedList();

list.add('FIRST');
list.add('SECOND');
list.add('THIRD');

list.traverse();

console.log('RAW LIST: ', list);
