import { User } from "src/dominio/entities/user.entity";

export interface UserRepositoryPort {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(userData: User): Promise<User>;
}