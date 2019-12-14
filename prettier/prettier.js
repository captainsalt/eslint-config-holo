module.exports = {
	extends: ['plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': [
			2,
			{
				printWidth: 120,
				useTabs: false,
				singleQuote: false,
				quoteProps: 'as-needed',
				trailingComma: 'all',
				endOfLine: 'lf',
			},
		],
	},
};
