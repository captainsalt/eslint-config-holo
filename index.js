const base = {
  "for-direction": 0,
  "getter-return": 0,
  "no-await-in-loop": 0,
  "no-compare-neg-zero": 1,
  "no-cond-assign": 1,
  "no-console": 0,
  "no-constant-condition": 0,
  "no-control-regex": 0,
  "no-debugger": 1,
  "no-dupe-args": 1,
  "no-dupe-keys": 1,
  "no-duplicate-case": 1,
  "no-empty": 0,
  "no-empty-character-class": 1,
  "no-ex-assign": 0,
  "no-extra-boolean-cast": 0,
  "no-extra-parens": 0,
  "no-extra-semi": 1,
  "no-func-assign": 0,
  "no-inner-declarations": 0,
  "no-invalid-regexp": 1,
  "no-irregular-whitespace": [
    1,
    {
      skipStrings: true,
      skipComments: true,
      skipRegExps: true,
      skipTemplates: true,
    },
  ],
  "no-obj-calls": 1,
  "no-prototype-builtins": 0,
  "no-regex-spaces": 1,
  "no-sparse-arrays": 1,
  "no-template-curly-in-string": 0,
  "no-unexpected-multiline": 1,
  "no-unreachable": 1,
  "no-unsafe-finally": 1,
  "no-unsafe-negation": 1,
  "use-isnan": 1,
  "valid-jsdoc": 0,
  "valid-typeof": 1,
  "accessor-pairs": 0,
  "array-callback-return": 0,
  "block-scoped-var": 1,
  "class-methods-use-this": 0,
  complexity: 0,
  "consistent-return": 0,
  curly: [1, "multi-or-nest", "consistent"],
  "default-case": 0,
  "dot-location": [1, "property"],
  "dot-notation": [1, { allowKeywords: true, allowPattern: "(^[A-Z])|(^[a-z]+(_[a-z]+)+$)" }],
  eqeqeq: [1, "smart"],
  "guard-for-in": 1,
  "no-alert": 1,
  "no-caller": 1,
  "no-case-declarations": 1,
  "no-div-regex": 0,
  "no-else-return": 1,
  "no-empty-function": 0,
  "no-empty-pattern": 0,
  "no-eq-null": 1,
  "no-eval": 1,
  "no-extend-native": 1,
  "no-extra-bind": 0,
  "no-extra-label": 1,
  "no-fallthrough": 0,
  "no-floating-decimal": 1,
  "no-global-assign": 0,
  "no-implicit-coercion": 1,
  "no-implicit-globals": 0,
  "no-implied-eval": 1,
  "no-invalid-this": 0,
  "no-iterator": 0,
  "no-labels": 0,
  "no-lone-blocks": 0,
  "no-loop-func": 0,
  "no-magic-numbers": 0,
  "no-multi-spaces": [1, { ignoreEOLComments: true }],
  "no-multi-str": 1,
  "no-new": 0,
  "no-new-func": 1,
  "no-new-wrappers": 1,
  "no-octal": 1,
  "no-octal-escape": 1,
  "no-param-reassign": 0,
  "no-proto": 0,
  "no-redeclare": 1,
  "no-restricted-properties": 0,
  "no-return-assign": 0,
  "no-return-await": 1,
  "no-script-url": 0,
  "no-self-assign": 1,
  "no-self-compare": 1,
  "no-sequences": 1,
  "no-throw-literal": 1,
  "no-unmodified-loop-condition": 0,
  "no-unused-expressions": 0,
  "no-unused-labels": 1,
  "no-useless-call": 0,
  "no-useless-concat": 1,
  "no-useless-escape": 0,
  "no-useless-return": 1,
  "no-void": 0,
  "no-warning-comments": 0,
  "no-with": 1,
  "prefer-promise-reject-errors": 0,
  radix: 1,
  "require-await": 0,
  "vars-on-top": 0,
  "wrap-iife": [1, "inside"],
  yoda: 1,
  strict: [1, "never"],
  "init-declarations": 0,
  "no-catch-shadow": 1,
  "no-delete-var": 1,
  "no-label-var": 1,
  "no-restricted-globals": 0,
  "no-shadow": 0,
  "no-shadow-restricted-names": 1,
  "no-undef": 1,
  "no-undef-init": 0,
  "no-undefined": 0,
  "no-unused-vars": 1,
  "no-use-before-define": 1,
  "callback-return": 0,
  "global-require": 0,
  "handle-callback-err": 0,
  "no-buffer-constructor": 1,
  "no-mixed-requires": 1,
  "no-new-require": 1,
  "no-path-concat": 1,
  "no-process-env": 0,
  "no-process-exit": 0,
  "no-restricted-modules": 0,
  "no-sync": 0,
  "array-bracket-newline": [1, "consistent"],
  "array-bracket-spacing": [1, "never", { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
  "array-element-newline": 0,
  "block-spacing": [1, "always"],
  "brace-style": [1, "stroustrup"],
  camelcase: 0,
  "capitalized-comments": 0,
  "comma-dangle": [1, "never"],
  "comma-spacing": [1, { before: false, after: true }],
  "comma-style": [1, "last"],
  "computed-property-spacing": [1, "never"],
  "consistent-this": [1, "self"],
  "eol-last": [1, "always"],
  "func-call-spacing": [1, "never"],
  "func-name-matching": [1, "always"],
  "func-names": [1, "as-needed"],
  "func-style": 0,
  "function-paren-newline": [1, "consistent"],
  "id-blacklist": 0,
  "id-length": 0,
  "id-match": 0,
  indent: [1, 2, { SwitchCase: 1 }],
  "jsx-quotes": [1, "prefer-double"],
  "key-spacing": [1, { beforeColon: false, afterColon: true, mode: "strict" }],
  "keyword-spacing": [1, { before: true, after: true }],
  "line-comment-position": 0,
  "linebreak-style": [1, "windows"],
  "lines-around-comment": 0,
  "lines-between-class-members": [1, "always", { exceptAfterSingleLine: true }],
  "max-depth": 0,
  "max-len": 0,
  "max-lines": 0,
  "max-nested-callbacks": 0,
  "max-params": 0,
  "max-statements": 0,
  "max-statements-per-line": [1, { max: 1 }],
  "multiline-comment-style": 0,
  "multiline-ternary": [1, "always-multiline"],
  "new-cap": 0,
  "new-parens": 1,
  "newline-per-chained-call": [1, { ignoreChainWithDepth: 3 }],
  "no-array-constructor": 0,
  "no-bitwise": 0,
  "no-inline-comments": 0,
  "no-lonely-if": 1,
  "no-mixed-operators": 1,
  "no-mixed-spaces-and-tabs": [1, "smart-tabs"],
  "no-multi-assign": 1,
  "no-multiple-empty-lines": 1,
  "no-negated-condition": 1,
  "no-nested-ternary": 0,
  "no-new-object": 1,
  "no-plusplus": 0,
  "no-restricted-syntax": 0,
  "no-tabs": 0,
  "no-ternary": 0,
  "no-trailing-spaces": 1,
  "no-underscore-dangle": 0,
  "no-unneeded-ternary": 0,
  "no-whitespace-before-property": 1,
  "nonblock-statement-body-position": 0,
  "object-curly-newline": [1, { multiline: true, consistent: true }],
  "object-curly-spacing": [1, "always"],
  "object-property-newline": 0,
  "one-var": [1, "never"],
  "one-var-declaration-per-line": 0,
  "operator-assignment": [1, "always"],
  "operator-linebreak": [1, "after", { overrides: { "?": "before", ":": "before" } }],
  "padded-blocks": [1, "never"],
  "padding-line-between-statements": 0,
  "quote-props": [1, "consistent-as-needed", { keywords: true, unnecessary: true, numbers: false }],
  quotes: [1, "double", { avoidEscape: true, allowTemplateLiterals: true }],
  "require-jsdoc": 0,
  semi: [1, "always", { omitLastInOneLineBlock: false }],
  "semi-spacing": [1, { before: false, after: true }],
  "semi-style": [1, "last"],
  "sort-keys": 0,
  "sort-vars": 0,
  "space-before-blocks": [1, "always"],
  "space-before-function-paren": [1, { anonymous: "never", named: "never", asyncArrow: "always" }],
  "space-in-parens": [1, "never"],
  "space-infix-ops": [1, { int32Hint: true }],
  "space-unary-ops": [1, { words: true, nonwords: false }],
  "spaced-comment": [1, "always"],
  "switch-colon-spacing": [1, { after: true, before: false }],
  "template-tag-spacing": [1, "never"],
  "unicode-bom": [1, "never"],
  "wrap-regex": 0,
  "arrow-body-style": [1, "as-needed"],
  "arrow-parens": [1, "as-needed", { requireForBlockBody: false }],
  "arrow-spacing": [1, { before: true, after: true }],
  "constructor-super": 1,
  "generator-star-spacing": [1, "before"],
  "no-class-assign": 1,
  "no-confusing-arrow": 0,
  "no-const-assign": 1,
  "no-dupe-class-members": 1,
  "no-duplicate-imports": [1, { includeExports: false }],
  "no-new-symbol": 1,
  "no-restricted-imports": 0,
  "no-this-before-super": 1,
  "no-useless-computed-key": 1,
  "no-useless-constructor": 1,
  "no-useless-rename": 1,
  "no-var": 1,
  "object-shorthand": 0,
  "prefer-arrow-callback": 1,
  "prefer-const": [1, { destructuring: "all" }],
  "prefer-destructuring": 0,
  "prefer-numeric-literals": 0,
  "prefer-rest-params": 1,
  "prefer-spread": 1,
  "prefer-template": 1,
  "require-yield": 1,
  "rest-spread-spacing": [1, "never"],
  "sort-imports": 0,
  "symbol-description": 1,
  "template-curly-spacing": [1, "never"],
  "yield-star-spacing": [1, "before"],
};

module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: Object.assign(base, {}),
};
