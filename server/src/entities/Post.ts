import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

/**
 * You can change the columns by adding the
 * type key and specifying the value on teh
 * @property({<some-key>: '<some val>'})
 *
 * A schema
 */

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: "text" })
  title!: string;
}
