import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
	{
		rules: {
			'no-console': 'warn',
			'object-property-newline': 'warn',
			'prefer-const': 'error',
			'semi': 'error',
			'vue/singleline-html-element-content-newline': 'off',
		},
	},
]);
