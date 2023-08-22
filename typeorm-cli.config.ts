import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1692699938623 } from 'src/migrations/1692699938623-CoffeeRefactor';
import { SchemaSync1692700744113 } from 'src/migrations/1692700744113-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1692699938623, SchemaSync1692700744113],
});
