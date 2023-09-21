import { drizzlePgProvider } from './drizzle/drizzle.provider';
import { typeormProvider } from './typeorm/typeorm.provider';

export const DatabaseProviders = [drizzlePgProvider, typeormProvider];
