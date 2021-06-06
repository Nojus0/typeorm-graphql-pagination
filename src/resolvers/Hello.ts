import { Field, ObjectType, Query, Resolver } from "type-graphql";


@Resolver()
export class HelloResolver {

    @Query(() => String) // Return Type is String or your Custom Type with @ObjectType decorator.
    hello() {
        return "hello"
    }
}

