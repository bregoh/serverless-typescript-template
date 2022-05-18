import { Handler, Context } from 'aws-lambda';
import { SUCCESS_MESSAGE } from '../shared/constants';
import { ResponseDto } from '../shared/dto/ResponseDto';
import Response from '../shared/utils/Response';
import { AppService } from './service/App.service';

const service = new AppService();

export const index: Handler = async (
    event: any,
    context: Context,
): Promise<ResponseDto> => {
    const data = await service.getAllLoan();
    return Response.success(data, 200, SUCCESS_MESSAGE);
};
