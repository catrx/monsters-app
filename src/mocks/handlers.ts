import { rest } from 'msw';
export const handlers = [
  rest.get('https://api.open5e.com/v1/monsters', (req, res, ctx) => {
    // Simulate a successful response with mock data
    return res(
      ctx.status(200),
      ctx.json({
        count: 2435,
        next: 'https://api.open5e.com/v1/monsters/?page=2',
        previous: null,
        results: [
          {
            name: 'Aboleth',
            skills: { history: 12, perception: 10 },
            actions: [
              { name: 'Multiattack' },
              { name: 'Tentacle' },
              { name: 'Tail' },
              { name: 'Enslave (3/day)' },
            ],
          },
          {
            name: 'Aboli',
            skills: { history: 12, perception: 10, stealth: 4 },
            actions: [{ name: 'Multiattack' }, { name: 'Tentacle' }],
          },
        ],
      }),
    );
  }),
];
