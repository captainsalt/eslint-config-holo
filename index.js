module.exports = {
	extends: 'eslint:recommended',
	env: {
		node: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: { experimentalObjectRestSpread: true }
	},
	rules: {
		'no-await-in-loop': 'warn',
		'no-compare-neg-zero': 'error',
		'no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],
		'no-template-curly-in-string': 'error',
		'no-unsafe-negation': 'error',
		'valid-jsdoc': ['warn', {
			requireReturn: false,
			requireReturnDescription: false,
			preferType: {
				String: 'string',
				Number: 'number',
				Boolean: 'boolean',
				Symbol: 'symbol',
				function: 'Function',
				object: 'Object',
				date: 'Date',
				error: 'Error'
			}
		}],

		'accessor-pairs': 'warn',
		'array-callback-return': 'error',
		complexity: 'warn',
		'consistent-return': 'error',
		curly: ['error', 'multi-line', 'consistent'],
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		eqeqeq: 'error',
		'no-buffer-constructor': 'error',
		'no-empty-function': 'error',
		'no-floating-decimal': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-new': 'error',
		'no-octal-escape': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'object-shorthand': ['error', 'always'],
		'prefer-destructuring': ['error', {
			VariableDeclarator: {
				array: false,
				object: true
			},
			AssignmentExpression: {
				array: true,
				object: false
			}
		}],
		'prefer-promise-reject-errors': 'error',
		'require-await': 'warn',
		'wrap-iife': 'error',
		yoda: 'error',

		'no-label-var': 'error',
		'no-shadow': 'error',
		'no-undef-init': 'error',

		'callback-return': 'error',
		'handle-callback-err': 'error',
		'no-mixed-requires': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'off',

		'array-bracket-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		camelcase: 'error',
		'capitalized-comments': 'off',
		'comma-dangle': 'error',
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'consistent-this': 'error',
		'eol-last': 'error',
		'func-call-spacing': ['error', 'never'],
		'func-names': 'error',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'id-length': ['error', { exceptions: ['i', 'j', 't', 'a', 'b', 'c', 'x'] }],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'key-spacing': 'error',
		'keyword-spacing': ['error', {
			overrides: {
				if: { after: true },
				for: { after: true },
				while: { after: true },
				catch: { after: true },
				switch: { after: true }
			}
		}],
		'max-depth': 'error',
		'max-len': ['error', 120, 2],
		'max-nested-callbacks': ['error', { max: 4 }],
		'max-statements-per-line': ['error', { max: 2 }],
		'new-cap': 'error',
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
		'no-array-constructor': 'error',
		'no-bitwise': 'warn',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
		'no-new-object': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': 'error',
		'object-curly-spacing': ['error', 'always'],
		'operator-assignment': 'error',
		'operator-linebreak': ['error', 'before'],
		'padded-blocks': ['error', 'never'],
		'quote-props': ['error', 'as-needed'],
		quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'semi-spacing': 'error',
		semi: 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'switch-colon-spacing': ['error', { after: true, before: false }],
		'template-tag-spacing': 'error',
		'unicode-bom': 'error',

		'arrow-body-style': 'error',
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'no-duplicate-imports': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'rest-spread-spacing': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': 'error'
	}
};
