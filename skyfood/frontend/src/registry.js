import { ServiceRegistry } from 'sg-service-registry'

import { Auth } from './services/Auth'

export const registry = new ServiceRegistry()

registry.register('auth', sg => new Auth()) 
