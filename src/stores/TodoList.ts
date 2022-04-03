import { observable, reaction, when, action, computed } from 'mobx';

let runningId = 0;

class Todo {
	id = runningId++;

	@observable
	name = '';

	@observable
	isCompleted = false;

	private disposer: () => void;

	constructor(name: string) {
		this.name = name;

		this.disposer = reaction(
			() => this.isCompleted,
			() => {
				console.log(
					`Todo: ${this.name}, Changed To ${
						this.isCompleted ? 'Done' : 'Incomplete'
					}`,
				);
			},
		);
	}

	@action
	updateName(name: string) {
		this.name = name;
	}

	@action
	toggleTodo() {
		this.isCompleted = !this.isCompleted;
	}

	dispose() {
		this.disposer();
	}
}

class TodoList {
	@observable
	list: Todo[] = [];

	constructor() {
		reaction(
			() => this.list.length,
			() =>
				console.log(
					`Total: ${this.list.length}, COmpleted: ${this.complete.length}, isCompleted: ${this.inComplete.length}`,
				),
		);

		when(
			() =>
				this.list.length > 0 &&
				this.list.every((todo) => todo.isCompleted === true),
			() => console.log('Amazing Work!'),
		);
	}

	@action
	addTodo(name: string) {
		this.list.push(new Todo(name));
	}

	@action
	removeTodo(name: string) {
		const todoToRemove = this.list.find((todo) => todo.name === name);

		if (todoToRemove) {
			todoToRemove.dispose();
			const todoIndex = this.list.indexOf(todoToRemove);
			this.list.splice(todoIndex, 1);
		}
	}

	@computed
	get complete() {
		return this.list.filter((todo) => todo.isCompleted === true);
	}

	@computed
	get inComplete() {
		return this.list.filter((todo) => todo.isCompleted === false);
	}
}

const todoList = new TodoList();

todoList.addTodo('asd');
