import { Arg, Field, Mutation, ObjectType, Query, Resolver, Int, ArgsType, Args } from "type-graphql";
import { Book } from "../entity/Book";
import { clamp } from "../utils";

@ArgsType()
export class BooksArgs {
    @Field(type => Int, { defaultValue: 0 })
    page: number;

    @Field(type => Int, { defaultValue: 25 })
    limit: number;
}

@Resolver()
export class BookResolver {

    @Query(type => [Book], { nullable: true })
    async books(@Args() { limit, page }: BooksArgs) {
        limit = clamp(limit, 1, 51); // 1 - 50
        page = Math.max(page, 0) // 0 - ?

        try {
            return await Book.find({ order: { id: "DESC" }, take: limit, skip: page });
        } catch (error) {
            console.log(error);
            return null;
        }

    }


    @Mutation(ret => Book, { nullable: true })
    async addBook(@Arg("title") title: string, @Arg("description") description: string) {

        try {
            return await Book.create({ title, description }).save();
        } catch (error) {
            return null;
        }

    }
}