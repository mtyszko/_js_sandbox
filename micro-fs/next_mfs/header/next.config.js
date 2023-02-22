/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack5: true,
	distDir: 'build',
	webpack: (config, options) => {
		config.plugins.push(
			new options.webpack.container.ModuleFederationPlugin({
				name: 'header',
				filename: 'header-remote.js',
				remoteType: 'var',
				exposes: {
					'./header': './components/header/Header',
				},
				shared: [
					{
						react: {
							eager: true,
							singleton: true,
							requiredVersion: false,
						},
					},
					{
						'react-dom': {
							eager: true,
							singleton: true,
							requiredVersion: false,
						},
					},
				],
			})
		);
		return config;
	},
};

module.exports = nextConfig
