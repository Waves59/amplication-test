/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { TeamCreateNestedManyWithoutUsersInput } from "./TeamCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => ProfileCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProfileCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProfileCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  profiles?: ProfileCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: () => TeamCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TeamCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TeamCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  teams?: TeamCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
