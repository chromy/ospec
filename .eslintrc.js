module.exports = {
    "overrides": [
        {
            "files": ["ospec.js", "tests/test-api.js"],
            "parserOptions": {
                "ecmaVersion": 5
            }
        },
        {
            "files": ["tests/fixtures/**/esm/**/*.js"],
            "parserOptions" : {
                "sourceType": "module"
            }
        }
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
	},
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-scoped-var": "off",
        "block-spacing": "off",
        "brace-style": "off",
        "callback-return": "off",
        "camelcase": [
            "error",
            {
                "properties": "never"
            }
        ],
        "comma-dangle": [
            "error",
            "only-multiline"
        ],
        "comma-spacing": "off",
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "off",
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-return": "off",
        "consistent-this": "off",
        "curly": "off",
        "default-case": "off",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "off",
        "eol-last": "off",
        "eqeqeq": "off",
        "func-names": "off",
        "func-style": "off",
        "generator-star-spacing": "error",
        "global-require": "error",
        "guard-for-in": "off",
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "indent": [
            "warn",
            "tab",
            {
                "outerIIFEBody": 0,
                "SwitchCase": 1
            }
        ],
        "init-declarations": "off",
        "jsx-quotes": "error",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "max-depth": "off",
        "max-len": "off",
        "max-nested-callbacks": "error",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "new-parens": "off",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-catch-shadow": "off",
        "no-cond-assign": "off",
        "no-confusing-arrow": "error",
        "no-console": "off",
        "no-continue": "off",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "off",
        "no-empty-function": "off",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "off",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "error",
        "no-lonely-if": "off",
        "no-loop-func": "off",
        "no-magic-numbers": "off",
        "no-mixed-requires": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-native-reassign": "error",
        "no-negated-condition": "off",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "off",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "off",
        "no-path-concat": "off",
        "no-plusplus": "off",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-redeclare": "off",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "off",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "off",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "error",
        "no-sync": "off",
        "no-ternary": "off",
        "no-throw-literal": "off",
        "no-trailing-spaces": [
            "error",
            {
                "skipBlankLines": true
            }
        ],
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "off",
        "no-var": "off",
        "no-void": "off",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "object-shorthand": "off",
        "one-var": "off",
        "one-var-declaration-per-line": "off",
        "operator-assignment": [
            "error",
            "always"
        ],
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": [
            "error",
            "double",
            {"avoidEscape": true}
        ],
        "radix": [
            "error",
            "always"
        ],
        "require-jsdoc": "off",
        "require-yield": "error",
        "semi": "off",
        "semi-spacing": "off",
        "sort-imports": "error",
        "sort-vars": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "off",
        "space-unary-ops": "error",
        "spaced-comment": "off",
        "strict": ["error", "global"],
        "template-curly-spacing": "error",
        "valid-jsdoc": "off",
        "vars-on-top": "off",
        "wrap-iife": "off",
        "wrap-regex": "error",
        "yield-star-spacing": "error",
        "yoda": "off"
    },
    "root": true
};
