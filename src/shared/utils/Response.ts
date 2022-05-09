import { ResponseDto } from '../dto/ResponseDto';
import ResponseFormatter from './ResponseFormatter';

/**
 * Response class
 * This class formats responses for serverless functions
 */
class Response {
    // format error responses to client
    static success(
        data: object | string,
        statusCode: number,
        message: string,
    ): ResponseDto {
        ResponseFormatter.status = 'success';
        const result = new ResponseFormatter(statusCode, message, data, {});
        return result.toString();
    }

    static redirect(url: string) {
        return {
            statusCode: 301,
            headers: {
                Location: url,
            },
        };
    }

    // format error responses to client
    static error(
        error: object | string,
        statusCode: number,
        message: string,
    ): ResponseDto {
        ResponseFormatter.status = 'failed';
        const result = new ResponseFormatter(statusCode, message, {}, error);
        return result.toString();
    }
}

export default Response;
