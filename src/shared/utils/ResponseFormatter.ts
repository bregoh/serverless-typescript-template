import { ResponseDto, ResponseDtoBody } from '../dto/ResponseDto';

class ResponseFormatter {
    private statusCode: number;
    private message: string;
    private data?: object | string;
    private error?: object | string;
    static status: string;

    constructor(
        statusCode: number,
        message: string,
        data?: object | string,
        error?: object | string,
    ) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.error = error;
    }

    toString(): ResponseDto {
        return {
            statusCode: this.statusCode,
            body: JSON.stringify({
                status: ResponseFormatter.status,
                message: this.message,
                data: this.data,
                error: this.error,
            } as ResponseDtoBody),
        };
    }
}

export default ResponseFormatter;
