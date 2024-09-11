import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'

export const goals = pgTable('goals', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  desiredWeeklyFrequency: integer('disired_weekly_frequency').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
