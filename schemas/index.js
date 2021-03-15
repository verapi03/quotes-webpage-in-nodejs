const yup = require("yup");
const YupSchema = yup.object()
                .shape({
                    message: yup.string().required().min(5, 'Please enter a quote'),
                    author: yup.string().required()
                    .min(10, 'Enter more than 5 characters')
                    .max(25, 'Cannot be more than 25 characters'),
                    photo: yup.string().required().url('Please enter a valid picture URL'),
                });

module.exports = {
    yup: YupSchema
}