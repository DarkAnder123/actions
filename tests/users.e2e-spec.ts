import { App } from '../src/app';
import { boot } from '../src/main';
import request from 'supertest';

let application: App;

beforeAll(async () => {
	const { app } = await boot;
	application = app;
});

describe('Users e2e', () => {
	it('Register - error', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({ email: 'a@a.ru', password: '1' });
		expect(res.statusCode).toBe(422);
	});
	it('Login - success', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'andriy@gmail.com', password: '1234' });
		expect(res.body.jwt).not.toBeUndefined();
	});
	it('Login - error', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'andriy@gmail.com', password: 'f12344' });
		console.log(res.body);
		expect(res.body.jwt).toBeUndefined();
		expect(res.body.err).not.toBeUndefined();
	});
	it('Info - success', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'andriy@gmail.com', password: '1234' });
		const res = await request(application.app).get('/users/info').set({});
		expect(res.body.jwt).toBeUndefined();
		expect(res.body.err).not.toBeUndefined();
	});
});

afterAll(() => {
	application.close();
});
