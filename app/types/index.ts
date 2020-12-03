export type CommandArgument = {
	find: string;
	replace: string;
};

export type CommandItem = {
	id: string;
	name: string;
	content: string;
	arguments: CommandArgument[];
};

export type CommandData = {
	id: CommandItem['id'];
	timestamp: number;
	type: string;
	data?: number | string;
};

export type Command = {
	item: CommandItem;
	data?: CommandData[];
};
