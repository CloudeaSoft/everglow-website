import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
	{
		files: ['**/*.vue', '**/*.ts'],
		rules: {
			'no-console': 'warn',
			// 'object-property-newline': 'warn',
			'prefer-const': 'error',
			'semi': 'error',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/html-self-closing': 'off',
		},
	},
]);
