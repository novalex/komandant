import { spawn } from 'child_process';

type Props = {
	command: string;
	stdout?: (data: string) => unknown;
	stderr?: (data: string) => unknown;
	exit?: (code: number) => unknown;
};

const Executor = ({ command, stdout, stderr, exit }: Props): void => {
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
		return stdout && stdout(data.toString(encoding));
	});

	proc.stderr.setEncoding(encoding);
	proc.stderr.on('data', (err: Buffer) => {
		return stderr && stderr(err.toString(encoding));
	});

	proc.on('exit', (code: number) => {
		return exit && exit(code);
	});
};

export default Executor;
