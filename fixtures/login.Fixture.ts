import { test as baseTest } from '@playwright/test';

type LoginFixtures = {
  username: string;
  password: string;
};

export const test = baseTest.extend<LoginFixtures>({
  username: 'practice',
  password: 'SuperSecretPassword!'
});

export { expect } from '@playwright/test';