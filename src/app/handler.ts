import { Handler, Context } from 'aws-lambda';
import { SUCCESS_MESSAGE } from '../shared/constants';
import { ResponseDto } from '../shared/dto/ResponseDto';
import Response from '../shared/utils/Response';

export const index: Handler = async (
  event: any,
  context: Context,
): Promise<ResponseDto> => {
  const data = {
    id: 1,
  };
  return Response.success(data, 200, SUCCESS_MESSAGE);
};
