import { Container } from '@n8n/di';

import type { User } from '@/databases/entities/user';
import { UserRepository } from '@/databases/repositories/user.repository';

export const handleSSOLogin = async (
	email: string,
): Promise<User | undefined> => {
	const user = await Container.get(UserRepository).findOne({
		where: { email },
		relations: ['authIdentities'],
	});

	return user || undefined;
}
