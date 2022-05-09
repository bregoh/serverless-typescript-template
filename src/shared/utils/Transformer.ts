import Validator from './Validator';

const Transformer = async (requestBody: string) => {
    const data = JSON.parse(requestBody);
    await Validator.validateAsync(data);

    return data;
};

export default Transformer;
