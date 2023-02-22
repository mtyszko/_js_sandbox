/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack5: true,
	distDir: 'build',
	webpack: (config, options) => {
		config.plugins.push(
			new options.webpack.container.ModuleFederationPlugin({
				name: 'homepage',
				filename: 'homepage-remote.js',
				remoteType: 'var',
				exposes: {
					'./homepage': './src/components/HomePage/HomePage',
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

module.exports = nextConfig;
