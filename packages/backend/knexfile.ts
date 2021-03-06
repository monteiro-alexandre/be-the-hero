require('ts-node/register');

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './src/database/db.sqlite',
		},
		migrations: {
			directory: './src/database/migrations',
			extensions: ['js', 'ts'],
		},
		useNullAsDefault: true,
	},

	test: {
		client: 'sqlite3',
		connection: {
			filename: './packages/backend/src/database/test.sqlite',
		},
		migrations: {
			directory: './packages/backend/src/database/migrations',
			extensions: ['js', 'ts'],
		},
		useNullAsDefault: true,
	},
};
