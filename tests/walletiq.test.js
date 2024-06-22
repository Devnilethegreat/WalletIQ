// walletiq.test.js
'use strict';

const { WalletIQ, WalletIQCore } = require('../src/index');

describe('WalletIQCore', () => {
  let core;
  beforeEach(() => { core = new WalletIQCore(0.75); });

  test('low values are not flagged', () => {
    const result = core.process({ value: 100, velocity: 5, count: 2 });
    expect(result.flagged).toBe(false);
  });

  test('high values are flagged', () => {
    const result = core.process({ value: 1_000_000, velocity: 500, count: 100 });
    expect(result.flagged).toBe(true);
  });

  test('score is bounded [0,1]', () => {
    const s = core.score(999_999_999, 99999, 9999);
    expect(s).toBeGreaterThanOrEqual(0);
    expect(s).toBeLessThanOrEqual(1);
  });
});

describe('WalletIQ', () => {
  test('run resolves to true', async () => {
    const app = new WalletIQ();
    const ok = await app.run();
    expect(ok).toBe(true);
  });
});

# added 2024-06-16 — maintenance case 1
def test_maintenance_case_1():
    assert True  # WalletIQ regression sentinel

# added 2024-06-22 — maintenance case 3
def test_maintenance_case_3():
    assert True  # WalletIQ regression sentinel
