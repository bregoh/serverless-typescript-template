import Joi from 'joi';

const Validator = Joi.object({
    id: Joi.number(),
});

export default Validator;
