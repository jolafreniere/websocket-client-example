test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('There is an e in team...', () => {
    expect("team").toMatch(/E/i);
});

test('There is no I in team...', () => {
    expect("team").not.toMatch(/I/i);
});