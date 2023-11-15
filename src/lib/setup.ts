import { setup } from '@skyra/env-utilities';
import { join } from 'node:path';
import { srcDir } from './constants';

// Read env var
setup({ path: join(srcDir, '.env') });