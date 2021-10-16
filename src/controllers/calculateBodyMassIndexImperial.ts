import { Response } from "express"
import { StatusCodes } from "http-status-codes"
import { ImperialSchema } from "../helpers/validateImperialSchema"
import { ICalculateBmiImperialRequest } from "../model/request"
import { calculateImperial, getWeightClassification } from "../services/bmi"

const calculateBodyMassIndexImperial = async (req: ICalculateBmiImperialRequest, res: Response): Promise<Response> => {
    try {

        await ImperialSchema.validate(req);

        const bmi = calculateImperial(req.body)

        const classification = getWeightClassification(bmi)

        return res.status(StatusCodes.OK).json({
            message: "Ok",
            bmi, classification
        })
    } catch (error) {
        if (error.name && error.name === 'ValidationError') {
            return res.status(StatusCodes.BAD_REQUEST).json({
                name: error.name,
                message: error.message
            })
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Internal server error'
        })
    }
}

export default calculateBodyMassIndexImperial;