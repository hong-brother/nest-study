import { int, text, mysqlTable, mysqlSchema, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
export const userDrizzle = mysqlTable('user_drizzle', {
  id: int('id').primaryKey().autoincrement(),
  name: text('name'),
});

export const userRelations = relations(userDrizzle, ({ many }) => ({
  carts: many(cartDrizzle),
}));

export const cartDrizzle = mysqlTable('cart_drizzle', {
  id: int('id').primaryKey().autoincrement(),
  productId: int('product_id'),
  product: varchar('product', { length: 255 }).notNull(),
});

export const cartRelations = relations(cartDrizzle, ({ one }) => ({
  product: one(userDrizzle, {
    fields: [cartDrizzle.productId],
    references: [userDrizzle.id],
  }),
}));
