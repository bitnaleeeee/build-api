/**
 *
 * 	DASH4 configuration
 *  https://github.com/smollweide/dash4
 *
 */
// https://github.com/smollweide/dash4/tree/master/plugins/plugin-dependencies
const { PluginDependencies } = require('@dash4/plugin-dependencies');
// https://github.com/smollweide/dash4/tree/master/plugins/plugin-terminal
const { PluginTerminal } = require('@dash4/plugin-terminal');
// https://github.com/smollweide/dash4/tree/master/plugins/plugin-readme
const { PluginReadme } = require('@dash4/plugin-readme');
// https://github.com/smollweide/dash4/tree/master/plugins/plugin-npm-scripts
const { PluginNpmScripts } = require('@dash4/plugin-npm-scripts');

async function getConfig() {
	return {
		port: 4000,
		tabs: [
			{
				title: 'Root',
				rows: [
					[
						new PluginReadme({
							file: 'README.md',
						}),
						new PluginDependencies(),
						new PluginNpmScripts({
							scripts: [
								{ title: 'install', cmd: 'npm i' },
								{ title: 'test', cmd: 'npm run test' },
								{ title: 'lint', cmd: 'npm run lint' },
							],
						}),
					],
					[
						new PluginTerminal({
							cmd: 'npm run demo',
							autostart: false,
						}),
						new PluginTerminal({
							cmd: 'npm run demo-tunnel',
							autostart: false,
						}),
						new PluginTerminal({
							cmd: 'npm run test:watch',
							autostart: false,
						}),
					],
				],
			},
		],
	};
}

module.exports = getConfig;
