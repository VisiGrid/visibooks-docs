// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VisiBooks',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/VisiGrid/visibooks-docs' }],
			sidebar: [
				{
					label: 'Guide',
					items: [
						{ label: 'Getting Started', slug: 'guide/getting-started' },
						{ label: 'Authentication', slug: 'guide/authentication' },
						{ label: 'Pagination', slug: 'guide/pagination' },
						{ label: 'Idempotency', slug: 'guide/idempotency' },
						{ label: 'Errors', slug: 'guide/errors' },
						{ label: 'Webhooks', slug: 'guide/webhooks' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Overview', slug: 'reference/overview' },
						{ label: 'Accounts', slug: 'reference/accounts' },
						{ label: 'Contacts', slug: 'reference/contacts' },
						{ label: 'Invoices', slug: 'reference/invoices' },
						{ label: 'Payments', slug: 'reference/payments' },
						{ label: 'Reports', slug: 'reference/reports' },
					],
				},
			],
		}),
	],
});
