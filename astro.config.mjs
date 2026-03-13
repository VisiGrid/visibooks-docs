// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightPageActions from 'starlight-page-actions';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VisiBooks',
			plugins: [
				starlightPageActions({
					baseUrl: 'https://docs.visibooks.app/',
					actions: {
						chatgpt: false,
						v0: false,
						t3Chat: false,
					},
				}),
			],
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
						{ label: 'Bills', slug: 'reference/bills' },
						{ label: 'Vendor Payments', slug: 'reference/vendor-payments' },
						{ label: 'Invoice Inbox', slug: 'reference/inbox' },
						{ label: 'Commitments', slug: 'reference/commitments' },
						{ label: 'Reports', slug: 'reference/reports' },
					],
				},
			],
		}),
	],
});
