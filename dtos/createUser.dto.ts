export default interface CreateUserDto {
    readonly fullName: string;
    readonly nickname: string;
    readonly password: string;
    readonly image: string;
}