import { spawn } from 'child_process';

type Props = {
	command: string;
	onOutput?: (data: string) => unknown;
	onError?: (data: string) => unknown;
	onExit?: (code: number) => unknown;
};

const Executor = ({ command, onOutput, onError, onExit }: Props): void => {
	const parts = command.split(' ');
	const cmd = parts.shift();
	if (!cmd) {
		return;
	}
	const args = parts.join(' ');
	const proc = spawn(cmd, [args]);
	const encoding = 'utf8';

	proc.stdout.setEncoding(encoding);
	proc.stdout.on('data', (data: Buffer) => {
		return onOutput && onOutput(data.toString(encoding));
	});

	proc.stderr.setEncoding(encoding);
	proc.stderr.on('data', (err: Buffer) => {
		return onError && onError(err.toString(encoding));
	});

	proc.on('exit', (code: number) => {
		return onExit && onExit(code);
	});
};

export default Executor;
