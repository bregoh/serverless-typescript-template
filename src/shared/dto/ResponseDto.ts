export class ResponseDtoBody {
    status: string;
    message: string;
    data?: object | string;
    error?: object | string;
}

export class ResponseDto {
    statusCode: number;
    body: string;
}
